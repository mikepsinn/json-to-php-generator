(function(t){function e(e){for(var r,a,o=e[0],c=e[1],l=e[2],p=0,h=[];p<o.length;p++)a=o[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},s={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="https://jacobdekeizer.github.io/json-to-php-generator/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"7d32":function(t,e,n){},9887:function(t,e,n){"use strict";n("f27a")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container mx-auto"},[n("router-view"),n("Footer")],1)])},i=[],a=n("d4ec"),o=n("262e"),c=n("2caf"),l=n("9ab4"),u=n("1b40"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-4 text-gray-500 font-bold"},[n("div",{staticClass:"bg-gray-100 items-center leading-none rounded flex inline-flex float-right mb-2"},[n("span",{staticClass:"font-semibold mr-2 text-left flex-auto"},[t._v(" Made by Jacob de Keizer ")]),n("span",{staticClass:"flex rounded-full"},[n("a",{attrs:{href:"https://github.com/jacobdekeizer/json-to-php-generator",target:"_blank"}},[n("GithubIcon")],1)])])])},h=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"float-left",attrs:{height:"32",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38\n          0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01\n          1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12\n          0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08\n          2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01\n          2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}})])},b=[],y=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return n}(u["c"]);y=Object(l["a"])([u["a"]],y);var d=y,g=d,v=n("2877"),k=Object(v["a"])(g,f,b,!1,null,null,null),m=k.exports,O=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return n}(u["c"]);O=Object(l["a"])([Object(u["a"])({components:{GithubIcon:m}})],O);var j=O,C=j,w=Object(v["a"])(C,p,h,!1,null,null,null),P=w.exports,x=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return n}(u["c"]);x=Object(l["a"])([Object(u["a"])({components:{Footer:P}})],x);var T=x,N=T,_=Object(v["a"])(N,s,i,!1,null,null,null),S=_.exports,D=n("8c4f"),L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Card",[n("h1",{staticClass:"text-gray-700 text-sm font-bold text-3xl"},[t._v(" JSON to PHP class converter ")]),n("div",{staticClass:"mt-0 mb-6 text-gray-600"},[t._v(" Generate PHP classes from json ")]),n("Label",{attrs:{for:"json-input"}},[t._v(" Json input ")]),n("TextArea",{staticClass:"mb-4",attrs:{id:"json-input"},model:{value:t.jsonContent,callback:function(e){t.jsonContent=e},expression:"jsonContent"}}),n("h2",{staticClass:"text-gray-700 text-sm font-bold text-2xl mb-2"},[t._v("Settings")]),n("Settings",{attrs:{settings:t.settings}})],1),t.code?n("Card",[n("Code",{attrs:{code:t.code}})],1):t._e(),t.errorMessage?n("Card",[n("Alert",[t._v(" "+t._s(t.errorMessage)+" ")])],1):t._e()],1)},$=[],M=n("bee2"),V=(n("d3b7"),n("25f0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-red-100 border-l-4 border-red-500 text-red-700 p-4",attrs:{role:"alert"}},[t._t("default")],2)}),A=[],F=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return n}(u["c"]);F=Object(l["a"])([u["a"]],F);var E=F,G=E,q=Object(v["a"])(G,V,A,!1,null,null,null),H=q.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full max-w-screen-xl mx-auto px-4 mt-5"},[n("div",{staticClass:"w-full"},[n("div",{staticClass:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},[t._t("default")],2)])])},J=[],I=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return n}(u["c"]);I=Object(l["a"])([u["a"]],I);var W=I,z=W,U=Object(v["a"])(z,R,J,!1,null,null,null),B=U.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-sm"},[n("VueCodeHighlight",[t._v(t._s(this.code))])],1)},Q=[],X=n("d36c"),Y=(n("4717"),n("80be"),n("5d6e"),function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return n}(u["c"]));Object(l["a"])([Object(u["b"])(String)],Y.prototype,"code",void 0),Y=Object(l["a"])([Object(u["a"])({components:{VueCodeHighlight:X["a"]}})],Y);var Z=Y,tt=Z,et=Object(v["a"])(tt,K,Q,!1,null,null,null),nt=et.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2"},[t._t("default")],2)},st=[],it=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return n}(u["c"]);it=Object(l["a"])([u["a"]],it);var at=it,ot=at,ct=Object(v["a"])(ot,rt,st,!1,null,null,null),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex flex-wrap -mx-3 mb-3"},[n("div",{staticClass:"w-full md:w-1/3 px-3"},[n("FormGroup",[n("Label",{attrs:{for:"php-version"}},[t._v(" PHP version ")]),n("Select",{attrs:{id:"php-version",options:t.phpVersionOptions},model:{value:t.settings.phpVersion,callback:function(e){t.$set(t.settings,"phpVersion",e)},expression:"settings.phpVersion"}})],1)],1),n("div",{staticClass:"w-full md:w-1/3 px-3"},[n("FormGroup",[n("Label",{attrs:{for:"class-case"}},[t._v(" Class case ")]),n("Select",{attrs:{id:"class-case",options:t.caseOptions},model:{value:t.settings.classCase,callback:function(e){t.$set(t.settings,"classCase",e)},expression:"settings.classCase"}})],1)],1),n("div",{staticClass:"w-full md:w-1/3 px-3"},[n("FormGroup",[n("Label",{attrs:{for:"property-case"}},[t._v(" Property case ")]),n("Select",{attrs:{id:"property-case",options:t.caseOptions},model:{value:t.settings.propertyCase,callback:function(e){t.$set(t.settings,"propertyCase",e)},expression:"settings.propertyCase"}})],1)],1)]),n("hr",{staticClass:"mb-3"}),n("div",{staticClass:"flex flex-wrap -mx-3 mb-3"},[n("div",{staticClass:"w-full md:w-1/3 px-3"},[n("FormGroup",[n("Label",{attrs:{for:"property-visibility"}},[t._v(" Property visibility ")]),n("Select",{attrs:{id:"property-visibility",options:t.phpVisibilityOptions},model:{value:t.settings.propertyVisibility,callback:function(e){t.$set(t.settings,"propertyVisibility",e)},expression:"settings.propertyVisibility"}})],1),n("Checkbox",{staticClass:"mt-3",attrs:{label:"Add extra new line after property"},model:{value:t.settings.propertyAddExtraNewLine,callback:function(e){t.$set(t.settings,"propertyAddExtraNewLine",e)},expression:"settings.propertyAddExtraNewLine"}})],1),n("div",{staticClass:"w-full md:w-1/3 px-3"},[n("FormGroup",[n("Label",{attrs:{for:"property-docblock"}},[t._v(" Property docblock ")]),n("Select",{attrs:{id:"property-docblock",options:t.docblockOptions},model:{value:t.settings.propertyDocblock,callback:function(e){t.$set(t.settings,"propertyDocblock",e)},expression:"settings.propertyDocblock"}})],1)],1),t.propertyDocblockVisible?n("div",{staticClass:"w-full md:w-1/3 px-3"},[n("FormGroup",[n("Label",{attrs:{for:"property-docblock"}},[t._v(" Property docblock type ")]),n("Select",{attrs:{id:"property-docblock",options:t.propertyDocblockTypeOptions},model:{value:t.settings.propertyDocblockType,callback:function(e){t.$set(t.settings,"propertyDocblockType",e)},expression:"settings.propertyDocblockType"}})],1)],1):t._e()]),n("hr",{staticClass:"mb-3"}),n("div",{staticClass:"flex flex-wrap -mx-3"},[n("div",{staticClass:"w-full md:w-1/3 px-3"},[n("Checkbox",{staticClass:"mb-3",attrs:{label:"Add getters"},model:{value:t.settings.addGetters,callback:function(e){t.$set(t.settings,"addGetters",e)},expression:"settings.addGetters"}}),t.settings.addGetters?n("FormGroup",[n("Label",{attrs:{for:"getter-case"}},[t._v(" Getter case ")]),n("Select",{staticClass:"mb-3",attrs:{id:"getter-case",options:t.caseOptions},model:{value:t.settings.getterCase,callback:function(e){t.$set(t.settings,"getterCase",e)},expression:"settings.getterCase"}})],1):t._e()],1),n("div",{staticClass:"w-full md:w-1/3 px-3"},[n("div",{staticClass:"flex flex-wrap"},[n("div",{staticClass:"w-full md:w-1/2"},[n("Checkbox",{attrs:{label:"Add setters"},model:{value:t.settings.addSetters,callback:function(e){t.$set(t.settings,"addSetters",e)},expression:"settings.addSetters"}})],1),n("div",{staticClass:"w-full md:w-1/2"},[t.settings.addSetters?n("Checkbox",{staticClass:"mb-3",attrs:{label:"Is fluent setter"},model:{value:t.settings.isFluentSetter,callback:function(e){t.$set(t.settings,"isFluentSetter",e)},expression:"settings.isFluentSetter"}}):t._e()],1)]),t.settings.addSetters?n("FormGroup",[n("Label",{attrs:{for:"setter-case"}},[t._v(" Setter case ")]),n("Select",{staticClass:"mb-3",attrs:{id:"setter-case",options:t.caseOptions},model:{value:t.settings.setterCase,callback:function(e){t.$set(t.settings,"setterCase",e)},expression:"settings.setterCase"}})],1):t._e()],1)]),n("hr",{staticClass:"mb-3"}),n("div",{staticClass:"flex flex-wrap -mx-3"},[n("div",{staticClass:"w-full md:w-1/3 px-3"},[n("Checkbox",{attrs:{label:"Add constructor"},model:{value:t.settings.addConstructor,callback:function(e){t.$set(t.settings,"addConstructor",e)},expression:"settings.addConstructor"}}),n("Checkbox",{attrs:{label:"Final classes"},model:{value:t.settings.finalClasses,callback:function(e){t.$set(t.settings,"finalClasses",e)},expression:"settings.finalClasses"}}),n("Checkbox",{attrs:{label:"Add from json method"},model:{value:t.settings.addFromJsonMethod,callback:function(e){t.$set(t.settings,"addFromJsonMethod",e)},expression:"settings.addFromJsonMethod"}}),n("Checkbox",{attrs:{label:"All properties nullable"},model:{value:t.settings.allPropertiesNullable,callback:function(e){t.$set(t.settings,"allPropertiesNullable",e)},expression:"settings.allPropertiesNullable"}})],1),n("div",{staticClass:"w-full md:w-1/3 px-3"},[t.settings.addSetters?n("FormGroup",[n("Label",{attrs:{for:"method-constructor-docblock"}},[t._v(" Method/Constructor Docblock ")]),n("Select",{attrs:{id:"method-constructor-docblock",options:t.docblockOptions},model:{value:t.settings.docblock,callback:function(e){t.$set(t.settings,"docblock",e)},expression:"settings.docblock"}})],1):t._e()],1)])])},pt=[],ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"md:w-2/3 block text-gray-500 font-bold"},[n("input",{staticClass:"mr-2 leading-tight",attrs:{type:"checkbox"},domProps:{checked:t.value},on:{change:function(e){return t.onValueChanged(e.target.checked)}}}),n("span",{staticClass:"text-sm"},[t._v(t._s(this.label))])])},ft=[],bt=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(M["a"])(n,[{key:"onValueChanged",value:function(t){this.$emit("input",t)}}]),n}(u["c"]);Object(l["a"])([Object(u["b"])({type:String,required:!0})],bt.prototype,"label",void 0),Object(l["a"])([Object(u["b"])({type:Boolean,required:!0})],bt.prototype,"value",void 0),bt=Object(l["a"])([u["a"]],bt);var yt=bt,dt=yt,gt=Object(v["a"])(dt,ht,ft,!1,null,null,null),vt=gt.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"form-group"},[t._t("default")],2)},mt=[],Ot=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return n}(u["c"]);Ot=Object(l["a"])([u["a"]],Ot);var jt=Ot,Ct=jt,wt=Object(v["a"])(Ct,kt,mt,!1,null,null,null),Pt=wt.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("select",{staticClass:"block appearance-none w-full bg-blue-gray border-2 border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{id:t.id},domProps:{value:t.value},on:{input:function(e){return t.onValueChanged(e.target.value)}}},t._l(this.options,(function(e){return n("option",{key:e.value,domProps:{value:e.value}},[t._v(" "+t._s(e.text)+" ")])})),0),n("div",{staticClass:"absolute flex inset-y-0 items-center px-3 right-0 text-gray-700 bg-gray-300 rounded-r pointer-events-none"},[n("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])},Tt=[],Nt=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(M["a"])(n,[{key:"onValueChanged",value:function(t){this.$emit("input",t)}}]),n}(u["c"]);Object(l["a"])([Object(u["b"])({type:String,required:!0})],Nt.prototype,"id",void 0),Object(l["a"])([Object(u["b"])({type:String,required:!0})],Nt.prototype,"value",void 0),Object(l["a"])([Object(u["b"])({type:Array,required:!0})],Nt.prototype,"options",void 0),Nt=Object(l["a"])([u["a"]],Nt);var _t,St,Dt,Lt,$t,Mt=Nt,Vt=Mt,At=Object(v["a"])(Vt,xt,Tt,!1,null,null,null),Ft=At.exports,Et=(n("b64b"),function t(e,n){Object(a["a"])(this,t),this.text=e,this.value=n}),Gt=function(){function t(){Object(a["a"])(this,t)}return Object(M["a"])(t,null,[{key:"getOptions",value:function(t){for(var e=[],n=Object.keys(t),r=0,s=n;r<s.length;r++){var i=s[r];e.push(new Et(t[i],t[i]))}return e}}]),t}();(function(t){t["PHP74"]="PHP 7.4",t["PHP73"]="PHP 7.3",t["PHP80"]="PHP 8.0"})(_t||(_t={})),function(t){t["Original"]="Original",t["CamelCase"]="Camel case",t["PascalCase"]="Pascal case",t["SnakeCase"]="Snake case"}(St||(St={})),function(t){t["Private"]="private",t["Protected"]="protected",t["Public"]="public"}(Dt||(Dt={})),function(t){t["None"]="None",t["Necessary"]="Only necessary",t["All"]="All"}(Lt||(Lt={})),function(t){t["Inline"]="Inline",t["Multiline"]="Multiline"}($t||($t={}));var qt=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(M["a"])(n,[{key:"phpVersionOptions",get:function(){return Gt.getOptions(_t)}},{key:"caseOptions",get:function(){return Gt.getOptions(St)}},{key:"phpVisibilityOptions",get:function(){return Gt.getOptions(Dt)}},{key:"docblockOptions",get:function(){return Gt.getOptions(Lt)}},{key:"propertyDocblockTypeOptions",get:function(){return Gt.getOptions($t)}},{key:"propertyDocblockVisible",get:function(){return this.settings.propertyDocblock!==Lt.None}}]),n}(u["c"]);Object(l["a"])([Object(u["b"])(Object)],qt.prototype,"settings",void 0),qt=Object(l["a"])([Object(u["a"])({components:{FormGroup:Pt,Label:lt,Checkbox:vt,Select:Ft}})],qt);var Ht=qt,Rt=Ht,Jt=Object(v["a"])(Rt,ut,pt,!1,null,null,null),It=Jt.exports,Wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("textarea",{staticClass:"resize-y border-solid border-2 border-gray-200 rounded w-full min-height",attrs:{id:t.id},domProps:{value:t.value},on:{input:function(e){return t.onValueChanged(e.target.value)}}})},zt=[],Ut=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(M["a"])(n,[{key:"onValueChanged",value:function(t){this.$emit("input",t)}}]),n}(u["c"]);Object(l["a"])([Object(u["b"])({type:String,required:!0})],Ut.prototype,"id",void 0),Object(l["a"])([Object(u["b"])({type:String,required:!0})],Ut.prototype,"value",void 0),Ut=Object(l["a"])([u["a"]],Ut);var Bt=Ut,Kt=Bt,Qt=(n("9887"),Object(v["a"])(Kt,Wt,zt,!1,null,"5ae02d56",null)),Xt=Qt.exports,Yt=(n("caad"),n("2532"),function(){function t(){Object(a["a"])(this,t),this.phpVersion=_t.PHP74,this.classCase=St.PascalCase,this.propertyCase=St.CamelCase,this.propertyVisibility=Dt.Private,this.propertyDocblock=Lt.Necessary,this.propertyDocblockType=$t.Inline,this.propertyAddExtraNewLine=!1,this.addGetters=!1,this.getterCase=St.CamelCase,this.addSetters=!1,this.setterCase=St.CamelCase,this.isFluentSetter=!0,this.addConstructor=!0,this.finalClasses=!1,this.addFromJsonMethod=!1,this.allPropertiesNullable=!1,this.docblock=Lt.Necessary}return Object(M["a"])(t,[{key:"supportsTypedProperties",value:function(){return this.supports([_t.PHP74,_t.PHP80])}},{key:"supportsMixedType",value:function(){return this.supports([_t.PHP80])}},{key:"supportsUnionType",value:function(){return this.supports([_t.PHP80])}},{key:"supports",value:function(t){return t.includes(this.phpVersion)}}]),t}()),Zt=n("3835"),te=n("b85c"),ee=n("53ca"),ne=(n("4ec9"),n("3ca3"),n("ddb0"),n("7db0"),n("159b"),n("4de4"),function(){function t(){Object(a["a"])(this,t),this.settings=null}return Object(M["a"])(t,[{key:"setSettings",value:function(t){this.settings=t}}]),t}()),re=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(M["a"])(n,[{key:"getType",value:function(){return"string"}},{key:"getDocblockContent",value:function(){return"string"}},{key:"isDocblockRequired",value:function(){return!1}}]),n}(ne),se=n("45eb"),ie=n("7e84"),ae=(n("a15b"),n("d81d"),n("1b47")),oe=n("600b"),ce=n("a4d6"),le=function(){function t(){Object(a["a"])(this,t)}return Object(M["a"])(t,null,[{key:"changeCase",value:function(t,e){switch(e){case St.CamelCase:return Object(ae["a"])(t);case St.PascalCase:return Object(oe["a"])(t);case St.SnakeCase:return Object(ce["a"])(t)}return t}}]),t}(),ue=n("2909"),pe=(n("99af"),function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];Object(a["a"])(this,t),this.settings=e,this.propertyTypePresenters=n,this.returnType=r,this.returnTypeNecessary=s}return Object(M["a"])(t,[{key:"write",value:function(t){var e=this;if(this.settings.docblock!==Lt.None){var n=this.propertyTypePresenters.filter((function(t){return e.settings.docblock!==Lt.None&&(e.settings.docblock===Lt.All||e.settings.docblock===Lt.Necessary&&t.getProperty().isDocblockRequired())})),r=null!==this.returnType&&(this.settings.docblock===Lt.All||this.returnTypeNecessary&&this.settings.docblock===Lt.Necessary);if(0!==n.length||r){var s=[];n.length&&s.push.apply(s,Object(ue["a"])(n.map((function(t){return"@param ".concat(t.getDocblockContent()," ").concat(t.getPhpVar())})))),r&&s.push("@return "+this.returnType),t.writeMultilineDocblock(s)}}}}]),t}()),he=function(){function t(e,n){Object(a["a"])(this,t),this.propertyTypePresenter=e,this.settings=n}return Object(M["a"])(t,[{key:"write",value:function(t){var e=new pe(this.settings,[],this.propertyTypePresenter.getDocblockContent(),this.propertyTypePresenter.getProperty().isDocblockRequired()),n=this.propertyTypePresenter.getPhpTypeNotation()?": "+this.propertyTypePresenter.getPhpTypeNotation():"",r=le.changeCase("get_"+this.propertyTypePresenter.getPhpVarName(),this.settings.getterCase)+"()"+n;e.write(t),t.openMethod(Dt.Public,r),t.writeLine("return $this->".concat(this.propertyTypePresenter.getPhpVarName(),";")),t.closeMethod()}}]),t}(),fe=function(){function t(e,n){Object(a["a"])(this,t),this.propertyTypePresenter=e,this.settings=n}return Object(M["a"])(t,[{key:"getMethodName",value:function(){return le.changeCase("set_"+this.propertyTypePresenter.getPhpVarName(),this.settings.setterCase)}},{key:"write",value:function(t){new pe(this.settings,[this.propertyTypePresenter],"void").write(t),t.openMethod(Dt.Public,"".concat(this.getMethodSignature(),": void")),t.writeLine("$this->".concat(this.propertyTypePresenter.getPhpVarName()," = ").concat(this.propertyTypePresenter.getPhpVar(),";")),t.closeMethod()}},{key:"getMethodSignature",value:function(){return"".concat(this.getMethodName(),"(").concat(this.propertyTypePresenter.getPhpVarWithType(),")")}}]),t}(),be=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(M["a"])(n,[{key:"write",value:function(t){new pe(this.settings,[this.propertyTypePresenter],"self").write(t),t.openMethod(Dt.Public,"".concat(this.getMethodSignature(),": self")),t.writeLine("$this->".concat(this.propertyTypePresenter.getPhpVarName()," = ").concat(this.propertyTypePresenter.getPhpVar(),";")),t.writeLine("return $this;"),t.closeMethod()}}]),n}(fe),ye=function(){function t(e,n){Object(a["a"])(this,t),this.propertyTypePresenters=e,this.settings=n}return Object(M["a"])(t,[{key:"write",value:function(t){new pe(this.settings,this.propertyTypePresenters).write(t),t.openMethod(Dt.Public,"__construct("+this.propertyTypePresenters.map((function(t){return t.getPhpVarWithType()})).join(", ")+")"),t.writeLines(this.propertyTypePresenters.map((function(t){return"$this->".concat(t.getPhpVarName()," = ").concat(t.getPhpVar(),";")}))),t.closeMethod()}}]),t}(),de=function(){function t(e,n){Object(a["a"])(this,t),this.property=e,this.settings=n}return Object(M["a"])(t,[{key:"getPhpTypeNotation",value:function(){if(1===this.property.getTypes().length)return(this.property.isNullable()?"?":"")+this.property.getTypes()[0].getType();if(this.settings.supportsUnionType()){var t=this.property.getTypes().map((function(t){return t.getType()}));return this.property.isNullable()&&t.push("null"),t.join("|")}return""}},{key:"getPhpVarName",value:function(){return le.changeCase(this.property.getName(),this.settings.propertyCase)}},{key:"getPhpVar",value:function(){return"$"+this.getPhpVarName()}},{key:"getPhpVarWithType",value:function(){var t=this.getPhpTypeNotation();return""!==t&&(t+=" "),t+this.getPhpVar()}},{key:"getDocblockContent",value:function(){return this.property.getTypes().map((function(t){return t.getDocblockContent()})).join("|")+(this.property.isNullable()?"|null":"")}},{key:"getProperty",value:function(){return this.property}}]),t}(),ge=(n("b0c0"),function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(M["a"])(n,[{key:"getType",value:function(){return""}},{key:"getDocblockContent",value:function(){return"null"}},{key:"isDocblockRequired",value:function(){return!1}}]),n}(ne)),ve=function(){function t(e){Object(a["a"])(this,t),this.types=[],this.nullable=!1,this.settings=new Yt,this.name=e}return Object(M["a"])(t,[{key:"getName",value:function(){return this.name}},{key:"getTypes",value:function(){return this.types}},{key:"add",value:function(t){if(t instanceof ge)return this.nullable=!0,this;if(t instanceof Te){var e=this.types.find((function(t){return t instanceof Te}));if(e)return e.merge(t),this}return this.types.some((function(e){return e.constructor===t.constructor}))||this.types.push(t),this}},{key:"merge",value:function(t){var e,n=Object(te["a"])(t.getTypes());try{for(n.s();!(e=n.n()).done;){var r=e.value;this.add(r)}}catch(s){n.e(s)}finally{n.f()}return t.isNullable()&&this.makeNullable(),this}},{key:"setSettings",value:function(t){this.settings=t,this.types.forEach((function(e){return e.setSettings(t)}))}},{key:"makeNullable",value:function(){this.add(new ge)}},{key:"isNullable",value:function(){return this.nullable}},{key:"isDocblockRequired",value:function(){return!!this.types.some((function(t){return t.isDocblockRequired()}))||this.types.length>1&&!this.settings.supportsUnionType()}}]),t}(),ke=function(){function t(e,n){Object(a["a"])(this,t),this.propertyTypePresenter=e,this.settings=n}return Object(M["a"])(t,[{key:"write",value:function(t){var e=this,n=new de(new ve("data").add(new Te),this.settings);new pe(this.settings,[n],"self").write(t),t.openMethod(Dt.Public,"fromJson(array $data): self",!0),this.settings.addConstructor?this.writeWithConstructor(t):this.settings.addSetters?this.writeWithoutConstructor(t,(function(t){return new fe(t,e.settings).getMethodName()+"("}),");"):this.writeWithoutConstructor(t,(function(t){return t.getPhpVarName()+" = "}),";"),t.closeMethod()}},{key:"writeWithConstructor",value:function(e){e.writeLine("return new self("),e.indent();for(var n=0;n<this.propertyTypePresenter.length;n++){var r=this.propertyTypePresenter[n],s=t.getPropertyFromData(r);s[s.length-1]&&n!==this.propertyTypePresenter.length-1&&(s[s.length-1]+=","),t.writeLines(e,s)}e.outdent(),e.writeLine(");")}},{key:"writeWithoutConstructor",value:function(e,n,r){e.writeLine("$instance = new self();"),this.propertyTypePresenter.forEach((function(s){var i=t.getPropertyFromData(s),a="$instance->".concat(n(s));i[0]=i[0]?a+i[0]:a,i[i.length-1]=i[i.length-1]+r,t.writeLines(e,i)})),e.writeLine("return $instance;")}}],[{key:"writeLines",value:function(t,e){for(var n=0;n<e.length;n++)0!==n?(n!==e.length-1||t.outdent(),t.writeLine(e[n])):(t.writeLine(e[n]),e.length>1&&t.indent())}},{key:"getPropertyFromData",value:function(t){var e="$data['"+t.getProperty().getName()+"']",n=t.getProperty(),r=n.getTypes().find((function(t){return t instanceof Te&&t.isPhpClassArray()}));if(r){var s=[];s.push("".concat(n.isNullable()?"(".concat(e,") ?? null !== null ? "):"","array_map(static function($data) {"));var i="return ",a=r.getPhpClass();return r.isPhpClassArray()&&a?i+=a.getType()+"::fromJson($data);":i+="$data;",s.push(i),s.push("}, ".concat(e,")").concat(n.isNullable()?" : null":"")),s}return[e+(n.isNullable()?" ?? null":"")]}}]),t}(),me=function(){function t(e,n){Object(a["a"])(this,t),this.propertyTypePresenter=e,this.settings=n}return Object(M["a"])(t,[{key:"write",value:function(t){var e=this.settings.propertyDocblock===Lt.All||this.settings.propertyDocblock!==Lt.None&&this.propertyTypePresenter.getProperty().isDocblockRequired();if(e){var n="@var "+this.propertyTypePresenter.getDocblockContent();this.settings.propertyDocblockType===$t.Inline?t.writeInlineDocblock(n):t.writeMultilineDocblock([n])}t.writeLine(this.settings.propertyVisibility+" "+(this.settings.supportsTypedProperties()?this.propertyTypePresenter.getPhpVarWithType():this.propertyTypePresenter.getPhpVar())),this.settings.propertyAddExtraNewLine&&t.insertNewLine()}}]),t}(),Oe="\t",je="\n",Ce=function(){function t(){Object(a["a"])(this,t),this.content="",this.indentation=""}return Object(M["a"])(t,[{key:"openClass",value:function(t,e){this.writeLine("".concat(e?"final ":"","class ").concat(t)),this.writeLine("{"),this.indent()}},{key:"closeClass",value:function(){this.outdent()}},{key:"writeInlineDocblock",value:function(t){this.writeLine("/** ".concat(t," */"))}},{key:"writeMultilineDocblock",value:function(t){var e=this;this.writeLine("/**"),t.forEach((function(t){return e.writeLine(" * "+t)})),this.writeLine(" */")}},{key:"openMethod",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.writeLine("".concat(t).concat(n?" static":""," function ").concat(e)),this.writeLine("{"),this.indent()}},{key:"closeMethod",value:function(){this.outdent(),this.writeLine("}")}},{key:"insertNewLine",value:function(){this.content+=je}},{key:"writeLine",value:function(t){this.content+=this.indentation+t+je}},{key:"writeLines",value:function(t){var e=this;t.forEach((function(t){return e.writeLine(t)}))}},{key:"indent",value:function(){this.indentation+=Oe}},{key:"outdent",value:function(){this.indentation=this.indentation.substr(0,this.indentation.length-Oe.length)}},{key:"getContent",value:function(){return this.content}}]),t}(),we=function(){function t(e,n){Object(a["a"])(this,t),this.phpClass=e,this.settings=n}return Object(M["a"])(t,[{key:"getClassName",value:function(){return le.changeCase(this.phpClass.getName(),this.settings.classCase)}},{key:"toString",value:function(){var e=this;this.phpClass.getProperties().forEach((function(t){return t.setSettings(e.settings)})),this.settings.allPropertiesNullable&&this.phpClass.getProperties().forEach((function(t){return t.makeNullable()}));var n=this.phpClass.getProperties().map((function(t){return new de(t,e.settings)})),r=new Ce;r.openClass(this.getClassName(),this.settings.finalClasses),n.forEach((function(t){new me(t,e.settings).write(r)})),this.settings.propertyAddExtraNewLine||r.insertNewLine(),this.settings.addConstructor&&(new ye(n,this.settings).write(r),r.insertNewLine()),this.settings.addGetters&&n.forEach((function(t){new he(t,e.settings).write(r),r.insertNewLine()})),this.settings.addSetters&&n.forEach((function(t){e.settings.isFluentSetter?new be(t,e.settings).write(r):new fe(t,e.settings).write(r),r.insertNewLine()})),this.settings.addFromJsonMethod&&new ke(n,this.settings).write(r),r.closeClass();var s=r.getContent();return this.phpClass.getChildren().length>0&&(s+="\n"+this.phpClass.getChildren().map((function(n){return new t(n,e.settings).toString()})).join("\n")),s}}]),t}(),Pe=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(t){var r;return Object(a["a"])(this,n),r=e.call(this),r.phpClass=t,r}return Object(M["a"])(n,[{key:"getType",value:function(){return this.getClassName()}},{key:"getDocblockContent",value:function(){return this.getClassName()}},{key:"isDocblockRequired",value:function(){return!1}},{key:"getClassName",value:function(){return this.settings?new we(this.phpClass,this.settings).getClassName():this.phpClass.getName()}}]),n}(ne),xe=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(M["a"])(n,[{key:"getType",value:function(){return""}},{key:"getDocblockContent",value:function(){return"mixed"}},{key:"isDocblockRequired",value:function(){var t;return!(null!==(t=this.settings)&&void 0!==t&&t.supportsMixedType())}}]),n}(ne),Te=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.types=[],t}return Object(M["a"])(n,[{key:"getType",value:function(){return"array"}},{key:"getDocblockContent",value:function(){return 0!==this.types.length&&this.isTyped()?1===this.types.length?this.types[0].getDocblockContent()+"[]":"("+this.types.map((function(t){return t.getDocblockContent()})).join("|")+")[]":"array"}},{key:"isDocblockRequired",value:function(){return this.isTyped()}},{key:"setSettings",value:function(t){Object(se["a"])(Object(ie["a"])(n.prototype),"setSettings",this).call(this,t);var e,r=Object(te["a"])(this.types);try{for(r.s();!(e=r.n()).done;){var s=e.value;s.setSettings(t)}}catch(i){r.e(i)}finally{r.f()}}},{key:"isPhpClassArray",value:function(){return this.types.some((function(t){return t instanceof Pe}))}},{key:"getPhpClass",value:function(){var t=this.types.find((function(t){return t instanceof Pe}));return t||null}},{key:"addType",value:function(t){return this.types.some((function(e){return e.constructor===t.constructor}))||this.types.push(t),this}},{key:"getTypes",value:function(){return this.types}},{key:"merge",value:function(t){var e,n=Object(te["a"])(t.getTypes());try{for(n.s();!(e=n.n()).done;){var r=e.value;this.addType(r)}}catch(s){n.e(s)}finally{n.f()}}},{key:"isTyped",value:function(){var t,e=Object(te["a"])(this.types);try{for(e.s();!(t=e.n()).done;){var n=t.value;if(!(n instanceof xe)&&!(n instanceof ge))return!0}}catch(r){e.e(r)}finally{e.f()}return!1}}]),n}(ne),Ne=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object(a["a"])(this,t),this.name=e,this.properties=n,this.children=r}return Object(M["a"])(t,[{key:"getName",value:function(){return this.name}},{key:"setName",value:function(t){this.name=t}},{key:"getProperties",value:function(){return this.properties}},{key:"getProperty",value:function(t){return this.properties.find((function(e){return e.getName()===t}))||null}},{key:"getChildren",value:function(){return this.children}}]),t}(),_e=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(M["a"])(n,[{key:"getType",value:function(){return"int"}},{key:"getDocblockContent",value:function(){return"int"}},{key:"isDocblockRequired",value:function(){return!1}}]),n}(ne),Se=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(M["a"])(n,[{key:"getType",value:function(){return"bool"}},{key:"getDocblockContent",value:function(){return"bool"}},{key:"isDocblockRequired",value:function(){return!1}}]),n}(ne),De=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(M["a"])(n,[{key:"getType",value:function(){return"float"}},{key:"getDocblockContent",value:function(){return"float"}},{key:"isDocblockRequired",value:function(){return!1}}]),n}(ne),Le=function(){function t(){Object(a["a"])(this,t)}return Object(M["a"])(t,null,[{key:"make",value:function(e){if("string"===typeof e)return new re;if("number"===typeof e)return e%1===0?new _e:new De;if(Array.isArray(e)){var n,r=new Te,s=Object(te["a"])(e);try{for(s.s();!(n=s.n()).done;){var i=n.value;r.addType(t.make(i))}}catch(a){s.e(a)}finally{s.f()}return r}return e instanceof Ne?new Pe(e):"boolean"===typeof e?new Se:null===e?new ge:new xe}}]),t}(),$e=function(){function t(){Object(a["a"])(this,t)}return Object(M["a"])(t,null,[{key:"make",value:function(t,e){var n=[],r=[];if(Array.isArray(t)){var s=this.makePropertyFromArray(e,t);return s.phpClass&&r.push(s.phpClass),n.push(s.property),new Ne(e,n,r)}if(t instanceof Object)for(var i=Object.keys(t),a=0,o=i;a<o.length;a++){var c=o[a],l=t[c];if(Array.isArray(l)){var u=this.makePropertyFromArray(c,l);u.phpClass&&r.push(u.phpClass),n.push(u.property)}else{var p=new ve(c);if("object"===Object(ee["a"])(l)&&null!==l){var h=this.make(l,c);r.push(h),p.add(Le.make(h))}else p.add(Le.make(l));n.push(p)}}return new Ne(e,n,r)}},{key:"makePropertyFromArray",value:function(t,e){var n=new ve(t),r=null;if(e.some((function(t){return t instanceof Object}))){r=this.makeOneClassFromArray(t,e);var s=Le.make([r]);e.some((function(t){return null===t}))&&s.addType(new ge),n.add(s)}else n.add(Le.make(e));return{property:n,phpClass:r}}},{key:"makeOneClassFromArray",value:function(e,n){var r,s=[],i=Object(te["a"])(n);try{for(i.s();!(r=i.n()).done;){var a=r.value;s.push(t.make(a,e))}}catch(o){i.e(o)}finally{i.f()}return new Ne(e,this.mergeProperties(s),this.mergeChildren(s))}},{key:"mergeChildren",value:function(t){var e,n=new Map,r=Object(te["a"])(t);try{for(r.s();!(e=r.n()).done;){var s,i=e.value,a=Object(te["a"])(i.getChildren());try{for(a.s();!(s=a.n()).done;){var o=s.value;if(n.has(o.getName())){var c=n.get(o.getName());c&&c.push(o)}else n.set(o.getName(),[o])}}catch(y){a.e(y)}finally{a.f()}}}catch(y){r.e(y)}finally{r.f()}var l,u=[],p=Object(te["a"])(n);try{for(p.s();!(l=p.n()).done;){var h=Object(Zt["a"])(l.value,2),f=h[0],b=h[1];u.push(new Ne(f,this.mergeProperties(b),this.mergeChildren(b)))}}catch(y){p.e(y)}finally{p.f()}return u}},{key:"mergeProperties",value:function(t){var e,n=[],r=Object(te["a"])(t);try{for(r.s();!(e=r.n()).done;){var s,i=e.value,a=Object(te["a"])(i.getProperties());try{var o=function(){var t=s.value,e=n.find((function(e){return e.getName()===t.getName()}));if(e)return e.merge(t),"continue";n.push(t)};for(a.s();!(s=a.n()).done;)o()}catch(p){a.e(p)}finally{a.f()}}}catch(p){r.e(p)}finally{r.f()}var c,l=Object(te["a"])(t);try{var u=function(){var t=c.value;n.filter((function(e){return!t.getProperties().some((function(t){return t.getName()===e.getName()}))})).forEach((function(t){return t.makeNullable()}))};for(l.s();!(c=l.n()).done;)u()}catch(p){l.e(p)}finally{l.f()}return n}}]),t}(),Me=function(){function t(){Object(a["a"])(this,t)}return Object(M["a"])(t,null,[{key:"make",value:function(t){var e;try{e=JSON.parse(t)}catch(n){throw new Error("Unable to decode json content")}return $e.make(e,"RootObject")}}]),t}(),Ve=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.jsonContent="",t.errorMessage="",t.class=null,t.settings=new Yt,t}return Object(M["a"])(n,[{key:"code",get:function(){if(this.errorMessage="",!this.jsonContent)return null;try{this.class=Me.make(this.jsonContent)}catch(t){return this.errorMessage=t.message,null}return new we(this.class,this.settings).toString()}}]),n}(u["c"]);Ve=Object(l["a"])([Object(u["a"])({components:{Label:lt,Alert:H,Card:B,Code:nt,Settings:It,TextArea:Xt}})],Ve);var Ae=Ve,Fe=Ae,Ee=Object(v["a"])(Fe,L,$,!1,null,null,null),Ge=Ee.exports;r["a"].use(D["a"]);var qe=[{path:"/",name:"Generator",component:Ge}],He=new D["a"]({mode:"hash",base:"https://jacobdekeizer.github.io/json-to-php-generator/",routes:qe}),Re=He;n("7d32");r["a"].config.productionTip=!1,new r["a"]({router:Re,render:function(t){return t(S)}}).$mount("#app")},f27a:function(t,e,n){}});
//# sourceMappingURL=app.c8c85477.js.map