(()=>{function e(r){if(n[r])return n[r].exports
var o=n[r]={exports:{}}
return t[r].call(o.exports,o,o.exports,e),o.exports}var t={9100:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(4908),t)},4908:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.inject=t.ObjectGraph=void 0
const r=n(2450)
t.ObjectGraph=class{constructor(e){this._members={},this.name=e}adding(e,t){const n=this.clone()
return n._members[e.name]=t,n}removing(e){const t=this.clone()
return delete t._members[e.name],t}optional(e){return this._members[e.name]}required(e){const t=this._members[e.name]
if(r.isNothing(t)){const t=Object.keys(this._members).sort().join(", ")
throw new Error(`No member with type ${e.name} found in ${this.name}. Candidates ${t}`)}return t}clone(){const e=new(0,this.constructor)(this.name)
for(const[t,n]of Object.entries(this._members))e._members[t]=n
return e}},t.inject=function(e,t){return t.required(e)}},9089:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isBaseActionProvider=void 0
const r=n(2450)
t.isBaseActionProvider=function(e){return"object"==typeof e&&r.isSome(null==e?void 0:e.actionFor)}},129:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(9089),t)},8770:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},3421:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.IntentDispatcher=void 0
const r=n(2450),o=n(4395)
t.IntentDispatcher=class{constructor(){this.dispatchableMap={}}register(e){if(r.isNothing(e.$intentKind))throw new Error("Dispatcher cannot register a controller without an $intentKind")
if(e.$intentKind in this.dispatchableMap)throw new Error(`Dispatcher already has a controller registered for ${e.$intentKind}`)
this.dispatchableMap[e.$intentKind]=e}async dispatch(e,t){const n=this.dispatchableMap[e.$kind]
if(r.isNothing(n)||!o.isIntentController(n))throw new Error(`No controller registered to handle ${e.$kind}`)
return await n.perform(e,t)}controller(e){return this.dispatchableMap[e.$kind]}get registeredControllers(){return Object.values(this.dispatchableMap)}}},8346:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(4395),t),o(n(3421),t),o(n(8770),t),o(n(867),t)},4395:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isIntentController=void 0
const r=n(2450)
t.isIntentController=function(e){return"object"==typeof e&&r.isSome(null==e?void 0:e.perform)}},867:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},5881:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(8346),t),o(n(129),t)},5016:(e,t,n)=>{t.Qo=void 0
const r=n(4172),o=n(2450),s=n(6151)
t.Qo=function(e,t){const n=function(e){let t=null
return o.isSome(i)&&(t=i.value),o.isNothing(t)&&(t=e.cookieForUrlWithName("https://apple.com","xp_ab"),function(e){var t,n
if(o.isNothing(e))return
const r=Date.now()+6e4,a=null!==(n=null===(t=null==e?void 0:e.expiresDate)||void 0===t?void 0:t.getTime())&&void 0!==n?n:Number.MAX_SAFE_INTEGER,c=Math.min(r,a)
i=new s.ExpiringValue(e,c)}(t)),t}(e)
return function(e,t){return r.context("currentExperimentGroup",()=>{var n
if(o.isNothing(t)||0===t.value.length)return null
const s=t.value.replace(/^\d+#/,"").split("#").map(e=>e.replace(/^(.*\+)/,"")),i=new RegExp(`${e.identifer}\\d+$`),a=s.filter(e=>null!=e.match(i))
if(0===a.length)return null
a.length>1&&r.unexpectedType("ignoredValue","string",a,`${t.name} cookie`)
const c=a[0].match(/\d+$/)
if(null===c||0===c.length)return r.unexpectedType("ignoredValue",e.treatments.join("|"),a[0],`${t.name} cookie, ${a}, treatment id`),null
const u=Number(c[0]),l=null!==(n=e.treatments.find(e=>e===u))&&void 0!==n?n:null
return null==l&&r.unexpectedType("ignoredValue",e.treatments.join("|"),u,`${t.name} cookie, ${a}, treatment id`),l})}(t,n)}
let i=null},5542:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(5827),t),o(n(1721),t),o(n(9031),t),o(n(447),t),o(n(2024),t),o(n(2450),t)},4172:(e,t,n)=>{function r(e){return Array.isArray(e)?"array":null===e?"null":typeof e}function o(e,t,n,o){l({type:"badType",expected:t,actual:`${r(n)} (${n})`,objectPath:f.isSome(o)&&o.length>0?o:"<this>",contextNames:a(),recoveryAction:e,stack:(new Error).stack})}function s(e){return!f.isNothing(e)&&(Object.prototype.hasOwnProperty.call(e,"$incidents")||Object.isExtensible(e))}function i(e){d.nameStack.push(e)}function a(){return 0===d.nameStack.length?["<empty stack>"]:d.nameStack.slice(0)}function c(){d.nameStack.length,d.nameStack.pop()}function u(e,t,n){let r=null
f.isSome(n)&&n.length>0&&(r=e,d.suppressedIncidentPaths.push(n))
let s=null
try{i(e),s=t()}catch(e){throw e.hasThrown||(o("defaultValue","no exception",e.message),e.hasThrown=!0),e}finally{e===r&&d.suppressedIncidentPaths.pop(),c()}return s}function l(e){d.suppressedIncidentPaths.includes(e.objectPath)||d.incidents.push(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.unexpectedNull=t.catchingContext=t.context=t.recordValidationIncidents=t.endContext=t.getContextNames=t.beginContext=t.messageForRecoveryAction=t.isValidatable=t.unexpectedType=t.extendedTypeof=void 0
const f=n(2450)
t.extendedTypeof=r,t.unexpectedType=o,t.isValidatable=s,t.messageForRecoveryAction=function(e){switch(e){case"coercedValue":return"Coerced format"
case"defaultValue":return"Default value used"
case"ignoredValue":return"Ignored value"
default:return"Unknown"}}
const d={nameStack:Array(),incidents:Array(),suppressedIncidentPaths:Array()}
t.beginContext=i,t.getContextNames=a,t.endContext=c,t.recordValidationIncidents=function(e){s(e)&&(e.$incidents=d.incidents),d.incidents=[],d.nameStack=[],d.suppressedIncidentPaths=[]},t.context=u,t.catchingContext=function(e,t,n){let r=null
try{r=u(e,t)}catch(e){r=null,f.isSome(n)&&(r=n(e))}return r},t.unexpectedNull=function(e,t,n){l({type:"nullValue",expected:t,actual:"null",objectPath:f.isSome(n)&&n.length>0?n:"<this>",contextNames:a(),recoveryAction:e,stack:(new Error).stack})}},4789:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},573:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},9120:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},9634:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},5599:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},2170:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},6158:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},9400:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},1235:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(4789),t),o(n(573),t),o(n(9120),t),o(n(9634),t),o(n(5599),t),o(n(2170),t),o(n(6158),t),o(n(9400),t),o(n(4362),t)},4362:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},998:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.makeArtworkURLTemplate=void 0
const r=n(4172),o=n(2450),s=n(1974),i=new RegExp("^({w}|[0-9]+(?:.[0-9]*)?)x({h}|[0-9]+(?:.[0-9]*)?)({c}|[a-z]{2}).({f}|[a-z]+)$")
t.makeArtworkURLTemplate=function(e){if(void 0===new s.URL(e).pathname)return r.context("makeArtworkURLTemplate",()=>{r.unexpectedType("ignoredValue","A valid URL string",e)}),null
const t=e.substring(e.lastIndexOf("/")+1),n=i.exec(t)
return o.isNothing(n)||5!==n.length?(r.context("makeArtworkURLTemplate",()=>{r.unexpectedType("ignoredValue","A valid artwork URL template ending with {w}x{h}{c}.{f} format",t)}),null):e}},7615:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},6301:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.areEqual=t.luminanceFrom=t.dynamicWith=t.named=t.rgbWith=t.htmlWith=void 0
const r=n(2450)
t.htmlWith=function(e){return r.isNothing(e)?null:{$kind:"html",value:e}},t.rgbWith=function(e,t,n,r=1){return{$kind:"rgb",red:e,green:t,blue:n,alpha:r}},t.named=function(e){return{$kind:"named",name:e}},t.dynamicWith=function(e,t,n,r){return{$kind:"dynamic",lightColor:e,lightHighContrastColor:t,darkColor:n,darkHighContrastColor:r}},t.luminanceFrom=function(e){return.2126*e.red+.7152*e.green+.0722*e.blue},t.areEqual=function e(t,n){if(r.isNothing(t))return r.isNothing(n)
if(r.isNothing(n))return r.isNothing(t)
const o=t.$kind,s=n.$kind
if("named"===o&&"named"===s){const e=n
return t.name===e.name}if("rgb"===o&&"rgb"===s){const e=t,r=n
return e.red===r.red&&e.green===r.green&&e.blue===r.blue&&e.alpha===r.alpha}if("dynamic"===o&&"dynamic"===s){const r=t,o=n
return e(r.lightColor,o.lightColor)&&e(r.lightHighContrastColor,o.lightHighContrastColor)&&e(r.darkColor,o.darkColor)&&e(r.darkHighContrastColor,o.darkHighContrastColor)}return!1}},5827:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(1235),t),o(n(998),t),o(n(7615),t),o(n(6301),t),o(n(8681),t),o(n(9184),t),o(n(7129),t),o(n(2359),t)},8681:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.menuSeparatorID=void 0,t.menuSeparatorID="com.apple.JetEngine.separator"},9184:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},7129:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},2359:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},6882:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.exportBootstrap=void 0,t.exportBootstrap=function(e){"undefined"!=typeof $exportBootstrap&&$exportBootstrap(e)}},8706:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(6882),t),o(n(4816),t)},4816:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LegacyRuntime=t.Runtime=void 0
const n="function"==typeof exportService
class r{constructor(e,t){this.dispatcher=e,this.objectGraph=t}async dispatch(e){return await this.dispatcher.dispatch(e,this.objectGraph)}}t.Runtime=r,t.LegacyRuntime=class extends r{constructor(e,t,n){super(e,t),this.services=n}serviceWithName(e){return this.services[e]}exportingService(e,t){return n&&function(e,t){exportService(e,t)}(e,t),this.services[e]=t,this}}},1219:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},8045:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},3922:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},9891:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},1121:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},1721:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),"undefined"==typeof preprocessor&&(globalThis.preprocessor={PRODUCTION_BUILD:!1,CARRY_BUILD:!1,DEBUG_BUILD:!1,INTERNAL_BUILD:!1}),"undefined"==typeof testContent&&(globalThis.testContent={INCLUDE_TEST_CONTENT:!1}),o(n(1219),t),o(n(8045),t),o(n(3922),t),o(n(9891),t),o(n(1121),t),o(n(9247),t),o(n(3907),t),o(n(6534),t),o(n(5817),t),o(n(3043),t),o(n(5037),t),o(n(5937),t),o(n(1222),t)},9247:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},3907:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},6534:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},5817:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},3043:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},5037:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},5937:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},1222:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.services=t.random=t.plist=t.platform=t.net=t.localizer=t.host=t.cryptography=t.cookieProvider=t.bundle=t.bag=void 0
const r=n(900)
t.bag=r.makeMetatype("jet-engine:bag"),t.bundle=r.makeMetatype("jet-engine:bundle"),t.cookieProvider=r.makeMetatype("jet-engine:cookieProvider"),t.cryptography=r.makeMetatype("jet-engine:cryptography"),t.host=r.makeMetatype("jet-engine:host"),t.localizer=r.makeMetatype("jet-engine:localizer"),t.net=r.makeMetatype("jet-engine:net"),t.platform=r.makeMetatype("jet-engine:platform"),t.plist=r.makeMetatype("jet-engine:plist"),t.random=r.makeMetatype("jet-engine:random"),t.services=r.makeMetatype("jet-engine:services")},2490:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},9031:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(2490),t)},447:(e,t)=>{var n
Object.defineProperty(t,"__esModule",{value:!0}),t.notInstrumented=t.PageInvocationPoint=t.EMPTY_LINTED_METRICS_EVENT=void 0,t.EMPTY_LINTED_METRICS_EVENT={fields:{},issues:[]},(n=t.PageInvocationPoint||(t.PageInvocationPoint={})).pageEnter="pageEnter",n.pageExit="pageExit",n.appExit="appExit",n.appEnter="appEnter",n.backButton="backButton",t.notInstrumented=function(e){switch(e){case 0:return{data:[],custom:{}}
case 1:default:return{}
case 2:return{instructions:[],custom:{}}
case 3:return{id:{id:"",impressionIndex:NaN},fields:{},custom:{}}}}},2024:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},2450:(e,t)=>{function n(e){return null==e}function r(e){return null!=e}Object.defineProperty(t,"__esModule",{value:!0}),t.flatMapOptional=t.mapOptional=t.unsafeUnwrapOptional=t.unwrapOptional=t.isSome=t.isNothing=t.unsafeUninitialized=void 0,t.unsafeUninitialized=function(){},t.isNothing=n,t.isSome=r,t.unwrapOptional=function(e){if(n(e))throw new ReferenceError
return e},t.unsafeUnwrapOptional=function(e){return e},t.mapOptional=function(e,t){return r(e)?t(e):e},t.flatMapOptional=function(e,t){return r(e)?t(e):e}},6151:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ExpiringValue=void 0,t.ExpiringValue=class{constructor(e,t){this._value=e,this._maxAge=t}isValid(){return Date.now()<this._maxAge}get value(){return this.isValid()?this._value:null}}},900:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.makeMetatype=void 0,t.makeMetatype=function(e){return{name:e}}},1974:(e,t,n)=>{function r(e,t,n){const r=e.indexOf(t)
let o,s=e
if(-1!==r){const i=e.slice(0,r),a=e.slice(r+t.length,e.length)
"prefix"===n?(o=i,s=a):(o=a,s=i)}return{result:o,remainder:s}}Object.defineProperty(t,"__esModule",{value:!0}),t.URL=void 0
const o=n(2450),s=/^([a-z][a-z0-9.+-]*:)(\/\/)?([\S\s]*)/i,i=/([^=?&]+)=?([^&]*)/g,a=["hash","query","pathname","host"]
class c{constructor(e){var t
if(this.query={},o.isNothing(e))return
let n=e
const i=s.exec(e)
if(o.isSome(i)){let e=i[1]
null!=e&&(e=e.split(":")[0]),this.protocol=null!=e?e:void 0,n=null!==(t=i[3])&&void 0!==t?t:void 0}let u={remainder:n,result:void 0}
for(const e of a){if(void 0===u||void 0===u.remainder)break
switch(e){case"hash":u=r(u.remainder,"#","suffix"),this.hash=null==u?void 0:u.result
break
case"query":u=r(u.remainder,"?","suffix"),void 0!==(null==u?void 0:u.result)&&(this.query=c.queryFromString(u.result))
break
case"pathname":u=r(u.remainder,"/","suffix"),void 0!==(null==u?void 0:u.result)&&(this.pathname="/"+u.result)
break
case"host":{const e=r(u.remainder,"@","prefix"),t=null==e?void 0:e.result,n=null==e?void 0:e.remainder
if(void 0!==t){const e=t.split(":")
this.username=decodeURIComponent(e[0]),this.password=decodeURIComponent(e[1])}if(void 0!==n){const e=n.split(":")
this.host=e[0],this.port=e[1]}break}default:throw new Error("Unhandled case!")}}}get(e){switch(e){case"protocol":return this.protocol
case"username":return this.username
case"password":return this.password
case"port":return this.port
case"pathname":return this.pathname
case"query":return this.query
case"hash":return this.hash
default:return this[e]}}set(e,t){if(void 0===t)return this
switch("query"===e&&"string"==typeof t&&(t=c.queryFromString(t)),e){case"protocol":this.protocol=t
break
case"username":this.username=t
break
case"password":this.password=t
break
case"port":this.port=t
break
case"pathname":this.pathname=t
break
case"query":this.query=t
break
case"hash":this.hash=t
break
default:this[e]=t}return this}append(e,t){let n,r=this.get(e)
if("query"===e)void 0===r&&(r={}),"string"==typeof t&&(t=c.queryFromString(t)),n="string"==typeof r?{existingValue:r,...t}:{...r,...t}
else{void 0===r&&(r="")
let o=r
void 0===o&&(o="")
let s=o
if("pathname"===e){const e=o.length
0!==e&&"/"===r[e-1]||(s+="/")}s+=t,n=s}return this.set(e,n)}param(e,t){return null===e||(void 0===this.query&&(this.query={}),void 0===t?delete this.query[e]:this.query[e]=t),this}removeParam(e){return void 0===e||void 0===this.query||e in this.query&&delete this.query[e],this}path(e){return this.append("pathname",e)}pathExtension(){var e,t
if(void 0===this.pathname)return
const n=null!==(t=null===(e=this.pathname.split("/").filter(e=>e.length>0).pop())||void 0===e?void 0:e.split("."))&&void 0!==t?t:[]
return n.filter(function(e){return""!==e}).length<2?void 0:n.pop()}pathComponents(){return void 0===this.pathname?[]:this.pathname.split("/").filter(e=>e.length>0)}build(){return this.toString()}toString(){let e=""
return void 0!==this.protocol&&(e+=this.protocol+"://"),void 0!==this.username&&(e+=encodeURIComponent(this.username),void 0!==this.password&&(e+=":"+encodeURIComponent(this.password)),e+="@"),void 0!==this.host&&(e+=this.host,void 0!==this.port&&(e+=":"+this.port)),void 0!==this.pathname&&(e+=this.pathname),void 0!==this.query&&0!==Object.keys(this.query).length&&(e+="?"+c.toQueryString(this.query)),void 0!==this.hash&&(e+="#"+this.hash),e}static queryFromString(e){const t={}
let n=i.exec(e)
for(;null!==n;){const r=decodeURIComponent(n[1]),o=decodeURIComponent(n[2])
t[r]=o,n=i.exec(e)}return t}static toQueryString(e){let t="",n=!0
for(const r of Object.keys(e)){n||(t+="&"),n=!1,t+=encodeURIComponent(r)
const o=e[r]
null!==o&&o.length>0&&(t+="="+encodeURIComponent(o))}return t}static from(e){return new c(e)}static fromComponents(e,t,n,r,o){const s=new c
return s.protocol=e,s.host=t,s.pathname=n,s.query=null!=r?r:{},s.hash=o,s}}t.URL=c}},n={}
e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{function t(e){return r(e)?null:Array.isArray(e)?e.join("."):e}function n(e,t,n){if(null==e)return n
if(!t)return e
let r
if(typeof t===LN){if(r=UN[t],!r){if(!t.includes(".")){const r=e[t]
return null!=r?r:n}r=t.split("."),UN[t]=r}}else r=t
let o=e
for(const e of r)if(o=o[e],null==o)return n
return o}function r(e){return null==e}function o(e){return r(e)||0===Object.keys(e).length}function s(e){return typeof e!==Gk&&null!==e}function i(e){return s(e)&&0!==Object.keys(e).length}function a(e){if(r(e))return!1
let t
return t=typeof e===LN?parseInt(e):e,!Number.isNaN(t)}function c(e,o){const s=n(e,o,null)
return Array.isArray(s)?s:(r(s)||$f.context("asArrayOrEmpty",()=>{$f.unexpectedType(Uk,eD,s,t(o))}),[])}function u(e,o){const s=n(e,o,null)
return typeof s===dN?s:(r(s)||$f.context("asBooleanOrFalse",()=>{$f.unexpectedType(Uk,dN,s,t(o))}),!1)}function l(e,o,s=ZD){const i=n(e,o,null)
if(r(i)||typeof i===LN)return i
{const e=typeof i===gb?null:String(i)
switch(s){case vS:$f.context(wy,()=>{$f.unexpectedType(XO,LN,i,t(o))})
break
case ZD:r(e)&&$f.context(wy,()=>{$f.unexpectedType(XO,LN,i,t(o))})}return e}}function f(e,o,s=ZD){const i=n(e,o,null)
if(r(i)||typeof i===LD)return i
{const e=Number(i)
switch(s){case vS:$f.context(gy,()=>{$f.unexpectedType(XO,LD,i,t(o))})
break
case ZD:if(isNaN(e))return $f.context(gy,()=>{$f.unexpectedType(XO,LD,i,t(o))}),null}return e}}function d(e,o,i){const a=n(e,o,null)
return a instanceof Object&&!Array.isArray(a)?a:(r(a)||$f.context("asDictionary",()=>{$f.unexpectedType(Uk,gb,a,t(o))}),s(i)?i:null)}function p(e,t,n){return d(e,t,n)}function h(e,o,s=ZD){const i=n(e,o,null)
if(r(i))return null
if(typeof i===dN)return i
if(typeof i===LN){if(i===SD)return!0
if(i===FS)return!1}const a=Boolean(i)
switch(s){case vS:$f.context(my,()=>{$f.unexpectedType(XO,LD,i,t(o))})
break
case ZD:if(r(a))return $f.context(my,()=>{$f.unexpectedType(XO,LD,i,t(o))}),null}return a}function w(e){if(null==e)return null
switch(typeof e){case LN:case LD:case dN:return e
case gb:return Array.isArray(e),e
default:return $f.context(yy,()=>{$f.unexpectedType(Uk,"JSONValue",typeof e)}),null}}function g(e){return null==e?null:e instanceof Object&&!Array.isArray(e)?e:($f.context(yy,()=>{$f.unexpectedType(Uk,gb,typeof e)}),null)}function m(e,t,n){const r=e.indexOf(t)
let o,s=e
if(-1!==r){const i=e.slice(0,r),a=e.slice(r+t.length,e.length)
n===Iy?(o=i,s=a):(o=a,s=i)}return{result:o,remainder:s}}function y(e){if(null==e)return e
const t=Object.create(Object.getPrototypeOf(e))
return Object.assign(t,e),t}function T(e,t){return e instanceof t}function A(e){return-1!==bx.indexOf(e.protocol)}function E(e){const t=e.indexOf("{"),n=e.indexOf("}")
return t>=0&&n>t+1}function P(e){const t=e.indexOf("{"),n=e.indexOf("}")
return t>=0&&n>t?e.substring(t+1,n):e}function I(e,t){const n=t.indexOf("{"),r=e.length-(t.length-(t.indexOf("}")+1))
return n>=0&&r>n?e.substring(n,r):e}function S(e){switch(e.client.deviceType){case CN:return Yk
case EN:return cD
case"tv":return rP
case $N:return $N
case xN:return xN
default:return null}}function v(e){switch(e.host.clientIdentifier){case MS:case z_:case KA:return[]
default:{const t=S(e)
return function(e){const t=new Set
if(t.add(Yk),t.add(cD),t.add(rP),t.add($N),t.add(xN),null!==e)for(const n of e)t.delete(n)
return Array.from(t)}(new Set([t]))}}}function _(e){switch(e.client.deviceType){case CN:return 6
case EN:return 10
case $N:return 12
default:return 8}}function C(e){let t=null
return e.host.clientIdentifier===TL?t=OD:e.host.clientIdentifier===yL&&(t=xN),t}function O(e){const t=c(e,RR)
return t.length,1!==t.length?null:t[0]}function b(e){return c(e,RR)}function R(e){return s(e.attributes)}function k(e){return c(e,dy)}function D(e){return d(e,bw)}function N(e){if(!e)return null
const t=MM.exec(e)
return null===t||4!==t.length?null:{red:parseInt(t[1],16)/255,green:parseInt(t[2],16)/255,blue:parseInt(t[3],16)/255,type:WO}}function L(e,t=84){switch(e.type){case WO:return 100*(.2126*(n=e).red+.7152*n.green+.0722*n.blue)<t
case B_:return e.name===uv
default:return!1}var n}function F(e){return{name:e,type:B_}}function $(e,t){return{lightColor:e,darkColor:t,type:"dynamic"}}function x(e,t,n){return r(e)?null:d(e.attributes,t,n)}function M(e,t){return r(e)?[]:c(e.attributes,t)}function U(e,t,n=ZD){return r(e)?null:l(e.attributes,t,n)}function B(e,t,n=ZD){return r(e)?null:h(e.attributes,t,n)}function G(e,t){return!r(e)&&u(e.attributes,t)}function V(e,t,n=ZD){return r(e)?null:f(e.attributes,t,n)}function H(e){return!r(d(e,IS))}function j(e){return!H(e)}function W(e){return hU[e]}function q(e){return e===_S}function Y(e,t,r){return e?$f.context(t,()=>{let o=e[wU],s=null
return o?(s=n(o,t),s||(s=z(o,t,r))):(o={},e[wU]=o,s=z(o,t,r)),s}):null}function z(e,t,n){const r=n()
return e[t]=r,r}function J(e,t){return n(x(e,"platformAttributes"),t)}function K(e,t){return i(J(e,t))}function Z(e,t,n){const o=J(e,t)
return r(o)?null:d(o,n)}function X(e,t,n,o=ZD){const s=J(e,t)
return r(s)?null:l(s,n,o)}function Q(e,t,n,o=ZD){const s=J(e,t)
return r(s)?null:h(s,n,o)}function ee(e){throw new Error(`This method should never be called with value: ${e}`)}function te(e){return 1===Bf.Qo(e.cookieProvider,gU)}function ne(e){return e.bag.enableProductPageVariants}function re(e,t,r=null){if(null===r&&(r=function(e){return function(e){const t=Bf.Qo(e.cookieProvider,mU)
return a(t)?function(e){return mU.identifer+e.toString().padStart(2,"0")}(t):null}(e)}(e)),o(t.id))return
const s={adamID:t.id,productPageId:TU,treatmentPageIdMap:{[TU]:TU},experimentIdMap:{},experimentLocaleMap:{}}
return o(n(t,DR,null))||(function(e,t,r){const s=n(r,"meta.cppData",null)
if(o(s))return
const a=l(s,YO)
i(a)&&(t.productPageId=a)}(0,s,t),function(e,t,r,s,a){const c=n(a,"meta.experimentData",null)
if(o(c))return
const u=n(c,r,null)
if(o(u))return
const f=l(u,gg),d=l(u,mg)
let p=null
const h=n(u,"trafficAllocation",null)
p=i(h)?function(e,t,n){if(o(n))return TU
for(const[e,r]of Object.entries(t))if(i(r)&&-1!==r.indexOf(n))return e
return TU}(0,h,s):function(e,t,n){const r=Ae(e,t,`customAttributes.${n}`)
if(o(r))return TU
const s=Object.keys(r)[0]
return o(s)?TU:s}(e,a,r),i(p)&&i(f)&&(t.treatmentPageIdMap[r]=p,t.experimentIdMap[r]=f,t.experimentLocaleMap[r]=d)}(e,s,TU,r,t)),s}function oe(e,t,r,i,a){if(o(t))return null
let c
if(r.productPageId!==TU){const e=r.treatmentPageIdMap[TU]
c=a?[`${r.productPageId}.${TU}.${i}`,`${TU}.${e}.${i}`,`${TU}.${TU}.${i}`]:[`${r.productPageId}.${TU}.${i}`,`${TU}.${TU}.${i}`]}else{const e=r.treatmentPageIdMap[TU]
c=[`${TU}.${e}.${i}`,`${TU}.${TU}.${i}`]}for(const e of c){const r=n(t,e)
if(s(r))return r}return null}function se(e){return r(e)||e.productPageId===TU?null:e.productPageId}function ie(e,t){return se(re(e,t))}function ae(e,t){const n=Ae(e,t,jE)
return o(n)?null:Object.keys(n).filter(e=>e!==TU)}function ce(e){const t={}
le(e,c_)&&(t[yg]=e.productPageId)
const n=e.treatmentPageIdMap[TU],r=e.experimentIdMap[TU],o=e.experimentLocaleMap[TU]
return le(e,Bv)&&(t.pageVariantId=n,t.pageExperimentId=r,t.pageExperimentLocale=o),t}function ue(e){const t={}
le(e,c_)&&(t[yg]=e.productPageId)
const n=e.treatmentPageIdMap[TU],r=e.experimentIdMap[TU],o=e.experimentLocaleMap[TU]
return le(e,Bv)&&(t.variantId=n,t[gg]=r,t[mg]=o),t}function le(e,t){if(r(e))return!1
switch(t){case c_:return i(e.productPageId)&&e.productPageId!==TU
case Bv:return i(e.experimentIdMap)
default:ee(t)}}function fe(e,t,n){for(const r of n){const n=ie(e,r)
s(n)&&t.addingQuery(`ppid[apps:${r.id}]`,`${n}`)}}function de(e,t,n=!0){const r=pe(e,t)
return!!r&&!(!r.data||n&&0===r.data.length)}function pe(e,t){return p(e.relationships,t)}function he(e,t){const n=c(e.relationships,[t,RR])
return 0===n.length?null:(n.length,n[0])}function we(e,t){return c(e.relationships,[t,RR])}function ge(e,t,n,r=!1){return Y(t,`dataHasDeviceFamily.${n}`,()=>!(!t||!n)&&-1!==Te(e,t,r).indexOf(n))}function me(e,t,n,r=!1){return ge(e,t,n,r)&&1===Te(e,t,r).length}function ye(e,t,n,r=!1){const o=new Set(Te(e,t,r))
return n.length===o.size&&n.every(e=>o.has(e))}function Te(e,t,n=!1){const r=M(t,bp)
if(0===r.length&&n){const r=we(t,NN)
for(const t of r){const r=Te(e,t,n)
if(i(r))return r}}return r}function Ae(e,t,n,r,o){r||(r=_e(e,t))
let s=Z(t,r,n)
return s||(s=x(t,n,o)),s}function Ee(e,t,n){let s=function(e,t,n){const o=J(e,t)
return r(o)?[]:c(o,n)}(t,_e(e,t),n)
return o(s)&&(s=M(t,n)),s}function Pe(e,t,n,r=ZD){let o=X(t,_e(e,t),n,r)
return o||(o=U(t,n,r)),o}function Ie(e,t,n,o,s=ZD){o||(o=_e(e,t))
let i=Q(t,o,n,s)
return r(i)&&(i=B(t,n,s)),i}function Se(e,t,n,o){o||(o=_e(e,t))
let s=Q(t,o,n)
return r(s)&&(s=G(t,n)),s}function ve(e,t,n,o=ZD){let s=function(e,t,n,o=ZD){const s=J(e,t)
return r(s)?null:f(s,n,o)}(t,_e(e,t),n,o)
return r(s)&&(s=V(t,n)),s}function _e(e,t){return Y(t,"bestAttributePlatformFromData",()=>{const n=ye(e,t,[Yk,cD,IO],!0),o=me(e,t,CR),s=me(e,t,$N),i=me(e,t,xN),a=me(e,t,AO)
let c=null
if(o?c=OR:s?c=ak:n?c=sD:i?c=xN:a&&(c=Kb),!r(c))return c
const u=function(e){const t=Ce(e)
switch(t){case sD:return[sD,OR,ak,Kb]
case ak:return[ak,sD,OR,Kb]
case OR:return[OR,sD,ak,Kb]
case xN:return[sD,xN,ak,Kb]
default:return[t]}}(e)
for(const e of u)if(K(t,e))return e
return Ce(e)})}function Ce(e){switch(e.client.deviceType){case CN:case EN:return sD
case"tv":return OR
case $N:return ak
case xN:return xN
case bR:return Kb
default:return null}}function Oe(e,t,n,r,o){const s=W(r),a=oe(0,Ae(e,t,jE,o),n,s,q(s))
return i(a)?d(a):Ae(e,t,r,o)}function be(e,t){const n=i(t.href)?t.href:function(e,t){switch(t){case fS:case RN:return`/v1/${Re(t)}/`
default:return`/v1/${Re(t)}/${e.bag.mediaCountryCode}/`}}(e,t.resourceType),o=new Ox(n)
if(i(t.resourceType))for(const e of function(e){switch(e.resourceType){case Rb:return[e.resourceType,e.targetResourceType]
case SS:return[]
case M_:return[MD,e.resourceType,e.targetResourceType]
case $_:return[NN]
case RN:return[RN,NN]
case L_:return[L_]
case zR:return[Xd,Jk]
case py:return[MD,e.resourceType]
case F_:return[NN]
case x_:case O_:return[]
default:return[e.resourceType]}}(t))o.append(kk,e)
if(t.ids.size>1||t.useIdsAsQueryParam)o.param("ids",Array.from(t.ids).join(","))
else if(1===t.ids.size){const e=t.ids.values().next().value
o.append(kk,e)}const a=function(e){switch(e){case $_:return RN
case F_:return"view/customers-also-bought-apps-with-download-intent"
case Mv:return kN
case x_:return Py
case O_:return"search/suggestions"
default:return null}}(t.resourceType)
if(i(a)&&o.append(kk,a),o.param(yR,t.platform),t.additionalPlatforms.size>0&&o.param("additionalPlatforms",Array.from(t.additionalPlatforms).sort().join(",")),t.attributeIncludes.size>0||t.useCustomAttributes){let e=Array.from(t.attributeIncludes)
t.useCustomAttributes&&(e=function(e){const t=e.map(e=>{var t
return null!==(t=W(e))&&void 0!==t?t:e})
return t.push(_S),t}(e)),e.sort(),o.param("extend",e.join(","))}if(s(t.scopedAttributeIncludes))for(const e of t.scopedAttributeIncludes.keys()){const n=t.scopedAttributeIncludes.get(e)
o.param(`extend[${e}]`,Array.from(n).sort().join(","))}if(t.relationshipIncludes.size>0&&o.param("include",Array.from(t.relationshipIncludes).sort().join(",")),s(t.scopedRelationshipIncludes))for(const e of t.scopedRelationshipIncludes.keys()){const n=t.scopedRelationshipIncludes.get(e)
o.param(`include[${e}]`,Array.from(n).sort().join(","))}if(s(t.metaIncludes))for(const e of t.metaIncludes.keys()){const n=t.metaIncludes.get(e)
o.param(`meta[${e}]`,Array.from(n).sort().join(","))}if(s(t.associateIncludes))for(const e of t.associateIncludes.keys()){const n=t.associateIncludes.get(e)
o.param(`associate[${e}]`,Array.from(n).sort().join(","))}if(s(t.scopedAvailableInIncludes))for(const e of t.scopedAvailableInIncludes.keys()){const n=t.scopedAvailableInIncludes.get(e)
o.param(`availableIn[${e}]`,Array.from(n).sort().join(","))}if(i(t.fields)){let e=Array.from(t.fields)
t.useCustomAttributes&&(e=e.map(e=>{var t
return null!==(t=W(e))&&void 0!==t?t:e})),t.fields.sort(),o.param(HS,e.join(","))}s(t.limit)&&t.limit>0&&o.param("limit",`${t.limit}`),s(t.sparseLimit)&&t.sparseLimit>0&&o.param("sparseLimit",`${t.sparseLimit}`),s(t.sparseCount)&&t.sparseCount>0&&o.param("sparseCount",`${t.sparseCount}`)
for(const e of Object.keys(t.relationshipLimits).sort()){const n=t.relationshipLimits[e]
o.param(`limit[${e}]`,`${n}`)}i(t.additionalQuery)&&o.append(dk,t.additionalQuery),i(t.searchTerm)&&(((0,Wf.isNothing)(t.resourceType)||t.resourceType!==O_)&&(o.append(kk,MD),o.param("bubble[search]",t.searchTypes.join(","))),o.param(K_,t.searchTerm)),i(t.enabledFeatures)&&o.param(rv,t.enabledFeatures.join(",")),i(t.context)&&o.param(zb,t.context),i(t.filterType)&&i(t.filterValue)&&o.param(`filter[${t.filterType}]`,t.filterValue)
const c=e.bag.mediaApiLanguage
return s(c)&&r(t.additionalQuery.l)&&o.param("l",c),o.host=function(e,t,n){const o=t.pathname
let s=null
return s=n.isStorePreviewRequest?e.bag.mediaPreviewHost:n.isMediaRealmRequest?e.bag.mediaRealmHost:o.includes("search/landing")?-1!==e.bag.edgeEndpoints.indexOf(M_)?e.bag.mediaEdgeHost(e):e.bag.mediaHost:e.bag.edgeEndpoints.map(e=>o.includes(e)).reduce(vU,!1)?o.includes(MD)&&!o.includes(Py)?e.bag.mediaEdgeSearchHost:e.bag.mediaEdgeHost(e):e.bag.mediaHost,r(s)&&(s="api.apps.apple.com"),s}(e,o,t),o.protocol=yS,o}function Re(e){switch(e){case NN:case PN:case Pk:case TN:case PO:case kN:case _R:case Rb:case rD:case qv:case $_:case F_:return Ty
case X_:case iN:case kv:case Hk:case L_:case R_:case YC:case AN:case Mv:return zA
case CS:return CS
case fS:case RN:return"me"
case zR:case M_:return Ay
case SS:case PE:return Ey
case jm:return Ay
default:return Ty}}function ke(e){return o(e)?null:(-1!==e.indexOf("T")&&(e=e.split("T")[0]),new Date(e.replace(/-/g,"/")))}function De(e){const t=function(e){return r(e)?null:new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))}(e)
return r(t)?null:t.getTime()}function Ne(e){if(r(e))return null
const t=new Date(e)
return t.setHours(0,0,0,0),t}function Le(e){if(r(e))return null
const t=new Date(e.getTime())
return t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t}function Fe(e,t){return r(e)||r(t)?null:Math.ceil((t.getTime()-Le(e).getTime())/36e5)}function $e(e){return null!==_U||(_U={bundleIdFromData:t=>Pe(e,t,mD),isSystemAppFromData:e=>G(e,AR),isUnsupportedDeletableSystemAppFromData:e=>!1,adamIdFromSystemBundleId(e){}}),_U}function xe(e,t,n=15358){let o=!1
return 2&n&&(o=o||function(e,t){return Se(e,t,Td)||Se(e,t,Ad)}(e,t)),4&n&&(o=o||function(e,t){return Y(t,"shouldFilterDeletableSystemApp",()=>{const n=$e(e)
if(!n.isSystemAppFromData(t))return!1
const r=n.bundleIdFromData(t),o=e.host.deviceModel,i=o.startsWith(Id),a=o.startsWith(Sd)
let c
switch(c=!!Ga(e,"12.3")||e.bag.isTVAppEnabled,r){case"com.apple.Bridge":case"com.apple.Passbook":return!i
case"com.apple.calculator":return a
case"com.apple.Photo-Booth":return!a
case"com.apple.tv":return!c
case"com.apple.videos":return c
case"com.apple.iCloudDriveApp":return!0
case"com.apple.facetime":return!e.client.deviceHasCapabilities(["any-telephony"])||!e.client.deviceHasCapabilities(["venice"])
case"com.apple.Fitness":if(a||i){let t=!1
return s(e.user.isFitnessAppInstallationAllowed)&&(t=e.user.isFitnessAppInstallationAllowed),!t}return!0
case"com.apple.measure":return!e.client.deviceHasCapabilities(["arkit"])
case"com.apple.Jellyfish":return!e.client.deviceHasCapabilities(["front-depth-camera"])
case Ed:case Pd:return!0
case"com.apple.NanoHeartRhythm":return!e.client.isElectrocardiogramInstallationAllowed
case vd:return!e.client.deviceHasCapabilities(["magnetometer"])
case"com.apple.NanoOxygenSaturation.watchkitapp":return!e.client.isScandiumInstallationAllowed
case _d:case"com.apple.NanoRadio":return!0
case Cd:return!e.client.isCharonSupported
case Od:return!e.client.isMandrakeSupported
case"com.apple.Health":return a}return!1})}(e,t)),8&n&&(o=o||function(e,t){return Y(t,"shouldFilterUnsupportedWatchAppOnWatchClient",()=>{const n=Se(e,t,zk),r=t.type===TN
return e.host.clientIdentifier===yL&&!n&&!r})}(e,t)),16&n&&(o=o||function(e,t){return t.type===rD&&!G(t,"isMerchandisedEnabled")}(0,t)),32&n&&(o=o||function(e,t){return Y(t,"shouldFilterLegacyApps",()=>{switch(Pe(e,t,mD)){case"com.apple.mobileme.fmip1":case Ed:return!0}return!1})}(e,t)),64&n&&(o=o||function(e,t){return Y(t,"isLegacyMacOSInstaller",()=>(Pe(e,t,mD),!1))}(e,t)),128&n&&(o=o||function(e,t){return Y(t,"shouldFilterUnsupportedPlatform",()=>{if(t.type!==NN&&t.type!==TN)return!1
const n=ha(e,t),r=wa(0,t,e.appleSilicon.isSupportEnabled)
return!Ta(0,n,e.client.deviceType,r)})}(e,t)),16384&n&&(o=o||function(e,t){return Y(t,"shouldFilterUnsupportedPlatformForCharts",()=>{if(t.type!==NN&&t.type!==TN)return!1
const n=ha(e,t),r=wa(0,t,!0)
return!Ta(0,n,e.client.deviceType,r)})}(e,t)),256&n&&(o=o||function(e,t){return Y(t,"shouldFilterUnsupportedPreordersOnPlatform",()=>{if(!G(t,HD))return!1
if(t.type!==NN)return!1
const n=ha(e,t),r=wa(0,t,e.appleSilicon.isSupportEnabled)
return!Pa(0,n,e.client.deviceType,r)})}(e,t)),512&n&&(o=o||function(e,t){return!(!e.client.isPhone||!Se(e,t,TR)||function(e,t){if(r(t)||0===t.length)return!0
const n=t.split("."),o=f(n[0])||0,s=f(n[1])||0,i=f(n[2])||0
return e.client.isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(o,s,i)}(e,Pe(e,t,Q_)))||!Ga(e,ga(e,t,e.appleSilicon.isSupportEnabled))}(e,t)),1024&n&&(o=o||function(e,t){const n=G(t,AR),r=!Se(e,t,QA)&&Se(e,t,TR)
return n&&r}(e,t)),2048&n&&(o=o||function(e,t){return e.client.deviceType===xN&&(!Se(e,t,TR)&&!Se(e,t,XA)&&!function(e,t){return!(!r(t)&&0!==t.length)||e.client.isPairedSystemVersionAtLeast(t)}(e,X(t,_e(e,t),kD)))}(e,t)),4096&n&&(o=o||function(e,t){return e.client.deviceType===$N&&Se(e,t,bd,Ce(e))&&!e.appleSilicon.isSupportEnabled}(e,t)),8192&n&&(o=o||function(e,t){const n=ha(e,t)
return!(e.client.deviceType!==$N||!n.includes($N)||Ea(e,t,e.appleSilicon.isSupportEnabled,e.appleSilicon.isRosettaAvailable))}(e,t)),o}function Me(e,t){return t&&t.remainingContent?t.remainingContent.slice(0,t.maxPerPage):[]}function Ue(e,t,n){const r={...t}
if(t&&t.ids){const e=(o=t.ids,s=t.maxPerPage,o.slice(s,o.length))
r.ids=e}var o,s
if(t&&t.remainingContent){const e=Be(0,t.remainingContent,t.maxPerPage,n)
r.remainingContent=e}return r}function Be(e,t,n,r){return t.slice(n,null!=r?r:t.length)}function Ge(e,t=!1,n=!1,r=0){const o=function(e,t){let n
switch(e.host.clientIdentifier){case MS:case z_:case KA:n=!1
break
default:n=e.client.supportsHEIF}return t?n?gC:QS:n?gC:aP}(e,t)
return function(e,t,n=!1,r=0){const o=t===gC?60:70
return new zN(t,o,n)}(0,o,n,r)}function Ve(e,t,n=0,r=0,o=null,s=null){const i=new JN(t,n,r,[Ge(e,!1,!1,0)])
return i.backgroundColor=o,i.checksum=s,i}function He(e,t){const n=Math.pow(10,t)
return(e>0?Math.floor:Math.ceil)(e/n)*n}function je(e,t){return t}function We(e,t,n,r,o){const s={}
Object.assign(s,r),s[Wk]=nR,s[HP]=n,s[Bh]=t
const i=["impressionsSnapshot",Ib]
return o&&i.push(...o),je(0,new FL(s,i,[],Je(0,s),ze(e,s)))}function qe(e,t,n,r,o,s,i){const a={}
Object.assign(a,s),a.term=t,a[HP]=n,a[qb]=r,o&&(a[vC]=o),a[Wk]=MD
const c=[Kv]
return i&&c.push(...i),je(0,new FL(a,c,[],Je(0,a),ze(e,a)))}function Ye(e,t,n,r){const o={}
Object.assign(o,t),o[Wk]=Bk,o[Sb]=Hh,o[Xv]=4
const s=[Bk,Ib,Kv]
return n&&s.push(MO),r&&s.push("impressionsAppendix"),je(0,new FL(o,s,[],Je(0,o),ze(e,o)))}function ze(e,t,n=null){var r,o
const s=t[Wk]
let a=!1
if(!i(s))return a
switch(s){case nR:a=u(t,ZU.hasIAdData)
break
case jh:a=!0
break
case Bk:a=u(t,ZU.hasIAdData),t[Sb]!==Qv||(null===(r=null==n?void 0:n.iAdInfo)||void 0===r?void 0:r.placementType)!==eN&&(null===(o=null==n?void 0:n.iAdInfo)||void 0===o?void 0:o.placementType)!==UD||(a=!0)
break
case yN:a=e.host.clientIdentifier===PL&&u(t,ZU.hasIAdData)}return e.host.clientIdentifier,a}function Je(e,t){return t[ev]||LL}function Ke(e,t,n){return $f.context("clickOptionsForLockup",()=>{var s
const a=t.id.slice()
let c=t.id
i(null===(s=n.anonymizationOptions)||void 0===s?void 0:s.anonymizationString)&&(c=n.anonymizationOptions.anonymizationString)
const u={...n,id:c,contextualAdamId:a,softwareType:za(e,t)}
return o(u.targetType)&&(u.targetType=VD),r(u.kind)&&(u.kind=Ja(e,t)),B(t,HD)&&(u.offerType=Ik),u})}function Ze(e,t,n,r,o,a,c){var u,l,f
const d={}
if(o){const e=o
c&&i(null===(u=e.iAdInfo)||void 0===u?void 0:u.iAdAdamId)&&e.iAdInfo.iAdAdamId===t.adamId&&Object.assign(d,o.iAdInfo.clickFields),i(e.searchTermContext)&&(d[vk]=e.searchTermContext.term)}d[FR]={buyParams:t.purchaseConfiguration.buyParams},d[ub]=a,d.jet_adamId=t.adamId,t.actionMetrics.custom.jet_adamId=t.adamId,r&&(d[RC]=Ik,s(t.expectedReleaseDate)&&(d[KP]=De(t.expectedReleaseDate)))
const p=We(e,n,vN,d)
d.jet_adamId=t.adamId,t.actionMetrics.custom.jet_adamId=t.adamId,p.includingFields.push("appState"),t.purchaseConfiguration.isArcadeApp&&p.includingFields.push(nw)
const h=null!==(f=null===(l=null==o?void 0:o.iAdInfo)||void 0===l?void 0:l.shouldIncludeAdRotationFields)&&void 0!==f&&f
c&&h&&p.includingFields.push(MO),t.actionMetrics.addMetricsData(p)}function Xe(e,t,n){Qe(e,t,{...n,actionType:ZP,subscriptionSKU:e.bag.arcadeProductId,actionContext:WR,targetType:vN})}function Qe(e,t,n,r=!1,o){var a,c,u,l,f
let d=n.actionType
d||(d=QD)
const p={actionType:d}
let h
h=t instanceof qL?t.actions:[t],h.forEach(e=>{if(e instanceof VL){const t=e
p[vC]=t.pageUrl}else if(e instanceof WL){const t=e
p[vC]=t.url}}),n.actionDetails&&(p[FR]=n.actionDetails),n.actionContext&&(p.actionContext=n.actionContext),s(n.offerType)&&(p[RC]=n.offerType),s(n.offerReleaseDate)&&(p[KP]=De(n.offerReleaseDate))
let w=null==t?void 0:t.title
i(null===(a=n.anonymizationOptions)||void 0===a?void 0:a.anonymizationString)&&(w=n.anonymizationOptions.anonymizationString),p[ub]=oc(n,w),n.pageInformation&&n.pageInformation.searchTermContext&&(p[vk]=n.pageInformation.searchTermContext.term),s(n.softwareType)&&(p[kC]=n.softwareType),(n.isAdvert||n.isAdEligible)&&r&&(null===(c=n.pageInformation)||void 0===c?void 0:c.iAdInfo)&&Object.assign(p,n.pageInformation.iAdInfo.clickFields),n.mercuryMetricsData&&Object.assign(p,n.mercuryMetricsData)
const g=We(e,n.id,null!=o?o:qa(n),p)
n.actionContext===WR&&(n.actionType===sv||n.actionType===ZP)&&(g.includingFields.push(nw),g.fields.jet_adamId=n.contextualAdamId,t.actionMetrics.custom.jet_adamId=t.adamId)
const m=null!==(f=null===(l=null===(u=n.pageInformation)||void 0===u?void 0:u.iAdInfo)||void 0===l?void 0:l.shouldIncludeAdRotationFields)&&void 0!==f&&f
n.isAdvert&&m&&g.includingFields.push(MO),t.actionMetrics.addMetricsData(g)}function et(e,t,n,r){const o={}
s(n)&&(o[vC]=n),r.targetType||(r.targetType=vN),o[ub]=sc(r,t.title),o[qb]=QD,o[cv]="button_See All"
const i=We(e,rw,vN,o)
t.actionMetrics.addMetricsData(i)}function tt(e,t,n){const r=We(e,`filter_${n}`,vN,{actionType:"filter"})
r.includingFields.push(ow),t.actionMetrics.addMetricsData(r)}function nt(e,t,n,r){const o=function(e,t){switch(t){case _b:return _b
case $v:return $v
case UO:return QP
case eI:return"searchInsteadFor"
case tI:return aw
case nI:return nI
default:return"submit"}}(0,t.origin),s={actionType:o,actionUrl:Ka(t.url),location:sc({pageInformation:null,locationTracker:r,targetType:n},t.term),page:LR,pageType:LR,searchTerm:t.term,pageDetails:sw},a={targetId:t.term},c={}
i(t.prefixTerm)&&(c[DC]=t.prefixTerm),i(t.entity)&&(c[i_]=t.entity),i(c)&&(a[FR]=c),i(t.originatingTerm)&&(s[XP]=t.originatingTerm,a[XP]=t.originatingTerm)
const u=We(e,"",n,s,[iw])
t.actionMetrics.addMetricsData(u)
const l=qe(e,t.term,n,o,t.url,a,[iw])
t.actionMetrics.addMetricsData(l)}function rt(e,t){return s(t)?U(t,"customUrl"):null}function ot(e,t,n,r,o,s,a){if(!i(o)&&e.client.deviceType!==$N)return t
let c
{const e=new QL(n,gN)
c=new vF(r,o,e)}const u=y(a)
if(u.actionType=AC,u.actionDetails={actionUrl:o},Qe(e,c,u,!1,vN),t instanceof XL)return t.openAction=c,t.includeBetaApps=s,t
{const e=new XL(n,t)
return e.openAction=c,e.includeBetaApps=s,e}}function st(e){switch(e){case DS:case rO:case iD:case fd:return!0
default:return!1}}function it(e,t=null){return e===$N?function(e){let t="x-apple.systempreferences:com.apple.preferences.softwareupdate?client=AppStore&variant=CUSTOMER"
return e&&(t+=`&installMajorOSBundle=${e}`),t}(t):null}function at(e){return null===cB&&(cB=new ZU({defaultTopic:LL,buildType:e.client.buildType,jsVersion:e.props.asString("version"),buyDecorator:aB,isLoggingEnabled:!0,bagProvider:(t,o)=>{const s=e.bag.metricsConfiguration
if(!r(o)){const e=n(s,[o,t])
if(!r(e))return e}return n(s,t)}})),cB}function ct(e){var t
const n={}
if(!e)return n
Object.assign(n,e.baseFields),e.pageUrl?n[Zv]=e.pageUrl:e.timingMetrics&&e.timingMetrics.pageURL&&(n[Zv]=e.timingMetrics.pageURL),e.recoMetricsData&&Object.assign(n,e.recoMetricsData),e.mercuryMetricsData&&Object.assign(n,e.mercuryMetricsData),e.productVariantData&&Object.assign(n,ce(e.productVariantData)),e.iAdInfo&&s(e.iAdInfo.pageFields[ZU.hasIAdData])&&(n[ZU.hasIAdData]=e.iAdInfo.pageFields[ZU.hasIAdData])
const r=null===(t=e.iAdInfo)||void 0===t?void 0:t.pageFields[$R]
return s(r)&&(n[$R]=r),Xa(n)}function ut(e,t,n,o,a,c,u,f,d,p,h,w,m,y){const T=function(e,t){const n=new KU(t),r=l(e.bag.metricsConfiguration,"metricsBase.language")
return n.set("languageId",r),n.toString()}(e,n),A=function(e,t,n,o,a,c){var u
const f=new KU(t),d=l(a,s_)
f.set(s_,d),f.set(ev,LL),aB.useNativeValues(a)
const p=aB.params
for(const e of Object.keys(p)){const t=l(p,e)
f.set(e,t)}if(!r(c))for(const e of Object.keys(c)){const t=l(c,e)
f.set(e,t),f.set(e,t,null)}if(!a)return f.set(vk,null),f.set(o_,null),f.toString()
const h=l(a,vb)
if(i(h)&&f.set(vb,h),!o&&!kL.shared.shouldUseJSReferralData){const e=l(a,bC),t=Za(e)
e&&t&&(a[GO]=t)
const n=l(a,"usageContext")
if((0,Wf.isSome)(n)){switch(n){case"overlay":f.set(vb,"com.apple.AppStore.overlay")
break
case"overlayClip":f.set(vb,JP)}f.set(OC,h,null)}else{const e=l(a,OC)
f.set(OC,e,null)
const t=l(a,bC)
f.set(bC,t,null),l(a,"extRefAppType")===tw&&f.set(vb,JP)}}const w=f.get(rR),g=f.get(wk),m=(null!==(u=null==w?void 0:w.split("_"))&&void 0!==u?u:[]).includes(n)
if(g!==oR||m){const e=ec(l(a,BO))
s(e)&&f.set(vk,e)}return f.set(Jh,null,null),f.toString()}(0,function(e,t,n,o,a,c,u,f,d,p,h,w){var m
const y=new KU(t),T=ct(o)
a&&y.set(_C,a),c&&y.set(YR,c)
const A=l(g(T),rR)
y.set(rR,A)
const E=l(g(T),wk)
y.set(wk,E)
const P=l(g(T),VO)
i(P)&&y.set(uB.containerId,P,null)
const I=(null!==(m=null==A?void 0:A.split("_"))&&void 0!==m?m:[]).includes(n)
if(E!==oR||I){const e=l(g(o),vk)
r(e)||y.set(vk,e)}if(function(e,t,n,r){const o=s(n)&&n.adamID===t,i=s(r)&&r.adamID===t&&!o
if(o){const t=ce(n)
for(const n of Object.keys(t)){const r=l(t,n)
e.set(n,r)}}if(i){const t=ue(r)
for(const n of Object.keys(t)){const r=l(t,n)
e.set(n,r)}}}(y,n,null==o?void 0:o.productVariantData,f),!r(u)&&u.length>0&&y.set(o_,u),y.set(ew,d),!p)if(s(kL.shared.activeReferralData)){y.set(OC,kL.shared.activeReferralData.extRefApp2,null),y.set(bC,kL.shared.activeReferralData.extRefUrl2,null)
const e=kL.shared.activeReferralData.kind.name
e!==tw&&"appClip"!==e||y.set(vb,JP)}else y.set(OC,h,null),y.set(bC,w,null)
return y.toString()}(0,T,t,o,c,u,f,h,w,a,m,y),t,a,d,p)
return A}function lt(e,t){const n=Se(e,t,"usesExternalPurchase"),r=Se(e,t,"usesExternalLinkPurchase")
return n||r}function ft(e,t){return e.bag.enableExternalPurchases&&e.bag.enabledExternalPurchasesPlacements.includes(t)}function dt(e,t,n,r){const s=e.bag.externalPurchasesLearnMoreEditorialItemId
if(o(s)||!e.bag.enableExternalPurchases)return null
const i=new VL(FD)
return i.title=t,i.pageUrl=`https://apps.apple.com/story/id${s}`,Qe(e,i,{id:"LearnMore",targetType:nN,actionType:QD,pageInformation:n,locationTracker:r}),i}function pt(e,t){return $f.context("offerDataFromData",()=>{const n=Ee(e,t,HO)
return 0===n.length?null:n[0]})}function ht(e,t){const n=M(t,HO)
return 0===n.length?null:n[0]}function wt(e,t,n,o,a,c,u,f=fN,d){return $f.context(`offerActionFromOfferData: ${n.id}`,()=>{var p,h,w,g,m,y,T
let A=l(t,ib)
if(r(A))return $f.unexpectedNull(DD,LN,UP),null
if(n.type===TN&&(A.indexOf("rebuy")>=0?A=A.replace("rebuy=false",Gw):(A.length>0&&(A+="&"),A+=Gw)),i(u.inAppEventId)&&(A.length>0&&(A+="&"),A+=`mtInAppEventId=${u.inAppEventId}`),u.isAdvert){const e=null===(h=null===(p=u.pageInformation)||void 0===p?void 0:p.iAdInfo)||void 0===h?void 0:h.placementId
s(e)&&(A.length>0&&(A+="&"),A+=`${uB.placementId}=${e}`)
const t=null===(g=null===(w=u.pageInformation)||void 0===w?void 0:w.iAdInfo)||void 0===g?void 0:g.containerId
s(t)&&(A.length>0&&(A+="&"),A+=`${uB.containerId}=${t}`)
const n=null===(y=null===(m=u.pageInformation)||void 0===m?void 0:m.iAdInfo)||void 0===y?void 0:y.clickFields[LC]
s(n)&&(A.length>0&&(A+="&"),A+=`${uB.templateType}=${n}`)}const E=n.id
if(r(E))return $f.unexpectedNull(DD,LN,"item.offer.id"),null
const P=function(e,t,n,r,o,s,i,a,c){return $f.context("purchaseConfigurationFromProduct",()=>{const u=U(t,FN)
let f=U(t,Vk)
f||(f=Uw)
const d=$e(e).bundleIdFromData(t),p=ha(e,t),h=U(t,Mh),w=Pe(e,t,"preflightPackageUrl"),g=Fa(e,t),m=wa(0,t,e.appleSilicon.isSupportEnabled),y=l(c,gN),T=l(c,Z_),A=new WN(n,f,u,d,p,r,o,i,h,!1,w,g,m,a.inAppEventId,y,T)
return A.pageInformation=s,A.productVariantData=re(e,t),A.targetType=a.targetType,A.metricsKind=a.kind,A})}(e,n,A,o,u.excludeAttribution,u.pageInformation,c,u,d),I=Tt(e,t,E,P,a,f,null!==(T=u.isAdvert)&&void 0!==T&&T)
return function(e,t,n,r){var o
const s=n.pageInformation,a=oc(n,t.title)
let c=t.adamId
i(null===(o=n.anonymizationOptions)||void 0===o?void 0:o.anonymizationString)&&(c=n.anonymizationOptions.anonymizationString),Ze(e,t,c,r,s,a,n.isAdvert)}(e,I,u,o),I})}function gt(e,t){return r(t)||r(t.price)||0===t.price}function mt(e,t){return $f.context("expectedReleaseDateFromData",()=>ke(U(t,"offers.0.expectedReleaseDate")))}function yt(e,t){const n=l(t,ck)
return n===sv||n===l_||n===Ik?f(t,uO):null}function Tt(e,t,n,r,o,s=fN,i=!1){return $f.context("offerActionFromOfferData",()=>{const a=l(t,ck),c=i&&s===fN?e.bag.adsOverrideLanguage:null
let u
switch(a){case"get":u=s===jk?e.loc.string(Vw,"Get"):e.loc.stringForPreferredLocale(e,f_,c,xb)
break
case Ik:u=s===jk?e.loc.string(Hw,"Pre-Order"):e.loc.stringForPreferredLocale(e,f_,c,xb)
break
default:u=a}let f=null,d=null
const p=yt(0,t)
p>0&&(f=p,d=l(t,$C))
const h=ke(l(t,wC)),w=new YL(u,n,r)
return w.price=f,w.priceFormatted=d,w.expectedReleaseDate=h,w.includeBetaApps=o,w})}function At(e,t,n,o,a,c=fN,u=!1,l=null,f=!1){if(Ma(0,n)){if(c===jk)return null
if(c===fN)return qi(e,n,a,null,u)
const r=Pe(e,n,mD)
if(i(r)){const e=it($N,r),n=new WL(e)
return new XL(t.adamId,n)}}if(c===fN&&(n.type===TN||Ua(e,n)||f))return qi(e,n,a,null,u)
if(o&&"tv"!==e.client.deviceType&&!Fa(e,n)){const o=function(e,t,n,o,s){if(r(t))return null
if(e.bag.arePreordersCancellable){const r=Pt(e,n,t,!1,o)
return r.buyAction=t,r}{if(s!==fN)return null
const r=qi(e,n,o,null,!1)
if(!r)return t
const i=new XL(t.adamId,r)
return i.buyAction=t,i}}(e,t,n,a,c)
if(null!==o)return o}if(me(e,n,CR)&&"tv"!==e.client.deviceType)return function(e,t,n){const r=new aF(fN)
r.title=e.loc.string("BUY_TV_ONLY_ALERT_TITLE"),r.message=e.loc.string("BUY_TV_ONLY_ALERT_MESSAGE"),r.isCancelable=!0,r.buttonActions=n?[vt(e,t)]:[t],r.buttonTitles=[e.loc.string("BUY_TV_ONLY_ALERT_BUTTON_TITLE")]
const o=new XL(t.adamId,r)
return o.title=t.title,o}(e,t,Se(e,n,eC))
if(!Se(e,n,QA)&&Se(e,n,TR)&&e.client.deviceType!==xN)return function(e,t){const n=new aF(fN)
n.title=e.loc.string("BUY_WATCH_ONLY_ALERT_TITLE"),n.message=e.loc.string("BUY_WATCH_ONLY_ALERT_MESSAGE"),n.isCancelable=!0,n.buttonActions=[t],n.buttonTitles=[e.loc.string("BUY_WATCH_ONLY_ALERT_BUTTON_TITLE")]
const r=new XL(t.adamId,n)
return r.title=t.title,r}(e,t)
const d=Pe(e,n,Q_)
if(i(l)&&l===yL&&Va(e,d))return function(e,t,n){const r=new aF(fN)
r.title=e.loc.string("AppStore.ProductPage.WatchOSUpdateRequired.Title").replace(aR,n),r.message=e.loc.string("AppStore.ProductPage.WatchOSUpdateRequired.Message").replace(aR,n),r.buttonActions=[t],r.buttonTitles=[e.loc.string(LE)]
const o=new XL(t.adamId,t)
return o.buyAction=r,o}(e,t,d)
if(function(e,t){return Fa(e,t)||!1}(e,n)){const i=function(e,t,n,o,i){return"tv"===e.client.deviceType?function(e,t,n,o,i){if(r(t))return{startAction:null,underlyingOfferAction:null}
if("tv"!==e.client.deviceType)return{startAction:t,underlyingOfferAction:null}
const a=new JL,c=gt(0,t),u=t.purchaseConfiguration.appName
a.shouldCheckForAvailableDiskSpace=!o,a.remoteControllerRequirement=$b,a.shouldCheckForGameController=Se(e,n,eC),a.shouldPromptForConfirmation=!0
const l=V(n,zw)
if(s(l)&&(a.checkRestrictionsForContentRating=l),c){const t=o?e.loc.string("TV_OFFER_ALERT_TITLE_PREORDER_FREE"):e.loc.string("TV_OFFER_ALERT_TITLE_FREE")
a.title=t.replace(iR,u)}else{const n=o?e.loc.string("TV_OFFER_ALERT_TITLE_PREORDER_PAID"):e.loc.string("TV_OFFER_ALERT_TITLE_PAID")
a.title=n.replace(iR,u).replace(xC,t.priceFormatted)}const f=y(t)
f.title=o?e.loc.string("OFFER_BUTTON_TITLE_PREORDER"):c?e.loc.string(f_):e.loc.string("OFFER_BUTTON_TITLE_BUY"),a.completionAction=f,a.shouldIncludeActiveAccountInFooterMessage=!0
const d=[]
o&&!e.bag.arePreordersCancellable&&d.push(e.loc.string("TV_PREORDER_TERMS")),Se(e,n,iP)&&d.push(e.loc.string("OFFERS_IN_APP_PURCHASES","Offers In-App Purchases")),d.length>0&&(a.footerMessage=d.join(e.loc.string(qw))),a.impressionMetrics=f.impressionMetrics
const p=y(a)
p.shouldPromptForConfirmation=!1,p.title=null,p.footerMessage=null
const h=new XL(t.adamId,p)
return Fa(e,n)||(h.buyAction=a),h.openAction=t,{startAction:h,underlyingOfferAction:f}}(e,t,n,o):{startAction:r(t)?null:t,underlyingOfferAction:null}}(e,t,n,o),u=i.startAction
if(Fa(e,n))return function(e,t,n,r,o,s,i,a){if(!Fa(e,r))return t
let c=null
const u=st(i),l=new rB(ON,i,r.id)
u&&(l.purchaseSuccessAction=t,l.carrierLinkSuccessAction=t)
const f=new VL(zR)
if(f.pageData=l,c=f,a&&a.pageInformation&&(c.referrerUrl=a.pageInformation.pageUrl),t instanceof YL&&(a.actionDetails={buyParams:t.purchaseConfiguration.buyParams,...a.actionDetails}),Xe(e,c,a),o&&t instanceof YL&&"tv"!==e.client.deviceType){let n
if(e.bag.arePreordersCancellable){n=Pt(e,r,t,!0,a),n.buyAction=t
const o=Pt(e,r,t,!0,a)
o.buyAction=t,n.subscribePageAction=o}else{let o=new hF
s===fN&&(o=qi(e,r,a,null,!1)),n=new XL(r.id,o),n.buyAction=t,n.subscribePageAction=t}return t.buyCompletedAction=function(e,t){const n=Ve(e,"systemimage://checkmark",95,90),r=Ve(e,jd,95,90),o=new aF(hO)
o.title="",e.bag.arePreordersCancellable?o.artwork=n:o.artwork=r,e.client.isAutomaticDownloadingEnabled()?(o.message=e.loc.string(Ww),o.toastDuration=2.5):(o.message=e.loc.string(d_),o.toastDuration=1.5)
let s=o
const i=new aF(hO)
i.title="",i.artwork=r,i.message=e.loc.string(d_),i.toastDuration=1.5
const a=new gF(Yw,new qL([t,i]))
a.rateLimit=e.bag.arcadePreOrderUpsellLimitSeconds,a.fallbackAction=i
let c=a
return e.bag.newEventsForODJAreEnabled&&!e.client.isAuthorizedForUserNotifications()&&(c=new hF,s=new hF),new mF(c,s,s,s)}(e,c),n}const d=new XL(r.id,t)
return d.subscribePageAction=c,d}(e,u,i.underlyingOfferAction,n,o,c,function(e,t,n){if(n)return LS
switch(t){case iD:return rO
case fN:case jk:return DS
default:return gR}}(0,c,o),a)
if(o&&e.bag.arePreordersCancellable){const t=Pt(e,n,i.underlyingOfferAction,!1,a)
return t.buyAction=u,t}return u}return St(e,t,o,a)}function Et(e,t,n,r,o,s){switch(r){case rO:case DS:const r=sa(e,t,{useCase:3}),i=Ke(e,t,s)
return wt(e,pt(e,t),t,o,!1,tc(0,t,r),i,n)
default:return null}}function Pt(e,t,n,r,o){let s
if(r){const i=It(e,t,n.purchaseConfiguration.appName,r,!0,o),a=It(e,t,n.purchaseConfiguration.appName,r,!1,o)
s=new mF(a,a,i,a)}else s=It(e,t,n.purchaseConfiguration.appName,!1,!1,o)
return new XL(t.id,s)}function It(e,t,n,r,o,s){const i=new KL(t.id,r),a=e.loc.string("CANCEL_COMING_SOON_TITLE")
let c
e.client.isAutomaticDownloadingEnabled()&&(r&&o||!r)?(i.title=e.loc.string("CANCEL_COMING_SOON_BUTTON_DOWNLOAD"),c=e.loc.string("COMING_SOON_BODY_DOWNLOAD").replace(jw,n)):(i.title=e.loc.string("CANCEL_COMING_SOON_BUTTON"),c=e.loc.string("COMING_SOON_BODY").replace(jw,n))
const u=e.loc.string("CANCEL_COMING_SOON_CANCEL")
let l
switch(e.client.deviceType){case $N:case"tv":const e=new aF(fN)
e.title=a,e.message=c,e.buttonActions=[i],e.isCancelable=!0,e.cancelTitle=u,e.destructiveActionIndex=0,l=e
break
default:const t=new iF([i])
t.title=a,t.message=c,t.isCancelable=!0,t.cancelTitle=u,t.isCustom=!1,t.destructiveActionIndex=0,l=t}return Qe(e,i,{...s,actionType:"cancelPreorder"}),l}function St(e,t,n,o){if(r(t))return null
if(e.client.newPaymentMethodEnabled||n)return t
const s=new hF
s.impressionMetrics=t.impressionMetrics
const i=y(o)
r(i)||(i.actionType=ZP,i.targetType=vN,Qe(e,s,i))
const a=new zL(t,s)
return a.confirmationAccessibilityAction=function(e,t){if(r(t))return null
const n=new aF(fN)
r(t.priceFormatted)?(n.title=e.loc.string(xb),n.message="Are you sure you want to get "+t.purchaseConfiguration.appName):(n.title="Buy App",n.message=`Are you sure you want to buy ${t.purchaseConfiguration.appName} for ${t.priceFormatted}`),n.isCancelable=!0,n.buttonActions=[t]
const o=new XL(t.adamId,t)
return o.buyAction=n,o}(e,t),a}function vt(e,t){const n=new aF(fN)
return n.title=e.loc.string("BUY_TV_GAME_CONTROLLER_REQUIRED_ALERT_TITLE"),n.message=e.loc.string("BUY_TV_GAME_CONTROLLER_REQUIRED_ALERT_MESSAGE"),n.buttonTitles=[e.loc.string("BUY_TV_GAME_CONTROLLER_REQUIRED_ALERT_BUTTON_TITLE")],n.isCancelable=!0,n.buttonActions=[t],n}function _t(e,t,n,o,i,a,c,u,f,d=fN,p=!1,h=!1){return r(t)?null:$f.context("displayPropertiesFromOfferAction",()=>{let r=a
xe(e,o,11702)&&(r=QO),Xi(e,o)||(r=QO)
const w=Qi(0,o)
let g=null
w&&(g=w.id)
let m=new qN(n,t.adamId,r,g,c)
m.isPreorder=i
const T=h&&d===fN?e.bag.adsOverrideLanguage:null
m.overrideLocale=T,i&&(Fa(e,o)?(m.offerLabelStyle=LS,m.subtitles[wC]=ja(e,o,e.loc.string(lI)),e.bag.arePreordersCancellable&&(m.titleSymbolNames[Jw]=Kw,m.titleSymbolNames[Zw]="bell.fill"),m.subtitles[wC]===e.loc.string(BP)&&(m.subtitles[wC]=e.loc.string(lI))):(m.offerLabelStyle=Ik,e.bag.arePreordersCancellable&&(m.titleSymbolNames[pN]=Kw)))
const A=gt(0,t)
m.isFree=A
let E=null
if(d===fN&&(o.type===TN||Ma(0,o)||Ua(e,o)||p))E=e.loc.string("OFFER_BUTTON_TITLE_VIEW")
else{if(d===jk&&(o.type===TN||Ma(0,o)||Ua(e,o)))return null
E=A?d===jk?i?e.loc.string(Hw):e.loc.string(Vw):t.title:d===jk?i?e.loc.string("FLOW_PREVIEW_OFFER_ACTION_PREORDER_WITH_PRICE").replace(xC,t.priceFormatted):e.loc.string("FLOW_PREVIEW_OFFER_ACTION_BUY_WITH_PRICE").replace(xC,t.priceFormatted):t.priceFormatted}if(m.titles[pN]=E,e.client.newPaymentMethodEnabled||d===jk||(m.titles[fI]=A?e.loc.string("ACTION_GET_CONFIRM"):e.loc.string("ACTION_BUY_CONFIRM")),Fa(e,o))if(d===jk){const t=e.loc.string("FLOW_PREVIEW_OFFER_ACTION_ARCADE_STANDARD")
m.titles[pN]=t,m.titles[dI]=t,m.titles.open=e.loc.string("FLOW_PREVIEW_OFFER_ACTION_ARCADE_OPEN"),m.titles[pI]=t,i&&(m.titles[Xw]=e.loc.string("FLOW_PREVIEW_OFFER_ACTION_ARCADE_PREORDER_SUBSCRIBED"),m.titles[Qw]=e.loc.string("FLOW_PREVIEW_OFFER_ACTION_ARCADE_PREORDER_NOT_SUBSCRIBED"))}else{const t=e.loc.stringForPreferredLocale(e,"OFFER_BUTTON_TITLE_ARCADE_STANDARD",T)
m.titles[pN]=t,m.titles[dI]=t,m.titles.open=e.loc.stringForPreferredLocale(e,"OFFER_BUTTON_TITLE_ARCADE_OPEN",T),m.titles[pI]=t,i&&(m.titles[Xw]=e.loc.stringForPreferredLocale(e,"OFFER_BUTTON_TITLE_ARCADE_PREORDER_SUBSCRIBED",T),m.titles[Qw]=e.loc.stringForPreferredLocale(e,"OFFER_BUTTON_TITLE_ARCADE_PREORDER_NOT_SUBSCRIBED",T),m.titles[Jw]=e.loc.stringForPreferredLocale(e,"OFFER_BUTTON_TITLE_ARCADE_PREORDERED_SUBSCRIBED",T),m.titles[Zw]=e.loc.stringForPreferredLocale(e,"OFFER_BUTTON_TITLE_ARCADE_PREORDERED_NOT_SUBSCRIBED",T))}if(u&&d!==jk){const t=l(u,Lw),n=l(u,$C)
if(s(n)&&s(t)){let r=null,o=null
switch(t){case Fw:f?(r=e.loc.string(hI),o=e.loc.string(hI)):(r=e.loc.string(hI),o=e.loc.string(p_))
break
case $w:const t=e.loc.string("INTRO_PRICE_OFFER_PAID_UPFRONT_TRIAL").replace(xC,n)
f?(r=t,o=t):(r=t,o=e.loc.string(p_))
break
case Mw:r=e.loc.string(p_),o=e.loc.string(p_)}m.titles[wI]=r,m.titles[gI]=o,m.subtitles[wI]=e.loc.string(eg),m.subtitles[gI]=e.loc.string(eg)
const s=10
let i=!1
for(const e of Object.keys(m.titles))if(m.titles[e].length>s){i=!0
break}i&&(m=m.newOfferDisplayPropertiesChangingAppearance(!1,null,Fh))}}const P=Se(e,o,iP),I=lt(e,o),S=ft(e,VD),v=I&&S
if(m.hasInAppPurchases=P,m.hasExternalPurchases=v,P||v){const t=v?e.loc.stringForPreferredLocale(e,tg,T):e.loc.stringForPreferredLocale(e,ng,T)
m.subtitles[pN]=t,e.client.newPaymentMethodEnabled||d===jk||(m.subtitles[fI]=t)}m.isDeletableSystemApp=$e(e).isSystemAppFromData(o)&&!Ua(e,o)
const _=V(o,zw)
return m.contentRating=_,o.type===TN&&d!==jk&&(m.offerToken={offerAction:t,offerDisplayProperties:y(m)}),m})}function Ct(e,t,n){const r=U(t,n)
if(o(r))return null
const i=new Ox(r)
let a=null
switch(e.host.clientIdentifier){case TL:a=OD
break
case yL:a=xN}a&&i.param(Px,a)
const c=se(re(e,t))
return s(c)&&i.param(p$,c),i.toString()}function Ot(e,t){if(o(t))return null
const n=new CF(t)
return n.title=e.loc.string("SHARE_SHEET_COPY_LINK"),n.artwork=Ve(e,"systemimage://link"),new cF("com.apple.AppStore.copyLinkActivity",n)}function bt(e,t){return $f.context("shareSheetDataForProductFromProductData",()=>{if(r(t))return null
const n=Ct(e,t,DN),o=U(t,FN),i=U(t,Vk),a=t.id,c=e.client.storefrontIdentifier
if(!(n&&o&&i&&a))return null
const u=Ct(e,t,"shortUrl")
let l=null,f=null
const d=la(e,t,4),p=ua(e,t),h=Pe(e,t,Gb)||i
s(t)&&U(t,DN)&&(l=sa(e,t,{useCase:1}),f=function(e,t){return $f.context("notesMetadataFromProductData",()=>{var n
if(r(t))return null
const o=U(t,FN)
if(!o||0===o.length)return null
const s=Ct(e,t,DN),i=U(t,Vk),a=U(t,"genreNames.0"),c=null===(n=Sa(e,t))||void 0===n?void 0:n.fileSizeByDevice
let u
switch(t.type){case NN:u=gN
break
case TN:u=YA
break
case rD:u=nb
break
default:u=null}return new QN(o,s,i,a,c,u)})}(e,t))
const w=new nL(a,c,o,"iOS",l,d,p,!1,h,null,null,f)
return new rL(w,n,u)})}function Rt(e,t,n,o){return $f.context(`shareActionFromData: ${t.type}`,()=>{const a=t.id
switch(e.client.deviceType){case $N:{const r=bt(e,t)
if(r){const t=new uF(r,[])
return Qe(e,t,{targetType:vN,id:a,actionType:lO,pageInformation:n,locationTracker:o}),t}break}case CN:case EN:{const c=bt(e,t),u=[]
if(i(null==c?void 0:c.url)){const t=Ot(e,c.url)
s&&u.push(t)}const l=function(e,t){if(!e.bag.isContentGiftingEnabled)return null
if(r(t))return null
const n=pt(e,t)
return r(n)||B(t,HD)?null:f(n,uO)>0?t.id:null}(e,t)
if(l){const t=new VL(nD)
t.presentationContext=tE,t.title=e.loc.string("SHARE_GIFT_APP"),t.artwork=Ve(e,"systemimage://app.gift"),t.pageUrl=`gift/${l}`,Qe(e,t,{targetType:vN,id:a,actionType:J_,actionContext:kd,pageInformation:n,locationTracker:o})
const r=new cF("com.apple.AppStore.giftActivity",t)
u.push(r)}if(c){const t=new uF(c,u,cd)
return t.title=e.loc.string("SHARE_APP"),t.artwork=Ve(e,Dd),Qe(e,t,{targetType:vN,id:a,actionType:lO,actionContext:kd,pageInformation:n,locationTracker:o}),t}if(u.length>0){const t=u.map(e=>e.action),r=new iF(t)
return r.isCancelable=!0,r.isCustom=!0,Qe(e,r,{targetType:vN,id:a,actionType:"actionSheet",pageInformation:n,locationTracker:o}),r}break}}return null})}function kt(e,t,n,o,a,c,u,l){return $f.context("flowPreviewActionsConfigurationForProductFromData",()=>{if(e.client.deviceType!==CN&&e.client.deviceType!==EN)return null
const f=Dt(e,t)
if(!i(f))return null
const d=[]
let p=null,h=null
const w=G(f,HD)
if(n){const t=Fa(e,f),n=_i(0,f.type,t),a=function(e,t,n,o,s,i,a){return r(t)||t.type!==NN?null:wt(e,pt(e,t),t,n,!1,tc(0,t,sa(e,t,null,i)),a,jk)}(e,f,w,0,0,o,u)
h=_t(e,a,n,f,w,null,null,null,null,jk)
const c=function(e,t,n,o,s,a,c,u){if(r(n))return null
let l=At(e,n,t,o,a,jk,!1,s)
return i(u)&&(l=ot(e,l,n.adamId,null,u,!1,a)),l}(e,f,a,w,o,u,0,l)
s(c)&&s(h)&&(p=d.length,d.push(c))}const g=function(e,t,n){const r=Rt(e,t,n.pageInformation,n.locationTracker)
return s(r)?(r.title=e.loc.string("FLOW_PREVIEW_ACTION_SHARE"),r.artwork=Ve(e,Dd),r):r}(e,f,c)
s(g)&&d.push(g)
const m=Ft(e,f)
if(!w&&!m){if(s(a)&&a instanceof VL&&(a.pageData instanceof RU||a.pageData instanceof zU)){const t=function(e,t,n){const r=function(e,t){return $f.context("seeRatingsAndReviewsActionFromData",()=>{const n=y(t)
if(t.pageData instanceof RU||t.pageData instanceof zU){const r=Ai(e)?new IF(TD):new fF(new OU(MN,RN)),o=y(t.pageData)
o.fullProductFetchedAction=r,n.pageData=o}return n})}(e,n)
return s(r)&&(r.title=e.loc.string("FLOW_PREVIEW_ACTION_SEE_RATINGS_AND_REVIEWS"),r.artwork=Ve(e,"systemimage://star"),r.animationBehavior=AD),r}(e,0,a)
s(t)&&d.push(t)}if(!me(e,t,CR)){const t=function(e,t){const n=Ht(e,t)
return s(n)&&(n.title=e.loc.string("FLOW_PREVIEW_ACTION_WRITE_REVIEW"),n.artwork=Ve(e,Up)),n}(e,f)
s(t)&&d.push(t)}}return new aL(d,h,p)})}function Dt(e,t){return $f.context(`productDataFromData: ${t.type}`,()=>{switch(t.type){case NN:case TN:return t
case iN:{const n=we(t,ND)
if(i(n)&&1===n.length){const t=n[0]
return Dt(e,t)}break}case kv:{const n=we(t,kN)
if(i(n)&&1===n.length){const t=n[0]
return Dt(e,t)}break}default:return null}return null})}function Nt(e,t,n,r){const o=e.bag.voteUrl,s=l(t,"id",ZD),i=new Ox(o).param(Bp,s),a=new eF(i.build()),c=new aF(hO)
return r?(a.title=e.loc.string("ACTION_REVIEW_HELPFUL"),c.title=e.loc.string("TOAST_HELPFUL_TITLE"),c.message=e.loc.string("TOAST_HELPFUL_DESCRIPTION"),a.artwork=Ve(e,Gp),c.artwork=Ve(e,Gp)):(a.title=e.loc.string("ACTION_REVIEW_NOT_HELPFUL"),c.title=e.loc.string("TOAST_NOT_HELPFUL_TITLE"),c.message=e.loc.string("TOAST_NOT_HELPFUL_DESCRIPTION"),a.artwork=Ve(e,Vp),c.artwork=Ve(e,Vp)),a.method=SR,a.isStoreRequest=!0,a.disableCache=!0,a.headers={"Content-Type":JU.contentType},a.body=(new JU).param("vote",r?"1":"0").param(Hp,n).build(),a.successAction=c,a}function Lt(e,t,n){return`${RF}:/${JF}/${LF}/${t}/${n}`}function Ft(e,t){return!(!s(t)||$t(e,t)||!G(t,AR)&&!G(t,"reviewsRestricted"))}function $t(e,t){return!(o(t)||!e.bag.enableSystemAppReviews)&&$e(e).isSystemAppFromData(t)}function xt(e,t){const n=Ox.from(e),r=l(n.query,Ig)
return t&&i(r)&&(n.query[Ig]=lB[r]||r),n}function Mt(e,t,n,r,s=!1,a=!1,c=!0){return $f.context("createReviewItems",()=>{const u=function(t,n){return n?1e3*((new Date).getTime()-t.getTime())<3600?e.loc.string("TIME_AGO_EDITED_JUST_NOW"):e.loc.string("TIME_AGO_EDITED_TIME").replace("{time}",e.loc.timeAgoWithContext(t,"standalone")):e.loc.timeAgoWithContext(t,"standalone")}
return r.map(r=>{const f=new $U
f.id=l(r,"id",ZD),f.title=U(r,KR)
const d=U(r,LO)
d&&(f.date=new Date(d),f.dateText=u(f.date,G(r,"isEdited"))),f.contents=U(r,"review"),f.rating=V(r,gk),f.reviewerName=U(r,"userName")
let p=null
const h=U(r,"developerResponse.id")
if(i(h)){const e=new xU
e.id=h,e.contents=U(r,"developerResponse.body")
const t=U(r,"developerResponse.modified")
t&&(e.date=new Date(t),e.dateText=u(e.date,!1)),f.response=e,p=f.response.contents}if(c&&(l(n,Xk),f.flowPreviewActionsConfiguration=function(e,t,n,r,s){if(o(t)||e.client.deviceType!==CN&&e.client.deviceType!==EN&&e.client.deviceType!==$N)return null
const a=[Nt(e,t,n,!0),Nt(e,t,n,!1)]
return i(e.bag.reportConcernUrl)&&a.push(function(e,t,n){return $f.context("reportConcernActionFromApiRow",()=>{const r=l(t,"id",ZD),s=e.bag.reportConcernUrl,i=new nF(s)
i.method=SR,i.isStoreRequest=!0,i.disableCache=!0,i.needsAuthentication=!0,i.headers={"Content-Type":JU.contentType},i.body=(new JU).param(Bp,r).param(Hp,n).build()
const a=new tF("selectedReason",jp,sP),c=new tF("explanation",jp,yk)
i.parameters=[a,c]
const u=new aF(hO)
u.title=e.loc.string("TOAST_CONCERN_REPORTED_TITLE"),u.message=e.loc.string("TOAST_CONCERN_REPORTED_DESCRIPTION"),u.artwork=Ve(e,Wp),i.successAction=u
let f=e.bag.reportConcernReasons
o(f)&&(f=[{reasonId:"1",name:"It contains offensive material",upperCaseName:"IT CONTAINS OFFENSIVE MATERIAL"},{reasonId:"8",name:"It's off-topic",upperCaseName:"IT\u2019S OFF-TOPIC"},{reasonId:"111003",name:"It looks like spam",upperCaseName:"IT LOOKS LIKE SPAM"},{reasonId:"7",name:"Something else",upperCaseName:"SOMETHING ELSE"}])
const d=f.map(e=>new oL(l(e,"reasonId"),l(e,FN),l(e,"upperCaseName"))),p=new lF(d)
return p.title=e.loc.string("ACTION_REVIEW_REPORT"),p.explanation=e.bag.reportConcernExplanation,o(p.explanation)&&(p.explanation="Tell us a little more (Optional)"),p.artwork=Ve(e,Wp),p.sendAction=i,p})}(e,t,n)),i(s)&&a.push(function(e,t){const n=new CF(t)
return n.title=e.loc.string("ACTION_REVIEW_COPY"),n.artwork=Ve(e,"systemimage://doc.on.doc"),n}(e,s)),new aL(a)}(e,r,t,0,p)),a){const n=[Nt(e,r,t,!0),Nt(e,r,t,!1)]
f.voteActions=n}return s&&(f.moreAction=function(e,t,n,r){return r?$f.context("singleReviewActionFromReviewData",()=>{const o=jt(e,t,n,[r]),s=new LU
s.adamId=l(n,Xk),s.targetReviewId=l(r,"id",ZD),s.shelves=[o]
const i=new VL(RN)
return i.pageData=s,i.title=Zt(e),i}):null}(e,t,n,r)),f})})}function Ut(e,t,n){return n?$f.context("ratingsFromApiResponses",()=>{const t=new FU
t.productId=l(n,Xk,ZD),t.ratingAverage=f(n,"ratingAverage"),t.totalNumberOfRatings=f(n,vg),t.totalNumberOfReviews=f(n,"totalNumberOfReviews")
const r=c(n,"ratingCountList").slice().reverse(),o=r.reduce((e,t)=>e+t,0)
if(t.ratingCounts=o>0?r.map(e=>e/o*t.totalNumberOfRatings):r,!(t.ratingAverage>0&&t.ratingCounts)){const r=u(n,SI)
t.status=r?e.loc.string("RATINGS_STATUS_DEVELOPER_RESET"):e.loc.string("RATINGS_STATUS_NOT_ENOUGH_RATINGS")}return t}):null}function Bt(e,t){t.ratingAverage=e.ratingAverage,t.ratingCounts=e.ratingCounts,t.totalNumberOfRatings=e.totalNumberOfRatings,t.totalNumberOfReviews=e.totalNumberOfReviews,t.status=e.status,t.reviews=e.reviews,t.actions=e.actions,t.nextPage=e.nextPage}function Gt(e,t,n,r=null,o=null){const s=new MU
switch(e.client.deviceType){case"tv":s.title=e.loc.string("TV_SELECT_TO_RATE")
break
case $N:s.title=e.loc.string("CLICK_TO_RATE")
break
default:s.title=e.loc.string("TAP_TO_RATE")}return s.rating=o,s.rateAction=function(e,t,n,r=null){const o=new aF(hO)
o.title=e.loc.string("TOAST_TAP_TO_RATE_TITLE"),o.message=e.loc.string("TOAST_TAP_TO_RATE_DESCRIPTION"),o.artwork=Ve(e,"resource://ToastStar.png",95,90)
const s=new rF(function(e,t,n){return xt(e.bag.userRateURL,n).param("id",t).build()}(e,t,n))
s.adamId=t,s.method=SR,s.isStoreRequest=!0,s.disableCache=!0,s.successAction=o
const i=new tF(gk,Sg,sP),a=new tF("version-to-review",Sg,sP)
return s.parameters=[i,a],s}(e,t,n,r),s}function Vt(e,t,n,r,o=!1){return $f.context("createWriteReviewAction",()=>{const s=o?e.loc.string("EDIT_REVIEW"):e.loc.string("WRITE_A_REVIEW"),i=function(e,t,n){return xt(e.bag.writeReviewURL,n).param("id",t).build()}(e,t,n)
let a
switch(e.client.deviceType){case $N:{const e=new oF(t,i)
e.title=s,e.appIcon=r,a=e
break}default:{const n=new VL("writeReview")
n.title=s,n.pageUrl=i,n.pageData=t,n.presentationContext=tE,n.artwork=Ve(e,Up),a=n
break}}return a})}function Ht(e,t,n){return $f.context("writeReviewActionFromData",()=>{const r=t.id
if(i(r)){const o=t.type===TN,i=V(t,gk),a=s(i)&&i>0
return Vt(e,r,o,n,a)}return null})}function jt(e,t,n,r,o=!1,s=!1,i=!0){return $f.context("reviewsShelfForReviewsData",()=>{const a=new CM(RN)
return a.items=Mt(e,t,n,r,o,s,i),a})}function Wt(e,t,n,o,i,a,c,f,d=!1,p=!0,h=null,w=!1){return $f.context("reviewsContainerShelfForReviewsData",()=>{const p=function(e,t,n,o,i,a,c,f=null,d=!1){return $f.context("reviewsContainerForReviewsData",()=>{const p=new BU,h=l(n,Xk),w=u(n,"isBundle")
if(p.adamId=h,p.ratings=Ut(e,0,n),d||(p.tapToRate=Gt(e,h,w,i,f)),s(o)&&o.length>0){const r=!1,s=!r,i=r?o.slice(0,1):o
p.reviews=Mt(e,t,n,i,s,!1,s)}if(r(p.reviews)||0===p.reviews.length){const t=p.ratings.ratingAverage>0&&p.ratings.ratingCounts,r=u(n,SI)
t||r||(p.ratings.status=e.loc.string(_g))}if(r(c)||(p.editorsChoice=c),!d){const t=s(f)&&f>0
p.writeReviewAction=Vt(e,h,w,a,t)}const g=l(n,Cg)
if(g){const t=new WL(g,!1)
t.title=e.loc.string(Og),p.supportAction=t}let m=!1
for(const t of o)if($t(e,t)){m=!0
break}return p.alwaysAllowReviews=m,p})}(e,t,n,o,i,a,c,h,w),g=new CM(Eg)
return g.title=Zt(e),g.items=[p],d&&s(p.reviews)&&p.reviews.length>0&&(g.seeAllAction=Kt(e,t,n,o,f,i,a,!1,!1)),g})}function qt(e,t,n,r){return $f.context("personalizedReviewsContainerShelf",()=>{const o=V(O(r),gk)
return Wt(e,t,n.ratingsData,n.reviewItems,n.appName,n.appIcon,n.editorsChoice,n.nextPageHref,n.includeSeeAllAction,!1,o)})}function Yt(e,t,n,r,o){const s=function(e,t,n){return`${RF}:/${JF}/${t}/${n}`}(0,t,n)
return new NU(n,r,o,s)}function zt(e,t,n,o,s,a=null,c=null,u=null,f=null,d,p=!1,h=!1,w="helpful"){const g=new LU
return g.shelves=[],$f.context("reviewsPageForReviewsData",()=>{let d,m
if(i(a)&&i(o)&&o.length%2>0){const r=o.slice(0,o.length-1)
m=o.slice(o.length-1),d=jt(e,t,n,r,p,h,!0)}else d=jt(e,t,n,o,p,h,!0),m=[]
const y=r(c)?l(n,Xk):c
if(g.adamId=y,s&&!r(n)){const r=Wt(e,t,n,[],u,f)
g.shelves.push(r)}return d.items.length>0&&(s&&(d.presentationHints={isSortable:!0},r(n)||(g.initialSortOptionIdentifier=w,g.sortActionSheetTitle=e.loc.string("REVIEWS_SORT_BY"),g.sortOptions=[Yt(0,y,Pg,e.loc.string("REVIEWS_MOST_HELPFUL"),e.loc.string("REVIEWS_SORT_BY_MOST_HELPFUL")),Yt(0,y,"favorable",e.loc.string("REVIEWS_MOST_FAVORABLE"),e.loc.string("REVIEWS_SORT_BY_MOST_FAVORABLE")),Yt(0,y,"critical",e.loc.string("REVIEWS_MOST_CRITICAL"),e.loc.string("REVIEWS_SORT_BY_MOST_CRITICAL")),Yt(0,y,"recent",e.loc.string("REVIEWS_MOST_RECENT"),e.loc.string("REVIEWS_SORT_BY_MOST_RECENT"))])),g.shelves.push(d),i(a)&&(g.nextPage=function(e,t,n,r,o){return{url:Lt(0,t,r),remainingContent:o,nextHref:n,profile:VD,maxPerPage:20,highestOrdinal:0,metricsPageInformation:null,metricsLocationTracker:null}}(0,y,a,w,m))),g})}function Jt(e,t,n,r,o,s,a){return $f.context("reviewsPageForReviewsMediaContainer",()=>{let c
return c=i(o.data)?r.concat(o.data):r,zt(e,t,null,c,s,o.next,n,null,null,0,!1,!1,a)})}function Kt(e,t,n,r,o=null,s=null,i=null,a,c,u){return n?$f.context("reviewsPageActionFromReviewsData",()=>{const u=zt(e,t,n,r,!0,o,null,s,i,0,a,c)
u.title=null
const l=new VL(RN)
return l.pageData=u,l.title=e.loc.string(Sk),l}):null}function Zt(e){switch(e.client.deviceType){case"tv":return e.loc.string("TV_PRODUCT_SECTION_RATINGS")
case xN:return null
default:return e.loc.string("PRODUCT_SECTION_REVIEWS")}}function Xt(e,t){return t.map(t=>t.createProductPageSection(e))}function Qt(e,t,n,r,o,s,i){const a=function(e,t,n){switch(t){case NO:return n?bf:Of
case LI:return Rf
case HR:return n?vf:zf
case Ak:return n?Cf:_f
default:return zf}}(0,n,r)
let c=[]
c=t?o&&a.purchasedOrderingCompact?a.purchasedOrderingCompact.slice():a.purchasedOrdering.slice():s&&a.downloadingOrdering?o&&a.downloadingOrderingCompact?a.downloadingOrderingCompact.slice():a.downloadingOrdering.slice():o&&a.notPurchasedOrderingCompact?a.notPurchasedOrderingCompact.slice():a.notPurchasedOrdering.slice()
const u=t?a.purchasedSpotlightIndex:a.notPurchasedSpotlightIndex
if(i&&i.spotlightSection){const e=function(e,t){for(let n=0;n<t.length;n++){const r=t[n]
if(e.sectionType===r.sectionType&&e.shelfId===r.shelfId&&JSON.stringify(e.shelfBasedMappedIds)===JSON.stringify(r.shelfBasedMappedIds))return n}return-1}(i.spotlightSection,c);-1!==e&&(c.splice(e,1),c.splice(u,0,i.spotlightSection))}return c}function en(e){return new fB(MN,e?bk:Ok)}function tn(e,t,n){const r=ct(n.pageInformation)
r.id=Ka(n.id),r.idType=Ya(n),r.type=Rk,r.typeDetails="iTunesStoreContent",r[ub]=oc(n,null),n.actionDetails&&(r[FR]=n.actionDetails),t.templateMediaEvent=function(e,t){const n={}
return Object.assign(n,t),n[Wk]=WP,je(0,new FL(n,[],[],Je(0,n),ze(e,n)))}(e,r)
const o=y(r)
o[vC]=t.videoUrl,t.templateClickEvent=function(e,t,n,r){const o={}
return Object.assign(o,r),o[Wk]=nR,o[HP]=n,o[Bh]=null,je(0,new FL(o,[Ib],[],Je(0,o),ze(e,o)))}(e,0,vN,o)}function nn(e){return i(e)&&i(e.id)&&e.id.indexOf(zB)>-1}function rn(e,t){var n
return r(t)?1:s(null===(n=t.video)||void 0===n?void 0:n.preview)&&t.video.preview.height>0?t.video.preview.width/t.video.preview.height:s(t.screenshot)&&t.screenshot.height>0?t.screenshot.width/t.screenshot.height:1}function on(e,t,n,r){return $f.context("createProductPageFromShelfBasedProductPage",()=>{var o,a,c,u
const l=new RU
return l.adamId=t.lockup.adamId,l.bundleId=t.lockup.bundleId,l.icon=t.lockup.icon,l.isEditorsChoice=t.lockup.isEditorsChoice,l.ordinal=t.lockup.ordinal,l.title=t.lockup.title,l.subtitle=t.lockup.subtitle,l.developerTagline=t.lockup.developerTagline,l.editorialTagline=t.lockup.editorialTagline,l.editorialDescription=t.lockup.editorialDescription,l.shortEditorialDescription=t.lockup.shortEditorialDescription,l.rating=t.lockup.rating,l.ratingCount=t.lockup.ratingCount,l.ageRating=t.lockup.ageRating,l.buttonAction=t.lockup.buttonAction,l.offerDisplayProperties=t.lockup.offerDisplayProperties,l.titleOfferDisplayProperties=t.titleOfferDisplayProperties,l.clickAction=t.lockup.clickAction,l.children=t.lockup.children,l.contextMenuData=t.lockup.contextMenuData,l.shelfBackground=t.lockup.shelfBackground,l.searchAd=t.lockup.searchAd,l.crossLinkTitle=t.lockup.crossLinkTitle,l.crossLinkSubtitle=t.lockup.crossLinkSubtitle,l.tertiaryTitle=t.lockup.tertiaryTitle,l.tertiaryTitleAction=t.lockup.tertiaryTitleAction,l.flowPreviewActionsConfiguration=t.lockup.flowPreviewActionsConfiguration,l.productDescription=t.lockup.productDescription,l.itemBackground=t.lockup.itemBackground,l.developerAction=t.developerAction,l.logoArtwork=t.logoArtwork,l.uberArtwork=null===(o=t.uber)||void 0===o?void 0:o.artwork,l.uberArtworkForCompactDisplay=null===(a=t.uber)||void 0===a?void 0:a.compactArtwork,l.uberVideo=null===(c=t.uber)||void 0===c?void 0:c.video,l.uberStyle=null===(u=t.uber)||void 0===u?void 0:u.style,l.media=function(e){const t=[]
for(const n of Object.values(e.shelfMapping))if(nn(n)){const e=n.contentsMetadata,r=n.items
t.push(new Vx(r,e.platform,e.allPlatforms))}return t}(t),s(t.shelfMapping[XD])&&(l.badges=Ii(e,t.shelfMapping[XD])),l.shareAction=t.shareAction,l.pageMetrics=t.pageMetrics,l.pageRenderMetrics=t.pageRenderMetrics,l.isComplete=!t.isIncomplete,l.hasDarkUserInterfaceStyle=t.hasDarkUserInterfaceStyle,l.mediaSectionTitle=e.loc.string(Tg),l.expandedOfferDetails=t.expandedOfferDetails,l.regularPriceFormatted=t.regularPriceFormatted,l.theme=t.theme,l.externalVersionIdentifier=t.externalVersionIdentifier,l.updateBuyParams=t.updateBuyParams,l.appPlatforms=t.appPlatforms,l.descriptionHeader=t.descriptionHeader,l.description=t.description,l.banner=t.banner,l.secondaryBanner=t.secondaryBanner,l.fullProductFetchedAction=t.fullProductFetchedAction,l.appEventDetailPageFlowAction=t.appEventDetailPageFlowAction,l.pageRefreshPolicy=t.pageRefreshPolicy,l.purchasedOrdering=Xt(e,Qt(0,!0,e.host.platform,n,!1,!1,r)),l.notPurchasedOrdering=Xt(e,Qt(0,!1,e.host.platform,n,!1,!1,r)),l.shelfMapping=function(e,t){const n={}
for(const r of DU){let o
o=r===RN?sn(e,t):t.shelfMapping[r],i(o)&&(n[r]=o)}return n}(e,t),l.alwaysAllowReviews=t.alwaysAllowReviews,l})}function sn(e,t){const n=t.shelfMapping[TD],r=t.shelfMapping[uR],s=t.shelfMapping[nk],a=t.shelfMapping[lR],c=t.shelfMapping[fR]
if(o(n)&&o(r)&&o(s)&&o(a)&&o(c))return null
let u=null,l=[],f=null,d=null,p=null,h=null,w=null
if(i(null==r?void 0:r.items))for(const e of r.items){const t=e
switch(t.sourceType){case Cb:u=t.review
break
case Ag:l.push(t.review)}}else l=null
if(i(null==s?void 0:s.items)&&(u=s.items[0].review),i(null==a?void 0:a.items)&&(d=a.items[0].action),i(null==c?void 0:c.items)){const e=c.items[0].action
p=e.writeReviewAction,h=e.supportAction}i(null==n?void 0:n.items)&&(f=n.items[0],w=null==n?void 0:n.seeAllAction)
const g=new BU
g.adamId=t.lockup.adamId,g.ratings=f,g.tapToRate=d,g.editorsChoice=u,g.reviews=l,g.supportAction=h,g.writeReviewAction=p,g.alwaysAllowReviews=t.alwaysAllowReviews
const m=new CM(Eg)
return m.title=Zt(e),m.items=[g],m.seeAllAction=w,m}function an(e,t){var n,r
let a=t.id,c=t.title
if(i(t.anonymizationOptions)){const e=null!==(r=null===(n=t.anonymizationOptions)||void 0===n?void 0:n.anonymizationString)&&void 0!==r?r:"ANONYMOUS"
a=e,c=e}const u={id:Ka(a),name:Ka(c),idType:Ya(t),impressionType:qa(t)}
if(t&&t.kind&&(u.kind=t.kind),t&&t.softwareType&&(u[kC]=t.softwareType),t&&t.recoMetricsData&&Object.assign(u,t.recoMetricsData),t&&t.mercuryMetricsData&&Object.assign(u,t.mercuryMetricsData),t&&t.lockupDisplayStyle&&(u[o_]=t.lockupDisplayStyle),t&&t.locationTracker){const e=uc(t.locationTracker)
u.impressionIndex=e,""===u.id&&(u.id=e.toString(),u.idType=WD)}return s(t.offerType)&&(u[RC]=t.offerType),t&&s(t.displaysArcadeUpsell)&&(u[cw]=t.displaysArcadeUpsell),t&&s(t.isPreorder)&&(u[HD]=t.isPreorder),s(t.adamId)&&o(t.anonymizationOptions)&&(u[Xk]=t.adamId),t&&s(t.badges)&&(u.badges=t.badges),t&&s(t.inAppEventId)&&(u[ew]=t.inAppEventId),t&&s(t.relatedSubjectIds)&&(u.relatedSubjectIds=t.relatedSubjectIds),t&&s(t.autoAdvanceInterval)&&(u.autoAdvanceInterval=t.autoAdvanceInterval),s(null==t?void 0:t.fcKind)&&(u.fcKind=t.fcKind),s(null==t?void 0:t.canonicalId)&&(u[uw]=t.canonicalId),s(t.productVariantData)&&Object.assign(u,ue(t.productVariantData)),u.id,u}function cn(e,t,n){t&&(t.impressionMetrics=new UL(an(0,n)))}function un(e,t,n,r,o,s,i,a=!0){var c
if(!t)return
const u=an(0,n)
if(a?(u[lw]=Ka(r),u[qP]=Ka(o)):(r&&(u[lw]=r),o&&(u[qP]=o)),i&&(u[fw]=Ka(i)),s&&(u[dw]=s),t.impressionMetrics=new UL(u),(n.isAdvert||n.isAdEligible)&&(null===(c=n.pageInformation)||void 0===c?void 0:c.iAdInfo)){const e=Xa(n.pageInformation.iAdInfo.fastImpressionsFieldsForCurrentItem(n.locationTracker))
Object.assign(t.impressionMetrics.fields,e),t.impressionMetrics=new BL(t.impressionMetrics,!0)}}function ln(e,t,n,r,o,s){const i=fn(e,t,n.title,o)
return i.lockupDisplayStyle=r,s&&Fa(e,t)&&(i.displaysArcadeUpsell=!0),i}function fn(e,t,n,r){return $f.context("impressionOptions",()=>{const o=Ja(e,t),s=za(e,t),i={...r,kind:o,softwareType:s,title:n,id:t.id}
return Se(e,t,HD)&&(i.offerType=Ik),i})}function dn(e,t,n){var r,o
const s=an(0,(r=t.term,t.entity,o=n,$f.context("impressionOptionsForSearchHint",()=>({...o,id:"",kind:null,softwareType:null,title:r}))))
t.entity&&(s[i_]=t.entity),t.impressionMetrics=new UL(s)}function pn(e){return e.bag.enableAppEvents&&!0}function hn(e,t,n){return ta(e,x(t,n),{useCase:0,withJoeColorPlaceholder:!0,cropCode:"sr"})}function wn(e,t,n,o,s){const i=hn(e,t,`${n}.previewFrame`)
if(r(i))return null
const a=U(t,`${n}.video`)
if(r(a))return null
const c=new wL(a,i,{allowsAutoPlay:!0,looping:!0,canPlayFullScreen:o,showPlaybackControls:!1,playbackControls:s?{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0}:{},autoPlayPlaybackControls:s?{muteUnmute:!0}:{}})
return c.canPlayFullScreen=o,c.allowsAutoPlay=!0,c.looping=!0,c}function gn(e,t,n,s,i,a,c,u,l,f,d){if(o(t)||o(n))return null
const p={...u,id:t.id,inAppEventId:t.id,relatedSubjectIds:[n.id],idType:PR}
var h;(h=u)&&Object.prototype.hasOwnProperty.call(h,"id")&&(p.id=u.id,p.idType=u.idType),ic(p,"")
const w=U(t,mE),g={metricsOptions:{...u,id:n.id,inAppEventId:t.id,relatedSubjectIds:[n.id],targetType:VD,idType:PR,excludeAttribution:o(f)},artworkUseCase:1,externalDeepLinkUrl:w,crossLinkSubtitle:c?s:null,offerEnvironment:i,offerStyle:a,skipDefaultClickAction:!l,includeBetaApps:!0,referrerData:f,shouldHideArcadeHeader:e.featureFlags.isEnabled(cb)&&d},m=xi(e,n,g)
return r(m)?null:(c&&(m.crossLinkTitle=e.loc.uppercased(m.title)),cc(u.locationTracker),m)}function mn(e,t,n,r,o){if(n.startDate.getTime()<=Date.now())return null
const s=e.loc.string("APP_EVENTS_NOTIFICATION_TITLE").replace("{appTitle}",n.lockup.title),a=e.loc.string("APP_EVENTS_NOTIFICATION_DETAIL").replace("{eventTitle}",n.title),c=n.startDate,u=n.lockup.icon,l=n.lockup.icon.template.replace("{w}",`${u.width}`).replace("{h}",`${u.height}`).replace("{c}","wd").replace("{f}",QS)
let f,d
if(o&&(f=new aF(hO),f.title=e.loc.string("APP_EVENTS_NOTIFICATION_TOAST_TITLE"),f.message=e.loc.string("APP_EVENTS_NOTIFICATION_TOAST_DETAIL"),f.artwork=Ve(e,jd)),e.bag.newEventsForODJAreEnabled){const o=new hF,s=ct(r.pageInformation)
s[qb]="notifyActivateNotificationsDisabled",s[ub]=oc({...r,id:t.id},null),s[ev]=""
const i=We(e,n.lockup.adamId,VD,s)
o.actionMetrics.addMetricsData(i),d=o}else{const t=new aF(fN)
t.title=e.loc.string("APP_EVENTS_NOTIFICATION_NOT_AUTHORIZED_TITLE"),t.message=e.loc.string("APP_EVENTS_NOTIFICATION_NOT_AUTHORIZED_DETAIL"),t.isCancelable=!0,t.buttonTitles=[e.loc.string(Rd)],t.buttonActions=[new WL("prefs:root=NOTIFICATIONS_ID&path=com.apple.AppStore",!0)],d=t}const p=new aF(fN)
p.title=e.loc.string("APP_EVENTS_NOTIFICATION_FAILURE_TITLE"),p.message=e.loc.string("APP_EVENTS_NOTIFICATION_FAILURE_DETAIL"),p.isCancelable=!0
const h=(new Ox).set(Ek,NF).param(K$,n.lockup.adamId).param(T$,n.lockup.bundleId).param(ux,n.appEventId)
h.host=c$
const w=U(t,mE)
i(w)&&h.param(lx,encodeURIComponent(w))
const g=ct(r.pageInformation)
g[qb]="notifyActivate",g[ub]=oc({...r,id:t.id},null)
const m=We(e,n.lockup.adamId,VD,g),T=y(g)
T[qb]="notifyDeactivate"
const A=We(e,n.lockup.adamId,VD,T)
return new XB(t.id,s,a,l,c,f,d,p,h.build(),m,A)}function yn(e,t,n=null,o,i,a,c,u,l,f){const d=[]
let p
for(const h of t){const t=zn(e,h,n,o,!0,dD,ID,i,!1,a,c,u,null,l,f)
if(r(t))continue
if(t instanceof Date){(r(p)||t.getTime()<p.getTime())&&(p=t)
continue}const w=t,g={...a,id:h.id,kind:yE,targetType:IR,title:w.title,softwareType:null},m=null!=n?n:he(h,gN)
s(m)&&(g.relatedSubjectIds=[m.id]),cn(0,w,g),d.push(w)}return{appEvents:d,nextAppEventPromotionStartDate:p}}function Tn(e){const t=Bf.Qo(e.cookieProvider,yG)
return null===t||0===t}function An(e,t,n,r){const o=uc(r.locationTracker),s={impressionIndex:o,id:o.toString(),idType:WD,name:t.displayName,impressionType:n,parentId:wm}
t.impressionMetrics=new UL(s)}function En(e,t,n){const r=n&&n[t]
return e&&t&&e===t&&!r}function Pn(e,t,n,i,a,c,u){const l=o(c),f=Sn(e,t,n,a,c,u)
if(r(f))return null
const d={platform:t.mediaPlatformUsedForDisplayStyle,style:f}
if(Dn(e,`[${n}] tentatively resolved to: ${kn(d)}`),"DUP"===i){!function(e,t){switch(e){case"PI4":t.portraitScreenshots.length<=5&&t.portraitScreenshots.splice(0,4)
break
case"PI3":t.portraitScreenshots.splice(0,3)
break
case"PI2":t.portraitScreenshots.splice(0,2)
break
case"PI1":t.portraitScreenshots.splice(0,1)
break
case"PV4":t.videos.splice(0,1),t.portraitScreenshots.length<=4&&t.portraitScreenshots.splice(0,3)
break
case"PV3":t.videos.splice(0,1),t.portraitScreenshots.splice(0,2)
break
case"PV2":t.videos.splice(0,1),t.portraitScreenshots.splice(0,1)
break
case"LI1":t.landscapeScreenshots.splice(0,1)
break
case"PV1":case"LV1":t.videos.splice(0,1)}}(f,t)
const r=Sn(e,t,n,a,null,u),o=function(e,t,n){switch(t){case"PV4":case"PI4":case"LI1":case"LV1":return!0
case"PV3":case"PI3":return 3===Rn(e,n)
case"PV2":case"PI2":return 2===Rn(e)
default:return!1}}(e,r,u)
return o&&l?(Dn(e,`[${n}] Organic Dupe would be full creative as ${r} so choosing tentative style for ad`),d):o&&!l&&vn(f,c)?(Dn(e,`[${n}] Organic Dupe would be a full creative, but ad is not the first so returning compatible style with first ${f}`),d):vn("TEXT",c)?(Dn(e,`[${n}] tentative style would not yield full creative for organic result so returning TEXT`),{style:"TEXT"}):(Dn(e,`[${n}] tentative style would not yield full creative for organic result and first style is not compatible with TEXT so skipping ad`),null)}return s(c)&&"TEXT"===c.style?(Dn(e,`[${n}] tentative style would be filtered since the first ad has style: ${kn(c)}, so returning TEXT`),{style:"TEXT"}):d}function In(e){return!!s(e)&&e===C_}function Sn(e,t,n,r,o,s){if(!r)return Dn(e,`[${n}] is not allowed to display media because of iAd configuration.`),"TEXT"
if(t.mediaPlatformUsedForDisplayStyle&&o&&o.mediaPlatform&&!t.mediaPlatformUsedForDisplayStyle.isEqualTo(o.mediaPlatform))return Dn(e,`[${n}] filtered because media is derived from: ${t.mediaPlatformUsedForDisplayStyle.mediaType}, but first ad media is derived from: ${o.mediaPlatform.mediaType}`),null
let a,c=null
if(i(t.videos)&&(c=t.videos[0].preview),i(c)&&c.isLandscape()&&vn("LV1",o))a="LV1"
else if(i(c)&&c.isPortrait()&&In(s)&&vn("PV4",o))a=i(t.portraitScreenshots)&&t.portraitScreenshots.length>=3?"PV4":i(t.portraitScreenshots)&&t.portraitScreenshots.length>=2?"PV3":i(t.portraitScreenshots)?"PV2":"PV1"
else if(i(c)&&c.isPortrait()&&vn("PV3",o))a=i(t.portraitScreenshots)&&t.portraitScreenshots.length>=2?"PV3":i(t.portraitScreenshots)?"PV2":"PV1"
else if(i(t.landscapeScreenshots)&&vn("LI1",o))a="LI1"
else if(i(t.portraitScreenshots)&&In(s)&&vn("PI4",o))a=t.portraitScreenshots.length>=4?"PI4":t.portraitScreenshots.length>=3?"PI3":t.portraitScreenshots.length>=2?"PI2":"PI1"
else if(i(t.portraitScreenshots)&&vn("PI3",o))a=t.portraitScreenshots.length>=3?"PI3":t.portraitScreenshots.length>=2?"PI2":"PI1"
else{if(!vn("TEXT",o))return Dn(e,`[${n}] filtered because we could not create a compatible style for the first style of: ${kn(o)}`),null
a="TEXT"}return 2===Rn(e,s)&&("PI3"===a?a="PI2":"PV3"===a&&(a="PV2")),a}function vn(e,t){if(r(t))return!0
let n=!0
switch(e){case"TEXT":n="TEXT"===t.style
break
case"LV1":case"LI1":n="LV1"===t.style||"LI1"===t.style
break
case"PI4":case"PI3":case"PI2":case"PI1":case"PV4":case"PV3":case"PV2":case"PV1":n="PI4"===t.style||"PI3"===t.style||"PI2"===t.style||"PI1"===t.style||"PV4"===t.style||"PV3"===t.style||"PV2"===t.style||"PV1"===t.style
break
default:n=!1}return n}function _n(e){let t=null
const n=e.trailers[0]
let r=null
i(n)&&(n.videos.sort((e,t)=>PG(e.preview,t.preview)),r=n.videos,t=n.mediaPlatform)
const o=e.screenshots[0],s=[],a=[]
return i(o)&&(o.artwork.forEach(e=>{e.isPortrait()?s.push(e):a.push(e)}),t=o.mediaPlatform),{portraitScreenshots:s,landscapeScreenshots:a,videos:r,mediaPlatformUsedForDisplayStyle:t}}function Cn(e,t){let n=null
const r=l(x(e,BI),t)
return r&&r.length&&(n=JSON.parse(r)),n}function On(e,t){return o(e)?"NOORGANIC":t?"DUP":"NORMAL"}function bn(e,t,n,r){var o,a
const c=i(null===(a=null===(o=e.impressionMetrics)||void 0===o?void 0:o.fields)||void 0===a?void 0:a.pageCustomId),u=n&&!r&&!c
if(i(e.trailers)){const t=e.trailers.shift()
t.videos.sort((e,t)=>PG(e.preview,t.preview)),e.trailers.unshift(t)}let l,f=[],d=[]
if(i(e.screenshots)){const t=e.screenshots.shift()
t.artwork.forEach(e=>{e.isPortrait()?f.push(e):d.push(e)}),l=t.mediaPlatform}switch(t.style){case"PI4":if(e.trailers=null,d=null,e.screenshotsDisplayStyle=C_,u)if(f.length>5&&f.length<8){const e=f.splice(0,4),t=4-f.length,n=e.splice(e.length-t)
f.unshift(...n)}else f.splice(0,4)
else f.splice(4)
break
case"PI3":e.trailers=null,d=null,u?f.splice(0,3):f.splice(3)
break
case"PI2":e.trailers=null,d=null,u?f.splice(0,2):f.splice(2)
break
case"PI1":e.trailers=null,d=null,u?f.splice(0,1):f.splice(1)
break
case"LI1":e.trailers=null,f=null,u?d.splice(0,1):d.splice(1)
break
case"PV4":if(d=null,e.screenshotsDisplayStyle=C_,u)if(e.trailers[0].videos.splice(0,1),f.length>4&&f.length<7){const e=f.splice(0,3),t=3-f.length,n=e.splice(e.length-t)
f.unshift(...n)}else f.splice(0,3)
else e.trailers[0].videos.splice(1),f.splice(3)
break
case"PV3":d=null,u?(e.trailers[0].videos.splice(0,1),f.splice(0,2)):(e.trailers[0].videos.splice(1),f.splice(2))
break
case"PV2":d=null,u?(e.trailers[0].videos.splice(0,1),f.splice(0,1)):(e.trailers[0].videos.splice(1),f.splice(1))
break
case"LV1":case"PV1":u?e.trailers[0].videos.splice(0,1):e.trailers[0].videos.splice(1),d=null,f=null
break
case"TEXT":e.trailers=null,d=null,f=null}if(i(e.trailers)){const t=e.trailers.shift()
e.trailers=[t]}const p=[].concat(...[d,f].filter(s))
if(i(p)){const t=new KN(p,l)
e.screenshots=[t]}else e.screenshots=null
return e}function Rn(e,t=null){return e.client.isPhone?In(t)?4:3:2}function kn(e){if(o(e))return""
let t=""
return e&&e.mediaPlatform&&(t=` derived from ${e.mediaPlatform.mediaType} media`),`${e.style}${t}`}function Dn(e,t){"internal"===e.client.buildType&&e.isAvailable(nd)&&s(e.ads.debugLog)&&(r(EG)&&s(e.ads.isNativeAdLoggingEnabled)&&(EG=e.ads.isNativeAdLoggingEnabled()),EG&&e.ads.debugLog(t))}function Nn(e,t,n,r,o){var s
if(!(n instanceof fG||n instanceof wG))return
const a=n.lockup,c=t.lockups[0]
if(c.adamId!==a.adamId)return
const u=new Set
if(i(c.screenshots))for(const e of c.screenshots[0].artwork)u.add(e.template)
if(i(c.trailers))for(const e of c.trailers[0].videos)u.add(e.preview.template)
if(i(a.screenshots)){const e=a.screenshots[0].artwork.filter(e=>!u.has(e.template))
a.screenshots[0]=new KN(e,a.screenshots[0].mediaPlatform)}if(i(a.trailers)){const e=a.trailers[0].videos.filter(e=>!u.has(e.preview.template))
a.trailers[0]=new Xx(e,a.trailers[0].mediaPlatform)}if((null===(s=null==r?void 0:r.displayStyle)||void 0===s?void 0:s.screenshots)===C_)switch(o){case"PV4":case"PI4":(e=>{const t=a.screenshots[0].artwork
if(t.length>=4)return
let n=4-t.length
const r=c.screenshots[0].artwork.slice().reverse()
for(const e of r){if(n<=0)return
a.screenshots[0].artwork.unshift(e),n-=1}})()}}function Ln(e,t,n){var r,o
const s=n.id,i=t.lockups[0]
if(i.adamId!==s){const e=y(n.meta)
return n.meta=e,void Fn(null,n)}const a=e.find(e=>e.id===i.adamId)
Fn(null===(o=null===(r=null==a?void 0:a.meta)||void 0===r?void 0:r.cppData)||void 0===o?void 0:o.ppid,n)}function Fn(e,t){var n
let o=y(t.meta)
r(e)?null===(n=null==o?void 0:o.cppData)||void 0===n||delete n.ppid:(r(o)&&(o={}),r(o.cppData)&&(o.cppData={}),o.cppData.ppid=e),t.meta=o}function $n(e,t,n,r,o){const i=p(r,qf.pageInformation,{}),a=p(r,qf.timingValues),c=l(r,qf.requestedUrl)
let u
const f=i
if(f.pageType=t,f.pageId=n,o&&(f[sR]=o),t===oR){const t=O(r),n=U(t,FN),o=U(t,Vk)
f[sR]=`${o}_${n}`,Fa(e,t)&&(f[kC]=WR),u=re(e,t)}else t===hP?f[sR]=`${t}_${n}`:t===LR?f[sR]=sw:t===FC&&n===FC&&(f[sR]=`${t}_${n}`)
const d=new kH(Xa(f))
d.timingMetrics=a,d.pageUrl=c,s(u)&&(d.productVariantData=u)
const h=l(r,OH)
if(h){const t=JSON.parse(h),r=RH.placementTypeFromPlacementId(l(t,NR))
d.iAdInfo=new RH(e,r,l(t,$R)),d.iAdInfo.applyClickFieldsFromPageRequest(n,t)}return d.recoMetricsData=D(r),d}function xn(e,t,n,r,o){const s=new kH({pageType:t,pageId:n,page:`${t}_${n}`,pageDetails:r})
if(o){const t=RH.placementTypeFromPlacementId(l(o,NR))
s.iAdInfo=new RH(e,t,l(o,$R)),s.iAdInfo.applyClickFieldsFromPageRequest(n,o)}return s}function Mn(e,t,n,o){r(n)||(t.pageMetrics.pageFields=ct(n),t.pageMetrics.addManyInstructions(qn(e,n,o)),t.pageMetrics.addData(Hn(e,n,o),[Mf.PageInvocationPoint.pageEnter]),t.pageMetrics.addData(function(e,t,n){const r=Hn(e,t,n)
return r.fields[Wk]=Kh,r}(e,n,o),[Mf.PageInvocationPoint.pageExit]),t.pageMetrics.pageRenderFields=Wn(0,n,o),t.pageRenderMetrics=Wn(0,n,o),t instanceof tG||t.pageMetrics.addData(jn(e,n,o),[Mf.PageInvocationPoint.backButton]))}function Un(e,t,n){const r=new kH({pageId:UO,pageType:LR})
return r.pageUrl=n,r}function Bn(e,t,n,r,s,a,c,u){const f=l(n,[DR,JR,Iw]),d=$n(e,LR,f,n)
return d.searchTermContext=r,d.searchTerm=r.term,d.pageUrl=s,u&&(d.guidedSearch=function(e,t,n){const r={}
if(i(t.guidedSearchTokens)&&(r.searchSelectedGuidedFacets=t.guidedSearchTokens),n&&n.finalTerm&&(r.searchGuidedFinalQuery=n.finalTerm),!o(r))return r}(0,t,u)),null!=a&&(d.iAdInfo=new RH(e,qR,a.iAdId,a.appStoreClientRequestId,c)),d}function Gn(e,t){if(r(t)||r(t.pageMetrics))return
const n=t.pageMetrics.instructions
if(!r(n))for(const e of n)e.data.fields[Wk]===yN&&e.data.includingFields.push(jP)
let o=null
if(t instanceof RU?o=t:t instanceof zU&&(o=t.lockup),o){const e=[]
if(o.buttonAction instanceof YL)e.push(o.buttonAction)
else if(o.buttonAction instanceof zL&&o.buttonAction.buyAction instanceof YL)e.push(o.buttonAction.buyAction)
else if(o.buttonAction instanceof JL&&o.buttonAction.completionAction instanceof YL)e.push(o.buttonAction.completionAction)
else if(o.buttonAction instanceof XL){if(o.buttonAction.buyAction instanceof YL&&e.push(o.buttonAction.buyAction),o.buttonAction.defaultAction instanceof YL&&e.push(o.buttonAction.defaultAction),o.buttonAction.openAction instanceof YL&&e.push(o.buttonAction.openAction),o.buttonAction.subscribePageAction instanceof VL&&o.buttonAction.subscribePageAction.page===NE&&i(o.buttonAction.subscribePageAction.pageUrl)){const e=Ox.from(o.buttonAction.subscribePageAction.pageUrl)
e.param(ex,SD),o.buttonAction.subscribePageAction.pageUrl=e.build()}o.buttonAction.subscribePageAction instanceof VL&&o.buttonAction.subscribePageAction.pageData instanceof QU&&o.buttonAction.subscribePageAction.pageData.postSubscribeAction instanceof YL&&e.push(o.buttonAction.subscribePageAction.pageData.postSubscribeAction),o.buttonAction.subscribePageAction instanceof VL&&o.buttonAction.subscribePageAction.pageData instanceof rB&&o.buttonAction.subscribePageAction.pageData.purchaseSuccessAction instanceof YL&&e.push(o.buttonAction.subscribePageAction.pageData.purchaseSuccessAction)}for(const t of e)t.purchaseConfiguration&&(t.purchaseConfiguration.excludeAttribution=!1)}}function Vn(e){Object.keys(e).filter(e=>!IG.has(e)).forEach(t=>delete e[t])}function Hn(e,t,n){var r,o,i,a,c
const u=Yn(t,n)
t.iAdInfo&&Object.assign(u,t.iAdInfo.pageFields),s(t.offerReleaseDate)&&(u[KP]=De(t.offerReleaseDate))
const l=t.searchTermContext
l&&(u[vk]=l.term,l.suggestedTerm&&(u.searchSuggestedTerm=l.suggestedTerm),l.correctedTerm&&(u.searchCorrectedTerm=l.correctedTerm),l.originatingTerm&&(u[XP]=l.originatingTerm)),t.guidedSearch&&Object.assign(u,t.guidedSearch)
const f=function(e,t,n,r,o){const s={}
Object.assign(s,o),s[Wk]=yN,r&&(s[Vh]=r.clientCorrelationKey,s.requestStartTime=r.requestStartTime,s.responseStartTime=r.responseStartTime,s.responseEndTime=r.responseEndTime)
const i=[Ib,Kv]
return n&&i.push("crossfireReferralCandidate"),je(0,new FL(s,i,[],Je(0,s),ze(e,s)))}(e,0,null!==(r=t.isCrossfireReferralCandidate)&&void 0!==r&&r,t.timingMetrics,u),d=null!==(i=null===(o=t.iAdInfo)||void 0===o?void 0:o.iAdIsPresent)&&void 0!==i&&i,p=null!==(c=null===(a=t.iAdInfo)||void 0===a?void 0:a.shouldIncludeAdRotationFields)&&void 0!==c&&c
return d&&p&&f.includingFields.push(MO),f}function jn(e,t,n){return function(e,t){const n={}
return Object.assign(n,t),n[qb]=Gh,We(e,Gh,vN,n)}(e,Yn(t,n))}function Wn(e,t,n){const r=Yn(t,n)
return t.searchTermContext&&(r[vk]=t.searchTermContext.term),t.baseFields&&Object.assign(r,t.baseFields),function(e,t,n){const r={}
return Object.assign(r,n),r[Wk]="pageRender",t&&(r[Zv]||(r[Zv]=t.pageURL),r[Vh]=t.clientCorrelationKey,r.platformRequestStartTime=t.requestStartTime,r.platformResponseStartTime=t.responseStartTime,r.platformResponseEndTime=t.responseEndTime,r.platformResponseWasCached=t.responseWasCached,r.platformJsonParseStartTime=t.parseStartTime,r.platformJsonParseEndTime=t.parseEndTime),r}(0,t.timingMetrics,r)}function qn(e,t,n){var r,o
const i=Yn(t,n)
t.searchTermContext&&(i[vk]=t.searchTermContext.term)
const a=y(i)
t.iAdInfo&&Object.assign(a,t.iAdInfo.impressionsFields),t.guidedSearch&&Object.assign(a,t.guidedSearch)
const c=[{data:Ye(e,a,null!==(o=null===(r=t.iAdInfo)||void 0===r?void 0:r.shouldIncludeAdRotationFields)&&void 0!==o&&o,Tn(e)),invocationPoints:[Mf.PageInvocationPoint.appExit,Mf.PageInvocationPoint.pageExit]}]
if(s(t.iAdInfo)){const n=function(e,t,n){var r,o
const i=null!==(o=null===(r=n.iAdInfo)||void 0===r?void 0:r.shouldIncludeAdRotationFields)&&void 0!==o&&o,a=Ye(e,t,i,!1).fields
if(a[Sb]=Qv,s(n.iAdInfo)){const e=n.iAdInfo.fastImpressionsEventVersion
a[Xv]=e,5===e&&(a.viewableArea="excludingTabBar",delete a[NR])}const c=["fastImpressions",Ib,Kv]
return i&&c.push(MO),je(0,new FL(a,c,[],Je(0,a),ze(e,a,n)))}(e,a,t)
c.push({data:n,invocationPoints:[Mf.PageInvocationPoint.appExit,Mf.PageInvocationPoint.pageExit,Mf.PageInvocationPoint.timer]})}return c}function Yn(e,t){const n={}
return s(e.offerType)&&(n[RC]=e.offerType),n&&t&&t(n),n}function zn(e,t,n,a,c,u,l,f,d,p,h,w,g,m,y){var T,A
if(t.type!==PN)return null
const E=U(t,"promotionStartDate")
if(o(E))return null
const P=new Date(E)
if(r(P))return null
const I=new Date
if(P.getTime()>I.getTime()&&!y)return P
const S=hn(e,t,"lockupArtwork"),v=wn(e,t,"lockupVideo",!1,!1)
if(r(S)&&o(v))return null
const _=null!==(T=null==v?void 0:v.preview)&&void 0!==T?T:S,C=L(_.backgroundColor)?hN:dD,O=L(_.backgroundColor,10),b=U(t,FN)
let R=U(t,YR)
i(g)&&(R=g)
const k=U(t,tv)
if(o(b)||o(R)||o(k))return null
const D=new Date(k)
if(r(D))return null
const N=null!==(A=U(t,ob))&&void 0!==A?A:"",F=null!=n?n:he(t,gN)
let $
if(s(F)){if($=gn(e,t,F,b,u,l,f,p,w,null,m),r($))return null}else if(!d)return null
const x=U(t,"requirement"),M=U(t,Gb),B=U(t,nv)
let G
if(i(B)&&(G=new Date(B)),G.getTime()<=I.getTime()&&!h)return null
const V=Kn(e,Jn(U(t,AE),D,G),D,G),H=new KB(t.id,S,v,b,M,N,D,G,R,x,$,a,V,C,O)
if(s(F)){const n={...p,id:F.id,inAppEventId:t.id,relatedSubjectIds:[F.id]}
H.notificationConfig=mn(e,t,H,n,!0)}return c&&s(F)&&(H.clickAction=Zn(e,t,F,H,p,w)),H}function Jn(e,t,n){let r=null!=e?e:"live"
return"live"===r&&s(n)&&n.getTime()-t.getTime()>216e5&&(r="happening"),r}function Kn(e,t,n,r){const o=[],s=Ne(n),i=e.loc.uppercased(e.loc.formatDate("MMM d",n)),a=new JB(null,i,!1,null,null)
o.push(a)
const c=new Date(s)
c.setDate(c.getDate()-6)
const u=e.loc.formatDate("EEE j:mm",n),l=e.loc.uppercased(u),f=new JB(c,l,!1,null,null)
o.push(f)
const d=new Date(s)
d.setDate(d.getDate()-1)
const p=e.loc.string("APP_EVENTS_FORMATTED_DATE_TOMORROW"),h=e.loc.formatDateInSentence(p,qd,n),w=e.loc.uppercased(h),g=new JB(d,w,!1,null,null)
if(o.push(g),n.getHours()>1||1===n.getHours()&&n.getMinutes()>0){let t
t=n.getHours()>=19?e.loc.string("APP_EVENTS_FORMATTED_DATE_TONIGHT"):e.loc.string("APP_EVENTS_FORMATTED_DATE_TODAY")
const r=e.loc.formatDateInSentence(t,qd,n),i=e.loc.uppercased(r),a=new JB(s,i,!1,null,null)
o.push(a)}const m=new Date(n)
let y
m.setHours(m.getHours()-1),y="available"===t?"APP_EVENTS_FORMATTED_DATE_AVAILABLE_IN_COUNTDOWN":"APP_EVENTS_FORMATTED_DATE_STARTS_IN_COUNTDOWN"
const T=new JB(m,null,!1,n,y)
let A,E
switch(o.push(T),t){case"available":A=e.loc.string("APP_EVENTS_FORMATTED_DATE_NOW_AVAILABLE"),E=!1
break
case"happening":A=e.loc.string("APP_EVENTS_FORMATTED_DATE_HAPPENING_NOW"),E=!1
break
default:A=e.loc.string("APP_EVENTS_FORMATTED_DATE_LIVE"),E=!0}const P=new JB(n,A,E,null,null)
if(o.push(P),null!==r){const t=new JB(r,e.loc.string("APP_EVENTS_FORMATTED_DATE_EVENT_ENDED"),!1,null,null)
o.push(t)}return o}function Zn(e,t,n,r,o,s){const i=Xn(e,t,n,r,o,ID,s,null)
return Qe(e,i,{id:t.id,actionDetails:{action:"Open",contentType:IR},inAppEventId:t.id,relatedSubjectIds:[n.id],...o}),i}function Xn(e,t,n,a,c,u,l,f){const d=function(e,t,n,a,c,u,l,f){var d
const p=hn(e,t,Fk),h=wn(e,t,$k,!0,!0),w=y(a),g=null!==(d=null==h?void 0:h.preview)&&void 0!==d?d:p
let m=hN,T=!0,A=!1
s(g)&&(T=L(g.backgroundColor),A=L(g.backgroundColor,10),m=T?hN:dD)
const E=function(e,t,n,r){const o={pageId:`${t}_${n}`,pageType:nC}
return s(r)&&(o[GO]=r.app,o[CC]=r[Z_]),new kH(o)}(0,t.id,n.id,l),P={...c,pageInformation:E,locationTracker:{rootPosition:0,locationStack:[]},targetType:nC},I={...P,id:n.id,inAppEventId:t.id,relatedSubjectIds:[n.id]}
w.notificationConfig=mn(e,t,a,I,!1)
const S=function(e,t,n,r){var a,c
const u=U(t,DN)
if(o(u))return null
const l=null!==(a=n.moduleArtwork)&&void 0!==a?a:null===(c=n.moduleVideo)||void 0===c?void 0:c.preview
let f=e.loc.string(Wd)
f===Wd&&(f=n.subtitle)
const d=function(e,t,n,r,o,s){return $f.context("shareSheetDataForAppEvent",()=>{const e=new tL(t,n,s)
return new rL(e,r,null)})}(0,n.title,f,u,0,l)
if(!s(d))return null
const p=function(e,t,n){var r
const o=[]
if(i(n)){const t=Ot(e,n)
s&&o.push(t)}if(t.startDate.getTime()<=Date.now())return o
if(e.host.clientIdentifier===PL)return o
const a=new aF(fN)
a.title=e.loc.string("APP_EVENTS_CALENDAR_NOT_AUTHORIZED_TITLE"),a.message=e.loc.string("APP_EVENTS_CALENDAR_NOT_AUTHORIZED_DETAIL"),a.isCancelable=!0,a.buttonTitles=[e.loc.string(Rd)],a.buttonActions=[new WL("prefs:root=Privacy&path=CALENDARS",!0)]
let c=!1
if(s(t.endDate)){const e=Ne(t.startDate),n=Ne(t.endDate),r=t.endDate.getTime()-t.startDate.getTime(),o=216e5
n.getTime()>e.getTime()&&r>o&&(c=!0)
const s=8634e4
e.getTime()===n.getTime()&&r>=s&&(c=!0)}const u=new _F(t.startDate,t.endDate,c,t.title,null===(r=t.lockup)||void 0===r?void 0:r.title,t.detail,n,a,eE)
u.title=e.loc.string("SHARE_SHEET_ADD_TO_CALENDAR"),u.artwork=Ve(e,"systemimage://calendar.circle")
const l=new cF("com.apple.AppStore.createCalendarEventActivity",u)
return o.unshift(l),o}(e,n,u),h=new uF(d,p)
return Qe(e,h,{...r,targetType:VD,actionType:lO,idType:PR}),h}(e,t,a,I),v=T?hN:dD,_=gn(e,t,n,w.title,v,TE,!1,P,u,l,!1)
if(r(_))return null
w.lockup=_
const C=new ZB(w,p,h,S,m,A)
return Mn(e,C,E,e=>{i(l)&&kL.shared.addReferralContextToMetricsFieldsIfNecessary(e)}),C}(e,t,n,a,c,l,f),p=new VL("appEventDetail")
return p.title=a.title,p.pageData=d,p.animationBehavior=u,c&&c.pageInformation&&(p.referrerUrl=c.pageInformation.pageUrl),p}function Qn(e,t=!1){return{timeToLive:rr(e),nextPreferredContentRefreshDate:null,refreshWhileVisibleForNextPreferredContentRefreshDate:t}}function er(e,t){r(t)||r(e)||(r(t.nextPreferredContentRefreshDate)||e.getTime()<t.nextPreferredContentRefreshDate.getTime())&&e.getTime()>(new Date).getTime()&&(t.nextPreferredContentRefreshDate=e)}function tr(e,t){if(!function(e){return e.bag.enableAutomaticPageRefresh}(e))return null
if(r(t))return null
let n,o=!1
if(s(t.timeToLive)&&s(t.nextPreferredContentRefreshDate)){const e=or(t.timeToLive)
e.getTime()<t.nextPreferredContentRefreshDate.getTime()&&e.getTime()>(new Date).getTime()?n=e:(n=t.nextPreferredContentRefreshDate,o=!0)}else if(s(t.timeToLive))n=or(t.timeToLive)
else{if(!s(t.nextPreferredContentRefreshDate))return null
n=t.nextPreferredContentRefreshDate,o=!0}if(n.getTime()<=(new Date).getTime())return null
const i=o&&t.refreshWhileVisibleForNextPreferredContentRefreshDate
return new SG("timeToLive",0,null,n,i)}function nr(e){return null==e?void 0:e.nextPreferredContentRefreshDate}function rr(e){return e[qf.contentMaxAge]}function or(e){const t=new Date
return t.setSeconds(t.getSeconds()+e),t}function sr(e,t,n,r,s){if(!pn(e))return null
if(o(t))return null
const i={pageInformation:n,locationTracker:r,targetType:IR},a=yn(e,t,null,!1,!1,i,!0,!0,!1,s.allowUnpublishedAppEventPreviews)
er(a.nextAppEventPromotionStartDate,null==s?void 0:s.refreshController)
const c=a.appEvents
if(0===c.length)return null
const u=ir(c,null)
return u.isHorizontal=!1,cn(0,u,{...i,id:"",kind:null,softwareType:null,targetType:KD,title:""}),u}function ir(e,t){const n=new CM(Mb)
return n.isHorizontal=!0,n.title=t,n.items=e,n}function ar(e,t,n=e.host.clientIdentifier,r=[]){t||(t=36)
const o=new xM(e).forType(X_).includingAdditionalPlatforms(r).includingMacOSCompatibleIOSAppsWhenSupported(!0).addingQuery(ED,`${t}`)
return n===yL?o.addingContext(xN):n===TL&&o.addingContext(OD),o}function cr(e,t,n=!0){return $f.context("categoryListFromApiResponse",()=>{const r=c(t,"results.categories"),o=ur(e,d(r,"0"),n)
return o?new _G(o.children):null})}function ur(e,t,n=!0){return $f.context("categoryFromApiResponse",()=>{if(!t)return null
const r=l(t,FN),o=l(t,ED),i=l(t,tb),a=ta(e,d(t,lN),{allowingTransparency:!0,useCase:19}),u=c(t,bD).map(t=>ur(e,d(t),n)).filter(e=>s(e)),f=function(e,t){return t.sort((t,n)=>{try{return t.name.localeCompare(n.name,e.loc.safeIdentifier,{usage:Nk})}catch(e){return 0}})}(e,u),p=l(t,RD)
return p&&n&&f.unshift(new vG(p,o,a,i,[])),new vG(r,o,a,i,f)})}async function lr(e,t,n){const r=be(e,t).toString()
return Date.now(),await e.mediaToken.refreshToken().then(async t=>await dr(e,r,t,n,!1)).then(e=>(Date.now(),t.canonicalUrl&&(e[qf.requestedUrl]=t.canonicalUrl),e))}function fr(e,t){return e.bag.redirectUrlWhitelistedQueryParams.filter(e=>s(t.query[e]))}async function dr(e,t,n,a={},c=!1){const u=new Ox(t),l=fr(e,u)
for(const e of l)u.removeParam(e)
const d=u.toString()
let p=a.headers
p||(p={}),p.Authorization="Bearer "+n
const h=e.network.fetch({url:d,headers:p,method:a.method,body:a.requestBodyString,timeout:a.timeout})
return await h.then(n=>{try{if(401===n.status||403===n.status){if(c)throw Error("We refreshed the token but we still get 401 from the API")
return e.mediaToken.resetToken(),e.mediaToken.refreshToken().then(async n=>await dr(e,t,n,a,!0))}if(404===n.status)pr()
else if(!n.ok){const e=new CG(`Bad Status code ${n.status} for ${d}, original ${t}`)
throw e.statusCode=n.status,e}const l=Date.now()
let p
p=204===n.status&&o(n.body)?{}:JSON.parse(n.body)
const h=Date.now()
if(p){if(p[qf.pageInformation]=g(function(e,t){const n=e.client.storefrontIdentifier
let r=null
if(i(n)){const e=n.split("-")
i(e)&&(r=e[0])}return{serverInstance:t.headers[OG],storeFrontHeader:n,language:e.bag.language,storeFront:r,environmentDataCenter:t.headers["x-apple-application-site"]}}(e,n)),n.metrics.length>0){const e=n.metrics[0]
e.parseStartTime=l,e.parseEndTime=h,p[qf.timingValues]=e}else{const e={pageURL:n.url,parseStartTime:l,parseEndTime:h}
p[qf.timingValues]=e}p[qf.contentMaxAge]=function(e,t){const n=Object.keys(t.headers).find(e=>"cache-control"===e.toLowerCase())
if(o(n))return null
const s=t.headers[n]
if(o(s))return null
const i=s.match(/max-age=(\d+)/)
return r(i)||i.length<2?null:f(i[1])}(0,n),Array.isArray(p.data)&&s(u=p.data)&&0===u.length&&pr(),p[qf.requestedUrl]=t}return p}catch(e){if(e instanceof CG)throw e
throw new Error(`Error Fetching - filtered: ${d}, original: ${t}, ${e.name}, ${e.message}`)}var u})}function pr(){const e=new CG("No content")
throw e.statusCode=204,e}function hr(e){if(null===bG){bG=new Set
for(const t of e.bag.suppressedPrivacyAppIds)bG.add(t)}}function wr(e,t){return hr(e),!o(t)&&bG.has(t)}function gr(e,t){return hr(e),!o(t)&&(!(!bG.has("com.apple.InstallAssistant.*")||!t.startsWith("com.apple.InstallAssistant."))||bG.has(t))}function mr(e,t){const n=t.host
if(r(n))return!1
const o=[e.bag.mediaHost,e.bag.mediaEdgeHost(e),e.bag.mediaEdgeSearchHost]
for(const e of o)if(!r(e)&&-1!==n.indexOf(e))return!0
return!1}function yr(e,t){return be(e,new xM(e,t)).toString()}function Tr(e){let t=e.query.id
const n=e.pathname
if(r(t)&&i(n)){const e=kG.exec(n)
e&&e.length>1&&(t=e[1])}if(!a(t)){const n=e.pathComponents()
i(n)&&(t=n[n.length-1])}return t}function Ar(e,t,n=!1){let r=Tr(t)
if(!a(r))throw new Error(`Unable to map ${t.build()} to a media api url`)
r in DG&&(r=DG[r])
let o=NN,c=RG,u=[Wb,aC,RN,TN,hv,wv,cC,gv];-1!==t.pathname.indexOf(mv)&&(o=TN,c=[ZR,vR,kD,xE,Hb],u=[aC,NN,RN,cC]),e.bag.enablePrivacyNutritionLabels&&!wr(e,r)&&c.push(TO),e.appleSilicon.isSupportEnabled&&c.push(PD)
const l=h(t.query[O$]);(null===l||l)&&(c.push(jS,WS,sN),u.push(Zk)),e.props.enabled(ik)&&c.push(rC)
const f=new xM(e).forType(o).withIds([r]).includingAdditionalPlatforms(v(e)).includingAdditionalPlatforms([AO]).includingRelationships(u).includingAttributes(c).addingRelationshipLimit(RN,_(e)).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes(ne(e))
i(t.query[p$])&&f.addingQuery(p$,t.query[p$])
const d=t.query[Tx]
s(d)&&f.addingQuery(Tx,d)
const p=i(t.pathname)&&-1!==t.pathname.indexOf(mv)
return pn(e)&&!p&&(f.includingScopedRelationships(NN,[PN]),f.includingScopedAttributes(PN,[mN,Fk,$k]),f.includingScopedAvailableIn(PN,[BE])),mc(e,eN)&&f.enablingFeature(yv),n&&f.enablingFeature(GE),f.attributingTo(t.build())}function Er(e){const t=[cN,sN,oD,kD]
return t.push(zk),e.appleSilicon.isSupportEnabled&&t.push(PD),t}function Pr(e){let t=[]
switch(e.client.deviceType){case $N:t=t.concat(LG),e.appleSilicon.isSupportEnabled&&t.push(fC)
break
case xN:t.push(FG)
break
default:t=t.concat(NG)}return t}function Ir(e,t,n,r,o,s){const i=RG
e.bag.enablePrivacyNutritionLabels&&!wr(e,t)&&i.push(TO),e.appleSilicon.isSupportEnabled&&i.push(PD),e.props.enabled(ik)&&i.push(rC)
const a=new xM(e).forType(NN).withIds([t]).includingAdditionalPlatforms(v(e)).includingAdditionalPlatforms([AO]).includingAttributes(i).includingRelationships([Zk,Wb,aC,RN,TN,hv,wv,cC,gv]).addingRelationshipLimit(RN,_(e)).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes(ne(e))
return n&&a.addingQuery("availability",_p),(0,Wf.isSome)(r)&&a.addingQuery(p$,r),s&&a.enablingFeature(GE),pn(e)&&!o&&(a.includingScopedRelationships(NN,[PN]),a.includingScopedAttributes(PN,[mN,Fk,$k]),a.includingScopedAvailableIn(PN,[BE])),mc(e,eN)&&a.enablingFeature(yv),a}function Sr(e){switch(e){case 504:case 505:case 506:case 520:case 521:case 522:case 523:case 524:case 525:return!0
default:return!1}}async function vr(e,t,n,r=null){const o=function(e,t,n,r=null,o=e.host.clientIdentifier){const s=[zk,oD,kD]
e.appleSilicon.isSupportEnabled&&s.push(PD)
let a=new xM(e).forType(PO).addingQuery(ED,t).includingAttributes(s).addingQuery(HE,NN).includingMacOSCompatibleIOSAppsWhenSupported(!0).includingAdditionalPlatforms(v(e)).usingCustomAttributes(ne(e))
return i(n)&&a.addingQuery(P$,n),o===yL?a.addingContext(xN):o===TL&&a.addingContext(OD),e.appleSilicon.isSupportEnabled&&(a=a.includingAdditionalPlatforms([Yk,cD])),r&&(a=a.addingQuery(I$,r)),a}(e,t,n,r)
return o.withLimit(200),o.enablingFeature("newChartsElements"),await lr(e,o)}async function _r(e,t){let n
return n=e.host.clientIdentifier===TL||function(e){const t=e.query[P$]
return i(t)&&(-1!==t.indexOf("top-free-safari-extensions")||-1!==t.indexOf("top-paid-safari-extensions"))}(t)?Promise.resolve({}):lr(e,ar(e)).catch(()=>{}),await n}function Cr(e){return UG.has(e)}function Or(e){return $G.has(e)}function br(e){return MG.has(e)}function Rr(e,t,n){const r=V(t,sk)
let o=null
const s=U(t,"gamesFilter")
switch(s){case ON:case Lv:case"all":o=s
break
default:495!==r&&500!==r||(o=ON)}let a=null,c=U(t,Dr(0,r)),u=null,f=U(t,uk),p=!1
const h=we(t,xv)[0]
476===r&&i(h)&&(a=e.loc.uppercased(U(t,Dr(0,r))),f=null,p=!0,h.type===Mv?(c=$a(e,h,FN),u=ta(e,d(x(h,cN),"brandLogo"),{useCase:1,style:vv})):(c=U(h,Dr(0,r)),u=sa(e,h,{useCase:1})))
const w={featuredContentId:r,id:l(t,"id"),presentationHints:{},metricsPageInformation:n.metricsPageInformation,metricsLocationTracker:n.metricsLocationTracker,pageGenreId:n.pageGenreId,featuredContentData:t,title:c,subtitle:f,eyebrow:a,titleArtwork:u,shouldFilter:!1,gamesFilter:o,remainingItems:[],isFirstRender:!0,isDeferring:!1,showOrdinals:!1,hasExistingContent:!1,showingPlaceholders:!1,ordinalIndex:1,isSearchLandingPage:n.isSearchLandingPage,isArcadePage:n.isArcadePage}
return{shelfToken:w,metricsOptions:{id:w.id,kind:null,softwareType:null,targetType:KD,title:p?w.eyebrow:w.title,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,idType:fk,fcKind:r,recoMetricsData:Mr(0,t)}}}function kr(e){return e&&e.isDeferring&&e.isFirstRender}function Dr(e,t){switch(t){case 548:case 495:case 496:return KR
default:return FN}}function Nr(e){let t=(new Ox).set(Ek,RF).append(kk,MF).append(kk,LF).append(kk,encodeURIComponent(JSON.stringify(e))).param(k$,`${e.featuredContentId}`)
return i(e.nativeGroupingShelfId)&&(t=t.param(D$,`${e.nativeGroupingShelfId}`)),t.build()}function Lr(e,t){if(o(t))return null
r(t.shelfStyle)&&(t.shelfStyle=e.contentType)
const n=e.contentType!==RP&&i(e.items)
return t.hasExistingContent=t.hasExistingContent||n&&t.isFirstRender,(t.remainingItems.length||t.recommendationsHref||t.onDeviceRecommendationsUseCase)&&t.isFirstRender?Nr(t):null}function Fr(e,t){const n=i(e.relationshipToFetch)
let r=b(t)
if(n){const n={}
for(const e of t.data)n[e.id]=e
r=[]
for(const t of e.remainingItems){const o=he(t,e.relationshipToFetch)
i(o)&&(t.relationships[e.relationshipToFetch].data=[n[o.id]]),r.push(t)}}return r}function $r(e,t,n){const r=n[qD],o=JSON.parse(r),s=i(o.remainingItems),a=!s&&i(o.recommendationsHref)
if(s){const t=function(e){const t=i(e.relationshipToFetch)
let n=e.remainingItems
return t&&(n=e.remainingItems.map(t=>he(t,e.relationshipToFetch))),n}(o),n=new xM(e,t)
return fe(e,n,t),xr(e,n),n}if(a){const t=new xM(e,o.recommendationsHref)
return xr(e,t),pn(e)&&(t.enablingFeature(aN),t.includingMetaKeys(kP,[$O,DP]),t.includingScopedAttributes(PN,[mN,Fk,$k]),t.includingScopedRelationships(PN,[gN])),t}return null}function xr(e,t){t.includingAdditionalPlatforms(v(e)).includingRelationshipsForUpsell(!0).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes(ne(e))
let n=[cN,sN,kD];(t.includesResourceType(NN)||t.includesResourceType(PN))&&(n=n.concat(ZR,vR,pb)),t.includingAttributes(n),t.includesResourceType(PN)&&(t.includingMetaKeys(kP,[$O,DP]),t.includingScopedAttributes(PN,[mN,Fk,$k]),t.includingScopedRelationships(PN,[gN]))}function Mr(e,t){const n=V(t,sk)
switch(n){case 425:case 415:case 416:case 417:case 501:case 258:case 421:case 422:case 423:case 261:return D(pe(t,bD))
case 437:case 265:{const e=pe(t,bD),n=M(t,FO)
return i(e)?D(e):i(n)?D(t):null}case 414:case 424:return null
default:if(function(e){return Or(e)||Cr(e)||BG.has(e)||518===e}(n)){let e=pe(t,kN)
if(r(e))return null
const n=e.data
return n&&0!==n.length||(e=pe(t,bD)),D(e)}return null}}function Ur(e,t,n){const r=ta(e,t,n)
return r&&(r.crop="sr"),r}function Br(e,t,n,r,o){const s=x(t,lN)
if(s instanceof Array){const t=function(e,t,n,r){const o=n/r
let s=0,i=null
for(const e of t){const t=f(e,hb),r=t/f(e,wb);(r===o||Math.abs(o-r)<=Math.abs(o-s))&&(!i||t<=n&&t>i.width||i.width>n&&t<i.width&&t>i.width)&&(i=e,s=r)}return i?Ve(e,l(i,DN),f(i,hb),f(i,wb),null,l(i,qE)):null}(e,s,n,r)
return t.crop="bb",t}return null!=s?Ur(e,s,o):null}function Gr(e,t,n,a,c,u,f,d){const p=i(l(t,DN)),h=i(U(t,mP)),w=de(t,yD,!1),g=de(t,kN,!1)||w
if(h||p)return function(e,t,n,o,i){const a=s(l(t,DN))?t:x(t,nN)
if(r(a)||kr(n))return c=t,i?i():null==n||n.remainingItems.push(c),null
var c
const u=l(a,cv),f=l(a,DN),d=l(a,RD),p=qr(U(t,gP))||d
let h=null
if(u===RE)h=new WL(f),h.title=p
else{const t=e.required(zH).fetchFlowPage(f),n=new VL(t)
n.pageUrl=f,n.title=p,h=n}return h.presentationStyle=[qA],Qe(e,h,{...o,id:""}),{action:h,caption:null,title:p,subtitle:null,artwork:null,shortEditorialDescription:null}}(e,t,n,u,d)
if(g){let p,h
if(a&&!w){h=Qr(e,"groupingCommon",we(t,kN),!0,c,!1,1)
const n=h.personalizedData
if(0===n.length)return null
p=n[0]}else p=he(t,w?yD:kN)
if(r(p))return null
if(r(p.attributes)||kr(n))return i(n)&&(n.isDeferring=!0),function(e){d?d():null==n||n.remainingItems.push(e)}(p),null
let g=$a(e,p,uk)||ki(e,p)
const m=Ke(e,t,u)
m.targetType=u.targetType
let y=qi(e,p,m,null==n?void 0:n.clientIdentifierOverride)
const T=G(p,gO)
let A,E=null,P=null,I=null
const S=U(p,"itunesNotes.short"),v={...u,id:t.id}
switch(p.type){case Hk:E=x(p,lN)
break
case iN:{const a=he(p,ND)
if(i(a)){const r={...u,id:t.id,inAppEventId:a.id},i=he(a,gN)
s(i)&&(r.relatedSubjectIds=[i.id])
const c=zn(e,a,null,!1,!0,hN,tN,!1,!1,r,!1,!0,null,n.isArcadePage,!1)
if(s(c)){if(c instanceof Date)return er(c,f.refreshController),null
A=c,T||(y=A.clickAction),o(g)&&(g=$a(e,a,aD))}}P=U(p,RD),P&&(P=P.replace(/\n/g," "))
const c=he(p,kN),d=l(p,"editorialNotes.tagline")
o(g)&&(d?g=d:c&&(g=$a(e,c,aD))),o(g)&&s(A)&&(g=A.subtitle)
let h=U(p,ph)
i(h)||(h=g)
const w={useThreeLineOverlayForBranded:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0}
if(r(A)&&rt(0,p),s(A))I=A.lockup
else{const t=null,r=null
{ic(v,null==n?void 0:n.title)
const o=yu(e,p,w,{pageInformation:u.pageInformation,locationTracker:u.locationTracker},!0,t,r)
1===o.length&&(I=o[0]),cc(v.locationTracker)}}}default:{const t=[NN,Pk,TN,rD]
if(r(I)&&t.indexOf(p.type)>-1){ic(v,null==n?void 0:n.title)
const t={metricsOptions:{pageInformation:u.pageInformation,locationTracker:u.locationTracker,recoMetricsData:D(p)},clientIdentifierOverride:null==n?void 0:n.clientIdentifierOverride,artworkUseCase:ea(0,null==n?void 0:n.shelfStyle),canDisplayArcadeOfferButton:!0,shouldHideArcadeHeader:e.featureFlags.isEnabled(cb)&&n.isArcadePage}
I=xi(e,p,t),cc(v.locationTracker)}E=Ae(e,p,cN)||x(p,cN),o(g)&&s(I)&&(g=I.subtitle)
break}}if(s(y)){y.presentationStyle=[qA]
const n=qr(U(t,gP)),r=$a(e,p,FN)
y.title=n||r||y.title||g||P}return{action:y,caption:P,title:null==y?void 0:y.title,subtitle:g,artwork:E,shortEditorialDescription:S,content:p,lockup:I,appEvent:A,onDevicePersonalizationDataProcessingType:null==h?void 0:h.processingType}}return null}function Vr(e,t){const n={}
for(const t of e)n[t.id]=t
const r=[kN,kO],o=[]
for(const e of t){let t=!0
for(const o of r){const r=we(e,o)
if(s(r)){const s=[]
for(const e of r){const t=n[e.id]
i(t)&&s.push(t)}s.length===r.length?e.relationships[o]={data:s}:t=!1}}t&&o.push(e)}return o}function Hr(e,t,n){t.seeAllAction=null,t.isHorizontal=!1,t.shouldFilterApps&&(t.filteredItemsMinimumCount=0,t.filteringExcludedItems=n.includedAdAdamIds)}function jr(e,t){switch(t){case EC:return Mk
case Ph:return NP
case rb:return Uv
case SC:return yP
default:return null}}function Wr(e,t){let n=U(t,Xk)
return n||(n=U(t,"contentId")),n||(n=U(t,"id")),n}function qr(e){if(r(e))return null
const t=e.replace(/&amp;/g,"&").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#96;/g,"`").replace(/\r\n/g," ").replace(/&nbsp;/g," ").replace(/<span>/g,"").replace(/<\/span>/g,"").replace(/<br>/g," ").replace(/\u23ce/g,"").replace(/<i>/g,"").replace(/<\/i>/g,"").replace(/<b>/g,"").replace(/<\/b>/g,"")
return t.match(/^\s*$/)?null:t}async function Yr(e,t,n){const r=n===MN?"OnDeviceRecommendationsShelfController":og
return await new Promise((n,s)=>{if(o(t)){const e=`${r}: Missing valid useCase for ODP: ${t}`
return $f.unexpectedType(Uk,e,null),void s(new Error(e))}e.onDeviceRecommendationsManager.performRequest({type:"fetchRecommendations",dsId:e.user.dsid,useCase:t}).then(o=>{const a=c(o.candidates),u=g(o[JR])
if(i(a)){const o=[]
for(const e of a)i(e)&&o.push({id:e,type:NN})
const c=new xM(e,o).withFilter("apps:recommendable",SD).addingQuery(bP,t)
xr(e,c),lr(e,c).then(e=>{n({candidates:a,recoMetrics:u,dataContainer:e})}).catch(e=>{const t=`${r}: Failed to fetch Media API data for: ${a}`
$f.unexpectedType(Uk,t,null),s(new Error(t))})}else{const e=`${r}: ODP returned no candidate ids for useCase: ${t}`
$f.unexpectedType(Uk,e,null),s(new HG(e))}}).catch(e=>{const n=`${r}: Failed to perform ODP for useCase: ${t}, ${e}`
$f.unexpectedType(Uk,n,null),s(new Error(n))})})}function zr(e){const t=new Set,n=[]
return e.forEach((e,r)=>{t.has(e.appId)||(n.push(e.appId),t.add(e.appId))}),n}function Jr(e,t){const n=e.filter(e=>s(e.pinnedPosition))
e=e.filter(e=>r(e.pinnedPosition))
const o=new Map
e.reverse(),e.forEach((e,t)=>{e.appId in o?o[e.appId].push(e):o[e.appId]=[e]})
const i=[],a=Math.max(...Object.values(o).map(e=>e.length))
for(let e=0;e<a;e++){const e=[]
t.forEach(t=>{t in o&&o[t].length>0&&(i.push(o[t].pop()),0!==o[t].length&&e.push(t))}),t=e}const c=new Array(n.length+i.length)
n.sort((e,t)=>e.pinnedPosition-t.pinnedPosition)
for(const e of n)e.pinnedPosition<c.length?c[e.pinnedPosition]=e:i.push(e)
i.reverse()
for(const[e,t]of c.entries())r(t)&&i.length&&(c[e]=i.pop())
return c}function Kr(e){const t=new Map
return i(e)&&e.split(",").forEach(e=>{const n=e.split("=")
2===n.length&&t.set(n[0],Number(n[1]))}),t}function Zr(e,t,n,a,c,u,f,d){const p=function(e,t,n,r,a){const c=[]
for(const u of t){const t=new WG(u),f=l(u,rg)
let d=l(u,RO),p=l(u,mI)
if(o(d)&&i(a)&&(d=a,p=e.random.nextUUID()),o(f)||o(d)||o(p)){r&&(t.isUnpersonalizedMatch=!0,c.push(t))
continue}const h=f.split(",")
if(h.includes(qG)&&(t.isWildcardMatch=!0),s(n)){const e=n[d]
if(s(e))for(const n of h)if(e.userSegments.includes(n)){t.isExactMatch=!0
break}}t.appId=d,t.groupId=p,c.push(t)}return c}(e,t,null==n?void 0:n.personalizationData,a,f),h=zr(p),w=function(e,t){const n=new Set,r=[],s=t.filter(e=>e.isExactMatch).map(e=>e.groupId),a=new Set(s)
t.forEach((e,t)=>{if(o(e.groupId))r.push(e)
else if(!n.has(e.groupId))if(e.isUnpersonalizedMatch)r.push(e)
else{if(e.isExactMatch)return n.add(e.groupId),void r.push(e)
if(!a.has(e.groupId)){if(e.isWildcardMatch)return n.add(e.groupId),void r.push(e)
e.isFallbackMatch=!0,r.push(e)}}})
const c=[],u=r.slice().reverse()
for(const e of u)e.isFallbackMatch&&n.has(e.groupId)||(c.push(e),i(e.groupId)&&n.add(e.groupId))
return c.reverse(),c}(0,p),g=function(e,t,n,o,s,i){let a
const c=t.filter(e=>e.isExactMatch||e.isWildcardMatch||e.isUnpersonalizedMatch||r(e.groupId))
return r(s)?a=Xr(c,o,i):c.length>=s||!n?(a=Xr(c,o,i),a.sortedDataItems=a.sortedDataItems.slice(0,s)):(a=Xr(t,o,i),a.sortedDataItems=a.sortedDataItems.slice(0,s)),a}(0,w,c,h,u,d),m=g.sortedDataItems.map(e=>e.rawData)
return{personalizedData:m,processingType:(t.length!==m.length?1:0)+g.processingType}}function Xr(e,t,n){const r=e.filter(e=>e.isExactMatch)
let o=e.filter(e=>!e.isExactMatch)
s(n)&&n&&(o=Jr(o,t))
const i=r.concat(o),a=e.every((e,t)=>e===i[t])
return{sortedDataItems:i,processingType:a?0:2}}function Qr(e,t,n,r,i,a=!1,c,u,d){return eo(e)?t===lh?function(e,t,n,r,o){var i
return null!==(i=(null==r?void 0:r.metricsData).use_segment_scores)&&void 0!==i&&i?function(e,t,n,r){const o=function(e,t){const n=[]
for(const[e,r]of t.entries()){const t=new jG(r),o=l(r,RO),s=l(r,mI),i=f(r,"meta.personalizationData.score"),a=l(r,"meta.personalizationData.segScores"),c=h(r,"meta.personalizationData.isPinned"),u=Kr(a)
t.appId=o,t.groupId=s,t.score=null!=i?i:0,t.segScores=u,c&&(t.pinnedPosition=e),n.push(t)}return n}(0,t)
let i=function(e,t){const n=function(e,t){var n
const r=Number(null!==(n=t.weight_parameter)&&void 0!==n?n:0)
for(const t of e){const e=t.score,n=t.modifiedScore
t.modifiedScore=r*n+(1-r)*e}return e}(function(e,t){var n
for(const r of e){const e=r.appId,o=r.segScores,i=r.score
if(s(t)){const a=t[e]
if(s(a)){let e=0,t=0
for(const n of a.userSegments)o.has(n)&&(t+=o.get(n),e+=1)
if(e){const n=t/e
r.modifiedScore=i*n}}else{const e=null!==(n=o.get("0"))&&void 0!==n?n:0
r.modifiedScore=i*e}}else r.modifiedScore=i}return e}(e,null==t?void 0:t.personalizationData),null==t?void 0:t.metricsData)
return n.sort((e,t)=>t.modifiedScore-e.modifiedScore),n}(o,n)
s(r)&&r&&(i=Jr(i,zr(i)))
const a=i.map(e=>e.rawData),c=i.every((e,t)=>e===o[t])?0:2
return{personalizedData:a,processingType:(t.length!==a.length?1:0)+c}}(0,t,r,o):Zr(e,t,r,n,null,null,null,o)}(e,n,r,i,d):Zr(e,n,i,r,a,c,u,d):function(e,t,n){let r=[]
const i=new Set
for(const e of t){const t=l(e,rg),n=l(e,RO),s=l(e,mI)
o(t)||o(n)||o(s)?r.push(e):i.has(s)||t.split(",").includes(qG)&&(r.push(e),i.add(s))}return s(n)&&r.length>n&&(r=r.slice(0,n)),{personalizedData:r,processingType:null}}(0,n,c)}function eo(e){return e.user.isOnDevicePersonalizationEnabled&&e.bag.enableOnDevicePersonalization}function to(e,t){return eo(e)?e.host.platform===HR?e.user.onDevicePersonalizationDataContainerForAppIds(Array.from(t)):{personalizationData:{},metricsData:null}:null}function no(e){return eo(e)&&e.host.platform===HR?e.user.onDevicePersonalizationDataContainerForAppIds([]).metricsData:null}function ro(e,t,n){if(!function(e){switch(e){case uN:case fD:case dC:case wP:case gh:case PC:case CO:case OO:case Mb:return!0
default:return!1}}(e.contentType)||t.isSearchLandingPage)return
const r=function(e,t,n){return e>0?e:Cr(n)?t===EN?15:6:0}(t.remainingItems.length,n,t.featuredContentId),s=new Array(r)
for(let e=0;e<r;e+=1)s[e]=new IM
if(!o(s)){switch(e.contentType){case uN:e.rowsPerColumn=3
break
case fD:e.rowsPerColumn=2
break
default:e.rowsPerColumn=1}e.placeholderContentType=e.contentType,e.contentType=RP,e.items=s,i(t.isArcadePage)&&(e.presentationHints={...e.presentationHints,isAppleArcadeContext:t.isArcadePage}),e.isHidden=!1,t.showingPlaceholders=!0}}function oo(e,t,n){const r=i(n)?[...n]:[]
return r.push(`${k$}=${e}`),i(t)&&r.push(`${D$}=${t}`),{protocol:RF,path:`/${MF}/${LF}/{token}`,query:r}}function so(e,t){const n=[]
for(const r of e)n.push(oo(r,null,t))
return n}function io(e,t,n,r,o){const i=new rB(ON,t,n)
i.purchaseSuccessAction=r,i.carrierLinkSuccessAction=r
const a=new VL(zR)
return a.pageData=i,s(o)&&Xe(e,a,o),a}function ao(e,t,n){{const e=new HL(ON)
return new qL([e])}}function co(e,t=!1){const n=new xM(e).forType(Pk)
return t?n.addingQuery(rv,Jd):n}function uo(e,t){return co(e).withSparseLimit(t).asPartialResponseLimitedToFields([lN]).usingCustomAttributes(ne(e))}function lo(e,t,n){return function(e,t,n){o(t)&&(t=gR)
const r=new xM(e).forType(zR).addingQuery("serviceType",ON).addingQuery("placement",t).includingMetaKeys(Jk,[JR]).includingRelationships([kN]).includingAttributes([Kd,EE])
return s(n)&&r.addingQuery(Zd,n),r}(e,t,n)}function fo(e,t){let n=null
const i=pe(t,Xd)||pe(t,Jk)
if(o(i)||o(i.data))return null
const a=i.data.map(e=>e.type===Jk?e:null).filter(e=>s(e))
return o(a)?null:(n=1===a.length?a[0]:e.arcade.getMarketingItemFromMarketingItems(a),r(n)?null:{marketingItemData:n})}function po(e,t){if(!t)return null
let n=null
const r=c(t,rE)
return r.length>0&&(n=r[0]),s(n)?{marketingItemData:n}:null}function ho(e,t){switch(U(t,FP)){case $P:return"com.apple.AppStore.BridgeStoreExtension"
case xP:return"com.apple.MobileSMS"
default:return null}}function wo(e,t,n=!1){const r=Po(e,t),o=e.client.isPhone
let s=o?ah:ch
n&&(s="topShelf")
const a=d(r,s)
let c=null,u=null
return i(a)&&(c=ta(e,a,{withJoeColorPlaceholder:!0,useCase:6}),i(c)&&(c.crop=o?"oa":n?"ta":"ob",u=c.backgroundColor)),{artwork:c,artworkData:a,backgroundColor:u}}function go(e,t,n=!1){const r=function(e,t){switch(t.type){case iN:return x(t,sN)
case Jk:return x(t,EE)
default:return Z(t,_e(e,t),EE)}}(e,t),o=e.client.isPhone,s=o?"breakoutVideo9x16":"breakoutVideo16x9",a=d(r,o?"sizzleVideo9x16":"sizzleVideo16x9")||d(r,s)
let c=null,u=null,f=null
if(i(a)){f=d(a,_O)
const t=ta(e,f,{withJoeColorPlaceholder:!0,useCase:6})
i(t)&&(t.crop="sr",u=t.backgroundColor)
const r=l(a,Rk)
i(t)&&i(r)&&(c=new wL(r,t,{canPlayFullScreen:!1,showPlaybackControls:!1,allowsAutoPlay:!0,looping:!0,playbackControls:{prominentPlay:n},autoPlayPlaybackControls:{}}))}return{video:c,artworkData:f,backgroundColor:u}}function mo(e,t,n=!0,r,o){const s=go(e,t),i=wo(e,t),a=s.backgroundColor||i.backgroundColor
return To(e,t,0,o),(t.type===Jk?u(Eo(0,t),"displayMaterial"):G(t,lp))&&n?fp:yo(0,a)}function yo(e,t){return t?L(t,50)?hN:dD:hN}function To(e,t,n,r){if(e.client.isPhone||r)return BD
const o=t.type===Jk?l(Eo(0,t),"textPosition"):U(t,iv)
if(!i(o))return JD
switch(o.toLowerCase()){case av:return JD
case BD:return BD
case bE:return sC
default:return JD}}function Ao(e,t,n,r=!1){switch(t){case JD:case sC:return JD
case BD:return r||n.type===Jk?BD:function(e,t){var n
switch((null!==(n=U(t,iv))&&void 0!==n?n:"").toLowerCase()){case av:return JD
case BD:return BD
case bE:return sC
default:return JD}}(0,n)
default:return JD}}function Eo(e,t){return t.type!==Jk?null:x(t,"display.templateParameters")}function Po(e,t){switch(t.type){case iN:return x(t,cN)
case Jk:return x(t,Kd)
default:return Z(t,_e(e,t),cN)}}function Io(e,t){return t.type===Jk?l(ht(0,t),"callToActionLabel"):U(t,dp)}function So(e,t){const n=i(x(t,nN)),r=G(t,gO)
return!n&&!r}function vo(e,t){const n=x(t,nN),o=i(n),s=G(t,gO),a=he(t,yD)
if(!o&&!s&&!H(a))return null
let c=null
if(c=o?l(n,DN):U(s?t:a,DN),r(c))return null
let u=null
if(o&&l(n,cv)===RE)u=new WL(c)
else{const t=e.required(zH).fetchFlowPage(c),n=new VL(t)
n.pageUrl=c,t===pD&&(n.pageData=Pi(e,a)),u=n}return u.title=Io(0,t),u}function _o(e,t,n=!1){if(o(t))return null
let r=null
const s=F(tN),i=F(uv),a=N(l(t,lv)),u=c(t,pp).map(e=>N(e)),f=yo(0,a)
if(2===u.length){r=new uL("horizontalGradient")
const e=u[0],t=u[1]
r.gradientStartColor=$(e,e),r.gradientEndColor=$(t,t),r.filter="plusLight",n||(r.accessoryColor=r.gradientEndColor)}else r=new uL(xk),r.color=f===hN?s:i,n||(r.accessoryColor=r.color),r.isFallbackStyle=!0
return r}async function Co(e,t,n,o,s){const i=n(e,t,s)
if(!i)return await Promise.resolve({originalData:t,additionalData:null})
const a=Array.from(i),c=[]
for(const t of a){const n=o(e,t)
if(r(n)){const e=a.indexOf(t)
a.splice(e,1)}else c.push(n)}return await Promise.all(c).then(e=>{const n=new Map
for(const[t,r]of a.entries()){const o=e[t]
n.set(r,o)}return{originalData:t,additionalData:n}})}function Oo(e,t){return Io(0,t)}function bo(e,t){return U(t,Gb)}function Ro(e,t,n,r,o,s){let a=null
switch(s){case ov:a={type:ov}
break
case yk:const e=U(t,_E)
a=i(e)?{type:yk,title:e}:{type:uD}
break
default:a={type:uD}}let c=mo(e,t,r,0,!0)
const u=To(e,t,0,!0)
return o&&(c=hN),new AM(function(e,t){return U(t,KR)}(0,t),bo(0,t),a,null,c,Ao(0,u,t,!0))}function ko(e,t,n,r){return Do(e,{marketingItemData:t},Oo(0,t),r)}function Do(e,t,n,r,o){const i=t.marketingItemData
if(!s(i))return null
const a=ht(0,i),u=l(a,YR)===nN,f=l(a,DN)
if(u&&f){const t=function(e,t){const n=e.bag.dynamicUIRegexStrings
for(const e of n)if(new RegExp(e).test(t)){const e=new VL(fO,t)
return e.pageData=new oB,e}const r=e.bag.financeUIRegexStrings
for(const e of r)if(new RegExp(e).test(t))return new VL(nD,t)
const o=e.bag.webViewRegexStrings
for(const e of o)if(new RegExp(e).test(t))return new VL(dO,t)
return new WL(t,!1)}(e,f),o={id:e.bag.arcadeAppAdamId,actionType:sv,actionContext:WR,contextualAdamId:e.bag.arcadeAppAdamId,offerType:CE,targetType:vN,mercuryMetricsData:nc(0,i),...r}
return t.title=n,Qe(e,t,o),t}return function(e,t,n,r,o){const i=ht(0,t),a=l(i,oC),u=l(i,ib)
if(!s(a)||!s(u))return null
const f=c(i,"serviceTypes").length>1&&e.bag.aristotleParentAppAdamId?e.bag.aristotleParentAppAdamId:e.bag.arcadeAppAdamId,d=new dF(a,f,{buyParams:u,productIdentifier:a,pageInformation:r.pageInformation},o),p={id:f,actionType:sv,targetType:vN,subscriptionSKU:a,actionContext:WR,contextualAdamId:f,actionDetails:{buyParams:u},offerType:CE,mercuryMetricsData:nc(0,t),...r}
return d.title=n,Qe(e,d,p),d}(e,i,n,r,o)}function No(e,t){const n=new Set,r=O(t),o=we(r,ME)
for(const t of o){const o=Fo(e,t,r)
if(i(o))for(const e of o)n.add(e)}return n}function Lo(e,t){let n
return t===tS&&(n=lo(e,NS)),t===nS&&(n=uo(e,10)),r(n)?null:lr(e,n).catch(()=>null)}function Fo(e,t,n){if(U(t,mm)!==rS)return null
const o=U(t,ym),s=r(fo(e,n)),i=[]
return o===Tm&&(i.push(nS),s&&i.push(tS)),i}function $o(e,t,n,a){return $f.catchingContext(`module: ${a.module}`,()=>{let c
switch(a.module){case"Header":a.titleForNextShelf=U(t,kb),c=null
break
case"TextBlock":c=function(e,t,n){const r=U(t,kb)
if(!r)return null
const o=new iL(r,XR,FD)
Bo(0,o,n)
const s=new CM(VR)
return s.items=[o],s}(0,t,a),a.hasNonFocusableElements=!0
break
case"CollectionLockup":c=function(e,t,n){const r=G(t,"showOrdinals"),o="OrdinalDesc"===U(t,"collectionLockupDisplayType")?$h:"ascending",s=U(t,"collectionLockupSize")
let i
if(n.subStyle=s,s)switch(s){case _m:i=dC
break
case vm:i=fD
break
default:i=uN}const a={metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,artworkUseCase:ea(0,i),canDisplayArcadeOfferButton:Ha(0,i)},c=Wi(e,we(t,kN),{includeOrdinals:r,ordinalDirection:o,lockupOptions:a})
if(!c||0===c.length)return null
const u=new CM(i)
return u.items=c,u}(e,t,a),a.hasFocusableElements=!0
break
case Am:c=function(e,t,n){const r=U(t,"inlineImageDisplayType"),o=ta(e,x(t,lN),{useCase:13,allowingTransparency:r===KC})
if(!o)return null
const s=new dM(o,!1,XR)
s.caption=U(t,kb),n.subStyle=r,r&&("BoundingBox"===r?(s.isFullWidth=!1,s.hasRoundedCorners=!0):(s.isFullWidth=!0,s.hasRoundedCorners=!1)),Bo(0,s,n)
const i=new CM(oS)
return i.items=[s],i}(e,t,a),a.hasNonFocusableElements=!0
break
case Em:c=function(e,t,n){const r=Uo(0,t)
if(!r)return null
let o=null
const a=we(t,PN)
if(i(a)&&(o=sr(e,a,n.metricsPageInformation,n.metricsLocationTracker,n),s(o)))return o
const c=U(t,"appLockupSize")
let u
n.subStyle=c
let l=!1
if(c)switch(c){case Sm:u=uN,l=!0
break
case vm:u=fD,l=!0
break
default:u=WE}const f=rt(0,t)
if(l){const t=new CM(u),s=xi(e,r,{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,externalDeepLinkUrl:f,artworkUseCase:ea(0,u)})
t.items=[s],o=t}else o=function(e,t,n){const r=new CM(WE),o="tv"!==e.client.deviceType,s=Uo(0,t),i=rt(0,t),a=xi(e,s,{offerStyle:pk,metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,externalDeepLinkUrl:i,crossLinkSubtitle:n.crossLinkSubtitle,artworkUseCase:1}),c=new Mx(rb,a)
c.description=ki(e,s)
let u=null
switch(U(t,"appLockupVideo")){case"AppTrailer":{const t=ua(e,s)
t&&t.length>0&&(u=t[0])
break}}return u&&(tn(e,u,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,id:n.pageId}),c.video=u),o&&(r.background={type:xk,color:fV}),r.items=[c],r}(e,t,n)
return o}(e,t,a),a.hasFocusableElements=!0
break
case"TipBlock":c=function(e,t,n){const r=ta(e,x(t,lN),{useCase:13})
if(!r)return null
const o=U(t,kb),s=U(t,"tipNumber"),i=new dM(r,!1,XR)
i.isFullWidth=!1,i.hasRoundedCorners=!0,i.caption=o,i.ordinal=s,Bo(0,i,n)
const a=new CM(oS)
return a.items=[i],a}(e,t,a),a.hasNonFocusableElements=!0
break
case"PullQuote":c=function(e,t,n){const r=U(t,Im),o=U(t,"quoteAttribution"),s=ta(e,x(t,lN),{useCase:13}),i=U(t,"pullQuoteDisplayType")===KC,a=new wM(r,o,s,i)
Bo(0,a,n)
const c=new CM(Im)
return c.items=[a],c}(e,t,a),a.hasNonFocusableElements=!0
break
case"HorizontalRule":c=function(e,t,n){let r=F("defaultLine")
const s=x(t,"customColor"),i=N(l(s,"lightMode")),a=N(l(s,"darkMode"))
o(i)||o(a)||(r=$(i,a))
const c=U(t,"lineStyle"),u=U(t,jD)===KC,f=new mM(c,r,u),d=new CM("horizontalRule")
return d.items=[f],d}(0,t),a.hasNonFocusableElements=!0
break
case Pm:c=function(e,t,n){const r=ta(e,x(t,"video.previewFrame"),{useCase:13})
if(!r)return null
const o=U(t,"video.video")
if(!o)return null
const s=U(t,"inlineVideoDisplayType")===KC,i=new wL(o,r,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}})
tn(e,i,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,id:n.pageId})
const a=new pM(i,s,XR)
a.caption=U(t,kb),Bo(0,a,n)
const c=new CM(v_)
return c.items=[a],c}(e,t,a),a.hasFocusableElements=!0
break
case"AppMedia":c=function(e,t,n){const o=Uo(0,t)
if(!o)return null
const i=U(t,"appMediaOption"),a=U(t,"appMediaPlatform")
switch(n.subStyle=i,i){case"Screenshots":{let t=null
if(t=new CM(bN),r(a)){const n=la(e,o,14)
n&&n.length>0&&(t.items=[n[0]])}else{const n=function(e,t){switch(t){case $P:return xN
case HR:return e.client.isPad?EN:CN
case NO:return"tv"
case xP:return OD
default:return null}}(e,a)
if(n){const r=la(e,o,14,[n])
r&&r.length&&(t.items=[r[0]])}}return s(t)&&0===t.items.length?null:t}case"AppTrailers":const t=new CM(v_),i=ua(e,o)
if(i&&i.length>0){const r=i[0]
tn(e,r,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,id:n.pageId})
const o=new pM(r,!1,tD,null,null,!0)
return t.items=[o],t}return null
default:return null}}(e,t,a),a.hasFocusableElements=!0
break
case"LinkBlock":c=function(e,t,n){const r=U(t,DN)
if(!r)return null
const o=new Ox(r),s=U(t,"urlTitle")
let i=U(t,kb)
i||(i=o.host)
const a=["itunes.apple.com",JO,"music.apple.com","books.apple.com","podcasts.apple.com","watch-app.cdn-apple.com"]
let c=!1
for(const e of a)o.host.endsWith(e)&&(c=!0)
const u=new WL(r)
Qe(e,u,{targetType:nN,pageInformation:n.metricsPageInformation,id:`${n.index}`,locationTracker:n.metricsLocationTracker})
const l=new iM(s,i,u,c)
Bo(0,l,n)
const f=new CM(nN)
return f.items=[l],f}(e,t,a),a.hasFocusableElements=!0
break
case"TextList":c=function(e,t,n){const r=M(t,kb)
if(!r.length)return null
const o=U(t,"textListDisplayType")
n.subStyle=o
let s,i=!1
i="Bulleted"===o,s=i?"<ul>":"<ol>"
for(const e of r){const t=JSON.stringify(e)
s=`${s}<li>${JSON.parse(t)}</li>`}s=i?`${s}</ul>`:`${s}</ol>`
const a=new iL(s,XR,FD)
Bo(0,a,n)
const c=new CM(VR)
return c.items=[a],c}(0,t,a),a.hasNonFocusableElements=!0
break
case"IAPLockup":c=function(e,t,n){const r=Uo(0,t)
if(!r)return null
const o=Mi(e,r,{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,artworkUseCase:1})
if(!o)return null
const s=new Bx(o),i=new CM("inAppPurchaseShowcase")
return i.background={type:xk,color:lV},i.items=[s],i}(e,t,a),a.hasFocusableElements=!0
break
case rS:c=function(e,t,n,o){const a=U(t,ym)
o.subStyle=a
let c=null
switch(a){case"OSUpgrade":c=function(e,t,n){const r=e.client.deviceType
if(r!==$N)return null
const o=it(r)
if(null===o)return null
const s=new WL(o)
Qe(e,s,{targetType:nN,pageInformation:n.metricsPageInformation,id:`${n.index}`,locationTracker:n.metricsLocationTracker})
const i=e.loc.string("CLIENT_CONTROL_OS_UPGRADE_TITLE","CHECK FOR UPDATE"),a=new TM(i,s)
Bo(0,a,n)
const c=new CM("clientControlButton")
return c.items=[a],c}(e,0,o)
break
case Tm:c=function(e,t,n,o){let a=fo(e,n)
if(!a&&o.additionalData&&(a=po(0,o.additionalData.get(tS))),!s(a))return null
const c={pageInformation:o.metricsPageInformation,locationTracker:o.metricsLocationTracker},u=ao(0,o.metricsPageInformation,o.metricsLocationTracker)
let l
u.title=e.loc.string(Eb,Pb)
const f=Io(0,a.marketingItemData)
i(f)?(l=ko(e,a.marketingItemData,0,c),s(l)&&(l.title=f)):(l=ao(0,o.metricsPageInformation,o.metricsLocationTracker),l.title=e.loc.string(Eb,Pb))
const d=new SM(l,u),p=bo(0,a.marketingItemData)
d.unsubscribedDescription=p
const h=new qN(ON,e.bag.arcadeAppAdamId,pk,null,hN,null,null,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId)
h.titles[Wv]=e.loc.string(Eb,Pb),d.offerDisplayProperties=h,cn(0,d,{...c,targetType:Rv,title:f,id:t.id,kind:Rv,softwareType:null,displaysArcadeUpsell:!0})
{if(r(o.additionalData))return null
const t=o.additionalData.get(nS)
if(i(t)){const n={pageInformation:o.metricsPageInformation,locationTracker:o.metricsLocationTracker},r=k(t)
d.iconArtworks=ra(e,r,n,{useCase:2})}}const w=new CM(Rv)
return w.items=[d],w.background={type:xk,color:dV},w}(e,t,n,o)}return c}(e,t,n,a),a.hasFocusableElements=!0
break
case"StoryList":c=function(e,t,n){const r=we(t,kN)
if(!r)return null
const o=U(t,FN),s=U(t,uk),i=Mk,a=Kc(e,r,i,o,s,n,null)
return Array.isArray(a.items)&&(a.items=a.items.filter(e=>!(e instanceof uU)||Yc(0,e.media.kind,i))),a}(e,t,a),a.hasFocusableElements=!0
break
case"AppEventLockup":c=function(e,t,n){const r=Uo(0,t)
return r?sr(e,[r],n.metricsPageInformation,n.metricsLocationTracker,n):null}(e,t,a),a.hasFocusableElements=!0
break
default:c=null}return c})}function xo(e,t){const n=we(t,ND)
if(1!==n.length)return null
const r=n[0]
if(!r)return null
switch(r.type){case NN:case TN:return r
default:return null}}function Mo(e){return e.client.deviceType===$N?tN:ID}function Uo(e,t,n){return he(t,kN)||null}function Bo(e,t,n){if(!t)return
let r=n.module
n.subStyle&&(r=r+"_"+n.subStyle)
const o={id:`${n.index}`,impressionIndex:n.index,idType:WD,impressionType:r,kind:"iosModule"}
t.impressionMetrics=new UL(Xa(o))}function Go(e,t){if(t<=0)return!1
if(t>=1)return!0
const n=e.user.dsid
if(!i(n))return!1
const r=100*t,o=n.slice(-2)
return parseInt(o)<r}function Vo(e,t,n){const r=new sV
r.overlayType=Ho(e,t),r.displayOptions={horizontalPlacement:qo(e,t),textAlignment:Yo(e,t),isOverDarkContent:Wo(e,t)}
const a=Wa(e,t),c=U(t,RD)
if(Se(e,t,mC)?r.badgeText=e.loc.uppercased(ja(e,a,c)):r.badgeText=c,r.titleText=xa(e,t,FN)||Pe(e,a,FN),r.overlayType===Dv||r.overlayType===dP?r.descriptionText=xa(e,t,uk):r.descriptionText=xa(e,t,aD)||Pe(e,a,uk),r.callToActionText=U(t,dp),r.buttonTitle=function(e,t){if("tv"!==e.client.deviceType)return null
switch(Ho(e,t)){case VD:return e.loc.string(sh)
case Nv:case yk:let t=e.loc.string(ih)
return t===ih&&(t=e.loc.string(sh)),t
case pP:return e.loc.string("HERO_CAROUSEL_OVERLAY_BUTTON_TITLE_COLLECTION")
default:return null}}(e,t),r.overlayType!==VD&&r.overlayType!==Dv||(r.lockup=function(e,t,n){let r=he(t,yD)
const s=we(t,ND)
if(o(r)&&i(s)&&(r=s[0]),o(r))return null
const a={metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:D(t)},artworkUseCase:n.lockupArtworkUseCase,offerStyle:TE,offerEnvironment:hN,canDisplayArcadeOfferButton:n.canDisplayArcadeOfferButton,shouldHideArcadeHeader:e.featureFlags.isEnabled(cb),isContainedInPreorderExclusiveShelf:n.isContainedInPreorderExclusiveShelf},c=xi(e,r,a),u=Wa(e,t),l=xa(e,t,aD)||Pe(e,u,uk)
return i(l)&&(c.subtitle=l),c}(e,t,n)),i(c)&&s(r.lockup)&&(r.lockup.heading=c),r.collectionIcons=function(e,t){const n=we(t,ND)
if(o(n))return null
const r=[]
for(const t of n){const n=sa(e,t,{useCase:1,withJoeColorPlaceholder:!0})
i(n)&&r.push(n)}return i(r)?r:null}(e,t),i(r.lockup))r.clickAction=r.lockup.clickAction,r.impressionMetrics=r.lockup.impressionMetrics
else{const o={targetType:VD,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:D(t)},s=jo(e,t),i=vo(e,t)
i.title=s,Qe(e,i,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:D(t),targetType:VD,id:t.id}),r.clickAction=i,cn(0,r,fn(e,t,s,o))}return r}function Ho(e,t){const n=G(t,lp),r=U(t,YR),a=we(t,ND),c=xa(e,t,uk),u=function(e){const t=!e.client.isPad,n=e.props.enabled("displayHero3Carousel"),r=Go(e,e.bag.hero3RolloutRate),o=e.host.isOSAtLeast(16,5,0)
return n&&r&&(t||o)}(e)&&i(c)
let l=he(t,yD)
return o(l)&&i(a)&&(l=a[0]),s(l)&&"App"===r?u?Dv:VD:i(a)&&"Collection"===r?u?dP:pP:n?Nv:yk}function jo(e,t){const n=Ho(e,t),r=he(t,yD)
switch(n){case VD:case Dv:return U(r,FN)
case Nv:case yk:case pP:case dP:return xa(e,t,FN)||Pe(e,r,FN)
default:return null}}function Wo(e,t){const n=go(e,t),r=wo(e,t),o=n.backgroundColor||r.backgroundColor
return!o||L(o,50)}function qo(e,t){if(e.client.isPhone)return BD
const n=U(t,iv)
if(!i(n))return JD
switch(n.toLowerCase()){case av:return JD
case BD:return BD
case bE:return sC
default:return JD}}function Yo(e,t){switch(qo(e,t)){case JD:case sC:return JD
case BD:return function(e,t){var n
switch((null!==(n=U(t,iv))&&void 0!==n?n:"").toLowerCase()){case av:return JD
case BD:return BD
default:return JD}}(0,t)
default:return JD}}function zo(e){return`${e.shelfIdentifier}.${e.slot}`}function Jo(e,t){if(r(e))return null
const n=zo(t),o=e.tasks[n]
return r(o)?null:(delete e.tasks[n],o)}function Ko(e,t){return{shelfIdentifier:e.rootPosition.toString(),slot:t}}function Zo(e,t){return Xo(0,t,TV)}function Xo(e,t,n){if(r(t)||s(t.failureReason))return null
const o={tasks:{}}
return function(e,t){if(r(e))return
const n=zo(t.positionInfo)
e.tasks[n]=t}(o,{data:O(t.mediaResponse),positionInfo:n}),o}function Qo(e,t){return i(x(t,jb))}function es(e,t,n,r,o=!0){if(!r.isAdvert)return void ts(e,t,n,r)
const s=ns(e,t,r),i=Fa(e,t)?xO:LP,a=os(0,r),c=new AV(s.instanceId,t.id,i,_h,a)
n.clickAction=rs(e,n.clickAction,c)
const u=new AV(s.instanceId,t.id,i,"offerButtonPress",a)
n.buttonAction=rs(e,n.buttonAction,u),n.searchAd=s,n.itemBackground="ad",n.offerDisplayProperties&&o&&(n.offerDisplayProperties=n.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,pk,"ad")),G(t,"iad.format.userRating")||(n.rating=null,n.ratingCount=null),ts(e,t,n,r)}function ts(e,t,n,o){const s=ln(e,t,n,tc(0,t,n.icon),o,!0)
!function(e,t,n){var o,s,i
if(!r(t.searchAd)&&(null===(o=t.clickAction)||void 0===o||o.actionMetrics.clearAll(),t.clickAction&&Qe(e,t.clickAction,n,!0),t.searchAd.transparencyAction)){const r=n.pageInformation,o={actionType:"ad_transparency"}
r.iAdInfo&&Object.assign(o,r.iAdInfo.clickFields)
const a=We(e,t.adamId,vN,o)
null!==(i=null===(s=r.iAdInfo)||void 0===s?void 0:s.shouldIncludeAdRotationFields)&&void 0!==i&&i&&a.includingFields.push(MO),t.searchAd.transparencyAction.actionMetrics.addMetricsData(a)}}(e,n,s),function(e,t,n,r){if(!t||!r)return
cn(0,t,n)
const o=Xa(r.fastImpressionsFieldsForCurrentItem(n.locationTracker))
Object.assign(t.impressionMetrics.fields,o)
const s=u(n.disableFastImpressionsForAds)
t.impressionMetrics=new BL(t.impressionMetrics,!s),t.impressionMetrics.fields[GP]=a_}(0,n,s,s.pageInformation.iAdInfo)}function ns(e,t,n){let r=Ic(0,t)
o(r)&&(r=e.random.nextUUID(),Dn(e,`Error: instanceId was null or empty. Assigned ${r}`))
const s=x(t,jb),i=U(t,"iad.impressionId"),a=U(t,"iad.privacy"),c=new iG(a)
c.title=e.loc.stringForPreferredLocale(e,"IAD_PRIVACY_MARKER_BUTTON_TITLE",e.bag.adsOverrideLanguage)
const u=Fa(e,t)?xO:LP,l=os(0,n),f=rs(e,c,new AV(r,t.id,u,"markerPress",l))
return new sG(r,s,i,f)}function rs(e,t,n){if(e.featureFlags.isEnabled("action_dispatcher")){const e=new bF(n),r=new qL([e,t])
return r.title=t.title,r}return t.adActionMetrics=n,t}function os(e,t){var n
const o=null===(n=null==t?void 0:t.pageInformation)||void 0===n?void 0:n.iAdInfo
if(r(o))return Gk
const s=o.placementType
switch(s){case Lk:return Ch
case qR:return"searchAds"
case AN:case eN:case UD:return Ch
default:throw new Error(`This method should never be called with value: ${s}`)}}function ss(e,t,n){if(o(t))return
const r=function(e){return l(e,"meta.metrics.clusterId")}(n)
o(r)||function(e,t,n){const r=is(t)
e.storage.storeString(r,n)}(e,t,r)}function is(e){return e+"-cohort-id"}function as(e,t,n){const r=new CM(n||vV)
r.isHorizontal=!1,r.items=Ih
const o=new DM([r])
return o.isIncomplete=!0,o.title=t,o}function cs(e,t,n,r){const o={...n,shouldFilter:!G(t,OP),chartUrl:U(t,nE),chartIdentifier:U(t,Vb),roomRelationshipData:he(t,"room")}
return function(e,t){const n=U(t,nE),r=U(t,Vb)
return i(n)&&i(r)}(0,t)?o.seeAllUrl=function(e,t,n){const r=U(t,nE),o=new Ox(r),s=U(t,Vb)
return o.param(E$,s),i(n)&&o.param(P$,n.join(",")),o.toString()}(0,t,r.topChartIdentifiers):i(o.roomRelationshipData)&&(o.seeAllUrl=yr(e,o.roomRelationshipData.href)),o.shelfStyle=function(e,t,n,r){const o=n.featuredContentId
if(418===o||495===o||Cr(o)){let e=U(t,jD)
return e||(e=311===o||312===o?rb:495===o?Ph:EC),`${e}Lockup`}if(431===o)return CP
if(429===o)return OO
if(304===o||305===o||430===o||420===o)return CO
if(Or(o))return uN
if(497===o)return PC
switch(r.shelves.length%3){case 0:return uN
case 1:return fD
default:return dC}}(0,t,o,r),Or(o.featuredContentId)&&(o.showOrdinals=!0,o.shouldFilter=!1),o.clientIdentifierOverride=ho(0,t),o}function us(e,t,n,a){const c=(u=t.featuredContentId,xG.has(u)?19326:15358)
var u
let l=[]
if(i(n.shelfContents)){const o=function(e,t,n,o,i){const a=Jo(t,o)
if(r(a))return null
const c=a.data,u=ls(e,c,i)
return s(u)?i.includedAdAdamIds=[c.id]:Rc(e,n,c),u}(e,null==a?void 0:a.adStitcher,null==a?void 0:a.adIncidentRecorder,TV,t)
o&&o instanceof Yx&&(l.push(o),dc(t.metricsLocationTracker),t.ordinalIndex++,n.shelfContents=n.shelfContents.filter(e=>e.id!==o.adamId))}for(const o of n.shelfContents){if(o.type===PN)return null
if(r(o.attributes)||kr(t)){t.isDeferring=!0,t.remainingItems.push(o)
continue}if(xe(e,o,c))continue
const n=ls(e,o,t)
n&&(l.push(n),dc(t.metricsLocationTracker),t.ordinalIndex++)}Or(t.featuredContentId)&&!br(t.featuredContentId)&&(l=function(e,t){if(!e)return null
const n=e.length,r=n%3
return n>=3?e.slice(0,n-r):e}(l)),delete t.maxItemCount
const f=new CM(t.shelfStyle)
let d
if(f.isHorizontal=!0,f.eyebrow=t.eyebrow,f.eyebrowArtwork=t.eyebrowArtwork,f.title=t.title,f.titleArtwork=t.titleArtwork,f.subtitle=t.subtitle,f.items=l,f.shouldFilterApps=t.shouldFilter,f&&o(f.items)&&t.isFirstRender&&ro(f,t,e.client.deviceType),Or(t.featuredContentId))d=new VL(IC)
else if(d=new VL(yN),!function(e){return e.contentType===RP}(f)){const e=function(e,t){if(!t)return null
switch(t){case SO:case CP:return t
default:return null}}(0,t.shelfStyle)
d.pageData=as(0,t.title,e)}d.pageUrl=t.seeAllUrl,d.title=e.loc.string(Sk),d.referrerUrl=t.metricsPageInformation.pageUrl,et(e,d,t.seeAllUrl,{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker})
const p=function(e,t,n){return!br(n.featuredContentId)&&497!==n.featuredContentId}(0,0,t),h=s(d.pageUrl)||s(d.pageData)
if(p&&h&&(f.seeAllAction=d),t.shelfStyle===OO||t.shelfStyle===CO){const e=U(t.featuredContentData,"suppressTagline")!==SD
r(f.presentationHints)?f.presentationHints={showSupplementaryText:e}:f.presentationHints={...f.presentationHints,showSupplementaryText:e}}return t.shelfStyle,f.url=Lr(f,t),f}function ls(e,t,n){if(o(t))return null
let a
n.showOrdinals&&(a=e.loc.decimal(n.ordinalIndex))
let c,u=null
!s(n.shelfBackground)||n.shelfBackground.type!==xk&&n.shelfBackground.type!==TP||(u=tN),i(n)&&(c=n.clientIdentifierOverride)
const f={ordinal:a,metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:D(t),isAdvert:Qo(0,t)},clientIdentifierOverride:c,artworkUseCase:ea(0,n.shelfStyle),offerStyle:u,canDisplayArcadeOfferButton:Ha(0,n.shelfStyle),isContainedInPreorderExclusiveShelf:497===n.featuredContentId,shouldHideArcadeHeader:e.featureFlags.isEnabled(cb)&&n.isArcadePage}
let d
switch(n.shelfStyle){case CO:d=function(e,t,n,r){return $f.context("trailersLockupFromData",()=>{const o=new Zx
return function(e,t,n,r,o){t&&$f.context("copyDataIntoTrailersLockup",()=>{Oi(e,t,n,o),n.trailers=aa(e,t,r,o.metricsOptions,n.adamId)})}(e,t,o,r,n),o})}(e,t,f,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}})
break
case OO:d=Ui(e,t,f)
break
case PC:d=function(e,t,n){return $f.context("posterLockupFromData",()=>{const o=new bM
return function(e,t,n,o){t&&$f.context("copyDataIntoPosterLockup",()=>{Oi(e,t,n,o),n.epicHeading=function(e,t){const n=Ae(e,t,"editorialArtwork.epicHeading")
return s(n)&&s("bb")?ta(e,n,{cropCode:"bb",useCase:0}):null}(e,t),n.posterArtwork=function(e,t){const n=Ae(e,t,"editorialArtwork.postCard")
return s(n)?ta(e,n,{cropCode:"sr",useCase:0,withJoeColorPlaceholder:!0}):null}(e,t),n.posterVideo=function(e,t,n){const o=Ae(e,t,[sN,Mp]),i=ta(e,Ae(e,t,[sN,Mp,_O]),{useCase:18,withJoeColorPlaceholder:!0,cropCode:"sr"})
if(s(o)){const e=l(o,Rk)
return r(e)?null:new wL(e,i,{allowsAutoPlay:!0,looping:!0,canPlayFullScreen:!1,showPlaybackControls:!1,playbackControls:{prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1},autoPlayPlaybackControls:{prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1}})}return null}(e,t),n.offerDisplayProperties&&(n.offerDisplayProperties=n.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,tN,"lightOverArtwork")),n.posterVideo?n.isDark=L(n.posterVideo.preview.backgroundColor):n.posterArtwork?n.isDark=L(n.posterArtwork.backgroundColor):n.isDark=!1
const i=Se(e,t,oP),a=Se(e,t,HD)
i&&a&&(n.footerText=e.loc.uppercased(ja(e,t,e.loc.string(BP))))})}(e,t,o,n),o})}(e,t,f)
break
default:d=xi(e,t,f)}return r(d)||!d.isValid()?null:d}function fs(e,t,n){$f.catchingContext("parseGrouping",()=>{n.topChartIdentifiers=t.topChartIdentifiers
for(const r of t.data){const t=V(r,sk),o=Rr(e,r,n),i=o.shelfToken,a=o.metricsOptions
let c
for(const o of DV)if(o.supports(e,r,t)){c=o.createShelf(e,r,n,i,a)
break}s(c)&&n.shelves.push(c)}})}function ds(e,t){const n=[]
let r=[]
return function e(t){const o=V(t,sk)
$f.catchingContext(`flattenGroupingTree.addMediaApiDataToGroupingData: ${o}`,()=>{const a=he(t,ER)
if(s(a))e(a)
else if(function(e){return GG.has(e)}(o)){const n=we(t,bD)
for(const t of n)e(t)}else if(424===o){const n=we(t,bD),o=function(e,t){const n=[],r=we(t,bD)
for(const e of r)if(Sr(V(e,sk))){const t=U(e,Vb)
i(t)&&n.push(t)}return n}(0,t)
r=r.concat(o)
for(const t of n)e(t)}else n.push(t)})}(t),{data:n,topChartIdentifiers:r,originalGroupingData:t}}function ps(e,t,n){var r
if(e.user&&e.user.isManagedAppleID)return null
{const t=[],n=e.loc.string("FOOTER_REDEEM",lE),o=new VL(nD)
o.pageUrl=cO
const s=new fM(n,o)
if(t.push(s),e.bag.isMonetaryGiftingEnabled){const n=e.loc.string("FOOTER_SEND_GIFT",Nd),r=new VL(nD)
r.pageUrl=J_
const o=new fM(n,r)
t.push(o)}const i=e.bag.accountTopUpURL
if(i){const n=null!==(r=e.bag.accountTopUpTitle)&&void 0!==r?r:e.loc.string("FOOTER_ADD_MONEY"),o=new VL(nD)
o.pageUrl=i
const s=new fM(n,o)
t.push(s)}const a=new CM("titledButtonStack"),c=new lM(t)
return c.compactLineBreaks=c.buttons.map((e,t)=>t),a.items=[c],a}}function hs(e,t,n=!0){const r=new WL(t),o=e.loc.string(oh),s=new Wx(o)
s.clickAction=r,s.presentationStyle=[uP,lP],n&&s.presentationStyle.push(fP)
const i=new CM("footnote")
if(i.items=[s],e.bag.emailSupportLinkURL){const t=new WL(e.bag.emailSupportLinkURL),r=new Wx("Email Support")
r.clickAction=t,r.presentationStyle=[uP,lP],n&&r.presentationStyle.push(fP),i.items.push(r)}return i}function ws(e,t){const n=new CM("unifiedMessage")
return n.id=t,n.items=[new _M(t)],n.isHidden=!0,n}function gs(e,t,n,r,o,a,u){const l=c(t,zD),f=[]
for(const t of l){const c=g(t)
if(i(c)){const t=ms(e,c,n,r,o,a,u)
s(t)&&f.push(t)}}if(0===f.length){const t=function(e,t,n,r,o){const s=yI,i=e.loc.string("PRODUCT_PRIVACY_NO_DETAILS_PROVIDED_TITLE"),a=e.loc.string("PRODUCT_PRIVACY_NO_DETAILS_PROVIDED_BODY"),c=Ve(e,fg),u=ys(e,t,s,n,r,o)
return new $V(s,i,a,c,n,[],[],u)}(e,n,r,a,u)
f.push(t)}for(const e of f)cn(0,e,{id:e.identifier,kind:null,softwareType:null,title:e.title,pageInformation:a,locationTracker:u,targetType:PI}),dc(u)
return f}function ms(e,t,n,r,a,u,f){const d=l(t,II),p=l(t,g_),h=l(t,mN)
if(o(d)||o(p)||o(h))return null
const w=Ps(e,t,function(e,t){switch(t){case"DATA_NOT_LINKED_TO_YOU":return"resource://person.circle.slash"
case"DATA_USED_TO_TRACK_YOU":return"systemimage://person.fill.viewfinder"
case"DATA_NOT_COLLECTED":return"systemimage://checkmark.circle"
case"DATA_LINKED_TO_YOU":return pg
default:return null}}(0,d)),m=a?Ts(e,t,r):[],y=function(e,t,n){const r=c(t,"purposes"),o=[]
for(const t of r){const r=g(t)
if(i(r)){const t=Es(e,r,n)
s(t)&&o.push(t)}}return o}(e,t,r),T=ys(e,n,d,r,u,f)
return new $V(d,p,h,w,r,y,m,T)}function ys(e,t,n,r,o,s){let i
return r!==iD&&r!==UC||(i=Os(e,t,Is(e)&&r===iD?UC:tk,o,s,n)),i}function Ts(e,t,n){const r=c(t,"dataCategories"),o=[]
for(const t of r){const r=g(t)
if(i(r)){const t=As(e,r,n===iD?iD:tk)
s(t)&&o.push(t)}}return o}function As(e,t,n){const s=l(t,II),i=l(t,"dataCategory")
if(o(s)||o(i))return null
const a=Ps(e,t,function(e,t){switch(t){case"FINANCIAL_INFO":return"systemimage://creditcard.fill"
case"CONTACT_INFO":return"systemimage://info.circle.fill"
case"OTHER":return"systemimage://ellipsis.circle.fill"
case"SENSITIVE_INFO":return"systemimage://eye.fill"
case dg:return"systemimage://chart.bar.fill"
case"CONTACTS":return pg
case"PURCHASES":return"systemimage://bag.fill"
case"LOCATION":return"systemimage://location.fill"
case"HEALTH_AND_FITNESS":return"systemimage://heart.circle.fill"
case"IDENTIFIERS":return"resource://person.crop.rectangle.line.fill"
case"USER_CONTENT":return"systemimage://photo.fill.on.rectangle.fill"
case"BROWSING_HISTORY":return"systemimage://clock.fill"
case"DIAGNOSTICS":return"systemimage://gearshape.fill"
case"SEARCH_HISTORY":return"systemimage://magnifyingglass.circle.fill"
case"BODY":return"systemimage://figure"
case"SURROUNDING":return"systemimage://arkit"
default:return null}}(0,s))
if(r(a))return null
let u=[]
n===tk&&(u=c(t,"dataTypes"))
const f=new MV(s,i,a,n,u)
return s===dg&&(f.prefersSmallArtwork=!0),f}function Es(e,t,n){const r=l(t,II),s=l(t,"purpose"),i=Ts(e,t,n)
return o(r)||o(s)||0===i.length?null:new xV(r,s,i)}function Ps(e,t,n){let o
if(i(n)&&(o=Ve(e,n)),r(o)){const n=d(t,lN)
s(n)&&(o=ta(e,n,{useCase:0,allowingTransparency:!0}))}return o}function Is(e){return e.client.deviceType===xN}function Ss(e,t,n,a,c,u){return $f.context("createPrivacyHeaderFromData",()=>{const f=function(e,t,n,r,a,c){let u,f=XR
const d=he(t,Zk),p=i(d)&&UV.indexOf(d.id)>-1
u=n&&!p?e.loc.string("PRODUCT_PRIVACY_DETAIL_HEADER_TEMPLATE"):e.loc.string("PRODUCT_PRIVACY_HEADER_TEMPLATE")
const h=Cs(e,t,r,tk,a,c),w=1===h.length&&h[0].identifier===yI||0===h.length
w&&(u=e.loc.string("PRODUCT_PRIVACY_HEADER_NO_DETAILS_TEMPLATE"))
const g=U(t,Vk)
s(g)?u=u.replace(ig,"<b>"+g+"</b>"):(u=w?e.loc.string("PRODUCT_PRIVACY_FALLBACK_HEADER_NO_DETAILS_TEMPLATE"):n?e.loc.string("PRODUCT_PRIVACY_FALLBACK_DETAIL_HEADER_TEMPLATE"):e.loc.string("PRODUCT_PRIVACY_FALLBACK_HEADER_TEMPLATE"),f=tD)
const m=e.loc.string("PRODUCT_PRIVACY_SUMMARY_PRIVACY_POLICY_LINK")
u=u.replace("{privacyPolicyLink}",m)
const y=function(e,t,n,r){let s
{const n=Pe(e,t,iC)
if(o(n))return null
s=new WL(n,!1)}return s.title=e.loc.string("PRODUCT_PRIVACY_SUMMARY_PRIVACY_POLICY_BUTTON_TITLE"),Qe(e,s,{targetType:nN,id:cg,pageInformation:n,locationTracker:r}),s}(e,t,a,c),T={}
if(s(y)&&(T[m]=y),n){const n=function(e,t,n,r){const s=l(x(t,w_),"managePrivacyChoicesUrl")
if(o(s))return null
const i=new WL(s,!1)
return Qe(e,i,{targetType:nN,id:"managePrivacyChoices",pageInformation:n,locationTracker:r}),i}(e,t,a,c)
if(s(n)){const t=e.loc.string("PRODUCT_PRIVACY_MANAGE_CHOICES_LINK")
u+=ag,u+=e.loc.string("PRODUCT_PRIVACY_MANAGE_CHOICES_TEMPLATE").replace("{manageChoicesLink}",t),n.title=t,T[t]=n}}const A=new sL(u,f)
return new aM(A,T)}(e,t,n,a,c,u),d=function(e,t,n,o,s){if(!n)return null
const i=e.loc.string(ug),a=e.loc.string("PRODUCT_PRIVACY_DEFINITIONS_LINK_TEMPLATE").replace("{privacyDefinitionsLink}",i),c=_s(e,o,s)
if(r(c))return null
c.title=i
const u={}
u[i]=c
const l=new sL(a,tD)
return new aM(l,u)}(e,0,n,c,u)
let p,h
n&&(p=function(e,t,n,o,s){if(!n)return null
const i=e.loc.string(TI),a=vs(e,o,s)
let c
const u={}
r(a)?c=e.loc.string(AI):(c=e.loc.string(sg).replace(bO,i),a.title=i,u[i]=a)
const l=new sL(c,tD)
return new aM(l,u)}(e,0,n,c,u),i(p)&&(h=vs(e,c,u)))
const w=[]
if(s(d)){const e=new LV(d,void 0)
w.push(e)}if(s(p)){const e=new LV(p,h)
w.push(e)}return new NV(f,n,[],[],w,void 0)})}function vs(e,t,n){const r=e.bag.appPrivacyLearnMoreEditorialItemId
if(o(r))return null
const s=new VL(FD)
return s.title=e.loc.string(TI),s.pageUrl=`https://apps.apple.com/story/id${r}`,Qe(e,s,{targetType:vN,id:"privacyLearnMore",pageInformation:t,locationTracker:n}),s}function _s(e,t,n){const r=e.bag.appPrivacyDefinitionsEditorialItemId
if(o(r))return null
const s=new VL(FD)
return s.title=e.loc.string(ug),s.pageUrl=`https://apps.apple.com/story/id${r}`,Qe(e,s,{targetType:vN,id:lg,pageInformation:t,locationTracker:n}),s}function Cs(e,t,n,r,o,s){let a=[]
const c=x(t,n?w_:TO)
return i(c)&&(a=gs(e,c,t,r,e.client.deviceType!==xN||r===UC,o,s),1===a.length&&0===a[0].categories.length&&(a[0].style=iD)),a}function Os(e,t,n,o,a,c){if(r(t.id))return null
const u=new VL(EI)
u.title=e.loc.string("ACTION_SEE_DETAILS"),u.pageData=function(e,t,n,r,o){const s=[]
if(e.client.deviceType!==xN||n!==tk){const n=new CM(oN),i=Ss(e,t,!0,!1,r,o)
n.items=[i],s.push(n)}const i=new DM(s)
return e.client.deviceType===xN&&n!==tk||(i.isIncomplete=!0),i.title=e.loc.string(MC),i}(e,t,n,o,a)
const l=t.type===TN?YF:WF
let f
i(c)&&(f={privacyTypeId:c})
const d=Ox.fromComponents(RF,null,`/${o$}/${l}/${t.id}`,f)
u.pageUrl=d.build()
const p={targetType:vN,id:"seeDetails",pageInformation:o,locationTracker:a}
return s(c)&&(p.targetType=PI,p.id=c),Qe(e,u,p),u}function bs(e,t){if(!i(t))return null
const n=ta(e,t,{useCase:12,allowingTransparency:!0})
return o(n)?null:(n.crop="sr",n)}function Rs(e,t,n,r){let o=0
for(const s of t){const t=n[s.key]
if(t){let n=null
if(Ai(e))n=new IF(t.shelfId,t.index,!0)
else{const e=new fF(t.section,!0)
e.index=t.index,n=e}s.clickAction=n}let i
switch(s.key){case T_:case Cb:case gk:case BC:case h_:case GC:case lb:i="select"
break
default:i=QD}s.clickAction&&Qe(e,s.clickAction,{targetType:_E,id:s.key,idType:WD,actionType:i,actionDetails:{position:o},pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker}),o+=1}}function ks(e,t,n,r,s,i){if(r)return null
const a=Fi(e,t)
if(o(a))return null
const c=new Fx(a),u=s?"":e.loc.string("INFO_LIST_CATEGORY_TITLE")
return new Lx(u,[c])}function Ds(e,t,n,a,c,u){const l=x(t,xE)
let f=[],p=function(e,t){let n=null
if(Xi(e,t)){const r=wa(0,t,e.appleSilicon.isSupportEnabled),o=ha(e,t),s=Ea(e,t,e.appleSilicon.isSupportEnabled,e.appleSilicon.isRosettaAvailable),i=function(e,t,n,r,o=!0){return!!ma(0,n,r).some(e=>ya(0,t,e))}(0,o,e.client.deviceType,r,s),a=e.loc.deviceDisplayName(e)
i&&a&&(n=e.loc.string("INFO_LIST_REQUIREMENTS_SUMMARY").replace("{deviceName}",a))}return n}(e,t)
const h=Se(e,t,Rp,Ce(e))
if(i(l)){const t=function(e){const t=[Yk,cD,IO,$N,AO,CR,xN],n=function(e,t,n){let r=null
switch(t){case CN:r=Yk
break
case EN:r=cD
break
case $N:r=$N
break
case"tv":r=CR
break
case xN:r=xN
break
case bR:r=AO}return s(n)&&n===IO&&(r=IO),r}(0,e.client.deviceType,e.host.deviceModel)
if(s(n)){const e=t.indexOf(n)
e>0&&(t.splice(e,1),t.unshift(n))}return t}(e)
for(const n of t){const t=d(l,n)
if(i(t)){const r=Ns(0,t,e.appleSilicon.isSupportEnabled&&n===$N&&h&&!e.appleSilicon.isRosettaAvailable)
s(r)&&f.push(r)}}!s(p)&&f.length>0&&(p=f[0].text)}else{const n=function(e,t){const n=Pe(e,t,"requirementsString")
return r(n)?null:new Fx(n)}(e,t)
s(n)&&(f=[n])}if(o(f))return null
const w=c?"":e.loc.string("REQUIREMENTS")
return new Lx(w,f,p)}function Ns(e,t,n){const r=l(t,"deviceFamily")
let s=l(t,"requirementString")
const a=c(t,"devices")
if(n){const e=l(t,"rosettaUnavailableRequirementString")
i(e)&&(s=e)}if(o(s))return null
const u=[]
for(const e of a)u.push("\u2022\t\u2068"+e+"\u2069")
const f=u.length>0?u.join("\n"):null
return new Fx(s,r,null,f)}function Ls(e,t,n,r,o,a){const u=x(t,"contentRatingsBySystem.appsApple")
if(u){const n=l(u,FN)
if(n){const r=c(u,"advisories")
let a=null
const d=Z(t,_e(e,t),"ageBand"),p=f(d,"minAge"),h=f(d,"maxAge")
a=s(p)&&s(h)?e.loc.string("INFO_LIST_AGE_RATING_SUMMARY").replace("{ageRating}",n).replace("{minAgeRating}",e.loc.decimal(p)).replace("{maxAgeRating}",e.loc.decimal(h)):n
const w=[]
if(e.bag.requireAgeVerification&&function(e,t,n){let r
switch(n){case"twelvePlus":r=3
break
case Zg:r=4
break
case"adultOnly":r=5
break
default:r=1}return t>=r}(0,f(u,"rank"),Zg)&&function(e,t){const n=we(t,Nh)
for(const e of n)if(l(e,"id")===6014..toString())return!0
return!1}(0,t)){let n=null
const r=t.type===TN
if(r){const e=pe(t,NN)
if(s(e))for(const t of e.data)if(s(U(t,Xg))){n="AppStore.AgeVerification.ProductPage.Rating.BundleUnsuitableForJuveniles"
break}}else s(U(t,Xg))&&(n="AppStore.AgeVerification.ProductPage.Rating.UnsuitableForJuveniles")
let o
null!=n&&w.push(new Fx(e.loc.string(n))),o=r?"AppStore.AgeVerification.ProductPage.Rating.BundleRequiredAge":"AppStore.AgeVerification.ProductPage.Rating.RequiredAge",w.push(new Fx(e.loc.string(o)+"\n"))}if(a&&w.push(new Fx(a)),r.length>0)for(const e of r)w.push(new Fx(e))
let g=null
w.length>1&&(g=a)
const m=o?"":e.loc.string("INFO_LIST_AGE_RATING_TITLE")
let y
return i(e.bag.ageRatingLearnMoreEditorialItemId)&&(y=new VL(FD),y.title=e.loc.string("INFO_LIST_AGE_RATING_LEARN_MORE"),y.pageUrl=`https://apps.apple.com/story/id${e.bag.ageRatingLearnMoreEditorialItemId}`),new Lx(m,w,g,y)}}return null}function Fs(e,t){switch(xs(e,t)){case qS:case tC:case"SIRI_REMOTE_OR_CONTROLLER_REQUIRED":case qp:return!0
default:return!1}}function $s(e,t){return Go(e,e.bag.gameControllerRecommendedRolloutRate)&&xs(e,t)===qp}function xs(e,t){const n=Ce(e)
if(!K(t,n)){const r=Ae(e,t,"compatibilityControllerRequirement")
if(o(r))return $b
const s=r[n]
return o(s)?$b:s}const r=Pe(e,t,Hb)
return i(r)?r:$b}function Ms(e,t,n,o,s,i){const a=Pe(e,t,"copyright")
if(!r(a)){const t=new Fx(a),n=s?"":e.loc.string("INFO_LIST_COPYRIGHT")
return new Lx(n,[t])}return null}function Us(e,t,n,r,i,a){const c=Ee(e,t,"languageList")
if(o(c))return null
const u=c.length
if(u<1)return null
let l=null,f=null
switch(u){case 0:break
case 1:f=c[0]
break
case 2:f=e.loc.string("INFO_LIST_TWO_LANGUAGES_SUMMARY").replace("{first}",c[0]).replace("{second}",c[1])
break
default:const t=u-1
l=e.loc.string("INFO_LIST_MORE_LANGUAGES_SUMMARY").replace("{language}",c[0]).replace(A_,e.loc.formattedCount(t)),f=function(e,t){if(null===e||null===t)return null
if(0===e.length)return""
let n=e.length,r=""
return e.forEach((e,o)=>{null===e?n-=1:(r+=e,o<n-1&&(r+=t))}),r}(c,e.loc.string("CONJUNCTION_SEPARATOR"))}if(!s(f))return null
const d=new Fx(f),p=i?"":e.loc.string("SUPPORTED_LANGUAGES")
return new Lx(p,[d],l)}function Bs(e,t,n){return $f.context("capabilitiesFromData",()=>[Gs(e,t),Vs(e,t),Ys(e,t),Hs(e,t),js(e,t),Ws(e,t,n),qs(e,t)].filter(e=>e))}function Gs(e,t){if(!Se(e,t,Tb))return null
const n=e.loc.string("CAPABILITY_GAME_CENTER_TITLE"),r=new sL(e.loc.string("CAPABILITY_GAME_CENTER_EXPLANATION")),o=new aM(r)
if(e.props.enabled(ik)){const t=Ve(e,"resource://ProductCapabilityGameCenter",46,45)
return new Hx(Kk,n,o,null,null,t)}return new Hx(Kk,n,o,"ProductCapabilityGameCenter")}function Vs(e,t){if(!Se(e,t,"isSiriSupported"))return null
const n=e.loc.string("CAPABILITY_SIRI_TITLE"),r=new sL(e.loc.string("CAPABILITY_SIRI_EXPLANATION")),o=new aM(r)
if(e.props.enabled(ik)){const t=Ve(e,"resource://ProductCapabilitySiri",46,45)
return new Hx(Kk,n,o,null,null,t)}return new Hx(Kk,n,o,"ProductCapabilitySiri")}function Hs(e,t){if(!Se(e,t,"supportsPassbook"))return null
const n=e.loc.string("CAPABILITY_WALLET_TITLE"),r=new sL(e.loc.string("CAPABILITY_WALLET_EXPLANATION")),o=new aM(r)
if(e.props.enabled(ik)){const t=Ve(e,"resource://ProductCapabilityWallet",46,45)
return new Hx(Kk,n,o,null,null,t)}return new Hx(Kk,n,o,"ProductCapabilityWallet")}function js(e,t){if(!Fs(e,t))return null
const n=e.loc.string("CAPABILITY_MFI_CONTROLLERS_TITLE")
let r=null
const o=e.bag.gameControllerLearnMoreEditorialItemId
Go(e,e.bag.gameControllerRecommendedRolloutRate)&&i(o)&&(r=new VL(FD),r.title=e.loc.string("AppStore.ProductPage.Capability.GameController.ActionTitle"),r.pageUrl=`https://apps.apple.com/story/id${o}`)
let s=r?e.loc.string("AppStore.ProductPage.Capability.GameController.Explanation.WithActionTemplate"):e.loc.string("AppStore.ProductPage.Capability.GameController.Explanation")
const a={};(null==r?void 0:r.title)&&(s=s.replace(bO,r.title),a[r.title]=r)
const c=new sL(s,XR),u=new aM(c,a)
if(e.props.enabled(ik)){const t=Ve(e,"resource://ProductCapabilityController",46,45)
return new Hx(Kk,n,u,null,null,t)}return new Hx(Kk,n,u,"ProductCapabilityController")}function Ws(e,t,n){const r=U(t,"familyShareEnabledDate")
if(!r||G(t,AR))return null
const o=new Date(r),s=new Date
if(!o||o>s)return null
const a=Se(e,t,iP),c=a&&Se(e,t,"hasFamilyShareableInAppPurchases")
let u=null
i(e.bag.familySubscriptionsLearnMoreEditorialItemId)&&c&&(u=new VL(FD),u.title=e.loc.string("CAPABILITY_FAMILY_SHARING_ACTION_TITLE"),u.pageUrl=`https://apps.apple.com/story/id${e.bag.familySubscriptionsLearnMoreEditorialItemId}`)
const l=e.loc.string("CAPABILITY_FAMILY_SHARING_TITLE")
let f
if(c?f=u?"CAPABILITY_FAMILY_SHARING_SOME_SHAREABLE_IAPS_EXPLANATION_WITH_ACTION_TEMPLATE":"CAPABILITY_FAMILY_SHARING_SOME_SHAREABLE_IAPS_EXPLANATION":a||n||(f=u?"CAPABILITY_FAMILY_SHARING_PAID_APP_NO_IAPS_EXPLANATION_WITH_ACTION_TEMPLATE":"CAPABILITY_FAMILY_SHARING_PAID_APP_NO_IAPS_EXPLANATION"),!f)return null
let d=e.loc.string(f)
const p={};(null==u?void 0:u.title)&&(d=d.replace(bO,u.title),p[u.title]=u)
const h=new sL(d),w=new aM(h,p)
if(e.props.enabled(ik)){const t=Ve(e,"resource://ProductCapabilityFamilySharing",46,45)
return new Hx(Kk,l,w,null,u,t)}return new Hx(Kk,l,w,"ProductCapabilityFamilySharing",u)}function qs(e,t){if(!Se(e,t,"hasSafariExtension"))return null
const n=e.loc.string("CAPABILITY_SAFARI_EXTENSION_TITLE"),r=new sL(e.loc.string("CAPABILITY_SAFARI_EXTENSION_EXPLANATION")),o=new aM(r)
if(e.props.enabled(ik)){const t=Ve(e,"resource://ProductCapabilitySafariExtension",129,129)
return new Hx(Kk,n,o,null,null,t)}return new Hx(Kk,n,o,"ProductCapabilitySafariExtension")}function Ys(e,t){if(!e.props.enabled(ik))return null
if(!Se(e,t,rC))return null
const n=e.loc.string("CAPABILITY_SHAREPLAY_TITLE"),r=new sL(e.loc.string("CAPABILITY_SHAREPLAY_EXPLANATION")),o=new aM(r),s=Ve(e,"systemimage://shareplay"),i=F("systemGreen")
return new Hx(Kk,n,o,null,null,s,i)}function zs(e,t,n,r,o,i){const a=Pe(e,t,"seller"),c=Pe(e,t,"sellerLabel")||e.loc.string("SELLER")
if(!s(a))return null
const u=new Fx(a),l=new Lx(o?"":c,[u])
return l&&!r?l:null}function Js(e,t,n,r,o,i){const a=Sa(e,t)
if(!n&&s(a)&&s(a.fileSizeByDevice)){const t=e.loc.fileSize(a.fileSizeByDevice),n=[],r=o?"":e.loc.string("FILE_SIZE")
if(e.props.enabled(Ov)&&s(a.maxEssentialInstallSizeInBytes)){const t=a.fileSizeByDevice+a.maxEssentialInstallSizeInBytes,o=e.loc.string(MI).replace(UI,e.loc.fileSize(t)),s=new Fx(o)
return n.push(s),new Lx(r,n)}if(e.props.enabled(Lg)&&s(a.maxInstallSizeInBytes)){const o=new Fx(t,e.loc.string("INITIAL_APP_SIZE"))
n.push(o)
let s=`Up to ${e.loc.fileSize(a.maxInstallSizeInBytes)}`
e.props.enabled("backgroundAssetsLoc")&&(s=e.loc.string(MI).replace(UI,e.loc.fileSize(a.maxInstallSizeInBytes)))
const i=new Fx(s,e.loc.string("ADDITIONAL_CONTENT_AFTER_APP_INSTALL"))
n.push(i)
let c=a.fileSizeByDevice
c+=a.maxInstallSizeInBytes
const u=e.loc.string(MI).replace(UI,e.loc.fileSize(c))
return new Lx(r,n,u)}{const e=new Fx(t)
return n.push(e),new Lx(r,n)}}return null}function Ks(e,t,n,o,s,i){const a=we(t,wv)
if(a.length>0){const t=[]
for(const n of a){const o=U(n,FN),s=pt(e,n)
if(r(s))continue
const i=l(s,$C),a=s.recurringSubscriptionPeriod
let c=e.loc.string("INFO_LIST_IAP_DURATION")
if(e.client.isPhone)switch(c=c.replace("{name}",o),a){case"P1Y":c=c.replace(__,e.loc.formatDuration(1,"years"))
break
case"P1M":c=c.replace(__,e.loc.formatDuration(1,"months"))
break
case"P1W":c=c.replace(__,e.loc.formatDuration(1,"weeks"))
break
case"P1D":c=c.replace(__,e.loc.formatDuration(1,"days"))
break
default:c=`${o}`}else c=`${o}`
t.push(new Fx(c,null,i))}const n=s?"":e.loc.string("INFO_LIST_IN_APP_PURCHASES")
return new Lx(n,t,e.loc.string("YES"))}return null}function Zs(e,t,n,r,o,s,i,a){const c=[]
for(const u of t){const t=u(e,n,r,o,s,i)
t&&(t.expandAction=null,c.push(t),a&&a(u,c.length-1))}return c}function Xs(e,t,n,r){const o=new CM(Ug)
o.isHorizontal=!0
let s=null
s=n?t.slice(0,8):t
const a=[]
for(let e=0;e<s.length;e++){const t=s[e]
t.action=new yF(t.playerId),i(r)&&cn(0,t,{pageInformation:r.destinationPageInformation,locationTracker:r.sourceLocationTracker,kind:"friendPlayer",title:"",id:"",idType:WD,softwareType:null,anonymizationOptions:{anonymizationString:`FRIEND${e+1}`}}),a.push(t),i(r)&&dc(r.sourceLocationTracker)}if(o.items=a,o.mergeWhenFetched=!0,o.isHidden=0===o.items.length,o.batchGroup=lk,t.length>8){const n=new CM("smallGameCenterPlayer")
n.title=e.loc.stringWithCount("PRODUCT_FRIENDS_PLAYING_SEE_ALL_TITLE",t.length),n.items=t.map(e=>(e.action=new yF(e.playerId),e)),n.rowsPerColumn=1
const s=new DM([n])
s.title=r.title
const i=new VL(yN)
i.title=e.loc.string(Sk),i.pageData=s,o.seeAllAction=i}return i(r)&&cn(0,o,{id:"",kind:null,softwareType:null,targetType:KD,title:r.title,pageInformation:r.sourcePageInformation,locationTracker:r.sourceLocationTracker,idType:WD,badges:{gameCenter:{}}}),o}function Qs(e,t,n,s){return $f.context("inAppPurchasesShelf",()=>{if(!function(e,t){return t!==Ak}(0,e.host.platform))return null
if(o(t))return null
const i=pe(t,hv)
if(!i||!i.data.length)return null
if(!i.data.filter(function(e){return G(e,Hv)===s.isForSubscriptions}).length)return null
const a={pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:KD,id:`${n.getSequenceId()}`,idType:WD},c=B(t,HD)
let u=ID
c&&(u=QO)
const l=SO,f=new CM(l)
let d=null
s.options&&(d=s.options.spotlightInAppProductIdentifier),function(e,t,n){const o=gN
for(const e of n.data){let n=pe(e,o)
n||(n={data:[t]}),r(e.relationships)&&(e.relationships={}),e.relationships[o]=n}}(0,t,i)
const p=[],h=function(e,t,n,r,o,s){const i=ji(e,t,{lockupOptions:{metricsOptions:r,offerStyle:n,skipDefaultClickAction:!0,artworkUseCase:1},contentUnavailable:function(e){return p.push(e),!1}})
return o&&Iu(0,o,i),i}(e,i,u,a,d).filter(function(e){return e.productIdentifier===d&&(s.options.spotlightSection=new fB(MN,s.isForSubscriptions?bk:Ok)),e.isSubscription===s.isForSubscriptions})
if(0===h.length&&0===p.length)return null
if(f.items=h,p.length){const r=new qH(p,f.title,!1,l,u,null)
r.appBundleId=Pe(e,t,mD),s.isForSubscriptions?r.inAppShelfId=bk:r.inAppShelfId=Ok,f.url=Au(0,r,n)}let w
return s.isForSubscriptions?(f.title=e.loc.string("PRODUCT_SECTION_SUBSCRIPTIONS","Subscriptions"),w="subscription"):(f.title=e.loc.string("PRODUCT_SECTION_IN_APP_PURCHASES"),w="iAP"),ic(a,f.title),cc(n.locationTracker),dc(n.locationTracker),f.isHorizontal=!0,n.addImpressionsToShelf(e,f,w),f})}function ei(e,t,n,r,a,c){return $f.context(MR,()=>o(t)?null:function(e,t,n,r,o){return $f.context("standardLinksShelf",()=>{const a=new CM("productPageLink"),c=[]
if(e.client.deviceType!==$N){const n=Pe(e,t,pv)
if(n){const t=new WL(n,!1),r=e.loc.string("DEVELOPER_WEBSITE")
c.push(new cM(r,t,Zk))}}const u=Pe(e,t,iC)
if(u){const t=new WL(u,!1),n=e.loc.string(E_)
c.push(new cM(n,t,TO))}if(B(t,Bg)){const n=function(e,t){const n=t.id,r=t.type
return s(t)&&s(n)&&s(r)?`${RF}:/${r$}?resourceType=${r}&resourceId=${n}`:null}(0,t)
if(n){const t=new VL(yN)
t.pageUrl=n
const r=e.loc.string(I_)
c.push(new cM(r,t,Rb))}}const l=e.bag.productPageReportProblemSADSubscriptionArray,f=t.id,d=l.includes(f),p=$e(e).isSystemAppFromData(t),h=t.type===TN,w=r&&!p,g=e.bag.productPageReportProblemSecondPartyAppArray.includes(f)
if(!h&&!g&&!o&&e.bag.reportProblemEnabled&&(d||w)){const n=function(e,t){const n=t.id,r=e.bag.productPageReportProblemURL
return s(n)&&s(r)?r.replace("{productId}",n):null}(e,t)
if(i(n)){const t=new WL(n,!1),r=e.loc.string("REPORT_A_PROBLEM"),o=new cM(r,t,"reportAProblem",d?null:f)
c.push(o)}}return c&&c.length>0&&(a.items=c),n.addImpressionsToShelf(e,a,FO),a})}(e,t,n,r,c))}function ti(e,t,n,s){const i=Fi(e,t)
if(o(i))return null
const a=e.loc.string("BADGE_CATEGORY_HEADING"),c=new CU(lN,lb,{},"standard",a,i,null,i,a,ID)
if(new VL(yN).title=U(t,Vk),n&&"tv"!==e.client.deviceType){const n=Ae(e,t,_I)
if(r(n))return null
c.artwork=bs(e,n)}return c}function ni(e,t,n,r){const o=Ae(e,t,CI)
if(o){const t=ba(0,e.host.clientIdentifier)
if(t){const n=d(o,t)
if(n){const t=f(n,n_),r=l(n,bg),o=l(n,ED),s=l(n,Vb),i=e.loc.string("BADGE_CHART_POSITION_HEADING"),a=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_CHART_POSITION_TITLE").replace(OI,t.toString()),c=new CU(vI,vI,{position:e.loc.decimal(t)},pN,i,r,null,a,r,mk),u=function(e,t,n){return be(e,new xM(e).forType(PO).addingQuery(HE,NN).addingQuery(Vb,n).addingQuery(ED,t).includingMacOSCompatibleIOSAppsWhenSupported(!0)).toString()}(e,o,s)
if(u){const e=new VL(IC)
e.pageUrl=u,c.clickAction=e}return c}}}return null}function ri(e,t,n,r){const o=U(t,Oh)
if(o){const r={contentRating:o},s=function(e,t){if(t)switch(e.props.isNotEnabled("brazilOfficialAgeRatings")&&t>=12&&t<=17&&(t-=6),t){case 6:return"AgeRatingL"
case 7:return"AgeRating10"
case 8:return"AgeRating12"
case 9:return"AgeRating14"
case 10:return"AgeRating16"
case 11:return"AgeRating18"
case 12:return"AgeRatingL-Official"
case 13:return"AgeRating10-Official"
case 14:return"AgeRating12-Official"
case 15:return"AgeRating14-Official"
case 16:return"AgeRating16-Official"
case 17:return"AgeRating18-Official"
default:return}}(e,V(t,"contentRatingsBySystem.appsBrazil.rank"))
let i
s&&(r.contentRatingResource=s),i=n?e.loc.string("BADGE_AGE_RATING_YEARS"):e.loc.string("BADGE_AGE_RATING")
const a=e.loc.string("BADGE_AGE_RATING_HEADING"),c=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_AGE_RATING_TITLE")
return new CU(T_,T_,r,pN,a,i,null,o,c,mk)}return null}function oi(e,t,n,r){let o=null
if($s(e,t)){const t=e.loc.string(bI),n=e.loc.string("AppStore.ProductPage.Badge.GameController.Recommended")
o=new CU(GC,GC,{},pN,t,n,null,null,n,mk)}return o&&(o.clickAction=Ai(e)?new IF(vD):new fF(new OU(MN,vD))),o}function si(e,t,n,r){let o=null
if(Fs(e,t)&&!$s(e,t)){const t=e.loc.string(bI),n=e.loc.string(zO)
o=new CU(GC,GC,{},pN,t,n,null,null,n,mk)}return o?(o.clickAction=Ai(e)?new IF(vD):new fF(new OU(MN,vD)),o):null}function ii(e,t,n,o){const i=he(t,Zk),a=e.loc.string("BADGE_DEVELOPER_HEADING"),c=U(t,Vk),u=new CU(lN,Zk,{},"standard",a,c,null,c,a,ID)
if(n&&"tv"!==e.client.deviceType){const t=x(i,_I)
r(t)?u.artwork=Ve(e,Rg,26,26):u.artwork=bs(e,t)}const l=Oa(0,i)
if(s(l)){const n=new VL(yN)
n.title=U(t,Vk),n.pageUrl=l,Qe(e,n,{targetType:XD,id:i.id,actionType:QD,pageInformation:o.pageInformation,locationTracker:o.locationTracker}),u.clickAction=n}return u}function ai(e,t,n,r){const o=Ae(e,t,Ab)
if(o){const r=l(o,Gv)
if(r&&r===Vv){let r,o
r="Games"===M(t,VP)[0]?e.loc.string("EDITORIAL_BADGE_GAMES"):e.loc.string("EDITORIAL_BADGE_APPS"),o=n?e.loc.string("EDITORS_CHOICE_RIBBON_HEADING"):e.loc.string("EDITORS_CHOICE_SINGLE_LINE")
const s=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_EDITORS_CHOICE"),i=new CU(Cb,Cb,{},pN,o,r,null,s,r)
return i.clickAction=Ai(e)?new IF(TD):new fF(new OU(MN,RN)),i}}return null}function ci(e,t,r,o){const s=Ee(e,t,"supportedLocales"),i=s.length
if(i<=0)return null
const a={tag:l(n(s,"0.tag")).split("-")[0].toUpperCase(),name:l(n(s,"0.name"))},c={paragraphText:a.tag}
let u
u=i>1?e.loc.string("BADGE_LANGUAGE_CAPTION").replace("{number_other_languages}",e.loc.formattedCount(i-1)):a.name
const f=e.loc.string("BADGE_LANGUAGE_HEADING")
return new CU(VR,BC,c,pN,f,u,null,null,u,mk)}function ui(e,t,n,r){const o=ve(e,t,jS),i=ve(e,t,WS)
if(!s(o)||!s(i))return null
if(o<=0||i<=0||o>i)return null
const a=e.loc.string(kg),c=fi(e,o,i,!1),u=fi(e,o,i,!0),l=e.loc.string(kg),f={paragraphText:li(e,o,i)}
return new CU(VR,ip,f,"standard",a,c,null,u,l,mk)}function li(e,t,n){return t===n?t<=32?e.loc.formattedCount(t):e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER_INDEFINITE_MIN_AND_MAX_LIMIT").replace(RI,e.loc.formattedCount(32)):n<=32?e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER_DEFINITE_LIMIT").replace(RI,e.loc.formattedCount(t)).replace(Dg,e.loc.formattedCount(n)):e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER_INDEFINITE_MAX_LIMIT").replace(RI,e.loc.formattedCount(t)).replace(Dg,e.loc.formattedCount(32))}function fi(e,t,n,r){return 1===t&&1===n?e.loc.string("BADGE_PLAYERS_CAPTION_SINGLE"):1===t||r?e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER"):e.loc.string("BADGE_PLAYERS_CAPTION_REQUIRED")}function di(e,t,n,r){const o=x(t,VC)
let s=null
const i=Ft(e,t)
if(!i&&o&&o.value&&o.ratingCount){const t=f(o,kI),n=Math.round(10*t)/10,r=e.loc.decimal(n,1),i=f(o,vg),a=e.loc.formattedCount(i),c=e.loc.stringWithCount("BADGE_RATING_CAPTION_SHORT_TEMPLATE",i).replace(A_,a),u=e.loc.stringWithCount("BADGE_RATING_CAPTION_LONG_TEMPLATE",i).replace(A_,a).replace("{rating}",r),l=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_STAR_RATING").replace("{starCount}",r)
s=new CU(gk,gk,{rating:n,ratingFormatted:r},pN,c,c,u,l,c)}else{if(n)return null
const t=e.loc.string(Ng)
if(i&&t!==Ng)s=new CU(gk,gk,{},pN,null,t,null,t)
else if(!i){const t=e.loc.string("BADGE_NOT_ENOUGH_RATINGS_CAPTION")
s=new CU(gk,gk,{},pN,null,t,null,t)}}return s?(s.clickAction=Ai(e)?new IF(TD):new fF(new OU(MN,RN)),s):null}function pi(e,t,n,r){return t?$f.context("badgesFromLookupResponse",()=>{let o,s=!1
return G(t,HD)?o=qV:n?(o=zV,-1===o.indexOf(ai)&&o.splice(1,0,ai),s=!0):o=YV,function(e,t,n,r,o,s){const i=[]
for(const o of t){const t=o(e,n,r,s)
t&&i.push(t)}if(o&&i.some(e=>e.key===vI)){const e=i.findIndex(e=>e.key===lb)
e>=0&&i.splice(e,1)}return i}(e,o,t,n,s,r)}):null}function hi(e,t,n,r,o){return $f.context("createProductReviewsList",()=>{const t=[]
if(i(o)&&t.push(o),s(r)&&r.length>0){const o=!1,s=!o,i=o?r.slice(0,1):r,a=!1,c=Mt(e,e.client.guid,n,i,s,a,s)
for(const e of c){const n=new qU
n.sourceType=Ag,n.review=e,t.push(n)}}return t})}function wi(e,t){return t?t.map(t=>gi(e,t,qg)):[]}function gi(e,t,n){return $f.context("titledParagraphFromVersionHistoryEntry",()=>{const r=l(t,"releaseNotes"),o=new nM(r,n),s=l(t,Yg),i=e.loc.string("VERSION_STRING_TEMPLATE")
o.primarySubtitle=n===qg?s:i.replace(zg,s)
const a=l(t,"releaseTimestamp")
if(a){const t=new Date(a)
o.secondarySubtitle=e.loc.relativeDate(t)}return o})}function mi(e,t,n,a,c,d=!1){return $f.context("createProductPageFromResponse",()=>{const p=O(t)
if(o(p))return null
p.type
const h=O(a[jH]),w=i(h)?c:null,g=i(h)?null:c,m=function(e,t,n){const r=O(t),o=r.type===TN
s(n)&&(n.iAdClickFields&&(t[OH]=JSON.stringify(n.iAdClickFields)),n.iAdLineItem&&(t[bH]=n.iAdLineItem))
const i=$n(e,o?zP:oR,r.id,t)
return new GV(i,{rootPosition:0,locationStack:[]})}(e,t,n),y=yi(e,p,m,n,null,h,g,w,d)
m.metricsPageInformation.baseFields[o_]=tc(0,p,y.lockup.icon),(mc(e,eN)||mc(e,UD))&&(m.metricsPageInformation.iAdInfo=new RH(e,eN))
const T=ha(e,p)
Mn(e,y,m.metricsPageInformation,t=>{const n=wa(0,p,e.appleSilicon.isSupportEnabled),r=Ea(e,p,e.appleSilicon.isSupportEnabled,e.appleSilicon.isRosettaAvailable),o=T&&(Ta(0,T,e.client.deviceType,n,r)||Pa(0,T,e.client.deviceType,n)),s=function(e,t,n,r){if(!Xi(e,t))return!1
if(xe(e,t,8838))return!1
const o=ma(0,n,wa(0,t,r)),s=ha(e,t)
return o.some(e=>ya(0,s,e))}(e,p,e.client.deviceType,e.appleSilicon.isSupportEnabled)
t[DI]=o&&s?"runnable":o?"purchasable":uD,i(g)&&kL.shared.addReferralContextToMetricsFieldsIfNecessary(t)})
const A=Qn(t,!0)
return function(e,t,n,a,c,d,p){const h=ha(e,n),w=n.type===TN,g=B(n,HD),m=!(1===h.length&&h[0]===$N),y=Ft(e,n),T=m&&!g&&!y,A=i(c)?c.clientIdentifierOverride:null,E=G(n,AR),P=t.lockup.offerDisplayProperties,I=!s(P)||P.isFree
let S
if(w){const t=pe(n,NN)
S=function(e,t,n){return t?$f.context("bundleChildrenShelf",()=>{const r=uN,o=new CM(r)
o.isHorizontal=!0
const s=t.data.length
if(!s)return null
o.title=e.loc.stringWithCount("APPS_IN_BUNDLE",s)
const i=Pu(e,t,n,1,r,null,10750)
if(i.unavailableIds.length){const e=new qH(i.unavailableIds,o.title,!1,uN,ID,null)
e.isBundleShelf=!0,o.url=Au(0,e,n)}return ic({pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:KD,id:`${n.getSequenceId()}`,idType:WD},o.title),o.items=i.items,cc(n.locationTracker),dc(n.locationTracker),o.rowsPerColumn=s<2?1:2,n.addImpressionsToShelf(e,o,ok),o}):null}(e,t,a)}S&&(t.shelfMapping[ok]=S)
const v=pe(n,TN),_=function(e,t,n){return t?$f.context("bundleParentsShelf",()=>{const r=t.data.length
if(!r)return null
const o=uN,s=new CM(o)
s.isHorizontal=!0,s.title=e.loc.string("INCLUDED_IN_BUNDLES").replace(A_,r.toString())
const i=Pu(e,t,n,1,o)
if(0===i.unavailableIds.length&&0===i.items.length)return null
if(s.items=i.items,i.unavailableIds.length){const e=new qH(i.unavailableIds,s.title,!1,o,ID,null)
e.isBundleShelf=!0,s.url=Au(0,e,n)}return s.rowsPerColumn=r<2?1:2,n.addImpressionsToShelf(e,s,"bundleParent"),s}):null}(e,v,a)
_&&(t.shelfMapping[BR]=_)
const C={productTitle:t.title,shouldShowRatingsAndReviews:T,isFirstPartyHideableApp:E,isBundle:w,isPreorder:g},O=function(e,t,n,r){return $f.context("createReviewsShelves",()=>{const n={}
if(o(t))return n
const s=function(e,t){if(Ai(e))return!0
if(o(t))return!1
let n
return n=$e(e).isSystemAppFromData(t),!n||e.bag.enableSystemAppReviews}(e,t),a=ha(e,t),c=pe(t,RN),d=b(c),p=x(t,VC)
p.ratingAverage=f(p,kI),p.adamId=t.id,p.isBundle=r.isBundle,p.supportUrl=Pe(e,t,dv)
const h=sa(e,t,{useCase:2}),w=1===a.length&&"tv"===a[0],g=Zt(e),m=u(p,SI),y=function(e,t,n,r){return $f.context("createProductRatings",()=>{const n=Ut(e,e.client.guid,t)
return n.ratingAverage>0&&n.ratingCounts||r||(n.status=e.loc.string(_g)),n})}(e,p,d.length,m),T=function(e,t,n,r,o,s){return $f.context(Vg,()=>{const r=function(e,t,n,r,o,s){return $f.context(Vg,()=>s?null:Gt(e,t.id,o,n,null))}(e,t,n,0,o,s)
if(r){const e=new GU
return e.actionType=pd,e.action=r,e}return null})}(e,t,r.productTitle,0,r.isBundle,w),A=function(e,t,n,r,o){return $f.context("createWriteAReview",()=>{if(r)return null
{const r=new VU
r.writeReviewAction=Ht(e,t,o),r.supportAction=function(e,t){const n=l(t,Cg)
if(n){const t=new WL(n,!1)
return t.title=e.loc.string(Og),t.artwork=Ve(e,"systemimage://questionmark.circle"),t}return null}(e,n)
const s=new GU
return s.actionType="writeAReview",s.action=r,s}})}(e,t,p,w,h),E=function(e,t){return $f.context("editorsChoiceItem",()=>{const n=l(Ae(e,t,Qb),pN)
if(n){const r=new UU(n),o=Ae(e,t,Ab)
if(o){const e=l(o,Gv)
r.showsBadge=e&&e===Vv}r.showsBadge||(r.title=e.loc.string(S_))
const s=new qU
return s.sourceType=Cb,s.review=r,s}return null})}(e,t),P=hi(e,0,p,d,E),I=hi(e,0,p,d,null),S=w||0===d.length?null:Kt(e,e.client.guid,p,d,c.next,r.productTitle,h,!1,!1)
if(r.shouldShowRatingsAndReviews){const t=new CM(TD)
t.title=g,t.items=[y],t.seeAllAction=S,n.ratingsShelf=t
const o=[]
if(i(T)&&s&&o.push(T),i(A)&&s&&o.push(A),i(o)){const e=new CM(xI)
e.items=o,n.allReviewActionsShelf=e}let a=null
i(T)&&s&&(a=new CM(xI),a.items=[T],n.tapToRateActionsShelf=a)
let c=null
i(A)&&s&&(c=new CM(xI),c.items=[A],n.writeAReviewActionsShelf=c)
let u=null
i(P)&&i(I)&&(u=new CM($S),u.items=P,u.isHorizontal=!0,n.allProductReviewsShelf=u)
let l=null
if(i(P)&&(l=new CM($S),l.items=I,l.isHorizontal=!0,n.userProductReviewsShelf=l),"tv"===e.client.deviceType){const e=new CM("productRatingsAndReviewsComponent")
e.title=g
const t=[]
i(T)&&T.action instanceof MU&&s&&t.push(T.action),i(y.status)?t.push(function(e){if(!e)return null
const t=new WU
return Bt(e,t),t}(y)):(t.push(function(e){if(!e)return null
const t=new HU
return Bt(e,t),t}(y)),t.push(function(e){if(!e)return null
const t=new jU
return Bt(e,t),t}(y))),e.items=t,n.ratingsAndReviewsComponentShelf=e}let f=null
i(E)&&(f=new CM($S),f.items=[E],r.shouldShowRatingsAndReviews||(f.title=g),n.editorsChoiceProductReviewsShelf=f)}return n})}(e,n,0,C)
i(O)&&(t.shelfMapping[RN]=O.ratingsAndReviewsComponentShelf,t.shelfMapping.purchasedRatingsAndReviews=O.purchasedRatingsAndReviewsComponentShelf,t.shelfMapping.notPurchasedRatingsAndReviews=O.notPurchasedRatingsAndReviewsComponentShelf,t.shelfMapping[TD]=O.ratingsShelf,t.shelfMapping[HC]=O.allReviewActionsShelf,t.shelfMapping[uR]=O.allProductReviewsShelf,t.shelfMapping[UR]=O.userProductReviewsShelf,t.shelfMapping[nk]=O.editorsChoiceProductReviewsShelf,t.shelfMapping[lR]=O.tapToRateActionsShelf,t.shelfMapping[fR]=O.writeAReviewActionsShelf)
const R=function(e,t,n,r){return $f.context(MR,()=>function(e,t,n,r,o,s){return $f.context("standardMostRecentVersionShelf",()=>{if(!n&&!r&&!o){const n=Ee(e,t,db)
if(n.length>1&&wi(e,n).length>0){const r=new CM(Wg)
r.title=e.loc.string(Hg)
const o=gi(e,n[0],jg)
if(r.items=[o],s.addImpressionsToShelf(e,r,db),r)return e.client.deviceType!==xN&&(r.seeAllAction=function(e,t,n,r){return $f.context("versionHistorySeeAllAction",()=>{const o=function(e,t,n){return $f.context("versionHistoryPageAction",()=>{const r=wi(e,t)
let o
if(r.length>0){const t=new CM(Wg)
t.items=r
const s=new DM([t])
s.title=e.loc.string("VERSION_HISTORY_PAGE_TITLE","Version History"),e.client.deviceType!==xN&&(s.presentationOptions=[eR])
const i=xn(e,"VersionHistory",n,"")
Mn(e,s,i)
const a=new VL(db)
a.title=e.loc.string("ACTION_VERSION_HISTORY_SEE_ALL"),a.pageData=s,o=a}return o})}(e,t,n)
return et(e,o,null,{pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker}),o})}(e,n,t.id,s)),r}}return null})}(e,t,r.isFirstPartyHideableApp,r.isBundle,r.isPreorder,n))}(e,n,a,{isFirstPartyHideableApp:E,isBundle:w,isPreorder:g})
R&&(t.shelfMapping[gD]=R),t.shelfMapping[sO]=function(e,t,n){return $f.context("textCardShelfFromResponse",()=>(o(t),null))}(0,n)
const k=Pe(e,n,mD)
if(e.bag.enablePrivacyNutritionLabels&&!wr(e,n.id)&&!gr(e,k)){const i=function(e,t,n,r){return $f.context("privacyShelf",()=>{if(o(t))return null
const s=new CM(oN)
s.title=e.loc.string(MC)
const i=Ss(e,t,!1,!1,n,r)
return s.items=[i],e.client.deviceType!==xN&&"tv"!==e.client.deviceType&&(s.seeAllAction=Os(e,t,tk,n,r,null)),s})}(e,n,a.metricsPageInformation,a.locationTracker),c=function(e,t,n){return $f.context(MR,()=>{if(o(t))return null
const r=x(t,TO)
if(o(r))return null
const s=new CM(g_),i=e.loc.string(MC)
ic({pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:PI,id:`${n.getSequenceId()}`,idType:WD},i)
const a=gs(e,r,t,iD,!0,n.metricsPageInformation,n.locationTracker)
return 0===a.length?null:(s.items=a,a.length<=2&&(s.presentationHints={isLowDensity:!0}),s.title=i,n.addImpressionsToShelf(e,s,"appPrivacy"),cc(n.locationTracker),dc(n.locationTracker),s.title=null,s)})}(e,n,a)
if(s(i)&&s(c)){t.shelfMapping[oN]=i,s(c)&&(t.shelfMapping[zD]=c)
const u=function(e,t,n,i){return $f.context(MR,()=>{if(o(t))return null
const a=Cs(e,t,!1,tk,n,i)
if((1===a.length&&a[0].identifier===yI||0===a.length)&&"tv"!==e.client.deviceType)return null
const c=new CM($D),u=function(e,t,n,o){return $f.context("privacyFooterFromData",()=>{const t=function(e,t,n,o){let s
const i=e.loc.string(TI),a={},c=vs(e,n,o)
r(c)?s=e.loc.string(AI):(s=e.loc.string(sg),s=s.replace(bO,i),r(c)?s=e.loc.string(AI):a[i]=c)
const u=new sL(s,tD)
return new aM(u,a)}(e,0,n,o),i=function(e,t,n,r){if("tv"!==e.client.deviceType)return[]
const o=[],i=vs(e,n,r)
s(i)&&o.push(i)
const a=_s(e,n,r)
return s(a)&&o.push(a),o}(e,0,n,o)
return new FV(t,i,[].length)})}(e,0,n,i)
return c.items=[u],c})}(e,n,a.metricsPageInformation,a.locationTracker)
s(u)&&(t.shelfMapping[$D]=u)}}const N=new BV,L=new BV,$=new BV,M=new BV,V=Fa(e,n),H=function(e,t,n,o,s,a,c,u){return $f.context(MR,()=>{let l
switch(e.client.deviceType){case xN:l=function(e,t,n,o){return $f.context(Kg,()=>{let s
const i=Zs(e,VV,t,n,!1,!1,o,null)
return i.length>0&&(s=new CM(sb),s.items=i,r(o)||o.addImpressionsToShelf(e,s,wN)),s})}(e,t,n,o)
break
case"tv":l=function(e,t,n,o,s,a,c){return $f.context("tvInformationShelf",()=>{let u
const l=Zs(e,HV,t,n,!1,!1,o,c),f=function(e,t,n){return $f.context("productCapabilitiesAsAnnotations",()=>{const r=[],o=Bs(e,t,n)
for(const e of o){const t=e.title,n=e.caption.styledText.rawText
if(i(t)&&i(n)){const e=new Fx(n),o=new Lx(t,[e])
r.push(o)}}return r})}(e,t,a).concat(Zs(e,jV,t,n,!1,!1,o,c)),d=Zs(e,WV,t,n,!1,!0,o,c),p=[]
if(l.length>0){const t=new Nx(e.loc.string(FI),l,s)
p.push(t)}if(f.length>0){const t=new Nx(e.loc.string($I),f,s)
p.push(t)}if(d.length>0){const t=new Nx(e.loc.string("PRODUCT_SECTION_TOP_IN_APP_PURCHASES"),d,!0)
p.push(t)}return p.length>0&&(Ai(e)?(u=new CM("annotationGroup"),u.items=p,u.background={type:xk,color:WH},r(o)||o.addImpressionsToShelf(e,u,wN)):(u=new CM("informationContainer"),u.items=[new $x(p)],r(o)||o.addImpressionsToShelf(e,u,wN))),u})}(e,t,n,o,u,c,s)
break
default:l=function(e,t,n,o,s,i){return $f.context(Kg,()=>{let a
const c=Zs(e,VV,t,n,s,!1,o,i)
return c.length>0&&(a=new CM(sb),a.title=e.loc.string(FI),a.items=c,r(o)||o.addImpressionsToShelf(e,a,wN)),a})}(e,t,n,o,a,s)}return l})}(e,n,E,a,(n,r)=>{if(n===Ls&&N.setShelfId(wN,r),n===Ds&&s(t.banner)){s(t.banner.fullProductAction)&&(t.banner.action=t.banner.fullProductAction)
const n=t.banner.action
s(n)&&(Ai(e)?n instanceof IF&&i(n.shelfId)&&n.shelfId===wN&&n.indexId===cR&&(n.index=r):n instanceof fF&&i(n.section.shelfId)&&n.section.shelfId===wN&&n.indexId===cR&&(n.index=r))}n===Us&&L.setShelfId(wN,r),n===Js&&$.setShelfId(wN,r),n===ks&&M.setShelfId(wN,r)},V,I,!1)
H&&(t.shelfMapping[wN]=H)
const j=function(e,t,n,r){if(!pn(e))return null
const s=we(t,PN)
if(o(s))return null
const i={pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:IR},a=e.loc.string("PRODUCT_SECTION_APP_EVENTS"),c=yn(e,s,t,!0,!1,i,!1,!1,!1,!1)
er(c.nextAppEventPromotionStartDate,r)
const u=c.appEvents
if(0===u.length)return null
const l=ir(u,a)
return ic({...i,targetType:IR,id:`${n.getSequenceId()}`,idType:WD},a),n.addImpressionsToShelf(e,l,yE),cc(i.locationTracker),dc(i.locationTracker),l}(e,n,a,d)
if(s(j)&&(t.shelfMapping[aN]=j),V){const r=function(e,t,n){if(o(t))return null
const r=l(Ae(e,t,Qb),pN)
if(r){const t=e.loc.string("APP_STORE_EDITORS_ATTRIBUTION"),o=new gM(r,t),s=new CM(hD)
return s.items=[o],n.addImpressionsToShelf(e,s,hD),s.background={type:xk,color:F(P_)},s}return null}(e,n,a)
r&&(t.shelfMapping[hD]=r)}t.shelfMapping[GR]=ei(e,n,a,!1,0,V),t.shelfMapping[Dk]=ei(e,n,a,!0,0,V),t.shelfMapping[iO]=function(e,t,n){return $f.context(MR,()=>{if("tv"!==e.client.deviceType)return null
if(o(t))return null
const r=new CM(VR)
r.isHorizontal=!1
const s=function(e,t){return t?$f.context("externalProductLinksAsParagraphsFromData",()=>{const n=[],r=Pe(e,t,pv)
if(r){const t=e.loc.string("DEVELOPER_WEBSITE_WITH_URL").replace("{URL}",r),o=new iL(t)
o.alignment=BD,n.push(o)}return n}):null}(e,t)
return s&&s.length>0&&(r.items=s),Ai(e)&&(r.background={type:xk,color:WH}),n.addImpressionsToShelf(e,r,FO),r})}(e,n,a)
const W=function(e,t,n,r){return $f.context("capabilitiesShelf",()=>{if(o(t))return null
let s
const i=Bs(e,t,n)
return i.length>0&&(s=new CM("productCapability"),s.title=e.loc.string($I),s.items=i,r.addImpressionsToShelf(e,s,"supports")),s})}(e,n,I,a)
W&&(t.shelfMapping[vD]=W)
const q=pe(n,cC),Y=function(e,t,n){return $f.context("smallStoryShelf",()=>{if(!t||!t.data.length)return null
const r={pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:KD,id:`${n.getSequenceId()}`,idType:WD},o=e.loc.string(Mg)
ic(r,o)
const s=[],i={metricsLocationTracker:r.locationTracker,metricsPageInformation:r.pageInformation,filterOutMediaCardKinds:new Set([eb])},a=Kc(e,t.data,Mk,o,null,i,function(e){return s.push(e.id),!1})
if(Array.isArray(a.items)&&(a.items=a.items.filter(e=>!(e instanceof uU)||Yc(0,e.media.kind,Mk))),a.isHorizontal=!0,s.length){const e=new qH(s,a.title,!1,Mk)
a.url=Au(0,e,n)}return cc(n.locationTracker),n.addImpressionsToShelf(e,a,wD),dc(n.locationTracker),a})}(e,q,a)
Y&&(t.shelfMapping[wD]=Y)
const z={isPreorder:g},J=new BV,K=function(e,t,n,r){return $f.context("friendsPlayingShelf",()=>{if(o(t))return null
const s=t.id
if(o(s))return null
if(!Se(e,t,Tb))return null
if(r.isPreorder)return null
const i=e.loc.string("PRODUCT_SECTION_FRIENDS_PLAYING_TITLE","Playing This Game")
ic({pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:KD,id:`${n.getSequenceId()}`,idType:WD},i)
const a=new CM(Ug)
a.eyebrow=e.loc.uppercased(e.loc.string(TC)),a.eyebrowArtwork=Ve(e,DO,16,16),a.title=i,a.isHidden=!0,a.isHorizontal=!0,a.items=[],a.mergeWhenFetched=!0
const c=new qH([],a.title,!1,null,null,null)
a.url=`${RF}:/${WF}/${LF}/?${L$}=true&${f$}=${s}&${tx}=${Eu(c,n,n.metricsPageInformation)}`,a.batchGroup=lk,n.addImpressionsToShelf(e,a,rN),cc(n.locationTracker),dc(n.locationTracker)
const u=new VL(yN)
return et(e,u,null,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker}),a})}(e,n,a,z)
K&&(t.shelfMapping[rN]=K,J.setShelfId(rN))
const Z=function(e,t,n,r){return $f.context("achievementsShelf",()=>{if(o(t))return null
if(r.isPreorder)return null
if(!Se(e,t,Tb))return null
const s=_e(e,t),i=X(t,s,mD)
if(o(i))return null
const a=e.loc.string("PRODUCT_SECTION_ACHIEVEMENTS",$g),c=new CM(xg)
c.eyebrow=e.loc.uppercased(e.loc.string(TC)),c.eyebrowArtwork=Ve(e,DO,16,16),c.title=a,c.isHorizontal=!0,c.items=[],c.mergeWhenFetched=!0
const u=new qH([],c.title,!1,null,null,null)
return u.sourceLocationTracker=n.locationTracker,u.destinationPageInformation=n.metricsPageInformation,c.url=`${RF}:/${WF}/${LF}/?${F$}=true&${T$}=${i}&${tx}=${Eu(u,n,n.metricsPageInformation)}`,c.batchGroup=lk,dc(n.locationTracker),c})}(e,n,a,{isPreorder:g})
Z&&(t.shelfMapping[YD]=Z)
const Q=function(e,t,n){return $f.context("moreByDeveloperShelf",()=>{if(o(t))return null
const r=Oa(0,he(t,Zk)),s=U(t,Vk),i=pe(t,aC)
if(!i||0===i.data.length)return null
const a=e.loc.string("MORE_BY_DEVELOPER_TEMPLATE").replace("{developer}",s)
let c
switch(ic({pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:KD,id:`${n.getSequenceId()}`,idType:WD},a),e.client.deviceType){case $N:case"tv":c=fD
break
default:c=uN}const u=new CM(c)
u.title=a
const l=Pu(e,i,n,ea(0,c),c,null)
if(!l)return null
if(u.items=l.items,l.unavailableIds&&l.unavailableIds.length){const e=new qH(l.unavailableIds,u.title,!1,c,null)
u.url=Au(0,e,n)}{const t=new VL(yN)
t.pageUrl=r,t.title=e.loc.string(Sk),et(e,t,t.pageUrl,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker}),u.seeAllAction=t}return u.isHorizontal=!0,i.data.length<2?u.rowsPerColumn=1:u.rowsPerColumn=2,n.addImpressionsToShelf(e,u,Zk),cc(n.locationTracker),dc(n.locationTracker),u})}(e,n,a)
Q&&!p&&(t.shelfMapping[_D]=Q)
const ee=function(e,t,n){return $f.context("similarItemsShelf",()=>{var r
if(o(t))return null
const s=pe(t,Wb)
if(o(s))return null
const a=Fa(e,t),c=a?e.loc.string("AppStore.Arcade.ProductPage.MoreFromAppleArcade"):e.loc.string("SIMILAR_ITEMS_TITLE"),u=GD,l=qO
let f,d
switch(ic({pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:u,id:GV.similarItemsShelfId,idType:l},c),e.client.deviceType){case"tv":f=fD,d=!1
break
case $N:f=fD,d=!0
break
default:f=uN,d=!0}const p=new CM(f)
p.title=c
const h=D(s),w=Pu(e,s,n,ea(0,f),f,null,null,h)
if(!w)return null
p.items=w.items
const g=mc(e,eN),m=xn(e,"SimilarItems",t.id,""),y=s.data.map(e=>e.id),T=new qH(y,p.title,d,f,null,null),A=function(e,t,n,r,o){const s=`${RF}:/${WF}/${LF}/`+Eu(n,r,o),i=new Ox(s)
return i.param(px,Sx),i.param(f$,t),i.build()}(0,t.id,T,n,m)
if(p.refreshUrl=A,i(w.unavailableIds)||g){const e=new qH(null!==(r=w.unavailableIds)&&void 0!==r?r:[],p.title,d,f,null,null,p.refreshUrl,h)
if(p.url=Au(0,e,n,m),g){const e=new Ox(p.url)
e.param(fx,SD),e.param(dx,eN),e.param(f$,t.id),p.url=e.build()}}if(p.isHorizontal=!0,s.data.length<2)p.rowsPerColumn=1
else if(a)p.rowsPerColumn=2
else{const t=function(e){return 1===Bf.Qo(e.cookieProvider,yU)?3:2}(e)
p.rowsPerColumn=t}return n.addImpressionsFieldsToSimilarItemsShelf(e,p,u,l),cc(n.locationTracker),dc(n.locationTracker),p})}(e,n,a)
if(ee&&!p&&(t.shelfMapping[GD]=ee),g&&!e.bag.arePreordersCancellable){const r=function(e,t,n){return $f.context("preorderShelf",()=>{if(o(t))return null
const r=new CM(lD),s=e.loc.string("BADGE_PREORDER_TERMS"),i=new uM(s)
return r.items=[i],n.addImpressionsToShelf(e,r,Ik),r})}(e,n,a)
r&&(t.shelfMapping[lD]=r)}else{const r=Qs(e,n,a,{isForSubscriptions:!0,options:c})
r&&(t.shelfMapping[bk]=r)
const o=Qs(e,n,a,{isForSubscriptions:!1,options:c})
o&&(t.shelfMapping[Ok]=o)}t.title
const te=function(e,t,n,r){return $f.context("createActionLinks",()=>(o(t),null))}(0,n)
te&&(t.shelfMapping[W_]=te)
const ne=function(e,t,n,r){return $f.context("productMediaShelves",()=>{if(o(t))return null
const s=(e.client.deviceType,null),a=(e.client.deviceType,null),c=re(e,t),u=fa(e,t,11,s,c,n),l=ca(e,t,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}},a)
let f=null
if(l)for(const e of u)if(e.mediaPlatform.isEqualTo(l.mediaPlatform)){f=e
break}let d=null
if(f){const e=f.mediaPlatform.appPlatform
if(e===CN||e===OD)for(const e of f.items){const t=e.screenshot
if(d=t.width/t.height,d<1)break}}const p=[],h=[]
if(f&&l&&l.videos)for(const n of l.videos){const o=new Gx
o.video=n
const s=n.preview.width/n.preview.height,i=null===d||Math.abs(s-d)<.01,a=f.mediaPlatform.isEqualTo(l.mediaPlatform)
i&&a?p.push(o):h.push(n)
const c={pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker,id:t.id,isAdvert:!!r.metricsPageInformation.iAdInfo&&r.metricsPageInformation.iAdInfo.iAdIsPresent}
tn(e,n,c)}f&&(f.items=p.concat(f.items))
const w=[],g={}
for(let t=0;t<u.length;t++){const n=u[t],o=`product_media_${n.mediaPlatform.appPlatform}_${n.mediaPlatform.supplementaryAppPlatforms.join("_")}`
w.push(new fB(MN,o))
const s=new CM(Gg,null,n.items)
s.isHorizontal=!0
let a=!1,c=rn(0,n.items[0])
for(const e of n.items)if(i(e.screenshot)&&e.screenshot.isPortrait()||i(e.video)&&e.video.preview.isPortrait()){c=rn(0,e),a=!0
break}s.contentsMetadata={type:"productMedia",platform:n.mediaPlatform,allPlatforms:n.allPlatforms,hasPortraitMedia:a,expandProductMediaAction:null,aspectRatio:c},r.addImpressionsToShelf(e,s,bN),0===t&&"tv"!==e.client.deviceType&&(s.title=e.loc.string(Tg)),g[o]=s}return h.length>0&&(g[xD]=function(e,t,n){return $f.context("videoShelf",()=>{if(!t||0===t.length)return null
let r
return Ai(e)?(r=new CM(Gg),r.title=e.loc.string(Jg),r.items=t.map(e=>{const t=new Gx
return t.video=e,t})):(r=new CM(v_),r.title=e.loc.string(Jg),r.items=t.map(e=>new pM(e,!0,tD,null,null,!0))),r.isHorizontal=!0,n.addImpressionsToShelf(e,r,xD),r})}(e,h,r)),{sectionMappings:w,shelfMapping:g}})}(e,n,A,a)
t.shelfMapping={...t.shelfMapping,...ne.shelfMapping}
{const e=V?Ob:bb,n=ws(0,e)
t.shelfMapping[e]=n}!function(e,t,n){if(t&&t.spotlightSection){const e=t.spotlightInAppProductIdentifier
if(e&&t.spotlightSection){const r=n.shelfMapping[t.spotlightSection.shelfId]
if(!r)return
if(r.presentationHints={isInProductPageSpotlight:!0},Iu(0,e,r.items),r.url){const t=new Ox(r.url)
t&&(r.url=t.param(A$,e).build())}}}}(0,c,t)
const oe={},se=BC,ie=h_,ae=lb,ce=rN
oe[T_]=N,oe[se]=L,oe[ie]=$,oe[ae]=M,oe[ce]=J,t.badges&&Rs(e,t.badges,oe,a),null!=t.shelfMapping[XD]&&Rs(e,Ii(e,t.shelfMapping[XD]),oe,a),Ti(e,t,ne.sectionMappings,V,c)}(e,y,p,m,n,A,d),y.pageRefreshPolicy=tr(e,A),y.isIncomplete=!1,y.alwaysAllowReviews=$t(e,p),y})}function yi(e,t,n,a,c,u,f,d,p=!1){return $f.context("createProductPageSidePack",()=>{let p
s(a)&&(p=a.clientIdentifierOverride)
const h=t.id,w=U(t,FN),g=G(t,AR),m=Ft(e,t),y=Fa(e,t),T={pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,id:h,isAdvert:!!n.metricsPageInformation.iAdInfo&&n.metricsPageInformation.iAdInfo.iAdIsPresent},A=new zU,E=new Yx,P=B(t,HD)
P&&s(n)&&s(n.metricsPageInformation)&&(n.metricsPageInformation.offerType=Ik,n.metricsPageInformation.offerReleaseDate=mt(0,t)),E.adamId=h,E.bundleId=l(t,mD),A.uber=function(e,t,n){const r=Fa(e,t),i=function(e,t){return t&&!0}(0,r)?NI:Yp,a=new QB(i)
if(a.artwork=va(e,t,{supportsArcade:r}),a.compactArtwork=va(e,t,{supportsArcade:r,prefersCompactVariant:!0}),a.video=_a(e,t,20),s(a.video)&&(a.video.playbackId=function(e){return`ProductPage.${e.id}.productUberVideoPlaybackId`}(t)),a.iconArtwork=sa(e,t,{useCase:10,withJoeColorPlaceholder:!0},n),r&&o(a.video)&&o(a.artwork)){const r=fa(e,t,11,(e.client.deviceType,null),re(e,t),n)
if(r.length>0&&r[0].items.length>0){const e=r[0].items[0]
a.video=e.video,a.artwork=e.screenshot}}return o(a.compactArtwork)&&(a.compactArtwork=a.artwork),a.isValidUber(!1)?a:null}(e,t,p)
const I=A.uber&&A.uber.style===NI
c||(E.icon=sa(e,t,{useCase:10},p)),A.title=w,A.isIncomplete=!0,E.title=w,E.subtitle=ki(e,t),E.developerTagline=Pe(e,t,Gb),A.regularPriceFormatted=U(t,"regularPriceFormatted"),A.logoArtwork=function(e,t){let n=null,r=null
if("tv"!==e.client.deviceType)return null
n="editorialArtwork.contentLogoTrimmed",r="bb"
const o=Ae(e,t,"editorialArtwork.contentLogoTrimmed")
return s(o)&&s("bb")?ta(e,o,{cropCode:"bb",useCase:0,withJoeColorPlaceholder:!0}):null}(e,t),m||(E.rating=V(t,Rh)),E.children=bi(e,t,{metricsOptions:T,artworkUseCase:1})
const S=function(e,t,n,r,o,a,c){const u=pt(e,t),l=Pe(e,t,mD),f=B(t,HD),d=wt(e,u,t,f,!1,tc(0,t,n),o,iD,c)
let p
if(i(d)){s(a)&&(d.lineItem=a.iAdLineItem)
const n=i(a)?a.clientIdentifierOverride:null
p=At(e,d,t,f,o,iD,!1,n),s(a)&&i(a.externalDeepLinkUrl)&&i(p)&&(p=ot(e,p,d.adamId,l,a.externalDeepLinkUrl,!1,o))}return{buttonAction:p,offerAction:d}}(e,t,E.icon,0,T,a,f)
if(E.buttonAction=S.buttonAction,P){let n
A.theme=H_
let r=null
if(y)n="",r=e.loc.uppercased(ja(e,t,e.loc.string(BP)))
else if(n=e.bag.arePreordersCancellable?e.loc.string("COMING_SOON_EXPANDED_OFFER_TITLE"):e.loc.string("PREORDER_EXPANDED_OFFER_TITLE"),s(S.offerAction.expectedReleaseDate)){const t="MMM d, yyyy",n=e.loc.formatDate(t,S.offerAction.expectedReleaseDate)
r=e.loc.string("PREORDER_EXPANDED_OFFER_SUBTITLE").replace("{releaseDate}",n)}A.expandedOfferDetails=new bU(n,r)}let v,_
I&&y&&(A.theme=tN),I&&y?(v=tN,_=rO):(v=pk,_=iD)
const C=y?xO:gN
let O
E.offerDisplayProperties=_t(e,S.offerAction,C,t,P,v,_,null,null,iD),A.titleOfferDisplayProperties=_t(e,S.offerAction,C,t,P,"colored","productPage",null,null,iD)
const b=he(t,Zk),R=Oa(0,b)
s(R)&&(O=new VL(yN),O.title=U(t,Vk),O.pageUrl=R,Qe(e,O,{targetType:vN,id:b.id,actionType:QD,pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker})),A.developerAction=O,A.shareAction=Rt(e,t,n.metricsPageInformation,n.locationTracker),E.tertiaryTitle=Di(e,t),E.tertiaryTitleAction=Ni(e,t)
const k={appPlatforms:ha(e,t),clientIdentifierOverride:p,offerButtonShouldBeDisabled:!1,productTitle:A.title,metricsPageInformation:n.metricsPageInformation,metricsLocationTracker:n.locationTracker}
A.banner=function(e,t,n){let r=null,o=null,s=null,a=null,c=null,u=!1
const l=Se(e,t,Td),f=Se(e,t,Ad)
if((l||f)&&(r=e.loc.string("APP_UPDATE_REQUIRED_IOS"),n.offerButtonShouldBeDisabled=!0),null===r&&xe(e,t,1024)&&(r=e.loc.string("OFFER_WATCH_ONLY_BANNER"),n.offerButtonShouldBeDisabled=!0),null===r&&!Xi(e,t)){if(r=e.loc.string(hg),Ai(e)){const t=new IF(wN)
t.title=e.loc.string(jO),t.indexId=cR,s=t}else{const t=new OU(MN,wN),n=new fF(t)
n.title=e.loc.string(jO),n.indexId=cR,s=n}r=e.loc.string(m_).replace(y_,s.title),n.offerButtonShouldBeDisabled=!0}if(null===r&&xe(e,t,36)&&(r=e.loc.string(wg),n.offerButtonShouldBeDisabled=!0),xe(e,t,512)){const n=ga(e,t,e.appleSilicon.isSupportEnabled)
switch(e.client.deviceType){case $N:r=e.loc.string("UNSUPPORTED_MACOS_VERSION").replace(aR,n)
break
case CN:case EN:r=e.loc.string("UNSUPPORTED_IOS_VERSION").replace(aR,n)
break
case"tv":r=e.loc.string("UNSUPPORTED_TVOS_VERSION").replace(aR,n)
break
case xN:const o=Pe(e,t,Q_)
r=e.loc.string("UNSUPPORTED_WATCHOS_VERSION").replace(aR,o)
break
default:r=e.loc.string(wg)}}if(xe(e,t,128))if(n.offerButtonShouldBeDisabled=!0,r=e.loc.string(hg),Ai(e)){const t=new IF(wN)
t.title=e.loc.string(jO),t.indexId=cR,s=t,r=e.loc.string(m_).replace(y_,t.title)}else{const t=new OU(MN,wN),n=new fF(t)
n.title=e.loc.string(jO),n.indexId=cR,s=n,r=e.loc.string(m_).replace(y_,n.title)}if(xe(e,t,8192)){if(Ai(e)){const t=new IF(wN)
t.title=e.loc.string(jO),t.indexId=cR,s=t}else{const t=new OU(MN,wN),n=new fF(t)
n.title=e.loc.string(jO),n.indexId=cR,s=n}r=e.loc.string(m_).replace(y_,s.title)}Ua(e,t)&&(r=G(t,HD)?e.loc.string("AppStore.ProductPage.WatchOS.PreOrderRequiresiPhone"):e.loc.string("UNSUPPORTED_COMPANION_CONFIGURATION","Requires iPhone"),n.offerButtonShouldBeDisabled=!0)
const d=Pe(e,t,Q_)
null===r&&n.clientIdentifierOverride===yL&&Va(e,d)&&(r=e.loc.string("AppStore.ProductPage.Banner.PairedWatchOSVersionBelowMinimum").replace(aR,d))
const p=lt(e,t),h=ft(e,"product-page-banner")
if((null===r||!n.offerButtonShouldBeDisabled)&&p&&h){const t=e.loc.string("AppStore.ProductPage.ExternalPurchasesBanner.LearnMore")
o=dt(e,t,n.metricsPageInformation,n.metricsLocationTracker),r=function(e,t,n){return e.bag.externalPurchasesProductPageBannerUseAlternateCopy?t&&n?e.loc.string("AppStore.ProductPage.ExternalPurchasesBanner.WithLink_NLD").replace(bO,t):e.loc.string("AppStore.ProductPage.ExternalPurchasesBanner.NoLink_NLD"):t&&n?e.loc.string("AppStore.ProductPage.ExternalPurchasesBanner.WithLink").replace(bO,t):e.loc.string("AppStore.ProductPage.ExternalPurchasesBanner.NoLink")}(e,t,o),s=null,e.bag.externalPurchasesIncludeProductPageBannerIcon?(a=Ve(e,fg),c=F("systemRed")):(a=null,c=null),u=!0}return i(r)?new Ux(r,o,s,a,c,u):null}(e,t,k)
const D=E.offerDisplayProperties
k.offerButtonShouldBeDisabled&&i(D)&&(E.offerDisplayProperties=D.newOfferDisplayPropertiesChangingAppearance(!1,QO))
const N=!xe(e,t,512)
if(!g&&!k.offerButtonShouldBeDisabled&&N){const n=function(e,t){return $f.context("updateOfferDataFromData",()=>{const n=Ee(e,t,HO)
if(0===n.length)return null
for(const e of n)if(l(e,ck)===Bw)return e
return null})}(e,t)
A.updateBuyParams=l(n,ib),A.externalVersionIdentifier=ve(e,t,"externalVersionId")}if(y&&(E.editorialTagline=e.loc.string("APPLE_ARCADE")),A.lockup=E,A.appPlatforms=ha(e,t),s(u)){const n=zn(e,u,t,!1,!1,hN,tN,!0,!1,T,!0,!1,null,!1,!1)
if(s(n)&&n instanceof KB){const r=n
A.appEventDetailPageFlowAction=Xn(e,u,t,r,T,AD,!1,d)}}return function(e,t,n,s,a,c){if(t.shelfMapping[SN]=new CM("marker","productTopLockup"),"tv"!==e.client.deviceType){const a={developerAction:t.developerAction}
t.shelfMapping[mN]=function(e,t,n,s){return $f.context("descriptionShelf",()=>{if(o(t))return null
const a=new CM("productDescription"),c=function(e,t){return t?$f.context("productDescriptionLinksFromData",()=>{const n=[],r=Pe(e,t,pv)
if(r){const t=new WL(r,!1),o=e.loc.string("PRODUCT_DEVELOPER_WEBSITE")
n.push(new cM(o,t,Zk))}const o=Pe(e,t,dv)
if(o){const t=new WL(o,!1),r=e.loc.string("DEVELOPER_SUPPORT")
n.push(new cM(r,t,"support"))}return n}):null}(e,t),u=function(e,t,n=null){return $f.context("descriptionFromData",()=>{r(n)&&(n=re(e,t))
let o=function(e,t,n){return function(e,t,n,r,o){const s=W(r),a=oe(0,Ae(e,t,jE,void 0),n,s,q(s))
return i(a)?l(a):Pe(e,t,r)}(e,t,n,Pp)}(e,t,n)
o||(o="")
let s=Pe(e,t,ob)
s||(s="")
let a=""
o.length>0&&s.length>0&&(a="\n\n")
const c=o+a+s
if(c.length>0){const e=new iL(c)
return e.isCollapsed=!0,e}return null})}(e,t)
if(null===u)return null
const f=new jx(u,c,s.developerAction)
return a.items=[f],n.addImpressionsToShelf(e,a,mN),a})}(e,n,s,a)}{const r={useInlineUberStyle:t.uber&&t.uber.style===NI}
t.shelfMapping[XD]=function(e,t,n,r){if(Ai(e)){const r=new CM("productBadge"),o=pi(e,t,!0,{locationTracker:n.locationTracker,pageInformation:n.metricsPageInformation})
return r.items=o,r.isHorizontal=!0,n.addImpressionsToShelf(e,r,XD),r}{const o=new CM(XD),s=pi(e,t,!0,{locationTracker:n.locationTracker,pageInformation:n.metricsPageInformation}),i=!r.useInlineUberStyle,a=!1,c=r.useInlineUberStyle,u=new yM(s,i,a,c,"justified")
return o.items=[u],o.isHorizontal=!0,n.addImpressionsToShelf(e,o,XD),o}}(e,n,s,r)}Ti(e,t,[],Fa(e,n),a)}(e,A,t,n,a),A.uber&&(A.presentationOptions.push(cP),A.presentationOptions.push(zp)),A.alwaysAllowReviews=$t(e,t),A})}function Ti(e,t,n,r,o){const s=function(e,t,r){return e.map(e=>e.shelfId===bN&&r?n:e.shelfId===bN?n[0]?[n[0]]:[]:[e]).reduce((e,t)=>e.concat(t)).map(e=>e.createShelfIdList()).reduce((e,t)=>e.concat(t))},a=Qt(0,!0,e.host.platform,r,!1,!1,o),c=Qt(0,!1,e.host.platform,r,!1,!1,o),u=Qt(0,!0,e.host.platform,r,!0,!1,o),l=Qt(0,!1,e.host.platform,r,!0,!1,o),f=Qt(0,!1,e.host.platform,r,!1,!0,o),d=Qt(0,!1,e.host.platform,r,!0,!0,o)
t.shelfOrderings.purchasedOrdering=s(a,0,!1),t.shelfOrderings.purchasedOrdering_ExpandedMedia=s(a,0,!0),t.shelfOrderings.notPurchasedOrdering=s(c,0,!1),t.shelfOrderings.notPurchasedOrdering_ExpandedMedia=s(c,0,!0),t.shelfOrderings.purchasedOrdering_Compact=s(u,0,!1),t.shelfOrderings.purchasedOrdering_ExpandedMedia_Compact=s(u,0,!0),t.shelfOrderings.notPurchasedOrdering_Compact=s(l,0,!1),t.shelfOrderings.notPurchasedOrdering_ExpandedMedia_Compact=s(l,0,!0),t.shelfOrderings.downloadingOrdering=s(f,0,!1),t.shelfOrderings.downloadingOrdering_ExpandedMedia=s(f,0,!0),t.shelfOrderings.downloadingOrdering_Compact=s(d,0,!1),t.shelfOrderings.downloadingOrdering_ExpandedMedia_Compact=s(d,0,!0),t.defaultShelfOrdering=YU
for(const e of Object.keys(t.shelfMapping))i(t.shelfMapping[e])&&(t.shelfMapping[e].id=e)}function Ai(e){return e.featureFlags.isEnabled("shelves_2_0_product")}function Ei(e,t,n={},r={},o=null,s=!1,i=!1){const a=Fa(e,O(t)),c=mi(e,t,n,r,o,i)
return Ai(e)&&!s?c:on(e,c,a,n)}function Pi(e,t,n={},o=!1){if(!e.client.isSidepackingEnabled)return null
const s=Fa(e,t),i=function(e,t,n,o){return $f.context("createProductPageSidePackFromResponse",()=>{if(!e.client.isSidepackingEnabled)return null
const s=function(e,t,n){const r=U(t,DN),o=U(t,FN),s=U(t,Vk)
let i=null
n&&(i=n.iAdClickFields)
const a=xn(e,oR,t.id,`${s}_${o}`,i)
return a.pageUrl=r,new GV(a,{rootPosition:0,locationStack:[]})}(e,t,n),i=yi(e,t,s,n,o)
return function(e,t,n){r(n)||t.pageMetrics.addData(jn(e,n,null),[Mf.PageInvocationPoint.backButton])}(e,i,s.metricsPageInformation),i})}(e,t,n,o)
return Ai(e)?i:on(e,i,s,n)}function Ii(e,t){if(o(null==t?void 0:t.items))return[]
if(Ai(e))return t.items
{const e=t.items
return e.length>0?e[0].badges:[]}}function Si(e,t){if(!t)return null
const n=t.match(/P(\d+)([A-Z]+)/)
if(!n||3!==n.length)return null
let r=f(n[1]),o=n[2]
return r&&o?("D"===o&&r>0&&r%7==0&&(o="W",r/=7),new JV(r,o)):null}function vi(e,t){const n=c(t,MP)[0]
if(!n)return null
const o=l(n,Nw),s=l(t,Nw)
if(!o||!s)return null
const i=l(n,Lw),a=Si(0,o),u=Si(0,s),d=function(e,t,n,o){if(r(t)||r(n))return null
const s=KV[t.type],i=KV[n.type],a=ZV[o]
return s&&i&&a?`IN_APP_OFFER_PAGE_DESCRIPTION_${a}_${s}_POST_TRIAL_${i}`:null}(0,a,u,i)
if(!d)return null
const p=l(n,$C),h=l(t,$C),w=f(n,"numOfPeriods"),g=a.period*w
switch(i){case Fw:const t=e.loc.stringWithCounts(d,[g,u.period])
if(t)return t.replace(uI,h)
break
case $w:const n=e.loc.stringWithCounts(d,[g,u.period])
if(n)return n.replace(xw,p).replace(uI,h)
break
case Mw:const r=e.loc.stringWithCounts(d,[a.period,g,u.period])
if(r)return r.replace(xw,p).replace(uI,h)
break
default:return null}return null}function _i(e,t,n){return t===rD?n?ON:wR:n?xO:gN}function Ci(e,t,n,a){var c,u,l
if(o(t))return
if(!e.client.isPhone)return
let f=(null===(c=null==a?void 0:a.displayStyle)||void 0===c?void 0:c.metadataRibbon)||[]
const p=d(t,DR)
i(null===(u=null==p?void 0:p.displayStyle)||void 0===u?void 0:u.metadataRibbon)&&(f=null===(l=null==p?void 0:p.displayStyle)||void 0===l?void 0:l.metadataRibbon)
const h=function(e,t,n,i,a=XV){if(o(i))return[]
const c=[]
for(const u of i)if(!o(u))for(const o of u){const i=a[o]
if(r(i))continue
const u=i(e,t,n)
if(s(u)){c.push(u)
break}}return c}(e,t,n,f)
n.metadataRibbonItems=h,i(f)&&(n.impressionMetrics.fields.ribbons=h.map(e=>e.moduleType))}function Oi(e,t,n,r){t&&$f.context("copyDataIntoLockup",()=>{var o,a
const u=G(t,HD)
if(r.isContainedInPreorderExclusiveShelf&&!u)return null
const f=re(e,t)
n.productVariantID=se(f),r.metricsOptions.productVariantData=f,n.adamId=t.id
const d=Pe(e,t,mD)
n.bundleId=d,n.decorations=[]
let p=null
r&&r.clientIdentifierOverride&&(p=r.clientIdentifierOverride),n.icon=sa(e,t,{useCase:r.artworkUseCase},p,f),r&&r.titleObjectPath?n.title=Pe(e,t,r.titleObjectPath):n.title=U(t,FN)
const h=r.metricsOptions.isAdvert?e.bag.adsOverrideLanguage:null
n.overrideLocale=h
const w=Fa(e,t)
w&&!r.shouldHideArcadeHeader&&(n.heading=e.loc.stringForPreferredLocale(e,"LOCKUP_HEADING_ARCADE",h)),r.shouldShowFriendsPlayingShowcase&&n.decorations.push("showcaseFriendsPlaying")
const g=!w&&(null===(o=r.isMultilineTertiaryTitleAllowed)||void 0===o||o)
if(r.isSubtitleHidden||function(e,t,n){return $f.context("isBadgeMultilineFromData",()=>{if(!n)return!1
if(!wa(0,t,!1))return!1
if(Li(e,t))return!1
const r=ha(e,t)
return ya(0,r,EN)||ya(0,r,CN)})}(e,t,g)||(n.subtitle=ki(e,t)),n.tertiaryTitle=Di(e,t,g),n.tertiaryTitleAction=Ni(e,t),n.developerTagline=Pe(e,t,Gb),n.editorialTagline=$a(e,t,uk),n.editorialDescription=$a(e,t,pN),n.shortEditorialDescription=$a(e,t,aD),n.ageRating=U(t,Oh),n.productDescription=Pe(e,t,ob),!Ft(e,t)&&(V(t,bh)>0||!r||!r.hideZeroRatings)){n.rating=V(t,Rh)
const r=V(t,bh)
n.ratingCount=e.loc.formattedCountForPreferredLocale(e,r,h)}const m=Ke(e,t,r.metricsOptions),T=pt(e,t),A=null!==(a=null==r?void 0:r.includeBetaApps)&&void 0!==a&&a,E=tc(0,t,n.icon),P=y(m),I=wt(e,T,t,u,A,E,P,fN,null==r?void 0:r.referrerData),S=c(T,MP)
let v=At(e,I,t,u,P,fN,r.ignoreIconInSidepack,p,r.shouldNavigateToProductPage)
s(r)&&i(r.externalDeepLinkUrl)&&(v=ot(e,v,I.adamId,d,r.externalDeepLinkUrl,A,P),i(r.crossLinkSubtitle)&&(n.crossLinkTitle=e.loc.uppercased(U(t,FN)),n.crossLinkSubtitle=r.crossLinkSubtitle)),n.buttonAction=v
const _=bt(e,t)
if(_){const t=new hF,r=y(m)
r.actionType=lO,r.targetType=VD,Qe(e,t,r)
const o=new qx
o.shareAction=t,o.shareSheetData=_,n.contextMenuData=o}const C=Qi(0,t)
let O=!1
C&&(O=!(yt(0,pt(e,C))>0))
const b=_i(0,t.type,w)
n.offerDisplayProperties=r?_t(e,I,b,t,u,r.offerStyle,r.offerEnvironment,S[0],O,fN,r.shouldNavigateToProductPage,r.metricsOptions.isAdvert):_t(e,I,b,t,u,null,null,S[0],O,fN),r&&r.skipDefaultClickAction||(n.clickAction=Ki(e,t,m,{clientIdentifierOverride:p,ignoreIconInSidepack:r.ignoreIconInSidepack,productVariantData:f})),r&&r.ordinal&&(n.ordinal=r.ordinal)
const R=Ae(e,t,Ab)
if(R){const e=l(R,Gv),t=e&&e===Vv
n.isEditorsChoice=t}n.flowPreviewActionsConfiguration=kt(e,t,!1,p,n.clickAction,r.metricsOptions,m,r.externalDeepLinkUrl),n.children=bi(e,t,r),n.includeBetaApps=A,n.developerName=U(t,Vk)
const k=ln(e,t,n,E,r.metricsOptions,r.canDisplayArcadeOfferButton)
cn(0,n,k)})}function bi(e,t,n){const r=pe(t,NN)
return r?ji(e,r,{lockupOptions:n,filter:0}):null}function Ri(e,t,n,r,i){var a
if(!t)return
if(i.isNetworkConstrained)return
const c=null!==(a=i.metricsOptions.isAdvert)&&void 0!==a&&a
$f.context("copyMediaIntoMixedMediaLockup",()=>{n.screenshots=la(e,t,4,null,i.clientIdentifierOverride,null,c)
const a=n.screenshots[0]
n.trailers=[]
const u=aa(e,t,r,i.metricsOptions,n.adamId,c)
s(u)&&(o(a)||u.mediaPlatform.isEqualTo(a.mediaPlatform))&&n.trailers.push(u)})}function ki(e,t){return $f.context("subtitleFromData",()=>Pe(e,t,Gb)||Fi(e,t))}function Di(e,t,n=!1){return $f.context("badgeFromData",()=>{if(wa(0,t,!1)){let r=""
const o=ha(e,t)
if(ya(0,o,EN)?r="DESIGNED_FOR_PAD":ya(0,o,CN)&&(r="DESIGNED_FOR_PHONE"),i(r))return Li(e,t)||(r+="_NOT_VERIFIED",n&&(r+="_EXPANDED")),e.loc.string(r)}return null})}function Ni(e,t){return $f.context("badgeActionFromData",()=>{if(!wa(0,t,!1))return null
if(Li(e,t))return null
const n=ha(e,t)
if(!ya(0,n,EN)&&!ya(0,n,CN))return null
const r=new VL(FD)
return r.pageUrl=`https://apps.apple.com/story/id${e.bag.appleSiliconMacUnverifiedBadgeEditorialItemId}`,r})}function Li(e,t){if(!e.appleSilicon.isSupportEnabled)return!0
const n=Ie(e,t,kh,sD)
return!!s(n)&&n}function Fi(e,t){return $f.context("categoryFromData",()=>{const n=Pe(e,t,Dh)
if(i(n))return n
const r=we(t,Nh)
if(r.length>0){let e=r[0]
const t=6014..toString()
if(e.id===t)for(const n of r){const r=U(n,GP)
if(n.id!==t&&r===t){e=n
break}}return U(e,FN)}{const e=M(t,VP)
return e.length>0?e[0]:null}})}function $i(e,t,n){const r=(new JU).param(f$,n).param(gx,t).build()
return`${RF}:/${WF}/${xF}/?${r}`}function xi(e,t,n){return $f.context("lockupFromData",()=>{var r,i,a,c,u,l
if(!t)return $f.unexpectedNull(DD,RR),null
const f=Qo(0,t)
n.metricsOptions.isAdvert=f
let d=!1
if(s(n.metricsOptions.pageInformation)&&(d=Cc(e,null===(r=n.metricsOptions.pageInformation.iAdInfo)||void 0===r?void 0:r.placementType,function(e){var t
return{shelfIdentifier:null===(t=lc(e))||void 0===t?void 0:t.id,slot:uc(e)}}(n.metricsOptions.locationTracker))),n.metricsOptions.isAdEligible=d,(f||d)&&(null===(a=null===(i=n.metricsOptions.pageInformation)||void 0===i?void 0:i.iAdInfo)||void 0===a||a.apply(e,t),f&&(null===(u=null===(c=n.metricsOptions.pageInformation)||void 0===c?void 0:c.iAdInfo)||void 0===u||u.setTemplateType(Lh))),!H(t))return null
switch(t.type){case rD:return n.offerEnvironment=Fh,Mi(e,t,n)
case PN:const r=he(t,gN)
if(o(r))return null
const i=new Yx
return Oi(e,r,i,n),i
default:const a=new Yx
return Oi(e,t,a,n),(f||d)&&s(null===(l=n.metricsOptions.pageInformation)||void 0===l?void 0:l.iAdInfo)&&es(e,t,a,n.metricsOptions),a}})}function Mi(e,t,n){return $f.context("inAppPurchaseLockupFromData",()=>{const r=new Qx
return function(e,t,n,r){t&&$f.context("copyDataIntoInAppPurchaseLockup",()=>{Oi(e,t,n,r)
const o=Qi(0,t)
if(!o)return
n.productIdentifier=U(t,oC),n.parent=xi(e,o,r),n.description=U(t,ob),n.isVisibleByDefault=G(t,"isMerchandisedVisibleByDefault"),n.isSubscription=G(t,Hv)
const s=pt(e,t),i=c(s,MP)
n.offerDisplayProperties.hasDiscount=i.length>0,n.offerDisplayProperties.subscriptionFamilyId=U(t,"subscriptionFamilyId")
const a=new VL(jv)
a.presentationContext=mR
const u=$i(0,n.adamId,o.id)
a.pageUrl=u
const l=new NM
l.parentLockup=y(n.parent),l.lockup=y(n),l.preInstallOfferDescription=vi(e,s),a.pageData=l
const f=U(t,oC),d=Pe(e,o,mD),p=U(o,"firstVersionSupportingInAppPurchaseApi")
if(p){const t=new ZL(f,o.id,d,a,p)
n.parent&&(t.appTitle=n.parent.title),t.productTitle=n.title
const s={...r.metricsOptions,id:n.adamId,idType:PR,actionDetails:{parentAdamId:o.id}}
Qe(e,t,s),n.buttonAction=t}else{const t=new aF(fN)
t.title=e.loc.string("SEED_IN_APP_UNSUPPORTED_MESSAGE_OPTION_1"),t.message="",t.isCancelable=!0,n.buttonAction=t}const h=ln(e,t,n,nb,r.metricsOptions,r.canDisplayArcadeOfferButton)
if(!r||!r.skipDefaultClickAction){const r=Yi(e,t,h)
n.clickAction=r,n.productAction=r}!function(e,t,n){t&&(t.impressionMetrics||cn(0,t,n),t.parent&&t.parent.adamId&&(t.impressionMetrics.fields.parentAdamId=Ka(t.parent.adamId)))}(0,n,h)},UP)}(e,t,r,n),r})}function Ui(e,t,n){return $f.context("screenshotsLockupFromData",()=>{const r=new zx
return function(e,t,n,r){t&&$f.context("copyDataIntoScreenshotsLockup",()=>{Oi(e,t,n,r),n.screenshots=la(e,t,4,null,r.clientIdentifierOverride)})}(e,t,r,n),r})}function Bi(e,t,n,r,o=null){return $f.context("mixedMediaLockupFromData",()=>{const s=new Jx
return Oi(e,t,s,n),Ci(e,t,s,o),Ri(e,t,s,r,n),Gi(e,t,s,o),s})}function Gi(e,t,n,r){var o
if(!e.client.isPhone)return
const i=l(t.meta,"displayStyle.screenshots")
s(i)?n.screenshotsDisplayStyle=i:s(null===(o=null==r?void 0:r.displayStyle)||void 0===o?void 0:o.screenshots)&&(n.screenshotsDisplayStyle=r.displayStyle.screenshots)}function Vi(e,t,n,r,o,s=!0){return $f.context("mixedMediaAdLockupFromData",()=>{const i=new Jx
return G(t,"iad.format.images")?(Ri(e,t,i,r,n),function(e,t,n,r){if(!function(e,t){return!function(e,t,n){return le(re(e,t),n)}(e,t,Bv)}(e,t))return
const o=M(t,"iad.assetOverride")
if(o.length){const e=function(e,t,n){const r=new Set(n),o=[],s=[],i=function(e,t){if(0===r.size)return!1
for(const o of n)if(o===t||-1!==e.indexOf(o))return r.delete(o),!0
return!1}
if(n.length&&(t.screenshots.length||t.trailers.length)){if(t.trailers.length)for(const e of t.trailers[0].videos)i(e.videoUrl,e.preview.checksum)&&o.push(e)
if(t.screenshots.length)for(const e of t.screenshots[0].artwork)i(e.template,e.checksum)&&s.push(e)}return!(0!==r.size||!o.length&&!s.length||(t.trailers.length&&(t.trailers[0].videos=o),t.screenshots.length&&(t.screenshots[0]=new KN(s,t.screenshots[0].mediaPlatform)),0))}(0,n,o)
r.pageInformation.iAdInfo&&r.pageInformation.iAdInfo.iAdIsPresent&&r.pageInformation.iAdInfo.setSpecifiedCreativeUsed(e)}}(e,t,i,n.metricsOptions),Oi(e,t,i,n),Gi(e,t,i,o)):(Oi(e,t,i,n),i.screenshots=[]),es(e,t,i,n.metricsOptions,s),Ci(e,t,i,o),i})}function Hi(e,t,n,r,o,s){return $f.context("arcadeLockupFromData",()=>{const r=t.marketingItemData,a=new eM
a.title=e.loc.string("ARCADE_LOCKUP_TITLE","Apple Arcade")
const c=t.marketingItemData
n={...n,mercuryMetricsData:nc(0,c)}
let u,l=bo(0,r)
i(l)&&(l=l.replace(/\n/g," "),a.subtitle=l,a.nonsubscribedSubtitle=l,a.subscribedSubtitle=l)
const f=Oo(0,r)
u=ko(e,t.marketingItemData,0,n),u.title=f,a.unsubscribedButtonAction=u
const d=ao(0,n.pageInformation,n.locationTracker)
d.title=e.loc.string(Eb,Pb),a.subscribedButtonAction=d
const p=fn(e,t.marketingItemData,a.title,n)
p.displaysArcadeUpsell=!0,cn(0,a,p)
const h=new qN(ON,e.bag.arcadeAppAdamId,o,null,s,null,null,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId)
return h.titles[Wv]=e.loc.string(Eb,Pb),a.offerDisplayProperties=h,a})}function ji(e,t,n){return r(t)?[]:Wi(e,t.data,n)}function Wi(e,t,n){return $f.context("lockupsFromData",()=>{if(!t)return[]
const o=[]
let i=!1
for(let a=0;a<t.length&&!i;a++){const c=t[a]
if(r(c.attributes)){n.contentUnavailable&&(i=n.contentUnavailable(c.id,a))
continue}const u=n.lockupOptions
let l=15358
if(n.includeOrdinals){const r=n.ordinalDirection===$h?t.length-a:a+1
u.ordinal=e.loc.decimal(r).toString()}if(s(n.filter)&&(l=n.filter),xe(e,c,l))continue
n.excludeIconInSidepacksIfNotTvOnly&&(me(e,c,CR)||(u.ignoreIconInSidepack=!0))
const f=xi(e,c,u)
!r(f)&&f.isValid()&&(o.push(f),dc(n.lockupOptions.metricsOptions.locationTracker))}return o})}function qi(e,t,n,r,o=!1,i=null){return $f.context(`actionFromData: ${t.type}`,()=>{switch(t.type){case NN:case TN:return Ki(e,t,n,{clientIdentifierOverride:r,ignoreIconInSidepack:o,externalDeepLinkUrl:i})
case rD:return Yi(e,t,n)
case iN:return Ji(e,t,n,r)
case qv:return function(e,t,n){return t?$f.context("msoActionFromPlatformData",()=>{const r=U(t,DN)
if(!r)return $f.unexpectedNull(DD,LN,DN),null
const o=new VL(yC)
return o.pageUrl=r,o.title=U(t,FN),Qe(e,o,n),o}):null}(e,t,n)
case Hk:return function(e,t,n){return t?$f.context("groupingActionFromData",()=>{if(!t.href)return $f.unexpectedNull(DD,LN,Jv),null
const r=new VL(yN)
return r.pageUrl=be(e,function(e,t){const n=[cN,sN,zk,oD,kD,pb]
e.appleSilicon.isSupportEnabled&&n.push(PD)
const r=new xM(e,t).includingAttributes(n).includingMacOSCompatibleIOSAppsWhenSupported(),o=C(e)
return s(o)&&r.addingQuery(zb,o),r}(e,t.href)).toString(),r.title=Zi(0,t),Qe(e,r,n),r}):null}(e,t,n)
default:return function(e,t,n){return t?$f.context("genericActionFromData",()=>{const r=l(t,ck),o=U(t,DN)
if(!o)return $f.unexpectedNull(DD,LN,DN),null
const s=new VL(yN)
return s.pageUrl=o,s.title=r===Hk?Zi(0,t):U(t,FN),Qe(e,s,n),s}):null}(e,t,n)}})}function Yi(e,t,n){return $f.context("iAPActionFromData",()=>{var r
const o=Qi(0,t)
if(!o)return null
const i=new VL(pD),a=Ox.from(U(o,DN)),c=se(null!==(r=n.productVariantData)&&void 0!==r?r:re(e,o))
s(c)&&a.param(p$,c)
const u=a.toString(),l=U(t,oC),f=G(t,Hv)
return i.pageUrl=function(e,t,n,r){const o=(new JU).param(mx,t).param(A$,n).param(yx,r.toString()).build()
return`${RF}:/${WF}/${$F}/?${o}`}(0,u,l,f),i.title=U(t,FN),Qe(e,i,n),i})}function zi(e){return o(e)?0:$f.context(xh,()=>{if(function(e){const t=l(e,cv)
return t&&t===RE}(x(e,nN)))return 1
const t=U(e,hk),n=t===Yv||t===zv
if(G(e,gO)||n)return 2
const r=we(e,yD),o=we(e,ND),s=i(r)&&1===r.length,a=i(o)&&1===o.length
return a&&o[0].type===PN||s&&r[0].type===PN?4:a?3:0})}function Ji(e,t,n,a,c){return o(t)?null:$f.context(xh,()=>{let u,f
switch(zi(t)){case 1:return function(e,t,n){return $f.context("editorialItemExternalLinkActionFromData",()=>{const r=l(x(t,nN),DN),o=new WL(r),s=$a(e,t,aD)
if(s)o.title=s
else{const e=new Ox(r)
o.title=e.host}return Qe(e,o,n),o})}(e,t,n)
case 2:u=FD
const d=Ox.from(U(t,DN))
s(c)&&d.param(W$,JSON.stringify(c)),f=d.build()
break
case 3:const p=we(t,ND)[0]
return qi(e,p,n,a)
case 4:const h=we(t,yD),w=i(h)&&1===h.length?h[0]:we(t,ND)[0],g=he(w,gN)
if(o(g))return null
const m=zn(e,w,g,!1,!1,hN,ID,!1,!1,n,!1,!0,null,!1,!1)
return r(m)||m instanceof Date?null:Zn(e,w,g,m,n,!0)
default:u=_N,f=l(x(t,nN),DN)}const d=new VL(u)
d.pageUrl=f
let p=$a(e,t,FN)
return r(p)&&(p=l(t,RD)),d.title=p,Qe(e,d,n),d})}function Ki(e,t,n,r){var o,a,c,u
if(!t)return null
const f=null!==(o=r.clientIdentifierOverride)&&void 0!==o?o:null,d=null!==(a=r.ignoreIconInSidepack)&&void 0!==a&&a,p=null!==(c=r.externalDeepLinkUrl)&&void 0!==c?c:null,h=null!==(u=r.productVariantData)&&void 0!==u?u:re(e,t)
return $f.context("productActionFromData",()=>{var r
let o=U(t,DN)
if(!o)return $f.unexpectedNull(DD,LN,DN),null
let a={}
const c=new Ox(o)
if(n.isAdvert){const e=l(t,Mh)
null!==e&&e.length>0&&c.param(bH,e)
const o=null===(r=n.pageInformation.iAdInfo)||void 0===r?void 0:r.clickFields
c.param(OH,JSON.stringify(o)),a={iAdClickFields:g(o),iAdLineItem:e}}const u=se(h)
s(u)&&c.param(p$,u),a.externalDeepLinkUrl=p,s(p)&&c.param(XU,p),a.clientIdentifierOverride=f,i(f)&&c.param(Uh,f),o=c.toString()
const w=new VL(pD)
w.pageUrl=o,w.pageData=Pi(e,t,a,d),w.title=U(t,FN),n&&n.pageInformation&&(w.referrerUrl=n.pageInformation.pageUrl)
const m=G(t,HD)
return Qe(e,w,m?{...n,offerType:Ik,offerReleaseDate:mt(0,t)}:n,!0),w})}function Zi(e,t){const n=M(t,VP)
return i(n)?n[0]:U(t,FN)}function Xi(e,t){if(!t)return!1
const n=function(e,t,n){return wa(0,t,n)?Pe(e,t,PD):Pe(e,t,oD)}(e,t,e.appleSilicon.isSupportEnabled)
if(o(n))return!0
const r=n.split(" ")
return e.client.deviceHasCapabilities(r)}function Qi(e,t){return t?he(t,gN):null}function ea(e,t){switch(t){case SO:case WE:case uN:return 1
case fD:return 2
case dC:return 3
default:return 0}}function ta(e,t,n){return $f.context("artworkFromApiArtwork",()=>{const o=!!s(n.allowingTransparency)&&n.allowingTransparency,i=!!s(n.withJoeColorPlaceholder)&&n.withJoeColorPlaceholder,a=l(t,DN)
if(r(a))return null
const c=u(t,"hasP3"),d=[Ge(e,o,c,n.useCase)]
let p
if(u(t,"supportsLayeredImage"),o)p=F("clear")
else if(i){const e=N(l(t,lv))
r(e)||(p=e)}r(p)&&(p=F(Cp))
const h=new JN(a,n.overrideWidth||f(t,hb),n.overrideHeight||f(t,wb),d)
return h.backgroundColor=p,h.checksum=l(t,qE),s(n.style)&&(h.style=n.style),s(n.cropCode)&&(h.crop=n.cropCode),s(n.contentMode)&&(h.contentMode=n.contentMode),h})}function na(e,t,n,r){return $f.context(Op,()=>{const o=sa(e,t,r)
if(!s(o))return null
const i=new xx(o),a=U(t,FN)
return cn(0,i,fn(e,t,a,n)),i})}function ra(e,t,n,r){return $f.context(Op,()=>{const s=[]
o(n.targetType)&&(n.targetType=lN)
for(const o of t){const t=na(e,o,n,r)
t&&(s.push(t),dc(n.locationTracker))}return s})}function oa(e,t,n,r){const s=Ae(e,t,"editorialArtwork.searchCategoryBrick")
if(o(s))return null
let i=r
n&&(i=Hf.Density1)
let a=[],c=[]
switch(i){case Hf.Density1:s[hb]="2350",s[wb]=Ev,a=["SCB.ApSCBL01","SCB.ApSCBL03"],c=[xf.right,xf.left]
break
case Hf.Density2:s[hb]="2482",s[wb]=Ev,a=["SCB.ApSCBS01","SCB.ApSCBS02"],c=[xf.left,xf.right]
break
case Hf.Density3:s[hb]=Ev,s[wb]=Ev,a=["cc"],c=[xf.scaleAspectFit]}return a.map((t,n)=>ta(e,s,{cropCode:t,contentMode:n<c.length?c[n]:null,useCase:0,withJoeColorPlaceholder:!0}))}function sa(e,t,n,o,i){return $f.context("iconFromData",()=>{if(!t)return $f.unexpectedNull(DD,RR),null
const a=t.type,c=function(e,t,n){switch(n){case yL:case TL:return sD
case EL:return OR
default:return _e(e,t)}}(e,t,o),u=o||e.host.clientIdentifier,l=Z(t,c,Pv)
if((u===yL||Se(e,t,TR))&&s(l))return ta(e,l,{...n,style:pC})
const f=Da(e,t),d=Ra(e,t)&&(u===TL||f),p=Z(t,c,Iv)
if(d&&s(p))return ta(e,p,{...n,style:vO})
let h
return a===rD?(h=x(t,lN),ta(e,h,{...n,style:nb})):a===TN?(h=x(t,lN),ta(e,h,{...n,style:hC,allowingTransparency:!0})):(r(i)&&(i=re(e,t)),h=function(e,t,n,r){return Oe(e,t,r,lN,n)}(e,t,c,i),ta(e,h,c===OR||o===EL?{...n,style:Sv}:c===Kb?{...n,style:pC}:c===ak?{...n,style:vv,allowingTransparency:!0}:{...n,style:hC}))})}function ia(e,t,n,r){if(!t)return null
const o=Ba(0,n),s=function(e,t){switch(t){case JE:return 13/gH.width
case zE:return 11/mH.width
case YE:return 5.5/yH.width
case _v:return 4.5/TH.width
default:return null}}(0,n),i=function(e,t){switch(t){case JE:return 30/gH.width
case _v:return 112.5/TH.width
default:return Ba(0,t)}}(0,n)
return new ZN(t,n,r,o,s,i)}function aa(e,t,n,r,o,s=!1){const i=ca(e,t,n,null,null,s)
if(!i)return null
const a=i.videos,c=[]
if(a&&a.length>0)for(const t of a)tn(e,t,{...r,id:o}),c.push(t)
let u=null
return c.length>0&&(u=new Xx,u.videos=c,u.mediaPlatform=i.mediaPlatform),u}function ca(e,t,n,o=null,i=null,a=!1){return $f.context("platformVideoPreviewFromData",()=>{r(i)&&(i=re(e,t))
const u=function(e,t,n,r,o){return Oe(e,t,n,r?XS:vR,void 0)}(e,t,i,a),p={}
if(!u)return null
let h=pa(e,t,e.host.clientIdentifier,e.client.deviceType)
if(s(o)){const e=[]
for(const t of h)o.includes(t)&&e.push(t)
h=e}if(0===h.length)return null
for(const t of h){const r=Ia(e,t,e.client.screenSize)
for(const t of Object.keys(u)){const r=c(u,t),o=[]
for(const s of r){const r=d(s,_O)
if(!r){$f.unexpectedNull(DD,gb,`videoPreviewsByType.${t}.previewFrame`)
continue}const i=l(s,Rk)
if(!i){$f.unexpectedNull(DD,LN,`videoPreviewsByType.${t}.video`)
continue}const a=Ve(e,l(r,DN),f(r,hb),f(r,wb),null,l(r,qE))
o.push(new wL(i,a,n))}p[t]=o}for(const e of r)if(p[e])return new eH(p[e],ia(0,t,e))}return null})}function ua(e,t){return $f.context("videoPreviewsFromApiPlatformData",()=>{const n=ca(e,t,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}})
return n?n.videos:[]})}function la(e,t,n,o=null,s,i,a=!1){return $f.context("screenshotsFromData",()=>{const c=[]
r(i)&&(i=re(e,t))
let u=o
if(!u||0===u.length){const n=s||e.host.clientIdentifier
let r=e.client.deviceType
n===yL&&(r=xN),u=pa(e,t,n,r)}for(const r of u){const o=[]
let s
if(r===OD?(s=Na(e,t,sD),ka(e,t,sD)&&o.push("faceTime")):s="tv"===r?La(e,t,i,a,OR):r!==bR||e.host.isVision?r===$N?La(e,t,i,a,ak):La(e,t,i,a):La(e,t,i,a,Kb),!s)continue
const u=da(e,s,r,n,o)
u&&c.push(u)}return c})}function fa(e,t,n,r=null,o=null,s){return function(e,t){const n=[]
if(t&&t.length>0){const e=t.map(e=>e.mediaPlatform)
for(const r of t){const t=[]
for(const e of r.artwork){const n=new Gx
n.screenshot=e,t.push(n)}const o=r.mediaPlatform,s=new Vx(t,o,e)
n.push(s)}}return n}(0,la(e,t,n,r,s,o))}function da(e,t,n,r,o){const s=function(e,t){return t===OD?e.client.deviceType===EN?EN:CN:t}(e,n),a=Ia(e,s,e.client.screenSize)
let u,l=null
for(let e=0;e<a.length&&!i(l);e++)l=c(t,a[e]),u=a[e]
if(i(l)){const t=l.map(function(t){return ta(e,t,{useCase:r})}),s=ia(0,n,u,o)
return new KN(t,s)}return null}function pa(e,t,n,r){return Y(t,`sortedAppPlatformsFromData.${n}.${r}`,()=>{const o=ha(e,t),s=[]
let i=[]
const a=function(e,t){-1===i.indexOf(e)&&-1===s.indexOf(e)&&-1!==o.indexOf(e)&&(i.push(e),t&&s.push(t))}
switch(n){case yL:a(xN)
break
case TL:a(OD)}switch(r){case CN:a(CN)
break
case EN:a(EN)
break
case"tv":a("tv")
break
case xN:a(xN)
break
case $N:a($N)
break
case bR:a(bR)}return e.appleSilicon.isSupportEnabled?(a(EN),a(CN)):(a(CN),a(EN)),a($N),a("tv"),a(bR),a(xN),a(OD),i=i.filter(function(e){return-1===s.indexOf(e)}),i})}function ha(e,t){return t?Y(t,"supportedAppPlatformsFromData",()=>{const n=Ra(e,t,sD),r=Da(e,t),o=function(e,t){return Se(e,t,zk)}(e,t),s=M(t,bp),i=[]
for(const e of s)switch(e){case Yk:r||i.push(CN)
break
case cD:r||i.push(EN)
break
case CR:i.push("tv")
break
case xN:i.push(xN)
break
case AO:i.push(bR)}return n&&i.push(OD),o&&i.push(xN),ge(e,t,$N)&&i.push($N),i}):null}function wa(e,t,n){return n&&G(t,bd)}function ga(e,t,n){if(wa(0,t,n)){const n=Pe(e,t,"minimumMacOSVersion")
if(i(n))return n}return X(t,_e(e,t),kD)}function ma(e,t,n){switch(t){case CN:return[CN,OD]
case EN:return[CN,EN,OD]
case"tv":return["tv"]
case xN:return[xN]
case $N:return n?[$N,CN,EN]:[$N]
default:return[]}}function ya(e,t,n){return-1!==t.indexOf(n)}function Ta(e,t,n,r,o=!0){const s=function(e,t,n){switch(t){case CN:return[CN,xN,OD,"tv"]
case EN:return[CN,EN,OD,"tv"]
case"tv":return["tv"]
case xN:return[xN]
case $N:return n?[$N,CN,EN]:[$N]
default:return[]}}(0,n,r)
return!!s.some(e=>ya(0,t,e))}function Aa(e,t){var n
const o=new QV
if(e.client.deviceType!==$N)return o
if(t.type!==TN)return o.runsOnIntel=null===(n=Ie(e,t,"runsOnIntel",Ce(e)))||void 0===n||n,o.runsOnAppleSilicon=Se(e,t,"runsOnAppleSilicon",Ce(e)),o.requiresRosetta=Se(e,t,Rp,Ce(e)),o
const s=we(t,NN)
if(0===s.length)return o
for(const t of s){if(r(t.attributes))continue
const n=Aa(e,t)
o.runsOnIntel=o.runsOnIntel&&n.runsOnIntel,o.runsOnAppleSilicon=o.runsOnAppleSilicon&&n.runsOnAppleSilicon,o.requiresRosetta=o.requiresRosetta||n.requiresRosetta}return o}function Ea(e,t,n,r){const o=Aa(e,t)
return n?o.runsOnAppleSilicon&&(!o.requiresRosetta||o.requiresRosetta&&r):o.runsOnIntel}function Pa(e,t,n,r){const o=function(e,t,n){switch(t){case CN:return[CN,xN,OD]
case EN:return[CN,EN,OD]
case"tv":return["tv"]
case xN:return[xN]
case $N:return n?[$N,CN,EN]:[$N]
default:return[]}}(0,n,r)
return o.some(e=>ya(0,t,e))}function Ia(e,t,n){switch(t){case $N:return[$N]
case xN:return[_v,YE,zE,JE]
case"tv":return["appleTV"]
case bR:return["appleVisionPro"]
case EN:{const t=[]
return(n.isEqualTo(dH)||n.isEqualTo(pH))&&e.client.screenCornerRadius>0?(t.push(Zb),t.push(Xb),t.push(mb),t.push(yb),t.push(cD)):n.isEqualTo(fH)?(t.push(mb),t.push(Zb),t.push(Xb),t.push(yb),t.push(cD)):n.isEqualTo(uH)||n.isEqualTo(lH)||n.isEqualTo(hH)||n.isEqualTo(wH)?(t.push(Xb),t.push(Zb),t.push(mb),t.push(yb),t.push(cD)):n.isEqualTo(cH)?(t.push(yb),t.push(cD),t.push(Xb),t.push(mb),t.push(Zb)):n.isEqualTo(AH)?(t.push(Xb),t.push(mb),t.push(Zb),t.push(yb),t.push(cD)):n.isEqualTo(aH)?(t.push(cD),t.push(yb),t.push(Xb),t.push(mb),t.push(Zb)):(t.push(Zb),t.push(Xb),t.push(cD),t.push(yb),t.push(mb)),t}case CN:{let e
e=n.isEqualTo(tH)||n.isEqualTo(IH)?KE:n.isEqualTo(nH)||n.isEqualTo(EH)||n.isEqualTo(PH)?Cv:n.isEqualTo(iH)?Yk:n.isEqualTo(sH)?kp:n.isEqualTo(oH)?Dp:n.isEqualTo(rH)?Np:n.isEqualTo(SH)?ZE:n.isEqualTo(vH)?XE:Cv
const t=_H.indexOf(e),r=_H.slice(0,t)
r.reverse()
const o=_H.slice(t+1)
return[e].concat(r,o)}default:return[]}}function Sa(e,t){if(r(t))return null
const n=Ae(e,t,Ip),o=Ae(e,t,Sp),s=wa(0,t,!0)
if(me(e,t,$N)&&!s){const s=function(e,t){const n=pt(e,t)
if(r(n))return null
const o=c(n,"assets")
if(!o.length)return null
for(const e of o)if(l(e,"flavor")===Sw)return f(e,h_)
return null}(e,t)
if(i(o)&&e.props.enabled(Ov)){const e=f(o,Lp)
return new gL(s,null,null,e)}if(i(n)){const e=f(n,Fp),t=f(n,$p)
return new gL(s,e,t,null)}return new gL(s,null,null,null)}{const r=x(t,Ep)
if(r){let t=[]
e.client.thinnedApplicationVariantIdentifier&&(t=e.client.thinnedApplicationVariantIdentifier.split(" ")),t=t.concat([e.host.deviceModel,"universal"])
for(const s of t){const t=f(r[s])
if(t){if(i(o)&&e.props.enabled(Ov)){const e=f(o,Lp)
return new gL(t,null,null,e)}if(i(n)){const e=f(n,Fp),r=f(n,$p)
return new gL(t,e,r,null)}return new gL(t,null,null,null)}}}}return null}function va(e,t,n){let r,i=null,a=null,c=null,u=null
switch(e.client.deviceType){case $N:n.supportsArcade?(i=QE,c="sr"):(i="editorialArtwork.centeredFullscreenBackground",c="ep")
break
case"tv":n.presentedInTopShelf?(i=xp,c="sr"):(i=QE,c="ta",a="editorialArtwork.fullscreenBackground",u="sr")
break
default:n.supportsArcade?n.prefersCompactVariant||e.client.isPhone?(i="editorialArtwork.splashTall",c="oc"):(i=QE,c="oh"):(i=bv,c="sr")}return r=Ae(e,t,i),null!==a&&o(r)&&(r=Ae(e,t,a),null!==u&&(c=u)),s(r)&&s(c)?ta(e,r,{cropCode:c,useCase:20,withJoeColorPlaceholder:!0,overrideHeight:null,overrideWidth:null}):null}function _a(e,t,n,o,a){let c=[]
if(i(o))c=o
else switch(e.client.deviceType){case $N:case"tv":c=[eP]
break
case EN:c=[tP]
break
default:c=[nP]}let u=null,f=null
for(const n of c)if(u=Ae(e,t,[sN,n]),f=Ae(e,t,[sN,n,_O]),i(u))break
const d=null!=a?a:ta(e,f,{useCase:n,withJoeColorPlaceholder:!0,cropCode:"sr"})
if(s(u)){const e=l(u,Rk)
if(r(e))return null
let t,n
return t={prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},n={muteUnmute:!0},new wL(e,d,{allowsAutoPlay:!0,looping:!0,canPlayFullScreen:!1,showPlaybackControls:!1,playbackControls:t,autoPlayPlaybackControls:n})}return null}function Ca(e,t,n){let r=null
switch(e.client.deviceType){case $N:case"tv":case CN:r=[eP,tP,nP]
break
default:r=[tP,eP,nP]}return _a(e,t,20,r,n)}function Oa(e,t){return s(t)?`${RF}:/${zF}/${n$}?${j$}=${t.href}`:null}function ba(e,t){switch(t){case mL:case PL:return"appStore"
case yL:return xN
case TL:return OD
case EL:return rP
default:return null}}function Ra(e,t,n){return Se(e,t,"hasMessagesExtension",n)}function ka(e,t,n){return Se(e,t,$E,n)}function Da(e,t){return Se(e,t,"isHiddenFromSpringboard")}function Na(e,t,n){return Ae(e,t,FE,n)}function La(e,t,n,r,o){return Oe(e,t,n,r?ZS:ZR,o)}function Fa(e,t){return Se(e,t,oP)}function $a(e,t,n){return xa(e,t,n)||Pe(e,t,["itunesNotes",n])}function xa(e,t,n){return Pe(e,t,[Qb,n])}function Ma(e,t){return Y(t,"isMacOSInstaller",()=>!1)}function Ua(e,t){const n=$e(e)
return!(!function(e,t,n){if(n&&$e(e).isSystemAppFromData(t)){const e=U(t,"watchBundleId")
if(i(e))switch(e){case"com.apple.podcasts.watchkitapp":case"com.apple.Home.watchkitapp":case"com.apple.mobilemail.watchkitapp":case"com.apple.news.watchkitapp":case"com.apple.iBooks.watchkitapp":return!0
default:return!1}}return!1}(e,t,e.client.isTinkerWatch)&&(!e.client.isTinkerWatch||(n.isSystemAppFromData(t)?Se(e,t,QA)||Se(e,t,TR):Se(e,t,XA)||Se(e,t,TR))))}function Ba(e,t){switch(t){case Zb:return 18/dH.width
case Xb:return 18/uH.width
case KE:return 41.5/tH.width
case Cv:return 39/nH.width
case ZE:return 55/SH.width
case XE:return 55/vH.width
case zE:return 34/mH.width
case YE:return 55/yH.width
case _v:return 108/TH.width
default:return null}}function Ga(e,t){if(r(t)||0===t.length)return!0
const n=t.split("."),o=f(n[0])||0,s=f(n[1])||0,i=f(n[2])||0
return e.host.isOSAtLeast(o,s,i)}function Va(e,t){return!r(t)&&0!==t.length&&e.client.isActivePairedWatchSystemVersionBelow(t)}function Ha(e,t){switch(t){case uN:case fD:case CO:case OO:case pO:case wO:case Rv:return!0
default:return!1}}function ja(e,t,n){const r=Se(e,t,oP),o=pt(e,t)
if(l(o,ck)===Ik&&r){const n=l(o,wC),r=Pe(e,t,pb)
if(i(r)){if(i(n)){const t=ke(n),o={"@@expectedDateMY@@":"MMM y","@@expectedDateMDY@@":"MMM d, y"}
for(const[n,s]of Object.entries(o))if(r.includes(n)){let o=e.loc.formatDateWithContext(s,t,"middleOfSentence")
return r.replace(n,o)}}return r}}return n}function Wa(e,t){const n=he(t,yD)
return i(n)?n:Se(e,t,gO)?he(t,ND):null}function qa(e){let t=e.targetType
return t||(t=VD),t}function Ya(e){let t=e.idType
return t||(t=PR),t}function za(e,t){return Fa(e,t)?WR:null}function Ja(e,t){const n=l(t,ck),r=(ge(e,t,$N,!0),me(e,t,$N,!0)),o=function(e,t,n,r=!1){const o=new Set(Te(e,t,r))
for(const e of n)if(o.has(e))return!0
return!1}(e,t,[Yk,cD,IO,CR,xN],!0),s=ye(e,t,[Yk,cD,IO,CR,xN],!0)
if(r)switch(n){case NN:return Sw
case TN:return"macSoftwareBundle"}if(s||o)switch(n){case NN:return vw
case TN:return"mobileSoftwareBundle"}switch(n){case rD:return"softwareAddOn"
case Hk:return kO
case kv:case iN:return oO
default:return null}}function Ka(e){return null==e?"":e}function Za(e){if(!e)return null
const t=new Ox(e)
let n=null
for(const e of Object.keys(t.query))if("referrer"===e){t.query[e]===_w&&(n="com.apple.siri")
break}return n}function Xa(e){return p(Qa(g(e)))}function Qa(e){if(r(e))return null
if(e instanceof Array){const t=[]
for(const n of e){const e=Qa(n)
s(e)&&t.push(e)}return t}if(e instanceof Object){const t={}
return Object.keys(e).forEach((n,r,o)=>{const i=Qa(e[n])
s(i)&&(t[n]=i)}),t}return e}function ec(e){if(!e)return null
const t=new Ox(e),n=t.query.term,o=t.pathname
return r(n)||r(o)?null:o.endsWith("/search")?n:null}function tc(e,t,n){if(!t||!n)return _N
if(t.type===TN)return YA
const r=n.style
switch(r){case hC:return sD
case vv:return $N
case Sv:return"tv"
case pC:return xN
case vO:return OD
case nb:return nb
default:return ee(r),_N}}function nc(e,t){if(!s(t))return null
const n={},r=d(t,bw)
if(!i(r))return null
const o=l(r,Rw)
i(o)&&(n[Rw]=o)
const a=l(r,kw)
i(a)&&(n[kw]=a)
const c=l(r,Dw)
return i(c)&&(n[Dw]=c),n.marketing={marketingItemId:t.id,offerDecisionId:l(t,"meta.metrics.decisionId")},n}function rc(e,t,n){let o
return s(e)&&(o=y(e)),s(t)&&(r(o)&&(o={}),o.odpModuleUpdate=t.toString()),i(n)&&(r(o)&&(o={}),o.userSegment=n),o}function oc(e,t){const n=wc(e.locationTracker)
return n.push(pc(e,t)),n}function sc(e,t){const n=wc(e.locationTracker)
return n.push(hc(e,t)),n}function ic(e,t){const n=new CH
n.location=pc(e,t),e.locationTracker.locationStack.push(n)}function ac(e,t){const n=new CH
n.location=hc(e,t),e.locationTracker.locationStack.push(n)}function cc(e){0!==e.locationStack.length?e.locationStack.pop():$f.unexpectedType(DD,"non-empty location stack","empty location stack")}function uc(e){const t=gc(e)
return t?t.position:e.rootPosition}function lc(e){const t=gc(e)
return t?t.location:null}function fc(e,t){const n=gc(e)
n?n.position=t:e.rootPosition=t}function dc(e){const t=gc(e)
t?t.position++:e.rootPosition++}function pc(e,t){var n
const r=hc(e,t)
if(!e.id&&e.locationTracker)r.idType=WD,r.id=uc(e.locationTracker).toString()
else{r.idType=Ya(e)
let t=e.id;(null===(n=e.anonymizationOptions)||void 0===n?void 0:n.anonymizationString)&&(t=e.anonymizationOptions.anonymizationString),r.id=Ka(t)}return e.fcKind&&(r.fcKind=e.fcKind),e.displayStyle&&(r.displayStyle=e.displayStyle),e.inAppEventId&&(r.inAppEventId=e.inAppEventId),e.relatedSubjectIds&&(r.relatedSubjectIds=e.relatedSubjectIds),e.canonicalId&&(r.canonicalId=e.canonicalId),e.productVariantData&&Object.assign(r,ue(e.productVariantData)),r}function hc(e,t){var n
let r=t;(null===(n=e.anonymizationOptions)||void 0===n?void 0:n.anonymizationString)&&(r=e.anonymizationOptions.anonymizationString)
const o={locationPosition:uc(e.locationTracker),locationType:qa(e),name:Ka(r)}
return e.recoMetricsData&&Object.assign(o,e.recoMetricsData),o}function wc(e){return e.locationStack.map(e=>e.location)}function gc(e){const t=e.locationStack.length
return 0===t?null:e.locationStack[t-1]}function mc(e,t){switch(t){case Lk:const n=Ac(t)
return e.bag.isSearchLandingAdsEnabled||e.bag.enabledAdPlacements.includes(n)
case qR:return!0
case AN:const o=Ac(t)
return!r(o)&&e.bag.enabledAdPlacements.includes(o)&&e.featureFlags.isEnabled(Fd)&&(0,Uf.isSome)(yc(e))
case eN:case UD:const s=Ac(t)
return!r(s)&&e.bag.enabledAdPlacements.includes(s)&&e.featureFlags.isEnabled(Fd)
default:return!1}}function yc(e){if(e.bag.todayAdCondensedEnabled){if(e.props.isNotEnabled($d)||!e.client.isPhone)return
return Y_}return function(e){return!(e.props.isNotEnabled($d)||!e.featureFlags.isEnabled("chainlink_today_condensed")||!e.client.isPhone)&&1===Bf.Qo(e.cookieProvider,AU)}(e)?Y_:aO}function Tc(e,t,n){var r,o,s,i,a
const c=e.bag.adPlacementTimeouts,u=.3
switch(t){case qR:return n?null:null!==(r=null==c?void 0:c["search-results-in-seconds"])&&void 0!==r?r:u
case Lk:return n?null:null!==(o=e.bag.searchLandingAdFetchTimeout)&&void 0!==o?o:u
case AN:return n?null!==(s=null==c?void 0:c["today-in-seconds"])&&void 0!==s?s:u:null
case eN:return n?null:null!==(i=null==c?void 0:c["product-page-ymal-in-seconds"])&&void 0!==i?i:u
case UD:return n?null:null!==(a=null==c?void 0:c["product-page-ymal-during-download-in-seconds"])&&void 0!==a?a:u
default:return u}}function Ac(e){switch(e){case qR:return zS
case Lk:return JS
case AN:return AN
case eN:return"product-page-ymal"
case UD:return"product-page-ymal-during-download"
default:return null}}function Ec(e,t){var n,r,o,s
const i=null!==(r=null===(n=t[0])||void 0===n?void 0:n.artwork)&&void 0!==r?r:[],a=null!==(s=null===(o=e[0])||void 0===o?void 0:o.videos)&&void 0!==s?s:[],c=i.filter(e=>e.isPortrait()),u=i.filter(e=>e.isLandscape()),l=a.filter(e=>e.preview.isPortrait()).slice(0,1),f=a.filter(e=>e.preview.isLandscape()).slice(0,1),d=c.length+l.length
return{landscape:u.length+f.length,portrait:d}}function Pc(e,t,n){var o
return r(n)?null:new RH(e,t,n.iAdId,n.clientRequestId,null,null===(o=n.onDeviceAd)||void 0===o?void 0:o.positionInfo)}function Ic(e,t){return U(t,DH)}function Sc(e,t,n){o(t)&&r(t.attributes)||(t.attributes[DH]=n)}function vc(e,t,n,r){var s,a,c,u,l
const f=e.bag.adsOverrideLanguage
if(o(f)||o(t))return!0
let d=null===(s=t.meta)||void 0===s?void 0:s.resource
if(o(d)&&i(n)&&(d=null===(l=null===(u=null===(c=null===(a=null==n?void 0:n.appMetadata)||void 0===a?void 0:a.data)||void 0===c?void 0:c[0])||void 0===u?void 0:u.meta)||void 0===l?void 0:l.resource),o(d))return!1
if(U(d,"name.locale")!==f)return!1
const p=Pe(e,t,Gb),h=Pe(e,d,"subtitle.locale")
if(i(p)&&h!==f)return!1
if("TEXT"===r){const n=U(t,xd)
if((0,Uf.isSome)(n)&&n!==uD){let r
const o=n
r=n===mN?ob:n
const s=Pe(e,t,r),a=Pe(e,d,o.concat(".locale"))
if(i(s)&&a!==f)return!1}}return!0}function _c(e,t){if((0,Uf.isNothing)(t))return null
const n=Ac(t)
return e.bag.adPlacementEligibleSlotPositions[n]}function Cc(e,t,n){if((0,Uf.isNothing)(n))return!1
const r=_c(e,t)
return!o(r)&&-1!==r.findIndex(e=>{var t
return e.shelfIdentifier.toString()===(null===(t=n.shelfIdentifier)||void 0===t?void 0:t.toString())&&e.slot===n.slot})}function Oc(e,t){return{incidents:[],iAdInfo:t}}function bc(e,t){return r(t)||o(t.incidents)?null:t.incidents}function Rc(e,t,n){var r,o
const s=Ic(0,n)
Dc(t,new pU(s,Md)),null===(r=null==t?void 0:t.iAdInfo)||void 0===r||r.setMissedOpportunity(e,KS,null===(o=null==t?void 0:t.iAdInfo)||void 0===o?void 0:o.placementType)}function kc(e,t,n){var r,i,a,c,u,l,f,d
if(o(n)||o(n.failureReason))return
const p=null===(r=n.onDeviceAd)||void 0===r?void 0:r.instanceId,h=null===(i=null==t?void 0:t.iAdInfo)||void 0===i?void 0:i.placementType
switch(n.failureReason){case Ud:s(p)&&Dc(t,new pU(p,Md)),null===(a=null==t?void 0:t.iAdInfo)||void 0===a||a.setMissedOpportunity(e,KS,h)
break
case dE:s(p)&&Dc(t,new pU(p,dE)),null===(c=null==t?void 0:t.iAdInfo)||void 0===c||c.setMissedOpportunity(e,KS,h)
break
case pE:s(p)&&Dc(t,new pU(p,pE)),null===(u=null==t?void 0:t.iAdInfo)||void 0===u||u.setMissedOpportunity(e,KS,h)
break
case"noAdAvailable":null===(l=null==t?void 0:t.iAdInfo)||void 0===l||l.setMissedOpportunity(e,Bd,h)
break
case"timeout":null===(f=null==t?void 0:t.iAdInfo)||void 0===f||f.setMissedOpportunity(e,Gd,h)
break
case hE:s(p)&&Dc(t,new pU(p,hE)),null===(d=null==t?void 0:t.iAdInfo)||void 0===d||d.setMissedOpportunity(e,"NOLOC",h)}}function Dc(e,t){r(e)||e.incidents.push(t)}function Nc(e,t){const n={internalContentType:MN,shelf:t}
e.push(n)}function Lc(e,t){const n={internalContentType:"contentPool",contentPool:new LH(t)}
e.push(n)}function Fc(e,t,n){if(o(e))return null
const r=e.shift()
if(r.internalContentType===MN)return{contentType:MN,shelf:r.shelf}
const s=r.contentPool,i=s.numberOfItemsProcessed,a=i>0
let c
c=t===Om&&s.isFullyHydrated?function(e){const t={label:e.label,title:e.title,meta:e.meta,date:e.date,contents:e.remainingContents,onDevicePersonalizationProcessingType:e.onDevicePersonalizationProcessingType}
return e.numberOfItemsProcessed=e.remainingContents.length,e.remainingContents=[],t}(s):function(e,t){const n=e.remainingContents.length,r=e.remainingContents.slice(0,t),o=e.remainingContents.slice(t,n),s={label:e.label,title:e.title,meta:e.meta,date:e.date,contents:r,onDevicePersonalizationProcessingType:e.onDevicePersonalizationProcessingType}
return e.numberOfItemsProcessed+=r.length,e.remainingContents=o,s}(s,n)
const u=o(s.remainingContents),l={todayModule:c,isContinuationModule:a,isLastOfModule:u,contentOffsetWithinSourceModule:i}
return u||e.unshift(r),{contentType:ZC,moduleSlice:l}}function $c(e){var t,n
if(o(e))return 0
const r=e[0]
return r.internalContentType===MN?0:null!==(n=null===(t=r.contentPool)||void 0===t?void 0:t.remainingContents.length)&&void 0!==n?n:0}async function xc(e,t,n,r){e.host.isOSAtLeast(16,4,0)&&e.props.isNotEnabled(Cm)&&(n=$c(t))
const o=Fc(t,iS,n)
if(o.contentType!==ZC)return await Promise.reject(new Error("dequeueHydratedModuleSlice: TodayContentQueue dequeued unexpected contentType."))
const s=o.moduleSlice
return await Uc(e,s).then(n=>{const o=n.todayModule.contents.length
let s=Math.ceil(o/r)*r
0===s&&(s=r)
const i=s-o
return!n.isLastOfModule&&i>0?Mc(e,t,i).then(e=>Bc(0,n,e)):n})}async function Mc(e,t,n){if(0===n)return await Promise.reject(new Error("hydrateContentsUntilCountOrEndOfModule: Hydrating module slice of size 0."))
const r=Fc(t,iS,n)
if(r.contentType!==ZC)return await Promise.reject(new Error("hydrateContentsUntilCountOrEndOfModule: TodayContentQueue dequeued unexpected contentType."))
const o=r.moduleSlice
if(o.isLastOfModule)return await Uc(e,o)
const s=o.todayModule.contents.length
return await Uc(e,o).then(n=>{const r=n.todayModule.contents.length,o=s-r
return o>0?Mc(e,t,o).then(e=>Bc(0,n,e)):n})}async function Uc(e,t){const n={},r=[]
for(const e of t.todayModule.contents)R(e)?n[e.id]=e:r.push(e)
if(0===r.length)return await Promise.resolve(t)
const o=new xM(e,r).includingAdditionalPlatforms(v(e)).includingAttributes($H).includingRelationshipsForUpsell(!0).usingCustomAttributes(ne(e))
return fe(e,o,r),pn(e)&&(o.enablingFeature(aN),o.addingQuery(DR,$O),o.includingScopedRelationships(PN,[gN]),o.includingScopedAttributes(PN,[mN,Fk,$k]),o.includingScopedRelationships(iN,[yD])),await lr(e,o).then(e=>{var r
const o=b(e)
for(const e of o)R(e)&&(n[e.id]=e)
return t.todayModule.contents=null===(r=t.todayModule.contents)||void 0===r?void 0:r.map(e=>{var t
return null!==(t=n[e.id])&&void 0!==t?t:e}).filter(e=>R(e)),t}).catch(()=>(t.todayModule.contents=[],t))}function Bc(e,t,n){const r=t.todayModule,o=n.todayModule
return{todayModule:{label:r.label,title:r.title,meta:r.meta,contents:r.contents.concat(o.contents),onDevicePersonalizationProcessingType:r.onDevicePersonalizationProcessingType},isContinuationModule:t.isContinuationModule,isLastOfModule:n.isLastOfModule,contentOffsetWithinSourceModule:t.contentOffsetWithinSourceModule}}function Gc(e,t,n){let r=!1,o=[],s=[]
for(let i=e.length-1;i>=0;i--){const a=e[i]
R(a)?1===t[a.id]?(n&&0===o.length&&o.unshift(...s),s=[],o.unshift(a),r=!0):(s.unshift(a),t[a.id]-=1):s.unshift(a)}return n&&0===o.length&&(o=s),{contents:o,contentsContainsHydratedData:r}}function Vc(e,t){if(!eo(e))return null
const n=new Set
for(const e of t)if(!r(e.contents))for(const t of e.contents){const e=l(t,RO)
i(e)&&n.add(e.toString())}return to(e,n)}function Hc(e,t,n,o=null,a,c){const u=e.loc.string(bm),l=new fU(t,o,a||u,u,c)
if(s(n)&&i(n.queue)&&(l.nextPage=n),l.pageRefreshPolicy=tr(e,null==n?void 0:n.context.refreshController),l.widgetKind=null,l.dateRelevance=null,Go(e,e.bag.widgetSuggestionsFromTodayTabRolloutRate)){const t=new Date,n=l.shelves.filter(e=>e.contentType===kR).map(e=>e.items).reduce((e,t)=>e.concat(t),[]).filter(e=>e.media instanceof KM).map(n=>{const o=n.media.startDate
if(r(o))return null
const s=new Date(o)
s.setHours(s.getHours()-1)
const i=new Date(t)
if(i.setHours(i.getHours()-1),s<i)return null
if(a=t,Ne(s).getTime()!==Ne(a).getTime())return null
var a
const c=function(e,t,n){return Math.max(0,Math.min(60,e))}(e.bag.todayWidgetSmartStackJitterMinutes),u=Math.floor(Math.random()*c*60)
return s.setTime(s.getTime()+1e3*u),{startDate:s,endDate:o}}).filter(e=>null!==e)
n.length>0&&(l.widgetKind=aS,l.dateRelevance=n)}return l}function jc(e,t,n,i=!1){if(function(e,t){if(o(t))return!0
const n=t[0]
return n.internalContentType!==MN&&(e.host.isOSAtLeast(16,4,0)&&e.props.isNotEnabled(Cm)?!n.contentPool.isFullyHydrated:n.contentPool.isCompletelyUnhydrated)}(e,t))return null
const a=Fc(t,Om,6)
if(r(a))return null
let c,u=null
if(a.contentType===MN&&(u=a.shelf,c=!0),a.contentType===ZC){const t=a.moduleSlice,r={contentOffsetWithinModule:t.contentOffsetWithinSourceModule,hideTitle:t.isContinuationModule,setTitleToDateForTodaySection:i}
u=Wc(e,t.todayModule,r,n),c=t.isLastOfModule}return s(u)&&c&&dc(n.locationTracker),u}function Wc(e,t,a,u,f=!1){const d=D(t),p=rc(d,t.onDevicePersonalizationProcessingType,null),h={id:null,kind:null,softwareType:null,targetType:KD,title:t.title,pageInformation:u.pageInformation,locationTracker:u.locationTracker,idType:fk,recoMetricsData:p}
u.currentShelfRecoMetricsData=d
const w=new CM(kR)
w.isHorizontal=!1,cn(0,w,h),ic(h,t.title),fc(h.locationTracker,a.contentOffsetWithinModule)
const g={useThreeLineOverlayForBranded:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0}
g.useThreeLineOverlayForBranded=!function(e){const t=n(e,LO)
return"TodayForApps"===e.label||s(t)}(t)||f
const m=[],y=c(t.contents)
let T=0,A=0,E=0
for(const t of y){if(mc(e,AN)){const t=a.contentOffsetWithinModule+T+A-E,n=Ko(u.locationTracker,t),r=ou(e,u.adStitcher,u.adIncidentRecorder,n,g,u)
s(r)&&(m.push(r),dc(u.locationTracker),A++)}if(!R(t))break
if(mc(e,AN)){const t=a.contentOffsetWithinModule+T+A,n=Ko(u.locationTracker,t)
g.isAdEligible=Cc(e,AN,n)}const n=eu(e,t,g,u)
r(n)?E++:n instanceof Date?er(n,u.refreshController):(m.push(n),dc(u.locationTracker)),T++}const P=y.slice(T)
t.contents=P,w.items=m
const I=l(t,LO)
if(t.label===cS&&a.setTitleToDateForTodaySection){const t=new Date
w.title=e.loc.formatDate("EEEE, MMMM d",t)}else if(i(I)){const t=ke(I)
w.title=e.loc.formatDate("EEEE",t),w.subtitle=e.loc.formatDate("MMMM d",t)}else w.title=t.title
if(a.hideTitle&&(w.title=void 0),cc(u.locationTracker),i(t.contents)){const e=a.contentOffsetWithinModule+T+A,n=new MH(t,e,u.pageInformation,u.locationTracker)
w.url=r((S=n).todayModule)||o(S.todayModule.contents)?null:`${RF}:/${BF}/${LF}/`+encodeURIComponent(JSON.stringify(S))}var S
return w}async function qc(e,t){if(s(t.context.pageInformation.iAdInfo)){const n=g(t.context.pageInformation.iAdInfo)
i(n)&&(t.context.pageInformation.iAdInfo=RH.from(e,n))}const n=o(a=t.queue)?null:a[0].internalContentType===MN?MN:ZC
var a
if(r(n))return await Promise.reject(new Error("today.nextPageFromPageToken called on end of page"))
let c=6
const u=function(e){return e.client.isPad?e.client.screenSize.isEqualTo(fH)?6:2:1}(e),l=$c(t.queue)
if(e.client.isPad&&l===c+1&&(c+=1),n===MN){const n=Fc(t.queue,iS,c).shelf
return dc(t.context.locationTracker),await Promise.resolve(Hc(e,[n],t,null))}return await xc(e,t.queue,c,u).then(n=>{const r={contentOffsetWithinModule:n.contentOffsetWithinSourceModule,hideTitle:n.isContinuationModule,setTitleToDateForTodaySection:!1},o=Wc(e,n.todayModule,r,t.context)
return n.isLastOfModule&&dc(t.context.locationTracker),Hc(e,[o],t,null)})}function Yc(e,t,n){switch(n){case Mk:return GH.has(t)
case NP:return UH.has(t)
case Uv:return BH.has(t)
default:return!1}}function zc(e,t,n,r,s,i){const a=[]
for(const c of t){const t=Jc(e,c,n,r,s,i)
o(t)||(a.push(t),dc(r.metricsLocationTracker))}return a}function Jc(e,t,n,o,i,a){const c={pageInformation:o.metricsPageInformation,locationTracker:o.metricsLocationTracker}
if(null==a&&(a={useThreeLineOverlayForBranded:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0}),a.prevailingCropCode=function(e,t){switch(t){case Mk:return"fo"
case NP:return"el"
case Uv:return"ek"
default:return null}}(0,n),e.client.deviceType!==xN&&(a.coercedGeneralCardSubType=pR),!s(t.attributes))return i&&i(t),null
const u=eu(e,t,a,c,o.augmentingData)
if(r(u)||u instanceof Date)return null
const l=u
{l.collapsedHeading=Zc(0,l),l.inlineDescription=Xc(e,l,t),l.inlineDescription===l.collapsedHeading&&(l.inlineDescription=null)
const n=l.media
n&&n.kind===Tk&&(l.title=null)}if(n===Uv){const e=l.heroMedia
if(!s(e)||!s(e.art)&&!s(e.video))return null}return Yc(0,l.media.kind,n)&&s(o.filterOutMediaCardKinds)&&o.filterOutMediaCardKinds.has(l.media.kind)?null:(function(e,t,n){if("tv"!==e.client.deviceType||!G(n,sS))return
const r=new WL("com.apple.Arcade://")
t.clickAction=r}(e,l,t),l)}function Kc(e,t,n,r,o,i,a){if(!s(n))return null
const c=new CM(n)
return r&&(c.title=r),c.subtitle=o,c.isHorizontal=!0,c.items=n===tR?[Qc(e,t,i.metricsPageInformation,i.metricsLocationTracker,()=>!0,a)]:zc(e,t,n,i,a),c}function Zc(e,t){return s(t.heading)?t.heading.replace(/\n/g," "):t.collapsedHeading}function Xc(e,t,n){if(t.media.kind===Tk)return t.overlay instanceof tU&&s(t.overlay.lockup)?t.overlay.lockup.title:null
{const t=xa(e,n,FN)
return s(t)?t.replace(/\n/g," "):null}}function Qc(e,t,n,o,i,a){return $f.context("todayCardsFromPlatformData",()=>{if(!t)return null
const c={useThreeLineOverlayForBranded:!1,enableFullScreenVideo:!1,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0}
c.coercedGeneralCardSubType=pR,c.prevailingCropCode="fo"
const u={pageInformation:n,locationTracker:o},l=[]
for(const n of t){if(!s(n.attributes)){a&&a(n)
continue}const t=eu(e,n,c,u)
if(r(t)||t instanceof Date)continue
const o=t
if(i(o)){o.collapsedHeading=Zc(0,o),o.inlineDescription=Xc(e,o,n),o.inlineDescription===o.collapsedHeading&&(o.inlineDescription=null)
const t=o.media
t&&t.kind===Tk&&(o.title=null),l.push(o)}}return l.length?new lU(l):null})}function eu(e,t,n,a,c){return $f.catchingContext("todayCardFromData",()=>{const f=U(t,jD),p=ho(0,t)
!function(e,t,n,r){const o=mu(0,t)
let s=U(t,hk)
if(s&&r.coercedGeneralCardSubType&&(s=r.coercedGeneralCardSubType),U(t,jD)!==Db)return!1
if(o.length>=6&&s===pR)return!1
const i=U(t,_k),a=nu(0,Db,i)
return!(!G(t,Rm)&&du(e,x(t,a),r.prevailingCropCode)||ru(0,o))}(e,t,0,n)?n.clientIdentifierOverride=null:n.clientIdentifierOverride=p,n.crossLinkSubtitle=wu(e,t)
let h=null
switch(f){case jR:h=function(e,t,n,a){return $f.context("brandedCard",()=>{const c=lu(e,t,a,n),u=n.useThreeLineOverlayForBranded
uu(0,t,c,a)
try{const l=nu(0,jR),f=x(t,l),d=du(e,f,n.prevailingCropCode),p=pu(0,t,l)
d?c.style=hu(0,f):(c.backgroundColor=FH,c.style=hN)
const h=U(t,jD),w=gu(0,c.style,h),g=yu(e,t,n,a,!0,w,Fm)
if(!g||1!==g.length)return null
const m=g[0]
switch(U(t,hk)){case JC:case zC:{let n=!0,a=null
if(s(d)&&(n=!1,a=d.backgroundColor),u){const n=cu(t)
let i=xa(e,t,FN)
o(i)&&(i=m.title)
let a=xa(e,t,aD)
if(o(a)){const n=we(t,ND)
if(0!==n.length){const t=n[0]
a=xa(e,t,uk)}r(a)&&!r(m.subtitle)&&(a=m.subtitle)}c.overlay=new sU(n,i,a),c.style=tN,c.title=null,s(d)&&e.client.deviceType!==xN&&(d.crop="fo")}else{const r=xa(e,t,aD)
let o=null
i(r)&&(o=new iL(r,tD,Lm)),c.overlay=new tU(m,o,n,a)}break}default:{const e=new eU(m)
e.displaysIcon=!1,c.overlay=e
break}}return u||(c.title=U(t,RD)),c.media=new HM(m.icon,d,p),c.media.impressionMetrics=m.impressionMetrics,c}finally{cc(a.locationTracker)}})}(e,t,n,a)
break
case Db:h=function(e,t,n,o){return $f.context("contentCard",()=>{const i=lu(e,t,o,n)
uu(0,t,i,o)
try{const a=mu(0,t),c=ru(0,a)
if(c){const t=Mi(e,c,{offerStyle:pk,metricsOptions:{pageInformation:o.pageInformation,locationTracker:o.locationTracker},artworkUseCase:1})
return t?(t.theme=ID,i.media=new qM(t),i.media.impressionMetrics=t.impressionMetrics,i.media.impressionMetrics.fields[GP]=i.impressionMetrics.fields.id,i.style=tN,i):null}{const c=U(t,_k)
if(c===D_)return function(e,t,n,o,i){var a,c,f,d
if(!pn(e))return null
let p
const h=we(t,yD)
if(h.length>0)p=h[0]
else{const e=we(t,ND)
if(0===e.length)return null
p=e[0]}const w=U(t,_k),g=x(t,nu(0,Db,w)),m=du(e,g,o.prevailingCropCode)
if(r(m))return null
const y=null!==(a=N(l(g,vh)))&&void 0!==a?a:F(uv),T=L(y,80),A=L(null!==(c=N(l(g,lv)))&&void 0!==c?c:F(uv))?hN:dD,E={pageInformation:i.pageInformation,locationTracker:i.locationTracker,targetType:IR},P=zn(e,p,null,!1,!1,T?hN:dD,T?tN:Fm,!0,!0,E,!0,!0,U(t,RD),!1,u(o.allowUnpublishedAppEventPreviews))
if(r(P)||P instanceof Date)return er(P,i.refreshController),null
const I=P,S=null!==(f=xa(e,t,FN))&&void 0!==f?f:I.title,v=null!==(d=xa(e,t,aD))&&void 0!==d?d:I.subtitle
return n.heading=I.kind,n.title=S,n.media=new KM(I.formattedDates,I.startDate,m,y,v,A),s(I.lockup)&&(n.overlay=new aU(I.lockup)),n.style=T?hN:dD,n}(e,t,i,n,o)
const f=nu(0,Db,c),d=au(e,t,i,f,n.prevailingCropCode)
if(d){const r=U(t,jD),s=gu(0,d.style,r),a=yu(e,t,n,o,!0,s)
return iu(e,t,d,a,n),null!==i.overlay&&i.overlay instanceof rU&&(i.overlay.style=tN),i}if(1===a.length){const r=yu(e,t,n,o,!0)
if(1!==r.length)return null
const s=r[0]
return i.media=new VM(s.icon),iu(e,t,i,r,n),null!==i.overlay&&i.overlay instanceof eU&&(i.overlay.displaysIcon=!1),i}{const r=a.filter(t=>{const n=Da(e,t)
return!Ra(e,t)||!n})
let s,c,u=U(t,hk)
switch(u&&n.coercedGeneralCardSubType&&(u=n.coercedGeneralCardSubType),u||(u=n.coercedGeneralCardSubType),"tv"===e.client.deviceType?(s=3,c=2):(s=4,c=5),u){case Yv:case zv:{const r=yu(e,t,n,o,!1)
if(r.length<s&&n.enableListCardToMultiAppFallback)return fu(e,t,r,i),i
if(u===zv){let e=1
for(const t of r)t.ordinal=`${e}`,e++}return i.style=tN,i.media=new jM(r,null),i}case QI:{n.canDisplayArcadeOfferButton=!1
const s=Tu(e,r,n,o,!0)
return 0===s.length?null:s.length<c?(fu(e,t,s,i),i):(i.style=tN,i.media=new YM(s),i)}case pR:{n.canDisplayArcadeOfferButton=!1
const s=Tu(e,r,n,o,!0)
if(0===s.length)return null
if(s.length<=c)return fu(e,t,s,i),i
const a=s.length%2!=0
let u
s.length<=9&&a&&"tv"!==e.client.deviceType&&s.pop(),i.style=tN
const l=s.length
return u=l<=13?rb:l<=25?pm:EC,i.media=new zM(s,u),i}default:return null}}}}finally{cc(o.locationTracker)}})}(e,t,n,a)
break
case k_:h=function(e,t,n,r){return $f.context("mediaCard",()=>{const o=lu(e,t,r,n)
uu(0,t,o,r)
try{switch(U(t,_k)){case uS:return function(e,t,n,r,o){const s=function(e,t){let n
const r=x(t,"editorialVideo.storeFrontVideo4x3"),o=x(t,"editorialVideo.storeFrontVideo")
return n=e.client.isPad||e.client.screenSize.isEqualTo(IH)?r||o:o||r,n}(e,t)
if(!s)return null
const a=ta(e,d(s,_O),{withJoeColorPlaceholder:!0,useCase:15})
if(!a)return null
const c=l(s,Rk)
if(!c)return null
let u={prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0}
i(r.videoPlaybackControls)&&(u=r.videoPlaybackControls)
let f={prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}
i(r.videoPlaybackControls)&&(f=r.videoAutoplayPlaybackControls)
const p=$a(e,t,aD),h=new wL(c,a,{playbackControls:u,autoPlayPlaybackControls:f,canPlayFullScreen:r.enableFullScreenVideo})
return tn(e,h,{pageInformation:o.pageInformation,locationTracker:o.locationTracker,id:t.id}),n.style=tN,n.media=new JM(h,p),n.overlay=new sU(n.heading,n.title,p),n.title=null,n.collapsedHeading=Zc(0,n),n.heading=null,n}(e,t,o,n,r)
case"FullBleedImage":const s=nu(0,k_),a=au(e,t,o,s,n.prevailingCropCode)
return iu(e,t,a,[],n),a
default:return null}}finally{cc(r.locationTracker)}})}(e,t,n,a)
break
default:h=null}if(r(h))return null
h.inlineDescription=$a(e,t,aD),G(t,sS)&&(h=function(e,t,n,r,o){let s=fo(e,n)
!s&&r&&(s=po(0,r.arcadeUpsellEditorialResponse))
const i=function(e,t,n){if(!function(e){const t=e.host.platform
return t===HR||t===Ak}(e))return null
const r=Hi(e,t,n,0,ID,dD)
return new iU(r)}(e,s,o)
return i&&(t.overlay=i,t.impressionMetrics.fields[cw]=!0),t}(e,h,t,c,a))
const w=new BM,g=tu(e,t,n.heroDisplayContext,0,n.prevailingCropCode)
return s(g)&&(w.art=g),s(h.media)&&h.media instanceof JM&&(w.video=h.media.video),r(h)?null:h})}function tu(e,t,n,r,o){return du(e,x(t,"editorialArtwork.crossoverCard"),function(e,t,n){return n}(0,0,o))}function nu(e,t,n){switch(t){case jR:return km
case Db:return n===D_?Dm:Nm
case k_:return AP
default:return null}}function ru(e,t){if(1===t.length){const e=t[0]
if(e.type===rD)return e}return null}function ou(e,t,n,o,a,c){return $f.context("todayCardFromAdStitcher",()=>{var u
const f=Jo(t,o)
if(r(f))return null
const d=f.data,p=lu(e,d,c,a),h=fn(e,d,l(d.attributes.name),{targetType:kR,pageInformation:c.pageInformation,locationTracker:c.locationTracker,isAdvert:!0})
h.kind="adItem"
const w=re(e,d)
h.productVariantData=w
const g=h
let m
h.pageInformation.iAdInfo.apply(e,d),s(a)&&(m=a.clientIdentifierOverride),un(0,p,h,null,null,!1,null,!1),p.style=hN,uu(0,d,p,c),yc(e)===Y_&&(null===(u=h.pageInformation.iAdInfo)||void 0===u||u.setTemplateType(Lh))
let y=!1
try{let t=su(e,d,a,c)
if(r(t))return Rc(e,n,d),null
switch(yc(e)){case Y_:p.media=new XM(t,t.icon),p.media.impressionMetrics=t.impressionMetrics
break
case aO:if(p.media=function(e,t,n){var r,o,s,a,c,u
const l=Ec(e,t),f=t[0],d=e[0],p=null!==(a=null===(s=null===(o=null===(r=null==d?void 0:d[0])||void 0===r?void 0:r.videos)||void 0===o?void 0:o[0])||void 0===s?void 0:s.preview.isPortrait())&&void 0!==a&&a
let h=!0;(l.landscape<5||l.portrait>=4&&p)&&(h=!1)
const w=(null!==(c=null==f?void 0:f.artwork)&&void 0!==c?c:[]).filter(e=>h?e.isLandscape():e.isPortrait()),g=new KN(w,null==f?void 0:f.mediaPlatform)
let m=[]
if(i(null==d?void 0:d.videos)){const e=d.videos.filter(e=>h?e.preview.isLandscape():e.preview.isPortrait()).slice(0,1)
m=[new Xx(e,d.mediaPlatform)]}const y=["RIVER_",h?"L":"P",i(m)?"V":"I",h?l.landscape:l.portrait].join("")
return null===(u=n.iAdInfo)||void 0===u||u.setTemplateType(y),new ZM(m,[g])}(t.trailers,t.screenshots,h.pageInformation),t=su(e,d,a,c),r(t))return null
p.overlay=new cU(t)
break
default:return null}return cc(c.locationTracker),y=!0,p.clickAction=qi(e,d,g,m),function(e,t,n,r){const o=ns(e,t,r),s=Fa(e,t)?xO:LP,i=os(0,r),a=new AV(o.instanceId,t.id,s,_h,i)
n.clickAction=rs(e,n.clickAction,a)}(e,d,p,h),p}finally{y||cc(c.locationTracker)}})}function su(e,t,n,r){return Vi(e,t,{offerEnvironment:"dark",offerStyle:"white",metricsOptions:{pageInformation:r.pageInformation,locationTracker:r.locationTracker,isAdvert:!0,disableFastImpressionsForAds:!0},clientIdentifierOverride:n.clientIdentifierOverride,crossLinkSubtitle:n.crossLinkSubtitle,artworkUseCase:1,canDisplayArcadeOfferButton:n.canDisplayArcadeOfferButton},{allowsAutoPlay:!0,looping:!0,showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}},null,!1)}function iu(e,t,n,r,o){if(!n)return
const a=$a(e,t,aD),c=G(t,"ignoreITunesShortNotes"),u=r&&0!==r.length,l=u&&1===r.length,f=i(rt(0,t)),d=l&&f,p=s(n.media)&&n.media.kind===eb&&(l||u)&&o.isSearchContext
if(!a||c||d||p){if(l)n.overlay=new eU(r[0])
else if(u){const e=new nU(r)
e.displaysTitle=!1,n.overlay=e}}else n.overlay=new rU(new iL(a,tD,Lm))}function au(e,t,n,r,o){return $f.context("cardWithArtwork",()=>{if(G(t,Rm))return null
const s=x(t,r),i=du(e,s,o)
return i?(n.media=new GM(i,pu(0,t,r)),n.style=hu(0,s),n.clickAction instanceof WL&&(n.overlay=new oU(n.clickAction),n.style=tN),n):null})}function cu(e){const t=U(e,hk)
let n=U(e,ZI)
return r(n)&&t===JC?n="FEATURED APP":r(n)&&t===zC&&(n="FEATURED GAME"),n}function uu(e,t,n,r){ic({pageInformation:r.pageInformation,locationTracker:r.locationTracker,targetType:kR,idType:PR,id:t.id},n.title)}function lu(e,t,n,o){return $f.context("basicCard",()=>{var i
const a=new uU,c=U(t,RD),l=U(t,jD),f=U(t,hk),d=U(t,_k)
a.heading=c
let p=$a(e,t,FN)
r(p)&&l===jR&&(p=U(t,RD)),a.title=p
const h=u(t,NH),w={cardType:l,franchise:c}
s(f)&&(w[fw]=f),h&&(w[dw]=h)
const g=null!==(i=null==o?void 0:o.isAdEligible)&&void 0!==i&&i,m=fn(e,t,p,{targetType:kR,pageInformation:n.pageInformation,locationTracker:n.locationTracker,isAdEligible:g}),y=m
if(y[FR]=w,d===D_){const e=we(t,yD)
let n
if(e.length>0)n=e[0]
else{const e=we(t,ND)
e.length>0&&(n=e[0])}if(s(n)){y.inAppEventId=n.id
const e=he(n,gN)
s(e)&&(y.relatedSubjectIds=[e.id])}}let T
return s(o)&&(T=o.clientIdentifierOverride),a.clickAction=Ji(e,t,y,T,n.currentShelfRecoMetricsData),un(0,a,m,c,l,h,f),a})}function fu(e,t,n,r){const o=$a(e,t,aD)
if(r.media=new WM(n,o),r.clickAction instanceof VL){const e=Ox.from(r.clickAction.pageUrl)
e.param(q$,SD),r.clickAction.pageUrl=e.build()}}function du(e,t,n){if(t){const r=ta(e,t,{withJoeColorPlaceholder:!0,useCase:15})
return r.crop=n||"sr",r}return null}function pu(e,t,n){const r=x(t,n)
return s(r)?l(r,"bgGradientKind"):null}function hu(e,t){if(o(t))return null
const n=N(l(t,lv)),r=c(t,pp).map(e=>N(e)),s=2===r.length
return n||s?s?L(r[0])?dD:hN:L(n)?hN:dD:null}function wu(e,t){let n=xa(e,t,aD)
return i(n)||(n=$a(e,t,FN)),i(n)||U(t,jD)===jR&&(n=U(t,RD)),n}function gu(e,t,n){if(n!==jR)return null
switch(t){case hN:return"darkBrandedTodayCard"
case dD:return"lightBrandedTodayCard"
default:return null}}function mu(e,t){return we(t,ND)}function yu(e,t,n,r,o,s,i){return Tu(e,we(t,ND),n,r,o,s,i,rt(0,t))}function Tu(e,t,n,r,s,a,c,u){return o(t)?[]:Wi(e,t.filter(e=>!i(e.attributes)||e.type!==rD),{lockupOptions:{metricsOptions:{pageInformation:r.pageInformation,locationTracker:r.locationTracker},offerEnvironment:a,offerStyle:c,clientIdentifierOverride:n.clientIdentifierOverride,externalDeepLinkUrl:u,crossLinkSubtitle:n.crossLinkSubtitle,artworkUseCase:1,canDisplayArcadeOfferButton:n.canDisplayArcadeOfferButton},shouldIgnoreLocationIncrement:s,filter:11134})}function Au(e,t,n,r){const o=t.ids
return o&&o.length?`${RF}:/${WF}/${LF}/`+Eu(t,n,r):null}function Eu(e,t,n){return e.sourcePageInformation=t.metricsPageInformation,e.sourceLocationTracker=t.locationTracker,e.destinationPageInformation=n,encodeURIComponent(JSON.stringify(e))}function Pu(e,t,n,o,s,i,a,c){if(!t.data||0===t.data.length)return null
const u=[]
return{items:ji(e,t,{lockupOptions:{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,recoMetricsData:c},artworkUseCase:o,canDisplayArcadeOfferButton:Ha(0,s),...r(i)?{}:{offerStyle:i}},shouldConsiderDataPastLastAvailable:!0,contentUnavailable:(e,t)=>(u.push(e),!1),filter:a}),unavailableIds:u}}function Iu(e,t,n){if(!n)return
let r=-1,o=null
n.forEach((e,n)=>{const s=e,i=s,a=s&&s.adamId===t,c=i&&i.productIdentifier===t;(a||c)&&(r=n,o=s,i&&(i.theme="spotlight",i.offerDisplayProperties=i.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,pk,"ad",H_)))}),-1!==r&&(n.splice(r,1),n.splice(0,0,o))}function Su(e){if(-1===YH.indexOf(e.media.kind))return!1
const t=e.clickAction
if(!t)return!0
const n=t.pageUrl
if(!n)return!0
const r=new Ox(n),o=vu()
for(const e of o)if(new Rx(e).matches(r))return!1
return!0}function vu(){return[{protocol:kF,path:`/{countryCode}/${WF}/{appName}/{id}`,query:[`${_$}?`,`${A$}?`,`${Z$}?`,`${ux}?`,`${hx}?`,`${V$}?`]},{protocol:kF,path:`/{countryCode}/${YF}/{appName}/{id}`,query:[`${_$}?`,`${A$}?`,`${hx}?`,`${V$}?`]},{protocol:kF,path:`/{countryCode}/${WF}/{id}`,query:[`${_$}?`,`${A$}?`,`${ux}?`,`${hx}?`,`${V$}?`]},{protocol:kF,path:`/{countryCode}/${YF}/{id}`,query:[`${_$}?`,`${A$}?`,`${hx}?`,`${V$}?`]},{protocol:kF,path:`/${WF}/{appName}/{id}`,query:[`${_$}?`,`${A$}?`,`${ux}?`,`${hx}?`,`${V$}?`]},{protocol:kF,path:`/${YF}/{appName}/{id}`,query:[`${_$}?`,`${A$}?`,`${hx}?`,`${V$}?`]},{protocol:kF,path:`/${WF}/{id}`,query:[`${_$}?`,`${A$}?`,`${ux}?`,`${hx}?`,`${V$}?`]},{protocol:kF,path:`/${WF}/{id}`,query:[`${v$}?`,`${cx}?`,`${hx}?`,`${V$}?`]},{protocol:kF,path:`/${YF}/{id}`,query:[`${_$}?`,`${A$}?`,`${hx}?`,`${V$}?`]},{protocol:kF,query:[y$,`${hx}?`,`${V$}?`]},{protocol:kF,query:[_$,d$,`${G$}?`,`${hx}?`,`${V$}?`]},{protocol:kF,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/catalog/{countryCode}/apps/{id}",query:[`${hx}?`,`${V$}?`]},{protocol:kF,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/catalog/{countryCode}/app-bundles/{id}",query:[]},{protocol:kF,path:"{apiVersion}/catalog/{countryCode}/apps/{id}",query:[`${hx}?`,`${V$}?`]},{protocol:kF,path:"{apiVersion}/catalog/{countryCode}/app-bundles/{id}",query:[`${hx}?`,`${V$}?`]},{protocol:kF,hostName:`${i$}`,path:`/${qF}/{id}`,query:[`${hx}?`,`${V$}?`]},{protocol:kF,path:`/${FF}/${UF}`,query:[f$,`${v$}?`,`${hx}?`,`${V$}?`]},{protocol:RF,path:`/${WF}/{id}`,query:[ax,`${cx}?`,`${ux}?`,`${hx}?`,`${V$}?`]}]}function _u(e,t,n){const r=n[qD],o=JSON.parse(r)
let s
if(o.isBundleShelf)s=TN
else switch(o.contentType){case Mk:case tR:s=iN
break
case SO:s=rD
break
default:s=NN}const i=[cN,sN,kD]
return e.appleSilicon.isSupportEnabled&&i.push(PD),new xM(e).forType(s).withIds(o.ids).includingAdditionalPlatforms(v(e)).includingAttributes(s===rD?[]:i)}function Cu(e,t,n,i,a=!1){const c=n[qD],u=JSON.parse(c,(t,n)=>typeof n===gb&&"iAdInfo"===t?RH.from(e,n):n)
n[px]===Sx&&GV.resetLocationTrackerForSimilarItemsDuringDownloadShelf(e,u)
const l=function(e,t,n,o){return $f.context("shelfFromLookupResponse",()=>{var i,a
const c=new CM(n.contentType),u=D(t),l={pageInformation:n.sourcePageInformation,locationTracker:n.sourceLocationTracker,excludeAttribution:!0,recoMetricsData:null!=u?u:n.recoMetricsData}
let d
switch(n.contentType){case tR:const u=Qc(e,t.data,l.pageInformation,l.locationTracker,Su)
s(u)&&(d=[u])
break
case Mk:const p={metricsLocationTracker:l.locationTracker,metricsPageInformation:l.pageInformation,filterOutMediaCardKinds:Ou(e.host.platform)},h={useThreeLineOverlayForBranded:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,videoPlaybackControls:{prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1},videoAutoplayPlaybackControls:{prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1}}
d=zc(e,t.data,n.contentType,p,null,h).filter(e=>Yc(0,e.media.kind,Mk))
break
default:const w={metricsOptions:l,offerStyle:n.offerStyle,artworkUseCase:ea(0,n.contentType),canDisplayArcadeOfferButton:Ha(0,n.contentType)}
n.contentType===SO&&(w.skipDefaultClickAction=!0)
const g={lockupOptions:w}
let m
if(n.isBundleShelf&&(g.filter=0),mc(e,eN)||mc(e,UD)){m=Oc(0,n.sourcePageInformation.iAdInfo),kc(e,m,o)
const s=function(e,t){var n
const o=null===(n=null==t?void 0:t.onDeviceAd)||void 0===n?void 0:n.positionInfo
if(r(o))return null
let s
switch(t.placementType){case eN:s=Wb
break
case UD:s=gE}return Xo(0,t,{shelfIdentifier:s,slot:f(o,wE)-1})}(0,o)
null===(i=l.pageInformation.iAdInfo)||void 0===i||i.updateForAdResponse(e,o)
const c=function(e,t){if(r(e))return[]
const n=[]
return Object.entries(e.tasks).forEach(([r,o])=>{r.startsWith(t)&&(n.push(o),delete e.tasks[r])}),n}(s,null===(a=lc(n.sourceLocationTracker))||void 0===a?void 0:a.id)
c.forEach(e=>{t.data=t.data.filter(t=>t.id!==e.data.id),t.data.splice(e.positionInfo.slot,0,e.data)})}const y=ji(e,t,g),T={[yL]:pC,[TL]:vO}[e.host.clientIdentifier]
T&&y.sort((e,t)=>{const n=e.icon.style===T,r=t.icon.style===T
return n&&r?0:n&&!r?-1:1})
const A=n.spotlightInAppProductIdentifier
A&&Iu(0,A,y),c.adIncidents=bc(0,m),d=y}return c.items=d,c})}(e,t,u,i)
if(l.mergeWhenFetched=!0,a&&function(e,t,n,o){var s,i,a,c
if(!r(n))if(e.props.enabled("pageChangeUpdatedMetricsEvents")){let r=[]
const s=ct(n),i=Hn(e,n,o)
r.push(i)
const a=qn(e,n,o).map(e=>e.data)
r=r.concat(a),Vn(s),r.forEach(e=>Vn(e.fields)),t.pageChangeMetrics={pageFields:s,updatedEvents:r,pageEventFields:{},impressionsEventFields:{},fastImpressionsEventFields:{}}}else{const r=ct(n),u=Hn(e,n,o).fields,l=qn(e,n,o),f=null!==(i=null===(s=l.find(e=>e.data.fields[Sb]===Hh))||void 0===s?void 0:s.data.fields)&&void 0!==i?i:{},d=null!==(c=null===(a=l.find(e=>e.data.fields[Sb]===Qv))||void 0===a?void 0:a.data.fields)&&void 0!==c?c:{}
Vn(r),Vn(u),Vn(f),Vn(d),t.pageChangeMetrics={pageFields:r,updatedEvents:[],pageEventFields:u,impressionsEventFields:f,fastImpressionsEventFields:d}}}(e,l,u.sourcePageInformation),l.refreshUrl=u.refreshUrl,n[px]===Sx&&GV.addImpressionsFieldsToSimilarItemsDuringDownloadShelf(e,l,u),u.shouldInferSeeAllFromFetchesItems){const t=new VL(yN)
t.title=e.loc.string(Sk)
const n=new CM(l.contentType)
n.items=function(e,t,n,r=!1){if(!t)return null
let o=0
const i=[]
for(const e of t){if(r&&s(e.searchAd)){o+=1
continue}const t=y(e)
if(n&&t.offerDisplayProperties&&(t.offerDisplayProperties=t.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,n)),o>0){const e=y(t.impressionMetrics.fields),n=f(e.impressionIndex);(0,Wf.isSome)(n)&&(e.impressionIndex=n-o,t.impressionMetrics=new UL(e,t.impressionMetrics.id,t.impressionMetrics.custom))}i.push(t)}return i}(0,l.items,ID,!0)
const r=new DM([n])
Mn(e,r,u.destinationPageInformation),r.title=u.title,t.pageData=r,et(e,t,null,{pageInformation:u.sourcePageInformation,locationTracker:u.sourceLocationTracker}),l.seeAllAction=t}return o(l.items)&&!u.hasExistingContent&&(l.isHidden=!0),l}function Ou(e){const t=new Set([eb])
return e===Ak&&(t.add(Tk),t.add(HA),t.add(wR),t.add(jA)),t}async function bu(e,t){const n=e.required(zH)
return 0!==fr(e,new Ox(t.url)).length&&e.network.fetch({url:e.bag.redirectUrlEndpoint,method:SR,headers:{"Content-Type":mO},body:`url=${encodeURIComponent(t.url)}`}),await n.fetchAction(e,t.url,t.referrerData).then(n=>{if(!n)throw new Error(`Promise resolved to null action for: ${t.url}`)
if(t.isIncomingURL){const e=[n]
if(n instanceof HL)for(const t of n.actions)e.push(t)
for(const t of e){const e=t.pageData
e&&DE in e&&Gn(0,e)}}if(n.actionClass===kS){const e=n
e.page===nD||e.page===FD||e.page===NE||e.page===zR||e.page===fO||e.page===dO?e.presentationContext=ID:e.page===hp?e.presentationContext=tE:t.isIncomingURL?e.presentationContext=fE:(e.presentationContext="replace",e.animationBehavior=AD)}return t.isIncomingURL&&(e.deepLinks.hasResilientDeepLinks()||e.deepLinks.removeDeepLink(t.url)),n}).catch(n=>{let r=[]
n instanceof PV?r=n.reasons.filter(e=>e instanceof CG):n instanceof CG&&r.push(n)
for(const n of r)if(204===n.statusCode){const n=new aF(fN)
n.title=e.loc.string("APP_NOT_AVAILABLE_TITLE"),n.message=e.loc.string("APP_NOT_AVAILABLE_MESSAGE"),n.isCancelable=!0
{const r=new HL(AN)
if(r.title=e.loc.string(LE),h(new Ox(t.url).query[wp])){const e=new SF
r.actions=[n,e]}else r.actions=[n]
return r}}throw Error(n.message)})}function Ru(e,t,n){switch(t){case oE:return function(e,t){const n=ku(e,e.bag.accountUrl)
return n.title=e.loc.string("VIEW_ACCOUNT_INFO",uE),Qe(e,n,{...t,id:CD,actionType:QD},!1,ab),n}(e,n)
case sE:return function(e,t){const n=ku(e,yd)
return n.title=e.loc.string("ACCOUNT_CREATE_APPLE_ID","Create New Apple ID"),Qe(e,n,{...t,id:CD,actionType:QD},!1,ab),n}(e,n)
case cO:return function(e,t){if(e.user&&e.user.isManagedAppleID)return null
const n=ku(e,e.bag.redeemUrl)
return n.title=e.loc.string("ACCOUNT_REDEEM",lE),Qe(e,n,{...t,id:"redeemGiftCardOrCode",actionType:QD},!1,ab),n}(e,n)
case iE:return function(e,t){if(!e.bag.isMonetaryGiftingEnabled)return null
const n=ku(e,J_)
return n.title=e.loc.string("ACCOUNT_SEND_GIFT",Nd),Qe(e,n,{...t,id:"sendGiftCardByEmail",actionType:QD},!1,ab),n}(e,n)
case aE:return function(e,t){var n
const r=e.bag.accountTopUpURL
if(o(r))return null
const s=ku(e,r)
return s.title=null!==(n=e.bag.accountTopUpTitle)&&void 0!==n?n:e.loc.string("ACCOUNT_TOP_UP"),Qe(e,s,{...t,id:"addFundsToAppleId",actionType:QD},!1,ab),s}(e,n)
case cE:return function(e,t){const n=new pF(WR,Ld)
return n.title=e.loc.string("ACCOUNT_SETUP_FAMILY_SHARING"),Qe(e,n,{...t,id:"setUpFamilySharing",actionType:QD},!1,ab),n}(e,n)
case YS:return function(e,t){const n=ku(e,e.bag.manageSubscriptionsV2Url)
return n.title=e.loc.string("ACCOUNT_SUBSCRIPTIONS"),n.presentationContext=fE,Qe(e,n,{...t,id:YS,actionType:QD},!1,ab),n}(e,n)
default:return null}}function ku(e,t){const n=e.bag.dynamicUIRegexStrings
for(const e of n){const n=e.replace(/\//g,"\\/")
if(new RegExp(n).test(t)){const e=new VL(fO,t)
return e.pageData=new oB,e}}const r=e.bag.webViewRegexStrings
for(const e of r){const n=e.replace(/\//g,"\\/")
if(new RegExp(n).test(t))return new VL(dO,t)}return new VL(nD,t)}async function Du(e){const t=new ij,n={pageInformation:xn(e,uE,CD,""),locationTracker:{rootPosition:0,locationStack:[]},targetType:nN}
return t.links[oE]=Ru(e,oE,n),t.links[sE]=Ru(e,sE,n),t.links[cO]=Ru(e,cO,n),t.links[iE]=Ru(e,iE,n),t.links[aE]=Ru(e,aE,n),t.links[cE]=Ru(e,cE,n),t.links[YS]=Ru(e,YS,n),await Promise.resolve(t)}async function Nu(e,t){return await e.required(zH).fetchPage(e,t,ej)}function Lu(e,t){const r=[],o=new tj,s={}
s[e.loc.string(dS)]=new VL(nD,CD)
const a=new sL(e.loc.string("PERSONALIZATION_DESCRIPTION_FOOTER_OPTED_IN").replace("{account_settings}",e.loc.string(dS)))
o.footer=new aM(a,s)
const c=new iL(e.loc.string("PERSONALIZATION_DESCRIPTION_OPTED_IN"),tD,pS)
if(o.addContentItem(new sj(c)),r.push(o),e.client.isPhone){const t=new tj(e.loc.string("PERSONALIZATION_SECTION_USAGE_HEADER")),n=new sL(e.loc.string("PERSONALIZATION_SECTION_USAGE_FOOTER"))
t.footer=new aM(n),t.addContentItem(new rj(e.loc.string("PERSONALIZATION_SECTION_USAGE_CLEAR_DATA"),function(e){const t=new OF
t.title=e.loc.string("PERSONALIZATION_CLEAR_USAGE_DATA_CONFIRMATION_TITLE")
const n=new iF([t])
return n.title=e.loc.string("PERSONALIZATION_CLEAR_USAGE_DATA_CONFIRMATION_HEADER"),n.isCancelable=!0,n.destructiveActionIndex=0,n}(e))),r.push(t)}const u=new tj(e.loc.string("PERSONALIZATION_INTERACTIONS")),f=new sL(e.loc.string("PERSONALIZATION_INTERACTIONS_FOOTER"))
u.footer=new aM(f),u.addContentItem(new rj(e.loc.string("PERSONALIZATION_PURCHASES"),Fu(e,gd,null,!0),XC)),u.addContentItem(new rj(e.loc.string("PERSONALIZATION_SUBSCRIPTIONS"),Fu(e,null,e.bag.manageSubscriptionsV2Url,!1),XC)),u.addContentItem(new rj(e.loc.string("PERSONALIZATION_PREORDERS"),Fu(e,null,e.bag.managePreordersUrl,!0),XC)),u.addContentItem(new rj(e.loc.string("PERSONALIZATION_RATINGS"),Fu(e,null,"https://itunes.apple.com/WebObjects/MZStore.woa/wa/genericPageTemplate?pageComponent=finance_internet_eraser_page&additionalResources=p7financebootstrap",!0),XC)),r.push(u)
const d=new tj(e.loc.string("PERSONALIZATION_ADDITIONAL_INFO")),p=[e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_1"),e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_2"),e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_3"),e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_4"),e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_5")].join("\n"),h=new iL(p,tD,pS)
d.addContentItem(new sj(h)),r.push(d)
const w=n(t,"results.derived-user-info")
if(i(w)){const t=new tj(e.loc.string("ACCOUNT_INFO")),n=["gender","birthyear"]
for(const e of n){const n=l(w,`${e}.label`),r=l(w,`${e}.value`)
i(n)&&i(r)&&t.addContentItem(new oj(n,r))}const o=new sL(e.loc.string("PERSONALIZATION_ACCOUNT_INFO_FOOTER"))
t.footer=new aM(o),r.push(t)}return new ej(e.loc.string(Hm),r)}function Fu(e,t,n,r){let o
if((0,Uf.isSome)(t))o=new VL(t,n)
else{if((0,Uf.isNothing)(n))return null
o=(()=>{const t=e.bag.dynamicUIRegexStrings
for(const e of t){const t=e.replace(/\//g,"\\/")
if(new RegExp(t).test(n)){const e=new VL(fO,n)
return e.pageData=new oB,e}}const r=e.bag.webViewRegexStrings
for(const e of r){const t=e.replace(/\//g,"\\/")
if(new RegExp(t).test(n))return new VL(dO,n)}return new VL(nD,n)})()}return r&&(o.presentationContext=fE),o}async function $u(e,t){const n=new xM(e).forType(jm).addingQuery(sm,"events-reminders").addingQuery("service",JA).addingQuery(qk,"explicit")
n.isMediaRealmRequest=!0
const r=function(e,t){const n={"events-reminders":{"com.apple.AppStore":{contents:[{id:e,type:PN,notify:t}]}}}
return{method:"PATCH",headers:{"Content-Type":"application/json"},requestBodyString:JSON.stringify(n)}}(t.appEventId,t.shouldSchedule)
return await new Promise((t,o)=>{lr(e,n,r).then(e=>{t(!0)}).catch(e=>{o(e)})})}function xu(e){Pj||(Pj=!0,Ij=new lj(e.loc.string("PAGE_FACETS_SORTS_RELEASE_DATE"),hj,j_),Sj=new lj(e.loc.string("PAGE_FACETS_SORTS_LAST_UPDATED"),wj,"lastUpdated"),vj=new lj(e.loc.string("PAGE_FACETS_SORTS_NAME"),gj,FN),_j=new lj(e.loc.string("PAGE_FACETS_SORTS_CATEGORY"),mj,lb),Cj=new lj(e.loc.string("PAGE_FACETS_DEFAULT_ALL"),null),Oj=new lj(e.loc.string("PAGE_FACETS_FILTERS_AGE_VALUE_4PLUS"),"4Plus"),bj=new lj(e.loc.string("PAGE_FACETS_FILTERS_AGE_VALUE_9PLUS"),"9Plus"),Rj=new lj(e.loc.string("PAGE_FACETS_FILTERS_AGE_VALUE_12PLUS"),"12Plus"),kj=new lj(e.loc.string(np),SD),Dj=new lj(e.loc.string("PAGE_FACETS_FILTERS_MULTIPLAYER"),SD),Nj=new lj(e.loc.string(rp),SD),Ej[X$]={releaseDate:[Ij],lastUpdated:[Sj],name:[vj],category:[_j]},Ej[rx]={"4plus":[Oj],"9plus":[bj],"12plus":[Rj]},Ej[ox]={true:[kj],false:[]},Ej[sx]={true:[Dj],false:[]},Ej[ix]={true:[Nj],false:[]})}function Mu(e,t={}){xu(e)
const n={"filter[ageRating]":[Cj]}
n.groupBy=[Ij],n.with=[Nj]
const r=[X$,rx,ox,sx,ix]
for(const e of r){const r=t[e]
if(o(r))continue
const a=Ej[e][r],c=Lj[e]
s(a)&&i(c)&&(n[`${c}`]=a)}return n}function Uu(e,t){const n=new hF
return tt(e,n,t),n}function Bu(e){const t=[cN,sN,zk,oD,vR,ZR]
return e.appleSilicon.isSupportEnabled&&t.push(PD),t}async function Gu(e,t){const n=e.required(zH),r=Ox.from(t.url)
return r.param(nx,JSON.stringify(t)),await n.fetchPage(e,r.build(),$M)}async function Vu(e,t){const n=e.required(zH)
return await n.fetchMoreOfPage(e,t).then(function(e){return e})}function Hu(e,t,n){return $f.context("createShelves",()=>{const r=[]
if(0===t.length)return r
let o=!1
for(const i of t)if(o=o||!H(i.data[0]),o)n.remainingGroups.push(i)
else{const t={index:n.lastShelfIndex,title:qu(e,i),contentType:(s=n.isCompactMode,s?uN:CO),shouldFilter:!1,remainingContent:i.data,groupKind:i.kind,isCompactMode:n.isCompactMode,hasExistingContent:!1,isFirstRender:!0,metricsPageInformation:n.metricsPageInformation,metricsLocationTracker:n.metricsLocationTracker},o=ju(e,t)
r.push(o),n.lastShelfIndex++}var s
return r})}function ju(e,t){const n=[],r=new CM(t.contentType)
r.title=t.title,r.presentationHints={showSupplementaryText:!1},r.isHorizontal=t.groupKind===IE||t.groupKind===lb
const s={id:`${t.index}`,kind:null,softwareType:null,targetType:KD,title:r.title,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,idType:WD}
for(cn(0,r,s),ic(s,r.title);i(t.remainingContent)&&H(t.remainingContent[0]);){const r=t.remainingContent.shift(),o={metricsOptions:{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:D(r)},artworkUseCase:1,canDisplayArcadeOfferButton:Ha(0,t.contentType),shouldHideArcadeHeader:e.featureFlags.isEnabled(cb)},s=Bi(e,r,o,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}})
Yu(e,s,r)&&(s.editorialTagline=null,s.developerTagline=null,n.push(s),dc(t.metricsLocationTracker))}return r.mergeWhenFetched=t.hasExistingContent,t.hasExistingContent=t.hasExistingContent||n.length>0,r.items=n,i(t.remainingContent)?r.url=function(e){return o(e.remainingContent)?null:`${RF}:/${GF}/${LF}/?${tx}=${encodeURIComponent(JSON.stringify(e))}`}(t):"tv"!==e.client.deviceType&&t.isCompactMode&&r.items.length<3&&(r.rowsPerColumn=r.items.length),cc(t.metricsLocationTracker),r}function Wu(e,t){const n=Mu(e,t),r={}
for(const e of Object.keys(n))r[e]=n[e].map(e=>({value:e.value,title:e.title,metricsValue:e.metricsValue}))
const o={url:`${RF}:/${GF}`,isCompactMode:!1,selectedFacetOptions:r},s=t[nx]
if(i(s)){const e=p(JSON.parse(s))
o.isCompactMode=e.isCompactMode,Object.assign(o.selectedFacetOptions,e.selectedFacetOptions)}return o}function qu(e,t){let n,r,o=null,s=null
switch(t.kind){case"releaseDateByDay":o=t.name.split("-"),s=new Date(parseInt(o[0]),parseInt(o[1])-1,parseInt(o[2])),r=e.loc.string("ALL_GAMES_SECTION_TITLE_RELEASE_DATE_SENTENCE"),n=e.loc.formatDateInSentence(r,qm,s)
break
case"lastUpdatedByDay":o=t.name.split("-"),s=new Date(parseInt(o[0]),parseInt(o[1])-1,parseInt(o[2])),r=e.loc.string("ALL_GAMES_SECTION_TITLE_LAST_UPDATED_SENTENCE"),n=e.loc.formatDateInSentence(r,qm,s)
break
case IE:n=e.loc.string(lI)
break
default:n=t.name}return n}function Yu(e,t,n){let r=!0
if(!i(t.trailers)){r=!1
const o=Ca(e,n)
if(i(o)){const e=new Xx
o.playbackControls={prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},o.autoPlayPlaybackControls={prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0},o.canPlayFullScreen=!0,e.videos=[o],t.trailers=[e],r=!0}}return r||function(e){const t=e.screenshots[0]
if(o(t))return
const n=t.artwork[0],r=new wL(xj,n,{allowsAutoPlay:!1,looping:!1,canPlayFullScreen:!1,showPlaybackControls:!1,autoPlayPlaybackControls:{},playbackControls:{}}),s=new Xx
s.videos=[r],e.trailers=[s]}(t),i(t.trailers)}async function zu(e,t){const n=Ox.from(t)
return await e.required(zH).fetchPage(e,n.build(),QU)}function Ju(e){let t=0,n=0
for(const r of e.shelves)i(r.batchGroup)||(r.batchGroup=`shelfBatchGroup_${t}`,n++,5===n&&(n=0,t++))}async function Ku(e,t){const n=Ox.from(t.url)
return n.param(O$,"true"),n.param(b$,`${t.isSubscribed}`),n.param(R$,`${t.isTrialAvailable}`),await e.required(zH).fetchPage(e,n.build(),FM)}function Zu(e,t){const n=new HL(ON)
n.popToRoot=!0
const r=new qL([n])
return r.title=t,r}async function Xu(e,t){return await e.required(zH).fetchPage(e,t,nB)}async function Qu(e,t){const n=new Promise((n,r)=>{const o=t
i(o)||r(new Error("fetchUpsellGrid called with malformed contentDictionary"))
const s=we(o,kN),a={pageInformation:new kH({}),locationTracker:{rootPosition:0,locationStack:[]}},c=ra(e,s,a,{useCase:2}),u=c.shift()
n(new sB(u,c))})
return await n}async function el(e,t){const n=p(t,qD)
let r=n.buyParams
r=ut(e,l(t,Xk),r,p(t,Km),u(t,Zm),l(t,Xm),l(t,Qm),l(t,mS),d(t,JR),d(t,ey),p(t,ty),l(t,ny),l(t,"token.extRefApp2"),l(t,"token.extRefUrl2"))
const o=new KU(r),s={product:l(t,pD)||n.productIdentifier,adamId:l(t,Xk),buyParams:o.toEncodedMap()}
return await Promise.resolve(s)}async function tl(e,t){const n=t.offerAction,o=t.offerDisplayProperties
if(!n||!o)return await Promise.reject(new Error("Invalid offerToken for personalized offer fetch."))
const s=n.adamId,i={"Content-Type":mO},a={url:e.bag.buyButtonMetadataURL,method:SR,headers:i,body:"ids="+s,signingStyle:yR},u=e.network.fetch(a)
return await u.then(t=>{if(!t.ok)throw Error(`Bad Status code ${t.status} for ${a.url}`)
const i=d(JSON.parse(t.body),s)
let u=null,f=null
const p=function(e,t){return $f.context("personalizedOfferTypeFromBuyButtonMetadata",()=>{const e=c(t,HO)
if(0===e.length)return null
for(const t of e){const e=l(t,ck)
if(e)return e}return uD})}(0,i)
if(r(p))throw new Error("fetchPersonalizedOfferContext: Failed to determine offer type from buyButtonMetadata")
if(p!==uD){let t=pk
u=function(e,t,n,o){return $f.context("personalizedCMCOfferActionFromBuyButtonMetadata",()=>{const o=c(t,HO)
if(0===o.length)return null
let s,i=null
for(const e of o)switch(s=l(e,ck),s){case l_:case ZA:i=e
break
default:i=null}if(!i)return null
let a=l(i,ib)
if(s===l_&&r(a))return $f.unexpectedNull(DD,LN,UP),null
a||(a="")
const u=n.purchaseConfiguration,f=new WN(a,u.vendor,u.appName,u.bundleId,u.appPlatforms,u.isPreorder,u.excludeAttribution,u.metricsPlatformDisplayStyle)
f.pageInformation=u.pageInformation
const d=Tt(e,i,n.adamId,f,!1)
return function(e,t,n,r){const o=n.purchaseConfiguration.pageInformation
let s
for(const e of n.actionMetrics.data)if(s=c(w(e.fields),ub),s)break
Ze(e,t,t.adamId,false,o,s,!1)}(e,d,n),d})}(e,i,n)
let s=null
switch(p){case ZA:t=QO,s=e.loc.string("BUNDLE_OFFER_BUTTON_TITLE_PURCHASED")
break
case l_:(r(u.price)||0===u.price)&&(s=e.loc.string(f_))}f=function(e,t,n,o,s){return r(t)?null:$f.context("personalizedCMCDisplayPropertiesFromBuyButtonMetadata",()=>{const r=new qN(n,t.adamId,s),i=gt(0,t)
r.isFree=i
let a=null
a=i?t.title:t.priceFormatted,r.titles[pN]=a
const c=o.hasInAppPurchases,u=o.hasExternalPurchases
if(r.hasInAppPurchases=c,r.hasExternalPurchases=u,u){const t=e.loc.string(tg)
r.subtitles[pN]=t}else if(c){const t=e.loc.string(ng)
r.subtitles[pN]=t}return r.contentRating=o.contentRating,r})}(e,u,gN,o,t),s&&(f.titles[pN]=s)}const h=St(e,u,!1)
return new YN(p,h,f)})}async function nl(e,t){let n=l(t,"token.buyParams")
const r=l(t,"overrideBuyParams")
s(r)&&(n=function(e,t){const n=new KU(e),r=new KU(t),s=n.get(uB.placementId,null)
i(s)&&o(r.get(uB.placementId,null))&&r.set(uB.placementId,s,null)
const a=n.get(uB.containerId,null)
i(a)&&o(r.get(uB.containerId,null))&&r.set(uB.containerId,a,null)
const c=n.get(uB.templateType,null)
return i(c)&&o(r.get(uB.templateType,null))&&r.set(uB.templateType,c,null),r.toString()}(n,r)),n=ut(e,l(t,Xk),n,p(t,Km),u(t,Zm),l(t,Xm),l(t,Qm),l(t,mS),d(t,JR),d(t,ey),p(t,ty),l(t,ny),l(t,"metrics.extRefApp2"),l(t,"metrics.extRefUrl2"))
const a=c(t,"token.appPlatforms"),f=a&&a.length&&a.length>0&&a.indexOf("tv")>=0,w=u(t,"token.isHalva")||u(t,"token.isMacOSCompatibleIOSApp"),g=ma(0,e.client.deviceType,w).some(e=>-1!==a.indexOf(e)),m=w&&!1,y=l(t,"instalationType"),T=y===Bw,A=y===_p,E=u(t,"token.isPreorder"),P=!(E||f&&!g),I=l(t,mS)===xN&&e.client.deviceType!==xN,S=l(t,"token.preflightPackageUrl"),v={...d(t,"token.additionalHeaders",{}),...d(t,"additionalHeaders",{})},_={adamId:l(t,Xk),buyParams:n,vendor:l(t,"token.vendor"),appName:l(t,"token.appName"),bundleId:l(t,"token.bundleId"),appPlatforms:a,additionalHeaders:v,isUpdate:T,isRedownload:A,isPreorder:E,createsJobs:P,preflightPackageUrl:S,isArcadeApp:h(t,"token.isArcadeApp"),forceWatchInstall:I,isMacOSCompatibleIOSApp:m,presentingSceneIdentifier:l(t,"presentingSceneIdentifier")}
return await Promise.resolve(_)}async function rl(e,t){const n=new xM(e).withIds(t).forType(NN).includingMacOSCompatibleIOSAppsWhenSupported(!0).includingAdditionalPlatforms(v(e))
return await lr(e,n).then(t=>{const n=b(t),r={}
for(const t of n)r[t.id]=sa(e,t,{useCase:3})
return r})}function ol(e,t){const n=new TG(t.targetingData,e.random.nextUUID()),r=il(e,t)
if(!r)return null
const a=lr(e,r,function(e,t){const n={}
return t&&t.validAdRequest()&&(n["X-Apple-App-Store-Client-Request-Id"]=t.appStoreClientRequestId,n["X-Apple-iAd-Request-Data"]=t.sponsoredSearchRequestData,n["X-Apple-iAd-Env-Name"]=t.routingInfo),{headers:n}}(0,n)),c=async function(e,t,n,r){var i
if(!t.validAdRequest())return Dn(e,"ODML fetch skipped - Malformed request"),{adverts:[],error:"invalidAdRequest"}
const a=await r,c=function(e,t){const n=b(t.results[um]),r=[]
for(const t of n){const n=l(t,"id"),s=x(t,BI)
if(o(n)||o(s))continue
let i=null,a=null
e.bag.enableCPPInSearchAds&&(i=se(re(e,t)),a=ae(e,t)),r.push({instanceId:e.random.nextUUID(),adamId:n,assetInformation:{},adData:s,cppIds:a,serverCppId:i,selectedCppId:i})}return r}(e,a),u=function(e,t,n){const r=b(t.results.search),s=[]
for(const e of r){const t=l(e,"id")
o(t)||s.push({adamId:t,assetInformation:{}})}return s}(0,a)
try{if(e.isAvailable(nd)){if(e.client.isPhone){const t=await e.ads.processAdvertsForSponsoredSearchAndNativeState(c,u,n,e.bag.sponsoredSearchODMLTimeout)
return s(t.error)?Dn(e,`ODML processing failed - ${t.error}`):Dn(e,"ODML processing completed"),{adverts:null!==(i=t.adverts)&&void 0!==i?i:c,error:t.error,installedStates:t.installedStates}}{const t=await e.ads.processAdvertsForSponsoredSearch(c,u,n,e.bag.sponsoredSearchODMLTimeout)
return Dn(e,"ODML fetch completed"),{adverts:t}}}return Dn(e,"ODML fetch skipped - Unsupported client"),{adverts:c,error:"unsupportedClient"}}catch(t){return Dn(e,`ODML fetch failed - ${t}`),{adverts:c,error:"uncategorizedError"}}}(e,n,t.term,a),u=function(e){let t=null
if(function(e,t){switch(t){case EN:case $N:return!0
default:return!1}}(0,e.client.deviceType)){const n=ar(e,null,null,v(e))
n&&(t=lr(e,n).catch(()=>null))}return t}(e),f=function(e){let t=null
const n=e.bag.searchTransparencyAdamId
return i(n)&&(t=lr(e,new xM(e).forType(iN).withIds([n]).includingAdditionalPlatforms(v(e))).catch(()=>null)),t}(e)
return Promise.all([a,c,u,f]).then(([o,i,a,c])=>(function(e){const t=D(e)
s(t)&&(e.meta.metrics["data.search.dataSetId"]=l(t,"dataSetId"),delete e.meta.metrics.dataSetId)}(o),{catalogResponse:o,categoriesFilterData:a,transparencyData:O(c),sponsoredSearchRequestData:n,sponsoredSearchAdvertData:i,requestMetadata:{requestDescriptor:t,searchRequestUrl:be(e,r).toString()}}))}async function sl(e,t){const n=function(e,t){const n=new xM(e,t).includingAdditionalPlatforms(v(e)).includingScopedAttributes(iN,[YI]).includingAttributes(al(e)).includingRelationshipsForUpsell(!0).includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes(ne(e))
return fe(e,n,t),n.includingRelationships(Zj),n}(e,t)
return await lr(e,n)}function il(e,t){var n
const r=null===(n=t.term)||void 0===n?void 0:n.trim()
if(o(r))return null
const s=t.origin,a=t.searchEntity,c=t.facets,l=t.selectedFacetOptions,f=t.spellCheckEnabled,d=t.excludedTerms,p=e.host.clientIdentifier,h=new xM(e).withSearchTerm(r).includingAdditionalPlatforms(v(e)).includingAttributes(al(e)).includingScopedAttributes(iN,[YI]).includingRelationshipsForUpsell(!0).includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes(ne(e))
if(h.includingRelationships(Zj),pn(e)&&(h.includingAssociateKeys(NN,[PN]),h.includingScopedAttributes(PN,[mN,Fk,$k]),h.includingScopedRelationships(iN,[yD])),u(e.client.isTinkerWatch)&&h.withFilter(zb,"tinker"),h.enablingFeature(b_),i(t.guidedSearchTokens)&&h.addingQuery("selectedFacets",t.guidedSearchTokens.join(",")),i(t.guidedSearchOptimizationTerm)&&h.addingQuery("finalTerm",t.guidedSearchOptimizationTerm),a===yO?h.searchingOverTypes([iN]):a===Zk?h.searchingOverTypes([_R]):a===xN||a===ON?h.searchingOverTypes([NN]).withFilter(zb,a):h.searchingOverTypes([NN,_R,Hk,iN,TN,rD]),e.appleSilicon.isSupportEnabled&&!e.appleSilicon.isRosettaAvailable&&h.addingQuery("restrict","!requiresRosetta"),c)for(const e of Object.keys(c))h.addingQuery(e,c[e])
if(l)for(const e of Object.keys(l)){const t=pj.requestValuesForSelectedFacetOptions(l[e])
if(i(t)){h.addingQuery(e,t.value)
for(const e of Object.keys(t.additionalKeyValuePairs))h.addingQuery(e,t.additionalKeyValuePairs[e])}}switch(s===UO?h.addingQuery(WC,QP):s===_b?h.addingQuery(WC,_b):s===eI?h.addingQuery(WC,"searchInstead"):s===tI?h.addingQuery(WC,aw):s===zI&&h.addingQuery(WC,"facet"),p){case yL:h.addingContext(xN)
break
case TL:h.addingContext(OD)
break
case AL:h.addingContext(ON)}return h.addingQuery("limit[ads-result]",e.bag.mediaAdvertRequestLimit.toString()),i(e.bag.adsOverrideLanguage)&&h.enablingFeature(Vd),f&&h.enablingFeature("spellCheck"),d&&h.addingQuery("excludeTerms",d.join(",")),h}function al(e){const t=[ZR,FE,vR,oD,Ab,$E,kD,ZS,XS,sN]
return e.appleSilicon.isSupportEnabled&&t.push(PD),e.host.isOSAtLeast(15,5,0)&&t.push(Hb),t}function cl(e,t){return $f.context("developerPageFromResponse",()=>{const n=t.data.length?t.data[0]:null
if(!n)return null
const r=$n(e,"Artist",n.id,t),s=function(e,t,n,r){switch(e.client.deviceType){case $N:return function(e,t,n,r){var s
e.appleSilicon.isSupportEnabled?(dl(t,Pk,[EO,fC]),dl(t,EO,[fC])):dl(t,Pk,[EO])
const a=uN
let u=0
const l=[]
for(const f of Qj){const d=pe(t,f),p=c(d,RR),h=p.length
if(0===h)continue
if(f===Jb&&0===h)continue
const w=ll(e,f,t)
ic({pageInformation:n,locationTracker:r,idType:WD,id:`${u}`,targetType:KD},w)
const g={lockupOptions:{metricsOptions:{pageInformation:n,locationTracker:r},artworkUseCase:1},filter:10996},m=p.filter(e=>o(e.attributes)),y=(null===(s=d.next)||void 0===s?void 0:s.length)>0||h>=8,T=fl(e,w,t.id,p,f,a,g,n,r,d.href,y),A=T.items.length+m.length
A<3&&(T.rowsPerColumn=A)
const E={id:null,kind:null,softwareType:null,targetType:KD,title:T.title,pageInformation:n,locationTracker:r,idType:null}
if(cc(r),cn(0,T,E),dc(r),m.length){const e=new tW
e.title=w,e.developerId=t.id,e.contentType=uN,e.remainingData=m,e.lockupListOptions=g,e.relationship=f,e.roomUrl=d.href,e.shouldShowSeeAll=y,e.hasExistingContent=i(T.items),T.url=`${RF}:/${zF}/${LF}/`+encodeURIComponent(JSON.stringify(e))}T.items.length>0&&(l.push(T),u++)}return l}(e,t,n,r)
case xN:return function(e,t,n,r,s,a,c){const u=we(n,r),l={lockupOptions:{metricsOptions:{pageInformation:a,locationTracker:c},artworkUseCase:1},filter:10996}
ic({pageInformation:a,locationTracker:c,idType:WD,id:"0",targetType:KD},s)
const f=fl(e,s,n.id,u,r,t,l,a,c,null,!1),d=u.filter(e=>o(e.attributes)),p={id:null,kind:null,softwareType:null,targetType:KD,title:s,pageInformation:a,locationTracker:c,idType:null}
if(cc(c),cn(0,f,p),dc(c),d.length){const e=new tW
e.title=s,e.developerId=n.id,e.contentType=t,e.remainingData=d,e.lockupListOptions=l,e.hasExistingContent=i(f.items),f.url=`${RF}:/${zF}/${LF}/`+encodeURIComponent(JSON.stringify(e))}return[f]}(e,uN,t,FG,e.loc.string(Jp),n,r)
default:return function(e,t,n,r){var s
let a,u
dl(t,Pk,[Tv,lC]),"tv"===e.client.deviceType?(a=fD,u=2):(a=uN,u=1)
let l=0
const f=[]
for(const d of eW){const p=pe(t,d),h=c(p,RR),w=h.length
if(0===w)continue
if(d===Jb&&0===w)continue
let g,m=!1
d===Av?g=TL:d===uC?g=yL:d===lC?(g=EL,"tv"!==e.client.deviceType&&(m=!0)):g=mL
const y=ul(e,d,t)
ic({pageInformation:n,locationTracker:r,idType:WD,id:`${l}`,targetType:KD},y)
const T={excludeIconInSidepacksIfNotTvOnly:m,lockupOptions:{metricsOptions:{pageInformation:n,locationTracker:r},clientIdentifierOverride:g,artworkUseCase:u},filter:10996},A=h.filter(e=>o(e.attributes)),E=(null===(s=p.next)||void 0===s?void 0:s.length)>0||w>=8,P=fl(e,y,t.id,h,d,a,T,n,r,p.href,E),I=P.items.length+A.length
I<3&&(P.rowsPerColumn=I)
const S={id:null,kind:null,softwareType:null,targetType:KD,title:P.title,pageInformation:n,locationTracker:r,idType:null}
if(cc(r),cn(0,P,S),dc(r),A.length){const e=new tW
e.title=y,e.developerId=t.id,e.contentType=uN,e.remainingData=A,e.lockupListOptions=T,e.relationship=d,e.roomUrl=p.href,e.shouldShowSeeAll=E,e.hasExistingContent=i(P.items),P.url=`${RF}:/${zF}/${LF}/`+encodeURIComponent(JSON.stringify(e))}P.items.length>0&&(f.push(P),l++)}return f}(e,t,n,r)}}(e,n,r,{rootPosition:0,locationStack:[]})
1===s.length&&(s[0].isHorizontal=!1)
const a=$a(e,n,pN)
if(a){const e=new iL(a,XR),t=new CM(VR)
t.items=[e],s.unshift(t)}const u=new DM(s)
u.title=U(n,FN),e.client.deviceType!==xN&&(u.presentationOptions=[eR]),Mn(e,u,r)
const l=x(n,bv)
if(l){const t=ta(e,l,{cropCode:"sr",useCase:20})
if(u.uber=t,e.featureFlags.isEnabled("shelves_2_0_generic")){const e=new CM("uber"),n=new QB(Yp)
n.artwork=t,e.items=[n],n.title=u.title,s.unshift(e),u.presentationOptions.push(cP),u.presentationOptions.push(zp)}}return u})}function ul(e,t,n){switch(t){case Jb:return e.loc.string(Kp)
case VE:return e.loc.string("DEVELOPER_SYSTEM_APPS")
case Av:return e.loc.string("DEVELOPER_IMESSAGE")
case uC:return e.loc.string(Jp)
case lC:return e.loc.string("DEVELOPER_TV")
case TN:return e.loc.string(Zp)
case Tv:const t=G(n,Xp),r=G(n,Qp)
return t&&r?e.loc.string(eh):r?e.loc.string(th):e.loc.string(nh)
case Pk:return e.loc.string(rh)
default:return null}}function ll(e,t,n){switch(t){case Jb:return e.loc.string(Kp)
case TN:return e.loc.string(Zp)
case EO:if(e.appleSilicon.isSupportEnabled)return e.loc.string("DEVELOPER_MAC_APPS")
{const t=G(n,Xp),r=G(n,Qp)
return t&&r?e.loc.string(eh):r?e.loc.string(th):e.loc.string(nh)}case fC:return e.loc.string("DEVELOPER_PHONE_PAD_APPS")
case Pk:return e.loc.string(rh)
default:return null}}function fl(e,t,n,o,i,a,c,u,l,f,d){const p=new CM(a)
if(p.title=t,a===OO?(p.items=function(e,t,n){return $f.context("screenshotsLockupsFromData",()=>{if(!t)return[]
const o=[]
for(let i=0;i<t.length;i++){const a=t[i]
if(r(a.attributes)){n.contentUnavailable&&n.contentUnavailable(a.id,i)
continue}const c=n.lockupOptions
let u=15358
if(s(n.filter)&&(u=n.filter),xe(e,a,u))continue
const l=Ui(e,a,c)
l.isValid()&&(o.push(l),dc(n.lockupOptions.metricsOptions.locationTracker))}return o})}(e,o,c),p.isHorizontal=!1,p.presentationHints={showSupplementaryText:!1}):(p.items=Wi(e,o,c),p.isHorizontal=e.client.deviceType!==xN),d){const r=new Xj
r.title=t,r.url=f,r.developerId=n,r.relationshipId=i,r.clientIdentifierOverride=c.lockupOptions.clientIdentifierOverride
const o=new VL(yN)
o.pageUrl=s(h=r)?`${RF}:/${zF}/${HF}/`+encodeURIComponent(JSON.stringify(h)):null,o.title=e.loc.string(Sk),o.pageData=as(0,t),et(e,o,o.pageUrl,{pageInformation:u,locationTracker:l}),p.seeAllAction=o}var h
return p}function dl(e,t,n){const o=pe(e,t)
if(r(o))return
const s=b(o)
if(r(s))return
const i=s.map(e=>e.id)
for(const t of n){const n=pe(e,t)
if(r(n))continue
const o=b(n)
r(n)||(e.relationships[t].data=o.filter(e=>!i.includes(e.id)))}}function pl(e,t,n){const r=function(e,t){switch(t){case nW:return"badge_hardware"
case rW:return"badge_trial_eligible"
default:return null}}(0,t),o=new rB(ON,gR,null,{offerHints:r})
o.metricsOverlay={...o.metricsOverlay,...n}
const s=new VL(zR)
return s.pageData=o,s}async function hl(e,t){const n=t.eventString,r=t.featuresDictionary
if(!s(r))return await Promise.reject("Received non-defined engagement features.")
const o=function(e,t,n,r){switch(t){case"arcadeTabDidComeOnScreen":case"arcadePageDidAppear":return function(e,t,n){const r=[]
for(const e of oW)if(e in t){const t=new PF(e,!1)
r.push(t)}for(const o of oW){if(n.includes(o)&&!e.bag.unrestrictedServerSideTabBadging)continue
const i=t[o]
if(s(i)){const e=pl(0,o,i)
r.push(e)
break}}if(r.length>0)return new iB(new qL(r))
{const e=new hF
return new iB(e)}}(e,n,r)
case"didBecomeArcadeTrialEligible":if(!e.bag.enableArcadeTrialEligibleBadging)return new iB(new hF)
if(r.includes(rW))return new iB(new hF)
const t=new PF(rW,!0),o=new jL(ON,e.loc.decimal(1)),i=new qL([t,o])
return new iB(i)
case"didSubscribeToArcade":return function(e){const t=[]
for(const e of oW){const n=new PF(e,!1)
t.push(n)}const n=new qL(t)
return new iB(n)}()
case"didBecomeSubscribed":if(!s(n["com.apple.Arcade.TrialEligible1"]))return new iB(new hF)
const a=new PF(rW,!1)
return new iB(a)
case"didBecomeNonSubscribed":return new iB(new hF)
default:return null}}(e,n,r,s(t.previouslyDisabledFeatures)?t.previouslyDisabledFeatures:[])
return s(o)?await Promise.resolve(o):await Promise.reject("Did not receive a valid engagement event.")}async function wl(e,t){var n
const r=function(e,t,n,r){if(!oW.includes(t))return null
let o=null
if(n&&e.bag.unrestrictedServerSideTabBadging){const t=e.loc.decimal(1)
o=new jL(ON,t)}else if(n&&!r.includes(t)){const t=e.loc.decimal(1)
o=new jL(ON,t)}else n||(o=new jL(ON,null))
return new iB(o)}(e,t.identifier,t.isEnabled,null!==(n=t.previouslyDisabledFeatures)&&void 0!==n?n:[])
return s(r)?await Promise.resolve(r):await Promise.reject(new Error(`fetchBadgingTask called with unsupported identifier: ${t.identifier}, featuresDictionary: ${JSON.stringify(t.featuresDictionary)}, previouslyDisabledFeatures: ${t.previouslyDisabledFeatures}`))}async function gl(e,t){return await e.required(zH).fetchPage(e,t,NM)}async function ml(e,t){const n=new xM(e).forType(qv).withIds([t]),r=lr(e,n)
return await r.then(t=>function(e,t){return $f.context("msoProviderDataFromData",()=>{const n=O(t),r=U(n,FN),o=U(n,DN),s=function(e,t){return $f.context("msoProviderArtworkFromData",()=>{const n=x(t,"editorialArtwork.storeFlowcase")
if(n)return ta(e,n,{useCase:3})
const r=x(t,lN)
return ta(e,r,{useCase:3})})}(e,n)
s&&(s.crop="sr")
const i=function(e,t){const n=x(t,bv)
return n?ta(e,n,{useCase:20}):null}(e,n)
return new cW(r,o,s,i)})}(e,t))}async function yl(e,t){if(r(t.providerAdamId)||r(t.subscribedChannelIds))return await e.required(zH).fetchPage(e,t.url,DM)
{const n=Tl(e,t.providerAdamId),r=lr(e,n)
return await r.then(n=>{const r=function(e){return $f.context("msoAppsFromResponse",()=>{const t=O(e),n=we(t,PS),r={}
for(const e of n)r[he(e,gN).id]=M(e,"channelNames")
const o=we(t,NN).map(e=>e.id)
return new uW(r,o)})}(n),o=function(e,t){const n=e.appsToAlwaysShow
for(const r of Object.keys(e.apps)){const o=e.apps[r]
for(const e of o)if(-1!==t.indexOf(e)){n.push(r)
break}}return n}(r,t.subscribedChannelIds)
return Al(e,n,o)})}}function Tl(e,t){return new xM(e).forType(qv).withIds([t]).includingRelationships([NN,PS]).addingQuery("limit[channel-apps]","100")}function Al(e,t,n){return $f.context("msoRoomPageWithResponse",()=>{const r=O(t),o=$n(e,ek,r.id,t),s=we(r,NN),a=we(r,PS)
for(const e of a){const t=he(e,gN)
i(t)&&s.push(t)}const c=new _V
c.ids=s.map(e=>e.id),c.shouldFilter=!1,c.metricsPageInformation=o
const u=function(e,t,n,r,o=[]){return $f.context("msoRoomPageWithContext",()=>{const s=[],i=[]
for(const e of t)-1!==n.indexOf(e.id)?s.push(e):i.push(e)
const a={rootPosition:0,locationStack:[]},c={lockupOptions:{metricsOptions:{pageInformation:r.metricsPageInformation,locationTracker:a},artworkUseCase:2}},u=[],l={pageInformation:r.metricsPageInformation,locationTracker:a,targetType:KD,idType:WD,id:"0"}
if(s.length>0){const t=e.loc.string("MSO_INCLUDED_IN_SUBSCRIPTION"),n=new _V
n.remainingContent=[],n.metricsPageInformation=r.metricsPageInformation,n.metricsLocationTracker=a,n.preferredShelfContentType=fD,l.id="0",ic(l,t),c.contentUnavailable=function(e,t){return n.remainingContent.push(s[t]),!1}
const o=new CM(fD)
o.title=t,o.shouldFilterApps=r.shouldFilter,o.items=Wi(e,s,c),o.url=El(n),cc(a),o.items.length>0&&(dc(a),u.push(o))}if(s.length>0&&i.length>0){const t=e.loc.string("MSO_AVAILABLE_WITH_UPGRADED_SUBSCRIPTION"),n=new _V
n.remainingContent=[],n.metricsPageInformation=r.metricsPageInformation,n.metricsLocationTracker=a,n.preferredShelfContentType=fD,l.id="1",ic(l,t),c.contentUnavailable=function(e,t){return n.remainingContent.push(i[t]),!1}
const o=new CM(fD)
o.title=t,o.shouldFilterApps=r.shouldFilter,o.items=Wi(e,i,c),o.url=El(n),cc(a),o.items.length>0&&(dc(a),u.push(o))}if(0===u.length){const n=new _V
n.remainingContent=[],n.metricsPageInformation=r.metricsPageInformation,n.metricsLocationTracker=a,n.preferredShelfContentType=uN,l.id="0",ic(l,null),c.contentUnavailable=function(e,r){return n.remainingContent.push(t[r]),!1}
const o=new CM(fD)
o.shouldFilterApps=r.shouldFilter,o.items=Wi(e,t,c),o.url=El(n),cc(a),dc(a),u.push(o)}for(const e of u)e.isHorizontal=u.length>1
const f=o.concat(u)
return new DM(f)})}(e,s,n,c)
return u.title=U(r,FN),u.isIncomplete=!1,Mn(e,u,o),u})}function El(e){return e.remainingContent.length?`${RF}:/${QF}/${LF}/`+encodeURIComponent(JSON.stringify(e)):null}async function Pl(e,t){const n={url:`${e.bag.getCancellablePreorderItemsSrv}?&includeAllLockups=false&includeNonBookCancellablePreorderItems=true${t.isArcade?"&preorderItemType=ArcadeApp":""}`,signingStyle:yR}
return await e.network.fetch(n).then(async n=>{const r=JSON.parse(n.body)
if(0!==r.status)return await Promise.resolve("noAuthorization")
const o=r.cancellablePreorderItems.filter(e=>e.preorderAdamId.toString()===t.adamId)
if(null===o||0===o.length)return await Promise.reject("Expected AdamID was missing. This AdamId might have not been preordered before, or the isArcade flag may be incorrect.")
if(o.length>1)return await Promise.reject(`Multiple matches for adamId ${t.adamId}, when only one is expected.`)
const s=o[0].preorderId,i={url:e.bag.cancelPreorderItemSrv,method:SR,signingStyle:yR}
return i.body=`preorderId=${s}`,await e.network.fetch(i).then(async e=>{if(!e.ok)throw Error(`Bad Status code ${e.status} for ${i.url}`)
return 0!==JSON.parse(e.body).status?await Promise.resolve("unableToCancel"):await Promise.resolve("canceled")}).catch(async e=>await Promise.reject(e))}).catch(async e=>await Promise.reject(e))}async function Il(e,t){if(t.preloading&&te(e))return await Promise.reject(new Error(ay))
0!==fr(e,new Ox(t.url)).length&&e.network.fetch({url:e.bag.redirectUrlEndpoint,method:SR,headers:{"Content-Type":mO},body:`url=${encodeURIComponent(t.url)}`})
const n="1"===new Ox(t.url).query[V$]
let r=e.required(zH).fetchPage(e,t.url,zU)
if(!r){const n=new xM(e,t.url)
r=lr(e,n).then(t=>mi(e,t))}return await r.then(t=>(e.host.clientIdentifier===PL&&(e.props.enabled(cy)&&n&&(t.shareAction=null,t.titleOfferDisplayProperties=null,t.expandedOfferDetails=null,t.lockup.offerDisplayProperties=null),t&&DE in t&&Gn(0,t)),t))}async function Sl(e,t,n){var a,c,u,l
const f=Tc(e,t,!1),d=new xM(e)
switch(t){case AN:d.usingCustomAttributes(ne(e)),yc(e)===aO&&d.includingAttributes([ZS,XS])
break
case eN:case UD:d.usingCustomAttributes(ne(e))}const p=e.bag.adsOverrideLanguage
i(p)&&d.enablingFeature(Vd).addingQuery("l",p)
const h=be(e,d).query,w=e.ads.fetchOnDeviceAdPlacement(t,f,h,n),g=await w
o(g.clientRequestId)&&(g.clientRequestId=e.random.nextUUID(),Dn(e,`clientRequestId was nil. Assigned ${g.clientRequestId}`))
const m={clientRequestId:g.clientRequestId,iAdId:g.iAdId,placementType:null!==(c=null===(a=null==g?void 0:g.ad)||void 0===a?void 0:a.placementType)&&void 0!==c?c:t}
if(g.failureReason)return m.failureReason=g.failureReason,m
m.onDeviceAd=g.ad
let y=null===(u=g.ad)||void 0===u?void 0:u.appMetadata
const T=O(y)
if(o(null==T?void 0:T.attributes))try{const t=function(e,t){const n=new xM(e).forType(NN).withIds([t.adamId]).usingCustomAttributes(ne(e))
return i(t.cppIds)&&n.addingQuery(p$,t.cppIds[0]),n}(e,g.ad)
y=await lr(e,t)}catch(t){Dn(e,`fetchAds request failed - ${t}`),m.failureReason=Ud}if(i(null===(l=O(y))||void 0===l?void 0:l.attributes)){m.mediaResponse=function(e,t,n){const s=O(t)
if(o(s)||r(s.attributes))return Dn(e,"decorateiAdAttributeFromOnDeviceAd cannot decorate for malformed response"),null
const i=n.ad,a=`${i.adamId}|${i.metadata}`,c={clientRequestId:n.clientRequestId,impressionId:i.impressionId,metadata:i.metadata,privacy:i.privacy,lineItem:a}
if(i.placementType===AN){const t=yc(e)===aO
c.format={images:t,text:"",userRating:!1,icon:"regular"}}return s.attributes.iad=c,Sc(0,s,i.instanceId),t}(e,y,g),vc(e,O(y),m.onDeviceAd)||(Dn(e,"fetchAds request failed - localization not available"),m.failureReason=hE)
const n=function(e,t,n){return n===AN?function(e,t){var n,r
const o=O(t.mediaResponse),s=re(e,o)
if(!(null===(r=null===(n=t.onDeviceAd)||void 0===n?void 0:n.cppIds)||void 0===r?void 0:r.includes(s.productPageId)))return dE
if(yc(e)!==aO)return null
const i=Vi(e,o,{metricsOptions:{pageInformation:xn(e,Hd,yN,""),locationTracker:{rootPosition:0,locationStack:[]},isAdvert:!0},hideZeroRatings:!0,artworkUseCase:1,canDisplayArcadeOfferButton:Ha(0,pO)},{showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}},null),a=Ec(i.trailers,i.screenshots)
return a.portrait>=4||a.landscape>=5?null:pE}(e,t):null}(e,m,t)
s(n)&&(Dn(e,`fetchAds request failed - ${n}`),m.failureReason=n)}return m}function vl(e,t,n,r){if(o(n))return null
const s=new yW(n.displayLabel,zI)
!function(e,t,n,r){const o=b_,s=hm,i={actionType:o,location:sc({pageInformation:null,locationTracker:r.locationTracker,targetType:s},t.targetToken),searchTerm:n},a={targetId:t.targetToken},c=We(e,t.targetToken,s,i,[b_])
t.actionMetrics.addMetricsData(c)
const u=qe(e,n,s,o,null,a,[b_])
t.actionMetrics.addMetricsData(u)}(e,s,t.term,r)
const i=new gW(n.displayLabel,n.isSelected,n.displayLabel,s)
return An(0,i,hm,r),i}function _l(e,t,n){const r=y(t),s=y(t.attributes)
return s.iads=n.adData,r.attributes=s,function(e,t,n){var r
const s=se(re(e,t))
if(n.selectedCppId===s||o(null===(r=null==t?void 0:t.meta)||void 0===r?void 0:r.cppData))return
const i=y(t.meta)
i.cppData.ppid=n.selectedCppId,t.meta=i}(e,r,n),Sc(0,r,n.instanceId),r}function Cl(e,t,n){const r=t||{},o=[]
e.client.deviceType!==$N&&o.push(new rG(jC,[new oG(e.loc.string(GI),null,r[jC]),new oG(e.loc.string(Qg),Yk,r[jC])])),o.push(new rG(uO,[new oG(e.loc.string(VI,dR),null,r[uO]),new oG(e.loc.string(em,dR),eE,r[uO])]))
const i=cr(e,n,!1)
if(i){const t=i.categories
if(t.length){const n=t.filter(e=>s(e.genreId)).map(e=>new oG(e.name,e.genreId,r[ED]))
n.unshift(new oG(e.loc.string(HI,dR),null,r[ED])),o.push(new rG(ED,n))}}const a=e.bag.searchSortOptions,c=[]
c.push(new oG(e.loc.string(jI),null,r.sort))
for(const t of a)c.push(new oG(e.loc.string(tm+t),t,r.sort))
c.length>1&&o.push(new rG(Nk,c))
const u=e.bag.ageBands.map(e=>new oG(l(e,FN),l(e,nm),r.ages))
return u.length>0&&e.client.deviceType!==$N&&o.push(new rG(tb,u)),o}function Ol(e,t){let n=null,r=null,o=null
const i=new fj(jC,e.loc.string("SEARCH_FACET_TYPE_TITLE_DEVICE_TYPE"),fb,null,[new lj(e.loc.string(GI),null),new lj(e.loc.string(Qg),Yk)],null,null,Rl(e,jC)),a=new fj("filter[price]",e.loc.string("SEARCH_FACET_TYPE_TITLE_PRICE"),fb,e.loc.string("SEARCH_FACET_DEFAULT_ANY"),[new lj(e.loc.string(VI,dR),null),new lj(e.loc.string(em,dR),eE)],null,null,Rl(e,uO)),c=cr(e,t,!1)
if(c){const t=c.categories
if(t.length){const r=t.filter(e=>s(e.genreId))
n=new fj("filter[genre]",e.loc.string("SEARCH_FACET_TYPE_TITLE_CATEGORY"),fb,null,[new lj(e.loc.string(HI,dR),null)],null,null,Rl(e,ED))
for(const e of r)n.options.push(new lj(e.name,e.genreId))}}const u=e.bag.searchSortOptions
r=new fj(Nk,e.loc.string("SEARCH_FACET_TYPE_TITLE_SORT"),fb,null,[new lj(e.loc.string(jI),null)],null,null,Rl(e,Nk))
for(const t of u)r.options.push(new lj(e.loc.string(tm+t),t))
const f=e.bag.ageBands.map(e=>new lj(l(e,FN),l(e,nm)))
f.length>0&&e.client.deviceType!==$N&&(o=new fj("filter[ages]",e.loc.string("SEARCH_FACET_TYPE_TITLE_AGE_BAND"),fb,e.loc.string("SEARCH_FACET_DEFAULT_ALL"),f,null,null,Rl(e,tb)))
const d=new pj([],!1,null)
{const e=[i,a]
s(n)&&e.push(n),e.push(r),s(o)&&e.push(o)
for(const t of e)t.showsSelectedOptions=!0
d.facetGroups.push(new dj(e))}return d}function bl(e){return{targetPlatform:[new lj(e.loc.string(GI),null)],"filter[price]":[new lj(e.loc.string(VI,dR),null)],sort:[new lj(e.loc.string(jI),null)],"filter[genre]":[new lj(e.loc.string(HI,dR),null)]}}function Rl(e,t){const n=new hF
return tt(e,n,t),n}function kl(e,t){if(!G(t,YI))return null
const n=U(t,ZI)
if(i(n))return n
const r=U(t,RD)
return i(r)?r.replace(/\n/g," "):null}function Dl(e,t,n,a,l,f,d,p){return $f.context("searchResultFromData",()=>{let h=null
const w=t.type,g={metricsOptions:{pageInformation:l.pageInformation,locationTracker:l.locationTracker,targetType:SC},hideZeroRatings:!0,artworkUseCase:8,isNetworkConstrained:f,canDisplayArcadeOfferButton:Ha(0,pO),clientIdentifierOverride:$l(0,d),isMultilineTertiaryTitleAllowed:!1},m=function(e,t,n){var r,o
if(!function(e){return e.client.deviceType===CN}(e))return AD
const i=t.meta,a=null===(r=null==i?void 0:i.displayStyle)||void 0===r?void 0:r.condensed
if(s(a))return Nl(e,a)
const c=null===(o=null==n?void 0:n.displayStyle)||void 0===o?void 0:o.condensed
return s(c)?Nl(e,c):Ll(e)}(e,t,p)
switch(w){case YC:case R_:case _R:case iN:case Hk:const f=eu(e,t,{useThreeLineOverlayForBranded:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,isSearchContext:!0},l)
if(f&&f.media&&f.media.kind===wR){const e=f.media.lockup
e.theme=hN,h=new dG(e)}else if(function(e,t,n){if(1!=(u(n,"experiments.showGridCard")?0:1))return!1
switch(t.type){case Hk:return i(M(t,XI))
case YC:case R_:return!0
case iN:switch(U(t,hk)){case Yv:case zv:case pR:case QI:return!0
default:return!1}default:return!1}}(0,t,n)){const n=function(e,t,n){const r=function(e,t){const n=kl(0,t)
return i(n)?n:e.loc.string("EDITORIAL_SEARCH_RESULT_TYPE_COLLECTION")}(e,t),s=$a(e,t,FN),a=fn(e,t,s,{targetType:SC,pageInformation:n.pageInformation,locationTracker:n.locationTracker})
ic(a,s)
const c=qi(e,t,{actionType:QD,targetType:vN,pageInformation:n.pageInformation,locationTracker:n.locationTracker,id:rw,idType:WD},e.host.clientIdentifier)
c.title=e.loc.string(Sk)
const u={lockupOptions:{metricsOptions:{pageInformation:n.pageInformation,locationTracker:n.locationTracker,targetType:VD},artworkUseCase:8},filter:0},l=Wi(e,we(t,ND),u)
cc(n.locationTracker)
const f=new mG(r,s,l,c)
return cn(0,f,a),o(l)?null:f}(e,t,l)
n&&(h=n)}else{const n=function(e,t,n,o){return $f.context("editorialSearchResultFromData",()=>{let a=new gG
a.title=U(t,FN)
const c={pageInformation:n.pageInformation,locationTracker:n.locationTracker}
switch(e.client.deviceType,t.type){case Hk:const n=M(t,XI)
if(i(n))a.collectionAdamIds=n
else{const n=ta(e,x(t,lN),{useCase:9,allowingTransparency:!0})
a.iconArtwork=n}a.type=lb
break
case YC:case R_:a.artwork=ta(e,x(t,lN),{useCase:9,cropCode:"sr"}),a.collectionAdamIds=M(t,XI),a.type=dm
break
case iN:a=function(e,t,n,o){const a={useThreeLineOverlayForBranded:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,isSearchContext:!0}
a.prevailingCropCode=o&&e.client.isPhone?"DMGE.AppST01":"fo"
const c=eu(e,t,a,n)
if(!c)return null
const u=new gG
u.type=yO,u.title=c.title,u.clickAction=c.clickAction
let l=null
if(c.media)switch(c.media.kind){case Tk:const e=c.media
switch(u.artwork=e.art,r(u.artwork)&&(u.iconArtwork=e.icon),U(t,hk)){case zC:case JC:const e=he(t,ND)
e&&(u.title=U(e,FN)||u.title)}break
case HA:case jA:l=c.media.lockups
break
case lN:const n=c.media
u.artwork=n.art
break
case Ub:case q_:l=c.media.lockups
break
case Rk:const o=c.media
if(u.artwork=o.video.preview,u.video=o.video,c.overlay instanceof sU){const e=c.overlay
u.title=e.title,u.subtitle=e.description}else u.subtitle=o.description
break
case Mb:const i=c.media
if(u.artwork=i.artwork,u.appEventFormattedDates=i.formattedDates,u.subtitle=i.subtitle,u.tintColor=i.tintColor,u.type="appEventStory",s(c.style))switch(c.style){case dD:case tN:u.mediaOverlayStyle=dD
break
case hN:u.mediaOverlayStyle=hN
break
default:ee(c.style)}}if(c.overlay)switch(c.overlay.kind){case VD:const e=c.overlay
u.artwork||(l=[e.lockup])
break
case hd:l=c.overlay.lockups
break
case VR:const t=c.overlay
u.subtitle=t.paragraph.text}if(s(l)){u.collectionAdamIds=[],u.collectionAppIcons=[]
for(const e of l)u.collectionAdamIds.push(e.adamId),u.collectionAppIcons.push(e.icon)}const f=kl(0,t)
i(f)&&f!==u.title&&(u.tagline=f)
const d=c.heroMedia
return i(d)&&(i(d.art)?(u.artwork=d.art,u.artwork.crop="em"):i(d.video)&&(u.video=d.video)),u.video&&(u.video.showPlaybackControls=!1,u.video.canPlayFullScreen=!1,u.video.playbackControls={}),u.collectionAdamIds||u.artwork||u.iconArtwork?u:null}(e,t,c,o===Bb)
break
case _R:if(a.artwork=ta(e,x(t,bv),{useCase:9,cropCode:"sr"}),!a.artwork){let n=we(t,im)
n=n.filter(t=>!xe(e,t,10996))
const r=[],o=[]
n.forEach(t=>{r.push(t.id)
const n=sa(e,t,{useCase:9})
s(n)&&o.push(n)}),a.collectionAdamIds=r,a.collectionAppIcons=o}a.type=Zk}if(a){if(null!=a.collectionAdamIds&&a.collectionAdamIds.length){const e=a.collectionAdamIds.length
a.artworkGridType=e<=8?rb:e<=16?pm:EC}const r=fn(e,t,a.title,n)
a.clickAction=qi(e,t,r,null),cn(0,a,r)}return a})}(e,t,g.metricsOptions,m)
n&&(n.title&&(n.title=n.title.replace(/\n/g," ")),n.subtitle&&(n.subtitle=n.subtitle.replace(/\n/g," ")),h=n)}break
case rD:const d=Mi(e,t,g)
d.theme=hN,Fl(e,d,p),h=new dG(d)
break
default:if(delete t.attributes.iad,w===TN){const n=function(e,t,n,r=null){return $f.context("bundleLockupFromData",()=>{const o=new tM
return function(e,t,n,r){t&&$f.context("copyDataIntoBundleLockup",()=>{Oi(e,t,n,r)
const o=pe(t,NN)
if(o){const t={lockupOptions:r}
n.children=ji(e,o,t)}})}(e,t,o,n),Ci(e,t,o,r),o})}(e,t,g,p)
Fl(e,n,p),h=new pG(n)}else{const n=Bi(e,t,g,{showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}},p)
Fl(e,n,p)
const o=function(e,t,n,o,i,a){return $f.context("appEventSearchResultFromData",()=>{if(!pn(e)||r(t.meta))return null
const l=c(t.meta,"associations.app-events.data")
if(l.length<=0)return null
const f=u(t.meta,"associations.app-events.attributes.forceAppEvent")
let d,p,h=[]
if(f)h.push(l[0])
else{p=Qr(e,MD,l,!1,i,!1,null,t.id)
const n=p.personalizedData
if(n.length<=0)return null
h=n}const w={...a,targetType:IR},g={...o,metricsOptions:w}
let m
for(const n of h){const o=zn(e,n,t,!1,!0,g.offerEnvironment,g.offerStyle,!1,!1,w,!1,!0,null,!1,!1)
if(!(r(o)||o instanceof Date)&&(d=o,s(d))){m=null!=t?t:he(n,gN)
break}}if(r(d))return null
const y=new wG
y.lockup=n,y.appEvent=d,y.alwaysShowAppEvent=f,y.clickAction=n.clickAction
const T=rc(null,null==p?void 0:p.processingType,null),A={...a,id:d.appEventId,kind:yE,targetType:IR,title:d.title,softwareType:null,recoMetricsData:T}
return s(m)&&(A.relatedSubjectIds=[m.id]),cn(0,y,A),y})}(e,t,n,g,a,l)
s(o)?(h=o,h.condensedBehavior=AD):h=new fG(n)}}return s(h)&&r(h.condensedBehavior)&&(h.condensedBehavior=m),h})}function Nl(e,t){switch(t){case Bb:return Bb
case AD:return AD
case"when-installed":return fm
default:return Ll(e)}}function Ll(e){return e.client.deviceType===CN?fm:AD}function Fl(e,t,n){const o=function(e,t,n,o){var s
if(r(t)||!e.client.isPhone)return null
const a=null===(s=null==t?void 0:t.displayStyle)||void 0===s?void 0:s.metadataPrecedenceOrder
if(!i(a))return null
const c=a.indexOf(n),u=a.indexOf(o)
return-1===c&&-1===u?null:-1!==c&&(-1===u||c<u)}(e,n,Ab,VC)
s(o)&&(t.isEditorsChoice=t.isEditorsChoice&&o)}function $l(e,t){return t===xN?yL:null}async function xl(e,t,n,a,c,l=null,f=null){const d=[],p=[],h=n||null
let w,g
if(i(l)){const n=function(e,t,n,a,c,l,f){var d,p,h,w,g
const m=new hG,y=null!==(d=a.requestDescriptor.isNetworkConstrained)&&void 0!==d&&d
if(ic({id:a_,kind:vw,softwareType:null,targetType:null,title:a_,pageInformation:c.pageInformation,locationTracker:c.locationTracker,idType:WD},a_),o(t))return{result:m}
const T=n[0]
let A
Dn(e,`Adverts received from ad server: ${t.filter(s).map(e=>`[${e.id}]`).join(", ")}`)
let E=!0
for(const n of t){if(r(n))continue
if(xe(e,n)){Dn(e,`[${n.id}] filtered by shouldFilter() - app probably not supported on current os or device`)
continue}const t=En(n.id,null==T?void 0:T.id,l),s=On(T,t)
if(n.attributes.iad=Cn(n,s),o(n.attributes.iad)){Dn(e,`[${n.id}] filtered because no appropriate iAd dictionary was found. (Probably a server issue if hitting this)`)
continue}const a={metricsOptions:{pageInformation:c.pageInformation,locationTracker:c.locationTracker,targetType:SC,isAdvert:!0},hideZeroRatings:!0,artworkUseCase:8,isNetworkConstrained:y,canDisplayArcadeOfferButton:Ha(0,pO)},d=u(Ae(e,n,jb),"format.images"),w=o(A),g=_n(Vi(e,n,a,AG,f)),P=null===(p=null==f?void 0:f.displayStyle)||void 0===p?void 0:p.screenshots,I=Pn(e,g,n.id,s,d,A,P)
if(r(I)){Dn(e,`[${n.id}] will not be displayed because we could not create an ad style compatible with ${kn(A)}`)
continue}if(!vc(e,n,null,I.style)){Dn(e,`[${n.id}] filtered because localization is not available`)
continue}w?(Dn(e,`[${n.id}] first ad dictates ad display style of: ${kn(I)}`),A=I):Dn(e,`[${n.id}] will be displayed because it is compatible with the display style of: ${kn(I)}, which is the same height as display style: ${kn(A)}`),c.pageInformation.iAdInfo.apply(e,n),null===(h=c.pageInformation.iAdInfo)||void 0===h||h.setTemplateType(I.style)
let S=Vi(e,n,a,AG,f)
if(S=bn(S,I,t,E),"TEXT"===I.style){const t=U(n,xd)
t!==uD&&(S.searchAd.advertisingText=Pe(e,n,t===mN?ob:t)),m.displaysScreenshots=!1}i(S)&&(m.lockups.push(S),dc(c.locationTracker),E=!1)}if(cc(c.locationTracker),i(m.lockups)){const n=t[0]
c.pageInformation.iAdInfo.apply(e,n),dc(c.locationTracker)}return A?null===(w=c.pageInformation.iAdInfo)||void 0===w||w.setTemplateType(A.style):null===(g=c.pageInformation.iAdInfo)||void 0===g||g.setTemplateType(null),m.condensedBehavior=AD,{result:m,displayStyle:null==A?void 0:A.style}}(e,l,c,t,a,f,h)
w=n.result,g=n.displayStyle,i(w.lockups)&&d.push(w)}let m=!0
const y=c.filter(e=>e.type===NN).map(e=>e.id),T=to(e,new Set(y))
for(const[r,o]of c.entries()){if(!R(o)){p.push(...c.slice(r))
break}if(xe(e,o,10750))continue
m&&i(null==w?void 0:w.lockups)&&Ln(l,w,o)
const s=Dl(e,o,n,T,a,t.requestDescriptor.isNetworkConstrained,t.requestDescriptor.searchEntity,h)
s&&(m&&i(w)&&i(w.lockups)&&Nn(0,w,s,h,g),d.push(s),m=!1,dc(a.locationTracker))}return await async function(e,t){return await $f.context("applyClientFilteringToIAPs",async()=>{const n={}
for(const e of t)if(e.resultType===wR){const t=e.lockup
t.parent&&t.productIdentifier&&t.parent.bundleId?n[t.productIdentifier]=t.parent.bundleId:$f.unexpectedNull(DD,LN,`required fields for ${t.adamId}`)}return 0===Object.keys(n).length?await Promise.resolve(t):await e.clientOrdering.visibilityForIAPs(n).then(e=>t.filter(t=>{if(t.resultType!==wR)return!0
const n=t.lockup
return!(!n.productIdentifier||!e[n.productIdentifier])||n.isVisibleByDefault}))})}(e,d).then(e=>({builtSearchResults:e,deferredSearchResults:p}))}function Ml(e,t,n,r){const o=new aG(t,t,null,r)
return o.spellCheckEnabled=!1,o.excludedTerms=[n],o.originatingTerm=n,o}function Ul(e,t){return t&&t.results?t.results.slice(0,t.maxPerPage):[]}function Bl(e,t){let n=[]
if(t&&t.results&&(n=t.results.slice(t.maxPerPage,t.results.length)),o(n))return null
const r={...t}
return r.results=n,r}function Gl(e,t){const n=new tG
return s(t)&&(n.facets=Cl(e,t),n.pageFacets=Ol(e),n.selectedFacetOptions=bl(e)),n.results=[],n}function Vl(e,t){const n=new nG([])
return s(t)&&(n.facets=Cl(e,t),n.pageFacets=Ol(e),n.selectedFacetOptions=bl(e)),n}async function Hl(e,t){return await $f.context("searchResultsFromResponse",async()=>{const a=t.catalogResponse,c=t.requestMetadata,u=c.searchRequestUrl,l=t.sponsoredSearchRequestData,f=n(a,"results.guidedSearch"),d=function(e,t,n){var r,o,s,i,a,c,u
return{term:t.term,suggestedTerm:null===(o=null===(r=n.results)||void 0===r?void 0:r.spellCheck)||void 0===o?void 0:o.suggestedTerm,correctedTerm:null===(i=null===(s=n.results)||void 0===s?void 0:s.spellCheck)||void 0===i?void 0:i.correctedTerm,resultsTerm:null!==(u=null===(c=null===(a=n.results)||void 0===a?void 0:a.spellCheck)||void 0===c?void 0:c.correctedTerm)&&void 0!==u?u:t.term,originatingTerm:t.originatingTerm}}(0,c.requestDescriptor,a),p=(h=t.sponsoredSearchAdvertData)&&r(h.error)
var h
const w={locationTracker:{rootPosition:0,locationStack:[]},pageInformation:Bn(e,c.requestDescriptor,a,d,u,l,p,f)},g=e.featureFlags.isEnabled("shelves_2_0_search"),m=g?new nG:new tG
!function(e,t,n,r,s){const a=n.requestDescriptor
ac({pageInformation:s.pageInformation,locationTracker:s.locationTracker,targetType:lm},"")
const c=[]
if(i(r))for(const t of r){const n=vl(e,a,t,s)
n&&(c.push(n),dc(s.locationTracker))}if(o(c)&&n.requestDescriptor.searchEntity){const t=function(e,t,n){const r=t.searchEntity
if(!r)return null
const o=new TW(null,zI)
let s
switch(function(e,t,n,r,o){const s=QP,i=i_,a={targetId:r},c=We(e,r,i,{actionType:s,location:sc({pageInformation:null,locationTracker:o.locationTracker,targetType:i},r),searchTerm:n})
t.actionMetrics.addMetricsData(c)
const u=qe(e,n,i,s,null,a)
t.actionMetrics.addMetricsData(u)}(e,o,t.term,r,n),r){case ON:s=e.loc.string("GUIDED_SEARCH_TOKEN_ENTITY_ARCADE")
break
case Zk:s=e.loc.string("GUIDED_SEARCH_TOKEN_ENTITY_DEVELOPERS")
break
case yO:s=e.loc.string("GUIDED_SEARCH_TOKEN_ENTITY_STORIES")
break
case xN:s=e.loc.string("GUIDED_SEARCH_TOKEN_ENTITY_APPLEWATCH")
break
default:ee(r)}const i=new gW(s,!0,s,o)
return An(0,i,i_,n),i}(e,n.requestDescriptor,s)
c.push(t),dc(s.locationTracker)}const u=function(e,t,n){var r
if(o(n))return null
const s=t.term,i=null!==(r=t.guidedSearchTokens)&&void 0!==r?r:[],a=[]
for(const e of n){const t=e.displayLabel,n=Array.from(i)
if(e.isSelected){const e=n.indexOf(t);-1!==e&&n.splice(e,1)}else n.push(t)
const r=new mW(s,n,e.finalTerm)
a.push(r)}return a}(0,n.requestDescriptor,r)
cc(s.locationTracker),i(c)&&(t.guidedSearchTokens=c,t.guidedSearchQueries=u,function(e,t,n){const r=uc(n.locationTracker)
t.guidedSearchTokensParentImpressionMetrics=new UL({impressionIndex:r,impressionType:lm,idType:qO,id:wm,name:"Search Revisions"})}(0,t,s),dc(s.locationTracker))}(e,m,c,null==f?void 0:f.facets,w)
const y={id:zS,kind:null,softwareType:null,targetType:u_,title:qC,pageInformation:w.pageInformation,locationTracker:w.locationTracker,idType:qO}
let T
g&&(T=new CM(cm),T.id=AW,T.isHorizontal=!1,cn(0,T,y),ic(y,qC))
const A=function(e,t){return b(t.catalogResponse.results.search)}(0,t),E=function(e,t){return function(e,t,n){if(r(n))return t
const s=[],i=t.reduce((e,t)=>({...e,[t.id]:t}),{})
for(const t of n.adverts){const n=i[t.adamId]
if(o(n)){Dn(e,`[${t.adamId}] skipped - Data was not part of original response`)
continue}if(o(n.attributes)){Dn(e,`[${n.id}] skipped - Data is missing attributes`)
continue}const r=_l(e,n,t)
s.push(r)}return s}(e,b(t.catalogResponse.results[um]),t.sponsoredSearchAdvertData)}(e,t),P=function(e){return e.sponsoredSearchAdvertData.installedStates||{}}(t),I=await xl(e,c,a.meta,w,A,E,P)
if(g){const e=m
T.items=I.builtSearchResults,e.resultsParentImpressionMetrics=T.impressionMetrics,e.shelves.push(T)}else{const e=m
e.results=I.builtSearchResults,function(e,t,n){const r=uc(n.locationTracker)
t.resultsParentImpressionMetrics=new UL({impressionIndex:r,impressionType:u_,idType:qO,id:zS,name:qC})}(0,e,w)}return I.deferredSearchResults.length>0&&(m.nextPage=function(e,t,n,r,s){return o(t)?null:{results:t,maxPerPage:30,requestMetadata:n,metricsOptions:s,responseMetadata:null!=r?r:{},contentOffsetWithinResultsShelf:uc(s.locationTracker)}}(0,I.deferredSearchResults,c,a.meta,w)),g&&cc(y.locationTracker),m.message=function(e,t,n){const r=s(t.correctedTerm),o=s(t.suggestedTerm)
return ac({pageInformation:n.pageInformation,locationTracker:n.locationTracker,targetType:nN},"spellCorrection"),r?function(e,t,n){const r=t.term,o=Ml(0,r,t.resultsTerm,eI)
nt(e,o,vN,n.locationTracker)
const s=`<i>${t.correctedTerm}</i>`,i=e.loc.string("SEARCH_SHOWING_RESULTS_FOR_TEMPLATE").replace(JI,s),a=new aM(new sL(i,XR),{}),c=e.loc.string("SEARCH_SEARCH_INSTEAD_FOR_TEMPLATE").replace(JI,r),u={}
u[`${c}`]=o
const l=new aM(new sL(c),u)
return new uG(a,l)}(e,t,n):o?function(e,t,n){const r=t.suggestedTerm,o=Ml(0,r,t.resultsTerm,tI)
nt(e,o,vN,n.locationTracker)
const s=`<i>${r}</i>`,i=e.loc.string("SEARCH_DID_YOU_MEAN_TEMPLATE").replace(JI,s),a={}
a[`${r}`]=o,a[`${r}?`]=o
const c=new aM(new sL(i,XR),a)
return new uG(c)}(e,t,n):(cc(n.locationTracker),null)}(e,d,w),!o(c.requestDescriptor.searchEntity)||(m.facets=Cl(e,c.requestDescriptor.facets,t.categoriesFilterData),m.pageFacets=Ol(e,t.categoriesFilterData),m.selectedFacetOptions=i(t.requestMetadata.requestDescriptor.selectedFacetOptions)?t.requestMetadata.requestDescriptor.selectedFacetOptions:bl(e)),m.isAutoPlayEnabled="tv"!==e.client.deviceType,m.isCondensedSearchLockupsEnabled=e.client.isPhone&&Tn(e),m.transparencyLink=function(e,t,n){if(o(t))return null
const r={}
if(o(U(t,DN)))return null
const s=fn(e,t,e.loc.string(am),{targetType:nN,pageInformation:n.pageInformation,locationTracker:n.locationTracker})
r[`${e.loc.string(am)}`]=Ji(e,t,s,e.host.clientIdentifier)
const i=new sL(e.loc.string("SEARCH_TRANSPARENCY_TEXT"),tD)
return new aM(i,r)}(e,t.transparencyData,w),Mn(e,m,w.pageInformation),m})}async function jl(e,t){const n=function(e){return e.bag.mediaAPISearchHintsEnabled&&Go(e,e.bag.mediaAPISearchHintsRolloutRate)}(e)
return function(e,t,n,r){return $f.context("searchHintsFromApiResponse",()=>{const o={targetType:dh,pageInformation:Un(0,0,n.hintsRequestUrl),locationTracker:{rootPosition:0,locationStack:[]}}
let s=null
i(n.userTypedTerm)&&(s=new aG(n.userTypedTerm,n.userTypedTerm,null,nI),s.spellCheckEnabled=!0,s.prefixTerm=t,dn(0,s,o),nt(e,s,o.targetType,o.locationTracker),dc(o.locationTracker))
const a=n.rawHints.map(n=>function(e,t,n,r,o){const s=function(e,t,n,r,o){if(!t)return n
switch(r){case NN:return o
case _R:return Zk
case iN:return yO
default:return null}}(0,o,t.hintsEntity,t.entity,t.context),i=new aG(t.displayTerm,t.searchTerm,null,UO,s)
return i.spellCheckEnabled=!0,i.prefixTerm=n,dn(0,i,r),nt(e,i,r.targetType,r.locationTracker),dc(r.locationTracker),i}(e,n,t,o,r))
null!=s&&a.unshift(s)
const c=new cG(a,n.ghostHintsTerm),u=qe(e,t,"key",Ow,n.hintsRequestUrl,{})
return c.pageMetrics.pageFields=ct(o.pageInformation),c.pageMetrics.addData(u,[Mf.PageInvocationPoint.pageEnter]),c})}(e,t,await async function(e,t,n){if(n){const n=function(e,t){const n=new xM(e).forType(O_).withLimit(10).withSearchTerm(t).addingQuery(sm,"terms")
e.host.clientIdentifier===TL&&n.addingQuery(zb,OD)
const r=[]
return e.appleSilicon.isSupportEnabled&&r.push(qI),pn(e)&&r.push(aN),r.length>0&&n.enablingFeatures(r),n}(e,t)
return await lr(e,n).then(t=>({hintsRequestUrl:be(e,n).toString(),userTypedTerm:l(t,rm),rawHints:c(t,"results.suggestions"),ghostHintsTerm:l(t,om)}))}{const n=function(e,t){let n=Ox.from(e.bag.searchHintsURL).param("caller",JA).param("v","4")
r(t)||(n=n.param(K_,t))
const o=e.host.clientIdentifier
n=o===yL?n.param(WP,"watchSoftware").param(WI,$P):o===TL?n.param(WI,xP):n.param(WI,oR)
const s=[]
return e.appleSilicon.isSupportEnabled&&s.push(qI),pn(e)&&s.push(aN),s.length>0&&(n=n.param(rv,s.join(","))),n.build()}(e,t),i={url:n,signingStyle:yR}
return await async function(e,t){return await async function(e,t,n){const r=e.network.fetch(t)
return await r.then(e=>{if(!e.ok)throw Error(`Bad Status code ${e.status} for ${t.url}`)
const r=Date.now(),i=n(e.body),a=Date.now()
if(i){const t=function(e,t,n){if(o(e))return null
const r=e[0]
return r.parseStartTime=t,r.parseEndTime=n,r}(e.metrics,r,a)
s(t)&&(i[qf.timingValues]=t)}return i[qf.requestedUrl]=t.url.toString(),i})}(e,t,t=>e.plist.parse(t))}(e,i).then(e=>({hintsRequestUrl:n,userTypedTerm:l(e,rm),rawHints:c(e,UO),ghostHintsTerm:l(e,om)}))}}(e,t,n),n)}function Wl(e,t,n,r){const o=pe(t,kN)
let s=fk
return r.pageType===Yf.ChartsAndCategories&&(s=EP),{id:n.id,kind:null,softwareType:null,targetType:KD,title:n.title,pageInformation:r.metricsPageInformation,locationTracker:r.metricsLocationTracker,idType:s,fcKind:null,canonicalId:l(t.meta,uw),recoMetricsData:D(o)}}function ql(e,t,n,r){return{...r.metricsOptions,...fn(e,n,t.title,null),recoMetricsData:D(n),targetType:zl(t.density),idType:PR}}function Yl(e,t,n,r){return{pageInformation:r.metricsOptions.pageInformation,locationTracker:r.metricsOptions.locationTracker,recoMetricsData:D(n),targetType:zl(t),id:n.id}}function zl(e){if(r(e))return cI
switch(e){case Hf.Density1:return cI
case Hf.Density2:return vO
default:return cI}}function Jl(e,t,n){const r=U(t,KR),o=function(e,t,n){return x(e,t,void 0)}(t,jD),s=p(x(t,"itemDisplayStyle")),i=G(t,"hasSeeAll"),a=i?t.href:null
return new SU(t.id,r,o,i,a,s,n)}function Kl(e,t,n,r){return{metricsOptions:Wl(0,t,n,r)}}function Zl(e,t){const n=U(t,KR),r=l(t,"meta.autoSelectedTabId"),s=l(t,"meta.sourceShelfCanonicalId"),a=$n(e,ek,s,t),u=no(e)
a.recoMetricsData=rc(a.recoMetricsData,null,u)
const f={shelves:[],metricsLocationTracker:{rootPosition:0,locationStack:[]},metricsPageInformation:a,adStitcher:null,adIncidentRecorder:null,pageType:Yf.ChartsAndCategories},d=c(t,RR),p={},h=[],w=[]
for(const t of d){const n=Jl(0,t,Gf.CategoriesAndCharts),r={...f,metricsLocationTracker:{rootPosition:0,locationStack:[]}},s=Xl(e,t,!0,n,r,Kl(0,t,n,r))
if(o(s))continue
p[s.id]=s,h.push(s.id)
const i={actionType:QD,id:s.title,targetType:vN,pageInformation:r.metricsPageInformation,locationTracker:r.metricsLocationTracker},a=new sF(s.id)
Qe(e,a,i)
const c=new RM
c.action=a,c.id=s.id,c.title=s.title,w.push(c)}if(!i(h))return new PU
const g=new kM
g.id=e.random.nextUUID()
const m=new CM("pageTabs")
m.items=[g],p[g.id]=m
const y=new PU
y.shelfMapping=p
const T={}
for(const e of h)w.length>1?T[e]=[g.id,e]:T[e]=[e]
return y.title=n,y.pageTabs=g,y.columnCount=2,y.shelfOrderings=T,y.defaultShelfOrdering=h.includes(r)?r:h[0],g.tabs=w,g.selectedTabId=y.defaultShelfOrdering,Mn(e,y,f.metricsPageInformation),y}function Xl(e,t,n,c,u,f){var d,p,h,w
const g=[],m=we(t,kN),y=new CM(KI)
if(y.isHorizontal=!1,y.id=t.id,y.title=c.title,y.presentationHints={isWidthConstrained:!0},a(null===(d=c.displayStyle)||void 0===d?void 0:d.layoutSize)&&(y.contentsMetadata={type:"searchLandingChartsAndCategoriesSection",numberOfColumns:c.displayStyle.layoutSize}),c.hasSeeAll){const t=new VL(KI)
t.pageUrl=c.seeAllLink,t.title=e.loc.string(Sk)
const n={...f.metricsOptions,targetType:vN}
et(e,t,t.pageUrl,n),y.seeAllAction=t}cn(0,y,f.metricsOptions)
for(const t of m){const o=oa(e,t,n,null===(p=null==c?void 0:c.displayStyle)||void 0===p?void 0:p.layoutDensity),a=x(t,Qb)
let d=null,m=null
if(!i(a))continue
d=l(a,FN),m=l(a,_E)
const y=U(t,mP),T=we(t,yD)
let A=null
if(s(y)){const e=new VL(IC)
e.pageUrl=y,A=e}else{if(!i(T))continue
{const t=yr(e,T[0].href)
if(!i(t))continue
{const e=new VL(yN)
e.pageUrl=t,A=e}}}Qe(e,A,Yl(0,null===(h=null==c?void 0:c.displayStyle)||void 0===h?void 0:h.layoutDensity,t,f))
const E=new IU(d,o,m,A,null===(w=null==c?void 0:c.displayStyle)||void 0===w?void 0:w.layoutDensity)
r(E)||(cn(0,E,ql(e,E,t,f)),g.push(E),dc(u.metricsLocationTracker))}return o(g)?null:(y.items=g,y)}function Ql(e,t,n,c,u,l){switch(l){case Gf.Suggestion:return function(e,t,n,r,s){var i
const c=we(t,kN),u=[],l=new CM(qk)
l.isHorizontal=!1,l.title=r.title,l.presentationHints={isWidthConstrained:!0}
for(const[t,s]of c.entries()){const i={targetType:nN,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},a=ef(e,s,n,r)
cn(0,a.action,{...i,kind:nN,softwareType:null,title:a.action.title,id:`${t}`,idType:WD}),o(a)||(u.push(a),dc(n.metricsLocationTracker))}return o(u)?null:(l.items=u,a(null===(i=r.displayStyle)||void 0===i?void 0:i.layoutSize)?l.contentsMetadata={type:_P,numberOfColumns:r.displayStyle.layoutSize}:(e.client.isPhone||e.client.isPad)&&(l.contentsMetadata={type:_P,numberOfColumns:u.length>=6?2:1}),l)}(e,t,n,u)
case Gf.CategoriesAndCharts:return Xl(e,t,!1,u,n,c)
case Gf.Apps:return function(e,t,n,o,a){const c=[]
let u=function(e){const t=pe(e,kN)
return null==t?void 0:t.data}(t)
const l=new CM(a.shelfStyle)
if(l.isHorizontal=!1,l.title=o.title,l.shouldFilterApps=!1,l.filteringExcludedItems=a.filteringExcludedItems,i(u)){const t=function(e,t,n){const o=Jo(t.adStitcher,n.adPositionInfo)
if(r(o))return null
const i=o.data,a=tf(e,i,t,n)
return s(a)?n.filteringExcludedItems=[i.id]:Rc(e,t.adIncidentRecorder,i),a}(e,n,a)
t&&t instanceof Yx&&(c.push(t),dc(n.metricsLocationTracker),u=u.filter(e=>e.id!==t.adamId))}for(const t of u){if(t.type===PN)return null
if(r(t.attributes))continue
if(xe(e,t,15358))continue
const o=tf(e,t,n,a)
o&&(c.push(o),dc(n.metricsLocationTracker))}return l.items=c,l}(e,t,n,u,c)
default:return null}}function ef(e,t,n,r){var s,a,c
const u=U(t,vk),l=U(t,"displayTerm")||u
if(o(u))return null
const f=new aG(l,l,null,$v)
return i(null===(s=r.searchLandingItemDisplayStyle)||void 0===s?void 0:s.iconKind)&&(null===(a=r.searchLandingItemDisplayStyle)||void 0===a?void 0:a.iconKind)===jf.Symbol&&i(null===(c=r.searchLandingItemDisplayStyle)||void 0===c?void 0:c.iconSymbol)&&(f.artwork=Ve(e,`systemimage://${r.searchLandingItemDisplayStyle.iconSymbol}`)),nt(e,f,vN,n.metricsLocationTracker),new wF(f)}function tf(e,t,n,i){if(o(t))return null
if(i.shelfStyle!==uN)return null
let a=null
!s(i.shelfBackground)||i.shelfBackground.type!==xk&&i.shelfBackground.type!==TP||(a=tN)
const c=xi(e,t,{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:D(t),isAdvert:Qo(0,t)},artworkUseCase:ea(0,i.shelfStyle),offerStyle:a,canDisplayArcadeOfferButton:Ha(0,i.shelfStyle),isContainedInPreorderExclusiveShelf:!1,shouldHideArcadeHeader:!1})
return r(c)||!c.isValid()?null:c}function nf(e,t,n,r,o=null){const s=Kl(0,t,n,r)
return o===Gf.Apps?{...s,shelfStyle:uN,adPositionInfo:TV}:s}async function rf(e,t){const n=ol(e,t)
return null===n?await Promise.resolve(Vl(e,t.facets)):await n.then(async t=>await async function(e,t){return await Hl(e,t)}(e,t))}async function of(e,t){return await async function(e,t){return await $f.context("paginatedSearchResultsPageWithToken",async()=>{const n=Ul(0,t),r=Bl(0,t)
if(0===n.length)return await Promise.resolve(Vl(e))
const o={}
for(const e of n){const t=`${e.id}_${e.type}`
o[t]=e}return await sl(e,n).then(async n=>{var i
const a=b(n)
for(const e of a){const t=`${e.id}_${e.type}`,n=null===(i=o[t])||void 0===i?void 0:i.meta
s(n)&&s(e.meta)?e.meta={...n,...e.meta}:s(n)&&(e.meta=n)}const c={id:zS,kind:null,softwareType:null,targetType:u_,title:qC,pageInformation:t.metricsOptions.pageInformation,locationTracker:t.metricsOptions.locationTracker,idType:qO},u=new CM(cm)
return u.id=AW,u.isHorizontal=!1,cn(0,u,c),ic(c,qC),fc(c.locationTracker,t.contentOffsetWithinResultsShelf),await xl(e,t.requestMetadata,t.responseMetadata,t.metricsOptions,a).then(n=>{u.items=n.builtSearchResults
const o=new nG([u])
return s(r)&&(r.contentOffsetWithinResultsShelf=uc(c.locationTracker),o.nextPage=r),o.isCondensedSearchLockupsEnabled=e.client.isPhone&&Tn(e),o.resultsParentImpressionMetrics=u.impressionMetrics,cc(t.metricsOptions.locationTracker),o})})})}(e,t)}async function sf(e,t){const n=e.required(zH),o=t.url===Ym,a=-1!==t.url.indexOf(XF)
if(o)return await n.fetchPage(e,t.url,fU)
if(a){const r=Ox.from(t.url)
return r.param(w$,SD),await n.fetchPage(e,r.build(),fU)}{const n=v(e),o=new xM(e).forType(AN).includingAdditionalPlatforms(n).includingAttributes($H).includingRelationshipsForUpsell(!0).withSparseCount(e.client.isPad?0:1).usingCustomAttributes(ne(e))
pn(e)&&(o.enablingFeature(aN),o.addingQuery(DR,$O),o.includingScopedRelationships(PN,[gN]),o.includingScopedAttributes(PN,[mN,Fk,$k]),o.includingScopedRelationships(iN,[yD])),mc(e,AN)&&o.enablingFeature("adSupport")
const a=lr(e,o)
a.then(t=>{ss(e,e.user.dsid,t)})
let u=Promise.resolve(null)
const d=new xM(e).forType(iN).withIds(t.onboardingCardIds).includingAdditionalPlatforms(n).includingAttributes($H)
d.ids.size>0&&(u=lr(e,d,{}).catch(()=>{}))
let p=Promise.resolve(null)
return mc(e,AN)&&(p=Sl(e,AN).catch(()=>null),a.then(t=>function(e,t){const n=Tc(e,t,!0)
r(n)||e.ads.setTimeoutForCurrentOnDeviceAdFetch(t,n)}(e,AN))),await Promise.all([a,u,p]).then(([t,n,o])=>function(e,t,n,o){if(r(t))return null
!function(e){let t=!0
const n=c(e.results.data),r={}
for(const e of n){const t=c(e.contents)
for(const e of t){const t=[]
if(R(e)){t.push(e.id)
const n=we(e,ND)
null==n||n.filter(e=>R(e)).forEach(e=>t.push(e.id)),t.forEach(e=>{const t=r[e]
r[e]=t?t+1:1})}}}for(let e=n.length-1;e>=0;e--){const o=n[e],s=Gc(o.contents,r,t)
o.contents=s.contents,t=!s.contentsContainsHydratedData}}(t)
const a=new xH,u=$n(e,Hd,AN,t),d=no(e)
u.recoMetricsData=rc(u.recoMetricsData,null,d),u.iAdInfo=Pc(e,AN,n),a.pageInformation=u,a.refreshController=Qn(t)
const p=b(o),h=i(p),w=[]
if(h){!function(e,t){for(const e of t)e.isOnBoardingCard=!0}(0,p)
for(const e of p)w.push(e.id)}const g=[]
let m=!1
const y=t.results.data.filter(e=>{const t=ke(l(e,LO))
if(s(t)){const e=new Date
return!(t.getTime()>e.getTime())}return!0}),T=Vc(e,y)
for(const t of y){if(s(t.contents)){const n=Qr(e,AN,t.contents,!0,T)
t.contents=n.personalizedData,t.onDevicePersonalizationProcessingType=n.processingType}if(h&&!m){const e=c(t.contents)
t.contents=p.concat(e),m=!0}Lc(g,t)}if(mc(e,AN)){const t=Oc(0,u.iAdInfo)
kc(e,t,n),a.adIncidentRecorder=t
const o=function(e,t,n){var o
const s=null===(o=null==t?void 0:t.onDeviceAd)||void 0===o?void 0:o.positionInfo
if(r(s))return null
const i=f(s,wE)-1
let a=0,c=null,u=null
for(const[e,t]of n.entries()){if(r(t.contents))continue
c=e
const n=a+t.contents.length
if(i<n){u=i-a
break}a=n}return Xo(0,t,{shelfIdentifier:c.toString(),slot:u})}(0,n,y)
a.adStitcher=o}const A=ps(e,a.pageInformation,a.locationTracker)
A&&Nc(g,A)
const E=e.bag.termsAndConditionsURL
r(E)||Nc(g,hs(e,E))
const P=[]
let I=!1,S=!0
for(;!I;){const t=jc(e,g,a,S)
if(r(t))break
P.push(t),I=s(t.url),S=!1}const v={queue:g,context:a}
let _=null
t.results.data.length>0&&(_=l(t.results.data[0].title))
let C=null
P.length>0&&i(P[0].title)&&(C=e.loc.uppercased(P[0].title)),P.splice(0,0,ws(0,"todayPageHeader"))
const O=Hc(e,P,v,w,_,C)
return mc(e,AN)&&(O.adIncidents=bc(0,a.adIncidentRecorder)),Mn(e,O,a.pageInformation),O}(e,t,o,n))}}async function af(e,t){const n=uf().map(e=>new Rx(e)),r=new Ox(t),o=n.find(e=>e.matches(r)).extractParameters(r),s=r.query[E$]||o[S$],i=r.query[m$]||o[m$],a=r.query[P$],c=r.query[I$],u=vr(e,i,a,c),l=_r(e,r)
return await Promise.all([u,l]).then(([t,n])=>{const o=cr(e,n)
return lf(e,t,r,o,s,i)})}async function cf(e,t){const n=Me(0,t)
if(0===n.length)return await Promise.resolve(new bW(null,null,null,[]))
let r=new xM(e,n).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes(ne(e))
return e.appleSilicon.isSupportEnabled&&(r=r.includingAdditionalPlatforms([Yk,cD])),await lr(e,r).then(n=>{const r=Ue(0,t)
return pf(e,n,t,r)})}function uf(e){return[{path:`/{apiVersion}/catalog/{countryCode}/${jF}`,query:[`${m$}`,`${Z$}?`,`${P$}?`]},{path:`/{countryCode}/${jF}/{platform}/{chartType}/{genre}`,query:[`${S$}`]},{path:`/{countryCode}/${jF}/{platform}/{chart}/{genre}`,query:[`${P$}?`]},{path:`/{countryCode}/${jF}/{platform}`}]}function lf(e,t,n,o,s,i){return $f.context("topChartsPageFromApiResponse",()=>{const a=function(e){return c(e,"results.apps").filter(e=>!r(e.data))}(t),u=a.map(o=>function(e,t,n,o,s){return $f.context("segmentFromData",()=>{const i=l(n.query,ED)||s
let a=l(t,Vm)
const c=l(t,FN),u=l(t,Vb),f=$n(e,"TopChartsPage",i,o,`${u} ${c}`),d={rootPosition:0,locationStack:[]},p=[]
let h=0
const w=[]
for(const n of t.data){const t=hf(e,h,n,f,d)
if(t){if(xe(e,n,3070))continue
p.push(t),dc(d),h++}else w.push(n)}const g=[],m=new CM(uN)
m.items=p,e.featureFlags.isEnabled("shelves_2_0_top_charts")&&(m.title=c),g.push(m),r(a)&&(a=c)
const y=new bW(a,c,u,g),T=function(e,t,n,r=null,o,s){return{remainingContent:t,maxPerPage:20,highestOrdinal:0,url:n,metricsPageInformation:o,metricsLocationTracker:s}}(0,w,null,t.next,f,d)
return T.metricsPageInformation=f,T.metricsLocationTracker=d,T.highestOrdinal=h,y.nextPage=T,Mn(e,y,f),y})}(e,o,n,t,i)).sort((e,t)=>e.chart.localeCompare(t.chart)),f=l(a,"0.href"),d=new Ox(f),p=d.query[ED]||i,h=d.query.ages,w=function(e,t){return t.every(e=>function(e){switch(e){case"top-trending-free":case"top-trending-paid":return!0
default:return!1}}(e.chart))?e.loc.string("PAGE_TITLE_TRENDING_CHARTS"):t.every(e=>function(e){switch(e){case"top-emerging-free":case"top-emerging-paid":return!0
default:return!1}}(e.chart))?e.loc.string("PAGE_TITLE_EMERGING_CHARTS"):e.loc.string("PAGE_TITLE_TOP_CHARTS")}(e,u),g=[]
if(null!=o)for(const t of o.categories)t.genreId&&g.push(ff(e,t))
const m=df(p,h,g)
let y
y=null!=m?new kW(p,m.ageBandId,w,u,m.name,g):new kW(p,null,w,u,null,g)
const T=u.findIndex(e=>e.chart===s)
return T>=0&&(y.initialSegmentIndex=T),y})}function ff(e,t){const n=function(e,t,n=null){let r=new xM(e).forType(PO).addingQuery(HE,NN).addingQuery(ED,t).includingMacOSCompatibleIOSAppsWhenSupported(!0)
return n&&(r=r.addingQuery(tb,n)),e.appleSilicon.isSupportEnabled&&(r=r.includingAdditionalPlatforms([Yk,cD])),r}(e,t.genreId,t.ageBandId),r=t.children.map(t=>ff(e,t))
return new RW(t,be(e,n).toString(),r)}function df(e,t,n){for(const r of n){if(t&&r.ageBandId===t||!t&&!r.ageBandId&&r.genreId===e)return r
const n=df(e,t,r.children)
if(n)return n}return null}function pf(e,t,n,r){return $f.context("topChartSegmentFromLookupResponse",()=>{const o=[]
let s=n.highestOrdinal
const i=b(t)
for(const t of i)xe(e,t,3070)||(o.push(hf(e,s,t,n.metricsPageInformation,n.metricsLocationTracker)),dc(n.metricsLocationTracker),s++)
const a=[]
if(o.length>0){const e=new CM(uN)
e.items=o,a.push(e),r.highestOrdinal=s}const c=new bW(null,null,null,a)
return c.nextPage=r,c})}function hf(e,t,n,r,o){return $f.context("lockupFromApiChartItem",()=>xi(e,n,{ordinal:e.loc.decimal(t+1),metricsOptions:{pageInformation:r,locationTracker:o},artworkUseCase:1}))}function wf(e,t){const n=Vc(e,[t])
if(s(t.contents)){const r=Qr(e,"todayWidget",t.contents,!0,n)
t.contents=r.personalizedData}return t}function gf(e,t){const n=new Date,r=new Date
r.setHours(e),r.setMinutes(0)
const o=Math.floor(Math.random()*t*2)-t
return r.setTime(r.getTime()+60*o*1e3),r<n&&r.setDate(r.getDate()+1),r}function mf(e,t,n,r,i,a){const c=[]
let u=0,l=0,f=0
for(const a of t.contents){if(j(a)){u++
continue}const t=we(a,ND),d=Pf(e,a,n,r,i),p=null===d?Af(e,t):[],h=Ef(a),w=[null==d?void 0:d.backgroundColor,1===p.length&&null!==p[0]?p[0].backgroundColor:void 0,N("1C68E2")].find(e=>void 0!==e)
if(0===p.length&&null===d){l++
continue}const g=yf(a,r)
let m=null,y=null,T=null
if(t.length>0&&t[0].type===PN){const e=U(t[0],tv)
if(o(e)){f++
continue}T=U(t[0],AE),m=new Date(e)
const n=U(t[0],nv)
y=s(n)?new Date(n):null}const A=U(a,_k)
c.push(new $W(a.id,g,h,w,L(w),p,Tf(e,a,n,g,i),A===uS,d,T,m,y))}return null!==a&&t.contents.length===u+l+f&&a(`All ${t.contents.length} cards in this ${r?"primary":"secondary"} module were filtered due to being unhydrated (${u}), missing artwork (${l}) or missing metadata (${f})`),c}function yf(e,t){let n=U(e,RD)
if(!t){const t=U(e,jD),r=U(e,hk)
if(t===jR)switch(r){case JC:case zC:n=cu(e)}}return n.replace(/\n/g," ")}function Tf(e,t,n,r,s){let a
switch(n){case Lb:a=0
break
case lS:a=1
break
case N_:a=2
break
default:a=-1}const c={widgetId:s,size:a,targetId:t.id,name:r},u=encodeURIComponent(JSON.stringify(c))
switch(zi(t)){case 4:const n=we(t,yD),r=i(n)&&1===n.length?n[0]:we(t,ND)[0],a=he(r,gN)
if(o(a))break
const c=X(a,_e(e,a),mD)
return s===Nb?`${RF}://launchapp?appId=${f$}${a.id}&bundleId=${c}&metrics=${u}&topic=`:`${RF}:/${WF}/${f$}${a.id}?${ux}=${r.id}${ax}=true&${cx}=${u}`
case 3:const f=we(t,ND)[0],d=X(f,_e(e,f),mD)
return s===Nb?`${RF}://launchapp?appId=${f$}${f.id}&bundleId=${d}&metrics=${u}&topic=`:`${RF}:/${WF}/${f$}${f.id}?${ax}=true&${cx}=${u}`
case 1:return l(x(t,nN),DN)}return s===Nb?`${DF}://itunes.apple.com/${KF}/${f$}${t.id}?${ax}=true&${cx}=${u}`:`${RF}:/${KF}/${f$}${t.id}?${ax}=true&${cx}=${u}`}function Af(e,t){return t.map(t=>t.type===rD?null:ta(e,function(e,t){let n
switch(ho(0,t)){case"com.apple.AppStore.BridgeStoreExtension":n=Pv
break
case"com.apple.MobileSMS":n=Iv
break
default:n=lN}return Oe(e,t,re(e,t),n)}(e,t),{useCase:24,withJoeColorPlaceholder:!0})).filter(e=>null!==e)}function Ef(e){var t
const n=x(e,Qb)
let r=null
i(n)&&(r=l(n,FN))
let o=null
const s=we(e,ND)
return s.length>0&&(o=U(s[0],FN)),U(e,jD)===jR?null!==(t=null!=o?o:r)&&void 0!==t?t:"":null!=r?r:""}function Pf(e,t,n,r,o){let s=null;(o===Nb||U(t,_k)===uS)&&(s=function(e,t,n,r){let o=null
const s=x(t,function(e){return e===Nb?"editorialVideo.breakoutVideo16x9.previewFrame":"editorialVideo.storeFrontVideo4x3.previewFrame"}(n))
return s&&(o=ta(e,s,{withJoeColorPlaceholder:!0,useCase:25}),r||(o.crop="sr")),o}(e,t,o,r))
let i=null,a=null
switch(U(t,jD)){case jR:i=km,a=n===Lb?Um:"nr"
break
case Db:U(t,_k)===D_?(i=Dm,a=n===Lb?Um:"nr"):(i=Nm,a=n===Lb?Bm:Gm)
break
case k_:i=AP,a=n===Lb?Bm:Gm}r||(a="fn")
let c=null
return null!==i&&(c=ta(e,x(t,i),{cropCode:a,useCase:25,withJoeColorPlaceholder:!0})),null!=c?c:s}async function If(e,t){let n
switch(t.family){case 1:n=lS
break
case 2:n=N_
break
default:n=Lb}let r=null
return typeof t.originalResponseHash!==Gk&&null!==t.originalResponseHash&&""!==t.originalResponseHash&&typeof t.originalResponseDate!==Gk&&null!==t.originalResponseDate&&""!==t.originalResponseDate&&(r={hash:t.originalResponseHash,creationDate:t.originalResponseDate}),await async function(e,t,n,r,o){return await new Promise((n,r)=>{let s=null
for(const t of e.bag.tabsStandard)l(t,"id")===xm&&(s=new Ox(l(t,DN)).query.id)
null===s&&r("No Arcade grouping in the bag.")
const a=new MW(s),c=e=>r(e)
lr(e,a.make(e)).then(s=>{const a=gf(2,119)
let u=[]
const l=b(s)
if(i(l)){const e=we(l[0],ER)
if(i(e)){const t=we(e[0],bD)
i(t)&&(u=we(t[0],kN))}}const f=mf(e,{label:"",title:"",meta:{},contents:u},t,!0,Nb,c),d=e.cryptography.hash(Mm,JSON.stringify(f.map(e=>e.id))).toString()
let p
p=null!==o&&i(o.hash)&&i(o.creationDate)&&o.hash===d?o.creationDate:(new Date).toUTCString()
const h={hash:d,creationDate:p},w=function(e,t,n,r,o){const s=Le(t),i=Fe(s,n),a=[...Array(i)].map(()=>[]),c=[...Array(i)].map((e,t)=>new Date(s.getTime()+60*t*60*1e3))
for(const e of a){if(e.length>0)continue
const t=r.shift()
r.push(t)
const n=y(t)
e.push(n)}return a.map((e,t)=>new FW(e,c[t]))}(0,new Date(p),a,f),g=new LW(w,a,h.creationDate,h.hash)
null===g?r("Unable to create a TodayWidgetContainer. Check if any cards were present in the response."):n(g)}).catch(e=>{r(e)})})}(e,n,t.isSnapshot,t.isPreview,r)}async function Sf(e,t){let n
switch(t.family){case 1:n=lS
break
case 2:n=N_
break
default:n=Lb}let a=null
return typeof t.originalResponseHash!==Gk&&null!==t.originalResponseHash&&""!==t.originalResponseHash&&typeof t.originalResponseDate!==Gk&&null!==t.originalResponseDate&&""!==t.originalResponseDate&&(a={hash:t.originalResponseHash,creationDate:t.originalResponseDate}),await async function(e,t,n,a,c){return await new Promise((n,u)=>{if(!function(e,t,n,r){return!r||Go(e,e.bag.todayWidgetLivePreviewRolloutRate)}(e,0,0,a))return void u("No live preview will be shown due to losing the todayWidgetLivePreviewRolloutRate lottery.")
const l=new UW,d=e=>u(e)
lr(e,l.make(e)).then(a=>{const u=f(a,qf.contentMaxAge),l=function(e,t){return r(e)||r(e.results)||o(e.results.data)?(t("Unable to create primary module; no results or data."),null):o(e.results.data[0].contents)?(t("Unable to create primary module; no contents."),null):e.results.data[0].contents.length===e.results.data[0].contents.filter(e=>j(e)).length?(t("Unable to create primary module; none of the cards are hydrated."),null):{label:"",title:"",meta:{},contents:e.results.data[0].contents}}(a,d)
if(null===l)return
const p=function(e){const t={label:"",title:"",meta:{},contents:[]}
if(r(e)||r(e.results)||o(e.results.data))return t
const n=e.results.data.slice(1)
return 0===n.length?t:{label:"",title:"",meta:{},contents:n.map(e=>e.contents).reduce((e,t)=>e.concat(t))}}(a),h=function(t,n,r,o,s){const a=(c=JSON.stringify(t.contents.concat(n.contents).map(e=>e.id))+(null!==r?r.toString():""),e.cryptography.hash(Mm,c))
var c
return null!==s&&i(s.hash)&&i(s.creationDate)&&s.hash===a?s:{hash:a,creationDate:(new Date).toUTCString()}}(l,p,u,0,c),w=function(e,t,n,r){if(null!==t){const n=new Date(e.creationDate)
return n.setSeconds(n.getSeconds()+t),n}return gf(n,r)}(h,u,e.bag.todayWidgetInvalidationHour,e.bag.todayWidgetInvalidationJitterMinutes),g=wf(e,l),m=wf(e,p),T=function(e,t,n,i,a,c,u,l,f){if(r(t))return f("Unable to create a TodayWidgetContainer; primaryModule is null."),null
const d=mf(e,t,i,!0,l,f)
if(0===d.length)return null
const p=mf(e,n,i,!1,l,null),h=function(e,t,n,r,i,a){const c=Le(t),u=Fe(c,n),l={}
for(let e=0;e<r.length;e++){const t=e%r.length*2
l[r[e].storyId]=a===N_?i.slice(t,t+2):[]}const f=function(e,t,n){return function(e,r){const o=[],s=[]
return e.forEach(e=>{return void 0!==(r=e).eventStartDate&&null!==r.eventStartDate&&t<Le(r.eventStartDate)&&Le(r.eventStartDate)<=n?o.push(e):s.push(e)
var r}),[o,s]}(e)}(r,c,n),d=f[0]
let p=f[1]
const h=[...Array(u)].map(()=>[]),w=[...Array(u)].map((e,t)=>new Date(c.getTime()+60*t*60*1e3)),g=new Map
r.concat(i).forEach(t=>{if(s(t.eventStartDate)){const n=Jn(t.eventBadgeKind,t.eventStartDate,t.eventEndDate)
g[t.storyId]=Kn(e,n,t.eventStartDate,t.eventEndDate)}}),d.forEach(e=>{var t
for(let n=((Fe(c,e.eventStartDate)-1)%(t=r.length)+t)%t;n<h.length&&!(e.eventEndDate<=w[n]);n+=r.length)for(let t=0;t<r.length&&!(h.length<=n+t);t++)if(0===h[n+t].length){h[n+t].push(y(e))
for(const r of l[e.storyId])h[n+t].push(y(r))
break}})
for(let e=0;e<h.length;e++){if(h[e].length>0)continue
const t=w[e]
if(p=p.filter(e=>void 0===e.eventEndDate||null===e.eventEndDate||e.eventEndDate>t),0===p.length)break
const n=p.shift()
p.push(n),h[e].push(y(n))
for(const t of l[n.storyId])h[e].push(y(t))}return h.map((e,t)=>{const n=w[t],r=e.map(e=>{const n=g[e.storyId],r=function(e,t){if(o(t))return null
const n=t.filter(t=>null===t.displayFromDate||t.displayFromDate<=e)
return 0===n.length?null:n.pop()}(w[t],n)
return null!==r?(e.heading=r.displayText,e.eventStartDate=r.countdownToDate):e.eventStartDate=null,e})
return new FW(r,n)})}(e,new Date(c.creationDate),u,d,p,i)
return new LW(h,u,c.creationDate,c.hash)}(e,g,m,t,0,h,w,aS,d)
null!==T&&n(T)}).catch(e=>{u(e)})})}(e,n,t.isSnapshot,t.isPreview,a)}var vf,_f,Cf,Of,bf,Rf,kf,Df,Nf,Lf,Ff,$f,xf,Mf,Uf,Bf,Gf,Vf,Hf,jf,Wf,qf,Yf,zf={}
e.r(zf),e.d(zf,{downloadingOrdering:()=>yB,downloadingOrderingCompact:()=>TB,notPurchasedOrdering:()=>gB,notPurchasedOrderingCompact:()=>mB,notPurchasedSpotlightIndex:()=>pB,purchasedOrdering:()=>hB,purchasedOrderingCompact:()=>wB,purchasedSpotlightIndex:()=>dB}),vf={},e.r(vf),e.d(vf,{downloadingOrdering:()=>_B,downloadingOrderingCompact:()=>CB,notPurchasedOrdering:()=>SB,notPurchasedOrderingCompact:()=>vB,notPurchasedSpotlightIndex:()=>EB,purchasedOrdering:()=>PB,purchasedOrderingCompact:()=>IB,purchasedSpotlightIndex:()=>AB}),_f={},e.r(_f),e.d(_f,{notPurchasedOrdering:()=>kB,notPurchasedSpotlightIndex:()=>bB,purchasedOrdering:()=>RB,purchasedSpotlightIndex:()=>OB}),Cf={},e.r(Cf),e.d(Cf,{notPurchasedOrdering:()=>FB,notPurchasedSpotlightIndex:()=>NB,purchasedOrdering:()=>LB,purchasedSpotlightIndex:()=>DB}),Of={},e.r(Of),e.d(Of,{notPurchasedOrdering:()=>UB,notPurchasedSpotlightIndex:()=>xB,purchasedOrdering:()=>MB,purchasedSpotlightIndex:()=>$B}),bf={},e.r(bf),e.d(bf,{notPurchasedOrdering:()=>HB,notPurchasedSpotlightIndex:()=>GB,purchasedOrdering:()=>VB,purchasedSpotlightIndex:()=>BB}),Rf={},e.r(Rf),e.d(Rf,{notPurchasedOrdering:()=>YB,notPurchasedSpotlightIndex:()=>WB,purchasedOrdering:()=>qB,purchasedSpotlightIndex:()=>jB}),kf=e(5881),Df=e(8706),Nf=e(9100),Lf=e(1222)
const Jf=(0,(Ff=e(900)).makeMetatype)("app-store:storeMetrics"),Kf=(0,Ff.makeMetatype)("app-store:device"),Zf=(0,Ff.makeMetatype)("app-store:user"),Xf=(0,Ff.makeMetatype)("app-store:personalizationStore"),Qf=(0,Ff.makeMetatype)("app-store:arcade"),ed=(0,Ff.makeMetatype)("app-store:gameCenter"),td=(0,Ff.makeMetatype)("app-store:resilientDeepLinks"),nd=(0,Ff.makeMetatype)("app-store:ads"),rd=(0,Ff.makeMetatype)("app-store:onDeviceRecommendationsManager"),od=(0,Ff.makeMetatype)("app-store:featureFlags"),sd=(0,Ff.makeMetatype)("app-store:mediaTokenService"),id=(0,Ff.makeMetatype)("app-store:searchLanding"),ad="TabChangeAction",cd="expanded",ud="askToBuy",ld="arcadeAskToBuy",fd="groupingLockup",dd="launchRepair",pd="tapToRate",hd="lockupList",wd="continuation",gd="purchases",md="donate",yd="https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/signupWizard",Td="is32bitOnly",Ad="requires32bit",Ed="is.workflow.my.app",Pd="com.apple.mobileme.fmf1",Id="iPhone",Sd="iPad",vd="com.apple.NanoCompass.watchkitapp",_d="com.apple.DeepBreathing",Cd="com.apple.Depth",Od="com.apple.Mandrake",bd="isIOSBinaryMacOSCompatible",Rd="ACTION_SETTINGS",kd="shareSheet",Dd="systemimage://square.and.arrow.up",Nd="Send Gift",Ld="initiate",Fd="chainlink",$d="todaySingleLockup",xd="iad.format.text",Md="advertDataMalformed",Ud="mapiFetchFail",Bd="NOAD",Gd="APSLA",Vd="adsLocaleMetadata",Hd="Today",jd="systemimage://bell.fill",Wd="SHARE_APP_EVENT_SUBTITLE",qd="j:mm",Yd="SEE_ALL_GAMES",zd="arcade-see-all-games-button",Jd="comingSoonApps",Kd="marketingArtwork",Zd="seed",Xd="upsell",Qd="filter[ageRating]",ep="filter[supportsGameController]",tp="filter[isMultiplayer]",np="PAGE_FACETS_FILTERS_CONTROLLER_SUPPORT",rp="PAGE_FACETS_FILTERS_COMING_SOON",op="PAGE_FACETS_SORT_BY_TITLE",sp="controllerSupport",ip="multiplayer",ap="PAGE_FACETS_INCLUDE_TITLE",cp="000000",up="ARCADE_SUBSCRIBE_PAGE_NOT_NOW",lp="displayBreakoutMaterial",fp="material",dp="breakoutCallToActionLabel",pp="textGradient",hp="notificationSettings",wp="invalidateWidgetsOnFailure",gp="PageData",mp="ProductBuilder",yp="action.kind",Tp="action.url",Ap="Goto",Ep="fileSizeByDevice",Pp="promotionalText",Ip="backgroundAssetsInfo",Sp="backgroundAssetsInfoWithOptional",vp="past",_p="redownload",Cp="placeholderBackground",Op="impressionableAppIconFromData",bp="deviceFamilies",Rp="requiresRosetta",kp="iphone5",Dp="iphone6",Np="iphone6+",Lp="maxEssentialInstallSizeInBytes",Fp="maxDownloadSizeInBytes",$p="maxInstallSizeInBytes",xp="editorialArtwork.topShelf",Mp="posterCardVideo16x9",Up="systemimage://square.and.pencil",Bp="userReviewId",Gp="systemimage://hand.thumbsup",Vp="systemimage://hand.thumbsdown",Hp="guid",jp="formBody",Wp="systemimage://exclamationmark.circle",qp="CONTROLLER_RECOMMENDED",Yp="above",zp="prefersNonStandardBackButton",Jp="DEVELOPER_WATCH",Kp="DEVELOPER_LATEST_RELEASE",Zp="DEVELOPER_BUNDLES",Xp="hasApps",Qp="hasGames",eh="DEVELOPER_APPS_AND_GAMES",th="DEVELOPER_GAMES",nh="DEVELOPER_APPS",rh="DEVELOPER_APPLE_ARCADE",oh="TERMS_AND_CONDITIONS_TITLE",sh="HERO_CAROUSEL_OVERLAY_BUTTON_TITLE_GAME",ih="HERO_CAROUSEL_OVERLAY_BUTTON_TITLE_VIEW",ah="breakoutTall",ch="breakoutFullScreen",uh="renderGroupingPage",lh="groupingAppEvent",fh="subscriptionHero",dh="listItem",ph="editorialNotes.short",hh="achievement",wh="CONTINUE_PLAYING",gh="videoCard",mh="Achievements Hero",yh="locked",Th="inprogress",Ah="completed",Eh="largeHeroBreakout",Ph="medium",Ih="parentShelfItems",Sh="smallBreakout",vh="textColor4",_h="advertPressed",Ch="promotedContent",Oh="contentRatingsBySystem.appsApple.name",bh="userRating.ratingCount",Rh="userRating.value",kh="isVerifiedForAppleSiliconMac",Dh="genreDisplayName",Nh="genres",Lh="APPLOCKUP",Fh="widthConstrainedLockup",$h="descending",xh="editorialItemActionFromData",Mh="iad.lineItem",Uh="clientIdentifierOverride",Bh="targetId",Gh="back",Vh="clientCorrelationKey",Hh="data-metrics",jh="exit",Wh="hasiAdData",qh="viewedInfo",Yh="viewedInfoDetailed",zh="cookie",Jh="ownerDsid",Kh="pageExit",Zh="trampoline",Xh="trampolineContext",Qh="widgetContext",ew="inAppEventId",tw="clip",nw="buttonName",rw="See All",ow="selectedPageFacets",sw="Apps",iw="searchGhostHint",aw="didYouMean",cw="displaysArcadeUpsell",uw="canonicalId",lw="franchise",fw="cardSubType",dw="isOnboardingCard",pw="iAdOdmlSuccess",hw="metadata",ww="iAdIsSpecifiedCreativeUsed",gw="APPSTORE_SEARCH_LANDING_PAGE",mw="APPSTORE_SEARCH_RESULT_PAGE",yw="APPSTORE_TODAY_TAB",Tw="APPSTORE_PRODUCT_PAGE",Aw="APPSTORE_PRODUCT_PAGE_DOWNLOAD",Ew="iAdSlotId",Pw="iAdPageCustomId",Iw="data.search.dataSetId",Sw="macSoftware",vw="iosSoftware",_w="siri",Cw="pending",Ow="input",bw="meta.metrics",Rw="channelPartner",kw="eligibilityType",Dw="upsellScenario",Nw="recurringSubscriptionPeriod",Lw="modeType",Fw="FreeTrial",$w="PayUpFront",xw="{trialPrice}",Mw="PayAsYouGo",Uw="test",Bw="update",Gw="rebuy=true",Vw="FLOW_PREVIEW_OFFER_ACTION_GET",Hw="FLOW_PREVIEW_OFFER_ACTION_PREORDER",jw="{appName}",Ww="PREORDER_NOTIFY_AUTOMATIC_DOWNLOAD_MESSAGE",qw="TV_OFFER_ALERT_FOOTER_LINE_BREAK",Yw="arcade-preorder",zw="contentRatingsBySystem.appsApple.value",Jw="preorderedSubscribed",Kw="checkmark",Zw="preorderedNotSubscribed",Xw="preorderSubscribed",Qw="preorderNotSubscribed",eg="INTRO_PRICE_OFFER_SUBTITLE",tg="AppStore.OfferButton.ExternalPurchases.Subtitle",ng="INLINE_IN_APP_PURCHASES",rg="meta.personalizationData.segId",og="OnDeviceRecommendationsPageController",sg="PRODUCT_PRIVACY_LEARN_MORE_TEMPLATE",ig="{developerName}",ag="<br><br>",cg="privacyPolicy",ug="PRODUCT_PRIVACY_DEFINITIONS_LINK",lg="privacyDefinitions",fg="systemimage://exclamationmark.triangle",dg="USAGE_DATA",pg="systemimage://person.circle",hg="NOT_COMPATIBLE_BANNER",wg="UNSUPPORTED_CAPABILITIES",gg="experimentId",mg="experimentLocale",yg="pageCustomId",Tg="PRODUCT_SECTION_SCREENSHOTS_PREVIEW",Ag="user",Eg="reviewsContainer",Pg="helpful",Ig="displayable-kind",Sg="urlQuery",vg="ratingCount",_g="RATINGS_STATUS_NOT_ENOUGH_RATINGS_OR_REVIEWS",Cg="supportUrl",Og="APP_SUPPORT",bg="genreName",Rg="systemimage://person.crop.square",kg="BADGE_PLAYERS_HEADING",Dg="{maxPlayers}",Ng="BADGE_NO_RATINGS_CAPTION",Lg="backgroundAssets",Fg="{subtitle}",$g="Achievements",xg="gameCenterPlayerGameAchievementSummary",Mg="PRODUCT_SECTION_FEATURED_IN",Ug="largeGameCenterPlayer",Bg="hasEula",Gg="productMediaItem",Vg="createTapToRateProductReviewAction",Hg="PRODUCT_SECTION_MOST_RECENT_VERSION",jg="overview",Wg="titledParagraph",qg="detail",Yg="versionDisplay",zg="{version}",Jg="PRODUCT_SECTION_VIDEOS",Kg="standardInformationShelf",Zg="seventeenPlus",Xg="gracRegistrationNumber",Qg="SEARCH_FACET_IPHONE_ONLY",em="SEARCH_FACET_FREE",tm="SEARCH_FACET_",nm="ageBandId",rm="userTyped",om="ghosting",sm="kinds",im="top-apps",am="SEARCH_TRANSPARENCY_LINK",cm="searchResult",um="ads-result",lm="SearchRevisions",fm="whenInstalled",dm="collection",pm="mixed",hm="guidedLabel",wm="search-revisions",gm="supportsGameController",mm="displayType",ym="appMarkerType",Tm="Acquisition",Am="InlineImage",Em="AppLockup",Pm="InlineVideo",Im="quote",Sm="Small",vm="Medium",_m="Large",Cm="todayIncompleteShelfHydration",Om="greedy",bm="PAGE_TITLE_TODAY",Rm="ignoreEditorialArt",km="editorialArtwork.dayCard",Dm="editorialArtwork.eventCard",Nm="editorialArtwork.generalCard",Lm="todayCardOverlay",Fm="grey",$m="subscriber",xm="ocelot",Mm="sha256",Um="DCEC.AppWS01",Bm="MCGC.AppWS01",Gm="MCGC.AppWL01",Vm="shortName",Hm="RECOMMENDATIONS",jm="engagement-data",Wm="ALL_GAMES",qm="MMMM d, y",Ym="x-as3-internal:/today/test",zm="release",Jm="nonnull",Km="token.pageInformation",Zm="token.excludeAttribution",Xm="token.targetType",Qm="token.metricsKind",ey="systemInformation",ty="token.productVariantData",ny="token.inAppEventId",ry="Purchases",oy="GROUPING_DISCOVER",sy="OnDeviceRecommendationsPageController:handleShelf not implemented",iy="ProductData",ay="Product page preloading is disabled",cy="isViewOnlyProductPageForESSO",uy="lookup",ly="search-recommendation-sections",fy="timeSinceOnScreen",dy="results.contents",py="trending-contents",hy="TodayData",wy="asString",gy="asNumber",my="asBoolean",yy="asJSONValue",Ty="catalog",Ay="engagement",Ey="recommendations",Py="view/see-all",Iy="prefix",Sy="username",vy="password",_y="port",Cy="signatureResumption",Oy="checkForLongUrl",by="getPass",Ry="certId",ky="trending-searches",Dy="searchHints",Ny="personalizedUserReviewUrl",Ly="personalizedUserReviewEnabled",Fy="p2-application-user-rate-content",$y="p2-application-user-write-review",xy="p2-accessory-room",My="passbook",Uy="library-link",By="language-tag",Gy="p2-service-terms-url",Vy="usePostForAppStoreSearch",Hy="isBuyingScheduledGiftCertificateEnabled",jy="isScheduledGiftingEnabled",Wy="AddFundsUrl",qy="account-top-up-title",Yy="personalized-buy-buttons/software",zy="uvSearch/nowplaying-enabled",Jy="supportLinkUrl",Ky="voteUrl",Zy="reportConcernUrl",Xy="reportConcernExplanation",Qy="product-page-report-problem-enabled",eT="product-page-report-problem-url",tT="product-page-report-problem-sad-subscriptions",nT="product-page-report-problem-second-party-apps",rT="reportConcernReasons",oT="createAccountUrl",sT="apps-media-api-host",iT="apps-media-api-preview-host",aT="notification-settings-media-api-host",cT="apps-media-api-search-edge-host",uT="apps-media-api-edge-end-points",lT="apps-media-api-search-ads-limit",fT="countryCode",dT="searchSortOptions",pT="ageBands",hT="processRedirectUrl/whitelistedQueryParams",wT="processRedirectUrl/endpoint",gT="app-store-app-id",mT="arcade-iap-family-id",yT="ocelot-iap-family-id",TT="arcade-iap-offer-name",AT="ocelot-iap-offer-name",ET="transparencyLawEditorialItemId",PT="hideableSystemApps",IT="tabs/standard",ST="watchAppsGrouping",vT="requireAgeVerification",_T="ageRatingLearnMoreEditorialItemId",CT="safariExtensionsGrouping",OT="familySubscriptionsLearnMoreEditorialItemId",bT="commerce-ui-urls/dynamic-url-patterns",RT="commerce-ui-urls/url-patterns",kT="commerce-ui-urls/v2-url-patterns",DT="arcadePreOrderUpsellLimitSeconds",NT="recentlyPlayedGamesWindowInSeconds",LT="enable-privacy-nutrition-labels",FT="appleSiliconMacUnverifiedBadgeEditorialItemId",$T="enableComingSoonToggle",xT="sponsored-search-odml-timeout",MT="search-landing-ad-fetch-timeout",UT="isSearchLandingAdsEnabled",BT="search-landing-offscreen-refresh-interval-in-seconds",GT="search-landing-page-update-delay-interval-in-seconds",VT="supports-apps-slp-v2",HT="apps-slp-v2-rollout-rate",jT="enable-apps-slp-v2-by-treatment",WT="appPrivacyLearnMoreEditorialItemId",qT="suppressedPrivacyLabels",YT="arcadeOfferEditorialItemId",zT="appPrivacyDefinitionsEditorialItemId",JT="todayWidgetInvalidationHour",KT="todayWidgetInvalidationJitterMinutes",ZT="todayWidgetLivePreviewRolloutRate",XT="enableAppEvents",QT="enableProductPageVariants",eA="enable-arcade-trial-eligible-badging",tA="heroCarouselAutoScrollDuration",nA="enableAdditionalLoggingForPPV",rA="enable-on-device-personalization",oA="enable-automatic-page-refresh",sA="today-widget-suggestions-from-today-tab-rollout-rate",iA="enable-system-app-reviews",aA="cancelPreorderItemSrv",cA="getCancellablePreorderItemsSrv",uA="are-preorders-cancellable",lA="enable-external-purchase",fA="enabled-external-purchase-placements",dA="external-purchase-learn-more-editorial-item-id",pA="external-purchase-product-page-banner-include-icon",hA="external-purchase-product-page-banner-use-alternate-copy",wA="external-purchase-product-page-annotation-use-alternate-copy",gA="enabled-ad-placements",mA="ad-placement-timeouts",yA="share-play-apps-editorial-item-id",TA="new-events-for-odj-are-enabled",AA="default-chart",EA="accountUrl",PA="redeemUrl",IA="charityUrl",SA="manageSubscriptionsUrl",vA="manageSubscriptionsV2Url",_A="ads-override-language",CA="ad-placement-eligible-slot-positions",OA="preordersUrl",bA="unrestricted-server-side-tab-badging",RA="game-controller-recommended-rollout-rate",kA="game-controller-learn-more-editorial-item-id",DA="today-ad-condensed-enabled",NA="apps-search-suggestions-enabled",LA="locPreferredLocale",FA="IPHONE_BRAND_NAME",$A="IPAD_BRAND_NAME",xA="APPLE_TV_BRAND_NAME",MA="APPLE_WATCH_BRAND_NAME",UA="MAC_BRAND_NAME",BA="arcadeLaunchRepair",GA="arcadeTabNavBar",VA="hero",HA="list",jA="river",WA="timer",qA="textFollowsTintColor",YA="bundle",zA="editorial",JA="com.apple.AppStore",KA="com.apple.AppStore.Widgets",ZA="purchased",XA="isStandaloneWithCompanionForWatchOS",QA="isDeliveredInIOSAppForWatchOS",eE="free",tE="presentModal",nE="chartHref",rE="results.data",oE="accountDetails",sE="createAccount",iE="sendGift",aE="addFunds",cE="familySharing",uE="Account",lE="Redeem",fE="push",dE="cppAssetsMissing",pE="insufficientAssets",hE="localizationNotAvailable",wE="slot",gE="customers-also-bought-apps-download",mE="deepLink",yE="inAppEvent",TE="transparent",AE="badgeKind",EE="marketingVideo",PE="personal-recommendations",IE="comingSoonGrouping",SE="toggle",vE="comingSoon",_E="badge",CE="subscribe",OE="AppStore.Arcade.Welcome.Family.Button.ExploreArcade",bE="right",RE="external",kE="fulfilled",DE="pageMetrics",NE="arcadeSubscribe",LE="ACTION_OK",FE="messagesScreenshots",$E="supportsFunCamera",xE="requirementsByDeviceFamily",ME="canvas",UE="preview",BE="future",GE="unlistedApps",VE="system-apps",HE="types",jE="customAttributes",WE="appShowcase",qE="checksum",YE="appleWatch_2021",zE="appleWatch_2018",JE="appleWatch",KE="iphone_6_5",ZE="iphone_d73",XE="iphone_d74",QE="editorialArtwork.splashFullScreen",eP="splashVideo16x9",tP="splashVideo4x3",nP="splashVideo3x4",rP="appletv",oP="supportsArcade",sP="decimalPad",iP="hasInAppPurchases",aP="jpeg",cP="prefersOverlayedPageHeader",uP="hasChevron",lP="textLightensOnHighlight",fP="hasSeparator",dP="collectionModule",pP="collectionLockup",hP="Genre",wP="brick",gP="designTag",mP="link.url",yP="editorialStoryCard",TP="interactive",AP="editorialArtwork.mediaCard",EP="static",PP="nonarcade",IP="isArcade",SP="largeBreakout",vP="systemimage://magnifyingglass",_P="searchLandingTrendingSection",CP="inAppPurchaseTiledLockup",OP="doNotFilter",bP="onDevicePersonalizationUseCase",RP="placeholder",kP="editorial-elements:contents",DP="cppData",NP="mediumStoryCard",LP="standardApp",FP="editorialContext",$P="Watch",xP="Messages",MP="discounts",UP="item.offer.buyParams",BP="ARCADE_PREORDER_COMING_SOON",GP="parentId",VP="genreNames",HP="targetType",jP="crossfireReferral",WP="media",qP="cardType",YP="refAppType",zP="SoftwareBundle",JP="com.apple.AppStore.clipOverlay",KP="offerReleaseDate",ZP="buyInitiate",XP="searchOriginatingTerm",QP="hint",eI="undoSpellCorrection",tI="applySpellCorrection",nI="userTypedHint",rI="iAdEligible",oI="impressionId",sI="searchGhostHintPrefix",iI="searchGhostHintTermPhase",aI="searchGhostHintTerm",cI="tile",uI="{postTrialPrice}",lI="ARCADE_PREORDER_LOCKUP_COMING_SOON",fI="confirmation",dI="trial",pI="notSubscribed",hI="INTRO_PRICE_OFFER_FREE_TRIAL",wI="discountOwnedParent",gI="discountUnownedParent",mI="meta.personalizationData.grpId",yI="DATA_NOT_PROVIDED",TI="PRODUCT_PRIVACY_LEARN_MORE_LINK",AI="PRODUCT_PRIVACY_LEARN_MORE_NO_LINK",EI="privacyDetail",PI="privacyCard",II="identifier",SI="wasReset",vI="chartPosition",_I="editorialArtwork.brandLogo",CI="chartPositions",OI="{chartPosition}",bI="BADGE_MFI_HEADING",RI="{minPlayers}",kI="value",DI="deviceCompatibility",NI="inline",LI="watchOS",FI="PRODUCT_SECTION_INFORMATION",$I="PRODUCT_SECTION_SUPPORTS",xI="productReviewAction",MI="INSTALL_SIZE_STRING",UI="{fileSize}",BI="iads",GI="SEARCH_FACET_IPAD_ONLY",VI="SEARCH_FACET_ANY_PRICE",HI="SEARCH_FACET_ANY_CATEGORY",jI="SEARCH_FACET_RELEVANCE",WI="clientApplication",qI="macOSCompatibleIOSApps",YI="showLabelInSearch",zI="guidedToken",JI="{searchTerm}",KI="searchChartsAndCategories",ZI="alternateLabel",XI="contentIds",QI="River",eS="imageWithLabel",tS="upsellForNonacquisitionCanvas",nS="arcadeIcons",rS="AppMarker",oS="framedArtwork",sS="isAcquisition",iS="conservative",aS="com.apple.AppStore.Widgets.Today",cS="TodayForApps",uS="Video",lS="systemMedium",fS="personalization-data",dS="ACCOUNT_SETTINGS",pS="personalizationTransparency",hS="onDevicePersonalization",wS="upsellRecovery",gS="prefersLargeTitleWhenRoot",mS="token.metricsPlatformDisplayStyle",yS="https",TS="work",AS="play",ES="develop",PS="channel-apps",IS="attributes",SS="landing:new-protocol",vS="strict",_S="customArtwork",CS="ratings",OS="suffix",bS="language",RS="apps-media-api-edge-host",kS="FlowAction",DS="arcadeGroupingLockup",NS="arcadeStoryCanvas",LS="arcadeComingSoon",FS="false",$S="productReview",xS="pageChange",MS="com.apple.TVAppStore.AppStoreTopShelfExtension",US="com.apple.appstorecomponentsd",BS="originalUrl",GS="updates",VS="checkForPreorders",HS="fields",jS="minPlayers",WS="maxPlayers",qS="CONTROLLER_OPTIONAL",YS="manageSubscriptions",zS="search-results",JS="search-landing",KS="METADATA",ZS="customScreenshotsByTypeForAd",XS="customVideoPreviewsByTypeForAd",QS="png",ev="topic",tv="startDate",nv="endDate",rv="with",ov="wordmark",sv="buy",iv="breakoutTextAlignment",av="left",cv="target",uv="black",lv="bgColor",fv="rejected",dv="supportURLForLanguage",pv="websiteUrl",hv="merchandised-in-apps",wv="top-in-apps",gv="alternate-apps",mv="app-bundle",yv="cabAdSupport",Tv="ios-apps",Av="imessage-apps",Ev="670",Pv="circularArtwork",Iv="ovalArtwork",Sv="tvRect",vv="unadorned",_v="appleWatch_2022",Cv="iphone_5_8",Ov="backgroundAssetsE",bv="editorialArtwork.bannerUber",Rv="arcadeShowcase",kv="editorial-elements",Dv="singleModule",Nv="materialText",Lv="nonArcade",Fv="heroCarousel",$v="suggested",xv="badge-content",Mv="collections",Uv="largeStoryCard",Bv="abExperiment",Gv="editorialBadgeType",Vv="editorialPriority",Hv="isSubscription",jv="inAppPurchaseInstall",Wv="subscribed",qv="multiple-system-operators",Yv="List",zv="NumberedList",Jv="href",Kv="pageReferrer",Zv="pageUrl",Xv="eventVersion",Qv="data-metrics-impressions-low-latency",e_="iAdMetadata",t_="iAdImpressionId",n_="position",r_="widget",o_="platformDisplayStyle",s_="pageContext",i_="hintsEntity",a_="ad_container",c_="customProductPage",u_="SearchResults",l_="complete",f_="OFFER_BUTTON_TITLE_GET",d_="PREORDER_NOTIFY_MESSAGE",p_="INTRO_PRICE_OFFER_TRIAL",h_="size",w_="privacyDetails",g_="privacyType",m_="NOT_COMPATIBLE_BANNER_TEMPLATE",y_="{linkTitle}",T_="contentRating",A_="{count}",E_="PRIVACY_POLICY",P_="componentBackgroundStandout",I_="LICENSE_AGREEMENT",S_="APP_STORE_EDITORS_NOTES",v_="framedVideo",__="{duration}",C_="four-screenshots",O_="search-hints",b_="guidedSearch",R_="multirooms",k_="Media",D_="AppEventCard",N_="systemLarge",L_="multiplex",F_="customers-also-bought-apps-with-download-intent",$_="user-reviews",x_="searchLanding:see-all",M_="landing",U_="hash",B_="named",G_="dictionary",V_="arcadeTabHeader",H_="blue",j_="releaseDate",W_="actionLinks",q_="multiApp",Y_="singleLockup",z_="com.apple.Arcade.ArcadeTopShelfExtension",J_="gift",K_="term",Z_="externalUrl",X_="categories",Q_="minimumWatchOSVersion",eC="requiresGameController",tC="CONTROLLER_REQUIRED",nC="EventDetails",rC="supportsSharePlay",oC="offerName",sC="trailing",iC="privacyPolicyUrl",aC="developer-other-apps",cC="related-editorial-items",uC="watch-apps",lC="atv-apps",fC="mac-os-compatible-ios-apps",dC="largeLockup",pC="round",hC="roundedRect",wC="expectedReleaseDate",gC="heic",mC="showExpectedReleaseDate",yC="mso",TC="GAME_CENTER",AC="open",EC="small",PC="posterLockup",IC="topCharts",SC="card",vC="actionUrl",_C="impressionType",CC="extRefUrl",OC="extRefApp2",bC="extRefUrl2",RC="offerType",kC="softwareType",DC="searchPrefix",NC="iAdAppStoreClientRequestId",LC="iAdTemplateType",FC="SearchLanding",$C="priceFormatted",xC="{price}",MC="PRODUCT_PRIVACY_TITLE",UC="intermediateDetailPage",BC="languages",GC="controller",VC="userRating",HC="allProductReviewActions",jC="targetPlatform",WC="src",qC="Search Results",YC="rooms",zC="GameOfDay",JC="AppOfDay",KC="FullWidth",ZC="moduleSlice",XC="navigation",QC="ArcadeData",eO="games",tO="SearchData",nO="many",rO="arcadeProductPage",oO="editorialItem",sO="textCards",iO="textLinksShelf",aO="mixedMediaRiver",cO="redeem",uO="price",lO="share",fO="dynamicUI",dO="webView",pO="mixedMediaLockup",hO="toast",wO="upsellBreakout",gO="isCanvasAvailable",mO="application/x-www-form-urlencoded",yO="story",TO="privacy",AO="realityDevice",EO="mac-apps",PO="charts",IO="ipod",SO="inAppPurchaseLockup",vO="pill",_O="previewFrame",CO="appTrailerLockup",OO="screenshotsLockup",bO="{learnMoreLink}",RO="meta.personalizationData.appId",kO="grouping",DO="resource://GameCenterEyebrow",NO="tvOS",LO="date",FO="links",$O="personalizationData",xO="arcadeApp",MO="advertRotation",UO="hints",BO="refUrl",GO="refApp",VO="iAdContainerId",HO="offers",jO="NOT_COMPATIBLE_BANNER_LINK_TITLE",WO="rgb",qO="relationship",YO="ppid",zO="BADGE_MFI_SUPPORTED",JO="apps.apple.com",KO="discover",ZO="few",XO="coercedValue",QO="disabled",eb="appIcon",tb="ages",nb="iap",rb="large",ob="description.standard",sb="annotation",ib="buyParams",ab="menuItem",cb="hide_arcade_header_on_arcade_tab",ub="location",lb="category",fb="singleSelection",db="versionHistory",pb="expectedReleaseDateDisplayFormat",hb="width",wb="height",gb="object",mb="ipadPro",yb="ipad_10_5",Tb="isGameCenterEnabled",Ab="editorialBadgeInfo",Eb="ARCADE_ACTION_TITLE_EXPLORE",Pb="EXPLORE",Ib="pageFields",Sb="impressionQueue",vb="hostApp",_b="trending",Cb="editorsChoice",Ob="arcadeProductPageInlineMessage",bb="productPageInlineMessage",Rb="eula",kb="editorialCopy",Db="Content",Nb="com.apple.AppStore.Widgets.ArcadeHero",Lb="systemSmall",Fb="one",$b="NO_BADGE",xb="GET",Mb="appEvent",Ub="grid",Bb="always",Gb="subtitle",Vb="chart",Hb="remoteControllerRequirement",jb="iad",Wb="customers-also-bought-apps",qb="actionType",Yb="arcadeSeeAllGames",zb="contexts",Jb="latest-release-app",Kb="xros",Zb="ipadPro_2018",Xb="ipad_11",Qb="editorialNotes",eR="prefersLargeTitle",tR="todayBrick",nR="click",rR="pageId",oR="Software",sR="pageDetails",iR="{title}",aR="{osVersion}",cR="compatibilityAnnotation",uR="allProductReviews",lR="tapToRateProductReviewAction",fR="writeAReviewProductReviewAction",dR="Any",pR="Grid",hR="host",wR="inAppPurchase",gR="arcadeGeneric",mR="presentModalFormSheet",yR="platform",TR="isStandaloneForWatchOS",AR="isFirstPartyHideableApp",ER="tabs",PR="its_id",IR="eventModule",SR="POST",vR="videoPreviewsByType",_R="developers",CR="tvos",OR="appletvos",bR="vision",RR="data",kR="todayCard",DR="meta",NR="iAdPlacementId",LR="Search",FR="actionDetails",$R="iAdId",xR="iAdMissedOpportunityReason",MR="create",UR="userProductReviews",BR="bundleParents",GR="notPurchasedLinks",VR="paragraph",HR="iOS",jR="Branded",WR="Arcade",qR="searchResults",YR="kind",zR="upsellMarketingItem",JR="metrics",KR="title",ZR="screenshotsByType",XR="text/x-apple-as3-nqml",QR="iAdSlotInfo",ek="Room",tk="detailPage",nk="editorsChoiceProductReviews",rk="renderPage",ok="bundleChildren",sk="editorialElementKind",ik="sharePlayCapability",ak="osx",ck="type",uk="tagline",lk="gameCenter",fk="its_contentId",dk="query",pk="colored",hk="displaySubStyle",wk="pageType",gk="rating",mk="view",yk="text",Tk="brandedSingleApp",Ak="macOS",Ek="protocol",Pk="arcade-apps",Ik="preorder",Sk="ACTION_SEE_ALL",vk="searchTerm",_k="cardDisplayStyle",Ck="other",Ok="inAppPurchases",bk="subscriptions",Rk="video",kk="pathname",Dk="purchasedLinks",Nk="sort",Lk="searchLanding",Fk="productArtwork",$k="productVideo",xk="color",Mk="smallStoryCard",Uk="defaultValue",Bk="impressions",Gk="undefined",Vk="artistName",Hk="groupings",jk="flowPreview",Wk="eventType",qk="action",Yk="iphone",zk="isAppleWatchSupported",Jk="marketing-items",Kk="custom",Zk="developer",Xk="adamId",Qk="No page routes specified",eD="array",tD="text/plain",nD="finance",rD="in-apps",oD="requiredCapabilities",sD="ios",iD="productPage",aD="short",cD="ipad",uD="none",lD="preorderDisclaimer",fD="mediumLockup",dD="light",pD="product",hD="editorialQuote",wD="featuredIn",gD="mostRecentVersion",mD="bundleId",yD="primary-content",TD="productRatings",AD="never",ED="genre",PD="macRequiredCapabilities",ID="infer",SD="true",vD="capabilities",_D="moreByDeveloper",CD="account",OD="messages",bD="children",RD="label",kD="minimumOSVersion",DD="ignoredValue",ND="card-contents",LD="number",FD="article",$D="privacyFooter",xD="videos",MD="search",UD="productPageYMALDuringDownload",BD="center",GD="similarItems",VD="lockup",HD="isPreorder",jD="displayStyle",WD="sequential",qD="token",YD="achievements",zD="privacyTypes",JD="leading",KD="swoosh",ZD="coercible",XD="informationRibbon",QD="navigate",eN="productPageYMAL",tN="white",nN="link",rN="friendsPlaying",oN="privacyHeader",sN="editorialVideo",iN="editorial-items",aN="appEvents",cN="editorialArtwork",uN="smallLockup",lN="artwork",fN="default",dN="boolean",pN="standard",hN="dark",wN="information",gN="app",mN="description",yN="page",TN="app-bundles",AN="today",EN="pad",PN="app-events",IN="header",SN="topLockup",vN="button",_N="unknown",CN="phone",ON="arcade",bN="screenshots",RN="reviews",kN="contents",DN="url",NN="apps",LN="string",FN="name",$N="mac",xN="watch",MN="shelf"
$f=e(4172)
const UN={}
class BN{constructor(e){this.implementation=e}}class GN extends BN{get isSupportEnabled(){return s(this.implementation)&&this.implementation.isSupportEnabled}get isRosettaAvailable(){return s(this.implementation)&&this.implementation.isRosettaAvailable}}GN.type=(0,Ff.makeMetatype)("app-store:as-wrapper")
class VN extends BN{constructor(e,t){super(e),e.registerBagKeys([{key:ky,type:DN},{key:MD,type:DN},{key:Dy,type:DN},{key:Ny,type:DN},{key:Ly,type:dN},{key:Fy,type:DN},{key:$y,type:DN},{key:xy,type:DN},{key:My,type:DN},{key:Uy,type:DN},{key:JR,type:G_},{key:By,type:LN},{key:bS,type:LN},{key:Gy,type:DN},{key:Vy,type:dN},{key:Hy,type:dN},{key:jy,type:dN},{key:Wy,type:DN},{key:qy,type:LN},{key:Yy,type:DN},{key:zy,type:dN},{key:Jy,type:DN},{key:Ky,type:DN},{key:Zy,type:DN},{key:Xy,type:LN},{key:Qy,type:dN},{key:eT,type:LN},{key:tT,type:eD},{key:nT,type:eD},{key:rT,type:eD},{key:oT,type:DN},{key:sT,type:DN},{key:RS,type:this.mediaEdgeHostBagValueType(t)},{key:iT,type:LN},{key:aT,type:LN},{key:cT,type:LN},{key:uT,type:eD},{key:lT,type:LD},{key:fT,type:LN},{key:dT,type:eD},{key:pT,type:eD},{key:hT,type:eD},{key:wT,type:LN},{key:gT,type:LN},{key:mT,type:LN},{key:yT,type:LN},{key:TT,type:LN},{key:AT,type:LN},{key:ET,type:LN},{key:PT,type:eD},{key:IT,type:eD},{key:ST,type:DN},{key:vT,type:dN},{key:_T,type:LN},{key:CT,type:DN},{key:OT,type:LN},{key:bT,type:eD},{key:RT,type:eD},{key:kT,type:eD},{key:DT,type:LD},{key:NT,type:LD},{key:LT,type:dN},{key:FT,type:LN},{key:$T,type:dN},{key:xT,type:LD},{key:MT,type:LD},{key:UT,type:dN},{key:BT,type:LD},{key:GT,type:LD},{key:VT,type:dN},{key:HT,type:LD},{key:jT,type:dN},{key:WT,type:LN},{key:qT,type:eD},{key:YT,type:LN},{key:zT,type:LN},{key:JT,type:LD},{key:KT,type:LD},{key:ZT,type:LD},{key:XT,type:dN},{key:QT,type:dN},{key:"productPageVariantsTreatmentGroupIdOverride",type:LN},{key:eA,type:dN},{key:tA,type:LD},{key:nA,type:dN},{key:rA,type:dN},{key:oA,type:dN},{key:sA,type:LD},{key:iA,type:dN},{key:aA,type:LN},{key:cA,type:LN},{key:uA,type:dN},{key:lA,type:dN},{key:fA,type:eD},{key:dA,type:LN},{key:pA,type:dN},{key:hA,type:dN},{key:wA,type:dN},{key:gA,type:eD},{key:mA,type:G_},{key:yA,type:LN},{key:TA,type:dN},{key:AA,type:G_},{key:EA,type:LN},{key:PA,type:LN},{key:IA,type:LN},{key:SA,type:LN},{key:vA,type:LN},{key:_A,type:LN},{key:CA,type:G_},{key:OA,type:LN},{key:bA,type:dN},{key:RA,type:LD},{key:kA,type:LN},{key:DA,type:dN},{key:NA,type:dN},{key:"mediaAPISearchHintsRolloutRate",type:LD}])}mediaEdgeHostBagValueType(e){return e.clientIdentifier===US?DN:LN}get trendingSearchesURL(){return this.implementation.url(ky)}get searchHintsURL(){return this.implementation.url(Dy)}get personalizedUserReviewURL(){return this.implementation.url(Ny)}get personalizedUserReviewEnabled(){return this.implementation.boolean(Ly)}get userRateURL(){return this.implementation.url(Fy)}get writeReviewURL(){return this.implementation.url($y)}get accessoryRoomURL(){return this.implementation.url(xy)}get passbookMainURL(){return this.implementation.url(My)}get libraryLinkURL(){return this.implementation.url(Uy)}get metricsConfiguration(){return g(this.implementation.dictionary(JR))}get language(){return this.implementation.string(bS)}get mediaApiLanguage(){return this.implementation.string(By)||this.implementation.string(bS)}get termsAndConditionsURL(){return this.implementation.url(Gy)}get usePostForAppStoreSearch(){return this.implementation.boolean(Vy)}get isMonetaryGiftingEnabled(){return this.implementation.boolean(Hy)}get accountTopUpURL(){return this.implementation.url(Wy)}get accountTopUpTitle(){return this.implementation.string(qy)}get isContentGiftingEnabled(){return this.implementation.boolean(jy)}get buyButtonMetadataURL(){return this.implementation.url(Yy)}get isTVAppEnabled(){return this.implementation.boolean(zy)}get emailSupportLinkURL(){return this.implementation.url(Jy)}get voteUrl(){return this.implementation.url(Ky)}get reportConcernUrl(){return this.implementation.url(Zy)}get reportConcernExplanation(){return this.implementation.string(Xy)}get reportConcernReasons(){return c(w(this.implementation.array(rT)))}get reportProblemEnabled(){var e
return null!==(e=this.implementation.boolean(Qy))&&void 0!==e&&e}get productPageReportProblemURL(){return this.implementation.string(eT)}get productPageReportProblemSADSubscriptionArray(){return c(w(this.implementation.array(tT)))}get productPageReportProblemSecondPartyAppArray(){const e=c(w(this.implementation.array(nT)))
return o(e)?["1473505534","1416238567","640199958","1529498570","915061776","1130498044","1070072560"]:e}get createAccountUrl(){return this.implementation.url(oT)}get mediaCountryCode(){return this.implementation.string(fT)}get mediaHost(){return this.implementation.url(sT)}mediaEdgeHost(e){return e.host.clientIdentifier===US?this.implementation.url(RS):this.implementation.string(RS)}get mediaEdgeSearchHost(){return this.implementation.string(cT)}get mediaPreviewHost(){return this.implementation.string(iT)}get mediaRealmHost(){return this.implementation.string(aT)}get edgeEndpoints(){const e=this.implementation.array(uT)
return typeof e===Gk?[]:c(w(e))}get mediaAdvertRequestLimit(){var e
return null!==(e=this.implementation.double(lT))&&void 0!==e?e:4}get searchSortOptions(){return c(w(this.implementation.array(dT)))}get ageBands(){return c(w(this.implementation.array(pT)))}get redirectUrlWhitelistedQueryParams(){let e=c(w(this.implementation.array(hT)))
return o(e)&&(e=["affC","adId","advp","at","ct","itsct","itscg","itscc","itcCt","its_qt","ls","partnerId","pt","qtkid","uo"]),e}get redirectUrlEndpoint(){var e
return null!==(e=this.implementation.string(wT))&&void 0!==e?e:"https://itunes.apple.com/WebObjects/MZStoreServices.woa/wa/processRedirectUrl"}get aristotleParentAppAdamId(){var e
return null!==(e=this.implementation.string("aristotle-app-id"))&&void 0!==e?e:"383941000"}get arcadeAppAdamId(){return this.implementation.string(gT)}get arcadeProductFamilyId(){var e
return null!==(e=this.implementation.string(mT))&&void 0!==e?e:this.implementation.string(yT)}get arcadeProductId(){var e
return null!==(e=this.implementation.string(TT))&&void 0!==e?e:this.implementation.string(AT)}get searchTransparencyAdamId(){return this.implementation.string(ET)}get systemApps(){return c(w(this.implementation.array(PT)))}get nonDeletableSystemApps(){const e=w(this.implementation.array("nonDeletableSystemApps"))
return i(e)?c(e):[{id:1635387927,"bundle-id":Cd},{id:1635862301,"bundle-id":Od},{id:1584216343,"bundle-id":"com.apple.findmy.finddevices"},{id:1584215960,"bundle-id":"com.apple.NanoWorldClock"},{id:1584215812,"bundle-id":"com.apple.HeartRate"},{id:1584215851,"bundle-id":"com.apple.SessionTrackerApp"},{id:1146562108,"bundle-id":"com.apple.NanoPhone"},{id:1146560473,"bundle-id":"com.apple.MobileSMS"},{id:1584215428,"bundle-id":"com.apple.NanoPhotos"},{id:1459455352,"bundle-id":_d},{id:1067456176,"bundle-id":vd}]}get tabsStandard(){return c(w(this.implementation.array(IT)))}get watchAppsGroupingURL(){var e
return null!==(e=this.implementation.url(ST))&&void 0!==e?e:"https://apps.apple.com/WebObjects/MZStore.woa/wa/viewFeature?id=1472048385"}get requireAgeVerification(){return this.implementation.boolean(vT)}get ageRatingLearnMoreEditorialItemId(){return this.implementation.string(_T)}get appleSiliconMacUnverifiedBadgeEditorialItemId(){return this.implementation.string(FT)}get safariExtensionsGroupingURL(){return this.implementation.url(CT)}get familySubscriptionsLearnMoreEditorialItemId(){return this.implementation.string(OT)}get dynamicUIRegexStrings(){const e=this.implementation.array(bT)
return typeof e===Gk?[]:c(w(e))}get financeUIRegexStrings(){const e=this.implementation.array(RT)
return typeof e===Gk?[]:c(w(e))}get webViewRegexStrings(){const e=this.implementation.array(kT)
return typeof e===Gk?[]:c(w(e))}get arcadePreOrderUpsellLimitSeconds(){var e
return null!==(e=this.implementation.double(DT))&&void 0!==e?e:86400}get recentlyPlayedGamesWindowInSeconds(){var e
return null!==(e=this.implementation.double(NT))&&void 0!==e?e:7776e3}get enableComingSoonToggle(){return this.implementation.boolean($T)}get enablePrivacyNutritionLabels(){var e
return null!==(e=this.implementation.boolean(LT))&&void 0!==e&&e}get arcadeOfferEditorialItemId(){return this.implementation.string(YT)}get sponsoredSearchODMLTimeout(){var e
return null!==(e=this.implementation.double(xT))&&void 0!==e?e:3}get isSearchLandingAdsEnabled(){return this.implementation.boolean(UT)}get searchLandingAdFetchTimeout(){var e
return null!==(e=this.implementation.double(MT))&&void 0!==e?e:.175}get searchLandingPageOffscreenRefreshInterval(){var e
return null!==(e=this.implementation.double(BT))&&void 0!==e?e:60}get searchLandingPageRefreshUpdateDelayInterval(){var e
return null!==(e=this.implementation.double(GT))&&void 0!==e?e:.3}get appPrivacyLearnMoreEditorialItemId(){return this.implementation.string(WT)}get suppressedPrivacyAppIds(){const e=this.implementation.array(qT)
return typeof e===Gk?[]:c(w(e))}get appPrivacyDefinitionsEditorialItemId(){return this.implementation.string(zT)}get todayWidgetInvalidationHour(){var e
return null!==(e=this.implementation.double(JT))&&void 0!==e?e:2}get todayWidgetInvalidationJitterMinutes(){var e
return null!==(e=this.implementation.double(KT))&&void 0!==e?e:119}get todayWidgetLivePreviewRolloutRate(){var e
return null!==(e=this.implementation.double(ZT))&&void 0!==e?e:1}get hero3RolloutRate(){var e
return null!==(e=this.implementation.double("arcade-hero-shelf-tagline-style-rollout-rate"))&&void 0!==e?e:1}get enableAppEvents(){var e
return null!==(e=this.implementation.boolean(XT))&&void 0!==e&&e}get enableProductPageVariants(){var e
return null!==(e=this.implementation.boolean(QT))&&void 0!==e&&e}get enableArcadeTrialEligibleBadging(){return this.implementation.boolean(eA)}get heroCarouselAutoScrollDuration(){var e
return null!==(e=this.implementation.double(tA))&&void 0!==e?e:7}get enableAdditionalLoggingForPPV(){var e
return null!==(e=this.implementation.boolean(nA))&&void 0!==e&&e}get enableOnDevicePersonalization(){const e=this.implementation.boolean(rA)
return!!r(e)||e}get enableAutomaticPageRefresh(){var e
return null===(e=this.implementation.boolean(oA))||void 0===e||e}get widgetSuggestionsFromTodayTabRolloutRate(){var e
return null!==(e=this.implementation.double(sA))&&void 0!==e?e:1}get todayWidgetSmartStackJitterMinutes(){var e
return null!==(e=this.implementation.double("today-widget-smart-stack-jitter-minutes"))&&void 0!==e?e:45}get enableSystemAppReviews(){var e
return null!==(e=this.implementation.boolean(iA))&&void 0!==e&&e}get enableCPPInSearchAds(){return this.implementation.boolean("enableCPPsInSearchAds")||!1}get cancelPreorderItemSrv(){return this.implementation.url(aA)||"https://buy.itunes.apple.com/commerce/preorders/cancel"}get getCancellablePreorderItemsSrv(){return this.implementation.url(cA)||"https://buy.itunes.apple.com/commerce/preorders/cancellable"}get arePreordersCancellable(){var e
return null!==(e=this.implementation.boolean(uA))&&void 0!==e&&e}get enabledAdPlacements(){return c(w(this.implementation.array(gA)))}get adPlacementTimeouts(){return d(g(this.implementation.dictionary(mA)))}get enableExternalPurchases(){var e
return null!==(e=this.implementation.boolean(lA))&&void 0!==e&&e}get enabledExternalPurchasesPlacements(){return c(w(this.implementation.array(fA)))}get externalPurchasesLearnMoreEditorialItemId(){return this.implementation.string(dA)}get sharePlayAppsEditorialItemId(){return this.implementation.string(yA)}get externalPurchasesIncludeProductPageBannerIcon(){var e
return null!==(e=this.implementation.boolean(pA))&&void 0!==e&&e}get externalPurchasesProductPageBannerUseAlternateCopy(){var e
return null!==(e=this.implementation.boolean(hA))&&void 0!==e&&e}get externalPurchasesProductPageAnnotationUseAlternateCopy(){var e
return null!==(e=this.implementation.boolean(wA))&&void 0!==e&&e}get newEventsForODJAreEnabled(){var e
return null!==(e=this.implementation.boolean(TA))&&void 0!==e&&e}get defaultChart(){return g(this.implementation.dictionary(AA))}get accountUrl(){var e
return null!==(e=this.implementation.string(EA))&&void 0!==e?e:"https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/accountSummary"}get redeemUrl(){var e
return null!==(e=this.implementation.string(PA))&&void 0!==e?e:"https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/redeemLandingPage"}get charityUrl(){var e
return null!==(e=this.implementation.string(IA))&&void 0!==e?e:"https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/buyCharityGiftWizard"}get manageSubscriptionsUrl(){var e
return null!==(e=this.implementation.string(SA))&&void 0!==e?e:"https://finance-app.itunes.apple.com/subscriptions/manage?context=deeplink"}get manageSubscriptionsV2Url(){var e
return null!==(e=this.implementation.string(vA))&&void 0!==e?e:"https://apps.mzstatic.com/content/54a1317a0ad442d3965d64ef6bfaae1c/"}get adsOverrideLanguage(){return this.implementation.string(_A)}get gameControllerRecommendedRolloutRate(){var e
return null!==(e=this.implementation.double(RA))&&void 0!==e?e:0}get gameControllerLearnMoreEditorialItemId(){return this.implementation.string(kA)}get mediaAPISearchHintsEnabled(){var e
return null!==(e=this.implementation.boolean(NA))&&void 0!==e&&e}get mediaAPISearchHintsRolloutRate(){var e
return null!==(e=this.implementation.double("apps-search-suggestions-rollout-rate"))&&void 0!==e?e:0}get supportsSearchLandingPageV2(){return this.implementation.boolean(VT)}get enableSearchLandingPageV2ByTreatment(){var e
return null!==(e=this.implementation.boolean(jT))&&void 0!==e&&e}get searchLandingPageV2RolloutRate(){return this.implementation.double(HT)}get adPlacementEligibleSlotPositions(){const e=g(this.implementation.dictionary(CA))
return i(e)?e:{today:[{shelfIdentifier:"0",slot:0},{shelfIdentifier:"0",slot:1}],"product-page-ymal":[{shelfIdentifier:Wb,slot:0}]}}get managePreordersUrl(){var e
return null!==(e=this.implementation.string(OA))&&void 0!==e?e:"https://finance-app.itunes.apple.com/preorders"}get unrestrictedServerSideTabBadging(){var e
return null!==(e=this.implementation.boolean(bA))&&void 0!==e&&e}get todayAdCondensedEnabled(){var e
return null!==(e=this.implementation.boolean(DA))&&void 0!==e&&e}}VN.type=(0,Ff.makeMetatype)("app-store:bag-wrapper")
class HN{constructor(){this.$incidents=void 0}isValid(){return!0}}class jN extends HN{constructor(e=null){super(),this.impressionMetrics=e}}class WN extends HN{constructor(e,t,n,r,o,s,i,a,c,u,l,f,d,p,h,w,g){super(),this.buyParams=e,this.vendor=t,this.appName=n,this.bundleId=r,this.appPlatforms=o,this.isPreorder=null!=s&&s,this.excludeAttribution=null==i||i,this.metricsPlatformDisplayStyle=a,this.isRedownload=null!=u&&u,this.lineItem=c,this.preflightPackageUrl=void 0===l?null:l,this.isArcadeApp=f,this.isHalva=d,this.inAppEventId=p,this.extRefApp2=h,this.extRefUrl2=w,this.additionalHeaders=g}}class qN extends HN{constructor(e,t,n,r,o,s,i,a,c,u,l,f,d,p,h,w,g,m,y,T){super(),this.offerType=e,this.adamId=t,this.parentAdamId=r,this.style=null==n?ID:n,this.environment=null==o?dD:o,this.tint=null==s?H_:s,this.offerTint=null==i?{type:H_}:i,this.titles=null==a?{}:a,this.titleSymbolNames=null==c?{}:c,this.subtitles=null==u?{}:u,this.hasInAppPurchases=l,this.hasExternalPurchases=f,this.isDeletableSystemApp=d,this.isFree=p,this.isPreorder=h,this.offerLabelStyle=null==w?uD:w,this.hasDiscount=g,this.contentRating=m,this.subscriptionFamilyId=y,this.overrideLocale=T}newOfferDisplayPropertiesChangingAppearance(e,t,n,r,o){return new qN(this.offerType,this.adamId,null==t||!e&&this.style===QO?this.style:t,this.parentAdamId,null==n?this.environment:n,null==r?this.tint:r,null==o?this.offerTint:o,this.titles,this.titleSymbolNames,this.subtitles,this.hasInAppPurchases,this.hasExternalPurchases,this.isDeletableSystemApp,this.isFree,this.isPreorder,this.offerLabelStyle,this.hasDiscount,this.contentRating,this.subscriptionFamilyId,this.overrideLocale)}}class YN extends HN{constructor(e,t,n){super(),this.offerAction=t,this.offerDisplayProperties=n,this.personalizedOfferType=e}}!function(e){e[e.scaleToFill=0]="scaleToFill",e[e.scaleAspectFit=1]="scaleAspectFit",e[e.scaleAspectFill=2]="scaleAspectFill",e[e.redraw=3]="redraw",e[e.center=4]="center",e[e.top=5]="top",e[e.bottom=6]="bottom",e[e.left=7]="left",e[e.right=8]="right",e[e.topLeft=9]="topLeft",e[e.topRight=10]="topRight",e[e.bottomLeft=11]="bottomLeft",e[e.bottomRight=12]="bottomRight"}(xf||(xf={}))
class zN extends HN{constructor(e,t,n){super(),this.format=e,this.quality=t,this.supportsWideGamut=n}isValid(){return this.format&&void 0!==this.supportsWideGamut}}class JN extends HN{constructor(e,t,n,r,o){super(),this.checksum=null,this.backgroundColor=null,this.style=null,this.crop="bb",this.contentMode=null,this.template=e,this.width=t,this.height=n,this.variants=r,this.backgroundColor=o}isPortrait(){return this.height>=this.width}isLandscape(){return!this.isPortrait()}isValid(){return this.template&&this.width>0&&this.height>0&&this.variants.length>0}}class KN extends HN{constructor(e,t){super(),this.artwork=e,this.mediaPlatform=t}}class ZN extends HN{constructor(e,t,n,r,o,s){super(),this.appPlatform=e,this.supplementaryAppPlatforms=n||[],this.deviceCornerRadiusFactor=r,this.mediaType=t,this.deviceBorderThickness=o,this.outerDeviceCornerRadiusFactor=s}isEqualTo(e){this.supplementaryAppPlatforms.sort(),e.supplementaryAppPlatforms.sort()
const t=this.supplementaryAppPlatforms.join(",")===e.supplementaryAppPlatforms.join(",")
return e.appPlatform===this.appPlatform&&e.mediaType===this.mediaType&&t&&e.deviceCornerRadiusFactor===this.deviceCornerRadiusFactor}}class XN{constructor(e,t){this.width=e,this.height=t}static fromNativeSize(e){return new XN(e.width,e.height)}isEqualTo(e){return e.width===this.width&&e.height===this.height}}class QN extends HN{constructor(e,t,n,r,o,s){super(),this.itemName=e,this.url=t,this.developer=n,this.category=r,this.fileSize=o,this.mediaType=s}}class eL extends HN{constructor(e,t,n){super(),this.context=FD,this.text=e,this.subtitle=t,this.artwork=n}}class tL extends HN{constructor(e,t,n){super(),this.context=Mb,this.text=e,this.subtitle=t,this.artwork=n}}class nL extends HN{constructor(e,t,n,r,o,s,i,a,c,u,l,f){super(),this.context=pD,this.adamId=e,this.storeFrontIdentifier=t,this.name=n,this.platform=r,this.icon=o,this.screenshots=s,this.videos=i,this.isMessagesOnlyApp=a,this.subtitle=c,this.genreName=u,this.messagesAppIcon=l,this.notesMetadata=f}}class rL extends HN{constructor(e,t,n){super(),this.metadata=e,this.url=t,this.shortUrl=n}}class oL extends HN{constructor(e,t,n){super(),this.reasonId=e,this.name=t,this.uppercaseName=n}}class sL extends HN{constructor(e,t=tD){super(),this.rawText=e,this.rawTextType=t}}class iL extends jN{constructor(e,t,n){super(),this.text=e,this.mediaType=t||tD,this.style=n||pN,this.alignment="localized",this.isCollapsed=!1,this.suppressVerticalMargins=!1,this.wantsCollapsedNewlines=!0}}class aL extends HN{constructor(e,t=null,n=null){super(),this.actions=e,this.offerDisplayProperties=t,this.offerActionIndex=n}}class cL extends jN{}class uL extends HN{constructor(e){super(),this.isFallbackStyle=!1,this.type=e}}class lL extends jN{constructor(e,t,n,r,o,s){super(),this.bundleId=e,this.completedAchievements=t,this.totalAchievements=n,this.completedText=r,this.action=o,this.achievements=s}}class fL extends HN{constructor(e){super(),this.type=e}}class dL extends HN{constructor(e,t,n,r){super(),this.id=e,this.title=t,this.subtitle=n,this.status=r}}class pL extends HN{constructor(e,t,n,r){super(),this.adamId=e,this.platformId=t,this.isArcade=n,this.records=r}}class hL extends HN{constructor(e,t){super(),this.playerId=e,this.timestamp=t}}class wL extends HN{constructor(e,t,n){super(),this.videoUrl=e,this.preview=t,this.allowsAutoPlay=n.allowsAutoPlay,this.looping=n.looping,this.canPlayFullScreen=n.canPlayFullScreen,this.showPlaybackControls=n.showPlaybackControls,this.playbackControls={...n.playbackControls},this.autoPlayPlaybackControls={...n.autoPlayPlaybackControls},this.templateMediaEvent=null}}class gL{constructor(e,t,n,r){this.fileSizeByDevice=e,this.maxDownloadSizeInBytes=t,this.maxInstallSizeInBytes=n,this.maxEssentialInstallSizeInBytes=r}}const mL="com.apple.AppStore",yL="com.apple.AppStore.BridgeStoreExtension",TL="com.apple.MobileSMS",AL="com.apple.Arcade",EL="com.apple.TVAppStore",PL="com.apple.AppStore.ProductPageExtension"
class IL extends BN{get buildType(){return this.implementation.buildType}get deviceType(){return this.implementation.deviceType}get guid(){return this.implementation.guid}get isActivityAvailable(){return this.implementation.isActivityAvailable}get isElectrocardiogramInstallationAllowed(){return this.implementation.isElectrocardiogramInstallationAllowed}get isScandiumInstallationAllowed(){return this.implementation.isScandiumInstallationAllowed}get isSidepackingEnabled(){return this.implementation.isSidepackingEnabled}get isTinkerWatch(){return this.implementation.isTinkerWatch}get newPaymentMethodEnabled(){return this.implementation.newPaymentMethodEnabled}get screenCornerRadius(){return this.implementation.screenCornerRadius}get screenSize(){return XN.fromNativeSize(this.implementation.screenSize)}get storefrontIdentifier(){return this.implementation.storefrontIdentifier}get supportsHEIF(){return this.implementation.supportsHEIF}get thinnedApplicationVariantIdentifier(){return this.implementation.thinnedApplicationVariantIdentifier}get isMandrakeSupported(){return this.implementation.isMandrakeSupported}get isCharonSupported(){return this.implementation.isCharonSupported}isPairedSystemVersionAtLeast(e){return this.implementation.isPairedSystemVersionAtLeast(e)}deletableSystemAppCanBeInstalledOnWatchWithBundleID(e){return this.implementation.deletableSystemAppCanBeInstalledOnWatchWithBundleID(e)}deviceHasCapabilities(e){return this.implementation.deviceHasCapabilities(e)}isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(e,t,n){return this.implementation.isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(e,t,n)}isAutomaticDownloadingEnabled(){return this.implementation.isAutomaticDownloadingEnabled()}isAuthorizedForUserNotifications(){return this.implementation.isAuthorizedForUserNotifications()}isActivePairedWatchSystemVersionBelow(e){const t=e.split("."),n=f(t[0])||0,r=f(t[1])||0,o=f(t[2])||0
return!this.implementation.isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(n,r,o)}get isPhone(){return this.deviceType===CN}get isPad(){return this.deviceType===EN}get isiOS(){return this.isPhone||this.isPad}get isMac(){return this.deviceType===$N}get isTV(){return"tv"===this.deviceType}get isWatch(){return this.deviceType===xN}get isVision(){return this.deviceType===bR}}IL.type=(0,Ff.makeMetatype)("app-store:client-wrapper")
class SL extends BN{async orderedVisibleIAPs(e,t,n,r){return await new Promise((o,s)=>{const i=t.filter(e=>null!=e),a=n.filter(e=>null!=e)
this.implementation.orderedVisibleIAPs(e,i,a,r,(e,t)=>{t?s(t):o(e)})})}async visibilityForIAPs(e){return await new Promise((t,n)=>{this.implementation.visibilityForIAPs(e,(e,n)=>{t(n?{}:e)})})}}SL.type=(0,Ff.makeMetatype)("app-store:client-ordering-wrapper")
class vL extends BN{get clientIdentifier(){return this.implementation.clientIdentifier}get clientVersion(){return this.implementation.clientVersion}get deviceLocalizedModel(){return this.implementation.deviceLocalizedModel}get deviceModel(){return this.implementation.deviceModel}get deviceModelFamily(){return this.implementation.deviceModelFamily}get devicePhysicalModel(){return this.implementation.devicePhysicalModel}get osBuild(){return this.implementation.osBuild}get platform(){return this.implementation.platform}isOSAtLeast(e,t,n){return this.implementation.isOSAtLeast(e,t,n)}get isiOS(){return this.platform===HR}get isMac(){return this.platform===Ak}get isTV(){return this.platform===NO}get isWatch(){return this.platform===LI}get isWeb(){return"web"===this.platform}get isVision(){return"xrOS"===this.platform}}vL.type=(0,Ff.makeMetatype)("app-store:host-wrapper")
class _L{constructor(){this.locData={},this.language="en"}updateLocalizationData(e,t){this.locData=e,this.language=t}localize(e,t){let n=this.locData[e]
return void 0!==n&&typeof n===LN||(n=e),t&&(n=this.replaceTokens(n,t)),n=this.replaceMarkupTokens(n,t),n}localizeWithCount(e,t,n){let r,o,s=null
return 0===t&&(r=`${e}.zero`,this.isLocalized(r)&&(s=r)),null===s&&(s=e,o=this.pluralCategory(t),o!==Ck&&(r=`${e}.${o}`,this.isLocalized(r)&&(s=r))),n||(n={}),void 0===n.count&&(n.count=this.formatNumber(t.toString())),void 0===n.number&&(n.number=this.formatNumber(t.toString())),this.localize(s,n)}replaceTokens(e,t){return Object.entries(t).forEach(([t,n])=>{const r="@@"+t+"@@"
e=this.replaceSubstring(e,r,n)}),e}replaceMarkupTokens(e,t){if(e.indexOf("##")<=-1)return e
let n
return t?(n={..._L.MARKUP_PARAMS},Object.entries(t).forEach(([e,t])=>{n[e]=t})):n=_L.MARKUP_PARAMS,Object.entries(n).forEach(([t,n])=>{const r="##"+t+"##"
e=e.replace(new RegExp(r,"gi"),n)}),e=e.replace(/##([^##]+)##/gi,"<$1>")}replaceSubstring(e,t,n){return e.split(t).join(n)}formatNumber(e){let t=this.locData._decimalSeparator
void 0!==t&&typeof t===LN||(t=".")
let n=this.locData._thousandsSeparator
void 0!==n&&typeof n===LN||(n=".")
const r=parseFloat(e).toString().split("."),o=r[0].split("")
for(let e=o.length-3;e>0;e-=3)o.splice(e,0,n)
return r[0]=o.join(""),r.join(t)}isLocalized(e){const t=this.locData[e]
return void 0!==t&&typeof t===LN&&(-1===e.indexOf(".")||t!==e&&(0!==t.indexOf("**")||t.lastIndexOf("**")!==t.length-2))}pluralCategory(e){const t=_L.pluralCategoryFnByLanguage[this.language]
return void 0!==t?t(e):Ck}}_L.MARKUP_PARAMS={nbsp:"&nbsp;",gt:"&gt;",lt:"&lt;",copy:"\xa9"},_L.pluralCategoryDefault=function(e){return Ck},_L.pluralCategoryOne=function(e){return 1===e?Fb:Ck},_L.pluralCategoryArabic=function(e){const t=e>>0
if(t!==e)return Ck
if(0===t)return"zero"
if(1===t)return Fb
if(2===t)return"two"
const n=t%100
return n>=11?nO:n>=3?ZO:Ck},_L.pluralCategoryFrench=function(e){return e<2&&e>=0?Fb:Ck},_L.pluralCategoryHebrew=function(e){const t=e>>0
return t!==e?Ck:1===t?Fb:2===t?"two":0==t%10&&t>10?nO:Ck},_L.pluralCategoryPolish=function(e){const t=e>>0
if(t!==e)return Ck
if(1===t)return Fb
const n=t%10
if(n<=4&&n>=2){const e=t%100
if(e>14||e<12)return ZO}return nO},_L.pluralCategoryRomanian=function(e){const t=e>>0
if(t!==e)return ZO
if(0===t)return ZO
if(1===t)return Fb
const n=e%100
return n<=19&&n>=1?ZO:Ck},_L.pluralCategoryRussian=function(e){const t=e>>0
if(t!==e)return Ck
const n=t%10
if(n>=5||0===n)return nO
const r=t%100
return r<=14&&r>=11?nO:1===n?Fb:ZO},_L.pluralCategoryFnByLanguage={zh:_L.pluralCategoryDefault,id:_L.pluralCategoryDefault,ja:_L.pluralCategoryDefault,ko:_L.pluralCategoryDefault,ms:_L.pluralCategoryDefault,th:_L.pluralCategoryDefault,vi:_L.pluralCategoryDefault,en:_L.pluralCategoryOne,ca:_L.pluralCategoryOne,da:_L.pluralCategoryOne,nl:_L.pluralCategoryOne,de:_L.pluralCategoryOne,el:_L.pluralCategoryOne,fi:_L.pluralCategoryOne,hu:_L.pluralCategoryOne,it:_L.pluralCategoryOne,nb:_L.pluralCategoryOne,no:_L.pluralCategoryOne,pt:_L.pluralCategoryOne,es:_L.pluralCategoryOne,sv:_L.pluralCategoryOne,tr:_L.pluralCategoryOne,ar:_L.pluralCategoryArabic,fr:_L.pluralCategoryFrench,iw:_L.pluralCategoryHebrew,pl:_L.pluralCategoryPolish,ro:_L.pluralCategoryRomanian,ru:_L.pluralCategoryRussian}
class CL extends BN{constructor(){super(...arguments),this.locFile=null,this.ampLoc=new _L,this.LOC_STRING_CACHE={}}get arcadeWordmarkAssetName(){return this.implementation.arcadeWordmarkAssetName}get identifier(){return this.implementation.identifier}get safeIdentifier(){return this.implementation.identifier.split("_")[0]}string(e,t){let n=this.LOC_STRING_CACHE[e]
if(!n)if(n=this.implementation.string(e),n&&n!==e)this.LOC_STRING_CACHE[e]=n
else{const r=this.ampLoc.localize(e)
n=r!==e?r:t||e}return n}stringForPreferredLocale(e,t,n,r){if(e.props.isNotEnabled(LA)||o(n))return this.string(t,r)
const s=`${t}_${n}`
let i=this.LOC_STRING_CACHE[s]
if(!i)if(i=this.implementation.stringForPreferredLocale(t,n),i&&i!==t)this.LOC_STRING_CACHE[s]=i
else{const e=this.ampLoc.localize(t)
i=e!==t?e:r||t}return i}stringWithCount(e,t,n){let r=this.implementation.stringWithCount(e,t)
if(!r||r===e){const o=this.ampLoc.localizeWithCount(e,t,n)
o&&(r=o)}return r}stringWithCounts(e,t,n){return this.implementation.stringWithCounts(e,t)}uppercased(e){return e?e.toLocaleUpperCase(this.safeIdentifier):null}decimal(e,t){let n=this.implementation.decimal(e,t)
return n||(n=typeof e===LD?`* ${e.toString()} *`:this.nullString()),n}fileSize(e){let t=this.implementation.fileSize(e)
return t||(t=this.nullString()),t}formattedCount(e){let t=this.implementation.formattedCount(e)
return t||(t=this.nullString()),t}formattedCountForPreferredLocale(e,t,n){if(e.props.isNotEnabled(LA)||o(n))return this.formattedCount(t)
let r=this.implementation.formattedCountForPreferredLocale(t,n)
return r||(r=this.nullString()),r}timeAgoWithContext(e,t){let n=this.implementation.timeAgoWithContext(e,t)
return n||(n=this.nullString()),n}formatDate(e,t){let n=this.implementation.formatDate(e,t)
return n||(n=this.nullString()),n}formatDateWithContext(e,t,n){let r=this.implementation.formatDateWithContext(e,t,n)
return r||(r=this.nullString()),r}formatDateInSentence(e,t,n){let r=this.implementation.formatDateInSentence(e,t,n)
return r||(r=this.nullString()),r}relativeDate(e){let t=this.implementation.relativeDate(e)
return t||(t=this.nullString()),t}formatDuration(e,t){let n=this.implementation.formatDuration(e,t)
return n||(n=this.nullString()),n}applyLocalizations(e,t,n){this.isLocFileLoaded(e)||(this.locFile=e,this.ampLoc.updateLocalizationData(t,n.slice(0,2)))}isLocFileLoaded(e){return this.locFile===e}normalizedLocale(e,t,n){if(null==t)return null
if("yue-hant"===(t=t.toLowerCase())){const t=e.props.asString("macauStorefrontIdentifier")
return typeof n===LN&&-1!==n.indexOf(t)?"zh-ma":"zh-hk"}return t}nullString(){return"* null *"}load(e){if(void 0===e.bag.language||null===e.bag.language)throw new Error("Bag language is not available. Unable to load localizations.")
const t=this.normalizedLocale(e,e.bag.language,e.client.storefrontIdentifier),n=`local/${t}`
if(!this.isLocFileLoaded(n)){const r=e.props.asDictionary(`localizations.${t}`)
if(null!=r)this.applyLocalizations(n,r,t)
else{const r=e.props.asDictionary("localizations.en-us")
null!=r&&this.applyLocalizations(n,r,t)}}}deviceDisplayName(e){if(e.host.deviceLocalizedModel)return e.host.deviceLocalizedModel
switch(e.client.deviceType){case CN:const e=this.string(FA)
return e===FA?Id:e
case EN:const t=this.string($A)
return t===$A?Sd:t
case"tv":const n=this.string(xA)
return n===xA?"Apple\xa0TV":n
case xN:const r=this.string(MA)
return r===MA?"Apple\xa0Watch":r
case $N:const o=this.string(UA)
return o===UA?"Mac":o
default:return null}}}CL.type=(0,Ff.makeMetatype)("app-store:loc-wrapper")
class OL extends BN{value(e){return n(this.implementation,e)}enabled(e){const t=this.value(e)
return typeof t!==Gk?Boolean(t):Boolean(this.implementation.clientFeatures[e])}isNotEnabled(e){return!this.enabled(e)}asDictionary(e){return d(this.implementation,e)}asString(e){return l(this.implementation,e)}asNumber(e){return f(this.implementation,e)}asArray(e){return c(this.implementation,e)}}OL.type=(0,Ff.makeMetatype)("app-store:props-wrapper")
class bL extends BN{retrieveString(e){const t=this.implementation.retrieveString(e)
return i(t)?t:null}storeString(e,t){this.implementation.storeString(t,e)}}bL.type=(0,Ff.makeMetatype)("app-store:storage-wrapper")
class RL extends Nf.ObjectGraph{configureDefaults(e,t,n,r,o,s,i,a,c,u,l,f,d,p,h,w,g,m,y,T,A,E,P,I,S,v,_){const C=this.addingCryptography(t).addingHost(n).addingNetwork(r).addingPlatform(o).addingPlist(s).addingRandom(i).addingServices(a).addingCookieProvider(c).addingBag(e).addingStoreMetrics(u).addingLoc(l).addingDevice(f).addingClient(d).addingProperties(p).addingUser(h).addingClientOrdering(w).addingPersonalizationStore(g).addingArcade(m).addingGameCenter(y).addingDeepLinks(T).addingAppleSilicon(A).addingStorage(E).addingAds(P).addingOnDeviceRecommendationsManager(I).addingFeatureFlags(S).addingMediaToken(v).addingSearchLanding(_)
return C.loc.load(C),C}get bag(){return this.required(VN.type)}addingBag(e){return this.addingBagWrapper(new VN(e,this.host))}addingBagWrapper(e){return this.adding(VN.type,e)}get cryptography(){return this.required(Lf.cryptography)}addingCryptography(e){return this.adding(Lf.cryptography,e)}get host(){return this.required(vL.type)}addingHost(e){return this.addingHostWrapper(new vL(e))}addingHostWrapper(e){return this.adding(vL.type,e)}get network(){return this.required(Lf.net)}addingNetwork(e){return this.adding(Lf.net,e)}get platform(){return this.required(Lf.platform)}addingPlatform(e){return this.adding(Lf.platform,e)}get plist(){return this.required(Lf.plist)}addingPlist(e){return this.adding(Lf.plist,e)}get random(){return this.required(Lf.random)}addingRandom(e){return this.adding(Lf.random,e)}get services(){return this.required(Lf.services)}addingServices(e){return this.adding(Lf.services,e)}get cookieProvider(){return this.required(Lf.cookieProvider)}addingCookieProvider(e){return this.adding(Lf.cookieProvider,e)}get storeMetrics(){return this.required(Jf)}addingStoreMetrics(e){return this.adding(Jf,e)}get loc(){return this.required(CL.type)}addingLoc(e){return this.addingLocWrapper(new CL(e))}addingLocWrapper(e){return this.adding(CL.type,e)}get device(){return this.required(Kf)}addingDevice(e){return this.adding(Kf,e)}get client(){return this.required(IL.type)}addingClient(e){return this.addingClientWrapper(new IL(e))}addingClientWrapper(e){return this.adding(IL.type,e)}get props(){return this.required(OL.type)}addingProperties(e){return this.addingPropertiesWrapper(new OL(e))}addingPropertiesWrapper(e){return this.adding(OL.type,e)}get user(){return this.required(Zf)}addingUser(e){return this.adding(Zf,e)}get clientOrdering(){return this.required(SL.type)}addingClientOrdering(e){return this.addingClientOrderingWrapper(new SL(e))}addingClientOrderingWrapper(e){return this.adding(SL.type,e)}get personalizationStore(){return this.required(Xf)}addingPersonalizationStore(e){return this.adding(Xf,e)}get arcade(){return this.required(Qf)}addingArcade(e){return this.adding(Qf,e)}get gameCenter(){return this.required(ed)}addingGameCenter(e){return this.adding(ed,e)}get deepLinks(){return this.required(td)}addingDeepLinks(e){return this.adding(td,e)}get appleSilicon(){return this.required(GN.type)}addingAppleSilicon(e){return this.addingAppleSiliconWrapper(new GN(e))}addingAppleSiliconWrapper(e){return this.adding(GN.type,e)}get storage(){return this.required(bL.type)}addingStorage(e){return this.addingStorageWrapper(new bL(e))}get searchLanding(){return this.required(id)}addingSearchLanding(e){return this.adding(id,e)}addingStorageWrapper(e){return this.adding(bL.type,e)}get ads(){return this.required(nd)}addingAds(e){return this.adding(nd,e)}get onDeviceRecommendationsManager(){return this.required(rd)}addingOnDeviceRecommendationsManager(e){return this.adding(rd,e)}get featureFlags(){return this.required(od)}addingFeatureFlags(e){return this.adding(od,e)}get mediaToken(){return this.required(sd)}addingMediaToken(e){return this.adding(sd,e)}isAvailable(e){return s(this.optional(e))}}class kL{constructor(e){this.currentReferral=null,this.isMetricsReferralContextRequired=!0,this.isEventDetailClickEventOverrideNecessary=!e.host.isOSAtLeast(16,2,0)}static createSharedMetricsReferralContext(e){kL.shared||(kL.shared=new kL(e))}get shouldUseJSReferralData(){return this.isMetricsReferralContextRequired&&s(this.currentReferral)}get activeReferralData(){return this.shouldUseJSReferralData&&this.currentReferral.isActive?this.currentReferral.data:null}setReferralDataForProduct(e,t){if(!this.isMetricsReferralContextRequired||r(t))return
const n=l(t,gN),o=l(t,Z_),s=p(t,YR)
this.currentReferral={id:`${e}_${Date.now()}`,data:{extRefApp2:n,extRefUrl2:o,kind:s,refUrl:null},isActive:!1,productPageExtensionInfo:null}}setReferralDataForProductPageExtensionIfNecessary(e){if(!this.isMetricsReferralContextRequired)return
const t=l(e,rR),o=l(e,GO)
if(!DL.isProductPageExtension(e)||!DL.isValidPageEvent(e)||r(t)||r(o))return
const s=l(e,CC),i=l(e,YP)
let a
switch(i){case Zh:a=g(n(e,Xh))
break
case r_:a=g(n(e,Qh))
break
default:a={}}const c=l(e,BO)
this.currentReferral={id:`${t}_${Date.now()}`,data:{extRefApp2:o,extRefUrl2:s,refUrl:c,kind:{name:i,context:a}},isActive:!1,productPageExtensionInfo:{productId:t}},this.addReferralContextToMetricsFieldsIfNecessary(e)}beginReferralContextForPageIfNecessary(e){this.isMetricsReferralContextRequired&&DL.isValidPageEvent(e)&&DL.isReferralForEvent(this.currentReferral,e)&&(this.currentReferral.isActive=!0)}endReferralContextIfNecessaryForPageEvent(e){this.isMetricsReferralContextRequired&&DL.isValidPageEvent(e)&&DL.isReferralForEvent(this.currentReferral,e)&&(this.currentReferral=null)}addReferralContextToMetricsFieldsIfNecessary(e){var t
this.isMetricsReferralContextRequired&&(e[kL.referralContextEventField]=null===(t=this.currentReferral)||void 0===t?void 0:t.id)}removeReferralContextInfoFromMetricsEvent(e){this.isMetricsReferralContextRequired&&delete e[kL.referralContextEventField]}addReferralDataToEventIfNecessary(e){if(!r(this.activeReferralData)&&DL.shouldAddReferralDataToEvent(e)&&(!DL.isEventDetailsClickEvent(e)||this.isEventDetailClickEventOverrideNecessary))switch(DL.isEventDetailsClickEvent(e)&&(e[wk]=nC),e[GO]=this.activeReferralData.extRefApp2,e[CC]=this.activeReferralData.extRefUrl2,i(this.activeReferralData.refUrl)&&(e[BO]=this.activeReferralData.refUrl),e[YP]=this.activeReferralData.kind.name,e[YP]){case Zh:e[Xh]=this.activeReferralData.kind.context
break
case r_:e[Qh]=this.activeReferralData.kind.context}}}kL.referralContextEventField="referralContextId"
class DL{static isProductPageExtension(e){return l(e,gN)===DL.productPageExtensionAppId}static isValidPageEvent(e){const t=l(e,wk)
return DL.validPageEventTypes.has(t)}static isReferralForEvent(e,t){var n
if(r(e))return!1
const o=t[kL.referralContextEventField],i=l(t,rR)
return s(o)?o===e.id:!(!DL.isProductPageExtension(t)||!s(i))&&i===(null===(n=null==e?void 0:e.productPageExtensionInfo)||void 0===n?void 0:n.productId)}static shouldAddReferralDataToEvent(e){return e.eventType!==nR||this.isEventDetailsClickEvent(e)}static isEventDetailsClickEvent(e){if(e.eventType!==nR)return!1
const t=e.location,n=null==t?void 0:t[0]
return s(n)&&n.locationType===nC}}DL.productPageExtensionAppId="com.apple.AppStore.ProductPageExtension",DL.eventDetailsPageType=nC,DL.validPageEventTypes=new Set([oR,zP,DL.eventDetailsPageType])
const NL=(Mf=e(447)).PageInvocationPoint
NL[MD]=MD,NL[WA]=WA,NL[AD]=AD,NL[xS]=xS
const LL="xp_amp_appstore"
class FL{constructor(e,t,n,r,o=!1){this.fields=e,this.includingFields=t,this.excludingFields=n,this.topic=r,this.shouldFlush=o}}class $L extends HN{constructor(e){super(),this.fields=e}}class xL extends HN{constructor(e){super(),this.data=e||[],this.custom={}}addMetricsData(e){this.data.push(e)}addManyMetricsData(e){for(const t of e)this.addMetricsData(t)}clearAll(){this.data.length=0}}class ML extends HN{constructor(){super(),this.instructions=[],this.custom={}}addInstruction(e){this.instructions.push(e)}addManyInstructions(e){for(const t of e)this.addInstruction(t)}addData(e,t){const n={data:e,invocationPoints:t}
this.instructions.push(n)}addManyData(e,t){for(const n of e)this.addData(n,t)}}class UL{constructor(e,t,n){this.fields=e,this.id=t,this.custom=n}}class BL extends UL{constructor(e,t){super(e.fields,e.id,e.custom||{}),this.custom.isFast=t,this.isFast=t}}class GL extends jN{constructor(e){super(),this.title=null,this.artwork=null,this.presentationStyle=[],this.actionClass=e,this.actionMetrics=new xL}}class VL extends GL{constructor(e,t){super(kS),this.page=e,this.pageUrl=t,this.pageData=null,this.presentationContext=ID,this.animationBehavior=ID,this.origin="inapp"}}class HL extends GL{constructor(e){super(ad),this.navigationTab=e,this.actions=[],this.popToRoot=!1}}class jL extends GL{constructor(e,t){super("TabBadgeAction"),this.navigationTab=e,this.text=t}}class WL extends GL{constructor(e,t=!0){super("ExternalUrlAction"),this.url=e,this.isSensitive=t}}class qL extends GL{constructor(e){super("CompoundAction")
const t=[]
for(const n of e)this.actionMetrics.addManyMetricsData(n.actionMetrics.data),Object.assign(this.actionMetrics.custom,n.actionMetrics.custom),n.actionMetrics.clearAll(),t.push(n)
this.actions=t}}class YL extends GL{constructor(e,t,n){super("OfferAction"),this.title=e,this.adamId=t,this.purchaseConfiguration=n,n&&(this.bundleId=n.bundleId,this.lineItem=n.lineItem),this.includeBetaApps=!1}}class zL extends GL{constructor(e,t){super("OfferConfirmationAction"),this.buyAction=e,this.confirmationInitiationAction=t}}class JL extends GL{constructor(){super("OfferAlertAction"),this.title=null,this.message=null,this.footerMessage=null,this.isCancelable=!0,this.shouldCheckForAvailableDiskSpace=!1,this.checkRestrictionsForContentRating=null,this.remoteControllerRequirement=$b,this.shouldCheckForGameController=!1,this.shouldIncludeActiveAccountInFooterMessage=!1,this.shouldPromptForConfirmation=!1,this.completionAction=null}}class KL extends GL{constructor(e,t){super("CancelPreorderAction"),this.preorderAdamId=e,this.isArcade=t}}class ZL extends GL{constructor(e,t,n,r,o){super("InAppPurchaseAction"),this.productIdentifier=e,this.appAdamId=t,this.appBundleId=n,this.installRequiredAction=r,this.minimumShortVersionSupportingInAppPurchaseFlow=o}}class XL extends GL{constructor(e,t){super("OfferStateAction"),this.title=t.title,this.adamId=e,this.defaultAction=t,this.includeBetaApps=!1}}class QL extends GL{constructor(e,t=gN){super("OpenAppAction"),this.adamId=e,this.destination=t}}class eF extends GL{constructor(e){super("HttpAction"),this.url=e,this.method=xb,this.headers={},this.body=null,this.isStoreRequest=!1,this.needsAuthentication=!1,this.retryCount=0,this.disableCache=!1,this.successAction=null,this.failureAction=null}}class tF{constructor(e,t,n,r){this.key=e,this.target=t,this.inputType=n,this.title=r,this.isRequired=!0,this.maximumLength=null}}class nF extends GL{constructor(e){super("HttpTemplateAction"),this.message=null,this.url=e,this.method=xb,this.headers={},this.body=null,this.parameters=[],this.isStoreRequest=!1,this.needsAuthentication=!1,this.retryCount=0,this.disableCache=!1,this.successAction=null,this.failureAction=null}}class rF extends nF{}class oF extends GL{constructor(e,t){super("WriteReviewAction"),this.adamId=e,this.url=t}}class sF extends GL{constructor(e){super("PageTabChangeAction"),this.selectedTabId=e}}class iF extends GL{constructor(e){super("SheetAction"),this.actions=e,this.isCancelable=!1,this.cancelTitle=null,this.message=null,this.style=fN,this.isCustom=!1,this.destructiveActionIndex=null}}class aF extends GL{constructor(e){super("AlertAction"),this.style=e,this.title=null,this.message=null,this.isCancelable=!1,this.cancelTitle=null,this.buttonActions=[],this.buttonTitles=[],this.destructiveActionIndex=null}}class cF extends jN{constructor(e,t){super(),this.activityType=e,this.action=t}}class uF extends GL{constructor(e,t,n=cd){super("ShareSheetAction"),this.data=e,this.activities=t,this.shareSheetStyle=n}}class lF extends GL{constructor(e){super("ReportConcernAction"),this.reasons=e}}class fF extends GL{constructor(e,t){super("ProductPageScrollAction"),this.section=e,this.clicksOnScroll=t}}class dF extends GL{constructor(e,t,n,r){super("ArcadeAction"),this.productIdentifier=e,this.appAdamId=t,this.postSubscribeAction=r,this.subscriptionToken=n}}class pF extends GL{constructor(e,t,n){super("FamilyCircleAction"),this.clientName=e,this.eventType=t,this.additionalParameters=n}}class hF extends GL{constructor(){super("BlankAction")}}class wF extends GL{constructor(e,t){super("SearchAdAction"),this.action=e,this.searchAd=t}}class gF extends GL{constructor(e,t){super("RateLimitedAction"),this.actionKey=e,this.primaryAction=t}}class mF extends GL{constructor(e,t,n,r){super("ArcadeSubscriptionStateAction"),this.notSubscribedAction=e,this.purchasingAction=t,this.subscribedAction=n,this.unknownAction=r}}class yF extends GL{constructor(e){super("GameCenterPlayerProfileAction"),this.playerId=e}}class TF extends GL{constructor(e){super("GameCenterAchievementsAction"),this.bundleId=e}}class AF extends GL{constructor(e){super("GameCenterInvitePlayerAction"),this.contactId=e}}class EF extends GL{constructor(e){super("GameCenterDenylistPlayerAction"),this.contactId=e}}class PF extends GL{constructor(e,t){super("EngagementToggleAction"),this.identifier=e,this.value=t}}class IF extends GL{constructor(e,t,n){super("ShelfBasedPageScrollAction"),this.shelfId=e,this.index=t,this.clicksOnScroll=n}}class SF extends GL{constructor(){super("InvalidateAllWidgetsAction")}}class vF extends GL{constructor(e,t,n){super("AppLaunchTrampolineAction"),this.bundleId=e,this.payloadUrl=t,this.fallbackOpenAppAction=null,this.fallbackAction=n}}class _F extends GL{constructor(e,t,n,r,o,s,i,a,c){super("CreateCalendarEventAction"),this.startDate=e,this.endDate=t,this.isAllDay=n,this.name=r,this.location=o,this.notes=s,this.url=i,this.notAuthorizedAction=a,this.availability=c}}class CF extends GL{constructor(e){super("CopyTextAction"),this.text=e}}class OF extends GL{constructor(){super("ClearAppUsageDataAction")}}class bF extends GL{constructor(e){super("AdInteractionAction"),this.adActionMetrics=e}}const RF="x-as3-internal",kF=yS,DF="itms-apps",NF="appstore-ui",LF=MN,FF="WebObjects/MZStore.woa/wa",$F=uy,xF="install",MF="viewGrouping",UF="viewSoftware",BF=AN,GF=Yb,VF=ED,HF="viewRoom",jF=PO,WF=gN,qF=_w,YF=mv,zF=Zk,JF=RN,KF=yO,ZF=oO,XF="todayCardPreview",QF=yC,e$=CD,t$=pS,n$=Jv,r$=Rb,o$=EI,s$="storepreview.apple.com",i$=pD,a$="spamBlockingExtensions",c$="launchApp",u$="sharePlayApps",l$=new Set([s$,"preview.apps.apple.com"]),f$="id",d$="ids",p$=YO,h$="fcId",w$="fetchData",g$="isTodaySection",m$=ED,y$="bundleIdentifier",T$=mD,A$=oC,E$="selectedChartId",P$=PO,I$=tb,S$=Vb,v$="v0",_$=qk,C$="context",O$=IP,b$="isSubscribed",R$="isTrialAvailable",k$="groupingFeaturedContentId",D$="nativeGroupingShelfId",N$="isGameCenterActivityFeedShelf",L$="isGameCenterPlayerShelf",F$="isGameCenterAchievementsShelf",$$="isGameCenterContinuePlayingShelf",x$="isGameCenterPopularWithYourFriendsShelf",M$="isGameCenterSuggestedFriendsShelf",U$="isGameCenterReengagementShelf",B$="onDeviceRecommendationsUseCase",G$="isPurchasesApp",V$="isViewOnly",H$="enabled",j$=Jv,W$="recoMetrics",q$="showingFallbackMedia",Y$="path",z$=Uh,J$=oO,K$="appId",Z$="isPPT",X$=Nk,Q$=kO,ex="includePostSubscribeAttribution",tx=qD,nx="requestDescriptor",rx="ageRating",ox=sp,sx="multiplayerSupport",ix=vE,ax=wp,cx=JR,ux="eventid",lx=mE,fx="isShelfWithAd",dx="shelfWithAdPlacementType",px="refreshType",hx="isPreloading",wx=FN,gx="inAppPurchaseId",mx="productUrl",yx=Hv,Tx="minExternalVersionId",Ax=Xk,Ex=Nk,Px=gN,Ix=RN,Sx="productPageSimilarItems",vx=/^([a-z][a-z0-9.+-]*:)(\/\/)?([\S\s]*)/i,_x=/([^=?&]+)=?([^&]*)/g,Cx=[U_,dk,kk,hR]
class Ox{constructor(e){if(this.query={},!e)return
let t=e
const n=vx.exec(e)
if(n){let e=n[1]
e&&(e=e.split(":")[0]),this.protocol=e,t=n[3]}let r={remainder:t,result:null}
for(const e of Cx){if(!r.remainder)break
switch(e){case U_:r=m(r.remainder,"#",OS),this.hash=r.result
break
case dk:r=m(r.remainder,"?",OS),r.result&&(this.query=Ox.queryFromString(r.result))
break
case kk:r=m(r.remainder,"/",OS),r.result&&(this.pathname="/"+r.result)
break
case hR:if(r.remainder){const e=m(r.remainder,"@",Iy),t=e.result,n=e.remainder
if(t){const e=t.split(":")
this.username=decodeURIComponent(e[0]),this.password=decodeURIComponent(e[1])}if(n){const e=n.split(":")
this.host=e[0],this.port=e[1]}}break
default:throw new Error("Unhandled case!")}}}set(e,t){if(!t)return this
switch(e===dk&&typeof t===LN&&(t=Ox.queryFromString(t)),e){case Ek:this.protocol=t
break
case Sy:this.username=t
break
case vy:this.password=t
break
case _y:this.port=t
break
case kk:this.pathname=t
break
case dk:this.query=t
break
case U_:this.hash=t
break
default:this[e]=t}return this}get(e){switch(e){case Ek:return this.protocol
case Sy:return this.username
case vy:return this.password
case _y:return this.port
case kk:return this.pathname
case dk:return this.query
case U_:return this.hash
default:return this[e]}}append(e,t){const n=this.get(e)
let r
if(e===dk)typeof t===LN&&(t=Ox.queryFromString(t)),r=typeof n===LN?{existingValue:n,...t}:{...n,...t}
else{let o=n
o||(o="")
let s=o
if(e===kk){const e=o.length
e&&"/"===n[e-1]||(s+="/")}s+=t,r=s}return this.set(e,r)}param(e,t){return e?(this.query||(this.query={}),this.query[e]=t,this):this}removeParam(e){return e&&this.query?(void 0!==this.query[e]&&delete this.query[e],this):this}path(e){return this.append(kk,e)}pathExtension(){if(void 0===this.pathname)return null
const e=this.pathname.split("/").filter(e=>e.length>0).pop().split(".")
return e.filter(function(e){return""!==e}).length<2?null:e.pop()}pathComponents(){return this.pathname?this.pathname.split("/").filter(e=>e.length>0):[]}popPathComponent(){if(!this.pathname)return null
const e=this.pathname.slice(this.pathname.lastIndexOf("/")+1)
return 0===e.length?null:(this.pathname=this.pathname.slice(0,this.pathname.lastIndexOf("/")),e)}build(){return this.toString()}toString(){let e=""
return this.protocol&&(e+=this.protocol+"://"),this.username&&(e+=encodeURIComponent(this.username),this.password&&(e+=":"+encodeURIComponent(this.password)),e+="@"),this.host&&(e+=this.host,this.port&&(e+=":"+this.port)),this.pathname&&(e+=this.pathname,e.endsWith("/")&&this.pathname.length>0&&(e=e.slice(0,-1))),this.query&&Object.keys(this.query).length&&(e+="?"+Ox.toQueryString(this.query)),this.hash&&(e+="#"+this.hash),e}static queryFromString(e){const t={}
let n=_x.exec(e)
for(;n;){const r=decodeURIComponent(n[1]),o=decodeURIComponent(n[2])
t[r]=o,n=_x.exec(e)}return t}static toQueryString(e){let t="",n=!0
for(const r of Object.keys(e)){n||(t+="&"),n=!1,t+=encodeURIComponent(r)
const o=e[r]
o&&o.length&&(t+="="+encodeURIComponent(o))}return t}static from(e){return new Ox(e)}static fromComponents(e,t,n,r,o){const s=new Ox
return s.protocol=e,s.host=t,s.pathname=n,s.query=r,s.hash=o,s}}const bx=[kF,DF,"itms-appss","itms-messages","itms-messagess","itms-watch","itms-watchs","macappstore","macappstores","com.apple.tvappstore","com.apple.TVAppStore","com.apple.Arcade"]
class Rx{constructor(e){var t
this.identifier=e.identifier,this._protocol=null==(t=e.protocol)?null:t,this._hostName=e.hostName,e.path?(this._pathComponents=e.path.split("/").filter(e=>e.length>0),this._pathParameterMap=function(e){const t={}
return e.forEach((e,n)=>{E(e)&&(t[e]=n)}),t}(this._pathComponents)):(this._pathComponents=null,this._pathParameterMap=null),this._pathExtension=e.pathExtension,this._query=function(e){const t=[]
if(!e)return t
for(const n of e){const e=n.split("=")
let r=e[0]
const o=-1!==r.indexOf("?")
r=r.replace("?","")
let s=null
e.length>1&&(s=decodeURIComponent(e[1])),t.push({key:r,value:s,optional:o})}return t}(e.query),this._hash=e.hash,this._regex=e.regex,e.exclusions?this._exclusions=e.exclusions.map(function(e){return new Rx(e)}):this._exclusions=null}matches(e){if(this._regex){if(!this._regex.length)return!1
let t=!1
for(const n of this._regex)if(n.test(e.toString())){t=!0
break}if(!t)return!1}if(this._protocol&&e.protocol!==this._protocol)return!1
if(this._hostName&&e.host!==this._hostName)return!1
if(this._pathComponents){const t=this._pathComponents,n=e.pathComponents()
if(t.length!==n.length)return!1
const r=t.length
for(let e=0;e<r;e++){const r=t[e]
if(!E(r)&&r!==n[e])return!1}}if(this._pathExtension&&e.pathExtension()!==this._pathExtension)return!1
if(this._query)for(const t of this._query){const n=e.query[t.key]
if(!n&&!t.optional)return!1
if(t.value&&t.value!==n)return!1}if(this._hash&&e.hash!==this._hash)return!1
if(this._exclusions)for(const t of this._exclusions){if(t._exclusions)throw Error("Matching exclusion rules with further exclusion rules may introduce significant code-complexity and/or reduce the ease with which developers are able to reason about your desired goals. Are there any simpler options?")
if(t.matches(e))return!1}return!0}extractParameters(e){const t={}
if(this._pathComponents){const n=e.pathComponents()
for(const e of Object.keys(this._pathParameterMap)){const r=P(e),o=I(n[this._pathParameterMap[e]],e)
t[r]=decodeURIComponent(o)}}if(this._query)for(const n of this._query)t[n.key]=e.query[n.key]
return t}}class kx{constructor(){this._routeMappings=[]}associate(e,t){const n=[]
for(const t of e)n.push(new Rx(t))
this._routeMappings.push({route:n,object:t})}routedObjectForUrl(e){let t=typeof e===LN?new Ox(e):e
t=function(e){let t=typeof e===LN?new Ox(e):e
if(!A(t))return t
const n=t.query,r=n.url
return(!t.host||0===t.host.length)&&null!=r&&(t=new Ox(r),n.dsid&&(t=t.append(dk,{dsid:n.dsid})),n[Cy]&&(t=t.append(dk,{signatureResumption:n[Cy]}))),Ox.fromComponents(kF,t.host,t.pathname,t.query,t.hash)}(t),t=function(e){const t=typeof e===LN?new Ox(e):e
if(!A(t))return t
const n=t.build()
let r,o=y(t.query)
const s={},i=[{key:"MZSearch.woa",action:MD},{key:MD,action:MD},{key:"buyLandingPage",action:J_},{key:"buyCharityGiftWizard",action:md},{key:"longUrlHandler",action:Oy},{key:VS,action:VS}],a={"accessory-lookup":"accessoryLookup","finance-app":CD,viewEula:Rb,software:NN}
let c=!1
for(const e of Object.keys(s))if(t.host&&-1!==t.host.indexOf(e)){c=!0,r=s[e]
break}let u=!1
for(const e of i){const n=e.key
if(t.pathname&&-1!==t.pathComponents().indexOf(n)){u=!0,r=e.action,void 0!==o[n]&&delete o[n]
break}}for(const e of Object.keys(a)){const n=void 0!==t.query[e]&&null!==t.query[e],s=t.query[qk]&&-1!==t.query[qk].indexOf(e)
if(n||s){r=a[e],void 0!==o[e]&&delete o[e]
break}}if(r===CD&&-1!==n.indexOf(by)&&(r="addToPassbook",delete o[by]),r){const e=null,n=null,s={action:r}
return r===cO&&(o.code||o[Ry])?s.code=o.code||o[Ry]:r!==CD&&r!==VS&&r!==Oy||!u&&!c||(s[BS]=t.toString()),o={...o,...s},Ox.fromComponents(t.protocol,n,e,o,t.hash)}return t}(t)
for(const e of this._routeMappings)for(const n of e.route)if(n.matches(t))return{normalizedUrl:t,parameters:n.extractParameters(t),object:e.object,matchedRuleIdentifier:n.identifier}
return{normalizedUrl:t,parameters:null,object:null,matchedRuleIdentifier:null}}}class Dx{constructor(e){this._count=e,this._triggers=[]}countDown(){if(0!==this._count&&(this._count--,0===this._count)){for(const e of this._triggers)e()
this._triggers.splice(0)}}then(e){0===this._count?e():this._triggers.push(e)}}class Nx extends HN{constructor(e,t,n){super(),this.title=e,this.annotations=t,this.forceExpanded=n}}class Lx extends HN{constructor(e,t,n,r){super(),this.title=e,this.summary=n,this.items=t,this.shouldAlwaysPresentExpanded=!1,this.linkAction=r}}class Fx extends HN{constructor(e,t,n,r){super(),this.text=e,this.heading=t,this.subText=n,this.listText=r}}class $x extends HN{constructor(e){super(),this.annotationGroups=e}}class xx extends jN{constructor(e){super(),this.art=e}}class Mx extends HN{constructor(e,t){super(),this.allowsAutoPlay=!0,this.type=e,this.lockup=t}}class Ux extends HN{constructor(e,t,n,r,o,s){super(),this.message=e,this.action=t,this.fullProductAction=n,this.leadingArtwork=r,this.leadingArtworkTintColor=o,this.includeBackgroundBorder=s}}class Bx extends HN{constructor(e){super(),this.lockup=e}}class Gx extends HN{}class Vx extends HN{constructor(e,t,n){super(),this.items=e,this.mediaPlatform=t,this.allPlatforms=n}}class Hx extends HN{constructor(e,t,n,r,o,s,i){super(),this.type=e,this.title=t,this.caption=n,this.imageName=r,this.linkAction=o,this.artwork=s,this.artworkTintColor=i}}class jx extends HN{constructor(e,t,n){super(),this.paragraph=e,this.developerAction=n,this.developerLinks=t}}class Wx extends HN{constructor(e){super(),this.text=e,this.presentationStyle=[],this.clickAction=null}}class qx extends HN{}class Yx extends jN{isValid(){return!!this.title&&!(!this.icon||!this.icon.isValid())&&super.isValid()}}class zx extends Yx{isValid(){return!(!this.screenshots||!this.screenshots.length)&&super.isValid()}}class Jx extends Yx{constructor(){super(),this.screenshots=[],this.trailers=[],this.overrideLockupPosition=null,this.screenshotsDisplayStyle="control",this.metadataRibbonItems=[]}}class Kx extends HN{constructor(e){super(),this.viewType=e,this.itemType=e,this.moduleType=null,this.labelText=null,this.borderedText=null,this.starRating=null,this.secondaryViewPlacement=JD,this.artwork=null}}class Zx extends Yx{isValid(){return!(!this.trailers||!this.trailers.isValid())&&!(!this.editorialTagline||0===this.editorialTagline.length)&&super.isValid()}}class Xx extends HN{constructor(e,t){super(),this.allowsAutoPlay=!0,this.looping=!0,e&&(this.videos=e),t&&(this.mediaPlatform=t)}isValid(){return this.videos&&this.videos.length>0&&super.isValid()}}class Qx extends Yx{}class eM extends jN{}class tM extends Jx{isValid(){if(this.children)for(const e of this.children)if(!e.isValid())return!1
return super.isValid()}}class nM extends HN{constructor(e,t,n){super(),this.text=e,this.style=t,this.mediaType=n,this.wantsCollapsedNewlines=!0}}class rM extends jN{constructor(){super(),this.adamId=null,this.caption=null,this.title=null,this.subtitle=null,this.artwork=null,this.shelfBackground=null,this.clickAction=null,this.decorations=[],this.flowPreviewActionsConfiguration=null,this.appEventFormattedDates=null,this.mediaOverlayStyle=null}isValid(){return!!this.clickAction&&!(!this.artwork||!this.artwork.isValid())&&!(!this.caption||!this.title)&&super.isValid()}}class oM extends jN{constructor(){super(),this.flowPreviewActionsConfiguration=null}}class sM extends jN{constructor(){super(),this.artwork=null,this.accessibilityLabel=null,this.shortEditorialDescription=null,this.clickAction=null,this.personalizationStyle=uD,this.shelfBackground=null,this.flowPreviewActionsConfiguration=null}isValid(){const e=this.artwork&&this.artwork.isValid(),t=this.collectionIcons&&this.collectionIcons.length>0
return this.clickAction&&(e||t)&&super.isValid()}}class iM extends jN{constructor(e,t,n,r=!0){super(),this.descriptionText=e,this.summaryText=t,this.clickAction=n,this.linkPresentationEnabled=r}}class aM extends HN{constructor(e,t){super(),this.styledText=e,this.linkedSubstrings=t}}class cM extends HN{constructor(e,t,n,r){super(),this.text=e,this.clickAction=t,this.type=n,this.adamIdForPurchaseHistoryFilter=r}}class uM extends HN{constructor(e){super(),this.disclaimer=e}}class lM extends HN{constructor(e){super(),this.buttons=e}}class fM extends HN{constructor(e,t){super(),this.title=e,this.action=t}}class dM extends jN{constructor(e,t,n=tD,r=null,o=null,s=null){super(),this.artwork=e,this.isFullWidth=t,this.hasRoundedCorners=typeof s===dN?s:!this.isFullWidth,this.ordinal=o,this.caption=r,this.captionMediaType=n}}class pM extends jN{constructor(e,t,n=tD,r=null,o=null,s=null){super(),this.canPlayFullScreen=!0,this.allowsAutoPlay=!0,this.looping=!0,this.showAudioControl=!0,this.video=e,this.isFullWidth=t,this.hasRoundedCorners=typeof s===dN?s:!this.isFullWidth,this.ordinal=o,this.caption=r,this.captionMediaType=n}}class hM extends HN{constructor(e,t,n,r){super(),this.type=e,this.title=t,this.hasDivider=n,this.action=r}}class wM extends jN{constructor(e,t,n,r){super(),this.text=e,this.credit=t,this.artwork=n,this.isFullWidthArtwork=r||!1}}class gM extends jN{constructor(e,t){super(),this.text=e,this.attribution=t}}class mM extends HN{constructor(e,t,n){super(),this.style=e,this.color=t,this.isFullWidth=n}}class yM extends jN{constructor(e,t,n,r,o){super(),this.badges=e,this.hasTopSeparator=t,this.hasBottomSeparator=n,this.separatorsAreFullWidth=r,this.alignment=o}}class TM extends jN{constructor(e,t){super(),this.title=e,this.buttonAction=t}}class AM extends HN{constructor(e,t,n,r,o,s){super(),this.badgeType=n,this.badge=n.title,this.title=e,this.description=t,this.callToActionButtonAction=r,this.backgroundStyle=o,this.textAlignment=s}}class EM extends jN{constructor(e,t,n,r,o,s){super(),this.details=e,this.detailsDisplayProperties=t,this.heading=n,this.artwork=r,this.video=o,this.backgroundColor=s}}class PM extends jN{constructor(e,t,n){super(),this.details=e,this.iconArtwork=t,this.backgroundColor=n}}class IM extends jN{}class SM extends jN{constructor(e,t){super(),this.unsubscribedAction=e,this.subscribedAction=t}}class vM extends jN{constructor(e,t,n,r,o,s,i,a,c){super(),this.badgeGlyph=e,this.badge=t,this.title=n,this.subtitle=r,this.achievement=o,this.backgroundColor=i,this.backgroundArtwork=a,this.lockup=s,this.heroAction=c}}class _M extends jN{constructor(e){super(),this.placement=e}}class CM extends jN{constructor(e,t=null,n=null){super(),this.contentType=e,this.marker=t,this.items=n||[],this.url=null,this.mergeWhenFetched=!1,this.batchGroup=null,this.seeAllAction=null,this.eyebrow=null,this.eyebrowArtwork=null,this.title=null,this.titleArtwork=null,this.subtitle=null,this.isHorizontal=!1,this.isHidden=!1,this.backgroundColor=null,this.rowsPerColumn=null,this.background={type:uD},this.contentsMetadata={type:uD},this.isPersonalized=!1,this.shouldFilterApps=!1}}class OM extends jN{constructor(e,t,n,r,o){super(),this.title=e,this.artwork=t,this.heading=n,this.description=r,this.clickAction=o,this.shelfBackground=null,this.collectionIcons=null}}class bM extends Yx{isValid(){const e=this.posterArtwork,t=this.posterVideo
return!(!e&&!t)&&super.isValid()}}class RM extends HN{}class kM extends HN{constructor(){super(),this.id=random.nextUUID()}}class DM extends HN{constructor(e){super(),this.shelves=e,this.title=null,this.presentationOptions=[],this.isIncomplete=!1,this.pageMetrics=new ML}}class NM extends HN{constructor(){super(),this.pageMetrics=new ML,this.pageRenderMetrics={}}}class LM extends DM{}class FM extends DM{}class $M extends DM{constructor(e,t=null){super(e),this.sort=j_,this.displayStyles=t}}class xM{constructor(e,t){if(this.contentsResourceTypes=new Set,this.ids=new Set,this.relationshipIncludes=new Set,this.attributeIncludes=new Set,this.platform=null,this.additionalPlatforms=new Set,this.additionalQuery={},this.relationshipLimits={},this.searchTerm=null,this.searchTypes=[],this.context=null,this.useCustomAttributes=!1,this.objectGraph=e,this.platform=S(e),!o(t))if(typeof t===LN)this.href=t
else if(Array.isArray(t)){const e=new Set
for(const n of t)e.add(n.type),this.ids.add(n.id)
1===e.size?this.resourceType=e.values().next().value:e.size>1&&(this.resourceType=kN,this.contentsResourceTypes=e)}}forType(e){return this.resourceType=e,this}withIds(e){for(const t of e)i(t)&&this.ids.add(t)
return this}includingRelationships(e){for(const t of e)this.relationshipIncludes.add(t)
return this}includingScopedRelationships(e,t){this.scopedRelationshipIncludes||(this.scopedRelationshipIncludes=new Map)
let n=this.scopedRelationshipIncludes.get(e)
n||(n=new Set)
for(const e of t)n.add(e)
return this.scopedRelationshipIncludes.set(e,n),this}includingMetaKeys(e,t){this.metaIncludes||(this.metaIncludes=new Map)
let n=this.metaIncludes.get(e)
n||(n=new Set)
for(const e of t)n.add(e)
return this.metaIncludes.set(e,n),this}includingAssociateKeys(e,t){this.associateIncludes||(this.associateIncludes=new Map)
let n=this.associateIncludes.get(e)
n||(n=new Set)
for(const e of t)n.add(e)
return this.associateIncludes.set(e,n),this}includingRelationshipsForUpsell(e){const t=Jk
if(e){this.scopedRelationshipIncludes||(this.scopedRelationshipIncludes=new Map)
let e=this.scopedRelationshipIncludes.get(iN)
e||(e=new Set),e.add(t),this.scopedRelationshipIncludes.set(iN,e)}else this.relationshipIncludes.add(t)
{this.metaIncludes||(this.metaIncludes=new Map)
let e=this.metaIncludes.get(Jk)
e||(e=new Set),e.add(JR),this.metaIncludes.set(Jk,e)}return this}includingAttributes(e){for(const t of e)this.attributeIncludes.add(t)
return this}includingScopedAttributes(e,t){this.scopedAttributeIncludes||(this.scopedAttributeIncludes=new Map)
let n=this.scopedAttributeIncludes.get(e)
n||(n=new Set)
for(const e of t)n.add(e)
return this.scopedAttributeIncludes.set(e,n),this}includingAdditionalPlatforms(e){for(const t of e)this.additionalPlatforms.add(t)
return this}includingScopedAvailableIn(e,t){this.scopedAvailableInIncludes||(this.scopedAvailableInIncludes=new Map)
let n=this.scopedAvailableInIncludes.get(e)
n||(n=new Set)
for(const e of t)n.add(e)
return this.scopedAvailableInIncludes.set(e,n),this}addingQuery(e,t){return this.additionalQuery[e]=t,this}addingRelationshipLimit(e,t){return this.relationshipLimits[e]=t,this}withSearchTerm(e){return this.searchTerm=e,this}searchingOverTypes(e){for(const t of e)this.searchTypes.push(t)
return this}addingContext(e){return this.context=e,this}includingMacOSCompatibleIOSAppsWhenSupported(e=!1){return this.objectGraph.appleSilicon.isSupportEnabled&&(e||this.enablingFeature(qI),this.includingScopedAttributes(NN,[kh])),this}usingCustomAttributes(e){return this.useCustomAttributes=e,this}alwaysUseIdsAsQueryParam(e){return this.useIdsAsQueryParam=e,this}attributingTo(e){return this.canonicalUrl=e,this}withFilter(e,t){return this.filterType=e,this.filterValue=t,this}withLimit(e){return this.limit=e,this}withSparseLimit(e){return null!==e&&(this.sparseLimit=e),this}withSparseCount(e){return null!==e&&(this.sparseCount=e),this}enablingFeature(e){return this.enabledFeatures||(this.enabledFeatures=[]),this.enabledFeatures.push(e),this}enablingFeatures(e){return this.enabledFeatures||(this.enabledFeatures=[]),this.enabledFeatures.push(...e),this}asPartialResponseLimitedToFields(e){return this.fields=e,this}includesResourceType(e){return this.resourceType===e||!!s(this.contentsResourceTypes)&&this.contentsResourceTypes.has(e)}}const MM=new RegExp("#?([0-9,a-f,A-F][0-9,a-f,A-F])([0-9,a-f,A-F][0-9,a-f,A-F])([0-9,a-f,A-F][0-9,a-f,A-F])")
class UM extends jN{constructor(e){super(),this.kind=e}}class BM extends UM{constructor(){super(VA),this.allowsAutoPlay=!0,this.looping=!0}isValid(){const e=this.art&&this.art.isValid(),t=this.video&&this.video.isValid()
return(e||t)&&super.isValid()}}class GM extends UM{constructor(e,t){super(lN),this.art=e,this.titleBackingGradient=t}}class VM extends UM{constructor(e){super(eb),this.icon=e}}class HM extends UM{constructor(e,t,n){super(Tk),this.icon=e,this.art=t,this.titleBackingGradient=n}}class jM extends UM{constructor(e,t){super(HA),this.lockups=e,this.marketingText=t}}class WM extends UM{constructor(e,t){super(q_),this.lockups=e,this.additionalText=t}}class qM extends UM{constructor(e){super(wR),this.lockup=e}}class YM extends UM{constructor(e){super(jA),this.lockups=e,this.lockupImpressionLimit=10}}class zM extends UM{constructor(e,t){super(Ub),this.lockups=e,this.artworkGridType=t,this.lockupImpressionLimit=3}}class JM extends UM{constructor(e,t){super(Rk),this.allowsAutoPlay=!0,this.looping=!0,this.video=e,this.description=t}}class KM extends UM{constructor(e,t,n,r,o,s){super(Mb),this.formattedDates=e,this.startDate=t,this.artwork=n,this.subtitle=o,this.tintColor=r,this.blurStyle=s}}class ZM extends UM{constructor(e,t){super(aO),this.trailers=e,this.screenshots=t}}class XM extends UM{constructor(e,t){super(Y_),this.lockup=e,this.backgroundArtwork=t}}class QM extends HN{constructor(e){super(),this.kind=e}}class eU extends QM{constructor(e){super(VD),this.lockup=e,this.displaysIcon=!0}}class tU extends QM{constructor(e,t,n,r){super("marketingLockup"),this.marketingText=null,this.lockup=e,this.paragraph=t,this.hideBackground=n,this.artworkBackgroundColor=r}}class nU extends QM{constructor(e){super(hd),this.lockups=e}}class rU extends QM{constructor(e,t){super(VR),this.paragraph=e,this.style=t}}class oU extends QM{constructor(e){super(qk),this.action=e}}class sU extends QM{constructor(e,t,n){super("threeLine"),this.heading=e,this.title=t,this.description=n}}class iU extends QM{constructor(e){super("arcadeLockup"),this.arcadeLockup=e}}class aU extends QM{constructor(e){super("appEventLockup"),this.lockup=e}}class cU extends QM{constructor(e){super("mixedMediaRiverLockup"),this.lockup=e}}class uU extends jN{constructor(){super(),this.heading=null,this.title=null,this.media=null,this.heroMedia=null,this.overlay=null,this.style=null,this.clickAction=null,this.backgroundColor=null,this.inlineDescription=null,this.collapsedHeading=null}}class lU extends jN{constructor(e){super(),this.cards=e}}class fU extends HN{constructor(e,t,n,r,o){super(),this.shelves=e,this.title=n,this.titleDetail=o,this.tabTitle=r,this.nextPage=null,this.onboardingCardIds=t||[],this.pageMetrics=new ML,this.pageRenderMetrics={}}}class dU extends HN{constructor(e){super(),this.incidentType=e}}class pU extends dU{constructor(e,t){super("discard"),this.instanceId=e,this.reason=t}}Uf=e(5542)
const hU={artwork:_S,screenshotsByType:"customScreenshotsByType",promotionalText:"customPromotionalText",videoPreviewsByType:"customVideoPreviewsByType",customScreenshotsByTypeForAd:ZS,customVideoPreviewsByTypeForAd:XS},wU="_jet-internal:derived-data"
Bf=e(5016)
const gU={identifer:"3NepyQj",treatments:[0,1]},mU={identifer:"xSb5Dsb",treatments:[...Array(100).keys()]},yU={identifer:"2S6U3Dq",treatments:[0,1]},TU=fN,AU={identifer:"5pdfhju",treatments:[0,1]}
class EU extends HN{constructor(){super(),this.shelfOrderings={},this.shelfMapping={},this.presentationOptions=[],this.isIncomplete=!1,this.pageMetrics=new ML,this.pageRenderMetrics={}}}class PU extends EU{}class IU extends jN{constructor(e,t,n,r,o){super(),this.title=e,this.artwork=t,this.badge=n,this.action=r,this.density=o}}class SU{constructor(e,t,n,r,o,s,i){this.id=e,this.title=t,this.searchLandingItemDisplayStyle=s,this.displayStyle=n,this.hasSeeAll=r,this.seeAllLink=o,this.searchShelfKind=i}}!function(e){e.Suggestion="Query",e.CategoriesAndCharts="EditorialLink",e.Apps="AppsLockup"}(Gf||(Gf={})),function(e){e.Grid="grid",e.Swoosh="swoosh",e.WordCloud="word-cloud"}(Vf||(Vf={})),function(e){e.Density1="density_1",e.Density2="density_2",e.Density3="density_3"}(Hf||(Hf={})),function(e){e.Chiclet="chiclet",e.App="app",e.Symbol="symbol"}(jf||(jf={})),Wf=e(2450)
const vU=(e,t)=>e||t
let _U=null
class CU extends HN{constructor(e,t,n,r,o,s,i,a,c,u=ID){super(),this.type=e,this.key=t,this.content=n,this.heading=o,this.caption=s,this.longCaption=i,this.leadingValue=u,this.accessibilityTitle=a,this.accessibilityCaption=c,this.style=r}}class OU extends HN{constructor(e,t){super(),this.type=e,this.shelfId=t}}class bU extends HN{constructor(e,t){super(),this.title=e,this.subtitle=t}}class RU extends Yx{constructor(){super(),this.pageMetrics=new ML,this.pageRenderMetrics={}}}const kU=new Set([IN,SN,bN]),DU=new Set([YD,W_,aN,ok,BR,vD,mN,hD,wD,rN,Ok,wN,XD,GR,Dk,_D,gD,lD,$D,oN,zD,RN,GD,bk,sO,iO,xD])
class NU extends HN{constructor(e,t,n,r){super(),this.id=e,this.title=t,this.selectedActionTitle=n,this.url=r}}class LU extends DM{constructor(){super([])}}class FU extends HN{}class $U extends HN{}class xU extends HN{}class MU extends HN{constructor(){super(...arguments),this.componentType=pd}}class UU extends HN{constructor(e){super(),this.showsBadge=!1,this.title=null,this.notes=e,this.isCollapsed=!0}}class BU extends HN{}class GU extends HN{}class VU extends HN{}class HU extends FU{constructor(){super(...arguments),this.componentType="starRatings"}}class jU extends FU{constructor(){super(...arguments),this.componentType="starRatingsHistogram"}}class WU extends FU{constructor(){super(...arguments),this.componentType="noRatings"}}class qU extends HN{constructor(){super(...arguments),this.componentType=$S}}const YU="notPurchasedOrdering"
class zU extends EU{constructor(){super(...arguments),this.appPlatforms=[]}}class JU{constructor(){this._params=""}static get contentType(){return mO}param(e,t){if(e&&t){const n=this._params.length>0?"&":""
this._params+=`${n}${encodeURIComponent(e)}=${encodeURIComponent(t)}`}return this}build(){return this._params}}class KU{constructor(e){if(this._values={},!r(e)&&e.length>0){const t=e.split("&")
for(const e of t){const[t,n]=e.split("="),o=decodeURIComponent(t),s=r(n)?"":decodeURIComponent(n)
this._values[o]=s}}}_searchKey(e,t){if(0===e.length)throw new Error("key may not be zero length")
return r(t)||0===t.length?e:`${t}${e.charAt(0).toUpperCase()}${e.slice(1)}`}get(e,t="mt"){const n=this._searchKey(e,t)
return this._values[n]}set(e,t,n="mt"){const o=this._searchKey(e,n)
return r(t)?delete this._values[o]:this._values[o]=t,this}toString(){let e=""
for(const t of Object.keys(this._values)){const n=this._values[t]
e.length>0&&(e+="&"),e+=encodeURIComponent(t),e+="=",e+=encodeURIComponent(n)}return e}toEncodedMap(){const e={}
for(const t of Object.keys(this._values)){const n=this._values[t],r=encodeURIComponent(t),o=encodeURIComponent(n)
e[r]=o}return e}}class ZU{constructor(e){this._options=Object.freeze(e)}get defaultTopic(){return this._options.defaultTopic}_reduceFieldAccuracy(e,t){for(const n of t){const t=l(n,"fieldName")
if(r(t))continue
const o=f(e,t)
if(r(o))continue
let s=f(n,"magnitude")
r(s)&&(s=1048576)
let i=f(n,"significantDigits")
if(r(i)&&(i=2),s<=0||i<0){e[t]=Number.NaN
continue}const a=o/s
e[t]=He(a,i)}}_derezFastImpressions(e){const t=l(e,Sb),n=f(e,Xv)
if(t===Qv){if(4===n){const t=c(e,Bk)
e[Bk]=t.map(e=>{const t=c(e,qh)
return 0===t.length||(e[qh]=t.map(e=>{const t=f(e,"d")
return e.s=0,e.d=He(t,2),e})),e})}if(5===n){const t=c(e,Bk)
e[Bk]=t.map(e=>{delete e[qP],(o(l(e,e_))||o(l(e,t_)))&&delete e.id
const t=d(e,Yh)
return o(t)||(Object.entries(t).forEach(([e,n])=>{const r=c(n)
t[e]=r.map(e=>{const t=f(e,"d")
return e.s=0,e.d=He(t,2),e})}),e[Yh]=t),e})}}}_decorateSearchResultImpressions(e){const t=l(e,wk),n=l(e,rR)
t===LR&&n!==UO&&function(e){const t=c(e,Bk)
let n
for(const e of t)if(l(e,_C)===u_){n=e[oI]
break}n&&(e[Bk]=t.map(e=>(l(e,_C)===SC&&(e.impressionParentId=n),e)))}(e)}_decorateAll(e,t){const n=this._options.bagProvider,o=n("metricsBase",t)
r(o)||typeof o!==gb||Object.assign(e,o),e.clientBuildType=this._options.buildType,e.resourceRevNum=this._options.jsVersion,e.xpSendMethod="jet-js",this._options.buyDecorator.useApp(l(e,gN)),delete e.jet_adamId
const s=function*(e){if(r(e))return
const t=e.split(";")
for(const e of t){const t=e.indexOf("=")
if(-1===t){const t=decodeURIComponent(e).trim()
yield{key:t,value:""}}else{const n=decodeURIComponent(e.substring(0,t)).trim(),r=decodeURIComponent(e.substring(t+1)).trim()
yield{key:n,value:r}}}}(l(e,zh))
for(const t of s)if("xp_ci"===t.key){this._options.buyDecorator.useClientId(t.value),e.clientId=t.value,delete e.clientGeneratedId
break}delete e[zh]
const i=l(e,wk),a=l(e,rR)
if(!r(i)&&!r(a)){const r=l(n("compoundSeparator",t))||"_"
e.page=`${i}${r}${a}`}const u=c(n("deResFields",t))
this._reduceFieldAccuracy(e,u)}_decorateClick(e,t){!function(e){const t=l(e,DC),n=l(e,sI)
r(t)&&i(n)&&(e[DC]=n),l(e,iI)===Cw&&delete e[aI]}(t),this._decorateSearchResultImpressions(t),kL.shared.addReferralDataToEventIfNecessary(t)
const n=l(d(t,FR),ib)
if(i(n)){const e=new KU(n)
e.set(Jh,null,null),t[FR][ib]=e.toString()}const o=l(t,wk)
!(0,Uf.isNothing)(o)&&o.toLowerCase().includes(MD)||delete t[Bk]}_decorateImpressions(e){if(o(e[Bk]))return!1
this._derezFastImpressions(e),this._decorateSearchResultImpressions(e)
const t=l(e,BO)
return i(t)&&(e[vk]=ec(t),delete e[BO]),!0}_decorateMedia(e){const t=f(e,n_)
r(t)||(e[n_]=Math.round(t))}_decoratePage(e){const t=l(e,yN)
r(t)||(e.pageHistory=this._options.buyDecorator.getPageHistoryFor(t)),kL.shared.setReferralDataForProductPageExtensionIfNecessary(e),kL.shared.beginReferralContextForPageIfNecessary(e),kL.shared.addReferralDataToEventIfNecessary(e)
const n=l(e,BO)
if(!r(n)){const t=Za(n);(o(e[GO])||i(t))&&(e[GO]=t),e[vk]=ec(n)}}_decoratePageChange(e){this._decoratePage(e)}_decorateSearch(e){e[Xv]=3,function(e){var t
const n=null!==(t=e[FR])&&void 0!==t?t:{},o=n[DC],s=l(e,sI)
r(o)&&i(s)&&(n[DC]=s,e[FR]=n),l(e,iI)===Cw&&delete e[aI],e[qb]===Ow&&delete e[aI]}(e)}_decoratePageExit(e){kL.shared.endReferralContextIfNecessaryForPageEvent(e)}_filterExtraneous(e){!function(e){delete e[sI],delete e[iI],delete e.searchGhostHintTermLastDisplayed}(e),kL.shared.removeReferralContextInfoFromMetricsEvent(e)}makeEvent(e,t){"bubbleTip"===t[_C]&&(t[Wk]="bubbleTipImpressed"),"banner"===t[_C]&&(t[Wk]="bannerImpressed")
const n=l(t,Wk)
this._options.isLoggingEnabled
const r=t[vb],o=t.app
if("com.apple.mobilesafari"===r&&o===US)return new $L({})
const s=l(t,ev)||this._options.defaultTopic
this._decorateAll(t,s)
const i=t[CC]
switch(i&&""===i&&delete t[CC],n){case nR:this._decorateClick(e,t)
break
case jh:break
case Bk:if(!this._decorateImpressions(t))return new $L({})
break
case WP:this._decorateMedia(t)
break
case yN:this._decoratePage(t)
break
case xS:this._decoratePageChange(t)
break
case Kh:this._decoratePageExit(t)
break
case MD:this._decorateSearch(t)}return this._filterExtraneous(t),new $L(t)}}ZU.hasIAdData=Wh
const XU="externalDeepLinkUrl"
class QU extends HN{constructor(e,t,n,r){super(),this.details=e,this.dismissButtonTitle=t,this.offerButtonAction=n,this.offerDisplayProperties=r,this.pageMetrics=new ML,this.pageRenderMetrics={}}}class eB extends HN{constructor(e,t,n){super(),this.headline=e,this.body=t,this.artwork=n}}class tB extends HN{constructor(e,t,n,r,o){super(),this.title=e,this.subtitle=t,this.items=n,this.continueAction=r,this.familyAction=o}}class nB extends HN{constructor(e,t){super(),this.individualContent=e,this.familyMemberContent=t,this.pageMetrics=new ML,this.pageRenderMetrics={}}}class rB extends HN{constructor(e,t,n,r){super(),this.serviceType=e,this.placement=t,this.seed=n,this.clientOptions=r,this.contextInfo=r,this.metricsOverlay={topic:LL}}}class oB extends HN{constructor(e){super(),this.clientOptions=e,this.metricsOverlay={topic:LL}}}class sB extends HN{constructor(e,t){super(),this.primaryIcon=e,this.icons=t}}class iB extends HN{constructor(e){super(),this.action=e}}const aB=new class{constructor(){this._app="",this._clientId="",this._pages=[]}get _requestId(){const e=Date.now().toString(36).toUpperCase(),t=Math.floor(1e5*Math.random()).toString(36).toUpperCase()
return this._clientId+"z"+e+"z"+t}get _prevPage(){return this._pages.length>=2?this._pages[this._pages.length-2]:void 0}useApp(e){""!==this._app||r(e)||(this._app=e)}useClientId(e){r(e)||(this._clientId=e)}usePageHistory(e){if(0!==e.length){this._pages.length=0
for(const t of e){const e=l(t)
r(e)||this._pages.push(e)}}}useNativeValues(e){const t=l(e,"nativeApp")
this.useApp(t)
const n=l(e,"nativeClientId")
this.useClientId(n)
const r=c(e,"nativePageHistory")
this.usePageHistory(r)}getPageHistoryFor(e){const t=this._pages.slice()
return this._pages.length>=5&&this._pages.shift(),this._pages.push(e),t}get params(){return{app:this._app,clientId:this._clientId,requestId:this._requestId,prevPage:this._prevPage,eventTime:Date.now()}}}
let cB=null
const uB={containerId:"mtContainerId",placementId:"mtIadPlacementId",templateType:"mtIadTemplateType"},lB={11:"43",30:"44"}
class fB{constructor(e,t,n){this.sectionType=e,this.shelfId=t,this.shelfBasedMappedIds=n}createProductPageSection(e){return kU.has(this.sectionType)?new OU(this.sectionType,null):new OU(this.sectionType,this.shelfId)}createShelfIdList(){return this.shelfBasedMappedIds||[this.shelfId]}}const dB=5,pB=5,hB=[new fB(IN,IN),new fB(SN,SN),new fB(MN,XD),new fB(MN,bb),new fB(MN,lD),new fB(MN,ok),new fB(MN,BR),new fB(MN,aN),new fB(MN,gD),new fB(MN,bk),new fB(MN,Ok),new fB(MN,YD),new fB(MN,rN),new fB(MN,xD),new fB(bN,bN),new fB(MN,mN),new fB(MN,hD),new fB(MN,RN,[TD,HC,uR]),new fB(MN,oN),new fB(MN,zD),new fB(MN,$D),new fB(MN,wN),new fB(MN,Dk),new fB(MN,vD),new fB(MN,wD),new fB(MN,_D),new fB(MN,GD)],wB=[new fB(IN,IN),new fB(SN,SN),new fB(MN,XD),new fB(MN,bb),new fB(MN,lD),new fB(MN,ok),new fB(MN,BR),new fB(MN,aN),new fB(MN,gD),new fB(MN,bk),new fB(MN,Ok),new fB(MN,YD),new fB(MN,rN),new fB(MN,xD),new fB(bN,bN),new fB(MN,mN),new fB(MN,hD),new fB(MN,RN,[TD,lR,UR,nk,fR]),new fB(MN,lR),new fB(MN,UR),new fB(MN,nk),new fB(MN,fR),new fB(MN,oN),new fB(MN,zD),new fB(MN,$D),new fB(MN,wN),new fB(MN,Dk),new fB(MN,vD),new fB(MN,wD),new fB(MN,_D),new fB(MN,GD)],gB=[new fB(IN,IN),new fB(SN,SN),new fB(MN,XD),new fB(MN,bb),new fB(MN,lD),new fB(MN,ok),new fB(MN,BR),new fB(bN,bN),new fB(MN,mN),new fB(MN,aN),new fB(MN,hD),new fB(MN,xD),new fB(MN,RN,[TD,uR]),new fB(MN,YD),new fB(MN,rN),new fB(MN,gD),new fB(MN,bk),new fB(MN,Ok),new fB(MN,oN),new fB(MN,zD),new fB(MN,$D),new fB(MN,wN),new fB(MN,GR),new fB(MN,vD),new fB(MN,wD),new fB(MN,_D),new fB(MN,GD)],mB=[new fB(IN,IN),new fB(SN,SN),new fB(MN,XD),new fB(MN,bb),new fB(MN,lD),new fB(MN,ok),new fB(MN,BR),new fB(bN,bN),new fB(MN,mN),new fB(MN,aN),new fB(MN,hD),new fB(MN,xD),new fB(MN,RN,[TD,UR,nk]),new fB(MN,YD),new fB(MN,rN),new fB(MN,gD),new fB(MN,bk),new fB(MN,Ok),new fB(MN,oN),new fB(MN,zD),new fB(MN,$D),new fB(MN,wN),new fB(MN,GR),new fB(MN,vD),new fB(MN,wD),new fB(MN,_D),new fB(MN,GD)],yB=[new fB(IN,IN),new fB(SN,SN),new fB(MN,XD),new fB(MN,bb),new fB(MN,lD),new fB(MN,GD),new fB(MN,ok),new fB(MN,BR),new fB(MN,aN),new fB(MN,gD),new fB(MN,bk),new fB(MN,Ok),new fB(MN,YD),new fB(MN,rN),new fB(MN,xD),new fB(bN,bN),new fB(MN,mN),new fB(MN,hD),new fB(MN,RN,[TD,HC,uR]),new fB(MN,oN),new fB(MN,zD),new fB(MN,$D),new fB(MN,wN),new fB(MN,Dk),new fB(MN,vD),new fB(MN,wD),new fB(MN,_D)],TB=[new fB(IN,IN),new fB(SN,SN),new fB(MN,XD),new fB(MN,bb),new fB(MN,lD),new fB(MN,GD),new fB(MN,ok),new fB(MN,BR),new fB(MN,aN),new fB(MN,gD),new fB(MN,bk),new fB(MN,Ok),new fB(MN,YD),new fB(MN,rN),new fB(MN,xD),new fB(bN,bN),new fB(MN,mN),new fB(MN,hD),new fB(MN,RN,[TD,lR,UR,nk,fR]),new fB(MN,lR),new fB(MN,UR),new fB(MN,nk),new fB(MN,fR),new fB(MN,oN),new fB(MN,zD),new fB(MN,$D),new fB(MN,wN),new fB(MN,Dk),new fB(MN,vD),new fB(MN,wD),new fB(MN,_D)],AB=5,EB=5,PB=[new fB(IN,IN),new fB(SN,SN),new fB(MN,XD),new fB(MN,Ob),new fB(MN,lD),new fB(MN,aN),new fB(MN,gD),new fB(MN,YD),new fB(MN,rN),new fB(MN,xD),new fB(bN,bN),new fB(MN,mN),new fB(MN,hD),new fB(MN,RN,[TD,HC,uR]),new fB(MN,oN),new fB(MN,zD),new fB(MN,$D),new fB(MN,wN),new fB(MN,Dk),new fB(MN,vD),new fB(MN,wD),new fB(MN,GD),new fB(MN,_D)],IB=[new fB(IN,IN),new fB(SN,SN),new fB(MN,XD),new fB(MN,Ob),new fB(MN,lD),new fB(MN,aN),new fB(MN,gD),new fB(MN,YD),new fB(MN,rN),new fB(MN,xD),new fB(bN,bN),new fB(MN,mN),new fB(MN,hD),new fB(MN,RN,[TD,lR,UR,nk,fR]),new fB(MN,oN),new fB(MN,zD),new fB(MN,$D),new fB(MN,wN),new fB(MN,Dk),new fB(MN,vD),new fB(MN,wD),new fB(MN,GD),new fB(MN,_D)],SB=[new fB(IN,IN),new fB(SN,SN),new fB(MN,XD),new fB(MN,Ob),new fB(MN,lD),new fB(bN,bN),new fB(MN,mN),new fB(MN,hD),new fB(MN,xD),new fB(MN,RN,[TD,uR]),new fB(MN,aN),new fB(MN,YD),new fB(MN,rN),new fB(MN,gD),new fB(MN,oN),new fB(MN,zD),new fB(MN,$D),new fB(MN,wN),new fB(MN,GR),new fB(MN,vD),new fB(MN,wD),new fB(MN,GD),new fB(MN,_D)],vB=[new fB(IN,IN),new fB(SN,SN),new fB(MN,XD),new fB(MN,Ob),new fB(MN,lD),new fB(bN,bN),new fB(MN,mN),new fB(MN,hD),new fB(MN,xD),new fB(MN,RN,[TD,UR,nk]),new fB(MN,aN),new fB(MN,YD),new fB(MN,rN),new fB(MN,gD),new fB(MN,oN),new fB(MN,zD),new fB(MN,$D),new fB(MN,wN),new fB(MN,GR),new fB(MN,vD),new fB(MN,wD),new fB(MN,GD),new fB(MN,_D)],_B=[new fB(IN,IN),new fB(SN,SN),new fB(MN,XD),new fB(MN,Ob),new fB(MN,lD),new fB(MN,GD),new fB(MN,aN),new fB(MN,gD),new fB(MN,YD),new fB(MN,rN),new fB(MN,xD),new fB(bN,bN),new fB(MN,mN),new fB(MN,hD),new fB(MN,RN,[TD,HC,uR]),new fB(MN,oN),new fB(MN,zD),new fB(MN,$D),new fB(MN,wN),new fB(MN,Dk),new fB(MN,vD),new fB(MN,wD),new fB(MN,_D)],CB=[new fB(IN,IN),new fB(SN,SN),new fB(MN,XD),new fB(MN,Ob),new fB(MN,lD),new fB(MN,GD),new fB(MN,aN),new fB(MN,gD),new fB(MN,YD),new fB(MN,rN),new fB(MN,xD),new fB(bN,bN),new fB(MN,mN),new fB(MN,hD),new fB(MN,RN,[TD,lR,UR,nk,fR]),new fB(MN,oN),new fB(MN,zD),new fB(MN,$D),new fB(MN,wN),new fB(MN,Dk),new fB(MN,vD),new fB(MN,wD),new fB(MN,_D)],OB=5,bB=5,RB=[new fB(IN,IN),new fB(SN,SN),new fB(MN,XD),new fB(MN,lD),new fB(MN,ok),new fB(MN,BR),new fB(MN,aN),new fB(MN,gD),new fB(MN,bk),new fB(MN,Ok),new fB(MN,YD),new fB(MN,rN),new fB(MN,xD),new fB(bN,bN),new fB(MN,mN),new fB(MN,hD),new fB(MN,RN),new fB(MN,oN),new fB(MN,zD),new fB(MN,$D),new fB(MN,wN),new fB(MN,Dk),new fB(MN,vD),new fB(MN,wD),new fB(MN,_D),new fB(MN,GD)],kB=[new fB(IN,IN),new fB(SN,SN),new fB(MN,XD),new fB(MN,lD),new fB(MN,ok),new fB(MN,BR),new fB(bN,bN),new fB(MN,mN),new fB(MN,aN),new fB(MN,hD),new fB(MN,xD),new fB(MN,RN),new fB(MN,YD),new fB(MN,rN),new fB(MN,gD),new fB(MN,bk),new fB(MN,Ok),new fB(MN,oN),new fB(MN,zD),new fB(MN,$D),new fB(MN,wN),new fB(MN,GR),new fB(MN,vD),new fB(MN,wD),new fB(MN,_D),new fB(MN,GD)],DB=5,NB=5,LB=[new fB(IN,IN),new fB(SN,SN),new fB(MN,XD),new fB(MN,lD),new fB(MN,aN),new fB(MN,gD),new fB(MN,YD),new fB(MN,rN),new fB(MN,xD),new fB(bN,bN),new fB(MN,mN),new fB(MN,hD),new fB(MN,RN),new fB(MN,oN),new fB(MN,zD),new fB(MN,$D),new fB(MN,wN),new fB(MN,Dk),new fB(MN,vD),new fB(MN,wD),new fB(MN,GD),new fB(MN,_D)],FB=[new fB(IN,IN),new fB(SN,SN),new fB(MN,XD),new fB(MN,lD),new fB(bN,bN),new fB(MN,mN),new fB(MN,hD),new fB(MN,xD),new fB(MN,RN),new fB(MN,aN),new fB(MN,YD),new fB(MN,rN),new fB(MN,gD),new fB(MN,oN),new fB(MN,zD),new fB(MN,$D),new fB(MN,wN),new fB(MN,GR),new fB(MN,vD),new fB(MN,wD),new fB(MN,GD),new fB(MN,_D)],$B=5,xB=5,MB=[new fB(IN,IN),new fB(SN,SN),new fB(MN,xD),new fB(bN,bN),new fB(MN,sO),new fB(MN,YD),new fB(MN,rN),new fB(MN,RN),new fB(MN,_D),new fB(MN,GD),new fB(MN,oN),new fB(MN,zD),new fB(MN,$D),new fB(MN,wN),new fB(MN,Dk),new fB(MN,iO)],UB=[new fB(IN,IN),new fB(SN,SN),new fB(bN,bN),new fB(MN,sO),new fB(MN,xD),new fB(MN,RN),new fB(MN,YD),new fB(MN,rN),new fB(MN,_D),new fB(MN,GD),new fB(MN,oN),new fB(MN,zD),new fB(MN,$D),new fB(MN,wN),new fB(MN,GR),new fB(MN,iO)],BB=5,GB=5,VB=[new fB(IN,IN),new fB(SN,SN),new fB(MN,xD),new fB(bN,bN),new fB(MN,sO),new fB(MN,YD),new fB(MN,rN),new fB(MN,RN),new fB(MN,GD),new fB(MN,_D),new fB(MN,oN),new fB(MN,zD),new fB(MN,$D),new fB(MN,wN),new fB(MN,Dk),new fB(MN,iO)],HB=[new fB(IN,IN),new fB(SN,SN),new fB(bN,bN),new fB(MN,sO),new fB(MN,xD),new fB(MN,RN),new fB(MN,YD),new fB(MN,rN),new fB(MN,GD),new fB(MN,_D),new fB(MN,oN),new fB(MN,zD),new fB(MN,$D),new fB(MN,wN),new fB(MN,GR),new fB(MN,iO)],jB=3,WB=3,qB=[new fB(IN,IN),new fB(SN,SN),new fB(MN,gD),new fB(bN,bN),new fB(MN,mN),new fB(MN,oN),new fB(MN,zD),new fB(MN,W_)],YB=[new fB(IN,IN),new fB(SN,SN),new fB(bN,bN),new fB(MN,mN),new fB(MN,gD),new fB(MN,oN),new fB(MN,zD),new fB(MN,W_)],zB="product_media"
class JB extends HN{constructor(e,t,n,r,o){super(),this.displayFromDate=e,this.displayText=t,this.showLiveIndicator=n,this.countdownToDate=r,this.countdownStringKey=o}}class KB extends jN{constructor(e,t,n,r,o,s,i,a,c,u,l,f,d,p,h){super(),this.appEventId=e,this.moduleArtwork=t,this.moduleVideo=n,this.title=r,this.subtitle=o,this.detail=s,this.startDate=i,this.endDate=a,this.kind=c,this.requirements=u,this.lockup=l,this.hideLockupWhenNotInstalled=f,this.formattedDates=d,this.mediaOverlayStyle=p,this.includeBorderInDarkMode=h,this.clickAction=null}}class ZB extends HN{constructor(e,t,n,r,o,s){super(),this.appEvent=e,this.artwork=t,this.video=n,this.shareAction=r,this.mediaOverlayStyle=o,this.includeBorderInDarkMode=s,this.pageMetrics=new ML,this.pageRenderMetrics={}}}class XB extends HN{constructor(e,t,n,r,o,s,i,a,c,u,l){super(),this.appEventId=e,this.title=t,this.detail=n,this.artworkUrl=r,this.displayTime=o,this.scheduledAction=s,this.notAuthorizedAction=i,this.failureAction=a,this.destinationUrl=c,this.scheduleClickEvent=u,this.cancelScheduleClickEvent=l}}class QB extends HN{constructor(e){super(),this.style=e}isValidUber(e){function t(e){return typeof e!==Gk&&null!==e&&0!==Object.keys(e).length}return t(this.artwork)||t(this.compactArtwork)||t(this.video)||t(this.compactVideo)||e&&t(this.iconArtwork)}}class eG extends HN{constructor(){super(),this.pageMetrics=new ML,this.pageRenderMetrics={}}}class tG extends eG{}class nG extends eG{constructor(e=[]){super(),this.shelves=[],this.shelves=e}}class rG extends HN{constructor(e,t){super(),this.type=e,this.values=t}}class oG extends HN{constructor(e,t,n=null){super(),this.name=e,this.value=t,this.isSelected=t===n}}class sG extends HN{constructor(e,t,n,r){super(),this.instanceId=e,this.iAd=t,this.impressionId=n,this.transparencyAction=r}}class iG extends GL{constructor(e){super("AdTransparencyAction"),this.adTransparencyData=e}}class aG extends GL{constructor(e,t,n,r,o){super("SearchAction"),this.spellCheckEnabled=!1,this.title=e,this.term=t,this.url=n,this.origin=r,this.entity=o,this.presentationStyle=[qA]}}class cG extends HN{constructor(e,t){super(),this.hints=e,this.ghostHintTerm=t,this.pageMetrics=new ML,this.pageRenderMetrics={}}}class uG extends HN{constructor(e,t){super(),this.primaryText=e,this.secondaryText=t}}class lG extends jN{constructor(e){super(),this.resultType=e,this.clickAction=null}}class fG extends lG{constructor(e){super("content"),this.lockup=e}}class dG extends lG{constructor(e){super(wR),this.lockup=e}}class pG extends lG{constructor(e){super(YA),this.lockup=e}}class hG extends lG{constructor(){super("advert"),this.lockups=[],this.displaysScreenshots=!0,this.itemBackground="ad"}}class wG extends lG{constructor(){super(Mb)}}class gG extends lG{constructor(){super(zA)}}class mG extends lG{constructor(e,t,n,r){super("lockupCollection"),this.heading=e,this.title=t,this.items=n,this.detailAction=r}}!function(e){e.requestedUrl="_jet-internal:metricsHelpers_requestedUrl",e.timingValues="_jet-internal:metricsHelpers_timingValues",e.pageInformation="_jet-internal:metricsHelpers_pageInformation",e.contentMaxAge="_jet-internal:responseMetadata_contentMaxAge"}(qf||(qf={}))
const yG={identifer:"UPumzpM",treatments:[0,1]}
class TG{constructor(e,t){e&&(this.appStoreClientRequestId=t,this.iAdId=e[$R],this.sponsoredSearchRequestData=e.dataBlob,this.routingInfo=e.iAdRoutingInfo,this.canary=e.canary)}validAdRequest(){const e=this.sponsoredSearchRequestData&&this.sponsoredSearchRequestData.length>0,t=this.routingInfo&&this.routingInfo.length>0
return e&&t}}const AG={showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}}
let EG=null
const PG=(e,t)=>{const n=e.isLandscape()
return n===t.isLandscape()?0:n?-1:1},IG=new Set([NC,$R,QR,pw,rI,VO,t_,e_,Xk,"iAd",NR,xR,Wh,LC,Wk,Sb])
class SG extends HN{constructor(e,t,n,r,o=!1){super(),this.strategy=e,this.updateDelayInterval=t,this.timeSinceOnScreenInterval=n,this.timeToLiveEndDate=r,this.refreshWhileVisible=o}}class vG extends HN{constructor(e,t,n,r,o){super(),this.name=e,this.genreId=t,this.artwork=n,this.ageBandId=r,this.children=o}}class _G extends HN{constructor(e){super(),this.categories=e}}class CG extends Error{}const OG="x-apple-application-instance"
let bG=null
const RG=[mN,Ep,FE,kD,iC,Pp,ZR,$E,dv,db,vR,pv,pb,xE,Hb,Ip,Sp],kG=/id([0-9]+)\/?$/i,DG={915249334:"1462947752"},NG=[Jb,VE,Pk,TN,Tv,Av,uC,lC],LG=[Jb,Pk,TN,EO],FG=uC,$G=new Set([117,122,118,195,194,197,369,370,371,372,373,374,375,376,377,378,379,380,395,396,397,398,399,400,491,492,493,504,505,506,520,521,522,523,524,525,530,531,532,533]),xG=new Set([491,492,493]),MG=new Set([530,531,532,533]),UG=new Set([311,312,476]),BG=new Set([418,431,429,430,420,304,305,260,497]),GG=new Set([413,414,254,255,256,266,271,436])
class VG{}class HG extends Error{}class jG extends VG{constructor(e){super(),this.rawData=e,this.appId=null,this.groupId=null,this.score=0,this.segScores=new Map,this.modifiedScore=0}}class WG extends VG{constructor(e){super(),this.rawData=e,this.isExactMatch=!1,this.isWildcardMatch=!1,this.isUnpersonalizedMatch=!1,this.isFallbackMatch=!1,this.appId=null,this.groupId=null}}const qG="-1"
class YG{constructor(e){this.supportedFeaturedContentIds=new Set([]),this.supportedNativeGroupingShelfIds=new Set([]),this.builderClass=e}supports(e,t,n,r){return this._supports(e,t,n,r)}_supports(e,t,n,r){const o=this.supportedFeaturedContentIds.has(n)
let i
return i=!s(r)||this.supportedNativeGroupingShelfIds.has(r),o&&i}createShelf(e,t,n,o,a){const c=t,u=this.initialShelfDataFromGroupingMediaApiData(c),l=this.shelfTokenFromBaseTokenAndMediaApiData(e,c,o,n),f=this.shelfMetricsOptionsFromBaseMetricsOptions(e,l,a),d=i(f)
d&&this.shouldImpressShelf()&&ic(f,l.title)
const p=this._createShelf(e,l,u,n)
if(d&&this.shouldImpressShelf()&&(cc(f.locationTracker),s(p)&&(cn(0,p,f),i(p.url)&&i(p.impressionMetrics)&&l.showingPlaceholders))){const e=p.url
try{const t=Ox.from(e).pathComponents().pop(),n=JSON.parse(decodeURIComponent(t))
n.originalPlaceholderShelfImpressionMetrics=p.impressionMetrics,function(e,t){const n=Ox.from(e.url),o=Ox.from(Lr(e,t))
for(const e of Object.keys(n.query))r(o.query[e])&&(o.query[e]=n.query[e])
e.url=o.build()}(p,n)}catch{p.url=e}}return this.finalizeInitialShelfForDisplay(e,p,l,u,n),d&&this.shouldPrepareLocationTrackerForNextPosition()&&dc(n.metricsLocationTracker),p}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){return n}shouldImpressShelf(){return!0}shouldPrepareLocationTrackerForNextPosition(){return!0}finalizeInitialShelfForDisplay(e,t,n,r,s){if(o(t))return
n.isSearchLandingPage&&Hr(0,t,n),i(t.url)&&i(s.additionalShelfParameters)&&(t.url=Ox.from(t.url).append(dk,s.additionalShelfParameters).build())
const a=t&&i(t.url)
o(t.items)&&!a&&(t.isHidden=!0)}finalizeSecondaryShelfForDisplay(e,t,n,s){if(!o(t)){var a
if(n.remainingItems.length&&n.remainingItems.map(e=>e.id),t&&(t.mergeWhenFetched=((a=n).shelfStyle,!a.showingPlaceholders),t.networkTimingMetrics=s.responseTimingValues,t.nextPreferredContentRefreshDate=nr({timeToLive:null,nextPreferredContentRefreshDate:null,refreshWhileVisibleForNextPreferredContentRefreshDate:!1})),i(n.originalPlaceholderShelfImpressionMetrics))if(r(t.impressionMetrics))t.impressionMetrics=n.originalPlaceholderShelfImpressionMetrics
else for(const e in n.originalPlaceholderShelfImpressionMetrics.fields)Object.prototype.hasOwnProperty.call(n.originalPlaceholderShelfImpressionMetrics.fields,e)&&(t.impressionMetrics.fields[e]=n.originalPlaceholderShelfImpressionMetrics.fields[e])
!n.hasExistingContent&&o(t.items)&&(t.isHidden=!0),n.isSearchLandingPage&&Hr(0,t,n)}}handleShelf(e,t,n,r,o,s){const i=n[qD],a=JSON.parse(i)
a.isFirstRender=!1,this.secondaryShelfDataForShelfUrl(e,t,n).then(t=>{const n=this._createShelf(e,a,t,null)
this.finalizeSecondaryShelfForDisplay(e,n,a,t),o(n)}).catch(e=>{if(a&&!a.hasExistingContent){const e=new CM(a.shelfStyle)
e.isHidden=!0,o(e)}else s(e)})}shelfRoute(e){return i(this.supportedNativeGroupingShelfIds)?function(e,t){const n=[]
for(const t of e)n.push(oo(-1,t,void 0))
return n}(this.supportedNativeGroupingShelfIds):so(this.supportedFeaturedContentIds)}static async secondaryGroupingShelfDataForShelfUrl(e,t,n){const r=n[qD],o=JSON.parse(r)
return await YG.secondaryGroupingShelfMediaApiData(e,t,n).then(e=>({shelfContents:Fr(o,e),responseTimingValues:e[qf.timingValues]}))}static async secondaryGroupingShelfMediaApiData(e,t,n){const r=t.build()
let o
return o=mr(e,t)?new xM(e,r):$r(e,0,n),o?(o.includingAdditionalPlatforms(function(e){return v(e)}(e)),o.includingAttributes(function(e){const t=[cN,zk,oD,xv]
return e.appleSilicon.isSupportEnabled&&t.push(PD),t}(e)),o.usingCustomAttributes(ne(e)),o.attributingTo(t.build()),await lr(e,o)):await Promise.reject(new Error(`Could not construct media API request for: ${t}`))}}class zG extends YG{constructor(){super("GroupingAppEventShelfController"),this.supportedFeaturedContentIds=new Set([519,518])}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:we(e,kN)}}async secondaryShelfDataForShelfUrl(e,t,n){return await YG.secondaryGroupingShelfDataForShelfUrl(e,t,n)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o=518===n.featuredContentId
let s=null
const a=this.initialShelfDataFromGroupingMediaApiData(t)
return o&&i(a.shelfContents)&&(s=this.personalizedDataResultFromDataItems(e,a.shelfContents)),{...n,shouldPersonalizeData:o,personalizedDataResult:s}}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){const r={...n}
if(i(t.personalizedDataResult)){const e=rc(n.recoMetricsData,t.personalizedDataResult.processingType,null)
r.recoMetricsData=e}return r}_createShelf(e,t,n,s){if(!pn(e))return null
if(o(n.shelfContents))return null
const a={pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,targetType:IR}
let c=n.shelfContents
i(t.personalizedDataResult)&&t.isFirstRender&&(c=t.personalizedDataResult.personalizedData)
const u=[]
for(const e of c)r(e.attributes)||kr(t)?(t.isDeferring=!0,t.remainingItems.push(e)):u.push(e)
const l=yn(e,u,null,!1,!1,a,!1,!0,t.isArcadePage,!1)
er(l.nextAppEventPromotionStartDate,null==s?void 0:s.refreshController)
const f=l.appEvents
if(0===f.length&&u.length===c.length)return null
const d=new CM(Mb)
return d.isHorizontal=!0,d.title=t.title,d.items=f,d&&o(d.items)&&t.isFirstRender&&ro(d,t,e.client.deviceType),d.url=Lr(d,t),d}personalizedDataResultFromDataItems(e,t){const n=new Set
for(const e of t){const t=l(e,RO)
i(t)&&n.add(t)}const r=to(e,n)
return Qr(e,lh,t,!1,r,null,null,null,!0)}}class JG extends YG{constructor(){super("GroupingArcadeFooterShelfController"),this.supportedFeaturedContentIds=new Set([-1]),this.supportedNativeGroupingShelfIds=new Set([1])}shouldImpressShelf(){return!1}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:k(e),responseTimingValues:null}}async secondaryShelfDataForShelfUrl(e,t,n){const r=uo(e,this.numberOfIconsForArcadeAppGrid(e.client.deviceType))
return await lr(e,r).then(e=>{const t=this.initialShelfDataFromGroupingMediaApiData(e)
return t.responseTimingValues=e[qf.timingValues],t})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o={...n,shouldIncludeShelfUrl:n.isFirstRender}
return o.showingPlaceholders=n.isFirstRender,o}_createShelf(e,t,n,o){const s=new cL,a=new CM("arcadeFooter")
a.items=[s]
const c={targetType:"arcadeSeeAllGamesFooter",pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,title:e.loc.string(Yd),id:t.id,kind:"footer",softwareType:null}
cn(0,s,c),ic(c,c.title),s.buttonAction=function(e,t=j_,n,r){const o=Ox.fromComponents(RF,null,`/${GF}`,{sort:t}),s=new VL(Yb,o.build())
return s.title=e.loc.string(Yd),Qe(e,s,{id:zd,targetType:vN,actionType:QD,actionContext:WR,pageInformation:n,locationTracker:r}),s}(e,j_,t.metricsPageInformation,t.metricsLocationTracker)
const u={targetType:vN,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,title:s.buttonAction.title,id:zd,kind:vN,softwareType:null}
cn(0,s.buttonAction,u),cc(c.locationTracker)
const l=e.bag.termsAndConditionsURL
if(!r(l)&&"tv"!==e.client.deviceType){const t=e.loc.string(oh),n=new WL(l),r=new Wx(t)
r.clickAction=n,r.presentationStyle=[uP,lP,fP],s.footnote=r}if(a.background={type:xk,color:F(Cp)},i(n.shelfContents)){const r={pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker}
s.icons=ra(e,n.shelfContents,r,{useCase:2})}else s.icons=[]
return t.shouldIncludeShelfUrl&&(a.url=Nr(t)),a}numberOfIconsForArcadeAppGrid(e){return e===CN?9:20}}class KG extends YG{constructor(){super("GroupingBrickShelfController"),this.supportedFeaturedContentIds=new Set([421,422,423,261])}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:we(e,bD)}}async secondaryShelfDataForShelfUrl(e,t,n){const r=n[qD],o=JSON.parse(r)
return await YG.secondaryGroupingShelfDataForShelfUrl(e,t,n).then(e=>({shelfContents:Vr(e.shelfContents,we(o.featuredContentData,bD))}))}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,o){let s=B(t,"suppressText")
r(s)&&(s=!0)
const i={...n,showSupplementaryText:!s}
return i.clientIdentifierOverride=ho(0,t),i}_createShelf(e,t,r,i){const a=[],c=[],u=new CM(wP)
u.isHorizontal=!0
for(const n of r.shelfContents){const r=KG.createBrick(e,n,t.metricsPageInformation,t.metricsLocationTracker,t,i)
r?(a.push(r),dc(t.metricsLocationTracker)):c.push(n)}return s(t.presentationHints)&&(u.presentationHints=t.presentationHints),s(t.showSupplementaryText)&&(u.presentationHints={...u.presentationHints,showSupplementaryText:t.showSupplementaryText}),delete t.maxItemCount,s(n(t.featuredContentData,"relationships.children.data"))&&(t.featuredContentData.relationships[bD].data=c),u.title=t.title,u.subtitle=t.subtitle,u.items=a,u&&o(u.items)&&t.isFirstRender&&ro(u,t,e.client.deviceType),t.presentationHints=u.presentationHints,u.url=Lr(u,t),u}static createBrick(e,t,n,r,o,i){const a={targetType:wP,pageInformation:n,locationTracker:r,recoMetricsData:D(t)},c=Gr(e,t,o,!1,null,a,i)
if(!c)return null
const u=new sM,l={useCase:17}
if(c.artwork&&261!==(null==o?void 0:o.featuredContentId)){let t=d(c.artwork,fh)
t||(t=d(c.artwork,"originalFlowcaseBrick")),u.artwork=Ur(e,t,l)}else u.artwork=Br(e,t,1060,520,l)
u.accessibilityLabel=c.title,u.shortEditorialDescription=c.title,u.clickAction=c.action,435===V(t,sk)&&(u.personalizationStyle=yC)
const f=he(t,kN)
if(s(f)){const n=Ke(e,f,a)
u.flowPreviewActionsConfiguration=kt(e,t,!0,null==o?void 0:o.clientIdentifierOverride,u.clickAction,a,n)}return cn(0,u,fn(e,t,c.title,a)),u.isValid()?u:null}}class ZG extends YG{constructor(){super("GroupingCategoryShelfController"),this.supportedFeaturedContentIds=new Set([425])}initialShelfDataFromGroupingMediaApiData(e){const t=he(e,bD)
return t?{shelfContents:we(t,bD)}:{shelfContents:[]}}async secondaryShelfDataForShelfUrl(e,t,n){const r=n[qD],o=JSON.parse(r)
return await YG.secondaryGroupingShelfDataForShelfUrl(e,t,n).then(e=>{const t=he(o.featuredContentData,bD)
return t?{shelfContents:Vr(e.shelfContents,we(t,bD))}:{shelfContents:[]}})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}_createShelf(e,t,n,s){if(o(n.shelfContents))return null
const a=[]
for(const o of n.shelfContents){const n=he(o,kO)
if(r(n))continue
const s=Wr(0,n)
if(r(o.attributes)||r(n.attributes)||kr(t)){t.isDeferring=!0,t.remainingItems.push(n)
continue}const c={targetType:dh,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:D(o)},u=qi(e,n,{...c,id:s},t.clientIdentifierOverride)
cn(0,u,{...c,kind:nN,softwareType:null,title:u.title,id:s})
const l=x(n,lN)
i(l)&&(u.artwork=ta(e,l,{allowingTransparency:!0,useCase:19})),a.push(u),dc(t.metricsLocationTracker)}const c=this.shelfForCategoryActions(e,a,t)
return c.title=t.title,c.subtitle=t.subtitle,c.url=Lr(c,t),c}shelfForCategoryActions(e,t,n){const r=new CM(qk)
let o
switch(e.client.deviceType){case"tv":r.isHorizontal=!0,o=7
break
case $N:r.isHorizontal=!1,o=null
break
default:r.isHorizontal=!1,o=6}if(null!==o&&t.length>o){r.items=t.slice(0,o)
const s=new VL(yN)
s.title=e.loc.string(Sk),et(e,s,null,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker}),r.seeAllAction=s
const i=new CM(qk)
i.isHorizontal=!1,this.sortCategories(e,t),i.items=t
const a=new DM([i])
a.title=e.loc.string("PAGE_TITLE_CATEGORIES"),s.pageData=a}else r.items=t
return r}sortCategories(e,t){t.sort((t,n)=>{try{return t.title.localeCompare(n.title,e.loc.safeIdentifier,{usage:Nk})}catch(e){return 0}})}}class XG extends YG{constructor(){super("GroupingEditorialCardShelfController"),this.supportedFeaturedContentIds=new Set([415,416,501,417,258])}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:we(e,bD)}}async secondaryShelfDataForShelfUrl(e,t,n){return await YG.secondaryGroupingShelfDataForShelfUrl(e,t,n)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}_createShelf(e,t,n,r){const s=new CM("editorialCard")
s.isHorizontal=!0,t.relationshipToFetch=kN
const i=this.personalizationDataContainerForEditorialCardItemsDataArray(e,n.shelfContents),a=[]
for(const s of n.shelfContents){const n=XG.makeEditorialCard(e,s,i,r,t)
!o(n)&&n.isValid()&&(a.push(n),dc(t.metricsLocationTracker))}return delete t.maxItemCount,s.items=a,s.url=Lr(s,t),s}static makeEditorialCard(e,t,n,o,a){const c={targetType:VA,pageInformation:null==a?void 0:a.metricsPageInformation,locationTracker:null==a?void 0:a.metricsLocationTracker,recoMetricsData:D(t),id:t.id,idType:"editorial_id"},u=V(t,sk),f=Gr(e,t,a,501===u,n,c,o,()=>{null==a||a.remainingItems.push(t)})
if(!f)return null
i(f.content)&&(c.adamId=f.content.id)
const p=new rM
let h=U(t,"designBadge")
h||(h=f.caption),p.caption=h
let w=U(t,KR)
w||(w=f.title),p.title=w
let g=qr(U(t,gP))
g||(g=f.subtitle),p.subtitle=g
const m={useCase:18,withJoeColorPlaceholder:!0}
if(f.artwork&&258!==(null==a?void 0:a.featuredContentId)){let t=d(f.artwork,fh)
r(t)&&s(f.appEvent)&&(t=d(f.artwork,"eventCard")),p.artwork=Ur(e,t,m)}else p.artwork=Br(e,t,416,204,m)
if(p.clickAction=f.action,s(f.appEvent)&&(p.appEventFormattedDates=f.appEvent.formattedDates),p.lockup=f.lockup,s(p.artwork)&&s(p.artwork.backgroundColor)){const e=L(p.artwork.backgroundColor)
if(p.mediaOverlayStyle=e?hN:dD,s(p.lockup)&&s(p.lockup.offerDisplayProperties)){const t=e?hN:dD
p.lockup.offerDisplayProperties=p.lockup.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,TE,t)}}p.adamId=l(f.content,"id")
const y=he(t,kN)
if(s(y)){const n=Ke(e,y,c)
n.targetType=c.targetType,p.flowPreviewActionsConfiguration=kt(e,t,!1,null==a?void 0:a.clientIdentifierOverride,p.clickAction,c,n)}const T=fn(e,t,f.title,c)
if(s(f.onDevicePersonalizationDataProcessingType)){const e=rc(T.recoMetricsData,f.onDevicePersonalizationDataProcessingType,null)
T.recoMetricsData=e}return s(f.appEvent)&&(T.inAppEventId=f.appEvent.appEventId,s(f.appEvent.lockup)&&(T.relatedSubjectIds=[f.appEvent.lockup.adamId])),s(a)&&cn(0,p,T),p}personalizationDataContainerForEditorialCardItemsDataArray(e,t){if(!eo(e))return null
const n=new Set
for(const e of t){const t=501===V(e,sk),r=i(l(e,DN)),o=i(U(e,mP)),s=de(e,kN,!1)
if(t&&!r&&!o&&s){const t=we(e,kN)
for(const e of t){const t=l(e,RO)
i(t)&&n.add(t)}}}return to(e,n)}}class QG extends YG{constructor(){super("GroupingEditorialStoryCardShelfController"),this.supportedFeaturedContentIds=new Set([475])}shelfRoute(e){return so(this.supportedFeaturedContentIds,["shelfContentType=editorialStoryCard"])}_supports(e,t,n,r){return!!super._supports(e,t,n,r)&&jr(0,U(t,jD))===yP}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:we(e,bD)}}async secondaryShelfDataForShelfUrl(e,t,n){return await YG.secondaryGroupingShelfDataForShelfUrl(e,t,n)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o={...n},s=U(t,jD)
return o.shelfStyle=jr(0,s),o}_createShelf(e,t,n,r){const s=[]
for(const r of n.shelfContents){if(!H(r)||kr(t)){t.remainingItems.push(r),t.isDeferring=!0
continue}const n=QG.makeStoryCard(e,r,t)
o(n)||(s.push(n),dc(t.metricsLocationTracker))}const i=new CM(t.shelfStyle)
return i.title=t.title,i.items=s,i.isHorizontal=!0,i.background={type:TP},i.url=Lr(i,t),i.isHorizontal=!0,i}static makeStoryCard(e,t,n){let i=x(t,"editorialArtwork.subscriptionHero")
o(i)&&(i=x(t,AP))
const a=ta(e,i,{cropCode:"fn",withJoeColorPlaceholder:!0,useCase:16})
if(r(a))return null
const c=U(t,"editorialNotes.name"),u=U(t,RD),l=U(t,ph),f=new OM(c,a,u,l),d=lu(e,t,{pageInformation:null==n?void 0:n.metricsPageInformation,locationTracker:null==n?void 0:n.metricsLocationTracker},null)
s(d)&&(f.clickAction=d.clickAction)
const p=L(a.backgroundColor)?hN:dD
return f.shelfBackground={type:lN,artwork:a,style:p},f}}class eV extends YG{constructor(){super("GroupingGameCenterActivityFeedController"),this.batchGroupKey=lk,this.supportedFeaturedContentIds=new Set([548])}shelfRoute(e){return[...super.shelfRoute(e),{protocol:RF,path:`/${MF}/${LF}/{token}`,query:[N$]}]}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:[],activities:[]}}async secondaryShelfDataForShelfUrl(e,t,n){const r=n[qD],o=JSON.parse(r),s=this.gameCategoryFilter(o.gamesFilter)
return e.props.enabled("fetchActivityFeedCardsWithLimit")?await e.gameCenter.fetchActivityFeedCards(s,20).then(e=>({shelfContents:[],activities:e})):await e.gameCenter.fetchActivityFeed(s).then(e=>({shelfContents:[],activities:e.slice(0,20)}))}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}_createShelf(e,t,n,r){return t.isFirstRender?this.pendingActivityFeedShelfForGrouping(e,t):this.activityFeedShelfForGrouping(e,n,t)}pendingActivityFeedShelfForGrouping(e,t){if(e.client.deviceType!==CN&&e.client.deviceType!==EN)return null
const n=this.activityFeedShelfForGrouping(e,{shelfContents:[],activities:[]},t),r=Ox.from(Nr(t))
return n.url=r.param(N$,SD).build(),n.isHidden=0===n.items.length,n.batchGroup=this.batchGroupKey,n}activityFeedShelfForGrouping(e,t,n){if(e.client.deviceType!==CN&&e.client.deviceType!==EN)return null
const r=this.activityFeedShelf(e,t.activities,n)
return r.titleArtwork=Ve(e,DO,16,16),r.subtitle=n.subtitle,r.title=n.title,r.batchGroup=this.batchGroupKey,r.isHidden=0===r.items.length,r}activityFeedShelf(e,t,n){const r=new CM("gameCenterActivityFeedCard")
r.isHorizontal=!0,r.mergeWhenFetched=!0,r.batchGroup=this.batchGroupKey,r.items=t,r.isHidden=0===r.items.length,t.forEach((t,r)=>{cn(0,t,{id:"friendActivity",idType:EP,targetType:"chiclet",kind:null,softwareType:null,title:"",pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker})
const o=new xL,s=new xL,i=new xL,a=new xL,c=new xL;[{targetId:"playerName",metrics:o},{targetId:"profileImage",metrics:s},{targetId:"leaderboardAchievement",metrics:i},{targetId:hh,metrics:a},{targetId:t.adamID||"gameIcon",metrics:c}].forEach(t=>function(e,t,n,r,o){const s={actionType:QD,id:r,idType:EP,location:sc(o,n),badges:{gameCenter:{}}},i=We(e,r,nN,s)
t.addMetricsData(i)}(e,t.metrics,n.title,t.targetId,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker})),t.profileActionMetrics=o,t.profileAvatarActionMetrics=s,t.leaderboardActionMetrics=i,t.achievementActionMetrics=a,t.appActionMetrics=c,dc(n.metricsLocationTracker)})
const o=new VL("gameCenterDashboard")
return o.title=e.loc.string("AppStore.Arcade.ActivityFeed.AllActivity",e.loc.string(Sk)),et(e,o,null,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker}),r.seeAllAction=o,r}gameCategoryFilter(e){return e===Lv?PP:e}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){return{...n,title:"Friend Activity",badges:{gameCenter:{}},idType:"shelf_id"}}}class tV extends YG{constructor(){super("GroupingGameCenterContinuePlayingShelfController"),this.batchGroupKey="gameCenterContinuePlaying",this.supportedFeaturedContentIds=new Set([500])}_supports(e,t,n,r){return super._supports(e,t,n,r)&&this.supportsVideoCardShelf(e,e.host.platform)}shelfRoute(e){return[...super.shelfRoute(e),{protocol:RF,path:`/${MF}/${LF}/{token}`,query:[$$]}]}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:we(e,kN)}}async secondaryShelfDataForShelfUrl(e,t,n){const r=n[qD],o=JSON.parse(r),s=(Date.now(),this.maximumNumberOfRecentGamesToRequest()),i=e.gameCenter.fetchRecentlyPlayedGamesWithinSeconds(this.gameCategoryFilter(o.gamesFilter),s,e.bag.recentlyPlayedGamesWindowInSeconds)
return await i.then(async t=>{let n
if(Date.now(),0===t.length){const e={shelfContents:[]}
return await Promise.resolve(e)}{const r=new xM(e).forType(kN).withIds(t.slice(0,this.maximumNumberOfRecentGamesToShow()))
xr(e,r),n=lr(e,r,{}).then(e=>({shelfContents:e.data,responseTimingValues:e[qf.timingValues]}))}return await n})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}_createShelf(e,t,n,r){return t.isFirstRender?this.pendingContinuePlayingForGrouping(e,t):this.continuePlayingShelfForGrouping(e,n.shelfContents,t)}pendingContinuePlayingForGrouping(e,t){const n=this.continuePlayingShelfForGrouping(e,[],t)
if(!n)return null
const r=Ox.from(Nr(t))
return n.url=r.param($$,SD).build(),n.batchGroup=this.batchGroupKey,n}continuePlayingShelfForGrouping(e,t,n){return $f.context("continuePlayingShelfForGrouping",()=>{const r=this.videoCardContinuePlayingShelf(e,t,n)
return r.mergeWhenFetched=!1,r.title=e.loc.string(wh),r.subtitle=n.subtitle,r.batchGroup=this.batchGroupKey,r.isHidden=!n.isFirstRender&&0===r.items.length,r.eyebrow=e.loc.uppercased(e.loc.string(TC)),r.eyebrowArtwork=Ve(e,DO,16,16),r})}supportsVideoCardShelf(e,t){switch(t){case HR:case NO:case Ak:return!0
default:return!1}}videoCardContinuePlayingShelf(e,t,n){return $f.context("videoCardContinuePlayingShelf",()=>{const r=new CM(gh)
r.isHorizontal=!0,r.batchGroup=this.batchGroupKey
const o=[]
for(const r of t){if(xe(e,r))continue
const t=this.editorialSplashVideoCardForContinuePlaying(e,r,n)
t&&(o.push(t),dc(n.metricsLocationTracker))}return r.items=o,r})}editorialSplashVideoCardForContinuePlaying(e,t,n){return $f.context("editorialSplashVideoCardForContinuePlaying",()=>{const r=uc(n.metricsLocationTracker),o={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,targetType:VD,anonymizationOptions:{anonymizationString:`GAME${r}`}},s=e.featureFlags.isEnabled(cb)&&u(n.isArcadePage),i=Fa(e,t),a={metricsOptions:o,artworkUseCase:1,offerEnvironment:hN,offerStyle:tN,canDisplayArcadeOfferButton:!0,shouldHideArcadeHeader:s,isSubtitleHidden:i&&!s},c=this.editorialSplashVideoWithTopShelfStill(e,t)
if(!c||!c.preview)return null
const l=xi(e,t,a)
if(!l)return null
const f=this.clickActionForVideoCard(e,t,e.host.platform,o,n.clientIdentifierOverride)
if(!f)return null
const d=new oM
d.video=c,d.lockup=l,d.overlayStyle=hN,d.clickAction=f
const p=Ke(e,t,o)
return d.flowPreviewActionsConfiguration=kt(e,t,!0,n.clientIdentifierOverride,d.clickAction,o,p),cn(0,d,fn(e,t,l.title,o)),d})}editorialSplashVideoWithTopShelfStill(e,t){return $f.context("editorialSplashVideoWithTopShelfStill",()=>{let n=null
const r=Ae(e,t,xp)
return s(r)&&(n=ta(e,r,{withJoeColorPlaceholder:!0,useCase:22,cropCode:"sr"})),Ca(e,t,n)})}clickActionForVideoCard(e,t,n,r,o){const s=qi(e,t,Ke(e,t,r),o)
if(n===NO){const n=new QL(t.id,gN)
Qe(e,n,{actionType:AC,id:t.id,contextualAdamId:t.id,anonymizationOptions:r.anonymizationOptions,pageInformation:r.pageInformation,locationTracker:r.locationTracker})
const o=new XL(t.id,s)
return o.openAction=n,o.cancelAction=s,o}return s}maximumNumberOfRecentGamesToRequest(){return 200}maximumNumberOfRecentGamesToShow(){return 10}gameCategoryFilter(e){return e===Lv?PP:e}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){return{...n,badges:{gameCenter:{}},idType:fk,title:e.loc.string(wh)}}}class nV extends YG{constructor(){super("GroupingGameCenterPopularWithYourFriendsController"),this.batchGroupKey=lk,this.supportedFeaturedContentIds=new Set([495])}shelfRoute(e){return[...super.shelfRoute(e),{protocol:RF,path:`/${MF}/${LF}/{token}`,query:[x$]}]}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:[]}}async secondaryShelfDataForShelfUrl(e,t,n){const r=n[qD],o=JSON.parse(r),s=e.gameCenter.fetchGamesPopularWithFriends(this.gameCategoryFilter(o.gamesFilter),30)
return await s.then(async t=>{const n=t.map(e=>this.gameplayHistoryFromData(e)).filter(t=>this.isCompatibleGameCenterPlatform(e,t.platformId)).map(e=>e.adamId)
if(0===n.length){const e={shelfContents:[]}
return await Promise.resolve(e)}const r=new xM(e).forType(kN).withIds(n.slice(0,100))
return xr(e,r),await lr(e,r,{}).then(e=>({shelfContents:e.data,responseTimingValues:e[qf.timingValues]}))})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}_createShelf(e,t,n,r){return t.isFirstRender?this.pendingPopularWithFriendsShelfForGrouping(e,n,t):this.popularWithFriendsShelfForGrouping(e,n,t)}pendingPopularWithFriendsShelfForGrouping(e,t,n){const r=this.popularWithFriendsShelfForGrouping(e,t,n),o=Ox.from(Nr(n))
return r.url=o.param(x$,SD).build(),r}popularWithFriendsShelfForGrouping(e,t,n){const r=this.popularWithFriendsShelf(e,t.shelfContents,n)
return r.mergeWhenFetched=!0,r.batchGroup=this.batchGroupKey,r.eyebrow=e.loc.uppercased(e.loc.string(TC)),r.eyebrowArtwork=Ve(e,DO,16,16),r.subtitle=n.subtitle,r.title=n.title,r.isHidden=0===r.items.length,r}popularWithFriendsShelf(e,t,n){const r=n.shelfStyle||fD,o=new CM(r)
o.isHorizontal=!0
const i=[]
for(let o=0;o<t.length;o++){const a=t[o],c={metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:D(a),anonymizationOptions:{anonymizationString:`"GAME"${o+1}`}},artworkUseCase:ea(0,r),canDisplayArcadeOfferButton:Ha(0,r),shouldHideArcadeHeader:e.featureFlags.isEnabled(cb)&&n.isArcadePage,shouldShowFriendsPlayingShowcase:!0},u=Se(e,a,Tb)
if(G(a,HD)||!u)continue
const l=xi(e,a,c)
s(l)&&(i.push(l),dc(c.metricsOptions.locationTracker))}let a
switch(e.client.deviceType){case CN:a=2
break
case EN:case $N:case"tv":a=6
break
default:a=0}if(i.length<a)return o.isHidden=!0,o
if(o.items=i.slice(0,12),o.isHidden=!1,o.batchGroup=lk,i.length>12){const t=new CM(fD)
t.items=i,t.rowsPerColumn=1
const r=new DM([t])
r.title=n.title
const s=new VL(yN)
s.title=e.loc.string(Sk),s.pageData=r,et(e,s,null,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker}),o.seeAllAction=s}return o}isCompatibleGameCenterPlatform(e,t){return 1===t}gameplayHistoryFromData(e){const t=l(e,Xk),n=f(e,"platformId"),r=u(e,IP),o=this.gameplayHistoryRecordFromData(c(e,"records"))
return new pL(t,n,r,o)}gameplayHistoryRecordFromData(e){return e.map(e=>{const t=l(e,"playerId"),n=f(e,"timestamp")
return new hL(t,n)})}gameCategoryFilter(e){return e===Lv?PP:e}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){return{...n,badges:{gameCenter:{}},idType:fk}}}class rV extends YG{constructor(){super("GroupingGameCenterReengagementShelfController"),this.batchGroupKey=lk,this.supportedFeaturedContentIds=new Set([494])}shelfRoute(e){return[...super.shelfRoute(e),{protocol:RF,path:`/${MF}/${LF}/{token}`,query:[U$]}]}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:[],achievementData:null,achievementSummaryData:null}}async secondaryShelfDataForShelfUrl(e,t,n){return await e.gameCenter.fetchRengagementDataForLocalPlayer().then(async t=>{const n=l(t,Xk),r=g(t[hh]),s=g(t.achievementSummary)
if(o(n)){const e={shelfContents:[],responseTimingValues:null,achievementData:null,achievementSummaryData:null}
return await Promise.resolve(e)}const i=new xM(e).forType(kN).withIds([n])
return xr(e,i),await lr(e,i,{}).then(e=>({shelfContents:e.data,responseTimingValues:e[qf.timingValues],achievementData:r,achievementSummaryData:s}))})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}_createShelf(e,t,n,r){return t.isFirstRender?this.pendingGameCenterReengagementShelf(e,n,t):this.gameCenterReengagementShelf(e,n,t)}pendingGameCenterReengagementShelf(e,t,n){const r=this.gameCenterReengagementShelf(e,t,n)
if(!r)return null
const o=Ox.from(Nr(n))
return r.url=o.param(U$,SD).build(),r.batchGroup=this.batchGroupKey,r}gameCenterReengagementShelf(e,t,n){return $f.context("gameCenterReengagementShelf",()=>{if(!i(t.shelfContents))return null
const r=new CM("gameCenterReengagement")
r.isHorizontal=!1,r.mergeWhenFetched=!1,r.batchGroup=this.batchGroupKey
const o={id:n.id,kind:null,softwareType:null,targetType:YD,title:mh,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,idType:fk,fcKind:n.featuredContentId,badges:{gameCenter:{}}},s=_a(e,t.shelfContents[0],20)
let a=F("componentBackground"),c=null
i(s)&&(c=s.preview,a=c.backgroundColor)
const u={lockupOptions:{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},offerStyle:tN,artworkUseCase:ea(0,uN),isSubtitleHidden:!0}}
ic(o,o.title)
const l=Wi(e,t.shelfContents,u)[0]
cc(n.metricsLocationTracker)
let f=null
i(l)&&(f=new TF(l.bundleId),f.title=mh,Qe(e,f,o))
const d=e.loc.string("GAME_CENTER_REENGAGEMENT_BADGE_GAMECENTER"),p=this.achievementFromData(e,t.achievementData),h=this.achievementCountsFromData(e,t.achievementSummaryData),w=this.shelfMetadataForAchievement(e,p,h),g=new vM("gamecenter.fill",d,w.title,w.subtitle,p,l,a,c,f)
return r.items=[g],cn(0,g,o),r})}achievementStatusFromData(e,t){const n=l(t,ck),r=new fL(n)
return r.percent=f(t,"percent"),r.date=l(t,LO),r.artwork=new JN(l(t,"artwork.template"),f(t,"artwork.width"),f(t,"artwork.height"),[]),r}achievementFromData(e,t){const n=l(t,"id"),r=l(t,KR),o=l(t,Gb),s=this.achievementStatusFromData(e,d(t,"status"))
return new dL(n,r,o,s)}achievementCountsFromData(e,t){return{completed:f(t,"completedAchievements"),total:f(t,"totalAchievements")}}shelfMetadataForAchievement(e,t,n){if(!s(t))return{title:"",subtitle:null}
if(0===n.completed)return{title:e.loc.string("GAME_CENTER_REENGAGEMENT_ACHIEVEMENT_FIRST_TITLE"),subtitle:e.loc.string("GAME_CENTER_REENGAGEMENT_ACHIEVEMENT_FIRST_SUBTITLE")}
switch(t.status.type){case yh:case"hidden":case Th:return{title:e.loc.string("GAME_CENTER_REENGAGEMENT_ACHIEVEMENT_KEEPPLAYING_TITLE"),subtitle:e.loc.string("GAME_CENTER_REENGAGEMENT_ACHIEVEMENT_KEEPPLAYING_SUBTITLE")}
case Ah:return{title:e.loc.string("GAME_CENTER_REENGAGEMENT_ACHIEVEMENT_COMPLETEDCOUNT_TITLE"),subtitle:e.loc.stringWithCounts("GAME_CENTER_REENGAGEMENT_ACHIEVEMENT_COMPLETEDCOUNT_SUBTITLE",[n.completed,n.total])}
default:return{title:"",subtitle:null}}}}class oV extends YG{constructor(){super("GroupingGameCenterSuggestedFriendsController"),this.batchGroupKey=lk,this.supportedFeaturedContentIds=new Set([496])}shelfRoute(e){return[...super.shelfRoute(e),{protocol:RF,path:`/${MF}/${LF}/{token}`,query:[M$]}]}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:[],suggestedFriends:[]}}async secondaryShelfDataForShelfUrl(e,t,n){return await e.gameCenter.fetchSuggestedFriends(10).then(e=>({shelfContents:[],suggestedFriends:e}))}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}_createShelf(e,t,n,r){return t.isFirstRender?this.pendingSuggestedFriendsShelfForGrouping(e,t):this.suggestedFriendsShelfForGrouping(e,n,t)}pendingSuggestedFriendsShelfForGrouping(e,t){if(e.client.deviceType!==CN&&e.client.deviceType!==EN)return null
const n=this.suggestedFriendsShelfForGrouping(e,{shelfContents:[],suggestedFriends:[]},t),r=Ox.from(Nr(t))
return n.url=r.param(M$,SD).build(),n.isHidden=0===n.items.length,n.batchGroup=this.batchGroupKey,n}suggestedFriendsShelfForGrouping(e,t,n){if(e.client.deviceType!==CN&&e.client.deviceType!==EN)return null
const r=this.suggestedFriendsShelf(e,t.suggestedFriends,n)
return r.eyebrow=e.loc.uppercased(e.loc.string(TC)),r.eyebrowArtwork=Ve(e,DO,16,16),r.subtitle=n.subtitle,r.title=n.title,r.batchGroup=this.batchGroupKey,r.isHidden=0===r.items.length,r}suggestedFriendsShelf(e,t,n){if(e.client.deviceType!==CN&&e.client.deviceType!==EN)return null
const r=new CM("smallContactCard")
r.isHorizontal=!0,r.mergeWhenFetched=!0,r.batchGroup=lk
const o=[]
for(let r=0;r<t.length;r++){const s=`FRIEND_SUGGESTION${r+1}`,i=t[r]
i.buttonText=e.loc.string("INVITE"),i.subtitle=e.loc.string("FROM_CONTACTS")
const a={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,id:s,anonymizationOptions:{anonymizationString:s}}
i.buttonAction=new AF(i.contactId),Qe(e,i.buttonAction,{...a,actionType:"inviteFriend"}),i.removeButtonAction=new EF(i.contactId),Qe(e,i.removeButtonAction,{...a,actionType:"removeFriendSuggestion"}),cn(0,i,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,title:s,id:s,kind:"friendSuggestion",softwareType:null,anonymizationOptions:{anonymizationString:s}}),o.push(i),dc(n.metricsLocationTracker)}return r.items=o,r.isHidden=0===r.items.length,r}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){return{...n,badges:{gameCenter:{}},idType:fk}}}class sV extends jN{}class iV extends jN{}class aV extends jN{constructor(){super(...arguments),this.items=[]}}class cV extends HN{constructor(e,t,n){super(),this.card=e,this.shelves=t,this.shareAction=n,this.isIncomplete=!1,this.pageMetrics=new ML,this.pageRenderMetrics={}}}class uV extends jN{constructor(e,t,n,r,o,s,i){super(),this.details=e,this.displayProperties=n,this.offerButtonAction=r,this.buttonCallToAction=o,this.offerDisplayProperties=t,this.artwork=s,this.video=i,this.detailsDisplayProperties={wantsBlur:n.wantsBlur,position:n.detailsPosition},this.backgroundColor=n.backgroundColor}}const lV=F(P_),fV=F(P_),dV=F(P_)
class pV{constructor(){this.index=0,this.todayShelfRecoMetricsData={},this.hasFocusableElements=!1,this.hasNonFocusableElements=!1,this.isResilientDeepLink=!1,this.allowUnpublishedAppEventPreviews=!1}}const hV=[Em,Am,Pm,rS]
class wV extends YG{constructor(){super("GroupingHeroCarouselShelfController"),this.supportedFeaturedContentIds=new Set([480])}_supports(e,t,n,r){return!!super._supports(e,t,n,r)&&U(t,jD)===VA}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:we(e,kN)}}async secondaryShelfDataForShelfUrl(e,t,n){return await YG.secondaryGroupingShelfDataForShelfUrl(e,t,n)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}shouldImpressShelf(){return!1}_createShelf(e,t,n,s){const a=new CM(Fv),c=t.featuredContentData,u={targetType:KD,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:D(c)},l=new aV
l.autoScrollConfiguration={isAutoScrollEnabled:e.bag.heroCarouselAutoScrollDuration>0,autoScrollInterval:e.bag.heroCarouselAutoScrollDuration}
const f=fn(e,c,Fv,u)
f.autoAdvanceInterval=l.autoScrollConfiguration.autoScrollInterval,cn(0,a,f),ic(f,Fv)
for(const s of n.shelfContents){if(r(s.attributes)||kr(t)){t.isDeferring=!0,t.remainingItems.push(s)
continue}const n=Wa(e,s)
if(So(0,s)&&!H(n)){t.isDeferring=!0,t.remainingItems.push(s),t.relationshipToFetch=yD
continue}const i={targetType:SP,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:D(s)},a=go(e,s),c=wo(e,s)
if(o(a.video)&&o(c.artwork))continue
const u=new iV,f=xo(0,s),d=jo(e,s),p=fn(e,s,d,i)
p.isPreorder=Se(e,f,HD),cn(0,u,p),ic(p,d)
const h=a.artworkData||c.artworkData,w=a.backgroundColor||c.backgroundColor,g={metricsPageInformation:t.metricsPageInformation,metricsLocationTracker:t.metricsLocationTracker,canDisplayArcadeOfferButton:Ha(0,t.shelfStyle),lockupArtworkUseCase:ea(0,t.shelfStyle),isContainedInPreorderExclusiveShelf:497===t.featuredContentId}
u.overlay=Vo(e,s,g),u.backgroundColor=w,u.titleEffect=_o(0,h),u.artwork=c.artwork,u.video=a.video
const m=vo(e,s)
Qe(e,m,{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:D(s),targetType:SP,id:s.id}),u.clickAction=m,l.items.push(u),cc(p.locationTracker),dc(p.locationTracker)}return i(l.items)&&(a.items=[l],s.pageTitleEffect=l.items[0].titleEffect),a.url=Lr(a,t),cc(f.locationTracker),dc(f.locationTracker),a}}class gV extends YG{constructor(){super("GroupingHorizontalCardShelfController"),this.supportedFeaturedContentIds=new Set([475])}_supports(e,t,n,r){return!!super._supports(e,t,n,r)&&jr(0,U(t,jD))!==yP}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:we(e,kN)}}async secondaryShelfDataForShelfUrl(e,t,n){return await YG.secondaryGroupingShelfDataForShelfUrl(e,t,n)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o={...n},s=U(t,jD)
return o.shelfStyle=jr(0,s),o}_createShelf(e,t,n,r){const o={metricsLocationTracker:t.metricsLocationTracker,metricsPageInformation:t.metricsPageInformation}
let s
if(t.shelfStyle===Mk)s=t.shelfStyle
else switch(e.client.deviceType){case $N:case"tv":s=t.shelfStyle
break
case xN:s=kR
break
default:s=tR}const i=Kc(e,n.shelfContents,s,t.title,t.subtitle,o,function(e){return t.remainingItems.push(e),!1})
return i.contentType===Mk&&Array.isArray(i.items)&&(i.items=i.items.filter(e=>!(e instanceof uU)||Yc(0,e.media.kind,Mk))),i.url=Lr(i,t),i.isHorizontal=!0,i}}class mV extends YG{constructor(e=null){super(e||"GroupingLargeBreakoutShelfController"),this.supportedFeaturedContentIds=new Set([480])}_supports(e,t,n,r){return!!super._supports(e,t,n,r)&&U(t,jD)===rb}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:we(e,kN)}}async secondaryShelfDataForShelfUrl(e,t,n){return await YG.secondaryGroupingShelfDataForShelfUrl(e,t,n)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}shouldImpressShelf(){return!1}isInHeroPosition(){return!1}_createShelf(e,t,n,s){const a=i(s)&&o(s.pageTitleEffect)&&0===s.shelves.length,c=i(n.shelfContents)?[n.shelfContents[0]]:[],u=[]
for(const n of c){if(r(n.attributes)||kr(t)){t.isDeferring=!0,t.remainingItems.push(n)
continue}const i={targetType:this.isInHeroPosition()?"heroBreakout":SP,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:D(n)},c=go(e,n),l=wo(e,n),f=c.artworkData||l.artworkData,d=mV.createLargeBreakout(e,n,t,this.isInHeroPosition(),a,i)
o(d)||(u.push(d),a&&(s.pageTitleEffect=_o(0,f)))}const l=new CM(Eh)
return l.isHorizontal=!1,l.items=u,l.url=Lr(l,t),0===s.shelves.length&&(l.presentationHints={isFirstShelf:!0}),l}static createLargeBreakout(e,t,n,r,s,a){const c=Wa(e,t)
if(So(0,t)&&!H(c))return n.isDeferring=!0,n.remainingItems.push(t),n.relationshipToFetch=yD,null
const u=go(e,t),l=wo(e,t)
if(o(u.video)&&o(l.artwork))return null
const f=u.backgroundColor||l.backgroundColor,d=r?null:U(t,"breakoutBadge")
let p
const h=U(t,RD)
p=Se(e,t,mC)?e.loc.uppercased(ja(e,c,h)):h
let w={type:uD}
i(p)&&(w={type:yk,title:p})
const g=xa(e,t,FN)||Pe(e,c,FN),m=xa(e,t,aD)||Pe(e,c,uk),y=mo(e,t,!0,0,!1),T=To(e,t,0,!1),A=new AM(g,m,w,null,y,Ao(0,T,t)),E=new EM(A,{position:T||JD},d,l.artwork,u.video,f),P=fn(e,t,E.details.title,a),I=Se(e,xo(0,t),HD)
P.isPreorder=I,cn(0,E,P),ic(P,E.details.title)
const S=vo(e,t),v={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:D(t),targetType:vN,id:t.id}
return Qe(e,S,v),E.details.callToActionButtonAction=S,E.clickAction=S,cc(a.locationTracker),E.flowPreviewActionsConfiguration=kt(e,t,!0,n.clientIdentifierOverride,S,a,v),E}}class yV extends YG{constructor(){super("GroupingLinkShelfController"),this.supportedFeaturedContentIds=new Set([437,265])}initialShelfDataFromGroupingMediaApiData(e){let t=we(e,bD)
return o(t)&&(t=M(e,FO)),{shelfContents:t}}async secondaryShelfDataForShelfUrl(e,t,n){return await YG.secondaryGroupingShelfDataForShelfUrl(e,t,n)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o={...n,shouldHideShelf:G(t,"hide"),areContentLinks:i(we(t,bD))}
return o.clientIdentifierOverride=ho(0,t),o}_createShelf(e,t,n,r){if(t.shouldHideShelf)return null
const s=[]
for(let r=0;r<n.shelfContents.length;r++){const i=n.shelfContents[r],a={targetType:nN,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker}
t.areContentLinks&&(a.recoMetricsData=D(i))
let c=null
if(t.isSearchLandingPage){const n=this.trendingSearchLinkFromData(e,i,t.metricsLocationTracker)
cn(0,n.action,{...a,kind:nN,softwareType:null,title:n.action.title,id:`${r}`,idType:WD}),c=n}else{const n=Gr(e,i,t,!1,null,a,null)
if(o(n)||o(n.action.title))continue
c=n.action
const r=Wr(0,i)
r&&cn(0,c,{...a,kind:nN,softwareType:null,title:c.title,id:r})}o(c)||(s.push(c),dc(t.metricsLocationTracker))}if(o(s))return null
if(t.isSearchLandingPage&&e.client.isPhone&&s.length>=6)for(const t of s)t instanceof wF&&(t.action.artwork=Ve(e,vP))
const i=new CM(qk)
return i.isHorizontal=!1,i.items=s,i.title=t.title,i.subtitle=t.subtitle,i.presentationHints={isWidthConstrained:!0},i.url=Lr(i,t),t.isSearchLandingPage&&(e.client.isPhone||e.client.isPad)&&(i.contentsMetadata={type:_P,numberOfColumns:s.length>=6?2:1}),i}trendingSearchLinkFromData(e,t,n){const r=l(t,RD)
if(o(r))return null
const s=new aG(r,r,null,$v)
return nt(e,s,vN,n),dc(n),new wF(s)}}const TV={shelfIdentifier:"first",slot:0}
class AV extends HN{constructor(e,t,n,r,o){super(),this.instanceId=e,this.adamId=t,this.advertType=n,this.invocation=r,this.reportingDestination=o}}class EV{constructor(e,t=!0){this.promise=e,this.isRequired=t}}class PV extends Error{constructor(e){super(function(e){let t=""
for(const n of e)n instanceof Error?t+=n.message:t+=JSON.stringify(n)
return t}(e)),this.reasons=e}}class IV{constructor(e){this.builderClass=e}handleShelf(e,t,n,r,o,s){s(new Error(`${this.builderClass} does not implement handleShelf`))}handlePagination(e,t,n,r,o,s,i){i(new Error(`${this.builderClass} does not implement handlePagination`))}shelfRoute(e){return[{protocol:RF,path:`${this.shelfPath}{data}`}]}paginationRoute(e){return[{protocol:RF,path:`${this.paginationPath}`}]}shelfUrl(e){return`${RF}:${this.shelfPath}${encodeURIComponent(JSON.stringify(e))}`}get shelfPath(){return`/${this.builderClass}/${LF}/`}get paginationUrl(){return`${RF}:${this.paginationPath}`}get paginationPath(){return`/${this.builderClass}/${$F}/`}static createFlowAction(e,t,n){const r=new VL(t)
return r.pageUrl=n.build(),r.pageData=e,r}}class SV extends IV{defaultAttributes(e){return[]}defaultTab(e){return null}prepareRequest(e,t,n,r){t.includingAdditionalPlatforms(this.defaultPlatforms(e)),t.includingAttributes(this.defaultAttributes(e)),t.usingCustomAttributes(ne(e))}defaultAction(e,t,n,r){return SV.createFlowAction(t,this.pageType(),r)}handlePage(e,t,n,r,o,i,a){$f.context(`${this.builderClass}.handlePage`,()=>{let r
const c=t.build()
r=mr(e,t)?new xM(e,c):this.generatePageRequest(e,t,n),r||a(new Error(`Could not construct media API request for: ${t}`)),this.prepareRequest(e,r,t,n),r.attributingTo(c)
const u=this.generateAdditionalPageRequirements(e,t,n),l=Object.keys(u),f=l.map(e=>u[e]),d=new EV(lr(e,r)),p=[d,...f]
d.promise.then(t=>{ss(e,e.user.dsid,t)}),async function(e){const t=new Array(e.length)
let n=e.length
return await new Promise((r,o)=>{const i=function(){if(0===n){const e=t.map(e=>e.status===fv?e.reason:null).filter(s)
0===e.length?r(t):1===t.length&&1===e.length?o(e[0]):o(new PV(e))}}
for(let r=0;r<e.length;r++){const o=r
e[o].promise.then(r=>{t[o]={status:kE,value:r,isRequired:e[o].isRequired},n--,i()},r=>{t[o]={status:fv,reason:r,isRequired:e[o].isRequired},n--,i()})}})}(p).then(r=>{let s=null
switch(r[0].status){case kE:s=r[0].value
break
case fv:const e=r[0].reason
this.handlePageError(e,i,a,t,n)}const c=r.slice(1),u={}
for(let e=0;e<c.length;e++){const r=l[e],o=c[e]
switch(o.status){case kE:u[r]=o.value
break
case fv:u[r]=null,o.isRequired&&this.handlePageError(o.reason,i,a,t,n)}}return this.supportsDataAugmenting()?this.augmentData(e,t,n,s).then(t=>this.renderPage(e,t.originalData,n,u,t.additionalData,o)):this.renderPage(e,s,n,u,null,o)}).then(r=>{const o=this.defaultTab(r),s=this.defaultAction(e,r,n,t),i=n[Z$]
if(t.removeParam(Z$),null===o||i)return s
{const e=new HL(o)
return e.actions=[s],e}}).then(i,e=>{this.handlePageError(e,i,a,t,n)})})}handlePageError(e,t,n,r,o){n(e)}handleShelf(e,t,n,r,o,s){$f.context(`${this.builderClass}.handleShelf`,()=>{let r
const i=t.build()
r=mr(e,t)?new xM(e,i):this.generateShelfRequest(e,t,n),r?(this.prepareRequest(e,r,t,n),r.attributingTo(t.build()),lr(e,r).then(t=>{const r=this.renderShelf(e,t,n)
return this.shelfRequiresAdditionalModification(r,n)?this.performAdditionalShelfModifications(e,r,n):r}).then(o,e=>{this.handleShelfError(e,o,s,n)})):s(new Error(`Could not construct media API request for: ${t}`))})}async performAdditionalShelfModifications(e,t,n){return await Promise.resolve(t)}shelfRequiresAdditionalModification(e,t){return!1}handleShelfError(e,t,n,r){n(e)}handlePagination(e,t,n,r,o,s,i){$f.context(`${this.builderClass}.handlePagination`,()=>{let r
const a=t.build()
r=mr(e,t)?new xM(e,a):this.generatePaginationRequest(e,t,n,o),r?(this.prepareRequest(e,r,t,n),r.attributingTo(t.build()),lr(e,r).then(t=>this.renderPaginatedPage(e,t,o)).then(s,e=>{this.handlePaginationError(e,s,i,n,o)})):i(new Error(`Could not construct media API request for: ${t}`))})}handlePaginationError(e,t,n,r,o){n(e)}generateAdditionalPageRequirements(e,t,n){return{}}generateShelfRequest(e,t,n){throw new Error(`generateShelfRequest is not supported on: ${this.builderClass}`)}generatePaginationRequest(e,t,n,r){throw new Error(`generatePaginationRequest is not supported on: ${this.builderClass}`)}supportsDataAugmenting(){return!1}async augmentData(e,t,n,r){const o={url:t,parameters:n}
return await Co(e,r,this.additionalDataKeysNeededForData,this.fetchAdditionalDataForKey,o)}additionalDataKeysNeededForData(e,t,n){return null}fetchAdditionalDataForKey(e,t){return null}renderShelf(e,t,n){throw new Error(`renderShelf is not supported on: ${this.builderClass}`)}renderPaginatedPage(e,t,n){throw new Error(`renderPaginatedPage is not supported on: ${this.builderClass}`)}}const vV=fD
class _V{constructor(){this.profile=VD,this.maxPerPage=20}}class CV extends SV{defaultAttributes(e){const t=[cN,sN,zk,oD]
return e.appleSilicon.isSupportEnabled&&t.push(PD),t}defaultPlatforms(e){return v(e)}pageType(){return yN}generatePaginationRequest(e,t,n,r){return new xM(e,r.remainingContent)}renderPaginatedPage(e,t,n){const r=n
return this.pageWithContent(e,t,r)}pageWithContent(e,t,n,r=!0){return $f.context("pageWithContent",()=>{const o=n.preferredShelfContentType||vV,s=new CM(o),i={id:null,kind:null,softwareType:null,targetType:KD,title:n.title,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,idType:fk,recoMetricsData:D(t)}
cn(0,s,i),ic(i,n.title),s.isHorizontal=!1,s.shouldFilterApps=n.shouldFilter
const a=b(t)
r&&(n.remainingContent=[]),s.items=Wi(e,a,{contentUnavailable:(e,t)=>(r&&(n.remainingContent=Be(0,a,t)),!0),lockupOptions:{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,artworkUseCase:ea(0,o)}})
const c=new DM([s])
return n.remainingContent.length&&(c.nextPage=n),c})}}class OV extends CV{requestWithFilter(e,t,n){return new xM(e).forType(NN).includingMacOSCompatibleIOSAppsWhenSupported(!0).withFilter(t,n)}renderPage(e,t,n,r){return $f.context(rk,()=>{const r=new _V
r.url=this.paginationUrl,r.metricsPageInformation=this.pageInformation(e,t,n),r.shouldFilter=!1,r.metricsLocationTracker={rootPosition:0,locationStack:[]}
const o=this.pageWithContent(e,t,r)
return Mn(e,o,r.metricsPageInformation),o})}}class bV extends YG{constructor(e=null){super(e||"GroupingLockupShelfController"),this.supportedFeaturedContentIds=new Set([...$G,...BG])}initialShelfDataFromGroupingMediaApiData(e){const t=pe(e,kN)
let n=t?t.data:null
return n&&0!==n.length||(n=we(e,bD)),{shelfContents:n}}async secondaryShelfDataForShelfUrl(e,t,n){return await YG.secondaryGroupingShelfDataForShelfUrl(e,t,n)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return cs(e,t,n,r)}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){const r={...n}
return r.displayStyle=t.shelfStyle,r}_createShelf(e,t,n,r){return us(e,t,n,r)}}class RV extends YG{constructor(){super("GroupingPersonalizedLockupShelfController"),this.supportedFeaturedContentIds=UG}shelfRoute(e){return so(this.supportedFeaturedContentIds,["isOnDeviceRecommendationsShelf?","onDeviceRecommendationsUseCase?"])}initialShelfDataFromGroupingMediaApiData(e){const t=pe(e,kN)
let n=t?t.data:null
return n&&0!==n.length||(n=we(e,bD)),{shelfContents:n||[],containsODPShelfContents:!1,recoMetrics:D(t),candidates:null,isHiddenShelf:!1,responseTimingValues:null}}async secondaryShelfDataForShelfUrl(e,t,n){const r=n[qD],o=JSON.parse(r),s=n.onDeviceRecommendationsUseCase
return i(s)?await Yr(e,s,MN).then(e=>({shelfContents:b(e.dataContainer),containsODPShelfContents:!0,recoMetrics:e.recoMetrics,candidates:e.candidates,isHiddenShelf:!1})).catch(r=>r instanceof HG?RV.fetchODPFallbackContent(e,t,n).catch(e=>RV.makeHiddenShelfData(o)):RV.makeHiddenShelfData(o)):i(o.recommendationsHref)?await YG.secondaryGroupingShelfMediaApiData(e,t,n).then(e=>{const t=O(e),n=this.initialShelfDataFromGroupingMediaApiData(t)
return t.responseTimingValues=e[qf.timingValues],n.shelfTitle=U(t,FN),n}):await YG.secondaryGroupingShelfMediaApiData(e,t,n).then(e=>{const t={shelfContents:b(e)||[],containsODPShelfContents:!1,recoMetrics:null,candidates:null,isHiddenShelf:!1,responseTimingValues:e[qf.timingValues]}
return t.shelfTitle=o.title,t})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o=cs(e,t,n,r)
return this.addPersonalizationValuesToShelfToken(e,o,t,r),o}_createShelf(e,t,n,r){if(!t.isValidRecommendationsShelf)return null
let a=null
if(n.containsODPShelfContents){a=this.personalizedShelf(e,n,t,r)
const o=(new Ox).set(Ek,RF).path("onDeviceRecommendations").param(B$,t.onDeviceRecommendationsUseCase).param(tx,JSON.stringify(t)).build(),s=new VL(yN,o)
s.title=e.loc.string(Sk),s.pageData=this.odpSeeAllPage(e,t.title,vV),a.seeAllAction=s,a.mergeWhenFetched=!1}else n.isHiddenShelf?a=RV.makeHiddenShelf(t):s(t.recommendationsHref)?(a=this.personalizedShelf(e,n,t,r),a.url=this.addOnDeviceQueryParamsIfNecessary(e,a.url,t)):(a=us(e,t,n,r),a.url=this.addOnDeviceQueryParamsIfNecessary(e,a.url,t))
return o(a.title)&&i(n.shelfTitle)&&(a.title=n.shelfTitle),a}personalizedShelf(e,t,n,r){const o=lc(n.metricsLocationTracker)
o&&o.fcKind===n.featuredContentId&&cc(n.metricsLocationTracker)
const s={id:n.id,kind:null,softwareType:null,targetType:KD,title:n.title,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,idType:fk,fcKind:n.featuredContentId,recoMetricsData:t.recoMetrics,displayStyle:n.shelfStyle}
ic(s,n.title)
const i=us(e,n,t,r)
return cc(n.metricsLocationTracker),cn(0,i,s),i}addPersonalizationValuesToShelfToken(e,t,n,r){const o=476===t.featuredContentId
if(!r.hasAuthenticatedUser&&!t.isSearchLandingPage&&!o)return
const s=U(n,bP)
if(i(s))return t.onDeviceRecommendationsUseCase=s,t.recommendationsHref=n.href,void(t.isValidRecommendationsShelf=!0)
const a=i(we(n,kN)),c=!G(n,"noPersonalizationAvailable")
!a&&c?(t.recommendationsHref=n.href,t.isValidRecommendationsShelf=!0):t.isValidRecommendationsShelf=a}addOnDeviceQueryParamsIfNecessary(e,t,n){if(o(t))return null
if(i(n.onDeviceRecommendationsUseCase)){const e=new Ox(t)
return e.param("isOnDeviceRecommendationsShelf",SD),e.param(B$,n.onDeviceRecommendationsUseCase),e.build()}return t}odpSeeAllPage(e,t,n){const r=new CM(n||vV)
r.isHorizontal=!1,r.items=Ih
const o=new DM([r])
return o.isIncomplete=!0,o.title=t,o}static async fetchODPFallbackContent(e,t,n){return await new Promise((r,o)=>{const s=$r(e,0,n)
if(!s){const e=`OnDeviceRecommendationsShelfController: Could not construct media API request for: ${t}`
$f.unexpectedType(Uk,e,null),o(new Error(e))}xr(e,s),s.attributingTo(t.build()),lr(e,s).then(e=>{const t=pe(O(e),kN),n=D(t),o={shelfContents:b(t),containsODPShelfContents:!1,recoMetrics:n,candidates:null,responseTimingValues:e[qf.timingValues]}
r(o)}).catch(e=>{const n=`OnDeviceRecommendationsShelfController: Failed to fetch fallback shelf contents: ${t}`
$f.unexpectedType(Uk,n,null),o(e)})})}static makeHiddenShelfData(e){return{shelfContents:[],containsODPShelfContents:!1,recoMetrics:null,candidates:null,isHiddenShelf:!0}}static makeHiddenShelf(e){const t=new CM(e.shelfStyle)
return t.isHidden=!0,t}}class kV extends YG{constructor(){super("GroupingSmallBreakoutShelfController"),this.supportedFeaturedContentIds=new Set([480])}_supports(e,t,n,r){return!!super._supports(e,t,n,r)&&U(t,jD)===EC}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:we(e,kN)}}async secondaryShelfDataForShelfUrl(e,t,n){return await YG.secondaryGroupingShelfDataForShelfUrl(e,t,n)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}shouldImpressShelf(){return!1}_createShelf(e,t,n,o){const s=[]
for(const o of n.shelfContents){if(r(o.attributes)||kr(t)){t.isDeferring=!0,t.remainingItems.push(o)
continue}const n=Wa(e,o)
if(So(0,o)&&!H(n)){t.isDeferring=!0,t.remainingItems.push(o),t.relationshipToFetch=yD
continue}const a={targetType:Sh,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:D(o)}
let c
const u=U(o,RD)
c=Se(e,o,mC)?e.loc.uppercased(ja(e,n,u)):u
let f={type:uD}
i(c)&&(f={type:yk,title:c})
const d=xa(e,o,FN)||Pe(e,n,FN),p=xa(e,o,aD)||Pe(e,n,uk),h=sa(e,n,{useCase:5,withJoeColorPlaceholder:!0}),w=N(l(Z(n,_e(e,o),lN),vh))||h.backgroundColor,g=new AM(d,p,f,null,yo(0,w),null),m=new PM(g,h,w),y=fn(e,o,m.details.title,a),T=Se(e,xo(0,o),HD)
y.isPreorder=T,cn(0,m,y),ic(y,m.details.title)
const A=vo(e,o),E={pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:D(o),targetType:vN,id:o.id}
Qe(e,A,E),m.details.callToActionButtonAction=A,m.clickAction=A,cc(a.locationTracker),m.flowPreviewActionsConfiguration=kt(e,o,!0,null==t?void 0:t.clientIdentifierOverride,A,a,E),s.push(m)}const a=new CM(Sh)
return a.isHorizontal=!1,a.items=s,a.url=Lr(a,t),0===o.shelves.length&&(a.presentationHints={isFirstShelf:!0}),a}}const DV=[new zG,new JG,new KG,new ZG,new XG,new QG,new tV,new nV,new rV,new oV,new eV,new wV,new gV,new mV,new yV,new bV,new RV,new kV]
class NV extends HN{constructor(e,t,n,r,o,s){super(),this.bodyText=e,this.isDetailHeader=t,this.privacyTypes=n,this.bodyActions=r,this.supplementaryItems=o,this.seeDetailsAction=s}}class LV extends HN{constructor(e,t){super(),this.bodyText=e,this.action=t}}class FV extends HN{constructor(e,t,n){super(),this.bodyText=e,this.actions=t,this.privacyTypesCount=n}}class $V extends jN{constructor(e,t,n,r,o,s,i,a){super(),this.identifier=e,this.title=t,this.detail=n,this.artwork=r,this.style=o,this.purposes=s,this.categories=i,this.clickAction=a,this.wantsScrollFocus=!1}}class xV extends HN{constructor(e,t,n){super(),this.identifier=e,this.title=t,this.categories=n}}class MV extends HN{constructor(e,t,n,r,o=[]){super(),this.identifier=e,this.title=t,this.artwork=n,this.style=r,this.dataTypes=o,this.prefersSmallArtwork=!1}}const UV=["284417353","1464590764","314638464","284993479","1351056256"]
class BV{setShelfId(e,t){this.shelfId=e,this.index=t,DU.has(e)&&(this.section=new OU(MN,e))}}class GV{constructor(e,t){this.sequenceId=0,this.metricsPageInformation=e,this.locationTracker=t}addImpressionsToShelf(e,t,n){cn(0,t,{id:`${this.sequenceId}`,kind:null,softwareType:null,targetType:n,title:t.title,pageInformation:this.metricsPageInformation,locationTracker:this.locationTracker}),this.sequenceId++}getSequenceId(){return this.sequenceId}addImpressionsFieldsToSimilarItemsShelf(e,t,n,r){t&&(cn(0,t,{id:GV.similarItemsShelfId,kind:null,softwareType:null,targetType:n,title:t.title,pageInformation:this.metricsPageInformation,locationTracker:this.locationTracker,idType:r}),this.sequenceId++)}static resetLocationTrackerForSimilarItemsDuringDownloadShelf(e,t){const n=t.sourceLocationTracker
fc(n,0),lc(n).id=GV.similarItemsDuringDownloadShelfId}static addImpressionsFieldsToSimilarItemsDuringDownloadShelf(e,t,n){t&&cn(0,t,{id:GV.similarItemsDuringDownloadShelfId,kind:null,softwareType:null,targetType:GD,title:n.title,pageInformation:n.sourcePageInformation,locationTracker:n.sourceLocationTracker,idType:qO})}}GV.similarItemsShelfId=Wb,GV.similarItemsDuringDownloadShelfId=gE
const VV=[zs,Js,ks,function(e,t,n,r,o,s){if(Go(e,e.bag.gameControllerRecommendedRolloutRate)&&$s(e,t)){const n=o?"":e.loc.string("AppStore.ProductPage.Info.GameController.Title"),r=e.loc.string("AppStore.ProductPage.Info.GameController.Recommended"),s=U(t,Vk),a=e.loc.string("AppStore.ProductPage.Info.GameController.Recommended.Summary").replace(ig,s),c=[new Fx(a,null,null,null)]
let u
const l=e.bag.gameControllerLearnMoreEditorialItemId
return i(l)&&(u=new VL(FD),u.title=e.loc.string("AppStore.ProductPage.Info.GameController.Recommended.LearnMore"),u.pageUrl=`https://apps.apple.com/story/id${l}`),new Lx(n,c,r,u)}return null},Ds,function(e,t,n,r,o,s){if(G(t,"usesLocationBackgroundMode")){const t=o?"":e.loc.string("INFO_LIST_LOCATION_TITLE"),n=e.loc.string("INFO_LIST_LOCATION_DESCRIPTION"),r=new Fx(n)
return new Lx(t,[r])}return null},Us,Ls,Ks,function(e,t,n,r,o,s){const a=lt(e,t),c=ft(e,"product-page-info-section")
if(!a||!c)return null
const u=o?"":e.loc.string("AppStore.Annotations.ExternalPurchases.Title"),l=e.loc.string("YES")
let f
if(e.bag.externalPurchasesProductPageAnnotationUseAlternateCopy){const n=U(t,Vk)
f=i(n)?e.loc.string("AppStore.Annotations.ExternalPurchases.Expanded_NLD").replace("@@developerName@@",n):e.loc.string("AppStore.Annotations.ExternalPurchases.Expanded.NoDeveloper_NLD")}else f=e.loc.string("AppStore.Annotations.ExternalPurchases.Expanded")
const d=new Fx(f),p=e.loc.string("AppStore.Annotations.ExternalPurchases.Expanded.LearnMore"),h=dt(e,p,s.metricsPageInformation,s.locationTracker),w=new Lx(u,[d],l,h)
return w.shouldAlwaysPresentExpanded=!0,w},Ms],HV=[zs,ks,function(e,t,n,r,o,s){const i=Ee(e,t,db)
if(0===i.length)return null
const a=i[0]
let c=null
const u=l(a,j_)
u&&(c=e.loc.formatDate("d MMM YYYY",new Date(u)))
const f=l(a,Yg)
if(0===i.length)return null
let d
if(f&&c)d=e.loc.string("VERSION_STRING_WITH_RELEASE_DATE").replace(zg,f).replace("{date}",c)
else{if(!f)return null
d=f}const p=new Fx(d),h=o?"":e.loc.string("VERSION_STRING"),w=new Lx(h,[p])
return w&&!r?w:null},Js,Ms],jV=[Ds,Us,Ls],WV=[Ks],qV=[ri,ti,ui,ii,function(e,t,n,r){var o
return null!==(o=oi(e,t))&&void 0!==o?o:si(e,t)},ci],YV=[di,ai,ni,ri],zV=[di,ri,oi,function(e,t,n,r){if(!Se(e,t,Tb))return null
const o=e.loc.string("BADGE_FRIENDS_HEADING","Friends"),s={maxNumberOfAvatarsToDisplay:3,maxNumberOfFriendsBeforeTruncation:99,adamId:t.id}
return new CU("friendsPlaying","friendsPlaying",s,"standard",o,"",null,"",o,ID)},ni,ti,ui,ii,si,ci,function(e,t,n,o){if($e(e).isSystemAppFromData(t))return null
const i=Sa(e,t)
if(r(i)||r(i.fileSizeByDevice))return null
let a
if(a=e.props.enabled(Ov)&&s(i.maxEssentialInstallSizeInBytes)?i.fileSizeByDevice+i.maxEssentialInstallSizeInBytes:e.props.enabled(Lg)&&s(i.maxInstallSizeInBytes)?i.fileSizeByDevice+i.maxInstallSizeInBytes:i.fileSizeByDevice,a<=0)return null
const c=e.loc.fileSize(a).trim().split(/\s+/)
if(2!==c.length)return null
const u={paragraphText:c[0]},l=c[1],f=e.loc.string("BADGE_SIZE_HEADING")
return new CU(VR,h_,u,pN,f,l,null,null,l,mk)}]
class JV{constructor(e,t){this.period=e,this.type=t}isEqualTo(e){return e.period===this.period&&e.type===this.type}}const KV={D:"DAYS",W:"WEEKS",M:"MONTHS",Y:"YEARS"},ZV={FreeTrial:"FREE_TRIAL",PayUpFront:"PAID_UPFRONT",PayAsYouGo:"PAID_TRIAL"},XV={chartPositions:function(e,t,n){const r=Ae(e,t,CI)
if(o(r))return null
const s=ba(0,e.host.clientIdentifier)
if(o(s))return null
const i=d(r,s)
if(o(i))return null
const a=f(i,n_)
if(a>50)return null
const c=l(i,bg),u=new Kx("borderedTextLabel")
u.moduleType=CI
const p=(0,Uf.isSome)(n.searchAd)?e.bag.adsOverrideLanguage:null
return u.borderedText=e.loc.stringForPreferredLocale(e,"METADATA_RIBBON_CHART_POSITION",p,OI).replace(OI,e.loc.formattedCountForPreferredLocale(e,a,p)),u.labelText=c,u.secondaryViewPlacement=JD,u},genreDisplayName:function(e,t,n){const r=Ae(e,t,_I),s=Fi(e,t)
if(o(s)||o(r))return null
const i=new Kx(eS)
i.moduleType=Dh,i.labelText=s
const a=ta(e,r,{useCase:19})
return a.crop="sr",i.artwork=a,i},developerInfo:function(e,t,n){if(o(n.developerName))return null
{const t=new Kx(eS)
return t.moduleType="developerInfo",t.labelText=n.developerName,t.artwork=Ve(e,Rg),t}},editorialBadgeInfo:function(e,t,n){if(n.isEditorsChoice){const t=new Kx(Cb)
t.moduleType=Ab
const r=(0,Uf.isSome)(n.searchAd)?e.bag.adsOverrideLanguage:null
return t.overrideLocale=r,t}return null},userRating:function(e,t,n){const r=Se(e,t,HD)
if(s(n.ratingCount)&&s(n.rating)&&!r){const e=new Kx("starRating")
return e.moduleType=VC,e.starRating=n.rating,e.labelText=n.ratingCount,e}return null},supportsGameController:function(e,t,n){let r=!1
switch(Pe(e,t,Hb)){case tC:case qS:r=!0}if(Se(e,t,gm)&&(r=!0),!r)return null
const o=new Kx(eS)
o.moduleType=gm
const s=(0,Uf.isSome)(n.searchAd)?e.bag.adsOverrideLanguage:null
return o.labelText=e.loc.stringForPreferredLocale(e,zO,s),o.artwork=Ve(e,"systemimage://gamecontroller.fill"),o}}
class QV{constructor(){this.runsOnIntel=!0,this.runsOnAppleSilicon=!0,this.requiresRosetta=!1}}class eH{constructor(e,t){this.videos=e,this.mediaPlatform=t}}const tH=new XN(414,896),nH=new XN(375,812),rH=new XN(414,736),oH=new XN(375,667),sH=new XN(320,568),iH=new XN(320,480),aH=(new XN(768,1024),new XN(810,1080)),cH=new XN(834,1112),uH=new XN(834,1194),lH=new XN(1194,834),fH=new XN(1024,1366),dH=new XN(1024,1366),pH=new XN(1366,1024),hH=new XN(744,1133),wH=new XN(1133,744),gH=new XN(312,390),mH=new XN(368,448),yH=new XN(396,484),TH=new XN(410,502),AH=new XN(820,1180),EH=new XN(360,780),PH=new XN(390,844),IH=new XN(428,926),SH=new XN(393,852),vH=new XN(430,932),_H=[XE,KE,ZE,Cv,Np,Dp,kp,Yk]
class CH{constructor(){this.location=null,this.position=0}}const OH="X-AppStore-iAdClickToken",bH="X-AppStore-iAdLineItem"
class RH{constructor(e,t,n,r,o,i){this.placementType=t,this.placementId=this.placementIdFromType(t),this.pageFields={},this.clickFields={},this.impressionsFields={},this.fastImpressionFields={},this.iAdClickEventFields={},this._iAdApplied=!1,this._iAdAdamId=null,this.positionInfo=i,this.setInitialAdData(e,n,r),s(o)&&(this.pageFields[pw]=o),this.fastImpressionFields[rI]=!0}static from(e,t){const n=new RH(e,l(t.placementType),l(t.iAdId),l(t.appStoreClientRequestId),h(t.wasOdmlSuccessful),g(t.positionInfo))
return n._iAdApplied=u(t._iAdApplied),n._iAdAdamId=l(t._iAdAdamId),Object.assign(n.pageFields,t.pageFields),Object.assign(n.clickFields,t.clickFields),Object.assign(n.impressionsFields,t.impressionsFields),Object.assign(n.fastImpressionFields,t.fastImpressionFields),Object.assign(n.iAdClickEventFields,t.iAdClickEventFields),n.updateContainerId(),n}get iAdIsPresent(){return this._iAdApplied}get iAdAdamId(){return this._iAdAdamId}updateForAdResponse(e,t){var n
r(t)||(this.placementType=t.placementType,this.placementId=this.placementIdFromType(this.placementType),this.positionInfo=null===(n=t.onDeviceAd)||void 0===n?void 0:n.positionInfo,this.setInitialAdData(e,t.iAdId,t.clientRequestId))}setInitialAdData(e,t,n){if((0,Wf.isNothing)(t)||(0,Wf.isNothing)(n))return
switch(this.pageFields[ZU.hasIAdData]=!0,this.placementType){case AN:case eN:case UD:this.impressionsFields[ZU.hasIAdData]=!0}switch(this.pageFields[NC]=n,this.placementType){case AN:case eN:case UD:this.clickFields[NC]=n,this.impressionsFields[NC]=n}const r=Ka(t)
this.pageFields[$R]=r,this.impressionsFields[$R]=r,this.clickFields[$R]=r,this.updateContainerId()
const o=this.createSlotInfo(e)
if(i(o)&&(this.pageFields[QR]=o,this.clickFields[QR]=o,this.impressionsFields[QR]=o),i(this.placementId))switch(this.pageFields[NR]=this.placementId,this.clickFields[NR]=this.placementId,this.impressionsFields[NR]=this.placementId,this.placementType){case AN:case eN:case UD:this.fastImpressionFields[NR]=this.placementId}}updateContainerId(){this.containerId=this.containerIdFromType(this.placementType),s(this.containerId)&&(this.pageFields[VO]=this.containerId,this.clickFields[VO]=this.containerId,this.fastImpressionFields[VO]=this.containerId)}apply(e,t){if(o(t))return
const n=t.id,r=x(t,jb)
if(this._iAdAdamId=n,r){this.impressionsFields[ZU.hasIAdData]=!0,this.clickFields[ZU.hasIAdData]=!0
const o=Ka(r[oI])
this.fastImpressionFields[t_]=o,this.clickFields[t_]=o
const s=Ka(r[hw])
this.clickFields[e_]=s,this.fastImpressionFields[e_]=s,this.pageFields[Xk]=n,this.pageFields.iAd={iAdFormat:Xa(p(w(r),"format")),iAdAlgoId:Ka(r.algoId),iAdImpressionId:Ka(r[oI]),iAdMetadata:Ka(r[hw])}
const i=re(e,t)
this.updateIAdMetricsFieldsForProductVariantData(i,this.clickFields),Object.assign(this.iAdClickEventFields,r),this._iAdApplied=!0,this.setMissedOpportunity(e,null,this.placementType)}const s=this.createSlotInfo(e)
i(s)&&(this.pageFields[QR]=s,this.clickFields[QR]=s,this.impressionsFields[QR]=s)}applyClickFieldsFromPageRequest(e,t){this._iAdApplied=!0,this._iAdAdamId=e,Object.assign(this.clickFields,t),Object.keys(this.pageFields).forEach(e=>delete this.pageFields[e])}setSpecifiedCreativeUsed(e){this.fastImpressionFields[ww]=e,this.clickFields[ww]=e}setTemplateType(e){this.pageFields[LC]=e,this.impressionsFields[LC]=e,this.clickFields[LC]=e}setMissedOpportunity(e,t,n){if(this.missedOpportunityReason=t,s(t))switch(this.clickFields[xR]=t,this.placementType){case AN:case eN:case UD:break
default:this.pageFields[xR]=t,this.impressionsFields[xR]=t}else delete this.clickFields[xR],n===UD?(this.pageFields[xR]=null,this.impressionsFields[xR]=null):(delete this.pageFields[xR],delete this.impressionsFields[xR])
n===Lk&&t===Gd&&delete this.pageFields[NC]
const r=this.createSlotInfo(e)
i(r)&&(this.pageFields[QR]=r,this.clickFields[QR]=r,this.impressionsFields[QR]=r)}placementIdFromType(e){switch(e){case Lk:return gw
case qR:return mw
case AN:return yw
case eN:return Tw
case UD:return Aw
default:throw new Error(`This method should never be called with value: ${e}`)}}static placementTypeFromPlacementId(e){switch(e){case gw:return Lk
case mw:return qR
case yw:return AN
case Tw:return eN
case Aw:return UD
default:return qR}}containerIdFromType(e){switch(e){case eN:return Wb
case UD:return gE
case AN:return"0"
default:return null}}fastImpressionsFieldsForCurrentItem(e){switch(this.placementType){case eN:case UD:case AN:let t
t=lc(e).locationType===kR?e.locationStack[e.locationStack.length-2].position:uc(e)
const n=y(this.fastImpressionFields)
if(n[Ew]=`${this.containerId}_${t}`,t!==this.adjustedSlotIndex){const e=[rI,NR,VO,Ew]
Object.keys(n).forEach(t=>{e.includes(t)||delete n[t]})}return n
default:return this.fastImpressionFields}}get adjustedSlotIndex(){const e=f(this.positionInfo,wE)
return s(e)?e-1:null}createSlotInfo(e){const t=[]
switch(this.placementType){case eN:case UD:const n=0,r={slotId:`${this.containerId}_${n}`,slotIndex:n,hasAdData:this.iAdIsPresent}
s(this.missedOpportunityReason)&&(r.missedOpportunityReason=this.missedOpportunityReason),t.push(r)
break
case AN:const o=this.adjustedSlotIndex
_c(e,this.placementType).map(e=>e.slot).forEach(e=>{const n=o===e,r=this.iAdIsPresent&&n
let i=this.missedOpportunityReason
!n&&s(o)&&(i=Bd)
const a={slotId:`${this.containerId}_${e}`,slotIndex:e,hasAdData:r}
s(i)&&(a.missedOpportunityReason=i),t.push(a)})
break
default:return null}return[{containerId:this.containerId,slots:t}]}updateIAdMetricsFieldsForProductVariantData(e,t){le(e,c_)?t[Pw]=e.productPageId:delete t[Pw]}get fastImpressionsEventVersion(){switch(this.placementType){case eN:case UD:case AN:return 5
default:return 4}}get shouldIncludeAdRotationFields(){switch(this.placementType){case eN:case UD:case AN:return!1
default:return!0}}}class kH{constructor(e={}){this.baseFields=e}}const DH="jet_native_advert_instanceid",NH="isOnBoardingCard"
class LH{constructor(e){this.label=e.label,this.title=e.title,this.meta=e.meta,this.date=l(e,LO),this.remainingContents=c(e,kN),this.numberOfItemsProcessed=0,this.isFullyHydrated=function(e){for(let t=e.length-1;t>=0;t--)if(!R(e[t]))return!1
return!0}(this.remainingContents),this.isCompletelyUnhydrated=!this.isFullyHydrated&&!function(e){for(const t of e)if(R(t))return!0
return!1}(this.remainingContents),this.onDevicePersonalizationProcessingType=e.onDevicePersonalizationProcessingType}}const FH=N("BBBBBB"),$H=[cN,sN,kD]
class xH{constructor(){this.locationTracker={rootPosition:0,locationStack:[]}}}class MH{constructor(e,t,n,r){this.todayModule=e,this.metricsPageInformation=n,this.contentOffsetWithinModule=t,this.metricsLocationTracker=r}}new Set([Tk,lN,eb,Ub,q_,Rk])
const UH=new Set([Tk,lN,eb,Ub,q_,Rk]),BH=new Set([Tk,lN,eb,Ub,q_,Rk]),GH=new Set([Tk,lN,Ub,Rk]),VH="write-review",HH=RN,jH="appEventRequirementKey",WH=($(N("F0F0F8"),N("303031")),{type:WO,red:0,green:0,blue:0,alpha:.2})
class qH{constructor(e,t,n,r,o,s,i,a){this.isBundleShelf=!1,this.ids=e,this.title=t,this.shouldInferSeeAllFromFetchesItems=n,this.contentType=r,this.offerStyle=o,this.spotlightInAppProductIdentifier=s,this.refreshUrl=i,this.recoMetricsData=a}}const YH=[Tk,Ub,lN,Rk],zH=(0,Ff.makeMetatype)("app-store:page-router")
class JH{constructor(){this.$intentKind="GenericPageIntent"}async perform(e,t){const n=t.required(zH)
return await n.fetchPage(t,e.url,DM)}}class KH{constructor(){this.$intentKind="GenericPageMoreIntent"}async perform(e,t){const n=t.required(zH)
return await n.fetchMoreOfPage(t,e.pageToken)}}class ZH{constructor(){this.$intentKind="ShelvesIntent"}async perform(e,t){const n=t.required(zH)
return await n.fetchShelves(t,e.requests)}}class XH{constructor(){this.$intentKind="ActionIntent"}async perform(e,t){return await bu(t,e)}}class QH{constructor(){this.$intentKind="MetricsFieldLintingIntent"}async perform(e,t){const n=at(t).makeEvent(t,g(e.fields))
return await Promise.resolve(n)}}class ej extends HN{constructor(e,t){super(),this.title=e,this.sections=t||[],this.pageMetrics=new ML,this.pageRenderMetrics={}}}class tj extends HN{constructor(e,t){super(),this.title=e,this.footer=t,this.contents=[]}addContentItem(e){this.contents.push(e)}}class nj extends HN{constructor(e){super(),this.type=e}}class rj extends nj{constructor(e,t,n){super(nN),this.title=e,this.action=t,this.displayType=n||qk}}class oj extends nj{constructor(e,t){super("infoListItem"),this.title=e,this.value=t}}class sj extends nj{constructor(e){super(yk),this.text=e}}class ij extends HN{constructor(){super(...arguments),this.links={}}}class aj{constructor(){this.$intentKind="AccountLinksIntent"}async perform(e,t){return await Du(t)}}class cj{constructor(){this.$intentKind="GenericAccountPageIntent"}async perform(e,t){return await Nu(t,e.url)}}class uj{constructor(){this.$intentKind="UpdateAppEventNotificationIntent"}async perform(e,t){return await $u(t,e)}}class lj extends HN{constructor(e,t,n=null){super(),this.title=e,this.value=t,this.metricsValue=n}}lj.defaultValue="pageFacetsDefaultValue",lj.trueValue=new lj(SD,FS),lj.falseValue=new lj(FS,FS)
class fj extends HN{constructor(e,t,n,r=null,o=[],s=null,i=null,a=null,c=!1,u=!1){super(),this.parameterName=e,this.title=t,this.displayType=n,this.defaultOptions=s,this.defaultOptionTitle=r,this.options=o,this.metricsParameterName=i,this.clickAction=a,this.displayOptionsInline=c,this.showsSelectedOptions=u}}class dj extends HN{constructor(e=[],t=null){super(),this.title=t,this.facets=e}}class pj extends HN{constructor(e,t,n){super(),this.facetGroups=e,this.allowsResetButton=t,this.resetButtonTitle=n}static isDefinedNonNullNonEmpty(e){return typeof e!==Gk&&null!==e&&0!==Object.keys(e).length}}pj.requestValuesForSelectedFacetOptions=function(e){if(pj.isDefinedNonNullNonEmpty(e)){const t=e.filter(e=>pj.isDefinedNonNullNonEmpty(e.value)).map(e=>e.value).join(",").split("&"),n=t[0],r=t.splice(1),o={}
for(const e of r){const t=e.split("=")
2===t.length&&(o[t[0]]=t[1])}return{value:n,additionalKeyValuePairs:o}}return null}
const hj="-releaseDateByDay&sort=name",wj="-lastUpdatedByDay&sort=name",gj="alphabet&sort=name",mj="category&sort=-releaseDate",yj="groupBy",Tj=rv,Aj=Jd,Ej={}
let Pj=!1,Ij=null,Sj=null,vj=null,_j=null,Cj=null,Oj=null,bj=null,Rj=null,kj=null,Dj=null,Nj=null
const Lj={}
Lj[X$]=yj,Lj[rx]=Qd,Lj[ox]=ep,Lj[sx]=tp,Lj[ix]=Tj
class Fj{constructor(){this.$intentKind="ArcadeSeeAllGamesPageIntent"}async perform(e,t){return await Gu(t,e.requestDescriptor)}}class $j{constructor(){this.$intentKind="ArcadeSeeAllGamesPageMoreIntent"}async perform(e,t){return await Vu(t,e.pageToken)}}const xj=Ym
class Mj{constructor(){this.$intentKind="ArcadeSubscribePageIntent"}async perform(e,t){return await zu(t,e.url)}}class Uj extends SV{constructor(e,t){super("ArcadeSubscribeBuilder"),t.exportingService(QC,{fetchSubscribePage:async t=>await zu(e,t.url)})}defaultPlatforms(e){return v(e)}defaultTab(e){return ON}defaultAttributes(e){const t=[cN,zk,oD]
return e.appleSilicon.isSupportEnabled&&t.push(PD),t}pageType(){return NE}pageRoute(e){return[{hostName:"arcadeSubscribePageCustomContext",query:[`${K$}?`,"context?","message?","askToBuyId?",`${J$}?`,`${ex}?`]},{hostName:"arcadeSubscribePage",query:[`${K$}?`,"context?","message?","askToBuyId?",`${J$}?`,`${ex}?`]},{path:"arcade/subscribe",query:[`${K$}?`,"context?","message?","askToBuyId?",`${J$}?`,`${ex}?`]},{path:"{countryCode}/arcade/subscribe",query:[`${K$}?`,"context?","message?","askToBuyId?",`${J$}?`,`${ex}?`]}]}generatePageRequest(e,t,n){return lo(e,this.marketingItemContextFromContextString(l(n,C$)),l(n,K$)).attributingTo(t.build())}renderPage(e,t,n,o){const a=o[Uj.contextualAppRequirementKey]
let u=null
i(a)&&(u=O(a))
const f=c(t,rE).map(e=>g(e)),d=e.arcade.getMarketingItemFromMarketingItems(f),p=d,w=Ro(e,p,0,!1,!1,ov),m=this.marketingItemContextFromContextString(l(n,C$)),y=e.client.isPhone,T=m===BA,A=new qN(ON,e.bag.arcadeAppAdamId,pk,null,T&&y?"arcadeLaunchRepairCompactSheet":"arcadeSubscribePage",null,null,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId)
A.titles[Wv]=e.loc.string(Eb,Pb)
const E=l(n,K$),P=function(e,t,n,r){const o=$n(e,"Upsell",n,r)
return s(r)&&(o.mercuryMetricsData=nc(0,r)),o}(e,0,p.id,p)
P.offerType=CE,P.baseFields.upsellType=this.metricsUpsellType(m),P.baseFields.subscriptionSKU=e.bag.arcadeProductId
const I={pageInformation:P,locationTracker:{rootPosition:0,locationStack:[]}},S=Do(e,{marketingItemData:d},Oo(0,p),I)
if(!(S instanceof dF))throw new Error("Only buy actions are supported on the upsell page")
const v=new QU(w,e.loc.string(up),S,A)
let _
v.askToBuyMessage=l(n,"message"),v.askToBuyId=l(n,"askToBuyId"),Mn(e,v,P)
let C=!1
if(i(u)){v.primaryIcon=na(e,u,I,{useCase:3})
const t=B(u,HD),r=Ke(e,u,I)
r.excludeAttribution=!h(n[ex]),_=Et(e,u,fN,m,t,r),v.postSubscribeAction=_,C=!0}if(!h(n[ex])){const e=v.pageMetrics.instructions
if(!r(e))for(const t of e)t.data.includingFields.push(jP)}let b=[]
const R=o[Uj.contextualIconsRequirementKey]
if(i(R)&&(b=k(R)),s(d)&&(b=we(d,kN)),i(b)){const t=[]
for(const n of b)if(n.id===E){if(!C){v.primaryIcon=na(e,n,I,{useCase:3})
const t=B(u,HD),r=Ke(e,n,I)
_=Et(e,n,fN,m,t,r),v.postSubscribeAction=_}}else t.push(na(e,n,I,{useCase:2}))
v.icons=t}return s(_)&&(S.postSubscribeAction=_),T&&s(E)&&(v.openAppAction=new QL(E)),i(v.icons)||s(v.primaryIcon)||(v.artwork=this.genericArtworkFromData(e,p)),T&&(v.singleIcon=v.primaryIcon),v.subscribedOfferButtonAction=new HL(ON),v}genericArtworkFromData(e,t){if(!s(t))return null
const n=e.client.isPhone,r=function(e,t,n){const r=function(e,t){return Po(e,t)}(e,t)
return d(r,n)}(e,t,n?ah:ch)
if(!i(r))return null
let o=null
return o=n?"of":"og",ta(e,r,{cropCode:o,allowingTransparency:!0,useCase:7})}metricsUpsellType(e){return s(e)?e:gR}marketingItemContextFromContextString(e){switch(e){case dd:return BA
case ud:return ld
default:return e}}}Uj.contextualIconsRequirementKey="contextualIconsRequirement",Uj.contextualAppRequirementKey="contextualPrimaryIconRequirement"
class Bj extends SV{constructor(e=null){super(e||"AbstractGroupingPageController")}renderPage(e,t,n,r,o,i){return $f.context(uh,()=>{const a=O(t)
if(!a)return null
if(!de(a,ER))return null
const c=$n(e,hP,a.id,t),u=no(e)
c.recoMetricsData=rc(c.recoMetricsData,null,u)
const l={shelves:[],metricsPageInformation:c,metricsLocationTracker:{rootPosition:0,locationStack:[]},pageGenreAdamId:U(a,"id"),pageGenreId:null,hasAuthenticatedUser:s(e.user.dsid),refreshController:Qn(t)},f=ds(0,a)
return this.renderGroupingPage(e,f,l,n,r,o,i)})}}class Gj{constructor(){this.$intentKind="ArcadePageIntent"}async perform(e,t){return await Ku(t,e)}}class Vj extends Bj{constructor(e,t){super("ArcadePageBuilder"),t.exportingService(QC,{fetchPage:async t=>await Ku(e,t)})}defaultPlatforms(e){return v(e)}defaultAttributes(e){const t=[cN,zk,oD,xv]
return e.appleSilicon.isSupportEnabled&&t.push(PD),t}pageType(){return ON}pageRoute(e){return[{protocol:kF,path:`/${FF}/${MF}`,query:[O$,`${R$}?`,`${b$}?`,f$]},{hostName:s$,path:`/WebObjects/{storePreviewInstance}/wa/${MF}`,query:[O$,`${R$}?`,`${b$}?`,f$,"useReleaseId?"]},{protocol:kF,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}",query:[O$,`${R$}?`,`${b$}?`]},{protocol:kF,path:"{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}",query:[O$,`${R$}?`,`${b$}?`]},{protocol:kF,path:"{apiVersion}/editorial/{countryCode}/groupings/{id}",query:[O$,`${R$}?`,`${b$}?`]}]}generatePageRequest(e,t,n){const r=n[f$],o=h(n[b$])
if(!a(r))throw new Error(`Unable to map ${t.build()} to a media api url`)
const c=[cN,sN,zk,oD,pb,mC]
e.appleSilicon.isSupportEnabled&&c.push(PD)
let u=new xM(e).forType(Hk).includingAttributes(c).includingMacOSCompatibleIOSAppsWhenSupported()
pn(e)&&(u.enablingFeature(aN),u.includingScopedAttributes(PN,[mN,Fk,$k]),u.includingScopedRelationships(PN,[gN]))
const l=C(e)
s(l)&&u.addingQuery(zb,l),o?u.addingQuery(ER,$m):(u.addingQuery(ER,"nonsubscriber"),u.includingRelationshipsForUpsell(!1)),u.withIds([r])
const f=t.query.useReleaseId
return l$.has(t.host)&&i(f)&&(u=u.addingQuery(zm,f),u.isStorePreviewRequest=!0),u.enablingFeature(hS),u.enablingFeature("featuredCategories"),u.attributingTo(t.build())}renderGroupingPage(e,t,n,r,a,c,u){return $f.context(rk,()=>{const a=h(r[b$]),u=h(r[R$]),f={}
f[O$]="true",f[b$]=`${a}`,f[R$]=`${u}`,n.additionalShelfParameters=f,n.isArcadePage=!0,n.metricsPageInformation.isCrossfireReferralCandidate=!0
let d=null,p=null
if(!a){const r=fo(e,t.originalGroupingData)
if(r)d=r.marketingItemData
else if(c){$f.unexpectedNull(Uk,Jm,"relationships.upsell")
const e=po(0,c.get(wS))
e&&(d=e.marketingItemData)}p=function(e,t,n,r=tN){if(o(t)||o(t.attributes))return null
const a={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,mercuryMetricsData:nc(0,t)},c=go(e,t,!0),u=wo(e,t),f=c.backgroundColor||u.backgroundColor,d=To(e,t,0,!0),p=mo(e,t,!1,0,!0)!==fp&&!0,h=Ro(e,t,0,!1,p,ov)
let w=null
"tv"!==e.client.deviceType&&(w=h.description,h.description=null)
const g=_o(0,c.artworkData||u.artworkData,!0),m=function(e,t){const n=Eo(0,t),r=l(n,"ctaButtonBackgroundColor"),o=l(n,"ctaButtonTextColor")
return s(r)&&s(o)?{type:Kk,fillColor:N(r),textColor:N(o)}:{type:H_,fillColor:null,textColor:null}}(0,t),y=new qN(ON,e.bag.arcadeAppAdamId,r,null,ON,null,m,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId),T=new uV(h,y,{backgroundColor:f,wantsMaterialDetailBackground:!1,wantsBlur:p,badgeColor:null,titleColor:null,descriptionColor:null,callToActionColor:null,textAlignment:null,detailsPosition:d},null,w,u.artwork,c.video),A=fn(e,t,T.details.title,{...a,targetType:wO})
A.displaysArcadeUpsell=!0,cn(0,T,A),ic(A,T.details.title)
const E=ko(e,t,0,a)
return T.offerButtonAction=E,cc(a.locationTracker),i(n)&&o(n.pageTitleEffect)&&0===n.shelves.length&&(n.pageTitleEffect=g),dc(n.metricsLocationTracker),T}(e,d,n)}const w=Vj.insertUpsellBreakoutShelfIntoParseContextIfNecessary(p,a,n)
fs(e,t,n)
const g=new FM(n.shelves)
Mn(e,g,n.metricsPageInformation),g.tabTitle=U(t.originalGroupingData,FN)
const m=U(t.originalGroupingData,FN)
e.host.clientIdentifier,w||(g.title=m)
const y=new uL(xk)
y.color=F("primaryText"),y.isFallbackStyle=!0,g.titleEffect=n.pageTitleEffect||y,g.presentationOptions=[]
let T=!1
if(n.shelves.length>0){const e=n.shelves[0].contentType===Eh,t=n.shelves[0].contentType===wO,r=n.shelves[0].contentType===Fv
T=e||t||r}if(T&&g.presentationOptions.push(cP),!a&&i(p)){g.subscriptionOfferAction=Vj.createSubscribeAction(e,p,{id:null,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,targetType:vN}),g.subscriptionOfferDisplayProperties=new qN(ON,e.bag.arcadeAppAdamId,pk,null,ON,null,null,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId),g.subscriptionOfferTitle=p.details.title,g.subscriptionOfferSubtitle=p.buttonCallToAction||p.details.description
const t={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},r={marketingItemData:d}
g.subscriptionLockup=Hi(e,r,t,0,pk,"navigationBar")}const A={id:"arcade-see-all-games-footer",presentationHints:{},featuredContentId:-1,featuredContentData:null,nativeGroupingShelfId:1,metricsPageInformation:n.metricsPageInformation,metricsLocationTracker:n.metricsLocationTracker,pageGenreId:n.pageGenreId,title:null,shouldFilter:!1,remainingItems:[],isFirstRender:!0,isDeferring:!1,showOrdinals:!1,hasExistingContent:!1,showingPlaceholders:!1,ordinalIndex:1,isSearchLandingPage:n.isSearchLandingPage,isArcadePage:n.isArcadePage}
if(this.insertUnifiedMessageShelves(e,g),g.shelves.length>0){const t=Vj.groupingArcadeFooterShelfController.createShelf(e,null,n,A,null)
g.shelves.push(t)}if(0===g.shelves.length)throw new Error(`Missing content for Arcade grouping ${JSON.stringify(r)}`)
return g.autoUpsellAction=io(e,gR,null,null),Ju(g),g})}static insertUpsellBreakoutShelfIntoParseContextIfNecessary(e,t,n){return $f.context("insertShelfForUpsellBreakoutIfNecessary",()=>{if(o(e))return t||$f.unexpectedNull(DD,Jm,wO),!1
const r=new CM(wO)
return r.items=[e],r.presentationHints={isFirstShelf:!0},n.shelves.push(r),!0})}static createSubscribeAction(e,t,n){if(o(t))return null
{const r=io(e,GA,null,null,n)
return r.title=t.offerButtonAction.title,r}}createTermsAndConditionsShelf(e){return!r(e.bag.termsAndConditionsURL)&&e.client.deviceType,null}supportsDataAugmenting(){return!0}additionalDataKeysNeededForData(e,t,n){if(r(n))return null
const o=O(t),s=h(n.parameters[b$]),i=fo(e,o)
return!s&&r(i)?new Set([wS]):null}fetchAdditionalDataForKey(e,t){return $f.context("fetchAdditionalDataForKey",async()=>{let n
return t===wS&&(n=lo(e,V_),$f.unexpectedNull(DD,Jk,"upsellRecovery.marketingItem")),r(n)?null:await lr(e,n).catch(()=>null)})}insertUnifiedMessageShelves(e,t){t.shelves.length<=0||(t.shelves.splice(1,0,ws(0,"arcadePageHeader")),t.shelves.splice(6,0,ws(0,"arcadePageMid")),t.shelves.push(ws(0,"arcadePageFooter")))}}Vj.groupingArcadeFooterShelfController=new JG
const Hj={width:1680,height:3636,url:"https://is3-ssl.mzstatic.com/image/thumb/Features123/v4/9a/d4/48/9ad448b5-ddbb-f295-fae3-2a2e69bf5604/source/{w}x{h}{c}.{f}",bgColor:cp,textColor1:"f7c981",textColor2:"f8a710",textColor3:"c6a067",textColor4:"c6850d"},jj={width:4320,height:3240,url:"https://is3-ssl.mzstatic.com/image/thumb/Features124/v4/57/71/7f/57717f8b-c486-4faf-7558-a4f88186855d/source/{w}x{h}{c}.{f}",bgColor:cp,textColor1:"fdc97a",textColor2:"f73a03",textColor3:"caa161",textColor4:"c52e02"}
class Wj{constructor(){this.$intentKind="ArcadeWelcomePageIntent"}async perform(e,t){return await Xu(t,e.url)}}class qj{constructor(){this.$intentKind="ArcadeUpsellGridIntent"}async perform(e,t){return await Qu(t,e.contentDictionary)}}class Yj{constructor(){this.$intentKind="ArcadeSubscriptionDecorationIntent"}async perform(e,t){return await el(t,e.json)}}class zj{constructor(){this.$intentKind="PersonalizedOfferContextIntent"}async perform(e,t){return await tl(t,e.offerToken)}}class Jj{constructor(){this.$intentKind="PurchaseDecorationIntent"}async perform(e,t){return await nl(t,e.json)}}class Kj{constructor(){this.$intentKind="IconArtworkIntent"}async perform(e,t){return await rl(t,e.adamIds)}}const Zj=[NN,im]
class Xj extends _V{}const Qj=[Jb,Pk,TN,EO,fC],eW=[Jb,Pk,VE,TN,Tv,Av,uC,lC]
class tW{}const nW="com.apple.Arcade.ArcadeHardware1",rW="com.apple.Arcade.TrialEligible1",oW=[nW,rW]
class sW{constructor(){this.$intentKind="EngagementEventIntent"}async perform(e,t){return await hl(t,e)}}class iW{constructor(){this.$intentKind="BadgingEventIntent"}async perform(e,t){return await wl(t,e)}}class aW{constructor(){this.$intentKind="InAppPurchaseInstallPageIntent"}async perform(e,t){return await gl(t,e.url)}}class cW{constructor(e,t,n,r){this.name=e,this.url=t,this.artwork=n,this.roomUber=r}}class uW extends HN{constructor(e,t){super(),this.apps=e,this.appsToAlwaysShow=t}}class lW{constructor(){this.$intentKind="MSOProviderDataIntent"}async perform(e,t){return await ml(t,e.providerAdamId)}}class fW{constructor(){this.$intentKind="MSOPageIntent"}async perform(e,t){return await yl(t,e)}}class dW{constructor(){this.$intentKind="CancelPreorderIntent"}async perform(e,t){return await Pl(t,e)}}class pW{constructor(){this.$intentKind="ShelfBasedProductPageIntent"}async perform(e,t){return await Il(t,e)}}class hW extends SV{constructor(e,t){super(mp),t.exportingService(iy,{fetchPage:async t=>await async function(e,t){if(t.preloading&&te(e))return await Promise.reject(new Error(ay))
0!==fr(e,new Ox(t.url)).length&&e.network.fetch({url:e.bag.redirectUrlEndpoint,method:SR,headers:{"Content-Type":mO},body:`url=${encodeURIComponent(t.url)}`})
const n=u(new Ox(t.url).query[V$])
if(t.preloading){const e=new Ox(t.url)
e.param(hx,SD),t.url=e.build()}let r=e.required(zH).fetchPage(e,t.url,RU)
if(!r){const n=new xM(e,t.url)
r=lr(e,n).then(n=>Ei(e,n,{},{},null,t.preloading))}return await r.then(t=>(e.host.clientIdentifier===PL&&(e.props.enabled(cy)&&n&&(t.shareAction=null,t.titleOfferDisplayProperties=null,t.expandedOfferDetails=null,t.banner=null,t.offerDisplayProperties=null),t&&DE in t&&Gn(0,t)),t))}(e,t),fetchShelfBasedPage:async t=>await Il(e,t)})}defaultPlatforms(e){return v(e)}pageType(){return pD}defaultTab(e){return hW.representsArcadeApp(e)?ON:super.defaultTab(e)}defaultAction(e,t,n,r){if(t instanceof VL)return t
const o=super.defaultAction(e,t,n,r)
if(!(t instanceof RU||t instanceof zU))return o
const s=1===t.appPlatforms.length&&"tv"===t.appPlatforms[0]
if(n[_$]!==VH||s){if(n[_$]!==HH||s)return o
{const e=t.shelfMapping[RN]||t.shelfMapping[TD]
let n=null
return e&&e.seeAllAction&&(n=e.seeAllAction,n.animationBehavior=AD),o.animationBehavior=AD,new qL([o,n])}}{const n=hW.representsBundle(t)
let r=null,s=null
t instanceof RU?(r=t.adamId,s=t.icon):t instanceof zU&&(r=t.lockup.adamId,s=t.lockup.icon)
const i=Vt(e,r,n,s)
return o.animationBehavior=AD,new qL([o,i])}}static generateProductPageOptions(e,t,n){const r={clientIdentifierOverride:n.query[z$]},o=t[A$]
if(o){const e=t[yx]===SD
r.spotlightSection=en(e),r.spotlightInAppProductIdentifier=o}const i=n.query[OH]
i&&(r.iAdClickFields=JSON.parse(i))
const a=n.query[bH]
a&&(r.iAdLineItem=a)
const c=n.query.externalDeepLinkUrl
return s(c)&&(r.externalDeepLinkUrl=c),r}pageRoute(e){return vu()}generatePageRequest(e,t,n){const o=n[y$],s=n[d$],a=n[p$],c="1"===n[V$]
let u=null
if(o){const t=$e(e).adamIdFromSystemBundleId(o)
u=(0,Uf.isSome)(t)?Ir(e,t,!1,void 0,!1,c):function(e,t,n,r){const o=RG
e.bag.enablePrivacyNutritionLabels&&!gr(e,t)&&o.push(TO),e.appleSilicon.isSupportEnabled&&o.push(PD),e.props.enabled(ik)&&o.push(rC)
const s=new xM(e).forType(NN).withFilter(mD,t).includingAdditionalPlatforms(v(e)).includingRelationships([Zk,Wb,aC,RN,TN,hv,wv,cC,gv]).includingAttributes(o).addingRelationshipLimit(RN,_(e)).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes(ne(e))
return(0,Wf.isSome)(n)&&s.addingQuery(p$,n),mc(e,eN)&&s.enablingFeature(yv),r&&s.enablingFeature(GE),s}(e,o,a,c)}else if(n[_$]===uy&&s){const r=i(t.pathname)&&-1!==t.pathname.indexOf(mv)
u=Ir(e,s,h(n,G$),a,r,c)}else u=Ar(e,t,c)
if(r(u))throw new Error(`Unable to map ${t.build()} to a media api url`)
return u}generateAdditionalPageRequirements(e,t,n){const r=super.generateAdditionalPageRequirements(e,t,n),o=n[ux]
if(i(o)&&pn(e)){const t=new xM(e).forType(PN).withIds([o]).includingAdditionalPlatforms(v(e)).includingScopedAttributes(PN,[mN,Fk,$k]).includingScopedAvailableIn(PN,[vp,BE])
r[jH]=new EV(lr(e,t).catch(()=>null),!1)}return r}renderPage(e,t,n,r,o,s){return $f.context(rk,()=>{const o=$n(e,oR,"",t),a=hW.generateProductPageOptions(e,n,new Ox(o.pageUrl)),c=O(t),u=hW.alternativeAppForPlatform(e,c,Ce(e))
if(null!==u)return u
const l="1"===n[V$]
return i(s)&&kL.shared.setReferralDataForProduct(c.id,s),Ei(e,t,a,r,s,h(n[hx]),l)})}shelfRoute(e){return[{protocol:RF,path:`/${WF}/${LF}/{token}`}]}generateShelfRequest(e,t,n){return _u(e,0,n)}renderShelf(e,t,n){return Cu(e,t,n)}shelfRequiresAdditionalModification(e,t){return!0}async performAdditionalShelfModifications(e,t,n){return await new Promise(r=>{const o=n[qD],s=JSON.parse(o),i=t.items
if(s.contentType===SO&&i){const n=[],o=[]
for(const e of i){const t=e.productIdentifier
en(e.isSubscription).shelfId===s.inAppShelfId&&(n.push(t),e.isVisibleByDefault&&o.push(t))}e.clientOrdering.orderedVisibleIAPs(s.appBundleId,n,o,s.spotlightInAppProductIdentifier).then(e=>{t.items=hW.filteredInAppLockupsUsingOrdering(i,e),r(t)})}else new Set([Mk,tR]).has(t.contentType)&&0===t.items.length&&(t.isHidden=!0),r(t)})}handleShelfError(e,t,n,r){const o=r[qD],s=JSON.parse(o)
if(s&&!s.hasExistingContent){const e=new CM(s.contentType)
e.isHidden=!0,t(e)}else super.handleShelfError(e,t,n,r)}static alternativeAppForPlatform(e,t,n){if(!K(t,n)){const r=we(t,gv)
if(i(r))for(const t of r){const r=Pe(e,t,DN)
if(K(t,n)&&i(r))return new VL(_N,r)}}return null}static representsBundle(e){return!!(e.pageMetrics&&e.pageMetrics.pageFields&&wk in e.pageMetrics.pageFields)&&e.pageMetrics.pageFields[wk]===zP}static representsArcadeApp(e){return!!(e.pageMetrics&&e.pageMetrics.pageFields&&wk in e.pageMetrics.pageFields)&&e.pageMetrics.pageFields[kC]===WR}static filteredInAppLockupsUsingOrdering(e,t){const n={}
for(const t of e)n[t.productIdentifier]=t
const r=[]
for(const e of t){const t=n[e]
if(t){const e=y(t)
r.push(e)}}return r}}class wW extends IV{handlePage(e,t,n,r,o,s,i){this.renderPage(e,t,n)}renderPage(e,t,n){throw new Error(`renderPage is not supported on: ${this.builderClass}`)}handlePageError(e,t,n,r,o){n(e)}handleShelf(e,t,n,r,o,s){this.renderShelf(e,t,n).then(o,e=>{this.handleShelfError(e,o,s,n)})}async renderShelf(e,t,n){throw new Error(`renderShelf is not supported on: ${this.builderClass}`)}handleShelfError(e,t,n,r){n(e)}}class gW extends jN{constructor(e,t,n,r){super(),this.value=e,this.isSelected=t,this.displayName=n,this.clickAction=r}}class mW extends HN{constructor(e,t,n){super(),this.searchTerm=e,this.selectedTokens=t,this.optimizationTerm=n}}class yW extends GL{constructor(e,t){super("GuidedSearchTokenToggleAction"),this.targetToken=e,this.searchOrigin=t}}class TW extends GL{constructor(e,t){super("SearchEntityChangeAction"),this.entity=e,this.searchOrigin=t}}const AW="SearchResults.shelfId"
class EW{constructor(){this.$intentKind="SearchHintsIntent"}async perform(e,t){return await jl(t,e.term)}}let PW=null
const IW={identifer:"_pdqLKg",treatments:[0,1]}
!function(e){e[e.Landing=0]="Landing",e[e.Results=1]="Results",e[e.ChartsAndCategories=2]="ChartsAndCategories"}(Yf||(Yf={}))
class SW{constructor(){this.$intentKind="SearchResultsPageIntent"}async perform(e,t){return await rf(t,e.requestDescriptor)}}class vW{constructor(){this.$intentKind="SearchResultsPageMoreIntent"}async perform(e,t){return await of(t,e.pageToken)}}class _W{constructor(){this.$intentKind="ArticlePageIntent"}async perform(e,t){return await t.required(zH).fetchPage(t,e.url,cV)}}class CW{constructor(){this.$intentKind="TodayPageIntent"}async perform(e,t){return await sf(t,{url:e.url,onboardingCardIds:e.onboardingCardIds})}}class OW{constructor(){this.$intentKind="TodayPageMoreIntent"}async perform(e,t){return await qc(t,e.pageToken)}}class bW extends HN{constructor(e,t,n,r){super(),this.shortName=e,this.longName=t,this.chart=n,this.shelves=r,this.nextPage=null,this.pageMetrics=new ML,this.pageRenderMetrics={}}}class RW extends vG{constructor(e,t,n){super(e.name,e.genreId,e.artwork,e.ageBandId,n),this.shortName=this.name,this.longName=this.name,this.url=t}}class kW extends HN{constructor(e,t,n,r,o,s){super(),this.genreId=e,this.ageBandId=t,this.title=n,this.segments=r,this.categoriesButtonTitle=o,this.categories=s,this.initialSegmentIndex=0}}class DW{constructor(){this.$intentKind="TopChartsPageIntent"}async perform(e,t){return await af(t,e.url)}}class NW{constructor(){this.$intentKind="TopChartsPageMoreIntent"}async perform(e,t){return await cf(t,e.pageToken)}}class LW extends HN{constructor(e,t,n,r){super(),this.collections=e,this.refreshDate=t,this.originalResponseDate=n,this.originalResponseHash=r}}class FW extends HN{constructor(e,t){super(),this.cards=e,this.displayDate=t}}class $W extends HN{constructor(e,t,n,r,o,s,i,a,c,u,l,f){super(),this.storyId=e,this.heading=t,this.title=n,this.backgroundColor=r,this.isDark=o,this.iconArtwork=s,this.url=i,this.eventBadgeKind=u,this.editorialArtwork=c,this.isVideoArtwork=a,this.eventStartDate=l,this.eventEndDate=f}}class xW{make(e){const t=new xM(e).forType(this.typeForUseCase()).addingContext(this.context()).includingAttributes(this.attributesForUseCase()).asPartialResponseLimitedToFields(this.fieldsForRequest()).withSparseCount(this.sparseCountForUseCase()).withSparseLimit(this.sparseLimitForUseCase()).enablingFeature(this.enablingFeature(e)).usingCustomAttributes(this.shouldUseCustomAttributes(e)).withIds(this.ids())
if(null!==this.addingQuery())for(const e of this.addingQuery())t.addingQuery(e.key,e.value)
return t}}class MW extends xW{constructor(e){super(),this.groupingId=e}context(){return r_}typeForUseCase(){return Hk}attributesForUseCase(){return[cN,sN,kD]}sparseCountForUseCase(){return null}sparseLimitForUseCase(){return null}addingQuery(){return[{key:ER,value:$m}]}ids(){return[this.groupingId]}fieldsForRequest(){return[lN,mD,_k,Pv,jD,cN,FP,Qb,sN,nv,"id",YR,RD,kD,FN,Iv,tv]}enablingFeature(e){return null}shouldUseCustomAttributes(e){return ne(e)}}class UW extends xW{context(){return r_}typeForUseCase(){return AN}attributesForUseCase(){return[cN,sN,kD]}sparseCountForUseCase(){return null}sparseLimitForUseCase(){return null}addingQuery(){return null}ids(){return[]}fieldsForRequest(){return[ZI,lN,AE,_k,Pv,jD,hk,cN,FP,Qb,sN,nv,"id",gO,YR,RD,nN,kD,FN,Iv,tv]}enablingFeature(e){return pn(e)?aN:null}shouldUseCustomAttributes(e){return ne(e)}}class BW{constructor(){this.$intentKind="WidgetIntent"}async perform(e,t){const n=e.widgetKind
switch(n){case aS:return await Sf(t,e)
case Nb:return await If(t,e)
default:throw Error(`Invalid widgetKind of '${n}'`)}}}class GW extends Df.LegacyRuntime{constructor(e,t){super(e,t,{})}exportingService(e,t){this.wrapServiceInValidation(t)
const n={...this.serviceWithName(e)||{},...t}
return super.exportingService(e,n)}exportingServiceName(e,t,n){const r={}
r[t]=n,this.exportingService(e,r)}wrapServiceInValidation(e){for(const t of Object.keys(e)){const n=e[t]
n instanceof Function&&(e[t]=function(...e){const t=n.apply(this,e)
return t instanceof Promise?t.then(e=>($f.recordValidationIncidents(e),e)):($f.recordValidationIncidents(t),t)})}}}const VW=new class{constructor(){this.registeredBuilders=new Set,this.pageRouter=new kx,this.shelfRouter=new kx,this.paginationRouter=new kx}registerPageBuilder(e,t){if(this.registeredBuilders.has(t.builderClass))throw new Error(`routing: Registering duplicate builderClass ${t.builderClass}`)
this.registeredBuilders.add(t.builderClass),this.pageRouter.associate(t.pageRoute(e),t),this.shelfRouter.associate(t.shelfRoute(e),t),this.paginationRouter.associate(t.paginationRoute(e),t)}registerShelfBuilder(e,t){if(this.registeredBuilders.has(t.builderClass))throw new Error(`routing: Registering duplicate builderClass ${t.builderClass}`)
this.registeredBuilders.add(t.builderClass),this.shelfRouter.associate(t.shelfRoute(e),t)}registerPaginationBuilder(e,t){if(this.registeredBuilders.has(t.builderClass))throw new Error(`routing: Registering duplicate builderClass ${t.builderClass}`)
this.registeredBuilders.add(t.builderClass),this.paginationRouter.associate(t.paginationRoute(e),t)}fetchFlowPage(e){const t=this.pageRouter.routedObjectForUrl(e)
if(!t.object)return"unknown"
const n=t.object
return n.builderClass===mp&&t.parameters[_$]!==HH&&t.parameters[_$]!==VH?pD:n.pageType()}async fetchPage(e,t,n){return await this.fetchAction(e,t,null).then(async r=>await new Promise((o,s)=>{if(!r)throw new Error(`Promise resolved to null action for: ${t}`)
if(r.actionClass!==kS){if(r.actionClass===ad){const e=r
if(1===e.actions.length&&e.actions[0].actionClass===kS){const t=e.actions[0].pageData
return T(t,n)?void o(t):void s(new Error(`pageData is not expected type ${n.name}, ${JSON.stringify(t)}`))}}s(new Error("Action is not a flowAction or a tabChangeAction that contains a single flowAction."))}else{const i=r.pageData
if(!T(i,n)){const a=r.pageUrl,c=a===t
return a&&!c?void this.fetchPage(e,a,n).then(e=>{o(e)}).catch(e=>{s(e)}):void s(new Error(`pageData is not expected type ${n.name}, ${JSON.stringify(i)}`))}o(i)}}))}async fetchAction(e,t,n){return await new Promise((r,o)=>{const s=t,i=this.pageRouter.routedObjectForUrl(s)
i.object?i.object.handlePage(e,i.normalizedUrl,i.parameters,i.matchedRuleIdentifier,n,r,o):this.redirectAndRefetchActionIfPossible(e,i.normalizedUrl,r,o)})}async fetchMoreOfPage(e,t){return await new Promise((n,r)=>{const o=t.url
if(!o)return void r(new Error("Page token missing required `url` property"))
const s=this.paginationRouter.routedObjectForUrl(o)
s.object?s.object.handlePagination(e,s.normalizedUrl,s.parameters,s.matchedRuleIdentifier,t,n,r):r(new Error(`fetchMoreOfPage: Unhandled pagination url: ${o}`))})}async fetchShelves(e,t){return await new Promise((n,r)=>{const o=Object.keys(t),s={shelves:{},errors:{}},i=new Dx(o.length)
i.then(()=>{if(Object.keys(s.shelves).length>0)n(s)
else{const e=Object.keys(s.errors).map(e=>s.errors[e].message)
0===e.length?r(new Error(`Could not load any shelves: ${JSON.stringify(t)}`)):r(new Error(e.join("\n")))}})
for(const n of o){const r=t[n],o=e=>{s.shelves[n]=e,i.countDown()},a=e=>{s.errors[n]=e,i.countDown()},c=this.shelfRouter.routedObjectForUrl(r)
c.object?c.object.handleShelf(e,c.normalizedUrl,c.parameters,c.matchedRuleIdentifier,o,a):a(new Error(`fetchShelves: Unhandled shelf url: ${r}`))}})}redirectAndRefetchActionIfPossible(e,t,n,r){e.network.fetch({url:t.toString(),method:xb}).then(o=>{this.hasGotoURLInResponse(e,o)?n(new hF):200===o.status&&o.redirected&&o.url?this.fetchAction(e,o.url,null).then(n,r):r(new Error(`redirectAndRefetchActionIfPossible: Unhandled page url: ${t}`))}).catch(()=>{r(new Error(`redirectAndRefetchActionIfPossible: Failed to fetch page at url: ${t}`))})}hasGotoURLInResponse(e,t){if((0,Uf.isSome)(t.body)){const n=w(e.plist.parse(t.body)),r=l(n,yp),o=l(n,Tp)
if(r===Ap&&(0,Uf.isSome)(o))return!0}return!1}fetchBuilder(e){const t=this.pageRouter.routedObjectForUrl(e)||this.shelfRouter.routedObjectForUrl(e)||this.paginationRouter.routedObjectForUrl(e)
return t?t.object:null}},HW=function(e,t,n){const r=function(e,t,n,r,o,s,i,a,c,u,l,f,d,p,h,w,g,m,y,T,A,E,P,I,S,v,_,C,O){return e.configureDefaults(n,r,o,s,i,a,c,u,l,f,d,p,h,w,g,m,y,T,A,E,P,I,S,v,_,C,O).adding(zH,t)}(new RL("app-store"),e,bag,cryptography,host,net,platform,plist,random,services,cookieProvider,ask.storeMetrics,ask.loc,ask.device,ask.client,ask.props,ask.user,ask.clientOrdering,ask.personalizationStore,ask.arcade,ask.gameCenter,ask.resilientDeepLinks,ask.appleSilicon,ask.storage,ask.ads,ask.onDeviceRecommendationsManager,ask.featureFlags,mediaToken,ask.searchLandingPage)
return kL.createSharedMetricsReferralContext(r),r}(VW),jW=new kf.IntentDispatcher,WW=new GW(jW,HW)
!function(e,t){const n=e.required(zH)
t.exportingService(gp,{fetchGeneric:async t=>await n.fetchPage(e,t.url,DM),fetchMoreOfGeneric:async t=>await n.fetchMoreOfPage(e,t.pageToken),fetchShelves:async t=>await n.fetchShelves(e,t.requests),fetchAction:async t=>await bu(e,t)})}(HW,WW),VW.registerPageBuilder(HW,new class extends IV{constructor(e,t){super("TodayBuilder"),t.exportingService(hy,{fetchPage:async t=>await sf(e,{url:t.url,onboardingCardIds:t.onboardingCardIds}),fetchMoreOfPage:async t=>await qc(e,t.pageToken)})}handlePage(e,t,n,r,o,s,i){i(new Error("handlePage not implemented for TodayBuilder"))}pageRoute(e){return[]}pageType(){return AN}handleShelf(e,t,n,o,s,i){const a=n[qD],c=JSON.parse(a)
if(r(c.todayModule))return void i(new Error("Not a today module"))
const u=new xM(e,c.todayModule.contents).includingAdditionalPlatforms(v(e)).includingAttributes($H).includingRelationshipsForUpsell(!0).usingCustomAttributes(ne(e))
fe(e,u,c.todayModule.contents),pn(e)&&(u.enablingFeature(aN),u.addingQuery(DR,$O),u.includingScopedRelationships(PN,[gN]),u.includingScopedAttributes(PN,[mN,Fk,$k]),u.includingScopedRelationships(iN,[yD])),lr(e,u).then(t=>function(e,t,n){if(r(t.todayModule))return null
const o=t.todayModule
o.contents=b(n)
const s=new xH
s.locationTracker=t.metricsLocationTracker,s.pageInformation=t.metricsPageInformation,s.refreshController={timeToLive:null,nextPreferredContentRefreshDate:null,refreshWhileVisibleForNextPreferredContentRefreshDate:!1}
const i=Wc(e,o,{contentOffsetWithinModule:t.contentOffsetWithinModule,hideTitle:!0,setTitleToDateForTodaySection:!1},s,null)
return i.mergeWhenFetched=!0,i.nextPreferredContentRefreshDate=nr(s.refreshController),i}(e,c,t)).then(s,i)}shelfRoute(e){return[{protocol:RF,path:`/${BF}/${LF}/{token}`}]}}(HW,WW)),VW.registerPageBuilder(HW,new class extends IV{constructor(e,t){super("ArticleBuilder"),t.exportingService(hy,{fetchArticle:async t=>await e.required(zH).fetchPage(e,t.url,cV)})}handlePage(e,t,n,r,o,c,u){const f=JSON.parse(l(t.query,W$)),d=function(e,t){const n=t.pathComponents()
if(n.indexOf(yO)<0&&n.indexOf(oO)<0&&n.indexOf("viewEditorialItem")<0&&t.host!==a$&&t.host!==u$)throw new Error(`Unable to map ${t.build()} to a media api url`)
let r
if(r=t.host===a$?e.props.asString("spamBlockingExtensionsEditorialItemID"):t.host===u$?e.bag.sharePlayAppsEditorialItemId:Tr(t),!a(r))throw new Error(`Unable to map ${t.build()} to a media api url`)
if(!a(r))throw new Error(`Unable to map ${t} to a media api url`)
const o=[ME],s=[ZR,vR,oD,kD,cN,sN]
e.appleSilicon.isSupportEnabled&&s.push(PD)
const c=new xM(e).forType(iN).withIds([r]).includingAdditionalPlatforms(v(e)).includingAttributes(s).includingRelationships(o).includingRelationshipsForUpsell(!0).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes(ne(e))
pn(e)&&(c.enablingFeature(aN),c.includingScopedAttributes(PN,[mN,Fk,$k]),c.includingScopedRelationships(PN,[gN]),c.includingScopedRelationships("editorial-item-shelves",[PN]),c.includingScopedAvailableIn(PN,[vp]))
const u=t.query.preview
return l$.has(t.host)&&i(u)&&(c.addingQuery(UE,u),c.isStorePreviewRequest=!0),c.attributingTo(t.build())}(e,t)
lr(e,d).then(async t=>await async function(e,t){return await Co(e,t,No,Lo)}(e,t)).then(t=>{const r=new pV
return r.todayShelfRecoMetricsData=f,r.showingFallbackMediaInline=Boolean(n[q$]),r.additionalData=t.additionalData,r.allowUnpublishedAppEventPreviews=(0,Uf.isSome)(n.preview),r.isResilientDeepLink=e.deepLinks.hasResilientDeepLinks(),function(e,t,n){return $f.context("articlePageWithResponse",()=>{const r=O(t)
n.metricsPageInformation=$n(e,oO,r.id,t),n.metricsLocationTracker={rootPosition:0,locationStack:[]},n.pageId=r.id
const o={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,refreshController:n.refreshController},a=function(e,t){if(!s(t))return null
const n={useThreeLineOverlayForBranded:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!1,canDisplayArcadeOfferButton:!0}
switch(n.clientIdentifierOverride=t.clientIdentifierOverride,n.allowUnpublishedAppEventPreviews=t.allowUnpublishedAppEventPreviews,e.client.deviceType){case $N:n.prevailingCropCode="en",n.coercedGeneralCardSubType=pR,n.heroDisplayContext=FD
break
case"tv":n.prevailingCropCode="ek",n.coercedGeneralCardSubType=pR,n.heroDisplayContext=FD}return n}(e,n),c=eu(e,r,a,o)
n.crossLinkSubtitle=wu(e,r),n.clientIdentifierOverride=a.clientIdentifierOverride,ic({pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,targetType:FD,id:n.pageId,idType:PR},null==c?void 0:c.title)
const u=function(e,t,n,r){return $f.context("renderArticle",()=>{const o=[],i=we(t,ME)
for(const n of i){r.module=U(n,mm),r.subStyle=null
const i=$o(e,n,t,r)
s(i)&&(i.title=r.titleForNextShelf,o.push(i),r.titleForNextShelf=null),r.index++,dc(r.metricsLocationTracker)}if(r.showingFallbackMediaInline&&0===o.length){const e=function(e,t){if(t.media instanceof jM){const e=t.media,n=new CM(uN)
return n.items=e.lockups,n}return null}(0,n)
s(e)&&o.push(e)}return o})}(e,r,c,n),f=u[u.length-1],d=n.isResilientDeepLink?null:function(e,t){const n=xo(0,t)
let r=null
const o=$a(e,t,FN),a=$a(e,t,aD)
if(o&&a&&(r=e.loc.string("SHARE_SHEET_TITLE_SUBTITLE_FORMAT","{title}: {subtitle}").replace(iR,o).replace(Fg,a)),!r&&o&&(r=o),!r&&a&&(r=a),!r&&n){const o=U(n,FN)
switch(U(t,hk)){case zC:r=e.loc.string("SHARE_SHEET_GAME_OF_DAY_TITLE_FORMAT").replace(iR,o)
break
case JC:r=e.loc.string("SHARE_SHEET_APP_OF_DAY_TITLE_FORMAT").replace(iR,o)}}const c=U(t,DN)
let u
switch(U(t,_k)){case pR:case Yv:case QI:u=Ve(e,"resource://ShareCollectionThumbnail",40,40)
break
default:u=null}const l=function(e,t,n,r,o,i){return $f.context("shareSheetDataForArticle",()=>{let r=o
!r&&i&&(r=function(e,t){const n=U(t,jD),r=tu(e,t)
return s(r)?r:du(e,x(t,nu(0,n,U(t,_k))))}(e,i))
const a=e.loc.string("SHARE_STORY_SUBTITLE"),c=new eL(t,a,r)
return new rL(c,n,null)})}(e,r,c,0,u,t)
if(!s(l))return null
const f=function(e,t){const n=[]
if(i(t)){const r=Ot(e,t)
s&&n.push(r)}return n}(e,c)
return new uF(l,f)}(e,r)
if(d){const t=function(e,t,n){if(t&&n){const e=t.items.length
if(e>0&&-1!==hV.indexOf(n)){const n=t.items[e-1]
switch(t.contentType){case oS:{const e=n
return e&&e.isFullWidth}case v_:{const e=n
return e&&e.isFullWidth}default:return!0}}}return!1}(0,f,n.module),r=function(e,t,n,r){if(!s(t))return null
Qe(e,t,{targetType:vN,id:n.pageId,actionType:lO,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker})
const o=new hM(lO,e.loc.string("SHARE_STORY"),!r,t),i=new CM("roundedButton")
return i.items=[o],i}(e,d,n,t)
r&&u.push(r)}const p=new cV(c,u,d)
return function(e,t,n,r){const o=xo(0,n)
if(o){const s=rt(0,n)
return void(t.footerLockup=function(e,t,n,r){return xi(e,t,{offerStyle:Mo(e),metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,externalDeepLinkUrl:r,crossLinkSubtitle:n.crossLinkSubtitle,artworkUseCase:0,canDisplayArcadeOfferButton:Ha(0,uN)})}(e,o,r,s))}const i=G(n,sS)
if(s(r.additionalData)&&i){const o=fo(e,n)
t.arcadeFooterLockup=function(e,t,n){return Hi(e,t,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},0,ID,null)}(e,o,r)}}(e,p,r,n),p.shouldTerminateOnClose=n.isResilientDeepLink,Mn(e,p,n.metricsPageInformation,e=>{let t=null==c?void 0:c.title
if((null==c?void 0:c.media)instanceof HM&&(null==c?void 0:c.overlay)instanceof eU&&(t=(null==c?void 0:c.overlay).lockup.title),!t)return
let n=l(w(e[sR]),ZD)
n=n||l(w(e[rR])),e[sR]=n?`${n}_${t}`:`unknown_${t}`}),p})}(e,t.originalData,r)}).then(e=>{const n=IV.createFlowAction(e,FD,t),r=new HL(AN)
return r.actions=[n],r}).then(c,u)}pageRoute(e){return[{protocol:kF,path:`/{countryCode}/${ZF}/{id}`,query:[`${q$}?`,"preview?"]},{protocol:kF,path:`/{countryCode}/${ZF}/{seoSlug}/{id}`,query:[`${q$}?`,"preview?"]},{protocol:kF,path:`/{countryCode}/${KF}/{id}`,query:[`${q$}?`,"preview?"]},{protocol:kF,path:`/{countryCode}/${KF}/{seoSlug}/{id}`,query:[`${q$}?`,"preview?"]},{protocol:kF,path:`/${KF}/{id}`,query:[`${q$}?`,"preview?"]},{protocol:kF,path:`/${KF}/{seoSlug}/{id}`,query:[`${q$}?`,"preview?"]},{protocol:kF,path:`/${FF}/viewEditorialItem`,query:[f$,`${q$}?`,"preview?"]},{protocol:kF,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/editorial-items/{id}",query:[f$,`${q$}?`,"preview?"]},{protocol:kF,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/editorial-items/{seoSlug}/{id}",query:[f$,`${q$}?`,"preview?"]},{protocol:kF,path:"{apiVersion}/editorial/{countryCode}/editorial-items/{id}",query:[f$,`${q$}?`,"preview?"]},{protocol:kF,path:"{apiVersion}/editorial/{countryCode}/editorial-items/{seoSlug}/{id}",query:[f$,`${q$}?`,"preview?"]},{protocol:kF,hostName:"spamBlockingExtensions"},{protocol:RF,path:`/${KF}/{id}`,query:[`${cx}?`,`${ax}?`]},{protocol:kF,hostName:"sharePlayApps"}]}pageType(){return FD}}(HW,WW)),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("TodayCardPreviewBuilder")}pageType(){return AN}handlePage(e,t,n,r,o,s,i){$f.context(`${this.builderClass}.pageHandler`,()=>{const r=t.build()
if(h(n[w$])){const o=this.generatePageRequest(e,t,n)
if(!o)return void i(new Error(`Could not construct media API request for: ${t}`))
o.attributingTo(r),lr(e,o,{}).then(t=>this.renderPage(e,t,n)).then(e=>IV.createFlowAction(e,this.pageType(),t)).then(s,i)}else{const r=this.renderPage(e,{data:[]},n),o=IV.createFlowAction(r,this.pageType(),t)
s(o)}})}pageRoute(e){return[{protocol:kF,path:`/${XF}`,query:[d$,`${w$}?`,"isTodaySection?","preview?"]}]}generatePageRequest(e,t,n){const r=l(t.query[d$])
if(!i(r))return null
const o=r.split(","),s=new xM(e).forType(iN).withIds(o).includingAdditionalPlatforms(v(e)).includingAttributes($H).includingRelationshipsForUpsell(!0)
pn(e)&&(s.enablingFeature(aN),s.includingScopedRelationships(PN,[gN]),s.includingScopedAttributes(PN,[mN,Fk,$k]))
const a=t.query.preview
return l$.has(t.host)&&i(a)&&(s.addingQuery(UE,a),s.isStorePreviewRequest=!0),s}renderPage(e,t,r){const o=e.loc.string(bm),i={title:o,label:cS,resourceTypes:[],meta:{},contents:b(t)},a=new xH
let c=!1
s(n(r,g$))&&(c=!u(r,g$))
const l=Wc(e,i,{hideTitle:!1,contentOffsetWithinModule:0,setTitleToDateForTodaySection:!0},a,c)
return new fU([l],null,o,o)}}),VW.registerPageBuilder(HW,new class extends IV{constructor(e,t){super("TopChartsBuilder"),t.exportingService("TopChartData",{fetchPage:async t=>await af(e,t.url),fetchMoreOfSegment:async t=>await cf(e,t.pageToken)})}pageRoute(e){return uf()}handlePage(e,t,n,r,s,a,c){const u=n[Z$]
t.removeParam(Z$)
let f=t.query[E$]||t.query[S$],d=n[m$]
o(d)&&(d=l(e.bag.defaultChart,"genre-id"),o(f)&&(f=l(e.bag.defaultChart,"chart-id")))
const p=vr(e,d,n[P$],n[I$]),h=_r(e,t)
Promise.all([p,h]).then(([n,r])=>{const o=cr(e,r),s=lf(e,n,t,o,f,d)
if(u&&i(s.segments)){const t=s.segments[0],n=t.nextPage,r=Me(0,n)
if(i(r)){const o=new xM(e,r)
return lr(e,o).then(r=>{const o=Ue(0,n)
o.ids=[],o.remainingContent=[],o.maxPerPage=0
const i=pf(e,r,n,o),a=t.shelves.concat(i.shelves),c=new bW(t.shortName,t.longName,t.chart,a)
return c.pageMetrics=t.pageMetrics,c.nextPage=null,s.segments[0]=c,s})}}return s}).then(e=>IV.createFlowAction(e,IC,t)).then(a,c)}pageType(){return IC}}(HW,WW)),VW.registerShelfBuilder(HW,new zG),VW.registerShelfBuilder(HW,new JG),VW.registerShelfBuilder(HW,new KG),VW.registerShelfBuilder(HW,new ZG),VW.registerShelfBuilder(HW,new XG),VW.registerShelfBuilder(HW,new QG),VW.registerShelfBuilder(HW,new eV),VW.registerShelfBuilder(HW,new tV),VW.registerShelfBuilder(HW,new nV),VW.registerShelfBuilder(HW,new rV),VW.registerShelfBuilder(HW,new oV),VW.registerShelfBuilder(HW,new wV),VW.registerShelfBuilder(HW,new gV),VW.registerShelfBuilder(HW,new mV),VW.registerShelfBuilder(HW,new yV),VW.registerShelfBuilder(HW,new bV),VW.registerShelfBuilder(HW,new RV),VW.registerShelfBuilder(HW,new kV),VW.registerPageBuilder(HW,new class extends IV{constructor(){super(og)}pageRoute(e){return[{protocol:RF,path:"onDeviceRecommendations",query:[B$,tx]}]}handlePage(e,t,n,r,o,s,i){const a=n.onDeviceRecommendationsUseCase
Yr(e,a,MN).then(r=>{const o=JSON.parse(n[tx]),i=new _V
i.title=o.title
const a=this.makePage(e,r.dataContainer,r.recoMetrics,i),c=new VL(yN,t.build())
c.pageData=a,s(c)}).catch(e=>{i(e)})}makePage(e,t,n,r){const o=no(e)
r.url=this.paginationUrl,r.metricsPageInformation=$n(e,ek,"onDevicePersonalizationSeeAll",t),r.metricsPageInformation.recoMetricsData=rc(n,null,o),r.shouldFilter=!1,r.metricsLocationTracker={rootPosition:0,locationStack:[]}
const s=new CM(vV),i={id:null,kind:null,softwareType:null,targetType:KD,title:r.title,pageInformation:r.metricsPageInformation,locationTracker:r.metricsLocationTracker,idType:fk,recoMetricsData:n}
cn(0,s,i),ic(i,r.title),s.isHorizontal=!1,s.shouldFilterApps=r.shouldFilter
const a=b(t)
r.remainingContent=[],s.items=Wi(e,a,{contentUnavailable:(e,t)=>(r.remainingContent=Be(0,a,t),!0),lockupOptions:{metricsOptions:{pageInformation:i.pageInformation,locationTracker:i.locationTracker},clientIdentifierOverride:r.clientIdentifierOverride,artworkUseCase:ea(0,s.contentType)}})
const c=new DM([s])
return c.title=r.title,r.remainingContent.length&&(c.nextPage=r),Mn(e,c,r.metricsPageInformation),c}handleShelf(e,t,n,r,o,s){s(new Error(sy))}shelfRoute(e){return[]}pageType(){return yN}}),VW.registerPageBuilder(HW,new Vj(HW,WW)),VW.registerPageBuilder(HW,new class extends SV{constructor(e,t){super("ArcadeSeeAllGamesPageBuilder"),this.pageSize=20,t.exportingService(QC,{fetchArcadeSeeAllGames:async t=>await Gu(e,t),fetchMoreArcadeSeeAllGames:async t=>await Vu(e,t.pageToken)})}defaultPlatforms(e){return v(e)}defaultAttributes(e){const t=[cN,sN,zk,oD,vR,ZR,pb]
return e.appleSilicon.isSupportEnabled&&t.push(PD),t}defaultTab(e){return ON}pageType(){return Yb}pageRoute(e){return[{identifier:Yb,path:`/${GF}`,query:[`${nx}?`,`${X$}?`,`${rx}?`,`${ox}?`,`${sx}?`,`${ix}?`]},{identifier:Yb,hostName:"arcadeSeeAllGames",query:[`${nx}?`,`${X$}?`,`${rx}?`,`${ox}?`,`${sx}?`,`${ix}?`]}]}paginationRoute(e){return[{identifier:Yb,protocol:RF,path:`/${GF}/arcadeSeeAllGamesLoadMore`}]}shelfRoute(e){return[{protocol:RF,path:`/${GF}/${LF}/`,query:[`${tx}`]}]}generatePageRequest(e,t,n){return $f.context("generatePageRequest",()=>{const t=Wu(e,n)
let r=co(e).includingAdditionalPlatforms(v(e)).includingRelationships([]).withSparseLimit(10).includingAttributes(Bu(e)).usingCustomAttributes(ne(e))
const o=i(t.selectedFacetOptions)?t.selectedFacetOptions:Mu(e)
let s=!1
for(const e of Object.keys(o))if(e===Tj&&i(o[e])){const t=o.groupBy
if(i(t))switch(t[0].value){case hj:case wj:o[e][0].value="comingSoonGrouping"
break
case gj:o[e][0].value=Aj
break
case mj:o[e][0].value=Aj,s=!0}}s&&(r=r.withSparseCount(4))
for(const e of Object.keys(o)){const t=pj.requestValuesForSelectedFacetOptions(o[e])
if(i(t)){i(t.value)&&r.addingQuery(e,t.value)
for(const e of Object.keys(t.additionalKeyValuePairs))r.addingQuery(e,t.additionalKeyValuePairs[e])}}return r})}renderPage(e,t,n,o){return $f.context(rk,()=>{const o=p(t),s=Wu(e,n),a=$n(e,ek,Yb,o),u={url:Ox.fromComponents(RF,null,`/${GF}/arcadeSeeAllGamesLoadMore`).build(),metricsPageInformation:a,metricsLocationTracker:{rootPosition:0,locationStack:[]},remainingGroups:[],lastShelfIndex:0,isCompactMode:s.isCompactMode},l=new $M(Hu(e,c(o,"results.groups"),u))
l.title=e.loc.string(Wm),l.pageFacets=function(e){xu(e)
const t=e.loc.string("PAGE_FACETS_FILTERS_AGE_RATINGS"),n=new fj(Qd,t,fb,null,[Cj,Oj,bj,Rj],[Cj],"age",Uu(e,Nk)),r=new fj(yj,e.loc.string(op),fb,null,[Ij,Sj,vj,_j],null,Nk,Uu(e,Nk)),o=e.loc.string(np),s=new fj(ep,o,SE,null,[kj],null,sp,Uu(e,"controllerSupportFacetOption")),i=e.loc.string("PAGE_FACETS_FILTERS_MULTIPLAYER_GAMES"),a=new fj(tp,i,SE,null,[Dj],null,ip,Uu(e,"multiplayerSupportFacetOption")),c=new fj(Tj,e.loc.string(rp),SE,null,[Nj],[Nj],vE,Uu(e,vE)),u=new pj([],!1,null)
switch(e.client.deviceType){case $N:u.facetGroups.push(new dj([n])),e.bag.enableComingSoonToggle&&u.facetGroups.push(new dj([c],e.loc.string(ap))),u.facetGroups.push(new dj([s,a],e.loc.string("PAGE_FACETS_SUPPORTS_TITLE"))),u.facetGroups.push(new dj([r]))
break
case"tv":u.facetGroups.push(new dj([n],e.loc.string("PAGE_FACETS_AGE_RATINGS_TITLE_LOWERCASE")))
const t=[s,a]
e.bag.enableComingSoonToggle&&t.push(c),u.facetGroups.push(new dj(t,e.loc.string("PAGE_FACETS_FILTERS_TITLE"))),u.facetGroups.push(new dj([r],e.loc.string("PAGE_FACETS_SORT_BY_TITLE_LOWERCASE")))
break
default:r.displayOptionsInline=!0,u.facetGroups.push(new dj([r],e.loc.string(op))),n.showsSelectedOptions=!0
const o="PAGE_FACETS_FILTER_BY_TITLE",i="PAGE_FACETS_FILTER_BY_TITLE_WITH_COLON"
let l=e.loc.string(o)
l===o&&(l=e.loc.string(i)),u.facetGroups.push(new dj([s,a,n],l)),e.bag.enableComingSoonToggle&&u.facetGroups.push(new dj([c],e.loc.string(ap)))}return u}(e),l.selectedFacetOptions=i(s.selectedFacetOptions)?s.selectedFacetOptions:Mu(e),Mn(e,l,a)
const f=l.pageMetrics.instructions
if(!r(f))for(const e of f)e.data.includingFields.push(ow)
return u.remainingGroups.length>0&&(l.nextPage=u),l})}generatePaginationRequest(e,t,n,r){const o=p(r)
let s=[],i=20,a=!0
for(const e of o.remainingGroups)a=a&&(e.data.length<i||0===s.length),a&&(s=s.concat(e.data),i-=e.data.length)
return new xM(e,s).includingAdditionalPlatforms(v(e)).includingAttributes(Bu(e)).usingCustomAttributes(ne(e))}renderPaginatedPage(e,t,n){const r=p(n),o=[]
let s=20
const a={}
for(const e of t.data)a[e.id]=e
let c=!0
for(const e of r.remainingGroups){if(c=c&&(e.data.length<s||0===o.length),c){for(let t=0;t<e.data.length;t++){const n=a[e.data[t].id]
i(n)&&(e.data[t]=n)}s-=e.data.length}o.push(e)}r.remainingGroups=[]
const u=Hu(e,o,r),l=new $M(u)
return l.title=e.loc.string(Wm),r.remainingGroups.length>0&&(l.nextPage=r),l}generateShelfRequest(e,t,n){const r=p(JSON.parse(n[qD])).remainingContent.slice(0,20),o=new xM(e,r).includingAdditionalPlatforms(v(e)).includingAttributes(Bu(e)).usingCustomAttributes(ne(e))
return fe(e,o,r),o}renderShelf(e,t,n){const r=p(JSON.parse(n[qD]))
return r.remainingContent=t.data.concat(r.remainingContent.slice(20,r.remainingContent.length)),r.isFirstRender=!1,ju(e,r)}}(HW,WW)),VW.registerPageBuilder(HW,new class extends IV{constructor(e,t){super("MarketingItemUpsellBuilder"),t.exportingService(QC,{fetchUpsellGrid:async t=>await Qu(e,t.contentDictionary)})}pageType(){return zR}pageRoute(e){return[{hostName:"arcadeSubscribePage",query:[`${K$}?`,"context?",`${ex}?`],exclusions:[{query:["askToBuyId"]}]},{path:"arcade/subscribe",query:[`${K$}?`,"context?",`${ex}?`]},{path:"{countryCode}/arcade/subscribe",query:[`${K$}?`,"context?",`${ex}?`]}]}handlePage(e,t,n,r,o,s,i){const a=function(e){var t
switch(e){case ud:return ld
case"generic":return gR
case fd:return DS
case dd:return BA
case iD:return rO
case"topShelfATV":return"arcadeTopShelfATV"
case"topShelfATVClickThrough":return"arcadeTopShelfATVClickThrough"
case oO:return"arcadeTodayCard"
case"editorialItemCanvas":return NS
case LS:return LS
case V_:return V_
case GA:return GA
default:return null!==(t=e)&&void 0!==t?t:gR}}(l(n,C$)),c=l(n,K$),u=new rB(ON,a,c),f=new VL(zR)
f.pageData=u,f.referrerUrl=t.build(),s(f)}}(HW,WW)),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("ArcadeOfferRedirectHandler")}pageType(){return FD}defaultTab(e){return ON}pageRoute(e){return[{path:"arcade/offers",query:["offerHints?"]},{path:"/{countryCode}/arcade/offers",query:["offerHints?"]}]}handlePage(e,t,n,r,o,s,i){var a
const c=null!==(a=n.offerHints)&&void 0!==a?a:"deeplink_hardware_firstchance",u=new rB(ON,gR,null,{offerHints:c})
u.offerHints=c
const l=new VL(zR)
l.pageData=u,l.referrerUrl=t.build(),s(l)}}),VW.registerPageBuilder(HW,new Uj(HW,WW)),VW.registerPageBuilder(HW,new class extends IV{constructor(e,t){super("ArcadeWelcomeBuilder"),t.exportingService(QC,{fetchArcadeWelcomePage:async t=>await Xu(e,t.url)})}pageType(){return"arcadeWelcome"}handlePage(e,t,n,r,o,s,i){const a=this.generatePage(e,n,r)
s(IV.createFlowAction(a,this.pageType(),t))}pageRoute(e){return[{hostName:"arcadeWelcomePage",query:["context?"]}]}generatePage(e,t,n){return function(e,t){return function(e,t){const n={rootPosition:0,locationStack:[]},r=function(e,t){if(st(t)){const t=new hF
return t.title=e.loc.string("ARCADE_WELCOME_TV_CONTINUE_BUTTON"),t}return Zu(0,e.loc.string("ARCADE_WELCOME_CONTINUE_BUTTON"))}(e,t)
Qe(e,r,{id:"arcade-welcome-continue",actionType:QD,pageInformation:new kH,locationTracker:n,targetType:vN})
const o=function(e,t){return st(t)?Zu(0,e.loc.string(OE)):null}(e,t)
o&&Qe(e,o,{id:"arcade-welcome-create-family",actionType:QD,pageInformation:new kH,locationTracker:n,targetType:vN})
let s=Hj,i="oe"
e.client.isPad&&(s=jj,i="og")
const a=new tB(e.loc.string("ARCADE_WELCOME_INDIVIDUAL_TITLE"),e.loc.string("AppStore.Arcade.Welcome.Family.Description"),[new eB(null,null,ta(e,s,{useCase:23,cropCode:i}))],r,o)
if(st(t)){a.nonDismissingContinueAction=Zu(0,e.loc.string(OE)),r.title=a.nonDismissingContinueAction.title
const t=new hF
t.title=e.loc.string(up),a.dismissingFamilyAction=t,o.title=a.dismissingFamilyAction.title}else a.nonDismissingContinueAction=Zu(0,e.loc.string(OE)),r.title=a.nonDismissingContinueAction.title
return new nB(a,a)}(e,t)}(e,t.context)}}(HW,WW)),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("FamilyCircleBuilder")}pageType(){return _N}defaultTab(e){return ON}handlePage(e,t,n,r,o,s,i){var a
const c=new HL(ON),u=null!==(a=t.query[Wk])&&void 0!==a?a:Ld,l=new pF(WR,u,t.query)
c.actions.push(l),s(c)}pageRoute(e){return[{hostName:"familyCircle"},{path:"familyCircle"}]}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("AppClipSubscribeBuilder")}pageType(){return _N}handlePage(e,t,n,r,o,i,a){const c=l(n[K$])
s(c)||a(new Error(`No adamId supplied in appClipSubscribe url: ${t}`))
const u=new xM(e).withIds([c]).forType(NN).includingAdditionalPlatforms(v(e))
lr(e,u).then(t=>{const n=O(t),r={metricsOptions:{pageInformation:new kH({}),locationTracker:{rootPosition:0,locationStack:[]}},artworkUseCase:null},o=xi(e,n,r),s=(new Ox).set(Ek,DF).set(hR,JO).path(WF).path(c).build(),a=new VL(pD)
a.pageUrl=s
const u=io(e,"arcadeGeneric",c,o.buttonAction),l=new HL(ON)
l.actions=[a,u],i(l)},a)}pageRoute(e){return[{hostName:"appClipSubscribe",query:[K$,C$]}]}}),VW.registerPageBuilder(HW,new class extends Bj{constructor(){super("GroupingPageBuilder")}defaultPlatforms(e){return v(e)}defaultAttributes(e){const t=[cN,zk,oD,xv]
return e.appleSilicon.isSupportEnabled&&t.push(PD),t}prepareRequest(e,t,n,r){super.prepareRequest(e,t,n,r)}pageType(){return yN}pageRoute(e){return[{protocol:kF,path:`/${FF}/${MF}`,query:[f$,"context?"]},{hostName:s$,path:`/WebObjects/{storePreviewInstance}/wa/${MF}`,query:[f$,"useReleaseId?"]},{protocol:kF,path:`/{countryCode}/${VF}/{genreName}/{id}`},{protocol:kF,path:`/${FF}/viewGenre`,query:[f$]},{hostName:s$,path:"/WebObjects/{storePreviewInstance}/wa/viewGenre",query:[f$,"useReleaseId?"]},{protocol:kF,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}"},{protocol:kF,path:"{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}"},{protocol:kF,path:"{apiVersion}/editorial/{countryCode}/groupings/{id}"},{protocol:kF,hostName:"safariExtensions"}]}generatePageRequest(e,t,n){let r,o,c=t.query.id
if("safariExtensions"===t.host&&i(e.bag.safariExtensionsGroupingURL)){const t=Ox.from(e.bag.safariExtensionsGroupingURL)
s(t)&&(c=Tr(t))}const u=t.pathComponents()
if(-1!==u.indexOf("viewGenre")?r=c:-1!==u.indexOf(ED)?r=Tr(t):o=c,!a(o)&&!a(r))throw new Error(`Unable to map ${t.build()} to a media api url`)
const l=[cN,sN,zk,oD,pb,mC]
e.appleSilicon.isSupportEnabled&&l.push(PD)
let f=new xM(e).forType(Hk).includingAttributes(l).includingRelationshipsForUpsell(!0).includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes(ne(e))
pn(e)&&(f.enablingFeature(aN),f.includingMetaKeys(kP,[$O,DP]),f.includingScopedAttributes(PN,[mN,Fk,$k]),f.includingScopedRelationships(PN,[gN]))
const d=t.query.context||C(e)
s(d)&&f.addingQuery(zb,d),a(o)?f=f.withIds([o]):a(r)&&(f=f.addingQuery(ED,r))
const p=t.query.useReleaseId
return t.host===s$&&i(p)&&(f.isStorePreviewRequest=!0,f=f.addingQuery(zm,p)),f.enablingFeature(hS),f.attributingTo(t.build())}renderGroupingPage(e,t,n,o,s,i,a){return $f.context(uh,()=>{if(n.pageGenreId=V(t.originalGroupingData,ED)||(r(o=U(t.originalGroupingData,"chartUrl"))?null:f(Ox.from(o).query,ED)),fs(e,t,n),"tv"!==e.client.deviceType){const t=ps(e,n.metricsPageInformation,n.metricsLocationTracker)
t&&n.shelves.push(t)}var o
if(e.client.deviceType!==xN&&"tv"!==e.client.deviceType){const t=e.bag.termsAndConditionsURL
if(!r(t)){const r=hs(e,t)
n.shelves.push(r)}}const s=this.groupingPageTitleForData(e,t.originalGroupingData,n.pageGenreId),i=new DM(n.shelves)
switch(e.client.deviceType){case"tv":i.title=s
break
case xN:i.title=s,i.presentationOptions=[gS]
break
default:i.title=s,39===n.pageGenreId||(n.pageGenreId,0)?i.presentationOptions=["prefersRevealNavigationBarOnMouseOver"]:i.presentationOptions=[gS]}return i.pageRefreshPolicy=tr(e,null==n?void 0:n.refreshController),Mn(e,i,n.metricsPageInformation),this.insertUnifiedMessageShelves(e,i,n.pageGenreId),Ju(i),i})}groupingPageTitleForData(e,t,n){let r=null
switch(n){case 36:r=e.host.clientIdentifier===mL&&e.client.deviceType!==xN?e.loc.string("GROUPING_APPS"):e.loc.string("GROUPING_APP_STORE","App Store")
break
case 39:r=e.loc.string(oy)
break
default:r=Zi(0,t)}return r}macDiscoverPageTitleForData(e,t){const n=pe(t,ER)
if(s(n)&&s(n.data))for(const e of n.data){const t=U(e,FN),n=V(e,sk),r=U(e,qD)
if(i(t)&&s(n)&&i(r)&&r===Ak&&414===n)return t}return e.loc.string(oy)}shelfForHeaderButtons(e){const t=new CM(qk),n=[],r=new VL(MD)
return r.title=e.loc.string("SEARCH",LR),r.artwork=Ve(e,vP),n.push(r),t.items=n,t}insertUnifiedMessageShelves(e,t,n){if(!(t.shelves.length<=0))switch(n){case 36:t.shelves.splice(0,0,ws(0,"appsPageHeader")),t.shelves.splice(6,0,ws(0,"appsPageMid")),t.shelves.push(ws(0,"appsPageFooter"))
break
case 6014:t.shelves.splice(0,0,ws(0,"gamesPageHeader")),t.shelves.splice(6,0,ws(0,"gamesPageMid")),t.shelves.push(ws(0,"gamesPageFooter"))}}}),VW.registerPageBuilder(HW,new class extends wW{constructor(){super("ProductBuilderNative")}pageType(){return pD}pageRoute(e){return[]}shelfRoute(e){return[{protocol:RF,path:`/${WF}/${LF}`,query:[L$,tx]},{protocol:RF,path:`/${WF}/${LF}`,query:["isGameCenterPlayerRibbonItem"]},{protocol:RF,path:`/${WF}/${LF}`,query:[F$,tx]}]}async renderShelf(e,t,n){return await new Promise(r=>{if(t.query[L$]){const o=t.query[f$],s=e.gameCenter.fetchFriendsThatPlayGame(o),i=n[tx],a=JSON.parse(i)
s.then(t=>{const n=Xs(e,t,!0,a)
r(n)}).catch(e=>{throw e})}else if(t.query.isGameCenterPlayerRibbonItem){const n=t.query[f$]
e.gameCenter.fetchFriendsThatPlayGame(n).then(t=>{const n=Xs(e,t,!1)
r(n)}).catch(e=>{throw e})}else if(t.query[F$]){const o=t.query[T$]
e.gameCenter.fetchAchievementSummaryForGame(o).then(t=>{const o=t
let s=null
if(o.length>0){const t=new TF(o[0].bundleId),n=e.loc.string("PRODUCT_ACHIEVEMENT_SUMMARY_COMPLETED","Completed"),r=o[0].achievements
let i=null
const a=r.filter(e=>e.status.type===Ah)
if(a.length>0&&(i=a[0]),null===i){const e=r.filter(e=>e.status.type===Th||e.status.type===yh)
e.sort((e,t)=>t.status.percent-e.status.percent),e.length>0&&(i=e[0])}null!==i&&(s=new lL(o[0].bundleId,o[0].completedAchievements,o[0].totalAchievements,n,t,[i]))}const i=n[tx],a=JSON.parse(i),c=function(e,t,n){const r=new CM(xg)
if(r.isHorizontal=!0,t){const o={pageInformation:n.destinationPageInformation,locationTracker:n.sourceLocationTracker,kind:YD,title:$g,id:"achievements_summary",idType:PR,softwareType:null,targetType:YD,badges:{gameCenter:{}}}
cn(0,r,o),Qe(e,t.action,o),r.items=[t]}return r.mergeWhenFetched=!0,r.batchGroup=lk,r.isHidden=0===r.items.length,r}(e,s,a)
r(c)}).catch(e=>{throw e})}else r(super.renderShelf(e,t,n))})}}),VW.registerPageBuilder(HW,new class extends wW{constructor(){super("ProductPageShelfWithAdController")}pageType(){return pD}pageRoute(e){return[]}shelfRoute(e){return[{protocol:RF,path:`/${WF}/${LF}/{token}`,query:[fx,dx]}]}async renderShelf(e,t,n){const r=n[dx],o=t.query[f$],s=Sl(e,r,o).catch(()=>null),i=_u(e,0,n)
i.attributingTo(t.build())
const a=lr(e,i)
return await Promise.all([a,s]).then(([t,r])=>Cu(e,t,n,r,!0))}}),VW.registerPageBuilder(HW,new class extends wW{constructor(){super("ProductPageSimilarItemsShelfRefreshController")}pageType(){return pD}pageRoute(e){return[]}shelfRoute(e){return[{protocol:RF,path:`/${WF}/${LF}/{token}`,query:[`${px}=${Sx}`]}]}async renderShelf(e,t,n){const r=t.query[f$]
let o=Promise.resolve(null),s=!1
s=mc(e,UD),s&&(o=Sl(e,UD,r).catch(()=>null))
const i=function(e,t){const n=[cN,sN,kD]
return new xM(e).forType(F_).withIds([t]).enablingFeature(DR).includingAdditionalPlatforms(v(e)).includingAttributes(n).enablingFeature(yv)}(e,r)
i.attributingTo(t.build())
const a=lr(e,i).catch(async()=>{const r=_u(e,0,n)
return r.attributingTo(t.build()),await lr(e,r)})
return await Promise.all([a,o]).then(([t,r])=>Cu(e,t,n,r,s))}}),VW.registerPageBuilder(HW,new hW(HW,WW)),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("ProductInAppPurchaseBuilder")}handlePage(e,t,n,r,o,s,i){const a=n[mx],c=new Ox(a),u=Ar(e,c),l={},f=n[yx]===SD
l.spotlightSection=en(f),l.spotlightInAppProductIdentifier=n[A$],lr(e,u).then(n=>{const r=Ei(e,n,l)
return IV.createFlowAction(r,pD,t)}).then(s,i)}pageRoute(e){return[{protocol:RF,path:`/${WF}/${$F}`,query:[mx,A$,yx]}]}pageType(){return pD}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("ReviewsAdapterBuilder")}handlePage(e,t,n,r,o,s,i){const a=Ar(e,t)
lr(e,a).then(n=>{const r=Ei(e,n)
let o,s
if(Ai(e)){const e=r
o=e.shelfMapping[TD],s=1===e.appPlatforms.length&&"tv"===e.appPlatforms[0]}else{const e=r
o=e.shelfMapping[RN],s=1===e.appPlatforms.length&&"tv"===e.appPlatforms[0]}const i=IV.createFlowAction(r,pD,t)
let a=null
return o&&o.seeAllAction&&!s&&(a=o.seeAllAction,a.animationBehavior=AD),a?(i.animationBehavior=AD,new qL([i,a])):i}).then(s,i)}pageRoute(e){return[{protocol:kF,path:`/{countryCode}/${WF}/{appName}/{id}`,hash:Ix},{protocol:kF,path:`/${FF}/viewContentsUserReviews`,query:[f$]}]}handlePagination(e,t,n,r,o,s,i){const a=n[Ax],u=n[Ex],l=c(o.remainingContent),f=new xM(e,o.nextHref).includingAdditionalPlatforms(v(e)).addingQuery(Nk,u)
lr(e,f,{}).then(t=>Jt(e,e.client.guid,a,l,t,!1,u)).then(s,i)}paginationRoute(e){return[{protocol:RF,path:`/${JF}/${LF}/{adamId}/{sort}`}]}pageType(){return pD}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("SortedReviewsBuilder")}handlePage(e,t,n,r,o,s,i){const a=n[Ax],c=n[Ex],u=new xM(e).forType($_).withIds([a]).includingAdditionalPlatforms(v(e)).addingQuery(Nk,c)
lr(e,u,{}).then(t=>Jt(e,e.client.guid,a,[],t,!0,c)).then(e=>IV.createFlowAction(e,RN,t)).then(s,i)}pageRoute(e){return[{protocol:RF,path:`/${JF}/{adamId}/{sort}`}]}pageType(){return RN}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("PersonalizedReviewsBuilder")}handlePage(e,t,n,r,o,s,i){i(new Error("PersonalizedReviewsBuilder:handlePage not implemented"))}pageRoute(e){return[]}handleShelf(e,t,n,r,o,s){const i=n[qD],a=JSON.parse(i),c=new xM(e).forType(RN).withIds([a.adamId])
lr(e,c).then(t=>qt(e,e.client.guid,a,t)).catch(()=>qt(e,e.client.guid,a)).then(o,s)}shelfRoute(e){return[{protocol:RF,path:`/personalizedReviews/${LF}/{token}`}]}pageType(){return _N}}),VW.registerPageBuilder(HW,new class extends SV{constructor(){super("EulaBuilder")}defaultPlatforms(e){return v(e)}generatePageRequest(e,t,n){const o=t.query.resourceId,s=t.query.resourceType
if(r(o)||r(s))throw new Error(`Unable to map ${t.build()} to a media api url`)
const i=new xM(e).forType(Rb).withIds([o])
return i.targetResourceType=s,i}pageRoute(e){return[{protocol:RF,path:`${r$}`}]}pageType(){return yN}renderPage(e,t,n,r){return $f.context(rk,()=>{const n=l(t,"results.eula.text").split(/\n{1,2}/),r=[]
for(const e of n){const t=new iL(e)
t.wantsCollapsedNewlines=!1,t.suppressVerticalMargins=!0,r.push(t)}const o=new CM(VR)
o.isHorizontal=!1,o.items=r
const s=new DM([o])
return s.title=e.loc.string(I_),s})}}),VW.registerPageBuilder(HW,new class extends SV{constructor(){super("PrivacyDetailBuilder")}defaultPlatforms(e){return v(e)}pageType(){return EI}pageRoute(e){return[{protocol:RF,path:`${o$}/${WF}/{id}`,query:["privacyTypeId?"]},{protocol:RF,path:`${o$}/${YF}/{id}`,query:["privacyTypeId?"]}]}generatePageRequest(e,t,n){const r=Tr(t)
if(!i(r))throw new Error(`Unable to map ${t.build()} to a media api url. Missing id.`)
let o=NN
const s=[w_,Vk,iC]
return-1!==t.pathname.indexOf(YF)&&(o=TN),new xM(e).forType(o).withIds([r]).addingQuery(HS,s.join(","))}renderPage(e,t,n,i){return $f.context(rk,()=>{const i=n.privacyTypeId
return function(e,t,n){return $f.context("privacyDetailPageFromResponse",()=>{const i=O(t)
if(o(i))return null
const a=$n(e,"PrivacyDetails",i.id,t),c={rootPosition:0,locationStack:[]}
let u=[]
if(!Is(e)){const t=function(e,t,n,r){const o=new CM(oN)
o.isHorizontal=!1
const s=Ss(e,t,!0,!0,n,r)
return o.items=[s],o}(e,i,a,c)
s(t)&&u.push(t)}const l=function(e,t,n,i,a){const c=x(t,w_)
if(o(c))return[]
const u=gs(e,c,t,tk,!0,n,i)
if(0===u.length)return[]
const l=[]
for(const t of u)if(r(a)||t.identifier===a||e.client.deviceType!==xN){const e=new CM(g_)
t.wantsScrollFocus=s(t.identifier)&&t.identifier===a,e.items=[t],e.presentationHints={isSingleDensity:!0},l.push(e)
for(const e of t.purposes){const t=new CM("privacyCategory")
t.title=e.title,t.items=e.categories,l.push(t)}}return l}(e,i,a,c,n)
u=u.concat(l)
const f=new DM(u)
return f.title=e.loc.string(MC),Mn(e,f,a),f})}(e,t,i)})}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("SearchLandingPageBuilder")}pageRoute(e){return[{protocol:RF,path:"searchLandingPage"}]}pageType(){return yN}handlePage(e,t,n,r,o,s,i){$f.context(`${this.builderClass}.handlePage`,()=>{this.fetchPage(e).then(e=>{s(IV.createFlowAction(e,this.pageType(),t))}).catch(i)})}async fetchPage(e){const t=mc(e,Lk)?Sl(e,Lk).catch(()=>null):null
return await this.fetchSearchLandingPage(e,t).catch(async n=>await this.fetchTrendingSearchesFallbackPage(e,t))}async fetchTrendingSearchesFallbackPage(e,t){const n={url:e.bag.trendingSearchesURL},r=e.network.fetch(n).then(e=>{if(!e.ok)throw Error(`Bad Status code ${e.status} for ${n.url}`)
return JSON.parse(e.body)})
return await Promise.all([r,t]).then(([t,n])=>{var r
const o=new LM(this.trendingSearchesShelvesForResponse(e,t)),s=xn(e,FC,_b,"")
return s.iAdInfo=Pc(e,Lk,n),null===(r=s.iAdInfo)||void 0===r||r.setMissedOpportunity(e,"SLPLOAD",Lk),Mn(e,o,s),o})}async fetchSearchLandingPage(e,t){let n=new xM(e).forType(M_).includingAdditionalPlatforms(v(e)).usingCustomAttributes(ne(e))
n.targetResourceType=Hk
const r=this.shouldUseV2Protocol(e)
r&&(n=new xM(e).forType(SS).includingAdditionalPlatforms(v(e)).usingCustomAttributes(ne(e)).includingScopedRelationships("search-recommendations",[kN]).addingQuery(FN,JS))
const s=function(e,t){return o(t)?null:function(e,t){const n=is(t)
return e.storage.retrieveString(n)}(e,t)}(e,e.user.dsid)
i(s)&&n.addingQuery("clusterId",s)
const a=lr(e,n)
return await Promise.all([a,t]).then(([t,n])=>r?this.newLandingPageFromResponse(e,t,n):this.landingPageFromResponse(e,t,n))}newLandingPageFromResponse(e,t,n){if(o(t.data))return null
const r=$n(e,FC,FC,t),s=no(e)
r.recoMetricsData=rc(r.recoMetricsData,null,s),r.iAdInfo=Pc(e,Lk,n)
const i=Oc(0,r.iAdInfo)
kc(e,i,n)
const a={shelves:[],metricsLocationTracker:{rootPosition:0,locationStack:[]},metricsPageInformation:r,adStitcher:Zo(0,n),adIncidentRecorder:i,pageType:Yf.Landing}
!function(e,t,n){const r=t.data
if(!o(r))for(const t of r){if(o(t))continue
const r=U(t,"contentKind"),s=Jl(0,t,r),i=nf(0,t,s,n,r)
ic(i.metricsOptions,s.title)
const a=Ql(e,t,n,i,s,r)
cc(n.metricsLocationTracker),o(a)||(cn(0,a,i.metricsOptions),n.shelves.push(a),dc(n.metricsLocationTracker))}}(e,t,a)
const c=new LM(a.shelves),u=new SG(fy,e.bag.searchLandingPageRefreshUpdateDelayInterval,e.bag.searchLandingPageOffscreenRefreshInterval,null)
return c.pageRefreshPolicy=u,c.adIncidents=bc(0,a.adIncidentRecorder),Mn(e,c,a.metricsPageInformation),c}landingPageFromResponse(e,t,n){const r=c(t,dy)[0]
if(o(r))return null
if(!de(r,ER))return null
const i=U(r,"id"),a=$n(e,hP,r.id,t),u=no(e)
a.recoMetricsData=rc(a.recoMetricsData,null,u),a.iAdInfo=Pc(e,Lk,n)
const l=Oc(0,a.iAdInfo)
kc(e,l,n)
const f={shelves:[],metricsPageInformation:a,metricsLocationTracker:{rootPosition:0,locationStack:[]},pageGenreAdamId:i,pageGenreId:V(r,ED),hasAuthenticatedUser:s(e.user.dsid),isSearchLandingPage:!0,adStitcher:Zo(0,n),adIncidentRecorder:l}
fs(e,ds(0,r),f)
const d=new LM(f.shelves),p=new SG(fy,e.bag.searchLandingPageRefreshUpdateDelayInterval,e.bag.searchLandingPageOffscreenRefreshInterval,null)
return d.pageRefreshPolicy=p,d.adIncidents=bc(0,f.adIncidentRecorder),Mn(e,d,f.metricsPageInformation),d}shouldUseV2Protocol(e){return!!e.props.enabled("searchLandingPageV2Protocol")&&(!!function(e){return!!function(e){return r(PW)&&(PW=(e.client.isPhone||e.client.isPad)&&e.searchLanding.areOverridesEnabled()),PW}(e)&&e.searchLanding.shouldSearchLandingPageUseV2Endpoint()}(e)||function(){if(e.bag.supportsSearchLandingPageV2){const t=e.bag.searchLandingPageV2RolloutRate
return Go(e,t)}return!1}()||!!e.bag.enableSearchLandingPageV2ByTreatment&&function(e){const t=function(e){const t=Bf.Qo(e.cookieProvider,IW)
return null===t?0:t}(e)
return 1===t}(e))}trendingSearchesShelvesForResponse(e,t){return $f.context("trendingSearchesShelfForResponse",()=>{const n={rootPosition:0,locationStack:[]},r=c(t,"trendingSearches").map(t=>{const r=l(t,RD),o=new aG(r,r,l(t,DN),_b)
return e.client.isPhone&&(o.artwork=Ve(e,vP)),nt(e,o,vN,n),dc(n),new wF(o)})
let o=0
switch(e.client.deviceType){case EN:o=10
break
case CN:o=7}const s=new CM(qk)
return s.title=r.length>0?l(t,"header.label"):null,s.isHorizontal=!1,s.items=r.slice(0,o),[s]})}}),VW.registerPageBuilder(HW,new class extends IV{constructor(e,t){super("SearchChartsAndCategoriesPageBuilder"),t.exportingService(tO,{async fetchSearchChartsAndCategoriesPage(t){const n=new xM(e,t.url).forType(x_).includingScopedRelationships(ly,[kN]).enablingFeatures([DR,IS]).addingQuery(wx,JS),r=lr(e,n)
return await r.then(t=>Zl(e,t))}})}pageType(){return KI}pageRoute(e){return[{path:"/{apiVersion}/recommendations/{countryCode}/search-recommendations/{search-recommendations-id}"}]}handlePage(e,t,n,r,o,s,i){$f.context(`${this.builderClass}.handlePage`,()=>{const n=new xM(e,t.toString()).forType(x_).includingScopedRelationships(ly,[kN]).enablingFeature(DR).enablingFeature(IS).addingQuery(wx,JS)
this.fetchCategoriesAndChartsPage(e,n).then(e=>{s(IV.createFlowAction(e,this.pageType(),t))}).catch(i)})}async fetchCategoriesAndChartsPage(e,t){const n=lr(e,t)
return await n.then(t=>Zl(e,t))}}(HW,WW)),VW.registerPageBuilder(HW,new class extends IV{constructor(e,t){super("SearchResultsBuilder"),t.exportingService(tO,{fetchResults:async t=>await async function(e,t){const n=ol(e,t)
return null===n?await Promise.resolve(Gl(e,t.facets)):await n.then(async t=>await async function(e,t){return await Hl(e,t)}(e,t))}(e,t),fetchMoreResults:async t=>await async function(e,t){return await async function(e,t){return await $f.context("paginatedSearchResultsWithToken",async()=>{const n=Ul(0,t),r=Bl(0,t)
return 0===n.length?await Promise.resolve(Gl(e)):await sl(e,n).then(async n=>{const o=b(n)
return await xl(e,t.requestMetadata,t.responseMetadata,t.metricsOptions,o).then(e=>{const t=new tG
return t.results=e.builtSearchResults,t.nextPage=r,t})})})}(e,t)}(e,t.pageToken),fetchSearchResultsPage:async t=>await rf(e,t),fetchMoreOfSearchResultsPage:async t=>await of(e,t.pageToken)})}handlePage(e,t,n,r,o,s,i){i(new Error(Qk))}pageRoute(e){return[]}pageType(){return _N}}(HW,WW)),VW.registerPageBuilder(HW,new class extends IV{constructor(e,t){super("SearchHintsBuilder"),t.exportingService(tO,{fetchHints:async t=>await jl(e,t.term)})}handlePage(e,t,n,r,o,s,i){i(new Error(Qk))}pageRoute(e){return[]}pageType(){return _N}}(HW,WW)),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("DeveloperBuilder")}handlePage(e,t,n,r,o,s,i){const c=function(e,t){const n=Tr(t)
if(!a(n))throw new Error(`Unable to map ${t.build()} to a media api url`)
return new xM(e).forType(_R).withIds([n]).includingAdditionalPlatforms(v(e)).includingRelationships(Pr(e)).includingAttributes(Er(e)).includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes(ne(e)).attributingTo(t.build())}(e,t)
lr(e,c).then(t=>cl(e,t)).then(e=>IV.createFlowAction(e,yN,t)).then(s,i)}pageRoute(e){return[{protocol:kF,path:`/${zF}/{id}`},{protocol:kF,path:`/${zF}/{developerName}/{id}`},{protocol:kF,path:`/{countryCode}/${zF}/{developerName}/{id}`},{protocol:kF,path:"/{countryCode}/artist/{developerName}/{id}"},{protocol:kF,path:`/${FF}/viewArtist`,query:[f$,`${v$}?`]}]}handleShelf(e,t,n,r,o,s){const i=n[qD],a=JSON.parse(i),c=new xM(e,a.remainingData).includingAdditionalPlatforms(v(e)).includingAttributes(Er(e))
lr(e,c).then(t=>function(e,t,n){const r=fl(e,n.title,n.developerId,b(t),n.relationship,n.contentType,n.lockupListOptions,n.lockupListOptions.lockupOptions.metricsOptions.pageInformation,n.lockupListOptions.lockupOptions.metricsOptions.locationTracker,n.roomUrl,(0,Uf.isSome)(n.roomUrl))
return r.mergeWhenFetched=!0,r}(e,t,a)).then(o,s)}shelfRoute(e){return[{protocol:RF,path:`/${zF}/${LF}/{token}`}]}pageType(){return yN}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("DeveloperHrefBuilder")}handlePage(e,t,n,r,o,s,i){const a=n[j$],c=function(e,t){return new xM(e,t).includingAdditionalPlatforms(v(e)).includingAttributes(Er(e)).includingRelationships(Pr(e)).includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes(ne(e))}(e,a)
lr(e,c).then(t=>cl(e,t)).then(e=>IV.createFlowAction(e,yN,t)).then(s,i)}pageRoute(e){return[{protocol:RF,path:`/${zF}/${n$}`,query:[j$]}]}pageType(){return yN}}),VW.registerPageBuilder(HW,new class extends CV{constructor(){super("DeveloperRoomBuilder")}pageRoute(e){return[{protocol:RF,path:`/${zF}/${HF}/{token}`}]}paginationRoute(e){return[{protocol:RF,path:`${this.paginationPath}`,query:[`${tx}`]}]}generatePageRequest(e,t,n){const o=n[qD],s=JSON.parse(o)
if(r(s))throw new Error(`Unable to map ${t.build()} to a media api url`)
return new xM(e,s.url).withSparseLimit(s.maxPerPage).includingAdditionalPlatforms(v(e)).includingAttributes(Er(e))}renderPage(e,t,n,r){return $f.context(rk,()=>{const r=n[qD],o=JSON.parse(r),s=$n(e,ek,`${o.developerId}_${o.relationshipId}`,t)
o.metricsPageInformation=s,o.metricsLocationTracker={rootPosition:0,locationStack:[]}
const i=this.pageWithContent(e,t,o)
return i.title=o.title,this.configurePaginationForPage(i,o,t.next),Mn(e,i,s),i})}generatePaginationRequest(e,t,n,r){var o
const s=r,a=Me(0,s)
let c
return i(a)?c=new xM(e,a):(null===(o=s.nextHref)||void 0===o?void 0:o.length)>0&&(c=new xM(e,s.nextHref).withSparseLimit(s.maxPerPage)),c.includingAdditionalPlatforms(v(e)).includingAttributes(Er(e)),c}renderPaginatedPage(e,t,n){const r=n,o=i(r.remainingContent),s=this.pageWithContent(e,t,r,!o),a=Ue(0,r)
return this.configurePaginationForPage(s,a,o?r.nextHref:t.next),s}configurePaginationForPage(e,t,n){const r=(null==n?void 0:n.length)>0,o=i(t.remainingContent)
r||o?(t.nextHref=n,t.url=`${this.paginationUrl}?${tx}=${JSON.stringify(t)}`,e.nextPage=t):e.nextPage=null}}),VW.registerPageBuilder(HW,new class extends IV{constructor(e,t){super("AccountController"),t.exportingService("AccountData",{fetchAccountLinks:async t=>await Du(e)})}handlePage(e,t,n,r,o,s,i){i(new Error(Qk))}pageRoute(e){return[]}pageType(){return _N}}(HW,WW)),VW.registerPageBuilder(HW,new class extends IV{constructor(e,t){super("PersonalizationTransparencyBuilder"),t.exportingService(gp,{fetchGenericAccount:async t=>await Nu(e,t.url)})}handlePage(e,t,n,r,o,s,i){h(n.enabled)?lr(e,function(e){return new xM(e).forType(fS)}(e)).then(t=>Lu(e,t),()=>Lu(e)).then(e=>IV.createFlowAction(e,CD,t)).then(s,i):s(IV.createFlowAction(function(e){const t=[],n=new tj,r=new iL(e.loc.string("PERSONALIZATION_DESCRIPTION_OPTED_OUT"))
n.addContentItem(new sj(r)),t.push(n)
const o=new tj
return o.addContentItem(new rj(e.loc.string(dS),Fu(e,nD,CD,!1),XC)),t.push(o),new ej(e.loc.string(Hm),t)}(e),CD,t))}pageRoute(e){return[{protocol:RF,path:`/${e$}/${t$}`,query:[H$]},{path:`${t$}`,query:[H$]}]}pageType(){return CD}}(HW,WW)),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("DynamicUIBuilder")}pageType(){return fO}handlePage(e,t,n,r,o,s,i){const a=new VL(fO)
a.pageUrl=t.toString(),a.referrerUrl=t.build()
const c=new oB
a.pageData=c,s(a)}pageRoute(e){const t=e.bag.dynamicUIRegexStrings,n=[]
for(const e of t)n.push(new RegExp(e,"i"))
return[{regex:n}]}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("WebUIPageBuilder")}pageType(){return dO}handlePage(e,t,n,r,o,s,i){const a=new VL(dO)
a.pageUrl=t.toString(),s(a)}pageRoute(e){const t=e.bag.webViewRegexStrings,n=[]
for(const e of t)n.push(new RegExp(e,"i"))
return[{regex:n}]}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("FinancePageBuilder")}pageType(){return _N}handlePage(e,t,n,r,o,s,i){const a=new VL(nD)
a.pageUrl=t.toString(),s(a)}pageRoute(e){const t=e.bag.financeUIRegexStrings,n=[]
for(const e of t)n.push(new RegExp(e,"i"))
return[{regex:n}]}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("StorefrontChangeController")}handlePage(e,t,n,r,o,s,i){const a={url:t.toString(),signingStyle:yR}
e.network.fetch(a).then(e=>{s(null)},i)}pageRoute(e){return[{protocol:kF,path:`/${FF}/resetAndRedirect`}]}pageType(){return _N}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("ShowAccountPageBuilder")}pageType(){return _N}handlePage(e,t,n,r,o,s,i){let a,c=[]
{a=GS
const e=new VL(CD)
e.presentationContext=mR,e.animationBehavior=AD,c=[e]}const u=new HL("updates")
u.actions=c,s(u)}pageRoute(e){return[{hostName:"showAccountPage"},{hostName:"showPurchasesPage"}]}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("ShowSubscriptionPageBuilder")}pageType(){return _N}handlePage(e,t,n,r,o,s,i){s(new VL(nD,e.bag.manageSubscriptionsUrl))}pageRoute(e){return[{hostName:"showSubscriptionsPage"}]}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("ShowUpdatesPageBuilder")}pageType(){return _N}handlePage(e,t,n,r,o,s,i){const a=new HL("updates")
if(e.client.deviceType!==$N){const e=new VL(CD)
e.presentationContext=mR,e.animationBehavior=AD,a.actions=[e]}s(a)}pageRoute(e){return[{hostName:"showUpdatesPage"},{path:"updates"},{path:"{countryCode}/updates"},{query:[`${_$}=updates`]}]}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("TabSelectionBuilder")}pageType(){return _N}handlePage(e,t,n,r,o,s,i){var a
const c=t.pathComponents(),u=c.length-1
let l,f
l=u>=0?c[u]:t.query[qk],null!=l&&this.currentDeviceSupportsUrlAction(e,l)&&(f=new HL(l),f.popToRoot=null!==(a=t.query.popToRoot===SD)&&void 0!==a&&a),void 0===f&&(f=new HL(AN)),s(f)}pageRoute(e){const t=[AN,eO,NN,KO,MR,TS,AS,ES,X_,ON],n=[]
for(const e of t){const t=`${_$}=${e}`,r=`${e}`
n.push({query:[t]}),n.push({path:r}),n.push({path:`{countryCode}/${r}`})}return n}currentDeviceSupportsUrlAction(e,t){return!![AN,NN,eO,ON,MD].includes(t)}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("PassbookBuilder")}pageType(){return _N}handlePage(e,t,n,r,o,s,i){const a=this.assemblePassbookRoomURL(e,t).build()
e.required(zH).fetchAction(e,a,o).then(s,i)}pageRoute(e){return[{query:[`${_$}=passbook`]}]}assemblePassbookRoomURL(e,t){let n=e.bag.passbookMainURL
return null!=n&&typeof n===LN||(n="https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewFeature?id=717384713&mt=8"),new Ox(n)}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("LibraryLink")}pageType(){return _N}handlePage(e,t,n,r,o,s,i){const a=`https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewGenre?id=${t.query.g}&mt=8`
e.required(zH).fetchAction(e,a,o).then(s,i)}pageRoute(e){return[{query:[`${_$}=library-link`]}]}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("ContentLink")}pageType(){return yN}handlePage(e,t,n,o,i,a,c){r(l(n,Y$))?c(new Error(`Unhandled search url: ${t}`)):e.network.fetch({url:t.build(),method:xb}).then(n=>{s(n.url)?e.required(zH).fetchAction(e,n.url,i).then(a,c):c(new Error(`Unhandled search url: ${t}`))}).catch(()=>{c(new Error(`Unhandled search url: ${t}`))})}pageRoute(e){return[{hostName:"search.itunes.apple.com",path:"WebObjects/MZContentLink.woa/wa/link",query:[Y$]}]}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("LongUrlBuilder")}pageType(){return _N}handlePage(e,t,n,r,o,a,c){const u=t.query[BS]
i(u)?e.network.fetch({url:u,method:xb,signingStyle:yR}).then(t=>{let n
const r=t.headers["Content-Type"]
if(t.ok&&t.redirected&&s(t.url))n=t.url
else{if(t.ok&&u!==t.url)return void a(new hF)
if(t.ok&&i(r)&&-1!==r.toLowerCase().indexOf("text/xml")){const r=w(e.plist.parse(t.body)),o=l(r,yp),s=l(r,Tp)
o===Ap&&s&&(n=s)}}i(n)?e.required(zH).fetchAction(e,n,o).then(a,c):c(new Error(`Unable to map long url for: ${u}`))},e=>{c(new Error(`Unable to fetch long url: ${u}`))}):c(new Error("Original url is missing when creating deep-link for checkForLongUrl."))}pageRoute(e){return[{query:[`${_$}=checkForLongUrl`]}]}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("WatchCategoryBuilder")}pageType(){return _N}handlePage(e,t,n,r,o,s,i){if(e.client.deviceType!==CN)return void i(new Error(`Unsupported url for current platform: ${t}`))
const a=e.bag.watchAppsGroupingURL
e.required(zH).fetchAction(e,a,o).then(e=>{const t=new HL(NN)
t.actions=[e],s(t)},i)}pageRoute(e){return[{query:[`${_$}=watchCategory`]}]}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("ExperimentLink")}pageType(){return _N}handlePage(e,t,n,r,o,s,i){const a={url:t.toString()}
e.network.fetch(a).then(e=>{if(e.status>=200&&e.status<300){const e=new aF(fN)
e.title="You have been enrolled in the AB test",e.message=`Test ${t.query.ab2} is now active on your device.`,e.buttonTitles=["OK"],e.buttonActions=[new HL(ID)],s(e)}else i(new Error(`unexpected response status: ${e.status} from ${e.url}`))}).catch(i)}pageRoute(e){return[{protocol:kF,hostName:"xp.apple.com",path:"register",query:["ab2"]}]}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("FallbackActionBuilder")}handlePage(e,t,n,s,i,a,c){(async function(e,t,n){const s=t.query[qk]
switch(s){case CD:const n=new VL(nD)
n.presentationContext=mR,n.animationBehavior=Bb
const i=t.query[BS]
return i?n.pageUrl=i:t.query[wd]?n.pageUrl=Ox.fromComponents(null,s,null,{continuation:t.query[wd]}).toString():n.pageUrl=s,await Promise.resolve(n)
case"signup":const a=new VL(nD)
return a.presentationContext=mR,a.animationBehavior=Bb,a.pageUrl=function(e){let t=e.bag.createAccountUrl
return(r(t)||typeof t!==LN)&&(t=yd),new Ox(t)}(e).build(),await Promise.resolve(a)
case ZA:let c,u=[]
{c=GS
const e=new VL(CD)
e.presentationContext=mR,e.animationBehavior=AD
const t=new VL(gd)
t.animationBehavior=AD,u=[e,t]}const l=new HL(c)
return l.actions=u,await Promise.resolve(l)
case VS:const f=t.query[BS]
if(f.length>0){const t={url:f,signingStyle:yR}
return e.network.fetch(t),await Promise.resolve(new hF)}return await Promise.reject(new Error("Original url is missing when creating deep-link for checkForPreorders."))
case cO:const d=new VL(nD)
d.presentationContext=mR,d.animationBehavior=Bb
const p=new Ox(s)
return t.query.code&&t.query.code.length>0&&p.param("code",t.query.code),d.pageUrl=p.build(),await Promise.resolve(d)
case J_:const h=new VL(nD)
return h.presentationContext=mR,h.animationBehavior=Bb,h.pageUrl=s,await Promise.resolve(h)
case md:const w=new VL(nD)
return w.presentationContext=mR,w.animationBehavior=Bb,w.pageUrl="charity",await Promise.resolve(w)
case MD:let g=t.query.term
if(g||(g=t.query.q),g&&g.length>0){if(g=g.replace(/\+/g," ").trim(),o(g))return await Promise.reject(new Error("Empty search term."))
const t=be(e,il(e,{term:g,origin:Z_})).toString(),n=new aG(g,g,t,Z_),r=new VL(MD)
return r.pageData=n,await Promise.resolve(r)}{const e=new HL(MD)
return await Promise.resolve(e)}}return await Promise.reject(new Error(`FlowAction was not able to be created for this action URL: ${t}`))})(e,t).then(a,c)}pageRoute(e){return[{query:[`${_$}=account`]},{query:[`${_$}=signup`]},{query:[`${_$}=purchased`]},{query:[`${_$}=checkForPreorders`]},{query:[`${_$}=redeem`]},{query:[`${_$}=gift`]},{query:[`${_$}=donate`]},{query:[`${_$}=search`]}]}pageType(){return _N}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("MultiplexingBuilder")}pageType(){return _N}handlePage(e,t,n,r,o,s,i){const a=new xM(e).forType(L_).withIds([n.id])
lr(e,a).then(async t=>await this.actionFromMultiplexResponse(e,t)).then(s,i)}pageRoute(e){return[{protocol:kF,path:"WebObjects/MZStore.woa/wa/viewFeature",query:[f$]}]}async actionFromMultiplexResponse(e,t){const n=d(t,"results.target"),r=d(t,"results.target-link")
return n?await this.targetDataToAction(e,n):r?await this.targetLinkDataToAction(r):null}async targetDataToAction(e,t){const n=l(t,Jv)
if(!n)return null
const r=yr(e,n)
return await e.required(zH).fetchAction(e,r,null)}async targetLinkDataToAction(e){const t=l(e,DN),n=new Ox(t),r=this.addProtocolToURLIfNeeded(n).toString()
return await Promise.resolve(new WL(r,!1))}addProtocolToURLIfNeeded(e){return e.protocol||(e.protocol=yS),e}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("GameCenterProfileLinkController")}defaultTab(e){return ON}pageType(){return _N}handlePage(e,t,n,r,o,s,i){let a=!1
if(e.host.clientIdentifier===AL)a=!0
else for(const t of e.bag.tabsStandard)if(l(t,"id")===xm){a=!0
break}const c=new HL(a?ON:eO),u=n[f$]||"GameCenter.localPlayer"
c.actions.push(new yF(u)),s(c)}pageRoute(e){return[{identifier:"gameCenterProfile",path:"/gameCenterProfile",query:[`${f$}?`]}]}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("NotificationSettingsLinkController")}pageType(){return _N}handlePage(e,t,n,r,o,s,i){s(new VL(hp))}pageRoute(e){const t=[]
return t.push({path:"notifications/settings"}),t}}),VW.registerPageBuilder(HW,new class extends IV{constructor(e,t){super("MSOBuilder"),t.exportingService("MSOData",{fetchProviderData:async t=>await ml(e,t.providerAdamId),fetchPage:async t=>await yl(e,t)})}handlePage(e,t,n,r,o,s,i){const a=function(e){const t=e.availableAdamIds
return t?t.split(","):[]}(n),c=t.removeParam("availableAdamIds"),u=function(e,t){return Tl(e,Tr(t))}(e,c)
lr(e,u).then(t=>Al(e,t,a)).then(e=>IV.createFlowAction(e,yC,t)).then(s,i)}pageRoute(e){return[{protocol:kF,path:`/{countryCode}/${QF}/{appName}/{id}`,query:["availableAdamIds?"]},{protocol:kF,path:`/${QF}/{providerName}/{id}`,query:["availableAdamIds?"]},{protocol:kF,path:`/{countryCode}/${QF}/{id}`,query:["availableAdamIds?"]},{protocol:kF,path:`/${QF}/{id}`,query:["availableAdamIds?"]},{protocol:kF,path:`/${QF}`,query:[f$,"availableAdamIds?"]},{protocol:kF,path:`{countryCode}/${QF}`,query:[f$,"availableAdamIds?"]}]}handleShelf(e,t,n,r,o,s){const i=n[qD],a=JSON.parse(i),c=new xM(e,a.remainingContent).includingAdditionalPlatforms(v(e)).includingAttributes([cN,sN,kD])
lr(e,c).then(t=>function(e,t,n){const r=b(t),o=n
o.remainingContent=[]
const s={lockupOptions:{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},artworkUseCase:ea(0,n.preferredShelfContentType)},contentUnavailable:function(e,t){return o.remainingContent=Be(0,o.remainingContent,t),o.remainingContent.push(r[t]),!1}},i=new CM(n.preferredShelfContentType)
return i.shouldFilterApps=n.shouldFilter,i.items=Wi(e,r,s),i.mergeWhenFetched=!0,i.url=El(o),i}(e,t,a)).then(o,s)}shelfRoute(e){return[{protocol:RF,path:`/${QF}/${LF}/{token}`}]}pageType(){return yC}}(HW,WW)),VW.registerPageBuilder(HW,new class extends IV{constructor(e,t){super("InAppPurchaseInstallController"),t.exportingService(iy,{fetchInstallPage:async t=>await gl(e,t.url),fetchInstallPageAction:async e=>await new Promise((t,n)=>{const r=new VL(jv)
r.pageUrl=$i(0,e.id,e.parentId),t(r)})})}handlePage(e,t,n,r,o,s,i){const a=n[f$],c=n[gx],u=new xM(e).forType(rD).withIds([c])
lr(e,u,{}).then(t=>{const n=function(e,t,n){const r={pageId:n||"",pageType:"IAPInstallPage",parentId:Ka(t)}
return new kH(r)}(0,a,c),r=O(t)
let o
const s={metricsOptions:{pageInformation:n,locationTracker:{rootPosition:0,locationStack:[]}},artworkUseCase:1}
c&&r&&(o=Mi(e,r,s),o.theme=hN)
const i=he(r,gN)
let u
a&&i&&(u=xi(e,i,s))
const l=new NM
l.isComplete=!0,l.lockup=o,l.parentLockup=u
const f=pt(e,r)
return l.preInstallOfferDescription=vi(e,f),function(e,t,n){Mn(e,t,n)}(e,l,n),l}).then(e=>IV.createFlowAction(e,jv,t)).then(s,i)}pageRoute(e){return[{protocol:RF,path:`/${WF}/${xF}`,query:[`${f$}`,`${gx}?`]}]}pageType(){return jv}}(HW,WW)),VW.registerPageBuilder(HW,new class extends CV{constructor(){super("RoomBuilder")}generatePageRequest(e,t,n){let r=t.query.fcId
if(this.isValidRoomId(r)||(r=n.id),!this.isValidRoomId(r))throw new Error(`Unable to map ${t.build()} to a media api url`)
return new xM(e).forType(YC).includingMacOSCompatibleIOSAppsWhenSupported(!0).withIds([r])}prepareRequest(e,t,n,r){super.prepareRequest(e,t,n,r),t.includingMacOSCompatibleIOSAppsWhenSupported(!0)}renderPage(e,t,n,r){return $f.context(rk,()=>{const n=O(t),r=pe(n,kN),o=$n(e,ek,n.id,t),s=new _V
s.remainingContent=r.data,s.url=this.paginationUrl,s.shouldFilter=!G(n,OP),s.metricsPageInformation=o,s.metricsLocationTracker={rootPosition:0,locationStack:[]}
const i=U(n,sk)
s.preferredShelfContentType=this.preferredShelfStyleForFcKind(Number(i)),s.clientIdentifierOverride=ho(0,n),s.title=U(n,KR)
const a=this.pageWithContent(e,r,s)
return a.title=s.title,Mn(e,a,o),a})}pageRoute(e){return[{protocol:kF,path:`/${FF}/${HF}`,query:[h$]},{protocol:kF,path:"/WebObjects/MZStoreElements.woa/wa/recommendationsSeeAll"},{protocol:kF,path:"{apiVersion}/editorial/{countryCode}/rooms/{id}"},{protocol:kF,path:"/{countryCode}/collection/today-view-widgets",query:[h$]},{protocol:kF,path:"/{countryCode}/collections/id{id}"}]}isValidRoomId(e){return a(e)}preferredShelfStyleForFcKind(e){return null==e?null:431===e?CP:null}}),VW.registerPageBuilder(HW,new class extends CV{constructor(){super("RecommendationRoomBuilder")}generatePageRequest(e,t,n){const r=Tr(t),o=n[Q$]
if(!this.isValidId(r))throw new Error(`Unable to map ${t.build()} to a media api url. Missing id.`)
if(!this.isValidId(o))throw new Error(`Unable to map ${t.build()} to a media api url. Missing grouping.`)
return new xM(e).forType(kv).withIds([r]).addingQuery(kO,o).includingMacOSCompatibleIOSAppsWhenSupported(!0)}renderPage(e,t,n){return $f.context(rk,()=>{const r=O(t),o=pe(r,kN),s=n[Q$],i=$n(e,ek,`${r.id}-${s}`,t),a=new _V
a.remainingContent=o.data,a.url=this.paginationUrl,a.shouldFilter=!G(r,OP),a.metricsPageInformation=i,a.metricsLocationTracker={rootPosition:0,locationStack:[]},a.title=U(r,FN)
const c=this.pageWithContent(e,o,a)
return c.title=a.title,Mn(e,c,i),c})}pageRoute(e){return[{protocol:kF,path:"/{countryCode}/apps-for-you/{title}/{id}",query:[Q$]},{protocol:kF,path:"/{countryCode}/apps-for-you/{id}",query:[Q$]},{protocol:kF,path:"/apps-for-you/{title}/{id}",query:[Q$]},{protocol:kF,path:"/apps-for-you/{id}",query:[Q$]}]}isValidId(e){return!(r(e)||isNaN(e))}}),VW.registerPageBuilder(HW,new class extends OV{constructor(){super("AccessoryProtocolRoomBuilder")}pageInformation(e,t,n){return new kH({pageType:ek,pageId:"accessory",page:"Room_accessory"})}generatePageRequest(e,t,n){const r=[]
for(const e of Object.keys(t.query))e.startsWith("id")&&r.push(t.query[e])
return this.requestWithFilter(e,"deviceProtocol",r.join(","))}pageRoute(e){return[{query:[`${_$}=accessoryLookup`]}]}}),VW.registerPageBuilder(HW,new class extends IV{constructor(){super("CollectionDeepLinkingController")}pageType(){return yN}pageRoute(e){return[{protocol:kF,path:"{countryCode}/{tab}/recommendations",query:["uc","collection-id?","seed-id?"]}]}handlePage(e,t,n,r,o,s,a){const c=n.tab,u=n.uc,l=n["collection-id"],f=n["seed-id"]
let d=new xM(e).forType(PE).addingQuery(FN,c).addingQuery("filter[recoUseCase]",u).includingRelationships([kN]).includingAdditionalPlatforms(v(e))
d.enablingFeature(hS),i(l)&&(d=d.addingQuery(dm,l)),i(f)&&(d=d.addingQuery(Zd,f)),lr(e,d).then(n=>{const r=U(O(n),bP);(i(r)?this.makeODPPage(e,u,r,n):this.makeCollectionPage(e,u,n)).then(e=>{let n
const r=this.createTabChangeActionForRequest(c),o=new VL(yN,t.build())
o.pageData=e,null!=r?(r.actions=[o],n=r):n=o,s(n)}).catch(e=>{a(new Error(`CollectionDeeplinkingController: Failed to create GenericPage for useCase: ${u}`))})}).catch(e=>{a(new Error(`CollectionDeeplinkingController: Failed to fetch Media API data for useCase: ${u}`))})}async makeODPPage(e,t,n,r){const o=new Promise((o,s)=>{Yr(e,n,yN).then(n=>{const s=O(r),i=new _V
i.title=U(s,KR),i.metricsPageInformation=$n(e,ek,t,r),i.metricsPageInformation.recoMetricsData=rc(D(r),null,n.recoMetrics),i.shouldFilter=!1,i.metricsLocationTracker={rootPosition:0,locationStack:[]}
const a=this.makePage(e,i,n.dataContainer)
o(a)}).catch(e=>{s(e)})})
return await o}async makeCollectionPage(e,t,n){const r=O(n),o=pe(r,kN),s=new _V
return s.url=this.paginationUrl,s.title=U(r,KR),s.metricsPageInformation=$n(e,ek,t,n),s.metricsPageInformation.recoMetricsData=D(n),s.shouldFilter=!1,s.metricsLocationTracker={rootPosition:0,locationStack:[]},await Promise.resolve(this.makePage(e,s,o))}makePage(e,t,n){return $f.context("makePage",()=>{const r=t.preferredShelfContentType||vV,o=new CM(r),s={id:null,kind:null,softwareType:null,targetType:KD,title:t.title,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,idType:fk,recoMetricsData:D(n)}
cn(0,o,s),ic(s,t.title),o.isHorizontal=!1,o.shouldFilterApps=t.shouldFilter
const i=b(n)
t.remainingContent=[],o.items=Wi(e,i,{contentUnavailable:(e,n)=>(t.remainingContent=Be(0,i,n),!0),lockupOptions:{metricsOptions:{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker},clientIdentifierOverride:t.clientIdentifierOverride,artworkUseCase:ea(0,r)}})
const a=new DM([o])
return a.title=t.title,t.remainingContent.length&&(a.nextPage=t),a})}createTabChangeActionForRequest(e){const t=e
return new Set([AN,NN,eO,MD,GS,ON,KO,MR,TS,AS,ES,X_,CD]).has(t)?new HL(t):null}handleShelf(e,t,n,r,o,s){s(new Error(sy))}shelfRoute(e){return[]}paginationRoute(e){return[{protocol:RF,path:`${this.paginationPath}`}]}handlePagination(e,t,n,r,o,s,i){$f.context(`${this.builderClass}.handlePagination`,()=>{const n=o,r=new xM(e,n.remainingContent)
if(!r)return void i(new Error(`Could not construct media API request for: ${t}`))
r.includingAdditionalPlatforms(v(e))
const a=[cN,sN,zk,oD]
e.appleSilicon.isSupportEnabled&&a.push(PD),r.includingAttributes(a),r.usingCustomAttributes(ne(e)),r.attributingTo(t.build()),lr(e,r).then(t=>{s(this.makePage(e,n,t))}).catch(e=>{i(e)})})}}),VW.registerPageBuilder(HW,new class extends IV{constructor(e,t){super("UserEngagementController"),t.exportingService("AppStoreEngagement",{fetchEngagementTask:async t=>await hl(e,t),fetchBadgingTask:async t=>await wl(e,t)})}handlePage(e,t,n,r,o,s,i){i(new Error(Qk))}pageRoute(e){return[]}pageType(){return _N}}(HW,WW)),VW.registerPageBuilder(HW,new class extends IV{constructor(e,t){super("WidgetController"),t.exportingService("WidgetData",{fetchArcadeHeroWidget:async t=>await If(e,t),fetchTodayWidget:async t=>await Sf(e,t)})}handlePage(e,t,n,r,o,s,i){i(new Error(Qk))}pageRoute(e){return[]}pageType(){return _N}}(HW,WW)),VW.registerPageBuilder(HW,new class extends IV{constructor(e,t){super("AppEventsController"),t.exportingService("AppEvents",{updateAppEventNotification:async t=>await $u(e,t)})}handlePage(e,t,n,r,o,s,i){i(new Error(Qk))}pageRoute(e){return[]}pageType(){return _N}}(HW,WW)),VW.registerPageBuilder(HW,new class extends IV{constructor(e,t){super("MetricsLinterController"),t.exportingService("Metrics",{async lintEvent(t){const n=at(e).makeEvent(e,t.fields)
return await Promise.resolve(n)}})}handlePage(e,t,n,r,o,s,i){i(new Error(Qk))}pageRoute(e){return[]}pageType(){return _N}}(HW,WW)),VW.registerPageBuilder(HW,new class extends IV{constructor(e,t){super("CompleteCollectionController"),t.exportingService("CMCPersonalizationData",{fetchPersonalizedOfferContext:async t=>await tl(e,t.offerToken)})}handlePage(e,t,n,r,o,s,i){i(new Error(Qk))}pageRoute(e){return[]}pageType(){return _N}}(HW,WW)),VW.registerPageBuilder(HW,new class extends IV{constructor(e,t){super("PurchaseDecorationController"),t.exportingService(ry,{decoratePurchase:async t=>await nl(e,t.intent)})}handlePage(e,t,n,r,o,s,i){i(new Error(Qk))}pageRoute(e){return[]}pageType(){return _N}}(HW,WW)),VW.registerPageBuilder(HW,new class extends IV{constructor(e,t){super("ArcadePurchaseDecorationController"),t.exportingService(ry,{decorateArcadePurchase:async t=>await el(e,t.intent)})}handlePage(e,t,n,r,o,s,i){i(new Error(Qk))}pageRoute(e){return[]}pageType(){return _N}}(HW,WW)),VW.registerPageBuilder(HW,new class extends IV{constructor(e,t){super("CancelPreorderController"),t.exportingService("Preorder",{cancelPreorder:async t=>await Pl(e,t)})}handlePage(e,t,n,r,o,s,i){i(new Error(Qk))}pageRoute(e){return[]}pageType(){return _N}}(HW,WW)),VW.registerPageBuilder(HW,new class extends IV{constructor(e,t){super("IconLookupController"),t.exportingService("ContentData",{fetchIconArtwork:async t=>await rl(e,t.adamIds)})}handlePage(e,t,n,r,o,s,i){i(new Error(Qk))}pageRoute(e){return[]}pageType(){return _N}}(HW,WW)),(0,Df.exportBootstrap)(function(e){return jW.register(new aj),jW.register(new XH),jW.register(new Gj),jW.register(new Fj),jW.register(new $j),jW.register(new Mj),jW.register(new Yj),jW.register(new qj),jW.register(new Wj),jW.register(new _W),jW.register(new iW),jW.register(new dW),jW.register(new sW),jW.register(new cj),jW.register(new JH),jW.register(new KH),jW.register(new Kj),jW.register(new aW),jW.register(new QH),jW.register(new fW),jW.register(new lW),jW.register(new zj),jW.register(new Jj),jW.register(new EW),jW.register(new SW),jW.register(new vW),jW.register(new pW),jW.register(new ZH),jW.register(new CW),jW.register(new OW),jW.register(new DW),jW.register(new NW),jW.register(new uj),jW.register(new BW),WW})})()})()

//# sourceMappingURL=main.js.map