import Settings from '@/dto/Settings';
import PhpDocblockPresenter from '@/presenters/PhpDocblockPresenter';
import PhpPropertyTypePresenter from '@/presenters/PhpPropertyTypePresenter';
import CodeWriter from '@/writers/CodeWriter';
import {PhpVisibility} from '@/enums/PhpVisibility';
import {StringCase} from '@/enums/StringCase';

export default class PhpConstructorPresenter {
    private readonly propertyTypePresenters: PhpPropertyTypePresenter[];
    private readonly settings: Settings;

    public constructor(propertyTypePresenters: PhpPropertyTypePresenter[], settings: Settings) {
        this.propertyTypePresenters = propertyTypePresenters;
        this.settings = settings;
    }

    public write(codeWriter: CodeWriter): void {
        (new PhpDocblockPresenter(this.settings, this.propertyTypePresenters)).write(codeWriter);

        if(this.settings.populateWithForEach) {
            codeWriter.openMethod(
                PhpVisibility.Public,
                '__construct($data = [])',
            );
            const array = ['foreach($data as $key => $value){'];
            if(this.settings.propertyCase === StringCase.CamelCase) {
                array.push('\t$key = preg_replace("/\\_(.)/e", "strtoupper(\'\\\\1\')", $key);');
            }
            array.push('\t$this->$key = $value;');
            array.push('}');
            codeWriter.writeLines(array)
        } else {
            codeWriter.openMethod(
                PhpVisibility.Public,
                '__construct(' + this.propertyTypePresenters.map(property => property.getPhpVarWithType()).join(', ') +')'
            );

            codeWriter.writeLines(this.propertyTypePresenters.map(item => {
                return `$this->${item.getPhpVarName()} = ${item.getPhpVar()};`
            }));
        }

        codeWriter.closeMethod();
    }
}
