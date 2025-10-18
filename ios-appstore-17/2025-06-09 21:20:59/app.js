(()=>{function e(r){if(n[r])return n[r].exports
var o=n[r]={exports:{}}
return t[r].call(o.exports,o,o.exports,e),o.exports}var t={9100:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(4908),t)},4908:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.inject=t.ObjectGraph=void 0
const r=n(2450)
t.ObjectGraph=class{constructor(e){this._members={},this.name=e}adding(e,t){const n=this.clone()
return n._members[e.name]=t,n}removing(e){const t=this.clone()
return delete t._members[e.name],t}optional(e){return this._members[e.name]}required(e){const t=this._members[e.name]
if((0,r.isNothing)(t)){const t=Object.keys(this._members).sort().join(", ")
throw new Error(`No member with type ${e.name} found in ${this.name}. Candidates ${t}`)}return t}clone(){const e=new(0,this.constructor)(this.name)
for(const[t,n]of Object.entries(this._members))e._members[t]=n
return e}},t.inject=function(e,t){return t.required(e)}},9089:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isBaseActionProvider=void 0
const r=n(2450)
t.isBaseActionProvider=function(e){return"object"==typeof e&&(0,r.isSome)(null==e?void 0:e.actionFor)}},129:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(9089),t)},8770:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},3421:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.IntentDispatcher=void 0
const r=n(2450),o=n(4395),s=n(3907),i=n(1222)
t.IntentDispatcher=class{constructor(){this.dispatchableMap={}}register(e){if((0,r.isNothing)(e.$intentKind))throw new Error("Dispatcher cannot register a controller without an $intentKind")
if(e.$intentKind in this.dispatchableMap)throw new Error(`Dispatcher already has a controller registered for ${e.$intentKind}`)
this.dispatchableMap[e.$intentKind]=e}async dispatch(e,t){if("$static"===e.$kind){const t=Reflect.get(e,"$data")
if((0,r.isNothing)(t))throw new Error("StaticIntent<R> contains no data")
return t}const n=this.dispatchableMap[e.$kind]
if((0,r.isNothing)(n)||!(0,o.isIntentController)(n))throw new Error(`No controller registered to handle ${e.$kind}`)
const a=e.$pageIntentInstrumentation,c=t.optional(i.net)
if((0,r.isSome)(a)&&(0,r.isSome)(c)){const r=new s.ProxiedNetwork(c,a),o=t.adding(i.net,r)
return await n.perform(e,o)}return await n.perform(e,t)}controller(e){return this.dispatchableMap[e.$kind]}get registeredControllers(){return Object.values(this.dispatchableMap)}}},8346:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(4395),t),o(n(3421),t),o(n(8770),t),o(n(867),t)},4395:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isIntentController=void 0
const r=n(2450)
t.isIntentController=function(e){return"object"==typeof e&&(0,r.isSome)(null==e?void 0:e.perform)}},867:(e,t)=>{function n(e){return{$kind:"$static",$data:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Continuous=t.makeSidepackedIntent=t.makeStaticContinuousIntentsOf=t.makeStaticIntent=void 0,t.makeStaticIntent=n,t.makeStaticContinuousIntentsOf=function(e){const t=new Array
for(const o of e)t.push(n(r.of(o)))
return t},t.makeSidepackedIntent=function(e,t){return{$kind:"$sidepacked",$initial:e,$intent:t}}
class r{static of(e){return new r(new o(e))}static contentsOf(e){return new r(e)}constructor(e){this.base=e}toJSON(){if(this.base instanceof o)return this.base.toJSON()
throw new TypeError("Continuous was not created with a single element")}async*[Symbol.asyncIterator](){yield*this.base}}t.Continuous=r
class o{constructor(e){this.element=e}toJSON(){return this.element}async*[Symbol.asyncIterator](){yield this.element}}},5881:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(8346),t),o(n(129),t)},5016:(e,t,n)=>{t.Qo=void 0
const r=n(4172),o=n(2450),s=n(6151)
t.Qo=function(e,t){const n=function(e){let t=null
return(0,o.isSome)(i)&&(t=i.value),(0,o.isNothing)(t)&&(t=e.cookieForUrlWithName("https://apple.com","xp_ab"),function(e){var t,n
if((0,o.isNothing)(e))return
const r=Date.now()+6e4,a=null!==(n=null===(t=null==e?void 0:e.expiresDate)||void 0===t?void 0:t.getTime())&&void 0!==n?n:Number.MAX_SAFE_INTEGER,c=Math.min(r,a)
i=new s.ExpiringValue(e,c)}(t)),t}(e)
return function(e,t){return r.context("currentExperimentGroup",()=>{var n
if((0,o.isNothing)(t)||0===t.value.length)return null
const s=t.value.replace(/^\d+#/,"").split("#").map(e=>e.replace(/^(.*\+)/,"")),i=new RegExp(`${e.identifer}\\d+$`),a=s.filter(e=>null!=e.match(i))
if(0===a.length)return null
a.length>1&&r.unexpectedType("ignoredValue","string",a,`${t.name} cookie`)
const c=a[0].match(/\d+$/)
if(null===c||0===c.length)return r.unexpectedType("ignoredValue",e.treatments.join("|"),a[0],`${t.name} cookie, ${a}, treatment id`),null
const l=Number(c[0]),u=null!==(n=e.treatments.find(e=>e===l))&&void 0!==n?n:null
return null==u&&r.unexpectedType("ignoredValue",e.treatments.join("|"),l,`${t.name} cookie, ${a}, treatment id`),u})}(t,n)}
let i=null},5542:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(5827),t),o(n(1721),t),o(n(9031),t),o(n(447),t),o(n(2024),t),o(n(2450),t)},6418:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.valueAsNumber=t.valueAsString=t.valueAsBoolean=void 0
const r=n(2450),o=n(4172)
t.valueAsBoolean=function(e,t="coercible",n){if(!(0,r.isSome)(e))return e
if("boolean"==typeof e)return e
if("string"==typeof e){if("true"===e)return!0
if("false"===e)return!1}const s=Boolean(e)
switch(t){case"strict":o.context("asBoolean",()=>{o.unexpectedType("coercedValue","boolean",e,n)})
break
case"coercible":if((0,r.isNothing)(s))return o.context("asBoolean",()=>{o.unexpectedType("coercedValue","boolean",e,n)}),null}return s},t.valueAsString=function(e,t="coercible",n){if(!(0,r.isSome)(e))return e
if("string"==typeof e)return e
const s="object"==typeof e?null:String(e)
switch(t){case"strict":o.context("asString",()=>{o.unexpectedType("coercedValue","string",e,n)})
break
case"coercible":(0,r.isNothing)(s)&&o.context("asString",()=>{o.unexpectedType("coercedValue","string",e,n)})}return s},t.valueAsNumber=function(e,t="coercible",n){if(!(0,r.isSome)(e))return e
if("number"==typeof e)return e
const s=Number(e)
switch(t){case"strict":o.context("asNumber",()=>{o.unexpectedType("coercedValue","number",e,n)})
break
case"coercible":if(isNaN(s))return o.context("asNumber",()=>{o.unexpectedType("coercedValue","number",e,n)}),null}return s}},2506:(e,t,n)=>{function r(e){if(Array.isArray(e))return e
switch(typeof e){case"string":{const t=s[e]
if((0,o.isSome)(t))return t
{const t=Object.freeze(e.split("."))
return s[e]=t,t}}case"number":case"symbol":return[e]
default:throw new TypeError(`${e.toString()} is not a KeyPath`)}}Object.defineProperty(t,"__esModule",{value:!0}),t.keyPathContains=t.keyPathEndsWith=t.keyPathStartsWith=t.keyPathsEqual=t.isKeyPathThis=t.thisKeyPath=t.keysOf=void 0
const o=n(2450),s={}
t.keysOf=r,t.thisKeyPath=Object.freeze([]),t.isKeyPathThis=function(e){return Array.isArray(e)&&0===e.length},t.keyPathsEqual=function(e,t){if(e===t)return!0
const n=r(e),o=r(t)
if(n.length!==o.length)return!1
for(let e=0,t=n.length;e<t;e+=1)if(n[e]!==o[e])return!1
return!0},t.keyPathStartsWith=function(e,t){if(e===t)return!0
{const n=r(e)
return 0!==n.length&&n[0]===t}},t.keyPathEndsWith=function(e,t){if(e===t)return!0
{const n=r(e)
return 0!==n.length&&n[n.length-1]===t}},t.keyPathContains=function(e,t){return e===t||r(e).includes(t)}},6853:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ObjectCursor=void 0
const r=n(2450),o=n(2879),s=n(2506),i=n(7454)
t.ObjectCursor=class{constructor(e){this.values=[e],this.keyPaths=[s.thisKeyPath],this.savedDepths=[]}get currentValue(){return this.values[this.values.length-1]}get currentKeyPath(){return this.keyPaths[this.keyPaths.length-1]}interject(e,t){this.values.push(e),this.keyPaths.push(t)}reuse(e,t=s.thisKeyPath){this.values.length=0,this.values.push(e),this.keyPaths.length=0,this.keyPaths.push(t),this.savedDepths.length=0}moveTo(e){const t=(0,i.traverse)(this.currentValue,e)
return this.values.push(t),this.keyPaths.push(e),t}moveBack(){const e=this.values.length
if(1===e)throw new Error("Cannot move back past the root of a cursor")
const t=this.savedDepths.length
if(t>0&&e<=this.savedDepths[t-1])throw new Error("Cannot move back past the most recent saved state")
this.values.pop(),this.keyPaths.pop()}saveState(){this.savedDepths.push(this.values.length)}restoreState(){const e=this.savedDepths.pop()
if((0,r.isNothing)(e))throw new Error("Calls to restoreState must balance previous calls to saveState")
this.values.length=e,this.keyPaths.length=e}clone(){const e=(0,o.shallowCloneOf)(this)
return e.values=this.values.slice(),e.keyPaths=this.keyPaths.slice(),e.savedDepths=this.savedDepths.slice(),e}}},4409:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ObjectReader=void 0
const r=n(2450),o=n(2879),s=n(6418),i=n(2506),a=n(6853),c=n(7454),l=new Map
class u{constructor(e){this._cursor=new a.ObjectCursor(e)}get currentKeyPath(){return this._cursor.currentKeyPath}has(e){return(0,i.keyPathEndsWith)(this._cursor.currentKeyPath,e)||(0,r.isSome)(this.get(e))}select(e,t=!1){return!t&&(0,i.keyPathsEqual)(this._cursor.currentKeyPath,e)||this._cursor.moveTo(e),this}deselect(){return this._cursor.moveBack(),this}saveSelection(){return this._cursor.saveState(),this}restoreSelection(){return this._cursor.restoreState(),this}get(e=i.thisKeyPath){return(0,i.isKeyPathThis)(e)?this._cursor.currentValue:(0,c.traverse)(this._cursor.currentValue,e)}asBoolean(e=i.thisKeyPath,t="coercible"){return(0,s.valueAsBoolean)(this.get(e),t,String(e))}asNumber(e=i.thisKeyPath,t="coercible"){return(0,s.valueAsNumber)(this.get(e),t,String(e))}asString(e=i.thisKeyPath,t="coercible"){return(0,s.valueAsString)(this.get(e),t,String(e))}*[Symbol.iterator](){const e=this.get()
if((0,r.isNothing)(e))return
const t=u._clone(this)
if(Array.isArray(e)){let n=0
for(const r of e)t.saveSelection(),t._cursor.interject(r,n),yield t,t.restoreSelection(),n+=1}else yield t
u._recycle(t)}reduce(e,t){const n=this.get()
if((0,r.isNothing)(n))return e
if(!Array.isArray(n))return t(e,this)
try{let r=e
for(let e=0,o=n.length;e<o;e+=1)this.saveSelection(),this._cursor.interject(n[e],e),r=t(r,this),this.restoreSelection()
return r}catch(e){throw this.restoreSelection(),e}}map(e){return this.reduce(new Array,(t,n)=>(t.push(e(n)),t))}compactMap(e){return this.reduce(new Array,(t,n)=>{const o=e(n)
return(0,r.isSome)(o)&&t.push(o),t})}applyTo(e,...t){this.saveSelection()
try{const n=e(this,...t)
return this.restoreSelection(),n}catch(e){throw this.restoreSelection(),e}}callOn(e,t,...n){this.saveSelection()
try{const r=e.call(t,this,...n)
return this.restoreSelection(),r}catch(e){throw this.restoreSelection(),e}}clone(){const e=(0,o.shallowCloneOf)(this)
return e._cursor=this._cursor.clone(),e}static optimizeIterationUpToDepth(e){for(let t=0;t<e;t+=1)u._recycle(new u(void 0))}static _clone(e){const t=l.get(e.constructor)
if((0,r.isSome)(t)){const n=t.pop()
if((0,r.isSome)(n))return n.onReuseToIterate(e),n}return e.clone()}onReuseToIterate(e){const t=e._cursor
this._cursor.reuse(t.currentValue,t.currentKeyPath)}static _recycle(e){const t=e.constructor,n=l.get(t)
if((0,r.isSome)(n)){if(n.length>=5)return
e.onRecycleForIteration(),n.push(e)}else e.onRecycleForIteration(),l.set(t,[e])}onRecycleForIteration(){this._cursor.reuse(void 0)}}t.ObjectReader=u},7454:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.traverse=void 0
const r=n(2450),o=n(2506)
t.traverse=function(e,t){if("object"!=typeof e)return e
if(!(0,r.isSome)(e))return e
const n=(0,o.keysOf)(t)
switch(n.length){case 0:return e
case 1:return e[n[0]]
default:let t=e
for(const e of n){const n=t[e]
if("object"!=typeof n)return n
if(!(0,r.isSome)(n))return n
t=n}return t}}},4172:(e,t,n)=>{function r(e){return Array.isArray(e)?"array":null===e?"null":typeof e}function o(e,t,n,o){u({type:"badType",expected:t,actual:`${r(n)} (${n})`,objectPath:(0,d.isSome)(o)&&o.length>0?o:"<this>",contextNames:a(),recoveryAction:e,stack:(new Error).stack})}function s(e){return!(0,d.isNothing)(e)&&(Object.prototype.hasOwnProperty.call(e,"$incidents")||Object.isExtensible(e))}function i(e){f.nameStack.push(e)}function a(){return 0===f.nameStack.length?["<empty stack>"]:f.nameStack.slice(0)}function c(){f.nameStack.length,f.nameStack.pop()}function l(e,t,n){let r=null;(0,d.isSome)(n)&&n.length>0&&(r=e,f.suppressedIncidentPaths.push(n))
let s=null
try{i(e),s=t()}catch(e){throw e.hasThrown||(o("defaultValue","no exception",e.message),e.hasThrown=!0),e}finally{e===r&&f.suppressedIncidentPaths.pop(),c()}return s}function u(e){f.suppressedIncidentPaths.includes(e.objectPath)||f.incidents.push(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.unexpectedNull=t.catchingContext=t.context=t.recordValidationIncidents=t.endContext=t.getContextNames=t.beginContext=t.messageForRecoveryAction=t.isValidatable=t.unexpectedType=t.extendedTypeof=void 0
const d=n(2450)
t.extendedTypeof=r,t.unexpectedType=o,t.isValidatable=s,t.messageForRecoveryAction=function(e){switch(e){case"coercedValue":return"Coerced format"
case"defaultValue":return"Default value used"
case"ignoredValue":return"Ignored value"
default:return"Unknown"}}
const f={nameStack:Array(),incidents:Array(),suppressedIncidentPaths:Array()}
t.beginContext=i,t.getContextNames=a,t.endContext=c,t.recordValidationIncidents=function(e){s(e)&&(e.$incidents=f.incidents),f.incidents=[],f.nameStack=[],f.suppressedIncidentPaths=[]},t.context=l,t.catchingContext=function(e,t,n){let r=null
try{r=l(e,t)}catch(e){r=null,(0,d.isSome)(n)&&(r=n(e))}return r},t.unexpectedNull=function(e,t,n){u({type:"nullValue",expected:t,actual:"null",objectPath:(0,d.isSome)(n)&&n.length>0?n:"<this>",contextNames:a(),recoveryAction:e,stack:(new Error).stack})}},3647:(e,t,n)=>{function r(e,t,n,r){const o="click"
return u({...n,eventType:o,targetType:t,targetId:e},r,o)}function o(e,t){return r("back","button",{...e,actionType:"back"},t)}function s(e,t,n){const r="page"
return u({...e,eventType:r,...t},n,r)}function i(e,t,n,r,o,s){const i="search",a={...o,eventType:i,term:e,targetType:t,actionType:n}
return(0,f.isSome)(r)&&(a.actionUrl=r),u(a,s,i)}function a(e,t,n=4){const r="impressions"
return u({...e,eventType:r,impressionQueue:"data-metrics",eventVersion:n},t,r)}function c(e,t){const n="media"
return u({...e,eventType:n},t,n)}function l(e,t,n,r){const o="click"
return u({...n,eventType:o,targetType:t,targetId:e},r,o)}function u(e,t,n){return{fields:e,includingFields:t.defaultIncludeRequests[n],excludingFields:t.defaultExcludeRequests[n],topic:d(e,t.defaultTopic),shouldFlush:!!(0,f.isSome)(t.shouldFlush)&&t.shouldFlush(e)}}function d(e,t){const n=e.topic
return(0,f.isSome)(n)?n:t}Object.defineProperty(t,"__esModule",{value:!0}),t.createMetricsMediaClickData=t.createMetricsMediaData=t.createMetricsImpressionsData=t.createMetricsSearchData=t.createMetricsPageData=t.createMetricsBackClickData=t.createMetricsClickData=t.MediaClickEventBuilder=t.MediaEventBuilder=t.ImpressionsEventBuilder=t.SearchEventBuilder=t.PageEventBuilder=t.BackClickEventBuilder=t.ClickEventBuilder=t.EventBuilder=void 0
const f=n(2450)
class p{constructor(e){this.configuration=e,this.eventFields={}}withEventFields(e){return this.eventFields=e,this}withConfiguration(e){return this.configuration=e,this}withDefaultTopic(e){return this.configuration={...this.configuration,defaultTopic:e},this}withDefaultIncludeRequests(e){return this.configuration={...this.configuration,defaultIncludeRequests:e},this}withDefaultExcludeRequests(e){return this.configuration={...this.configuration,defaultExcludeRequests:e},this}withShouldFlush(e){return this.configuration={...this.configuration,shouldFlush:e},this}}t.EventBuilder=p,t.ClickEventBuilder=class extends p{constructor(e){super(e.configuration),this.targetId=e.targetId,this.targetType=e.targetType}withTargetId(e){return this.targetId=e,this}withTargetType(e){return this.targetType=e,this}build(){return r(this.targetId,this.targetType,this.eventFields,this.configuration)}},t.BackClickEventBuilder=class extends p{build(){return o(this.eventFields,this.configuration)}},t.PageEventBuilder=class extends p{constructor(e){super(e),this.timingMetrics={}}withTimingMetrics(e){return this.timingMetrics=e,this}build(){return s(this.eventFields,this.timingMetrics,this.configuration)}},t.SearchEventBuilder=class extends p{constructor(e){super(e.configuration),this.term=e.term,this.targetType=e.targetType,this.actionType=e.actionType,this.actionUrl=null}withTerm(e){return this.term=e,this}withTargetType(e){return this.targetType=e,this}withActionType(e){return this.actionType=e,this}withActionUrl(e){return this.actionUrl=e,this}build(){return i(this.term,this.targetType,this.actionType,this.actionUrl,this.eventFields,this.configuration)}},t.ImpressionsEventBuilder=class extends p{constructor(){super(...arguments),this.impressionsEventVersion=4}withImpressionsEventVersion(e){return this.impressionsEventVersion=e,this}build(){return a(this.eventFields,this.configuration,this.impressionsEventVersion)}},t.MediaEventBuilder=class extends p{build(){return c(this.eventFields,this.configuration)}},t.MediaClickEventBuilder=class extends p{constructor(e){super(e.configuration),this.targetId=e.targetId,this.targetType=e.targetType}withTargetId(e){return this.targetId=e,this}withTargetType(e){return this.targetType=e,this}build(){return l(this.targetId,this.targetType,this.eventFields,this.configuration)}},t.createMetricsClickData=r,t.createMetricsBackClickData=o,t.createMetricsPageData=s,t.createMetricsSearchData=i,t.createMetricsImpressionsData=a,t.createMetricsMediaData=c,t.createMetricsMediaClickData=l},8535:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EventLinter=void 0
const r=n(4409),o=n(2450),s=n(7771)
t.EventLinter=class{constructor(e){this.options=Object.freeze(e)}get defaultTopic(){return this.options.defaultTopic}applyDeResolutionRules(e,t){const n=new r.ObjectReader(e)
for(const r of t){const t=n.asNumber(r.fieldName)
if((0,o.isNothing)(t))continue
let i=r.magnitude;(0,o.isNothing)(i)&&(i=1048576)
let a=r.significantDigits
if((0,o.isNothing)(a)&&(a=2),i<=0||a<0){e[r.fieldName]=Number.NaN
continue}const c=t/i
e[r.fieldName]=s.reduceSignificantDigits(c,a)}}decorateCommonEventFields(e,t){const n=new r.ObjectReader(e),s=this.options.configuration,i=s.baseFields(t);(0,o.isSome)(i)&&Object.assign(e,i),e.clientBuildType=this.options.environment.buildType,e.resourceRevNum=this.options.environment.jsVersion,e.xpSendMethod="jet-js"
const a=n.asString("pageType"),c=n.asString("pageId")
if((0,o.isSome)(a)&&(0,o.isSome)(c)){const n=s.compoundSeparator(t),r=(0,o.isSome)(n)?(0,o.unwrapOptional)(n):"_"
e.page=`${a}${r}${c}`}const l=s.deResolutionRules(t)
this.applyDeResolutionRules(e,l)}decorateMediaEventEvents(e){const t=new r.ObjectReader(e).asNumber("position");(0,o.isSome)(t)&&(e.position=Math.round(t))}lint(e,t={}){const n=new r.ObjectReader(e),s=n.asString("eventType")
this.options.isLoggingEnabled
const i=JSON.parse(JSON.stringify(e)),a=n.asString("topic"),c=(0,o.isSome)(a)?(0,o.unwrapOptional)(a):this.options.defaultTopic
this.decorateCommonEventFields(i,c),"media"===s&&this.decorateMediaEventEvents(i)
for(const e of this.options.rules)e.apply(i,t)
return{fields:i}}}},8836:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.fetchTimingMetricsBuilderType=t.FetchTimingMetricsBuilder=void 0
const r=n(2450),o=n(900),s=n(2366)
t.FetchTimingMetricsBuilder=class{constructor(){this.metrics=[]}measureParsing(e,t){const n=e.metrics.length>0?[...e.metrics]:[],r=Date.now(),o=t(e),s=Date.now()
return n.length>0&&(n[0].parseStartTime=r,n[0].parseEndTime=s),this.metrics.push(...n),o}measureModelConstruction(e){const t=Date.now(),n=e(),r=Date.now()
return this.saveModelConstructionTimes(t,r),n}async measureModelConstructionAsync(e){const t=Date.now(),n=await e(),r=Date.now()
return this.saveModelConstructionTimes(t,r),n}saveModelConstructionTimes(e,t){this.metrics.length>0?(this.metrics[0].modelConstructionStartTime=e,this.metrics[0].modelConstructionEndTime=t):this.metrics.push({modelConstructionStartTime:e,modelConstructionEndTime:t})}decorate(e){if((0,r.isNothing)(e))throw new Error("Cannot decorate null or undefined")
if("object"!=typeof e)throw new Error("View model to decorate must be an object")
if((0,s.isPromise)(e))throw new Error("Cannot decorate a Promise object")
this.metrics.length>0&&(e.$networkPerformance=this.metrics)}},t.fetchTimingMetricsBuilderType=(0,o.makeMetatype)("jet-engine:fetchTimingMetricsBuilder")},7771:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.reduceSignificantDigits=void 0,t.reduceSignificantDigits=function(e,t){const n=Math.pow(10,t)
return(e>0?Math.floor:Math.ceil)(e/n)*n}},1415:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(3647),t),o(n(8535),t),o(n(8836),t),o(n(6094),t)},6094:(e,t,n)=>{function r(e,t){const n=e.optional(a.fetchTimingMetricsBuilderType)
if((0,i.isSome)(n))return e
if(t)throw new Error("Could not find FetchTimingMetricsBuilder in the object graph")
return e.adding(a.fetchTimingMetricsBuilderType,new a.FetchTimingMetricsBuilder)}async function o(e,t,n){const r=(0,s.inject)(a.fetchTimingMetricsBuilderType,t),o=await r.measureModelConstructionAsync(async()=>{const r=n(e,t)
return await Promise.resolve(r)})
if((0,i.isNothing)(o))throw new Error("model builder function returned null or undefined")
return r.decorate(o),o}Object.defineProperty(t,"__esModule",{value:!0}),t.parseAndBuildModel=t.requestAndBuildModel=void 0
const s=n(9100),i=n(2450),a=n(8836)
t.requestAndBuildModel=async function(e,t,n,s){const i=r(t,!0),a=await n(e,i)
return await o(a,i,s)},t.parseAndBuildModel=async function(e,t,n,c){const l=r(t,!1),u=(0,s.inject)(a.fetchTimingMetricsBuilderType,l).measureParsing(e,()=>n(e,l))
if((0,i.isNothing)(u))throw new Error("parser function returned null or undefined")
return await o(u,l,c)}},4789:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},573:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.makeCompoundAction=t.isCompoundAction=void 0,t.isCompoundAction=function(e){return"compoundAction"===(null==e?void 0:e.$kind)},t.makeCompoundAction=function(e,t){return{$kind:"compoundAction",subactions:t,actionMetrics:e}}},9120:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.makeEmptyAction=t.isEmptyAction=void 0,t.isEmptyAction=function(e){return"emptyAction"===(null==e?void 0:e.$kind)},t.makeEmptyAction=function(e){return{$kind:"emptyAction",actionMetrics:e}}},9634:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},5599:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},2170:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},6158:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},9400:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},1235:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(4789),t),o(n(573),t),o(n(9120),t),o(n(9634),t),o(n(5599),t),o(n(2170),t),o(n(6158),t),o(n(9400),t),o(n(4362),t)},4362:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},998:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.makeArtworkURLTemplate=void 0
const r=n(4172),o=n(2450),s=n(1974),i=new RegExp("^({w}|[0-9]+(?:.[0-9]*)?)x({h}|[0-9]+(?:.[0-9]*)?)({c}|[a-z]{2}).({f}|[a-z]+)$")
t.makeArtworkURLTemplate=function(e){if(void 0===new s.URL(e).pathname)return r.context("makeArtworkURLTemplate",()=>{r.unexpectedType("ignoredValue","A valid URL string",e)}),null
const t=e.substring(e.lastIndexOf("/")+1),n=i.exec(t)
return(0,o.isNothing)(n)||5!==n.length?(r.context("makeArtworkURLTemplate",()=>{r.unexpectedType("ignoredValue","A valid artwork URL template ending with {w}x{h}{c}.{f} format",t)}),null):e}},7615:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},6301:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.areEqual=t.luminanceFrom=t.dynamicWith=t.named=t.rgbWith=t.htmlWith=void 0
const r=n(2450)
t.htmlWith=function(e){return(0,r.isNothing)(e)?null:{$kind:"html",value:e}},t.rgbWith=function(e,t,n,r=1){return{$kind:"rgb",red:e,green:t,blue:n,alpha:r}},t.named=function(e){return{$kind:"named",name:e}},t.dynamicWith=function(e,t,n,r){return{$kind:"dynamic",lightColor:e,lightHighContrastColor:t,darkColor:n,darkHighContrastColor:r}},t.luminanceFrom=function(e){return.2126*e.red+.7152*e.green+.0722*e.blue},t.areEqual=function e(t,n){if((0,r.isNothing)(t))return(0,r.isNothing)(n)
if((0,r.isNothing)(n))return(0,r.isNothing)(t)
const o=t.$kind,s=n.$kind
if("named"===o&&"named"===s){const e=n
return t.name===e.name}if("rgb"===o&&"rgb"===s){const e=t,r=n
return e.red===r.red&&e.green===r.green&&e.blue===r.blue&&e.alpha===r.alpha}if("dynamic"===o&&"dynamic"===s){const r=t,o=n
return e(r.lightColor,o.lightColor)&&e(r.lightHighContrastColor,o.lightHighContrastColor)&&e(r.darkColor,o.darkColor)&&e(r.darkHighContrastColor,o.darkHighContrastColor)}return!1}},5827:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(1235),t),o(n(998),t),o(n(7615),t),o(n(6301),t),o(n(8681),t),o(n(9184),t),o(n(7129),t),o(n(2359),t)},8681:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.menuSeparatorID=void 0,t.menuSeparatorID="com.apple.JetEngine.separator"},9184:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},7129:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},2359:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},6882:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.exportBootstrap=void 0,t.exportBootstrap=function(e){"undefined"!=typeof $exportBootstrap&&$exportBootstrap(e)}},8706:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(6882),t),o(n(4816),t)},4816:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LegacyRuntime=t.Runtime=void 0
const n="function"==typeof exportService
class r{constructor(e,t){this.dispatcher=e,this.objectGraph=t}async dispatch(e){return await this.dispatcher.dispatch(e,this.objectGraph)}}t.Runtime=r,t.LegacyRuntime=class extends r{constructor(e,t,n){super(e,t),this.services=n}serviceWithName(e){return this.services[e]}exportingService(e,t){return n&&function(e,t){exportService(e,t)}(e,t),this.services[e]=t,this}}},1219:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},8045:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},3922:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},9891:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},1121:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},1721:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),"undefined"==typeof preprocessor&&(globalThis.preprocessor={PRODUCTION_BUILD:!1,CARRY_BUILD:!1,DEBUG_BUILD:!1,INTERNAL_BUILD:!1}),"undefined"==typeof testContent&&(globalThis.testContent={INCLUDE_TEST_CONTENT:!1}),o(n(1219),t),o(n(8045),t),o(n(3922),t),o(n(9891),t),o(n(1121),t),o(n(9247),t),o(n(3907),t),o(n(6534),t),o(n(5817),t),o(n(3043),t),o(n(5037),t),o(n(5937),t),o(n(1222),t)},9247:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},3907:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ProxiedNetwork=void 0,t.ProxiedNetwork=class{constructor(e,t){this.original=e,this.pageIntentInstrumentation=t}async fetch(e){return e.$pageIntentInstrumentation=this.pageIntentInstrumentation,await this.original.fetch(e)}}},6534:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},5817:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},3043:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},5037:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},5937:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},1222:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.services=t.random=t.plist=t.platform=t.net=t.localizer=t.host=t.cryptography=t.cookieProvider=t.bundle=t.bag=void 0
const r=n(900)
t.bag=(0,r.makeMetatype)("jet-engine:bag"),t.bundle=(0,r.makeMetatype)("jet-engine:bundle"),t.cookieProvider=(0,r.makeMetatype)("jet-engine:cookieProvider"),t.cryptography=(0,r.makeMetatype)("jet-engine:cryptography"),t.host=(0,r.makeMetatype)("jet-engine:host"),t.localizer=(0,r.makeMetatype)("jet-engine:localizer"),t.net=(0,r.makeMetatype)("jet-engine:net"),t.platform=(0,r.makeMetatype)("jet-engine:platform"),t.plist=(0,r.makeMetatype)("jet-engine:plist"),t.random=(0,r.makeMetatype)("jet-engine:random"),t.services=(0,r.makeMetatype)("jet-engine:services")},2490:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},9031:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(2490),t)},447:(e,t)=>{var n
Object.defineProperty(t,"__esModule",{value:!0}),t.notInstrumented=t.PageInvocationPoint=t.EMPTY_LINTED_METRICS_EVENT=void 0,t.EMPTY_LINTED_METRICS_EVENT={fields:{},issues:[]},(n=t.PageInvocationPoint||(t.PageInvocationPoint={})).pageEnter="pageEnter",n.pageExit="pageExit",n.appExit="appExit",n.appEnter="appEnter",n.backButton="backButton",t.notInstrumented=function(e){switch(e){case 0:return{data:[],custom:{}}
case 1:default:return{}
case 2:return{instructions:[],custom:{}}
case 3:return{id:{id:"",impressionIndex:NaN},fields:{},custom:{}}}}},2024:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},2450:(e,t)=>{function n(e){return null==e}function r(e){return null!=e}Object.defineProperty(t,"__esModule",{value:!0}),t.flatMapOptional=t.mapOptional=t.unsafeUnwrapOptional=t.unwrapOptional=t.isSome=t.isNothing=t.unsafeUninitialized=void 0,t.unsafeUninitialized=function(){},t.isNothing=n,t.isSome=r,t.unwrapOptional=function(e){if(n(e))throw new ReferenceError
return e},t.unsafeUnwrapOptional=function(e){return e},t.mapOptional=function(e,t){return r(e)?t(e):e},t.flatMapOptional=function(e,t){return r(e)?t(e):e}},2879:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.shallowCloneOf=void 0,t.shallowCloneOf=function(e){const t=Object.create(Object.getPrototypeOf(e))
return Object.assign(t,e)}},6151:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ExpiringValue=void 0,t.ExpiringValue=class{constructor(e,t){this._value=e,this._maxAge=t}isValid(){return Date.now()<this._maxAge}get value(){return this.isValid()?this._value:null}}},900:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.makeMetatype=void 0,t.makeMetatype=function(e){return{name:e}}},2366:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isPromise=void 0,t.isPromise=function(e){return null!==e&&"object"==typeof e&&"function"==typeof e.then}},1974:(e,t,n)=>{function r(e,t,n){const r=e.indexOf(t)
let o,s=e
if(-1!==r){const i=e.slice(0,r),a=e.slice(r+t.length,e.length)
"prefix"===n?(o=i,s=a):(o=a,s=i)}return{result:o,remainder:s}}Object.defineProperty(t,"__esModule",{value:!0}),t.URL=void 0
const o=n(2450),s=/^([a-z][a-z0-9.+-]*:)(\/\/)?([\S\s]*)/i,i=/([^=?&]+)=?([^&]*)/g,a=["hash","query","pathname","host"]
class c{constructor(e){var t
if(this.query={},(0,o.isNothing)(e))return
let n=e
const i=s.exec(e)
if((0,o.isSome)(i)){let e=i[1]
null!=e&&(e=e.split(":")[0]),this.protocol=null!=e?e:void 0,n=null!==(t=i[3])&&void 0!==t?t:void 0}let l={remainder:n,result:void 0}
for(const e of a){if(void 0===l||void 0===l.remainder)break
switch(e){case"hash":l=r(l.remainder,"#","suffix"),this.hash=null==l?void 0:l.result
break
case"query":l=r(l.remainder,"?","suffix"),void 0!==(null==l?void 0:l.result)&&(this.query=c.queryFromString(l.result))
break
case"pathname":l=r(l.remainder,"/","suffix"),void 0!==(null==l?void 0:l.result)&&(this.pathname="/"+l.result)
break
case"host":{const e=r(l.remainder,"@","prefix"),t=null==e?void 0:e.result,n=null==e?void 0:e.remainder
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
if(typeof t===y$){if(r=J$[t],!r){if(!t.includes(".")){const r=e[t]
return null!=r?r:n}r=t.split("."),J$[t]=r}}else r=t
let o=e
for(const e of r)if(o=o[e],null==o)return n
return o}function r(e){return null==e}function o(e){return r(e)||0===Object.keys(e).length}function s(e){return typeof e!==JM&&null!==e}function i(e){return!(0,Gh.isNothing)(e)&&(typeof e===y$||Array.isArray(e)?e.length>0:0!==Object.keys(e).length)}function a(e){if(r(e))return!1
let t
return t=typeof e===y$?parseInt(e):e,!Number.isNaN(t)}function c(e,o){const s=n(e,o,null)
return Array.isArray(s)?s:(r(s)||Uh.context("asArrayOrEmpty",()=>{Uh.unexpectedType(RF,"array",s,t(o))}),[])}function l(e,t){return u(e,!1,t)}function u(e,o,s){const i=n(e,s,null)
return typeof i===a_?i:(r(i)||Uh.context("asBooleanWithDefault",()=>{Uh.unexpectedType(RF,a_,i,t(s))}),o)}function d(e,o,s=BF){const i=n(e,o,null)
if(r(i))return i
if(typeof i===y$)return i
{const e=typeof i===vx?null:String(i)
switch(s){case Zk:Uh.context($P,()=>{Uh.unexpectedType(aL,y$,i,t(o))})
break
case BF:r(e)&&Uh.context($P,()=>{Uh.unexpectedType(aL,y$,i,t(o))})}return e}}function f(e,o,s=BF){const i=n(e,o,null)
if(r(i)||typeof i===rx)return i
{const e=Number(i)
switch(s){case Zk:Uh.context(BP,()=>{Uh.unexpectedType(aL,rx,i,t(o))})
break
case BF:if(isNaN(e))return Uh.context(BP,()=>{Uh.unexpectedType(aL,rx,i,t(o))}),null}return e}}function p(e,o,i){const a=n(e,o,null)
return a instanceof Object&&!Array.isArray(a)?a:(r(a)||Uh.context("asDictionary",()=>{Uh.unexpectedType(RF,vx,a,t(o))}),s(i)?i:null)}function h(e,t,n){return p(e,t,n)}function w(e,o,s=BF){const i=n(e,o,null)
if(r(i))return null
if(typeof i===a_)return i
if(typeof i===y$){if(i===qF)return!0
if(i===kR)return!1}const a=Boolean(i)
switch(s){case Zk:Uh.context(UP,()=>{Uh.unexpectedType(aL,rx,i,t(o))})
break
case BF:if(r(a))return Uh.context(UP,()=>{Uh.unexpectedType(aL,rx,i,t(o))}),null}return a}function g(e){if(null==e)return null
switch(typeof e){case y$:case rx:case a_:return e
case vx:return Array.isArray(e),e
default:return Uh.context(GP,()=>{Uh.unexpectedType(RF,"JSONValue",typeof e)}),null}}function m(e){return null==e?null:e instanceof Object&&!Array.isArray(e)?e:(Uh.context(GP,()=>{Uh.unexpectedType(RF,vx,typeof e)}),null)}function y(e,t,n){const r=e.indexOf(t)
let o,s=e
if(-1!==r){const i=e.slice(0,r),a=e.slice(r+t.length,e.length)
n===WP?(o=i,s=a):(o=a,s=i)}return{result:o,remainder:s}}function v(e){if(null==e)return e
const t=Object.create(Object.getPrototypeOf(e))
return Object.assign(t,e),t}function A(e,t){return e instanceof t}function T(e){return!(!(0,Gh.isSome)(e.protocol)||-1===rj.indexOf(e.protocol))}function P(e){const t=e.indexOf("{"),n=e.indexOf("}")
return t>=0&&n>t+1}function I(e){const t=e.indexOf("{"),n=e.indexOf("}")
return t>=0&&n>t?e.substring(t+1,n):e}function S(e,t){const n=t.indexOf("{"),r=e.length-(t.length-(t.indexOf("}")+1))
return n>=0&&r>n?e.substring(n,r):e}function b(e){switch(e.client.deviceType){case U$:return sF
case _$:return pF
case"tv":return NS
case H$:return H$
case W$:return W$
case v$:return HM
default:return null}}function C(e){switch(e.client.deviceType){case U$:return 4
case _$:return 5
case"tv":return 6
case H$:return 5
case W$:return 10
default:return null}}function k(e){switch(e.client.deviceType){case U$:return 9
case _$:return 12
case"tv":case H$:return 15
case W$:return 3
default:return null}}function E(e){switch(e.host.clientIdentifier){case cE:case xR:case AI:return[]
default:{const t=b(e)
return function(e,t){const n=new Set
if(n.add(sF),n.add(pF),n.add(NS),n.add(H$),n.add(W$),e.bag.enableVisionPlatform&&n.add(HM),(0,Gh.isSome)(t))for(const e of t)n.delete(e)
return Array.from(n)}(e,(0,Gh.isSome)(t)?new Set([t]):void 0)}}}function O(e){switch(e.client.deviceType){case U$:return 6
case _$:return 10
case H$:return 12
case v$:return 10
default:return 8}}function R(e){let t=null
return e.host.clientIdentifier===LB?t=MF:e.host.clientIdentifier===_B&&(t=W$),t}function D(e){const t=c(e,iN)
return t.length,1!==t.length?null:t[0]}function _(e){return c(e,iN)}function L(e){const t=n(e,fb)
return"TodayForApps"===e.label||s(t)}function x(e){return c(e,LP)}function M(e){return p(e,nC)}function N(e){if((0,Gh.isNothing)(e)||""===e)return null
const t=wH.exec(e)
return null===t||4!==t.length&&5!==t.length?null:{red:parseInt(t[1],16)/255,green:parseInt(t[2],16)/255,blue:parseInt(t[3],16)/255,alpha:(0,Gh.isSome)(t[4])?parseInt(t[4],16)/255:void 0,type:mM}}function F(e,t,n,r){return{red:e,green:t,blue:n,alpha:r,type:mM}}function $(e){return.2126*e.red+.7152*e.green+.0722*e.blue}function B(e,t=84){if((0,Gh.isNothing)(e))return!1
switch(e.type){case mM:return 100*$(e)<t
case ED:return e.name===oS
default:return!1}}function U(e){return{name:e,type:ED}}function G(e,t){return{lightColor:e,darkColor:t,type:eE}}function V(e,t){return!(0,Gh.isNothing)(e)&&!(0,Gh.isNothing)(t)&&(e.type===mM&&t.type===mM?e.red===t.red&&e.green===t.green&&e.blue===t.blue&&e.alpha===t.alpha:e.type===ED&&t.type===ED?e.name===t.name:e.type===eE&&t.type===eE&&V(e.lightColor,t.lightColor)&&V(e.darkColor,t.darkColor))}function j(e,t,n){return(0,Gh.isNothing)(e)?null:p(e.attributes,t,n)}function H(e,t){return r(e)?[]:c(e.attributes,t)}function W(e,t,n=BF){return r(e)?null:d(e.attributes,t,n)}function q(e,t,n=BF){return r(e)?null:w(e.attributes,t,n)}function z(e,t){return!r(e)&&l(e.attributes,t)}function Y(e,t,n=BF){return r(e)?null:f(e.attributes,t,n)}function J(e){return!r(p(e,qk))}function Z(e){return!J(e)}function K(e){return jH[e]}function Q(e){return e===Kk}function X(e){switch(e){case nE:case s_:case rF:case ng:return!0
default:return!1}}function ee(e){switch(e){case lL:return lL
case fI:return fI
default:return D$}}function te(e,t,n=!0){const r=ne(e,t)
return!!r&&!(!r.data||n&&0===r.data.length)}function ne(e,t){return h(e.relationships,t)}function re(e,t){return h(e.views,t)}function oe(e,t){const n=c(e.relationships,[t,iN])
return 0===n.length?null:(n.length,n[0])}function se(e,t,n=!1){return!te(e,t,!1)&&n?null:c(e.relationships,[t,iN])}function ie(e,t){const n=Math.pow(10,t)
return(e>0?Math.floor:Math.ceil)(e/n)*n}function ae(e){throw new Error(`This method should never be called with value: ${e}`)}function ce(e,t,r){return e?Uh.context(t,()=>{let o=e[rW],s=null
return o?(s=n(o,t),s||(s=le(o,t,r))):(o={},e[rW]=o,s=le(o,t,r)),s}):null}function le(e,t,n){const r=n()
return e[t]=r,r}function ue(e,t){return n(j(e,"platformAttributes"),t)}function de(e,t){return i(ue(e,t))}function fe(e,t,n){const o=ue(e,t)
return r(o)?null:p(o,n)}function pe(e,t,n){const o=ue(e,t)
return r(o)?[]:c(o,n)}function he(e,t,n,o=BF){const s=ue(e,t)
return r(s)?null:d(s,n,o)}function we(e,t,n,o=BF){const s=ue(e,t)
return r(s)?null:w(s,n,o)}function ge(e,t,n,r=!1){return ce(t,`dataHasDeviceFamily.${n}`,()=>!(!t||!n)&&-1!==ve(e,t,r).indexOf(n))}function me(e,t,n,r=!1){return ge(e,t,n,r)&&1===ve(e,t,r).length}function ye(e,t,n,r=!1){const o=new Set(ve(e,t,r))
return n.length===o.size&&n.every(e=>o.has(e))}function ve(e,t,n=!1){const r=H(t,qE)
if(0===r.length&&n){const r=se(t,q$)
for(const t of r){const r=ve(e,t,n)
if(i(r))return r}}return r}function Ae(e,t,n,r,o){r||(r=Ce(e,t))
let s=fe(t,r,n)
return s||(s=j(t,n,o)),s}function Te(e,t,n){let r=pe(t,Ce(e,t),n)
return o(r)&&(r=H(t,n)),r}function Pe(e,t,n,r=BF){let o=he(t,Ce(e,t),n,r)
return o||(o=W(t,n,r)),o}function Ie(e,t,n,o,s=BF){o||(o=Ce(e,t))
let i=we(t,o,n,s)
return r(i)&&(i=q(t,n,s)),i}function Se(e,t,n,o){o||(o=Ce(e,t))
let s=we(t,o,n)
return r(s)&&(s=z(t,n)),s}function be(e,t,n,o=BF){let s=function(e,t,n,o=BF){const s=ue(e,t)
return r(s)?null:f(s,n,o)}(t,Ce(e,t),n,o)
return r(s)&&(s=Y(t,n)),s}function Ce(e,t){return ce(t,"bestAttributePlatformFromData",()=>{const n=ye(e,t,[sF,pF,k_],!0),o=me(e,t,cM),s=me(e,t,H$),i=me(e,t,W$),a=me(e,t,HM)
let c=null
if(o?c=DM:s?c=sN:n?c=EF:i?c=W$:a&&(c=VN),!r(c))return c
const l=function(e){const t=ke(e)
switch(t){case EF:return[EF,DM,sN,VN]
case sN:return[sN,EF,DM,VN]
case DM:return[DM,EF,sN,VN]
case W$:return[EF,W$,sN,VN]
case VN:return[VN,EF,DM,sN]
default:return[t]}}(e)
for(const e of l)if(de(t,e))return e
return ke(e)})}function ke(e){switch(e.client.deviceType){case U$:case _$:return EF
case"tv":return DM
case H$:return sN
case W$:return W$
case v$:return VN
default:return null}}function Ee(e,t,n,r,o){const s=K(r),a=Le(0,Ae(e,t,AS,o),n,s,Q(s))
return i(a)?p(a):Ae(e,t,r,o)}function Oe(e,t){const n=e.optional(oW.metatype)
return(0,Yh.isSome)(n)?n.currentExperimentGroup(e,t):Jh.Qo(e.cookieProvider,t)}function Re(e){return 1===Oe(e,sW)}function De(e){return e.bag.enableProductPageVariants}function _e(e,t,r=null){if(null===r&&(r=function(e){return function(e){const t=Oe(e,iW)
return a(t)?function(e){return iW.identifer+e.toString().padStart(2,"0")}(t):null}(e)}(e)),o(t.id))return
const s={adamID:t.id,productPageId:aW,treatmentPageIdMap:{[aW]:aW},experimentIdMap:{},experimentLocaleMap:{}}
return o(n(t,dN,null))||(function(e,t,r){const s=n(r,"meta.cppData",null)
if(o(s))return
const a=d(s,Q_)
i(a)&&(t.productPageId=a)}(0,s,t),function(e,t,r,s,a){const c=n(a,"meta.experimentData",null)
if(o(c))return
const l=n(c,r,null)
if(o(l))return
const u=d(l,TC),f=d(l,wA)
let p=null
const h=n(l,"trafficAllocation",null)
p=i(h)?function(e,t,n){if(o(n))return aW
for(const[e,r]of Object.entries(t))if(i(r)&&-1!==r.indexOf(n))return e
return aW}(0,h,s):function(e,t,n){const r=Ae(e,t,`customAttributes.${n}`)
if(o(r))return aW
const s=Object.keys(r)[0]
return o(s)?aW:s}(e,a,r),i(p)&&i(u)&&(t.treatmentPageIdMap[r]=p,t.experimentIdMap[r]=u,t.experimentLocaleMap[r]=f)}(e,s,aW,r,t)),s}function Le(e,t,r,i,a){if(o(t))return null
let c
if(r.productPageId!==aW){const e=r.treatmentPageIdMap[aW]
c=a?[`${r.productPageId}.${aW}.${i}`,`${aW}.${e}.${i}`,`${aW}.${aW}.${i}`]:[`${r.productPageId}.${aW}.${i}`,`${aW}.${aW}.${i}`]}else{const e=r.treatmentPageIdMap[aW]
c=[`${aW}.${e}.${i}`,`${aW}.${aW}.${i}`]}for(const e of c){const r=n(t,e)
if(s(r))return r}return null}function xe(e){return r(e)||e.productPageId===aW?null:e.productPageId}function Me(e,t){return xe(_e(e,t))}function Ne(e,t){const n=Ae(e,t,AS)
return o(n)?null:Object.keys(n).filter(e=>e!==aW)}function Fe(e){const t={}
Be(e,VO)&&(t[gA]=e.productPageId)
const n=e.treatmentPageIdMap[aW],r=e.experimentIdMap[aW],o=e.experimentLocaleMap[aW]
return Be(e,IO)&&(t.pageVariantId=n,t.pageExperimentId=r,t.pageExperimentLocale=o),t}function $e(e){const t={}
Be(e,VO)&&(t[gA]=e.productPageId)
const n=e.treatmentPageIdMap[aW],r=e.experimentIdMap[aW],o=e.experimentLocaleMap[aW]
return Be(e,IO)&&(t.variantId=n,t[TC]=r,t[wA]=o),t}function Be(e,t){if(r(e))return!1
switch(t){case VO:return i(e.productPageId)&&e.productPageId!==aW
case IO:return i(e.experimentIdMap)
default:ae(t)}}function Ue(e,t,n){for(const r of n){const n=Me(e,r)
s(n)&&t.addingQuery(`ppid[apps:${r.id}]`,`${n}`)}}function Ge(e,t){var n,o,a
const c=t.href&&t.href.length>0?t.href:function(e,t,n){switch(n){case Mk:case E$:case e_:return`/v1/${Ve(n)}/`
default:const r=`/v1/${Ve(n)}/${e.bag.mediaCountryCode}`
return t?r:`${r}/`}}(e,t.isMixedMediaRequest,t.resourceType),l=new nj(c)
if(i(t.resourceType))for(const e of function(e,t){switch(e){case zx:return void 0===t?[e]:[e,t]
case zk:return[]
case bR:return void 0===t?[c$,e]:[c$,e,t]
case IR:return[q$]
case E$:return[E$,q$]
case TR:return[TR]
case bM:return[Wg,WN]
case xP:return[c$,e]
case PR:return[q$]
case SR:case iR:return[]
case e_:return[q$]
default:return[e]}}(t.resourceType,t.targetResourceType))l.append(FN,e)
if(t.isMixedMediaRequest)for(const[e,n]of t.idsByResourceType.entries())l.param(`ids[${e}]`,Array.from(n).sort().join(","))
else if(t.ids.size>1||t.useIdsAsQueryParam)l.param("ids",Array.from(t.ids).sort().join(","))
else if(1===t.ids.size){const e=t.ids.values().next().value
l.append(FN,e)}if(void 0!==t.resourceType){const e=function(e){switch(e){case IR:return E$
case PR:return"view/customers-also-bought-apps-with-download-intent"
case U_:return V$
case SR:return HP
case iR:return"search/suggestions"
default:return null}}(t.resourceType)
i(e)&&l.append(FN,e)}if(l.param(IM,null!==(n=t.platform)&&void 0!==n?n:void 0),t.additionalPlatforms.size>0&&l.param("additionalPlatforms",Array.from(t.additionalPlatforms).sort().join(",")),t.attributeIncludes.size>0||t.useCustomAttributes){let e=Array.from(t.attributeIncludes)
t.useCustomAttributes&&(e=function(e){const t=e.map(e=>{var t
return null!==(t=K(e))&&void 0!==t?t:e})
return t.push(Kk),t}(e)),e.sort(),l.param(cP,e.join(","))}if(t.includingScopedAttributes(q$,[Tm]),s(t.scopedAttributeIncludes))for(const[e,n]of t.scopedAttributeIncludes.entries())l.param(`extend[${e}]`,Array.from(n).sort().join(","))
if(t.relationshipIncludes.size>0&&l.param("include",Array.from(t.relationshipIncludes).sort().join(",")),s(t.scopedRelationshipIncludes))for(const[e,n]of t.scopedRelationshipIncludes.entries())l.param(`include[${e}]`,Array.from(n).sort().join(","))
if(s(t.metaIncludes))for(const[e,n]of t.metaIncludes.entries())l.param(`meta[${e}]`,Array.from(n).sort().join(","))
if(s(a=t.viewsIncludes)&&a.size>0&&l.param("views",Array.from(t.viewsIncludes).sort().join(",")),s(t.associateIncludes))for(const[e,n]of t.associateIncludes.entries())l.param(`associate[${e}]`,Array.from(n).sort().join(","))
if(s(t.scopedAvailableInIncludes))for(const[e,n]of t.scopedAvailableInIncludes.entries())l.param(`availableIn[${e}]`,Array.from(n).sort().join(","))
if(i(t.fields)){let e=Array.from(t.fields)
t.useCustomAttributes&&(e=function(e){const t=e.map(e=>{var t
return null!==(t=K(e))&&void 0!==t?t:e})
return t}(e)),t.fields.sort(),l.param(wE,e.join(","))}if(s(t.limit)&&t.limit>0&&l.param("limit",`${t.limit}`),s(t.sparseLimit)&&l.param("sparseLimit",`${t.sparseLimit}`),s(t.scopedSparseLimit))for(const[e,n]of t.scopedSparseLimit.entries())l.param(`sparseLimit[${e}]`,String(n))
s(t.sparseCount)&&l.param("sparseCount",`${t.sparseCount}`)
for(const e of Object.keys(t.relationshipLimits).sort()){const n=t.relationshipLimits[e]
l.param(`limit[${e}]`,`${n}`)}i(t.additionalQuery)&&l.append(YM,t.additionalQuery),i(t.searchTerm)&&(((0,Gh.isNothing)(t.resourceType)||t.resourceType!==iR)&&(l.append(FN,c$),l.param("bubble[search]",t.searchTypes.join(","))),l.param(MR,t.searchTerm)),i(t.enabledFeatures)&&l.param(EE,t.enabledFeatures.join(",")),i(t.context)&&l.param(aM,t.context),i(t.filterType)&&i(t.filterValue)&&l.param(`filter[${t.filterType}]`,t.filterValue)
const u=e.bag.mediaApiLanguage
return s(u)&&r(t.additionalQuery.l)&&l.param("l",u),l.host=null!==(o=function(e,t,n){var o
const s=null!==(o=t.pathname)&&void 0!==o?o:""
let i=null
return i=n.isStorePreviewRequest?e.bag.mediaPreviewHost:n.isMediaRealmRequest?e.bag.mediaRealmHost:s.includes("search/landing")?-1!==e.bag.edgeEndpoints.indexOf(bR)?e.bag.mediaEdgeHost(e):e.bag.mediaHost:n.resourceType===e_&&(0,Gh.isSome)(e.bag.appDistributionMediaAPIHost)?e.bag.appDistributionMediaAPIHost:n.isMixedMediaRequest&&e.bag.mediaAPICatalogMixedShouldUseEdge?e.bag.mediaEdgeHost(e):e.bag.edgeEndpoints.map(e=>s.includes(e)).reduce(hW,!1)?s.includes(c$)&&!s.includes(HP)?e.bag.mediaEdgeSearchHost:e.bag.mediaEdgeHost(e):e.bag.mediaHost,r(i)&&(i="api.apps.apple.com"),i}(e,l,t))&&void 0!==o?o:void 0,l.protocol=Gk,l}function Ve(e){switch(e){case q$:case O$:case ON:case x$:case C_:case V$:case RN:case zx:case QF:case RO:case IR:case PR:return VP
case FR:case MN:case M$:case hN:case XE:case jN:case TR:case cR:case JD:case L$:case U_:return yI
case Qk:return Qk
case Mk:case E$:return"me"
case bM:case bR:return jP
case zk:case OE:return XD
case sP:return jP
case e_:return"listing"
default:return VP}}function je(e){return r(e)||""===e?null:(-1!==e.indexOf("T")&&(e=e.split("T")[0]),new Date(e.replace(/-/g,"/")))}function He(e){if(r(e))return null
const t=function(e){return r(e)?null:new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))}(e)
return r(t)?null:t.getTime()}function We(e){if(r(e))return null
const t=new Date(e)
return t.setHours(0,0,0,0),t}function qe(e){return r(e)?null:ze(e)}function ze(e){const t=new Date(e.getTime())
return t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t}function Ye(e,t){return r(e)||r(t)?null:Math.ceil((t.getTime()-ze(e).getTime())/36e5)}function Je(e){return null!==wW||(wW={bundleIdFromData:t=>Pe(e,t,aF),isSystemAppFromData:e=>z(e,nM),isUnsupportedDeletableSystemAppFromData:e=>!1,adamIdFromSystemBundleId(e){}}),wW}function Ze(e,t,n=15358){let o=!1
return 2&n&&(o=o||function(e,t){return Se(e,t,ug)||Se(e,t,dg)}(e,t)),4&n&&(o=o||function(e,t){return ce(t,"shouldFilterDeletableSystemApp",()=>{const n=Je(e)
if(!n.isSystemAppFromData(t))return!1
const r=n.bundleIdFromData(t),o=e.host.deviceModel,i=o.startsWith(hg),a=o.startsWith(wg)
let c
switch(c=!!mu(e,"12.3")||e.bag.isTVAppEnabled,r){case"com.apple.Bridge":case"com.apple.Passbook":case"com.apple.journal":case"com.apple.mobilephone":return!i
case"com.apple.calculator":return a
case"com.apple.Photo-Booth":return!a
case"com.apple.tv":return!c
case"com.apple.videos":return c
case"com.apple.iCloudDriveApp":return!0
case"com.apple.facetime":return!Ke(e,"any-telephony")||!Ke(e,"venice")
case"com.apple.Fitness":if(a||i){let t=!1
return s(e.user.isFitnessAppInstallationAllowed)&&(t=e.user.isFitnessAppInstallationAllowed),!t}return!0
case"com.apple.measure":return!Ke(e,"arkit")
case"com.apple.Jellyfish":return!Ke(e,"front-depth-camera")
case fg:case pg:return!0
case"com.apple.NanoHeartRhythm":return!e.client.isElectrocardiogramInstallationAllowed
case gg:return!Ke(e,"magnetometer")
case"com.apple.NanoOxygenSaturation.watchkitapp":return!e.client.isScandiumInstallationAllowed
case mg:case"com.apple.NanoRadio":return!0
case yg:return!e.client.isCharonSupported
case vg:return!e.client.isMandrakeSupported}return!1})}(e,t)),8&n&&(o=o||function(e,t){return ce(t,"shouldFilterUnsupportedWatchAppOnWatchClient",()=>{const n=Se(e,t,iF),r=t.type===x$
return e.host.clientIdentifier===_B&&!n&&!r})}(e,t)),16&n&&(o=o||function(e,t){return t.type===QF&&!i(p(t,fL))&&!z(t,"isMerchandisedEnabled")}(0,t)),32&n&&(o=o||function(e,t){return ce(t,"shouldFilterLegacyApps",()=>{switch(Pe(e,t,aF)){case"com.apple.mobileme.fmip1":case fg:return!0}return!1})}(e,t)),64&n&&(o=o||function(e,t){return ce(t,"isLegacyMacOSInstaller",()=>(Pe(e,t,aF),!1))}(e,t)),128&n&&(o=o||function(e,t){return ce(t,"shouldFilterUnsupportedPlatform",()=>{if(t.type!==q$&&t.type!==x$)return!1
const n=Vl(e,t),r=jl(0,t,e.appleSilicon.isSupportEnabled)
return!Yl(0,n,e.client.deviceType,r,!1)})}(e,t)),16384&n&&(o=o||function(e,t){return ce(t,"shouldFilterUnsupportedPlatformForCharts",()=>{if(t.type!==q$&&t.type!==x$)return!1
const n=Vl(e,t),r=jl(0,t,!0)
return!Yl(0,n,e.client.deviceType,r,!1)})}(e,t)),256&n&&(o=o||function(e,t){return ce(t,"shouldFilterUnsupportedPreordersOnPlatform",()=>{if(!z(t,KF))return!1
if(t.type!==q$)return!1
const n=Vl(e,t),r=jl(0,t,e.appleSilicon.isSupportEnabled)
return!Kl(0,n,e.client.deviceType,r,!1)})}(e,t)),512&n&&(o=o||function(e,t){return!(!e.client.isPhone||!Se(e,t,tM)||function(e,t){if(r(t)||0===t.length)return!0
const n=t.split("."),o=f(n[0])||0,s=f(n[1])||0,i=f(n[2])||0
return e.client.isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(o,s,i)}(e,Pe(e,t,$R)))||!mu(e,Wl(e,t,e.appleSilicon.isSupportEnabled))}(e,t)),1024&n&&(o=o||function(e,t){const n=z(t,nM),r=!Se(e,t,SI)&&Se(e,t,tM)
return n&&r}(e,t)),2048&n&&(o=o||function(e,t){return e.client.deviceType===W$&&(!Se(e,t,tM)&&!Se(e,t,II)&&!function(e,t){return!(!r(t)&&0!==t.length)||e.client.isPairedSystemVersionAtLeast(t)}(e,he(t,Ce(e,t),OF)))}(e,t)),4096&n&&(o=o||function(e,t){return e.client.deviceType===H$&&Se(e,t,Ag,ke(e))&&!e.appleSilicon.isSupportEnabled}(e,t)),8192&n&&(o=o||function(e,t){const n=Vl(e,t)
return!(e.client.deviceType!==H$||!n.includes(H$)||Zl(e,t,e.appleSilicon.isSupportEnabled,e.appleSilicon.isRosettaAvailable))}(e,t)),o}function Ke(e,t,n){if(e.props.enabled(Tg)){const n=!1
return e.client.deviceHasCapabilitiesIncludingCompatibilityCheckIsVisionOSCompatibleIOSApp([t],n)}return e.client.deviceHasCapabilities([t])}function Qe(e,t){return t&&t.remainingContent?t.remainingContent.slice(0,t.maxPerPage):[]}function Xe(e,t,n){const r={...t}
if(t&&t.remainingContent){const e=et(0,t.remainingContent,t.maxPerPage,n)
r.remainingContent=e}return r}function et(e,t,n,r){return t.slice(n,null!=r?r:t.length)}function tt(e,t=!1,n=!1,r=0){const o=function(e,t){let n
switch(e.host.clientIdentifier){case cE:case xR:case AI:n=!1
break
default:n=e.client.supportsHEIF}return t?n?hD:CE:n?hD:HS}(e,t)
return function(e,t,n=!1,r=0){const o=t===hD?60:70
return new oB(t,o,n)}(0,o,n,r)}function nt(e,t,n=0,r=0,o=null,s=null,i=null){const a=new sB(t,n,r,[tt(e,!1,!1,0)])
return a.backgroundColor=o,a.textColor=s,a.checksum=i,a}function rt(e,t){return s(t)?W(t,"customUrl"):null}function ot(e,t,n,r,o,s,a){if(!i(o)&&e.client.deviceType!==H$)return t
let c
{const e=new pU(n,C$)
c=new GU(r,o,e)}const l=v(a)
if(l.actionType=SD,l.actionDetails={actionUrl:o},od(e,c,l,!1,j$),t instanceof fU)return t.openAction=c,t.includeBetaApps=s,t
{const e=new fU(n,t)
return e.openAction=c,e.includeBetaApps=s,e}}function st(e,t=null){return e===H$?function(e){let t="x-apple.systempreferences:com.apple.preferences.softwareupdate?client=AppStore&variant=CUSTOMER"
return e&&(t+=`&installMajorOSBundle=${e}`),t}(t):null}function it(e){return null===jW&&(jW=new iQ({defaultTopic:YB,buildType:e.client.buildType,jsVersion:e.props.asString("version"),buyDecorator:VW,isLoggingEnabled:!0,bagProvider:(t,o)=>{const s=e.bag.metricsConfiguration
if(!r(o)){const e=n(s,[o,t])
if(!r(e))return e}return n(s,t)}})),jW}function at(e){var t
const n={}
if(!e)return n
Object.assign(n,e.baseFields),e.pageUrl?n[WL]=e.pageUrl:e.timingMetrics&&e.timingMetrics.pageURL&&(n[WL]=e.timingMetrics.pageURL),e.recoMetricsData&&Object.assign(n,e.recoMetricsData),e.mercuryMetricsData&&Object.assign(n,e.mercuryMetricsData),e.productVariantData&&Object.assign(n,Fe(e.productVariantData)),e.iAdInfo&&s(e.iAdInfo.pageFields[iQ.hasIAdData])&&(n[iQ.hasIAdData]=e.iAdInfo.pageFields[iQ.hasIAdData])
const r=null===(t=e.iAdInfo)||void 0===t?void 0:t.pageFields[hM]
return s(r)&&(n[hM]=r),Ou(n)}function ct(e,t,n,i,a,c,l,u,f,p,h,w,g,y,v){const A=function(e,t){const n=new nW(t),r=d(e.bag.metricsConfiguration,"metricsBase.language")
return n.set("languageId",r),n.toString()}(e,n)
return function(e,t,n,o,i,a,c){const l=new nW(t)
return function(e,t,n,o,i,a,c){var l,u
const f=d(a,_D)
t.set(_D,f),t.set(JR,YB),VW.useNativeValues(a)
const p=VW.params
for(const e of Object.keys(p)){if(e===$b&&(0,Gh.isSome)(t.get($b)))continue
const n=d(p,e)
t.set(e,n)}if(!r(c))for(const e of Object.keys(c)){const n=d(c,e)
t.set(e,n),t.set(e,n,null)}if(!a)return t.set(_F,null),void t.set(FO,null)
const h=d(a,zL)
if((null==h?void 0:h.length)>0&&t.set(zL,h),(null===(l=t.get(tv,null))||void 0===l?void 0:l.length)>0&&t.set(C$,e.host.clientIdentifier),!o&&!WB.shared.shouldUseJSReferralData){const e=d(a,MD),n=Eu(e)
e&&n&&(a[LD]=n)
const r=d(a,"usageContext")
if((0,Gh.isSome)(r)){switch(r){case Ub:t.set(zL,"com.apple.AppStore.overlay")
break
case Gb:t.set(zL,Bb)}t.set(xD,h,null)}else{const e=d(a,xD)
t.set(xD,e,null)
const n=d(a,MD)
t.set(MD,n,null),d(a,"extRefAppType")===ov&&t.set(zL,Bb)}}const w=t.get(fM),g=t.get(fN),m=(null!==(u=null==w?void 0:w.split("_"))&&void 0!==u?u:[]).includes(n)
if(g!==xx||m){const e=Du(d(a,qL))
s(e)&&t.set(_F,e)}t.set(Zy,null,null)}(e,l,n,o,0,a,c),l.toString()}(e,function(e,t,n,i,a,c,l,u,f,p,h,w){const g=new nW(t)
return function(e,t,n,i,a,c,l,u,f,p,h,w){var g,y,v
const A=at(i)
a&&t.set(q_,a),c&&t.set(PN,c)
const T=d(m(A),fM)
t.set(fM,T)
const P=d(m(A),fN)
t.set(fN,P)
const I=d(m(A),Mx);(null==I?void 0:I.length)>0&&t.set(HW.containerId,I,null)
const S=(null!==(g=null==T?void 0:T.split("_"))&&void 0!==g?g:[]).includes(n),b=P===xx,C=(null===(y=t.get(tv,null))||void 0===y?void 0:y.length)>0
if(!b||S||C){let e=d(m(i),_F)
o(e)&&(e=function(e){if((0,Yh.isNothing)(e))return null
const t=new nj(e),n=t.query[_F],r=t.pathname
return(0,Yh.isNothing)(n)||(0,Yh.isNothing)(r)?null:r.includes("/app")?n:null}(null==i?void 0:i.pageUrl)),r(e)||t.set(_F,e)}if(b&&(0,Gh.isSome)(i)&&(null===(v=new nj(i.pageUrl).query)||void 0===v?void 0:v[Fb])===nv&&(t.set($b,rv),t.set("browserChoiceScreenBuy","1",null)),function(e,t,n,r){const o=s(n)&&n.adamID===t,i=s(r)&&r.adamID===t&&!o
if(o){const t=Fe(n)
for(const n of Object.keys(t)){const r=d(t,n)
e.set(n,r)}}if(i){const t=$e(r)
for(const n of Object.keys(t)){const r=d(t,n)
e.set(n,r)}}}(t,n,null==i?void 0:i.productVariantData,u),!r(l)&&l.length>0&&t.set(FO,l),t.set(YR,f),!p)if(s(WB.shared.activeReferralData)){t.set(xD,WB.shared.activeReferralData.extRefApp2,null),t.set(MD,WB.shared.activeReferralData.extRefUrl2,null)
const e=WB.shared.activeReferralData.kind.name
e!==ov&&"appClip"!==e||t.set(zL,Bb)}else t.set(xD,h,null),t.set(MD,w,null)}(0,g,n,i,a,c,l,u,f,p,h,w),g.toString()}(0,A,t,i,l,u,f,w,g,a,y,v),t,a,0,p,h)}function lt(e,t){const n=Se(e,t,"usesExternalPurchase"),r=Se(e,t,"usesExternalLinkPurchase")
return n||r}function ut(e,t){return e.bag.enableExternalPurchases&&e.bag.enabledExternalPurchasesPlacements.includes(t)}function dt(e,t,n,r){const s=e.bag.externalPurchasesLearnMoreEditorialItemId
if(o(s)||!e.bag.enableExternalPurchases)return null
const i=new nU(WF)
return i.title=t,i.pageUrl=`https://apps.apple.com/story/id${s}`,od(e,i,{id:KR,targetType:m$,actionType:A$,pageInformation:n,locationTracker:r}),i}function ft(e,t){return Uh.context("offerDataFromData",()=>{const n=Te(e,t,Y_)
return 0===n.length?null:n[0]})}function pt(e,t){const n=H(t,Y_)
return 0===n.length?null:n[0]}function ht(e,t,n,o,i,a,c,l=T$,u,f){return Uh.context(`offerActionFromOfferData: ${n.id}`,()=>{var p,h,w,g,m,y,v,A
let T=d(t,VM)
if(r(T))return Uh.unexpectedNull(LF,y$,Pb),null
if(n.type===x$&&(T.indexOf("rebuy")>=0?T=T.replace("rebuy=false",Vv):(T.length>0&&(T+="&"),T+=Vv)),(null===(p=c.inAppEventId)||void 0===p?void 0:p.length)>0&&(T.length>0&&(T+="&"),T+=`mtInAppEventId=${c.inAppEventId}`),c.isAdvert){const e=null===(w=null===(h=c.pageInformation)||void 0===h?void 0:h.iAdInfo)||void 0===w?void 0:w.placementId
s(e)&&(T.length>0&&(T+="&"),T+=`${HW.placementId}=${e}`)
const t=null===(m=null===(g=c.pageInformation)||void 0===g?void 0:g.iAdInfo)||void 0===m?void 0:m.containerId
s(t)&&(T.length>0&&(T+="&"),T+=`${HW.containerId}=${t}`)
const n=null===(v=null===(y=c.pageInformation)||void 0===y?void 0:y.iAdInfo)||void 0===v?void 0:v.clickFields[$D]
s(n)&&(T.length>0&&(T+="&"),T+=`${HW.templateType}=${n}`)}const P=n.id
if(r(P))return Uh.unexpectedNull(LF,y$,"item.offer.id"),null
const I=function(e,t,n,r,o,s,i,a,c,l){return Uh.context("purchaseConfigurationFromProduct",()=>{const u=W(t,z$)
let f=W(t,QN)
f||(f=Uv)
const p=Je(e).bundleIdFromData(t),h=Vl(e,t),w=W(t,Gy),g=Pe(e,t,"preflightPackageUrl"),m=du(e,t),y=jl(0,t,e.appleSilicon.isSupportEnabled),v=d(c,C$),A=d(c,NR),T=new tB(n,f,u,p,h,r,o,i,w,!1,g,m,y,!1,a.inAppEventId,v,A,void 0,Hl(e,t),l)
return T.pageInformation=s,T.productVariantData=_e(e,t),T.targetType=a.targetType,T.metricsKind=a.kind,T})}(e,n,T,o,c.excludeAttribution,c.pageInformation,a,c,u,f),S=yt(e,t,P,I,i,l,null!==(A=c.isAdvert)&&void 0!==A&&A)
return function(e,t,n,r,o){var s,i,a
const c=n.pageInformation,l=Mu(e,{...n,targetType:j$},t.title)
let u=t.adamId;(null===(i=null===(s=n.anonymizationOptions)||void 0===s?void 0:s.anonymizationString)||void 0===i?void 0:i.length)>0&&(u=n.anonymizationOptions.anonymizationString),(null===(a=n.targetId)||void 0===a?void 0:a.length)>0&&(u=n.targetId),nd(e,t,u,r,c,l,n.isAdvert,n.recoMetricsData,o)}(e,S,c,o,f),S})}function wt(e,t){return r(t)||r(t.price)||0===t.price}function gt(e,t){return Uh.context("expectedReleaseDateFromData",()=>je(W(t,"offers.0.expectedReleaseDate")))}function mt(e,t){const n=d(t,aN)
return n===tD||n===jO||n===DN?f(t,f_):null}function yt(e,t,n,r,o,s=T$,i=!1){return Uh.context("offerActionFromOfferData",()=>{const a=d(t,aN),c=i&&s===T$&&(0,Gh.isSome)(e.bag.adsOverrideLanguage)?e.adsLoc:e.loc
let l
switch(a){case"get":if(s===xN)l=e.loc.string(jv,"Get")
else{e.featureFlags.isEnabled(Am)
const t=UD
l=c.string(t)}break
case DN:l=s===xN?e.loc.string(Hv,"Pre-Order"):c.string(UD)
break
default:l=a}let u=null,f=null
const p=mt(0,t)
p>0&&(u=p,f=d(t,gx))
const h=je(d(t,kx)),w=new aU(l,n,r)
return w.price=u,w.priceFormatted=f,w.expectedReleaseDate=h,w.includeBetaApps=o,w})}function vt(e,t,n,o,i,a=T$,c=!1,l=null,u=!1){if(hu(0,n)){if(a===xN)return null
if(a===T$)return yl(e,n,i,null,c)
const r=Pe(e,n,aF)
if((null==r?void 0:r.length)>0){const e=st(H$,r),n=new sU(e)
return new fU(t.adamId,n)}}if(a===T$&&(n.type===x$||wu(e,n)||u))return yl(e,n,i,null,c)
if(o&&"tv"!==e.client.deviceType&&!du(e,n)){const o=function(e,t,n,o,s){if(r(t))return null
if(e.bag.arePreordersCancellable){const r=Tt(e,n,t,!1,o)
return r.buyAction=t,r}{if(s!==T$)return null
const r=yl(e,n,o,null,!1)
if(!r)return t
const i=new fU(t.adamId,r)
return i.buyAction=t,i}}(e,t,n,i,a)
if(null!==o)return o}if(me(e,n,HM)&&e.client.deviceType!==v$)return function(e,t){const n=new IU(T$)
n.title=e.loc.string("Alert.Buy.VisionOnly.Title"),n.message=e.loc.string("Alert.Buy.VisionOnly.Message"),n.isCancelable=!0,n.buttonActions=[t],n.buttonTitles=[e.loc.string("Alert.Buy.VisionOnly.ButtonTitle")]
const r=new fU(t.adamId,n)
return r.title=t.title,r}(e,t)
if(me(e,n,cM)&&"tv"!==e.client.deviceType)return function(e,t,n){const r=new IU(T$)
r.title=e.loc.string("Alert.Buy.TvOnly.Title"),r.message=e.loc.string("Alert.Buy.TvOnly.Message"),r.isCancelable=!0,r.buttonActions=n?[St(e,t)]:[t],r.buttonTitles=[e.loc.string("Alert.Buy.TvOnly.ButtonTitle")]
const o=new fU(t.adamId,r)
return o.title=t.title,o}(e,t,Se(e,n,BR))
if(!Se(e,n,SI)&&Se(e,n,tM)&&e.client.deviceType!==W$)return function(e,t){const n=new IU(T$)
n.title=e.loc.string("Alert.Buy.WatchOnly.Title"),n.message=e.loc.string("Alert.Buy.WatchOnly.Message"),n.isCancelable=!0,n.buttonActions=[t],n.buttonTitles=[e.loc.string("Alert.Buy.WatchOnly.ButtonTitle")]
const r=new fU(t.adamId,n)
return r.title=t.title,r}(e,t)
const d=Pe(e,n,$R)
if((null==l?void 0:l.length)>0&&l===_B&&yu(e,d))return function(e,t,n){const r=new IU(T$)
r.title=e.loc.string("ProductPage.WatchOSUpdateRequired.Title").replace(wM,n),r.message=e.loc.string("ProductPage.WatchOSUpdateRequired.Message").replace(wM,n),r.buttonActions=[t],r.buttonTitles=[e.loc.string(aS)]
const o=new fU(t.adamId,t)
return o.buyAction=r,o}(e,t,d)
if(function(e,t){return!!du(e,t)}(e,n)){const c=function(e,t,n,o,i){return"tv"===e.client.deviceType?function(e,t,n,o,i){if(r(t))return{startAction:null,underlyingOfferAction:null}
if("tv"!==e.client.deviceType)return{startAction:t,underlyingOfferAction:null}
const a=new lU,c=wt(0,t),l=t.purchaseConfiguration.appName
a.shouldCheckForAvailableDiskSpace=!o,a.remoteControllerRequirement=ox,a.shouldCheckForGameController=Se(e,n,BR),a.shouldPromptForConfirmation=!0
const u=Y(n,zv)
if(s(u)&&(a.checkRestrictionsForContentRating=u),c){const t=o?e.loc.string("OfferAlert.TV.Title.PredorderFree"):e.loc.string("OfferAlert.TV.Title.Free")
a.title=t.replace($x,l)}else{const n=o?e.loc.string("OfferAlert.TV.Title.PreorderPaid"):e.loc.string("OfferAlert.TV.Title.Paid")
a.title=n.replace($x,l).replace(VD,t.priceFormatted)}const d=v(t)
d.title=o?e.loc.string("OfferButton.Title.Preorder"):c?e.loc.string(UD):e.loc.string("OfferButton.Title.Buy"),a.completionAction=d,a.shouldIncludeActiveAccountInFooterMessage=!0
const f=[]
o&&!e.bag.arePreordersCancellable&&f.push(e.loc.string("TV_PREORDER_TERMS")),Se(e,n,VS)&&f.push(e.loc.string("OFFERS_IN_APP_PURCHASES","Offers In-App Purchases")),f.length>0&&(a.footerMessage=f.join(e.loc.string(qv))),a.impressionMetrics=d.impressionMetrics
const p=v(a)
p.shouldPromptForConfirmation=!1,p.title=null,p.footerMessage=null
const h=new fU(t.adamId,p)
return du(e,n)||(h.buyAction=a),h.openAction=t,{startAction:h,underlyingOfferAction:d}}(e,t,n,o):{startAction:r(t)?null:t,underlyingOfferAction:null}}(e,t,n,o),l=c.startAction
if(du(e,n))return function(e,t,n,r,o,s,i,a){var c,l
if(!du(e,r))return t
let u=null
const d=X(i),f=new YH(F$,i,r.id);(0,Gh.isSome)(null===(c=null==a?void 0:a.pageInformation.searchTermContext)||void 0===c?void 0:c.term)&&(f.metricsOverlay[_F]=null===(l=a.pageInformation.searchTermContext)||void 0===l?void 0:l.term),d&&(f.purchaseSuccessAction=t,f.carrierLinkSuccessAction=t)
const p=new nU(bM)
if(p.pageData=f,u=p,a&&a.pageInformation&&(u.referrerUrl=a.pageInformation.pageUrl),t instanceof aU&&(a.actionDetails={buyParams:t.purchaseConfiguration.buyParams,...a.actionDetails}),rd(e,u,a),o&&t instanceof aU){let n
if(e.bag.arePreordersCancellable){n=Tt(e,r,t,!0,a),n.buyAction=t
const o=Tt(e,r,t,!0,a)
o.buyAction=t,n.subscribePageAction=o}else{let o=new RU
s===T$&&(o=yl(e,r,a,null,!1)),n=new fU(r.id,o),n.buyAction=t,n.subscribePageAction=t}return t.buyCompletedAction=function(e,t){const n=nt(e,"systemimage://checkmark",95,90),r=nt(e,$g,95,90)
let o,s
o=new IU(h_),o.title="",e.bag.arePreordersCancellable?o.artwork=n:o.artwork=r,e.client.isAutomaticDownloadingEnabled()?(o.message=e.loc.string(sC),o.toastDuration=2.5):(o.message=e.loc.string(J_),o.toastDuration=1.5)
{const n=new IU(h_)
n.title="",n.artwork=r,n.message=e.loc.string(J_),n.toastDuration=1.5
const o=new _U(iC,new iU([t,n]))
o.rateLimit=e.bag.arcadePreOrderUpsellLimitSeconds,o.fallbackAction=n,s=o}return e.bag.newEventsForODJAreEnabled&&!e.client.isAuthorizedForUserNotifications()?new LU(new RU,new RU,new RU,new RU):new LU(s,o,o,o)}(e,u),n}const h=new fU(r.id,t)
return h.subscribePageAction=u,h}(e,l,c.underlyingOfferAction,n,o,a,function(e,t,n){if(n)return oE
switch(t){case rF:return s_
case T$:case xN:return nE
default:return Xx}}(0,a,o),i)
if(o&&e.bag.arePreordersCancellable){const t=Tt(e,n,c.underlyingOfferAction,!1,i)
return t.buyAction=l,t}return l}return It(e,t,o,i)}function At(e,t,n,r,o,s,i=null){switch(r){case s_:case nE:const r=_l(e,t,{useCase:3}),a=td(e,t,s)
return ht(e,ft(e,t),t,o,!1,_u(e,t,r,i),a,n)
default:return null}}function Tt(e,t,n,r,o){let s
if(r){const i=Pt(e,t,n.purchaseConfiguration.appName,r,!0,o),a=Pt(e,t,n.purchaseConfiguration.appName,r,!1,o)
s=new LU(a,a,i,a)}else s=Pt(e,t,n.purchaseConfiguration.appName,!1,!1,o)
return new fU(t.id,s)}function Pt(e,t,n,r,o,s){const i=new uU(t.id,r),a=e.loc.string("CANCEL_COMING_SOON_TITLE")
let c
e.client.isAutomaticDownloadingEnabled()&&(r&&o||!r)?(i.title=e.loc.string("CANCEL_COMING_SOON_BUTTON_DOWNLOAD"),c=e.loc.string("COMING_SOON_BODY_DOWNLOAD").replace(Wv,n)):(i.title=e.loc.string("CANCEL_COMING_SOON_BUTTON"),c=e.loc.string("COMING_SOON_BODY").replace(Wv,n))
const l=e.loc.string("CANCEL_COMING_SOON_CANCEL")
let u
switch(e.client.deviceType){case H$:case"tv":const t=new IU(T$)
t.title=a,t.message=c,t.buttonActions=[i],t.isCancelable=!0,t.cancelTitle=l,t.destructiveActionIndex=0,u=t
break
case v$:const n=new IU(T$)
n.title=a,n.artwork=nt(e,"systemimage://bell.slash.fill",95,90),n.message=c,n.buttonActions=[i],n.isCancelable=!0,n.cancelTitle=l,u=n
break
default:const r=new PU([i])
r.title=a,r.message=c,r.isCancelable=!0,r.cancelTitle=l,r.isCustom=!1,r.destructiveActionIndex=0,u=r}return od(e,i,{...s,actionType:"cancelPreorder"}),u}function It(e,t,n,o){if(r(t))return null
if(e.client.newPaymentMethodEnabled||n)return t
const s=new RU
s.impressionMetrics=t.impressionMetrics
const i=v(o)
r(i)||(i.actionType=jb,i.targetType=j$,od(e,s,i))
const a=new cU(t,s)
return a.confirmationAccessibilityAction=function(e,t){if(r(t))return null
const n=new IU(T$)
r(t.priceFormatted)?(n.title=e.loc.string(o_),n.message="Are you sure you want to get "+t.purchaseConfiguration.appName):(n.title="Buy App",n.message=`Are you sure you want to buy ${t.purchaseConfiguration.appName} for ${t.priceFormatted}`),n.isCancelable=!0,n.buttonActions=[t]
const o=new fU(t.adamId,t)
return o.buyAction=n,o}(e,t),a}function St(e,t){const n=new IU(T$)
return n.title=e.loc.string("Alert.Buy.TvGameControllerRequired.Title"),n.message=e.loc.string("Alert.Buy.TvGameControllerRequired.Message"),n.buttonTitles=[e.loc.string("Alert.Buy.TvGameControllerRequired.ButtonTitle")],n.isCancelable=!0,n.buttonActions=[t],n}function bt(e,t,n,o,i,a,c,l,u,f,p=T$,h=!1,w=!1,g){return r(t)?null:Uh.context("displayPropertiesFromOfferAction",()=>{let r=c
Ze(e,o,11702)&&(r=uL),Sl(e,o)||(r=uL)
const a=bl(0,o)
let g=null
a&&(g=a.id)
let m=new nB(n,t.adamId,r,g,l)
m.isPreorder=i
const y=w&&p===T$&&(0,Gh.isSome)(e.bag.adsOverrideLanguage),A=y?e.adsLoc:e.loc
if(m.useAdsLocale=y,i)if(du(e,o))m.offerLabelStyle=oE,m.subtitles[kx]=Tu(e,o,e.loc.string(GD)),e.bag.arePreordersCancellable&&(m.titleSymbolNames[Yv]=Jv,m.titleSymbolNames[Zv]="bell.fill"),m.subtitles[kx]===e.loc.string(iy)&&(m.subtitles[kx]=e.loc.string(GD))
else{m.offerLabelStyle=DN,e.bag.arePreordersCancellable&&(m.titleSymbolNames[S$]=Jv)
const t=Tu(e,o,"");(0,Gh.isSome)(t)&&(m.subtitles[kx]=t)}const T=wt(0,t)
m.isFree=T
let P=null
if(p===T$&&(o.type===x$||hu(0,o)||wu(e,o)||h))P=e.loc.string("OfferButton.Title.View")
else{if(p===xN&&(o.type===x$||hu(0,o)||wu(e,o)))return null
P=T?p===xN?i?e.loc.string(Hv):e.loc.string(jv):t.title:p===xN?i?e.loc.string("OfferButton.FlowPreview.PreorderWithPrice").replace(VD,t.priceFormatted):e.loc.string("OfferButton.FlowPreview.BuyWithPrice").replace(VD,t.priceFormatted):t.priceFormatted}if(m.titles[S$]=P,m.priceFormatted=t.priceFormatted,e.client.newPaymentMethodEnabled||p===xN||(m.titles[aC]=T?e.loc.string("OfferButton.Title.ConfirmGet"):e.loc.string("OfferButton.Title.ConfirmBuy")),du(e,o))if(p===xN){const t=e.loc.string("OfferButton.FlowPreview.Arcade.Standard")
m.titles[S$]=t,m.titles[cC]=t,m.titles.open=e.loc.string("OfferButton.FlowPreview.Arcade.Open"),m.titles[lC]=t,i&&(m.titles[Kv]=e.loc.string("OfferButton.FlowPreview.Arcade.PreorderSubscribed"),m.titles[Qv]=e.loc.string("OfferButton.FlowPreview.Arcade.PreorderNotSubscribed"))}else{const e=A.string("OfferButton.Arcade.Title.Standard")
m.titles[S$]=e,m.titles[cC]=e,m.titles.open=A.string("OfferButton.Arcade.Title.Open"),m.titles[lC]=e,i&&(m.titles[Kv]=A.string("OfferButton.Arcade.Title.PreorderSubscribed"),m.titles[Qv]=A.string("OfferButton.Arcade.Title.PreorderNotSubscribed"),m.titles[Yv]=A.string("OfferButton.Arcade.Title.PreorderedSubscribed"),m.titles[Zv]=A.string("OfferButton.Arcade.Title.PreorderedNotSubscribed"))}if(u&&p!==xN){const t=d(u,Nv),n=d(u,gx)
if(s(n)&&s(t)){let r=null,o=null
switch(t){case Fv:f?(r=e.loc.string(uC),o=e.loc.string(uC)):(r=e.loc.string(uC),o=e.loc.string(HO))
break
case $v:const t=e.loc.string("OfferButton.IntroPrice.PaidUpfront.Trial").replace(VD,n)
f?(r=t,o=t):(r=t,o=e.loc.string(HO))
break
case Bv:r=e.loc.string(HO),o=e.loc.string(HO)}m.titles[dC]=r,m.titles[fC]=o,m.subtitles[dC]=e.loc.string(Xv),m.subtitles[fC]=e.loc.string(Xv)
const s=10
let i=!1
for(const e of Object.keys(m.titles))if(m.titles[e].length>s){i=!0
break}i&&(m=m.newOfferDisplayPropertiesChangingAppearance(!1,null,Cb))}}const I=Se(e,o,VS),S=lt(e,o),b=ut(e,r$),C=S&&b
if(m.hasInAppPurchases=I,m.hasExternalPurchases=C,I||C){const t=eA,n=C?tA:t,r=A.string(n)
m.subtitles[S$]=r,e.client.newPaymentMethodEnabled||p===xN||(m.subtitles[aC]=r)}m.isDeletableSystemApp=Je(e).isSystemAppFromData(o)&&!wu(e,o)
const k=Y(o,zv)
return m.contentRating=k,o.type===x$&&p!==xN&&(m.offerToken={offerAction:t,offerDisplayProperties:v(m)}),m})}function Ct(e,t){if(!t.isFirstRender)return i(t.remainingItems)?t.remainingItems:[]
const n=se(t.data,V$)
return i(n)?n:[]}function kt(e,t){let n=null
switch(t.type){case M$:case MN:case Ox:n=oe(t,PF)||oe(t,bF)||oe(t,V$)||oe(t,C$)
break
case q$:case QF:case x$:n=t}return n}function Et(e,t){if(o(t))return null
const n=c(t.meta,qS)
return o(n)?null:n[0]}function Ot(e,t){return h({...j(t,Px,{}),...j(Et(0,t),Px,{})})}function Rt(e){return{showAppIcon:u(e.showAppIcon,!1),suppressLockup:u(e.suppressLockup,!1),useGeneratedBackground:u(e.useGeneratedBackground,!1),useMaterialBlur:u(e.useMaterialBlur,!0),useTextProtectionColor:u(e.useTextProtectionColor,!1)}}function Dt(e,t){if(!J(t))return null
let n
return n=t.type===M$?Pu(e,t):t,J(n)?n:null}function _t(e,t){const n=i(j(t,m$)),r=z(t,AL)
return!n&&!r}function Lt(e,t){const n=t.type
return n!==rw.Collection&&n!==rw.Recommendations?null:W(t,vF)}function xt(e,t){switch(W(t,Dy)){case mb:return"com.apple.AppStore.BridgeStoreExtension"
case yb:return"com.apple.MobileSMS"
default:return null}}function Mt(e){return h(function(e){return c(e,"meta.associations.editorial-cards.data")}(e)[0])}function Nt(e){switch(e){case Vh.bottomLeft:return Vh.bottomRight
case Vh.left:return Vh.right
case Vh.topLeft:return Vh.topRight
case Vh.bottomRight:return Vh.bottomLeft
case Vh.right:return Vh.left
case Vh.topRight:return Vh.topLeft
default:return e}}function Ft(e){return{collapsedContentMode:Nt(e.collapsedContentMode),expandedContentMode:Nt(e.expandedContentMode),collapsedLayoutInsets:{top:e.collapsedLayoutInsets.top,left:e.collapsedLayoutInsets.right,bottom:e.collapsedLayoutInsets.bottom,right:e.collapsedLayoutInsets.left},expandedLayoutInsets:{top:e.expandedLayoutInsets.top,left:e.expandedLayoutInsets.right,bottom:e.expandedLayoutInsets.bottom,right:e.expandedLayoutInsets.left}}}function $t(e,t){return e.props.enabled(ZN)||e.props.enabled(Ok)&&t?[Kt(e),Qt(e)]:[]}function Bt(e){return e.props.enabled(ZN)?KW:Jq}function Ut(e){return e.props.enabled(ZN)?nq:Yq}function Gt(e){return e.props.enabled(ZN)?aq:Kq}function Vt(e){return e.props.enabled(ZN)?dz:Hq}function jt(e){return e.props.enabled(ZN)?yz:Wq}function Ht(e,t){const n=e.props.enabled(ZN)?Iz:Zq
if(t){const e={...n}
return e.crops=t,e}return n}function Wt(e){return e.props.enabled(ZN)?bz:qq}function qt(e){return e.props.enabled(ZN)?kz:zq}function zt(e){return e.props.enabled(ZN)?Rz:Uq}function Yt(e){return e.props.enabled(ZN)?Mz:Gq}function Jt(e){return e.props.enabled(ZN)?$z:Vq}function Zt(e,t){const n=e.props.enabled(ZN)?jz:jq
if(t){const e={...n}
return e.crops=t,e}return n}function Kt(e){return e.props.enabled(ZN)?eY:Xq}function Qt(e){return e.props.enabled(ZN)?lY:Qq}function Xt(e,t,n){const r=is(t,n.coercedCollectionTodayCardDisplayStyle),o=n.isHorizontalShelfContext?function(e){return[Zt(e,["SCS.ApDPCS01"]),Ht(e,["sr"]),Gt(e)]}(e):function(e,t,n){const r=new Set([fw.List,fw.NumberedList])
if(e.client.isPad&&n.isHeroCard&&!r.has(t))return $t(e,n.isHeroCard)
switch(t){case fw.AppEventCard:return[zt(e),Yt(e),Jt(e),Zt(e),...$t(e,n.isHeroCard),Ut(e)]
case fw.AppOfTheDay:case fw.GameOfTheDay:return[zt(e),Yt(e),Jt(e),Zt(e),...$t(e,n.isHeroCard),Bt(e)]
case fw.List:case fw.NumberedList:return[Vt(e),jt(e)]
case fw.ShortImage:return n.isSearchContext?[Gt(e),zt(e),Yt(e),Jt(e),Zt(e),...$t(e,n.isHeroCard),Wt(e),qt(e),Ht(e)]:[zt(e),Yt(e),Jt(e),Zt(e),...$t(e,n.isHeroCard),Wt(e),qt(e),Gt(e),Ht(e)]
case fw.FullBleedImage:case fw.SingleApp:case fw.Video:default:return[zt(e),Yt(e),Jt(e),Zt(e),...$t(e,n.isHeroCard),Wt(e),qt(e),Ht(e),Gt(e)]}}(e,r,n)
let s,i=!1
const a=Mt(t)
if(J(a)&&(s=o.find(e=>(0,Yh.isSome)(j(a,e.objectPath))),i=(0,Yh.isSome)(s)),(0,Yh.isNothing)(s)&&(s=o.find(e=>(0,Yh.isSome)(j(t,e.objectPath)))),s===aq&&n.metricsDisplayStyle===pw.SmallCard&&(s.cardArtLayouts=[s.cardArtLayoutMetrics[0].ltr,s.cardArtLayoutMetrics[0].rtl]),!s)return
const c=j(i?a:t,s.objectPath)
if(s.type===cF){const t=s.crops.map(t=>{let r=t
return n.isSearchContext&&(0,Yh.isSome)(n.prevailingCropCode)&&(r=n.prevailingCropCode),El(e,c,{withJoeColorPlaceholder:!0,cropCode:r,useCase:15,overrideHeight:s.sourceHeight,overrideWidth:s.sourceWidth})}),r=en(c)
return{artworks:t,videos:[],cardArtLayouts:s.cardArtLayouts,artworkLayoutsWithMetrics:s.cardArtLayoutMetrics,joeColors:r}}{const t=p(c,EL),r=f(t,Ix),o=f(t,lM)>=r
let i=s.sourceHeight,a=s.sourceWidth
o&&([i,a]=[a,i])
const l=El(e,t,{withJoeColorPlaceholder:!0,cropCode:n.prevailingCropCode,useCase:15,overrideHeight:i,overrideWidth:a})
if((0,Yh.isNothing)(l))return
let u={prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0};(0,Yh.isSome)(n.videoPlaybackControls)&&(u=n.videoPlaybackControls)
let h={prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0};(0,Yh.isSome)(n.videoPlaybackControls)&&(h=n.videoAutoplayPlaybackControls)
const w=d(c,HF)
if((0,Yh.isNothing)(w))return
const g=new kB(w,l,{playbackControls:u,autoPlayPlaybackControls:h,canPlayFullScreen:n.enableFullScreenVideo}),m=en(t)
return{artworks:[],videos:[g],cardArtLayouts:s.cardArtLayouts,artworkLayoutsWithMetrics:s.cardArtLayoutMetrics,joeColors:m}}}function en(e){return{bgColor:N(d(e,yx)),textColor1:N(d(e,ym)),textColor2:N(d(e,"textColor2")),textColor3:N(d(e,"textColor3")),textColor4:N(d(e,gb)),textGradient:c(e,sm).map(e=>N(d(e)))}}function tn(e,t){var n,r,a
let c=t.id,l=t.title
if(i(t.anonymizationOptions)){const e=null!==(r=null===(n=t.anonymizationOptions)||void 0===n?void 0:n.anonymizationString)&&void 0!==r?r:"ANONYMOUS"
c=e,l=e}const u={id:ku(c),name:ku(l),impressionType:Iu(0,t)},d=Su(t)
if((0,Yh.isSome)(d)&&(u[Zb]=d),t&&t.kind&&(u.kind=t.kind),t&&t.softwareType&&(u[z_]=t.softwareType),t&&t.recoMetricsData&&Object.assign(u,t.recoMetricsData),t&&t.mercuryMetricsData&&Object.assign(u,t.mercuryMetricsData),t&&t.lockupDisplayStyle&&(u[FO]=t.lockupDisplayStyle),t&&t.locationTracker){const e=Uu(t.locationTracker)
u.impressionIndex=e,""===u.id&&(u.id=e.toString(),u[Zb]=XF)}return s(t.offerType)&&(u[ND]=t.offerType),t&&s(t.displaysArcadeUpsell)&&(u[fv]=t.displaysArcadeUpsell),t&&s(t.isPreorder)&&(u[KF]=t.isPreorder),s(t.adamId)&&o(t.anonymizationOptions)&&(u[eF]=t.adamId),t&&s(t.badges)&&(u.badges=t.badges),t&&s(t.inAppEventId)&&(u[YR]=t.inAppEventId),t&&s(t.relatedSubjectIds)&&(u.relatedSubjectIds=t.relatedSubjectIds),(null===(a=null==t?void 0:t.hintsEntity)||void 0===a?void 0:a.length)>0&&(u[$O]=t.hintsEntity),t&&s(t.autoAdvanceInterval)&&(u.autoAdvanceInterval=t.autoAdvanceInterval),s(null==t?void 0:t.fcKind)&&(u.fcKind=t.fcKind),s(null==t?void 0:t.canonicalId)&&(u[wD]=t.canonicalId),s(null==t?void 0:t.displayStyle)&&(u[vF]=t.displayStyle),s(t.productVariantData)&&Object.assign(u,$e(t.productVariantData)),u.id,u}function nn(e,t,n){t&&(t.impressionMetrics=new XB(tn(0,n)))}function rn(e,t,n,r,o,s,i=!0){var a,c,l,u
if(!t)return
const d=tn(0,n)
if(i?(d[pv]=ku(r),d[LO]=ku(o)):(r&&(d[pv]=r),o&&(d[LO]=o)),s&&(d[hv]=s),(null===(a=null==n?void 0:n.optimizationEntityId)||void 0===a?void 0:a.length)>0&&(d[wv]=n.optimizationEntityId),(null===(c=null==n?void 0:n.optimizationId)||void 0===c?void 0:c.length)>0&&(d[gv]=n.optimizationId),(0,Yh.isSome)(null==n?void 0:n.rowIndex)&&(d.rowIndex=n.rowIndex),t.impressionMetrics=new XB(d),(n.isAdvert||n.isAdEligible)&&(null===(l=n.pageInformation)||void 0===l?void 0:l.iAdInfo)){const e=Ou(n.pageInformation.iAdInfo.fastImpressionsFieldsForCurrentItem(n.locationTracker,n.adSlotOverride))
Object.assign(t.impressionMetrics.fields,e),t.impressionMetrics=new eU(t.impressionMetrics,!0),n.isAdvert&&(null===(u=t.impressionMetrics)||void 0===u||delete u.fields[LO])}}function on(e,t,n,r){if(!t||!r)return
nn(0,t,n)
const o=Ou(r.fastImpressionsFieldsForCurrentItem(n.locationTracker,n.adSlotOverride))
Object.assign(t.impressionMetrics.fields,o)
const s=l(n.disableFastImpressionsForAds)
t.impressionMetrics=new eU(t.impressionMetrics,!s),t.impressionMetrics.fields[Ib]=BO}function sn(e,t,n,r,s,a){const c=an(e,t,n.title,s)
return c.lockupDisplayStyle=r,o(c.targetType)&&(c.targetType=r$),a&&du(e,t)&&(c.displaysArcadeUpsell=!0),i(p(t,fL))&&(c.id=s.id),c}function an(e,t,n,r){return Uh.context("impressionOptions",()=>{const o=Cu(e,t),s=bu(e,t),i={...r,kind:o,softwareType:s,title:n,id:t.id}
return Se(e,t,KF)&&(i.offerType=DN),i})}function cn(e,t,n){var r,o,s
const i=tn(0,(r=t.term,o=t.entity,s=n,Uh.context("impressionOptionsForSearchHint",()=>({...s,id:"",kind:null,softwareType:null,title:r,hintsEntity:o}))))
t.impressionMetrics=new XB(i)}function ln(e){const t=Oe(e,MY)
return null===t||0===t}function un(e,t,n,r){const o=Uu(r.locationTracker),s={impressionIndex:o,id:o.toString(),idType:XF,name:t.displayName,impressionType:n,parentId:yT}
t.impressionMetrics=new XB(s)}function dn(e,t){switch(t){case kN:const n=hn(t)
return e.bag.isSearchLandingAdsEnabled||e.bag.enabledAdPlacements.includes(n)
case rN:return!0
case L$:const o=hn(t)
return!r(o)&&e.bag.enabledAdPlacements.includes(o)&&(0,Yh.isSome)(fn(e))
case u$:case $F:const s=hn(t)
return!r(s)&&e.bag.enabledAdPlacements.includes(s)
default:return!1}}function fn(e){if(e.bag.todayAdMediumLockupScreenshotEnabled&&e.featureFlags.isEnabled("today_ad_medium_lockup_screenshots_enabled")){if(!e.client.isPhone)return
return _R}if(e.bag.todayAdCondensedEnabled){if(!e.client.isPhone)return
return LR}return function(e){return!!e.client.isPhone&&1===Oe(e,NY)}(e)?LR:void 0}function pn(e,t,n){var r,o,s,i,a
const c=e.bag.adPlacementTimeouts,l=.3
switch(t){case rN:return n?null:null!==(r=null==c?void 0:c["search-results-in-seconds"])&&void 0!==r?r:l
case kN:return n?null:null!==(o=e.bag.searchLandingAdFetchTimeout)&&void 0!==o?o:l
case L$:return n?null!==(s=null==c?void 0:c["today-in-seconds"])&&void 0!==s?s:l:null
case u$:return n?null:null!==(i=null==c?void 0:c["product-page-ymal-in-seconds"])&&void 0!==i?i:l
case $F:return n?null:null!==(a=null==c?void 0:c["product-page-ymal-during-download-in-seconds"])&&void 0!==a?a:l
default:return l}}function hn(e){switch(e){case rN:return HR
case kN:return WR
case L$:return L$
case u$:return"product-page-ymal"
case $F:return"product-page-ymal-during-download"
default:return null}}function wn(e,t,n,o=null){var s,i
return r(n)?null:new oQ(e,t,oQ.createInitialSlotInfos(e,t,null===(s=null==n?void 0:n.onDeviceAd)||void 0===s?void 0:s.positionInfo,o),n.iAdId,n.clientRequestId,null,null===(i=n.onDeviceAd)||void 0===i?void 0:i.positionInfo)}function gn(e,t){return W(t,FY)}function mn(e,t,n){o(t)&&r(t.attributes)||(t.attributes[FY]=n)}function yn(e,t,n,r){var s,a,c,l,u
const d=e.bag.adsOverrideLanguage
if(o(d)||o(t))return!0
let f=null===(s=t.meta)||void 0===s?void 0:s.resource
if(o(f)&&i(n)&&(f=null===(u=null===(l=null===(c=null===(a=null==n?void 0:n.appMetadata)||void 0===a?void 0:a.data)||void 0===c?void 0:c[0])||void 0===l?void 0:l.meta)||void 0===u?void 0:u.resource),o(f))return!1
if(W(f,"name.locale")!==d)return!1
const p=Pe(e,t,_N),h=Pe(e,f,"subtitle.locale")
if(i(p)&&h!==d)return!1
if("TEXT"===r){const n=W(t,kg)
if((0,Yh.isSome)(n)&&n!==UF){let r
const o=n
r=n===P$?sM:n
const s=Pe(e,t,r),a=Pe(e,f,o.concat(".locale"))
if(i(s)&&a!==d)return!1}}return!0}function vn(e,t){if((0,Yh.isNothing)(t))return null
const n=hn(t)
return e.bag.adPlacementEligibleSlotPositions[n]}function An(e,t,n){const r=n&&n[t]
return e&&t&&e===t&&!r}function Tn(e,t,n,i,a,c,l){const u=o(c),d=In(e,t,n,a,c,l)
if(r(d))return null
const f={platform:t.mediaPlatformUsedForDisplayStyle,style:d}
if(Dn(e,`[${n}] tentatively resolved to: ${Rn(f)}`),"DUP"===i){!function(e,t){switch(e){case"PI4":t.portraitScreenshots.length<=5&&t.portraitScreenshots.splice(0,4)
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
case"PV1":case"LV1":t.videos.splice(0,1)}}(d,t)
const r=In(e,t,n,a,null,l),o=function(e,t,n){switch(t){case"PV4":case"PI4":case"LI1":case"LV1":return!0
case"PV3":case"PI3":return 3===On(e,n)
case"PV2":case"PI2":return 2===On(e)
default:return!1}}(e,r,l)
return o&&u?(Dn(e,`[${n}] Organic Dupe would be full creative as ${r} so choosing tentative style for ad`),f):o&&!u&&Sn(d,c)?(Dn(e,`[${n}] Organic Dupe would be a full creative, but ad is not the first so returning compatible style with first ${d}`),f):Sn("TEXT",c)?(Dn(e,`[${n}] tentative style would not yield full creative for organic result so returning TEXT`),{style:"TEXT"}):(Dn(e,`[${n}] tentative style would not yield full creative for organic result and first style is not compatible with TEXT so skipping ad`),null)}return s(c)&&"TEXT"===c.style?(Dn(e,`[${n}] tentative style would be filtered since the first ad has style: ${Rn(c)}, so returning TEXT`),{style:"TEXT"}):f}function Pn(e){return!!s(e)&&e===RR}function In(e,t,n,r,o,s){if(!r)return Dn(e,`[${n}] is not allowed to display media because of iAd configuration.`),"TEXT"
if(t.mediaPlatformUsedForDisplayStyle&&o&&o.mediaPlatform&&!t.mediaPlatformUsedForDisplayStyle.isEqualTo(o.mediaPlatform))return Dn(e,`[${n}] filtered because media is derived from: ${t.mediaPlatformUsedForDisplayStyle.mediaType}, but first ad media is derived from: ${o.mediaPlatform.mediaType}`),null
let a,c=null
if(i(t.videos)&&(c=t.videos[0].preview),i(c)&&c.isLandscape()&&Sn("LV1",o))a="LV1"
else if(i(c)&&c.isPortrait()&&Pn(s)&&Sn("PV4",o))a=i(t.portraitScreenshots)&&t.portraitScreenshots.length>=3?"PV4":i(t.portraitScreenshots)&&t.portraitScreenshots.length>=2?"PV3":i(t.portraitScreenshots)?"PV2":"PV1"
else if(i(c)&&c.isPortrait()&&Sn("PV3",o))a=i(t.portraitScreenshots)&&t.portraitScreenshots.length>=2?"PV3":i(t.portraitScreenshots)?"PV2":"PV1"
else if(i(t.landscapeScreenshots)&&Sn("LI1",o))a="LI1"
else if(i(t.portraitScreenshots)&&Pn(s)&&Sn("PI4",o))a=t.portraitScreenshots.length>=4?"PI4":t.portraitScreenshots.length>=3?"PI3":t.portraitScreenshots.length>=2?"PI2":"PI1"
else if(i(t.portraitScreenshots)&&Sn("PI3",o))a=t.portraitScreenshots.length>=3?"PI3":t.portraitScreenshots.length>=2?"PI2":"PI1"
else{if(!Sn("TEXT",o))return Dn(e,`[${n}] filtered because we could not create a compatible style for the first style of: ${Rn(o)}`),null
a="TEXT"}return 2===On(e,s)&&("PI3"===a?a="PI2":"PV3"===a&&(a="PV2")),a}function Sn(e,t){if(r(t))return!0
let n=!0
switch(e){case"TEXT":n="TEXT"===t.style
break
case"LV1":case"LI1":n="LV1"===t.style||"LI1"===t.style
break
case"PI4":case"PI3":case"PI2":case"PI1":case"PV4":case"PV3":case"PV2":case"PV1":n="PI4"===t.style||"PI3"===t.style||"PI2"===t.style||"PI1"===t.style||"PV4"===t.style||"PV3"===t.style||"PV2"===t.style||"PV1"===t.style
break
default:n=!1}return n}function bn(e){let t=null
const n=e.trailers[0]
let r=null
i(n)&&(n.videos.sort((e,t)=>GY(e.preview,t.preview)),r=n.videos,t=n.mediaPlatform)
const o=e.screenshots[0],s=[],a=[]
return i(o)&&(o.artwork.forEach(e=>{e.isPortrait()?s.push(e):a.push(e)}),t=o.mediaPlatform),{portraitScreenshots:s,landscapeScreenshots:a,videos:r,mediaPlatformUsedForDisplayStyle:t}}function Cn(e,t){let n=null
const r=d(j(e,JC),t)
return r&&r.length&&(n=JSON.parse(r)),n}function kn(e,t){return o(e)?"NOORGANIC":t?"DUP":"NORMAL"}function En(e,t,n,r){var o,a
const c=i(null===(a=null===(o=e.impressionMetrics)||void 0===o?void 0:o.fields)||void 0===a?void 0:a.pageCustomId),l=n&&!r&&!c
if(i(e.trailers)){const t=e.trailers.shift()
t.videos.sort((e,t)=>GY(e.preview,t.preview)),e.trailers.unshift(t)}let u,d=[],f=[]
if(i(e.screenshots)){const t=e.screenshots.shift()
t.artwork.forEach(e=>{e.isPortrait()?d.push(e):f.push(e)}),u=t.mediaPlatform}switch(t.style){case"PI4":if(e.trailers=null,f=null,e.screenshotsDisplayStyle=RR,l)if(d.length>5&&d.length<8){const e=d.splice(0,4),t=4-d.length,n=e.splice(e.length-t)
d.unshift(...n)}else d.splice(0,4)
else d.splice(4)
break
case"PI3":e.trailers=null,f=null,l?d.splice(0,3):d.splice(3)
break
case"PI2":e.trailers=null,f=null,l?d.splice(0,2):d.splice(2)
break
case"PI1":e.trailers=null,f=null,l?d.splice(0,1):d.splice(1)
break
case"LI1":e.trailers=null,d=null,l?f.splice(0,1):f.splice(1)
break
case"PV4":if(f=null,e.screenshotsDisplayStyle=RR,l)if(e.trailers[0].videos.splice(0,1),d.length>4&&d.length<7){const e=d.splice(0,3),t=3-d.length,n=e.splice(e.length-t)
d.unshift(...n)}else d.splice(0,3)
else e.trailers[0].videos.splice(1),d.splice(3)
break
case"PV3":f=null,l?(e.trailers[0].videos.splice(0,1),d.splice(0,2)):(e.trailers[0].videos.splice(1),d.splice(2))
break
case"PV2":f=null,l?(e.trailers[0].videos.splice(0,1),d.splice(0,1)):(e.trailers[0].videos.splice(1),d.splice(1))
break
case"LV1":case"PV1":l?e.trailers[0].videos.splice(0,1):e.trailers[0].videos.splice(1),f=null,d=null
break
case"TEXT":e.trailers=null,f=null,d=null}if(i(e.trailers)){const t=e.trailers.shift()
e.trailers=[t]}const p=[].concat(...[f,d].filter(s))
if(i(p)){const t=new iB(p,u)
e.screenshots=[t]}else e.screenshots=null
return e}function On(e,t=null){return e.client.isPhone?Pn(t)?4:3:2}function Rn(e){if(o(e))return""
let t=""
return e&&e.mediaPlatform&&(t=` derived from ${e.mediaPlatform.mediaType} media`),`${e.style}${t}`}function Dn(e,t){e.client.buildType===Sx&&e.isAvailable(Gw)&&s(e.ads.debugLog)&&(r(UY)&&s(e.ads.isNativeAdLoggingEnabled)&&(UY=e.ads.isNativeAdLoggingEnabled()),UY&&e.ads.debugLog(t))}function _n(e,t,n,r,o){var s
if(!(n instanceof EY||n instanceof _Y))return
const a=n.lockup,c=t.lockups[0]
if(c.adamId!==a.adamId)return
const l=new Set
if(i(c.screenshots))for(const e of c.screenshots[0].artwork)l.add(e.template)
if(i(c.trailers))for(const e of c.trailers[0].videos)l.add(e.preview.template)
if(i(a.screenshots)){const e=a.screenshots[0].artwork.filter(e=>!l.has(e.template))
a.screenshots[0]=new iB(e,a.screenshots[0].mediaPlatform)}if(i(a.trailers)){const e=a.trailers[0].videos.filter(e=>!l.has(e.preview.template))
a.trailers[0]=new Cj(e,a.trailers[0].mediaPlatform)}if((null===(s=null==r?void 0:r.displayStyle)||void 0===s?void 0:s.screenshots)===RR)switch(o){case"PV4":case"PI4":(e=>{const t=a.screenshots[0].artwork
if(t.length>=4)return
let n=4-t.length
const r=c.screenshots[0].artwork.slice().reverse()
for(const e of r){if(n<=0)return
a.screenshots[0].artwork.unshift(e),n-=1}})()}}function Ln(e,t,n){var r,o
const s=n.id,i=t.lockups[0]
if(i.adamId!==s){const e=v(n.meta)
return n.meta=e,void xn(null,n)}const a=e.find(e=>e.id===i.adamId)
c(n.meta,eT).length>0||xn(null===(o=null===(r=null==a?void 0:a.meta)||void 0===r?void 0:r.cppData)||void 0===o?void 0:o.ppid,n)}function xn(e,t){var n
let o=v(t.meta)
r(e)?null===(n=null==o?void 0:o.cppData)||void 0===n||delete n.ppid:(r(o)&&(o={}),r(o.cppData)&&(o.cppData={}),o.cppData.ppid=e),t.meta=o}function Mn(e,t,n,r,o,i){const a=h(r,Tw.pageInformation,{}),c=h(r,Tw.timingValues),l=d(r,Tw.requestedUrl)
let u
const f=a
if(f.pageType=t,f.pageId=n,o&&(f[Nx]=o),t===xx){const t=D(r),n=W(t,z$),o=W(t,QN)
f[Nx]=`${o}_${n}`,du(e,t)&&(f[z_]=FF),u=_e(e,t)}else t===ob?f[Nx]=`${t}_${n}`:t===xM?f[Nx]=lv:t===BD&&n===BD&&(f[Nx]=`${t}_${n}`)
const p=new sQ(Ou(f))
return p.timingMetrics=c,p.pageUrl=l,s(u)&&(p.productVariantData=u),p.iAdInfo=null!=i?i:Yu(e,n,r),p.recoMetricsData=M(r),p}function Nn(e,t,n,r,o){const s=new sQ({pageType:t,pageId:n,page:`${t}_${n}`,pageDetails:r})
if(o){const t=oQ.placementTypeFromPlacementId(d(o,dM))
s.iAdInfo=new oQ(e,t,oQ.createInitialSlotInfos(e,t,null,null),d(o,hM)),s.iAdInfo.applyClickFieldsFromPageRequest(n,o)}return s}function Fn(e,t,n,o){if(r(n))return
t.pageMetrics.pageFields=at(n),t.pageMetrics.addManyInstructions(zn(e,n,o)),t.pageMetrics.addData(Hn(e,n,o),[Hh.PageInvocationPoint.pageEnter]),t.pageMetrics.addData(function(e,t,n){const r=Hn(e,t,n)
return r.fields[BN]=Ky,r}(e,n,o),[Hh.PageInvocationPoint.pageExit]),t.pageMetrics.pageRenderFields=qn(0,n,o),t.pageRenderMetrics=qn(0,n,o),function(e){return!(e instanceof yY||e instanceof gY)}(t)&&t.pageMetrics.addData(Wn(e,n,o),[Hh.PageInvocationPoint.backButton])
const s=e.fetchTimingMetricsBuilder;(0,Gh.isSome)(s)&&s.decorate(t)}function $n(e,t){return new sQ({pageType:pN,pageId:t,page:`Room_${t}`})}function Bn(e,t,n){const r=new sQ({pageId:H_,pageType:xM})
return r.pageUrl=n,r}function Un(e,t,n,r,s,a,c,l){const u=d(n,[dN,CM,kv]),f=Mn(e,xM,u,n)
return f.searchTermContext=r,f.searchTerm=r.term,f.pageUrl=s,l&&(f.guidedSearch=function(e,t,n){const r={}
if(i(t.guidedSearchTokens)&&(r.searchSelectedGuidedFacets=t.guidedSearchTokens),n&&n.finalTerm&&(r.searchGuidedFinalQuery=n.finalTerm),!o(r))return r}(0,t,l)),null!=a&&(f.iAdInfo=new oQ(e,rN,oQ.createInitialSlotInfos(e,rN,null,null),a.iAdId,a.appStoreClientRequestId,c)),f}function Gn(e,t,n,r,o,i){let a="",c=""
switch(t){case vw.AppEvent:a=`${n}_${r}`,c=zR
break
case vw.ContingentOffer:a=`${n}`,c="ContingentPriceOfferDetails"}const l={pageId:a,pageType:c}
s(o)&&(l[LD]=o.app,l[W_]=o[NR])
const u=new sQ(l)
return u.recoMetricsData=i,u}function Vn(e,t){var n
if(r(t)||r(t.pageMetrics))return
const o=t.pageMetrics.instructions
if(!r(o))for(const e of o)e.data.fields[BN]===$$&&e.data.includingFields.push(Eb)
let s=null
if(t instanceof AW?s=t:t instanceof BW&&(s=t.lockup),s){const e=[]
if(s.buttonAction instanceof aU)e.push(s.buttonAction)
else if(s.buttonAction instanceof cU&&s.buttonAction.buyAction instanceof aU)e.push(s.buttonAction.buyAction)
else if(s.buttonAction instanceof lU&&s.buttonAction.completionAction instanceof aU)e.push(s.buttonAction.completionAction)
else if(s.buttonAction instanceof fU){if(s.buttonAction.buyAction instanceof aU&&e.push(s.buttonAction.buyAction),s.buttonAction.defaultAction instanceof aU&&e.push(s.buttonAction.defaultAction),s.buttonAction.openAction instanceof aU&&e.push(s.buttonAction.openAction),s.buttonAction.subscribePageAction instanceof nU&&s.buttonAction.subscribePageAction.page===iS&&(null===(n=s.buttonAction.subscribePageAction.pageUrl)||void 0===n?void 0:n.length)>0){const e=nj.from(s.buttonAction.subscribePageAction.pageUrl)
e.param(SV,qF),s.buttonAction.subscribePageAction.pageUrl=e.build()}s.buttonAction.subscribePageAction instanceof nU&&s.buttonAction.subscribePageAction.pageData instanceof HH&&s.buttonAction.subscribePageAction.pageData.postSubscribeAction instanceof aU&&e.push(s.buttonAction.subscribePageAction.pageData.postSubscribeAction),s.buttonAction.subscribePageAction instanceof nU&&s.buttonAction.subscribePageAction.pageData instanceof YH&&s.buttonAction.subscribePageAction.pageData.purchaseSuccessAction instanceof aU&&e.push(s.buttonAction.subscribePageAction.pageData.purchaseSuccessAction)}for(const t of e)t.purchaseConfiguration&&(t.purchaseConfiguration.excludeAttribution=!1)}}function jn(e){Object.keys(e).filter(e=>!VY.has(e)).forEach(t=>delete e[t])}function Hn(e,t,n){var r,o,i,a,c
const l=Yn(t,n)
t.iAdInfo&&Object.assign(l,t.iAdInfo.pageFields),s(t.offerReleaseDate)&&(l[Vb]=He(t.offerReleaseDate))
const u=t.searchTermContext
u&&(l[_F]=u.term,u.suggestedTerm&&(l.searchSuggestedTerm=u.suggestedTerm),u.correctedTerm&&(l.searchCorrectedTerm=u.correctedTerm),u.originatingTerm&&(l[Hb]=u.originatingTerm)),t.guidedSearch&&Object.assign(l,t.guidedSearch)
const d=function(e,t,n,r,o){const s={}
Object.assign(s,o),s[BN]=$$,r&&(s[Hy]=r.clientCorrelationKey,s.requestStartTime=r.requestStartTime,s.responseStartTime=r.responseStartTime,s.responseEndTime=r.responseEndTime)
const i=[HL,DO]
return n&&i.push("crossfireReferralCandidate"),Ju(0,new JB(s,i,[],ed(0,s),Xu(e,s)))}(e,0,null!==(r=t.isCrossfireReferralCandidate)&&void 0!==r&&r,t.timingMetrics,l),f=null!==(i=null===(o=t.iAdInfo)||void 0===o?void 0:o.iAdIsPresent)&&void 0!==i&&i,p=null!==(c=null===(a=t.iAdInfo)||void 0===a?void 0:a.shouldIncludeAdRotationFields)&&void 0!==c&&c
return f&&p&&d.includingFields.push(j_),d}function Wn(e,t,n){return function(e,t){const n={}
return Object.assign(n,t),n[hx]=ZR,Zu(e,ZR,j$,n)}(e,Yn(t,n))}function qn(e,t,n){const r=Yn(t,n)
return t.searchTermContext&&(r[_F]=t.searchTermContext.term),t.baseFields&&Object.assign(r,t.baseFields),function(e,t,n){const r={}
return Object.assign(r,n),r[BN]="pageRender",t&&(r[WL]||(r[WL]=t.pageURL),r[Hy]=t.clientCorrelationKey,r.platformRequestStartTime=t.requestStartTime,r.platformResponseStartTime=t.responseStartTime,r.platformResponseEndTime=t.responseEndTime,r.platformResponseWasCached=t.responseWasCached,r.platformJsonParseStartTime=t.parseStartTime,r.platformJsonParseEndTime=t.parseEndTime),r}(0,t.timingMetrics,r)}function zn(e,t,n){var r,o
const i=Yn(t,n)
t.searchTermContext&&(i[_F]=t.searchTermContext.term)
const a=v(i)
t.iAdInfo&&Object.assign(a,t.iAdInfo.impressionsFields),t.guidedSearch&&Object.assign(a,t.guidedSearch)
const c=[{data:Qu(e,a,null!==(o=null===(r=t.iAdInfo)||void 0===r?void 0:r.shouldIncludeAdRotationFields)&&void 0!==o&&o,ln(e)),invocationPoints:[Hh.PageInvocationPoint.appExit,Hh.PageInvocationPoint.pageExit]}]
if(s(t.iAdInfo)){const n=function(e,t,n){var r,o
const i=null!==(o=null===(r=n.iAdInfo)||void 0===r?void 0:r.shouldIncludeAdRotationFields)&&void 0!==o&&o,a=Qu(e,t,i,!1).fields
if(a[DD]=Ob,s(n.iAdInfo)){const e=n.iAdInfo.fastImpressionsEventVersion
a[_O]=e,5===e&&(a.viewableArea="excludingTabBar",delete a[dM])}const c=["fastImpressions",HL,DO]
return i&&c.push(j_),Ju(0,new JB(a,c,[],ed(0,a),Xu(e,a,n)))}(e,a,t)
c.push({data:n,invocationPoints:[Hh.PageInvocationPoint.appExit,Hh.PageInvocationPoint.pageExit,Hh.PageInvocationPoint.timer]})}return c}function Yn(e,t){const n={}
return s(e.offerType)&&(n[ND]=e.offerType),n&&t&&t(n),n}function Jn(e,t,n,r,o){let s
switch(t){case KR:s=A$
break
case ZR:s=ZR
break
case Ug:s=jI}const i={targetType:j$,actionType:s,targetId:t,idType:void 0,location:Mu(e,{pageInformation:n,locationTracker:r,targetType:j$,id:t},null!=o?o:t)}
return Zu(e,t,j$,i)}function Zn(e,t){if(!t)return null
const n=t.match(/P(\d+)([A-Z]+)/)
if(!n||3!==n.length)return null
let r=f(n[1]),o=n[2]
return r&&o?("D"===o&&r>0&&r%7==0&&(o="W",r/=7),new jY(r,o)):null}function Kn(e,t){const n=c(t,Ab)[0]
if(!n)return null
const r=d(n,XR),o=d(t,XR)
if(!r||!o)return null
const s=d(n,Nv),i=Zn(0,r),a=Zn(0,o),l=d(n,gx).replace(/ /g,"\xa0"),u=d(t,gx).replace(/ /g,"\xa0"),p=f(n,"numOfPeriods"),h=i.period*p
let w=Qn(e,a.type,a.period,u)
switch(w=w.replace(/\//g,"\u2060/\u2060"),s){case Fv:const t=Xn(e,i.type,h)
if(t&&w)return e.loc.string("InAppOfferPage.Description.FreeTrialTemplate").replace(rC,t).replace(oC,w)
break
case $v:const n=Xn(e,i.type,h)
if(n&&w)return e.loc.string("InAppOfferPage.Description.PaidUpFrontTemplate").replace(rC,n).replace("@@trialPrice@@",l).replace(oC,w)
break
case Bv:const r=Qn(e,i.type,i.period,l),o=Xn(e,i.type,h)
if(o&&w)return e.loc.string("InAppOfferPage.Description.PaidTrialTemplate").replace("@@trialPriceDuration@@",r).replace(rC,o).replace(oC,w)
break
default:return null}return null}function Qn(e,t,n,r){let o
switch(t){case"D":o=1===n?e.loc.string("InAppOfferPage.Description.PriceDuration.Days.one").replace(Fx,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.PriceDuration.Days",n)
break
case"W":o=1===n?e.loc.string("InAppOfferPage.Description.PriceDuration.Weeks.one").replace(Fx,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.PriceDuration.Weeks",n)
break
case"M":o=1===n?e.loc.string("InAppOfferPage.Description.PriceDuration.Months.one").replace(Fx,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.PriceDuration.Months",n)
break
case"Y":o=1===n?e.loc.string("InAppOfferPage.Description.PriceDuration.Years.one").replace(Fx,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.PriceDuration.Years",n)}return o.replace("@@price@@",r)}function Xn(e,t,n){switch(t){case"D":return 1===n?e.loc.string("InAppOfferPage.Description.DurationCount.Days.one").replace(Fx,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.DurationCount.Days",n)
case"W":return 1===n?e.loc.string("InAppOfferPage.Description.DurationCount.Weeks.one").replace(Fx,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.DurationCount.Weeks",n)
case"M":return 1===n?e.loc.string("InAppOfferPage.Description.DurationCount.Months.one").replace(Fx,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.DurationCount.Months",n)
case"Y":return 1===n?e.loc.string("InAppOfferPage.Description.DurationCount.Years.one").replace(Fx,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.DurationCount.Years",n)}return null}function er(e,t){var n
const r=oe(t,LN),s=ft(e,r),i=p(r,fL)
if(o(s)||o(i))return null
const a=tr(e,d(s,XR),d(s,gx)).replace("/","/\u2060"),c=tr(e,d(i,XR),d(i,gx)).replace("/","/\u2060")
if(o(a)||o(c))return null
const l=W(t,z$),u={"@@discountedPrice@@/@@recurringSubscriptionPeriod@@":c,"@@regularPrice@@/@@recurringSubscriptionPeriod@@":a,"@@discountedPricePerRecurringSubscriptionPeriod@@":c,"@@regularPricePerRecurringSubscriptionPeriod@@":a}
let f=null!=l?l:""
Object.keys(u).forEach(e=>{f=f.replace(e,u[e])})
const h=f.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,""),w=new mB(f,oN,"appPromotionTitle"),g=null!==(n=W(t,sM))&&void 0!==n?n:"",m=e.loc.string("ContingentOffer.Description.Format"),y={"@@BranchName@@":W(r,z$),"@@RegularPrice@@":a,"@@DiscountedPrice@@":c}
let v=m
return Object.keys(y).forEach(e=>{v=v.replace(e,y[e])}),{title:w,rawTitle:h,description:[v,g].join("")}}function tr(e,t,n){const r=Zn(0,t)
return Qn(e,r.type,r.period,n)}function nr(e){switch(e.type){case O$:return vw.AppEvent
case f$:return vw.ContingentOffer
default:return null}}function rr(e){switch(e.type){case O$:return bE
case f$:return"module"
default:return null}}function or(e){switch(e.type){case O$:return Fg
case f$:return"contingentPriceOffer"
default:return null}}function sr(e,t,n,i,a,c,l,u,d,f,w,g,m,y,v){const A=nr(t),T={...f,targetType:rr(t)}
switch(A){case vw.AppEvent:return gr(e,t,n,i,a,c,l,u,d,T,w,g,m,y,v)
case vw.ContingentOffer:return function(e,t,n,i,a,c,l,u){var d,f
if(t.type!==f$)return null
const w=ur(e,t,Mg)
if(r(w))return null
const g=B(w.backgroundColor)?R$:GF,m=W(t,w_),y=W(t,_N),v=W(t,ZF),A=e.loc.string("ContingentOffer.AdditionalInfoButton.Title"),T=oe(t,LN)
if(o(p(T,fL)))return null
const P=er(e,t)
if((0,Gh.isNothing)(P.title))return null
const I=oe(t,jM),S=oe(t,LN),b=null!==(d=ur(e,S,I$))&&void 0!==d?d:lr(e,S,I$);(0,Gh.isSome)(b)&&(b.style=rM)
const C=z(I,QR)
let k,E
if(s(I)&&(k=fr(e,t,I,"",i,a,!1,c,l,null,u,!0)),(0,Gh.isNothing)(k))return null
if(s(I)&&C){const t={rootPosition:0,locationStack:[]}
E=al(e,I,{metricsOptions:{pageInformation:new sQ,locationTracker:t},artworkUseCase:1}),z(I,QR)&&(E.offerDisplayProperties.isStreamlinedBuy=!0)}else E=k
const O=oe(t,wx)
let R
if(s(O)&&(null==y?void 0:y.length)>0){const t={rootPosition:0,locationStack:[]}
R=al(e,O,{metricsOptions:{pageInformation:new sQ,locationTracker:t},artworkUseCase:1})}R=null!==(f=function(e,t){var n
const r=h(t,"meta.associations.trunks")
if(o(r))return null
const s=r.data[0]
if(null!==(n=s.meta[g_])&&void 0!==n&&n){const t=new Tj
t.adamId=s.id
const n=Ae(e,s,WI)
return t.icon=El(e,n,{useCase:1,style:yL}),t}return null}(e,t))&&void 0!==f?f:R
const D=function(e,t,n,r){const o=pE+W(n,z$)+hE,s=W(n,sM)+HI,i=pE+e.loc.string("ContingentOffer.Terms.Title")+hE,a=W(t,mL)
return new mB([o,s,i,a].join(HI),oN)}(e,t,T),_=new wY(w,b,g,C,A,P.title,y,P.description,v,m,D,k,E,R)
return _.title=P.rawTitle,s(I)&&(_.clickAction=hr(e,t,I,_,c,l)),_}(e,t,0,c,l,T,g,y)
default:return null}}function ir(e,t,n,a,c,l,u,d){const f=nr(t),p={...c,targetType:rr(t)}
switch(f){case vw.AppEvent:return function(e,t,n,a,c,l,u,d){const f=function(e,t,n,a,c,l,u,d){var f
const p=lr(e,t,EN),h=dr(e,t,TN,!0,!0),w=v(a),g=null!==(f=null==h?void 0:h.preview)&&void 0!==f?f:p
let m=R$,y=!0,A=!1
s(g)&&(y=B(g.backgroundColor),A=B(g.backgroundColor,10),m=y?R$:GF)
const T=Gn(0,vw.AppEvent,t.id,n.id,u,c.recoMetricsData),P={...c,pageInformation:T,locationTracker:{rootPosition:0,locationStack:[]},targetType:zR},I={...P,id:n.id,inAppEventId:t.id,relatedSubjectIds:[n.id]}
w.notificationConfig=pr(e,t,a,I,!1)
const S=function(e,t,n,r){var i,a
const c=W(t,b$)
if(o(c))return null
const l=null!==(i=n.moduleArtwork)&&void 0!==i?i:null===(a=n.moduleVideo)||void 0===a?void 0:a.preview
let u=e.loc.string(xg)
u===xg&&(u=n.subtitle)
const d=function(e,t,n,r,o,s){return Uh.context("shareSheetDataForAppEvent",()=>{const e=new dB(t,n,s)
return new hB(e,r,null)})}(0,n.title,u,c,0,l)
if(!s(d))return null
const f=function(e,t,n){var r
const o=[]
if((null==n?void 0:n.length)>0){const t=As(e,n)
s&&o.push(t)}if(t.startDate.getTime()<=Date.now())return o
if(e.host.clientIdentifier===NB)return o
const i=new IU(T$)
i.title=e.loc.string("APP_EVENTS_CALENDAR_NOT_AUTHORIZED_TITLE"),i.message=e.loc.string("APP_EVENTS_CALENDAR_NOT_AUTHORIZED_DETAIL"),i.isCancelable=!0,i.buttonTitles=[e.loc.string(Pg)],i.buttonActions=[new sU("prefs:root=Privacy&path=CALENDARS",!0)]
let a=!1
if(s(t.endDate)){const e=We(t.startDate),n=We(t.endDate),r=t.endDate.getTime()-t.startDate.getTime(),o=216e5
n.getTime()>e.getTime()&&r>o&&(a=!0)
const s=8634e4
e.getTime()===n.getTime()&&r>=s&&(a=!0)}const c=new VU(t.startDate,t.endDate,a,t.title,null===(r=t.lockup)||void 0===r?void 0:r.title,t.detail,n,i,bI)
c.title=e.loc.string("SHARE_SHEET_ADD_TO_CALENDAR"),c.artwork=nt(e,"systemimage://calendar.circle")
const l=new SU("com.apple.AppStore.createCalendarEventActivity",c)
return o.unshift(l),o}(e,n,c),p=new bU(d,f)
return od(e,p,{...r,targetType:r$,actionType:p_,idType:HN}),p}(e,t,a,I),b=y?R$:GF,C=fr(e,t,n,w.title,b,SM,!1,P,l,u,!1,!1)
if(r(C))return null
w.lockup=C
const k=new pY(w,p,h,S,m,A)
return Fn(e,k,T,e=>{i(u)&&WB.shared.addReferralContextToMetricsFieldsIfNecessary(e)}),k}(e,t,n,a,c,u,d),p=new nU("appEventDetail")
return p.title=a.title,p.pageData=f,p.animationBehavior=l,c&&c.pageInformation&&(p.referrerUrl=c.pageInformation.pageUrl),p}(e,t,n,a,p,l,u,d)
case vw.ContingentOffer:return function(e,t,n,o,a,c,l,u){const d=function(e,t,n,o,a,c,l,u){var d
const f=ur(e,t,EN),p=v(o)
let h=R$,w=!0
s(f)&&(w=B(f.backgroundColor),h=w?R$:GF)
const g=Gn(0,vw.ContingentOffer,t.id,n.id,l,a.recoMetricsData),m={...a,pageInformation:g,locationTracker:{rootPosition:0,locationStack:[]}},y=w?R$:GF,A=fr(e,t,n,p.title,y,SM,!1,m,c,l,!1,!1)
if(r(A))return null
if(p.branchLockup=A,o.supportsStreamlinedBuy){const n=oe(t,jM),r={rootPosition:0,locationStack:[]}
p.branchAppLockup=al(e,n,{metricsOptions:{pageInformation:g,locationTracker:r},artworkUseCase:1})}else p.branchAppLockup=A
const T=oe(t,wx)
let P
s(T)&&(null===(d=p.subtitle)||void 0===d?void 0:d.length)>0&&(P=al(e,T,{metricsOptions:m,artworkUseCase:1,skipDefaultClickAction:!0}),p.trunkLockup=P)
const I=new gY(p,f,h)
return I.backButtonActionMetrics.addMetricsData(Jn(e,ZR,g,m.locationTracker)),I.learnMoreActionMetrics.addMetricsData(Jn(e,KR,g,m.locationTracker,o.learnMoreTitle)),I.closeButtonActionMetrics.addMetricsData(Jn(e,Ug,g,m.locationTracker)),Fn(e,I,g,e=>{i(l)&&WB.shared.addReferralContextToMetricsFieldsIfNecessary(e)}),I}(e,t,n,o,a,l,u),f=new nU("contingentOfferDetail")
return f.title=o.title,f.pageData=d,f.animationBehavior=c,a&&a.pageInformation&&(f.referrerUrl=a.pageInformation.pageUrl),f}(e,t,n,a,p,l,u,d)
default:return null}}function ar(e){return e.bag.enableAppEvents&&!0}function cr(e){return e.bag.enableContingentOffers&&e.featureFlags.isEnabled("contingent_offers")&&!0}function lr(e,t,n){return El(e,j(t,n),{useCase:0,withJoeColorPlaceholder:!0,cropCode:"sr"})}function ur(e,t,n){return El(e,fe(t,Ce(e,t),n),{useCase:0,withJoeColorPlaceholder:!0,cropCode:"sr"})}function dr(e,t,n,o,s){const i=lr(e,t,`${n}.previewFrame`)
if(r(i))return null
const a=W(t,`${n}.video`)
if(r(a))return null
const c=new kB(a,i,{allowsAutoPlay:!0,looping:!0,canPlayFullScreen:o,showPlaybackControls:!1,playbackControls:s?{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0}:{},autoPlayPlaybackControls:s?{muteUnmute:!0}:{}})
return c.canPlayFullScreen=o,c.allowsAutoPlay=!0,c.looping=!0,c}function fr(e,t,n,s,i,a,c,l,u,d,f,p){if(o(t)||o(n))return null
const h=nr(t),w={...l,id:t.id,relatedSubjectIds:[n.id],idType:HN},g={...l,id:n.id,relatedSubjectIds:[n.id],targetType:r$,idType:HN,kind:null,softwareType:null,title:W(n,z$),excludeAttribution:o(d)}
var m
h===vw.AppEvent&&(w[YR]=t.id,g[YR]=t.id),(m=l)&&Object.prototype.hasOwnProperty.call(m,"id")&&(w.id=l.id,w.idType=l.idType),p&&Fu(e,w,h===vw.AppEvent?W(t,z$):er(e,t).rawTitle)
const y={metricsOptions:g,artworkUseCase:1,externalDeepLinkUrl:W(t,GI),crossLinkSubtitle:c?s:null,offerEnvironment:i,offerStyle:a,skipDefaultClickAction:!u,includeBetaApps:!0,referrerData:d,shouldHideArcadeHeader:e.featureFlags.isEnabled(wL)&&f},v=al(e,h===vw.ContingentOffer?t:n,y)
return p&&Bu(l.locationTracker),r(v)?null:(c&&(v.crossLinkTitle=e.loc.uppercased(v.title)),v)}function pr(e,t,n,r,o){if(n.startDate.getTime()<=Date.now())return null
const s=e.loc.string("APP_EVENTS_NOTIFICATION_TITLE").replace("{appTitle}",n.lockup.title),i=e.loc.string("APP_EVENTS_NOTIFICATION_DETAIL").replace("{eventTitle}",n.title),a=n.startDate,c=n.lockup.icon,l=n.lockup.icon.template.replace("{w}",`${c.width}`).replace("{h}",`${c.height}`).replace("{c}","wd").replace("{f}",CE)
let u,d
if(o&&(u=new IU(h_),u.title=e.loc.string("APP_EVENTS_NOTIFICATION_TOAST_TITLE"),u.message=e.loc.string("APP_EVENTS_NOTIFICATION_TOAST_DETAIL"),u.artwork=nt(e,$g)),e.bag.newEventsForODJAreEnabled){const o=new RU,s=at(r.pageInformation)
s[hx]="notifyActivateNotificationsDisabled",s[gL]=Mu(e,{...r,id:t.id},null),s[JR]=""
const i=Zu(e,n.lockup.adamId,r$,s)
o.actionMetrics.addMetricsData(i),d=o}else{const t=new IU(T$)
t.title=e.loc.string("APP_EVENTS_NOTIFICATION_NOT_AUTHORIZED_TITLE"),t.message=e.loc.string("APP_EVENTS_NOTIFICATION_NOT_AUTHORIZED_DETAIL"),t.isCancelable=!0,t.buttonTitles=[e.loc.string(Pg)],t.buttonActions=[new sU("prefs:root=NOTIFICATIONS_ID&path=com.apple.AppStore",!0)],d=t}const f=new IU(T$)
f.title=e.loc.string("APP_EVENTS_NOTIFICATION_FAILURE_TITLE"),f.message=e.loc.string("APP_EVENTS_NOTIFICATION_FAILURE_DETAIL"),f.isCancelable=!0
const p=(new nj).set(IN,KU).param(AV,n.lockup.adamId).param(VG,n.lockup.bundleId).param(LV,n.appEventId)
p.host=OG
const h=W(t,GI);(null==h?void 0:h.length)>0&&p.param(xV,encodeURIComponent(h))
const w=at(r.pageInformation)
w[hx]="notifyActivate",w[gL]=Mu(e,{...r,id:t.id},null)
const g=Zu(e,n.lockup.adamId,r$,w),m=v(w)
m[hx]="notifyDeactivate"
const y=Zu(e,n.lockup.adamId,r$,m)
return new hY(t.id,s,i,l,a,u,d,f,p.build(),g,y)}function hr(e,t,n,r,o,s){const i=ir(e,t,n,r,o,kF,s,null),a={id:t.id,actionDetails:{action:"Open",contentType:rr(t)},relatedSubjectIds:[n.id],...o}
return nr(t)===vw.AppEvent&&(a[YR]=t.id),od(e,i,a),i}function wr(e,t,n=null,o,i,a,c,l,u,d){const f=[]
let p
for(const h of t){const t=sr(e,h,n,o,!0,GF,kF,i,!1,a,c,l,null,u,d)
if(r(t))continue
if(t instanceof Date){(r(p)||t.getTime()<p.getTime())&&(p=t)
continue}const w=t,g={...a,id:h.id,kind:or(h),targetType:rr(h),title:w.title,softwareType:null},m=null!=n?n:oe(h,C$)
s(m)&&(g.relatedSubjectIds=[m.id]),nn(0,w,g),ju(g.locationTracker),f.push(w)}return{appPromotions:f,nextAppEventPromotionStartDate:p}}function gr(e,t,n,a,c,l,u,d,f,p,h,w,g,m,y){var v,A
if(t.type!==O$)return null
const T=W(t,"promotionStartDate")
if(o(T))return null
const P=new Date(T)
if(r(P))return null
const I=new Date
if(P.getTime()>I.getTime()&&!y)return P
const S=lr(e,t,Mg),b=dr(e,t,"lockupVideo",!1,!1)
if(r(S)&&o(b))return null
const C=null!==(v=null==b?void 0:b.preview)&&void 0!==v?v:S,k=B(C.backgroundColor)?R$:GF,E=B(C.backgroundColor,10),O=W(t,z$)
let R=W(t,PN)
i(g)&&(R=g)
const D=W(t,$I)
if(o(O)||o(R)||o(D))return null
const _=new Date(D)
if(r(_))return null
const L=null!==(A=W(t,sM))&&void 0!==A?A:"",x=null!=n?n:oe(t,C$)
let M
if(s(x)){if(M=fr(e,t,x,O,l,u,d,p,w,null,m,!0),r(M))return null}else if(!f)return null
const N=W(t,"requirement"),F=W(t,_N),$=W(t,BI)
let U
if((null==$?void 0:$.length)>0&&(U=new Date($)),U.getTime()<=I.getTime()&&!h)return null
const G=yr(e,mr(W(t,UI),_,U),_,U),V=new fY(t.id,S,b,O,F,L,_,U,R,N,M,a,G,k,E)
if(s(x)){const n={...p,id:x.id,inAppEventId:t.id,relatedSubjectIds:[x.id]}
V.notificationConfig=pr(e,t,V,n,!0)}return c&&s(x)&&(V.clickAction=hr(e,t,x,V,p,w)),V}function mr(e,t,n){let r=null!=e?e:"live"
return"live"===r&&s(n)&&n.getTime()-t.getTime()>216e5&&(r="happening"),r}function yr(e,t,n,r){const o=[],s=We(n),i=e.loc.string("AppEvents.FormattedDate.SevenDaysOrMore.DateFormat"),a=e.loc.uppercased(e.loc.formatDate(i,n)),c=new uY(null,a,!1,null,null)
o.push(c)
const l=new Date(s)
l.setDate(l.getDate()-6)
const u=e.loc.string("AppEvents.FormattedDate.SixDaysOrLess.DateFormat"),d=e.loc.formatDate(u,n),f=e.loc.uppercased(d),p=new uY(l,f,!1,null,null)
o.push(p)
const h=new Date(s)
h.setDate(h.getDate()-1)
const w=e.loc.string("AppEvents.FormattedDate.Tomorrow"),g=e.loc.formatDateInSentence(w,Ng,n),m=e.loc.uppercased(g),y=new uY(h,m,!1,null,null)
if(o.push(y),n.getHours()>1||1===n.getHours()&&n.getMinutes()>0){let t
t=n.getHours()>=19?e.loc.string("AppEvents.FormattedDate.Tonight"):e.loc.string("AppEvents.FormattedDate.Today")
const r=e.loc.formatDateInSentence(t,Ng,n),i=e.loc.uppercased(r),a=new uY(s,i,!1,null,null)
o.push(a)}const v=new Date(n)
let A
v.setHours(v.getHours()-1),A="available"===t?"AppEvents.FormattedDate.AvailableIn.MinutesCountdown":"AppEvents.FormattedDate.StartsIn.MinutesCountdown"
const T=new uY(v,null,!1,n,A)
let P,I
switch(o.push(T),t){case"available":P=e.loc.string("AppEvents.FormattedDate.NowAvailable"),I=!1
break
case"happening":P=e.loc.string("AppEvents.FormattedDate.HappeningNow"),I=!1
break
default:P=e.loc.string("AppEvents.FormattedDate.Live"),I=!0}const S=new uY(n,P,I,null,null)
if(o.push(S),null!==r){const t=new uY(r,e.loc.string("AppEvents.FormattedDate.EventEnded"),!1,null,null)
o.push(t)}return o}function vr(e,t=!1){return{timeToLive:Pr(e),nextPreferredContentRefreshDate:null,refreshWhileVisibleForNextPreferredContentRefreshDate:t}}function Ar(e,t){r(t)||r(e)||(r(t.nextPreferredContentRefreshDate)||e.getTime()<t.nextPreferredContentRefreshDate.getTime())&&e.getTime()>(new Date).getTime()&&(t.nextPreferredContentRefreshDate=e)}function Tr(e,t){if(!function(e){return e.bag.enableAutomaticPageRefresh}(e))return null
if(r(t))return null
let n,o=!1
if(s(t.timeToLive)&&s(t.nextPreferredContentRefreshDate)){const e=Ir(t.timeToLive)
e.getTime()<t.nextPreferredContentRefreshDate.getTime()&&e.getTime()>(new Date).getTime()?n=e:(n=t.nextPreferredContentRefreshDate,o=!0)}else if(s(t.timeToLive))n=Ir(t.timeToLive)
else{if(!s(t.nextPreferredContentRefreshDate))return null
n=t.nextPreferredContentRefreshDate,o=!0}if(n.getTime()<=(new Date).getTime())return null
const i=o&&t.refreshWhileVisibleForNextPreferredContentRefreshDate
return new HY("timeToLive",0,null,n,i)}function Pr(e){return e[Tw.contentMaxAge]}function Ir(e){const t=new Date
return t.setSeconds(t.getSeconds()+e),t}function Sr(e,t,n,r,o){let s=null
const i=(0,Yh.isSome)(o)&&1===o.length,a=(0,Yh.isSome)(o)&&o.length>1
return i?s=new LH(o[0]):a&&(s=new MH(o),s.displaysTitle=!1),s}function br(e,t,n,r,o,s,i){if(!z(o,Tk))return
let a=hd(e,o);(0,Gh.isNothing)(a)&&(0,Yh.isSome)(s)&&(a=wd(0,s.arcadeUpsellEditorialResponse))
const c=function(e,t,n,r,o,s,i){if(!function(e){const t=e.host.platform
return t===PM||t===GM}(e))return null
Cr(e,t,n,r)
const a=ws(),c=wl(e,s,i,uI,a,SN)
return new BH(c)}(e,o,t,n,0,a,i)
if(c){t.overlay=c,t.impressionMetrics.fields[fv]=!0
const r=Cr(e,o,t,n)
t.style!==r&&(t.style=r)}}function Cr(e,t,n,r){const o=!r.enableListCardToMultiAppFallback,s=Xt(e,t,r),i=ps(null==s?void 0:s.joeColors)
return o?n.style:i}function kr(e,t,n){if((0,Yh.isNothing)(t))return
const r=at(n.pageInformation)
r.id=ku(n.id)
const o=Su(n);(0,Yh.isSome)(o)&&(r[Zb]=o),r.type=HF,r.typeDetails="iTunesStoreContent",r[gL]=Mu(e,n,null),n.actionDetails&&(r[MM]=n.actionDetails),t.templateMediaEvent=function(e,t){const n={}
return Object.assign(n,t),n[BN]=Rb,Ju(0,new JB(n,[],[],ed(0,n),Xu(e,n)))}(e,r)
const s=v(r)
s[V_]=t.videoUrl,t.templateClickEvent=function(e,t,n,r){const o={}
return Object.assign(o,r),o[BN]=Lx,o[kb]=n,o[jy]=null,Ju(0,new JB(o,[HL],[],ed(0,o),Xu(e,o)))}(e,0,j$,s)}function Er(e,t){return l(t,WY)}function Or(e){return e===36..toString()?1:e===6014..toString()?2:0}function Rr(e){const t=e.categories
if(i(t)){const e=t[0].genreId
if(e===6014..toString())return 2
if(e===36..toString())return 1}return 0}function Dr(e,t,n=e.host.clientIdentifier,r=[]){t||(t=36)
const o=new hH(e).forType(FR).includingAdditionalPlatforms(r).includingMacOSCompatibleIOSAppsWhenSupported(!0).addingQuery(mF,`${t}`)
return n===_B?o.addingContext(W$):n===LB&&o.addingContext(MF),o}function _r(e,t,n=!0){return Uh.context("categoryListFromApiResponse",()=>{const r=c(t,"results.categories"),o=Lr(e,p(r,"0"),n)
return o?new zY(o.children):null})}function Lr(e,t,n=!0){return Uh.context("categoryFromApiResponse",()=>{if(!t)return null
const r=d(t,z$),o=d(t,mF),i=d(t,dL),a=El(e,p(t,I$),{allowingTransparency:!0,useCase:20}),l=c(t,yF).map(t=>Lr(e,p(t),n)).filter(e=>s(e)),u=function(e,t){return t.sort((t,n)=>{try{return t.name.localeCompare(n.name,e.loc.safeIdentifier,{usage:oF})}catch(e){return 0}})}(e,l),f=d(t,ZF)
return f&&n&&u.unshift(new qY(f,o,a,i,[])),new qY(r,o,a,i,u)})}function xr(e,t,n=!1,r=!1,o=!0){const s=n?"contentIconTrimmedMonochrome":"contentIconTrimmed",i="brandLogo",a=Ae(e,t,w$)
if(r)return p(a,i)
{let e=p(a,s)
return o&&(0,Yh.isNothing)(e)&&(e=p(a,i)),e}}async function Mr(e,t,n){const r=Date.now(),o=await e.mediaToken.refreshToken(),s=e.fetchTimingMetricsBuilder,i=await Fr(e,t,o,n||{},!1,s),a=Date.now()
return t.canonicalUrl&&(i[Tw.requestedUrl]=t.canonicalUrl),a-r>500&&Ge(e,t).toString(),i}function Nr(e,t){return e.bag.redirectUrlWhitelistedQueryParams.filter(e=>{var n
return s(null===(n=t.query)||void 0===n?void 0:n[e])})}async function Fr(e,t,n,a={},c=!1,u){const d=Ge(e,t).toString(),p=new nj(d),h=Nr(e,p)
for(const e of h)p.removeParam(e)
const w=p.toString()
let g=a.headers
g||(g={}),g.Authorization="Bearer "+n
const y=await e.network.fetch({url:w,headers:g,method:a.method,body:a.requestBodyString,timeout:a.timeout})
try{if(401===y.status||403===y.status){if(c)throw Error("We refreshed the token but we still get 401 from the API")
return e.mediaToken.resetToken(),await e.mediaToken.refreshToken().then(async n=>await Fr(e,t,n,a,!0,u))}if(404===y.status)throw $r()
if(!y.ok){const e=new YY(`Bad Status code ${y.status} for ${w}, original ${d}`)
throw e.statusCode=y.status,e}const n=n=>{var c,u
const p=Date.now()
let h
if(r(y.body)||""===y.body){if(204!==y.status)throw $r()
h={}}else h=JSON.parse(y.body)
const w=Date.now()
if(h){if(h[Tw.pageInformation]=m(function(e,t){const n=e.client.storefrontIdentifier
let r=null
if((null==n?void 0:n.length)>0){const e=n.split("-")
i(e)&&(r=e[0])}return{serverInstance:t.headers[JY],storeFrontHeader:n,language:e.bag.language,storeFront:r,environmentDataCenter:t.headers["x-apple-application-site"]}}(e,y)),y.metrics.length>0){const e={...y.metrics[0],parseStartTime:p,parseEndTime:w}
h[Tw.timingValues]=e}else{const e={pageURL:y.url,parseStartTime:p,parseEndTime:w}
h[Tw.timingValues]=e}if(h[Tw.contentMaxAge]=function(e,t){const n=Object.keys(t.headers).find(e=>"cache-control"===e.toLowerCase())
if(r(n)||""===n)return null
const s=t.headers[n]
if(o(s))return null
const i=s.match(/max-age=(\d+)/)
return r(i)||i.length<2?null:f(i[1])}(0,y),Array.isArray(h.data)&&s(u=h.data)&&0===u.length&&!l(a.allowEmptyDataResponse))throw $r()
Array.isArray(h.data)&&t.originalOrdering.length>1&&(h.data=function(e,t,n){const r=new Map
for(const e of n)r[Br(0,e.type,e.id)]=e
const o=[]
for(const e of t){const t=r[Br(0,e.type,e.id)];(0,Gh.isSome)(t)&&(t.meta={...e.meta,...t.meta},Ur(0,QM,t,e,r),Ur(0,XD,t,e,r),o.push(t))}return o}(0,t.originalOrdering,null!==(c=h.data)&&void 0!==c?c:[])),h[Tw.requestedUrl]=d}return h}
return(0,Gh.isSome)(u)?u.measureParsing(y,n):n(y)}catch(e){if(e instanceof YY)throw e
throw new Error(`Error Fetching - filtered: ${w}, original: ${d}, ${e.name}, ${e.message}`)}}function $r(){const e=new YY("No content")
return e.statusCode=204,e}function Br(e,t,n){return`${t}_${n}`}function Ur(e,t,n,r,s){var a;(0,Gh.isNothing)(n.meta)?n.meta={associations:{}}:(0,Gh.isNothing)(n.meta.associations)&&(n.meta.associations={})
const l=function(e,t){if(o(e))return null
const n=c(e,`meta.associations.${t}.data`)
return(0,Gh.isNothing)(n)?null:n}(r,t)
if(i(l)){const e=[]
for(const t of l){const n=s[Br(0,t.type,t.id)];(0,Gh.isSome)(n)&&e.push(n)}(null!==(a=p(n.meta.associations))&&void 0!==a?a:{})[t]={data:e}}}function Gr(e){return eJ.has(e)}function Vr(e){return ZY.has(e)}function jr(e){return QY.has(e)}function Hr(e,t,n){const r=Y(t,nN)
let o=null
const s=W(t,"gamesFilter")
switch(s){case F$:case hO:case"all":o=s
break
default:495!==r&&500!==r||(o=F$)}let a=null,c=W(t,qr(0,r)),u=null,f=null,p=W(t,lN)
const h={}
let w=!1
const g=se(t,xL)[0]
if(476===r&&i(g))if(a=e.loc.uppercased(W(t,qr(0,r))),p=null,g.type===U_){c=fu(e,g,z$)
const t=e.props.enabled("categorySwooshUpdatedArtwork"),n=xr(e,g,!1,!t)
if((0,Yh.isSome)(n)){u=El(e,n,{useCase:1,style:WE})
const t={type:ED,name:yO}
h.eyebrowColor=t}f={forYou:!0}}else w=!0,c=W(g,qr(0,r)),u=_l(e,g,{useCase:1})
const m={featuredContentId:r,id:d(t,"id"),presentationHints:{},metricsPageInformation:n.metricsPageInformation,metricsLocationTracker:n.metricsLocationTracker,pageGenreId:n.pageGenreId,featuredContentData:t,title:c,subtitle:p,eyebrow:a,titleArtwork:u,shelfHeaderConfiguration:h,shouldFilter:!1,gamesFilter:o,remainingItems:[],isFirstRender:!0,isDeferring:!1,showOrdinals:!1,hasExistingContent:!1,showingPlaceholders:!1,ordinalIndex:1,isSearchLandingPage:n.isSearchLandingPage,isArcadePage:null==n?void 0:n.isArcadePage}
return{shelfToken:m,metricsOptions:{id:m.id,kind:null,softwareType:l(null==n?void 0:n.isArcadePage)?FF:null,targetType:l$,title:w?m.eyebrow:m.title,badges:f,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,idType:NN,fcKind:r,recoMetricsData:Qr(0,t)}}}function Wr(e){return e&&e.isDeferring&&e.isFirstRender}function qr(e,t){switch(t){case 548:case 495:case 496:return WM
default:return z$}}function zr(e){let t=(new nj).set(IN,YU).append(FN,nG).append(FN,QU).append(FN,encodeURIComponent(JSON.stringify(e))).param(eV,`${e.featuredContentId}`)
return(0,Yh.isSome)(e.nativeGroupingShelfId)&&(t=t.param(tV,`${e.nativeGroupingShelfId}`)),t.build()}function Yr(e,t){if(o(t))return null
r(t.shelfStyle)&&(t.shelfStyle=e.contentType)
const n=e.contentType!==L_&&i(e.items)
return t.hasExistingContent=t.hasExistingContent||n&&t.isFirstRender,(t.remainingItems.length||t.recommendationsHref||t.onDeviceRecommendationsUseCase)&&t.isFirstRender?zr(t):null}function Jr(e,t){e.remainingItems=e.remainingItems.filter(e=>!t.has(e.id))}function Zr(e,t,n){var r
const o=i(t.remainingItems),s=!o&&(null===(r=t.recommendationsHref)||void 0===r?void 0:r.length)>0
if(o){const n=function(e){var t
const n=(null===(t=e.relationshipToFetch)||void 0===t?void 0:t.length)>0
let r=e.remainingItems
return n&&(r=e.remainingItems.map(t=>oe(t,e.relationshipToFetch))),r}(t),r=new hH(e,n)
return Ue(e,r,n),Kr(e,r),r}if(s){const n=new hH(e,t.recommendationsHref)
return Kr(e,n),ar(e)&&(n.enablingFeature(s$),n.includingMetaKeys(G_,[OD,vO]),n.includingScopedAttributes(O$,[P$,EN,TN]),n.includingScopedRelationships(O$,[C$])),cr(e)&&(n.enablingFeature(AO),n.includingScopedRelationships(f$,[wx,jM,LN]),n.includingAssociateKeys(f$,[I_]),n.includingScopedAttributes(f$,[z$,_N,mL]),n.includingMetaKeys(IL,[SL]),n.includingMetaKeys(iD,[g_]),n.includingAssociateKeys(f$,[I_])),n}return null}function Kr(e,t){t.includingAdditionalPlatforms(E(e)).includingRelationshipsForUpsell(!0).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes(De(e))
let n=[w$,o$,OF];(t.includesResourceType(q$)||t.includesResourceType(O$))&&(n=n.concat(qM,OM,zM)),t.includingAttributes(n),ar(e)&&(t.enablingFeature(s$),t.includingMetaKeys(G_,[OD,vO]),t.includingScopedAttributes(O$,[P$,EN,TN]),t.includingScopedRelationships(O$,[C$])),t.includesResourceType(f$)&&cr(e)&&(t.enablingFeature(AO),t.includingScopedRelationships(f$,[wx,jM,LN]),t.includingScopedAttributes(f$,[z$,_N,mL]),t.includingMetaKeys(IL,[SL]),t.includingMetaKeys(iD,[g_]),t.includingAssociateKeys(f$,[I_]))}function Qr(e,t){const n=Y(t,nN)
switch(n){case 425:case 415:case 416:case 417:case 501:case 258:case 421:case 422:case 423:case 261:return M(ne(t,yF))
case 437:case 265:{const e=ne(t,yF),n=H(t,$_)
return i(e)?M(e):i(n)?M(t):null}case 414:case 424:case 566:return null
default:if(function(e){return Vr(e)||Gr(e)||tJ.has(e)||518===e}(n)){let e=ne(t,V$)
if(r(e))return null
const n=e.data
return n&&0!==n.length||(e=ne(t,yF)),M(e)}return null}}function Xr(e,t,n){const r=El(e,t,n)
return r&&(r.crop="sr"),r}function eo(e,t,n,r,o){const s=j(t,I$)
if(s instanceof Array){const t=function(e,t,n,r){const o=n/r
let s=0,i=null
for(const e of t){const t=f(e,Ix),r=t/f(e,lM);(r===o||Math.abs(o-r)<=Math.abs(o-s))&&(!i||t<=n&&t>i.width||i.width>n&&t<i.width&&t>i.width)&&(i=e,s=r)}return i?nt(e,d(i,b$),f(i,Ix),f(i,lM),null,null,d(i,IS)):null}(e,s,n,r)
return t.crop="bb",t}return null!=s?Xr(e,s,o):null}function to(e,t,n,a,c,l,u,f){var p,h,w
const g=(null===(p=d(t,b$))||void 0===p?void 0:p.length)>0,m=(null===(h=W(t,ab))||void 0===h?void 0:h.length)>0,y=te(t,PF,!1),v=te(t,V$,!1)||y
let A=W(t,PN)===ky
if(m||g)return function(e,t,n,o,i){const a=s(d(t,b$))?t:j(t,m$)
if(r(a)||Wr(n))return c=t,i?i():null==n||n.remainingItems.push(c),null
var c
const l=d(a,_E),u=d(a,b$),f=d(a,ZF),p=io(W(t,ib))||f
let h=null
if(l===rS)h=new sU(u),h.title=p
else{const t=e.required(gQ).fetchFlowPage(u),n=new nU(t)
n.pageUrl=u,n.title=p,h=n}return h.presentationStyle=[gI],od(e,h,{...o,id:""}),{action:h,caption:null,title:p,subtitle:null,artwork:null,shortEditorialDescription:null}}(e,t,n,l,f)
if(v){let p,h,g
if(a&&!y){g=ho(e,"groupingCommon",se(t,V$),!0,c,!1,1)
const n=g.personalizedData
if(0===n.length)return null
p=n[0]}else p=oe(t,y?PF:V$)
if(W(p,PN)===ky&&(h=p,p=oe(p,PF),A=!0),r(p))return null
if(r(p.attributes)||Wr(n))return i(n)&&(n.isDeferring=!0),function(e){f?f():null==n||n.remainingItems.push(e)}(p),null
let m=fu(e,p,lN)||nl(e,p)
const v=td(e,t,l)
v.targetType=l.targetType
let T=yl(e,p,v,null==n?void 0:n.clientIdentifierOverride)
const P=z(p,AL)
let I,S=null,b=null,C=null
const k=W(p,"itunesNotes.short"),E=(null===(w=p.id)||void 0===w?void 0:w.length)>0,O={...l,id:E?p.id:t.id,idType:E?HN:vD}
switch(p.type){case jN:S=j(p,I$),A&&(p=null!=h?h:t)
break
case M$:{const t=oe(p,bF)
if(i(t)){const r={...O,inAppEventId:t.id},i=oe(t,C$)
s(i)&&(r.relatedSubjectIds=[i.id])
const a=gr(e,t,null,!1,!0,R$,h$,!1,!1,r,!1,!0,null,n.isArcadePage,!1)
if(s(a)){if(a instanceof Date)return Ar(a,u.refreshController),null
I=a,P||(T=I.clickAction),o(m)&&(m=fu(e,t,AN))}}b=W(p,ZF),b&&(b=b.replace(/\n/g," "))
const a=oe(p,V$),c=d(p,uM)
o(m)&&(c?m=c:a&&(m=fu(e,a,AN))),o(m)&&s(I)&&(m=I.subtitle)
let f=W(p,JS);((0,Yh.isNothing)(f)||0===f.length)&&(f=m)
const h={useOTDTextStyle:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,isHeroCard:!1}
if(r(I)&&rt(0,p),s(I))C=I.lockup
else{const t=null,r=null
{Fu(e,O,null==n?void 0:n.title)
const o=as(e,se(p,bF),h,l.pageInformation,l.locationTracker,t,r,rt(0,p))
1===o.length&&(C=o[0]),Bu(O.locationTracker)}}}default:{const t=[q$,ON,x$,QF]
if(r(C)&&t.indexOf(p.type)>-1){Fu(e,O,null==n?void 0:n.title)
const t={metricsOptions:{pageInformation:l.pageInformation,locationTracker:l.locationTracker,recoMetricsData:M(p)},clientIdentifierOverride:null==n?void 0:n.clientIdentifierOverride,artworkUseCase:kl(0,null==n?void 0:n.shelfStyle),canDisplayArcadeOfferButton:!0,shouldHideArcadeHeader:e.featureFlags.isEnabled(wL)&&n.isArcadePage}
C=al(e,p,t),Bu(O.locationTracker)}S=Ae(e,p,w$)||j(p,w$),o(m)&&s(C)&&(m=C.subtitle)
break}}if(s(T)&&(T.presentationStyle=[gI],!A)){const n=io(W(t,ib)),r=fu(e,p,z$)
T.title=n||r||T.title||m||b}return{action:T,caption:b,title:null==T?void 0:T.title,subtitle:m,artwork:S,shortEditorialDescription:k,content:p,lockup:C,appEvent:I,onDevicePersonalizationDataProcessingType:null==g?void 0:g.processingType}}return null}function no(e,t){const n={}
for(const t of e)n[t.id]=t
const r=[V$,N_],o=[]
for(const e of t){let t=!0
for(const o of r){const r=se(e,o)
if(s(r)){const s=[]
for(const e of r){const t=n[e.id]
i(t)&&s.push(t)}s.length===r.length?e.relationships[o]={data:s}:t=!1}}t&&o.push(e)}return o}function ro(e,t,n){t.seeAllAction=null,t.isHorizontal=!1,t.shouldFilterApps&&(t.filteredItemsMinimumCount=0,t.filteringExcludedItems=n.includedAdAdamIds)}function oo(e,t){switch(t){case FL:return zN
case pb:return yD
case pL:return TO
case BL:return cb
default:return null}}function so(e,t){let n=W(t,eF)
return n||(n=W(t,"contentId")),n||(n=W(t,"id")),n}function io(e){if(r(e))return null
const t=e.replace(/&amp;/g,"&").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#96;/g,"`").replace(/\r\n/g," ").replace(/&nbsp;/g," ").replace(/<span>/g,"").replace(/<\/span>/g,"").replace(/<br>/g," ").replace(/\u23ce/g,"").replace(/<i>/g,"").replace(/<\/i>/g,"").replace(/<b>/g,"").replace(/<\/b>/g,"")
return t.match(/^\s*$/)?null:t}async function ao(e,t,n){const r=n===Y$?"OnDeviceRecommendationsShelfController":rA
return await new Promise((n,s)=>{if(o(t)){const e=`${r}: Missing valid useCase for ODP: ${t}`
return Uh.unexpectedType(RF,e,null),void s(new Error(e))}e.onDeviceRecommendationsManager.performRequest({type:"fetchRecommendations",dsId:e.user.dsid,useCase:t}).then(o=>{const a=c(o[oA]),l=m(o[CM])
if(i(a)){const o=[]
for(const e of a)i(e)&&o.push({id:e,type:q$})
const c=new hH(e,o).withFilter("apps:recommendable",qF).addingQuery(kD,t)
Kr(e,c),Mr(e,c).then(e=>{n({candidates:a,recoMetrics:l,dataContainer:e})}).catch(e=>{const t=`${r}: Failed to fetch Media API data for: ${a}`
Uh.unexpectedType(RF,t,null),s(new Error(t))})}else{const e=`${r}: ODP returned no candidate ids for useCase: ${t}`
Uh.unexpectedType(RF,e,null),s(new oJ(e))}}).catch(e=>{const n=`${r}: Failed to perform ODP for useCase: ${t}, ${e}`
Uh.unexpectedType(RF,n,null),s(new Error(n))})})}function co(e){const t=new Set,n=[]
return e.forEach((e,r)=>{t.has(e.appId)||(n.push(e.appId),t.add(e.appId))}),n}function lo(e,t){const n=e.filter(e=>s(e.pinnedPosition))
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
return c}function uo(e){const t=new Map
return i(e)&&e.split(",").forEach(e=>{const n=e.split("=")
2===n.length&&t.set(n[0],Number(n[1]))}),t}function fo(e,t,n,i,a,c,l,u){const f=function(e,t,n,r,i){const a=[]
for(const c of t){const t=new iJ(c),l=d(c,nA)
let u=d(c,M_),f=d(c,pC)
if(((0,Yh.isNothing)(u)||0===u.length)&&(null==i?void 0:i.length)>0&&(u=i,f=e.random.nextUUID()),o(l)||o(u)||o(f)){r&&(t.isUnpersonalizedMatch=!0,a.push(t))
continue}const p=l.split(",")
if(p.includes(aJ)&&(t.isWildcardMatch=!0),s(n)){const e=n[u]
if(s(e))for(const n of p)if(e.userSegments.includes(n)){t.isExactMatch=!0
break}}t.appId=u,t.groupId=f,a.push(t)}return a}(e,t,null==n?void 0:n.personalizationData,i,l),p=co(f),h=function(e,t){var n
const r=new Set,s=[],i=t.filter(e=>e.isExactMatch).map(e=>e.groupId),a=new Set(i)
t.forEach((e,t)=>{if(o(e.groupId))s.push(e)
else if(!r.has(e.groupId))if(e.isUnpersonalizedMatch)s.push(e)
else{if(e.isExactMatch)return r.add(e.groupId),void s.push(e)
if(!a.has(e.groupId)){if(e.isWildcardMatch)return r.add(e.groupId),void s.push(e)
e.isFallbackMatch=!0,s.push(e)}}})
const c=[],l=s.slice().reverse()
for(const e of l)e.isFallbackMatch&&r.has(e.groupId)||(c.push(e),(null===(n=e.groupId)||void 0===n?void 0:n.length)>0&&r.add(e.groupId))
return c.reverse(),c}(0,f),w=function(e,t,n,o,s,i){let a
const c=t.filter(e=>e.isExactMatch||e.isWildcardMatch||e.isUnpersonalizedMatch||r(e.groupId))
return r(s)?a=po(c,o,i):c.length>=s||!n?(a=po(c,o,i),a.sortedDataItems=a.sortedDataItems.slice(0,s)):(a=po(t,o,i),a.sortedDataItems=a.sortedDataItems.slice(0,s)),a}(0,h,a,p,c,u),g=w.sortedDataItems.map(e=>e.rawData)
return{personalizedData:g,processingType:(t.length!==g.length?1:0)+w.processingType}}function po(e,t,n){const r=e.filter(e=>e.isExactMatch)
let o=e.filter(e=>!e.isExactMatch)
s(n)&&n&&(o=lo(o,t))
const i=r.concat(o),a=e.every((e,t)=>e===i[t])
return{sortedDataItems:i,processingType:a?0:2}}function ho(e,t,n,r,a,c=!1,l,u,p){return wo(e)?t===py?function(e,t,n,r,o){var a
let c=t,l=!1
const u=[]
let p
if(e.featureFlags.isEnabled("contingent_offers_personalization")||(c=t.filter((e,t)=>!i(e.type)||e.type===O$||(u.push(t),!1)),l=c.length!==t.length),p=null!==(a=(null==r?void 0:r.metricsData).use_segment_scores)&&void 0!==a&&a?function(e,t,n,r){const o=function(e,t){const n=[]
for(const[e,r]of t.entries()){const t=new sJ(r),o=d(r,M_),s=d(r,pC),i=f(r,"meta.personalizationData.score"),a=d(r,"meta.personalizationData.segScores"),c=w(r,"meta.personalizationData.isPinned"),l=uo(a)
t.appId=o,t.groupId=s,t.score=null!=i?i:0,t.segScores=l,c&&(t.pinnedPosition=e),n.push(t)}return n}(0,t)
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
s(r)&&r&&(i=lo(i,co(i)))
const a=i.map(e=>e.rawData),c=i.every((e,t)=>e===o[t])?0:2
return{personalizedData:a,processingType:(t.length!==a.length?1:0)+c}}(0,c,r,o):fo(e,c,r,n,null,null,null,o),l){const e=p.personalizedData
u.forEach(n=>{const r=t[n]
n<e.length?e.splice(n,0,r):e.push(r)}),p={personalizedData:e,processingType:p.processingType}}return p}(e,n,r,a,p):fo(e,n,a,r,c,l,u,p):function(e,t,n){let r=[]
const i=new Set
for(const e of t){const t=d(e,nA),n=d(e,M_),s=d(e,pC)
o(t)||o(n)||o(s)?r.push(e):i.has(s)||t.split(",").includes(aJ)&&(r.push(e),i.add(s))}return s(n)&&r.length>n&&(r=r.slice(0,n)),{personalizedData:r,processingType:null}}(0,n,l)}function wo(e){return e.user.isOnDevicePersonalizationEnabled&&e.bag.enableOnDevicePersonalization}function go(e,t){return wo(e)?e.host.platform===PM?e.user.onDevicePersonalizationDataContainerForAppIds(Array.from(t)):{personalizationData:{},metricsData:null}:null}function mo(e){return wo(e)&&e.host.platform===PM?e.user.onDevicePersonalizationDataContainerForAppIds([]).metricsData:null}function yo(e,t){return{incidents:[],iAdInfo:t}}function vo(e,t){return r(t)||o(t.incidents)?null:t.incidents}function Ao(e,t,n){var r,o
const s=gn(0,n)
Po(t,new lJ(s,Eg)),null===(r=null==t?void 0:t.iAdInfo)||void 0===r||r.setMissedOpportunity(e,SE,null===(o=null==t?void 0:t.iAdInfo)||void 0===o?void 0:o.placementType)}function To(e,t,n){var r,i,a,c,l,u,d,f
if(o(n)||o(n.failureReason))return
const p=null===(r=n.onDeviceAd)||void 0===r?void 0:r.instanceId,h=null===(i=null==t?void 0:t.iAdInfo)||void 0===i?void 0:i.placementType
switch(n.failureReason){case Og:s(p)&&Po(t,new lJ(p,Eg)),null===(a=null==t?void 0:t.iAdInfo)||void 0===a||a.setMissedOpportunity(e,SE,h)
break
case MI:s(p)&&Po(t,new lJ(p,MI)),null===(c=null==t?void 0:t.iAdInfo)||void 0===c||c.setMissedOpportunity(e,SE,h)
break
case Rg:s(p)&&Po(t,new lJ(p,Rg)),null===(l=null==t?void 0:t.iAdInfo)||void 0===l||l.setMissedOpportunity(e,SE,h)
break
case"noAdAvailable":null===(u=null==t?void 0:t.iAdInfo)||void 0===u||u.setMissedOpportunity(e,Dg,h)
break
case"timeout":null===(d=null==t?void 0:t.iAdInfo)||void 0===d||d.setMissedOpportunity(e,"APSLA",h)
break
case NI:s(p)&&Po(t,new lJ(p,NI)),null===(f=null==t?void 0:t.iAdInfo)||void 0===f||f.setMissedOpportunity(e,"NOLOC",h)}}function Po(e,t){r(e)||e.incidents.push(t)}function Io(e,t){return i(j(t,fx))}function So(e,t,n,r,o=!0){if(!r.isAdvert)return void bo(e,t,n,r)
const s=Co(e,t,r),i=du(e,t)?UL:PO,a=Eo(0,r),c=new gW(s.instanceId,t.id,i,Oy,a)
n.clickAction=ko(e,n.clickAction,c)
const l=new gW(s.instanceId,t.id,i,"offerButtonPress",a)
n.buttonAction=ko(e,n.buttonAction,l),n.searchAd=s,n.itemBackground="ad",n.offerDisplayProperties&&o&&(n.offerDisplayProperties=n.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,cN,"ad")),z(t,"iad.format.userRating")||(n.rating=null,n.ratingCount=null),bo(e,t,n,r)}function bo(e,t,n,o){const s=sn(e,t,n,_u(e,t,n.icon,null),o,!0)
!function(e,t,n){var o,s,i
if(!r(t.searchAd)&&(null===(o=t.clickAction)||void 0===o||o.actionMetrics.clearAll(),t.clickAction&&od(e,t.clickAction,n,!0),t.searchAd.transparencyAction)){const r=n.pageInformation,o={actionType:"ad_transparency"}
r.iAdInfo&&Object.assign(o,r.iAdInfo.clickFields)
const a=Zu(e,t.adamId,j$,o)
null!==(i=null===(s=r.iAdInfo)||void 0===s?void 0:s.shouldIncludeAdRotationFields)&&void 0!==i&&i&&a.includingFields.push(j_),t.searchAd.transparencyAction.actionMetrics.addMetricsData(a)}}(e,n,s),on(0,n,s,s.pageInformation.iAdInfo)}function Co(e,t,n){let r=gn(0,t)
o(r)&&(r=e.random.nextUUID(),Dn(e,`Error: instanceId was null or empty. Assigned ${r}`))
const s=j(t,fx),i=W(t,"iad.impressionId"),a=W(t,"iad.privacy"),c=new IY(a)
c.title=e.adsLoc.string("IAD_PRIVACY_MARKER_BUTTON_TITLE")
const l=du(e,t)?UL:PO,u=Eo(0,n),d=ko(e,c,new gW(r,t.id,l,"markerPress",u))
return new PY(r,s,i,d)}function ko(e,t,n){if(e.featureFlags.isEnabled("action_dispatcher")){const e=new qU(n),r=new iU([e,t])
return r.title=t.title,r}return t.adActionMetrics=n,t}function Eo(e,t){var n
const o=null===(n=null==t?void 0:t.pageInformation)||void 0===n?void 0:n.iAdInfo
if(r(o))return JM
const s=o.placementType
switch(s){case kN:return Ry
case rN:return"searchAds"
case L$:case u$:case $F:return Ry
default:throw new Error(`This method should never be called with value: ${s}`)}}function Oo(e,t,n,r){return hl(e,t,{offerEnvironment:"ad",offerStyle:"transparent",metricsOptions:{pageInformation:r.pageInformation,locationTracker:r.locationTracker,isAdvert:!0,adSlotOverride:r.parsedCardCount,disableFastImpressionsForAds:!0},clientIdentifierOverride:n.clientIdentifierOverride,crossLinkSubtitle:n.crossLinkSubtitle,artworkUseCase:1,canDisplayArcadeOfferButton:n.canDisplayArcadeOfferButton},{allowsAutoPlay:!0,looping:!0,showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}},null,!1)}function Ro(e){for(const t of e)switch(t.type){case Pw.EditorialItem:case Pw.EditorialItemGroup:return J(t.data)}return!1}function Do(e,t){if(!wo(e))return null
const n=new Set
for(const e of t){if(r(e.contents))continue
const t=e=>d(e,M_)
for(const r of e.contents)if(r.type===hN){const e=c(r.meta,Rk)
for(const r of e){const e=t(r)
i(e)&&n.add(e.toString())}}else{const e=t(r)
i(e)&&n.add(e.toString())}}return go(e,n)}function _o(e,t,n,r,o,s){var i
const a={useOTDTextStyle:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,isHeroCard:!1}
return a.useOTDTextStyle=null!==(i=w(t,"meta.personalizationData.isOfTheDay"))&&void 0!==i&&i,a.isAdEligible=n,a.currentRowIndex=r,a.metricsDisplayStyle=o,a.isHeroCard=s,a}function Lo(e,t){if(e.client.isPhone)return t.currentRowIndex}function xo(e,t,n){switch(t){case qh.Grid:n%2==1&&e.currentRowIndex++
break
case qh.Hero:0!==n&&(n-1)%2!=1||e.currentRowIndex++
break
case qh.Standard:e.currentRowIndex++}}function Mo(e,t,n,r){if(e.client.isPad)t.currentRowMetricsDisplayStyle=pw.MediumCard
else switch(n){case qh.Grid:t.currentRowMetricsDisplayStyle=pw.SmallCard
break
case qh.Hero:t.currentRowMetricsDisplayStyle=0===r?pw.MediumCard:pw.SmallCard
break
case qh.Standard:t.currentRowMetricsDisplayStyle=pw.MediumCard}}function No(e,t){if(t.type===M$)return qh.Standard
let n
const r=Mt(t)
return J(r)&&(n=W(r,"editorialItemGroupDisplayStyle")),(0,Yh.isNothing)(n)&&(n=W(t,vF)),function(e,t){if((0,Yh.isNothing)(t))return!1
switch(t){case qh.Hero:return e.client.isPhone||e.props.enabled(Ok)
case qh.Grid:return e.client.isPhone
default:return!0}}(e,n)?n:qh.Standard}function Fo(e){return e.adLocation===e.parsedCardCount||!(0,Yh.isNothing)(e.eligibleAdLocations)&&e.eligibleAdLocations.includes(e.parsedCardCount)}function $o(e,t,n){var r
const o=Uo(e,t,n,()=>{var r,o,s
const i=[]
null===(r=n.pageInformation.iAdInfo)||void 0===r||r.updateContainerId(null===(o=n.pageInformation.iAdInfo)||void 0===o?void 0:o.containerIdForSlotIndex(null!==(s=n.parsedCardCount)&&void 0!==s?s:0))
const a=No(e,t.data)
Mo(e,n,a,0)
const c=rs(e,t.data,_o(0,t.data,Fo(n),Lo(e,n),n.currentRowMetricsDisplayStyle,!1),n)
return(0,Yh.isNothing)(c)||(i.push(c),ju(n.locationTracker),n.parsedCardCount++,xo(n,a,0)),i})
if(o.contentsMetadata={type:Dk,debugSectionTypeIndicatorColor:t.type===Pw.EditorialItemGroup?U(jS):U(hb),groupDisplayStyle:qh.Standard},!t.isFirstItemInModule){const n=Jo(e,t);(0,Yh.isSome)(n)&&(o.background=n.shelfBackground,(0,Yh.isSome)(null===(r=o.header)||void 0===r?void 0:r.configuration)&&(o.header.configuration.eyebrowColor=n.eyebrowColor,o.header.configuration.titleColor=n.titleColor,o.header.configuration.subtitleColor=n.subtitleColor))}return o}function Bo(e,t,n){var r
let o=!0
const s=Uo(e,t,n,()=>{var r,s,i,a,l
const u=[],d=c(t.data.meta,Rk),f=No(e,t.data)
let p=0
for(const[c,l]of d.entries()){null===(r=n.pageInformation.iAdInfo)||void 0===r||r.updateContainerId(null===(s=n.pageInformation.iAdInfo)||void 0===s?void 0:s.containerIdForSlotIndex(null!==(i=n.parsedCardCount)&&void 0!==i?i:0)),Mo(e,n,f,p)
const h=_o(0,l,Fo(n),Lo(e,n),n.currentRowMetricsDisplayStyle,f===qh.Hero&&0===c),w=rs(e,l,h,n);(0,Yh.isSome)(w)&&(u.push(w),ju(n.locationTracker),n.parsedCardCount++,xo(n,f,p),p++),h.isHeroCard&&(0,Yh.isNothing)(w)&&([OL,Sx].includes(e.client.buildType)&&Uh.unexpectedType(RF,`Hero story group ${null===(a=t.data)||void 0===a?void 0:a.id} must contain a valid hero card at index ${c}. Unable to parse card ${l.id}.`,null),o=!1),c<d.length-1&&Vo(e,u,n,_o(0,n.adData,Fo(n),Lo(e,n),void 0,!1))}if(o){const n=3
u.length!==n&&([OL,Sx].includes(e.client.buildType)&&Uh.unexpectedType(RF,`Hero story group ${null===(l=t.data)||void 0===l?void 0:l.id} must contain exactly ${n} items but only found ${u.length} items.`,null),o=!1)}return u})
let i=No(e,t.data)
if(i!==qh.Hero||o||(i=qh.Standard),s.contentsMetadata={type:Dk,debugSectionTypeIndicatorColor:U(jS),groupDisplayStyle:i},!t.isFirstItemInModule){const n=Jo(e,t);(0,Yh.isSome)(n)?(s.background=n.shelfBackground,(0,Yh.isSome)(null===(r=s.header)||void 0===r?void 0:r.configuration)&&(s.header.configuration.eyebrowColor=n.eyebrowColor,s.header.configuration.titleColor=n.titleColor,s.header.configuration.subtitleColor=n.subtitleColor)):i===qh.Hero&&Array.isArray(s.items)&&(s.background=function(e){const t=e.map(e=>e.media.bestBackgroundColor()).filter(e=>(0,Yh.isSome)(e))
let n=null
if(t.length>0&&t.length<=4&&t.length===e.length)switch(t.length){case 1:n={type:gR,colors:{colorCount:"oneColor",color:t[0]}}
break
case 2:n={type:gR,colors:{colorCount:"twoColor",top:t[0],bottom:t[1]}}
break
case 3:n={type:gR,colors:{colorCount:"threeColor",top:t[0],bottomLeading:t[1],bottomTrailing:t[2]}}
break
case 4:n={type:gR,colors:{colorCount:"fourColor",topLeading:t[0],topTrailing:t[1],bottomLeading:t[2],bottomTrailing:t[3]}}}else n={type:nF,color:U("secondarySystemBackground")}
return n}(s.items))}return s}function Uo(e,t,n,r){const s=t.type===Pw.EditorialItemGroup,i=new rH(SN)
if(i.id=t.data.id,i.isHorizontal=!1,i.header=function(e,t,n){var r
if(null!==(r=w(t.data,"meta.personalizationData.suppressHeader"))&&void 0!==r&&r)return null
const o={eyebrow:jo(0,t),eyebrowArtwork:qo(e,t,gw.Eyebrow),eyebrowArtworkType:zo(e,t,gw.Eyebrow),title:Ho(0,t),titleArtwork:qo(e,t,gw.Title),titleArtworkType:zo(e,t,gw.Title),subtitle:Wo(0,t),configuration:{eyebrowImageColor:null,titleImageColor:null,includeSeparator:!1}}
return(0,Yh.isSome)(o.eyebrow)||(0,Yh.isSome)(o.title)||(0,Yh.isSome)(o.subtitle)?o:null}(e,t),s){const r={id:i.id,kind:hC,softwareType:null,targetType:l$,title:Ho(0,t,!0),pageInformation:n.pageInformation,locationTracker:n.locationTracker,idType:HN,recoMetricsData:Zo(t)}
t.type===Pw.EditorialItemGroup&&(r[gv]=d(t.data,Pk),r[wv]=d(t.data,Ik)),nn(0,i,r),Fu(e,r,r.title)}return i.items=r(),i.isHidden=o(i.items),s&&(Bu(n.locationTracker),ju(n.locationTracker)),i}function Go(e,t){let n=null
if(!dn(e,L$)||(0,Yh.isNothing)(t.adData))return n
if(t.adLocation!==t.parsedCardCount)return n
n=new rH(SN),n.id=t.adData.id,n.isHorizontal=!1,n.contentsMetadata={type:Dk,debugSectionTypeIndicatorColor:U(hb),groupDisplayStyle:qh.Standard}
const r=[]
return Vo(e,r,t,_o(0,t.adData,Fo(t),Lo(e,t),void 0,!1)),n.items=r,i(n.items)?n:null}function Vo(e,t,n,o){var i,a,c
if(!dn(e,L$))return
if(n.adLocation!==n.parsedCardCount)return
null===(i=n.pageInformation.iAdInfo)||void 0===i||i.updateContainerId(null===(a=n.pageInformation.iAdInfo)||void 0===a?void 0:a.containerIdForSlotIndex(null!==(c=n.parsedCardCount)&&void 0!==c?c:0))
const l=function(e,t,n,o,i){return Uh.context("createTodayAdCard",()=>{var a
if(r(t))return null
const c=Ko(e,t,o,i)
os(e,t,o,i,d(t.attributes.name))
const l=an(e,t,d(t.attributes.name),{targetType:SN,pageInformation:i.pageInformation,locationTracker:i.locationTracker,isAdvert:!0,rowIndex:o.currentRowIndex,displayStyle:o.metricsDisplayStyle}),u=_e(e,t)
l.productVariantData=u,l.adSlotOverride=i.parsedCardCount,l.kind=fk
const f=l
let p
l.pageInformation.iAdInfo.apply(e,t),s(o)&&(p=o.clientIdentifierOverride),c.style=R$,fn(e)===LR&&(null===(a=l.pageInformation.iAdInfo)||void 0===a||a.setTemplateType(bb))
let h=Oo(e,t,o,i)
if(r(h))return Ao(e,n,t),ss(i),rn(0,c,l,null,null,!1,!1),null
switch(fn(e)){case LR:const n=new fW(h,h.icon)
c.media=new DH(h,h.icon,n),c.media.impressionMetrics=h.impressionMetrics
break
case _R:if(c.media=function(e,t,n,r,o){var s,i
const a=t.screenshots[0],c=[AT,"U","I",(null!==(s=null==a?void 0:a.artwork)&&void 0!==s?s:[]).length].join("")
null===(i=r.iAdInfo)||void 0===i||i.setTemplateType(c)
const l=_l(e,o,{useCase:0,withJoeColorPlaceholder:!0})
let u=l.backgroundColor,d=l.textColor
const f={type:mM,red:1,green:1,blue:1}
e.props.enabled("mediumAdBackgroundColorFix")?V(f,u)?(u=d,d=void 0):V(f,d)&&(d=void 0):V(f,u)?u=d:V(f,d)&&(d=u)
const p=new dW(t,[a],n,d,u,8)
return new RH(t,[a],n,d,u,e.bag.todayAdMediumLockupScreenshotsRiverSpeed,p)}(e,h,e.bag.todayAdMediumLockupScreenshotAnimationEnabled,l.pageInformation,t),h=Oo(e,t,o,i),r(h))return null
c.media.mediumAdLockupWithScreenshotsBackground.lockup=h,c.media.impressionMetrics=h.impressionMetrics
break
default:return null}return ss(i),c.clickAction=yl(e,t,f,p),function(e,t,n,r){const o=Co(e,t,r),s=du(e,t)?UL:PO,i=Eo(0,r),a=new gW(o.instanceId,t.id,s,Oy,i)
n.clickAction=ko(e,n.clickAction,a)}(e,t,c,l),rn(0,c,l,null,null,!1,!1),c})}(e,n.adData,n.adIncidentRecorder,o,n);(0,Yh.isSome)(l)&&(n.parsedCardCount++,xo(n,qh.Standard,0),ju(n.locationTracker)),t.push(l)}function jo(e,t){const n=Ot(0,t.data)
if(t.isFirstItemInModule||n.suppressHeaderBadge)return null
let r
const o=Mt(t.data)
if(J(o)&&(r=W(o,kk)),(0,Yh.isSome)(r))return r
switch(t.data.type){case M$:r=W(t.data,kk)
break
case hN:r=W(t.data,[qN,w_])}return r}function Ho(e,t,n=!1){const r=Ot(0,t.data)
if((t.isFirstItemInModule||r.suppressHeaderName)&&!n)return null
let o
const s=Mt(t.data)
if(J(s)&&(o=W(s,Ck)),(0,Yh.isSome)(o))return o
switch(t.data.type){case M$:o=W(t.data,Ck)
break
case hN:o=W(t.data,[qN,z$])}return o}function Wo(e,t){const n=Ot(0,t.data)
if(t.isFirstItemInModule||n.suppressHeaderTagline)return null
let r
const o=Mt(t.data)
if(J(o)&&(r=W(o,Ek)),(0,Yh.isSome)(r))return r
switch(t.data.type){case M$:r=W(t.data,Ek)
break
case hN:r=W(t.data,[qN,lN])}return r}function qo(e,t,n){var r
const o=Ot(0,t.data),s=oe(t.data,wR),i=null!==(r=o.headerArtworkBehavior)&&void 0!==r?r:hw.NoArtwork
switch(n){case gw.Eyebrow:return i===hw.CategoryArtworkWithBadge?Yo(e,s):null
case gw.Title:switch(i){case hw.CategoryArtworkWithTitle:return Yo(e,s)
case hw.ContentArtworkWithTitle:return _l(e,s,{useCase:1})
default:return null}default:return null}}function zo(e,t,n){const r=oe(t.data,wR),o=W(t.data,[Px,"headerArtworkBehavior"])
switch(n){case gw.Eyebrow:return o===hw.CategoryArtworkWithBadge&&(0,Yh.isSome)(Yo(e,r))?zh.Category:null
case gw.Title:switch(o){case hw.CategoryArtworkWithTitle:return(0,Yh.isSome)(Yo(e,r))?zh.Category:null
case hw.ContentArtworkWithTitle:return(0,Yh.isSome)(Yo(e,r))?zh.Icon:null
default:return null}default:return null}}function Yo(e,t){const n=xr(e,t,!1,!1,!1)
return(0,Yh.isNothing)(n)?null:El(e,n,{useCase:20,allowingTransparency:!0,cropCode:"sr"})}function Jo(e,t){const n=j(t.data,BT,null),r=null==n?void 0:n.type
if((0,Yh.isNothing)(r))return null
let o=null
switch(r){case mw.LinearGradient:if(!e.props.enabled("todayEditorialGradients"))break
const t=h(n).stops.map(e=>N(e.color)),r={type:"gradient",colors:t,start:Wh.Top,end:Wh.Bottom},s=B(t[0]),i={type:mM,red:60/255,green:60/255,blue:67/255,alpha:.6},a={type:mM,red:235/255,green:235/255,blue:245/255,alpha:.6}
o={shelfBackground:r,eyebrowColor:s?a:i,titleColor:U(s?h$:oS),subtitleColor:s?a:i}
break
default:o=null}return o}function Zo(e){var t,n
return(0,Yh.isNothing)(e)?{}:null!==(n=xu(null!==(t=p(e.moduleMetadata,nC))&&void 0!==t?t:{},e.moduleMetadata.onDevicePersonalizationProcessingType,null))&&void 0!==n?n:{}}function Ko(e,t,n,r,o){return Uh.context("createTodayBaseCard",()=>{var s,i
const a=new UH,c=is(t,n.coercedCollectionTodayCardDisplayStyle),l=Qo(e,t,c,n)
a.heading=l
const u=function(e,t,n){var r
let o=null
return n.useOTDTextStyle&&(o=null!==(r=W(t,"ofTheDayLabel"))&&void 0!==r?r:W(t,ZF),e.props.enabled(hS)&&(0,Gh.isSome)(o)&&(o=o.replace(/\n/g,HI))),(0,Gh.isNothing)(o)&&(o=fu(e,t,z$,!0)),(0,Gh.isNothing)(o)&&(o=W(Xo(0,t),z$)),o}(e,t,n)
a.title=u
const f=Pe(e,t,[TL,z$])
a.shortTitle=f
const p=function(e,t){return El(e,j(t,Rm),{contentMode:Vh.scaleAspectFit,allowingTransparency:!0,useCase:17})}(e,t)
a.titleArtwork=p
const h=function(e,t){var n
const r=Ot(0,t)
if(z(t,YS)||r.suppressNoteShort)return null
let o=fu(e,t,AN,!0)
if((0,Gh.isNothing)(o)&&!r.suppressNoteTagline){const r=Xo(0,t)
o=null!==(n=fu(e,r,lN))&&void 0!==n?n:nl(e,r)}return o}(e,t)
a.inlineDescription=h
const g=an(e,t,u,{targetType:SN,pageInformation:r.pageInformation,locationTracker:r.locationTracker,isAdEligible:null!==(s=null==n?void 0:n.isAdEligible)&&void 0!==s&&s,optimizationId:d(t,Pk),optimizationEntityId:d(t,Ik),rowIndex:n.currentRowIndex,displayStyle:n.metricsDisplayStyle})
g.adSlotOverride=r.parsedCardCount
const m=(null===(i=r.currentTodayItem)||void 0===i?void 0:i.type)===Pw.EditorialItem?Zo(r.currentTodayItem):{}
return a.clickAction=function(e,t,n,r,o,s,i){const a=s,c={cardType:n,franchise:W(t,ZF)},l=Er(0,t)
return l&&(c[hv]=l),a[MM]=c,(0,Gh.isSome)(i)&&i(a),Tl(e,t,a,null==r?void 0:r.clientIdentifierOverride,Zo(o.currentTodayItem),r)}(e,t,c,n,r,{...g,recoMetricsData:m},o),rn(0,a,g,l,c,Er(0,t)),a.editorialDisplayOptions=function(e,t,n){const r=Ot(0,t),o=e.client.isPad&&n.isHeroCard
return{suppressTagline:q(t,YS),suppressLockup:w(r.suppressLockup),showBadgeInSmallCards:w(r.showBadgeInSmallCards),useMaterialBlur:o||w(r.useMaterialBlur)}}(e,t,n),a})}function Qo(e,t,n,o){var s,i
let a=null
if(null==o?void 0:o.useOTDTextStyle)a=o.isHorizontalShelfContext?W(t,ZF):null
else if(function(e,t){let n=W(e,"ofTheDayIntent")
if((0,Yh.isNothing)(n))switch(is(e,null==t?void 0:t.coercedCollectionTodayCardDisplayStyle)){case fw.AppOfTheDay:n=ww.AppOfTheDay
break
case fw.GameOfTheDay:n=ww.GameOfTheDay}return n===ww.AppOfTheDay||n===ww.GameOfTheDay}(t,o))a=null!==(s=W(t,ck))&&void 0!==s?s:W(t,ZF),r(a)&&n===fw.AppOfTheDay?a="FEATURED APP":r(a)&&n===fw.GameOfTheDay&&(a="FEATURED GAME")
else if(n===fw.AppEventCard){const n=Xo(0,t)
a=null!==(i=pu(e,t,w_,!0))&&void 0!==i?i:W(n,PN)}else a=W(t,ZF)
return a}function Xo(e,t){const n=se(t,PF)
if(1===n.length)return n[0]
const r=cs(0,t)
return 1===r.length?r[0]:null}function es(e,t,n,r,o){return Uh.context("addArtworkMediaToBaseCard",()=>{if(z(t,NT))return!1
const s=Xt(e,t,r)
return!(0,Gh.isNothing)(s)&&((0,Gh.isSome)(o)&&kr(e,null==s?void 0:s.videos[0],{pageInformation:o.pageInformation,locationTracker:o.locationTracker,id:t.id}),n.media=new TH(s.artworks,s.videos,s.cardArtLayouts,s.artworkLayoutsWithMetrics,fs(0,t,r)),n.style=ps(s.joeColors,yx),n.clickAction instanceof sU&&(n.overlay=new FH(n.clickAction),n.style=h$),!0)})}function ts(e,t,n,r,o){return Uh.context("createTodaySingleAppCard",()=>{const i=Ko(e,t,n,r)
os(e,t,n,r)
const a=es(e,t,i,n,r),c=cs(0,t)
if(a){const o=Sr(0,0,0,0,as(e,c,n,r.pageInformation,r.locationTracker,SN,null,rt(0,t)))
s(o)&&o instanceof NH&&(o.style=h$),i.overlay=o}else if(1===c.length&&!ns(e,t,i,c,n,r))return ss(r),null
return br(e,i,n,is(t,n.coercedCollectionTodayCardDisplayStyle),t,o,r),ss(r),i})}function ns(e,t,n,r,o,i){if(1!==r.length)return!1
o.useJoeColorIconPlaceholder=!0,n.style=R$
const a=ws(0,n.style),c=as(e,r,o,i.pageInformation,i.locationTracker,gs(n.style),a,rt(0,t))
if(1!==c.length)return!1
const l=c[0]
n.media=new PH(l.icon)
const u=Sr(0,0,0,0,c)
return s(u)&&u instanceof LH&&(u.displaysIcon=!1),n.overlay=u,!0}function rs(e,t,n,a,c){return Uh.catchingContext("todayCardFromData",()=>{const u=is(t,n.coercedCollectionTodayCardDisplayStyle),d=xt(0,t)
!function(e,t,n,r){const o=cs(0,t),s=is(t,r.coercedCollectionTodayCardDisplayStyle)
if(!new Set([fw.AppEventCard,fw.Grid,fw.InAppPurchase,fw.List,fw.NumberedList,fw.River,fw.ShortImage,fw.SingleApp]).has(s))return!1
if(o.length>=6&&s===fw.Grid)return!1
const i=us(0,s)
return!(!z(t,NT)&&ds(e,j(t,i),r.prevailingCropCode)||function(e,t){if(1===t.length){const e=t[0]
if(e.type===QF)return e}return null}(0,o))}(e,t,0,n)?n.clientIdentifierOverride=null:n.clientIdentifierOverride=d,n.crossLinkSubtitle=ys(e,t)
let f=null
switch(u){case fw.AppOfTheDay:case fw.GameOfTheDay:f=function(e,t,n,r,s){return Uh.context("createTodayBrandedCard",()=>{const i=Ko(e,t,n,r)
os(e,t,n,r)
const a=Xt(e,t,n)
if(!((0,Gh.isSome)(a)&&(0,Gh.isSome)(a.joeColors.bgColor)&&(a.artworks.length>0||a.videos.length>0)))return ss(r),ts(e,t,n,r)
i.style=ps(null==a?void 0:a.joeColors,yx)
const c=ws(0,i.style),l=cs(0,t),u=as(e,l,n,r.pageInformation,r.locationTracker,gs(i.style),c,rt(0,t),!0)
if(o(u)||1!==u.length)return ss(r),null
const d=u[0]
return n.isHorizontalShelfContext||(i.overlay=Sr(0,0,0,0,u)),i.media=new IH(d.icon,a.artworks,a.videos,a.cardArtLayouts,a.artworkLayoutsWithMetrics,fs(0,t,n)),i.media.impressionMetrics=d.impressionMetrics,br(e,i,n,is(t,n.coercedCollectionTodayCardDisplayStyle),t,s,r),ss(r),i})}(e,t,n,a,c)
break
case fw.Video:f=function(e,t,n,o,i){return Uh.context("createTodayVideoCard",()=>{const a=Ko(e,t,n,o)
es(e,t,a,n,o),os(e,t,n,o)
const c=ws(0,a.style),l=cs(0,t),u=as(e,l,n,o.pageInformation,o.locationTracker,SN,c,rt(0,t))
if(r(a.overlay)){const e=Sr(0,0,0,0,u)
s(e)&&e instanceof NH&&(e.style=h$),a.overlay=e}return br(e,a,n,is(t,n.coercedCollectionTodayCardDisplayStyle),t,i,o),ss(o),a})}(e,t,n,a,c)
break
case fw.FullBleedImage:f=function(e,t,n,r,o){return Uh.context("createTodayFullBleedImageCard",()=>{const s=Ko(e,t,n,r)
return os(e,t,n,r),es(e,t,s,n,r)?(br(e,s,n,is(t,n.coercedCollectionTodayCardDisplayStyle),t,o,r),ss(r),s):(ss(r),null)})}(e,t,n,a,c)
break
case fw.InAppPurchase:f=function(e,t,n,r,s){return Uh.context("createTodayInAppPurchaseCard",()=>{const i=Ko(e,t,n,r)
os(e,t,n,r)
const a=function(e,t){if(1===t.length){const e=t[0]
if(e.type===QF)return e}return null}(0,cs(0,t))
if(o(a))return ss(r),null
const c=cl(e,a,{offerStyle:cN,metricsOptions:{pageInformation:r.pageInformation,locationTracker:r.locationTracker},artworkUseCase:1})
return o(c)?(ss(r),null):(c.theme=kF,i.media=new CH(c),i.media.impressionMetrics=c.impressionMetrics,i.media.impressionMetrics.fields[Ib]=i.impressionMetrics.fields.id,i.style=h$,br(e,i,n,is(t,n.coercedCollectionTodayCardDisplayStyle),t,s,r),ss(r),i)})}(e,t,n,a,c)
break
case fw.AppEventCard:f=function(e,t,n,r,o){return Uh.context("createTodayAppEventCard",()=>{var s,i,a
if(!ar(e))return null
const c=function(e,t){let n
const r=se(t,PF)
if(r.length>0)n=r[0]
else{const e=se(t,bF)
if(0===e.length)return null
n=e[0]}return n}(0,t)
if((0,Gh.isNothing)(c))return null
const u=Ko(e,t,n,r,e=>{e.inAppEventId=c.id
const t=oe(c,C$);(0,Yh.isSome)(t)&&(e.relatedSubjectIds=[t.id])})
os(e,t,n,r)
const d=Xt(e,t,n)
if((0,Gh.isNothing)(d))return ss(r),null
const f=null!==(i=null===(s=d.joeColors)||void 0===s?void 0:s.textColor4)&&void 0!==i?i:gH,p=B(f),h=B(null!==(a=d.joeColors.bgColor)&&void 0!==a?a:gH)?R$:GF,w={pageInformation:r.pageInformation,locationTracker:r.locationTracker,targetType:bE};(0,Yh.isSome)(f)?u.style=ps(d.joeColors,gb):u.style=p?R$:GF
const g=ws(0,u.style),m=W(t,ZF),y=gr(e,c,null,!1,!1,gs(u.style),g,!0,!0,w,!0,!0,m,!1,l(n.allowUnpublishedAppEventPreviews))
if((0,Gh.isNothing)(y)||y instanceof Date)return Ar(y,r.refreshController),ss(r),null
const v=y
return u.media=new OH(v.formattedDates,v.startDate,f,d.artworks,d.videos,d.cardArtLayouts,d.artworkLayoutsWithMetrics,u.inlineDescription,h),(0,Yh.isSome)(v.lockup)&&(u.overlay=new LH(v.lockup)),br(e,u,n,is(t,n.coercedCollectionTodayCardDisplayStyle),t,o,r),ss(r),u})}(e,t,n,a,c)
break
case fw.List:case fw.NumberedList:f=function(e,t,n,r,o){return Uh.context("createTodayListCard",()=>{var s,i,a,c
const l=Ko(e,t,n,r)
os(e,t,n,r),n.useJoeColorIconPlaceholder=!0
const u=cs(0,t),d=as(e,u,n,r.pageInformation,r.locationTracker,void 0,void 0,void 0)
if(0===d.length)return ss(r),null
if(n.canDisplayArcadeOfferButton=!1,d.length<function(e){return"tv"===e.client.deviceType?3:4}(e)&&n.enableListCardToMultiAppFallback)ls(e,t,d,l)
else{if(is(t,n.coercedCollectionTodayCardDisplayStyle)===fw.NumberedList){let e=1
for(const t of d)t.ordinal=`${e}`,e++}const r=Xt(e,t,n),o=ps(null==r?void 0:r.joeColors,yx)===R$
null==r||r.videos.forEach(e=>{e.canPlayFullScreen=!1,e.playbackControls={prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1},e.autoPlayPlaybackControls={prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1}}),l.style=h$,l.media=new SH(d,null!==(s=null==r?void 0:r.artworks)&&void 0!==s?s:[],null!==(i=null==r?void 0:r.videos)&&void 0!==i?i:[],null!==(a=null==r?void 0:r.cardArtLayouts)&&void 0!==a?a:[],null!==(c=null==r?void 0:r.artworkLayoutsWithMetrics)&&void 0!==c?c:[],void 0,o)}return br(e,l,n,is(t,n.coercedCollectionTodayCardDisplayStyle),t,o,r),ss(r),l})}(e,t,n,a,c)
break
case fw.River:case fw.Grid:f=function(e,t,n,r,o){return Uh.context("createTodayRiverCard",()=>{const s=Ko(e,t,n,r)
n.useJoeColorIconPlaceholder=!0,os(e,t,n,r)
const i=function(e,t,n,r,o){const s=cs(0,t).filter(t=>{const n=cu(e,t)
return!iu(e,t)||!n})
return as(e,s,n,r.pageInformation,r.locationTracker,void 0,void 0,void 0,!1)}(e,t,n,r)
return 0===i.length?(ss(r),null):(n.canDisplayArcadeOfferButton=!1,i.length<function(e){return"tv"===e.client.deviceType?2:4}(e)?ls(e,t,i,s):(s.style=R$,function(e){for(const t of e)B(t.icon.backgroundColor,90)||(t.icon.backgroundColor=F(.8,.8,.8))}(i),s.media=new kH(i)),br(e,s,n,is(t,n.coercedCollectionTodayCardDisplayStyle),t,o,r),ss(r),s)})}(e,t,n,a,c)
break
case fw.SingleApp:f=ts(e,t,n,a,c)
break
case fw.ShortImage:f=function(e,t,n,r,o){return Uh.context("createTodayShortImageCard",()=>{const i=Ko(e,t,n,r)
os(e,t,n,r)
const a=es(e,t,i,n,r)
let c=!1
const l=cs(0,t)
if(a){const o=ws(0,i.style),a=Sr(0,0,0,0,as(e,l,n,r.pageInformation,r.locationTracker,gs(i.style),o,rt(0,t)))
s(a)&&a instanceof NH&&(a.style=h$),i.overlay=a}else 1===l.length&&(c=ns(e,t,i,l,n,r))
return a||c?(br(e,i,n,is(t,n.coercedCollectionTodayCardDisplayStyle),t,o,r),ss(r),i):(ss(r),null)})}(e,t,n,a,c)
break
default:f=null}return r(f)||(function(e,t,n,r){const o=is(r,n.coercedCollectionTodayCardDisplayStyle),i=ms(e,r,n.heroDisplayContext,o,n.prevailingCropCode)
let a=[],c=[]
s(i)&&(a=[i]),s(t.media)&&t.media instanceof EH&&(c=t.media.videos),new AH(a,c)}(e,f,n,t),function(e,t){(0,Yh.isNothing)(e.media)||(e.media.otdTextStyle=t.useOTDTextStyle)}(f,n),function(e,t){const n=t.media
if(!(n instanceof vH))return
const r=i(n.videos)
e.props.enabled("todayFlipAndBlurAllWidths")||e.props.enabled("todayFlipAndBlur")&&e.client.screenSize.width<405?t.supportsMediaMirroring=r:t.supportsMediaMirroring=!1}(e,f)),f},e=>null)}function os(e,t,n,r,s){Fu(e,{pageInformation:r.pageInformation,locationTracker:r.locationTracker,targetType:SN,idType:HN,id:t.id,optimizationId:d(t,Pk),optimizationEntityId:d(t,Ik),rowIndex:n.currentRowIndex,displayStyle:n.metricsDisplayStyle},i(s)?s:function(e,t,n){let r=fu(e,t,z$)
if(o(r))switch(n){case fw.AppOfTheDay:case fw.GameOfTheDay:r=W(t,ZF)}return r}(e,t,is(t,n.coercedCollectionTodayCardDisplayStyle)))}function ss(e){Bu(e.locationTracker)}function is(e,t){const n=W(e,ZD)
return uJ.has(n)&&(0,Yh.isSome)(t)?t:n}function as(e,t,n,r,s,a,c,l,u=!0){return o(t)?[]:ml(e,t.filter(e=>!i(e.attributes)||e.type!==QF),{lockupOptions:{metricsOptions:{pageInformation:r,locationTracker:s},offerEnvironment:a,offerStyle:c,clientIdentifierOverride:n.clientIdentifierOverride,externalDeepLinkUrl:l,crossLinkSubtitle:n.crossLinkSubtitle,artworkUseCase:1,canDisplayArcadeOfferButton:n.canDisplayArcadeOfferButton,useJoeColorIconPlaceholder:n.useJoeColorIconPlaceholder,skipDefaultClickAction:!u},filter:11134})}function cs(e,t){return se(t,bF)}function ls(e,t,n,r){const o=fu(e,t,AN)
if(r.media=new bH(n,o),r.style=R$,r.clickAction instanceof nU){const e=nj.from(r.clickAction.pageUrl)
e.param(gV,qF),r.clickAction.pageUrl=e.build()}}function us(e,t){switch(t){case fw.AppOfTheDay:case fw.GameOfTheDay:return fR
case fw.AppEventCard:return pR
case fw.Video:case fw.FullBleedImage:return TD
default:return hR}}function ds(e,t,n){if(o(t))return null
const r=El(e,t,{withJoeColorPlaceholder:!0,useCase:15})
return r.crop=n||"sr",r}function fs(e,t,n){const r=j(t,us(0,is(t,n.coercedCollectionTodayCardDisplayStyle)))
return s(r)?d(r,"bgGradientKind"):null}function ps(e,t=yx){if((0,Yh.isNothing)(e))return GF
if((0,Yh.isSome)(null==e?void 0:e.textGradient)&&2===e.textGradient.length)return B(e.textGradient[0])?h$:R$
const n=$(e[t])
return n<=.1?R$:n>=.84?h$:GF}function hs(e,t){return s(t.heading)?t.heading.replace(/\n/g," "):t.collapsedHeading}function ws(e,t){return SM}function gs(e){return e===h$?GF:SN}function ms(e,t,n,r,o){return ds(e,j(t,function(e,t,n){return t===WF?us(0,n):"editorialArtwork.crossoverCard"}(0,n,r)),function(e,t,n){return yw.Article,n}(0,0,o))}function ys(e,t){let n=pu(e,t,AN)
if(i(n)||(n=fu(e,t,z$)),!i(n)){const e=W(t,vF)
e!==fw.AppOfTheDay&&e!==fw.GameOfTheDay||(n=W(t,ZF))}return n}function vs(e,t,n){const r=W(t,n)
if(o(r))return null
const i=new nj(r)
let a=null
switch(e.host.clientIdentifier){case LB:a=MF
break
case _B:a=W$}a&&i.param(ZV,a)
const c=xe(_e(e,t))
return s(c)&&i.param(MG,c),i.toString()}function As(e,t,n){if(o(t))return null
const r=new jU(t)
return r.title=null!=n?n:e.loc.string("SHARE_SHEET_COPY_LINK"),r.artwork=nt(e,"systemimage://link"),new SU("com.apple.AppStore.copyLinkActivity",r)}function Ts(e,t){return Uh.context("shareSheetDataForProductFromProductData",()=>{if(r(t))return null
const n=vs(e,t,b$),o=W(t,z$),i=W(t,QN),a=t.id,c=e.client.storefrontIdentifier
if(!(n&&o&&i&&a))return null
const l=vs(e,t,"shortUrl")
let u=null,d=null
const f=$l(e,t,4),p=Fl(e,t),h=Pe(e,t,_N)||i
s(t)&&W(t,b$)&&(u=_l(e,t,{useCase:1}),d=function(e,t){return Uh.context("notesMetadataFromProductData",()=>{var n
if(r(t))return null
const o=W(t,z$)
if((0,Yh.isNothing)(o)||0===o.length)return null
const s=vs(e,t,b$),i=W(t,QN),a=W(t,"genreNames.0"),c=null===(n=Xl(e,t))||void 0===n?void 0:n.fileSizeByDevice
let l
switch(t.type){case q$:l=C$
break
case x$:l=mI
break
case QF:l=rM
break
default:l=null}return new lB(o,s,i,a,c,l)})}(e,t))
const w=new fB(a,c,o,"iOS",u,f,p,!1,h,null,null,d)
return new hB(w,n,l)})}function Ps(e,t,n,o){return Uh.context(`shareActionFromData: ${t.type}`,()=>{var i
const a=t.id
switch(e.client.deviceType){case H$:{const r=Ts(e,t)
if(r){const t=new bU(r,[])
return od(e,t,{targetType:j$,id:a,actionType:p_,pageInformation:n,locationTracker:o}),t}break}case U$:case _$:case v$:{const c=Ts(e,t),l=[]
if((null===(i=null==c?void 0:c.url)||void 0===i?void 0:i.length)>0){const t=As(e,c.url)
s&&l.push(t)}const u=function(e,t){if(!e.bag.isContentGiftingEnabled)return null
if(r(t))return null
const n=ft(e,t)
return r(n)||q(t,KF)?null:f(n,f_)>0?t.id:null}(e,t)
if(u){const t=new nU(tN)
t.presentationContext=CI,t.title=e.loc.string("SHARE_GIFT_APP"),t.artwork=nt(e,"systemimage://app.gift"),t.pageUrl=`gift/${u}`,od(e,t,{targetType:j$,id:a,actionType:d_,actionContext:Ig,pageInformation:n,locationTracker:o})
const r=new SU("com.apple.AppStore.giftActivity",t)
l.push(r)}if(c){const t=new bU(c,l,Qw)
return t.title=e.loc.string("SHARE_APP"),t.artwork=nt(e,Sg),od(e,t,{targetType:j$,id:a,actionType:p_,actionContext:Ig,pageInformation:n,locationTracker:o}),t}if(l.length>0){const t=l.map(e=>e.action),r=new PU(t)
return r.isCancelable=!0,r.isCustom=!0,od(e,r,{targetType:j$,id:a,actionType:"actionSheet",pageInformation:n,locationTracker:o}),r}break}}return null})}function Is(e,t,n,o,a,c,l,u){return Uh.context("flowPreviewActionsConfigurationForProductFromData",()=>{if(e.client.deviceType!==U$&&e.client.deviceType!==_$)return null
const d=Ss(e,t)
if(!i(d))return null
const f=[]
let p=null,h=null
const w=z(d,KF)
if(n){const t=du(e,d),n=Kc(0,d.type,t),i=function(e,t,n,o,s,i,a){return r(t)||t.type!==q$?null:ht(e,ft(e,t),t,n,!1,_u(e,t,_l(e,t,null,i),i),a,xN)}(e,d,w,0,0,o,l)
h=bt(e,i,n,d,w,0,null,null,null,null,xN)
const a=function(e,t,n,o,s,i,a,c){if(r(n))return null
let l=vt(e,n,t,o,i,xN,!1,s)
return(null==c?void 0:c.length)>0&&(l=ot(e,l,n.adamId,null,c,!1,i)),l}(e,d,i,w,o,l,0,u)
s(a)&&s(h)&&(p=f.length,f.push(a))}const g=function(e,t,n){const r=Ps(e,t,n.pageInformation,n.locationTracker)
return s(r)?(r.title=e.loc.string("FLOW_PREVIEW_ACTION_SHARE"),r.artwork=nt(e,Sg),r):r}(e,d,c)
s(g)&&f.push(g)
const m=Rs(e,d)
if(!w&&!m){if(s(a)&&a instanceof nU&&(a.pageData instanceof AW||a.pageData instanceof BW)){const t=function(e,t,n){const r=function(e,t,n){return Uh.context("seeRatingsAndReviewsActionFromData",()=>{const t=v(n)
if(n.pageData instanceof AW||n.pageData instanceof BW){let r
r=new BU(xF)
const o=Nc(e)?r:new kU(new yW(Y$,E$)),s=v(n.pageData)
s.fullProductFetchedAction=o,t.pageData=s}return t})}(e,t.id,n)
return s(r)&&(r.title=e.loc.string("FLOW_PREVIEW_ACTION_SEE_RATINGS_AND_REVIEWS"),r.artwork=nt(e,"systemimage://star"),r.animationBehavior=wF),r}(e,d,a)
s(t)&&f.push(t)}if(!me(e,t,cM)){const t=function(e,t){const n=Vs(e,t)
return s(n)&&(n.title=e.loc.string("FLOW_PREVIEW_ACTION_WRITE_REVIEW"),n.artwork=nt(e,Lm)),n}(e,d)
s(t)&&f.push(t)}}return new yB(f,h,p)})}function Ss(e,t){return Uh.context(`productDataFromData: ${t.type}`,()=>{switch(t.type){case q$:case x$:return t
case M$:{const n=se(t,bF)
if(i(n)&&1===n.length){const t=n[0]
return Ss(e,t)}break}case XE:{const n=se(t,V$)
if(i(n)&&1===n.length){const t=n[0]
return Ss(e,t)}break}default:return null}return null})}function bs(e,t,n,r){const o=e.bag.voteUrl,s=d(t,"id",BF),i=new nj(o).param(xm,s),a=new wU(i.build()),c=new IU(h_)
return r?(a.title=e.loc.string("ACTION_REVIEW_HELPFUL"),c.title=e.loc.string("TOAST_HELPFUL_TITLE"),c.message=e.loc.string("TOAST_HELPFUL_DESCRIPTION"),a.artwork=nt(e,Mm),c.artwork=nt(e,Mm)):(a.title=e.loc.string("ACTION_REVIEW_NOT_HELPFUL"),c.title=e.loc.string("TOAST_NOT_HELPFUL_TITLE"),c.message=e.loc.string("TOAST_NOT_HELPFUL_DESCRIPTION"),a.artwork=nt(e,Nm),c.artwork=nt(e,Nm)),a.method=EM,a.isStoreRequest=!0,a.disableCache=!0,a.headers={"Content-Type":UW.contentType},a.body=(new UW).param("vote",r?"1":"0").param(Fm,n).build(),a.successAction=c,a}function Cs(e,t,n){return Uh.context("reportConcernActionFromApiRow",()=>{const r=d(t,"id",BF),s=e.bag.reportConcernUrl,i=new mU(s)
i.method=EM,i.isStoreRequest=!0,i.disableCache=!0,i.needsAuthentication=!0,i.headers={"Content-Type":UW.contentType},i.body=(new UW).param(xm,r).param(Fm,n).build()
const a=new gU("selectedReason",$m,GS),c=new gU("explanation",$m,tF)
i.parameters=[a,c]
const l=new IU(h_)
l.title=e.loc.string("TOAST_CONCERN_REPORTED_TITLE"),l.message=e.loc.string("TOAST_CONCERN_REPORTED_DESCRIPTION"),l.artwork=nt(e,Bm),i.successAction=l
let u=e.bag.reportConcernReasons
o(u)&&(u=[{reasonId:"1",name:"It contains offensive material",upperCaseName:"IT CONTAINS OFFENSIVE MATERIAL"},{reasonId:"8",name:"It's off-topic",upperCaseName:"IT\u2019S OFF-TOPIC"},{reasonId:"111003",name:"It looks like spam",upperCaseName:"IT LOOKS LIKE SPAM"},{reasonId:"7",name:"Something else",upperCaseName:"SOMETHING ELSE"}])
const f=u.map(e=>new wB(d(e,"reasonId"),d(e,z$),d(e,"upperCaseName"))),p=new CU(f)
return p.title=e.loc.string("ACTION_REVIEW_REPORT"),p.explanation=e.bag.reportConcernExplanation,o(p.explanation)&&(p.explanation="Tell us a little more (Optional)"),p.artwork=nt(e,Bm),p.sendAction=i,p})}function ks(e,t,n,r,o,s){return Uh.context(UA,()=>s?null:Us(e,t.id,o,n,null))}function Es(e,t){const n=d(t,CC)
if(n){const t=new sU(n,!1)
return t.title=e.loc.string(IA),t.artwork=nt(e,"systemimage://questionmark.circle"),t}return null}function Os(e,t,n){return`${YU}:/${fG}/${QU}/${t}/${n}`}function Rs(e,t){return!(!s(t)||Ds(e,t)||!z(t,nM)&&!z(t,"reviewsRestricted"))}function Ds(e,t){return!(o(t)||!e.bag.enableSystemAppReviews)&&Je(e).isSystemAppFromData(t)}function _s(e,t){const n=nj.from(e),r=d(n.query,AA)
return t&&(null==r?void 0:r.length)>0&&(n.query[AA]=pJ[r]||r),n}function Ls(e,t,n,r=!1,o){return Uh.context("createProductReviewsList",()=>{const a=[]
if(i(o)&&a.push(o),s(n)&&n.length>0){const o=!1,s=!o,i=o?n.slice(0,1):n,c=!1,l=xs(e,e.client.guid,t,i,r&&s,c&&s,s)
for(const e of l){const t=new FW
t.sourceType=yA,t.review=e,a.push(t)}}return a})}function xs(e,t,n,r,s=!1,i=!1,a=!0){return Uh.context("createReviewItems",()=>{const c=function(t,n){return n?1e3*((new Date).getTime()-t.getTime())<3600?e.loc.string("TimeAgo.Edited.JustNow"):e.loc.string("TimeAgo.Edited.Time").replace("{time}",e.loc.timeAgoWithContext(t,"standalone")):e.loc.timeAgoWithContext(t,"standalone")}
return r.map(r=>{var l
const u=new CW
u.id=d(r,"id",BF),u.title=W(r,WM)
const f=W(r,fb)
f&&(u.date=new Date(f),u.dateText=c(u.date,z(r,"isEdited"))),u.contents=W(r,"review"),u.rating=Y(r,ZM),u.reviewerName=W(r,"userName")
let p=null
const h=W(r,"developerResponse.id")
if((null==h?void 0:h.length)>0){const e=new kW
e.id=h,e.contents=W(r,"developerResponse.body")
const t=W(r,"developerResponse.modified")
t&&(e.date=new Date(t),e.dateText=c(e.date,!1)),u.response=e,p=u.response.contents}if(a&&(d(n,eF),u.flowPreviewActionsConfiguration=function(e,t,n,r,s){var i
if(o(t)||e.client.deviceType!==U$&&e.client.deviceType!==_$&&e.client.deviceType!==H$)return null
const a=[bs(e,t,n,!0),bs(e,t,n,!1)]
return(null===(i=e.bag.reportConcernUrl)||void 0===i?void 0:i.length)>0&&a.push(Cs(e,t,n)),(null==s?void 0:s.length)>0&&a.push(function(e,t){const n=new jU(t)
return n.title=e.loc.string("ACTION_REVIEW_COPY"),n.artwork=nt(e,"systemimage://doc.on.doc"),n}(e,s)),new yB(a)}(e,r,t,0,p)),i){const n=[bs(e,r,t,!0),bs(e,r,t,!1)];(null===(l=e.bag.reportConcernUrl)||void 0===l?void 0:l.length)>0&&n.push(Cs(e,r,t)),u.voteActions=n}return s&&(u.moreAction=function(e,t,n,r){return r?Uh.context("singleReviewActionFromReviewData",()=>{const o=js(e,t,n,[r]),s=new SW
s.adamId=d(n,eF),s.targetReviewId=d(r,"id",BF),s.shelves=[o]
const i=new nU(E$)
return i.pageData=s,i.title=Ks(e),i}):null}(e,t,n,r)),u})})}function Ms(e,t,n){return n?Uh.context("ratingsFromApiResponses",()=>{const t=new bW
t.productId=d(n,eF,BF),t.ratingAverage=f(n,"ratingAverage"),t.totalNumberOfRatings=f(n,PA),t.totalNumberOfReviews=f(n,"totalNumberOfReviews")
const r=c(n,"ratingCountList").slice().reverse(),o=r.reduce((e,t)=>e+t,0)
if(t.ratingCounts=o>0?r.map(e=>e/o*t.totalNumberOfRatings):r,!(t.ratingAverage>0&&t.ratingCounts)){const r=l(n,IC)
t.status=r?e.loc.string("RATINGS_STATUS_DEVELOPER_RESET"):e.loc.string("RATINGS_STATUS_NOT_ENOUGH_RATINGS")}return t}):null}function Ns(e){if(!e)return null
const t=new xW
return Bs(e,t),t}function Fs(e){if(!e)return null
const t=new MW
return Bs(e,t),t}function $s(e){if(!e)return null
const t=new NW
return Bs(e,t),t}function Bs(e,t){t.ratingAverage=e.ratingAverage,t.ratingCounts=e.ratingCounts,t.totalNumberOfRatings=e.totalNumberOfRatings,t.totalNumberOfReviews=e.totalNumberOfReviews,t.status=e.status,t.reviews=e.reviews,t.actions=e.actions,t.nextPage=e.nextPage}function Us(e,t,n,r=null,o=null){const s=new EW
switch(e.client.deviceType){case"tv":s.title=e.loc.string("TV_SELECT_TO_RATE")
break
case H$:s.title=e.loc.string("CLICK_TO_RATE")
break
default:s.title=e.loc.string("TAP_TO_RATE")}return s.rating=o,s.rateAction=function(e,t,n,r=null){const o=new IU(h_)
o.title=e.loc.string("TOAST_TAP_TO_RATE_TITLE"),o.message=e.loc.string("TOAST_TAP_TO_RATE_DESCRIPTION"),o.artwork=nt(e,"resource://ToastStar.png",95,90)
const s=new yU(function(e,t,n){return _s(e.bag.userRateURL,n).param("id",t).build()}(e,t,n))
s.adamId=t,s.method=EM,s.isStoreRequest=!0,s.disableCache=!0,s.successAction=o
const i=new gU(ZM,TA,GS),a=new gU("version-to-review",TA,GS)
return s.parameters=[i,a],s}(e,t,n,r),s}function Gs(e,t,n,r,o=!1){return Uh.context("createWriteReviewAction",()=>{const s=o?e.loc.string("EDIT_REVIEW"):e.loc.string("WRITE_A_REVIEW"),i=function(e,t,n){return _s(e.bag.writeReviewURL,n).param("id",t).build()}(e,t,n)
let a
switch(e.client.deviceType){case H$:{const e=new vU(t,i)
e.title=s,e.appIcon=r,a=e
break}default:{const n=new nU("writeReview")
n.title=s,n.pageUrl=i,n.pageData=t,n.presentationContext=CI,n.artwork=nt(e,Lm),a=n
break}}return a})}function Vs(e,t,n){return Uh.context("writeReviewActionFromData",()=>{const r=t.id
if((null==r?void 0:r.length)>0){const o=t.type===x$,i=Y(t,ZM),a=s(i)&&i>0
return Gs(e,r,o,n,a)}return null})}function js(e,t,n,r,o=!1,s=!1,i=!0){return Uh.context("reviewsShelfForReviewsData",()=>{if(e.featureFlags.isEnabled(SC)){const t=new rH(OR)
return t.items=Ls(e,n,r,o),t}{const a=new rH(E$)
return a.items=xs(e,t,n,r,o,s,i),a}})}function Hs(e,t,n,o,i,a,c,u,f=!1,p=!0,h=null,w=!1){return Uh.context("reviewsContainerShelfForReviewsData",()=>{const p=function(e,t,n,o,i,a,c,u=null,f=!1){return Uh.context("reviewsContainerForReviewsData",()=>{const p=new DW,h=d(n,eF),w=l(n,"isBundle")
if(p.adamId=h,p.ratings=Ms(e,0,n),f||(p.tapToRate=Us(e,h,w,i,u)),s(o)&&o.length>0){const r=!1,s=!r,i=r?o.slice(0,1):o
p.reviews=xs(e,t,n,i,s,!1,s)}if(r(p.reviews)||0===p.reviews.length){const t=p.ratings.ratingAverage>0&&p.ratings.ratingCounts,r=l(n,IC)
t||r||(p.ratings.status=e.loc.string(bC))}if(r(c)||(p.editorsChoice=c),!f){const t=s(u)&&u>0
p.writeReviewAction=Gs(e,h,w,a,t)}const g=d(n,CC)
if(g){const t=new sU(g,!1)
t.title=e.loc.string(IA),p.supportAction=t}let m=!1
for(const t of o)if(Ds(e,t)){m=!0
break}return p.alwaysAllowReviews=m,p})}(e,t,n,o,i,a,c,h,w),g=new rH(vA)
return g.title=Ks(e),g.items=[p],f&&s(p.reviews)&&p.reviews.length>0&&(g.seeAllAction=Zs(e,t,n,o,u,i,a,!1,!1)),g})}function Ws(e,t,n,r){return Uh.context("personalizedReviewsContainerShelf",()=>{const o=Y(D(r),ZM)
return Hs(e,t,n.ratingsData,n.reviewItems,n.appName,n.appIcon,n.editorsChoice,n.nextPageHref,n.includeSeeAllAction,!1,o)})}function qs(e,t,n,r,o,s=null){const a=function(e,t,n,r=null){let o=`${YU}:/${fG}/${t}/${n}`
return i(r)&&(o=`${o}/?${bV}=${encodeURIComponent(JSON.stringify(r))}`),o}(0,t,n,s)
return new IW(n,r,o,a)}function zs(e,t,n,o,s,i=null,a=null,c=null,l=null,u,f=!1,p=!1,h="helpful",w=null){const g=new SW
return g.shelves=[],Uh.context("reviewsPageForReviewsData",()=>{const m=r(a)?d(n,eF):a
if(s&&!r(n)&&!e.featureFlags.isEnabled(SC)){const r=Hs(e,t,n,[],c,l)
g.shelves.push(r)}const y=Ys(e,t,m,n,o,i,f,p,h,w)
return y.reviewsShelf.presentationHints={...y.reviewsShelf.presentationHints,isSortable:s&&y.reviewsShelf.presentationHints.isSortable},g.adamId=m,g.shelves.push(y.reviewsShelf),g.nextPage=y.paginationToken,g.initialSortOptionIdentifier=y.initialSortId,g.sortActionSheetTitle=y.sortActionSheetTitle,g.sortOptions=y.sorts,g.alwaysAllowReviews=Ds(e,u),g})}function Ys(e,t,n,r,s,a=null,c=!1,l=!1,u="helpful",d=null){const f=(null==a?void 0:a.length)>0&&i(s)&&s.length%2>0,p=f?s.slice(0,s.length-1):s,h=f?s.slice(s.length-1):[],w=js(e,t,r,p,c,l,!0)
var g
w.id=o(g=u)?hJ:`ReviewsPage.ShelfId.${g}`
const m={reviewsShelf:w}
return w.presentationHints={isSortable:s.length>0||(null==a?void 0:a.length)>0},m.initialSortId=u,m.sortActionSheetTitle=e.loc.string("REVIEWS_SORT_BY"),m.sorts=[qs(0,n,PC,e.loc.string("REVIEWS_MOST_HELPFUL"),e.loc.string("REVIEWS_SORT_BY_MOST_HELPFUL"),d),qs(0,n,"favorable",e.loc.string("REVIEWS_MOST_FAVORABLE"),e.loc.string("REVIEWS_SORT_BY_MOST_FAVORABLE"),d),qs(0,n,"critical",e.loc.string("REVIEWS_MOST_CRITICAL"),e.loc.string("REVIEWS_SORT_BY_MOST_CRITICAL"),d),qs(0,n,SA,e.loc.string("REVIEWS_MOST_RECENT"),e.loc.string("REVIEWS_SORT_BY_MOST_RECENT"),d)],(null==a?void 0:a.length)>0&&(m.paginationToken=function(e,t,n,r,o){return{url:Os(0,t,r),remainingContent:o,nextHref:n,profile:r$,maxPerPage:20,highestOrdinal:0,metricsPageInformation:null,metricsLocationTracker:null}}(0,n,a,u,h)),m}function Js(e,t,n,r,o,s,a,c){return Uh.context("reviewsPageForReviewsMediaContainer",()=>{let l
return l=i(o.data)?r.concat(o.data):r,zs(e,t,null,l,s,o.next,n,null,null,null,!1,!1,a,c)})}function Zs(e,t,n,r,o=null,s=null,i=null,a,c,l){return n?Uh.context(bA,()=>{const u=zs(e,t,n,r,!0,o,null,s,i,l,a,c)
u.title=null
const d=new nU(E$)
return d.pageData=u,d.title=e.loc.string(XN),d}):null}function Ks(e){switch(e.client.deviceType){case"tv":return e.loc.string("TV_PRODUCT_SECTION_RATINGS")
case W$:return null
default:return e.loc.string("PRODUCT_SECTION_REVIEWS")}}function Qs(e,t){return t.map(t=>t.createProductPageSection(e))}function Xs(e,t,n,r,o,s,i){const a=function(e,t,n){switch(t){case ID:return n?Dh:Rh
case LA:return _h
case PM:return n?kh:Lw
case GM:return n?Oh:Eh
case $C:return n?xh:Lh
default:return Lw}}(0,n,r)
let c=[]
c=t?o&&a.purchasedOrderingCompact?a.purchasedOrderingCompact.slice():a.purchasedOrdering.slice():s&&a.downloadingOrdering?o&&a.downloadingOrderingCompact?a.downloadingOrderingCompact.slice():a.downloadingOrdering.slice():o&&a.notPurchasedOrderingCompact?a.notPurchasedOrderingCompact.slice():a.notPurchasedOrdering.slice()
const l=t?a.purchasedSpotlightIndex:a.notPurchasedSpotlightIndex
if(i&&i.spotlightSection){const e=function(e,t){for(let n=0;n<t.length;n++){const r=t[n]
if(e.sectionType===r.sectionType&&e.shelfId===r.shelfId&&JSON.stringify(e.shelfBasedMappedIds)===JSON.stringify(r.shelfBasedMappedIds))return n}return-1}(i.spotlightSection,c);-1!==e&&(c.splice(e,1),c.splice(l,0,i.spotlightSection))}return c}function ei(e){return new wJ(Y$,e?yN:mN)}function ti(e){var t
return(0,Yh.isSome)(e)&&(null===(t=e.id)||void 0===t?void 0:t.indexOf(iZ))>-1}function ni(e,t){var n
return r(t)?1:s(null===(n=t.video)||void 0===n?void 0:n.preview)&&t.video.preview.height>0?t.video.preview.width/t.video.preview.height:s(t.screenshot)&&t.screenshot.height>0?t.screenshot.width/t.screenshot.height:1}function ri(e,t,n,r){return Uh.context("createProductPageFromShelfBasedProductPage",()=>{var o,a,c,l
const u=new AW
return u.adamId=t.lockup.adamId,u.bundleId=t.lockup.bundleId,u.icon=t.lockup.icon,u.isEditorsChoice=t.lockup.isEditorsChoice,u.ordinal=t.lockup.ordinal,u.title=t.lockup.title,u.subtitle=t.lockup.subtitle,u.developerTagline=t.lockup.developerTagline,u.editorialTagline=t.lockup.editorialTagline,u.editorialDescription=t.lockup.editorialDescription,u.shortEditorialDescription=t.lockup.shortEditorialDescription,u.rating=t.lockup.rating,u.ratingCount=t.lockup.ratingCount,u.ageRating=t.lockup.ageRating,u.buttonAction=t.lockup.buttonAction,u.offerDisplayProperties=t.lockup.offerDisplayProperties,u.titleOfferDisplayProperties=t.titleOfferDisplayProperties,u.clickAction=t.lockup.clickAction,u.children=t.lockup.children,u.contextMenuData=t.lockup.contextMenuData,u.shelfBackground=t.lockup.shelfBackground,u.searchAd=t.lockup.searchAd,u.crossLinkTitle=t.lockup.crossLinkTitle,u.crossLinkSubtitle=t.lockup.crossLinkSubtitle,u.tertiaryTitle=t.lockup.tertiaryTitle,u.tertiaryTitleAction=t.lockup.tertiaryTitleAction,u.tertiaryTitleArtwork=t.lockup.tertiaryTitleArtwork,u.flowPreviewActionsConfiguration=t.lockup.flowPreviewActionsConfiguration,u.productDescription=t.lockup.productDescription,u.itemBackground=t.lockup.itemBackground,u.developerAction=t.developerAction,u.logoArtwork=t.logoArtwork,u.navigationBarIconArtwork=t.navigationBarIconArtwork,u.uberArtwork=null===(o=t.uber)||void 0===o?void 0:o.artwork,u.uberArtworkForCompactDisplay=null===(a=t.uber)||void 0===a?void 0:a.compactArtwork,u.uberVideo=null===(c=t.uber)||void 0===c?void 0:c.video,u.uberStyle=null===(l=t.uber)||void 0===l?void 0:l.style,u.media=function(e){const t=[]
for(const n of Object.values(e.shelfMapping))if(ti(n)){const e=n.contentsMetadata,r=n.items
t.push(new gj(r,e.platform,e.allPlatforms))}return t}(t),s(t.shelfMapping[VF])&&(u.badges=Bc(e,t.shelfMapping[VF])),u.shareAction=t.shareAction,u.pageMetrics=t.pageMetrics,u.pageRenderMetrics=t.pageRenderMetrics,u.isComplete=!t.isIncomplete,u.hasDarkUserInterfaceStyle=t.hasDarkUserInterfaceStyle,u.mediaSectionTitle=e.loc.string(mA),u.expandedOfferDetails=t.expandedOfferDetails,u.regularPriceFormatted=t.regularPriceFormatted,u.theme=t.theme,u.externalVersionIdentifier=t.externalVersionIdentifier,u.updateBuyParams=t.updateBuyParams,u.appPlatforms=t.appPlatforms,u.descriptionHeader=t.descriptionHeader,u.description=t.description,u.banner=t.banner,u.secondaryBanner=t.secondaryBanner,u.fullProductFetchedAction=t.fullProductFetchedAction,u.appEventDetailPageFlowAction=t.appEventDetailPageFlowAction,u.pageRefreshPolicy=t.pageRefreshPolicy,u.purchasedOrdering=Qs(e,Xs(0,!0,e.host.platform,n,!1,!1,r)),u.notPurchasedOrdering=Qs(e,Xs(0,!1,e.host.platform,n,!1,!1,r)),u.shelfMapping=function(e,t){const n={}
for(const r of PW){let o
o=r===E$?oi(e,t):t.shelfMapping[r],i(o)&&(n[r]=o)}return n}(e,t),u.alwaysAllowReviews=t.alwaysAllowReviews,u})}function oi(e,t){const n=t.shelfMapping[xF],r=t.shelfMapping[Gx],s=t.shelfMapping[$M],a=t.shelfMapping[Vx],c=t.shelfMapping[jx]
if(o(n)&&o(r)&&o(s)&&o(a)&&o(c))return null
let l=null,u=[],d=null,f=null,p=null,h=null,w=null
if(i(null==r?void 0:r.items))for(const e of r.items){const t=e
switch(t.sourceType){case Hx:l=t.review
break
case yA:u.push(t.review)}}else u=null
if(i(null==s?void 0:s.items)&&(l=s.items[0].review),i(null==a?void 0:a.items)&&(f=a.items[0].action),i(null==c?void 0:c.items)){const e=c.items[0].action
p=e.writeReviewAction,h=e.supportAction}i(null==n?void 0:n.items)&&(d=n.items[0],w=null==n?void 0:n.seeAllAction)
const g=new DW
g.adamId=t.lockup.adamId,g.ratings=d,g.tapToRate=f,g.editorsChoice=l,g.reviews=u,g.supportAction=h,g.writeReviewAction=p,g.alwaysAllowReviews=t.alwaysAllowReviews
const m=new rH(vA)
return m.title=Ks(e),m.items=[g],m.seeAllAction=w,m}function si(e,t,n,r,s){if(!ar(e))return null
if(o(t))return null
const i={pageInformation:n,locationTracker:r},a=wr(e,t,null,!1,!1,i,!0,!0,!1,s.allowUnpublishedAppEventPreviews)
Ar(a.nextAppEventPromotionStartDate,null==s?void 0:s.refreshController)
const c=a.appPromotions
if(0===c.length)return null
const l=ii(e,c,null)
return l.isHorizontal=!1,nn(0,l,{...i,id:"",kind:null,softwareType:null,targetType:l$,title:""}),l}function ii(e,t,n){const r=e.props.enabled(Bg)?VI:Kx,o=new rH(r)
return o.isHorizontal=!0,o.title=n,o.items=t,o}function ai(e,t,n,r){(0,Gh.isSome)(t)&&(0,Gh.isSome)(t.url)&&o(t.items)&&n.isFirstRender&&ci(e,t,n,r)}function ci(e,t,n,r){if(!function(e,t){switch(t){case g$:case SF:case CL:case LL:case fO:case Ay:case NL:case O_:case R_:case VI:case Kx:return!0
default:return!1}}(0,t.contentType)||n.isSearchLandingPage)return
const s=function(e,t,n){return t>0?t:(0,Gh.isSome)(n)&&!Gr(n)?0:e.client.isPad?15:6}(e,n.remainingItems.length,r),a=new Array(s)
for(let e=0;e<s;e+=1)a[e]=new Xj
if(o(a))return
const c=function(e,t){switch(t){case g$:return 3
case SF:return 2
case CL:return 1
case fO:return null
default:return 1}}(0,t.contentType);(0,Gh.isSome)(c)&&(t.rowsPerColumn=c),t.placeholderContentType=t.contentType,t.contentType=L_,t.items=a,i(n.isArcadePage)&&(t.presentationHints={...t.presentationHints,isAppleArcadeContext:n.isArcadePage}),t.isHidden=!1,n.showingPlaceholders=!0}function li(e){return e.contentType===L_}function ui(e){if(null===cZ){cZ=new Set
for(const t of e.bag.suppressedPrivacyAppIds)cZ.add(t)}}function di(e,t){return ui(e),!o(t)&&cZ.has(t)}function fi(e,t){return ui(e),!o(t)&&(!(!cZ.has("com.apple.InstallAssistant.*")||!t.startsWith("com.apple.InstallAssistant."))||cZ.has(t))}function pi(e,t){const n=t.host
if(r(n))return!1
const o=[e.bag.mediaHost,e.bag.mediaEdgeHost(e),e.bag.mediaEdgeSearchHost]
for(const e of o)if(!r(e)&&-1!==n.indexOf(e))return!0
return!1}function hi(e,t,n){return Ge(e,new hH(e,t).addingQueryValues(n)).toString()}function wi(e){let t=e.query.id
const n=e.pathname
if(r(t)&&(null==n?void 0:n.length)>0){const e=uZ.exec(n)
e&&e.length>1&&(t=e[1])}if(!a(t)){const n=e.pathComponents()
i(n)&&(t=n[n.length-1])}return t}function gi(e,t,n=!1){var r,o
let i=wi(t)
if(!a(i))throw new Error(`Unable to map ${t.build()} to a media api url`)
i in dZ&&(i=dZ[i])
let c=q$,l=lZ,u=[px,oD,E$,x$,NE,sD,FE]
const d=null===(r=t.pathname)||void 0===r?void 0:r.split("/"),f=(0,Gh.isSome)(d)&&d.includes(uG)
f&&(c=x$,l=[qM,OM,OF,pS,ux],u=[oD,q$,E$,sD]),e.bag.enablePrivacyNutritionLabels&&!di(e,i)&&l.push(T_),e.appleSilicon.isSupportEnabled&&l.push(NF)
const p=w(t.query[ZG]);(null===p||p)&&(l.push(gE,mE,o$),u.push(IF)),e.bag.enableSellerInfo&&l.push(P_),e.bag.enableSellerICPAnnotation&&l.push(wS)
const h=new hH(e).withIdOfType(i,c).includingAdditionalPlatforms(E(e)).includingRelationships(u).includingAttributes(l).addingRelationshipLimit(E$,O(e)).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes(De(e));(null===(o=t.query[MG])||void 0===o?void 0:o.length)>0&&h.addingQuery(MG,t.query[MG])
const g=t.query[zV]
return s(g)&&h.addingQuery(zV,g),ar(e)&&!f&&(cr(e)||h.includingScopedRelationships(q$,[O$]),h.includingScopedAttributes(O$,[P$,EN,TN]),h.includingScopedAvailableIn(O$,[gS])),cr(e)&&(h.includingScopedRelationships(f$,[wx,jM,LN]),h.includingViews([kE,$E]),h.includingScopedAttributes(f$,[z$,_N,mL]),h.includingMetaKeys(IL,[SL]),h.includingMetaKeys(iD,[g_]),h.includingAssociateKeys(f$,[I_])),dn(e,u$)&&h.enablingFeature(BE),n&&h.enablingFeature(mS),cr(e)||h.includingRelationships([UE]),h.attributingTo(t.build())}function mi(e){const t=[w$,o$,hF,OF]
return t.push(iF),e.appleSilicon.isSupportEnabled&&t.push(NF),t}function yi(e){let t=[]
switch(e.client.deviceType){case H$:t=t.concat(hZ),e.appleSilicon.isSupportEnabled&&t.push(lD)
break
case W$:t.push(wZ)
break
case v$:t=t.concat(pZ)
break
default:t=t.concat(fZ)}return t}function vi(e,t,n,r,o,s){const i=lZ
e.bag.enablePrivacyNutritionLabels&&!di(e,t)&&i.push(T_),e.appleSilicon.isSupportEnabled&&i.push(NF)
const a=new hH(e).withIdOfType(t,q$).includingAdditionalPlatforms(E(e)).includingAttributes(i).includingRelationships([IF,px,oD,E$,x$,NE,sD,FE]).addingRelationshipLimit(E$,O(e)).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes(De(e))
return n&&a.addingQuery("availability",mm),(0,Gh.isSome)(r)&&a.addingQuery(MG,r),s&&a.enablingFeature(mS),ar(e)&&!o&&(cr(e)||a.includingScopedRelationships(q$,[O$]),a.includingScopedAttributes(O$,[P$,EN,TN]),a.includingScopedAvailableIn(O$,[gS])),cr(e)&&(a.includingScopedRelationships(f$,[wx,jM,LN]),a.includingViews([kE,$E]),a.includingScopedAttributes(f$,[z$,_N,mL]),a.includingMetaKeys(IL,[SL]),a.includingMetaKeys(iD,[g_]),a.includingAssociateKeys(f$,[I_])),cr(e)||a.includingRelationships([UE]),dn(e,u$)&&a.enablingFeature(BE),a}function Ai(e,t,n){const r=i(n)?[...n]:[]
return r.push(`${eV}=${e}`),i(t)&&r.push(`${tV}=${t}`),{protocol:YU,path:`/${nG}/${QU}/{token}`,query:r}}function Ti(e,t){const n=[]
for(const r of e)n.push(Ai(r,null,t))
return n}function Pi(e,t){if(t<=0)return!1
if(t>=1)return!0
const n=e.user.dsid
if((0,Yh.isNothing)(n)||0===n.length)return!1
const r=100*t,o=n.slice(-2)
return parseInt(o)<r}function Ii(e,t){if(e.featureFlags.isEnabled("game_center_shelves_crossfire_referral_2023G")&&t instanceof nU){const e={app:"com.apple.gamecenter.from.browse",kind:{name:uN}}
return t.referrerData=e,new iU([new zU(e),t])}return t}function Si(e,t,n=!1){const r=Di(e,t),o=e.client.isPhone
let s=o?ly:uy
n&&(s="topShelf")
const a=p(r,s)
let c=null,l=null
return i(a)&&(c=El(e,a,{withJoeColorPlaceholder:!0,useCase:6}),i(c)&&(c.crop=o?"oa":n?"ta":"ob",l=c.backgroundColor)),{artwork:c,artworkData:a,backgroundColor:l}}function bi(e,t,n=!1){const r=function(e,t){switch(t.type){case M$:return j(t,o$)
case WN:return j(t,zI)
default:return fe(t,Ce(e,t),zI)}}(e,t),o=e.client.isPhone,s=o?"breakoutVideo9x16":"breakoutVideo16x9",a=p(r,o?"sizzleVideo9x16":"sizzleVideo16x9")||p(r,s)
let c=null,l=null,u=null
if(i(a)){u=p(a,EL)
const t=El(e,u,{withJoeColorPlaceholder:!0,useCase:6})
i(t)&&(t.crop="sr",l=t.backgroundColor)
const r=d(a,HF)
i(t)&&(null==r?void 0:r.length)>0&&(c=new kB(r,t,{canPlayFullScreen:!1,showPlaybackControls:!1,allowsAutoPlay:!0,looping:!0,playbackControls:{prominentPlay:n},autoPlayPlaybackControls:{}}))}return{video:c,artworkData:u,backgroundColor:l}}function Ci(e,t,n=!0,r,o){const s=bi(e,t),i=Si(e,t),a=s.backgroundColor||i.backgroundColor
return Ei(e,t,0,o),(t.type===WN?l(Ri(0,t),"displayMaterial"):z(t,rm))&&n?om:ki(0,a)}function ki(e,t){return t?B(t,50)?R$:GF:R$}function Ei(e,t,n,r){if(e.client.isPhone||r)return TF
const o=t.type===WN?d(Ri(0,t),"textPosition"):W(t,XI)
if((0,Yh.isNothing)(o)||0===o.length)return n$
switch(o.toLowerCase()){case eS:return n$
case TF:return TF
case tS:return c_
default:return n$}}function Oi(e,t,n,r=!1){switch(t){case n$:case c_:return n$
case TF:return r||n.type===WN?TF:function(e,t){var n
switch((null!==(n=W(t,XI))&&void 0!==n?n:"").toLowerCase()){case eS:return n$
case TF:return TF
case tS:return c_
default:return n$}}(0,n)
default:return n$}}function Ri(e,t){return t.type!==WN?null:j(t,"display.templateParameters")}function Di(e,t){switch(t.type){case M$:return j(t,w$)
case WN:return j(t,jg)
default:return fe(t,Ce(e,t),w$)}}function _i(e,t){return t.type===WN?d(pt(0,t),"callToActionLabel"):W(t,nS)}function Li(e,t){const n=i(j(t,m$)),r=z(t,AL)
return!n&&!r}function xi(e,t){const n=j(t,m$),o=i(n),s=z(t,AL),a=oe(t,PF)
if(!o&&!s&&!J(a))return null
let c=null
if(c=o?d(n,b$):W(s?t:a,b$),r(c))return null
let l=null
if(o&&d(n,_E)===rS)l=new sU(c)
else{const t=e.required(gQ).fetchFlowPage(c),n=new nU(t)
n.pageUrl=c,t===lF&&(n.pageData=$c(e,a)),l=n}return l.title=_i(0,t),l}function Mi(e,t,n=!1){if(o(t))return null
let r=null
const s=U(h$),i=U(oS),a=N(d(t,yx)),l=c(t,sm).map(e=>N(e)),u=ki(0,a)
if(2===l.length){r=new TB("horizontalGradient")
const e=l[0],t=l[1]
r.gradientStartColor=G(e,e),r.gradientEndColor=G(t,t),r.filter=im,n||(r.accessoryColor=r.gradientEndColor)}else r=new TB(nF),r.color=u===R$?s:i,n||(r.accessoryColor=r.color),r.isFallbackStyle=!0
return r}async function Ni(e,t,n,o,s){const i=n(e,t,s)
if(!i)return await Promise.resolve({originalData:t,additionalData:null})
const a=Array.from(i),c=[]
for(const t of a){const n=o(e,t)
if(r(n)){const e=a.indexOf(t)
a.splice(e,1)}else c.push(n)}return await Promise.all(c).then(e=>{const n=new Map
for(const[t,r]of a.entries()){const o=e[t]
n.set(r,o)}return{originalData:t,additionalData:n}})}function Fi(e,t,n,r=h$){if(o(t)||o(t.attributes))return null
const i=bi(e,t,!0),a=Si(e,t),c=i.backgroundColor||a.backgroundColor,l=Ei(e,t,0,!0),u=Ci(e,t,!1,0,!0)!==om&&!0,f=Ui(e,t,0,!1,u,RE)
let p=null
"tv"!==e.client.deviceType&&(p=f.description,f.description=null)
const h=function(e,t){const n=Ri(0,t),r=d(n,"ctaButtonBackgroundColor"),o=d(n,"ctaButtonTextColor")
return s(r)&&s(o)?{type:KI,fillColor:N(r),textColor:N(o)}:{type:sE,fillColor:null,textColor:null}}(0,t),w=new nB(F$,e.bag.arcadeAppAdamId,r,null,F$,h,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId),g=new LZ(f,w,{backgroundColor:c,wantsMaterialDetailBackground:!1,wantsBlur:u,badgeColor:null,titleColor:null,descriptionColor:null,callToActionColor:null,textAlignment:null,detailsPosition:l},null,p,a.artwork,i.video),m=an(e,t,g.details.title,{...n,targetType:iM})
return m.displaysArcadeUpsell=!0,nn(0,g,m),Fu(e,m,g.details.title),g.offerButtonAction=Gi(e,t,cL,n),Bu(n.locationTracker),g}function $i(e,t){return _i(0,t)}function Bi(e,t){return W(t,_N)}function Ui(e,t,n,r,o,s){let i=null
switch(s){case RE:i={type:RE}
break
case tF:const e=W(t,w_)
i=(null==e?void 0:e.length)>0?{type:tF,title:e}:{type:UF}
break
default:i={type:UF}}let a=Ci(e,t,r,0,!0)
const c=Ei(e,t,0,!0)
return o&&(a=R$),new Zj(function(e,t){return W(t,WM)}(0,t),Bi(0,t),i,null,a,Oi(0,c,t,!0))}function Gi(e,t,n,r){const o={marketingItemData:t},s=n===cL&&e.bag.arcadeDownloadPackPostSubscribeTrigger&&e.featureFlags.isEnabled(DE)&&Pi(e,e.bag.arcadeDownloadPackRolloutRate)
return Vi(e,o,$i(0,t),r,s)}function Vi(e,t,n,r,o){const i=t.marketingItemData
if(!s(i))return null
const a=pt(0,i),l=d(a,PN)===m$,u=d(a,b$)
if(l&&u){const t=function(e,t){const n=e.bag.dynamicUIRegexStrings
for(const e of n)if(new RegExp(e).test(t)){const e=new nU(GR,t)
return e.pageData=new JH,e}const r=e.bag.financeUIRegexStrings
for(const e of r)if(new RegExp(e).test(t))return new nU(tN,t)
const o=e.bag.webViewRegexStrings
for(const e of o)if(new RegExp(e).test(t))return new nU(VR,t)
return new sU(t,!1)}(e,u),o={id:e.bag.arcadeAppAdamId,actionType:tD,actionContext:FF,contextualAdamId:e.bag.arcadeAppAdamId,offerType:ZI,targetType:j$,mercuryMetricsData:Lu(0,i),...r}
return t.title=n,od(e,t,o),t}{const t=function(e,t,n,r){const o=pt(0,t),i=d(o,kM),a=d(o,VM)
if(!s(i)||!s(a))return null
const l=c(o,"serviceTypes").length>1&&e.bag.aristotleParentAppAdamId?e.bag.aristotleParentAppAdamId:e.bag.arcadeAppAdamId,u=new EU(i,l,{buyParams:a,productIdentifier:i,pageInformation:r.pageInformation}),f={id:l,actionType:tD,targetType:j$,subscriptionSKU:i,actionContext:FF,contextualAdamId:l,actionDetails:{buyParams:a},offerType:ZI,mercuryMetricsData:Lu(0,t),...r}
return u.title=n,od(e,u,f),u}(e,i,n,r)
if(o){const e=new nU(y_),r=lL
e.pageData=r,e.presentationContext=vN
const o=new LU(void 0,void 0,e,void 0),s=new iU([t,o])
return s.title=n,s}return t}}function ji(e,t){const n=new Set,r=D(t),o=se(r,rD)
for(const t of o){const o=Wi(e,t,r)
if(i(o))for(const e of o)n.add(e)}return n}function Hi(e,t){let n
return t===yk&&(n=pd(e,rE)),t===vk&&(n=fd(e,10)),r(n)?null:Mr(e,n).catch(()=>null)}function Wi(e,t,n){if(W(t,bT)!==Ak)return null
const o=W(t,CT),s=r(hd(e,n)),i=[]
return o===kT&&(i.push(vk),s&&i.push(yk)),i}function qi(e,t,n,a,c){return Uh.catchingContext(`module: ${a.module}`,()=>{let c
switch(a.module){case"Header":a.titleForNextShelf=W(t,tx),c=null
break
case"TextBlock":c=function(e,t,n){const r=W(t,tx)
if(!r)return null
const o=new mB(r,oN,WF)
Zi(0,o,n)
const s=new rH(TM)
return s.items=[o],s}(0,t,a),a.hasNonFocusableElements=!0
break
case"CollectionLockup":c=function(e,t,n){const r=z(t,"showOrdinals"),o="OrdinalDesc"===W(t,"collectionLockupDisplayType")?$y:"ascending",s=W(t,"collectionLockupSize")
let i
if(n.subStyle=s,s)switch(s){case xT:i=CL
break
case LT:i=SF
break
default:i=g$}const a={metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,artworkUseCase:kl(0,i),canDisplayArcadeOfferButton:vu(0,i)},c=ml(e,se(t,V$),{includeOrdinals:r,ordinalDirection:o,lockupOptions:a})
if(!c||0===c.length)return null
const l=new rH(i)
return l.items=c,l}(e,t,a),a.hasFocusableElements=!0
break
case ET:c=function(e,t,n){const r=W(t,"inlineImageDisplayType"),o=El(e,j(t,I$),{useCase:13,allowingTransparency:r===QD&&!0,withJoeColorPlaceholder:!1})
if(!o)return null
const s=new Vj(o,!1,oN)
s.caption=W(t,tx),n.subStyle=r,r&&("BoundingBox"===r?(s.isFullWidth=!1,s.hasRoundedCorners=!0):(s.isFullWidth=!0,s.hasRoundedCorners=!1)),Zi(0,s,n)
const i=new rH(uR)
return i.items=[s],i}(e,t,a),a.hasNonFocusableElements=!0
break
case OT:c=function(e,t,n){const r=Ji(0,t)
if(!r)return null
let o=null
const a=se(t,O$)
if(i(a)&&(o=si(e,a,n.metricsPageInformation,n.metricsLocationTracker,n),s(o)))return o
const c=W(t,"appLockupSize")
let l
n.subStyle=c
let u=!1
if(c)switch(c){case _T:l=g$,u=!0
break
case LT:l=SF,u=!0
break
default:l=TS}const d=rt(0,t)
if(u){const t=new rH(l),s=al(e,r,{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,externalDeepLinkUrl:d,artworkUseCase:kl(0,l)})
t.items=[s],o=t}else o=function(e,t,n){const r=new rH(TS),o="tv"!==e.client.deviceType,s=Ji(0,t),i=rt(0,t),a=al(e,s,{offerStyle:cN,metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,externalDeepLinkUrl:i,crossLinkSubtitle:n.crossLinkSubtitle,artworkUseCase:1}),c=new fj(pL,a)
c.description=nl(e,s)
let l=null
switch(W(t,"appLockupVideo")){case"AppTrailer":{const t=Fl(e,s)
t&&t.length>0&&(l=t[0])
break}}return l&&(kr(e,l,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,id:n.pageId}),c.video=l),o&&(r.background={type:nF,color:MZ}),r.items=[c],r}(e,t,n)
return o}(e,t,a),a.hasFocusableElements=!0
break
case"TipBlock":c=function(e,t,n){const r=El(e,j(t,I$),{useCase:13})
if(!r)return null
const o=W(t,tx),s=W(t,"tipNumber"),i=new Vj(r,!1,oN)
i.isFullWidth=!1,i.hasRoundedCorners=!0,i.caption=o,i.ordinal=s,Zi(0,i,n)
const a=new rH(uR)
return a.items=[i],a}(e,t,a),a.hasNonFocusableElements=!0
break
case"PullQuote":c=function(e,t,n){const r=W(t,DT),o=W(t,"quoteAttribution"),s=El(e,j(t,I$),{useCase:13}),i=W(t,"pullQuoteDisplayType")===QD,a=new Wj(r,o,s,i)
Zi(0,a,n)
const c=new rH(DT)
return c.items=[a],c}(e,t,a),a.hasNonFocusableElements=!0
break
case"HorizontalRule":c=function(e,t,n){let r=U("defaultLine")
const s=j(t,"customColor"),i=N(d(s,"lightMode")),a=N(d(s,"darkMode"))
o(i)||o(a)||(r=G(i,a))
const c=W(t,"lineStyle"),l=W(t,vF)===QD,u=new zj(c,r,l),f=new rH("horizontalRule")
return f.items=[u],f}(0,t),a.hasNonFocusableElements=!0
break
case RT:c=function(e,t,n){const r=El(e,j(t,"video.previewFrame"),{useCase:13})
if(!r)return null
const o=W(t,"video.video")
if(!o)return null
const s=W(t,"inlineVideoDisplayType")===QD,i=new kB(o,r,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}})
kr(e,i,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,id:n.pageId})
const a=new jj(i,s,oN)
a.caption=W(t,tx),Zi(0,a,n)
const c=new rH(sR)
return c.items=[a],c}(e,t,a),a.hasFocusableElements=!0
break
case"AppMedia":c=function(e,t,n){const o=Ji(0,t)
if(!o)return null
const i=W(t,"appMediaOption"),a=W(t,"appMediaPlatform")
switch(n.subStyle=i,i){case"Screenshots":{let t=null
if(t=new rH(G$),r(a)){const n=$l(e,o,14)
n&&n.length>0&&(t.items=[n[0]])}else{const n=function(e,t){switch(t){case mb:return W$
case PM:return e.client.isPad?_$:U$
case ID:return"tv"
case yb:return MF
case"visionOS":return v$
default:return null}}(e,a)
if(n){const r=$l(e,o,14,[n])
r&&r.length&&(t.items=[r[0]])}}return s(t)&&0===t.items.length?null:t}case"AppTrailers":const t=new rH(sR),i=Fl(e,o)
if(i&&i.length>0){const r=i[0]
kr(e,r,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,id:n.pageId})
const o=new jj(r,!1,UN,null,null,!0)
return t.items=[o],t}return null
default:return null}}(e,t,a),a.hasFocusableElements=!0
break
case"LinkBlock":c=function(e,t,n){const r=W(t,b$)
if(!r)return null
const o=new nj(r),s=W(t,"urlTitle")
let i=W(t,tx)
i||(i=o.host)
const a=[MT,Jx,"music.apple.com","books.apple.com","podcasts.apple.com","watch-app.cdn-apple.com","tv.apple.com"]
let c=!1
for(const e of a)o.host.endsWith(e)&&(c=!0)
const l=new sU(r)
od(e,l,{targetType:m$,pageInformation:n.metricsPageInformation,id:`${n.index}`,locationTracker:n.metricsLocationTracker})
const u=new Nj(s,i,l,c)
Zi(0,u,n)
const d=new rH(mk)
return d.items=[u],d}(e,t,a),(0,Yh.isSome)(c)&&(a.hasFocusableElements=!0)
break
case"TextList":c=function(e,t,n){const r=H(t,tx)
if(!r.length)return null
const o=W(t,"textListDisplayType")
n.subStyle=o
let s,i=!1
i="Bulleted"===o,s=i?"<ul>":"<ol>"
for(const e of r){const t=JSON.stringify(e)
s=`${s}<li>${JSON.parse(t)}</li>`}s=i?`${s}</ul>`:`${s}</ol>`
const a=new mB(s,oN,WF)
Zi(0,a,n)
const c=new rH(TM)
return c.items=[a],c}(0,t,a),a.hasNonFocusableElements=!0
break
case"IAPLockup":c=function(e,t,n){const r=Ji(0,t)
if(!r)return null
const o=cl(e,r,{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,artworkUseCase:1})
if(!o)return null
const s=new hj(o),i=new rH("inAppPurchaseShowcase")
return i.background={type:nF,color:xZ},i.items=[s],i}(e,t,a),a.hasFocusableElements=!0
break
case Ak:c=function(e,t,n,o){const a=W(t,CT)
o.subStyle=a
let c=null
switch(a){case"OSUpgrade":c=function(e,t,n){const r=e.client.deviceType
if(r!==H$)return null
const o=st(r)
if(null===o)return null
const s=new sU(o)
od(e,s,{targetType:m$,pageInformation:n.metricsPageInformation,id:`${n.index}`,locationTracker:n.metricsLocationTracker})
const i=e.loc.string("CLIENT_CONTROL_OS_UPGRADE_TITLE","CHECK FOR UPDATE"),a=new Jj(i,s)
Zi(0,a,n)
const c=new rH("clientControlButton")
return c.items=[a],c}(e,0,o)
break
case kT:c=function(e,t,n,o){let a=hd(e,n)
if(!a&&o.additionalData&&(a=wd(0,o.additionalData.get(yk))),!s(a))return null
const c={pageInformation:o.metricsPageInformation,locationTracker:o.metricsLocationTracker},l=ud(0,o.metricsPageInformation,o.metricsLocationTracker,!1)
let u
l.title=e.loc.string(VL,jL)
const d=_i(0,a.marketingItemData)
i(d)?(u=Gi(e,a.marketingItemData,rE,c),s(u)&&(u.title=d)):(u=ud(0,o.metricsPageInformation,o.metricsLocationTracker,!1),u.title=e.loc.string(VL,jL))
const f=new eH(u,l),p=Bi(0,a.marketingItemData)
f.unsubscribedDescription=p
const h=new nB(F$,e.bag.arcadeAppAdamId,cN,null,R$,null,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId)
h.titles[OO]=e.loc.string(VL,jL),f.offerDisplayProperties=h,nn(0,f,{...c,targetType:ZE,title:d,id:t.id,kind:ZE,softwareType:null,displaysArcadeUpsell:!0})
{if(r(o.additionalData))return null
const t=o.additionalData.get(vk)
if(i(t)){const n={pageInformation:o.metricsPageInformation,locationTracker:o.metricsLocationTracker},r=x(t)
f.iconArtworks=Rl(e,r,n,{useCase:2})}}const w=new rH(ZE)
return w.items=[f],w.background={type:nF,color:NZ},w}(e,t,n,o)}return c}(e,t,n,a),a.hasFocusableElements=!0
break
case"StoryList":c=function(e,t,n,r){const o=se(t,V$)
if(!o)return null
const s=W(t,z$),i=W(t,lN),a=zN,c=vd(e,o,a,s,i,n,null)
return Array.isArray(c.items)&&(c.items=c.items.filter(e=>!(e instanceof UH)||gd(0,e.media.kind,a))),c}(e,t,a),a.hasFocusableElements=!0
break
case"AppEventLockup":c=function(e,t,n){const r=Ji(0,t)
return r?si(e,[r],n.metricsPageInformation,n.metricsLocationTracker,n):null}(e,t,a),a.hasFocusableElements=!0
break
default:c=null}return c})}function zi(e,t){const n=se(t,bF)
if(1!==n.length)return null
const r=n[0]
if(!r)return null
switch(r.type){case q$:case x$:return r
default:return null}}function Yi(e){return e.client.deviceType===H$?h$:kF}function Ji(e,t,n){return oe(t,V$)||null}function Zi(e,t,n){if(!t)return
let r=n.module
n.subStyle&&(r=r+"_"+n.subStyle)
const o={id:`${n.index}`,impressionIndex:n.index,idType:XF,impressionType:r,kind:"iosModule"}
t.impressionMetrics=new XB(Ou(o))}function Ki(e,t,n){const r=new OZ
r.overlayType=Qi(e,t),r.displayOptions={horizontalPlacement:na(e,t),textAlignment:ra(e,t),isOverDarkContent:ta(e,t)}
const a=Pu(e,t),c=W(t,ZF)
if(Se(e,t,Rx)?r.badgeText=e.loc.uppercased(Tu(e,a,c)):r.badgeText=c,r.titleText=pu(e,t,z$)||Pe(e,a,z$),r.overlayType===lO||r.overlayType===nb?r.descriptionText=pu(e,t,lN):r.descriptionText=pu(e,t,AN)||Pe(e,a,lN),r.callToActionText=W(t,nS),r.buttonTitle=ea(e,t),r.overlayType!==r$&&r.overlayType!==lO||(r.lockup=function(e,t,n){let r=oe(t,PF)
const s=se(t,bF)
if(o(r)&&i(s)&&(r=s[0]),o(r))return null
const a={metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:M(t)},artworkUseCase:n.lockupArtworkUseCase,offerStyle:SM,offerEnvironment:R$,canDisplayArcadeOfferButton:n.canDisplayArcadeOfferButton,shouldHideArcadeHeader:e.featureFlags.isEnabled(wL),isContainedInPreorderExclusiveShelf:n.isContainedInPreorderExclusiveShelf},c=al(e,r,a),l=Pu(e,t),u=pu(e,t,AN)||Pe(e,l,lN)
return(null==u?void 0:u.length)>0&&(c.subtitle=u),c}(e,t,n)),(null==c?void 0:c.length)>0&&s(r.lockup)&&(r.lockup.heading=c),r.collectionIcons=function(e,t){const n=se(t,bF)
if(o(n))return null
const r=[]
for(const t of n){const n=_l(e,t,{useCase:1,withJoeColorPlaceholder:!0})
i(n)&&r.push(n)}return i(r)?r:null}(e,t),i(r.lockup))r.clickAction=r.lockup.clickAction,r.impressionMetrics=r.lockup.impressionMetrics
else{const o={targetType:r$,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:M(t)},s=Xi(e,t),i=xi(e,t)
i.title=s,od(e,i,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:M(t),targetType:r$,id:t.id}),r.clickAction=i,nn(0,r,an(e,t,s,o))}return r}function Qi(e,t){const n=z(t,rm),r=W(t,PN),a=se(t,bF),c=pu(e,t,lN),l=function(e){return Pi(e,e.bag.hero3RolloutRate)}(e)&&(null==c?void 0:c.length)>0
let u=oe(t,PF)
return o(u)&&i(a)&&(u=a[0]),s(u)&&"App"===r?l?lO:r$:i(a)&&"Collection"===r?l?nb:rb:n?uO:tF}function Xi(e,t){const n=Qi(e,t),r=oe(t,PF)
switch(n){case r$:case lO:return W(r,z$)
case uO:case tF:case rb:case nb:return pu(e,t,z$)||Pe(e,r,z$)
default:return null}}function ea(e,t){if("tv"!==e.client.deviceType)return null
switch(Qi(e,t)){case r$:return e.loc.string(cy)
case uO:case tF:let t=e.loc.string(ZS)
return t===ZS&&(t=e.loc.string(cy)),t
case rb:return e.loc.string("HERO_CAROUSEL_OVERLAY_BUTTON_TITLE_COLLECTION")
default:return null}}function ta(e,t){const n=bi(e,t),r=Si(e,t),o=n.backgroundColor||r.backgroundColor
return!o||B(o,50)}function na(e,t){if(e.client.isPhone)return TF
const n=W(t,XI)
if(!i(n))return n$
switch(n.toLowerCase()){case eS:return n$
case TF:return TF
case tS:return c_
default:return n$}}function ra(e,t){return na(e,t),n$}function oa(e){return`${e.shelfIdentifier}.${e.slot}`}function sa(e,t){if(r(e))return null
const n=oa(t),o=e.tasks[n]
return r(o)?null:(delete e.tasks[n],o)}function ia(e,t,n){const r=(null==n?void 0:n.meta)||null
return(0,Yh.isSome)(null==r?void 0:r.adDisplayStyle)&&e.featureFlags.isEnabled(Lg)?aa(t,{shelfIdentifier:HZ,slot:r.adDisplayStyle.slot}):aa(t,jZ)}function aa(e,t){if(r(e)||s(e.failureReason))return null
const n={tasks:{}}
return function(e,t){if(r(e))return
const n=oa(t.positionInfo)
e.tasks[n]=t}(n,{data:D(e.mediaResponse),positionInfo:t}),n}function ca(e,t,n){if(o(t))return
const r=function(e){return d(e,"meta.metrics.clusterId")}(n)
o(r)||function(e,t,n){const r=ua(t)
e.storage.storeString(r,n)}(e,t,r)}function la(e,t){return o(t)?null:function(e,t){const n=ua(t)
return e.storage.retrieveString(n)}(e,t)}function ua(e){return e+"-cohort-id"}async function da(e,t,n){const r={primaryPageData:null,additionalData:{},requiredAdditionalDataFailureReason:void 0},o=Object.keys(n),i=[t,...o.map(e=>n[e])],a=await async function(e){const t=new Array(e.length)
let n=e.length
return await new Promise((r,o)=>{const i=function(){if(0===n){const e=t.map(e=>e.status===LE?e.reason:null).filter(s)
0===e.length?r(t):1===t.length&&1===e.length?o(e[0]):o(new qZ(e))}}
for(let r=0;r<e.length;r++){const o=r
e[o].promise.then(r=>{t[o]={status:sS,value:r,isRequired:e[o].isRequired},n--,i()},r=>{t[o]={status:LE,reason:r,isRequired:e[o].isRequired},n--,i()})}})}(i)
switch(a[0].status){case sS:r.primaryPageData=a[0].value
break
case LE:r.primaryPageDataFetchFailureReason=a[0].reason}const c=a.slice(1)
for(const[e,t]of c.entries()){const n=o[e]
switch(t.status){case sS:r.additionalData[n]=t.value
break
case LE:r.additionalData[n]=null,t.isRequired&&(r.requiredAdditionalDataFailureReason=t.reason)}if(s(r.requiredAdditionalDataFailureReason))break}return r}function fa(e,t,n){const r=new rH(n||JZ)
r.isHorizontal=!1,r.items=wb
const o=new cH([r])
return o.isIncomplete=!0,o.title=t,o}function pa(e,t){if(!(0,Gh.isNothing)(t))switch(t){case"top-free":return"top-paid"
case"top-paid":return"top-free"
default:return}}async function ha(e,t,n,r=null){const o=function(e,t,n,r=null,o=e.host.clientIdentifier){const s=[iF,hF,OF]
e.appleSilicon.isSupportEnabled&&s.push(NF)
const a=new hH(e).forType(C_).addingQuery(mF,t).includingAttributes(s).addingQuery(VE,q$).includingMacOSCompatibleIOSAppsWhenSupported(!0).includingAdditionalPlatforms(E(e)).usingCustomAttributes(De(e))
return i(n)&&a.addingQuery(HG,n),o===_B?a.addingContext(W$):o===LB&&a.addingContext(MF),e.appleSilicon.isSupportEnabled&&a.includingAdditionalPlatforms([sF,pF]),(0,Gh.isSome)(r)&&a.addingQuery(WG,r),a}(e,t,n,r)
return o.withLimit(200),o.enablingFeature("newChartsElements"),await Mr(e,o)}async function wa(e,t,n){let r
return r=e.host.clientIdentifier===LB||function(e){return i(e)&&(-1!==e.indexOf("top-free-safari-extensions")||-1!==e.indexOf("top-paid-safari-extensions"))}(t)?Promise.resolve({}):Mr(e,Dr(e,n)).catch(()=>{}),await r}function ga(e,t,n,r){const o={...n,shouldFilter:!z(t,mO),chartUrl:W(t,kI),chartIdentifier:W(t,oM),roomRelationshipData:oe(t,"room")}
return Vr(o.featuredContentId)?(o.seeAllUrl=function(e,t,n){const r=W(t,kI),o=new nj(r),s=W(t,oM)
i(s)&&o.param(qG,s)
const a=function(e,t,n){var r
const o=null!==(r=(null==n?void 0:n.editorialCharts.length)>1)&&void 0!==r&&r,s=null==n?void 0:n.editorialCharts.map(e=>e.type.toString()).join(",")
if((0,Gh.isSome)(s)&&s.includes(t)&&o)return s
const i=pa(0,t)
return void 0===i?t:[t,i].join(",")}(0,s,n)
return i(a)&&o.param(HG,a),o.toString()}(0,t,r.chartSet),o.showOrdinals=!0,o.shouldFilter=!1):i(o.roomRelationshipData)&&(o.seeAllUrl=hi(e,o.roomRelationshipData.href)),o.shelfStyle=function(e,t,n,r){const o=n.featuredContentId
if(557===o||418===o||495===o||function(e){return XY.has(e)}(o)){let e=W(t,vF)
return e||(e=311===o||312===o?pL:495===o||557===o?pb:FL),`${e}Lockup`}if(431===o)return gO
if(429===o)return R_
if(304===o||305===o||430===o||420===o)return O_
if(Vr(o))return g$
if(497===o)return NL
switch(r.shelves.length%3){case 0:return g$
case 1:return SF
default:return CL}}(0,t,o,r),o.clientIdentifierOverride=xt(0,t),o}function ma(e,t,n,a){const c=(l=t.featuredContentId,KY.has(l)?19326:15358)
var l
let u,f=[]
if(i(n.shelfContents)){const o=function(e,t,n,o,i){const a=sa(t,o)
if(r(a))return null
const c=a.data,l=ya(e,c,i)
return s(l)?i.includedAdAdamIds=[c.id]:Ao(e,n,c),l}(e,null==a?void 0:a.adStitcher,null==a?void 0:a.adIncidentRecorder,jZ,t)
o&&o instanceof Tj&&(f.push(o),ju(t.metricsLocationTracker),t.ordinalIndex++,n.shelfContents=n.shelfContents.filter(e=>e.id!==o.adamId))}for(const o of n.shelfContents){if(o.type===O$)return null
if(557===t.featuredContentId&&o.type===M$){u=o
continue}if(r(o.attributes)||Wr(t)){t.isDeferring=!0,t.remainingItems.push(o)
continue}if(Ze(e,o,c))continue
const n=ya(e,o,t)
n&&(f.push(n),ju(t.metricsLocationTracker),t.ordinalIndex++)}Vr(t.featuredContentId)&&!jr(t.featuredContentId)&&(f=function(e,t){if(!e)return null
const n=e.length,r=n%3
return n>=3?e.slice(0,n-r):e}(f)),delete t.maxItemCount
const h={eyebrow:t.eyebrow,eyebrowArtwork:t.eyebrowArtwork,title:t.title,titleArtwork:t.titleArtwork,subtitle:t.subtitle,configuration:t.shelfHeaderConfiguration},w=new rH(t.shelfStyle)
let g
if(w.isHorizontal=!0,w.items=f,w.shouldFilterApps=t.shouldFilter,557===t.featuredContentId?function(e,t,n,r,o,s,a){if((0,Gh.isNothing)(s)&&(s=oe(t.featuredContentData,by)),r.configuration.includeTrailingArtwork=!0,!J(s)){if(e.props.enabled("categoryBreakoutPlaceholder")){const e=W(t.featuredContentData,z$)
r.eyebrow=e,r.title="",n.footerTitle=""}return t.isDeferring=!0,void t.remainingItems.push(s)}const c=W(t.featuredContentData,z$)
r.eyebrow=c
const l=j(s,qN),u=d(l,z$)
r.title=u,Gu(t.metricsLocationTracker).name=u,i(t.originalPlaceholderShelfImpressionMetrics)&&(t.originalPlaceholderShelfImpressionMetrics.fields.name=u)
const f=j(s,w$)
if((0,Gh.isNothing)(f))return void(n.isHidden=!0)
const h=Xr(e,p(f,"storyBackgroundStatic16x9"),{useCase:28,withJoeColorPlaceholder:!0}),w=B(h.backgroundColor)?R$:GF
n.background={type:I$,artwork:h,style:w},o.forEach((e,t)=>{(0,Gh.isSome)(e)&&e instanceof Tj&&(e.offerDisplayProperties=e.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,SM,w),e.subtitleTextFilter=im,e.redownloadButtonTint=U(h$))})
const g=p(f,Cy)
if((0,Gh.isNothing)(g))return void(n.isHidden=!0)
const m=Xr(e,g,{contentMode:Vh.scaleAspectFit,useCase:18})
r.trailingArtwork=m
const y=d(s.attributes,b$),v=d(s.attributes,nS),A={id:s.id,idType:HN,targetType:j$,actionType:A$,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker}
if((0,Gh.isSome)(y)){n.footerTitle=v
const t=e.required(gQ).fetchFlowPage(y),r=new nU(t)
r.title=v,r.pageUrl=y,od(e,r,A),n.footerAction=r}else{const r=to(e,s,t,!1,null,{targetType:j$,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:M(s)},a);(0,Gh.isSome)(r.action)&&(r.action.actionMetrics.clearAll(),r.action.title=null!=v?v:d(l,"callToAction"),od(e,r.action,A),n.footerAction=r.action,n.footerTitle=r.action.title)}}(e,t,w,h,f,u,a):w.items.forEach((e,t)=>{(0,Gh.isSome)(e)&&e instanceof Tj&&(e.redownloadButtonTint=U(hb))}),w&&o(w.items)&&t.isFirstRender&&ci(e,w,t,t.featuredContentId),Vr(t.featuredContentId))g=new nU(CD)
else if(g=new nU($$),!li(w)){const e=function(e,t){if(!t)return null
switch(t){case bL:case gO:return t
default:return null}}(0,t.shelfStyle)
g.pageData=fa(0,t.title,e)}g.pageUrl=t.seeAllUrl,g.title=e.loc.string(XN),g.referrerUrl=t.metricsPageInformation.pageUrl,sd(e,g,t.seeAllUrl,{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker})
const m=function(e,t,n){return 557!==n.featuredContentId&&!jr(n.featuredContentId)&&497!==n.featuredContentId}(0,w.items,t),y=s(g.pageUrl)||s(g.pageData)
if(m&&y&&(h.accessoryAction=g),t.shelfStyle===R_||t.shelfStyle===O_){const e=W(t.featuredContentData,"suppressTagline")!==qF
r(w.presentationHints)?w.presentationHints={showSupplementaryText:e}:w.presentationHints={...w.presentationHints,showSupplementaryText:e}}return t.shelfStyle,w.header=h,w.url=Yr(w,t),w}function ya(e,t,n){if(o(t))return null
let a
n.showOrdinals&&(a=e.loc.decimal(n.ordinalIndex))
let c,l=null
!s(n.shelfBackground)||n.shelfBackground.type!==nF&&n.shelfBackground.type!==nO||(l=h$),i(n)&&(c=n.clientIdentifierOverride)
const u={ordinal:a,metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:M(t),isAdvert:Io(0,t)},clientIdentifierOverride:c,artworkUseCase:kl(0,n.shelfStyle),offerStyle:l,canDisplayArcadeOfferButton:vu(0,n.shelfStyle),isContainedInPreorderExclusiveShelf:497===n.featuredContentId,shouldHideArcadeHeader:e.featureFlags.isEnabled(wL)&&n.isArcadePage}
let d
switch(n.shelfStyle){case O_:d=function(e,t,n,r){return Uh.context("trailersLockupFromData",()=>{const o=new bj
return function(e,t,n,r,o){t&&Uh.context("copyDataIntoTrailersLockup",()=>{Xc(e,t,n,o),n.trailers=Ml(e,t,r,o.metricsOptions,n.adamId)})}(e,t,o,r,n),o})}(e,t,u,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}})
break
case R_:d=ll(e,t,u)
break
case NL:d=ul(e,t,u)
break
case bL:case gO:d=cl(e,t,u)
break
case"smallImageLockup":case aO:case cO:d=fl(e,t,u,ow.EditorialLockupLarge)
break
default:d=al(e,t,u)}return r(d)||!d.isValid()?null:d}function va(e,t){const n=e.bag.dynamicUIRegexStrings
for(const e of n){const n=e.replace(/\//g,"\\/")
if(new RegExp(n).test(t)){const e=new nU(GR,t)
return e.pageData=new JH,e}}const r=e.bag.webViewRegexStrings
for(const e of r){const n=e.replace(/\//g,"\\/")
if(new RegExp(n).test(t))return new nU(VR,t)}return new nU(tN,t)}function Aa(e,t,n){Uh.catchingContext("parseGrouping",()=>{for(const r of t.data){const o=Y(r,nN)
if(Vr(o)){const e=d(r,"id")
n.chartSet=Ta(e,t.editorialChartSets)}else n.chartSet=null
const i=Hr(e,r,n),a=i.shelfToken,c=i.metricsOptions
let l
for(const t of rK)if(t.supports(e,r,o)){l=Uh.catchingContext("parseGroupingShelf",()=>t.createShelf(e,r,n,a,c))
break}s(l)&&n.shelves.push(l)}})}function Ta(e,t){for(const n of t){if(n.id===e)return n
for(const t of n.editorialCharts)if(t.id===e)return n}return null}function Pa(e){const t=[],n=[]
return function e(r){const o=Y(r,nN)
Uh.catchingContext(`flattenGroupingTree.addMediaApiDataToGroupingData: ${o}`,()=>{const i=oe(r,lx)
if(s(i))e(i)
else if(function(e){return nJ.has(e)}(o)){const t=se(r,yF)
for(const n of t)e(n)}else if(424===o){const t=424!==Y(a=r,nN)?null:{id:d(a,"id"),name:W(a,z$),editorialCharts:se(a,yF).map(e=>function(e){return Vr(Y(e,nN))?{id:d(e,"id"),href:W(e,kI),name:W(e,z$),type:W(e,oM)}:null}(e)).filter(e=>(0,Yh.isSome)(e))};(0,Yh.isSome)(t)&&n.push(t)
const o=se(r,yF)
for(const t of o)e(t)}else t.push(r)
var a})}(e),{data:t,editorialChartSets:n,originalGroupingData:e}}function Ia(e,t,n){var r
if(e.user&&e.user.isManagedAppleID)return null
{const t=[],n=e.loc.string("FOOTER_REDEEM",xI),o=va(e,e.bag.redeemUrl),s=new Gj(n,o)
if(s.id=u_,t.push(s),e.bag.isMonetaryGiftingEnabled){const n=e.loc.string("FOOTER_SEND_GIFT",bg),r=va(e,d_),o=new Gj(n,r)
o.id=d_,t.push(o)}const i=e.bag.accountTopUpURL
if((0,Yh.isSome)(i)){const n=null!==(r=e.bag.accountTopUpTitle)&&void 0!==r?r:e.loc.string("FOOTER_ADD_MONEY"),o=va(e,i),s=new Gj(n,o)
s.id="topUp",t.push(s)}let a
{a=new rH("titledButtonStack")
const e=new Uj(t)
e.compactLineBreaks=e.buttons.map((e,t)=>t),a.items=[e]}return a}}function Sa(e,t,n=!0){const r=new sU(t),o=e.loc.string(tb),s=new vj(o)
s.clickAction=r,s.presentationStyle=[rO,oO],n&&s.presentationStyle.push(sO)
const i=new rH("footnote")
if(i.items=[s],e.bag.emailSupportLinkURL){const t=new sU(e.bag.emailSupportLinkURL),r=new vj("Email Support")
r.clickAction=t,r.presentationStyle=[rO,oO],n&&r.presentationStyle.push(sO),i.items.push(r)}return i}function ba(e,t){const n=new rH("unifiedMessage")
return n.id=t,n.items=[new nH(t)],n.isHidden=!0,n}function Ca(e,t,n,r,o,a,l){const u=c(t,a$),d=[]
for(const t of u){const c=m(t)
if(i(c)){const t=ka(e,c,n,r,o,a,l)
s(t)&&d.push(t)}}if(0===d.length){const t=function(e,t,n,r,o){const s=wC,i=e.loc.string("PRODUCT_PRIVACY_NO_DETAILS_PROVIDED_TITLE"),a=e.loc.string("PRODUCT_PRIVACY_NO_DETAILS_PROVIDED_BODY"),c=nt(e,JO),l=Ea(e,t,s,n,r,o)
return new aK(s,i,a,c,n,[],[],l)}(e,n,r,a,l)
d.push(t)}for(const e of d)nn(0,e,{id:null,kind:null,softwareType:null,title:e.title,pageInformation:a,locationTracker:l,targetType:vC}),ju(l)
return d}function ka(e,t,n,r,a,l,u){const f=d(t,AC),p=d(t,YO),h=d(t,P$)
if(o(f)||o(p)||o(h))return null
const w=_a(e,t,function(e,t){switch(t){case"DATA_NOT_LINKED_TO_YOU":return"resource://person.circle.slash"
case"DATA_USED_TO_TRACK_YOU":return"systemimage://person.fill.viewfinder"
case"DATA_NOT_COLLECTED":return"systemimage://checkmark.circle"
case"DATA_LINKED_TO_YOU":return fA
default:return null}}(0,f)),g=a?Oa(e,t,r):[],y=function(e,t,n){const r=c(t,"purposes"),o=[]
for(const t of r){const r=m(t)
if(i(r)){const t=Da(e,r,n)
s(t)&&o.push(t)}}return o}(e,t,r),v=Ea(e,n,f,r,l,u)
return new aK(f,p,h,w,r,y,g,v)}function Ea(e,t,n,r,o,s){let i
return r!==rF&&r!==HD||(i=$a(e,t,La(e)&&r===rF?HD:FM,o,s,n)),i}function Oa(e,t,n){const r=c(t,"dataCategories"),o=[]
for(const t of r){const r=m(t)
if(i(r)){const t=Ra(e,r,n===rF?rF:FM)
s(t)&&o.push(t)}}return o}function Ra(e,t,n){const s=d(t,AC),i=d(t,"dataCategory")
if(o(s)||o(i))return null
const a=_a(e,t,function(e,t){switch(t){case"FINANCIAL_INFO":return"systemimage://creditcard.fill"
case"CONTACT_INFO":return"systemimage://info.circle.fill"
case"OTHER":return"systemimage://ellipsis.circle.fill"
case"SENSITIVE_INFO":return"systemimage://eye.fill"
case dA:return"systemimage://chart.bar.fill"
case"CONTACTS":return fA
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
let l=[]
n===FM&&(l=c(t,"dataTypes"))
const u=new lK(s,i,a,n,l)
return s===dA&&(u.prefersSmallArtwork=!0),u}function Da(e,t,n){const r=d(t,AC),s=d(t,"purpose"),i=Oa(e,t,n)
return o(r)||o(s)||0===i.length?null:new cK(r,s,i)}function _a(e,t,n){let o
if((null==n?void 0:n.length)>0&&(o=nt(e,n)),r(o)){const n=p(t,I$)
s(n)&&(o=El(e,n,{useCase:0,allowingTransparency:!0}))}return o}function La(e){return e.client.deviceType===W$}function xa(e,t,n,a,c,l){return Uh.context("createPrivacyHeaderFromData",()=>{const u=function(e,t,n,r,a,c){let l,u=oN
const f=oe(t,IF),p=i(f)&&uK.indexOf(f.id)>-1
l=n&&!p?e.loc.string("PRODUCT_PRIVACY_DETAIL_HEADER_TEMPLATE"):e.loc.string("PRODUCT_PRIVACY_HEADER_TEMPLATE")
const h=Fa(e,t,r,FM,a,c),w=1===h.length&&h[0].identifier===wC||0===h.length
w&&(l=e.loc.string("PRODUCT_PRIVACY_HEADER_NO_DETAILS_TEMPLATE"))
const g=W(t,QN)
s(g)?l=l.replace(iA,pE+g+hE):(l=w?e.loc.string("PRODUCT_PRIVACY_FALLBACK_HEADER_NO_DETAILS_TEMPLATE"):n?e.loc.string("PRODUCT_PRIVACY_FALLBACK_DETAIL_HEADER_TEMPLATE"):e.loc.string("PRODUCT_PRIVACY_FALLBACK_HEADER_TEMPLATE"),u=UN)
const m=e.loc.string("PRODUCT_PRIVACY_SUMMARY_PRIVACY_POLICY_LINK")
l=l.replace("{privacyPolicyLink}",m)
const y=function(e,t,n,r){let s
{const n=Pe(e,t,A_)
if(o(n))return null
s=new sU(n,!1)}return s.title=e.loc.string("PRODUCT_PRIVACY_SUMMARY_PRIVACY_POLICY_BUTTON_TITLE"),od(e,s,{targetType:m$,id:cA,pageInformation:n,locationTracker:r}),s}(e,t,a,c),v={}
if(s(y)&&(v[m]=y),n){const n=function(e,t,n,r){const s=d(j(t,zO),"managePrivacyChoicesUrl")
if(o(s))return null
const i=new sU(s,!1)
return od(e,i,{targetType:m$,id:"managePrivacyChoices",pageInformation:n,locationTracker:r}),i}(e,t,a,c)
if(s(n)){const t=e.loc.string("PRODUCT_PRIVACY_MANAGE_CHOICES_LINK")
l+=aA,l+=e.loc.string("PRODUCT_PRIVACY_MANAGE_CHOICES_TEMPLATE").replace("{manageChoicesLink}",t),n.title=t,v[t]=n}}const A=new gB(l,u)
return new Fj(A,v)}(e,t,n,a,c,l),f=function(e,t,n,o,s){if(!n)return null
const i=e.loc.string(lA),a=e.loc.string("PRODUCT_PRIVACY_DEFINITIONS_LINK_TEMPLATE").replace("{privacyDefinitionsLink}",i),c=Na(e,o,s)
if(r(c))return null
c.title=i
const l={}
l[i]=c
const u=new gB(a,UN)
return new Fj(u,l)}(e,0,n,c,l)
let p,h
n&&(p=function(e,t,n,o,s){if(!n)return null
const i=e.loc.string(gC),a=Ma(e,o,s)
let c
const l={}
r(a)?c=e.loc.string(mC):(c=e.loc.string(sA).replace(_M,i),a.title=i,l[i]=a)
const u=new gB(c,UN)
return new Fj(u,l)}(e,0,n,c,l),i(p)&&(h=Ma(e,c,l)))
const w=[]
if(s(f)){const e=new sK(f,void 0)
w.push(e)}if(s(p)){const e=new sK(p,h)
w.push(e)}return new oK(u,n,[],[],w,void 0)})}function Ma(e,t,n){const r=e.bag.appPrivacyLearnMoreEditorialItemId
if(o(r))return null
const s=new nU(WF)
return s.title=e.loc.string(gC),s.pageUrl=`https://apps.apple.com/story/id${r}`,od(e,s,{targetType:j$,id:"privacyLearnMore",pageInformation:t,locationTracker:n}),s}function Na(e,t,n){const r=e.bag.appPrivacyDefinitionsEditorialItemId
if(o(r))return null
const s=new nU(WF)
return s.title=e.loc.string(lA),s.pageUrl=`https://apps.apple.com/story/id${r}`,od(e,s,{targetType:j$,id:uA,pageInformation:t,locationTracker:n}),s}function Fa(e,t,n,r,o,s){let a=[]
const c=j(t,n?zO:T_)
return i(c)&&(a=Ca(e,c,t,r,e.client.deviceType!==W$||r===HD,o,s),1===a.length&&0===a[0].categories.length&&(a[0].style=rF)),a}function $a(e,t,n,o,a,c){if(r(t.id))return null
const l=new nU(yC)
l.title=e.loc.string("ACTION_SEE_DETAILS"),l.pageData=function(e,t,n,r,o){const s=[]
if(e.client.deviceType!==W$||n!==FM){const n=new rH(p$),i=xa(e,t,!0,!1,r,o)
n.items=[i],n.presentationHints={isFirstShelf:!0},s.push(n)}const i=new cH(s)
return e.client.deviceType===W$&&n!==FM||(i.isIncomplete=!0),i.title=e.loc.string(qO),i}(e,t,n,o,a)
const u=t.type===x$?uG:cG
let d
i(c)&&(d={privacyTypeId:c})
const f=nj.fromComponents(YU,null,`/${PG}/${u}/${t.id}`,d)
l.pageUrl=f.build()
const p={targetType:j$,id:"seeDetails",pageInformation:o,locationTracker:a}
return s(c)&&(p.targetType=vC,p.id=c),od(e,l,p),l}function Ba(e,t,n){if(!i(t))return null
let r=null
r=(0,Gh.isNothing)(n)?"sr":n
const s=El(e,t,{cropCode:r,useCase:12,allowingTransparency:!0})
return o(s)?null:s}function Ua(e,t,n,r){let o=0
for(const s of t){const t=n[s.key]
if(t){let n=null
if(Nc(e))n=new BU(t.shelfId,null,null,null,t.index,!0)
else{const e=new kU(t.section,!0)
e.index=t.index,n=e}s.clickAction=n}let i
switch(s.key){case QO:case Hx:case ZM:case WD:case WO:case ZL:case eN:i=CA
break
default:i=A$}s.clickAction&&od(e,s.clickAction,{targetType:w_,id:s.key,idType:XF,actionType:i,actionDetails:{position:o},pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker}),o+=1}}function Ga(e,t,n,r,s,i){if(r)return null
const a=il(e,t)
if(o(a))return null
const c=new lj(a),l=s?"":e.loc.string("INFO_LIST_CATEGORY_TITLE")
return new cj(l,[c])}function Va(e,t,n,a,c,l){const u=j(t,pS)
let d=[],f=function(e,t){let n=null
if(Sl(e,t)){const r=jl(0,t,e.appleSilicon.isSupportEnabled),o=!1,s=Vl(e,t),i=Zl(e,t,e.appleSilicon.isSupportEnabled,e.appleSilicon.isRosettaAvailable),a=function(e,t,n,r,o,s=!0){return!!ql(0,n,r,o).some(e=>zl(0,t,e))}(0,s,e.client.deviceType,r,o,i),c=e.loc.deviceDisplayName(e)
a&&c&&(n=e.loc.string("INFO_LIST_REQUIREMENTS_SUMMARY").replace("{deviceName}",c))}return n}(e,t)
const h=Se(e,t,Pm,ke(e))
if(i(u)){const t=function(e){const t=[sF,pF,k_,H$,HM,cM,W$],n=function(e,t,n){let r=null
switch(t){case U$:r=sF
break
case _$:r=pF
break
case H$:r=H$
break
case"tv":r=cM
break
case W$:r=W$
break
case v$:r=HM}return s(n)&&n===k_&&(r=k_),r}(0,e.client.deviceType,e.host.deviceModel)
if(s(n)){const e=t.indexOf(n)
e>0&&(t.splice(e,1),t.unshift(n))}return t}(e)
for(const n of t){const t=p(u,n)
if(i(t)){const r=ja(0,t,e.appleSilicon.isSupportEnabled&&n===H$&&h&&!e.appleSilicon.isRosettaAvailable)
s(r)&&d.push(r)}}!s(f)&&d.length>0&&(f=d[0].text)}else{const n=function(e,t){const n=Pe(e,t,"requirementsString")
return r(n)?null:new lj(n)}(e,t)
s(n)&&(d=[n])}if(o(d))return null
const w=c?"":e.loc.string("REQUIREMENTS")
return new cj(w,d,f)}function ja(e,t,n){const r=d(t,"deviceFamily")
let s=d(t,"requirementString")
const a=c(t,"devices")
if(n){const e=d(t,"rosettaUnavailableRequirementString")
i(e)&&(s=e)}if(o(s))return null
const l=[]
for(const e of a)l.push("\u2022\t\u2068"+e+"\u2069")
const u=l.length>0?l.join("\n"):null
return new lj(s,r,null,u)}function Ha(e,t,n,o,i,a){var l
const u=j(t,"contentRatingsBySystem.appsApple")
if(r(u))return null
const p=d(u,z$)
if(r(p))return null
const h=f(u,"rank")
if(99===h)return null
const w=c(u,"advisories")
let g=null
const m=fe(t,Ce(e,t),"ageBand"),y=f(m,"minAge"),v=f(m,"maxAge")
g=s(y)&&s(v)?e.loc.string("INFO_LIST_AGE_RATING_SUMMARY").replace("{ageRating}",p).replace("{minAgeRating}",e.loc.decimal(y)).replace("{maxAgeRating}",e.loc.decimal(v)):p
const A=[]
if(e.bag.requireAgeVerification&&function(e,t,n){let r
switch(n){case"twelvePlus":r=3
break
case KA:r=4
break
case"adultOnly":r=5
break
default:r=1}return t>=r}(0,h,KA)&&function(e,t){const n=se(t,Ny)
for(const e of n)if(d(e,"id")===6014..toString())return!0
return!1}(0,t)){let n=null
const r=t.type===x$
if(r){const e=ne(t,q$)
if(s(e))for(const t of e.data)if(s(W(t,QA))){n="AgeVerification.ProductPage.Rating.BundleUnsuitableForJuveniles"
break}}else s(W(t,QA))&&(n="AgeVerification.ProductPage.Rating.UnsuitableForJuveniles")
let o
null!=n&&A.push(new lj(e.loc.string(n))),o=r?"AgeVerification.ProductPage.Rating.BundleRequiredAge":"AgeVerification.ProductPage.Rating.RequiredAge",A.push(new lj(e.loc.string(o)+"\n"))}if(g&&A.push(new lj(g)),w.length>0)for(const e of w)A.push(new lj(e))
let T=null
A.length>1&&(T=g)
const P=i?"":e.loc.string("INFO_LIST_AGE_RATING_TITLE")
let I
if((null===(l=e.bag.ageRatingLearnMoreEditorialItemId)||void 0===l?void 0:l.length)>0){const t=new nU(WF)
t.title=e.loc.string("INFO_LIST_AGE_RATING_LEARN_MORE"),t.pageUrl=`https://apps.apple.com/story/id${e.bag.ageRatingLearnMoreEditorialItemId}`,I=t}return new cj(P,A,T,I)}function Wa(e,t){switch(za(e,t)){case yE:case UR:case AE:case vE:case Um:return!0
default:return!1}}function qa(e,t){return Pi(e,e.bag.gameControllerRecommendedRolloutRate)&&za(e,t)===Um}function za(e,t){const n=ke(e)
if(!de(t,n)){const r=Ae(e,t,AF)
if(o(r))return ox
const s=r[n]
return o(s)?ox:s}const r=Pe(e,t,ux)
return i(r)?r:ox}function Ya(e,t,n,r,o,s){const i=Pi(e,e.bag.gameControllerRecommendedRolloutRate),a=qa(e,t)
if(i&&a){const n=o?"":e.loc.string("ProductPage.Info.GameController.Title"),r=a?"ProductPage.Info.GameController.Recommended":"ProductPage.Info.GameController.Required",s=e.loc.string(r),i=W(t,QN),c=a?"ProductPage.Info.GameController.Recommended.Summary":"ProductPage.Info.GameController.Required.Summary",l=e.loc.string(c).replace(iA,i),u=[new lj(l,null,null,null)]
let d
const f=e.bag.gameControllerLearnMoreEditorialItemId
if((null==f?void 0:f.length)>0){const t=new nU(WF),n=a?"ProductPage.Info.GameController.Recommended.LearnMore":"ProductPage.Info.GameController.Required.LearnMore"
t.title=e.loc.string(n),t.pageUrl=`https://apps.apple.com/story/id${f}`,d=t}return new cj(n,u,s,d)}return null}function Ja(e,t,n,r,s,i){const a=Pe(e,t,"copyright")
if(o(a))return null
const c=new lj(a),l=s?"":e.loc.string("INFO_LIST_COPYRIGHT")
return new cj(l,[c])}function Za(e,t,n,r,o,s){const a=lt(e,t),c=ut(e,ZA)
if(!a||!c)return null
const l=o?"":e.loc.string("Annotations.ExternalPurchases.Title"),u=e.loc.string("YES")
let d
if(e.bag.externalPurchasesProductPageAnnotationUseAlternateCopy){const n=W(t,QN)
d=i(n)?e.loc.string("Annotations.ExternalPurchases.Expanded_NLD").replace("@@developerName@@",n):e.loc.string("Annotations.ExternalPurchases.Expanded.NoDeveloper_NLD")}else if((0,Gh.isSome)(e.bag.externalPurchasesProductPageAnnotationVariant)){const t=`Annotations.ExternalPurchases.Expanded.Variant${e.bag.externalPurchasesProductPageAnnotationVariant}`
d=e.loc.string(t)}else d=e.loc.string("Annotations.ExternalPurchases.Expanded")
const f=new lj(d),p=e.loc.string("Annotations.ExternalPurchases.Expanded.LearnMore"),h=dt(e,p,s.metricsPageInformation,s.locationTracker)
return new cj(l,[f],u,h)}function Ka(e,t,n,r,s,i){if(!function(e,t){var n
const r=Hl(e,t),o=new Set(["uses-non-webkit-browser-engine","is-custom-browser-engine-app"])
return null!==(n=null==r?void 0:r.some(e=>o.has(e)))&&void 0!==n&&n}(e,t))return null
const a=function(e,t,n){const r=e.bag.externalBrowserLearnMoreEditorialItemId
if(o(r))return null
const s=new nU(WF)
return s.title=e.loc.string("Action.LearnMore"),s.pageUrl=`https://apps.apple.com/story/id${r}`,od(e,s,{id:KR,targetType:m$,actionType:A$,pageInformation:t,locationTracker:n}),s}(e,i.metricsPageInformation,i.locationTracker)
let c=a
const l=s?"":e.loc.string("Annotations.ExternalBrowser.Title"),u=e.loc.string("Annotations.ExternalBrowser.Value.Summary"),d=e.loc.string("Annotations.ExternalBrowser.Value.Expanded"),f=[new lj(d,null,null,null)]
return new cj(l,f,u,c)}function Qa(e,t,n,r,o,s){return null}function Xa(e,t,n,r,i,a){const c=Te(e,t,"languageList")
if(o(c))return null
const l=c.length
if(l<1)return null
let u=null,d=null
switch(l){case 0:break
case 1:d=c[0]
break
case 2:d=e.loc.string("INFO_LIST_TWO_LANGUAGES_SUMMARY").replace("{first}",c[0]).replace("{second}",c[1])
break
default:const t=l-1
u=e.loc.string("INFO_LIST_MORE_LANGUAGES_SUMMARY").replace("{language}",c[0]).replace(xC,e.loc.formattedCount(t)),d=function(e,t){if(null===e||null===t)return null
if(0===e.length)return""
let n=e.length,r=""
return e.forEach((e,o)=>{null===e?n-=1:(r+=e,o<n-1&&(r+=t))}),r}(c,e.loc.string("CONJUNCTION_SEPARATOR"))}if(!s(d))return null
const f=new lj(d),p=i?"":e.loc.string("SUPPORTED_LANGUAGES")
return new cj(p,[f],u)}function ec(e,t,n,r,o,s){if(!z(t,"usesLocationBackgroundMode"))return null
const i=o?"":e.loc.string("INFO_LIST_LOCATION_TITLE"),a=e.loc.string("INFO_LIST_LOCATION_DESCRIPTION"),c=new lj(a)
return new cj(i,[c])}function tc(e,t,n){return Uh.context("capabilitiesFromData",()=>[nc(e,t),rc(e,t),cc(e,t),oc(e,t),sc(e,t),ic(e,t,n),ac(e,t)].filter(e=>e))}function nc(e,t){if(!Se(e,t,_L))return null
const n=e.loc.string("CAPABILITY_GAME_CENTER_TITLE"),r=new gB(e.loc.string("CAPABILITY_GAME_CENTER_EXPLANATION")),o=new Fj(r),s=nt(e,"resource://ProductCapabilityGameCenter",46,45)
return new mj(n,o,null,s)}function rc(e,t){if(!Se(e,t,"isSiriSupported"))return null
const n=e.loc.string("CAPABILITY_SIRI_TITLE"),r=new gB(e.loc.string("CAPABILITY_SIRI_EXPLANATION")),o=new Fj(r),s=nt(e,"resource://ProductCapabilitySiri",46,45)
return new mj(n,o,null,s)}function oc(e,t){if(!Se(e,t,"supportsPassbook"))return null
const n=e.loc.string("CAPABILITY_WALLET_TITLE"),r=new gB(e.loc.string("CAPABILITY_WALLET_EXPLANATION")),o=new Fj(r),s=nt(e,"resource://ProductCapabilityWallet",46,45)
return new mj(n,o,null,s)}function sc(e,t){if(!Wa(e,t))return null
const n=e.loc.string("CAPABILITY_MFI_CONTROLLERS_TITLE")
let r=null
const o=e.bag.gameControllerLearnMoreEditorialItemId
Pi(e,e.bag.gameControllerRecommendedRolloutRate)&&(null==o?void 0:o.length)>0&&(r=new nU(WF),r.title=e.loc.string("ProductPage.Capability.GameController.ActionTitle"),r.pageUrl=`https://apps.apple.com/story/id${o}`)
let s=r?e.loc.string("ProductPage.Capability.GameController.Explanation.WithNewlineActionTemplate"):e.loc.string("ProductPage.Capability.GameController.Explanation")
const i={};(null==r?void 0:r.title)&&(s=s.replace(_M,r.title),i[r.title]=r)
const a=new gB(s),c=new Fj(a,i),l=nt(e,"resource://ProductCapabilityController",46,45)
return new mj(n,c,null,l)}function ic(e,t,n){var r
const o=W(t,"familyShareEnabledDate")
if(!o||z(t,nM))return null
const s=new Date(o),i=new Date
if(!s||s>i)return null
const a=Se(e,t,VS),c=a&&Se(e,t,"hasFamilyShareableInAppPurchases")
let l=null;(null===(r=e.bag.familySubscriptionsLearnMoreEditorialItemId)||void 0===r?void 0:r.length)>0&&c&&(l=new nU(WF),l.title=e.loc.string("CAPABILITY_FAMILY_SHARING_ACTION_TITLE"),l.pageUrl=`https://apps.apple.com/story/id${e.bag.familySubscriptionsLearnMoreEditorialItemId}`)
const u=e.loc.string("CAPABILITY_FAMILY_SHARING_TITLE")
let d
if(c?d=l?"CAPABILITY_FAMILY_SHARING_SOME_SHAREABLE_IAPS_EXPLANATION_WITH_ACTION_TEMPLATE":"CAPABILITY_FAMILY_SHARING_SOME_SHAREABLE_IAPS_EXPLANATION":a||n||(d=l?"CAPABILITY_FAMILY_SHARING_PAID_APP_NO_IAPS_EXPLANATION_WITH_ACTION_TEMPLATE":"CAPABILITY_FAMILY_SHARING_PAID_APP_NO_IAPS_EXPLANATION"),!d)return null
let f=e.loc.string(d)
const p={};(null==l?void 0:l.title)&&(f=f.replace(_M,l.title),p[l.title]=l)
const h=new gB(f),w=new Fj(h,p),g=nt(e,"resource://ProductCapabilityFamilySharing",46,45)
return new mj(u,w,l,g)}function ac(e,t){if(!Se(e,t,"hasSafariExtension"))return null
const n=e.loc.string("CAPABILITY_SAFARI_EXTENSION_TITLE"),r=new gB(e.loc.string("CAPABILITY_SAFARI_EXTENSION_EXPLANATION")),o=new Fj(r),s=nt(e,"resource://ProductCapabilitySafariExtension",129,129)
return new mj(n,o,null,s)}function cc(e,t){if(!Se(e,t,YI))return null
const n=e.loc.string("CAPABILITY_SHAREPLAY_TITLE"),r=new gB(e.loc.string("CAPABILITY_SHAREPLAY_EXPLANATION")),o=new Fj(r),s=nt(e,"systemimage://shareplay"),i=U(jS)
return new mj(n,o,null,s,i)}function lc(e,t,n,r,s,i){if(r)return null
const a=Pe(e,t,"seller"),c=Ae(e,t,P_),u=Ae(e,t,wS),f=e.bag.enableSellerICPAnnotation&&!0
if(o(a))return null
const p=Pe(e,t,"sellerLabel")||e.loc.string(XA)
let h
if(f&&(0,Yh.isSome)(u)){const t=[],n=s?"":p,r=uc("filingNumber",e.loc.string("ProductPage.Info.ICPNumber.Title"),u),o=(0,Yh.isSome)(r)?a+"\n":a,i=new lj(o)
t.push(i),(0,Yh.isSome)(r)&&t.push(r),h=new cj(n,t,a,null)}else if((0,Yh.isSome)(c))h=function(e,t,n){const r=[],o={dunsNumber:"ProductPage.SellerInfo.DunsNumber.Title",address:"ProductPage.SellerInfo.Address.Title",phoneNumber:"ProductPage.SellerInfo.PhoneNumber.Title",email:"ProductPage.SellerInfo.Email.Title"},s=l(t,"isTrader"),i=d(t,z$),a=(null==i?void 0:i.length)>0?i:e.loc.string(XA),c=s?"ProductPage.SellerInfo.VerifiedSeller.Subtitle":"ProductPage.SellerInfo.UnverifiedSeller.Subtitle"
if(r.push(new lj(e.loc.string(c).replace("{seller}",a)+"\n")),!s)return new cj(n,r,a,null)
for(const n of Object.keys(o)){const s=uc(n,e.loc.string(o[n]),t);(0,Yh.isSome)(s)&&r.push(s)}return new cj(n,r,a,null)}(e,c,p)
else{const e=new lj(a)
h=new cj(s?"":p,[e])}return(0,Yh.isSome)(h),h}function uc(e,t,n){const r=d(n,e)
return(0,Yh.isSome)(r)?new lj(r,t,null,null):null}function dc(e,t,n,o,i,a){const c=Xl(e,t)
if(n||r(c)||r(c.fileSizeByDevice))return null
const l=e.loc.fileSize(c.fileSizeByDevice),u=[],d=i?"":e.loc.string("FILE_SIZE")
let f,p=c.fileSizeByDevice
if(s(c.maxEssentialInstallSizeInBytes)){const t=c.fileSizeByDevice+c.maxEssentialInstallSizeInBytes,n=e.loc.string(WC).replace(qC,e.loc.fileSize(t)),r=new lj(n)
u.push(r),f=new cj(d,u)}else if(s(c.maxInstallSizeInBytes)){const t=new lj(l,e.loc.string("INITIAL_APP_SIZE"))
u.push(t)
const n=e.loc.string(WC).replace(qC,e.loc.fileSize(c.maxInstallSizeInBytes)),r=new lj(n,e.loc.string("ADDITIONAL_CONTENT_AFTER_APP_INSTALL"))
u.push(r),p+=c.maxInstallSizeInBytes
const o=e.loc.string(WC).replace(qC,e.loc.fileSize(p))
f=new cj(d,u,o)}else{const e=new lj(l)
u.push(e),f=new cj(d,u)}return f}function fc(e,t,n,o,s,i){var a
const c=se(t,NE)
if(c.length<1)return null
const l=[]
for(const t of c){const n=W(t,z$),o=ft(e,t)
if(r(o))continue
const s=d(o,gx),i=d(o.recurringSubscriptionPeriod)
let a=e.loc.string("INFO_LIST_IAP_DURATION")
if((0,Yh.isSome)(i)){a=a.replace("{name}",n)
const t=Zn(0,i)
let r
switch(t.type){case"D":r="days"
break
case"W":r="weeks"
break
case"M":r="months"
break
case"Y":r="years"
break
default:a=`${n}`}null!==r&&(a=a.replace("{duration}",e.loc.formatDuration(t.period,r)))}else a=`${n}`
l.push(new lj(a,null,s))}const u=s?"":e.loc.string("INFO_LIST_IN_APP_PURCHASES")
let f
if((null===(a=e.bag.inAppPurchasesLearnMoreEditorialItemId)||void 0===a?void 0:a.length)>0){const t=new nU(WF)
t.title=e.loc.string("ProductPage.Info.InAppPurchases.LearnMore"),t.pageUrl=`https://apps.apple.com/story/id${e.bag.inAppPurchasesLearnMoreEditorialItemId}`,f=t}return new cj(u,l,e.loc.string("YES"),f)}function pc(e,t,n,r,o,s,i,a){const c=[]
for(const l of t){const t=l(e,n,r,o,s,i)
t&&(t.expandAction=null,c.push(t),a&&a(l,t,c.length-1))}return c}function hc(e,t){const n=Ae(e,t,wS),r=e.bag.enableSellerICPAnnotation&&(0,Yh.isSome)(n),o=Ae(e,t,P_),s=e.bag.enableSellerInfo&&(0,Yh.isSome)(o)
return r||s}function wc(e,t,n,r){const o=new rH(FA)
o.isHorizontal=!0
let s=null
s=n?t.slice(0,8):t
const a=[]
for(let t=0;t<s.length;t++){const n=s[t]
if(n.action=new xU(n.playerId),i(r)){const o="friendPlayer",s={pageInformation:r.destinationPageInformation,locationTracker:r.sourceLocationTracker,id:"",idType:XF,anonymizationOptions:{anonymizationString:`FRIEND${t+1}`}}
if(nn(0,n,{...s,kind:o,title:"",softwareType:null}),e.bag.productPageFriendsPlayingClickEventsEnabled){const t={...s,kind:o,targetType:r$,actionType:A$,softwareType:null}
od(e,n.action,t)}}a.push(n),i(r)&&ju(r.sourceLocationTracker)}if(o.items=a,o.mergeWhenFetched=!0,o.isHidden=0===o.items.length,o.batchGroup=uN,t.length>8){const n=new rH("smallGameCenterPlayer")
n.title=e.loc.stringWithCount("ProductPage.FriendsPlaying.SeeAllTitle",t.length),n.items=t.map(e=>(e.action=new xU(e.playerId),e)),n.rowsPerColumn=1
const s=new cH([n])
s.title=r.title
const i=new nU($$)
i.title=e.loc.string(XN),i.pageData=s,o.seeAllAction=i}return i(r)&&nn(0,o,{id:"",kind:null,softwareType:null,targetType:l$,title:r.title,pageInformation:r.sourcePageInformation,locationTracker:r.sourceLocationTracker,idType:XF,badges:{gameCenter:!0}}),o}function gc(e,t,n,s){return Uh.context("inAppPurchasesShelf",()=>{if(!function(e,t){return t!==GM}(0,e.host.platform))return null
if(o(t))return null
let i
if(i=cr(e)?re(t,$E):ne(t,UE),!i||!i.data.length)return null
if(!i.data.filter(function(e){return z(e,CO)===s.isForSubscriptions}).length)return null
const a={pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:l$,id:`${n.getSequenceId()}`,idType:XF},c=q(t,KF)
let l=kF
c&&(l=uL)
const u=bL,d=new rH(u)
let f=null
s.options&&(f=s.options.spotlightInAppProductIdentifier),function(e,t,n){const o=C$
for(const e of n.data){let n=ne(e,o)
n||(n={data:[t]}),r(e.relationships)&&(e.relationships={}),e.relationships[o]=n}}(0,t,i)
const p=[],h=function(e,t,n,r,o,s){const i=gl(e,t,{lockupOptions:{metricsOptions:r,offerStyle:n,skipDefaultClickAction:!0,artworkUseCase:1},contentUnavailable:function(e){return p.push(e),!1}})
return o&&bd(0,o,i),i}(e,i,l,a,f).filter(function(e){return e.productIdentifier===f&&(s.options.spotlightSection=new wJ(Y$,s.isForSubscriptions?yN:mN)),e.isSubscription===s.isForSubscriptions})
if(0===h.length&&0===p.length)return null
if(d.items=h,p.length){const r=new hQ(p,d.title,!1,u,l,null)
r.appBundleId=Pe(e,t,aF),s.isForSubscriptions?r.inAppShelfId=yN:r.inAppShelfId=mN,d.url=Pd(0,r,n)}let w
return s.isForSubscriptions?(d.title=e.loc.string("ProductPage.Section.Subscriptions.Title","Subscriptions"),w="subscription"):(d.title=e.loc.string("ProductPage.Section.InAppPurchases.Title"),w="iAP"),Fu(e,a,d.title),Bu(n.locationTracker),ju(n.locationTracker),d.isHorizontal=!0,n.addImpressionsToShelf(e,d,w),d})}function mc(e,t,n,r,i,a){return Uh.context(gM,()=>o(t)?null:function(e,t,n,r,o){return Uh.context("standardLinksShelf",()=>{const i=new rH("productPageLink"),a=[]
if(e.client.deviceType!==H$){const n=Pe(e,t,ME)
if(n){const t=new sU(n,!1),r=e.loc.string("DEVELOPER_WEBSITE")
a.push(new $j(r,t,IF,"safari"))}}const c=Pe(e,t,A_)
if(c){const t=new sU(c,!1),n=e.loc.string(tR)
a.push(new $j(n,t,T_,"hand.raised.fill"))}if(q(t,$A)){const n=function(e,t){const n=t.id,r=t.type
return s(t)&&s(n)&&s(r)?`${YU}:/${AG}?resourceType=${r}&resourceId=${n}`:null}(0,t)
if(n){const t=new nU($$)
t.pageUrl=n
const r=e.loc.string(oR)
a.push(new $j(r,t,zx,"doc.plaintext"))}}const l=d(Ae(e,t,P_),GC)
if((null==l?void 0:l.length)>0){const t=new sU(l,!1),n=e.loc.string(nR)
a.push(new $j(n,t,IF,"checkmark.seal"))}const u=e.bag.productPageReportProblemSADSubscriptionArray,f=t.id,p=u.includes(f),h=Je(e).isSystemAppFromData(t),w=t.type===x$,g=r&&!h,m=e.bag.productPageReportProblemSecondPartyAppArray.includes(f)
if(!w&&!m&&!o&&e.bag.reportProblemEnabled&&(p||g)){const n=function(e,t){const n=t.id,r=e.bag.productPageReportProblemURL
return s(n)&&s(r)?r.replace("{productId}",n):null}(e,t)
if((null==n?void 0:n.length)>0){const t=new sU(n,!1),r=e.loc.string(ay),o=new $j(r,t,"reportAProblem","exclamationmark.triangle",p?null:f)
a.push(o)}}return a&&a.length>0&&(i.items=a),n.addImpressionsToShelf(e,i,$_),i})}(e,t,n,r,a))}function yc(e,t,n,s){const i=il(e,t)
if(o(i))return null
const a=e.loc.string("BADGE_CATEGORY_HEADING"),c=new mW(I$,eN,{},"standard",a,i,null,i,a,kF)
if(new nU($$).title=W(t,QN),n&&"tv"!==e.client.deviceType){const n=xr(e,t,!0)
if(r(n))return null
c.artwork=Ba(e,n,"bb")}return c}function vc(e,t,n,r){const o=Ae(e,t,EC)
if(o){const t=su(0,e.host.clientIdentifier)
if(t){const n=p(o,t)
if(n){const t=f(n,NO),r=d(n,kA),o=d(n,mF),s=d(n,oM),i=e.loc.string("BADGE_CHART_POSITION_HEADING"),a=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_CHART_POSITION_TITLE").replace(EA,t.toString()),c=new mW(kC,kC,{position:e.loc.decimal(t)},S$,i,r,null,a,r,wN),l=ou(e,o,s)
if((0,Gh.isSome)(l)){const e=new nU(CD)
e.pageUrl=l,c.clickAction=e}return c}}}return null}function Ac(e,t,n,r){const o=W(t,_y)
if(o){const r={contentRating:o},s=function(e,t){switch(t){case 6:return"AgeRatingL"
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
default:return}}(0,Y(t,"contentRatingsBySystem.appsBrazil.rank"))
let i
s&&(r.contentRatingResource=s),i=n?e.loc.string("BADGE_AGE_RATING_YEARS"):e.loc.string("BADGE_AGE_RATING")
const a=e.loc.string("BADGE_AGE_RATING_HEADING"),c=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_AGE_RATING_TITLE")
return new mW(QO,QO,r,S$,a,i,null,o,c,wN)}return null}function Tc(e,t,n,r){return function(e,t,n,r){if(qa(e,t)){const t=e.loc.string(XO),n=e.loc.string("ProductPage.Badge.GameController.Recommended"),r=new mW(ZL,ZL,{},S$,t,n,null,null,n,wN)
return r.clickAction=Nc(e)?new BU(d$):new kU(new yW(Y$,d$)),r}return null}(e,t)}function Pc(e,t,n,r){return function(e,t,n,r){if(!Wa(e,t)||function(e,t){switch(za(e,t)){case UR:case AE:case vE:return!0
default:return!1}}(e,t)||qa(e,t))return null
{const t=e.loc.string(XO),n=e.loc.string(KL),r=new mW(ZL,ZL,{},S$,t,n,null,null,n,wN)
return r.clickAction=Nc(e)?new BU(d$):new kU(new yW(Y$,d$)),r}}(e,t)}function Ic(e,t,n,o){const i=oe(t,IF),a=e.loc.string("BADGE_DEVELOPER_HEADING"),c=W(t,QN),l=new mW(I$,IF,{},"standard",a,c,null,c,a,kF)
if(n&&"tv"!==e.client.deviceType){const t=xr(e,i,!0)
r(t)?l.artwork=nt(e,OC,26,26):l.artwork=Ba(e,t)}const u=ru(0,i)
if(s(u)){const n=new nU($$)
n.title=W(t,QN),n.pageUrl=u,od(e,n,{targetType:VF,id:i.id,actionType:A$,pageInformation:o.pageInformation,locationTracker:o.locationTracker}),l.clickAction=n}return l}function Sc(e,t,n,r){const o=Ae(e,t,GL)
if(o){const r=d(o,SO)
if(r&&r===bO){let r,o
r="Games"===H(t,Sb)[0]?e.loc.string("EDITORIAL_BADGE_GAMES"):e.loc.string("EDITORIAL_BADGE_APPS"),o=n?e.loc.string("EDITORS_CHOICE_RIBBON_HEADING"):e.loc.string("EDITORS_CHOICE_SINGLE_LINE")
const s=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_EDITORS_CHOICE"),i=new mW(Hx,Hx,{},S$,o,r,null,s,r)
return i.clickAction=Nc(e)?new BU(xF):new kU(new yW(Y$,E$)),i}}return null}function bc(e,t,r,o){const s=Te(e,t,"supportedLocales"),i=(a=s).length<=0?null:{tag:d(n(a,"0.tag")).split("-")[0].toUpperCase(),name:d(n(a,"0.name"))}
var a
if(!i)return null
const c={paragraphText:i.tag}
let l
const u=s.length
l=u>1?e.loc.string("BADGE_LANGUAGE_CAPTION").replace("{number_other_languages}",e.loc.formattedCount(u-1)):i.name
const f=e.loc.string("BADGE_LANGUAGE_HEADING")
return new mW(TM,WD,c,S$,f,l,null,null,l,wN)}function Cc(e,t,n,r){const o=be(e,t,gE),i=be(e,t,mE)
if(!s(o)||!s(i))return null
if(o<=0||i<=0||o>i)return null
const a=e.loc.string(OA),c=Ec(e,o,i,!1),l=Ec(e,o,i,!0),u=e.loc.string(OA),d={paragraphText:kc(e,o,i)}
return new mW(TM,Xg,d,"standard",a,c,null,l,u,wN)}function kc(e,t,n){return t===n?t<=32?e.loc.formattedCount(t):e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER_INDEFINITE_MIN_AND_MAX_LIMIT").replace(DC,e.loc.formattedCount(32)):n<=32?e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER_DEFINITE_LIMIT").replace(DC,e.loc.formattedCount(t)).replace(RA,e.loc.formattedCount(n)):e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER_INDEFINITE_MAX_LIMIT").replace(DC,e.loc.formattedCount(t)).replace(RA,e.loc.formattedCount(32))}function Ec(e,t,n,r){return 1===t&&1===n?e.loc.string("BADGE_PLAYERS_CAPTION_SINGLE"):1===t||r?e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER"):e.loc.string("BADGE_PLAYERS_CAPTION_REQUIRED")}function Oc(e,t,n,r){const o=j(t,qD)
let s=null
const i=Rs(e,t)
if(!i&&o&&o.value&&o.ratingCount){const t=f(o,LC),n=Math.round(10*t)/10,r=e.loc.decimal(n,1),i=f(o,PA),a=e.loc.formattedCount(i)
let c
c=e.loc.stringWithCount("ProductPage.BadgeRating.Caption.ShortTemplate",i).replace(xC,a)
const l=e.loc.stringWithCount("ProductPage.BadgeRating.Caption.LongTemplate",i).replace(xC,a).replace("{rating}",r),u=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_STAR_RATING").replace("{starCount}",r)
s=new mW(ZM,ZM,{rating:n,ratingFormatted:r},S$,c,c,l,u,c)}else{if(n)return null
const t=e.loc.string(DA)
if(i&&t!==DA)s=new mW(ZM,ZM,{},S$,null,t,null,t)
else if(!i){const t=e.loc.string("BADGE_NOT_ENOUGH_RATINGS_CAPTION")
s=new mW(ZM,ZM,{},S$,null,t,null,t)}}if(s){let t
return t=new BU(xF),s.clickAction=Nc(e)?t:new kU(new yW(Y$,E$)),s}return null}function Rc(e,t,n,r){return t?Uh.context("badgesFromLookupResponse",()=>{let o,s=!1
return z(t,KF)?o=mK:n?(o=vK,-1===o.indexOf(Sc)&&o.splice(1,0,Sc),s=!0):o=yK,function(e,t,n,r,o,s){const i=[]
for(const o of t){const t=o(e,n,r,s)
t&&i.push(t)}if(o&&i.some(e=>e.key===kC)){const e=i.findIndex(e=>e.key===eN)
e>=0&&i.splice(e,1)}return i}(e,o,t,n,s,r)}):null}function Dc(e,t){return t?t.map(t=>_c(e,t,WA)):[]}function _c(e,t,n){return Uh.context("titledParagraphFromVersionHistoryEntry",()=>{let r=d(t,qA);(0,Yh.isSome)(r)&&(r=r.trim())
const o=new Dj(r,n),s=d(t,HC),i=e.loc.string("VERSION_STRING_TEMPLATE")
o.primarySubtitle=n===WA?s:i.replace(zA,s)
const a=d(t,"releaseTimestamp")
if(a){const t=new Date(a)
o.secondarySubtitle=e.loc.relativeDate(t)}return o})}function Lc(e,t,n,a,u,p=!1){return Uh.context("createProductPageFromResponse",()=>{const h=D(t)
if(o(h))return null
h.type
const w=D(a[fQ]),g=i(w)?u:null,m=i(w)?null:u,y=function(e,t,n){var r
const o=D(t),i=o.type===x$
s(n)&&(n.iAdClickFields&&(t[tQ]=JSON.stringify(n.iAdClickFields)),n.iAdLineItem&&(t[nQ]=n.iAdLineItem))
const a=Mn(e,i?Nb:xx,o.id,t),c=new nj(a.pageUrl)
return null!==(r=null==n?void 0:n.webBrowser)&&void 0!==r&&r&&(c.param(Fb,nv),c.removeParam(ZO),a.pageUrl=c.build()),new fK(a,{rootPosition:0,locationStack:[]})}(e,t,n),A=xc(e,h,y,n,null,w,m,g,p)
y.metricsPageInformation.baseFields[FO]=_u(e,h,A.lockup.icon,null==n?void 0:n.clientIdentifierOverride),(dn(e,u$)||dn(e,$F))&&(y.metricsPageInformation.iAdInfo=new oQ(e,u$,oQ.createInitialSlotInfos(e,u$,null,null)))
const T=Vl(e,h)
Fn(e,A,y.metricsPageInformation,t=>{const n=jl(0,h,e.appleSilicon.isSupportEnabled),r=Zl(e,h,e.appleSilicon.isSupportEnabled,e.appleSilicon.isRosettaAvailable),o=Yl(0,T,e.client.deviceType,n,!1,r),s=Kl(0,T,e.client.deviceType,n,!1),a=T&&(o||s),c=function(e,t,n,r){if(!Sl(e,t))return!1
if(Ze(e,t,8838))return!1
const o=ql(0,n,jl(0,t,r),!1),s=Vl(e,t)
return o.some(e=>zl(0,s,e))}(e,h,e.client.deviceType,e.appleSilicon.isSupportEnabled)
t[MC]=a&&c?"runnable":a?"purchasable":UF,i(m)&&WB.shared.addReferralContextToMetricsFieldsIfNecessary(t)})
const P=vr(t,!0)
return function(e,t,n,a,u,p,h){var w
const g=Vl(e,n),m=n.type===x$,y=q(n,KF),A=!(1===g.length&&g[0]===H$),T=Rs(e,n),P=A&&!y&&!T,I=i(u)?u.clientIdentifierOverride:null,S=z(n,nM),b=t.lockup.offerDisplayProperties,C=!s(b)||b.isFree
let k
if(m){const t=ne(n,q$)
k=function(e,t,n){return t?Uh.context("bundleChildrenShelf",()=>{const r=g$,o=new rH(r)
o.isHorizontal=!0
const s=t.data.length
if(!s)return null
o.title=e.loc.stringWithCount("ProductPage.AppsInBundleShelf.Title",s)
const i=Sd(e,t,n,1,r,null,10750)
if(i.unavailableIds.length){const e=new hQ(i.unavailableIds,o.title,!1,g$,kF,null)
e.isBundleShelf=!0,o.url=Pd(0,e,n)}return Fu(e,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:l$,id:`${n.getSequenceId()}`,idType:XF},o.title),o.items=i.items,Bu(n.locationTracker),ju(n.locationTracker),o.rowsPerColumn=s<2?1:2,n.addImpressionsToShelf(e,o,BM),o}):null}(e,t,a)}k&&(t.shelfMapping[BM]=k)
const E=ne(n,x$),O=function(e,t,n){return t?Uh.context("bundleParentsShelf",()=>{const r=t.data.length
if(!r)return null
const o=g$,s=new rH(o)
s.isHorizontal=!0,s.title=e.loc.string("ProductPage.Section.IncludedInBundles.Title")
const i=Sd(e,t,n,1,o)
if(0===i.unavailableIds.length&&0===i.items.length)return null
if(s.items=i.items,i.unavailableIds.length){const e=new hQ(i.unavailableIds,s.title,!1,o,kF,null)
e.isBundleShelf=!0,s.url=Pd(0,e,n)}return s.rowsPerColumn=r<2?1:2,n.addImpressionsToShelf(e,s,"bundleParent"),s}):null}(e,E,a)
O&&(t.shelfMapping[vM]=O)
const R={productTitle:t.title,shouldShowRatingsAndReviews:P,isFirstPartyHideableApp:S,isBundle:m,isPreorder:y},D=function(e,t,n,r){return Uh.context("createReviewsShelves",()=>{const n={}
if(o(t))return n
const s=function(e,t){if(Nc(e))return!0
if(o(t))return!1
let n
return n=Je(e).isSystemAppFromData(t),!n||e.bag.enableSystemAppReviews}(e,t),a=Vl(e,t),c=ne(t,E$),u=_(c),p=j(t,qD)
p.ratingAverage=f(p,LC),p.adamId=t.id,p.isBundle=r.isBundle,p.supportUrl=Pe(e,t,xE)
const h=_l(e,t,{useCase:2}),w=1===a.length&&"tv"===a[0],g=Ks(e),m=l(p,IC),y=function(e,t,n,r){return Uh.context("createProductRatings",()=>{const n=Ms(e,e.client.guid,t)
return n.ratingAverage>0&&n.ratingCounts||r||(n.status=e.loc.string(bC)),n})}(e,p,u.length,m),A=function(e,t,n,r,o,s){return Uh.context(UA,()=>{const r=ks(e,t,n,0,o,s)
if(r){const e=new _W
return e.actionType=og,e.action=r,e}return null})}(e,t,r.productTitle,0,r.isBundle,w),T=function(e,t,n,r,o){return Uh.context("createWriteAReview",()=>{if(r)return null
{const r=new LW
r.writeReviewAction=Vs(e,t,o),r.supportAction=Es(e,n)
const s=new _W
return s.actionType="writeAReview",s.action=r,s}})}(e,t,p,w,h),P=function(e,t){return Uh.context("editorsChoiceItem",()=>{const n=d(Ae(e,t,qN),S$)
if(n){const r=new RW(n),o=Ae(e,t,GL)
if(o){const e=d(o,SO)
r.showsBadge=e&&e===bO}r.showsBadge||(r.title=e.loc.string(KO))
const s=new FW
return s.sourceType=Hx,s.review=r,s}return null})}(e,t),I=Ls(e,p,u,!0,P),S=Ls(e,p,u,!0,null),b=(function(e,t,n,r,o,s,i){Uh.context("createProductReviewActions",()=>{const a=new OW
return a.tapToRate=ks(e,t,n,0,o,s),a.writeReviewAction=Vs(e,t,i),a.supportAction=Es(e,r),a})}(e,t,r.productTitle,p,r.isBundle,w,h),!1),C=!1
if(w||0===u.length||Zs(e,e.client.guid,p,u,c.next,r.productTitle,h,b,C,t),r.shouldShowRatingsAndReviews){const o=new rH(xF)
o.title=g,o.items=[y],n.ratingsShelf=o
const a=[]
if(i(A)&&s&&a.push(A),i(T)&&s&&a.push(T),i(a)){const e=new rH(VC)
e.items=a,n.allReviewActionsShelf=e}let l=null
i(A)&&s&&(l=new rH(VC),l.items=[A],n.tapToRateActionsShelf=l)
let f=null
i(T)&&s&&(f=new rH(VC),f.items=[T],n.writeAReviewActionsShelf=f)
let m=null
i(I)&&i(S)&&(m=new rH(OR),m.items=I,m.isHorizontal=!0,n.allProductReviewsShelf=m)
let k=null
if(i(I)&&(k=new rH(OR),k.items=S,k.isHorizontal=!0,n.userProductReviewsShelf=k),"tv"===e.client.deviceType){const e=new rH(jC)
e.title=g
const t=[]
i(A)&&A.action instanceof EW&&s&&t.push(A.action),i(y.status)?t.push($s(y)):(t.push(Ns(y)),t.push(Fs(y))),e.items=t,n.purchasedRatingsAndReviewsComponentShelf=e}if("tv"===e.client.deviceType){const e=new rH(jC)
e.title=g
const t=[]
i(y.status)?t.push($s(y)):(t.push(Ns(y)),t.push(Fs(y))),e.items=t,n.notPurchasedRatingsAndReviewsComponentShelf=e}let E=null
i(P)&&(E=new rH(OR),E.items=[P],r.shouldShowRatingsAndReviews||(E.title=g),n.editorsChoiceProductReviewsShelf=E),!w&&u.length>0&&(n.ratingsShelf.seeAllAction=e.featureFlags.isEnabled(SC)?function(e,t,n,r,o,s=null,a,c,l){return r?Uh.context(bA,()=>{const u=new SW,f=Ys(e,t,n,r,o,s,a,c,PC,{ratingsShelf:null==l?void 0:l.ratingsShelf,reviewActionsShelf:null==l?void 0:l.allReviewActionsShelf})
if(u.title=null,u.adamId=d(r,eF),u.nextPage=f.paginationToken,u.initialSortOptionIdentifier=f.initialSortId,u.sortActionSheetTitle=f.sortActionSheetTitle,u.sortOptions=f.sorts,i(null==l?void 0:l.ratingsShelf)){const e=v(l.ratingsShelf)
e.id=dJ,e.seeAllAction=null,u.shelves.push(e)}if(i(null==l?void 0:l.allReviewActionsShelf)){const e=v(l.allReviewActionsShelf)
e.id=fJ,e.isPersonalized=!0,u.shelves.push(e)}u.shelves.push(f.reviewsShelf)
const p=new nU(E$)
return p.pageData=u,p.title=e.loc.string(XN),p}):null}(e,e.client.guid,t.id,p,u,c.next,b,C,n):Zs(e,e.client.guid,p,u,c.next,r.productTitle,h,b,C,t))}return n})}(e,n,0,R)
i(D)&&(t.shelfMapping[qx]=D.purchasedRatingsAndReviewsComponentShelf,t.shelfMapping[Wx]=D.notPurchasedRatingsAndReviewsComponentShelf,t.shelfMapping[xF]=D.ratingsShelf,t.shelfMapping[zD]=D.allReviewActionsShelf,t.shelfMapping[Gx]=D.allProductReviewsShelf,t.shelfMapping[yM]=D.userProductReviewsShelf,t.shelfMapping[$M]=D.editorsChoiceProductReviewsShelf,t.shelfMapping[Vx]=D.tapToRateActionsShelf,t.shelfMapping[jx]=D.writeAReviewActionsShelf)
const L=function(e){if(o(e.bag.ratingsAndReviewsLearnMoreEditorialId))return null
if(!e.props.enabled("ratingsAndReviewsLearnMoreFooter"))return null
const t=new rH("linkableText"),n=function(e){const t=e.loc.string(GA),n={},r=function(e){const t=e.bag.ratingsAndReviewsLearnMoreEditorialId
if(o(t))return null
const n=new nU(WF)
return n.title=e.loc.string(GA),n.pageUrl=`https://apps.apple.com/story/id${t}`,n}(e)
if((0,Yh.isNothing)(r))return null
n[t]=r
let s=e.loc.string("ProductPage.RatingsAndReviews.Footer")
s=s.replace(_M,t)
const i=new gB(s,UN)
return new Fj(i,n)}(e)
return(0,Yh.isNothing)(n)?null:(t.items=[n],t)}(e);(0,Yh.isSome)(L)&&(t.shelfMapping[CN]=L)
const x=function(e,t,n,r){return Uh.context(gM,()=>function(e,t,n,r,o,s){return Uh.context("standardMostRecentVersionShelf",()=>{if(!n&&!r&&!o){const n=Te(e,t,Ax)
if(n.length>1&&Dc(e,n).length>0){const r=new rH(HA)
r.title=e.loc.string(VA)
const o=_c(e,n[0],jA)
if(r.items=[o],s.addImpressionsToShelf(e,r,Ax),r)return e.client.deviceType!==W$&&(r.seeAllAction=function(e,t,n,r){return Uh.context("versionHistorySeeAllAction",()=>{const o=function(e,t,n){return Uh.context("versionHistoryPageAction",()=>{const r=Dc(e,t)
let o
if(r.length>0){const t=new rH(HA)
t.items=r
const s=new cH([t])
s.title=e.loc.string("VERSION_HISTORY_PAGE_TITLE","Version History"),e.client.deviceType!==W$&&(s.presentationOptions=[Ex])
const i=Nn(e,"VersionHistory",n,"")
Fn(e,s,i)
const a=new nU(Ax)
a.title=e.loc.string("ACTION_VERSION_HISTORY_SEE_ALL"),a.pageData=s,o=a}return o})}(e,t,n)
return sd(e,o,null,{pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker}),o})}(e,n,t.id,s)),r}}return null})}(e,t,r.isFirstPartyHideableApp,r.isBundle,r.isPreorder,n))}(e,n,a,{isFirstPartyHideableApp:S,isBundle:m,isPreorder:y})
x&&(t.shelfMapping[fF]=x),t.shelfMapping[AM]=function(e,t,n){return Uh.context("textCardShelfFromResponse",()=>(o(t),null))}(0,n)
const N=Pe(e,n,aF)
if(e.bag.enablePrivacyNutritionLabels&&!di(e,n.id)&&!fi(e,N)){const i=function(e,t,n,r){return Uh.context("privacyShelf",()=>{if(o(t))return null
const s=new rH(p$)
s.title=e.loc.string(qO)
const i=xa(e,t,!1,!1,n,r)
return s.items=[i],e.client.deviceType!==W$&&"tv"!==e.client.deviceType&&(s.seeAllAction=$a(e,t,FM,n,r,null)),s})}(e,n,a.metricsPageInformation,a.locationTracker),c=function(e,t,n){return Uh.context(gM,()=>{if(o(t))return null
const r=j(t,T_)
if(o(r))return null
const s=new rH(YO),i=e.loc.string(qO)
Fu(e,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:vC,id:`${n.getSequenceId()}`,idType:XF},i)
const a=Ca(e,r,t,rF,!0,n.metricsPageInformation,n.locationTracker)
return 0===a.length?null:(s.items=a,a.length<=2&&(s.presentationHints={isLowDensity:!0}),s.title=i,n.addImpressionsToShelf(e,s,"appPrivacy"),Bu(n.locationTracker),ju(n.locationTracker),s.title=null,s)})}(e,n,a)
if(s(i)&&s(c)){t.shelfMapping[p$]=i,s(c)&&(t.shelfMapping[a$]=c)
const l=function(e,t,n,i){return Uh.context(gM,()=>{if(o(t))return null
const a=Fa(e,t,!1,FM,n,i)
if((1===a.length&&a[0].identifier===wC||0===a.length)&&"tv"!==e.client.deviceType)return null
const c=new rH(YF),l=function(e,t,n,o){return Uh.context("privacyFooterFromData",()=>{const t=function(e,t,n,o){let s
const i=e.loc.string(gC),a={},c=Ma(e,n,o)
r(c)?s=e.loc.string(mC):(s=e.loc.string(sA),s=s.replace(_M,i),r(c)?s=e.loc.string(mC):a[i]=c)
const l=new gB(s,UN)
return new Fj(l,a)}(e,0,n,o),i=function(e,t,n,r){if("tv"!==e.client.deviceType)return[]
const o=[],i=Ma(e,n,r)
s(i)&&o.push(i)
const a=Na(e,n,r)
return s(a)&&o.push(a),o}(e,0,n,o)
return new iK(t,i,[].length)})}(e,0,n,i)
return c.items=[l],c})}(e,n,a.metricsPageInformation,a.locationTracker)
s(l)&&(t.shelfMapping[YF]=l)}}const F=new dK,$=new dK,B=new dK,G=new dK,V=new dK,H=du(e,n),Y=function(e,t,n,o,s,i,a,c){return Uh.context(gM,()=>{let l
switch(e.client.deviceType){case W$:l=function(e,t,n,o){return Uh.context(JA,()=>{let s
const i=hc(e,t)?hK:pK,a=pc(e,i,t,n,!1,!1,o,null)
return a.length>0&&(s=new rH(hL),s.items=a,r(o)||o.addImpressionsToShelf(e,s,k$)),s})}(e,t,n,o)
break
case"tv":l=function(e,t,n,o,s,i,a){return Uh.context("tvInformationShelf",()=>{let c
const l=pc(e,wK,t,n,!1,!1,o,a),u=function(e,t,n){return Uh.context("productCapabilitiesAsAnnotations",()=>{const r=[],o=tc(e,t,n)
for(const e of o){const t=e.title,n=e.caption.styledText.rawText
if((null==t?void 0:t.length)>0&&(null==n?void 0:n.length)>0){const e=new lj(n),o=new cj(t,[e])
r.push(o)}}return r})}(e,t,i).concat(pc(e,gK,t,n,!1,!1,o,a)),d=ut(e,ZA),f=pc(e,d?[Za]:[fc],t,n,!1,!0,o,a),p=[]
if(l.length>0){const t=new aj(e.loc.string(BC),l,s)
p.push(t)}if(u.length>0){const t=new aj(e.loc.string(UC),u,s)
p.push(t)}if(f.length>0){const t=d?e.loc.string("ProductPage.Section.ExternalPurchases.Title"):e.loc.string("ProductPage.Section.TopInAppPurchases.Title"),n=new aj(t,f,!0)
p.push(n)}return p.length>0&&(Nc(e)?(c=new rH("annotationGroup"),c.items=p,c.background={type:nF,color:pQ},r(o)||o.addImpressionsToShelf(e,c,k$)):(c=new rH("informationContainer"),c.items=[new uj(p)],r(o)||o.addImpressionsToShelf(e,c,k$))),c})}(e,t,n,o,c,a,s)
break
default:l=function(e,t,n,o,s,i){return Uh.context(JA,()=>{let a
const c=hc(e,t)?hK:pK,l=pc(e,c,t,n,s,!1,o,i)
return l.length>0&&(a=new rH(hL),a.title=e.loc.string(BC),a.items=l,r(o)||o.addImpressionsToShelf(e,a,k$)),a})}(e,t,n,o,i,s)}return l})}(e,n,S,a,(n,r,o)=>{var i,a
if(n===Ha&&(F.setShelfId(k$,o),F.annotation=r),n===Va&&s(t.banner)){s(t.banner.fullProductAction)&&(t.banner.action=t.banner.fullProductAction)
const n=t.banner.action
s(n)&&(Nc(e)?n instanceof BU&&(null===(i=n.shelfId)||void 0===i?void 0:i.length)>0&&n.shelfId===k$&&n.indexId===Ux&&(n.index=o):n instanceof kU&&(null===(a=n.section.shelfId)||void 0===a?void 0:a.length)>0&&n.section.shelfId===k$&&n.indexId===Ux&&(n.index=o))}n===Xa&&($.setShelfId(k$,o),$.annotation=r),n===dc&&(B.setShelfId(k$,o),B.annotation=r),n===Ga&&(G.setShelfId(k$,o),G.annotation=r),n===Qa&&(V.setShelfId(k$,o),V.annotation=r)},H,C,!1)
Y&&(t.shelfMapping[k$]=Y)
const J=function(e,t,n,r){if(!ar(e))return null
let s=function(e,t){return c(e.views,[t,iN])}(t,kE)
if(o(s)&&(s=se(t,O$)),o(s))return null
const i={pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,recoMetricsData:M(re(t,kE))},a=s.some(e=>e.type===f$),l=a?"ProductPage.Section.AppEventsAndOffers.Title":"ProductPage.Section.AppEvents.Title",u=e.loc.string(l),d=a?"EventsAndOffers":"Events"
Fu(e,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,recoMetricsData:i.recoMetricsData,targetType:l$,id:d,idType:UF},u)
const f=wr(e,s,t,!1,!1,i,!1,!1,!1,!1)
Ar(f.nextAppEventPromotionStartDate,r)
const p=f.appPromotions
if(0===p.length)return Bu(i.locationTracker),null
const h=ii(e,p,u)
return n.addImpressionsToShelf(e,h,l$,d,UF,i.recoMetricsData),Bu(i.locationTracker),ju(i.locationTracker),h}(e,n,a,p)
if(s(J)&&(t.shelfMapping[s$]=J),H){const r=function(e,t,n){if(o(t))return null
const r=d(Ae(e,t,qN),S$)
if(r){const t=e.loc.string("APP_STORE_EDITORS_ATTRIBUTION"),o=new qj(r,t),s=new rH(uF)
return s.items=[o],n.addImpressionsToShelf(e,s,uF),s.background={type:nF,color:U(rR)},s}return null}(e,n,a)
r&&(t.shelfMapping[uF]=r)}t.shelfMapping[XM]=mc(e,n,a,!1,0,H),t.shelfMapping[GN]=mc(e,n,a,!0,0,H),t.shelfMapping[i_]=function(e,t,n){return Uh.context(gM,()=>{if("tv"!==e.client.deviceType)return null
if(o(t))return null
const r=new rH(TM)
r.isHorizontal=!1
const s=function(e,t){return t?Uh.context("externalProductLinksAsParagraphsFromData",()=>{const n=[],r=Pe(e,t,ME)
if(r){const t=e.loc.string("DEVELOPER_WEBSITE_WITH_URL").replace("{URL}",r),o=new mB(t)
o.alignment=TF,n.push(o)}return n}):null}(e,t)
return s&&s.length>0&&(r.items=s),Nc(e)&&(r.background={type:nF,color:pQ}),n.addImpressionsToShelf(e,r,$_),r})}(e,n,a)
const Z=function(e,t,n,r){return Uh.context("capabilitiesShelf",()=>{if(o(t))return null
let s
const i=tc(e,t,n)
return i.length>0&&(s=new rH("productCapability"),s.title=e.loc.string(UC),s.items=i,r.addImpressionsToShelf(e,s,"supports")),s})}(e,n,C,a)
Z&&(t.shelfMapping[d$]=Z)
const K=null!==(w=null==u?void 0:u.webBrowser)&&void 0!==w&&w
if(!K){const r=ne(n,sD),o=function(e,t,n){return Uh.context("smallStoryShelf",()=>{if(!t||!t.data.length)return null
const r={pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:l$,id:`${n.getSequenceId()}`,idType:XF},o=e.loc.string(NA)
Fu(e,r,o)
const s=[],i={metricsLocationTracker:r.locationTracker,metricsPageInformation:r.pageInformation,filterOutMediaCardKinds:new Set([l_])},a=vd(e,t.data,zN,o,null,i,function(e){return s.push(e.id),!1})
if(Array.isArray(a.items)&&(a.items=a.items.filter(e=>!(e instanceof UH)||gd(0,e.media.kind,zN))),a.isHorizontal=!0,s.length){const e=new hQ(s,a.title,!1,zN)
a.url=Pd(0,e,n)}return Bu(n.locationTracker),n.addImpressionsToShelf(e,a,dF),ju(n.locationTracker),a})}(e,r,a)
o&&(t.shelfMapping[dF]=o)}const Q={isPreorder:y},X=new dK,ee=function(e,t,n,r){return Uh.context("friendsPlayingShelf",()=>{if(o(t))return null
const s=t.id
if(o(s))return null
if(!Se(e,t,_L))return null
if(r.isPreorder)return null
const i=e.loc.string("ProductPage.Section.FriendsPlaying.Title","Playing This Game"),a={pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:l$,id:`${n.getSequenceId()}`,idType:XF}
Fu(e,a,i)
const c=new rH(FA)
c.eyebrow=e.loc.uppercased(e.loc.string(PD)),c.eyebrowArtwork=nt(e,F_,16,16),c.title=i,c.isHidden=!0,c.isHorizontal=!0,c.items=[],c.mergeWhenFetched=!0
const l=new hQ([],c.title,!1,null,null,null)
c.url=`${YU}:/${cG}/${QU}/?${rV}=true&${LG}=${s}&${bV}=${Id(l,n,n.metricsPageInformation)}`,c.batchGroup=uN,n.addImpressionsToShelf(e,c,i$),Bu(n.locationTracker),ju(n.locationTracker)
const u=new nU($$)
return sd(e,u,null,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker}),c})}(e,n,a,Q)
ee&&(t.shelfMapping[i$]=ee,X.setShelfId(i$))
const te=function(e,t,n,r){return Uh.context("achievementsShelf",()=>{if(o(t))return null
if(r.isPreorder)return null
if(!Se(e,t,_L))return null
const s=Ce(e,t),i=he(t,s,aF)
if(o(i))return null
const a=e.loc.string("ProductPage.Section.Achievements.Title",xA),c=new rH(MA)
c.eyebrow=e.loc.uppercased(e.loc.string(PD)),c.eyebrowArtwork=nt(e,F_,16,16),c.title=a,c.isHorizontal=!0,c.items=[],c.mergeWhenFetched=!0
const l=new hQ([],c.title,!1,null,null,null)
return l.sourceLocationTracker=n.locationTracker,l.destinationPageInformation=n.metricsPageInformation,c.url=`${YU}:/${cG}/${QU}/?${oV}=true&${VG}=${i}&${bV}=${Id(l,n,n.metricsPageInformation)}`,c.batchGroup=uN,ju(n.locationTracker),c})}(e,n,a,{isPreorder:y})
if(te&&(t.shelfMapping[zF]=te),!h&&!K){const r=function(e,t,n){return Uh.context("moreByDeveloperShelf",()=>{if(o(t))return null
const r=ru(0,oe(t,IF)),s=W(t,QN),i=ne(t,oD)
if(!i||0===i.data.length)return null
const a=e.loc.string("ProductPage.Section.MoreByDeveloper.TitleTemplate").replace("{developer}",s)
let c
switch(Fu(e,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:l$,id:`${n.getSequenceId()}`,idType:XF},a),e.client.deviceType){case H$:case"tv":c=SF
break
default:c=g$}const l=new rH(c)
l.title=a
const u=Sd(e,i,n,kl(0,c),c,null)
if(!u)return null
if(l.items=u.items,u.unavailableIds&&u.unavailableIds.length){const e=new hQ(u.unavailableIds,l.title,!1,c,null)
l.url=Pd(0,e,n)}{const t=new nU($$)
t.pageUrl=r,t.title=e.loc.string(XN),sd(e,t,t.pageUrl,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker}),l.seeAllAction=t}return l.isHorizontal=!0,i.data.length<2?l.rowsPerColumn=1:l.rowsPerColumn=2,n.addImpressionsToShelf(e,l,IF),Bu(n.locationTracker),ju(n.locationTracker),l})}(e,n,a);(0,Yh.isSome)(r)&&(t.shelfMapping[jF]=r)}if(!h&&!K){const r=function(e,t,n){return Uh.context("similarItemsShelf",()=>{var r
if(o(t))return null
const s=ne(t,px)
if(o(s))return null
const a=du(e,t),c=a?e.loc.string("Arcade.ProductPage.MoreFromAppleArcade"):e.loc.string("ProductPage.Section.SimilarItems.Title"),l=t$,u=JL
let d,f
switch(Fu(e,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:l,id:fK.similarItemsShelfId,idType:u},c),e.client.deviceType){case"tv":d=SF,f=!1
break
case H$:d=SF,f=!0
break
default:d=g$,f=!0}const p=new rH(d)
p.title=c
const h=M(s),w=Sd(e,s,n,kl(0,d),d,null,null,h)
if(!w)return null
p.items=w.items
const g=dn(e,u$),m=Nn(e,"SimilarItems",t.id,""),y=s.data.map(e=>e.id),v=new hQ(y,p.title,f,d,null,null),A=function(e,t,n,r,o){const s=`${YU}:/${cG}/${QU}/`+Id(n,r,o),i=new nj(s)
return i.param(FV,QV),i.param(LG,t),i.build()}(0,t.id,v,n,m)
if(p.refreshUrl=A,i(w.unavailableIds)||g){const e=new hQ(null!==(r=w.unavailableIds)&&void 0!==r?r:[],p.title,f,d,null,null,p.refreshUrl,h)
if(p.url=Pd(0,e,n,m),g){const e=new nj(p.url)
e.param(MV,qF),e.param(NV,u$),e.param(LG,t.id),p.url=e.build()}}return p.isHorizontal=!0,s.data.length<2?p.rowsPerColumn=1:p.rowsPerColumn=a?2:3,n.addImpressionsFieldsToSimilarItemsShelf(e,p,l,u),Bu(n.locationTracker),ju(n.locationTracker),p})}(e,n,a);(0,Yh.isSome)(r)&&(t.shelfMapping[t$]=r)}if(y&&!e.bag.arePreordersCancellable){const r=function(e,t,n){return Uh.context("preorderShelf",()=>{if(o(t))return null
const r=new rH(DF),s=e.loc.string("BADGE_PREORDER_TERMS"),i=new Bj(s)
return r.items=[i],n.addImpressionsToShelf(e,r,DN),r})}(e,n,a)
r&&(t.shelfMapping[DF]=r)}else{const r=gc(e,n,a,{isForSubscriptions:!0,options:u})
r&&(t.shelfMapping[yN]=r)
const o=gc(e,n,a,{isForSubscriptions:!1,options:u})
o&&(t.shelfMapping[mN]=o)}t.title
const ie=function(e,t,n,r){return Uh.context("createActionLinks",()=>(o(t),null))}(0,n)
ie&&(t.shelfMapping[ER]=ie)
const ae=function(e,t,n,r){return Uh.context("productMediaShelves",()=>{if(o(t))return null
const s=(e.client.deviceType,null),a=(e.client.deviceType,null),c=_e(e,t),l=Bl(e,t,11,s,c,n),u=Nl(e,t,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}},a)
let d=null
if(u)for(const e of l)if(e.mediaPlatform.isEqualTo(u.mediaPlatform)){d=e
break}let f=null
if(d){const e=d.mediaPlatform.appPlatform
if(e===U$||e===MF)for(const e of d.items){const t=e.screenshot
if(f=t.width/t.height,f<1)break}}const p=[],h=[]
if(d&&u&&u.videos)for(const n of u.videos){const o=new wj
o.video=n
const s=n.preview.width/n.preview.height,i=null===f||Math.abs(s-f)<.01,a=d.mediaPlatform.isEqualTo(u.mediaPlatform)
i&&a?p.push(o):h.push(n)
const c={pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker,id:t.id,isAdvert:!!r.metricsPageInformation.iAdInfo&&r.metricsPageInformation.iAdInfo.iAdIsPresent}
kr(e,n,c)}d&&(d.items=p.concat(d.items))
let w=[],g={}
for(let n=0;n<l.length;n++){const o=l[n],s=`product_media_${o.mediaPlatform.appPlatform}_${o.mediaPlatform.supplementaryAppPlatforms.join("_")}`
w.push(new wJ(Y$,s))
const a=new rH(BA,null,o.items)
a.isHorizontal=!0
let c=!1,u=ni(0,o.items[0])
for(const e of o.items)if(i(e.screenshot)&&e.screenshot.isPortrait()||i(e.video)&&e.video.preview.isPortrait()){u=ni(0,e),c=!0
break}a.contentsMetadata={type:"productMedia",platform:o.mediaPlatform,allPlatforms:o.allPlatforms,hasPortraitMedia:c,expandProductMediaAction:null,viewProductMediaGalleryAction:(t.id,null),aspectRatio:u},r.addImpressionsToShelf(e,a,G$),0===n&&"tv"!==e.client.deviceType&&(a.title=e.loc.string(mA)),g[s]=a}return h.length>0&&(g[JF]=function(e,t,n){return Uh.context("videoShelf",()=>{if(!t||0===t.length)return null
let r
return Nc(e)?(r=new rH(BA),r.title=e.loc.string(YA),r.items=t.map(e=>{const t=new wj
return t.video=e,t})):(r=new rH(sR),r.title=e.loc.string(YA),r.items=t.map(e=>new jj(e,!0,UN,null,null,!0))),r.isHorizontal=!0,n.addImpressionsToShelf(e,r,JF),r})}(e,h,r)),{sectionMappings:w,shelfMapping:g}})}(e,n,I,a)
t.shelfMapping={...t.shelfMapping,...ae.shelfMapping}
{const e=H?QL:XL,n=ba(0,e)
t.shelfMapping[e]=n}!function(e,t,n){if(t&&t.spotlightSection){const e=t.spotlightInAppProductIdentifier
if(e&&t.spotlightSection){const r=n.shelfMapping[t.spotlightSection.shelfId]
if(!r)return
if(r.presentationHints={isInProductPageSpotlight:!0},bd(0,e,r.items),r.url){const t=new nj(r.url)
t&&(r.url=t.param(jG,e).build())}}}}(0,u,t)
const ce={},le=WD,ue=WO,de=eN,fe=i$,pe=RC
ce[QO]=F,ce[le]=$,ce[ue]=B,ce[de]=G,ce[fe]=X,ce[pe]=V,t.badges&&Ua(e,t.badges,ce,a),null!=t.shelfMapping[VF]&&Ua(e,Bc(e,t.shelfMapping[VF]),ce,a),Mc(e,t,ae.sectionMappings,H,u)}(e,A,h,y,n,P,p),A.pageRefreshPolicy=Tr(e,P),A.isIncomplete=!1,A.alwaysAllowReviews=Ds(e,h),A})}function xc(e,t,n,a,c,l,u,f,p=!1){return Uh.context("createProductPageSidePack",()=>{let p
s(a)&&(p=a.clientIdentifierOverride)
const h=t.id,w=W(t,z$),g=z(t,nM),m=Rs(e,t),y=du(e,t),v={pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,id:h,isAdvert:!!n.metricsPageInformation.iAdInfo&&n.metricsPageInformation.iAdInfo.iAdIsPresent},A=new BW,T=new Tj,P=q(t,KF)
P&&s(n)&&s(n.metricsPageInformation)&&(n.metricsPageInformation.offerType=DN,n.metricsPageInformation.offerReleaseDate=gt(0,t)),T.adamId=h,T.bundleId=d(t,aF),A.uber=function(e,t,n){Ll(e,t,n)
const r=du(e,t),i=function(e,t){return t&&!0}(0,r)?jD:Gm,a=new aZ(i)
if(a.artwork=eu(e,t,{supportsArcade:r}),a.compactArtwork=eu(e,t,{supportsArcade:r,prefersCompactVariant:!0}),a.video=tu(e,t,21),s(a.video)&&(a.video.playbackId=function(e){return`ProductPage.${e.id}.productUberVideoPlaybackId`}(t)),r&&o(a.video)&&o(a.artwork)){const r=Bl(e,t,11,(e.client.deviceType,null),_e(e,t),n)
if(r.length>0&&r[0].items.length>0){const e=r[0].items[0]
a.video=e.video,a.artwork=e.screenshot}}return o(a.compactArtwork)&&(a.compactArtwork=a.artwork),a.isValidUber(!1)?a:null}(e,t,p)
const I=A.uber&&A.uber.style===jD
c||(T.icon=_l(e,t,{useCase:10},p)),A.title=w,A.isIncomplete=!0,T.title=w,T.subtitle=nl(e,t),T.developerTagline=Pe(e,t,_N),A.regularPriceFormatted=W(t,"regularPriceFormatted"),A.logoArtwork=function(e,t){let n=null,r=null
if("tv"!==e.client.deviceType)return null
n=Rm,r="bb"
const o=Ae(e,t,n)
return s(o)&&s("bb")?El(e,o,{cropCode:"bb",useCase:0,withJoeColorPlaceholder:!0}):null}(e,t),A.navigationBarIconArtwork=null,m||(T.rating=Y(t,xy)),T.children=el(e,t,{metricsOptions:v,artworkUseCase:1})
const S=function(e,t,n,r,o,a,c){var l
const u=ft(e,t),d=Pe(e,t,aF),f=q(t,KF),p=ht(e,u,t,f,!1,_u(e,t,n,null==a?void 0:a.clientIdentifierOverride),o,rF,c,a.webBrowser)
let h
if(i(p)){s(a)&&(p.lineItem=a.iAdLineItem)
const n=i(a)?a.clientIdentifierOverride:null
h=vt(e,p,t,f,o,rF,!1,n),s(a)&&(null===(l=a.externalDeepLinkUrl)||void 0===l?void 0:l.length)>0&&i(h)&&(h=ot(e,h,p.adamId,d,a.externalDeepLinkUrl,!1,o))}return{buttonAction:h,offerAction:p}}(e,t,T.icon,0,v,a,u)
if(T.buttonAction=S.buttonAction,P){let n
A.theme=sE
let r=null
if(y)n="",r=e.loc.uppercased(Tu(e,t,e.loc.string(NC)))
else if(n=e.bag.arePreordersCancellable?e.loc.string(NC):e.loc.string("Offer.Expanded.Title.Preorder"),s(S.offerAction.expectedReleaseDate)){const n=eR,o=e.loc.formatDate(n,S.offerAction.expectedReleaseDate),s=e.loc.string("PREORDER_EXPANDED_OFFER_SUBTITLE").replace(_C,o)
r=Tu(e,t,s)}A.expandedOfferDetails=new vW(n,r)}let b,C
I&&y&&(A.theme=h$),I&&y?(b=h$,C=s_):(b=cN,C=rF)
const k=y?UL:C$
let E
T.offerDisplayProperties=bt(e,S.offerAction,k,t,P,0,b,C,null,null,rF,!1,!1),A.titleOfferDisplayProperties=bt(e,S.offerAction,k,t,P,0,"colored","productPage",null,null,rF)
const O=oe(t,IF),R=ru(0,O)
s(R)&&(E=new nU($$),E.title=W(t,QN),E.pageUrl=R,od(e,E,{targetType:j$,id:O.id,actionType:A$,pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker})),A.developerAction=E,A.shareAction=Ps(e,t,n.metricsPageInformation,n.locationTracker),T.tertiaryTitle=rl(e,t),T.tertiaryTitleAction=ol(e,t),T.tertiaryTitleArtwork=null
const D={appPlatforms:Vl(e,t),clientIdentifierOverride:p,offerButtonShouldBeDisabled:!1,productTitle:A.title,metricsPageInformation:n.metricsPageInformation,metricsLocationTracker:n.locationTracker,webBrowser:a.webBrowser}
A.banner=function(e,t,n){let r=null,s=null,i=null,a=null,c=null,l=!1,u=null
const d=Se(e,t,ug),f=Se(e,t,dg)
if((d||f)&&(r=e.loc.string("APP_UPDATE_REQUIRED_IOS"),n.offerButtonShouldBeDisabled=!0),null===r&&Ze(e,t,1024)&&(r=e.loc.string("OFFER_WATCH_ONLY_BANNER"),n.offerButtonShouldBeDisabled=!0),null===r&&!Sl(e,t)){if(r=e.loc.string(pA),Nc(e)){const t=new BU(k$)
t.title=e.loc.string(Bx),t.indexId=Ux,i=t}else{const t=new yW(Y$,k$),n=new kU(t)
n.title=e.loc.string(Bx),n.indexId=Ux,i=n}r=e.loc.string(Z_).replace(K_,i.title),n.offerButtonShouldBeDisabled=!0}if(null===r&&Ze(e,t,36)&&(r=e.loc.string(hA),n.offerButtonShouldBeDisabled=!0),Ze(e,t,512)){const n=Wl(e,t,e.appleSilicon.isSupportEnabled)
switch(e.client.deviceType){case H$:r=e.loc.string("UNSUPPORTED_MACOS_VERSION").replace(wM,n)
break
case U$:case _$:r=e.loc.string("UNSUPPORTED_IOS_VERSION").replace(wM,n)
break
case"tv":r=e.loc.string("UNSUPPORTED_TVOS_VERSION").replace(wM,n)
break
case W$:const o=Pe(e,t,$R)
r=e.loc.string("UNSUPPORTED_WATCHOS_VERSION").replace(wM,o)
break
case v$:r=e.loc.string("UNSUPPORTED_VISIONOS_VERSION").replace(wM,n)
break
default:r=e.loc.string(hA)}}if(Ze(e,t,128))if(n.offerButtonShouldBeDisabled=!0,r=e.loc.string(pA),Nc(e)){const t=new BU(k$)
t.title=e.loc.string(Bx),t.indexId=Ux,i=t,r=e.loc.string(Z_).replace(K_,t.title)}else{const t=new yW(Y$,k$),n=new kU(t)
n.title=e.loc.string(Bx),n.indexId=Ux,i=n,r=e.loc.string(Z_).replace(K_,n.title)}if(Ze(e,t,8192)){if(Nc(e)){const t=new BU(k$)
t.title=e.loc.string(Bx),t.indexId=Ux,i=t}else{const t=new yW(Y$,k$),n=new kU(t)
n.title=e.loc.string(Bx),n.indexId=Ux,i=n}r=e.loc.string(Z_).replace(K_,i.title)}const p=z(t,KF)
wu(e,t)&&(r=p?e.loc.string("ProductPage.WatchOS.PreOrderRequiresiPhone"):e.loc.string("UNSUPPORTED_COMPANION_CONFIGURATION","Requires iPhone"),n.offerButtonShouldBeDisabled=!0)
const h=Pe(e,t,$R)
if(null===r&&n.clientIdentifierOverride===_B&&yu(e,h)&&(r=e.loc.string("ProductPage.Banner.PairedWatchOSVersionBelowMinimum").replace(wM,h)),me(e,t,HM)){const t=e.loc.string("BANNER_VISION_ONLY_APP_LEARN_MORE_LINK")
s=function(e,t,n,r){const s=e.bag.visionOnlyAppLearnMoreEditorialItemId
if(o(s))return null
const i=new nU(WF)
return i.title=t,i.pageUrl=`https://apps.apple.com/story/id${s}`,od(e,i,{id:KR,targetType:m$,actionType:A$,pageInformation:n,locationTracker:r}),i}(e,t,n.metricsPageInformation,n.metricsLocationTracker),r=function(e,t,n){return t&&n?e.loc.string("BANNER_VISION_ONLY_APP_WITH_LINK").replace(_M,t):e.loc.string("BANNER_VISION_ONLY_APP_NO_LINK")}(e,t,s),i=null,a=nt(e,"systemimage://visionpro"),c=U(yO),l=!0}const w=lt(e,t),g=ut(e,"product-page-banner")
if((null===r||!n.offerButtonShouldBeDisabled)&&w&&g){const t=e.loc.string("ProductPage.ExternalPurchasesBanner.LearnMore")
s=dt(e,t,n.metricsPageInformation,n.metricsLocationTracker),r=function(e,t,n){return e.bag.externalPurchasesProductPageBannerUseAlternateCopy?t&&n?e.loc.string("ProductPage.ExternalPurchasesBanner.WithLink_NLD").replace(_M,t):e.loc.string("ProductPage.ExternalPurchasesBanner.NoLink_NLD"):t&&n?e.loc.string("ProductPage.ExternalPurchasesBanner.WithLink").replace(_M,t):e.loc.string("ProductPage.ExternalPurchasesBanner.NoLink")}(e,t,s),i=null,e.bag.externalPurchasesIncludeProductPageBannerIcon?(a=nt(e,JO),c=U("systemRed")):(a=null,c=null),l=!0}return null!==r&&n.offerButtonShouldBeDisabled||!(0,Gh.isSome)(n.webBrowser)||!n.webBrowser||(r=e.props.enabled("productPageSetDefaultBrowserOnPurchase")?e.loc.string("ProductPage.Banner.DefaultBrowser.Message"):e.loc.string("ProductPage.Banner.WebBrowser.Message"),a=nt(e,"systemimage://gear"),c=U(yO),u=ZO),(null==r?void 0:r.length)>0?new pj(r,null,s,i,a,c,l,u):null}(e,t,D)
const _=T.offerDisplayProperties
D.offerButtonShouldBeDisabled&&i(_)&&(T.offerDisplayProperties=_.newOfferDisplayPropertiesChangingAppearance(!1,uL))
const L=!Ze(e,t,512)
if(!g&&!D.offerButtonShouldBeDisabled&&L){const n=function(e,t){return Uh.context("updateOfferDataFromData",()=>{const n=Te(e,t,Y_)
if(0===n.length)return null
for(const e of n)if(d(e,aN)===Gv)return e
return null})}(e,t)
A.updateBuyParams=d(n,VM),A.externalVersionIdentifier=be(e,t,FC)}if(y&&(T.editorialTagline=e.loc.string("APPLE_ARCADE")),A.lockup=T,A.appPlatforms=Vl(e,t),s(l)){const n=gr(e,l,t,!1,!1,R$,h$,!0,!1,v,!0,!1,null,!1,!1)
if(s(n)&&n instanceof fY){const r=n
A.appEventDetailPageFlowAction=ir(e,l,t,r,v,wF,!1,f)}}!function(e,t,n,s,a,c){if(t.shelfMapping[B$]=new rH("marker","productTopLockup"),"tv"!==e.client.deviceType){const a={developerAction:t.developerAction}
t.shelfMapping[P$]=function(e,t,n,s){return Uh.context("descriptionShelf",()=>{if(o(t))return null
const a=new rH("productDescription"),c=function(e,t){return t?Uh.context("productDescriptionLinksFromData",()=>{const n=[],r=Pe(e,t,ME)
if(r){const t=new sU(r,!1),o=e.loc.string("PRODUCT_DEVELOPER_WEBSITE")
n.push(new $j(o,t,IF,"safari"))}const o=Pe(e,t,xE)
if(o){const t=new sU(o,!1),r=e.loc.string("DEVELOPER_SUPPORT")
n.push(new $j(r,t,"support","questionmark.circle"))}return n}):null}(e,t),l=function(e,t,n=null){return Uh.context("descriptionFromData",()=>{r(n)&&(n=_e(e,t))
let o=function(e,t,n){return function(e,t,n,r,o){const s=K(r),a=Le(0,Ae(e,t,AS,void 0),n,s,Q(s))
return i(a)?d(a):Pe(e,t,r)}(e,t,n,fm)}(e,t,n)
o||(o="")
let s=Pe(e,t,sM)
s||(s="")
let a=""
o.length>0&&s.length>0&&(a="\n\n")
const c=o+a+s
if(c.length>0){const e=new mB(c)
return e.isCollapsed=!0,e}return null})}(e,t)
if(null===l)return null
const u=new yj(l,c,s.developerAction)
return a.items=[u],n.addImpressionsToShelf(e,a,P$),a})}(e,n,s,a)}{const r={useInlineUberStyle:t.uber&&t.uber.style===jD}
t.shelfMapping[VF]=function(e,t,n,r){if(Nc(e)){const r=new rH("productBadge"),o=Rc(e,t,!0,{locationTracker:n.locationTracker,pageInformation:n.metricsPageInformation})
return r.items=o,r.isHorizontal=!0,n.addImpressionsToShelf(e,r,VF),r}{const o=new rH(VF),s=Rc(e,t,!0,{locationTracker:n.locationTracker,pageInformation:n.metricsPageInformation}),i=!r.useInlineUberStyle,a=!1,c=r.useInlineUberStyle,l=new Yj(s,i,a,c,"justified")
return o.items=[l],o.isHorizontal=!0,n.addImpressionsToShelf(e,o,VF),o}}(e,n,s,r)}Mc(e,t,[],du(e,n),a)}(e,A,t,n,a),A.uber&&(A.presentationOptions.push(eO),A.presentationOptions.push(Vm)),A.alwaysAllowReviews=Ds(e,t)
const x=null==a?void 0:a.iAdDismissAdActionMetrics
if((0,Yh.isSome)(x)){const e=new gW(d(x.instanceId),d(x.adamId),d(x.advertType),d(x.invocation),d(x.reportingDestination)),t=new qU(e)
A.pageDisappearedAction=t}return A})}function Mc(e,t,n,r,o){const s=function(e,t,r){return e.map(e=>e.shelfId===G$&&r?n:e.shelfId===G$?n[0]?[n[0]]:[]:[e]).reduce((e,t)=>e.concat(t)).map(e=>e.createShelfIdList()).reduce((e,t)=>e.concat(t))},a=Xs(0,!0,e.host.platform,r,!1,!1,o),c=Xs(0,!1,e.host.platform,r,!1,!1,o),l=Xs(0,!0,e.host.platform,r,!0,!1,o),u=Xs(0,!1,e.host.platform,r,!0,!1,o),d=Xs(0,!1,e.host.platform,r,!1,!0,o),f=Xs(0,!1,e.host.platform,r,!0,!0,o)
t.shelfOrderings.purchasedOrdering=s(a,0,!1),t.shelfOrderings.purchasedOrdering_ExpandedMedia=s(a,0,!0),t.shelfOrderings.notPurchasedOrdering=s(c,0,!1),t.shelfOrderings.notPurchasedOrdering_ExpandedMedia=s(c,0,!0),t.shelfOrderings.purchasedOrdering_Compact=s(l,0,!1),t.shelfOrderings.purchasedOrdering_ExpandedMedia_Compact=s(l,0,!0),t.shelfOrderings.notPurchasedOrdering_Compact=s(u,0,!1),t.shelfOrderings.notPurchasedOrdering_ExpandedMedia_Compact=s(u,0,!0),t.shelfOrderings.downloadingOrdering=s(d,0,!1),t.shelfOrderings.downloadingOrdering_ExpandedMedia=s(d,0,!0),t.shelfOrderings.downloadingOrdering_Compact=s(f,0,!1),t.shelfOrderings.downloadingOrdering_ExpandedMedia_Compact=s(f,0,!0),t.defaultShelfOrdering=$W
for(const e of Object.keys(t.shelfMapping))i(t.shelfMapping[e])&&(t.shelfMapping[e].id=e)}function Nc(e){return e.featureFlags.isEnabled("shelves_2_0_product")||!0}function Fc(e,t,n={},r={},o=null,s=!1,i=!1){const a=du(e,D(t)),c=Lc(e,t,n,r,o,i)
return Nc(e)&&!s?c:ri(e,c,a,n)}function $c(e,t,n={},o=!1){if(!e.client.isSidepackingEnabled)return null
const s=du(e,t),i=function(e,t,n,o){return Uh.context("createProductPageSidePackFromResponse",()=>{if(!e.client.isSidepackingEnabled)return null
const s=function(e,t,n){const r=W(t,b$),o=W(t,z$),s=W(t,QN)
let i=null
n&&(i=n.iAdClickFields)
const a=Nn(e,xx,t.id,`${s}_${o}`,i)
return a.pageUrl=r,new fK(a,{rootPosition:0,locationStack:[]})}(e,t,n),i=xc(e,t,s,n,o)
return function(e,t,n){r(n)||(t.pageMetrics.addData(Wn(e,n,null),[Hh.PageInvocationPoint.backButton]),r(t.pageMetrics.pageFields)&&(t.pageMetrics.pageFields={}))}(e,i,s.metricsPageInformation),i})}(e,t,n,o)
return Nc(e)?i:ri(e,i,s,n)}function Bc(e,t){if(o(null==t?void 0:t.items))return[]
if(Nc(e))return t.items
{const e=t.items
return e.length>0?e[0].badges:[]}}function Uc(e,t,n){const r=AK[n]
let o={}
const a=Et(0,t)
for(const c of r){if(s(a)&&(o=Vc(e,a,n,c)||Gc(e,a,n,c),i(o)))break
if(o=Vc(e,t,n,c)||Gc(e,t,n,c),i(o))break}return o}function Gc(e,t,n,r){let s=null,a=null,c=null
const l=`editorialArtwork.${r}`,u=Ce(e,t)
return a=j(t,l)||fe(t,u,l),o(a)?null:(s=El(e,a,{withJoeColorPlaceholder:!0,useCase:jc(n),cropCode:Hc(n,r)}),i(s)&&(c=s.backgroundColor),{artwork:s,artworkData:a,backgroundColor:c,textColorOverride:qc(0,a,s)})}function Vc(e,t,n,r){let s=null,a=null,c=null,l=null
const u=`editorialVideo.${r}`,f=Ce(e,t)
if(c=j(t,u)||fe(t,f,u),o(c))return null
const h=p(c,EL)
i(h)&&(a=El(e,h,{withJoeColorPlaceholder:!0,useCase:jc(n),cropCode:"sr"})),i(a)&&(a.crop="sr",l=a.backgroundColor)
const w=d(c,HF)
return i(a)&&(null==w?void 0:w.length)>0&&(s=new kB(w,a,{canPlayFullScreen:!1,showPlaybackControls:!1,allowsAutoPlay:!0,looping:!0,playbackControls:zc(0,n),autoPlayPlaybackControls:{}}),s.editorialMediaFlavor=r),{video:s,artwork:a,artworkData:h,backgroundColor:l,textColorOverride:qc(0,h,a)}}function jc(e){switch(e){case Sw.Hero:return 19
case Sw.LargeBreakout:return 6
case Sw.StoryCard:return 15
case Sw.StoryDetail:case Sw.StoryDetailLandscape:return 13
case Sw.Search:return 9
default:return 0}}function Hc(e,t){const n=function(n,r){return e===n&&t===r}
return n(Sw.Hero,Iw.HeroStatic16x9)?"gd":n(Sw.Hero,Iw.StoryCenteredStatic16x9)?"ge":n(Sw.LargeBreakout,Iw.StoryCenteredStatic16x9)?"gf":"sr"}function Wc(e,t){return(0,Gh.isNothing)(t)?null:(0,Gh.isSome)(t.textColorOverride)?V(t.textColorOverride,mH):(0,Gh.isSome)(null==t?void 0:t.backgroundColor)?B(t.backgroundColor):null}function qc(e,t,n){const r=null==n?void 0:n.textColor
if((0,Gh.isNothing)(r))return null
const o=l(t,"useCustomTextColor"),s=V(r,gH)||V(r,mH)
return o&&s?r:null}function zc(e,t){switch(t){case Sw.Hero:case Sw.StoryDetail:case Sw.StoryDetailLandscape:return{prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1}
default:return{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0}}}function Yc(e,t,n){switch(n){case QE:case KE:case pD:case fD:return Uc(e,t,Sw.EditorialLockup)
case"BrickSmall":case"BrickMedium":case"BrickLarge":return Uc(e,t,Sw.Brick)
case US:case"StorySmall":return Uc(e,t,Sw.StoryCard)
case BS:return Uc(e,t,Sw.Hero)
case $S:return Uc(e,t,Sw.LargeBreakout)
default:return{}}}function Jc(e,t,n){const r=function(e,t,n){const r=function(e,t){let n=null
switch(t.type){case M$:case MN:case Ox:n=se(t,WS,!0)||se(t,bF,!0)||se(t,V$,!0)
break
default:n=null}return n}(0,t)
return o(r)?null:ml(e,r,n)}(e,t,{lockupOptions:n})
return o(r)?null:r.map(e=>e.icon)}function Zc(e,t,n){const r=kt(0,t)
return o(r)?null:al(e,r,n)}function Kc(e,t,n){return t===QF?n?F$:Qx:n?UL:C$}function Qc(e,t,n,a){var c,l,u
if(o(t))return
if(!e.client.isPhone)return
let d=(null===(c=null==a?void 0:a.displayStyle)||void 0===c?void 0:c.metadataRibbon)||[]
const f=p(t,dN)
i(null===(l=null==f?void 0:f.displayStyle)||void 0===l?void 0:l.metadataRibbon)&&(d=null===(u=null==f?void 0:f.displayStyle)||void 0===u?void 0:u.metadataRibbon)
const h=function(e,t,n,i,a=TK){if(o(i))return[]
const c=[]
for(const l of i)if(!o(l))for(const o of l){const i=a[o]
if(r(i))continue
const l=i(e,t,n)
if(s(l)){c.push(l)
break}}return c}(e,t,n,d)
n.metadataRibbonItems=h,i(d)&&(n.impressionMetrics.fields.ribbons=h.map(e=>e.moduleType))}function Xc(e,t,n,r,o){t&&Uh.context("copyDataIntoLockup",()=>{var s,i,a,l
const u=z(t,KF)
if(r.isContainedInPreorderExclusiveShelf&&!u)return null
const f=_e(e,t)
n.productVariantID=xe(f),r.metricsOptions.productVariantData=f,n.adamId=t.id
const p=Pe(e,t,aF)
n.bundleId=p,n.decorations=[]
let h=null
r&&r.clientIdentifierOverride&&(h=r.clientIdentifierOverride),n.icon=_l(e,t,{useCase:r.artworkUseCase,withJoeColorPlaceholder:r.useJoeColorIconPlaceholder},h,f),r&&r.titleObjectPath?n.title=Pe(e,t,r.titleObjectPath):n.title=W(t,z$),n.useAdsLocale=r.metricsOptions.isAdvert&&(0,Gh.isSome)(e.bag.adsOverrideLanguage)
const w=du(e,t)
w&&!r.shouldHideArcadeHeader&&(n.heading=r.metricsOptions.isAdvert?e.adsLoc.string(vb):e.loc.string(vb)),r.shouldShowFriendsPlayingShowcase&&n.decorations.push("showcaseFriendsPlaying")
const g=!w&&!u&&(null===(s=r.isMultilineTertiaryTitleAllowed)||void 0===s||s)
if(r.isSubtitleHidden||function(e,t,n){return Uh.context("isBadgeMultilineFromData",()=>{if(!n)return!1
if(!jl(0,t,!1))return!1
if(sl(e,t))return!1
const r=Vl(e,t)
return zl(0,r,_$)||zl(0,r,U$)})}(e,t,g)||(n.subtitle=nl(e,t,r)),n.tertiaryTitle=rl(e,t,g,r.hideCompatibilityBadge),n.tertiaryTitleAction=ol(e,t),n.tertiaryTitleArtwork=null,n.developerTagline=Pe(e,t,_N),n.editorialTagline=fu(e,t,lN),n.editorialDescription=fu(e,t,S$),n.shortEditorialDescription=fu(e,t,AN),n.ageRating=W(t,_y),n.productDescription=Pe(e,t,sM),!Rs(e,t)&&(Y(t,Ly)>0||!r||!r.hideZeroRatings)){n.rating=Y(t,xy)
const o=Y(t,Ly),s=r.metricsOptions.isAdvert?e.bag.adsOverrideLanguage:null
n.ratingCount=e.loc.formattedCountForPreferredLocale(e,o,s)}const m=td(e,t,r.metricsOptions,r.metricsClickOptions)
Fu(e,m,n.title)
const y=ft(e,t),A=null!==(i=null==r?void 0:r.includeBetaApps)&&void 0!==i&&i,T=_u(e,t,n.icon,h),P=v(m),I=ht(e,y,t,u,A,T,P,T$,null==r?void 0:r.referrerData),S=c(y,Ab)
let b=vt(e,I,t,u,P,T$,r.ignoreIconInSidepack,h,r.shouldNavigateToProductPage);(null===(a=null==r?void 0:r.externalDeepLinkUrl)||void 0===a?void 0:a.length)>0&&(b=ot(e,b,I.adamId,p,r.externalDeepLinkUrl,A,P),(null===(l=r.crossLinkSubtitle)||void 0===l?void 0:l.length)>0&&(n.crossLinkTitle=e.loc.uppercased(W(t,z$)),n.crossLinkSubtitle=r.crossLinkSubtitle)),n.buttonAction=b,n.children=el(e,t,r),Bu(r.metricsOptions.locationTracker)
const C=Ts(e,t)
if(C){const t=new RU,r=v(m)
r.actionType=p_,r.targetType=r$,od(e,t,r)
const o=new Aj
o.shareAction=t,o.shareSheetData=C,n.contextMenuData=o}const k=bl(0,t)
let E=null!=o&&o
k&&(E=!(mt(0,ft(e,k))>0))
const O=Kc(0,t.type,w)
n.offerDisplayProperties=r?bt(e,I,O,t,u,r.isContainedInPreorderExclusiveShelf,r.offerStyle,r.offerEnvironment,S[0],E,T$,r.shouldNavigateToProductPage,r.metricsOptions.isAdvert):bt(e,I,O,t,u,r.isContainedInPreorderExclusiveShelf,null,null,S[0],o,T$),r&&r.skipDefaultClickAction||(n.clickAction=Pl(e,t,m,{clientIdentifierOverride:h,ignoreIconInSidepack:r.ignoreIconInSidepack,productVariantData:f})),r&&r.ordinal&&(n.ordinal=r.ordinal)
const R=Ae(e,t,GL)
if(R){const e=d(R,SO),t=e&&e===bO
n.isEditorsChoice=t}n.flowPreviewActionsConfiguration=Is(e,t,!1,h,n.clickAction,r.metricsOptions,m,r.externalDeepLinkUrl),n.includeBetaApps=A,n.developerName=W(t,QN),(0,Gh.isNothing)(n.developerName)&&(n.developerName=W(t,"developerName"))
const D=sn(e,t,n,T,r.metricsOptions,r.canDisplayArcadeOfferButton)
nn(0,n,D)})}function el(e,t,n){const r=ne(t,q$)
return r?gl(e,r,{lockupOptions:n,filter:0}):null}function tl(e,t,n,r,i,a){var c
if(!t)return
if(i.isNetworkConstrained)return
const l=null!==(c=i.metricsOptions.isAdvert)&&void 0!==c&&c
Uh.context("copyMediaIntoMixedMediaLockup",()=>{n.screenshots=$l(e,t,4,null,i.clientIdentifierOverride,null,l,a)
const c=n.screenshots[0]
n.trailers=[]
const u=Ml(e,t,r,i.metricsOptions,n.adamId,l,a)
s(u)&&(o(c)||u.mediaPlatform.isEqualTo(c.mediaPlatform))&&n.trailers.push(u)})}function nl(e,t,n=null){return(0,Gh.isNothing)(t)?null:Uh.context("subtitleFromData",()=>{let r
return n&&n.subtitleObjectPath&&(r=Pe(e,t,n.subtitleObjectPath)),o(r)&&(r=Pe(e,t,_N)),r||il(e,t)})}function rl(e,t,n=!1,r){return Uh.context("badgeFromData",()=>{if(r)return null
const o=jl(0,t,!1)
if(o){let r=""
const s=Vl(e,t)
if(zl(0,s,_$)?r="Platform.DesignedForPad":zl(0,s,U$)&&(r="Platform.DesignedForPhone"),(null==r?void 0:r.length)>0)return o&&(sl(e,t)||(r+=".NotVerified",n&&(r+=".Expanded"))),e.loc.string(r)}return null})}function ol(e,t){return Uh.context("badgeActionFromData",()=>{if(!jl(0,t,!1))return null
if(sl(e,t))return null
const n=Vl(e,t)
if(!zl(0,n,_$)&&!zl(0,n,U$))return null
const r=new nU(WF)
return r.pageUrl=`https://apps.apple.com/story/id${e.bag.appleSiliconMacUnverifiedBadgeEditorialItemId}`,r})}function sl(e,t){if(!e.appleSilicon.isSupportEnabled)return!0
const n=Ie(e,t,My,EF)
return!!s(n)&&n}function il(e,t){return Uh.context("categoryFromData",()=>{const n=Pe(e,t,EO)
if((null==n?void 0:n.length)>0)return n
const r=se(t,Ny)
if(r.length>0){let e=r[0]
const t=6014..toString()
if(e.id===t)for(const n of r){const r=W(n,Ib)
if(n.id!==t&&r===t){e=n
break}}return W(e,z$)}{const e=H(t,Sb)
return e.length>0?e[0]:null}})}function al(e,t,n){return Uh.context("lockupFromData",()=>{var r,i,a,c,l,u
if(!t)return Uh.unexpectedNull(LF,iN),null
const d=Io(0,t)
n.metricsOptions.isAdvert=d
let f=!1
if(s(n.metricsOptions.pageInformation)&&(f=function(e,t,n){if((0,Yh.isNothing)(n))return!1
const r=vn(e,t)
return!o(r)&&-1!==r.findIndex(e=>{var t
return e.shelfIdentifier.toString()===(null===(t=n.shelfIdentifier)||void 0===t?void 0:t.toString())&&e.slot===n.slot})}(e,null===(r=n.metricsOptions.pageInformation.iAdInfo)||void 0===r?void 0:r.placementType,function(e){var t
return{shelfIdentifier:null===(t=Gu(e))||void 0===t?void 0:t.id,slot:Uu(e)}}(n.metricsOptions.locationTracker))),n.metricsOptions.isAdEligible=f,(d||f)&&(null===(a=null===(i=n.metricsOptions.pageInformation)||void 0===i?void 0:i.iAdInfo)||void 0===a||a.apply(e,t),d&&(null===(l=null===(c=n.metricsOptions.pageInformation)||void 0===c?void 0:c.iAdInfo)||void 0===l||l.setTemplateType(bb))),!J(t))return null
switch(t.type){case QF:return n.offerEnvironment=Cb,cl(e,t,n)
case O$:const r=oe(t,C$)
if(o(r))return null
const i=new Tj
return Xc(e,r,i,n),i
case f$:return n.offerEnvironment=Cb,function(e,t,n){return Uh.context("contingentOfferLockupFromData",()=>{var r,o
const s=oe(t,jM),i=oe(t,LN)
if(z(s,QR)){const r=cl(e,t,n)
r.offerDisplayProperties.titles[S$]=e.loc.string(Fy),r.offerDisplayProperties.isStreamlinedBuy=!0
const o=j(i,I$),a=ur(e,s,I$),c=El(e,o,{useCase:n.artworkUseCase,withJoeColorPlaceholder:n.useJoeColorIconPlaceholder,style:rM})
return r.icon=null!=c?c:a,r}{const a=new Tj
Xc(e,s,a,n)
const c=td(e,t,n.metricsOptions,n.metricsClickOptions)
Fu(e,c,a.title)
const l=Pe(e,s,aF),u=W(i,kM),d=new dU(u,s.id,l,a.buttonAction)
return d.appTitle=null!==(r=W(s,z$))&&void 0!==r?r:"",d.productTitle=null!==(o=W(i,z$))&&void 0!==o?o:"",d.additionalBuyParams="contingentItemId="+t.id,a.buttonAction=d,Bu(n.metricsOptions.locationTracker),a}})}(e,t,n)
default:const a=new Tj
return Xc(e,t,a,n),(d||f)&&s(null===(u=n.metricsOptions.pageInformation)||void 0===u?void 0:u.iAdInfo)&&So(e,t,a,n.metricsOptions),a}})}function cl(e,t,n){return Uh.context("inAppPurchaseLockupFromData",()=>{const r=new kj
return function(e,t,n,r){t&&Uh.context("copyDataIntoInAppPurchaseLockup",()=>{let o=!1,s=bl(0,t)
if(t.type===f$){const e=oe(t,jM),n=oe(t,LN)
o=z(e,QR),t=n,s=e}let i=!1
s&&(i=!(mt(0,ft(e,s))>0)),Xc(e,t,n,r,i),n.productIdentifier=W(t,kM),n.parent=al(e,s,r),n.description=W(t,sM),n.isVisibleByDefault=z(t,"isMerchandisedVisibleByDefault"),n.isSubscription=z(t,CO)
const a=ft(e,t),l=c(a,Ab)
n.offerDisplayProperties.hasDiscount=l.length>0,n.offerDisplayProperties.subscriptionFamilyId=W(t,"subscriptionFamilyId")
const u=new nU(Tb)
u.presentationContext=vN
const f=function(e,t,n){const r=(new UW).param(LG,n).param(HV,t).build()
return`${YU}:/${cG}/${tG}/?${r}`}(0,n.adamId,s.id)
u.pageUrl=f
const h=new lH
h.parentLockup=v(n.parent),h.lockup=v(n),h.preInstallOfferDescription=Kn(e,a),u.pageData=h
const w=W(t,kM),g=Pe(e,s,aF),m=W(s,"firstVersionSupportingInAppPurchaseApi"),y=sn(e,t,n,rM,r.metricsOptions,r.canDisplayArcadeOfferButton)
if(Fu(e,y,n.title),o){const o=new dU(w,s.id,g,u)
n.parent&&(o.appTitle=n.parent.title),o.productTitle=n.title,o.streamlineBuyAction=function(e,t,n,r,o){const s={...o.metricsOptions,id:n.id,targetId:n.id,idType:HN,actionDetails:{parentAdamId:n.id}},i=_u(e,t,r.icon,o.clientIdentifierOverride),a=v(s),c=p(t,fL),l=ft(e,n),u=new nW(d(l,VM))
let f=d(c,VM)
return f+=`&appAdamId=${d(n,"id")}`,f+=`&appExtVrsId=${u.get(kO,"")}`,f+=`&bid=${Pe(e,n,aF)}`,f+="&bvrs=1.0",f+=`&offerName=${Pe(e,t,kM)}`,c[VM]=f,ht(e,c,t,!1,!1,i,a,T$,null==o?void 0:o.referrerData)}(e,t,s,n,r),n.buttonAction=o,n.subtitle=W(s,z$)}else if(m){const t=new dU(w,s.id,g,u,m)
n.parent&&(t.appTitle=n.parent.title),t.productTitle=n.title
const o={...r.metricsOptions,id:n.adamId,idType:HN,actionDetails:{parentAdamId:s.id}}
od(e,t,o),n.buttonAction=t}else{const t=new IU(T$)
t.title=e.loc.string("SEED_IN_APP_UNSUPPORTED_MESSAGE_OPTION_1"),t.message="",t.isCancelable=!0,n.buttonAction=t}if(Bu(r.metricsOptions.locationTracker),!r||!r.skipDefaultClickAction){const r=vl(e,t,y)
n.clickAction=r,n.productAction=r}!function(e,t,n){t&&(t.impressionMetrics||nn(0,t,n),t.parent&&t.parent.adamId&&(t.impressionMetrics.fields.parentAdamId=ku(t.parent.adamId)))}(0,n,y)},Pb)}(e,t,r,n),r})}function ll(e,t,n){return Uh.context("screenshotsLockupFromData",()=>{const r=new Pj
return function(e,t,n,r){t&&Uh.context("copyDataIntoScreenshotsLockup",()=>{Xc(e,t,n,r),n.screenshots=$l(e,t,4,null,r.clientIdentifierOverride)})}(e,t,r,n),r})}function ul(e,t,n){return Uh.context("posterLockupFromData",()=>{const o=new sH
return function(e,t,n,o){t&&Uh.context("copyDataIntoPosterLockup",()=>{Xc(e,t,n,o),n.epicHeading=function(e,t){const n=Ae(e,t,"editorialArtwork.epicHeading")
return s(n)&&s("bb")?El(e,n,{cropCode:"bb",useCase:0}):null}(e,t),n.posterArtwork=function(e,t){const n=Ae(e,t,"editorialArtwork.postCard")
return s(n)?El(e,n,{cropCode:"sr",useCase:0,withJoeColorPlaceholder:!0}):null}(e,t),n.posterVideo=function(e,t,n){const o=Ae(e,t,[o$,Dm]),i=El(e,Ae(e,t,[o$,Dm,EL]),{useCase:19,withJoeColorPlaceholder:!0,cropCode:"sr"})
if(s(o)){const e=d(o,HF)
return r(e)?null:new kB(e,i,{allowsAutoPlay:!0,looping:!0,canPlayFullScreen:!1,showPlaybackControls:!1,playbackControls:{prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1},autoPlayPlaybackControls:{prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1}})}return null}(e,t),n.offerDisplayProperties&&(n.offerDisplayProperties=n.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,h$,iO)),n.posterVideo?n.isDark=B(n.posterVideo.preview.backgroundColor):n.posterArtwork?n.isDark=B(n.posterArtwork.backgroundColor):n.isDark=!1
const i=Se(e,t,_m)
if(Se(e,t,KF)){const r=i?e.loc.string("Offer.Label.ComingSoon"):null
let o
o=e.loc.uppercased(Tu(e,t,r)),(0,Gh.isSome)(o)&&(n.footerText=o)}})}(e,t,o,n),o})}function dl(e,t,n,r,o=null,s){return Uh.context("mixedMediaLockupFromData",()=>{const i=new Ij
return Xc(e,t,i,n),Qc(e,t,i,o),tl(e,t,i,r,n,s),pl(e,t,i,o),i})}function fl(e,t,n,r){const o=t.type===M$?oe(t,PF):t,s=al(e,o,n),i=Ce(e,o),a=Yc(e,o,r),c=null==a?void 0:a.artwork
if(c&&s){const e=Wc(0,a),t=new Rj(c,s,null,null,e)
return t.caption=he(o,i,tO),(0,Gh.isSome)(t.caption),t.title=he(o,i,uM)||W(o,EO),t.impressionMetrics=s.impressionMetrics,t}return null}function pl(e,t,n,r){var o
if(!e.client.isPhone)return
const i=d(t.meta,"imageLockupFromData")
s(i)?n.screenshotsDisplayStyle=i:s(null===(o=null==r?void 0:r.displayStyle)||void 0===o?void 0:o.screenshots)&&(n.screenshotsDisplayStyle=r.displayStyle.screenshots)}function hl(e,t,n,r,o,s=!0){return Uh.context("mixedMediaAdLockupFromData",()=>{const i=new Ij
return z(t,"iad.format.images")?(tl(e,t,i,r,n),function(e,t,n,r){if(!function(e,t){return!function(e,t,n){return Be(_e(e,t),n)}(e,t,IO)}(e,t))return
const o=H(t,"iad.assetOverride")
if(o.length){const e=function(e,t,n){const r=new Set(n),o=[],s=[],i=function(e,t){if(0===r.size)return!1
for(const o of n)if(o===t||-1!==e.indexOf(o))return r.delete(o),!0
return!1}
if(n.length&&(t.screenshots.length||t.trailers.length)){if(t.trailers.length)for(const e of t.trailers[0].videos)i(e.videoUrl,e.preview.checksum)&&o.push(e)
if(t.screenshots.length)for(const e of t.screenshots[0].artwork)i(e.template,e.checksum)&&s.push(e)}return!(0!==r.size||!o.length&&!s.length||(t.trailers.length&&(t.trailers[0].videos=o),t.screenshots.length&&(t.screenshots[0]=new iB(s,t.screenshots[0].mediaPlatform)),0))}(0,n,o)
r.pageInformation.iAdInfo&&r.pageInformation.iAdInfo.iAdIsPresent&&r.pageInformation.iAdInfo.setSpecifiedCreativeUsed(e)}}(e,t,i,n.metricsOptions),Xc(e,t,i,n),pl(e,t,i,o)):(Xc(e,t,i,n),i.screenshots=[]),So(e,t,i,n.metricsOptions,s),Qc(e,t,i,o),i})}function wl(e,t,n,r,s,i){return Uh.context("arcadeLockupFromData",()=>{const a=t.marketingItemData,c=new Ej
c.title=e.loc.string("ARCADE_LOCKUP_TITLE","Apple Arcade")
const l=t.marketingItemData
n={...n,mercuryMetricsData:Lu(0,l)}
let u,d=Bi(0,a);(null==d?void 0:d.length)>0&&(d=d.replace(/\n/g," "),c.subtitle=d,c.nonsubscribedSubtitle=d,c.subscribedSubtitle=d)
const f=$i(0,a)
u=Gi(e,t.marketingItemData,r,n),u.title=f,c.unsubscribedButtonAction=u
const p=ud(0,n.pageInformation,n.locationTracker)
p.title=e.loc.string(VL,jL),c.subscribedButtonAction=p
const h=an(e,t.marketingItemData,c.title,n)
h.displaysArcadeUpsell=!0,o(h.targetType)&&(h.targetType=r$),nn(0,c,h)
const w=new nB(F$,e.bag.arcadeAppAdamId,s,null,i,null,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId)
return w.titles[OO]=e.loc.string(VL,jL),c.offerDisplayProperties=w,c})}function gl(e,t,n){return r(t)?[]:ml(e,t.data,n)}function ml(e,t,n){return Uh.context("lockupsFromData",()=>{if(!t)return[]
const o=[]
let i=!1
for(let a=0;a<t.length&&!i;a++){const c=t[a]
if(r(c.attributes)){n.contentUnavailable&&(i=n.contentUnavailable(c.id,a))
continue}const l=n.lockupOptions
let u=15358
if(n.includeOrdinals){const r=n.ordinalDirection===$y?t.length-a:a+1
l.ordinal=e.loc.decimal(r).toString()}if(s(n.filter)&&(u=n.filter),Ze(e,c,u))continue
n.excludeIconInSidepacksIfNotTvOnly&&(me(e,c,cM)||(l.ignoreIconInSidepack=!0))
const d=al(e,c,l)
!r(d)&&d.isValid()&&(o.push(d),ju(n.lockupOptions.metricsOptions.locationTracker))}return o})}function yl(e,t,n,r,i=!1,a=null){return Uh.context(`actionFromData: ${t.type}`,()=>{switch(t.type){case q$:case x$:return Pl(e,t,n,{clientIdentifierOverride:r,ignoreIconInSidepack:i,externalDeepLinkUrl:a})
case QF:return vl(e,t,n)
case M$:return Tl(e,t,n,r)
case MN:return function(e,t,n){return t?Uh.context("editorialPageActionFromData",()=>{const r=t.href
if(o(r))return Uh.unexpectedNull(LF,y$,RD),null
const s=new nU($$)
return s.pageUrl=r,s.title=pu(e,t,z$),o(s.title)&&(s.title=W(t,z$)),od(e,s,n),s}):null}(e,t,n)
case RO:return function(e,t,n){return t?Uh.context("msoActionFromPlatformData",()=>{const r=W(t,b$)
if(!r)return Uh.unexpectedNull(LF,y$,b$),null
const o=new nU(AD)
return o.pageUrl=r,o.title=W(t,z$),od(e,o,n),o}):null}(e,t,n)
case jN:return function(e,t,n){return t?Uh.context("groupingActionFromData",()=>{if(!t.href)return Uh.unexpectedNull(LF,y$,RD),null
const r=new nU($$)
return r.pageUrl=Ge(e,function(e,t){const n=[w$,o$,iF,hF,OF,zM]
e.appleSilicon.isSupportEnabled&&n.push(NF)
const r=new hH(e,t).includingAttributes(n).includingMacOSCompatibleIOSAppsWhenSupported()
ar(e)&&(r.enablingFeature(s$),r.includingScopedAttributes(O$,[P$,EN,TN]),r.includingScopedRelationships(O$,[C$]),r.includingScopedRelationships(wm,[O$]))
const o=R(e)
return s(o)&&r.addingQuery(aM,o),r}(e,t.href)).toString(),r.title=Il(0,t),od(e,r,n),r}):null}(e,t,n)
default:return function(e,t,n){return t?Uh.context("genericActionFromData",()=>{const r=d(t,aN),o=W(t,b$)
if(!o)return Uh.unexpectedNull(LF,y$,b$),null
const s=new nU($$)
return s.pageUrl=o,s.title=r===jN?Il(0,t):W(t,z$),od(e,s,n),s}):null}(e,t,n)}})}function vl(e,t,n){return Uh.context("iAPActionFromData",()=>{var r
const o=bl(0,t)
if(!o)return null
const i=new nU(lF),a=nj.from(W(o,b$)),c=xe(null!==(r=n.productVariantData)&&void 0!==r?r:_e(e,o))
s(c)&&a.param(MG,c)
const l=a.toString(),u=W(t,kM),d=z(t,CO)
return i.pageUrl=function(e,t,n,r){const o=(new UW).param(WV,t).param(jG,n).param(qV,r.toString()).build()
return`${YU}:/${cG}/${eG}/?${o}`}(0,l,u,d),i.title=W(t,z$),od(e,i,n),i})}function Al(e,t){return o(t)?0:Uh.context(By,()=>{if(function(e){const t=d(e,_E)
return t&&t===rS}(j(t,m$)))return 1
const e=W(t,Uy),n="List"===e||"NumberedList"===e
if(z(t,AL)||n)return 2
const r=se(t,PF),o=se(t,bF),s=i(r)&&1===r.length,a=i(o)&&1===o.length
return a&&o[0].type===O$||s&&r[0].type===O$?4:a?3:0})}function Tl(e,t,n,a,c,l){return o(t)?null:Uh.context(By,()=>{let u,f
switch(Al(0,t)){case 1:return function(e,t,n){return Uh.context("editorialItemExternalLinkActionFromData",()=>{const r=d(j(t,m$),b$),o=new sU(r),s=fu(e,t,AN)
if(s)o.title=s
else{const e=new nj(r)
o.title=e.host}return od(e,o,n),o})}(e,t,n)
case 2:u=WF
const p=nj.from(W(t,b$))
s(c)&&p.param(wV,JSON.stringify(c)),(0,Gh.isSome)(l)&&!l.isHorizontalShelfContext&&p.param(UV,JSON.stringify(l)),f=p.build()
break
case 3:const h=se(t,bF)[0]
return yl(e,h,n,a)
case 4:const w=se(t,PF),g=i(w)&&1===w.length?w[0]:se(t,bF)[0],m=oe(g,C$)
if(o(m))return null
const y=gr(e,g,m,!1,!1,R$,kF,!1,!1,n,!1,!0,null,!1,!1)
return r(y)||y instanceof Date?null:hr(e,g,m,y,n,!0)
case 5:u=$$,f=hi(e,t.href)
break
default:u=D$,f=d(j(t,m$),b$)}if((0,Gh.isNothing)(f))return null
const p=new nU(u)
p.pageUrl=f
let h=fu(e,t,z$)
return r(h)&&(h=d(t,ZF)),p.title=h,od(e,p,n),p})}function Pl(e,t,n,r){var o,i,a,c
if(!t)return null
const l=null!==(o=r.clientIdentifierOverride)&&void 0!==o?o:null,u=null!==(i=r.ignoreIconInSidepack)&&void 0!==i&&i,f=null!==(a=r.externalDeepLinkUrl)&&void 0!==a?a:null,p=null!==(c=r.productVariantData)&&void 0!==c?c:_e(e,t)
return Uh.context("productActionFromData",()=>{var r,o
let i=W(t,b$)
if(!i)return Uh.unexpectedNull(LF,y$,b$),null
let a={}
const c=new nj(i)
if(n.isAdvert){const o=d(t,Gy)
null!==o&&o.length>0&&c.param(nQ,o)
const s=null===(r=n.pageInformation.iAdInfo)||void 0===r?void 0:r.clickFields
c.param(tQ,JSON.stringify(s)),a={iAdClickFields:m(s),iAdLineItem:o}
const i=gn(0,t)
if((0,Gh.isSome)(i)){const r=du(e,t)?UL:PO,o=Eo(0,n),s=new gW(i,t.id,r,"productPageDismissed",o)
c.param(rQ,JSON.stringify(s)),a.iAdDismissAdActionMetrics=m(s)}}const h=xe(p)
s(h)&&c.param(MG,h),a.externalDeepLinkUrl=f,s(f)&&c.param(GW,f),a.clientIdentifierOverride=l,(null==l?void 0:l.length)>0&&c.param(Vy,l)
const w=null===(o=n.pageInformation.searchTermContext)||void 0===o?void 0:o.term;(0,Gh.isSome)(w)&&c.param(_F,w),i=c.toString()
const g=new nU(lF)
g.pageUrl=i,g.pageData=$c(e,t,a,u),g.title=W(t,z$),n&&n.pageInformation&&(g.referrerUrl=n.pageInformation.pageUrl)
const y=z(t,KF)
return od(e,g,y?{...n,offerType:DN,offerReleaseDate:gt(0,t)}:n,!0),g})}function Il(e,t){const n=H(t,Sb)
return i(n)?n[0]:W(t,z$)}function Sl(e,t){if(!t)return!1
const n=function(e,t,n){return Pe(e,t,jl(0,t,n)?NF:hF)}(e,t,e.appleSilicon.isSupportEnabled)
if(o(n))return!0
const r=n.split(" ")
if(e.props.enabled(Tg)){const t=!1
return e.client.deviceHasCapabilitiesIncludingCompatibilityCheckIsVisionOSCompatibleIOSApp(r,t)}return e.client.deviceHasCapabilities(r)}function bl(e,t){return t?oe(t,C$):null}function Cl(e,t){t.bag.arcadeDownloadPacksMetricsEventsEnabled||(e.clickAction.actionMetrics.clearAll(),e.buttonAction.actionMetrics.clearAll(),e.buttonAction instanceof fU&&e.buttonAction.defaultAction.actionMetrics.clearAll()),t.bag.arcadeDownloadPacksImpressionEventsEnabled||(e.impressionMetrics=null)}function kl(e,t){switch(t){case bL:case TS:case g$:return 1
case SF:return 2
case CL:return 3
default:return 0}}function El(e,t,n){return Uh.context("artworkFromApiArtwork",()=>{const o=!!s(n.allowingTransparency)&&n.allowingTransparency,i=!!s(n.withJoeColorPlaceholder)&&n.withJoeColorPlaceholder,a=d(t,b$)
if(r(a))return null
const c=l(t,"hasP3"),u=[tt(e,o,c,n.useCase)]
let p
if(l(t,"supportsLayeredImage"),o)p=U(kL)
else if(i){const e=N(d(t,yx))
r(e)||(p=e)}r(p)&&(p=U(PS))
const h=N(d(t,ym)),w=new sB(a,n.overrideWidth||f(t,Ix),n.overrideHeight||f(t,lM),u)
return w.backgroundColor=p,w.checksum=d(t,IS),s(h)&&(w.textColor=h),s(n.style)&&(w.style=n.style),s(n.cropCode)&&(w.crop=n.cropCode),s(n.contentMode)&&(w.contentMode=n.contentMode),w})}function Ol(e,t,n,r){return Uh.context(vm,()=>{const o=_l(e,t,r)
if(!s(o))return null
const i=new dj(o),a=W(t,z$)
return nn(0,i,an(e,t,a,n)),i})}function Rl(e,t,n,r){return Uh.context(vm,()=>{const s=[]
o(n.targetType)&&(n.targetType=I$)
for(const o of t){const t=Ol(e,o,n,r)
t&&(s.push(t),ju(n.locationTracker))}return s})}function Dl(e,t,n,r){const s=Ae(e,t,"editorialArtwork.searchCategoryBrick")
if(o(s))return null
let i=r
n===bw.seeAllPage&&(i=tw.Density1)
let a=[],c=[]
switch(i){case tw.Density1:const e=n===bw.categoryBreakout?"1191":"2350"
s[Ix]=e,s[lM]=jE,a=["SCB.ApSCBL01","SCB.ApSCBL03"],c=[Vh.right,Vh.left]
break
case tw.Density2:s[Ix]="2482",s[lM]=jE,a=["SCB.ApSCBS01","SCB.ApSCBS02"],c=[Vh.left,Vh.right]
break
case tw.Density3:s[Ix]=jE,s[lM]=jE,a=["cc"],c=[Vh.scaleAspectFit]}return a.map((t,n)=>El(e,s,{cropCode:t,contentMode:n<c.length?c[n]:null,useCase:0,withJoeColorPlaceholder:!0}))}function _l(e,t,n,o,i){return Uh.context("iconFromData",()=>{if(!t)return Uh.unexpectedNull(LF,iN),null
const a=t.type,c=Ll(e,t,o),l=o||e.host.clientIdentifier,u=fe(t,c,SS)
if((l===_B||Se(e,t,tM))&&s(u)){const t=e.featureFlags.isEnabled(Am)
return El(e,u,{...n,style:uD,withJoeColorPlaceholder:t})}const d=cu(e,t),f=iu(e,t)&&(l===LB||d),p=fe(t,c,bS)
if(f&&s(p))return El(e,p,{...n,style:E_})
let h
return a===QF?(h=j(t,I$),El(e,h,{...n,style:rM})):a===x$?(h=j(t,I$),El(e,h,{...n,style:yL,allowingTransparency:!0})):(r(i)&&(i=_e(e,t)),h=function(e,t,n,r){return Ee(e,t,r,I$,n)}(e,t,c,i),El(e,h,c===DM||o===MB?{...n,style:HE}:c===VN?{...n,style:uD}:c===sN?{...n,style:WE,allowingTransparency:!0}:{...n,style:yL}))})}function Ll(e,t,n){switch(n){case _B:case LB:return EF
case MB:return DM
default:return Ce(e,t)}}function xl(e,t,n,r){if(!t)return null
const o=gu(0,n),s=function(e,t){switch(t){case ES:return 13/jK.width
case kS:return 11/HK.width
case CS:return 5.5/WK.width
case zE:return 4.5/qK.width
default:return null}}(0,n),i=function(e,t){switch(t){case ES:return 30/jK.width
case zE:return 112.5/qK.width
default:return gu(0,t)}}(0,n)
return new aB(t,n,r,o,s,i)}function Ml(e,t,n,r,o,s=!1,i){const a=Nl(e,t,n,null,null,s,i)
if(!a)return null
const c=a.videos,l=[]
if(c&&c.length>0)for(const t of c)kr(e,t,{...r,id:o}),l.push(t)
let u=null
return l.length>0&&(u=new Cj,u.videos=l,u.mediaPlatform=a.mediaPlatform),u}function Nl(e,t,n,o=null,i=null,a=!1,l){return Uh.context("platformVideoPreviewFromData",()=>{r(i)&&(i=_e(e,t))
const u=function(e,t,n,r,o){return Ee(e,t,n,r?FS:OM,void 0)}(e,t,i,a),h={}
if(!u)return null
let w=Gl(e,t,e.host.clientIdentifier,e.client.deviceType)
if(s(o)){const e=[]
for(const t of w)o.includes(t)&&e.push(t)
w=e}if(0===w.length)return null
for(const t of w){const r=Ql(e,t,e.client.screenSize)
for(const t of Object.keys(u)){const r=c(u,t),o=[]
for(const i of r){const r=p(i,EL)
if(!r){Uh.unexpectedNull(LF,vx,`videoPreviewsByType.${t}.previewFrame`)
continue}const a=d(i,HF)
if(!a){Uh.unexpectedNull(LF,y$,`videoPreviewsByType.${t}.video`)
continue}const c=nt(e,d(r,b$),f(r,Ix),f(r,lM),null,null,d(r,IS))
s(l)&&(c.crop=l),o.push(new kB(a,c,n))}h[t]=o}for(const e of r)if(h[e])return new IK(h[e],xl(0,t,e))}return null})}function Fl(e,t){return Uh.context("videoPreviewsFromApiPlatformData",()=>{const n=Nl(e,t,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}})
return n?n.videos:[]})}function $l(e,t,n,o=null,s,i,a=!1,c){return Uh.context("screenshotsFromData",()=>{const l=[]
r(i)&&(i=_e(e,t))
let u=o
if(!u||0===u.length){const n=s||e.host.clientIdentifier
let r=e.client.deviceType
n===_B&&(r=W$),u=Gl(e,t,n,r)}for(const r of u){const o=[]
let s
if(r===MF?(s=lu(e,t,EF),au(e,t,EF)&&o.push("faceTime")):s="tv"===r?uu(e,t,i,a,DM):r===v$?uu(e,t,i,a,VN):r===H$?uu(e,t,i,a,sN):uu(e,t,i,a),!s)continue
const u=Ul(e,s,r,n,o,c)
u&&l.push(u)}return l})}function Bl(e,t,n,r=null,o=null,s){return function(e,t){const n=[]
if(t&&t.length>0){const r=t.map(e=>e.mediaPlatform)
for(const o of t){const t=[]
for(const e of o.artwork){const n=new wj
n.screenshot=e,t.push(n)}const s=o.mediaPlatform,i=new gj(t,s,r)
if(e.props.enabled("restoreMessagesScreenshots"))n.push(i)
else{const e=i.mediaPlatform.appPlatform===MF,t=e&&1===i.allPlatforms.length
i.allPlatforms=i.allPlatforms.filter(e=>t||e.appPlatform!==MF),!t&&e||n.push(i)}}}return n}(e,$l(e,t,n,r,s,o))}function Ul(e,t,n,r,o,s){const a=function(e,t){return t===MF?e.client.deviceType===_$?_$:U$:t}(e,n),l=Ql(e,a,e.client.screenSize)
let u,d=null
for(let e=0;e<l.length&&!i(d);e++)d=c(t,l[e]),u=l[e]
if(i(d)){const t=d.map(function(t){return El(e,t,{useCase:r,cropCode:s})}),i=xl(0,n,u,o)
return new iB(t,i)}return null}function Gl(e,t,n,r){return ce(t,`sortedAppPlatformsFromData.${n}.${r}`,()=>{const o=Vl(e,t),s=[]
let i=[]
const a=function(e,t){-1===i.indexOf(e)&&-1===s.indexOf(e)&&-1!==o.indexOf(e)&&(i.push(e),t&&s.push(t))}
switch(n){case _B:a(W$)
break
case LB:a(MF)}switch(r){case U$:a(U$)
break
case _$:a(_$)
break
case"tv":a("tv")
break
case W$:a(W$)
break
case H$:a(H$)
break
case v$:a(v$)}return e.appleSilicon.isSupportEnabled?(a(_$),a(U$)):(a(U$),a(_$)),a(H$),a(v$),a("tv"),a(W$),a(MF),i=i.filter(function(e){return-1===s.indexOf(e)}),i})}function Vl(e,t){return t?ce(t,"supportedAppPlatformsFromData",()=>{const n=iu(e,t,EF),r=cu(e,t),o=function(e,t){return Se(e,t,iF)}(e,t),s=H(t,qE),i=[]
for(const e of s)switch(e){case sF:r||i.push(U$)
break
case pF:r||i.push(_$)
break
case cM:i.push("tv")
break
case W$:i.push(W$)
break
case HM:i.push(v$)}return n&&i.push(MF),o&&i.push(W$),ge(e,t,H$)&&i.push(H$),i}):null}function jl(e,t,n){return n&&z(t,Ag)}function Hl(e,t){let n
return e.isAvailable(Gw)&&[OL,Sx].includes(e.client.buildType)&&(0,Gh.isSome)(e.ads.fetchAppBinaryTraitsOverride)&&(n=e.ads.fetchAppBinaryTraitsOverride()),(0,Gh.isNothing)(n)&&(n=pe(t,EF,Tm)),n}function Wl(e,t,n){if(jl(0,t,n)){const n=Pe(e,t,"minimumMacOSVersion")
if(i(n))return n}return he(t,Ce(e,t),OF)}function ql(e,t,n,r){switch(t){case U$:return[U$,MF]
case _$:return[U$,_$,MF]
case"tv":return["tv"]
case W$:return[W$]
case H$:return n?[H$,U$,_$]:[H$]
case v$:return r?[v$,U$,_$]:[v$]
default:return[]}}function zl(e,t,n){return-1!==t.indexOf(n)}function Yl(e,t,n,r,o,s=!0){const i=function(e,t,n,r){switch(t){case U$:return[U$,W$,MF,"tv",v$]
case _$:return[U$,_$,MF,"tv",v$]
case"tv":return["tv"]
case W$:return[W$]
case H$:return n?[H$,U$,_$]:[H$]
case v$:return r?[v$,U$,_$]:[v$]
default:return[]}}(0,n,r,o)
return!!i.some(e=>zl(0,t,e))}function Jl(e,t){var n
const o=new PK
if(e.client.deviceType!==H$)return o
if(t.type!==x$)return o.runsOnIntel=null===(n=Ie(e,t,"runsOnIntel",ke(e)))||void 0===n||n,o.runsOnAppleSilicon=Se(e,t,"runsOnAppleSilicon",ke(e)),o.requiresRosetta=Se(e,t,Pm,ke(e)),o
const s=se(t,q$)
if(0===s.length)return o
for(const t of s){if(r(t.attributes))continue
const n=Jl(e,t)
o.runsOnIntel=o.runsOnIntel&&n.runsOnIntel,o.runsOnAppleSilicon=o.runsOnAppleSilicon&&n.runsOnAppleSilicon,o.requiresRosetta=o.requiresRosetta||n.requiresRosetta}return o}function Zl(e,t,n,r){const o=Jl(e,t)
return n?o.runsOnAppleSilicon&&(!o.requiresRosetta||o.requiresRosetta&&r):o.runsOnIntel}function Kl(e,t,n,r,o){const s=function(e,t,n,r){switch(t){case U$:return[U$,W$,MF]
case _$:return[U$,_$,MF]
case"tv":return["tv"]
case W$:return[W$]
case H$:return n?[H$,U$,_$]:[H$]
case v$:return r?[v$,U$,_$]:[v$]
default:return[]}}(0,n,r,o)
return s.some(e=>zl(0,t,e))}function Ql(e,t,n){switch(t){case H$:return[H$]
case W$:return[zE,CS,kS,ES]
case"tv":return["appleTV"]
case v$:return["appleVisionPro"]
case _$:{const t=[]
return(n.isEqualTo(MK)||n.isEqualTo(NK)||n.isEqualTo(BK)||n.isEqualTo(UK))&&e.client.screenCornerRadius>0?(t.push(bx),t.push(Cx),t.push(RL),t.push(DL),t.push(pF)):n.isEqualTo(xK)?(t.push(RL),t.push(bx),t.push(Cx),t.push(DL),t.push(pF)):n.isEqualTo(_K)||n.isEqualTo(LK)||n.isEqualTo(FK)||n.isEqualTo($K)||n.isEqualTo(GK)||n.isEqualTo(VK)?(t.push(Cx),t.push(bx),t.push(RL),t.push(DL),t.push(pF)):n.isEqualTo(DK)?(t.push(DL),t.push(pF),t.push(Cx),t.push(RL),t.push(bx)):n.isEqualTo(zK)?(t.push(Cx),t.push(RL),t.push(bx),t.push(DL),t.push(pF)):n.isEqualTo(RK)?(t.push(pF),t.push(DL),t.push(Cx),t.push(RL),t.push(bx)):(t.push(bx),t.push(Cx),t.push(pF),t.push(DL),t.push(RL)),t}case U$:{let e
e=n.isEqualTo(SK)||n.isEqualTo(ZK)?OS:n.isEqualTo(bK)||n.isEqualTo(YK)||n.isEqualTo(JK)?YE:n.isEqualTo(OK)?sF:n.isEqualTo(EK)?Im:n.isEqualTo(kK)?Sm:n.isEqualTo(CK)?bm:n.isEqualTo(KK)?RS:n.isEqualTo(QK)?DS:YE
const t=XK.indexOf(e),r=XK.slice(0,t)
r.reverse()
const o=XK.slice(t+1)
return[e].concat(r,o)}default:return[]}}function Xl(e,t){if(r(t))return null
const n=Ae(e,t,pm),o=Ae(e,t,hm),s=jl(0,t,!0)
if(me(e,t,H$)&&!s){const s=function(e,t){const n=ft(e,t)
if(r(n))return null
const o=c(n,"assets")
if(!o.length)return null
for(const e of o)if(d(e,"flavor")===Ev)return f(e,WO)
return null}(e,t)
if(i(o)){const e=f(o,Cm)
return new EB(s,null,null,e)}if(i(n)){const e=f(n,km),t=f(n,Em)
return new EB(s,e,t,null)}return new EB(s,null,null,null)}{const r=j(t,dm)
if(r){let t=[]
e.client.thinnedApplicationVariantIdentifier&&(t=e.client.thinnedApplicationVariantIdentifier.split(" ")),t=t.concat([e.host.deviceModel,"universal"])
for(const e of t){const t=f(r[e])
if(t){if(i(o)){const e=f(o,Cm)
return new EB(t,null,null,e)}if(i(n)){const e=f(n,km),r=f(n,Em)
return new EB(t,e,r,null)}return new EB(t,null,null,null)}}}}return null}function eu(e,t,n){let r,i=null,a=null,c=null,l=null
switch(e.client.deviceType){case H$:n.supportsArcade?(i=_S,c="sr"):(i="editorialArtwork.centeredFullscreenBackground",c="ep")
break
case"tv":n.presentedInTopShelf?(i=Om,c="sr"):(i=_S,c="ta",a="editorialArtwork.fullscreenBackground",l="sr")
break
case v$:i="editorialArtwork.productUberStatic16x9",c="sr"
break
default:n.supportsArcade?n.prefersCompactVariant||e.client.isPhone?(i="editorialArtwork.splashTall",c="oc"):(i=_S,c="oh"):(i=JE,c="sr")}return r=Ae(e,t,i),null!==a&&o(r)&&(r=Ae(e,t,a),null!==l&&(c=l)),s(r)&&s(c)?El(e,r,{cropCode:c,useCase:21,withJoeColorPlaceholder:!0,overrideHeight:null,overrideWidth:null}):null}function tu(e,t,n,o,a){let c=[]
if(i(o))c=o
else switch(e.client.deviceType){case H$:case"tv":c=[LS]
break
case _$:c=[xS]
break
case v$:c=["productUberMotion16x9"]
break
default:c=[MS]}let l=null,u=null
for(const n of c)if(l=Ae(e,t,[o$,n]),u=Ae(e,t,[o$,n,EL]),i(l))break
const f=null!=a?a:El(e,u,{useCase:n,withJoeColorPlaceholder:!0,cropCode:"sr"})
if(s(l)){const e=d(l,HF)
if(r(e))return null
let t,n
return t={prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},n={muteUnmute:!0},new kB(e,f,{allowsAutoPlay:!0,looping:!0,canPlayFullScreen:!1,showPlaybackControls:!1,playbackControls:t,autoPlayPlaybackControls:n})}return null}function nu(e,t,n){let r=null
switch(e.client.deviceType){case H$:case"tv":case U$:case v$:r=[LS,xS,MS]
break
default:r=[xS,LS,MS]}return tu(e,t,21,r,n)}function ru(e,t){return s(t)?`${YU}:/${dG}/${vG}?${hV}=${t.href}`:null}function ou(e,t,n){return Ge(e,new hH(e).forType(C_).addingQuery(VE,q$).addingQuery(oM,n).addingQuery(mF,t).includingMacOSCompatibleIOSAppsWhenSupported(!0)).toString()}function su(e,t){switch(t){case DB:case NB:return"appStore"
case _B:return W$
case LB:return MF
case MB:return NS
default:return null}}function iu(e,t,n){return Se(e,t,"hasMessagesExtension",n)}function au(e,t,n){return Se(e,t,fS,n)}function cu(e,t){return Se(e,t,"isHiddenFromSpringboard")}function lu(e,t,n){return Ae(e,t,dS,n)}function uu(e,t,n,r,o){return Ee(e,t,n,r?qR:qM,o)}function du(e,t){return Se(e,t,_m)}function fu(e,t,n,r=!1){var o,s
if((0,Gh.isNothing)(t))return null
let i
if(r){const r=Mt(t)
J(r)&&(i=Pe(e,r,[qN,n]))}return i=null!==(s=null!==(o=null!=i?i:Pe(e,t,[PL,n]))&&void 0!==o?o:Pe(e,t,[qN,n]))&&void 0!==s?s:Pe(e,t,["itunesNotes",n]),i}function pu(e,t,n,r=!1){var o
let s
if(r){const r=Mt(t)
J(r)&&(s=Pe(e,r,[qN,n]))}return s=null!==(o=null!=s?s:Pe(e,t,[PL,n]))&&void 0!==o?o:Pe(e,t,[qN,n]),s}function hu(e,t){return ce(t,"isMacOSInstaller",()=>!1)}function wu(e,t){const n=Je(e)
return!(!function(e,t,n){if(n&&Je(e).isSystemAppFromData(t)){const e=W(t,"watchBundleId")
if(i(e))switch(e){case"com.apple.mobilemail.watchkitapp":case"com.apple.news.watchkitapp":case"com.apple.iBooks.watchkitapp":return!0
default:return!1}}return!1}(e,t,e.client.isTinkerWatch)&&(!e.client.isTinkerWatch||(n.isSystemAppFromData(t)?Se(e,t,SI)||Se(e,t,tM):Se(e,t,II)||Se(e,t,tM))))}function gu(e,t){switch(t){case bx:return 18/MK.width
case Cx:return 18/_K.width
case OS:return 41.5/SK.width
case YE:return 39/bK.width
case RS:return 55/KK.width
case DS:return 55/QK.width
case kS:return 34/HK.width
case CS:return 55/WK.width
case zE:return 108/qK.width
default:return null}}function mu(e,t){if(r(t)||0===t.length)return!0
const n=t.split("."),o=f(n[0])||0,s=f(n[1])||0,i=f(n[2])||0
return e.host.isOSAtLeast(o,s,i)}function yu(e,t){return!r(t)&&0!==t.length&&e.client.isActivePairedWatchSystemVersionBelow(t)}function vu(e,t){switch(t){case g$:case SF:case O_:case R_:case dD:case iM:case ZE:return!0
default:return!1}}function Au(e,t){switch(t){case"LockupSmall":case"LockupLarge":case $S:case BS:case KE:case fD:case QE:case pD:case US:return!0
default:return!1}}function Tu(e,t,n){const r=ft(e,t)
if(d(r,aN)===DN){const n=d(r,kx),o=Pe(e,t,zM)
if(i(o)){if(i(n)){const t=je(n),r={"@@expectedDateMY@@":e.loc.string("PreOrder.Date.MonthYear"),"@@expectedDateMDY@@":e.loc.string("PreOrder.Date.MonthDayYear")}
for(const[n,s]of Object.entries(r))if(o.includes(n)){let r=e.loc.formatDateWithContext(s,t,"middleOfSentence")
return o.replace(n,r)}}return o}}return n}function Pu(e,t){const n=oe(t,PF)
return i(n)?n:Se(e,t,AL)?oe(t,bF):null}function Iu(e,t){let n=t.targetType
return n||(n=r$),n}function Su(e){let t=e.idType
return t===UF?t=null:t||(t=HN),t}function bu(e,t){return du(e,t)?FF:null}function Cu(e,t){const n=d(t,aN),r=(ge(e,t,H$,!0),me(e,t,H$,!0)),o=function(e,t,n,r=!1){const o=new Set(ve(e,t,r))
for(const e of n)if(o.has(e))return!0
return!1}(e,t,[sF,pF,k_,cM,W$],!0),s=ye(e,t,[sF,pF,k_,cM,W$],!0),i=(ge(e,t,HM,!0),me(e,t,HM,!0))
if(r)switch(n){case q$:return Ev
case x$:return"macSoftwareBundle"}if(i&&n===q$)return"visionSoftware"
if(s||o)switch(n){case q$:return Ov
case x$:return"mobileSoftwareBundle"}switch(n){case QF:return"softwareAddOn"
case jN:return N_
case XE:case M$:return sx
default:return null}}function ku(e){return null==e?"":e}function Eu(e){if(!e)return null
const t=new nj(e)
let n=null
for(const e of Object.keys(t.query))if("referrer"===e){t.query[e]===Rv&&(n="com.apple.siri")
break}return n}function Ou(e){return h(Ru(m(e)))}function Ru(e){if(r(e))return null
if(e instanceof Array){const t=[]
for(const n of e){const e=Ru(n)
s(e)&&t.push(e)}return t}if(e instanceof Object){const t={}
return Object.keys(e).forEach((n,r,o)=>{const i=Ru(e[n])
s(i)&&(t[n]=i)}),t}return e}function Du(e){if(!e)return null
const t=new nj(e),n=t.query.term,o=t.pathname
return r(n)||r(o)?null:o.endsWith("/search")?n:null}function _u(e,t,n,r){if(!t||!n)return D$
if(t.type===x$)return mI
const o=n.style
switch(o){case yL:return EF
case WE:return H$
case HE:return"tv"
case uD:return Ll(e,t,r)===VN?v$:W$
case E_:return MF
case rM:return rM
default:return ae(o),D$}}function Lu(e,t){if(!s(t))return null
const n={},r=p(t,nC)
if(!i(r))return null
const o=d(r,Lv);(null==o?void 0:o.length)>0&&(n[Lv]=o)
const a=d(r,xv);(null==a?void 0:a.length)>0&&(n[xv]=a)
const c=d(r,Mv)
return(null==c?void 0:c.length)>0&&(n[Mv]=c),n.marketing={marketingItemId:t.id},n}function xu(e,t,n){let o
return s(e)&&(o=v(e)),s(t)&&(r(o)&&(o={}),o.odpModuleUpdate=t.toString()),i(n)&&(r(o)&&(o={}),o.userSegment=n),o}function Mu(e,t,n){const r=qu(t.locationTracker)
return[Hu(0,t,n),...r]}function Nu(e,t,n){const r=qu(t.locationTracker)
return[Wu(0,t,n),...r]}function Fu(e,t,n){const r=new eQ
r.location=Hu(0,t,n),t.locationTracker.locationStack.unshift(r)}function $u(e,t,n){const r=new eQ
r.location=Wu(0,t,n),t.locationTracker.locationStack.unshift(r)}function Bu(e){0!==e.locationStack.length?e.locationStack.shift():Uh.unexpectedType(LF,"non-empty location stack","empty location stack")}function Uu(e){const t=zu(e)
return t?t.position:e.rootPosition}function Gu(e){const t=zu(e)
return t?t.location:null}function Vu(e,t){const n=zu(e)
n?n.position=t:e.rootPosition=t}function ju(e){const t=zu(e)
t?t.position++:e.rootPosition++}function Hu(e,t,n){var r
const o=Wu(0,t,n)
if(!t.id&&t.locationTracker)o.idType=XF,o.id=Uu(t.locationTracker).toString()
else{const e=Su(t);(0,Gh.isSome)(e)&&(o.idType=e)
let n=t.id;(null===(r=t.anonymizationOptions)||void 0===r?void 0:r.anonymizationString)&&(n=t.anonymizationOptions.anonymizationString),o.id=ku(n)}return t.fcKind&&(o.fcKind=t.fcKind),t.displayStyle&&(o.displayStyle=t.displayStyle),t.inAppEventId&&(o.inAppEventId=t.inAppEventId),t.relatedSubjectIds&&(o.relatedSubjectIds=t.relatedSubjectIds),t.canonicalId&&(o.canonicalId=t.canonicalId),t.optimizationEntityId&&(o.optimizationEntityId=t.optimizationEntityId),t.optimizationId&&(o.optimizationId=t.optimizationId),(0,Gh.isSome)(t.rowIndex)&&(o.rowIndex=t.rowIndex),t.productVariantData&&Object.assign(o,$e(t.productVariantData)),o}function Wu(e,t,n){var r
let o=n;(null===(r=t.anonymizationOptions)||void 0===r?void 0:r.anonymizationString)&&(o=t.anonymizationOptions.anonymizationString)
const s={locationPosition:Uu(t.locationTracker),locationType:Iu(0,t),name:ku(o)}
return(0,Gh.isSome)(t.badges)&&(s.badges=m(t.badges)),t.recoMetricsData&&Object.assign(s,t.recoMetricsData),s}function qu(e){return e.locationStack.map(e=>e.location)}function zu(e){return 0===e.locationStack.length?null:e.locationStack[0]}function Yu(e,t,n,r=null,o=null){const s=d(n,tQ)
if((0,Gh.isNothing)(s))return null
const i=JSON.parse(s),a=oQ.placementTypeFromPlacementId(d(i,dM)),c=new oQ(e,a,oQ.createInitialSlotInfos(e,a,r,o),d(i,hM),null,null,r)
return c.applyClickFieldsFromPageRequest(t,i),c}function Ju(e,t){return t}function Zu(e,t,n,r,o,s){const i={}
Object.assign(i,r),i[BN]=Lx,i[kb]=n,i[jy]=t
const a=["impressionsSnapshot",HL]
return o&&a.push(...o),Ju(0,new JB(i,a,[],ed(0,i),Xu(e,i,null,s)))}function Ku(e,t,n,r,o,s,i){const a={}
Object.assign(a,s),a.term=t,a[kb]=n,a[hx]=r,o&&(a[V_]=o),a[BN]=c$
const c=[DO]
return i&&c.push(...i),Ju(0,new JB(a,c,[],ed(0,a),Xu(e,a)))}function Qu(e,t,n,r){const o={}
Object.assign(o,t),o[BN]=YN,o[DD]="data-metrics",o[_O]=4
const s=[YN,HL,DO]
return n&&s.push(j_),r&&s.push("impressionsAppendix"),Ju(0,new JB(o,s,[],ed(0,o),Xu(e,o)))}function Xu(e,t,n=null,r){var o,s
const a=t[BN]
let c=!1
if(!i(a))return c
switch(a){case Lx:c=l(t,iQ.hasIAdData)||r
break
case Wy:c=!0
break
case YN:c=l(t,iQ.hasIAdData),t[DD]!==Ob||(null===(o=null==n?void 0:n.iAdInfo)||void 0===o?void 0:o.placementType)!==u$&&(null===(s=null==n?void 0:n.iAdInfo)||void 0===s?void 0:s.placementType)!==$F||(c=!0)
break
case $$:c=e.host.clientIdentifier===NB&&l(t,iQ.hasIAdData)}return e.host.clientIdentifier,c}function ed(e,t){return t[JR]||YB}function td(e,t,n,s){return Uh.context("clickOptionsForLockup",()=>{var i,a
const c=t.id.slice()
let l=t.id;(null===(a=null===(i=n.anonymizationOptions)||void 0===i?void 0:i.anonymizationString)||void 0===a?void 0:a.length)>0&&(l=n.anonymizationOptions.anonymizationString)
const u={...n,...s,id:l,contextualAdamId:c,softwareType:bu(e,t)}
return o(u.targetType)&&(u.targetType=r$),r(u.kind)&&(u.kind=Cu(e,t)),q(t,KF)&&(u.offerType=DN),u})}function nd(e,t,n,r,o,a,c,l,u){var d,f,p,h
const w={}
if(o){const e=o
c&&(null===(f=null===(d=e.iAdInfo)||void 0===d?void 0:d.iAdAdamId)||void 0===f?void 0:f.length)>0&&e.iAdInfo.iAdAdamId===t.adamId&&Object.assign(w,o.iAdInfo.clickFields),i(e.searchTermContext)&&(w[_F]=e.searchTermContext.term)}(0,Gh.isSome)(l)&&Object.assign(w,l),w[MM]={buyParams:t.purchaseConfiguration.buyParams},w[gL]=a,w.jet_adamId=t.adamId,t.actionMetrics.custom.jet_adamId=t.adamId,r&&(w[ND]=DN,s(t.expectedReleaseDate)&&(w[Vb]=He(t.expectedReleaseDate)))
const g=Zu(e,n,j$,w,void 0,u)
w.jet_adamId=t.adamId,t.actionMetrics.custom.jet_adamId=t.adamId,g.includingFields.push("appState"),t.purchaseConfiguration.isArcadeApp&&g.includingFields.push(sv)
const m=null!==(h=null===(p=null==o?void 0:o.iAdInfo)||void 0===p?void 0:p.shouldIncludeAdRotationFields)&&void 0!==h&&h
c&&m&&g.includingFields.push(j_),t.actionMetrics.addMetricsData(g)}function rd(e,t,n){od(e,t,{...n,actionType:jb,subscriptionSKU:e.bag.arcadeProductId,actionContext:FF,targetType:j$})}function od(e,t,n,r=!1,o){var i,a,c,l,u,d
let f=n.actionType
f||(f=A$)
const p={actionType:f}
let h
h=t instanceof iU?t.actions:[t],h.forEach(e=>{if(e instanceof nU){const t=e
p[V_]=t.pageUrl}else if(e instanceof sU){const t=e
p[V_]=t.url}}),n.actionDetails&&(p[MM]=n.actionDetails),n.actionContext&&(p[iv]=n.actionContext),s(n.offerType)&&(p[ND]=n.offerType),s(n.offerReleaseDate)&&(p[Vb]=He(n.offerReleaseDate))
let w=null==t?void 0:t.title;(null===(a=null===(i=n.anonymizationOptions)||void 0===i?void 0:i.anonymizationString)||void 0===a?void 0:a.length)>0&&(w=n.anonymizationOptions.anonymizationString),p[gL]=Mu(0,n,w),n.pageInformation&&n.pageInformation.searchTermContext&&(p[_F]=n.pageInformation.searchTermContext.term),s(n.softwareType)&&(p[z_]=n.softwareType),(n.isAdvert||n.isAdEligible)&&r&&(null===(c=n.pageInformation)||void 0===c?void 0:c.iAdInfo)&&Object.assign(p,n.pageInformation.iAdInfo.clickFields),n.mercuryMetricsData&&Object.assign(p,n.mercuryMetricsData),(0,Gh.isSome)(n.subjectIds)&&(p.subjectIds=n.subjectIds)
const g=Zu(e,n.id,null!=o?o:Iu(0,n),p)
n.actionContext===FF&&(n.actionType===tD||n.actionType===jb)&&(g.includingFields.push(sv),g.fields.jet_adamId=n.contextualAdamId,t.actionMetrics.custom.jet_adamId=t.adamId)
const m=null!==(d=null===(u=null===(l=n.pageInformation)||void 0===l?void 0:l.iAdInfo)||void 0===u?void 0:u.shouldIncludeAdRotationFields)&&void 0!==d&&d
n.isAdvert&&m&&g.includingFields.push(j_),t.actionMetrics.addMetricsData(g)}function sd(e,t,n,r){const o={}
s(n)&&(o[V_]=n),r.targetType||(r.targetType=j$),o[gL]=Nu(0,r,t.title),o[hx]=A$,o[_E]="button_See All"
const i=Zu(e,av,j$,o)
t.actionMetrics.addMetricsData(i)}function id(e,t,n){const r=Zu(e,`filter_${n}`,j$,{actionType:"filter"})
r.includingFields.push(cv),t.actionMetrics.addMetricsData(r)}function ad(e,t,n,r,o){var s,a,c,l
const u=function(e){switch(e){case YL:return YL
case B_:return B_
case Wb:return"recentQuery"
case H_:return qb
case zb:return"searchInsteadFor"
case Yb:return dv
case Jb:return Jb
default:return"submit"}}(t.origin);(0,Gh.isNothing)(o)&&(o=new sQ({page:xM,pageType:xM,pageId:xM,pageDetails:lv}))
const d={pageInformation:o,locationTracker:r,targetType:n},f={...at(o),actionType:u,actionUrl:ku(t.url),location:Nu(0,d,t.term),searchTerm:t.term},p={targetId:t.term},h={};(null===(s=t.prefixTerm)||void 0===s?void 0:s.length)&&(h[FD]=t.prefixTerm),(null===(a=t.entity)||void 0===a?void 0:a.length)&&(h[$O]=t.entity),i(h)&&(p[MM]=h),(null===(c=t.originatingTerm)||void 0===c?void 0:c.length)&&(f[Hb]=t.originatingTerm,p[Hb]=t.originatingTerm)
const w=Zu(e,t.term,n,f,[uv])
t.actionMetrics.addMetricsData(w)
const g=Ku(e,t.term,n,u,null!==(l=t.url)&&void 0!==l?l:null,p,[uv])
t.actionMetrics.addMetricsData(g)}function cd(e,t=ix,n,r,o,s,i,a=j$){const c=nj.fromComponents(YU,null,`/${oG}`,{sort:t}),l=new nU(mx,c.build())
return l.title=null!=o?o:e.loc.string(qI),od(e,l,{id:null!=s?s:Gg,idType:i,targetType:a,actionType:A$,actionContext:FF,pageInformation:n,locationTracker:r}),l}function ld(e,t,n,r,o){var i,a
const c=new YH(F$,t,n)
c.purchaseSuccessAction=r,c.carrierLinkSuccessAction=r
const l=new nU(bM)
return(0,Yh.isSome)(null===(i=null==o?void 0:o.pageInformation.searchTermContext)||void 0===i?void 0:i.term)&&(c.metricsOverlay[_F]=null===(a=o.pageInformation.searchTermContext)||void 0===a?void 0:a.term),l.pageData=c,s(o)&&rd(e,l,o),l}function ud(e,t,n,r){{const e=new rU(F$)
return s(r)&&(e.popToRoot=r),new iU([e])}}function dd(e,t=!1){let n=new hH(e).forType(ON)
return t&&(n=n.addingQuery(EE,Vg)),n}function fd(e,t){return dd(e).withSparseLimit(t).asPartialResponseLimitedToFields([I$]).usingCustomAttributes(De(e))}function pd(e,t,n){return function(e,t,n){o(t)&&(t=Xx)
const r=new hH(e).forType(bM).addingQuery("serviceType",F$).addingQuery("placement",t).includingMetaKeys(WN,[CM]).includingRelationships([V$]).includingAttributes([jg,zI])
return s(n)&&r.addingQuery(Hg,n),r}(e,t,n)}function hd(e,t){let n=null
const i=ne(t,Wg)||ne(t,WN)
if(o(i)||o(i.data))return null
const a=i.data.map(e=>e.type===WN?e:null).filter(e=>s(e))
if(o(a))return null
const c=e.bag.marketingItemSelectionTimeout
if(1===a.length||0===c)n=a[0]
else if(e.props.enabled("getMarketingItemWithTimeout"))try{n=e.arcade.getMarketingItemWithTimeout(a,c)}catch{n=a[0]}else n=e.arcade.getMarketingItemFromMarketingItems(a)
return r(n)?null:{marketingItemData:n}}function wd(e,t){if(!t)return null
let n=null
const r=c(t,EI)
return r.length>0&&(n=r[0]),s(n)?{marketingItemData:n}:null}function gd(e,t,n){switch(n){case zN:return lQ.has(t)
case yD:return aQ.has(t)
case TO:return cQ.has(t)
default:return!1}}function md(e,t,n,r,s,i){const a=[]
for(const c of t){const t=yd(e,c,n,r,s,i)
o(t)||(a.push(t),ju(r.metricsLocationTracker))}return a}function yd(e,t,n,o,i,a){const c=new WW(o.metricsPageInformation,o.metricsLocationTracker)
if(null==a&&((a={useOTDTextStyle:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,isHeroCard:!1}).isHorizontalShelfContext=!0),e.client.deviceType!==W$&&(a.coercedCollectionTodayCardDisplayStyle=fw.Grid),is(t,a.coercedCollectionTodayCardDisplayStyle),a.prevailingCropCode=function(e,t,n){switch(t){case zN:return null
case yD:return"el"
case TO:return"ek"
default:return null}}(0,n),!s(t.attributes))return i&&i(t),null
const l=rs(e,t,a,c,o.augmentingData)
if(r(l))return null
{l.collapsedHeading=hs(0,l),l.inlineDescription=Ad(e,l,t),l.inlineDescription===l.collapsedHeading&&(l.inlineDescription=null)
const n=l.media
n&&n.kind===UM&&(l.title=null)}if(n===TO){const e=l.heroMedia
if(!s(e)||0===e.artworks.length&&0===e.videos.length)return null}return gd(0,l.media.kind,n)&&s(o.filterOutMediaCardKinds)&&o.filterOutMediaCardKinds.has(l.media.kind)?null:(function(e,t,n){if("tv"!==e.client.deviceType||!z(n,Tk))return
const r=new sU("com.apple.Arcade://")
t.clickAction=r}(e,l,t),l)}function vd(e,t,n,r,o,i,a){if(!s(n))return null
const c=new rH(n)
return r&&(c.title=r),c.subtitle=o,c.isHorizontal=!0,c.items=n===_x?[Td(e,t,i.metricsPageInformation,i.metricsLocationTracker,()=>!0,a)]:md(e,t,n,i,a),c}function Ad(e,t,n){{let r=pu(e,n,z$)
return s(r)&&(r=r.replace(/\n/g," ")),t.media.kind===UM&&t.overlay instanceof xH&&s(t.overlay.lockup)?t.overlay.lockup.title:r}}function Td(e,t,n,o,i,a){return Uh.context("todayCardsFromPlatformData",()=>{if(!t)return null
const c={useOTDTextStyle:!1,enableFullScreenVideo:!1,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,isHeroCard:!1}
c.coercedCollectionTodayCardDisplayStyle=fw.Grid,c.prevailingCropCode="fo",c.isHorizontalShelfContext=!0
const l=new WW(n,o),u=[]
for(const n of t){if(!s(n.attributes)){a&&a(n)
continue}const t=rs(e,n,c,l)
if(!r(t)&&i(t)){t.collapsedHeading=hs(0,t),t.inlineDescription=Ad(e,t,n),t.inlineDescription===t.collapsedHeading&&(t.inlineDescription=null)
const r=t.media
r&&r.kind===UM&&(t.title=null),u.push(t)}}return u.length?new GH(u):null})}function Pd(e,t,n,r){const o=t.ids
return o&&o.length?`${YU}:/${cG}/${QU}/`+Id(t,n,r):null}function Id(e,t,n){return e.sourcePageInformation=t.metricsPageInformation,e.sourceLocationTracker=t.locationTracker,e.destinationPageInformation=n,encodeURIComponent(JSON.stringify(e))}function Sd(e,t,n,o,s,i,a,c){if(!t.data||0===t.data.length)return null
const l=[]
return{items:gl(e,t,{lockupOptions:{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,recoMetricsData:c},artworkUseCase:o,canDisplayArcadeOfferButton:vu(0,s),...r(i)?{}:{offerStyle:i}},shouldConsiderDataPastLastAvailable:!0,contentUnavailable:(e,t)=>(l.push(e),!1),filter:a}),unavailableIds:l}}function bd(e,t,n){if(!n)return
let r=-1,o=null
n.forEach((e,n)=>{const s=e,i=s,a=s&&s.adamId===t,c=i&&i.productIdentifier===t;(a||c)&&(r=n,o=s,i&&(i.theme="spotlight",i.offerDisplayProperties=i.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,cN,"ad",{type:sE})))}),-1!==r&&(n.splice(r,1),n.splice(0,0,o))}function Cd(e){if(-1===wQ.indexOf(e.media.kind))return!1
const t=e.clickAction
if(!t)return!0
const n=t.pageUrl
if(!n)return!0
const r=new nj(n),o=kd()
for(const e of o)if(new oj(e).matches(r))return!1
return!0}function kd(){return[{protocol:JU,path:`/{countryCode}/${cG}/{appName}/{id}`,query:[`${YG}?`,`${jG}?`,`${TV}?`,`${LV}?`,`${$V}?`,`${pV}?`,`${VV}?`]},{protocol:JU,path:`/{countryCode}/${uG}/{appName}/{id}`,query:[`${YG}?`,`${jG}?`,`${$V}?`,`${pV}?`]},{protocol:JU,path:`/{countryCode}/${cG}/{id}`,query:[`${YG}?`,`${jG}?`,`${LV}?`,`${$V}?`,`${pV}?`,`${VV}?`]},{protocol:JU,path:`/{countryCode}/${uG}/{id}`,query:[`${YG}?`,`${jG}?`,`${$V}?`,`${pV}?`]},{protocol:JU,path:`/${cG}/{appName}/{id}`,query:[`${YG}?`,`${jG}?`,`${LV}?`,`${$V}?`,`${pV}?`,`${VV}?`]},{protocol:JU,path:`/${uG}/{appName}/{id}`,query:[`${YG}?`,`${jG}?`,`${$V}?`,`${pV}?`]},{protocol:JU,path:`/${cG}/{id}`,query:[`${YG}?`,`${jG}?`,`${LV}?`,`${$V}?`,`${pV}?`,`${VV}?`]},{protocol:JU,path:`/${cG}/{id}`,query:[`${zG}?`,`${_V}?`,`${$V}?`,`${pV}?`,`${VV}?`]},{protocol:JU,path:`/${uG}/{id}`,query:[`${YG}?`,`${jG}?`,`${$V}?`,`${pV}?`]},{protocol:JU,query:[GG,`${$V}?`,`${pV}?`,`${VV}?`]},{protocol:JU,query:[YG,xG,`${fV}?`,`${$V}?`,`${pV}?`]},{protocol:JU,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/catalog/{countryCode}/apps/{id}",query:[`${$V}?`,`${pV}?`]},{protocol:JU,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/catalog/{countryCode}/app-bundles/{id}",query:[]},{protocol:JU,path:"{apiVersion}/catalog/{countryCode}/apps/{id}",query:[`${$V}?`,`${pV}?`]},{protocol:JU,path:"{apiVersion}/catalog/{countryCode}/app-bundles/{id}",query:[`${$V}?`,`${pV}?`]},{protocol:JU,hostName:`${bG}`,path:`/${lG}/{id}`,query:[`${$V}?`,`${pV}?`]},{protocol:JU,path:`/${XU}/${rG}`,query:[LG,`${zG}?`,`${$V}?`,`${pV}?`]},{protocol:YU,path:`/${cG}/{id}`,query:[DV,`${_V}?`,`${LV}?`,`${$V}?`,`${pV}?`,`${VV}?`]}]}function Ed(e,t,n){const r=n[$N],o=JSON.parse(r)
let s
if(o.isBundleShelf)s=x$
else switch(o.contentType){case zN:case _x:s=M$
break
case bL:s=QF
break
default:s=q$}const i=[w$,o$,OF]
return e.appleSilicon.isSupportEnabled&&i.push(NF),new hH(e).withIdsOfType(o.ids,s).includingAdditionalPlatforms(E(e)).includingAttributes(s===QF?[]:i)}function Od(e,t,n,a,c=!1){const l=n[$N],u=JSON.parse(l,(t,n)=>typeof n===vx&&"iAdInfo"===t&&i(n)?oQ.from(e,n):n)
n[FV]===QV&&fK.resetLocationTrackerForSimilarItemsDuringDownloadShelf(e,u)
const d=function(e,t,n,o){return Uh.context("shelfFromLookupResponse",()=>{var i,a
const c=new rH(n.contentType),l=M(t),u={pageInformation:n.sourcePageInformation,locationTracker:n.sourceLocationTracker,excludeAttribution:!0,recoMetricsData:null!=l?l:n.recoMetricsData}
let d
switch(n.contentType){case _x:const l=Td(e,t.data,u.pageInformation,u.locationTracker,Cd)
s(l)&&(d=[l])
break
case zN:const f={metricsLocationTracker:u.locationTracker,metricsPageInformation:u.pageInformation,filterOutMediaCardKinds:Rd(e.host.platform)},p={useOTDTextStyle:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,isHeroCard:!1,videoPlaybackControls:{prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1},videoAutoplayPlaybackControls:{prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1},isHorizontalShelfContext:!0}
d=md(e,t.data,n.contentType,f,null,p).filter(e=>gd(0,e.media.kind,zN))
break
default:const h={metricsOptions:u,offerStyle:n.offerStyle,artworkUseCase:kl(0,n.contentType),canDisplayArcadeOfferButton:vu(0,n.contentType)}
n.contentType===bL&&(h.skipDefaultClickAction=!0)
const w={lockupOptions:h}
let g
if(n.isBundleShelf&&(w.filter=0),dn(e,u$)||dn(e,$F)){g=yo(0,n.sourcePageInformation.iAdInfo),To(e,g,o)
const s=function(e,t){var n
const o=null===(n=null==t?void 0:t.onDeviceAd)||void 0===n?void 0:n.positionInfo
if(r(o))return null
let s
switch(t.placementType){case u$:s=px
break
case $F:s=FI}return aa(t,{shelfIdentifier:s,slot:o.slot-1})}(0,o)
null===(i=u.pageInformation.iAdInfo)||void 0===i||i.updateForAdResponse(e,o)
const c=function(e,t){if(r(e))return[]
const n=[]
return Object.entries(e.tasks).forEach(([r,o])=>{r.startsWith(t)&&(n.push(o),delete e.tasks[r])}),n}(s,null===(a=Gu(n.sourceLocationTracker))||void 0===a?void 0:a.id)
c.forEach(e=>{t.data=t.data.filter(t=>t.id!==e.data.id),t.data.splice(e.positionInfo.slot,0,e.data)})}const m=gl(e,t,w),y={[_B]:uD,[LB]:E_}[e.host.clientIdentifier]
y&&m.sort((e,t)=>{const n=e.icon.style===y,r=t.icon.style===y
return n&&r?0:n&&!r?-1:1})
const v=n.spotlightInAppProductIdentifier
v&&bd(0,v,m),c.adIncidents=vo(0,g),d=m}return c.items=d,c})}(e,t,u,a)
if(d.mergeWhenFetched=!0,c&&function(e,t,n,o){if(r(n))return
let s=[]
const i=at(n),a=Hn(e,n,o)
s.push(a)
const c=zn(e,n,o).map(e=>e.data)
s=s.concat(c),jn(i),s.forEach(e=>jn(e.fields)),t.pageChangeMetrics={pageFields:i,updatedEvents:s}}(e,d,u.sourcePageInformation),d.refreshUrl=u.refreshUrl,n[FV]===QV&&fK.addImpressionsFieldsToSimilarItemsDuringDownloadShelf(e,d,u),u.shouldInferSeeAllFromFetchesItems){const t=new nU($$)
t.title=e.loc.string(XN)
const n=new rH(d.contentType)
n.items=function(e,t,n,r=!1){if(!t)return null
let o=0
const i=[]
for(const e of t){if(r&&s(e.searchAd)){o+=1
continue}const t=v(e)
if(n&&t.offerDisplayProperties&&(t.offerDisplayProperties=t.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,n)),o>0){const e=v(t.impressionMetrics.fields),n=f(e.impressionIndex);(0,Gh.isSome)(n)&&(e.impressionIndex=n-o,t.impressionMetrics=new XB(e,t.impressionMetrics.id,t.impressionMetrics.custom))}i.push(t)}return i}(0,d.items,kF,!0)
const r=new cH([n])
Fn(e,r,u.destinationPageInformation),r.title=u.title,t.pageData=r,sd(e,t,null,{pageInformation:u.sourcePageInformation,locationTracker:u.sourceLocationTracker}),d.seeAllAction=t}return o(d.items)&&!u.hasExistingContent&&(d.isHidden=!0),d}function Rd(e){const t=new Set([l_])
return e===GM&&(t.add(UM),t.add(pI),t.add(Qx),t.add(hI)),t}async function Dd(e,t){const n=e.required(gQ)
0!==Nr(e,new nj(t.url)).length&&e.network.fetch({url:e.bag.redirectUrlEndpoint,method:EM,headers:{"Content-Type":v_},body:`url=${encodeURIComponent(t.url)}`})
const r=new Fh.FetchTimingMetricsBuilder,o=e.addingFetchTimingMetricsBuilder(r)
return await n.fetchAction(o,t.url,t.referrerData).then(n=>{if(!n)throw new Error(`Promise resolved to null action for: ${t.url}`)
if(t.isIncomingURL){const e=[n]
if(n instanceof rU)for(const t of n.actions)e.push(t)
for(const t of e){const e=t.pageData
e&&typeof e===vx&&nD in e&&Vn(0,e)}}if(n.actionClass===tE){const e=n
e.page===tN||e.page===WF||e.page===iS||e.page===bM||e.page===GR||e.page===VR?e.presentationContext=kF:e.page===am?e.presentationContext=CI:e.page===y_?e.presentationContext=vN:t.isIncomingURL?e.presentationContext=IE:(e.presentationContext="replace",e.animationBehavior=wF)}return t.isIncomingURL&&(e.deepLinks.hasResilientDeepLinks()||e.deepLinks.removeDeepLink(t.url)),r.decorate(n),n}).catch(n=>{let r=[]
n instanceof qZ?r=n.reasons.filter(e=>e instanceof YY):n instanceof YY&&r.push(n)
for(const n of r)if(204===n.statusCode){const n=new IU(T$)
n.title=e.loc.string("APP_NOT_AVAILABLE_TITLE"),n.message=e.loc.string("APP_NOT_AVAILABLE_MESSAGE"),n.isCancelable=!0
{const r=new rU(L$)
if(r.title=e.loc.string(aS),w(new nj(t.url).query[cm])){const e=new UU
r.actions=[n,e]}else r.actions=[n]
return r}}throw Error(n.message)})}function _d(e,t,n){switch(t){case OI:return function(e,t){const n=va(e,e.bag.accountUrl)
return n.title=e.loc.string("VIEW_ACCOUNT_INFO",jR),od(e,n,{...t,id:gF,actionType:A$},!1,dx),n}(e,n)
case RI:return function(e,t){const n=va(e,e.bag.signup)
return n.title=e.loc.string("ACCOUNT_CREATE_APPLE_ID","Create New Apple ID"),od(e,n,{...t,id:gF,actionType:A$},!1,dx),n}(e,n)
case TE:return function(e,t){if((0,Gh.isNothing)(e.bag.purchaseHistoryUrl))return null
const n=va(e,e.bag.purchaseHistoryUrl)
return n.title=e.loc.string("ACCOUNT_PURCHASE_HISTORY"),n.presentationContext=IE,od(e,n,{...t,id:TE,actionType:A$},!1,dx),n}(e,n)
case u_:return function(e,t){if(e.user&&e.user.isManagedAppleID)return null
const n=va(e,e.bag.redeemUrl)
return n.title=e.loc.string("ACCOUNT_REDEEM",xI),od(e,n,{...t,id:"redeemGiftCardOrCode",actionType:A$},!1,dx),n}(e,n)
case DI:return function(e,t){if(!e.bag.isMonetaryGiftingEnabled)return null
const n=va(e,d_)
return n.title=e.loc.string("ACCOUNT_SEND_GIFT",bg),od(e,n,{...t,id:"sendGiftCardByEmail",actionType:A$},!1,dx),n}(e,n)
case _I:return function(e,t){var n
const r=e.bag.accountTopUpURL
if(o(r))return null
const s=va(e,r)
return s.title=null!==(n=e.bag.accountTopUpTitle)&&void 0!==n?n:e.loc.string("ACCOUNT_TOP_UP"),od(e,s,{...t,id:"addFundsToAppleId",actionType:A$},!1,dx),s}(e,n)
case LI:return function(e,t){const n=new OU(FF,Cg)
return n.title=e.loc.string("ACCOUNT_SETUP_FAMILY_SHARING"),od(e,n,{...t,id:"setUpFamilySharing",actionType:A$},!1,dx),n}(e,n)
case PE:return function(e,t){const n=va(e,e.bag.manageSubscriptionsV2Url)
return n.title=e.loc.string("ACCOUNT_SUBSCRIPTIONS"),n.presentationContext=IE,od(e,n,{...t,id:PE,actionType:A$},!1,dx),n}(e,n)
default:return null}}function Ld(e){const t=new Fh.FetchTimingMetricsBuilder,n=e.addingFetchTimingMetricsBuilder(t),r={pageInformation:Nn(e,jR,gF,""),locationTracker:{rootPosition:0,locationStack:[]},targetType:m$},o=t.measureModelConstruction(()=>{const t=new RQ
return t.links[OI]=_d(e,OI,r),t.links[RI]=_d(e,RI,r),t.links[u_]=_d(e,u_,r),t.links[DI]=_d(e,DI,r),t.links[_I]=_d(e,_I,r),t.links[LI]=_d(e,LI,r),t.links[PE]=_d(e,PE,r),t.links[TE]=_d(e,TE,r),t})
return Fn(n,o,r.pageInformation),o}async function xd(e,t){return await e.required(gQ).fetchPage(e,t,IQ)}async function Md(e){let t
try{t=await Mr(e,function(e){return new hH(e).forType(Mk)}(e))}catch{t=void 0}return function(e,t){const r=[],o=new bQ,s=new mB(e.loc.string("PERSONALIZATION_DESCRIPTION_OPTED_IN"),UN,AR)
o.addContentItem(new OQ(s))
const a=e.props.enabled(cI)&&e.bag.personalizedRecommendationsToggleEnabled
if(!a){const t={}
t[e.loc.string(Nk)]=$d(e)
const n=new gB(e.loc.string("PERSONALIZATION_DESCRIPTION_FOOTER_OPTED_IN").replace("{account_settings}",e.loc.string(Nk)))
o.footer=new Fj(n,t)}if(r.push(o),a){const t=new bQ
t.addContentItem(new DQ(e.loc.string(tP),!1))
const n=new gB(e.loc.string(nP))
t.footer=new Fj(n),r.push(t)}{const t=new bQ(e.loc.string("PERSONALIZATION_SECTION_USAGE_HEADER")),n=new gB(e.loc.string("PERSONALIZATION_SECTION_USAGE_FOOTER"))
t.footer=new Fj(n),t.addContentItem(new kQ(e.loc.string("PERSONALIZATION_SECTION_USAGE_CLEAR_DATA"),function(e){const t=new HU
t.title=e.loc.string("PERSONALIZATION_CLEAR_USAGE_DATA_CONFIRMATION_TITLE")
const n=new PU([t])
return n.title=e.loc.string("PERSONALIZATION_CLEAR_USAGE_DATA_CONFIRMATION_HEADER"),n.isCancelable=!0,n.destructiveActionIndex=0,n}(e))),r.push(t)}const c=new bQ(e.loc.string("PERSONALIZATION_INTERACTIONS")),l=new gB(e.loc.string("PERSONALIZATION_INTERACTIONS_FOOTER"))
c.footer=new Fj(l)
const u=e.bag.purchaseHistoryUrl;(0,Yh.isSome)(u)&&e.props.enabled("personalizedRecommendationsPurchaseHistoryUpleveling")?c.addContentItem(new kQ(e.loc.string(rP),Fd(e,tN,u,!0),nL)):c.addContentItem(new kQ(e.loc.string(rP),Fd(e,cg,null,!0),nL)),c.addContentItem(new kQ(e.loc.string("PERSONALIZATION_SUBSCRIPTIONS"),Fd(e,null,e.bag.manageSubscriptionsV2Url,!1),nL)),c.addContentItem(new kQ(e.loc.string("PERSONALIZATION_PREORDERS"),Fd(e,null,e.bag.managePreordersUrl,!0),nL)),c.addContentItem(new kQ(e.loc.string("PERSONALIZATION_RATINGS"),Fd(e,null,LQ,!0),nL)),r.push(c)
const f=new bQ(e.loc.string("PERSONALIZATION_ADDITIONAL_INFO")),p=[e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_1"),e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_2"),e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_3"),e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_4"),e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_5")].join("\n"),h=new mB(p,UN,AR)
f.addContentItem(new OQ(h)),r.push(f)
const w=n(t,"results.derived-user-info")
if(i(w)){const t=new bQ(e.loc.string("ACCOUNT_INFO")),n=["gender","birthyear"]
for(const e of n){const n=d(w,`${e}.label`),r=d(w,`${e}.value`);(null==n?void 0:n.length)>0&&(null==r?void 0:r.length)>0&&t.addContentItem(new EQ(n,r))}const o=new gB(e.loc.string("PERSONALIZATION_ACCOUNT_INFO_FOOTER"))
t.footer=new Fj(o),r.push(t)}return new IQ(e.loc.string(oP),r)}(e,t)}function Nd(e){const t=[],n=e.props.enabled(cI)&&e.bag.personalizedRecommendationsToggleEnabled,r=new bQ,o=n?e.loc.string("PersonalizedRecommendations.OptedOut.Description"):e.loc.string("PERSONALIZATION_DESCRIPTION_OPTED_OUT"),s=new mB(o)
if(r.addContentItem(new OQ(s)),t.push(r),n){const n=new bQ
n.addContentItem(new DQ(e.loc.string(tP),!1))
const r=new gB(e.loc.string(nP))
n.footer=new Fj(r),t.push(n)}else{const n=new bQ
n.addContentItem(new kQ(e.loc.string(Nk),$d(e),nL)),t.push(n)}return new IQ(e.loc.string(oP),t)}function Fd(e,t,n,r){let o
if((0,Yh.isSome)(t))o=new nU(t,n)
else{if((0,Yh.isNothing)(n))return null
o=va(e,n)}return r&&(o.presentationContext=IE),o}function $d(e){return Fd(e,void 0,e.bag.accountUrl,!1)}async function Bd(e,t){const n=new hH(e).forType(sP).addingQuery(uT,"events-reminders").addingQuery("service",aE).addingQuery(CF,"explicit")
n.isMediaRealmRequest=!0
const r=function(e,t){const n={"events-reminders":{"com.apple.AppStore":{contents:[{id:e,type:O$,notify:t}]}}}
return{method:"PATCH",headers:{"Content-Type":iP},requestBodyString:JSON.stringify(n)}}(t.appEventId,t.shouldSchedule)
return await new Promise((t,o)=>{Mr(e,n,r).then(e=>{t(!0)}).catch(e=>{o(e)})})}function Ud(e){ZQ||(ZQ=!0,KQ=new FQ(e.loc.string("PAGE_FACETS_SORTS_RELEASE_DATE"),GQ,ix),QQ=new FQ(e.loc.string("PAGE_FACETS_SORTS_LAST_UPDATED"),VQ,"lastUpdated"),XQ=new FQ(e.loc.string("PAGE_FACETS_SORTS_NAME"),jQ,z$),eX=new FQ(e.loc.string("PAGE_FACETS_SORTS_CATEGORY"),HQ,eN),tX=new FQ(e.loc.string("PAGE_FACETS_DEFAULT_ALL"),null),nX=new FQ(e.loc.string("PAGE_FACETS_FILTERS_AGE_VALUE_4PLUS"),"4Plus"),rX=new FQ(e.loc.string("PAGE_FACETS_FILTERS_AGE_VALUE_9PLUS"),"9Plus"),oX=new FQ(e.loc.string("PAGE_FACETS_FILTERS_AGE_VALUE_12PLUS"),"12Plus"),sX=new FQ(e.loc.string(Jg),qF),iX=new FQ(e.loc.string("PAGE_FACETS_FILTERS_MULTIPLAYER"),qF),aX=new FQ(e.loc.string(Zg),qF),JQ[PV]={releaseDate:[KQ],lastUpdated:[QQ],name:[XQ],category:[eX]},JQ[kV]={"4plus":[nX],"9plus":[rX],"12plus":[oX]},JQ[EV]={true:[sX],false:[]},JQ[OV]={true:[iX],false:[]},JQ[RV]={true:[aX],false:[]})}function Gd(e,t={}){Ud(e)
const n={"filter[ageRating]":[tX]}
n.groupBy=[KQ],n.with=[aX]
const r=[PV,kV,EV,OV,RV]
for(const e of r){const r=t[e]
if(o(r))continue
const a=JQ[e][r],c=cX[e]
s(a)&&i(c)&&(n[`${c}`]=a)}return n}function Vd(e,t){const n=new RU
return id(e,n,t),n}function jd(e){const t=[w$,o$,iF,hF,OM,qM]
return e.appleSilicon.isSupportEnabled&&t.push(NF),t}async function Hd(e,t){const n=e.required(gQ),r=nj.from(t.url)
return r.param(CV,JSON.stringify(t)),await n.fetchPage(e,r.build(),pH)}async function Wd(e,t){const n=e.required(gQ)
return await n.fetchMoreOfPage(e,t).then(function(e){return e})}function qd(e,t,n){return Uh.context("createShelves",()=>{const r=[]
if(0===t.length)return r
let o=!1
for(const i of t)if(o=o||!J(i.data[0]),o)n.remainingGroups.push(i)
else{const t={index:n.lastShelfIndex,title:Jd(e,i),contentType:(s=n.isCompactMode,s?g$:O_),shouldFilter:!1,remainingContent:i.data,groupKind:i.kind,isCompactMode:n.isCompactMode,hasExistingContent:!1,isFirstRender:!0,metricsPageInformation:n.metricsPageInformation,metricsLocationTracker:n.metricsLocationTracker},o=zd(e,t)
r.push(o),n.lastShelfIndex++}var s
return r})}function zd(e,t){const n=[],r=new rH(t.contentType)
r.title=t.title,r.presentationHints={showSupplementaryText:!1},r.isHorizontal=t.groupKind===m_||t.groupKind===eN
const s={id:`${t.index}`,kind:null,softwareType:null,targetType:l$,title:r.title,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,idType:XF}
for(nn(0,r,s),Fu(0,s,r.title);i(t.remainingContent)&&J(t.remainingContent[0]);){const r=t.remainingContent.shift(),o={metricsOptions:{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:M(r)},artworkUseCase:1,canDisplayArcadeOfferButton:vu(0,t.contentType),shouldHideArcadeHeader:e.featureFlags.isEnabled(wL),isContainedInPreorderExclusiveShelf:t.groupKind===m_},s=dl(e,r,o,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}},null,null)
Zd(e,s,r)&&(s.editorialTagline=null,s.developerTagline=null,n.push(s),ju(t.metricsLocationTracker))}return r.mergeWhenFetched=t.hasExistingContent,t.hasExistingContent=t.hasExistingContent||n.length>0,r.items=n,i(t.remainingContent)?r.url=function(e){return o(e.remainingContent)?null:`${YU}:/${oG}/${QU}/?${bV}=${encodeURIComponent(JSON.stringify(e))}`}(t):"tv"!==e.client.deviceType&&t.isCompactMode&&r.items.length<3&&(r.rowsPerColumn=r.items.length),Bu(t.metricsLocationTracker),r}function Yd(e,t){const n=Gd(e,t),r={}
for(const e of Object.keys(n))r[e]=n[e].map(e=>({value:e.value,title:e.title,metricsValue:e.metricsValue}))
const o={url:`${YU}:/${oG}`,isCompactMode:!1,selectedFacetOptions:r},s=t[CV]
if(i(s)){const e=h(JSON.parse(s))
o.isCompactMode=e.isCompactMode,Object.assign(o.selectedFacetOptions,e.selectedFacetOptions)}return o}function Jd(e,t){let n,r,o=null,s=null
if((!t.name||0===t.name.length)&&t.kind!==m_)return""
switch(t.kind){case"releaseDateByDay":o=t.name.split("-"),s=new Date(parseInt(o[0]),parseInt(o[1])-1,parseInt(o[2])),r=e.loc.string("ALL_GAMES_SECTION_TITLE_RELEASE_DATE_SENTENCE"),n=e.loc.formatDateInSentence(r,uP,s)
break
case"lastUpdatedByDay":o=t.name.split("-"),s=new Date(parseInt(o[0]),parseInt(o[1])-1,parseInt(o[2])),r=e.loc.string("ALL_GAMES_SECTION_TITLE_LAST_UPDATED_SENTENCE"),n=e.loc.formatDateInSentence(r,uP,s)
break
case m_:n=e.loc.string("Arcade.SeeAllGames.ComingSoonShelf.Title")
break
default:n=t.name}return n}function Zd(e,t,n){if(o(t.trailers)){const r=nu(e,n)
if(i(r)){const e=new Cj
r.playbackControls={prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},r.autoPlayPlaybackControls={prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0},r.canPlayFullScreen=!0,e.videos=[r],t.trailers=[e]}}return o(t.trailers)&&function(e){const t=e.screenshots[0]
if(o(t))return
const n=t.artwork[0],r=new kB(dX,n,{allowsAutoPlay:!1,looping:!1,canPlayFullScreen:!1,showPlaybackControls:!1,autoPlayPlaybackControls:{},playbackControls:{}}),s=new Cj
s.videos=[r],e.trailers=[s]}(t),i(t.trailers)}async function Kd(e,t){const n=nj.from(t)
return await e.required(gQ).fetchPage(e,n.build(),HH)}function Qd(e){let t=0,n=0
for(const r of e.shelves)(0,Yh.isSome)(r.batchGroup)&&r.batchGroup.length>0||(r.batchGroup=`shelfBatchGroup_${t}`,n++,5===n&&(n=0,t++))}async function Xd(e,t){const n=nj.from(t.url)
return n.param(ZG,"true"),n.param(KG,`${t.isSubscribed}`),n.param(QG,`${t.isTrialAvailable}`),n.param(XG,`${t.isTrialEnrolled}`),await e.required(gQ).fetchPage(e,n.build(),fH)}function ef(e,t){const n=new rU(F$)
n.popToRoot=!0
const r=new iU([n])
return r.title=t,r}async function tf(e,t){return await e.required(gQ).fetchPage(e,t,zH)}async function nf(e,t){const n=new Promise((n,r)=>{const o=t
i(o)||r(new Error("fetchUpsellGrid called with malformed contentDictionary"))
const s=se(o,V$),a={pageInformation:new sQ({}),locationTracker:{rootPosition:0,locationStack:[]}},c=Rl(e,s,a,{useCase:2}),l=c.shift()
n(new ZH(l,c))})
return await n}async function rf(e,t){const n=h(t,$N)
let r=n.buyParams
r=ct(e,d(t,eF),r,h(t,hP),l(t,wP),l(t,gP),d(t,mP),d(t,yP),d(t,Uk),p(t,CM),p(t,vP),h(t,AP),d(t,TP),d(t,"token.extRefApp2"),d(t,"token.extRefUrl2"))
const o=new nW(r),s={product:d(t,lF)||n.productIdentifier,adamId:d(t,eF),buyParams:o.toEncodedMap()}
return await Promise.resolve(s)}async function of(e,t){const n=t.offerAction,o=t.offerDisplayProperties
if(!n||!o)return await Promise.reject(new Error("Invalid offerToken for personalized offer fetch."))
const s=n.adamId,i={"Content-Type":v_},a={url:e.bag.buyButtonMetadataURL,method:EM,headers:i,body:"ids="+s,signingStyle:IM},l=e.network.fetch(a)
return await l.then(t=>{if(!t.ok)throw Error(`Bad Status code ${t.status} for ${a.url}`)
const i=p(JSON.parse(t.body),s)
let l=null,u=null
const f=function(e,t){return Uh.context("personalizedOfferTypeFromBuyButtonMetadata",()=>{const e=c(t,Y_)
if(0===e.length)return null
for(const t of e){const e=d(t,aN)
if(e)return e}return UF})}(0,i)
if(r(f))throw new Error("fetchPersonalizedOfferContext: Failed to determine offer type from buyButtonMetadata")
if(f!==UF){let t=cN
l=function(e,t,n,o){return Uh.context("personalizedCMCOfferActionFromBuyButtonMetadata",()=>{const o=c(t,Y_)
if(0===o.length)return null
let s,i=null
for(const e of o)switch(s=d(e,aN),s){case jO:case uE:i=e
break
default:i=null}if(!i)return null
let a=d(i,VM)
if(s===jO&&r(a))return Uh.unexpectedNull(LF,y$,Pb),null
a||(a="")
const l=n.purchaseConfiguration,u=new tB(a,l.vendor,l.appName,l.bundleId,l.appPlatforms,l.isPreorder,l.excludeAttribution,l.metricsPlatformDisplayStyle,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,l.appCapabilities,l.isDefaultBrowser)
u.pageInformation=l.pageInformation
const f=yt(e,i,n.adamId,u,!1)
return function(e,t,n,r){const o=n.purchaseConfiguration.pageInformation
let s
for(const e of n.actionMetrics.data)if(s=c(g(e.fields),gL),s)break
nd(e,t,t.adamId,false,o,s,!1)}(e,f,n),f})}(e,i,n)
let s=null
switch(f){case uE:t=uL,s=e.loc.string("OfferButton.Title.BundlePurchased")
break
case jO:(r(l.price)||0===l.price)&&(s=e.loc.string(UD))}u=function(e,t,n,o,s){return r(t)?null:Uh.context("personalizedCMCDisplayPropertiesFromBuyButtonMetadata",()=>{const r=new nB(n,t.adamId,s),i=wt(0,t)
r.isFree=i
let a=null
a=i?t.title:t.priceFormatted,r.titles[S$]=a,r.priceFormatted=t.priceFormatted
const c=o.hasInAppPurchases,l=o.hasExternalPurchases
if(r.hasInAppPurchases=c,r.hasExternalPurchases=l,l){const t=e.loc.string(tA)
r.subtitles[S$]=t}else if(c){const t=e.loc.string(eA)
r.subtitles[S$]=t}return r.contentRating=o.contentRating,r})}(e,l,C$,o,t),s&&(u.titles[S$]=s)}const h=It(e,l,!1)
return new rB(f,h,u)})}function sf(e,t){let n=d(t,"token.buyParams")
const r=d(t,"overrideBuyParams")
s(r)&&(n=function(e,t){const n=new nW(e),r=new nW(t),s=n.get(HW.placementId,null);(null==s?void 0:s.length)>0&&o(r.get(HW.placementId,null))&&r.set(HW.placementId,s,null)
const i=n.get(HW.containerId,null);(null==i?void 0:i.length)>0&&o(r.get(HW.containerId,null))&&r.set(HW.containerId,i,null)
const a=n.get(HW.templateType,null)
return(null==a?void 0:a.length)>0&&o(r.get(HW.templateType,null))&&r.set(HW.templateType,a,null),r.toString()}(n,r)),n=ct(e,d(t,eF),n,h(t,hP),l(t,wP),l(t,gP),d(t,mP),d(t,yP),d(t,Uk),p(t,CM),p(t,vP),h(t,AP),d(t,TP),d(t,"metrics.extRefApp2"),d(t,"metrics.extRefUrl2"))
const i=c(t,"token.appPlatforms"),a=i&&i.length&&i.length>0&&i.indexOf("tv")>=0,u=i&&i.length&&i.length>0&&i.indexOf(v$)>=0,f=l(t,"token.isHalva")||l(t,"token.isMacOSCompatibleIOSApp"),g=l(t,"token.supportsVisionOSCompatibleIOSBinary"),m=ql(0,e.client.deviceType,f,g).some(e=>-1!==i.indexOf(e)),y=f&&!1,v=(i.indexOf(v$),g&&!1),A=d(t,"instalationType"),T=A===Gv,P=A===mm,I=l(t,"token.isPreorder"),S=!(I||(a||u)&&!m),b=d(t,Uk)===W$&&e.client.deviceType!==W$,C=d(t,"token.preflightPackageUrl"),k={...p(t,"token.additionalHeaders",{}),...p(t,"additionalHeaders",{})}
return{adamId:d(t,eF),buyParams:n,vendor:d(t,"token.vendor"),appName:d(t,"token.appName"),bundleId:d(t,"token.bundleId"),appPlatforms:i,additionalHeaders:k,isUpdate:T,isRedownload:P,isPreorder:I,createsJobs:S,preflightPackageUrl:C,isArcadeApp:w(t,"token.isArcadeApp"),forceWatchInstall:b,isMacOSCompatibleIOSApp:y,isVisionOSCompatibleIOSApp:v,presentingSceneIdentifier:d(t,"presentingSceneIdentifier"),appCapabilities:c(t,"token.appCapabilities"),isDefaultBrowser:w(t,"token.isDefaultBrowser")}}async function af(e,t){const n=new hH(e).withIdsOfType(t,q$).includingMacOSCompatibleIOSAppsWhenSupported(!0).includingAdditionalPlatforms(E(e))
return await Mr(e,n).then(t=>{const n=_(t),r={}
for(const t of n)r[t.id]=_l(e,t,{useCase:3})
return r})}function cf(e){var t,n,r
return!!e.bag.mediaAPISearchFocusEnabled||(CX||([OL,Sx].includes(e.client.buildType)&&(0,Yh.isSome)(null===(t=e.searchFocus)||void 0===t?void 0:t.isForceEnabled)&&(kX=null!==(r=null===(n=e.searchFocus)||void 0===n?void 0:n.isForceEnabled())&&void 0!==r&&r),CX=!0),kX)}function lf(e){var t,n
return EX||([OL,Sx].includes(e.client.buildType)&&(0,Yh.isSome)(null===(t=e.searchFocus)||void 0===t?void 0:t.searchHistoryDensityOverride)&&(OX=null===(n=e.searchFocus)||void 0===n?void 0:n.searchHistoryDensityOverride()),EX=!0),OX}async function uf(e,t){const n=new $Y(t.targetingData,e.random.nextUUID()),r=ff(e,t)
if(null===r)return null
const a=Mr(e,r,function(e,t){const n={}
return t&&t.validAdRequest()&&(n["X-Apple-App-Store-Client-Request-Id"]=t.appStoreClientRequestId,n["X-Apple-iAd-Request-Data"]=t.sponsoredSearchRequestData,n["X-Apple-iAd-Env-Name"]=t.routingInfo),{headers:n}}(0,n))
if(cf(e)){const n={term:t.term,entity:t.searchEntity}
e.onDeviceSearchHistoryManager.saveRecentSearchWithLimit(n,30)}const c=async function(e,t,n,r){var s
if(!t.validAdRequest())return Dn(e,"ODML fetch skipped - Malformed request"),{adverts:[],odmlSuccess:!1}
const i=await r,a=function(e,t){const n=_(t.results[fT]),r=[]
for(const t of n){const n=d(t,"id"),s=j(t,JC)
if(o(n)||o(s))continue
let i=null,a=null
e.bag.enableCPPInSearchAds&&(i=xe(_e(e,t)),a=Ne(e,t)),r.push({instanceId:e.random.nextUUID(),adamId:n,assetInformation:{},adData:s,cppIds:a,serverCppId:i,selectedCppId:i,appBinaryTraits:Hl(e,t)})}return r}(e,i),c=function(e,t,n){const r=_(t.results.search),s=[]
for(const e of r){const t=d(e,"id")
o(t)||s.push({adamId:t,assetInformation:{}})}return s}(0,i)
try{if(e.isAvailable(Gw)){const t=await e.ads.processAdvertsForSponsoredSearch(a,c,n,e.bag.sponsoredSearchODMLTimeout,e.client.isPhone)
return t.odmlSuccess?Dn(e,"ODML processing completed"):Dn(e,"ODML processing failed"),{adverts:null!==(s=t.adverts)&&void 0!==s?s:a,odmlSuccess:t.odmlSuccess,installedStates:t.installedStates}}return Dn(e,"ODML fetch skipped - Unsupported client"),{adverts:a,odmlSuccess:!1}}catch(t){return Dn(e,`ODML fetch failed - ${t}`),{adverts:a,odmlSuccess:!1}}}(e,n,t.term,a),l=async function(e){if(function(e){switch(e){case _$:case H$:return!0
default:return!1}}(e.client.deviceType)){const t=Dr(e,null,null,E(e))
if(t)return await Mr(e,t).catch(()=>null)}return null}(e),u=async function(e){const t=e.bag.searchTransparencyAdamId
if(i(t)){const n=new hH(e).withIdOfType(t,M$).includingAdditionalPlatforms(E(e))
return await Mr(e,n).catch(()=>null)}return null}(e)
return await Promise.all([a,c,l,u]).then(([o,i,a,c])=>(function(e){var t
const n=M(e)
s(n)&&s(e.meta)&&s(null===(t=e.meta)||void 0===t?void 0:t.metrics)&&(e.meta.metrics["data.search.dataSetId"]=d(n,"dataSetId"),delete e.meta.metrics.dataSetId)}(o),{catalogResponse:o,categoriesFilterData:a,transparencyData:D(c),sponsoredSearchRequestData:n,sponsoredSearchAdvertData:i,requestMetadata:{requestDescriptor:t,searchRequestUrl:Ge(e,r).toString()}}))}async function df(e,t){const n=function(e,t){const n=l(e.bag.supportedMixedMediaRequestUsecases[c$]),r=new hH(e,t,n).includingAdditionalPlatforms(E(e)).includingScopedAttributes(M$,[rk]).includingAttributes(pf(e)).includingRelationshipsForUpsell(!0).includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes(De(e))
return Ue(e,r,t),r.includingRelationships(RX),r}(e,t)
return await Mr(e,n)}function ff(e,t){var n
const r=null===(n=t.term)||void 0===n?void 0:n.trim()
if(o(r))return null
const s=t.origin,a=t.searchEntity,c=t.facets,u=t.selectedFacetOptions,d=t.spellCheckEnabled,f=t.excludedTerms,p=e.host.clientIdentifier,h=new hH(e).withSearchTerm(r).includingAdditionalPlatforms(E(e)).includingAttributes(pf(e)).includingScopedAttributes(M$,[rk]).includingRelationshipsForUpsell(!0).includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes(De(e))
if(h.includingRelationships(RX),ar(e)&&(h.includingAssociateKeys(q$,[O$]),h.includingScopedAttributes(O$,[P$,EN,TN]),h.includingScopedRelationships(M$,[PF])),l(e.client.isTinkerWatch)&&h.withFilter(aM,"tinker"),h.enablingFeature(aR),i(t.guidedSearchTokens)&&h.addingQuery("selectedFacets",t.guidedSearchTokens.join(",")),i(t.guidedSearchOptimizationTerm)&&h.addingQuery("finalTerm",t.guidedSearchOptimizationTerm),a===Tx?h.searchingOverTypes([M$]):a===IF?h.searchingOverTypes([RN]):a===W$||a===F$?h.searchingOverTypes([q$]).withFilter(aM,a):h.searchingOverTypes([q$,RN,jN,M$,x$,QF]),e.appleSilicon.isSupportEnabled&&!e.appleSilicon.isRosettaAvailable&&h.addingQuery("restrict","!requiresRosetta"),c)for(const e of Object.keys(c))h.addingQuery(e,c[e])
if(u)for(const e of Object.keys(u)){const t=UQ.requestValuesForSelectedFacetOptions(u[e])
if(i(t)){h.addingQuery(e,t.value)
for(const e of Object.keys(t.additionalKeyValuePairs))h.addingQuery(e,t.additionalKeyValuePairs[e])}}switch(s===H_?h.addingQuery(eL,qb):s===Wb?h.addingQuery(eL,SA):s===YL?h.addingQuery(eL,YL):s===zb?h.addingQuery(eL,"searchInstead"):s===Yb?h.addingQuery(eL,dv):s===ok&&h.addingQuery(eL,$L),p){case _B:h.addingContext(W$)
break
case LB:h.addingContext(MF)
break
case xB:h.addingContext(F$)}return h.addingQuery("limit[ads-result]",e.bag.mediaAdvertRequestLimit.toString()),i(e.bag.adsOverrideLanguage)&&h.enablingFeature(_g),d&&h.enablingFeature("spellCheck"),f&&h.addingQuery("excludeTerms",f.join(",")),h}function pf(e){const t=[qM,dS,OM,hF,GL,fS,OF,qR,FS,o$]
return e.appleSilicon.isSupportEnabled&&t.push(NF),e.host.isOSAtLeast(15,5,0)&&t.push(ux),t}function hf(e,t){return Uh.context("developerPageFromResponse",()=>{const n=t.data.length?t.data[0]:null
if(!n)return null
const r=Mn(e,"Artist",n.id,t),s=function(e,t,n,r){switch(e.client.deviceType){case H$:return function(e,t,n,r){var s
e.appleSilicon.isSupportEnabled?(vf(t,ON,[b_,lD]),vf(t,b_,[lD])):vf(t,ON,[b_])
const a=g$
let l=0
const u=[]
for(const d of _X){const f=ne(t,d),p=c(f,iN),h=p.length
if(0===h)continue
if(d===RM&&0===h)continue
const w=mf(e,d,t)
Fu(0,{pageInformation:n,locationTracker:r,idType:XF,id:`${l}`,targetType:l$},w)
const g={lockupOptions:{metricsOptions:{pageInformation:n,locationTracker:r},artworkUseCase:1},filter:10996},m=p.filter(e=>o(e.attributes)),y=(null===(s=f.next)||void 0===s?void 0:s.length)>0||h>=8,v=yf(e,w,t.id,p,d,a,g,n,r,f.href,y),A=v.items.length+m.length
A<3&&(v.rowsPerColumn=A)
const T={id:null,kind:null,softwareType:null,targetType:l$,title:v.title,pageInformation:n,locationTracker:r,idType:null}
if(Bu(r),nn(0,v,T),ju(r),m.length){const e=new MX
e.title=w,e.developerId=t.id,e.contentType=g$,e.remainingData=m,e.lockupListOptions=g,e.relationship=d,e.roomUrl=f.href,e.shouldShowSeeAll=y,e.hasExistingContent=i(v.items),v.url=`${YU}:/${dG}/${QU}/`+encodeURIComponent(JSON.stringify(e))}v.items.length>0&&(u.push(v),l++)}return u}(e,t,n,r)
case W$:return function(e,t,n,r,s,a,c){const l=se(n,r),u={lockupOptions:{metricsOptions:{pageInformation:a,locationTracker:c},artworkUseCase:1},filter:10996}
Fu(0,{pageInformation:a,locationTracker:c,idType:XF,id:"0",targetType:l$},s)
const d=yf(e,s,n.id,l,r,t,u,a,c,null,!1),f=l.filter(e=>o(e.attributes)),p={id:null,kind:null,softwareType:null,targetType:l$,title:s,pageInformation:a,locationTracker:c,idType:null}
if(Bu(c),nn(0,d,p),ju(c),f.length){const e=new MX
e.title=s,e.developerId=n.id,e.contentType=t,e.remainingData=f,e.lockupListOptions=u,e.hasExistingContent=i(d.items),d.url=`${YU}:/${dG}/${QU}/`+encodeURIComponent(JSON.stringify(e))}return[d]}(e,g$,t,wZ,e.loc.string(jm),n,r)
case v$:return gf(e,t,xX,n,r)
default:return gf(e,t,LX,n,r)}}(e,n,r,{rootPosition:0,locationStack:[]})
1===s.length&&(s[0].isHorizontal=!1)
const a=fu(e,n,S$)
if(a){const e=new mB(a,oN),t=new rH(TM)
t.items=[e],s.unshift(t)}const l=new cH(s)
l.title=W(n,z$),e.client.deviceType!==W$&&(l.presentationOptions=[Ex]),Fn(e,l,r)
const u=j(n,JE)
if(u){const t=El(e,u,{cropCode:"sr",useCase:21})
l.uber=t
{const e=new rH("uber"),n=new aZ(Gm)
n.artwork=t,e.items=[n],n.title=l.title,s.unshift(e),l.presentationOptions.push(eO),l.presentationOptions.push(Vm)}}return l})}function wf(e,t,n){switch(t){case RM:return e.loc.string(Hm)
case yS:return e.loc.string("DEVELOPER_SYSTEM_APPS")
case GE:return e.loc.string("DEVELOPER_IMESSAGE")
case aD:return e.loc.string(jm)
case cD:return e.loc.string("DEVELOPER_TV")
case x$:return e.loc.string(Wm)
case vS:return e.loc.string("DEVELOPER_VISION")
case S_:const t=z(n,qm),r=z(n,zm)
return t&&r?e.loc.string(Ym):r?e.loc.string(Jm):e.loc.string(Zm)
case ON:return e.loc.string(Km)
default:return null}}function gf(e,t,n,r,s){var a,l
let u,d
vf(t,ON,[S_,cD]),"tv"===e.client.deviceType?(u=SF,d=2):(u=g$,d=1)
let f=0
const p=[]
for(const h of n){const n=ne(t,h),w=c(n,iN),g=w.length
if(0===g)continue
if(h===RM&&0===g)continue
let m,y=!1
h===GE?m=LB:h===aD?m=_B:h===cD?(m=MB,"tv"!==e.client.deviceType&&(y=!0)):m=DB
const v=wf(e,h,t)
Fu(0,{pageInformation:r,locationTracker:s,idType:XF,id:`${f}`,targetType:l$},v)
const A={excludeIconInSidepacksIfNotTvOnly:y,lockupOptions:{metricsOptions:{pageInformation:r,locationTracker:s},clientIdentifierOverride:m,artworkUseCase:d},filter:10996},T=w.filter(e=>o(e.attributes)),P=((null===(a=n.next)||void 0===a?void 0:a.length)>0||g>=8)&&!0,I=yf(e,v,t.id,w,h,u,A,r,s,n.href,P),S=I.items.length+T.length
S<3&&(I.rowsPerColumn=S)
const b={id:null,kind:null,softwareType:null,targetType:l$,title:I.title,pageInformation:r,locationTracker:s,idType:null}
if(Bu(s),nn(0,I,b),ju(s),T.length){const e=new MX
e.title=v,e.developerId=t.id,e.contentType=u,e.remainingData=T,e.lockupListOptions=A,e.relationship=h,e.roomUrl=n.href,e.shouldShowSeeAll=P,e.hasExistingContent=i(I.items),I.url=`${YU}:/${dG}/${QU}/`+encodeURIComponent(JSON.stringify(e))}(I.items.length>0||(null===(l=I.url)||void 0===l?void 0:l.length)>0)&&(p.push(I),f++)}return p}function mf(e,t,n){switch(t){case RM:return e.loc.string(Hm)
case x$:return e.loc.string(Wm)
case b_:if(e.appleSilicon.isSupportEnabled)return e.loc.string("DEVELOPER_MAC_APPS")
{const t=z(n,qm),r=z(n,zm)
return t&&r?e.loc.string(Ym):r?e.loc.string(Jm):e.loc.string(Zm)}case lD:return e.loc.string("DEVELOPER_PHONE_PAD_APPS")
case ON:return e.loc.string(Km)
default:return null}}function yf(e,t,n,o,i,a,c,l,u,d,f){const p=new rH(a)
if(p.title=t,a===R_?(p.items=function(e,t,n){return Uh.context("screenshotsLockupsFromData",()=>{if(!t)return[]
const o=[]
for(let i=0;i<t.length;i++){const a=t[i]
if(r(a.attributes)){n.contentUnavailable&&n.contentUnavailable(a.id,i)
continue}const c=n.lockupOptions
let l=15358
if(s(n.filter)&&(l=n.filter),Ze(e,a,l))continue
const u=ll(e,a,c)
u.isValid()&&(o.push(u),ju(n.lockupOptions.metricsOptions.locationTracker))}return o})}(e,o,c),p.isHorizontal=!1,p.presentationHints={showSupplementaryText:!1}):(p.items=ml(e,o,c),p.isHorizontal=e.client.deviceType!==W$),f){const r=new DX
r.title=t,r.url=d,r.developerId=n,r.relationshipId=i,r.clientIdentifierOverride=c.lockupOptions.clientIdentifierOverride
const o=new nU($$)
o.pageUrl=s(h=r)?`${YU}:/${dG}/${iG}/`+encodeURIComponent(JSON.stringify(h)):null,o.title=e.loc.string(XN),o.pageData=fa(0,t),sd(e,o,o.pageUrl,{pageInformation:l,locationTracker:u}),p.seeAllAction=o}var h
return p}function vf(e,t,n){const o=ne(e,t)
if(r(o))return
const s=_(o)
if(r(s))return
const i=s.map(e=>e.id)
for(const t of n){const n=ne(e,t)
if(r(n))continue
const o=_(n)
r(n)||(e.relationships[t].data=o.filter(e=>!i.includes(e.id)))}}function Af(e,t){const n=[w$,o$,Px],r=[...n,Rx,zM,PL,TL],o=[...n,PL],s=[...n,OF,qM,OM,zM,iF,OF,AF]
e.appleSilicon.isSupportEnabled&&s.push(NF)
const i=[...s]
t.includingAdditionalPlatforms(E(e)).enablingFeatures(["personalization","supportsCustomTextColor"]).includingRelationshipsForUpsell(!0).includingScopedAttributes(M$,r).includingScopedAttributes(MN,o).includingScopedAttributes(q$,i)}function Tf(e){return e&&e.isDeferring&&e.isFirstRender}function Pf(e,t,n){return o(n)?null:(n.remainingItems.length||n.recommendationsHref||n.onDeviceRecommendationsUseCase)&&n.isFirstRender?function(e){return(new nj).set(IN,YU).append(FN,IG).append(FN,QU).param(bV,encodeURIComponent(JSON.stringify(e))).build()}(n):null}function If(e,t,n){if(o(n)||o(t))return null
if(function(e){switch(e.collectionDisplayStyle){case ow.BreakoutLarge:case ow.Poster:return!1}return!e.filterOverrides.includes(aw.ShowOnlyPreorder)}(n)){const r=new nU($$)
li(t)||(n.id,r.pageData=function(e,t,n,r,o){const s=[],i=new rH(zC)
i.items=[new OB(null,t.title,null)],s.push(i)
const a=new rH(n||JZ)
a.isHorizontal=!1,a.items=wb,s.push(a)
const c=new cH(s)
return c.isIncomplete=!(null!=o&&o),(0,Yh.isNothing)(c.pageMetrics.pageFields)&&(c.pageMetrics.pageFields={}),c}(0,n,t.contentType,0,(0,Yh.isSome)(n.recommendationsHref)))
const o={}
n.type===rw.Recommendations&&(o[jV]=n.pageId),r.pageUrl=hi(e,n.data.href,o),r.title=e.loc.string(XN),r.referrerUrl=n.metricsPageInformation.pageUrl
const s=function(e){const t=[]
for(const n of e.locationStack)t.push({...n})
return{rootPosition:e.rootPosition,locationStack:t}}(n.metricsLocationTracker)
return Vu(s,0),sd(e,r,n.seeAllUrl,{pageInformation:n.metricsPageInformation,locationTracker:s}),r}return null}function Sf(e,t,n,r){const o=function(e,t,n,r){const o=bf(0,n.collectionDisplayStyle)
return{...n.metricsImpressionOptions,...r,id:t.id,targetType:o}}(0,t,n,r)
return yl(e,t,o,n.clientIdentifierOverride)}function bf(e,t){switch(t){case ow.Hero:return ax
case ow.TextOnly:return Qm
case ow.TextWithArtwork:return"textWithArtwork"
case ow.BrickSmall:return"brickSmall"
case ow.BrickMedium:return"brickMedium"
case ow.BrickLarge:return"brickLarge"
case ow.EditorialLockupMedium:case ow.EditorialLockupMediumVariant:return"editorialLockupMedium"
case ow.EditorialLockupLarge:case ow.EditorialLockupLargeVariant:return"editorialLockupLarge"
case ow.LockupSmall:return D_
case ow.LockupLarge:return"lockupLarge"
case ow.StorySmall:return"storySmall"
case ow.StoryMedium:return"storyMedium"
case ow.BreakoutLarge:return __
default:return r$}}function Cf(e,t,n,a,c){if(o(t))return null
let l
n.showOrdinals&&(l=e.loc.decimal(n.ordinalIndex))
let u,d=null
!s(n.shelfBackground)||n.shelfBackground.type!==nF&&n.shelfBackground.type!==nO||(d=h$),i(n)&&(u=n.clientIdentifierOverride)
const f={ordinal:l,metricsOptions:{...{...n.metricsImpressionOptions,id:t.id,idType:HN},recoMetricsData:M(t),isAdvert:Io(0,t),targetType:bf(0,c)},clientIdentifierOverride:u,artworkUseCase:0,offerStyle:d,canDisplayArcadeOfferButton:Au(0,c),isContainedInPreorderExclusiveShelf:n.filterOverrides.includes(aw.ShowOnlyPreorder)}
let p
switch(c){case pD:case QE:case fD:case KE:f.offerEnvironment=GF,p=fl(e,t,f,c)
break
case"Poster":p=ul(e,t,f)
break
default:p=al(e,t,f)}return r(p)||!p.isValid()?null:(p.id=function(e,t,n){return(0,Gh.isNothing)(n)?null:`${e.id}_${t}_${n}`}(n,a,p.adamId),p)}function kf(e,t,n=!0,r){return e.featureFlags.isEnabled("force_display_lockup_ordinals")&&(t.showOrdinals=!0),Of(e,t,ow.LockupSmall,g$,n,r)}function Ef(e,t,n=!0){return Of(e,t,ow.LockupLarge,CL,n)}function Of(e,t,n,o,s=!0,i){const a=[],c=new rH(o)
c.isHorizontal=(null!=i?i:W(t.data,ML))===iw.Horizontal
const l=Ct(0,t)
for(const o of l){if(o.type===O$)return null
if(r(o.attributes)||Tf(t)){t.isDeferring=!0,t.remainingItems.push(o)
continue}if(Ze(e,o,15358))continue
const s=Cf(e,o,t,a.length,n)
s&&(a.push(s),ju(t.metricsImpressionOptions.locationTracker),t.ordinalIndex++)}return n!==ow.EditorialLockupMediumVariant&&n!==ow.EditorialLockupLargeVariant||(r(c.presentationHints)?c.presentationHints={showSupplementaryText:!0}:c.presentationHints={...c.presentationHints,showSupplementaryText:!0}),delete t.maxItemCount,c.eyebrow=t.eyebrow,c.eyebrowArtwork=t.eyebrowArtwork,c.title=t.title,c.subtitle=t.subtitle,c.items=a,c.rowsPerColumn=Y(t.data,x_),c.shouldFilterApps=!t.filterOverrides.includes(aw.ShowInstalled),c.url=Pf(0,0,t),s&&ai(e,c,t),c}function Rf(e,t,n){let r=null,i=null,a=[]
const c=Et(0,t)
switch(t.type){case M$:case MN:case Ox:a=["enrichedEditorialNotes.badge",tO,ZF],r=Nf(e,t,a,!1),i=Nf(e,c,a,!1)
break
case q$:case QF:case x$:a=[tO],r=Nf(e,t,a,!0),i=Nf(e,c,a,!0)}const l=s(i)?i:r
return o(l)?null:l}function Df(e,t,n){let r=null,i=[]
switch(n){case pD:case fD:switch(t.type){case M$:case MN:case Ox:i=[Xm,LM],r=xf(t,i)
break
case q$:case QF:case x$:i=[uM],r=Nf(e,t,i,!0)}break
default:switch(t.type){case M$:case MN:case Ox:i=[Xm,LM],r=Nf(e,t,i,!1)
break
case q$:case QF:case x$:i=[z$],r=Nf(e,t,i,!1)}}const a=Nf(e,Et(0,t),i,!1),c=s(a)?a:r
return o(c)?null:c}function _f(e,t,n=!1){let r=null,i=[]
switch(t.type){case M$:n?i=[ey,uM]:z(t,YS)||(i=["enrichedEditorialNotes.short",JS]),r=Nf(e,t,i,!1)
break
case MN:case Ox:i=[ey,uM],r=Nf(e,t,i,!1)
break
case q$:case QF:case x$:i=[uM],r=Nf(e,t,i,!0)}const a=Nf(e,Et(0,t),i,!1),c=s(a)?a:r
return o(c)?null:c}function Lf(e,t){let n=null,r=[]
switch(t.type){case M$:case MN:case Ox:r=[ty,ny],n=Nf(e,t,r,!1)
break
case q$:case QF:case x$:r=[ty,ny],n=Nf(e,t,r,!0)}const o=Nf(e,Et(0,t),r,!1)
let s=null
return s=(null==o?void 0:o.length)>0?o:i(n)?n:e.loc.string(ZS),s}function xf(e,t){return o(e)?null:W(e,t)}function Mf(e,t,n){return o(e)?null:he(e,t,n)}function Nf(e,t,n,r){if(o(t))return null
const s=Ce(e,t)
for(const e of n){const n=r?Mf(t,s,e):xf(t,e)
if(i(n))return n}return null}function Ff(e,t,n){const r={}
$u(0,n.metricsOptions,KS)
const a=Jc(e,t,n)
Bu(n.metricsOptions.locationTracker)
const c=Zc(e,t,n)
return i(a)&&(a.length>1||o(c))?r.collectionIcons=a:s(c)&&(r.lockup=c,r.collectionIcons=[c.icon]),r}function $f(e,t,n,r){const o=[],i=new rH(r)
i.isHorizontal=W(t.data,ML)===gD
const a=Ct(0,t)
for(const r of a){const s={...t.metricsImpressionOptions,targetType:bf(0,n),recoMetricsData:M(r)}
if(!r.attributes||Tf(t)){t.remainingItems.push(r),t.isDeferring=!0
continue}const i=Bf(e,r,t.collectionDisplayStyle,s,s,t.clientIdentifierOverride)
i.clickAction=Sf(e,r,t),i.isValid()&&(o.push(i),ju(t.metricsImpressionOptions.locationTracker))}return s(t.presentationHints)&&(i.presentationHints=t.presentationHints),delete t.maxItemCount,i.eyebrow=t.eyebrow,i.eyebrowArtwork=t.eyebrowArtwork,i.title=t.title,i.subtitle=t.subtitle,i.items=o,i.rowsPerColumn=Y(t.data,x_),i.url=Pf(0,0,t),ai(e,i,t),i}function Bf(e,t,n,r,s,a){const c=new Mj,u=Ot(0,t)
if(!l(u.hideEditorialMedia)){const r=Yc(e,t,n);(0,Gh.isSome)(null==r?void 0:r.artwork)&&(c.artworks=[r.artwork],c.isMediaDark=Wc(0,r))}const d={metricsOptions:s,clientIdentifierOverride:a,artworkUseCase:0,canDisplayArcadeOfferButton:!0,externalDeepLinkUrl:rt(0,t)}
if($u(0,d.metricsOptions,KS),c.collectionIcons=Jc(e,t,d),Bu(d.metricsOptions.locationTracker),o(c.collectionIcons)){const n=_l(e,t,{useCase:0})
i(n)&&(c.collectionIcons=[n])}c.caption=Rf(e,t),c.title=Df(e,t,n),c.subtitle=_f(e,t),c.accessibilityLabel=c.title,c.editorialDisplayOptions=Rt(u)
const f=i(c.artworks)?NN:"collection_id",p={...r,id:t.id,idType:f}
return nn(0,c,an(e,t,c.title,p)),c}function Uf(e,t,n,r){const o=new OZ
o.overlayType=Qi(e,t),o.displayOptions={horizontalPlacement:n$,textAlignment:n$,isOverDarkContent:ta(e,t)},o.badgeText=Rf(e,t,ow.Hero),o.titleText=Df(e,t,ow.Hero),r.suppressTagline||(o.descriptionText=_f(e,t,!0)),o.callToActionText=Lf(e,t),o.buttonTitle=ea(e,t)
const a={metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,targetType:D_,recoMetricsData:M(t)},metricsClickOptions:{id:t.id,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,actionDetails:{franchise:o.badgeText}},artworkUseCase:1,offerEnvironment:R$,canDisplayArcadeOfferButton:Au(0,n.collectionDisplayStyle),isContainedInPreorderExclusiveShelf:!1,externalDeepLinkUrl:rt(0,t)},c=Zc(e,t,a),l=Ff(e,t,a)
o.lockup=l.lockup,o.collectionIcons=l.collectionIcons
const u=W(t,ZF)
i(u)&&s(c)&&(c.heading=u)
const d=(0,Gh.isSome)(r.suppressLockup)&&r.suppressLockup
if(i(o.lockup)&&!d)o.clickAction=o.lockup.clickAction,o.impressionMetrics=o.lockup.impressionMetrics
else{const r={targetType:ax,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:M(t)},s={...r,id:t.id,actionDetails:{franchise:o.badgeText}}
o.clickAction=Tl(e,t,s,n.clientIdentifierOverride),nn(0,o,an(e,t,o.titleText,r))}return o}function Gf(e){return{isAutoScrollEnabled:e.bag.heroCarouselAutoScrollDuration>0,autoScrollInterval:e.bag.heroCarouselAutoScrollDuration}}function Vf(e,t,n,r,o,a,c){const u=Ot(0,t),d=new oH
if(d.title=Df(e,t,o),u.suppressShort||(d.description=_f(e,t)),!l(u.hideEditorialMedia)){const r=Uc(e,t,n)
if(d.artwork=null==r?void 0:r.artwork,d.video=null==r?void 0:r.video,d.isMediaDark=Wc(0,r),n===Sw.StoryDetail){const n=Uc(e,t,Sw.StoryDetailLandscape)
d.landscapeArtwork=null==n?void 0:n.artwork,d.landscapeVideo=null==n?void 0:n.video,d.isLandscapeMediaDark=Wc(0,n)}}const f=Ff(e,t,{metricsOptions:{pageInformation:r.pageInformation,locationTracker:r.locationTracker,recoMetricsData:M(t)},artworkUseCase:1,offerEnvironment:u.useMaterialBlur?GF:iO,canDisplayArcadeOfferButton:Au(0,o),isContainedInPreorderExclusiveShelf:!1,externalDeepLinkUrl:rt(0,t)}),p=a&&l(u.suppressLockup)
p||(d.lockup=f.lockup)
const h=kt(0,t)
if(z(h,KF),du(e,h),i(h)&&!p&&Ze(e,h,15358)&&n!==Sw.StoryDetail)return null
let w
if(w=Rf(e,t),d.badge={type:tF,title:w},d.collectionIcons=f.collectionIcons,s(c)){const n={id:t.id,pageInformation:c.metricsPageInformation,locationTracker:c.metricsLocationTracker,actionDetails:{franchise:d.badge.title},idType:vD}
d.clickAction=Sf(e,t,c,n)}d.editorialDisplayOptions=Rt(u)
const g={...r,id:t.id,idType:vD}
return nn(0,d,an(e,t,d.title,g)),d.isValid()?d:null}function jf(e,t,n,o){const s=[],i=new rH(o)
i.isHorizontal=W(t.data,ML)===gD
const a=Ct(0,t)
for(const o of a){const i={...t.metricsImpressionOptions,targetType:bf(0,n),recoMetricsData:M(o)}
if(!J(o)||Tf(t)){t.remainingItems.push(o),t.isDeferring=!0
continue}const a=Vf(e,o,Sw.StoryCard,i,t.collectionDisplayStyle,!0,t)
r(a)||(s.push(a),ju(t.metricsImpressionOptions.locationTracker))}return delete t.maxItemCount,i.eyebrow=t.eyebrow,i.eyebrowArtwork=t.eyebrowArtwork,i.title=t.title,i.subtitle=t.subtitle,i.items=s,i.rowsPerColumn=Y(t.data,x_),i.url=Pf(0,0,t),ai(e,i,t),i}function Hf(e,t,n){const r=Lt(0,t)
o(r)||(n.displayStyle=r)}function Wf(e,t,n){let a=null
switch(n.isFirstRender&&Fu(0,n.metricsImpressionOptions,n.title),n.type){case rw.ArcadeSeeAllGames:a=function(e,t){const n=new vB,o=new rH(eb)
o.items=[n]
const s={targetType:oy,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,title:e.loc.string(qI),id:t.id,kind:sy,softwareType:FF}
nn(0,n,s),Fu(0,s,s.title),n.buttonAction=cd(e,ix,t.metricsPageInformation,t.metricsLocationTracker)
const a={targetType:j$,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,title:n.buttonAction.title,id:"SeeAllGames",kind:j$,softwareType:FF}
nn(0,n.buttonAction,a),Bu(s.locationTracker)
const c=e.bag.termsAndConditionsURL
if(!r(c)&&"tv"!==e.client.deviceType){const t=e.loc.string(tb),r=new sU(c),o=new vj(t)
o.clickAction=r,o.presentationStyle=[rO,oO,sO],n.footnote=o}o.background={type:nF,color:U(PS)}
const l=Ct(0,t)
if(i(l)){const r={pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker}
n.icons=Rl(e,l,r,{useCase:2})}else n.icons=[]
return o}(e,n)
break
case rw.Collection:a=function(e,t){const n=W(t.data,vF)
if(o(n))return null
let a=null
switch(n){case ow.Hero:a=function(e,t){if(0!==t.shelfIndex)return null
const n=new rH(Dx),r=new DZ
r.autoScrollConfiguration=Gf(e)
const o=Ct(0,t)
for(const n of o){const o=Dt(e,n)
if(_t(0,n)&&!J(o)||Tf(t)){t.isDeferring=!0,t.remainingItems.push(n)
continue}const s={...t.metricsImpressionOptions,idType:NN,targetType:ax,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:M(n)},i=Uc(e,n,Sw.Hero),a=Ff(e,n,{metricsOptions:s,clientIdentifierOverride:t.clientIdentifierOverride,artworkUseCase:0,offerEnvironment:iO,canDisplayArcadeOfferButton:!0}),c=new RZ,u=zi(0,n),d=Df(e,n,ow.Hero),f=an(e,n,d,s)
f.isPreorder=Se(e,u,KF),nn(0,c,f),Fu(0,f,d)
const p=Ot(0,n),h=l(p.hideEditorialMedia)
c.overlay=Uf(e,n,t,p),h||(c.backgroundColor=null==i?void 0:i.backgroundColor,c.titleEffect=Mi(0,null==i?void 0:i.artworkData),c.artwork=null==i?void 0:i.artwork,c.video=null==i?void 0:i.video),c.collectionIcons=a.collectionIcons,c.editorialDisplayOptions=Rt(p),c.isMediaDark=Wc(0,i),c.isValid()&&r.items.push(c),Bu(f.locationTracker),ju(f.locationTracker)}return delete t.maxItemCount,n.isHorizontal=!1,n.eyebrow=t.eyebrow,n.eyebrowArtwork=t.eyebrowArtwork,n.title=t.title,n.subtitle=t.subtitle,n.items=[r],n.url=Pf(0,0,t),n}(e,t)
break
case ow.TextOnly:a=function(e,t){var n
const o=[],s=new rH(CF)
s.isHorizontal=W(t.data,ML)===iw.Horizontal
const i=Ct(0,t)
for(const n of i){if(r(n.attributes)||Tf(t)){t.isDeferring=!0,t.remainingItems.push(n)
continue}const s=Sf(e,n,t)
s.title=Df(e,n,t.collectionDisplayStyle)
const i={...t.metricsImpressionOptions,id:n.id,idType:vD,targetType:Qm}
nn(0,s,an(e,n,s.title,i)),s.isValid()&&(o.push(s),ju(t.metricsImpressionOptions.locationTracker))}return delete t.maxItemCount,s.eyebrow=t.eyebrow,s.eyebrowArtwork=t.eyebrowArtwork,s.title=t.title,s.subtitle=t.subtitle,s.items=o,s.rowsPerColumn=null!==(n=Y(t.data,x_))&&void 0!==n?n:1,s.url=Pf(0,0,t),ai(e,s,t),s}(e,t)
break
case ow.TextWithArtwork:a=function(e,t){var n
const o=[],s=new rH(CF)
s.isHorizontal=W(t.data,ML)===iw.Horizontal
const a=Ct(0,t)
for(const n of a){if(r(n.attributes)||Tf(t)){t.isDeferring=!0,t.remainingItems.push(n)
continue}const s=Sf(e,n,t)
s.title=Df(e,n,t.collectionDisplayStyle)
const a=j(n,I$)
i(a)&&(s.artwork=El(e,a,{allowingTransparency:!0,useCase:20})),s.isValid()&&(o.push(s),ju(t.metricsImpressionOptions.locationTracker))}return delete t.maxItemCount,s.eyebrow=t.eyebrow,s.eyebrowArtwork=t.eyebrowArtwork,s.title=t.title,s.subtitle=t.subtitle,s.items=o,s.rowsPerColumn=null!==(n=Y(t.data,x_))&&void 0!==n?n:1,s.url=Pf(0,0,t),ai(e,s,t),s}(e,t)
break
case ow.BrickSmall:a=function(e,t){return $f(e,t,ow.BrickSmall,"smallBrick")}(e,t)
break
case ow.BrickMedium:a=function(e,t){return $f(e,t,ow.BrickMedium,LL)}(e,t)
break
case ow.BrickLarge:a=function(e,t){return $f(e,t,ow.BrickLarge,"largeBrick")}(e,t)
break
case ow.EditorialLockupMedium:a=function(e,t){return Of(e,t,ow.EditorialLockupMedium,aO)}(e,t)
break
case ow.EditorialLockupMediumVariant:a=function(e,t){return Of(e,t,ow.EditorialLockupMediumVariant,aO)}(e,t)
break
case ow.EditorialLockupLarge:a=function(e,t){return Of(e,t,ow.EditorialLockupLarge,cO)}(e,t)
break
case ow.EditorialLockupLargeVariant:a=function(e,t){return Of(e,t,ow.EditorialLockupLargeVariant,cO)}(e,t)
break
case ow.Poster:a=function(e,t){return Of(e,t,ow.Poster,NL)}(e,t)
break
case ow.StorySmall:a=function(e,t){return jf(e,t,ow.StorySmall,zN)}(e,t)
break
case ow.StoryMedium:a=function(e,t){return jf(e,t,ow.StoryMedium,yD)}(e,t)
break
case ow.LockupSmall:a=kf(e,t)
break
case ow.LockupLarge:a=Ef(e,t)
break
case ow.BreakoutLarge:a=function(e,t){const n=[],r=new rH(mD)
r.isHorizontal=W(t.data,ML)===gD
const i=Ct(0,t)
for(const r of i){const i=Dt(e,r)
if(_t(0,r)&&!J(i)||Tf(t)){t.isDeferring=!0,t.remainingItems.push(r)
continue}const a={targetType:__,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:M(r)},c=Ot(0,r),u=l(c.hideEditorialMedia)?null:Yc(e,r,t.collectionDisplayStyle),d=Ff(e,r,{metricsOptions:a,clientIdentifierOverride:t.clientIdentifierOverride,artworkUseCase:0,offerEnvironment:iO,canDisplayArcadeOfferButton:!0,externalDeepLinkUrl:rt(0,r)})
if(o(u)&&o(d.collectionIcons))continue
const f=Rf(e,r,t.collectionDisplayStyle),p=s(f)?{type:tF,title:f}:{type:UF,title:null},h=new Zj(Df(e,r,t.collectionDisplayStyle),_f(e,r,!0),p,null),w=new Kj(h,{position:n$,wantsBlur:!0},null,null==u?void 0:u.artwork,null==u?void 0:u.video,d.collectionIcons,null==u?void 0:u.backgroundColor),g={...a,id:r.id,idType:NN}
nn(0,w,an(e,r,w.details.title,g))
const m=Sf(e,r,t)
s(m)&&(m.title=Lf(e,r)),w.details.callToActionButtonAction=m,w.clickAction=m,w.editorialDisplayOptions=Rt(c),w.lockup=d.lockup,w.isMediaDark=Wc(0,u),n.push(w)}return delete t.maxItemCount,r.eyebrow=t.eyebrow,r.eyebrowArtwork=t.eyebrowArtwork,r.title=t.title,r.subtitle=t.subtitle,r.items=n,r.rowsPerColumn=Y(t.data,x_),r.url=Pf(0,0,t),ai(e,r,t),r}(e,t)}return i(a)&&(a.seeAllAction=If(e,a,t),a.id=`shelf_${t.id}`),a}(e,n)
break
case rw.Chart:a=function(e,t){if(e.props.isNotEnabled("bedrockCharts"))return
t.showOrdinals=!0
const n=kf(e,t,!1,iw.Horizontal)
return(0,Yh.isNothing)(n)?void 0:(n.url=Pf(0,0,t),ai(e,n,t),n.seeAllAction=function(e,t){const n=W(t.data,mF),r=W(t.data,oM),o=new nU($$)
return o.pageUrl=ou(e,n,r),o.title=e.loc.string(XN),o.referrerUrl=t.metricsPageInformation.pageUrl,sd(e,o,o.pageUrl,{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker}),o}(e,t),n)}(e,n)
break
case rw.Tag:case rw.Engagement:case rw.Text:case rw.Image:case rw.VideoClip:a=null
break
case rw.Header:a=function(e,t,n){const r=i(j(n.data,qN))?n.data:t
if(void 0===r)return null
const o=new DZ,s=new RZ,a=Ot(0,r),c=Uf(e,r,n,a)
c.overlayType=tF,c.callToActionText=null,s.clickAction=null,c.collectionIcons=null,c.lockup=null,c.callToActionText=null,s.overlay=c
const u={artworkUseCase:1,offerStyle:SM,offerEnvironment:R$,canDisplayArcadeOfferButton:Au(0,n.collectionDisplayStyle),isContainedInPreorderExclusiveShelf:!1,metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:M(r)},externalDeepLinkUrl:rt(0,r)}
$u(0,u.metricsOptions,KS)
const d=Jc(e,r,u)
Bu(u.metricsOptions.locationTracker),s.collectionIcons=d
const f=Uc(e,r,Sw.Hero)
l(a.hideEditorialMedia)||(s.backgroundColor=null==f?void 0:f.backgroundColor,s.artwork=null==f?void 0:f.artwork,s.video=null==f?void 0:f.video),s.editorialDisplayOptions=Rt(a),s.isMediaDark=Wc(0,f),o.items=[s]
const p=new rH(Dx)
return p.items=[o],p}(e,t,n)
break
case rw.Recommendations:a=function(e,t){let n=null
switch(W(t.data,vF)){case ow.LockupSmall:n=kf(e,t,!1)
break
case ow.LockupLarge:n=Ef(e,t,!1)
break
default:n=t.isFirstRender?function(){const e=new rH(L_)
return e.isHidden=!0,e}():null}return(0,Yh.isNothing)(n)?null:(n.id=`shelf_${t.id}`,function(e,t){const n=i(se(t.data,V$))||i(t.remainingItems),r=z(t.data,"isPersonalizationAvailable"),o=t.data.href
if(!r||n||!i(o))return
const s=Ge(e,new hH(e,t.data.href).addingQuery(jV,t.pageId).includingRelationships([V$]))
t.recommendationsHref=s.toString()}(e,t),n.url=Pf(0,0,t),ai(e,n,t),n.seeAllAction=If(e,n,t),n)}(e,n)
break
case rw.GameCenter:a=null
break
case rw.Upsell:a=function(e,t){const n=hd(e,t.data)
if(o(n))return null
const r=n.marketingItemData
if(o(r)||o(r.attributes))return null
const s=Fi(e,r,{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,mercuryMetricsData:Lu(0,r)})
ju(t.metricsLocationTracker)
const i=new rH(iM)
return i.items=[s],i}(e,n)
break
case rw.Marker:a=function(e,t){const n=W(t.data,PN)
if(o(n))return null
let r=null
return n===sw.QuickLinks&&(r=function(e,t){if(e.user&&e.user.isManagedAppleID)return null
{const n=[]
if((0,Gh.isSome)(e.bag.aboutAppStoreUrl)){const t=new sU(e.bag.aboutAppStoreUrl)
t.title=e.loc.string("QuickLinks.AboutTheAppStore.Title"),n.push(t)}if((0,Gh.isSome)(e.bag.aboutInAppPurchasesEditorialItemId)){const t=new nU(WF)
t.title=e.loc.string("QuickLinks.AboutInAppPurchases.Title"),t.pageUrl=`https://apps.apple.com/story/id${e.bag.aboutInAppPurchasesEditorialItemId}`,n.push(t)}if((0,Gh.isSome)(e.bag.reportProblemUrl)){const t=new sU(e.bag.reportProblemUrl)
t.title=e.loc.string(ay,"Report a Problem"),n.push(t)}if((0,Gh.isSome)(e.bag.requestARefundUrl)){const t=new sU(e.bag.requestARefundUrl)
t.title=e.loc.string("QuickLinks.RequestARefund.Title"),n.push(t)}if((0,Gh.isSome)(e.bag.changePaymentMethodUrl)){const t=new sU(e.bag.changePaymentMethodUrl)
t.title=e.loc.string("QuickLinks.ChangePaymentMethod.Title"),n.push(t)}if((0,Gh.isSome)(e.bag.aboutFrenchAppStoreEditorialItemId)){const t=new nU(WF)
t.title=e.loc.string("QuickLinks.AboutFrenchAppStore.Title"),t.pageUrl=`https://apps.apple.com/story/id${e.bag.aboutFrenchAppStoreEditorialItemId}`,n.push(t)}const r=new rH(CF)
return r.title=e.loc.string("QUICK_LINKS"),r.items=n,t.metricsImpressionOptions.title=r.title,r}}(e,t)),r}(e,n)}return o(null==a?void 0:a.items)&&o(null==a?void 0:a.url)&&(a=null),n.isFirstRender&&Bu(n.metricsImpressionOptions.locationTracker),nn(0,a,n.metricsImpressionOptions),n.isFirstRender&&ju(n.metricsImpressionOptions.locationTracker),(0,Gh.isSome)(a)&&function(e,t,n){if((0,Yh.isNothing)(t.url)||(0,Yh.isNothing)(t.impressionMetrics)||!n.showingPlaceholders)return
const o=t.url
try{const e=nj.from(o).query[bV],n=JSON.parse(decodeURIComponent(e))
n.originalPlaceholderShelfImpressionMetrics=t.impressionMetrics,function(e,t,n){const o=nj.from(t.url),s=nj.from(Pf(0,0,n))
for(const e of Object.keys(o.query))r(s.query[e])&&(s.query[e]=o.query[e])
t.url=s.build()}(0,t,n)}catch{t.url=o}}(0,a,n),a}function qf(e,t){const n={pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker},r=hd(e,t.data)
return o(r)?null:wl(e,r,n,cL,cN,XS)}function zf(e,t,n,r,o,s,i){const a={id:d(n,"id"),type:n.type,collectionDisplayStyle:Lt(0,n),filterOverrides:H(n,"filterOverrides"),pageId:t,data:n,presentationHints:{},clientIdentifierOverride:null,isFirstRender:!0,shouldFilter:!0,gamesFilter:Jf(n),hasExistingContent:!1,title:null,subtitle:null,eyebrow:null,titleArtwork:null,remainingItems:[],metricsImpressionOptions:null,metricsPageInformation:s,metricsLocationTracker:i,recoMetricsData:Qr(0,n),isDeferring:!1,showOrdinals:!1,ordinalIndex:1,isSearchLandingPage:!1,isArcadePage:r,shelfIndex:o}
return Yf(e,n,a),a}function Yf(e,t,n){let r=W(t,LM),o=W(t,uM),s=W(t,tO),a=null,c=!1
const l=oe(t,xL)
i(l)&&(s=e.loc.uppercased(W(t,LM)),r=W(l,LM),a=_l(e,l,{useCase:1}),o=null,c=!0)
const u=function(e,t,n,r,o){const s=t.type,i=Lt(0,t),a={id:d(t,"id"),kind:null,softwareType:null,targetType:l$,title:n,pageInformation:r,locationTracker:o,idType:ry,shelfType:s,recoMetricsData:M(t),canonicalId:d(t.meta,wD)}
switch(s){case rw.Collection:Hf(0,t,a),i===ow.Hero&&function(e,t){t.title=Dx
const n=Gf(e)
t.autoAdvanceInterval=n.autoScrollInterval}(e,a)
break
case rw.Recommendations:Hf(0,t,a)}return a}(e,t,c?s:r,n.metricsPageInformation,n.metricsLocationTracker)
n.title=r,n.subtitle=o,n.eyebrow=s,n.titleArtwork=a,n.metricsImpressionOptions=u}function Jf(e){let t=null
switch(W(e,"clientFilter")){case cw.ArcadeGames:t=F$
break
case cw.AllGames:t="all"}return t}function Zf(e,t,n){const r=function(e,t){switch(t){case FX:return"badge_hardware"
case $X:return"badge_trial_eligible"
default:return null}}(0,t),o=new YH(F$,Xx,null,{offerHints:r})
if(o.metricsOverlay={...o.metricsOverlay,...n},e.bag.arcadeDownloadPacksHardwareTabBadgeUpsellIntegrationEnabled&&e.featureFlags.isEnabled(DE)&&Pi(e,e.bag.arcadeDownloadPackRolloutRate)){const e=new nU(y_),t=lL
e.pageData=t,e.presentationContext=vN,o.purchaseSuccessAction=e}const s=new nU(bM)
return s.pageData=o,s}async function Kf(e,t){const n=t.eventString,r=t.featuresDictionary
if(!s(r))return await Promise.reject("Received non-defined engagement features.")
const o=function(e,t,n,r){switch(t){case"arcadeTabDidComeOnScreen":case"arcadePageDidAppear":return function(e,t,n){const r=[]
for(const e of BX)if(e in t){const t=new $U(e,!1)
r.push(t)}for(const o of BX){if(n.includes(o)&&!e.bag.unrestrictedServerSideTabBadging)continue
const i=t[o]
if(s(i)){const t=Zf(e,o,i)
r.push(t)
break}}if(r.length>0)return new KH(new iU(r))
{const e=new RU
return new KH(e)}}(e,n,r)
case"didBecomeArcadeTrialEligible":if(!e.bag.enableArcadeTrialEligibleBadging)return new KH(new RU)
if(r.includes($X))return new KH(new RU)
const t=new $U($X,!0),o=new oU(F$,e.loc.decimal(1)),i=new iU([t,o])
return new KH(i)
case"didSubscribeToArcade":return function(e){const t=[]
for(const e of BX){const n=new $U(e,!1)
t.push(n)}const n=new iU(t)
return new KH(n)}()
case"didBecomeSubscribed":if(!s(n["com.apple.Arcade.TrialEligible1"]))return new KH(new RU)
const a=new $U($X,!1)
return new KH(a)
case"didBecomeNonSubscribed":return new KH(new RU)
default:return null}}(e,n,r,s(t.previouslyDisabledFeatures)?t.previouslyDisabledFeatures:[])
return s(o)?await Promise.resolve(o):await Promise.reject("Did not receive a valid engagement event.")}async function Qf(e,t){var n
const r=function(e,t,n,r){if(!BX.includes(t))return null
let o=null
if(n&&e.bag.unrestrictedServerSideTabBadging){const t=e.loc.decimal(1)
o=new oU(F$,t)}else if(n&&!r.includes(t)){const t=e.loc.decimal(1)
o=new oU(F$,t)}else n||(o=new oU(F$,null))
return new KH(o)}(e,t.identifier,t.isEnabled,null!==(n=t.previouslyDisabledFeatures)&&void 0!==n?n:[])
return s(r)?await Promise.resolve(r):await Promise.reject(new Error(`fetchBadgingTask called with unsupported identifier: ${t.identifier}, featuresDictionary: ${JSON.stringify(t.featuresDictionary)}, previouslyDisabledFeatures: ${t.previouslyDisabledFeatures}`))}async function Xf(e,t){return await e.required(gQ).fetchPage(e,t,lH)}async function ep(e,t){const n=new hH(e).withIdOfType(t,RO),r=Mr(e,n)
return await r.then(t=>function(e,t){return Uh.context("msoProviderDataFromData",()=>{const n=D(t),r=W(n,z$),o=W(n,b$),s=function(e,t){return Uh.context("msoProviderArtworkFromData",()=>{const n=j(t,"editorialArtwork.storeFlowcase")
if(n)return El(e,n,{useCase:3})
const r=j(t,I$)
return El(e,r,{useCase:3})})}(e,n)
s&&(s.crop="sr")
const i=function(e,t){const n=j(t,JE)
return n?El(e,n,{useCase:21}):null}(e,n)
return new jX(r,o,s,i)})}(e,t))}async function tp(e,t){if(r(t.providerAdamId)||r(t.subscribedChannelIds))return await e.required(gQ).fetchPage(e,t.url,cH)
{const n=np(e,t.providerAdamId),r=Mr(e,n)
return await r.then(n=>{const r=function(e){return Uh.context("msoAppsFromResponse",()=>{const t=D(e),n=se(t,Wk),r={}
for(const e of n)r[oe(e,C$).id]=H(e,"channelNames")
const o=se(t,q$).map(e=>e.id)
return new HX(r,o)})}(n),o=function(e,t){const n=e.appsToAlwaysShow
for(const r of Object.keys(e.apps)){const o=e.apps[r]
for(const e of o)if(-1!==t.indexOf(e)){n.push(r)
break}}return n}(r,t.subscribedChannelIds)
return rp(e,n,o)})}}function np(e,t){return new hH(e).withIdOfType(t,RO).includingRelationships([q$,Wk]).addingQuery("limit[channel-apps]","100")}function rp(e,t,n){return Uh.context("msoRoomPageWithResponse",()=>{const r=D(t),o=Mn(e,pN,r.id,t),s=se(r,q$),a=se(r,Wk)
for(const e of a){const t=oe(e,C$)
i(t)&&s.push(t)}const c=new ZZ
c.ids=s.map(e=>e.id),c.shouldFilter=!1,c.metricsPageInformation=o
const l=function(e,t,n,r,o=[]){return Uh.context("msoRoomPageWithContext",()=>{const s=[],i=[]
for(const e of t)-1!==n.indexOf(e.id)?s.push(e):i.push(e)
const a={rootPosition:0,locationStack:[]},c={lockupOptions:{metricsOptions:{pageInformation:r.metricsPageInformation,locationTracker:a},artworkUseCase:2}},l=[],u={pageInformation:r.metricsPageInformation,locationTracker:a,targetType:l$,idType:XF,id:"0"}
if(s.length>0){const t=e.loc.string("MSO_INCLUDED_IN_SUBSCRIPTION"),n=new ZZ
n.remainingContent=[],n.metricsPageInformation=r.metricsPageInformation,n.metricsLocationTracker=a,n.preferredShelfContentType=SF,u.id="0",Fu(0,u,t),c.contentUnavailable=function(e,t){return n.remainingContent.push(s[t]),!1}
const o=new rH(SF)
o.title=t,o.shouldFilterApps=r.shouldFilter,o.items=ml(e,s,c),o.url=op(n),Bu(a),o.items.length>0&&(ju(a),l.push(o))}if(s.length>0&&i.length>0){const t=e.loc.string("MSO_AVAILABLE_WITH_UPGRADED_SUBSCRIPTION"),n=new ZZ
n.remainingContent=[],n.metricsPageInformation=r.metricsPageInformation,n.metricsLocationTracker=a,n.preferredShelfContentType=SF,u.id="1",Fu(0,u,t),c.contentUnavailable=function(e,t){return n.remainingContent.push(i[t]),!1}
const o=new rH(SF)
o.title=t,o.shouldFilterApps=r.shouldFilter,o.items=ml(e,i,c),o.url=op(n),Bu(a),o.items.length>0&&(ju(a),l.push(o))}if(0===l.length){const n=new ZZ
n.remainingContent=[],n.metricsPageInformation=r.metricsPageInformation,n.metricsLocationTracker=a,n.preferredShelfContentType=g$,u.id="0",Fu(0,u,null),c.contentUnavailable=function(e,r){return n.remainingContent.push(t[r]),!1}
const o=new rH(SF)
o.shouldFilterApps=r.shouldFilter,o.items=ml(e,t,c),o.url=op(n),Bu(a),ju(a),l.push(o)}for(const e of l)e.isHorizontal=l.length>1
const d=o.concat(l)
return new cH(d)})}(e,s,n,c)
return l.title=W(r,z$),l.isIncomplete=!1,Fn(e,l,o),l})}function op(e){return e.remainingContent.length?`${YU}:/${gG}/${QU}/`+encodeURIComponent(JSON.stringify(e)):null}async function sp(e,t){const n={url:`${e.bag.getCancellablePreorderItemsSrv}?&includeAllLockups=false&includeNonBookCancellablePreorderItems=true${t.isArcade?"&preorderItemType=ArcadeApp":""}`,signingStyle:IM}
return await e.network.fetch(n).then(async n=>{const r=JSON.parse(n.body)
if(0!==r.status)return await Promise.resolve("noAuthorization")
const o=r.cancellablePreorderItems.filter(e=>e.preorderAdamId.toString()===t.adamId)
if(null===o||0===o.length)return await Promise.reject("Expected AdamID was missing. This AdamId might have not been preordered before, or the isArcade flag may be incorrect.")
if(o.length>1)return await Promise.reject(`Multiple matches for adamId ${t.adamId}, when only one is expected.`)
const s=o[0].preorderId,i={url:e.bag.cancelPreorderItemSrv,method:EM,signingStyle:IM}
return i.body=`preorderId=${s}`,await e.network.fetch(i).then(async e=>{if(!e.ok)throw Error(`Bad Status code ${e.status} for ${i.url}`)
return 0!==JSON.parse(e.body).status?await Promise.resolve("unableToCancel"):await Promise.resolve("canceled")}).catch(async e=>await Promise.reject(e))}).catch(async e=>await Promise.reject(e))}async function ip(e,t){if(t.preloading&&Re(e))return await Promise.reject(new Error(kP))
0!==Nr(e,new nj(t.url)).length&&e.network.fetch({url:e.bag.redirectUrlEndpoint,method:EM,headers:{"Content-Type":v_},body:`url=${encodeURIComponent(t.url)}`})
const n="1"===new nj(t.url).query[pV],r=JX.generateProductPageOptions(e,void 0,new nj(t.url))
let o=e.required(gQ).fetchPage(e,t.url,BW)
if(!o){const n=new hH(e,t.url)
o=Mr(e,n).then(n=>Lc(e,n,r,void 0,t.referrerData))}return await o.then(r=>(e.host.clientIdentifier===NB?(n&&(r.shareAction=null,r.titleOfferDisplayProperties=null,r.expandedOfferDetails=null,r.lockup.offerDisplayProperties=null),r&&nD in r&&Vn(0,r)):s(t.referrerData)&&r&&nD in r&&Vn(0,r),r))}async function ap(e,t,n){const a=pn(e,t,!1),c=new hH(e)
switch(t){case L$:c.usingCustomAttributes(De(e)),fn(e)===_R&&c.includingAttributes([qR])
break
case u$:case $F:c.usingCustomAttributes(De(e))}switch(t){case L$:case u$:case $F:(0,Yh.isSome)(e.bag.adsOverrideLanguage)&&e.props.isNotEnabled("promotedContentDefaultAppMetaFix")&&(c.sparseLimit=3)}const l=e.bag.adsOverrideLanguage
i(l)&&c.enablingFeature(_g).addingQuery("l",l)
const u=Ge(e,c).query
try{const c=await e.ads.fetchOnDeviceAdPlacement(t,a,u,n)
return await async function(e,t,n){var a,c,l,u,d,f
o(t.clientRequestId)&&(t.clientRequestId=e.random.nextUUID(),Dn(e,`clientRequestId was nil. Assigned ${t.clientRequestId}`))
const p={clientRequestId:t.clientRequestId,iAdId:t.iAdId,placementType:null!==(c=null===(a=null==t?void 0:t.ad)||void 0===a?void 0:a.placementType)&&void 0!==c?c:n}
if(t.failureReason)return p.failureReason=t.failureReason,p
p.onDeviceAd=t.ad
let h=null===(l=t.ad)||void 0===l?void 0:l.appMetadata
const w=D(h)
if(o(null===(u=null==w?void 0:w.attributes)||void 0===u?void 0:u.name)||o(null===(d=null==w?void 0:w.attributes)||void 0===d?void 0:d.platformAttributes)||o(ft(e,w)))try{const n=function(e,t){const n=new hH(e).withIdOfType(t.adamId,q$).usingCustomAttributes(De(e)).includingAttributes([qR])
i(t.cppIds)&&n.addingQuery(MG,t.cppIds[0])
const r=e.bag.adsOverrideLanguage
return i(r)&&n.addingQuery("l",r),n}(e,t.ad)
h=await Mr(e,n)}catch(t){Dn(e,`fetchAds request failed - ${t}`),p.failureReason=Og}if(i(null===(f=D(h))||void 0===f?void 0:f.attributes)){p.mediaResponse=function(e,t,n){const s=D(t)
if(o(s)||r(s.attributes))return Dn(e,"decorateiAdAttributeFromOnDeviceAd cannot decorate for malformed response"),null
const i=n.ad,a=`${i.adamId}|${i.metadata}`,c={clientRequestId:n.clientRequestId,impressionId:i.impressionId,metadata:i.metadata,privacy:i.privacy,lineItem:a}
switch(i.placementType){case L$:const t=fn(e)===_R
c.format={images:t,text:"",userRating:!1}
break
case kN:c.format={images:!0,text:"",userRating:!1}}return s.attributes.iad=c,mn(0,s,i.instanceId),t}(e,h,t),yn(e,D(h),p.onDeviceAd)||(Dn(e,"fetchAds request failed - localization not available"),p.failureReason=NI)
const i=function(e,t,n){return n===L$?function(e,t){var n,r
const o=_e(e,D(t.mediaResponse))
return(null===(r=null===(n=t.onDeviceAd)||void 0===n?void 0:n.cppIds)||void 0===r?void 0:r.includes(o.productPageId))?null:MI}(e,t):null}(e,p,n)
s(i)&&(Dn(e,`fetchAds request failed - ${i}`),p.failureReason=i)}return p}(e,c,t)}catch{return null}}function cp(e,t,n,r=ew.Default){const o=W(t,WM)
let s=function(e,t,n){return j(e,t,void 0)}(t,vF);(0,Yh.isNothing)(s)&&r===ew.CategoriesAndCharts&&(s={layoutDensity:tw.Density1,layout:void 0,layoutSize:void 0})
const i=h(j(t,"itemDisplayStyle")),a=z(t,gy),c=Y(t,sb),l=a?t.href:null
return new pW(t.id,o,s,c,a,l,i,n)}function lp(e,t,n,r){return{metricsOptions:up(0,t,n,r)}}function up(e,t,n,r){const o=ne(t,V$)
let s=NN
return r.pageType===Cw.ChartsAndCategories&&(s=lb),{id:n.id,kind:null,softwareType:null,targetType:l$,title:n.title,pageInformation:r.metricsPageInformation,locationTracker:r.metricsLocationTracker,idType:s,fcKind:null,canonicalId:d(t.meta,wD),recoMetricsData:M(o)}}function dp(e,t,n,r){return{...r.metricsOptions,...an(e,n,t.title,null),recoMetricsData:M(n),targetType:pp(t.density),idType:HN}}function fp(e,t,n,r){return{pageInformation:r.metricsOptions.pageInformation,locationTracker:r.metricsOptions.locationTracker,recoMetricsData:M(n),targetType:pp(t),id:n.id}}function pp(e){if(r(e))return pO
switch(e){case tw.Density1:return pO
case tw.Density2:return E_
default:return pO}}function hp(e,t){const n=W(t,WM),r=d(t,"meta.autoSelectedTabId"),s=d(t,"meta.sourceShelfCanonicalId"),a=Mn(e,pN,s,t),l=mo(e)
a.recoMetricsData=xu(a.recoMetricsData,null,l)
const u={shelves:[],metricsLocationTracker:{rootPosition:0,locationStack:[]},metricsPageInformation:a,adStitcher:null,adIncidentRecorder:null,pageType:Cw.ChartsAndCategories},f=c(t,iN),p={},h=[],w=[]
for(const t of f){const n=cp(0,t,Xh.CategoriesAndCharts,ew.CategoriesAndCharts),r={...u,metricsLocationTracker:{rootPosition:0,locationStack:[]}},s={actionType:A$,id:n.title,targetType:j$,pageInformation:r.metricsPageInformation,locationTracker:r.metricsLocationTracker},i=new AU(t.id,n.title)
od(e,i,s)
const a=lp(0,t,n,r)
Fu(0,a.metricsOptions,n.title)
const c=wp(e,t,!0,n,0,a)
if(Bu(a.metricsOptions.locationTracker),o(c))continue
p[c.id]=c,h.push(c.id)
const l=new iH
l.action=i,l.id=c.id
const d=c.title
l.title=d,w.push(l)}if(!i(h))return new lW
const g=new aH
g.id=e.random.nextUUID()
const m=new rH("pageTabs")
m.items=[g],p[g.id]=m
const y=new lW
y.shelfMapping=p
const v={}
for(const e of h)w.length>1?v[e]=[g.id,e]:v[e]=[e]
for(const e of Object.values(p))e.title=void 0
return y.title=n,y.pageTabs=g,y.columnCount=2,y.shelfOrderings=v,y.defaultShelfOrdering=h.includes(r)?r:h[0],g.tabs=w,g.selectedTabId=y.defaultShelfOrdering,Fn(e,y,u.metricsPageInformation),y}function wp(e,t,n,r,c,l){var u,f,p,h,w,g
const m=[],y=se(t,V$),v=new rH(ak)
if(v.isHorizontal=!1,v.id=t.id,v.title=r.title,v.presentationHints={isWidthConstrained:!0},a(null===(u=r.displayStyle)||void 0===u?void 0:u.layoutSize)&&(v.contentsMetadata={type:"searchLandingChartsAndCategoriesSection",numberOfColumns:r.displayStyle.layoutSize}),r.hasSeeAll){const t=new nU(ak)
t.pageUrl=r.seeAllLink,t.title=e.loc.string(XN)
const n={...l.metricsOptions,targetType:j$}
sd(e,t,t.pageUrl,n),v.seeAllAction=t}nn(0,v,l.metricsOptions)
const A=n?bw.seeAllPage:bw.other
for(const t of y){const n=Dl(e,t,A,null===(f=null==r?void 0:r.displayStyle)||void 0===f?void 0:f.layoutDensity),a=j(t,qN)
let c=null,u=null
if(!i(a))continue
if(c=d(a,z$),u=d(a,w_),o(c))continue
const y=W(t,ab),v=se(t,PF)
let T=null
if(s(y)){const e=new nU(CD)
e.pageUrl=y,e.title=c,T=e}else{if(!i(v))continue
{const t=hi(e,v[0].href)
if(!((null==t?void 0:t.length)>0))continue
{const e=new nU($$)
e.pageUrl=t,e.title=c,T=e}}}od(e,T,fp(0,null===(p=null==r?void 0:r.displayStyle)||void 0===p?void 0:p.layoutDensity,t,l))
const P=new uW(c,n,u,T,null===(h=null==r?void 0:r.displayStyle)||void 0===h?void 0:h.layoutDensity,gp(null===(w=null==r?void 0:r.displayStyle)||void 0===w?void 0:w.layoutDensity),mp(null===(g=null==r?void 0:r.displayStyle)||void 0===g?void 0:g.layoutDensity))
nn(0,P,dp(e,P,t,l)),m.push(P),ju(l.metricsOptions.locationTracker)}return o(m)?null:(v.items=m,v)}function gp(e){switch(e){case tw.Density1:return{width:.4,height:.4,asRatioOfSize:!0,constraint:Qh.SquareByWidth,location:{relativeLocation:Kh.TopRight}}
case tw.Density2:return{width:.28,height:1,asRatioOfSize:!0,constraint:Qh.FreeForm,location:{relativeLocation:Kh.MiddleLeft}}
case tw.Density3:default:return}}function mp(e){switch(e){case tw.Density1:return{width:.15,height:0,asRatioOfSize:!0}
case tw.Density2:return{width:.28,height:0,asRatioOfSize:!0}
default:return}}async function yp(e,t){const n=new hH(t,e.url).forType(SR).includingScopedRelationships(RP,[V$]).enablingFeatures([dN,qk]).addingQuery(BV,WR),r=Mr(t,n)
return await r.then(e=>hp(t,e))}function vp(e,t,n,r){if(o(n))return null
const s=new s0(n.displayLabel,ok)
!function(e,t,n,r){const o=aR,s=mT,i={actionType:o,location:Nu(0,{pageInformation:null,locationTracker:r.locationTracker,targetType:s},t.targetToken),searchTerm:n},a={targetId:t.targetToken},c=Zu(e,t.targetToken,s,i,[aR])
t.actionMetrics.addMetricsData(c)
const l=Ku(e,n,s,o,null,a,[aR])
t.actionMetrics.addMetricsData(l)}(e,s,t.term,r)
const i=new r0(n.displayLabel,n.isSelected,n.displayLabel,s)
return un(0,i,mT,r),i}function Ap(e,t,n){const r=v(t),s=v(t.attributes)
return s.iads=n.adData,r.attributes=s,function(e,t,n){var r
const s=xe(_e(e,t))
if(n.selectedCppId===s||o(null===(r=null==t?void 0:t.meta)||void 0===r?void 0:r.cppData))return
const i=v(t.meta)
i.cppData.ppid=n.selectedCppId,t.meta=i}(e,r,n),mn(0,r,n.instanceId),r}function Tp(e,t,n){const r=t||{},o=[]
e.client.deviceType!==H$&&o.push(new AY(X_,[new TY(e.loc.string(ZC),null,r[X_]),new TY(e.loc.string(tT),sF,r[X_])])),o.push(new AY(f_,[new TY(e.loc.string(KC,Yx),null,r[f_]),new TY(e.loc.string(nT,Yx),bI,r[f_])]))
const i=_r(e,n,!1)
if(i){const t=i.categories
if(t.length){const n=t.filter(e=>s(e.genreId)).map(e=>new TY(e.name,e.genreId,r[mF]))
n.unshift(new TY(e.loc.string(QC,Yx),null,r[mF])),o.push(new AY(mF,n))}}const a=e.bag.searchSortOptions,c=[]
c.push(new TY(e.loc.string(XC),null,r.sort))
for(const t of a)c.push(new TY(e.loc.string(rT+t),t,r.sort))
c.length>1&&o.push(new AY(oF,c))
const l=e.bag.ageBands.map(e=>new TY(d(e,z$),d(e,oT),r.ages))
return l.length>0&&e.client.deviceType!==H$&&o.push(new AY(dL,l)),o}function Pp(e,t){let n=null,r=null,o=null
const i=new $Q(X_,X_,e.loc.string("SEARCH_FACET_TYPE_TITLE_DEVICE_TYPE"),vL,null,[new FQ(e.loc.string(ZC),null),new FQ(e.loc.string(tT),sF)],null,null,Sp(e,X_)),a=new $Q(sT,sT,e.loc.string("SEARCH_FACET_TYPE_TITLE_PRICE"),vL,e.loc.string("SEARCH_FACET_DEFAULT_ANY"),[new FQ(e.loc.string(KC,Yx),null),new FQ(e.loc.string(nT,Yx),bI)],null,null,Sp(e,f_)),c=_r(e,t,!1)
if(c){const t=c.categories
if(t.length){const r=t.filter(e=>s(e.genreId))
n=new $Q(iT,iT,e.loc.string("SEARCH_FACET_TYPE_TITLE_CATEGORY"),vL,null,[new FQ(e.loc.string(QC,Yx),null)],null,null,Sp(e,mF))
for(const e of r)n.options.push(new FQ(e.name,e.genreId))}}const l=e.bag.searchSortOptions
r=new $Q(oF,oF,e.loc.string("SEARCH_FACET_TYPE_TITLE_SORT"),vL,null,[new FQ(e.loc.string(XC),null)],null,null,Sp(e,oF))
for(const t of l)r.options.push(new FQ(e.loc.string(rT+t),t))
const u=e.bag.ageBands.map(e=>new FQ(d(e,z$),d(e,oT)))
u.length>0&&e.client.deviceType!==H$&&(o=new $Q(aT,aT,e.loc.string("SEARCH_FACET_TYPE_TITLE_AGE_BAND"),vL,e.loc.string("SEARCH_FACET_DEFAULT_ALL"),u,null,null,Sp(e,dL)))
const f=new UQ([],!1,null)
{const e=[i,a]
s(n)&&e.push(n),e.push(r),s(o)&&e.push(o)
for(const t of e)t.showsSelectedOptions=!0
f.facetGroups.push(new BQ(e))}return f}function Ip(e){return{targetPlatform:[new FQ(e.loc.string(ZC),null)],"filter[price]":[new FQ(e.loc.string(KC,Yx),null)],sort:[new FQ(e.loc.string(XC),null)],"filter[genre]":[new FQ(e.loc.string(QC,Yx),null)]}}function Sp(e,t){const n=new RU
return id(e,n,t),n}function bp(e,t){if(!z(t,rk))return null
const n=W(t,ck)
if(i(n))return n
const r=W(t,ZF)
return i(r)?r.replace(/\n/g," "):null}function Cp(e,t,n,a,u,d,f,p){return Uh.context("searchResultFromData",()=>{let h=null
const w=t.type,g={metricsOptions:{pageInformation:u.pageInformation,locationTracker:u.locationTracker,targetType:BL},hideZeroRatings:!0,artworkUseCase:8,isNetworkConstrained:d,canDisplayArcadeOfferButton:vu(0,dD),clientIdentifierOverride:Rp(0,f),isMultilineTertiaryTitleAllowed:!1},m=function(e,t,n){var r,o
if(!function(e){return e.client.deviceType===U$}(e))return wF
const i=t.meta,a=null===(r=null==i?void 0:i.displayStyle)||void 0===r?void 0:r.condensed
if(s(a))return kp(e,a)
const c=null===(o=null==n?void 0:n.displayStyle)||void 0===o?void 0:o.condensed
return s(c)?kp(e,c):Ep(e)}(e,t,p)
switch(w){case JD:case cR:case RN:case M$:case jN:const d=rs(e,t,{useOTDTextStyle:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,isHeroCard:!1,isSearchContext:!0},new WW(u.pageInformation,u.locationTracker))
if(d&&d.media&&d.media.kind===Qx){const e=d.media.lockup
e.theme=R$,h=new OY(e)}else if(function(e,t,n){if(1!=(l(n,"experiments.showGridCard")?0:1))return!1
switch(t.type){case jN:return i(H(t,lk))
case JD:case cR:return!0
case M$:switch(is(t)){case fw.List:case fw.NumberedList:case fw.Grid:case fw.River:return!0
default:return!1}default:return!1}}(0,t,n)){const n=function(e,t,n){const r=function(e,t){if(t.type===RN)return e.loc.string(hT)
const n=bp(0,t)
return i(n)?n:e.loc.string("Search.EditorialSearchResultType.Heading.Collection")}(e,t),s=function(e,t){return t.type===RN?W(t,z$):fu(e,t,z$)}(e,t),a=an(e,t,s,{targetType:BL,pageInformation:n.pageInformation,locationTracker:n.locationTracker})
Fu(0,a,s)
const c=yl(e,t,{actionType:A$,targetType:j$,pageInformation:n.pageInformation,locationTracker:n.locationTracker,id:av,idType:XF},e.host.clientIdentifier)
c.title=e.loc.string(XN)
const l={lockupOptions:{metricsOptions:{pageInformation:n.pageInformation,locationTracker:n.locationTracker,targetType:r$},skipDefaultClickAction:!1,artworkUseCase:8,hideCompatibilityBadge:!1},filter:128}
let u=se(t,bF)
o(u)&&(u=se(t,nk))
const d=ml(e,u,l)
Bu(n.locationTracker)
const f=new xY(r,s,d,c,null)
return nn(0,f,a),o(d)?null:f}(e,t,u)
n&&(h=n)}else{const n=function(e,t,n,o){return Uh.context("editorialSearchResultFromData",()=>{let a
const c=W(t,z$)
switch(t.type){case jN:{const n=new LY(c),r=H(t,lk)
if(i(r))n.collectionAdamIds=r
else{const r=El(e,j(t,I$),{useCase:9,allowingTransparency:!0})
n.iconArtwork=r}n.type=eN,a=n
break}case JD:case cR:{const n=new LY(c)
n.artwork=El(e,j(t,I$),{useCase:9,cropCode:"sr"}),n.collectionAdamIds=H(t,lk),n.type=uk,a=n
break}case M$:{const c=new WW(n.pageInformation,n.locationTracker),l=function(e,t,n,o){const a={useOTDTextStyle:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,isHeroCard:!1,isSearchContext:!0}
a.prevailingCropCode=o&&e.client.isPhone?"DMGE.AppST01":"fo"
const c=rs(e,t,a,n)
if(!c)return null
const l=new LY(c.title)
l.type=Tx,l.clickAction=c.clickAction
let u=null
if(c.media)switch(c.media.kind){case UM:const e=c.media
switch(l.artwork=e.artworks[0],r(l.artwork)&&(l.iconArtwork=e.icon),W(t,ZD)){case fw.AppOfTheDay:case fw.GameOfTheDay:const e=oe(t,bF)
e&&(l.title=W(e,z$)||l.title)}break
case pI:case hI:u=c.media.lockups
break
case I$:const n=c.media
l.artwork=n.artworks[0]
break
case eM:case DR:u=c.media.lockups
break
case HF:const o=c.media
if(l.artwork=o.videos[0].preview,l.video=o.videos[0],c.overlay instanceof $H){const e=c.overlay
l.title=e.title,l.subtitle=e.description}else l.subtitle=o.description
break
case Kx:const i=c.media
if(l.artwork=i.artworks[0],l.appEventFormattedDates=i.formattedDates,l.subtitle=i.subtitle,l.tintColor=i.tintColor,l.type="appEventStory",s(c.style))switch(c.style){case GF:case h$:l.mediaOverlayStyle=GF
break
case R$:l.mediaOverlayStyle=R$
break
default:ae(c.style)}}if(c.overlay)switch(c.overlay.kind){case r$:const e=c.overlay
l.artwork||(u=[e.lockup])
break
case sg:u=c.overlay.lockups
break
case TM:const t=c.overlay
l.subtitle=t.paragraph.text}if(s(u)){l.collectionAdamIds=[],l.collectionAppIcons=[]
for(const e of u)l.collectionAdamIds.push(e.adamId),l.collectionAppIcons.push(e.icon)
1===u.length&&(l.lockup=u[0])}const d=Ot(0,t)
l.editorialDisplayOptions=Rt(d)
const f=bp(0,t);(null==f?void 0:f.length)>0&&f!==l.title&&(l.tagline=f)
const p=c.heroMedia
return i(p)&&(i(p.artworks[0])?(l.artwork=p.artworks[0],l.artwork.crop="em"):i(p.videos[0])&&(l.video=p.videos[0])),l.video&&(l.video.showPlaybackControls=!1,l.video.canPlayFullScreen=!1,l.video.playbackControls={}),l.collectionAdamIds||l.artwork||l.iconArtwork?l:null}(e,t,c,o===cx)
a=l
break}case RN:{const n=new LY(c)
if(n.artwork=El(e,j(t,JE),{useCase:9,cropCode:"sr"}),n.type=IF,(0,Gh.isSome)(n.artwork))a=n
else{let r=se(t,nk)
r=r.filter(t=>!Ze(e,t,10996))
const o=[],i=[]
r.forEach(t=>{o.push(t.id)
const n=_l(e,t,{useCase:9})
s(n)&&i.push(n)}),n.collectionAdamIds=o,n.collectionAppIcons=i,a=n}break}}if(r(a))return null
if(a instanceof LY&&null!=a.collectionAdamIds&&a.collectionAdamIds.length){const e=a.collectionAdamIds.length
a.artworkGridType=e<=5?"extraLarge":e<=8?pL:e<=16?gT:FL}const l=an(e,t,a.title,n)
return a.clickAction=yl(e,t,l,null),nn(0,a,l),a})}(e,t,g.metricsOptions,m)
n&&(n.title&&(n.title=n.title.replace(/\n/g," ")),n instanceof LY&&n.subtitle&&(n.subtitle=n.subtitle.replace(/\n/g," ")),h=n)}break
case QF:if(o(bl(0,t)))return null
const f=cl(e,t,g)
f.theme=R$,Op(e,f,p),h=new OY(f)
break
default:if(delete t.attributes.iad,w===x$){const n=function(e,t,n,r=null){return Uh.context("bundleLockupFromData",()=>{const o=new Oj
return function(e,t,n,r){t&&Uh.context("copyDataIntoBundleLockup",()=>{Xc(e,t,n,r)
const o=ne(t,q$)
if(o){const t={lockupOptions:r}
n.children=gl(e,o,t)}})}(e,t,o,n),Qc(e,t,o,r),o})}(e,t,g,p)
Op(e,n,p),h=new RY(n)}else{const n=dl(e,t,g,{showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}},p)
Op(e,n,p)
const o=function(e,t,n,o,i,a){return Uh.context("appEventSearchResultFromData",()=>{if(!ar(e)||r(t.meta))return null
const u=c(t.meta,eT)
if(u.length<=0)return null
const d=l(t.meta,"associations.app-events.attributes.forceAppEvent")
let f,p,h=[]
if(d)h.push(u[0])
else{p=ho(e,c$,u,!1,i,!1,null,t.id)
const n=p.personalizedData
if(n.length<=0)return null
h=n}const w={...a,targetType:bE},g={...o,metricsOptions:w}
let m
for(const n of h){const o=gr(e,n,t,!1,!0,g.offerEnvironment,g.offerStyle,!1,!1,w,!1,!0,null,!1,!1)
if(!(r(o)||o instanceof Date)&&(f=o,s(f))){m=null!=t?t:oe(n,C$)
break}}if(r(f))return null
const y=new _Y
y.lockup=n,y.appEvent=f,y.alwaysShowAppEvent=d,y.clickAction=n.clickAction
const v=xu(null,null==p?void 0:p.processingType,null),A={...a,id:f.appEventId,kind:Fg,targetType:bE,title:f.title,softwareType:null,recoMetricsData:v}
return s(m)&&(A.relatedSubjectIds=[m.id]),nn(0,y,A),y})}(e,t,n,g,a,u)
s(o)?(h=o,h.condensedBehavior=wF):h=new EY(n)}}return s(h)&&r(h.condensedBehavior)&&(h.condensedBehavior=m),h})}function kp(e,t){switch(t){case cx:return cx
case wF:return wF
case"when-installed":return wT
default:return Ep(e)}}function Ep(e){return e.client.deviceType===U$?wT:wF}function Op(e,t,n){const o=function(e,t,n,o){var s
if(r(t)||!e.client.isPhone)return null
const a=null===(s=null==t?void 0:t.displayStyle)||void 0===s?void 0:s.metadataPrecedenceOrder
if(!i(a))return null
const c=a.indexOf(n),l=a.indexOf(o)
return-1===c&&-1===l?null:-1!==c&&(-1===l||c<l)}(e,n,GL,qD)
s(o)&&(t.isEditorsChoice=t.isEditorsChoice&&o)}function Rp(e,t){return t===W$?_B:null}async function Dp(e,t,n,a,c,u=null,d=null){const f=[],p=[],h=n||null
let w,g
if(i(u)){const n=function(e,t,n,a,c,u,d){var f,p,h,w,g
const m=new DY,y=null!==(f=a.requestDescriptor.isNetworkConstrained)&&void 0!==f&&f
if(Fu(0,{id:BO,kind:Ov,softwareType:null,targetType:null,title:BO,pageInformation:c.pageInformation,locationTracker:c.locationTracker,idType:XF},BO),o(t))return{result:m}
const v=n[0]
let A
Dn(e,`Adverts received from ad server: ${t.filter(s).map(e=>`[${e.id}]`).join(", ")}`)
let T=!0
for(const n of t){if(r(n))continue
if(Ze(e,n)){Dn(e,`[${n.id}] filtered by shouldFilter() - app probably not supported on current os or device`)
continue}const t=An(n.id,null==v?void 0:v.id,u),s=kn(v,t)
if(n.attributes.iad=Cn(n,s),o(n.attributes.iad)){Dn(e,`[${n.id}] filtered because no appropriate iAd dictionary was found. (Probably a server issue if hitting this)`)
continue}const a={metricsOptions:{pageInformation:c.pageInformation,locationTracker:c.locationTracker,targetType:BL,isAdvert:!0},hideZeroRatings:!0,artworkUseCase:8,isNetworkConstrained:y,canDisplayArcadeOfferButton:vu(0,dD)},f=l(Ae(e,n,fx),"format.images"),w=o(A),g=bn(hl(e,n,a,BY,d)),P=null===(p=null==d?void 0:d.displayStyle)||void 0===p?void 0:p.screenshots,I=Tn(e,g,n.id,s,f,A,P)
if(r(I)){Dn(e,`[${n.id}] will not be displayed because we could not create an ad style compatible with ${Rn(A)}`)
continue}if(!yn(e,n,null,I.style)){Dn(e,`[${n.id}] filtered because localization is not available`)
continue}w?(Dn(e,`[${n.id}] first ad dictates ad display style of: ${Rn(I)}`),A=I):Dn(e,`[${n.id}] will be displayed because it is compatible with the display style of: ${Rn(I)}, which is the same height as display style: ${Rn(A)}`),c.pageInformation.iAdInfo.apply(e,n),null===(h=c.pageInformation.iAdInfo)||void 0===h||h.setTemplateType(I.style)
let S=hl(e,n,a,BY,d)
if(S=En(S,I,t,T),"TEXT"===I.style){const t=W(n,kg)
t!==UF&&(S.searchAd.advertisingText=Pe(e,n,t===P$?sM:t)),m.displaysScreenshots=!1}i(S)&&(m.lockups.push(S),ju(c.locationTracker),T=!1)}if(Bu(c.locationTracker),i(m.lockups)){const n=t[0]
c.pageInformation.iAdInfo.apply(e,n),ju(c.locationTracker)}return A?null===(w=c.pageInformation.iAdInfo)||void 0===w||w.setTemplateType(A.style):null===(g=c.pageInformation.iAdInfo)||void 0===g||g.setTemplateType(null),m.condensedBehavior=wF,{result:m,displayStyle:null==A?void 0:A.style}}(e,u,c,t,a,d,h)
w=n.result,g=n.displayStyle,i(w.lockups)&&f.push(w)}let m=!0
const y=c.filter(e=>e.type===q$).map(e=>e.id),v=go(e,new Set(y))
for(const[r,o]of c.entries()){if(!s(o.attributes)){p.push(...c.slice(r))
break}if(Ze(e,o,10750))continue
m&&i(null==w?void 0:w.lockups)&&Ln(u,w,o)
const l=Cp(e,o,n,v,a,t.requestDescriptor.isNetworkConstrained,t.requestDescriptor.searchEntity,h)
l&&(m&&i(w)&&i(w.lockups)&&_n(0,w,l,h,g),f.push(l),m=!1,ju(a.locationTracker))}return await async function(e,t){return await Uh.context("applyClientFilteringToIAPs",async()=>{const n={}
for(const e of t)if(e.resultType===Qx){const t=e.lockup
t.parent&&t.productIdentifier&&t.parent.bundleId?n[t.productIdentifier]=t.parent.bundleId:Uh.unexpectedNull(LF,y$,`required fields for ${t.adamId}`)}return 0===Object.keys(n).length?await Promise.resolve(t):await e.clientOrdering.visibilityForIAPs(n).then(e=>t.filter(t=>{if(t.resultType!==Qx)return!0
const n=t.lockup
return!(!n.productIdentifier||!e[n.productIdentifier])||n.isVisibleByDefault}))})}(e,f).then(e=>({builtSearchResults:e,deferredSearchResults:p}))}function _p(e,t,n,r){const o=new SY(t,t,null,r)
return o.spellCheckEnabled=!1,o.excludedTerms=[n],o.originatingTerm=n,o}function Lp(e,t){return t&&t.results?t.results.slice(0,t.maxPerPage):[]}function xp(e,t){let n=[]
if(t&&t.results&&(n=t.results.slice(t.maxPerPage,t.results.length)),o(n))return null
const r={...t}
return r.results=n,r}function Mp(e){return(0,Yh.isSome)(e)&&0!==e.length?`SearchResults.${e}.shelfId`:"SearchResults.shelfId"}function Np(e,t){const n=new yY
return s(t)&&(n.facets=Tp(e,t),n.pageFacets=Pp(e),n.selectedFacetOptions=Ip(e)),n.results=[],n}function Fp(e,t){const n=new vY([])
return s(t)&&(n.facets=Tp(e,t),n.pageFacets=Pp(e),n.selectedFacetOptions=Ip(e)),n}async function $p(e,t){return await Uh.context("searchResultsFromResponse",async()=>{var a
const c=null!==(a=e.fetchTimingMetricsBuilder)&&void 0!==a?a:new Fh.FetchTimingMetricsBuilder,l=await c.measureModelConstructionAsync(async()=>{const a=t.catalogResponse,c=t.requestMetadata,l=c.searchRequestUrl,u=t.sponsoredSearchRequestData,d=n(a,"results.guidedSearch"),f=function(e,t,n){var r,o,s,i,a,c,l
return{term:t.term,suggestedTerm:null===(o=null===(r=n.results)||void 0===r?void 0:r.spellCheck)||void 0===o?void 0:o.suggestedTerm,correctedTerm:null===(i=null===(s=n.results)||void 0===s?void 0:s.spellCheck)||void 0===i?void 0:i.correctedTerm,resultsTerm:null!==(l=null===(c=null===(a=n.results)||void 0===a?void 0:a.spellCheck)||void 0===c?void 0:c.correctedTerm)&&void 0!==l?l:t.term,originatingTerm:t.originatingTerm}}(0,c.requestDescriptor,a),p=(h=t.sponsoredSearchAdvertData)&&h.odmlSuccess
var h
const w={locationTracker:{rootPosition:0,locationStack:[]},pageInformation:Un(e,c.requestDescriptor,a,f,l,u,p,d)},g=e.featureFlags.isEnabled("shelves_2_0_search")||!0,m=g?new vY:new yY
!function(e,t,n,r,s){const a=n.requestDescriptor
$u(0,{pageInformation:s.pageInformation,locationTracker:s.locationTracker,targetType:pT},"")
const c=[]
if(i(r))for(const t of r){const n=vp(e,a,t,s)
n&&(c.push(n),ju(s.locationTracker))}if(o(c)&&n.requestDescriptor.searchEntity){const t=function(e,t,n){const r=t.searchEntity
if(!r)return null
const o=new i0(null,ok)
let s
switch(function(e,t,n,r,o){const s=qb,i=$O,a={targetId:r},c=Zu(e,r,i,{actionType:s,location:Nu(0,{pageInformation:null,locationTracker:o.locationTracker,targetType:i},r),searchTerm:n})
t.actionMetrics.addMetricsData(c)
const l=Ku(e,n,i,s,null,a)
t.actionMetrics.addMetricsData(l)}(e,o,t.term,r,n),r){case F$:s=e.loc.string("GUIDED_SEARCH_TOKEN_ENTITY_ARCADE")
break
case IF:s=e.loc.string("GUIDED_SEARCH_TOKEN_ENTITY_DEVELOPERS")
break
case Tx:s=e.loc.string("GUIDED_SEARCH_TOKEN_ENTITY_STORIES")
break
case W$:s=e.loc.string("GUIDED_SEARCH_TOKEN_ENTITY_APPLEWATCH")
break
default:ae(r)}const i=new r0(s,!0,s,o)
return un(0,i,$O,n),i}(e,n.requestDescriptor,s)
c.push(t),ju(s.locationTracker)}const l=function(e,t,n){var r
if(o(n))return null
const s=t.term,i=null!==(r=t.guidedSearchTokens)&&void 0!==r?r:[],a=[]
for(const e of n){const t=e.displayLabel,n=Array.from(i)
if(e.isSelected){const e=n.indexOf(t);-1!==e&&n.splice(e,1)}else n.push(t)
const r=new o0(s,n,e.finalTerm)
a.push(r)}return a}(0,n.requestDescriptor,r)
Bu(s.locationTracker),i(c)&&(t.guidedSearchTokens=c,t.guidedSearchQueries=l,function(e,t,n){const r=Uu(n.locationTracker)
t.guidedSearchTokensParentImpressionMetrics=new XB({impressionIndex:r,impressionType:pT,idType:JL,id:yT,name:"Search Revisions"})}(0,t,s),ju(s.locationTracker))}(e,m,c,null==d?void 0:d.facets,w)
const y={id:HR,kind:null,softwareType:null,targetType:pM,title:ex,pageInformation:w.pageInformation,locationTracker:w.locationTracker,idType:JL}
let v
g&&(v=new rH(ik),v.id=Mp(),v.isHorizontal=!1,nn(0,v,y),Fu(0,y,ex))
const A=function(e,t){return _(t.catalogResponse.results.search)}(0,t),T=function(e,t){return function(e,t,n){if(r(n))return t
const s=[],i=t.reduce((e,t)=>({...e,[t.id]:t}),{})
for(const t of n.adverts){const n=i[t.adamId]
if(o(n)){Dn(e,`[${t.adamId}] skipped - Data was not part of original response`)
continue}if(o(n.attributes)){Dn(e,`[${n.id}] skipped - Data is missing attributes`)
continue}const r=Ap(e,n,t)
s.push(r)}return s}(e,_(t.catalogResponse.results[fT]),t.sponsoredSearchAdvertData)}(e,t),P=function(e){return e.sponsoredSearchAdvertData.installedStates||{}}(t),I=await Dp(e,c,a.meta,w,A,T,P)
if(g){const e=m
v.items=I.builtSearchResults,e.resultsParentImpressionMetrics=v.impressionMetrics,e.shelves.push(v)}else{const e=m
e.results=I.builtSearchResults,function(e,t,n){const r=Uu(n.locationTracker)
t.resultsParentImpressionMetrics=new XB({impressionIndex:r,impressionType:pM,idType:JL,id:HR,name:ex})}(0,e,w)}return I.deferredSearchResults.length>0&&(m.nextPage=function(e,t,n,r,s){return o(t)?null:{results:t,maxPerPage:30,requestMetadata:n,metricsOptions:s,responseMetadata:null!=r?r:{},contentOffsetWithinResultsShelf:Uu(s.locationTracker)}}(0,I.deferredSearchResults,c,a.meta,w)),g&&Bu(y.locationTracker),m.message=function(e,t,n){const r=s(t.correctedTerm),o=s(t.suggestedTerm)
return $u(0,{pageInformation:n.pageInformation,locationTracker:n.locationTracker,targetType:m$},"spellCorrection"),r?function(e,t,n){const r=t.term,o=_p(0,r,t.resultsTerm,zb)
ad(e,o,j$,n.locationTracker)
const s=`<i>${t.correctedTerm}</i>`,i=e.loc.string("SEARCH_SHOWING_RESULTS_FOR_TEMPLATE").replace(sk,s),a=new Fj(new gB(i,oN),{}),c=e.loc.string("SEARCH_SEARCH_INSTEAD_FOR_TEMPLATE").replace(sk,r),l={}
l[`${c}`]=o
const u=new Fj(new gB(c),l)
return new CY(a,u,o)}(e,t,n):o?function(e,t,n){const r=t.suggestedTerm,o=_p(0,r,t.resultsTerm,Yb)
ad(e,o,j$,n.locationTracker)
const s=`<i>${r}</i>`,i=e.loc.string("SEARCH_DID_YOU_MEAN_TEMPLATE").replace(sk,s),a={}
a[`${r}`]=o,a[`${r}?`]=o
const c=new Fj(new gB(i,oN),a)
return new CY(c,null,o)}(e,t,n):(Bu(n.locationTracker),null)}(e,f,w),!o(c.requestDescriptor.searchEntity)||(m.facets=Tp(e,c.requestDescriptor.facets,t.categoriesFilterData),m.pageFacets=Pp(e,t.categoriesFilterData),m.selectedFacetOptions=i(t.requestMetadata.requestDescriptor.selectedFacetOptions)?t.requestMetadata.requestDescriptor.selectedFacetOptions:Ip(e)),m.isAutoPlayEnabled="tv"!==e.client.deviceType,m.isCondensedSearchLockupsEnabled=e.client.isPhone&&ln(e),m.transparencyLink=function(e,t,n){if(o(t))return null
const r={}
if(o(W(t,b$)))return null
const s=an(e,t,e.loc.string(dT),{targetType:m$,pageInformation:n.pageInformation,locationTracker:n.locationTracker})
r[`${e.loc.string(dT)}`]=Tl(e,t,s,e.host.clientIdentifier)
const i=new gB(e.loc.string("SEARCH_TRANSPARENCY_TEXT"),UN)
return new Fj(i,r)}(e,t.transparencyData,w),Fn(e,m,w.pageInformation),m.searchClearAction=Bp(e,kL,w.pageInformation,w.locationTracker,f.term),m.searchCancelAction=Bp(e,YD,w.pageInformation,w.locationTracker,f.term),m})
return l})}function Bp(e,t,n,r,o){const i=new RU
let a,c
switch(t){case YD:a=jI,c=YD
break
case kL:a="delete",c=kL}return function(e,t,n,r,o){const i={searchTerm:o,actionType:n.actionType}
n.actionDetails&&(i[MM]=n.actionDetails),n.actionContext&&(i[iv]=n.actionContext),o&&(i[_F]=o),s(n.softwareType)&&(i[z_]=n.softwareType),n.mercuryMetricsData&&Object.assign(i,n.mercuryMetricsData)
const a=Zu(e,n.id,null!=r?r:Iu(0,n),i)
t.actionMetrics.addMetricsData(a)}(e,i,{targetType:j$,id:c,idType:void 0,actionType:a,pageInformation:n,locationTracker:r},j$,o),i}async function Up(e,t){const n=function(e){return e.bag.mediaAPISearchHintsEnabled&&Pi(e,e.bag.mediaAPISearchHintsRolloutRate)}(e)
return function(e,t,n,r){return Uh.context("searchHintsFromApiResponse",()=>{var o,s,i,a
const c={targetType:my,pageInformation:Bn(0,0,n.hintsRequestUrl),locationTracker:{rootPosition:0,locationStack:[]}}
let l=null;(null===(o=n.userTypedTerm)||void 0===o?void 0:o.length)&&(l=new SY(n.userTypedTerm,n.userTypedTerm,null,Jb),l.spellCheckEnabled=!0,l.prefixTerm=t,cn(0,l,c),ad(e,l,c.targetType,c.locationTracker,c.pageInformation),ju(c.locationTracker))
const u=null!==(i=null===(s=n.rawHints)||void 0===s?void 0:s.map(n=>function(e,t,n,r,o){var s,i
const a=function(e,t,n,r,o){if(!t)return n
switch(r){case q$:return o
case RN:return IF
case M$:return Tx
default:return null}}(0,o,t.hintsEntity,t.entity,t.context),c=new SY(null!==(s=t.displayTerm)&&void 0!==s?s:"",null!==(i=t.searchTerm)&&void 0!==i?i:"",null,H_,null!=a?a:void 0)
return c.spellCheckEnabled=!0,c.prefixTerm=n,cn(0,c,r),ad(e,c,r.targetType,r.locationTracker,r.pageInformation),ju(r.locationTracker),c}(e,n,t,c,r)))&&void 0!==i?i:[]
null!=l&&u.unshift(l)
const d=new bY(u,null!==(a=n.ghostHintsTerm)&&void 0!==a?a:null),f=Ku(e,t,"key",_v,n.hintsRequestUrl,{...at(c.pageInformation)})
return d.pageMetrics.pageFields=at(c.pageInformation),d.pageMetrics.addData(f,[Hh.PageInvocationPoint.pageEnter]),d.searchClearAction=Bp(e,kL,c.pageInformation,c.locationTracker,t),d.searchCancelAction=Bp(e,YD,c.pageInformation,c.locationTracker,t),d})}(e,t,await async function(e,t,n){if(n){const n=function(e,t){const n=new hH(e).forType(iR).withLimit(10).withSearchTerm(t).addingQuery(uT,"terms")
e.host.clientIdentifier===LB&&n.addingQuery(aM,MF)
const r=[]
return e.appleSilicon.isSupportEnabled&&r.push(tk),ar(e)&&r.push(s$),r.length>0&&n.enablingFeatures(r),n}(e,t)
return await Mr(e,n).then(t=>({hintsRequestUrl:Ge(e,n).toString(),userTypedTerm:d(t,cT),rawHints:c(t,"results.suggestions"),ghostHintsTerm:d(t,lT)}))}{const n=function(e,t){let n=nj.from(e.bag.searchHintsURL).param("caller",aE).param("v","4")
r(t)||(n=n.param(MR,t))
const o=e.host.clientIdentifier
n=o===_B?n.param(Rb,"watchSoftware").param(ek,mb):o===LB?n.param(ek,yb):n.param(ek,xx)
const s=[]
return e.appleSilicon.isSupportEnabled&&s.push(tk),ar(e)&&s.push(s$),s.length>0&&(n=n.param(EE,s.join(","))),n.build()}(e,t),o={url:n,signingStyle:IM}
return await async function(e,t){return await async function(e,t,n){const o=await e.network.fetch(t)
if(!o.ok)throw Error(`Bad Status code ${o.status} for ${t.url}`)
const i=Date.now(),a=n(o.body),c=Date.now()
if(a){const e=function(e,t,n){return r(e)||0===e.length?null:{...e[0],parseStartTime:t,parseEndTime:n}}(o.metrics,i,c)
s(e)&&(a[Tw.timingValues]=e)}return a[Tw.requestedUrl]=t.url.toString(),a}(e,t,n=>{if((0,Gh.isSome)(n))return e.plist.parse(n)
throw new Error(`Could not fetch Plist, response body was not defined for ${t.url}`)})}(e,o).then(e=>({hintsRequestUrl:n,userTypedTerm:d(e,cT),rawHints:c(e,H_),ghostHintsTerm:d(e,lT)}))}}(e,t,n),n)}function Gp(e,t,n,r,s){const i=function(e,t,n,r,s){if(o(s))return[]
const i=[]
for(const[a,c]of s.entries()){const s=Vp(e,c,a,t,n,r)
o(s)||(i.push(s),ju(n))}return i}(e,n,r,t.itemDisplayStyle,s),a=new WU
a.title=e.loc.string("Action.ClearSearches"),function(e,t){const n=Zu(e,"Clear Searches",j$,{actionType:"confirm"})
t.actionMetrics.addMetricsData(n)}(e,a)
const c=new PU([a])
c.title=e.loc.string("Sheet.ClearSearches.Title"),c.message=e.loc.string("Sheet.ClearSearches.Message"),c.destructiveActionIndex=0,c.isCancelable=!0
const l=new iU([c])
l.title=e.loc.string("Action.Clear")
const u="word_cloud"===(f=t.shelfDisplayStyle).layout?ST:2===f.layoutSize?lR:KD,d=new rH(u)
var f
return d.id=IT,d.presentationHints={isWidthConstrained:!0},d.header={title:t.title,accessoryAction:l},d.contentType===ST&&(d.isHorizontal=!0,d.rowsPerColumn=t.shelfDisplayStyle.layoutSize),d.contentsMetadata={type:"searchFocusTwoColumnList",numberOfColumns:i.length>1?t.shelfDisplayStyle.layoutSize:1},d.items=i,d.isHidden=o(i),d.refreshUrl=function(e){return`${YU}:/${TG}/${QU}/?${lV}=true&${bV}=${function(e){return encodeURIComponent(JSON.stringify(e))}(e)}`}(t),d}function Vp(e,t,n,r,o,s){const i=t.term,a=t.entity,c=Yp(e,function(e,t,n){if((0,Gh.isNothing)(n))return t
let r
return n===IF?r="Search.ResultsTitle.InDevelopers":n===Tx?r="Search.ResultsTitle.InStories":n===W$?r="Search.ResultsTitle.InWatch":n===F$&&(r="Search.ResultsTitle.InArcade"),(0,Gh.isNothing)(r)?t:e.loc.string(r).replace("@@search_term@@",t)}(e,i,a),i,a,o,Wb,r,s)
return(0,Gh.isNothing)(c)?null:(c.id=t.id,nn(0,c,{targetType:m$,pageInformation:r,locationTracker:o,kind:m$,softwareType:null,title:t.term,hintsEntity:t.entity,id:`${n}`,idType:XF}),c)}function jp(e){switch(lf(e)){case KD:return 3
case lR:return 4
case gk:return 10
default:return null}}function Hp(e,t,n){var r
const s=t.data
if(o(s))return
let i=0
const a=cf(e)&&(0,Gh.isSome)(n.pageType)
for(const c of s){if(o(c))continue
if(a){const e=p(c,dN),t=Wp(null==e?void 0:e.category)
if((0,Gh.isSome)(t)&&t!==n.pageType)continue}const s=Kp(e,n,i,t.meta||null);(0,Gh.isSome)(s)&&(n.shelves.push(s),ju(n.metricsLocationTracker))
const l=W(c,"contentKind"),u=cp(0,c,l),d=Qp(0,c,u,n,l)
Fu(0,d.metricsOptions,null!==(r=u.title)&&void 0!==r?r:"")
const f=qp(e,c,n,d,u,l)
Bu(n.metricsLocationTracker),o(f)||(nn(0,f,d.metricsOptions),n.shelves.push(f),i+=1,ju(n.metricsLocationTracker))}}function Wp(e){switch(e){case WR:return Cw.Landing
case"search-focus":return Cw.Focus
default:return}}function qp(e,t,n,c,l,u){switch(u){case Xh.Suggestion:return n.pageType===Cw.Focus?function(e,t,n,r,s){var i,a,c
const l=se(t,V$)
if((0,Gh.isNothing)(l))return null
const u=[],d=new rH(KD)
d.isHorizontal=!1,d.title=r.title,d.presentationHints={isWidthConstrained:!0}
for(const[t,s]of l.entries()){const l=W(s,_F)
if((0,Gh.isNothing)(l)||0===l.length)continue
const d=null!==(i=W(s,hk))&&void 0!==i?i:l,f=Yp(e,null!=d?d:"",null!=l?l:"",void 0,n.metricsLocationTracker,B_,n.metricsPageInformation,null!==(a=r.searchLandingItemDisplayStyle)&&void 0!==a?a:void 0);(0,Gh.isNothing)(f)||o(f)||(nn(0,f,{targetType:m$,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,kind:m$,softwareType:null,title:null!==(c=f.title)&&void 0!==c?c:"",id:`${t}`,idType:XF}),u.push(f),ju(n.metricsLocationTracker))}return o(u)?null:(d.items=u,d)}(e,t,n,l):function(e,t,n,r,s){var i
const c=se(t,V$),l=[],u=new rH(CF)
u.isHorizontal=!1,u.title=r.title,u.presentationHints={isWidthConstrained:!0}
for(const[t,s]of c.entries()){const i={targetType:m$,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},a=zp(e,s,n,r)
nn(0,a.action,{...i,kind:m$,softwareType:null,title:a.action.title,id:`${t}`,idType:XF}),o(a)||(l.push(a),ju(n.metricsLocationTracker))}return o(l)?null:(u.items=l,a(null===(i=r.displayStyle)||void 0===i?void 0:i.layoutSize)?u.contentsMetadata={type:bD,numberOfColumns:r.displayStyle.layoutSize}:(e.client.isPhone||e.client.isPad)&&(u.contentsMetadata={type:bD,numberOfColumns:l.length>=6?2:1}),u)}(e,t,n,l)
case Xh.CategoriesAndCharts:return wp(e,t,!1,l,0,c)
case Xh.Apps:return function(e,t,n,o,a){const c=[]
let l=!1,u=function(e){const t=ne(e,V$)
return null==t?void 0:t.data}(t)
const d=new rH(a.shelfStyle)
if(d.isHorizontal=!1,d.title=o.title,d.shouldFilterApps=!1,d.filteringExcludedItems=a.filteringExcludedItems,i(u)){const t=function(e,t,n){const o=sa(t.adStitcher,n.adPositionInfo)
if(r(o))return null
const i=o.data
try{const r=Zp(e,i,t,n)
return s(r)?n.filteringExcludedItems=[i.id]:Ao(e,t.adIncidentRecorder,i),r}catch(n){return Dn(e,`Failed to create SLP ad lockup: ${n}`),Ao(e,t.adIncidentRecorder,i),null}}(e,n,a)
t&&t instanceof Tj&&(l=!0,c.push(t),ju(n.metricsLocationTracker),u=u.filter(e=>e.id!==t.adamId))}const f=(0,Gh.isSome)(o.displayCount)
for(const t of u){if(t.type===O$)return null
if(r(t.attributes))continue
if(Ze(e,t,15358))continue
const o=Zp(e,t,n,a)
o&&(c.push(o),ju(n.metricsLocationTracker))}if(f){const e=o.displayCount
d.items=c.slice(0,e)}else d.items=c
if(f){const r=new rH(a.shelfStyle)
r.items=l?c.splice(1,c.length-1):c
const s=new cH([r])
s.title=d.title
const i=new nU($$)
i.pageUrl=o.seeAllLink,i.title=e.loc.string(XN),i.pageData=s,d.seeAllAction=i,sd(e,i,i.pageUrl,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker}),Fn(e,s,$n(0,t.id))}return d}(e,t,n,l,c)
case Xh.EditorialCollection:return null
default:return function(e,t,n,r,o){if("search-recommendations-marker"!==t.type)return null
if(W(t,kD)===vT){const t=function(e){switch(lf(e)){case KD:case lR:return"grid"
case gk:return"word_cloud"
default:return null}}(e);(0,Gh.isSome)(t)&&(o.displayStyle.layout=t)
const r=function(e){switch(lf(e)){case KD:return 1
case lR:return 2
case gk:return 1
default:return null}}(e);(0,Gh.isSome)(r)&&(o.displayStyle.layoutSize=r)
const s=jp(e)
return(0,Gh.isSome)(s)&&(o.displayCount=s),function(e,t,n){return Gp(e,new u0(n.title,n.displayCount,n.displayStyle,n.searchLandingItemDisplayStyle),t.metricsPageInformation,t.metricsLocationTracker,t.searchHistory)}(e,n,o)}return null}(e,t,n,0,l)}}function zp(e,t,n,r){var o,s
const i=W(t,_F)
if((0,Gh.isNothing)(i)||0===i.length)return null
const a=null!==(o=W(t,hk))&&void 0!==o?o:i,c=new SY(a,i,null,B_,void 0)
return c.artwork=Jp(null!==(s=r.searchLandingItemDisplayStyle)&&void 0!==s?s:void 0,e),ad(e,c,j$,n.metricsLocationTracker),(0,Gh.isSome)(c)?new DU(c):null}function Yp(e,t,n,r,s,i,a,c){if(o(n))return null
const l=new SY(t,n,null,i,null!=r?r:void 0,[])
return l.artwork=Jp(c,e),ad(e,l,j$,s,a),l}function Jp(e,t){var n
return(null==e?void 0:e.iconKind)===nw.Symbol&&(null===(n=null==e?void 0:e.iconKind)||void 0===n?void 0:n.length)?nt(t,`systemimage://${e.iconSymbol}`):t.client.isPhone?nt(t,wO):void 0}function Zp(e,t,n,i){if(o(t))return null
if(i.shelfStyle!==g$)return null
let a=null
!s(i.shelfBackground)||i.shelfBackground.type!==nF&&i.shelfBackground.type!==nO||(a=h$)
const c=al(e,t,{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:M(t),isAdvert:Io(0,t)},artworkUseCase:kl(0,i.shelfStyle),offerStyle:a,canDisplayArcadeOfferButton:vu(0,i.shelfStyle),isContainedInPreorderExclusiveShelf:!1,shouldHideArcadeHeader:!1})
return r(c)||!c.isValid()?null:c}function Kp(e,t,n,o){var s
const i=sa(t.adStitcher,{shelfIdentifier:HZ,slot:n})
if(r(i))return null
const a=i.data
try{switch(null===(s=null==o?void 0:o.adDisplayStyle)||void 0===s?void 0:s.format){case pb:return function(e,t,n){var r,o
const s=new rH(dk)
s.isHorizontal=!1
const i=an(e,t,d(t.attributes.name),{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,targetType:BL,recoMetricsData:M(t),isAdvert:Io(0,t)})
i.kind=fk,i.pageInformation.iAdInfo.apply(e,t)
const a={offerEnvironment:"dark",offerStyle:"white",metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:M(t),isAdvert:Io(0,t),disableFastImpressionsForAds:!0},artworkUseCase:kl(0,dk),canDisplayArcadeOfferButton:vu(0,dk)},c={showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}}
let l=hl(e,t,a,c,null,!1)
const u=l.screenshots[0],f=[AT,"U","I",(null!==(r=null==u?void 0:u.artwork)&&void 0!==r?r:[]).length].join("")
n.metricsPageInformation.iAdInfo.setTemplateType(f)
const p=_l(e,t,{useCase:0,withJoeColorPlaceholder:!0})
l=hl(e,t,a,c,null,!1)
const h=p.backgroundColor,w=p.textColor,g=new dW(l,[u],!0,w,h,null!==(o=e.bag.todayAdMediumLockupScreenshotsRiverSpeed)&&void 0!==o?o:8)
return on(0,g,i,i.pageInformation.iAdInfo),g.clickAction=yl(e,t,i,null),s.items=[g],s}(e,a,t)
case"condensed":return function(e,t,n){var r
const o=new rH(pk)
o.isHorizontal=!1
const s=an(e,t,d(t.attributes.name),{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,targetType:BL,recoMetricsData:M(t),isAdvert:Io(0,t)})
s.kind=fk,s.pageInformation.iAdInfo.apply(e,t)
const i={offerEnvironment:"dark",offerStyle:"white",metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:M(t),isAdvert:Io(0,t),disableFastImpressionsForAds:!0},artworkUseCase:kl(0,pk),canDisplayArcadeOfferButton:vu(0,pk)}
null===(r=n.metricsPageInformation.iAdInfo)||void 0===r||r.setTemplateType(bb)
const a=hl(e,t,i,{showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}},null,!1),c=new fW(a,a.icon)
return on(0,c,s,s.pageInformation.iAdInfo),o.items=[c],o}(e,a,t)
default:return Ao(e,t.adIncidentRecorder,a),null}}catch(n){return Dn(e,`Failed to create SLP ad shelf: ${n}`),Ao(e,t.adIncidentRecorder,a),null}}function Qp(e,t,n,r,o=null){const s=lp(0,t,n,r)
return o===Xh.Apps?{...s,shelfStyle:g$,adPositionInfo:jZ}:s}async function Xp(e,t){const n=new Fh.FetchTimingMetricsBuilder,r=e.addingFetchTimingMetricsBuilder(n),o=await uf(r,t)
return null===o?Fp(e,t.facets):await async function(e,t){return await $p(e,t)}(r,o)}async function eh(e,t){return await async function(e,t){return await Uh.context("paginatedSearchResultsPageWithToken",async()=>{const n=Lp(0,t),r=xp(0,t)
if(0===n.length)return await Promise.resolve(Fp(e))
const o={}
for(const e of n){const t=`${e.id}_${e.type}`
o[t]=e}return await df(e,n).then(async n=>{var i
const a=_(n)
for(const e of a){const t=`${e.id}_${e.type}`,n=null===(i=o[t])||void 0===i?void 0:i.meta
s(n)&&s(e.meta)?e.meta={...n,...e.meta}:s(n)&&(e.meta=n)}const c={id:HR,kind:null,softwareType:null,targetType:pM,title:ex,pageInformation:t.metricsOptions.pageInformation,locationTracker:t.metricsOptions.locationTracker,idType:JL},l=new rH(ik)
return l.id=Mp(),l.isHorizontal=!1,nn(0,l,c),Fu(0,c,ex),Vu(c.locationTracker,t.contentOffsetWithinResultsShelf),await Dp(e,t.requestMetadata,t.responseMetadata,t.metricsOptions,a).then(n=>{l.items=n.builtSearchResults
const o=new vY([l])
return s(r)&&(r.contentOffsetWithinResultsShelf=Uu(c.locationTracker),o.nextPage=r),o.isCondensedSearchLockupsEnabled=e.client.isPhone&&ln(e),o.resultsParentImpressionMetrics=l.impressionMetrics,Bu(t.metricsOptions.locationTracker),o.searchClearAction=Bp(e,kL,t.metricsOptions.pageInformation,t.metricsOptions.locationTracker,t.requestMetadata.requestDescriptor.term),o.searchCancelAction=Bp(e,YD,t.metricsOptions.pageInformation,t.metricsOptions.locationTracker,t.requestMetadata.requestDescriptor.term),o})})})}(e,t)}function th(e){return E(e)}function nh(e){return h0}function rh(e,t,n){t.includingAdditionalPlatforms(th(e)).includingAttributes(nh()).includingScopedAttributes(hN,[Px]).includingScopedRelationships(M$,[PF,wR]).includingScopedRelationships(hN,[wR]).enablingFeature("editorialItemGroups").usingCustomAttributes(De(e)).includingRelationshipsForUpsell(!0),n&&(t.includingAssociateKeys(hN,[XD,QM]),t.includingAssociateKeys(M$,[QM])),ar(e)&&(t.enablingFeature(s$),t.addingQuery(dN,OD),t.includingScopedRelationships(O$,[C$]),t.includingScopedAttributes(O$,[P$,EN,TN])),dn(e,L$)&&t.enablingFeature("adSupport"),e.props.enabled(hS)&&t.includingAttributes([PL]),e.props.enabled(Ok)&&t.enablingFeature("heroStyles"),t.includingAttributes([TL])}async function oh(e,t){const n=e.required(gQ),a=t.url===FT,l=-1!==t.url.indexOf(wG)
if(a)return await n.fetchPage(e,t.url,VH)
if(l){const r=nj.from(t.url)
return r.param(FG,qF),await n.fetchPage(e,r.build(),VH)}{const n=function(e){return new hH(e).forType(L$).withSparseCount(1).withSparseLimit(2)}(e)
rh(e,n,!0)
const a=new Ew.FetchTimingMetricsBuilder,l=e.addingFetchTimingMetricsBuilder(a),u=(0,Yh.isSome)(t.experimentIdHeader)?{"X-Apple-User-Experiment-Ids":t.experimentIdHeader}:void 0,f=Mr(l,n,{headers:u})
f.then(t=>{dn(e,L$)&&function(e,t){const n=pn(e,t,!0)
r(n)||(e.ads.setTimeoutForCurrentOnDeviceAdFetch(t,n),function(e,t,n){e.props.enabled(JT)&&e.timeoutManager.setTimeout(t,n)}(e,n,KX))}(e,L$),ca(e,e.user.dsid,t)})
const p=new WZ(f),h=function(e,t){const n={}
if(i(t)){const r=new hH(e).withIdsOfType(t,M$).includingAdditionalPlatforms(th(e)).includingAttributes(nh())
n[Ow.OnboardingCards]=new WZ(Mr(e,r,{}).catch(()=>{}),!1)}return dn(e,L$)&&(n[Ow.Ads]=new WZ(ap(e,L$).catch(()=>null),!1)),function(e){const t=wo(e),n=e.props.enabled("todayTabArcadePersonalization"),r=Pi(e,e.bag.todayTabArcadePersonalizationRate)
return t&&n&&r}(e)&&(n[Ow.ODP]=new WZ(async function(e,t){return await async function(e,t,n,r){if(e.props.enabled(JT)){const n=[t,e.timeoutManager.makePromise(r,void 0)]
return await Promise.race(n).then(e=>e)}return await t}(e,async function(e){try{const t=await async function(e,t){if(o(t.user.dsid)){const e=`${QX}: User is currently not signed in.`
throw Uh.unexpectedType(RF,e,null),new Error(e)}try{const n=c((await t.onDeviceRecommendationsManager.performRequest({type:"fetchUseCases",tab:e,dsId:t.user.dsid})).useCases)
if(o(n)){const t=`${QX}: ODP returned no use cases for tab: ${e}`
throw Uh.unexpectedType(RF,t,null),new Error(t)}return n}catch(t){const n=`${QX}: Failed to fetch ODP use cases for tab: ${e}, with error: ${t}`
throw Uh.unexpectedType(RF,n,null),new Error(n)}}(L$,e),n=await Promise.all(t.map(async t=>{const n=await async function(e,t){if(o(t.user.dsid))throw new Error(`${QX}: User is currently not signed in.`)
try{return await t.onDeviceRecommendationsManager.performRequest({type:"fetchTodayRecommendation",dsId:t.user.dsid,useCase:e,timeout:.1})}catch(t){const n=`${QX}: Failed to perform ODP Today recommendation for useCase: ${e}, with error: ${t}`
throw Uh.unexpectedType(RF,n,null),new Error(n)}}(t,e),s=await async function(e,t){const n=c(t[oA])
if(o(n)){const t=`${QX}: ODP returned no candidates for useCase: ${e}`
throw Uh.unexpectedType(RF,t,null),new Error(t)}const s=m(t[CM])
return{candidates:n.map(e=>function(e){const t=d(e.id),n=d(e.type)
if(r(t))return
let o,s=[]
switch(n){case hC:s=c(e.candidates).map(e=>d(e.id)).filter(e=>(0,Yh.isSome)(e)),o=hN
break
case sx:o=M$
break
default:return}let a=[]
if(a.push({id:t,type:o}),i(s)){const e=s.map(e=>({id:e,type:M$}))
a=a.concat(e)}return new t0(t,o,s,a)}(e)),metrics:s}}(t,n),a=s.metrics,l=s.candidates[0]
return await async function(e,t,n,r){const o=new hH(r,t.data)
Kr(r,o)
try{const s=await Mr(r,o)
return new e0(e,[t],n,s)}catch(e){const n=`${QX}: Failed to fetch Media API data for: ${t.data}, with error: ${e}`
throw Uh.unexpectedType(RF,n,null),new Error(n)}}(t,l,a,e)}))
return new XX(n)}catch(e){return}}(e),0,KX)}(e).catch(()=>{}),!0)),n}(e,t.onboardingCardIds),w=await da(0,p,h)
if(s(w.primaryPageDataFetchFailureReason))throw w.primaryPageDataFetchFailureReason
if(s(w.requiredAdditionalDataFailureReason))throw w.requiredAdditionalDataFailureReason
return a.measureModelConstruction(()=>{var t,n
const r=_(w.additionalData[Ow.OnboardingCards]),s=w.additionalData[Ow.Ads],i=w.additionalData[Ow.ODP],a=function(e,t,n,r,s){const i=[]
let a=o(r)
const l=Do(e,t)
let u=0
for(const s of t){if(o(s.contents))continue
const t=ho(e,L$,s.contents,!0,l)
s.contents=t.personalizedData,s.onDevicePersonalizationProcessingType=t.processingType
let f=!0
const p={label:s.label,title:s.title,meta:s.meta,date:s.date,onDevicePersonalizationProcessingType:s.onDevicePersonalizationProcessingType,isTodayForAppsModule:L(s)}
if(!a){for(const e of r)i.push({type:Pw.EditorialItem,data:e,isDataHydrated:J(e),isFirstItemInModule:f,moduleMetadata:{...p},containedAdSlots:[u]})
f=!1,a=!0,u+=1}for(let t of s.contents){const r=d(t,"meta.personalizationData.onDeviceUseCase")
switch(t.type){case M$:if((0,Yh.isSome)(r)){const e=null==n?void 0:n.storyData(r);(0,Yh.isSome)(e)&&(t=e)}i.push({type:Pw.EditorialItem,data:t,isDataHydrated:J(t),isFirstItemInModule:f,moduleMetadata:{...p},containedAdSlots:[u]}),f=!1,u+=1
break
case hN:const a=c(t,$T)
if(o(a))continue
let d
if((0,Yh.isSome)(r)&&(d=null==n?void 0:n.storyGroupData(r)),(0,Yh.isSome)(d))t=d
else{const n=ho(e,L$,a,!0,l)
t.meta.associations[XD].data=n.personalizedData,s.onDevicePersonalizationProcessingType=n.processingType}i.push({type:Pw.EditorialItemGroup,data:t,isDataHydrated:J(t),isFirstItemInModule:f,moduleMetadata:{...p},containedAdSlots:Array.from({length:a.length},(e,t)=>t+u)}),f=!1,u+=a.length}}}return i}(e,null!==(n=null===(t=w.primaryPageData.results)||void 0===t?void 0:t.data)&&void 0!==n?n:[],i,r)
return sh(l,a,w.primaryPageData,s)})}}function sh(e,t,n,r){return Uh.context(KM,()=>{if(o(t))return null
const s=function(e,t,n,r){var o,s,a
const c=Mn(e,"Today",L$,n,null,null!==(o=wn(e,L$,r,t))&&void 0!==o?o:Yu(e,L$,n,null===(s=null==r?void 0:r.onDeviceAd)||void 0===s?void 0:s.positionInfo,t)),l=mo(e)
c.recoMetricsData=xu(c.recoMetricsData,null,l)
const u=new qW(t,c,{rootPosition:0,locationStack:[]},vr(n))
if(dn(e,L$)){const t=vn(e,L$);(0,Yh.isSome)(t)&&(u.eligibleAdLocations=t.map(e=>e.slot))
const n=yo(0,c.iAdInfo)
if(To(e,n,r),u.adIncidentRecorder=n,(0,Yh.isNothing)(null==r?void 0:r.failureReason)){u.adData=D(null==r?void 0:r.mediaResponse)
const e=null===(a=null==r?void 0:r.onDeviceAd)||void 0===a?void 0:a.positionInfo
if(i(e)){const t=e.slot-1
u.adLocation=t}}}return u}(e,t,n,r),a=ih(e,s)
return a.shelves.splice(0,0,ba(0,"todayPageHeader")),a})}function ih(e,t){const n=[],r=function(e,t){switch(e.client.buildType){case OL:case Sx:const e=new nj
e.protocol=JU,e.host=Jx,e.pathname=`/${wG}`
const n=[]
for(const e of t)switch(e.type){case Pw.EditorialItem:n.push(e.data.id)
break
case Pw.EditorialItemGroup:const t=c(e.data.meta,Rk)
n.push(`${e.data.id}:[${t.map(e=>e.id).join(",")}]`)}return e.param(xG,n.join(",")),e.param(BG,qF),decodeURIComponent(e.build())
default:return null}}(e,t.remainingContent)
let o=Ro(t.remainingContent)
for(;o;){const r=t.remainingContent.shift()
if((0,Yh.isNothing)(r)){o=!1
break}const s=Go(e,t);(0,Yh.isSome)(s)&&n.push(s),t.currentTodayItem=r
let i=null
switch(r.type){case Pw.EditorialItem:i=$o(e,r,t)
break
case Pw.EditorialItemGroup:i=Bo(e,r,t)}t.currentTodayItem=void 0,(0,Yh.isSome)(i)&&n.push(i)
const a=Go(e,t);(0,Yh.isSome)(a)&&n.push(a),o=Ro(t.remainingContent)}const a=new VH(n),l=e.loc.string("PAGE_TITLE_TODAY")
return a.title=l,a.tabTitle=l,a.titleDetail=function(e){const t=new Date,n=e.loc.string("Today.ShelfTitle.DateFormat")
return e.loc.formatDate(n,t)}(e),a.shortTitleDetail=function(e){const t=new Date
return e.loc.formatDate("MMM d",t)}(e),a.feedPreviewUrl=r,i(t.remainingContent)?(t.pageHasDisplayedContent=t.pageHasDisplayedContent||n.some(e=>{i(e.items)}),a.nextPage=t):function(e,t,n){const r=[],o=Ia(e)
s(o)&&r.push(o)
const i=e.bag.termsAndConditionsURL
if(s(i)){const t=Sa(e,i)
r.push(t)}return r}(e,t.pageInformation,t.locationTracker).forEach(e=>{a.shelves.push(e)}),dn(e,L$)&&(a.adIncidents=vo(0,t.adIncidentRecorder)),Fn(e,a,t.pageInformation),a}async function ah(e,t){const n=t.pageHasDisplayedContent?6:12
let r=!0,o=0,s=[]
for(;r;){const e=t.remainingContent[o]
switch(e.type){case Pw.EditorialItem:s.push(e.data)
break
case Pw.EditorialItemGroup:s.push(e.data)
const t=c(e.data,$T)
s=[...s,...t]}o++,r=s.length<n&&o<t.remainingContent.length}const i=new Set(s.map(e=>e.id)),a=new hH(e,s,!0,[qS])
rh(e,a,!1)
const l=await Mr(e,a,{allowEmptyDataResponse:!0}),u={}
for(const e of l.data)u[e.id]=e
for(const e of t.remainingContent)ch(e,u)
return t.remainingContent=t.remainingContent.filter(e=>e.isDataHydrated||!i.has(e.data.id)),t}function ch(e,t){var n,r,o
switch(e.type){case Pw.EditorialItem:i(t[e.data.id])&&(e.data={...e.data,...t[e.data.id]}),e.isDataHydrated=J(e.data)
break
case Pw.EditorialItemGroup:i(t[e.data.id])&&(e.data={...e.data,attributes:null===(n=t[e.data.id])||void 0===n?void 0:n.attributes,relationships:null===(r=t[e.data.id])||void 0===r?void 0:r.relationships,meta:{...e.data.meta,...null===(o=t[e.data.id])||void 0===o?void 0:o.meta}}),e.isDataHydrated=J(e.data)}}function lh(e,t){if(s(t.iAdInfo)){const n=m(t.iAdInfo)
i(n)&&(t.iAdInfo=oQ.from(e,n))}}async function uh(e,t){const n=fh().map(e=>new oj(e)),s=new nj(t),i=n.find(e=>e.matches(s)).extractParameters(s),a=s.query[UG]||i[UG],c=s.query[qG]||i[qG]
let l=s.query[HG]
if(o(l)){const e=pa(0,c)
l=void 0!==e?`${c},${e}`:c}else l.includes(c)||(l+=`,${c}`)
const u=s.query[WG],d=new Fh.FetchTimingMetricsBuilder,f=e.addingFetchTimingMetricsBuilder(d),p=ha(f,a,l,u)
let h
return h=wa(e,l,a),await Promise.all([p,h]).then(([t,n])=>d.measureModelConstruction(()=>{const o=_r(e,n),s=r(o)?Or(a):Rr(o)
return ph(f,t,a,o,c,s)}))}async function dh(e,t){const n=Qe(0,t)
if(0===n.length)return await Promise.resolve(new y0(null,null,null,[]))
let r=new hH(e,n).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes(De(e))
return e.appleSilicon.isSupportEnabled&&(r=r.includingAdditionalPlatforms([sF,pF])),await Mr(e,r).then(n=>{const r=Xe(0,t)
return gh(e,n,t,r)})}function fh(e){return[{path:`/{apiVersion}/catalog/{countryCode}/${aG}`,query:[`${UG}`,`${TV}?`,`${HG}?`]},{path:`/{countryCode}/${aG}/{platform}/{chartType}/{genre}`,query:[`${qG}`]},{path:`/{countryCode}/${aG}/{platform}/{chart}/{genre}`,query:[`${HG}?`]},{path:`/{countryCode}/${aG}/{platform}`}]}function ph(e,t,n,o,s,i){return Uh.context("topChartsPageFromApiResponse",()=>{var a
const l=[]
if((0,Gh.isSome)(o))for(const t of o.categories)(0,Gh.isSome)(t.genreId)&&l.push(hh(e,t))
const u=function(e){return c(e,"results.apps").filter(e=>!r(e.data))}(t),f=u.map(r=>function(e,t,n,r,o){return Uh.context("segmentFromData",()=>{const{shortName:s,longName:i}=function(e,t,n){let r=d(t,"shortName"),o=d(t,z$)
if(2!==n)return{shortName:r,longName:o}
const s=e.client.isPad
switch(d(t,oM)){case"top-free":s?(r=e.loc.string("TopCharts.iPadGames.Free.ShortName"),o=e.loc.string("TopCharts.iPadGames.Free.LongName")):(r=e.loc.string("TopCharts.Games.Free.ShortName"),o=e.loc.string("TopCharts.Games.Free.LongName"))
break
case"top-paid":s?(r=e.loc.string("TopCharts.iPadGames.Paid.ShortName"),o=e.loc.string("TopCharts.iPadGames.Paid.LongName")):(r=e.loc.string("TopCharts.Games.Paid.ShortName"),o=e.loc.string("TopCharts.Games.Paid.LongName"))}return{shortName:r,longName:o}}(e,t,o),a=d(t,oM),c=Mn(e,"TopChartsPage",r,n,`${a} ${i}`),l={rootPosition:0,locationStack:[]},u=[]
let f=0
const p=[]
for(const n of t.data){const t=mh(e,f,n,c,l)
if(t){if(Ze(e,n,3070))continue
u.push(t),ju(l),f++}else p.push(n)}const h=[],w=new rH(g$)
w.items=u,e.featureFlags.isEnabled("shelves_2_0_top_charts"),w.title=i,h.push(w)
const g=new y0(s,i,a,h),m=function(e,t,n,r=null,o,s){return{remainingContent:t,maxPerPage:20,highestOrdinal:0,url:n,metricsPageInformation:o,metricsLocationTracker:s}}(0,p,void 0,t.next,c,l)
return m.metricsPageInformation=c,m.metricsLocationTracker=l,m.highestOrdinal=f,g.nextPage=m,Fn(e,g,c),g})}(e,r,t,n,i)).sort((e,t)=>e.chart.localeCompare(t.chart)),p=d(u,"0.href"),h=new nj(p),w=null!==(a=h.query[mF])&&void 0!==a?a:n,g=wh(w,h.query.ages,l),m=function(e,t){return t.every(e=>function(e){switch(e){case"top-trending-free":case"top-trending-paid":return!0
default:return!1}}(e.chart))?e.loc.string("PAGE_TITLE_TRENDING_CHARTS"):t.every(e=>function(e){switch(e){case"top-emerging-free":case"top-emerging-paid":return!0
default:return!1}}(e.chart))?e.loc.string("PAGE_TITLE_EMERGING_CHARTS"):e.loc.string("PAGE_TITLE_TOP_CHARTS")}(e,f),y=new A0(w,null==g?void 0:g.ageBandId,m,f,null==g?void 0:g.name,l),v=f.findIndex(e=>e.chart===s)
v>=0&&(y.initialSegmentIndex=v)
const A=e.fetchTimingMetricsBuilder
return(0,Gh.isSome)(A)&&A.decorate(y),y})}function hh(e,t){const n=function(e,t,n=null){let r=new hH(e).forType(C_).addingQuery(VE,q$).addingQuery(mF,t).includingMacOSCompatibleIOSAppsWhenSupported(!0)
return n&&(r=r.addingQuery(dL,n)),e.appleSilicon.isSupportEnabled&&(r=r.includingAdditionalPlatforms([sF,pF])),r}(e,t.genreId,t.ageBandId),r=t.children.map(t=>hh(e,t))
return new v0(t,Ge(e,n).toString(),r)}function wh(e,t,n){for(const r of n){if(t&&r.ageBandId===t||!t&&!r.ageBandId&&r.genreId===e)return r
const n=wh(e,t,r.children)
if(n)return n}return null}function gh(e,t,n,r){return Uh.context("topChartSegmentFromLookupResponse",()=>{const o=[]
let s=n.highestOrdinal
const i=_(t)
for(const t of i)Ze(e,t,3070)||(o.push(mh(e,s,t,n.metricsPageInformation,n.metricsLocationTracker)),ju(n.metricsLocationTracker),s++)
const a=[]
if(o.length>0){const e=new rH(g$)
e.items=o,a.push(e),r.highestOrdinal=s}const c=new y0(null,null,null,a)
return c.nextPage=r,c})}function mh(e,t,n,r,o){return Uh.context("lockupFromApiChartItem",()=>al(e,n,{ordinal:e.loc.decimal(t+1),metricsOptions:{pageInformation:r,locationTracker:o},artworkUseCase:1}))}function yh(e,t){const n=Do(e,[t])
if(s(t.contents)){const r=ho(e,"todayWidget",t.contents,!0,n)
t.contents=r.personalizedData}return t}function vh(e,t,n,r,i,a){const c=[]
let l=0,u=0,d=0
for(const a of t.contents){if(Z(a)){l++
continue}const t=se(a,bF),f=Sh(e,a,n,r),p=null===f?Ph(e,t):[],h=Ih(a),w=[null==f?void 0:f.backgroundColor,1===p.length&&null!==p[0]?p[0].backgroundColor:void 0,N("1C68E2")].find(e=>void 0!==e)
if(0===p.length&&null===f){u++
continue}const g=Ah(e,a,r)
let m=null,y=null,v=null
if(t.length>0&&t[0].type===O$){const e=W(t[0],$I)
if(o(e)){d++
continue}v=W(t[0],UI),m=new Date(e)
const n=W(t[0],BI)
y=s(n)?new Date(n):null}const A=is(a)
c.push(new b0(a.id,g,h,w,B(w),p,Th(0,a,n,g,i),A===_k,f,v,m,y))}return null!==a&&t.contents.length===l+u+d&&a(`All ${t.contents.length} cards in this ${r?"primary":"secondary"} module were filtered due to being unhydrated (${l}), missing artwork (${u}) or missing metadata (${d})`),c}function Ah(e,t,n){let r=W(t,ZF)
if(!n){const n=is(t)
switch(n){case fw.AppOfTheDay:case fw.GameOfTheDay:r=Qo(e,t,n,null)}}return r.replace(/\n/g," ")}function Th(e,t,n,r,s){let a
switch(n){case tL:a=0
break
case KT:a=1
break
case xk:a=2
break
default:a=-1}const c={widgetId:s,size:a,targetId:t.id,name:r},l=encodeURIComponent(JSON.stringify(c))
switch(Al(0,t)){case 4:const e=se(t,PF),n=i(e)&&1===e.length?e[0]:se(t,bF)[0],r=oe(n,C$)
if(o(r))break
return`${YU}:/${cG}/${LG}${r.id}?${LV}=${n.id}${DV}=true&${_V}=${l}`
case 3:const s=se(t,bF)[0]
return`${YU}:/${cG}/${LG}${s.id}?${DV}=true&${_V}=${l}`
case 1:return d(j(t,m$),b$)}return`${YU}:/${pG}/${LG}${t.id}?${DV}=true&${_V}=${l}`}function Ph(e,t){return t.map(t=>t.type===QF?null:El(e,function(e,t){let n
switch(xt(0,t)){case"com.apple.AppStore.BridgeStoreExtension":n=SS
break
case"com.apple.MobileSMS":n=bS
break
default:n=I$}return Ee(e,t,_e(e,t),n)}(e,t),{useCase:25,withJoeColorPlaceholder:!0})).filter(e=>null!==e)}function Ih(e){var t
const n=j(e,qN)
let r=null
i(n)&&(r=d(n,z$))
let o=null
const s=se(e,bF)
switch(s.length>0&&(o=W(s[0],z$)),W(e,vF)){case fw.AppOfTheDay:case fw.GameOfTheDay:return null!==(t=null!=o?o:r)&&void 0!==t?t:""
default:return null!=r?r:""}}function Sh(e,t,n,r,o){let s=null
is(t)===_k&&(s=function(e,t,n,r){let o=null,s=null
const i=["editorialVideo.storyCardMotion16x9.previewFrame","editorialVideo.storyCenteredMotion16x9.previewFrame","editorialVideo.storeFrontVideo4x3.previewFrame"]
for(const e of i)if(s=j(t,e),(0,Yh.isSome)(s))break
return s&&(o=El(e,s,{withJoeColorPlaceholder:!0,useCase:26}),r||(o.crop="sr")),o}(e,t,0,r))
const i=[{artworkKeyPath:Lk,crop:"sr"},{artworkKeyPath:dR,crop:"sr"}]
switch(is(t)){case fw.AppOfTheDay:case fw.GameOfTheDay:const e=n===tL?QT:"nr"
i.push({artworkKeyPath:fR,crop:r?e:"fn"})
break
case fw.Video:case fw.FullBleedImage:const t=n===tL?XT:eP
i.push({artworkKeyPath:TD,crop:r?t:"fn"})
break
case fw.AppEventCard:const o=n===tL?QT:"nr"
i.push({artworkKeyPath:pR,crop:r?o:"fn"})
break
default:const s=n===tL?XT:eP
i.push({artworkKeyPath:hR,crop:r?s:"fn"})}let a=null
for(const n of i)if(a=El(e,j(t,n.artworkKeyPath),{cropCode:n.crop,useCase:26,withJoeColorPlaceholder:!0}),(0,Yh.isSome)(a))break
return null!=a?a:s}async function bh(e,t){let n
switch(t.family){case 1:n=KT
break
case 2:n=xk
break
default:n=tL}let a=null
return typeof t.originalResponseHash!==JM&&null!==t.originalResponseHash&&""!==t.originalResponseHash&&typeof t.originalResponseDate!==JM&&null!==t.originalResponseDate&&""!==t.originalResponseDate&&(a={hash:t.originalResponseHash,creationDate:t.originalResponseDate}),await async function(e,t,n,a,c){return await new Promise((n,l)=>{if(!function(e,t,n,r){return!r||Pi(e,e.bag.todayWidgetLivePreviewRolloutRate)}(e,0,0,a))return void l("No live preview will be shown due to losing the todayWidgetLivePreviewRolloutRate lottery.")
const u=new C0,d=e=>l(e)
Mr(e,u.make(e)).then(a=>{const l=f(a,Tw.contentMaxAge),u=function(e,t){return r(e)||r(e.results)||o(e.results.data)?(t("Unable to create primary module; no results or data."),null):o(e.results.data[0].contents)?(t("Unable to create primary module; no contents."),null):e.results.data[0].contents.length===e.results.data[0].contents.filter(e=>Z(e)).length?(t("Unable to create primary module; none of the cards are hydrated."),null):{label:"",title:"",meta:{},contents:e.results.data[0].contents}}(a,d)
if(null===u)return
const p=function(e){const t={label:"",title:"",meta:{},contents:[]}
if(r(e)||r(e.results)||o(e.results.data))return t
const n=e.results.data.slice(1)
return 0===n.length?t:{label:"",title:"",meta:{},contents:n.map(e=>e.contents).reduce((e,t)=>e.concat(t))}}(a),h=function(t,n,r,o,s){const a=(c=JSON.stringify(t.contents.concat(n.contents).map(e=>e.id))+(null!==r?r.toString():""),e.cryptography.hash("sha256",c))
var c
return null!==s&&i(s.hash)&&i(s.creationDate)&&s.hash===a?s:{hash:a,creationDate:(new Date).toUTCString()}}(u,p,l,0,c),w=function(e,t,n,r){if(null!==t){const n=new Date(e.creationDate)
return n.setSeconds(n.getSeconds()+t),n}return function(e,t){const n=new Date,r=new Date
r.setHours(e),r.setMinutes(0)
const o=Math.floor(Math.random()*t*2)-t
return r.setTime(r.getTime()+60*o*1e3),r<n&&r.setDate(r.getDate()+1),r}(n,r)}(h,l,e.bag.todayWidgetInvalidationHour,e.bag.todayWidgetInvalidationJitterMinutes),g=yh(e,u),m=yh(e,p),y=function(e,t,n,i,a,c,l,u,d){if(r(t))return d("Unable to create a TodayWidgetContainer; primaryModule is null."),null
const f=vh(e,t,i,!0,u,d)
if(0===f.length)return null
const p=vh(e,n,i,!1,u,null),h=function(e,t,n,r,i,a){const c=qe(t),l=Ye(c,n),u={}
for(let e=0;e<r.length;e++){const t=e%r.length*2
u[r[e].storyId]=a===xk?i.slice(t,t+2):[]}const d=function(e,t,n){return function(e,r){const o=[],s=[]
return e.forEach(e=>{return void 0!==(r=e).eventStartDate&&null!==r.eventStartDate&&t<qe(r.eventStartDate)&&qe(r.eventStartDate)<=n?o.push(e):s.push(e)
var r}),[o,s]}(e)}(r,c,n),f=d[0]
let p=d[1]
const h=[...Array(l)].map(()=>[]),w=[...Array(l)].map((e,t)=>new Date(c.getTime()+60*t*60*1e3)),g=new Map
r.concat(i).forEach(t=>{if(s(t.eventStartDate)){const n=mr(t.eventBadgeKind,t.eventStartDate,t.eventEndDate)
g[t.storyId]=yr(e,n,t.eventStartDate,t.eventEndDate)}}),f.forEach(e=>{var t
for(let n=((Ye(c,e.eventStartDate)-1)%(t=r.length)+t)%t;n<h.length&&!(e.eventEndDate<=w[n]);n+=r.length)for(let t=0;t<r.length&&!(h.length<=n+t);t++)if(0===h[n+t].length){h[n+t].push(v(e))
for(const r of u[e.storyId])h[n+t].push(v(r))
break}})
for(let e=0;e<h.length;e++){if(h[e].length>0)continue
const t=w[e]
if(p=p.filter(e=>void 0===e.eventEndDate||null===e.eventEndDate||e.eventEndDate>t),0===p.length)break
const n=p.shift()
p.push(n),h[e].push(v(n))
for(const t of u[n.storyId])h[e].push(v(t))}return h.map((e,t)=>{const n=w[t],r=e.map(e=>{const n=g[e.storyId],r=function(e,t){if(o(t))return null
const n=t.filter(t=>null===t.displayFromDate||t.displayFromDate<=e)
return 0===n.length?null:n.pop()}(w[t],n)
return null!==r?(e.heading=r.displayText,e.eventStartDate=r.countdownToDate):e.eventStartDate=null,e})
return new S0(r,n)})}(e,new Date(c.creationDate),l,f,p,i)
return new I0(h,l,c.creationDate,c.hash)}(e,g,m,t,0,h,w,ZT,d)
null!==y&&n(y)}).catch(e=>{l(e)})})}(e,n,t.isSnapshot,t.isPreview,a)}function Ch(e){if(e.props.isNotEnabled("arcadeDownloadPacksGetAllUpliftExperiment"))return Dw.Control
const t=Oe(e,O0)
return(0,Gh.isNothing)(t)?Dw.LayoutB:t}var kh,Eh,Oh,Rh,Dh,_h,Lh,xh,Mh,Nh,Fh,$h,Bh,Uh,Gh,Vh,jh,Hh,Wh,qh,zh,Yh,Jh,Zh,Kh,Qh,Xh,ew,tw,nw,rw,ow,sw,iw,aw,cw,lw,uw,dw,fw,pw,hw,ww,gw,mw,yw,vw,Aw,Tw,Pw,Iw,Sw,bw,Cw,kw,Ew,Ow,Rw,Dw,_w,Lw={}
e.r(Lw),e.d(Lw,{downloadingOrdering:()=>PJ,downloadingOrderingCompact:()=>IJ,notPurchasedOrdering:()=>AJ,notPurchasedOrderingCompact:()=>TJ,notPurchasedSpotlightIndex:()=>mJ,purchasedOrdering:()=>yJ,purchasedOrderingCompact:()=>vJ,purchasedSpotlightIndex:()=>gJ}),kh={},e.r(kh),e.d(kh,{downloadingOrdering:()=>RJ,downloadingOrderingCompact:()=>DJ,notPurchasedOrdering:()=>EJ,notPurchasedOrderingCompact:()=>OJ,notPurchasedSpotlightIndex:()=>bJ,purchasedOrdering:()=>CJ,purchasedOrderingCompact:()=>kJ,purchasedSpotlightIndex:()=>SJ}),Eh={},e.r(Eh),e.d(Eh,{notPurchasedOrdering:()=>MJ,notPurchasedSpotlightIndex:()=>LJ,purchasedOrdering:()=>xJ,purchasedSpotlightIndex:()=>_J}),Oh={},e.r(Oh),e.d(Oh,{notPurchasedOrdering:()=>BJ,notPurchasedSpotlightIndex:()=>FJ,purchasedOrdering:()=>$J,purchasedSpotlightIndex:()=>NJ}),Rh={},e.r(Rh),e.d(Rh,{notPurchasedOrdering:()=>jJ,notPurchasedSpotlightIndex:()=>GJ,purchasedOrdering:()=>VJ,purchasedSpotlightIndex:()=>UJ}),Dh={},e.r(Dh),e.d(Dh,{notPurchasedOrdering:()=>zJ,notPurchasedSpotlightIndex:()=>WJ,purchasedOrdering:()=>qJ,purchasedSpotlightIndex:()=>HJ}),_h={},e.r(_h),e.d(_h,{notPurchasedOrdering:()=>KJ,notPurchasedSpotlightIndex:()=>JJ,purchasedOrdering:()=>ZJ,purchasedSpotlightIndex:()=>YJ}),Lh={},e.r(Lh),e.d(Lh,{notPurchasedOrdering:()=>tZ,notPurchasedSpotlightIndex:()=>XJ,purchasedOrdering:()=>eZ,purchasedSpotlightIndex:()=>QJ}),xh={},e.r(xh),e.d(xh,{notPurchasedOrdering:()=>sZ,notPurchasedSpotlightIndex:()=>rZ,purchasedOrdering:()=>oZ,purchasedSpotlightIndex:()=>nZ}),Mh=e(8706),Nh=e(9100),Fh=e(8836),$h=e(1222)
const xw=(0,(Bh=e(900)).makeMetatype)("app-store:storeMetrics"),Mw=(0,Bh.makeMetatype)("app-store:device"),Nw=(0,Bh.makeMetatype)("app-store:user"),Fw=(0,Bh.makeMetatype)("app-store:personalizationStore"),$w=(0,Bh.makeMetatype)("app-store:arcade"),Bw=(0,Bh.makeMetatype)("app-store:gameCenter"),Uw=(0,Bh.makeMetatype)("app-store:resilientDeepLinks"),Gw=(0,Bh.makeMetatype)("app-store:ads"),Vw=(0,Bh.makeMetatype)("app-store:onDeviceRecommendationsManager"),jw=(0,Bh.makeMetatype)("app-store:onDeviceSearchHistoryManager"),Hw=(0,Bh.makeMetatype)("app-store:featureFlags"),Ww=(0,Bh.makeMetatype)("app-store:mediaTokenService"),qw=(0,Bh.makeMetatype)("app-store:searchLanding"),zw=(0,Bh.makeMetatype)("app-store:searchFocus"),Yw=(0,Bh.makeMetatype)("app-store:adsLocalizer"),Jw=(0,Bh.makeMetatype)("app-store:appDistribution"),Zw=(0,Bh.makeMetatype)("app-store:timeoutManager"),Kw="TabChangeAction",Qw="expanded",Xw="askToBuy",eg="arcadeAskToBuy",tg="generic",ng="groupingLockup",rg="launchRepair",og="tapToRate",sg="lockupList",ig="continuation",ag="signup",cg="purchases",lg="donate",ug="is32bitOnly",dg="requires32bit",fg="is.workflow.my.app",pg="com.apple.mobileme.fmf1",hg="iPhone",wg="iPad",gg="com.apple.NanoCompass.watchkitapp",mg="com.apple.DeepBreathing",yg="com.apple.Depth",vg="com.apple.Mandrake",Ag="isIOSBinaryMacOSCompatible",Tg="deviceHasCapabilitiesIncludingCompatibilityCheck",Pg="ACTION_SETTINGS",Ig="shareSheet",Sg="systemimage://square.and.arrow.up",bg="Send Gift",Cg="initiate",kg="iad.format.text",Eg="advertDataMalformed",Og="mapiFetchFail",Rg="insufficientAssets",Dg="NOAD",_g="adsLocaleMetadata",Lg="enable_slp_medium_condensed_ad",xg="SHARE_APP_EVENT_SUBTITLE",Mg="lockupArtwork",Ng="j:mm",Fg="inAppEvent",$g="systemimage://bell.fill",Bg="contingentOffers",Ug="close",Gg="arcade-see-all-games-button",Vg="comingSoonApps",jg="marketingArtwork",Hg="seed",Wg="upsell",qg="filter[ageRating]",zg="filter[supportsGameController]",Yg="filter[isMultiplayer]",Jg="PAGE_FACETS_FILTERS_CONTROLLER_SUPPORT",Zg="PAGE_FACETS_FILTERS_COMING_SOON",Kg="PAGE_FACETS_SORT_BY_TITLE",Qg="controllerSupport",Xg="multiplayer",em="PAGE_FACETS_INCLUDE_TITLE",tm="000000",nm="ARCADE_SUBSCRIBE_PAGE_NOT_NOW",rm="displayBreakoutMaterial",om="material",sm="textGradient",im="plusLight",am="notificationSettings",cm="invalidateWidgetsOnFailure",lm="PageData",um="ProductBuilder",dm="fileSizeByDevice",fm="promotionalText",pm="backgroundAssetsInfo",hm="backgroundAssetsInfoWithOptional",wm="editorial-item-shelves",gm="past",mm="redownload",ym="textColor1",vm="impressionableAppIconFromData",Am="maritime_ui",Tm="appBinaryTraits",Pm="requiresRosetta",Im="iphone5",Sm="iphone6",bm="iphone6+",Cm="maxEssentialInstallSizeInBytes",km="maxDownloadSizeInBytes",Em="maxInstallSizeInBytes",Om="editorialArtwork.topShelf",Rm="editorialArtwork.contentLogoTrimmed",Dm="posterCardVideo16x9",_m="supportsArcade",Lm="systemimage://square.and.pencil",xm="userReviewId",Mm="systemimage://hand.thumbsup",Nm="systemimage://hand.thumbsdown",Fm="guid",$m="formBody",Bm="systemimage://exclamationmark.circle",Um="CONTROLLER_RECOMMENDED",Gm="above",Vm="prefersNonStandardBackButton",jm="DEVELOPER_WATCH",Hm="DEVELOPER_LATEST_RELEASE",Wm="DEVELOPER_BUNDLES",qm="hasApps",zm="hasGames",Ym="DEVELOPER_APPS_AND_GAMES",Jm="DEVELOPER_GAMES",Zm="DEVELOPER_APPS",Km="DEVELOPER_APPLE_ARCADE",Qm="textOnly",Xm="enrichedEditorialNotes.name",ey="enrichedEditorialNotes.tagline",ty="enrichedEditorialNotes.callToAction",ny="editorialNotes.callToAction",ry="shelf_id",oy="arcadeSeeAllGamesFooter",sy="footer",iy="ARCADE_PREORDER_COMING_SOON",ay="REPORT_A_PROBLEM",cy="HERO_CAROUSEL_OVERLAY_BUTTON_TITLE_GAME",ly="breakoutTall",uy="breakoutFullScreen",dy="renderGroupingPage",fy="noPersonalizationAvailable",py="groupingAppEvent",hy="arcade_category_bricks",wy="Browse Categories",gy="hasSeeAll",my="listItem",yy="achievement",vy="GameCenter.ContinuePlayingShelf.Title",Ay="videoCard",Ty="Achievements Hero",Py="locked",Iy="inprogress",Sy="completed",by="see-all-contents",Cy="contentGraphicTrimmed",ky="CategoryGrouping",Ey="smallBreakout",Oy="advertPressed",Ry="promotedContent",Dy="editorialContext",_y="contentRatingsBySystem.appsApple.name",Ly="userRating.ratingCount",xy="userRating.value",My="isVerifiedForAppleSiliconMac",Ny="genres",Fy="OfferButton.Title.Subscribe",$y="descending",By="editorialItemActionFromData",Uy="displaySubStyle",Gy="iad.lineItem",Vy="clientIdentifierOverride",jy="targetId",Hy="clientCorrelationKey",Wy="exit",qy="hasiAdData",zy="viewedInfo",Yy="viewedInfoDetailed",Jy="cookie",Zy="ownerDsid",Ky="pageExit",Qy="trampoline",Xy="trampolineContext",ev="widgetContext",tv="contingentItemId",nv="browserChoice",rv="BrowserChoice",ov="clip",sv="buttonName",iv="actionContext",av="See All",cv="selectedPageFacets",lv="Apps",uv="searchGhostHint",dv="didYouMean",fv="displaysArcadeUpsell",pv="franchise",hv="isOnboardingCard",wv="optimizationEntityId",gv="optimizationId",mv="iAdOdmlSuccess",yv="metadata",vv="iAdIsSpecifiedCreativeUsed",Av="APPSTORE_SEARCH_LANDING_PAGE",Tv="APPSTORE_SEARCH_RESULT_PAGE",Pv="APPSTORE_TODAY_TAB",Iv="APPSTORE_PRODUCT_PAGE",Sv="APPSTORE_PRODUCT_PAGE_DOWNLOAD",bv="iAdSlotId",Cv="iAdPageCustomId",kv="data.search.dataSetId",Ev="macSoftware",Ov="iosSoftware",Rv="siri",Dv="pending",_v="input",Lv="channelPartner",xv="eligibilityType",Mv="upsellScenario",Nv="modeType",Fv="FreeTrial",$v="PayUpFront",Bv="PayAsYouGo",Uv="test",Gv="update",Vv="rebuy=true",jv="OfferButton.FlowPreview.Get",Hv="OfferButton.FlowPreview.Preorder",Wv="{appName}",qv="TV_OFFER_ALERT_FOOTER_LINE_BREAK",zv="contentRatingsBySystem.appsApple.value",Yv="preorderedSubscribed",Jv="checkmark",Zv="preorderedNotSubscribed",Kv="preorderSubscribed",Qv="preorderNotSubscribed",Xv="INTRO_PRICE_OFFER_SUBTITLE",eA="Offer.InlineInAppPurchases",tA="OfferButton.ExternalPurchases.Subtitle",nA="meta.personalizationData.segId",rA="OnDeviceRecommendationsPageController",oA="candidates",sA="PRODUCT_PRIVACY_LEARN_MORE_TEMPLATE",iA="{developerName}",aA="<br><br>",cA="privacyPolicy",lA="PRODUCT_PRIVACY_DEFINITIONS_LINK",uA="privacyDefinitions",dA="USAGE_DATA",fA="systemimage://person.circle",pA="NOT_COMPATIBLE_BANNER",hA="UNSUPPORTED_CAPABILITIES",wA="experimentLocale",gA="pageCustomId",mA="ProductPage.Section.ScreenshotsPreview.Title",yA="user",vA="reviewsContainer",AA="displayable-kind",TA="urlQuery",PA="ratingCount",IA="APP_SUPPORT",SA="recent",bA="reviewsPageActionFromReviewsData",CA="select",kA="genreName",EA="{chartPosition}",OA="BADGE_PLAYERS_HEADING",RA="{maxPlayers}",DA="BADGE_NO_RATINGS_CAPTION",_A="{subtitle}",LA="watchOS",xA="Achievements",MA="gameCenterPlayerGameAchievementSummary",NA="ProductPage.Section.FeaturedIn.Title",FA="largeGameCenterPlayer",$A="hasEula",BA="productMediaItem",UA="createTapToRateProductReviewAction",GA="ProductPage.RatingsAndReviews.Footer.LearnMore",VA="ProductPage.Section.MostRecentVersion.Title",jA="overview",HA="titledParagraph",WA="detail",qA="releaseNotes",zA="{version}",YA="ProductPage.Section.Videos.Title",JA="standardInformationShelf",ZA="product-page-info-section",KA="seventeenPlus",QA="gracRegistrationNumber",XA="SELLER",eT="associations.app-events.data",tT="SEARCH_FACET_IPHONE_ONLY",nT="SEARCH_FACET_FREE",rT="SEARCH_FACET_",oT="ageBandId",sT="filter[price]",iT="filter[genre]",aT="filter[ages]",cT="userTyped",lT="ghosting",uT="kinds",dT="SEARCH_TRANSPARENCY_LINK",fT="ads-result",pT="SearchRevisions",hT="EDITORIAL_SEARCH_RESULT_TYPE_DEVELOPER_TITLE_CASE",wT="whenInstalled",gT="mixed",mT="guidedLabel",yT="search-revisions",vT="recentSearches",AT="MEDRIVER_",TT="METADATA_RIBBON_CHART_POSITION",PT="supportsGameController",IT="onDeviceSearchHistory",ST="scrollablePill",bT="displayType",CT="appMarkerType",kT="Acquisition",ET="InlineImage",OT="AppLockup",RT="InlineVideo",DT="quote",_T="Small",LT="Medium",xT="Large",MT="itunes.apple.com",NT="ignoreEditorialArt",FT="x-as3-internal:/today/test",$T="meta.associations.recommendations.data",BT="editorialBackground",UT="editorialVideo.storyCardMotion16x9",GT="editorialVideo.storyCenteredMotion16x9",VT="editorialVideo.listCardMotion21x9",jT="editorialArtwork.listCardStatic21x9",HT="LCS.ApLCL01",WT="LCS.ApLCL02",qT="editorialArtwork.universalAStatic16x9",zT="editorialVideo.universalAMotion16x9",YT="LCS.ApLCXW01",JT="jsTimeoutManager",ZT="com.apple.AppStore.Widgets.Today",KT="systemMedium",QT="DCEC.AppWS01",XT="MCGC.AppWS01",eP="MCGC.AppWL01",tP="PersonalizedRecommendations.Toggle.Title",nP="PersonalizedRecommendations.Toggle.Footer",rP="PERSONALIZATION_PURCHASES",oP="RECOMMENDATIONS",sP="engagement-data",iP="application/json",aP="ArcadeOnboarding",cP="extend",lP="ALL_ARCADE_GAMES",uP="MMMM d, y",dP="release",fP="featuredCategories",pP="nonnull",hP="token.pageInformation",wP="token.excludeAttribution",gP="isAppInstalled",mP="token.targetType",yP="token.metricsKind",vP="systemInformation",AP="token.productVariantData",TP="token.inAppEventId",PP="Purchases",IP="editorial-shelves-collection:contents",SP="GROUPING_DISCOVER",bP="OnDeviceRecommendationsPageController:handleShelf not implemented",CP="ProductData",kP="Product page preloading is disabled",EP="lookup",OP="app-bundle",RP="search-recommendation-sections",DP="clusterId",_P="timeSinceOnScreen",LP="results.contents",xP="trending-contents",MP="TodayData",NP="done",FP="Arcade.DownloadPack.Suggestions.GetAllButtonTitle",$P="asString",BP="asNumber",UP="asBoolean",GP="asJSONValue",VP="catalog",jP="engagement",HP="view/see-all",WP="prefix",qP="username",zP="password",YP="port",JP="signatureResumption",ZP="checkForLongUrl",KP="getPass",QP="certId",XP="language",eI="apps-media-api-edge-host",tI="https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/accountSummary",nI="https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/redeemLandingPage",rI="IPHONE_BRAND_NAME",oI="IPAD_BRAND_NAME",sI="APPLE_TV_BRAND_NAME",iI="APPLE_WATCH_BRAND_NAME",aI="MAC_BRAND_NAME",cI="personalizedRecommendationsToggle",lI="arcadeLaunchRepair",uI="arcadeTodayCard",dI="arcadeTabNavBar",fI="existing",pI="list",hI="river",wI="timer",gI="textFollowsTintColor",mI="bundle",yI="editorial",vI="com.apple.appstorecomponentsd",AI="com.apple.AppStore.Widgets",TI="primaryTerm",PI="https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/signupWizard",II="isStandaloneWithCompanionForWatchOS",SI="isDeliveredInIOSAppForWatchOS",bI="free",CI="presentModal",kI="chartHref",EI="results.data",OI="accountDetails",RI="createAccount",DI="sendGift",_I="addFunds",LI="familySharing",xI="Redeem",MI="cppAssetsMissing",NI="localizationNotAvailable",FI="customers-also-bought-apps-download",$I="startDate",BI="endDate",UI="badgeKind",GI="deepLink",VI="appPromotion",jI="dismiss",HI="<br>",WI="editorialArtwork.brandLogo",qI="SEE_ALL_GAMES",zI="marketingVideo",YI="supportsSharePlay",JI="comingSoon",ZI="subscribe",KI="custom",QI="Arcade.Welcome.Family.Button.ExploreArcade",XI="breakoutTextAlignment",eS="left",tS="right",nS="breakoutCallToActionLabel",rS="external",oS="black",sS="fulfilled",iS="arcadeSubscribe",aS="Action.OK",cS="action.kind",lS="action.url",uS="Goto",dS="messagesScreenshots",fS="supportsFunCamera",pS="requirementsByDeviceFamily",hS="enrichedEditorialNotesOnToday",wS="internetContentProviderInfo",gS="future",mS="unlistedApps",yS="system-apps",vS="xros-apps",AS="customAttributes",TS="appShowcase",PS="placeholderBackground",IS="checksum",SS="circularArtwork",bS="ovalArtwork",CS="appleWatch_2021",kS="appleWatch_2018",ES="appleWatch",OS="iphone_6_5",RS="iphone_d73",DS="iphone_d74",_S="editorialArtwork.splashFullScreen",LS="splashVideo16x9",xS="splashVideo4x3",MS="splashVideo3x4",NS="appletv",FS="customVideoPreviewsByTypeForAd",$S="BreakoutLarge",BS="Hero",US="StoryMedium",GS="decimalPad",VS="hasInAppPurchases",jS="systemGreen",HS="jpeg",WS="primary-contents",qS="associations.editorial-cards.data",zS="subscriptionHero",YS="ignoreITunesShortNotes",JS="editorialNotes.short",ZS="HERO_CAROUSEL_OVERLAY_BUTTON_TITLE_VIEW",KS="collectionIcons",QS="AllGames",XS="navigationBar",eb="arcadeFooter",tb="TERMS_AND_CONDITIONS_TITLE",nb="collectionModule",rb="collectionLockup",ob="Genre",sb="displayCount",ib="designTag",ab="link.url",cb="editorialStoryCard",lb="static",ub="nonarcade",db="isArcade",fb="date",pb="medium",hb="systemBlue",wb="parentShelfItems",gb="textColor4",mb="Watch",yb="Messages",vb="Lockup.Heading.Arcade",Ab="discounts",Tb="inAppPurchaseInstall",Pb="item.offer.buyParams",Ib="parentId",Sb="genreNames",bb="APPLOCKUP",Cb="widthConstrainedLockup",kb="targetType",Eb="crossfireReferral",Ob="data-metrics-impressions-low-latency",Rb="media",Db="SearchFocus",_b="Focus",Lb="overridePageContext",xb="refAppType",Mb="widget",Nb="SoftwareBundle",Fb="context",$b="prevPage",Bb="com.apple.AppStore.clipOverlay",Ub="overlay",Gb="overlayClip",Vb="offerReleaseDate",jb="buyInitiate",Hb="searchOriginatingTerm",Wb="recents",qb="hint",zb="undoSpellCorrection",Yb="applySpellCorrection",Jb="userTypedHint",Zb="idType",Kb="iAdEligible",Qb="impressionParentId",Xb="searchGhostHintPrefix",eC="searchGhostHintTermPhase",tC="searchGhostHintTerm",nC="meta.metrics",rC="@@durationCount@@",oC="@@postTrialPriceDuration@@",sC="PREORDER_NOTIFY_AUTOMATIC_DOWNLOAD_MESSAGE",iC="arcade-preorder",aC="confirmation",cC="trial",lC="notSubscribed",uC="OfferButton.IntroPrice.FreeTrial",dC="discountOwnedParent",fC="discountUnownedParent",pC="meta.personalizationData.grpId",hC="editorialItemGroup",wC="DATA_NOT_PROVIDED",gC="PRODUCT_PRIVACY_LEARN_MORE_LINK",mC="PRODUCT_PRIVACY_LEARN_MORE_NO_LINK",yC="privacyDetail",vC="privacyCard",AC="identifier",TC="experimentId",PC="helpful",IC="wasReset",SC="shelves_2_0_reviews",bC="RATINGS_STATUS_NOT_ENOUGH_RATINGS_OR_REVIEWS",CC="supportUrl",kC="chartPosition",EC="chartPositions",OC="systemimage://person.crop.square",RC="highMotion",DC="{minPlayers}",_C="{releaseDate}",LC="value",xC="{count}",MC="deviceCompatibility",NC="Offer.Expanded.Title.ComingSoon",FC="externalVersionId",$C="xrOS",BC="ProductPage.Section.Information.Title",UC="ProductPage.Section.Supports.Title",GC="safetyAndComplianceUrl",VC="productReviewAction",jC="productRatingsAndReviewsComponent",HC="versionDisplay",WC="INSTALL_SIZE_STRING",qC="{fileSize}",zC="pageHeader",YC="shelf_page_header",JC="iads",ZC="SEARCH_FACET_IPAD_ONLY",KC="SEARCH_FACET_ANY_PRICE",QC="SEARCH_FACET_ANY_CATEGORY",XC="SEARCH_FACET_RELEVANCE",ek="clientApplication",tk="macOSCompatibleIOSApps",nk="top-apps",rk="showLabelInSearch",ok="guidedToken",sk="{searchTerm}",ik="searchResult",ak="searchChartsAndCategories",ck="alternateLabel",lk="contentIds",uk="collection",dk="mediumAdLockupWithScreenshotsBackground",fk="adItem",pk="condensedAdLockupWithIconBackground",hk="displayTerm",wk="imageWithLabel",gk="scrollablePills",mk="editorialLink",yk="upsellForNonacquisitionCanvas",vk="arcadeIcons",Ak="AppMarker",Tk="isAcquisition",Pk="meta.personalizationData.optimizationId",Ik="meta.personalizationData.optimizationEntityId",Sk="editorialVideo.storeFrontVideo4x3",bk="editorialVideo.storeFrontVideo",Ck="headerName",kk="headerBadge",Ek="headerTagline",Ok="extraWideArtworkLayouts",Rk="associations.recommendations.data",Dk="todaySection",_k="Video",Lk="editorialArtwork.storyCardStatic16x9",xk="systemLarge",Mk="personalization-data",Nk="ACCOUNT_SETTINGS",Fk="onDevicePersonalization",$k="upsellRecovery",Bk="prefersLargeTitleWhenRoot",Uk="token.metricsPlatformDisplayStyle",Gk="https",Vk="work",jk="play",Hk="develop",Wk="channel-apps",qk="attributes",zk="landing:new-protocol",Yk="chin",Jk="Arcade.DownloadPack.Suggestions.PrimaryButtonTitle",Zk="strict",Kk="customArtwork",Qk="ratings",Xk="suffix",eE="dynamic",tE="FlowAction",nE="arcadeGroupingLockup",rE="arcadeStoryCanvas",oE="arcadeComingSoon",sE="blue",iE="pageChange",aE="com.apple.AppStore",cE="com.apple.TVAppStore.AppStoreTopShelfExtension",lE="originalUrl",uE="purchased",dE="updates",fE="checkForPreorders",pE="<b>",hE="</b>",wE="fields",gE="minPlayers",mE="maxPlayers",yE="CONTROLLER_OPTIONAL",vE="SIRI_REMOTE_OR_CONTROLLER_REQUIRED",AE="SIRI_REMOTE_REQUIRED",TE="purchaseHistory",PE="manageSubscriptions",IE="push",SE="METADATA",bE="eventModule",CE="png",kE="events-and-offers",EE="with",OE="personal-recommendations",RE="wordmark",DE="arcade_download_pack",_E="target",LE="rejected",xE="supportURLForLanguage",ME="websiteUrl",NE="top-in-apps",FE="alternate-apps",$E="standalone-merchandised-in-apps",BE="cabAdSupport",UE="merchandised-in-apps",GE="imessage-apps",VE="types",jE="670",HE="tvRect",WE="unadorned",qE="deviceFamilies",zE="appleWatch_2022",YE="iphone_5_8",JE="editorialArtwork.bannerUber",ZE="arcadeShowcase",KE="EditorialLockupLarge",QE="EditorialLockupMedium",XE="editorial-elements",eO="prefersOverlayedPageHeader",tO="editorialNotes.badge",nO="interactive",rO="hasChevron",oO="textLightensOnHighlight",sO="hasSeparator",iO="lightOverArtwork",aO="mediumImageLockup",cO="largeImageLockup",lO="singleModule",uO="materialText",dO="arcadeDownloadPackCard",fO="categoryBrick",pO="tile",hO="nonArcade",wO="systemimage://magnifyingglass",gO="inAppPurchaseTiledLockup",mO="doNotFilter",yO="secondaryText",vO="cppData",AO="contingentItems",TO="largeStoryCard",PO="standardApp",IO="abExperiment",SO="editorialBadgeType",bO="editorialPriority",CO="isSubscription",kO="appExtVrsId",EO="genreDisplayName",OO="subscribed",RO="multiple-system-operators",DO="pageReferrer",_O="eventVersion",LO="cardType",xO="iAdMetadata",MO="iAdImpressionId",NO="position",FO="platformDisplayStyle",$O="hintsEntity",BO="ad_container",UO="iAdAppStoreClientRequestId",GO="impressionId",VO="customProductPage",jO="complete",HO="OfferButton.IntroPrice.Trial",WO="size",qO="PRODUCT_PRIVACY_TITLE",zO="privacyDetails",YO="privacyType",JO="systemimage://exclamationmark.triangle",ZO="webBrowser",KO="APP_STORE_EDITORS_NOTES",QO="contentRating",XO="BADGE_MFI_HEADING",eR="MMM d, yyyy",tR="PRIVACY_POLICY",nR="ProductPage.Section.SafetyAndCompliance.Title",rR="componentBackgroundStandout",oR="LICENSE_AGREEMENT",sR="framedVideo",iR="search-hints",aR="guidedSearch",cR="multirooms",lR="twoColumnList",uR="framedArtwork",dR="editorialArtwork.storyCenteredStatic16x9",fR="editorialArtwork.dayCard",pR="editorialArtwork.eventCard",hR="editorialArtwork.generalCard",wR="header-contents",gR="materialGradient",mR="fractionalWidth",yR="MC.ApSCFB01",vR="UAS.ApXWC01",AR="personalizationTransparency",TR="multiplex",PR="customers-also-bought-apps-with-download-intent",IR="user-reviews",SR="searchLanding:see-all",bR="landing",CR="hash",kR="false",ER="actionLinks",OR="productReview",RR="four-screenshots",DR="multiApp",_R="mediumLockupWithScreenshots",LR="singleLockup",xR="com.apple.Arcade.ArcadeTopShelfExtension",MR="term",NR="externalUrl",FR="categories",$R="minimumWatchOSVersion",BR="requiresGameController",UR="CONTROLLER_REQUIRED",GR="dynamicUI",VR="webView",jR="Account",HR="search-results",WR="search-landing",qR="customScreenshotsByTypeForAd",zR="EventDetails",YR="inAppEventId",JR="topic",ZR="back",KR="LearnMore",QR="supportsStreamlinedBuy",XR="recurringSubscriptionPeriod",eD="toggle",tD="buy",nD="pageMetrics",rD="canvas",oD="developer-other-apps",sD="related-editorial-items",iD="contingent-items:association.trunks",aD="watch-apps",cD="atv-apps",lD="mac-os-compatible-ios-apps",uD="round",dD="mixedMediaLockup",fD="EditorialLockupLargeVariant",pD="EditorialLockupMediumVariant",hD="heic",wD="canonicalId",gD="Horizontal",mD="largeHeroBreakout",yD="mediumStoryCard",vD="editorial_id",AD="mso",TD="editorialArtwork.mediaCard",PD="GAME_CENTER",ID="tvOS",SD="open",bD="searchLandingTrendingSection",CD="topCharts",kD="onDevicePersonalizationUseCase",ED="named",OD="personalizationData",RD="href",DD="impressionQueue",_D="pageContext",LD="refApp",xD="extRefApp2",MD="extRefUrl2",ND="offerType",FD="searchPrefix",$D="iAdTemplateType",BD="SearchLanding",UD="OfferButton.Title.Get",GD="ARCADE_PREORDER_LOCKUP_COMING_SOON",VD="{price}",jD="inline",HD="intermediateDetailPage",WD="languages",qD="userRating",zD="allProductReviewActions",YD="cancel",JD="rooms",ZD="cardDisplayStyle",KD="singleColumnList",QD="FullWidth",XD="recommendations",e_="app-distribution",t_="ArcadeData",n_="SearchData",r_="many",o_="GET",s_="arcadeProductPage",i_="textLinksShelf",a_="boolean",c_="trailing",l_="appIcon",u_="redeem",d_="gift",f_="price",p_="share",h_="toast",w_="badge",g_="useTrunkArtwork",m_="comingSoonGrouping",y_="arcadeDownloadPackCategories",v_="application/x-www-form-urlencoded",A_="privacyPolicyUrl",T_="privacy",P_="sellerInfo",I_="trunks",S_="ios-apps",b_="mac-apps",C_="charts",k_="ipod",E_="pill",O_="appTrailerLockup",R_="screenshotsLockup",D_="lockupSmall",__="largeBreakout",L_="placeholder",x_="rowCount",M_="meta.personalizationData.appId",N_="grouping",F_="resource://GameCenterEyebrow",$_="links",B_="suggested",U_="collections",G_="editorial-elements:contents",V_="actionUrl",j_="advertRotation",H_="hints",W_="extRefUrl",q_="impressionType",z_="softwareType",Y_="offers",J_="PREORDER_NOTIFY_MESSAGE",Z_="NOT_COMPATIBLE_BANNER_TEMPLATE",K_="{linkTitle}",Q_="ppid",X_="targetPlatform",eL="src",tL="systemSmall",nL="navigation",rL="games",oL="apps-and-games",sL="discover",iL="few",aL="coercedValue",cL="arcadeTabHeader",lL="new",uL="disabled",dL="ages",fL="meta.contingentItemOffer",pL="large",hL="annotation",wL="hide_arcade_header_on_arcade_tab",gL="location",mL="additionalTerms",yL="roundedRect",vL="singleSelection",AL="isCanvasAvailable",TL="shortEditorialNotes",PL="enrichedEditorialNotes",IL="contingent-items:branch",SL="contingentItemOffer",bL="inAppPurchaseLockup",CL="largeLockup",kL="clear",EL="previewFrame",OL="debug",RL="ipadPro",DL="ipad_10_5",_L="isGameCenterEnabled",LL="brick",xL="badge-content",ML="layoutDirection",NL="posterLockup",FL="small",$L="facet",BL="card",UL="arcadeApp",GL="editorialBadgeInfo",VL="ARCADE_ACTION_TITLE_EXPLORE",jL="EXPLORE",HL="pageFields",WL="pageUrl",qL="refUrl",zL="hostApp",YL="trending",JL="relationship",ZL="controller",KL="BADGE_MFI_SUPPORTED",QL="arcadeProductPageInlineMessage",XL="productPageInlineMessage",ex="Search Results",tx="editorialCopy",nx="one",rx="number",ox="NO_BADGE",sx="editorialItem",ix="releaseDate",ax="hero",cx="always",lx="tabs",ux="remoteControllerRequirement",dx="menuItem",fx="iad",px="customers-also-bought-apps",hx="actionType",wx="trunk-app",gx="priceFormatted",mx="arcadeSeeAllGames",yx="bgColor",vx="object",Ax="versionHistory",Tx="story",Px="editorialClientParams",Ix="width",Sx="internal",bx="ipadPro_2018",Cx="ipad_11",kx="expectedReleaseDate",Ex="prefersLargeTitle",Ox="editorial-shelves-header",Rx="showExpectedReleaseDate",Dx="heroCarousel",_x="todayBrick",Lx="click",xx="Software",Mx="iAdContainerId",Nx="pageDetails",Fx="@@count@@",$x="{title}",Bx="NOT_COMPATIBLE_BANNER_LINK_TITLE",Ux="compatibilityAnnotation",Gx="allProductReviews",Vx="tapToRateProductReviewAction",jx="writeAReviewProductReviewAction",Hx="editorsChoice",Wx="notPurchasedRatingsAndReviews",qx="purchasedRatingsAndReviews",zx="eula",Yx="Any",Jx="apps.apple.com",Zx="host",Kx="appEvent",Qx="inAppPurchase",Xx="arcadeGeneric",eM="grid",tM="isStandaloneForWatchOS",nM="isFirstPartyHideableApp",rM="iap",oM="chart",sM="description.standard",iM="upsellBreakout",aM="contexts",cM="tvos",lM="height",uM="editorialNotes.tagline",dM="iAdPlacementId",fM="pageId",pM="SearchResults",hM="iAdId",wM="{osVersion}",gM="create",mM="rgb",yM="userProductReviews",vM="bundleParents",AM="textCards",TM="paragraph",PM="iOS",IM="platform",SM="transparent",bM="upsellMarketingItem",CM="metrics",kM="offerName",EM="POST",OM="videoPreviewsByType",RM="latest-release-app",DM="appletvos",_M="{learnMoreLink}",LM="editorialNotes.name",xM="Search",MM="actionDetails",NM="iAdSlotInfo",FM="detailPage",$M="editorsChoiceProductReviews",BM="bundleChildren",UM="brandedSingleApp",GM="macOS",VM="buyParams",jM="branch-app",HM="realityDevice",WM="title",qM="screenshotsByType",zM="expectedReleaseDateDisplayFormat",YM="query",JM="undefined",ZM="rating",KM="renderPage",QM="editorial-cards",XM="notPurchasedLinks",eN="category",tN="finance",nN="editorialElementKind",rN="searchResults",oN="text/x-apple-as3-nqml",sN="osx",iN="data",aN="type",cN="colored",lN="tagline",uN="gameCenter",dN="meta",fN="pageType",pN="Room",hN="editorial-item-groups",wN="view",gN="other",mN="inAppPurchases",yN="subscriptions",vN="presentModalFormSheet",AN="short",TN="productVideo",PN="kind",IN="protocol",SN="todayCard",bN="iAdMissedOpportunityReason",CN="productReviewsFooter",kN="searchLanding",EN="productArtwork",ON="arcade-apps",RN="developers",DN="preorder",_N="subtitle",LN="branch",xN="flowPreview",MN="editorial-pages",NN="its_contentId",FN="pathname",$N="token",BN="eventType",UN="text/plain",GN="purchasedLinks",VN="xros",jN="groupings",HN="its_id",WN="marketing-items",qN="editorialNotes",zN="smallStoryCard",YN="impressions",JN="fractionalHeight",ZN="updatedTodayCardArtworkLayouts",KN="No page routes specified",QN="artistName",XN="ACTION_SEE_ALL",eF="adamId",tF="text",nF="color",rF="productPage",oF="sort",sF="iphone",iF="isAppleWatchSupported",aF="bundleId",cF="image",lF="product",uF="editorialQuote",dF="featuredIn",fF="mostRecentVersion",pF="ipad",hF="requiredCapabilities",wF="never",gF="account",mF="genre",yF="children",vF="displayStyle",AF="compatibilityControllerRequirement",TF="center",PF="primary-content",IF="developer",SF="mediumLockup",bF="card-contents",CF="action",kF="infer",EF="ios",OF="minimumOSVersion",RF="defaultValue",DF="preorderDisclaimer",_F="searchTerm",LF="ignoredValue",xF="productRatings",MF="messages",NF="macRequiredCapabilities",FF="Arcade",$F="productPageYMALDuringDownload",BF="coercible",UF="none",GF="light",VF="informationRibbon",jF="moreByDeveloper",HF="video",WF="article",qF="true",zF="achievements",YF="privacyFooter",JF="videos",ZF="label",KF="isPreorder",QF="in-apps",XF="sequential",e$="absolute",t$="similarItems",n$="leading",r$="lockup",o$="editorialVideo",s$="appEvents",i$="friendsPlaying",a$="privacyTypes",c$="search",l$="swoosh",u$="productPageYMAL",d$="capabilities",f$="contingent-items",p$="privacyHeader",h$="white",w$="editorialArtwork",g$="smallLockup",m$="link",y$="string",v$="vision",A$="navigate",T$="default",P$="description",I$="artwork",S$="standard",b$="url",C$="app",k$="information",E$="reviews",O$="app-events",R$="dark",D$="unknown",_$="pad",L$="today",x$="app-bundles",M$="editorial-items",N$="header",F$="arcade",$$="page",B$="topLockup",U$="phone",G$="screenshots",V$="contents",j$="button",H$="mac",W$="watch",q$="apps",z$="name",Y$="shelf"
Uh=e(4172),Gh=e(2450)
const J$={}
class Z${constructor(e){this.implementation=e}}class K$ extends Z${get isSupportEnabled(){return s(this.implementation)&&this.implementation.isSupportEnabled}get isRosettaAvailable(){return s(this.implementation)&&this.implementation.isRosettaAvailable}}K$.type=(0,Bh.makeMetatype)("app-store:as-wrapper")
class Q$ extends Z${constructor(e,t){super(e),this.cachedEnableAdditionalLoggingForPPV=null}get todayAdMediumLockupScreenshotEnabled(){var e
return null!==(e=this.implementation.boolean("today-ad-medium-lockup-screenshots-enabled"))&&void 0!==e&&e}get todayAdMediumLockupScreenshotAnimationEnabled(){var e
return null===(e=this.implementation.boolean("today-ad-medium-lockup-screenshots-animation-enabled"))||void 0===e||e}get trendingSearchesURL(){return this.implementation.url("trending-searches")}get searchHintsURL(){return this.implementation.url("searchHints")}get personalizedUserReviewURL(){return this.implementation.url("personalizedUserReviewUrl")}get personalizedUserReviewEnabled(){return this.implementation.boolean("personalizedUserReviewEnabled")}get userRateURL(){return this.implementation.url("p2-application-user-rate-content")}get writeReviewURL(){return this.implementation.url("p2-application-user-write-review")}get accessoryRoomURL(){return this.implementation.url("p2-accessory-room")}get passbookMainURL(){return this.implementation.url("passbook")}get libraryLinkURL(){return this.implementation.url("library-link")}get metricsConfiguration(){return m(this.implementation.dictionary(CM))}get language(){return this.implementation.string(XP)}get mediaApiLanguage(){return this.implementation.string("language-tag")||this.implementation.string(XP)}get termsAndConditionsURL(){return this.implementation.url("p2-service-terms-url")}get usePostForAppStoreSearch(){return this.implementation.boolean("usePostForAppStoreSearch")}get isMonetaryGiftingEnabled(){return this.implementation.boolean("isBuyingScheduledGiftCertificateEnabled")}get accountTopUpURL(){return this.implementation.url("AddFundsUrl")}get accountTopUpTitle(){return this.implementation.string("account-top-up-title")}get isContentGiftingEnabled(){return this.implementation.boolean("isScheduledGiftingEnabled")}get buyButtonMetadataURL(){return this.implementation.url("personalized-buy-buttons/software")}get isTVAppEnabled(){return this.implementation.boolean("uvSearch/nowplaying-enabled")}get emailSupportLinkURL(){return this.implementation.url("supportLinkUrl")}get voteUrl(){return this.implementation.url("voteUrl")}get reportConcernUrl(){return this.implementation.url("reportConcernUrl")}get reportConcernExplanation(){return this.implementation.string("reportConcernExplanation")}get reportConcernReasons(){return c(g(this.implementation.array("reportConcernReasons")))}get reportProblemEnabled(){var e
return null!==(e=this.implementation.boolean("product-page-report-problem-enabled"))&&void 0!==e&&e}get productPageReportProblemURL(){return this.implementation.string("product-page-report-problem-url")}get productPageReportProblemSADSubscriptionArray(){return c(g(this.implementation.array("product-page-report-problem-sad-subscriptions")))}get productPageReportProblemSecondPartyAppArray(){const e=c(g(this.implementation.array("product-page-report-problem-second-party-apps")))
return o(e)?["1473505534","1416238567","640199958","1529498570","915061776","1130498044","1070072560"]:e}get createAccountUrl(){var e
return null!==(e=this.implementation.url("createAccountUrl"))&&void 0!==e?e:PI}get mediaCountryCode(){return this.implementation.string("countryCode")}get mediaHost(){return this.implementation.url("apps-media-api-host")}mediaEdgeHost(e){return e.host.clientIdentifier===vI?this.implementation.url(eI):this.implementation.string(eI)}get mediaEdgeSearchHost(){return this.implementation.string("apps-media-api-search-edge-host")}get mediaPreviewHost(){return this.implementation.string("apps-media-api-preview-host")}get mediaRealmHost(){return this.implementation.string("notification-settings-media-api-host")}get mediaAPICatalogMixedShouldUseEdge(){var e
return null!==(e=this.implementation.boolean("apps-media-api-catalog-mixed-should-use-edge"))&&void 0!==e&&e}get edgeEndpoints(){const e=this.implementation.array("apps-media-api-edge-end-points")
return typeof e===JM?[]:c(g(e))}get mediaAdvertRequestLimit(){var e
return null!==(e=this.implementation.double("apps-media-api-search-ads-limit"))&&void 0!==e?e:4}get searchSortOptions(){return c(g(this.implementation.array("searchSortOptions")))}get ageBands(){return c(g(this.implementation.array("ageBands")))}get redirectUrlWhitelistedQueryParams(){let e=c(g(this.implementation.array("processRedirectUrl/whitelistedQueryParams")))
return o(e)&&(e=["affC","adId","advp","at","ct","itsct","itscg","itscc","itcCt","its_qt","ls","partnerId","pt","qtkid","uo"]),e}get redirectUrlEndpoint(){var e
return null!==(e=this.implementation.string("processRedirectUrl/endpoint"))&&void 0!==e?e:"https://itunes.apple.com/WebObjects/MZStoreServices.woa/wa/processRedirectUrl"}get aristotleParentAppAdamId(){var e
return null!==(e=this.implementation.string("aristotle-app-id"))&&void 0!==e?e:"383941000"}get arcadeAppAdamId(){return this.implementation.string("app-store-app-id")}get arcadeProductFamilyId(){var e
return null!==(e=this.implementation.string("arcade-iap-family-id"))&&void 0!==e?e:this.implementation.string("ocelot-iap-family-id")}get arcadeProductId(){var e
return null!==(e=this.implementation.string("arcade-iap-offer-name"))&&void 0!==e?e:this.implementation.string("ocelot-iap-offer-name")}get arcadeCategoryBarSAGUpliftDisplayRate(){var e
return null!==(e=this.implementation.double("arcade-category-bar-see-all-games-display-rate"))&&void 0!==e?e:0}get searchTransparencyAdamId(){return this.implementation.string("transparencyLawEditorialItemId")}get systemApps(){return c(g(this.implementation.array("hideableSystemApps")))}get nonDeletableSystemApps(){const e=g(this.implementation.array("nonDeletableSystemApps"))
return i(e)?c(e):[{id:1635387927,"bundle-id":yg},{id:1635862301,"bundle-id":vg},{id:1584216343,"bundle-id":"com.apple.findmy.finddevices"},{id:1584215960,"bundle-id":"com.apple.NanoWorldClock"},{id:1584215812,"bundle-id":"com.apple.HeartRate"},{id:1584215851,"bundle-id":"com.apple.SessionTrackerApp"},{id:1146562108,"bundle-id":"com.apple.NanoPhone"},{id:1146560473,"bundle-id":"com.apple.MobileSMS"},{id:1584215428,"bundle-id":"com.apple.NanoPhotos"},{id:1459455352,"bundle-id":mg},{id:1067456176,"bundle-id":gg}]}get tabsStandard(){return c(g(this.implementation.array("tabs/standard")))}get watchAppsGroupingURL(){var e
return null!==(e=this.implementation.url("watchAppsGrouping"))&&void 0!==e?e:"https://apps.apple.com/WebObjects/MZStore.woa/wa/viewFeature?id=1472048385"}get requireAgeVerification(){return this.implementation.boolean("requireAgeVerification")}get ageRatingLearnMoreEditorialItemId(){return this.implementation.string("ageRatingLearnMoreEditorialItemId")}get appleSiliconMacUnverifiedBadgeEditorialItemId(){return this.implementation.string("appleSiliconMacUnverifiedBadgeEditorialItemId")}get safariExtensionsGroupingURL(){return this.implementation.url("safariExtensionsGrouping")}get familySubscriptionsLearnMoreEditorialItemId(){return this.implementation.string("familySubscriptionsLearnMoreEditorialItemId")}get dynamicUIRegexStrings(){const e=this.implementation.array("commerce-ui-urls/dynamic-url-patterns")
return typeof e===JM?[]:c(g(e))}get financeUIRegexStrings(){const e=this.implementation.array("commerce-ui-urls/url-patterns")
return typeof e===JM?[]:c(g(e))}get webViewRegexStrings(){const e=this.implementation.array("commerce-ui-urls/v2-url-patterns")
return typeof e===JM?[]:c(g(e))}get arcadePreOrderUpsellLimitSeconds(){var e
return null!==(e=this.implementation.double("arcadePreOrderUpsellLimitSeconds"))&&void 0!==e?e:86400}get recentlyPlayedGamesWindowInSeconds(){var e
return null!==(e=this.implementation.double("recentlyPlayedGamesWindowInSeconds"))&&void 0!==e?e:7776e3}get enableComingSoonToggle(){return this.implementation.boolean("enableComingSoonToggle")}get enablePrivacyNutritionLabels(){var e
return null!==(e=this.implementation.boolean("enable-privacy-nutrition-labels"))&&void 0!==e&&e}get enableSellerInfo(){var e
return null!==(e=this.implementation.boolean("enable-seller-info"))&&void 0!==e&&e}get enableSellerICPAnnotation(){var e
return null!==(e=this.implementation.boolean("enable-seller-icp"))&&void 0!==e&&e}get enableFeaturedCategoriesOnGroupings(){var e
return null!==(e=this.implementation.boolean("enable-featured-categories-on-groupings"))&&void 0!==e&&e}get enableCategoryBricksOnGroupings(){var e
return null!==(e=this.implementation.boolean("enable-category-bricks-on-groupings"))&&void 0!==e&&e}get arcadeOfferEditorialItemId(){return this.implementation.string("arcadeOfferEditorialItemId")}get sponsoredSearchODMLTimeout(){var e
return null!==(e=this.implementation.double("sponsored-search-odml-timeout"))&&void 0!==e?e:3}get isSearchLandingAdsEnabled(){return this.implementation.boolean("isSearchLandingAdsEnabled")}get searchLandingAdFetchTimeout(){var e
return null!==(e=this.implementation.double("search-landing-ad-fetch-timeout"))&&void 0!==e?e:.175}get searchLandingPageOffscreenRefreshInterval(){var e
return null!==(e=this.implementation.double("search-landing-offscreen-refresh-interval-in-seconds"))&&void 0!==e?e:60}get searchLandingPageRefreshUpdateDelayInterval(){var e
return null!==(e=this.implementation.double("search-landing-page-update-delay-interval-in-seconds"))&&void 0!==e?e:.3}get appPrivacyLearnMoreEditorialItemId(){return this.implementation.string("appPrivacyLearnMoreEditorialItemId")}get ratingsAndReviewsLearnMoreEditorialId(){return this.implementation.string("ratings-and-reviews-learn-more-editorial-item-id")}get suppressedPrivacyAppIds(){const e=this.implementation.array("suppressedPrivacyLabels")
return typeof e===JM?[]:c(g(e))}get appPrivacyDefinitionsEditorialItemId(){return this.implementation.string("appPrivacyDefinitionsEditorialItemId")}get todayWidgetInvalidationHour(){var e
return null!==(e=this.implementation.double("todayWidgetInvalidationHour"))&&void 0!==e?e:2}get todayWidgetInvalidationJitterMinutes(){var e
return null!==(e=this.implementation.double("todayWidgetInvalidationJitterMinutes"))&&void 0!==e?e:119}get todayWidgetLivePreviewRolloutRate(){var e
return null!==(e=this.implementation.double("todayWidgetLivePreviewRolloutRate"))&&void 0!==e?e:1}get hero3RolloutRate(){var e
return null!==(e=this.implementation.double("arcade-hero-shelf-tagline-style-rollout-rate"))&&void 0!==e?e:1}get arcadeTrialEnrolledStateRate(){var e
return null!==(e=this.implementation.double("arcade-trial-enrolled-state-rate"))&&void 0!==e?e:0}get marketingItemSelectionTimeout(){var e
return null!==(e=this.implementation.double("marketing-item-selection-timeout"))&&void 0!==e?e:1}get enableAppEvents(){var e
return null!==(e=this.implementation.boolean("enableAppEvents"))&&void 0!==e&&e}get enableProductPageVariants(){var e
return null!==(e=this.implementation.boolean("enableProductPageVariants"))&&void 0!==e&&e}get enableArcadeTrialEligibleBadging(){return this.implementation.boolean("enable-arcade-trial-eligible-badging")}get heroCarouselAutoScrollDuration(){var e
return null!==(e=this.implementation.double("heroCarouselAutoScrollDuration"))&&void 0!==e?e:7}get enableAdditionalLoggingForPPV(){var e,t
return null==this.cachedEnableAdditionalLoggingForPPV&&(this.cachedEnableAdditionalLoggingForPPV=null!==(e=this.implementation.boolean("enableAdditionalLoggingForPPV"))&&void 0!==e&&e),null!==(t=this.cachedEnableAdditionalLoggingForPPV)&&void 0!==t&&t}get enableOnDevicePersonalization(){const e=this.implementation.boolean("enable-on-device-personalization")
return!!r(e)||e}get enableAutomaticPageRefresh(){var e
return null===(e=this.implementation.boolean("enable-automatic-page-refresh"))||void 0===e||e}get widgetSuggestionsFromTodayTabRolloutRate(){var e
return null!==(e=this.implementation.double("today-widget-suggestions-from-today-tab-rollout-rate"))&&void 0!==e?e:1}get todayWidgetSmartStackJitterMinutes(){var e
return null!==(e=this.implementation.double("today-widget-smart-stack-jitter-minutes"))&&void 0!==e?e:45}get enableSystemAppReviews(){var e
return null!==(e=this.implementation.boolean("enable-system-app-reviews"))&&void 0!==e&&e}get enableCPPInSearchAds(){return this.implementation.boolean("enableCPPsInSearchAds")||!1}get cancelPreorderItemSrv(){return this.implementation.url("cancelPreorderItemSrv")||"https://buy.itunes.apple.com/commerce/preorders/cancel"}get getCancellablePreorderItemsSrv(){return this.implementation.url("getCancellablePreorderItemsSrv")||"https://buy.itunes.apple.com/commerce/preorders/cancellable"}get arePreordersCancellable(){var e
return null!==(e=this.implementation.boolean("are-preorders-cancellable"))&&void 0!==e&&e}get enabledAdPlacements(){return c(g(this.implementation.array("enabled-ad-placements")))}get adPlacementTimeouts(){return p(m(this.implementation.dictionary("ad-placement-timeouts")))}get inAppPurchasesLearnMoreEditorialItemId(){return this.implementation.string("in-app-purchases-learn-more-editorial-item-id")}get enableExternalPurchases(){var e
return null!==(e=this.implementation.boolean("enable-external-purchase"))&&void 0!==e&&e}get enabledExternalPurchasesPlacements(){return c(g(this.implementation.array("enabled-external-purchase-placements")))}get externalPurchasesLearnMoreEditorialItemId(){return this.implementation.string("external-purchase-learn-more-editorial-item-id")}get externalBrowserLearnMoreEditorialItemId(){return this.implementation.string("external-browser-learn-more-editorial-item-id")}get sharePlayAppsEditorialItemId(){return this.implementation.string("share-play-apps-editorial-item-id")}get externalPurchasesIncludeProductPageBannerIcon(){var e
return null!==(e=this.implementation.boolean("external-purchase-product-page-banner-include-icon"))&&void 0!==e&&e}get externalPurchasesProductPageBannerUseAlternateCopy(){var e
return null!==(e=this.implementation.boolean("external-purchase-product-page-banner-use-alternate-copy"))&&void 0!==e&&e}get externalPurchasesProductPageAnnotationUseAlternateCopy(){var e
return null!==(e=this.implementation.boolean("external-purchase-product-page-annotation-use-alternate-copy"))&&void 0!==e&&e}get externalPurchasesProductPageAnnotationVariant(){return this.implementation.string("external-purchase-product-page-annotation-variant")}get newEventsForODJAreEnabled(){var e
return null!==(e=this.implementation.boolean("new-events-for-odj-are-enabled"))&&void 0!==e&&e}get defaultChart(){return m(this.implementation.dictionary("default-chart"))}get accountUrl(){var e
return null!==(e=this.implementation.url("accountUrl"))&&void 0!==e?e:tI}get redeemUrl(){var e
return null!==(e=this.implementation.url("redeemUrl"))&&void 0!==e?e:nI}get charityUrl(){var e
return null!==(e=this.implementation.url("charityUrl"))&&void 0!==e?e:"https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/buyCharityGiftWizard"}get manageSubscriptionsUrl(){var e
return null!==(e=this.implementation.url("manageSubscriptionsUrl"))&&void 0!==e?e:"https://finance-app.itunes.apple.com/subscriptions/manage?context=deeplink"}get manageSubscriptionsV2Url(){var e
return null!==(e=this.implementation.url("manageSubscriptionsV2Url"))&&void 0!==e?e:"https://apps.mzstatic.com/content/54a1317a0ad442d3965d64ef6bfaae1c/"}get adsOverrideLanguage(){return this.implementation.string("ads-override-language")}get gameControllerRecommendedRolloutRate(){var e
return null!==(e=this.implementation.double("game-controller-recommended-rollout-rate"))&&void 0!==e?e:0}get gameControllerLearnMoreEditorialItemId(){return this.implementation.string("game-controller-learn-more-editorial-item-id")}get mediaAPISearchHintsEnabled(){var e
return null!==(e=this.implementation.boolean("apps-search-suggestions-enabled"))&&void 0!==e&&e}get mediaAPISearchHintsRolloutRate(){var e
return null!==(e=this.implementation.double("apps-search-suggestions-rollout-rate"))&&void 0!==e?e:0}get mediaAPISearchFocusEnabled(){var e
return null!==(e=this.implementation.boolean("apps-search-focus-suggestions-enabled"))&&void 0!==e&&e}get supportsSearchLandingPageV2(){var e
return null!==(e=this.implementation.boolean("supports-apps-slp-v2"))&&void 0!==e&&e}get enableSearchLandingPageV2ByTreatment(){var e
return null!==(e=this.implementation.boolean("enable-apps-slp-v2-by-treatment"))&&void 0!==e&&e}get searchLandingPageV2RolloutRate(){var e
return null!==(e=this.implementation.double("apps-slp-v2-rollout-rate"))&&void 0!==e?e:0}get todayTabArcadePersonalizationRate(){var e
return null!==(e=this.implementation.double("today-tab-arcade-personalization-rate"))&&void 0!==e?e:0}get adPlacementEligibleSlotPositions(){const e=m(this.implementation.dictionary("ad-placement-eligible-slot-positions"))
return i(e)?e:{today:[{shelfIdentifier:"0",slot:0},{shelfIdentifier:"0",slot:1}],"product-page-ymal":[{shelfIdentifier:px,slot:0}]}}get managePreordersUrl(){var e
return null!==(e=this.implementation.url("preordersUrl"))&&void 0!==e?e:"https://finance-app.itunes.apple.com/preorders"}get modifyAccount(){var e
return null!==(e=this.implementation.url("modifyAccount"))&&void 0!==e?e:tI}get purchaseHistoryUrl(){return this.implementation.url("purchaseHistoryUrl")}get signup(){var e
return null!==(e=this.implementation.string(ag))&&void 0!==e?e:PI}get redeemCodeLanding(){var e
return null!==(e=this.implementation.string("redeemCodeLanding"))&&void 0!==e?e:nI}get reportProblemUrl(){return this.implementation.string("reportProblemUrl")}get unrestrictedServerSideTabBadging(){var e
return null!==(e=this.implementation.boolean("unrestricted-server-side-tab-badging"))&&void 0!==e&&e}get todayAdCondensedEnabled(){var e
return null!==(e=this.implementation.boolean("today-ad-condensed-enabled"))&&void 0!==e&&e}get enableVisionAppStoreBinCompatChecks(){var e
return null!==(e=this.implementation.boolean("enable-vision-app-store-bincompat-checks"))&&void 0!==e&&e}get safariExtensionsEditorialPageId(){return this.implementation.url("safari-extensions-editorial-page-id")}get buddyOnboardingEditorialItemId(){return this.implementation.string("buddy-onboarding-editorial-item-id")}get productPageFriendsPlayingClickEventsEnabled(){var e
return null!==(e=this.implementation.boolean("product-page-friends-playing-click-events-enabled"))&&void 0!==e&&e}get highMotionLearnMoreEditorialItemId(){return this.implementation.string("high-motion-learn-more-editorial-item-id")}get todayAdMediumLockupScreenshotsRiverSpeed(){return this.implementation.double("today-ad-medium-lockup-screenshots-river-speed")}get arcadeDownloadPackCategoriesCollectionId(){return this.implementation.string("arcade-download-packs-onboarding-collection-id")}get arcadeDownloadPackShelfTTLInSeconds(){var e
return null!==(e=this.implementation.integer("arcade-starter-pack-ttl-in-seconds"))&&void 0!==e?e:0}get appDistributionMediaAPIHost(){return this.implementation.string("app-distribution-media-api-host")}get appDistributionLanguageTag(){return this.implementation.string("app-distribution-language-tag")}get supportsAppDistribution(){var e
return null!==(e=this.implementation.boolean("supports-app-distribution"))&&void 0!==e&&e}get arcadeDownloadPackPostSubscribeTrigger(){var e
return null===(e=this.implementation.boolean("arcade-download-packs-post-subscribe-trigger"))||void 0===e||e}get enableContingentOffers(){var e
return null!==(e=this.implementation.boolean("enable-contingent-offers"))&&void 0!==e&&e}get arcadeDownloadPackRolloutRate(){var e
return null!==(e=this.implementation.double("arcade-download-packs-rollout-rate"))&&void 0!==e?e:0}get enableVisionPlatform(){var e
return null!==(e=this.implementation.boolean("enable-vision-platform"))&&void 0!==e&&e}get supportedMixedMediaRequestUsecases(){var e
return null!==(e=p(m(this.implementation.dictionary("supported-mixed-media-request-usecases"))))&&void 0!==e?e:{}}get arcadeDownloadPacksMetricsEventsEnabled(){var e
return null===(e=this.implementation.boolean("arcade-download-packs-metrics-events-enabled"))||void 0===e||e}get arcadeDownloadPacksImpressionEventsEnabled(){var e
return null===(e=this.implementation.boolean("arcade-download-packs-impression-events-enabled"))||void 0===e||e}get visionOnlyAppLearnMoreEditorialItemId(){return this.implementation.string("vision-only-app-learn-more-editorial-item-id")}get arcadeDownloadPacksCIPDeeplinkIntegrationEnabled(){var e
return null!==(e=this.implementation.boolean("arcade-download-packs-cip-deeplink-trigger"))&&void 0!==e&&e}get arcadeDownloadPacksHardwareTabBadgeUpsellIntegrationEnabled(){var e
return null!==(e=this.implementation.boolean("arcade-download-packs-hw-tabbadge-trigger"))&&void 0!==e&&e}get aboutAppStoreUrl(){return this.implementation.string("about-app-store-url")}get aboutInAppPurchasesEditorialItemId(){return this.implementation.string("about-in-app-purchases-editorial-item-id")}get requestARefundUrl(){return this.implementation.string("request-a-refund-url")}get personalizedRecommendationsToggleEnabled(){var e
return null!==(e=this.implementation.boolean("enable-personalized-recommendations-toggle"))&&void 0!==e&&e}get changePaymentMethodUrl(){return this.implementation.string("change-payment-method-url")}get aboutFrenchAppStoreEditorialItemId(){return this.implementation.string("about-app-store-editorial-item-id")}}Q$.type=(0,Bh.makeMetatype)("app-store:bag-wrapper")
class X${constructor(){this.$incidents=void 0}isValid(){return!0}}class eB extends X${constructor(e=null){super(),this.impressionMetrics=e}}class tB extends X${constructor(e,t,n,r,o,s,i,a,c,l,u,d,f,p,h,w,g,m,y,v){super(),this.buyParams=e,this.vendor=t,this.appName=n,this.bundleId=r,this.appPlatforms=o,this.isPreorder=null!=s&&s,this.excludeAttribution=null==i||i,this.metricsPlatformDisplayStyle=a,this.isRedownload=null!=l&&l,this.lineItem=c,this.preflightPackageUrl=void 0===u?null:u,this.isArcadeApp=d,this.isHalva=f,this.supportsVisionOSCompatibleIOSBinary=p,this.inAppEventId=h,this.extRefApp2=w,this.extRefUrl2=g,this.additionalHeaders=m,this.appCapabilities=y,this.isDefaultBrowser=v}}class nB extends X${constructor(e,t,n,r,o,s,i,a,c,l,u,d,f,p,h,w,g,m,y,v,A){super(),this.offerType=e,this.adamId=t,this.parentAdamId=r,this.style=null==n?kF:n,this.environment=null==o?GF:o,this.offerTint=null==s?{type:sE}:s,this.titles=null==i?{}:i,this.titleSymbolNames=null==a?{}:a,this.subtitles=null==c?{}:c,this.hasInAppPurchases=l,this.hasExternalPurchases=u,this.isDeletableSystemApp=d,this.isFree=f,this.isPreorder=p,this.offerLabelStyle=null==h?UF:h,this.hasDiscount=w,this.contentRating=g,this.subscriptionFamilyId=m,this.useAdsLocale=y,this.priceFormatted=v,this.isStreamlinedBuy=A}newOfferDisplayPropertiesChangingAppearance(e,t,n,r){return new nB(this.offerType,this.adamId,null==t||!e&&this.style===uL?this.style:t,this.parentAdamId,null==n?this.environment:n,null==r?this.offerTint:r,this.titles,this.titleSymbolNames,this.subtitles,this.hasInAppPurchases,this.hasExternalPurchases,this.isDeletableSystemApp,this.isFree,this.isPreorder,this.offerLabelStyle,this.hasDiscount,this.contentRating,this.subscriptionFamilyId,this.useAdsLocale,this.priceFormatted)}}class rB extends X${constructor(e,t,n){super(),this.offerAction=t,this.offerDisplayProperties=n,this.personalizedOfferType=e}}!function(e){e[e.scaleToFill=0]="scaleToFill",e[e.scaleAspectFit=1]="scaleAspectFit",e[e.scaleAspectFill=2]="scaleAspectFill",e[e.redraw=3]="redraw",e[e.center=4]="center",e[e.top=5]="top",e[e.bottom=6]="bottom",e[e.left=7]="left",e[e.right=8]="right",e[e.topLeft=9]="topLeft",e[e.topRight=10]="topRight",e[e.bottomLeft=11]="bottomLeft",e[e.bottomRight=12]="bottomRight"}(Vh||(Vh={}))
class oB extends X${constructor(e,t,n){super(),this.format=e,this.quality=t,this.supportsWideGamut=n}isValid(){return this.format&&void 0!==this.supportsWideGamut}}class sB extends X${constructor(e,t,n,r,o,s){super(),this.checksum=null,this.backgroundColor=null,this.textColor=null,this.style=null,this.crop="bb",this.contentMode=null,this.template=e,this.width=t,this.height=n,this.variants=r,this.backgroundColor=o,this.textColor=s}isPortrait(){return this.height>=this.width}isLandscape(){return!this.isPortrait()}isValid(){return""!==this.template&&this.width>0&&this.height>0&&this.variants.length>0}}class iB extends X${constructor(e,t){super(),this.artwork=e,this.mediaPlatform=t}}class aB extends X${constructor(e,t,n,r,o,s){super(),this.appPlatform=e,this.supplementaryAppPlatforms=n||[],this.deviceCornerRadiusFactor=r,this.mediaType=t,this.deviceBorderThickness=o,this.outerDeviceCornerRadiusFactor=s}isEqualTo(e){this.supplementaryAppPlatforms.sort(),e.supplementaryAppPlatforms.sort()
const t=this.supplementaryAppPlatforms.join(",")===e.supplementaryAppPlatforms.join(",")
return e.appPlatform===this.appPlatform&&e.mediaType===this.mediaType&&t&&e.deviceCornerRadiusFactor===this.deviceCornerRadiusFactor}}class cB{constructor(e,t){this.width=e,this.height=t}static fromNativeSize(e){return new cB(e.width,e.height)}isEqualTo(e){return e.width===this.width&&e.height===this.height}}class lB extends X${constructor(e,t,n,r,o,s){super(),this.itemName=e,this.url=t,this.developer=n,this.category=r,this.fileSize=o,this.mediaType=s}}class uB extends X${constructor(e,t,n){super(),this.context=WF,this.text=e,this.subtitle=t,this.artwork=n}}class dB extends X${constructor(e,t,n){super(),this.context=Kx,this.text=e,this.subtitle=t,this.artwork=n}}class fB extends X${constructor(e,t,n,r,o,s,i,a,c,l,u,d){super(),this.context=lF,this.adamId=e,this.storeFrontIdentifier=t,this.name=n,this.platform=r,this.icon=o,this.screenshots=s,this.videos=i,this.isMessagesOnlyApp=a,this.subtitle=c,this.genreName=l,this.messagesAppIcon=u,this.notesMetadata=d}}class pB extends X${constructor(e,t,n){super(),this.context=tg,this.text=e,this.subtitle=t,this.artwork=n}}class hB extends X${constructor(e,t,n){super(),this.metadata=e,this.url=t,this.shortUrl=n}}class wB extends X${constructor(e,t,n){super(),this.reasonId=e,this.name=t,this.uppercaseName=n}}class gB extends X${constructor(e,t=UN){super(),this.rawText=e,this.rawTextType=t}}class mB extends eB{constructor(e,t,n){super(),this.text=e,this.mediaType=t||UN,this.style=n||S$,this.alignment="localized",this.isCollapsed=!1,this.suppressVerticalMargins=!1,this.wantsCollapsedNewlines=!0}}class yB extends X${constructor(e,t=null,n=null){super(),this.actions=e,this.offerDisplayProperties=t,this.offerActionIndex=n}}class vB extends eB{}class AB extends eB{}class TB extends X${constructor(e){super(),this.isFallbackStyle=!1,this.type=e}}class PB extends eB{constructor(e,t,n,r,o,s){super(),this.bundleId=e,this.completedAchievements=t,this.totalAchievements=n,this.completedText=r,this.action=o,this.achievements=s}}class IB extends X${constructor(e){super(),this.type=e}}class SB extends X${constructor(e,t,n,r){super(),this.id=e,this.title=t,this.subtitle=n,this.status=r}}class bB extends X${constructor(e,t,n,r){super(),this.adamId=e,this.platformId=t,this.isArcade=n,this.records=r}}class CB extends X${constructor(e,t){super(),this.playerId=e,this.timestamp=t}}class kB extends X${constructor(e,t,n){super(),this.videoUrl=e,this.preview=t,this.allowsAutoPlay=n.allowsAutoPlay,this.looping=n.looping,this.canPlayFullScreen=n.canPlayFullScreen,this.showPlaybackControls=n.showPlaybackControls,this.playbackControls={...n.playbackControls},this.autoPlayPlaybackControls={...n.autoPlayPlaybackControls},this.templateMediaEvent=null}}class EB{constructor(e,t,n,r){this.fileSizeByDevice=e,this.maxDownloadSizeInBytes=t,this.maxInstallSizeInBytes=n,this.maxEssentialInstallSizeInBytes=r}}class OB extends X${constructor(e,t,n){super(),this.badge=e,this.title=t,this.subtitle=n}}const RB={top:0,left:0,bottom:0,right:0}
!function(e){e.Mini="mini",e.ExtraWide="extraWide",e.None="none"}(jh||(jh={}))
const DB="com.apple.AppStore",_B="com.apple.AppStore.BridgeStoreExtension",LB="com.apple.MobileSMS",xB="com.apple.Arcade",MB="com.apple.TVAppStore",NB="com.apple.AppStore.ProductPageExtension"
class FB extends Z${get buildType(){return this.implementation.buildType}get deviceType(){return this.implementation.deviceType}get guid(){return this.implementation.guid}get isActivityAvailable(){return this.implementation.isActivityAvailable}get isElectrocardiogramInstallationAllowed(){return this.implementation.isElectrocardiogramInstallationAllowed}get isScandiumInstallationAllowed(){return this.implementation.isScandiumInstallationAllowed}get isSidepackingEnabled(){return this.implementation.isSidepackingEnabled}get isTinkerWatch(){return this.implementation.isTinkerWatch}get newPaymentMethodEnabled(){return this.implementation.newPaymentMethodEnabled}get screenCornerRadius(){return this.implementation.screenCornerRadius}get screenSize(){return cB.fromNativeSize(this.implementation.screenSize)}get storefrontIdentifier(){return this.implementation.storefrontIdentifier}get supportsHEIF(){return this.implementation.supportsHEIF}get thinnedApplicationVariantIdentifier(){return this.implementation.thinnedApplicationVariantIdentifier}get isMandrakeSupported(){return this.implementation.isMandrakeSupported}get isCharonSupported(){return this.implementation.isCharonSupported}isPairedSystemVersionAtLeast(e){var t,n,r
return null!==(r=null===(n=(t=this.implementation).isPairedSystemVersionAtLeast)||void 0===n?void 0:n.call(t,e))&&void 0!==r&&r}deletableSystemAppCanBeInstalledOnWatchWithBundleID(e){return this.implementation.deletableSystemAppCanBeInstalledOnWatchWithBundleID(e)}deviceHasCapabilities(e){return this.implementation.deviceHasCapabilities(e)}deviceHasCapabilitiesIncludingCompatibilityCheckIsVisionOSCompatibleIOSApp(e,t){return(!this.isPad||!e.includes("healthkit"))&&(!this.isVision||!e.includes("iphone-performance-gaming-tier")&&!e.includes("apple-graphics-performance-tier"))&&this.implementation.deviceHasCapabilitiesIncludingCompatibilityCheckIsVisionOSCompatibleIOSApp(e,t)}isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(e,t,n){return this.implementation.isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(e,t,n)}isAutomaticDownloadingEnabled(){return this.implementation.isAutomaticDownloadingEnabled()}isAuthorizedForUserNotifications(){return this.implementation.isAuthorizedForUserNotifications()}isActivePairedWatchSystemVersionBelow(e){const t=e.split("."),n=f(t[0])||0,r=f(t[1])||0,o=f(t[2])||0
return!this.implementation.isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(n,r,o)}get isPhone(){return this.deviceType===U$}get isPad(){return this.deviceType===_$}get isiOS(){return this.isPhone||this.isPad}get isMac(){return this.deviceType===H$}get isTV(){return"tv"===this.deviceType}get isWatch(){return this.deviceType===W$}get isVision(){return this.deviceType===v$}}FB.type=(0,Bh.makeMetatype)("app-store:client-wrapper")
class $B extends Z${async orderedVisibleIAPs(e,t,n,r){return await new Promise((o,s)=>{const i=t.filter(e=>null!=e),a=n.filter(e=>null!=e)
this.implementation.orderedVisibleIAPs(e,i,a,r,(e,t)=>{t?s(t):o(e)})})}async visibilityForIAPs(e){return await new Promise((t,n)=>{this.implementation.visibilityForIAPs(e,(e,n)=>{t(n?{}:e)})})}}$B.type=(0,Bh.makeMetatype)("app-store:client-ordering-wrapper")
class BB extends Z${get clientIdentifier(){return this.implementation.clientIdentifier}get clientVersion(){return this.implementation.clientVersion}get deviceLocalizedModel(){return this.implementation.deviceLocalizedModel}get deviceModel(){return this.implementation.deviceModel}get deviceModelFamily(){return this.implementation.deviceModelFamily}get devicePhysicalModel(){return this.implementation.devicePhysicalModel}get deviceMarketingFamilyName(){return this.implementation.deviceMarketingFamilyName}get osBuild(){return this.implementation.osBuild}get platform(){return this.implementation.platform}isOSAtLeast(e,t,n){return this.implementation.isOSAtLeast(e,t,n)}get isiOS(){return this.platform===PM}get isMac(){return this.platform===GM}get isTV(){return this.platform===ID}get isWatch(){return this.platform===LA}get isWeb(){return"web"===this.platform}get isWindows(){return"Windows"===this.platform}get isVision(){return this.platform===$C}}BB.type=(0,Bh.makeMetatype)("app-store:host-wrapper")
class UB{constructor(){this.locData={},this.language="en"}updateLocalizationData(e,t){this.locData=e,this.language=t}localize(e,t){let n=this.locData[e]
return void 0!==n&&typeof n===y$||(n=e),t&&(n=this.replaceTokens(n,t)),n=this.replaceMarkupTokens(n,t),n}localizeWithCount(e,t,n){let r,o,s=null
return 0===t&&(r=`${e}.zero`,this.isLocalized(r)&&(s=r)),null===s&&(s=e,o=this.pluralCategory(t),o!==gN&&(r=`${e}.${o}`,this.isLocalized(r)&&(s=r))),n||(n={}),void 0===n.count&&(n.count=this.formatNumber(t.toString())),void 0===n.number&&(n.number=this.formatNumber(t.toString())),this.localize(null!=s?s:e,n)}replaceTokens(e,t){return Object.entries(t).forEach(([t,n])=>{const r="@@"+t+"@@"
e=this.replaceSubstring(e,r,n)}),e}replaceMarkupTokens(e,t){if(e.indexOf("##")<=-1)return e
let n
return t?(n={...UB.MARKUP_PARAMS},Object.entries(t).forEach(([e,t])=>{n[e]=t})):n=UB.MARKUP_PARAMS,Object.entries(n).forEach(([t,n])=>{const r="##"+t+"##"
e=e.replace(new RegExp(r,"gi"),n)}),e=e.replace(/##([^##]+)##/gi,"<$1>")}replaceSubstring(e,t,n){return e.split(t).join(n)}formatNumber(e){let t=this.locData._decimalSeparator
void 0!==t&&typeof t===y$||(t=".")
let n=this.locData._thousandsSeparator
void 0!==n&&typeof n===y$||(n=".")
const r=parseFloat(e).toString().split("."),o=r[0].split("")
for(let e=o.length-3;e>0;e-=3)o.splice(e,0,n)
return r[0]=o.join(""),r.join(t)}isLocalized(e){const t=this.locData[e]
return void 0!==t&&typeof t===y$&&(-1===e.indexOf(".")||t!==e&&(0!==t.indexOf("**")||t.lastIndexOf("**")!==t.length-2))}pluralCategory(e){const t=UB.pluralCategoryFnByLanguage[this.language]
return void 0!==t?t(e):gN}}UB.MARKUP_PARAMS={nbsp:"&nbsp;",gt:"&gt;",lt:"&lt;",copy:"\xa9"},UB.pluralCategoryDefault=function(e){return gN},UB.pluralCategoryOne=function(e){return 1===e?nx:gN},UB.pluralCategoryArabic=function(e){const t=e>>0
if(t!==e)return gN
if(0===t)return"zero"
if(1===t)return nx
if(2===t)return"two"
const n=t%100
return n>=11?r_:n>=3?iL:gN},UB.pluralCategoryFrench=function(e){return e<2&&e>=0?nx:gN},UB.pluralCategoryHebrew=function(e){const t=e>>0
return t!==e?gN:1===t?nx:2===t?"two":0==t%10&&t>10?r_:gN},UB.pluralCategoryPolish=function(e){const t=e>>0
if(t!==e)return gN
if(1===t)return nx
const n=t%10
if(n<=4&&n>=2){const e=t%100
if(e>14||e<12)return iL}return r_},UB.pluralCategoryRomanian=function(e){const t=e>>0
if(t!==e)return iL
if(0===t)return iL
if(1===t)return nx
const n=e%100
return n<=19&&n>=1?iL:gN},UB.pluralCategoryRussian=function(e){const t=e>>0
if(t!==e)return gN
const n=t%10
if(n>=5||0===n)return r_
const r=t%100
return r<=14&&r>=11?r_:1===n?nx:iL},UB.pluralCategoryFnByLanguage={zh:UB.pluralCategoryDefault,id:UB.pluralCategoryDefault,ja:UB.pluralCategoryDefault,ko:UB.pluralCategoryDefault,ms:UB.pluralCategoryDefault,th:UB.pluralCategoryDefault,vi:UB.pluralCategoryDefault,en:UB.pluralCategoryOne,ca:UB.pluralCategoryOne,da:UB.pluralCategoryOne,nl:UB.pluralCategoryOne,de:UB.pluralCategoryOne,el:UB.pluralCategoryOne,fi:UB.pluralCategoryOne,hu:UB.pluralCategoryOne,it:UB.pluralCategoryOne,nb:UB.pluralCategoryOne,no:UB.pluralCategoryOne,pt:UB.pluralCategoryOne,es:UB.pluralCategoryOne,sv:UB.pluralCategoryOne,tr:UB.pluralCategoryOne,ar:UB.pluralCategoryArabic,fr:UB.pluralCategoryFrench,iw:UB.pluralCategoryHebrew,pl:UB.pluralCategoryPolish,ro:UB.pluralCategoryRomanian,ru:UB.pluralCategoryRussian}
class GB extends Z${constructor(){super(...arguments),this.locFile=null,this.ampLoc=new UB,this.LOC_STRING_CACHE={}}get identifier(){return this.implementation.identifier}get safeIdentifier(){return this.implementation.identifier.split("_")[0]}string(e,t){return this.implementation.string(e)}stringForPreferredLocale(e,t,n,r){if(o(n))return this.string(t,r)
const s=`${t}_${n}`
let i=this.LOC_STRING_CACHE[s]
if(!i)if(i=this.implementation.stringForPreferredLocale(t,n),i&&i!==t)this.LOC_STRING_CACHE[s]=i
else{const e=this.ampLoc.localize(t)
i=e!==t?e:r||t}return i}stringWithCount(e,t,n){let r=this.implementation.stringWithCount(e,t)
if(!r||r===e){const o=this.ampLoc.localizeWithCount(e,t,n)
o&&(r=o)}return r}stringWithCounts(e,t,n){return this.implementation.stringWithCounts(e,t)}uppercased(e){return e?e.toLocaleUpperCase(this.safeIdentifier):null}decimal(e,t){let n=this.implementation.decimal(e,t)
return n||(n=typeof e===rx?`* ${e.toString()} *`:this.nullString()),n}fileSize(e){let t=this.implementation.fileSize(e)
return t||(t=this.nullString()),t}formattedCount(e){let t=this.implementation.formattedCount(e)
return t||(t=this.nullString()),t}formattedCountForPreferredLocale(e,t,n){if(o(n))return this.formattedCount(t)
let r=this.implementation.formattedCountForPreferredLocale(t,n)
return r||(r=this.nullString()),r}timeAgoWithContext(e,t){let n=this.implementation.timeAgoWithContext(e,t)
return n||(n=this.nullString()),n}formatDate(e,t){let n=this.implementation.formatDate(e,t)
return n||(n=this.nullString()),n}formatDateWithContext(e,t,n){let r=this.implementation.formatDateWithContext(e,t,n)
return r||(r=this.nullString()),r}formatDateInSentence(e,t,n){let r=this.implementation.formatDateInSentence(e,t,n)
return r||(r=this.nullString()),r}relativeDate(e){let t=this.implementation.relativeDate(e)
return t||(t=this.nullString()),t}formatDuration(e,t){let n=this.implementation.formatDuration(e,t)
return n||(n=this.nullString()),n}applyLocalizations(e,t,n){this.isLocFileLoaded(e)||(this.locFile=e,this.ampLoc.updateLocalizationData(t,n.slice(0,2)))}isLocFileLoaded(e){return this.locFile===e}normalizedLocale(e,t,n){if("yue-hant"===(t=t.toLowerCase())){const t=e.props.asString("macauStorefrontIdentifier")
return typeof n===y$&&typeof t===y$&&-1!==n.indexOf(t)?"zh-ma":"zh-hk"}return t}nullString(){return"* null *"}load(e){if(void 0===e.bag.language||null===e.bag.language)throw new Error("Bag language is not available. Unable to load localizations.")
const t=this.normalizedLocale(e,e.bag.language,e.client.storefrontIdentifier),n=`local/${t}`
if(!this.isLocFileLoaded(n)){const r=e.props.asDictionary(`localizations.${t}`)
if(null!=r)this.applyLocalizations(n,r,t)
else{const r=e.props.asDictionary("localizations.en-us")
null!=r&&this.applyLocalizations(n,r,t)}}}deviceDisplayName(e){if(e.host.deviceLocalizedModel)return e.host.deviceLocalizedModel
switch(e.client.deviceType){case U$:const e=this.string(rI)
return e===rI?hg:e
case _$:const t=this.string(oI)
return t===oI?wg:t
case"tv":const n=this.string(sI)
return n===sI?"Apple\xa0TV":n
case W$:const r=this.string(iI)
return r===iI?"Apple\xa0Watch":r
case H$:const o=this.string(aI)
return o===aI?"Mac":o
default:return null}}}GB.type=(0,Bh.makeMetatype)("app-store:loc-wrapper")
class VB extends Z${value(e){return n(this.implementation,e)}enabled(e){const t=this.value(e)
return typeof t!==JM?Boolean(t):Boolean(this.implementation.clientFeatures[e])}isNotEnabled(e){return!this.enabled(e)}asDictionary(e){return p(this.implementation,e)}asString(e){return d(this.implementation,e)}asNumber(e){return f(this.implementation,e)}asArray(e){return c(this.implementation,e)}}VB.type=(0,Bh.makeMetatype)("app-store:props-wrapper")
class jB extends Z${retrieveString(e){const t=this.implementation.retrieveString(e)
return(null==t?void 0:t.length)>0?t:null}storeString(e,t){this.implementation.storeString(t,e)}}jB.type=(0,Bh.makeMetatype)("app-store:storage-wrapper")
class HB extends Nh.ObjectGraph{configureDefaults(e,t,n,r,o,s,i,a,c,l,u,d,f,p,h,w,g,m,y,v,A,T,P,I,S,b,C,k,E,O,R,D){const _=this.addingCryptography(t).addingHost(n).addingNetwork(r).addingPlatform(o).addingPlist(s).addingRandom(i).addingServices(a).addingCookieProvider(c).addingBag(e).addingStoreMetrics(l).addingLoc(u).addingAdsLoc(d).addingDevice(f).addingClient(p).addingProperties(h).addingUser(w).addingClientOrdering(g).addingPersonalizationStore(m).addingArcade(y).addingGameCenter(v).addingDeepLinks(A).addingAppleSilicon(T).addingStorage(P).addingAds(I).addingOnDeviceRecommendationsManager(S).addingOnDeviceSearchHistoryManager(b).addingFeatureFlags(C).addingMediaToken(k).addingSearchLanding(E).addingSearchFocus(O).addingAppDistribution(R).addingTimeoutManager(D).addingAdsLoc(d)
return _.loc.load(_),_}get bag(){return this.required(Q$.type)}addingBag(e){return this.addingBagWrapper(new Q$(e,this.host))}addingBagWrapper(e){return this.adding(Q$.type,e)}get cryptography(){return this.required($h.cryptography)}addingCryptography(e){return this.adding($h.cryptography,e)}get host(){return this.required(BB.type)}addingHost(e){return this.addingHostWrapper(new BB(e))}addingHostWrapper(e){return this.adding(BB.type,e)}get network(){return this.required($h.net)}addingNetwork(e){return this.adding($h.net,e)}get platform(){return this.required($h.platform)}addingPlatform(e){return this.adding($h.platform,e)}get plist(){return this.required($h.plist)}addingPlist(e){return this.adding($h.plist,e)}get random(){return this.required($h.random)}addingRandom(e){return this.adding($h.random,e)}get services(){return this.required($h.services)}addingServices(e){return this.adding($h.services,e)}get cookieProvider(){return this.required($h.cookieProvider)}addingCookieProvider(e){return this.adding($h.cookieProvider,e)}get fetchTimingMetricsBuilder(){return this.optional(Fh.fetchTimingMetricsBuilderType)}addingFetchTimingMetricsBuilder(e){return this.adding(Fh.fetchTimingMetricsBuilderType,e)}get storeMetrics(){return this.required(xw)}addingStoreMetrics(e){return this.adding(xw,e)}get loc(){return this.required(GB.type)}addingLoc(e){return this.addingLocWrapper(new GB(e))}addingLocWrapper(e){return this.adding(GB.type,e)}get adsLoc(){return this.required(Yw)}addingAdsLoc(e){return this.adding(Yw,e)}get device(){return this.required(Mw)}addingDevice(e){return this.adding(Mw,e)}get client(){return this.required(FB.type)}addingClient(e){return this.addingClientWrapper(new FB(e))}addingClientWrapper(e){return this.adding(FB.type,e)}get props(){return this.required(VB.type)}addingProperties(e){return this.addingPropertiesWrapper(new VB(e))}addingPropertiesWrapper(e){return this.adding(VB.type,e)}get user(){return this.required(Nw)}addingUser(e){return this.adding(Nw,e)}get clientOrdering(){return this.required($B.type)}addingClientOrdering(e){return this.addingClientOrderingWrapper(new $B(e))}addingClientOrderingWrapper(e){return this.adding($B.type,e)}get personalizationStore(){return this.required(Fw)}addingPersonalizationStore(e){return this.adding(Fw,e)}get arcade(){return this.required($w)}addingArcade(e){return this.adding($w,e)}get gameCenter(){return this.required(Bw)}addingGameCenter(e){return this.adding(Bw,e)}get deepLinks(){return this.required(Uw)}addingDeepLinks(e){return this.adding(Uw,e)}get appleSilicon(){return this.required(K$.type)}addingAppleSilicon(e){return this.addingAppleSiliconWrapper(new K$(e))}addingAppleSiliconWrapper(e){return this.adding(K$.type,e)}get storage(){return this.required(jB.type)}addingStorage(e){return this.addingStorageWrapper(new jB(e))}get searchLanding(){return this.required(qw)}get searchFocus(){return this.optional(zw)}addingSearchLanding(e){return this.adding(qw,e)}addingSearchFocus(e){return this.adding(zw,e)}addingStorageWrapper(e){return this.adding(jB.type,e)}get ads(){return this.required(Gw)}addingAds(e){return this.adding(Gw,e)}get onDeviceRecommendationsManager(){return this.required(Vw)}addingOnDeviceRecommendationsManager(e){return this.adding(Vw,e)}get onDeviceSearchHistoryManager(){return this.required(jw)}addingOnDeviceSearchHistoryManager(e){return this.adding(jw,e)}get featureFlags(){return this.required(Hw)}addingFeatureFlags(e){return this.adding(Hw,e)}get mediaToken(){return this.required(Ww)}addingMediaToken(e){return this.adding(Ww,e)}get appDistribution(){return this.required(Jw)}addingAppDistribution(e){return this.adding(Jw,e)}get timeoutManager(){return this.required(Zw)}addingTimeoutManager(e){return this.adding(Zw,e)}isAvailable(e){return s(this.optional(e))}}class WB{constructor(e){this.currentReferral=null,this.isMetricsReferralContextRequired=!0,this.isEventDetailClickEventOverrideNecessary=!e.host.isOSAtLeast(16,2,0)}static createSharedMetricsReferralContext(e){WB.shared||(WB.shared=new WB(e))}get shouldUseJSReferralData(){return this.isMetricsReferralContextRequired&&s(this.currentReferral)}get activeReferralData(){return this.shouldUseJSReferralData&&this.currentReferral.isActive?this.currentReferral.data:null}setReferralDataForProduct(e,t){if(!this.isMetricsReferralContextRequired||r(t))return
const n=d(t,C$),o=d(t,NR),s=h(t,PN)
this.currentReferral={id:`${e}_${Date.now()}`,data:{extRefApp2:n,extRefUrl2:o,kind:s,refUrl:null},isActive:!1,productPageExtensionInfo:null}}setReferralDataForProductPageExtensionIfNecessary(e){if(!this.isMetricsReferralContextRequired)return
const t=d(e,fM),o=d(e,LD)
if(!qB.isProductPageExtension(e)||!qB.isValidPageEvent(e)||r(t)||r(o))return
const s=d(e,W_),i=d(e,xb)
let a
switch(i){case Qy:a=m(n(e,Xy))
break
case Mb:a=m(n(e,ev))
break
default:a={}}const c=d(e,qL)
this.currentReferral={id:`${t}_${Date.now()}`,data:{extRefApp2:o,extRefUrl2:s,refUrl:c,kind:{name:i,context:a}},isActive:!1,productPageExtensionInfo:{productId:t}},this.addReferralContextToMetricsFieldsIfNecessary(e)}beginReferralContextForPageIfNecessary(e){this.isMetricsReferralContextRequired&&qB.isValidPageEvent(e)&&qB.isReferralForEvent(this.currentReferral,e)&&(this.currentReferral.isActive=!0)}endReferralContextIfNecessaryForPageEvent(e){this.isMetricsReferralContextRequired&&qB.isValidPageEvent(e)&&qB.isReferralForEvent(this.currentReferral,e)&&(this.currentReferral=null)}addReferralContextToMetricsFieldsIfNecessary(e){var t
this.isMetricsReferralContextRequired&&(e[WB.referralContextEventField]=null===(t=this.currentReferral)||void 0===t?void 0:t.id)}removeReferralContextInfoFromMetricsEvent(e){this.isMetricsReferralContextRequired&&delete e[WB.referralContextEventField]}addReferralDataToEventIfNecessary(e){if(!r(this.activeReferralData)&&qB.shouldAddReferralDataToEvent(e)&&(!qB.isEventDetailsClickEvent(e)||this.isEventDetailClickEventOverrideNecessary))switch(qB.isEventDetailsClickEvent(e)&&(e[fN]=zR),e[LD]=this.activeReferralData.extRefApp2,e[W_]=this.activeReferralData.extRefUrl2,i(this.activeReferralData.refUrl)&&(e[qL]=this.activeReferralData.refUrl),e[xb]=this.activeReferralData.kind.name,e[xb]){case Qy:e[Xy]=this.activeReferralData.kind.context
break
case Mb:e[ev]=this.activeReferralData.kind.context}}}WB.referralContextEventField="referralContextId"
class qB{static isProductPageExtension(e){return d(e,C$)===qB.productPageExtensionAppId}static isValidPageEvent(e){const t=d(e,fN)
return qB.validPageEventTypes.has(t)}static isReferralForEvent(e,t){var n
if(r(e))return!1
const o=t[WB.referralContextEventField],i=d(t,fM)
return s(o)?o===e.id:!(!qB.isProductPageExtension(t)||!s(i))&&i===(null===(n=null==e?void 0:e.productPageExtensionInfo)||void 0===n?void 0:n.productId)}static shouldAddReferralDataToEvent(e){return e.eventType!==Lx||this.isEventDetailsClickEvent(e)}static isEventDetailsClickEvent(e){if(e.eventType!==Lx)return!1
const t=e.location,n=null==t?void 0:t[0]
return s(n)&&n.locationType===zR}}qB.productPageExtensionAppId="com.apple.AppStore.ProductPageExtension",qB.eventDetailsPageType=zR,qB.validPageEventTypes=new Set([xx,Nb,qB.eventDetailsPageType])
const zB=(Hh=e(447)).PageInvocationPoint
zB[c$]=c$,zB[wI]=wI,zB[wF]=wF,zB[iE]=iE
const YB="xp_amp_appstore"
class JB{constructor(e,t,n,r,o=!1){this.fields=e,this.includingFields=t,this.excludingFields=n,this.topic=r,this.shouldFlush=o}}class ZB extends X${constructor(e){super(),this.fields=e}}class KB extends X${constructor(e){super(),this.data=e||[],this.custom={}}addMetricsData(e){this.data.push(e)}addManyMetricsData(e){for(const t of e)this.addMetricsData(t)}clearAll(){this.data.length=0}}class QB extends X${constructor(){super(),this.instructions=[],this.custom={}}addInstruction(e){this.instructions.push(e)}addManyInstructions(e){for(const t of e)this.addInstruction(t)}addData(e,t){const n={data:e,invocationPoints:t}
this.instructions.push(n)}addManyData(e,t){for(const n of e)this.addData(n,t)}}class XB{constructor(e,t,n){this.fields=e,this.id=t,this.custom=n}}class eU extends XB{constructor(e,t){super(e.fields,e.id,e.custom||{}),void 0!==this.custom&&(this.custom.isFast=t),this.isFast=t}}class tU extends eB{constructor(e){super(),this.title=null,this.artwork=null,this.presentationStyle=[],this.actionClass=e,this.actionMetrics=new KB}}class nU extends tU{constructor(e,t){super(tE),this.page=e,this.pageUrl=t,this.pageData=null,this.referrerData=void 0,this.presentationContext=kF,this.animationBehavior=kF,this.origin="inapp"}}class rU extends tU{constructor(e){super(Kw),this.navigationTab=e,this.actions=[],this.popToRoot=!1}}class oU extends tU{constructor(e,t){super("TabBadgeAction"),this.navigationTab=e,this.text=t}}class sU extends tU{constructor(e,t=!0){super("ExternalUrlAction"),this.url=e,this.isSensitive=t}}class iU extends tU{constructor(e){super("CompoundAction")
const t=[]
for(const n of e)this.actionMetrics.addManyMetricsData(n.actionMetrics.data),Object.assign(this.actionMetrics.custom,n.actionMetrics.custom),n.actionMetrics.clearAll(),t.push(n)
this.actions=t}}class aU extends tU{constructor(e,t,n){super("OfferAction"),this.title=e,this.adamId=t,this.purchaseConfiguration=n,n&&(this.bundleId=n.bundleId,this.lineItem=n.lineItem),this.includeBetaApps=!1}}class cU extends tU{constructor(e,t){super("OfferConfirmationAction"),this.buyAction=e,this.confirmationInitiationAction=t}}class lU extends tU{constructor(){super("OfferAlertAction"),this.title=null,this.message=null,this.footerMessage=null,this.isCancelable=!0,this.shouldCheckForAvailableDiskSpace=!1,this.checkRestrictionsForContentRating=null,this.remoteControllerRequirement=ox,this.shouldCheckForGameController=!1,this.shouldIncludeActiveAccountInFooterMessage=!1,this.shouldPromptForConfirmation=!1,this.completionAction=null}}class uU extends tU{constructor(e,t){super("CancelPreorderAction"),this.preorderAdamId=e,this.isArcade=t}}class dU extends tU{constructor(e,t,n,r,o){super("InAppPurchaseAction"),this.productIdentifier=e,this.appAdamId=t,this.appBundleId=n,this.installRequiredAction=r,this.minimumShortVersionSupportingInAppPurchaseFlow=o}}class fU extends tU{constructor(e,t){super("OfferStateAction"),this.title=t.title,this.adamId=e,this.defaultAction=t,this.includeBetaApps=!1}}class pU extends tU{constructor(e,t=C$){super("OpenAppAction"),this.adamId=e,this.destination=t}}class hU extends tU{constructor(e){super("ArcadePackOfferAction"),this.offerActions=e}}class wU extends tU{constructor(e){super("HttpAction"),this.url=e,this.method=o_,this.headers={},this.body=null,this.isStoreRequest=!1,this.needsAuthentication=!1,this.retryCount=0,this.disableCache=!1,this.successAction=null,this.failureAction=null}}class gU{constructor(e,t,n,r){this.key=e,this.target=t,this.inputType=n,this.title=r,this.isRequired=!0,this.maximumLength=null}}class mU extends tU{constructor(e){super("HttpTemplateAction"),this.message=null,this.url=e,this.method=o_,this.headers={},this.body=null,this.parameters=[],this.isStoreRequest=!1,this.needsAuthentication=!1,this.retryCount=0,this.disableCache=!1,this.successAction=null,this.failureAction=null}}class yU extends mU{}class vU extends tU{constructor(e,t){super("WriteReviewAction"),this.adamId=e,this.url=t}}class AU extends tU{constructor(e,t,n){super(null!=n?n:"PageTabChangeAction"),this.selectedTabId=e,this.title=t}}class TU extends tU{constructor(){super("GameCenterDashboardAction")}}class PU extends tU{constructor(e){super("SheetAction"),this.actions=e,this.isCancelable=!1,this.cancelTitle=null,this.message=null,this.style=T$,this.isCustom=!1,this.destructiveActionIndex=null}}class IU extends tU{constructor(e){super("AlertAction"),this.style=e,this.title=null,this.message=null,this.isCancelable=!1,this.cancelTitle=null,this.cancelAction=null,this.buttonActions=[],this.buttonTitles=[],this.destructiveActionIndex=null}}class SU extends eB{constructor(e,t){super(),this.activityType=e,this.action=t}}class bU extends tU{constructor(e,t,n=Qw){super("ShareSheetAction"),this.data=e,this.activities=t,this.shareSheetStyle=n}}class CU extends tU{constructor(e){super("ReportConcernAction"),this.reasons=e}}class kU extends tU{constructor(e,t){super("ProductPageScrollAction"),this.section=e,this.clicksOnScroll=t}}class EU extends tU{constructor(e,t,n,r){super("ArcadeAction"),this.productIdentifier=e,this.appAdamId=t,this.postSubscribeAction=r,this.subscriptionToken=n}}class OU extends tU{constructor(e,t,n){super("FamilyCircleAction"),this.clientName=e,this.eventType=t,this.additionalParameters=n}}class RU extends tU{constructor(){super("BlankAction")}}class DU extends tU{constructor(e,t){super("SearchAdAction"),this.action=e,this.searchAd=t}}class _U extends tU{constructor(e,t){super("RateLimitedAction"),this.actionKey=e,this.primaryAction=t}}class LU extends tU{constructor(e,t,n,r){super("ArcadeSubscriptionStateAction"),this.notSubscribedAction=e,this.purchasingAction=t,this.subscribedAction=n,this.unknownAction=r}}class xU extends tU{constructor(e){super("GameCenterPlayerProfileAction"),this.playerId=e}}class MU extends tU{constructor(e){super("GameCenterAchievementsAction"),this.bundleId=e}}class NU extends tU{constructor(e){super("GameCenterInvitePlayerAction"),this.contactId=e}}class FU extends tU{constructor(e){super("GameCenterDenylistPlayerAction"),this.contactId=e}}class $U extends tU{constructor(e,t){super("EngagementToggleAction"),this.identifier=e,this.value=t}}class BU extends tU{constructor(e,t,n,r,o,s){super("ShelfBasedPageScrollAction"),this.shelfId=e,this.notPurchasedShelfId=t,this.purchasedShelfId=n,this.adamId=r,this.index=o,this.clicksOnScroll=s}}class UU extends tU{constructor(){super("InvalidateAllWidgetsAction")}}class GU extends tU{constructor(e,t,n){super("AppLaunchTrampolineAction"),this.bundleId=e,this.payloadUrl=t,this.fallbackAction=n}}class VU extends tU{constructor(e,t,n,r,o,s,i,a,c){super("CreateCalendarEventAction"),this.startDate=e,this.endDate=t,this.isAllDay=n,this.name=r,this.location=o,this.notes=s,this.url=i,this.notAuthorizedAction=a,this.availability=c}}class jU extends tU{constructor(e){super("CopyTextAction"),this.text=e}}class HU extends tU{constructor(){super("ClearAppUsageDataAction")}}class WU extends tU{constructor(){super("ClearSearchHistoryAction")}}class qU extends tU{constructor(e){super("AdInteractionAction"),this.adActionMetrics=e}}class zU extends tU{constructor(e){super("CrossfireReferralAction"),this.referrerData=e}}const YU="x-as3-internal",JU=Gk,ZU="itms-apps",KU="appstore-ui",QU=Y$,XU="WebObjects/MZStore.woa/wa",eG=EP,tG="install",nG="viewGrouping",rG="viewSoftware",oG=mx,sG=mF,iG="viewRoom",aG=C_,cG=C$,lG=Rv,uG=OP,dG=IF,fG=E$,pG=Tx,hG=sx,wG="todayCardPreview",gG=AD,mG=gF,yG=AR,vG=RD,AG=zx,TG="searchLandingPage",PG=yC,IG="editorialPage",SG="storepreview.apple.com",bG=lF,CG=mx,kG="spamBlockingExtensions",EG="safariExtensions",OG="launchApp",RG="sharePlayApps",DG="buddyOnboarding",_G=new Set([SG,"preview.apps.apple.com"]),LG="id",xG="ids",MG=Q_,NG="fcId",FG="fetchData",$G="isTodaySection",BG="isTodayFeedPreview",UG=mF,GG="bundleIdentifier",VG=aF,jG=kM,HG=C_,WG=dL,qG=oM,zG="v0",YG=CF,JG=Fb,ZG=db,KG="isSubscribed",QG="isTrialAvailable",XG="isTrialEnrolled",eV="groupingFeaturedContentId",tV="nativeGroupingShelfId",nV="isGameCenterActivityFeedShelf",rV="isGameCenterPlayerShelf",oV="isGameCenterAchievementsShelf",sV="isGameCenterContinuePlayingShelf",iV="isGameCenterPopularWithYourFriendsShelf",aV="isGameCenterSuggestedFriendsShelf",cV="isGameCenterReengagementShelf",lV="isOnDeviceSearchHistoryShelf",uV="isArcadeDownloadPackShelfPlaceholder",dV="onDeviceRecommendationsUseCase",fV="isPurchasesApp",pV="isViewOnly",hV=RD,wV="recoMetrics",gV="showingFallbackMedia",mV="path",yV=Vy,vV=sx,AV="appId",TV="isPPT",PV=oF,IV=N_,SV="includePostSubscribeAttribution",bV=$N,CV="requestDescriptor",kV="ageRating",EV=Qg,OV="multiplayerSupport",RV=JI,DV=cm,_V=CM,LV="eventid",xV=GI,MV="isShelfWithAd",NV="shelfWithAdPlacementType",FV="refreshType",$V="isPreloading",BV=z$,UV="todayCardConfig",GV=TC,VV=ZO,jV="editorialPageId",HV="inAppPurchaseId",WV="productUrl",qV=CO,zV="minExternalVersionId",YV=eF,JV=oF,ZV=C$,KV=E$,QV="productPageSimilarItems",XV=/^([a-z][a-z0-9.+-]*:)(\/\/)?([\S\s]*)/i,ej=/([^=?&]+)=?([^&]*)/g,tj=[CR,YM,FN,Zx]
class nj{constructor(e){if(this.query={},!e)return
let t=e
const n=XV.exec(e)
if(n){let e=n[1]
e&&(e=e.split(":")[0]),this.protocol=e,t=n[3]}let r={remainder:t,result:void 0}
for(const e of tj){if(!r.remainder)break
switch(e){case CR:r=y(r.remainder,"#",Xk),this.hash=r.result
break
case YM:r=y(r.remainder,"?",Xk),r.result&&(this.query=nj.queryFromString(r.result))
break
case FN:r=y(r.remainder,"/",Xk),r.result&&(this.pathname="/"+r.result)
break
case Zx:if(r.remainder){const e=y(r.remainder,"@",WP),t=e.result,n=e.remainder
if(t){const e=t.split(":")
this.username=decodeURIComponent(e[0]),this.password=decodeURIComponent(e[1])}if(n){const e=n.split(":")
this.host=e[0],this.port=e[1]}}break
default:throw new Error("Unhandled case!")}}}set(e,t){if(!t)return this
switch(e===YM&&typeof t===y$&&(t=nj.queryFromString(t)),e){case IN:this.protocol=t
break
case qP:this.username=t
break
case zP:this.password=t
break
case YP:this.port=t
break
case FN:this.pathname=t
break
case YM:this.query=t
break
case CR:this.hash=t
break
default:this[e]=t}return this}get(e){switch(e){case IN:return this.protocol
case qP:return this.username
case zP:return this.password
case YP:return this.port
case FN:return this.pathname
case YM:return this.query
case CR:return this.hash
default:return this[e]}}append(e,t){const n=this.get(e)
let r
if(e===YM)typeof t===y$&&(t=nj.queryFromString(t)),r=typeof n===y$?{existingValue:n,...t}:{...n,...t}
else{let o=n
o||(o="")
let s=o
if(e===FN){const e=o.length
e&&"/"===o[e-1]||(s+="/")}s+=t,r=s}return this.set(e,r)}param(e,t){return e?(this.query||(this.query={}),this.query[e]=t,this):this}removeParam(e){return e&&this.query?(void 0!==this.query[e]&&delete this.query[e],this):this}path(e){return this.append(FN,e)}pathExtension(){var e
if((0,Gh.isNothing)(this.pathname))return null
const t=null===(e=this.pathname.split("/").filter(e=>e.length>0).pop())||void 0===e?void 0:e.split(".")
return void 0===t||t.filter(e=>""!==e).length<2?null:t.pop()}pathComponents(){return this.pathname?this.pathname.split("/").filter(e=>e.length>0):[]}popPathComponent(){if(!this.pathname)return null
const e=this.pathname.slice(this.pathname.lastIndexOf("/")+1)
return 0===e.length?null:(this.pathname=this.pathname.slice(0,this.pathname.lastIndexOf("/")),e)}build(){return this.toString()}toString(){let e=""
return this.protocol&&(e+=this.protocol+"://"),this.username&&(e+=encodeURIComponent(this.username),this.password&&(e+=":"+encodeURIComponent(this.password)),e+="@"),this.host&&(e+=this.host,this.port&&(e+=":"+this.port)),this.pathname&&(e+=this.pathname,e.endsWith("/")&&this.pathname.length>0&&(e=e.slice(0,-1))),this.query&&Object.keys(this.query).length&&(e+="?"+nj.toQueryString(this.query)),this.hash&&(e+="#"+this.hash),e}static queryFromString(e){const t={}
let n=ej.exec(e)
for(;n;){const r=decodeURIComponent(n[1]),o=decodeURIComponent(n[2])
t[r]=o,n=ej.exec(e)}return t}static toQueryString(e){let t="",n=!0
for(const r of Object.keys(e)){n||(t+="&"),n=!1,t+=encodeURIComponent(r)
const o=e[r]
o&&o.length&&(t+="="+encodeURIComponent(o))}return t}static from(e){return new nj(e)}static fromComponents(e,t,n,r,o){const s=new nj
return s.protocol=e,s.host=t,s.pathname=n,s.query=r,s.hash=o,s}}const rj=[JU,ZU,"itms-appss","itms-messages","itms-messagess","itms-watch","itms-watchs","macappstore","macappstores","com.apple.tvappstore","com.apple.TVAppStore","com.apple.Arcade"]
class oj{constructor(e){var t
this.identifier=e.identifier,this._protocol=null==(t=e.protocol)?null:t,this._hostName=e.hostName,e.path?(this._pathComponents=e.path.split("/").filter(e=>e.length>0),this._pathParameterMap=function(e){const t={}
return e.forEach((e,n)=>{P(e)&&(t[e]=n)}),t}(this._pathComponents)):(this._pathComponents=null,this._pathParameterMap=null),this._pathExtension=e.pathExtension,this._query=function(e){const t=[]
if(!e)return t
for(const n of e){const e=n.split("=")
let r=e[0]
const o=-1!==r.indexOf("?")
r=r.replace("?","")
let s=null
e.length>1&&(s=decodeURIComponent(e[1])),t.push({key:r,value:s,optional:o})}return t}(e.query),this._hash=e.hash,this._regex=e.regex,e.exclusions?this._exclusions=e.exclusions.map(function(e){return new oj(e)}):this._exclusions=null}matches(e){var t
if(this._regex){if(!this._regex.length)return!1
let t=!1
for(const n of this._regex)if(n.test(e.toString())){t=!0
break}if(!t)return!1}if(this._protocol&&e.protocol!==this._protocol)return!1
if(this._hostName&&e.host!==this._hostName)return!1
if(this._pathComponents){const t=this._pathComponents,n=e.pathComponents()
if(t.length!==n.length)return!1
const r=t.length
for(let e=0;e<r;e++){const r=t[e]
if(!P(r)&&r!==n[e])return!1}}if(this._pathExtension&&e.pathExtension()!==this._pathExtension)return!1
if(this._query)for(const n of this._query){const r=null===(t=e.query)||void 0===t?void 0:t[n.key]
if(!r&&!n.optional)return!1
if(n.value&&n.value!==r)return!1}if(this._hash&&e.hash!==this._hash)return!1
if(this._exclusions)for(const t of this._exclusions){if(t._exclusions)throw Error("Matching exclusion rules with further exclusion rules may introduce significant code-complexity and/or reduce the ease with which developers are able to reason about your desired goals. Are there any simpler options?")
if(t.matches(e))return!1}return!0}extractParameters(e){var t,n
const r={}
if(null!==this._pathComponents&&null!==this._pathParameterMap){const t=e.pathComponents()
for(const e of Object.keys(this._pathParameterMap)){const n=I(e),o=S(t[this._pathParameterMap[e]],e)
r[n]=decodeURIComponent(o)}}if(this._query)for(const o of this._query)r[o.key]=null!==(n=null===(t=e.query)||void 0===t?void 0:t[o.key])&&void 0!==n?n:void 0
return r}}class sj{constructor(){this._routeMappings=[]}associate(e,t){const n=[]
for(const t of e)n.push(new oj(t))
this._routeMappings.push({route:n,object:t})}routedObjectForUrl(e){let t=typeof e===y$?new nj(e):e
t=function(e){let t=typeof e===y$?new nj(e):e
if(!T(t))return t
const n=t.query,r=null==n?void 0:n.url
return(!t.host||0===t.host.length)&&null!=r&&(t=new nj(r),(null==n?void 0:n.dsid)&&(t=t.append(YM,{dsid:n.dsid})),(null==n?void 0:n[JP])&&(t=t.append(YM,{signatureResumption:n[JP]}))),nj.fromComponents(JU,t.host,t.pathname,t.query,t.hash)}(t),t=function(e){var t,n,r
const o=typeof e===y$?new nj(e):e
if(!T(o))return o
const s=o.build()
let i,a=void 0===o.query?void 0:v(o.query)
const c={},l=[{key:"MZSearch.woa",action:c$},{key:c$,action:c$},{key:"buyLandingPage",action:d_},{key:"buyCharityGiftWizard",action:lg},{key:"longUrlHandler",action:ZP},{key:fE,action:fE}],u={"accessory-lookup":"accessoryLookup","finance-app":gF,viewEula:zx,software:q$,primaryTerm:c$}
let d=!1
for(const e of Object.keys(c))if(o.host&&-1!==o.host.indexOf(e)){d=!0,i=c[e]
break}let f=!1
for(const e of l){const t=e.key
if(o.pathname&&-1!==o.pathComponents().indexOf(t)){f=!0,i=e.action,void 0!==(null==a?void 0:a[t])&&delete a[t]
break}}for(const e of Object.keys(u)){const r=void 0!==(null===(t=o.query)||void 0===t?void 0:t[e])&&null!==o.query[e],s=(null===(n=o.query)||void 0===n?void 0:n[CF])&&-1!==o.query[CF].indexOf(e)
if(r||s){i=u[e],void 0!==(null==a?void 0:a[e])&&delete a[e]
break}}if(i===gF&&-1!==s.indexOf(KP)&&(i="addToPassbook",void 0!==a&&delete a[KP]),i){const e=null,t=null,n={action:i}
i===u_&&void 0!==a&&(a.code||a[QP])?n.code=a.code||a[QP]:i!==gF&&i!==fE&&i!==ZP||!f&&!d||(n[lE]=o.toString())
const s=null===(r=o.query)||void 0===r?void 0:r[TI]
return i===c$&&void 0!==s&&void 0!==a&&(a[TI]=s),a={...a,...n},nj.fromComponents(o.protocol,t,e,a,o.hash)}return o}(t)
for(const e of this._routeMappings)for(const n of e.route)if(n.matches(t))return{normalizedUrl:t,parameters:n.extractParameters(t),object:e.object,matchedRuleIdentifier:n.identifier}
return{normalizedUrl:t,parameters:null,object:null,matchedRuleIdentifier:null}}}class ij{constructor(e){this._count=e,this._triggers=[]}countDown(){if(0!==this._count&&(this._count--,0===this._count)){for(const e of this._triggers)e()
this._triggers.splice(0)}}then(e){0===this._count?e():this._triggers.push(e)}}class aj extends X${constructor(e,t,n){super(),this.title=e,this.annotations=t,this.forceExpanded=n}}class cj extends X${constructor(e,t,n,r){super(),this.title=e,this.summary=n,this.items=t,this.shouldAlwaysPresentExpanded=!1,this.linkAction=r}}class lj extends X${constructor(e,t,n,r){super(),this.text=e,this.heading=t,this.subText=n,this.listText=r}}class uj extends X${constructor(e){super(),this.annotationGroups=e}}class dj extends eB{constructor(e){super(),this.art=e}}class fj extends X${constructor(e,t){super(),this.allowsAutoPlay=!0,this.type=e,this.lockup=t}}class pj extends X${constructor(e,t,n,r,o,s,i,a){super(),this.message=e,this.focusedMessage=t,this.action=n,this.fullProductAction=r,this.leadingArtwork=o,this.leadingArtworkTintColor=s,this.includeBackgroundBorder=i,this.kind=a}}class hj extends X${constructor(e){super(),this.lockup=e}}class wj extends X${}class gj extends X${constructor(e,t,n){super(),this.items=e,this.mediaPlatform=t,this.allPlatforms=n}}class mj extends X${constructor(e,t,n,r,o){super(),this.title=e,this.caption=t,this.linkAction=n,this.artwork=r,this.artworkTintColor=o}}class yj extends X${constructor(e,t,n){super(),this.paragraph=e,this.developerAction=n,this.developerLinks=t}}class vj extends X${constructor(e){super(),this.text=e,this.presentationStyle=[],this.clickAction=null}}class Aj extends X${}class Tj extends eB{isValid(){return!!this.title&&!(!this.icon||!this.icon.isValid())&&super.isValid()}}class Pj extends Tj{constructor(){super(),this.screenshots=[],this.screenshotsDisplayStyle=RR}isValid(){return!(!this.screenshots||!this.screenshots.length)&&super.isValid()}}class Ij extends Tj{constructor(){super(),this.screenshots=[],this.trailers=[],this.overrideLockupPosition=null,this.screenshotsDisplayStyle="control",this.metadataRibbonItems=[]}}class Sj extends X${constructor(e){super(),this.viewType=e,this.moduleType=null,this.labelText=null,this.borderedText=null,this.starRating=null,this.secondaryViewPlacement=n$,this.artwork=null}}class bj extends Tj{isValid(){return!(!this.trailers||!this.trailers.isValid())&&!(!this.editorialTagline||0===this.editorialTagline.length)&&super.isValid()}}class Cj extends X${constructor(e,t){super(),e&&(this.videos=e),t&&(this.mediaPlatform=t)}isValid(){return this.videos&&this.videos.length>0&&super.isValid()}}class kj extends Tj{}class Ej extends eB{}class Oj extends Ij{isValid(){if(this.children)for(const e of this.children)if(!e.isValid())return!1
return super.isValid()}}class Rj extends eB{constructor(e,t,n,r,o=!1){super(),this.isDark=!1,this.artwork=e,this.lockup=t,this.caption=n,this.title=r,this.isDark=o}isValid(){return this.lockup.isValid()&&this.artwork.isValid()}}class Dj extends X${constructor(e,t,n){super(),this.text=e,this.style=t,this.mediaType=n,this.wantsCollapsedNewlines=!0}}class _j extends eB{constructor(){super(),this.adamId=null,this.caption=null,this.title=null,this.subtitle=null,this.artwork=null,this.shelfBackground=null,this.clickAction=null,this.decorations=[],this.flowPreviewActionsConfiguration=null,this.appEventFormattedDates=null,this.mediaOverlayStyle=null}isValid(){return!!this.clickAction&&!(!this.artwork||!this.artwork.isValid())&&!(!this.caption||!this.title)&&super.isValid()}}class Lj extends eB{constructor(){super(),this.flowPreviewActionsConfiguration=null}}class xj extends eB{constructor(e,t){super(),this.title=e,this.clickAction=t,this.artwork=null,this.accessibilityLabel=null}isValid(){var e,t
const n=null!==(t=null===(e=this.artwork)||void 0===e?void 0:e.isValid())&&void 0!==t&&t
return(0,Gh.isSome)(this.clickAction)&&n&&super.isValid()}}class Mj extends eB{constructor(){super(),this.artworks=null,this.accessibilityLabel=null,this.shortEditorialDescription=null,this.clickAction=null,this.personalizationStyle=UF,this.shelfBackground=null,this.flowPreviewActionsConfiguration=null,this.editorialDisplayOptions={}}isValid(){var e,t,n,r
const o=null!==(t=null===(e=this.artworks)||void 0===e?void 0:e.every((e,t)=>(0,Gh.isSome)(e)&&e.isValid()))&&void 0!==t&&t,s=(null!==(r=null===(n=this.collectionIcons)||void 0===n?void 0:n.length)&&void 0!==r?r:0)>0
return(0,Gh.isSome)(this.clickAction)&&(o||s)&&super.isValid()}}class Nj extends eB{constructor(e,t,n,r=!0){super(),this.descriptionText=e,this.summaryText=t,this.clickAction=n,this.linkPresentationEnabled=r}}class Fj extends X${constructor(e,t){super(),this.styledText=e,this.linkedSubstrings=t}}class $j extends X${constructor(e,t,n,r,o){super(),this.text=e,this.clickAction=t,this.type=n,this.systemImageName=r,this.adamIdForPurchaseHistoryFilter=o}}class Bj extends X${constructor(e){super(),this.disclaimer=e}}class Uj extends X${constructor(e){super(),this.buttons=e}}class Gj extends X${constructor(e,t){super(),this.title=e,this.action=t}}class Vj extends eB{constructor(e,t,n=UN,r=null,o=null,s=null){super(),this.artwork=e,this.isFullWidth=t,this.hasRoundedCorners=typeof s===a_?s:!this.isFullWidth,this.ordinal=o,this.caption=r,this.captionMediaType=n}}class jj extends eB{constructor(e,t,n=UN,r=null,o=null,s=null){super(),this.video=e,this.isFullWidth=t,this.hasRoundedCorners=typeof s===a_?s:!this.isFullWidth,this.ordinal=o,this.caption=r,this.captionMediaType=n}}class Hj extends X${constructor(e,t,n,r){super(),this.type=e,this.title=t,this.hasDivider=n,this.action=r}}class Wj extends eB{constructor(e,t,n,r){super(),this.text=e,this.credit=t,this.artwork=n,this.isFullWidthArtwork=r||!1}}class qj extends eB{constructor(e,t){super(),this.text=e,this.attribution=t}}class zj extends X${constructor(e,t,n){super(),this.style=e,this.color=t,this.isFullWidth=n}}class Yj extends eB{constructor(e,t,n,r,o){super(),this.badges=e,this.hasTopSeparator=t,this.hasBottomSeparator=n,this.separatorsAreFullWidth=r,this.alignment=o}}class Jj extends eB{constructor(e,t){super(),this.title=e,this.buttonAction=t}}class Zj extends X${constructor(e,t,n,r,o,s){super(),this.badgeType=n,this.badge=n.title,this.title=e,this.description=t,this.callToActionButtonAction=r,this.backgroundStyle=o,this.textAlignment=s}}class Kj extends eB{constructor(e,t,n,r,o,s,i){super(),this.details=e,this.detailsDisplayProperties=t,this.heading=n,this.artwork=r,this.video=o,this.collectionIcons=s,this.backgroundColor=i,this.editorialDisplayOptions={}}}class Qj extends eB{constructor(e,t,n){super(),this.details=e,this.iconArtwork=t,this.backgroundColor=n}}class Xj extends eB{}class eH extends eB{constructor(e,t){super(),this.unsubscribedAction=e,this.subscribedAction=t}}class tH extends eB{constructor(e,t,n,r,o,s,i,a,c){super(),this.badgeGlyph=e,this.badge=t,this.title=n,this.subtitle=r,this.achievement=o,this.backgroundColor=i,this.backgroundArtwork=a,this.lockup=s,this.heroAction=c}}class nH extends eB{constructor(e){super(),this.placement=e}}class rH extends eB{constructor(e,t=null,n=null){super(),this.contentType=e,this.marker=t,this.items=n||[],this.header=void 0,this.url=null,this.mergeWhenFetched=!1,this.batchGroup=null,this.seeAllAction=null,this.footerTitle=null,this.footerAction=null,this.eyebrow=null,this.eyebrowArtwork=null,this.title=null,this.titleArtwork=null,this.subtitle=null,this.isHorizontal=!1,this.isHidden=!1,this.rowsPerColumn=null,this.background={type:UF},this.contentsMetadata={type:UF},this.isPersonalized=!1,this.shouldFilterApps=!1}}!function(e){e.TopLeading="topLeading",e.Top="top",e.TopTrailing="topTrailing",e.Trailing="trailing",e.BottomTrailing="bottomTrailing",e.Bottom="bottom",e.BottomLeading="bottomLeading",e.Leading="leading"}(Wh||(Wh={})),function(e){e.Grid="grid",e.Hero="hero",e.Standard="standard"}(qh||(qh={})),function(e){e.Icon="icon",e.Category="category"}(zh||(zh={}))
class oH extends eB{constructor(e,t,n,r,o,s,i){super(),this.title=e,this.artwork=t,this.video=n,this.heading=r,this.badge=o,this.description=s,this.clickAction=i,this.shelfBackground=null,this.collectionIcons=null,this.editorialDisplayOptions={}}}class sH extends Tj{isValid(){const e=this.posterArtwork,t=this.posterVideo
return!(!e&&!t)&&super.isValid()}}class iH extends X${}class aH extends X${constructor(){super(),this.id=random.nextUUID()}}class cH extends X${constructor(e){super(),this.shelves=e,this.title=null,this.presentationOptions=[],this.isIncomplete=!1,this.pageMetrics=new QB}}class lH extends X${constructor(){super(),this.pageMetrics=new QB,this.pageRenderMetrics={}}}class uH extends cH{}class dH extends cH{}class fH extends cH{}class pH extends cH{constructor(e,t=null){super(e),this.sort=ix,this.displayStyles=t}}class hH{constructor(e,t,n,r){this.contentsResourceTypes=new Set,this.ids=new Set,this.idsByResourceType=new Map,this.originalOrdering=[],this.relationshipIncludes=new Set,this.attributeIncludes=new Set,this.platform=null,this.additionalPlatforms=new Set,this.additionalQuery={},this.relationshipLimits={},this.searchTerm=null,this.searchTypes=[],this.context=null,this.useCustomAttributes=!1,this.objectGraph=e,this.platform=b(e),this.isMixedMediaRequest=null!=n&&n,o(t)||(typeof t===y$?this.href=t:Array.isArray(t)&&this.withDataItems(t,r,n))}addDataToIDsByResourceType(e){const t=e.type,n=e.id
let r=this.idsByResourceType.get(t);(0,Gh.isNothing)(r)&&(r=new Set),r.add(n),this.idsByResourceType.set(t,r)}forType(e){return this.resourceType=e,this}withDataItems(e,t,n){if(0===e.length)return this
this.isMixedMediaRequest=this.isMixedMediaRequest||null!=n&&n
for(const r of e)if(this.ids.add(r.id),this.addDataToIDsByResourceType(r),(0,Gh.isSome)(n)&&n&&(0,Gh.isSome)(t)&&t.length>0)for(const e of t){const t=c(r.meta,e)
if((0,Gh.isSome)(t)&&t.length>0){const e=t[0]
this.addDataToIDsByResourceType(e)}}return 1===this.idsByResourceType.size?(this.resourceType=this.idsByResourceType.keys().next().value,this.isMixedMediaRequest=!1):this.idsByResourceType.size>1&&!this.isMixedMediaRequest&&(this.resourceType=V$,this.contentsResourceTypes=new Set(Array.from(this.idsByResourceType.keys()))),this.originalOrdering.push(...e),this}withIdOfType(e,t){return this.withDataItems([{id:e,type:t}])}withIdsOfType(e,t){return this.withDataItems(e.map(e=>({id:e,type:t})))}includingRelationships(e){for(const t of e)this.relationshipIncludes.add(t)
return this}includingScopedRelationships(e,t){this.scopedRelationshipIncludes||(this.scopedRelationshipIncludes=new Map)
let n=this.scopedRelationshipIncludes.get(e)
n||(n=new Set)
for(const e of t)n.add(e)
return this.scopedRelationshipIncludes.set(e,n),this}includingMetaKeys(e,t){this.metaIncludes||(this.metaIncludes=new Map)
let n=this.metaIncludes.get(e)
n||(n=new Set)
for(const e of t)n.add(e)
return this.metaIncludes.set(e,n),this}includingViews(e){this.viewsIncludes||(this.viewsIncludes=new Set)
for(const t of e)this.viewsIncludes.add(t)
return this}includingAssociateKeys(e,t){this.associateIncludes||(this.associateIncludes=new Map)
let n=this.associateIncludes.get(e)
n||(n=new Set)
for(const e of t)n.add(e)
return this.associateIncludes.set(e,n),this}includingRelationshipsForUpsell(e){const t=WN
if(e){this.scopedRelationshipIncludes||(this.scopedRelationshipIncludes=new Map)
let e=this.scopedRelationshipIncludes.get(M$)
e||(e=new Set),e.add(t),this.scopedRelationshipIncludes.set(M$,e)}else this.relationshipIncludes.add(t)
{this.metaIncludes||(this.metaIncludes=new Map)
let e=this.metaIncludes.get(WN)
e||(e=new Set),e.add(CM),this.metaIncludes.set(WN,e)}return this}includingAttributes(e){for(const t of e)this.attributeIncludes.add(t)
return this}includingScopedAttributes(e,t){this.scopedAttributeIncludes||(this.scopedAttributeIncludes=new Map)
let n=this.scopedAttributeIncludes.get(e)
n||(n=new Set)
for(const e of t)n.add(e)
return this.scopedAttributeIncludes.set(e,n),this}includingAdditionalPlatforms(e){for(const t of e)this.additionalPlatforms.add(t)
return this}includingScopedAvailableIn(e,t){this.scopedAvailableInIncludes||(this.scopedAvailableInIncludes=new Map)
let n=this.scopedAvailableInIncludes.get(e)
n||(n=new Set)
for(const e of t)n.add(e)
return this.scopedAvailableInIncludes.set(e,n),this}includingScopedSparseLimit(e,t){return this.scopedSparseLimit=new Map,this.scopedSparseLimit.set(e,t),this}addingQuery(e,t){return(0,Gh.isSome)(t)?this.additionalQuery[e]=t:delete this.addingQuery[e],this}addingQueryValues(e){return this.additionalQuery={...this.addingQuery,...e},this}addingRelationshipLimit(e,t){return this.relationshipLimits[e]=t,this}withSearchTerm(e){return this.searchTerm=e,this}searchingOverTypes(e){for(const t of e)this.searchTypes.push(t)
return this}addingContext(e){return this.context=e,this}includingMacOSCompatibleIOSAppsWhenSupported(e=!1){return this.objectGraph.appleSilicon.isSupportEnabled&&(e||this.enablingFeature(tk),this.includingScopedAttributes(q$,[My])),this}usingCustomAttributes(e){return this.useCustomAttributes=e,this}alwaysUseIdsAsQueryParam(e){return this.useIdsAsQueryParam=e,this}attributingTo(e){return this.canonicalUrl=e,this}withFilter(e,t){return this.filterType=e,this.filterValue=t,this}withLimit(e){return this.limit=e,this}withSparseLimit(e){return null!==e&&(this.sparseLimit=e),this}withSparseCount(e){return null!==e&&(this.sparseCount=e),this}enablingFeature(e){return this.enabledFeatures||(this.enabledFeatures=[]),this.enabledFeatures.push(e),this}enablingFeatures(e){return this.enabledFeatures||(this.enabledFeatures=[]),this.enabledFeatures.push(...e),this}asPartialResponseLimitedToFields(e){return this.fields=e,this}includesResourceType(e){return this.resourceType===e||!!s(this.contentsResourceTypes)&&this.contentsResourceTypes.has(e)}}const wH=new RegExp("#?([0-9,a-f,A-F][0-9,a-f,A-F])([0-9,a-f,A-F][0-9,a-f,A-F])([0-9,a-f,A-F][0-9,a-f,A-F])([0-9,a-f,A-F][0-9,a-f,A-F])?"),gH=F(0,0,0),mH=F(1,1,1)
class yH extends eB{constructor(e){super(),this.kind=e}bestBackgroundColor(){}}class vH extends yH{constructor(e,t,n,r,o){super(e),this.artworks=t,this.videos=n,this.artworkLayouts=r,this.artworkLayoutsWithMetrics=o}bestBackgroundColor(){var e,t,n
return null!==(t=null===(e=this.videos[0])||void 0===e?void 0:e.preview.backgroundColor)&&void 0!==t?t:null===(n=this.artworks[0])||void 0===n?void 0:n.backgroundColor}}class AH extends vH{constructor(e,t){super(ax,e,t,[],[])}isValid(){const e=this.artworks.every(e=>e.isValid())&&this.artworks.length>0,t=this.videos.every(e=>e.isValid())&&this.videos.length>0
return(e||t)&&super.isValid()}}class TH extends vH{constructor(e,t,n,r,o){super(I$,e,t,n,r),this.titleBackingGradient=o}}class PH extends yH{constructor(e){super(l_),this.icon=e}bestBackgroundColor(){return this.icon.backgroundColor}}class IH extends vH{constructor(e,t,n,r,o,s){super(UM,t,n,r,o),this.icon=e,this.titleBackingGradient=s}bestBackgroundColor(){var e
return null!==(e=super.bestBackgroundColor())&&void 0!==e?e:this.icon.backgroundColor}}class SH extends vH{constructor(e,t,n,r,o,s,i){super(pI,t,n,r,o),this.lockups=e,this.marketingText=s,this.isMediaDark=i}}class bH extends yH{constructor(e,t){super(DR),this.lockups=e,this.additionalText=t}}class CH extends yH{constructor(e){super(Qx),this.lockup=e}bestBackgroundColor(){return this.lockup.icon.backgroundColor}}class kH extends yH{constructor(e){super(hI),this.lockups=e,this.lockupImpressionLimit=10}}class EH extends vH{constructor(e,t,n,r){super(HF,[],e,t,n),this.description=r}}class OH extends vH{constructor(e,t,n,r,o,s,i,a,c){super(Kx,r,o,s,i),this.formattedDates=e,this.startDate=t,this.tintColor=n,this.subtitle=a,this.blurStyle=c}}class RH extends yH{constructor(e,t,n,r,o,s,i){super(_R),this.lockup=e,this.screenshots=t,this.isAnimated=n,this.secondaryTextColor=r,this.backgroundColor=o,this.riverSpeed=s,this.mediumAdLockupWithScreenshotsBackground=i}}class DH extends yH{constructor(e,t,n){super(LR),this.condensedAdLockupWithIconBackground=n,this.lockup=e,this.backgroundArtwork=t}bestBackgroundColor(){var e
return(0,Gh.isSome)(this.condensedAdLockupWithIconBackground)?null===(e=this.condensedAdLockupWithIconBackground)||void 0===e?void 0:e.backgroundArtwork.backgroundColor:this.backgroundArtwork.backgroundColor}}class _H extends X${constructor(e){super(),this.kind=e}}class LH extends _H{constructor(e){super(r$),this.lockup=e,this.displaysIcon=!0}}class xH extends _H{constructor(e,t,n,r){super("marketingLockup"),this.lockup=e,this.paragraph=t,this.hideBackground=n,this.artworkBackgroundColor=r}}class MH extends _H{constructor(e){super(sg),this.lockups=e}}class NH extends _H{constructor(e,t){super(TM),this.paragraph=e,this.style=t}}class FH extends _H{constructor(e){super(CF),this.action=e}}class $H extends _H{constructor(e,t,n){super("threeLine"),this.heading=e,this.title=t,this.description=n}}class BH extends _H{constructor(e){super("arcadeLockup"),this.arcadeLockup=e}}class UH extends eB{constructor(){super(),this.heading=void 0,this.title=void 0,this.shortTitle=void 0,this.titleArtwork=void 0,this.media=void 0,this.heroMedia=void 0,this.overlay=void 0,this.style=void 0,this.clickAction=void 0,this.backgroundColor=void 0,this.inlineDescription=void 0,this.collapsedHeading=void 0,this.editorialDisplayOptions=void 0,this.supportsMediaMirroring=void 0}}class GH extends eB{constructor(e){super(),this.cards=e}}class VH extends X${constructor(e,t,n,r,o,s){super(),this.shelves=e,this.title=n,this.titleDetail=o,this.shortTitleDetail=s,this.tabTitle=r,this.nextPage=null,this.onboardingCardIds=t||[],this.pageMetrics=new QB,this.pageRenderMetrics={}}}const jH={artwork:Kk,screenshotsByType:"customScreenshotsByType",promotionalText:"customPromotionalText",videoPreviewsByType:"customVideoPreviewsByType",customScreenshotsByTypeForAd:qR,customVideoPreviewsByTypeForAd:FS}
Yh=e(5542)
class HH extends X${constructor(e,t,n,r){super(),this.details=e,this.dismissButtonTitle=t,this.offerButtonAction=n,this.offerDisplayProperties=r,this.pageMetrics=new QB,this.pageRenderMetrics={}}}class WH extends X${constructor(e,t,n){super(),this.headline=e,this.body=t,this.artwork=n}}class qH extends X${constructor(e,t,n,r,o){super(),this.title=e,this.subtitle=t,this.items=n,this.continueAction=r,this.familyAction=o}}class zH extends X${constructor(e,t){super(),this.individualContent=e,this.familyMemberContent=t,this.pageMetrics=new QB,this.pageRenderMetrics={}}}class YH extends X${constructor(e,t,n,r){super(),this.serviceType=e,this.placement=t,this.seed=n,this.clientOptions=r,this.contextInfo=r,this.metricsOverlay={topic:YB}}}class JH extends X${constructor(e){super(),this.clientOptions=e,this.metricsOverlay={topic:YB}}}class ZH extends X${constructor(e,t){super(),this.primaryIcon=e,this.icons=t}}class KH extends X${constructor(e){super(),this.action=e}}class QH extends eB{constructor(e,t,n,r,o){super(),this.id=e,this.title=t,this.artwork=n,this.gradientStartColor=r,this.gradientEndColor=o,this.selectActionMetrics=new KB,this.deselectActionMetrics=new KB}}class XH extends X${constructor(e,t,n,r,o,s,i,a){super(),this.title=e,this.categories=t,this.maxNumberOfCategoriesToChoose=n,this.maxNumberOfCategoriesToChooseTemplate=r,this.numberOfChosenCategoriesTemplate=o,this.numberOfChosenCategoriesTotalTemplate=s,this.primaryAction=i,this.dismissAction=a,this.pageMetrics=new QB,this.pageRenderMetrics={}}}class eW extends X${constructor(e,t){super(),this.lockup=e,this.categoryId=t}}class tW extends X${constructor(e,t,n,r,o,s,i){super(),this.title=e,this.suggestions=t,this.getAllAction=n,this.getAllButtonStyle=r,this.primaryAction=o,this.primaryActionKind=s,this.primaryActionSecondaryTitle=i,this.pageMetrics=new QB,this.pageRenderMetrics={}}}class nW{constructor(e){if(this._values={},!r(e)&&e.length>0){const t=e.split("&")
for(const e of t){const[t,n]=e.split("="),o=decodeURIComponent(t),s=r(n)?"":decodeURIComponent(n)
this._values[o]=s}}}_searchKey(e,t){if(0===e.length)throw new Error("key may not be zero length")
return r(t)||0===t.length?e:`${t}${e.charAt(0).toUpperCase()}${e.slice(1)}`}get(e,t="mt"){const n=this._searchKey(e,t)
return this._values[n]}set(e,t,n="mt"){const o=this._searchKey(e,n)
return r(t)?delete this._values[o]:this._values[o]=t,this}toString(){let e=""
for(const t of Object.keys(this._values)){const n=this._values[t]
e.length>0&&(e+="&"),e+=encodeURIComponent(t),e+="=",e+=encodeURIComponent(n)}return e}toEncodedMap(){const e={}
for(const t of Object.keys(this._values)){const n=this._values[t],r=encodeURIComponent(t),o=encodeURIComponent(n)
e[r]=o}return e}}const rW="_jet-internal:derived-data"
Jh=e(5016),function(e){e.ArcadeDownloadPackOnboarding="Tf5Kjqz",e.CondensedTodayAds="5pdfhju",e.ProductPagePreloading="3NepyQj",e.ProductPageVariants="xSb5Dsb",e.ProductPageYMALRowCount="2S6U3Dq",e.SearchLandingPageV2="_pdqLKg",e.SearchResultLockupStyle="UPumzpM"}(Zh||(Zh={}))
class oW{currentExperimentGroup(e,t){let n
switch(t.identifer){case Zh.ArcadeDownloadPackOnboarding:n=this.arcadeDownloadPackOnboarding
break
case Zh.CondensedTodayAds:n=this.condensedTodayAds
break
case Zh.ProductPagePreloading:n=this.productPagePreloading
break
case Zh.ProductPageVariants:n=this.productPageVariants
break
case Zh.ProductPageYMALRowCount:n=this.productPageYMALRowCount
break
case Zh.SearchLandingPageV2:n=this.searchLandingPageV2
break
case Zh.SearchResultLockupStyle:n=this.searchResultLockupStyle}if(i(n))return n.value
const r=Jh.Qo(e.cookieProvider,t)
return this.cacheExperimentGroupForExperiment(r,t),r}cacheExperimentGroupForExperiment(e,t){const n={value:e}
switch(t.identifer){case Zh.ArcadeDownloadPackOnboarding:this.arcadeDownloadPackOnboarding=n
break
case Zh.CondensedTodayAds:this.condensedTodayAds=n
break
case Zh.ProductPagePreloading:this.productPagePreloading=n
break
case Zh.ProductPageVariants:this.productPageVariants=n
break
case Zh.ProductPageYMALRowCount:this.productPageYMALRowCount=n
break
case Zh.SearchLandingPageV2:this.searchLandingPageV2=n
break
case Zh.SearchResultLockupStyle:this.searchResultLockupStyle=n}}}oW.metatype=(0,Bh.makeMetatype)("app-store:experimentCache")
const sW={identifer:Zh.ProductPagePreloading,treatments:[0,1]},iW={identifer:Zh.ProductPageVariants,treatments:[...Array(100).keys()]},aW=(Zh.ProductPageYMALRowCount,T$)
class cW extends X${constructor(){super(),this.shelfOrderings={},this.shelfMapping={},this.presentationOptions=[],this.isIncomplete=!1,this.pageMetrics=new QB,this.pageRenderMetrics={}}}class lW extends cW{}class uW extends eB{constructor(e,t,n,r,o,s,i){super(),this.title=e,this.artwork=t,this.badge=n,this.action=r,this.density=o,this.artworkSafeArea=s,this.textSafeArea=i}}!function(e){e.TopRight="topRight",e.TopLeft="topLeft",e.MiddleLeft="middleLeft"}(Kh||(Kh={})),function(e){e.SquareByWidth="squareByWidth",e.SquareByHeight="squareByHeight",e.FreeForm="freeForm"}(Qh||(Qh={}))
class dW extends eB{constructor(e,t,n,r,o,s){super(),this.lockup=e,this.screenshots=t,this.isAnimated=n,this.secondaryTextColor=r,this.backgroundColor=o,this.riverSpeed=s}}class fW extends eB{constructor(e,t){super(),this.lockup=e,this.backgroundArtwork=t}}class pW{constructor(e,t,n,r,o,s,i=null,a){this.id=e,this.title=t,this.searchLandingItemDisplayStyle=i,this.displayStyle=n,this.displayCount=r,this.hasSeeAll=o,this.seeAllLink=s,this.searchShelfKind=a}}!function(e){e.Suggestion="Query",e.CategoriesAndCharts="EditorialLink",e.Apps="AppsLockup",e.EditorialCollection="EditorialCollection"}(Xh||(Xh={})),function(e){e[e.Default=0]="Default",e[e.CategoriesAndCharts=1]="CategoriesAndCharts"}(ew||(ew={})),function(e){e.Density1="density_1",e.Density2="density_2",e.Density3="density_3"}(tw||(tw={})),function(e){e.Chiclet="chiclet",e.App="app",e.Symbol="symbol"}(nw||(nw={}))
const hW=(e,t)=>e||t
let wW=null
class gW extends X${constructor(e,t,n,r,o){super(),this.instanceId=e,this.adamId=t,this.advertType=n,this.invocation=r,this.reportingDestination=o}}class mW extends X${constructor(e,t,n,r,o,s,i,a,c,l=kF){super(),this.type=e,this.key=t,this.content=n,this.heading=o,this.caption=s,this.longCaption=i,this.leadingValue=l,this.accessibilityTitle=a,this.accessibilityCaption=c,this.style=r}}class yW extends X${constructor(e,t){super(),this.type=e,this.shelfId=t}}class vW extends X${constructor(e,t){super(),this.title=e,this.subtitle=t}}class AW extends Tj{constructor(){super(),this.pageMetrics=new QB,this.pageRenderMetrics={}}}const TW=new Set([N$,B$,G$]),PW=new Set([zF,ER,s$,BM,vM,d$,P$,uF,dF,i$,mN,k$,VF,XM,GN,jF,fF,DF,YF,p$,a$,E$,t$,yN,AM,i_,JF])
class IW extends X${constructor(e,t,n,r){super(),this.id=e,this.title=t,this.selectedActionTitle=n,this.url=r}}class SW extends cH{constructor(){super([])}}class bW extends X${}class CW extends X${}class kW extends X${}class EW extends X${constructor(){super(...arguments),this.componentType=og}}class OW extends X${constructor(){super(...arguments),this.componentType="productReviewActions"}}class RW extends X${constructor(e){super(),this.showsBadge=!1,this.title=null,this.notes=e,this.isCollapsed=!0}}class DW extends X${}class _W extends X${}class LW extends X${}class xW extends bW{constructor(){super(...arguments),this.componentType="starRatings"}}class MW extends bW{constructor(){super(...arguments),this.componentType="starRatingsHistogram"}}class NW extends bW{constructor(){super(...arguments),this.componentType="noRatings"}}class FW extends X${constructor(){super(...arguments),this.componentType=OR}}const $W="notPurchasedOrdering"
class BW extends cW{constructor(){super(...arguments),this.appPlatforms=[]}}class UW{constructor(){this._params=""}static get contentType(){return v_}param(e,t){if(e&&t){const n=this._params.length>0?"&":""
this._params+=`${n}${encodeURIComponent(e)}=${encodeURIComponent(t)}`}return this}build(){return this._params}}const GW="externalDeepLinkUrl",VW=new class{constructor(){this._app="",this._clientId="",this._pages=[]}get _requestId(){const e=Date.now().toString(36).toUpperCase(),t=Math.floor(1e5*Math.random()).toString(36).toUpperCase()
return this._clientId+"z"+e+"z"+t}get _prevPage(){return this._pages.length>=2?this._pages[this._pages.length-2]:void 0}useApp(e){""!==this._app||r(e)||(this._app=e)}useClientId(e){r(e)||(this._clientId=e)}usePageHistory(e){if(0!==e.length){this._pages.length=0
for(const t of e){const e=d(t)
r(e)||this._pages.push(e)}}}useNativeValues(e){const t=d(e,"nativeApp")
this.useApp(t)
const n=d(e,"nativeClientId")
this.useClientId(n)
const r=c(e,"nativePageHistory")
this.usePageHistory(r)}getPageHistoryFor(e){const t=this._pages.slice()
return this._pages.length>=5&&this._pages.shift(),this._pages.push(e),t}get params(){return{app:this._app,clientId:this._clientId,requestId:this._requestId,prevPage:this._prevPage,eventTime:Date.now()}}}
let jW=null
const HW={containerId:"mtContainerId",placementId:"mtIadPlacementId",templateType:"mtIadTemplateType"}
!function(e){e.ArcadeSeeAllGames="editorial-shelves-arcade-see-all-games",e.Collection="editorial-shelves-collection",e.Chart="editorial-shelves-chart",e.Tag="editorial-shelves-tag",e.Engagement="editorial-shelves-engagement",e.Text="editorial-shelves-text",e.Image="editorial-shelves-image",e.VideoClip="editorial-shelves-video-clip",e.Header="editorial-shelves-header",e.Recommendations="editorial-shelves-recommendation",e.GameCenter="editorial-shelves-game-center",e.Upsell="editorial-shelves-upsell",e.Marker="editorial-shelves-marker"}(rw||(rw={})),(_w=ow||(ow={})).Hero="Hero",_w.TextOnly="TextOnly",_w.TextWithArtwork="TextWithArtwork",_w.BrickSmall="BrickSmall",_w.BrickMedium="BrickMedium",_w.BrickLarge="BrickLarge",_w.EditorialLockupMedium="EditorialLockupMedium",_w.EditorialLockupMediumVariant="EditorialLockupMediumVariant",_w.EditorialLockupLarge="EditorialLockupLarge",_w.EditorialLockupLargeVariant="EditorialLockupLargeVariant",_w.Poster="Poster",_w.StorySmall="StorySmall",_w.StoryMedium="StoryMedium",_w.LockupSmall="LockupSmall",_w.LockupLarge="LockupLarge",_w.BreakoutLarge="BreakoutLarge",function(e){e.QuickLinks="QuickLinks"}(sw||(sw={})),function(e){e.Vertical="Vertical",e.Horizontal="Horizontal"}(iw||(iw={})),function(e){e.ShowInstalled="ShowInstalled",e.ShowAllPlatforms="ShowAllPlatforms",e.ShowOnlyPreorder="ShowOnlyPreorder"}(aw||(aw={})),function(e){e.AllGames="AllGames",e.ArcadeGames="ArcadeGames"}(cw||(cw={})),function(e){e.FriendsArePlaying="FriendsArePlaying",e.ContinuePlaying="ContinuePlaying"}(lw||(lw={})),function(e){e.ArcadeTabHeader="ArcadeTabHeader"}(uw||(uw={})),function(e){e.Arcade="Arcade"}(dw||(dw={}))
class WW{constructor(e,t,n){this.locationTracker={rootPosition:0,locationStack:[]},this.parsedCardCount=0,this.currentRowIndex=0,this.pageInformation=e,this.locationTracker=null!=t?t:{rootPosition:0,locationStack:[]},this.refreshController=n}}class qW extends WW{constructor(e,t,n,r){super(t,n,r),this.pageHasDisplayedContent=!1,this.remainingContent=e}}!function(e){e.AppEventCard="AppEventCard",e.AppOfTheDay="AppOfTheDay",e.FullBleedImage="FullBleedImage",e.GameOfTheDay="GameOfTheDay",e.Grid="Grid",e.InAppPurchase="InAppPurchase",e.List="List",e.NumberedList="NumberedList",e.River="River",e.ShortImage="ShortImage",e.SingleApp="SingleApp",e.Video="Video"}(fw||(fw={})),function(e){e.SmallCard="smallCard",e.MediumCard="mediumCard"}(pw||(pw={})),function(e){e.NoArtwork="no-artwork",e.ContentArtworkWithTitle="content-artwork-with-title",e.CategoryArtworkWithTitle="category-artwork-with-title",e.CategoryArtworkWithBadge="category-artwork-with-badge"}(hw||(hw={})),function(e){e.AppOfTheDay="app-of-the-day",e.GameOfTheDay="game-of-the-day"}(ww||(ww={})),function(e){e.Eyebrow="eyebrow",e.Title="title"}(gw||(gw={})),function(e){e.LinearGradient="linear-gradient"}(mw||(mw={})),function(e){e.Inline="inline",e.Article="article"}(yw||(yw={}))
const zW={collapsedContentMode:Vh.bottomLeft,expandedContentMode:Vh.bottomLeft,collapsedLayoutInsets:{top:0,left:-8,bottom:0,right:0},expandedLayoutInsets:RB},YW={collapsedContentMode:Vh.bottomLeft,expandedContentMode:Vh.bottomLeft,collapsedLayoutInsets:RB,expandedLayoutInsets:RB},JW={collapsedContentMode:Vh.topLeft,expandedContentMode:Vh.bottomLeft,collapsedLayoutInsets:RB,expandedLayoutInsets:RB},ZW={maxWidth:250,ltr:zW,rtl:zW,collapsedSize:{type:JN,height:1},priority:jh.Mini},KW={objectPath:fR,cardArtLayoutMetrics:[ZW,{maxWidth:704,ltr:YW,rtl:YW,collapsedSize:{type:JN,height:1.062}},{ltr:JW,rtl:JW,collapsedSize:{type:mR,width:1}}],crops:["sr"],sourceWidth:800,sourceHeight:490,type:cF,cardArtLayouts:[]},QW={collapsedContentMode:Vh.bottomLeft,collapsedLayoutInsets:{top:0,left:-8,bottom:0,right:0},expandedContentMode:Vh.bottomLeft,expandedLayoutInsets:RB},XW={collapsedContentMode:Vh.bottomLeft,collapsedLayoutInsets:RB,expandedContentMode:Vh.bottomLeft,expandedLayoutInsets:RB},eq={collapsedContentMode:Vh.scaleAspectFill,expandedContentMode:Vh.bottomLeft,collapsedLayoutInsets:RB,expandedLayoutInsets:RB},tq={maxWidth:250,ltr:QW,rtl:QW,collapsedSize:{type:JN,height:1},priority:jh.Mini},nq={objectPath:pR,cardArtLayoutMetrics:[tq,{maxWidth:704,ltr:XW,rtl:XW,collapsedSize:{type:JN,height:1.062}},{ltr:eq,rtl:eq,collapsedSize:{type:mR,width:1}}],crops:["sr"],sourceWidth:800,sourceHeight:490,type:cF,cardArtLayouts:[]},rq={collapsedContentMode:Vh.bottomLeft,expandedContentMode:Vh.bottomLeft,collapsedLayoutInsets:{top:0,left:-8,bottom:0,right:0},expandedLayoutInsets:RB},oq={collapsedContentMode:Vh.bottomLeft,expandedContentMode:Vh.bottomLeft,collapsedLayoutInsets:RB,expandedLayoutInsets:RB},sq={collapsedContentMode:Vh.scaleAspectFill,expandedContentMode:Vh.bottomLeft,collapsedLayoutInsets:RB,expandedLayoutInsets:RB},iq={maxWidth:250,ltr:rq,rtl:rq,collapsedSize:{type:JN,height:1},priority:jh.Mini},aq={objectPath:hR,cardArtLayoutMetrics:[iq,{maxWidth:704,ltr:oq,rtl:oq,collapsedSize:{type:JN,height:1.062}},{ltr:sq,rtl:sq,collapsedSize:{type:mR,width:1}}],crops:[yR],sourceWidth:800,sourceHeight:490,type:cF,cardArtLayouts:[]},cq={collapsedContentMode:Vh.bottom,expandedContentMode:Vh.center,collapsedLayoutInsets:{top:36,left:36,bottom:0,right:36},expandedLayoutInsets:RB},lq={collapsedContentMode:Vh.top,expandedContentMode:Vh.center,collapsedLayoutInsets:{top:36,left:36,bottom:0,right:36},expandedLayoutInsets:RB},uq={collapsedContentMode:Vh.bottom,expandedContentMode:Vh.center,collapsedLayoutInsets:RB,expandedLayoutInsets:RB},dq={collapsedContentMode:Vh.right,expandedContentMode:Vh.right,collapsedLayoutInsets:{top:50,left:0,bottom:50,right:0},expandedLayoutInsets:RB},fq={collapsedContentMode:Vh.right,expandedContentMode:Vh.right,collapsedLayoutInsets:{top:168,left:0,bottom:168,right:533},expandedLayoutInsets:{top:117,left:0,bottom:117,right:533}},pq={collapsedContentMode:Vh.center,expandedContentMode:Vh.center,collapsedLayoutInsets:RB,expandedLayoutInsets:RB},hq={collapsedContentMode:Vh.bottomLeft,expandedContentMode:Vh.bottomLeft,collapsedLayoutInsets:{top:36,left:18,bottom:36,right:0},expandedLayoutInsets:RB},wq={collapsedContentMode:Vh.bottomLeft,expandedContentMode:Vh.bottomLeft,collapsedLayoutInsets:{top:0,left:18,bottom:0,right:0},expandedLayoutInsets:RB},gq={collapsedContentMode:Vh.center,expandedContentMode:Vh.center,collapsedLayoutInsets:RB,expandedLayoutInsets:RB},mq={collapsedContentMode:Vh.topLeft,expandedContentMode:Vh.center,collapsedLayoutInsets:{top:0,left:70,bottom:0,right:0},expandedLayoutInsets:RB},yq={collapsedContentMode:Vh.topLeft,expandedContentMode:Vh.center,expandedLayoutInsets:RB,collapsedLayoutInsets:{top:0,left:0,bottom:0,right:500}},vq={collapsedContentMode:Vh.topLeft,expandedContentMode:Vh.center,collapsedLayoutInsets:{top:0,left:0,bottom:0,right:360},expandedLayoutInsets:{top:0,left:360,bottom:0,right:360}},Aq={collapsedContentMode:Vh.top,expandedContentMode:Vh.top,collapsedLayoutInsets:{top:117,left:0,bottom:0,right:0},expandedLayoutInsets:{top:130,left:0,bottom:0,right:0}},Tq={collapsedContentMode:Vh.topLeft,expandedContentMode:Vh.top,collapsedLayoutInsets:{top:70,left:116,bottom:0,right:0},expandedLayoutInsets:{top:130,left:0,bottom:0,right:0}},Pq={collapsedContentMode:Vh.topLeft,expandedContentMode:Vh.top,collapsedLayoutInsets:{top:148,left:0,bottom:0,right:0},expandedLayoutInsets:{top:130,left:0,bottom:0,right:0}},Iq={collapsedContentMode:Vh.topLeft,expandedContentMode:Vh.top,collapsedLayoutInsets:{top:170,left:0,bottom:0,right:0},expandedLayoutInsets:{top:130,left:0,bottom:0,right:0}},Sq={ltr:uq,rtl:uq},bq={maxWidth:874,ltr:cq,rtl:cq},Cq={ltr:lq,rtl:lq},kq={ltr:fq,rtl:Ft(fq)},Eq={ltr:dq,rtl:Ft(dq)},Oq={ltr:pq,rtl:pq},Rq={ltr:hq,rtl:hq},Dq={maxWidth:200,ltr:wq,rtl:wq},_q={maxWidth:700,ltr:gq,rtl:Ft(gq)},Lq={maxWidth:900,ltr:mq,rtl:Ft(mq)},xq={maxWidth:1090,ltr:yq,rtl:Ft(yq)},Mq={ltr:vq,rtl:Ft(vq)},Nq={maxWidth:700,ltr:Aq,rtl:Ft(Aq),collapsedSize:{type:e$,width:1100,height:619},expandedSize:{type:e$,width:1200,height:675}},Fq={maxWidth:874,ltr:Tq,rtl:Ft(Tq),collapsedSize:{type:e$,width:1092,height:614},expandedSize:{type:e$,width:1200,height:675}},$q={maxWidth:1090,ltr:Pq,rtl:Ft(Pq),collapsedSize:{type:e$,width:1392,height:783},expandedSize:{type:e$,width:1200,height:675}},Bq={ltr:Iq,rtl:Ft(Iq),collapsedSize:{type:e$,width:1600,height:900},expandedSize:{type:e$,width:1200,height:675}},Uq={objectPath:UT,cardArtLayouts:[uq],cardArtLayoutMetrics:[Sq],sourceWidth:800,sourceHeight:450,type:HF,crops:void 0},Gq={objectPath:Lk,cardArtLayouts:[cq],cardArtLayoutMetrics:[bq,Cq],crops:["sr"],sourceWidth:800,sourceHeight:450,type:cF},Vq={objectPath:GT,cardArtLayouts:[uq],cardArtLayoutMetrics:[Sq],crops:[],sourceWidth:800,sourceHeight:450,type:HF},jq={objectPath:dR,cardArtLayouts:[cq],cardArtLayoutMetrics:[bq,Cq],crops:["sr"],sourceWidth:800,sourceHeight:450,type:cF},Hq={objectPath:VT,cardArtLayouts:[fq,Ft(fq)],cardArtLayoutMetrics:[kq],crops:[],sourceWidth:1208,sourceHeight:518,type:HF},Wq={objectPath:jT,cardArtLayouts:[dq,Ft(dq)],cardArtLayoutMetrics:[Eq],crops:[HT,WT],sourceWidth:688,sourceHeight:286,type:cF},qq={objectPath:bk,cardArtLayouts:[pq],cardArtLayoutMetrics:[Oq],crops:[],sourceWidth:875,sourceHeight:492,type:HF},zq={objectPath:Sk,cardArtLayouts:[pq],cardArtLayoutMetrics:[Dq,Oq],crops:[],sourceWidth:656,sourceHeight:492,type:HF},Yq={objectPath:pR,cardArtLayouts:[hq],cardArtLayoutMetrics:[Dq,Rq],crops:["sr"],sourceWidth:800,sourceHeight:490,type:cF},Jq={objectPath:fR,cardArtLayouts:[hq],cardArtLayoutMetrics:[Dq,Rq],crops:["sr"],sourceWidth:800,sourceHeight:490,type:cF},Zq={objectPath:TD,cardArtLayouts:[hq],cardArtLayoutMetrics:[Dq,Rq],crops:[yR],sourceWidth:800,sourceHeight:490,type:cF},Kq={objectPath:hR,cardArtLayouts:[hq],cardArtLayoutMetrics:[Dq,Rq],crops:[yR],sourceWidth:800,sourceHeight:490,type:cF},Qq={objectPath:qT,cardArtLayouts:[vq],cardArtLayoutMetrics:[_q,Lq,xq,Mq],crops:[vR],sourceWidth:1600,sourceHeight:604,type:cF},Xq={objectPath:zT,cardArtLayouts:[Iq],cardArtLayoutMetrics:[Nq,Fq,$q,Bq],crops:[vR],sourceWidth:1600,sourceHeight:900,type:HF},ez=Vh.topRight,tz={top:-108,left:495,bottom:0,right:0},nz=Vh.topLeft,rz={top:-108,left:-495,bottom:0,right:0},oz={type:e$,width:1124,height:482},sz={collapsedContentMode:Vh.top,collapsedLayoutInsets:{top:-117,left:0,bottom:0,right:0},expandedContentMode:ez,expandedLayoutInsets:tz},iz={collapsedContentMode:Vh.top,collapsedLayoutInsets:{top:-117,left:0,bottom:0,right:0},expandedContentMode:nz,expandedLayoutInsets:rz},az={collapsedContentMode:Vh.topRight,collapsedLayoutInsets:{top:-165,left:524,bottom:0,right:0},expandedContentMode:ez,expandedLayoutInsets:tz},cz={collapsedContentMode:Vh.topLeft,collapsedLayoutInsets:{top:-165,left:-524,bottom:0,right:0},expandedContentMode:nz,expandedLayoutInsets:rz},lz={collapsedContentMode:Vh.top,collapsedLayoutInsets:{top:-55,left:0,bottom:0,right:0},expandedContentMode:ez,expandedLayoutInsets:tz},uz={collapsedContentMode:Vh.top,collapsedLayoutInsets:{top:-55,left:0,bottom:0,right:0},expandedContentMode:nz,expandedLayoutInsets:rz},dz={objectPath:VT,cardArtLayoutMetrics:[{maxWidth:250,ltr:sz,rtl:iz,collapsedSize:{type:e$,width:914,height:392},expandedSize:oz,priority:jh.Mini},{ltr:az,rtl:cz,collapsedSize:{type:e$,width:1188,height:509},expandedSize:oz},{ltr:lz,rtl:uz,collapsedSize:{type:e$,width:1456,height:624},expandedSize:oz,priority:jh.ExtraWide}],crops:[],sourceWidth:1208,sourceHeight:518,type:HF,cardArtLayouts:[]},fz={collapsedContentMode:Vh.bottomRight,collapsedLayoutInsets:RB,expandedContentMode:Vh.topRight,expandedLayoutInsets:RB},pz={collapsedContentMode:Vh.bottomLeft,collapsedLayoutInsets:RB,expandedContentMode:Vh.topLeft,expandedLayoutInsets:RB},hz={collapsedContentMode:Vh.topRight,collapsedLayoutInsets:{top:-49,left:0,bottom:0,right:0},expandedContentMode:Vh.right,expandedLayoutInsets:RB},wz={collapsedContentMode:Vh.topLeft,collapsedLayoutInsets:{top:-49,left:0,bottom:0,right:0},expandedContentMode:Vh.left,expandedLayoutInsets:RB},gz={collapsedContentMode:Vh.scaleAspectFill,collapsedLayoutInsets:RB,expandedContentMode:Vh.bottomRight,expandedLayoutInsets:{top:50,left:495,bottom:0,right:0}},mz={collapsedContentMode:Vh.scaleAspectFill,collapsedLayoutInsets:RB,expandedContentMode:Vh.bottomRight,expandedLayoutInsets:{top:50,left:-495,bottom:0,right:0}},yz={objectPath:jT,cardArtLayoutMetrics:[{maxWidth:250,ltr:fz,rtl:pz,sourceCropOverrideLTR:"LCS.ApLCS01",sourceCropOverrideRTL:"LCS.ApLCS02",sourceSizeOverride:new cB(550,264),priority:jh.Mini},{ltr:hz,rtl:wz,collapsedSize:{type:e$,width:672,height:279}},{ltr:gz,rtl:mz,expandedSize:{type:e$,width:1124,height:482},sourceCropOverrideLTR:YT,sourceCropOverrideRTL:YT,priority:jh.ExtraWide}],crops:[HT,WT],sourceWidth:688,sourceHeight:286,type:cF,cardArtLayouts:[]},vz={collapsedContentMode:Vh.bottomLeft,collapsedLayoutInsets:{top:0,left:-8,bottom:0,right:0},expandedContentMode:Vh.bottomLeft,expandedLayoutInsets:RB},Az={collapsedContentMode:Vh.bottomLeft,collapsedLayoutInsets:RB,expandedContentMode:Vh.bottomLeft,expandedLayoutInsets:RB},Tz={collapsedContentMode:Vh.scaleAspectFill,expandedContentMode:Vh.bottomLeft,collapsedLayoutInsets:RB,expandedLayoutInsets:RB},Pz={maxWidth:250,ltr:vz,rtl:vz,collapsedSize:{type:JN,height:1},priority:jh.Mini},Iz={objectPath:TD,cardArtLayoutMetrics:[Pz,{maxWidth:704,ltr:Az,rtl:Az,collapsedSize:{type:JN,height:1.062}},{ltr:Tz,rtl:Tz,collapsedSize:{type:mR,width:1}}],crops:[yR],sourceWidth:800,sourceHeight:490,type:cF,cardArtLayouts:[]},Sz={collapsedContentMode:Vh.center,collapsedLayoutInsets:RB,expandedContentMode:Vh.center,expandedLayoutInsets:RB},bz={objectPath:bk,cardArtLayoutMetrics:[{ltr:Sz,rtl:Sz,collapsedSize:{type:JN,height:1},expandedSize:{type:JN,height:1}}],crops:[],sourceWidth:875,sourceHeight:492,type:HF,cardArtLayouts:[]},Cz={collapsedContentMode:Vh.center,collapsedLayoutInsets:RB,expandedContentMode:Vh.center,expandedLayoutInsets:RB},kz={objectPath:Sk,cardArtLayoutMetrics:[{ltr:Cz,rtl:Cz,collapsedSize:{type:JN,height:1},expandedSize:{type:JN,height:1}}],crops:[],sourceWidth:656,sourceHeight:492,type:HF,cardArtLayouts:[]},Ez={collapsedContentMode:Vh.bottom,expandedContentMode:Vh.bottom,collapsedLayoutInsets:RB,expandedLayoutInsets:RB},Oz={collapsedContentMode:Vh.top,expandedContentMode:Vh.top,collapsedLayoutInsets:RB,expandedLayoutInsets:RB},Rz={objectPath:UT,cardArtLayoutMetrics:[{maxWidth:250,ltr:Ez,rtl:Ez,collapsedSize:{type:e$,width:455,height:256},priority:jh.Mini},{ltr:Oz,rtl:Oz,collapsedSize:{type:JN,height:1}}],sourceWidth:800,sourceHeight:450,type:HF,crops:["sr"],cardArtLayouts:[]},Dz={collapsedContentMode:Vh.bottom,expandedContentMode:Vh.bottom,collapsedLayoutInsets:RB,expandedLayoutInsets:RB},_z={collapsedContentMode:Vh.bottom,expandedContentMode:Vh.bottom,collapsedLayoutInsets:RB,expandedLayoutInsets:RB},Lz={collapsedContentMode:Vh.scaleAspectFill,expandedContentMode:Vh.bottom,collapsedLayoutInsets:RB,expandedLayoutInsets:RB},xz={maxWidth:250,ltr:Dz,rtl:Dz,collapsedSize:{type:e$,width:455,height:256},priority:jh.Mini},Mz={objectPath:Lk,cardArtLayoutMetrics:[xz,{maxWidth:704,ltr:_z,rtl:_z,collapsedSize:{type:JN,height:1.08}},{ltr:Lz,rtl:Lz}],crops:["sr"],sourceWidth:800,sourceHeight:450,type:cF,cardArtLayouts:[]},Nz={collapsedContentMode:Vh.bottom,expandedContentMode:Vh.bottom,collapsedLayoutInsets:RB,expandedLayoutInsets:RB},Fz={collapsedContentMode:Vh.top,expandedContentMode:Vh.top,collapsedLayoutInsets:RB,expandedLayoutInsets:RB},$z={objectPath:GT,cardArtLayoutMetrics:[{maxWidth:250,ltr:Nz,rtl:Nz,collapsedSize:{type:e$,width:455,height:256},priority:jh.Mini},{ltr:Fz,rtl:Fz,collapsedSize:{type:JN,height:1}}],sourceWidth:800,sourceHeight:450,type:HF,crops:["sr"],cardArtLayouts:[]},Bz={collapsedContentMode:Vh.bottom,expandedContentMode:Vh.bottom,collapsedLayoutInsets:RB,expandedLayoutInsets:RB},Uz={collapsedContentMode:Vh.bottom,expandedContentMode:Vh.bottom,collapsedLayoutInsets:RB,expandedLayoutInsets:RB},Gz={collapsedContentMode:Vh.scaleAspectFill,expandedContentMode:Vh.bottom,collapsedLayoutInsets:RB,expandedLayoutInsets:RB},Vz={maxWidth:250,ltr:Bz,rtl:Bz,collapsedSize:{type:e$,width:455,height:256},priority:jh.Mini},jz={objectPath:dR,cardArtLayoutMetrics:[Vz,{maxWidth:704,ltr:Uz,rtl:Uz,collapsedSize:{type:JN,height:1.08}},{ltr:Gz,rtl:Gz}],crops:["sr"],sourceWidth:800,sourceHeight:450,type:cF,cardArtLayouts:[]},Hz={type:e$,width:1200,height:675},Wz={top:-130,left:0,bottom:0,right:0},qz={collapsedContentMode:Vh.top,collapsedLayoutInsets:{top:-16,left:0,bottom:0,right:0},expandedContentMode:Vh.top,expandedLayoutInsets:Wz},zz={collapsedContentMode:Vh.top,collapsedLayoutInsets:{top:-116,left:0,bottom:0,right:0},expandedContentMode:Vh.top,expandedLayoutInsets:Wz},Yz={collapsedContentMode:Vh.topLeft,collapsedLayoutInsets:{top:-116,left:-70,bottom:0,right:0},expandedContentMode:Vh.top,expandedLayoutInsets:Wz},Jz={collapsedContentMode:Vh.topRight,collapsedLayoutInsets:{top:-116,left:70,bottom:0,right:0},expandedContentMode:Vh.top,expandedLayoutInsets:Wz},Zz={collapsedContentMode:Vh.topLeft,collapsedLayoutInsets:{top:-148,left:0,bottom:0,right:0},expandedContentMode:Vh.top,expandedLayoutInsets:Wz},Kz={collapsedContentMode:Vh.topRight,collapsedLayoutInsets:{top:-148,left:0,bottom:0,right:0},expandedContentMode:Vh.top,expandedLayoutInsets:Wz},Qz={collapsedContentMode:Vh.topLeft,collapsedLayoutInsets:{top:-170,left:0,bottom:0,right:0},expandedContentMode:Vh.top,expandedLayoutInsets:Wz},Xz={collapsedContentMode:Vh.topRight,collapsedLayoutInsets:{top:-170,left:0,bottom:0,right:0},expandedContentMode:Vh.top,expandedLayoutInsets:Wz},eY={objectPath:zT,cardArtLayouts:[Qz],cardArtLayoutMetrics:[{maxWidth:250,ltr:qz,rtl:qz,collapsedSize:{type:e$,width:455,height:256},expandedSize:Hz,priority:jh.Mini},{maxWidth:699,ltr:zz,rtl:zz,collapsedSize:{type:e$,width:1094,height:614},expandedSize:Hz},{maxWidth:899,ltr:Yz,rtl:Jz,collapsedSize:{type:e$,width:1092,height:614},expandedSize:Hz},{maxWidth:1090,ltr:Zz,rtl:Kz,collapsedSize:{type:e$,width:1392,height:783},expandedSize:Hz},{ltr:Qz,rtl:Xz,collapsedSize:{type:e$,width:1600,height:900},expandedSize:Hz}],crops:[vR],sourceWidth:1600,sourceHeight:900,type:HF},tY={collapsedContentMode:Vh.top,collapsedLayoutInsets:{top:16,left:0,bottom:0,right:0},expandedContentMode:Vh.top,expandedLayoutInsets:RB},nY={collapsedContentMode:Vh.scaleAspectFill,collapsedLayoutInsets:RB,expandedContentMode:Vh.scaleAspectFill,expandedLayoutInsets:RB},rY={collapsedContentMode:Vh.topLeft,collapsedLayoutInsets:{top:0,left:-70,bottom:0,right:0},expandedContentMode:Vh.center,expandedLayoutInsets:RB},oY={collapsedContentMode:Vh.topRight,collapsedLayoutInsets:{top:0,left:70,bottom:0,right:0},expandedContentMode:Vh.center,expandedLayoutInsets:RB},sY={collapsedContentMode:Vh.topLeft,collapsedLayoutInsets:RB,expandedContentMode:Vh.center,expandedLayoutInsets:RB},iY={collapsedContentMode:Vh.topRight,collapsedLayoutInsets:RB,expandedContentMode:Vh.center,expandedLayoutInsets:RB},aY={collapsedContentMode:Vh.topLeft,collapsedLayoutInsets:RB,expandedContentMode:Vh.center,expandedLayoutInsets:RB},cY={collapsedContentMode:Vh.topRight,collapsedLayoutInsets:RB,expandedContentMode:Vh.center,expandedLayoutInsets:RB},lY={objectPath:qT,cardArtLayoutMetrics:[{maxWidth:250,ltr:tY,rtl:tY,collapsedSize:{type:e$,width:455,height:256},priority:jh.Mini},{maxWidth:699,ltr:nY,rtl:nY},{maxWidth:899,ltr:rY,rtl:oY},{maxWidth:1090,ltr:sY,rtl:iY,collapsedSize:{type:e$,width:1400,height:527}},{ltr:aY,rtl:cY,collapsedSize:{type:e$,width:1600,height:604}}],crops:[vR],sourceWidth:1600,sourceHeight:604,type:cF,cardArtLayouts:[]}
class uY extends X${constructor(e,t,n,r,o){super(),this.displayFromDate=e,this.displayText=t,this.showLiveIndicator=n,this.countdownToDate=r,this.countdownStringKey=o}}!function(e){e.AppEvent="appEvent",e.ContingentOffer="contingentOffer"}(vw||(vw={}))
class dY extends eB{constructor(e){super(),this.promotionType=e}}class fY extends dY{constructor(e,t,n,r,o,s,i,a,c,l,u,d,f,p,h){super(vw.AppEvent),this.appEventId=e,this.moduleArtwork=t,this.moduleVideo=n,this.title=r,this.subtitle=o,this.detail=s,this.startDate=i,this.endDate=a,this.kind=c,this.requirements=l,this.lockup=u,this.hideLockupWhenNotInstalled=d,this.formattedDates=f,this.mediaOverlayStyle=p,this.includeBorderInDarkMode=h,this.clickAction=null}}class pY extends X${constructor(e,t,n,r,o,s){super(),this.appEvent=e,this.artwork=t,this.video=n,this.shareAction=r,this.mediaOverlayStyle=o,this.includeBorderInDarkMode=s,this.pageMetrics=new QB,this.pageRenderMetrics={}}}class hY extends X${constructor(e,t,n,r,o,s,i,a,c,l,u){super(),this.appEventId=e,this.title=t,this.detail=n,this.artworkUrl=r,this.displayTime=o,this.scheduledAction=s,this.notAuthorizedAction=i,this.failureAction=a,this.destinationUrl=c,this.scheduleClickEvent=l,this.cancelScheduleClickEvent=u}}class wY extends dY{constructor(e,t,n,r,o,s,i,a,c,l,u,d,f,p){super(vw.ContingentOffer),this.backgroundArtwork=e,this.branchArtwork=t,this.supportsStreamlinedBuy=r,this.mediaOverlayStyle=n,this.titleFormatted=s,this.subtitle=i,this.additionalInfo=u,this.description=a,this.label=c,this.badge=l,this.branchLockup=d,this.trunkLockup=p,this.learnMoreTitle=o,this.branchAppLockup=f,this.clickAction=null}}class gY extends X${constructor(e,t,n){super(),this.contingentOffer=e,this.artwork=t,this.mediaOverlayStyle=n,this.pageMetrics=new QB,this.pageRenderMetrics={},this.learnMoreActionMetrics=new KB,this.backButtonActionMetrics=new KB,this.closeButtonActionMetrics=new KB}}class mY extends X${constructor(){super(),this.pageMetrics=new QB,this.pageRenderMetrics={}}}class yY extends mY{}class vY extends mY{constructor(e=[]){super(),this.shelves=[],this.shelves=e}}!function(e){e.visionOS="xros",e.iOS="ios"}(Aw||(Aw={}))
class AY extends X${constructor(e,t){super(),this.type=e,this.values=t}}class TY extends X${constructor(e,t,n=null){super(),this.name=e,this.value=t,this.isSelected=t===n}}class PY extends X${constructor(e,t,n,r){super(),this.instanceId=e,this.iAd=t,this.impressionId=n,this.transparencyAction=r}}class IY extends tU{constructor(e){super("AdTransparencyAction"),this.adTransparencyData=e}}class SY extends tU{constructor(e,t,n,r,o,s){super("SearchAction"),this.spellCheckEnabled=!1,this.title=e,this.term=t,this.url=n,this.origin=r,this.entity=o,this.presentationStyle=null!=s?s:[gI]}}class bY extends X${constructor(e,t){super(),this.hints=e,this.ghostHintTerm=t,this.pageMetrics=new QB,this.pageRenderMetrics={}}}class CY extends X${constructor(e,t,n=null){super(),this.primaryText=e,this.secondaryText=t,this.messageClickAction=n}}class kY extends eB{constructor(e){super(),this.resultType=e,this.clickAction=null}}class EY extends kY{constructor(e){super("content"),this.lockup=e}}class OY extends kY{constructor(e){super(Qx),this.lockup=e}}class RY extends kY{constructor(e){super(mI),this.lockup=e}}class DY extends kY{constructor(){super("advert"),this.lockups=[],this.displaysScreenshots=!0,this.itemBackground="ad"}}class _Y extends kY{constructor(){super(Kx)}}class LY extends kY{constructor(e){super(yI),this.title=e}}class xY extends kY{constructor(e,t,n,r,o){super("lockupCollection"),this.heading=e,this.headingArtwork=o,this.title=t,this.items=n,this.detailAction=r}}const MY={identifer:Zh.SearchResultLockupStyle,treatments:[0,1]}
!function(e){e.requestedUrl="_jet-internal:metricsHelpers_requestedUrl",e.timingValues="_jet-internal:metricsHelpers_timingValues",e.pageInformation="_jet-internal:metricsHelpers_pageInformation",e.contentMaxAge="_jet-internal:responseMetadata_contentMaxAge"}(Tw||(Tw={}))
const NY={identifer:Zh.CondensedTodayAds,treatments:[0,1]},FY="jet_native_advert_instanceid"
class $Y{constructor(e,t){e&&(this.appStoreClientRequestId=t,this.iAdId=e[hM],this.sponsoredSearchRequestData=e.dataBlob,this.routingInfo=e.iAdRoutingInfo,this.canary=e.canary)}validAdRequest(){const e=this.sponsoredSearchRequestData&&this.sponsoredSearchRequestData.length>0,t=this.routingInfo&&this.routingInfo.length>0
return e&&t}}const BY={showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}}
let UY=null
const GY=(e,t)=>{const n=e.isLandscape()
return n===t.isLandscape()?0:n?-1:1},VY=new Set([UO,hM,NM,mv,Kb,Mx,MO,xO,eF,"iAd",dM,bN,qy,$D,BN,DD])
class jY{constructor(e,t){this.period=e,this.type=t}isEqualTo(e){return e.period===this.period&&e.type===this.type}}class HY extends X${constructor(e,t,n,r,o=!1){super(),this.strategy=e,this.updateDelayInterval=t,this.timeSinceOnScreenInterval=n,this.timeToLiveEndDate=r,this.refreshWhileVisible=o}}const WY="isOnBoardingCard"
class qY extends X${constructor(e,t,n,r,o){super(),this.name=e,this.genreId=t,this.artwork=n,this.ageBandId=r,this.children=o}}class zY extends X${constructor(e){super(),this.categories=e}}class YY extends Error{}const JY="x-apple-application-instance",ZY=new Set([117,122,118,195,194,197,369,370,371,372,373,374,375,376,377,378,379,380,395,396,397,398,399,400,491,492,493,504,505,506,520,521,522,523,524,525,530,531,532,533]),KY=new Set([491,492,493]),QY=new Set([530,531,532,533]),XY=new Set([311,312,476]),eJ=new Set([...XY,518]),tJ=new Set([557,418,431,429,430,420,304,305,260,497]),nJ=new Set([413,414,254,255,256,266,271,436])
class rJ{}class oJ extends Error{}class sJ extends rJ{constructor(e){super(),this.rawData=e,this.appId=null,this.groupId=null,this.score=0,this.segScores=new Map,this.modifiedScore=0}}class iJ extends rJ{constructor(e){super(),this.rawData=e,this.isExactMatch=!1,this.isWildcardMatch=!1,this.isUnpersonalizedMatch=!1,this.isFallbackMatch=!1,this.appId=null,this.groupId=null}}const aJ="-1"
class cJ extends X${constructor(e){super(),this.incidentType=e}}class lJ extends cJ{constructor(e,t){super("discard"),this.instanceId=e,this.reason=t}}!function(e){e.EditorialItem="editorialItem",e.EditorialItemGroup="editorialItemGroup"}(Pw||(Pw={}))
const uJ=new Set([fw.Grid,fw.List,fw.NumberedList,fw.River]),dJ="ReviewsPage.ratings",fJ="ReviewsPage.actions",pJ={11:"43",30:"44"},hJ="ReviewsPage.ShelfId"
class wJ{constructor(e,t,n){this.sectionType=e,this.shelfId=t,this.shelfBasedMappedIds=n}createProductPageSection(e){return TW.has(this.sectionType)?new yW(this.sectionType,null):new yW(this.sectionType,this.shelfId)}createShelfIdList(){return this.shelfBasedMappedIds||[this.shelfId]}}const gJ=5,mJ=5,yJ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(Y$,VF),new wJ(Y$,XL),new wJ(Y$,DF),new wJ(Y$,BM),new wJ(Y$,vM),new wJ(Y$,s$),new wJ(Y$,fF),new wJ(Y$,yN),new wJ(Y$,mN),new wJ(Y$,zF),new wJ(Y$,i$),new wJ(Y$,JF),new wJ(G$,G$),new wJ(Y$,P$),new wJ(Y$,uF),new wJ(Y$,E$,[xF,zD,Gx,CN]),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,GN),new wJ(Y$,d$),new wJ(Y$,dF),new wJ(Y$,jF),new wJ(Y$,t$)],vJ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(Y$,VF),new wJ(Y$,XL),new wJ(Y$,DF),new wJ(Y$,BM),new wJ(Y$,vM),new wJ(Y$,s$),new wJ(Y$,fF),new wJ(Y$,yN),new wJ(Y$,mN),new wJ(Y$,zF),new wJ(Y$,i$),new wJ(Y$,JF),new wJ(G$,G$),new wJ(Y$,P$),new wJ(Y$,uF),new wJ(Y$,E$,[xF,Vx,yM,$M,CN,jx]),new wJ(Y$,Vx),new wJ(Y$,yM),new wJ(Y$,$M),new wJ(Y$,jx),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,GN),new wJ(Y$,d$),new wJ(Y$,dF),new wJ(Y$,jF),new wJ(Y$,t$)],AJ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(Y$,VF),new wJ(Y$,XL),new wJ(Y$,DF),new wJ(Y$,BM),new wJ(Y$,vM),new wJ(G$,G$),new wJ(Y$,P$),new wJ(Y$,s$),new wJ(Y$,uF),new wJ(Y$,JF),new wJ(Y$,E$,[xF,Gx,CN]),new wJ(Y$,zF),new wJ(Y$,i$),new wJ(Y$,fF),new wJ(Y$,yN),new wJ(Y$,mN),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,XM),new wJ(Y$,d$),new wJ(Y$,dF),new wJ(Y$,jF),new wJ(Y$,t$)],TJ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(Y$,VF),new wJ(Y$,XL),new wJ(Y$,DF),new wJ(Y$,BM),new wJ(Y$,vM),new wJ(G$,G$),new wJ(Y$,P$),new wJ(Y$,s$),new wJ(Y$,uF),new wJ(Y$,JF),new wJ(Y$,E$,[xF,yM,$M,CN]),new wJ(Y$,zF),new wJ(Y$,i$),new wJ(Y$,fF),new wJ(Y$,yN),new wJ(Y$,mN),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,XM),new wJ(Y$,d$),new wJ(Y$,dF),new wJ(Y$,jF),new wJ(Y$,t$)],PJ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(Y$,VF),new wJ(Y$,XL),new wJ(Y$,DF),new wJ(Y$,t$),new wJ(Y$,BM),new wJ(Y$,vM),new wJ(Y$,s$),new wJ(Y$,fF),new wJ(Y$,yN),new wJ(Y$,mN),new wJ(Y$,zF),new wJ(Y$,i$),new wJ(Y$,JF),new wJ(G$,G$),new wJ(Y$,P$),new wJ(Y$,uF),new wJ(Y$,E$,[xF,zD,Gx,CN]),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,GN),new wJ(Y$,d$),new wJ(Y$,dF),new wJ(Y$,jF)],IJ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(Y$,VF),new wJ(Y$,XL),new wJ(Y$,DF),new wJ(Y$,t$),new wJ(Y$,BM),new wJ(Y$,vM),new wJ(Y$,s$),new wJ(Y$,fF),new wJ(Y$,yN),new wJ(Y$,mN),new wJ(Y$,zF),new wJ(Y$,i$),new wJ(Y$,JF),new wJ(G$,G$),new wJ(Y$,P$),new wJ(Y$,uF),new wJ(Y$,E$,[xF,Vx,yM,$M,CN,jx]),new wJ(Y$,Vx),new wJ(Y$,yM),new wJ(Y$,$M),new wJ(Y$,jx),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,GN),new wJ(Y$,d$),new wJ(Y$,dF),new wJ(Y$,jF)],SJ=5,bJ=5,CJ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(Y$,VF),new wJ(Y$,QL),new wJ(Y$,DF),new wJ(Y$,s$),new wJ(Y$,fF),new wJ(Y$,zF),new wJ(Y$,i$),new wJ(Y$,JF),new wJ(G$,G$),new wJ(Y$,P$),new wJ(Y$,uF),new wJ(Y$,E$,[xF,zD,Gx,CN]),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,GN),new wJ(Y$,d$),new wJ(Y$,dF),new wJ(Y$,t$),new wJ(Y$,jF)],kJ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(Y$,VF),new wJ(Y$,QL),new wJ(Y$,DF),new wJ(Y$,s$),new wJ(Y$,fF),new wJ(Y$,zF),new wJ(Y$,i$),new wJ(Y$,JF),new wJ(G$,G$),new wJ(Y$,P$),new wJ(Y$,uF),new wJ(Y$,E$,[xF,Vx,yM,$M,CN,jx]),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,GN),new wJ(Y$,d$),new wJ(Y$,dF),new wJ(Y$,t$),new wJ(Y$,jF)],EJ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(Y$,VF),new wJ(Y$,QL),new wJ(Y$,DF),new wJ(G$,G$),new wJ(Y$,P$),new wJ(Y$,uF),new wJ(Y$,JF),new wJ(Y$,E$,[xF,Gx,CN]),new wJ(Y$,s$),new wJ(Y$,zF),new wJ(Y$,i$),new wJ(Y$,fF),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,XM),new wJ(Y$,d$),new wJ(Y$,dF),new wJ(Y$,t$),new wJ(Y$,jF)],OJ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(Y$,VF),new wJ(Y$,QL),new wJ(Y$,DF),new wJ(G$,G$),new wJ(Y$,P$),new wJ(Y$,uF),new wJ(Y$,JF),new wJ(Y$,E$,[xF,yM,$M,CN]),new wJ(Y$,s$),new wJ(Y$,zF),new wJ(Y$,i$),new wJ(Y$,fF),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,XM),new wJ(Y$,d$),new wJ(Y$,dF),new wJ(Y$,t$),new wJ(Y$,jF)],RJ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(Y$,VF),new wJ(Y$,QL),new wJ(Y$,DF),new wJ(Y$,t$),new wJ(Y$,s$),new wJ(Y$,fF),new wJ(Y$,zF),new wJ(Y$,i$),new wJ(Y$,JF),new wJ(G$,G$),new wJ(Y$,P$),new wJ(Y$,uF),new wJ(Y$,E$,[xF,zD,Gx,CN]),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,GN),new wJ(Y$,d$),new wJ(Y$,dF),new wJ(Y$,jF)],DJ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(Y$,VF),new wJ(Y$,QL),new wJ(Y$,DF),new wJ(Y$,t$),new wJ(Y$,s$),new wJ(Y$,fF),new wJ(Y$,zF),new wJ(Y$,i$),new wJ(Y$,JF),new wJ(G$,G$),new wJ(Y$,P$),new wJ(Y$,uF),new wJ(Y$,E$,[xF,Vx,yM,$M,CN,jx]),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,GN),new wJ(Y$,d$),new wJ(Y$,dF),new wJ(Y$,jF)],_J=5,LJ=5,xJ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(Y$,VF),new wJ(Y$,DF),new wJ(Y$,BM),new wJ(Y$,vM),new wJ(Y$,s$),new wJ(Y$,fF),new wJ(Y$,yN),new wJ(Y$,mN),new wJ(Y$,zF),new wJ(Y$,i$),new wJ(Y$,JF),new wJ(G$,G$),new wJ(Y$,P$),new wJ(Y$,uF),new wJ(Y$,E$),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,GN),new wJ(Y$,d$),new wJ(Y$,dF),new wJ(Y$,jF),new wJ(Y$,t$)],MJ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(Y$,VF),new wJ(Y$,DF),new wJ(Y$,BM),new wJ(Y$,vM),new wJ(G$,G$),new wJ(Y$,P$),new wJ(Y$,s$),new wJ(Y$,uF),new wJ(Y$,JF),new wJ(Y$,E$),new wJ(Y$,zF),new wJ(Y$,i$),new wJ(Y$,fF),new wJ(Y$,yN),new wJ(Y$,mN),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,XM),new wJ(Y$,d$),new wJ(Y$,dF),new wJ(Y$,jF),new wJ(Y$,t$)],NJ=5,FJ=5,$J=[new wJ(N$,N$),new wJ(B$,B$),new wJ(Y$,VF),new wJ(Y$,DF),new wJ(Y$,s$),new wJ(Y$,fF),new wJ(Y$,zF),new wJ(Y$,i$),new wJ(Y$,JF),new wJ(G$,G$),new wJ(Y$,P$),new wJ(Y$,uF),new wJ(Y$,E$),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,GN),new wJ(Y$,d$),new wJ(Y$,dF),new wJ(Y$,t$),new wJ(Y$,jF)],BJ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(Y$,VF),new wJ(Y$,DF),new wJ(G$,G$),new wJ(Y$,P$),new wJ(Y$,uF),new wJ(Y$,JF),new wJ(Y$,E$),new wJ(Y$,s$),new wJ(Y$,zF),new wJ(Y$,i$),new wJ(Y$,fF),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,XM),new wJ(Y$,d$),new wJ(Y$,dF),new wJ(Y$,t$),new wJ(Y$,jF)],UJ=5,GJ=5,VJ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(Y$,JF),new wJ(G$,G$),new wJ(Y$,AM),new wJ(Y$,zF),new wJ(Y$,i$),new wJ(Y$,qx),new wJ(Y$,jF),new wJ(Y$,t$),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,GN),new wJ(Y$,i_)],jJ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(G$,G$),new wJ(Y$,AM),new wJ(Y$,JF),new wJ(Y$,Wx),new wJ(Y$,zF),new wJ(Y$,i$),new wJ(Y$,jF),new wJ(Y$,t$),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,XM),new wJ(Y$,i_)],HJ=5,WJ=5,qJ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(Y$,JF),new wJ(G$,G$),new wJ(Y$,AM),new wJ(Y$,zF),new wJ(Y$,i$),new wJ(Y$,qx),new wJ(Y$,t$),new wJ(Y$,jF),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,GN),new wJ(Y$,i_)],zJ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(G$,G$),new wJ(Y$,AM),new wJ(Y$,JF),new wJ(Y$,Wx),new wJ(Y$,zF),new wJ(Y$,i$),new wJ(Y$,t$),new wJ(Y$,jF),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,XM),new wJ(Y$,i_)],YJ=3,JJ=3,ZJ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(Y$,fF),new wJ(G$,G$),new wJ(Y$,P$),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,ER)],KJ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(G$,G$),new wJ(Y$,P$),new wJ(Y$,fF),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,ER)],QJ=5,XJ=5,eZ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(Y$,DF),new wJ(Y$,JF),new wJ(G$,G$),new wJ(Y$,AM),new wJ(Y$,qx),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,GN),new wJ(Y$,d$),new wJ(Y$,jF),new wJ(Y$,t$)],tZ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(Y$,DF),new wJ(G$,G$),new wJ(Y$,AM),new wJ(Y$,JF),new wJ(Y$,Wx),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,XM),new wJ(Y$,d$),new wJ(Y$,jF),new wJ(Y$,t$)],nZ=5,rZ=5,oZ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(Y$,DF),new wJ(Y$,zF),new wJ(Y$,i$),new wJ(Y$,JF),new wJ(G$,G$),new wJ(Y$,AM),new wJ(Y$,qx),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,GN),new wJ(Y$,d$),new wJ(Y$,t$),new wJ(Y$,jF)],sZ=[new wJ(N$,N$),new wJ(B$,B$),new wJ(Y$,DF),new wJ(G$,G$),new wJ(Y$,AM),new wJ(Y$,JF),new wJ(Y$,Wx),new wJ(Y$,zF),new wJ(Y$,i$),new wJ(Y$,p$),new wJ(Y$,a$),new wJ(Y$,YF),new wJ(Y$,k$),new wJ(Y$,XM),new wJ(Y$,d$),new wJ(Y$,t$),new wJ(Y$,jF)],iZ="product_media"
class aZ extends X${constructor(e){super(),this.style=e}isValidUber(e){function t(e){return null!=e&&0!==Object.keys(e).length}return t(this.artwork)||t(this.compactArtwork)||t(this.video)||t(this.compactVideo)||e&&t(this.iconArtwork)}}let cZ=null
const lZ=[P$,dm,dS,OF,A_,fm,qM,fS,xE,Ax,OM,ME,zM,pS,ux,pm,hm,YI],uZ=/id([0-9]+)\/?$/i,dZ={915249334:"1462947752"},fZ=[RM,yS,ON,x$,S_,GE,aD,cD],pZ=[RM,vS,ON,S_],hZ=[RM,ON,x$,b_],wZ=aD
class gZ{constructor(e){this.supportedFeaturedContentIds=new Set([]),this.supportedNativeGroupingShelfIds=new Set([]),this.builderClass=e}supports(e,t,n,r){return this._supports(e,t,n,r)}_supports(e,t,n,r){const o=this.supportedFeaturedContentIds.has(n)
let i
return i=!s(r)||this.supportedNativeGroupingShelfIds.has(r),o&&i}createShelf(e,t,n,o,a){var c
const l=t,u=this.initialShelfDataFromGroupingMediaApiData(l),d=this.shelfTokenFromBaseTokenAndMediaApiData(e,l,o,n),f=this.shelfMetricsOptionsFromBaseMetricsOptions(e,d,a),p=i(f)
p&&this.shouldImpressShelf()&&Fu(0,f,d.title)
const h=this._createShelf(e,d,u,n)
if(p&&this.shouldImpressShelf()&&(Bu(f.locationTracker),s(h)&&(nn(0,h,f),(null===(c=h.url)||void 0===c?void 0:c.length)>0&&i(h.impressionMetrics)&&d.showingPlaceholders))){const e=h.url
try{const t=nj.from(e).pathComponents().pop(),n=JSON.parse(decodeURIComponent(t))
n.originalPlaceholderShelfImpressionMetrics=h.impressionMetrics,function(e,t){const n=nj.from(e.url),o=nj.from(Yr(e,t))
for(const e of Object.keys(n.query))r(o.query[e])&&(o.query[e]=n.query[e])
e.url=o.build()}(h,n)}catch{h.url=e}}return this.finalizeInitialShelfForDisplay(e,h,d,u,n),p&&this.shouldPrepareLocationTrackerForNextPosition()&&ju(n.metricsLocationTracker),h}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){return n}shouldImpressShelf(){return!0}shouldPrepareLocationTrackerForNextPosition(){return!0}finalizeInitialShelfForDisplay(e,t,n,r,s){var a,c
if(o(t))return
n.isSearchLandingPage&&ro(0,t,n),(null===(a=t.url)||void 0===a?void 0:a.length)>0&&i(s.additionalShelfParameters)&&(t.url=nj.from(t.url).append(YM,s.additionalShelfParameters).build())
const l=(0,Yh.isSome)(t)&&(null===(c=t.url)||void 0===c?void 0:c.length)>0
o(t.items)&&!l&&(t.isHidden=!0)}finalizeSecondaryShelfForDisplay(e,t,n,s){if(!o(t)){var a,c
if(n.remainingItems.length&&n.remainingItems.map(e=>e.id),t&&(t.mergeWhenFetched=((c=n).shelfStyle,!c.showingPlaceholders&&c.shelfStyle!==dO),t.networkTimingMetrics=s.responseTimingValues,t.nextPreferredContentRefreshDate=null==(a={timeToLive:null,nextPreferredContentRefreshDate:null,refreshWhileVisibleForNextPreferredContentRefreshDate:!1})?void 0:a.nextPreferredContentRefreshDate),i(n.originalPlaceholderShelfImpressionMetrics))if(r(t.impressionMetrics))t.impressionMetrics=n.originalPlaceholderShelfImpressionMetrics
else for(const e in n.originalPlaceholderShelfImpressionMetrics.fields)Object.prototype.hasOwnProperty.call(n.originalPlaceholderShelfImpressionMetrics.fields,e)&&(t.impressionMetrics.fields[e]=n.originalPlaceholderShelfImpressionMetrics.fields[e])
!n.hasExistingContent&&o(t.items)&&(t.isHidden=!0),n.isSearchLandingPage&&ro(0,t,n)}}handleShelf(e,t,n,r,o,s){const i=n[$N],a=JSON.parse(i)
a.isFirstRender=!1,this.secondaryShelfDataForShelfUrl(e,t,a,n).then(t=>{const n=this._createShelf(e,a,t,null)
this.finalizeSecondaryShelfForDisplay(e,n,a,t),o(n)}).catch(e=>{if(a&&!a.hasExistingContent){const e=new rH(a.shelfStyle)
e.isHidden=!0,o(e)}else s(e)})}shelfRoute(e){return i(this.supportedNativeGroupingShelfIds)?function(e,t){const n=[]
for(const t of e)n.push(Ai(-1,t,void 0))
return n}(this.supportedNativeGroupingShelfIds):Ti(this.supportedFeaturedContentIds)}static async secondaryGroupingShelfDataForShelfUrl(e,t,n,r){return await gZ.secondaryGroupingShelfMediaApiData(e,t,n,r).then(e=>{const t=function(e,t){var n
const r=(null===(n=e.relationshipToFetch)||void 0===n?void 0:n.length)>0
let o=_(t)
if(r){const n={}
for(const e of t.data)n[e.id]=e
o=[]
for(const t of e.remainingItems){const r=oe(t,e.relationshipToFetch)
i(r)&&(t.relationships[e.relationshipToFetch].data=[n[r.id]]),o.push(t)}}return o}(n,e)
return{shelfContents:t,responseTimingValues:e[Tw.timingValues]}})}static async secondaryGroupingShelfMediaApiData(e,t,n,r){const o=t.build()
let s
return s=pi(e,t)?new hH(e,o):Zr(e,n),s?(s.includingAdditionalPlatforms(function(e){return E(e)}(e)),s.includingAttributes(function(e){const t=[w$,iF,hF,xL]
return e.appleSilicon.isSupportEnabled&&t.push(NF),t}(e)),s.usingCustomAttributes(De(e)),s.attributingTo(t.build()),await Mr(e,s).then(e=>(Jr(n,s.ids),e))):await Promise.reject(new Error(`Could not construct media API request for: ${t}`))}}class mZ extends gZ{constructor(){super("GroupingAppEventShelfController"),this.supportedFeaturedContentIds=new Set([519,518])}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:se(e,V$)}}async secondaryShelfDataForShelfUrl(e,t,n,r){var o
if(!((null===(o=n.recommendationsHref)||void 0===o?void 0:o.length)>0)){const t=[],r=[]
for(const e of n.remainingItems)e.type===f$?r.push(e):t.push(e)
const o=new hH(e,t)
Ue(e,o,t)
const s=new hH(e,r)
Ue(e,s,r)
const i=await Promise.all([this.fetchRemainingItems(e,o),this.fetchRemainingItems(e,s)]),a={...i[0],...i[1]},c=[]
for(const e of n.remainingItems){const t=a[e.id];(0,Yh.isSome)(t)&&c.push(t)}return Jr(n,new Set([...s.ids,...o.ids])),{shelfContents:c}}try{const o=await gZ.secondaryGroupingShelfMediaApiData(e,t,n,r),s=D(o),i=this.initialShelfDataFromGroupingMediaApiData(s)
return i.responseTimingValues=o[Tw.timingValues],i}catch{return{shelfContents:[]}}}async fetchRemainingItems(e,t){const n={}
if(t.ids.size>0){Kr(e,t)
try{await Mr(e,t).then(e=>{(e=>{for(const t of e.data)n[t.id]=t})(e)})}catch(e){}}return n}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o=518===n.featuredContentId
let s=null
const a=this.initialShelfDataFromGroupingMediaApiData(t)
o&&i(a.shelfContents)&&(s=this.personalizedDataResultFromDataItems(e,a.shelfContents))
const c={...n,shouldPersonalizeData:o,personalizedDataResult:s},l=i(a.shelfContents),u=!z(t,fy)
return!l&&u?(c.recommendationsHref=t.href,c.isValidRecommendationsShelf=!0):c.isValidRecommendationsShelf=l,c}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){const r={...n}
if(i(t.personalizedDataResult)){const e=xu(n.recoMetricsData,t.personalizedDataResult.processingType,null)
r.recoMetricsData=e}return r}_createShelf(e,t,n,s){if(!ar(e))return null
if(!t.isValidRecommendationsShelf)return null
const a={pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:t.metricsPageInformation.recoMetricsData}
let c=n.shelfContents
i(t.personalizedDataResult)&&t.isFirstRender&&(c=t.personalizedDataResult.personalizedData)
const l=[]
for(const e of c)r(e.attributes)||Wr(t)?(t.isDeferring=!0,t.remainingItems.push(e)):l.push(e)
const u=wr(e,l,null,!1,!1,a,!1,!0,t.isArcadePage,!1)
Ar(u.nextAppEventPromotionStartDate,null==s?void 0:s.refreshController)
const d=u.appPromotions,f=e.props.enabled(Bg)?VI:Kx,p=new rH(f)
return p.isHorizontal=!0,p.title=t.title,p.items=d,o(p.items)&&t.isFirstRender&&ci(e,p,t,t.featuredContentId),p.url=Yr(p,t),o(p.items)&&o(p.url)?t.isFirstRender?null:mZ.makeHiddenShelf(t):p}personalizedDataResultFromDataItems(e,t){const n=new Set
for(const e of t){const t=d(e,M_);(null==t?void 0:t.length)>0&&n.add(t)}const r=go(e,n)
return ho(e,py,t,!1,r,null,null,null,!0)}static makeHiddenShelf(e){const t=new rH(e.shelfStyle)
return t.isHidden=!0,t}}class yZ extends gZ{constructor(){super("GroupingArcadeFooterShelfController"),this.supportedFeaturedContentIds=new Set([-1]),this.supportedNativeGroupingShelfIds=new Set([1])}shouldImpressShelf(){return!1}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:x(e),responseTimingValues:null}}async secondaryShelfDataForShelfUrl(e,t,n,r){const o=fd(e,this.numberOfIconsForArcadeAppGrid(e.client.deviceType))
return await Mr(e,o).then(e=>{const t=this.initialShelfDataFromGroupingMediaApiData(e)
return t.responseTimingValues=e[Tw.timingValues],t})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o={...n,shouldIncludeShelfUrl:n.isFirstRender}
return o.showingPlaceholders=n.isFirstRender,o}_createShelf(e,t,n,o){const s=new vB,a=new rH(eb)
a.items=[s]
const c={targetType:oy,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,title:e.loc.string(qI),id:t.id,kind:sy,softwareType:FF}
nn(0,s,c),Fu(0,c,c.title),s.buttonAction=cd(e,ix,t.metricsPageInformation,t.metricsLocationTracker)
const l={targetType:j$,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,title:s.buttonAction.title,id:Gg,kind:j$,softwareType:FF}
nn(0,s.buttonAction,l),Bu(c.locationTracker)
const u=e.bag.termsAndConditionsURL
if(!r(u)&&"tv"!==e.client.deviceType){const t=e.loc.string(tb),n=new sU(u),r=new vj(t)
r.clickAction=n,r.presentationStyle=[rO,oO,sO],s.footnote=r}if(a.background={type:nF,color:U(PS)},i(n.shelfContents)){const r={pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker}
s.icons=Rl(e,n.shelfContents,r,{useCase:2})}else s.icons=[]
return t.shouldIncludeShelfUrl&&(a.url=zr(t)),a}numberOfIconsForArcadeAppGrid(e){return e===U$?9:20}}class vZ extends gZ{constructor(){super("GroupingBrickShelfController"),this.supportedFeaturedContentIds=new Set([421,422,423,261])}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:se(e,yF)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await gZ.secondaryGroupingShelfDataForShelfUrl(e,t,n,r).then(e=>({shelfContents:no(e.shelfContents,se(n.featuredContentData,yF))}))}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,o){let s=q(t,"suppressText")
r(s)&&(s=!0)
const i={...n,showSupplementaryText:!s}
return i.clientIdentifierOverride=xt(0,t),i}_createShelf(e,t,r,i){const a=[],c=[],u=d(t.featuredContentData.attributes,vF)===FL&&e.featureFlags.isEnabled(hy)
let p
if(u){p=new rH(fO)
const n=f(t.featuredContentData.attributes,"layoutStyle.layoutSize")
p.rowsPerColumn=null!=n?n:function(e){return e.client.isPhone?2:1}(e),Gu(t.metricsLocationTracker).name=wy}else p=new rH(LL)
p.isHorizontal=!0
for(const n of r.shelfContents){const r=vZ.createBrick(e,n,u,t.metricsPageInformation,t.metricsLocationTracker,t,i)
r?(a.push(r),ju(t.metricsLocationTracker)):c.push(n)}if(s(t.presentationHints)&&(p.presentationHints=t.presentationHints),s(t.showSupplementaryText)&&(p.presentationHints={...p.presentationHints,showSupplementaryText:t.showSupplementaryText}),delete t.maxItemCount,s(n(t.featuredContentData,"relationships.children.data"))&&(t.featuredContentData.relationships[yF].data=c),p.title=t.title,p.subtitle=t.subtitle,u){const e=f(t.featuredContentData.attributes,sb)
p.items=a.slice(0,null!=e?e:a.length)}else p.items=a
const h=l(t.featuredContentData.attributes,gy)
if(u&&h){const n=new rH(fO)
n.items=this.sortCategories(e,a),n.presentationHints={isSeeAllContext:!0}
const r=new cH([n])
r.title=t.title
const o=new nU($$)
o.title=e.loc.string(XN),o.pageData=r,p.seeAllAction=o,sd(e,o,null,{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker})}return p&&o(p.items)&&t.isFirstRender&&ci(e,p,t,t.featuredContentId),t.presentationHints=p.presentationHints,p.url=Yr(p,t),p}static createBrick(e,t,n,r,o,i,a){const c={targetType:n?pO:LL,pageInformation:r,locationTracker:o,recoMetricsData:M(t)},l=to(e,t,i,!1,null,c,a)
if(!l)return null
const u=new Mj,d={useCase:18}
if(n){const t=Dl(e,l.content,bw.categoryBreakout,tw.Density1)
u.artworks=t}else if(l.artwork&&261!==(null==i?void 0:i.featuredContentId)){let t=p(l.artwork,zS)
t||(t=p(l.artwork,"originalFlowcaseBrick"))
const n=Xr(e,t,d)
u.artworks=[n]}else{const n=eo(e,t,1060,520,d)
u.artworks=[n]}u.accessibilityLabel=l.title,u.shortEditorialDescription=l.title,u.clickAction=l.action,435===Y(t,nN)&&(u.personalizationStyle=AD)
const f=oe(t,V$)
if(s(f)){const n=td(e,f,c)
u.flowPreviewActionsConfiguration=Is(e,t,!0,null==i?void 0:i.clientIdentifierOverride,u.clickAction,c,n)}return nn(0,u,an(e,t,l.title,c)),u.isValid()?u:null}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){const r={...n}
return d(t.featuredContentData.attributes,vF)===FL&&e.featureFlags.isEnabled(hy)&&(r.title=wy),r}sortCategories(e,t){return t.sort((t,n)=>{try{return t.shortEditorialDescription.localeCompare(n.shortEditorialDescription,e.loc.safeIdentifier,{usage:oF})}catch(e){return 0}})}}class AZ extends gZ{constructor(){super("GroupingRibbonBarShelfController"),this.supportedFeaturedContentIds=new Set([556])}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:se(e,V$)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await gZ.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}_createShelf(e,t,n,o){if(!e.featureFlags.isEnabled("arcade_category_bar"))return null
const s=[],i=new rH("ribbonBar")
i.isHorizontal=!0
const a=Pi(e,e.bag.arcadeCategoryBarSAGUpliftDisplayRate)
if(t.isArcadePage&&t.isFirstRender&&a){const n=AZ.createSeeAllGamesRibbonItem(e,t.metricsPageInformation,t.metricsLocationTracker)
s.push(n),ju(t.metricsLocationTracker)}for(const i of n.shelfContents){if(r(i.attributes)||Wr(t)){t.isDeferring=!0,t.remainingItems.push(i)
continue}const n=AZ.createRibbonItem(e,i,t.metricsPageInformation,t.metricsLocationTracker,t,o)
s.push(n),ju(t.metricsLocationTracker)}return i.items=s,i.url=Yr(i,t),i}static createRibbonItem(e,t,n,r,o,s){var i,a
const c={targetType:$L,pageInformation:n,locationTracker:r,recoMetricsData:M(t)},l=to(e,t,o,!1,null,c,s),u=td(e,t,c)
u.targetType=c.targetType
const d=yl(e,t,u,null==o?void 0:o.clientIdentifierOverride),f=null!==(i=null==l?void 0:l.action)&&void 0!==i?i:d,p=pu(e,t,z$),h=null!==(a=null==l?void 0:l.title)&&void 0!==a?a:p,w=new xj(h,f),g=xr(e,t)
let m
if((0,Yh.isSome)(g))m=El(e,g,{useCase:29})
else{const t=e.props.enabled("appstoreRibbonBarFallbackIcon")
let n
n=o.isArcadePage||!t?"resource://arcade-ribbon-bar-fallback-icon":"resource://appstore-ribbon-bar-fallback-icon",m=nt(e,n,36,36)}return w.artwork=m,w.accessibilityLabel=h,nn(0,w,an(e,t,h,c)),w.isValid()?w:null}static createSeeAllGamesRibbonItem(e,t,n){const r=e.loc.string("Arcade.CategoryBar.AllGames.Title"),o=cd(e,ix,t,n,r,QS,UF,$L),s=new iU([o]),i=new iU([s]),a=new xj(r,i),c=nt(e,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACACAYAAADHy7H2AAABdWlDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokXWQvUvDUBTFT6tS0DqIDh0cMolD1NIKdnFoKxRFMFQFq1OafgltfCQpUnETVyn4H1jBWXCwiFRwcXAQRAcR3Zw6KbhoeN6XVNoi3sfl/Ticc7lcwBtQGSv2AijplpFMxKS11Lrke4OHnlOqZrKooiwK/v276/PR9d5PiFlNu3YQ2U9cl84ul3aeAlN//V3Vn8maGv3f1EGNGRbgkYmVbYsJ3iUeMWgp4qrgvMvHgtMunzuelWSc+JZY0gpqhrhJLKc79HwHl4plrbWD2N6f1VeXxRzqUcxhEyYYilBRgQQF4X/8044/ji1yV2BQLo8CLMpESRETssTz0KFhEjJxCEHqkLhz634PrfvJbW3vFZhtcM4v2tpCAzidoZPV29p4BBgaAG7qTDVUR+qh9uZywPsJMJgChu8os2HmwiF3e38M6Hvh/GMM8B0CdpXzryPO7RqFn4Er/QcXKWq8UwZBywAAAARjSUNQDA0AAW4D4+8AAAB4ZVhJZk1NACoAAAAIAAUBEgADAAAAAQABAAABGgAFAAAAAQAAAEoBGwAFAAAAAQAAAFIBKAADAAAAAQACAACHaQAEAAAAAQAAAFoAAAAAAAAASAAAAAEAAABIAAAAAQACoAIABAAAAAEAAACCoAMABAAAAAEAAACAAAAAACBAcQEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAIGaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4yMTk2PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjIxNjA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KIUPY5gAAGmtJREFUeAHtXXuMJMV5r+qZ2Qe7h299bA7O3B0GGwOXBwEsbMXCC1H+QJjHgpbHEcyBEiLl4cgJxLKElIkUS4DtQCCSpZOSEAx3hjW+YwmclAfa4MQScfBL2Tg5ED5uyfFYw0Lu9nZvHl35/b7qmu3Z65numZ3dndnpupvt7np+31e/+qq6uuorpVKXSiCVQCqBVAKpBFIJpBJIJZBKIJVAKoF6EtD1ApcbZpRa0fxJHwpAMe3hVprfleS1ZRVlRkayqr8/ozbPa7Wh36gTW3118KBRw8NG7djR2sqamrJ0D73mqdmztRqY8QQKc8M+yirpfN5fSWgYA/zdOJarKnfoNQNabLkrwe/MjFbnnqvV9LRXkfGm+bLOT5ZaweuygWCuvLKXhOgDB060gqDl5mHyylNTY6SpoMfHy8vNL5ze5PPIe2pF8g6X08i9GRvrUacf0/qR5cm/aSCIUA5N9uhHJxcc4ebma7aoTHabMmYLNPZpaDcbAJE+hGfg13RZLn939Y0xnucVlPGPI/9ZlPUO7t9Qpb7XUfnHXDyza6QvTJ/zb+YqgD9woAAmRLuhAvpVdmG70t6ZyujTkecQaBnwld/jad0yXgNayyjjBCB+FGX8HH5vqkJxWo8/e9jxIoCYmfH1ZHMaoimCTR7dgJr0dV755o6xYVUo3YiKvgJEfgJyolAAANWjPKuxhdimSnJsLrm6jgY6GuVSHc/jbhbiP4xq+gGENqH37vtHpjK7dgEMj1bAuiSnRI8EgdN45pbRzyDX6wDyS5D4LFw/jDIHlNYefja/leCVOVt+i7gj2N/B7xXw+qLKZZ/Uj40LKAgINIYCwhpyDZNs7rorp3fvJjHK3Dx6p9LmbuXp86XSSajvs5oYTrXMSqIvZcRLSxwydCIH0lABymThw58UpMrl4xDQ8ypT/rJ+fOLV5WgGJ1gzduWwyvU+AAauA68bAQBwB5aMKYOeEoq2/LaQz4qwOCYBZ/ixZWVQak5D7Qjrvoj4Z/B/WD+x/yFcVRi4fE7imHlixwGhUz1m57V/CUK+IML3/XmQeYI1LjVkQDDIRNVL/ga1whsE0xvRws8n+yMWo8KFuxP6uWcXbiPhr0iDCRApi7JOUdlMRpXK00iyC9rhhWbA4Pg1t157AYh/Gt3eeQAZKxxdklQ8LsIjKygkS0un47eaboYt5WWRLysbKyOXOa+ShhLlP2SIH3lmmTkIfQCNERSZx1Qx+9vUCA7ACE/kyEAiZzgI4xsAnNl53UMqm/0CxF6EBkAfrUogrQe13YP7HpCHrgPjAotgkEgcoOO0fad9to8MQqDghF2rPCM9gYSfe+YVz4xHvyDfIF4GVwhDyu1FIHk6BhB8gJa7FTL/trn1+k9xrMBuAmGJHMdABL0Zu3obyj2gvAxB8AESUy2TPvLJH8smDSw3+JFGchPQKtfwPdPjORwuz6xOGw+PEkF4DvyQP8uB5pMye3GlvAENM6vK/hy6iM/72eJfw08JGKQL51O8o1ATOSCsH5nPm1tHb0eCR1E4+6HjATEWo4lyWoVI5Mq2nKKocd9Mqb7yp/XfTBwNd21JKDE7R19QWe9yAOs9xOcbAytbGkSS9Csex/JKFcOBbAYNdFCVS3ejm/g6/LTK53WS12kyFesCNTNvdl6FkbH5kiTQAQgokvYRi5DG/gEioIiyxi/PoZ3tUAven0hg4SA1VV1n7ro4xwgCeguC9/FIbWLFzsB2cVb27FuoHU5Aa6HT0F80O2/4OPyMOnIkll+ykggIiGcz0z03Ievz8eMoPFEBLGS1HWsrACdVbRndFwcPNxLI0kXw3bue2/2ynaQx5nehCRiTKjnIsl7CNQ0jJPqkm8hlPoLX6RtIDQf28qofQ1osEKANMuwSmA9e1H5d3g6UKUCwmBuIyX2tgwUR0oqL6HC3o9FcJiQtLHAME+lkgAhWzW2jv4gIv4IfB4bCq80uMlm7eLI+MYhExWhzBTW5JWwytp5jIyAjafnm86ObIMxz2bTg7LDfltK+fy1Q2UkUMd5C/24uFmLPss08kvDhYSuTkvokQM8xgaiEyLjt6ekFWuw8lfPPFBKPHI3FcDwQBgZsnEIZo2ezOQBCe4ogmiq+dPky8DbqYxJl06Xx6tIzO6Kza2NfO4eBhmvYdaOu/K1CrfsGUof0eCDMzVk0efoM5DOIH/vPWITVKXO1g0gr1CWclqlgJaPoyRrqkh+P6Hy9XUDfSZxaylGnmm9LPZiXxlQ/3FPjnPqqy0k8EAYGbPZKnYYsOXKmqqybKcLbz0mXZjaaO6/h9LfCnEg071uutl2BNsMSL5gUk/vO+MO6KXNGIqPVJpKMLt2+TNehP1oY4QRvv22BoD0KkGqns0RTBVnTr+Yx60h37FhVCL3YakLv3IP4tkXvTnPkCxqQF3Nqhfg/y5/EbyUMN/FAGBwMpGH6pJ/l9GhnQYH8BjzoHIa5diRtRwthWSiVt5qOb0pIgVlKbbuU6ljt/WSrO6gh+fKbiN54ICxmY+cN7IBk0bez7sCvtnxE0p23vjuwCESmjIl59x0gMkGbe9bjtZr0RoBQnbJLnoCIjuwfpHoaWAOSAiEW0J2sEWKZq0RIgVARRfRN56qDaH5q+aZAqCEZ+25Ud6BdI2VneqdAqFtv3aIPkrw+1hVUGrheJJBqhPVSk8vkIwXCMgW4XpKnQFgvNblMPlIgLFOA6yV5CoT1UpPL5CMFwjIFuF6Sp0BYLzW5TD5SICxTgOsleQqE9VKTy+Sju4DQPZ8OGoZFdwGhgU8Hss4P4uwW7HQXEBpuJ0zQwQtTGuA3BUIDwlrPUZMDwV8XLQOWG7z4DmKSVe747eAVSl7yxbfxQKgs+4YtBDqsjxVJxotTorfJH9fVl1WxYDe4vhpBWT5vuZqcxN4QE2zkcYCIiN++XpZf2q9I6OKB4JZ9e3oOwuFSf2ydIBwSlrDW0cKAhdE/1Z+z9pQqy/SrCUR0jBMF7tz42ylcLjJh+Q3Wmpu5xYD6d/FAOLrZCsMo2ggoQEpMExZv/RLaKVTDKtnMAi2ewAba0Ek8CADGxgKZwFobIdF5jnx5sl1PLM5JZdFgxkn8hlmLB4Lb+6j020jIVsJ9AXUzDRfQJvdYlS6V+q6zjqZmZ2ttXrH7HgxM2DFNJ+3jIIta9nlmxWCGljrDxp08OalbZ/FAGJgJMtBv4IatJD5Nm9R+QAbpB8286NfpJxZRxsejgRCMiXxP2VFEwD3TdYTjzm+Y+AHZ7wMM/ys019rwG2IovlJ7zrWbQgc3TQNVh4OWFYOvUAlrfSstBDt+YKUT28T/S8iZPZuW16KrOBg7QDA/oqUVOETtEGdHbtgA62UxxH0dw/ppofzcVthH2L27tGiASv8gkF8WBUS3qDaTmd3Harjf8V2A+HtC3uIO75OphS1n8SzkXkI/+xbQwrTRoDk59Zr5hAiELRvAWOvv673P0kor9HhgI7oOdbEaQVrO7CwrHq68Hy3r/3DD7fEwPkG/tnacBOD4gHz+u96z/0cQmFZnnVXTMil3Q7PrgLmg95DuOZ3xepCmRF5Dwm47pjkIgCOd/apYQgdRfpYeYgoogU3qWCAwM1g8PyF2B/dMvIiCngPiOKBKsOteUq/lH2qtHrRsvE+bB4WQsbG+0Nb3aNoqLShzP/rZBcgYecB0RnTs9vC13cIJmNfjtv/n1HkX/b0QNpKMvERAEMG99JKYnINhx7vxO4TZBNpLoBptx4ZCmggCDxZYqdof0Xue+SdnJhDPdR20QVmMiO15+hXg/R4YsuxHAlgdsR1N3cSrHCjCtwiF9Vt9GrTBDOrmXtFstMuc0Ix/IiCQN752iRnbb00cwSBqDGJBgd6HQIgTOgXPe6GNaVbRuXJJQ0AHbDNnswOqWN6LLuGPA1rswDcBYQQDoyHtX6lS8avI61T0MZQX8hdArDG/jgZcjRgLg3FwQwOot+vH9/04eDNKPLPYsLZzBp/NTaPnm4x5XGcyF0F9oiJgRl7DAB/JWn0wOD5YUbCJCGMYtNquzdf1E8+IoU1p4Qn6SqSvODKFjMmPglX2P4KQv4IfbRlyjEGgIIwVsurT0MAk/uG0AvQIOdRBBlr6FYwM7szt3fevYj0/P1l2tJP+OOcEGBevKjxQsbS1qNXO0buN9u+EMM6B9WDbfTC2AJaCopDwv6WOZBtmbMdIwUjJ1gnen43C24F/v+aYhjGtrcjE2iBMKsvgM4UK49y/hLt7UfTleMR5FEHBlldGY3T88L+lzvKLLDnwreSM+X5W9mF471XHyvfpCZgYXi0z/Y6KxVdKsE3DjtnSZyGDSxF+Pn4fAXE018uBC8HBltpqh/GJwakx+igynsH1Z3j+iSrr7+on9/2UhQld4+NFCGtZNYPEWo2N8U1C3jbMbVd/VJUzn0URF+J3NkJ/AddTUQrMC0Ej2YEbvFrmSD/VPFU/p/rfRBn/A2h+X/WbSdqYZknNgoBpF+HFpwadPcXlEE5xOflgDDnxZMg7RRVP6VWZEx5U17LKqiItA42Yy5RUrjyvtl00t/QtgK9MPF+qMp1clbj5BwEWvlG48yrCOSGMpgf7wWuupbyykIH+sppTBTUwcDxS1jipRs0NF924JkxX0vuWVA6EkAGROcXvEkNDpShBJSWomXgCyHfxVvPWIDVPWbVAC9SjQwDBsQin35dZAfXKqRUmA0HMjkr4zEzRnaFRK34S/5YAYWlBUjGc3+apZLOzK1KGfD3cglPkpnCGBL4boJBlqf+lPCR9DroNT9EA15EV5pen5o2M+PySuFb8JpVLGi+VQCqBVAKpBFIJpBJYHxJYkYFcOlhcAXBwaV0wWFz6utyK0loChPT1sbVHD8dVbNu9Pq7phFJ/L05lObGgtk1gQkk+NFXkl04oVUSR+KZpjVA1xcyDwjf2XYYp5k+h5PPwSzLFzLL57i9Xvo/jxj3DuzIv4OLRT1wQKXKKuYAp5t6VnmLeecPZmLe6DMQ0MsXs+JAvVHwIXBXPITm4cF4Zp/2mmDmzxnl30QgHf3gPiNyFejwHVdnAR6eKXAI+cRHn/Gs9O3/5umM/wbgPMfbjz/uQ2ve0b+7T33rmu4zNrqvZ6VdWDPPAH2NuueaX8SX6Xjxejt+m6I9OFQAzWcg5vsJXBrOOnV8oetWthPNP1UcnUMT1INOQxB5V6LkPPB5zdVOVPMEDM2/IVT5D3zZ6Po6gfVy182doo76m9+7/EhlsBgwEAQTEmsJn6Ou4puErWPTRiwoIfYaWcInDeKvkKp+hQWIOdYDP0OVXcLzEHfqJiX9b8c/Q7nxlc/M1l+CI3OchlGHj++GjUByw3HWV5FJphaEK4cKUTB9W7OwFGHaSkGbAIOluvfYBlcndo0ol7uvA52xZCsmyHJ/uyuir4Ryf0IE8cE9jraL+EACKownNGFZjPS8DSpxfCcJc3Lp0Jf48LJqA5yv/5vVnYGXSU/iwPIyVSh+gIAqB+fDHe/5W27lyQ3RAbZZKOC85cwuO9f2LgCCutUzkCBpGxGmwv6eyAgIu2uWaBpQhfVGb8Esc4FO/MVxsewq+gP8dzu6+UO9+uchP5+QhiSMzsU7GAoOD7I+w3sP/GhavfhRL1fgNnF/A1qLiSUk9R5rIm48zEKnGfx8rjH5DxjU447peQoY5zWFuuu4cCPirqljkfknml0hezGO1nAjftvl+0PpznctywcyfBzxgHIdP8glcMsampno52IIwP4M8P4fv7XaZFrHY3o78FaTFaPNFIXV8fEGAXY/uodesXDycg53JADhchqcS7Kevl+kKh9mteb3Qgsexcukq1Vu+SkqcTFZuLBAANlljINlpM4pxAU8Osy0kUe+TjJAVikWgYo8T1i8q9UmMbX4VHkYdOsSVzZGOIKFalQPRtQboRaNkk/W0kVmuimewWi6L67zOZqG4/WtYMNcquG6uHiGxQFB3XZyVg6a56kepi4OegN1EfNp6Ja9WGLUWV/na171PS7GVjb0RRLjT1U0Pl93x0FN2LaL52ln9OdpwxSY/n+rrEnPL1TyrEzu/Aw0nD9F/4iuzsMEOsLZs2oYstqIfsjm5kqPzbR9f2nPQ2H/Bv0rbY36HXsOCX1u5JxE6Pe1kciEGxQxuf73nmLDdA/Z5+iW812zHC8VWCTq4IZYHx7TL6uTr3HBQ5cUzEci181SzneRIP2gmDhTBrIIRdTTvFQMa5uOdxGSFVmu/4gS43YjxDWZ44bCqqSbwg4TRwggC5VLZMJrZjMy4KpkDxQAc4YhtfY/XbTYKc5osqiWpQ0O1eCd/5PCMQPt1Dq/ConTZJYAA7OJQd7oYIxmMUksYDLNugzsSWG2ERPBeqjsRCJYXowfVcB9XG2OH8MlrKaXVVOwmmKEACDZt5/wlcLG5hxfwAIc7Q2MZvK/l4oHwapDUNwPInHmybdneqFau7eQvUggI0qpXzRe5kzvybGh6C4PCn+Z8A9tYZzlb3cHOCj2QlPh4IFT6zOCDEiAgZdkCk5azpvFYuQEBGZXrsRMsH4sgybWakRFum2M8gN6yGxG7nb0sv+GPgDHUxgPBZeB1pEAc9e7KV6t4CI8wusO7fDV26Tvr6pvE9Zs4YmdJIKW2UQmkQIiV2LrQhLFcdhcQ4juFisAwOJDYbnBRCVinN90FhG6p1SbA2l1AaEJA3ZIkBUK31HQMnykQYgTULcEpELqlpmP4TIEQI6BuCU6B0C01HcNnCoQYAXVLcAqEbqnpGD5TIMQIqFuCUyB0S03H8JkCIUZA3RKcAqFGTWMtVld9mUiBUAMIzruBD5YuSUdeUyDEVlsHr1CK5W0xQgqERVlE3nXomkXLi04O4uRA8GU/A5eBdrK2xEYXY/ctRFZ73vrSrK8cm8f9csmFGZnlmnrW47WasHgguLOhPb1g1/lj6VbnDaQC8OJsJy3WTlRwqmO1NPJ2gChmdjSOD1bJF39WZ7SGT8H6ZcuJsccfJyAnHgib3ZHAPu0hYPNrh42nq8b+eh6G9GFVBK6yTF+e5A/QYipb5nl8sGwSWQzvkDtyjHrlRdO4h3V/mq+ShPN213ggLO4c5hmC3BnMTbF1M3WZt9VVKlW/7w65UDMz0Xs4jzxrN/362p6Z2Hnaj3XDA09xsTzI+suYDj0eCG7vo2/eRM7OSkonAYG0Cp8wlPAW7pW0epq7j3KzZ1uRaWNPve0kTi3l4AubkXy/gObKOlPqxjGP2i6KXednd/24p6jr3JwVWE/msCqZd6AuN9uxQlTktvTj8Naenq6DkQEO+dCPHMAYoI7TeqpOaHsG2YE8BsOG2/pgds+bFkKtfYQ6g+Qkm2Dt7melH9v3LiB1MOg3NTdAtr2zLYRvADQ2hfOE9MtC86GsVf9RDLguwy//ByzGua4wKmZb+qFafFiTI20/VUXvDSFySwvsI4jtpMAAFeT6z7TGAcT14L7c9i+SFqz8S+tih1SP+RcRTF8fLb5EOncsjt478RPw+GNEsqYA8NABjvv50A2SWPMCjYdZmmt0gyGG4scINrJVK8Xckyjkv6FyqHrqqppQGat+K/VvK46nt2YCyydP6Uf3vy+2IisCiiaN5oUlxJhv4OBP3pbr97DR+ayyLzlegMYegkGtN2A752mWL6aScd51HC2JgEBkmV27+nB9Txn/gSDTUyAcWiyzAIwraRXD5QWBHQJed7WXGQDN/6mKOUt3z9FYALvDyfTeZ/4WBjsnoWo3gkm+k7NHtBBbRX7qFmWp4V+2fpyoh27B6Af14xOvCq1btsTyy/wTAYERFU5YF9t9FI5RD0M4tEwGIWPixQTawYHCXSVh6I8l2nq4OLX8wuHuninj4kMM+EfjWbCb5G1EPz+L1vFbAPEx0QY0RJnAVeYTcrnbYatxGjaYPsw8UTwFbodlji53XZqvo9VdGe7uw2ncvQtbGs/lG4onlcxnmQEVK3dZlcsNQht8U+/dZw2M5kcySc92CBftiqt5lSPoYa6NEWDd8yGooT+UwaPv44BqAQRbDF9VZG42EBdjyzytna519+TBysVeOf6kOVk6N60b3oDqwl2YROQfJpeBS3DPkdIAgJqRCjR6FwTzgjMfjLDEzvGLE2AvAE3fhtlh2J8uc2x0HKW6lkaS2aBCsnQ8ktZqHuxz2H/pPcljGscvnwOeOafBf4s8s8wc6mBApF72vwnNR9Cz0YrhdKZO4kLEJ4kOCtB/OtVpbrn2DhBxN34XSD9MGPgyk8FWR0HZCmrxpAyKCQAjAyNUgsnChz/IDL9ymbOHBzCv8mWNE9/NH1zZG/u6WIN9J1AxVedl7kc1wNakNyTVTlZxLC/oKaFYxy8hwcpqnVvUPwRcBuXhPGiUyDPLOXg35hAKfVjv2fcgC3WG03mf1DUMBGZszbqO+FQ7ENSw6indCGKuADGfQCgNONEoZ08wSGMSCqd1zomZwBPVaOaROWwR493ZmB8CDBP6if3/wAJlbBNxUm0jxISBZG69/tcg/FGUdQnyOAtXWJqDBtKoFYKQbiV4Zb7CL76XwPAPfu/g9wqUx4so9ym95zuv45nmgxvSBExD1zTJ0ocemsRxwJOVDxuwbLpFZbLbQPAWkASbwGoDiuAbBs5LDqtIKbv5P2LGycNA1UfL17Mo6x0MCN9Qpb7XORZwGTfTHbi0S69ije3SA0WdFy1Hgfer7MJ2tMozURmnIz4MV0FFa8M3DrbcVjq8tcAMsIeZXaPeRcUfUYXitB5/9rArhADgtLl7/XX+Sa9NA8EV4MzVtfocZpd/o1c0Go0pVYKvAFC4frzRbCLjC/hhl3ol8o4sMIGnAOD0Y7rZrs8VsWwguIzcOUpq8zz0QD/eJbb6cirZML7t0+3Y4RS6S9L8dWrK0s2pU34bGJixLXBu2Ec5paQj5WYJELD9zl1ZVThoZyhZ7tBrBrTY9/VW8koiye8MjhzmEcu0DOtkvGm+rPN28N4sLy5dy4DgMgxfUfMrmj/LQgGtA1iY+CbuV5rfduK1CfGkSVIJpBJIJZBKIJVAKoFUAqkEUgmkEuhoCfw/vJfHMO4YqncAAAAASUVORK5CYII=",36,36)
var l
return a.artwork=c,a.accessibilityLabel=r,nn(0,a,(l={targetType:$L,pageInformation:t,locationTracker:n,recoMetricsData:null},Uh.context("impressionOptionsForArcadeSeeAllGamesRibbonItem",()=>({...l,id:QS,idType:UF,kind:null,softwareType:null,title:"All Games"})))),a}}class TZ extends gZ{constructor(){super("GroupingCategoryShelfController"),this.supportedFeaturedContentIds=new Set([425])}initialShelfDataFromGroupingMediaApiData(e){const t=oe(e,yF)
return t?{shelfContents:se(t,yF)}:{shelfContents:[]}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await gZ.secondaryGroupingShelfDataForShelfUrl(e,t,n,r).then(e=>{const t=oe(n.featuredContentData,yF)
return t?{shelfContents:no(e.shelfContents,se(t,yF))}:{shelfContents:[]}})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}_createShelf(e,t,n,s){var a
if(o(n.shelfContents))return null
const c=[]
let u=!1
for(const o of n.shelfContents){const n=oe(o,N_)
if(r(n))continue
const a=so(0,n)
if(r(o.attributes)||r(n.attributes)||Wr(t)){t.isDeferring=!0,t.remainingItems.push(n)
continue}const d={targetType:my,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:M(o)},f=yl(e,n,{...d,id:a},t.clientIdentifierOverride)
nn(0,f,{...d,kind:m$,softwareType:l(null==s?void 0:s.isArcadePage)?FF:null,title:f.title,id:a})
const p=j(n,I$)
p.width>p.height&&(u=!0),i(p)&&(f.artwork=El(e,p,{allowingTransparency:!0,useCase:20})),c.push(f),ju(t.metricsLocationTracker)}const d=this.shelfForCategoryActions(e,c,t)
if(d.title=t.title,d.subtitle=t.subtitle,d.url=Yr(d,t),u){const e=null!==(a=d.presentationHints)&&void 0!==a?a:{}
d.presentationHints={...e,itemsHaveRectangularArtwork:!0}}return d}shelfForCategoryActions(e,t,n){const r=new rH(CF)
let o
switch(e.client.deviceType){case"tv":r.isHorizontal=!0,o=8
break
case H$:r.isHorizontal=!1,o=null
break
default:r.isHorizontal=!1,o=6}if(null!==o&&t.length>o){r.items=t.slice(0,o)
const s=new nU($$)
s.title=e.loc.string(XN),sd(e,s,null,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker}),r.seeAllAction=s
const i=new rH(CF)
i.isHorizontal=!1,this.sortCategories(e,t),i.items=t
const a=new cH([i])
a.title=e.loc.string("PAGE_TITLE_CATEGORIES"),s.pageData=a}else r.items=t
return r}sortCategories(e,t){t.sort((t,n)=>{try{return t.title.localeCompare(n.title,e.loc.safeIdentifier,{usage:oF})}catch(e){return 0}})}}class PZ extends gZ{constructor(){super("GroupingEditorialCardShelfController"),this.supportedFeaturedContentIds=new Set([415,416,501,417,258])}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:se(e,yF)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await gZ.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}_createShelf(e,t,n,r){const s=new rH("editorialCard")
s.isHorizontal=!0
const i=this.personalizationDataContainerForEditorialCardItemsDataArray(e,n.shelfContents),a=[]
for(const s of n.shelfContents){const n=PZ.makeEditorialCard(e,s,i,r,t)
!o(n)&&n.isValid()&&(a.push(n),ju(t.metricsLocationTracker))}return delete t.maxItemCount,s.items=a,s.url=Yr(s,t),s}static makeEditorialCard(e,t,n,o,i){var a,c,l
const u={targetType:ax,pageInformation:null==i?void 0:i.metricsPageInformation,locationTracker:null==i?void 0:i.metricsLocationTracker,recoMetricsData:M(t),id:t.id,idType:vD},f=Y(t,nN),h=to(e,t,i,501===f,n,u,o,()=>{null==i||i.remainingItems.push(t)})
if(!h)return null;(null===(c=null===(a=h.content)||void 0===a?void 0:a.id)||void 0===c?void 0:c.length)>0&&(u.id=h.content.id,u.idType=HN,u.adamId=h.content.id)
const w=new _j
let g=W(t,"designBadge")
g||(g=h.caption),w.caption=g
let m=W(t,WM)
m||(m=h.title),w.title=m
let y=io(W(t,ib))
y||(y=h.subtitle),w.subtitle=y
const v={useCase:19,withJoeColorPlaceholder:!0}
if(h.artwork&&258!==(null==i?void 0:i.featuredContentId)){let t=p(h.artwork,zS)
r(t)&&s(h.appEvent)&&(t=p(h.artwork,"eventCard")),w.artwork=Xr(e,t,v)}else w.artwork=eo(e,t,416,204,v)
if(w.clickAction=h.action,s(h.appEvent)&&(w.appEventFormattedDates=h.appEvent.formattedDates),w.lockup=h.lockup,s(w.artwork)&&s(w.artwork.backgroundColor)){const e=B(w.artwork.backgroundColor)
if(w.mediaOverlayStyle=e?R$:GF,s(w.lockup)&&s(w.lockup.offerDisplayProperties)){const t=e?R$:GF
w.lockup.offerDisplayProperties=w.lockup.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,SM,t)}}w.adamId=d(h.content,"id")
const A=oe(t,V$)
if(s(A)){const n=td(e,A,u)
n.targetType=u.targetType,w.flowPreviewActionsConfiguration=Is(e,t,!1,null==i?void 0:i.clientIdentifierOverride,w.clickAction,u,n)}const T=an(e,null!==(l=h.content)&&void 0!==l?l:t,h.title,u)
if(s(h.onDevicePersonalizationDataProcessingType)){const e=xu(T.recoMetricsData,h.onDevicePersonalizationDataProcessingType,null)
T.recoMetricsData=e}return s(h.appEvent)&&(T.inAppEventId=h.appEvent.appEventId,s(h.appEvent.lockup)&&(T.relatedSubjectIds=[h.appEvent.lockup.adamId])),s(i)&&nn(0,w,T),w}personalizationDataContainerForEditorialCardItemsDataArray(e,t){var n,r
if(!wo(e))return null
const o=new Set
for(const e of t){const t=501===Y(e,nN),s=(null===(n=d(e,b$))||void 0===n?void 0:n.length)>0,i=(null===(r=W(e,ab))||void 0===r?void 0:r.length)>0,a=te(e,V$,!1)
if(t&&!s&&!i&&a){const t=se(e,V$)
for(const e of t){const t=d(e,M_);(null==t?void 0:t.length)>0&&o.add(t)}}}return go(e,o)}}class IZ extends gZ{constructor(){super("GroupingEditorialStoryCardShelfController"),this.supportedFeaturedContentIds=new Set([475])}shelfRoute(e){return Ti(this.supportedFeaturedContentIds,["shelfContentType=editorialStoryCard"])}_supports(e,t,n,r){return!!super._supports(e,t,n,r)&&oo(0,W(t,vF))===cb}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:se(e,yF)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await gZ.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o={...n},s=W(t,vF)
return o.shelfStyle=oo(0,s),o}_createShelf(e,t,n,r){const s=[]
for(const r of n.shelfContents){if(!J(r)||Wr(t)){t.remainingItems.push(r),t.isDeferring=!0
continue}const n=IZ.makeStoryCard(e,r,t)
o(n)||(s.push(n),ju(t.metricsLocationTracker))}const i=new rH(t.shelfStyle)
return i.title=t.title,i.items=s,i.isHorizontal=!0,i.background={type:nO},i.url=Yr(i,t),i.isHorizontal=!0,i}static makeStoryCard(e,t,n){let i=j(t,"editorialArtwork.subscriptionHero")
o(i)&&(i=j(t,TD))
const a=El(e,i,{cropCode:"fn",withJoeColorPlaceholder:!0,useCase:16})
if(r(a))return null
const c=W(t,LM),l=W(t,ZF),u=W(t,JS),d=new oH(c,a,null,l,{type:tF,title:l},u),f=Ko(e,t,null,new WW(null==n?void 0:n.metricsPageInformation,null==n?void 0:n.metricsLocationTracker))
s(f)&&(d.clickAction=f.clickAction)
const p=B(a.backgroundColor)?R$:GF
return d.shelfBackground={type:I$,artwork:a,style:p},d}}class SZ extends gZ{constructor(){super("GroupingGameCenterActivityFeedController"),this.batchGroupKey=uN,this.supportedFeaturedContentIds=new Set([548])}shelfRoute(e){return[...super.shelfRoute(e),{protocol:YU,path:`/${nG}/${QU}/{token}`,query:[nV]}]}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:[],activities:[]}}async secondaryShelfDataForShelfUrl(e,t,n,r){const o=this.gameCategoryFilter(n.gamesFilter)
return await e.gameCenter.fetchActivityFeedCards(o,20).then(e=>({shelfContents:[],activities:e}))}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}_createShelf(e,t,n,r){return t.isFirstRender?this.pendingActivityFeedShelfForGrouping(e,t,null==r?void 0:r.isArcadePage):this.activityFeedShelfForGrouping(e,n,t,null==r?void 0:r.isArcadePage)}pendingActivityFeedShelfForGrouping(e,t,n){if(e.client.deviceType!==U$&&e.client.deviceType!==_$)return null
const r=this.activityFeedShelfForGrouping(e,{shelfContents:[],activities:[]},t,n),o=nj.from(zr(t))
return r.url=o.param(nV,qF).build(),r.isHidden=0===r.items.length,r.batchGroup=this.batchGroupKey,r}activityFeedShelfForGrouping(e,t,n,r){if(e.client.deviceType!==U$&&e.client.deviceType!==_$)return null
const o=this.activityFeedShelf(e,t.activities,n,r)
return o.titleArtwork=nt(e,F_,16,16),o.subtitle=n.subtitle,o.title=n.title,o.batchGroup=this.batchGroupKey,o.isHidden=0===o.items.length,o}activityFeedShelf(e,t,n,r=!1){const o=new rH("gameCenterActivityFeedCard")
o.isHorizontal=!0,o.mergeWhenFetched=!0,o.batchGroup=this.batchGroupKey,o.items=t,o.isHidden=0===o.items.length,t.forEach((t,o)=>{nn(0,t,{id:"friendActivity",idType:lb,targetType:"chiclet",kind:null,softwareType:r?FF:null,title:"",pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker})
const s=new KB,i=new KB,a=new KB,c=new KB,l=new KB;[{targetId:"playerName",metrics:s},{targetId:"profileImage",metrics:i},{targetId:"leaderboardAchievement",metrics:a},{targetId:yy,metrics:c},{targetId:t.adamID||"gameIcon",metrics:l}].forEach(t=>function(e,t,n,r,o){const s={actionType:A$,id:r,idType:lb,location:Nu(0,o,n)},i=Zu(e,r,m$,s)
t.addMetricsData(i)}(e,t.metrics,n.title,t.targetId,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker})),t.profileActionMetrics=s,t.profileAvatarActionMetrics=i,t.leaderboardActionMetrics=a,t.achievementActionMetrics=c,t.appActionMetrics=l,ju(n.metricsLocationTracker)})
const s=new TU
return s.title=e.loc.string("Arcade.ActivityFeed.AllActivity",e.loc.string(XN)),sd(e,s,null,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker}),o.seeAllAction=s,o}gameCategoryFilter(e){return e===hO?ub:e}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){return{...n,title:"Friend Activity",badges:{gameCenter:!0},idType:ry}}}class bZ extends gZ{constructor(){super("GroupingGameCenterPopularWithYourFriendsController"),this.batchGroupKey=uN,this.supportedFeaturedContentIds=new Set([495])}shelfRoute(e){return[...super.shelfRoute(e),{protocol:YU,path:`/${nG}/${QU}/{token}`,query:[iV]}]}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:[]}}async secondaryShelfDataForShelfUrl(e,t,n,r){const o=e.gameCenter.fetchGamesPopularWithFriends(this.gameCategoryFilter(n.gamesFilter),30)
return await o.then(async t=>{const n=t.map(e=>this.gameplayHistoryFromData(e)).filter(t=>this.isCompatibleGameCenterPlatform(e,t.platformId)).map(e=>e.adamId)
if(0===n.length){const e={shelfContents:[]}
return await Promise.resolve(e)}const r=new hH(e).withIdsOfType(n.slice(0,100),q$)
return Kr(e,r),await Mr(e,r,{}).then(e=>({shelfContents:e.data,responseTimingValues:e[Tw.timingValues]}))})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}_createShelf(e,t,n,r){return t.isFirstRender?this.pendingPopularWithFriendsShelfForGrouping(e,n,t):this.popularWithFriendsShelfForGrouping(e,n,t)}pendingPopularWithFriendsShelfForGrouping(e,t,n){const r=this.popularWithFriendsShelfForGrouping(e,t,n),o=nj.from(zr(n))
return r.url=o.param(iV,qF).build(),r}popularWithFriendsShelfForGrouping(e,t,n){const r=this.popularWithFriendsShelf(e,t.shelfContents,n)
return r.mergeWhenFetched=!0,r.batchGroup=this.batchGroupKey,r.eyebrow=e.loc.uppercased(e.loc.string(PD)),r.eyebrowArtwork=nt(e,F_,16,16),r.subtitle=n.subtitle,r.title=n.title,r.isHidden=0===r.items.length,r}popularWithFriendsShelf(e,t,n){const r=n.shelfStyle||SF,o=new rH(r)
o.isHorizontal=!0
const i=[]
for(let o=0;o<t.length;o++){const a=t[o],c={metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:M(a),anonymizationOptions:{anonymizationString:`"GAME"${o+1}`}},artworkUseCase:kl(0,r),canDisplayArcadeOfferButton:vu(0,r),shouldHideArcadeHeader:e.featureFlags.isEnabled(wL)&&n.isArcadePage,shouldShowFriendsPlayingShowcase:!0},l=Se(e,a,_L)
if(z(a,KF)||!l)continue
const u=al(e,a,c)
u.clickAction=Ii(e,u.clickAction),s(u)&&(i.push(u),ju(c.metricsOptions.locationTracker))}let a
switch(e.client.deviceType){case U$:a=2
break
case _$:case H$:case"tv":a=6
break
default:a=0}if(i.length<a)return o.isHidden=!0,o
if(o.items=i.slice(0,12),o.isHidden=!1,o.batchGroup=uN,i.length>12){const t=new rH(SF)
t.items=i,t.rowsPerColumn=1
const r=new cH([t])
r.title=n.title
const s=new nU($$)
s.title=e.loc.string(XN),s.pageData=r,sd(e,s,null,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker}),o.seeAllAction=s}return o}isCompatibleGameCenterPlatform(e,t){return 1===t}gameplayHistoryFromData(e){const t=d(e,eF),n=f(e,"platformId"),r=l(e,db),o=this.gameplayHistoryRecordFromData(c(e,"records"))
return new bB(t,n,r,o)}gameplayHistoryRecordFromData(e){return e.map(e=>{const t=d(e,"playerId"),n=f(e,"timestamp")
return new CB(t,n)})}gameCategoryFilter(e){return e===hO?ub:e}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){return{...n,badges:{gameCenter:!0},idType:NN}}}class CZ extends gZ{constructor(){super("GroupingGameCenterContinuePlayingShelfController"),this.batchGroupKey="gameCenterContinuePlaying",this.supportedFeaturedContentIds=new Set([500])}_supports(e,t,n,r){return super._supports(e,t,n,r)&&this.supportsVideoCardShelf(e,e.host.platform)}shelfRoute(e){return[...super.shelfRoute(e),{protocol:YU,path:`/${nG}/${QU}/{token}`,query:[sV]}]}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:se(e,V$)}}async secondaryShelfDataForShelfUrl(e,t,n,r){Date.now()
const o=this.maximumNumberOfRecentGamesToRequest(),s=e.gameCenter.fetchRecentlyPlayedGamesWithinSeconds(this.gameCategoryFilter(n.gamesFilter),o,e.bag.recentlyPlayedGamesWindowInSeconds)
return await s.then(async t=>{let n
if(Date.now(),0===t.length){const e={shelfContents:[]}
return await Promise.resolve(e)}{const r=new hH(e).withIdsOfType(t.slice(0,this.maximumNumberOfRecentGamesToShow()),q$)
Kr(e,r),n=Mr(e,r,{}).then(e=>({shelfContents:e.data,responseTimingValues:e[Tw.timingValues]}))}return await n})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}_createShelf(e,t,n,r){return t.isFirstRender?this.pendingContinuePlayingForGrouping(e,t):this.continuePlayingShelfForGrouping(e,n.shelfContents,t)}pendingContinuePlayingForGrouping(e,t){const n=this.continuePlayingShelfForGrouping(e,[],t)
if(!n)return null
const r=nj.from(zr(t))
return n.url=r.param(sV,qF).build(),n.batchGroup=this.batchGroupKey,n}continuePlayingShelfForGrouping(e,t,n){return Uh.context("continuePlayingShelfForGrouping",()=>{const r=this.videoCardContinuePlayingShelf(e,t,n)
return r.mergeWhenFetched=!1,r.title=e.loc.string(vy),r.subtitle=n.subtitle,r.batchGroup=this.batchGroupKey,r.isHidden=0===r.items.length,r.eyebrow=e.loc.uppercased(e.loc.string(PD)),r.eyebrowArtwork=nt(e,F_,16,16),r})}supportsVideoCardShelf(e,t){switch(t){case PM:case ID:case GM:return!0
default:return!1}}videoCardContinuePlayingShelf(e,t,n){return Uh.context("videoCardContinuePlayingShelf",()=>{const r=new rH(Ay)
r.isHorizontal=!0,r.batchGroup=this.batchGroupKey
const o=[]
for(const r of t){if(Ze(e,r))continue
const t=this.editorialSplashVideoCardForContinuePlaying(e,r,n)
t&&(o.push(t),ju(n.metricsLocationTracker))}return r.items=o,r})}editorialSplashVideoCardForContinuePlaying(e,t,n){return Uh.context("editorialSplashVideoCardForContinuePlaying",()=>{const r=Uu(n.metricsLocationTracker),o={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,targetType:r$,anonymizationOptions:{anonymizationString:`GAME${r}`}},s=e.featureFlags.isEnabled(wL)&&l(n.isArcadePage),i=du(e,t),a={metricsOptions:o,artworkUseCase:1,offerEnvironment:R$,offerStyle:h$,canDisplayArcadeOfferButton:!0,shouldHideArcadeHeader:s,isSubtitleHidden:i&&!s},c=this.editorialSplashVideoWithTopShelfStill(e,t)
if(!c||!c.preview)return null
const u=al(e,t,a)
if(!u)return null
u.clickAction=Ii(e,u.clickAction)
const d=this.clickActionForVideoCard(e,t,e.host.platform,o,n.clientIdentifierOverride)
if(!d)return null
const f=new Lj
f.video=c,f.lockup=u,f.overlayStyle=R$,f.clickAction=d
const p=td(e,t,o)
return f.flowPreviewActionsConfiguration=Is(e,t,!0,n.clientIdentifierOverride,f.clickAction,o,p),nn(0,f,an(e,t,u.title,o)),f})}editorialSplashVideoWithTopShelfStill(e,t){return Uh.context("editorialSplashVideoWithTopShelfStill",()=>{let n=null
const r=Ae(e,t,Om)
return s(r)&&(n=El(e,r,{withJoeColorPlaceholder:!0,useCase:23,cropCode:"sr"})),nu(e,t,n)})}clickActionForVideoCard(e,t,n,r,o){let s=yl(e,t,td(e,t,r),o)
if(s=Ii(e,s),n===ID){const n=new pU(t.id,C$)
od(e,n,{actionType:SD,id:t.id,contextualAdamId:t.id,anonymizationOptions:r.anonymizationOptions,pageInformation:r.pageInformation,locationTracker:r.locationTracker})
const o=new fU(t.id,s)
return o.openAction=n,o.cancelAction=s,o}return s}maximumNumberOfRecentGamesToRequest(){return 200}maximumNumberOfRecentGamesToShow(){return 10}gameCategoryFilter(e){return e===hO?ub:e}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){return{...n,badges:{gameCenter:!0},idType:NN,title:e.loc.string(vy)}}}class kZ extends gZ{constructor(){super("GroupingGameCenterReengagementShelfController"),this.batchGroupKey=uN,this.supportedFeaturedContentIds=new Set([494])}shelfRoute(e){return[...super.shelfRoute(e),{protocol:YU,path:`/${nG}/${QU}/{token}`,query:[cV]}]}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:[],achievementData:null,achievementSummaryData:null}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await e.gameCenter.fetchRengagementDataForLocalPlayer().then(async t=>{const n=d(t,eF),r=m(t[yy]),s=m(t.achievementSummary)
if(o(n)){const e={shelfContents:[],responseTimingValues:null,achievementData:null,achievementSummaryData:null}
return await Promise.resolve(e)}const i=new hH(e).withIdOfType(n,q$)
return Kr(e,i),await Mr(e,i,{}).then(e=>({shelfContents:e.data,responseTimingValues:e[Tw.timingValues],achievementData:r,achievementSummaryData:s}))})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}_createShelf(e,t,n,r){return t.isFirstRender?this.pendingGameCenterReengagementShelf(e,n,t,null==r?void 0:r.isArcadePage):this.gameCenterReengagementShelf(e,n,t,null==r?void 0:r.isArcadePage)}pendingGameCenterReengagementShelf(e,t,n,r){const o=this.gameCenterReengagementShelf(e,t,n,r)
if(!o)return null
const s=nj.from(zr(n))
return o.url=s.param(cV,qF).build(),o.batchGroup=this.batchGroupKey,o}gameCenterReengagementShelf(e,t,n,r=!1){return Uh.context("gameCenterReengagementShelf",()=>{if(!i(t.shelfContents))return null
const o=new rH("gameCenterReengagement")
o.isHorizontal=!1,o.mergeWhenFetched=!1,o.batchGroup=this.batchGroupKey
const s={id:n.id,kind:null,softwareType:r?FF:null,targetType:zF,title:Ty,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,idType:NN,fcKind:n.featuredContentId,badges:{gameCenter:!0}},a=tu(e,t.shelfContents[0],21)
let c=U("componentBackground"),l=null
i(a)&&(l=a.preview,c=l.backgroundColor)
const u={lockupOptions:{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},offerStyle:h$,artworkUseCase:kl(0,g$),isSubtitleHidden:!0}}
Fu(0,s,s.title)
const d=ml(e,t.shelfContents,u)[0]
d.clickAction=Ii(e,d.clickAction),Bu(n.metricsLocationTracker)
let f=null
i(d)&&(f=new MU(d.bundleId),f.title=Ty,od(e,f,s))
const p=e.loc.string("GameCenter.Reengagement.Badge.GameCenter"),h=this.achievementFromData(e,t.achievementData),w=this.achievementCountsFromData(e,t.achievementSummaryData),g=this.shelfMetadataForAchievement(e,h,w),m=new tH("gamecenter.fill",p,g.title,g.subtitle,h,d,c,l,f)
return o.items=[m],nn(0,m,s),o})}achievementStatusFromData(e,t){const n=d(t,aN),r=new IB(n)
return r.percent=f(t,"percent"),r.date=d(t,fb),r.artwork=new sB(d(t,"artwork.template"),f(t,"artwork.width"),f(t,"artwork.height"),[]),r}achievementFromData(e,t){const n=d(t,"id"),r=d(t,WM),o=d(t,_N),s=this.achievementStatusFromData(e,p(t,"status"))
return new SB(n,r,o,s)}achievementCountsFromData(e,t){return{completed:f(t,"completedAchievements"),total:f(t,"totalAchievements")}}shelfMetadataForAchievement(e,t,n){if(!s(t))return{title:"",subtitle:null}
if(0===n.completed)return{title:e.loc.string("GameCenter.Reengagement.Achievement.First.Title"),subtitle:e.loc.string("GameCenter.Reengagement.Achievement.First.Subtitle")}
switch(t.status.type){case Py:case"hidden":case Iy:return{title:e.loc.string("GameCenter.Reengagement.Achievement.KeepPlaying.Title"),subtitle:e.loc.string("GameCenter.Reengagement.Achievement.KeepPlaying.Subtitle")}
case Sy:const t=e.loc.stringWithCount("GameCenter.AchievementSummary.TotalToCompleteCount",n.total),r=e.loc.stringWithCount("GameCenter.AchievementSummary.NumberCompletedCount",n.completed),o=e.loc.string("GameCenter.AchievementSummary.CompletedCount.Subtitle").replace("@@completedCount@@",r).replace("@@totalCount@@",t)
return{title:e.loc.string("GameCenter.Reengagement.Achievement.CompletedCount.Title"),subtitle:o}
default:return{title:"",subtitle:null}}}}class EZ extends gZ{constructor(){super("GroupingGameCenterSuggestedFriendsController"),this.batchGroupKey=uN,this.supportedFeaturedContentIds=new Set([496])}shelfRoute(e){return[...super.shelfRoute(e),{protocol:YU,path:`/${nG}/${QU}/{token}`,query:[aV]}]}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:[],suggestedFriends:[]}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await e.gameCenter.fetchSuggestedFriends(10).then(e=>({shelfContents:[],suggestedFriends:e}))}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}_createShelf(e,t,n,r){return t.isFirstRender?this.pendingSuggestedFriendsShelfForGrouping(e,t,null==r?void 0:r.isArcadePage):this.suggestedFriendsShelfForGrouping(e,n,t,null==r?void 0:r.isArcadePage)}pendingSuggestedFriendsShelfForGrouping(e,t,n){if(e.client.deviceType!==U$&&e.client.deviceType!==_$)return null
const r=this.suggestedFriendsShelfForGrouping(e,{shelfContents:[],suggestedFriends:[]},t,n),o=nj.from(zr(t))
return r.url=o.param(aV,qF).build(),r.isHidden=0===r.items.length,r.batchGroup=this.batchGroupKey,r}suggestedFriendsShelfForGrouping(e,t,n,r){if(e.client.deviceType!==U$&&e.client.deviceType!==_$)return null
const o=this.suggestedFriendsShelf(e,t.suggestedFriends,n,r)
return o.eyebrow=e.loc.uppercased(e.loc.string(PD)),o.eyebrowArtwork=nt(e,F_,16,16),o.subtitle=n.subtitle,o.title=n.title,o.batchGroup=this.batchGroupKey,o.isHidden=0===o.items.length,o}suggestedFriendsShelf(e,t,n,r=!1){if(e.client.deviceType!==U$&&e.client.deviceType!==_$)return null
const o=new rH("smallContactCard")
o.isHorizontal=!0,o.mergeWhenFetched=!0,o.batchGroup=uN
const s=[]
for(let o=0;o<t.length;o++){const i=`FRIEND_SUGGESTION${o+1}`,a=t[o]
a.buttonText=e.loc.string("INVITE"),a.subtitle=e.loc.string("FROM_CONTACTS")
const c={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,id:i,anonymizationOptions:{anonymizationString:i}}
a.buttonAction=new NU(a.contactId),od(e,a.buttonAction,{...c,actionType:"inviteFriend"}),a.removeButtonAction=new FU(a.contactId),od(e,a.removeButtonAction,{...c,actionType:"removeFriendSuggestion"}),nn(0,a,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,title:i,id:i,kind:"friendSuggestion",softwareType:r?FF:null,anonymizationOptions:{anonymizationString:i}}),s.push(a),ju(n.metricsLocationTracker)}return o.items=s,o.isHidden=0===o.items.length,o}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){return{...n,badges:{gameCenter:!0},idType:NN}}}class OZ extends eB{isValid(){const e=void 0!==this.callToActionText&&null!==this.callToActionText&&void 0!==this.clickAction&&null!==this.clickAction,t=void 0!==this.titleText&&null!==this.titleText,n=void 0!==this.lockup&&null!==this.lockup,r=void 0!==this.collectionIcons&&null!==this.collectionIcons
return t&&(n||r||e)}}class RZ extends eB{isValid(){const e=(0,Gh.isSome)(this.collectionIcons)&&this.collectionIcons.length>0,t=(0,Gh.isSome)(this.artwork)&&this.artwork.isValid(),n=(0,Gh.isSome)(this.video)&&this.video.isValid(),r=t||n||e,o=(0,Gh.isSome)(this.overlay)&&this.overlay.isValid()
return r&&o}}class DZ extends eB{constructor(){super(...arguments),this.items=[]}}class _Z extends X${constructor(e,t,n){super(),this.card=e,this.shelves=t,this.shareAction=n,this.isIncomplete=!1,this.pageMetrics=new QB,this.pageRenderMetrics={}}}class LZ extends eB{constructor(e,t,n,r,o,s,i){super(),this.details=e,this.displayProperties=n,this.offerButtonAction=r,this.buttonCallToAction=o,this.offerDisplayProperties=t,this.artwork=s,this.video=i,this.detailsDisplayProperties={wantsBlur:n.wantsBlur,position:n.detailsPosition},this.backgroundColor=n.backgroundColor}}const xZ=U(rR),MZ=U(rR),NZ=U(rR)
class FZ{constructor(){this.index=0,this.todayShelfRecoMetricsData={},this.hasFocusableElements=!1,this.hasNonFocusableElements=!1,this.isResilientDeepLink=!1,this.allowUnpublishedAppEventPreviews=!1}}const $Z=[OT,ET,RT,Ak]
class BZ extends gZ{constructor(){super("GroupingHeroCarouselShelfController"),this.supportedFeaturedContentIds=new Set([480])}_supports(e,t,n,r){return!!super._supports(e,t,n,r)&&W(t,vF)===ax}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:se(e,V$)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await gZ.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}shouldImpressShelf(){return!1}_createShelf(e,t,n,s){if(0!==s.shelves.length)return null
const a=new rH(Dx),c=t.featuredContentData,l={targetType:l$,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:M(c)},u=new DZ
u.autoScrollConfiguration={isAutoScrollEnabled:e.bag.heroCarouselAutoScrollDuration>0,autoScrollInterval:e.bag.heroCarouselAutoScrollDuration}
const d=an(e,c,Dx,l)
d.autoAdvanceInterval=u.autoScrollConfiguration.autoScrollInterval,nn(0,a,d),Fu(0,d,Dx)
for(const s of n.shelfContents){if(r(s.attributes)||Wr(t)){t.isDeferring=!0,t.remainingItems.push(s)
continue}const n=Pu(e,s)
if(Li(0,s)&&!J(n)){t.isDeferring=!0,t.remainingItems.push(s),t.relationshipToFetch=PF
continue}const i={targetType:__,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:M(s)},a=bi(e,s),c=Si(e,s)
if(o(a.video)&&o(c.artwork))continue
const l=new RZ,d=zi(0,s),f=Xi(e,s),p=an(e,s,f,i)
p.isPreorder=Se(e,d,KF),nn(0,l,p),Fu(0,p,f)
const h=a.artworkData||c.artworkData,w=a.backgroundColor||c.backgroundColor,g={metricsPageInformation:t.metricsPageInformation,metricsLocationTracker:t.metricsLocationTracker,canDisplayArcadeOfferButton:vu(0,t.shelfStyle),lockupArtworkUseCase:kl(0,t.shelfStyle),isContainedInPreorderExclusiveShelf:497===t.featuredContentId}
l.overlay=Ki(e,s,g),l.backgroundColor=w,l.titleEffect=Mi(0,h),l.artwork=c.artwork,l.video=a.video
const m=xi(e,s)
od(e,m,{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:M(s),targetType:__,id:s.id}),l.clickAction=m,u.items.push(l),Bu(p.locationTracker),ju(p.locationTracker)}return i(u.items)&&(a.items=[u],s.pageTitleEffect=u.items[0].titleEffect),a.url=Yr(a,t),Bu(d.locationTracker),ju(d.locationTracker),a}}class UZ extends gZ{constructor(){super("GroupingHorizontalCardShelfController"),this.supportedFeaturedContentIds=new Set([475])}_supports(e,t,n,r){return!!super._supports(e,t,n,r)&&oo(0,W(t,vF))!==cb}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:se(e,V$)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await gZ.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o={...n},s=W(t,vF)
return o.shelfStyle=oo(0,s),o}_createShelf(e,t,n,r){const o={metricsLocationTracker:t.metricsLocationTracker,metricsPageInformation:t.metricsPageInformation}
let s
if(t.shelfStyle===zN)s=t.shelfStyle
else switch(e.client.deviceType){case H$:case"tv":s=t.shelfStyle
break
case W$:s=SN
break
default:s=_x}const i=vd(e,n.shelfContents,s,t.title,t.subtitle,o,function(e){return t.remainingItems.push(e),!1})
return i.contentType===zN&&Array.isArray(i.items)&&(i.items=i.items.filter(e=>!(e instanceof UH)||gd(0,e.media.kind,zN))),i.url=Yr(i,t),i.isHorizontal=!0,i}}class GZ extends gZ{constructor(e=null){super(e||"GroupingLargeBreakoutShelfController"),this.supportedFeaturedContentIds=new Set([480])}_supports(e,t,n,r){return!!super._supports(e,t,n,r)&&W(t,vF)===pL}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:se(e,V$)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await gZ.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}shouldImpressShelf(){return!1}isInHeroPosition(){return!1}_createShelf(e,t,n,s){const a=i(s)&&o(s.pageTitleEffect)&&0===s.shelves.length,c=i(n.shelfContents)?[n.shelfContents[0]]:[],l=[]
for(const n of c){if(r(n.attributes)||Wr(t)){t.isDeferring=!0,t.remainingItems.push(n)
continue}const i={targetType:this.isInHeroPosition()?"heroBreakout":__,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:M(n)},c=bi(e,n),u=Si(e,n),d=c.artworkData||u.artworkData,f=GZ.createLargeBreakout(e,n,t,this.isInHeroPosition(),a,i)
o(f)||(l.push(f),a&&(s.pageTitleEffect=Mi(0,d)))}const u=new rH(mD)
return u.isHorizontal=!1,u.items=l,u.url=Yr(u,t),0===s.shelves.length&&(u.presentationHints={isFirstShelf:!0}),u}static createLargeBreakout(e,t,n,r,s,i){const a=Pu(e,t)
if(Li(0,t)&&!J(a))return n.isDeferring=!0,n.remainingItems.push(t),n.relationshipToFetch=PF,null
const c=bi(e,t),l=Si(e,t)
if(o(c.video)&&o(l.artwork))return null
const u=c.backgroundColor||l.backgroundColor,d=r?null:W(t,"breakoutBadge")
let f
const p=W(t,ZF)
f=Se(e,t,Rx)?e.loc.uppercased(Tu(e,a,p)):p
let h={type:UF};(null==f?void 0:f.length)>0&&(h={type:tF,title:f})
const w=pu(e,t,z$)||Pe(e,a,z$),g=pu(e,t,AN)||Pe(e,a,lN),m=Ci(e,t,!0,0,!1),y=Ei(e,t,0,!1),v=new Zj(w,g,h,null,m,Oi(0,y,t)),A=new Kj(v,{position:y||n$},d,l.artwork,c.video,null,u),T=an(e,t,A.details.title,i),P=Se(e,zi(0,t),KF)
T.isPreorder=P,nn(0,A,T),Fu(0,T,A.details.title)
const I=xi(e,t),S={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:M(t),targetType:j$,id:t.id}
return od(e,I,S),A.details.callToActionButtonAction=I,A.clickAction=I,Bu(i.locationTracker),A.flowPreviewActionsConfiguration=Is(e,t,!0,n.clientIdentifierOverride,I,i,S),A}}class VZ extends gZ{constructor(){super("GroupingLinkShelfController"),this.supportedFeaturedContentIds=new Set([437,265])}initialShelfDataFromGroupingMediaApiData(e){let t=se(e,yF)
return o(t)&&(t=H(e,$_)),{shelfContents:t}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await gZ.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o={...n,shouldHideShelf:z(t,"hide"),areContentLinks:i(se(t,yF))}
return o.clientIdentifierOverride=xt(0,t),o}_createShelf(e,t,n,r){if(t.shouldHideShelf)return null
const s=[]
for(let i=0;i<n.shelfContents.length;i++){const a=n.shelfContents[i],c={targetType:m$,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker}
t.areContentLinks&&(c.recoMetricsData=M(a))
let u=null
if(t.isSearchLandingPage){const n=this.trendingSearchLinkFromData(e,a,t.metricsLocationTracker)
nn(0,n.action,{...c,kind:m$,softwareType:l(null==r?void 0:r.isArcadePage)?FF:null,title:n.action.title,id:`${i}`,idType:XF}),u=n}else{const n=to(e,a,t,!1,null,c,null)
if(o(n)||o(n.action.title))continue
u=n.action
const s=so(0,a)
s&&nn(0,u,{...c,kind:m$,softwareType:l(null==r?void 0:r.isArcadePage)?FF:null,title:u.title,id:s})}o(u)||(s.push(u),ju(t.metricsLocationTracker))}if(o(s))return null
if(t.isSearchLandingPage&&e.client.isPhone&&s.length>=6)for(const t of s)t instanceof DU&&(t.action.artwork=nt(e,wO))
const i=new rH(CF)
return i.isHorizontal=!1,i.items=s,i.title=t.title,i.subtitle=t.subtitle,i.presentationHints={isWidthConstrained:!0},i.url=Yr(i,t),t.isSearchLandingPage&&(e.client.isPhone||e.client.isPad)&&(i.contentsMetadata={type:bD,numberOfColumns:s.length>=6?2:1}),i}trendingSearchLinkFromData(e,t,n){const r=d(t,ZF)
if((0,Yh.isNothing)(r)||0===r.length)return null
const o=new SY(r,r,null,B_)
return ad(e,o,j$,n),ju(n),new DU(o)}}const jZ={shelfIdentifier:"first",slot:0},HZ="SLPPage"
class WZ{constructor(e,t=!0){this.promise=e,this.isRequired=t}}class qZ extends Error{constructor(e){super(function(e){let t=""
for(const n of e)n instanceof Error?t+=n.message:t+=JSON.stringify(n)
return t}(e)),this.reasons=e}}class zZ{constructor(e){this.builderClass=e}handleShelf(e,t,n,r,o,s){s(new Error(`${this.builderClass} does not implement handleShelf`))}handlePagination(e,t,n,r,o,s,i){i(new Error(`${this.builderClass} does not implement handlePagination`))}shelfRoute(e){return[{protocol:YU,path:`${this.shelfPath}{data}`}]}paginationRoute(e){return[{protocol:YU,path:`${this.paginationPath}`}]}shelfUrl(e){return`${YU}:${this.shelfPath}${encodeURIComponent(JSON.stringify(e))}`}get shelfPath(){return`/${this.builderClass}/${QU}/`}get paginationUrl(){return`${YU}:${this.paginationPath}`}get paginationPath(){return`/${this.builderClass}/${eG}/`}static createFlowAction(e,t,n){const r=new nU(t)
return r.pageUrl=n.build(),r.pageData=e,r}}class YZ extends zZ{defaultAttributes(e){return[]}defaultTab(e){return null}prepareRequest(e,t,n,r){t.includingAdditionalPlatforms(this.defaultPlatforms(e)),t.includingAttributes(this.defaultAttributes(e)),t.usingCustomAttributes(De(e))}defaultAction(e,t,n,r){return YZ.createFlowAction(t,this.pageType(),r)}handlePage(e,t,n,r,o,i,a){Uh.context(`${this.builderClass}.handlePage`,()=>{var r
let c
const l=t.build()
c=pi(e,t)?new hH(e,l):this.generatePageRequest(e,t,n),c||a(new Error(`Could not construct media API request for: ${t}`)),this.prepareRequest(e,c,t,n),c.attributingTo(l)
const u=null!==(r=e.fetchTimingMetricsBuilder)&&void 0!==r?r:new Fh.FetchTimingMetricsBuilder,d=void 0===e.fetchTimingMetricsBuilder?e.addingFetchTimingMetricsBuilder(u):e,f=new WZ(Mr(d,c))
f.promise.then(t=>{ca(e,e.user.dsid,t)}),da(0,f,this.generateAdditionalPageRequirements(e,t,n)).then(e=>(s(e.primaryPageDataFetchFailureReason)&&this.handlePageError(e.primaryPageDataFetchFailureReason,i,a,t,n),s(e.requiredAdditionalDataFailureReason)&&this.handlePageError(e.requiredAdditionalDataFailureReason,i,a,t,n),this.supportsDataAugmenting()?this.augmentData(d,t,n,e.primaryPageData).then(t=>u.measureModelConstruction(()=>this.renderPage(d,t.originalData,n,e.additionalData,t.additionalData,o))):u.measureModelConstruction(()=>this.renderPage(d,e.primaryPageData,n,e.additionalData,null,o)))).then(r=>{const o=this.defaultTab(r),s=this.defaultAction(e,r,n,t),i=n[TV]
if(t.removeParam(TV),null===o||i)return s
{const e=new rU(o)
return e.actions=[s],e}}).then(i,e=>{this.handlePageError(e,i,a,t,n)})})}handlePageError(e,t,n,r,o){n(e)}handleShelf(e,t,n,r,o,s){Uh.context(`${this.builderClass}.handleShelf`,()=>{let r
const i=t.build()
r=pi(e,t)?new hH(e,i):this.generateShelfRequest(e,t,n),r?(this.prepareRequest(e,r,t,n),r.attributingTo(t.build()),Mr(e,r).then(t=>{const r=this.renderShelf(e,t,n)
return this.shelfRequiresAdditionalModification(r,n)?this.performAdditionalShelfModifications(e,r,n):r}).then(o,e=>{this.handleShelfError(e,o,s,n)})):s(new Error(`Could not construct media API request for: ${t}`))})}async performAdditionalShelfModifications(e,t,n){return await Promise.resolve(t)}shelfRequiresAdditionalModification(e,t){return!1}handleShelfError(e,t,n,r){n(e)}handlePagination(e,t,n,r,o,s,i){Uh.context(`${this.builderClass}.handlePagination`,()=>{let r
const a=t.build()
r=pi(e,t)?new hH(e,a):this.generatePaginationRequest(e,t,n,o),r?(this.prepareRequest(e,r,t,n),r.attributingTo(t.build()),Mr(e,r).then(t=>this.renderPaginatedPage(e,t,o)).then(s,e=>{this.handlePaginationError(e,s,i,n,o)})):i(new Error(`Could not construct media API request for: ${t}`))})}handlePaginationError(e,t,n,r,o){n(e)}generateAdditionalPageRequirements(e,t,n){return{}}generateShelfRequest(e,t,n){throw new Error(`generateShelfRequest is not supported on: ${this.builderClass}`)}generatePaginationRequest(e,t,n,r){throw new Error(`generatePaginationRequest is not supported on: ${this.builderClass}`)}supportsDataAugmenting(){return!1}async augmentData(e,t,n,r){const o={url:t,parameters:n}
return await Ni(e,r,this.additionalDataKeysNeededForData,this.fetchAdditionalDataForKey,o)}additionalDataKeysNeededForData(e,t,n){return null}fetchAdditionalDataForKey(e,t){return null}renderShelf(e,t,n){throw new Error(`renderShelf is not supported on: ${this.builderClass}`)}renderPaginatedPage(e,t,n){throw new Error(`renderPaginatedPage is not supported on: ${this.builderClass}`)}}const JZ=SF
class ZZ{constructor(){this.profile=r$,this.maxPerPage=20}}class KZ extends YZ{defaultAttributes(e){const t=[w$,o$,iF,hF]
return e.appleSilicon.isSupportEnabled&&t.push(NF),t}defaultPlatforms(e){return E(e)}pageType(){return $$}generatePaginationRequest(e,t,n,r){return new hH(e,r.remainingContent)}renderPaginatedPage(e,t,n){const r=n
return this.pageWithContent(e,t,r)}pageWithContent(e,t,n,r=!0){return Uh.context("pageWithContent",()=>{const o=n.preferredShelfContentType||JZ,s=new rH(o),i={id:null,kind:null,softwareType:null,targetType:l$,title:n.title,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,idType:NN,recoMetricsData:M(t)}
nn(0,s,i),Fu(0,i,n.title),s.isHorizontal=!1,s.shouldFilterApps=n.shouldFilter
const a=_(t)
r&&(n.remainingContent=[]),s.items=ml(e,a,{contentUnavailable:(e,t)=>(r&&(n.remainingContent=et(0,a,t)),!0),lockupOptions:{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,artworkUseCase:kl(0,o)}})
const c=new cH([s])
return n.remainingContent.length&&(c.nextPage=n),c})}}class QZ extends KZ{requestWithFilter(e,t,n){return new hH(e).forType(q$).includingMacOSCompatibleIOSAppsWhenSupported(!0).withFilter(t,n)}renderPage(e,t,n,r){return Uh.context(KM,()=>{const r=new ZZ
r.url=this.paginationUrl,r.metricsPageInformation=this.pageInformation(e,t,n),r.shouldFilter=!1,r.metricsLocationTracker={rootPosition:0,locationStack:[]}
const o=this.pageWithContent(e,t,r)
return Fn(e,o,r.metricsPageInformation),o})}}class XZ extends gZ{constructor(e=null){super(e||"GroupingLockupShelfController"),this.supportedFeaturedContentIds=new Set([...ZY,...tJ])}initialShelfDataFromGroupingMediaApiData(e){const t=ne(e,V$)
let n=t?t.data:null
return n&&0!==n.length||(n=se(e,yF)),{shelfContents:n}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await gZ.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return ga(e,t,n,r)}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){const r={...n}
if(r.displayStyle=t.shelfStyle,557===t.featuredContentId){const e=d(j(oe(t.featuredContentData,by),qN),z$)
r.title=e,r.idType=NN,r.badges={forYou:!0},r.targetType="swooshBreakout"}return r}_createShelf(e,t,n,r){if(557===t.featuredContentId){const r=e.props.enabled("categoryBreakoutOnAppsAndGames"),o=!t.isArcadePage&&!r,s=!i(n.shelfContents),a=!e.featureFlags.isEnabled("arcade_category_breakout"),c=e.client.isPad
if(s||a||c||o)return null}return ma(e,t,n,r)}}class eK extends gZ{constructor(){super("GroupingPersonalizedLockupShelfController"),this.supportedFeaturedContentIds=XY}shelfRoute(e){return Ti(this.supportedFeaturedContentIds,["isOnDeviceRecommendationsShelf?","onDeviceRecommendationsUseCase?"])}initialShelfDataFromGroupingMediaApiData(e){const t=ne(e,V$)
let n=t?t.data:null
return n&&0!==n.length||(n=se(e,yF)),{shelfContents:n||[],containsODPShelfContents:!1,recoMetrics:M(t),candidates:null,isHiddenShelf:!1,responseTimingValues:null}}async secondaryShelfDataForShelfUrl(e,t,n,r){var o
const s=r.onDeviceRecommendationsUseCase
return(null==s?void 0:s.length)>0?await ao(e,s,Y$).then(e=>({shelfContents:_(e.dataContainer),containsODPShelfContents:!0,recoMetrics:e.recoMetrics,candidates:e.candidates,isHiddenShelf:!1})).catch(o=>o instanceof oJ?eK.fetchODPFallbackContent(e,t,n,r).catch(e=>eK.makeHiddenShelfData(n)):eK.makeHiddenShelfData(n)):(null===(o=n.recommendationsHref)||void 0===o?void 0:o.length)>0?await gZ.secondaryGroupingShelfMediaApiData(e,t,n,r).then(e=>{const t=D(e),n=this.initialShelfDataFromGroupingMediaApiData(t)
return n.responseTimingValues=e[Tw.timingValues],n.shelfTitle=W(t,z$),n}):await gZ.secondaryGroupingShelfMediaApiData(e,t,n,r).then(e=>{const t={shelfContents:_(e)||[],containsODPShelfContents:!1,recoMetrics:null,candidates:null,isHiddenShelf:!1,responseTimingValues:e[Tw.timingValues]}
return t.shelfTitle=n.title,t})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o=ga(e,t,n,r)
return this.addPersonalizationValuesToShelfToken(e,o,t,r),o}_createShelf(e,t,n,r){var i,a
if(!t.isValidRecommendationsShelf)return null
let c=null
if((0,Yh.isNothing)(t.title)&&(t.title=n.shelfTitle),n.containsODPShelfContents){c=this.personalizedShelf(e,n,t,r)
const o=(new nj).set(IN,YU).path("onDeviceRecommendations").param(dV,t.onDeviceRecommendationsUseCase).param(bV,JSON.stringify(t)).build(),s=new nU($$,o)
s.title=e.loc.string(XN),s.pageData=this.odpSeeAllPage(e,n.shelfTitle,JZ),(0,Yh.isSome)(c.header)?c.header.accessoryAction=s:c.seeAllAction=s,c.mergeWhenFetched=!1}else n.isHiddenShelf?c=eK.makeHiddenShelf(t):s(t.recommendationsHref)?(c=this.personalizedShelf(e,n,t,r),c.url=this.addOnDeviceQueryParamsIfNecessary(e,c.url,t)):(c=ma(e,t,n,r),c.url=this.addOnDeviceQueryParamsIfNecessary(e,c.url,t))
const l=(0,Yh.isSome)(c.header),u=l&&o(null===(i=c.header)||void 0===i?void 0:i.title),d=!l&&o(c.title),f=(null===(a=n.shelfTitle)||void 0===a?void 0:a.length)>0
return u&&f?c.header.title=n.shelfTitle:d&&f&&(c.title=n.shelfTitle),c}personalizedShelf(e,t,n,r){const o=Gu(n.metricsLocationTracker)
o&&o.fcKind===n.featuredContentId&&Bu(n.metricsLocationTracker)
const s={id:n.id,kind:null,softwareType:l(null==r?void 0:r.isArcadePage)?FF:null,targetType:l$,title:n.title,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,idType:NN,fcKind:n.featuredContentId,recoMetricsData:t.recoMetrics,displayStyle:n.shelfStyle}
Fu(0,s,n.title)
const i=ma(e,n,t,r)
return Bu(n.metricsLocationTracker),nn(0,i,s),i}addPersonalizationValuesToShelfToken(e,t,n,r){const o=476===t.featuredContentId
if(!r.hasAuthenticatedUser&&!t.isSearchLandingPage&&!o)return
const s=W(n,kD)
if((null==s?void 0:s.length)>0)return t.onDeviceRecommendationsUseCase=s,t.recommendationsHref=n.href,void(t.isValidRecommendationsShelf=!0)
const a=i(se(n,V$)),c=!z(n,fy)
!a&&c?(t.recommendationsHref=n.href,t.isValidRecommendationsShelf=!0):t.isValidRecommendationsShelf=a}addOnDeviceQueryParamsIfNecessary(e,t,n){var r
if(o(t))return null
if((null===(r=n.onDeviceRecommendationsUseCase)||void 0===r?void 0:r.length)>0){const e=new nj(t)
return e.param("isOnDeviceRecommendationsShelf",qF),e.param(dV,n.onDeviceRecommendationsUseCase),e.build()}return t}odpSeeAllPage(e,t,n){const r=new rH(n||JZ)
r.isHorizontal=!1,r.items=wb
const o=new cH([r])
return o.isIncomplete=!0,o.title=t,o}static async fetchODPFallbackContent(e,t,n,r){return await new Promise((r,o)=>{const s=Zr(e,n)
if(!s){const e=`OnDeviceRecommendationsShelfController: Could not construct media API request for: ${t}`
Uh.unexpectedType(RF,e,null),o(new Error(e))}Kr(e,s),s.attributingTo(t.build()),Mr(e,s).then(e=>{const t=ne(D(e),V$),n=M(t),o={shelfContents:_(t),containsODPShelfContents:!1,recoMetrics:n,candidates:null,responseTimingValues:e[Tw.timingValues]}
r(o)}).catch(e=>{const n=`OnDeviceRecommendationsShelfController: Failed to fetch fallback shelf contents: ${t}`
Uh.unexpectedType(RF,n,null),o(e)})})}static makeHiddenShelfData(e){return{shelfContents:[],containsODPShelfContents:!1,recoMetrics:null,candidates:null,isHiddenShelf:!0}}static makeHiddenShelf(e){const t=new rH(e.shelfStyle)
return t.isHidden=!0,t}}class tK extends gZ{constructor(){super("GroupingSmallBreakoutShelfController"),this.supportedFeaturedContentIds=new Set([480])}_supports(e,t,n,r){return!!super._supports(e,t,n,r)&&W(t,vF)===FL}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:se(e,V$)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await gZ.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}shouldImpressShelf(){return!1}_createShelf(e,t,n,o){const s=[]
for(const o of n.shelfContents){if(r(o.attributes)||Wr(t)){t.isDeferring=!0,t.remainingItems.push(o)
continue}const n=Pu(e,o)
if(Li(0,o)&&!J(n)){t.isDeferring=!0,t.remainingItems.push(o),t.relationshipToFetch=PF
continue}const i={targetType:Ey,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:M(o)}
let a
const c=W(o,ZF)
a=Se(e,o,Rx)?e.loc.uppercased(Tu(e,n,c)):c
let l={type:UF};(null==a?void 0:a.length)>0&&(l={type:tF,title:a})
const u=pu(e,o,z$)||Pe(e,n,z$),f=pu(e,o,AN)||Pe(e,n,lN),p=_l(e,n,{useCase:5,withJoeColorPlaceholder:!0}),h=N(d(fe(n,Ce(e,o),I$),gb))||(null==p?void 0:p.backgroundColor),w=new Zj(u,f,l,null,ki(0,h),null),g=new Qj(w,p,h),m=an(e,o,g.details.title,i),y=Se(e,zi(0,o),KF)
m.isPreorder=y,nn(0,g,m),Fu(0,m,g.details.title)
const v=xi(e,o),A={pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:M(o),targetType:j$,id:o.id}
od(e,v,A),g.details.callToActionButtonAction=v,g.clickAction=v,Bu(i.locationTracker),g.flowPreviewActionsConfiguration=Is(e,o,!0,null==t?void 0:t.clientIdentifierOverride,v,i,A),s.push(g)}const i=new rH(Ey)
return i.isHorizontal=!1,i.items=s,i.url=Yr(i,t),0===o.shelves.length&&(i.presentationHints={isFirstShelf:!0}),i}}class nK extends gZ{constructor(){super("ArcadeDownloadPackShelfController"),this.shelfId="arcadeDownloadPackShelf",this.supportedFeaturedContentIds=new Set([566])}shelfRoute(e){return[...super.shelfRoute(e),{protocol:YU,path:`/${nG}/${QU}/{token}`,query:[uV]}]}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return ga(e,t,n,r)}initialShelfDataFromGroupingMediaApiData(e){return{shelfContents:[],categoriesContents:[],apps:[],title:""}}async secondaryShelfDataForShelfUrl(e,t,n,r){const o=e.arcade.getDownloadPackGames(e.bag.arcadeDownloadPackShelfTTLInSeconds)
if((0,Gh.isNothing)(o)||0===o.apps.length)return{shelfContents:[],categoriesContents:[],apps:[],title:""}
const s=o.apps,i=this.shelfTitle(e,ee(o.subscriptionStatus))
if((0,Gh.isSome)(t.query.isArcadeDownloadPackShelfPlaceholder))return{shelfContents:[],categoriesContents:[],apps:s,title:i}
const a=s.map(e=>e.adamId),c=s.map(e=>e.categoryId),l=q$,u=M$,d=new hH(e).addingQuery("ids[apps]",Array.from(a).join(",")).addingQuery("ids[editorial-items]",Array.from(c).join(",")).includingAdditionalPlatforms(E(e)).includingAttributes(mi(e))
return await Mr(e,d).then(async e=>({shelfContents:e.data.filter(e=>e.type===l),categoriesContents:e.data.filter(e=>e.type===u),apps:s,title:i,responseTimingValues:e[Tw.timingValues]}))}_createShelf(e,t,n,r){if(t.isFirstRender){const n=e.arcade.getDownloadPackGames(e.bag.arcadeDownloadPackShelfTTLInSeconds)
if((0,Gh.isNothing)(n)||0===n.apps.length){const n=this.emptyShelfWithRefreshUrl(e)
return n.refreshUrl=this.shelfRefreshURL(t),ju(r.metricsLocationTracker),n}{const o=this.placeholderShelf(e,t,n.apps,this.shelfTitle(e,ee(n.subscriptionStatus)))
return ju(r.metricsLocationTracker),o}}if(n.apps.length>0&&((0,Gh.isNothing)(n.shelfContents)||0===n.shelfContents.length))return this.placeholderShelf(e,t,n.apps,n.title)
{const r=this.shelfMetrics(n.title,t)
Fu(0,r,n.title)
const o=this.downloadPackShelf(e,t,n)
return o.refreshUrl=this.shelfRefreshURL(t),Bu(t.metricsLocationTracker),nn(0,o,r),o}}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){return null}emptyShelfWithRefreshUrl(e){const t=new rH(this.useCustomDownloadPackCardShelf(e)?dO:g$)
return t.id=this.shelfId,t.isHidden=!0,t}placeholderShelf(e,t,n,r){const o=this.useCustomDownloadPackCardShelf(e)?this.downloadPackCardPlaceholderShelf(e,t,n.length):this.smallLockupsPlaceholderShelf(e,t,n)
return o.url=nj.from(zr(t)).build(),o.title=r,o}downloadPackCardPlaceholderShelf(e,t,n){const r=new rH(dO)
r.id=this.shelfId
const o=new AB
return o.numberOfPlaceholders=n,r.items=[o],t.shelfStyle=r.contentType,r}smallLockupsPlaceholderShelf(e,t,n){const r=new rH(g$)
return r.id=this.shelfId,r.items=[],r.isHorizontal=!0,r.rowsPerColumn=2,r.items=Array(n.length).fill(new Xj),r.placeholderContentType=r.contentType,r.contentType=L_,t.showingPlaceholders=!0,t.remainingItems=n.map(e=>({id:e.adamId,type:q$})),r}downloadPackShelf(e,t,n){const r=this.categoriesMapFromResponse(e,n.categoriesContents,n.apps),o=this.useCustomDownloadPackCardShelf(e),s=o?dO:g$,i=this.lockupsFromResponse(e,t,r,o,o,kl(0,s),(0,Gh.isSome)(n.shelfContents)?n.shelfContents:[],n.apps),a=new rH(s)
if(a.id=this.shelfId,a.title=n.title,o){const e=new AB
e.lockups=i,a.items=[e]}else a.items=i,a.isHorizontal=!0,a.rowsPerColumn=2
return a.isHidden=0===i.length,a}useCustomDownloadPackCardShelf(e){return e.client.isPhone}shelfRefreshURL(e){return nj.from(zr(e)).param(uV,qF).build()}lockupsFromResponse(e,t,n,r,o,s,i,a){return Uh.context("lockupsFromResponse",()=>{const c=new Map
for(const e of i)c.set(e.id,e)
const l=t.metricsLocationTracker,u=t.metricsPageInformation,d=[]
for(const t of a){const i=c.get(t.adamId)
if((0,Gh.isNothing)(i))continue
const a=al(e,i,{offerStyle:o?SM:void 0,offerEnvironment:o?R$:void 0,metricsOptions:{pageInformation:u,locationTracker:l,badges:{categoryId:t.categoryId}},metricsClickOptions:{id:i.id,pageInformation:u,locationTracker:l,badges:{categoryId:t.categoryId}},artworkUseCase:s,shouldHideArcadeHeader:!0,isSubtitleHidden:r});(0,Gh.isNothing)(a)||(Cl(a,e),ju(l),r?a.heading=n.get(a.adamId):a.subtitle=n.get(a.adamId),d.push(a))}return d})}categoriesMapFromResponse(e,t,n){const r=new Map
for(const o of n){const n=t.find(e=>e.id===o.categoryId)
if(!n)continue
const s=pu(e,n,z$)
r.set(o.adamId,s)}return r}shelfTitle(e,t){return e.loc.string(t===lL?"Arcade.DownloadPack.ShelfTitle.NewUser":"Arcade.DownloadPack.ShelfTitle")}shelfMetrics(e,t){return{id:t.id,kind:null,softwareType:FF,targetType:l$,title:e,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,idType:NN,fcKind:t.featuredContentId}}}const rK=[new mZ,new yZ,new vZ,new AZ,new TZ,new PZ,new IZ,new CZ,new bZ,new kZ,new EZ,new SZ,new BZ,new UZ,new GZ,new VZ,new XZ,new eK,new tK,new nK]
class oK extends X${constructor(e,t,n,r,o,s){super(),this.bodyText=e,this.isDetailHeader=t,this.privacyTypes=n,this.bodyActions=r,this.supplementaryItems=o,this.seeDetailsAction=s}}class sK extends X${constructor(e,t){super(),this.bodyText=e,this.action=t}}class iK extends X${constructor(e,t,n){super(),this.bodyText=e,this.actions=t,this.privacyTypesCount=n}}class aK extends eB{constructor(e,t,n,r,o,s,i,a){super(),this.identifier=e,this.title=t,this.detail=n,this.artwork=r,this.style=o,this.purposes=s,this.categories=i,this.clickAction=a,this.wantsScrollFocus=!1}}class cK extends X${constructor(e,t,n){super(),this.identifier=e,this.title=t,this.categories=n}}class lK extends X${constructor(e,t,n,r,o=[]){super(),this.identifier=e,this.title=t,this.artwork=n,this.style=r,this.dataTypes=o,this.prefersSmallArtwork=!1}}const uK=["284417353","1464590764","314638464","284993479","1351056256"]
class dK{setShelfId(e,t){this.shelfId=e,this.index=t,PW.has(e)&&(this.section=new yW(Y$,e))}}class fK{constructor(e,t){this.sequenceId=0,this.metricsPageInformation=e,this.locationTracker=t}addImpressionsToShelf(e,t,n,r,o,s){nn(0,t,{id:null!=r?r:`${this.sequenceId}`,idType:null!=o?o:XF,kind:null,softwareType:null,targetType:n,title:t.title,pageInformation:this.metricsPageInformation,locationTracker:this.locationTracker,recoMetricsData:s}),this.sequenceId++}getSequenceId(){return this.sequenceId}addImpressionsFieldsToSimilarItemsShelf(e,t,n,r){t&&(nn(0,t,{id:fK.similarItemsShelfId,kind:null,softwareType:null,targetType:n,title:t.title,pageInformation:this.metricsPageInformation,locationTracker:this.locationTracker,idType:r}),this.sequenceId++)}static resetLocationTrackerForSimilarItemsDuringDownloadShelf(e,t){const n=t.sourceLocationTracker
Vu(n,0),Gu(n).id=fK.similarItemsDuringDownloadShelfId}static addImpressionsFieldsToSimilarItemsDuringDownloadShelf(e,t,n){t&&nn(0,t,{id:fK.similarItemsDuringDownloadShelfId,kind:null,softwareType:null,targetType:t$,title:n.title,pageInformation:n.sourcePageInformation,locationTracker:n.sourceLocationTracker,idType:JL})}}fK.similarItemsShelfId=px,fK.similarItemsDuringDownloadShelfId=FI
const pK=[lc,dc,Ga,Ya,Va,Ka,ec,Xa,Qa,Ha,fc,Za,Ja],hK=[dc,Ga,Ya,Va,Ka,ec,Xa,Qa,Ha,fc,Za,lc,Ja],wK=[lc,Ga,function(e,t,n,r,o,s){const i=Te(e,t,Ax)
if(0===i.length)return null
const a=i[0]
let c=null
const l=d(a,ix)
l&&(c=e.loc.formatDate("d MMM YYYY",new Date(l)))
const u=d(a,HC)
if(0===i.length)return null
let f
if(u&&c)f=e.loc.string("VERSION_STRING_WITH_RELEASE_DATE").replace(zA,u).replace("{date}",c)
else{if(!u)return null
f=u}const p=new lj(f),h=o?"":e.loc.string("VERSION_STRING"),w=new cj(h,[p])
return w&&!r?w:null},dc,Ja],gK=[Va,Xa,Ha],mK=[Ac,yc,Cc,Ic,function(e,t,n,r){var o
return null!==(o=Tc(e,t))&&void 0!==o?o:Pc(e,t)},bc],yK=[Oc,Sc,vc,Ac],vK=[Oc,Ac,Tc,function(e,t,n,r){if(!Se(e,t,_L))return null
const o=e.loc.string("BADGE_FRIENDS_HEADING","Friends"),s={maxNumberOfAvatarsToDisplay:3,maxNumberOfFriendsBeforeTruncation:99,adamId:t.id}
return new mW("friendsPlaying","friendsPlaying",s,"standard",o,"",null,"",o,kF)},vc,yc,Cc,Ic,Pc,bc,function(e,t,n,o){if(Je(e).isSystemAppFromData(t))return null
const s=Xl(e,t)
if(r(s)||r(s.fileSizeByDevice))return null
const i=function(e,t){let n
if(n=(0,Gh.isSome)(t.maxEssentialInstallSizeInBytes)?t.fileSizeByDevice+t.maxEssentialInstallSizeInBytes:(0,Gh.isSome)(t.maxInstallSizeInBytes)?t.fileSizeByDevice+t.maxInstallSizeInBytes:t.fileSizeByDevice,n<=0)return null
const r=e.loc.fileSize(n).trim().split(/\s+/)
return 2!==r.length?null:{size:r[0],unit:r[1]}}(e,s)
if(!i)return null
const a={paragraphText:i.size},c=i.unit,l=e.loc.string("BADGE_SIZE_HEADING")
return new mW(TM,WO,a,S$,l,c,null,null,c,wN)}]
!function(e){e.StoryCenteredMotion16x9="storyCenteredMotion16x9",e.StoryCenteredStatic16x9="storyCenteredStatic16x9",e.StoryDetailMotion3x4="storyDetailMotion3x4",e.StoryDetailStatic3x4="storyDetailStatic3x4",e.HeroMotion16x9="heroMotion16x9",e.HeroStatic16x9="heroStatic16x9",e.LargeBreakoutMotion16x9="largeBreakoutMotion16x9",e.LargeBreakoutStatic16x9="largeBreakoutStatic16x9",e.StoryCardMotion3x4="storyCardMotion3x4",e.StoryCardStatic3x4="storyCardStatic3x4",e.StorySearchStatic16x9="storySearchStatic16x9",e.SubscriptionHero="subscriptionHero",e.BrickStatic16x9="brickStatic16x9"}(Iw||(Iw={})),function(e){e.Hero="hero",e.LargeBreakout="largeBreakout",e.StoryCard="storyCard",e.StoryDetail="storyDetail",e.StoryDetailLandscape="storyDetailLandscape",e.Search="search",e.Brick="brick",e.EditorialLockup="editorialLockup",e.EditorialPage="editorialPage"}(Sw||(Sw={}))
const AK={hero:[Iw.HeroMotion16x9,Iw.HeroStatic16x9,Iw.StoryCenteredMotion16x9,Iw.StoryCenteredStatic16x9],largeBreakout:[Iw.LargeBreakoutMotion16x9,Iw.LargeBreakoutStatic16x9,Iw.StoryCenteredMotion16x9,Iw.StoryCenteredStatic16x9],storyCard:[Iw.StoryCardMotion3x4,Iw.StoryCardStatic3x4,Iw.StoryCenteredMotion16x9,Iw.StoryCenteredStatic16x9],storyDetail:[Iw.StoryDetailMotion3x4,Iw.StoryDetailStatic3x4,Iw.StoryCenteredMotion16x9,Iw.StoryCenteredStatic16x9],storyDetailLandscape:[Iw.StoryCenteredMotion16x9,Iw.StoryCenteredStatic16x9,Iw.StoryDetailMotion3x4,Iw.StoryDetailStatic3x4],search:[Iw.StorySearchStatic16x9,Iw.StoryCenteredMotion16x9,Iw.StoryCenteredStatic16x9],brick:[Iw.BrickStatic16x9,Iw.HeroStatic16x9,Iw.StoryCenteredStatic16x9],editorialLockup:[Iw.SubscriptionHero],editorialPage:[Iw.StoryCardStatic3x4,Iw.HeroStatic16x9,Iw.StoryCenteredStatic16x9,Iw.SubscriptionHero]},TK={chartPositions:function(e,t,n){const r=Ae(e,t,EC)
if(o(r))return null
const s=su(0,e.host.clientIdentifier)
if(o(s))return null
const i=p(r,s)
if(o(i))return null
const a=f(i,NO)
if(a>50)return null
const c=d(i,kA),l=new Sj("borderedTextLabel")
l.moduleType=EC
const u=(0,Gh.isSome)(n.searchAd)?e.bag.adsOverrideLanguage:null,h=(0,Gh.isSome)(u)?e.adsLoc.string(TT):e.loc.string(TT)
return l.borderedText=h.replace(EA,e.loc.formattedCountForPreferredLocale(e,a,u)),l.labelText=c,l.secondaryViewPlacement=n$,l},genreDisplayName:function(e,t,n){const r=xr(e,t,!0),s=il(e,t)
if(o(s)||o(r))return null
const i=new Sj(wk)
i.moduleType=EO,i.labelText=s
const a=El(e,r,{useCase:20})
return a.crop="sr",i.artwork=a,i},developerInfo:function(e,t,n){if(o(n.developerName))return null
{const t=new Sj(wk)
return t.moduleType="developerInfo",t.labelText=n.developerName,t.artwork=nt(e,OC),t}},editorialBadgeInfo:function(e,t,n){if(n.isEditorsChoice){const t=new Sj(Hx)
return t.moduleType=GL,t.useAdsLocale=(0,Gh.isSome)(n.searchAd)&&(0,Gh.isSome)(e.bag.adsOverrideLanguage),t}return null},userRating:function(e,t,n){const r=Se(e,t,KF)
if(s(n.ratingCount)&&s(n.rating)&&!r){const e=new Sj("starRating")
return e.moduleType=qD,e.starRating=n.rating,e.labelText=n.ratingCount,e}return null},supportsGameController:function(e,t,n){let r=!1
switch(Pe(e,t,ux)){case UR:case yE:r=!0}if(Se(e,t,PT)&&(r=!0),!r)return null
const o=new Sj(wk)
o.moduleType=PT
const s=(0,Gh.isSome)(n.searchAd)&&(0,Gh.isSome)(e.bag.adsOverrideLanguage)
return o.labelText=s?e.adsLoc.string(KL):e.loc.string(KL),o.artwork=nt(e,"systemimage://gamecontroller.fill"),o}}
class PK{constructor(){this.runsOnIntel=!0,this.runsOnAppleSilicon=!0,this.requiresRosetta=!1}}!function(e){e[e.seeAllPage=0]="seeAllPage",e[e.categoryBreakout=1]="categoryBreakout",e[e.other=2]="other"}(bw||(bw={}))
class IK{constructor(e,t){this.videos=e,this.mediaPlatform=t}}const SK=new cB(414,896),bK=new cB(375,812),CK=new cB(414,736),kK=new cB(375,667),EK=new cB(320,568),OK=new cB(320,480),RK=(new cB(768,1024),new cB(810,1080)),DK=new cB(834,1112),_K=new cB(834,1194),LK=new cB(1194,834),xK=new cB(1024,1366),MK=new cB(1024,1366),NK=new cB(1366,1024),FK=new cB(744,1133),$K=new cB(1133,744),BK=new cB(1032,1376),UK=new cB(1376,1032),GK=new cB(834,1210),VK=new cB(1210,834),jK=new cB(312,390),HK=new cB(368,448),WK=new cB(396,484),qK=new cB(410,502),zK=new cB(820,1180),YK=new cB(360,780),JK=new cB(390,844),ZK=new cB(428,926),KK=new cB(393,852),QK=new cB(430,932),XK=[DS,OS,RS,YE,bm,Sm,Im,sF]
class eQ{constructor(){this.location=null,this.position=0}}const tQ="X-AppStore-iAdClickToken",nQ="X-AppStore-iAdLineItem",rQ="X-AppStore-iAdDismissAdActionMetrics"
class oQ{constructor(e,t,n,r,o,i,a){this.placementType=t,this.placementId=this.placementIdFromType(t),this.pageFields={},this.clickFields={},this.impressionsFields={},this.fastImpressionFields={},this.iAdClickEventFields={},this._iAdApplied=!1,this._iAdAdamId=null,this.positionInfo=a,this.slotInfo=n,this.setInitialAdData(e,r,o),s(i)&&(this.pageFields[mv]=i),this.fastImpressionFields[Kb]=!0}static from(e,t){const n=new oQ(e,d(t.placementType),c(t.slotInfo),d(t.iAdId),d(t.appStoreClientRequestId),w(t.wasOdmlSuccessful),h(t.positionInfo))
return n._iAdApplied=l(t._iAdApplied),n._iAdAdamId=d(t._iAdAdamId),Object.assign(n.pageFields,t.pageFields),Object.assign(n.clickFields,t.clickFields),Object.assign(n.impressionsFields,t.impressionsFields),Object.assign(n.fastImpressionFields,t.fastImpressionFields),Object.assign(n.iAdClickEventFields,t.iAdClickEventFields),n.updateContainerId(d(t.containerId)),n}static createInitialSlotInfos(e,t,n,r){var o
switch(t){case u$:case $F:const s=oQ.containerIdFromType(t),i=null!==(o=null==n?void 0:n.slot)&&void 0!==o?o:0
return[{containerId:s,slots:[{slotId:`${s}_${i}`,slotIndex:i,hasAdData:!1}]}]
case L$:const a=vn(e,t).map(e=>e.slot),c={},l=(0,Gh.isSome)(n)?n.slot-1:null
let u=!1
return a.forEach(e=>{var t
const n=u?e-1:e,o=null==r?void 0:r.find(e=>e.containedAdSlots.includes(n)),s=l===e,i=function(e,t,n){return(0,Gh.isNothing)(n)?"0":n.type===Pw.EditorialItemGroup?(!(n.containedAdSlots.length>1)||e===n.containedAdSlots[0]||n.containedAdSlots[n.containedAdSlots.length-1],"0"):"0"}(n,0,o),a=null!==(t=c[i])&&void 0!==t?t:{containerId:i,slots:[]}
c[i]=a
const d={slotId:`${i}_${e}`,slotIndex:e,hasAdData:!1}
a.slots.push(d),u=u||s}),Object.values(c)
default:return null}}get iAdIsPresent(){return this._iAdApplied}get iAdAdamId(){return this._iAdAdamId}updateForAdResponse(e,t){var n
r(t)||(this.placementType=t.placementType,this.placementId=this.placementIdFromType(this.placementType),this.positionInfo=null===(n=t.onDeviceAd)||void 0===n?void 0:n.positionInfo,this.setInitialAdData(e,t.iAdId,t.clientRequestId))}setInitialAdData(e,t,n){var r
if((0,Gh.isNothing)(t)||(0,Gh.isNothing)(n))return
switch(this.pageFields[iQ.hasIAdData]=!0,this.placementType){case L$:case u$:case $F:this.impressionsFields[iQ.hasIAdData]=!0}switch(this.pageFields[UO]=n,this.placementType){case L$:case u$:case $F:this.clickFields[UO]=n,this.impressionsFields[UO]=n}const o=ku(t)
if(this.pageFields[hM]=o,this.impressionsFields[hM]=o,this.clickFields[hM]=o,this.updateContainerId(null),this.updateSlotInfo(),i(this.slotInfo)&&(this.pageFields[NM]=this.slotInfo,this.clickFields[NM]=this.slotInfo,this.impressionsFields[NM]=this.slotInfo),(null===(r=this.placementId)||void 0===r?void 0:r.length)>0)switch(this.pageFields[dM]=this.placementId,this.clickFields[dM]=this.placementId,this.impressionsFields[dM]=this.placementId,this.placementType){case L$:case u$:case $F:this.fastImpressionFields[dM]=this.placementId}}updateContainerId(e){this.placementType===L$?(this.containerId=e,s(this.containerId)&&(this.clickFields[Mx]=this.containerId,this.fastImpressionFields[Mx]=this.containerId)):(this.containerId=oQ.containerIdFromType(this.placementType),s(this.containerId)&&(this.pageFields[Mx]=this.containerId,this.clickFields[Mx]=this.containerId,this.fastImpressionFields[Mx]=this.containerId))}containerIdForSlotIndex(e){if((0,Gh.isNothing)(this.slotInfo))return null
for(const t of this.slotInfo)for(const n of t.slots)if(n.slotIndex===e)return t.containerId
return this.containerId}apply(e,t){if(o(t))return
const n=t.id,r=j(t,fx)
if(this._iAdAdamId=n,r){this.impressionsFields[iQ.hasIAdData]=!0,this.clickFields[iQ.hasIAdData]=!0
const o=ku(r[GO])
this.fastImpressionFields[MO]=o,this.clickFields[MO]=o
const s=ku(r[yv])
this.clickFields[xO]=s,this.fastImpressionFields[xO]=s,this.pageFields[eF]=n,this.pageFields.iAd={iAdFormat:Ou(h(g(r),"format")),iAdAlgoId:ku(r.algoId),iAdImpressionId:ku(r[GO]),iAdMetadata:ku(r[yv])}
const i=_e(e,t)
this.updateIAdMetricsFieldsForProductVariantData(i,this.clickFields),Object.assign(this.iAdClickEventFields,r),this._iAdApplied=!0,this.setMissedOpportunity(e,null,this.placementType)}this.updateSlotInfo(),i(this.slotInfo)&&(this.pageFields[NM]=this.slotInfo,this.clickFields[NM]=this.slotInfo,this.impressionsFields[NM]=this.slotInfo)}applyClickFieldsFromPageRequest(e,t){this._iAdApplied=!0,this._iAdAdamId=e,Object.assign(this.clickFields,t),Object.keys(this.pageFields).forEach(e=>delete this.pageFields[e])}setSpecifiedCreativeUsed(e){this.fastImpressionFields[vv]=e,this.clickFields[vv]=e}setTemplateType(e){this.pageFields[$D]=e,this.impressionsFields[$D]=e,this.clickFields[$D]=e}setMissedOpportunity(e,t,n){if(this.missedOpportunityReason=t,s(t))switch(this.clickFields[bN]=t,this.placementType){case L$:case u$:case $F:break
default:this.pageFields[bN]=t,this.impressionsFields[bN]=t}else delete this.clickFields[bN],n===$F?(this.pageFields[bN]=null,this.impressionsFields[bN]=null):(delete this.pageFields[bN],delete this.impressionsFields[bN])
s(t)?(this.pageFields[bN]=t,this.impressionsFields[bN]=t):(delete this.pageFields[bN],delete this.impressionsFields[bN]),this.updateSlotInfo(),i(this.slotInfo)&&(this.pageFields[NM]=this.slotInfo,this.clickFields[NM]=this.slotInfo,this.impressionsFields[NM]=this.slotInfo)}placementIdFromType(e){switch(e){case kN:return Av
case rN:return Tv
case L$:return Pv
case u$:return Iv
case $F:return Sv
default:throw new Error(`This method should never be called with value: ${e}`)}}static placementTypeFromPlacementId(e){switch(e){case Av:return kN
case Tv:return rN
case Pv:return L$
case Iv:return u$
case Sv:return $F
default:return rN}}static containerIdFromType(e){switch(e){case u$:return px
case $F:return FI
default:return null}}fastImpressionsFieldsForCurrentItem(e,t){switch(this.placementType){case u$:case $F:case L$:let r
r=(0,Gh.isSome)(t)?t:Gu(e).locationType===SN?(n=e).locationStack.length<2?null:n.locationStack[1].position:Uu(e)
const o=v(this.fastImpressionFields)
if(o[bv]=`${this.containerIdForSlotIndex(r)}_${r}`,r!==this.adjustedSlotIndex){const e=[Kb,dM,Mx,bv]
Object.keys(o).forEach(t=>{e.includes(t)||delete o[t]})}return o
default:return this.fastImpressionFields}var n}get adjustedSlotIndex(){var e
const t=null===(e=this.positionInfo)||void 0===e?void 0:e.slot
return s(t)?t-1:null}updateSlotInfo(){if(!(0,Gh.isNothing)(this.slotInfo))switch(this.placementType){case u$:case $F:for(const e of this.slotInfo)for(const t of e.slots)t.hasAdData=this.iAdIsPresent,s(this.missedOpportunityReason)&&(t.missedOpportunityReason=this.missedOpportunityReason)
break
case L$:const e=this.adjustedSlotIndex
for(const t of this.slotInfo)for(const n of t.slots){const t=e===n.slotIndex,r=this.iAdIsPresent&&t
let o=this.missedOpportunityReason
!t&&s(e)&&(o=Dg),n.hasAdData=r,s(o)&&(n.missedOpportunityReason=o)}}}updateIAdMetricsFieldsForProductVariantData(e,t){Be(e,VO)?t[Cv]=e.productPageId:delete t[Cv]}get fastImpressionsEventVersion(){switch(this.placementType){case u$:case $F:case L$:return 5
default:return 4}}get shouldIncludeAdRotationFields(){switch(this.placementType){case u$:case $F:case L$:return!1
default:return!0}}}class sQ{constructor(e={}){this.baseFields=e}}class iQ{constructor(e){this._options=Object.freeze(e)}get defaultTopic(){return this._options.defaultTopic}_reduceFieldAccuracy(e,t){for(const n of t){const t=d(n,"fieldName")
if(r(t))continue
const o=f(e,t)
if(r(o))continue
let s=f(n,"magnitude")
r(s)&&(s=1048576)
let i=f(n,"significantDigits")
if(r(i)&&(i=2),s<=0||i<0){e[t]=Number.NaN
continue}const a=o/s
e[t]=ie(a,i)}}_urlScrubbingAdParameters(e){const t=new nj(e)
return t.removeParam(tQ),t.removeParam(nQ),t.removeParam(rQ),t.build()}_derezFastImpressions(e){const t=d(e,DD),n=f(e,_O)
if(t===Ob){if(4===n){const t=c(e,YN)
e[YN]=t.map(e=>{const t=c(e,zy)
return 0===t.length||(e[zy]=t.map(e=>{const t=f(e,"d")
return e.s=0,e.d=ie(t,2),e})),e})}if(5===n){const t=c(e,YN)
e[YN]=t.map(e=>{delete e[LO],(o(d(e,xO))||o(d(e,MO)))&&delete e.id
const t=p(e,Yy)
return o(t)||(Object.entries(t).forEach(([e,n])=>{const r=c(n)
t[e]=r.map(e=>{const t=f(e,"d")
return e.s=0,e.d=ie(t,2),e})}),e[Yy]=t),e})}}}_decorateSearchResultImpressions(e){const t=d(e,fN),n=d(e,fM)
t===xM&&n!==H_&&function(e){const t=c(e,YN)
let n
for(const e of t)if(d(e,q_)===pM){n=e[GO]
break}n&&(e[YN]=t.map(e=>(d(e,q_)===BL&&(e[Qb]=n),e)))}(e)}_decorateSearchFocusImpressions(e){const t=d(e,fN),n=d(e,fM)
t===Db&&n===_b&&function(e){var t
const n=c(e,YN)
let r
for(const e of n)if("R8804"===d(e,wD)){r=null!==(t=d(e,GO))&&void 0!==t?t:void 0
break}r&&(e[YN]=n.map(e=>{const t=d(e,wD),n=d(e,q_)
return o(t)&&n===m$&&null!=e&&null==d(e,Qb)&&(e[Qb]=r),e}))}(e)}_decorateAll(e,t){const n=this._options.bagProvider,o=n("metricsBase",t)
r(o)||typeof o!==vx||Object.assign(e,o),e.clientBuildType=this._options.buildType,e.resourceRevNum=this._options.jsVersion,e.xpSendMethod="jet-js",this._options.buyDecorator.useApp(d(e,C$)),delete e.jet_adamId
const s=function*(e){if(r(e))return
const t=e.split(";")
for(const e of t){const t=e.indexOf("=")
if(-1===t){const t=decodeURIComponent(e).trim()
yield{key:t,value:""}}else{const n=decodeURIComponent(e.substring(0,t)).trim(),r=decodeURIComponent(e.substring(t+1)).trim()
yield{key:n,value:r}}}}(d(e,Jy))
for(const t of s)if("xp_ci"===t.key){this._options.buyDecorator.useClientId(t.value),e.clientId=t.value,delete e.clientGeneratedId
break}delete e[Jy]
const i=d(e,fN),a=d(e,fM)
if(!r(i)&&!r(a)){const r=d(n("compoundSeparator",t))||"_"
e.page=`${i}${r}${a}`}const l=c(n("deResFields",t))
this._reduceFieldAccuracy(e,l)
const u=[WL,V_,W_,qL,b$,"parentPageUrl"]
for(const t of u){const n=d(e,t);(null==n?void 0:n.length)>0&&(e[t]=this._urlScrubbingAdParameters(n))}const f=d(e,Lb);(0,Gh.isSome)(f)&&(delete e[Lb],e[_D]=f)}_decorateClick(e){!function(e){const t=d(e,FD),n=d(e,Xb)
r(t)&&(null==n?void 0:n.length)>0&&(e[FD]=n),d(e,eC)===Dv&&delete e[tC]}(e),this._decorateSearchResultImpressions(e),this._decorateSearchFocusImpressions(e),WB.shared.addReferralDataToEventIfNecessary(e)
const t=d(p(e,MM),VM)
if((null==t?void 0:t.length)>0){const n=new nW(t)
n.set(Zy,null,null),e[MM][VM]=n.toString()}const n=d(e,fN)
!(0,Gh.isNothing)(n)&&n.toLowerCase().includes(c$)||delete e[YN]}_decorateImpressions(e,t){if(o(t[YN]))return!1
this._derezFastImpressions(t),this._decorateSearchResultImpressions(t)
const n=d(t,qL)
return(null==n?void 0:n.length)>0&&(t[_F]=Du(n),delete t[qL]),!0}_decorateMedia(e){const t=f(e,NO)
r(t)||(e[NO]=Math.round(t))}_decoratePage(e,t){const n=d(t,$$)
r(n)||(t.pageHistory=this._options.buyDecorator.getPageHistoryFor(n)),WB.shared.setReferralDataForProductPageExtensionIfNecessary(t),WB.shared.beginReferralContextForPageIfNecessary(t),WB.shared.addReferralDataToEventIfNecessary(t)
const o=d(t,qL)
if(!r(o)){const e=Eu(o),n=Du(o);(null==e?void 0:e.length)>0&&(t[LD]=e),(null==n?void 0:n.length)>0&&(t[_F]=n)}}_decoratePageChange(e,t){this._decoratePage(e,t)}_decorateSearch(e){e[_O]=3,function(e){var t
const n=null!==(t=e[MM])&&void 0!==t?t:{},o=n[FD],s=d(e,Xb)
r(o)&&(null==s?void 0:s.length)>0&&(n[FD]=s,e[MM]=n),d(e,eC)===Dv&&delete e[tC],e[hx]===_v&&delete e[tC]}(e)}_decoratePageExit(e){WB.shared.endReferralContextIfNecessaryForPageEvent(e)}_filterExtraneous(e){!function(e){delete e[Xb],delete e[eC],delete e.searchGhostHintTermLastDisplayed}(e),WB.shared.removeReferralContextInfoFromMetricsEvent(e)}makeEvent(e,t){"bubbleTip"===t[q_]&&(t[BN]="bubbleTipImpressed"),"banner"===t[q_]&&(t[BN]="bannerImpressed")
const n=d(t,BN)
this._options.isLoggingEnabled
const r=t[zL],o=t.app
if("com.apple.mobilesafari"===r&&o===vI)return new ZB({})
const s=d(t,JR)||this._options.defaultTopic
this._decorateAll(t,s),e.user.isUnderThirteen&&(delete t.dsId,delete t.userId)
const i=t[W_]
switch(i&&""===i&&delete t[W_],n){case Lx:this._decorateClick(t)
break
case Wy:break
case YN:if(!this._decorateImpressions(e,t))return new ZB({})
break
case Rb:this._decorateMedia(t)
break
case $$:this._decoratePage(e,t)
break
case iE:this._decoratePageChange(e,t)
break
case Ky:this._decoratePageExit(t)
break
case c$:this._decorateSearch(t)}return this._filterExtraneous(t),new ZB(t)}}iQ.hasIAdData=qy,new Set([I$,l_,eM,DR,HF])
const aQ=new Set([UM,I$,l_,eM,DR,HF]),cQ=new Set([UM,I$,l_,eM,DR,HF]),lQ=new Set([UM,I$,eM,HF]),uQ="write-review",dQ=E$,fQ="appEventRequirementKey",pQ=(G(N("F0F0F8"),N("303031")),{type:mM,red:0,green:0,blue:0,alpha:.2})
class hQ{constructor(e,t,n,r,o,s,i,a){this.isBundleShelf=!1,this.ids=e,this.title=t,this.shouldInferSeeAllFromFetchesItems=n,this.contentType=r,this.offerStyle=o,this.spotlightInAppProductIdentifier=s,this.refreshUrl=i,this.recoMetricsData=a}}const wQ=[UM,eM,I$,HF],gQ=(0,Bh.makeMetatype)("app-store:page-router")
class mQ{constructor(){this.$intentKind="GenericPageIntent"}async perform(e,t){const n=t.required(gQ)
return await n.fetchPage(t,e.url,cH)}}class yQ{constructor(){this.$intentKind="GenericPageMoreIntent"}async perform(e,t){const n=t.required(gQ)
return await n.fetchMoreOfPage(t,e.pageToken)}}class vQ{constructor(){this.$intentKind="ShelvesIntent"}async perform(e,t){const n=t.required(gQ)
return await n.fetchShelves(t,e.requests)}}class AQ{constructor(){this.$intentKind="ActionIntent"}async perform(e,t){return await Dd(t,e)}}class TQ{constructor(){this.$intentKind="MetricsFieldLintingIntent"}async perform(e,t){const n=it(t).makeEvent(t,m(e.fields))
return await Promise.resolve(n)}}class PQ{constructor(){this.$intentKind="AppUpdateLockupsIntent"}async perform(e,t){const n=this.createUpdateLockups(t,e.appUpdateMetadata)
return await Promise.resolve(n)}createUpdateLockups(e,t){const n={lockupOptions:{metricsOptions:{pageInformation:Nn(e,jR,"Updates",""),locationTracker:{rootPosition:0,locationStack:[]}},artworkUseCase:1}}
return this.updatesLockupsFromData(e,t,n)}updatesLockupsFromData(e,t,n){return Uh.context("updatesLockupsFromData",()=>{const a=[]
return null==t||t.forEach((t,c)=>{var l
const u=t.updateMetadata
if(r(u.attributes))return void(n.contentUnavailable&&n.contentUnavailable(u.id,c))
const f=n.lockupOptions
let p=15358
if(s(n.filter)&&(p=n.filter),Ze(e,u,p))return
const h=al(e,u,f)
if(r(h)||!h.isValid())return
const w=fe(u,Ce(e,u),"latestVersionInfo"),g=d(w,HC),m=d(w,ix)
h.releaseDate=new Date(m),h.installDate=t.updateInstallDate
const y=t.isUpdateAvailable||t.isUpdating?h.releaseDate:h.installDate
let v=this.timeAgoStringForDate(e,y)
o(v)&&(v=e.loc.string("UPDATES_VERSION_FORMAT").replace("{updateVersion}",g)),i(v)&&(h.subtitle=v)
const A=d(w,qA);(0,Yh.isSome)(A)&&(h.whatsNew=new mB(A.trim())),h.version=g,h.size=null===(l=Xl(e,u))||void 0===l?void 0:l.fileSizeByDevice,h.externalVersionId=be(e,u,FC),a.push(h),ju(n.lockupOptions.metricsOptions.locationTracker)}),a})}timeAgoStringForDate(e,t){if((0,Yh.isNothing)(t))return
const n=(new Date).getTime()-t.getTime(),r=Math.floor(n/864e5)
switch(r){case 0:return e.loc.string("LOCKUPS_TODAY")
case 1:return e.loc.string("LOCKUPS_YESTERDAY")
case 2:case 3:return e.loc.string("LOCKUPS_DAYS_AGO_FORMAT").replace("{daysAgo}",r.toString())
default:const n=eR
return e.loc.formatDate(n,t)}}}class IQ extends X${constructor(e,t){super(),this.title=e,this.sections=t||[],this.pageMetrics=new QB,this.pageRenderMetrics={}}}class SQ extends X${constructor(e,t){super(),this.personalizationEnabledPage=e,this.personalizationDisabledPage=t}}class bQ extends X${constructor(e,t){super(),this.title=e,this.footer=t,this.contents=[]}addContentItem(e){this.contents.push(e)}}class CQ extends X${constructor(e){super(),this.type=e}}class kQ extends CQ{constructor(e,t,n){super(m$),this.title=e,this.action=t,this.displayType=n||CF}}class EQ extends CQ{constructor(e,t){super("infoListItem"),this.title=e,this.value=t}}class OQ extends CQ{constructor(e){super(tF),this.text=e}}class RQ extends X${constructor(){super(...arguments),this.links={},this.pageMetrics=new QB,this.pageRenderMetrics=null}}class DQ extends CQ{constructor(e,t){super(cI),this.title=e,this.defaultValue=t}}class _Q{constructor(){this.$intentKind="AccountLinksIntent"}async perform(e,t){return Ld(t)}}const LQ="https://itunes.apple.com/WebObjects/MZStore.woa/wa/genericPageTemplate?pageComponent=finance_internet_eraser_page&additionalResources=p7financebootstrap"
class xQ{constructor(){this.$intentKind="GenericAccountPageIntent"}async perform(e,t){return await xd(t,e.url)}}class MQ{constructor(){this.$intentKind="PersonalizationTransparencyPageIntent"}async perform(e,t){return await async function(e){const t=e.required(gQ),n=`${YU}:///${mG}/${yG}`
return await t.fetchPage(e,n,SQ)}(t)}}class NQ{constructor(){this.$intentKind="UpdateAppEventNotificationIntent"}async perform(e,t){return await Bd(t,e)}}class FQ extends X${constructor(e,t,n=null){super(),this.title=e,this.value=t,this.metricsValue=n}}FQ.defaultValue="pageFacetsDefaultValue",FQ.trueValue=new FQ(qF,kR),FQ.falseValue=new FQ(kR,kR)
class $Q extends X${constructor(e,t,n,r,o=null,s=[],i=null,a=null,c=null,l=!1,u=!1){super(),this.id=e,this.parameterName=t,this.title=n,this.displayType=r,this.defaultOptions=i,this.defaultOptionTitle=o,this.options=s,this.metricsParameterName=a,this.clickAction=c,this.displayOptionsInline=l,this.showsSelectedOptions=u}}class BQ extends X${constructor(e=[],t=null){super(),this.title=t,this.facets=e}}class UQ extends X${constructor(e,t,n){super(),this.facetGroups=e,this.allowsResetButton=t,this.resetButtonTitle=n}static isDefinedNonNullNonEmpty(e){return(0,Gh.isSome)(e)&&0!==Object.keys(e).length}}UQ.requestValuesForSelectedFacetOptions=function(e){if(UQ.isDefinedNonNullNonEmpty(e)){const t=e.filter(e=>UQ.isDefinedNonNullNonEmpty(e.value)).map(e=>e.value).join(",").split("&"),n=t[0],r=t.splice(1),o={}
for(const e of r){const t=e.split("=")
2===t.length&&(o[t[0]]=t[1])}return{value:n,additionalKeyValuePairs:o}}return null}
const GQ="-releaseDateByDay&sort=name",VQ="-lastUpdatedByDay&sort=name",jQ="alphabet&sort=name",HQ="category&sort=-releaseDate",WQ="groupBy",qQ=EE,zQ=Vg,YQ="filter[platform]",JQ={}
let ZQ=!1,KQ=null,QQ=null,XQ=null,eX=null,tX=null,nX=null,rX=null,oX=null,sX=null,iX=null,aX=null
const cX={}
cX[PV]=WQ,cX[kV]=qg,cX[EV]=zg,cX[OV]=Yg,cX[RV]=qQ,cX.binCompatGames=YQ
class lX{constructor(){this.$intentKind="ArcadeSeeAllGamesPageIntent"}async perform(e,t){return await Hd(t,e.requestDescriptor)}}class uX{constructor(){this.$intentKind="ArcadeSeeAllGamesPageMoreIntent"}async perform(e,t){return await Wd(t,e.pageToken)}}const dX=FT
class fX{constructor(){this.$intentKind="ArcadeSubscribePageIntent"}async perform(e,t){return await Kd(t,e.url)}}class pX extends YZ{constructor(e,t){super("ArcadeSubscribeBuilder"),t.exportingService(t_,{fetchSubscribePage:async t=>await Kd(e,t.url)})}defaultPlatforms(e){return E(e)}defaultTab(e){return F$}defaultAttributes(e){const t=[w$,iF,hF]
return e.appleSilicon.isSupportEnabled&&t.push(NF),t}pageType(){return iS}pageRoute(e){return[{hostName:"arcadeSubscribePageCustomContext",query:[`${AV}?`,`${JG}?`,"message?","askToBuyId?",`${vV}?`,`${SV}?`]},{hostName:"arcadeSubscribePage",query:[`${AV}?`,`${JG}?`,"message?","askToBuyId?",`${vV}?`,`${SV}?`]},{path:"arcade/subscribe",query:[`${AV}?`,`${JG}?`,"message?","askToBuyId?",`${vV}?`,`${SV}?`]},{path:"{countryCode}/arcade/subscribe",query:[`${AV}?`,`${JG}?`,"message?","askToBuyId?",`${vV}?`,`${SV}?`]}]}generatePageRequest(e,t,n){return pd(e,this.marketingItemContextFromContextString(d(n,JG)),d(n,AV)).attributingTo(t.build())}renderPage(e,t,n,o){const a=o[pX.contextualAppRequirementKey]
let l=null
i(a)&&(l=D(a))
const u=c(t,EI).map(e=>m(e)),f=e.arcade.getMarketingItemFromMarketingItems(u),p=f,h=Ui(e,p,0,!1,!1,RE),g=this.marketingItemContextFromContextString(d(n,JG)),y=e.client.isPhone,v=g===lI,A=new nB(F$,e.bag.arcadeAppAdamId,cN,null,v&&y?"arcadeLaunchRepairCompactSheet":"arcadeSubscribePage",null,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId)
A.titles[OO]=e.loc.string(VL,jL)
const T=d(n,AV),P=function(e,t,n,r){const o=Mn(e,"Upsell",n,r)
return s(r)&&(o.mercuryMetricsData=Lu(0,r)),o}(e,0,p.id,p)
P.offerType=ZI,P.baseFields.upsellType=this.metricsUpsellType(g),P.baseFields.subscriptionSKU=e.bag.arcadeProductId
const I={pageInformation:P,locationTracker:{rootPosition:0,locationStack:[]}},S=Vi(e,{marketingItemData:f},$i(0,p),I,!1)
if(!(S instanceof EU))throw new Error("Only buy actions are supported on the upsell page")
const b=new HH(h,e.loc.string(nm),S,A)
let C
b.askToBuyMessage=d(n,"message"),b.askToBuyId=d(n,"askToBuyId"),Fn(e,b,P)
let k=!1
if(i(l)){b.primaryIcon=Ol(e,l,I,{useCase:3})
const t=q(l,KF),r=td(e,l,I)
r.excludeAttribution=!w(n[SV]),C=At(e,l,T$,g,t,r),b.postSubscribeAction=C,k=!0}if(!w(n[SV])){const e=b.pageMetrics.instructions
if(!r(e))for(const t of e)t.data.includingFields.push(Eb)}let E=[]
const O=o[pX.contextualIconsRequirementKey]
if(i(O)&&(E=x(O)),s(f)&&(E=se(f,V$)),i(E)){const t=[]
for(const n of E)if(n.id===T){if(!k){b.primaryIcon=Ol(e,n,I,{useCase:3})
const t=q(l,KF),r=td(e,n,I)
C=At(e,n,T$,g,t,r),b.postSubscribeAction=C}}else t.push(Ol(e,n,I,{useCase:2}))
b.icons=t}return s(C)&&(S.postSubscribeAction=C),v&&s(T)&&(b.openAppAction=new pU(T)),i(b.icons)||s(b.primaryIcon)||(b.artwork=this.genericArtworkFromData(e,p)),v&&(b.singleIcon=b.primaryIcon),b.subscribedOfferButtonAction=new rU(F$),b}genericArtworkFromData(e,t){if(!s(t))return null
const n=e.client.isPhone,r=function(e,t,n){const r=function(e,t){return Di(e,t)}(e,t)
return p(r,n)}(e,t,n?ly:uy)
if(!i(r))return null
let o=null,a=f(r,lM)
return n?(o="of",a=a-296-1602):(o="og",a=a-344-772),El(e,r,{cropCode:o,allowingTransparency:!0,useCase:7,overrideHeight:a})}metricsUpsellType(e){return s(e)?e:Xx}marketingItemContextFromContextString(e){switch(e){case rg:return lI
case Xw:return eg
default:return e}}}pX.contextualIconsRequirementKey="contextualIconsRequirement",pX.contextualAppRequirementKey="contextualPrimaryIconRequirement"
class hX extends YZ{constructor(e=null){super(e||"AbstractGroupingPageController")}renderPage(e,t,n,r,o,i){return Uh.context(dy,()=>{const a=D(t)
if(!a)return null
if(!te(a,lx))return null
const c=Mn(e,ob,a.id,t),l=mo(e)
c.recoMetricsData=xu(c.recoMetricsData,null,l)
const u={shelves:[],metricsPageInformation:c,metricsLocationTracker:{rootPosition:0,locationStack:[]},pageGenreAdamId:W(a,"id"),pageGenreId:null,hasAuthenticatedUser:s(e.user.dsid),refreshController:vr(t)},d=Pa(a)
return this.renderGroupingPage(e,d,u,n,r,o,i)})}}class wX{constructor(){this.$intentKind="ArcadePageIntent"}async perform(e,t){return await Xd(t,e)}}class gX extends hX{constructor(e,t){super("ArcadePageBuilder"),t.exportingService(t_,{fetchPage:async t=>await Xd(e,t)})}defaultPlatforms(e){return E(e)}defaultAttributes(e){const t=[w$,iF,hF,xL]
return e.appleSilicon.isSupportEnabled&&t.push(NF),t}pageType(){return F$}pageRoute(e){return[{protocol:JU,path:`/${XU}/${nG}`,query:[ZG,`${QG}?`,`${XG}?`,`${KG}?`,LG]},{hostName:SG,path:`/WebObjects/{storePreviewInstance}/wa/${nG}`,query:[ZG,`${QG}?`,`${XG}?`,`${KG}?`,LG,"useReleaseId?"]},{protocol:JU,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}",query:[ZG,`${QG}?`,`${XG}?`,`${KG}?`]},{protocol:JU,path:"{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}",query:[ZG,`${QG}?`,`${XG}?`,`${KG}?`]},{protocol:JU,path:"{apiVersion}/editorial/{countryCode}/groupings/{id}",query:[ZG,`${QG}?`,`${XG}?`,`${KG}?`]}]}generatePageRequest(e,t,n){const r=n[LG],o=w(n[KG]),i=w(n[XG])
if(!a(r))throw new Error(`Unable to map ${t.build()} to a media api url`)
const c=[w$,o$,iF,hF,zM,Rx]
e.appleSilicon.isSupportEnabled&&c.push(NF)
let l=new hH(e).includingAttributes(c).includingMacOSCompatibleIOSAppsWhenSupported()
ar(e)&&(l.enablingFeature(s$),l.includingScopedAttributes(O$,[P$,EN,TN]),l.includingScopedRelationships(O$,[C$])),cr(e)&&(l.enablingFeature(AO),l.includingScopedRelationships(f$,[wx,jM,LN]),l.includingScopedAttributes(f$,[z$,_N,mL]),l.includingMetaKeys(IL,[SL]))
const u=R(e)
if(s(u)&&l.addingQuery(aM,u),o){const t=!0,n=e.featureFlags.isEnabled("arcade_trial_enrolled_state"),r=Pi(e,e.bag.arcadeTrialEnrolledStateRate)
t&&i&&n&&r?l.addingQuery(lx,"trial-enrolled"):l.addingQuery(lx,"subscriber")}else l.addingQuery(lx,"nonsubscriber"),l.includingRelationshipsForUpsell(!1)
l.withIdOfType(r,jN)
const d=t.query.useReleaseId
return _G.has(t.host)&&(null==d?void 0:d.length)>0&&(l=l.addingQuery(dP,d),l.isStorePreviewRequest=!0),l.enablingFeature(Fk),l.enablingFeature(fP),l.withSparseCount(C(e)),l.includingScopedSparseLimit(G_,k(e)),l.attributingTo(t.build())}renderGroupingPage(e,t,n,r,s,a,c){return Uh.context(KM,()=>{const s=w(r[KG]),c=w(r[QG]),l=w(r[XG]),u={}
u[ZG]="true",u[KG]=`${s}`,u[QG]=`${c}`,u[XG]=`${l}`,n.additionalShelfParameters=u,n.isArcadePage=!0,n.metricsPageInformation.isCrossfireReferralCandidate=!0
let d=null,f=null
if(!s){const r=hd(e,t.originalGroupingData)
if(r)d=r.marketingItemData
else if(a){Uh.unexpectedNull(RF,pP,"relationships.upsell")
const e=wd(0,a.get($k))
e&&(d=e.marketingItemData)}if(i(d)&&i(d.attributes)){const t={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,mercuryMetricsData:Lu(0,d)}
f=Fi(e,d,t),i(n)&&o(n.pageTitleEffect)&&0===n.shelves.length&&(n.pageTitleEffect=function(e,t){const n=bi(e,t,!0),r=Si(e,t)
return Mi(0,n.artworkData||r.artworkData,!0)}(e,d)),ju(n.metricsLocationTracker)}}const p=gX.insertUpsellBreakoutShelfIntoParseContextIfNecessary(f,s,n)
Aa(e,t,n)
const h=new fH(n.shelves)
Fn(e,h,n.metricsPageInformation),h.tabTitle=W(t.originalGroupingData,z$)
const g=W(t.originalGroupingData,z$)
e.host.clientIdentifier,p||(h.title=g)
const m=new TB(nF)
m.color=U("primaryText"),m.isFallbackStyle=!0,h.titleEffect=n.pageTitleEffect||m,h.presentationOptions=[]
let y=!1
if(n.shelves.length>0){const e=n.shelves[0].contentType===mD,t=n.shelves[0].contentType===iM,r=n.shelves[0].contentType===Dx
y=e||t||r}if(y&&h.presentationOptions.push(eO),!s&&i(f)){h.subscriptionOfferAction=gX.createSubscribeAction(e,f,{id:null,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,targetType:j$}),h.subscriptionOfferDisplayProperties=new nB(F$,e.bag.arcadeAppAdamId,cN,null,F$,null,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId),h.subscriptionOfferTitle=f.details.title,h.subscriptionOfferSubtitle=f.buttonCallToAction||f.details.description
const t={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},r={marketingItemData:d}
h.subscriptionLockup=wl(e,r,t,cL,cN,XS)}const v={id:"arcade-see-all-games-footer",presentationHints:{},featuredContentId:-1,featuredContentData:null,nativeGroupingShelfId:1,metricsPageInformation:n.metricsPageInformation,metricsLocationTracker:n.metricsLocationTracker,pageGenreId:n.pageGenreId,title:null,shouldFilter:!1,remainingItems:[],isFirstRender:!0,isDeferring:!1,showOrdinals:!1,hasExistingContent:!1,showingPlaceholders:!1,ordinalIndex:1,isSearchLandingPage:n.isSearchLandingPage,isArcadePage:null==n?void 0:n.isArcadePage}
if(this.insertUnifiedMessageShelves(e,h),h.shelves.length>0){const t=gX.groupingArcadeFooterShelfController.createShelf(e,null,n,v,null)
h.shelves.push(t)}if(0===h.shelves.length)throw new Error(`Missing content for Arcade grouping ${JSON.stringify(r)}`)
return h.autoUpsellAction=ld(e,Xx,null,null),Qd(h),h})}static insertUpsellBreakoutShelfIntoParseContextIfNecessary(e,t,n){return Uh.context("insertShelfForUpsellBreakoutIfNecessary",()=>{if(o(e))return t||Uh.unexpectedNull(LF,pP,iM),!1
const r=new rH(iM)
return r.items=[e],r.presentationHints={isFirstShelf:!0},n.shelves.push(r),!0})}static createSubscribeAction(e,t,n){if(o(t))return null
{const r=ld(e,dI,null,null,n)
return r.title=t.offerButtonAction.title,r}}createTermsAndConditionsShelf(e){return!r(e.bag.termsAndConditionsURL)&&e.client.deviceType,null}supportsDataAugmenting(){return!0}additionalDataKeysNeededForData(e,t,n){if(r(n))return null
const o=D(t),s=w(n.parameters[KG]),i=hd(e,o)
return!s&&r(i)?new Set([$k]):null}fetchAdditionalDataForKey(e,t){return Uh.context("fetchAdditionalDataForKey",async()=>{let n
return t===$k&&(n=pd(e,cL),Uh.unexpectedNull(LF,WN,"upsellRecovery.marketingItem")),r(n)?null:await Mr(e,n).catch(()=>null)})}insertUnifiedMessageShelves(e,t){t.shelves.length<=0||(t.shelves.splice(1,0,ba(0,"arcadePageHeader")),t.shelves.splice(6,0,ba(0,"arcadePageMid")),t.shelves.push(ba(0,"arcadePageFooter")))}}gX.groupingArcadeFooterShelfController=new yZ
const mX={width:1680,height:3636,url:"https://is3-ssl.mzstatic.com/image/thumb/Features123/v4/9a/d4/48/9ad448b5-ddbb-f295-fae3-2a2e69bf5604/source/{w}x{h}{c}.{f}",bgColor:tm,textColor1:"f7c981",textColor2:"f8a710",textColor3:"c6a067",textColor4:"c6850d"},yX={width:4320,height:3240,url:"https://is3-ssl.mzstatic.com/image/thumb/Features124/v4/57/71/7f/57717f8b-c486-4faf-7558-a4f88186855d/source/{w}x{h}{c}.{f}",bgColor:tm,textColor1:"fdc97a",textColor2:"f73a03",textColor3:"caa161",textColor4:"c52e02"}
class vX{constructor(){this.$intentKind="ArcadeWelcomePageIntent"}async perform(e,t){return await tf(t,e.url)}}class AX{constructor(){this.$intentKind="ArcadeUpsellGridIntent"}async perform(e,t){return await nf(t,e.contentDictionary)}}class TX{constructor(){this.$intentKind="ArcadeSubscriptionDecorationIntent"}async perform(e,t){return await rf(t,e.json)}}class PX{constructor(){this.$intentKind="PersonalizedOfferContextIntent"}async perform(e,t){return await of(t,e.offerToken)}}class IX{constructor(){this.$intentKind="PurchaseDecorationIntent"}async perform(e,t){return sf(t,e.json)}}class SX{constructor(){this.$intentKind="PurchasesDecorationIntent"}async perform(e,t){return e.json.map(e=>sf(t,e))}}class bX{constructor(){this.$intentKind="IconArtworkIntent"}async perform(e,t){return await af(t,e.adamIds)}}let CX=!1,kX=!1,EX=!1,OX=null
const RX=[q$,nk]
class DX extends ZZ{}const _X=[RM,ON,x$,b_,lD],LX=[RM,ON,yS,x$,S_,GE,aD,cD],xX=[RM,vS,ON,S_]
class MX{}class NX extends YZ{constructor(){super("EditorialPageController")}defaultPlatforms(e){return E(e)}prepareRequest(e,t,n,r){super.prepareRequest(e,t,n,r)
const o=n.pathname===`/${IG}/${QU}`
t.includingScopedRelationships("editorial-shelves",[V$]).includingScopedRelationships(MN,[WS]),o?t.includingAssociateKeys(q$,[QM]).includingAssociateKeys(M$,[QM]):t.includingRelationships([rD]).withSparseCount(NX.pageSparseCount).withSparseLimit(NX.pageSparseLimit).includingAssociateKeys(IP,[QM]),Af(e,t)
const i=n.query[JG]||R(e)
s(i)&&t.addingQuery(aM,i)}generatePageRequest(e,t,n){let r
r=t.host===EG?e.bag.safariExtensionsEditorialPageId:t.query[LG]||n[LG]
const s=n[BV]
if(o(r)&&o(s))throw new Error(`Unable to map ${t.build()} to a media api url`)
const i=new hH(e).forType(MN)
return(null==r?void 0:r.length)>0&&i.withIdOfType(r,MN),(null==s?void 0:s.length)>0&&i.addingQuery(BV,s),i.attributingTo(t.build())}pageRoute(e){return[{protocol:YU,path:`${IG}`,query:[`${BV}`,`${ZG}?`]},{protocol:YU,path:`${IG}`,query:[`${LG}`,`${ZG}?`]},{protocol:JU,path:"/{countryCode}/editorial-page/id{id}"},{protocol:JU,path:"/editorial-page/id{id}"},{protocol:JU,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/editorial-pages/{id}",query:[`${BV}?`,`${ZG}?`]},{path:"{apiVersion}/{realm}/editorial/{countryCode}/editorial-pages/{id}",query:[`${BV}?`,`${ZG}?`]},{path:"{apiVersion}/editorial/{countryCode}/editorial-pages/{id}",query:[`${BV}?`,`${ZG}?`]},{protocol:JU,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/editorial-pages/{id}",query:[`${BV}?`,`${ZG}?`]},{path:"{apiVersion}/{realm}/editorial/editorial-pages/{id}",query:[`${BV}?`,`${ZG}?`]},{path:"{apiVersion}/editorial/editorial-pages/{id}",query:[`${BV}?`,`${ZG}?`]}]}pageType(){return $$}renderPage(e,t,n,a,c,l){return Uh.context("renderEditorialPage",()=>{var a
const c=D(t),l=se(c,rD)
if(!i(l))return null
const u=Mn(e,"Editorial",c.id,t),d={rootPosition:0,locationStack:[]},f=mo(e)
u.recoMetricsData=xu(u.recoMetricsData,null,f)
const p=vr(t),h=w(n,ZG),g=w(n[KG]),m=[]
let y=null,v=null
s(c.attributes)&&(y={id:c.id,type:c.type,attributes:c.attributes,relationships:c.relationships})
for(const t of l){const n=m.length,r=zf(e,y.id,t,h,n,u,d),s=Wf(e,y,r)
if(!o(s)){if(0===m.length){const e=s.presentationHints
s.presentationHints={...e,isFirstShelf:!0}}h&&!g&&s.contentType===iM&&(v=qf(e,r)),m.push(s)}}const A=h?new fH(m):new cH(m)
A.title=W(c,LM),A.shareAction=this.shareSheetActionFromData(e,c),A.pageRefreshPolicy=Tr(e,p),h&&s(v)&&(A.subscriptionLockup=v),h&&(u.isCrossfireReferralCandidate=!0),Fn(e,A,u)
const T=(null===(a=m[m.length-1])||void 0===a?void 0:a.contentType)===eb
if(e.client.deviceType!==W$&&"tv"!==e.client.deviceType&&!T){const t=e.bag.termsAndConditionsURL
if(!r(t)){const n=Sa(e,t)
m.push(n)}}if(m.length>0){const e=m[0].contentType===mD,t=m[0].contentType===iM,n=m[0].contentType===Dx;(e||t||n)&&A.presentationOptions.push(eO)}return Qd(A),A})}shelfRoute(e){return[{protocol:YU,path:`/${IG}/${QU}/`,query:[`${bV}`]}]}generateShelfRequest(e,t,n){const r=n[bV],o=JSON.parse(decodeURIComponent(r)),s=i(o.remainingItems),a=!s&&(0,Gh.isSome)(o.recommendationsHref)&&o.recommendationsHref.length>0
if(s){const t=o.remainingItems,n=new hH(e,t,!0,[qS])
return Ue(e,n,t),n}if(a){const t=new hH(e,o.recommendationsHref)
return ar(e)&&(t.enablingFeature(s$),t.includingMetaKeys(G_,[OD,vO]),t.includingScopedAttributes(O$,[P$,EN,TN]),t.includingScopedRelationships(O$,[C$])),t}return null}renderShelf(e,t,n){var s
const a=n[bV],c=JSON.parse(decodeURIComponent(a)),l=i(c.remainingItems),u=!l&&(null===(s=c.recommendationsHref)||void 0===s?void 0:s.length)>0
if(c.isFirstRender=!1,l)c.remainingItems=this.buildHydratedShelfItems(e,c.remainingItems,t)
else if(u){c.data={...c.data,...D(t)}
const n=se(c.data,V$)
c.remainingItems=i(n)?n:[],Yf(e,c.data,c)}const d=Wf(e,void 0,c)
return o(d)&&!c.hasExistingContent?this.makeHiddenShelf():(function(e,t,n){if(!o(n.originalPlaceholderShelfImpressionMetrics))if(r(t.impressionMetrics))t.impressionMetrics=n.originalPlaceholderShelfImpressionMetrics
else for(const e in n.originalPlaceholderShelfImpressionMetrics.fields)Object.prototype.hasOwnProperty.call(n.originalPlaceholderShelfImpressionMetrics.fields,e)&&(t.impressionMetrics.fields[e]=n.originalPlaceholderShelfImpressionMetrics.fields[e])}(0,d,c),!c.hasExistingContent&&o(d.items)&&(d.isHidden=!0),d)}buildHydratedShelfItems(e,t,n){var r,o,s,i
const a=new Map,c=_(n)
for(const t of c)a[this.dataMapKey(e,t.type,t.id)]=t
const l=[]
for(const n of t){const t=a[this.dataMapKey(e,n.type,n.id)]
if((0,Gh.isSome)(t)){const c=Et(0,n)
if((0,Gh.isSome)(c)){const n=a[this.dataMapKey(e,QM,c.id)]
if((0,Gh.isSome)(n)){const e=null!==(r=t.meta)&&void 0!==r?r:{},a=null!==(o=m(e.associations))&&void 0!==o?o:{},c=null!==(s=m(a[QM]))&&void 0!==s?s:{},l=null!==(i=m(n))&&void 0!==i?i:{}
c.data=[l],a[QM]=c,e.associations=a,t.meta=e}}l.push(t)}}return l}dataMapKey(e,t,n){return`${t}_${n}`}makeHiddenShelf(){const e=new rH(L_)
return e.isHidden=!0,e}shareSheetActionFromData(e,t){var n
const r=W(t,b$),i=function(e,t,n,r,s,i){return Uh.context("shareSheetDataForGenericPage",()=>{if(o(n))return null
const e=new pB(t,r,i)
return new hB(e,n,null)})}(0,W(t,LM),r,e.loc.string("SHARE_EDITORIAL_PAGE_SUBTITLE"),0,null===(n=Uc(e,t,Sw.EditorialPage))||void 0===n?void 0:n.artwork)
if(!s(i))return null
const a=function(e,t){const n=[]
if((null==t?void 0:t.length)>0){const r=As(e,t)
s&&n.push(r)}return n}(e,r)
return new bU(i,a)}}NX.pageSparseCount=5,NX.pageSparseLimit=12
const FX="com.apple.Arcade.ArcadeHardware1",$X="com.apple.Arcade.TrialEligible1",BX=[FX,$X]
class UX{constructor(){this.$intentKind="EngagementEventIntent"}async perform(e,t){return await Kf(t,e)}}class GX{constructor(){this.$intentKind="BadgingEventIntent"}async perform(e,t){return await Qf(t,e)}}class VX{constructor(){this.$intentKind="InAppPurchaseInstallPageIntent"}async perform(e,t){return await Xf(t,e.url)}}class jX{constructor(e,t,n,r){this.name=e,this.url=t,this.artwork=n,this.roomUber=r}}class HX extends X${constructor(e,t){super(),this.apps=e,this.appsToAlwaysShow=t}}class WX{constructor(){this.$intentKind="MSOProviderDataIntent"}async perform(e,t){return await ep(t,e.providerAdamId)}}class qX{constructor(){this.$intentKind="MSOPageIntent"}async perform(e,t){return await tp(t,e)}}class zX{constructor(){this.$intentKind="CancelPreorderIntent"}async perform(e,t){return await sp(t,e)}}class YX{constructor(){this.$intentKind="ShelfBasedProductPageIntent"}async perform(e,t){return await ip(t,e)}}class JX extends YZ{constructor(e,t){super(um),t.exportingService(CP,{fetchPage:async t=>await async function(e,t){if(t.preloading&&Re(e))return await Promise.reject(new Error(kP))
0!==Nr(e,new nj(t.url)).length&&e.network.fetch({url:e.bag.redirectUrlEndpoint,method:EM,headers:{"Content-Type":v_},body:`url=${encodeURIComponent(t.url)}`})
const n=l(new nj(t.url).query[pV])
if(t.preloading){const e=new nj(t.url)
e.param($V,qF),t.url=e.build()}const r=JX.generateProductPageOptions(e,void 0,new nj(t.url))
let o=e.required(gQ).fetchPage(e,t.url,AW)
if(!o){const n=new hH(e,t.url)
o=Mr(e,n).then(n=>Fc(e,n,r,{},null,t.preloading))}return await o.then(r=>(e.host.clientIdentifier===NB?(n&&(r.shareAction=null,r.titleOfferDisplayProperties=null,r.expandedOfferDetails=null,r.banner=null,r.offerDisplayProperties=null),r&&nD in r&&Vn(0,r)):s(t.referrerData)&&r&&nD in r&&Vn(0,r),r))}(e,t),fetchShelfBasedPage:async t=>await ip(e,t)})}defaultPlatforms(e){return E(e)}pageType(){return lF}defaultTab(e){return JX.representsArcadeApp(e)?F$:super.defaultTab(e)}defaultAction(e,t,n,r){if(t instanceof nU)return t
const o=super.defaultAction(e,t,n,r)
if(!(t instanceof AW||t instanceof BW))return o
const s=1===t.appPlatforms.length&&"tv"===t.appPlatforms[0]
if(n[YG]!==uQ||s){if(n[YG]!==dQ||s)return o
{const e=t.shelfMapping[E$]||t.shelfMapping[xF]
let n=null
return e&&e.seeAllAction&&(n=e.seeAllAction,n.animationBehavior=wF),o.animationBehavior=wF,new iU([o,n])}}{const n=JX.representsBundle(t)
let r=null,s=null
t instanceof AW?(r=t.adamId,s=t.icon):t instanceof BW&&(r=t.lockup.adamId,s=t.lockup.icon)
const i=Gs(e,r,n,s)
return o.animationBehavior=wF,new iU([o,i])}}static generateProductPageOptions(e,t,n){const r={clientIdentifierOverride:n.query[yV]},o=null==t?void 0:t[jG]
if(o){const e=t[qV]===qF
r.spotlightSection=ei(e),r.spotlightInAppProductIdentifier=o}const i=n.query[tQ]
i&&(r.iAdClickFields=JSON.parse(i))
const a=n.query[nQ]
a&&(r.iAdLineItem=a)
const c=n.query[rQ];(0,Yh.isSome)(c)&&(r.iAdDismissAdActionMetrics=JSON.parse(c))
const l=n.query.externalDeepLinkUrl
s(l)&&(r.externalDeepLinkUrl=l)
const u=null==t?void 0:t[VV]
return(0,Yh.isSome)(u)&&(r.webBrowser="1"===u),r}pageRoute(e){return kd()}generatePageRequest(e,t,n){var o
const s=n[GG],i=n[xG],a=n[MG],c="1"===n[pV]
let l=null
if(s){const t=Je(e).adamIdFromSystemBundleId(s)
l=(0,Yh.isSome)(t)?vi(e,t,!1,void 0,!1,c):function(e,t,n,r){const o=lZ
e.bag.enablePrivacyNutritionLabels&&!fi(e,t)&&o.push(T_),e.appleSilicon.isSupportEnabled&&o.push(NF)
const s=new hH(e).forType(q$).withFilter(aF,t).includingAdditionalPlatforms(E(e)).includingRelationships([IF,px,oD,E$,x$,NE,sD,FE]).includingAttributes(o).addingRelationshipLimit(E$,O(e)).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes(De(e))
return(0,Gh.isSome)(n)&&s.addingQuery(MG,n),dn(e,u$)&&s.enablingFeature(BE),r&&s.enablingFeature(mS),cr(e)?s.includingViews([$E]):s.includingRelationships([UE]),s}(e,s,a,c)}else if(n[YG]===EP&&i){const r=(null===(o=t.pathname)||void 0===o?void 0:o.length)>0&&-1!==t.pathname.indexOf(OP)
l=vi(e,i,w(n,fV),a,r,c)}else l=gi(e,t,c)
if(r(l))throw new Error(`Unable to map ${t.build()} to a media api url`)
return l}generateAdditionalPageRequirements(e,t,n){const r=super.generateAdditionalPageRequirements(e,t,n),o=n[LV]
if((null==o?void 0:o.length)>0&&ar(e)){const t=new hH(e).withIdOfType(o,O$).includingAdditionalPlatforms(E(e)).includingScopedAttributes(O$,[P$,EN,TN]).includingScopedAvailableIn(O$,[gm,gS])
r[fQ]=new WZ(Mr(e,t).catch(()=>null),!1)}return r}renderPage(e,t,n,r,o,s){return Uh.context(KM,()=>{const o=Mn(e,xx,"",t),a=JX.generateProductPageOptions(e,n,new nj(o.pageUrl)),c=D(t),l=JX.alternativeAppForPlatform(e,c,ke(e))
if(null!==l)return l
const u="1"===n[pV]
i(s)&&WB.shared.setReferralDataForProduct(c.id,s)
const d=Fc(e,t,a,r,s,w(n[$V]),u),f=e.fetchTimingMetricsBuilder
return(0,Yh.isSome)(f)&&f.decorate(d),d})}shelfRoute(e){return[{protocol:YU,path:`/${cG}/${QU}/{token}`}]}generateShelfRequest(e,t,n){return Ed(e,0,n)}renderShelf(e,t,n){return Od(e,t,n)}shelfRequiresAdditionalModification(e,t){return!0}async performAdditionalShelfModifications(e,t,n){return await new Promise(r=>{const o=n[$N],s=JSON.parse(o),i=t.items
if(s.contentType===bL&&i){const n=[],o=[]
for(const e of i){const t=e.productIdentifier
ei(e.isSubscription).shelfId===s.inAppShelfId&&(n.push(t),e.isVisibleByDefault&&o.push(t))}e.clientOrdering.orderedVisibleIAPs(s.appBundleId,n,o,s.spotlightInAppProductIdentifier).then(e=>{t.items=JX.filteredInAppLockupsUsingOrdering(i,e),r(t)})}else new Set([zN,_x]).has(t.contentType)&&0===t.items.length&&(t.isHidden=!0),r(t)})}handleShelfError(e,t,n,r){const o=r[$N],s=JSON.parse(o)
if(s&&!s.hasExistingContent){const e=new rH(s.contentType)
e.isHidden=!0,t(e)}else super.handleShelfError(e,t,n,r)}static alternativeAppForPlatform(e,t,n){if(!de(t,n)){const r=se(t,FE)
if(i(r))for(const t of r){const r=Pe(e,t,b$)
if(de(t,n)&&(null==r?void 0:r.length)>0)return new nU(D$,r)}}return null}static representsBundle(e){return!!(e.pageMetrics&&e.pageMetrics.pageFields&&fN in e.pageMetrics.pageFields)&&e.pageMetrics.pageFields[fN]===Nb}static representsArcadeApp(e){return!!(e.pageMetrics&&e.pageMetrics.pageFields&&fN in e.pageMetrics.pageFields)&&e.pageMetrics.pageFields[z_]===FF}static filteredInAppLockupsUsingOrdering(e,t){const n={}
for(const t of e)n[t.productIdentifier]=t
const r=[]
for(const e of t){const t=n[e]
if(t){const e=v(t)
r.push(e)}}return r}}class ZX extends zZ{handlePage(e,t,n,r,o,s,i){this.renderPage(e,t,n)}renderPage(e,t,n){throw new Error(`renderPage is not supported on: ${this.builderClass}`)}handlePageError(e,t,n,r,o){n(e)}handleShelf(e,t,n,r,o,s){this.renderShelf(e,t,n).then(o,e=>{this.handleShelfError(e,o,s,n)})}async renderShelf(e,t,n){throw new Error(`renderShelf is not supported on: ${this.builderClass}`)}handleShelfError(e,t,n,r){n(e)}}const KX="todayTabPersonalization",QX="OnDeviceRecommendationsTodayShelfController"
class XX{constructor(e){this.recommendations=e}storyData(e){var t
const n=this.recommendationForUseCase(e),r=null==n?void 0:n.candidate(M$)
if(!(0,Yh.isNothing)(n)&&!(0,Yh.isNothing)(r))return null===(t=null==n?void 0:n.dataContainer)||void 0===t?void 0:t.data.find(e=>e.id===r.id)}storyGroupData(e){var t,n
const r=this.recommendationForUseCase(e),o=null==r?void 0:r.candidate(hN)
if((0,Yh.isNothing)(r)||(0,Yh.isNothing)(o))return
const s=null===(t=null==r?void 0:r.dataContainer)||void 0===t?void 0:t.data.find(e=>e.id===(null==o?void 0:o.id)),i=null===(n=null==r?void 0:r.dataContainer)||void 0===n?void 0:n.data.filter(e=>o.candidateIDs.includes(e.id))
return(0,Yh.isNothing)(s)||(0,Yh.isNothing)(i)?void 0:(s.meta={associations:{recommendations:{data:i}}},s)}recommendationForUseCase(e){return this.recommendations.find(t=>t.useCase===e)}}class e0{constructor(e,t,n,r){this.useCase=e,this.candidates=t,this.recoMetrics=n,this.dataContainer=r}candidate(e){return this.candidates.find(t=>t.type===e)}}class t0{constructor(e,t,n,r){this.id=e,this.type=t,this.candidateIDs=n,this.data=r}}!function(e){e[e.Landing=0]="Landing",e[e.Results=1]="Results",e[e.ChartsAndCategories=2]="ChartsAndCategories",e[e.Focus=3]="Focus"}(Cw||(Cw={}))
class n0{constructor(){this.$intentKind="SearchChartsAndCategoriesPageIntent"}async perform(e,t){return await yp(e,t)}}class r0 extends eB{constructor(e,t,n,r){super(),this.value=e,this.isSelected=t,this.displayName=n,this.clickAction=r}}class o0 extends X${constructor(e,t,n){super(),this.searchTerm=e,this.selectedTokens=t,this.optimizationTerm=n}}class s0 extends tU{constructor(e,t){super("GuidedSearchTokenToggleAction"),this.targetToken=e,this.searchOrigin=t}}class i0 extends tU{constructor(e,t){super("SearchEntityChangeAction"),this.entity=e,this.searchOrigin=t}}!function(e){e[e.EmptyResults=0]="EmptyResults",e[e.Picker=1]="Picker",e[e.NonNative=2]="NonNative"}(kw||(kw={}))
class a0{constructor(){this.$intentKind="SearchHintsIntent"}async perform(e,t){return await Up(t,e.term)}}let c0=null
const l0={identifer:Zh.SearchLandingPageV2,treatments:[0,1]}
class u0{constructor(e,t,n,r){this.title=e,this.maxItems=t,this.shelfDisplayStyle=n,this.itemDisplayStyle=r}}class d0{constructor(){this.$intentKind="SearchResultsPageIntent"}async perform(e,t){return await Xp(t,e.requestDescriptor)}}class f0{constructor(){this.$intentKind="SearchResultsPageMoreIntent"}async perform(e,t){return await eh(t,e.pageToken)}}class p0{constructor(){this.$intentKind="ArticlePageIntent"}async perform(e,t){return await t.required(gQ).fetchPage(t,e.url,_Z)}}Ew=e(1415),function(e){e.OnboardingCards="onboardingCards",e.Ads="ads",e.ODP="ODP"}(Ow||(Ow={}))
const h0=[w$,o$,OF,Ck,kk,Ek,Px,hF,TL]
class w0 extends zZ{constructor(){super("TodayCardPreviewBuilder")}pageType(){return L$}pageRoute(e){return[{protocol:JU,path:`/${wG}`,query:[`${xG}?`,`${$G}?`,`${BG}?`,"preview?",`${GV}?`,`${FG}?`]}]}handlePage(e,t,n,r,s,a,c){Uh.context(`${this.builderClass}.pageHandler`,()=>{var r
const s=new nU(this.pageType())
if(s.pageUrl=t.build(),!w(n[FG]))return void a(s)
const l=null===(r=n[GV])||void 0===r?void 0:r.split(","),u=n[xG]
if(i(l)&&o(u)){const t={}
for(const e of l){const n=e.split(":")[0],r=e.split(":")[1]
t[n]=r}const n=i(t)?JSON.stringify(t):void 0
oh(e,{experimentIdHeader:n,url:"",onboardingCardIds:[]}).then(e=>{s.pageData=e,a(s)}).catch(e=>{c(e)})}else{const n=sh(e,this.createFlattenedTodayItemsFromUrl(t),w0.emptyTodayPageResponse,null)
s.pageData=n,a(s)}})}createFlattenedTodayItemsFromUrl(e){const t=[],n=d(e.query[xG]),r=(0,Yh.isSome)(e.query[BG])&&w(e.query[BG]),o=(0,Yh.isSome)(e.query[$G])&&w(e.query[$G])
if(!i(n))return t
const s=n.match(/([a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)?:\[[^\]]+\]|[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)?)/g)
let a=r,c=0
for(const e of s){const n=e.split(":")[0],r=w0.storyGroupIdRegex.exec(e)
if((0,Yh.isSome)(r)){const e=r[1].split(",").map(e=>this.createUnhydratedEditorialItemFromId(e,o))
t.push({type:Pw.EditorialItemGroup,data:{id:n,type:hN,relationships:{},meta:{associations:{recommendations:{data:e}}}},isDataHydrated:!1,isFirstItemInModule:a,moduleMetadata:{...w0.previewModuleData},containedAdSlots:Array.from({length:e.length},(e,t)=>t+c)}),a=!1,c+=e.length}else t.push({type:Pw.EditorialItem,data:this.createUnhydratedEditorialItemFromId(e,o),isDataHydrated:!1,isFirstItemInModule:a,moduleMetadata:{...w0.previewModuleData},containedAdSlots:[c]}),a=!1,c+=1}return t}createUnhydratedEditorialItemFromId(e,t){const n=e.split(":")[0],r=e.split(":")[1],o=(0,Yh.isSome)(r)?{"editorial-cards":{data:[{id:`${n}-${r}`,type:QM}]}}:{}
return{id:n,type:M$,relationships:{},meta:{personalizationData:{isOfTheDay:t},associations:o}}}}w0.storyGroupIdRegex=/\[(.*)\]/,w0.previewModuleData={label:"TodayForApps",title:"Today Preview",meta:{},isTodayForAppsModule:!1},w0.emptyTodayPageResponse={results:{data:[]}}
class g0{constructor(){this.$intentKind="TodayPageIntent"}async perform(e,t){return await oh(t,{url:e.url,onboardingCardIds:e.onboardingCardIds})}}class m0{constructor(){this.$intentKind="TodayPageMoreIntent"}async perform(e,t){const n=e.pageToken
return lh(t,n.pageInformation),await ah(t,n),ih(t,n)}}class y0 extends X${constructor(e,t,n,r){super(),this.shortName=e,this.longName=t,this.chart=n,this.shelves=r,this.nextPage=null,this.pageMetrics=new QB,this.pageRenderMetrics={}}}class v0 extends qY{constructor(e,t,n){super(e.name,e.genreId,e.artwork,e.ageBandId,n),this.shortName=this.name,this.longName=this.name,this.url=t}}class A0 extends X${constructor(e,t,n,r,o,s){super(),this.genreId=e,this.ageBandId=t,this.title=n,this.segments=r,this.categoriesButtonTitle=o,this.categories=s,this.initialSegmentIndex=0}}class T0{constructor(){this.$intentKind="TopChartsPageIntent"}async perform(e,t){return await uh(t,e.url)}}class P0{constructor(){this.$intentKind="TopChartsPageMoreIntent"}async perform(e,t){return await dh(t,e.pageToken)}}class I0 extends X${constructor(e,t,n,r){super(),this.collections=e,this.refreshDate=t,this.originalResponseDate=n,this.originalResponseHash=r}}class S0 extends X${constructor(e,t){super(),this.cards=e,this.displayDate=t}}class b0 extends X${constructor(e,t,n,r,o,s,i,a,c,l,u,d){super(),this.storyId=e,this.heading=t,this.title=n,this.backgroundColor=r,this.isDark=o,this.iconArtwork=s,this.url=i,this.eventBadgeKind=l,this.editorialArtwork=c,this.isVideoArtwork=a,this.eventStartDate=u,this.eventEndDate=d}}class C0 extends class{make(e){const t=new hH(e).forType(this.typeForUseCase()).withIdsOfType(this.ids(),this.typeForUseCase()).addingContext(this.context()).includingAttributes(this.attributesForUseCase()).asPartialResponseLimitedToFields(this.fieldsForRequest()).withSparseCount(this.sparseCountForUseCase()).withSparseLimit(this.sparseLimitForUseCase()).enablingFeature(this.enablingFeature(e)).usingCustomAttributes(this.shouldUseCustomAttributes(e)),n=this.addingQuery()
if(null!==n)for(const e of n)t.addingQuery(e.key,e.value)
return t}}{context(){return Mb}typeForUseCase(){return L$}attributesForUseCase(){return[w$,o$,OF]}sparseCountForUseCase(){return null}sparseLimitForUseCase(){return null}addingQuery(){return null}ids(){return[]}fieldsForRequest(){return[ck,I$,UI,ZD,SS,vF,Uy,w$,Dy,qN,o$,BI,"id",AL,PN,ZF,m$,OF,z$,bS,$I]}enablingFeature(e){return ar(e)?s$:null}shouldUseCustomAttributes(e){return De(e)}}class k0{constructor(){this.$intentKind="WidgetIntent"}async perform(e,t){const n=e.widgetKind
if(n===ZT)return await bh(t,e)
throw Error(`Invalid widgetKind of '${n}'`)}}Rw=e(5881)
class E0 extends Mh.LegacyRuntime{constructor(e,t){super(e,t,{})}exportingService(e,t){this.wrapServiceInValidation(t)
const n={...this.serviceWithName(e)||{},...t}
return super.exportingService(e,n)}exportingServiceName(e,t,n){const r={}
r[t]=n,this.exportingService(e,r)}wrapServiceInValidation(e){for(const t of Object.keys(e)){const n=e[t]
n instanceof Function&&(e[t]=function(...e){const t=n.apply(this,e)
return t instanceof Promise?t.then(e=>(Uh.recordValidationIncidents(e),e)):(Uh.recordValidationIncidents(t),t)})}}}!function(e){e[e.Control=0]="Control",e[e.LayoutA=1]="LayoutA",e[e.LayoutB=2]="LayoutB"}(Dw||(Dw={}))
const O0={identifer:Zh.ArcadeDownloadPackOnboarding,treatments:[Dw.Control,Dw.LayoutA,Dw.LayoutB]}
class R0{constructor(){this.$intentKind="ArcadeDownloadPackCategoriesPageIntent",this.maxNumberOfCategoriesToChoose=4}async perform(e,t){return await this.fetchDownloadPackPage(t,ee(e.subscriptionStatus))}async fetchDownloadPackPage(e,t){const n=new RU
n.title=e.loc.string("Arcade.DownloadPack.CategorySelection.PrimaryButtonTitle")
const r=new RU
r.title=e.loc.string("Arcade.DownloadPack.CategorySelection.SecondaryButtonTitle")
const o=await this.fetchCategories(e),s=new XH(e.loc.string(t===fI?"Arcade.DownloadPack.CategorySelection.Title.CurrentUser":"Arcade.DownloadPack.CategorySelection.Title"),o,this.maxNumberOfCategoriesToChoose,"Arcade.DownloadPack.CategorySelection.MaxCount","Arcade.DownloadPack.CategorySelection.Selected","Arcade.DownloadPack.CategorySelection.Selected.TotalCount",n,r),i=new sQ({pageId:"SelectCategories",pageType:aP}),a={rootPosition:0,locationStack:[]}
return e.bag.arcadeDownloadPacksMetricsEventsEnabled&&(n.actionMetrics.addMetricsData(Zu(e,"Ok",j$,{actionType:A$})),r.actionMetrics.addMetricsData(Zu(e,"Skip",j$,{actionType:jI})),o.forEach(t=>{t.selectActionMetrics.addMetricsData(Zu(e,t.id,$L,{actionType:CA})),t.deselectActionMetrics.addMetricsData(Zu(e,t.id,$L,{actionType:"remove"}))}),Fn(e,s,i)),e.bag.arcadeDownloadPacksImpressionEventsEnabled&&o.forEach(e=>{nn(0,e,{id:e.id,idType:HN,kind:j$,locationTracker:a,pageInformation:i,softwareType:FF,targetType:$L,title:e.title}),ju(a)}),s}async fetchCategories(e){const t=e.bag.arcadeDownloadPackCategoriesCollectionId,n=new hH(e).withIdOfType(t,U_).addingQuery(cP,BT).includingAdditionalPlatforms(E(e))
return await Mr(e,n).then(t=>this.categoriesFromResponse(e,t))}categoriesFromResponse(e,t){return Uh.context("categoriesFromResponse",()=>{const n=_(t),r=[]
for(const t of n){const n=t.id,o=pu(e,t,z$),s=p(Ae(e,t,w$),Cy)
if((0,Yh.isNothing)(s))continue
const i=El(e,s,{useCase:20}),a=Te(e,t,"editorialBackground.stops").map(e=>N(d(e,nF))).filter(e=>(0,Yh.isSome)(e))
if(0===a.length)continue
const c=a[0],l=1===a.length?a[0]:a[1],u=new QH(n,o,i,c,l)
r.push(u)}return r.sort((t,n)=>{try{return t.title.localeCompare(n.title,e.loc.safeIdentifier,{usage:oF})}catch(e){return 0}})})}}class D0{constructor(){this.$intentKind="ArcadeDownloadPackSuggestionsPageIntent",this.maxGamesCount=4}async perform(e,t){const n={rootPosition:0,locationStack:[]},r=new sQ({pageId:"DownloadStarterPack",pageType:aP})
return await this.fetchSuggestedGames(t,e.categories,this.maxGamesCount,r,n).then(o=>this.createSuggestionsPage(o,t,ee(e.subscriptionStatus),r,n))}async fetchSuggestedGames(e,t,n,r,o){const s=new hH(e).forType(OE).addingQuery("include[personal-recommendations]",V$).addingQuery("associate[apps]",eN).addingQuery("limit[personal-recommendations:contents]",`${n}`).addingQuery("omit[resource:apps]","autos").addingQuery("sparseLimit[apps:association.category]","0").addingQuery("sparseLimit[personal-recommendations:contents]",`${n}`).addingQuery(CF,"arcade-onboarding").includingAdditionalPlatforms(E(e)),i=this.fetchOptions(t,M$)
return await Mr(e,s,i).then(n=>this.suggestionFromResponse(e,t,n,r,o))}suggestionFromResponse(e,t,n,r,o){return Uh.context("suggestionFromResponse",()=>{const s={}
for(const e of t)s[e.id]=e
const i=_(ne(D(n),V$)),a=[]
for(const t of i){const n=c(t.meta,"associations.category.data")[0].id,i=al(e,t,{offerStyle:SM,offerEnvironment:R$,metricsOptions:{pageInformation:r,locationTracker:o,badges:{categoryId:n}},metricsClickOptions:{id:t.id,pageInformation:r,locationTracker:o,badges:{categoryId:n}},artworkUseCase:1,isSubtitleHidden:!0});(0,Yh.isNothing)(i)||(i.heading=s[n].title,ju(o),Cl(i,e),a.push(new eW(i,n)))}return a})}createSuggestionsPage(e,t,n,r,o){const s=e.map(e=>this.offerAction(e.lockup.buttonAction)).filter(e=>(0,Yh.isSome)(e)),i=new hU(s)
i.title=function(e){switch(Ch(e)){case Dw.Control:return e.loc.string(FP)
case Dw.LayoutA:case Dw.LayoutB:return e.loc.string("Arcade.DownloadPack.Suggestions.DownloadAllButtonTitle")
default:return e.loc.string(FP)}}(t)
const a=s.map(e=>e.adamId),c=new RU
c.title=function(e){switch(Ch(e)){case Dw.Control:return e.loc.string(Jk)
case Dw.LayoutA:case Dw.LayoutB:return e.loc.string("Arcade.DownloadPack.Suggestions.NotNowButtonTitle")
default:return e.loc.string(Jk)}}(t)
const l=new tW(t.loc.string(n===lL?"Arcade.DownloadPack.Suggestions.Title.NewUser":"Arcade.DownloadPack.Suggestions.Title"),e,i,function(e){switch(Ch(e)){case Dw.Control:return Yk
case Dw.LayoutA:return"withinLockups"
case Dw.LayoutB:default:return Yk}}(t),c,function(e){switch(Ch(e)){case Dw.Control:case Dw.LayoutA:return NP
case Dw.LayoutB:return"getAll"
default:return NP}}(t),function(e){switch(Ch(e)){case Dw.Control:return null
case Dw.LayoutA:case Dw.LayoutB:return e.loc.string(Jk)
default:return null}}(t))
return t.bag.arcadeDownloadPacksMetricsEventsEnabled&&(od(t,i,{id:"GetAll",actionType:tD,subjectIds:a,actionDetails:{subjectIds:a},pageInformation:r,locationTracker:o,targetType:j$}),c.actionMetrics.addMetricsData(Zu(t,"Done",j$,{actionType:A$})),Fn(t,l,r)),l}offerAction(e){return e instanceof aU?e:e instanceof fU?e.defaultAction instanceof aU?e.defaultAction:e.buyAction instanceof aU?e.buyAction:null:null}fetchOptions(e,t){const n={selected:e.map(e=>({id:e.id,type:t}))}
return{method:EM,headers:{"Content-Type":iP},requestBodyString:JSON.stringify(n)}}}const _0=new class{constructor(){this.registeredBuilders=new Set,this.pageRouter=new sj,this.shelfRouter=new sj,this.paginationRouter=new sj}registerPageBuilder(e,t){if(this.registeredBuilders.has(t.builderClass))throw new Error(`routing: Registering duplicate builderClass ${t.builderClass}`)
this.registeredBuilders.add(t.builderClass),this.pageRouter.associate(t.pageRoute(e),t),this.shelfRouter.associate(t.shelfRoute(e),t),this.paginationRouter.associate(t.paginationRoute(e),t)}registerShelfBuilder(e,t){if(this.registeredBuilders.has(t.builderClass))throw new Error(`routing: Registering duplicate builderClass ${t.builderClass}`)
this.registeredBuilders.add(t.builderClass),this.shelfRouter.associate(t.shelfRoute(e),t)}registerPaginationBuilder(e,t){if(this.registeredBuilders.has(t.builderClass))throw new Error(`routing: Registering duplicate builderClass ${t.builderClass}`)
this.registeredBuilders.add(t.builderClass),this.paginationRouter.associate(t.paginationRoute(e),t)}fetchFlowPage(e){const t=this.pageRouter.routedObjectForUrl(e)
if(!t.object)return"unknown"
const n=t.object
return n.builderClass===um&&t.parameters[YG]!==dQ&&t.parameters[YG]!==uQ?lF:n.pageType()}async fetchPage(e,t,n){return await this.fetchAction(e,t,null).then(async r=>await new Promise((o,s)=>{if(!r)throw new Error(`Promise resolved to null action for: ${t}`)
if(r.actionClass!==tE){if(r.actionClass===Kw){const e=r
if(1===e.actions.length&&e.actions[0].actionClass===tE){const t=e.actions[0].pageData
return A(t,n)?void o(t):void s(new Error(`pageData is not expected type ${n.name}, ${JSON.stringify(t)}`))}}s(new Error("Action is not a flowAction or a tabChangeAction that contains a single flowAction."))}else{const i=r.pageData
if(!A(i,n)){const a=r.pageUrl,c=a===t
return a&&!c?void this.fetchPage(e,a,n).then(e=>{o(e)}).catch(e=>{s(e)}):void s(new Error(`pageData is not expected type ${n.name}, ${JSON.stringify(i)}`))}o(i)}}))}async fetchAction(e,t,n){return await new Promise((r,o)=>{const s=t,i=this.pageRouter.routedObjectForUrl(s)
i.object?i.object.handlePage(e,i.normalizedUrl,i.parameters,i.matchedRuleIdentifier,n,r,o):this.redirectAndRefetchActionIfPossible(e,i.normalizedUrl,r,o)})}async fetchMoreOfPage(e,t){return await new Promise((n,r)=>{const o=t.url
if(!o)return void r(new Error("Page token missing required `url` property"))
const s=this.paginationRouter.routedObjectForUrl(o)
s.object?s.object.handlePagination(e,s.normalizedUrl,s.parameters,s.matchedRuleIdentifier,t,n,r):r(new Error(`fetchMoreOfPage: Unhandled pagination url: ${o}`))})}async fetchShelves(e,t){return await new Promise((n,r)=>{const o=Object.keys(t),s={shelves:{},errors:{}},i=new ij(o.length)
i.then(()=>{if(Object.keys(s.shelves).length>0)n(s)
else{const e=Object.keys(s.errors).map(e=>s.errors[e].message)
0===e.length?r(new Error(`Could not load any shelves: ${JSON.stringify(t)}`)):r(new Error(e.join("\n")))}})
for(const n of o){const r=t[n],o=e=>{s.shelves[n]=e,i.countDown()},a=e=>{s.errors[n]=e,i.countDown()},c=this.shelfRouter.routedObjectForUrl(r)
c.object?c.object.handleShelf(e,c.normalizedUrl,c.parameters,c.matchedRuleIdentifier,o,a):a(new Error(`fetchShelves: Unhandled shelf url: ${r}`))}})}redirectAndRefetchActionIfPossible(e,t,n,r){e.network.fetch({url:t.toString(),method:o_}).then(o=>{this.hasGotoURLInResponse(e,o)?n(new RU):200===o.status&&o.redirected&&o.url?this.fetchAction(e,o.url,null).then(n,r):r(new Error(`redirectAndRefetchActionIfPossible: Unhandled page url: ${t}`))}).catch(()=>{r(new Error(`redirectAndRefetchActionIfPossible: Failed to fetch page at url: ${t}`))})}hasGotoURLInResponse(e,t){if(o(t.body))return!1
try{const n=g(e.plist.parse(t.body)),r=d(n,cS),o=d(n,lS)
return!(r!==uS||!(0,Yh.isSome)(o))}catch{return!1}}fetchBuilder(e){const t=this.pageRouter.routedObjectForUrl(e)||this.shelfRouter.routedObjectForUrl(e)||this.paginationRouter.routedObjectForUrl(e)
return t?t.object:null}},L0=function(e,t){var n
const r=function(e,t,n,r,o,s,i,a,c,l,u,d,f,p,h,w,g,m,y,v,A,T,P,I,S,b,C,k,E,O,R,D,_,L){return e.configureDefaults(n,r,o,s,i,a,c,l,u,d,f,p,h,w,g,m,y,v,A,T,P,I,S,b,C,k,E,O,R,D,_,L).adding(gQ,t)}(new HB("app-store"),e,bag,cryptography,host,net,platform,plist,random,services,cookieProvider,ask.storeMetrics,ask.loc,ask.adsLoc,ask.device,ask.client,ask.props,ask.user,ask.clientOrdering,ask.personalizationStore,ask.arcade,ask.gameCenter,ask.resilientDeepLinks,ask.appleSilicon,ask.storage,ask.ads,ask.onDeviceRecommendationsManager,ask.onDeviceSearchHistoryManager,null!==(n=ask.featureFlags)&&void 0!==n?n:{isEnabled:()=>!1},mediaToken,ask.searchLandingPage,ask.searchFocusPage,ask.appDistribution,ask.timeoutManager)
return WB.createSharedMetricsReferralContext(r),r}(_0),x0=new class{constructor(){this.dispatcher=new Rw.IntentDispatcher}register(e){this.dispatcher.register(e)}async dispatch(e,t){const n=t.adding(oW.metatype,new oW)
return await this.dispatcher.dispatch(e,n)}controller(e){return this.dispatcher.controller(e)}get registeredControllers(){return this.dispatcher.registeredControllers}},M0=new E0(x0,L0)
!function(e,t){const n=e.required(gQ)
t.exportingService(lm,{fetchGeneric:async t=>await n.fetchPage(e,t.url,cH),fetchMoreOfGeneric:async t=>await n.fetchMoreOfPage(e,t.pageToken),fetchShelves:async t=>await n.fetchShelves(e,t.requests),fetchAction:async t=>await Dd(e,t)})}(L0,M0),_0.registerPageBuilder(L0,new class extends zZ{constructor(e,t){super("TodayPageBuilder"),t.exportingService(MP,{fetchPage:async t=>await oh(e,{url:t.url,onboardingCardIds:t.onboardingCardIds}),async fetchMoreOfPage(t){const n=t.pageToken
return lh(e,n.pageInformation),await ah(e,n),ih(e,n)}})}defaultTab(e){return L$}pageType(){return L$}pageRoute(e){return[]}handlePage(e,t,n,r,o,s,i){i(new Error("handlePage not implemented for TodayBuilder"))}}(L0,M0)),_0.registerPageBuilder(L0,new class extends zZ{constructor(e,t){super("ArticleBuilder"),t.exportingService(MP,{fetchArticle:async t=>await e.required(gQ).fetchPage(e,t.url,_Z)})}handlePage(e,t,n,o,i,c,l){const u=new Fh.FetchTimingMetricsBuilder,f=e.addingFetchTimingMetricsBuilder(u),p=JSON.parse(d(t.query,wV)),h=function(e,t){const n=t.pathComponents()
if(n.indexOf(Tx)<0&&n.indexOf(sx)<0&&n.indexOf("viewEditorialItem")<0&&t.host!==kG&&t.host!==RG&&t.host!==DG)throw new Error(`Unable to map ${t.build()} to a media api url`)
let r
if(r=t.host===kG?e.props.asString("spamBlockingExtensionsEditorialItemID"):t.host===RG?e.bag.sharePlayAppsEditorialItemId:t.host===DG?e.bag.buddyOnboardingEditorialItemId:wi(t),!a(r))throw new Error(`Unable to map ${t.build()} to a media api url`)
if(!a(r))throw new Error(`Unable to map ${t} to a media api url`)
const o=[rD],s=[qM,OM,hF,OF,w$,o$,Px,TL]
e.appleSilicon.isSupportEnabled&&s.push(NF),s.push(TL)
const i=new hH(e).withIdOfType(r,M$).includingAdditionalPlatforms(E(e)).includingAttributes(s).includingRelationships(o).includingRelationshipsForUpsell(!0).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes(De(e))
ar(e)&&(i.enablingFeature(s$),i.includingScopedAttributes(O$,[P$,EN,TN]),i.includingScopedRelationships(O$,[C$]),i.includingScopedRelationships(wm,[O$]),i.includingScopedAvailableIn(O$,[gm])),e.props.enabled(hS)&&i.includingAttributes([PL])
const c=t.query.preview
return _G.has(t.host)&&(null==c?void 0:c.length)>0&&(i.addingQuery("preview",c),i.isStorePreviewRequest=!0),i.attributingTo(t.build())}(e,t)
Mr(f,h).then(async t=>await async function(e,t){return await Ni(e,t,ji,Hi)}(e,t)).then(o=>{const i=new FZ
i.todayShelfRecoMetricsData=p,i.showingFallbackMediaInline=Boolean(n[gV]),i.additionalData=o.additionalData
const a=d(t.query,UV)
return(null==a?void 0:a.length)>0&&(i.todayCardConfig=JSON.parse(a)),i.allowUnpublishedAppEventPreviews=(0,Yh.isSome)(n.preview),i.isResilientDeepLink=e.deepLinks.hasResilientDeepLinks(),u.measureModelConstruction(()=>function(e,t,n){return Uh.context("articlePageWithResponse",()=>{var o
const i=D(t)
n.metricsPageInformation=Mn(e,sx,i.id,t),n.metricsLocationTracker={rootPosition:0,locationStack:[]},n.pageId=i.id
const a=new WW(n.metricsPageInformation,n.metricsLocationTracker,n.refreshController),c=function(e,t){if(!s(t))return null
if((0,Yh.isSome)(t.todayCardConfig))return t.todayCardConfig
const n={useOTDTextStyle:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!1,canDisplayArcadeOfferButton:!0,isHeroCard:!1}
switch(n.clientIdentifierOverride=t.clientIdentifierOverride,n.useOTDTextStyle=!1,n.allowUnpublishedAppEventPreviews=t.allowUnpublishedAppEventPreviews,n.currentRowIndex=void 0,e.client.deviceType){case H$:n.prevailingCropCode="en",n.coercedCollectionTodayCardDisplayStyle=fw.Grid,n.heroDisplayContext=yw.Article
break
case"tv":n.prevailingCropCode="ek",n.coercedCollectionTodayCardDisplayStyle=fw.Grid,n.heroDisplayContext=yw.Article}return n}(e,n)
let l=rs(e,i,c,a)
const u=null==l?void 0:l.media,f=null!==(o=null==l?void 0:l.title)&&void 0!==o?o:void 0
n.crossLinkSubtitle=ys(e,i),n.clientIdentifierOverride=c.clientIdentifierOverride,Fu(0,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,targetType:WF,id:n.pageId,idType:HN},f)
const p=function(e,t,n,r){return Uh.context("renderArticle",()=>{const o=[],i=se(t,rD)
for(const n of i){r.module=W(n,bT),r.subStyle=null,o.length
const i=qi(e,n,t,r)
s(i)&&(i.title=r.titleForNextShelf,o.push(i),r.titleForNextShelf=null),r.index++,ju(r.metricsLocationTracker)}if(r.showingFallbackMediaInline&&0===o.length){const e=function(e,t){if(t instanceof SH){const e=new rH(g$)
return e.items=t.lockups,e}return null}(0,n)
s(e)&&o.push(e)}return o})}(e,i,u,n),h=p[p.length-1],w=n.isResilientDeepLink?null:function(e,t,n){const o=zi(0,t)
let i=null
const a=fu(e,t,z$),c=fu(e,t,AN)
if(a&&c&&(i=e.loc.string("SHARE_SHEET_TITLE_SUBTITLE_FORMAT","{title}: {subtitle}").replace($x,a).replace(_A,c)),!i&&a&&(i=a),!i&&c&&(i=c),!i&&o){const n=W(o,z$)
switch(W(t,ZD)){case fw.GameOfTheDay:i=e.loc.string("SHARE_SHEET_GAME_OF_DAY_TITLE_FORMAT").replace($x,n)
break
case fw.AppOfTheDay:i=e.loc.string("SHARE_SHEET_APP_OF_DAY_TITLE_FORMAT").replace($x,n)}}const l=W(t,b$)
let u
switch(W(t,ZD)){case fw.Grid:case fw.List:case fw.River:u=nt(e,"resource://ShareCollectionThumbnail",40,40)
break
default:u=null}const d=function(e,t,n,o,i,a){return r(a)?null:Uh.context("shareSheetDataForArticle",()=>{let r=i
!r&&a&&(r=function(e,t){const n=is(t)
{const r=ms(e,t,yw.Article,n)
if(s(r))return r}return ds(e,j(t,us(0,n)))}(e,a))
const o=function(e,t){return t}(0,t),c=e.loc.string("SHARE_STORY_SUBTITLE"),l=new uB(o,c,r)
return new hB(l,n,null)})}(e,i,l,0,u,t)
if(!s(d))return null
const f=function(e,t,n){const r=[]
if((null==t?void 0:t.length)>0){const n=As(e,t)
s(n)&&r.push(n)}if((null==n?void 0:n.length)>0){const t=As(e,n,"Copy Card Preview Link")
s(t)&&r.push(t)}return r}(e,l,function(e,t,n){if((0,Yh.isNothing)(t))return null
switch(e.client.buildType){case OL:case Sx:const e=new nj
return e.protocol=JU,e.host=Jx,e.pathname=`/${wG}`,e.param(xG,`${t}`),e.param(BG,qF),e.param($G,n.useOTDTextStyle?qF:kR),decodeURIComponent(e.build())
default:return null}}(e,t.id,n))
return new bU(d,f)}(e,i,c)
if(s(w)){od(e,w,{targetType:j$,id:n.pageId,actionType:p_,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker})
const t=function(e,t,n){if(t&&n){const e=t.items.length
if(e>0&&-1!==$Z.indexOf(n)){const n=t.items[e-1]
switch(t.contentType){case uR:{const e=n
return e&&e.isFullWidth}case sR:{const e=n
return e&&e.isFullWidth}default:return!0}}}return!1}(0,h,n.module),r=function(e,t,n,r){if(!s(t))return null
const o=new Hj(p_,e.loc.string("SHARE_STORY"),!r,t),i=new rH("roundedButton")
return i.items=[o],i}(e,w,0,t)
r&&p.push(r)}const m=new _Z(l,p,w)
return m.editorialStoryCard=void 0,function(e,t,n,r){const o=zi(0,n)
if(o){const s=rt(0,n)
return void(t.footerLockup=function(e,t,n,r){return al(e,t,{offerStyle:Yi(e),metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,externalDeepLinkUrl:r,crossLinkSubtitle:n.crossLinkSubtitle,artworkUseCase:0,canDisplayArcadeOfferButton:vu(0,g$)})}(e,o,r,s))}const i=z(n,Tk)
if(s(r.additionalData)&&i){const o=hd(e,n)
t.arcadeFooterLockup=function(e,t,n){return wl(e,t,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},uI,kF,null)}(e,o,r)}}(e,m,i,n),m.shouldTerminateOnClose=n.isResilientDeepLink,Fn(e,m,n.metricsPageInformation,e=>{let t=f
if((null==l?void 0:l.media)instanceof IH&&(null==l?void 0:l.overlay)instanceof LH&&(t=(null==l?void 0:l.overlay).lockup.title),!t)return
let n=d(g(e[Nx]),BF)
n=n||d(g(e[fM])),e[Nx]=n?`${n}_${t}`:`unknown_${t}`}),m})}(f,o.originalData,i))}).then(e=>{const n=zZ.createFlowAction(e,WF,t),r=new rU("today")
return r.actions=[n],r}).then(c,l)}pageRoute(e){return[{protocol:JU,path:`/{countryCode}/${hG}/{id}`,query:[`${gV}?`,"preview?",`${UV}?`]},{protocol:JU,path:`/{countryCode}/${hG}/{seoSlug}/{id}`,query:[`${gV}?`,"preview?",`${UV}?`]},{protocol:JU,path:`/{countryCode}/${pG}/{id}`,query:[`${gV}?`,"preview?",`${UV}?`]},{protocol:JU,path:`/{countryCode}/${pG}/{seoSlug}/{id}`,query:[`${gV}?`,"preview?",`${UV}?`]},{protocol:JU,path:`/${pG}/{id}`,query:[`${gV}?`,"preview?",`${UV}?`]},{protocol:JU,path:`/${pG}/{seoSlug}/{id}`,query:[`${gV}?`,"preview?",`${UV}?`]},{protocol:JU,path:`/${XU}/viewEditorialItem`,query:[LG,`${gV}?`,"preview?",`${UV}?`]},{protocol:JU,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/editorial-items/{id}",query:[LG,`${gV}?`,"preview?",`${UV}?`]},{protocol:JU,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/editorial-items/{seoSlug}/{id}",query:[LG,`${gV}?`,"preview?",`${UV}?`]},{protocol:JU,path:"{apiVersion}/editorial/{countryCode}/editorial-items/{id}",query:[LG,`${gV}?`,"preview?",`${UV}?`]},{protocol:JU,path:"{apiVersion}/editorial/{countryCode}/editorial-items/{seoSlug}/{id}",query:[LG,`${gV}?`,"preview?",`${UV}?`]},{protocol:JU,hostName:"spamBlockingExtensions"},{protocol:YU,path:`/${pG}/{id}`,query:[`${_V}?`,`${DV}?`]},{protocol:JU,hostName:"sharePlayApps"},{protocol:JU,hostName:"buddyOnboarding"}]}pageType(){return WF}}(L0,M0)),_0.registerPageBuilder(L0,new w0),_0.registerPageBuilder(L0,new class extends zZ{constructor(e,t){super("TopChartsBuilder"),t.exportingService("TopChartData",{fetchPage:async t=>await uh(e,t.url),fetchMoreOfSegment:async t=>await dh(e,t.pageToken)})}pageRoute(e){return fh()}handlePage(e,t,n,s,a,c,l){const u=n[TV]
t.removeParam(TV)
let f=t.query[qG],p=n[UG]
o(p)&&(p=d(e.bag.defaultChart,"genre-id"),o(f)&&(f=d(e.bag.defaultChart,"chart-id")))
let h=n[HG]
if(o(h)){const e=pa(0,f)
h=void 0!==e?`${f},${e}`:f}else h.includes(f)||(h+=`,${f}`)
const w=ha(e,p,h,n[WG])
let g
g=wa(e,h,p),Promise.all([w,g]).then(([t,n])=>{const o=_r(e,n),s=r(o)?Or(p):Rr(o)
{const n=ph(e,t,p,o,f,s)
if(u&&i(n.segments)){const t=n.segments[0],r=t.nextPage,o=Qe(0,r)
if(i(o)){const s=new hH(e,o)
return Mr(e,s).then(o=>{const s=Xe(0,r)
s.remainingContent=[],s.maxPerPage=0
const i=gh(e,o,r,s),a=t.shelves.concat(i.shelves),c=new y0(t.shortName,t.longName,t.chart,a)
return c.pageMetrics=t.pageMetrics,c.nextPage=null,n.segments[0]=c,n})}}return n}}).then(e=>{let n
return e instanceof A0?n=CD:e instanceof cH&&(n=$$),zZ.createFlowAction(e,n,t)}).then(c,l)}pageType(){return CD}handlePagination(e,t,n,r,o,s,a){Uh.context(`${this.builderClass}.handlePagination`,()=>{dh(e,o).then(e=>function(e){var t,n
const r=new cH(e.shelves)
return r.title=null!==(t=e.longName)&&void 0!==t?t:e.shortName,r.pageMetrics=e.pageMetrics,r.pageRenderMetrics=e.pageRenderMetrics,i(null===(n=null==e?void 0:e.nextPage)||void 0===n?void 0:n.remainingContent)&&(r.nextPage=e.nextPage),r}(e)).then(s).catch(a)})}}(L0,M0)),_0.registerShelfBuilder(L0,new mZ),_0.registerShelfBuilder(L0,new yZ),_0.registerShelfBuilder(L0,new vZ),_0.registerShelfBuilder(L0,new TZ),_0.registerShelfBuilder(L0,new AZ),_0.registerShelfBuilder(L0,new PZ),_0.registerShelfBuilder(L0,new IZ),_0.registerShelfBuilder(L0,new SZ),_0.registerShelfBuilder(L0,new CZ),_0.registerShelfBuilder(L0,new bZ),_0.registerShelfBuilder(L0,new kZ),_0.registerShelfBuilder(L0,new EZ),_0.registerShelfBuilder(L0,new BZ),_0.registerShelfBuilder(L0,new UZ),_0.registerShelfBuilder(L0,new GZ),_0.registerShelfBuilder(L0,new VZ),_0.registerShelfBuilder(L0,new XZ),_0.registerShelfBuilder(L0,new eK),_0.registerShelfBuilder(L0,new tK),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super(rA)}pageRoute(e){return[{protocol:YU,path:"onDeviceRecommendations",query:[dV,bV]}]}handlePage(e,t,n,r,o,s,i){const a=n.onDeviceRecommendationsUseCase
ao(e,a,Y$).then(r=>{const o=JSON.parse(n[bV]),i=new ZZ
i.title=o.title
const a=this.makePage(e,r.dataContainer,r.recoMetrics,i),c=new nU($$,t.build())
c.pageData=a,s(c)}).catch(e=>{i(e)})}makePage(e,t,n,r){const o=mo(e)
r.url=this.paginationUrl,r.metricsPageInformation=Mn(e,pN,"onDevicePersonalizationSeeAll",t),r.metricsPageInformation.recoMetricsData=xu(n,null,o),r.shouldFilter=!1,r.metricsLocationTracker={rootPosition:0,locationStack:[]}
const s=new rH(JZ),i={id:null,kind:null,softwareType:null,targetType:l$,title:r.title,pageInformation:r.metricsPageInformation,locationTracker:r.metricsLocationTracker,idType:NN,recoMetricsData:n}
nn(0,s,i),Fu(0,i,r.title),s.isHorizontal=!1,s.shouldFilterApps=r.shouldFilter
const a=_(t)
r.remainingContent=[],s.items=ml(e,a,{contentUnavailable:(e,t)=>(r.remainingContent=et(0,a,t),!0),lockupOptions:{metricsOptions:{pageInformation:i.pageInformation,locationTracker:i.locationTracker},clientIdentifierOverride:r.clientIdentifierOverride,artworkUseCase:kl(0,s.contentType)}})
const c=new cH([s])
return c.title=r.title,r.remainingContent.length&&(c.nextPage=r),Fn(e,c,r.metricsPageInformation),c}handleShelf(e,t,n,r,o,s){s(new Error(bP))}shelfRoute(e){return[]}pageType(){return $$}}),_0.registerPageBuilder(L0,new gX(L0,M0)),_0.registerPageBuilder(L0,new class extends YZ{constructor(e,t){super("ArcadeSeeAllGamesPageBuilder"),this.pageSize=20,t.exportingService(t_,{fetchArcadeSeeAllGames:async t=>await Hd(e,t),fetchMoreArcadeSeeAllGames:async t=>await Wd(e,t.pageToken)})}defaultPlatforms(e){return E(e)}defaultAttributes(e){const t=[w$,o$,iF,hF,OM,qM,zM]
return e.appleSilicon.isSupportEnabled&&t.push(NF),t}defaultTab(e){return F$}pageType(){return mx}pageRoute(e){return[{identifier:mx,path:`/${oG}`,query:[`${CV}?`,`${PV}?`,`${kV}?`,`${EV}?`,`${OV}?`,`${RV}?`]},{identifier:mx,hostName:`${CG}`,query:[`${CV}?`,`${PV}?`,`${kV}?`,`${EV}?`,`${OV}?`,`${RV}?`]}]}paginationRoute(e){return[{identifier:mx,protocol:YU,path:`/${oG}/arcadeSeeAllGamesLoadMore`}]}shelfRoute(e){return[{protocol:YU,path:`/${oG}/${QU}/`,query:[`${bV}`]}]}generatePageRequest(e,t,n){return Uh.context("generatePageRequest",()=>{const t=Yd(e,n)
let r=dd(e).includingAdditionalPlatforms(E(e)).includingRelationships([]).withSparseLimit(10).includingAttributes(jd(e)).usingCustomAttributes(De(e))
const s=i(t.selectedFacetOptions)?t.selectedFacetOptions:Gd(e)
let a=!1
for(const e of Object.keys(s)){if(e===qQ&&i(s[e])){const t=s.groupBy
if(i(t))switch(t[0].value){case GQ:case VQ:s[e][0].value="comingSoonGrouping"
break
case jQ:s[e][0].value=zQ
break
case HQ:s[e][0].value=zQ,a=!0}}e===YQ&&o(s[e])&&(s[e]=JQ.binCompatGames.false)}a&&(r=r.withSparseCount(4))
for(const e of Object.keys(s)){const t=UQ.requestValuesForSelectedFacetOptions(s[e])
if(i(t)){i(t.value)&&r.addingQuery(e,t.value)
for(const e of Object.keys(t.additionalKeyValuePairs))r.addingQuery(e,t.additionalKeyValuePairs[e])}}return r})}renderPage(e,t,n,o){return Uh.context(KM,()=>{const o=h(t),s=Yd(e,n),a=Mn(e,pN,mx,o),l={url:nj.fromComponents(YU,null,`/${oG}/arcadeSeeAllGamesLoadMore`).build(),metricsPageInformation:a,metricsLocationTracker:{rootPosition:0,locationStack:[]},remainingGroups:[],lastShelfIndex:0,isCompactMode:s.isCompactMode},u=new pH(qd(e,c(o,"results.groups"),l))
u.title=e.loc.string(lP),u.pageFacets=function(e){Ud(e)
const t=e.loc.string("PAGE_FACETS_FILTERS_AGE_RATINGS"),n=new $Q(kV,qg,t,vL,null,[tX,nX,rX,oX],[tX],"age",Vd(e,oF)),r=new $Q(PV,WQ,e.loc.string(Kg),vL,null,[KQ,QQ,XQ,eX],[KQ],oF,Vd(e,oF)),o=e.loc.string(Jg),s=new $Q(EV,zg,o,eD,null,[sX],null,Qg,Vd(e,oF)),i=e.loc.string("PAGE_FACETS_FILTERS_MULTIPLAYER_GAMES"),a=new $Q(OV,Yg,i,eD,null,[iX],null,Xg,Vd(e,oF)),c=new $Q(RV,qQ,e.loc.string(Zg),eD,null,[aX],[aX],JI,Vd(e,JI)),l=new UQ([],!1,null)
switch(e.client.deviceType){case H$:l.facetGroups.push(new BQ([n])),e.bag.enableComingSoonToggle&&l.facetGroups.push(new BQ([c],e.loc.string(em))),l.facetGroups.push(new BQ([s,a],e.loc.string("PAGE_FACETS_SUPPORTS_TITLE"))),l.facetGroups.push(new BQ([r]))
break
case"tv":l.facetGroups.push(new BQ([n],e.loc.string("PAGE_FACETS_AGE_RATINGS_TITLE_LOWERCASE")))
const t=[s,a]
e.bag.enableComingSoonToggle&&t.push(c),l.facetGroups.push(new BQ(t,e.loc.string("PAGE_FACETS_FILTERS_TITLE"))),l.facetGroups.push(new BQ([r],e.loc.string("PAGE_FACETS_SORT_BY_TITLE_LOWERCASE")))
break
default:r.displayOptionsInline=!0,l.facetGroups.push(new BQ([r],e.loc.string(Kg))),n.showsSelectedOptions=!0,l.facetGroups.push(new BQ([s,a,n],e.loc.string("PAGE_FACETS_FILTER_BY_TITLE"))),e.bag.enableComingSoonToggle&&l.facetGroups.push(new BQ([c],e.loc.string(em)))}return l}(e),u.selectedFacetOptions=i(s.selectedFacetOptions)?s.selectedFacetOptions:Gd(e),Fn(e,u,a)
const d=u.pageMetrics.instructions
if(!r(d))for(const e of d)e.data.includingFields.push(cv)
return l.remainingGroups.length>0&&(u.nextPage=l),u})}generatePaginationRequest(e,t,n,r){const o=h(r)
let s=[],i=20,a=!0
for(const e of o.remainingGroups)a=a&&(e.data.length<i||0===s.length),a&&(s=s.concat(e.data),i-=e.data.length)
return new hH(e,s).includingAdditionalPlatforms(E(e)).includingAttributes(jd(e)).usingCustomAttributes(De(e))}renderPaginatedPage(e,t,n){const r=h(n),o=[]
let s=20
const a={}
for(const e of t.data)a[e.id]=e
let c=!0
for(const e of r.remainingGroups){if(c=c&&(e.data.length<s||0===o.length),c){for(let t=0;t<e.data.length;t++){const n=a[e.data[t].id]
i(n)&&(e.data[t]=n)}s-=e.data.length}o.push(e)}r.remainingGroups=[]
const l=qd(e,o,r),u=new pH(l)
return u.title=e.loc.string(lP),r.remainingGroups.length>0&&(u.nextPage=r),u}generateShelfRequest(e,t,n){const r=h(JSON.parse(n[$N])).remainingContent.slice(0,20),o=new hH(e,r).includingAdditionalPlatforms(E(e)).includingAttributes(jd(e)).usingCustomAttributes(De(e))
return Ue(e,o,r),o}renderShelf(e,t,n){const r=h(JSON.parse(n[$N]))
return r.remainingContent=t.data.concat(r.remainingContent.slice(20,r.remainingContent.length)),r.isFirstRender=!1,zd(e,r)}}(L0,M0)),_0.registerPageBuilder(L0,new class extends zZ{constructor(e,t){super("MarketingItemUpsellBuilder"),t.exportingService(t_,{fetchUpsellGrid:async t=>await nf(e,t.contentDictionary)})}pageType(){return bM}pageRoute(e){return[{hostName:"arcadeSubscribePage",query:[`${AV}?`,`${JG}?`,`${SV}?`],exclusions:[{query:["askToBuyId"]}]},{path:"arcade/subscribe",query:[`${AV}?`,`${JG}?`,`${SV}?`]},{path:"{countryCode}/arcade/subscribe",query:[`${AV}?`,`${JG}?`,`${SV}?`]}]}handlePage(e,t,n,r,o,s,i){const a=function(e){var t
switch(e){case Xw:return eg
case tg:return Xx
case ng:return nE
case rg:return lI
case rF:return s_
case"topShelfATV":return"arcadeTopShelfATV"
case"topShelfATVClickThrough":return"arcadeTopShelfATVClickThrough"
case sx:return uI
case"editorialItemCanvas":return rE
case oE:return oE
case cL:return cL
case dI:return dI
default:return null!==(t=e)&&void 0!==t?t:Xx}}(d(n,JG)),c=d(n,AV),l=new YH(F$,a,c),u=new nU(bM)
u.pageData=l,u.referrerUrl=t.build(),s(u)}}(L0,M0)),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("ArcadeOfferRedirectHandler")}pageType(){return WF}defaultTab(e){return F$}pageRoute(e){return[{path:"arcade/offers",query:["offerHints?"]},{path:"/{countryCode}/arcade/offers",query:["offerHints?"]}]}handlePage(e,t,n,r,o,s,i){var a
const c=null!==(a=n.offerHints)&&void 0!==a?a:"deeplink_hardware_firstchance",l=new YH(F$,Xx,null,{offerHints:c})
l.offerHints=c
const u=new nU(bM)
u.pageData=l,u.referrerUrl=t.build(),s(u)}}),_0.registerPageBuilder(L0,new pX(L0,M0)),_0.registerPageBuilder(L0,new class extends zZ{constructor(e,t){super("ArcadeWelcomeBuilder"),t.exportingService(t_,{fetchArcadeWelcomePage:async t=>await tf(e,t.url)})}pageType(){return"arcadeWelcome"}handlePage(e,t,n,r,o,s,i){const a=this.generatePage(e,n,r)
s(zZ.createFlowAction(a,this.pageType(),t))}pageRoute(e){return[{hostName:"arcadeWelcomePage",query:[`${JG}?`]}]}generatePage(e,t,n){return function(e,t){return function(e,t){const n={rootPosition:0,locationStack:[]},r=function(e,t){if(X(t)){const t=new RU
return t.title=e.loc.string("ARCADE_WELCOME_TV_CONTINUE_BUTTON"),t}return ef(0,e.loc.string("ARCADE_WELCOME_CONTINUE_BUTTON"))}(e,t)
od(e,r,{id:"arcade-welcome-continue",actionType:A$,pageInformation:new sQ,locationTracker:n,targetType:j$})
const o=function(e,t){return X(t)?ef(0,e.loc.string(QI)):null}(e,t)
o&&od(e,o,{id:"arcade-welcome-create-family",actionType:A$,pageInformation:new sQ,locationTracker:n,targetType:j$})
let s=mX,i="oe"
e.client.isPad&&(s=yX,i="og")
const a=new qH(e.loc.string("ARCADE_WELCOME_INDIVIDUAL_TITLE"),e.loc.string("Arcade.Welcome.Family.Description"),[new WH(null,null,El(e,s,{useCase:24,cropCode:i}))],r,o)
if(X(t)){a.nonDismissingContinueAction=ef(0,e.loc.string(QI)),r.title=a.nonDismissingContinueAction.title
const t=new RU
t.title=e.loc.string(nm),a.dismissingFamilyAction=t,o.title=a.dismissingFamilyAction.title}else a.nonDismissingContinueAction=ef(0,e.loc.string(QI)),r.title=a.nonDismissingContinueAction.title
return new zH(a,a)}(e,t)}(e,t[JG])}}(L0,M0)),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("FamilyCircleBuilder")}pageType(){return D$}defaultTab(e){return F$}handlePage(e,t,n,r,o,s,i){var a
const c=new rU(F$),l=null!==(a=t.query[BN])&&void 0!==a?a:Cg,u=new OU(FF,l,t.query)
c.actions.push(u),s(c)}pageRoute(e){return[{hostName:"familyCircle"},{path:"familyCircle"}]}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("AppClipSubscribeBuilder")}pageType(){return D$}handlePage(e,t,n,r,o,i,a){const c=d(n[AV])
s(c)||a(new Error(`No adamId supplied in appClipSubscribe url: ${t}`))
const l=new hH(e).withIdOfType(c,q$).includingAdditionalPlatforms(E(e))
Mr(e,l).then(t=>{const n=D(t),r={metricsOptions:{pageInformation:new sQ({}),locationTracker:{rootPosition:0,locationStack:[]}},artworkUseCase:null},o=al(e,n,r),s=(new nj).set(IN,ZU).set(Zx,Jx).path(cG).path(c).build(),a=new nU(lF)
a.pageUrl=s
const l=ld(e,"arcadeGeneric",c,o.buttonAction),u=new rU(F$)
u.actions=[a,l],i(u)},a)}pageRoute(e){return[{hostName:"appClipSubscribe",query:[AV,JG]}]}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(e,t){super("ArcadeDownloadPackBuilder")}pageRoute(e){return e.featureFlags.isEnabled(DE)&&Pi(e,e.bag.arcadeDownloadPackRolloutRate)?[{hostName:"arcadeDownloadPack",query:["subscriptionStatus?"]}]:[]}handlePage(e,t,n,r,o,s,i){const a=new nU(y_),c=d(n,"subscriptionStatus")
a.pageData=ee(c),s(a)}pageType(){return y_}}(L0,M0)),_0.registerShelfBuilder(L0,new nK),_0.registerPageBuilder(L0,new NX),_0.registerPageBuilder(L0,new class extends YZ{constructor(){super("EditorialShelfCollectionPageController")}defaultPlatforms(e){return E(e)}defaultAttributes(e){const t=[w$,o$,iF,hF,zM,Rx,xL,AF]
return e.appleSilicon.isSupportEnabled&&t.push(NF),t}pageType(){return $$}pageRoute(e){return[{protocol:JU,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/editorial-shelves-collection/{shelfId}"},{protocol:JU,path:"{apiVersion}/{realm}/editorial/{countryCode}/editorial-shelves-collection/{shelfId}"},{protocol:JU,path:"{apiVersion}/editorial/{countryCode}/editorial-shelves-collection/{shelfId}"}]}generatePageRequest(e,t,n){if(o(n.shelfId))throw new Error(`Unable to map ${t.build()} to a media api url`)
return new hH(e).forType("editorial-shelves-collection").attributingTo(t.build())}prepareRequest(e,t,n,r){super.prepareRequest(e,t,n,r),t.includingRelationships([V$]).includingScopedRelationships(MN,[WS]).includingAssociateKeys(IP,[QM]),Af(e,t)}renderPage(e,t,n,r,o,s){return Uh.context("renderEditorialShelfCollectionPage",()=>{const n=D(t)
if(!i(n))return null
const r=Mn(e,pN,n.id,t),o=vr(t),s=zf(e,void 0,n,!1,0,r,{rootPosition:0,locationStack:[]}),a=[],c=W(n,LM)
if((0,Yh.isSome)(c)){const e=new rH(zC)
e.id=YC,e.items=[new OB(null,c,W(n,uM))],a.push(e)}const l=Wf(e,void 0,s)
l.title=null,l.eyebrow=null,l.isHorizontal=!1,a.push(l)
const u=new cH(a)
return u.pageRefreshPolicy=Tr(e,o),Fn(e,u,r),u})}}),_0.registerPageBuilder(L0,new class extends YZ{constructor(){super("EditorialShelfRecommendationPageController")}defaultPlatforms(e){return E(e)}defaultAttributes(e){const t=[w$,o$,iF,hF,zM,Rx,xL,AF]
return e.appleSilicon.isSupportEnabled&&t.push(NF),t}pageType(){return $$}pageRoute(e){return[{protocol:JU,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/editorial-shelves-recommendation/{shelfId}",query:[`${jV}?`]},{protocol:JU,path:"{apiVersion}/{realm}/editorial/{countryCode}/editorial-shelves-recommendation/{shelfId}",query:[`${jV}?`]},{protocol:JU,path:"{apiVersion}/editorial/{countryCode}/editorial-shelves-recommendation/{shelfId}",query:[`${jV}?`]}]}generatePageRequest(e,t,n){const r=n.shelfId,o=n[jV]
if((0,Yh.isNothing)(r)||0===r.length||(0,Yh.isNothing)(o)||0===o.length)throw new Error(`Unable to map ${t.build()} to a media api url`)
const s=new hH(e,t.toString())
return s.addingQuery(jV,o),s}prepareRequest(e,t,n,r){super.prepareRequest(e,t,n,r),t.includingRelationships([V$]),Af(e,t)}renderPage(e,t,n,r,o,s){return Uh.context("renderEditorialShelfRecommendationPage",()=>{const n=D(t)
if(!i(n))return null
const r=Mn(e,pN,n.id,t),o=vr(t),s=zf(e,void 0,n,!1,0,r,{rootPosition:0,locationStack:[]}),a=new rH(zC)
a.id=YC,a.items=[new OB(null,W(n,LM),W(n,uM))]
const c=Wf(e,void 0,s)
c.title=null,c.eyebrow=null,c.isHorizontal=!1
const l=new cH([a,c])
return l.pageRefreshPolicy=Tr(e,o),Fn(e,l,r),l})}}),_0.registerPageBuilder(L0,new class extends hX{constructor(){super("GroupingPageBuilder")}defaultPlatforms(e){return E(e)}defaultAttributes(e){const t=[w$,iF,hF,xL]
return e.appleSilicon.isSupportEnabled&&t.push(NF),t}prepareRequest(e,t,n,r){super.prepareRequest(e,t,n,r)}pageType(){return $$}pageRoute(e){return[{protocol:JU,path:`/${XU}/${nG}`,query:[LG,`${JG}?`]},{hostName:SG,path:`/WebObjects/{storePreviewInstance}/wa/${nG}`,query:[LG,"useReleaseId?"]},{protocol:JU,path:`/{countryCode}/${sG}/{genreName}/{id}`},{protocol:JU,path:`/${XU}/viewGenre`,query:[LG]},{hostName:SG,path:"/WebObjects/{storePreviewInstance}/wa/viewGenre",query:[LG,"useReleaseId?"]},{protocol:JU,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}"},{protocol:JU,path:"{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}"},{protocol:JU,path:"{apiVersion}/editorial/{countryCode}/groupings/{id}"},{protocol:JU,hostName:"safariExtensions"}]}generatePageRequest(e,t,n){var r
let o,i,c=t.query.id
if(t.host===EG&&(null===(r=e.bag.safariExtensionsGroupingURL)||void 0===r?void 0:r.length)>0){const t=nj.from(e.bag.safariExtensionsGroupingURL)
s(t)&&(c=wi(t))}const l=t.pathComponents()
if(-1!==l.indexOf("viewGenre")?o=c:-1!==l.indexOf(mF)?o=wi(t):i=c,!a(i)&&!a(o))throw new Error(`Unable to map ${t.build()} to a media api url`)
const u=[w$,o$,iF,hF,zM,Rx]
e.appleSilicon.isSupportEnabled&&u.push(NF)
let d=new hH(e).forType(jN).includingAttributes(u).includingRelationshipsForUpsell(!0).includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes(De(e))
ar(e)&&(d.enablingFeature(s$),d.includingMetaKeys(G_,[OD,vO]),d.includingScopedAttributes(O$,[P$,EN,TN]),d.includingScopedRelationships(O$,[C$])),cr(e)&&(d.enablingFeature(AO),d.includingScopedRelationships(f$,[wx,jM,LN]),d.includingScopedAttributes(f$,[z$,_N,mL]),d.includingMetaKeys(IL,[SL]),d.includingMetaKeys(iD,[g_]),d.includingAssociateKeys(f$,[I_]))
const f=t.query[JG]||R(e)
s(f)&&d.addingQuery(aM,f),a(i)?d=d.withIdOfType(i,jN):a(o)&&(d=d.addingQuery(mF,o))
const p=t.query.useReleaseId
return t.host===SG&&(null==p?void 0:p.length)>0&&(d.isStorePreviewRequest=!0,d=d.addingQuery(dP,p)),d.enablingFeature(Fk),e.bag.enableFeaturedCategoriesOnGroupings&&d.enablingFeature(fP),e.bag.enableCategoryBricksOnGroupings&&d.enablingFeature("categoryBricks"),d.withSparseCount(C(e)),d.includingScopedSparseLimit(G_,k(e)),d.attributingTo(t.build())}renderGroupingPage(e,t,n,o,s,i,a){return Uh.context(dy,()=>{if(n.pageGenreId=Y(t.originalGroupingData,mF)||(r(o=W(t.originalGroupingData,"chartUrl"))?null:f(nj.from(o).query,mF)),Aa(e,t,n),"tv"!==e.client.deviceType){const t=Ia(e,n.metricsPageInformation,n.metricsLocationTracker)
t&&n.shelves.push(t)}var o
if(e.client.deviceType!==W$&&"tv"!==e.client.deviceType){const t=e.bag.termsAndConditionsURL
if(!r(t)){const r=Sa(e,t)
n.shelves.push(r)}}const s=this.groupingPageTitleForData(e,t.originalGroupingData,n.pageGenreId),i=new cH(n.shelves)
switch(e.client.deviceType){case"tv":i.title=s
break
case W$:i.title=s,i.presentationOptions=[Bk]
break
default:i.title=s,39===n.pageGenreId||(n.pageGenreId,0)?i.presentationOptions=["prefersRevealNavigationBarOnMouseOver"]:i.presentationOptions=[Bk]}return i.pageRefreshPolicy=Tr(e,null==n?void 0:n.refreshController),Fn(e,i,n.metricsPageInformation),this.insertUnifiedMessageShelves(e,i,n.pageGenreId),Qd(i),i})}groupingPageTitleForData(e,t,n){let r=null
switch(n){case 36:r=e.host.clientIdentifier===DB?e.loc.string("GROUPING_APPS"):e.loc.string("GROUPING_APP_STORE","App Store")
break
case 39:r=e.loc.string(SP)
break
default:r=Il(0,t)}return r}macDiscoverPageTitleForData(e,t){const n=ne(t,lx)
if(s(n)&&s(n.data))for(const e of n.data){const t=W(e,z$),n=Y(e,nN),r=W(e,$N)
if((null==t?void 0:t.length)>0&&s(n)&&i(r)&&r===GM&&414===n)return t}return e.loc.string(SP)}shelfForHeaderButtons(e){const t=new rH(CF),n=[],r=new nU(c$)
return r.title=e.loc.string("SEARCH",xM),r.artwork=nt(e,wO),n.push(r),t.items=n,t}insertUnifiedMessageShelves(e,t,n){if(!(t.shelves.length<=0))switch(n){case 36:t.shelves.splice(0,0,ba(0,"appsPageHeader")),t.shelves.splice(6,0,ba(0,"appsPageMid")),t.shelves.push(ba(0,"appsPageFooter"))
break
case 6014:t.shelves.splice(0,0,ba(0,"gamesPageHeader")),t.shelves.splice(6,0,ba(0,"gamesPageMid")),t.shelves.push(ba(0,"gamesPageFooter"))}}}),_0.registerPageBuilder(L0,new class extends ZX{constructor(){super("ProductBuilderNative")}pageType(){return lF}pageRoute(e){return[]}shelfRoute(e){return[{protocol:YU,path:`/${cG}/${QU}`,query:[rV,bV]},{protocol:YU,path:`/${cG}/${QU}`,query:["isGameCenterPlayerRibbonItem"]},{protocol:YU,path:`/${cG}/${QU}`,query:[oV,bV]}]}async renderShelf(e,t,n){return await new Promise(r=>{if(t.query[rV]){const o=t.query[LG],s=e.gameCenter.fetchFriendsThatPlayGame(o),i=n[bV],a=JSON.parse(i)
s.then(t=>{const n=wc(e,t,!0,a)
r(n)}).catch(e=>{throw e})}else if(t.query.isGameCenterPlayerRibbonItem){const n=t.query[LG]
e.gameCenter.fetchFriendsThatPlayGame(n).then(t=>{const n=wc(e,t,!1)
r(n)}).catch(e=>{throw e})}else if(t.query[oV]){const o=t.query[VG]
e.gameCenter.fetchAchievementSummaryForGame(o).then(t=>{const o=t
let s=null
if(o.length>0){const t=new MU(o[0].bundleId),n=e.loc.string("PRODUCT_ACHIEVEMENT_SUMMARY_COMPLETED","Completed"),r=o[0].achievements
let i=null
const a=r.filter(e=>e.status.type===Sy)
if(a.length>0&&(i=a[0]),null===i){const e=r.filter(e=>e.status.type===Iy||e.status.type===Py)
e.sort((e,t)=>t.status.percent-e.status.percent),e.length>0&&(i=e[0])}null!==i&&(s=new PB(o[0].bundleId,o[0].completedAchievements,o[0].totalAchievements,n,t,[i]))}const i=n[bV],a=JSON.parse(i),c=function(e,t,n){const r=new rH(MA)
if(r.isHorizontal=!0,t){const o={pageInformation:n.destinationPageInformation,locationTracker:n.sourceLocationTracker,kind:zF,title:xA,id:"achievements_summary",idType:HN,softwareType:null,targetType:zF,badges:{gameCenter:!0}}
nn(0,r,o),od(e,t.action,o),r.items=[t]}return r.mergeWhenFetched=!0,r.batchGroup=uN,r.isHidden=0===r.items.length,r}(e,s,a)
r(c)}).catch(e=>{throw e})}else r(super.renderShelf(e,t,n))})}}),_0.registerPageBuilder(L0,new class extends ZX{constructor(){super("ProductPageShelfWithAdController")}pageType(){return lF}pageRoute(e){return[]}shelfRoute(e){return[{protocol:YU,path:`/${cG}/${QU}/{token}`,query:[MV,NV]}]}async renderShelf(e,t,n){const r=n[NV],o=t.query[LG],s=ap(e,r,o).catch(()=>null),i=Ed(e,0,n)
i.attributingTo(t.build())
const a=Mr(e,i)
return await Promise.all([a,s]).then(([t,r])=>Od(e,t,n,r,!0))}}),_0.registerPageBuilder(L0,new class extends ZX{constructor(){super("ProductPageSimilarItemsShelfRefreshController")}pageType(){return lF}pageRoute(e){return[]}shelfRoute(e){return[{protocol:YU,path:`/${cG}/${QU}/{token}`,query:[`${FV}=${QV}`]}]}async renderShelf(e,t,n){const r=t.query[LG]
let o=Promise.resolve(null),s=!1
s=dn(e,$F),s&&(o=ap(e,$F,r).catch(()=>null))
const i=function(e,t){const n=[w$,o$,OF]
return new hH(e).withIdOfType(t,PR).enablingFeature(dN).includingAdditionalPlatforms(E(e)).includingAttributes(n).enablingFeature(BE)}(e,r)
i.attributingTo(t.build())
const a=Mr(e,i).catch(async()=>{const r=Ed(e,0,n)
return r.attributingTo(t.build()),await Mr(e,r)})
return await Promise.all([a,o]).then(([t,r])=>Od(e,t,n,r,s))}}),_0.registerPageBuilder(L0,new JX(L0,M0)),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("ProductInAppPurchaseBuilder")}handlePage(e,t,n,r,o,s,i){const a=n[WV],c=new nj(a),l=gi(e,c),u={},d=n[qV]===qF
u.spotlightSection=ei(d),u.spotlightInAppProductIdentifier=n[jG],Mr(e,l).then(n=>{const r=Fc(e,n,u)
return zZ.createFlowAction(r,lF,t)}).then(s,i)}pageRoute(e){return[{protocol:YU,path:`/${cG}/${eG}`,query:[WV,jG,qV]}]}pageType(){return lF}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("ReviewsAdapterBuilder")}handlePage(e,t,n,r,o,s,i){const a=gi(e,t)
Mr(e,a).then(n=>{const r=Fc(e,n)
let o,s
if(Nc(e)){const e=r
o=e.shelfMapping[xF],s=1===e.appPlatforms.length&&"tv"===e.appPlatforms[0]}else{const e=r
o=e.shelfMapping[E$],s=1===e.appPlatforms.length&&"tv"===e.appPlatforms[0]}const i=zZ.createFlowAction(r,lF,t)
let a=null
return o&&o.seeAllAction&&!s&&(a=o.seeAllAction,a.animationBehavior=wF),a?(i.animationBehavior=wF,new iU([i,a])):i}).then(s,i)}pageRoute(e){return[{protocol:JU,path:`/{countryCode}/${cG}/{appName}/{id}`,hash:KV},{protocol:JU,path:`/${XU}/viewContentsUserReviews`,query:[LG]}]}handlePagination(e,t,n,r,o,s,i){const a=n[YV],l=n[JV],u=c(o.remainingContent),d=new hH(e,o.nextHref).includingAdditionalPlatforms(E(e)).addingQuery(oF,l)
Mr(e,d,{}).then(t=>Js(e,e.client.guid,a,u,t,!1,l)).then(s,i)}paginationRoute(e){return[{protocol:YU,path:`/${fG}/${QU}/{adamId}/{sort}`}]}pageType(){return lF}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("SortedReviewsBuilder")}handlePage(e,t,n,r,o,a,c){const l=n[YV],u=n[JV],d=new hH(e).withIdOfType(l,IR).includingAdditionalPlatforms(E(e)).addingQuery(oF,u)
Mr(e,d,{}).then(t=>{const r=n[bV]
let o=null
if(i(r))try{o=JSON.parse(r)}catch(e){}const a=Js(e,e.client.guid,l,[],t,!0,u,o)
return s(null==o?void 0:o.reviewActionsShelf)&&a.shelves.unshift(o.reviewActionsShelf),s(null==o?void 0:o.ratingsShelf)&&a.shelves.unshift(o.ratingsShelf),a}).then(e=>zZ.createFlowAction(e,E$,t)).then(a,c)}pageRoute(e){return[{protocol:YU,path:`/${fG}/{adamId}/{sort}`,query:[`${bV}?`]}]}pageType(){return E$}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("PersonalizedReviewsBuilder")}handlePage(e,t,n,r,o,s,i){i(new Error("PersonalizedReviewsBuilder:handlePage not implemented"))}pageRoute(e){return[]}handleShelf(e,t,n,r,o,s){const i=n[$N],a=JSON.parse(i),c=new hH(e).withIdOfType(a.adamId,E$)
Mr(e,c).then(t=>Ws(e,e.client.guid,a,t)).catch(()=>Ws(e,e.client.guid,a)).then(o,s)}shelfRoute(e){return[{protocol:YU,path:`/personalizedReviews/${QU}/{token}`}]}pageType(){return D$}}),_0.registerPageBuilder(L0,new class extends YZ{constructor(){super("EulaBuilder")}defaultPlatforms(e){return E(e)}generatePageRequest(e,t,n){const o=t.query.resourceId,s=t.query.resourceType
if(r(o)||r(s))throw new Error(`Unable to map ${t.build()} to a media api url`)
const i=new hH(e).withIdOfType(o,zx)
return i.targetResourceType=s,i}pageRoute(e){return[{protocol:YU,path:`${AG}`}]}pageType(){return $$}renderPage(e,t,n,r){return Uh.context(KM,()=>{const n=d(t,"results.eula.text").split(/\n{1,2}/),r=[]
for(const e of n){const t=new mB(e)
t.wantsCollapsedNewlines=!1,t.suppressVerticalMargins=!0,r.push(t)}const o=new rH(TM)
o.isHorizontal=!1,o.items=r
const s=new cH([o])
return s.title=e.loc.string(oR),s})}}),_0.registerPageBuilder(L0,new class extends YZ{constructor(){super("PrivacyDetailBuilder")}defaultPlatforms(e){return E(e)}pageType(){return yC}pageRoute(e){return[{protocol:YU,path:`${PG}/${cG}/{id}`,query:["privacyTypeId?"]},{protocol:YU,path:`${PG}/${uG}/{id}`,query:["privacyTypeId?"]}]}generatePageRequest(e,t,n){const r=wi(t)
if((0,Gh.isNothing)(r)||0===r.length)throw new Error(`Unable to map ${t.build()} to a media api url. Missing id.`)
let o=q$
const s=[zO,QN,A_]
return-1!==t.pathname.indexOf(uG)&&(o=x$),new hH(e).withIdOfType(r,o).addingQuery(wE,s.join(","))}renderPage(e,t,n,i){return Uh.context(KM,()=>{const i=n.privacyTypeId
return function(e,t,n){return Uh.context("privacyDetailPageFromResponse",()=>{const i=D(t)
if(o(i))return null
const a=Mn(e,"PrivacyDetails",i.id,t),c={rootPosition:0,locationStack:[]}
let l=[]
if(!La(e)){const t=function(e,t,n,r){const o=new rH(p$)
o.isHorizontal=!1
const s=xa(e,t,!0,!0,n,r)
return o.items=[s],o.presentationHints={isFirstShelf:!0},o}(e,i,a,c)
s(t)&&l.push(t)}const u=function(e,t,n,i,a){const c=j(t,zO)
if(o(c))return[]
const l=Ca(e,c,t,FM,!0,n,i)
if(0===l.length)return[]
const u=[]
for(const t of l)if(r(a)||t.identifier===a||e.client.deviceType!==W$){const e=new rH(YO)
s(t.identifier)&&t.identifier===a?(t.wantsScrollFocus=!0,e.id="privacyTypeShelf_"+t.identifier):t.wantsScrollFocus=!1,e.items=[t],e.presentationHints={isSingleDensity:!0},u.push(e)
for(const e of t.purposes){const t=new rH("privacyCategory")
t.title=e.title,t.items=e.categories,u.push(t)}}return u}(e,i,a,c,n)
l=l.concat(u)
const d=new cH(l)
d.title=e.loc.string(qO)
for(const e of u)if((0,Gh.isSome)(e.id)){d.loadCompletedAction=new BU(e.id)
break}return Fn(e,d,a),d})}(e,t,i)})}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("SearchLandingPageBuilder")}pageRoute(e){return[{protocol:YU,path:`${TG}`}]}shelfRoute(e){return[{protocol:YU,path:`${TG}/${QU}`,query:[lV]}]}pageType(){return $$}handlePage(e,t,n,r,o,s,i){Uh.context(`${this.builderClass}.handlePage`,()=>{this.fetchPage(e).then(e=>{s(zZ.createFlowAction(e,this.pageType(),t))}).catch(i)})}handleShelf(e,t,n,r,o,i){Uh.context(`${this.builderClass}.handleShelf`,()=>{var a,c
const l=w(null!==(a=n[lV])&&void 0!==a?a:t.query[lV]),u=l?function(e){if(!(0,Gh.isNothing)(e))return JSON.parse(decodeURIComponent(e))}(null!==(c=n[bV])&&void 0!==c?c:t.query[bV]):void 0
l&&s(u)?this.handleSearchHistoryShelf(e,u,o,i):super.handleShelf(e,t,n,r,o,i)})}handleSearchHistoryShelf(e,t,n,r){e.onDeviceSearchHistoryManager.fetchRecentsWithLimit(t.maxItems).then(n=>{const r=Nn(e,Db,_b," ")
return Fu(0,{locationTracker:{rootPosition:0,locationStack:[]},id:IT,pageInformation:r},t.title),Gp(e,t,r,{rootPosition:0,locationStack:[]},n)}).then(n,r)}async fetchPage(e){const t=dn(e,kN)?ap(e,kN).catch(()=>null):null
return await this.fetchSearchLandingPage(e,t).catch(async n=>await this.fetchTrendingSearchesFallbackPage(e,t))}async fetchTrendingSearchesFallbackPage(e,t){const n={url:e.bag.trendingSearchesURL},r=e.network.fetch(n).then(e=>{if(!e.ok)throw Error(`Bad Status code ${e.status} for ${n.url}`)
return JSON.parse(e.body)})
return await Promise.all([r,t]).then(([t,n])=>{var r
const o=new dH(this.trendingSearchesShelvesForResponse(e,t)),s=Nn(e,BD,YL,"")
return s.iAdInfo=wn(e,kN,n),null===(r=s.iAdInfo)||void 0===r||r.setMissedOpportunity(e,"SLPLOAD",kN),Fn(e,o,s),o})}async fetchSearchLandingPage(e,t){return this.shouldUseModernProtocol(e)?cf(e)?await this.fetchSearchLandingPageV3(e,t):await this.fetchSearchLandingPageV2(e,t):await this.fetchSearchLandingPageV1(e,t)}async fetchSearchLandingPageV1(e,t){const n=new hH(e).forType(bR).includingAdditionalPlatforms(E(e)).usingCustomAttributes(De(e))
n.targetResourceType=jN
const r=la(e,e.user.dsid);(null==r?void 0:r.length)>0&&n.addingQuery(DP,r)
const o=new Fh.FetchTimingMetricsBuilder,s=e.addingFetchTimingMetricsBuilder(o),i=Mr(s,n)
return await Promise.all([i,t]).then(([e,t])=>o.measureModelConstruction(()=>this.landingPageFromResponseV1(s,e,t)))}makeSearchLandingRequestV2(e,t){const n=new hH(e).forType(zk).includingAdditionalPlatforms(E(e)).usingCustomAttributes(De(e)).includingScopedRelationships("search-recommendations",[V$]).addingQuery(z$,WR),r=la(e,e.user.dsid)
return(null==r?void 0:r.length)>0&&n.addingQuery(DP,r),e.featureFlags.isEnabled(Lg)&&n.addingQuery(dN,"adDisplayStyle"),n}async fetchSearchLandingPageV2(e,t){const n=this.makeSearchLandingRequestV2(e,t),r=new Fh.FetchTimingMetricsBuilder,o=e.addingFetchTimingMetricsBuilder(r),s=Mr(o,n)
return await Promise.all([s,t]).then(([e,t])=>r.measureModelConstruction(()=>this.landingPageFromResponseV2(o,e,t)))}async fetchSearchLandingPageV3(e,t){const n=this.makeSearchLandingRequestV2(e,t).enablingFeature("search-focus-suggestions"),r=new Fh.FetchTimingMetricsBuilder,o=e.addingFetchTimingMetricsBuilder(r),s=Mr(o,n)
return await Promise.all([s,t]).then(async([e,t])=>await r.measureModelConstructionAsync(async()=>await this.landingPageFromResponseV3(o,e,t)))}landingPageFromResponseV2(e,t,n){if(o(t.data))return null
const r=Mn(e,BD,BD,t),s=mo(e)
r.recoMetricsData=xu(r.recoMetricsData,null,s),r.iAdInfo=wn(e,kN,n)
const i=yo(0,r.iAdInfo)
To(e,i,n)
const a={shelves:[],metricsLocationTracker:{rootPosition:0,locationStack:[]},metricsPageInformation:r,adStitcher:ia(e,n,t),adIncidentRecorder:i,pageType:Cw.Landing}
Hp(e,t,a)
const c=new dH(a.shelves)
return c.pageRefreshPolicy=new HY(_P,e.bag.searchLandingPageRefreshUpdateDelayInterval,e.bag.searchLandingPageOffscreenRefreshInterval,null),c.adIncidents=vo(0,a.adIncidentRecorder),Fn(e,c,a.metricsPageInformation),c}async landingPageFromResponseV3(e,t,n){const r=this.landingPageFromResponseV2(e,t,n)
return await this.fetchFocusPageUsingLandingPageResponse(e,t).then(e=>(r.searchFocusPage=e,r))}async fetchFocusPageUsingLandingPageResponse(e,t){var n,r
if(o(t.data))return null
const s=Mn(e,Db,_b,t," "),i=mo(e)
s.recoMetricsData=xu(s.recoMetricsData,null,i)
const a={shelves:[],metricsLocationTracker:{rootPosition:0,locationStack:[]},metricsPageInformation:s,pageType:Cw.Focus},c=function(e,t,n){const r=e.data
if(o(r))return null
for(const e of r){if(o(e))continue
const r=p(e,dN)
if(Wp(null==r?void 0:r.category)===t.pageType&&n===W(e,kD))return e}return null}(t,a,vT)
if((0,Gh.isNothing)(c))return this.createFocusPageFromResponse(e,t,a)
const l=null!==(r=null!==(n=jp(e))&&void 0!==n?n:Y(c,sb))&&void 0!==r?r:0,u=e.onDeviceSearchHistoryManager.fetchRecentsWithLimit(l)
return await u.then(n=>(a.searchHistory=n,this.createFocusPageFromResponse(e,t,a)))}createFocusPageFromResponse(e,t,n){if(Hp(e,t,n),o(n.shelves))return null
const r=new uH(n.shelves)
return r.pageRefreshPolicy=null,Fn(e,r,n.metricsPageInformation),r}landingPageFromResponseV1(e,t,n){const r=c(t,LP)[0]
if(o(r))return null
if(!te(r,lx))return null
const i=W(r,"id"),a=Mn(e,ob,r.id,t),l=mo(e)
a.recoMetricsData=xu(a.recoMetricsData,null,l),a.iAdInfo=wn(e,kN,n)
const u=yo(0,a.iAdInfo)
To(e,u,n)
const d={shelves:[],metricsPageInformation:a,metricsLocationTracker:{rootPosition:0,locationStack:[]},pageGenreAdamId:i,pageGenreId:Y(r,mF),hasAuthenticatedUser:s(e.user.dsid),isSearchLandingPage:!0,adStitcher:ia(e,n),adIncidentRecorder:u}
Aa(e,Pa(r),d)
const f=new dH(d.shelves),p=new HY(_P,e.bag.searchLandingPageRefreshUpdateDelayInterval,e.bag.searchLandingPageOffscreenRefreshInterval,null)
return f.pageRefreshPolicy=p,f.adIncidents=vo(0,d.adIncidentRecorder),Fn(e,f,d.metricsPageInformation),f}shouldUseModernProtocol(e){return!!function(e){return!!function(e){return r(c0)&&(c0=(e.client.isPhone||e.client.isPad)&&e.searchLanding.areOverridesEnabled()),c0}(e)&&e.searchLanding.shouldSearchLandingPageUseV2Endpoint()}(e)||function(){if(e.bag.supportsSearchLandingPageV2){const t=e.bag.searchLandingPageV2RolloutRate
return Pi(e,t)}return!1}()||!!e.bag.enableSearchLandingPageV2ByTreatment&&function(e){const t=function(e){const t=Oe(e,l0)
return null!=t?t:0}(e)
return 1===t}(e)}trendingSearchesShelvesForResponse(e,t){return Uh.context("trendingSearchesShelfForResponse",()=>{const n={rootPosition:0,locationStack:[]},r=c(t,"trendingSearches").map(t=>{const r=d(t,ZF),o=new SY(r,r,d(t,b$),YL)
return e.client.isPhone&&(o.artwork=nt(e,wO)),ad(e,o,j$,n),ju(n),new DU(o)})
let o=0
switch(e.client.deviceType){case _$:o=10
break
case U$:o=7}const s=new rH(CF)
return s.title=r.length>0?d(t,"header.label"):null,s.isHorizontal=!1,s.items=r.slice(0,o),[s]})}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(e,t){super("SearchChartsAndCategoriesPageBuilder"),t.exportingService(n_,{fetchSearchChartsAndCategoriesPage:async t=>await yp(t,e)})}pageType(){return ak}pageRoute(e){return[{path:"/{apiVersion}/recommendations/{countryCode}/search-recommendations/{search-recommendations-id}"}]}handlePage(e,t,n,r,o,s,i){Uh.context(`${this.builderClass}.handlePage`,()=>{const n=new hH(e,t.toString()).forType(SR).includingScopedRelationships(RP,[V$]).enablingFeature(dN).enablingFeature(qk).addingQuery(BV,WR)
this.fetchCategoriesAndChartsPage(e,n).then(e=>{s(zZ.createFlowAction(e,this.pageType(),t))}).catch(i)})}async fetchCategoriesAndChartsPage(e,t){const n=Mr(e,t)
return await n.then(t=>hp(e,t))}}(L0,M0)),_0.registerPageBuilder(L0,new class extends zZ{constructor(e,t){super("SearchResultsBuilder"),t.exportingService(n_,{fetchResults:async t=>await async function(e,t){const n=new Fh.FetchTimingMetricsBuilder,r=e.addingFetchTimingMetricsBuilder(n),o=await uf(r,t)
return null===o?Np(r,t.facets):await async function(e,t){return await $p(e,t)}(r,o)}(e,t),fetchMoreResults:async t=>await async function(e,t){return await async function(e,t){return await Uh.context("paginatedSearchResultsWithToken",async()=>{const n=Lp(0,t),r=xp(0,t)
return 0===n.length?await Promise.resolve(Np(e)):await df(e,n).then(async n=>{const o=_(n)
return await Dp(e,t.requestMetadata,t.responseMetadata,t.metricsOptions,o).then(e=>{const t=new yY
return t.results=e.builtSearchResults,t.nextPage=r,t})})})}(e,t)}(e,t.pageToken),fetchSearchResultsPage:async t=>await Xp(e,t),fetchMoreOfSearchResultsPage:async t=>await eh(e,t.pageToken)})}handlePage(e,t,n,r,o,s,i){i(new Error(KN))}pageRoute(e){return[]}pageType(){return D$}}(L0,M0)),_0.registerPageBuilder(L0,new class extends zZ{constructor(e,t){super("SearchHintsBuilder"),t.exportingService(n_,{fetchHints:async t=>await Up(e,t.term)})}handlePage(e,t,n,r,o,s,i){i(new Error(KN))}pageRoute(e){return[]}pageType(){return D$}}(L0,M0)),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("DeveloperBuilder")}handlePage(e,t,n,r,o,s,i){const c=function(e,t){const n=wi(t)
if(!a(n))throw new Error(`Unable to map ${t.build()} to a media api url`)
return new hH(e).withIdOfType(n,RN).includingAdditionalPlatforms(E(e)).includingRelationships(yi(e)).includingAttributes(mi(e)).includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes(De(e)).attributingTo(t.build())}(e,t)
Mr(e,c).then(t=>hf(e,t)).then(e=>zZ.createFlowAction(e,$$,t)).then(s,i)}pageRoute(e){return[{protocol:JU,path:`/${dG}/{id}`},{protocol:JU,path:`/${dG}/{developerName}/{id}`},{protocol:JU,path:`/{countryCode}/${dG}/{developerName}/{id}`},{protocol:JU,path:"/{countryCode}/artist/{developerName}/{id}"},{protocol:JU,path:`/${XU}/viewArtist`,query:[LG,`${zG}?`]}]}handleShelf(e,t,n,r,s,i){const a=n[$N],c=JSON.parse(a),l=new hH(e,c.remainingData).includingAdditionalPlatforms(E(e)).includingAttributes(mi(e))
Mr(e,l).then(t=>function(e,t,n){const r=yf(e,n.title,n.developerId,_(t),n.relationship,n.contentType,n.lockupListOptions,n.lockupListOptions.lockupOptions.metricsOptions.pageInformation,n.lockupListOptions.lockupOptions.metricsOptions.locationTracker,n.roomUrl,(0,Yh.isSome)(n.roomUrl))
return r.mergeWhenFetched=!0,!n.hasExistingContent&&o(r.items)&&(r.isHidden=!0),r}(e,t,c)).then(s,i)}shelfRoute(e){return[{protocol:YU,path:`/${dG}/${QU}/{token}`}]}pageType(){return $$}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("DeveloperHrefBuilder")}handlePage(e,t,n,r,o,s,i){const a=n[hV],c=function(e,t){return new hH(e,t).includingAdditionalPlatforms(E(e)).includingAttributes(mi(e)).includingRelationships(yi(e)).includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes(De(e))}(e,a)
Mr(e,c).then(t=>hf(e,t)).then(e=>zZ.createFlowAction(e,$$,t)).then(s,i)}pageRoute(e){return[{protocol:YU,path:`/${dG}/${vG}`,query:[hV]}]}pageType(){return $$}}),_0.registerPageBuilder(L0,new class extends KZ{constructor(){super("DeveloperRoomBuilder")}pageRoute(e){return[{protocol:YU,path:`/${dG}/${iG}/{token}`}]}paginationRoute(e){return[{protocol:YU,path:`${this.paginationPath}`,query:[`${bV}`]}]}generatePageRequest(e,t,n){const o=n[$N],s=JSON.parse(o)
if(r(s))throw new Error(`Unable to map ${t.build()} to a media api url`)
return new hH(e,s.url).withSparseLimit(s.maxPerPage).includingAdditionalPlatforms(E(e)).includingAttributes(mi(e))}renderPage(e,t,n,r){return Uh.context(KM,()=>{const r=n[$N],o=JSON.parse(r),s=Mn(e,pN,`${o.developerId}_${o.relationshipId}`,t)
o.metricsPageInformation=s,o.metricsLocationTracker={rootPosition:0,locationStack:[]}
const i=this.pageWithContent(e,t,o)
return i.title=o.title,this.configurePaginationForPage(i,o,t.next),Fn(e,i,s),i})}generatePaginationRequest(e,t,n,r){var o
const s=r,a=Qe(0,s)
let c
return i(a)?c=new hH(e,a):(null===(o=s.nextHref)||void 0===o?void 0:o.length)>0&&(c=new hH(e,s.nextHref).withSparseLimit(s.maxPerPage)),c.includingAdditionalPlatforms(E(e)).includingAttributes(mi(e)),c}renderPaginatedPage(e,t,n){const r=n,o=i(r.remainingContent),s=this.pageWithContent(e,t,r,!o),a=Xe(0,r)
return this.configurePaginationForPage(s,a,o?r.nextHref:t.next),s}configurePaginationForPage(e,t,n){const r=(null==n?void 0:n.length)>0,o=i(t.remainingContent)
r||o?(t.nextHref=n,t.url=`${this.paginationUrl}?${bV}=${JSON.stringify(t)}`,e.nextPage=t):e.nextPage=null}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(e,t){super("AccountController"),t.exportingService("AccountData",{fetchAccountLinks:async t=>Ld(e)})}handlePage(e,t,n,r,o,s,i){i(new Error(KN))}pageRoute(e){return[]}pageType(){return D$}}(L0,M0)),_0.registerPageBuilder(L0,new class extends zZ{constructor(e,t){super("PersonalizationTransparencyBuilder"),t.exportingService(lm,{fetchGenericAccount:async t=>await xd(e,t.url)})}handlePage(e,t,n,r,o,s,i){(async function(e,t,n){let r,o
if(e.bag.personalizedRecommendationsToggleEnabled){o=AR
const t=await Md(e),n=Nd(e)
r=new SQ(t,n)}else o=gF,r=w(n.enabled)?await Md(e):Nd(e)
return zZ.createFlowAction(r,o,t)})(e,t,n).then(s,i)}pageRoute(e){return[{protocol:YU,path:`/${mG}/${yG}`,query:["enabled?"]},{path:`${yG}`,query:["enabled?"]}]}pageType(){return gF}}(L0,M0)),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("DynamicUIBuilder")}pageType(){return GR}handlePage(e,t,n,r,o,s,i){const a=new nU(GR)
a.pageUrl=t.toString(),a.referrerUrl=t.build()
const c=new JH
if(e.bag.arcadeDownloadPacksCIPDeeplinkIntegrationEnabled&&e.featureFlags.isEnabled(DE)&&Pi(e,e.bag.arcadeDownloadPackRolloutRate)){const e=new nU(y_),t=lL
e.pageData=t,e.presentationContext=vN,c.carrierLinkSuccessAction=e}a.pageData=c,s(a)}pageRoute(e){const t=e.bag.dynamicUIRegexStrings,n=[]
for(const e of t)n.push(new RegExp(e,"i"))
return[{regex:n}]}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("WebUIPageBuilder")}pageType(){return VR}handlePage(e,t,n,r,o,s,i){const a=new nU(VR)
a.pageUrl=t.toString(),s(a)}pageRoute(e){const t=e.bag.webViewRegexStrings,n=[]
for(const e of t)n.push(new RegExp(e,"i"))
return[{regex:n}]}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("FinancePageBuilder")}pageType(){return D$}handlePage(e,t,n,r,o,s,i){const a=new nU(tN)
a.pageUrl=t.toString(),s(a)}pageRoute(e){const t=e.bag.financeUIRegexStrings,n=[]
for(const e of t)n.push(new RegExp(e,"i"))
return[{regex:n}]}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("StorefrontChangeController")}handlePage(e,t,n,r,o,s,i){const a={url:t.toString(),signingStyle:IM}
e.network.fetch(a).then(e=>{s(null)},i)}pageRoute(e){return[{protocol:JU,path:`/${XU}/resetAndRedirect`}]}pageType(){return D$}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("ShowAccountPageBuilder")}pageType(){return D$}handlePage(e,t,n,r,o,s,i){let a,c=[]
{a=dE
const e=new nU(gF)
e.presentationContext=vN,e.animationBehavior=wF,c=[e]}const l=new rU("updates")
l.actions=c,s(l)}pageRoute(e){return[{hostName:"showAccountPage"},{hostName:"showPurchasesPage"}]}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("ShowSubscriptionPageBuilder")}pageType(){return D$}handlePage(e,t,n,r,o,s,i){s(new nU(tN,e.bag.manageSubscriptionsUrl))}pageRoute(e){return[{hostName:"showSubscriptionsPage"}]}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("ShowUpdatesPageBuilder")}pageType(){return D$}handlePage(e,t,n,r,o,s,i){const a=new rU("updates")
if(e.client.deviceType!==H$){const e=new nU(gF)
e.presentationContext=vN,e.animationBehavior=wF,a.actions=[e]}s(a)}pageRoute(e){return[{hostName:"showUpdatesPage"},{path:"updates"},{path:"{countryCode}/updates"},{query:[`${YG}=updates`]}]}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("TabSelectionBuilder")}pageType(){return D$}handlePage(e,t,n,r,o,s,i){var a
const c=t.pathComponents(),l=c.length-1
let u,d
u=l>=0?c[l]:t.query[CF],null!=u&&this.currentDeviceSupportsUrlAction(e,u)&&(d=new rU(u),d.popToRoot=null!==(a=t.query.popToRoot===qF)&&void 0!==a&&a),void 0===d&&(d=new rU(L$)),s(d)}pageRoute(e){const t=[L$,rL,q$,sL,gM,Vk,jk,Hk,FR,F$,oL],n=[]
for(const e of t){const t=`${YG}=${e}`,r=`${e}`
n.push({query:[t]}),n.push({path:r}),n.push({path:`{countryCode}/${r}`})}return n}currentDeviceSupportsUrlAction(e,t){return!![L$,q$,rL,F$,c$].includes(t)}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("PassbookBuilder")}pageType(){return D$}handlePage(e,t,n,r,o,s,i){const a=this.assemblePassbookRoomURL(e,t).build()
e.required(gQ).fetchAction(e,a,o).then(s,i)}pageRoute(e){return[{query:[`${YG}=passbook`]}]}assemblePassbookRoomURL(e,t){let n=e.bag.passbookMainURL
return null!=n&&typeof n===y$||(n="https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewFeature?id=717384713&mt=8"),new nj(n)}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("LibraryLink")}pageType(){return D$}handlePage(e,t,n,r,o,s,i){const a=`https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewGenre?id=${t.query.g}&mt=8`
e.required(gQ).fetchAction(e,a,o).then(s,i)}pageRoute(e){return[{query:[`${YG}=library-link`]}]}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("ContentLink")}pageType(){return $$}handlePage(e,t,n,o,i,a,c){r(d(n,mV))?c(new Error(`Unhandled search url: ${t}`)):e.network.fetch({url:t.build(),method:o_}).then(n=>{this.hasGotoURLInResponse(e,n)?a(new RU):s(n.url)?e.required(gQ).fetchAction(e,n.url,i).then(a,c):c(new Error(`Unhandled search url: ${t}`))}).catch(()=>{c(new Error(`Unhandled search url: ${t}`))})}pageRoute(e){return[{hostName:"search.itunes.apple.com",path:"WebObjects/MZContentLink.woa/wa/link",query:[mV]}]}hasGotoURLInResponse(e,t){const n=t.body
if(o(n))return!1
try{const t=g(e.plist.parse(n)),r=d(t,cS),o=d(t,lS)
return r===uS&&o.length>0}catch{return!1}}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("LongUrlBuilder")}pageType(){return D$}handlePage(e,t,n,r,o,a,c){const l=t.query[lE];(null==l?void 0:l.length)>0?e.network.fetch({url:l,method:o_,signingStyle:IM}).then(t=>{let n
const r=t.headers["Content-Type"]
if(t.ok&&t.redirected&&s(t.url))n=t.url
else{if(t.ok&&l!==t.url)return void a(new RU)
if(t.ok&&i(r)&&-1!==r.toLowerCase().indexOf("text/xml")){const r=g(e.plist.parse(t.body)),o=d(r,cS),s=d(r,lS)
o===uS&&s&&(n=s)}}(null==n?void 0:n.length)>0?e.required(gQ).fetchAction(e,n,o).then(a,c):c(new Error(`Unable to map long url for: ${l}`))},e=>{c(new Error(`Unable to fetch long url: ${l}`))}):c(new Error("Original url is missing when creating deep-link for checkForLongUrl."))}pageRoute(e){return[{query:[`${YG}=checkForLongUrl`]}]}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("WatchCategoryBuilder")}pageType(){return D$}handlePage(e,t,n,r,o,s,i){if(e.client.deviceType!==U$)return void i(new Error(`Unsupported url for current platform: ${t}`))
const a=e.bag.watchAppsGroupingURL
e.required(gQ).fetchAction(e,a,o).then(e=>{const t=new rU(q$)
t.actions=[e],s(t)},i)}pageRoute(e){return[{query:[`${YG}=watchCategory`]}]}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("ExperimentLink")}pageType(){return D$}handlePage(e,t,n,r,o,s,i){const a={url:t.toString()}
e.network.fetch(a).then(e=>{if(e.status>=200&&e.status<300){const e=new IU(T$)
e.title="You have been enrolled in the AB test",e.message=`Test ${t.query.ab2} is now active on your device.`,e.buttonTitles=["OK"],e.buttonActions=[new rU(kF)],s(e)}else i(new Error(`unexpected response status: ${e.status} from ${e.url}`))}).catch(i)}pageRoute(e){return[{protocol:JU,hostName:"xp.apple.com",path:"register",query:["ab2"]}]}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("FallbackActionBuilder")}handlePage(e,t,n,s,i,a,c){(async function(e,t,n){var s
const i=t.query[CF]
switch(i){case gF:const n=new nU(tN)
n.presentationContext=vN,n.animationBehavior=cx
const a=t.query[lE]
return a?n.pageUrl=a:t.query[ig]?n.pageUrl=nj.fromComponents(null,i,null,{continuation:t.query[ig]}).toString():n.pageUrl=i,await Promise.resolve(n)
case ag:const c=new nU(tN)
return c.presentationContext=vN,c.animationBehavior=cx,c.pageUrl=function(e){let t=e.bag.createAccountUrl
return(r(t)||typeof t!==y$)&&(t=PI),new nj(t)}(e).build(),await Promise.resolve(c)
case uE:let l,u=[]
{l=dE
const e=new nU(gF)
e.presentationContext=vN,e.animationBehavior=wF
const t=new nU(cg)
t.animationBehavior=wF,u=[e,t]}const d=new rU(l)
return d.actions=u,await Promise.resolve(d)
case fE:const f=t.query[lE]
if(f.length>0){const t={url:f,signingStyle:IM}
return e.network.fetch(t),await Promise.resolve(new RU)}return await Promise.reject(new Error("Original url is missing when creating deep-link for checkForPreorders."))
case u_:const p=new nU(tN)
p.presentationContext=vN,p.animationBehavior=cx
const h=new nj(i)
return t.query.code&&t.query.code.length>0&&h.param("code",t.query.code),p.pageUrl=h.build(),await Promise.resolve(p)
case d_:const w=new nU(tN)
return w.presentationContext=vN,w.animationBehavior=cx,w.pageUrl=i,await Promise.resolve(w)
case lg:const g=new nU(tN)
return g.presentationContext=vN,g.animationBehavior=cx,g.pageUrl="charity",await Promise.resolve(g)
case c$:let m=t.query.term
if(m||(m=null!==(s=t.query.q)&&void 0!==s?s:t.query[TI]),m&&m.length>0){if(m=m.replace(/\+/g," ").trim(),o(m))return await Promise.reject(new Error("Empty search term."))
const t=Ge(e,ff(e,{term:m,origin:NR})).toString(),n=new SY(m,m,t,NR)
{const e=new nU(c$)
return e.pageData=n,await Promise.resolve(e)}}{const e=new rU(c$)
return await Promise.resolve(e)}}return await Promise.reject(new Error(`FlowAction was not able to be created for this action URL: ${t}`))})(e,t).then(a,c)}pageRoute(e){return[{query:[`${YG}=account`]},{query:[`${YG}=signup`]},{query:[`${YG}=purchased`]},{query:[`${YG}=checkForPreorders`]},{query:[`${YG}=redeem`]},{query:[`${YG}=gift`]},{query:[`${YG}=donate`]},{query:[`${YG}=search`]}]}pageType(){return D$}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("MultiplexingBuilder")}pageType(){return D$}handlePage(e,t,n,r,o,s,i){const a=new hH(e).withIdOfType(n.id,TR)
Mr(e,a).then(async t=>await this.actionFromMultiplexResponse(e,t)).then(s,i)}pageRoute(e){return[{protocol:JU,path:"WebObjects/MZStore.woa/wa/viewFeature",query:[LG]}]}async actionFromMultiplexResponse(e,t){const n=p(t,"results.target"),r=p(t,"results.target-link")
return n?await this.targetDataToAction(e,n):r?await this.targetLinkDataToAction(r):null}async targetDataToAction(e,t){const n=d(t,RD)
if(!n)return null
const r=hi(e,n)
return await e.required(gQ).fetchAction(e,r,null)}async targetLinkDataToAction(e){const t=d(e,b$),n=new nj(t),r=this.addProtocolToURLIfNeeded(n).toString()
return await Promise.resolve(new sU(r,!1))}addProtocolToURLIfNeeded(e){return e.protocol||(e.protocol=Gk),e}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("GameCenterProfileLinkController")}defaultTab(e){return F$}pageType(){return D$}handlePage(e,t,n,r,o,s,i){let a=!1
if(e.host.clientIdentifier===xB)a=!0
else for(const t of e.bag.tabsStandard)if("ocelot"===d(t,"id")){a=!0
break}const c=new rU(a?F$:rL),l=n[LG]||"GameCenter.localPlayer"
c.actions.push(new xU(l)),s(c)}pageRoute(e){return[{identifier:"gameCenterProfile",path:"/gameCenterProfile",query:[`${LG}?`]}]}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("NotificationSettingsLinkController")}pageType(){return D$}handlePage(e,t,n,r,o,s,i){s(new nU(am))}pageRoute(e){const t=[]
return t.push({path:"notifications/settings"}),t}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(e,t){super("MSOBuilder"),t.exportingService("MSOData",{fetchProviderData:async t=>await ep(e,t.providerAdamId),fetchPage:async t=>await tp(e,t)})}handlePage(e,t,n,r,o,s,i){const a=function(e){const t=e.availableAdamIds
return t?t.split(","):[]}(n),c=t.removeParam("availableAdamIds"),l=function(e,t){return np(e,wi(t))}(e,c)
Mr(e,l).then(t=>rp(e,t,a)).then(e=>zZ.createFlowAction(e,AD,t)).then(s,i)}pageRoute(e){return[{protocol:JU,path:`/{countryCode}/${gG}/{appName}/{id}`,query:["availableAdamIds?"]},{protocol:JU,path:`/${gG}/{providerName}/{id}`,query:["availableAdamIds?"]},{protocol:JU,path:`/{countryCode}/${gG}/{id}`,query:["availableAdamIds?"]},{protocol:JU,path:`/${gG}/{id}`,query:["availableAdamIds?"]},{protocol:JU,path:`/${gG}`,query:[LG,"availableAdamIds?"]},{protocol:JU,path:`{countryCode}/${gG}`,query:[LG,"availableAdamIds?"]}]}handleShelf(e,t,n,r,o,s){const i=n[$N],a=JSON.parse(i),c=new hH(e,a.remainingContent).includingAdditionalPlatforms(E(e)).includingAttributes([w$,o$,OF])
Mr(e,c).then(t=>function(e,t,n){const r=_(t),o=n
o.remainingContent=[]
const s={lockupOptions:{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},artworkUseCase:kl(0,n.preferredShelfContentType)},contentUnavailable:function(e,t){return o.remainingContent=et(0,o.remainingContent,t),o.remainingContent.push(r[t]),!1}},i=new rH(n.preferredShelfContentType)
return i.shouldFilterApps=n.shouldFilter,i.items=ml(e,r,s),i.mergeWhenFetched=!0,i.url=op(o),i}(e,t,a)).then(o,s)}shelfRoute(e){return[{protocol:YU,path:`/${gG}/${QU}/{token}`}]}pageType(){return AD}}(L0,M0)),_0.registerPageBuilder(L0,new class extends zZ{constructor(e,t){super("InAppPurchaseInstallController"),t.exportingService(CP,{fetchInstallPage:async t=>await Xf(e,t.url)})}handlePage(e,t,n,r,o,s,i){const a=n[LG],c=n[HV],l=new hH(e).withIdOfType(c,QF)
Mr(e,l,{}).then(t=>{const n=function(e,t,n){const r={pageId:n||"",pageType:"IAPInstallPage",parentId:ku(t)}
return new sQ(r)}(0,a,c),r=D(t)
let o
const s={metricsOptions:{pageInformation:n,locationTracker:{rootPosition:0,locationStack:[]}},artworkUseCase:1}
c&&r&&(o=cl(e,r,s),o.theme=R$)
const i=oe(r,C$)
let l
a&&i&&(l=al(e,i,s))
const u=new lH
u.isComplete=!0,u.lockup=o,u.parentLockup=l
const d=ft(e,r)
return u.preInstallOfferDescription=Kn(e,d),function(e,t,n){Fn(e,t,n)}(e,u,n),u}).then(e=>zZ.createFlowAction(e,Tb,t)).then(s,i)}pageRoute(e){return[{protocol:YU,path:`/${cG}/${tG}`,query:[`${LG}`,`${HV}?`]}]}pageType(){return Tb}}(L0,M0)),_0.registerPageBuilder(L0,new class extends KZ{constructor(){super("RoomBuilder")}generatePageRequest(e,t,n){let r=t.query.fcId
if(this.isValidRoomId(r)||(r=n.id),!this.isValidRoomId(r))throw new Error(`Unable to map ${t.build()} to a media api url`)
return new hH(e).withIdOfType(r,JD).includingMacOSCompatibleIOSAppsWhenSupported(!0)}prepareRequest(e,t,n,r){super.prepareRequest(e,t,n,r),t.includingMacOSCompatibleIOSAppsWhenSupported(!0)}renderPage(e,t,n,r){return Uh.context(KM,()=>{const n=D(t),r=ne(n,V$),o=Mn(e,pN,n.id,t),s=new ZZ
s.remainingContent=r.data,s.url=this.paginationUrl,s.shouldFilter=!z(n,mO),s.metricsPageInformation=o,s.metricsLocationTracker={rootPosition:0,locationStack:[]}
const i=W(n,nN)
s.preferredShelfContentType=this.preferredShelfStyleForFcKind(Number(i)),s.clientIdentifierOverride=xt(0,n),s.title=W(n,WM)
const a=this.pageWithContent(e,r,s)
return a.title=s.title,Fn(e,a,o),a})}pageRoute(e){return[{protocol:JU,path:`/${XU}/${iG}`,query:[NG]},{protocol:JU,path:"/WebObjects/MZStoreElements.woa/wa/recommendationsSeeAll"},{protocol:JU,path:"{apiVersion}/editorial/{countryCode}/rooms/{id}"},{protocol:JU,path:"/{countryCode}/collection/today-view-widgets",query:[NG]},{protocol:JU,path:"/{countryCode}/collections/id{id}"}]}isValidRoomId(e){return a(e)}preferredShelfStyleForFcKind(e){return null==e?null:431===e?gO:null}}),_0.registerPageBuilder(L0,new class extends KZ{constructor(){super("RecommendationRoomBuilder")}generatePageRequest(e,t,n){const r=wi(t),o=n[IV]
if(!this.isValidId(r))throw new Error(`Unable to map ${t.build()} to a media api url. Missing id.`)
if(!this.isValidId(o))throw new Error(`Unable to map ${t.build()} to a media api url. Missing grouping.`)
return new hH(e).withIdOfType(r,XE).addingQuery(N_,o).includingMacOSCompatibleIOSAppsWhenSupported(!0)}renderPage(e,t,n){return Uh.context(KM,()=>{const r=D(t),o=ne(r,V$),s=n[IV],i=Mn(e,pN,`${r.id}-${s}`,t),a=new ZZ
a.remainingContent=o.data,a.url=this.paginationUrl,a.shouldFilter=!z(r,mO),a.metricsPageInformation=i,a.metricsLocationTracker={rootPosition:0,locationStack:[]},a.title=W(r,z$)
const c=this.pageWithContent(e,o,a)
return c.title=a.title,Fn(e,c,i),c})}pageRoute(e){return[{protocol:JU,path:"/{countryCode}/apps-for-you/{title}/{id}",query:[IV]},{protocol:JU,path:"/{countryCode}/apps-for-you/{id}",query:[IV]},{protocol:JU,path:"/apps-for-you/{title}/{id}",query:[IV]},{protocol:JU,path:"/apps-for-you/{id}",query:[IV]}]}isValidId(e){return!(r(e)||isNaN(e))}}),_0.registerPageBuilder(L0,new class extends QZ{constructor(){super("AccessoryProtocolRoomBuilder")}pageInformation(e,t,n){return $n(0,"accessory")}generatePageRequest(e,t,n){const r=[]
for(const e of Object.keys(t.query))e.startsWith("id")&&r.push(t.query[e])
return this.requestWithFilter(e,"deviceProtocol",r.join(","))}pageRoute(e){return[{query:[`${YG}=accessoryLookup`]}]}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(){super("CollectionDeepLinkingController")}pageType(){return $$}pageRoute(e){return[{protocol:JU,path:"{countryCode}/{tab}/recommendations",query:["uc","collection-id?","seed-id?"]}]}handlePage(e,t,n,r,o,s,i){const a=n.tab,c=n.uc,l=n["collection-id"],u=n["seed-id"]
let d=new hH(e).forType(OE).addingQuery(z$,a).addingQuery("filter[recoUseCase]",c).includingRelationships([V$]).includingAdditionalPlatforms(E(e))
d.enablingFeature(Fk),(null==l?void 0:l.length)>0&&(d=d.addingQuery(uk,l)),(null==u?void 0:u.length)>0&&(d=d.addingQuery(Hg,u)),Mr(e,d).then(n=>{const r=W(D(n),kD);((null==r?void 0:r.length)>0?this.makeODPPage(e,c,r,n):this.makeCollectionPage(e,c,n)).then(e=>{let n
const r=this.createTabChangeActionForRequest(a),o=new nU($$,t.build())
o.pageData=e,null!=r?(r.actions=[o],n=r):n=o,s(n)}).catch(e=>{i(new Error(`CollectionDeeplinkingController: Failed to create GenericPage for useCase: ${c}`))})}).catch(e=>{i(new Error(`CollectionDeeplinkingController: Failed to fetch Media API data for useCase: ${c}`))})}async makeODPPage(e,t,n,r){const o=new Promise((o,s)=>{ao(e,n,$$).then(n=>{const s=D(r),i=new ZZ
i.title=W(s,WM),i.metricsPageInformation=Mn(e,pN,t,r),i.metricsPageInformation.recoMetricsData=xu(M(r),null,n.recoMetrics),i.shouldFilter=!1,i.metricsLocationTracker={rootPosition:0,locationStack:[]}
const a=this.makePage(e,i,n.dataContainer)
o(a)}).catch(e=>{s(e)})})
return await o}async makeCollectionPage(e,t,n){const r=D(n),o=ne(r,V$),s=new ZZ
return s.url=this.paginationUrl,s.title=W(r,WM),s.metricsPageInformation=Mn(e,pN,t,n),s.metricsPageInformation.recoMetricsData=M(n),s.shouldFilter=!1,s.metricsLocationTracker={rootPosition:0,locationStack:[]},await Promise.resolve(this.makePage(e,s,o))}makePage(e,t,n){return Uh.context("makePage",()=>{const r=t.preferredShelfContentType||JZ,o=new rH(r),s={id:null,kind:null,softwareType:null,targetType:l$,title:t.title,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,idType:NN,recoMetricsData:M(n)}
nn(0,o,s),Fu(0,s,t.title),o.isHorizontal=!1,o.shouldFilterApps=t.shouldFilter
const i=_(n)
t.remainingContent=[],o.items=ml(e,i,{contentUnavailable:(e,n)=>(t.remainingContent=et(0,i,n),!0),lockupOptions:{metricsOptions:{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker},clientIdentifierOverride:t.clientIdentifierOverride,artworkUseCase:kl(0,r)}})
const a=new cH([o])
return a.title=t.title,t.remainingContent.length&&(a.nextPage=t),a})}createTabChangeActionForRequest(e){const t=e
return new Set([L$,q$,rL,c$,dE,F$,sL,gM,Vk,jk,Hk,FR,gF,oL]).has(t)?new rU(t):null}handleShelf(e,t,n,r,o,s){s(new Error(bP))}shelfRoute(e){return[]}paginationRoute(e){return[{protocol:YU,path:`${this.paginationPath}`}]}handlePagination(e,t,n,r,o,s,i){Uh.context(`${this.builderClass}.handlePagination`,()=>{const n=o,r=new hH(e,n.remainingContent)
if(!r)return void i(new Error(`Could not construct media API request for: ${t}`))
r.includingAdditionalPlatforms(E(e))
const a=[w$,o$,iF,hF]
e.appleSilicon.isSupportEnabled&&a.push(NF),r.includingAttributes(a),r.usingCustomAttributes(De(e)),r.attributingTo(t.build()),Mr(e,r).then(t=>{s(this.makePage(e,n,t))}).catch(e=>{i(e)})})}}),_0.registerPageBuilder(L0,new class extends zZ{constructor(e,t){super("UserEngagementController"),t.exportingService("AppStoreEngagement",{fetchEngagementTask:async t=>await Kf(e,t),fetchBadgingTask:async t=>await Qf(e,t)})}handlePage(e,t,n,r,o,s,i){i(new Error(KN))}pageRoute(e){return[]}pageType(){return D$}}(L0,M0)),_0.registerPageBuilder(L0,new class extends zZ{constructor(e,t){super("WidgetController"),t.exportingService("WidgetData",{fetchTodayWidget:async t=>await bh(e,t)})}handlePage(e,t,n,r,o,s,i){i(new Error(KN))}pageRoute(e){return[]}pageType(){return D$}}(L0,M0)),_0.registerPageBuilder(L0,new class extends zZ{constructor(e,t){super("AppEventsController"),t.exportingService("AppEvents",{updateAppEventNotification:async t=>await Bd(e,t)})}handlePage(e,t,n,r,o,s,i){i(new Error(KN))}pageRoute(e){return[]}pageType(){return D$}}(L0,M0)),_0.registerPageBuilder(L0,new class extends zZ{constructor(e,t){super("MetricsLinterController"),t.exportingService("Metrics",{async lintEvent(t){const n=it(e).makeEvent(e,t.fields)
return await Promise.resolve(n)}})}handlePage(e,t,n,r,o,s,i){i(new Error(KN))}pageRoute(e){return[]}pageType(){return D$}}(L0,M0)),_0.registerPageBuilder(L0,new class extends zZ{constructor(e,t){super("CompleteCollectionController"),t.exportingService("CMCPersonalizationData",{fetchPersonalizedOfferContext:async t=>await of(e,t.offerToken)})}handlePage(e,t,n,r,o,s,i){i(new Error(KN))}pageRoute(e){return[]}pageType(){return D$}}(L0,M0)),_0.registerPageBuilder(L0,new class extends zZ{constructor(e,t){super("PurchaseDecorationController"),t.exportingService(PP,{decoratePurchase:async t=>sf(e,t.intent)})}handlePage(e,t,n,r,o,s,i){i(new Error(KN))}pageRoute(e){return[]}pageType(){return D$}}(L0,M0)),_0.registerPageBuilder(L0,new class extends zZ{constructor(e,t){super("ArcadePurchaseDecorationController"),t.exportingService(PP,{decorateArcadePurchase:async t=>await rf(e,t.intent)})}handlePage(e,t,n,r,o,s,i){i(new Error(KN))}pageRoute(e){return[]}pageType(){return D$}}(L0,M0)),_0.registerPageBuilder(L0,new class extends zZ{constructor(e,t){super("CancelPreorderController"),t.exportingService("Preorder",{cancelPreorder:async t=>await sp(e,t)})}handlePage(e,t,n,r,o,s,i){i(new Error(KN))}pageRoute(e){return[]}pageType(){return D$}}(L0,M0)),_0.registerPageBuilder(L0,new class extends zZ{constructor(e,t){super("IconLookupController"),t.exportingService("ContentData",{fetchIconArtwork:async t=>await af(e,t.adamIds)})}handlePage(e,t,n,r,o,s,i){i(new Error(KN))}pageRoute(e){return[]}pageType(){return D$}}(L0,M0)),(0,Mh.exportBootstrap)(function(e){return x0.register(new _Q),x0.register(new AQ),x0.register(new PQ),x0.register(new wX),x0.register(new lX),x0.register(new uX),x0.register(new fX),x0.register(new TX),x0.register(new AX),x0.register(new vX),x0.register(new R0),x0.register(new D0),x0.register(new p0),x0.register(new GX),x0.register(new zX),x0.register(new UX),x0.register(new xQ),x0.register(new mQ),x0.register(new yQ),x0.register(new bX),x0.register(new VX),x0.register(new TQ),x0.register(new qX),x0.register(new WX),x0.register(new MQ),x0.register(new PX),x0.register(new IX),x0.register(new SX),x0.register(new a0),x0.register(new d0),x0.register(new f0),x0.register(new n0),x0.register(new YX),x0.register(new vQ),x0.register(new g0),x0.register(new m0),x0.register(new T0),x0.register(new P0),x0.register(new NQ),x0.register(new k0),M0})})()})()

//# sourceMappingURL=main.js.map