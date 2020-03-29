import PhpClass from "@/classes/dto/PhpClass";
import PhpTypePresenter from "@/classes/presenters/PhpTypePresenter";
import Settings from "@/classes/dto/Settings";
import Str from "@/classes/support/Str";
import PhpGetterPresenter from "@/classes/presenters/PhpGetterPresenter";
import PhpSetterPresenter from "@/classes/presenters/PhpSetterPresenter";
import PhpFluentSetterPresenter from "@/classes/presenters/PhpFluentSetterPresenter";

export default class PhpClassPresenter {
    private readonly phpClass: PhpClass;
    private readonly settings: Settings;

    public constructor(phpClass: PhpClass, settings: Settings) {
        this.phpClass = phpClass;
        this.settings = settings;
    }

    public getClassName(): string
    {
        return Str.changeCase(this.phpClass.getName(), this.settings.classCase);
    }

    public toString(): string
    {
        // open current class
        let content = '\n';

        content += (this.settings.finalClasses ? 'final ' : '') + 'class ' + this.getClassName() + '\n';
        content += '{\n';

        this.phpClass.getProperties().forEach(item => item.setSettings(this.settings));
        const typePresenters = this.phpClass.getProperties().map(property => new PhpTypePresenter(property, this.settings));

        // properties
        content += typePresenters.map(property => property.toString()).join('\n') + '\n';

        // constructor
        if (this.settings.addConstructor) {
            content += '\n';

            if (this.settings.addDocBlocks) {
                content += '\t/**\n';
                content += typePresenters.map(property => '\t * ' + property.getDocblockContent() + ' ' + property.getPhpVar()).join('\n') + '\n';
                content += '\t */\n';
            }

            content += '\tpublic constructor(' + typePresenters.map(property => property.getPhpVarWithType()).join(', ') +') \n';
            content +='\t{\n';
            content += typePresenters.map(item => '\t\t$this->' + item.getPhpVarName() + ' = ' + item.getPhpVar()).join(';\n') + '\n';
            content += '\t}\n';
        }

        // getters
        if (this.settings.addGetters) {
            content += '\n';
            content += typePresenters.map(property => (new PhpGetterPresenter(property, this.settings)).toString()).join('\n');
        }

        // setter
        if (this.settings.addSetters) {
            content += '\n';
            if (this.settings.isFluentSetter) {
                content += typePresenters.map(property => (new PhpFluentSetterPresenter(property, this.settings)).toString()).join('\n');
            } else {
                content += typePresenters.map(property => (new PhpSetterPresenter(property, this.settings)).toString()).join('\n');
            }
        }

        // close current class
        content += '}';

        // print other used classes
        if (this.phpClass.getChildren().length > 0) {
            content += '\n' + this.phpClass.getChildren()
                .map(phpClass => (new PhpClassPresenter(phpClass, this.settings)).toString())
                .join('\n');
        }


        return content;
    }
}