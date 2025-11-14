(()=>{function e(r){var o,i=n[r]
return void 0!==i?i.exports:(o=n[r]={exports:{}},t[r].call(o.exports,o,o.exports,e),o.exports)}var t={172:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(7691),t)},230:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.demoteByEngagements=void 0,t.demoteByEngagements=function(e,t){return[...e]}},2305:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},3756:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},3745:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(2305),t),o(n(3756),t)},7691:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(3745),t),o(n(230),t)},9100:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
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
const r=n(2450),o=n(4395),i=n(3907),s=n(1222)
t.IntentDispatcher=class{constructor(){this.dispatchableMap={}}register(e){if((0,r.isNothing)(e.$intentKind))throw new Error("Dispatcher cannot register a controller without an $intentKind")
if(e.$intentKind in this.dispatchableMap)throw new Error(`Dispatcher already has a controller registered for ${e.$intentKind}`)
this.dispatchableMap[e.$intentKind]=e}async dispatch(e,t){if("$static"===e.$kind){const t=Reflect.get(e,"$data")
if((0,r.isNothing)(t))throw new Error("StaticIntent<R> contains no data")
return t}const n=this.dispatchableMap[e.$kind]
if((0,r.isNothing)(n)||!(0,o.isIntentController)(n))throw new Error(`No controller registered to handle ${e.$kind}`)
const a=e.$pageIntentInstrumentation,c=t.optional(s.net)
if((0,r.isSome)(a)&&(0,r.isSome)(c)){const r=new i.ProxiedNetwork(c,a),o=t.adding(s.net,r)
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
Object.defineProperty(t,"__esModule",{value:!0}),o(n(8346),t),o(n(129),t)},5542:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(5827),t),o(n(1721),t),o(n(9031),t),o(n(447),t),o(n(2024),t),o(n(2450),t)},6418:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.valueAsNumber=t.valueAsString=t.valueAsBoolean=void 0
const r=n(2450),o=n(4172)
t.valueAsBoolean=function(e,t="coercible",n){if(!(0,r.isSome)(e))return e
if("boolean"==typeof e)return e
if("string"==typeof e){if("true"===e)return!0
if("false"===e)return!1}const i=Boolean(e)
switch(t){case"strict":o.context("asBoolean",()=>{o.unexpectedType("coercedValue","boolean",e,n)})
break
case"coercible":if((0,r.isNothing)(i))return o.context("asBoolean",()=>{o.unexpectedType("coercedValue","boolean",e,n)}),null}return i},t.valueAsString=function(e,t="coercible",n){if(!(0,r.isSome)(e))return e
if("string"==typeof e)return e
const i="object"==typeof e?null:String(e)
switch(t){case"strict":o.context("asString",()=>{o.unexpectedType("coercedValue","string",e,n)})
break
case"coercible":(0,r.isNothing)(i)&&o.context("asString",()=>{o.unexpectedType("coercedValue","string",e,n)})}return i},t.valueAsNumber=function(e,t="coercible",n){if(!(0,r.isSome)(e))return e
if("number"==typeof e)return e
const i=Number(e)
switch(t){case"strict":o.context("asNumber",()=>{o.unexpectedType("coercedValue","number",e,n)})
break
case"coercible":if(isNaN(i))return o.context("asNumber",()=>{o.unexpectedType("coercedValue","number",e,n)}),null}return i}},2506:(e,t,n)=>{function r(e){if(Array.isArray(e))return e
switch(typeof e){case"string":{const t=i[e]
if((0,o.isSome)(t))return t
{const t=Object.freeze(e.split("."))
return i[e]=t,t}}case"number":case"symbol":return[e]
default:throw new TypeError(`${e.toString()} is not a KeyPath`)}}Object.defineProperty(t,"__esModule",{value:!0}),t.keyPathContains=t.keyPathEndsWith=t.keyPathStartsWith=t.keyPathsEqual=t.isKeyPathThis=t.thisKeyPath=t.keysOf=void 0
const o=n(2450),i={}
t.keysOf=r,t.thisKeyPath=Object.freeze([]),t.isKeyPathThis=function(e){return Array.isArray(e)&&0===e.length},t.keyPathsEqual=function(e,t){if(e===t)return!0
const n=r(e),o=r(t)
if(n.length!==o.length)return!1
for(let e=0,t=n.length;e<t;e+=1)if(n[e]!==o[e])return!1
return!0},t.keyPathStartsWith=function(e,t){if(e===t)return!0
{const n=r(e)
return 0!==n.length&&n[0]===t}},t.keyPathEndsWith=function(e,t){if(e===t)return!0
{const n=r(e)
return 0!==n.length&&n[n.length-1]===t}},t.keyPathContains=function(e,t){return e===t||r(e).includes(t)}},6853:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ObjectCursor=void 0
const r=n(2450),o=n(2879),i=n(2506),s=n(7454)
t.ObjectCursor=class{constructor(e){this.values=[e],this.keyPaths=[i.thisKeyPath],this.savedDepths=[]}get currentValue(){return this.values[this.values.length-1]}get currentKeyPath(){return this.keyPaths[this.keyPaths.length-1]}interject(e,t){this.values.push(e),this.keyPaths.push(t)}reuse(e,t=i.thisKeyPath){this.values.length=0,this.values.push(e),this.keyPaths.length=0,this.keyPaths.push(t),this.savedDepths.length=0}moveTo(e){const t=(0,s.traverse)(this.currentValue,e)
return this.values.push(t),this.keyPaths.push(e),t}moveBack(){const e=this.values.length
if(1===e)throw new Error("Cannot move back past the root of a cursor")
const t=this.savedDepths.length
if(t>0&&e<=this.savedDepths[t-1])throw new Error("Cannot move back past the most recent saved state")
this.values.pop(),this.keyPaths.pop()}saveState(){this.savedDepths.push(this.values.length)}restoreState(){const e=this.savedDepths.pop()
if((0,r.isNothing)(e))throw new Error("Calls to restoreState must balance previous calls to saveState")
this.values.length=e,this.keyPaths.length=e}clone(){const e=(0,o.shallowCloneOf)(this)
return e.values=this.values.slice(),e.keyPaths=this.keyPaths.slice(),e.savedDepths=this.savedDepths.slice(),e}}},4409:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ObjectReader=void 0
const r=n(2450),o=n(2879),i=n(6418),s=n(2506),a=n(6853),c=n(7454),l=new Map
class u{constructor(e){this._cursor=new a.ObjectCursor(e)}get currentKeyPath(){return this._cursor.currentKeyPath}has(e){return(0,s.keyPathEndsWith)(this._cursor.currentKeyPath,e)||(0,r.isSome)(this.get(e))}select(e,t=!1){return!t&&(0,s.keyPathsEqual)(this._cursor.currentKeyPath,e)||this._cursor.moveTo(e),this}deselect(){return this._cursor.moveBack(),this}saveSelection(){return this._cursor.saveState(),this}restoreSelection(){return this._cursor.restoreState(),this}get(e=s.thisKeyPath){return(0,s.isKeyPathThis)(e)?this._cursor.currentValue:(0,c.traverse)(this._cursor.currentValue,e)}asBoolean(e=s.thisKeyPath,t="coercible"){return(0,i.valueAsBoolean)(this.get(e),t,String(e))}asNumber(e=s.thisKeyPath,t="coercible"){return(0,i.valueAsNumber)(this.get(e),t,String(e))}asString(e=s.thisKeyPath,t="coercible"){return(0,i.valueAsString)(this.get(e),t,String(e))}*[Symbol.iterator](){const e=this.get()
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
t=n}return t}}},4172:(e,t,n)=>{function r(e){return Array.isArray(e)?"array":null===e?"null":typeof e}function o(e,t,n,o){u({type:"badType",expected:t,actual:`${r(n)} (${n})`,objectPath:(0,d.isSome)(o)&&o.length>0?o:"<this>",contextNames:a(),recoveryAction:e,stack:(new Error).stack})}function i(e){return!(0,d.isNothing)(e)&&(Object.prototype.hasOwnProperty.call(e,"$incidents")||Object.isExtensible(e))}function s(e){f.nameStack.push(e)}function a(){return 0===f.nameStack.length?["<empty stack>"]:f.nameStack.slice(0)}function c(){f.nameStack.length,f.nameStack.pop()}function l(e,t,n){let r,i=null;(0,d.isSome)(n)&&n.length>0&&(i=e,f.suppressedIncidentPaths.push(n))
try{s(e),r=t()}catch(e){throw e.hasThrown||(o("defaultValue","no exception",e.message),e.hasThrown=!0),e}finally{e===i&&f.suppressedIncidentPaths.pop(),c()}return r}function u(e){f.suppressedIncidentPaths.includes(e.objectPath)||f.incidents.push(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.unexpectedNull=t.catchingContext=t.context=t.recordValidationIncidents=t.endContext=t.getContextNames=t.beginContext=t.messageForRecoveryAction=t.isValidatable=t.unexpectedType=t.extendedTypeof=void 0
const d=n(2450)
t.extendedTypeof=r,t.unexpectedType=o,t.isValidatable=i,t.messageForRecoveryAction=function(e){switch(e){case"coercedValue":return"Coerced format"
case"defaultValue":return"Default value used"
case"ignoredValue":return"Ignored value"
default:return"Unknown"}}
const f={nameStack:Array(),incidents:Array(),suppressedIncidentPaths:Array()}
t.beginContext=s,t.getContextNames=a,t.endContext=c,t.recordValidationIncidents=function(e){i(e)&&(e.$incidents=f.incidents),f.incidents=[],f.nameStack=[],f.suppressedIncidentPaths=[]},t.context=l,t.catchingContext=function(e,t,n){let r=null
try{r=l(e,t)}catch(e){r=null,(0,d.isSome)(n)&&(r=n(e))}return r},t.unexpectedNull=function(e,t,n){u({type:"nullValue",expected:t,actual:"null",objectPath:(0,d.isSome)(n)&&n.length>0?n:"<this>",contextNames:a(),recoveryAction:e,stack:(new Error).stack})}},3647:(e,t,n)=>{function r(e,t,n,r){const o="click"
return u({...n,eventType:o,targetType:t,targetId:e},r,o)}function o(e,t){return r("back","button",{...e,actionType:"back"},t)}function i(e,t,n){const r="page"
return u({...e,eventType:r,...t},n,r)}function s(e,t,n,r,o,i){const s="search",a={...o,eventType:s,term:e,targetType:t,actionType:n}
return(0,f.isSome)(r)&&(a.actionUrl=r),u(a,i,s)}function a(e,t,n=4){const r="impressions"
return u({...e,eventType:r,impressionQueue:"data-metrics",eventVersion:n},t,r)}function c(e,t){const n="media"
return u({...e,eventType:n},t,n)}function l(e,t,n,r){const o="click"
return u({...n,eventType:o,targetType:t,targetId:e},r,o)}function u(e,t,n){return{fields:e,includingFields:t.defaultIncludeRequests[n],excludingFields:t.defaultExcludeRequests[n],topic:d(e,t.defaultTopic),shouldFlush:!!(0,f.isSome)(t.shouldFlush)&&t.shouldFlush(e)}}function d(e,t){const n=e.topic
return(0,f.isSome)(n)?n:t}Object.defineProperty(t,"__esModule",{value:!0}),t.createMetricsMediaClickData=t.createMetricsMediaData=t.createMetricsImpressionsData=t.createMetricsSearchData=t.createMetricsPageData=t.createMetricsBackClickData=t.createMetricsClickData=t.MediaClickEventBuilder=t.MediaEventBuilder=t.ImpressionsEventBuilder=t.SearchEventBuilder=t.PageEventBuilder=t.BackClickEventBuilder=t.ClickEventBuilder=t.EventBuilder=void 0
const f=n(2450)
class p{constructor(e){this.configuration=e,this.eventFields={}}withEventFields(e){return this.eventFields=e,this}withConfiguration(e){return this.configuration=e,this}withDefaultTopic(e){return this.configuration={...this.configuration,defaultTopic:e},this}withDefaultIncludeRequests(e){return this.configuration={...this.configuration,defaultIncludeRequests:e},this}withDefaultExcludeRequests(e){return this.configuration={...this.configuration,defaultExcludeRequests:e},this}withShouldFlush(e){return this.configuration={...this.configuration,shouldFlush:e},this}}t.EventBuilder=p,t.ClickEventBuilder=class extends p{constructor(e){super(e.configuration),this.targetId=e.targetId,this.targetType=e.targetType}withTargetId(e){return this.targetId=e,this}withTargetType(e){return this.targetType=e,this}build(){return r(this.targetId,this.targetType,this.eventFields,this.configuration)}},t.BackClickEventBuilder=class extends p{build(){return o(this.eventFields,this.configuration)}},t.PageEventBuilder=class extends p{constructor(e){super(e),this.timingMetrics={}}withTimingMetrics(e){return this.timingMetrics=e,this}build(){return i(this.eventFields,this.timingMetrics,this.configuration)}},t.SearchEventBuilder=class extends p{constructor(e){super(e.configuration),this.term=e.term,this.targetType=e.targetType,this.actionType=e.actionType,this.actionUrl=null}withTerm(e){return this.term=e,this}withTargetType(e){return this.targetType=e,this}withActionType(e){return this.actionType=e,this}withActionUrl(e){return this.actionUrl=e,this}build(){return s(this.term,this.targetType,this.actionType,this.actionUrl,this.eventFields,this.configuration)}},t.ImpressionsEventBuilder=class extends p{constructor(){super(...arguments),this.impressionsEventVersion=4}withImpressionsEventVersion(e){return this.impressionsEventVersion=e,this}build(){return a(this.eventFields,this.configuration,this.impressionsEventVersion)}},t.MediaEventBuilder=class extends p{build(){return c(this.eventFields,this.configuration)}},t.MediaClickEventBuilder=class extends p{constructor(e){super(e.configuration),this.targetId=e.targetId,this.targetType=e.targetType}withTargetId(e){return this.targetId=e,this}withTargetType(e){return this.targetType=e,this}build(){return l(this.targetId,this.targetType,this.eventFields,this.configuration)}},t.createMetricsClickData=r,t.createMetricsBackClickData=o,t.createMetricsPageData=i,t.createMetricsSearchData=s,t.createMetricsImpressionsData=a,t.createMetricsMediaData=c,t.createMetricsMediaClickData=l},8535:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EventLinter=void 0
const r=n(4409),o=n(2450),i=n(7771)
t.EventLinter=class{constructor(e){this.options=Object.freeze(e)}get defaultTopic(){return this.options.defaultTopic}applyDeResolutionRules(e,t){const n=new r.ObjectReader(e)
for(const r of t){const t=n.asNumber(r.fieldName)
if((0,o.isNothing)(t))continue
let s=r.magnitude;(0,o.isNothing)(s)&&(s=1048576)
let a=r.significantDigits
if((0,o.isNothing)(a)&&(a=2),s<=0||a<0){e[r.fieldName]=Number.NaN
continue}const c=t/s
e[r.fieldName]=i.reduceSignificantDigits(c,a)}}decorateCommonEventFields(e,t){const n=new r.ObjectReader(e),i=this.options.configuration,s=i.baseFields(t);(0,o.isSome)(s)&&Object.assign(e,s),e.clientBuildType=this.options.environment.buildType,e.resourceRevNum=this.options.environment.jsVersion,e.xpSendMethod="jet-js"
const a=n.asString("pageType"),c=n.asString("pageId")
if((0,o.isSome)(a)&&(0,o.isSome)(c)&&(0,o.isNothing)(e.page)){const n=i.compoundSeparator(t),r=(0,o.isSome)(n)?(0,o.unwrapOptional)(n):"_"
e.page=`${a}${r}${c}`}const l=i.deResolutionRules(t)
this.applyDeResolutionRules(e,l)}decorateMediaEventEvents(e){const t=new r.ObjectReader(e).asNumber("position");(0,o.isSome)(t)&&(e.position=Math.round(t))}lint(e,t={}){const n=new r.ObjectReader(e),i=n.asString("eventType")
this.options.isLoggingEnabled
const s=JSON.parse(JSON.stringify(e)),a=n.asString("topic"),c=(0,o.isSome)(a)?(0,o.unwrapOptional)(a):this.options.defaultTopic
this.decorateCommonEventFields(s,c),"media"===i&&this.decorateMediaEventEvents(s)
for(const e of this.options.rules)e.apply(s,t)
return{fields:s}}}},8836:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.fetchTimingMetricsBuilderType=t.FetchTimingMetricsBuilder=void 0
const r=n(2450),o=n(900),i=n(2366)
t.FetchTimingMetricsBuilder=class{constructor(){this.metrics=[]}measureParsing(e,t){const n=e.metrics.length>0?[...e.metrics]:[],r=Date.now(),o=t(e),i=Date.now()
return n.length>0&&(n[0].parseStartTime=r,n[0].parseEndTime=i),this.metrics.push(...n),o}measureModelConstruction(e){const t=Date.now(),n=e(),r=Date.now()
return this.saveModelConstructionTimes(t,r),n}async measureModelConstructionAsync(e){const t=Date.now(),n=await e(),r=Date.now()
return this.saveModelConstructionTimes(t,r),n}saveModelConstructionTimes(e,t){this.metrics.length>0?(this.metrics[0].modelConstructionStartTime=e,this.metrics[0].modelConstructionEndTime=t):this.metrics.push({modelConstructionStartTime:e,modelConstructionEndTime:t})}decorate(e){if((0,r.isNothing)(e))throw new Error("Cannot decorate null or undefined")
if("object"!=typeof e)throw new Error("View model to decorate must be an object")
if((0,i.isPromise)(e))throw new Error("Cannot decorate a Promise object")
this.metrics.length>0&&(e.$networkPerformance=this.metrics)}},t.fetchTimingMetricsBuilderType=(0,o.makeMetatype)("jet-engine:fetchTimingMetricsBuilder")},7771:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.reduceSignificantDigits=void 0,t.reduceSignificantDigits=function(e,t){const n=Math.pow(10,t)
return(e>0?Math.floor:Math.ceil)(e/n)*n}},1415:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(3647),t),o(n(8535),t),o(n(8836),t),o(n(6094),t)},6094:(e,t,n)=>{function r(e,t){const n=e.optional(a.fetchTimingMetricsBuilderType)
if((0,s.isSome)(n))return e
if(t)throw new Error("Could not find FetchTimingMetricsBuilder in the object graph")
return e.adding(a.fetchTimingMetricsBuilderType,new a.FetchTimingMetricsBuilder)}async function o(e,t,n){const r=(0,i.inject)(a.fetchTimingMetricsBuilderType,t),o=await r.measureModelConstructionAsync(async()=>{const r=n(e,t)
return await Promise.resolve(r)})
if((0,s.isNothing)(o))throw new Error("model builder function returned null or undefined")
return r.decorate(o),o}Object.defineProperty(t,"__esModule",{value:!0}),t.parseAndBuildModel=t.requestAndBuildModel=void 0
const i=n(9100),s=n(2450),a=n(8836)
t.requestAndBuildModel=async function(e,t,n,i){const s=r(t,!0),a=await n(e,s)
return await o(a,s,i)},t.parseAndBuildModel=async function(e,t,n,c){const l=r(t,!1),u=(0,i.inject)(a.fetchTimingMetricsBuilderType,l).measureParsing(e,()=>n(e,l))
if((0,s.isNothing)(u))throw new Error("parser function returned null or undefined")
return await o(u,l,c)}},4789:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},573:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.makeCompoundAction=t.isCompoundAction=void 0,t.isCompoundAction=function(e){return"compoundAction"===(null==e?void 0:e.$kind)},t.makeCompoundAction=function(e,t){return{$kind:"compoundAction",subactions:t,actionMetrics:e}}},9120:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.makeEmptyAction=t.isEmptyAction=void 0,t.isEmptyAction=function(e){return"emptyAction"===(null==e?void 0:e.$kind)},t.makeEmptyAction=function(e){return{$kind:"emptyAction",actionMetrics:e}}},9634:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},5599:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},2170:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},6158:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},9400:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},1235:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(4789),t),o(n(573),t),o(n(9120),t),o(n(9634),t),o(n(5599),t),o(n(2170),t),o(n(6158),t),o(n(9400),t),o(n(4362),t)},4362:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},998:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.makeArtworkURLTemplate=void 0
const r=n(4172),o=n(2450),i=n(1974),s=new RegExp("^({w}|[0-9]+(?:.[0-9]*)?)x({h}|[0-9]+(?:.[0-9]*)?)({c}|[a-z]{2}).({f}|[a-z]+)$")
t.makeArtworkURLTemplate=function(e){if(void 0===new i.URL(e).pathname)return r.context("makeArtworkURLTemplate",()=>{r.unexpectedType("ignoredValue","A valid URL string",e)}),null
const t=e.substring(e.lastIndexOf("/")+1),n=s.exec(t)
return(0,o.isNothing)(n)||5!==n.length?(r.context("makeArtworkURLTemplate",()=>{r.unexpectedType("ignoredValue","A valid artwork URL template ending with {w}x{h}{c}.{f} format",t)}),null):e}},7615:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},6301:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.areEqual=t.luminanceFrom=t.dynamicWith=t.named=t.rgbWith=t.htmlWith=t.Color=void 0
const r=n(2450)
t.Color={fromHex:e=>(0,r.isNothing)(e)?null:{$kind:"html",value:e},fromRGB:(e,t,n,r=1)=>({$kind:"rgb",red:e,green:t,blue:n,alpha:r}),named:e=>({$kind:"named",name:e}),dynamicWith:(e,t,n,r)=>({$kind:"dynamic",lightColor:e,lightHighContrastColor:t,darkColor:n,darkHighContrastColor:r}),luminanceFrom:e=>.2126*e.red+.7152*e.green+.0722*e.blue,areEqual(e,n){if((0,r.isNothing)(e))return(0,r.isNothing)(n)
if((0,r.isNothing)(n))return(0,r.isNothing)(e)
const o=e.$kind,i=n.$kind
if("named"===o&&"named"===i){const t=n
return e.name===t.name}if("rgb"===o&&"rgb"===i){const t=e,r=n
return t.red===r.red&&t.green===r.green&&t.blue===r.blue&&t.alpha===r.alpha}if("dynamic"===o&&"dynamic"===i){const r=e,o=n
return t.Color.areEqual(r.lightColor,o.lightColor)&&t.Color.areEqual(r.lightHighContrastColor,o.lightHighContrastColor)&&t.Color.areEqual(r.darkColor,o.darkColor)&&t.Color.areEqual(r.darkHighContrastColor,o.darkHighContrastColor)}return!1}}
const o=t.Color.fromHex
t.htmlWith=o
const i=t.Color.fromRGB
t.rgbWith=i
const s=t.Color.named
t.named=s
const a=t.Color.dynamicWith
t.dynamicWith=a
const c=t.Color.luminanceFrom
t.luminanceFrom=c
const l=t.Color.areEqual
t.areEqual=l},5827:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
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
return Object.assign(t,e)}},900:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.makeMetatype=void 0,t.makeMetatype=function(e){return{name:e}}},2366:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isPromise=void 0,t.isPromise=function(e){return null!==e&&"object"==typeof e&&"function"==typeof e.then}},1974:(e,t,n)=>{function r(e,t,n){const r=e.indexOf(t)
let o,i=e
if(-1!==r){const s=e.slice(0,r),a=e.slice(r+t.length,e.length)
"prefix"===n?(o=s,i=a):(o=a,i=s)}return{result:o,remainder:i}}Object.defineProperty(t,"__esModule",{value:!0}),t.URL=void 0
const o=n(2450),i=/^([a-z][a-z0-9.+-]*:)(\/\/)?([\S\s]*)/i,s=/([^=?&]+)=?([^&]*)/g,a=["hash","query","pathname","host"]
class c{constructor(e){var t
if(this.query={},(0,o.isNothing)(e))return
let n=e
const s=i.exec(e)
if((0,o.isSome)(s)){let e=s[1]
null!=e&&(e=e.split(":")[0]),this.protocol=null!=e?e:void 0,n=null!==(t=s[3])&&void 0!==t?t:void 0}let l={remainder:n,result:void 0}
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
let i=o
if("pathname"===e){const e=o.length
0!==e&&"/"===r[e-1]||(i+="/")}i+=t,n=i}return this.set(e,n)}param(e,t){return null===e||(void 0===this.query&&(this.query={}),void 0===t?delete this.query[e]:this.query[e]=t),this}removeParam(e){return void 0===e||void 0===this.query||e in this.query&&delete this.query[e],this}path(e){return this.append("pathname",e)}pathExtension(){var e,t
if(void 0===this.pathname)return
const n=null!==(t=null===(e=this.pathname.split("/").filter(e=>e.length>0).pop())||void 0===e?void 0:e.split("."))&&void 0!==t?t:[]
return n.filter(function(e){return""!==e}).length<2?void 0:n.pop()}pathComponents(){return void 0===this.pathname?[]:this.pathname.split("/").filter(e=>e.length>0)}build(){return this.toString()}toString(){let e=""
return void 0!==this.protocol&&(e+=this.protocol+"://"),void 0!==this.username&&(e+=encodeURIComponent(this.username),void 0!==this.password&&(e+=":"+encodeURIComponent(this.password)),e+="@"),void 0!==this.host&&(e+=this.host,void 0!==this.port&&(e+=":"+this.port)),void 0!==this.pathname&&(e+=this.pathname),void 0!==this.query&&0!==Object.keys(this.query).length&&(e+="?"+c.toQueryString(this.query)),void 0!==this.hash&&(e+="#"+this.hash),e}static queryFromString(e){const t={}
let n=s.exec(e)
for(;null!==n&&n.length>=3;){const r=decodeURIComponent(n[1].replace(/\+/g," ")),o=decodeURIComponent(n[2].replace(/\+/g," "))
t[r]=o,n=s.exec(e)}return t}static toQueryString(e){let t="",n=!0
for(const r of Object.keys(e)){n||(t+="&"),n=!1,t+=encodeURIComponent(r)
const o=e[r]
null!==o&&o.length>0&&(t+="="+encodeURIComponent(o))}return t}static from(e){return new c(e)}static fromComponents(e,t,n,r,o){const i=new c
return i.protocol=e,i.host=t,i.pathname=n,i.query=null!=r?r:{},i.hash=o,i}}t.URL=c},6034:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){var t,n
if(e&&e.__esModule)return e
if(t={},null!=e)for(n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n)
return o(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.fetchAugmentedData=void 0
const s=i(n(581))
t.fetchAugmentedData=async function(e,t,n,r,o){const i=n(e,t,o)
if(null==i)return await Promise.resolve({originalData:t,additionalData:null})
const a=Array.from(i),c=[]
for(const t of a){const n=r(e,t)
if(s.isNull(n)){const e=a.indexOf(t)
a.splice(e,1)}else c.push(n)}return await Promise.all(c).then(e=>{const n=new Map
for(const[t,r]of a.entries()){const o=e[t]
n.set(r,o)}return{originalData:t,additionalData:n}})}},8371:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(6762),t),o(n(6034),t),o(n(264),t),o(n(5917),t),o(n(5658),t),o(n(4625),t),o(n(695),t)},377:function(e,t,n){function r(e,t,n){return p.isNull(e)?null:p.asDictionary(e.attributes,t,n)}function o(e,t,n="coercible"){return p.isNull(e)?null:p.asString(e.attributes,t,n)}function i(e,t,n="coercible"){if(p.isNull(e))return null
const r=p.asString(e.attributes,t,n)
return(0,f.isNothing)(r)?null:new Date(r)}function s(e){return!p.isNull(p.asDictionary(e,"attributes"))}function a(e){const t=p.asDictionary(e,"meta")
if((0,f.isNothing)(t))throw new h.MissingFieldError(e.id,"meta")
return t}function c(e,t){let n
return n=Array.isArray(e)?e:[e],Array.isArray(t)?n.push(...t):n.push(t),n}var l=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),u=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),d=this&&this.__importStar||function(e){var t,n
if(e&&e.__esModule)return e
if(t={},null!=e)for(n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&l(t,e,n)
return u(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.concatObjectPaths=t.requiredMetaAttributeAsNumber=t.requiredMetaAttributeAsString=t.requiredMeta=t.requiredAttributeAsDictionary=t.requiredAttributeAsDate=t.requiredAttributeAsString=t.attributeAllowsNondefaultTreatmentInNondefaultPage=t.attributeKeyAsCustomAttributeKey=t.isNotHydrated=t.hasAttributes=t.attributeAsNumber=t.attributeAsBooleanOrFalse=t.attributeAsBoolean=t.attributeAsDate=t.metaAsString=t.attributeAsString=t.attributeAsArrayOrEmpty=t.attributeAsInterface=t.attributeAsDictionary=void 0
const f=n(2450),p=d(n(581)),h=d(n(1636))
t.attributeAsDictionary=r,t.attributeAsInterface=function(e,t,n){return r(e,t,n)},t.attributeAsArrayOrEmpty=function(e,t){return p.isNull(e)?[]:p.asArrayOrEmpty(e.attributes,t)},t.attributeAsString=o,t.metaAsString=function(e,t,n="coercible"){return p.isNull(e)?null:p.asString(e.meta,t,n)},t.attributeAsDate=i,t.attributeAsBoolean=function(e,t,n="coercible"){return p.isNull(e)?null:p.asBoolean(e.attributes,t,n)},t.attributeAsBooleanOrFalse=function(e,t){return!p.isNull(e)&&p.asBooleanOrFalse(e.attributes,t)},t.attributeAsNumber=function(e,t,n="coercible"){return p.isNull(e)?null:p.asNumber(e.attributes,t,n)},t.hasAttributes=s,t.isNotHydrated=function(e){return!s(e)},t.attributeKeyAsCustomAttributeKey=function(e){return w[e]},t.attributeAllowsNondefaultTreatmentInNondefaultPage=function(e){return"customArtwork"===e}
const w={artwork:"customArtwork",screenshotsByType:"customScreenshotsByType",promotionalText:"customPromotionalText",videoPreviewsByType:"customVideoPreviewsByType",customScreenshotsByTypeForAd:"customScreenshotsByTypeForAd",customVideoPreviewsByTypeForAd:"customVideoPreviewsByTypeForAd"}
t.requiredAttributeAsString=function(e,t){const n=o(e,t)
if((0,f.isNothing)(n))throw new h.MissingFieldError(e.id,c("attributes",t))
return n},t.requiredAttributeAsDate=function(e,t){const n=i(e,t)
if((0,f.isNothing)(n))throw new h.MissingFieldError(e.id,c("attributes",t))
return n},t.requiredAttributeAsDictionary=function(e,t){const n=r(e,t)
if((0,f.isNothing)(n))throw new h.MissingFieldError(e.id,c("attributes",t))
return n},t.requiredMeta=a,t.requiredMetaAttributeAsString=function(e,t){const n=a(e),r=p.asString(n,t)
if((0,f.isNothing)(r))throw new h.MissingFieldError(e.id,c("meta",t))
return r},t.requiredMetaAttributeAsNumber=function(e,t){const n=a(e),r=p.asNumber(n,t)
if((0,f.isNothing)(r))throw new h.MissingFieldError(e.id,c("meta",t))
return r},t.concatObjectPaths=c},1180:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){var t,n
if(e&&e.__esModule)return e
if(t={},null!=e)for(n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n)
return o(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.BagWrapper=void 0
const s=n(5542),a=i(n(1222)),c=n(581)
t.BagWrapper=class{constructor(e){this.bag=e.required(a.bag)}get language(){return this.bag.string("language")}get mediaCountryCode(){return this.bag.string("countryCode")}get mediaHost(){return this.bag.url("apps-media-api-host")}get mediaPreviewHost(){return this.bag.string("apps-media-api-preview-host")}get mediaRealmHost(){return this.bag.string("notification-settings-media-api-host")}get mediaApiLanguage(){const e=this.bag.string("language-tag")
return(0,s.isSome)(e)?e:this.bag.string("language")}get edgeEndpoints(){const e=this.bag.array("apps-media-api-edge-end-points")
return void 0===e?[]:(0,c.asArrayOrEmpty)((0,c.asJSONValue)(e))}get mediaEdgeSearchHost(){return this.bag.string("apps-media-api-search-edge-host")}get redirectUrlWhitelistedQueryParams(){let e=(0,c.asArrayOrEmpty)((0,c.asJSONValue)(this.bag.array("processRedirectUrl/whitelistedQueryParams")))
return(0,c.isNullOrEmpty)(e)&&(e=["affC","adId","advp","at","ct","itsct","itscg","itscc","itcCt","its_qt","ls","partnerId","pt","qtkid","uo"]),e}}},8172:function(e,t,n){function r(e){return c.isDefinedNonNull(e.attributes)}var o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){var t,n
if(e&&e.__esModule)return e
if(t={},null!=e)for(n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n)
return i(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.metricsFromMediaApiObject=t.dataCollectionFromResultsListContainer=t.isDataCollectionPartiallyHydrated=t.isDataCollectionHydrated=t.isDataHydrated=t.dataCollectionFromDataContainer=t.dataFromDataContainer=t.requiredStringID=void 0
const a=n(2450),c=s(n(581))
n(5917),t.requiredStringID=function(e){const t=c.asString(e,"id")
if((0,a.isNothing)(t))throw new Error(`Data.id '${e.id}' is not a string.`)
return t},t.dataFromDataContainer=function(e){const t=c.asArrayOrEmpty(e,"data")
return t.length,1!==t.length?null:t[0]},t.dataCollectionFromDataContainer=function(e){return c.asArrayOrEmpty(e,"data")},t.isDataHydrated=r,t.isDataCollectionHydrated=function(e){for(let t=e.length-1;t>=0;t-=1)if(!r(e[t]))return!1
return!0},t.isDataCollectionPartiallyHydrated=function(e){for(const t of e)if(r(t))return!0
return!1},t.dataCollectionFromResultsListContainer=function(e){return c.asArrayOrEmpty(e,"results.contents")},t.metricsFromMediaApiObject=function(e){return c.asDictionary(e,"meta.metrics")}},1636:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MissingFieldError=void 0
class n extends Error{constructor(e,t){super(),this.dataId=e,this.attributePath=t}}t.MissingFieldError=n},6762:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),o(n(377),t),o(n(1180),t),o(n(8172),t),o(n(4285),t),o(n(1289),t),o(n(264),t),o(n(581),t),o(n(4030),t),o(n(1636),t)},4285:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},1289:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},264:function(e,t,n){function r(e){switch(host.platform){case"iOS":return"iPad"===host.deviceModelFamily?"ipad":"iphone"
case"macOS":return"mac"
case"tvOS":return"appletv"
case"watchOS":return"watch"
case"xrOS":return"realityDevice"
default:return null}}var o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){var t,n
if(e&&e.__esModule)return e
if(t={},null!=e)for(n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n)
return i(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.Request=t.defaultPlatformForClient=void 0
const a=s(n(581))
t.defaultPlatformForClient=r,t.Request=class{constructor(e,t){if(this.contentsResourceTypes=new Set,this.ids=new Set,this.seeds=new Set,this.relationshipIncludes=new Set,this.relationshipIncludesOnly=new Set,this.attributeIncludes=new Set,this.platform=null,this.additionalPlatforms=new Set,this.additionalQuery={},this.relationshipLimits={},this.searchTerm=null,this.searchTypes=[],this.context=null,this.useCustomAttributes=!1,this.shouldOmitAutomaticRelationship=!1,this.objectGraph=e,this.platform=r(),!a.isNullOrEmpty(t))if("string"==typeof t)this.href=t
else if(Array.isArray(t)){const e=new Set
for(const n of t)e.add(n.type),this.ids.add(n.id)
1===e.size?this.resourceType=e.values().next().value:e.size>1&&(this.resourceType="contents",this.contentsResourceTypes=e)}}forType(e){return this.resourceType=e,this}withIds(e){for(const t of e)a.isDefinedNonNullNonEmpty(t)&&this.ids.add(t)
return this}withSeeds(e){for(const t of e)a.isDefinedNonNullNonEmpty(t)&&this.seeds.add(t)
return this}includingRelationships(e){for(const t of e)this.relationshipIncludes.add(t)
return this}includingOnlyRelationships(e){for(const t of e)this.relationshipIncludesOnly.add(t)
return this}includingScopedRelationships(e,t){null==this.scopedRelationshipIncludes&&(this.scopedRelationshipIncludes=new Map)
let n=this.scopedRelationshipIncludes.get(e)
null==n&&(n=new Set)
for(const e of t)n.add(e)
return this.scopedRelationshipIncludes.set(e,n),this}includingMetaKeys(e,t){null==this.metaIncludes&&(this.metaIncludes=new Map)
let n=this.metaIncludes.get(e)
null==n&&(n=new Set)
for(const e of t)n.add(e)
return this.metaIncludes.set(e,n),this}includingAssociateKeys(e,t){null==this.associateIncludes&&(this.associateIncludes=new Map)
let n=this.associateIncludes.get(e)
null==n&&(n=new Set)
for(const e of t)n.add(e)
return this.associateIncludes.set(e,n),this}includingRelationshipsForUpsell(e){const t="marketing-items"
if(e){null==this.scopedRelationshipIncludes&&(this.scopedRelationshipIncludes=new Map)
let e=this.scopedRelationshipIncludes.get("editorial-items")
null==e&&(e=new Set),e.add(t),this.scopedRelationshipIncludes.set("editorial-items",e)}else this.relationshipIncludes.add(t)
{null==this.metaIncludes&&(this.metaIncludes=new Map)
let e=this.metaIncludes.get("marketing-items")
null==e&&(e=new Set),e.add("metrics"),this.metaIncludes.set("marketing-items",e)}return this}includingAttributes(e){for(const t of e)this.attributeIncludes.add(t)
return this}includingScopedAttributes(e,t){null==this.scopedAttributeIncludes&&(this.scopedAttributeIncludes=new Map)
let n=this.scopedAttributeIncludes.get(e)
null==n&&(n=new Set)
for(const e of t)n.add(e)
return this.scopedAttributeIncludes.set(e,n),this}includingAdditionalPlatforms(e){for(const t of e)this.additionalPlatforms.add(t)
return this}includingScopedAvailableIn(e,t){null==this.scopedAvailableInIncludes&&(this.scopedAvailableInIncludes=new Map)
let n=this.scopedAvailableInIncludes.get(e)
null==n&&(n=new Set)
for(const e of t)n.add(e)
return this.scopedAvailableInIncludes.set(e,n),this}includingScopedSparseLimit(e,t){return null==this.scopedSparseLimit&&(this.scopedSparseLimit=new Map),this.scopedSparseLimit.set(e,t),this}addingQuery(e,t){return this.additionalQuery[e]=t,this}addingRelationshipLimit(e,t){return this.relationshipLimits[e]=t,this}withSearchTerm(e){return this.searchTerm=e,this}searchingOverTypes(e){for(const t of e)this.searchTypes.push(t)
return this}addingContext(e){return this.context=e,this}format(e){return this.responseFormat=e,this}usingCustomAttributes(e){return this.useCustomAttributes=e,this}alwaysUseIdsAsQueryParam(e){return this.useIdsAsQueryParam=e,this}attributingTo(e){return this.canonicalUrl=e,this}withFilter(e,t){return this.filterType=e,this.filterValue=t,this}withLimit(e){return this.limit=e,this}withSparseLimit(e){return null!==e&&(this.sparseLimit=e),this}withSparseCount(e){return null!==e&&(this.sparseCount=e),this}enablingFeature(e){return null==this.enabledFeatures&&(this.enabledFeatures=[]),this.enabledFeatures.push(e),this}enablingFeatures(e){return null==this.enabledFeatures&&(this.enabledFeatures=[]),this.enabledFeatures.push(...e),this}asPartialResponseLimitedToFields(e){return this.fields=e,this}includesResourceType(e){return this.resourceType===e||!!a.isDefinedNonNull(this.contentsResourceTypes)&&this.contentsResourceTypes.has(e)}}},581:function(e,t,n){function r(e){return i(e)?null:Array.isArray(e)?e.join("."):e}function o(e,t,n){if(null==e)return n
if(s(t))return e
let r
if("string"==typeof t){if(r=w[t],s(r)){if(!t.includes(".")){const r=e[t]
return null!=r?r:n}r=t.split("."),w[t]=r}}else r=t
let o=e
for(const e of r)if(o=o[e],null==o)return n
return o}function i(e){return null==e}function s(e){return i(e)||0===Object.keys(e).length}function a(e){return null!=e}function c(e,t,n="coercible"){const s=o(e,t,null)
if(i(s))return s
if("string"==typeof s)return s
{const e="object"==typeof s?null:String(s)
switch(n){case"strict":p.context("asString",()=>{p.unexpectedType("coercedValue","string",s,r(t))})
break
case"coercible":i(e)&&p.context("asString",()=>{p.unexpectedType("coercedValue","string",s,r(t))})}return e}}function l(e,t,n){const s=o(e,t,null)
return s instanceof Object&&!Array.isArray(s)?s:(i(s)||p.context("asDictionary",()=>{p.unexpectedType("defaultValue","object",s,r(t))}),a(n)?n:null)}var u=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),d=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),f=this&&this.__importStar||function(e){var t,n
if(e&&e.__esModule)return e
if(t={},null!=e)for(n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&u(t,e,n)
return d(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.asJSONData=t.asJSONValue=t.asBoolean=t.asInterface=t.asDictionary=t.asNumber=t.asDate=t.asString=t.asBooleanOrFalse=t.asArrayOrEmpty=t.isArrayDefinedNonNullAndEmpty=t.isNumber=t.isDefinedNonNullNonEmpty=t.isDefinedNonNull=t.isNullOrEmpty=t.isNull=t.traverse=t.objectPathToString=void 0
const p=f(n(4172)),h=n(2450)
t.objectPathToString=r
const w={}
t.traverse=o,t.isNull=i,t.isNullOrEmpty=s,t.isDefinedNonNull=a,t.isDefinedNonNullNonEmpty=function(e){return a(e)&&0!==Object.keys(e).length},t.isNumber=function(e){if(i(e))return!1
let t
return t="string"==typeof e?parseInt(e):e,!Number.isNaN(t)},t.isArrayDefinedNonNullAndEmpty=function(e){return a(e)&&0===e.length},t.asArrayOrEmpty=function(e,t){const n=o(e,t,null)
return Array.isArray(n)?n:(i(n)||p.context("asArrayOrEmpty",()=>{p.unexpectedType("defaultValue","array",n,r(t))}),[])},t.asBooleanOrFalse=function(e,t){const n=o(e,t,null)
return"boolean"==typeof n?n:(i(n)||p.context("asBooleanOrFalse",()=>{p.unexpectedType("defaultValue","boolean",n,r(t))}),!1)},t.asString=c,t.asDate=function(e,t,n="coercible"){const r=c(e,t,n)
return(0,h.isNothing)(r)?null:new Date(r)},t.asNumber=function(e,t,n="coercible"){const s=o(e,t,null)
if(i(s)||"number"==typeof s)return s
{const e=Number(s)
switch(n){case"strict":p.context("asNumber",()=>{p.unexpectedType("coercedValue","number",s,r(t))})
break
case"coercible":if(isNaN(e))return p.context("asNumber",()=>{p.unexpectedType("coercedValue","number",s,r(t))}),null}return e}},t.asDictionary=l,t.asInterface=function(e,t,n){return l(e,t,n)},t.asBoolean=function(e,t,n="coercible"){const s=o(e,t,null)
if(i(s))return null
if("boolean"==typeof s)return s
if("string"==typeof s){if("true"===s)return!0
if("false"===s)return!1}const a=Boolean(s)
switch(n){case"strict":p.context("asBoolean",()=>{p.unexpectedType("coercedValue","number",s,r(t))})
break
case"coercible":if(i(a))return p.context("asBoolean",()=>{p.unexpectedType("coercedValue","number",s,r(t))}),null}return a},t.asJSONValue=function(e){if(null==e)return null
switch(typeof e){case"string":case"number":case"boolean":return e
case"object":return Array.isArray(e),e
default:return p.context("asJSONValue",()=>{p.unexpectedType("defaultValue","JSONValue",typeof e)}),null}},t.asJSONData=function(e){return null==e?null:e instanceof Object&&!Array.isArray(e)?e:(p.context("asJSONValue",()=>{p.unexpectedType("defaultValue","object",typeof e)}),null)}},4030:(e,t,n)=>{function r(e,t,n){const r=e.indexOf(t)
let o,i=e
if(-1!==r){const s=e.slice(0,r),a=e.slice(r+t.length,e.length)
"prefix"===n?(o=s,i=a):(o=a,i=s)}return{result:o,remainder:i}}Object.defineProperty(t,"__esModule",{value:!0}),t.URL=void 0
const o=n(2450),i=n(581),s=/^([a-z][a-z0-9.+-]*:)(\/\/)?([\S\s]*)/i,a=/([^=?&]+)=?([^&]*)/g,c=["hash","query","pathname","host"]
class l{constructor(e){if(this.query={},(0,i.isNullOrEmpty)(e))return
let t=e
const n=s.exec(e)
if(null!=n){let e=n[1]
e&&(e=e.split(":")[0]),this.protocol=e,t=n[3]}let o={remainder:t,result:void 0}
for(const e of c){if(!o.remainder)break
switch(e){case"hash":o=r(o.remainder,"#","suffix"),this.hash=o.result
break
case"query":o=r(o.remainder,"?","suffix"),(0,i.isDefinedNonNullNonEmpty)(o.result)&&(this.query=l.queryFromString(o.result))
break
case"pathname":o=r(o.remainder,"/","suffix"),(0,i.isDefinedNonNullNonEmpty)(o.result)&&(this.pathname="/"+o.result)
break
case"host":if(o.remainder){const e=r(o.remainder,"@","prefix"),t=e.result,n=e.remainder
if((0,i.isDefinedNonNullNonEmpty)(t)){const e=t.split(":")
this.username=decodeURIComponent(e[0]),this.password=decodeURIComponent(e[1])}if(n){const e=n.split(":")
this.host=e[0],this.port=e[1]}}break
default:throw new Error("Unhandled case!")}}}set(e,t){if((0,i.isNullOrEmpty)(t))return this
switch("query"===e&&"string"==typeof t&&(t=l.queryFromString(t)),e){case"protocol":this.protocol=t
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
default:this[e]=t}return this}get(e){switch(e){case"protocol":return this.protocol
case"username":return this.username
case"password":return this.password
case"port":return this.port
case"pathname":return this.pathname
case"query":return this.query
case"hash":return this.hash
default:return this[e]}}append(e,t){const n=this.get(e)
let r
if("query"===e)"string"==typeof t&&(t=l.queryFromString(t)),r="string"==typeof n?{existingValue:n,...t}:{...n,...t}
else{let o=n
o||(o="")
let i=o
if("pathname"===e){const e=o.length
e&&"/"===o[e-1]||(i+="/")}i+=t,r=i}return this.set(e,r)}param(e,t){return e?(null==this.query&&(this.query={}),this.query[e]=t,this):this}removeParam(e){return e&&null!=this.query?(void 0!==this.query[e]&&delete this.query[e],this):this}path(e){return this.append("pathname",e)}pathExtension(){var e
if((0,o.isNothing)(this.pathname))return null
const t=null===(e=this.pathname.split("/").filter(e=>e.length>0).pop())||void 0===e?void 0:e.split(".")
return void 0===t||t.filter(e=>""!==e).length<2?null:t.pop()}pathComponents(){return(0,i.isNullOrEmpty)(this.pathname)?[]:this.pathname.split("/").filter(e=>e.length>0)}popPathComponent(){if((0,i.isNullOrEmpty)(this.pathname))return null
const e=this.pathname.slice(this.pathname.lastIndexOf("/")+1)
return 0===e.length?null:(this.pathname=this.pathname.slice(0,this.pathname.lastIndexOf("/")),e)}build(){return this.toString()}toString(){let e=""
return(0,i.isDefinedNonNullNonEmpty)(this.protocol)&&(e+=this.protocol+"://"),this.username&&(e+=encodeURIComponent(this.username),this.password&&(e+=":"+encodeURIComponent(this.password)),e+="@"),(0,i.isDefinedNonNullNonEmpty)(this.host)&&(e+=this.host,this.port&&(e+=":"+this.port)),(0,i.isDefinedNonNullNonEmpty)(this.pathname)&&(e+=this.pathname,e.endsWith("/")&&this.pathname.length>0&&(e=e.slice(0,-1))),null!=this.query&&Object.keys(this.query).length>0&&(e+="?"+l.toQueryString(this.query)),(0,i.isDefinedNonNullNonEmpty)(this.hash)&&(e+="#"+this.hash),e}static queryFromString(e){const t={}
let n=a.exec(e)
for(;null!=n;){const r=decodeURIComponent(n[1]),o=decodeURIComponent(n[2])
t[r]=o,n=a.exec(e)}return t}static toQueryString(e){let t="",n=!0
for(const r of Object.keys(e)){n||(t+="&"),n=!1,t+=encodeURIComponent(r)
const o=e[r];(0,i.isDefinedNonNullNonEmpty)(o)&&o.length&&(t+="="+encodeURIComponent(o))}return t}static from(e){return new l(e)}static fromComponents(e,t,n,r,o){const i=new l
return i.protocol=e,i.host=t,i.pathname=n,i.query=r,i.hash=o,i}}t.URL=l},5917:function(e,t,n){async function r(e,t,n){const r=await e.network.fetch(t)
if(!r.ok)throw Error(`Bad Status code ${r.status} for ${t.url}`)
const o=Date.now(),i=n(r.body),s=Date.now(),c=function(e,t,n){return f.isNull(e)||0===e.length?null:{...e[0],parseStartTime:t,parseEndTime:n}}(r.metrics,o,s)
return f.isDefinedNonNull(c)&&(i[a.timingValues]=c),i[a.requestedUrl]=t.url.toString(),i}function o(e,t){return e.redirectUrlWhitelistedQueryParams.filter(e=>{var n
return f.isDefinedNonNull(null===(n=t.query)||void 0===n?void 0:n[e])})}async function i(e,t,n,r,c={},l=!1,u){var h,v,y
const A=new p.URL(n),T=o(e,A)
for(const e of T)A.removeParam(e)
const b=A.toString()
let S=c.headers
null==S&&(S={}),S.Authorization="Bearer "+r
const P={url:b,excludeIdentifierHeadersForAccount:null!==(h=c.excludeIdentifierHeadersForAccount)&&void 0!==h&&h,alwaysIncludeAuthKitHeaders:null===(v=c.alwaysIncludeAuthKitHeaders)||void 0===v||v,alwaysIncludeMMeClientInfoAndDeviceHeaders:null===(y=c.alwaysIncludeMMeClientInfoAndDeviceHeaders)||void 0===y||y,headers:S,method:c.method,body:c.requestBodyString,timeout:c.timeout},I=await e.network.fetch(P)
try{if(401===I.status||403===I.status){if(l)throw Error("We refreshed the token but we still get 401 from the API")
return t.resetToken(),await t.refreshToken().then(async r=>await i(e,t,n,r,c,!0,u))}if(404===I.status)throw s()
if(!I.ok){const e=new w(`Bad Status code ${I.status} for ${b}, original ${n}`)
throw e.statusCode=I.status,e}const r=t=>{const r=Date.now()
let o
if(f.isNull(t.body)||""===t.body){if(204!==t.status)throw s()
o={}}else o=JSON.parse(t.body)
const i=Date.now()
if(o[a.pageInformation]=f.asJSONData(function(e,t){const n=e.storefrontIdentifier
let r=null
if(f.isDefinedNonNullNonEmpty(n)){const e=n.split("-")
f.isDefinedNonNullNonEmpty(e)&&(r=e[0])}return{serverInstance:t.headers[g],storeFrontHeader:n,language:e.bagLanguage,storeFront:r,environmentDataCenter:t.headers[m]}}(e,t)),t.metrics.length>0){const e={...t.metrics[0],parseStartTime:r,parseEndTime:i}
o[a.timingValues]=e}else{const e={pageURL:t.url,parseStartTime:r,parseEndTime:i}
o[a.timingValues]=e}if(o[a.contentMaxAge]=function(e){const t=Object.keys(e.headers).find(e=>"cache-control"===e.toLowerCase())
if(f.isNull(t)||""===t)return null
const n=e.headers[t]
if(f.isNullOrEmpty(n))return null
const r=n.match(/max-age=(\d+)/)
return f.isNull(r)||r.length<2?null:f.asNumber(r[1])}(t),Array.isArray(o.data)&&f.isArrayDefinedNonNullAndEmpty(o.data)&&!f.asBooleanOrFalse(c.allowEmptyDataResponse))throw s()
return o[a.requestedUrl]=n,o}
return(0,d.isSome)(u)?u.measureParsing(I,r):r(I)}catch(e){if(e instanceof w)throw e
throw new Error(`Error Fetching - filtered: ${b}, original: ${n}, ${e.name}, ${e.message}`)}}function s(){const e=new w("No content")
return e.statusCode=204,e}var a,c=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){var t,n
if(e&&e.__esModule)return e
if(t={},null!=e)for(n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&c(t,e,n)
return l(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.NetworkError=t.redirectParametersInUrl=t.fetchData=t.fetchPlist=t.fetchJSON=t.fetch=t.ResponseMetadata=void 0
const d=n(2450),f=u(n(581)),p=u(n(4030)),h=u(n(695))
!function(e){e.requestedUrl="_jet-internal:metricsHelpers_requestedUrl",e.timingValues="_jet-internal:metricsHelpers_timingValues",e.pageInformation="_jet-internal:metricsHelpers_pageInformation",e.contentMaxAge="_jet-internal:responseMetadata_contentMaxAge"}(a=t.ResponseMetadata||(t.ResponseMetadata={})),t.fetch=r,t.fetchJSON=async function(e,t){return await r(e,t,e=>(0,d.isSome)(e)?JSON.parse(e):{})},t.fetchPlist=async function(e,t){return await r(e,t,n=>{if((0,d.isSome)(n))return e.plist.parse(n)
throw new Error(`Could not fetch Plist, response body was not defined for ${t.url}`)})},t.fetchData=async function(e,t,n,r){const o=h.buildURLFromRequest(e,n).toString(),s=(Date.now(),await t.refreshToken()),c=await i(e,t,o,s,r,!1,e.fetchTimingMetricsBuilder)
return Date.now(),n.canonicalUrl&&(c[a.requestedUrl]=n.canonicalUrl),c},t.redirectParametersInUrl=o
class w extends Error{}t.NetworkError=w
const g="x-apple-application-instance",m="x-apple-application-site"},5658:function(e,t,n){function r(e,t){const n=d.attributeAsDictionary(e,"platformAttributes")
return u.traverse(n,t)}function o(e,t,n){const o=r(e,t)
return u.isNull(o)?null:u.asDictionary(o,n)}function i(e,t,n,o="coercible"){const i=r(e,t)
return u.isNull(i)?null:u.asString(i,n,o)}var s=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){var t,n
if(e&&e.__esModule)return e
if(t={},null!=e)for(n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&s(t,e,n)
return a(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.requiredPlatformAttributeAsDictionary=t.requiredPlatformAttributeAsString=t.platformAttributeAsNumber=t.platformAttributeAsBooleanOrFalse=t.platformAttributeAsBoolean=t.platformAttributeAsString=t.platformAttributeAsArrayOrEmpty=t.platformAttributeAsDictionary=t.hasPlatformAttribute=void 0
const l=n(2450),u=c(n(581)),d=c(n(377)),f=c(n(1636))
t.hasPlatformAttribute=function(e,t){const n=r(e,t)
return u.isDefinedNonNullNonEmpty(n)},t.platformAttributeAsDictionary=o,t.platformAttributeAsArrayOrEmpty=function(e,t,n){const o=r(e,t)
return u.isNull(o)?[]:u.asArrayOrEmpty(o,n)},t.platformAttributeAsString=i,t.platformAttributeAsBoolean=function(e,t,n,o="coercible"){const i=r(e,t)
return u.isNull(i)?null:u.asBoolean(i,n,o)},t.platformAttributeAsBooleanOrFalse=function(e,t,n){const o=r(e,t)
return!u.isNull(o)&&u.asBooleanOrFalse(o,n)},t.platformAttributeAsNumber=function(e,t,n,o="coercible"){const i=r(e,t)
return u.isNull(i)?null:u.asNumber(i,n,o)},t.requiredPlatformAttributeAsString=function(e,t,n){const r=i(e,t,n)
if((0,l.isNothing)(r))throw new f.MissingFieldError(e.id,d.concatObjectPaths(["attributes","platformAttribute",t],n))
return r},t.requiredPlatformAttributeAsDictionary=function(e,t,n){const r=o(e,t,n)
if((0,l.isNothing)(r))throw new f.MissingFieldError(e.id,d.concatObjectPaths(["attributes","platformAttribute",t],n))
return r}},4625:function(e,t,n){function r(e,t){return l.asInterface(e.relationships,t)}function o(e,t){const n=l.asArrayOrEmpty(e.relationships,[t,"data"])
return 0===n.length?null:(n.length,n[0])}function i(e,t){return l.asArrayOrEmpty(e.relationships,[t,"data"])}var s=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){var t,n
if(e&&e.__esModule)return e
if(t={},null!=e)for(n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&s(t,e,n)
return a(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.requiredRelationshipCollectionNonEmpty=t.requiredRelationshipData=t.relationshipViewsCollection=t.relationshipCollection=t.relationshipData=t.relationship=t.hasRelationship=void 0
const l=c(n(581)),u=n(2450),d=c(n(1636))
t.hasRelationship=function(e,t,n=!0){const o=r(e,t)
return!((0,u.isNothing)(o)||n&&0===o.data.length)},t.relationship=r,t.relationshipData=o,t.relationshipCollection=i,t.relationshipViewsCollection=function(e,t){return l.asArrayOrEmpty(e.views,[t,"data"])},t.requiredRelationshipData=function(e,t){const n=o(e,t)
if((0,u.isNothing)(n))throw new d.MissingFieldError(e.id,["relationships",t,"data"])
return n},t.requiredRelationshipCollectionNonEmpty=function(e,t){const n=i(e,t)
if(0===n.length)throw new d.MissingFieldError(e.id,["relationships",t,"data"])
return n}},695:function(e,t,n){function r(e){switch(e){case"apps":case"app-events":case"arcade-apps":case"app-bundles":case"charts":case"contents":case"developers":case"eula":case"in-apps":case"multiple-system-operators":case"user-reviews":case"customers-also-bought-apps-with-download-intent":case"chart-list":default:return"catalog"
case"games/recommendations":return"games/recommendations"
case"categories":case"editorial-items":case"editorial-item-groups":case"editorial-elements":case"groupings":case"multiplex":case"multirooms":case"rooms":case"today":case"collections":return"editorial"
case"ratings":return"ratings"
case"personalization-data":case"reviews":return"me"
case"upsellMarketingItem":case"landing":case"engagement-data":return"engagement"
case"landing:new-protocol":case"recommendations":case"personal-recommendations":return"recommendations"}}var o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){var t,n
if(e&&e.__esModule)return e
if(t={},null!=e)for(n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n)
return i(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.buildURLFromRequest=void 0
const a=n(2450),c=s(n(581)),l=s(n(4030)),u=s(n(377))
t.buildURLFromRequest=function(e,t){var n,o
const i=c.isDefinedNonNullNonEmpty(t.href)?t.href:function(e,t){switch(t){case"games/search":case"games/search-suggestions":return`/v1/games/${r(t)}/${e.mediaCountryCode}`
case"personalization-data":case"reviews":return`/v1/${r(t)}/`
default:return`/v1/${r(t)}/${e.mediaCountryCode}/`}}(e,t.resourceType),s=new l.URL(i)
if(c.isDefinedNonNullNonEmpty(t.resourceType))for(const e of function(e,t){switch(e){case"eula":return void 0===t?[e]:[e,t]
case"landing:new-protocol":case"recommendations":case"searchLanding:see-all":case"search-hints":case"games/recommendations":return[]
case"landing":return void 0===t?["search",e]:["search",e,t]
case"user-reviews":case"customers-also-bought-apps-with-download-intent":case"game-highlights":return["apps"]
case"reviews":return["reviews","apps"]
case"multiplex":return["multiplex"]
case"upsellMarketingItem":return["upsell","marketing-items"]
case"trending-contents":return["search",e]
case"player-highlights":return["players"]
case"search-suggestions":case"games/search":case"games/search-suggestions":case"search-groups":return["search"]
case"chart-list":return["charts"]
default:return[e]}}(t.resourceType,t.targetResourceType))s.append("pathname",e)
if(t.ids.size>1||(0,a.isSome)(t.useIdsAsQueryParam))s.param("ids",Array.from(t.ids).join(","))
else if(1===t.ids.size){const e=t.ids.values().next().value
s.append("pathname",encodeURIComponent(e))}if(t.seeds.size>0&&s.param("seeds",Array.from(t.seeds).join(",")),void 0!==t.resourceType){const e=function(e){switch(e){case"user-reviews":return"reviews"
case"customers-also-bought-apps-with-download-intent":return"view/customers-also-bought-apps-with-download-intent"
case"collections":default:return null
case"searchLanding:see-all":return"view/see-all"
case"search-hints":return"search/suggestions"
case"game-highlights":case"player-highlights":return"view/highlights"
case"games/search":case"search-groups":return"groups"
case"games/search-suggestions":case"search-suggestions":return"suggestions"}}(t.resourceType)
c.isDefinedNonNullNonEmpty(e)&&s.append("pathname",e)}if(s.param("platform",null!==(n=t.platform)&&void 0!==n?n:void 0),t.additionalPlatforms.size>0&&s.param("additionalPlatforms",Array.from(t.additionalPlatforms).sort().join(",")),t.attributeIncludes.size>0||t.useCustomAttributes){let e=Array.from(t.attributeIncludes)
t.useCustomAttributes&&(e=function(e){const t=e.map(e=>{var t
return null!==(t=u.attributeKeyAsCustomAttributeKey(e))&&void 0!==t?t:e})
return t.push("customArtwork"),t}(e)),e.sort(),s.param("extend",e.join(","))}if(c.isDefinedNonNull(t.scopedAttributeIncludes))for(const[e,n]of t.scopedAttributeIncludes.entries())s.param(`extend[${e}]`,Array.from(n).sort().join(","))
if(t.relationshipIncludesOnly.size>0?s.param("includeOnly",Array.from(t.relationshipIncludesOnly).sort().join(",")):t.relationshipIncludes.size>0&&s.param("include",Array.from(t.relationshipIncludes).sort().join(",")),t.shouldOmitAutomaticRelationship&&s.param("omit[resource]","autos"),c.isDefinedNonNull(t.scopedRelationshipIncludes))for(const[e,n]of t.scopedRelationshipIncludes.entries())s.param(`include[${e}]`,Array.from(n).sort().join(","))
if(c.isDefinedNonNull(t.metaIncludes))for(const[e,n]of t.metaIncludes.entries())s.param(`meta[${e}]`,Array.from(n).sort().join(","))
if(c.isDefinedNonNull(t.associateIncludes))for(const[e,n]of t.associateIncludes.entries())s.param(`associate[${e}]`,Array.from(n).sort().join(","))
if(c.isDefinedNonNull(t.scopedAvailableInIncludes))for(const[e,n]of t.scopedAvailableInIncludes.entries())s.param(`availableIn[${e}]`,Array.from(n).sort().join(","))
if(c.isDefinedNonNullNonEmpty(t.fields)){let e=Array.from(t.fields)
t.useCustomAttributes&&(e=function(e){const t=e.map(e=>{var t
return null!==(t=u.attributeKeyAsCustomAttributeKey(e))&&void 0!==t?t:e})
return t}(e)),t.fields.sort(),s.param("fields",e.join(","))}if(c.isDefinedNonNull(t.limit)&&t.limit>0&&s.param("limit",`${t.limit}`),c.isDefinedNonNull(t.sparseLimit)&&s.param("sparseLimit",`${t.sparseLimit}`),c.isDefinedNonNull(t.scopedSparseLimit))for(const[e,n]of t.scopedSparseLimit.entries())s.param(`sparseLimit[${e}]`,String(n))
c.isDefinedNonNull(t.sparseCount)&&s.param("sparseCount",`${t.sparseCount}`)
for(const e of Object.keys(t.relationshipLimits).sort()){const n=t.relationshipLimits[e]
s.param(`limit[${e}]`,`${n}`)}c.isDefinedNonNullNonEmpty(t.additionalQuery)&&s.append("query",t.additionalQuery),c.isDefinedNonNullNonEmpty(t.searchTerm)&&(((0,a.isNothing)(t.resourceType)||"search-hints"!==t.resourceType)&&(s.append("pathname","search"),s.param("bubble[search]",t.searchTypes.join(","))),s.param("term",t.searchTerm)),c.isDefinedNonNullNonEmpty(t.enabledFeatures)&&s.param("with",t.enabledFeatures.join(",")),c.isDefinedNonNullNonEmpty(t.context)&&s.param("contexts",t.context),c.isDefinedNonNullNonEmpty(t.filterType)&&c.isDefinedNonNullNonEmpty(t.filterValue)&&s.param(`filter[${t.filterType}]`,t.filterValue)
const f=e.mediaApiLanguage
return c.isDefinedNonNull(f)&&c.isNull(t.additionalQuery.l)&&s.param("l",f),c.isDefinedNonNullNonEmpty(t.responseFormat)&&s.param("format[resources]",t.responseFormat),s.host=null!==(o=function(e,t,n){var r
const o=null!==(r=t.pathname)&&void 0!==r?r:""
let i=null
return i=n.isStorePreviewRequest?e.mediaPreviewHost:n.isMediaRealmRequest?e.mediaRealmHost:o.includes("search/landing")?-1!==e.edgeEndpoints.indexOf("landing")?e.mediaEdgeHost:e.mediaHost:e.edgeEndpoints.map(e=>o.includes(e)).reduce(d,!1)?o.includes("search")&&!o.includes("view/see-all")?e.mediaEdgeSearchHost:e.mediaEdgeHost:e.mediaHost,c.isNull(i)&&(i="api.apps.apple.com"),i}(e,s,t))&&void 0!==o?o:void 0,s.protocol="https",s}
const d=(e,t)=>e||t}},n={}
e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{function t(e){return r(e)?null:Array.isArray(e)?e.join("."):e}function n(e,t,n){if(null==e)return n
if(!t)return e
let r
if(typeof t===fj){if(r=uV[t],!r){if(!t.includes(".")){const r=e[t]
return null!=r?r:n}r=t.split("."),uV[t]=r}}else r=t
let o=e
for(const e of r)if(o=o[e],null==o)return n
return o}function r(e){return null==e}function o(e){return r(e)||0===Object.keys(e).length}function i(e){return typeof e!==CB&&null!==e}function s(e){return!(0,Ag.isNothing)(e)&&(typeof e===fj||Array.isArray(e)?e.length>0:0!==Object.keys(e).length)}function a(e){if(r(e))return!1
let t
return t=typeof e===fj?parseInt(e):e,!Number.isNaN(t)}function c(e,o){const i=n(e,o,null)
return Array.isArray(i)?i:(r(i)||yg.context("asArrayOrEmpty",()=>{yg.unexpectedType(SG,"array",i,t(o))}),[])}function l(e,t){return u(e,!1,t)}function u(e,o,i){const s=n(e,i,null)
return typeof s===iM?s:(r(s)||yg.context("asBooleanWithDefault",()=>{yg.unexpectedType(SG,iM,s,t(i))}),o)}function d(e,o,i=OG){const s=n(e,o,null)
if(r(s))return s
if(typeof s===fj)return s
{const e=typeof s===IF?null:String(s)
switch(i){case PR:yg.context(nI,()=>{yg.unexpectedType(uF,fj,s,t(o))})
break
case OG:r(e)&&yg.context(nI,()=>{yg.unexpectedType(uF,fj,s,t(o))})}return e}}function f(e,o,i=OG){const s=n(e,o,null)
if(r(s)||typeof s===dF)return s
{const e=Number(s)
switch(i){case PR:yg.context(rI,()=>{yg.unexpectedType(uF,dF,s,t(o))})
break
case OG:if(isNaN(e))return yg.context(rI,()=>{yg.unexpectedType(uF,dF,s,t(o))}),null}return e}}function p(e,o,s){const a=n(e,o,null)
return a instanceof Object&&!Array.isArray(a)?a:(r(a)||yg.context("asDictionary",()=>{yg.unexpectedType(SG,IF,a,t(o))}),i(s)?s:null)}function h(e,t,n){return p(e,t,n)}function w(e,o,i=OG){const s=n(e,o,null)
if(r(s))return null
if(typeof s===iM)return s
if(typeof s===fj){if(s===GG)return!0
if(s===yL)return!1}const a=Boolean(s)
switch(i){case PR:yg.context(oI,()=>{yg.unexpectedType(uF,dF,s,t(o))})
break
case OG:if(r(a))return yg.context(oI,()=>{yg.unexpectedType(uF,dF,s,t(o))}),null}return a}function g(e){if(null==e)return null
switch(typeof e){case fj:case dF:case iM:return e
case IF:return Array.isArray(e),e
default:return yg.context(iI,()=>{yg.unexpectedType(SG,"JSONValue",typeof e)}),null}}function m(e){return null==e?null:e instanceof Object&&!Array.isArray(e)?e:(yg.context(iI,()=>{yg.unexpectedType(SG,IF,typeof e)}),null)}function v(e,t,n){const r=e.indexOf(t)
let o,i=e
if(-1!==r){const s=e.slice(0,r),a=e.slice(r+t.length,e.length)
n===dI?(o=s,i=a):(o=a,i=s)}return{result:o,remainder:i}}function y(e){if(null==e)return e
const t=Object.create(Object.getPrototypeOf(e))
return Object.assign(t,e),t}function A(e,t){return e instanceof t}function T(e){return!(!(0,Ag.isSome)(e.protocol)||-1===Oq.indexOf(e.protocol))}function b(e){const t=e.indexOf("{"),n=e.indexOf("}")
return t>=0&&n>t+1}function S(e){const t=e.indexOf("{"),n=e.indexOf("}")
return t>=0&&n>t?e.substring(t+1,n):e}function P(e,t){const n=t.indexOf("{"),r=e.length-(t.length-(t.indexOf("}")+1))
return n>=0&&r>n?e.substring(n,r):e}function I(e){if(e.props.enabled(v_)&&e.client.isCompanionVisionApp)return JB
switch(e.client.deviceType){case Lj:return sG
case Oj:return cG
case"tv":return PD
case Mj:return Mj
case Fj:return Fj
case wj:return JB
default:return null}}function C(e){switch(e.client.deviceType){case Lj:return 4
case Oj:return 5
case"tv":return 6
case Mj:return 5
case Fj:return 10
default:return null}}function k(e){switch(e.client.deviceType){case Lj:return 9
case Oj:return 12
case"tv":case Mj:return 15
case Fj:return 3
default:return null}}function O(e){switch(e.host.clientIdentifier){case LR:case RL:case jI:return[]
default:{const t=I(e)
return function(e,t){const n=new Set
if(n.add(sG),n.add(cG),n.add(PD),n.add(Mj),n.add(Fj),e.bag.enableVisionPlatform&&n.add(JB),(0,Ag.isSome)(t))for(const e of t)n.delete(e)
return Array.from(n)}(e,(0,Ag.isSome)(t)?new Set([t]):void 0)}}}function E(e){switch(e.client.deviceType){case Lj:return 6
case Oj:return 10
case Mj:return 12
case wj:return 10
default:return 8}}function R(e){let t=null
return e.host.clientIdentifier===KV?t=kG:e.host.clientIdentifier===JV&&(t=Fj),t}function D(e,t){if(o(t))return null
const n=c(t,`meta.associations.${e}.data`)
return(0,Ag.isNothing)(n)?null:[...n]}function _(e,t){const n=c(t,FB)
return n.length>1&&e.console.warn("tried to extract data from container but more than one member present"),1!==n.length?null:n[0]}function L(e){return c(e,FB)}function x(e){const t=XP,r=n(e,Mk)
return e.label===t||i(r)}function M(e){return c(e,KP)}function $(e){return p(e,kO)}function F(e){if((0,Ag.isNothing)(e)||""===e)return null
const t=Gz.exec(e)
return null===t||4!==t.length&&5!==t.length?null:{red:parseInt(t[1],16)/255,green:parseInt(t[2],16)/255,blue:parseInt(t[3],16)/255,alpha:(0,Ag.isSome)(t[4])?parseInt(t[4],16)/255:void 0,type:YB}}function N(e,t,n,r){return{red:e,green:t,blue:n,alpha:r,type:YB}}function B(e){return.2126*e.red+.7152*e.green+.0722*e.blue}function U(e,t=84){if((0,Ag.isNothing)(e))return!1
switch(e.type){case YB:return 100*B(e)<t
case zM:return e.name===OC
default:return!1}}function G(e){return{name:e,type:zM}}function j(e,t){return{lightColor:e,darkColor:t,type:mL}}function V(e,t){return!(0,Ag.isNothing)(e)&&!(0,Ag.isNothing)(t)&&(e.type===YB&&t.type===YB?e.red===t.red&&e.green===t.green&&e.blue===t.blue&&e.alpha===t.alpha:e.type===zM&&t.type===zM?e.name===t.name:e.type===mL&&t.type===mL&&V(e.lightColor,t.lightColor)&&V(e.darkColor,t.darkColor))}function H(e,t,n){return(0,Ag.isNothing)(e)?null:p(e.attributes,t,n)}function W(e,t){return r(e)?[]:c(e.attributes,t)}function q(e,t,n=OG){return r(e)?null:d(e.attributes,t,n)}function z(e,t,n=OG){return r(e)?null:w(e.attributes,t,n)}function Y(e,t){return!r(e)&&l(e.attributes,t)}function J(e,t,n=OG){return r(e)?null:f(e.attributes,t,n)}function K(e){return!r(p(e,tM))}function Z(e){return!K(e)}function Q(e){return wY[e]}function X(e){return e===wL}function ee(e){switch(e){case OR:case rM:case DU:case km:return!0
default:return!1}}function te(e){switch(e){case m$:return m$
case xI:return xI
default:return Ej}}function ne(e,t,n=!0){const r=re(e,t)
return!!r&&!(!r.data||n&&0===r.data.length)}function re(e,t){return i(e)?h(e.relationships,t):null}function oe(e,t){return h(e.views,t)}function ie(e,t,n){const r=c(t.relationships,[n,FB])
return 0===r.length?null:(r.length>1&&e.console.warn(`there was an array of relationships when only the first was asked for in relationship ${n}`),r[0])}function se(e,t,n=!1){return!ne(e,t,!1)&&n?null:c(e.relationships,[t,FB])}function ae(e,t=!1,n=!1,r=0){const o=function(e,t){let n
switch(e.host.clientIdentifier){case LR:case RL:case jI:n=!1
break
default:n=e.client.supportsHEIF}return t?n?px:ZR:n?px:hk}(e,t)
return function(e,t,n=!1,r=0){return new yV(t,t===px?60:70,n)}(0,o,n,r)}function ce(e,t,n=0,r=0,o=null,i=null,s=null){const a=new AV(t,n,r,[ae(e,!1,!1,0)])
return a.backgroundColor=o,a.textColor=i,a.checksum=s,a}function le(e,t){const n=Math.pow(10,t)
return(e>0?Math.floor:Math.ceil)(e/n)*n}function ue(e){throw new Error(`This method should never be called with value: ${e}`)}function de(e,t,r){return e?yg.context(t,()=>{let o=e[_Y],i=null
return o?(i=n(o,t),i||(i=fe(o,t,r))):(o={},e[_Y]=o,i=fe(o,t,r)),i}):null}function fe(e,t,n){const r=n()
return e[t]=r,r}function pe(e,t){return n(H(e,"platformAttributes"),t)}function he(e,t){return s(pe(e,t))}function we(e,t,n){const o=pe(e,t)
return r(o)?null:p(o,n)}function ge(e,t,n){const o=pe(e,t)
return r(o)?[]:c(o,n)}function me(e,t,n,o=OG){const i=pe(e,t)
return r(i)?null:d(i,n,o)}function ve(e,t,n,o=OG){const i=pe(e,t)
return r(i)?null:w(i,n,o)}function ye(e,t,n){const o=pe(e,t)
return!r(o)&&l(o,n)}function Ae(e,t,n,r=!1){return de(t,`dataHasDeviceFamily.${n}`,()=>!(!t||!n)&&-1!==Se(e,t,r).indexOf(n))}function Te(e,t,n,r=!1){var o
return null!==(o=Ae(e,t,n,r))&&void 0!==o&&o&&1===Se(e,t,r).length}function be(e,t,n,r=!1){const o=new Set(Se(e,t,r))
return n.length===o.size&&n.every(e=>o.has(e))}function Se(e,t,n=!1){const r=W(t,iB)
if(0===r.length&&n){const r=se(t,Gj)
if((0,Ag.isSome)(r))for(const t of r){const r=Se(e,t,n)
if(s(r))return r}}return r}function Pe(e,t,n,r,o){if(r||(r=Re(e,t)),(0,Ag.isNothing)(r))return null
let i=we(t,r,n)
return i||(i=H(t,n,o)),i}function Ie(e,t,n,r){const i=null!=r?r:Re(e,t)
if((0,Ag.isNothing)(i))return[]
let s=ge(t,i,n)
return o(s)&&(s=W(t,n)),s}function Ce(e,t,n,r,o=OG){const i=null!=r?r:Re(e,t)
if((0,Ag.isNothing)(i))return null
let s=me(t,i,n,o)
return s||(s=q(t,n,o)),s}function ke(e,t,n,o,i=OG){if(o||(o=Re(e,t)),(0,Ag.isNothing)(o))return null
let s=ve(t,o,n,i)
return r(s)&&(s=z(t,n,i)),s}function Oe(e,t,n,o){if(o||(o=Re(e,t)),(0,Ag.isNothing)(o))return!1
let i=ve(t,o,n)
return r(i)&&(i=Y(t,n)),i}function Ee(e,t,n,o=OG){const i=Re(e,t)
if((0,Ag.isNothing)(i))return null
let s=function(e,t,n,o=OG){const i=pe(e,t)
return r(i)?null:f(i,n,o)}(t,i,n,o)
return r(s)&&(s=J(t,n)),s}function Re(e,t,n){const o="bestAttributePlatformFromData",i=(0,Ag.isSome)(n)?`${o}.${n}`:o
return de(t,i,()=>{const o=be(e,t,[sG,cG,RM],!0),i=Te(e,t,EF),s=Te(e,t,Mj),a=Te(e,t,Fj),c=Te(e,t,JB)
let l=null
if(i?l=$B:s?l=tG:o?l=dj:a?l=Fj:c&&(l=qU),!r(l))return l
const u=function(e,t){const n=De(e)
if(null===n)return[]
switch(n){case dj:return"VisionAppStore"===t||"com.apple.visionproapp"===t?[qU,dj,$B,tG]:[dj,$B,tG,qU]
case tG:return[tG,dj,$B,qU]
case $B:return[$B,dj,tG,qU]
case Fj:return[dj,Fj,tG,qU]
case qU:return[qU,dj,$B,tG]
default:return[n]}}(e,n)
for(const e of u)if(he(t,e))return e
return De(e)})}function De(e){switch(e.client.deviceType){case Lj:case Oj:return dj
case"tv":return $B
case Mj:return tG
case Fj:return Fj
case wj:return qU
default:return null}}function _e(e,t,n,r,o){const i=Q(r)
if((0,Ag.isNothing)(i))return null
const a=Ne(0,Pe(e,t,HC,o),n,i,X(i))
return s(a)?p(a):Pe(e,t,r,o)}function Le(e,t,n,r,o){const i=Q(r)
if((0,Ag.isNothing)(i))return null
const a=Ne(0,Pe(e,t,HC,o),n,i,X(i))
return s(a)?d(a):Ce(e,t,r)}function xe(e,t){var n
const r=e.optional(cH.metatype)
return null===(n=null==r?void 0:r.currentTreatmentForExperiment(t))||void 0===n?void 0:n.identifier}function Me(e){return"3NepyQj01"===xe(e,Cg.ProductPagePreloading)}function $e(e){return e.bag.enableProductPageVariants}function Fe(e,t,r){if(void 0===r&&(r=function(e){const t=function(e){return xe(e,Cg.ProductPageVariants)}(e)
return t}(e)),o(t.id))return
const i={adamID:t.id,productPageId:LY,treatmentPageIdMap:{[LY]:LY},experimentIdMap:{},experimentLocaleMap:{}}
return o(n(t,yU,null))||(function(e,t,r){const i=n(r,"meta.cppData",null)
if(o(i))return
const a=d(i,c$)
s(a)&&(t.productPageId=a)}(0,i,t),function(e,t,r,i,a){const c=n(a,"meta.experimentData",null)
if(o(c))return
const l=n(c,r,null)
if(o(l))return
const u=d(l,JO),f=d(l,db)
let p=null
const h=n(l,"trafficAllocation",null)
p=s(h)?function(e,t,n){if(void 0===n||o(n))return LY
for(const[e,r]of Object.entries(t))if(s(r)&&-1!==r.indexOf(n))return e
return LY}(0,h,i):function(e,t,n){const r=Pe(e,t,`customAttributes.${n}`)
if(o(r))return LY
const i=Object.keys(r)[0]
return o(i)?LY:i}(e,a,r),s(p)&&s(u)&&(t.treatmentPageIdMap[r]=p,t.experimentIdMap[r]=u,s(f)&&(t.experimentLocaleMap[r]=f))}(e,i,LY,r,t)),i}function Ne(e,t,r,s,a){if(o(t))return null
let c
if(r.productPageId!==LY){const e=r.treatmentPageIdMap[LY]
c=a?[`${r.productPageId}.${LY}.${s}`,`${LY}.${e}.${s}`,`${LY}.${LY}.${s}`]:[`${r.productPageId}.${LY}.${s}`,`${LY}.${LY}.${s}`]}else{const e=r.treatmentPageIdMap[LY]
c=[`${LY}.${e}.${s}`,`${LY}.${LY}.${s}`]}for(const e of c){const r=n(t,e)
if(i(r))return r}return null}function Be(e){return(0,Ag.isNothing)(e)||e.productPageId===LY?null:e.productPageId}function Ue(e,t){return Be(Fe(e,t))}function Ge(e,t){const n=Pe(e,t,HC)
return null===n||o(n)?null:Object.keys(n).filter(e=>e!==LY)}function je(e){const t={}
He(e,w_)&&(t[fb]=e.productPageId)
const n=e.treatmentPageIdMap[LY],r=e.experimentIdMap[LY],o=e.experimentLocaleMap[LY]
return He(e,YD)&&(t.pageVariantId=n,t.pageExperimentId=r,t.pageExperimentLocale=o),t}function Ve(e){const t={}
He(e,w_)&&(t[fb]=e.productPageId)
const n=e.treatmentPageIdMap[LY],r=e.experimentIdMap[LY],o=e.experimentLocaleMap[LY]
return He(e,YD)&&(t.variantId=n,t[JO]=r,t[db]=o),t}function He(e,t){if(r(e))return!1
switch(t){case w_:return s(e.productPageId)&&e.productPageId!==LY
case YD:return s(e.experimentIdMap)
default:ue(t)}}function We(e,t,n){for(const r of n){const n=Ue(e,r)
i(n)&&t.addingQuery(`ppid[apps:${r.id}]`,`${n}`)}}function qe(e,t){var n,o,a
const c=t.href&&t.href.length>0?t.href:function(e,t,n,r){switch(n){case uR:case yj:case Qx:return`/v1/${ze(n)}/`
default:const o=(0,Ag.isSome)(r)&&r.length>0?r:e.bag.mediaCountryCode,i=`/v1/${ze(n)}/${o}`
return t?i:`${i}/`}}(e,t.isMixedMediaRequest,t.resourceType,t.countryCodeOverride),l=new kq(c)
if(s(t.resourceType))for(const e of function(e,t){switch(e){case cF:return void 0===t?[e]:[e,t]
case TR:return[]
case hL:return void 0===t?[ej,e]:[ej,e,t]
case fL:return[Gj]
case yj:return[yj,Gj]
case uL:return[uL]
case AB:return[Av,mU]
case ZP:return[ej,e]
case dL:return[Gj]
case pL:case Y_:return[]
case Qx:return[Gj]
default:return[e]}}(t.resourceType,t.targetResourceType))l.append(iU,e)
if(t.isMixedMediaRequest)for(const[e,n]of t.idsByResourceType.entries())l.param(`ids[${e}]`,Array.from(n).sort().join(","))
else if(t.ids.size>1||t.useIdsAsQueryParam)l.param("ids",Array.from(t.ids).sort().join(","))
else if(1===t.ids.size){const e=t.ids.values().next().value
l.append(iU,e)}if(void 0!==t.resourceType){const e=function(e){switch(e){case fL:return yj
case dL:return"view/customers-also-bought-apps-with-download-intent"
case ZB:return Uj
case pL:return cI
case Y_:return"search/suggestions"
default:return null}}(t.resourceType)
s(e)&&l.append(iU,e)}if(l.param($N,null!==(n=t.platform)&&void 0!==n?n:void 0),t.additionalPlatforms.size>0&&l.param("additionalPlatforms",Array.from(t.additionalPlatforms).sort().join(",")),t.attributeIncludes.size>0||t.useCustomAttributes){let e=Array.from(t.attributeIncludes)
t.useCustomAttributes&&(e=function(e){const t=e.map(e=>{var t
return null!==(t=Q(e))&&void 0!==t?t:e})
return t.push(wL),t.push(kx),t}(e)),e.sort(),l.param(PP,e.join(","))}if(t.includeAppBinaryTraitsAttribute&&t.includingScopedAttributes(Gj,[ey]),i(t.scopedAttributeIncludes))for(const[e,n]of t.scopedAttributeIncludes.entries())l.param(`extend[${e}]`,Array.from(n).sort().join(","))
if(t.relationshipIncludes.size>0&&l.param("include",Array.from(t.relationshipIncludes).sort().join(",")),i(t.scopedRelationshipIncludes))for(const[e,n]of t.scopedRelationshipIncludes.entries())l.param(`include[${e}]`,Array.from(n).sort().join(","))
if(i(t.metaIncludes))for(const[e,n]of t.metaIncludes.entries())l.param(`meta[${e}]`,Array.from(n).sort().join(","))
if(i(a=t.viewsIncludes)&&a.size>0&&l.param("views",Array.from(t.viewsIncludes).sort().join(",")),i(t.kindIncludes))for(const[e,n]of t.kindIncludes.entries())l.param(`kinds[${e}]`,Array.from(n).sort().join(","))
if(i(t.associateIncludes))for(const[e,n]of t.associateIncludes.entries())l.param(`associate[${e}]`,Array.from(n).sort().join(","))
if(i(t.scopedAvailableInIncludes))for(const[e,n]of t.scopedAvailableInIncludes.entries())l.param(`availableIn[${e}]`,Array.from(n).sort().join(","))
if(s(t.fields)){let e=Array.from(t.fields)
t.useCustomAttributes&&(e=function(e){const t=e.map(e=>{var t
return null!==(t=Q(e))&&void 0!==t?t:e})
return t}(e)),t.fields.sort(),l.param(_L,e.join(","))}if(i(t.limit)&&t.limit>0&&l.param("limit",`${t.limit}`),i(t.sparseLimit)&&l.param("sparseLimit",`${t.sparseLimit}`),i(t.scopedSparseLimit))for(const[e,n]of t.scopedSparseLimit.entries())l.param(`sparseLimit[${e}]`,String(n))
i(t.sparseCount)&&l.param("sparseCount",`${t.sparseCount}`)
for(const e of Object.keys(t.relationshipLimits).sort()){const n=t.relationshipLimits[e]
l.param(`limit[${e}]`,`${n}`)}s(t.additionalQuery)&&l.append(aB,t.additionalQuery),s(t.searchTerm)&&(((0,Ag.isNothing)(t.resourceType)||t.resourceType!==Y_)&&(l.append(iU,ej),l.param("bubble[search]",t.searchTypes.join(","))),l.param(uN,t.searchTerm)),s(t.enabledFeatures)&&l.param(JL,t.enabledFeatures.join(",")),s(t.context)&&l.param(GN,t.context),s(t.filterType)&&s(t.filterValue)&&l.param(`filter[${t.filterType}]`,t.filterValue)
const u=e.bag.mediaApiLanguage
return i(u)&&r(t.additionalQuery.l)&&l.param("l",u),l.host=null!==(o=function(e,t,n){var o
const i=null!==(o=t.pathname)&&void 0!==o?o:""
let s=null
return s=n.isStorePreviewRequest?e.bag.mediaPreviewHost:n.isMediaRealmRequest?e.bag.mediaRealmHost:i.includes("search/landing")?-1!==e.bag.edgeEndpoints.indexOf(hL)?e.bag.mediaEdgeHost(e):e.bag.mediaHost:n.resourceType===Qx&&(0,Ag.isSome)(e.bag.appDistributionMediaAPIHost)?e.bag.appDistributionMediaAPIHost:n.isMixedMediaRequest&&e.bag.mediaAPICatalogMixedShouldUseEdge?e.bag.mediaEdgeHost(e):e.bag.edgeEndpoints.map(e=>i.includes(e)).reduce(UY,!1)?i.includes(ej)&&!i.includes(cI)?e.bag.mediaEdgeSearchHost:e.bag.mediaEdgeHost(e):e.bag.mediaHost,r(s)&&(s="api.apps.apple.com"),s}(e,l,t))&&void 0!==o?o:void 0,l.protocol=gR,l}function ze(e){switch(e){case Gj:case xj:case kU:case Pj:case EM:case Uj:case eU:case cF:case $G:case e_:case fL:case dL:return sI
case DL:case rU:case kj:case kB:case OD:case PU:case uL:case zx:case u$:case Cj:case ZB:return UI
case IR:return IR
case uR:case yj:return"me"
case AB:case hL:return aI
case TR:case oD:return NU
case bP:return aI
case Qx:return"listing"
default:return sI}}function Ye(e){return r(e)||""===e?null:(-1!==e.indexOf("T")&&(e=e.split("T")[0]),new Date(e.replace(/-/g,"/")))}function Je(e){if(r(e))return null
const t=function(e){return r(e)?null:new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))}(e)
return r(t)?null:t.getTime()}function Ke(e){if(r(e))return null
const t=new Date(e)
return t.setHours(0,0,0,0),t}function Ze(e){return r(e)?null:Qe(e)}function Qe(e){const t=new Date(e.getTime())
return t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t}function Xe(e,t){return r(e)||r(t)?null:Math.ceil((t.getTime()-Qe(e).getTime())/36e5)}function et(e){return null!==GY||(GY={bundleIdFromData:t=>Ce(e,t,KG),isSystemAppFromData:e=>Y(e,dN),isUnsupportedDeletableSystemAppFromData:e=>!1,adamIdFromSystemBundleId(e){}}),GY}function tt(e,t,n=80894){let o=!1
return 2&n&&(o=o||function(e,t){return Oe(e,t,Gm)||Oe(e,t,jm)}(e,t)),4&n&&(o=o||function(e,t){return de(t,"shouldFilterDeletableSystemApp",()=>{const n=et(e)
if(!n.isSystemAppFromData(t))return!1
const r=n.bundleIdFromData(t),o=e.host.deviceModel,s=o.startsWith(qI),a=o.startsWith(Wm)
let c
switch(c=!!xd(e,"12.3")||e.bag.isTVAppEnabled,r){case"com.apple.Bridge":case"com.apple.Passbook":case"com.apple.journal":case VI:case"com.apple.mobilephone":return!s
case"com.apple.Photo-Booth":return!a
case"com.apple.tv":return!c
case"com.apple.videos":return c
case"com.apple.iCloudDriveApp":return!0
case"com.apple.facetime":return!rt(e,"any-telephony")||!rt(e,"venice")
case"com.apple.Fitness":if(a||s){let t=!1
return i(e.user.isFitnessAppInstallationAllowed)&&(t=e.user.isFitnessAppInstallationAllowed),!t}return!0
case"com.apple.measure":return!rt(e,"arkit")
case"com.apple.Jellyfish":return!rt(e,"front-depth-camera")
case Vm:case Hm:return!0
case"com.apple.NanoHeartRhythm":return!e.client.isElectrocardiogramInstallationAllowed
case qm:return!rt(e,"magnetometer")
case"com.apple.NanoOxygenSaturation.watchkitapp":return!e.client.isScandiumInstallationAllowed
case zm:case"com.apple.NanoRadio":return!0
case Ym:return!e.client.isCharonSupported
case Jm:return!e.client.isMandrakeSupported
case"com.apple.GenerativePlaygroundApp":return!rt(e,"generative-model-systems")}return!1})}(e,t)),8&n&&(o=o||function(e,t){return de(t,"shouldFilterUnsupportedWatchAppOnWatchClient",()=>{const n=Oe(e,t,YU),r=t.type===Pj
return e.host.clientIdentifier===JV&&!n&&!r})}(e,t)),16&n&&(o=o||function(e,t){return t.type===$G&&!s(p(t,dM))&&!s(p(t,NR))&&!Y(t,"isMerchandisedEnabled")}(0,t)),32&n&&(o=o||function(e,t){return de(t,"shouldFilterLegacyApps",()=>{switch(Ce(e,t,KG)){case"com.apple.mobileme.fmip1":case Vm:return!0}return!1})}(e,t)),64&n&&(o=o||function(e,t){return de(t,"isLegacyMacOSInstaller",()=>(Ce(e,t,KG),!1))}(e,t)),128&n&&(o=o||function(e,t){return de(t,"shouldFilterUnsupportedPlatform",()=>{if(t.type!==Gj&&t.type!==Pj)return!1
const n=Zu(e,t),r=rd(0,t,e.appleSilicon.isSupportEnabled)
return!cd(e,t,n,e.client.deviceType,r,!1)})}(e,t)),16384&n&&(o=o||function(e,t){return de(t,"shouldFilterUnsupportedPlatformForCharts",()=>{if(t.type!==Gj&&t.type!==Pj)return!1
const n=Zu(e,t),r=rd(0,t,!0)
return!cd(e,t,n,e.client.deviceType,r,!1)})}(e,t)),256&n&&(o=o||function(e,t){return de(t,"shouldFilterUnsupportedPreordersOnPlatform",()=>{if(!Y(t,ZG))return!1
if(t.type!==Gj)return!1
const n=Zu(e,t),r=rd(0,t,e.appleSilicon.isSupportEnabled)
return!dd(0,n,e.client.deviceType,r,!1)})}(e,t)),512&n&&(o=o||nt(e,t)),1024&n&&(o=o||function(e,t){const n=Y(t,dN),r=!Oe(e,t,YI)&&Oe(e,t,FN)
return n&&r}(e,t)),2048&n&&(o=o||function(e,t){return e.client.deviceType===Fj&&(!Oe(e,t,FN)&&!Oe(e,t,zI)&&!function(e,t){return!(!r(t)&&0!==t.length)||e.client.isPairedSystemVersionAtLeast(t)}(e,me(t,Re(e,t),pG)))}(e,t)),4096&n&&(o=o||function(e,t){return e.client.deviceType===Mj&&(Oe(e,t,Km,De(e))&&!e.appleSilicon.isSupportEnabled)}(e,t)),8192&n&&(o=o||function(e,t){const n=Zu(e,t)
return!(e.client.deviceType!==Mj||!n.includes(Mj))&&!ud(e,t,e.appleSilicon.isSupportEnabled,e.appleSilicon.isRosettaAvailable)}(e,t)),32768&n&&(o=o||function(e,t){if(!e.client.isCompanionVisionApp)return!1
const n=ye(t,dj,JI)
return!(Zu(e,t).indexOf(wj)>-1||n)}(e,t)),65536&n&&(o=o||function(e,t){return!!et(e).isSystemAppFromData(t)&&nt(e,t)}(e,t)),o}function nt(e,t){return!(!e.client.isPhone||!Oe(e,t,FN)||function(e,t){if(r(t)||0===t.length)return!0
const n=t.split("."),o=f(n[0])||0,i=f(n[1])||0,s=f(n[2])||0
return e.client.isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(o,i,s)}(e,Ce(e,t,fM)))||!xd(e,id(e,t,e.appleSilicon.isSupportEnabled))}function rt(e,t,n){return e.client.deviceHasCapabilitiesIncludingCompatibilityCheckIsVisionOSCompatibleIOSApp([t],!1)}function ot(e,t){return t&&t.remainingContent?t.remainingContent.slice(0,t.maxPerPage):[]}function it(e,t,n){const r={...t}
if(t&&t.remainingContent){const e=st(0,t.remainingContent,t.maxPerPage,n)
r.remainingContent=e}return r}function st(e,t,n,r){return t.slice(n,null!=r?r:t.length)}function at(e,t){return i(t)?q(t,"customUrl"):null}function ct(e,t,n,r,o,i,a){if(!s(o)&&e.client.deviceType!==Mj)return t
let c
{const e=new $H(n,Tj)
c=new pW(r,o,e)}const l=y(a)
if(l.actionType=qN,l.actionDetails={actionUrl:o},Lf(e,c,l,!0,Nj),t instanceof MH)return t.openAction=c,t.includeBetaApps=i,t
{const e=new MH(n,t)
return e.openAction=c,e.includeBetaApps=i,e}}function lt(e,t){var n
if(t<=0)return!1
if(t>=1)return!0
const r=null===(n=e.metricsIdentifiersCache)||void 0===n?void 0:n.getMetricsIdForType(kg.user)
return!(0,Tg.isNothing)(r)&&0!==r.length&&!(r.length<2)&&function(e){function t(e){const t=e.charCodeAt(0)
return t>=48&&t<=57?52+t-48:t>=65&&t<=90?26+t-65:t>=97&&t<=122?t-97:t}const n=e.slice(-2)
return(62*t(n[0])+t(n[1]))/3843}(r)<t}function ut(e,t){switch(ft(e,t)){case jR:case xL:case HR:case VR:case Iy:return!0
default:return!1}}function dt(e,t){return lt(e,e.bag.gameControllerRecommendedRolloutRate)&&ft(e,t)===Iy}function ft(e,t){const n=De(e)
if(null===n)return cN
if(!he(t,n)){const r=Pe(e,t,aG)
if(null===r||o(r))return cN
const i=r[n]
return o(i)?cN:i}const r=Ce(e,t,pN)
return s(r)?r:cN}function pt(e,t=null){return e===Mj?function(e){let t="x-apple.systempreferences:com.apple.preferences.softwareupdate?client=AppStore&variant=CUSTOMER"
return e&&(t+=`&installMajorOSBundle=${e}`),t}(t):null}function ht(e){var t
return null===vJ&&(vJ=new u2({defaultTopic:vH,buildType:e.client.buildType,jsVersion:null!==(t=e.props.asString("version"))&&void 0!==t?t:Ej,buyDecorator:mJ,isLoggingEnabled:!0,bagProvider:(t,o)=>{const i=e.bag.metricsConfiguration
if(!r(o)){const e=n(i,[o,t])
if(!r(e))return e}return n(i,t)}})),vJ}function wt(e){var t
const n={}
if(!e)return n
Object.assign(n,e.baseFields),e.pageUrl?n[Y$]=e.pageUrl:e.timingMetrics&&e.timingMetrics.pageURL&&(n[Y$]=e.timingMetrics.pageURL),e.recoMetricsData&&Object.assign(n,e.recoMetricsData),e.mercuryMetricsData&&Object.assign(n,e.mercuryMetricsData),e.productVariantData&&Object.assign(n,je(e.productVariantData)),e.iAdInfo&&i(e.iAdInfo.pageFields[u2.hasIAdData])&&(n[u2.hasIAdData]=e.iAdInfo.pageFields[u2.hasIAdData])
const r=null===(t=e.iAdInfo)||void 0===t?void 0:t.pageFields[DN]
return i(r)&&(n[DN]=r),qd(n)}function gt(e,t,n,s,a,c,l,u,f,p,h,w,g,v,y){const A=function(e,t){const n=new RY(t),r=d(e.bag.metricsConfiguration,"metricsBase.language")
return n.set("languageId",r),n.toString()}(e,n)
return function(e,t,n,o,s,a,c){const l=new RY(t)
return function(e,t,n,o,s,a,c){var l,u
const f=d(a,t$)
t.set(t$,f)
const p=e.props.enabled(uO)?e.bag.metricsPaymentTopic:void 0
t.set(TM,null!=p?p:vH),mJ.useNativeValues(a)
const h=mJ.params
for(const e of Object.keys(h)){if(e===a_&&(0,Ag.isSome)(t.get(a_)))continue
const n=d(h,e)
t.set(e,n)}if(!r(c))for(const e of Object.keys(c)){const n=d(c,e)
t.set(e,n),t.set(e,n,null)}if(!a)return t.set(bG,null),void t.set(c_,null)
const w=d(a,RN)
if((0,Ag.isSome)(w)&&w.length>0&&t.set(RN,w),(null===(l=t.get(eT,null))||void 0===l?void 0:l.length)>0&&t.set(Tj,e.host.clientIdentifier),!o&&!wH.shared.shouldUseJSReferralData){const e=d(a,Lx),n=Wd(e)
e&&n&&(a[Rx]=n)
const r=d(a,"usageContext")
if((0,Ag.isSome)(r)){switch(r){case n$:t.set(RN,"com.apple.AppStore.overlay")
break
case dO:t.set(RN,lO)}t.set(_x,w,null)}else{const e=d(a,_x)
t.set(_x,e,null)
const n=d(a,Lx)
t.set(Lx,n,null),d(a,"extRefAppType")===rT&&t.set(RN,lO)}}const g=t.get(cB),m=t.get(QB),v=(null!==(u=null==g?void 0:g.split("_"))&&void 0!==u?u:[]).includes(n)
if(m!==lB||v){const e=Yd(d(a,K$))
i(e)&&t.set(bG,e)}t.set(JA,null,null)}(e,l,n,o,0,a,c),l.toString()}(e,function(e,t,n,s,a,c,l,u,f,p,h,w){const g=new RY(t)
return function(e,t,n,s,a,c,l,u,f,p,h,w){var g,v,y
const A=wt(s)
a&&t.set(Dx,a),c&&t.set(JU,c)
const T=d(m(A),cB)
t.set(cB,T)
const b=d(m(A),QB)
t.set(QB,b)
const S=d(m(A),jF);(0,Ag.isSome)(S)&&S.length>0&&t.set(yJ.containerId,S,null)
const P=(null!==(g=null==T?void 0:T.split("_"))&&void 0!==g?g:[]).includes(n),I=b===lB,C=(null===(v=t.get(eT,null))||void 0===v?void 0:v.length)>0
if(!I||P||C){let e=d(m(s),bG)
o(e)&&(e=function(e){if((0,Tg.isNothing)(e))return null
const t=new kq(e),n=t.query,r=null==n?void 0:n[bG],o=t.pathname
return(0,Tg.isNothing)(r)||(0,Tg.isNothing)(o)?null:o.includes("/app")?r:null}(null==s?void 0:s.pageUrl)),r(e)||t.set(bG,e)}if(I&&(0,Ag.isSome)(s)&&(0,Ag.isSome)(s.pageUrl)&&(null===(y=new kq(s.pageUrl).query)||void 0===y?void 0:y[aO])===tT&&(t.set(a_,cO),t.set(nT,"1",null)),function(e,t,n,r){const o=i(n)&&n.adamID===t,s=i(r)&&r.adamID===t&&!o
if(o&&i(n)){const t=je(n)
for(const n of Object.keys(t)){const r=d(t,n);(0,Ag.isSome)(r)&&e.set(n,r)}}if(s&&i(r)){const t=Ve(r)
for(const n of Object.keys(t)){const r=d(t,n);(0,Ag.isSome)(r)&&e.set(n,r)}}}(t,n,null==s?void 0:s.productVariantData,null!=u?u:void 0),!r(l)&&l.length>0&&t.set(c_,l),t.set(WL,f),!p)if(i(wH.shared.activeReferralData)){if(t.set(_x,wH.shared.activeReferralData.extRefApp2,null),t.set(Lx,wH.shared.activeReferralData.extRefUrl2,null),(0,Ag.isSome)(wH.shared.activeReferralData.kind)){const e=wH.shared.activeReferralData.kind.name
e!==rT&&"appClip"!==e||t.set(RN,lO)}}else t.set(_x,h,null),t.set(Lx,w,null)}(0,g,n,s,a,c,l,u,f,p,h,w),g.toString()}(0,A,t,s,l,u,f,w,g,a,v,y),t,a,0,p,h)}function mt(e,t){const n=Oe(e,t,"usesExternalPurchase"),r=Oe(e,t,"usesExternalLinkPurchase")
return n||r}function vt(e,t){return e.bag.enableExternalPurchases&&e.bag.enabledExternalPurchasesPlacements.includes(t)}function yt(e,t,n,r){const i=e.bag.externalPurchasesLearnMoreEditorialItemId
if(o(i)||!e.bag.enableExternalPurchases)return null
const s=new _q(HG)
return s.title=t,s.pageUrl=`https://apps.apple.com/story/id${i}`,Lf(e,s,{id:P$,targetType:aj,actionType:Dj,pageInformation:n,locationTracker:r}),s}function At(e,t,n){return yg.context("offerDataFromData",()=>{const r=Ie(e,t,dB,n)
return 0===r.length?null:r[0]})}function Tt(e,t){const n=W(t,dB)
return 0===n.length?null:n[0]}function bt(e,t,n,o,a,c,l,u=cj,f,p,h){return yg.context(`offerActionFromOfferData: ${n.id}`,()=>{var w,g,m,v,y,A,T
let b=d(t,vB)
if(r(b))return yg.unexpectedNull(gG,fj,Hk),null
if(n.type===Pj&&(b.indexOf("rebuy")>=0?b=b.replace("rebuy=false",$T):(b.length>0&&(b+="&"),b+=$T)),s(l.inAppEventId)&&(b.length>0&&(b+="&"),b+=`mtInAppEventId=${l.inAppEventId}`),l.isAdvert){const e=null===(g=null===(w=l.pageInformation)||void 0===w?void 0:w.iAdInfo)||void 0===g?void 0:g.placementId
i(e)&&(b.length>0&&(b+="&"),b+=`${yJ.placementId}=${e}`)
const t=null===(v=null===(m=l.pageInformation)||void 0===m?void 0:m.iAdInfo)||void 0===v?void 0:v.containerId
i(t)&&(b.length>0&&(b+="&"),b+=`${yJ.containerId}=${t}`)
const n=null===(A=null===(y=l.pageInformation)||void 0===y?void 0:y.iAdInfo)||void 0===A?void 0:A.clickFields[$x]
i(n)&&(b.length>0&&(b+="&"),b+=`${yJ.templateType}=${n}`)}const S=n.id
if(r(S))return yg.unexpectedNull(gG,fj,"item.offer.id"),null
const P=function(e,t,n,r,o,i,s,a,c,l){return yg.context("purchaseConfigurationFromProduct",()=>{const u=q(t,jj)
let f=q(t,SU)
f||(f=DO)
const p=et(e).bundleIdFromData(t),h=Zu(e,t),w=q(t,UA),g=Ce(e,t,"preflightPackageUrl"),m=Od(e,t),v=rd(0,t,e.appleSilicon.isSupportEnabled),y=d(c,Tj),A=d(c,uM),T=Ft(e,t)?e.client.remoteDownloadIdentifiers:[],b=new gV(n,f,u,p,h,r,o,s,w,!1,g,m,v,!1,a.inAppEventId,y,A,void 0,od(e,t),l,T)
return b.pageInformation=i,b.productVariantData=Fe(e,t),b.targetType=a.targetType,b.metricsKind=a.kind,b})}(e,n,b,o,l.excludeAttribution,l.pageInformation,c,l,f,p),I=Ct(e,t,S,P,a,u,null!==(T=l.isAdvert)&&void 0!==T&&T,h)
return function(e,t,n,r,o){var i,s,a,c,l
const u=n.pageInformation,d=Qd(e,{...n,targetType:Nj},null!==(i=t.title)&&void 0!==i?i:"")
let f=null!==(a=null===(s=n.anonymizationOptions)||void 0===s?void 0:s.anonymizationString)&&void 0!==a?a:t.adamId;(0,Ag.isSome)(n.targetId)&&(null===(c=n.targetId)||void 0===c?void 0:c.length)>0&&(f=n.targetId),Df(e,t,f,r,u,d,null!==(l=n.isAdvert)&&void 0!==l&&l,n.recoMetricsData,o)}(e,I,l,o,p),I})}function St(e,t){return r(t)||r(t.price)||0===t.price}function Pt(e,t){return yg.context("expectedReleaseDateFromData",()=>Ye(q(t,"offers.0.expectedReleaseDate")))}function It(e,t){const n=d(t,tU)
return n===ZL||n===g_||n===LU?f(t,pM):null}function Ct(e,t,n,r,o,i=cj,s=!1,a){return yg.context("offerActionFromOfferData",()=>{const c=d(t,tU),l=s&&i===cj&&(0,Ag.isSome)(e.bag.adsOverrideLanguage)?e.adsLoc:e.loc
let u
switch(c){case"get":if(i===nU)u=e.loc.string(FT,"Get")
else{const e=m_
u=l.string(e)}break
case LU:u=i===nU?e.loc.string(NT,"Pre-Order"):l.string(m_)
break
default:u=c}let f=null,p=null
const h=It(0,t)
h>0&&(f=h,p=d(t,nB))
const w=Ye(d(t,LF)),g=new RH(u,n,r,a)
return g.price=f,g.priceFormatted=p,g.expectedReleaseDate=w,g.includeBetaApps=o,g})}function kt(e,t,n,o,i,a=cj,c=null,l=!1){if((0,Ag.isNothing)(t))return null
if(Dd(0,n)){if(a===nU)return null
if(a===cj)return Iu(e,n,i,null)
const r=Ce(e,n,KG)
if(s(r)){const e=pt(Mj,r)
if((0,Ag.isSome)(e)){const n=new OH(e)
return new MH(t.adamId,n)}}}if(a===cj&&(n.type===Pj||_d(e,n)||l))return Iu(e,n,i,null)
if(o&&"tv"!==e.client.deviceType&&!Od(e,n)){const o=function(e,t,n,o,i){if(r(t))return null
const s=Et(e,n,t,!1,o)
return s.buyAction=t,s}(e,t,n,i)
if(null!==o)return o}const u=Te(e,n,JB),d=e.client.isCompanionVisionApp
if(!Od(e,n)&&(d||u&&e.client.deviceType!==wj))return function(e,t,n,r,o){const i=Mt(e,t,n,r,o),s=new MH(t.adamId,i)
return s.title=t.title,s}(e,t,n,St(0,t),Od(e,n))
if(Te(e,n,EF)&&"tv"!==e.client.deviceType)return function(e,t,n){const r=new zH(cj)
r.title=e.loc.string("Alert.Buy.TvOnly.Title"),r.message=e.loc.string("Alert.Buy.TvOnly.Message"),r.isCancelable=!0,r.buttonActions=n?[Bt(e,t)]:[t],r.buttonTitles=[e.loc.string("Alert.Buy.TvOnly.ButtonTitle")]
const o=new MH(t.adamId,r)
return o.title=t.title,o}(e,t,Oe(e,n,LL))
if(!Oe(e,n,YI)&&Oe(e,n,FN)&&e.client.deviceType!==Fj)return function(e,t){const n=new zH(cj)
n.title=e.loc.string("Alert.Buy.WatchOnly.Title"),n.message=e.loc.string("Alert.Buy.WatchOnly.Message"),n.isCancelable=!0,n.buttonActions=[t],n.buttonTitles=[e.loc.string("Alert.Buy.WatchOnly.ButtonTitle")]
const r=new MH(t.adamId,n)
return r.title=t.title,r}(e,t)
const f=Ce(e,n,fM)
if(s(c)&&c===JV&&(0,Ag.isSome)(f)&&Md(e,f))return function(e,t,n){const r=new zH(cj)
r.title=e.loc.string("ProductPage.WatchOSUpdateRequired.Title").replace(JN,n),r.message=e.loc.string("ProductPage.WatchOSUpdateRequired.Message").replace(JN,n),r.buttonActions=[t],r.buttonTitles=[e.loc.string(RC)]
const o=new MH(t.adamId,t)
return o.buyAction=r,o}(e,t,f)
if(function(e,t){return!!Od(e,t)}(e,n)){if(Od(e,n))return function(e,t,n,r,o,i,s){if(!Od(e,n))return t
switch(e.client.deviceType){case"tv":return function(e,t,n,r,o,i){var s,a,c,l
const u=_t(e,t,null,n,r),d=u.startAction,f=u.underlyingOfferAction,p=ee(o),h=new AY($j,o,n.id);(0,Ag.isSome)(null===(a=null===(s=i.pageInformation)||void 0===s?void 0:s.searchTermContext)||void 0===a?void 0:a.term)&&(h.metricsOverlay[bG]=null===(c=i.pageInformation.searchTermContext)||void 0===c?void 0:c.term)
const w=null===(l=e.metricsIdentifiersCache)||void 0===l?void 0:l.getMetricsFieldsForTypes([kg.user,kg.client]);(0,Ag.isSome)(w)&&(h.metricsOverlay={...h.metricsOverlay,...w}),p&&(h.purchaseSuccessAction=f,h.carrierLinkSuccessAction=f)
const g=new _q(AB)
if(g.pageData=h,i&&i.pageInformation&&(g.referrerUrl=i.pageInformation.pageUrl),d instanceof RH&&(i.actionDetails={buyParams:d.purchaseConfiguration.buyParams,...i.actionDetails}),_f(e,g,i),r){const t=Et(e,n,f,!0,i)
t.buyAction=d
const r=Et(e,n,f,!0,i)
return r.buyAction=d,t.subscribePageAction=r,f.buyCompletedAction=null,t}{const o=new MH(n.id,d),i=_t(e,t,g,n,r).startAction
return o.subscribePageAction=i,o}}(e,t,n,r,i,s)
case wj:return function(e,t,n,r,o,i){var s,a,c,l
const u=Lt(e,t,null,n,r),d=u.startAction,f=u.underlyingOfferAction,p=ee(o),h=new AY($j,o,n.id);(0,Ag.isSome)(null===(a=null===(s=i.pageInformation)||void 0===s?void 0:s.searchTermContext)||void 0===a?void 0:a.term)&&(h.metricsOverlay[bG]=null===(c=i.pageInformation.searchTermContext)||void 0===c?void 0:c.term)
const w=null===(l=e.metricsIdentifiersCache)||void 0===l?void 0:l.getMetricsFieldsForTypes([kg.user,kg.client]);(0,Ag.isSome)(w)&&(h.metricsOverlay={...h.metricsOverlay,...w}),p&&(h.purchaseSuccessAction=f,h.carrierLinkSuccessAction=f)
const g=new _q(AB)
if(g.pageData=h,i&&i.pageInformation&&(g.referrerUrl=i.pageInformation.pageUrl),d instanceof RH&&(i.actionDetails={buyParams:d.purchaseConfiguration.buyParams,...i.actionDetails}),_f(e,g,i),r&&null!==f){const t=Et(e,n,f,!0,i)
t.buyAction=d
const r=Et(e,n,f,!0,i)
return r.buyAction=d,t.subscribePageAction=r,f.buyCompletedAction=Dt(e,g),t}{const o=new MH(n.id,d),i=Lt(e,t,g,n,r).startAction
return o.subscribePageAction=i,o}}(e,t,n,r,i,s)
default:return function(e,t,n,r,o,i,s){var a,c,l,u
const d=ee(i),f=new AY($j,i,n.id);(0,Ag.isSome)(null===(c=null===(a=s.pageInformation)||void 0===a?void 0:a.searchTermContext)||void 0===c?void 0:c.term)&&(f.metricsOverlay[bG]=null===(l=s.pageInformation.searchTermContext)||void 0===l?void 0:l.term)
const p=null===(u=e.metricsIdentifiersCache)||void 0===u?void 0:u.getMetricsFieldsForTypes([kg.user,kg.client]);(0,Ag.isSome)(p)&&(f.metricsOverlay={...f.metricsOverlay,...p}),e.props.enabled(v_)&&e.client.isCompanionVisionApp&&(0,Ag.isNothing)(f.metricsOverlay[RN])&&(f.metricsOverlay[RN]="com.apple.visionproapp"),d&&(f.purchaseSuccessAction=t,f.carrierLinkSuccessAction=t)
const h=new _q(AB)
if(h.pageData=f,s&&s.pageInformation&&(h.referrerUrl=s.pageInformation.pageUrl),s.actionDetails={buyParams:t.purchaseConfiguration.buyParams,...s.actionDetails},_f(e,h,s),r&&t instanceof RH){const r=Et(e,n,t,!0,s)
r.buyAction=t
const o=Et(e,n,t,!0,s)
return o.buyAction=t,r.subscribePageAction=o,t.buyCompletedAction=Dt(e,h),r}const w=Te(e,n,JB)
if(Ft(e,n)||w&&e.client.deviceType!==wj){const r=Mt(e,t,n,!0,!0),o=Mt(e,h,n,!0,!0),i=new MH(n.id,r)
return i.subscribePageAction=new MH(n.id,o),i}const g=new MH(n.id,t)
return g.subscribePageAction=h,g}(e,t,n,r,0,i,s)}}(e,t,n,o,0,function(e,t,n){if(n)return vL
switch(t){case DU:return rM
case cj:case nU:return OR
default:return oN}}(0,a,o),i)
const s=function(e,t,n,o,i){return"tv"===e.client.deviceType?_t(e,t,null,n,o):{startAction:r(t)?null:t,underlyingOfferAction:null}}(e,t,n,o),c=s.startAction
if(o){const t=Et(e,n,s.underlyingOfferAction,!1,i)
return t.buyAction=c,t}return c}return xt(e,t,o,i)}function Ot(e,t,n,r,o,i,s=null){switch(r){case rM:case OR:const r=Gu(e,t,{useCase:3}),a=Rf(e,t,i)
return bt(e,At(e,t),t,o,!1,Jd(e,t,r,s),a,n)
default:return null}}function Et(e,t,n,r,o){let i
if(r){const s=Rt(e,t,n.purchaseConfiguration.appName,r,!0,o),a=Rt(e,t,n.purchaseConfiguration.appName,r,!1,o)
i=new oW(a,a,s,a)}else i=Rt(e,t,n.purchaseConfiguration.appName,!1,!1,o)
return new MH(t.id,i)}function Rt(e,t,n,r,o,i){const s=new LH(t.id,r)
let a,c,l,u
if(a=e.loc.string("CANCEL_COMING_SOON_TITLE"),e.client.isAutomaticDownloadingEnabled()&&(r&&o||!r)?(s.title=e.loc.string("CANCEL_COMING_SOON_BUTTON_DOWNLOAD"),l=e.loc.string("COMING_SOON_BODY_DOWNLOAD").replace(y_,n)):(s.title=e.loc.string("CANCEL_COMING_SOON_BUTTON"),l=e.loc.string("COMING_SOON_BODY").replace(y_,n)),c=e.loc.string("CANCEL_COMING_SOON_CANCEL"),e.client.deviceType===Mj||"tv"===e.client.deviceType){const e=new zH(cj)
e.title=a,e.message=l,e.buttonActions=[s],e.isCancelable=!0,e.cancelTitle=c,e.destructiveActionIndex=0,u=e}else if(e.client.deviceType===wj){const t=new zH(cj)
t.title=a,t.artwork=ce(e,"systemimage://bell.slash.fill",95,90),t.message=l,t.buttonActions=[s],t.isCancelable=!0,t.cancelTitle=c,u=t}else{const e=new qH([s])
e.title=a,e.message=l,e.isCancelable=!0,e.cancelTitle=c,e.isCustom=!1,e.destructiveActionIndex=0,u=e}return Lf(e,s,{...i,actionType:"cancelPreorder"}),u}function Dt(e,t){const n=ce(e,"systemimage://checkmark",95,90),r=ce(e,fv,95,90)
let o,i
o=new zH(b$),o.title="",o.artwork=n,e.client.isAutomaticDownloadingEnabled()?(o.message=e.loc.string(LO),o.toastDuration=2.5):(o.message=e.loc.string(i$),o.toastDuration=1.5)
{const n=new zH(b$)
n.title="",n.artwork=r,n.message=e.loc.string(i$),n.toastDuration=1.5
const o=new rW(xO,new EH([t,n]))
o.rateLimit=e.bag.arcadePreOrderUpsellLimitSeconds,o.fallbackAction=n,i=o}const s=!e.client.isAuthorizedForUserNotifications()
return e.bag.newEventsForODJAreEnabled&&s?new oW(new tW,new tW,new tW,new tW):new oW(i,o,o,o)}function _t(e,t,n,o,s,a){if(r(t))return{startAction:null,underlyingOfferAction:null}
const c=new _H,l=St(0,t),u=t.purchaseConfiguration.appName
c.shouldCheckForAvailableDiskSpace=!s,c.remoteControllerRequirement=cN,c.shouldCheckForGameController=Oe(e,o,LL),c.shouldPromptForConfirmation=!e.featureFlags.isEnabled("disable_redundant_interstitial")
const d=J(o,BT)
if(i(d)&&(c.checkRestrictionsForContentRating=d),l){const t=s?e.loc.string("OfferAlert.TV.Title.PredorderFree"):e.loc.string("OfferAlert.TV.Title.Free")
c.title=t.replace(HF,u)}else{const n=s?e.loc.string("OfferAlert.TV.Title.PreorderPaid"):e.loc.string("OfferAlert.TV.Title.Paid")
c.title=n.replace(HF,u).replace(Nx,t.priceFormatted)}const f=y(t)
f.title=s?e.loc.string("OfferButton.Title.Preorder"):l?e.loc.string(m_):e.loc.string("OfferButton.Title.Buy")
const p=(0,Ag.isNothing)(n)?f:n
c.completionAction=p,c.shouldIncludeActiveAccountInFooterMessage=!0
const h=[]
Oe(e,o,fk)&&h.push(e.loc.string("OFFERS_IN_APP_PURCHASES","Offers In-App Purchases")),h.length>0&&(c.footerMessage=h.join(e.loc.string("TV_OFFER_ALERT_FOOTER_LINE_BREAK"))),c.impressionMetrics=f.impressionMetrics
const w=y(c)
w.shouldPromptForConfirmation=!1,w.title=null,w.footerMessage=null
const g=new MH(t.adamId,w)
return Od(e,o)||(g.buyAction=c),g.openAction=t,{startAction:g,underlyingOfferAction:f}}function Lt(e,t,n,o,i,s){if(r(t))return{startAction:null,underlyingOfferAction:null}
const a=new _H,c=St(0,t)
a.remoteControllerRequirement=ft(e,o)
const l=y(t)
l.title=i?e.loc.string("OFFER_BUTTON_TITLE_PREORDER"):c?e.loc.string("OFFER_BUTTON_TITLE_GET"):e.loc.string("OFFER_BUTTON_TITLE_BUY")
const u=(0,Ag.isNothing)(n)?l:n
a.completionAction=u,a.impressionMetrics=l.impressionMetrics
const d=y(a)
d.shouldPromptForConfirmation=!1,d.title=null,d.footerMessage=null
const f=new MH(t.adamId,d)
return f.buyAction=a,f.cancelAction=l,f.openAction=l,{startAction:f,underlyingOfferAction:l}}function xt(e,t,n,o){if(r(t))return null
if(e.client.newPaymentMethodEnabled||n)return t
const i=new tW
i.impressionMetrics=t.impressionMetrics
const s=y(o)
r(s)||(s.actionType=pO,s.targetType=Nj,Lf(e,i,s))
const a=new DH(t,i)
return a.confirmationAccessibilityAction=function(e,t){if(r(t))return null
const n=new zH(cj)
r(t.priceFormatted)?(n.title=e.loc.string(v$),n.message="Are you sure you want to get "+t.purchaseConfiguration.appName):(n.title="Buy App",n.message=`Are you sure you want to buy ${t.purchaseConfiguration.appName} for ${t.priceFormatted}`),n.isCancelable=!0,n.buttonActions=[t]
const o=new MH(t.adamId,t)
return o.buyAction=n,o}(e,t),a}function Mt(e,t,n,r,o){const i=new zH(cj)
return i.isCancelable=!0,i.buttonActions=[t],i.imageName="vision.pro",Ft(e,n)?r?(i.title=e.loc.string("Alert.Buy.VisionOnly.Free.RemoteDownloads.Title"),i.message=e.loc.string("Alert.Buy.VisionOnly.Free.RemoteDownloads.Message"),i.buttonTitles=[e.loc.string("Alert.Buy.VisionOnly.Free.RemoteDownloads.ButtonTitle")]):(i.title=e.loc.string("Alert.Buy.VisionOnly.Paid.RemoteDownloads.Title"),i.message=e.loc.string("Alert.Buy.VisionOnly.Paid.RemoteDownloads.Message"),i.buttonTitles=[e.loc.string("Alert.Buy.VisionOnly.Paid.RemoteDownloads.ButtonTitle")]):(i.title=e.loc.string("Alert.Buy.VisionOnly.Title"),i.message=o?e.loc.string("Alert.Buy.VisionOnly.Message.Arcade"):e.loc.string("Alert.Buy.VisionOnly.Message"),i.buttonTitles=[e.loc.string("Alert.Buy.VisionOnly.ButtonTitle")]),i}function $t(e,t){if(!e.props.enabled("remoteDownloadIdentifiers"))return!1
if(!e.client.isCompanionVisionApp)return!1
const n=Zu(e,t).includes(wj)||function(e){return ye(e,dj,JI)}(t)
return!!n}function Ft(e,t){return!!$t(e,t)&&Nt(e)}function Nt(e){return!((0,Ag.isNothing)(e.client.remoteDownloadIdentifiers)||0===e.client.remoteDownloadIdentifiers.length)}function Bt(e,t){const n=new zH(cj)
return n.title=e.loc.string("Alert.Buy.TvGameControllerRequired.Title"),n.message=e.loc.string("Alert.Buy.TvGameControllerRequired.Message"),n.buttonTitles=[e.loc.string("Alert.Buy.TvGameControllerRequired.ButtonTitle")],n.isCancelable=!0,n.buttonActions=[t],n}function Ut(e,t,n,o,s,a,c,l,u,f,p=cj,h=!1,w=!1,g,m){return r(t)?null:yg.context("displayPropertiesFromOfferAction",()=>{var r
let a=c
tt(e,o,77238)&&(a=fF),Du(e,o)||(a=fF),e.client.isCompanionVisionApp&&!Ft(e,o)&&(a=fF)
const g=null!==(r=xu(e,o))&&void 0!==r?r:m
let v=null
g&&(v=g.id)
let A=new mV(n,t.adamId,a,v,l)
A.isPreorder=s
const T=w&&p===cj&&(0,Ag.isSome)(e.bag.adsOverrideLanguage),b=T?e.adsLoc:e.loc
if(A.useAdsLocale=T,s)if(Od(e,o))A.offerLabelStyle=vL,A.subtitles[LF]=Nd(e,o,e.loc.string(Fx)),A.titleSymbolNames[UT]=A_,A.titleSymbolNames[GT]="bell.fill",A.subtitles[LF]===e.loc.string(Yy)&&(A.subtitles[LF]=e.loc.string(Fx))
else{A.offerLabelStyle=LU,A.titleSymbolNames[Bj]=A_
const t=Nd(e,o,"");(0,Ag.isSome)(t)&&(A.subtitles[LF]=t)}const S=St(0,t)
A.isFree=S
let P=null
if(p===cj&&(o.type===Pj||Dd(0,o)||_d(e,o)||h))P=e.loc.string("OfferButton.Title.View")
else{if(p===nU&&(o.type===Pj||Dd(0,o)||_d(e,o)))return null
P=p===jT&&e.props.enabled(Q$)?e.loc.string("OfferButton.Title.Select"):S?p===nU?s?e.loc.string(NT):e.loc.string(FT):t.title:p===nU?s?e.loc.string("OfferButton.FlowPreview.PreorderWithPrice").replace(Nx,t.priceFormatted):e.loc.string("OfferButton.FlowPreview.BuyWithPrice").replace(Nx,t.priceFormatted):t.priceFormatted}if(A.titles[Bj]=P,A.priceFormatted=t.priceFormatted,e.client.newPaymentMethodEnabled||p===nU||(A.titles[MO]=S?e.loc.string("OfferButton.Title.ConfirmGet"):e.loc.string("OfferButton.Title.ConfirmBuy")),Od(e,o))if(p===nU){const t=e.loc.string("OfferButton.FlowPreview.Arcade.Standard")
A.titles[Bj]=t,A.titles[T_]=t,A.titles[qN]=e.loc.string("OfferButton.FlowPreview.Arcade.Open"),A.titles[$O]=t,s&&(A.titles[VT]=e.loc.string("OfferButton.FlowPreview.Arcade.PreorderSubscribed"),A.titles[HT]=e.loc.string("OfferButton.FlowPreview.Arcade.PreorderNotSubscribed"))}else{const e=b.string("OfferButton.Arcade.Title.Standard")
A.titles[Bj]=e,A.titles[T_]=e,A.titles[qN]=b.string("OfferButton.Arcade.Title.Open"),A.titles[$O]=e,s&&(A.titles[VT]=b.string("OfferButton.Arcade.Title.PreorderSubscribed"),A.titles[HT]=b.string("OfferButton.Arcade.Title.PreorderNotSubscribed"),A.titles[UT]=b.string("OfferButton.Arcade.Title.PreorderedSubscribed"),A.titles[GT]=b.string("OfferButton.Arcade.Title.PreorderedNotSubscribed"))}if(u&&p!==nU){const t=d(u,_T),n=d(u,nB)
if(i(n)&&i(t)){let r=null,o=null
switch(t){case LT:f?(r=e.loc.string(FO),o=e.loc.string(FO)):(r=e.loc.string(FO),o=e.loc.string(b_))
break
case xT:const t=e.loc.string("OfferButton.IntroPrice.PaidUpfront.Trial").replace(Nx,n)
f?(r=t,o=t):(r=t,o=e.loc.string(b_))
break
case MT:r=e.loc.string(b_),o=e.loc.string(b_)}A.titles[NO]=r,A.titles[BO]=o,A.subtitles[NO]=e.loc.string(WT),A.subtitles[BO]=e.loc.string(WT)
const i=10
let s=!1
for(const e of Object.keys(A.titles))if(A.titles[e].length>i){s=!0
break}s&&(A=A.newOfferDisplayPropertiesChangingAppearance(!1,null,MA))}}const I=Oe(e,o,fk),C=mt(e,o),k=vt(e,XG),O=C&&k
if(A.hasInAppPurchases=I,A.hasExternalPurchases=O,I||O){const t=O?zT:qT,n=b.string(t)
A.subtitles[Bj]=n,e.client.newPaymentMethodEnabled||p===nU||(A.subtitles[MO]=n)}A.isDeletableSystemApp=et(e).isSystemAppFromData(o)&&!_d(e,o)
const E=J(o,BT)
return A.contentRating=E,A.appCapabilities=t.purchaseConfiguration.appCapabilities,o.type===Pj&&p!==nU&&(A.offerToken={offerAction:t,offerDisplayProperties:y(A)}),A})}function Gt(e,t){if(!t.isFirstRender)return s(t.remainingItems)?t.remainingItems:[]
const n=se(t.data,Uj)
return s(n)?n:[]}function jt(e,t){let n=null
switch(t.type){case kj:case rU:case MF:n=ie(e,t,lG)||ie(e,t,uG)||ie(e,t,Uj)||ie(e,t,Tj)
break
case Gj:case $G:case Pj:n=t}return n}function Vt(e,t){if(o(t))return null
const n=c(t.meta,"associations.editorial-cards.data")
return o(n)?null:n[0]}function Ht(e,t){return h({...H(t,kF,{}),...H(Vt(0,t),kF,{})})}function Wt(e){return{showAppIcon:u(e.showAppIcon,!1),suppressLockup:u(e.suppressLockup,!1),useGeneratedBackground:u(e.useGeneratedBackground,!1),useMaterialBlur:u(e.useMaterialBlur,!0),useTextProtectionColor:u(e.useTextProtectionColor,!1)}}function qt(e,t){if(!K(t))return null
let n
return n=t.type===kj?Bd(e,t):t,K(n)?n:null}function zt(e,t){const n=s(H(t,aj)),r=Y(t,k$)
return!n&&!r}function Yt(e,t){const n=t.type
return n!==jg.Collection&&n!==jg.Recommendations?null:q(t,XU)}function Jt(e,t){switch(q(t,RA)){case Fk:return"com.apple.AppStore.BridgeStoreExtension"
case Nk:return"com.apple.MobileSMS"
case"RealityDevice":return e.bag.enableDeviceDrivenDiscoveryContent?"VisionAppStore":null
default:return null}}function Kt(e){return h(function(e){return c(e,"meta.associations.editorial-cards.data")}(e)[0])}function Zt(e){switch(e){case bg.bottomLeft:return bg.bottomRight
case bg.left:return bg.right
case bg.topLeft:return bg.topRight
case bg.bottomRight:return bg.bottomLeft
case bg.right:return bg.left
case bg.topRight:return bg.topLeft
default:return e}}function Qt(e){return{collapsedContentMode:Zt(e.collapsedContentMode),expandedContentMode:Zt(e.expandedContentMode),collapsedLayoutInsets:{top:e.collapsedLayoutInsets.top,left:e.collapsedLayoutInsets.right,bottom:e.collapsedLayoutInsets.bottom,right:e.collapsedLayoutInsets.left},expandedLayoutInsets:{top:e.expandedLayoutInsets.top,left:e.expandedLayoutInsets.right,bottom:e.expandedLayoutInsets.bottom,right:e.expandedLayoutInsets.left}}}function Xt(e,t){return e.props.enabled(UU)||t?[wn(e),gn(e)]:[]}function en(e){return e.props.enabled(UU)?CJ:CK}function tn(e){return e.props.enabled(UU)?DJ:IK}function nn(e,t){return mn(e.props.enabled(UU)?$J:OK,t)}function rn(e){return e.props.enabled(UU)?jK:TK}function on(e){return e.props.enabled(UU)?JK:bK}function sn(e,t){return mn(e.props.enabled(UU)?eZ:kK,t)}function an(e){return e.props.enabled(UU)?nZ:SK}function cn(e){return e.props.enabled(UU)?oZ:PK}function ln(e){return e.props.enabled(UU)?aZ:wK}function un(e){return e.props.enabled(UU)?fZ:gK}function dn(e){return e.props.enabled(UU)?wZ:mK}function fn(e,t){return mn(e.props.enabled(UU)?AZ:vK,t)}function pn(e){return e.props.enabled(UU)?VZ:yK}function hn(e,t){return mn(e.props.enabled(UU)?zZ:AK,t)}function wn(e){return e.props.enabled(UU)?DZ:RK}function gn(e){return e.props.enabled(UU)?UZ:EK}function mn(e,t){const n={...e}
return(0,Tg.isSome)(t)&&(n.crops=t),n}function vn(e,t,n){const r=Ki(t,n.coercedCollectionTodayCardDisplayStyle),o=n.isHorizontalShelfContext?function(e,t){const n=[]
n.push(fn(e,["SCS.ApDPCS01"])),t.horizontalCardContentType===JM&&n.push(an(e))
const r=e.props.enabled("todayBrickPreferredContentModes")||!1
return n.push(sn(e,r?["sr"]:void 0),nn(e,r?["sr"]:void 0)),n}(e,n):function(e,t,n){const r=new Set([Zg.List,Zg.NumberedList])
if(e.client.isPad&&n.isHeroCard&&!r.has(t))return Xt(e,n.isHeroCard)
switch(t){case Zg.AppEventCard:return[ln(e),un(e),dn(e),fn(e),...Xt(e,n.isHeroCard),tn(e)]
case Zg.AppOfTheDay:case Zg.GameOfTheDay:return[ln(e),un(e),dn(e),fn(e),...Xt(e,n.isHeroCard),en(e)]
case Zg.List:case Zg.NumberedList:return[rn(e),on(e)]
case Zg.ShortImage:return n.isSearchContext?[nn(e),ln(e),un(e),dn(e),fn(e),...Xt(e,n.isHeroCard),an(e),cn(e),sn(e)]:[ln(e),un(e),dn(e),fn(e),...Xt(e,n.isHeroCard),an(e),cn(e),nn(e),sn(e)]
case Zg.FullBleedImage:return[ln(e),un(e),pn(e),hn(e),dn(e),fn(e),...Xt(e,n.isHeroCard),an(e),cn(e),sn(e),nn(e)]
case Zg.SingleApp:case Zg.Video:default:return[ln(e),un(e),dn(e),fn(e),...Xt(e,n.isHeroCard),an(e),cn(e),sn(e),nn(e)]}}(e,r,n)
let i,s=!1
const a=Kt(t)
if(K(a)&&(i=o.find(e=>(0,Tg.isSome)(H(a,e.objectPath))),s=(0,Tg.isSome)(i)),(0,Tg.isNothing)(i)&&(i=o.find(e=>(0,Tg.isSome)(H(t,e.objectPath)))),i===$J&&n.metricsDisplayStyle===Qg.SmallCard&&(i.cardArtLayouts=[i.cardArtLayoutMetrics[0].ltr,i.cardArtLayoutMetrics[0].rtl]),!i)return
const c=H(s?a:t,i.objectPath)
if(i.type===IG){const t=i.crops.map(t=>{let r=t
return n.isSearchContext&&(0,Tg.isSome)(n.prevailingCropCode)&&(r=n.prevailingCropCode),Fu(e,c,{withJoeColorPlaceholder:!0,cropCode:r,useCase:15,overrideHeight:i.sourceHeight,overrideWidth:i.sourceWidth})}),r=yn(c)
return{artworks:t,videos:[],cardArtLayouts:i.cardArtLayouts,artworkLayoutsWithMetrics:i.cardArtLayoutMetrics,joeColors:r}}{const t=p(c,TN),r=f(t,AN),o=f(t,VN)>=r
let s=i.sourceHeight,a=i.sourceWidth
o&&([s,a]=[a,s])
const l=Fu(e,t,{withJoeColorPlaceholder:!0,cropCode:i.crops[0],useCase:15,overrideHeight:s,overrideWidth:a})
if((0,Tg.isNothing)(l))return
let u={prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0};(0,Tg.isSome)(n.videoPlaybackControls)&&(u=n.videoPlaybackControls)
let h={prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0};(0,Tg.isSome)(n.videoPlaybackControls)&&(h=n.videoAutoplayPlaybackControls)
const w=d(c,YG)
if((0,Tg.isNothing)(w))return
const g=new VV(w,l,{playbackControls:u,autoPlayPlaybackControls:h,canPlayFullScreen:n.enableFullScreenVideo}),m=yn(t)
return{artworks:[],videos:[g],cardArtLayouts:i.cardArtLayouts,artworkLayoutsWithMetrics:i.cardArtLayoutMetrics,joeColors:m}}}function yn(e){return{bgColor:F(d(e,UN)),textColor1:F(d(e,zC)),textColor2:F(d(e,Z_)),textColor3:F(d(e,"textColor3")),textColor4:F(d(e,AM)),textGradient:c(e,Dv).map(e=>F(d(e)))}}async function An(e,t,n){var r
const o=Date.now(),i=await e.mediaToken.refreshToken(),s=e.fetchTimingMetricsBuilder,a=null!=n?n:{},c=null===(r=e.personalizationMetricsIdentifiersCache)||void 0===r?void 0:r.getMetricsIdForType(kg.user);(0,Ag.isSome)(c)&&((0,Ag.isSome)(null==a?void 0:a.headers)?a.headers[CQ]=c:a.headers={[CQ]:c})
const l=await bn(e,t,i,a,!1,s),u=Date.now()
t.canonicalUrl&&(l[sm.requestedUrl]=t.canonicalUrl)
const d=u-o
if(d>500){const n=qe(e,t).toString()
e.console.warn("Fetch took too long ("+d.toString()+"ms) "+n)}return l}function Tn(e,t){return e.bag.redirectUrlWhitelistedQueryParams.filter(e=>{var n
return i(null===(n=t.query)||void 0===n?void 0:n[e])})}async function bn(e,t,n,a={},c=!1,u){var d,p
const h=qe(e,t).toString(),w=new kq(h),g=Tn(e,w)
for(const e of g)w.removeParam(e)
const v=w.toString()
let y=a.headers
y||(y={}),y.Authorization="Bearer "+n
const A=await e.network.fetch({url:v,headers:y,method:a.method,body:a.requestBodyString,timeout:a.timeout})
try{if(401===A.status||403===A.status){if(c)throw Error("We refreshed the token but we still get 401 from the API")
return e.mediaToken.resetToken(),await e.mediaToken.refreshToken().then(async n=>await bn(e,t,n,a,!0,u))}if(404===A.status)throw Sn()
if(!A.ok){const e=new kQ(`Bad Status code ${A.status} for ${v}, original ${h}`)
throw e.statusCode=A.status,e}const n=n=>{var c,u
const d=Date.now()
let p
if(r(n.body)||""===n.body){if(204!==n.status)throw Sn()
p={}}else try{p=JSON.parse(n.body)}catch(t){let r=t.message
throw[HN,RF].includes(e.client.buildType)&&(r=`${t.message}, body: ${n.body}`),new OQ(r)}const w=Date.now()
if(p){if(p[sm.pageInformation]=m(function(e,t){const n=e.client.storefrontIdentifier
let r=null
if((null==n?void 0:n.length)>0){const e=n.split("-")
s(e)&&(r=e[0])}return{serverInstance:t.headers[EQ],storeFrontHeader:n,language:e.bag.language,storeFront:r,environmentDataCenter:t.headers[RQ]}}(e,n)),n.metrics.length>0){const e={...n.metrics[0],parseStartTime:d,parseEndTime:w}
p[sm.timingValues]=e}else{const e={pageURL:n.url,parseStartTime:d,parseEndTime:w}
p[sm.timingValues]=e}if(p[sm.contentMaxAge]=function(e,t){const n=Object.keys(t.headers).find(e=>"cache-control"===e.toLowerCase())
if(r(n)||""===n)return null
const i=t.headers[n]
if(o(i))return null
const s=i.match(/max-age=(\d+)/)
return r(s)||s.length<2?null:f(s[1])}(0,n),Array.isArray(p.data)&&i(u=p.data)&&0===u.length&&!l(a.allowEmptyDataResponse))throw Sn()
Array.isArray(p.data)&&t.originalOrdering.length>1&&(p.data=function(e,t,n,r=[]){const o={}
for(const e of n)o[Pn(0,e.type,e.id)]=e
const i=[]
for(const e of t){const t=o[Pn(0,e.type,e.id)]
if((0,Ag.isSome)(t)){if(s(r)){t.meta={...e.meta}
for(const n of r)In(0,n,t,e,o)}i.push(t)}}return i}(0,t.originalOrdering,null!==(c=p.data)&&void 0!==c?c:[],t.supplementaryMetadataAssociations)),p[sm.requestedUrl]=h}return p}
return(0,Ag.isSome)(u)?u.measureParsing(A,n):n(A)}catch(e){if(e instanceof kQ)throw e
const t=null!==(d=A.headers["x-apple-jingle-correlation-key"])&&void 0!==d?d:null===(p=A.metrics[0])||void 0===p?void 0:p.clientCorrelationKey
throw new Error(`Error Fetching - filtered: ${v}, original: ${h}, correlationKey: ${null!=t?t:"N/A"}, ${e.name}, ${e.message}`)}}function Sn(){const e=new kQ("No content")
return e.statusCode=204,e}function Pn(e,t,n){return`${t}_${n}`}function In(e,t,n,r,o){var i;(0,Ag.isNothing)(n.meta)?n.meta={associations:{}}:(0,Ag.isNothing)(n.meta.associations)&&(n.meta.associations={})
const a=D(t,r)
if(s(a)){const e=[]
for(const t of a){const n=o[Pn(0,t.type,t.id)];(0,Ag.isSome)(n)&&e.push(n)}(null!==(i=p(n.meta.associations))&&void 0!==i?i:{})[t]={data:e}}}function Cn(e,t=!1){return{timeToLive:En(e),nextPreferredContentRefreshDate:null,refreshWhileVisibleForNextPreferredContentRefreshDate:t}}function kn(e,t){r(t)||r(e)||(r(t.nextPreferredContentRefreshDate)||e.getTime()<t.nextPreferredContentRefreshDate.getTime())&&e.getTime()>(new Date).getTime()&&(t.nextPreferredContentRefreshDate=e)}function On(e,t){if(!function(e){return e.bag.enableAutomaticPageRefresh}(e))return null
if(r(t))return null
let n,o=!1
if(i(t.timeToLive)&&i(t.nextPreferredContentRefreshDate)){const e=Rn(t.timeToLive)
e.getTime()<t.nextPreferredContentRefreshDate.getTime()&&e.getTime()>(new Date).getTime()?n=e:(n=t.nextPreferredContentRefreshDate,o=!0)}else if(i(t.timeToLive))n=Rn(t.timeToLive)
else{if(!i(t.nextPreferredContentRefreshDate))return null
n=t.nextPreferredContentRefreshDate,o=!0}if(n.getTime()<=(new Date).getTime())return null
const s=o&&t.refreshWhileVisibleForNextPreferredContentRefreshDate
return new DQ("timeToLive",0,null,n,s)}function En(e){return e[sm.contentMaxAge]}function Rn(e){const t=new Date
return t.setSeconds(t.getSeconds()+e),t}function Dn(e){e.includingScopedRelationships(CU,[dC,qL,yF]),e.includingViews([QR,MC]),e.includingScopedAttributes(CU,[jj,hG,SM]),e.includingMetaKeys(Fv,[Nv]),e.includingMetaKeys(Bv,[fC]),e.includingAssociateKeys(CU,[Uv])}function _n(e){e.includingScopedRelationships(CU,[dC,qL,yF]),e.includingScopedAttributes(CU,[jj,hG,SM]),e.includingMetaKeys(Fv,[Nv]),e.includingMetaKeys(Bv,[fC]),e.includingAssociateKeys(CU,[Uv])}function Ln(e){e.includingScopedRelationships(jU,[TF]),e.includingScopedAttributes(jU,[VG,hG,SM,tD]),e.includingMetaKeys(Gv,[jv]),e.includingKindsKeys(jU,[YL])}function xn(e){return FQ.has(e)}function Mn(e){return _Q.has(e)}function $n(e){return MQ.has(e)}function Fn(e){return xQ.has(e)}function Nn(e){return e===36..toString()?1:e===6014..toString()?2:0}function Bn(e){const t=e.categories
if(s(t)){const e=t[0].genreId
if(e===6014..toString())return 2
if(e===36..toString())return 1}return 0}function Un(e,t,n=e.host.clientIdentifier,r=[]){t||(t=36)
const o=new Uz(e).forType(DL).includingAdditionalPlatforms(r).includingMacOSCompatibleIOSAppsWhenSupported(!0).addingQuery(fG,`${t}`)
return n===JV?o.addingContext(Fj):n===KV&&o.addingContext(kG),o}function Gn(e,t,n=!0){return yg.context("categoryListFromApiResponse",()=>{const r=c(t,"results.categories"),o=jn(e,p(r,"0"),n)
return o?new GQ(o.children):null})}function jn(e,t,n=!0){return yg.context("categoryFromApiResponse",()=>{if(!t)return null
const r=d(t,jj),o=d(t,fG),s=d(t,A$),a=Fu(e,p(t,_j),{allowingTransparency:!0,useCase:20}),l=c(t,QU).map(t=>jn(e,p(t),n)).filter(e=>i(e)),u=function(e,t){return t.sort((t,n)=>{try{return t.name.localeCompare(n.name,e.loc.safeIdentifier,{usage:zU})}catch(e){return 0}})}(e,l),f=d(t,MG)
return f&&n&&u.unshift(new UQ(f,o,a,s,[])),new UQ(r,o,a,s,u)})}function Vn(e,t,n=!1,r=!1,o=!0){const i=n?"contentIconTrimmedMonochrome":"contentIconTrimmed",s="brandLogo",a=Pe(e,t,lj)
if(r)return p(a,s)
{let e=p(a,i)
return o&&(0,Tg.isNothing)(e)&&(e=p(a,s)),e}}function Hn(e,t,n){const r=J(t,mB)
let o=null
const i=q(t,"gamesFilter")
switch(i){case $j:case BD:case"all":o=i
break
default:495!==r&&500!==r||(o=$j)}let a=null,c=q(t,qn(0,r)),u=null,f=null,p=q(t,BB)
const h={}
let w=!1
const g=se(t,N$)[0]
if(476===r&&s(g))if(a=e.loc.uppercased(q(t,qn(0,r))),p=null,g.type===ZB){c=Ed(e,g,jj)
const t=Vn(e,g,!1)
if((0,Tg.isSome)(t)){u=Fu(e,t,{useCase:1,style:_M})
const n={type:zM,name:Ix}
h.eyebrowColor=n}f={forYou:!0}}else w=!0,c=q(g,qn(0,r)),u=Gu(e,g,{useCase:1})
const m={featuredContentId:r,id:d(t,"id"),presentationHints:{},metricsPageInformation:n.metricsPageInformation,metricsLocationTracker:n.metricsLocationTracker,pageGenreId:n.pageGenreId,featuredContentData:t,title:c,subtitle:p,eyebrow:a,titleArtwork:u,shelfHeaderConfiguration:h,shouldFilter:!1,gamesFilter:o,remainingItems:[],isFirstRender:!0,isDeferring:!1,showOrdinals:!1,hasExistingContent:!1,showingPlaceholders:!1,ordinalIndex:1,isSearchLandingPage:n.isSearchLandingPage,isArcadePage:null==n?void 0:n.isArcadePage}
return{shelfToken:m,metricsOptions:{id:m.id,kind:null,softwareType:l(null==n?void 0:n.isArcadePage)?QG:null,targetType:JG,title:w?m.eyebrow:m.title,badges:f,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,idType:oU,fcKind:r,recoMetricsData:Qn(e,t)}}}function Wn(e){return e&&e.isDeferring&&e.isFirstRender}function qn(e,t){switch(t){case 548:case 495:case 496:return VG
default:return jj}}function zn(e){let t=(new kq).set(LB,AW).append(iU,OW).append(iU,PW).append(iU,encodeURIComponent(JSON.stringify(e))).param(pq.groupingFeaturedContentId,`${e.featuredContentId}`)
return(0,Tg.isSome)(e.nativeGroupingShelfId)&&(t=t.param(pq.nativeGroupingShelfId,`${e.nativeGroupingShelfId}`)),t.build()}function Yn(e,t){if(o(t))return null
r(t.shelfStyle)&&(t.shelfStyle=e.contentType)
const n=e.contentType!==B$&&s(e.items)
return t.hasExistingContent=t.hasExistingContent||n&&t.isFirstRender,(t.remainingItems.length||t.recommendationsHref||t.onDeviceRecommendationsUseCase)&&t.isFirstRender?zn(t):null}function Jn(e,t){e.remainingItems=e.remainingItems.filter(e=>!t.has(e.id))}function Kn(e,t,n){var r
const o=s(t.remainingItems),i=!o&&(null===(r=t.recommendationsHref)||void 0===r?void 0:r.length)>0
if(o){const n=function(e,t){var n
const r=(null===(n=t.relationshipToFetch)||void 0===n?void 0:n.length)>0
let o=t.remainingItems
return r&&(o=t.remainingItems.map(n=>ie(e,n,t.relationshipToFetch))),o}(e,t),r=new Uz(e,n)
return We(e,r,n),Zn(e,r),r}if(i){const n=new Uz(e,t.recommendationsHref)
return Zn(e,n),ki(e)&&(n.enablingFeature(FG),n.includingMetaKeys(YM,[Cx,HD]),n.includingScopedAttributes(xj,[pj,GU,IU]),n.includingScopedRelationships(xj,[Tj])),Oi(e)&&(n.enablingFeature(WD),_n(n)),Ei(e)&&(n.enablingFeature(E$),Ln(n)),n}return null}function Zn(e,t){t.includingAdditionalPlatforms(O(e)).includingRelationshipsForUpsell(!0).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes($e(e))
let n=[lj,ij,pG]
t.includesResourceType(xj)&&ki(e)&&(t.enablingFeature(FG),t.includingMetaKeys(YM,[Cx,HD]),t.includingScopedAttributes(xj,[pj,GU,IU]),t.includingScopedRelationships(xj,[Tj])),t.includesResourceType(CU)&&Oi(e)&&(t.enablingFeature(WD),_n(t),n=[]),t.includesResourceType(jU)&&Ei(e)&&(t.enablingFeature(E$),Ln(t),n=[]),(t.includesResourceType(Gj)||t.includesResourceType(xj))&&(n=n.concat(bB,oB,xB)),t.includingAttributes(n)}function Qn(e,t){const n=J(t,mB)
switch(n){case 425:case 415:case 416:case 417:case 501:case 258:case 421:case 422:case 423:case 261:return $(re(t,QU))
case 437:case 265:{const e=re(t,QU),n=W(t,WM)
return s(e)?$(e):s(n)?$(t):null}case 414:case 424:case 566:return null
default:if(function(e){return Mn(e)||xn(e)||NQ.has(e)||518===e}(n)){let e=re(t,Uj)
if(r(e))return null
const n=e.data
return n&&0!==n.length||(e=re(t,QU)),$(e)}return e.console.warn("Unknown featured content ID:",n),null}}function Xn(e,t,n){const r=Fu(e,t,n)
return r&&(r.crop="sr"),r}function er(e,t,n,r,o){const i=H(t,_j)
if(i instanceof Array){const t=function(e,t,n,r){const o=n/r
let i=0,s=null
for(const e of t){const t=f(e,AN),r=t/f(e,VN);(r===o||Math.abs(o-r)<=Math.abs(o-i))&&(!s||t<=n&&t>s.width||s.width>n&&t<s.width&&t>s.width)&&(s=e,i=r)}return s?ce(e,d(s,gj),f(s,AN),f(s,VN),null,null,d(s,YC)):null}(e,i,n,r)
return t.crop="bb",t}return null!=i?Xn(e,i,o):null}function tr(e,t,n,a,c,l,u,f){var p,h,w
const g=(null===(p=d(t,gj))||void 0===p?void 0:p.length)>0,m=(null===(h=q(t,iA))||void 0===h?void 0:h.length)>0,v=ne(t,lG,!1),y=ne(t,Uj,!1)||v
let A=q(t,JU)===IA
if(m||g)return function(e,t,n,o,s){const a=i(d(t,gj))?t:H(t,aj)
if(r(a)||Wn(n))return c=t,s?s():null==n||n.remainingItems.push(c),null
var c
const l=d(a,QL),u=d(a,gj),f=d(a,MG),p=sr(q(t,Dk))||f
let h=null
if(l===sD)h=new OH(u),h.title=p
else{const t=e.required(y2).fetchFlowPage(u),n=new _q(t)
n.pageUrl=u,n.title=p,h=n}return h.presentationStyle=[NI],Lf(e,h,{...o,id:""}),{action:h,caption:null,title:p,subtitle:null,artwork:null,shortEditorialDescription:null}}(e,t,n,l,f)
if(y){let p,h,g
if(a&&!v){g=gr(e,"groupingCommon",se(t,Uj),!0,c,!1,1)
const n=g.personalizedData
if(0===n.length)return null
p=n[0]}else p=ie(e,t,v?lG:Uj)
if(q(p,JU)===IA&&(h=p,p=ie(e,p,lG),A=!0),r(p))return null
if(r(p.attributes)||Wn(n))return s(n)&&(n.isDeferring=!0),function(e){f?f():null==n||n.remainingItems.push(e)}(p),null
let m=Ed(e,p,BB)||lu(e,p)
const y=Rf(e,t,l)
y.targetType=l.targetType
let T=Iu(e,p,y,null==n?void 0:n.clientIdentifierOverride)
const b=Y(p,k$)
let S,P=null,I=null,C=null
const k=q(p,"itunesNotes.short"),O=(null===(w=p.id)||void 0===w?void 0:w.length)>0,E={...l,id:O?p.id:t.id,idType:O?tj:HM}
switch(p.type){case PU:P=H(p,_j),A&&(p=null!=h?h:t)
break
case kj:{const t=ie(e,p,uG)
if(s(t)){const r={...E,inAppEventId:t.id},s=ie(e,t,Tj)
i(s)&&(r.relatedSubjectIds=[s.id])
const a=Ni(e,t,null,!1,!0,bj,nj,!1,!1,r,!1,!0,null,n.isArcadePage,!1)
if(i(a)){if(a instanceof Date)return kn(a,u.refreshController),null
S=a,b||(T=S.clickAction),o(m)&&(m=Ed(e,t,DB))}}I=q(p,MG),I&&(I=I.replace(/\n/g," "))
const a=ie(e,p,Uj),c=d(p,NB)
o(m)&&(c?m=c:a&&(m=Ed(e,a,DB))),o(m)&&i(S)&&(m=S.subtitle)
let f=q(p,vk);((0,Tg.isNothing)(f)||0===f.length)&&(f=m)
const h={useOTDTextStyle:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,isHeroCard:!1}
if(r(S)&&at(0,p),h.clientIdentifierOverride=Jt(e,p),i(S))C=S.lockup
else{const t=null,r=null
{ef(e,E,null==n?void 0:n.title)
const o=Zi(e,se(p,uG),h,l.pageInformation,l.locationTracker,t,r,at(0,p))
1===o.length&&(C=o[0]),nf(E.locationTracker)}}}default:{const t=[Gj,kU,Pj,$G]
if(r(C)&&t.indexOf(p.type)>-1){ef(e,E,null==n?void 0:n.title)
const t={metricsOptions:{pageInformation:l.pageInformation,locationTracker:l.locationTracker,recoMetricsData:$(p)},clientIdentifierOverride:null==n?void 0:n.clientIdentifierOverride,artworkUseCase:$u(0,null==n?void 0:n.shelfStyle),canDisplayArcadeOfferButton:!0,shouldHideArcadeHeader:e.featureFlags.isEnabled(T$)&&n.isArcadePage}
C=hu(e,p,t),nf(E.locationTracker)}P=Pe(e,p,lj)||H(p,lj),o(m)&&i(C)&&(m=C.subtitle)
break}}if(i(T)&&(T.presentationStyle=[NI],!A)){const n=sr(q(t,Dk)),r=Ed(e,p,jj)
T.title=n||r||T.title||m||I}return{action:T,caption:I,title:null==T?void 0:T.title,subtitle:m,artwork:P,shortEditorialDescription:k,content:p,lockup:C,appEvent:S,onDevicePersonalizationDataProcessingType:null==g?void 0:g.processingType}}return null}function nr(e,t){const n={}
for(const t of e)n[t.id]=t
const r=[Uj,V$],o=[]
for(const e of t){let t=!0
for(const o of r){const r=se(e,o)
if(i(r)){const i=[]
for(const e of r){const t=n[e.id]
s(t)&&i.push(t)}i.length===r.length?e.relationships[o]={data:i}:t=!1}}t&&o.push(e)}return o}function rr(e,t,n){t.seeAllAction=null,t.isHorizontal=!1,t.shouldFilterApps&&(t.filteredItemsMinimumCount=0,t.filteringExcludedItems=n.includedAdAdamIds)}function or(e,t){switch(t){case PB:return MU
case GD:return VM
case eB:return JM
case RU:return _k
default:return null}}function ir(e,t){let n=q(t,$U)
return n||(n=q(t,"contentId")),n||(n=q(t,"id")),n}function sr(e){if(r(e))return null
const t=e.replace(/&amp;/g,"&").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#96;/g,"`").replace(/\r\n/g," ").replace(/&nbsp;/g," ").replace(/<span>/g,"").replace(/<\/span>/g,"").replace(/<br>/g," ").replace(/\u23ce/g,"").replace(/<i>/g,"").replace(/<\/i>/g,"").replace(/<b>/g,"").replace(/<\/b>/g,"")
return t.match(/^\s*$/)?null:t}function ar(e,t,n){e.featureFlags.isEnabled(SF)?t.titleAction=n:t.accessoryAction=n}function cr(e,t,n){e.featureFlags.isEnabled(SF)?(0,Tg.isSome)(t.header)?ar(e,t.header,n):t.header={titleAction:n}:t.seeAllAction=n}async function lr(e,t,n){const r=n===Hj?"OnDeviceRecommendationsShelfController":ZT
return await new Promise((n,i)=>{if(o(e.user.dsid)){const e=`${r}: User is currently not signed in.`
return yg.unexpectedType(SG,e,null),void i(new Error(e))}if(o(t)){const e=`${r}: Missing valid useCase for ODP: ${t}`
return yg.unexpectedType(SG,e,null),void i(new Error(e))}e.onDeviceRecommendationsManager.performRequest({type:QT,dsId:e.user.dsid,useCase:t}).then(a=>{const l=c(a[XT]),u=m(a[TB])
if(o(l)){const e=`${r}: ODP returned no candidate ids for useCase: ${t}`
return yg.unexpectedType(SG,e,null),void i(new VQ(e))}if(o(u)){const e=`${r}: ODP returned no metrics for useCase: ${t}`
return yg.unexpectedType(SG,e,null),void i(new Error(e))}const d=[]
for(const e of l)s(e)&&d.push({id:e,type:Gj})
const f=new Uz(e,d).withFilter("apps:recommendable",GG).addingQuery(pq.onDevicePersonalizationUseCase,t)
Zn(e,f),An(e,f).then(e=>{n({candidates:l,recoMetrics:u,dataContainer:e})}).catch(e=>{const t=`${r}: Failed to fetch Media API data for candidates: ${l}`
yg.unexpectedType(SG,t,null),i(new Error(t))})}).catch(e=>{const n=`${r}: Failed to perform ODP for useCase: ${t}, ${e}`
yg.unexpectedType(SG,n,null),i(new Error(n))})})}function ur(e){const t=new Set,n=[]
return e.forEach((e,r)=>{t.has(e.appId)||(n.push(e.appId),t.add(e.appId))}),n}function dr(e,t){var n
const r=Number(null!==(n=t[YT])&&void 0!==n?n:0)
for(const t of e){const e=t.score,n=t.onDeviceScore
t.modifiedScore=r*n+(1-r)*e}return e.sort((e,t)=>t.modifiedScore-e.modifiedScore),e}function fr(e,t){const n=e.filter(e=>i(e.pinnedPosition))
e=e.filter(e=>r(e.pinnedPosition))
const o=new Map
e.reverse(),e.forEach((e,t)=>{e.appId in o?o[e.appId].push(e):o[e.appId]=[e]})
const s=[],a=Math.max(...Object.values(o).map(e=>e.length))
for(let e=0;e<a;e++){const e=[]
t.forEach(t=>{t in o&&o[t].length>0&&(s.push(o[t].pop()),0!==o[t].length&&e.push(t))}),t=e}const c=new Array(n.length+s.length)
n.sort((e,t)=>e.pinnedPosition-t.pinnedPosition)
for(const e of n)e.pinnedPosition<c.length?c[e.pinnedPosition]=e:s.push(e)
s.reverse()
for(const[e,t]of c.entries())r(t)&&s.length&&(c[e]=s.pop())
return c}function pr(e){const t=new Map
return s(e)&&e.split(",").forEach(e=>{const n=e.split("=")
2===n.length&&t.set(n[0],Number(n[1]))}),t}function hr(e,t,n,s,a,c,l,u){var p
let h={sortedDataItems:[],processingType:0}
if(null!==(p=null==n?void 0:n.metricsData[UO])&&void 0!==p&&p){const e=function(e,t,n,r,o){const s=[]
for(const e of t){const t=new WQ(e),a=f(e,P_)
let c=d(e,NF)
if(((0,Tg.isNothing)(c)||0===c.length)&&(null==o?void 0:o.length)>0&&(c=o),(0,Tg.isNothing)(c)||0===c.length)r&&(t.isUnpersonalizedMatch=!0,s.push(t))
else{if(i(n)){const e=n[c]
i(e)&&i(e.onDeviceSignals)&&(t.onDeviceScore=+e.onDeviceSignals)}t.appId=c,t.score=null!=a?a:0,s.push(t)}}return s}(0,t,null==n?void 0:n.personalizationData,s,l),r=dr(e,null==n?void 0:n.metricsData),o=e.every((e,t)=>e===r[t])
h={sortedDataItems:r,processingType:o?0:2},i(c)&&h.sortedDataItems.length>=c&&(h.sortedDataItems=h.sortedDataItems.slice(0,c))}else{const f=function(e,t,n,r,s){const a=[]
for(const c of t){const t=new WQ(c),l=d(c,KT)
let u=d(c,NF),f=d(c,GO)
if(((0,Tg.isNothing)(u)||0===u.length)&&(null==s?void 0:s.length)>0&&(u=s,f=e.random.nextUUID()),o(l)||o(u)||o(f)){r&&(t.isUnpersonalizedMatch=!0,a.push(t))
continue}const p=l.split(",")
if(p.includes(qQ)&&(t.isWildcardMatch=!0),i(n)){const e=n[u]
if(i(e))for(const n of p)if(e.userSegments.includes(n)){t.isExactMatch=!0
break}}t.appId=u,t.groupId=f,a.push(t)}return a}(e,t,null==n?void 0:n.personalizationData,s,l),p=ur(f),w=function(e,t){var n
const r=new Set,i=[],s=t.filter(e=>e.isExactMatch).map(e=>e.groupId),a=new Set(s)
t.forEach((e,t)=>{if(o(e.groupId))i.push(e)
else if(!r.has(e.groupId))if(e.isUnpersonalizedMatch)i.push(e)
else{if(e.isExactMatch)return r.add(e.groupId),void i.push(e)
if(!a.has(e.groupId)){if(e.isWildcardMatch)return r.add(e.groupId),void i.push(e)
e.isFallbackMatch=!0,i.push(e)}}})
const c=[],l=i.slice().reverse()
for(const e of l)e.isFallbackMatch&&r.has(e.groupId)||(c.push(e),(null===(n=e.groupId)||void 0===n?void 0:n.length)>0&&r.add(e.groupId))
return c.reverse(),c}(0,f)
h=function(e,t,n,o,i,s){let a
const c=t.filter(e=>e.isExactMatch||e.isWildcardMatch||e.isUnpersonalizedMatch||r(e.groupId))
return r(i)?a=wr(c,o,s):c.length>=i||!n?(a=wr(c,o,s),a.sortedDataItems=a.sortedDataItems.slice(0,i)):(a=wr(t,o,s),a.sortedDataItems=a.sortedDataItems.slice(0,i)),a}(0,w,a,p,c,u)}const w=h.sortedDataItems.map(e=>e.rawData)
return{personalizedData:w,processingType:(t.length!==w.length?1:0)+h.processingType}}function wr(e,t,n){const r=e.filter(e=>e.isExactMatch)
let o=e.filter(e=>!e.isExactMatch)
i(n)&&n&&(o=fr(o,t))
const s=r.concat(o),a=e.every((e,t)=>e===s[t])
return{sortedDataItems:s,processingType:a?0:2}}function gr(e,t,n,r,a,c=!1,l,u,p){return mr(e)?t===tA?function(e,t,n,r,o){var a,c
let l=t,u=!1
const p=[]
e.featureFlags.isEnabled("contingent_offers_personalization")||(l=t.filter((e,t)=>!s(e.type)||e.type===xj||(p.push(t),!1)),u=l.length!==t.length)
const h=null==r?void 0:r.metricsData,g=null!==(a=h.use_segment_scores)&&void 0!==a&&a,m=null!==(c=h[UO])&&void 0!==c&&c
let v
if(v=g||m?function(e,t,n,r){var o
let s=[],a=[]
null!==(o=null==n?void 0:n.metricsData[UO])&&void 0!==o&&o?(s=function(e,t,n){const r=[]
for(const[e,o]of t.entries()){const t=new HQ(o),s=w(o,JT),a=d(o,NF),c=f(o,P_)
if(i(n)){const e=n[a]
i(e)&&i(e.onDeviceSignals)&&(t.onDeviceScore=+e.onDeviceSignals)}t.appId=a,t.score=null!=c?c:0,s&&(t.pinnedPosition=e),r.push(t)}return r}(0,t,null==n?void 0:n.personalizationData),a=dr(s,null==n?void 0:n.metricsData)):(s=function(e,t){const n=[]
for(const[e,r]of t.entries()){const t=new HQ(r),o=d(r,NF),i=d(r,GO),s=f(r,P_),a=d(r,"meta.personalizationData.segScores"),c=w(r,JT),l=pr(a)
t.appId=o,t.groupId=i,t.score=null!=s?s:0,t.segScores=l,c&&(t.pinnedPosition=e),n.push(t)}return n}(0,t),a=function(e,t){const n=function(e,t){var n
for(const r of e){const e=r.appId,o=r.segScores,s=r.score
if(i(t)){const a=t[e]
if(i(a)){let e=0,t=0
for(const n of a.userSegments)o.has(n)&&(t+=o.get(n),e+=1)
if(e){const n=t/e
r.modifiedScore=s*n}}else{const e=null!==(n=o.get("0"))&&void 0!==n?n:0
r.modifiedScore=s*e}}else r.modifiedScore=s}return e}(e,null==t?void 0:t.personalizationData),r=function(e,t){var n
const r=Number(null!==(n=t[YT])&&void 0!==n?n:0)
for(const t of e){const e=t.score,n=t.modifiedScore
t.modifiedScore=r*n+(1-r)*e}return e}(n,null==t?void 0:t.metricsData)
return r.sort((e,t)=>t.modifiedScore-e.modifiedScore),r}(s,n),i(r)&&r&&(a=fr(a,ur(a))))
const c=a.map(e=>e.rawData),l=a.every((e,t)=>e===s[t])?0:2
return{personalizedData:c,processingType:(t.length!==c.length?1:0)+l}}(0,l,r,o):hr(e,l,r,n,null,null,null,o),u){const e=v.personalizedData
p.forEach(n=>{const r=t[n]
n<e.length?e.splice(n,0,r):e.push(r)}),v={personalizedData:e,processingType:v.processingType}}return v}(e,n,r,a,p):hr(e,n,a,r,c,l,u,p):function(e,t,n){let r=[]
const s=new Set
for(const e of t){const t=d(e,KT),n=d(e,NF),i=d(e,GO)
o(t)||o(n)||o(i)?r.push(e):s.has(i)||t.split(",").includes(qQ)&&(r.push(e),s.add(i))}return i(n)&&r.length>n&&(r=r.slice(0,n)),{personalizedData:r,processingType:null}}(0,n,l)}function mr(e){return e.user.isOnDevicePersonalizationEnabled&&e.bag.enableOnDevicePersonalization}function vr(e,t){return mr(e)?e.host.platform===bU?e.user.onDevicePersonalizationDataContainerForAppIds(Array.from(t)):{personalizationData:{},metricsData:null}:null}function yr(e){return mr(e)&&e.host.platform===bU?e.user.onDevicePersonalizationDataContainerForAppIds([]).metricsData:null}function Ar(e,t){if(!Y(t,_E))return null
const n=q(t,BE)
if(s(n))return n
const r=q(t,MG)
return s(r)?r.replace(/\n/g," "):null}function Tr(e,t,n,a,c,u,d,f){return yg.context("searchResultFromData",()=>{let p=null
const h=t.type,w={metricsOptions:{pageInformation:c.pageInformation,locationTracker:c.locationTracker,targetType:RU,createUniqueImpressionId:!0},hideZeroRatings:!0,artworkUseCase:8,isNetworkConstrained:u,canDisplayArcadeOfferButton:$d(0,ux),clientIdentifierOverride:Cr(0,d),isMultilineTertiaryTitleAllowed:!1},g=function(e,t,n){var r,o
if(!function(e){return e.client.deviceType===Lj}(e))return ZU
const s=t.meta,a=null===(r=null==s?void 0:s.displayStyle)||void 0===r?void 0:r.condensed
if(i(a))return Sr(e,a)
const c=null===(o=null==n?void 0:n.displayStyle)||void 0===o?void 0:o.condensed
return i(c)?Sr(e,c):Pr(e)}(e,t,f)
switch(h){case u$:case zx:case eU:case kj:case PU:const u=qi(e,t,{useOTDTextStyle:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,isHeroCard:!1,isSearchContext:!0},new AJ(c.pageInformation,c.locationTracker))
if(u&&u.media&&u.media.kind===rN){const e=u.media.lockup
e.theme=bj,p=new vQ(e)}else if(function(e,t,n){if(1!=(l(n,"experiments.showGridCard")?0:1))return!1
switch(t.type){case PU:return s(W(t,UE))
case u$:case zx:return!0
case kj:switch(Ki(t)){case Zg.List:case Zg.NumberedList:case Zg.Grid:case Zg.River:return!0
default:return!1}default:return!1}}(0,t,n)){const n=function(e,t,n){const r=function(e,t){if(t.type===eU)return e.loc.string(kS)
const n=Ar(0,t)
return s(n)?n:e.loc.string("Search.EditorialSearchResultType.Heading.Collection")}(e,t),i=function(e,t){return t.type===eU?q(t,jj):Ed(e,t,jj)}(e,t),a=vf(e,t,i,{targetType:RU,pageInformation:n.pageInformation,locationTracker:n.locationTracker})
ef(e,a,i)
const c=Iu(e,t,{actionType:Dj,targetType:Nj,pageInformation:n.pageInformation,locationTracker:n.locationTracker,id:hO,idType:sj},e.host.clientIdentifier)
c.title=e.loc.string(xU)
const l={lockupOptions:{metricsOptions:{pageInformation:n.pageInformation,locationTracker:n.locationTracker,targetType:XG},skipDefaultClickAction:!1,artworkUseCase:8,hideCompatibilityBadge:!1},filter:128}
let u=se(t,uG)
o(u)&&(u=se(t,DE))
const d=Pu(e,u,l)
nf(n.locationTracker)
const f=new SQ(r,i,d,c,null)
return pf(e,f,a),o(d)?null:f}(e,t,c)
n&&(p=n)}else{const n=function(e,t,n,o){return yg.context("editorialSearchResultFromData",()=>{let a
const c=q(t,jj)
switch(t.type){case PU:{const n=new bQ(c),r=W(t,UE)
if(s(r))n.collectionAdamIds=r
else{const r=Fu(e,H(t,_j),{useCase:9,allowingTransparency:!0})
n.iconArtwork=r}n.type=HB,a=n
break}case u$:case zx:{const n=new bQ(c)
n.artwork=Fu(e,H(t,_j),{useCase:9,cropCode:"sr"}),n.collectionAdamIds=W(t,UE),n.type=AU,a=n
break}case kj:{if(e.bag.searchFilterEditorialItemIds.has(t.id))return null
const c=new AJ(n.pageInformation,n.locationTracker),l=function(e,t,n,o){const a={useOTDTextStyle:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,isHeroCard:!1,isSearchContext:!0}
a.prevailingCropCode=o&&e.client.isPhone?"DMGE.AppST01":"fo"
const c=qi(e,t,a,n)
if(!c)return null
const l=new bQ(c.title)
l.type=lN,l.clickAction=c.clickAction
let u=null
if(c.media)switch(c.media.kind){case XN:const n=c.media
switch(l.artwork=n.artworks[0],r(l.artwork)&&(l.iconArtwork=n.icon),q(t,Yx)){case Zg.AppOfTheDay:case Zg.GameOfTheDay:const n=ie(e,t,uG)
n&&(l.title=q(n,jj)||l.title)}break
case MI:case $I:u=c.media.lockups
break
case _j:const o=c.media
l.artwork=o.artworks[0]
break
case pU:case PL:u=c.media.lockups
break
case YG:const s=c.media
if(l.artwork=s.videos[0].preview,l.video=s.videos[0],c.overlay instanceof uY){const e=c.overlay
l.title=e.title,l.subtitle=e.description}else l.subtitle=s.description
break
case w$:const a=c.media
if(l.artwork=a.artworks[0],l.appEventFormattedDates=a.formattedDates,l.subtitle=c.inlineDescription,l.tintColor=a.tintColor,l.type="appEventStory",i(c.style))switch(c.style){case _G:case nj:l.mediaOverlayStyle=_G
break
case bj:l.mediaOverlayStyle=bj
break
default:ue(c.style)}}if(c.overlay)switch(c.overlay.kind){case XG:const e=c.overlay
l.artwork||(u=[e.lockup])
break
case Rm:u=c.overlay.lockups
break
case wB:const t=c.overlay
l.subtitle=t.paragraph.text}if(i(u)){l.collectionAdamIds=[],l.collectionAppIcons=[]
for(const e of u)l.collectionAdamIds.push(e.adamId),l.collectionAppIcons.push(e.icon)
1===u.length&&(l.lockup=u[0])}const d=Ht(0,t)
l.editorialDisplayOptions=Wt(d)
const f=Ar(0,t);(null==f?void 0:f.length)>0&&f!==l.title&&(l.tagline=f)
const p=c.heroMedia
return s(p)&&(s(p.artworks[0])?(l.artwork=p.artworks[0],l.artwork.crop="em"):s(p.videos[0])&&(l.video=p.videos[0])),l.video&&(l.video.showPlaybackControls=!1,l.video.canPlayFullScreen=!1,l.video.playbackControls={}),l.collectionAdamIds||l.artwork||l.iconArtwork?l:null}(e,t,c,o===pF)
a=l
break}case eU:{const n=new bQ(c)
if(n.artwork=Fu(e,H(t,bD),{useCase:9,cropCode:"sr"}),n.type=dG,(0,Ag.isSome)(n.artwork))a=n
else{let r=se(t,DE)
r=r.filter(t=>!tt(e,t,76532))
const o=[],s=[]
r.forEach(t=>{o.push(t.id)
const n=Gu(e,t,{useCase:9})
i(n)&&s.push(n)}),n.collectionAdamIds=o,n.collectionAppIcons=s,a=n}break}}if(r(a))return null
if(a instanceof bQ&&null!=a.collectionAdamIds&&a.collectionAdamIds.length){const e=a.collectionAdamIds.length
a.artworkGridType=e<=5?"extraLarge":e<=8?eB:e<=16?ES:PB}const l=vf(e,t,a.title,n)
return a.clickAction=Iu(e,t,l,null),pf(e,a,l),a})}(e,t,w.metricsOptions,g)
n&&(n.title&&(n.title=n.title.replace(/\n/g," ")),n instanceof bQ&&n.subtitle&&(n.subtitle=n.subtitle.replace(/\n/g," ")),p=n)}break
case $G:if(o(xu(e,t)))return null
const d=wu(e,t,w)
d.theme=bj,Ir(e,d,f),p=new vQ(d)
break
default:if(delete t.attributes[wN],h===Pj){const n=hu(e,t,w)
Ir(e,n,f),p=new yQ(n)}else{const n=vu(e,t,w,{showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}},f)
Ir(e,n,f)
const o=function(e,t,n,o,s,a){return yg.context("appEventSearchResultFromData",()=>{if(!kr(e,t))return null
const{dataItems:c,personalizationData:u}=Or(e,t,s)
let d,f
for(const n of c){const r=Er(e,n,t,a,o.offerEnvironment,o.offerStyle)
if(i(r)){d=r,f=null!=t?t:ie(e,n,Tj)
break}}if(r(d))return null
const p=l(t.meta,jE),h=new TQ
h.lockup=n,h.appEvent=d,h.alwaysShowAppEvent=p,h.clickAction=n.clickAction
const w=Zd(null,null==u?void 0:u.processingType,null),g={...a,id:d.appEventId,kind:dv,targetType:HL,title:d.title,softwareType:null,recoMetricsData:w}
return i(f)&&(g.relatedSubjectIds=[f.id]),pf(e,h,g),h})}(e,t,n,w,a,c)
i(o)?(p=o,p.condensedBehavior=ZU):p=new mQ(n)}}return i(p)&&r(p.condensedBehavior)&&(p.condensedBehavior=g),p})}function br(e,t,n,r,o,s){if(!kr(e,t))return!1
const{dataItems:a}=Or(e,t,s)
let c
for(const n of a)if(c=Er(e,n,t,o,void 0,void 0),i(c))break
const l=!(!i(n)||!i(n[t.id]))&&n[t.id],u=!(!i(r)||!i(r[t.id]))&&["downloadable"].includes(r[t.id])
return(l||u)&&i(c)}function Sr(e,t){switch(t){case pF:return pF
case ZU:return ZU
case"when-installed":return OS
default:return Pr(e)}}function Pr(e){return e.client.deviceType===Lj?OS:ZU}function Ir(e,t,n){const o=function(e,t,n,o){var i
if(r(t)||!e.client.isPhone)return null
const a=null===(i=null==t?void 0:t.displayStyle)||void 0===i?void 0:i.metadataPrecedenceOrder
if(!s(a))return null
const c=a.indexOf(n),l=a.indexOf(o)
return-1===c&&-1===l?null:-1!==c&&(-1===l||c<l)}(e,n,ON,tF)
i(o)&&(t.isEditorsChoice=t.isEditorsChoice&&o)}function Cr(e,t){return t===Fj?JV:null}function kr(e,t){if(!ki(e)||r(t.meta))return!1
const n=c(t.meta,GE).length>0
return![u$,zx,eU,kj,PU,$G,Pj].includes(t.type)&&n}function Or(e,t,n){const r=l(t.meta,jE),o=c(t.meta,GE)
if(r)return{dataItems:[o[0]]}
const i=gr(e,ej,o,!1,n,!1,void 0,t.id),s=i.personalizedData
return s.length<=0?{dataItems:[]}:{dataItems:s,personalizationData:i}}function Er(e,t,n,o,i,s){const a=Ni(e,t,n,!1,!0,i,s,!1,!1,{...o,targetType:HL},!1,!0,null,!1,!1)
return r(a)||a instanceof Date?null:a}function Rr(e,t,n){const r=n&&n[t]
return e&&t&&e===t&&!r}function Dr(e,t,n,s,a,c,l,u,d,f,p,h){const w=o(c),g=xr(e,t,n,a,c,l)
if(r(g))return null
const m={platform:t.mediaPlatformUsedForDisplayStyle,style:g}
if(jr(e,`[${n}] tentatively resolved to: ${Gr(m)}`),"DUP"===s){!function(e,t){switch(e){case"PI4":t.portraitScreenshots.length<=5&&t.portraitScreenshots.splice(0,4)
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
case"PV1":case"LV1":t.videos.splice(0,1)}}(g,t)
const r=xr(e,t,n,a,null,l),o=function(e,t,n){switch(t){case"PV4":case"PI4":case"LI1":case"LV1":return!0
case"PV3":case"PI3":return 3===Ur(e,n)
case"PV2":case"PI2":return 2===Ur(e)
default:return!1}}(e,r,l),i=br(e,u,d,f,p,h)
return(o||i)&&w?(jr(e,`[${n}] Organic Dupe would be full creative as ${r} so choosing tentative style for ad`),m):o&&!w&&Mr(g,c)?(jr(e,`[${n}] Organic Dupe would be a full creative, but ad is not the first so returning compatible style with first ${g}`),m):Mr("TEXT",c)?(jr(e,`[${n}] tentative style would not yield full creative for organic result so returning TEXT`),{style:"TEXT"}):(jr(e,`[${n}] tentative style would not yield full creative for organic result and first style is not compatible with TEXT so skipping ad`),null)}return i(c)&&"TEXT"===c.style?(jr(e,`[${n}] tentative style would be filtered since the first ad has style: ${Gr(c)}, so returning TEXT`),{style:"TEXT"}):m}function _r(e){return!!i(e)&&e===SL}function Lr(e,t){const n=e.findIndex(e=>e.id===t)
return-1===n?null:n}function xr(e,t,n,r,o,i){if(!r)return jr(e,`[${n}] is not allowed to display media because of iAd configuration.`),"TEXT"
if(t.mediaPlatformUsedForDisplayStyle&&o&&o.mediaPlatform&&!t.mediaPlatformUsedForDisplayStyle.isEqualTo(o.mediaPlatform))return jr(e,`[${n}] filtered because media is derived from: ${t.mediaPlatformUsedForDisplayStyle.mediaType}, but first ad media is derived from: ${o.mediaPlatform.mediaType}`),null
let a,c=null
if(s(t.videos)&&(c=t.videos[0].preview),s(c)&&c.isLandscape()&&Mr("LV1",o))a="LV1"
else if(s(c)&&c.isPortrait()&&_r(i)&&Mr("PV4",o))a=s(t.portraitScreenshots)&&t.portraitScreenshots.length>=3?"PV4":s(t.portraitScreenshots)&&t.portraitScreenshots.length>=2?"PV3":s(t.portraitScreenshots)?"PV2":"PV1"
else if(s(c)&&c.isPortrait()&&Mr("PV3",o))a=s(t.portraitScreenshots)&&t.portraitScreenshots.length>=2?"PV3":s(t.portraitScreenshots)?"PV2":"PV1"
else if(s(t.landscapeScreenshots)&&Mr("LI1",o))a="LI1"
else if(s(t.portraitScreenshots)&&_r(i)&&Mr("PI4",o))a=t.portraitScreenshots.length>=4?"PI4":t.portraitScreenshots.length>=3?"PI3":t.portraitScreenshots.length>=2?"PI2":"PI1"
else if(s(t.portraitScreenshots)&&Mr("PI3",o))a=t.portraitScreenshots.length>=3?"PI3":t.portraitScreenshots.length>=2?"PI2":"PI1"
else{if(!Mr("TEXT",o))return jr(e,`[${n}] filtered because we could not create a compatible style for the first style of: ${Gr(o)}`),null
a="TEXT"}return 2===Ur(e,i)&&("PI3"===a?a="PI2":"PV3"===a&&(a="PV2")),a}function Mr(e,t){if(r(t))return!0
let n=!0
switch(e){case"TEXT":n="TEXT"===t.style
break
case"LV1":case"LI1":n="LV1"===t.style||"LI1"===t.style
break
case"PI4":case"PI3":case"PI2":case"PI1":case"PV4":case"PV3":case"PV2":case"PV1":n="PI4"===t.style||"PI3"===t.style||"PI2"===t.style||"PI1"===t.style||"PV4"===t.style||"PV3"===t.style||"PV2"===t.style||"PV1"===t.style
break
default:n=!1}return n}function $r(e){let t=null
const n=e.trailers[0]
let r=null
s(n)&&(n.videos.sort((e,t)=>KQ(e.preview,t.preview)),r=n.videos,t=n.mediaPlatform)
const o=e.screenshots[0],i=[],a=[]
return s(o)&&(o.artwork.forEach(e=>{e.isPortrait()?i.push(e):a.push(e)}),t=o.mediaPlatform),{portraitScreenshots:i,landscapeScreenshots:a,videos:r,mediaPlatformUsedForDisplayStyle:t}}function Fr(e,t){let n=null
const r=d(H(e,SE),t)
return r&&r.length&&(n=JSON.parse(r)),n}function Nr(e,t){return o(e)?"NOORGANIC":t?"DUP":"NORMAL"}function Br(e,t,n,r){var o,a
const c=s(null===(a=null===(o=e.impressionMetrics)||void 0===o?void 0:o.fields)||void 0===a?void 0:a.pageCustomId),l=n&&!r&&!c
if(s(e.trailers)){const t=e.trailers.shift()
t.videos.sort((e,t)=>KQ(e.preview,t.preview)),e.trailers.unshift(t)}let u,d=[],f=[]
if(s(e.screenshots)){const t=e.screenshots.shift()
t.artwork.forEach(e=>{e.isPortrait()?d.push(e):f.push(e)}),u=t.mediaPlatform}switch(t.style){case"PI4":if(e.trailers=null,f=null,e.screenshotsDisplayStyle=SL,l)if(d.length>5&&d.length<8){const e=d.splice(0,4),t=4-d.length,n=e.splice(e.length-t)
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
case"PV4":if(f=null,e.screenshotsDisplayStyle=SL,l)if(e.trailers[0].videos.splice(0,1),d.length>4&&d.length<7){const e=d.splice(0,3),t=3-d.length,n=e.splice(e.length-t)
d.unshift(...n)}else d.splice(0,3)
else e.trailers[0].videos.splice(1),d.splice(3)
break
case"PV3":f=null,l?(e.trailers[0].videos.splice(0,1),d.splice(0,2)):(e.trailers[0].videos.splice(1),d.splice(2))
break
case"PV2":f=null,l?(e.trailers[0].videos.splice(0,1),d.splice(0,1)):(e.trailers[0].videos.splice(1),d.splice(1))
break
case"LV1":case"PV1":l?e.trailers[0].videos.splice(0,1):e.trailers[0].videos.splice(1),f=null,d=null
break
case"TEXT":e.trailers=null,f=null,d=null}if(s(e.trailers)){const t=e.trailers.shift()
e.trailers=[t]}const p=[].concat(...[f,d].filter(i))
if(s(p)){const t=new TV(p,u)
e.screenshots=[t]}else e.screenshots=null
return e}function Ur(e,t=null){return e.client.isPhone?_r(t)?4:3:2}function Gr(e){if(o(e))return""
let t=""
return e&&e.mediaPlatform&&(t=` derived from ${e.mediaPlatform.mediaType} media`),`${e.style}${t}`}function jr(e,t){e.console.log(`[Ads] ${t}`),e.client.buildType===RF&&e.isAvailable(eV)&&i(e.ads.debugLog)&&(r(JQ)&&i(e.ads.isNativeAdLoggingEnabled)&&(JQ=e.ads.isNativeAdLoggingEnabled()),JQ&&e.ads.debugLog(t))}function Vr(e,t,n,r,o){var i
if(!(n instanceof mQ||n instanceof TQ))return
const a=n.lockup,c=t.lockups[0]
if(c.adamId!==a.adamId)return
const l=new Set
if(s(c.screenshots))for(const e of c.screenshots[0].artwork)l.add(e.template)
if(s(c.trailers))for(const e of c.trailers[0].videos)l.add(e.preview.template)
if(s(a.screenshots)){const e=a.screenshots[0].artwork.filter(e=>!l.has(e.template))
a.screenshots[0]=new TV(e,a.screenshots[0].mediaPlatform)}if(s(a.trailers)){const e=a.trailers[0].videos.filter(e=>!l.has(e.preview.template))
a.trailers[0]=new ez(e,a.trailers[0].mediaPlatform)}if((null===(i=null==r?void 0:r.displayStyle)||void 0===i?void 0:i.screenshots)===SL)switch(o){case"PV4":case"PI4":(e=>{const t=a.screenshots[0].artwork
if(t.length>=4)return
let n=4-t.length
const r=c.screenshots[0].artwork.slice().reverse()
for(const e of r){if(n<=0)return
a.screenshots[0].artwork.unshift(e),n-=1}})()}}function Hr(e,t,n,o,i,s,a,c){var l,u
const d=n.lockups[0]
if(d.adamId!==o.id)return
const f=t.find(e=>e.id===d.adamId)
br(e,o,i,s,a,c)||function(e,t){var n
let o=y(t.meta)
r(e)?null===(n=null==o?void 0:o.cppData)||void 0===n||delete n[c$]:(r(o)&&(o={}),r(o.cppData)&&(o.cppData={}),o.cppData[c$]=e),t.meta=o}(null===(u=null===(l=null==f?void 0:f.meta)||void 0===l?void 0:l.cppData)||void 0===u?void 0:u[c$],o)}function Wr(e){return!!function(e){return e.host.clientIdentifier===YV||e.host.clientIdentifier===XV}(e)||e.host.platform===Ej}function qr(e,t){return s(H(t,wN))}function zr(e,t,n,r,o=!0){if(!r.isAdvert)return void Jr(e,t,n,r)
let i
e.props.enabled(zB)?(n.searchAdOpportunity=function(e,t,n){const r=Qr(e,t,n),o=Xr(r.instanceId,n)
return new uQ(r.instanceId,o,r)}(e,t,r.pageInformation),i=n.searchAdOpportunity.searchAd):(n.searchAd=Qr(e,t,r.pageInformation),i=n.searchAd)
const s=Od(e,t)?W$:qD,a=to(0,r.pageInformation),c=q(t,zD),l=Y(t,ZG)?LU:Bj,u=new jY(i.instanceId,t.id,c,s,kA,l,a)
n.clickAction=eo(0,n.clickAction,u)
const d=new jY(i.instanceId,t.id,c,s,OA,l,a)
n.buttonAction=eo(0,n.buttonAction,d),n.itemBackground="ad",n.offerDisplayProperties&&o&&(n.offerDisplayProperties=n.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,SB,"ad")),Y(t,"iad.format.userRating")||(n.rating=null,n.ratingCount=null),Jr(e,t,n,r)}function Yr(e){const t=l(H(e,wN),"passthroughAdInfo.deepLinkEligible"),n=l(e,"meta.passthroughAdInfo.deepLinkEligible")
return t||n}function Jr(e,t,n,o){const i=mf(e,t,n,Jd(e,t,n.icon,null),o,!0)
!function(e,t,n){var o,i,s,a,c
const l=null!==(i=null===(o=t.searchAdOpportunity)||void 0===o?void 0:o.searchAd)&&void 0!==i?i:t.searchAd
if(r(l))return
null===(s=t.clickAction)||void 0===s||s.actionMetrics.clearAll(),t.clickAction&&Lf(e,t.clickAction,n,!0)
const u=n.pageInformation,d={actionType:"ad_transparency"};(null==u?void 0:u.iAdInfo)&&Object.assign(d,u.iAdInfo.clickFields)
const f=Pf(e,t.adamId,Nj,d)
null!==(c=null===(a=null==u?void 0:u.iAdInfo)||void 0===a?void 0:a.shouldIncludeAdRotationFields)&&void 0!==c&&c&&f.includingFields.push(XM),l.transparencyAction.actionMetrics.addMetricsData(f)}(e,n,i),gf(e,n,i,i.pageInformation.iAdInfo)}function Kr(e){var t
return["MEDRIVER_","U","I",(null!==(t=null==e?void 0:e.artwork)&&void 0!==t?t:[]).length].join("")}function Zr(e,t){let n
const r=null==t?void 0:t.iAdInfo.placementType
if(i(r)&&e.props.enabled(zB))try{n=e.ads.getIdentifierForMissedOpportunity(r)}catch{n=e.random.nextUUID(),jr(e,`Error: getIdentifierForMissedOpportunity threw exception. Assigned ${n}`)}else n=e.random.nextUUID(),jr(e,`Error: placementType was null or empty. Assigned ${n}`)
const o=Xr(n,t)
return new uQ(n,o)}function Qr(e,t,n){let o=lo(0,t);(r(o)||0===o.length)&&(o=e.random.nextUUID(),jr(e,`Error: instanceId was null or empty. Assigned ${o}`))
const i=H(t,wN),s=q(t,"iad.impressionId"),a=q(t,"iad.privacy"),c=q(t,zD),l=new fQ(a)
l.title=e.adsLoc.string("IAD_PRIVACY_MARKER_BUTTON_TITLE")
const u=Od(e,t)?W$:qD,d=Y(t,ZG)?LU:Bj,f=to(0,n),p=new jY(o,t.id,c,u,"markerPress",d,f),h=Xr(o,n),w=eo(0,l,p)
return new dQ(o,i,h,s,w)}function Xr(e,t){const n=null==t?void 0:t.baseFields.pageId,r=typeof n===fj?n:Ej
return{placed:{adInstanceId:e,pageIdentifier:r},pageEnter:{pageIdentifier:r},pageExit:{pageIdentifier:r},onScreen:{adInstanceId:e},offScreen:{adInstanceId:e},visible:{adInstanceId:e},completed:{adInstanceId:e}}}function eo(e,t,n){const r=new vW(n),o=new EH([r,t])
return o.title=t.title,o}function to(e,t){const n=null==t?void 0:t.iAdInfo
if(r(n))return CB
const o=n.placementType
switch(o){case wU:return EA
case qB:return"searchAds"
case Cj:case BG:case vG:return EA
default:throw new Error(`This method should never be called with value: ${o}`)}}function no(e,t){if(!Wr(e))return!1
switch(t){case wU:const n=io(t)
return(0,Tg.isSome)(n)?e.bag.isSearchLandingAdsEnabled||e.bag.enabledAdPlacements.includes(n):e.bag.isSearchLandingAdsEnabled
case qB:return!0
case Cj:const o=io(t)
return!r(o)&&e.bag.enabledAdPlacements.includes(o)&&(0,Tg.isSome)(ro(e))
case BG:case vG:const i=io(t)
return!r(i)&&e.bag.enabledAdPlacements.includes(i)
default:return!1}}function ro(e){if(e.bag.todayAdMediumLockupScreenshotEnabled)return IL
if(e.bag.todayAdCondensedEnabled){if(!e.client.isPhone)return
return CL}return function(e){return!!e.client.isPhone&&"5pdfhju01"===xe(e,Cg.CondensedTodayAds)}(e)?CL:void 0}function oo(e,t,n){var r,o,i,s,a
const c=e.bag.adPlacementTimeouts,l=.3
switch(t){case qB:return n?null:null!==(r=null==c?void 0:c["search-results-in-seconds"])&&void 0!==r?r:l
case wU:return n?null:null!==(o=e.bag.searchLandingAdFetchTimeout)&&void 0!==o?o:l
case Cj:return n?null!==(i=null==c?void 0:c["today-in-seconds"])&&void 0!==i?i:l:null
case BG:return n?null:null!==(s=null==c?void 0:c["product-page-ymal-in-seconds"])&&void 0!==s?s:l
case vG:return n?null:null!==(a=null==c?void 0:c["product-page-ymal-during-download-in-seconds"])&&void 0!==a?a:l
default:return l}}function io(e){switch(e){case qB:return vM
case wU:return yM
case Cj:return Cj
case BG:return"product-page-ymal"
case vG:return"product-page-ymal-during-download"
default:return}}function so(e,t,n,o,s){var a,c,l
if(!Wr(e)||r(s.iAdInfo))return
const u=ao(n,o)
if((0,Tg.isNothing)(u))return
let d=null
if(typeof s.iAdInfo.pageFields.iAdMissedOpportunityReason===fj&&(d=s.iAdInfo.pageFields.iAdMissedOpportunityReason),(0,Tg.isNothing)(d)||0===d.length||d===nv||d===rv)return
const f=[]
for(const e of t){if(e.contentType!==uj&&e.contentType!==_B)continue
const t=e.items
i(t)&&t.length>0&&f.push(...t)}if(f.length<=u)return
const p=f[u],h=p instanceof Jq,w=p instanceof fY?p.media:null,g=i(w)&&w instanceof nY,m=i(w)&&w instanceof rY&&i(w.condensedAdLockupWithIconBackground.lockup.searchAdOpportunity),v=g&&i(w.mediumAdLockupWithScreenshotsBackground.lockup.searchAdOpportunity),y=h&&i(p.searchAdOpportunity)
m||v||y||(p.searchAdOpportunity=Zr(e,s),null===(a=p.searchAdOpportunity)||void 0===a||a.setMissedOpportunityReason(null!=d?d:JR),g?null===(c=p.searchAdOpportunity)||void 0===c||c.setTemplateType(Kr(w.mediumAdLockupWithScreenshotsBackground.screenshots[0])):null===(l=p.searchAdOpportunity)||void 0===l||l.setTemplateType(yB))}function ao(e,t){var n
const r=(null!==(n={today:[{shelfIdentifier:Cj,adEligibleIndex:1}],productPageYMAL:[{shelfIdentifier:hN,adEligibleIndex:0}],searchLanding:[{shelfIdentifier:"R8802",adEligibleIndex:0}],searchResults:[{shelfIdentifier:vM,adEligibleIndex:0}]}[e])&&void 0!==n?n:[]).find(e=>e.shelfIdentifier===t)
return s(r)&&i(r.adEligibleIndex)?r.adEligibleIndex:void 0}function co(e,t,n,o=null){var i,s
return!Wr(e)||r(n)?null:new iX(e,t,iX.createInitialSlotInfos(e,t,null===(i=null==n?void 0:n.onDeviceAd)||void 0===i?void 0:i.positionInfo,o),n.iAdId,n.clientRequestId,void 0,null===(s=n.onDeviceAd)||void 0===s?void 0:s.positionInfo)}function lo(e,t){return q(t,ZQ)}function uo(e,t,n){s(null==t?void 0:t.attributes)&&(t.attributes[ZQ]=n)}function fo(e,t,n,r){var i,a,c,l,u
const d=e.bag.adsOverrideLanguage
if(o(d)||o(t))return!0
let f=null===(i=t.meta)||void 0===i?void 0:i.resource
if(o(f)&&s(n)&&(f=null===(u=null===(l=null===(c=null===(a=null==n?void 0:n.appMetadata)||void 0===a?void 0:a.data)||void 0===c?void 0:c[0])||void 0===l?void 0:l.meta)||void 0===u?void 0:u.resource),o(f))return!1
if(q(f,"name.locale")!==d)return!1
const p=Ce(e,t,hG),h=Ce(e,f,"subtitle.locale")
if(s(p)&&h!==d)return!1
if("TEXT"===r){const n=q(t,ov)
if((0,Tg.isSome)(n)&&n!==zG){let r
const o=n
r=n===pj?NN:n
const i=Ce(e,t,r),a=Ce(e,f,o.concat(".locale"))
if(s(i)&&a!==d)return!1}}return!0}function po(e,t){if((0,Tg.isNothing)(t))return
const n=io(t)
return(0,Tg.isNothing)(n)?void 0:e.bag.adPlacementEligibleSlotPositions[n]}function ho(e,t){return{incidents:[],iAdInfo:t}}function wo(e,t){return r(t)||o(t.incidents)?null:t.incidents}function go(e,t,n){var r,o
const i=lo(0,n);(0,Tg.isNothing)(i)||(vo(t,e.props.enabled(zB)?null:new XQ(i,iv)),null===(r=null==t?void 0:t.iAdInfo)||void 0===r||r.setMissedOpportunity(e,KR,null===(o=null==t?void 0:t.iAdInfo)||void 0===o?void 0:o.placementType))}function mo(e,t,n){var r,s,a,c,l,u,d,f
if(o(null==n?void 0:n.failureReason))return
const p=null===(r=null==n?void 0:n.onDeviceAd)||void 0===r?void 0:r.instanceId,h=null===(s=null==t?void 0:t.iAdInfo)||void 0===s?void 0:s.placementType
switch(null==n?void 0:n.failureReason){case sv:i(p)&&vo(t,e.props.enabled(zB)?null:new XQ(p,iv)),null===(a=null==t?void 0:t.iAdInfo)||void 0===a||a.setMissedOpportunity(e,KR,h)
break
case iC:i(p)&&vo(t,e.props.enabled(zB)?null:new XQ(p,iC)),null===(c=null==t?void 0:t.iAdInfo)||void 0===c||c.setMissedOpportunity(e,KR,h)
break
case av:i(p)&&vo(t,e.props.enabled(zB)?null:new XQ(p,av)),null===(l=null==t?void 0:t.iAdInfo)||void 0===l||l.setMissedOpportunity(e,KR,h)
break
case"noAdAvailable":null===(u=null==t?void 0:t.iAdInfo)||void 0===u||u.setMissedOpportunity(e,JR,h)
break
case"timeout":null===(d=null==t?void 0:t.iAdInfo)||void 0===d||d.setMissedOpportunity(e,"APSLA",h)
break
case sC:i(p)&&vo(t,e.props.enabled(zB)?null:new XQ(p,sC)),null===(f=null==t?void 0:t.iAdInfo)||void 0===f||f.setMissedOpportunity(e,"NOLOC",h)}}function vo(e,t){r(e)||r(t)||e.incidents.push(t)}function yo(e,t,n){if((0,Tg.isNothing)(t))return
const r=wt(n.pageInformation)
if(null===r)return
r.id=Hd(n.id)
const o=Gd(n);(0,Tg.isSome)(o)&&(r[d_]=o),r[tU]=YG,r.typeDetails="iTunesStoreContent",r[S$]=Qd(e,n,""),n.actionDetails&&(r[zN]=n.actionDetails),t.templateMediaEvent=function(e,t){const n={}
return Object.assign(n,t),n[GB]=Zk,Ef(e,n),Sf(0,new yH(n,[],[],Of(0,n),kf(e,n)))}(e,r)
const i=y(r)
i[KM]=t.videoUrl,t.templateClickEvent=function(e,t,n,r){const o={}
Object.assign(o,r),o[GB]=UF,o[Yk]=n,o[jA]=null
const i=[GF]
return Ef(e,o),Sf(0,new yH(o,i,[],Of(0,o),kf(e,o)))}(e,0,Nj,i)}function Ao(e,t){return l(t,eX)}function To(e,t,n,r,o){return yg.context("createTodayBaseCard",()=>{const i=new fY,s=Ki(t,null==n?void 0:n.coercedCollectionTodayCardDisplayStyle),a=bo(e,t,s,n)
i.heading=a
const c=function(e,t,n){var r
let o=null
if((null==n?void 0:n.useOTDTextStyle)&&(o=null!==(r=q(t,"ofTheDayLabel"))&&void 0!==r?r:q(t,MG),(0,Ag.isSome)(o)&&(o=o.replace(/\n/g,zL))),(0,Ag.isNothing)(o)&&(o=Ed(e,t,jj,!0)),(0,Ag.isNothing)(o)){const e=So(0,t)
o=(0,Ag.isSome)(e)?q(e,jj):null}return o}(e,t,n)
i.title=c
const l=Ce(e,t,[O$,jj])
i.shortTitle=l
const u=function(e,t){return Fu(e,H(t,ly),{contentMode:bg.scaleAspectFit,allowingTransparency:!0,useCase:17})}(e,t)
i.titleArtwork=u
const d=function(e,t){var n
const r=Ht(0,t)
if(Y(t,mk)||r.suppressNoteShort)return null
let o=Ed(e,t,DB,!0)
if((0,Ag.isNothing)(o)&&!r.suppressNoteTagline){const r=So(0,t);(0,Ag.isSome)(r)&&(o=null!==(n=Ed(e,r,BB))&&void 0!==n?n:lu(e,r))}return o}(e,t)
i.inlineDescription=d
const f=Yi(e,t,n,r,c)
return f.adSlotOverride=r.parsedCardCount,i.clickAction=function(e,t,n,r,o,i,s){var a
const c=i,l={cardType:n,franchise:q(t,MG)},u=Ao(0,t)
return u&&(l[fT]=u),c[zN]=l,(0,Ag.isSome)(s)&&s(c),Ou(e,t,c,null!==(a=null==r?void 0:r.clientIdentifierOverride)&&void 0!==a?a:e.host.clientIdentifier,Ko(o.currentTodayItem),r)}(e,t,s,n,r,f,o),wf(e,i,f,a,s,Ao(0,t)),i.editorialDisplayOptions=function(e,t,n){const r=Ht(0,t),o=e.client.isPad&&(null==n?void 0:n.isHeroCard)
return{suppressTagline:z(t,mk),suppressLockup:w(r.suppressLockup),showBadgeInSmallCards:w(r.showBadgeInSmallCards),useMaterialBlur:o||w(r.useMaterialBlur)}}(e,t,n),i})}function bo(e,t,n,o){var i,s
let a=null
if(null==o?void 0:o.useOTDTextStyle)a=o.isHorizontalShelfContext?q(t,MG):null
else if(function(e,t){let n=q(e,"ofTheDayIntent")
if((0,Tg.isNothing)(n))switch(Ki(e,null==t?void 0:t.coercedCollectionTodayCardDisplayStyle)){case Zg.AppOfTheDay:n=em.AppOfTheDay
break
case Zg.GameOfTheDay:n=em.GameOfTheDay}return n===em.AppOfTheDay||n===em.GameOfTheDay}(t,o))a=null!==(i=q(t,BE))&&void 0!==i?i:q(t,MG),r(a)&&n===Zg.AppOfTheDay?a="FEATURED APP":r(a)&&n===Zg.GameOfTheDay&&(a="FEATURED GAME")
else if(n===Zg.AppEventCard){const n=So(0,t);(0,Ag.isSome)(n)&&(a=null!==(s=Rd(e,t,vF,!0))&&void 0!==s?s:q(n,JU))}else a=q(t,MG)
return a}function So(e,t){const n=se(t,lG)
if(1===(null==n?void 0:n.length))return n[0]
const r=Qi(0,t)
return 1===r.length?r[0]:null}function Po(e,t,n,r,o){return yg.context("addArtworkMediaToBaseCard",()=>{if(Y(t,XS))return!1
const i=vn(e,t,r)
return!(0,Ag.isNothing)(i)&&((0,Ag.isSome)(o)&&yo(e,null==i?void 0:i.videos[0],{pageInformation:o.pageInformation,locationTracker:o.locationTracker,id:t.id}),n.media=new zz(i.artworks,i.videos,i.cardArtLayouts,i.artworkLayoutsWithMetrics,ns(0,t,r)),n.style=os(i.joeColors,UN),n.clickAction instanceof OH&&(n.overlay=new lY(n.clickAction),n.style=nj),!0)})}function Io(e,t,n,r){return Tu(e,t,{offerEnvironment:"ad",offerStyle:tB,metricsOptions:{pageInformation:r.pageInformation,locationTracker:r.locationTracker,isAdvert:!0,adSlotOverride:r.parsedCardCount,disableFastImpressionsForAds:!0},clientIdentifierOverride:n.clientIdentifierOverride,crossLinkSubtitle:n.crossLinkSubtitle,artworkUseCase:1,canDisplayArcadeOfferButton:n.canDisplayArcadeOfferButton},{allowsAutoPlay:!0,looping:!0,showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}},null,!1)}function Co(e,t,n){const r=n.reco_algoId
if(o(r)||o(e)||o(t[r]))return e
const i=e.map(e=>{var t
return{identifier:f(e.id),score:null!==(t=f(e,P_))&&void 0!==t?t:0}}),s=t[r],a=(0,cm.demoteByEngagements)(i,s),c=e.reduce((e,t)=>({...e,[t.id]:t}),{})
return a.map(e=>c[e.identifier.toString()])}function ko(e,t){if(!s(t))return{}
const n=p(t,"data.engagementEvents.impression"),r={}
for(const e in n)if(s(e)){const t=c(n,e)
r[e]=t.map(e=>({adamIdentifier:f(e[$U]),timestamp:f(e.eventTimeMillis)}))}return r}function Oo(e){return e.bag.enableRecoOnDeviceReordering}function Eo(e){for(const t of e)switch(t.type){case lm.EditorialItem:case lm.EditorialItemGroup:return K(t.data)}return!1}function Ro(e,t){if(!mr(e))return null
const n=new Set
for(const e of t){if(r(e.contents))continue
const t=e=>d(e,NF)
for(const r of e.contents)if(r.type===kB){const e=c(r.meta,sR)
for(const r of e){const e=t(r)
s(e)&&n.add(e.toString())}}else{const e=t(r)
s(e)&&n.add(e.toString())}}return vr(e,n)}function Do(e,t,n,r,o,i){var s
const a={useOTDTextStyle:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,isHeroCard:!1}
return a.useOTDTextStyle=null!==(s=w(t,"meta.personalizationData.isOfTheDay"))&&void 0!==s&&s,a.replaceIfAdPresent=w(t,tP),a.isAdEligible=n,a.currentRowIndex=r,a.metricsDisplayStyle=o,a.isHeroCard=i,a}function _o(e,t){if(e.client.isPhone)return t.currentRowIndex}function Lo(e,t,n){switch(t){case Mg.Grid:n%2==1&&e.currentRowIndex++
break
case Mg.Hero:0!==n&&(n-1)%2!=1||e.currentRowIndex++
break
case Mg.Standard:e.currentRowIndex++}}function xo(e,t,n,r){if(e.client.isPad)t.currentRowMetricsDisplayStyle=Qg.MediumCard
else switch(n){case Mg.Grid:t.currentRowMetricsDisplayStyle=Qg.SmallCard
break
case Mg.Hero:t.currentRowMetricsDisplayStyle=0===r?Qg.MediumCard:Qg.SmallCard
break
case Mg.Standard:t.currentRowMetricsDisplayStyle=Qg.MediumCard}}function Mo(e,t){var n
if(t.type===kj)return Mg.Standard
let r
const o=Kt(t)
return K(o)&&(r=q(o,"editorialItemGroupDisplayStyle")),(0,Tg.isNothing)(r)&&(r=null!==(n=q(t,XU))&&void 0!==n?n:Mg.Standard),function(e,t){return!(0,Tg.isNothing)(t)&&(t!==Mg.Grid||e.client.isPhone)}(e,r)?r:Mg.Standard}function $o(e){return e.adLocation===e.parsedCardCount||!(0,Tg.isNothing)(e.eligibleAdLocations)&&e.eligibleAdLocations.includes(e.parsedCardCount)}function Fo(e,t,n){var r
const o=Bo(e,t,n,()=>{var r,o,i
const s=[]
null===(r=n.pageInformation.iAdInfo)||void 0===r||r.updateContainerId(null===(o=n.pageInformation.iAdInfo)||void 0===o?void 0:o.containerIdForSlotIndex(null!==(i=n.parsedCardCount)&&void 0!==i?i:0))
const a=Mo(e,t.data)
xo(e,n,a,0)
const c=Do(0,t.data,$o(n),_o(e,n),n.currentRowMetricsDisplayStyle,!1)
c.baseMetricsOptions={recoMetricsData:Ko(t)}
const l=Uo(e,n,c,t.data)
return(0,Tg.isNothing)(l)||(s.push(l),af(n.locationTracker),n.parsedCardCount++,Lo(n,a,0)),s})
if(o.contentsMetadata={type:aR,debugSectionTypeIndicatorColor:t.type===lm.EditorialItemGroup?G(pk):G($k),groupDisplayStyle:Mg.Standard},!t.isFirstItemInModule){const e=Jo(0,t);(0,Tg.isSome)(e)&&(o.background=e.shelfBackground,(0,Tg.isSome)(null===(r=o.header)||void 0===r?void 0:r.configuration)&&(o.header.configuration.eyebrowColor=e.eyebrowColor,o.header.configuration.titleColor=e.titleColor,o.header.configuration.subtitleColor=e.subtitleColor))}return o}function No(e,t,n){var r
let o=!0
const i=Bo(e,t,n,()=>{var r,i,s,a,l,u,d
const f=[],p=Oo(e)&&null!==(r=(0,am.asNumber)(t.data,"meta.personalizationData.displayEICount"))&&void 0!==r?r:100
let h=c(t.data.meta,sR);(0,Tg.isSome)(n.recoImpressionData)&&(h=Co(h,n.recoImpressionData,null!==(i=n.pageInformation.recoMetricsData)&&void 0!==i?i:{}))
const w=Mo(e,t.data)
let g=0
for(const[r,i]of h.entries()){null===(s=n.pageInformation.iAdInfo)||void 0===s||s.updateContainerId(null===(a=n.pageInformation.iAdInfo)||void 0===a?void 0:a.containerIdForSlotIndex(null!==(l=n.parsedCardCount)&&void 0!==l?l:0)),xo(e,n,w,g)
const c=Do(0,i,$o(n),_o(e,n),n.currentRowMetricsDisplayStyle,w===Mg.Hero&&0===r),d=Uo(e,n,c,i)
if((0,Tg.isSome)(d)&&(f.push(d),af(n.locationTracker),n.parsedCardCount++,Lo(n,w,g),g++),c.isHeroCard&&(0,Tg.isNothing)(d)&&([HN,RF].includes(e.client.buildType)&&yg.unexpectedType(SG,`Hero story group ${null===(u=t.data)||void 0===u?void 0:u.id} must contain a valid hero card at index ${r}. Unable to parse card ${i.id}.`,null),o=!1),r<h.length-1&&n.adPlacementBehavior===Fg.insertIntoShelf){const t=jo(e,n,Do(0,n.adData,$o(n),_o(e,n),void 0,!1));(0,Tg.isSome)(t)&&(n.parsedCardCount++,Lo(n,Mg.Standard,0),af(n.locationTracker),f.push(t))}if(f.length===p)break}if(o){const n=3
f.length!==n&&([HN,RF].includes(e.client.buildType)&&yg.unexpectedType(SG,`Hero story group ${null===(d=t.data)||void 0===d?void 0:d.id} must contain exactly ${n} items but only found ${f.length} items.`,null),o=!1)}return f})
let s=Mo(e,t.data)
if(s!==Mg.Hero||o||(s=Mg.Standard),i.contentsMetadata={type:aR,debugSectionTypeIndicatorColor:G(pk),groupDisplayStyle:s},!t.isFirstItemInModule){const e=Jo(0,t);(0,Tg.isSome)(e)?(i.background=e.shelfBackground,(0,Tg.isSome)(null===(r=i.header)||void 0===r?void 0:r.configuration)&&(i.header.configuration.eyebrowColor=e.eyebrowColor,i.header.configuration.titleColor=e.titleColor,i.header.configuration.subtitleColor=e.subtitleColor)):s===Mg.Hero&&Array.isArray(i.items)&&(i.background=function(e){const t=e.map(e=>e.media.bestBackgroundColor()).filter(e=>(0,Tg.isSome)(e))
let n=null
if(t.length>0&&t.length<=4&&t.length===e.length)switch(t.length){case 1:n={type:iL,colors:{colorCount:"oneColor",color:t[0]}}
break
case 2:n={type:iL,colors:{colorCount:"twoColor",top:t[0],bottom:t[1]}}
break
case 3:n={type:iL,colors:{colorCount:"threeColor",top:t[0],bottomLeading:t[1],bottomTrailing:t[2]}}
break
case 4:n={type:iL,colors:{colorCount:"fourColor",topLeading:t[0],topTrailing:t[1],bottomLeading:t[2],bottomTrailing:t[3]}}}else n={type:_U,color:G("secondarySystemBackground")}
return n}(i.items))}return i}function Bo(e,t,n,r){const i=t.type===lm.EditorialItemGroup,s=new Ez(_B)
if(s.id=t.data.id,s.isHorizontal=!1,s.header=function(e,t,n){var r
if(null!==(r=w(t.data,"meta.personalizationData.suppressHeader"))&&void 0!==r&&r)return null
const o={eyebrow:Vo(0,t),eyebrowArtwork:qo(e,t,tm.Eyebrow),eyebrowArtworkType:zo(e,t,tm.Eyebrow),title:Ho(0,t),titleArtwork:qo(e,t,tm.Title),titleArtworkType:zo(e,t,tm.Title),subtitle:Wo(0,t),configuration:{eyebrowImageColor:null,titleImageColor:null,includeSeparator:!1}}
return(0,Tg.isSome)(o.eyebrow)||(0,Tg.isSome)(o.title)||(0,Tg.isSome)(o.subtitle)?o:null}(e,t),i){const r={id:s.id,kind:jO,softwareType:null,targetType:JG,title:Ho(0,t,!0),pageInformation:n.pageInformation,locationTracker:n.locationTracker,idType:tj,recoMetricsData:Ko(t)}
t.type===lm.EditorialItemGroup&&(r[hT]=d(t.data,ZS),r[pT]=d(t.data,QS)),pf(e,s,r),ef(e,r,r.title)}return s.items=r(),s.isHidden=o(s.items),i&&(nf(n.locationTracker),af(n.locationTracker)),s}function Uo(e,t,n,r){var o,a
let c
if(t.adPlacementBehavior===Fg.replaceOrganic&&i(n.replaceIfAdPresent)&&w(n.replaceIfAdPresent)){const o=jo(e,t,n)
c=s(o)?o:qi(e,r,n,t)}else if(t.adPlacementBehavior===Fg.dropAd&&i(n.replaceIfAdPresent)&&!w(n.replaceIfAdPresent)){if(c=qi(e,r,n,t),s(t.adData)){const n=t.adIncidentRecorder
null===(o=null==n?void 0:n.iAdInfo)||void 0===o||o.setMissedOpportunity(e,nv,null===(a=null==n?void 0:n.iAdInfo)||void 0===a?void 0:a.placementType)}}else c=qi(e,r,n,t)
return c}function Go(e,t){let n=null
if(!no(e,Cj)||(0,Tg.isNothing)(t.adData)||t.adPlacementBehavior!==Fg.insertIntoShelf)return n
if(t.adLocation!==t.parsedCardCount)return n
n=new Ez(_B),n.id=t.adData.id,n.isHorizontal=!1,n.contentsMetadata={type:aR,debugSectionTypeIndicatorColor:G($k),groupDisplayStyle:Mg.Standard}
const r=[],o=jo(e,t,Do(0,t.adData,$o(t),_o(e,t),void 0,!1))
return(0,Tg.isSome)(o)&&(t.parsedCardCount++,Lo(t,Mg.Standard,0),af(t.locationTracker),r.push(o)),n.items=r,s(n.items)?n:null}function jo(e,t,n){var o,s,a
if(!no(e,Cj))return null
if(t.adLocation!==t.parsedCardCount&&t.adPlacementBehavior!==Fg.replaceOrganic)return null
null===(o=t.pageInformation.iAdInfo)||void 0===o||o.updateContainerId(null===(s=t.pageInformation.iAdInfo)||void 0===s?void 0:s.containerIdForSlotIndex(null!==(a=t.parsedCardCount)&&void 0!==a?a:0))
const c=function(e,t,n,o,s){return yg.context("createTodayAdCard",()=>{var a,c,l
if(r(t))return null
const u=To(e,t,o,s)
zi(e,t,o,s,d(t.attributes.name))
const f=vf(e,t,d(t.attributes.name),{targetType:_B,pageInformation:s.pageInformation,locationTracker:s.locationTracker,isAdvert:!0,rowIndex:o.currentRowIndex,displayStyle:o.metricsDisplayStyle}),p=Fe(e,t)
f.productVariantData=p,f.adSlotOverride=s.parsedCardCount,f.kind=HE
const h=f
let w
f.pageInformation.iAdInfo.apply(e,t),i(o)&&(w=o.clientIdentifierOverride),u.style=bj,ro(e)===CL&&(null===(a=f.pageInformation.iAdInfo)||void 0===a||a.setTemplateType(yB))
let g=Io(e,t,o,s)
if(r(g))return go(e,n,t),Ji(s),wf(e,u,f,null,null,!1,!1),null
switch(e.props.enabled(zB)?null===(c=g.searchAdOpportunity)||void 0===c||c.setTemplateType(yB):null===(l=g.searchAd)||void 0===l||l.setTemplateType(yB),ro(e)){case CL:const n=new NY(g,g.icon)
u.media=new rY(n),u.media.impressionMetrics=g.impressionMetrics
break
case IL:if(u.media=function(e,t,n,r,o){var i,s,a
const c=t.screenshots[0],l=Kr(c)
null===(i=r.iAdInfo)||void 0===i||i.setTemplateType(l),e.props.enabled(zB)?null===(s=t.searchAdOpportunity)||void 0===s||s.setTemplateType(l):null===(a=t.searchAd)||void 0===a||a.setTemplateType(l)
const u=Gu(e,o,{useCase:0,withJoeColorPlaceholder:!0,overrideTextColorKey:Z_})
let d=u.backgroundColor,f=u.textColor
const p={type:YB,red:1,green:1,blue:1}
V(p,d)?(d=f,f=void 0):V(p,f)&&(f=void 0)
const h=new FY(t,[c],n,f,d,8)
return new nY(h)}(e,g,e.bag.todayAdMediumLockupScreenshotAnimationEnabled,f.pageInformation,t),g=Io(e,t,o,s),r(g))return null
g.searchAdOpportunity=u.media.mediumAdLockupWithScreenshotsBackground.lockup.searchAdOpportunity,g.searchAd=u.media.mediumAdLockupWithScreenshotsBackground.lockup.searchAd,u.media.mediumAdLockupWithScreenshotsBackground.lockup=g,u.media.impressionMetrics=g.impressionMetrics
break
default:return null}Ji(s)
const m=Yr(t)
return u.clickAction=Iu(e,t,h,w,void 0,m),function(e,t,n,o){let i=lo(0,t);(r(i)||0===i.length)&&(i=e.random.nextUUID(),jr(e,`Error: instanceId was null or empty. Assigned ${i}`))
const s=Od(e,t)?W$:qD,a=to(0,o.pageInformation),c=q(t,zD),l=Y(t,ZG)?LU:Bj,u=new jY(i,t.id,c,s,kA,l,a)
n.clickAction=eo(0,n.clickAction,u)}(e,t,u,f),wf(e,u,f,null,null,!1,!1),u})}(e,t.adData,t.adIncidentRecorder,n,t)
return(0,Tg.isSome)(c)?c:null}function Vo(e,t){const n=Ht(0,t.data)
if(t.isFirstItemInModule||n.suppressHeaderBadge)return null
let r
const o=Kt(t.data)
if(K(o)&&(r=q(o,rR)),(0,Tg.isSome)(r))return r
switch(t.data.type){case kj:r=q(t.data,rR)
break
case kB:r=q(t.data,[OU,vF])}return r}function Ho(e,t,n=!1){const r=Ht(0,t.data)
if((t.isFirstItemInModule||r.suppressHeaderName)&&!n)return null
let o
const i=Kt(t.data)
if(K(i)&&(o=q(i,nR)),(0,Tg.isSome)(o))return o
switch(t.data.type){case kj:o=q(t.data,nR)
break
case kB:o=q(t.data,[OU,jj])}return o}function Wo(e,t){const n=Ht(0,t.data)
if(t.isFirstItemInModule||n.suppressHeaderTagline)return null
let r
const o=Kt(t.data)
if(K(o)&&(r=q(o,oR)),(0,Tg.isSome)(r))return r
switch(t.data.type){case kj:r=q(t.data,oR)
break
case kB:r=q(t.data,[OU,BB])}return r}function qo(e,t,n){var r
const o=Ht(0,t.data),i=ie(e,t.data,oL),s=null!==(r=o.headerArtworkBehavior)&&void 0!==r?r:Xg.NoArtwork
switch(n){case tm.Eyebrow:return s===Xg.CategoryArtworkWithBadge?Yo(e,i):null
case tm.Title:switch(s){case Xg.CategoryArtworkWithTitle:return Yo(e,i)
case Xg.ContentArtworkWithTitle:return Gu(e,i,{useCase:1})
default:return null}default:return null}}function zo(e,t,n){const r=ie(e,t.data,oL),o=q(t.data,[kF,"headerArtworkBehavior"])
switch(n){case tm.Eyebrow:return o===Xg.CategoryArtworkWithBadge&&(0,Tg.isSome)(Yo(e,r))?$g.Category:null
case tm.Title:switch(o){case Xg.CategoryArtworkWithTitle:return(0,Tg.isSome)(Yo(e,r))?$g.Category:null
case Xg.ContentArtworkWithTitle:return(0,Tg.isSome)(Yo(e,r))?$g.Icon:null
default:return null}default:return null}}function Yo(e,t){const n=Vn(e,t,!1,!1,!1)
return(0,Tg.isNothing)(n)?null:Fu(e,n,{useCase:20,allowingTransparency:!0,cropCode:"sr"})}function Jo(e,t){const n=H(t.data,nP,null),r=null==n?void 0:n[tU]
if((0,Tg.isNothing)(r))return null
let o=null
if(r===nm.LinearGradient){const e=h(n).stops.map(e=>F(e.color)),t={type:"gradient",colors:e,start:xg.Top,end:xg.Bottom},r=U(e[0]),i={type:YB,red:60/255,green:60/255,blue:67/255,alpha:.6},s={type:YB,red:235/255,green:235/255,blue:245/255,alpha:.6}
o={shelfBackground:t,eyebrowColor:r?s:i,titleColor:G(r?nj:OC),subtitleColor:r?s:i}}else o=null
return o}function Ko(e){var t,n
return(0,Tg.isNothing)(e)?{}:null!==(n=Zd(null!==(t=p(e.moduleMetadata,kO))&&void 0!==t?t:{},e.moduleMetadata.onDevicePersonalizationProcessingType,null))&&void 0!==n?n:{}}function Zo(e,t,n,r=null,o=null){var i
const s=d(n,nX)
if((0,Ag.isNothing)(s))return null
const a=JSON.parse(s),c=iX.placementTypeFromPlacementId(e,d(a,EN)),l=new iX(e,c,iX.createInitialSlotInfos(e,c,r,o),null!==(i=d(a,DN))&&void 0!==i?i:void 0,void 0,void 0,r)
return l.applyClickFieldsFromPageRequest(null!=t?t:void 0,a),l}function Qo(e,t,n,r){const o=rf(r.locationTracker),i={impressionIndex:o,id:o.toString(),idType:sj,name:t.displayName,impressionType:n,parentId:DS}
t.impressionMetrics=new SH(i)}function Xo(e,t,n,r,o,s){var a,c,l
const u=null!==(a=h(r,sm.pageInformation,{}))&&void 0!==a?a:{},f=h(r,sm.timingValues),p=d(r,sm.requestedUrl)
let w
const g=u
if(g.pageType=t,g.pageId=n,o&&(g[VF]=o),t===lB){const t=_(e,r)
if((0,Ag.isSome)(t)){const n=q(t,jj),r=q(t,SU)
g[VF]=`${r}_${n}`,Od(e,t)&&(g[r$]=QG),w=Fe(e,t)}}else t===Ek?g[VF]=`${t}_${n}`:t===aU?g[VF]=aT:t===o$&&n===o$&&(g[VF]=`${t}_${n}`)
const m=new sX(null!==(c=qd(g))&&void 0!==c?c:{})
null!==f&&(m.timingMetrics=f,(0,Ag.isSome)(p)&&(m.pageUrl=p)),i(w)&&(m.productVariantData=w)
const v=null!=s?s:Zo(e,n,r)
return(0,Ag.isSome)(v)&&(m.iAdInfo=v),m.recoMetricsData=null!==(l=$(r))&&void 0!==l?l:void 0,m}function ei(e,t,n,r,o){var i
const s=new sX({pageType:t,pageId:n,page:`${t}_${n}`,pageDetails:r})
if(o){const t=iX.placementTypeFromPlacementId(e,d(o,EN))
s.iAdInfo=new iX(e,t,iX.createInitialSlotInfos(e,t,null,null),null!==(i=d(o,DN))&&void 0!==i?i:void 0),s.iAdInfo.applyClickFieldsFromPageRequest(n,o)}return s}function ti(e,t,n,o,i){if(r(n))return
t.pageMetrics.pageFields=wt(n),t.pageMetrics.addManyInstructions(di(e,n,o)),t.pageMetrics.addData(ci(e,n,o,i),[Dg.PageInvocationPoint.pageEnter]),t.pageMetrics.addData(function(e,t,n){const r=ci(e,t,n)
return r.fields[GB]=KA,r}(e,n,o),[Dg.PageInvocationPoint.pageExit]),t.pageMetrics.pageRenderFields=ui(e,n,o),t.pageRenderMetrics=ui(e,n,o),function(e){return!(e instanceof iQ||e instanceof tQ||e instanceof rQ)}(t)&&t.pageMetrics.addData(li(e,n,o),[Dg.PageInvocationPoint.backButton])
const s=e.fetchTimingMetricsBuilder;(0,Ag.isSome)(s)&&s.decorate(t)}function ni(e,t){return new sX({pageType:cU,pageId:t,page:`${cU}_${t}`})}function ri(e,t,n,r){const o={pageId:e$,pageType:aU}
r&&(o[aX]=r)
const i=new sX(o)
return i.pageUrl=n,i}function oi(e,t,n,r,i,a,c,l,u){const d=Xo(e,aU,a,n)
return d.searchTermContext=r,d.searchTerm=r.term,d.pageUrl=i,u&&(d.guidedSearch=function(e,t,n){const r={}
if(s(t.guidedSearchTokens)&&(r.searchSelectedGuidedFacets=t.guidedSearchTokens),n&&n.finalTerm&&(r.searchGuidedFinalQuery=n.finalTerm),!o(r))return r}(0,t,u)),Wr(e)&&null!=c&&(d.iAdInfo=new iX(e,qB,iX.createInitialSlotInfos(e,qB,null,null),c.iAdId,c.appStoreClientRequestId,l)),d}function ii(e,t,n,r,o,s){let a="",c=""
switch(t){case om.AppEvent:a=`${n}_${r}`,c=BL
break
case om.ContingentOffer:case om.OfferItem:a=`${n}`,c="OfferDetails"}const l={pageId:a,pageType:c}
i(o)&&(l[Rx]=o[Tj],l[J$]=o[uM])
const u=new sX(l)
return u.recoMetricsData=null!=s?s:void 0,u}function si(e,t){if(r(t)||r(t.pageMetrics))return
const n=t.pageMetrics.instructions
if(!r(n))for(const e of n)e.data.fields[GB]===Vj&&e.data.includingFields.push(Jk)
let o=null
if(t instanceof qY?o=t:t instanceof pJ&&(o=t.lockup),o){const e=[]
if(o.buttonAction instanceof RH)e.push(o.buttonAction)
else if(o.buttonAction instanceof DH&&o.buttonAction.buyAction instanceof RH)e.push(o.buttonAction.buyAction)
else if(o.buttonAction instanceof _H&&o.buttonAction.completionAction instanceof RH)e.push(o.buttonAction.completionAction)
else if(o.buttonAction instanceof MH){if(o.buttonAction.buyAction instanceof RH&&e.push(o.buttonAction.buyAction),o.buttonAction.defaultAction instanceof RH&&e.push(o.buttonAction.defaultAction),o.buttonAction.openAction instanceof RH&&e.push(o.buttonAction.openAction),o.buttonAction.subscribePageAction instanceof _q&&o.buttonAction.subscribePageAction.page===EC&&(0,Ag.isSome)(o.buttonAction.subscribePageAction.pageUrl)&&o.buttonAction.subscribePageAction.pageUrl.length>0){const e=kq.from(o.buttonAction.subscribePageAction.pageUrl)
e.param(pq.includePostSubscribeAttribution,GG),o.buttonAction.subscribePageAction.pageUrl=e.build()}o.buttonAction.subscribePageAction instanceof _q&&o.buttonAction.subscribePageAction.pageData instanceof AY&&o.buttonAction.subscribePageAction.pageData.purchaseSuccessAction instanceof RH&&e.push(o.buttonAction.subscribePageAction.pageData.purchaseSuccessAction)}for(const t of e)t.purchaseConfiguration&&(t.purchaseConfiguration.excludeAttribution=!1)}}function ai(e){Object.keys(e).filter(e=>!lX.has(e)).forEach(t=>delete e[t])}function ci(e,t,n,r){var o,s,a,c,l
const u=fi(t,n)
t.iAdInfo&&Object.assign(u,t.iAdInfo.pageFields),i(t.offerReleaseDate)&&(u[fO]=Je(t.offerReleaseDate))
const d=t.searchTermContext
d&&(u[bG]=d.term,d.suggestedTerm&&(u.searchSuggestedTerm=d.suggestedTerm),d.correctedTerm&&(u.searchCorrectedTerm=d.correctedTerm),d.originatingTerm&&(u[wO]=d.originatingTerm)),t.guidedSearch&&Object.assign(u,t.guidedSearch)
const f=function(e,t,n,r,o,i){const s={}
Object.assign(s,o),s[GB]=Vj,r&&(s[VA]=r.clientCorrelationKey,s.requestStartTime=r.requestStartTime,s.responseStartTime=r.responseStartTime,s.responseEndTime=r.responseEndTime)
const a=[GF,t_]
return n&&a.push("crossfireReferralCandidate"),Ef(e,s),Sf(0,new yH(s,a,[],Of(0,s),kf(e,s,null,i)))}(e,0,null!==(o=t.isCrossfireReferralCandidate)&&void 0!==o&&o,t.timingMetrics,u,r),p=null!==(a=null===(s=t.iAdInfo)||void 0===s?void 0:s.iAdIsPresent)&&void 0!==a&&a,h=null!==(l=null===(c=t.iAdInfo)||void 0===c?void 0:c.shouldIncludeAdRotationFields)&&void 0!==l&&l
return p&&h&&f.includingFields.push(XM),f}function li(e,t,n){return function(e,t){const n={}
return Object.assign(n,t),n[gF]=mF,Pf(e,mF,Nj,n)}(e,fi(t,n))}function ui(e,t,n){const r=fi(t,n)
return t.searchTermContext&&(r[bG]=t.searchTermContext.term),t.baseFields&&Object.assign(r,t.baseFields),function(e,t,n){const r={}
return Object.assign(r,n),r[GB]=HA,t&&(r[Y$]||(r[Y$]=t.pageURL),r[VA]=t.clientCorrelationKey,r.platformRequestStartTime=t.requestStartTime,r.platformResponseStartTime=t.responseStartTime,r.platformResponseEndTime=t.responseEndTime,r.platformResponseWasCached=t.responseWasCached,r.platformJsonParseStartTime=t.parseStartTime,r.platformJsonParseEndTime=t.parseEndTime),Ef(e,r),r}(e,t.timingMetrics,r)}function di(e,t,n){var r,s,a
const c=fi(t,n)
t.searchTermContext&&(c[bG]=t.searchTermContext.term)
const l=y(c)
t.iAdInfo&&Object.assign(l,t.iAdInfo.impressionsFields),t.guidedSearch&&Object.assign(l,t.guidedSearch)
const u=i(t.iAdInfo),d=o(null===(r=t.iAdInfo)||void 0===r?void 0:r.missedOpportunityReason)&&e.client.isPad,f=[{data:Cf(e,l,u&&d,null!==(a=null===(s=t.iAdInfo)||void 0===s?void 0:s.shouldIncludeAdRotationFields)&&void 0!==a&&a,!0),invocationPoints:[Dg.PageInvocationPoint.appExit,Dg.PageInvocationPoint.pageExit]}]
if(u){const n=function(e,t,n){var r,o
const s=i(n.iAdInfo)&&e.client.isPad&&((0,Ag.isNothing)(n.iAdInfo.missedOpportunityReason)||0===n.iAdInfo.missedOpportunityReason.length),a=null!==(o=null===(r=n.iAdInfo)||void 0===r?void 0:r.shouldIncludeAdRotationFields)&&void 0!==o&&o,c=[],l=Cf(e,t,s,a,!1).fields
if(l[ZM]=Kk,null!==n&&i(n.iAdInfo)){const e=n.iAdInfo.fastImpressionsEventVersion
l[QM]=e,c.push(QM),5===e&&(l.viewableArea="excludingTabBar",delete l[EN])}const u=["fastImpressions",GF,t_]
return s&&u.push(n_),a&&u.push(XM),Sf(0,new yH(l,u,c,Of(0,l),kf(e,l,n)))}(e,l,t)
f.push({data:n,invocationPoints:[Dg.PageInvocationPoint.appExit,Dg.PageInvocationPoint.pageExit,Dg.PageInvocationPoint.timer]})}return f}function fi(e,t){const n={}
return i(e.offerType)&&(n[xx]=e.offerType),void 0!==t&&n&&t(n),n}function pi(e,t,n,r,o){let i
switch(t){case P$:i=Dj
break
case mF:i=mF
break
case XR:i=eD}const s={targetType:Nj,actionType:i,targetId:t,idType:void 0,location:Qd(e,{pageInformation:n,locationTracker:r,targetType:Nj,id:t},null!=o?o:t)}
return Pf(e,t,Nj,s)}function hi(e,t,n,r,o){let i
switch(t){case P$:i=Dj
break
case mF:i=mF
break
case XR:i=eD}const s={targetType:Nj,actionType:i,targetId:t,idType:void 0,location:Qd(e,{pageInformation:n,locationTracker:r,targetType:Nj,id:t},null!=o?o:t)}
return Pf(e,t,Nj,s)}function wi(e,t,n){if((0,Tg.isNothing)(t))return null
const r=t.match(/P(\d+)([A-Z]+)/)
if(!r||3!==r.length)return null
let o=f(r[1]),i=r[2]
return o&&i?("D"===i&&o>0&&o%7==0&&(i="W",o/=7),new uX(o,null!=n?n:1,i)):null}function gi(e,t){const n=c(t,jk)[0]
if(!n)return null
const r=d(n,gN),o=f(n,mN),i=d(t,gN),s=f(t,mN)
if(!r||!i)return null
const a=d(n,_T),l=wi(0,r,o),u=wi(0,i,s),p=d(n,nB).replace(/ /g,"\xa0"),h=d(t,nB).replace(/ /g,"\xa0")
let w=mi(e,u.type,u.periodDuration,h)
switch(w=w.replace(/\//g,"\u2060/\u2060"),a){case LT:const t=vi(e,l.type,l.periodDuration*l.periodCount)
if(t&&w)return e.loc.string("InAppOfferPage.Description.FreeTrialTemplate").replace(EO,t).replace(RO,w)
break
case xT:const n=vi(e,l.type,l.periodDuration*l.periodCount)
if(n&&w)return e.loc.string("InAppOfferPage.Description.PaidUpFrontTemplate").replace(EO,n).replace("@@trialPrice@@",p).replace(RO,w)
break
case MT:const r=mi(e,l.type,l.periodDuration,p),o=vi(e,l.type,l.periodDuration*l.periodCount)
if(o&&w)return e.loc.string("InAppOfferPage.Description.PaidTrialTemplate").replace("@@trialPriceDuration@@",r).replace(EO,o).replace(RO,w)
break
default:return null}return null}function mi(e,t,n,r){let o
switch(t){case"D":o=1===n?e.loc.string("InAppOfferPage.Description.PriceDuration.Days.one").replace(vN,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.PriceDuration.Days",n)
break
case"W":o=1===n?e.loc.string("InAppOfferPage.Description.PriceDuration.Weeks.one").replace(vN,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.PriceDuration.Weeks",n)
break
case"M":o=1===n?e.loc.string("InAppOfferPage.Description.PriceDuration.Months.one").replace(vN,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.PriceDuration.Months",n)
break
case"Y":o=1===n?e.loc.string("InAppOfferPage.Description.PriceDuration.Years.one").replace(vN,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.PriceDuration.Years",n)}return o.replace("@@price@@",r)}function vi(e,t,n){switch(t){case"D":return 1===n?e.loc.string("InAppOfferPage.Description.DurationCount.Days.one").replace(vN,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.DurationCount.Days",n)
case"W":return 1===n?e.loc.string("InAppOfferPage.Description.DurationCount.Weeks.one").replace(vN,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.DurationCount.Weeks",n)
case"M":return 1===n?e.loc.string("InAppOfferPage.Description.DurationCount.Months.one").replace(vN,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.DurationCount.Months",n)
case"Y":return 1===n?e.loc.string("InAppOfferPage.Description.DurationCount.Years.one").replace(vN,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.DurationCount.Years",n)}return null}function yi(e,t){var n,r,i
const s=ie(e,t,yF)
if((0,Ag.isNothing)(s))return
const a=At(e,s),c=p(s,dM)
if(o(a)||o(c))return
const l=null===(n=Ai(e,d(a,gN),f(a,mN),d(a,nB)))||void 0===n?void 0:n.replace("/","/\u2060"),u=null===(r=Ai(e,d(c,gN),f(c,mN),d(c,nB)))||void 0===r?void 0:r.replace("/","/\u2060")
if(o(l)||o(u))return null
const h=q(t,jj),w={"@@discountedPrice@@/@@recurringSubscriptionPeriod@@":u,"@@regularPrice@@/@@recurringSubscriptionPeriod@@":l,"@@discountedPricePerRecurringSubscriptionPeriod@@":u,"@@regularPricePerRecurringSubscriptionPeriod@@":l}
let g=null!=h?h:""
Object.keys(w).forEach(e=>{g=g.replace(e,w[e])})
const m=g.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,""),v=new _V(g,gU,pv),y=null!==(i=q(t,NN))&&void 0!==i?i:"",A=e.loc.string("ContingentOffer.Description.Format"),T={"@@BranchName@@":q(s,jj),"@@RegularPrice@@":l,"@@DiscountedPrice@@":u}
let b=A
return Object.keys(T).forEach(e=>{b=b.replace(e,T[e])}),{title:v,rawTitle:m,description:[b,y].join(" ")}}function Ai(e,t,n,r){const o=wi(0,t,n)
if(!(0,Ag.isNothing)(o)&&!(0,Ag.isNothing)(r))return mi(e,o.type,o.periodDuration,r)}function Ti(e,t,n,r){const o=wi(0,t,n)
return(0,Ag.isNothing)(o)||(0,Ag.isNothing)(r)?null:mi(e,null==o?void 0:o.type,null==o?void 0:o.periodDuration,r)}function bi(e){switch(e.type){case xj:return om.AppEvent
case CU:return om.ContingentOffer
case jU:return om.OfferItem
default:return null}}function Si(e){switch(e.type){case xj:return HL
case CU:case jU:return cC
default:return null}}function Pi(e){switch(e.type){case xj:return dv
case CU:return"contingentPriceOffer"
case jU:return"winbackPriceOffer"
default:return null}}function Ii(e,t,n,s,a,c,l,u,w,g,m,v,y,A,T){const b=bi(t),S={...g,targetType:Si(t)}
switch(b){case om.AppEvent:return Ni(e,t,n,s,a,c,l,u,w,S,m,v,y,A,T)
case om.ContingentOffer:return function(e,t,n,s,a,c,l,u){var d,f,w
if(t.type!==CU)return null
const g=Di(e,t,UL)
if(r(g))return null
const m=U(g.backgroundColor)?bj:_G,v=q(t,vF),y=q(t,hG),A=q(t,MG),T=e.loc.string("ContingentOffer.AdditionalInfoButton.Title")
if((0,Ag.isNothing)(v)||(0,Ag.isNothing)(A))return null
const b=ie(e,t,yF)
if((0,Ag.isNothing)(b)||o(p(b,dM)))return null
const S=yi(e,t)
if((0,Ag.isNothing)(S)||(0,Ag.isNothing)(null==S?void 0:S.title))return null
const P=ie(e,t,qL),I=Y(P,bM),C=Li(e,t,P,"",s,a,!1,c,l,null,u,!0)
if((0,Ag.isNothing)(C))return null
const k=ie(e,t,dC)
let O;(0,Ag.isSome)(k)&&(0,Ag.isSome)(y)&&(null==y?void 0:y.length)>0&&(O=null!==(d=Di(e,k,_j))&&void 0!==d?d:Ri(e,k,_j)),(0,Ag.isSome)(y)&&(null==y?void 0:y.length)>0&&(O=null!==(f=function(e,t){var n,r
const o=h(t,"meta.associations.trunks")
if((0,Ag.isNothing)(o))return null
const i=o.data[0]
if(null!==(r=null===(n=null==i?void 0:i.meta)||void 0===n?void 0:n[fC])&&void 0!==r&&r){const t=Pe(e,i,pC)
return(0,Ag.isNothing)(t)?null:Fu(e,t,{useCase:1,style:AF})}return null}(e,t))&&void 0!==f?f:O)
const E=function(e,t,n){const r=hM+q(n,jj)+wM,o=q(n,NN)+zL,i=hM+e.loc.string("ContingentOffer.Terms.Title")+wM,s=q(t,SM)
return new _V([r,o,i,s].join(zL),gU)}(e,t,b),R=new XZ(g,m,I,T,S.title,null!=y?y:void 0,null!==(w=S.description)&&void 0!==w?w:void 0,A,v,E,null!=O?O:void 0,C)
return R.title=S.rawTitle,i(P)&&(R.clickAction=Mi(e,t,P,R,c,l)),R}(e,t,0,c,l,S,v,A)
case om.OfferItem:return function(e,t,n,s,a,c,l,u){var h,w,g,m,v,y
if(t.type!==jU)return null
const A=q(t,JU)
if("resubscription"!==A&&A!==YL)return null
const T=_G,b=ie(e,t,TF)
if((0,Ag.isNothing)(b))return null
const S=p(b,NR),P=At(e,b)
if((0,Ag.isNothing)(S))return null
const I=null!==(h=null!=n?n:ie(e,t,Tj))&&void 0!==h?h:ie(e,b,Tj),C=Y(I,bM),k=q(t,tD)
if((0,Ag.isNothing)(k)||!function(e){if((0,Ag.isNothing)(e)||o(e))return!1
const t=new Date(e)
if(r(t))return!1
const n=new Date
return!(t.getTime()<=n.getTime())}(k))return null
const O=new Date(k)
let E=function(e,t){if((0,Ag.isNothing)(t))return null
const n=Ke(t),o=new Date,i=(a=n,r(s=o)||r(a)?null:Math.floor((a.getTime()-s.getTime())/864e5))
var s,a
if((0,Ag.isNothing)(i))return null
const c=function(e,t){var n,r
return(null===(n=Ke(e))||void 0===n?void 0:n.getTime())===(null===(r=Ke(t))||void 0===r?void 0:r.getTime())}(o,t)
if(i>90)return e.loc.string(wv)
if(i>5){const n=o.getFullYear()!==t.getFullYear()?e.loc.string("OfferItems.FormattedDate.NextYear.DateFormat"):e.loc.string("OfferItems.FormattedDate.FiveDaysOrMore.DateFormat"),r=e.loc.uppercased(e.loc.formatDate(n,t))
return(0,Ag.isNothing)(r)?null:e.loc.string("OfferItems.FormattedDate.FiveDaysOrMore.Title").replace(gv,r)}return i>1?e.loc.string("OfferItems.FormattedDate.FiveDaysOrLess.Title").replace(vN,e.loc.formattedCount(i)):1!==i||c?e.loc.string("OfferItems.FormattedDate.Today.Title"):e.loc.string("OfferItems.FormattedDate.Tomorrow.Title")}(e,O);(0,Ag.isNothing)(E)&&(E=e.loc.string(wv))
let R=Gu(e,b,{useCase:3,withJoeColorPlaceholder:!0,overrideTextColorKey:AM})
o(R)&&(R=ce(e,hC,200,200,{type:YB,red:0,green:0,blue:0,alpha:1}),R.style=fN)
const D=wi(0,d(S,gN),f(S,mN)),_=(0,Ag.isSome)(D)?vi(e,D.type,D.periodDuration*D.periodCount):void 0,L=null===(w=Ti(e,d(P,gN),f(P,mN),d(P,nB)))||void 0===w?void 0:w.replace("/","/\u2060"),x=null===(g=Ti(e,d(S,gN),f(S,mN),d(S,nB)))||void 0===g?void 0:g.replace("/","/\u2060"),M=e.loc.string(hv),$={"@@redemptionDate@@":e.loc.formatDate(M,O),"@@skuName@@":null!==(m=q(b,jj))&&void 0!==m?m:"@@skuName@@","@@discountedPrice@@":null!=x?x:"@@discountedPrice@@","@@regularPricePerDuration@@":null!=L?L:"@@regularPricePerDuration@@","@@discountDuration@@":null!=_?_:"@@discountDuration@@","@@payUpfrontPrice@@":null!==(v=d(S,nB))&&void 0!==v?v:"@@payUpfrontPrice@@"},F=q(t,vF)
if((0,Ag.isNothing)(F))return null
const N=Fi(q(t,VG),$),B=new _V(N,gU,pv),U=Fi(q(t,hG),$),G=Fi(null!==(y=q(t,nD))&&void 0!==y?y:"",$)
let j
if(i(I)&&(j=Li(e,t,I,"",s,a,!1,c,l,null,u,!0)),(0,Ag.isNothing)(j))return null
const V=new nQ(null,null,T,C,B,E,U,G,F,O,R,j)
return V.title=N,i(I)&&(V.clickAction=Mi(e,t,I,V,c,l)),V}(e,t,n,c,l,S,v,A)
default:return null}}function Ci(e,t,n,o,a,c,l,u){const d=bi(t),f={...a,targetType:Si(t)}
switch(d){case om.AppEvent:return function(e,t,n,o,a,c,l,u){const d=function(e,t,n,o,a,c,l,u){var d,f
const p=Ri(e,t,GU),h=_i(e,t,IU,!0,!0),w=y(o),g=null!==(d=null==h?void 0:h.preview)&&void 0!==d?d:p
let m=bj,v=!0,A=!1
i(g)&&(v=U(g.backgroundColor),A=U(g.backgroundColor,10),m=v?bj:_G)
const T=ii(0,om.AppEvent,t.id,n.id,l,null!==(f=a.recoMetricsData)&&void 0!==f?f:null),b={...a,pageInformation:T,locationTracker:{rootPosition:0,locationStack:[]},targetType:BL},S={...b,id:n.id,inAppEventId:t.id,relatedSubjectIds:[n.id]}
w.notificationConfig=xi(e,t,o,S,!1)
const P=function(e,t,n,r){var o,s
const a=q(t,gj)
if((0,Tg.isNothing)(a)||0===a.length)return null
const c=null!==(o=n.moduleArtwork)&&void 0!==o?o:null===(s=n.moduleVideo)||void 0===s?void 0:s.preview
let l=e.loc.string(lv)
l===lv&&(l=n.subtitle)
const u=function(e,t,n,r,o,i){return yg.context("shareSheetDataForAppEvent",()=>{const e=new CV(t,n,i)
return new EV(e,r,void 0)})}(0,n.title,l,a,0,c)
if(!i(u))return null
const d=function(e,t,n){var r
const o=[]
if((null==n?void 0:n.length)>0){const t=ds(e,n)
i&&o.push(t)}if(t.startDate.getTime()<=Date.now())return o
if(e.host.clientIdentifier===XV)return o
const s=new zH(cj)
s.title=e.loc.string("APP_EVENTS_CALENDAR_NOT_AUTHORIZED_TITLE"),s.message=e.loc.string("APP_EVENTS_CALENDAR_NOT_AUTHORIZED_DETAIL"),s.isCancelable=!0,s.buttonTitles=[e.loc.string(Zm)],s.buttonActions=[new OH("prefs:root=Privacy&path=CALENDARS",!0)]
let a=!1
if(i(t.endDate)){const e=Ke(t.startDate),n=Ke(t.endDate),r=t.endDate.getTime()-t.startDate.getTime(),o=216e5
n.getTime()>e.getTime()&&r>o&&(a=!0)
const i=8634e4
e.getTime()===n.getTime()&&r>=i&&(a=!0)}const c=new hW(t.startDate,t.endDate,a,t.title,null===(r=t.lockup)||void 0===r?void 0:r.title,t.detail,n,s,KI)
c.title=e.loc.string("SHARE_SHEET_ADD_TO_CALENDAR"),c.artwork=ce(e,"systemimage://calendar.circle")
const l=new YH("com.apple.AppStore.createCalendarEventActivity",c)
return o.unshift(l),o}(e,n,a),f=new JH(u,d)
return Lf(e,f,{...r,targetType:XG,actionType:gM,idType:tj}),f}(e,t,o,S),I=v?bj:_G,C=Li(e,t,n,w.title,I,tB,!1,b,c,l,!1,!1)
if(r(C))return null
w.lockup=C
const k=new ZZ(w,p,h,P,m,A)
return ti(e,k,T,e=>{s(l)&&wH.shared.addReferralContextToMetricsFieldsIfNecessary(e)}),k}(e,t,n,o,a,l,u),f=new _q("appEventDetail")
return f.title=o.title,f.pageData=d,f.animationBehavior=c,a&&a.pageInformation&&(f.referrerUrl=a.pageInformation.pageUrl),f}(e,t,n,o,f,c,l,u)
case om.ContingentOffer:return function(e,t,n,o,a,c,l,u){const d=function(e,t,n,o,a,c,l,u){var d,f
const p=Di(e,t,GU),h=y(o)
let w=bj,g=!0
i(p)&&(g=U(p.backgroundColor),w=g?bj:_G)
const m=ii(0,om.ContingentOffer,t.id,n.id,l,null!==(d=a.recoMetricsData)&&void 0!==d?d:null),v={...a,pageInformation:m,locationTracker:{rootPosition:0,locationStack:[]}},A=g?bj:_G,T=Li(e,t,n,null!==(f=h.title)&&void 0!==f?f:void 0,A,tB,!1,v,c,l,!1,!1)
if(r(T))return null
h.offerLockup=T,h.trunkAppIcon=o.trunkAppIcon
const b=new tQ(h,null!=p?p:void 0,w)
return b.backButtonActionMetrics.addMetricsData(pi(e,mF,m,v.locationTracker)),b.learnMoreActionMetrics.addMetricsData(pi(e,P$,m,v.locationTracker,o.learnMoreTitle)),b.closeButtonActionMetrics.addMetricsData(pi(e,XR,m,v.locationTracker)),ti(e,b,m,e=>{s(l)&&wH.shared.addReferralContextToMetricsFieldsIfNecessary(e)}),b}(e,t,n,o,a,l,u),f=new _q("contingentOfferDetail")
return f.title=o.title,f.pageData=d,f.animationBehavior=c,a&&a.pageInformation&&(f.referrerUrl=a.pageInformation.pageUrl),f}(e,t,n,o,f,c,l,u)
case om.OfferItem:return function(e,t,n,o,i,a,c,l){const u=function(e,t,n,o,i,a,c,l){var u,d
let f=Di(e,t,GU)
f=null
const p=bj,h=y(o),w=ii(0,om.OfferItem,t.id,n.id,c,null!==(u=i.recoMetricsData)&&void 0!==u?u:null),g={...i,pageInformation:w,locationTracker:{rootPosition:0,locationStack:[]}},m=bj,v=Li(e,t,n,null!==(d=h.title)&&void 0!==d?d:void 0,m,tB,!1,g,a,c,!1,!1)
if(r(v))return null
h.offerLockup=v
const A=e.loc.string("Winback.AdditionalInfoButton.Title"),T=ie(e,t,TF),b=q(t,tD)
let S;(0,Ag.isSome)(b)&&(0,Ag.isSome)(T)&&(S=function(e,t,n,r){if((0,Ag.isNothing)(n))return
const o=q(n,jj),i=(0,Ag.isSome)(o)?hM+o+wM:void 0,s=q(n,NN),a=(0,Ag.isSome)(s)?s+zL:void 0,c=hM+e.loc.string("Promotion.Terms.Title")+wM
let l
const u=e.loc.string(hv)
if((0,Ag.isSome)(o)&&(0,Ag.isSome)(r)){const n={"@@redemptionDate@@":e.loc.formatDate(u,r),"@@skuName@@":o}
l=Fi(q(t,SM),n)}const d=[i,a,c,l].filter(Ag.isSome).join(zL)
return new _V(d,gU)}(e,t,T,new Date(b)))
const P=new rQ(h,void 0,void 0,p,!1,A,S)
return P.backButtonActionMetrics.addMetricsData(hi(e,mF,w,g.locationTracker)),P.learnMoreActionMetrics.addMetricsData(hi(e,P$,w,g.locationTracker,A)),P.closeButtonActionMetrics.addMetricsData(hi(e,XR,w,g.locationTracker)),ti(e,P,w,e=>{s(c)&&wH.shared.addReferralContextToMetricsFieldsIfNecessary(e)}),P}(e,t,n,o,i,c,l),d=new _q("offerItemDetail")
return d.title=o.title,d.pageData=u,d.animationBehavior=a,i&&i.pageInformation&&(d.referrerUrl=i.pageInformation.pageUrl),d}(e,t,n,o,f,c,l,u)
default:return null}}function ki(e){return e.bag.enableAppEvents&&!0}function Oi(e){return e.bag.enableContingentOffers&&!0}function Ei(e){return e.bag.enableOfferItems&&(e.featureFlags.isEnabled("winback_offers")||e.featureFlags.isEnabled("winback_offers_2024"))&&!0}function Ri(e,t,n){const r=H(t,n)
return(0,Tg.isNothing)(r)?null:Fu(e,r,{useCase:0,withJoeColorPlaceholder:!0,cropCode:"sr"})}function Di(e,t,n){const r=Re(e,t)
if((0,Tg.isNothing)(r))return null
const o=we(t,r,n)
return(0,Tg.isNothing)(o)?null:Fu(e,o,{useCase:0,withJoeColorPlaceholder:!0,cropCode:"sr"})}function _i(e,t,n,o,i){const s=Ri(e,t,`${n}.previewFrame`)
if(r(s))return null
const a=q(t,`${n}.video`)
if(r(a))return null
const c=new VV(a,s,{allowsAutoPlay:!0,looping:!0,canPlayFullScreen:o,showPlaybackControls:!1,playbackControls:i?{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0}:{},autoPlayPlaybackControls:i?{muteUnmute:!0}:{}})
return c.canPlayFullScreen=o,c.allowsAutoPlay=!0,c.looping=!0,c}function Li(e,t,n,i,s,a,c,l,u,d,f,p){var h,w,g,m
if((0,Tg.isNothing)(t)||(0,Tg.isNothing)(n))return null
const v=bi(t),y={...l,id:t.id,relatedSubjectIds:[n.id],idType:tj},A={...l,id:n.id,relatedSubjectIds:[n.id],targetType:XG,idType:tj,kind:null,softwareType:null,title:null!==(h=q(n,jj))&&void 0!==h?h:"",excludeAttribution:o(d)}
if(v===om.AppEvent&&(y[WL]=t.id,A[WL]=t.id),(m=l)&&Object.prototype.hasOwnProperty.call(m,"id")&&(y.id=l.id,y.idType=l.idType),p){const n=v===om.ContingentOffer?null===(w=yi(e,t))||void 0===w?void 0:w.rawTitle:q(t,jj)
ef(e,y,null!=n?n:"")}const T=q(t,lC),b={metricsOptions:A,artworkUseCase:1,externalDeepLinkUrl:null!=T?T:void 0,crossLinkSubtitle:c?i:void 0,offerEnvironment:s,offerStyle:a,skipDefaultClickAction:!u,includeBetaApps:!0,referrerData:null!=d?d:void 0,shouldHideArcadeHeader:e.featureFlags.isEnabled(T$)&&f,parentAppData:n,useJoeColorIconPlaceholder:!0,overrideArtworkTextColorKey:AM},S=hu(e,v===om.AppEvent?n:t,b)
return p&&nf(l.locationTracker),r(S)?null:(c&&(S.crossLinkTitle=null!==(g=e.loc.uppercased(S.title))&&void 0!==g?g:void 0),S)}function xi(e,t,n,r,o){if(n.startDate.getTime()<=Date.now())return null
if((0,Tg.isNothing)(n.lockup))return null
const i=e.loc.string("APP_EVENTS_NOTIFICATION_TITLE").replace("{appTitle}",n.lockup.title),s=e.loc.string("APP_EVENTS_NOTIFICATION_DETAIL").replace("{eventTitle}",n.title),a=n.startDate,c=n.lockup.icon,l=n.lockup.icon.template.replace("{w}",`${c.width}`).replace("{h}",`${c.height}`).replace("{c}","wd").replace("{f}",ZR)
let u,d
if(o&&(u=new zH(b$),u.title=e.loc.string("APP_EVENTS_NOTIFICATION_TOAST_TITLE"),u.message=e.loc.string("APP_EVENTS_NOTIFICATION_TOAST_DETAIL"),u.artwork=ce(e,fv)),e.bag.newEventsForODJAreEnabled){const o=new tW,i=wt(r.pageInformation)
i[gF]="notifyActivateNotificationsDisabled",i[S$]=Qd(e,{...r,id:t.id},""),i[TM]=""
const s=Pf(e,n.lockup.adamId,XG,i)
o.actionMetrics.addMetricsData(s),d=o}else{const t=new zH(cj)
t.title=e.loc.string("APP_EVENTS_NOTIFICATION_NOT_AUTHORIZED_TITLE"),t.message=e.loc.string("APP_EVENTS_NOTIFICATION_NOT_AUTHORIZED_DETAIL"),t.isCancelable=!0,t.buttonTitles=[e.loc.string(Zm)],t.buttonActions=[new OH("prefs:root=NOTIFICATIONS_ID&path=com.apple.AppStore",!0)],d=t}const f=new zH(cj)
f.title=e.loc.string("APP_EVENTS_NOTIFICATION_FAILURE_TITLE"),f.message=e.loc.string("APP_EVENTS_NOTIFICATION_FAILURE_DETAIL"),f.isCancelable=!0
const p=(new kq).set(LB,SW).param(pq.appId,n.lockup.adamId).param(pq.bundleId,n.lockup.bundleId).param(pq.appEventId,n.appEventId)
p.host=lq
const h=q(t,lC);(0,Tg.isSome)(h)&&(null==h?void 0:h.length)>0&&p.param(pq.appEventDeepLink,encodeURIComponent(h))
const w=wt(r.pageInformation)
w[gF]="notifyActivate",w[S$]=Qd(e,{...r,id:t.id},"")
const g=Pf(e,n.lockup.adamId,XG,w),m=y(w)
m[gF]="notifyDeactivate"
const v=Pf(e,n.lockup.adamId,XG,m)
return new QZ(t.id,i,s,l,a,u,d,f,p.build(),g,v)}function Mi(e,t,n,r,o,i){const s=Ci(e,t,n,r,o,rG,i,null)
if((0,Tg.isNothing)(s))return
const a={id:t.id,actionDetails:{action:"Open",contentType:Si(t)},relatedSubjectIds:[n.id],...o}
return bi(t)===om.AppEvent&&(a[WL]=t.id),Lf(e,s,a),s}function $i(e,t,n=null,o,s,a,c,l,u,d){var f
const p=[]
let h
for(const w of t){const t=Ii(e,w,n,o,!0,_G,rG,s,!1,a,c,l,null,u,d)
if(r(t))continue
if(t instanceof Date){((0,Tg.isNothing)(h)||t.getTime()<h.getTime())&&(h=t)
continue}const g=t,m={...a,id:w.id,kind:Pi(w),targetType:Si(w),title:null!==(f=g.title)&&void 0!==f?f:"",softwareType:null},v=null!=n?n:ie(e,w,Tj)
i(v)&&(m.relatedSubjectIds=[v.id]),pf(e,g,m),af(m.locationTracker),p.push(g)}return{appPromotions:p,nextAppEventPromotionStartDate:h}}function Fi(e,t){let n=null!=e?e:""
return Object.keys(t).forEach(e=>{n=n.replace(e,t[e])}),n}function Ni(e,t,n,r,a,c,l,u,d,f,p,h,w,g,m){var v,y,A
if(t.type!==xj)return null
const T=q(t,"promotionStartDate")
if((0,Tg.isNothing)(T)||0===T.length)return null
const b=new Date(T)
if((0,Tg.isNothing)(b))return null
const S=new Date
if(b.getTime()>S.getTime()&&!m)return b
const P=Ri(e,t,UL),I=_i(e,t,"lockupVideo",!1,!1)
if((0,Tg.isNothing)(P)&&o(I))return null
const C=null!==(v=null==I?void 0:I.preview)&&void 0!==v?v:P,k=U(null==C?void 0:C.backgroundColor)?bj:_G,O=U(null==C?void 0:C.backgroundColor,10),E=q(t,jj)
let R=q(t,JU)
s(w)&&(R=w)
const D=q(t,GL)
if((0,Tg.isNothing)(E)||0===E.length||(0,Tg.isNothing)(R)||0===R.length||(0,Tg.isNothing)(D)||0===D.length)return null
const _=new Date(D)
if((0,Tg.isNothing)(_))return null
const L=null!==(y=q(t,NN))&&void 0!==y?y:"",x=null!=n?n:ie(e,t,Tj)
let M=null
if(i(x)){if(M=Li(e,t,x,E,c,l,u,f,h,null,g,!0),(0,Tg.isNothing)(M))return null}else if(!d)return null
const $=q(t,"requirement"),F=q(t,hG),N=q(t,jL)
let B
if((0,Tg.isSome)(N)&&N.length>0&&(B=new Date(N)),void 0!==B&&B.getTime()<=S.getTime()&&!p)return null
const G=Ui(e,Bi(null!==(A=q(t,VL))&&void 0!==A?A:void 0,_,B),_,B),j=new KZ(t.id,null!=P?P:void 0,null!=I?I:void 0,E,null!=F?F:void 0,L,_,B,R,null!=$?$:void 0,M,r,G,k,O)
if(i(x)){const n={...f,id:x.id,inAppEventId:t.id,relatedSubjectIds:[x.id]}
j.notificationConfig=xi(e,t,j,n,!0)}return a&&i(x)&&(j.clickAction=Mi(e,t,x,j,f,h)),j}function Bi(e,t,n){let r=null!=e?e:"live"
return"live"===r&&i(n)&&n.getTime()-t.getTime()>216e5&&(r="happening"),r}function Ui(e,t,n,r){const o=[],i=Ke(n)
if((0,Tg.isNothing)(i))return[]
const s=e.loc.string("AppEvents.FormattedDate.SevenDaysOrMore.DateFormat"),a=e.loc.uppercased(e.loc.formatDate(s,n)),c=new YZ(!1,void 0,null!=a?a:void 0,void 0,void 0)
o.push(c)
const l=new Date(i)
l.setDate(l.getDate()-6)
const u=e.loc.string("AppEvents.FormattedDate.SixDaysOrLess.DateFormat"),d=e.loc.formatDate(u,n),f=e.loc.uppercased(d),p=new YZ(!1,l,null!=f?f:void 0,void 0,void 0)
o.push(p)
const h=new Date(i)
h.setDate(h.getDate()-1)
const w=e.loc.string("AppEvents.FormattedDate.Tomorrow"),g=e.loc.formatDateInSentence(w,uv,n),m=e.loc.uppercased(g),v=new YZ(!1,h,null!=m?m:void 0,void 0,void 0)
if(o.push(v),n.getHours()>1||1===n.getHours()&&n.getMinutes()>0){let t
t=n.getHours()>=19?e.loc.string("AppEvents.FormattedDate.Tonight"):e.loc.string("AppEvents.FormattedDate.Today")
const r=e.loc.formatDateInSentence(t,uv,n),s=e.loc.uppercased(r),a=new YZ(!1,null!=i?i:void 0,null!=s?s:void 0,void 0,void 0)
o.push(a)}const y=new Date(n)
let A
y.setHours(y.getHours()-1),A="available"===t?"AppEvents.FormattedDate.AvailableIn.MinutesCountdown":"AppEvents.FormattedDate.StartsIn.MinutesCountdown"
const T=new YZ(!1,y,void 0,n,A)
let b,S
switch(o.push(T),t){case"available":b=e.loc.string("AppEvents.FormattedDate.NowAvailable"),S=!1
break
case"happening":b=e.loc.string("AppEvents.FormattedDate.HappeningNow"),S=!1
break
default:b=e.loc.string("AppEvents.FormattedDate.Live"),S=!0}const P=new YZ(S,n,b,void 0,void 0)
if(o.push(P),null!==r){const t=new YZ(!1,r,e.loc.string("AppEvents.FormattedDate.EventEnded"),void 0,void 0)
o.push(t)}return o}function Gi(e,t,n,r,o){const i=Ht(0,r)
if((0,Tg.isSome)(i.suppressLockup)&&i.suppressLockup)return null
let s=null
const a=(0,Tg.isSome)(o)&&1===o.length,c=(0,Tg.isSome)(o)&&o.length>1
return a?s=new iY(o[0]):c&&(s=new aY(o)),s}function ji(e,t,n,r,o,i,s){if(!Y(o,XE))return
let a=Hf(e,o);(0,Ag.isNothing)(a)&&(0,Tg.isSome)(i)&&(a=Wf(0,i.arcadeUpsellEditorialResponse))
const c=function(e,t,n,r,o,i,s){if(!function(e){const t=e.host.platform
return t===bU||t===hU}(e))return null
Vi(e,t,n,r)
const a=ss(),c=bu(e,i,s,_I,a,_B)
return new dY(c)}(e,o,t,n,0,a,s)
if(c){t.overlay=c,t.impressionMetrics.fields[uT]=!0
const r=Vi(e,o,t,n)
t.style!==r&&(t.style=r)}}function Vi(e,t,n,r){const o=!r.enableListCardToMultiAppFallback,i=vn(e,t,r),s=os(null==i?void 0:i.joeColors)
return o?n.style:s}function Hi(e,t,n,r,o){return yg.context("createTodaySingleAppCard",()=>{const s=To(e,t,n,r)
zi(e,t,n,r)
const a=Po(e,t,s,n,r),c=Qi(0,t),l=Zi(e,c,n,r.pageInformation,r.locationTracker,_B,null,at(0,t)),u=Gi(0,0,0,t,l)
return i(u)&&u instanceof cY&&(u.style=nj),s.overlay=u,a||1!==c.length||Wi(e,t,s,c,n,r)?(ji(e,s,n,Ki(t,n.coercedCollectionTodayCardDisplayStyle),t,o,r),Ji(r),s):(Ji(r),null)})}function Wi(e,t,n,r,o,i){if(1!==r.length)return!1
o.useJoeColorIconPlaceholder=!0,n.style=bj
const s=ss(0,n.style),a=Zi(e,r,o,i.pageInformation,i.locationTracker,as(n.style),s,at(0,t))
if(1!==a.length)return!1
const c=a[0]
return n.media=new Yz(c.icon),!0}function qi(e,t,n,a,c){return yg.catchingContext("todayCardFromData",()=>{const u=Ki(t,n.coercedCollectionTodayCardDisplayStyle),d=Jt(e,t);(0,Tg.isSome)(d)&&(function(e,t,n,r){if("com.apple.visionproapp"===n||"VisionAppStore"===n)return!0
const o=Qi(0,t),i=Ki(t,r.coercedCollectionTodayCardDisplayStyle)
if(!new Set([Zg.AppEventCard,Zg.Grid,Zg.InAppPurchase,Zg.List,Zg.NumberedList,Zg.River,Zg.ShortImage,Zg.SingleApp]).has(i))return!1
if(o.length>=6&&i===Zg.Grid)return!1
const s=es(0,i)
return!(!Y(t,XS)&&ts(e,H(t,s),r.prevailingCropCode)||function(e,t){if(1===t.length){const e=t[0]
if(e.type===$G)return e}return null}(0,o))}(e,t,d,n)?n.clientIdentifierOverride=d:n.clientIdentifierOverride=null),n.crossLinkSubtitle=ls(e,t)
let f=null
switch(u){case Zg.AppOfTheDay:case Zg.GameOfTheDay:f=function(e,t,n,r,i){return yg.context("createTodayBrandedCard",()=>{const s=To(e,t,n,r)
zi(e,t,n,r)
const a=vn(e,t,n)
if(!((0,Ag.isSome)(a)&&(0,Ag.isSome)(a.joeColors.bgColor)&&(a.artworks.length>0||a.videos.length>0)))return Ji(r),Hi(e,t,n,r)
s.style=os(null==a?void 0:a.joeColors,UN)
const c=ss(0,s.style),l=Qi(0,t),u=Zi(e,l,n,r.pageInformation,r.locationTracker,as(s.style),c,at(0,t),!0)
if(o(u)||1!==u.length)return Ji(r),null
n.isHorizontalShelfContext||(s.overlay=Gi(0,0,0,t,u))
const d=u[0]
return s.media=new Jz(d.icon,a.artworks,a.videos,a.cardArtLayouts,a.artworkLayoutsWithMetrics,ns(0,t,n)),s.media.impressionMetrics=d.impressionMetrics,ji(e,s,n,Ki(t,n.coercedCollectionTodayCardDisplayStyle),t,i,r),Ji(r),s})}(e,t,n,a,c)
break
case Zg.Video:f=function(e,t,n,r,o){return yg.context("createTodayVideoCard",()=>{const i=To(e,t,n,r)
Po(e,t,i,n,r),zi(e,t,n,r)
const s=ss(0,i.style),a=Qi(0,t),c=Zi(e,a,n,r.pageInformation,r.locationTracker,_B,s,at(0,t)),l=Gi(0,0,0,t,c)
return i.overlay=l,ji(e,i,n,Ki(t,n.coercedCollectionTodayCardDisplayStyle),t,o,r),Ji(r),i})}(e,t,n,a,c)
break
case Zg.FullBleedImage:f=function(e,t,n,r,o){return yg.context("createTodayFullBleedImageCard",()=>{const i=To(e,t,n,r)
if(zi(e,t,n,r),!Po(e,t,i,n,r))return Ji(r),null
const s=Qi(0,t),a=ss(0,i.style),c=Zi(e,s,n,r.pageInformation,r.locationTracker,as(i.style),a,at(0,t)),l=Gi(0,0,0,t,c)
return i.overlay=l,ji(e,i,n,Ki(t,n.coercedCollectionTodayCardDisplayStyle),t,o,r),Ji(r),i})}(e,t,n,a,c)
break
case Zg.InAppPurchase:f=function(e,t,n,r,i){return yg.context("createTodayInAppPurchaseCard",()=>{const s=To(e,t,n,r)
zi(e,t,n,r)
const a=function(e,t){if(1===t.length){const e=t[0]
if(e.type===$G)return e}return null}(0,Qi(0,t))
if(o(a))return Ji(r),null
const c=wu(e,a,{offerStyle:SB,metricsOptions:{pageInformation:r.pageInformation,locationTracker:r.locationTracker},artworkUseCase:1})
return o(c)?(Ji(r),null):(c.theme=rG,s.media=new Qz(c),s.media.impressionMetrics=c.impressionMetrics,s.media.impressionMetrics.fields[XD]=s.impressionMetrics.fields.id,s.style=nj,ji(e,s,n,Ki(t,n.coercedCollectionTodayCardDisplayStyle),t,i,r),Ji(r),s)})}(e,t,n,a,c)
break
case Zg.AppEventCard:f=function(e,t,n,r,o){return yg.context("createTodayAppEventCard",()=>{var i,s,a,c,u
if(!ki(e))return null
const d=function(e,t){let n
const r=se(t,lG)
if(r.length>0)n=r[0]
else{const e=se(t,uG)
if(0===e.length)return null
n=e[0]}return n}(0,t)
if((0,Ag.isNothing)(d))return null
const f=To(e,t,n,r,t=>{t.inAppEventId=d.id
const n=ie(e,d,Tj);(0,Tg.isSome)(n)&&(t.relatedSubjectIds=[n.id])});(0,Tg.isSome)(f.editorialDisplayOptions)&&(f.editorialDisplayOptions.useMaterialBlur=!0),zi(e,t,n,r)
const p=vn(e,t,n)
if((0,Ag.isNothing)(p))return Ji(r),null
const h=null!==(s=null===(i=p.joeColors)||void 0===i?void 0:i.textColor4)&&void 0!==s?s:jz,w=U(null!==(c=null===(a=p.joeColors)||void 0===a?void 0:a.bgColor)&&void 0!==c?c:jz)?bj:_G,g={pageInformation:r.pageInformation,locationTracker:r.locationTracker,targetType:HL}
f.style=null!==(u=rs(p.joeColors,AM))&&void 0!==u?u:U(h)?bj:_G
const m=ss(0,f.style),v=q(t,MG),y=Ni(e,d,null,!1,!1,as(f.style),m,!0,!0,g,!0,!0,v,!1,l(n.allowUnpublishedAppEventPreviews))
if((0,Ag.isNothing)(y)||y instanceof Date)return kn(y,r.refreshController),Ji(r),null
const A=y
return f.media=new tY(A.formattedDates,A.startDate,h,p.artworks,p.videos,p.cardArtLayouts,p.artworkLayoutsWithMetrics,w),(0,Tg.isSome)(A.lockup)&&(f.overlay=new iY(A.lockup)),ji(e,f,n,Ki(t,n.coercedCollectionTodayCardDisplayStyle),t,o,r),Ji(r),f})}(e,t,n,a,c)
break
case Zg.List:case Zg.NumberedList:f=function(e,t,n,r,o){return yg.context("createTodayListCard",()=>{var i,s,a,c
const l=To(e,t,n,r)
zi(e,t,n,r),n.useJoeColorIconPlaceholder=!0
const u=Qi(0,t),d=Zi(e,u,n,r.pageInformation,r.locationTracker,void 0,void 0,void 0)
if(0===d.length)return Ji(r),null
if(n.canDisplayArcadeOfferButton=!1,d.length<function(e){return"tv"===e.client.deviceType?3:4}(e)&&n.enableListCardToMultiAppFallback)Xi(e,t,d,l)
else{if(Ki(t,n.coercedCollectionTodayCardDisplayStyle)===Zg.NumberedList){let e=1
for(const t of d)t.ordinal=`${e}`,e++}const r=vn(e,t,n),o=rs(null==r?void 0:r.joeColors,UN),u=e.props.enabled("todayListCardStyleV2")
null==r||r.videos.forEach(e=>{e.canPlayFullScreen=!1,e.playbackControls={prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1},e.autoPlayPlaybackControls={prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1}}),l.style=u?void 0:nj,l.media=new Kz(d,null!==(i=null==r?void 0:r.artworks)&&void 0!==i?i:[],null!==(s=null==r?void 0:r.videos)&&void 0!==s?s:[],null!==(a=null==r?void 0:r.cardArtLayouts)&&void 0!==a?a:[],null!==(c=null==r?void 0:r.artworkLayoutsWithMetrics)&&void 0!==c?c:[],void 0,u?o!==nj:o===bj)}return ji(e,l,n,Ki(t,n.coercedCollectionTodayCardDisplayStyle),t,o,r),Ji(r),l})}(e,t,n,a,c)
break
case Zg.River:case Zg.Grid:f=function(e,t,n,r,o){return yg.context("createTodayRiverCard",()=>{const i=To(e,t,n,r)
n.useJoeColorIconPlaceholder=!0,zi(e,t,n,r)
const s=function(e,t,n,r,o){const i=Qi(0,t).filter(t=>{const n=Id(e,t)
return!Sd(e,t)||!n})
return Zi(e,i,n,r.pageInformation,r.locationTracker,void 0,void 0,void 0,!1)}(e,t,n,r)
return 0===s.length?(Ji(r),null):(n.canDisplayArcadeOfferButton=!1,s.length<function(e){return"tv"===e.client.deviceType?2:4}(e)?Xi(e,t,s,i):(i.style=bj,function(e){for(const t of e)U(t.icon.backgroundColor,90)||(t.icon.backgroundColor=N(.8,.8,.8))}(s),i.media=new Xz(s)),ji(e,i,n,Ki(t,n.coercedCollectionTodayCardDisplayStyle),t,o,r),Ji(r),i)})}(e,t,n,a,c)
break
case Zg.SingleApp:f=Hi(e,t,n,a,c)
break
case Zg.ShortImage:f=function(e,t,n,r,o){return yg.context("createTodayShortImageCard",()=>{const i=To(e,t,n,r)
zi(e,t,n,r)
const s=Po(e,t,i,n,r)
let a=!1
const c=Qi(0,t),l=ss(0,i.style),u=Zi(e,c,n,r.pageInformation,r.locationTracker,as(i.style),l,at(0,t)),d=Gi(0,0,0,t,u)
return i.overlay=d,s||1!==c.length||(a=Wi(e,t,i,c,n,r)),s||a?(ji(e,i,n,Ki(t,n.coercedCollectionTodayCardDisplayStyle),t,o,r),Ji(r),i):(Ji(r),null)})}(e,t,n,a,c)
break
default:f=null}return r(f)?(e.console.log(`Unknown style: ${u}`),f):(function(e,t,n,r){const o=Ki(r,n.coercedCollectionTodayCardDisplayStyle),s=cs(e,r,n.heroDisplayContext,o,n.prevailingCropCode)
let a=[],c=[]
i(s)&&(a=[s]),i(t.media)&&(t.media instanceof eY||t.media instanceof zz)&&(c=t.media.videos),new qz(a,c)}(e,f,n,t),function(e){e.clickAction instanceof OH&&(e.overlay=new lY(e.clickAction),e.style=nj)}(f),function(e,t){(0,Tg.isNothing)(e.media)||(e.media.otdTextStyle=t.useOTDTextStyle)}(f,n),function(e,t){const n=t.media
if(!(n instanceof Wz))return
const r=s(n.videos)
t.supportsMediaMirroring=r}(0,f),(0,Tg.isNothing)(f.media)&&(e.console.log(`Missing required media: ${u}`),f=null),f)},t=>(e.console.log(t),null))}function zi(e,t,n,r,i){const a=s(i)?i:function(e,t,n){let r=Ed(e,t,jj)
if(o(r))switch(n){case Zg.AppOfTheDay:case Zg.GameOfTheDay:r=q(t,MG)}return r}(e,t,Ki(t,n.coercedCollectionTodayCardDisplayStyle))
ef(e,Yi(e,t,n,r,a),null!=a?a:"")}function Yi(e,t,n,r,o){var i
return vf(e,t,null!=o?o:"",{...null==n?void 0:n.baseMetricsOptions,targetType:_B,pageInformation:r.pageInformation,locationTracker:r.locationTracker,isAdEligible:null!==(i=null==n?void 0:n.isAdEligible)&&void 0!==i&&i,optimizationId:d(t,ZS),optimizationEntityId:d(t,QS),rowIndex:null==n?void 0:n.currentRowIndex,displayStyle:null==n?void 0:n.metricsDisplayStyle})}function Ji(e){nf(e.locationTracker)}function Ki(e,t){const n=q(e,Yx)
return dX.has(n)&&(0,Tg.isSome)(t)?t:n}function Zi(e,t,n,r,i,a,c,l,u=!0){return o(t)?[]:Pu(e,t.filter(e=>!s(e.attributes)||e.type!==$G),{lockupOptions:{metricsOptions:{pageInformation:r,locationTracker:i},offerEnvironment:a,offerStyle:c,clientIdentifierOverride:n.clientIdentifierOverride,externalDeepLinkUrl:l,crossLinkSubtitle:n.crossLinkSubtitle,artworkUseCase:1,canDisplayArcadeOfferButton:n.canDisplayArcadeOfferButton,useJoeColorIconPlaceholder:n.useJoeColorIconPlaceholder,skipDefaultClickAction:!u},filter:76670})}function Qi(e,t){return se(t,uG)}function Xi(e,t,n,r){const o=Ed(e,t,DB)
if(r.media=new Zz(n,o),r.style=bj,r.clickAction instanceof _q){const e=kq.from(r.clickAction.pageUrl)
e.param(pq.showingFallbackMedia,GG),r.clickAction.pageUrl=e.build()}}function es(e,t){switch(t){case Zg.AppOfTheDay:case Zg.GameOfTheDay:return eL
case Zg.AppEventCard:return tL
case Zg.Video:case Zg.FullBleedImage:return yx
default:return nL}}function ts(e,t,n){if(o(t))return null
const r=Fu(e,t,{withJoeColorPlaceholder:!0,useCase:15})
return r.crop=n||"sr",r}function ns(e,t,n){const r=H(t,es(0,Ki(t,n.coercedCollectionTodayCardDisplayStyle)))
return i(r)?d(r,"bgGradientKind"):null}function rs(e,t=UN){if((0,Tg.isNothing)(e))return
if((0,Tg.isSome)(null==e?void 0:e.textGradient)&&2===e.textGradient.length)return U(e.textGradient[0])?nj:bj
const n=e[t]
if((0,Tg.isNothing)(n))return
const r=B(n)
return r<=.1?bj:r>=.84?nj:_G}function os(e,t=UN){var n
return null!==(n=rs(e,t))&&void 0!==n?n:_G}function is(e,t){return i(t.heading)?t.heading.replace(/\n/g," "):t.collapsedHeading}function ss(e,t){return tB}function as(e){return e===nj?_G:_B}function cs(e,n,r,o,i){const s=function(e,t,n,r){return t===HG?es(0,n):"editorialArtwork.crossoverCard"}(0,r,o,Object.keys(H(n,lj)))
return ts(e,H(n,s),function(e,t,n,r){return rm.Article,rm.Article,r}(0,0,t(s),i))}function ls(e,t){let n=Rd(e,t,DB)
if(s(n)||(n=Ed(e,t,jj)),!s(n)){const e=q(t,XU)
e!==Zg.AppOfTheDay&&e!==Zg.GameOfTheDay||(n=q(t,MG))}return n}function us(e,t,n){const r=q(t,n)
if(o(r))return null
const s=new kq(r)
let a=null
switch(e.host.clientIdentifier){case KV:a=kG
break
case JV:a=Fj}a&&s.param(Tq,a)
const c=Be(Fe(e,t))
return i(c)&&s.param(pq.productVariantID,c),s.toString()}function ds(e,t,n){if(o(t))return null
const r=new wW(t)
return r.title=null!=n?n:e.loc.string("ShareSheet.CopyLink.Title"),r.artwork=ce(e,"systemimage://link"),new YH("com.apple.AppStore.copyLinkActivity",r)}function fs(e,t,n){return yg.context("shareSheetDataForProductFromProductData",()=>{if(r(t))return null
const o=us(e,t,gj),s=q(t,jj),a=q(t,SU),c=t.id,l=e.client.storefrontIdentifier
if(!(o&&s&&a&&c))return null
const u=us(e,t,"shortUrl")
let d=null,f=null
const p=bU,h=zu(e,t,4),w=qu(e,t),g=Ce(e,t,hG)||a
i(t)&&q(t,gj)&&(d=Gu(e,t,{useCase:1},n),f=function(e,t){return yg.context("notesMetadataFromProductData",()=>{var n
if(r(t))return null
const o=q(t,jj)
if((0,Tg.isNothing)(o)||0===o.length)return null
const i=us(e,t,gj),s=q(t,SU),a=q(t,"genreNames.0"),c=null===(n=pd(e,t))||void 0===n?void 0:n.fileSizeByDevice
let l
switch(t.type){case Gj:l=Tj
break
case Pj:l=BI
break
case $G:l=fN
break
default:l=null}return new PV(o,i,s,a,c,l)})}(e,t))
const m=new kV(c,l,s,p,d,h,w,!1,g,null,null,f)
return new EV(m,o,u)})}function ps(e,t,n,o,s){return yg.context(`shareActionFromData: ${t.type}`,()=>{var a
const c=t.id
switch(e.client.deviceType){case Mj:{const r=fs(e,t)
if(r){const t=new JH(r,[])
return Lf(e,t,{targetType:Nj,id:c,actionType:gM,pageInformation:n,locationTracker:o}),t}break}case Lj:case Oj:case wj:{const l=fs(e,t,s),u=[]
if((null===(a=null==l?void 0:l.url)||void 0===a?void 0:a.length)>0){const t=ds(e,l.url)
i&&u.push(t)}const d=function(e,t){if(!e.bag.isContentGiftingEnabled)return null
if(r(t))return null
const n=At(e,t)
return r(n)||z(t,ZG)?null:f(n,pM)>0?t.id:null}(e,t)
if(d){const t=new _q(gB)
t.presentationContext=ZI,t.title=e.loc.string("SHARE_GIFT_APP"),t.artwork=ce(e,"systemimage://app.gift"),t.pageUrl=`gift/${d}`,Lf(e,t,{targetType:Nj,id:c,actionType:lM,actionContext:Qm,pageInformation:n,locationTracker:o})
const r=new YH("com.apple.AppStore.giftActivity",t)
u.push(r)}if(l){const t=new JH(l,u,_m)
return t.title=e.loc.string("SHARE_APP"),t.artwork=ce(e,QI),Lf(e,t,{targetType:Nj,id:c,actionType:gM,actionContext:Qm,pageInformation:n,locationTracker:o}),t}if(u.length>0){const t=u.map(e=>e.action),r=new qH(t)
return r.isCancelable=!0,r.isCustom=!0,Lf(e,r,{targetType:Nj,id:c,actionType:"actionSheet",pageInformation:n,locationTracker:o}),r}break}}return null})}function hs(e,t,n,o,a,c,l,u,d,f){return yg.context("flowPreviewActionsConfigurationForProductFromData",()=>{if(e.client.deviceType!==Lj&&e.client.deviceType!==Oj)return null
const p=ws(e,t)
if(!s(p))return null
const h=[]
let w=null,g=null
const m=Y(p,ZG)
if(n){const t=Od(e,p),n=ou(0,p.type,t),s=function(e,t,n,o,i,s,a){return r(t)||t.type!==Gj?null:bt(e,At(e,t),t,n,!1,Jd(e,t,Gu(e,t,null,s),s),a,nU)}(e,p,m,0,0,o,l)
g=Ut(e,s,n,p,m,0,null,null,null,null,nU)
const a=function(e,t,n,o,i,s,a,c){if(r(n))return null
let l=kt(e,n,t,o,s,nU,i)
return(null==c?void 0:c.length)>0&&(l=ct(e,l,n.adamId,null,c,!1,s)),l}(e,p,s,m,o,l,0,u)
i(a)&&i(g)&&(w=h.length,h.push(a))}const v=function(e,t,n){const r=ps(e,t,n.pageInformation,n.locationTracker)
return i(r)?(r.title=e.loc.string("FLOW_PREVIEW_ACTION_SHARE"),r.artwork=ce(e,QI),r):r}(e,p,c)
i(v)&&h.push(v)
const A=As(e,p)
if(!m&&!A){if(i(a)&&a instanceof _q&&(a.pageData instanceof qY||a.pageData instanceof pJ)){const t=function(e,t,n){const r=function(e,t,n){return yg.context("seeRatingsAndReviewsActionFromData",()=>{const t=y(n)
if(n.pageData instanceof qY||n.pageData instanceof pJ){let r
r=new dW(PG)
const o=Gl(e)?r:new QH(new HY(Hj,yj)),i=y(n.pageData)
i.fullProductFetchedAction=o,t.pageData=i}return t})}(e,t.id,n)
return i(r)&&(r.title=e.loc.string("FLOW_PREVIEW_ACTION_SEE_RATINGS_AND_REVIEWS"),r.artwork=ce(e,"systemimage://star"),r.animationBehavior=ZU),r}(e,p,a)
i(t)&&h.push(t)}if(!Te(e,t,EF)){const t=function(e,t,n,r){const o=Ms(e,t,n,r)
return i(o)&&(o.title=e.loc.string("FLOW_PREVIEW_ACTION_WRITE_REVIEW"),o.artwork=ce(e,lk)),o}(e,p,d,f)
i(t)&&h.push(t)}}return new LV(h,g,w)})}function ws(e,t){return yg.context(`productDataFromData: ${t.type}`,()=>{switch(t.type){case Gj:case Pj:return t
case kj:{const n=se(t,uG)
if(s(n)&&1===n.length){const t=n[0]
return ws(e,t)}break}case OD:{const n=se(t,Uj)
if(s(n)&&1===n.length){const t=n[0]
return ws(e,t)}break}default:return null}return null})}function gs(e,t,n,r){const o=e.bag.voteUrl,i=d(t,"id",OG),s=new kq(o).param(Ay,i),a=new BH(s.build()),c=new zH(b$)
return r?(a.title=e.loc.string("ACTION_REVIEW_HELPFUL"),c.title=e.loc.string("TOAST_HELPFUL_TITLE"),c.message=e.loc.string("TOAST_HELPFUL_DESCRIPTION"),a.artwork=ce(e,Ty),c.artwork=ce(e,Ty)):(a.title=e.loc.string("ACTION_REVIEW_NOT_HELPFUL"),c.title=e.loc.string("TOAST_NOT_HELPFUL_TITLE"),c.message=e.loc.string("TOAST_NOT_HELPFUL_DESCRIPTION"),a.artwork=ce(e,by),c.artwork=ce(e,by)),a.method=SN,a.isStoreRequest=!0,a.disableCache=!0,a.headers={"Content-Type":hJ.contentType},a.body=(new hJ).param("vote",r?"1":"0").param(Sy,n).build(),a.successAction=c,a}function ms(e,t,n){return yg.context("reportConcernActionFromApiRow",()=>{const r=d(t,"id",OG),i=e.bag.reportConcernUrl,s=new GH(i)
s.method=SN,s.isStoreRequest=!0,s.disableCache=!0,s.needsAuthentication=!0,s.headers={"Content-Type":hJ.contentType},s.body=(new hJ).param(Ay,r).param(Sy,n).build()
const a=new UH("selectedReason",Py,uk),c=new UH("explanation",Py,TG)
if(s.parameters=[a,c],e.props.isNotEnabled("reportConcernVisionUpdates")){const t=new zH(b$)
t.title=e.loc.string(gy),t.message=e.loc.string(my),t.artwork=ce(e,kD),s.successAction=t}const l=new zH(cj)
l.title=e.loc.string(vy),l.message=e.loc.string(yy),l.isCancelable=!0,s.failureAction=l
let u=e.bag.reportConcernReasons
o(u)&&(u=[{reasonId:"1",name:"It contains offensive material",upperCaseName:"IT CONTAINS OFFENSIVE MATERIAL"},{reasonId:"8",name:"It's off-topic",upperCaseName:"IT\u2019S OFF-TOPIC"},{reasonId:"111003",name:"It looks like spam",upperCaseName:"IT LOOKS LIKE SPAM"},{reasonId:"7",name:"Something else",upperCaseName:"SOMETHING ELSE"}])
const f=u.map(e=>new RV(d(e,"reasonId"),d(e,jj),d(e,"upperCaseName"))),p=new KH(f)
return p.title=e.loc.string(wy),p.explanation=e.bag.reportConcernExplanation,o(p.explanation)&&(p.explanation="Tell us a little more (Optional)"),p.artwork=ce(e,kD),p.sendAction=s,p})}function vs(e,t){return yg.context(vb,()=>{const n=d(Pe(e,t,OU),Bj)
if(n){const r=new nJ(n),o=Pe(e,t,ON)
if(o){const e=d(o,JD)
r.showsBadge=e&&e===KD}return r.showsBadge||(r.title=e.loc.string(H_)),r}return null})}function ys(e,t,n){return`${AW}:/${UW}/${PW}/${t}/${n}`}function As(e,t){return!(!i(t)||Ts(e,t)||!Y(t,dN)&&!Y(t,"reviewsRestricted"))}function Ts(e,t){return!(o(t)||!e.bag.enableSystemAppReviews)&&et(e).isSystemAppFromData(t)}function bs(e,t){const n=kq.from(e),r=d(n.query,gb)
return t&&(null==r?void 0:r.length)>0&&(n.query[gb]=fX[r]||r),n}function Ss(e,t,n,r=!1,o,a,c){return yg.context("createProductReviewsList",()=>{const l=[]
if(s(a)&&e.featureFlags.isEnabled(XB)){if((0,Tg.isSome)(c)){const t={id:`${c.getSequenceId()}`,kind:null,softwareType:null,targetType:lU,title:e.loc.string(Ux),pageInformation:c.metricsPageInformation,locationTracker:c.locationTracker,idType:sj}
ef(e,{pageInformation:c.metricsPageInformation,locationTracker:c.locationTracker,targetType:lU,id:`${c.getSequenceId()}`,idType:sj},e.loc.string(Ux)),pf(e,a,t),nf(c.locationTracker),af(c.locationTracker)}l.push(a)}if(s(o)&&!e.featureFlags.isEnabled(XB)&&l.push(o),i(n)&&n.length>0){const o=!1,i=!o,s=o?n.slice(0,1):n,a=!1,u=Ps(e,e.client.guid,t,s,r&&i,a&&i,i,c);(0,Tg.isSome)(c)&&ef(e,{pageInformation:c.metricsPageInformation,locationTracker:c.locationTracker,targetType:QO,id:`${c.getSequenceId()}`,idType:sj},null),u.forEach((t,n)=>{const r=new dJ
if(r.sourceType=hb,r.review=t,l.push(r),(0,Tg.isSome)(c)){const t={id:r.id,idType:tj,kind:null,softwareType:null,title:null,pageInformation:c.metricsPageInformation,locationTracker:c.locationTracker,targetType:"helpfulReview"}
pf(e,r,t),af(c.locationTracker)}}),(0,Tg.isSome)(c)&&(nf(c.locationTracker),af(c.locationTracker))}return l})}function Ps(e,t,n,r,i=!1,s=!1,a=!0,c){return yg.context("createReviewItems",()=>{const l=function(t,n){return n?1e3*((new Date).getTime()-t.getTime())<3600?e.loc.string("TimeAgo.Edited.JustNow"):e.loc.string("TimeAgo.Edited.Time").replace("{time}",e.loc.timeAgoWithContext(t,"standalone")):e.loc.timeAgoWithContext(t,"standalone")}
return r.map(r=>{var u
const f=new QY
f.id=d(r,"id",OG),f.title=q(r,VG)
const p=q(r,Mk)
p&&(f.date=new Date(p),f.dateText=l(f.date,Y(r,"isEdited"))),f.contents=q(r,"review"),f.rating=J(r,fB),f.reviewerName=q(r,"userName"),f.dateAuthorText=e.loc.string("ProductPage.Section.Reviews.DateAuthor").replace("{date}",f.dateText).replace("{author}",f.reviewerName)
let h=null
const w=q(r,"developerResponse.id")
if((null==w?void 0:w.length)>0){const e=new XY
e.id=w,e.contents=q(r,"developerResponse.body")
const t=q(r,"developerResponse.modified")
t&&(e.date=new Date(t),e.dateText=l(e.date,!1)),f.response=e,h=f.response.contents}if(a&&(d(n,$U),f.flowPreviewActionsConfiguration=function(e,t,n,r,i){var s
if(o(t)||e.client.deviceType!==Lj&&e.client.deviceType!==Oj&&e.client.deviceType!==Mj)return null
const a=[gs(e,t,n,!0),gs(e,t,n,!1)]
return(null===(s=e.bag.reportConcernUrl)||void 0===s?void 0:s.length)>0&&a.push(ms(e,t,n)),(null==i?void 0:i.length)>0&&a.push(function(e,t){const n=new wW(t)
return n.title=e.loc.string("ACTION_REVIEW_COPY"),n.artwork=ce(e,"systemimage://doc.on.doc"),n}(e,i)),new LV(a)}(e,r,t,0,h)),s){const n=[gs(e,r,t,!0),gs(e,r,t,!1)];(null===(u=e.bag.reportConcernUrl)||void 0===u?void 0:u.length)>0&&n.push(ms(e,r,t)),f.voteActions=n}return i&&(f.moreAction=function(e,t,n,r,o){return r?yg.context("singleReviewActionFromReviewData",()=>{const i=$s(e,t,n,[r],null,null,null,o),s=new KY
s.adamId=d(n,$U),s.targetReviewId=d(r,"id",OG),s.shelves=[i]
const a=new _q(yj)
return a.pageData=s,a.title=Ws(e),a}):null}(e,t,n,r,c)),f})})}function Is(e,t,n,r){return r?yg.context("ratingsFromApiResponses",()=>{const t=new ZY
t.productId=d(r,$U,OG),t.ratingAverage=f(r,"ratingAverage"),t.totalNumberOfRatings=f(r,yb),t.totalNumberOfReviews=f(r,"totalNumberOfReviews"),t.context=n
const o=c(r,"ratingCountList").slice().reverse(),i=o.reduce((e,t)=>e+t,0)
if(t.ratingCounts=i>0?o.map(e=>e/i*t.totalNumberOfRatings):o,!(t.ratingAverage>0&&t.ratingCounts)){const n=l(r,XO)
t.status=n?e.loc.string("RATINGS_STATUS_DEVELOPER_RESET"):e.loc.string("RATINGS_STATUS_NOT_ENOUGH_RATINGS")}return t}):null}function Cs(e,t,n){if(!ks(e))return null
const r=re(t,BC)
if((0,Tg.isNothing)(r))return null
const i=r.data
if(o(i))return null
const s=i[0],a=d(s,"id",OG),l=Os(e,s,!0),u=Os(e,s,!1),f=e.loc.string("ProductPage.ReviewSummary.Subtitle"),p=e.bag.reviewSummaryReportConcernData
if((0,Tg.isNothing)(u)||(0,Tg.isNothing)(l))return null
const h=q(t,jj),g=Ce(e,s,TG),m=ce(e,"systemimage://text.line.2.summary"),v=new uJ(l,u,f,m,vj,"text/markdown",function(e,t,n,r,o,i,s){const a=[],l=function(e,t,n,r){return yg.context("reviewSummaryReportConcernActionFromApiRow",()=>{if(!w(t,py))return null
const r=function(e,t){const n=new Uz(e)
n.includeAppBinaryTraitsAttribute=!1,n.resourceType=hy
const r=qe(e,n),o=new GH(r.toString())
o.method=SN,o.disableCache=!0,o.needsMediaToken=!0,o.headers={"Content-Type":ck},o.bodyDictionary={report:{contentId:t,contentKind:"review-summaries",concerns:null}}
const i=new zH(b$)
i.title=e.loc.string(gy),i.message=e.loc.string(my),i.artwork=ce(e,kD),o.successAction=i
const s=new zH(cj)
return s.title=e.loc.string(vy),s.message=e.loc.string(yy),s.isCancelable=!0,o.failureAction=s,o}(e,n),o=c(t,hy).map(t=>{let n,r
const o=d(t,JU)
switch(o){case"OFFENSIVE":case"OFFENSIVE_OR_HARMFUL":n=e.loc.string("ProductPage.ReviewSummary.ReportAConcern.Offensive.Name"),r=e.loc.string("ProductPage.ReviewSummary.ReportAConcern.Offensive.UppercaseName")
break
case"MISREPRESENTING_THE_APP":case"MISREPRESENT":n=e.loc.string("ProductPage.ReviewSummary.ReportAConcern.Misrepresent.Name"),r=e.loc.string("ProductPage.ReviewSummary.ReportAConcern.Misrepresent.UppercaseName")
break
case"SOMETHING_ELSE":n=e.loc.string("ProductPage.ReviewSummary.ReportAConcern.SomethingElse.Name"),r=e.loc.string("ProductPage.ReviewSummary.ReportAConcern.SomethingElse.UppercaseName")}return new RV(o,n,r)})
if(0===o.length)return null
const i=e.loc.string(wy),s=e.loc.string("ProductPage.ReviewSummary.ReportAConcern.Explanation"),a=new ZH(o,i,s,r)
return a.artwork=ce(e,kD),a})}(e,t,o);(0,Tg.isSome)(l)&&a.push(l)
const u=Us(e);(0,Tg.isSome)(u)&&a.push(u)
const f=function(e,t,n,r,o){if(![HN,RF].includes(e.client.buildType))return null
const i=new OH(`tap-to-radar://new/problem?componentid=999915&title=Review Summary Feedback: ${n}&description=App ID: ${t}\nApp name: ${n}\nReview summary ID: ${r}\nReview summary: ${o}\n\nFeedback: `,!0)
return i.title=e.loc.string("Action.ProvideFeedback"),i.artwork=ce(e,"systemimage://ant.circle"),i}(e,n,r,o,i)
return(0,Tg.isSome)(f)&&a.push(f),new LV(a)}(e,p,t.id,h,a,g,e.client.guid)),y={id:`${n.getSequenceId()}`,kind:null,softwareType:null,targetType:lU,title:e.loc.string(Ux),pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,idType:sj}
return ef(e,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:lU,id:`${n.getSequenceId()}`,idType:sj},v.title),pf(e,v,y),nf(n.locationTracker),af(n.locationTracker),v}function ks(e){return e.featureFlags.isEnabled(XB)&&e.bag.enableReviewSummarization}function Os(e,t,n){const r=Ce(e,t,TG)
if((0,Tg.isNothing)(r))return null
const o=`^[${e.loc.string(Ux)}](jetFont: 'reviewSummaryTitle')`,i=`^[${r}](jetFont: 'reviewSummaryText')`
return n?e.loc.string("ProductPage.ReviewSummary.Body").replace("{styledTitle}",o).replace("{reviewSummary}",i):i}function Es(e){if(!e)return null
const t=new sJ
return _s(e,t),t}function Rs(e){if(!e)return null
const t=new aJ
return _s(e,t),t}function Ds(e){if(!e)return null
const t=new cJ
return _s(e,t),t}function _s(e,t){t.ratingAverage=e.ratingAverage,t.ratingCounts=e.ratingCounts,t.totalNumberOfRatings=e.totalNumberOfRatings,t.totalNumberOfReviews=e.totalNumberOfReviews,t.status=e.status,t.reviews=e.reviews,t.actions=e.actions,t.nextPage=e.nextPage}function Ls(e,t,n,r=null,o=null){const i=new eJ
switch(e.client.deviceType){case"tv":i.title=e.loc.string("TV_SELECT_TO_RATE")
break
case Mj:i.title=e.loc.string("CLICK_TO_RATE")
break
default:i.title=e.featureFlags.isEnabled(XB)?e.loc.string("TAP_TO_RATE"):e.loc.string("TAP_TO_RATE_LEGACY")}return i.rating=o,i.rateAction=function(e,t,n,r=null){const o=new zH(b$)
o.title=e.loc.string("TOAST_TAP_TO_RATE_TITLE"),o.message=e.loc.string("TOAST_TAP_TO_RATE_DESCRIPTION"),o.artwork=ce(e,"resource://ToastStar.png",95,90)
const i=new jH(function(e,t,n){return bs(e.bag.userRateURL,n).param("id",t).build()}(e,t,n))
i.adamId=t,i.method=SN,i.isStoreRequest=!0,i.disableCache=!0,i.successAction=o
const s=new UH(fB,mb,uk),a=new UH("version-to-review",mb,uk)
return i.parameters=[s,a],i}(e,t,n,r),i}function xs(e,t,n,r,o=!1,i,s){return yg.context("createWriteReviewAction",()=>{const a=o?e.loc.string("EDIT_REVIEW"):e.loc.string("WRITE_A_REVIEW"),c=function(e,t,n){return bs(e.bag.writeReviewURL,n).param("id",t).build()}(e,t,n)
let l
switch(e.client.deviceType){case Mj:{const e=new VH(t,c)
e.title=a,e.appIcon=r,e.itemDescription=i,e.appName=s,l=e
break}default:if(e.featureFlags.isEnabled("review_composer_redesign")){const n=new VH(t,c)
n.title=a,n.appName=s,n.itemDescription=i,n.appIcon=r,n.artwork=ce(e,lk),l=n
break}{const n=new _q("writeReview")
n.title=a,n.pageUrl=c,n.pageData=t,n.presentationContext=ZI,n.artwork=ce(e,lk),l=n
break}}return l})}function Ms(e,t,n,r,o){return yg.context("writeReviewActionFromData",()=>{const s=t.id
if((null==s?void 0:s.length)>0){const a=t.type===Pj,c=J(t,fB),l=i(c)&&c>0
return xs(e,s,a,o,l,n,r)}return null})}function $s(e,t,n,r,o=!1,i=!1,s=!0,a){return yg.context("reviewsShelfForReviewsData",()=>{if(e.featureFlags.isEnabled(eE)){const t=new Ez(bL)
return null==a||a.addImpressionsToShelf(e,t,tE),t.items=Ss(e,n,r,o,null,null,a),t}{const c=new Ez(yj)
return null==a||a.addImpressionsToShelf(e,c,tE),c.items=Ps(e,t,n,r,o,i,s,a),c}})}function Fs(e,t,n,o,s,a,c,u,f,p,h=!1,w=!0,g=null,m=!1){return yg.context("reviewsContainerShelfForReviewsData",()=>{const w=function(e,t,n,o,s,a,c,u,f,p=null,h=!1){return yg.context("reviewsContainerForReviewsData",()=>{const w=new rJ,g=d(n,$U),m=l(n,"isBundle")
if(w.adamId=g,w.ratings=Is(e,0,nD,n),e.featureFlags.isEnabled(XB)){const t=Cs(e,s,f)
i(t)&&(w.reviewSummary=t)}if(h||(w.tapToRate=Ls(e,g,m,a,p)),i(o)&&o.length>0){const r=!1,i=!r,s=r?o.slice(0,1):o
w.reviews=Ps(e,t,n,s,i,!1,i,f)}if(r(w.reviews)||0===w.reviews.length){const t=w.ratings.ratingAverage>0&&w.ratings.ratingCounts,r=l(n,XO)
t||r||(w.ratings.status=e.loc.string(nE))}if(r(u)||(w.editorsChoice=u),!h){const t=i(p)&&p>0
w.writeReviewAction=xs(e,g,m,c,t,lu(e,s),a)}const v=d(n,rE)
if(v){const t=new OH(v,!1)
t.title=e.loc.string(Ab),w.supportAction=t}let y=!1
for(const t of o)if(Ts(e,t)){y=!0
break}return w.alwaysAllowReviews=y,w})}(e,t,n,o,a,s,c,u,f,g,m),v=new Ez(wb)
return v.title=Ws(e),v.items=[w],null==f||f.addImpressionsToShelf(e,v,tE),h&&i(w.reviews)&&w.reviews.length>0&&(v.seeAllAction=Hs(e,t,n,o,p,s,c,!1,!1)),v})}function Ns(e,t,n,r){return yg.context("personalizedReviewsContainerShelf",()=>{const o=_(e,r),i=J(o,fB)
return Fs(e,t,n.ratingsData,n.reviewItems,n.appName,o,n.appIcon,n.editorsChoice,n.shelfMetrics,n.nextPageHref,n.includeSeeAllAction,!1,i)})}function Bs(e,t,n,r,o,i=null){const a=function(e,t,n,r=null){let o=`${AW}:/${UW}/${t}/${n}`
return s(r)&&(o=`${o}/?${pq.token}=${encodeURIComponent(JSON.stringify(r))}`),o}(0,t,n,i)
return new JY(n,r,o,a)}function Us(e){const t=e.bag.reviewSummarizationLearnMoreEditorialItemId
if(o(t))return null
const n=e.loc.string(Tb),r=new _q(HG)
return r.title=n,r.pageUrl=`https://apps.apple.com/story/id${t}`,r.artwork=ce(e,hC),r}function Gs(e,t,n,o,i,s=null,a=null,c,l=null,u,f,p=!1,h=!1,w=pX,g=null){const m=new KY
return m.shelves=[],yg.context("reviewsPageForReviewsData",()=>{const v=r(a)?d(n,$U):a
if(i&&!r(n)&&!e.featureFlags.isEnabled(eE)){const r=Fs(e,t,n,[],c,u,l,null,f)
m.trailingNavBarAction=Us(e),m.shelves.push(r)}const y=js(e,t,v,n,o,s,p,h,w,g,f)
return y.reviewsShelf.presentationHints={...y.reviewsShelf.presentationHints,isSortable:i&&y.reviewsShelf.presentationHints.isSortable},m.adamId=v,m.shelves.push(y.reviewsShelf),m.nextPage=y.paginationToken,m.initialSortOptionIdentifier=y.initialSortId,m.sortActionSheetTitle=y.sortActionSheetTitle,m.sortOptions=y.sorts,m.alwaysAllowReviews=Ts(e,u),m})}function js(e,t,n,r,i,a=null,c=!1,l=!1,u=pX,d=null,f){const p=(null==a?void 0:a.length)>0&&s(i)&&i.length%2>0,h=p?i.slice(0,i.length-1):i,w=p?i.slice(i.length-1):[],g=$s(e,t,r,h,c,l,!0,f)
var m
g.id=o(m=u)?hX:`${hX}.${m}`
const v={reviewsShelf:g}
return g.presentationHints={isSortable:i.length>0||(null==a?void 0:a.length)>0,isSeeAllContext:!0},v.initialSortId=u,v.sortActionSheetTitle=e.loc.string("REVIEWS_SORT_BY"),v.sorts=[Bs(0,n,ZO,e.loc.string(bb),e.loc.string(e.featureFlags.isEnabled(XB)?bb:"REVIEWS_SORT_BY_MOST_HELPFUL"),d),Bs(0,n,"favorable",e.loc.string(Sb),e.loc.string(e.featureFlags.isEnabled(XB)?Sb:"REVIEWS_SORT_BY_MOST_FAVORABLE"),d),Bs(0,n,"critical",e.loc.string(Pb),e.loc.string(e.featureFlags.isEnabled(XB)?Pb:"REVIEWS_SORT_BY_MOST_CRITICAL"),d),Bs(0,n,Ib,e.loc.string(Cb),e.loc.string(e.featureFlags.isEnabled(XB)?Cb:"REVIEWS_SORT_BY_MOST_RECENT"),d)],(null==a?void 0:a.length)>0&&(v.paginationToken=function(e,t,n,r,o){return{url:ys(0,t,r),remainingContent:o,nextHref:n,profile:XG,maxPerPage:20,highestOrdinal:0,metricsPageInformation:null,metricsLocationTracker:null}}(0,n,a,u,w)),v}function Vs(e,t,n,r,o,i,a,c,l){return yg.context("reviewsPageForReviewsMediaContainer",()=>{let u
return u=s(o.data)?r.concat(o.data):r,Gs(e,t,null,u,i,o.next,n,null,null,null,l,!1,!1,a,c)})}function Hs(e,t,n,r,o=null,i=null,s=null,a,c,l,u){return n?yg.context(kb,()=>{const d=Gs(e,t,n,r,!0,o,null,i,s,l,u,a,c)
d.title=null
const f=new _q(yj)
return f.pageData=d,f.title=e.loc.string(xU),f}):null}function Ws(e){switch(e.client.deviceType){case"tv":return e.loc.string("TV_PRODUCT_SECTION_RATINGS")
case Fj:return null
default:return e.loc.string("PRODUCT_SECTION_REVIEWS")}}function qs(e,t){return t.map(t=>t.createProductPageSection(e))}function zs(e,t,n,r,o,i,s){const a=function(e,t,n){switch(t){case kN:return n?ug:lg
case B_:return dg
case bU:return n?sg:Im
case hU:return n?cg:ag
case U_:return n?pg:fg
default:return Im}}(0,n,r)
let c=[]
c=t?o&&a.purchasedOrderingCompact?a.purchasedOrderingCompact.slice():a.purchasedOrdering.slice():i&&a.downloadingOrdering?o&&a.downloadingOrderingCompact?a.downloadingOrderingCompact.slice():a.downloadingOrdering.slice():o&&a.notPurchasedOrderingCompact?a.notPurchasedOrderingCompact.slice():a.notPurchasedOrdering.slice()
const l=t?a.purchasedSpotlightIndex:a.notPurchasedSpotlightIndex
if(s&&s.spotlightSection){const e=function(e,t){for(let n=0;n<t.length;n++){const r=t[n]
if(e.sectionType===r.sectionType&&e.shelfId===r.shelfId&&JSON.stringify(e.shelfBasedMappedIds)===JSON.stringify(r.shelfBasedMappedIds))return n}return-1}(s.spotlightSection,c);-1!==e&&(c.splice(e,1),c.splice(l,0,s.spotlightSection))}return c}function Ys(e){return new wX(Hj,e?RB:EB)}function Js(e){var t
return(0,Tg.isSome)(e)&&(null===(t=e.id)||void 0===t?void 0:t.indexOf(a0))>-1}function Ks(e,t,n){if(!e.featureFlags.isEnabled(Wx))return null
const r=new s0(t)
ti(e,r,ei(e,"ProductMediaGallery",n,""))
const o=new _q("productMediaGallery")
return o.pageData=r,o}function Zs(e,t){var n
return r(t)?1:i(null===(n=t.video)||void 0===n?void 0:n.preview)&&t.video.preview.height>0?t.video.preview.width/t.video.preview.height:i(t.screenshot)&&t.screenshot.height>0?t.screenshot.width/t.screenshot.height:1}function Qs(e,t,n,r){return yg.context("createProductPageFromShelfBasedProductPage",()=>{var o,a,c,l
const u=new qY
return u.adamId=t.lockup.adamId,u.bundleId=t.lockup.bundleId,u.icon=t.lockup.icon,u.isEditorsChoice=t.lockup.isEditorsChoice,u.ordinal=t.lockup.ordinal,u.title=t.lockup.title,u.subtitle=t.lockup.subtitle,u.developerTagline=t.lockup.developerTagline,u.editorialTagline=t.lockup.editorialTagline,u.editorialDescription=t.lockup.editorialDescription,u.shortEditorialDescription=t.lockup.shortEditorialDescription,u.rating=t.lockup.rating,u.ratingCount=t.lockup.ratingCount,u.ageRating=t.lockup.ageRating,u.buttonAction=t.lockup.buttonAction,u.offerDisplayProperties=t.lockup.offerDisplayProperties,u.titleOfferDisplayProperties=t.titleOfferDisplayProperties,u.clickAction=t.lockup.clickAction,u.children=t.lockup.children,u.contextMenuData=t.lockup.contextMenuData,u.shelfBackground=t.lockup.shelfBackground,u.searchAd=t.lockup.searchAd,u.searchAdOpportunity=t.lockup.searchAdOpportunity,u.crossLinkTitle=t.lockup.crossLinkTitle,u.crossLinkSubtitle=t.lockup.crossLinkSubtitle,u.tertiaryTitle=t.lockup.tertiaryTitle,u.tertiaryTitleAction=t.lockup.tertiaryTitleAction,u.tertiaryTitleArtwork=t.lockup.tertiaryTitleArtwork,u.flowPreviewActionsConfiguration=t.lockup.flowPreviewActionsConfiguration,u.productDescription=t.lockup.productDescription,u.itemBackground=t.lockup.itemBackground,u.developerAction=t.developerAction,u.logoArtwork=t.logoArtwork,u.navigationBarIconArtwork=t.navigationBarIconArtwork,u.uberArtwork=null===(o=t.uber)||void 0===o?void 0:o.artwork,u.uberArtworkForCompactDisplay=null===(a=t.uber)||void 0===a?void 0:a.compactArtwork,u.uberVideo=null===(c=t.uber)||void 0===c?void 0:c.video,u.uberStyle=null===(l=t.uber)||void 0===l?void 0:l.style,u.media=function(e){const t=[]
for(const n of Object.values(e.shelfMapping))if(Js(n)){const e=n.contentsMetadata,r=n.items
t.push(new Hq(r,e.platform,e.allPlatforms,e.platformDescription,e.allPlatformsDescription,e.allPlatformsDescriptionPlacement))}return t}(t),i(t.shelfMapping[LG])&&(u.badges=Hl(e,t.shelfMapping[LG])),u.shareAction=t.shareAction,u.pageMetrics=t.pageMetrics,u.pageRenderMetrics=t.pageRenderMetrics,u.isComplete=!t.isIncomplete,u.hasDarkUserInterfaceStyle=t.hasDarkUserInterfaceStyle,u.mediaSectionTitle=e.loc.string(pb),u.expandedOfferDetails=t.expandedOfferDetails,u.regularPriceFormatted=t.regularPriceFormatted,u.theme=t.theme,u.externalVersionIdentifier=t.externalVersionIdentifier,u.updateBuyParams=t.updateBuyParams,u.appPlatforms=t.appPlatforms,u.descriptionHeader=t.descriptionHeader,u.description=t.description,u.banner=t.banner,u.secondaryBanner=t.secondaryBanner,u.fullProductFetchedAction=t.fullProductFetchedAction,u.appPromotionDetailPageFlowAction=t.appPromotionDetailPageFlowAction,u.pageRefreshPolicy=t.pageRefreshPolicy,u.purchasedOrdering=qs(e,zs(0,!0,e.host.platform,n,!1,!1,r)),u.notPurchasedOrdering=qs(e,zs(0,!1,e.host.platform,n,!1,!1,r)),u.shelfMapping=function(e,t){const n={}
for(const r of YY){let o
o=r===yj?Xs(e,t):t.shelfMapping[r],s(o)&&(n[r]=o)}return n}(e,t),u.alwaysAllowReviews=t.alwaysAllowReviews,u})}function Xs(e,t){const n=t.shelfMapping[PG],r=t.shelfMapping[YF],i=e.featureFlags.isEnabled(XB)?t.shelfMapping[EG]:t.shelfMapping[ZN],a=t.shelfMapping[JF],c=t.shelfMapping[KF]
if(o(n)&&o(r)&&o(i)&&o(a)&&o(c))return null
let l=null,u=[],d=null,f=null,p=null,h=null,w=null
if(s(null==r?void 0:r.items))for(const e of r.items){const t=e
switch(t.sourceType){case EG:l=t.review
break
case hb:u.push(t.review)}}else u=null
if(s(null==i?void 0:i.items)&&(l=e.props.enabled(KO)?i.items[0]:i.items[0].review),s(null==a?void 0:a.items)&&(f=a.items[0].action),s(null==c?void 0:c.items)){const e=c.items[0].action
p=e.writeReviewAction,h=e.supportAction}s(null==n?void 0:n.items)&&(d=n.items[0],w=null==n?void 0:n.seeAllAction)
const g=new rJ
g.adamId=t.lockup.adamId,g.ratings=d,g.tapToRate=f,g.editorsChoice=l,g.reviews=u,g.supportAction=h,g.writeReviewAction=p,g.alwaysAllowReviews=t.alwaysAllowReviews
const m=new Ez(wb)
return m.title=Ws(e),m.items=[g],m.seeAllAction=w,m}function ea(e,t,n,r,i){if(!ki(e))return null
if(o(t))return null
const s={pageInformation:n,locationTracker:r},a=$i(e,t,null,!1,!1,s,!0,!0,!1,i.allowUnpublishedAppEventPreviews);(0,Tg.isSome)(a.nextAppEventPromotionStartDate)&&(0,Tg.isSome)(null==i?void 0:i.refreshController)&&kn(a.nextAppEventPromotionStartDate,null==i?void 0:i.refreshController)
const c=a.appPromotions
if(0===c.length)return null
const l=ta(0,c,void 0)
return l.isHorizontal=!1,pf(e,l,{...s,id:"",kind:null,softwareType:null,targetType:JG,title:""}),l}function ta(e,t,n){const r=new Ez(uC)
return r.isHorizontal=!0,r.title=n,r.items=t,r}function na(e,t,n){e.featureFlags.isEnabled(I_)&&e.bag.isOnDemandShelfFetchingEnabled&&(0,Ag.isSome)(t)&&o(t.items)&&n.isFirstRender&&(n.showingPlaceholders=ia(e,t,n.remainingItems.length))}function ra(e,t,n,r,i){(0,Ag.isSome)(t)&&(0,Ag.isSome)(t.url)&&o(t.items)&&n.isFirstRender&&(n.showingPlaceholders=ia(e,t,null!=r?r:n.remainingItems.length,n.isSearchLandingPage,n.isArcadePage,i))}function oa(e,t,n,r){n.showingPlaceholders=ia(e,t,n.remainingItems.length,n.isSearchLandingPage,n.isArcadePage,r)}function ia(e,t,n,r=!1,i=!1,a=null){if(s(t.items))return!1
if(!function(e,t){switch(t){case uj:case nG:case _$:case $F:case ND:case aA:case j$:case MM:case $M:case uC:case w$:case MU:return!0
default:return!1}}(0,t.contentType)||r)return!1
const c=function(e,t,n){return t>0?t:(0,Ag.isSome)(n)&&!xn(n)?0:e.client.isPad?15:6}(e,n,a),l=new Array(c)
for(let e=0;e<c;e+=1)l[e]=new Iz
if(o(l))return!1
const u=function(e,t){if((0,Ag.isSome)(t.rowsPerColumn))return t.rowsPerColumn
switch(t.contentType){case uj:return 3
case nG:return 2
case _$:return 1
case ND:return null
default:return 1}}(0,t)
return(0,Ag.isSome)(u)&&(t.rowsPerColumn=u),t.placeholderContentType=t.contentType,t.contentType=B$,t.items=l,s(i)&&(t.presentationHints={...t.presentationHints,isAppleArcadeContext:i}),t.isHidden=!1,!0}function sa(e){return e.contentType===B$}function aa(e){if(null===l0){l0=new Set
for(const t of e.bag.suppressedPrivacyAppIds)l0.add(t)}}function ca(e,t){return aa(e),!(0,Ag.isNothing)(l0)&&!o(t)&&l0.has(t)}function la(e,t){return aa(e),!(0,Ag.isNothing)(l0)&&!o(t)&&(!(!l0.has("com.apple.InstallAssistant.*")||!t.startsWith("com.apple.InstallAssistant."))||l0.has(t))}function ua(e,t){const n=t.host
if(r(n))return!1
const o=[e.bag.mediaHost,e.bag.mediaEdgeHost(e),e.bag.mediaEdgeSearchHost]
for(const e of o)if(!r(e)&&-1!==n.indexOf(e))return!0
return!1}function da(e,t,n){if(!(0,Ag.isNothing)(t))return qe(e,new Uz(e,t).addingQueryValues(n)).toString()}function fa(e){let t=e.query.id
const n=e.pathname
if(r(t)&&(null==n?void 0:n.length)>0){const e=d0.exec(n)
e&&e.length>1&&(t=e[1])}if(!a(t)){const n=e.pathComponents()
s(n)&&(t=n[n.length-1])}return t}function pa(e,t,n=!1){var r,o
let s=fa(t)
if(!a(s))throw new Error(`Unable to map ${t.build()} to a media api url`)
s in f0&&(s=f0[s])
let c=Gj,l=u0,u=[hN,rx,yj,Pj,fD,ox,pD]
const d=null===(r=t.pathname)||void 0===r?void 0:r.split("/"),f=(0,Ag.isSome)(d)&&d.includes(NW)
f&&(c=Pj,l=[bB,oB,pG,$C,pN],u=[rx,Gj,yj,ox]),e.bag.enablePrivacyNutritionLabels&&!ca(e,s)&&l.push(ix),e.appleSilicon.isSupportEnabled&&l.push(AG),e.bag.enableLicenses&&l.push(FC)
const p=w(t.query[pq.isArcade]);(null===p||p)&&(l.push(UR,GR,ij),u.push(dG)),e.bag.enableSellerInfo&&l.push(CM),e.bag.enableSellerICPAnnotation&&l.push(NC),e.bag.gameCenterExtendSupportedFeatures&&l.push("supportedGameCenterFeatures"),ks(e)&&u.push(BC)
const h=new Uz(e).withIdOfType(s,c).includingAdditionalPlatforms(O(e)).includingRelationships(u).includingAttributes(l).addingRelationshipLimit(yj,E(e)).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes($e(e));(null===(o=t.query[pq.productVariantID])||void 0===o?void 0:o.length)>0&&h.addingQuery(pq.productVariantID,t.query[pq.productVariantID])
const g=t.query[mq]
return i(g)&&h.addingQuery(mq,g),ki(e)&&!f&&(Oi(e)||h.includingScopedRelationships(Gj,[xj]),h.includingScopedAttributes(xj,[pj,GU,IU]),h.includingScopedAvailableIn(xj,[UC])),Oi(e)&&Dn(h),Ei(e)&&Ln(h),no(e,BG)&&h.enablingFeature(hD),n&&h.enablingFeature(GC),Oi(e)||h.includingRelationships([wD]),h.attributingTo(t.build())}function ha(e){const t=[lj,ij,eG,pG]
return t.push(YU),e.appleSilicon.isSupportEnabled&&t.push(AG),t}function wa(e){let t=[]
switch(e.client.deviceType){case Mj:t=t.concat(w0),e.appleSilicon.isSupportEnabled&&t.push(cx)
break
case Fj:t.push(g0)
break
case wj:t=t.concat(h0)
break
default:t=t.concat(p0)}return t}function ga(e,t,n,r,o,i){const s=u0
e.bag.enablePrivacyNutritionLabels&&!ca(e,t)&&s.push(ix),e.appleSilicon.isSupportEnabled&&s.push(AG),e.bag.enableLicenses&&s.push(FC)
const a=new Uz(e).withIdOfType(t,Gj).includingAdditionalPlatforms(O(e)).includingAttributes(s).includingRelationships([dG,hN,rx,yj,Pj,fD,ox,pD]).addingRelationshipLimit(yj,E(e)).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes($e(e))
return n&&a.addingQuery("availability",Qv),(0,Ag.isSome)(r)&&a.addingQuery(pq.productVariantID,r),i&&a.enablingFeature(GC),ki(e)&&!o&&(Oi(e)||a.includingScopedRelationships(Gj,[xj]),a.includingScopedAttributes(xj,[pj,GU,IU]),a.includingScopedAvailableIn(xj,[UC])),Oi(e)&&Dn(a),Ei(e)&&Ln(a),Oi(e)||a.includingRelationships([wD]),ks(e)&&a.includingRelationships([BC]),no(e,BG)&&a.enablingFeature(hD),a}function ma(e,t,n){const r=s(n)?[...n]:[]
return r.push(`${pq.groupingFeaturedContentId}=${e}`),s(t)&&r.push(`${pq.nativeGroupingShelfId}=${t}`),{protocol:AW,path:`/${OW}/${PW}/{token}`,query:r}}function va(e,t){const n=[]
for(const r of e)n.push(ma(r,null,t))
return n}function ya(e,t){if(e.featureFlags.isEnabled("game_center_shelves_crossfire_referral_2023G")&&t instanceof _q){const e={app:"com.apple.gamecenter.from.browse",kind:{name:vU}}
return t.referrerData=e,new EH([new yW(e),t])}return t}function Aa(e,t,n=!1){const r=ka(e,t),o=e.client.isPhone
let i=o?Zy:Qy
n&&(i="topShelf")
const a=p(r,i)
let c=null,l=null
return s(a)&&(c=Fu(e,a,{withJoeColorPlaceholder:!0,useCase:6}),s(c)&&(c.crop=o?"oa":n?"ta":"ob",l=c.backgroundColor)),{artwork:c,artworkData:a,backgroundColor:l}}function Ta(e,t,n=!1){const r=function(e,t){switch(t.type){case kj:return H(t,ij)
case mU:return H(t,gC)
default:return we(t,Re(e,t),gC)}}(e,t),o=e.client.isPhone,i=o?"breakoutVideo9x16":"breakoutVideo16x9",a=p(r,o?"sizzleVideo9x16":"sizzleVideo16x9")||p(r,i)
let c=null,l=null,u=null
if(s(a)){u=p(a,TN)
const t=Fu(e,u,{withJoeColorPlaceholder:!0,useCase:6})
s(t)&&(t.crop="sr",l=t.backgroundColor)
const r=d(a,YG)
s(t)&&(null==r?void 0:r.length)>0&&(c=new VV(r,t,{canPlayFullScreen:!1,showPlaybackControls:!1,allowsAutoPlay:!0,looping:!0,playbackControls:{prominentPlay:n},autoPlayPlaybackControls:{}}))}return{video:c,artworkData:u,backgroundColor:l}}function ba(e,t,n=!0,r,o){const i=Ta(e,t),s=Aa(e,t),a=i.backgroundColor||s.backgroundColor
return Pa(e,t,0,o),(t.type===mU?l(Ca(0,t),"displayMaterial"):Y(t,Ev))&&n?Rv:Sa(0,a)}function Sa(e,t){return t?U(t,50)?bj:_G:bj}function Pa(e,t,n,r){if(e.client.isPhone||r)return yG
const o=t.type===mU?d(Ca(0,t),"textPosition"):q(t,PC)
if((0,Tg.isNothing)(o)||0===o.length)return vj
switch(o.toLowerCase()){case IC:return vj
case yG:return yG
case CC:return sM
default:return vj}}function Ia(e,t,n,r=!1){switch(t){case vj:case sM:return vj
case yG:return r||n.type===mU?yG:function(e,t){var n
switch((null!==(n=q(t,PC))&&void 0!==n?n:"").toLowerCase()){case IC:return vj
case yG:return yG
case CC:return sM
default:return vj}}(0,n)
default:return vj}}function Ca(e,t){return t.type!==mU?null:H(t,"display.templateParameters")}function ka(e,t){switch(t.type){case kj:return H(t,lj)
case mU:return H(t,vv)
default:return we(t,Re(e,t),lj)}}function Oa(e,t){return t.type===mU?d(Tt(0,t),"callToActionLabel"):q(t,kC)}function Ea(e,t){const n=s(H(t,aj)),r=Y(t,k$)
return!n&&!r}function Ra(e,t){const n=H(t,aj),o=s(n),i=Y(t,k$),a=ie(e,t,lG)
if(!o&&!i&&!K(a))return null
let c=null
if(c=o?d(n,gj):q(i?t:a,gj),r(c))return null
let l=null
if(o&&d(n,QL)===sD)l=new OH(c)
else{const t=e.required(y2).fetchFlowPage(c),n=new _q(t)
n.pageUrl=c,t===VU&&(n.pageData=Vl(e,a)),l=n}return l.title=Oa(0,t),l}function Da(e,t,n=!1){if(o(t))return null
let r=null
const i=G(nj),s=G(OC),a=F(d(t,UN)),l=c(t,Dv).map(e=>F(e)),u=Sa(0,a)
if(2===l.length){r=new $V("horizontalGradient")
const e=l[0],t=l[1]
r.gradientStartColor=j(e,e),r.gradientEndColor=j(t,t),r.filter=_v,n||(r.accessoryColor=r.gradientEndColor)}else r=new $V(_U),r.color=u===bj?i:s,n||(r.accessoryColor=r.color),r.isFallbackStyle=!0
return r}async function _a(e,t,n,o,i){const s=n(e,t,i)
if(!s)return await Promise.resolve({originalData:t,additionalData:null})
const a=Array.from(s),c=[]
for(const t of a){const n=o(e,t)
if(r(n)){const e=a.indexOf(t)
a.splice(e,1)}else c.push(n)}return await Promise.all(c).then(e=>{const n=new Map
for(const[t,r]of a.entries()){const o=e[t]
n.set(r,o)}return{originalData:t,additionalData:n}})}function La(e,t,n,r=nj){if(o(t)||o(t.attributes))return null
const s=Ta(e,t,!0),a=Aa(e,t),c=s.backgroundColor||a.backgroundColor,l=Pa(e,t,0,!0),u=ba(e,t,!1,0,!0)!==Rv&&!0,f=$a(e,t,0,!1,u,KL)
let p=null
"tv"!==e.client.deviceType&&(p=f.description,f.description=null)
const h=function(e,t){const n=Ca(0,t),r=d(n,"ctaButtonBackgroundColor"),o=d(n,"ctaButtonTextColor")
return i(r)&&i(o)?{type:bC,fillColor:F(r),textColor:F(o)}:{type:RR,fillColor:null,textColor:null}}(0,t),w=new mV($j,e.bag.arcadeAppAdamId,r,null,$j,h,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId),g=new x0(f,w,{backgroundColor:c,wantsMaterialDetailBackground:!1,wantsBlur:u,badgeColor:null,titleColor:null,descriptionColor:null,callToActionColor:null,textAlignment:null,detailsPosition:l},null,p,a.artwork,s.video),m=vf(e,t,g.details.title,{...n,targetType:yN})
return m.displaysArcadeUpsell=!0,pf(e,g,m),ef(e,m,g.details.title),g.offerButtonAction=Fa(e,t,g$,n),nf(n.locationTracker),g}function xa(e,t){return Oa(0,t)}function Ma(e,t){return q(t,hG)}function $a(e,t,n,r,o,i){let s=null
switch(i){case KL:s={type:KL}
break
case TG:const e=q(t,vF)
s=(null==e?void 0:e.length)>0?{type:TG,title:e}:{type:zG}
break
default:s={type:zG}}let a=ba(e,t,r,0,!0)
const c=Pa(e,t,0,!0)
return o&&(a=bj),new bz(function(e,t){return q(t,VG)}(0,t),Ma(0,t),s,null,a,Ia(0,c,t,!0))}function Fa(e,t,n,r){const o={marketingItemData:t},i=n===g$&&e.bag.arcadeDownloadPackPostSubscribeTrigger&&lt(e,e.bag.arcadeDownloadPackRolloutRate)
return Na(e,o,xa(0,t),r,i)}function Na(e,t,n,r,o){const s=t.marketingItemData
if(!i(s))return null
const a=Tt(0,s),l=d(a,JU)===aj,u=d(a,gj)
if(l&&u){const t=function(e,t){const n=e.bag.dynamicUIRegexStrings
for(const e of n)if(new RegExp(e).test(t)){const e=new _q(ML,t)
return e.pageData=new TY,e}const r=e.bag.financeUIRegexStrings
for(const e of r)if(new RegExp(e).test(t))return new _q(gB,t)
const o=e.bag.webViewRegexStrings
for(const e of o)if(new RegExp(e).test(t))return new _q($L,t)
return new OH(t,!1)}(e,u),o={id:e.bag.arcadeAppAdamId,actionType:ZL,actionContext:QG,contextualAdamId:e.bag.arcadeAppAdamId,offerType:TC,targetType:Nj,mercuryMetricsData:Kd(0,s),...r}
return t.title=n,Lf(e,t,o),t}{const t=function(e,t,n,r){const o=Tt(0,t),s=d(o,rB),a=d(o,vB)
if(!i(s)||!i(a))return null
const l=c(o,"serviceTypes").length>1&&e.bag.aristotleParentAppAdamId?e.bag.aristotleParentAppAdamId:e.bag.arcadeAppAdamId,u=new XH(s,l,{buyParams:a,productIdentifier:s,pageInformation:r.pageInformation}),f={id:l,actionType:ZL,targetType:Nj,subscriptionSKU:s,actionContext:QG,contextualAdamId:l,actionDetails:{buyParams:a},offerType:TC,mercuryMetricsData:Kd(0,t),...r}
return u.title=n,Lf(e,u,f),u}(e,s,n,r)
if(o){const e=new _q(C$),r=m$
e.pageData=r,e.presentationContext=WB
const o=new oW(void 0,void 0,e,void 0),i=new EH([t,o])
return i.title=n,i}return t}}function Ba(e,t){const n=new Set,r=_(e,t),o=se(r,nx)
for(const t of o){const o=Ga(e,t,r)
if(s(o))for(const e of o)n.add(e)}return n}function Ua(e,t){let n
return t===KE&&(n=Vf(e,ER)),t===ZE&&(n=jf(e,10)),r(n)?null:An(e,n).catch(()=>null)}function Ga(e,t,n){if(q(t,US)!==QE)return null
const o=q(t,GS),i=r(Hf(e,n)),s=[]
return o===jS&&(s.push(ZE),i&&s.push(KE)),s}function ja(e,t,n,a,c){return yg.catchingContext(`module: ${a.module}`,()=>{var c
const l=[]
switch(a.module){case"Header":a.titleForNextShelf=q(t,IN)
break
case"TextBlock":{const e=function(e,t,n){const r=q(t,IN)
if(!r)return null
const o=new _V(r,gU,HG)
qa(0,o,n)
const i=new Ez(wB)
return i.items=[o],i}(0,t,a);(0,Tg.isSome)(e)&&(l.push(e),a.hasNonFocusableElements=!0)
break}case"CollectionLockup":{const n=function(e,t,n){const r=Y(t,"showOrdinals"),o="OrdinalDesc"===q(t,"collectionLockupDisplayType")?FA:"ascending",i=q(t,"collectionLockupSize")
let s
if(n.subStyle=i,i)switch(i){case JS:s=_$
break
case YS:s=nG
break
default:s=uj}const a={metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,artworkUseCase:$u(0,s),canDisplayArcadeOfferButton:$d(0,s)},c=Pu(e,se(t,Uj),{includeOrdinals:r,ordinalDirection:o,lockupOptions:a})
if(!c||0===c.length)return null
const l=new Ez(s)
return l.items=c,l}(e,t,a);(0,Tg.isSome)(n)&&(l.push(n),a.hasFocusableElements=!0)
break}case VS:{const n=function(e,t,n){const r=q(t,"inlineImageDisplayType"),o=Fu(e,H(t,_j),{useCase:13,allowingTransparency:r===Zx&&!0,withJoeColorPlaceholder:!1})
if(!o)return null
const i=new hz(o,!1,gU)
i.caption=q(t,IN),n.subStyle=r,r&&("BoundingBox"===r?(i.isFullWidth=!1,i.hasRoundedCorners=!0):(i.isFullWidth=!0,i.hasRoundedCorners=!1)),qa(0,i,n)
const s=new Ez(Kx)
return s.items=[i],s}(e,t,a);(0,Tg.isSome)(n)&&(l.push(n),a.hasNonFocusableElements=!0)
break}case HS:{const n=function(e,t,n){const r=Wa(e,t)
if(!r)return null
let o=null
const a=se(t,xj)
if(s(a)&&(o=ea(e,a,n.metricsPageInformation,n.metricsLocationTracker,n),i(o)))return o
const c=q(t,"appLockupSize")
let l
n.subStyle=c
let u=!1
if(c)switch(c){case zS:l=uj,u=!0
break
case YS:l=nG,u=!0
break
default:l=WC}const d=at(0,t)
if(u){const t=new Ez(l),i=hu(e,r,{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,externalDeepLinkUrl:d,artworkUseCase:$u(0,l)})
t.items=[i],o=t}else o=function(e,t,n){const r=new Ez(WC),o="tv"!==e.client.deviceType,i=Wa(e,t),s=at(0,t),a=hu(e,i,{offerStyle:SB,metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,externalDeepLinkUrl:s,crossLinkSubtitle:n.crossLinkSubtitle,artworkUseCase:1}),c=new Bq(eB,a)
c.description=lu(e,i)
let l=null
switch(q(t,"appLockupVideo")){case"AppTrailer":{const t=qu(e,i)
t&&t.length>0&&(l=t[0])
break}}return l&&(yo(e,l,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,id:n.pageId}),c.video=l),o&&(r.background={type:_U,color:$0}),r.items=[c],r}(e,t,n)
return o}(e,t,a);(0,Tg.isSome)(n)&&(l.push(n),a.hasFocusableElements=!0)
break}case"TipBlock":{const n=function(e,t,n){const r=Fu(e,H(t,_j),{useCase:13})
if(!r)return null
const o=q(t,IN),i=q(t,"tipNumber"),s=new hz(r,!1,gU)
s.isFullWidth=!1,s.hasRoundedCorners=!0,s.caption=o,s.ordinal=i,qa(0,s,n)
const a=new Ez(Kx)
return a.items=[s],a}(e,t,a);(0,Tg.isSome)(n)&&(l.push(n),a.hasNonFocusableElements=!0)
break}case"PullQuote":{const n=function(e,t,n){const r=q(t,qS),o=q(t,"quoteAttribution"),i=Fu(e,H(t,_j),{useCase:13}),s=q(t,"pullQuoteDisplayType")===Zx,a=new mz(r,o,i,s)
qa(0,a,n)
const c=new Ez(qS)
return c.items=[a],c}(e,t,a);(0,Tg.isSome)(n)&&(l.push(n),a.hasNonFocusableElements=!0)
break}case"HorizontalRule":{const e=function(e,t,n){const r=q(t,"lineStyle"),i=q(t,XU)===Zx
let s=G("defaultLine")
const a=H(t,"customColor"),c=F(d(a,"lightMode")),l=F(d(a,"darkMode"))
o(c)||o(l)||(s=j(c,l))
const u=new yz(r,s,i),f=new Ez("horizontalRule")
return f.items=[u],f}(0,t);(0,Tg.isSome)(e)&&(l.push(e),a.hasNonFocusableElements=!0)
break}case WS:{const n=function(e,t,n){const r=Fu(e,H(t,"video.previewFrame"),{useCase:13})
if(!r)return null
const o=q(t,"video.video")
if(!o)return null
const i=q(t,"inlineVideoDisplayType")===Zx,s=new VV(o,r,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}})
yo(e,s,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,id:n.pageId})
const a=new wz(s,i,gU)
a.caption=q(t,IN),qa(0,a,n)
const c=new Ez(q_)
return c.items=[a],c}(e,t,a);(0,Tg.isSome)(n)&&(l.push(n),a.hasFocusableElements=!0)
break}case"AppMedia":{const n=function(e,t,n){const o=Wa(e,t)
if(!o)return null
const s=q(t,"appMediaOption"),a=q(t,"appMediaPlatform")
switch(n.subStyle=s,s){case"Screenshots":{let t=null
if(t=new Ez(Rj),r(a)){const n=zu(e,o,14)
n&&n.length>0&&(t.items=[n[0]])}else{const n=function(e,t){switch(t){case Fk:return Fj
case bU:return e.client.isPad?Oj:Lj
case kN:return"tv"
case Nk:return kG
case"visionOS":return wj
default:return null}}(e,a)
if(n){const r=zu(e,o,14,[n])
r&&r.length&&(t.items=[r[0]])}}return i(t)&&0===t.items.length?null:t}case"AppTrailers":const t=new Ez(q_),s=qu(e,o)
if(s&&s.length>0){const r=s[0]
yo(e,r,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,id:n.pageId})
const o=new wz(r,!1,dU,null,null,!0)
return t.items=[o],t}return null
default:return null}}(e,t,a);(0,Tg.isSome)(n)&&(l.push(n),a.hasFocusableElements=!0)
break}case"LinkBlock":{const r=function(e,t,n,r){const o=q(t,gj)
if(!o)return null
const i=new kq(o),s=q(t,"urlTitle")
let a=q(t,IN)
a||(a=i.host)
const c=[KS,eN,"music.apple.com","books.apple.com","podcasts.apple.com","watch-app.cdn-apple.com","tv.apple.com"]
let l=!1
for(const e of c)i.host.endsWith(e)&&(l=!0)
e.bag.disabledRichLinkPresentationEditorialItemIds.includes(r.id)&&(l=!1)
const u=new OH(o)
Lf(e,u,{targetType:aj,pageInformation:n.metricsPageInformation,id:`${n.index}`,locationTracker:n.metricsLocationTracker})
const d=new lz(s,a,u,l)
qa(0,d,n)
const f=new Ez(JE)
return f.items=[d],f}(e,t,a,n);(0,Tg.isSome)(r)&&(l.push(r),a.hasFocusableElements=!0)
break}case"TextList":{const e=function(e,t,n){const r=W(t,IN)
if(!r.length)return null
const o=q(t,"textListDisplayType")
n.subStyle=o
let i,s=!1
s="Bulleted"===o,i=s?"<ul>":"<ol>"
for(const e of r){const t=JSON.stringify(e)
i=`${i}<li>${JSON.parse(t)}</li>`}i=s?`${i}</ul>`:`${i}</ol>`
const a=new _V(i,gU,HG)
qa(0,a,n)
const c=new Ez(wB)
return c.items=[a],c}(0,t,a);(0,Tg.isSome)(e)&&(l.push(e),a.hasNonFocusableElements=!0)
break}case"IAPLockup":{const n=function(e,t,n){const r=Wa(e,t)
if(!r)return null
const o=wu(e,r,{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,artworkUseCase:1})
if(!o)return null
const i=new jq(o),s=new Ez("inAppPurchaseShowcase")
return s.background={type:_U,color:M0},s.items=[i],s}(e,t,a);(0,Tg.isSome)(n)&&(l.push(n),a.hasFocusableElements=!0)
break}case QE:{const o=function(e,t,n,o){const a=q(t,GS)
o.subStyle=a
let c=null
switch(a){case"OSUpgrade":c=function(e,t,n){const r=e.client.deviceType
if(r!==Mj)return null
const o=pt(r)
if(null===o)return null
const i=new OH(o)
Lf(e,i,{targetType:aj,pageInformation:n.metricsPageInformation,id:`${n.index}`,locationTracker:n.metricsLocationTracker})
const s=e.loc.string("CLIENT_CONTROL_OS_UPGRADE_TITLE","CHECK FOR UPDATE"),a=new Tz(s,i)
qa(0,a,n)
const c=new Ez("clientControlButton")
return c.items=[a],c}(e,0,o)
break
case jS:c=function(e,t,n,o){let a=Hf(e,n)
if(!a&&o.additionalData&&(a=Wf(0,o.additionalData.get(KE))),!i(a))return null
const c={pageInformation:o.metricsPageInformation,locationTracker:o.metricsLocationTracker},l=Bf(0,o.metricsPageInformation,o.metricsLocationTracker,!1)
let u
l.title=e.loc.string(q$,z$)
const d=Oa(0,a.marketingItemData)
s(d)?(u=Fa(e,a.marketingItemData,ER,c),i(u)&&(u.title=d)):(u=Bf(0,o.metricsPageInformation,o.metricsLocationTracker,!1),u.title=e.loc.string(q$,z$))
const f=new Cz(u,l),p=Ma(0,a.marketingItemData)
f.unsubscribedDescription=p
const h=new mV($j,e.bag.arcadeAppAdamId,SB,null,bj,null,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId)
h.titles[Ox]=e.loc.string(q$,z$),f.offerDisplayProperties=h,pf(e,f,{...c,targetType:ID,title:d,id:t.id,kind:ID,softwareType:null,displaysArcadeUpsell:!0})
{if(r(o.additionalData))return null
const t=o.additionalData.get(ZE)
if(s(t)){const n={pageInformation:o.metricsPageInformation,locationTracker:o.metricsLocationTracker},r=M(t)
f.iconArtworks=Bu(e,r,n,{useCase:2})}}const w=new Ez(ID)
return w.items=[f],w.background={type:_U,color:F0},w}(e,t,n,o)}return c}(e,t,n,a);(0,Tg.isSome)(o)&&(l.push(o),a.hasFocusableElements=!0)
break}case"StoryList":{const n=function(e,t,n,r){const o=se(t,Uj)
if(!o)return null
const i=q(t,jj),s=q(t,BB),a=MU,c=Yf(e,o,a,i,s,n,null)
return Array.isArray(c.items)&&(c.items=c.items.filter(e=>!(e instanceof fY)||qf(0,e.media.kind,a))),c}(e,t,a);(0,Tg.isSome)(n)&&(l.push(n),a.hasFocusableElements=!0)
break}case"AppEventLockup":{const n=function(e,t,n){const r=Wa(e,t)
return r?ea(e,[r],n.metricsPageInformation,n.metricsLocationTracker,n):null}(e,t,a);(0,Tg.isSome)(n)&&(l.push(n),a.hasFocusableElements=!0)
break}case"OfferItemLockup":{const n=function(e,t,n){const r=ie(e,t,Uj)
if(o(r))return null
const i=q(t,IN),s=new _V(i,gU,HG),a=new Ez(wB)
return a.items=[s],[a,ea(e,[r],n.metricsPageInformation,n.metricsLocationTracker,n)]}(e,t,a);(0,Tg.isSome)(n)&&(l.push(...n),a.hasFocusableElements=!0)
break}default:e.console.log(`Unknown module: ${a.module}`)}for(const e of l){const t=null!==(c=e.presentationHints)&&void 0!==c?c:{}
e.presentationHints={...t,isArticleContext:!0}}return l})}function Va(e,t){const n=se(t,uG)
if(1!==n.length)return null
const r=n[0]
if(!r)return null
switch(r.type){case Gj:case Pj:return r
default:return null}}function Ha(e){return e.client.deviceType===Mj?nj:rG}function Wa(e,t,n){return ie(e,t,Uj)||null}function qa(e,t,n,o){if(!t)return
let i=n.module
n.subStyle&&(i=i+"_"+n.subStyle),r(o)&&(o={id:`${n.index}`,impressionIndex:n.index,idType:sj,impressionType:i,kind:"iosModule"}),t.impressionMetrics=new SH(qd(o))}function za(e,t,n){const r=new R0
r.overlayType=Ya(e,t),r.displayOptions={horizontalPlacement:Qa(e,t),textAlignment:Xa(e,t),isOverDarkContent:Za(e,t)}
const a=Bd(e,t),c=q(t,MG)
if(Oe(e,t,FF)?r.badgeText=e.loc.uppercased(Nd(e,a,c)):r.badgeText=c,r.titleText=Rd(e,t,jj)||Ce(e,a,jj),r.overlayType===MD||r.overlayType===kk?r.descriptionText=Rd(e,t,BB):r.descriptionText=Rd(e,t,DB)||Ce(e,a,BB),r.callToActionText=q(t,kC),r.buttonTitle=Ka(e,t),r.overlayType!==XG&&r.overlayType!==MD||(r.lockup=function(e,t,n){let r=ie(e,t,lG)
const i=se(t,uG)
if(o(r)&&s(i)&&(r=i[0]),o(r))return null
const a={metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:$(t)},artworkUseCase:n.lockupArtworkUseCase,offerStyle:tB,offerEnvironment:bj,canDisplayArcadeOfferButton:n.canDisplayArcadeOfferButton,shouldHideArcadeHeader:e.featureFlags.isEnabled(T$),isContainedInPreorderExclusiveShelf:n.isContainedInPreorderExclusiveShelf},c=hu(e,r,a),l=Bd(e,t),u=Rd(e,t,DB)||Ce(e,l,BB)
return(null==u?void 0:u.length)>0&&(c.subtitle=u),c}(e,t,n)),(null==c?void 0:c.length)>0&&i(r.lockup)&&(r.lockup.heading=c),r.collectionIcons=function(e,t){const n=se(t,uG)
if(o(n))return null
const r=[]
for(const t of n){const n=Gu(e,t,{useCase:1,withJoeColorPlaceholder:!0})
s(n)&&r.push(n)}return s(r)?r:null}(e,t),s(r.lockup))r.clickAction=r.lockup.clickAction,r.impressionMetrics=r.lockup.impressionMetrics
else{const o={targetType:XG,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:$(t)},i=Ja(e,t),s=Ra(e,t)
s.title=i,Lf(e,s,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:$(t),targetType:XG,id:t.id}),r.clickAction=s,pf(e,r,vf(e,t,i,o))}return r}function Ya(e,t){const n=Y(t,Ev),r=q(t,JU),a=se(t,uG),c=Rd(e,t,BB),l=function(e){return lt(e,e.bag.hero3RolloutRate)}(e)&&(null==c?void 0:c.length)>0
let u=ie(e,t,lG)
return o(u)&&s(a)&&(u=a[0]),i(u)&&"App"===r?l?MD:XG:s(a)&&"Collection"===r?l?kk:Ok:n?$D:TG}function Ja(e,t){const n=Ya(e,t),r=ie(e,t,lG)
switch(n){case XG:case MD:return q(r,jj)
case $D:case TG:case Ok:case kk:return Rd(e,t,jj)||Ce(e,r,jj)
default:return null}}function Ka(e,t){if("tv"!==e.client.deviceType)return null
switch(Ya(e,t)){case XG:return e.loc.string(Ky)
case $D:case TG:let t=e.loc.string(yk)
return t===yk&&(t=e.loc.string(Ky)),t
case Ok:return e.loc.string("HERO_CAROUSEL_OVERLAY_BUTTON_TITLE_COLLECTION")
default:return null}}function Za(e,t){const n=Ta(e,t),r=Aa(e,t),o=n.backgroundColor||r.backgroundColor
return!o||U(o,50)}function Qa(e,t){if(e.client.isPhone)return yG
const n=q(t,PC)
if(!s(n))return vj
switch(n.toLowerCase()){case IC:return vj
case yG:return yG
case CC:return sM
default:return vj}}function Xa(e,t){return Qa(e,t),vj}function ec(e){return`${e.shelfIdentifier}.${e.slot}`}function tc(e,t){if(r(e))return null
const n=ec(t),o=e.tasks[n]
return r(o)?null:(delete e.tasks[n],o)}function nc(e,t,n){var r
const o=(null==n?void 0:n.meta)||null,i=null===(r=null==o?void 0:o.adDisplayStyle)||void 0===r?void 0:r.slot
return(0,Tg.isSome)(i)?rc(e,t,{shelfIdentifier:W0,slot:i}):rc(e,t,H0)}function rc(e,t,n){const o=null==t?void 0:t.mediaResponse
if((0,Tg.isNothing)(o)||(0,Tg.isSome)(null==t?void 0:t.failureReason))return null
const i={tasks:{}}
return function(e,t){if(r(e))return
const n=ec(t.positionInfo)
e.tasks[n]=t}(i,{data:_(e,o),positionInfo:n}),i}async function oc(e){const t=new Array(e.length)
let n=e.length
return await new Promise((r,o)=>{const s=function(){if(0===n){const e=t.map(e=>e.status===XL?e.reason:null).filter(i)
0===e.length?r(t):1===t.length&&1===e.length?o(e[0]):o(new z0(e))}}
for(let r=0;r<e.length;r++){const o=r
e[o].promise.then(r=>{t[o]={status:aD,value:r,isRequired:e[o].isRequired},n--,s()},r=>{t[o]={status:XL,reason:r,isRequired:e[o].isRequired},n--,s()})}})}function ic(e,t,n){if(o(t))return
const r=function(e){return d(e,"meta.metrics.clusterId")}(n)
o(r)||function(e,t,n){const r=ac(t)
e.storage.storeString(r,n)}(e,t,r)}function sc(e,t){return o(t)?null:function(e,t){const n=ac(t)
return e.storage.retrieveString(n)}(e,t)}function ac(e){return e+"-cohort-id"}async function cc(e,t,n){const r={primaryPageData:null,additionalData:{},requiredAdditionalDataFailureReason:void 0},o=Object.keys(n),s=[t,...o.map(e=>n[e])],a=await oc(s)
switch(a[0].status){case aD:r.primaryPageData=a[0].value
break
case XL:r.primaryPageDataFetchFailureReason=a[0].reason}const c=a.slice(1)
for(const[t,n]of c.entries()){const s=o[t]
switch(n.status){case aD:r.additionalData[s]=n.value
break
case XL:r.additionalData[s]=null,e.console.log(`Builder - failed to fetch additionalPageRequirement ${s}, isRequired: ${n.isRequired}, reason: ${n.reason}`),n.isRequired&&(r.requiredAdditionalDataFailureReason=n.reason)}if(i(r.requiredAdditionalDataFailureReason))break}return r}function lc(e,t,n){const r=new Ez(n||K0)
r.isHorizontal=!1,r.items=SA
const o=new xz([r])
return o.isIncomplete=!0,o.title=t,o}function uc(e,t){if(!(0,Ag.isNothing)(t))switch(t){case"top-free":return"top-paid"
case"top-paid":return"top-free"
default:return}}async function dc(e,t,n,r=null){const o=function(e,t,n,r=null,o=e.host.clientIdentifier){const i=[YU,eG,pG]
e.appleSilicon.isSupportEnabled&&i.push(AG)
const a=new Uz(e).forType(EM).addingQuery(fG,t).includingAttributes(i).addingQuery(OF,Gj).includingMacOSCompatibleIOSAppsWhenSupported(!0).includingAdditionalPlatforms(O(e)).usingCustomAttributes($e(e))
return s(n)&&a.addingQuery(pq.charts,n),o===JV?a.addingContext(Fj):o===KV&&a.addingContext(kG),e.appleSilicon.isSupportEnabled&&a.includingAdditionalPlatforms([sG,cG]),(0,Ag.isSome)(r)&&a.addingQuery(pq.ages,r),a}(e,t,n,r)
return o.withLimit(200),o.enablingFeature("newChartsElements"),await An(e,o)}async function fc(e,t,n){let r
return r=e.host.clientIdentifier===KV||function(e){return s(e)&&(-1!==e.indexOf("top-free-safari-extensions")||-1!==e.indexOf("top-paid-safari-extensions"))}(t)?Promise.resolve({}):An(e,Un(e,n)).catch(()=>{}),await r}function pc(e,t,n,r){const o={...n,shouldFilter:!Y(t,VD),chartUrl:q(t,mM),chartIdentifier:q(t,wG),roomRelationshipData:ie(e,t,"room")}
return Mn(o.featuredContentId)?(o.seeAllUrl=function(e,t,n){const r=q(t,mM),o=new kq(r),i=q(t,wG)
s(i)&&o.param(pq.chart,i)
const a=function(e,t,n){var r
const o=null!==(r=(null==n?void 0:n.editorialCharts.length)>1)&&void 0!==r&&r,i=null==n?void 0:n.editorialCharts.map(e=>e.type.toString()).join(",")
if((0,Ag.isSome)(i)&&i.includes(t)&&o)return i
const s=uc(0,t)
return void 0===s?t:[t,s].join(",")}(0,i,n)
return s(a)&&o.param(pq.charts,a),o.toString()}(0,t,r.chartSet),o.showOrdinals=!0,o.shouldFilter=!1):s(o.roomRelationshipData)&&(o.seeAllUrl=da(e,o.roomRelationshipData.href)),o.shelfStyle=function(e,t,n,r){const o=n.featuredContentId
if(557===o||418===o||495===o||function(e){return $Q.has(e)}(o)){let e=q(t,XU)
return e||(e=311===o||312===o?eB:495===o||557===o?GD:PB),`${e}Lockup`}if(431===o)return jD
if(429===o)return $M
if(304===o||305===o||430===o||420===o)return MM
if(Mn(o))return uj
if(497===o)return j$
switch(r.shelves.length%3){case 0:return uj
case 1:return nG
default:return _$}}(0,t,o,r),o.clientIdentifierOverride=Jt(e,t),o}function hc(e,t,n,a){const c=(l=t.featuredContentId,LQ.has(l)?84862:80894)
var l
let u,f,h=[]
if(s(n.shelfContents)){const o=function(e,t,n,o,s){const a=tc(t,o)
if(r(a))return null
const c=a.data,l=wc(e,c,s)
return i(l)?s.includedAdAdamIds=[c.id]:go(e,n,c),l}(e,null==a?void 0:a.adStitcher,null==a?void 0:a.adIncidentRecorder,H0,t)
o&&o instanceof Jq&&(h.push(o),af(t.metricsLocationTracker),t.ordinalIndex++,n.shelfContents=n.shelfContents.filter(e=>e.id!==o.adamId))}for(const o of n.shelfContents){if(o.type===xj)return null
if(557===t.featuredContentId&&o.type===kj){u=o
continue}if(r(o.attributes)||Wn(t)){t.isDeferring=!0,t.remainingItems.push(o)
continue}if(tt(e,o,c))continue
const n=wc(e,o,t)
n&&(h.push(n),af(t.metricsLocationTracker),t.ordinalIndex++)}!Mn(t.featuredContentId)||Fn(t.featuredContentId)||$n(t.featuredContentId)||(h=function(e,t){if(!e)return null
const n=e.length,r=n%3
return n>=3?e.slice(0,n-r):e}(h)),delete t.maxItemCount,f=$n(t.featuredContentId)?Uf(e,t.title):{eyebrow:t.eyebrow,eyebrowArtwork:t.eyebrowArtwork,title:t.title,titleArtwork:t.titleArtwork,subtitle:t.subtitle,configuration:t.shelfHeaderConfiguration}
const w=new Ez(t.shelfStyle)
let g
if(w.isHorizontal=!0,w.items=h,w.shouldFilterApps=t.shouldFilter,557===t.featuredContentId?function(e,t,n,r,o,i,a){if((0,Ag.isNothing)(i)&&(i=ie(e,t.featuredContentData,TA)),r.configuration.includeTrailingArtwork=!0,!K(i)){const e=q(t.featuredContentData,jj)
return r.eyebrow=e,r.title="",n.footerTitle="",t.isDeferring=!0,void t.remainingItems.push(i)}const c=q(t.featuredContentData,jj)
r.eyebrow=c
const l=H(i,OU),u=d(l,jj)
r.title=u,of(t.metricsLocationTracker).name=u,s(t.originalPlaceholderShelfImpressionMetrics)&&(t.originalPlaceholderShelfImpressionMetrics.fields.name=u)
const f=H(i,lj)
if((0,Ag.isNothing)(f))return void(n.isHidden=!0)
const h=p(f,"storyBackgroundStatic16x9"),w=Xn(e,h,{useCase:28,withJoeColorPlaceholder:!0}),g=U(w.backgroundColor)?bj:_G
n.background={type:_j,artwork:w,style:g},o.forEach((t,n)=>{(0,Ag.isSome)(t)&&t instanceof Jq&&(t.offerDisplayProperties=t.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,tB,g),t.subtitleTextFilter=_v,e.props.enabled(AA)||(t.redownloadButtonTint=G(nj)))})
const m=p(f,bA)
if((0,Ag.isNothing)(m))return void(n.isHidden=!0)
const v={contentMode:bg.scaleAspectFit,useCase:18},y=Xn(e,m,v)
r.trailingArtwork=y
const A=d(i.attributes,gj),T=d(i.attributes,kC),b={id:i.id,idType:tj,targetType:Nj,actionType:Dj,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker}
if((0,Ag.isSome)(A)){n.footerTitle=T
const t=e.required(y2).fetchFlowPage(A),r=new _q(t)
r.title=T,r.pageUrl=A,Lf(e,r,b),n.footerAction=r}else{const r={targetType:Nj,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:$(i)},o=tr(e,i,t,!1,null,r,a);(0,Ag.isSome)(o.action)&&(o.action.actionMetrics.clearAll(),o.action.title=null!=T?T:d(l,"callToAction"),Lf(e,o.action,b),n.footerAction=o.action,n.footerTitle=o.action.title)}}(e,t,w,f,h,u,a):e.props.enabled(AA)||w.items.forEach((e,t)=>{(0,Ag.isSome)(e)&&e instanceof Jq&&(e.redownloadButtonTint=G($k))}),w&&o(w.items)&&t.isFirstRender&&oa(e,w,t,t.featuredContentId),Mn(t.featuredContentId))g=new _q(Sx)
else if(g=new _q(Vj),!sa(w)){const e=function(e,t){if(!t)return null
switch(t){case D$:case jD:return t
default:return null}}(0,t.shelfStyle)
g.pageData=lc(0,t.title,e)}g.pageUrl=t.seeAllUrl,g.title=e.loc.string(xU),g.referrerUrl=t.metricsPageInformation.pageUrl,xf(e,g,t.seeAllUrl,{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker})
const m=function(e,t,n){return 557!==n.featuredContentId&&!Fn(n.featuredContentId)&&!$n(n.featuredContentId)&&497!==n.featuredContentId}(0,w.items,t),v=i(g.pageUrl)||i(g.pageData)
if(m&&v&&ar(e,f,g),t.shelfStyle===$M||t.shelfStyle===MM){const e=q(t.featuredContentData,"suppressTagline")!==GG
r(w.presentationHints)?w.presentationHints={showSupplementaryText:e}:w.presentationHints={...w.presentationHints,showSupplementaryText:e}}return t.shelfStyle,w.header=f,w.url=Yn(w,t),w}function wc(e,t,n){if(o(t))return null
let a
n.showOrdinals&&(a=e.loc.decimal(n.ordinalIndex))
let c,l=null
!i(n.shelfBackground)||n.shelfBackground.type!==_U&&n.shelfBackground.type!==DD||(l=nj),s(n)&&(c=n.clientIdentifierOverride)
const u={ordinal:a,metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:$(t),isAdvert:qr(0,t)},clientIdentifierOverride:c,artworkUseCase:$u(0,n.shelfStyle),offerStyle:l,canDisplayArcadeOfferButton:$d(0,n.shelfStyle),isContainedInPreorderExclusiveShelf:497===n.featuredContentId,shouldHideArcadeHeader:e.featureFlags.isEnabled(T$)&&n.isArcadePage}
let d
switch(n.shelfStyle){case MM:d=function(e,t,n,r){return yg.context("trailersLockupFromData",()=>{const o=new Xq
return function(e,t,n,r,o){t&&yg.context("copyDataIntoTrailersLockup",()=>{su(e,t,n,o),n.trailers=Hu(e,t,r,o.metricsOptions,n.adamId)})}(e,t,o,r,n),o})}(e,t,u,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}})
break
case $M:d=gu(e,t,u)
break
case j$:d=mu(e,t,u)
break
case D$:case jD:d=wu(e,t,u)
break
case"smallImageLockup":case CN:case mx:d=yu(e,t,u,Vg.EditorialLockupLarge)
break
default:d=hu(e,t,u)}return r(d)||!d.isValid()?null:d}function gc(e,t){const n=e.bag.dynamicUIRegexStrings
for(const e of n){const n=e.replace(/\//g,"\\/")
if(new RegExp(n).test(t)){const e=new _q(ML,t)
return e.pageData=new TY,e}}const r=e.bag.webViewRegexStrings
for(const e of r){const n=e.replace(/\//g,"\\/")
if(new RegExp(n).test(t))return new _q($L,t)}return new _q(gB,t)}function mc(e,t,n){yg.catchingContext("parseGrouping",()=>{for(const r of t.data){const o=J(r,mB)
if(Mn(o)){const e=d(r,"id")
n.chartSet=vc(e,t.editorialChartSets)}else n.chartSet=null
const s=Hn(e,r,n),a=s.shelfToken,c=s.metricsOptions
let l
for(const t of o1)if(t.supports(e,r,o)){l=yg.catchingContext("parseGroupingShelf",()=>t.createShelf(e,r,n,a,c))
break}i(l)&&(n.shelves.push(l),so(e,n.shelves,wU,c.id,n.metricsPageInformation))}})}function vc(e,t){for(const n of t){if(n.id===e)return n
for(const t of n.editorialCharts)if(t.id===e)return n}return null}function yc(e,t){const n=[],r=[]
return function t(o){const s=J(o,mB)
yg.catchingContext(`flattenGroupingTree.addMediaApiDataToGroupingData: ${s}`,()=>{const a=ie(e,o,hF)
if(i(a))t(a)
else if(function(e){return BQ.has(e)}(s)){const e=se(o,QU)
for(const n of e)t(n)}else if(424===s){const e=424!==J(c=o,mB)?null:{id:d(c,"id"),name:q(c,jj),editorialCharts:se(c,QU).map(e=>function(e){return Mn(J(e,mB))?{id:d(e,"id"),href:q(e,mM),name:q(e,jj),type:q(e,wG)}:null}(e)).filter(e=>(0,Tg.isSome)(e))};(0,Tg.isSome)(e)&&r.push(e)
const n=se(o,QU)
for(const e of n)t(e)}else n.push(o)
var c})}(t),{data:n,editorialChartSets:r,originalGroupingData:t}}function Ac(e,t,n){var r
if(e.user&&e.user.isManagedAppleID)return null
{const t=[],n=e.loc.string("FOOTER_REDEEM",oC),o=gc(e,e.bag.redeemUrl),i=new pz(n,o)
if(i.id=cM,t.push(i),e.bag.isMonetaryGiftingEnabled){const n=e.loc.string("FOOTER_SEND_GIFT",ev),r=gc(e,lM),o=new pz(n,r)
o.id=lM,t.push(o)}const s=e.bag.accountTopUpURL
if((0,Tg.isSome)(s)){const n=null!==(r=e.bag.accountTopUpTitle)&&void 0!==r?r:e.loc.string("FOOTER_ADD_MONEY"),o=gc(e,s),i=new pz(n,o)
i.id="topUp",t.push(i)}let a
{a=new Ez("titledButtonStack")
const e=new fz(t)
e.compactLineBreaks=e.buttons.map((e,t)=>t),a.items=[e]}return a}}function Tc(e,t,n=!0){const r=new OH(t),o=e.loc.string(Pk),i=new zq(o)
i.clickAction=r,i.presentationStyle=[_D,LD],n&&i.presentationStyle.push(xD)
const s=new Ez("footnote")
if(s.items=[i],e.bag.emailSupportLinkURL){const t=new OH(e.bag.emailSupportLinkURL),r=new zq("Email Support")
r.clickAction=t,r.presentationStyle=[_D,LD],n&&r.presentationStyle.push(xD),s.items.push(r)}return s}function bc(e,t,n,r){const o=new Ez("unifiedMessage")
return o.id=t,o.items=[new Oz(t,n,r)],o.isHidden=!0,o}function Sc(e,t,n,r,o,a,l){const u=c(t,NG),d=[]
for(const t of u){const c=m(t)
if(s(c)){const t=Pc(e,c,n,r,o,a,l)
i(t)&&d.push(t)}}if(0===d.length){const t=function(e,t,n,r,o){const i=VO,s=e.loc.string("PRODUCT_PRIVACY_NO_DETAILS_PROVIDED_TITLE"),a=e.loc.string("PRODUCT_PRIVACY_NO_DETAILS_PROVIDED_BODY"),c=ce(e,E_),l=Ic(e,t,i,n,r,o)
return new c1(i,s,a,c,n,[],[],l)}(e,n,r,a,l)
d.push(t)}for(const t of d)pf(e,t,{id:null,kind:null,softwareType:null,title:t.title,pageInformation:a,locationTracker:l,targetType:zO}),af(l)
return d}function Pc(e,t,n,r,a,l,u){const f=d(t,YO),p=d(t,O_),h=d(t,pj)
if((0,Ag.isNothing)(f)||o(f)||(0,Ag.isNothing)(p)||o(p)||(0,Ag.isNothing)(h)||o(h))return null
const w=Ec(e,t,function(e,t){switch(t){case"DATA_NOT_LINKED_TO_YOU":return"resource://person.circle.slash"
case"DATA_USED_TO_TRACK_YOU":return"systemimage://person.fill.viewfinder"
case"DATA_NOT_COLLECTED":return"systemimage://checkmark.circle"
case"DATA_LINKED_TO_YOU":return ab
default:return null}}(0,f)),g=a?Cc(e,t,r):[],v=function(e,t,n){const r=c(t,"purposes"),o=[]
for(const t of r){const r=m(t)
if(s(r)){const t=Oc(e,r,n)
i(t)&&o.push(t)}}return o}(e,t,r),y=Ic(e,n,f,r,l,u)
return new c1(f,p,h,w,r,v,g,y)}function Ic(e,t,n,r,o,i){let s=null
return r!==DU&&r!==Bx||(s=Mc(e,t,Rc(e)&&r===DU?Bx:KN,o,i,n)),s}function Cc(e,t,n){const r=c(t,"dataCategories"),o=[]
for(const t of r){const r=m(t)
if(s(r)){const t=kc(e,r,n===DU?DU:KN)
i(t)&&o.push(t)}}return o}function kc(e,t,n){const i=d(t,YO),s=d(t,"dataCategory")
if((0,Ag.isNothing)(i)||o(i)||(0,Ag.isNothing)(s)||o(s))return null
const a=Ec(e,t,function(e,t){switch(t){case"FINANCIAL_INFO":return"systemimage://creditcard.fill"
case"CONTACT_INFO":return"systemimage://info.circle.fill"
case"OTHER":return"systemimage://ellipsis.circle.fill"
case"SENSITIVE_INFO":return"systemimage://eye.fill"
case sb:return"systemimage://chart.bar.fill"
case"CONTACTS":return ab
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
default:return null}}(0,i))
if(r(a))return null
let l=[]
n===KN&&(l=c(t,"dataTypes"))
const u=new u1(i,s,a,n,l)
return i===sb&&(u.prefersSmallArtwork=!0),u}function Oc(e,t,n){const r=d(t,YO),i=d(t,"purpose"),s=Cc(e,t,n)
return(0,Ag.isNothing)(r)||o(r)||(0,Ag.isNothing)(i)||o(i)||0===s.length?null:new l1(r,i,s)}function Ec(e,t,n){let o=null
if((0,Ag.isSome)(n)&&(null==n?void 0:n.length)>0&&(o=ce(e,n)),r(o)){const n=p(t,_j)
i(n)&&(o=Fu(e,n,{useCase:0,allowingTransparency:!0}))}return o}function Rc(e){return e.client.deviceType===Fj}function Dc(e,t,n,a,c,l){return yg.context("createPrivacyHeaderFromData",()=>{const u=function(e,t,n,r,a,c){let l,u=gU
const f=ie(e,t,dG),p=s(f)&&d1.indexOf(f.id)>-1
l=n&&!p?e.loc.string("PRODUCT_PRIVACY_DETAIL_HEADER_TEMPLATE"):e.loc.string("PRODUCT_PRIVACY_HEADER_TEMPLATE")
const h=xc(e,t,r,KN,a,c),w=1===h.length&&h[0].identifier===VO||0===h.length
w&&(l=e.loc.string("PRODUCT_PRIVACY_HEADER_NO_DETAILS_TEMPLATE"))
const g=q(t,SU)
i(g)?l=l.replace(tb,hM+g+wM):(l=w?e.loc.string("PRODUCT_PRIVACY_FALLBACK_HEADER_NO_DETAILS_TEMPLATE"):n?e.loc.string("PRODUCT_PRIVACY_FALLBACK_DETAIL_HEADER_TEMPLATE"):e.loc.string("PRODUCT_PRIVACY_FALLBACK_HEADER_TEMPLATE"),u=dU)
const m=e.loc.string("PRODUCT_PRIVACY_SUMMARY_PRIVACY_POLICY_LINK")
l=l.replace("{privacyPolicyLink}",m)
const v=function(e,t,n,r){let i
{const n=Ce(e,t,IM)
if((0,Ag.isNothing)(n)||o(n))return null
i=new OH(n,!1)}return i.title=e.loc.string("PRODUCT_PRIVACY_SUMMARY_PRIVACY_POLICY_BUTTON_TITLE"),Lf(e,i,{targetType:aj,id:rb,pageInformation:n,locationTracker:r}),i}(e,t,a,c),y={}
if(i(v)&&(y[m]=v),n){const n=function(e,t,n,r){const i=d(H(t,k_),"managePrivacyChoicesUrl")
if((0,Ag.isNothing)(i)||o(i))return null
const s=new OH(i,!1)
return Lf(e,s,{targetType:aj,id:"managePrivacyChoices",pageInformation:n,locationTracker:r}),s}(e,t,a,c)
if(i(n)){const t=e.loc.string("PRODUCT_PRIVACY_MANAGE_CHOICES_LINK")
l+=nb,l+=e.loc.string("PRODUCT_PRIVACY_MANAGE_CHOICES_TEMPLATE").replace("{manageChoicesLink}",t),n.title=t,y[t]=n}}const A=new DV(l,u)
return new uz(A,y)}(e,t,n,a,c,l),f=function(e,t,n,o,i){if(!n)return null
const s=e.loc.string(ob),a=e.loc.string("PRODUCT_PRIVACY_DEFINITIONS_LINK_TEMPLATE").replace("{privacyDefinitionsLink}",s),c=Lc(e,o,i)
if(r(c))return null
c.title=s
const l={}
l[s]=c
const u=new DV(a,dU)
return new uz(u,l)}(e,0,n,c,l)
let p,h
n&&(p=function(e,t,n,o,i){if(!n)return null
const s=e.loc.string(HO),a=_c(e,o,i)
let c
const l={}
r(a)?c=e.loc.string(WO):(c=e.loc.string(eb).replace(WN,s),a.title=s,l[s]=a)
const u=new DV(c,dU)
return new uz(u,l)}(e,0,n,c,l),s(p)&&(h=_c(e,c,l)))
const w=[]
if(i(f)){const e=new s1(f,void 0)
w.push(e)}if(i(p)){const e=new s1(p,h)
w.push(e)}return new i1(u,n,[],[],w,void 0)})}function _c(e,t,n){const r=e.bag.appPrivacyLearnMoreEditorialItemId
if(o(r))return null
const i=new _q(HG)
return i.title=e.loc.string(HO),i.pageUrl=`https://apps.apple.com/story/id${r}`,Lf(e,i,{targetType:Nj,id:"privacyLearnMore",pageInformation:t,locationTracker:n}),i}function Lc(e,t,n){const r=e.bag.appPrivacyDefinitionsEditorialItemId
if(o(r))return null
const i=new _q(HG)
return i.title=e.loc.string(ob),i.pageUrl=`https://apps.apple.com/story/id${r}`,Lf(e,i,{targetType:Nj,id:ib,pageInformation:t,locationTracker:n}),i}function xc(e,t,n,r,o,i){var a
let c=[]
const l=H(t,n?k_:ix)
return s(l)&&(c=null!==(a=Sc(e,l,t,r,e.client.deviceType!==Fj||r===Bx,o,i))&&void 0!==a?a:[],1===c.length&&0===c[0].categories.length&&(c[0].style=DU)),c}function Mc(e,t,n,o,a,c){if(r(t.id))return null
const l=new _q(qO)
l.title=e.loc.string("ACTION_SEE_DETAILS"),l.pageData=function(e,t,n,r,o){const i=[]
if(e.client.deviceType!==Fj||n!==KN){const n=new Ez(WG),s=Dc(e,t,!0,!1,r,o)
n.items=[s],n.presentationHints={isFirstShelf:!0},i.push(n)}const s=new xz(i)
return e.client.deviceType===Fj&&n!==KN||(s.isIncomplete=!0),s.title=e.loc.string(C_),s}(e,t,n,o,a)
const u=t.type===Pj?NW:$W
let d
s(c)&&(d={privacyTypeId:c})
const f=kq.fromComponents(AW,null,`/${QW}/${u}/${t.id}`,d)
l.pageUrl=f.build()
const p={targetType:Nj,id:"seeDetails",pageInformation:o,locationTracker:a}
return i(c)&&(p.targetType=zO,p.id=c),Lf(e,l,p),l}function $c(e,t,n){if(!s(t))return null
let r=null
r=(0,Ag.isNothing)(n)?"sr":n
const i=Fu(e,t,{cropCode:r,useCase:12,allowingTransparency:!0})
return o(i)?null:i}function Fc(e,t,n,r){let o=0
for(const i of t){const t=n[i.key]
if(t){let n=null
if(Gl(e))n=new dW(t.shelfId,null,null,null,t.index,!0)
else{const e=new QH(t.section,!0)
e.index=t.index,n=e}i.clickAction=n}let s
switch(i.key){case __:case EG:case fB:case Gx:case S_:case X$:case HB:s=Ob
break
default:s=Dj}i.clickAction&&Lf(e,i.clickAction,{targetType:vF,id:i.key,idType:sj,actionType:s,actionDetails:{position:o},pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker}),o+=1}}function Nc(e,t,n){return new Uq(n,void 0,void 0,void 0,void 0,void 0,void 0,void 0,{type:"canPerformAppAction",appAction:e,appCapabilities:t})}function Bc(e,t,n,r,o,i){if(r)return null
const s=pu(e,t)
if((0,Tg.isNothing)(s))return null
const a=new Mq(s),c=new $q(s),l=o?"":e.loc.string("InfoList.Category.Title")
return new xq(l,[a],[c])}function Uc(e,t,n,a,c,l){const u=H(t,$C)
let d=[],f=[],h=function(e,t){let n
if(Du(e,t)){const r=rd(0,t,e.appleSilicon.isSupportEnabled),o=!1,i=Zu(e,t),s=ud(e,t,e.appleSilicon.isSupportEnabled,e.appleSilicon.isRosettaAvailable),a=function(e,t,n,r,o,i=!0){return!!sd(0,n,r,o).some(e=>ad(t,e))}(0,i,e.client.deviceType,r,o,s),c=e.loc.deviceDisplayName(e)
a&&c&&(n=e.loc.string("InfoList.Requirements.Summary").replace("{deviceName}",c))}return n}(e,t)
const w=Oe(e,t,ty,De(e))
if(s(u)){const t=function(e){const t=[sG,cG,RM,Mj,JB,EF,Fj],n=function(e,t,n){let r=null
switch(t){case Lj:r=sG
break
case Oj:r=cG
break
case Mj:r=Mj
break
case"tv":r=EF
break
case Fj:r=Fj
break
case wj:r=JB}return i(n)&&n===RM&&(r=RM),r}(0,e.client.deviceType,e.host.deviceModel)
if(i(n)){const e=t.indexOf(n)
e>0&&(t.splice(e,1),t.unshift(n))}return t}(e)
for(const n of t){const t=p(u,n)
if(s(t)){const r=Gc(0,t,e.appleSilicon.isSupportEnabled&&n===Mj&&w&&!e.appleSilicon.isRosettaAvailable)
i(r)&&(d.push(r[0]),f.push(r[1]))}}!i(h)&&d.length>0&&(h=d[0].text)}else{const n=function(e,t){const n=Ce(e,t,"requirementsString")
return r(n)?null:[new Mq(n),new $q(n)]}(e,t)
i(n)&&(d=[n[0]],f=[n[1]])}if(o(d))return null
const g=c?"":e.loc.string("Requirements")
return new xq(g,d,f,h)}function Gc(e,t,n){var r
const o=null!==(r=d(t,"deviceFamily"))&&void 0!==r?r:void 0
let i=d(t,"requirementString")
const a=c(t,"devices")
if(n){const e=d(t,"rosettaUnavailableRequirementString")
s(e)&&(i=e)}if((0,Tg.isNothing)(i))return null
const l=[]
for(const e of a)l.push("\u2022\t\u2068"+e+"\u2069")
const u=l.length>0?l.join("\n"):void 0
return[new Mq(i,o,void 0,u),new $q(i,{heading:o,listText:u})]}function jc(e,t){const n=H(t,"contentRatingsBySystem.appsKorea")
if((0,Tg.isNothing)(n))return null
const r=f(n,iF)
if((0,Tg.isNothing)(r))return null
const o=c(n,tS)[0]
if((0,Tg.isNothing)(o))return null
const i=Td(e,r),s=[]
return(0,Tg.isSome)(i)&&s.push(ce(e,`resource://${i}`)),[new Mq(o,void 0,void 0,void 0,s),new $q(o,{headingArtworks:s})]}function Vc(e,t,n,o,s,a){const l=H(t,"contentRatingsBySystem.appsApple")
if(r(l))return null
const u=d(l,jj)
if(r(u))return null
if(99===f(l,iF))return null
const p=c(l,tS)
let h
const w=we(t,Re(e,t),"ageBand"),g=f(w,"minAge"),m=f(w,"maxAge")
h=i(g)&&i(m)?e.loc.string("InfoList.AgeRating.Summary").replace("{ageRating}",u).replace("{minAgeRating}",e.loc.decimal(g)).replace("{maxAgeRating}",e.loc.decimal(m)):u
const v=[],y=[];(0,Tg.isSome)(h)&&v.push(new Mq(h))
for(const e of p)v.push(new Mq(e))
let A,T="";(0,Tg.isSome)(h)&&(T+=h)
for(const e of p)T+="\n",T+=e
y.push(new $q(T))
{const n=jc(e,t);(0,Tg.isSome)(n)&&(v.push(n[0]),y.push(n[1]))
const r=Hc(e,t);(0,Tg.isSome)(r)&&(v.push(r[0]),y.push(r[1]))}v.length>1&&(A=h)
const b=s?"":e.loc.string("InfoList.AgeRating.Title")
let S
if((0,Tg.isSome)(e.bag.ageRatingLearnMoreEditorialItemId)&&e.bag.ageRatingLearnMoreEditorialItemId.length>0){const t=new _q(HG)
t.title=e.loc.string("InfoList.AgeRating.LearnMore"),t.pageUrl=`https://apps.apple.com/story/id${e.bag.ageRatingLearnMoreEditorialItemId}`,S=t}return new xq(b,v,y,A,S)}function Hc(e,t){if(e.bag.requireAgeVerification&&function(e,t,n){const r=J(t,"contentRatingsBySystem.appsApple.rank")
if((0,Tg.isNothing)(r))return!1
let o
switch(n){case oS:o=3
break
case nS:o=4
break
case"adultOnly":o=5
break
default:o=1}return r>=o}(0,t,nS)&&function(e,t){var n
const r=null!==(n=se(t,qk))&&void 0!==n?n:[]
for(const e of r)if(d(e,"id")===6014..toString())return!0
return!1}(0,t)){let n
if(t.type===Pj){const r=re(t,Gj)
if(i(r))for(const t of r.data)if(i(q(t,rS))){n=e.loc.string("AgeVerification.ProductPage.Rating.BundleUnsuitableForJuveniles")
break}}else i(q(t,rS))&&(n=e.loc.string("AgeVerification.ProductPage.Rating.UnsuitableForJuveniles"))
return(0,Tg.isNothing)(n)?null:[new Mq(n),new $q(n)]}return null}function Wc(e,t,n,r,o,i){const s=lt(e,e.bag.gameControllerRecommendedRolloutRate),a=dt(e,t)
if(s&&a){const n=o?"":e.loc.string("ProductPage.Info.GameController.Title"),r=a?"ProductPage.Info.GameController.Recommended":"ProductPage.Info.GameController.Required",i=e.loc.string(r),s=q(t,SU),c=a?"ProductPage.Info.GameController.Recommended.Summary":"ProductPage.Info.GameController.Required.Summary",l=e.loc.string(c).replace(tb,s),u=[new Mq(l)],d=[new $q(l)]
let f
const p=e.bag.gameControllerLearnMoreEditorialItemId
if((0,Tg.isSome)(p)&&p.length>0){const t=new _q(HG),n=a?"ProductPage.Info.GameController.Recommended.LearnMore":"ProductPage.Info.GameController.Required.LearnMore"
t.title=e.loc.string(n),t.pageUrl=`https://apps.apple.com/story/id${p}`,f=t}return new xq(n,u,d,i,f)}return null}function qc(e,t,n,r,o,i){const s=Ce(e,t,"copyright")
if((0,Tg.isNothing)(s))return null
const a=new Mq(s),c=new $q(s),l=o?"":e.loc.string("InfoList.Copyright")
return new xq(l,[a],[c])}function zc(e,t,n,r,o,i){const s=mt(e,t),a=vt(e,eS)
if(!s||!a)return null
const c=o?"":e.loc.string("Annotations.ExternalPurchases.Title"),l=e.loc.string("YES")
let u
if((0,Ag.isSome)(e.bag.externalPurchasesProductPageAnnotationVariant)){const t=`Annotations.ExternalPurchases.Expanded.Variant${e.bag.externalPurchasesProductPageAnnotationVariant}`
u=e.loc.string(t)}else u=e.loc.string("Annotations.ExternalPurchases.Expanded")
const d=new Mq(u),f=new $q(u),p=e.loc.string("Annotations.ExternalPurchases.Expanded.LearnMore")
let h=yt(e,p,i.metricsPageInformation,i.locationTracker)
return new xq(c,[d],[f],l,null!=h?h:void 0)}function Yc(e,t,n,r,i,s){var a
if(!function(e,t){var n
const r=od(e,t),o=new Set(["uses-non-webkit-browser-engine","is-custom-browser-engine-app"])
return null!==(n=null==r?void 0:r.some(e=>o.has(e)))&&void 0!==n&&n}(e,t))return null
const c=null!==(a=function(e,t,n){const r=e.bag.externalBrowserLearnMoreEditorialItemId
if(o(r))return null
const i=new _q(HG)
return i.title=e.loc.string(Tb),i.pageUrl=`https://apps.apple.com/story/id${r}`,Lf(e,i,{id:P$,targetType:aj,actionType:Dj,pageInformation:t,locationTracker:n}),i}(e,s.metricsPageInformation,s.locationTracker))&&void 0!==a?a:void 0
let l=c
const u=i?"":e.loc.string("Annotations.ExternalBrowser.Title"),d=e.loc.string("Annotations.ExternalBrowser.Value.Summary"),f=e.loc.string("Annotations.ExternalBrowser.Value.Expanded"),p=[new Mq(f)],h=[new $q(f)]
return new xq(u,p,h,d,l)}function Jc(e,t,n,r,o,i){const s=(0,am.attributeAsDictionary)(t,"licenses.gameLicenseVietnam")
let a=e.loc.string("InfoList.GameLicense.Disclaimer")
const c=[new Mq(a)],l=[new $q(a)],u=(0,am.asString)(s,"licenseId")
if(!(0,am.isDefinedNonNullNonEmpty)(u))return null
{const t=e.loc.string("InfoList.GameLicense.Id.Title")
c.push(new Mq(u,t)),l.push(new $q(u,{heading:t}))}const d=(0,am.asString)(s,"licenseUrl")
if((0,am.isDefinedNonNullNonEmpty)(d)){const t=e.loc.string("InfoList.GameLicense.Url.Title")
c.push(new Mq(d,t)),l.push(new $q(d,{heading:t}))}const f=o?"":e.loc.string("InfoList.GameLicense.Title")
return new xq(f,c,l,u)}function Kc(e,t,n,r,o,i){return null}function Zc(e,t,n,r,s,a){var c
const l=Ie(e,t,"languageList")
if(o(l))return null
const u=l.length
if(u<1)return null
let d,f
switch(u){case 0:break
case 1:f=l[0]
break
case 2:f=e.loc.string("InfoList.Two.Languages.Summary").replace("{first}",l[0]).replace("{second}",l[1])
break
default:const t=u-1
d=e.loc.string("InfoList.More.Languages.Summary").replace("{language}",l[0]).replace(lE,e.loc.formattedCount(t)),f=null!==(c=function(e,t){if(null==e||null==t)return null
if(0===e.length)return""
let n=e.length,r=""
return e.forEach((e,o)=>{null===e?n-=1:(r+=e,o<n-1&&(r+=t))}),r}(l,e.loc.string("Conjunction.Separator")))&&void 0!==c?c:void 0}if(!i(f))return null
const p=new Mq(f),h=new $q(f),w=s?"":e.loc.string("Supported.Languages")
return new xq(w,[p],[h],d)}function Qc(e,t,n,r,o,i){if(!Y(t,"usesLocationBackgroundMode"))return null
const s=o?"":e.loc.string("InfoList.Location.Title"),a=e.loc.string("InfoList.Location.Description"),c=new Mq(a),l=new $q(a)
return new xq(s,[c],[l])}function Xc(e,t,n){return yg.context("capabilitiesFromData",()=>[el(e,t),tl(e,t),sl(e,t),nl(e,t),rl(e,t),ol(e,t,n),il(e,t)].filter(e=>e))}function el(e,t){if(!(0,Tg.isSome)(t)||!Oe(e,t,$$))return null
if(e.bag.gameCenterExtendSupportedFeatures){const n=function(e){if(!(0,Ag.isNothing)(e))return de(e,"supportedGameCenterFeaturesFromData",()=>{const t=[],n=c(e,"attributes.supportedGameCenterFeatures")
return n.includes(mG)&&t.push(mG),n.includes(Aj)&&t.push(Aj),t})}(t),r=null==n?void 0:n.includes(mG),o=null==n?void 0:n.includes(Aj)
let i
i=r&&o?e.loc.string("CAPABILITY_GAME_CENTER_EXPLANATION_ALL_FEATURES"):r?e.loc.string("CAPABILITY_GAME_CENTER_EXPLANATION_ONLY_LEADERBOARDS"):o?e.loc.string("CAPABILITY_GAME_CENTER_EXPLANATION_ONLY_ACHIEVEMENTS"):e.loc.string("CAPABILITY_GAME_CENTER_EXPLANATION_NO_FEATURES")
const s=e.loc.string(Cy),a=ce(e,ky,46,45),l=new DV(i),u=new uz(l)
return new Wq(vU,s,u,null,null,a)}{const t=e.loc.string(Cy),n=new DV(e.loc.string("CAPABILITY_GAME_CENTER_EXPLANATION")),r=new uz(n),o=ce(e,ky,46,45)
return new Wq(vU,t,r,void 0,null,o)}}function tl(e,t){if(!Oe(e,t,"isSiriSupported"))return null
const n=e.loc.string("CAPABILITY_SIRI_TITLE"),r=new DV(e.loc.string("CAPABILITY_SIRI_EXPLANATION")),o=new uz(r),i=ce(e,"resource://ProductCapabilitySiri",46,45)
return new Wq(dk,n,o,void 0,null,i)}function nl(e,t){if(!Oe(e,t,"supportsPassbook"))return null
const n=e.loc.string("CAPABILITY_WALLET_TITLE"),r=new DV(e.loc.string("CAPABILITY_WALLET_EXPLANATION")),o=new uz(r),i=ce(e,"resource://ProductCapabilityWallet",46,45)
return new Wq("wallet",n,o,void 0,null,i)}function rl(e,t){if(!ut(e,t))return null
const n=e.loc.string("CAPABILITY_MFI_CONTROLLERS_TITLE")
let r=null
const o=e.bag.gameControllerLearnMoreEditorialItemId
lt(e,e.bag.gameControllerRecommendedRolloutRate)&&(null==o?void 0:o.length)>0&&(r=new _q(HG),r.title=e.loc.string("ProductPage.Capability.GameController.ActionTitle"),r.pageUrl=`https://apps.apple.com/story/id${o}`)
let i=r?e.loc.string("ProductPage.Capability.GameController.Explanation.WithNewlineActionTemplate"):e.loc.string("ProductPage.Capability.GameController.Explanation")
const s={};(null==r?void 0:r.title)&&(i=i.replace(WN,r.title),s[r.title]=r)
const a=new DV(i),c=new uz(a,s),l=ce(e,"resource://ProductCapabilityController",46,45)
return new Wq("controllers",n,c,void 0,null,l)}function ol(e,t,n){var r
const o=q(t,"familyShareEnabledDate")
if(!o||Y(t,dN))return null
const i=new Date(o),s=new Date
if(!i||i>s)return null
const a=Oe(e,t,fk),c=a&&Oe(e,t,"hasFamilyShareableInAppPurchases")
let l=null;(null===(r=e.bag.familySubscriptionsLearnMoreEditorialItemId)||void 0===r?void 0:r.length)>0&&c&&(l=new _q(HG),l.title=e.loc.string("CAPABILITY_FAMILY_SHARING_ACTION_TITLE"),l.pageUrl=`https://apps.apple.com/story/id${e.bag.familySubscriptionsLearnMoreEditorialItemId}`)
const u=e.loc.string("CAPABILITY_FAMILY_SHARING_TITLE")
let d
if(c?d=l?"CAPABILITY_FAMILY_SHARING_SOME_SHAREABLE_IAPS_EXPLANATION_WITH_ACTION_TEMPLATE":"CAPABILITY_FAMILY_SHARING_SOME_SHAREABLE_IAPS_EXPLANATION":a||n||(d=l?"CAPABILITY_FAMILY_SHARING_PAID_APP_NO_IAPS_EXPLANATION_WITH_ACTION_TEMPLATE":"CAPABILITY_FAMILY_SHARING_PAID_APP_NO_IAPS_EXPLANATION"),!d)return null
let f=e.loc.string(d)
const p={};(null==l?void 0:l.title)&&(f=f.replace(WN,l.title),p[l.title]=l)
const h=new DV(f),w=new uz(h,p),g=ce(e,"resource://ProductCapabilityFamilySharing",46,45)
return new Wq(qR,u,w,void 0,l,g)}function il(e,t){if(!Oe(e,t,"hasSafariExtension"))return null
const n=e.loc.string("CAPABILITY_SAFARI_EXTENSION_TITLE"),r=new DV(e.loc.string("CAPABILITY_SAFARI_EXTENSION_EXPLANATION")),o=new uz(r),i=ce(e,"resource://ProductCapabilitySafariExtension",129,129)
return new Wq(Oy,n,o,void 0,null,i)}function sl(e,t){if(!Oe(e,t,mC))return null
const n=e.loc.string("CAPABILITY_SHAREPLAY_TITLE"),r=new DV(e.loc.string("CAPABILITY_SHAREPLAY_EXPLANATION")),o=new uz(r),i=ce(e,"systemimage://shareplay"),s=G(pk)
return new Wq("sharePlay",n,o,void 0,null,i,s)}function al(e,t,n,r,o,i){if(r)return null
const s=Ce(e,t,"seller"),a=Pe(e,t,CM),c=Pe(e,t,NC),l=e.bag.enableSellerICPAnnotation&&!0
if((0,Tg.isNothing)(s))return null
const u=Ce(e,t,"sellerLabel")||e.loc.string(iS)
let f,p=[],h=[]
const g=d(a,jj),m=(0,Tg.isSome)(g)&&(null==g?void 0:g.length)>0?g:s,v=o?"":u
let y=null
if((0,Tg.isSome)(a)){const[t,n,r]=function(e,t){const n=[],r=[],o={name:"ProductPage.SellerInfo.Name.Title",dunsNumber:"ProductPage.SellerInfo.DunsNumber.Title",address:"ProductPage.SellerInfo.Address.Title",brn:"ProductPage.SellerInfo.BusinessRegistrationNumber.Title",phoneNumber:"ProductPage.SellerInfo.PhoneNumber.Title",email:"ProductPage.SellerInfo.Email.Title",usci:"ProductPage.SellerInfo.UnifiedSocialCreditIdentifier.Title"},i=d(t,jj),s=(0,Tg.isSome)(i)&&(null==i?void 0:i.length)>0?i:e.loc.string(iS),a=(0,Tg.isSome)(d(t,sS))
if(a){const o=w(t,sS),i=o?"ProductPage.SellerInfo.VerifiedSeller.Subtitle":"ProductPage.SellerInfo.UnverifiedSeller.Subtitle"
if(n.push(new Mq(e.loc.string(i).replace(aS,s)+"\n")),r.push(new $q(e.loc.string(i).replace(aS,s))),!o)return[n,r,s]}let c=null
1!==Object.keys(t).length||Object.keys(t).includes(jj)||(c=e.loc.string("ProductPage.SellerInfo.SeeDetails.Title"))
for(const i of Object.keys(o)){if(i===jj&&a)continue
const s=cl(e,i,e.loc.string(o[i]),t);(0,Tg.isSome)(s)&&(n.push(s[0]),r.push(s[1]))}return[n,r,c]}(e,a)
y=r,p=p.concat(t),h=h.concat(n)}if(l&&(0,Tg.isSome)(c)){const t=cl(e,"filingNumber",e.loc.string("ProductPage.Info.ICPNumber.Title"),c)
if(0===p.length){const e=new Mq((0,Tg.isSome)(t)?m+"\n":m),n=new $q(m)
p.push(e),h.push(n)}(0,Tg.isSome)(t)&&(p.push(t[0]),h.push(t[1]))}if(p.length>0)(0,Tg.isNothing)(y)&&(y=p.length>1?m:void 0),f=new xq(v,p,h,y,void 0)
else{const e=new Mq(s),t=new $q(s)
f=new xq(v,[e],[t])}return(0,Tg.isSome)(f),f}function cl(e,t,n,r){let o=d(r,t)
return(0,Tg.isSome)(o)?("brn"===t&&(o=o+"\n"+e.loc.string("ProductPage.SellerInfo.BusinessRegistrationNumber.Subtitle")),[new Mq(o,n),new $q(o,{heading:n})]):null}function ll(e,t,n,o,s,a){const c=pd(e,t)
if(n||r(c)||r(c.fileSizeByDevice))return null
const l=e.loc.fileSize(c.fileSizeByDevice),u=s?"":e.loc.string("File.Size")
let d,f=c.fileSizeByDevice
if(i(c.maxEssentialInstallSizeInBytes)){const t=c.fileSizeByDevice+c.maxEssentialInstallSizeInBytes,n=e.loc.string(TE).replace(bE,e.loc.fileSize(t)),r=new Mq(n),o=new $q(n)
d=new xq(u,[r],[o])}else if(i(c.maxInstallSizeInBytes)){const t=[],n=[],r=new Mq(l,e.loc.string(cS)),o=new $q(l,{heading:e.loc.string(cS)})
t.push(r),n.push(o)
const i=e.loc.string(TE).replace(bE,e.loc.fileSize(c.maxInstallSizeInBytes)),s=new Mq(i,e.loc.string(lS)),a=new $q(i,{heading:e.loc.string(lS)})
t.push(s),n.push(a),f+=c.maxInstallSizeInBytes
const p=e.loc.string(TE).replace(bE,e.loc.fileSize(f))
d=new xq(u,t,n,p)}else{const e=new Mq(l),t=new $q(l)
d=new xq(u,[e],[t])}return d}function ul(e,t,n,r,o,i){const s=se(t,fD)
if((0,Tg.isNothing)(s)||s.length<1)return null
const a=[],c=[]
for(const t of s){const n=q(t,jj)
if((0,Tg.isNothing)(n))continue
const r=At(e,t)
if((0,Tg.isNothing)(r))continue
const o=d(r,nB)
if((0,Tg.isNothing)(o))continue
const i=d(r,gN),s=f(r,mN)
let l=e.loc.string("InfoList.IAP.Duration")
if((0,Tg.isSome)(i)){l=l.replace("{name}",n)
const t=wi(0,i,s)
let r
switch(null==t?void 0:t.type){case"D":r="days"
break
case"W":r="weeks"
break
case"M":r="months"
break
case"Y":r="years"
break
default:l=`${n}`}if((0,Tg.isSome)(r)&&(0,Tg.isSome)(t)){const n=e.loc.formatDuration(t.periodDuration,r);(0,Tg.isSome)(n)&&(l=l.replace("{duration}",n))}}else l=`${n}`
a.push(new Mq(l,void 0,o)),c.push([l,o])}const l=o?"":e.loc.string("InfoList.InAppPurchases")
let u
const p=e.bag.inAppPurchasesLearnMoreEditorialItemId
if((0,Tg.isSome)(p)&&p.length>0){const t=new _q(HG)
t.title=e.loc.string("ProductPage.Info.InAppPurchases.LearnMore"),t.pageUrl=`https://apps.apple.com/story/id${e.bag.inAppPurchasesLearnMoreEditorialItemId}`,u=t}const h=[new $q(void 0,{textPairs:c})]
return new xq(l,a,h,e.loc.string("YES"),u)}function dl(e,t,n,r,o,i,s,a){const c=[]
for(const l of t){const t=l(e,n,r,o,i,s)
t&&(t.expandAction=null,c.push(t),a&&a(l,t,c.length-1))}return c}function fl(e,t){const n=Pe(e,t,NC),r=e.bag.enableSellerICPAnnotation&&(0,Tg.isSome)(n),o=Pe(e,t,CM),i=e.bag.enableSellerInfo&&(0,Tg.isSome)(o)
return r||i}function pl(e,t,n,r){const o=new Ez(Gb)
o.isHorizontal=!0
let i=null
i=n?t.slice(0,8):t
const a=[]
for(let t=0;t<i.length;t++){const n=i[t]
if(n.action=new iW(n.playerId),s(r)){const o="friendPlayer",i={pageInformation:r.destinationPageInformation,locationTracker:r.sourceLocationTracker,id:"",idType:sj,anonymizationOptions:{anonymizationString:`FRIEND${t+1}`}}
if(pf(e,n,{...i,kind:o,title:"",softwareType:null}),e.bag.productPageFriendsPlayingClickEventsEnabled){const t={...i,kind:o,targetType:XG,actionType:Dj,softwareType:null}
Lf(e,n.action,t)}}a.push(n),s(r)&&af(r.sourceLocationTracker)}if(o.items=a,o.mergeWhenFetched=!0,o.isHidden=0===o.items.length,o.batchGroup=vU,n&&t.length>8){const n=new Ez("smallGameCenterPlayer")
n.title=e.loc.stringWithCount("ProductPage.FriendsPlaying.SeeAllTitle",t.length),n.items=t.map(e=>(e.action=new iW(e.playerId),e)),n.rowsPerColumn=1
const i=new xz([n])
i.title=null==r?void 0:r.title
const s=new _q(Vj)
s.title=e.loc.string(xU),s.pageData=i,o.seeAllAction=s}return s(r)&&pf(e,o,{id:"",kind:null,softwareType:null,targetType:JG,title:r.title,pageInformation:r.sourcePageInformation,locationTracker:r.sourceLocationTracker,idType:sj,badges:{gameCenter:!0}}),o}function hl(e,t,n,i){return yg.context("inAppPurchasesShelf",()=>{if(!function(e,t){return t!==hU&&!e.client.isCompanionVisionApp}(e,e.host.platform))return null
if(o(t))return null
let a
if(a=Oi(e)?oe(t,MC):re(t,wD),!a||!a.data.length)return null
if(!a.data.filter(function(e){return Y(e,ZD)===i.isForSubscriptions}).length)return null
const c={pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:JG,id:`${n.getSequenceId()}`,idType:sj},l=z(t,ZG)
let u=rG
l&&(u=fF)
const d=D$,f=new Ez(d)
let p=null
i.options&&(p=i.options.spotlightInAppProductIdentifier),function(e,t,n){const o=Tj
for(const e of n.data){let n=re(e,o)
n||(n={data:[t]}),r(e.relationships)&&(e.relationships={}),e.relationships[o]=n}}(0,t,a)
const h=[],w=function(e,t,n,r,o,i){const s=Pu(e,t,{lockupOptions:{metricsOptions:r,offerStyle:n,skipDefaultClickAction:!0,artworkUseCase:1},contentUnavailable:function(e,t){return h.push(t),!1}})
return o&&np(0,o,s),s}(e,a.data,u,c,p).filter(function(e){return e.productIdentifier===p&&(i.options.spotlightSection=new wX(Hj,i.isForSubscriptions?RB:EB)),e.isSubscription===i.isForSubscriptions})
if(0===w.length&&0===h.length)return null
if(f.items=w,s(h)){const r=new m2(t.id,h,f.title,!1,void 0,d,u,null)
r.appBundleId=Ce(e,t,KG),r.iapShelfContext=i,i.isForSubscriptions?r.inAppShelfId=RB:r.inAppShelfId=EB,f.url=Qf(0,r,n)}let g
return i.isForSubscriptions?(f.title=e.loc.string("ProductPage.Section.Subscriptions.Title","Subscriptions"),g="subscription"):(f.title=e.loc.string("ProductPage.Section.InAppPurchases.Title"),g="iAP"),ef(e,c,f.title),nf(n.locationTracker),af(n.locationTracker),f.isHorizontal=!0,n.addImpressionsToShelf(e,f,g),f})}function wl(e,t,n,r,s,a){return yg.context(_N,()=>o(t)?null:function(e,t,n,r,o){return yg.context("standardLinksShelf",()=>{const s=new Ez("productPageLink"),a=[]
if(e.client.deviceType!==Mj){const n=Ce(e,t,dD)
if(n){const t=new OH(n,!1),r=e.loc.string("DEVELOPER_WEBSITE")
a.push(new dz(r,t,"safari"))}}const c=Ce(e,t,IM)
if(c){const t=new OH(c,!1),n=e.loc.string(G_)
a.push(new dz(n,t,"hand.raised.fill"))}if(z(t,jb)){const n=function(e,t){const n=t.id,r=t.type
return i(t)&&i(n)&&i(r)?`${AW}:/${JW}?resourceType=${r}&resourceId=${n}`:null}(0,t)
if(n){const t=new _q(Vj)
t.pageUrl=n
const r=e.loc.string(W_)
a.push(new dz(r,t,"doc.plaintext"))}}const l=d(Pe(e,t,CM),gE)
if((null==l?void 0:l.length)>0){const t=new OH(l,!1),n=e.loc.string(j_)
a.push(new dz(n,t,"checkmark.seal"))}const u=e.bag.productPageReportProblemSADSubscriptionArray,f=t.id,p=u.includes(f),h=et(e).isSystemAppFromData(t),w=t.type===Pj,g=r&&!h,m=e.bag.productPageReportProblemSecondPartyAppArray.includes(f)
if(!w&&!m&&!o&&e.bag.reportProblemEnabled&&(p||g)){const n=function(e,t){const n=t.id,r=e.bag.productPageReportProblemURL
return i(n)&&i(r)?r.replace("{productId}",n):null}(e,t)
if((null==n?void 0:n.length)>0){const t=new OH(n,!1),r=e.loc.string(Jy),o=new dz(r,t,"exclamationmark.triangle",p?null:f)
a.push(o)}}return a&&a.length>0&&(s.items=a),n.addImpressionsToShelf(e,s,WM),s})}(e,t,n,r,a))}function gl(e,t,n,i){const s=pu(e,t)
if(o(s))return null
const a=e.loc.string("BADGE_CATEGORY_HEADING"),c=new VY(_j,HB,{},Bj,a,s,null,s,a,rG)
if(new _q(Vj).title=q(t,SU),n&&"tv"!==e.client.deviceType){const n=Vn(e,t,!0)
if(r(n))return null
c.artwork=$c(e,n,"bb")}return c}function ml(e,t,n,r){const o=Pe(e,t,oE)
if(o){const t=yd(0,e.host.clientIdentifier)
if(t){const n=p(o,t)
if(n){const t=f(n,s_),r=d(n,Eb),o=d(n,fG),i=d(n,wG),s=e.loc.string("BADGE_CHART_POSITION_HEADING"),a=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_CHART_POSITION_TITLE").replace("{chartPosition}",t.toString()),c=new VY(L_,L_,{position:e.loc.decimal(t)},Bj,s,r,null,a,r,uU),l=vd(e,o,i)
if((0,Ag.isSome)(l)){const e=new _q(Sx)
e.pageUrl=l,c.clickAction=e}return c}}}return null}function vl(e,t,n,r){const o=q(t,DA)
if(o){const r={contentRating:o},i=J(t,"contentRatingsBySystem.appsBrazil.rank"),s=Td(e,null!=i?i:void 0)
let a
s&&(r.contentRatingResource=s),a=n?e.loc.string(x_):e.loc.string(M_)
const c=e.loc.string("BADGE_AGE_RATING_HEADING"),l=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_AGE_RATING_TITLE")
return new VY(__,__,r,Bj,c,a,void 0,o,l,uU)}return null}function yl(e,t,n,r){return function(e,t,n,r){if(dt(e,t)){const t=e.loc.string($_),n=e.loc.string("ProductPage.Badge.GameController.Recommended"),r=new VY(X$,X$,{},Bj,t,n,null,null,n,uU)
return r.clickAction=Gl(e)?new dW(jG):new QH(new HY(Hj,jG)),r}return null}(e,t)}function Al(e,t,n,r){return function(e,t,n,r){if(!ut(e,t)||function(e,t){switch(ft(e,t)){case xL:case HR:case VR:return!0
default:return!1}}(e,t)||dt(e,t))return null
{const t=e.loc.string($_),n=e.loc.string(eF),r=new VY(X$,X$,{},Bj,t,n,null,null,n,uU)
return r.clickAction=Gl(e)?new dW(jG):new QH(new HY(Hj,jG)),r}}(e,t)}function Tl(e,t,n,o){const s=ie(e,t,dG),a=e.loc.string("BADGE_DEVELOPER_HEADING"),c=q(t,SU),l=new VY(_j,dG,{},Bj,a,c,null,c,a,rG)
if(n&&"tv"!==e.client.deviceType){const t=Vn(e,s,!0)
r(t)?l.artwork=ce(e,F_,26,26):l.artwork=$c(e,t)}const u=md(0,s)
if(i(u)){const n=new _q(Vj)
n.title=q(t,SU),n.pageUrl=u,Lf(e,n,{targetType:LG,id:s.id,actionType:Dj,pageInformation:o.pageInformation,locationTracker:o.locationTracker}),l.clickAction=n}return l}function bl(e,t,n,r){const o=Pe(e,t,ON)
if(o){const r=d(o,JD)
if(r&&r===KD){let r,o
r="Games"===W(t,zk)[0]?e.loc.string("EDITORIAL_BADGE_GAMES"):e.loc.string("EDITORIAL_BADGE_APPS"),o=n?e.loc.string("EDITORS_CHOICE_RIBBON_HEADING"):e.loc.string("EDITORS_CHOICE_SINGLE_LINE")
const i=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_EDITORS_CHOICE"),s=new VY(EG,EG,{},Bj,o,r,null,i,r)
return Gl(e)?s.clickAction=new dW(e.featureFlags.isEnabled(XB)?EG:PG):s.clickAction=new QH(new HY(Hj,yj)),s}}return null}function Sl(e,t,r,o){const i=Ie(e,t,"supportedLocales"),s=(a=i).length<=0?null:{tag:d(n(a,"0.tag")).split("-")[0].toUpperCase(),name:d(n(a,"0.name"))}
var a
if(!s)return null
const c={paragraphText:s.tag}
let l
const u=i.length
l=u>1?e.loc.string("BADGE_LANGUAGE_CAPTION").replace("{number_other_languages}",e.loc.formattedCount(u-1)):s.name
const f=e.loc.string("BADGE_LANGUAGE_HEADING")
return new VY(wB,Gx,c,Bj,f,l,null,null,l,uU)}function Pl(e,t,n,r){const o=Ee(e,t,UR),s=Ee(e,t,GR)
if(!i(o)||!i(s))return null
if(o<=0||s<=0||o>s)return null
const a=e.loc.string(Rb),c=Cl(e,o,s,!1),l=Cl(e,o,s,!0),u=e.loc.string(Rb),d={paragraphText:Il(e,o,s)}
return new VY(wB,Iv,d,Bj,a,c,null,l,u,uU)}function Il(e,t,n){return t===n?t<=32?e.loc.formattedCount(t):e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER_INDEFINITE_MIN_AND_MAX_LIMIT").replace(sE,e.loc.formattedCount(32)):n<=32?e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER_DEFINITE_LIMIT").replace(sE,e.loc.formattedCount(t)).replace(Db,e.loc.formattedCount(n)):e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER_INDEFINITE_MAX_LIMIT").replace(sE,e.loc.formattedCount(t)).replace(Db,e.loc.formattedCount(32))}function Cl(e,t,n,r){return 1===t&&1===n?e.loc.string("BADGE_PLAYERS_CAPTION_SINGLE"):1===t||r?e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER"):e.loc.string("BADGE_PLAYERS_CAPTION_REQUIRED")}function kl(e,t,n,r){const o=H(t,tF)
let i=null
const s=As(e,t)
if(!s&&o&&o.value&&o.ratingCount){const t=f(o,cE),n=Math.round(10*t)/10,r=e.loc.decimal(n,1),s=f(o,yb),a=e.loc.formattedCount(s)
let c
c=e.loc.stringWithCount("ProductPage.BadgeRating.Caption.ShortTemplate",s).replace(lE,a)
const l=e.loc.stringWithCount("ProductPage.BadgeRating.Caption.LongTemplate",s).replace(lE,a).replace("{rating}",r),u=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_STAR_RATING").replace("{starCount}",r)
i=new VY(fB,fB,{rating:n,ratingFormatted:r},Bj,c,c,l,u,c)}else{if(n)return null
const t=e.loc.string(_b)
if(s&&t!==_b)i=new VY(fB,fB,{},Bj,null,t,null,t)
else if(!s){const t=e.loc.string("BADGE_NOT_ENOUGH_RATINGS_CAPTION")
i=new VY(fB,fB,{},Bj,null,t,null,t)}}if(i){let t
return t=new dW(PG),i.clickAction=Gl(e)?t:new QH(new HY(Hj,yj)),i}return null}function Ol(e,t,n,r){const o=jx,i=jx,s={contentRating:n},a=Bj,c=e.loc.string(`ProductPage.Badge.AgeRating.${r}.Heading`)
let l
l=t?e.loc.string(x_):e.loc.string(M_)
const u=n,d=e.loc.string(`ProductPage.Badge.AgeRating.${r}.AX.Caption`)
return new VY(o,i,s,a,c,l,void 0,u,d,uU)}function El(e,t,n,r){if(e.props.isNotEnabled(dy))return function(e,t,n,r){const o=J(t,Lb),i=bd(e,null!=o?o:void 0)
if((0,Tg.isSome)(o)&&(0,Tg.isSome)(i)){const t=Ol(e,n,i,"AU"),r=Td(e,o)
return(null==t?void 0:t.type)===_j&&(0,Tg.isSome)(r)&&(t.artwork=ce(e,`resource://${r}`,26,26)),t}const s=J(t,xb),a=bd(e,null!=s?s:void 0)
if((0,Tg.isSome)(s)&&(0,Tg.isSome)(a)){const t=Ol(e,n,a,"FR"),r=Td(e,s)
return(null==t?void 0:t.type)===_j&&(0,Tg.isSome)(r)&&(t.artwork=ce(e,`resource://${r}`,26,26)),t}const c=J(t,Mb),l=q(t,$b)
if((0,Tg.isSome)(c)&&(0,Tg.isSome)(l))return function(e,t,n,r){const o=Td(e,n)
if((0,Tg.isNothing)(o))return
const i=_j,s=jx,a={contentRating:r},c=Bj,l=e.loc.string("ProductPage.Badge.AgeRating.KR.Heading")
let u,d
u=t?e.loc.string(x_):e.loc.string(M_),d=r
const f=e.loc.string("ProductPage.Badge.AgeRating.KR.AX.Caption"),p=new VY(i,s,a,c,l,u,void 0,d,f,uU)
return p.isMonochrome=!1,p.artwork=ce(e,`resource://${o}`,26,26),p}(e,n,c,l)}(e,t,n)
const o=J(t,Lb),i=q(t,"contentRatingsBySystem.appsAustralia.name")
if((0,Tg.isSome)(o)&&(0,Tg.isSome)(i))return Rl(e,n,"AU",o,i,!1)
const s=J(t,xb),a=q(t,"contentRatingsBySystem.appsFrance.name")
if((0,Tg.isSome)(s)&&(0,Tg.isSome)(a))return Rl(e,n,"FR",s,a,!1)
const c=J(t,Mb),l=q(t,$b)
return(0,Tg.isSome)(c)&&(0,Tg.isSome)(l)?Rl(e,n,"KR",c,l,!0):void 0}function Rl(e,t,n,r,o,i){const s=bd(e,r),a=Td(e,r)
if((0,Tg.isNothing)(a)||(0,Tg.isNothing)(s))return
const c=_j,l=jx,u={contentRating:s},d=Bj,f=e.loc.string(`ProductPage.Badge.AgeRating.${n}.Heading`)
let p,h
p=t?e.loc.string(x_):e.loc.string(M_),h=o
const w=e.loc.string(`ProductPage.Badge.AgeRating.${n}.AX.Caption`),g=new VY(c,l,u,d,f,p,void 0,h,w,uU)
return g.isMonochrome=!i,g.artwork=ce(e,`resource://${a}`,26,26),g}function Dl(e,t,n,r){return t?yg.context("badgesFromLookupResponse",()=>{let o,i=!1
return Y(t,ZG)?o=v1:n?(o=A1,-1===o.indexOf(bl)&&o.splice(1,0,bl),i=!0):o=y1,function(e,t,n,r,o,i){const s=[]
for(const o of t){const t=o(e,n,r,i)
t&&s.push(t)}if(o&&s.some(e=>e.key===L_)){const e=s.findIndex(e=>e.key===HB)
e>=0&&s.splice(e,1)}return s}(e,o,t,n,i,r)}):null}function _l(e,t,n,r,o,i){return yg.context(Wb,()=>i?null:Ls(e,t.id,o,n,null))}function Ll(e,t){const n=d(t,rE)
if(n){const t=new OH(n,!1)
return t.title=e.loc.string(Ab),t.artwork=ce(e,hC),t}return null}function xl(e){var t
if((0,Tg.isSome)(e)){const n=null!==(t=e.presentationHints)&&void 0!==t?t:{}
e.presentationHints={...n,isSeeAllContext:!0}}}function Ml(e,t,n,r,o){const i=`${AW}:/${$W}/${PW}/`+Xf(n,r,o),s=new kq(i)
return s.param(pq.shelfRefreshType,Sq),s.param(pq.id,t),s.build()}function $l(e,t){return t?t.map(t=>Fl(e,t,Kb)):[]}function Fl(e,t,n){return yg.context("titledParagraphFromVersionHistoryEntry",()=>{let r=d(t,Zb);(0,Tg.isSome)(r)&&(r=r.trim())
const o=new oz(r,n),i=d(t,AE),s=e.loc.string("VERSION_STRING_TEMPLATE")
o.primarySubtitle=n===Kb?i:s.replace("{version}",i)
const a=d(t,"releaseTimestamp")
if(a){const t=new Date(a)
o.secondarySubtitle=e.loc.relativeDate(t)}return o})}function Nl(e,t,n,a,u,p=!1){return yg.context("createProductPageFromResponse",()=>{var h
const w=_(e,t)
if(o(w))return null
w.type
const g=a[g2],m=_(e,g),v=s(m)?u:null,A=s(m)?null:u,T=function(e,t,n){var r
const o=_(e,t),s=o.type===Pj
i(n)&&(n.iAdClickFields&&(t[nX]=JSON.stringify(n.iAdClickFields)),n.iAdLineItem&&(t[rX]=n.iAdLineItem))
const a=Xo(e,s?sO:lB,o.id,t),c=new kq(a.pageUrl)
return null!==(r=null==n?void 0:n.webBrowser)&&void 0!==r&&r&&(c.param(aO,tT),c.removeParam(R_),a.pageUrl=c.build()),new p1(a,{rootPosition:0,locationStack:[]})}(e,t,n),b=Bl(e,w,T,n,m,A,v,p)
T.metricsPageInformation.baseFields[c_]=Jd(e,w,b.lockup.icon,null==n?void 0:n.clientIdentifierOverride),(no(e,BG)||no(e,vG))&&(T.metricsPageInformation.iAdInfo=new iX(e,BG,iX.createInitialSlotInfos(e,BG,null,null)))
const S=Zu(e,w),P=null!==(h=null==n?void 0:n.webBrowser)&&void 0!==h&&h
P&&!e.props.isNotEnabled(Q$)||ti(e,b,T.metricsPageInformation,t=>{const n=rd(0,w,e.appleSilicon.isSupportEnabled),r=ud(e,w,e.appleSilicon.isSupportEnabled,e.appleSilicon.isRosettaAvailable),o=cd(e,w,S,e.client.deviceType,n,!1,r),i=dd(0,S,e.client.deviceType,n,!1),a=S&&(o||i),c=function(e,t,n,r){if(!Du(e,t))return!1
if(tt(e,t,8838))return!1
const o=sd(0,n,rd(0,t,r),!1),i=Zu(e,t)
return o.some(e=>ad(i,e))}(e,w,e.client.deviceType,e.appleSilicon.isSupportEnabled)
t[uE]=a&&c?"runnable":a?"purchasable":zG,s(A)&&wH.shared.addReferralContextToMetricsFieldsIfNecessary(t)},P)
const I=Cn(t,!0)
return function(e,t,n,a,u,p,h){var w
const g=Zu(e,n),m=n.type===Pj,v=z(n,ZG),A=!(1===g.length&&g[0]===Mj),T=As(e,n),b=A&&!v&&!T,S=s(u)?u.clientIdentifierOverride:null,P=Y(n,dN),I=t.lockup.offerDisplayProperties,C=!i(I)||I.isFree
let k
if(m){const t=re(n,Gj)
k=function(e,t,n,r){return n?yg.context("bundleChildrenShelf",()=>{const o=uj,i=new Ez(o)
i.isHorizontal=!0
const s=n.data.length
if(!s)return null
i.title=e.loc.stringWithCount("ProductPage.AppsInBundleShelf.Title",s)
const a=ep(e,n,r,1,o,null,76286)
if(a.remainingItems.length){const e=new m2(t.id,a.remainingItems,i.title,!1,void 0,uj,rG,null)
e.isBundleShelf=!0,i.url=Qf(0,e,r)}return ef(e,{pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker,targetType:JG,id:`${r.getSequenceId()}`,idType:sj},i.title),i.items=a.items,nf(r.locationTracker),r.addImpressionsToShelf(e,i,QN),af(r.locationTracker),i.rowsPerColumn=s<2?1:2,i}):null}(e,n,t,a)}k&&(t.shelfMapping[QN]=k)
const O=re(n,Pj),E=function(e,t,n,r){return n?yg.context("bundleParentsShelf",()=>{const o=n.data.length
if(!o)return null
const i=uj,a=new Ez(i)
a.isHorizontal=!0,a.title=e.loc.string("ProductPage.Section.IncludedInBundles.Title")
const c=ep(e,n,r,1,i)
if(0===c.remainingItems.length&&0===c.items.length)return null
if(a.items=c.items,s(c.remainingItems)){const e=new m2(t.id,c.remainingItems,a.title,!1,void 0,i,rG,null)
e.isBundleShelf=!0,a.url=Qf(0,e,r)}return a.rowsPerColumn=o<2?1:2,r.addImpressionsToShelf(e,a,"bundleParent"),a}):null}(e,n,O,a)
E&&(t.shelfMapping[xN]=E)
const R={productTitle:t.title,shouldShowRatingsAndReviews:b,isFirstPartyHideableApp:P,isBundle:m,isPreorder:v},D=function(e,t,n,r,i){return yg.context("createReviewsShelves",()=>{const a={}
if(o(t))return a
const c=function(e,t){if(Gl(e))return!0
if(o(t))return!1
let n
return n=et(e).isSystemAppFromData(t),!n||e.bag.enableSystemAppReviews}(e,t),u=Zu(e,t),p=re(t,yj),h=L(p),w=H(t,tF)
w.ratingAverage=f(w,cE),w.adamId=t.id,w.isBundle=r.isBundle,w.supportUrl=Ce(e,t,uD)
const g=Gu(e,t,{useCase:2}),m=1===u.length&&"tv"===u[0],v=Ws(e),A=l(w,XO),T=function(e,t,n,r){return yg.context("createProductRatings",()=>{const n=Is(e,e.client.guid,DU,t)
return n.ratingAverage>0&&n.ratingCounts||r||(n.status=e.loc.string(nE)),n})}(e,w,h.length,A),b=function(e,t,n,r,o,i){return yg.context(Wb,()=>{const r=_l(e,t,n,0,o,i)
if(r){const e=new oJ
return e.actionType=Em,e.action=r,e.id="ProductReviewAction.TapToRate",e}return null})}(e,t,r.productTitle,0,r.isBundle,m),S=function(e,t,n,r,o,i,s){return yg.context("createWriteAReview",()=>{if(r)return null
{const r=new iJ
r.writeReviewAction=Ms(e,t,i,s,o),r.supportAction=Ll(e,n)
const a=new oJ
return a.actionType="writeAReview",a.action=r,a}})}(e,t,w,m,g,i,r.productTitle),P=function(e,t){return yg.context(vb,()=>{if(e.props.enabled(KO))return null
const n=vs(e,t)
if((0,Tg.isSome)(n)){const e=new dJ
return e.sourceType=EG,e.review=n,e}return null})}(e,t),I=function(e,t,n){return yg.context("createReviewSummaryProductReview",()=>{const r=Cs(e,t,n)
if((0,Tg.isNothing)(r))return null
const o=new dJ
return o.review=r,o.sourceType=lU,o})}(e,t,n),C=Cs(e,t,n),k=Ss(e,w,h,!0,P,I,n),O=Ss(e,w,h,!0,null,null,n),E=(function(e,t,n,r,o,i,s,a){yg.context("createProductReviewActions",()=>{const c=new tJ
return c.tapToRate=_l(e,t,n,0,o,i),c.writeReviewAction=Ms(e,t,a,n,s),c.supportAction=Ll(e,r),c})}(e,t,r.productTitle,w,r.isBundle,m,g,i),!1),R=!1
if(m||0===h.length||Hs(e,e.client.guid,w,h,p.next,r.productTitle,g,E,R,t,n),r.shouldShowRatingsAndReviews){const o=new Ez(PG)
o.title=v,o.items=[T],a.ratingsShelf=o,n.addImpressionsToShelf(e,o,"ratingsOverview",null,null,null,e.loc.string("ProductPage.Section.Reviews.Title"))
const i=[]
if(s(b)&&c&&i.push(b),s(S)&&c&&i.push(S),s(i)){const e=new Ez(mE)
e.items=i,a.allReviewActionsShelf=e}if(s(C)){const e=new Ez(lU)
e.items=[C],a.reviewSummaryShelf=e}let l=null
s(b)&&c&&(l=new Ez(mE),l.items=[b],a.tapToRateActionsShelf=l)
let u=null
s(S)&&c&&(u=new Ez(mE),u.items=[S],a.writeAReviewActionsShelf=u)
const f=e.loc.string(vE),A=e.loc.string(Ux),D=(0,Tg.isSome)(O)&&O.length>0
let _,L
if((0,Tg.isSome)(k)&&k.length>0&&(_=new Ez(bL),_.items=k,_.isHorizontal=!0,e.props.enabled(Hb)&&(D?(_.title=f,_.contentsMetadata={type:"productReviewsSection",hasReviewSummary:(0,Tg.isSome)(I),reviewSummaryTitle:A},n.addImpressionsToShelf(e,_,QO,null,null,null,e.loc.string(vE))):_.title=A),a.allProductReviewsShelf=_),D&&(L=new Ez(bL),L.items=O,L.isHorizontal=!0,e.props.enabled(Hb)&&(L.title=f),n.addImpressionsToShelf(e,L,QO,null,null,null,e.loc.string(vE)),a.userProductReviewsShelf=L),"tv"===e.client.deviceType){const t=new Ez(yE)
t.title=v
const n=[]
s(b)&&b.action instanceof eJ&&c&&n.push(b.action),s(T.status)?e.featureFlags.isEnabled(Wx)?n.push(new lJ(T.status)):n.push(Ds(T)):(n.push(Es(T)),n.push(Rs(T))),t.items=n,a.purchasedRatingsAndReviewsComponentShelf=t}if("tv"===e.client.deviceType){const t=new Ez(yE)
t.title=v
const n=[]
s(T.status)?e.featureFlags.isEnabled(Wx)?n.push(new lJ(T.status)):n.push(Ds(T)):(n.push(Es(T)),n.push(Rs(T))),t.items=n,a.notPurchasedRatingsAndReviewsComponentShelf=t}let x=null
s(P)&&(x=new Ez(bL),x.items=[P],r.shouldShowRatingsAndReviews?e.featureFlags.isEnabled(XB)&&!P.review.showsBadge&&(x.title=e.loc.string(Bb)):x.title=v,a.editorsChoiceProductReviewsShelf=x),!m&&h.length>0&&(a.ratingsShelf.seeAllAction=e.featureFlags.isEnabled(eE)?function(e,t,n,r,o,i=null,s,a,c){return r?yg.context(kb,()=>{var l
const u=new KY
let f,p,h
if((0,Tg.isSome)(null==c?void 0:c.allReviewActionsShelf)){f=y(c.allReviewActionsShelf)
const e=null!==(l=f.presentationHints)&&void 0!==l?l:{}
f.presentationHints={...e,displayIfReviewable:!0},xl(f)}if((0,Tg.isSome)(null==c?void 0:c.ratingsShelf)){p=y(c.ratingsShelf)
const e=p.items[0]
if((0,Tg.isSome)(e)&&1===p.items.length){const t=y(e)
t.context=nD,p.items=[t]}p.seeAllAction=null,p.title=null,xl(p)}(0,Tg.isSome)(null==c?void 0:c.reviewSummaryShelf)&&(h=y(c.reviewSummaryShelf),xl(h))
const w=js(e,t,n,r,o,i,s,a,ZO,{ratingsShelf:p,reviewSummaryShelf:h,reviewActionsShelf:f})
u.title=null,u.adamId=d(r,$U),u.nextPage=w.paginationToken,u.initialSortOptionIdentifier=w.initialSortId,u.sortActionSheetTitle=w.sortActionSheetTitle,u.sortOptions=w.sorts,(0,Tg.isSome)(p)&&u.shelves.push(p),(0,Tg.isSome)(h)&&u.shelves.push(h),(0,Tg.isSome)(f)&&u.shelves.push(f),u.shelves.push(w.reviewsShelf)
const g=Us(e);(0,Tg.isSome)(g)&&(u.trailingNavBarAction=g)
const m=new _q(yj)
return m.pageData=u,m.title=e.loc.string(xU),m}):null}(e,e.client.guid,t.id,w,h,p.next,E,R,a):Hs(e,e.client.guid,w,h,p.next,r.productTitle,g,E,R,t,n))}return a})}(e,n,a,R,t.lockup.subtitle)
s(D)&&(t.shelfMapping[QF]=D.purchasedRatingsAndReviewsComponentShelf,t.shelfMapping[ZF]=D.notPurchasedRatingsAndReviewsComponentShelf,t.shelfMapping[PG]=D.ratingsShelf,t.shelfMapping[Vx]=D.allReviewActionsShelf,t.shelfMapping[YF]=D.allProductReviewsShelf,t.shelfMapping[LN]=D.userProductReviewsShelf,e.featureFlags.isEnabled(XB)?e.props.enabled(KO)?t.shelfMapping[EG]=function(e,t){const n=vs(e,t)
if((0,Ag.isNothing)(n))return null
const r=new Ez(EG)
return r.items=[n],n.showsBadge?r.background={type:EG}:r.title=e.loc.string(Bb),r}(e,n):t.shelfMapping[EG]=D.editorsChoiceProductReviewsShelf:t.shelfMapping[ZN]=D.editorsChoiceProductReviewsShelf,t.shelfMapping[JF]=D.tapToRateActionsShelf,t.shelfMapping[KF]=D.writeAReviewActionsShelf,t.shelfMapping[Hx]=D.productReviewsHeader)
{const n=function(e){if(o(e.bag.ratingsAndReviewsLearnMoreEditorialId))return null
if(!e.props.enabled("ratingsAndReviewsLearnMoreFooter"))return null
const t=new Ez("linkableText"),n=function(e){const t=e.loc.string(qb),n={},r=function(e){const t=e.bag.ratingsAndReviewsLearnMoreEditorialId
if(o(t))return null
const n=new _q(HG)
return n.title=e.loc.string(qb),n.pageUrl=`https://apps.apple.com/story/id${t}`,n}(e)
if((0,Tg.isNothing)(r))return null
n[t]=r
let i=e.loc.string("ProductPage.RatingsAndReviews.Footer")
i=i.replace(WN,t)
const s=new DV(i,dU)
return new uz(s,n)}(e)
return(0,Tg.isNothing)(n)?null:(t.items=[n],t)}(e);(0,Tg.isSome)(n)&&(t.shelfMapping[VB]=n)}const _=function(e,t,n){const r=Cs(e,t,n)
if((0,Tg.isNothing)(r))return null
const o=new Ez(lU)
return o.items=[r],o}(e,n,a);(0,Tg.isSome)(_)&&e.featureFlags.isEnabled(XB)&&(t.shelfMapping[lU]=_)
const x=function(e,t,n,r){return yg.context(_N,()=>function(e,t,n,r,o,i){return yg.context("standardMostRecentVersionShelf",()=>{if(!n&&!r&&!o){const n=Ie(e,t,CF)
if(n.length>1&&$l(e,n).length>0){const r=new Ez(Jb)
r.title=e.loc.string(zb)
const o=Fl(e,n[0],Yb)
if(r.items=[o],i.addImpressionsToShelf(e,r,CF),r)return e.client.deviceType!==Fj&&(r.seeAllAction=function(e,t,n,r){return yg.context("versionHistorySeeAllAction",()=>{const o=function(e,t,n){return yg.context("versionHistoryPageAction",()=>{const r=$l(e,t)
let o
if(r.length>0){const t=new Ez(Jb)
t.items=r
const i=new xz([t])
i.title=e.loc.string("VERSION_HISTORY_PAGE_TITLE","Version History"),e.client.deviceType!==Fj&&(i.presentationOptions=[xF])
const s=ei(e,"VersionHistory",n,"")
ti(e,i,s)
const a=new _q(CF)
a.title=e.loc.string("ACTION_VERSION_HISTORY_SEE_ALL"),a.pageData=i,o=a}return o})}(e,t,n)
return xf(e,o,null,{pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker}),o})}(e,n,t.id,i)),r}}return null})}(e,t,r.isFirstPartyHideableApp,r.isBundle,r.isPreorder,n))}(e,n,a,{isFirstPartyHideableApp:P,isBundle:m,isPreorder:v})
x&&(t.shelfMapping[WU]=x),t.shelfMapping[MN]=function(e,t,n){return yg.context("textCardShelfFromResponse",()=>(o(t),null))}(0,n)
const M=Ce(e,n,KG)
if(e.bag.enablePrivacyNutritionLabels&&!ca(e,n.id)&&!la(e,M)){const s=function(e,t,n,r){return yg.context("privacyShelf",()=>{if(o(t))return null
const i=new Ez(WG)
i.title=e.loc.string(C_)
const s=Dc(e,t,!1,!1,n,r)
return i.items=[s],e.client.deviceType!==Fj&&"tv"!==e.client.deviceType&&(i.seeAllAction=Mc(e,t,KN,n,r,null)),i})}(e,n,a.metricsPageInformation,a.locationTracker),c=function(e,t,n){return yg.context(_N,()=>{if(o(t))return null
const r=H(t,ix)
if((0,Ag.isNothing)(r)||o(r))return null
const i=new Ez(O_),s=e.loc.string(C_)
ef(e,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:zO,id:`${n.getSequenceId()}`,idType:sj},s)
const a=Sc(e,r,t,DU,!0,n.metricsPageInformation,n.locationTracker)
return null===a||0===a.length?null:(i.items=a,a.length<=2&&(i.presentationHints={isLowDensity:!0}),i.title=s,n.addImpressionsToShelf(e,i,"appPrivacy"),nf(n.locationTracker),af(n.locationTracker),i.title=null,i)})}(e,n,a)
if(i(s)&&i(c)){t.shelfMapping[WG]=s,i(c)&&(t.shelfMapping[NG]=c)
const l=function(e,t,n,s){return yg.context(_N,()=>{if(o(t))return null
const a=xc(e,t,!1,KN,n,s)
if((1===a.length&&a[0].identifier===VO||0===a.length)&&"tv"!==e.client.deviceType)return null
const c=new Ez(RG),l=function(e,t,n,o){return yg.context("privacyFooterFromData",()=>{const t=function(e,t,n,o){let i
const s=e.loc.string(HO),a={},c=_c(e,n,o)
r(c)?i=e.loc.string(WO):(i=e.loc.string(eb),i=i.replace(WN,s),r(c)?i=e.loc.string(WO):a[s]=c)
const l=new DV(i,dU)
return new uz(l,a)}(e,0,n,o),s=function(e,t,n,r){if("tv"!==e.client.deviceType)return[]
const o=[],s=_c(e,n,r)
i(s)&&o.push(s)
const a=Lc(e,n,r)
return i(a)&&o.push(a),o}(e,0,n,o)
return new a1(t,s,[].length)})}(e,0,n,s)
return c.items=[l],c})}(e,n,a.metricsPageInformation,a.locationTracker)
i(l)&&(t.shelfMapping[RG]=l)}}const F=new f1,N=new f1,B=new f1,U=new f1,j=new f1,V=Od(e,n),W=function(e,t,n,o,i,s,a,c){return yg.context(_N,()=>{let l
switch(e.client.deviceType){case Fj:l=function(e,t,n,o){return yg.context(Xb,()=>{let i
const s=fl(e,t)?w1:h1,a=dl(e,s,t,n,!1,!1,o,null)
return a.length>0&&(i=new Ez(BN),i.items=a,r(o)||o.addImpressionsToShelf(e,i,hj)),i})}(e,t,n,o)
break
case"tv":l=function(e,t,n,o,i,s,a){return yg.context("tvInformationShelf",()=>{let c
const l=dl(e,g1,t,n,!1,!1,o,a),u=function(e,t,n){return yg.context("productCapabilitiesAsAnnotations",()=>{const r=[],o=Xc(e,t,n)
for(const e of o){const t=e.title,n=e.caption.styledText.rawText
if((null==t?void 0:t.length)>0&&(null==n?void 0:n.length)>0){const e=new Mq(n),o=new $q(n),i=new xq(t,[e],[o])
r.push(i)}}return r})}(e,t,s).concat(dl(e,m1,t,n,!1,!1,o,a)),d=vt(e,eS),f=dl(e,d?[zc]:[ul],t,n,!1,!0,o,a),p=[]
if(l.length>0){const t=new Lq(e.loc.string(hE),l,i)
p.push(t)}if(u.length>0){const t=new Lq(e.loc.string(wE),u,i)
p.push(t)}if(f.length>0){const t=d?e.loc.string("ProductPage.Section.ExternalPurchases.Title"):e.loc.string("ProductPage.Section.TopInAppPurchases.Title"),n=new Lq(t,f,!0)
p.push(n)}return p.length>0&&(Gl(e)?(c=new Ez("annotationGroup"),c.items=p,c.background=Zf(e),r(o)||o.addImpressionsToShelf(e,c,hj)):(c=new Ez("informationContainer"),c.items=[new Fq(p)],r(o)||o.addImpressionsToShelf(e,c,hj))),c})}(e,t,n,o,c,a,i)
break
default:l=function(e,t,n,o,i,s){return yg.context(Xb,()=>{let a
const c=fl(e,t)?w1:h1,l=dl(e,c,t,n,i,!1,o,s)
return l.length>0&&(a=new Ez(BN),a.title=e.loc.string(hE),a.items=l,r(o)||o.addImpressionsToShelf(e,a,hj)),a})}(e,t,n,o,s,i)}return l})}(e,n,P,a,(n,r,o)=>{var s,a
if(n===Vc&&(F.setShelfId(hj,o),F.annotation=r),n===Uc&&i(t.banner)){i(t.banner.fullProductAction)&&(t.banner.action=t.banner.fullProductAction)
const n=t.banner.action
i(n)&&(Gl(e)?n instanceof dW&&(null===(s=n.shelfId)||void 0===s?void 0:s.length)>0&&n.shelfId===hj&&n.indexId===qF&&(n.index=o):n instanceof QH&&(null===(a=n.section.shelfId)||void 0===a?void 0:a.length)>0&&n.section.shelfId===hj&&n.indexId===qF&&(n.index=o))}n===Zc&&(N.setShelfId(hj,o),N.annotation=r),n===ll&&(B.setShelfId(hj,o),B.annotation=r),n===Bc&&(U.setShelfId(hj,o),U.annotation=r),n===Kc&&(j.setShelfId(hj,o),j.annotation=r)},V,C,!1)
W&&(t.shelfMapping[hj]=W)
const J=function(e,t,n,r){var o
if(!ki(e))return null
let i=function(e,t){return c(e.views,[t,FB])}(t,QR)
if(((0,Tg.isNothing)(i)||0===i.length)&&(i=se(t,xj)),(0,Tg.isNothing)(i)||0===i.length)return null
const s=oe(t,QR),a={pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,recoMetricsData:null!==(o=$(s))&&void 0!==o?o:void 0},l=i.some(e=>e.type!==xj),u=l?"ProductPage.Section.AppEventsAndOffers.Title":"ProductPage.Section.AppEvents.Title",d=e.loc.string(u),f=l?"EventsAndOffers":"Events"
ef(e,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,recoMetricsData:a.recoMetricsData,targetType:JG,id:f,idType:zG},d)
const p=$i(e,i,t,!l,!1,a,!1,!1,!1,!1);(0,Tg.isSome)(p.nextAppEventPromotionStartDate)&&kn(p.nextAppEventPromotionStartDate,r)
const h=p.appPromotions
if(0===h.length)return nf(a.locationTracker),null
const w=ta(0,h,d)
return n.addImpressionsToShelf(e,w,JG,f,zG,a.recoMetricsData),nf(a.locationTracker),af(a.locationTracker),w}(e,n,a,p)
if(i(J)&&(t.shelfMapping[FG]=J),V){const r=function(e,t,n){if(o(t))return null
const r=d(Pe(e,t,OU),Bj)
if(r){const t=e.loc.string("APP_STORE_EDITORS_ATTRIBUTION"),o=new vz(r,t),i=new Ez(HU)
return i.items=[o],n.addImpressionsToShelf(e,i,HU),i.background={type:_U,color:G(V_)},i}return null}(e,n,a)
r&&(t.shelfMapping[HU]=r)}t.shelfMapping[hB]=wl(e,n,a,!1,0,V),t.shelfMapping[fU]=wl(e,n,a,!0,0,V),t.shelfMapping[oM]=function(e,t,n){return yg.context(_N,()=>{if("tv"!==e.client.deviceType)return null
if(o(t))return null
const r=new Ez(wB)
r.isHorizontal=!1
const i=function(e,t){return t?yg.context("externalProductLinksAsParagraphsFromData",()=>{const n=[],r=Ce(e,t,dD)
if(r){const t=e.loc.string("DEVELOPER_WEBSITE_WITH_URL").replace("{URL}",r),o=new _V(t)
e.featureFlags.isEnabled(Wx)&&(o.style=_M),o.alignment=yG,n.push(o)}return n}):null}(e,t)
return i&&i.length>0&&(r.items=i),Gl(e)&&(r.background=Zf(e)),n.addImpressionsToShelf(e,r,WM),r})}(e,n,a)
const K=function(e,t,n,r){return yg.context("capabilitiesShelf",()=>{if(o(t))return null
const i=Re(e,t)
if(o(me(t,i,KG)))return null
const s=Xc(e,t,n)
if(o(s))return null
const a=new Ez("productCapability")
return a.title=e.loc.string(wE),a.items=s,a.mergeWhenFetched=!0,a.batchGroup=vU,r.addImpressionsToShelf(e,a,"supports"),a})}(e,n,C,a)
K&&(t.shelfMapping[jG]=K)
const Z=null!==(w=null==u?void 0:u.webBrowser)&&void 0!==w&&w
if(!Z){const r=re(n,ox)
if(s(r)){const i=function(e,t,n,r){return yg.context("smallStoryShelf",()=>{if(o(n))return null
const i={pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker,targetType:JG,id:`${r.getSequenceId()}`,idType:sj},a=e.loc.string(Ub)
ef(e,i,a)
const c=[],l={metricsLocationTracker:i.locationTracker,metricsPageInformation:i.pageInformation,filterOutMediaCardKinds:new Set([aM])},u=Yf(e,n,MU,a,null,l,function(e){return c.push(e),!1})
if(Array.isArray(u.items)&&(u.items=u.items.filter(e=>!(e instanceof fY)||qf(0,e.media.kind,MU))),u.isHorizontal=!0,e.featureFlags.isEnabled(I_)&&e.bag.isOnDemandShelfFetchingEnabled&&(u.fetchStrategy=_g.OnShelfWillAppear),s(c)){nf(r.locationTracker),r.addImpressionsToShelf(e,u,oG),af(r.locationTracker)
const n=new m2(t.id,c,u.title,!1,void 0,MU,null,null,null,null,null,hm.SmallStory)
na(e,u,n),u.url=Qf(0,n,r)}else nf(r.locationTracker),r.addImpressionsToShelf(e,u,oG),af(r.locationTracker)
return u})}(e,n,r.data,a)
i&&(t.shelfMapping[oG]=i)}}const Q={isPreorder:v},X=new f1,ee=function(e,t,n,r){return yg.context("friendsPlayingShelf",()=>{if(o(t))return null
const i=t.id
if(o(i))return null
if(!Oe(e,t,$$))return null
if(r.isPreorder)return null
const s=e.loc.string("ProductPage.Section.FriendsPlaying.Title","Playing This Game"),a={pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:JG,id:`${n.getSequenceId()}`,idType:sj}
ef(e,a,s)
const c=new Ez(Gb)
c.header=Uf(e,s),c.isHidden=!0,c.isHorizontal=!0,c.items=[],c.mergeWhenFetched=!0
const l=new m2(t.id,[],c.title,!1,void 0,null,null,null)
c.url=`${AW}:/${$W}/${PW}/?${pq.isGameCenterPlayerShelf}=true&${pq.id}=${i}&${pq.token}=${Xf(l,n,n.metricsPageInformation)}`,c.batchGroup=vU,n.addImpressionsToShelf(e,c,oj),nf(n.locationTracker),af(n.locationTracker)
const u=new _q(Vj)
return xf(e,u,null,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker}),c})}(e,n,a,Q)
ee&&(t.shelfMapping[oj]=ee,X.setShelfId(oj))
const te=function(e,t,n,r){return yg.context("achievementsShelf",()=>{if(o(t))return null
if(r.isPreorder)return null
if(!Oe(e,t,$$))return null
const i=Re(e,t),s=me(t,i,KG)
if(o(s))return null
const a=e.loc.string("ProductPage.Section.Achievements.Title",oF),c=new Ez(Nb)
c.header=Uf(e,a),c.isHorizontal=!0,c.items=[],c.mergeWhenFetched=!0
const l=new m2(t.id,[],c.title,!1,void 0,null,null,null)
return l.sourceLocationTracker=n.locationTracker,l.destinationPageInformation=n.metricsPageInformation,c.url=`${AW}:/${$W}/${PW}/?${pq.isGameCenterAchievementsShelf}=true&${pq.bundleId}=${s}&${pq.token}=${Xf(l,n,n.metricsPageInformation)}`,c.batchGroup=vU,af(n.locationTracker),c})}(e,n,a,{isPreorder:v})
if(te&&(t.shelfMapping[Aj]=te),!h&&!Z){const r=function(e,t,n){return yg.context("moreByDeveloperShelf",()=>{if(o(t))return null
const r=md(0,ie(e,t,dG)),i=q(t,SU),a=re(t,rx)
if(!a||0===a.data.length)return null
const c=e.loc.string("ProductPage.Section.MoreByDeveloper.TitleTemplate").replace("{developer}",i)
let l
switch(ef(e,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:JG,id:`${n.getSequenceId()}`,idType:sj},c),e.client.deviceType){case Mj:case"tv":l=nG
break
default:l=uj}const u=new Ez(l)
u.title=c
const d=e.client.isCompanionVisionApp?32768:void 0,f=ep(e,a,n,$u(0,l),l,null,d)
if(!f)return null
u.items=f.items,u.isHorizontal=!0,a.data.length<2?u.rowsPerColumn=1:u.rowsPerColumn=2
{const t=new _q(Vj)
t.pageUrl=r,t.title=e.loc.string(xU),xf(e,t,t.pageUrl,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker}),u.seeAllAction=t}if(e.featureFlags.isEnabled(I_)&&e.bag.isOnDemandShelfFetchingEnabled&&(u.fetchStrategy=_g.OnShelfWillAppear),s(f.remainingItems)){nf(n.locationTracker),n.addImpressionsToShelf(e,u,dG),af(n.locationTracker)
const o=new m2(t.id,f.remainingItems,u.title,!1,void 0,l,null,null,null,null,null,hm.MoreByDeveloper)
o.developerUrl=r,na(e,u,o),u.url=Qf(0,o,n)}else nf(n.locationTracker),n.addImpressionsToShelf(e,u,dG),af(n.locationTracker)
return u})}(e,n,a);(0,Tg.isSome)(r)&&(t.shelfMapping[xG]=r)}if(!h&&!Z){const r=function(e,t,n){return yg.context("similarItemsShelf",()=>{var r
if(o(t))return null
if(e.client.isCompanionVisionApp)return null
const i=re(t,hN)
if(o(i))return null
const a=Od(e,t),c=a?e.loc.string("Arcade.ProductPage.MoreFromAppleArcade"):e.loc.string("ProductPage.Section.SimilarItems.Title"),l=qG,u=zF
let d,f
switch(ef(e,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:l,id:p1.similarItemsShelfId,idType:u},c),e.client.deviceType){case"tv":d=nG,f=!1
break
case Mj:d=nG,f=!0
break
default:d=uj,f=!0}const p=new Ez(d)
p.title=c
const h=$(i),w=ep(e,i,n,$u(0,d),d,null,null,h)
if(!w)return null
p.items=w.items
const g=no(e,BG),m=ei(e,"SimilarItems",t.id,""),v=new m2(t.id,i.data,p.title,f,void 0,d,null,null,null,null,null,hm.SimilarItems),y=Ml(0,t.id,v,n,m)
if(p.refreshUrl=y,p.isHorizontal=!0,i.data.length<2?p.rowsPerColumn=1:p.rowsPerColumn=a?2:3,e.featureFlags.isEnabled(I_)&&e.bag.isOnDemandShelfFetchingEnabled&&(p.fetchStrategy=_g.OnShelfWillAppear),s(w.remainingItems)||g){nf(n.locationTracker),n.addImpressionsFieldsToSimilarItemsShelf(e,p,l,u),af(n.locationTracker)
const o=new m2(t.id,null!==(r=w.remainingItems)&&void 0!==r?r:[],p.title,f,void 0,d,null,null,p.refreshUrl,h,a,hm.SimilarItems)
if(na(e,p,o),p.url=Qf(0,o,n,m),g){const e=new kq(p.url)
e.param(pq.isShelfWithAd,GG),e.param(pq.shelfWithAdPlacementType,BG),e.param(pq.id,t.id),p.url=e.build()}}else nf(n.locationTracker),n.addImpressionsFieldsToSimilarItemsShelf(e,p,l,u),af(n.locationTracker)
return p})}(e,n,a);(0,Tg.isSome)(r)&&(t.shelfMapping[qG]=r)}const ne=hl(e,n,a,{isForSubscriptions:!0,options:u})
ne&&(t.shelfMapping[RB]=ne)
const ae=hl(e,n,a,{isForSubscriptions:!1,options:u})
ae&&(t.shelfMapping[EB]=ae),t.title
const ce=function(e,t,n,r){return yg.context("createActionLinks",()=>(o(t),null))}(0,n)
ce&&(t.shelfMapping[AL]=ce)
const le=function(e,t,n,r){return yg.context("productMediaShelves",()=>{if(o(t))return null
const i=(e.client.deviceType,null),a=(e.client.deviceType,null),c=Fe(e,t),l=Yu(e,t,11,i,c,n),u=Wu(e,t,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}},a)
let d=null
if(u)for(const e of l)if(e.mediaPlatform.isEqualTo(u.mediaPlatform)){d=e
break}let f=null
if(d){const e=d.mediaPlatform.appPlatform
if(e===Lj||e===kG)for(const e of d.items){const t=e.screenshot
if(f=t.width/t.height,f<1)break}}const p=[],h=[]
if(d&&u&&u.videos)for(const n of u.videos){const o=new Vq
o.video=n
const i=n.preview.width/n.preview.height,s=null===f||Math.abs(i-f)<.01,a=d.mediaPlatform.isEqualTo(u.mediaPlatform)
s&&a?p.push(o):h.push(n)
const c={pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker,id:t.id,isAdvert:!!r.metricsPageInformation.iAdInfo&&r.metricsPageInformation.iAdInfo.iAdIsPresent}
yo(e,n,c)}d&&(d.items=p.concat(d.items))
let w=[],g={}
for(let n=0;n<l.length;n++){const o=l[n],i=`${a0}_${o.mediaPlatform.appPlatform}_${o.mediaPlatform.supplementaryAppPlatforms.join("_")}`
w.push(new wX(Hj,i))
const a=new Ez(Vb,null,o.items)
a.isHorizontal=!0
let c=!1,u=Zs(0,o.items[0])
for(const e of o.items)if(s(e.screenshot)&&e.screenshot.isPortrait()||s(e.video)&&e.video.preview.isPortrait()){u=Zs(0,e),c=!0
break}a.contentsMetadata={type:"productMedia",platform:o.mediaPlatform,allPlatforms:o.allPlatforms,platformDescription:o.platformDescription,allPlatformsDescription:o.allPlatformsDescription,allPlatformsDescriptionPlacement:o.allPlatformsDescriptionPlacement,hasPortraitMedia:c,expandProductMediaAction:null,viewProductMediaGalleryAction:Ks(e,o,t.id),aspectRatio:u},r.addImpressionsToShelf(e,a,Rj),0===n&&"tv"!==e.client.deviceType&&(a.title=e.loc.string(pb)),g[i]=a}return h.length>0&&(g[DG]=function(e,t,n){return yg.context("videoShelf",()=>{if(!t||0===t.length)return null
let r
return Gl(e)?(r=new Ez(Vb),r.title=e.loc.string(Qb),r.items=t.map(e=>{const t=new Vq
return t.video=e,t})):(r=new Ez(q_),r.title=e.loc.string(Qb),r.items=t.map(e=>new wz(e,!0,dU,null,null,!0))),r.isHorizontal=!0,n.addImpressionsToShelf(e,r,DG),r})}(e,h,r)),{sectionMappings:w,shelfMapping:g}})}(e,n,S,a)
t.shelfMapping={...t.shelfMapping,...le.shelfMapping}
{const e=V?nF:rF,n=bc(0,e)
t.shelfMapping[e]=n}!function(e,t,n){if(t&&t.spotlightSection){const e=t.spotlightInAppProductIdentifier
if(e&&t.spotlightSection){const r=n.shelfMapping[t.spotlightSection.shelfId]
if(!r)return
if(r.presentationHints={isInProductPageSpotlight:!0},np(0,e,r.items),r.url){const t=new kq(r.url)
t&&(r.url=t.param(pq.offerName,e).build())}}}}(0,u,t)
const ue={},de=jx,fe=Gx,pe=S_,he=HB,we=oj,ge=iE
ue[__]=F,ue[de]=F,ue[fe]=N,ue[pe]=B,ue[he]=U,ue[we]=X,ue[ge]=j,t.badges&&Fc(e,t.badges,ue,a),null!=t.shelfMapping[LG]&&Fc(e,Hl(e,t.shelfMapping[LG]),ue,a),Ul(e,t,le.sectionMappings,V,u)}(e,b,w,T,n,I,p),b.pageRefreshPolicy=On(e,I),b.isIncomplete=!1,b.alwaysAllowReviews=Ts(e,w),p&&(b.shareAction=null,b.titleOfferDisplayProperties=null,b.expandedOfferDetails=null,b.lockup.offerDisplayProperties=null,b.banner=null),b})}function Bl(e,t,n,a,c,u,f,p=!1){return yg.context("createProductPageSidePack",()=>{var p
let h
i(a)&&(h=a.clientIdentifierOverride)
const w=t.id,g=q(t,jj),m=Y(t,dN),v=As(e,t),y=Od(e,t),A={pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,id:w,isAdvert:!!n.metricsPageInformation.iAdInfo&&n.metricsPageInformation.iAdInfo.iAdIsPresent},T=new pJ,b=new Jq,S=z(t,ZG)
S&&i(n)&&i(n.metricsPageInformation)&&(n.metricsPageInformation.offerType=LU,n.metricsPageInformation.offerReleaseDate=Pt(0,t)),b.adamId=w,b.bundleId=d(t,KG),T.uber=function(e,t,n){ju(e,t,n)
const r=Od(e,t),s=function(e,t){return t&&!0}(0,r)?mj:Ey,a=new c0(s)
if(a.artwork=hd(e,t,{supportsArcade:r}),a.compactArtwork=hd(e,t,{supportsArcade:r,prefersCompactVariant:!0}),a.video=wd(e,t,21),i(a.video)&&(a.video.playbackId=function(e){return`ProductPage.${e.id}.productUberVideoPlaybackId`}(t)),r&&o(a.video)&&o(a.artwork)){const r=Yu(e,t,11,(e.client.deviceType,null),Fe(e,t),n)
if(r.length>0&&r[0].items.length>0){const e=r[0].items[0]
a.video=e.video,a.artwork=e.screenshot}}return o(a.compactArtwork)&&(a.compactArtwork=a.artwork),a.isValidUber(!1,!1)?a:null}(e,t,h)
const P=T.uber&&T.uber.style===mj
b.icon=Gu(e,t,{useCase:10,withJoeColorPlaceholder:void 0},h),T.title=g,T.isIncomplete=!0,b.title=g,b.subtitle=lu(e,t),b.developerTagline=Ce(e,t,hG),T.regularPriceFormatted=q(t,"regularPriceFormatted"),T.logoArtwork=function(e,t){let n=null,r=null
if("tv"!==e.client.deviceType)return null
n=ly,r="bb"
const o=Pe(e,t,n)
return i(o)&&i("bb")?Fu(e,o,{cropCode:"bb",useCase:0,withJoeColorPlaceholder:!0}):null}(e,t),T.navigationBarIconArtwork=null,v||(b.rating=J(t,Gk)),b.children=au(e,t,{metricsOptions:A,artworkUseCase:1})
const I=function(e,t,n,r,o,a,c){var u
const d=At(e,t),f=Ce(e,t,KG),p=z(t,ZG),h=bt(e,d,t,p,!1,Jd(e,t,n,null==a?void 0:a.clientIdentifierOverride),o,DU,c,a.webBrowser)
if(null!==(u=null==a?void 0:a.webBrowser)&&void 0!==u&&u&&e.props.enabled(Q$))return{buttonAction:new NH(t.id),offerAction:h}
let w
if(s(h)){i(a)&&(h.lineItem=a.iAdLineItem)
const n=s(a)?a.clientIdentifierOverride:null
if(w=kt(e,h,t,p,o,DU,n),i(a)&&s(w)){const n=De(e),r=Le(e,t,Fe(e,t),kx,n),i=s(r)&&!l(a.isCppDeepLinkDisabled),c=s(a.externalDeepLinkUrl)
if(i||c){const t=i?r:a.externalDeepLinkUrl
w=ct(e,w,h.adamId,f,t,!1,o)}}}return{buttonAction:w,offerAction:h}}(e,t,b.icon,0,A,a,u)
if(b.buttonAction=I.buttonAction,S){let n
T.theme=RR
let r=null
if(y)n="",r=e.loc.uppercased(Nd(e,t,e.loc.string(dE)))
else if(n=e.loc.string(dE),i(I.offerAction.expectedReleaseDate)){const n=N_,o=e.loc.formatDate(n,I.offerAction.expectedReleaseDate),i=e.loc.string("PREORDER_EXPANDED_OFFER_SUBTITLE").replace(aE,o)
r=Nd(e,t,i)}T.expandedOfferDetails=new WY(n,r)}let C,k
P&&y&&(T.theme=nj),P&&y?(C=nj,k=rM):(C=SB,k=DU)
const O=DU,E=SB,R=y?W$:Tj,D=null!==(p=null==a?void 0:a.webBrowser)&&void 0!==p&&p?jT:DU
let _
b.offerDisplayProperties=Ut(e,I.offerAction,R,t,S,0,C,k,null,null,D,!1,!1),T.titleOfferDisplayProperties=Ut(e,I.offerAction,R,t,S,0,E,O,null,null,D)
const L=ie(e,t,dG),x=md(0,L)
i(x)&&(_=new _q(Vj),_.title=q(t,SU),_.pageUrl=x,Lf(e,_,{targetType:Nj,id:L.id,actionType:Dj,pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker})),T.developerAction=_,T.shareAction=ps(e,t,n.metricsPageInformation,n.locationTracker,h),b.tertiaryTitle=uu(e,t),b.tertiaryTitleAction=du(e,t),b.tertiaryTitleArtwork=null
const M={appPlatforms:Zu(e,t),clientIdentifierOverride:h,offerButtonShouldBeDisabled:!1,productTitle:T.title,metricsPageInformation:n.metricsPageInformation,metricsLocationTracker:n.locationTracker,webBrowser:a.webBrowser},$=function(e,t,n){let r=null,i=null,a=null,c=null,l=null,u=!1,d=null
const f=Oe(e,t,Gm),p=Oe(e,t,jm)
if((f||p)&&(r=e.loc.string("APP_UPDATE_REQUIRED_IOS"),n.offerButtonShouldBeDisabled=!0),null===r&&tt(e,t,1024)&&(r=e.loc.string("OFFER_WATCH_ONLY_BANNER"),n.offerButtonShouldBeDisabled=!0),null===r&&!Du(e,t)){if(r=e.loc.string(cb),Gl(e)){const t=new dW(hj)
t.title=e.loc.string(WF),t.indexId=qF,a=t}else{const t=new HY(Hj,hj),n=new QH(t)
n.title=e.loc.string(WF),n.indexId=qF,a=n}r=e.loc.string(s$).replace(a$,a.title),n.offerButtonShouldBeDisabled=!0}if(null===r&&tt(e,t,36)&&(r=e.loc.string(lb),n.offerButtonShouldBeDisabled=!0),tt(e,t,512)){const n=id(e,t,e.appleSilicon.isSupportEnabled)
switch(e.client.deviceType){case Mj:r=e.loc.string("UNSUPPORTED_MACOS_VERSION").replace(JN,n)
break
case Lj:case Oj:r=e.loc.string("UNSUPPORTED_IOS_VERSION").replace(JN,n)
break
case"tv":r=e.loc.string("UNSUPPORTED_TVOS_VERSION").replace(JN,n)
break
case Fj:const o=Ce(e,t,fM)
r=e.loc.string(ub).replace(JN,o)
break
case wj:r=e.loc.string("UNSUPPORTED_VISIONOS_VERSION").replace(JN,n)
break
default:r=e.loc.string(lb)}if(e.client.isPhone&&Oe(e,t,FN)){const n=Ce(e,t,fM)
r=e.loc.string(ub).replace(JN,n)}}if(tt(e,t,128))if(n.offerButtonShouldBeDisabled=!0,r=e.loc.string(cb),Gl(e)){const t=new dW(hj)
t.title=e.loc.string(WF),t.indexId=qF,a=t,r=e.loc.string(s$).replace(a$,t.title)}else{const t=new HY(Hj,hj),n=new QH(t)
n.title=e.loc.string(WF),n.indexId=qF,a=n,r=e.loc.string(s$).replace(a$,n.title)}if(tt(e,t,8192)){if(Gl(e)){const t=new dW(hj)
t.title=e.loc.string(WF),t.indexId=qF,a=t}else{const t=new HY(Hj,hj),n=new QH(t)
n.title=e.loc.string(WF),n.indexId=qF,a=n}r=e.loc.string(s$).replace(a$,a.title)}const h=Y(t,ZG)
_d(e,t)&&(r=h?e.loc.string("ProductPage.WatchOS.PreOrderRequiresiPhone"):e.loc.string("UNSUPPORTED_COMPANION_CONFIGURATION","Requires iPhone"),n.offerButtonShouldBeDisabled=!0)
const w=Ce(e,t,fM)
if(null===r&&n.clientIdentifierOverride===JV&&Md(e,w)&&(r=e.loc.string("ProductPage.Banner.PairedWatchOSVersionBelowMinimum").replace(JN,w)),Te(e,t,JB)&&!e.client.isCompanionVisionApp){const t=e.loc.string("BANNER_VISION_ONLY_APP_LEARN_MORE_LINK")
i=function(e,t,n,r){const i=e.bag.visionOnlyAppLearnMoreEditorialItemId
if(o(i))return null
const s=new _q(HG)
return s.title=t,s.pageUrl=`https://apps.apple.com/story/id${i}`,Lf(e,s,{id:P$,targetType:aj,actionType:Dj,pageInformation:n,locationTracker:r}),s}(e,t,n.metricsPageInformation,n.metricsLocationTracker),r=function(e,t,n){return t&&n?e.loc.string("BANNER_VISION_ONLY_APP_WITH_LINK").replace(WN,t):e.loc.string("BANNER_VISION_ONLY_APP_NO_LINK")}(e,t,i),a=null,c=ce(e,"systemimage://visionpro"),l=G(Ix),u=!0}$t(e,t)&&!Nt(e)?(n.offerButtonShouldBeDisabled=!0,r=e.loc.string("ProductPage.Banner.Companion.VisionDeviceRequired")):e.client.isCompanionVisionApp&&!$t(e,t)&&(n.offerButtonShouldBeDisabled=!0,r=e.loc.string("ProductPage.Banner.Companion.RemoteDownloadUnavailable"))
const g=mt(e,t),m=vt(e,"product-page-banner")
if((null===r||!n.offerButtonShouldBeDisabled)&&g&&m){const t=e.loc.string("ProductPage.ExternalPurchasesBanner.LearnMore")
i=yt(e,t,n.metricsPageInformation,n.metricsLocationTracker),r=function(e,t,n){if(t&&n){if((0,Ag.isSome)(e.bag.externalPurchasesProductPageBannerTextVariant)){const n=`ProductPage.ExternalPurchasesBanner.WithLink.Variant${e.bag.externalPurchasesProductPageBannerTextVariant}`
return e.loc.string(n).replace(WN,t)}return e.loc.string("ProductPage.ExternalPurchasesBanner.WithLink").replace(WN,t)}if((0,Ag.isSome)(e.bag.externalPurchasesProductPageBannerTextVariant)){const t=`ProductPage.ExternalPurchasesBanner.NoLink.Variant${e.bag.externalPurchasesProductPageBannerTextVariant}`
return e.loc.string(t)}return e.loc.string("ProductPage.ExternalPurchasesBanner.NoLink")}(e,t,i),a=null,e.bag.externalPurchasesIncludeProductPageBannerIcon?"secondaryInfoCircle"===e.bag.externalPurchasesProductPageBannerIconVariant?(c=ce(e,"systemimage://info.circle"),l=G(Ix)):(c=ce(e,E_),l=G("systemRed")):(c=null,l=null),u=!0}if(e.props.isNotEnabled(Q$)&&(null===r||!n.offerButtonShouldBeDisabled)&&(0,Ag.isSome)(n.webBrowser)&&n.webBrowser&&(r=e.props.enabled("productPageSetDefaultBrowserOnPurchase")?e.loc.string("ProductPage.Banner.DefaultBrowser.Message"):e.loc.string("ProductPage.Banner.WebBrowser.Message"),c=ce(e,"systemimage://gear"),l=G(Ix),d=R_),(null==r?void 0:r.length)>0)return new Uq(r,null,i,a,c,l,u,d)
if(!n.offerButtonShouldBeDisabled){const n=od(e,t)
if(s(n))return function(e,t){const n=e.loc.string("ProductPage.Banner.ExternalBrowser.Message")
let r=n,o=n,i=n,s=n,a=n
return[HN].includes(e.client.buildType)&&(r+="\n(Internal: unknown)",o+="\n(Internal: buyOrGet)",i+="\n(Internal: redownload)",s+="\n(Internal: update)",a+="\n(Internal: open)"),new Gq(Nc(D_,t,r),Nc(D_,t,o),Nc(D_,t,i),Nc(_O,t,s),Nc("launch",t,a))}(e,n)}return null}(e,t,M)
$ instanceof Uq?T.banner=$:$ instanceof Gq&&(T.appStateBanner=$)
const F=b.offerDisplayProperties
M.offerButtonShouldBeDisabled&&s(F)&&(b.offerDisplayProperties=F.newOfferDisplayPropertiesChangingAppearance(!1,fF))
const N=!tt(e,t,512)
if(!m&&!M.offerButtonShouldBeDisabled&&N){const n=function(e,t){return yg.context("updateOfferDataFromData",()=>{const n=Ie(e,t,dB)
if(0===n.length)return null
for(const e of n)if(d(e,tU)===_O)return e
return null})}(e,t)
T.updateBuyParams=d(n,vB),T.externalVersionIdentifier=Ee(e,t,fE)}if(y&&(b.editorialTagline=e.loc.string("APPLE_ARCADE")),T.lockup=b,T.appPlatforms=Zu(e,t),i(c)){const n=Ii(e,c,t,!1,!1,bj,nj,!0,!1,A,!0,!1,null,!1,!1)
if(i(c)&&n instanceof JZ){const r=n
T.appPromotionDetailPageFlowAction=Ci(e,c,t,r,A,ZU,!1,f)}}!function(e,t,n,i,s,a){if(t.shelfMapping[Ij]=new Ez(pE,"productTopLockup"),"tv"!==e.client.deviceType){const s={developerAction:t.developerAction}
t.shelfMapping[pj]=function(e,t,n,i){return yg.context("descriptionShelf",()=>{if(o(t))return null
const s=new Ez("productDescription"),a=function(e,t){return t?yg.context("productDescriptionLinksFromData",()=>{const n=[],r=Ce(e,t,dD)
if(r){const t=new OH(r,!1),o=e.loc.string("PRODUCT_DEVELOPER_WEBSITE")
n.push(new dz(o,t,"safari"))}const o=Ce(e,t,uD)
if(o){const t=new OH(o,!1),r=e.loc.string("DEVELOPER_SUPPORT")
n.push(new dz(r,t,"questionmark.circle"))}return n}):null}(e,t),c=function(e,t,n=null){return yg.context("descriptionFromData",()=>{r(n)&&(n=Fe(e,t))
let o=function(e,t,n){return Le(e,t,n,Hv)}(e,t,n)
o||(o="")
let i=Ce(e,t,NN)
i||(i="")
let s=""
o.length>0&&i.length>0&&(s="\n\n")
const a=o+s+i
if(a.length>0){const e=new _V(a)
return e.isCollapsed=!0,e}return null})}(e,t)
if(null===c)return null
const l=new qq(c,a,i.developerAction)
return s.items=[l],n.addImpressionsToShelf(e,s,pj),s})}(e,n,i,s)}{const r={useInlineUberStyle:t.uber&&t.uber.style===mj}
t.shelfMapping[LG]=function(e,t,n,r){if(Gl(e)){const r=new Ez("productBadge"),o=Dl(e,t,!0,{locationTracker:n.locationTracker,pageInformation:n.metricsPageInformation})
return r.items=o,r.isHorizontal=!0,n.addImpressionsToShelf(e,r,LG),r}{const o=new Ez(LG),i=Dl(e,t,!0,{locationTracker:n.locationTracker,pageInformation:n.metricsPageInformation}),s=!r.useInlineUberStyle,a=!1,c=r.useInlineUberStyle,l=new Az(i,s,a,c,"justified")
return o.items=[l],o.isHorizontal=!0,n.addImpressionsToShelf(e,o,LG),o}}(e,n,i,r)}Ul(e,t,[],Od(e,n),s)}(e,T,t,n,a),T.uber&&(T.presentationOptions.push(BM),T.presentationOptions.push(Ry)),T.alwaysAllowReviews=Ts(e,t)
const B=null==a?void 0:a.iAdDismissAdActionMetrics
if((0,Tg.isSome)(B)){const e=new jY(d(B.instanceId),d(B.adamId),d(B.bundleId),d(B.advertType),d(B.invocation),d(B.purchaseType),d(B.reportingDestination)),t=new vW(e)
T.pageDisappearedAction=t
const n=new jY(d(B.instanceId),d(B.adamId),d(B.bundleId),d(B.advertType),OA,d(B.purchaseType),d(B.reportingDestination))
T.lockup.buttonAction=eo(0,T.lockup.buttonAction,n)}return T})}function Ul(e,t,n,r,o){const i=function(e,t,r){return e.map(e=>e.shelfId===Rj&&r?n:e.shelfId===Rj?n[0]?[n[0]]:[]:[e]).reduce((e,t)=>e.concat(t)).map(e=>e.createShelfIdList()).reduce((e,t)=>e.concat(t))},a=zs(0,!0,e.host.platform,r,!1,!1,o),c=zs(0,!1,e.host.platform,r,!1,!1,o),l=zs(0,!0,e.host.platform,r,!0,!1,o),u=zs(0,!1,e.host.platform,r,!0,!1,o),d=zs(0,!1,e.host.platform,r,!1,!0,o),f=zs(0,!1,e.host.platform,r,!0,!0,o)
t.shelfOrderings.purchasedOrdering=i(a,0,!1),t.shelfOrderings.purchasedOrdering_ExpandedMedia=i(a,0,!0),t.shelfOrderings[fJ]=i(c,0,!1),t.shelfOrderings.notPurchasedOrdering_ExpandedMedia=i(c,0,!0),t.shelfOrderings.purchasedOrdering_Compact=i(l,0,!1),t.shelfOrderings.purchasedOrdering_ExpandedMedia_Compact=i(l,0,!0),t.shelfOrderings.notPurchasedOrdering_Compact=i(u,0,!1),t.shelfOrderings.notPurchasedOrdering_ExpandedMedia_Compact=i(u,0,!0),t.shelfOrderings.downloadingOrdering=i(d,0,!1),t.shelfOrderings.downloadingOrdering_ExpandedMedia=i(d,0,!0),t.shelfOrderings.downloadingOrdering_Compact=i(f,0,!1),t.shelfOrderings.downloadingOrdering_ExpandedMedia_Compact=i(f,0,!0),t.defaultShelfOrdering=fJ
for(const e of Object.keys(t.shelfMapping))s(t.shelfMapping[e])&&(t.shelfMapping[e].id=e)}function Gl(e){return e.featureFlags.isEnabled("shelves_2_0_product")||!0}function jl(e,t,n={},r={},o=null,i=!1,s=!1){const a=Od(e,_(e,t)),c=Nl(e,t,n,r,o,s)
return Gl(e)&&!i?c:Qs(e,c,a,n)}function Vl(e,t,n={}){if(!e.client.isSidepackingEnabled)return null
const o=Od(e,t),i=function(e,t,n){return yg.context("createProductPageSidePackFromResponse",()=>{if(!e.client.isSidepackingEnabled)return null
const o=function(e,t,n){const r=q(t,gj),o=q(t,jj),i=q(t,SU)
let s=null
n&&(s=n.iAdClickFields)
const a=ei(e,lB,t.id,`${i}_${o}`,s)
return a.pageUrl=r,new p1(a,{rootPosition:0,locationStack:[]})}(e,t,n),i=Bl(e,t,o,n)
return function(e,t,n){r(n)||(t.pageMetrics.addData(li(e,n,void 0),[Dg.PageInvocationPoint.backButton]),r(t.pageMetrics.pageFields)&&(t.pageMetrics.pageFields={}))}(e,i,o.metricsPageInformation),i})}(e,t,n)
return Gl(e)?i:Qs(e,i,o,n)}function Hl(e,t){if(o(null==t?void 0:t.items))return[]
if(Gl(e))return t.items
{const e=t.items
return e.length>0?e[0].badges:[]}}function Wl(e,t,n){const r=Vt(0,t),o=e.props.enabled("universalEditorialMediaFlavors")?b1[n]:T1[n],i=ql(e,t,r,n,o,!1),s=ql(e,t,r,n,S1[n],!0)
return i.rtlArtwork=s.rtlArtwork,i.rtlArtworkData=s.rtlArtworkData,i.rtlVideo=s.rtlVideo,i.rtlBackgroundColor=s.rtlBackgroundColor,i.rtlTextColorOverride=s.rtlTextColorOverride,i}function ql(e,t,n,r,o,a){let c={}
for(const l of o){if(i(n)&&(c=Yl(e,n,r,l,a)||zl(e,n,r,l,a),s(c)))break
if(c=Yl(e,t,r,l,a)||zl(e,t,r,l,a),s(c))break}return(0,Ag.isNothing)(c)&&(c={}),c}function zl(e,t,n,r,i){let a=null,c=null,l=null
const u=`editorialArtwork.${r}`,d=Re(e,t)
if(c=H(t,u)||we(t,d,u),o(c))return null
a=Fu(e,c,{withJoeColorPlaceholder:!0,useCase:Jl(n),cropCode:Kl(n,r,i)}),s(a)&&(l=a.backgroundColor)
const f=Ql(0,c,a)
return i?{rtlArtwork:a,rtlArtworkData:c,rtlBackgroundColor:l,rtlTextColorOverride:f}:{artwork:a,artworkData:c,backgroundColor:l,textColorOverride:f}}function Yl(e,t,n,r,i){let a=null,c=null,l=null,u=null
const f=`editorialVideo.${r}`,h=Re(e,t)
if(l=H(t,f)||we(t,h,f),o(l))return null
const w=p(l,TN)
s(w)&&(c=Fu(e,w,{withJoeColorPlaceholder:!0,useCase:Jl(n),cropCode:"sr"})),s(c)&&(c.crop="sr",u=c.backgroundColor)
const g=d(l,YG)
s(c)&&(null==g?void 0:g.length)>0&&(a=new VV(g,c,{canPlayFullScreen:!1,showPlaybackControls:!1,allowsAutoPlay:!0,looping:!0,playbackControls:Xl(0,n),autoPlayPlaybackControls:{}}),a.editorialMediaFlavor=r,a.editorialMediaPlacement=n)
const m=Ql(0,w,c)
return i?{rtlVideo:a,rtlArtwork:c,rtlArtworkData:w,rtlBackgroundColor:u,rtlTextColorOverride:m}:{video:a,artwork:c,artworkData:w,backgroundColor:u,textColorOverride:m}}function Jl(e){switch(e){case fm.Hero:return 19
case fm.LargeBreakout:return 6
case fm.StoryCard:return 15
case fm.StoryDetail:case fm.StoryDetailLandscape:return 13
case fm.Search:return 9
default:return 0}}function Kl(e,t,n){switch(e){case fm.Hero:switch(t){case dm.HeroStatic16x9:if(!n)return"gd"
break
case dm.HeroStaticRTL16x9:if(n)return"gg"
break
case dm.StoryCenteredStatic16x9:return n?"gh":"ge"
case dm.UniversalAStatic16x9:return n?"gj":"gi"}break
case fm.LargeBreakout:switch(t){case dm.StoryCenteredStatic16x9:return n?"gk":"gf"
case dm.UniversalAStatic16x9:return n?"gl":"gm"}break
case fm.StoryCard:case fm.StoryDetail:case fm.StoryDetailLandscape:case fm.Search:if(t===dm.UniversalAStatic16x9)return"gn"}return"sr"}function Zl(e,t,n=!1){if((0,Ag.isNothing)(t))return null
const r=n?t.rtlTextColorOverride:t.textColorOverride,o=n?t.rtlBackgroundColor:t.backgroundColor
return(0,Ag.isSome)(r)?V(r,Vz):(0,Ag.isSome)(o)?U(o):null}function Ql(e,t,n){const r=null==n?void 0:n.textColor
if((0,Ag.isNothing)(r))return null
const o=l(t,"useCustomTextColor"),i=V(r,jz)||V(r,Vz)
return o&&i?r:null}function Xl(e,t){switch(t){case fm.Hero:case fm.StoryDetail:case fm.StoryDetailLandscape:return{prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1}
default:return{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0}}}function eu(e,t,n){switch(n){case fx:case dx:case NM:case FM:return Wl(e,t,fm.EditorialLockup)
case"BrickSmall":case"BrickMedium":case"BrickLarge":return Wl(e,t,fm.Brick)
case CD:case"StorySmall":return Wl(e,t,fm.StoryCard)
case ak:return Wl(e,t,fm.Hero)
case sk:return Wl(e,t,fm.LargeBreakout)
default:return{}}}function tu(e,t,n){const r=function(e,t,n){const r=function(e,t){let n=null
switch(t.type){case kj:case rU:case MF:n=se(t,ED,!0)||se(t,uG,!0)||se(t,Uj,!0)
break
default:n=null}return n}(0,t)
return o(r)?null:Pu(e,r,n)}(e,t,{lockupOptions:n})
return o(r)?null:r.map(e=>e.icon)}function nu(e,t,n){const r=jt(e,t)
return o(r)?null:hu(e,r,n)}function ru(e,t,n,r,o){if((0,Tg.isNothing)(t)||0===t.length||r.has(t))return null
const i=new Qq(Jx)
return i.moduleType=YE,(0,Tg.isSome)(t)&&(i.labelText=t,hf(e,i,yf(o,YE,i.labelText,rj))),r.add(t),[i]}function ou(e,t,n){return t===$G?n?$j:rN:n?W$:Tj}function iu(e,t,n,s,a){var l,u,d,f,h,w,g,m,v,y,A
if(o(t))return
if(n.showMetadataInformationInLockup=e.bag.isLLMSearchTagsEnabled||e.client.isPad,!e.client.isPhone)return
const T=p(t,yU),b=null!==(u=null===(l=null==T?void 0:T.displayStyle)||void 0===l?void 0:l.metadataRibbon)&&void 0!==u?u:null===(d=null==s?void 0:s.displayStyle)||void 0===d?void 0:d.metadataRibbon
let S=[]
S=e.bag.isLLMSearchTagsEnabled?null!==(g=null!==(h=null===(f=null==T?void 0:T.displayStyle)||void 0===f?void 0:f.llmRibbon)&&void 0!==h?h:null===(w=null==T?void 0:T.displayStyle)||void 0===w?void 0:w.metadataRibbon)&&void 0!==g?g:null===(m=null==s?void 0:s.displayStyle)||void 0===m?void 0:m.metadataRibbon:null!==(y=null===(v=null==T?void 0:T.displayStyle)||void 0===v?void 0:v.metadataRibbon)&&void 0!==y?y:null===(A=null==s?void 0:s.displayStyle)||void 0===A?void 0:A.metadataRibbon
const P=function(e,t,n,s,a,c=P1){if(o(s))return[]
const l=[],u=new Set
for(const d of s)if(!o(d))for(const o of d){const s=c[o]
if(r(s))continue
const d=s(e,t,n,u,a.metricsOptions)
if(i(d)){l.push(...d)
break}}return l}(e,t,n,b,a),I=function(e,t,n,s,a,l=P1){if(o(s))return[]
const u=c(t.meta,"associations.tags.data"),d=[]
let f=0,h=0
const w=new Set
for(const c of s){const s=Array.isArray(c)?c:[c]
if(!o(s))for(const o of s){const s=o===TO
let c,g=t,m=""
if(o===YE){const n=p(t,yU);(0,Tg.isSome)(null==n?void 0:n.rankedSecondaryGenreShortDisplayNames)&&(m=null==n?void 0:n.rankedSecondaryGenreShortDisplayNames[h]),(0,Tg.isSome)(m)?(c=ru(e,m,0,w,a.metricsOptions),h+=1):c=[]}else{const i=l[o]
if(r(i))continue
g=s?u[f]:t,c=i(e,g,n,w,a.metricsOptions),f=s?f+1:f}if(i(c)){d.push(...c)
for(const e of c)(0,Tg.isSome)(e.impressionMetrics)&&af(a.metricsOptions.locationTracker)
break}}}return d}(e,t,n,S,a)
n.metadataRibbonItems=P,n.searchTagRibbonItems=I,n.shouldEvenlyDistributeRibbonItems=!e.bag.isLLMSearchTagsEnabled}function su(e,t,n,r,o,i){t&&yg.context("copyDataIntoLockup",()=>{var s,a,l,u,f
const p=Y(t,ZG)
if(r.isContainedInPreorderExclusiveShelf&&!p)return null
const h=null!==(s=null==r?void 0:r.attributePlatformOverride)&&void 0!==s?s:De(e),w=Fe(e,t)
n.productVariantID=Be(w),r.metricsOptions.productVariantData=w,n.adamId=t.id
const g=Ce(e,t,KG,null==r?void 0:r.attributePlatformOverride)
n.bundleId=g,n.decorations=[]
let m=null
r&&r.clientIdentifierOverride&&(m=r.clientIdentifierOverride),n.icon=Gu(e,t,{useCase:r.artworkUseCase,withJoeColorPlaceholder:r.useJoeColorIconPlaceholder,overrideTextColorKey:r.overrideArtworkTextColorKey},m,w,r.attributePlatformOverride),r&&r.titleObjectPath?n.title=Ce(e,t,r.titleObjectPath,null==r?void 0:r.attributePlatformOverride):n.title=q(t,jj),n.useAdsLocale=r.metricsOptions.isAdvert&&(0,Ag.isSome)(e.bag.adsOverrideLanguage)
const v=Od(e,t,null==r?void 0:r.attributePlatformOverride)
v&&!r.shouldHideArcadeHeader&&(n.heading=r.metricsOptions.isAdvert?e.adsLoc.string(Bk):e.loc.string(Bk)),r.shouldShowFriendsPlayingShowcase&&n.decorations.push("showcaseFriendsPlaying")
const A=!v&&!p&&(null===(a=r.isMultilineTertiaryTitleAllowed)||void 0===a||a)
if(r.isSubtitleHidden||function(e,t,n){return yg.context("isBadgeMultilineFromData",()=>{if(!n)return!1
if(!rd(0,t,!1))return!1
if(fu(e,t))return!1
const r=Zu(e,t)
return ad(r,Oj)||ad(r,Lj)})}(e,t,A)||(n.subtitle=lu(e,t,r)),n.tertiaryTitle=uu(e,t,A,r.hideCompatibilityBadge),n.tertiaryTitleAction=du(e,t),n.tertiaryTitleArtwork=null,n.developerTagline=Ce(e,t,hG,null==r?void 0:r.attributePlatformOverride),n.editorialTagline=Ed(e,t,BB,!1,null==r?void 0:r.attributePlatformOverride),n.editorialDescription=Ed(e,t,Bj,!1,null==r?void 0:r.attributePlatformOverride),n.shortEditorialDescription=Ed(e,t,DB,!1,null==r?void 0:r.attributePlatformOverride),n.ageRating=q(t,DA),n.productDescription=Ce(e,t,NN,null==r?void 0:r.attributePlatformOverride),!As(e,t)&&(J(t,Uk)>0||!r||!r.hideZeroRatings)){n.rating=J(t,Gk)
const o=J(t,Uk),i=r.metricsOptions.isAdvert?e.bag.adsOverrideLanguage:null
n.ratingCount=e.loc.formattedCountForPreferredLocale(e,o,i)}const T=Rf(e,t,r.metricsOptions,r.metricsClickOptions)
ef(e,T,n.title)
const b=At(e,t,null==r?void 0:r.attributePlatformOverride),S=null!==(l=null==r?void 0:r.includeBetaApps)&&void 0!==l&&l,P=Jd(e,t,n.icon,m),I=y(T),C=bt(e,b,t,p,S,P,I,cj,null==r?void 0:r.referrerData),k=c(b,jk)
let O=kt(e,C,t,p,I,cj,m,r.shouldNavigateToProductPage)
const E=Le(e,t,w,kx,h),R=qr(0,t),D=!R||Yr(t),_=D&&(null==E?void 0:E.length)>0,L=(null===(u=null==r?void 0:r.externalDeepLinkUrl)||void 0===u?void 0:u.length)>0
if(_||L){const o=_?E:r.externalDeepLinkUrl
O=ct(e,O,C.adamId,g,o,S,I),(null===(f=r.crossLinkSubtitle)||void 0===f?void 0:f.length)>0&&(n.crossLinkTitle=e.loc.uppercased(q(t,jj)),n.crossLinkSubtitle=r.crossLinkSubtitle)}n.buttonAction=O,n.includeBetaApps=S,n.developerName=q(t,SU),(0,Ag.isNothing)(n.developerName)&&(n.developerName=q(t,_A)),n.children=au(e,t,r),(0,Ag.isSome)(i)&&i(),nf(r.metricsOptions.locationTracker)
const x=fs(e,t,m)
if(x){const t=new tW,r=y(T)
r.actionType=gM,r.targetType=XG,Lf(e,t,r)
const o=new Yq
o.shareAction=t,o.shareSheetData=x,n.contextMenuData=o}const M=null!=o?o:xu(e,t)
let $=!1
M&&($=!(It(0,At(e,M))>0))
const F=ou(0,t.type,v)
n.offerDisplayProperties=r?Ut(e,C,F,t,p,r.isContainedInPreorderExclusiveShelf,r.offerStyle,r.offerEnvironment,k[0],$,cj,r.shouldNavigateToProductPage,r.metricsOptions.isAdvert,0,r.parentAppData):Ut(e,C,F,t,p,r.isContainedInPreorderExclusiveShelf,null,null,k[0],$,cj),r&&r.skipDefaultClickAction||(n.clickAction=Eu(e,t,T,{clientIdentifierOverride:m,productVariantData:w,isCppDeepLinkEligible:D})),r&&r.ordinal&&(n.ordinal=r.ordinal)
const N=Pe(e,t,ON,null==r?void 0:r.attributePlatformOverride)
if(N){const e=d(N,JD),t=e&&e===KD
n.isEditorsChoice=t}R||(n.flowPreviewActionsConfiguration=hs(e,t,!1,m,n.clickAction,r.metricsOptions,T,r.externalDeepLinkUrl,n.subtitle,n.title))
const B=mf(e,t,n,P,r.metricsOptions,r.canDisplayArcadeOfferButton)
pf(e,n,B)})}function au(e,t,n){const r=re(t,Gj)
return r?Su(e,r,{lockupOptions:n,filter:0}):null}function cu(e,t,n,r,s,a){var c
if(!t)return
if(s.isNetworkConstrained)return
const l=null!==(c=s.metricsOptions.isAdvert)&&void 0!==c&&c
yg.context("copyMediaIntoMixedMediaLockup",()=>{n.screenshots=zu(e,t,4,null,s.clientIdentifierOverride,null,l,a)
const c=n.screenshots[0]
n.trailers=[]
const u=Hu(e,t,r,s.metricsOptions,n.adamId,l,a)
i(u)&&(o(c)||u.mediaPlatform.isEqualTo(c.mediaPlatform))&&n.trailers.push(u)})}function lu(e,t,n=null){return(0,Ag.isNothing)(t)?null:yg.context("subtitleFromData",()=>{let r
return n&&n.subtitleObjectPath&&(r=Ce(e,t,n.subtitleObjectPath,null==n?void 0:n.attributePlatformOverride)),o(r)&&(r=Ce(e,t,hG,null==n?void 0:n.attributePlatformOverride)),r||pu(e,t,n)})}function uu(e,t,n=!1,r){return yg.context("badgeFromData",()=>{if(r)return null
const o=rd(0,t,!1)
if(o){let r=""
const i=Zu(e,t)
if(ad(i,Oj)?r="Platform.DesignedForPad":ad(i,Lj)&&(r="Platform.DesignedForPhone"),(null==r?void 0:r.length)>0)return o&&(fu(e,t)||(r+=".NotVerified",n&&(r+=".Expanded"))),e.loc.string(r)}return null})}function du(e,t){return yg.context("badgeActionFromData",()=>{if(!rd(0,t,!1))return null
if(fu(e,t))return null
const n=Zu(e,t)
if(!ad(n,Oj)&&!ad(n,Lj))return null
const r=new _q(HG)
return r.pageUrl=`https://apps.apple.com/story/id${e.bag.appleSiliconMacUnverifiedBadgeEditorialItemId}`,r})}function fu(e,t){if(!e.appleSilicon.isSupportEnabled)return!0
const n=ke(e,t,xA,dj)
return!!i(n)&&n}function pu(e,t,n=null){return yg.context("categoryFromData",()=>{const r=Ce(e,t,UB,null==n?void 0:n.attributePlatformOverride)
if((null==r?void 0:r.length)>0)return r
const o=se(t,qk)
if(o.length>0){let e=o[0]
const t=6014..toString()
if(e.id===t)for(const n of o){const r=q(n,XD)
if(n.id!==t&&r===t){e=n
break}}return q(e,jj)}{const e=W(t,zk)
return e.length>0?e[0]:null}})}function hu(e,t,n){return yg.context("lockupFromData",()=>{var r,i,s,a,c,l,u,f,p
if(!t)return yg.unexpectedNull(gG,FB),null
const h=qr(0,t)
n.metricsOptions.isAdvert=h
const w=function(e,t){var n
if((0,Tg.isNothing)(t)||(0,Tg.isNothing)(e))return!1
const r=null===(n=of(t))||void 0===n?void 0:n.id
if((0,Tg.isNothing)(r))return!1
const o=ao(e,r)
return!(0,Tg.isNothing)(o)&&rf(t)===o}(null===(i=null===(r=n.metricsOptions.pageInformation)||void 0===r?void 0:r.iAdInfo)||void 0===i?void 0:i.placementType,n.metricsOptions.locationTracker)
if(n.metricsOptions.isAdEligible=w,(h||w)&&(null===(a=null===(s=n.metricsOptions.pageInformation)||void 0===s?void 0:s.iAdInfo)||void 0===a||a.apply(e,t)),h&&(null===(l=null===(c=n.metricsOptions.pageInformation)||void 0===c?void 0:c.iAdInfo)||void 0===l||l.setTemplateType(yB)),!K(t))return null
switch(t.type){case $G:return n.offerEnvironment=MA,wu(e,t,n)
case xj:const r=ie(e,t,Tj)
if(o(r))return null
const i=new Jq
return su(e,r,i,n),i
case CU:case jU:return function(e,t,n){return yg.context("appPromotionOfferLockupFromData",()=>{var r,o,i
const s=null!==(r=xu(e,t))&&void 0!==r?r:n.parentAppData,a=_u(e,t)
if(Y(s,bM)){const r=wu(e,t,n)
r.offerDisplayProperties.titles[Bj]=e.loc.string($A),r.offerDisplayProperties.isStreamlinedBuy=!0,r.offerDisplayProperties.hasDiscount=!1
const o=H(a,_j),i=Di(e,s,_j),c=Fu(e,o,{useCase:n.artworkUseCase,withJoeColorPlaceholder:n.useJoeColorIconPlaceholder,style:fN,overrideTextColorKey:n.overrideArtworkTextColorKey})
return r.icon=null!=c?c:i,r}{const r=new Jq
su(e,s,r,n)
const c=Rf(e,t,n.metricsOptions,n.metricsClickOptions)
ef(e,c,r.title)
const l=Ce(e,s,KG),u=q(a,rB),f=q(s,LA),p=new xH(u,s.id,l,r.buttonAction,f)
if(p.appTitle=null!==(o=q(s,jj))&&void 0!==o?o:"",p.productTitle=null!==(i=q(a,jj))&&void 0!==i?i:"",t.type===jU){const e=d(Lu(a),Wk);(0,Ag.isSome)(e)&&e.length>0&&(p.additionalBuyParams="adHocOfferId="+e)}else p.additionalBuyParams="contingentItemId="+t.id
return r.buttonAction=p,nf(n.metricsOptions.locationTracker),r}})}(e,t,n)
default:const s=new Jq
return su(e,t,s,n),(0,Ag.isSome)(null===(u=n.metricsOptions.pageInformation)||void 0===u?void 0:u.iAdInfo)&&((h||w)&&zr(e,t,s,n.metricsOptions),h&&(e.props.enabled(zB)?null===(f=s.searchAdOpportunity)||void 0===f||f.setTemplateType(yB):null===(p=s.searchAd)||void 0===p||p.setTemplateType(yB))),s}})}function wu(e,t,n){return yg.context("inAppPurchaseLockupFromData",()=>{const r=new tz
return function(e,t,n,r){t&&yg.context("copyDataIntoInAppPurchaseLockup",()=>{var o
const i=null!==(o=xu(e,t))&&void 0!==o?o:r.parentAppData,a=Y(i,bM),l=_u(e,t)
su(e,t=l,n,r,i),n.productIdentifier=q(t,rB),n.parent=hu(e,i,r),n.description=q(t,NN),n.isVisibleByDefault=Y(t,"isMerchandisedVisibleByDefault"),n.isSubscription=Y(t,ZD)
const u=At(e,t),f=c(u,jk)
n.offerDisplayProperties.hasDiscount=f.length>0,n.offerDisplayProperties.subscriptionFamilyId=q(t,"subscriptionFamilyId")
const p=new _q(Vk)
p.presentationContext=WB
const h=function(e,t,n){const r=(new hJ).param(pq.id,n).param(hq,t).build()
return`${AW}:/${$W}/${kW}/?${r}`}(0,n.adamId,i.id)
p.pageUrl=h
const w=new Mz
w.parentLockup=y(n.parent),w.lockup=y(n),w.preInstallOfferDescription=gi(e,u),p.pageData=w
const g=q(t,rB),m=Ce(e,i,KG),v=q(i,LA),A=s(Lu(t)),T=mf(e,t,n,fN,r.metricsOptions,r.canDisplayArcadeOfferButton)
if(ef(e,T,n.title),a&&A){const o=new xH(g,i.id,m,n.parent.buttonAction)
n.parent&&(o.appTitle=n.parent.title),o.productTitle=n.title,o.streamlineBuyAction=function(e,t,n,r,o){var i
const a={...o.metricsOptions,id:n.id,targetId:n.id,idType:tj,actionDetails:{parentAdamId:n.id}},c=Jd(e,t,r.icon,o.clientIdentifierOverride),l=y(a),u=Lu(t),f=At(e,t),p=At(e,n),h=new RY(d(p,vB))
let w=null!==(i=d(u,vB))&&void 0!==i?i:d(f,vB)
w+=`&appAdamId=${d(n,"id")}`,w+=`&appExtVrsId=${h.get(QD,"")}`,w+=`&bid=${Ce(e,n,KG)}`,w+="&bvrs=1.0",w+=`&offerName=${Ce(e,t,rB)}`
const g=d(u,Wk)
return s(g)&&(w+=`&adHocOfferId=${g}`),f[vB]=w,bt(e,f,t,!1,!1,c,l,cj,null==o?void 0:o.referrerData,!1,n.id)}(e,t,i,n,r),n.buttonAction=o,n.subtitle=q(i,jj)}else if(v){const t=new xH(g,i.id,m,p,v)
n.parent&&(t.appTitle=n.parent.title),t.productTitle=n.title
const o={...r.metricsOptions,id:n.adamId,idType:tj,actionDetails:{parentAdamId:i.id}}
Lf(e,t,o),n.buttonAction=t}else{const t=new zH(cj)
t.title=e.loc.string("SEED_IN_APP_UNSUPPORTED_MESSAGE_OPTION_1"),t.message="",t.isCancelable=!0,n.buttonAction=t}if(nf(r.metricsOptions.locationTracker),!r||!r.skipDefaultClickAction){const r=Cu(e,t,T)
n.clickAction=r,n.productAction=r}!function(e,t,n){t&&(t.impressionMetrics||pf(e,t,n),t.parent&&t.parent.adamId&&(0,Tg.isSome)(t.impressionMetrics)&&(t.impressionMetrics.fields.parentAdamId=Hd(t.parent.adamId)))}(e,n,T)},Hk)}(e,t,r,n),r})}function gu(e,t,n){return yg.context("screenshotsLockupFromData",()=>{const r=new Kq
return function(e,t,n,r){t&&yg.context("copyDataIntoScreenshotsLockup",()=>{su(e,t,n,r),n.screenshots=zu(e,t,4,null,r.clientIdentifierOverride)})}(e,t,r,n),r})}function mu(e,t,n){return yg.context("posterLockupFromData",()=>{const o=new Dz
return function(e,t,n,o){t&&yg.context("copyDataIntoPosterLockup",()=>{su(e,t,n,o),n.epicHeading=function(e,t){const n=Pe(e,t,"editorialArtwork.epicHeading")
return i(n)&&i("bb")?Fu(e,n,{cropCode:"bb",useCase:0}):null}(e,t),n.posterArtwork=function(e,t){const n=Pe(e,t,"editorialArtwork.postCard")
return i(n)?Fu(e,n,{cropCode:"sr",useCase:0,withJoeColorPlaceholder:!0}):null}(e,t),n.posterVideo=function(e,t,n){const o=Pe(e,t,[ij,uy]),s=Fu(e,Pe(e,t,[ij,uy,TN]),{useCase:19,withJoeColorPlaceholder:!0,cropCode:"sr"})
if(i(o)){const e=d(o,YG)
return r(e)?null:new VV(e,s,{allowsAutoPlay:!0,looping:!0,canPlayFullScreen:!1,showPlaybackControls:!1,playbackControls:{prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1},autoPlayPlaybackControls:{prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1}})}return null}(e,t),n.offerDisplayProperties&&(n.offerDisplayProperties=n.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,nj,G$)),n.posterVideo?n.isDark=U(n.posterVideo.preview.backgroundColor):n.posterArtwork?n.isDark=U(n.posterArtwork.backgroundColor):n.isDark=!1
const s=Oe(e,t,bN)
if(Oe(e,t,ZG)){const r=s?e.loc.string("Offer.Label.ComingSoon"):null
let o
o=e.loc.uppercased(Nd(e,t,r)),(0,Ag.isSome)(o)&&(n.footerText=o)}})}(e,t,o,n),o})}function vu(e,t,n,r,o=null,i){return yg.context("mixedMediaLockupFromData",()=>{const s=new Zq
return su(e,t,s,n,null,()=>{iu(e,t,s,o,n),cu(e,t,s,r,n,i),Au(e,t,s,o)}),s})}function yu(e,t,n,r){const o=t.type===kj?ie(e,t,lG):t,i=hu(e,o,n),s=Re(e,o),a=eu(e,o,r),c=eu(e,t,r),l=null==a?void 0:a.artwork,u=null==c?void 0:c.artwork
let d,f
if((0,Ag.isSome)(u),(0,Ag.isSome)(l)&&(f=Zl(0,a),d=l),(0,Ag.isSome)(d)&&(0,Ag.isSome)(i)){const e=new rz(d,i,null,null,f)
return e.caption=me(o,s,RD),(0,Ag.isSome)(e.caption),e.title=me(o,s,NB)||q(o,UB),e.impressionMetrics=i.impressionMetrics,e}return null}function Au(e,t,n,r){var o
if(!e.client.isPhone)return
const s=d(t.meta,"imageLockupFromData")
i(s)?n.screenshotsDisplayStyle=s:i(null===(o=null==r?void 0:r.displayStyle)||void 0===o?void 0:o.screenshots)&&(n.screenshotsDisplayStyle=r.displayStyle.screenshots)}function Tu(e,t,n,r,o,i=!0){return yg.context("mixedMediaAdLockupFromData",()=>{const s=new Zq
return Y(t,"iad.format.images")?(cu(e,t,s,r,n),function(e,t,n,r){if(!function(e,t){const n=function(e,t,n){const r=Fe(e,t)
return(0,Ag.isNothing)(r)?null:He(r,n)}(e,t,YD)
return!n}(e,t))return
const o=W(t,"iad.assetOverride")
if(o.length){const e=function(e,t,n){const r=new Set(n),o=[],i=[],s=function(e,t){if(0===r.size)return!1
for(const o of n)if(o===t||-1!==e.indexOf(o))return r.delete(o),!0
return!1}
if(n.length&&(t.screenshots.length||t.trailers.length)){if(t.trailers.length)for(const e of t.trailers[0].videos)s(e.videoUrl,e.preview.checksum)&&o.push(e)
if(t.screenshots.length)for(const e of t.screenshots[0].artwork)s(e.template,e.checksum)&&i.push(e)}return!(0!==r.size||!o.length&&!i.length||(t.trailers.length&&(t.trailers[0].videos=o),t.screenshots.length&&(t.screenshots[0]=new TV(i,t.screenshots[0].mediaPlatform)),0))}(0,n,o)
r.pageInformation.iAdInfo&&r.pageInformation.iAdInfo.iAdIsPresent&&r.pageInformation.iAdInfo.setSpecifiedCreativeUsed(e)}}(e,t,s,n.metricsOptions),su(e,t,s,n,null,()=>{Au(e,t,s,o),iu(e,t,s,o,n)})):(su(e,t,s,n,null,()=>{iu(e,t,s,o,n)}),s.screenshots=[]),zr(e,t,s,n.metricsOptions,i),s})}function bu(e,t,n,r,i,s){return yg.context("arcadeLockupFromData",()=>{const a=t.marketingItemData,c=new nz
c.title=e.loc.string("ARCADE_LOCKUP_TITLE","Apple Arcade")
const l=t.marketingItemData
n={...n,mercuryMetricsData:Kd(0,l)}
let u,d=Ma(0,a);(null==d?void 0:d.length)>0&&(d=d.replace(/\n/g," "),c.nonsubscribedSubtitle=d,c.subscribedSubtitle=d)
const f=xa(0,a)
u=Fa(e,t.marketingItemData,r,n),u.title=f,c.unsubscribedButtonAction=u
const p=Bf(0,n.pageInformation,n.locationTracker)
p.title=e.loc.string(q$,z$),c.subscribedButtonAction=p
const h=vf(e,t.marketingItemData,c.title,n)
h.displaysArcadeUpsell=!0,o(h.targetType)&&(h.targetType=XG),pf(e,c,h)
const w=new mV($j,e.bag.arcadeAppAdamId,i,null,s,null,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId)
return w.titles[Ox]=e.loc.string(q$,z$),c.offerDisplayProperties=w,c})}function Su(e,t,n){return r(t)?[]:Pu(e,t.data,n)}function Pu(e,t,n){return yg.context("lockupsFromData",()=>{if(!t)return[]
const o=[]
let s=!1
for(let a=0;a<t.length&&!s;a++){const c=t[a]
if(!K(c)){n.contentUnavailable&&(s=n.contentUnavailable(a,c))
continue}const l=n.lockupOptions
let u=80894
if(n.includeOrdinals){const r=n.ordinalDirection===FA?t.length-a:a+1
l.ordinal=e.loc.decimal(r).toString()}if(i(n.filter)&&(u=n.filter),tt(e,c,u))continue
const d=hu(e,c,l)
!r(d)&&d.isValid()&&(o.push(d),af(n.lockupOptions.metricsOptions.locationTracker))}return o})}function Iu(e,t,n,r,s=null,a){return yg.context(`actionFromData: ${t.type}`,()=>{switch(t.type){case Gj:case Pj:return Eu(e,t,n,{clientIdentifierOverride:r,externalDeepLinkUrl:s,isCppDeepLinkEligible:a})
case $G:return Cu(e,t,n)
case kj:return Ou(e,t,n,r)
case rU:return function(e,t,n){return t?yg.context("editorialPageActionFromData",()=>{const r=t.href
if(o(r))return yg.unexpectedNull(gG,fj,Ex),null
const i=new _q(Vj)
return i.pageUrl=r,i.title=Rd(e,t,jj),o(i.title)&&(i.title=q(t,jj)),Lf(e,i,n),i}):null}(e,t,n)
case e_:return function(e,t,n){return t?yg.context("msoActionFromPlatformData",()=>{const r=q(t,gj)
if(!r)return yg.unexpectedNull(gG,fj,gj),null
const o=new _q(vx)
return o.pageUrl=r,o.title=q(t,jj),Lf(e,o,n),o}):null}(e,t,n)
case PU:return function(e,t,n){return t?yg.context("groupingActionFromData",()=>{if(!t.href)return yg.unexpectedNull(gG,fj,Ex),null
const r=new _q(Vj)
return r.pageUrl=qe(e,function(e,t){const n=[lj,ij,YU,eG,pG,xB]
e.appleSilicon.isSupportEnabled&&n.push(AG)
const r=new Uz(e,t).includingAttributes(n).includingMacOSCompatibleIOSAppsWhenSupported()
ki(e)&&(r.enablingFeature(FG),r.includingScopedAttributes(xj,[pj,GU,IU]),r.includingScopedRelationships(xj,[Tj]),r.includingScopedRelationships(Yv,[xj]))
const o=R(e)
return i(o)&&r.addingQuery(GN,o),r}(e,t.href)).toString(),r.title=Ru(0,t),Lf(e,r,n),r}):null}(e,t,n)
default:return function(e,t,n){return t?yg.context("genericActionFromData",()=>{const r=d(t,tU),o=q(t,gj)
if(!o)return yg.unexpectedNull(gG,fj,gj),null
const i=new _q(Vj)
return i.pageUrl=o,i.title=r===PU?Ru(0,t):q(t,jj),Lf(e,i,n),i}):null}(e,t,n)}})}function Cu(e,t,n){return yg.context("iAPActionFromData",()=>{var r
const o=xu(e,t)
if(!o)return null
const s=new _q(VU),a=kq.from(q(o,gj)),c=Be(null!==(r=n.productVariantData)&&void 0!==r?r:Fe(e,o))
i(c)&&a.param(pq.productVariantID,c)
const l=a.toString(),u=q(t,rB),d=Y(t,ZD)
return s.pageUrl=function(e,t,n,r){const o=(new hJ).param(wq,t).param(pq.offerName,n).param(gq,r.toString()).build()
return`${AW}:/${$W}/${CW}/?${o}`}(0,l,u,d),s.title=q(t,jj),Lf(e,s,n),s})}function ku(e,t){return o(t)?0:yg.context(NA,()=>{if(function(e){const t=d(e,QL)
return t&&t===sD}(H(t,aj)))return 1
const e=q(t,BA),n="List"===e||"NumberedList"===e
if(Y(t,k$)||n)return 2
const r=se(t,lG),o=se(t,uG),i=s(r)&&1===r.length,a=s(o)&&1===o.length
return a&&o[0].type===xj||i&&r[0].type===xj?4:a?3:0})}function Ou(e,t,n,a,c,l){return o(t)?null:yg.context(NA,()=>{var u
let f,p
switch(ku(0,t)){case 1:return function(e,t,n){return yg.context("editorialItemExternalLinkActionFromData",()=>{const r=d(H(t,aj),gj),o=new OH(r),i=Ed(e,t,DB)
if(i)o.title=i
else{const e=new kq(r)
o.title=e.host}return Lf(e,o,n),o})}(e,t,n)
case 2:f=HG
const h=kq.from(q(t,gj))
i(c)&&h.param(pq.recoMetrics,JSON.stringify(c)),(0,Ag.isSome)(l)&&!l.isHorizontalShelfContext&&h.param(pq.todayCardConfig,JSON.stringify(l))
const w=null===(u=Kt(t))||void 0===u?void 0:u.id;(0,Ag.isSome)(w)&&h.param(pq.editorialCardId,w),p=h.build()
break
case 3:const g=se(t,uG)[0]
return Iu(e,g,n,a)
case 4:const m=se(t,lG),v=s(m)&&1===m.length?m[0]:se(t,uG)[0],y=ie(e,v,Tj)
if(o(y))return null
const A=Ni(e,v,y,!1,!1,bj,rG,!1,!1,n,!1,!0,null,!1,!1)
return r(A)||A instanceof Date?null:Mi(e,v,y,A,n,!0)
case 5:f=Vj,p=da(e,t.href)
break
default:f=Ej,p=d(H(t,aj),gj)}if((0,Ag.isNothing)(p))return null
const h=new _q(f)
h.pageUrl=p
let w=Ed(e,t,jj)
return r(w)&&(w=d(t,MG)),h.title=w,Lf(e,h,n),h})}function Eu(e,t,n,r){var o,s,a,c
if(!t)return null
const l=null!==(o=r.clientIdentifierOverride)&&void 0!==o?o:null,u=null!==(s=r.externalDeepLinkUrl)&&void 0!==s?s:null,f=!(null!==(a=r.isCppDeepLinkEligible)&&void 0!==a&&a),p=null!==(c=r.productVariantData)&&void 0!==c?c:Fe(e,t)
return yg.context("productActionFromData",()=>{var r,o,s
let a=q(t,gj)
if(!a)return yg.unexpectedNull(gG,fj,gj),null
let c={}
const h=new kq(a)
if(n.isAdvert){const o=d(t,UA)
null!==o&&o.length>0&&h.param(rX,o)
const i=null===(r=n.pageInformation.iAdInfo)||void 0===r?void 0:r.clickFields
h.param(nX,JSON.stringify(i)),c={iAdClickFields:m(i),iAdLineItem:o}
const s=lo(0,t)
if((0,Ag.isSome)(s)){const r=Od(e,t)?W$:qD,o=to(0,n.pageInformation),i=q(t,zD),a=Y(t,ZG)?LU:Bj,l=new jY(s,t.id,i,r,"productPageDismissed",a,o)
h.param(oX,JSON.stringify(l)),c.iAdDismissAdActionMetrics=m(l)}}const w=Be(p)
i(w)&&h.param(pq.productVariantID,w),c.externalDeepLinkUrl=u,i(u)&&h.param(wJ,u),c.isCppDeepLinkDisabled=f,h.param(gJ,f.toString()),c.clientIdentifierOverride=l,(null==l?void 0:l.length)>0&&h.param(GA,l)
const g=null===(s=null===(o=n.pageInformation)||void 0===o?void 0:o.searchTermContext)||void 0===s?void 0:s.term;(0,Ag.isSome)(g)&&h.param(bG,g),a=h.toString()
const v=new _q(VU)
v.pageUrl=a,v.pageData=Vl(e,t,c),v.title=q(t,jj),n&&n.pageInformation&&(v.referrerUrl=n.pageInformation.pageUrl)
const y=Y(t,ZG)
return Lf(e,v,y?{...n,offerType:LU,offerReleaseDate:Pt(0,t)}:n,!0),v})}function Ru(e,t){const n=W(t,zk)
return s(n)?n[0]:q(t,jj)}function Du(e,t){if(!t)return!1
if(e.client.isCompanionVisionApp)return!0
const n=function(e,t,n){return Ce(e,t,rd(0,t,n)?AG:eG)}(e,t,e.appleSilicon.isSupportEnabled)
if(o(n))return!0
const r=n.split(" ")
return e.client.deviceHasCapabilitiesIncludingCompatibilityCheckIsVisionOSCompatibleIOSApp(r,!1)}function _u(e,t){if(!t)return null
switch(t.type){case CU:return ie(e,t,yF)
case jU:return ie(e,t,TF)}return t}function Lu(e){if(!e)return null
const t=p(e,dM)
if(s(t))return t
const n=p(e,NR)
return s(n)?n:null}function xu(e,t){if(!t)return null
switch(t.type){case CU:return ie(e,t,qL)
case jU:const n=ie(e,t,TF)
return ie(e,n,Tj)}return ie(e,t,Tj)}function Mu(e,t){t.bag.arcadeDownloadPacksMetricsEventsEnabled||(e.clickAction.actionMetrics.clearAll(),e.buttonAction.actionMetrics.clearAll(),e.buttonAction instanceof MH&&e.buttonAction.defaultAction.actionMetrics.clearAll()),t.bag.arcadeDownloadPacksImpressionEventsEnabled||(e.impressionMetrics=null)}function $u(e,t){switch(t){case D$:case WC:case uj:return 1
case nG:return 2
case _$:return 3
default:return 0}}function Fu(e,t,n){return yg.context("artworkFromApiArtwork",()=>{var o
const s=!!i(n.allowingTransparency)&&n.allowingTransparency,a=!!i(n.withJoeColorPlaceholder)&&n.withJoeColorPlaceholder,c=d(t,gj)
if(r(c))return null
const u=l(t,"hasP3"),p=[ae(e,s,u,n.useCase)]
let h
if(l(t,"supportsLayeredImage"),s)h=G(L$)
else if(a){const e=F(d(t,UN))
r(e)||(h=e)}r(h)&&(h=G(qC))
const w=null!==(o=n.overrideTextColorKey)&&void 0!==o?o:zC,g=F(d(t,w)),m=new AV(c,n.overrideWidth||f(t,AN),n.overrideHeight||f(t,VN),p)
return m.backgroundColor=h,m.checksum=d(t,YC),i(g)&&(m.textColor=g),i(n.style)&&(m.style=n.style),i(n.cropCode)&&(m.crop=n.cropCode),i(n.contentMode)&&(m.contentMode=n.contentMode),m})}function Nu(e,t,n,r){return yg.context(Xv,()=>{const o=Gu(e,t,r)
if(!i(o))return null
const s=new Nq(o),a=q(t,jj),c=vf(e,t,a,n)
return pf(e,s,c),s})}function Bu(e,t,n,r){return yg.context(Xv,()=>{const i=[]
o(n.targetType)&&(n.targetType=_j)
for(const o of t){const t=Nu(e,o,n,r)
t&&(i.push(t),af(n.locationTracker))}return i})}function Uu(e,t,n,r){const i=Pe(e,t,"editorialArtwork.searchCategoryBrick")
if(o(i))return null
let s=r
n===pm.seeAllPage&&(s=Ug.Density1)
let a=[],c=[]
switch(s){case Ug.Density1:const e=n===pm.categoryBreakout?"1191":"2350"
i[AN]=e,i[VN]=mD,a=["SCB.ApSCBL01","SCB.ApSCBL03"],c=[bg.right,bg.left]
break
case Ug.Density2:i[AN]="2482",i[VN]=mD,a=["SCB.ApSCBS01","SCB.ApSCBS02"],c=[bg.left,bg.right]
break
case Ug.Density3:i[AN]=mD,i[VN]=mD,a=["cc"],c=[bg.scaleAspectFit]}return a.map((t,n)=>Fu(e,i,{cropCode:t,contentMode:n<c.length?c[n]:null,useCase:0,withJoeColorPlaceholder:!0}))}function Gu(e,t,n,o,s,a){return yg.context("iconFromData",()=>{if(!t)return yg.unexpectedNull(gG,FB),null
const c=t.type,l=null!=a?a:ju(e,t,o),u=o||e.host.clientIdentifier,d=we(t,l,JC)
if((u===JV||"VisionAppStore"===u||Oe(e,t,FN))&&i(d))return Fu(e,d,{...n,style:lx,withJoeColorPlaceholder:!0})
const f=Id(e,t),p=Sd(e,t)&&(u===KV||f),h=we(t,l,KC)
if(p&&i(h))return Fu(e,h,{...n,style:DM})
let w
return c===$G?(w=H(t,_j),Fu(e,w,{...n,style:fN})):c===Pj?(w=H(t,_j),Fu(e,w,{...n,style:AF,allowingTransparency:!0})):(r(s)&&(s=Fe(e,t)),w=function(e,t,n,r){return _e(e,t,r,_j,n)}(e,t,l,s),Fu(e,w,l===$B||o===QV?{...n,style:vD}:l===qU||"VisionAppStore"===u?{...n,style:lx}:l===tG?{...n,style:_M,allowingTransparency:!0}:{...n,style:AF}))})}function ju(e,t,n){switch(n){case JV:case KV:return dj
case QV:return $B
case"VisionAppStore":return qU
default:return Re(e,t,n)}}function Vu(e,t,n,r){if(!t)return null
const o=function(e){switch(e){case Lj:return sG
case Oj:return cG
case"tv":return"tv"
case Fj:return Mm
case Mj:return"macbook"
case kG:return TL
case wj:return"visionpro"
default:ue(e)}}(t),i=Ld(0,n),s=function(e,t){switch(t){case XC:return 13/q1.width
case QC:return 11/z1.width
case ZC:return 5.5/Y1.width
case AD:return a2/J1.width
case yD:return a2/K1.width
default:return null}}(0,n),a=function(e,t){switch(t){case XC:return 30/q1.width
case AD:return s2/J1.width
case yD:return s2/K1.width
default:return Ld(0,t)}}(0,n)
return new bV(t,n,o,r,i,s,a)}function Hu(e,t,n,r,o,i=!1,s){const a=Wu(e,t,n,null,null,i,s)
if(!a)return null
const c=a.videos,l=[]
if(c&&c.length>0)for(const t of c)yo(e,t,{...r,id:o}),l.push(t)
let u=null
return l.length>0&&(u=new ez,u.videos=l,u.mediaPlatform=a.mediaPlatform),u}function Wu(e,t,n,o=null,s=null,a=!1,l){return yg.context("platformVideoPreviewFromData",()=>{r(s)&&(s=Fe(e,t))
const u=function(e,t,n,r,o){return _e(e,t,n,r?ik:oB,void 0)}(e,t,s,a),h={}
if(!u)return null
let w=Ku(e,t,e.host.clientIdentifier,e.client.deviceType)
if(i(o)){const e=[]
for(const t of w)o.includes(t)&&e.push(t)
w=e}if(0===w.length)return null
for(const t of w){const r=fd(e,t,e.client.screenSize)
for(const t of Object.keys(u)){const r=c(u,t),o=[]
for(const s of r){const r=p(s,TN)
if(!r){yg.unexpectedNull(gG,IF,`videoPreviewsByType.${t}.previewFrame`)
continue}const a=d(s,YG)
if(!a){yg.unexpectedNull(gG,fj,`videoPreviewsByType.${t}.video`)
continue}const c=ce(e,d(r,gj),f(r,AN),f(r,VN),null,null,d(r,YC))
i(l)&&(c.crop=l),o.push(new VV(a,c,n))}h[t]=o}for(const e of r)if(h[e])return new C1(h[e],Vu(0,t,e))}return null})}function qu(e,t){return yg.context("videoPreviewsFromApiPlatformData",()=>{const n=Wu(e,t,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}})
return n?n.videos:[]})}function zu(e,t,n,o=null,i,s,a=!1,c){return yg.context("screenshotsFromData",()=>{const l=[]
r(s)&&(s=Fe(e,t))
let u=o
if(!u||0===u.length){const n=i||e.host.clientIdentifier
let r=e.client.deviceType
n===JV&&(r=Fj),"VisionAppStore"!==i&&"com.apple.visionproapp"!==i||(r=wj),u=Ku(e,t,n,r)}for(const r of u){const o=[]
let i
if(r===kG?(i=Cd(e,t,dj),Pd(e,t,dj)&&o.push("faceTime")):i="tv"===r?kd(e,t,s,a,$B):r===wj?kd(e,t,s,a,qU):r===Mj?kd(e,t,s,a,tG):kd(e,t,s,a),!i)continue
const u=Ju(e,i,r,n,o,c)
u&&l.push(u)}return l})}function Yu(e,t,n,r=null,o=null,i){return function(e,t,n){const r=[]
if(n&&n.length>0){const o=n.map(e=>e.mediaPlatform)
for(const i of n){const n=[]
for(const e of i.artwork){const t=new Vq
t.screenshot=e,n.push(t)}const s=i.mediaPlatform,a=new Hq(n,s,o,td(e,s),Qu(e,t,o),Xu(e,t,o))
r.push(a)}}return r}(e,t,zu(e,t,n,r,i,o))}function Ju(e,t,n,r,o,i){const a=function(e,t){return t===kG?e.client.deviceType===Oj?Oj:Lj:t}(e,n),l=fd(e,a,e.client.screenSize)
let u,d=null
for(let e=0;e<l.length&&!s(d);e++)d=c(t,l[e]),u=l[e]
if(s(d)){const t=d.map(function(t){return Fu(e,t,{useCase:r,cropCode:i})}),s=Vu(0,n,u,o)
return new TV(t,s)}return null}function Ku(e,t,n,r){return de(t,`sortedAppPlatformsFromData.${n}.${r}`,()=>{const o=Zu(e,t),i=[]
let s=[]
const a=function(e,t){-1===s.indexOf(e)&&-1===i.indexOf(e)&&-1!==o.indexOf(e)&&(s.push(e),t&&i.push(t))}
switch("VisionAppStore"!==n&&"com.apple.visionproapp"!==n||a(wj),n){case JV:a(Fj)
break
case KV:a(kG)}switch(r){case Lj:a(Lj)
break
case Oj:a(Oj)
break
case"tv":a("tv")
break
case Fj:a(Fj)
break
case Mj:a(Mj)
break
case wj:a(wj)}return"VisionAppStore"!==n&&"com.apple.visionproapp"!==n||(a(Oj),a(Lj)),e.appleSilicon.isSupportEnabled?(a(Oj),a(Lj)):(a(Lj),a(Oj)),a(Mj),a(wj),a("tv"),a(Fj),a(kG),s=s.filter(function(e){return-1===i.indexOf(e)}),s})}function Zu(e,t){return t?de(t,"supportedAppPlatformsFromData",()=>{const n=Sd(e,t,dj),r=Id(e,t),o=function(e,t){return Oe(e,t,YU)}(e,t),i=W(t,iB),s=[]
for(const e of i)switch(e){case sG:r||s.push(Lj)
break
case cG:r||s.push(Oj)
break
case EF:s.push("tv")
break
case Fj:s.push(Fj)
break
case JB:s.push(wj)}return n&&s.push(kG),o&&s.push(Fj),Ae(e,t,Mj)&&s.push(Mj),s}):null}function Qu(e,t,n){if(ed(e,t,n)){const t=n[0].appPlatform.toUpperCase()
return e.loc.string(`ONLY_FOR_${t}_APP`)}let r=n.reduce((e,t)=>e.concat(nd(t)),[])
try{return e.loc.tryString(`PLATFORMS_${r.join("_")}`)}catch(t){return r=["PHONE","PAD","MAC","VISION","TV","WATCH","MESSAGES","FACETIME"].filter(e=>r.includes(e)),e.loc.string(`PLATFORMS_${r.join("_")}`)}}function Xu(e,t,n){return ed(e,t,n)?"top":"bottom"}function ed(e,t,n){if(1===n.length){const r=n[0],o=rd(0,t,e.appleSilicon.isSupportEnabled),i=!1,s=ad(sd(0,e.client.deviceType,o,i),r.appPlatform),a=0===r.supplementaryAppPlatforms.length,c=r.appPlatform!==e.client.deviceType
if(a&&c&&!s)return!0}return!1}function td(e,t){const n=nd(t)
return e.loc.string(`PLATFORMS_${n.join("_")}`)}function nd(e){const t=e.appPlatform.toUpperCase(),n=e.supplementaryAppPlatforms.map(e=>e.toUpperCase())
return[t].concat(n)}function rd(e,t,n){return n&&Y(t,Km)}function od(e,t){let n
return e.isAvailable(eV)&&[HN,RF].includes(e.client.buildType)&&(0,Ag.isSome)(e.ads.fetchAppBinaryTraitsOverride)&&(n=e.ads.fetchAppBinaryTraitsOverride()),(0,Ag.isNothing)(n)&&(n=ge(t,dj,ey)),n}function id(e,t,n){if(rd(0,t,n)){const n=Ce(e,t,"minimumMacOSVersion")
if(s(n))return n}return me(t,Re(e,t),pG)}function sd(e,t,n,r){switch(t){case Lj:return[Lj,kG]
case Oj:return[Lj,Oj,kG]
case"tv":return["tv"]
case Fj:return[Fj]
case Mj:return n?[Mj,Lj,Oj]:[Mj]
case wj:return r?[wj,Lj,Oj]:[wj]
default:return[]}}function ad(e,t){return-1!==e.indexOf(t)}function cd(e,t,n,r,o,i,s=!0){const a=function(e,t,n,r,o){let i
switch(n){case Lj:return i=et(e),(0,Ag.isSome)(t)&&i.isSystemAppFromData(t)?[Lj,Fj,kG]:[Lj,Fj,kG,"tv",wj]
case Oj:return i=et(e),(0,Ag.isSome)(t)&&i.isSystemAppFromData(t)?[Lj,Oj,kG]:[Lj,Oj,kG,"tv",wj]
case"tv":return["tv"]
case Fj:return[Fj]
case Mj:return r?[Mj,Lj,Oj]:[Mj]
case wj:return o?[wj,Lj,Oj]:[wj]
default:return[]}}(e,t,r,o,i)
return!!a.some(e=>ad(n,e))}function ld(e,t){var n
const o=new I1
if(e.client.deviceType!==Mj)return o
if(t.type!==Pj)return o.runsOnIntel=null===(n=ke(e,t,"runsOnIntel",De(e)))||void 0===n||n,o.runsOnAppleSilicon=Oe(e,t,"runsOnAppleSilicon",De(e)),o.requiresRosetta=Oe(e,t,ty,De(e)),o
const i=se(t,Gj)
if(0===i.length)return o
for(const t of i){if(r(t.attributes))continue
const n=ld(e,t)
o.runsOnIntel=o.runsOnIntel&&n.runsOnIntel,o.runsOnAppleSilicon=o.runsOnAppleSilicon&&n.runsOnAppleSilicon,o.requiresRosetta=o.requiresRosetta||n.requiresRosetta}return o}function ud(e,t,n,r){const o=ld(e,t)
return n?o.runsOnAppleSilicon&&(!o.requiresRosetta||o.requiresRosetta&&r):o.runsOnIntel}function dd(e,t,n,r,o){const i=function(e,t,n,r){switch(t){case Lj:return[Lj,Fj,kG]
case Oj:return[Lj,Oj,kG]
case"tv":return["tv"]
case Fj:return[Fj]
case Mj:return n?[Mj,Lj,Oj]:[Mj]
case wj:return r?[wj,Lj,Oj]:[wj]
default:return[]}}(0,n,r,o)
return i.some(e=>ad(t,e))}function fd(e,t,n){switch(t){case Mj:return[Mj]
case Fj:return[yD,AD,ZC,QC,XC]
case"tv":return["appleTV"]
case wj:return["appleVisionPro"]
case Oj:{const t=[]
return(n.isEqualTo(N1)||n.isEqualTo(B1)||n.isEqualTo(j1)||n.isEqualTo(V1))&&e.client.screenCornerRadius>0?(t.push(DF),t.push(_F),t.push(x$),t.push(M$),t.push(cG)):n.isEqualTo(F1)?(t.push(x$),t.push(DF),t.push(_F),t.push(M$),t.push(cG)):n.isEqualTo(M1)||n.isEqualTo($1)||n.isEqualTo(U1)||n.isEqualTo(G1)||n.isEqualTo(H1)||n.isEqualTo(W1)?(t.push(_F),t.push(DF),t.push(x$),t.push(M$),t.push(cG)):n.isEqualTo(x1)?(t.push(M$),t.push(cG),t.push(_F),t.push(x$),t.push(DF)):n.isEqualTo(Z1)?(t.push(_F),t.push(x$),t.push(DF),t.push(M$),t.push(cG)):n.isEqualTo(L1)?(t.push(cG),t.push(M$),t.push(_F),t.push(x$),t.push(DF)):(t.push(DF),t.push(_F),t.push(cG),t.push(M$),t.push(x$)),t}case Lj:{let e
e=n.isEqualTo(k1)||n.isEqualTo(e2)?ek:n.isEqualTo(O1)||n.isEqualTo(Q1)||n.isEqualTo(X1)?TD:n.isEqualTo(_1)?sG:n.isEqualTo(D1)?ny:n.isEqualTo(R1)?ry:n.isEqualTo(E1)?oy:n.isEqualTo(t2)||n.isEqualTo(r2)?tk:n.isEqualTo(n2)||n.isEqualTo(o2)?nk:TD
const t=i2.indexOf(e),r=i2.slice(0,t)
r.reverse()
const o=i2.slice(t+1)
return[e].concat(r,o)}default:return[]}}function pd(e,t){if(r(t))return null
const n=Pe(e,t,Wv),o=Pe(e,t,qv),i=rd(0,t,!0)
if(Te(e,t,Mj)&&!i){const i=e.bag.enableProductPageInstallSize?function(e,t){const n=we(t,tG,zv)
if((0,Ag.isNothing)(n))return null
const r=n[cy]
return(0,Ag.isNothing)(r)?null:f(r)}(0,t):function(e,t){const n=At(e,t)
if(r(n))return null
const o=c(n,"assets")
if(!o.length)return null
for(const e of o)if(d(e,"flavor")===IT)return f(e,S_)
return null}(e,t)
if(s(o)){const e=f(o,iy)
return new HV(i,null,null,e)}if(s(n)){const e=f(n,sy),t=f(n,ay)
return new HV(i,e,t,null)}return new HV(i,null,null,null)}{const r=H(t,Vv)
if(r){let t=[]
e.client.thinnedApplicationVariantIdentifier&&(t=e.client.thinnedApplicationVariantIdentifier.split(" ")),t=t.concat([e.host.deviceModel,"universal"])
for(const e of t){const t=f(r[e])
if(t){if(s(o)){const e=f(o,iy)
return new HV(t,null,null,e)}if(s(n)){const e=f(n,sy),r=f(n,ay)
return new HV(t,e,r,null)}return new HV(t,null,null,null)}}}}return null}function hd(e,t,n){let r,s=null,a=null,c=null,l=null
switch(e.client.deviceType){case Mj:n.supportsArcade?(s=rk,c="sr"):(s="editorialArtwork.centeredFullscreenBackground",c="ep")
break
case"tv":n.presentedInTopShelf?(s=ok,c="sr"):(s=rk,c="ta",a="editorialArtwork.fullscreenBackground",l="sr")
break
case wj:s="editorialArtwork.productUberStatic16x9",c="sr"
break
default:n.supportsArcade?n.prefersCompactVariant||e.client.isPhone?(s="editorialArtwork.splashTall",c="oc"):(s=rk,c="oh"):(s=bD,c="sr")}return r=Pe(e,t,s),null!==a&&o(r)&&(r=Pe(e,t,a),null!==l&&(c=l)),i(r)&&i(c)?Fu(e,r,{cropCode:c,useCase:21,withJoeColorPlaceholder:!0,overrideHeight:null,overrideWidth:null}):null}function wd(e,t,n,o,a){let c=[]
if(s(o))c=o
else switch(e.client.deviceType){case Mj:case"tv":c=[LM]
break
case Oj:c=[SD]
break
case wj:c=["productUberMotion16x9"]
break
default:c=[xM]}let l=null,u=null
for(const n of c)if(l=Pe(e,t,[ij,n]),u=Pe(e,t,[ij,n,TN]),s(l))break
const f=null!=a?a:Fu(e,u,{useCase:n,withJoeColorPlaceholder:!0,cropCode:"sr"})
if(i(l)){const e=d(l,YG)
if(r(e))return null
let t,n
return t={prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},n={muteUnmute:!0},new VV(e,f,{allowsAutoPlay:!0,looping:!0,canPlayFullScreen:!1,showPlaybackControls:!1,playbackControls:t,autoPlayPlaybackControls:n})}return null}function gd(e,t,n){let r=null
switch(e.client.deviceType){case Mj:case"tv":case Lj:case wj:r=[LM,SD,xM]
break
default:r=[SD,LM,xM]}return wd(e,t,21,r,n)}function md(e,t){return i(t)?`${AW}:/${BW}/${YW}?${pq.href}=${t.href}`:null}function vd(e,t,n){return qe(e,new Uz(e).forType(EM).addingQuery(OF,Gj).addingQuery(wG,n).addingQuery(fG,t).includingMacOSCompatibleIOSAppsWhenSupported(!0)).toString()}function yd(e,t){switch(t){case YV:case XV:return"appStore"
case JV:return Fj
case KV:return kG
case QV:return PD
default:return null}}function Ad(e,t){switch(t){case 6:return["L","AgeRatingL"]
case 7:return["10","AgeRating10"]
case 8:return["12","AgeRating12"]
case 9:return["14","AgeRating14"]
case 10:return["16","AgeRating16"]
case 11:return["18","AgeRating18"]
case 12:return["AL","AgeRatingL-Official"]
case 13:return["A10","AgeRating10-Official"]
case 14:return["A12","AgeRating12-Official"]
case 15:return["A14","AgeRating14-Official"]
case 16:return["A16","AgeRating16-Official"]
case 17:return["A18","AgeRating18-Official"]
case 20:return["All","AgeRating-KR-All"]
case 21:return["12","AgeRating-KR-12"]
case 22:return["15","AgeRating-KR-15"]
case 31:return["15+","AgeRating-AU-15"]
case 32:return e.props.isNotEnabled(dy)?["18+",fy]:["R 18+",fy]
case 47:return["18+","AgeRating-FR-18"]
default:return}}function Td(e,t){var n
return null===(n=Ad(e,t))||void 0===n?void 0:n[1]}function bd(e,t){var n
return null===(n=Ad(e,t))||void 0===n?void 0:n[0]}function Sd(e,t,n){return Oe(e,t,"hasMessagesExtension",n)}function Pd(e,t,n){return Oe(e,t,lD,n)}function Id(e,t){return Oe(e,t,"isHiddenFromSpringboard")}function Cd(e,t,n){return Pe(e,t,cD,n)}function kd(e,t,n,r,o){return _e(e,t,n,r?NL:bB,o)}function Od(e,t,n){return Oe(e,t,bN,n)}function Ed(e,t,n,r=!1,o){var i,s
if((0,Ag.isNothing)(t))return null
let a
if(r){const r=Kt(t)
K(r)&&(a=Ce(e,r,[OU,n],o))}return a=null!==(s=null!==(i=null!=a?a:Ce(e,t,[R$,n],o))&&void 0!==i?i:Ce(e,t,[OU,n],o))&&void 0!==s?s:Ce(e,t,["itunesNotes",n],o),a}function Rd(e,t,n,r=!1){var o
let i
if(r){const r=Kt(t)
K(r)&&(i=Ce(e,r,[OU,n]))}return i=null!==(o=null!=i?i:Ce(e,t,[R$,n]))&&void 0!==o?o:Ce(e,t,[OU,n]),i}function Dd(e,t){return de(t,"isMacOSInstaller",()=>!1)}function _d(e,t){const n=et(e)
return!(!function(e,t,n){if(n&&et(e).isSystemAppFromData(t)){const e=q(t,"watchBundleId")
if(s(e))switch(e){case"com.apple.mobilemail.watchkitapp":case"com.apple.news.watchkitapp":case"com.apple.iBooks.watchkitapp":return!0
default:return!1}}return!1}(e,t,e.client.isTinkerWatch)&&(!e.client.isTinkerWatch||(n.isSystemAppFromData(t)?Oe(e,t,YI)||Oe(e,t,FN):Oe(e,t,zI)||Oe(e,t,FN))))}function Ld(e,t){switch(t){case DF:return 18/N1.width
case _F:return 18/M1.width
case ek:return 41.5/k1.width
case TD:return 39/O1.width
case tk:return 55/t2.width
case nk:return 55/n2.width
case QC:return 34/z1.width
case ZC:return 55/Y1.width
case AD:return 108/J1.width
case yD:return 108/K1.width
default:return null}}function xd(e,t){if(r(t)||0===t.length)return!0
const n=t.split("."),o=f(n[0])||0,i=f(n[1])||0,s=f(n[2])||0
return e.host.isOSAtLeast(o,i,s)}function Md(e,t){return!r(t)&&0!==t.length&&e.client.isActivePairedWatchSystemVersionBelow(t)}function $d(e,t){switch(t){case uj:case nG:case MM:case $M:case ux:case yN:case ID:return!0
default:return!1}}function Fd(e,t){switch(t){case"LockupSmall":case"LockupLarge":case sk:case ak:case dx:case FM:case fx:case NM:case CD:return!0
default:return!1}}function Nd(e,t,n){const r=At(e,t)
if(d(r,tU)===LU){const n=d(r,LF),o=Ce(e,t,xB)
if(s(o)){if(s(n)){const t=Ye(n),r={"@@expectedDateMY@@":e.loc.string("PreOrder.Date.MonthYear"),"@@expectedDateMDY@@":e.loc.string("PreOrder.Date.MonthDayYear")}
for(const[n,i]of Object.entries(r))if(o.includes(n)){let r=e.loc.formatDateWithContext(i,t,"middleOfSentence")
return o.replace(n,r)}}return o}}return n}function Bd(e,t){const n=ie(e,t,lG)
return s(n)?n:Oe(e,t,k$)?ie(e,t,uG):null}function Ud(e,t){let n=t.targetType
return n||(n=XG),n}function Gd(e){let t=e.idType
return t===zG?t=null:t||(t=tj),t}function jd(e,t){return Od(e,t)?QG:null}function Vd(e,t,n){const r=d(t,tU),o=Ae(e,t,Mj,!0),i=Te(e,t,Mj,!0),s=function(e,t,n,r=!1){const o=new Set(Se(e,t,r))
for(const e of n)if(o.has(e))return!0
return!1}(e,t,[sG,cG,RM,EF,Fj],!0),a=be(e,t,[sG,cG,RM,EF,Fj],!0),c=Ae(e,t,JB,!0),l=Te(e,t,JB,!0)
if(i||o&&n===tG)switch(r){case Gj:return IT
case Pj:return"macSoftwareBundle"}if((l||c&&n===qU)&&r===Gj)return"visionSoftware"
if(a||s||s&&n===dj||s&&n===Fj||s&&n===$B)switch(r){case Gj:return CT
case Pj:return"mobileSoftwareBundle"}switch(r){case $G:return"softwareAddOn"
case PU:return V$
case OD:case kj:return iN
default:return null}}function Hd(e){return null==e?"":e}function Wd(e){if(!e)return null
let t=null
const n=new kq(e).query
if((0,Tg.isSome)(n))for(const e of Object.keys(n))if("referrer"===e){n[e]===dk&&(t="com.apple.siri")
break}return t}function qd(e){var t
return(0,Tg.isNothing)(e)?{}:null!==(t=h(zd(m(e))))&&void 0!==t?t:{}}function zd(e){if(r(e))return null
if(e instanceof Array){const t=[]
for(const n of e){const e=zd(n)
i(e)&&t.push(e)}return t}if(e instanceof Object){const t={}
return Object.keys(e).forEach((n,r,o)=>{const s=zd(e[n])
i(s)&&(t[n]=s)}),t}return e}function Yd(e){if(!e)return null
const t=new kq(e),n=t.query,o=null==n?void 0:n[uN],i=t.pathname
return r(o)||r(i)?null:i.endsWith("/search")?o:null}function Jd(e,t,n,r){if(!t||!n)return Ej
if(t.type===Pj)return BI
const o=n.style
if((0,Tg.isNothing)(o))return Ej
switch(o){case AF:return dj
case _M:return Mj
case vD:return"tv"
case lx:return ju(e,t,null!=r?r:void 0)===qU?wj:Fj
case DM:return kG
case fN:return fN
default:return ue(o),Ej}}function Kd(e,t){if(!i(t))return null
const n={},r=p(t,kO)
if(!s(r))return null
const o=d(r,ET);(0,Tg.isSome)(o)&&(null==o?void 0:o.length)>0&&(n[ET]=o)
const a=d(r,RT);(0,Tg.isSome)(a)&&(null==a?void 0:a.length)>0&&(n[RT]=a)
const c=d(r,DT)
return(0,Tg.isSome)(c)&&(null==c?void 0:c.length)>0&&(n[DT]=c),n.marketing={marketingItemId:t.id},n}function Zd(e,t,n){let o=null
return i(e)&&(o=y(e)),i(t)&&(r(o)&&(o={}),o.odpModuleUpdate=t.toString()),s(n)&&(r(o)&&(o={}),o.userSegment=n),o}function Qd(e,t,n){const r=uf(t.locationTracker)
return[cf(0,t,n),...r]}function Xd(e,t,n){const r=uf(t.locationTracker)
return[lf(0,t,n),...r]}function ef(e,t,n){const r=new c2
r.location=cf(0,t,n),t.locationTracker.locationStack.unshift(r)}function tf(e,t,n){const r=new c2
r.location=lf(0,t,n),t.locationTracker.locationStack.unshift(r)}function nf(e){0!==e.locationStack.length?e.locationStack.shift():yg.unexpectedType(gG,"non-empty location stack","empty location stack")}function rf(e){const t=df(e)
return t?t.position:e.rootPosition}function of(e){const t=df(e)
return t?t.location:null}function sf(e,t){const n=df(e)
n?n.position=t:e.rootPosition=t}function af(e){const t=df(e)
t?t.position++:e.rootPosition++}function cf(e,t,n){var r
const o=lf(0,t,n)
if(!t.id&&t.locationTracker)o.idType=sj,o.id=rf(t.locationTracker).toString()
else{const e=Gd(t);(0,Ag.isSome)(e)&&(o.idType=e)
let n=t.id;(null===(r=t.anonymizationOptions)||void 0===r?void 0:r.anonymizationString)&&(n=t.anonymizationOptions.anonymizationString),o.id=(0,Ag.isNothing)(n)?"":n}return t.fcKind&&(o.fcKind=t.fcKind),t.displayStyle&&(o.displayStyle=t.displayStyle),t.inAppEventId&&(o.inAppEventId=t.inAppEventId),t.relatedSubjectIds&&(o.relatedSubjectIds=t.relatedSubjectIds),t.canonicalId&&(o.canonicalId=t.canonicalId),t.optimizationEntityId&&(o.optimizationEntityId=t.optimizationEntityId),t.optimizationId&&(o.optimizationId=t.optimizationId),(0,Ag.isSome)(t.rowIndex)&&(o.rowIndex=t.rowIndex),t.productVariantData&&Object.assign(o,Ve(t.productVariantData)),o}function lf(e,t,n){var r,o
let i=n;(null===(r=t.anonymizationOptions)||void 0===r?void 0:r.anonymizationString)&&(i=t.anonymizationOptions.anonymizationString)
const s={locationPosition:rf(t.locationTracker),locationType:Ud(0,t),name:(0,Ag.isNothing)(i)?"":i}
return(0,Ag.isSome)(t.badges)&&(s.badges=null!==(o=m(t.badges))&&void 0!==o?o:void 0),t.recoMetricsData&&Object.assign(s,t.recoMetricsData),s}function uf(e){return e.locationStack.map(e=>e.location)}function df(e){return 0===e.locationStack.length?null:e.locationStack[0]}function ff(e,t){var n,r,a
let c=t.id,l=t.title
if(s(t.anonymizationOptions)){const e=null!==(r=null===(n=t.anonymizationOptions)||void 0===n?void 0:n.anonymizationString)&&void 0!==r?r:"ANONYMOUS"
c=e,l=e}else c&&t.createUniqueImpressionId&&(c=`${c}${l2}${random.nextUUID()}`)
const u={id:Hd(c),name:Hd(l),impressionType:Ud(0,t)},d=Gd(t)
if((0,Tg.isSome)(d)&&(u[d_]=d),t&&t.kind&&(u[JU]=t.kind),t&&t.softwareType&&(u[r$]=t.softwareType),t&&t.recoMetricsData&&Object.assign(u,t.recoMetricsData),t&&t.mercuryMetricsData&&Object.assign(u,t.mercuryMetricsData),t&&t.lockupDisplayStyle&&(u[c_]=t.lockupDisplayStyle),t&&t.locationTracker){const e=rf(t.locationTracker)
u.impressionIndex=e,""===u.id&&(u.id=e.toString(),u[d_]=sj)}return t&&t.modelSource&&(u.modelSource=t.modelSource),i(t.offerType)&&(u[xx]=t.offerType),t&&i(t.displaysArcadeUpsell)&&(u[uT]=t.displaysArcadeUpsell),t&&i(t.isPreorder)&&(u[ZG]=t.isPreorder),i(t.adamId)&&o(t.anonymizationOptions)&&(u[$U]=t.adamId),t&&i(t.badges)&&(u.badges=t.badges),t&&i(t.inAppEventId)&&(u[WL]=t.inAppEventId),t&&i(t.relatedSubjectIds)&&(u.relatedSubjectIds=t.relatedSubjectIds),(null===(a=null==t?void 0:t.hintsEntity)||void 0===a?void 0:a.length)&&(u[u_]=t.hintsEntity),t&&i(t.autoAdvanceInterval)&&(u.autoAdvanceInterval=t.autoAdvanceInterval),i(null==t?void 0:t.fcKind)&&(u.fcKind=t.fcKind),i(null==t?void 0:t.canonicalId)&&(u[GM]=t.canonicalId),i(null==t?void 0:t.displayStyle)&&(u[XU]=t.displayStyle),i(t.productVariantData)&&Object.assign(u,Ve(t.productVariantData)),""===u.id&&e.console.log(`impressionId missing. Tracking broken for ${u.name} of ${u.impressionType}`),u}function pf(e,t,n){t&&(t.impressionMetrics=new SH(ff(e,n)))}function hf(e,t,n){var r
t&&(pf(e,t,n),(n.isAdvert||n.isAdEligible)&&(null===(r=n.pageInformation)||void 0===r?void 0:r.iAdInfo)&&t.impressionMetrics&&(t.impressionMetrics=new PH(t.impressionMetrics,!0)))}function wf(e,t,n,r,o,i,s=!0){var a,c,l,u,d,f
if(!t)return
const p=ff(e,n)
if(s?(p[dT]=Hd(r),p[r_]=Hd(o)):(r&&(p[dT]=r),o&&(p[r_]=o)),i&&(p[fT]=i),(null!==(c=null===(a=null==n?void 0:n.optimizationEntityId)||void 0===a?void 0:a.length)&&void 0!==c?c:0)>0&&(p[pT]=n.optimizationEntityId),(null!==(u=null===(l=null==n?void 0:n.optimizationId)||void 0===l?void 0:l.length)&&void 0!==u?u:0)>0&&(p[hT]=n.optimizationId),(0,Tg.isSome)(null==n?void 0:n.rowIndex)&&(p.rowIndex=n.rowIndex),t.impressionMetrics=new SH(p),(n.isAdvert||n.isAdEligible)&&(null===(d=n.pageInformation)||void 0===d?void 0:d.iAdInfo)){const e=qd(n.pageInformation.iAdInfo.fastImpressionsFieldsForCurrentItem(n.locationTracker,n.adSlotOverride))
Object.assign(t.impressionMetrics.fields,e),t.impressionMetrics=new PH(t.impressionMetrics,!0),n.isAdvert&&(null===(f=t.impressionMetrics)||void 0===f||delete f.fields[r_])}}function gf(e,t,n,r){if(!t||!r)return
pf(e,t,n)
const o=qd(r.fastImpressionsFieldsForCurrentItem(n.locationTracker,n.adSlotOverride))
if((0,Tg.isSome)(t.impressionMetrics)){Object.assign(t.impressionMetrics.fields,o)
const e=l(n.disableFastImpressionsForAds)
t.impressionMetrics=new PH(t.impressionMetrics,!e)}(0,Tg.isSome)(t.impressionMetrics)&&(t.impressionMetrics.fields[XD]=f_)}function mf(e,t,n,r,a,c,l){const u=vf(e,t,n.title,a)
u.lockupDisplayStyle=r,o(u.targetType)&&(u.targetType=XG),c&&Od(e,t)&&(u.displaysArcadeUpsell=!0)
const d=a.id
return s(Lu(t))&&i(d)&&d.length>0&&(u.id=d),u}function vf(e,t,n,r,o){return yg.context("impressionOptions",()=>{const i=Vd(e,t),s=jd(e,t),a={...r,kind:i,softwareType:s,title:n,id:t.id}
return Oe(e,t,ZG,o)&&(a.offerType=LU),a})}function yf(e,t,n,r){return yg.context("impressionOptionsForMetadataRibbonItem",()=>({...e,id:t,kind:null,softwareType:null,title:n,idType:r,targetType:TO}))}function Af(e,t,n){var r,o,i,s
const a=ff(e,(r=t.term,o=n,i=t.entity,s=t.source,yg.context("impressionOptionsForSearchHint",()=>({...o,id:"",kind:null,softwareType:null,title:r,hintsEntity:i,modelSource:s}))))
t.impressionMetrics=new SH(a)}function Tf(e){const t=c(e,FU)
for(const e of t){const t=d(e,"id");(0,Tg.isNothing)(t)||(e.id=bf(t))}}function bf(e){return e.includes(l2)?e.split(l2)[0]:e}function Sf(e,t){var n
const r=null!==(n=t.excludingFields)&&void 0!==n?n:[]
return r.push("amsMetricsID"),new yH(t.fields,t.includingFields,r,t.topic,t.shouldFlush)}function Pf(e,t,n,r,o,i){const s={}
Object.assign(s,r),s[GB]=UF,s[Yk]=n,s[jA]=t
const a=["impressionsSnapshot",GF]
return o&&a.push(...o),Ef(e,s),Sf(0,new yH(s,a,[],Of(0,s),kf(e,s,null,i)))}function If(e,t,n,r,o,i,s){const a={}
Object.assign(a,i),a[uN]=t,a[Yk]=n,a[gF]=r,o&&(a[KM]=o),a[GB]=ej
const c=[t_]
return s&&c.push(...s),Ef(e,a),Sf(0,new yH(a,c,[],Of(0,a),kf(e,a)))}function Cf(e,t,n,r,o){const i={}
Object.assign(i,t),i[GB]=FU,i[ZM]="data-metrics",i[QM]=4
const s=[FU,GF,t_]
return n&&s.push(n_),r&&s.push(XM),o&&s.push("impressionsAppendix"),Ef(e,i),Sf(0,new yH(i,s,[QM],Of(0,i),kf(e,i)))}function kf(e,t,n=null,r){var o,i
const a=t[GB]
let c=!1
if(!s(a))return c
const u=null!=r&&r
switch(a){case UF:c=l(t,u2.hasIAdData)||u
break
case Qk:c=!0
break
case FU:c=l(t,u2.hasIAdData),t[ZM]!==Kk||(null===(o=null==n?void 0:n.iAdInfo)||void 0===o?void 0:o.placementType)!==BG&&(null===(i=null==n?void 0:n.iAdInfo)||void 0===i?void 0:i.placementType)!==vG||(c=!0)
break
case Vj:c=e.host.clientIdentifier===XV&&(l(t,u2.hasIAdData)||u)}return e.host.clientIdentifier,c}function Of(e,t){return t[TM]||vH}function Ef(e,t){e.bag.isMetricsAb2DataFallbackEnabled&&(0,Tg.isSome)(e.experimentCache)&&(t.alt_ab2_data=JSON.stringify(e.experimentCache.createAb2Data()))}function Rf(e,t,n,i){return yg.context("clickOptionsForLockup",()=>{const s=t.id.slice()
let a=t.id
void 0!==n.anonymizationOptions&&n.anonymizationOptions.anonymizationString.length>0&&(a=n.anonymizationOptions.anonymizationString)
const c={...n,...i,id:a,contextualAdamId:s,softwareType:jd(e,t)}
return o(c.targetType)&&(c.targetType=XG),r(c.kind)&&(c.kind=Vd(e,t)),z(t,ZG)&&(c.offerType=LU),c})}function Df(e,t,n,r,o,a,c,l,u){var d,f,p,h,w
const g={}
if(o){const e=o
c&&(null!==(p=null===(f=null===(d=e.iAdInfo)||void 0===d?void 0:d.iAdAdamId)||void 0===f?void 0:f.length)&&void 0!==p?p:0)>0&&(0,Ag.isSome)(e.iAdInfo)&&e.iAdInfo.iAdAdamId===t.adamId&&Object.assign(g,e.iAdInfo.clickFields),s(e.searchTermContext)&&(g[bG]=e.searchTermContext.term)}(0,Ag.isSome)(l)&&Object.assign(g,l),g[zN]={buyParams:t.purchaseConfiguration.buyParams},void 0!==a&&(g[S$]=a),g[DY]=t.adamId,t.actionMetrics.custom[DY]=t.adamId,r&&(g[xx]=LU,i(t.expectedReleaseDate)&&(g[fO]=Je(t.expectedReleaseDate)))
const m=Pf(e,n,Nj,g,void 0,u)
g[DY]=t.adamId,t.actionMetrics.custom[DY]=t.adamId,m.includingFields.push("appState"),t.purchaseConfiguration.isArcadeApp&&m.includingFields.push(oT)
const v=null!==(w=null===(h=null==o?void 0:o.iAdInfo)||void 0===h?void 0:h.shouldIncludeAdRotationFields)&&void 0!==w&&w
c&&v&&m.includingFields.push(XM),c&&e.client.isPad&&m.includingFields.push(n_),t.actionMetrics.addMetricsData(m)}function _f(e,t,n){var r
Lf(e,t,{...n,actionType:pO,subscriptionSKU:null!==(r=e.bag.arcadeProductId)&&void 0!==r?r:void 0,actionContext:QG,targetType:Nj})}function Lf(e,t,n,r=!1,o){var s,a,c,l,u,d,f
let p=n.actionType
p||(p=Dj)
const h={actionType:p}
let w
w=t instanceof EH?t.actions:[t],w.forEach(e=>{if(e instanceof _q){const t=e
h[KM]=t.pageUrl}else if(e instanceof OH){const t=e
h[KM]=t.url}}),n.actionDetails&&(h[zN]=n.actionDetails),n.actionContext&&(h[iT]=n.actionContext),i(n.offerType)&&(h[xx]=n.offerType),i(n.offerReleaseDate)&&(h[fO]=Je(n.offerReleaseDate))
const g=null!==(c=null!==(a=null===(s=n.anonymizationOptions)||void 0===s?void 0:s.anonymizationString)&&void 0!==a?a:null==t?void 0:t.title)&&void 0!==c?c:""
let m
h[S$]=Qd(0,n,g),n.pageInformation&&n.pageInformation.searchTermContext&&(h[bG]=n.pageInformation.searchTermContext.term),i(n.softwareType)&&(h[r$]=n.softwareType),(n.isAdvert||n.isAdEligible)&&r&&(null===(l=n.pageInformation)||void 0===l?void 0:l.iAdInfo)&&(Object.assign(h,n.pageInformation.iAdInfo.clickFields),e.client.isPad&&(m=[n_])),n.mercuryMetricsData&&Object.assign(h,n.mercuryMetricsData),(0,Ag.isSome)(n.subjectIds)&&(h.subjectIds=n.subjectIds)
const v=Pf(e,n.id,null!=o?o:Ud(0,n),h,m)
n.actionContext===QG&&(n.actionType===ZL||n.actionType===pO)&&(v.includingFields.push(oT),v.fields[DY]=n.contextualAdamId,(0,Ag.isSome)(t.adamId)&&(t.actionMetrics.custom[DY]=t.adamId))
const y=null!==(f=null===(d=null===(u=n.pageInformation)||void 0===u?void 0:u.iAdInfo)||void 0===d?void 0:d.shouldIncludeAdRotationFields)&&void 0!==f&&f
n.isAdvert&&y&&v.includingFields.push(XM),t.actionMetrics.addMetricsData(v)}function xf(e,t,n,r){const o={}
i(n)&&(o[KM]=n),r.targetType||(r.targetType=Nj),o[S$]=Xd(0,r,t.title),o[gF]=Dj,o[QL]="button_See All"
const s=Pf(e,hO,Nj,o)
t.actionMetrics.addMetricsData(s)}function Mf(e,t,n){const r={}
r[gF]="filter"
const o=Pf(e,`filter_${n}`,Nj,r)
o.includingFields.push(sT),t.actionMetrics.addMetricsData(o)}function $f(e,t,n,r,o){var i,a,c,l
const u=function(e){switch(e){case Z$:return Z$
case qM:return qM
case gO:return"recentQuery"
case e$:return mO
case vO:return"searchInsteadFor"
case yO:return lT
case AO:return AO
default:return"submit"}}(t.origin);(0,Ag.isNothing)(o)&&(o=new sX({page:aU,pageType:aU,pageId:aU,pageDetails:aT}))
const d={pageInformation:o,locationTracker:r,targetType:n},f={...wt(o),actionType:u,actionUrl:Hd(t.url),location:Xd(0,d,t.term),searchTerm:t.term},p={targetId:t.term},h={};(null===(i=t.prefixTerm)||void 0===i?void 0:i.length)&&(h[Mx]=t.prefixTerm),(null===(a=t.entity)||void 0===a?void 0:a.length)&&(h[u_]=t.entity),s(h)&&(p[zN]=h),(null===(c=t.originatingTerm)||void 0===c?void 0:c.length)&&(f[wO]=t.originatingTerm,p[wO]=t.originatingTerm)
const w=Pf(e,t.term,n,f,[cT])
t.actionMetrics.addMetricsData(w)
const g=If(e,t.term,n,u,null!==(l=t.url)&&void 0!==l?l:null,p,[cT])
t.actionMetrics.addMetricsData(g)}function Ff(e,t=sN,n,r,o,i,s,a=Nj){const c=kq.fromComponents(AW,null,`/${RW}`,{sort:t}),l=new _q(bF,c.build())
return l.title=null!=o?o:e.loc.string(rD),Lf(e,l,{id:null!=i?i:mv,idType:s,targetType:a,actionType:Dj,actionContext:QG,pageInformation:n,locationTracker:r}),l}function Nf(e,t,n,r,o){var s,a,c,l
const u=new AY($j,t,n)
u.purchaseSuccessAction=r,u.carrierLinkSuccessAction=r
const d=new _q(AB);(0,Tg.isSome)(null===(a=null===(s=null==o?void 0:o.pageInformation)||void 0===s?void 0:s.searchTermContext)||void 0===a?void 0:a.term)&&(u.metricsOverlay[bG]=null===(c=o.pageInformation.searchTermContext)||void 0===c?void 0:c.term)
const f=null===(l=e.metricsIdentifiersCache)||void 0===l?void 0:l.getMetricsFieldsForTypes([kg.user,kg.client])
return(0,Tg.isSome)(f)&&(u.metricsOverlay={...u.metricsOverlay,...f}),d.pageData=u,i(o)&&_f(e,d,o),d}function Bf(e,t,n,r){{const e=new CH($j)
return i(r)&&(e.popToRoot=r),new EH([e])}}function Uf(e,t,n,r){const o=e.loc.uppercased(e.loc.string("GAME_CENTER"))
let i
i=ce(e,"resource://GameCenterEyebrow",16,16)
const s={includeSeparator:!e.featureFlags.isEnabled(SF),prefersShelfHeader:e.featureFlags.isEnabled("game_center_shelf_header")}
return(0,Tg.isSome)(r)&&r?{title:t,titleArtwork:i,titleArtworkType:$g.Icon,subtitle:n,configuration:s}:{eyebrow:o,eyebrowArtwork:i,eyebrowArtworkType:$g.Icon,title:t,subtitle:n,configuration:s}}function Gf(e,t=!1){let n=new Uz(e).forType(kU)
return t&&(n=n.addingQuery(JL,wC)),n}function jf(e,t){return Gf(e).withSparseLimit(t).asPartialResponseLimitedToFields([_j]).usingCustomAttributes($e(e))}function Vf(e,t,n){return function(e,t,n){o(t)&&(t=oN)
const r=new Uz(e).forType(AB).addingQuery("serviceType",$j).addingQuery("placement",t).includingMetaKeys(mU,[TB]).includingRelationships([Uj]).includingAttributes([vv,gC])
return i(n)&&r.addingQuery(yv,n),r}(e,t,n)}function Hf(e,t){let n=null
const s=re(t,Av)||re(t,mU)
if(o(s)||o(s.data))return null
const a=s.data.map(e=>e.type===mU?e:null).filter(e=>i(e))
if(o(a))return null
const c=e.bag.marketingItemSelectionTimeout
if(1===a.length||0===c)n=a[0]
else try{n=e.arcade.getMarketingItemWithTimeout(a,c)}catch{n=a[0]}return r(n)?null:{marketingItemData:n}}function Wf(e,t){if(!t)return null
let n=null
const r=c(t,XI)
return r.length>0&&(n=r[0]),i(n)?{marketingItemData:n}:null}function qf(e,t,n){switch(n){case MU:return p2.has(t)
case VM:return d2.has(t)
case JM:return f2.has(t)
default:return!1}}function zf(e,t,n,o,s,a){const c=new AJ(o.metricsPageInformation,o.metricsLocationTracker)
null==a&&((a={useOTDTextStyle:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,isHeroCard:!1}).isHorizontalShelfContext=!0),e.client.deviceType!==Fj&&(a.coercedCollectionTodayCardDisplayStyle=Zg.Grid)
const l=Ki(t,a.coercedCollectionTodayCardDisplayStyle)
if(a.prevailingCropCode=function(e,t,n){switch(t){case MU:return null
case VM:return"el"
case JM:return n===Zg.Video?"sr":"ek"
default:return null}}(0,n,l),a.horizontalCardContentType=n,!i(t.attributes))return s&&s(t),null
const u=qi(e,t,a,c,o.augmentingData)
if(r(u))return null
{u.collapsedHeading=is(0,u),u.inlineDescription=Jf(e,u,t),u.inlineDescription===u.collapsedHeading&&(u.inlineDescription=null)
const n=u.media
n&&n.kind===XN&&(u.title=null)}if(n===JM){const e=u.heroMedia
if(!i(e)||0===e.artworks.length&&0===e.videos.length)return null}return qf(0,u.media.kind,n)&&i(o.filterOutMediaCardKinds)&&o.filterOutMediaCardKinds.has(u.media.kind)?null:(function(e,t,n){if("tv"!==e.client.deviceType||!Y(n,XE))return
const r=new OH("com.apple.Arcade://")
t.clickAction=r}(e,u,t),u)}function Yf(e,t,n,r,s,a,c){if(!i(n))return null
const l=new Ez(n)
return r&&(l.title=r),l.subtitle=s,l.isHorizontal=!0,l.items=n===BF?[Kf(e,t,a.metricsPageInformation,a.metricsLocationTracker,()=>!0,c)]:function(e,t,n,r,i,s){const a=[]
for(const s of t){const t=zf(e,s,n,r,i,void 0)
o(t)||(a.push(t),af(r.metricsLocationTracker))}return a}(e,t,n,a,c),l}function Jf(e,t,n){{let r=Rd(e,n,jj)
return i(r)&&(r=r.replace(/\n/g," ")),t.media.kind===XN&&t.overlay instanceof sY&&i(t.overlay.lockup)?t.overlay.lockup.title:r}}function Kf(e,t,n,o,s,a){return yg.context("todayCardsFromPlatformData",()=>{if(!t)return null
const c={useOTDTextStyle:!1,enableFullScreenVideo:!1,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,isHeroCard:!1}
c.coercedCollectionTodayCardDisplayStyle=Zg.Grid,c.prevailingCropCode="fo",c.isHorizontalShelfContext=!0
const l=new AJ(n,o),u=[]
for(const n of t){if(!i(n.attributes)){a&&a(n)
continue}const t=qi(e,n,c,l)
if(!r(t)&&s(t)){t.collapsedHeading=is(0,t),t.inlineDescription=Jf(e,t,n),t.inlineDescription===t.collapsedHeading&&(t.inlineDescription=null)
const r=t.media
r&&r.kind===XN&&(t.title=null),u.push(t)}}return u.length?new pY(u):null})}function Zf(e){return e.props.enabled("shelfBackgroundDarkOverlay")?{type:"darkOverlay"}:{type:_U,color:{type:YB,red:0,green:0,blue:0,alpha:.2}}}function Qf(e,t,n,r){return o(t.remainingItems)?null:`${AW}:/${$W}/${PW}/`+Xf(t,n,r)}function Xf(e,t,n){return e.sourceSequenceId=t.getSequenceId(),e.sourcePageInformation=t.metricsPageInformation,e.sourceLocationTracker=t.locationTracker,e.destinationPageInformation=n,encodeURIComponent(JSON.stringify(e))}function ep(e,t,n,r,o,i,s,a){return tp(e,t.data,n,r,o,i,s,a)}function tp(e,t,n,i,s,a,c,l){if(o(t))return null
const u=[]
return{items:Pu(e,t,{lockupOptions:{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,recoMetricsData:l},artworkUseCase:i,canDisplayArcadeOfferButton:$d(0,s),...r(a)?{}:{offerStyle:a}},shouldConsiderDataPastLastAvailable:!0,contentUnavailable:(e,t)=>(u.push(t),!1),filter:c}),remainingItems:u}}function np(e,t,n){if(!n)return
let r=-1,o=null
n.forEach((e,n)=>{const i=e,s=i,a=i&&i.adamId===t,c=s&&s.productIdentifier===t;(a||c)&&(r=n,o=i,s&&(s.theme="spotlight",s.offerDisplayProperties=s.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,SB,"ad",{type:RR})))}),-1!==r&&(n.splice(r,1),n.splice(0,0,o))}function rp(e){if(-1===v2.indexOf(e.media.kind))return!1
const t=e.clickAction
if(!t)return!0
const n=t.pageUrl
if(!n)return!0
const r=new kq(n),o=op()
for(const e of o)if(new Eq(e).matches(r))return!1
return!0}function op(){return[{protocol:TW,path:`/{countryCode}/${$W}/{appName}/{id}`,query:[`${pq.action}?`,`${pq.offerName}?`,`${pq.isPPT}?`,`${pq.appEventId}?-caseInsensitive`,`${pq.offerItemId}?`,`${pq.isPreloading}?`,`${pq.isViewOnly}?`,`${pq.includeUnlistedApps}?`,`${pq.webBrowser}?`]},{protocol:TW,path:`/{countryCode}/${NW}/{appName}/{id}`,query:[`${pq.action}?`,`${pq.offerName}?`,`${pq.isPreloading}?`,`${pq.isViewOnly}?`,`${pq.includeUnlistedApps}?`]},{protocol:TW,path:`/{countryCode}/${$W}/{id}`,query:[`${pq.action}?`,`${pq.offerName}?`,`${pq.appEventId}?-caseInsensitive`,`${pq.offerItemId}?`,`${pq.isPreloading}?`,`${pq.isViewOnly}?`,`${pq.includeUnlistedApps}?`,`${pq.webBrowser}?`]},{protocol:TW,path:`/{countryCode}/${NW}/{id}`,query:[`${pq.action}?`,`${pq.offerName}?`,`${pq.isPreloading}?`,`${pq.isViewOnly}?`,`${pq.includeUnlistedApps}?`]},{protocol:TW,path:`/${$W}/{appName}/{id}`,query:[`${pq.action}?`,`${pq.offerName}?`,`${pq.appEventId}?-caseInsensitive`,`${pq.offerItemId}?`,`${pq.isPreloading}?`,`${pq.isViewOnly}?`,`${pq.includeUnlistedApps}?`,`${pq.webBrowser}?`]},{protocol:TW,path:`/${NW}/{appName}/{id}`,query:[`${pq.action}?`,`${pq.offerName}?`,`${pq.isPreloading}?`,`${pq.isViewOnly}?`,`${pq.includeUnlistedApps}?`]},{protocol:TW,path:`/${$W}/{id}`,query:[`${pq.action}?`,`${pq.offerName}?`,`${pq.appEventId}?-caseInsensitive`,`${pq.offerItemId}?`,`${pq.isPreloading}?`,`${pq.isViewOnly}?`,`${pq.includeUnlistedApps}?`,`${pq.webBrowser}?`]},{protocol:TW,path:`/${$W}/{id}`,query:[`${pq.v0}?`,`${pq.metrics}?`,`${pq.isPreloading}?`,`${pq.isViewOnly}?`,`${pq.includeUnlistedApps}?`,`${pq.webBrowser}?`]},{protocol:TW,path:`/${NW}/{id}`,query:[`${pq.action}?`,`${pq.offerName}?`,`${pq.isPreloading}?`,`${pq.isViewOnly}?`,`${pq.includeUnlistedApps}?`]},{protocol:TW,query:[pq.bundleIdentifier,`${pq.isPreloading}?`,`${pq.isViewOnly}?`,`${pq.includeUnlistedApps}?`,`${pq.webBrowser}?`]},{protocol:TW,query:[pq.action,pq.ids,`${pq.isPurchasesApp}?`,`${pq.isPreloading}?`,`${pq.isViewOnly}?`,`${pq.includeUnlistedApps}?`]},{protocol:TW,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/catalog/{countryCode}/apps/{id}",query:[`${pq.isPreloading}?`,`${pq.isViewOnly}?`,`${pq.includeUnlistedApps}?`]},{protocol:TW,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/catalog/{countryCode}/app-bundles/{id}",query:[]},{protocol:TW,path:"{apiVersion}/catalog/{countryCode}/apps/{id}",query:[`${pq.isPreloading}?`,`${pq.isViewOnly}?`,`${pq.includeUnlistedApps}?`,`${pq.offerItemId}?`]},{protocol:TW,path:"{apiVersion}/catalog/{countryCode}/app-bundles/{id}",query:[`${pq.isPreloading}?`,`${pq.isViewOnly}?`,`${pq.includeUnlistedApps}?`]},{protocol:TW,hostName:`${rq}`,path:`/${FW}/{id}`,query:[`${pq.isPreloading}?`,`${pq.isViewOnly}?`,`${pq.includeUnlistedApps}?`]},{protocol:TW,path:`/${IW}/${EW}`,query:[pq.id,`${pq.v0}?`,`${pq.isPreloading}?`,`${pq.isViewOnly}?`,`${pq.includeUnlistedApps}?`]},{protocol:AW,path:`/${$W}/{id}`,query:[pq.invalidateWidgetsOnFailure,`${pq.metrics}?`,`${pq.offerItemId}?`,`${pq.appEventId}?`,`${pq.isPreloading}?`,`${pq.isViewOnly}?`,`${pq.includeUnlistedApps}?`,`${pq.webBrowser}?`]}]}function ip(e,t,n){const r=n[sU],o=JSON.parse(r)
let i
if(o.isBundleShelf)i=Pj
else switch(o.contentType){case MU:case BF:i=kj
break
case D$:i=$G
break
default:i=Gj}const s=[lj,ij,pG]
return e.appleSilicon.isSupportEnabled&&s.push(AG),new Uz(e).withIdsOfType(o.remainingItems.map(e=>e.id),i).includingAdditionalPlatforms(O(e)).includingAttributes(i===$G?[]:s)}function sp(e,t,n,a,c=!1){const l=n[sU],u=JSON.parse(l,(t,n)=>typeof n===IF&&"iAdInfo"===t&&s(n)?iX.from(e,n):n)
u.isFirstRender=!1
const d=$(t)
u.recoMetricsData=null!=d?d:u.recoMetricsData,n[pq.shelfRefreshType]===Sq&&p1.resetLocationTrackerForSimilarItemsDuringDownloadShelf(e,u)
const p=function(e,t,n,s){return yg.context("shelfFromLookupResponse",()=>{switch(n.onDemandShelfType){case hm.SimilarItems:return function(e,t,n,i){return yg.context("similarItemsSecondaryShelf",()=>{var s,a
if(o(t))return null
if(e.client.isCompanionVisionApp)return null
const c=new p1(n.sourcePageInformation,n.sourceLocationTracker,n.sourceSequenceId),l=qG,u=zF,d={pageInformation:c.metricsPageInformation,locationTracker:c.locationTracker,targetType:l,id:p1.similarItemsShelfId,idType:u,excludeAttribution:!0,recoMetricsData:n.recoMetricsData}
ef(0,d,n.title)
const f=new Ez(n.contentType)
let p
if(no(e,BG)||no(e,vG)){p=ho(0,n.sourcePageInformation.iAdInfo),mo(e,p,i)
const o=function(e,t){var n
const r=null===(n=null==t?void 0:t.onDeviceAd)||void 0===n?void 0:n.positionInfo
if((0,Tg.isNothing)(r)||(0,Tg.isNothing)(t))return null
let o
switch(t.placementType){case BG:o=hN
break
case vG:o=aC}return(0,Tg.isNothing)(o)?null:rc(e,t,{shelfIdentifier:o,slot:r.slot-1})}(e,i)
null===(s=c.metricsPageInformation.iAdInfo)||void 0===s||s.updateForAdResponse(e,i)
const l=function(e,t){if(r(e))return[]
const n=[]
return Object.entries(e.tasks).forEach(([r,o])=>{r.startsWith(t)&&(n.push(o),delete e.tasks[r])}),n}(o,null===(a=of(c.locationTracker))||void 0===a?void 0:a.id)
l.forEach(e=>{(t=t.filter(t=>t.id!==e.data.id)).splice(e.positionInfo.slot,0,e.data)}),f.adIncidents=wo(0,p)}const h=tp(e,t,c,$u(0,n.contentType),n.contentType,n.offerStyle,null,n.recoMetricsData)
if(o(h))return null
f.title=n.title,f.items=h.items,f.isHorizontal=!0
const w=new m2(n.productId,t,n.title,n.shouldInferSeeAllFromFetchesItems,void 0,n.contentType,null,null,null,null,null,hm.SimilarItems),g=Ml(0,n.productId,w,c,n.destinationPageInformation)
return f.refreshUrl=g,t.length<2?f.rowsPerColumn=1:n.supportsArcade?f.rowsPerColumn=2:f.rowsPerColumn=3,c.addImpressionsFieldsToSimilarItemsShelf(e,f,l,u),so(e,[f],BG,d.id,d.pageInformation),nf(c.locationTracker),af(c.locationTracker),f})}(e,t.data,n,s)
case hm.MoreByDeveloper:return function(e,t,n){return yg.context("moreByDeveloperSecondaryShelf",()=>{if(o(t))return null
const r=new p1(n.sourcePageInformation,n.sourceLocationTracker,n.sourceSequenceId)
ef(0,{pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker,targetType:JG,id:`${r.getSequenceId()}`,idType:sj,excludeAttribution:!0,recoMetricsData:n.recoMetricsData},n.title)
const i=new Ez(n.contentType)
i.title=n.title
const s=e.client.isCompanionVisionApp?32768:void 0,a=tp(e,t,r,$u(0,n.contentType),n.contentType,n.offerStyle,s)
if(o(a))return null
if(i.items=a.items,i.isHorizontal=!0,t.length<2?i.rowsPerColumn=1:i.rowsPerColumn=2,(0,Tg.isSome)(n.developerUrl)){const t=new _q(Vj)
t.pageUrl=n.developerUrl,t.title=e.loc.string(xU),xf(e,t,t.pageUrl,{pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker}),i.seeAllAction=t}return r.addImpressionsToShelf(e,i,dG),nf(r.locationTracker),af(r.locationTracker),i})}(e,t.data,n)
case hm.SmallStory:return function(e,t,n){return yg.context("smallStorySecondaryShelf",()=>{if(o(t))return null
const r=new p1(n.sourcePageInformation,n.sourceLocationTracker,n.sourceSequenceId),i={pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker,targetType:JG,id:`${r.getSequenceId()}`,idType:sj,excludeAttribution:!0,recoMetricsData:n.recoMetricsData}
ef(0,i,n.title)
const s={metricsLocationTracker:i.locationTracker,metricsPageInformation:i.pageInformation,filterOutMediaCardKinds:ap(e.host.platform)},a=Yf(e,t,MU,n.title,null,s)
return Array.isArray(a.items)&&(a.items=a.items.filter(e=>!(e instanceof fY)||qf(0,e.media.kind,MU))),a.isHorizontal=!0,r.addImpressionsToShelf(e,a,oG),nf(r.locationTracker),af(r.locationTracker),a})}(e,t.data,n)}const a=new Ez(n.contentType),c=$(t),l={pageInformation:n.sourcePageInformation,locationTracker:n.sourceLocationTracker,excludeAttribution:!0,recoMetricsData:null!=c?c:n.recoMetricsData}
let u
if(n.contentType===BF){const n=Kf(e,t.data,l.pageInformation,l.locationTracker,rp)
i(n)&&(u=[n])}else{const r={metricsOptions:l,offerStyle:n.offerStyle,artworkUseCase:$u(0,n.contentType),canDisplayArcadeOfferButton:$d(0,n.contentType)}
n.contentType===D$&&(r.skipDefaultClickAction=!0)
const o={lockupOptions:r}
n.isBundleShelf&&(o.filter=0)
const i=Su(e,t,o),s={[JV]:lx,[KV]:DM}[e.host.clientIdentifier]
s&&i.sort((e,t)=>{const n=e.icon.style===s,r=t.icon.style===s
return n&&r?0:n&&!r?-1:1})
const a=n.spotlightInAppProductIdentifier
a&&np(0,a,i),u=i}return a.items=u,a.mergeWhenFetched=!0,a})}(e,t,u,a)
if(c&&function(e,t,n,o){if(r(n))return
let i=[]
const s=wt(n),a=ci(e,n,o)
i.push(a)
const c=di(e,n,o).map(e=>e.data)
i=i.concat(c),ai(s),i.forEach(e=>ai(e.fields)),t.pageChangeMetrics={pageFields:s,updatedEvents:i}}(e,p,u.sourcePageInformation),p.refreshUrl=u.refreshUrl,n[pq.shelfRefreshType]===Sq&&p1.addImpressionsFieldsToSimilarItemsDuringDownloadShelf(e,p,u),u.shouldInferSeeAllFromFetchesItems){const t=new _q(Vj)
t.title=e.loc.string(xU)
const n=new Ez(p.contentType)
n.items=function(e,t,n,r=!1){var o,s
if(!t)return null
let a=0
const c=[]
for(const e of t){if(r&&i(null!==(o=e.searchAd)&&void 0!==o?o:null===(s=e.searchAdOpportunity)||void 0===s?void 0:s.searchAd)){a+=1
continue}const t=y(e)
if(n&&t.offerDisplayProperties&&(t.offerDisplayProperties=t.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,n)),a>0){const e=y(t.impressionMetrics.fields),n=f(e.impressionIndex);(0,Ag.isSome)(n)&&(e.impressionIndex=n-a,t.impressionMetrics=new SH(e,t.impressionMetrics.id,t.impressionMetrics.custom))}c.push(t)}return c}(0,p.items,rG,!0)
const r=new xz([n])
ti(e,r,u.destinationPageInformation),r.title=u.title,t.pageData=r,xf(e,t,null,{pageInformation:u.sourcePageInformation,locationTracker:u.sourceLocationTracker}),p.seeAllAction=t}return o(p.items)&&!u.hasExistingContent&&(p.isHidden=!0),p}function ap(e){const t=new Set([aM])
return e===hU&&(t.add(XN),t.add(MI),t.add(rN),t.add($I)),t}async function cp(e,t){return e.props.enabled("campaignAttribution")&&typeof campaignAttribution!==CB?await campaignAttribution.processRedirectURL(t):await e.network.fetch({url:e.bag.redirectUrlEndpoint,method:SN,headers:{"Content-Type":l_},body:`url=${encodeURIComponent(t)}`}).then(e=>e.ok)}async function lp(e,t){const n=e.required(y2)
0!==Tn(e,new kq(t.url)).length&&cp(e,t.url),t.url=function(e,t){const n=new kq(t.url)
if(DC in n.query){const r="com.apple.appstorecomponentsd"===d(t.referrerData,Tj),o="com.apple.AppStore.ProductPageExtension"===e.host.clientIdentifier
return r||o||delete n.query[DC],n.toString()}return t.url}(e,t)
const r=new gg.FetchTimingMetricsBuilder,o=e.addingFetchTimingMetricsBuilder(r)
return await n.fetchAction(o,t.url,t.referrerData).then(n=>{if(!n)throw new Error(`Promise resolved to null action for: ${t.url}`)
if(t.isIncomingURL){const e=[n]
if(n instanceof CH)for(const t of n.actions)e.push(t)
for(const t of e){const e=t.pageData
e&&typeof e===IF&&ex in e&&si(0,e)}}if(n.actionClass===DR){const e=n
e.page===gB||e.page===HG||e.page===EC||e.page===AB||e.page===ML||e.page===$L||e.page===iG||e.page===tx?e.presentationContext=rG:e.page===Lv?e.presentationContext=ZI:e.page===C$?e.presentationContext=WB:t.isIncomingURL?e.presentationContext=YR:(e.presentationContext="replace",e.animationBehavior=ZU)}return t.isIncomingURL&&(e.deepLinks.hasResilientDeepLinks()||e.deepLinks.removeDeepLink(t.url)),r.decorate(n),n}).catch(n=>{let r=[]
n instanceof z0?r=n.reasons.filter(e=>e instanceof kQ):n instanceof kQ&&r.push(n)
for(const n of r)if(204===n.statusCode){const n=new zH(cj)
n.title=e.loc.string("APP_NOT_AVAILABLE_TITLE"),n.message=e.loc.string("APP_NOT_AVAILABLE_MESSAGE"),n.isCancelable=!0
{const r=new CH(Cj)
if(r.title=e.loc.string(RC),w(new kq(t.url).query[xv])){const e=new fW
r.actions=[n,e]}else r.actions=[n]
return r}}throw Error(n.message)})}function up(e,t,n){switch(t){case eC:return function(e,t){const n=gc(e,e.bag.accountUrl)
return n.title=e.loc.string("VIEW_ACCOUNT_INFO",FL),Lf(e,n,{...t,id:iG,actionType:Dj},!1,wF),n}(e,n)
case tC:return function(e,t){const n=e.bag.signup
if((0,Ag.isNothing)(n))return null
const r=gc(e,n)
return e.featureFlags.isEnabled(Xm)?r.title=e.loc.string("ACCOUNT_CREATE_APPLE_ID_REBRAND"):r.title=e.loc.string("ACCOUNT_CREATE_APPLE_ID"),Lf(e,r,{...t,id:iG,actionType:Dj},!1,wF),r}(e,n)
case WR:return function(e,t){if((0,Ag.isNothing)(e.bag.purchaseHistoryUrl))return null
const n=gc(e,e.bag.purchaseHistoryUrl)
return n.title=e.loc.string("ACCOUNT_PURCHASE_HISTORY"),n.presentationContext=YR,Lf(e,n,{...t,id:WR,actionType:Dj},!1,wF),n}(e,n)
case cM:return function(e,t){if(e.user&&e.user.isManagedAppleID)return null
const n=gc(e,e.bag.redeemUrl)
return n.title=e.loc.string("ACCOUNT_REDEEM",oC),Lf(e,n,{...t,id:"redeemGiftCardOrCode",actionType:Dj},!1,wF),n}(e,n)
case nC:return function(e,t){if(!e.bag.isMonetaryGiftingEnabled)return null
const n=gc(e,lM)
return n.title=e.loc.string("ACCOUNT_SEND_GIFT",ev),Lf(e,n,{...t,id:"sendGiftCardByEmail",actionType:Dj},!1,wF),n}(e,n)
case rC:return function(e,t){var n
const r=e.bag.accountTopUpURL
if((0,Ag.isNothing)(r)||o(r))return null
const i=gc(e,r)
return i.title=null!==(n=e.bag.accountTopUpTitle)&&void 0!==n?n:e.loc.string("ACCOUNT_TOP_UP"),Lf(e,i,{...t,id:"addFundsToAppleId",actionType:Dj},!1,wF),i}(e,n)
case qR:return function(e,t){const n=new eW(QG,tv)
return n.title=e.loc.string("ACCOUNT_SETUP_FAMILY_SHARING"),Lf(e,n,{...t,id:"setUpFamilySharing",actionType:Dj},!1,wF),n}(e,n)
case zR:return function(e,t){const n=gc(e,e.bag.manageSubscriptionsV2Url)
return n.title=e.loc.string("ACCOUNT_SUBSCRIPTIONS"),n.presentationContext=YR,Lf(e,n,{...t,id:zR,actionType:Dj},!1,wF),n}(e,n)
default:return null}}function dp(e){const t=new gg.FetchTimingMetricsBuilder,n=e.addingFetchTimingMetricsBuilder(t),r={pageInformation:ei(e,FL,iG,""),locationTracker:{rootPosition:0,locationStack:[]},targetType:aj},o=t.measureModelConstruction(()=>{const t=new x2
return t.links[eC]=up(e,eC,r),t.links[tC]=up(e,tC,r),t.links[cM]=up(e,cM,r),t.links[nC]=up(e,nC,r),t.links[rC]=up(e,rC,r),t.links[qR]=up(e,qR,r),t.links[zR]=up(e,zR,r),t.links[WR]=up(e,WR,r),t})
return ti(n,o,r.pageInformation),o}async function fp(e,t){return await e.required(y2).fetchPage(e,t,k2)}async function pp(e){let t
try{t=await An(e,function(e){return new Uz(e).forType(uR)}(e))}catch{t=void 0}return function(e,t){const r=[],o=new E2,i=new _V(e.loc.string("PERSONALIZATION_DESCRIPTION_OPTED_IN"),dU,tx)
o.addContentItem(new L2(i))
const a=e.bag.personalizedRecommendationsToggleEnabled
if(!a){const t={}
t[e.loc.string(dR)]=gp(e)
const n=new DV(e.loc.string("PERSONALIZATION_DESCRIPTION_FOOTER_OPTED_IN").replace("{account_settings}",e.loc.string(dR)))
o.footer=new uz(n,t)}if(r.push(o),a){const t=new E2
t.addContentItem(new M2(e.loc.string(vP),!1))
const n=new DV(e.loc.string(yP))
t.footer=new uz(n),r.push(t)}{const t=new E2(e.loc.string("PERSONALIZATION_SECTION_USAGE_HEADER")),n=new DV(e.loc.string("PERSONALIZATION_SECTION_USAGE_FOOTER"))
t.footer=new uz(n),t.addContentItem(new D2(e.loc.string("PERSONALIZATION_SECTION_USAGE_CLEAR_DATA"),function(e){const t=new gW
t.title=e.loc.string("PERSONALIZATION_CLEAR_USAGE_DATA_CONFIRMATION_TITLE")
const n=new qH([t])
return n.title=e.loc.string("PERSONALIZATION_CLEAR_USAGE_DATA_CONFIRMATION_HEADER"),n.isCancelable=!0,n.destructiveActionIndex=0,n}(e))),r.push(t)}const c=new E2(e.loc.string("PERSONALIZATION_INTERACTIONS")),l=new DV(e.loc.string("PERSONALIZATION_INTERACTIONS_FOOTER"))
c.footer=new uz(l)
const u=e.bag.purchaseHistoryUrl;(0,Tg.isSome)(u)&&e.props.enabled("personalizedRecommendationsPurchaseHistoryUpleveling")?c.addContentItem(new D2(e.loc.string(AP),wp(e,gB,u,!0),f$)):c.addContentItem(new D2(e.loc.string(AP),wp(e,Bm,null,!0),f$)),c.addContentItem(new D2(e.loc.string("PERSONALIZATION_SUBSCRIPTIONS"),wp(e,null,e.bag.manageSubscriptionsV2Url,!1),f$)),c.addContentItem(new D2(e.loc.string("PERSONALIZATION_PREORDERS"),wp(e,null,e.bag.managePreordersUrl,!0),f$)),c.addContentItem(new D2(e.loc.string("PERSONALIZATION_RATINGS"),wp(e,null,U2,!0),f$)),r.push(c)
const f=new E2(e.loc.string("PERSONALIZATION_ADDITIONAL_INFO")),p=[e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_1"),e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_2"),e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_3"),e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_4"),e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_5")].join("\n"),h=new _V(p,dU,tx)
f.addContentItem(new L2(h)),r.push(f)
const w=n(t,"results.derived-user-info")
if(s(w)){const t=new E2(e.loc.string("ACCOUNT_INFO")),n=["gender","birthyear"]
for(const e of n){const n=d(w,`${e}.label`),r=d(w,`${e}.value`);(null==n?void 0:n.length)>0&&(null==r?void 0:r.length)>0&&t.addContentItem(new _2(n,r))}const o=e.featureFlags.isEnabled(Xm)?"PERSONALIZATION_ACCOUNT_INFO_FOOTER_REBRAND":"PERSONALIZATION_ACCOUNT_INFO_FOOTER",i=new DV(e.loc.string(o))
t.footer=new uz(i),r.push(t)}return new k2(e.loc.string(TP),r)}(e,t)}function hp(e){const t=[],n=e.bag.personalizedRecommendationsToggleEnabled,r=new E2,o=n?e.loc.string("PersonalizedRecommendations.OptedOut.Description"):e.loc.string("PERSONALIZATION_DESCRIPTION_OPTED_OUT"),i=new _V(o)
if(r.addContentItem(new L2(i)),t.push(r),n){const n=new E2
n.addContentItem(new M2(e.loc.string(vP),!1))
const r=new DV(e.loc.string(yP))
n.footer=new uz(r),t.push(n)}else{const n=new E2
n.addContentItem(new D2(e.loc.string(dR),gp(e),f$)),t.push(n)}return new k2(e.loc.string(TP),t)}function wp(e,t,n,r){let o
if((0,Tg.isSome)(t))o=new _q(t,n)
else{if((0,Tg.isNothing)(n))return null
o=gc(e,n)}return r&&(o.presentationContext=YR),o}function gp(e){return wp(e,void 0,e.bag.accountUrl,!1)}async function mp(e,t){const n=new Uz(e).forType(bP).addingQuery(EE,"events-reminders").addingQuery("service",EL).addingQuery(CG,"explicit")
n.isMediaRealmRequest=!0
const r=function(e,t){const n={"events-reminders":{"com.apple.AppStore":{contents:[{id:e,type:xj,notify:t}]}}}
return{method:"PATCH",headers:{"Content-Type":ck},requestBodyString:JSON.stringify(n)}}(t.appEventId,t.shouldSchedule)
return await new Promise((t,o)=>{An(e,n,r).then(e=>{t(!0)}).catch(e=>{o(e)})})}function vp(e){p4||(p4=!0,h4=new X2(e.loc.string("PAGE_FACETS_SORTS_RELEASE_DATE"),r4,sN),w4=new X2(e.loc.string("PAGE_FACETS_SORTS_LAST_UPDATED"),o4,"lastUpdated"),g4=new X2(e.loc.string("PAGE_FACETS_SORTS_NAME"),i4,jj),m4=new X2(e.loc.string("PAGE_FACETS_SORTS_CATEGORY"),s4,HB),v4=new X2(e.loc.string("PAGE_FACETS_DEFAULT_ALL"),null),y4=new X2(e.loc.string("PAGE_FACETS_FILTERS_AGE_VALUE_4PLUS"),"4Plus"),A4=new X2(e.loc.string("PAGE_FACETS_FILTERS_AGE_VALUE_9PLUS"),"9Plus"),T4=new X2(e.loc.string("PAGE_FACETS_FILTERS_AGE_VALUE_12PLUS"),"12Plus"),b4=new X2(e.loc.string(Tv),GG,null,"gamecontroller"),S4=new X2(e.loc.string("PAGE_FACETS_FILTERS_MULTIPLAYER"),GG,null,"person.2"),P4=new X2(e.loc.string(bv),GG),f4[pq.sort]={releaseDate:[h4],lastUpdated:[w4],name:[g4],category:[m4]},f4[pq.ageRating]={"4plus":[y4],"9plus":[A4],"12plus":[T4]},f4[pq.controllerSupport]={true:[b4],false:[]},f4[pq.multiplayerSupport]={true:[S4],false:[]},f4[pq.comingSoon]={true:[P4],false:[]})}function yp(e,t={}){vp(e)
const n={"filter[ageRating]":[v4]}
n[a4]=[h4],n[c4]=[P4]
const r=[pq.sort,pq.ageRating,pq.controllerSupport,pq.multiplayerSupport,pq.comingSoon]
for(const e of r){const r=t[e]
if(o(r))continue
const a=f4[e][r],c=I4[e]
i(a)&&s(c)&&(n[`${c}`]=a)}return n}function Ap(e,t){const n=new tW
return Mf(e,n,t),n}function Tp(e){const t=[lj,ij,YU,eG,oB,bB]
return e.appleSilicon.isSupportEnabled&&t.push(AG),t}async function bp(e,t){const n=e.required(y2),r=kq.from(t.url)
return r.param(pq.requestDescriptor,JSON.stringify(t)),await n.fetchPage(e,r.build(),Bz)}async function Sp(e,t){const n=e.required(y2)
return await n.fetchMoreOfPage(e,t).then(function(e){return e})}function Pp(e,t,n){return yg.context("createShelves",()=>{const r=[]
if(0===t.length)return r
let o=!1
for(const s of t)if(o=o||!K(s.data[0]),o)n.remainingGroups.push(s)
else{const t={index:n.lastShelfIndex,title:kp(e,s),contentType:(i=n.isCompactMode,i?uj:MM),shouldFilter:!1,remainingContent:s.data,groupKind:s.kind,isCompactMode:n.isCompactMode,hasExistingContent:!1,isFirstRender:!0,metricsPageInformation:n.metricsPageInformation,metricsLocationTracker:n.metricsLocationTracker},o=Ip(e,t)
r.push(o),n.lastShelfIndex++}var i
return r})}function Ip(e,t){const n=[],r=new Ez(t.contentType)
r.title=t.title,r.presentationHints={showSupplementaryText:!1},r.isHorizontal=t.groupKind===PF||t.groupKind===HB
const i={id:`${t.index}`,kind:null,softwareType:null,targetType:JG,title:r.title,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,idType:sj}
for(pf(e,r,i),ef(0,i,r.title);s(t.remainingContent)&&K(t.remainingContent[0]);){const r=t.remainingContent.shift(),o={metricsOptions:{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:$(r)},artworkUseCase:1,canDisplayArcadeOfferButton:$d(0,t.contentType),shouldHideArcadeHeader:e.featureFlags.isEnabled(T$),isContainedInPreorderExclusiveShelf:t.groupKind===PF},i=vu(e,r,o,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}},null,null)
Op(e,i,r)&&(i.editorialTagline=null,i.developerTagline=null,n.push(i),af(t.metricsLocationTracker))}return r.mergeWhenFetched=t.hasExistingContent,t.hasExistingContent=t.hasExistingContent||n.length>0,r.items=n,s(t.remainingContent)?r.url=function(e){return o(e.remainingContent)?null:`${AW}:/${RW}/${PW}/?${pq.token}=${encodeURIComponent(JSON.stringify(e))}`}(t):"tv"!==e.client.deviceType&&t.isCompactMode&&r.items.length<3&&(r.rowsPerColumn=r.items.length),nf(t.metricsLocationTracker),r}function Cp(e,t){const n=yp(e,t),r={}
for(const e of Object.keys(n))r[e]=n[e].map(e=>({value:e.value,title:e.title,metricsValue:e.metricsValue,systemImageName:e.systemImageName}))
const o={url:`${AW}:/${RW}`,isCompactMode:!1,selectedFacetOptions:r},i=t[pq.requestDescriptor]
if(s(i)){const e=h(JSON.parse(i))
o.isCompactMode=e.isCompactMode,Object.assign(o.selectedFacetOptions,e.selectedFacetOptions)}return o}function kp(e,t){let n,r,o=null,i=null
if((!t.name||0===t.name.length)&&t.kind!==PF)return""
switch(t.kind){case"releaseDateByDay":o=t.name.split("-"),i=new Date(parseInt(o[0]),parseInt(o[1])-1,parseInt(o[2])),r=e.loc.string("ALL_GAMES_SECTION_TITLE_RELEASE_DATE_SENTENCE"),n=e.loc.formatDateInSentence(r,CP,i)
break
case"lastUpdatedByDay":o=t.name.split("-"),i=new Date(parseInt(o[0]),parseInt(o[1])-1,parseInt(o[2])),r=e.loc.string("ALL_GAMES_SECTION_TITLE_LAST_UPDATED_SENTENCE"),n=e.loc.formatDateInSentence(r,CP,i)
break
case PF:n=e.loc.string("Arcade.SeeAllGames.ComingSoonShelf.Title")
break
default:n=t.name}return n}function Op(e,t,n){if(o(t.trailers)){const r=gd(e,n)
if(s(r)){const e=new ez
r.playbackControls={prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},r.autoPlayPlaybackControls={prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0},r.canPlayFullScreen=!0,e.videos=[r],t.trailers=[e]}}return o(t.trailers)&&function(e){const t=e.screenshots[0]
if(o(t))return
const n=t.artwork[0],r=new VV(E4,n,{allowsAutoPlay:!1,looping:!1,canPlayFullScreen:!1,showPlaybackControls:!1,autoPlayPlaybackControls:{},playbackControls:{}}),i=new ez
i.videos=[r],e.trailers=[i]}(t),s(t.trailers)}async function Ep(e,t){const n=kq.from(t)
return await e.required(y2).fetchPage(e,n.build(),gY)}function Rp(e){let t=0,n=0
for(const r of e.shelves)(0,Tg.isSome)(r.batchGroup)&&r.batchGroup.length>0||(r.batchGroup=`shelfBatchGroup_${t}`,n++,5===n&&(n=0,t++))}async function Dp(e,t){const n=kq.from(t.url)
return n.param(pq.isArcade,"true"),n.param(pq.isSubscribed,`${t.isSubscribed}`),n.param(pq.isTrialAvailable,`${t.isTrialAvailable}`),n.param(pq.isTrialEnrolled,`${t.isTrialEnrolled}`),await e.required(y2).fetchPage(e,n.build(),Nz)}function _p(e,t){const n=new CH($j)
n.popToRoot=!0
const r=new EH([n])
return r.title=t,r}async function Lp(e,t){return await e.required(y2).fetchPage(e,t,yY)}async function xp(e,t){const n=new Promise((n,r)=>{const o=t
s(o)||r(new Error("fetchUpsellGrid called with malformed contentDictionary"))
const i=se(o,Uj),a={pageInformation:new sX({}),locationTracker:{rootPosition:0,locationStack:[]}},c=Bu(e,i,a,{useCase:2}),l=c.shift()
n(new bY(l,c))})
return await n}async function Mp(e,t){const n=h(t,sU)
let r=n.buyParams
r=gt(e,d(t,$U),r,h(t,DP),l(t,_P),l(t,LP),d(t,xP),d(t,MP),d(t,wR),p(t,TB),p(t,$P),h(t,FP),d(t,NP),d(t,"token.extRefApp2"),d(t,"token.extRefUrl2"))
const o=new RY(r),i={product:d(t,VU)||n.productIdentifier,adamId:d(t,$U),buyParams:o.toEncodedMap()}
return await Promise.resolve(i)}async function $p(e,t){const n=t.offerAction,o=t.offerDisplayProperties
if(!n||!o)return await Promise.reject(new Error("Invalid offerToken for personalized offer fetch."))
const i=n.adamId,s={"Content-Type":l_},a={url:e.bag.buyButtonMetadataURL,method:SN,headers:s,body:"ids="+i,signingStyle:$N},l=e.network.fetch(a)
return await l.then(t=>{if(!t.ok)throw Error(`Bad Status code ${t.status} for ${a.url}`)
const s=p(JSON.parse(t.body),i)
let l=null,u=null
const f=function(e,t){return yg.context("personalizedOfferTypeFromBuyButtonMetadata",()=>{const e=c(t,dB)
if(0===e.length)return null
for(const t of e){const e=d(t,tU)
if(e)return e}return zG})}(0,s)
if(r(f))throw new Error("fetchPersonalizedOfferContext: Failed to determine offer type from buyButtonMetadata")
if(f!==zG){let t=SB
l=function(e,t,n,o){return yg.context("personalizedCMCOfferActionFromBuyButtonMetadata",()=>{const o=c(t,dB)
if(0===o.length)return null
let i,s=null
for(const e of o)switch(i=d(e,tU),i){case g_:case MR:s=e
break
default:s=null}if(!s)return null
let a=d(s,vB)
if(i===g_&&r(a))return yg.unexpectedNull(gG,fj,Hk),null
a||(a="")
const l=n.purchaseConfiguration,u=new gV(a,l.vendor,l.appName,l.bundleId,l.appPlatforms,l.isPreorder,l.excludeAttribution,l.metricsPlatformDisplayStyle,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,l.appCapabilities,l.isDefaultBrowser)
u.pageInformation=l.pageInformation
const f=Ct(e,s,n.adamId,u,!1)
return function(e,t,n,r){const o=n.purchaseConfiguration.pageInformation
let i
for(const e of n.actionMetrics.data)if(i=c(g(e.fields),S$),i)break
Df(e,t,t.adamId,false,o,i,!1)}(e,f,n),f})}(e,s,n)
let i=null
switch(f){case MR:t=fF,i=e.loc.string("OfferButton.Title.BundlePurchased")
break
case g_:(r(l.price)||0===l.price)&&(i=e.loc.string(m_))}u=function(e,t,n,o,i){return r(t)?null:yg.context("personalizedCMCDisplayPropertiesFromBuyButtonMetadata",()=>{const r=new mV(n,t.adamId,i),s=St(0,t)
r.isFree=s
let a=null
a=s?t.title:t.priceFormatted,r.titles[Bj]=a,r.priceFormatted=t.priceFormatted
const c=o.hasInAppPurchases,l=o.hasExternalPurchases
if(r.hasInAppPurchases=c,r.hasExternalPurchases=l,l){const t=e.loc.string(zT)
r.subtitles[Bj]=t}else if(c){const t=e.loc.string(qT)
r.subtitles[Bj]=t}return r.contentRating=o.contentRating,r.appCapabilities=t.purchaseConfiguration.appCapabilities,r})}(e,l,Tj,o,t),i&&(u.titles[Bj]=i)}const h=xt(e,l,!1)
return new vV(f,h,u)})}async function Fp(e,t){var n
let r=d(t,"token.buyParams")
const s=d(t,"overrideBuyParams")
i(s)&&(r=function(e,t){const n=new RY(e),r=new RY(t),i=n.get(yJ.placementId,null);(null==i?void 0:i.length)>0&&o(r.get(yJ.placementId,null))&&r.set(yJ.placementId,i,null)
const s=n.get(yJ.containerId,null);(null==s?void 0:s.length)>0&&o(r.get(yJ.containerId,null))&&r.set(yJ.containerId,s,null)
const a=n.get(yJ.templateType,null)
return(null==a?void 0:a.length)>0&&o(r.get(yJ.templateType,null))&&r.set(yJ.templateType,a,null),r.toString()}(r,s)),r=gt(e,d(t,$U),r,h(t,DP),l(t,_P),l(t,LP),d(t,xP),d(t,MP),d(t,wR),p(t,TB),p(t,$P),h(t,FP),d(t,NP),d(t,"metrics.extRefApp2"),d(t,"metrics.extRefUrl2"))
const a=c(t,"token.appPlatforms"),u=a&&a.length&&a.length>0&&a.indexOf("tv")>=0,f=a&&a.length&&a.length>0&&a.indexOf(wj)>=0,g=l(t,"token.isHalva")||l(t,"token.isMacOSCompatibleIOSApp"),m=l(t,"token.supportsVisionOSCompatibleIOSBinary"),v=sd(0,e.client.deviceType,g,m).some(e=>-1!==a.indexOf(e)),y=g&&!1,A=(a.indexOf(wj),m&&!1),T=d(t,"instalationType"),b=T===_O,S=T===Qv,P=l(t,"token.isPreorder"),I=!(P||(u||f)&&!v),C=d(t,wR)===Fj&&e.client.deviceType!==Fj,k=d(t,"token.preflightPackageUrl"),O={...p(t,"token.additionalHeaders",{}),...p(t,"additionalHeaders",{})}
let E={}
const R=null===(n=e.paymentMetricsIdentifiersCache)||void 0===n?void 0:n.getMetricsFieldsForTypes([kg.user,kg.client])
return(0,Tg.isSome)(R)&&(E={...R}),{adamId:d(t,$U),buyParams:r,vendor:d(t,"token.vendor"),appName:d(t,"token.appName"),bundleId:d(t,"token.bundleId"),appPlatforms:a,additionalHeaders:O,isUpdate:b,isRedownload:S,isPreorder:P,createsJobs:I,preflightPackageUrl:k,isArcadeApp:w(t,"token.isArcadeApp"),forceWatchInstall:C,isMacOSCompatibleIOSApp:y,isVisionOSCompatibleIOSApp:A,presentingSceneIdentifier:d(t,"presentingSceneIdentifier"),appCapabilities:c(t,"token.appCapabilities"),isDefaultBrowser:w(t,"token.isDefaultBrowser"),metricsOverlay:E,remoteDownloadIdentifiers:c(t,"token.remoteDownloadIdentifiers")}}async function Np(e,t){const n=new Uz(e).withIdsOfType(t,Gj).includingMacOSCompatibleIOSAppsWhenSupported(!0).includingAdditionalPlatforms(O(e))
return await An(e,n).then(t=>{const n=L(t),r={}
for(const t of n)r[t.id]=Gu(e,t,{useCase:3})
return r})}async function Bp(e,t){const n=new zQ(t.targetingData,e.random.nextUUID()),r=Gp(e,t)
if(null===r)return null
const s=An(e,r,function(e,t){const n={}
return t&&t.validAdRequest()&&(n["X-Apple-App-Store-Client-Request-Id"]=t.appStoreClientRequestId,n["X-Apple-iAd-Request-Data"]=t.sponsoredSearchRequestData,n["X-Apple-iAd-Env-Name"]=t.routingInfo),{headers:n}}(0,n))
if(e.bag.mediaAPISearchFocusEnabled){const n={term:t.term.trim(),entity:t.searchEntity}
e.onDeviceSearchHistoryManager.saveRecentSearchWithLimit(n,30)}const a=async function(e,t,n,r){var i
if(!t.validAdRequest())return jr(e,"ODML fetch skipped - Malformed request"),{adverts:[],odmlSuccess:!1}
const s=await r,a=function(e,t){const n=L(t.results[CS]),r=[]
for(const t of n){const n=d(t,"id"),i=H(t,SE)
if(o(n)||o(i))continue
let s=null,a=null
e.bag.enableCPPInSearchAds&&(s=Be(Fe(e,t)),a=Ge(e,t)),r.push({instanceId:e.random.nextUUID(),adamId:n,assetInformation:{},adData:i,cppIds:a,serverCppId:s,selectedCppId:s,appBinaryTraits:od(e,t)})}return r}(e,s),c=function(e,t,n){const r=L(t.results.search),i=[]
for(const e of r){const t=d(e,"id")
o(t)||i.push({adamId:t,assetInformation:{}})}return i}(0,s)
try{if(e.isAvailable(eV)){const t=await e.ads.processAdvertsForSponsoredSearch(a,c,n,e.bag.sponsoredSearchODMLTimeout,e.client.isPhone||e.client.isPad)
return t.odmlSuccess?jr(e,"ODML processing completed"):jr(e,"ODML processing failed"),{adverts:null!==(i=t.adverts)&&void 0!==i?i:a,odmlSuccess:t.odmlSuccess,installedStates:t.installedStates,appStates:t.appStates}}return jr(e,"ODML fetch skipped - Unsupported client"),{adverts:a,odmlSuccess:!1}}catch(t){return jr(e,`ODML fetch failed - ${t}`),{adverts:a,odmlSuccess:!1}}}(e,n,t.term,s),c=async function(e){if(function(e){switch(e){case Oj:case Mj:return!0
default:return!1}}(e.client.deviceType)){const t=Un(e,null,null,O(e))
if(t)return await An(e,t).catch(()=>null)}return null}(e)
return await Promise.all([s,a,c]).then(([o,s,a])=>{var c,l,u,f
if(function(e){var t
const n=$(e),r=PE
i(n)&&i(e.meta)&&i(null===(t=e.meta)||void 0===t?void 0:t.metrics)&&(e.meta.metrics[aX]=d(n,r),delete e.meta.metrics[r])}(o),null===(u=null===(l=null===(c=o.meta)||void 0===c?void 0:c.results)||void 0===l?void 0:l.search)||void 0===u?void 0:u.naturalLanguage){const t=e.storage.retrieveString(RE),n=Qe(new Date).getTime().toString()
e.storage.storeString(RE,n),null===(f=e.amsEngagement)||void 0===f||f.enqueueData({eventType:"lastNLSQueryDateChange",app:EL,oldState:t,newState:n})}return{catalogResponse:o,categoriesFilterData:a,sponsoredSearchRequestData:n,sponsoredSearchAdvertData:s,requestMetadata:{requestDescriptor:t,searchRequestUrl:qe(e,r).toString()}}})}async function Up(e,t){const n=function(e,t){const n=e.bag.isLLMSearchTagsEnabled||l(e.bag.supportedMixedMediaRequestUsecases[ej]),r=new Uz(e,t,n,[bS]).includingAdditionalPlatforms(O(e)).includingScopedAttributes(kj,[_E]).includingAttributes(jp(e)).includingRelationshipsForUpsell(!0).includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes($e(e))
return We(e,r,t),r.includingRelationships(t5),ki(e)&&(r.includingAssociateKeys(Gj,[xj]),r.includingScopedAttributes(xj,[pj,GU,IU]),r.includingScopedRelationships(kj,[lG])),r}(e,t)
return await An(e,n)}function Gp(e,t){var n
const r=null===(n=t.term)||void 0===n?void 0:n.trim()
if(o(r))return null
const i=t.origin,a=t.source,c=t.searchEntity,u=t.facets,d=t.selectedFacetOptions,f=t.spellCheckEnabled,p=t.excludedTerms,h=e.host.clientIdentifier,w=new Uz(e).withSearchTerm(r).includingAdditionalPlatforms(O(e)).includingAttributes(jp(e)).includingScopedAttributes(kj,[_E]).includingRelationshipsForUpsell(!0).includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes($e(e))
if(w.includingRelationships(t5),ki(e)&&(w.includingAssociateKeys(Gj,[xj]),w.includingScopedAttributes(xj,[pj,GU,IU]),w.includingScopedRelationships(kj,[lG])),l(e.client.isTinkerWatch)&&w.withFilter(GN,"tinker"),w.enablingFeature(OL),e.props.enabled(J_)&&w.enablingFeature(J_),s(t.guidedSearchTokens)&&w.addingQuery("selectedFacets",t.guidedSearchTokens.join(",")),s(t.guidedSearchOptimizationTerm)&&w.addingQuery("finalTerm",t.guidedSearchOptimizationTerm),e.bag.isLLMSearchTagsEnabled&&w.includingAssociateKeys("results:apps",[bS]),c===lN?w.searchingOverTypes([kj]):c===dG?w.searchingOverTypes([eU]):c===Fj||c===$j?w.searchingOverTypes([Gj]).withFilter(GN,c):w.searchingOverTypes([Gj,eU,PU,kj,Pj,$G]),e.appleSilicon.isSupportEnabled&&!e.appleSilicon.isRosettaAvailable&&w.addingQuery("restrict","!requiresRosetta"),u)for(const e of Object.keys(u))w.addingQuery(e,u[e])
if(d)for(const e of Object.keys(d)){const t=n4.requestValuesForSelectedFacetOptions(d[e])
if(s(t)){w.addingQuery(e,t.value)
for(const e of Object.keys(t.additionalKeyValuePairs))w.addingQuery(e,t.additionalKeyValuePairs[e])}}const g=e.bag.isNaturalLanguageSearchEnabled||e.bag.isNaturalLanguageSearchResultsEnabled,m=g?"source":"src"
if(i===e$){const e=g&&(null==a?void 0:a.length)?"hint:".concat(a):mO
w.addingQuery(m,e)}else i===gO?w.addingQuery(m,Ib):i===Z$?w.addingQuery(m,Z$):i===vO?w.addingQuery(m,"searchInstead"):i===yO?w.addingQuery(m,lT):i===LE&&w.addingQuery(m,H$)
switch(h){case JV:w.addingContext(Fj)
break
case KV:w.addingContext(kG)
break
case ZV:w.addingContext($j)}return w.addingQuery("limit[ads-result]",e.bag.mediaAdvertRequestLimit.toString()),s(e.bag.adsOverrideLanguage)&&w.enablingFeature(cv),f&&w.enablingFeature("spellCheck"),g&&w.enablingFeature(TS),w.enablingFeature("searchResultCpps"),p&&w.addingQuery("excludeTerms",p.join(",")),w}function jp(e){const t=[bB,cD,oB,eG,ON,lD,pG,NL,ik,xE,qx,ij]
return e.appleSilicon.isSupportEnabled&&t.push(AG),e.host.isOSAtLeast(15,5,0)&&t.push(pN),t}function Vp(e,t){return yg.context("developerPageFromResponse",()=>{const n=t.data.length?t.data[0]:null
if(!n)return null
const r=Xo(e,"Artist",n.id,t),i=function(e,t,n,r){switch(e.client.deviceType){case Mj:return function(e,t,n,r){var i
e.appleSilicon.isSupportEnabled?(Yp(t,kU,[OM,cx]),Yp(t,OM,[cx])):Yp(t,kU,[OM])
const a=uj
let l=0
const u=[]
for(const d of f5){const f=re(t,d),p=c(f,FB),h=p.length
if(0===h)continue
if(d===jN&&0===h)continue
const w=qp(e,d,t)
ef(0,{pageInformation:n,locationTracker:r,idType:sj,id:`${l}`,targetType:JG},w)
const g={lockupOptions:{metricsOptions:{pageInformation:n,locationTracker:r},artworkUseCase:1},filter:76532},m=p.filter(e=>o(e.attributes)),v=(null===(i=f.next)||void 0===i?void 0:i.length)>0||h>=8,y=zp(e,w,t.id,p,d,a,g,n,r,f.href,v),A=y.items.length+m.length
A<3&&(y.rowsPerColumn=A)
const T={id:null,kind:null,softwareType:null,targetType:JG,title:y.title,pageInformation:n,locationTracker:r,idType:null}
if(nf(r),pf(e,y,T),af(r),m.length){const e=new w5
e.title=w,e.developerId=t.id,e.contentType=uj,e.remainingData=m,e.lockupListOptions=g,e.relationship=d,e.roomUrl=f.href,e.shouldShowSeeAll=v,e.hasExistingContent=s(y.items),y.url=`${AW}:/${BW}/${PW}/`+encodeURIComponent(JSON.stringify(e))}y.items.length>0&&(u.push(y),l++)}return u}(e,t,n,r)
case Fj:return function(e,t,n,r,i,a,c){const l=se(n,r),u={lockupOptions:{metricsOptions:{pageInformation:a,locationTracker:c},artworkUseCase:1},filter:76532}
ef(0,{pageInformation:a,locationTracker:c,idType:sj,id:"0",targetType:JG},i)
const d=zp(e,i,n.id,l,r,t,u,a,c,null,!1),f=l.filter(e=>o(e.attributes)),p={id:null,kind:null,softwareType:null,targetType:JG,title:i,pageInformation:a,locationTracker:c,idType:null}
if(nf(c),pf(e,d,p),af(c),f.length){const e=new w5
e.title=i,e.developerId=n.id,e.contentType=t,e.remainingData=f,e.lockupListOptions=u,e.hasExistingContent=s(d.items),d.url=`${AW}:/${BW}/${PW}/`+encodeURIComponent(JSON.stringify(e))}return[d]}(e,uj,t,g0,e.loc.string(Dy),n,r)
case wj:return Wp(e,t,h5,n,r)
default:return Wp(e,t,p5,n,r)}}(e,n,r,{rootPosition:0,locationStack:[]})
1===i.length&&(i[0].isHorizontal=!1)
const a=Ed(e,n,Bj)
if(a){const e=new _V(a,gU),t=new Ez(wB)
t.items=[e],i.unshift(t)}const l=new xz(i)
l.title=q(n,jj),e.client.deviceType!==Fj&&(l.presentationOptions=[xF]),ti(e,l,r)
const u=H(n,bD)
if(u){const t=Fu(e,u,{cropCode:"sr",useCase:21})
l.uber=t
{const e=new Ez("uber"),n=new c0(Ey)
n.artwork=t,e.items=[n],n.title=l.title,i.unshift(e),l.presentationOptions.push(BM),l.presentationOptions.push(Ry)}}return l})}function Hp(e,t,n){switch(t){case jN:return e.loc.string(_y)
case jC:return e.loc.string("DEVELOPER_SYSTEM_APPS")
case gD:return e.loc.string("DEVELOPER_IMESSAGE")
case sx:return e.loc.string(Dy)
case ax:return e.loc.string("DEVELOPER_TV")
case Pj:return e.loc.string(Ly)
case VC:return e.loc.string("DEVELOPER_VISION")
case kM:const t=Y(n,xy),r=Y(n,My)
return t&&r?e.loc.string($y):r?e.loc.string(Fy):e.loc.string(Ny)
case kU:return e.loc.string(By)
default:return null}}function Wp(e,t,n,r,i){var a,l
let u,d
Yp(t,kU,[kM,ax]),"tv"===e.client.deviceType?(u=nG,d=2):(u=uj,d=1)
let f=0
const p=[]
for(const h of n){const n=re(t,h),w=c(n,FB),g=w.length
if(0===g)continue
if(h===jN&&0===g)continue
let m
m=h===gD?KV:h===sx?JV:h===ax?QV:YV
const v=Hp(e,h,t)
ef(0,{pageInformation:r,locationTracker:i,idType:sj,id:`${f}`,targetType:JG},v)
const y={lockupOptions:{metricsOptions:{pageInformation:r,locationTracker:i},clientIdentifierOverride:m,artworkUseCase:d},filter:76532},A=w.filter(e=>o(e.attributes)),T=((null===(a=n.next)||void 0===a?void 0:a.length)>0||g>=8)&&!0,b=zp(e,v,t.id,w,h,u,y,r,i,n.href,T),S=b.items.length+A.length
S<3&&(b.rowsPerColumn=S)
const P={id:null,kind:null,softwareType:null,targetType:JG,title:b.title,pageInformation:r,locationTracker:i,idType:null}
if(nf(i),pf(e,b,P),af(i),A.length){const e=new w5
e.title=v,e.developerId=t.id,e.contentType=u,e.remainingData=A,e.lockupListOptions=y,e.relationship=h,e.roomUrl=n.href,e.shouldShowSeeAll=T,e.hasExistingContent=s(b.items),b.url=`${AW}:/${BW}/${PW}/`+encodeURIComponent(JSON.stringify(e))}(b.items.length>0||(null===(l=b.url)||void 0===l?void 0:l.length)>0)&&(p.push(b),f++)}return p}function qp(e,t,n){switch(t){case jN:return e.loc.string(_y)
case Pj:return e.loc.string(Ly)
case OM:if(e.appleSilicon.isSupportEnabled)return e.loc.string("DEVELOPER_MAC_APPS")
{const t=Y(n,xy),r=Y(n,My)
return t&&r?e.loc.string($y):r?e.loc.string(Fy):e.loc.string(Ny)}case cx:return e.loc.string("DEVELOPER_PHONE_PAD_APPS")
case kU:return e.loc.string(By)
default:return null}}function zp(e,t,n,o,s,a,c,l,u,d,f){const p=new Ez(a)
if(p.title=t,a===$M?(p.items=function(e,t,n){return yg.context("screenshotsLockupsFromData",()=>{if(!t)return[]
const o=[]
for(let s=0;s<t.length;s++){const a=t[s]
if(r(a.attributes)){n.contentUnavailable&&n.contentUnavailable(s,a)
continue}const c=n.lockupOptions
let l=80894
if(i(n.filter)&&(l=n.filter),tt(e,a,l))continue
const u=gu(e,a,c)
u.isValid()&&(o.push(u),af(n.lockupOptions.metricsOptions.locationTracker))}return o})}(e,o,c),p.isHorizontal=!1,p.presentationHints={showSupplementaryText:!1}):(p.items=Pu(e,o,c),p.isHorizontal=e.client.deviceType!==Fj),f){const r=new d5
r.title=t,r.url=d,r.developerId=n,r.relationshipId=s,r.clientIdentifierOverride=c.lockupOptions.clientIdentifierOverride
const o=new _q(Vj)
o.pageUrl=i(h=r)?`${AW}:/${BW}/${xW}/`+encodeURIComponent(JSON.stringify(h)):null,o.title=e.loc.string(xU),o.pageData=lc(0,t),xf(e,o,o.pageUrl,{pageInformation:l,locationTracker:u}),p.seeAllAction=o}var h
return p}function Yp(e,t,n){const o=re(e,t)
if(r(o))return
const i=L(o)
if(r(i))return
const s=i.map(e=>e.id)
for(const t of n){const n=re(e,t)
if(r(n))continue
const o=L(n)
r(n)||(e.relationships[t].data=o.filter(e=>!s.includes(e.id)))}}function Jp(e,t){const n=[lj,ij,kF],r=[...n,FF,xB,R$,O$],o=[...n,R$],i=[...n,pG,bB,oB,xB,YU,pG,aG]
e.appleSilicon.isSupportEnabled&&i.push(AG)
const s=[...i]
t.includingAdditionalPlatforms(O(e)).enablingFeatures(["personalization","supportsCustomTextColor"]).includingRelationshipsForUpsell(!0).includingScopedAttributes(kj,r).includingScopedAttributes(rU,o).includingScopedAttributes(Gj,s)}function Kp(e,t,n,r){const o=function(e,t,n,r){const o=Zp(0,n.collectionDisplayStyle)
return{...n.metricsImpressionOptions,...r,id:t.id,targetType:o}}(0,t,n,r)
return Iu(e,t,o,n.clientIdentifierOverride)}function Zp(e,t){switch(t){case Vg.Hero:return aN
case Vg.TextOnly:return Uy
case Vg.TextWithArtwork:return"textWithArtwork"
case Vg.BrickSmall:return"brickSmall"
case Vg.BrickMedium:return"brickMedium"
case Vg.BrickLarge:return"brickLarge"
case Vg.EditorialLockupMedium:case Vg.EditorialLockupMediumVariant:return"editorialLockupMedium"
case Vg.EditorialLockupLarge:case Vg.EditorialLockupLargeVariant:return"editorialLockupLarge"
case Vg.LockupSmall:return F$
case Vg.LockupLarge:return"lockupLarge"
case Vg.StorySmall:return"storySmall"
case Vg.StoryMedium:return"storyMedium"
case Vg.BreakoutLarge:return UM
default:return XG}}function Qp(e,t,n){let r=null,s=null,a=[]
const c=Vt(0,t)
switch(t.type){case kj:case rU:case MF:a=["enrichedEditorialNotes.badge",RD,MG],r=oh(e,t,a,!1),s=oh(e,c,a,!1)
break
case Gj:case $G:case Pj:a=[RD],r=oh(e,t,a,!0),s=oh(e,c,a,!0)}const l=i(s)?s:r
return o(l)?null:l}function Xp(e,t,n){let r=null,s=[]
switch(n){case NM:case FM:switch(t.type){case kj:case rU:case MF:s=[Gy,KB],r=nh(t,s)
break
case Gj:case $G:case Pj:s=[NB],r=oh(e,t,s,!0)}break
default:switch(t.type){case kj:case rU:case MF:s=[Gy,KB],r=oh(e,t,s,!1)
break
case Gj:case $G:case Pj:s=[jj],r=oh(e,t,s,!1)}}const a=oh(e,Vt(0,t),s,!1),c=i(a)?a:r
return o(c)?null:c}function eh(e,t,n=!1){let r=null,s=[]
switch(t.type){case kj:n?s=[jy,NB]:Y(t,mk)||(s=["enrichedEditorialNotes.short",vk]),r=oh(e,t,s,!1)
break
case rU:case MF:s=[jy,NB],r=oh(e,t,s,!1)
break
case Gj:case $G:case Pj:s=[NB],r=oh(e,t,s,!0)}const a=oh(e,Vt(0,t),s,!1),c=i(a)?a:r
return o(c)?null:c}function th(e,t){let n=null,r=[]
switch(t.type){case kj:case rU:case MF:r=[Vy,Hy],n=oh(e,t,r,!1)
break
case Gj:case $G:case Pj:r=[Vy,Hy],n=oh(e,t,r,!0)}const o=oh(e,Vt(0,t),r,!1)
let i=null
return i=(null==o?void 0:o.length)>0?o:s(n)?n:e.loc.string(yk),i}function nh(e,t){return o(e)?null:q(e,t)}function rh(e,t,n){return o(e)?null:me(e,t,n)}function oh(e,t,n,r){if(o(t))return null
const i=Re(e,t)
for(const e of n){const n=r?rh(t,i,e):nh(t,e)
if(s(n))return n}return null}function ih(e,t,n){const r={}
tf(0,n.metricsOptions,Ak)
const a=tu(e,t,n)
nf(n.metricsOptions.locationTracker)
const c=nu(e,t,n)
return s(a)&&(a.length>1||o(c))?r.collectionIcons=a:i(c)&&(r.lockup=c,r.collectionIcons=[c.icon]),r}function sh(e,t,n,r){const o=[],s=new Ez(r)
s.isHorizontal=q(t.data,U$)===hx
const a=Gt(0,t)
for(const r of a){const i={...t.metricsImpressionOptions,targetType:Zp(0,n),recoMetricsData:$(r)}
if(r.attributes&&!Sh(t)){{const n=ah(e,r,t.collectionDisplayStyle,i,i,t.clientIdentifierOverride)
if(n.clickAction=Kp(e,r,t),!n.isValid())continue
o.push(n)}af(t.metricsImpressionOptions.locationTracker)}else t.remainingItems.push(r),t.isDeferring=!0}return i(t.presentationHints)&&(s.presentationHints=t.presentationHints),delete t.maxItemCount,s.eyebrow=t.eyebrow,s.eyebrowArtwork=t.eyebrowArtwork,s.title=t.title,s.subtitle=t.subtitle,s.items=o,s.rowsPerColumn=J(t.data,jM),s.url=Ph(0,0,t),ra(e,s,t),s}function ah(e,t,n,r,i,a){const c=new cz,u=Ht(0,t)
if(!l(u.hideEditorialMedia)){const r=eu(e,t,n);(0,Ag.isSome)(null==r?void 0:r.artwork)&&(c.artworks=[r.artwork],c.isMediaDark=Zl(0,r)),(0,Ag.isSome)(null==r?void 0:r.rtlArtwork)&&(c.rtlArtwork=null==r?void 0:r.rtlArtwork,c.isRTLMediaDark=Zl(0,r,!0))}const d={metricsOptions:i,clientIdentifierOverride:a,artworkUseCase:0,canDisplayArcadeOfferButton:!0,externalDeepLinkUrl:at(0,t)}
if(tf(0,d.metricsOptions,Ak),c.collectionIcons=tu(e,t,d),nf(d.metricsOptions.locationTracker),o(c.collectionIcons)){const n=Gu(e,t,{useCase:0})
s(n)&&(c.collectionIcons=[n])}c.caption=Qp(e,t),c.title=Xp(e,t,n),c.subtitle=eh(e,t),c.accessibilityLabel=c.title,c.editorialDisplayOptions=Wt(u)
const f=s(c.artworks)?oU:"collection_id",p={...r,id:t.id,idType:f}
return pf(e,c,vf(e,t,c.title,p)),c.artworkSafeArea=zV.defaultTileArtworkSafeArea,c.textSafeArea=zV.defaultTileTextSafeArea,c}function ch(e,t,n,r){const o=new R0
o.overlayType=Ya(e,t),o.displayOptions={horizontalPlacement:vj,textAlignment:vj,isOverDarkContent:Za(e,t)},o.badgeText=Qp(e,t,Vg.Hero),o.titleText=Xp(e,t,Vg.Hero),r.suppressTagline||(o.descriptionText=eh(e,t,!0)),o.callToActionText=th(e,t),o.buttonTitle=Ka(e,t)
const a={metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,targetType:F$,recoMetricsData:$(t)},metricsClickOptions:{id:t.id,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,actionDetails:{franchise:o.badgeText}},artworkUseCase:1,offerEnvironment:bj,canDisplayArcadeOfferButton:Fd(0,n.collectionDisplayStyle),isContainedInPreorderExclusiveShelf:!1,externalDeepLinkUrl:at(0,t)},c=nu(e,t,a),l=ih(e,t,a)
o.lockup=l.lockup,o.collectionIcons=l.collectionIcons
const u=q(t,MG)
s(u)&&i(c)&&(c.heading=u)
const d=(0,Ag.isSome)(r.suppressLockup)&&r.suppressLockup
if(s(o.lockup)&&!d)o.clickAction=o.lockup.clickAction,o.impressionMetrics=o.lockup.impressionMetrics
else{const r={targetType:aN,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:$(t)},i={...r,id:t.id,actionDetails:{franchise:o.badgeText}}
o.clickAction=Ou(e,t,i,n.clientIdentifierOverride),pf(e,o,vf(e,t,o.titleText,r))}return o}function lh(e,t,n,r,o){if(!n){const e=o?null==r?void 0:r.rtlBackgroundColor:null==r?void 0:r.backgroundColor
t.backgroundColor=e
const n=o?null==r?void 0:r.rtlArtworkData:null==r?void 0:r.artworkData
t.titleEffect=Da(0,n)
const i=o?null==r?void 0:r.rtlArtwork:null==r?void 0:r.artwork
t.artwork=i
const s=o?null==r?void 0:r.rtlVideo:null==r?void 0:r.video
t.video=s}t.isMediaDark=Zl(0,r,o)}function uh(e){return{isAutoScrollEnabled:e.bag.heroCarouselAutoScrollDuration>0,autoScrollInterval:e.bag.heroCarouselAutoScrollDuration}}function dh(e,t,n,a,c){if(o(t))return null
let l
n.showOrdinals&&(l=e.loc.decimal(n.ordinalIndex))
let u,d=null
!i(n.shelfBackground)||n.shelfBackground.type!==_U&&n.shelfBackground.type!==DD||(d=nj),s(n)&&(u=n.clientIdentifierOverride)
const f={ordinal:l,metricsOptions:{...{...n.metricsImpressionOptions,id:t.id,idType:tj},recoMetricsData:$(t),isAdvert:qr(0,t),targetType:Zp(0,c)},clientIdentifierOverride:u,artworkUseCase:0,offerStyle:d,canDisplayArcadeOfferButton:Fd(0,c),isContainedInPreorderExclusiveShelf:n.filterOverrides.includes(qg.ShowOnlyPreorder)}
let p
switch(c){case NM:case fx:case FM:case dx:f.offerEnvironment=_G,p=yu(e,t,f,c)
break
case"Poster":p=mu(e,t,f)
break
default:p=hu(e,t,f)}return r(p)||!p.isValid()?null:(p.id=function(e,t,n){return(0,Ag.isNothing)(n)?null:`${e.id}_${t}_${n}`}(n,a,p.adamId),p)}function fh(e,t){return gh(e,t,Vg.EditorialLockupHierarchicalPortrait,CN,!0,Wg.Vertical)}function ph(e,t){return gh(e,t,Vg.EditorialLockupLarge,mx)}function hh(e,t,n=!0,r){return e.featureFlags.isEnabled("force_display_lockup_ordinals")&&(t.showOrdinals=!0),gh(e,t,Vg.LockupSmall,uj,n,r)}function wh(e,t,n=!0){return gh(e,t,Vg.LockupLarge,_$,n)}function gh(e,t,n,o,i=!0,s){const a=[],c=new Ez(o)
c.isHorizontal=(null!=s?s:q(t.data,U$))===Wg.Horizontal
const l=Gt(0,t),u=void 0
for(const[o,i]of l.entries()){if(i.type===xj)return null
if(r(i.attributes)||Sh(t)){t.isDeferring=!0,t.remainingItems.push(i)
continue}if(tt(e,i,80894))continue
let o=null
if(o=dh(e,i,t,a.length,n),o&&(a.push(o),af(t.metricsImpressionOptions.locationTracker),t.ordinalIndex++,a.length===u))break}return n!==Vg.EditorialLockupMediumVariant&&n!==Vg.EditorialLockupLargeVariant||(r(c.presentationHints)?c.presentationHints={showSupplementaryText:!0}:c.presentationHints={...c.presentationHints,showSupplementaryText:!0}),delete t.maxItemCount,c.eyebrow=t.eyebrow,c.eyebrowArtwork=t.eyebrowArtwork,c.title=t.title,c.subtitle=t.subtitle,c.items=a,c.rowsPerColumn=J(t.data,jM),c.shouldFilterApps=!t.filterOverrides.includes(qg.ShowInstalled),c.url=Ph(0,0,t),i&&ra(e,c,t,u),c}function mh(e,t,n,r,o,a,c){const u=Ht(0,t),d=new Rz
if(d.title=Xp(e,t,o),u.suppressShort||(d.description=eh(e,t)),!l(u.hideEditorialMedia)){const r=Wl(e,t,n)
if(d.artwork=null==r?void 0:r.artwork,d.video=null==r?void 0:r.video,d.isMediaDark=Zl(0,r),n===fm.StoryDetail){const n=Wl(e,t,fm.StoryDetailLandscape)
d.landscapeArtwork=null==n?void 0:n.artwork,d.landscapeVideo=null==n?void 0:n.video,d.isLandscapeMediaDark=Zl(0,n)}}const f=ih(e,t,{metricsOptions:{pageInformation:r.pageInformation,locationTracker:r.locationTracker,recoMetricsData:$(t)},artworkUseCase:1,offerEnvironment:u.useMaterialBlur?_G:G$,canDisplayArcadeOfferButton:Fd(0,o),isContainedInPreorderExclusiveShelf:!1,externalDeepLinkUrl:at(0,t)}),p=a&&l(u.suppressLockup)
p||(d.lockup=f.lockup)
const h=jt(e,t)
if(Y(h,ZG),Od(e,h),s(h)&&!p&&tt(e,h,80894)&&n!==fm.StoryDetail)return null
let w
if(w=Qp(e,t),d.badge={type:TG,title:w},d.collectionIcons=f.collectionIcons,i(c)){const n={id:t.id,pageInformation:c.metricsPageInformation,locationTracker:c.metricsLocationTracker,actionDetails:{franchise:d.badge.title},idType:HM}
d.clickAction=Kp(e,t,c,n)}d.editorialDisplayOptions=Wt(u)
const g={...r,id:t.id,idType:HM}
return pf(e,d,vf(e,t,d.title,g)),d.isValid()?d:null}function vh(e,t,n,o){const i=[],s=new Ez(o)
s.isHorizontal=q(t.data,U$)===hx
const a=Gt(0,t)
for(const o of a){const s={...t.metricsImpressionOptions,targetType:Zp(0,n),recoMetricsData:$(o)}
if(!K(o)||Sh(t)){t.remainingItems.push(o),t.isDeferring=!0
continue}let a=null
a=mh(e,o,fm.StoryCard,s,t.collectionDisplayStyle,!0,t),r(a)||(i.push(a),af(t.metricsImpressionOptions.locationTracker))}return delete t.maxItemCount,s.eyebrow=t.eyebrow,s.eyebrowArtwork=t.eyebrowArtwork,s.title=t.title,s.subtitle=t.subtitle,s.items=i,s.rowsPerColumn=J(t.data,jM),s.url=Ph(0,0,t),ra(e,s,t),s}function yh(e,t,n){const r=Yt(0,t)
o(r)||(n.displayStyle=r)}function Ah(e,t,n,r,o,i,s,a=!1,c=null){const l={id:d(n,"id"),type:n.type,collectionDisplayStyle:null!=c?c:Yt(0,n),filterOverrides:W(n,"filterOverrides"),pageId:t,data:n,presentationHints:{},clientIdentifierOverride:null,isFirstRender:!0,shouldFilter:!0,gamesFilter:bh(n),hasExistingContent:!1,title:null,subtitle:null,eyebrow:null,titleArtwork:null,remainingItems:[],metricsImpressionOptions:null,metricsPageInformation:i,metricsLocationTracker:s,recoMetricsData:Qn(e,n),isDeferring:!1,showOrdinals:!1,ordinalIndex:1,isSearchLandingPage:!1,isArcadePage:r,shelfIndex:o,isSeeAll:a}
return Th(e,n,l),l}function Th(e,t,n){let r=q(t,KB),o=q(t,NB),i=q(t,RD),a=null,c=!1
const l=ie(e,t,N$)
s(l)&&(i=e.loc.uppercased(q(t,KB)),r=q(l,KB),a=Gu(e,l,{useCase:1}),o=null,c=!0)
const u=function(e,t,n,r,o){const i=t.type,s=Yt(0,t),a={id:d(t,"id"),kind:null,softwareType:null,targetType:JG,title:n,pageInformation:r,locationTracker:o,idType:Wy,shelfType:i,recoMetricsData:$(t),canonicalId:d(t.meta,GM)}
switch(i){case jg.Collection:yh(0,t,a),s===Vg.Hero&&function(e,t){t.title=PN
const n=uh(e)
t.autoAdvanceInterval=n.autoScrollInterval}(e,a)
break
case jg.Recommendations:yh(0,t,a)}return a}(e,t,c?i:r,n.metricsPageInformation,n.metricsLocationTracker)
n.title=r,n.subtitle=o,n.eyebrow=i,n.titleArtwork=a,n.metricsImpressionOptions=u}function bh(e){let t=null
switch(q(e,"clientFilter")){case zg.ArcadeGames:t=$j
break
case zg.AllGames:t="all"}return t}function Sh(e){return e&&e.isDeferring&&e.isFirstRender}function Ph(e,t,n){return o(n)?null:(n.remainingItems.length||n.recommendationsHref||n.onDeviceRecommendationsUseCase)&&n.isFirstRender?function(e){return(new kq).set(LB,AW).append(iU,tq).append(iU,PW).param(pq.token,encodeURIComponent(JSON.stringify(e))).build()}(n):null}function Ih(e,t,n){if(o(n)||o(t))return null
if(function(e){if(e.isSeeAll)return!1
switch(e.collectionDisplayStyle){case Vg.BreakoutLarge:case Vg.Poster:return!1}return!e.filterOverrides.includes(qg.ShowOnlyPreorder)}(n)){const r=new _q(Vj)
if(!sa(t)){const o=`shelf_${n.id}`
r.pageData=function(e,t,n,r,o){const i=kh(e,void 0,(Yt(0,t.data),Ah(e,t.pageId,t.data,t.isArcadePage,t.shelfIndex,t.metricsPageInformation,{rootPosition:0,locationStack:[]},!0,null)))
if(null===i)return null
let s
i.title=null,i.eyebrow=null,i.isHorizontal=!1,i.id=r,s=new WV(null,t.title,null)
const a=new Ez(gx)
a.id=Ik,a.items=[s]
const c=new xz([a,i])
return c.isIncomplete=!(null!=o&&o),(0,Tg.isNothing)(c.pageMetrics.pageFields)&&(c.pageMetrics.pageFields={}),c}(e,n,t.contentType,o,(0,Tg.isSome)(n.recommendationsHref))}const o={}
n.type===jg.Recommendations&&(o[pq.editorialPageId]=n.pageId),r.pageUrl=da(e,n.data.href,o),r.title=e.loc.string(xU),r.referrerUrl=n.metricsPageInformation.pageUrl
const i=function(e){const t=[]
for(const n of e.locationStack)t.push({...n})
return{rootPosition:e.rootPosition,locationStack:t}}(n.metricsLocationTracker)
return sf(i,0),xf(e,r,n.seeAllUrl,{pageInformation:n.metricsPageInformation,locationTracker:i}),r}return null}function Ch(e,t,n,r,o){n||(t.backgroundColor=o?null==r?void 0:r.rtlBackgroundColor:null==r?void 0:r.backgroundColor,t.artwork=o?null==r?void 0:r.rtlArtwork:null==r?void 0:r.artwork,t.video=o?null==r?void 0:r.rtlVideo:null==r?void 0:r.video),t.isMediaDark=Zl(0,r,o)}function kh(e,t,n){let a=null
switch(n.isFirstRender&&ef(0,n.metricsImpressionOptions,n.title),n.type){case jg.ArcadeSeeAllGames:a=function(e,t){const n=new xV,o=new Ez(Sk)
o.items=[n]
const i={targetType:qy,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,title:e.loc.string(rD),id:t.id,kind:zy,softwareType:QG}
pf(e,n,i),ef(0,i,i.title),n.buttonAction=Ff(e,sN,t.metricsPageInformation,t.metricsLocationTracker)
const a={targetType:Nj,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,title:n.buttonAction.title,id:"SeeAllGames",kind:Nj,softwareType:QG}
pf(e,n.buttonAction,a),nf(i.locationTracker)
const c=e.bag.termsAndConditionsURL
if(!r(c)&&"tv"!==e.client.deviceType){const t=e.loc.string(Pk),r=new OH(c),o=new zq(t)
o.clickAction=r,o.presentationStyle=[_D,LD,xD],n.footnote=o}o.background={type:_U,color:G(qC)}
const l=Gt(0,t)
if(s(l)){const r={pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker}
n.icons=Bu(e,l,r,{useCase:2})}else n.icons=[]
return o}(e,n)
break
case jg.Collection:a=function(e,t){let n=q(t.data,XU)
if(o(n))return null
let a=null
switch(n){case Vg.Hero:a=function(e,t){if(0!==t.shelfIndex)return null
const n=new Ez(PN),r=new _0
r.autoScrollConfiguration=uh(e)
const o=Gt(0,t)
for(const n of o){const o=qt(e,n)
if(zt(0,n)&&!K(o)||Sh(t)){t.isDeferring=!0,t.remainingItems.push(n)
continue}const i={...t.metricsImpressionOptions,idType:oU,targetType:aN,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:$(n)},s=Wl(e,n,fm.Hero),a=ih(e,n,{metricsOptions:i,clientIdentifierOverride:t.clientIdentifierOverride,artworkUseCase:0,offerEnvironment:G$,canDisplayArcadeOfferButton:!0}),c=new D0,u=Va(0,n),d=Xp(e,n,Vg.Hero),f=vf(e,n,d,i)
f.isPreorder=Oe(e,u,ZG),pf(e,c,f),ef(0,f,d)
const p=Ht(0,n),h=l(p.hideEditorialMedia)
c.overlay=ch(e,n,t,p),c.collectionIcons=a.collectionIcons,c.editorialDisplayOptions=Wt(p),lh(0,c,h,s,!1),c.isValid()&&r.items.push(c)
const w=y(c)
lh(0,w,h,s,!0),w.isValid()&&r.rtlItems.push(w),nf(f.locationTracker),af(f.locationTracker)}return delete t.maxItemCount,n.isHorizontal=!1,n.eyebrow=t.eyebrow,n.eyebrowArtwork=t.eyebrowArtwork,n.title=t.title,n.subtitle=t.subtitle,n.items=[r],n.url=Ph(0,0,t),n}(e,t)
break
case Vg.TextOnly:a=function(e,t){var n
const o=[],i=new Ez(CG)
i.isHorizontal=q(t.data,U$)===Wg.Horizontal
const s=Gt(0,t)
for(const n of s){if(r(n.attributes)||Sh(t)){t.isDeferring=!0,t.remainingItems.push(n)
continue}const i=Kp(e,n,t)
i.title=Xp(e,n,t.collectionDisplayStyle)
const s={...t.metricsImpressionOptions,id:n.id,idType:HM,targetType:Uy}
pf(e,i,vf(e,n,i.title,s)),i.isValid()&&(o.push(i),af(t.metricsImpressionOptions.locationTracker))}return delete t.maxItemCount,i.eyebrow=t.eyebrow,i.eyebrowArtwork=t.eyebrowArtwork,i.title=t.title,i.subtitle=t.subtitle,i.items=o,i.rowsPerColumn=null!==(n=J(t.data,jM))&&void 0!==n?n:1,i.url=Ph(0,0,t),ra(e,i,t),i}(e,t)
break
case Vg.TextWithArtwork:a=function(e,t){var n
const o=[],i=new Ez(CG)
i.isHorizontal=q(t.data,U$)===Wg.Horizontal
const a=Gt(0,t)
for(const n of a){if(r(n.attributes)||Sh(t)){t.isDeferring=!0,t.remainingItems.push(n)
continue}const i=Kp(e,n,t)
let a
i.title=Xp(e,n,t.collectionDisplayStyle),a=H(n,_j),s(a)&&(i.artwork=Fu(e,a,{allowingTransparency:!0,useCase:20})),i.isValid()&&(o.push(i),af(t.metricsImpressionOptions.locationTracker))}return delete t.maxItemCount,i.eyebrow=t.eyebrow,i.eyebrowArtwork=t.eyebrowArtwork,i.title=t.title,i.subtitle=t.subtitle,i.items=o,i.rowsPerColumn=null!==(n=J(t.data,jM))&&void 0!==n?n:1,i.url=Ph(0,0,t),ra(e,i,t),i}(e,t)
break
case Vg.BrickSmall:a=function(e,t){return sh(e,t,Vg.BrickSmall,"smallBrick")}(e,t)
break
case Vg.BrickMedium:a=function(e,t){return sh(e,t,Vg.BrickMedium,$F)}(e,t)
break
case Vg.BrickLarge:a=function(e,t){return sh(e,t,Vg.BrickLarge,"largeBrick")}(e,t)
break
case Vg.EditorialLockupHierarchicalPortrait:a=fh(e,t)
break
case Vg.EditorialLockupHierarchicalRows:a=function(e,t){return gh(e,t,Vg.EditorialLockupHierarchicalRows,CN,!0,Wg.Vertical)}(e,t)
break
case Vg.EditorialLockupMedium:a=function(e,t){return gh(e,t,Vg.EditorialLockupMedium,CN)}(e,t)
break
case Vg.EditorialLockupMediumVariant:a=function(e,t){return gh(e,t,Vg.EditorialLockupMediumVariant,CN)}(e,t)
break
case Vg.EditorialLockupLarge:a=ph(e,t)
break
case Vg.EditorialLockupLargeVariant:a=function(e,t){return gh(e,t,Vg.EditorialLockupLargeVariant,mx)}(e,t)
break
case Vg.LockupMedium:a=function(e,t){return gh(e,t,Vg.LockupMedium,uj)}(e,t)
break
case Vg.Lockup4Up:a=function(e,t){return gh(e,t,Vg.Lockup4Up,CN,!0,Wg.Vertical)}(e,t)
break
case Vg.Poster:a=function(e,t){const n=gh(e,t,Vg.Poster,j$)
return(0,Tg.isSome)(n)&&(n.horizontalScrollTargetBehavior=Lg.CenterAligned),n}(e,t)
break
case Vg.StorySmall:a=function(e,t){return vh(e,t,Vg.StorySmall,MU)}(e,t)
break
case Vg.StoryMedium:a=function(e,t){return vh(e,t,Vg.StoryMedium,VM)}(e,t)
break
case Vg.LockupSmall:a=hh(e,t)
break
case Vg.LockupLarge:a=wh(e,t)
break
case Vg.BreakoutLarge:a=function(e,t){const n=[],r=new Ez(wx)
r.isHorizontal=q(t.data,U$)===hx
const s=Gt(0,t)
for(const r of s){const s=qt(e,r)
if(zt(0,r)&&!K(s)||Sh(t)){t.isDeferring=!0,t.remainingItems.push(r)
continue}const a={targetType:UM,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:$(r)},c=Ht(0,r),u=l(c.hideEditorialMedia)?null:eu(e,r,t.collectionDisplayStyle),d=ih(e,r,{metricsOptions:a,clientIdentifierOverride:t.clientIdentifierOverride,artworkUseCase:0,offerEnvironment:G$,canDisplayArcadeOfferButton:!0,externalDeepLinkUrl:at(0,r)})
if(o(u)&&o(d.collectionIcons))continue
const f=Qp(e,r,t.collectionDisplayStyle),p=i(f)?{type:TG,title:f}:{type:zG,title:null},h=new bz(Xp(e,r,t.collectionDisplayStyle),eh(e,r,!0),p,null),w=new Sz(h,{position:vj,wantsBlur:!0},null,null==u?void 0:u.artwork,null==u?void 0:u.video,d.collectionIcons,null==u?void 0:u.backgroundColor)
w.rtlArtwork=null==u?void 0:u.rtlArtwork,w.rtlVideo=null==u?void 0:u.rtlVideo,w.rtlBackgroundColor=null==u?void 0:u.rtlBackgroundColor
const g={...a,id:r.id,idType:oU}
pf(e,w,vf(e,r,w.details.title,g))
const m=Kp(e,r,t)
i(m)&&(m.title=th(e,r)),w.details.callToActionButtonAction=m,w.clickAction=m,w.editorialDisplayOptions=Wt(c),w.lockup=d.lockup,w.isMediaDark=Zl(0,u),w.isRTLMediaDark=Zl(0,u,!0),n.push(w)}return delete t.maxItemCount,r.eyebrow=t.eyebrow,r.eyebrowArtwork=t.eyebrowArtwork,r.title=t.title,r.subtitle=t.subtitle,r.items=n,r.rowsPerColumn=J(t.data,jM),r.url=Ph(0,0,t),ra(e,r,t),r}(e,t)}return s(a)&&(a.seeAllAction=Ih(e,a,t),a.id=`shelf_${t.id}`),a}(e,n)
break
case jg.Chart:a=function(e,t){let n
if(t.showOrdinals=!0,n=hh(e,t,!1,Wg.Horizontal),!(0,Tg.isNothing)(n))return n.url=Ph(0,0,t),ra(e,n,t),function(e,t,n){e.featureFlags.isEnabled(SF)?(0,Tg.isSome)(t.header)?function(e,t,n){e.featureFlags.isEnabled(SF)?t.titleAction=n:t.accessoryAction=n}(e,t.header,n):t.header={titleAction:n}:t.seeAllAction=n}(e,n,function(e,t){const n=q(t.data,fG),r=q(t.data,wG),o=new _q(Vj)
return o.pageUrl=vd(e,n,r),o.title=e.loc.string(xU),o.referrerUrl=t.metricsPageInformation.pageUrl,xf(e,o,o.pageUrl,{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker}),o}(e,t)),n}(e,n)
break
case jg.Tag:case jg.Engagement:case jg.Text:case jg.Image:case jg.VideoClip:a=null
break
case jg.Header:a=function(e,t,n){const r=s(H(n.data,OU))?n.data:t
if(void 0===r)return null
const o=new _0,i=new D0,a=Ht(0,r),c=ch(e,r,n,a)
c.overlayType=TG,c.callToActionText=null,i.clickAction=null,c.collectionIcons=null,c.lockup=null,c.callToActionText=null,i.overlay=c
const u={artworkUseCase:1,offerStyle:tB,offerEnvironment:bj,canDisplayArcadeOfferButton:Fd(0,n.collectionDisplayStyle),isContainedInPreorderExclusiveShelf:!1,metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:$(r)},externalDeepLinkUrl:at(0,r)}
tf(0,u.metricsOptions,Ak)
const d=tu(e,r,u)
nf(u.metricsOptions.locationTracker),i.collectionIcons=d
const f=Wl(e,r,fm.Hero),p=l(a.hideEditorialMedia)
Ch(0,i,p,f,!1),i.editorialDisplayOptions=Wt(a),o.items=[i]
const h=y(i)
Ch(0,h,p,f,!0),o.rtlItems=[h]
const w=new Ez(PN)
return w.items=[o],w}(e,t,n)
break
case jg.Recommendations:a=function(e,t){let n=null
switch(q(t.data,XU)){case Vg.LockupSmall:n=hh(e,t,!1)
break
case Vg.LockupLarge:n=wh(e,t,!1)
break
case Vg.EditorialLockupHierarchicalPortrait:n=fh(e,t)
break
case Vg.EditorialLockupLarge:n=ph(e,t)
break
default:n=t.isFirstRender?function(){const e=new Ez(B$)
return e.isHidden=!0,e}():null}return(0,Tg.isNothing)(n)?null:(n.id=`shelf_${t.id}`,function(e,t){const n=s(se(t.data,Uj))||s(t.remainingItems),r=Y(t.data,"isPersonalizationAvailable"),o=t.data.href
if(!r||n||!s(o))return
const i=qe(e,new Uz(e,t.data.href).addingQuery(pq.editorialPageId,t.pageId).includingRelationships([Uj]))
t.recommendationsHref=i.toString()}(e,t),n.url=Ph(0,0,t),ra(e,n,t),n.seeAllAction=Ih(e,n,t),n)}(e,n)
break
case jg.GameCenter:a=null
break
case jg.Upsell:a=function(e,t){const n=Hf(e,t.data)
if(o(n))return null
const r=n.marketingItemData
if(o(r)||o(r.attributes))return null
const i=La(e,r,{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,mercuryMetricsData:Kd(0,r)})
af(t.metricsLocationTracker)
const s=new Ez(yN)
return s.items=[i],s}(e,n)
break
case jg.Marker:a=function(e,t){const n=q(t.data,JU)
if(o(n))return null
let r=null
return n===Hg.QuickLinks&&(r=function(e,t){if(e.user&&e.user.isManagedAppleID)return null
{const n=[]
if((0,Ag.isSome)(e.bag.aboutAppStoreUrl)){const t=new OH(e.bag.aboutAppStoreUrl)
t.title=e.loc.string("QuickLinks.AboutTheAppStore.Title"),n.push(t)}if((0,Ag.isSome)(e.bag.aboutInAppPurchasesEditorialItemId)){const t=new _q(HG)
t.title=e.loc.string("QuickLinks.AboutInAppPurchases.Title"),t.pageUrl=`https://apps.apple.com/story/id${e.bag.aboutInAppPurchasesEditorialItemId}`,n.push(t)}if((0,Ag.isSome)(e.bag.reportProblemUrl)){const t=new OH(e.bag.reportProblemUrl)
t.title=e.loc.string(Jy,"Report a Problem"),n.push(t)}if((0,Ag.isSome)(e.bag.requestARefundUrl)){const t=new OH(e.bag.requestARefundUrl)
t.title=e.loc.string("QuickLinks.RequestARefund.Title"),n.push(t)}if((0,Ag.isSome)(e.bag.changePaymentMethodUrl)){const t=new OH(e.bag.changePaymentMethodUrl)
t.title=e.loc.string("QuickLinks.ChangePaymentMethod.Title"),n.push(t)}if((0,Ag.isSome)(e.bag.aboutFrenchAppStoreEditorialItemId)){const t=new _q(HG)
t.title=e.loc.string("QuickLinks.AboutFrenchAppStore.Title"),t.pageUrl=`https://apps.apple.com/story/id${e.bag.aboutFrenchAppStoreEditorialItemId}`,n.push(t)}const r=new Ez(CG)
return r.title=e.loc.string("QuickLinks.Title"),r.items=n,r.isHorizontal=!0,r.rowsPerColumn=1,t.metricsImpressionOptions.title=r.title,r}}(e,t)),r}(e,n)}return o(null==a?void 0:a.items)&&o(null==a?void 0:a.url)&&(a=null),n.isFirstRender&&nf(n.metricsImpressionOptions.locationTracker),pf(e,a,n.metricsImpressionOptions),n.isFirstRender&&af(n.metricsImpressionOptions.locationTracker),(0,Ag.isSome)(a)&&function(e,t,n){if((0,Tg.isNothing)(t.url)||(0,Tg.isNothing)(t.impressionMetrics)||!n.showingPlaceholders)return
const o=t.url
try{const e=kq.from(o).query[pq.token],n=JSON.parse(decodeURIComponent(e))
n.originalPlaceholderShelfImpressionMetrics=t.impressionMetrics,function(e,t,n){const o=kq.from(t.url),i=kq.from(Ph(0,0,n))
for(const e of Object.keys(o.query))r(i.query[e])&&(i.query[e]=o.query[e])
t.url=i.build()}(0,t,n)}catch{t.url=o}}(0,a,n),a}function Oh(e,t){const n={pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker},r=Hf(e,t.data)
return o(r)?null:bu(e,r,n,g$,SB,bk)}function Eh(e,t,n){var r
const o=function(e,t){switch(t){case T5:return"badge_hardware"
case b5:return"badge_trial_eligible"
default:return null}}(0,t),i=new AY($j,oN,null,{offerHints:o})
i.metricsOverlay={...i.metricsOverlay,...n}
const s=null===(r=e.metricsIdentifiersCache)||void 0===r?void 0:r.getMetricsFieldsForTypes([kg.user,kg.client])
if((0,Tg.isSome)(s)&&(i.metricsOverlay={...i.metricsOverlay,...s}),e.bag.arcadeDownloadPacksHardwareTabBadgeUpsellIntegrationEnabled&&lt(e,e.bag.arcadeDownloadPackRolloutRate)){const e=new _q(C$),t=m$
e.pageData=t,e.presentationContext=WB,i.purchaseSuccessAction=e}const a=new _q(AB)
return a.pageData=i,a}async function Rh(e,t){const n=t.eventString,r=t.featuresDictionary
if(!i(r))return await Promise.reject("Received non-defined engagement features.")
const o=function(e,t,n,r){switch(t){case"arcadeTabDidComeOnScreen":case"arcadePageDidAppear":return function(e,t,n){const r=[]
for(const e of S5)if(e in t){const t=new uW(e,!1)
r.push(t)}for(const o of S5){if(n.includes(o)&&!e.bag.unrestrictedServerSideTabBadging)continue
const s=t[o]
if(i(s)){const t=Eh(e,o,s)
r.push(t)
break}}if(r.length>0)return new SY(new EH(r))
{const e=new tW
return new SY(e)}}(e,n,r)
case"didBecomeArcadeTrialEligible":if(!e.bag.enableArcadeTrialEligibleBadging)return e.console.log(`Bag prohibits badging for identifier ${b5}`),new SY(new tW)
if(r.includes(b5))return e.console.log(`Badging identifier ${b5} was previously invalidated.`),new SY(new tW)
const t=new uW(b5,!0),o=new kH($j,e.loc.decimal(1)),s=new EH([t,o])
return new SY(s)
case"didSubscribeToArcade":return function(e){const t=[]
for(const e of S5){const n=new uW(e,!1)
t.push(n)}const n=new EH(t)
return new SY(n)}()
case"didBecomeSubscribed":if(!i(n[b5]))return new SY(new tW)
const a=new uW(b5,!1)
return new SY(a)
case"didBecomeNonSubscribed":return new SY(new tW)
default:return null}}(e,n,r,i(t.previouslyDisabledFeatures)?t.previouslyDisabledFeatures:[])
return i(o)?await Promise.resolve(o):await Promise.reject("Did not receive a valid engagement event.")}async function Dh(e,t){var n
const r=function(e,t,n,r){if(!S5.includes(t))return null
let o=null
if(n&&e.bag.unrestrictedServerSideTabBadging){const t=e.loc.decimal(1)
o=new kH($j,t)}else if(n&&!r.includes(t)){const t=e.loc.decimal(1)
o=new kH($j,t)}else n||(o=new kH($j,null))
return new SY(o)}(e,t.identifier,t.isEnabled,null!==(n=t.previouslyDisabledFeatures)&&void 0!==n?n:[])
return i(r)?await Promise.resolve(r):await Promise.reject(new Error(`fetchBadgingTask called with unsupported identifier: ${t.identifier}, featuresDictionary: ${JSON.stringify(t.featuresDictionary)}, previouslyDisabledFeatures: ${t.previouslyDisabledFeatures}`))}async function _h(e,t){return await e.required(y2).fetchPage(e,t,Mz)}async function Lh(e,t){const n=new Uz(e).withIdOfType(t,e_),r=An(e,n)
return await r.then(t=>function(e,t){return yg.context("msoProviderDataFromData",()=>{const n=_(e,t),r=q(n,jj),o=q(n,gj),i=function(e,t){return yg.context("msoProviderArtworkFromData",()=>{const n=H(t,"editorialArtwork.storeFlowcase")
if(n)return Fu(e,n,{useCase:3})
const r=H(t,_j)
return Fu(e,r,{useCase:3})})}(e,n)
i&&(i.crop="sr")
const s=function(e,t){const n=H(t,bD)
return n?Fu(e,n,{useCase:21}):null}(e,n)
return new _5(r,o,i,s)})}(e,t))}async function xh(e,t){if(r(t.providerAdamId)||r(t.subscribedChannelIds))return await e.required(y2).fetchPage(e,t.url,xz)
{const n=Mh(e,t.providerAdamId),r=An(e,n)
return await r.then(n=>{const r=function(e,t){return yg.context("msoAppsFromResponse",()=>{const n=_(e,t),r=se(n,AR),o={}
for(const t of r)o[ie(e,t,Tj).id]=W(t,"channelNames")
const i=se(n,Gj).map(e=>e.id)
return new L5(o,i)})}(e,n),o=function(e,t){const n=e.appsToAlwaysShow
for(const r of Object.keys(e.apps)){const o=e.apps[r]
for(const e of o)if(-1!==t.indexOf(e)){n.push(r)
break}}return n}(r,t.subscribedChannelIds)
return $h(e,n,o)})}}function Mh(e,t){return new Uz(e).withIdOfType(t,e_).includingRelationships([Gj,AR]).addingQuery("limit[channel-apps]","100")}function $h(e,t,n){return yg.context("msoRoomPageWithResponse",()=>{const r=_(e,t),o=Xo(e,cU,r.id,t),i=se(r,Gj),a=se(r,AR)
for(const t of a){const n=ie(e,t,Tj)
s(n)&&i.push(n)}const c=new Z0
c.ids=i.map(e=>e.id),c.shouldFilter=!1,c.metricsPageInformation=o
const l=function(e,t,n,r,o=[]){return yg.context("msoRoomPageWithContext",()=>{const i=[],s=[]
for(const e of t)-1!==n.indexOf(e.id)?i.push(e):s.push(e)
const a={rootPosition:0,locationStack:[]},c={lockupOptions:{metricsOptions:{pageInformation:r.metricsPageInformation,locationTracker:a},artworkUseCase:2}},l=[],u={pageInformation:r.metricsPageInformation,locationTracker:a,targetType:JG,idType:sj,id:"0"}
if(i.length>0){const t=e.loc.string("MSO_INCLUDED_IN_SUBSCRIPTION"),n=new Z0
n.remainingContent=[],n.metricsPageInformation=r.metricsPageInformation,n.metricsLocationTracker=a,n.preferredShelfContentType=nG,u.id="0",ef(0,u,t),c.contentUnavailable=function(e,t){return n.remainingContent.push(i[e]),!1}
const o=new Ez(nG)
o.title=t,o.shouldFilterApps=r.shouldFilter,o.items=Pu(e,i,c),o.url=Fh(n),nf(a),o.items.length>0&&(af(a),l.push(o))}if(i.length>0&&s.length>0){const t=e.loc.string("MSO_AVAILABLE_WITH_UPGRADED_SUBSCRIPTION"),n=new Z0
n.remainingContent=[],n.metricsPageInformation=r.metricsPageInformation,n.metricsLocationTracker=a,n.preferredShelfContentType=nG,u.id="1",ef(0,u,t),c.contentUnavailable=function(e,t){return n.remainingContent.push(s[e]),!1}
const o=new Ez(nG)
o.title=t,o.shouldFilterApps=r.shouldFilter,o.items=Pu(e,s,c),o.url=Fh(n),nf(a),o.items.length>0&&(af(a),l.push(o))}if(0===l.length){const n=new Z0
n.remainingContent=[],n.metricsPageInformation=r.metricsPageInformation,n.metricsLocationTracker=a,n.preferredShelfContentType=uj,u.id="0",ef(0,u,null),c.contentUnavailable=function(e,r){return n.remainingContent.push(t[e]),!1}
const o=new Ez(nG)
o.shouldFilterApps=r.shouldFilter,o.items=Pu(e,t,c),o.url=Fh(n),nf(a),af(a),l.push(o)}for(const e of l)e.isHorizontal=l.length>1
const d=o.concat(l)
return new xz(d)})}(e,i,n,c)
return l.title=q(r,jj),l.isIncomplete=!1,ti(e,l,o),l})}function Fh(e){return e.remainingContent.length?`${AW}:/${WW}/${PW}/`+encodeURIComponent(JSON.stringify(e)):null}async function Nh(e,t){const n={url:`${e.bag.getCancellablePreorderItemsSrv}?&includeAllLockups=false&includeNonBookCancellablePreorderItems=true${t.isArcade?"&preorderItemType=ArcadeApp":""}`,signingStyle:$N}
return await e.network.fetch(n).then(async n=>{const r=JSON.parse(n.body)
if(0!==r.status)return await Promise.resolve("noAuthorization")
const o=r.cancellablePreorderItems.filter(e=>e.preorderAdamId.toString()===t.adamId)
if(null===o||0===o.length)return await Promise.reject("Expected AdamID was missing. This AdamId might have not been preordered before, or the isArcade flag may be incorrect.")
if(o.length>1)return await Promise.reject(`Multiple matches for adamId ${t.adamId}, when only one is expected.`)
const i=o[0].preorderId,s={url:e.bag.cancelPreorderItemSrv,method:SN,signingStyle:$N}
return s.body=`preorderId=${i}`,await e.network.fetch(s).then(async e=>{if(!e.ok)throw Error(`Bad Status code ${e.status} for ${s.url}`)
return 0!==JSON.parse(e.body).status?await Promise.resolve("unableToCancel"):await Promise.resolve("canceled")}).catch(async e=>await Promise.reject(e))}).catch(async e=>await Promise.reject(e))}async function Bh(e,t){if(t.preloading&&Me(e))return await Promise.reject(new Error(HP))
0!==Tn(e,new kq(t.url)).length&&cp(e,t.url)
const n=H5.generateProductPageOptions(e,void 0,new kq(t.url))
let r=e.required(y2).fetchPage(e,t.url,pJ)
if(!r){const o=new Uz(e,t.url)
r=An(e,o).then(r=>Nl(e,r,n,void 0,t.referrerData))}return await r.then(n=>(e.host.clientIdentifier===XV?n&&ex in n&&si(0,n):i(t.referrerData)&&n&&ex in n&&si(0,n),n))}async function Uh(e,t,n){const a=oo(e,t,!1),c=new Uz(e)
switch(t){case Cj:c.usingCustomAttributes($e(e)),ro(e)===IL&&c.includingAttributes([NL])
break
case BG:case vG:c.usingCustomAttributes($e(e))}const l=e.bag.adsOverrideLanguage
s(l)&&c.enablingFeature(cv).addingQuery("l",l)
const u=qe(e,c).query
try{const c=await e.ads.fetchOnDeviceAdPlacement(t,a,u,n)
return await async function(e,t,n){var a,c,l,u,d,f
o(t.clientRequestId)&&(t.clientRequestId=e.random.nextUUID(),jr(e,`clientRequestId was nil. Assigned ${t.clientRequestId}`))
const p={clientRequestId:t.clientRequestId,iAdId:t.iAdId,placementType:null!==(c=null===(a=null==t?void 0:t.ad)||void 0===a?void 0:a.placementType)&&void 0!==c?c:n}
if(t.failureReason)return p.failureReason=t.failureReason,p
p.onDeviceAd=t.ad
let h=null===(l=t.ad)||void 0===l?void 0:l.appMetadata
const w=_(e,h)
if(o(null===(u=null==w?void 0:w.attributes)||void 0===u?void 0:u.name)||o(null===(d=null==w?void 0:w.attributes)||void 0===d?void 0:d.platformAttributes)||o(At(e,w)))try{const n=function(e,t){const n=new Uz(e).withIdOfType(t.adamId,Gj).usingCustomAttributes($e(e)).includingAttributes([NL])
s(t.cppIds)&&n.addingQuery(pq.productVariantID,t.cppIds[0])
const r=e.bag.adsOverrideLanguage
return s(r)&&n.addingQuery("l",r),n}(e,t.ad)
h=await An(e,n)}catch(t){jr(e,`fetchAds request failed - ${t}`),p.failureReason=sv}if(s(null===(f=_(e,h))||void 0===f?void 0:f.attributes)){p.mediaResponse=function(e,t,n){const i=_(e,t)
if(o(i)||r(i.attributes))return jr(e,"decorateiAdAttributeFromOnDeviceAd cannot decorate for malformed response"),null
const a=n.ad,c=`${a.adamId}|${a.metadata}`,l={clientRequestId:n.clientRequestId,impressionId:a.impressionId,metadata:a.metadata,privacy:a.privacy,lineItem:c},u=_(e,a.appMetadata)
switch(s(i.meta)&&s(u)&&s(u.meta)&&(i.meta.passthroughAdInfo=u.meta.passthroughAdInfo),a.placementType){case Cj:const t=ro(e)===IL
l.format={images:t,text:"",userRating:!1}
break
case wU:l.format={images:!0,text:"",userRating:!1}}return i.attributes[wN]=l,uo(0,i,a.instanceId),t}(e,h,t),fo(e,_(e,h),p.onDeviceAd)||(jr(e,"fetchAds request failed - localization not available"),p.failureReason=sC)
const a=function(e,t,n){return n===Cj?function(e,t){var n,r
const o=Fe(e,_(e,t.mediaResponse))
return(null===(r=null===(n=t.onDeviceAd)||void 0===n?void 0:n.cppIds)||void 0===r?void 0:r.includes(o.productPageId))?null:iC}(e,t):null}(e,p,n)
i(a)&&(jr(e,`fetchAds request failed - ${a}`),p.failureReason=a)}return p}(e,c,t)}catch{return null}}function Gh(e,t,n,r=Bg.Default){var o,i,s
const a=null!==(o=q(t,VG))&&void 0!==o?o:void 0
let c=null!==(i=function(e,t,n){return H(e,t,void 0)}(t,XU))&&void 0!==i?i:void 0;(0,Tg.isNothing)(c)&&r===Bg.CategoriesAndCharts&&(c={layoutDensity:Ug.Density1,layout:void 0,layoutSize:void 0})
const l=h(H(t,"itemDisplayStyle")),u=Y(t,rA),d=null!==(s=J(t,Rk))&&void 0!==s?s:void 0,f=u?t.href:void 0
return new BY(t.id,a,c,d,u,f,l,n)}function jh(e,t,n,r){return{metricsOptions:Vh(0,t,n,r)}}function Vh(e,t,n,r){var o,i,s
const a=re(t,Uj),c=null===a?void 0:null!==(o=$(a))&&void 0!==o?o:void 0
let l=oU
return r.pageType===wm.ChartsAndCategories&&(l=rj),{id:n.id,kind:null,softwareType:null,targetType:JG,title:null!==(i=n.title)&&void 0!==i?i:"",pageInformation:r.metricsPageInformation,locationTracker:r.metricsLocationTracker,idType:l,fcKind:void 0,canonicalId:null!==(s=d(t.meta,GM))&&void 0!==s?s:void 0,recoMetricsData:c}}function Hh(e,t,n,r){var o
return{...r.metricsOptions,...vf(e,n,t.title,r.metricsOptions),recoMetricsData:null!==(o=$(n))&&void 0!==o?o:void 0,targetType:qh(t.density),idType:tj}}function Wh(e,t,n,r){var o
return{pageInformation:r.metricsOptions.pageInformation,locationTracker:r.metricsOptions.locationTracker,recoMetricsData:null!==(o=$(n))&&void 0!==o?o:void 0,targetType:qh(t),id:n.id}}function qh(e){if((0,Ag.isNothing)(e))return IB
switch(e){case Ug.Density1:return IB
case Ug.Density2:return DM
default:return IB}}function zh(e,t){var n,r
const o=q(t,VG),i=d(t,"meta.autoSelectedTabId"),a=d(t,"meta.sourceShelfCanonicalId"),l=Xo(e,cU,a,t),u=yr(e)
l.recoMetricsData=Zd(l.recoMetricsData,null,u)
const f={shelves:[],metricsLocationTracker:{rootPosition:0,locationStack:[]},metricsPageInformation:l,adStitcher:null,adIncidentRecorder:null,pageType:wm.ChartsAndCategories},p=c(t,FB),h={},w=[],g=[],m={rootPosition:0,locationStack:[]}
for(const t of p){const o=Gh(0,t,Ng.CategoriesAndCharts,Bg.CategoriesAndCharts),i=jh(0,t,o,{...f,metricsLocationTracker:{rootPosition:0,locationStack:[]}})
ef(0,i.metricsOptions,o.title)
const s=Yh(e,t,!0,o,0,i)
if(nf(i.metricsOptions.locationTracker),(0,Tg.isNothing)(s))continue
h[s.id]=s,w.push(s.id)
const a=new _z,c=new HH(t.id,o.title)
Lf(e,c,{id:o.title,canonicalId:null!==(n=d(t.meta,GM))&&void 0!==n?n:void 0,actionType:Dj,targetType:Nj,pageInformation:f.metricsPageInformation,locationTracker:m}),a.action=c,a.id=s.id,a.title=`${null!==(r=s.title)&&void 0!==r?r:""}`,g.push(a),af(m)}if(!s(w))return new MY
const v=new Lz
v.id=e.random.nextUUID()
const y=new Ez("pageTabs")
y.items=[v],h[v.id]=y
const A=new MY
A.shelfMapping=h
const T={}
for(const e of w)g.length>1?T[e]=[v.id,e]:T[e]=[e]
for(const e of Object.values(h))e.title=void 0
return A.title=o,A.pageTabs=v,A.columnCount=2,A.shelfOrderings=T,A.defaultShelfOrdering=w.includes(i)?i:w[0],v.tabs=g,v.selectedTabId=A.defaultShelfOrdering,ti(e,A,f.metricsPageInformation),A}function Yh(e,t,n,r,i,c){var l,u,f,p,h,w
const g=[],m=se(t,Uj),v=new Ez(NE)
if(v.isHorizontal=!1,v.id=t.id,v.title=r.title,v.presentationHints={isWidthConstrained:!0},a(null===(l=r.displayStyle)||void 0===l?void 0:l.layoutSize)&&(v.contentsMetadata={type:"searchLandingChartsAndCategoriesSection",numberOfColumns:r.displayStyle.layoutSize}),r.hasSeeAll){const t=new _q(NE)
t.pageUrl=r.seeAllLink,t.title=e.loc.string(xU)
const n={...c.metricsOptions,targetType:Nj}
xf(e,t,t.pageUrl,n),v.seeAllAction=t}pf(e,v,c.metricsOptions)
const y=n?pm.seeAllPage:pm.other
for(const t of m){const n=Uu(e,t,y,null===(u=null==r?void 0:r.displayStyle)||void 0===u?void 0:u.layoutDensity),i=H(t,OU)
let a=null,l=null
s(i)&&(a=d(i,jj),l=d(i,vF))
const m=q(t,JU),v=H(t,aj),A=d(v,gj),T=se(t,lG)
let b=!0,S=null
if((0,Tg.isSome)(A))switch(m){case"CategoryChart":const t=new _q(Sx)
t.pageUrl=A,t.title=a,S=t
break
case"External":if(b=!1,d(v,QL)===sD)S=new OH(A),S.title=null!=a?a:""
else{const t=e.required(y2).fetchFlowPage(A),n=new _q(t)
n.pageUrl=A,n.title=null!=a?a:"",S=n}}else{if(!s(T))continue
{const t=da(e,T[0].href)
if(!((null==t?void 0:t.length)>0))continue
{const e=new _q(Vj)
e.pageUrl=t,e.title=a,S=e}}}if(Lf(e,S,Wh(0,null===(f=null==r?void 0:r.displayStyle)||void 0===f?void 0:f.layoutDensity,t,c)),b&&o(a))continue
const P=new $Y(a,n,l,S,null===(p=null==r?void 0:r.displayStyle)||void 0===p?void 0:p.layoutDensity,Jh(null===(h=null==r?void 0:r.displayStyle)||void 0===h?void 0:h.layoutDensity),Kh(null===(w=null==r?void 0:r.displayStyle)||void 0===w?void 0:w.layoutDensity))
pf(e,P,Hh(e,P,t,c)),g.push(P),af(c.metricsOptions.locationTracker)}return o(g)?null:(v.items=g,v)}function Jh(e){switch(e){case Ug.Density1:return zV.defaultTileArtworkSafeArea
case Ug.Density2:return zV.defaultPillArtworkSafeArea
case Ug.Density3:default:return}}function Kh(e){switch(e){case Ug.Density1:return zV.defaultTileTextSafeArea
case Ug.Density2:return zV.defaultPillTextSafeArea
default:return}}async function Zh(e,t){const n=new Uz(t,e.url).forType(pL).includingScopedRelationships(zP,[Uj]).enablingFeatures([yU,tM]).addingQuery(pq.name,yM),r=An(t,n)
return await r.then(e=>zh(t,e))}function Qh(e){switch(e){case dG:return xm
case lN:return kL
case Fj:return Mm
case $j:return"joystickcontroller.fill"
default:return}}function Xh(e,t,n,r,i){if(o(r))return null
const s=LE,a=n.term,c=r.displayLabel,l=t===PS?new pQ(c,r.finalTerm,null,s):new u6(c,s)
!function(e,t,n,r,o){const i=OL,s=RS,a={targetId:n},c=Pf(e,n,s,{actionType:i,location:Xd(0,{pageInformation:null,locationTracker:o.locationTracker,targetType:s},n),searchTerm:r},[OL])
t.actionMetrics.addMetricsData(c)
const l=If(e,r,s,i,null,a,[OL])
t.actionMetrics.addMetricsData(l)}(e,l,c,a,i)
const u=new c6(c,r.isSelected,void 0,c,l)
return Qo(0,u,RS,i),u}function ew(e,t,n){const r=y(t),i=y(t.attributes)
return i[SE]=n.adData,r.attributes=i,function(e,t,n){var r
const i=Be(Fe(e,t))
if(n.selectedCppId===i||o(null===(r=null==t?void 0:t.meta)||void 0===r?void 0:r.cppData))return
const s=y(t.meta)
s.cppData[c$]=n.selectedCppId,t.meta=s}(e,r,n),uo(0,r,n.instanceId),r}function tw(e,t,n){const r=t||{},o=[]
e.client.deviceType!==Mj&&o.push(new cQ(l$,[new lQ(e.loc.string(uS),null,r[l$]),new lQ(e.loc.string(dS),sG,r[l$])])),o.push(new cQ(pM,[new lQ(e.loc.string(IE,XF),null,r[pM]),new lQ(e.loc.string(fS,XF),KI,r[pM])]))
const s=Gn(e,n,!1)
if(s){const t=s.categories
if(t.length){const n=t.filter(e=>i(e.genreId)).map(e=>new lQ(e.name,e.genreId,r[fG]))
n.unshift(new lQ(e.loc.string(CE,XF),null,r[fG])),o.push(new cQ(fG,n))}}const a=e.bag.searchSortOptions,c=[]
c.push(new lQ(e.loc.string(kE),null,r[zU]))
for(const t of a)c.push(new lQ(e.loc.string(pS+t),t,r[zU]))
c.length>1&&o.push(new cQ(zU,c))
const l=e.bag.ageBands.map(e=>new lQ(d(e,jj),d(e,hS),r[A$]))
return l.length>0&&e.client.deviceType!==Mj&&o.push(new cQ(A$,l)),o}function nw(e,t){let n=null,r=null,o=null
const s=new e4(l$,l$,e.loc.string("SEARCH_FACET_TYPE_TITLE_DEVICE_TYPE"),I$,[new X2(e.loc.string(uS),null),new X2(e.loc.string(dS),sG)],null,null,ow(e,l$)),a=new e4(wS,wS,e.loc.string("SEARCH_FACET_TYPE_TITLE_PRICE"),I$,[new X2(e.loc.string(IE,XF),null),new X2(e.loc.string(fS,XF),KI)],null,null,ow(e,pM)),c=Gn(e,t,!1)
if(c){const t=c.categories
if(t.length){const r=t.filter(e=>i(e.genreId))
n=new e4(gS,gS,e.loc.string("SEARCH_FACET_TYPE_TITLE_CATEGORY"),I$,[new X2(e.loc.string(CE,XF),null)],null,null,ow(e,fG))
for(const e of r)n.options.push(new X2(e.name,e.genreId))}}const l=e.bag.searchSortOptions
r=new e4(zU,zU,e.loc.string("SEARCH_FACET_TYPE_TITLE_SORT"),I$,[new X2(e.loc.string(kE),null)],null,null,ow(e,zU))
for(const t of l)r.options.push(new X2(e.loc.string(pS+t),t))
const u=e.bag.ageBands.map(e=>new X2(d(e,jj),d(e,hS)))
u.length>0&&e.client.deviceType!==Mj&&(o=new e4(mS,mS,e.loc.string("SEARCH_FACET_TYPE_TITLE_AGE_BAND"),I$,u,null,null,ow(e,A$)))
const f=new n4([],!1,null)
{const e=[s,a]
i(n)&&e.push(n),e.push(r),i(o)&&e.push(o)
for(const t of e)t.showsSelectedOptions=!0
f.facetGroups.push(new t4(e))}return f}function rw(e){return{targetPlatform:[new X2(e.loc.string("SEARCH_FACET_IPAD_ONLY"),null)],"filter[price]":[new X2(e.loc.string(IE,XF),null)],sort:[new X2(e.loc.string(kE),null)],"filter[genre]":[new X2(e.loc.string(CE,XF),null)]}}function ow(e,t){const n=new tW
return Mf(e,n,t),n}function iw(e,t){var n,r,o
if(t.props.isNotEnabled(J_))return
const i=null===(n=t.userDefaults)||void 0===n?void 0:n.integer("GuidedSearchOverrides.position")
return a(i)&&i>1?i:null===(o=null===(r=null==e?void 0:e.displayStyle)||void 0===r?void 0:r.guidedSearch)||void 0===o?void 0:o.position}async function sw(e,t,n,a,c,u,d,f,p){var h,w,g,m,v,y
const A=[],T=[],b=n||null,S=c.filter(e=>e.type===Gj).map(e=>e.id),P=vr(e,new Set(S))
let I,C
if(Wr(e)&&s(u)){const n=function(e,t,n,a,c,u,d,f,p){var h,w,g,m,v,y,A,T,b,S,P
const I=new AQ,C=null!==(h=a.requestDescriptor.isNetworkConstrained)&&void 0!==h&&h
if(ef(0,{id:f_,kind:CT,softwareType:null,targetType:null,title:f_,pageInformation:c.pageInformation,locationTracker:c.locationTracker,idType:sj},f_),o(t))return{result:I}
const k=n[0]
let O
jr(e,`Adverts received from ad server: ${t.filter(i).map(e=>`[${e.id}]`).join(", ")}`)
let E=!0
for(const a of t){if(r(a))continue
if(tt(e,a)){jr(e,`[${a.id}] filtered by shouldFilter() - app probably not supported on current os or device`)
continue}const t=Rr(a.id,null==k?void 0:k.id,u),h=Nr(k,t)
if(a.attributes[wN]=Fr(a,h),o(a.attributes[wN])){jr(e,`[${a.id}] filtered because no appropriate iAd dictionary was found. (Probably a server issue if hitting this)`)
continue}const S={metricsOptions:{pageInformation:c.pageInformation,locationTracker:c.locationTracker,targetType:RU,isAdvert:!0},hideZeroRatings:!0,artworkUseCase:8,isNetworkConstrained:C,canDisplayArcadeOfferButton:$d(0,ux)},P=l(Pe(e,a,wN),"format.images"),R=o(O),D=$r(Tu(e,a,S,YQ,f)),_=null===(w=null==f?void 0:f.displayStyle)||void 0===w?void 0:w.screenshots,L=Dr(e,D,a.id,h,P,O,_,k,u,d,c,p)
if(r(L)){jr(e,`[${a.id}] will not be displayed because we could not create an ad style compatible with ${Gr(O)}`)
continue}if(!fo(e,a,null,L.style)){jr(e,`[${a.id}] filtered because localization is not available`)
continue}R?(jr(e,`[${a.id}] first ad dictates ad display style of: ${Gr(L)}`),O=L):jr(e,`[${a.id}] will be displayed because it is compatible with the display style of: ${Gr(L)}, which is the same height as display style: ${Gr(O)}`),c.pageInformation.iAdInfo.apply(e,a),null===(g=c.pageInformation.iAdInfo)||void 0===g||g.setTemplateType(L.style)
let x=Tu(e,a,S,YQ,f)
if(x=Br(x,L,t,E),e.props.enabled(zB)?null===(m=x.searchAdOpportunity)||void 0===m||m.setTemplateType(L.style):null===(v=x.searchAd)||void 0===v||v.setTemplateType(L.style),"TEXT"===L.style){const t=q(a,ov)
if(t!==zG){let n
n=Ce(e,a,t===pj?NN:t)
const r=null!==(y=x.searchAd)&&void 0!==y?y:null===(A=x.searchAdOpportunity)||void 0===A?void 0:A.searchAd
i(r)&&i(n)&&(r.advertisingText=n)}I.displaysScreenshots=!1}if(s(x)){const t=Lr(n,x.adamId)
i(t)&&(e.props.enabled(zB)?null===(T=x.searchAdOpportunity)||void 0===T||T.setDuplicatePosition(t):null===(b=x.searchAd)||void 0===b||b.setDuplicatePosition(t)),I.lockups.push(x),af(c.locationTracker),E=!1}}if(nf(c.locationTracker),s(I.lockups)){const n=t[0]
c.pageInformation.iAdInfo.apply(e,n),af(c.locationTracker)}return O?null===(S=c.pageInformation.iAdInfo)||void 0===S||S.setTemplateType(O.style):null===(P=c.pageInformation.iAdInfo)||void 0===P||P.setTemplateType(null),I.condensedBehavior=ZU,{result:I,displayStyle:null==O?void 0:O.style}}(e,u,c,t,a,null!=f?f:null,null!=p?p:null,b,P)
I=n.result,C=n.displayStyle,s(null==I?void 0:I.lockups)&&(I.searchAdOpportunity=I.lockups[0].searchAdOpportunity,A.push(I))}let k=!0
const O=iw(n,e)
for(const[l,S]of c.entries()){if(l===O){const r=aw(e,t.requestDescriptor,d,a)
if(r.length>0){const t=null!==(g=null===(w=null===(h=null==n?void 0:n.displayStyle)||void 0===h?void 0:h.guidedSearch)||void 0===w?void 0:w.title)&&void 0!==g?g:e.loc.string("Search.Guided.Title.ExploreMore"),o=new PQ(t,r)
pf(e,o,{...a,id:J_,kind:V$,targetType:cC,title:t,softwareType:null}),A.push(o),af(a.locationTracker)}}if(!i(S.attributes)){T.push(...c.slice(l))
break}if(tt(e,S,10750))continue
k&&s(null==I?void 0:I.lockups)&&Hr(e,null!=u?u:[],I,S,null!=f?f:null,null!=p?p:null,a,P)
const E=Tr(e,S,n,P,a,t.requestDescriptor.isNetworkConstrained,t.requestDescriptor.searchEntity,b)
E&&(k&&s(I)&&s(I.lockups)&&Vr(0,I,E,b,C),k&&Wr(e)&&i(null===(m=a.pageInformation)||void 0===m?void 0:m.iAdInfo)&&(r(I)||o(null==I?void 0:I.lockups))&&(E.searchAdOpportunity=Zr(e,a.pageInformation),null===(v=E.searchAdOpportunity)||void 0===v||v.setMissedOpportunityReason(JR),null===(y=E.searchAdOpportunity)||void 0===y||y.setTemplateType(yB)),A.push(E),k=!1,af(a.locationTracker))}return await async function(e,t){return await yg.context("applyClientFilteringToIAPs",async()=>{const n={}
for(const e of t)if(e.resultType===rN){const t=e.lockup
t.parent&&t.productIdentifier&&t.parent.bundleId?n[t.productIdentifier]=t.parent.bundleId:yg.unexpectedNull(gG,fj,`required fields for ${t.adamId}`)}return 0===Object.keys(n).length?await Promise.resolve(t):await e.clientOrdering.visibilityForIAPs(n).then(e=>t.filter(t=>{if(t.resultType!==rN)return!0
const n=t.lockup
return!(!n.productIdentifier||!e[n.productIdentifier])||n.isVisibleByDefault}))})}(e,A).then(e=>({builtSearchResults:e,deferredSearchResults:T}))}function aw(e,t,n,r){if((0,Ag.isNothing)(n)||0===n.length)return[]
tf(0,{pageInformation:r.pageInformation,locationTracker:r.locationTracker,targetType:ME},"")
const o=[]
for(const i of n){const n=Xh(e,PS,t,i,r)
n&&(o.push(n),af(r.locationTracker))}return nf(r.locationTracker),o}function cw(e,t,n,r){const o=new pQ(t,t,null,r)
return o.spellCheckEnabled=!1,o.excludedTerms=[n],o.originatingTerm=n,o}function lw(e,t){return t&&t.results?t.results.slice(0,t.maxPerPage):[]}function uw(e,t){let n=[]
if(t&&t.results&&(n=t.results.slice(t.maxPerPage,t.results.length)),o(n))return null
const r={...t}
return r.results=n,r}function dw(e,t){const n=e.bag.searchResultsLearnMoreEditorialId
if((0,Tg.isNothing)(n)||0===(null==n?void 0:n.length))return
const r={kind:iN,softwareType:null,title:e.loc.string(SS),id:n,targetType:aj,pageInformation:t.pageInformation,locationTracker:t.locationTracker},o=e.loc.string("SEARCH_TRANSPARENCY_TEXT"),i=new _q(HG)
i.title=o,i.pageUrl=`https://apps.apple.com/story/id${n}`,Lf(e,i,r)
const s={}
s[`${e.loc.string(SS)}`]=i
const a=new DV(o,dU)
return new uz(a,s)}function fw(e){return(0,Tg.isSome)(e)&&0!==e.length?`SearchResults.${e}.shelfId`:"SearchResults.shelfId"}function pw(e){switch(e){case im.iOS:return dj
case im.visionOS:return"visionos"
default:return"SearchTopResults"}}function hw(e,t){const n=new iQ
return i(t)&&(n.facets=tw(e,t),n.pageFacets=nw(e),n.selectedFacetOptions=rw(e)),n.results=[],n}function ww(e,t){const n=new aQ([])
return i(t)&&(n.facets=tw(e,t),n.pageFacets=nw(e),n.selectedFacetOptions=rw(e)),n}async function gw(e,t){return await yg.context("searchResultsFromResponse",async()=>{var n
const a=null!==(n=e.fetchTimingMetricsBuilder)&&void 0!==n?n:new gg.FetchTimingMetricsBuilder,c=await a.measureModelConstructionAsync(async()=>{var n,a,c,l,u,d,f,p,h,w,g,m,v,y,A,T,b,S,P,I
const C=t.catalogResponse,k=t.requestMetadata,O=k.searchRequestUrl,E=t.sponsoredSearchRequestData,R=C.results.guidedSearch,D=function(e,t,n){var r,o,i,s,a,c,l
return{term:t.term,suggestedTerm:null===(o=null===(r=n.results)||void 0===r?void 0:r.spellCheck)||void 0===o?void 0:o.suggestedTerm,correctedTerm:null===(s=null===(i=n.results)||void 0===i?void 0:i.spellCheck)||void 0===s?void 0:s.correctedTerm,resultsTerm:null!==(l=null===(c=null===(a=n.results)||void 0===a?void 0:a.spellCheck)||void 0===c?void 0:c.correctedTerm)&&void 0!==l?l:t.term,originatingTerm:t.originatingTerm}}(0,k.requestDescriptor,C),_=(P=t.sponsoredSearchAdvertData)&&P.odmlSuccess,x={locationTracker:{rootPosition:0,locationStack:[]},pageInformation:oi(e,k.requestDescriptor,C,D,O,pw(),E,_,R),createUniqueImpressionId:!0},M=e.featureFlags.isEnabled("shelves_2_0_search")||!0,$=M?new aQ:new iQ,F=iw(C.meta,e);(0,Tg.isNothing)(F)&&function(e,t,n,r,i){const a=n.requestDescriptor
tf(0,{pageInformation:i.pageInformation,locationTracker:i.locationTracker,targetType:ME},"")
const c=[]
if(s(r))for(const t of r){const n=Xh(e,PM,a,t,i)
n&&(c.push(n),af(i.locationTracker))}if(o(c)&&n.requestDescriptor.searchEntity){const t=function(e,t,n){var r
const o=t.searchEntity
if(!o)return null
const i=new d6(null,LE)
let s
switch(function(e,t,n,r,o){const i=mO,s=u_,a={targetId:r},c=Pf(e,r,s,{actionType:i,location:Xd(0,{pageInformation:null,locationTracker:o.locationTracker,targetType:s},r),searchTerm:n})
t.actionMetrics.addMetricsData(c)
const l=If(e,n,s,i,null,a)
t.actionMetrics.addMetricsData(l)}(e,i,t.term,o,n),o){case $j:s=e.loc.string("GUIDED_SEARCH_TOKEN_ENTITY_ARCADE")
break
case dG:s=e.loc.string("GUIDED_SEARCH_TOKEN_ENTITY_DEVELOPERS")
break
case lN:s=e.loc.string("GUIDED_SEARCH_TOKEN_ENTITY_STORIES")
break
case Fj:s=e.loc.string("GUIDED_SEARCH_TOKEN_ENTITY_APPLEWATCH")
break
default:ue(o)}const a=new c6(s,!0,null!==(r=Qh(o))&&void 0!==r?r:IS,s,i)
return Qo(0,a,u_,n),a}(e,n.requestDescriptor,i)
c.push(t),af(i.locationTracker)}const l=function(e,t,n){var r
if(o(n))return null
const i=t.term,s=null!==(r=t.guidedSearchTokens)&&void 0!==r?r:[],a=[]
for(const e of n){const t=e.displayLabel,n=Array.from(s)
if(e.isSelected){const e=n.indexOf(t);-1!==e&&n.splice(e,1)}else n.push(t)
const r=new l6(i,n,e.finalTerm)
a.push(r)}return a}(0,n.requestDescriptor,r)
nf(i.locationTracker),s(c)&&(t.guidedSearchTokens=c,t.guidedSearchQueries=l,function(e,t,n){const r=rf(n.locationTracker)
t.guidedSearchTokensParentImpressionMetrics=new SH({impressionIndex:r,impressionType:ME,idType:zF,id:DS,name:"Search Revisions"})}(0,t,i),af(i.locationTracker))}(e,$,k,null==R?void 0:R.facets,x)
const N={id:vM,kind:null,softwareType:null,targetType:uB,title:aF,pageInformation:x.pageInformation,locationTracker:x.locationTracker,idType:zF}
let B
M&&(B=new Ez(K_),B.id=fw(),B.isHorizontal=!1,pf(e,B,N),ef(0,N,aF))
const U=null!==(l=null===(c=null===(a=null===(n=C.meta)||void 0===n?void 0:n.results)||void 0===a?void 0:a.search)||void 0===c?void 0:c.searchSafety)&&void 0!==l&&l,G=U?[]:function(e,t){return function(e,t,n){if(r(n))return t
const i=[],s=t.reduce((e,t)=>({...e,[t.id]:t}),{})
for(const t of n.adverts){const n=s[t.adamId]
if(o(n)){jr(e,`[${t.adamId}] skipped - Data was not part of original response`)
continue}if(o(n.attributes)){jr(e,`[${n.id}] skipped - Data is missing attributes`)
continue}const r=ew(e,n,t)
i.push(r)}return i}(e,L(t.catalogResponse.results[CS]),t.sponsoredSearchAdvertData)}(e,t),j=(null===(p=null===(f=null===(d=null===(u=C.meta)||void 0===u?void 0:u.results)||void 0===d?void 0:d.search)||void 0===f?void 0:f.reason)||void 0===p?void 0:p.kind)===FE?"NLS_NORESULTS":"NLS_NOAD"
U&&(null===(h=x.pageInformation)||void 0===h||h.iAdInfo.setMissedOpportunity(e,j,qB))
const V=await sw(e,k,C.meta,x,function(e,t){return L(t.catalogResponse.results.search)}(0,t),G,null==R?void 0:R.facets,function(e){var t,n
return null!==(n=null===(t=e.sponsoredSearchAdvertData)||void 0===t?void 0:t.installedStates)&&void 0!==n?n:{}}(t),function(e){var t,n
return null!==(n=null===(t=e.sponsoredSearchAdvertData)||void 0===t?void 0:t.appStates)&&void 0!==n?n:{}}(t))
if(U&&0!==V.builtSearchResults.length){const e=V.builtSearchResults[0].lockup.searchAdOpportunity
null==e||e.setMissedOpportunityReason(j),null==e||e.setTemplateType(yB)}if(M&&B){const t=$
B.items=V.builtSearchResults,t.resultsParentImpressionMetrics=B.impressionMetrics,t.shelves.push(B)
const n=function(e,t){return yg.context("createSearchResultsContextCard",()=>{var n,r
if((0,Tg.isNothing)(e)||![bU,hU].includes(t.host.platform))return
if(t.props.isNotEnabled("searchResultsContextCardV2"))return
const o=null===(n=e.links)||void 0===n?void 0:n.map(mw),i=null==o?void 0:o.reduce((e,t)=>{var n
return(null===(n=t.title)||void 0===n?void 0:n.length)&&(e[t.title]=t),e},{})
let s=e.text
1===(null==o?void 0:o.length)&&(null===(r=o[0].title)||void 0===r?void 0:r.length)?s+=" "+o[0].title:o&&o.length>1&&(s.length>0&&(s+="\n"),s+=o.map(e=>e.title).filter(e=>null==e?void 0:e.length).join("\n"))
const a=new DV(s),c=new uz(a,i)
return new sQ(c)})}(C.results.queryContext,e),r=null===(m=null===(g=null===(w=C.meta)||void 0===w?void 0:w.results)||void 0===g?void 0:g.search)||void 0===m?void 0:m.reason
if((null==r?void 0:r.kind)===FE)t.unavailableReason={title:e.loc.stringWithFallback("Search.Results.Empty.Title","No results"),message:r.text,action:(I=r.links,yg.context("actionFromSearchResultsLinks",()=>{const e=null==I?void 0:I.find(e=>e.url.length>0)
return e?mw(e):void 0})),contextCard:n}
else if(n){const r=B.items[0],o=n=>{if((null==r?void 0:r.resultType)===$m&&e.props.isNotEnabled("queryContextCardAboveAd")){const e=new Ez(B$)
e.placeholderContentType="banner",e.items=[new Iz,new Iz],n?t.shelves.unshift(e):t.shelves.push(e)}},i=null!==(T=null===(A=null===(y=null===(v=C.meta)||void 0===v?void 0:v.displayStyle)||void 0===y?void 0:y.queryContext)||void 0===A?void 0:A.position)&&void 0!==T?T:0,s=new Ez("searchResultsContextCard")
if(s.items=[n],i>0){const e=B.items.splice(i),n={...B,id:"searchResults2",items:e,isValid:B.isValid}
t.shelves.push(s),o(!1),t.shelves.push(n)}else o(!0),t.shelves.unshift(s)}U&&0===V.builtSearchResults.length&&(null===(S=(b=e.onDeviceSearchHistoryManager).removeRecentSearchTerm)||void 0===S||S.call(b,D.term))}else{const e=$
e.results=V.builtSearchResults,function(e,t,n){const r=rf(n.locationTracker)
t.resultsParentImpressionMetrics=new SH({impressionIndex:r,impressionType:uB,idType:zF,id:vM,name:aF})}(0,e,x)}return V.deferredSearchResults.length>0&&($.nextPage=function(e,t,n,r,i){return o(t)?null:{results:t,maxPerPage:30,requestMetadata:n,metricsOptions:i,responseMetadata:null!=r?r:{},contentOffsetWithinResultsShelf:rf(i.locationTracker)}}(0,V.deferredSearchResults,k,C.meta,x)),M&&nf(N.locationTracker),$.message=function(e,t,n){const r=i(t.correctedTerm),o=i(t.suggestedTerm)
return tf(0,{pageInformation:n.pageInformation,locationTracker:n.locationTracker,targetType:aj},"spellCorrection"),r?function(e,t,n){const r=t.term,o=cw(0,r,t.resultsTerm,vO)
$f(e,o,Nj,n.locationTracker)
const i=`<i>${t.correctedTerm}</i>`,s=e.loc.string("SEARCH_SHOWING_RESULTS_FOR_TEMPLATE").replace($E,i),a=new uz(new DV(s,gU),{}),c=e.loc.string("SEARCH_SEARCH_INSTEAD_FOR_TEMPLATE").replace($E,r),l={}
l[`${c}`]=o
const u=new uz(new DV(c),l)
return new wQ(a,u,o)}(e,t,n):o?function(e,t,n){const r=t.suggestedTerm,o=cw(0,r,t.resultsTerm,yO)
$f(e,o,Nj,n.locationTracker)
const i=`<i>${r}</i>`,s=e.loc.string("SEARCH_DID_YOU_MEAN_TEMPLATE").replace($E,i),a={}
a[`${r}`]=o,a[`${r}?`]=o
const c=new uz(new DV(s,gU),a)
return new wQ(c,null,o)}(e,t,n):(nf(n.locationTracker),null)}(e,D,x),!o(k.requestDescriptor.searchEntity)||($.facets=tw(e,k.requestDescriptor.facets,t.categoriesFilterData),$.pageFacets=nw(e,t.categoriesFilterData),$.selectedFacetOptions=s(t.requestMetadata.requestDescriptor.selectedFacetOptions)?t.requestMetadata.requestDescriptor.selectedFacetOptions:rw(e)),$.isAutoPlayEnabled="tv"!==e.client.deviceType,$.isCondensedSearchLockupsEnabled=e.client.isPhone,$.transparencyLink=dw(e,x),ti(e,$,x.pageInformation),$.searchClearAction=vw(e,L$,x.pageInformation,x.locationTracker,D.term),$.searchCancelAction=vw(e,sF,x.pageInformation,x.locationTracker,D.term),$})
return c})}function mw(e){return yg.context("actionFromSearchResultsLink",()=>{var t
const n=new OH(e.url,!1)
return n.title=null===(t=e.label)||void 0===t?void 0:t.replace(" ","\xa0"),n.artwork=new AV("systemimage://arrow.up.forward",0,0,[]),n})}function vw(e,t,n,r,o){const s=new tW
let a,c
switch(t){case sF:a=eD,c=sF
break
case L$:a="delete",c=L$}return function(e,t,n,r,o){const s={searchTerm:o,actionType:n.actionType}
n.actionDetails&&(s[zN]=n.actionDetails),n.actionContext&&(s[iT]=n.actionContext),o&&(s[bG]=o),i(n.softwareType)&&(s[r$]=n.softwareType),n.mercuryMetricsData&&Object.assign(s,n.mercuryMetricsData)
const a=Pf(e,n.id,null!=r?r:Ud(0,n),s)
t.actionMetrics.addMetricsData(a)}(e,s,{targetType:Nj,id:c,idType:void 0,actionType:a,pageInformation:n,locationTracker:r},Nj,o),s}async function yw(e,t){const n=function(e){return e.bag.mediaAPISearchHintsEnabled&&lt(e,e.bag.mediaAPISearchHintsRolloutRate)}(e)
return function(e,t,n,r){return yg.context("searchHintsFromApiResponse",()=>{var o,i,s,a
const c={targetType:oA,pageInformation:ri(0,0,n.hintsRequestUrl,n.dataSetId),locationTracker:{rootPosition:0,locationStack:[]}}
let l=null;(null===(o=n.userTypedTerm)||void 0===o?void 0:o.length)&&(l=new pQ(n.userTypedTerm,n.userTypedTerm,null,AO),l.spellCheckEnabled=!0,l.prefixTerm=t,Af(e,l,c),$f(e,l,c.targetType,c.locationTracker,c.pageInformation),af(c.locationTracker))
const u=null!==(s=null===(i=n.rawHints)||void 0===i?void 0:i.map(n=>function(e,t,n,r,o){var i,s,a,c,l
const u=null!==(i=function(e,t,n,r,o){if(!t)return n
switch(r){case Gj:return o
case eU:return dG
case kj:return lN
default:return null}}(0,o,t.hintsEntity,t.entity,t.context))&&void 0!==i?i:void 0,d=new pQ(null!==(s=t.displayTerm)&&void 0!==s?s:"",null!==(a=t.searchTerm)&&void 0!==a?a:"",null,e$,u,t.source)
return d.artwork=function(e,t){return ce(e,`systemimage://${t}`)}(e,null!==(c=Qh(u))&&void 0!==c?c:IS),d.spellCheckEnabled=!0,d.prefixTerm=n,Af(e,d,r),$f(e,d,r.targetType,r.locationTracker,null!==(l=r.pageInformation)&&void 0!==l?l:void 0),af(r.locationTracker),d}(e,n,t,c,r)))&&void 0!==s?s:[]
null!=l&&u.unshift(l)
const d=new hQ(u,null!==(a=n.ghostHintsTerm)&&void 0!==a?a:null),f=If(e,t,"key",OT,n.hintsRequestUrl,{...wt(c.pageInformation)})
return d.pageMetrics.pageFields=wt(c.pageInformation),d.pageMetrics.addData(f,[Dg.PageInvocationPoint.pageEnter]),d.searchClearAction=vw(e,L$,c.pageInformation,c.locationTracker,t),d.searchCancelAction=vw(e,sF,c.pageInformation,c.locationTracker,t),d})}(e,t,await async function(e,t,n){if(n){const n=function(e,t){const n=new Uz(e).includingAppBinaryTraitsAttribute(!1).forType(Y_).withLimit(10).withSearchTerm(t).addingQuery(EE,AS)
e.host.clientIdentifier===KV&&n.addingQuery(GN,kG)
const r=[]
return e.appleSilicon.isSupportEnabled&&r.push(z_),ki(e)&&r.push(FG),e.bag.isNaturalLanguageSearchEnabled&&r.push(TS),r.length>0&&n.enablingFeatures(r),n}(e,t)
return await An(e,n).then(t=>{var r
return{hintsRequestUrl:qe(e,n).toString(),userTypedTerm:d(t,vS),rawHints:c(t,"results.suggestions"),ghostHintsTerm:d(t,yS),dataSetId:d(null===(r=t.meta)||void 0===r?void 0:r.metrics,cX)}})}{const n=function(e,t){let n=kq.from(e.bag.searchHintsURL).param("caller",EL).param("v","4")
r(t)||(n=n.param(uN,t))
const o=e.host.clientIdentifier
n=o===JV?n.param(Zk,"watchSoftware").param(OE,Fk):o===KV?n.param(OE,Nk):n.param(OE,lB)
const i=[]
return e.appleSilicon.isSupportEnabled&&i.push(z_),ki(e)&&i.push(FG),i.length>0&&(n=n.param(JL,i.join(","))),n.build()}(e,t),o={url:n,signingStyle:$N}
return await async function(e,t){return await async function(e,t,n){const o=await e.network.fetch(t)
if(!o.ok)throw Error(`Bad Status code ${o.status} for ${t.url}`)
const s=Date.now(),a=n(o.body),c=Date.now()
if(a){const e=function(e,t,n){return r(e)||0===e.length?null:{...e[0],parseStartTime:t,parseEndTime:n}}(o.metrics,s,c)
i(e)&&(a[sm.timingValues]=e)}return a[sm.requestedUrl]=t.url.toString(),a}(e,t,n=>{if((0,Ag.isSome)(n))return e.plist.parse(n)
throw new Error(`Could not fetch Plist, response body was not defined for ${t.url}`)})}(e,o).then(e=>({hintsRequestUrl:n,userTypedTerm:d(e,vS),rawHints:c(e,e$),ghostHintsTerm:d(e,yS)}))}}(e,t,n),n)}function Aw(e,t,n,r,i){const s=function(e,t,n,r,i){if(o(i))return[]
const s=[]
for(const[a,c]of i.entries()){const i=Tw(e,c,a,t,n,r)
o(i)||(s.push(i),af(n))}return s}(e,n,r,t.itemDisplayStyle,i),a=new mW
a.title=e.loc.string("Action.ClearSearches"),function(e,t){const n=Pf(e,"Clear Searches",Nj,{actionType:"confirm"})
t.actionMetrics.addMetricsData(n)}(e,a)
const c=new qH([a])
c.title=e.loc.string("Sheet.ClearSearches.Title"),c.message=e.loc.string("Sheet.ClearSearches.Message"),c.destructiveActionIndex=0,c.isCancelable=!0
const l=new EH([c])
l.title=e.loc.string("Action.Clear")
const u="word_cloud"===(f=t.shelfDisplayStyle).layout?BS:2===f.layoutSize?"twoColumnList":LS,d=new Ez(u)
var f
return d.id=NS,d.presentationHints={isWidthConstrained:!0},d.header={title:t.title,accessoryAction:l},d.contentType===BS&&(d.isHorizontal=!0,d.rowsPerColumn=t.shelfDisplayStyle.layoutSize),d.contentsMetadata={type:"searchFocusTwoColumnList",numberOfColumns:s.length>1?t.shelfDisplayStyle.layoutSize:1},d.items=s,d.isHidden=o(s),d.refreshUrl=function(e){return`${AW}:/${ZW}/${PW}/?${pq.isOnDeviceSearchHistoryShelf}=true&${pq.token}=${function(e){return encodeURIComponent(JSON.stringify(e))}(e)}`}(t),d}function Tw(e,t,n,r,o,i){const s=t.term,a=t.entity,c=Cw(e,function(e,t,n){if((0,Ag.isNothing)(n))return t
let r
return n===dG?r="Search.ResultsTitle.InDevelopers":n===lN?r="Search.ResultsTitle.InStories":n===Fj?r="Search.ResultsTitle.InWatch":n===$j&&(r="Search.ResultsTitle.InArcade"),(0,Ag.isNothing)(r)?t:e.loc.string(r).replace("@@search_term@@",t)}(e,s,a),s,a,o,gO,void 0,r,i)
return(0,Ag.isNothing)(c)?null:(c.id=t.id,pf(e,c,{targetType:aj,pageInformation:r,locationTracker:o,kind:aj,softwareType:null,title:t.term,hintsEntity:t.entity,id:`${n}`,idType:sj}),c)}function bw(e,t,n){var r
const i=t.data
if(o(i))return
let s=0
const a=e.bag.mediaAPISearchFocusEnabled&&(0,Ag.isSome)(n.pageType)
for(const c of i){if(o(c))continue
if(a){const e=p(c,yU),t=Sw(null==e?void 0:e.category)
if((0,Ag.isSome)(t)&&t!==n.pageType)continue}const i=Ew(e,n,s,t.meta||null);(0,Ag.isSome)(i)&&(n.shelves.push(i),af(n.metricsLocationTracker))
const l=q(c,"contentKind"),u=Gh(0,c,l),d=Rw(0,c,u,n,l)
ef(0,d.metricsOptions,null!==(r=u.title)&&void 0!==r?r:"")
const f=Pw(e,c,n,d,u,l)
nf(n.metricsLocationTracker),o(f)||(pf(e,f,d.metricsOptions),so(e,[f],wU,d.metricsOptions.id,n.metricsPageInformation),n.shelves.push(f),s+=1,af(n.metricsLocationTracker))}}function Sw(e){switch(e){case yM:return wm.Landing
case"search-focus":return wm.Focus
default:return}}function Pw(e,t,n,c,l,u){switch(u){case Ng.Suggestion:return n.pageType===wm.Focus?function(e,t,n,r,i){var s,a,c
const l=se(t,Uj)
if((0,Ag.isNothing)(l))return null
const u=[],d=new Ez(LS)
d.isHorizontal=!1,d.title=r.title,d.presentationHints={isWidthConstrained:!0}
for(const[t,i]of l.entries()){const l=q(i,bG)
if((0,Ag.isNothing)(l)||0===l.length)continue
const d=null!==(s=q(i,qE))&&void 0!==s?s:l,f=Cw(e,null!=d?d:"",null!=l?l:"",void 0,n.metricsLocationTracker,qM,void 0,n.metricsPageInformation,null!==(a=r.searchLandingItemDisplayStyle)&&void 0!==a?a:void 0);(0,Ag.isNothing)(f)||o(f)||(pf(e,f,{targetType:aj,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,kind:aj,softwareType:null,title:null!==(c=f.title)&&void 0!==c?c:"",id:`${t}`,idType:sj}),u.push(f),af(n.metricsLocationTracker))}return o(u)?null:(d.items=u,d)}(e,t,n,l):function(e,t,n,i,s){var c
const l=se(t,Uj),u=[],d=new Ez(CG)
d.isHorizontal=!1,d.title=i.title,d.presentationHints={isWidthConstrained:!0}
for(const[t,o]of l.entries()){const s={targetType:aj,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},a=Iw(e,o,n,i)
r(a)||r(a.action)||(pf(e,a.action,{...s,kind:aj,softwareType:null,title:a.action.title,id:`${t}`,idType:sj}),u.push(a),af(n.metricsLocationTracker))}return o(u)?null:(d.items=u,a(null===(c=i.displayStyle)||void 0===c?void 0:c.layoutSize)?d.contentsMetadata={type:bx,numberOfColumns:i.displayStyle.layoutSize}:(e.client.isPhone||e.client.isPad)&&(d.contentsMetadata={type:bx,numberOfColumns:u.length>=6?2:1}),d)}(e,t,n,l)
case Ng.CategoriesAndCharts:return Yh(e,t,!1,l,0,c)
case Ng.Apps:return function(e,t,n,o,a){var c,l,u,d,f
const p=[]
let h=!1,w=function(e){const t=re(e,Uj)
return null==t?void 0:t.data}(t)
const g=new Ez(a.shelfStyle)
if(g.isHorizontal=!1,g.title=o.title,g.shouldFilterApps=!1,g.filteringExcludedItems=a.filteringExcludedItems,s(w)){const t=function(e,t,n){const o=tc(t.adStitcher,n.adPositionInfo)
if(r(o))return null
const s=o.data
try{const r=Ow(e,s,t,n)
return i(r)?n.filteringExcludedItems=[s.id]:go(e,t.adIncidentRecorder,s),r}catch(n){return jr(e,`Failed to create SLP ad lockup: ${n}`),go(e,t.adIncidentRecorder,s),null}}(e,n,a)
t&&t instanceof Jq&&(h=!0,p.push(t),af(n.metricsLocationTracker),w=w.filter(e=>e.id!==t.adamId))}const m=(0,Ag.isSome)(o.displayCount)
s(w)&&(w=Co(w,null!==(c=n.recoImpressionData)&&void 0!==c?c:{},null!==(u=null===(l=a.metricsOptions)||void 0===l?void 0:l.recoMetricsData)&&void 0!==u?u:{}))
for(const t of w){if(t.type===xj)return null
if(r(t.attributes))continue
if(tt(e,t,80894))continue
const o=Ow(e,t,n,a)
o&&(p.push(o),af(n.metricsLocationTracker))}if(m){const e=o.displayCount
g.items=p.slice(0,e)}else g.items=p
if(m){const r=new Ez(a.shelfStyle)
r.items=h?p.splice(1,p.length-1):p
const i=new xz([r])
i.title=g.title
const s=new _q(Vj)
s.pageUrl=o.seeAllLink,s.title=e.loc.string(xU),s.pageData=i,g.seeAllAction=s,xf(e,s,s.pageUrl,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker}),ti(e,i,ni(0,t.id))}return"horizontal"===(null===(d=o.displayStyle)||void 0===d?void 0:d.layout)&&(g.isHorizontal=!0,g.rowsPerColumn=null===(f=o.displayStyle)||void 0===f?void 0:f.layoutSize),g}(e,t,n,l,c)
case Ng.EditorialCollection:return null
default:return function(e,t,n,r,o){return"search-recommendations-marker"!==t.type?null:q(t,Px)===_S?function(e,t,n){return Aw(e,new h6(n.title,n.displayCount,n.displayStyle,n.searchLandingItemDisplayStyle),t.metricsPageInformation,t.metricsLocationTracker,t.searchHistory)}(e,n,o):null}(e,t,n,0,l)}}function Iw(e,t,n,r){var o,i
const s=q(t,bG)
if((0,Ag.isNothing)(s)||0===s.length)return null
const a=null!==(o=q(t,qE))&&void 0!==o?o:s,c=new pQ(a,s,null,qM,void 0,void 0)
return c.artwork=kw(null!==(i=r.searchLandingItemDisplayStyle)&&void 0!==i?i:void 0,e),$f(e,c,Nj,n.metricsLocationTracker),(0,Ag.isSome)(c)?new nW(c):null}function Cw(e,t,n,r,i,s,a,c,l){if(o(n))return null
const u=new pQ(t,n,null,s,null!=r?r:void 0,a,[])
return u.artwork=kw(l,e),$f(e,u,Nj,i,c),u}function kw(e,t){var n
return(null==e?void 0:e.iconKind)===Gg.Symbol&&(null===(n=null==e?void 0:e.iconKind)||void 0===n?void 0:n.length)?ce(t,`systemimage://${e.iconSymbol}`):t.client.isPhone?ce(t,Tx):void 0}function Ow(e,t,n,s){if(o(t))return null
if(s.shelfStyle!==uj)return null
let a=null
!i(s.shelfBackground)||s.shelfBackground.type!==_U&&s.shelfBackground.type!==DD||(a=nj)
const c=hu(e,t,{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:$(t),isAdvert:qr(0,t)},artworkUseCase:$u(0,s.shelfStyle),offerStyle:a,canDisplayArcadeOfferButton:$d(0,s.shelfStyle),isContainedInPreorderExclusiveShelf:!1,shouldHideArcadeHeader:!1})
return r(c)||!c.isValid()?null:c}function Ew(e,t,n,o){var i
const s=tc(t.adStitcher,{shelfIdentifier:W0,slot:n})
if(r(s))return null
const a=s.data
try{switch(null===(i=null==o?void 0:o.adDisplayStyle)||void 0===i?void 0:i.format){case GD:return function(e,t,n){var r,o,i
const s=new Ez(VE)
s.isHorizontal=!1
const a=bj,c=nj,l=vf(e,t,d(t.attributes.name),{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,targetType:RU,recoMetricsData:$(t),isAdvert:qr(0,t)})
l.kind=HE,l.pageInformation.iAdInfo.apply(e,t)
const u={offerEnvironment:a,offerStyle:c,metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:$(t),isAdvert:qr(0,t),disableFastImpressionsForAds:!0},artworkUseCase:$u(0,VE),canDisplayArcadeOfferButton:$d(0,VE)},f={showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}}
let p=Tu(e,t,u,f,null,!1)
const h=p.screenshots[0],w=Kr(h)
n.metricsPageInformation.iAdInfo.setTemplateType(w)
const g=Gu(e,t,{useCase:0,withJoeColorPlaceholder:!0,overrideTextColorKey:Z_})
p=Tu(e,t,u,f,null,!1),e.props.enabled(zB)?null===(r=p.searchAdOpportunity)||void 0===r||r.setTemplateType(w):null===(o=p.searchAd)||void 0===o||o.setTemplateType(w)
const m=g.backgroundColor,v=g.textColor,y=new FY(p,[h],!0,v,m,null!==(i=e.bag.todayAdMediumLockupScreenshotsRiverSpeed)&&void 0!==i?i:8)
return gf(e,y,l,l.pageInformation.iAdInfo),y.clickAction=Iu(e,t,l,null),s.items=[y],s}(e,a,t)
case"condensed":return function(e,t,n){var r,o,i
const s=new Ez(WE)
s.isHorizontal=!1
const a=bj,c=nj,l=vf(e,t,d(t.attributes.name),{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,targetType:RU,recoMetricsData:$(t),isAdvert:qr(0,t)})
l.kind=HE,l.pageInformation.iAdInfo.apply(e,t)
const u={offerEnvironment:a,offerStyle:c,metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:$(t),isAdvert:qr(0,t),disableFastImpressionsForAds:!0},artworkUseCase:$u(0,WE),canDisplayArcadeOfferButton:$d(0,WE)}
null===(r=n.metricsPageInformation.iAdInfo)||void 0===r||r.setTemplateType(yB)
const f=Tu(e,t,u,{showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}},null,!1)
e.props.enabled(zB)?null===(o=f.searchAdOpportunity)||void 0===o||o.setTemplateType(yB):null===(i=f.searchAd)||void 0===i||i.setTemplateType(yB)
const p=new NY(f,f.icon)
return gf(e,p,l,l.pageInformation.iAdInfo),s.items=[p],s}(e,a,t)
default:return go(e,t.adIncidentRecorder,a),null}}catch(n){return jr(e,`Failed to create SLP ad shelf: ${n}`),go(e,t.adIncidentRecorder,a),null}}function Rw(e,t,n,r,o=null){const i=jh(0,t,n,r)
return o===Ng.Apps?{...i,shelfStyle:uj,adPositionInfo:H0}:i}async function Dw(e,t){const n=new gg.FetchTimingMetricsBuilder,r=e.addingFetchTimingMetricsBuilder(n),o=await Bp(r,t)
return null===o?ww(e,t.facets):await async function(e,t){return await gw(e,t)}(r,o)}async function _w(e,t){return await async function(e,t){return await yg.context("paginatedSearchResultsPageWithToken",async()=>{const n=lw(0,t),r=uw(0,t)
return 0===n.length?await Promise.resolve(ww(e)):await Up(e,n).then(async n=>{const o=L(n),s={id:vM,kind:null,softwareType:null,targetType:uB,title:aF,pageInformation:t.metricsOptions.pageInformation,locationTracker:t.metricsOptions.locationTracker,idType:zF},a=new Ez(K_)
return a.id=fw(),a.isHorizontal=!1,pf(e,a,s),ef(0,s,aF),sf(s.locationTracker,t.contentOffsetWithinResultsShelf),await sw(e,t.requestMetadata,t.responseMetadata,t.metricsOptions,o).then(n=>{const o=dw(e,s),c=function(e,t,n,r,o=0){let i=function(e){const t=e.bag.searchResultsLearnMoreEditorialId
!(0,Tg.isNothing)(t)&&(null==t||t.length)}(e)
const s=n.builtSearchResults.length,a=n.deferredSearchResults.length>0,c=o+s
if(void 0===i||void 0===t||o>=i||a&&c<i||0===c&&!a)return r.items=n.builtSearchResults,[r]
i-=o,r.items=n.builtSearchResults.slice(0,i)
const l=new Ez("searchResultsLearnMoreNotice")
l.isHorizontal=!1
const u=new IQ(t)
l.items=[u]
const d=[r,l],f=n.builtSearchResults.slice(i)
if(f.length>0){const e=new Ez(K_)
e.impressionMetrics=r.impressionMetrics,e.isHorizontal=!1,e.items=f,d.push(e)}return d}(e,o,n,a,t.contentOffsetWithinResultsShelf),l=new aQ(c)
return i(r)&&(r.contentOffsetWithinResultsShelf=rf(s.locationTracker),l.nextPage=r),l.isCondensedSearchLockupsEnabled=e.client.isPhone,l.resultsParentImpressionMetrics=a.impressionMetrics,nf(t.metricsOptions.locationTracker),l.searchClearAction=vw(e,L$,t.metricsOptions.pageInformation,t.metricsOptions.locationTracker,t.requestMetadata.requestDescriptor.term),l.searchCancelAction=vw(e,sF,t.metricsOptions.pageInformation,t.metricsOptions.locationTracker,t.requestMetadata.requestDescriptor.term),l})})})}(e,t)}function Lw(e){return O(e)}function xw(e){return T6}function Mw(e,t,n){var r,o
t.includingAdditionalPlatforms(Lw(e)).includingAttributes(xw()).includingScopedAttributes(kB,[kF]).includingScopedRelationships(kj,[lG,oL]).includingScopedRelationships(kB,[oL]).enablingFeature("editorialItemGroups").usingCustomAttributes($e(e)).includingRelationshipsForUpsell(!0),n&&(t.includingAssociateKeys(kB,[NU,MB]),t.includingAssociateKeys(kj,[MB])),ki(e)&&(t.enablingFeature(FG),t.addingQuery(yU,Cx),t.includingScopedRelationships(xj,[Tj]),t.includingScopedAttributes(xj,[pj,GU,IU])),Ei(e)&&(t.enablingFeature(E$),n&&t.includingKindsKeys(jU,[YL])),Oo(e)&&t.enablingFeature("eiGroupEISelectionOnDevice"),no(e,Cj)&&t.enablingFeature("adSupport"),t.includingAttributes([R$]),t.enablingFeature("heroStyles"),t.includingAttributes([O$])
const i=null!==(o=null===(r=e.userDefaults)||void 0===r?void 0:r.bool(PA))&&void 0!==o&&o
e.bag.enableDeviceDrivenDiscoveryContent&&i&&t.resourceType===Cj&&t.addingQuery("pairedDevices","visionPro")}async function $w(e,t){const n=e.required(y2),a=t.url===eP,l=-1!==t.url.indexOf(HW)
if(a)return await n.fetchPage(e,t.url,hY)
if(l){const r=kq.from(t.url)
return r.param(pq.fetchData,GG),await n.fetchPage(e,r.build(),hY)}{const n=function(e){return new Uz(e).forType(Cj).withSparseCount(1).withSparseLimit(2)}(e)
Mw(e,n,!0)
const a=new mm.FetchTimingMetricsBuilder,l=e.addingFetchTimingMetricsBuilder(a),u=(0,Tg.isSome)(t.experimentIdHeader)?{"X-Apple-User-Experiment-Ids":t.experimentIdHeader}:void 0,f=An(l,n,{headers:u})
f.then(t=>{no(e,Cj)&&function(e,t){const n=oo(e,t,!0)
r(n)||(e.ads.setTimeoutForCurrentOnDeviceAdFetch(t,n),function(e,t,n){e.timeoutManager.setTimeout(t,n)}(e,n,z5))}(e,Cj),ic(e,e.user.dsid,t)})
const p=new q0(f),h=function(e,t){const n={}
if(s(t)){const r=new Uz(e).withIdsOfType(t,kj).includingAdditionalPlatforms(Lw(e)).includingAttributes(xw())
n[vm.OnboardingCards]=new q0(An(e,r,{}).catch(()=>{}),!1)}no(e,Cj)&&(n[vm.Ads]=new q0(Uh(e,Cj).catch(()=>null),!1)),function(e){const t=mr(e),n=lt(e,e.bag.todayTabArcadePersonalizationRate)
return t&&n}(e)&&(n[vm.ODP]=new q0(async function(e,t){return await async function(e,t,n,r){const o=[t,e.timeoutManager.makePromise(r,void 0)]
return await Promise.race(o).then(e=>e)}(e,async function(e){try{const t=await async function(e,t){if(o(t.user.dsid)){const e=`${Y5}: User is currently not signed in.`
throw yg.unexpectedType(SG,e,null),new Error(e)}try{const n=c((await t.onDeviceRecommendationsManager.performRequest({type:"fetchUseCases",tab:e,dsId:t.user.dsid})).useCases)
if(o(n)){const t=`${Y5}: ODP returned no use cases for tab: ${e}`
throw yg.unexpectedType(SG,t,null),new Error(t)}return n}catch(t){const n=`${Y5}: Failed to fetch ODP use cases for tab: ${e}, with error: ${t}`
throw yg.unexpectedType(SG,n,null),new Error(n)}}(Cj,e),n=t.map(t=>new q0(async function(e,t){try{const n=await async function(e,t){if(o(t.user.dsid))throw new Error(`${Y5}: User is currently not signed in.`)
try{return await t.onDeviceRecommendationsManager.performRequest({type:QT,dsId:t.user.dsid,useCase:e})}catch(t){const n=`${Y5}: Failed to perform ODP Today recommendation for useCase: ${e}, with error: ${t}`
throw yg.unexpectedType(SG,n,null),new Error(n)}}(t,e),i=await async function(e,t){const n=c(t[XT])
if(o(n)){const t=`${Y5}: ODP returned no candidates for useCase: ${e}`
throw yg.unexpectedType(SG,t,null),new Error(t)}const i=m(t[TB]),a=n.map(e=>function(e){const t=d(e.id),n=d(e.type)
if(r(t))return
let o,i=[]
switch(n){case jO:i=c(e.candidates).map(e=>d(e.id)).filter(e=>(0,Tg.isSome)(e)),o=kB
break
case iN:o=kj
break
default:return}let a=[]
if(a.push({id:t,type:o}),s(i)){const e=i.map(e=>({id:e,type:kj}))
a=a.concat(e)}return new Z5(t,o,i,a)}(e)).filter(Tg.isSome)
if(r(i)||o(a)){const t=`${Y5}: ODP candidates could not be parsed for useCase: ${e}`
throw yg.unexpectedType(SG,t,null),new Error(t)}return{candidates:a,metrics:i}}(t,n),a=i.metrics,l=i.candidates
if(0===l.length)return
const u=l[0],f=await async function(e,t,n,r){const o=new Uz(r,t.data,!0).addingQuery(pq.onDevicePersonalizationUseCase,e).addingQuery(pq.filterRecommendable,GG)
Zn(r,o)
try{const i=await An(r,o)
return new K5(e,[t],n,i)}catch(e){const n=`${Y5}: Failed to fetch Media API data for: ${t.data}, with error: ${e}`
throw yg.unexpectedType(SG,n,null),new Error(n)}}(t,u,a,e)
return f}catch(n){return void e.console.log(`${Y5}: Failed to perform ODP Today recommendation for useCase: ${t}, with error: ${n}`)}}(e,t),!1)),i=(await oc(n)).map(e=>{if(e.status===aD)return e.value}).filter(Tg.isSome)
return new J5(i)}catch(t){return void e.console.log(`${Y5}: Failed to perform ODP for Today recommendations: ${t}`)}}(e),0,z5)}(e).catch(()=>{}),!1))
const i=e.amsEngagement
if(i&&Oo(e)){const e={timeout:1e3,eventType:tX,tab:Cj}
n[vm.AMDData]=new q0(i.performRequest(e),!1)}return n}(e,t.onboardingCardIds),w=await cc(e,p,h)
if(i(w.primaryPageDataFetchFailureReason))throw w.primaryPageDataFetchFailureReason
if(i(w.requiredAdditionalDataFailureReason))throw w.requiredAdditionalDataFailureReason
return a.measureModelConstruction(()=>{var t,n
const r=L(w.additionalData[vm.OnboardingCards]),i=w.additionalData[vm.Ads],s=w.additionalData[vm.ODP],a=w.additionalData[vm.AMDData],u=function(e,t,n,r,i){const s=[]
let a=o(r)
const l=Ro(e,t)
let u=0
for(const i of t){if(o(i.contents))continue
const t=gr(e,Cj,i.contents,!0,l)
i.contents=t.personalizedData,i.onDevicePersonalizationProcessingType=t.processingType
let f=!0
const p={label:i.label,title:i.title,meta:i.meta,date:i.date,onDevicePersonalizationProcessingType:i.onDevicePersonalizationProcessingType,isTodayForAppsModule:x(i)}
if(!a){for(const e of r)s.push({type:lm.EditorialItem,data:e,isDataHydrated:K(e),isFirstItemInModule:f,moduleMetadata:{...p},containedAdSlots:[u]})
f=!1,a=!0,u+=1}for(let t of i.contents){const r=d(t,"meta.personalizationData.onDeviceUseCase")
switch(t.type){case kj:if((0,Tg.isSome)(r)){const e=null==n?void 0:n.storyData(r);(0,Tg.isSome)(e)&&(t=e)}s.push({type:lm.EditorialItem,data:t,isDataHydrated:K(t),isFirstItemInModule:f,moduleMetadata:{...p},containedAdSlots:[u]}),f=!1,u+=1
break
case kB:const a=c(t,iR)
if(o(a))continue
let d
if((0,Tg.isSome)(r)&&(d=null==n?void 0:n.storyGroupData(r)),(0,Tg.isSome)(d))t=d
else{const n=gr(e,Cj,a,!0,l)
t[yU].associations[NU][FB]=n.personalizedData,i.onDevicePersonalizationProcessingType=n.processingType}s.push({type:lm.EditorialItemGroup,data:t,isDataHydrated:K(t),isFirstItemInModule:f,moduleMetadata:{...p},containedAdSlots:Array.from({length:a.length},(e,t)=>t+u)}),f=!1,u+=a.length}}}return s}(e,null!==(n=null===(t=w.primaryPageData.results)||void 0===t?void 0:t.data)&&void 0!==n?n:[],s,r)
return Fw(l,u,w.primaryPageData,i,a)})}}function Fw(e,t,n,r,i){return yg.context(pB,()=>{if(o(t))return null
const a=function(e,t,n,r,o){var i,a,l
const u=Xo(e,"Today",Cj,n,null,null!==(i=co(e,Cj,r,t))&&void 0!==i?i:Zo(e,Cj,n,null===(a=null==r?void 0:r.onDeviceAd)||void 0===a?void 0:a.positionInfo,t)),d=yr(e)
u.recoMetricsData=Zd(u.recoMetricsData,null,d)
const f=new TJ(t,u,{rootPosition:0,locationStack:[]},Cn(n),ko(0,o))
if(no(e,Cj)){const n=po(e,Cj);(0,Tg.isSome)(n)&&(f.eligibleAdLocations=n.map(e=>e.slot))
const o=ho(0,u.iAdInfo)
if(mo(e,o,r),f.adIncidentRecorder=o,f.adPlacementBehavior=function(e){let t=Fg.insertIntoShelf
for(const n of e){let e=t
switch(n.type){case lm.EditorialItem:e=Gw(n.data)
break
case lm.EditorialItemGroup:const t=c(n.data,iR)
if(s(t))for(const n of t)if(e=Gw(n),e!==Fg.insertIntoShelf)break}if(e!==Fg.insertIntoShelf){t=e
break}}return t}(t),(0,Tg.isNothing)(null==r?void 0:r.failureReason)){f.adData=_(e,null==r?void 0:r.mediaResponse)
const t=null===(l=null==r?void 0:r.onDeviceAd)||void 0===l?void 0:l.positionInfo
if(s(t)){const e=t.slot-1
f.adLocation=e}}}return f}(e,t,n,r,i),l=Nw(e,a)
return l.shelves.splice(0,0,bc(0,"todayPageHeader")),l})}function Nw(e,t){var n
const r=[],o=function(e,t){switch(e.client.buildType){case HN:case RF:const e=new kq
e.protocol=TW,e.host=eN,e.pathname=`/${HW}`
const n=[]
for(const e of t)switch(e.type){case lm.EditorialItem:n.push(e.data.id)
break
case lm.EditorialItemGroup:const t=c(e.data.meta,sR)
n.push(`${e.data.id}:[${t.map(e=>e.id).join(",")}]`)}return e.param(pq.ids,n.join(",")),e.param(pq.isTodayFeedPreview,GG),decodeURIComponent(e.build())
default:return null}}(e,t.remainingContent)
let a=Eo(t.remainingContent)
const l=null===(n=t.remainingContent[0])||void 0===n?void 0:n.isFirstItemInModule
for(;a;){const n=t.remainingContent.shift()
if((0,Tg.isNothing)(n)){a=!1
break}const o=Go(e,t);(0,Tg.isSome)(o)&&r.push(o),t.currentTodayItem=n
let i=null
switch(n.type){case lm.EditorialItem:i=Fo(e,n,t)
break
case lm.EditorialItemGroup:i=No(e,n,t)}t.currentTodayItem=void 0,(0,Tg.isSome)(i)&&r.push(i)
const s=Go(e,t);(0,Tg.isSome)(s)&&r.push(s),a=Eo(t.remainingContent)}l&&so(e,r,Cj,Cj,t.pageInformation)
const u=new hY(r),d=e.loc.string("PAGE_TITLE_TODAY")
return u.title=d,u.tabTitle=d,u.titleDetail=function(e){const t=new Date,n=e.loc.string("Today.ShelfTitle.DateFormat")
return e.loc.formatDate(n,t)}(e),u.shortTitleDetail=function(e){const t=new Date
return e.loc.formatDate("MMM d",t)}(e),u.longTitle=function(e){if(!e.client.isPad)return
const t=new Date,n=e.loc.string("Today.ShelfTitle.DateFormat.IPad")
return e.loc.formatDate(n,t)}(e),u.feedPreviewUrl=o,s(t.remainingContent)?(t.pageHasDisplayedContent=t.pageHasDisplayedContent||r.some(e=>{s(e.items)}),u.nextPage=t):function(e,t,n){const r=[],o=Ac(e)
i(o)&&r.push(o)
const s=e.bag.termsAndConditionsURL
if(i(s)){const t=Tc(e,s)
r.push(t)}return r}(e,t.pageInformation,t.locationTracker).forEach(e=>{u.shelves.push(e)}),no(e,Cj)&&(u.adIncidents=wo(0,t.adIncidentRecorder)),ti(e,u,t.pageInformation),u}async function Bw(e,t){const n=t.pageHasDisplayedContent?6:12
let r=!0,o=0,i=[]
for(;r;){const e=t.remainingContent[o]
switch(e.type){case lm.EditorialItem:i.push(e.data)
break
case lm.EditorialItemGroup:i.push(e.data)
const t=c(e.data,iR)
i=[...i,...t]}o++,r=i.length<n&&o<t.remainingContent.length}const s=new Set(i.map(e=>e.id)),a=new Uz(e,i,!0,[NU,MB])
Mw(e,a,!1)
const l=await An(e,a,{allowEmptyDataResponse:!0}),u={}
for(const e of l.data)u[e.id]=e
for(const e of t.remainingContent)Uw(e,u)
return t.remainingContent=t.remainingContent.filter(e=>e.isDataHydrated||!s.has(e.data.id)),t}function Uw(e,t){var n,r,o
switch(e.type){case lm.EditorialItem:s(t[e.data.id])&&(e.data={...e.data,...t[e.data.id]}),e.isDataHydrated=K(e.data)
break
case lm.EditorialItemGroup:s(t[e.data.id])&&(e.data={...e.data,attributes:null===(n=t[e.data.id])||void 0===n?void 0:n.attributes,relationships:null===(r=t[e.data.id])||void 0===r?void 0:r.relationships,meta:{...e.data.meta,...null===(o=t[e.data.id])||void 0===o?void 0:o.meta}}),e.isDataHydrated=K(e.data)}}function Gw(e){const t=w(e,tP)
return i(t)&&t?Fg.replaceOrganic:i(t)&&!t?Fg.dropAd:Fg.insertIntoShelf}function jw(e,t){if(i(t.iAdInfo)){const n=m(t.iAdInfo)
s(n)&&(t.iAdInfo=iX.from(e,n))}}async function Vw(e,t){const n=Ww().map(e=>new Eq(e)),i=new kq(t),s=n.find(e=>e.matches(i)).extractParameters(i),a=i.query[pq.genre]||s[pq.genre],c=i.query[pq.chart]||s[pq.chart]
let l=i.query[pq.charts]
if(o(l)){const e=uc(0,c)
l=void 0!==e?`${c},${e}`:c}else l.includes(c)||(l+=`,${c}`)
const u=i.query[pq.ages],d=new gg.FetchTimingMetricsBuilder,f=e.addingFetchTimingMetricsBuilder(d),p=dc(f,a,l,u)
let h
return h=fc(e,l,a),await Promise.all([p,h]).then(([t,n])=>d.measureModelConstruction(()=>{const o=Gn(e,n),i=r(o)?Nn(a):Bn(o)
return qw(f,t,a,o,c,i)}))}async function Hw(e,t){const n=ot(0,t)
if(0===n.length)return await Promise.resolve(new C6(null,null,null,[]))
let r=new Uz(e,n).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes($e(e))
return e.appleSilicon.isSupportEnabled&&(r=r.includingAdditionalPlatforms([sG,cG])),await An(e,r).then(n=>{const r=it(0,t)
return Jw(e,n,t,r)})}function Ww(e){return[{path:`/{apiVersion}/catalog/{countryCode}/${MW}`,query:[`${pq.genre}`,`${pq.isPPT}?`,`${pq.charts}?`]},{path:`/{countryCode}/${MW}/{platform}/{chartType}/{genre}`,query:[`${pq.chart}`]},{path:`/{countryCode}/${MW}/{platform}/{chart}/{genre}`,query:[`${pq.charts}?`]},{path:`/{countryCode}/${MW}/{platform}`},{path:`/{countryCode}/{platform}/${MW}`},{path:`/{countryCode}/{platform}/${MW}/{genre}`}]}function qw(e,t,n,o,i,s){return yg.context("topChartsPageFromApiResponse",()=>{var a
const l=[]
if((0,Ag.isSome)(o))for(const t of o.categories)(0,Ag.isSome)(t.genreId)&&l.push(zw(e,t))
const u=function(e){return c(e,"results.apps").filter(e=>!r(e.data))}(t),f=u.map(r=>function(e,t,n,r,o){return yg.context("segmentFromData",()=>{const{shortName:i,longName:s}=function(e,t,n){let r=d(t,"shortName"),o=d(t,jj)
if(2!==n)return{shortName:r,longName:o}
const i=e.client.isPad
switch(d(t,wG)){case"top-free":i?(r=e.loc.string("TopCharts.iPadGames.Free.ShortName"),o=e.loc.string("TopCharts.iPadGames.Free.LongName")):(r=e.loc.string("TopCharts.Games.Free.ShortName"),o=e.loc.string("TopCharts.Games.Free.LongName"))
break
case"top-paid":i?(r=e.loc.string("TopCharts.iPadGames.Paid.ShortName"),o=e.loc.string("TopCharts.iPadGames.Paid.LongName")):(r=e.loc.string("TopCharts.Games.Paid.ShortName"),o=e.loc.string("TopCharts.Games.Paid.LongName"))}return{shortName:r,longName:o}}(e,t,o),a=d(t,wG),c=Xo(e,"TopChartsPage",r,n,`${a} ${s}`),l={rootPosition:0,locationStack:[]},u=[]
let f=0
const p=[]
for(const n of t.data){const t=Kw(e,f,n,c,l)
if(t){if(tt(e,n,68606))continue
u.push(t),af(l),f++}else p.push(n)}const h=[],w=new Ez(uj)
w.items=u,e.featureFlags.isEnabled("shelves_2_0_top_charts"),w.title=s,h.push(w)
const g=new C6(i,s,a,h),m=function(e,t,n,r=null,o,i){return{remainingContent:t,maxPerPage:20,highestOrdinal:0,url:n,metricsPageInformation:o,metricsLocationTracker:i}}(0,p,void 0,t.next,c,l)
return m.metricsPageInformation=c,m.metricsLocationTracker=l,m.highestOrdinal=f,g.nextPage=m,ti(e,g,c),g})}(e,r,t,n,s)).sort((e,t)=>e.chart.localeCompare(t.chart)),p=d(u,"0.href"),h=new kq(p),w=null!==(a=h.query[fG])&&void 0!==a?a:n,g=Yw(w,h.query[A$],l),m=function(e,t){return t.every(e=>function(e){switch(e){case"top-trending-free":case"top-trending-paid":return!0
default:return!1}}(e.chart))?e.loc.string("PAGE_TITLE_TRENDING_CHARTS"):t.every(e=>function(e){switch(e){case"top-emerging-free":case"top-emerging-paid":return!0
default:return!1}}(e.chart))?e.loc.string("PAGE_TITLE_EMERGING_CHARTS"):e.loc.string("PAGE_TITLE_TOP_CHARTS")}(e,f),v=new O6(w,null==g?void 0:g.ageBandId,m,f,null==g?void 0:g.name,l),y=f.findIndex(e=>e.chart===i)
y>=0&&(v.initialSegmentIndex=y)
const A=e.fetchTimingMetricsBuilder
return(0,Ag.isSome)(A)&&A.decorate(v),v})}function zw(e,t){const n=function(e,t,n=null){let r=new Uz(e).forType(EM).addingQuery(OF,Gj).addingQuery(fG,t).includingMacOSCompatibleIOSAppsWhenSupported(!0)
return n&&(r=r.addingQuery(A$,n)),e.appleSilicon.isSupportEnabled&&(r=r.includingAdditionalPlatforms([sG,cG])),r}(e,t.genreId,t.ageBandId),r=t.children.map(t=>zw(e,t))
return new k6(t,qe(e,n).toString(),r)}function Yw(e,t,n){for(const r of n){if(t&&r.ageBandId===t||!t&&!r.ageBandId&&r.genreId===e)return r
const n=Yw(e,t,r.children)
if(n)return n}return null}function Jw(e,t,n,r){return yg.context("topChartSegmentFromLookupResponse",()=>{const o=[]
let i=n.highestOrdinal
const s=L(t)
for(const t of s)tt(e,t,68606)||(o.push(Kw(e,i,t,n.metricsPageInformation,n.metricsLocationTracker)),af(n.metricsLocationTracker),i++)
const a=[]
if(o.length>0){const e=new Ez(uj)
e.items=o,a.push(e),r.highestOrdinal=i}const c=new C6(null,null,null,a)
return c.nextPage=r,c})}function Kw(e,t,n,r,o){return yg.context("lockupFromApiChartItem",()=>hu(e,n,{ordinal:e.loc.decimal(t+1),metricsOptions:{pageInformation:r,locationTracker:o},artworkUseCase:1}))}function Zw(e,t){const n=Ro(e,[t])
if(i(t.contents)){const r=gr(e,"todayWidget",t.contents,!0,n)
t.contents=r.personalizedData}return t}function Qw(e,t,n,r,s,a){const c=[]
let l=0,u=0,d=0
for(const a of t.contents){if(Z(a)){l++
continue}const t=se(a,uG),f=rg(e,a,n,r),p=null===f?tg(e,t):[],h=ng(a),w=[null==f?void 0:f.backgroundColor,1===p.length&&null!==p[0]?p[0].backgroundColor:void 0,F("1C68E2")].find(e=>void 0!==e)
if(0===p.length&&null===f){u++
continue}const g=Xw(e,a,r)
let m=null,v=null,y=null
if(t.length>0&&t[0].type===xj){const e=q(t[0],GL)
if(o(e)){d++
continue}y=q(t[0],VL),m=new Date(e)
const n=q(t[0],jL)
v=i(n)?new Date(n):null}const A=Ki(a)
c.push(new x6(a.id,g,h,w,U(w),p,eg(e,a,n,g,s),A===sL,f,y,m,v))}return null!==a&&t.contents.length===l+u+d&&a(`All ${t.contents.length} cards in this ${r?"primary":"secondary"} module were filtered due to being unhydrated (${l}), missing artwork (${u}) or missing metadata (${d})`),c}function Xw(e,t,n){let r=q(t,MG)
if(!n){const n=Ki(t)
switch(n){case Zg.AppOfTheDay:case Zg.GameOfTheDay:r=bo(e,t,n,null)}}return r.replace(/\n/g," ")}function eg(e,t,n,r,i){let a
switch(n){case d$:a=0
break
case hP:a=1
break
case lR:a=2
break
default:a=-1}const c={widgetId:i,size:a,targetId:t.id,name:r},l=encodeURIComponent(JSON.stringify(c))
switch(ku(0,t)){case 4:const n=se(t,lG),r=s(n)&&1===n.length?n[0]:se(t,uG)[0],i=ie(e,r,Tj)
if(o(i))break
return`${AW}:/${$W}/${pq.id}${i.id}?${pq.appEventId}=${r.id}${pq.invalidateWidgetsOnFailure}=true&${pq.metrics}=${l}`
case 3:const a=se(t,uG)[0]
return`${AW}:/${$W}/${pq.id}${a.id}?${pq.invalidateWidgetsOnFailure}=true&${pq.metrics}=${l}`
case 1:return d(H(t,aj),gj)}return`${AW}:/${GW}/${pq.id}${t.id}?${pq.invalidateWidgetsOnFailure}=true&${pq.metrics}=${l}`}function tg(e,t){return t.map(t=>t.type===$G?null:Fu(e,function(e,t){let n
switch(Jt(e,t)){case"com.apple.AppStore.BridgeStoreExtension":n=JC
break
case"com.apple.MobileSMS":n=KC
break
default:n=_j}return _e(e,t,Fe(e,t),n)}(e,t),{useCase:25,withJoeColorPlaceholder:!0})).filter(e=>null!==e)}function ng(e){var t
const n=H(e,OU)
let r=null
s(n)&&(r=d(n,jj))
let o=null
const i=se(e,uG)
switch(i.length>0&&(o=q(i[0],jj)),q(e,XU)){case Zg.AppOfTheDay:case Zg.GameOfTheDay:return null!==(t=null!=o?o:r)&&void 0!==t?t:""
default:return null!=r?r:""}}function rg(e,t,n,r,o){let i=null
Ki(t)===sL&&(i=function(e,t,n,r){let o=null,i=null
const s=["editorialVideo.storyCardMotion16x9.previewFrame","editorialVideo.storyCenteredMotion16x9.previewFrame","editorialVideo.storeFrontVideo4x3.previewFrame"]
for(const e of s)if(i=H(t,e),(0,Tg.isSome)(i))break
return i&&(o=Fu(e,i,{withJoeColorPlaceholder:!0,useCase:26}),r||(o.crop="sr")),o}(e,t,0,r))
const s=[{artworkKeyPath:cR,crop:"sr"},{artworkKeyPath:X_,crop:"sr"}]
switch(Ki(t)){case Zg.AppOfTheDay:case Zg.GameOfTheDay:const e=n===d$?wP:"nr"
s.push({artworkKeyPath:eL,crop:r?e:"fn"})
break
case Zg.Video:case Zg.FullBleedImage:const t=n===d$?gP:mP
s.push({artworkKeyPath:yx,crop:r?t:"fn"})
break
case Zg.AppEventCard:const o=n===d$?wP:"nr"
s.push({artworkKeyPath:tL,crop:r?o:"fn"})
break
default:const i=n===d$?gP:mP
s.push({artworkKeyPath:nL,crop:r?i:"fn"})}let a=null
for(const n of s)if(a=Fu(e,H(t,n.artworkKeyPath),{cropCode:n.crop,useCase:26,withJoeColorPlaceholder:!0}),(0,Tg.isSome)(a))break
return null!=a?a:i}async function og(e,t){let n
switch(t.family){case 1:n=hP
break
case 2:n=lR
break
default:n=d$}let a=null
return typeof t.originalResponseHash!==CB&&null!==t.originalResponseHash&&""!==t.originalResponseHash&&typeof t.originalResponseDate!==CB&&null!==t.originalResponseDate&&""!==t.originalResponseDate&&(a={hash:t.originalResponseHash,creationDate:t.originalResponseDate}),await async function(e,t,n,a,c){return await new Promise((n,l)=>{if(!function(e,t,n,r){return!r||lt(e,e.bag.todayWidgetLivePreviewRolloutRate)}(e,0,0,a))return void l("No live preview will be shown due to losing the todayWidgetLivePreviewRolloutRate lottery.")
const u=new $6,d=e=>l(e)
An(e,u.make(e)).then(a=>{const l=f(a,sm.contentMaxAge),u=function(e,t){return r(e)||r(e.results)||o(e.results.data)?(t("Unable to create primary module; no results or data."),null):o(e.results.data[0].contents)?(t("Unable to create primary module; no contents."),null):e.results.data[0].contents.length===e.results.data[0].contents.filter(e=>Z(e)).length?(t("Unable to create primary module; none of the cards are hydrated."),null):{label:"",title:"",meta:{},contents:e.results.data[0].contents}}(a,d)
if(null===u)return
const p=function(e){const t={label:"",title:"",meta:{},contents:[]}
if(r(e)||r(e.results)||o(e.results.data))return t
const n=e.results.data.slice(1)
return 0===n.length?t:{label:"",title:"",meta:{},contents:n.map(e=>e.contents).reduce((e,t)=>e.concat(t))}}(a),h=function(t,n,r,o,i){const a=(c=JSON.stringify(t.contents.concat(n.contents).map(e=>e.id))+(null!==r?r.toString():""),e.cryptography.hash("sha256",c))
var c
return null!==i&&s(i.hash)&&s(i.creationDate)&&i.hash===a?i:{hash:a,creationDate:(new Date).toUTCString()}}(u,p,l,0,c),w=function(e,t,n){null===n&&e.console.error("No TTL value was found--deferring to JS client for refresh time.")
const r=new Date(t.creationDate)
return r.setSeconds(r.getSeconds()+n),e.console.info(`Media API provided TTL: ${n} so timeline refresh date will be ${r}`),r}(e,h,l),g=Zw(e,u),m=Zw(e,p),v=function(e,t,n,s,a,c,l,u,d){if(r(t))return d("Unable to create a TodayWidgetContainer; primaryModule is null."),null
const f=Qw(e,t,s,!0,u,d)
if(0===f.length)return null
const p=Qw(e,n,s,!1,u,null),h=function(e,t,n,r,s,a){const c=Ze(t),l=Xe(c,n),u={}
for(let e=0;e<r.length;e++){const t=e%r.length*2
u[r[e].storyId]=a===lR?s.slice(t,t+2):[]}const d=function(e,t,n){return function(e,r){const o=[],i=[]
return e.forEach(e=>{return void 0!==(r=e).eventStartDate&&null!==r.eventStartDate&&t<Ze(r.eventStartDate)&&Ze(r.eventStartDate)<=n?o.push(e):i.push(e)
var r}),[o,i]}(e)}(r,c,n),f=d[0]
let p=d[1]
const h=[...Array(l)].map(()=>[]),w=[...Array(l)].map((e,t)=>new Date(c.getTime()+60*t*60*1e3)),g=new Map
r.concat(s).forEach(t=>{if(i(t.eventStartDate)){const n=Bi(t.eventBadgeKind,t.eventStartDate,t.eventEndDate)
g[t.storyId]=Ui(e,n,t.eventStartDate,t.eventEndDate)}}),f.forEach(e=>{var t
for(let n=((Xe(c,e.eventStartDate)-1)%(t=r.length)+t)%t;n<h.length&&!(e.eventEndDate<=w[n]);n+=r.length)for(let t=0;t<r.length&&!(h.length<=n+t);t++)if(0===h[n+t].length){h[n+t].push(y(e))
for(const r of u[e.storyId])h[n+t].push(y(r))
break}})
for(let e=0;e<h.length;e++){if(h[e].length>0)continue
const t=w[e]
if(p=p.filter(e=>void 0===e.eventEndDate||null===e.eventEndDate||e.eventEndDate>t),0===p.length)break
const n=p.shift()
p.push(n),h[e].push(y(n))
for(const t of u[n.storyId])h[e].push(y(t))}return h.map((e,t)=>{const n=w[t],r=e.map(e=>{const n=g[e.storyId],r=function(e,t){if(o(t))return null
const n=t.filter(t=>null===t.displayFromDate||t.displayFromDate<=e)
return 0===n.length?null:n.pop()}(w[t],n)
return null!==r?(e.heading=r.displayText,e.eventStartDate=r.countdownToDate):e.eventStartDate=null,e})
return new L6(r,n)})}(e,new Date(c.creationDate),l,f,p,s)
return new _6(h,l,c.creationDate,c.hash)}(e,g,m,t,0,h,w,pP,d)
null!==v&&n(v)}).catch(e=>{l(e)})})}(e,n,t.isSnapshot,t.isPreview,a)}function ig(e){return e.props.isNotEnabled("arcadeDownloadPacksGetAllUpliftExperiment")?Am.Control:xe(e,Cg.ArcadeDownloadPackOnboarding)||Am.LayoutB}var sg,ag,cg,lg,ug,dg,fg,pg,hg,wg,gg,mg,vg,yg,Ag,Tg,bg,Sg,Pg,Ig,Cg,kg,Og,Eg,Rg,Dg,_g,Lg,xg,Mg,$g,Fg,Ng,Bg,Ug,Gg,jg,Vg,Hg,Wg,qg,zg,Yg,Jg,Kg,Zg,Qg,Xg,em,tm,nm,rm,om,im,sm,am,cm,lm,um,dm,fm,pm,hm,wm,gm,mm,vm,ym,Am,Tm,bm,Sm,Pm,Im={}
e.r(Im),e.d(Im,{downloadingOrdering:()=>bX,downloadingOrderingCompact:()=>SX,notPurchasedOrdering:()=>AX,notPurchasedOrderingCompact:()=>TX,notPurchasedSpotlightIndex:()=>mX,purchasedOrdering:()=>vX,purchasedOrderingCompact:()=>yX,purchasedSpotlightIndex:()=>gX}),sg={},e.r(sg),e.d(sg,{downloadingOrdering:()=>RX,downloadingOrderingCompact:()=>DX,notPurchasedOrdering:()=>OX,notPurchasedOrderingCompact:()=>EX,notPurchasedSpotlightIndex:()=>IX,purchasedOrdering:()=>CX,purchasedOrderingCompact:()=>kX,purchasedSpotlightIndex:()=>PX}),ag={},e.r(ag),e.d(ag,{notPurchasedOrdering:()=>MX,notPurchasedSpotlightIndex:()=>LX,purchasedOrdering:()=>xX,purchasedSpotlightIndex:()=>_X}),cg={},e.r(cg),e.d(cg,{notPurchasedOrdering:()=>BX,notPurchasedSpotlightIndex:()=>FX,purchasedOrdering:()=>NX,purchasedSpotlightIndex:()=>$X}),lg={},e.r(lg),e.d(lg,{notPurchasedOrdering:()=>VX,notPurchasedSpotlightIndex:()=>GX,purchasedOrdering:()=>jX,purchasedSpotlightIndex:()=>UX}),ug={},e.r(ug),e.d(ug,{notPurchasedOrdering:()=>zX,notPurchasedSpotlightIndex:()=>WX,purchasedOrdering:()=>qX,purchasedSpotlightIndex:()=>HX}),dg={},e.r(dg),e.d(dg,{notPurchasedOrdering:()=>ZX,notPurchasedSpotlightIndex:()=>JX,purchasedOrdering:()=>KX,purchasedSpotlightIndex:()=>YX}),fg={},e.r(fg),e.d(fg,{notPurchasedOrdering:()=>t0,notPurchasedSpotlightIndex:()=>XX,purchasedOrdering:()=>e0,purchasedSpotlightIndex:()=>QX}),pg={},e.r(pg),e.d(pg,{notPurchasedOrdering:()=>i0,notPurchasedSpotlightIndex:()=>r0,purchasedOrdering:()=>o0,purchasedSpotlightIndex:()=>n0})
const Cm="arcadeAskToBuy",km="groupingLockup",Om="launchRepair",Em="tapToRate",Rm="lockupList",Dm="TabChangeAction",_m="expanded",Lm="GameCenterInvitePlayerAction",xm="person.crop.square",Mm="applewatch",$m="advert",Fm="continuation",Nm="signup",Bm="purchases",Um="donate",Gm="is32bitOnly",jm="requires32bit",Vm="is.workflow.my.app",Hm="com.apple.mobileme.fmf1",Wm="iPad",qm="com.apple.NanoCompass.watchkitapp",zm="com.apple.DeepBreathing",Ym="com.apple.Depth",Jm="com.apple.Mandrake",Km="isIOSBinaryMacOSCompatible",Zm="ACTION_SETTINGS",Qm="shareSheet",Xm="AppleAccount.AABranding",ev="Send Gift",tv="initiate",nv="EDITORIALTAKEOVER",rv="SLPLOAD",ov="iad.format.text",iv="advertDataMalformed",sv="mapiFetchFail",av="insufficientAssets",cv="adsLocaleMetadata",lv="SHARE_APP_EVENT_SUBTITLE",uv="j:mm",dv="inAppEvent",fv="systemimage://bell.fill",pv="appPromotionTitle",hv="OfferItems.FormattedDate.RedemptionDate.DateFormat",wv="OfferItems.Available.Now",gv="@@date@@",mv="arcade-see-all-games-button",vv="marketingArtwork",yv="seed",Av="upsell",Tv="PAGE_FACETS_FILTERS_CONTROLLER_SUPPORT",bv="PAGE_FACETS_FILTERS_COMING_SOON",Sv="PAGE_FACETS_SORT_BY_TITLE",Pv="controllerSupport",Iv="multiplayer",Cv="PAGE_FACETS_INCLUDE_TITLE",kv="000000",Ov="ARCADE_SUBSCRIBE_PAGE_NOT_NOW",Ev="displayBreakoutMaterial",Rv="material",Dv="textGradient",_v="plusLight",Lv="notificationSettings",xv="invalidateWidgetsOnFailure",Mv="PageData",$v="ProductBuilder",Fv="contingent-items:branch",Nv="contingentItemOffer",Bv="contingent-items:association.trunks",Uv="trunks",Gv="offer-items:salables",jv="discountOffer",Vv="fileSizeByDevice",Hv="promotionalText",Wv="backgroundAssetsInfo",qv="backgroundAssetsInfoWithOptional",zv="installSizeByDeviceInBytes",Yv="editorial-item-shelves",Jv="viewEditorialItem",Kv="past",Zv="preview",Qv="redownload",Xv="impressionableAppIconFromData",ey="appBinaryTraits",ty="requiresRosetta",ny="iphone5",ry="iphone6",oy="iphone6+",iy="maxEssentialInstallSizeInBytes",sy="maxDownloadSizeInBytes",ay="maxInstallSizeInBytes",cy="Mac",ly="editorialArtwork.contentLogoTrimmed",uy="posterCardVideo16x9",dy="updatedFallRegulatoryAssets",fy="AgeRating-AU-18",py="enabled",hy="concerns",wy="ACTION_REVIEW_REPORT",gy="TOAST_CONCERN_REPORTED_TITLE",my="TOAST_CONCERN_REPORTED_DESCRIPTION",vy="Alert.GenericError.Title",yy="Alert.GenericError.Message",Ay="userReviewId",Ty="systemimage://hand.thumbsup",by="systemimage://hand.thumbsdown",Sy="guid",Py="formBody",Iy="CONTROLLER_RECOMMENDED",Cy="CAPABILITY_GAME_CENTER_TITLE",ky="resource://ProductCapabilityGameCenter",Oy="safariExtensions",Ey="above",Ry="prefersNonStandardBackButton",Dy="DEVELOPER_WATCH",_y="DEVELOPER_LATEST_RELEASE",Ly="DEVELOPER_BUNDLES",xy="hasApps",My="hasGames",$y="DEVELOPER_APPS_AND_GAMES",Fy="DEVELOPER_GAMES",Ny="DEVELOPER_APPS",By="DEVELOPER_APPLE_ARCADE",Uy="textOnly",Gy="enrichedEditorialNotes.name",jy="enrichedEditorialNotes.tagline",Vy="enrichedEditorialNotes.callToAction",Hy="editorialNotes.callToAction",Wy="shelf_id",qy="arcadeSeeAllGamesFooter",zy="footer",Yy="ARCADE_PREORDER_COMING_SOON",Jy="REPORT_A_PROBLEM",Ky="HERO_CAROUSEL_OVERLAY_BUTTON_TITLE_GAME",Zy="breakoutTall",Qy="breakoutFullScreen",Xy="renderGroupingPage",eA="noPersonalizationAvailable",tA="groupingAppEvent",nA="Browse Categories",rA="hasSeeAll",oA="listItem",iA="link.url",sA="GameCenter.ContinuePlayingShelf.Title",aA="videoCard",cA="Achievements Hero",lA="locked",uA="inprogress",dA="gameCenterFriendingViaPush",fA="legacy",pA="FRIEND_SUGGESTION",hA="smallContactCard",wA="INVITE",gA="FROM_CONTACTS",mA="inviteFriend",vA="removeFriendSuggestion",yA="friendSuggestion",AA="redownloadButtonTintUsingOfferTheme",TA="see-all-contents",bA="contentGraphicTrimmed",SA="parentShelfItems",PA="displayDeviceDrivenContent",IA="CategoryGrouping",CA="smallBreakout",kA="advertPressed",OA="offerButtonPress",EA="promotedContent",RA="editorialContext",DA="contentRatingsBySystem.appsApple.name",_A="developerName",LA="firstVersionSupportingInAppPurchaseApi",xA="isVerifiedForAppleSiliconMac",MA="widthConstrainedLockup",$A="OfferButton.Title.Subscribe",FA="descending",NA="editorialItemActionFromData",BA="displaySubStyle",UA="iad.lineItem",GA="clientIdentifierOverride",jA="targetId",VA="clientCorrelationKey",HA="pageRender",WA="hasiAdData",qA="viewedInfo",zA="viewedInfoDetailed",YA="cookie",JA="ownerDsid",KA="pageExit",ZA="trampoline",QA="trampolineContext",XA="widgetContext",eT="contingentItemId",tT="browserChoice",nT="browserChoiceScreenBuy",rT="clip",oT="buttonName",iT="actionContext",sT="selectedPageFacets",aT="Apps",cT="searchGhostHint",lT="didYouMean",uT="displaysArcadeUpsell",dT="franchise",fT="isOnboardingCard",pT="optimizationEntityId",hT="optimizationId",wT="iAdOdmlSuccess",gT="metadata",mT="iAdIsSpecifiedCreativeUsed",vT="APPSTORE_SEARCH_LANDING_PAGE",yT="APPSTORE_SEARCH_RESULT_PAGE",AT="APPSTORE_TODAY_TAB",TT="APPSTORE_PRODUCT_PAGE",bT="APPSTORE_PRODUCT_PAGE_DOWNLOAD",ST="iAdSlotId",PT="iAdPageCustomId",IT="macSoftware",CT="iosSoftware",kT="pending",OT="input",ET="channelPartner",RT="eligibilityType",DT="upsellScenario",_T="modeType",LT="FreeTrial",xT="PayUpFront",MT="PayAsYouGo",$T="rebuy=true",FT="OfferButton.FlowPreview.Get",NT="OfferButton.FlowPreview.Preorder",BT="contentRatingsBySystem.appsApple.value",UT="preorderedSubscribed",GT="preorderedNotSubscribed",jT="productPageBrowserChoice",VT="preorderSubscribed",HT="preorderNotSubscribed",WT="INTRO_PRICE_OFFER_SUBTITLE",qT="Offer.InlineInAppPurchases",zT="OfferButton.ExternalPurchases.Subtitle",YT="weight_parameter",JT="meta.personalizationData.isPinned",KT="meta.personalizationData.segId",ZT="OnDeviceRecommendationsPageController",QT="fetchRecommendations",XT="candidates",eb="PRODUCT_PRIVACY_LEARN_MORE_TEMPLATE",tb="{developerName}",nb="<br><br>",rb="privacyPolicy",ob="PRODUCT_PRIVACY_DEFINITIONS_LINK",ib="privacyDefinitions",sb="USAGE_DATA",ab="systemimage://person.circle",cb="NOT_COMPATIBLE_BANNER",lb="UNSUPPORTED_CAPABILITIES",ub="UNSUPPORTED_WATCHOS_VERSION",db="experimentLocale",fb="pageCustomId",pb="ProductPage.Section.ScreenshotsPreview.Title",hb="user",wb="reviewsContainer",gb="displayable-kind",mb="urlQuery",vb="editorsChoiceItem",yb="ratingCount",Ab="APP_SUPPORT",Tb="Action.LearnMore",bb="REVIEWS_MOST_HELPFUL",Sb="REVIEWS_MOST_FAVORABLE",Pb="REVIEWS_MOST_CRITICAL",Ib="recent",Cb="REVIEWS_MOST_RECENT",kb="reviewsPageActionFromReviewsData",Ob="select",Eb="genreName",Rb="BADGE_PLAYERS_HEADING",Db="{maxPlayers}",_b="BADGE_NO_RATINGS_CAPTION",Lb="contentRatingsBySystem.appsAustralia.rank",xb="contentRatingsBySystem.appsFrance.rank",Mb="contentRatingsBySystem.appsKorea.rank",$b="contentRatingsBySystem.appsKorea.name",Fb="{subtitle}",Nb="gameCenterPlayerGameAchievementSummary",Bb="ProductPage.Section.EditorsNotes.Title",Ub="ProductPage.Section.FeaturedIn.Title",Gb="largeGameCenterPlayer",jb="hasEula",Vb="productMediaItem",Hb="productReviewsCustomHeader",Wb="createTapToRateProductReviewAction",qb="ProductPage.RatingsAndReviews.Footer.LearnMore",zb="ProductPage.Section.MostRecentVersion.Title",Yb="overview",Jb="titledParagraph",Kb="detail",Zb="releaseNotes",Qb="ProductPage.Section.Videos.Title",Xb="standardInformationShelf",eS="product-page-info-section",tS="advisories",nS="seventeenPlus",rS="gracRegistrationNumber",oS="twelvePlus",iS="Seller",sS="isTrader",aS="{seller}",cS="Initial.App.Size",lS="Additional.Content.After.App.Install",uS="Search.Facets.iPadAndIPhone",dS="Search.Facets.iPhoneOnly",fS="SEARCH_FACET_FREE",pS="SEARCH_FACET_",hS="ageBandId",wS="filter[price]",gS="filter[genre]",mS="filter[ages]",vS="userTyped",yS="ghosting",AS="terms",TS="naturalLanguage",bS="tags",SS="SEARCH_TRANSPARENCY_LINK",PS="rewrite",IS="magnifyingglass",CS="ads-result",kS="EDITORIAL_SEARCH_RESULT_TYPE_DEVELOPER_TITLE_CASE",OS="whenInstalled",ES="mixed",RS="guidedLabel",DS="search-revisions",_S="recentSearches",LS="singleColumnList",xS="highlightedTextView",MS="@@chartPosition@@",$S="developerInfo",FS="divider",NS="onDeviceSearchHistory",BS="scrollablePill",US="displayType",GS="appMarkerType",jS="Acquisition",VS="InlineImage",HS="AppLockup",WS="InlineVideo",qS="quote",zS="Small",YS="Medium",JS="Large",KS="itunes.apple.com",ZS="meta.personalizationData.optimizationId",QS="meta.personalizationData.optimizationEntityId",XS="ignoreEditorialArt",eP="x-as3-internal:/today/test",tP="meta.personalizationData.replaceIfAdPresent",nP="editorialBackground",rP="editorialVideo.categoryDetailMotion16x9",oP="editorialVideo.storyCardMotion16x9",iP="editorialVideo.storyCenteredMotion16x9",sP="editorialVideo.listCardMotion21x9",aP="editorialArtwork.listCardStatic21x9",cP="LCS.ApLCL01",lP="LCS.ApLCL02",uP="editorialArtwork.universalAStatic16x9",dP="editorialVideo.universalAMotion16x9",fP="LCS.ApLCXW01",pP="com.apple.AppStore.Widgets.Today",hP="systemMedium",wP="DCEC.AppWS01",gP="MCGC.AppWS01",mP="MCGC.AppWL01",vP="PersonalizedRecommendations.Toggle.Title",yP="PersonalizedRecommendations.Toggle.Footer",AP="PERSONALIZATION_PURCHASES",TP="RECOMMENDATIONS",bP="engagement-data",SP="ArcadeOnboarding",PP="extend",IP="ALL_ARCADE_GAMES",CP="MMMM d, y",kP="arcadeSubscribePage",OP="release",EP="featuredCategories",RP="nonnull",DP="token.pageInformation",_P="token.excludeAttribution",LP="isAppInstalled",xP="token.targetType",MP="token.metricsKind",$P="systemInformation",FP="token.productVariantData",NP="token.inAppEventId",BP="Purchases",UP="gameCenterProfile",GP="GROUPING_DISCOVER",jP="OnDeviceRecommendationsPageController:handleShelf not implemented",VP="ProductData",HP="Product page preloading is disabled",WP="lookup",qP="app-bundle",zP="search-recommendation-sections",YP="clusterId",JP="timeSinceOnScreen",KP="results.contents",ZP="trending-contents",QP="TodayData",XP="TodayForApps",eI="done",tI="Arcade.DownloadPack.Suggestions.GetAllButtonTitle",nI="asString",rI="asNumber",oI="asBoolean",iI="asJSONValue",sI="catalog",aI="engagement",cI="view/see-all",lI="its_qt",uI="adId",dI="prefix",fI="username",pI="password",hI="port",wI="-caseInsensitive",gI="signatureResumption",mI="checkForLongUrl",vI="getPass",yI="certId",AI="metrics-identifiers",TI="language",bI="https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/accountSummary",SI="https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/redeemLandingPage",PI="IPHONE_BRAND_NAME",II="IPAD_BRAND_NAME",CI="APPLE_TV_BRAND_NAME",kI="APPLE_WATCH_BRAND_NAME",OI="MAC_BRAND_NAME",EI="askToBuy",RI="generic",DI="arcadeLaunchRepair",_I="arcadeTodayCard",LI="arcadeTabNavBar",xI="existing",MI="list",$I="river",FI="timer",NI="textFollowsTintColor",BI="bundle",UI="editorial",GI="com.apple.appstorecomponentsd",jI="com.apple.AppStore.Widgets",VI="com.apple.visionproapp",HI="primaryTerm",WI="https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/signupWizard",qI="iPhone",zI="isStandaloneWithCompanionForWatchOS",YI="isDeliveredInIOSAppForWatchOS",JI="isXROSCompatible",KI="free",ZI="presentModal",QI="systemimage://square.and.arrow.up",XI="results.data",eC="accountDetails",tC="createAccount",nC="sendGift",rC="addFunds",oC="Redeem",iC="cppAssetsMissing",sC="localizationNotAvailable",aC="customers-also-bought-apps-download",cC="module",lC="deepLink",uC="appPromotion",dC="trunk-app",fC="useTrunkArtwork",pC="editorialArtwork.brandLogo",hC="systemimage://questionmark.circle",wC="comingSoonApps",gC="marketingVideo",mC="supportsSharePlay",vC="filter[ageRating]",yC="filter[supportsGameController]",AC="filter[isMultiplayer]",TC="subscribe",bC="custom",SC="Arcade.Welcome.Family.Button.ExploreArcade",PC="breakoutTextAlignment",IC="left",CC="right",kC="breakoutCallToActionLabel",OC="black",EC="arcadeSubscribe",RC="Action.OK",DC="isViewOnly",_C="action.kind",LC="action.url",xC="Goto",MC="standalone-merchandised-in-apps",$C="requirementsByDeviceFamily",FC="licenses",NC="internetContentProviderInfo",BC="review-summary",UC="future",GC="unlistedApps",jC="system-apps",VC="xros-apps",HC="customAttributes",WC="appShowcase",qC="placeholderBackground",zC="textColor1",YC="checksum",JC="circularArtwork",KC="ovalArtwork",ZC="appleWatch_2021",QC="appleWatch_2018",XC="appleWatch",ek="iphone_6_5",tk="iphone_d73",nk="iphone_d74",rk="editorialArtwork.splashFullScreen",ok="editorialArtwork.topShelf",ik="customVideoPreviewsByTypeForAd",sk="BreakoutLarge",ak="Hero",ck="application/json",lk="systemimage://square.and.pencil",uk="decimalPad",dk="siri",fk="hasInAppPurchases",pk="systemGreen",hk="jpeg",wk="subscriptionHero",gk="editorial-shelves-collection:contents",mk="ignoreITunesShortNotes",vk="editorialNotes.short",yk="HERO_CAROUSEL_OVERLAY_BUTTON_TITLE_VIEW",Ak="collectionIcons",Tk="AllGames",bk="navigationBar",Sk="arcadeFooter",Pk="TermsAndConditions.Title",Ik="shelf_page_header",Ck="ribbonBar",kk="collectionModule",Ok="collectionLockup",Ek="Genre",Rk="displayCount",Dk="designTag",_k="editorialStoryCard",Lk="nonarcade",xk="isArcade",Mk="date",$k="systemBlue",Fk="Watch",Nk="Messages",Bk="Lockup.Heading.Arcade",Uk="userRating.ratingCount",Gk="userRating.value",jk="discounts",Vk="inAppPurchaseInstall",Hk="item.offer.buyParams",Wk="offerId",qk="genres",zk="genreNames",Yk="targetType",Jk="crossfireReferral",Kk="data-metrics-impressions-low-latency",Zk="media",Qk="exit",Xk="SearchFocus",eO="Focus",tO="overridePageContext",nO="userId",rO="dsId",oO="refAppType",iO="widget",sO="SoftwareBundle",aO="context",cO="BrowserChoice",lO="com.apple.AppStore.clipOverlay",uO="paymentTopicFromBag",dO="overlayClip",fO="offerReleaseDate",pO="buyInitiate",hO="See All",wO="searchOriginatingTerm",gO="recents",mO="hint",vO="undoSpellCorrection",yO="applySpellCorrection",AO="userTypedHint",TO="tag",bO="iAdEligible",SO="impressionParentId",PO="searchGhostHintPrefix",IO="searchGhostHintTermPhase",CO="searchGhostHintTerm",kO="meta.metrics",OO="dsid",EO="@@durationCount@@",RO="@@postTrialPriceDuration@@",DO="test",_O="update",LO="PREORDER_NOTIFY_AUTOMATIC_DOWNLOAD_MESSAGE",xO="arcade-preorder",MO="confirmation",$O="notSubscribed",FO="OfferButton.IntroPrice.FreeTrial",NO="discountOwnedParent",BO="discountUnownedParent",UO="use_signals",GO="meta.personalizationData.grpId",jO="editorialItemGroup",VO="DATA_NOT_PROVIDED",HO="PRODUCT_PRIVACY_LEARN_MORE_LINK",WO="PRODUCT_PRIVACY_LEARN_MORE_NO_LINK",qO="privacyDetail",zO="privacyCard",YO="identifier",JO="experimentId",KO="separateEditorsChoiceShelf",ZO="helpful",QO="mostHelpfulReviews",XO="wasReset",eE="shelves_2_0_reviews",tE="ratingsDetails",nE="RATINGS_STATUS_NOT_ENOUGH_RATINGS_OR_REVIEWS",rE="supportUrl",oE="chartPositions",iE="highMotion",sE="{minPlayers}",aE="{releaseDate}",cE="value",lE="{count}",uE="deviceCompatibility",dE="Offer.Expanded.Title.ComingSoon",fE="externalVersionId",pE="marker",hE="ProductPage.Section.Information.Title",wE="ProductPage.Section.Supports.Title",gE="safetyAndComplianceUrl",mE="productReviewAction",vE="ProductPage.Section.Reviews.MostHelpfulReviews.Title",yE="productRatingsAndReviewsComponent",AE="versionDisplay",TE="Install.Size.String",bE="{fileSize}",SE="iads",PE="dataSetId",IE="SEARCH_FACET_ANY_PRICE",CE="SEARCH_FACET_ANY_CATEGORY",kE="SEARCH_FACET_RELEVANCE",OE="clientApplication",EE="kinds",RE="lastNLSQueryDate",DE="top-apps",_E="showLabelInSearch",LE="guidedToken",xE="secondaryGenreShortDisplayNames",ME="SearchRevisions",$E="{searchTerm}",FE="no-results",NE="searchChartsAndCategories",BE="alternateLabel",UE="contentIds",GE="associations.app-events.data",jE="associations.app-events.attributes.forceAppEvent",VE="mediumAdLockupWithScreenshotsBackground",HE="adItem",WE="condensedAdLockupWithIconBackground",qE="displayTerm",zE="supportsGameController",YE="rankedSecondaryGenre",JE="editorialLink",KE="upsellForNonacquisitionCanvas",ZE="arcadeIcons",QE="AppMarker",XE="isAcquisition",eR="editorialVideo.storeFrontVideo4x3",tR="editorialVideo.storeFrontVideo",nR="headerName",rR="headerBadge",oR="headerTagline",iR="meta.associations.recommendations.data",sR="associations.recommendations.data",aR="todaySection",cR="editorialArtwork.storyCardStatic16x9",lR="systemLarge",uR="personalization-data",dR="ACCOUNT_SETTINGS",fR="onDevicePersonalization",pR="upsellRecovery",hR="prefersLargeTitleWhenRoot",wR="token.metricsPlatformDisplayStyle",gR="https",mR="work",vR="play",yR="develop",AR="channel-apps",TR="landing:new-protocol",bR="chin",SR="Arcade.DownloadPack.Suggestions.PrimaryButtonTitle",PR="strict",IR="ratings",CR="suffix",kR="apps-media-api-edge-host",OR="arcadeGroupingLockup",ER="arcadeStoryCanvas",RR="blue",DR="FlowAction",_R="pageChange",LR="com.apple.TVAppStore.AppStoreTopShelfExtension",xR="originalUrl",MR="purchased",$R="updates",FR="checkForPreorders",NR="meta.discountOffer",BR="viewGenre",UR="minPlayers",GR="maxPlayers",jR="CONTROLLER_OPTIONAL",VR="SIRI_REMOTE_OR_CONTROLLER_REQUIRED",HR="SIRI_REMOTE_REQUIRED",WR="purchaseHistory",qR="familySharing",zR="manageSubscriptions",YR="push",JR="NOAD",KR="METADATA",ZR="png",QR="events-and-offers",XR="close",eD="dismiss",tD="redemptionExpirationDate",nD="details",rD="Arcade.SeeAllGames.Button.Title",oD="personal-recommendations",iD="comingSoon",sD="external",aD="fulfilled",cD="messagesScreenshots",lD="supportsFunCamera",uD="supportURLForLanguage",dD="websiteUrl",fD="top-in-apps",pD="alternate-apps",hD="cabAdSupport",wD="merchandised-in-apps",gD="imessage-apps",mD="670",vD="tvRect",yD="appleWatch_2024",AD="appleWatch_2022",TD="iphone_5_8",bD="editorialArtwork.bannerUber",SD="splashVideo4x3",PD="appletv",ID="arcadeShowcase",CD="StoryMedium",kD="systemimage://exclamationmark.circle",OD="editorial-elements",ED="primary-contents",RD="editorialNotes.badge",DD="interactive",_D="hasChevron",LD="textLightensOnHighlight",xD="hasSeparator",MD="singleModule",$D="materialText",FD="arcadeDownloadPackCard",ND="categoryBrick",BD="nonArcade",UD="friendingViaPush",GD="medium",jD="inAppPurchaseTiledLockup",VD="doNotFilter",HD="cppData",WD="contingentItems",qD="standardApp",zD="platformAttributes.ios.bundleId",YD="abExperiment",JD="editorialBadgeType",KD="editorialPriority",ZD="isSubscription",QD="appExtVrsId",XD="parentId",e_="multiple-system-operators",t_="pageReferrer",n_="advertDeviceWindow",r_="cardType",o_="iAdMetadata",i_="iAdImpressionId",s_="position",a_="prevPage",c_="platformDisplayStyle",l_="application/x-www-form-urlencoded",u_="hintsEntity",d_="idType",f_="ad_container",p_="iAdAppStoreClientRequestId",h_="impressionId",w_="customProductPage",g_="complete",m_="OfferButton.Title.Get",v_="supportsCompanionCheck",y_="{appName}",A_="checkmark",T_="trial",b_="OfferButton.IntroPrice.Trial",S_="size",P_="meta.personalizationData.score",I_="on_demand_product_shelf_fetching",C_="PRODUCT_PRIVACY_TITLE",k_="privacyDetails",O_="privacyType",E_="systemimage://exclamationmark.triangle",R_="webBrowser",D_="install",__="contentRating",L_="chartPosition",x_="BADGE_AGE_RATING_YEARS",M_="BADGE_AGE_RATING",$_="BADGE_MFI_HEADING",F_="systemimage://person.crop.square",N_="MMM d, yyyy",B_="watchOS",U_="xrOS",G_="PRIVACY_POLICY",j_="ProductPage.Section.SafetyAndCompliance.Title",V_="componentBackgroundStandout",H_="APP_STORE_EDITORS_NOTES",W_="LICENSE_AGREEMENT",q_="framedVideo",z_="macOSCompatibleIOSApps",Y_="search-hints",J_="midScrollGuidedSearch",K_="searchResult",Z_="textColor2",Q_="imageWithLabel",X_="editorialArtwork.storyCenteredStatic16x9",eL="editorialArtwork.dayCard",tL="editorialArtwork.eventCard",nL="editorialArtwork.generalCard",rL="editorialArtwork.categoryDetailStatic16x9",oL="header-contents",iL="materialGradient",sL="Video",aL="fractionalWidth",cL="MC.ApSCFB01",lL="UAS.ApXWC01",uL="multiplex",dL="customers-also-bought-apps-with-download-intent",fL="user-reviews",pL="searchLanding:see-all",hL="landing",wL="customArtwork",gL="hash",mL="dynamic",vL="arcadeComingSoon",yL="false",AL="actionLinks",TL="message",bL="productReview",SL="four-screenshots",PL="multiApp",IL="mediumLockupWithScreenshots",CL="singleLockup",kL="appstore",OL="guidedSearch",EL="com.apple.AppStore",RL="com.apple.Arcade.ArcadeTopShelfExtension",DL="categories",_L="fields",LL="requiresGameController",xL="CONTROLLER_REQUIRED",ML="dynamicUI",$L="webView",FL="Account",NL="customScreenshotsByTypeForAd",BL="EventDetails",UL="lockupArtwork",GL="startDate",jL="endDate",VL="badgeKind",HL="eventModule",WL="inAppEventId",qL="branch-app",zL="<br>",YL="winback",JL="with",KL="wordmark",ZL="buy",QL="target",XL="rejected",ex="pageMetrics",tx="personalizationTransparency",nx="canvas",rx="developer-other-apps",ox="related-editorial-items",ix="privacy",sx="watch-apps",ax="atv-apps",cx="mac-os-compatible-ios-apps",lx="round",ux="mixedMediaLockup",dx="EditorialLockupLarge",fx="EditorialLockupMedium",px="heic",hx="Horizontal",wx="largeHeroBreakout",gx="pageHeader",mx="largeImageLockup",vx="mso",yx="editorialArtwork.mediaCard",Ax="achievement",Tx="systemimage://magnifyingglass",bx="searchLandingTrendingSection",Sx="topCharts",Px="onDevicePersonalizationUseCase",Ix="secondaryText",Cx="personalizationData",kx="customDeepLink",Ox="subscribed",Ex="href",Rx="refApp",Dx="impressionType",_x="extRefApp2",Lx="extRefUrl2",xx="offerType",Mx="searchPrefix",$x="iAdTemplateType",Fx="ARCADE_PREORDER_LOCKUP_COMING_SOON",Nx="{price}",Bx="intermediateDetailPage",Ux="ProductPage.ReviewSummary.Body.Title",Gx="languages",jx="storefrontContentRating",Vx="allProductReviewActions",Hx="productReviewsHeader",Wx="tv_product_page_2024E",qx="genreShortDisplayName",zx="multirooms",Yx="cardDisplayStyle",Jx="textLabel",Kx="framedArtwork",Zx="FullWidth",Qx="app-distribution",Xx="ArcadeData",eM="SearchData",tM="attributes",nM="many",rM="arcadeProductPage",oM="textLinksShelf",iM="boolean",sM="trailing",aM="appIcon",cM="redeem",lM="gift",uM="externalUrl",dM="meta.contingentItemOffer",fM="minimumWatchOSVersion",pM="price",hM="<b>",wM="</b>",gM="share",mM="chartHref",vM="search-results",yM="search-landing",AM="textColor4",TM="topic",bM="supportsStreamlinedBuy",SM="additionalTerms",PM="toggle",IM="privacyPolicyUrl",CM="sellerInfo",kM="ios-apps",OM="mac-apps",EM="charts",RM="ipod",DM="pill",_M="unadorned",LM="splashVideo16x9",xM="splashVideo3x4",MM="appTrailerLockup",$M="screenshotsLockup",FM="EditorialLockupLargeVariant",NM="EditorialLockupMediumVariant",BM="prefersOverlayedPageHeader",UM="largeBreakout",GM="canonicalId",jM="rowCount",VM="mediumStoryCard",HM="editorial_id",WM="links",qM="suggested",zM="named",YM="editorial-elements:contents",JM="largeStoryCard",KM="actionUrl",ZM="impressionQueue",QM="eventVersion",XM="advertRotation",e$="hints",t$="pageContext",n$="overlay",r$="softwareType",o$="SearchLanding",i$="PREORDER_NOTIFY_MESSAGE",s$="NOT_COMPATIBLE_BANNER_TEMPLATE",a$="{linkTitle}",c$="ppid",l$="targetPlatform",u$="rooms",d$="systemSmall",f$="navigation",p$="apps-and-games",h$="few",w$="appEvent",g$="arcadeTabHeader",m$="new",v$="GET",y$="code",A$="ages",T$="hide_arcade_header_on_arcade_tab",b$="toast",S$="location",P$="LearnMore",I$="singleSelection",C$="arcadeDownloadPackCategories",k$="isCanvasAvailable",O$="shortEditorialNotes",E$="offerItems",R$="enrichedEditorialNotes",D$="inAppPurchaseLockup",_$="largeLockup",L$="clear",x$="ipadPro",M$="ipad_10_5",$$="isGameCenterEnabled",F$="lockupSmall",N$="badge-content",B$="placeholder",U$="layoutDirection",G$="lightOverArtwork",j$="posterLockup",V$="grouping",H$="facet",W$="arcadeApp",q$="ARCADE_ACTION_TITLE_EXPLORE",z$="EXPLORE",Y$="pageUrl",J$="extRefUrl",K$="refUrl",Z$="trending",Q$="webBrowserUpdates",X$="controller",eF="BADGE_MFI_SUPPORTED",tF="userRating",nF="arcadeProductPageInlineMessage",rF="productPageInlineMessage",oF="Achievements",iF="rank",sF="cancel",aF="Search Results",cF="eula",lF="discover",uF="coercedValue",dF="number",fF="disabled",pF="always",hF="tabs",wF="menuItem",gF="actionType",mF="back",vF="badge",yF="branch",AF="roundedRect",TF="salables",bF="arcadeSeeAllGames",SF="shelf_header",PF="comingSoonGrouping",IF="object",CF="versionHistory",kF="editorialClientParams",OF="types",EF="tvos",RF="internal",DF="ipadPro_2018",_F="ipad_11",LF="expectedReleaseDate",xF="prefersLargeTitle",MF="editorial-shelves-header",$F="brick",FF="showExpectedReleaseDate",NF="meta.personalizationData.appId",BF="todayBrick",UF="click",GF="pageFields",jF="iAdContainerId",VF="pageDetails",HF="{title}",WF="NOT_COMPATIBLE_BANNER_LINK_TITLE",qF="compatibilityAnnotation",zF="relationship",YF="allProductReviews",JF="tapToRateProductReviewAction",KF="writeAReviewProductReviewAction",ZF="notPurchasedRatingsAndReviews",QF="purchasedRatingsAndReviews",XF="Any",eN="apps.apple.com",tN="host",nN="one",rN="inAppPurchase",oN="arcadeGeneric",iN="editorialItem",sN="releaseDate",aN="hero",cN="NO_BADGE",lN="story",uN="term",dN="isFirstPartyHideableApp",fN="iap",pN="remoteControllerRequirement",hN="customers-also-bought-apps",wN="iad",gN="recurringSubscriptionPeriod",mN="numOfPeriods",vN="@@count@@",yN="upsellBreakout",AN="width",TN="previewFrame",bN="supportsArcade",SN="POST",PN="heroCarousel",IN="editorialCopy",CN="mediumImageLockup",kN="tvOS",ON="editorialBadgeInfo",EN="iAdPlacementId",RN="hostApp",DN="iAdId",_N="create",LN="userProductReviews",xN="bundleParents",MN="textCards",$N="platform",FN="isStandaloneForWatchOS",NN="description.standard",BN="annotation",UN="bgColor",GN="contexts",jN="latest-release-app",VN="height",HN="debug",WN="{learnMoreLink}",qN="open",zN="actionDetails",YN="iAdSlotInfo",JN="{osVersion}",KN="detailPage",ZN="editorsChoiceProductReviews",QN="bundleChildren",XN="brandedSingleApp",eB="large",tB="transparent",nB="priceFormatted",rB="offerName",oB="videoPreviewsByType",iB="deviceFamilies",sB="completed",aB="query",cB="pageId",lB="Software",uB="SearchResults",dB="offers",fB="rating",pB="renderPage",hB="notPurchasedLinks",wB="paragraph",gB="finance",mB="editorialElementKind",vB="buyParams",yB="APPLOCKUP",AB="upsellMarketingItem",TB="metrics",bB="screenshotsByType",SB="colored",PB="small",IB="tile",CB="undefined",kB="editorial-item-groups",OB="other",EB="inAppPurchases",RB="subscriptions",DB="short",_B="todayCard",LB="protocol",xB="expectedReleaseDateDisplayFormat",MB="editorial-cards",$B="appletvos",FB="data",NB="editorialNotes.tagline",BB="tagline",UB="genreDisplayName",GB="eventType",jB="iAdMissedOpportunityReason",VB="productReviewsFooter",HB="category",WB="presentModalFormSheet",qB="searchResults",zB="advertSlotReporting",YB="rgb",JB="realityDevice",KB="editorialNotes.name",ZB="collections",QB="pageType",XB="review_summarization",eU="developers",tU="type",nU="flowPreview",rU="editorial-pages",oU="its_contentId",iU="pathname",sU="token",aU="Search",cU="Room",lU="reviewSummary",uU="view",dU="text/plain",fU="purchasedLinks",pU="grid",hU="macOS",wU="searchLanding",gU="text/x-apple-as3-nqml",mU="marketing-items",vU="gameCenter",yU="meta",AU="collection",TU="No page routes specified",bU="iOS",SU="artistName",PU="groupings",IU="productVideo",CU="contingent-items",kU="arcade-apps",OU="editorialNotes",EU="games",RU="card",DU="productPage",_U="color",LU="preorder",xU="ACTION_SEE_ALL",MU="smallStoryCard",$U="adamId",FU="impressions",NU="recommendations",BU="fractionalHeight",UU="updatedTodayCardArtworkLayouts",GU="productArtwork",jU="offer-items",VU="product",HU="editorialQuote",WU="mostRecentVersion",qU="xros",zU="sort",YU="isAppleWatchSupported",JU="kind",KU="preorderDisclaimer",ZU="never",QU="children",XU="displayStyle",eG="requiredCapabilities",tG="osx",nG="mediumLockup",rG="infer",oG="featuredIn",iG="account",sG="iphone",aG="compatibilityControllerRequirement",cG="ipad",lG="primary-content",uG="card-contents",dG="developer",fG="genre",pG="minimumOSVersion",hG="subtitle",wG="chart",gG="ignoredValue",mG="leaderboards",vG="productPageYMALDuringDownload",yG="center",AG="macRequiredCapabilities",TG="text",bG="searchTerm",SG="defaultValue",PG="productRatings",IG="image",CG="action",kG="messages",OG="coercible",EG="editorsChoice",RG="privacyFooter",DG="videos",_G="light",LG="informationRibbon",xG="moreByDeveloper",MG="label",$G="in-apps",FG="appEvents",NG="privacyTypes",BG="productPageYMAL",UG="absolute",GG="true",jG="capabilities",VG="title",HG="article",WG="privacyHeader",qG="similarItems",zG="none",YG="video",JG="swoosh",KG="bundleId",ZG="isPreorder",QG="Arcade",XG="lockup",ej="search",tj="its_id",nj="white",rj="static",oj="friendsPlaying",ij="editorialVideo",sj="sequential",aj="link",cj="default",lj="editorialArtwork",uj="smallLockup",dj="ios",fj="string",pj="description",hj="information",wj="vision",gj="url",mj="inline",vj="leading",yj="reviews",Aj="achievements",Tj="app",bj="dark",Sj="header",Pj="app-bundles",Ij="topLockup",Cj="today",kj="editorial-items",Oj="pad",Ej="unknown",Rj="screenshots",Dj="navigate",_j="artwork",Lj="phone",xj="app-events",Mj="mac",$j="arcade",Fj="watch",Nj="button",Bj="standard",Uj="contents",Gj="apps",jj="name",Vj="page",Hj="shelf"
hg=e(8706),wg=e(9100),gg=e(8836),mg=e(1222)
const Wj=(0,(vg=e(900)).makeMetatype)("app-store:storeMetrics"),qj=(0,vg.makeMetatype)("app-store:amsEngagement"),zj=(0,vg.makeMetatype)("app-store:device"),Yj=(0,vg.makeMetatype)("app-store:user"),Jj=(0,vg.makeMetatype)("app-store:metricsIdentifiers"),Kj=(0,vg.makeMetatype)("app-store:personalizationStore"),Zj=(0,vg.makeMetatype)("app-store:arcade"),Qj=(0,vg.makeMetatype)("app-store:gameCenter"),Xj=(0,vg.makeMetatype)("app-store:resilientDeepLinks"),eV=(0,vg.makeMetatype)("app-store:ads"),tV=(0,vg.makeMetatype)("app-store:onDeviceRecommendationsManager"),nV=(0,vg.makeMetatype)("app-store:onDeviceSearchHistoryManager"),rV=(0,vg.makeMetatype)("app-store:featureFlags"),oV=(0,vg.makeMetatype)("app-store:mediaTokenService"),iV=(0,vg.makeMetatype)("app-store:adsLocalizer"),sV=(0,vg.makeMetatype)("app-store:appDistribution"),aV=(0,vg.makeMetatype)("app-store:timeoutManager"),cV=(0,vg.makeMetatype)("app-store:treatmentStore"),lV=(0,vg.makeMetatype)("app-store:userDefaults")
yg=e(4172),Ag=e(2450)
const uV={}
class dV{constructor(e){this.implementation=e}}class fV extends dV{get isSupportEnabled(){return i(this.implementation)&&this.implementation.isSupportEnabled}get isRosettaAvailable(){return i(this.implementation)&&this.implementation.isRosettaAvailable}}fV.type=(0,vg.makeMetatype)("app-store:as-wrapper"),Tg=e(5542)
class pV extends dV{constructor(e,t){super(e),this.cachedEnableAdditionalLoggingForPPV=null}get todayAdMediumLockupScreenshotEnabled(){var e
return null!==(e=this.implementation.boolean("today-ad-medium-lockup-screenshots-enabled"))&&void 0!==e&&e}get todayAdMediumLockupScreenshotAnimationEnabled(){var e
return null===(e=this.implementation.boolean("today-ad-medium-lockup-screenshots-animation-enabled"))||void 0===e||e}get trendingSearchesURL(){return this.implementation.url("trending-searches")}get searchHintsURL(){return this.implementation.url("searchHints")}get personalizedUserReviewURL(){return this.implementation.url("personalizedUserReviewUrl")}get personalizedUserReviewEnabled(){return this.implementation.boolean("personalizedUserReviewEnabled")}get userRateURL(){return this.implementation.url("p2-application-user-rate-content")}get writeReviewURL(){return this.implementation.url("p2-application-user-write-review")}get accessoryRoomURL(){return this.implementation.url("p2-accessory-room")}get passbookMainURL(){return this.implementation.url("passbook")}get libraryLinkURL(){return this.implementation.url("library-link")}get metricsConfiguration(){return m(this.implementation.dictionary(TB))}get metricsPaymentNamespaceEnabled(){if(o(this.metricsPaymentTopic))return!1
const e=m(this.implementation.dictionary(AI)),t=p(e,"APPSTORE_PAYMENTS_ENGAGEMENT"),n=p(e,"APPSTORE_PAYMENTS_ENGAGEMENT_CLIENT")
return(0,Tg.isSome)(t)&&0!==t.length&&(0,Tg.isSome)(n)&&0!==n.length}get metricsPaymentTopic(){var e
return null!==(e=d(this.metricsConfiguration,"topics.APPSTORE_PAYMENTS_ENGAGEMENT_TOPIC"))&&void 0!==e?e:null}get personalizationUserIdEnabled(){const e=p(m(this.implementation.dictionary(AI)),"APPSTORE_PERSONALIZATION")
return(0,Tg.isSome)(e)&&0!==Object.keys(e).length}get language(){return this.implementation.string(TI)}get mediaApiLanguage(){return this.implementation.string("language-tag")||this.implementation.string(TI)}get termsAndConditionsURL(){return this.implementation.url("p2-service-terms-url")}get usePostForAppStoreSearch(){return this.implementation.boolean("usePostForAppStoreSearch")}get isMonetaryGiftingEnabled(){return this.implementation.boolean("isBuyingScheduledGiftCertificateEnabled")}get accountTopUpURL(){return this.implementation.url("AddFundsUrl")}get accountTopUpTitle(){return this.implementation.string("account-top-up-title")}get isContentGiftingEnabled(){return this.implementation.boolean("isScheduledGiftingEnabled")}get buyButtonMetadataURL(){return this.implementation.url("personalized-buy-buttons/software")}get isTVAppEnabled(){return this.implementation.boolean("uvSearch/nowplaying-enabled")}get emailSupportLinkURL(){return this.implementation.url("supportLinkUrl")}get voteUrl(){return this.implementation.url("voteUrl")}get enableReviewSummarization(){return this.implementation.boolean("enable-review-summarization")}get reviewSummaryReportConcernData(){return m(this.implementation.dictionary("review-summarization-report-concern"))}get reportConcernUrl(){return this.implementation.url("reportConcernUrl")}get reportConcernExplanation(){return this.implementation.string("reportConcernExplanation")}get reportConcernReasons(){return c(g(this.implementation.array("reportConcernReasons")))}get reportProblemEnabled(){var e
return null!==(e=this.implementation.boolean("product-page-report-problem-enabled"))&&void 0!==e&&e}get productPageReportProblemURL(){return this.implementation.string("product-page-report-problem-url")}get productPageReportProblemSADSubscriptionArray(){return c(g(this.implementation.array("product-page-report-problem-sad-subscriptions")))}get productPageReportProblemSecondPartyAppArray(){const e=c(g(this.implementation.array("product-page-report-problem-second-party-apps")))
return o(e)?["1473505534","1416238567","640199958","1529498570","915061776","1130498044","1070072560"]:e}get createAccountUrl(){var e
return null!==(e=this.implementation.url("createAccountUrl"))&&void 0!==e?e:WI}get mediaCountryCode(){return this.implementation.string("countryCode")}get mediaHost(){return this.implementation.url("apps-media-api-host")}mediaEdgeHost(e){return e.host.clientIdentifier===GI?this.implementation.url(kR):this.implementation.string(kR)}get mediaAPICatalogMixedShouldUseEdge(){var e
return null!==(e=this.implementation.boolean("apps-media-api-catalog-mixed-should-use-edge"))&&void 0!==e&&e}get mediaEdgeSearchHost(){return this.implementation.string("apps-media-api-search-edge-host")}get mediaPreviewHost(){return this.implementation.string("apps-media-api-preview-host")}get mediaRealmHost(){return this.implementation.string("notification-settings-media-api-host")}get edgeEndpoints(){const e=this.implementation.array("apps-media-api-edge-end-points")
return typeof e===CB?[]:c(g(e))}get mediaAdvertRequestLimit(){var e
return null!==(e=this.implementation.double("apps-media-api-search-ads-limit"))&&void 0!==e?e:4}get searchSortOptions(){return c(g(this.implementation.array("searchSortOptions")))}get ageBands(){return c(g(this.implementation.array("ageBands")))}get redirectUrlWhitelistedQueryParams(){let e=c(g(this.implementation.array("processRedirectUrl/whitelistedQueryParams")))
return o(e)&&(e=["affC",uI,"advp","at","ct","itsct","itscg","itscc","itcCt",lI,"ls","partnerId","pt","qtkid","uo"]),e}get redirectUrlEndpoint(){var e
return null!==(e=this.implementation.string("processRedirectUrl/endpoint"))&&void 0!==e?e:"https://itunes.apple.com/WebObjects/MZStoreServices.woa/wa/processRedirectUrl"}get aristotleParentAppAdamId(){var e
return null!==(e=this.implementation.string("aristotle-app-id"))&&void 0!==e?e:"383941000"}get arcadeAppAdamId(){return this.implementation.string("app-store-app-id")}get arcadeProductFamilyId(){var e
return null!==(e=this.implementation.string("arcade-iap-family-id"))&&void 0!==e?e:this.implementation.string("ocelot-iap-family-id")}get arcadeProductId(){var e
return null!==(e=this.implementation.string("arcade-iap-offer-name"))&&void 0!==e?e:this.implementation.string("ocelot-iap-offer-name")}get arcadeCategoryBarSAGUpliftDisplayRate(){var e
return null!==(e=this.implementation.double("arcade-category-bar-see-all-games-display-rate"))&&void 0!==e?e:0}get isArcadeEnabled(){var e
return null!==(e=this.implementation.boolean("arcade-enabled"))&&void 0!==e&&e}get searchResultsLearnMoreEditorialId(){return this.implementation.string("transparencyLawEditorialItemId")}get systemApps(){return c(g(this.implementation.array("hideableSystemApps")))}get nonDeletableSystemApps(){const e=g(this.implementation.array("nonDeletableSystemApps"))
return s(e)?c(e):[{id:1635387927,"bundle-id":Ym},{id:1635862301,"bundle-id":Jm},{id:1584216343,"bundle-id":"com.apple.findmy.finddevices"},{id:1584215960,"bundle-id":"com.apple.NanoWorldClock"},{id:1584215812,"bundle-id":"com.apple.HeartRate"},{id:1584215851,"bundle-id":"com.apple.SessionTrackerApp"},{id:1146562108,"bundle-id":"com.apple.NanoPhone"},{id:1146560473,"bundle-id":"com.apple.MobileSMS"},{id:1584215428,"bundle-id":"com.apple.NanoPhotos"},{id:1459455352,"bundle-id":zm},{id:1067456176,"bundle-id":qm}]}get tabsStandard(){return c(g(this.implementation.array("tabs/standard")))}get watchAppsGroupingURL(){var e
return null!==(e=this.implementation.url("watchAppsGrouping"))&&void 0!==e?e:"https://apps.apple.com/WebObjects/MZStore.woa/wa/viewFeature?id=1472048385"}get requireAgeVerification(){return this.implementation.boolean("requireAgeVerification")}get ageRatingLearnMoreEditorialItemId(){return this.implementation.string("ageRatingLearnMoreEditorialItemId")}get appleSiliconMacUnverifiedBadgeEditorialItemId(){return this.implementation.string("appleSiliconMacUnverifiedBadgeEditorialItemId")}get safariExtensionsGroupingURL(){return this.implementation.url("safariExtensionsGrouping")}get familySubscriptionsLearnMoreEditorialItemId(){return this.implementation.string("familySubscriptionsLearnMoreEditorialItemId")}get dynamicUIRegexStrings(){const e=this.implementation.array("commerce-ui-urls/dynamic-url-patterns")
return typeof e===CB?[]:c(g(e))}get financeUIRegexStrings(){const e=this.implementation.array("commerce-ui-urls/url-patterns")
return typeof e===CB?[]:c(g(e))}get webViewRegexStrings(){const e=this.implementation.array("commerce-ui-urls/v2-url-patterns")
return typeof e===CB?[]:c(g(e))}get arcadePreOrderUpsellLimitSeconds(){var e
return null!==(e=this.implementation.double("arcadePreOrderUpsellLimitSeconds"))&&void 0!==e?e:86400}get recentlyPlayedGamesWindowInSeconds(){var e
return null!==(e=this.implementation.double("recentlyPlayedGamesWindowInSeconds"))&&void 0!==e?e:7776e3}get gamesFriendsPlayedWindowInSeconds(){var e
return null!==(e=this.implementation.integer("games-friends-played-window-in-seconds"))&&void 0!==e?e:15778800}get enableComingSoonToggle(){return this.implementation.boolean("enableComingSoonToggle")}get enablePrivacyNutritionLabels(){var e
return null!==(e=this.implementation.boolean("enable-privacy-nutrition-labels"))&&void 0!==e&&e}get enableSellerInfo(){var e
return null!==(e=this.implementation.boolean("enable-seller-info"))&&void 0!==e&&e}get enableSellerICPAnnotation(){var e
return null!==(e=this.implementation.boolean("enable-seller-icp"))&&void 0!==e&&e}get enableFeaturedCategoriesOnGroupings(){var e
return null!==(e=this.implementation.boolean("enable-featured-categories-on-groupings"))&&void 0!==e&&e}get enableCategoryBricksOnGroupings(){var e
return null!==(e=this.implementation.boolean("enable-category-bricks-on-groupings"))&&void 0!==e&&e}get arcadeOfferEditorialItemId(){return this.implementation.string("arcadeOfferEditorialItemId")}get sponsoredSearchODMLTimeout(){var e
return null!==(e=this.implementation.double("sponsored-search-odml-timeout"))&&void 0!==e?e:3}get isSearchLandingAdsEnabled(){var e
return null!==(e=this.implementation.boolean("isSearchLandingAdsEnabled"))&&void 0!==e&&e}get isLLMSearchTagsEnabled(){var e
return null!==(e=this.implementation.boolean("apps-search-tags-enabled"))&&void 0!==e&&e}get searchLandingAdFetchTimeout(){var e
return null!==(e=this.implementation.double("search-landing-ad-fetch-timeout"))&&void 0!==e?e:.175}get searchLandingPageOffscreenRefreshInterval(){var e
return null!==(e=this.implementation.double("search-landing-offscreen-refresh-interval-in-seconds"))&&void 0!==e?e:60}get searchLandingPageRefreshUpdateDelayInterval(){var e
return null!==(e=this.implementation.double("search-landing-page-update-delay-interval-in-seconds"))&&void 0!==e?e:.3}get appPrivacyLearnMoreEditorialItemId(){return this.implementation.string("appPrivacyLearnMoreEditorialItemId")}get ratingsAndReviewsLearnMoreEditorialId(){return this.implementation.string("ratings-and-reviews-learn-more-editorial-item-id")}get reviewSummarizationLearnMoreEditorialItemId(){return this.implementation.string("review-summarization-learn-more-editorial-item-id")}get suppressedPrivacyAppIds(){const e=this.implementation.array("suppressedPrivacyLabels")
return typeof e===CB?[]:c(g(e))}get appPrivacyDefinitionsEditorialItemId(){return this.implementation.string("appPrivacyDefinitionsEditorialItemId")}get todayWidgetLivePreviewRolloutRate(){var e
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
return null!==(e=this.implementation.boolean("enable-system-app-reviews"))&&void 0!==e&&e}get enableCPPInSearchAds(){return this.implementation.boolean("enableCPPsInSearchAds")||!1}get cancelPreorderItemSrv(){return this.implementation.url("cancelPreorderItemSrv")||"https://buy.itunes.apple.com/commerce/preorders/cancel"}get getCancellablePreorderItemsSrv(){return this.implementation.url("getCancellablePreorderItemsSrv")||"https://buy.itunes.apple.com/commerce/preorders/cancellable"}get enabledAdPlacements(){return c(g(this.implementation.array("enabled-ad-placements")))}get adPlacementTimeouts(){return p(m(this.implementation.dictionary("ad-placement-timeouts")))}get inAppPurchasesLearnMoreEditorialItemId(){return this.implementation.string("in-app-purchases-learn-more-editorial-item-id")}get enableExternalPurchases(){var e
return null!==(e=this.implementation.boolean("enable-external-purchase"))&&void 0!==e&&e}get enabledExternalPurchasesPlacements(){return c(g(this.implementation.array("enabled-external-purchase-placements")))}get externalPurchasesLearnMoreEditorialItemId(){return this.implementation.string("external-purchase-learn-more-editorial-item-id")}get externalBrowserLearnMoreEditorialItemId(){return this.implementation.string("external-browser-learn-more-editorial-item-id")}get sharePlayAppsEditorialItemId(){return this.implementation.string("share-play-apps-editorial-item-id")}get externalPurchasesIncludeProductPageBannerIcon(){var e
return null!==(e=this.implementation.boolean("external-purchase-product-page-banner-include-icon"))&&void 0!==e&&e}get externalPurchasesProductPageAnnotationVariant(){return this.implementation.string("external-purchase-product-page-annotation-variant")}get newEventsForODJAreEnabled(){var e
return null!==(e=this.implementation.boolean("new-events-for-odj-are-enabled"))&&void 0!==e&&e}get defaultChart(){return m(this.implementation.dictionary("default-chart"))}get accountUrl(){var e
return null!==(e=this.implementation.url("accountUrl"))&&void 0!==e?e:bI}get redeemUrl(){var e
return null!==(e=this.implementation.url("redeemUrl"))&&void 0!==e?e:SI}get charityUrl(){var e
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
return null!==(e=this.implementation.double("today-tab-arcade-personalization-rate"))&&void 0!==e?e:0}get gameCenterExtendSupportedFeatures(){var e
return null!==(e=this.implementation.boolean("game-center-extend-supported-features"))&&void 0!==e&&e}get adPlacementEligibleSlotPositions(){const e=m(this.implementation.dictionary("ad-placement-eligible-slot-positions"))
return s(e)?e:{today:[{shelfIdentifier:"0",slot:0},{shelfIdentifier:"0",slot:1}],"product-page-ymal":[{shelfIdentifier:hN,slot:0}]}}get managePreordersUrl(){var e
return null!==(e=this.implementation.url("preordersUrl"))&&void 0!==e?e:"https://finance-app.itunes.apple.com/preorders"}get modifyAccount(){var e
return null!==(e=this.implementation.url("modifyAccount"))&&void 0!==e?e:bI}get purchaseHistoryUrl(){return this.implementation.url("purchaseHistoryUrl")}get signup(){var e
return null!==(e=this.implementation.url(Nm))&&void 0!==e?e:WI}get redeemCodeLanding(){var e
return null!==(e=this.implementation.url("redeemCodeLanding"))&&void 0!==e?e:SI}get reportProblemUrl(){return this.implementation.string("reportProblemUrl")}get unrestrictedServerSideTabBadging(){var e
return null!==(e=this.implementation.boolean("unrestricted-server-side-tab-badging"))&&void 0!==e&&e}get todayAdCondensedEnabled(){var e
return null!==(e=this.implementation.boolean("today-ad-condensed-enabled"))&&void 0!==e&&e}get enableVisionAppStoreBinCompatChecks(){var e
return null!==(e=this.implementation.boolean("enable-vision-app-store-bincompat-checks"))&&void 0!==e&&e}get safariExtensionsEditorialPageId(){return this.implementation.url("safari-extensions-editorial-page-id")}get buddyOnboardingEditorialItemId(){return this.implementation.string("buddy-onboarding-editorial-item-id")}get productPageFriendsPlayingClickEventsEnabled(){var e
return null!==(e=this.implementation.boolean("product-page-friends-playing-click-events-enabled"))&&void 0!==e&&e}get highMotionLearnMoreEditorialItemId(){return this.implementation.string("high-motion-learn-more-editorial-item-id")}get todayAdMediumLockupScreenshotsRiverSpeed(){return this.implementation.double("today-ad-medium-lockup-screenshots-river-speed")}get arcadeDownloadPackCategoriesCollectionId(){return this.implementation.string("arcade-download-packs-onboarding-collection-id")}get arcadeDownloadPackShelfTTLInSeconds(){var e
return null!==(e=this.implementation.integer("arcade-starter-pack-ttl-in-seconds"))&&void 0!==e?e:0}get enableOfferItems(){var e
return null!==(e=this.implementation.boolean("enable-winback-offers"))&&void 0!==e&&e}get appDistributionMediaAPIHost(){return this.implementation.string("app-distribution-media-api-host")}get appDistributionLanguageTag(){return this.implementation.string("app-distribution-language-tag")}get supportsAppDistribution(){var e
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
return null!==(e=this.implementation.boolean("enable-personalized-recommendations-toggle"))&&void 0!==e&&e}get metricsIdMigrationEnabled(){var e
return null===(e=this.implementation.boolean("metrics-id-migration-enabled"))||void 0===e||e}get isNaturalLanguageSearchEnabled(){var e
return null!==(e=this.implementation.boolean("apps-natural-language-search-enabled"))&&void 0!==e&&e}get isNaturalLanguageSearchResultsEnabled(){var e
return null!==(e=this.implementation.boolean("apps-natural-language-search-results-enabled"))&&void 0!==e&&e}get metricsIdentifiersShouldCache(){var e
return null===(e=this.implementation.boolean("metrics-identifiers-should-cache"))||void 0===e||e}get changePaymentMethodUrl(){return this.implementation.string("change-payment-method-url")}get aboutFrenchAppStoreEditorialItemId(){return this.implementation.string("about-app-store-editorial-item-id")}get isOnDemandShelfFetchingEnabled(){var e
return null===(e=this.implementation.boolean("on-demand-product-shelf-fetching-enabled"))||void 0===e||e}get isMetricsUserIdFallbackEnabled(){var e
return null!==(e=this.implementation.boolean("metrics-user-id-fallback-enabled"))&&void 0!==e&&e}get isMetricsAb2DataFallbackEnabled(){var e
return null===(e=this.implementation.boolean("metrics-ab2data-fallback-enabled"))||void 0===e||e}get enableRecoOnDeviceReordering(){var e
return null!==(e=this.implementation.boolean("enable-on-device-reco-reordering"))&&void 0!==e&&e}get ribbonBarVisionEditorialItemIds(){return c(g(this.implementation.array("ribbon-bar-vision-editorial-item-ids")))}get searchFilterEditorialItemIds(){const e=c(g(this.implementation.array("search-filter-editorial-item-ids")))
return new Set(e)}get enableDeviceDrivenDiscoveryContent(){var e
return null!==(e=this.implementation.boolean("enable-device-driven-discovery-content"))&&void 0!==e&&e}get enableProductPageInstallSize(){var e
return null!==(e=this.implementation.boolean("enable-product-page-install-size"))&&void 0!==e&&e}get externalPurchasesProductPageBannerTextVariant(){return this.implementation.string("external-purchase-product-page-banner-text-variant")}get externalPurchasesProductPageBannerIconVariant(){return this.implementation.string("external-purchase-product-page-banner-icon-variant")}get maxGamesForFetchingEvents(){var e
return null!==(e=this.implementation.integer("max-games-for-fetching-events"))&&void 0!==e?e:30}get mockHomeFeedURL(){return this.implementation.string("mock-home-feed-url")}get disablePlayTogetherEndpoint(){var e
return null!==(e=this.implementation.boolean("disable-play-together-endpoint"))&&void 0!==e&&e}get enableLicenses(){var e
return null!==(e=this.implementation.boolean("enable-licenses"))&&void 0!==e&&e}get disabledRichLinkPresentationEditorialItemIds(){var e
return c(g(null!==(e=this.implementation.array("disabled-rich-link-presentation-editorial-item-ids"))&&void 0!==e?e:["1842906680"]))}}pV.type=(0,vg.makeMetatype)("app-store:bag-wrapper")
class hV{constructor(){this.$incidents=void 0}isValid(){return!0}}class wV extends hV{constructor(e=null){super(),this.impressionMetrics=e}}class gV extends hV{constructor(e,t,n,r,o,i,s,a,c,l,u,d,f,p,h,w,g,m,v,y,A){super(),this.buyParams=e,this.vendor=t,this.appName=n,this.bundleId=r,this.appPlatforms=o,this.isPreorder=null!=i&&i,this.excludeAttribution=null==s||s,this.metricsPlatformDisplayStyle=a,this.isRedownload=null!=l&&l,this.lineItem=c,this.preflightPackageUrl=void 0===u?null:u,this.isArcadeApp=d,this.isHalva=f,this.supportsVisionOSCompatibleIOSBinary=p,this.inAppEventId=h,this.extRefApp2=w,this.extRefUrl2=g,this.additionalHeaders=m,this.appCapabilities=v,this.isDefaultBrowser=y,this.remoteDownloadIdentifiers=A}}class mV extends hV{constructor(e,t,n,r,o,i,s,a,c,l,u,d,f,p,h,w,g,m,v,y,A,T){super(),this.offerType=e,this.adamId=t,this.parentAdamId=r,this.style=null==n?rG:n,this.environment=null==o?_G:o,this.offerTint=null==i?{type:RR}:i,this.titles=null==s?{}:s,this.titleSymbolNames=null==a?{}:a,this.subtitles=null==c?{}:c,this.hasInAppPurchases=l,this.hasExternalPurchases=u,this.isDeletableSystemApp=d,this.isFree=f,this.isPreorder=p,this.offerLabelStyle=null==h?zG:h,this.hasDiscount=w,this.contentRating=g,this.subscriptionFamilyId=m,this.useAdsLocale=v,this.priceFormatted=y,this.isStreamlinedBuy=A,this.appCapabilities=T}newOfferDisplayPropertiesChangingAppearance(e,t,n,r){return new mV(this.offerType,this.adamId,null==t||!e&&this.style===fF?this.style:t,this.parentAdamId,null==n?this.environment:n,null==r?this.offerTint:r,this.titles,this.titleSymbolNames,this.subtitles,this.hasInAppPurchases,this.hasExternalPurchases,this.isDeletableSystemApp,this.isFree,this.isPreorder,this.offerLabelStyle,this.hasDiscount,this.contentRating,this.subscriptionFamilyId,this.useAdsLocale,this.priceFormatted,this.isStreamlinedBuy,this.appCapabilities)}}class vV extends hV{constructor(e,t,n){super(),this.offerAction=t,this.offerDisplayProperties=n,this.personalizedOfferType=e}}!function(e){e[e.scaleToFill=0]="scaleToFill",e[e.scaleAspectFit=1]="scaleAspectFit",e[e.scaleAspectFill=2]="scaleAspectFill",e[e.redraw=3]="redraw",e[e.center=4]="center",e[e.top=5]="top",e[e.bottom=6]="bottom",e[e.left=7]="left",e[e.right=8]="right",e[e.topLeft=9]="topLeft",e[e.topRight=10]="topRight",e[e.bottomLeft=11]="bottomLeft",e[e.bottomRight=12]="bottomRight"}(bg||(bg={}))
class yV extends hV{constructor(e,t,n){super(),this.format=e,this.quality=t,this.supportsWideGamut=n}isValid(){return this.format&&void 0!==this.supportsWideGamut}}class AV extends hV{constructor(e,t,n,r,o,i){super(),this.checksum=null,this.backgroundColor=null,this.textColor=null,this.style=null,this.crop="bb",this.contentMode=null,this.template=e,this.width=t,this.height=n,this.variants=r,this.backgroundColor=o,this.textColor=i}isPortrait(){return this.height>=this.width}isLandscape(){return!this.isPortrait()}isValid(){return""!==this.template&&this.width>0&&this.height>0&&this.variants.length>0}}class TV extends hV{constructor(e,t){super(),this.artwork=e,this.mediaPlatform=t}}class bV extends hV{constructor(e,t,n,r,o,i,s){super(),this.appPlatform=e,this.supplementaryAppPlatforms=r||[],this.deviceCornerRadiusFactor=o,this.mediaType=t,this.systemImageName=n,this.deviceBorderThickness=i,this.outerDeviceCornerRadiusFactor=s}isEqualTo(e){this.supplementaryAppPlatforms.sort(),e.supplementaryAppPlatforms.sort()
const t=this.supplementaryAppPlatforms.join(",")===e.supplementaryAppPlatforms.join(",")
return e.appPlatform===this.appPlatform&&e.mediaType===this.mediaType&&e.systemImageName===this.systemImageName&&t&&e.deviceCornerRadiusFactor===this.deviceCornerRadiusFactor}}class SV{constructor(e,t){this.width=e,this.height=t}static fromNativeSize(e){return new SV(e.width,e.height)}isEqualTo(e){return e.width===this.width&&e.height===this.height}}class PV extends hV{constructor(e,t,n,r,o,i){super(),this.itemName=e,this.url=t,this.developer=n,this.category=r,this.fileSize=o,this.mediaType=i}}class IV extends hV{constructor(e,t,n,r){super(),this.context=HG,this.id=e,this.text=t,this.subtitle=n,this.artwork=r}}class CV extends hV{constructor(e,t,n){super(),this.context=w$,this.text=e,this.subtitle=t,this.artwork=n}}class kV extends hV{constructor(e,t,n,r,o,i,s,a,c,l,u,d){super(),this.context=VU,this.adamId=e,this.storeFrontIdentifier=t,this.name=n,this.platform=r,this.icon=o,this.screenshots=i,this.videos=s,this.isMessagesOnlyApp=a,this.subtitle=c,this.genreName=l,this.messagesAppIcon=u,this.notesMetadata=d}}class OV extends hV{constructor(e,t,n){super(),this.context=RI,this.text=e,this.subtitle=t,this.artwork=n}}class EV extends hV{constructor(e,t,n){super(),this.metadata=e,this.url=t,this.shortUrl=n}}class RV extends hV{constructor(e,t,n){super(),this.reasonId=e,this.name=t,this.uppercaseName=n}}class DV extends hV{constructor(e,t=dU){super(),this.rawText=e,this.rawTextType=t}}class _V extends wV{constructor(e,t,n){super(),this.text=e,this.mediaType=t||dU,this.style=n||Bj,this.alignment="localized",this.isCollapsed=!1,this.suppressVerticalMargins=!1,this.wantsCollapsedNewlines=!0}}class LV extends hV{constructor(e,t=null,n=null){super(),this.actions=e,this.offerDisplayProperties=t,this.offerActionIndex=n}}class xV extends wV{}class MV extends wV{}class $V extends hV{constructor(e){super(),this.isFallbackStyle=!1,this.type=e}}class FV extends wV{constructor(e,t,n,r,o,i){super(),this.bundleId=e,this.completedAchievements=t,this.totalAchievements=n,this.completedText=r,this.action=o,this.achievements=i}}class NV extends wV{constructor(e,t,n,r,o,i,s,a){super(),this.id=e,this.title=t,this.subtitle=n,this.buttonText=r,this.contactId=o,this.buttonAction=i,this.removeButtonAction=s,this.shouldShowMessagesBadge=a}}class BV extends hV{constructor(e){super(),this.type=e}}class UV extends hV{constructor(e,t,n,r){super(),this.id=e,this.title=t,this.subtitle=n,this.status=r}}class GV extends hV{constructor(e,t,n,r){super(),this.adamId=e,this.platformId=t,this.isArcade=n,this.records=r}}class jV extends hV{constructor(e,t){super(),this.playerId=e,this.timestamp=t}}class VV extends hV{constructor(e,t,n){super(),this.videoUrl=e,this.preview=t,this.allowsAutoPlay=n.allowsAutoPlay,this.looping=n.looping,this.canPlayFullScreen=n.canPlayFullScreen,this.showPlaybackControls=n.showPlaybackControls,this.playbackControls={...n.playbackControls},this.autoPlayPlaybackControls={...n.autoPlayPlaybackControls},this.templateMediaEvent=null}}class HV{constructor(e,t,n,r){this.fileSizeByDevice=e,this.maxDownloadSizeInBytes=t,this.maxInstallSizeInBytes=n,this.maxEssentialInstallSizeInBytes=r}}class WV extends hV{constructor(e,t,n){super(),this.badge=e,this.title=t,this.subtitle=n}}const qV={top:0,left:0,bottom:0,right:0}
!function(e){e.Mini="mini",e.ExtraWide="extraWide",e.None="none"}(Sg||(Sg={})),function(e){e.TopRight="topRight",e.TopLeft="topLeft",e.MiddleLeft="middleLeft"}(Pg||(Pg={})),function(e){e.SquareByWidth="squareByWidth",e.SquareByHeight="squareByHeight",e.FreeForm="freeForm"}(Ig||(Ig={}))
class zV{constructor(e,t,n,r,o){this.width=e,this.height=t,this.asRatioOfSize=null!=n&&n,this.location=r,this.constraint=o}}zV.defaultTileArtworkSafeArea={width:.4,height:.4,asRatioOfSize:!0,constraint:Ig.SquareByWidth,location:{relativeLocation:Pg.TopRight}},zV.defaultPillArtworkSafeArea={width:.28,height:1,asRatioOfSize:!0,constraint:Ig.FreeForm,location:{relativeLocation:Pg.MiddleLeft}},zV.defaultTileTextSafeArea={width:.15,height:0,asRatioOfSize:!0},zV.defaultPillTextSafeArea={width:.28,height:0,asRatioOfSize:!0}
const YV="com.apple.AppStore",JV="com.apple.AppStore.BridgeStoreExtension",KV="com.apple.MobileSMS",ZV="com.apple.Arcade",QV="com.apple.TVAppStore",XV="com.apple.AppStore.ProductPageExtension"
class eH extends dV{get buildType(){return this.implementation.buildType}get deviceType(){return this.implementation.deviceType}get guid(){return this.implementation.guid}get isActivityAvailable(){return this.implementation.isActivityAvailable}get isElectrocardiogramInstallationAllowed(){return this.implementation.isElectrocardiogramInstallationAllowed}get isScandiumInstallationAllowed(){return this.implementation.isScandiumInstallationAllowed}get isSidepackingEnabled(){return this.implementation.isSidepackingEnabled}get isTinkerWatch(){return this.implementation.isTinkerWatch}get newPaymentMethodEnabled(){return this.implementation.newPaymentMethodEnabled}get screenCornerRadius(){return this.implementation.screenCornerRadius}get screenSize(){return SV.fromNativeSize(this.implementation.screenSize)}get storefrontIdentifier(){return this.implementation.storefrontIdentifier}get supportsHEIF(){return this.implementation.supportsHEIF}get thinnedApplicationVariantIdentifier(){return this.implementation.thinnedApplicationVariantIdentifier}get isMandrakeSupported(){return this.implementation.isMandrakeSupported}get isCharonSupported(){return this.implementation.isCharonSupported}get hostBundleId(){return this.implementation.hostBundleId}isPairedSystemVersionAtLeast(e){var t,n,r
return null!==(r=null===(n=(t=this.implementation).isPairedSystemVersionAtLeast)||void 0===n?void 0:n.call(t,e))&&void 0!==r&&r}deletableSystemAppCanBeInstalledOnWatchWithBundleID(e){return this.implementation.deletableSystemAppCanBeInstalledOnWatchWithBundleID(e)}deviceHasCapabilities(e){return this.implementation.deviceHasCapabilities(e)}deviceHasCapabilitiesIncludingCompatibilityCheckIsVisionOSCompatibleIOSApp(e,t){return(!this.isPad||!e.includes("healthkit"))&&(!this.isVision||!e.includes("iphone-performance-gaming-tier")&&!e.includes("apple-graphics-performance-tier"))&&this.implementation.deviceHasCapabilitiesIncludingCompatibilityCheckIsVisionOSCompatibleIOSApp(e,t)}isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(e,t,n){return this.implementation.isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(e,t,n)}canDevicePerformAppActionWithAppCapabilities(e,t){return this.implementation.canDevicePerformAppActionWithAppCapabilities(e,t)}isAutomaticDownloadingEnabled(){return this.implementation.isAutomaticDownloadingEnabled()}isAuthorizedForUserNotifications(){return this.implementation.isAuthorizedForUserNotifications()}isActivePairedWatchSystemVersionBelow(e){const t=e.split("."),n=f(t[0])||0,r=f(t[1])||0,o=f(t[2])||0
return!this.implementation.isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(n,r,o)}get isPhone(){return this.deviceType===Lj}get isPad(){return this.deviceType===Oj}get isiOS(){return this.isPhone||this.isPad}get isMac(){return this.deviceType===Mj}get isTV(){return"tv"===this.deviceType}get isWatch(){return this.deviceType===Fj}get isVision(){return this.deviceType===wj}get isCompanionVisionApp(){return this.hostBundleId===VI}get remoteDownloadIdentifiers(){return this.implementation.remoteDownloadIdentifiers}}eH.type=(0,vg.makeMetatype)("app-store:client-wrapper")
class tH extends dV{async orderedVisibleIAPs(e,t,n,r){return await new Promise((o,i)=>{const s=t.filter(e=>null!=e),a=n.filter(e=>null!=e)
this.implementation.orderedVisibleIAPs(e,s,a,r,(e,t)=>{t?i(t):o(e)})})}async visibilityForIAPs(e){return await new Promise((t,n)=>{this.implementation.visibilityForIAPs(e,(e,n)=>{t(n?{}:e)})})}}tH.type=(0,vg.makeMetatype)("app-store:client-ordering-wrapper")
class nH extends dV{info(...e){return this.implementation.info(...e)}error(...e){return this.implementation.error(...e)}log(...e){return this.implementation.log(...e)}warn(...e){return this.implementation.warn(...e)}}nH.type=(0,vg.makeMetatype)("app-store:console-wrapper")
class rH extends dV{get clientIdentifier(){return this.implementation.clientIdentifier}get clientVersion(){return this.implementation.clientVersion}get deviceLocalizedModel(){return this.implementation.deviceLocalizedModel}get deviceModel(){return this.implementation.deviceModel}get deviceModelFamily(){return this.implementation.deviceModelFamily}get devicePhysicalModel(){return this.implementation.devicePhysicalModel}get deviceMarketingFamilyName(){return this.implementation.deviceMarketingFamilyName}get osBuild(){return this.implementation.osBuild}get platform(){return this.implementation.platform}isOSAtLeast(e,t,n){return this.implementation.isOSAtLeast(e,t,n)}get isiOS(){return this.platform===bU}get isMac(){return this.platform===hU}get isTV(){return this.platform===kN}get isWatch(){return this.platform===B_}get isWeb(){return"web"===this.platform}get isWindows(){return"Windows"===this.platform}get isVision(){return this.platform===U_}}rH.type=(0,vg.makeMetatype)("app-store:host-wrapper")
class oH{constructor(){this.locData={},this.language="en"}updateLocalizationData(e,t){this.locData=e,this.language=t}localize(e,t){let n=this.locData[e]
return void 0!==n&&typeof n===fj||(n=e),t&&(n=this.replaceTokens(n,t)),n=this.replaceMarkupTokens(n,t),n}localizeWithCount(e,t,n,r){let o,i,s=null
return 0===n&&(o=`${t}.zero`,this.isLocalized(e,o)&&(s=o)),null===s&&(s=t,i=this.pluralCategory(e,n),i!==OB&&(o=`${t}.${i}`,this.isLocalized(e,o)&&(s=o))),r||(r={}),void 0===r.count&&(r.count=this.formatNumber(n.toString())),void 0===r.number&&(r.number=this.formatNumber(n.toString())),this.localize(null!=s?s:t,r)}replaceTokens(e,t){return Object.entries(t).forEach(([t,n])=>{const r="@@"+t+"@@"
e=this.replaceSubstring(e,r,n)}),e}replaceMarkupTokens(e,t){if(e.indexOf("##")<=-1)return e
let n
return t?(n={...oH.MARKUP_PARAMS},Object.entries(t).forEach(([e,t])=>{n[e]=t})):n=oH.MARKUP_PARAMS,Object.entries(n).forEach(([t,n])=>{const r="##"+t+"##"
e=e.replace(new RegExp(r,"gi"),n)}),e=e.replace(/##([^##]+)##/gi,"<$1>")}replaceSubstring(e,t,n){return e.split(t).join(n)}formatNumber(e){let t=this.locData._decimalSeparator
void 0!==t&&typeof t===fj||(t=".")
let n=this.locData._thousandsSeparator
void 0!==n&&typeof n===fj||(n=".")
const r=parseFloat(e).toString().split("."),o=r[0].split("")
for(let e=o.length-3;e>0;e-=3)o.splice(e,0,n)
return r[0]=o.join(""),r.join(t)}isLocalized(e,t){const n=this.locData[t]
return void 0!==n&&typeof n===fj&&(-1===t.indexOf(".")||n!==t&&(0!==n.indexOf("**")||n.lastIndexOf("**")!==n.length-2)||(e.console.error("Unlocalized key in keys dictionary",t),!1))}pluralCategory(e,t){const n=oH.pluralCategoryFnByLanguage[this.language]
return void 0!==n?n(t):(e.console.warn("Missing plural category function for: "+this.language),OB)}}oH.MARKUP_PARAMS={nbsp:"&nbsp;",gt:"&gt;",lt:"&lt;",copy:"\xa9"},oH.pluralCategoryDefault=function(e){return OB},oH.pluralCategoryOne=function(e){return 1===e?nN:OB},oH.pluralCategoryArabic=function(e){const t=e>>0
if(t!==e)return OB
if(0===t)return"zero"
if(1===t)return nN
if(2===t)return"two"
const n=t%100
return n>=11?nM:n>=3?h$:OB},oH.pluralCategoryFrench=function(e){return e<2&&e>=0?nN:OB},oH.pluralCategoryHebrew=function(e){const t=e>>0
return t!==e?OB:1===t?nN:2===t?"two":0==t%10&&t>10?nM:OB},oH.pluralCategoryPolish=function(e){const t=e>>0
if(t!==e)return OB
if(1===t)return nN
const n=t%10
if(n<=4&&n>=2){const e=t%100
if(e>14||e<12)return h$}return nM},oH.pluralCategoryRomanian=function(e){const t=e>>0
if(t!==e)return h$
if(0===t)return h$
if(1===t)return nN
const n=e%100
return n<=19&&n>=1?h$:OB},oH.pluralCategoryRussian=function(e){const t=e>>0
if(t!==e)return OB
const n=t%10
if(n>=5||0===n)return nM
const r=t%100
return r<=14&&r>=11?nM:1===n?nN:h$},oH.pluralCategoryFnByLanguage={zh:oH.pluralCategoryDefault,id:oH.pluralCategoryDefault,ja:oH.pluralCategoryDefault,ko:oH.pluralCategoryDefault,ms:oH.pluralCategoryDefault,th:oH.pluralCategoryDefault,vi:oH.pluralCategoryDefault,en:oH.pluralCategoryOne,ca:oH.pluralCategoryOne,da:oH.pluralCategoryOne,nl:oH.pluralCategoryOne,de:oH.pluralCategoryOne,el:oH.pluralCategoryOne,fi:oH.pluralCategoryOne,hu:oH.pluralCategoryOne,it:oH.pluralCategoryOne,nb:oH.pluralCategoryOne,no:oH.pluralCategoryOne,pt:oH.pluralCategoryOne,es:oH.pluralCategoryOne,sv:oH.pluralCategoryOne,tr:oH.pluralCategoryOne,ar:oH.pluralCategoryArabic,fr:oH.pluralCategoryFrench,iw:oH.pluralCategoryHebrew,pl:oH.pluralCategoryPolish,ro:oH.pluralCategoryRomanian,ru:oH.pluralCategoryRussian}
class iH extends dV{constructor(e,t){super(e),this.locFile=null,this.ampLoc=new oH,this.LOC_STRING_CACHE={},this.objectGraph=t}get identifier(){return this.implementation.identifier}get safeIdentifier(){return this.implementation.identifier.split("_")[0]}string(e,t){return this.implementation.string(e)}tryString(e){const t=this.implementation.string(e)
if(t===e||t===`**${e}**`)throw yg.context("tryString",()=>{yg.unexpectedType(uF,"Localization key",e,null)}),new Error(`No value exists for localization key '${e}'`)
return t}stringWithFallback(e,t){const n=this.implementation.string(e)
return n===`**AppStore.${e}**`?t:n}stringForPreferredLocale(e,t,n,r){if(o(n))return this.string(t,r)
const i=`${t}_${n}`
let s=this.LOC_STRING_CACHE[i]
if(!s)if(s=this.implementation.stringForPreferredLocale(t,n),s&&s!==t)this.LOC_STRING_CACHE[i]=s
else{const e=this.ampLoc.localize(t)
s=e!==t?e:r||t}return s}stringWithCount(e,t,n){let r=this.implementation.stringWithCount(e,t)
if(!r||r===e){const o=this.ampLoc.localizeWithCount(this.objectGraph,e,t,n)
o&&(r=o)}return r}stringWithCounts(e,t,n){return this.implementation.stringWithCounts(e,t)}uppercased(e){return e?e.toLocaleUpperCase(this.safeIdentifier):null}decimal(e,t){let n=this.implementation.decimal(e,t)
return n||(n=typeof e===dF?`* ${e.toString()} *`:this.nullString()),n}fileSize(e){let t=this.implementation.fileSize(e)
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
return typeof n===fj&&typeof t===fj&&-1!==n.indexOf(t)?"zh-ma":"zh-hk"}return t}nullString(){return"* null *"}load(e){if(void 0===e.bag.language||null===e.bag.language)throw new Error("Bag language is not available. Unable to load localizations.")
const t=this.normalizedLocale(e,e.bag.language,e.client.storefrontIdentifier),n=`local/${t}`
if(!this.isLocFileLoaded(n)){const r=e.props.asDictionary(`localizations.${t}`)
if(null!=r)this.applyLocalizations(n,r,t)
else{const r=e.props.asDictionary("localizations.en-us")
null!=r&&this.applyLocalizations(n,r,t)}}}deviceDisplayName(e){if(e.host.deviceLocalizedModel)return e.host.deviceLocalizedModel
switch(e.client.deviceType){case Lj:const e=this.string(PI)
return e===PI?qI:e
case Oj:const t=this.string(II)
return t===II?Wm:t
case"tv":const n=this.string(CI)
return n===CI?"Apple\xa0TV":n
case Fj:const r=this.string(kI)
return r===kI?"Apple\xa0Watch":r
case Mj:const o=this.string(OI)
return o===OI?cy:o
default:return null}}}iH.type=(0,vg.makeMetatype)("app-store:loc-wrapper")
class sH extends dV{value(e){return n(this.implementation,e)}enabled(e){const t=this.value(e)
return typeof t!==CB?Boolean(t):Boolean(this.implementation.clientFeatures[e])}isNotEnabled(e){return!this.enabled(e)}asDictionary(e){return p(this.implementation,e)}asString(e){return d(this.implementation,e)}asNumber(e){return f(this.implementation,e)}asArray(e){return c(this.implementation,e)}}sH.type=(0,vg.makeMetatype)("app-store:props-wrapper")
class aH extends dV{retrieveString(e){const t=this.implementation.retrieveString(e)
return(null==t?void 0:t.length)>0&&"<null>"!==t?t:null}storeString(e,t){this.implementation.storeString(t,e)}}aH.type=(0,vg.makeMetatype)("app-store:storage-wrapper"),(Tm=Cg||(Cg={})).ArcadeDownloadPackOnboarding="Tf5Kjqz",Tm.CondensedTodayAds="tBc9hUt",Tm.ProductPagePreloading="m0henFo",Tm.ProductPageVariants="fNPb5Km",Tm.ProductPageYMALRowCount="isj11bm",Tm.SearchLandingPage="WqjkRLH"
class cH{constructor(){this.cachedTreatments={},this.cachedRawTreatments={}}async loadTreatments(e){const t=this.experimentAreasForPlatform(e)
if(t.length>0)try{this.cachedRawTreatments=await e.treatmentStore.treatmentsForAreas(t)
for(const[e,t]of Object.entries(this.cachedRawTreatments)){const n=t.identifier
this.cachedTreatments[e]={...t,identifier:n.split(":")[0]}}}catch(t){e.console.error("Failed to load treatments",t)}}currentTreatmentForExperiment(e){return this.cachedTreatments[e]}createAb2Data(){const e=[]
for(const[t,n]of Object.entries(this.cachedRawTreatments))e.push({areaId:t,bucket:-2,treatmentId:n.identifier})
return e}experimentAreasForPlatform(e){const t=[]
switch(e.client.deviceType){case Lj:case Oj:t.push(Cg.ArcadeDownloadPackOnboarding,Cg.CondensedTodayAds,Cg.ProductPagePreloading,Cg.ProductPageVariants,Cg.ProductPageYMALRowCount,Cg.SearchLandingPage)}return t}}cH.metatype=(0,vg.makeMetatype)("app-store:experimentCache"),function(e){e.client="clientId",e.user="userId"}(kg||(kg={})),function(e){e.client="APPSTORE_ENGAGEMENT_CLIENT",e.user="APPSTORE_ENGAGEMENT"}(Og||(Og={})),function(e){e.client="APPSTORE_PAYMENTS_ENGAGEMENT_CLIENT",e.user="APPSTORE_PAYMENTS_ENGAGEMENT"}(Eg||(Eg={})),function(e){e.user="APPSTORE_PERSONALIZATION"}(Rg||(Rg={}))
const lH={[kg.client]:{keyType:kg.client,bagNamespace:Eg.client,crossSyncDevice:!1},[kg.user]:{keyType:kg.user,bagNamespace:Eg.user,crossSyncDevice:!0}},uH={[kg.client]:{keyType:kg.client,bagNamespace:Og.client,crossSyncDevice:!1},[kg.user]:{keyType:kg.user,bagNamespace:Og.user,crossSyncDevice:!0}},dH={[kg.user]:{keyType:kg.user,bagNamespace:Rg.user,crossSyncDevice:!0}}
class fH{constructor(e=uH){this.cachedMetricsIds={},this.cachedMetricsFields={},this.shouldAddDsIdFallbackField=!1,this.userDsId=null,this.identifierContextMapping=e}async loadValues(e,t){e.bag.isMetricsUserIdFallbackEnabled&&!e.user.isUnderThirteen?(this.shouldAddDsIdFallbackField=!0,this.userDsId=e.user.dsid):(this.shouldAddDsIdFallbackField=!1,this.userDsId=null)
const n=[]
for(const r of t){const t=await this.loadValuesForIdType(e,r)
n.push(t)}for(const{idType:e,id:t,fields:r}of n)t&&(this.cachedMetricsIds[e]=t),r&&(this.cachedMetricsFields[e]=r)}async loadValuesForIdType(e,t){const n={idType:t},r=this.identifierContextMapping[t]
if(r){try{const o=await yg.context("MetricsIdentifiersCache:loadValues:metricsFields",async()=>await e.metricsIdentifiers.getMetricsFieldsForContexts([r]))
if((0,Tg.isSome)(o)){n[_L]=o
const e=o[t];(0,Tg.isSome)(e)&&typeof e===fj&&e.length>0&&(n.id=e)}}catch(n){e.console.error(`Unable to fetch metrics fields for idType ${t}`,n)}if((0,Tg.isNothing)(n.id))try{const t=await yg.context("MetricsIdentifiersCache:loadValues:metricsIdentifier",async()=>await e.metricsIdentifiers.getIdentifierForContext(r));(0,Tg.isSome)(t)&&(n.id=t)}catch(n){e.console.error(`Unable to fetch metrics identifier for idType ${t}`,n)}}return n}getMetricsIdForType(e){return this.cachedMetricsIds[e]}getMetricsFieldsForTypes(e){const t=e.map(e=>{var t
return null!==(t=this.cachedMetricsFields[e])&&void 0!==t?t:{}}),n=Object.assign({},...t)
return this.shouldAddDsIdFallbackField&&-1!==e.indexOf(kg.user)&&this.addDsIdFallbackFieldIfNecessary(n),n}addDsIdFallbackFieldIfNecessary(e){const t=e[kg.user];((0,Tg.isNothing)(t)||typeof t!==fj||0===t.length||t.length===fH.clientGeneratedUserIdLength)&&(0,Tg.isSome)(this.userDsId)&&this.userDsId.length>0&&(e[rO]=this.userDsId)}}fH.defaultMetatype=(0,vg.makeMetatype)("app-store:metricsIdentifiersCache"),fH.paymentMetatype=(0,vg.makeMetatype)("app-store:paymentMetricsIdentifiersCache"),fH.personalizationMetatype=(0,vg.makeMetatype)("app-store:personalizationMetricsIdentifiersCache"),fH.clientGeneratedUserIdLength=24
const pH={bag:mg.bag,dispatcher:(0,vg.makeMetatype)("dispatcher"),host:mg.host,localizer:mg.localizer,network:mg.net,plist:mg.plist,platform:mg.platform,router:(0,vg.makeMetatype)("router"),client:(0,vg.makeMetatype)("client"),debugSettings:(0,vg.makeMetatype)("debugSettings"),nativeIntentDispatcher:(0,vg.makeMetatype)("nativeIntentDispatcher")}
class hH extends wg.ObjectGraph{configureDefaults(e,t,n,r,o,i,s,a,c,l,u,d,f,p,h,w,g,m,v,y,A,T,b,S,P,I,C,k,O,E,R,D,_,L,x){const M=this.addingCryptography(t).addingHost(n).addingNetwork(r).addingPlatform(o).addingPlist(i).addingRandom(s).addingServices(a).addingCookieProvider(c).addingBag(e).addingConsole(l).addingStoreMetrics(u).addingAMSEngagement(d).addingLoc(f).addingAdsLoc(p).addingDevice(h).addingClient(w).addingProperties(g).addingUser(m).addingMetricsIdentifiers(v).addingClientOrdering(y).addingPersonalizationStore(A).addingArcade(T).addingGameCenter(b).addingDeepLinks(S).addingAppleSilicon(P).addingStorage(I).addingAds(C).addingOnDeviceRecommendationsManager(k).addingOnDeviceSearchHistoryManager(O).addingFeatureFlags(E).addingMediaToken(R).addingAppDistribution(D).addingTimeoutManager(_).addingAdsLoc(p).addingTreatmentStore(L).addingUserDefaults(x)
return M.loc.load(M),M}get bag(){return this.required(pV.type)}addingBag(e){return this.addingBagWrapper(new pV(e,this.host)).adding(mg.bag,e)}addingBagWrapper(e){return this.adding(pV.type,e)}get console(){return this.required(nH.type)}addingConsole(e){return this.addingConsoleWrapper(new nH(e))}addingConsoleWrapper(e){return this.adding(nH.type,e)}get cryptography(){return this.required(mg.cryptography)}addingCryptography(e){return this.adding(mg.cryptography,e)}get host(){return this.required(rH.type)}addingHost(e){return this.addingHostWrapper(new rH(e))}addingHostWrapper(e){return this.adding(rH.type,e)}get network(){return this.required(mg.net)}addingNetwork(e){return this.adding(mg.net,e)}get platform(){return this.required(mg.platform)}addingPlatform(e){return this.adding(mg.platform,e)}get plist(){return this.required(mg.plist)}addingPlist(e){return this.adding(mg.plist,e)}get random(){return this.required(mg.random)}addingRandom(e){return this.adding(mg.random,e)}get services(){return this.required(mg.services)}addingServices(e){return this.adding(mg.services,e)}get cookieProvider(){return this.required(mg.cookieProvider)}addingCookieProvider(e){return this.adding(mg.cookieProvider,e)}get fetchTimingMetricsBuilder(){return this.optional(gg.fetchTimingMetricsBuilderType)}addingFetchTimingMetricsBuilder(e){return this.adding(gg.fetchTimingMetricsBuilderType,e)}get storeMetrics(){return this.required(Wj)}addingStoreMetrics(e){return this.adding(Wj,e)}get amsEngagement(){return this.optional(qj)}addingAMSEngagement(e){return this.adding(qj,e)}get loc(){return this.required(iH.type)}addingLoc(e){return this.addingLocWrapper(new iH(e,this))}addingLocWrapper(e){return this.adding(iH.type,e)}get adsLoc(){return this.required(iV)}addingAdsLoc(e){return this.adding(iV,e)}get device(){return this.required(zj)}addingDevice(e){return this.adding(zj,e)}get client(){return this.required(eH.type)}addingClient(e){return this.addingClientWrapper(new eH(e))}addingClientWrapper(e){return this.adding(eH.type,e)}get props(){return this.required(sH.type)}addingProperties(e){return this.addingPropertiesWrapper(new sH(e))}addingPropertiesWrapper(e){return this.adding(sH.type,e)}get user(){return this.required(Yj)}addingUser(e){return this.adding(Yj,e)}get metricsIdentifiers(){return this.required(Jj)}addingMetricsIdentifiers(e){return this.adding(Jj,e)}get clientOrdering(){return this.required(tH.type)}addingClientOrdering(e){return this.addingClientOrderingWrapper(new tH(e))}addingClientOrderingWrapper(e){return this.adding(tH.type,e)}get personalizationStore(){return this.required(Kj)}addingPersonalizationStore(e){return this.adding(Kj,e)}get arcade(){return this.required(Zj)}addingArcade(e){return this.adding(Zj,e)}get gameCenter(){return this.required(Qj)}addingGameCenter(e){return this.adding(Qj,e)}get deepLinks(){return this.required(Xj)}addingDeepLinks(e){return this.adding(Xj,e)}get appleSilicon(){return this.required(fV.type)}addingAppleSilicon(e){return this.addingAppleSiliconWrapper(new fV(e))}addingAppleSiliconWrapper(e){return this.adding(fV.type,e)}get storage(){return this.required(aH.type)}addingStorage(e){return this.addingStorageWrapper(new aH(e))}addingStorageWrapper(e){return this.adding(aH.type,e)}get ads(){return this.required(eV)}addingAds(e){return this.adding(eV,e)}get onDeviceRecommendationsManager(){return this.required(tV)}addingOnDeviceRecommendationsManager(e){return this.adding(tV,e)}get onDeviceSearchHistoryManager(){return this.required(nV)}addingOnDeviceSearchHistoryManager(e){return this.adding(nV,e)}get featureFlags(){return this.required(rV)}addingFeatureFlags(e){return this.adding(rV,e)}get mediaToken(){return this.required(oV)}addingMediaToken(e){return this.adding(oV,e)}get appDistribution(){return this.required(sV)}addingAppDistribution(e){return this.adding(sV,e)}get timeoutManager(){return this.required(aV)}addingTimeoutManager(e){return this.adding(aV,e)}get treatmentStore(){return this.required(cV)}addingTreatmentStore(e){return this.adding(cV,e)}get experimentCache(){return this.optional(cH.metatype)}get metricsIdentifiersCache(){return this.optional(fH.defaultMetatype)}get paymentMetricsIdentifiersCache(){return this.optional(fH.paymentMetatype)}get personalizationMetricsIdentifiersCache(){return this.optional(fH.personalizationMetatype)}get userDefaults(){if(!this.props.isNotEnabled("jsUserDefaults"))return this.required(lV)}addingUserDefaults(e){return this.adding(lV,e)}isAvailable(e){return i(this.optional(e))}get dispatcher(){return this.required(pH.dispatcher)}get nativeIntentDispatcher(){return this.required(pH.nativeIntentDispatcher)}get debugSettings(){return this.required(pH.debugSettings)}get router(){return this.required(pH.router)}get localizer(){return this.required(pH.localizer)}}class wH{static createSharedMetricsReferralContext(e){wH.shared||(wH.shared=new wH(e))}constructor(e){this.currentReferral=null,this.isMetricsReferralContextRequired=!0,this.isEventDetailClickEventOverrideNecessary=!e.host.isOSAtLeast(16,2,0)}get shouldUseJSReferralData(){return this.isMetricsReferralContextRequired&&i(this.currentReferral)}get activeReferralData(){return this.shouldUseJSReferralData&&null!==this.currentReferral&&this.currentReferral.isActive?this.currentReferral.data:null}setReferralDataForProduct(e,t){var n,o,i
if(!this.isMetricsReferralContextRequired||r(t))return
const s=null!==(n=d(t,Tj))&&void 0!==n?n:null,a=null!==(o=d(t,uM))&&void 0!==o?o:null,c=null!==(i=h(t,JU))&&void 0!==i?i:null
this.currentReferral={id:`${e}_${Date.now()}`,data:{extRefApp2:s,extRefUrl2:a,kind:c,refUrl:null},isActive:!1,productPageExtensionInfo:null}}setReferralDataForProductPageExtensionIfNecessary(e){var t,o
if(!this.isMetricsReferralContextRequired)return
const i=d(e,cB),s=d(e,Rx)
if(!gH.isProductPageExtension(e)||!gH.isValidPageEvent(e)||r(i)||r(s))return
const a=null!==(t=d(e,J$))&&void 0!==t?t:null,c=d(e,oO)
let l
switch(c){case ZA:l=m(n(e,QA))
break
case iO:l=m(n(e,XA))
break
default:l={}}const u=null!==(o=d(e,K$))&&void 0!==o?o:null
this.currentReferral={id:`${i}_${Date.now()}`,data:{extRefApp2:s,extRefUrl2:a,refUrl:u,kind:{name:c,context:l}},isActive:!1,productPageExtensionInfo:{productId:i}},this.addReferralContextToMetricsFieldsIfNecessary(e)}beginReferralContextForPageIfNecessary(e){this.isMetricsReferralContextRequired&&gH.isValidPageEvent(e)&&gH.isReferralForEvent(this.currentReferral,e)&&null!==this.currentReferral&&(this.currentReferral.isActive=!0)}endReferralContextIfNecessaryForPageEvent(e){this.isMetricsReferralContextRequired&&gH.isValidPageEvent(e)&&gH.isReferralForEvent(this.currentReferral,e)&&(this.currentReferral=null)}addReferralContextToMetricsFieldsIfNecessary(e){var t
this.isMetricsReferralContextRequired&&(e[wH.referralContextEventField]=null===(t=this.currentReferral)||void 0===t?void 0:t.id)}removeReferralContextInfoFromMetricsEvent(e){this.isMetricsReferralContextRequired&&delete e[wH.referralContextEventField]}addReferralDataToEventIfNecessary(e){if(!r(this.activeReferralData)&&gH.shouldAddReferralDataToEvent(e)&&(!gH.isEventDetailsClickEvent(e)||this.isEventDetailClickEventOverrideNecessary)&&(gH.isEventDetailsClickEvent(e)&&(e[QB]=BL),e[Rx]=this.activeReferralData.extRefApp2,e[J$]=this.activeReferralData.extRefUrl2,s(this.activeReferralData.refUrl)&&(e[K$]=this.activeReferralData.refUrl),null!==this.activeReferralData&&null!==this.activeReferralData.kind))switch(e[oO]=this.activeReferralData.kind.name,e[oO]){case ZA:e[QA]=this.activeReferralData.kind.context
break
case iO:e[XA]=this.activeReferralData.kind.context}}}wH.referralContextEventField="referralContextId"
class gH{static isProductPageExtension(e){return d(e,Tj)===gH.productPageExtensionAppId}static isValidPageEvent(e){const t=d(e,QB)
return!(0,Tg.isNothing)(t)&&gH.validPageEventTypes.has(t)}static isReferralForEvent(e,t){var n
if(r(e))return!1
const o=t[wH.referralContextEventField],s=d(t,cB)
return i(o)?o===e.id:!(!gH.isProductPageExtension(t)||!i(s))&&s===(null===(n=null==e?void 0:e.productPageExtensionInfo)||void 0===n?void 0:n.productId)}static shouldAddReferralDataToEvent(e){return e.eventType!==UF||this.isEventDetailsClickEvent(e)}static isEventDetailsClickEvent(e){if(e.eventType!==UF)return!1
const t=e.location,n=null==t?void 0:t[0]
return i(n)&&n.locationType===BL}}gH.productPageExtensionAppId="com.apple.AppStore.ProductPageExtension",gH.eventDetailsPageType=BL,gH.validPageEventTypes=new Set([lB,sO,gH.eventDetailsPageType])
const mH=(Dg=e(447)).PageInvocationPoint
mH[ej]=ej,mH[FI]=FI,mH[ZU]=ZU,mH[_R]=_R
const vH="xp_ase_appstore_ue"
class yH{constructor(e,t,n,r,o=!1){this.fields=e,this.includingFields=t,this.excludingFields=n,this.topic=r,this.shouldFlush=o}}class AH extends hV{constructor(e){super(),this.fields=e}}class TH extends hV{constructor(e){super(),this.data=e||[],this.custom={}}addMetricsData(e){this.data.push(e)}addManyMetricsData(e){for(const t of e)this.addMetricsData(t)}clearAll(){this.data.length=0}}class bH extends hV{constructor(){super(),this.instructions=[],this.custom={}}addInstruction(e){this.instructions.push(e)}addManyInstructions(e){for(const t of e)this.addInstruction(t)}addData(e,t){const n={data:e,invocationPoints:t}
this.instructions.push(n)}addManyData(e,t){for(const n of e)this.addData(n,t)}}class SH{constructor(e,t,n){this.fields=e,this.id=t,this.custom=n}}class PH extends SH{constructor(e,t){super(e.fields,e.id,e.custom||{}),void 0!==this.custom&&(this.custom.isFast=t),this.isFast=t}}class IH extends wV{constructor(e){super(),this.title=null,this.artwork=null,this.presentationStyle=[],this.actionClass=e,this.$kind=e,this.actionMetrics=new TH}}class CH extends IH{constructor(e){super(Dm),this.navigationTab=e,this.actions=[],this.popToRoot=!1}}class kH extends IH{constructor(e,t){super("TabBadgeAction"),this.navigationTab=e,this.text=t}}class OH extends IH{constructor(e,t=!0){super("ExternalUrlAction"),this.url=e,this.isSensitive=t}}class EH extends IH{constructor(e){super("CompoundAction")
const t=[]
for(const n of e)this.actionMetrics.addManyMetricsData(n.actionMetrics.data),Object.assign(this.actionMetrics.custom,n.actionMetrics.custom),n.actionMetrics.clearAll(),t.push(n)
this.actions=t}}class RH extends IH{constructor(e,t,n,r){super("OfferAction"),this.title=e,this.adamId=t,this.parentAdamId=r,this.purchaseConfiguration=n,n&&(this.bundleId=n.bundleId,this.lineItem=n.lineItem),this.includeBetaApps=!1}}class DH extends IH{constructor(e,t){super("OfferConfirmationAction"),this.buyAction=e,this.confirmationInitiationAction=t}}class _H extends IH{constructor(){super("OfferAlertAction"),this.title=null,this.message=null,this.footerMessage=null,this.isCancelable=!0,this.shouldCheckForAvailableDiskSpace=!1,this.checkRestrictionsForContentRating=null,this.remoteControllerRequirement=cN,this.shouldCheckForGameController=!1,this.shouldIncludeActiveAccountInFooterMessage=!1,this.shouldPromptForConfirmation=!1,this.completionAction=null}}class LH extends IH{constructor(e,t){super("CancelPreorderAction"),this.preorderAdamId=e,this.isArcade=t}}class xH extends IH{constructor(e,t,n,r,o){super("InAppPurchaseAction"),this.productIdentifier=e,this.appAdamId=t,this.appBundleId=n,this.installRequiredAction=r,this.minimumShortVersionSupportingInAppPurchaseFlow=o}}class MH extends IH{constructor(e,t){super("OfferStateAction"),this.title=t.title,this.adamId=e,this.defaultAction=t,this.includeBetaApps=!1}}class $H extends IH{constructor(e,t=Tj){super("OpenAppAction"),this.adamId=e,this.destination=t}}class FH extends IH{constructor(e){super("ArcadePackOfferAction"),this.offerActions=e}}class NH extends IH{constructor(e){super("SelectAppAction"),this.adamId=e}}class BH extends IH{constructor(e){super("HttpAction"),this.url=e,this.method=v$,this.headers={},this.body=null,this.isStoreRequest=!1,this.needsAuthentication=!1,this.needsMediaToken=!1,this.retryCount=0,this.disableCache=!1,this.successAction=null,this.failureAction=null}}class UH{constructor(e,t,n,r){this.key=e,this.target=t,this.inputType=n,this.title=r,this.isRequired=!0,this.maximumLength=null}}class GH extends IH{constructor(e){super("HttpTemplateAction"),this.message=null,this.url=e,this.method=v$,this.headers={},this.body=null,this.bodyDictionary={},this.parameters=[],this.isStoreRequest=!1,this.needsAuthentication=!1,this.needsMediaToken=!1,this.retryCount=0,this.disableCache=!1,this.successAction=null,this.failureAction=null}}class jH extends GH{}class VH extends IH{constructor(e,t){super("WriteReviewAction"),this.adamId=e,this.url=t}}class HH extends IH{constructor(e,t,n){super(null!=n?n:"PageTabChangeAction"),this.selectedTabId=e,this.title=t}}class WH extends IH{constructor(){super("GameCenterDashboardAction")}}class qH extends IH{constructor(e){super("SheetAction"),this.actions=e,this.isCancelable=!1,this.cancelTitle=null,this.message=null,this.style=cj,this.isCustom=!1,this.destructiveActionIndex=null}}class zH extends IH{constructor(e){super("AlertAction"),this.style=e,this.title=null,this.message=null,this.isCancelable=!1,this.cancelTitle=null,this.cancelAction=null,this.buttonActions=[],this.buttonTitles=[],this.destructiveActionIndex=null,this.imageName=null}}class YH extends wV{constructor(e,t){super(),this.activityType=e,this.action=t}}class JH extends IH{constructor(e,t,n=_m){super("ShareSheetAction"),this.data=e,this.activities=t,this.shareSheetStyle=n}}class KH extends IH{constructor(e){super("ReportConcernAction"),this.reasons=e}}class ZH extends IH{constructor(e,t,n,r){super("ReviewSummaryReportConcernAction"),this.concerns=e,this.title=t,this.explanation=n,this.sendAction=r}}class QH extends IH{constructor(e,t){super("ProductPageScrollAction"),this.section=e,this.clicksOnScroll=t}}class XH extends IH{constructor(e,t,n,r){super("ArcadeAction"),this.productIdentifier=e,this.appAdamId=t,this.postSubscribeAction=r,this.subscriptionToken=n}}class eW extends IH{constructor(e,t,n){super("FamilyCircleAction"),this.clientName=e,this.eventType=t,this.additionalParameters=n}}class tW extends IH{constructor(){super("BlankAction")}}class nW extends IH{constructor(e){super("SearchAdAction"),this.action=e}}class rW extends IH{constructor(e,t){super("RateLimitedAction"),this.actionKey=e,this.primaryAction=t}}class oW extends IH{constructor(e,t,n,r){super("ArcadeSubscriptionStateAction"),this.notSubscribedAction=e,this.purchasingAction=t,this.subscribedAction=n,this.unknownAction=r}}class iW extends IH{constructor(e){super("GameCenterPlayerProfileAction"),this.playerId=e}}class sW extends IH{constructor(e){super("GameCenterAchievementsAction"),this.bundleId=e}}class aW extends IH{constructor(e){super(Lm),this.contactId=e}}class cW extends IH{constructor(e){super(Lm),this.invitationType=e}}class lW extends IH{constructor(e){super("GameCenterDenylistPlayerAction"),this.contactId=e}}class uW extends IH{constructor(e,t){super("EngagementToggleAction"),this.identifier=e,this.value=t}}class dW extends IH{constructor(e,t,n,r,o,i){super("ShelfBasedPageScrollAction"),this.shelfId=e,this.notPurchasedShelfId=t,this.purchasedShelfId=n,this.adamId=r,this.index=o,this.clicksOnScroll=i}}class fW extends IH{constructor(){super("InvalidateAllWidgetsAction")}}class pW extends IH{constructor(e,t,n){super("AppLaunchTrampolineAction"),this.bundleId=e,this.payloadUrl=t,this.fallbackAction=n}}class hW extends IH{constructor(e,t,n,r,o,i,s,a,c){super("CreateCalendarEventAction"),this.startDate=e,this.endDate=t,this.isAllDay=n,this.name=r,this.location=o,this.notes=i,this.url=s,this.notAuthorizedAction=a,this.availability=c}}class wW extends IH{constructor(e){super("CopyTextAction"),this.text=e}}class gW extends IH{constructor(){super("ClearAppUsageDataAction")}}class mW extends IH{constructor(){super("ClearSearchHistoryAction")}}class vW extends IH{constructor(e){super("AdInteractionAction"),this.adActionMetrics=e}}class yW extends IH{constructor(e){super("CrossfireReferralAction"),this.referrerData=e}}const AW="x-as3-internal",TW=gR,bW="itms-apps",SW="appstore-ui",PW=Hj,IW="WebObjects/MZStore.woa/wa",CW=WP,kW=D_,OW="viewGrouping",EW="viewSoftware",RW=bF,DW="arcadeSeeAllGamesLoadMore",_W=fG,LW=BR,xW="viewRoom",MW=EM,$W=Tj,FW=dk,NW=qP,BW=dG,UW=yj,GW=lN,jW=iN,VW=Jv,HW="todayCardPreview",WW=vx,qW=iG,zW=tx,YW=Ex,JW=cF,KW="apps-for-you",ZW="searchLandingPage",QW=qO,XW=UP,eq="onDeviceRecommendations",tq="editorialPage",nq="storepreview.apple.com",rq=VU,oq=kP,iq=bF,sq="familyCircle",aq="spamBlockingExtensions",cq=Oy,lq="launchApp",uq="sharePlayApps",dq="buddyOnboarding",fq=new Set([nq,"preview.apps.apple.com"]),pq={id:"id",ids:"ids",productVariantID:c$,countryCode:"cc",featuredContentId:"fcId",fetchData:"fetchData",isTodaySection:"isTodaySection",isTodayFeedPreview:"isTodayFeedPreview",genre:fG,bundleIdentifier:"bundleIdentifier",bundleId:KG,offerName:rB,charts:EM,ages:A$,chart:wG,types:OF,v0:"v0",action:CG,type:tU,context:aO,isArcade:xk,isSubscribed:"isSubscribed",isTrialAvailable:"isTrialAvailable",isTrialEnrolled:"isTrialEnrolled",groupingFeaturedContentId:"groupingFeaturedContentId",editorialPageShelfType:"editorialPageShelfType",nativeGroupingShelfId:"nativeGroupingShelfId",isArcadeSeeAllGamesShelf:"isArcadeSeeAllGamesShelf",isGameCenterActivityFeedShelf:"isGameCenterActivityFeedShelf",isGameCenterPlayerShelf:"isGameCenterPlayerShelf",isGameCenterPlayerRibbonItem:"isGameCenterPlayerRibbonItem",isGameCenterAchievementsShelf:"isGameCenterAchievementsShelf",isGameCenterContinuePlayingShelf:"isGameCenterContinuePlayingShelf",isGameCenterPopularWithYourFriendsShelf:"isGameCenterPopularWithYourFriendsShelf",isGameCenterSuggestedFriendsShelf:"isGameCenterSuggestedFriendsShelf",isGameCenterReengagementShelf:"isGameCenterReengagementShelf",isOnDeviceRecommendationsShelf:"isOnDeviceRecommendationsShelf",isOnDeviceSearchHistoryShelf:"isOnDeviceSearchHistoryShelf",isSearchFocusHeaderShelf:"isSearchFocusHeaderShelf",isArcadeDownloadPackShelfPlaceholder:"isArcadeDownloadPackShelfPlaceholder",onDeviceRecommendationsUseCase:"onDeviceRecommendationsUseCase",onDevicePersonalizationUseCase:Px,isPurchasesApp:"isPurchasesApp",isViewOnly:DC,includeUnlistedApps:"includeUnlistedApps",enabled:py,href:Ex,recoMetrics:"recoMetrics",showingFallbackMedia:"showingFallbackMedia",path:"path",useReleaseId:"useReleaseId",clientIdentifierOverride:GA,subscribePageMessage:TL,editorialItem:iN,askToBuyId:"askToBuyId",appId:"appId",isPPT:"isPPT",sort:zU,grouping:V$,code:y$,includePostSubscribeAttribution:"includePostSubscribeAttribution",campaignToken:"ct",providerToken:"pt",qToken:lI,advertisementId:uI,token:sU,parseContext:"parseContext",privacyTypeId:"privacyTypeId",requestDescriptor:"requestDescriptor",ageRating:"ageRating",controllerSupport:Pv,multiplayerSupport:"multiplayerSupport",comingSoon:iD,binCompatGames:"binCompatGames",gamePreviews:"gamePreviews",offerHints:"offerHints",invalidateWidgetsOnFailure:xv,metrics:TB,appEventId:"eventid",offerItemId:"offerItemId",appEventDeepLink:lC,useCaseShort:"uc",collectionId:"collection-id",seedId:"seed-id",isShelfWithAd:"isShelfWithAd",shelfWithAdPlacementType:"shelfWithAdPlacementType",shelfRefreshType:"refreshType",isPreloading:"isPreloading",name:jj,shelfType:"shelfType",shelfId:"shelfId",onbaordingCardIds:"onboardingCardIds",preview:Zv,todayCardConfig:"todayCardConfig",experimentId:JO,shortEditorialNotes:O$,arcadeSubscriptionStatus:"subscriptionStatus",webBrowser:R_,editorialPageId:"editorialPageId",editorialCardId:"filter[canvas:cardId]",filterRecommendable:"filter[recommendable]"},hq="inAppPurchaseId",wq="productUrl",gq=ZD,mq="minExternalVersionId",vq=$U,yq=zU,Aq="availableAdamIds",Tq=Tj,bq=yj,Sq="productPageSimilarItems",Pq=/^([a-z][a-z0-9.+-]*:)(\/\/)?([\S\s]*)/i,Iq=/([^=?&]+)=?([^&]*)/g,Cq=[gL,aB,iU,tN]
class kq{constructor(e){if(this.query={},!e)return
let t=e
const n=Pq.exec(e)
if(n){let e=n[1]
e&&(e=e.split(":")[0]),this.protocol=e,t=n[3]}let r={remainder:t,result:void 0}
for(const e of Cq){if(!r.remainder)break
switch(e){case gL:r=v(r.remainder,"#",CR),this.hash=r.result
break
case aB:r=v(r.remainder,"?",CR),r.result&&(this.query=kq.queryFromString(r.result))
break
case iU:r=v(r.remainder,"/",CR),r.result&&(this.pathname="/"+r.result)
break
case tN:if(r.remainder){const e=v(r.remainder,"@",dI),t=e.result,n=e.remainder
if(t){const e=t.split(":")
this.username=decodeURIComponent(e[0]),this.password=decodeURIComponent(e[1])}if(n){const e=n.split(":")
this.host=e[0],this.port=e[1]}}break
default:throw new Error("Unhandled case!")}}}set(e,t){if(!t)return this
switch(e===aB&&typeof t===fj&&(t=kq.queryFromString(t)),e){case LB:this.protocol=t
break
case fI:this.username=t
break
case pI:this.password=t
break
case hI:this.port=t
break
case iU:this.pathname=t
break
case aB:this.query=t
break
case gL:this.hash=t
break
default:this[e]=t}return this}get(e){switch(e){case LB:return this.protocol
case fI:return this.username
case pI:return this.password
case hI:return this.port
case iU:return this.pathname
case aB:return this.query
case gL:return this.hash
default:return this[e]}}append(e,t){const n=this.get(e)
let r
if(e===aB)typeof t===fj&&(t=kq.queryFromString(t)),r=typeof n===fj?{existingValue:n,...t}:{...n,...t}
else{let o=n
o||(o="")
let i=o
if(e===iU){const e=o.length
e&&"/"===o[e-1]||(i+="/")}i+=t,r=i}return this.set(e,r)}param(e,t){return e?(this.query||(this.query={}),this.query[e]=t,this):this}removeParam(e){return e&&this.query?(void 0!==this.query[e]&&delete this.query[e],this):this}path(e){return this.append(iU,e)}pathExtension(){var e
if((0,Ag.isNothing)(this.pathname))return null
const t=null===(e=this.pathname.split("/").filter(e=>e.length>0).pop())||void 0===e?void 0:e.split(".")
return void 0===t||t.filter(e=>""!==e).length<2?null:t.pop()}pathComponents(){return this.pathname?this.pathname.split("/").filter(e=>e.length>0):[]}popPathComponent(){if(!this.pathname)return null
const e=this.pathname.slice(this.pathname.lastIndexOf("/")+1)
return 0===e.length?null:(this.pathname=this.pathname.slice(0,this.pathname.lastIndexOf("/")),e)}build(){return this.toString()}toString(){let e=""
return this.protocol&&(e+=this.protocol+"://"),this.username&&(e+=encodeURIComponent(this.username),this.password&&(e+=":"+encodeURIComponent(this.password)),e+="@"),this.host&&(e+=this.host,this.port&&(e+=":"+this.port)),this.pathname&&(e+=this.pathname,e.endsWith("/")&&this.pathname.length>0&&(e=e.slice(0,-1))),this.query&&Object.keys(this.query).length&&(e+="?"+kq.toQueryString(this.query)),this.hash&&(e+="#"+this.hash),e}static queryFromString(e){const t={}
let n=Iq.exec(e)
for(;n;){const r=decodeURIComponent(n[1]),o=decodeURIComponent(n[2])
t[r]=o,n=Iq.exec(e)}return t}static toQueryString(e){let t="",n=!0
for(const r of Object.keys(e)){n||(t+="&"),n=!1,t+=encodeURIComponent(r)
const o=e[r]
o&&o.length&&(t+="="+encodeURIComponent(o))}return t}static from(e){return new kq(e)}static fromComponents(e,t,n,r,o){const i=new kq
return i.protocol=e,i.host=t,i.pathname=n,i.query=r,i.hash=o,i}}const Oq=[TW,bW,"itms-appss","itms-messages","itms-messagess","itms-watch","itms-watchs","macappstore","macappstores","com.apple.tvappstore","com.apple.TVAppStore","com.apple.Arcade"]
class Eq{constructor(e){var t
this.identifier=e.identifier,this._protocol=null==(t=e.protocol)?null:t,this._hostName=e.hostName,e.path?(this._pathComponents=e.path.split("/").filter(e=>e.length>0),this._pathParameterMap=function(e){const t={}
return e.forEach((e,n)=>{b(e)&&(t[e]=n)}),t}(this._pathComponents)):(this._pathComponents=null,this._pathParameterMap=null),this._pathExtension=e.pathExtension,this._query=function(e){const t=[]
if(!e)return t
for(const n of e){const e=n.split("=")
let r=e[0]
const o=-1!==r.indexOf("?")
r=r.replace("?","")
const i=-1!==r.indexOf(wI)
r=r.replace(wI,"")
let s=null
e.length>1&&(s=decodeURIComponent(e[1])),t.push({key:r,value:s,optional:o,caseInsensitive:i})}return t}(e.query),this._hash=e.hash,this._regex=e.regex,e.exclusions?this._exclusions=e.exclusions.map(function(e){return new Eq(e)}):this._exclusions=null}matches(e){var t,n
if(this._regex){if(!this._regex.length)return!1
let t=!1
for(const n of this._regex)if(n.test(e.toString())){t=!0
break}if(!t)return!1}if(this._protocol&&e.protocol!==this._protocol)return!1
if(this._hostName&&e.host!==this._hostName)return!1
if(this._pathComponents){const t=this._pathComponents,n=e.pathComponents()
if(t.length!==n.length)return!1
const r=t.length
for(let e=0;e<r;e++){const r=t[e]
if(!b(r)&&r!==n[e])return!1}}if(this._pathExtension&&e.pathExtension()!==this._pathExtension)return!1
if(this._query)for(const r of this._query){let o
if(r.caseInsensitive)for(const[n,i]of Object.entries(null!==(t=e.query)&&void 0!==t?t:{}))r.key.toLocaleLowerCase()===n.toLocaleLowerCase()&&(o=i)
else o=null===(n=e.query)||void 0===n?void 0:n[r.key]
if(!o&&!r.optional)return!1
if(r.value&&r.value!==o)return!1}if(this._hash&&e.hash!==this._hash)return!1
if(this._exclusions)for(const t of this._exclusions){if(t._exclusions)throw Error("Matching exclusion rules with further exclusion rules may introduce significant code-complexity and/or reduce the ease with which developers are able to reason about your desired goals. Are there any simpler options?")
if(t.matches(e))return!1}return!0}extractParameters(e){var t,n
const r={}
if(null!==this._pathComponents&&null!==this._pathParameterMap){const t=e.pathComponents()
for(const e of Object.keys(this._pathParameterMap)){const n=S(e),o=P(t[this._pathParameterMap[e]],e)
r[n]=decodeURIComponent(o)}}if(this._query)for(const o of this._query)r[o.key]=null!==(n=null===(t=e.query)||void 0===t?void 0:t[o.key])&&void 0!==n?n:void 0
return r}}class Rq{constructor(){this._routeMappings=[]}associate(e,t){const n=[]
for(const t of e)n.push(new Eq(t))
this._routeMappings.push({route:n,object:t})}routedObjectForUrl(e){let t=typeof e===fj?new kq(e):e
t=function(e){let t=typeof e===fj?new kq(e):e
if(!T(t))return t
const n=t.query,r=null==n?void 0:n[gj]
return(!t.host||0===t.host.length)&&null!=r&&(t=new kq(r),(null==n?void 0:n[OO])&&(t=t.append(aB,{dsid:n[OO]})),(null==n?void 0:n[gI])&&(t=t.append(aB,{signatureResumption:n[gI]}))),kq.fromComponents(TW,t.host,t.pathname,t.query,t.hash)}(t),t=function(e){var t,n,r
const o=typeof e===fj?new kq(e):e
if(!T(o))return o
const i=o.build()
let s,a=(0,Ag.isNothing)(o.query)?void 0:y(o.query)
const c={},l=[{key:"MZSearch.woa",action:ej},{key:ej,action:ej},{key:"buyLandingPage",action:lM},{key:"buyCharityGiftWizard",action:Um},{key:"longUrlHandler",action:mI},{key:FR,action:FR}],u={"accessory-lookup":"accessoryLookup","finance-app":iG,viewEula:cF,software:Gj,primaryTerm:ej}
let d=!1
for(const e of Object.keys(c))if(o.host&&-1!==o.host.indexOf(e)){d=!0,s=c[e]
break}let f=!1
for(const e of l){const t=e.key
if(o.pathname&&-1!==o.pathComponents().indexOf(t)){f=!0,s=e.action,void 0!==(null==a?void 0:a[t])&&delete a[t]
break}}for(const e of Object.keys(u)){const r=void 0!==(null===(t=o.query)||void 0===t?void 0:t[e])&&null!==o.query[e],i=(null===(n=o.query)||void 0===n?void 0:n[CG])&&-1!==o.query[CG].indexOf(e)
if(r||i){s=u[e],void 0!==(null==a?void 0:a[e])&&delete a[e]
break}}if(s===iG&&-1!==i.indexOf(vI)&&(s="addToPassbook",void 0!==a&&delete a[vI]),s){const e=null,t=null,n={action:s}
s===cM&&void 0!==a&&(a[y$]||a[yI])?n[y$]=a[y$]||a[yI]:s!==iG&&s!==FR&&s!==mI||!f&&!d||(n[xR]=o.toString())
const i=null===(r=o.query)||void 0===r?void 0:r[HI]
return s===ej&&void 0!==i&&void 0!==a&&(a[HI]=i),a={...a,...n},kq.fromComponents(o.protocol,t,e,a,o.hash)}return o}(t)
for(const e of this._routeMappings)for(const n of e.route)if(n.matches(t))return{normalizedUrl:t,parameters:n.extractParameters(t),object:e.object,matchedRuleIdentifier:n.identifier}
return{normalizedUrl:t,parameters:null,object:null,matchedRuleIdentifier:null}}}class Dq{constructor(e){this._count=e,this._triggers=[]}countDown(){if(0!==this._count&&(this._count--,0===this._count)){for(const e of this._triggers)e()
this._triggers.splice(0)}}then(e){0===this._count?e():this._triggers.push(e)}}class _q extends IH{constructor(e,t){super(DR),this.$kind="flowAction",this.page=e,this.pageUrl=t,this.pageData=null,this.referrerData=void 0,this.presentationContext=rG,this.animationBehavior=rG,this.origin="inapp"}}class Lq extends hV{constructor(e,t,n){super(),this.title=e,this.annotations=t,this.forceExpanded=n}}class xq extends hV{constructor(e,t,n,r,o){super(),this.title=e,this.summary=r,this.items=t,this.items_V2=n,this.shouldAlwaysPresentExpanded=!1,this.linkAction=o}}class Mq extends hV{constructor(e,t,n,r,o=[]){super(),this.text=e,this.heading=t,this.subText=n,this.listText=r,this.headingArtworkItems=o}}class $q extends hV{constructor(e,t={}){super(),this.text=e,this.heading=t.heading,this.headingArtworks=t.headingArtworks,this.listText=t.listText,this.textPairs=t.textPairs}}class Fq extends hV{constructor(e){super(),this.annotationGroups=e}}class Nq extends wV{constructor(e){super(),this.art=e}}class Bq extends hV{constructor(e,t){super(),this.type=e,this.lockup=t}}class Uq extends hV{constructor(e,t,n,r,o,i,s,a,c){super(),this.message=e,this.focusedMessage=t,this.action=n,this.fullProductAction=r,this.leadingArtwork=o,this.leadingArtworkTintColor=i,this.includeBackgroundBorder=s,this.kind=a,this.hideCriteria=c}}class Gq extends hV{constructor(e,t,n,r,o){super(),this.unknownBanner=e,this.buyBanner=t,this.downloadBanner=n,this.updateBanner=r,this.openBanner=o}}class jq extends hV{constructor(e){super(),this.lockup=e}}class Vq extends hV{}class Hq extends hV{constructor(e,t,n,r,o,i){super(),this.items=e,this.mediaPlatform=t,this.allPlatforms=n,this.platformDescription=r,this.allPlatformsDescription=o,this.allPlatformsDescriptionPlacement=i}}class Wq extends hV{constructor(e,t,n,r,o,i,s){super(),this.type=e,this.title=t,this.caption=n,this.captionTrailingArtwork=r,this.linkAction=o,this.artwork=i,this.artworkTintColor=s}}class qq extends hV{constructor(e,t,n){super(),this.paragraph=e,this.developerAction=n,this.developerLinks=t}}class zq extends hV{constructor(e){super(),this.text=e,this.presentationStyle=[],this.clickAction=null}}class Yq extends hV{}class Jq extends wV{isValid(){return!!this.title&&!(!this.icon||!this.icon.isValid())&&super.isValid()}}class Kq extends Jq{constructor(){super(),this.screenshots=[],this.screenshotsDisplayStyle=SL}isValid(){return!(!this.screenshots||!this.screenshots.length)&&super.isValid()}}class Zq extends Jq{constructor(){super(),this.screenshots=[],this.trailers=[],this.overrideLockupPosition=null,this.screenshotsDisplayStyle="control",this.metadataRibbonItems=[],this.showMetadataInformationInLockup=!1}}class Qq extends wV{constructor(e){super(),this.viewType=e,this.moduleType=null,this.labelText=null,this.borderedText=null,this.highlightedText=null,this.starRating=null,this.secondaryViewPlacement=vj,this.artwork=null,this.maxCharacterCount=null,this.truncationLegibilityCharacterCountThreshold=null,this.allowsTruncation=null}}class Xq extends Jq{isValid(){return!(!this.trailers||!this.trailers.isValid())&&!(!this.editorialTagline||0===this.editorialTagline.length)&&super.isValid()}}class ez extends hV{constructor(e,t){super(),e&&(this.videos=e),t&&(this.mediaPlatform=t)}isValid(){return this.videos&&this.videos.length>0&&super.isValid()}}class tz extends Jq{}class nz extends wV{}class rz extends wV{constructor(e,t,n,r,o=!1){super(),this.isDark=!1,this.artwork=e,this.lockup=t,this.caption=n,this.title=r,this.isDark=o}isValid(){return this.lockup.isValid()&&this.artwork.isValid()}}class oz extends hV{constructor(e,t,n){super(),this.text=e,this.style=t,this.mediaType=n,this.wantsCollapsedNewlines=!0}}class iz extends wV{constructor(){super(),this.adamId=null,this.caption=null,this.title=null,this.subtitle=null,this.artwork=null,this.shelfBackground=null,this.clickAction=null,this.decorations=[],this.flowPreviewActionsConfiguration=null,this.appEventFormattedDates=null,this.mediaOverlayStyle=null}isValid(){return!!this.clickAction&&!(!this.artwork||!this.artwork.isValid())&&!(!this.caption||!this.title)&&super.isValid()}}class sz extends wV{constructor(){super(),this.flowPreviewActionsConfiguration=null}}class az extends wV{constructor(e,t){super(),this.title=e,this.clickAction=t,this.artwork=null,this.accessibilityLabel=null}isValid(){var e,t
const n=null!==(t=null===(e=this.artwork)||void 0===e?void 0:e.isValid())&&void 0!==t&&t
return(0,Ag.isSome)(this.clickAction)&&n&&super.isValid()}}class cz extends wV{constructor(){super(),this.artworks=null,this.accessibilityLabel=null,this.shortEditorialDescription=null,this.clickAction=null,this.personalizationStyle=zG,this.shelfBackground=null,this.flowPreviewActionsConfiguration=null,this.editorialDisplayOptions={},this.artworkSafeArea=null,this.textSafeArea=null}isValid(){var e,t,n,r
const o=null!==(t=null===(e=this.artworks)||void 0===e?void 0:e.every((e,t)=>(0,Ag.isSome)(e)&&e.isValid()))&&void 0!==t&&t,i=(null!==(r=null===(n=this.collectionIcons)||void 0===n?void 0:n.length)&&void 0!==r?r:0)>0
return(0,Ag.isSome)(this.clickAction)&&(o||i)&&super.isValid()}}class lz extends wV{constructor(e,t,n,r=!0){super(),this.descriptionText=e,this.summaryText=t,this.clickAction=n,this.linkPresentationEnabled=r}}class uz extends hV{constructor(e,t){super(),this.styledText=e,this.linkedSubstrings=t}}class dz extends hV{constructor(e,t,n,r){super(),this.text=e,this.clickAction=t,this.systemImageName=n,this.adamIdForPurchaseHistoryFilter=r}}class fz extends hV{constructor(e){super(),this.buttons=e}}class pz extends hV{constructor(e,t){super(),this.title=e,this.action=t}}class hz extends wV{constructor(e,t,n=dU,r=null,o=null,i=null){super(),this.artwork=e,this.isFullWidth=t,this.hasRoundedCorners=typeof i===iM?i:!this.isFullWidth,this.ordinal=o,this.caption=r,this.captionMediaType=n}}class wz extends wV{constructor(e,t,n=dU,r=null,o=null,i=null){super(),this.video=e,this.isFullWidth=t,this.hasRoundedCorners=typeof i===iM?i:!this.isFullWidth,this.ordinal=o,this.caption=r,this.captionMediaType=n}}class gz extends hV{constructor(e,t,n,r){super(),this.type=e,this.title=t,this.hasDivider=n,this.action=r}}class mz extends wV{constructor(e,t,n,r){super(),this.text=e,this.credit=t,this.artwork=n,this.isFullWidthArtwork=r||!1}}class vz extends wV{constructor(e,t){super(),this.text=e,this.attribution=t}}class yz extends hV{constructor(e,t,n){super(),this.style=e,this.color=t,this.isFullWidth=n}}class Az extends wV{constructor(e,t,n,r,o){super(),this.badges=e,this.hasTopSeparator=t,this.hasBottomSeparator=n,this.separatorsAreFullWidth=r,this.alignment=o}}class Tz extends wV{constructor(e,t){super(),this.title=e,this.buttonAction=t}}class bz extends hV{constructor(e,t,n,r,o,i){super(),this.badgeType=n,this.badge=n.title,this.title=e,this.description=t,this.callToActionButtonAction=r,this.backgroundStyle=o,this.textAlignment=i}}class Sz extends wV{constructor(e,t,n,r,o,i,s){super(),this.details=e,this.detailsDisplayProperties=t,this.heading=n,this.artwork=r,this.video=o,this.collectionIcons=i,this.backgroundColor=s,this.editorialDisplayOptions={}}}class Pz extends wV{constructor(e,t,n){super(),this.details=e,this.iconArtwork=t,this.backgroundColor=n}}class Iz extends wV{}class Cz extends wV{constructor(e,t){super(),this.unsubscribedAction=e,this.subscribedAction=t}}class kz extends wV{constructor(e,t,n,r,o,i,s,a,c){super(),this.badgeGlyph=e,this.badge=t,this.title=n,this.subtitle=r,this.achievement=o,this.backgroundColor=s,this.backgroundArtwork=a,this.lockup=i,this.heroAction=c}}class Oz extends wV{constructor(e,t,n){super(),this.placement=e,this.context=t,this.deliveryMethod=null!=n?n:"pushAndPull"}}!function(e){e.OnPageLoad="onPageLoad",e.OnShelfWillAppear="onShelfWillAppear"}(_g||(_g={})),function(e){e.ViewAligned="viewAligned",e.CenterAligned="centerAligned"}(Lg||(Lg={}))
class Ez extends wV{constructor(e,t=null,n=null){super(),this.contentType=e,this.marker=t,this.items=n||[],this.header=void 0,this.url=null,this.mergeWhenFetched=!1,this.fetchStrategy=_g.OnPageLoad,this.batchGroup=null,this.seeAllAction=null,this.footerTitle=null,this.footerAction=null,this.eyebrow=null,this.eyebrowArtwork=null,this.title=null,this.titleArtwork=null,this.subtitle=null,this.isHorizontal=!1,this.isHidden=!1,this.rowsPerColumn=null,this.background={type:zG},this.contentsMetadata={type:zG},this.isPersonalized=!1,this.shouldFilterApps=!1}}!function(e){e.TopLeading="topLeading",e.Top="top",e.TopTrailing="topTrailing",e.Trailing="trailing",e.BottomTrailing="bottomTrailing",e.Bottom="bottom",e.BottomLeading="bottomLeading",e.Leading="leading"}(xg||(xg={})),function(e){e.Grid="grid",e.Hero="hero",e.Standard="standard"}(Mg||(Mg={})),function(e){e.Icon="icon",e.Category="category"}($g||($g={}))
class Rz extends wV{constructor(e,t,n,r,o,i,s){super(),this.title=e,this.artwork=t,this.video=n,this.heading=r,this.badge=o,this.description=i,this.clickAction=s,this.shelfBackground=null,this.collectionIcons=null,this.editorialDisplayOptions={}}}class Dz extends Jq{isValid(){const e=this.posterArtwork,t=this.posterVideo
return!(!e&&!t)&&super.isValid()}}class _z extends hV{}class Lz extends hV{constructor(){super(),this.id=random.nextUUID()}}class xz extends hV{constructor(e){super(),this.shelves=e,this.title=null,this.presentationOptions=[],this.isIncomplete=!1,this.pageMetrics=new bH}}class Mz extends hV{constructor(){super(),this.pageMetrics=new bH,this.pageRenderMetrics={}}}class $z extends xz{}class Fz extends xz{}class Nz extends xz{}class Bz extends xz{constructor(e,t=null){super(e),this.sort=sN,this.displayStyles=t,this.pageSegments=[]}}class Uz{constructor(e,t,n,r){this.contentsResourceTypes=new Set,this.ids=new Set,this.idsByResourceType=new Map,this.originalOrdering=[],this.relationshipIncludes=new Set,this.attributeIncludes=new Set,this.platform=null,this.supplementaryMetadataAssociations=[],this.additionalPlatforms=new Set,this.additionalQuery={},this.relationshipLimits={},this.searchTerm=null,this.searchTypes=[],this.context=null,this.useCustomAttributes=!1,this.countryCodeOverride=void 0,this.objectGraph=e,this.platform=I(e),this.isMixedMediaRequest=null!=n&&n,this.supplementaryMetadataAssociations=null!=r?r:[],this.includeAppBinaryTraitsAttribute=!0,o(t)||(typeof t===fj?this.href=t:Array.isArray(t)&&this.withDataItems(t,r,n))}addDataToIDsByResourceType(e){const t=e.type,n=e.id
let r=this.idsByResourceType.get(t);(0,Ag.isNothing)(r)&&(r=new Set),r.add(n),this.idsByResourceType.set(t,r)}forType(e){return this.resourceType=e,this}withDataItems(e,t,n){if(0===e.length)return this
this.isMixedMediaRequest=this.isMixedMediaRequest||null!=n&&n
for(const r of e)if(this.ids.add(r.id),this.addDataToIDsByResourceType(r),(0,Ag.isSome)(n)&&n&&(0,Ag.isSome)(t)&&t.length>0)for(const e of t){const t=D(e,r);(0,Ag.isSome)(t)&&t.length>0&&t.forEach(e=>{this.addDataToIDsByResourceType(e)})}return 1===this.idsByResourceType.size?(this.resourceType=this.idsByResourceType.keys().next().value,this.isMixedMediaRequest=!1):this.idsByResourceType.size>1&&!this.isMixedMediaRequest&&(this.resourceType=Uj,this.contentsResourceTypes=new Set(Array.from(this.idsByResourceType.keys()))),this.originalOrdering.push(...e),this}withIdOfType(e,t){return this.withDataItems([{id:e,type:t}])}withIdsOfType(e,t){return this.withDataItems(e.map(e=>({id:e,type:t})))}includingRelationships(e){for(const t of e)this.relationshipIncludes.add(t)
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
return this}includingKindsKeys(e,t){this.kindIncludes||(this.kindIncludes=new Map)
let n=this.kindIncludes.get(e)
n||(n=new Set)
for(const e of t)n.add(e)
return this.kindIncludes.set(e,n),this}includingAssociateKeys(e,t){this.associateIncludes||(this.associateIncludes=new Map)
let n=this.associateIncludes.get(e)
n||(n=new Set)
for(const e of t)n.add(e)
return this.associateIncludes.set(e,n),this}includingRelationshipsForUpsell(e){const t=mU
if(e){this.scopedRelationshipIncludes||(this.scopedRelationshipIncludes=new Map)
let e=this.scopedRelationshipIncludes.get(kj)
e||(e=new Set),e.add(t),this.scopedRelationshipIncludes.set(kj,e)}else this.relationshipIncludes.add(t)
{this.metaIncludes||(this.metaIncludes=new Map)
let e=this.metaIncludes.get(mU)
e||(e=new Set),e.add(TB),this.metaIncludes.set(mU,e)}return this}includingAttributes(e){for(const t of e)this.attributeIncludes.add(t)
return this}includingScopedAttributes(e,t){this.scopedAttributeIncludes||(this.scopedAttributeIncludes=new Map)
let n=this.scopedAttributeIncludes.get(e)
n||(n=new Set)
for(const e of t)n.add(e)
return this.scopedAttributeIncludes.set(e,n),this}includingAdditionalPlatforms(e){for(const t of e)this.additionalPlatforms.add(t)
return this}includingScopedAvailableIn(e,t){this.scopedAvailableInIncludes||(this.scopedAvailableInIncludes=new Map)
let n=this.scopedAvailableInIncludes.get(e)
n||(n=new Set)
for(const e of t)n.add(e)
return this.scopedAvailableInIncludes.set(e,n),this}includingScopedSparseLimit(e,t){return this.scopedSparseLimit=new Map,this.scopedSparseLimit.set(e,t),this}addingQuery(e,t){return(0,Ag.isSome)(t)?this.additionalQuery[e]=t:delete this.addingQuery[e],this}addingQueryValues(e){return this.additionalQuery={...this.addingQuery,...e},this}addingRelationshipLimit(e,t){return this.relationshipLimits[e]=t,this}withSearchTerm(e){return this.searchTerm=e,this}searchingOverTypes(e){for(const t of e)this.searchTypes.push(t)
return this}addingContext(e){return this.context=e,this}includingMacOSCompatibleIOSAppsWhenSupported(e=!1){return this.objectGraph.appleSilicon.isSupportEnabled&&(e||this.enablingFeature(z_),this.includingScopedAttributes(Gj,[xA])),this}includingAppBinaryTraitsAttribute(e=!0){return this.includeAppBinaryTraitsAttribute=e,this}usingCustomAttributes(e){return this.useCustomAttributes=e,this}alwaysUseIdsAsQueryParam(e){return this.useIdsAsQueryParam=e,this}attributingTo(e){return this.canonicalUrl=e,this}withFilter(e,t){return this.filterType=e,this.filterValue=t,this}withLimit(e){return this.limit=e,this}withSparseLimit(e){return null!==e&&(this.sparseLimit=e),this}withSparseCount(e){return null!==e&&(this.sparseCount=e),this}enablingFeature(e){return this.enabledFeatures||(this.enabledFeatures=[]),this.enabledFeatures.push(e),this}enablingFeatures(e){return this.enabledFeatures||(this.enabledFeatures=[]),this.enabledFeatures.push(...e),this}asPartialResponseLimitedToFields(e){return this.fields=e,this}includesResourceType(e){return this.resourceType===e||!!i(this.contentsResourceTypes)&&this.contentsResourceTypes.has(e)}withCountryCodeOverride(e){return this.countryCodeOverride=e,this}}const Gz=new RegExp("#?([0-9,a-f,A-F][0-9,a-f,A-F])([0-9,a-f,A-F][0-9,a-f,A-F])([0-9,a-f,A-F][0-9,a-f,A-F])([0-9,a-f,A-F][0-9,a-f,A-F])?"),jz=N(0,0,0),Vz=N(1,1,1)
!function(e){e.insertIntoShelf="insertIntoShelf",e.replaceOrganic="replaceOrganic",e.dropAd="dropAd"}(Fg||(Fg={}))
class Hz extends wV{constructor(e){super(),this.kind=e}bestBackgroundColor(){}}class Wz extends Hz{constructor(e,t,n,r,o){super(e),this.artworks=t,this.videos=n,this.artworkLayouts=r,this.artworkLayoutsWithMetrics=o}bestBackgroundColor(){var e,t,n
return null!==(t=null===(e=this.videos[0])||void 0===e?void 0:e.preview.backgroundColor)&&void 0!==t?t:null===(n=this.artworks[0])||void 0===n?void 0:n.backgroundColor}}class qz extends Wz{constructor(e,t){super(aN,e,t,[],[])}isValid(){const e=this.artworks.every(e=>e.isValid())&&this.artworks.length>0,t=this.videos.every(e=>e.isValid())&&this.videos.length>0
return(e||t)&&super.isValid()}}class zz extends Wz{constructor(e,t,n,r,o){super(_j,e,t,n,r),this.titleBackingGradient=o}}class Yz extends Hz{constructor(e){super(aM),this.icon=e}bestBackgroundColor(){return this.icon.backgroundColor}}class Jz extends Wz{constructor(e,t,n,r,o,i){super(XN,t,n,r,o),this.icon=e,this.titleBackingGradient=i}bestBackgroundColor(){var e
return null!==(e=super.bestBackgroundColor())&&void 0!==e?e:this.icon.backgroundColor}}class Kz extends Wz{constructor(e,t,n,r,o,i,s){super(MI,t,n,r,o),this.lockups=e,this.marketingText=i,this.isMediaDark=s}}class Zz extends Hz{constructor(e,t){super(PL),this.lockups=e,this.additionalText=t}}class Qz extends Hz{constructor(e){super(rN),this.lockup=e}bestBackgroundColor(){return this.lockup.icon.backgroundColor}}class Xz extends Hz{constructor(e){super($I),this.lockups=e,this.lockupImpressionLimit=10}}class eY extends Wz{constructor(e,t,n,r){super(YG,[],e,t,n),this.description=r}}class tY extends Wz{constructor(e,t,n,r,o,i,s,a){super(w$,r,o,i,s),this.formattedDates=e,this.startDate=t,this.tintColor=n,this.blurStyle=a}}class nY extends Hz{constructor(e){super(IL),this.mediumAdLockupWithScreenshotsBackground=e}}class rY extends Hz{constructor(e){super(CL),this.condensedAdLockupWithIconBackground=e}bestBackgroundColor(){var e
return null===(e=this.condensedAdLockupWithIconBackground)||void 0===e?void 0:e.backgroundArtwork.backgroundColor}}class oY extends hV{constructor(e){super(),this.kind=e}}class iY extends oY{constructor(e){super(XG),this.lockup=e,this.displaysIcon=!0}}class sY extends oY{constructor(e,t,n,r){super("marketingLockup"),this.lockup=e,this.paragraph=t,this.hideBackground=n,this.artworkBackgroundColor=r}}class aY extends oY{constructor(e){super(Rm),this.lockups=e}}class cY extends oY{constructor(e,t){super(wB),this.paragraph=e,this.style=t}}class lY extends oY{constructor(e){super(CG),this.action=e}}class uY extends oY{constructor(e,t,n){super("threeLine"),this.heading=e,this.title=t,this.description=n}}class dY extends oY{constructor(e){super("arcadeLockup"),this.arcadeLockup=e}}class fY extends wV{constructor(){super(),this.heading=void 0,this.title=void 0,this.shortTitle=void 0,this.titleArtwork=void 0,this.media=void 0,this.heroMedia=void 0,this.overlay=void 0,this.style=void 0,this.clickAction=void 0,this.backgroundColor=void 0,this.inlineDescription=void 0,this.collapsedHeading=void 0,this.editorialDisplayOptions=void 0,this.supportsMediaMirroring=void 0}}class pY extends wV{constructor(e){super(),this.cards=e}}class hY extends hV{constructor(e,t,n,r,o,i){super(),this.shelves=e,this.title=n,this.titleDetail=o,this.shortTitleDetail=i,this.tabTitle=r,this.nextPage=null,this.onboardingCardIds=t||[],this.pageMetrics=new bH,this.pageRenderMetrics={}}}const wY={artwork:wL,screenshotsByType:"customScreenshotsByType",promotionalText:"customPromotionalText",videoPreviewsByType:"customVideoPreviewsByType",customScreenshotsByTypeForAd:NL,customVideoPreviewsByTypeForAd:ik,customDeepLink:kx}
class gY extends hV{constructor(e,t,n,r){super(),this.details=e,this.dismissButtonTitle=t,this.offerButtonAction=n,this.offerDisplayProperties=r,this.pageMetrics=new bH,this.pageRenderMetrics={}}}class mY extends hV{constructor(e,t,n){super(),this.headline=e,this.body=t,this.artwork=n}}class vY extends hV{constructor(e,t,n,r,o){super(),this.title=e,this.subtitle=t,this.items=n,this.continueAction=r,this.familyAction=o}}class yY extends hV{constructor(e,t){super(),this.individualContent=e,this.familyMemberContent=t,this.pageMetrics=new bH,this.pageRenderMetrics={}}}class AY extends hV{constructor(e,t,n,r){super(),this.serviceType=e,this.placement=t,this.seed=n,this.clientOptions=r,this.metricsOverlay={topic:vH}}}class TY extends hV{constructor(e){super(),this.clientOptions=e,this.metricsOverlay={topic:vH}}}class bY extends hV{constructor(e,t){super(),this.primaryIcon=e,this.icons=t}}class SY extends hV{constructor(e){super(),this.action=e}}class PY extends wV{constructor(e,t,n,r,o){super(),this.id=e,this.title=t,this.artwork=n,this.gradientStartColor=r,this.gradientEndColor=o,this.selectActionMetrics=new TH,this.deselectActionMetrics=new TH}}class IY extends hV{constructor(e,t,n,r,o,i,s){super(),this.title=e,this.categories=t,this.maxNumberOfCategoriesToChoose=n,this.maxNumberOfCategoriesToChooseTemplate=r,this.numberOfChosenCategoriesTemplate=o,this.primaryAction=i,this.dismissAction=s,this.pageMetrics=new bH,this.pageRenderMetrics={}}}class CY extends hV{constructor(e,t){super(),this.lockup=e,this.categoryId=t}}class kY extends hV{constructor(e,t,n,r,o,i,s){super(),this.title=e,this.suggestions=t,this.getAllAction=n,this.getAllButtonStyle=r,this.primaryAction=o,this.primaryActionKind=i,this.primaryActionSecondaryTitle=s,this.pageMetrics=new bH,this.pageRenderMetrics={}}}class OY{constructor(e,t){this.items=e,this.commonBuyParams=t}}class EY{constructor(e,t){this.purchase=e,this.buyParams=t}}class RY{constructor(e){if(this._values={},(0,Ag.isSome)(e)&&e.length>0){const t=e.split("&")
for(const e of t){const[t,n]=e.split("="),r=decodeURIComponent(t),o=(0,Ag.isNothing)(n)?"":decodeURIComponent(n)
this._values[r]=o}}}_searchKey(e,t){if(0===e.length)throw new Error("key may not be zero length")
return(0,Ag.isNothing)(t)||0===t.length?e:`${t}${e.charAt(0).toUpperCase()}${e.slice(1)}`}get(e,t="mt"){const n=this._searchKey(e,t)
return this._values[n]}set(e,t,n="mt"){const r=this._searchKey(e,n)
return(0,Ag.isNothing)(t)?delete this._values[r]:this._values[r]=t,this}toString(){let e=""
for(const t of Object.keys(this._values)){const n=this._values[t]
e.length>0&&(e+="&"),e+=encodeURIComponent(t),e+="=",e+=encodeURIComponent(n)}return e}toEncodedMap(){const e={}
for(const t of Object.keys(this._values)){const n=this._values[t],r=encodeURIComponent(t),o=encodeURIComponent(n)
e[r]=o}return e}toRawMap(){return{...this._values}}}const DY="jet_adamId",_Y="_jet-internal:derived-data",LY=cj
class xY extends hV{constructor(){super(),this.shelfOrderings={},this.shelfMapping={},this.presentationOptions=[],this.isIncomplete=!1,this.pageMetrics=new bH,this.pageRenderMetrics={}}}class MY extends xY{}class $Y extends wV{constructor(e,t,n,r,o,i,s){super(),this.title=e,this.artwork=t,this.badge=n,this.action=r,this.density=o,this.artworkSafeArea=i,this.textSafeArea=s}}class FY extends wV{constructor(e,t,n,r,o,i){super(),this.lockup=e,this.screenshots=t,this.isAnimated=n,this.secondaryTextColor=r,this.backgroundColor=o,this.riverSpeed=i}}class NY extends wV{constructor(e,t){super(),this.lockup=e,this.backgroundArtwork=t}}class BY{constructor(e,t,n,r,o,i,s=null,a){this.id=e,this.title=t,this.searchLandingItemDisplayStyle=s,this.displayStyle=n,this.displayCount=r,this.hasSeeAll=o,this.seeAllLink=i,this.searchShelfKind=a}}!function(e){e.Suggestion="Query",e.CategoriesAndCharts="EditorialLink",e.Apps="AppsLockup",e.EditorialCollection="EditorialCollection"}(Ng||(Ng={})),function(e){e[e.Default=0]="Default",e[e.CategoriesAndCharts=1]="CategoriesAndCharts"}(Bg||(Bg={})),function(e){e.Density1="density_1",e.Density2="density_2",e.Density3="density_3"}(Ug||(Ug={})),function(e){e.Chiclet="chiclet",e.App="app",e.Symbol="symbol"}(Gg||(Gg={}))
const UY=(e,t)=>e||t
let GY=null
class jY extends hV{constructor(e,t,n,r,o,i,s){super(),this.instanceId=e,this.adamId=t,this.bundleId=n,this.advertType=r,this.invocation=o,this.purchaseType=i,this.reportingDestination=s}}class VY extends hV{constructor(e,t,n,r,o,i,s,a,c,l=rG){super(),this.type=e,this.key=t,this.content=n,this.heading=o,this.caption=i,this.longCaption=s,this.leadingValue=l,this.accessibilityTitle=a,this.accessibilityCaption=c,this.style=r,this.isMonochrome=!0}}class HY extends hV{constructor(e,t){super(),this.type=e,this.shelfId=t}}class WY extends hV{constructor(e,t){super(),this.title=e,this.subtitle=t}}class qY extends Jq{constructor(){super(),this.pageMetrics=new bH,this.pageRenderMetrics={}}}const zY=new Set([Sj,Ij,Rj]),YY=new Set([Aj,AL,FG,QN,xN,jG,pj,HU,oG,oj,EB,hj,LG,hB,fU,xG,WU,KU,RG,WG,NG,yj,qG,RB,MN,oM,DG])
class JY extends hV{constructor(e,t,n,r){super(),this.id=e,this.title=t,this.selectedActionTitle=n,this.url=r}}class KY extends xz{constructor(){super([])}}class ZY extends hV{}class QY extends wV{}class XY extends hV{}class eJ extends hV{constructor(){super(...arguments),this.componentType=Em}}class tJ extends hV{constructor(){super(...arguments),this.componentType="productReviewActions"}}class nJ extends hV{constructor(e){super(),this.showsBadge=!1,this.title=null,this.notes=e,this.isCollapsed=!0}}class rJ extends hV{}class oJ extends hV{}class iJ extends hV{}class sJ extends ZY{constructor(){super(...arguments),this.componentType="starRatings"}}class aJ extends ZY{constructor(){super(...arguments),this.componentType="starRatingsHistogram"}}class cJ extends ZY{constructor(){super(...arguments),this.componentType="noRatings"}}class lJ extends hV{constructor(e){super(),this.componentType=TL,this.messageText=e}}class uJ extends wV{constructor(e,t,n,r,o,i,s){super(),this.body=e,this.bodyNoTitle=t,this.subtitle=n,this.subtitleTrailingArtwork=r,this.subtitleArtwork=r,this.subtitleArtworkAlignment=o,this.bodyMediaType=i,this.flowPreviewActionsConfiguration=s}}class dJ extends wV{constructor(){super(...arguments),this.componentType=bL}}const fJ="notPurchasedOrdering"
class pJ extends xY{constructor(){super(...arguments),this.appPlatforms=[]}}class hJ{static get contentType(){return l_}constructor(){this._params=""}param(e,t){if(e&&t){const n=this._params.length>0?"&":""
this._params+=`${n}${encodeURIComponent(e)}=${encodeURIComponent(t)}`}return this}build(){return this._params}}const wJ="externalDeepLinkUrl",gJ="isCppDeepLinkDisabled",mJ=new class{constructor(){this._app="",this._clientId="",this._pages=[]}get _requestId(){const e=Date.now().toString(36).toUpperCase(),t=Math.floor(1e5*Math.random()).toString(36).toUpperCase()
return this._clientId+"z"+e+"z"+t}get _prevPage(){return this._pages.length>=2?this._pages[this._pages.length-2]:void 0}useApp(e){""!==this._app||r(e)||(this._app=e)}useClientId(e){r(e)||(this._clientId=e)}usePageHistory(e){if(0!==e.length){this._pages.length=0
for(const t of e){const e=d(t)
r(e)||this._pages.push(e)}}}useNativeValues(e){const t=d(e,"nativeApp")
this.useApp(t)
const n=d(e,"nativeClientId")
this.useClientId(n)
const r=c(e,"nativePageHistory")
this.usePageHistory(r)}getPageHistoryFor(e){const t=this._pages.slice()
return this._pages.length>=5&&this._pages.shift(),this._pages.push(e),t}get params(){return{app:this._app,clientId:this._clientId,requestId:this._requestId,prevPage:this._prevPage,eventTime:Date.now()}}}
let vJ=null
const yJ={containerId:"mtContainerId",placementId:"mtIadPlacementId",templateType:"mtIadTemplateType"};(Pm=jg||(jg={})).ArcadeSeeAllGames="editorial-shelves-arcade-see-all-games",Pm.Collection="editorial-shelves-collection",Pm.Chart="editorial-shelves-chart",Pm.Tag="editorial-shelves-tag",Pm.Engagement="editorial-shelves-engagement",Pm.Text="editorial-shelves-text",Pm.Image="editorial-shelves-image",Pm.VideoClip="editorial-shelves-video-clip",Pm.Header="editorial-shelves-header",Pm.Recommendations="editorial-shelves-recommendation",Pm.GameCenter="editorial-shelves-game-center",Pm.Upsell="editorial-shelves-upsell",Pm.Marker="editorial-shelves-marker",(Sm=Vg||(Vg={})).Hero="Hero",Sm.TextOnly="TextOnly",Sm.TextWithArtwork="TextWithArtwork",Sm.BrickSmall="BrickSmall",Sm.BrickMedium="BrickMedium",Sm.BrickLarge="BrickLarge",Sm.Charts="Charts",Sm.EditorialLockupHierarchicalPortrait="EditorialLockupHierarchicalPortrait",Sm.EditorialLockupHierarchicalRows="EditorialLockupHierarchicalRows",Sm.EditorialLockupMedium="EditorialLockupMedium",Sm.EditorialLockupMediumVariant="EditorialLockupMediumVariant",Sm.EditorialLockupLarge="EditorialLockupLarge",Sm.EditorialLockupLargeVariant="EditorialLockupLargeVariant",Sm.LockupMedium="LockupMedium",Sm.Lockup4Up="Lockup4Up",Sm.Poster="Poster",Sm.StorySmall="StorySmall",Sm.StoryMedium="StoryMedium",Sm.LockupSmall="LockupSmall",Sm.LockupLarge="LockupLarge",Sm.BreakoutLarge="BreakoutLarge",function(e){e.QuickLinks="QuickLinks"}(Hg||(Hg={})),(bm=Wg||(Wg={})).Vertical="Vertical",bm.Horizontal="Horizontal",function(e){e.ShowInstalled="ShowInstalled",e.ShowAllPlatforms="ShowAllPlatforms",e.ShowOnlyPreorder="ShowOnlyPreorder"}(qg||(qg={})),function(e){e.AllGames="AllGames",e.ArcadeGames="ArcadeGames"}(zg||(zg={})),function(e){e.FriendsArePlaying="FriendsArePlaying",e.ContinuePlaying="ContinuePlaying"}(Yg||(Yg={})),function(e){e.ArcadeTabHeader="ArcadeTabHeader"}(Jg||(Jg={})),function(e){e.Arcade="Arcade"}(Kg||(Kg={}))
class AJ{constructor(e,t,n){this.locationTracker={rootPosition:0,locationStack:[]},this.parsedCardCount=0,this.currentRowIndex=0,this.pageInformation=e,this.locationTracker=null!=t?t:{rootPosition:0,locationStack:[]},this.refreshController=n}}class TJ extends AJ{constructor(e,t,n,r,o){super(t,n,r),this.pageHasDisplayedContent=!1,this.remainingContent=e,this.adPlacementBehavior=Fg.insertIntoShelf,this.recoImpressionData=o}}!function(e){e.AppEventCard="AppEventCard",e.AppOfTheDay="AppOfTheDay",e.FullBleedImage="FullBleedImage",e.GameOfTheDay="GameOfTheDay",e.Grid="Grid",e.InAppPurchase="InAppPurchase",e.List="List",e.NumberedList="NumberedList",e.River="River",e.ShortImage="ShortImage",e.SingleApp="SingleApp",e.Video="Video"}(Zg||(Zg={})),function(e){e.SmallCard="smallCard",e.MediumCard="mediumCard"}(Qg||(Qg={})),function(e){e.NoArtwork="no-artwork",e.ContentArtworkWithTitle="content-artwork-with-title",e.CategoryArtworkWithTitle="category-artwork-with-title",e.CategoryArtworkWithBadge="category-artwork-with-badge"}(Xg||(Xg={})),function(e){e.AppOfTheDay="app-of-the-day",e.GameOfTheDay="game-of-the-day"}(em||(em={})),function(e){e.Eyebrow="eyebrow",e.Title="title"}(tm||(tm={})),function(e){e.LinearGradient="linear-gradient"}(nm||(nm={})),function(e){e.Inline="inline",e.Article="article"}(rm||(rm={}))
const bJ={collapsedContentMode:bg.bottomLeft,expandedContentMode:bg.bottomLeft,collapsedLayoutInsets:{top:0,left:-8,bottom:0,right:0},expandedLayoutInsets:qV},SJ={collapsedContentMode:bg.bottomLeft,expandedContentMode:bg.bottomLeft,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},PJ={collapsedContentMode:bg.topLeft,expandedContentMode:bg.bottomLeft,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},IJ={maxWidth:250,ltr:bJ,rtl:bJ,collapsedSize:{type:BU,height:1},priority:Sg.Mini},CJ={objectPath:eL,cardArtLayoutMetrics:[IJ,{maxWidth:704,ltr:SJ,rtl:SJ,collapsedSize:{type:BU,height:1.062}},{ltr:PJ,rtl:PJ,collapsedSize:{type:aL,width:1}}],crops:["sr"],sourceWidth:800,sourceHeight:490,type:IG,cardArtLayouts:[]},kJ={collapsedContentMode:bg.bottomLeft,collapsedLayoutInsets:{top:0,left:-8,bottom:0,right:0},expandedContentMode:bg.bottomLeft,expandedLayoutInsets:qV},OJ={collapsedContentMode:bg.bottomLeft,collapsedLayoutInsets:qV,expandedContentMode:bg.bottomLeft,expandedLayoutInsets:qV},EJ={collapsedContentMode:bg.scaleAspectFill,expandedContentMode:bg.bottomLeft,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},RJ={maxWidth:250,ltr:kJ,rtl:kJ,collapsedSize:{type:BU,height:1},priority:Sg.Mini},DJ={objectPath:tL,cardArtLayoutMetrics:[RJ,{maxWidth:704,ltr:OJ,rtl:OJ,collapsedSize:{type:BU,height:1.062}},{ltr:EJ,rtl:EJ,collapsedSize:{type:aL,width:1}}],crops:["sr"],sourceWidth:800,sourceHeight:490,type:IG,cardArtLayouts:[]},_J={collapsedContentMode:bg.bottomLeft,expandedContentMode:bg.bottomLeft,collapsedLayoutInsets:{top:0,left:-8,bottom:0,right:0},expandedLayoutInsets:qV},LJ={collapsedContentMode:bg.bottomLeft,expandedContentMode:bg.bottomLeft,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},xJ={collapsedContentMode:bg.scaleAspectFill,expandedContentMode:bg.bottomLeft,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},MJ={maxWidth:250,ltr:_J,rtl:_J,collapsedSize:{type:BU,height:1},priority:Sg.Mini},$J={objectPath:nL,cardArtLayoutMetrics:[MJ,{maxWidth:704,ltr:LJ,rtl:LJ,collapsedSize:{type:BU,height:1.062}},{ltr:xJ,rtl:xJ,collapsedSize:{type:aL,width:1}}],crops:[cL],sourceWidth:800,sourceHeight:490,type:IG,cardArtLayouts:[]},FJ={collapsedContentMode:bg.bottom,expandedContentMode:bg.center,collapsedLayoutInsets:{top:36,left:36,bottom:0,right:36},expandedLayoutInsets:qV},NJ={collapsedContentMode:bg.top,expandedContentMode:bg.center,collapsedLayoutInsets:{top:36,left:36,bottom:0,right:36},expandedLayoutInsets:qV},BJ={collapsedContentMode:bg.bottom,expandedContentMode:bg.center,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},UJ={collapsedContentMode:bg.right,expandedContentMode:bg.right,collapsedLayoutInsets:{top:50,left:0,bottom:50,right:0},expandedLayoutInsets:qV},GJ={collapsedContentMode:bg.right,expandedContentMode:bg.right,collapsedLayoutInsets:{top:168,left:0,bottom:168,right:533},expandedLayoutInsets:{top:117,left:0,bottom:117,right:533}},jJ={collapsedContentMode:bg.center,expandedContentMode:bg.center,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},VJ={collapsedContentMode:bg.bottomLeft,expandedContentMode:bg.bottomLeft,collapsedLayoutInsets:{top:36,left:18,bottom:36,right:0},expandedLayoutInsets:qV},HJ={collapsedContentMode:bg.bottomLeft,expandedContentMode:bg.bottomLeft,collapsedLayoutInsets:{top:0,left:18,bottom:0,right:0},expandedLayoutInsets:qV},WJ={collapsedContentMode:bg.center,expandedContentMode:bg.center,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},qJ={collapsedContentMode:bg.topLeft,expandedContentMode:bg.center,collapsedLayoutInsets:{top:0,left:70,bottom:0,right:0},expandedLayoutInsets:qV},zJ={collapsedContentMode:bg.topLeft,expandedContentMode:bg.center,expandedLayoutInsets:qV,collapsedLayoutInsets:{top:0,left:0,bottom:0,right:500}},YJ={collapsedContentMode:bg.topLeft,expandedContentMode:bg.center,collapsedLayoutInsets:{top:0,left:0,bottom:0,right:360},expandedLayoutInsets:{top:0,left:360,bottom:0,right:360}},JJ={collapsedContentMode:bg.top,expandedContentMode:bg.top,collapsedLayoutInsets:{top:117,left:0,bottom:0,right:0},expandedLayoutInsets:{top:130,left:0,bottom:0,right:0}},KJ={collapsedContentMode:bg.topLeft,expandedContentMode:bg.top,collapsedLayoutInsets:{top:70,left:116,bottom:0,right:0},expandedLayoutInsets:{top:130,left:0,bottom:0,right:0}},ZJ={collapsedContentMode:bg.topLeft,expandedContentMode:bg.top,collapsedLayoutInsets:{top:148,left:0,bottom:0,right:0},expandedLayoutInsets:{top:130,left:0,bottom:0,right:0}},QJ={collapsedContentMode:bg.topLeft,expandedContentMode:bg.top,collapsedLayoutInsets:{top:170,left:0,bottom:0,right:0},expandedLayoutInsets:{top:130,left:0,bottom:0,right:0}},XJ={ltr:BJ,rtl:BJ},eK={maxWidth:874,ltr:FJ,rtl:FJ},tK={ltr:NJ,rtl:NJ},nK={ltr:GJ,rtl:Qt(GJ)},rK={ltr:UJ,rtl:Qt(UJ)},oK={ltr:jJ,rtl:jJ},iK={ltr:VJ,rtl:VJ},sK={maxWidth:200,ltr:HJ,rtl:HJ},aK={maxWidth:700,ltr:WJ,rtl:Qt(WJ)},cK={maxWidth:900,ltr:qJ,rtl:Qt(qJ)},lK={maxWidth:1090,ltr:zJ,rtl:Qt(zJ)},uK={ltr:YJ,rtl:Qt(YJ)},dK={maxWidth:700,ltr:JJ,rtl:Qt(JJ),collapsedSize:{type:UG,width:1100,height:619},expandedSize:{type:UG,width:1200,height:675}},fK={maxWidth:874,ltr:KJ,rtl:Qt(KJ),collapsedSize:{type:UG,width:1092,height:614},expandedSize:{type:UG,width:1200,height:675}},pK={maxWidth:1090,ltr:ZJ,rtl:Qt(ZJ),collapsedSize:{type:UG,width:1392,height:783},expandedSize:{type:UG,width:1200,height:675}},hK={ltr:QJ,rtl:Qt(QJ),collapsedSize:{type:UG,width:1600,height:900},expandedSize:{type:UG,width:1200,height:675}},wK={objectPath:oP,cardArtLayouts:[BJ],cardArtLayoutMetrics:[XJ],sourceWidth:800,sourceHeight:450,type:YG,crops:void 0},gK={objectPath:cR,cardArtLayouts:[FJ],cardArtLayoutMetrics:[eK,tK],crops:["sr"],sourceWidth:800,sourceHeight:450,type:IG},mK={objectPath:iP,cardArtLayouts:[BJ],cardArtLayoutMetrics:[XJ],crops:[],sourceWidth:800,sourceHeight:450,type:YG},vK={objectPath:X_,cardArtLayouts:[FJ],cardArtLayoutMetrics:[eK,tK],crops:["sr"],sourceWidth:800,sourceHeight:450,type:IG},yK={objectPath:rP,cardArtLayouts:[BJ],cardArtLayoutMetrics:[XJ],crops:[],sourceWidth:800,sourceHeight:450,type:YG},AK={objectPath:rL,cardArtLayouts:[FJ],cardArtLayoutMetrics:[eK,tK],crops:["sr"],sourceWidth:800,sourceHeight:450,type:IG},TK={objectPath:sP,cardArtLayouts:[GJ,Qt(GJ)],cardArtLayoutMetrics:[nK],crops:[],sourceWidth:1208,sourceHeight:518,type:YG},bK={objectPath:aP,cardArtLayouts:[UJ,Qt(UJ)],cardArtLayoutMetrics:[rK],crops:[cP,lP],sourceWidth:688,sourceHeight:286,type:IG},SK={objectPath:tR,cardArtLayouts:[jJ],cardArtLayoutMetrics:[oK],crops:[],sourceWidth:875,sourceHeight:492,type:YG},PK={objectPath:eR,cardArtLayouts:[jJ],cardArtLayoutMetrics:[sK,oK],crops:[],sourceWidth:656,sourceHeight:492,type:YG},IK={objectPath:tL,cardArtLayouts:[VJ],cardArtLayoutMetrics:[sK,iK],crops:["sr"],sourceWidth:800,sourceHeight:490,type:IG},CK={objectPath:eL,cardArtLayouts:[VJ],cardArtLayoutMetrics:[sK,iK],crops:["sr"],sourceWidth:800,sourceHeight:490,type:IG},kK={objectPath:yx,cardArtLayouts:[VJ],cardArtLayoutMetrics:[sK,iK],crops:[cL],sourceWidth:800,sourceHeight:490,type:IG},OK={objectPath:nL,cardArtLayouts:[VJ],cardArtLayoutMetrics:[sK,iK],crops:[cL],sourceWidth:800,sourceHeight:490,type:IG},EK={objectPath:uP,cardArtLayouts:[YJ],cardArtLayoutMetrics:[aK,cK,lK,uK],crops:[lL],sourceWidth:1600,sourceHeight:604,type:IG},RK={objectPath:dP,cardArtLayouts:[QJ],cardArtLayoutMetrics:[dK,fK,pK,hK],crops:[lL],sourceWidth:1600,sourceHeight:900,type:YG},DK=bg.topRight,_K={top:-108,left:495,bottom:0,right:0},LK=bg.topLeft,xK={top:-108,left:-495,bottom:0,right:0},MK={type:UG,width:1124,height:482},$K={collapsedContentMode:bg.top,collapsedLayoutInsets:{top:-117,left:0,bottom:0,right:0},expandedContentMode:DK,expandedLayoutInsets:_K},FK={collapsedContentMode:bg.top,collapsedLayoutInsets:{top:-117,left:0,bottom:0,right:0},expandedContentMode:LK,expandedLayoutInsets:xK},NK={collapsedContentMode:bg.topRight,collapsedLayoutInsets:{top:-165,left:524,bottom:0,right:0},expandedContentMode:DK,expandedLayoutInsets:_K},BK={collapsedContentMode:bg.topLeft,collapsedLayoutInsets:{top:-165,left:-524,bottom:0,right:0},expandedContentMode:LK,expandedLayoutInsets:xK},UK={collapsedContentMode:bg.top,collapsedLayoutInsets:{top:-55,left:0,bottom:0,right:0},expandedContentMode:DK,expandedLayoutInsets:_K},GK={collapsedContentMode:bg.top,collapsedLayoutInsets:{top:-55,left:0,bottom:0,right:0},expandedContentMode:LK,expandedLayoutInsets:xK},jK={objectPath:sP,cardArtLayoutMetrics:[{maxWidth:250,ltr:$K,rtl:FK,collapsedSize:{type:UG,width:914,height:392},expandedSize:MK,priority:Sg.Mini},{ltr:NK,rtl:BK,collapsedSize:{type:UG,width:1188,height:509},expandedSize:MK},{ltr:UK,rtl:GK,collapsedSize:{type:UG,width:1456,height:624},expandedSize:MK,priority:Sg.ExtraWide}],crops:[],sourceWidth:1208,sourceHeight:518,type:YG,cardArtLayouts:[]},VK={collapsedContentMode:bg.bottomRight,collapsedLayoutInsets:qV,expandedContentMode:bg.topRight,expandedLayoutInsets:qV},HK={collapsedContentMode:bg.bottomLeft,collapsedLayoutInsets:qV,expandedContentMode:bg.topLeft,expandedLayoutInsets:qV},WK={collapsedContentMode:bg.topRight,collapsedLayoutInsets:{top:-49,left:0,bottom:0,right:0},expandedContentMode:bg.right,expandedLayoutInsets:qV},qK={collapsedContentMode:bg.topLeft,collapsedLayoutInsets:{top:-49,left:0,bottom:0,right:0},expandedContentMode:bg.left,expandedLayoutInsets:qV},zK={collapsedContentMode:bg.scaleAspectFill,collapsedLayoutInsets:qV,expandedContentMode:bg.bottomRight,expandedLayoutInsets:{top:50,left:495,bottom:0,right:0}},YK={collapsedContentMode:bg.scaleAspectFill,collapsedLayoutInsets:qV,expandedContentMode:bg.bottomRight,expandedLayoutInsets:{top:50,left:-495,bottom:0,right:0}},JK={objectPath:aP,cardArtLayoutMetrics:[{maxWidth:250,ltr:VK,rtl:HK,sourceCropOverrideLTR:"LCS.ApLCS01",sourceCropOverrideRTL:"LCS.ApLCS02",sourceSizeOverride:new SV(550,264),priority:Sg.Mini},{ltr:WK,rtl:qK,collapsedSize:{type:UG,width:672,height:279}},{ltr:zK,rtl:YK,expandedSize:{type:UG,width:1124,height:482},sourceCropOverrideLTR:fP,sourceCropOverrideRTL:fP,priority:Sg.ExtraWide}],crops:[cP,lP],sourceWidth:688,sourceHeight:286,type:IG,cardArtLayouts:[]},KK={collapsedContentMode:bg.bottomLeft,collapsedLayoutInsets:{top:0,left:-8,bottom:0,right:0},expandedContentMode:bg.bottomLeft,expandedLayoutInsets:qV},ZK={collapsedContentMode:bg.bottomLeft,collapsedLayoutInsets:qV,expandedContentMode:bg.bottomLeft,expandedLayoutInsets:qV},QK={collapsedContentMode:bg.scaleAspectFill,expandedContentMode:bg.bottomLeft,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},XK={maxWidth:250,ltr:KK,rtl:KK,collapsedSize:{type:BU,height:1},priority:Sg.Mini},eZ={objectPath:yx,cardArtLayoutMetrics:[XK,{maxWidth:704,ltr:ZK,rtl:ZK,collapsedSize:{type:BU,height:1.062}},{ltr:QK,rtl:QK,collapsedSize:{type:aL,width:1}}],crops:[cL],sourceWidth:800,sourceHeight:490,type:IG,cardArtLayouts:[]},tZ={collapsedContentMode:bg.center,collapsedLayoutInsets:qV,expandedContentMode:bg.center,expandedLayoutInsets:qV},nZ={objectPath:tR,cardArtLayoutMetrics:[{ltr:tZ,rtl:tZ,collapsedSize:{type:BU,height:1},expandedSize:{type:BU,height:1}}],crops:[],sourceWidth:875,sourceHeight:492,type:YG,cardArtLayouts:[]},rZ={collapsedContentMode:bg.center,collapsedLayoutInsets:qV,expandedContentMode:bg.center,expandedLayoutInsets:qV},oZ={objectPath:eR,cardArtLayoutMetrics:[{ltr:rZ,rtl:rZ,collapsedSize:{type:BU,height:1},expandedSize:{type:BU,height:1}}],crops:[],sourceWidth:656,sourceHeight:492,type:YG,cardArtLayouts:[]},iZ={collapsedContentMode:bg.bottom,expandedContentMode:bg.bottom,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},sZ={collapsedContentMode:bg.top,expandedContentMode:bg.top,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},aZ={objectPath:oP,cardArtLayoutMetrics:[{maxWidth:250,ltr:iZ,rtl:iZ,collapsedSize:{type:UG,width:455,height:256},priority:Sg.Mini},{ltr:sZ,rtl:sZ,collapsedSize:{type:BU,height:1}}],sourceWidth:800,sourceHeight:450,type:YG,crops:["sr"],cardArtLayouts:[]},cZ={collapsedContentMode:bg.bottom,expandedContentMode:bg.bottom,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},lZ={collapsedContentMode:bg.bottom,expandedContentMode:bg.bottom,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},uZ={collapsedContentMode:bg.scaleAspectFill,expandedContentMode:bg.bottom,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},dZ={maxWidth:250,ltr:cZ,rtl:cZ,collapsedSize:{type:UG,width:455,height:256},priority:Sg.Mini},fZ={objectPath:cR,cardArtLayoutMetrics:[dZ,{maxWidth:704,ltr:lZ,rtl:lZ,collapsedSize:{type:BU,height:1.08}},{ltr:uZ,rtl:uZ}],crops:["sr"],sourceWidth:800,sourceHeight:450,type:IG,cardArtLayouts:[]},pZ={collapsedContentMode:bg.bottom,expandedContentMode:bg.bottom,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},hZ={collapsedContentMode:bg.top,expandedContentMode:bg.top,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},wZ={objectPath:iP,cardArtLayoutMetrics:[{maxWidth:250,ltr:pZ,rtl:pZ,collapsedSize:{type:UG,width:455,height:256},priority:Sg.Mini},{ltr:hZ,rtl:hZ,collapsedSize:{type:BU,height:1}}],sourceWidth:800,sourceHeight:450,type:YG,crops:["sr"],cardArtLayouts:[]},gZ={collapsedContentMode:bg.bottom,expandedContentMode:bg.bottom,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},mZ={collapsedContentMode:bg.bottom,expandedContentMode:bg.bottom,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},vZ={collapsedContentMode:bg.scaleAspectFill,expandedContentMode:bg.bottom,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},yZ={maxWidth:250,ltr:gZ,rtl:gZ,collapsedSize:{type:UG,width:455,height:256},priority:Sg.Mini},AZ={objectPath:X_,cardArtLayoutMetrics:[yZ,{maxWidth:704,ltr:mZ,rtl:mZ,collapsedSize:{type:BU,height:1.08}},{ltr:vZ,rtl:vZ}],crops:["sr"],sourceWidth:800,sourceHeight:450,type:IG,cardArtLayouts:[]},TZ={type:UG,width:1200,height:675},bZ={top:-130,left:0,bottom:0,right:0},SZ={collapsedContentMode:bg.top,collapsedLayoutInsets:{top:-16,left:0,bottom:0,right:0},expandedContentMode:bg.top,expandedLayoutInsets:bZ},PZ={collapsedContentMode:bg.top,collapsedLayoutInsets:{top:-116,left:0,bottom:0,right:0},expandedContentMode:bg.top,expandedLayoutInsets:bZ},IZ={collapsedContentMode:bg.topLeft,collapsedLayoutInsets:{top:-116,left:-70,bottom:0,right:0},expandedContentMode:bg.top,expandedLayoutInsets:bZ},CZ={collapsedContentMode:bg.topRight,collapsedLayoutInsets:{top:-116,left:70,bottom:0,right:0},expandedContentMode:bg.top,expandedLayoutInsets:bZ},kZ={collapsedContentMode:bg.topLeft,collapsedLayoutInsets:{top:-148,left:0,bottom:0,right:0},expandedContentMode:bg.top,expandedLayoutInsets:bZ},OZ={collapsedContentMode:bg.topRight,collapsedLayoutInsets:{top:-148,left:0,bottom:0,right:0},expandedContentMode:bg.top,expandedLayoutInsets:bZ},EZ={collapsedContentMode:bg.topLeft,collapsedLayoutInsets:{top:-170,left:0,bottom:0,right:0},expandedContentMode:bg.top,expandedLayoutInsets:bZ},RZ={collapsedContentMode:bg.topRight,collapsedLayoutInsets:{top:-170,left:0,bottom:0,right:0},expandedContentMode:bg.top,expandedLayoutInsets:bZ},DZ={objectPath:dP,cardArtLayouts:[EZ],cardArtLayoutMetrics:[{maxWidth:250,ltr:SZ,rtl:SZ,collapsedSize:{type:UG,width:455,height:256},expandedSize:TZ,priority:Sg.Mini},{maxWidth:699,ltr:PZ,rtl:PZ,collapsedSize:{type:UG,width:1094,height:614},expandedSize:TZ},{maxWidth:899,ltr:IZ,rtl:CZ,collapsedSize:{type:UG,width:1092,height:614},expandedSize:TZ},{maxWidth:1090,ltr:kZ,rtl:OZ,collapsedSize:{type:UG,width:1392,height:783},expandedSize:TZ},{ltr:EZ,rtl:RZ,collapsedSize:{type:UG,width:1600,height:900},expandedSize:TZ}],crops:[lL],sourceWidth:1600,sourceHeight:900,type:YG},_Z={collapsedContentMode:bg.top,collapsedLayoutInsets:{top:16,left:0,bottom:0,right:0},expandedContentMode:bg.top,expandedLayoutInsets:qV},LZ={collapsedContentMode:bg.scaleAspectFill,collapsedLayoutInsets:qV,expandedContentMode:bg.scaleAspectFill,expandedLayoutInsets:qV},xZ={collapsedContentMode:bg.topLeft,collapsedLayoutInsets:{top:0,left:-70,bottom:0,right:0},expandedContentMode:bg.center,expandedLayoutInsets:qV},MZ={collapsedContentMode:bg.topRight,collapsedLayoutInsets:{top:0,left:70,bottom:0,right:0},expandedContentMode:bg.center,expandedLayoutInsets:qV},$Z={collapsedContentMode:bg.topLeft,collapsedLayoutInsets:qV,expandedContentMode:bg.center,expandedLayoutInsets:qV},FZ={collapsedContentMode:bg.topRight,collapsedLayoutInsets:qV,expandedContentMode:bg.center,expandedLayoutInsets:qV},NZ={collapsedContentMode:bg.topLeft,collapsedLayoutInsets:qV,expandedContentMode:bg.center,expandedLayoutInsets:qV},BZ={collapsedContentMode:bg.topRight,collapsedLayoutInsets:qV,expandedContentMode:bg.center,expandedLayoutInsets:qV},UZ={objectPath:uP,cardArtLayoutMetrics:[{maxWidth:250,ltr:_Z,rtl:_Z,collapsedSize:{type:UG,width:455,height:256},priority:Sg.Mini},{maxWidth:699,ltr:LZ,rtl:LZ},{maxWidth:899,ltr:xZ,rtl:MZ},{maxWidth:1090,ltr:$Z,rtl:FZ,collapsedSize:{type:UG,width:1400,height:527}},{ltr:NZ,rtl:BZ,collapsedSize:{type:UG,width:1600,height:604}}],crops:[lL],sourceWidth:1600,sourceHeight:604,type:IG,cardArtLayouts:[]},GZ={collapsedContentMode:bg.bottom,expandedContentMode:bg.bottom,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},jZ={collapsedContentMode:bg.top,expandedContentMode:bg.top,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},VZ={objectPath:rP,cardArtLayoutMetrics:[{maxWidth:250,ltr:GZ,rtl:GZ,collapsedSize:{type:UG,width:455,height:256},priority:Sg.Mini},{ltr:jZ,rtl:jZ,collapsedSize:{type:BU,height:1}}],sourceWidth:800,sourceHeight:450,type:YG,crops:["sr"],cardArtLayouts:[]},HZ={collapsedContentMode:bg.bottom,expandedContentMode:bg.bottom,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},WZ={collapsedContentMode:bg.bottom,expandedContentMode:bg.bottom,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},qZ={collapsedContentMode:bg.scaleAspectFill,expandedContentMode:bg.bottom,collapsedLayoutInsets:qV,expandedLayoutInsets:qV},zZ={objectPath:rL,cardArtLayoutMetrics:[{maxWidth:250,ltr:HZ,rtl:HZ,collapsedSize:{type:UG,width:455,height:256},priority:Sg.Mini},{maxWidth:704,ltr:WZ,rtl:WZ,collapsedSize:{type:BU,height:1.08}},{ltr:qZ,rtl:qZ}],crops:["sr"],sourceWidth:800,sourceHeight:450,type:IG,cardArtLayouts:[]}
class YZ extends hV{constructor(e,t,n,r,o){super(),this.showLiveIndicator=e,this.displayFromDate=t,this.displayText=n,this.countdownToDate=r,this.countdownStringKey=o}}!function(e){e.AppEvent="appEvent",e.ContingentOffer="contingentOffer",e.OfferItem="offerItem"}(om||(om={}))
class JZ extends wV{constructor(e){super(),this.promotionType=e}}class KZ extends JZ{constructor(e,t,n,r,o,i,s,a,c,l,u,d,f,p,h){super(om.AppEvent),this.appEventId=e,this.moduleArtwork=t,this.moduleVideo=n,this.title=r,this.subtitle=o,this.detail=i,this.startDate=s,this.endDate=a,this.kind=c,this.requirements=l,this.lockup=u,this.hideLockupWhenNotInstalled=d,this.formattedDates=f,this.mediaOverlayStyle=p,this.includeBorderInDarkMode=h,this.clickAction=null}}class ZZ extends hV{constructor(e,t,n,r,o,i){super(),this.appEvent=e,this.artwork=t,this.video=n,this.shareAction=r,this.mediaOverlayStyle=o,this.includeBorderInDarkMode=i,this.pageMetrics=new bH,this.pageRenderMetrics={}}}class QZ extends hV{constructor(e,t,n,r,o,i,s,a,c,l,u){super(),this.appEventId=e,this.title=t,this.detail=n,this.artworkUrl=r,this.displayTime=o,this.scheduledAction=i,this.notAuthorizedAction=s,this.failureAction=a,this.destinationUrl=c,this.scheduleClickEvent=l,this.cancelScheduleClickEvent=u}}class XZ extends JZ{constructor(e,t,n,r,o,i,s,a,c,l,u,d){super(om.ContingentOffer),this.backgroundArtwork=e,this.isStreamlinedBuy=n,this.mediaOverlayStyle=t,this.titleFormatted=o,this.subtitle=i,this.additionalInfo=l,this.description=s,this.label=a,this.badge=c,this.offerLockup=d,this.trunkAppIcon=u,this.learnMoreTitle=r,this.clickAction=null}}class eQ extends wV{constructor(e){super(),this.promotionType=e}}class tQ extends eQ{constructor(e,t,n){super(om.ContingentOffer),this.contingentOffer=e,this.artwork=t,this.mediaOverlayStyle=n,this.pageMetrics=new bH,this.pageRenderMetrics={},this.learnMoreActionMetrics=new TH,this.backButtonActionMetrics=new TH,this.closeButtonActionMetrics=new TH}}class nQ extends JZ{constructor(e,t,n,r,o,i,s,a,c,l,u,d){super(om.OfferItem),this.moduleArtwork=e,this.moduleVideo=t,this.isStreamlinedBuy=r,this.mediaOverlayStyle=n,this.titleFormatted=o,this.description=a,this.badge=c,this.offerLockup=d,this.subtitle=s,this.endDate=l,this.expiryDateFormatted=i,this.iapArtwork=u,this.clickAction=null}}class rQ extends eQ{constructor(e,t,n,r,o,i,s){super(om.OfferItem),this.offerItem=e,this.artwork=t,this.learnMoreTitle=i,this.video=n,this.mediaOverlayStyle=r,this.pageMetrics=new bH,this.additionalInfo=s,this.pageRenderMetrics={},this.learnMoreActionMetrics=new TH,this.backButtonActionMetrics=new TH,this.closeButtonActionMetrics=new TH}}class oQ extends hV{constructor(){super(),this.pageMetrics=new bH,this.pageRenderMetrics={}}}class iQ extends oQ{}class sQ extends wV{constructor(e,t){super(),this.message=e,this.action=t}}class aQ extends oQ{constructor(e=[]){super(),this.shelves=[],this.shelves=e}}!function(e){e.visionOS="xros",e.iOS="ios"}(im||(im={}))
class cQ extends hV{constructor(e,t){super(),this.type=e,this.values=t}}class lQ extends hV{constructor(e,t,n=null){super(),this.name=e,this.value=t,this.isSelected=t===n}}class uQ extends hV{constructor(e,t,n){super(),this.instanceId=e,this.eventPayloads=t,this.searchAd=n}setTemplateType(e){this.eventPayloads.placed.iAdTemplateType=e}setDuplicatePosition(e){this.eventPayloads.placed.duplicatePosition=e}setMissedOpportunityReason(e){this.eventPayloads.placed.missedOpportunityReason=e}}class dQ extends hV{constructor(e,t,n,r,o){super(),this.instanceId=e,this.iAd=t,this.eventPayloads=n,this.impressionId=r,this.transparencyAction=o}setTemplateType(e){this.eventPayloads.placed.iAdTemplateType=e}setDuplicatePosition(e){this.eventPayloads.placed.duplicatePosition=e}}class fQ extends IH{constructor(e){super("AdTransparencyAction"),this.adTransparencyData=e}}class pQ extends IH{constructor(e,t,n,r,o,i,s,a){super("SearchAction"),this.spellCheckEnabled=!1,this.title=e,this.term=t,this.url=n,this.origin=r,this.entity=o,this.source=i,this.presentationStyle=null!=s?s:[NI],this.referrerData=a}}class hQ extends hV{constructor(e,t){super(),this.hints=e,this.ghostHintTerm=t,this.pageMetrics=new bH,this.pageRenderMetrics={}}}class wQ extends hV{constructor(e,t,n=null){super(),this.primaryText=e,this.secondaryText=t,this.messageClickAction=n}}class gQ extends wV{constructor(e){super(),this.resultType=e,this.clickAction=null}}class mQ extends gQ{constructor(e){super("content"),this.lockup=e}}class vQ extends gQ{constructor(e){super(rN),this.lockup=e}}class yQ extends gQ{constructor(e){super(BI),this.lockup=e}}class AQ extends gQ{constructor(){super($m),this.lockups=[],this.displaysScreenshots=!0,this.itemBackground="ad"}}class TQ extends gQ{constructor(){super(w$)}}class bQ extends gQ{constructor(e){super(UI),this.title=e}}class SQ extends gQ{constructor(e,t,n,r,o){super("lockupCollection"),this.heading=e,this.headingArtwork=o,this.title=t,this.items=n,this.detailAction=r}}class PQ extends gQ{constructor(e,t){super(OL),this.title=e,this.tokens=t}}class IQ extends wV{constructor(e){super(),this.linkableText=e}}!function(e){e.requestedUrl="_jet-internal:metricsHelpers_requestedUrl",e.timingValues="_jet-internal:metricsHelpers_timingValues",e.pageInformation="_jet-internal:metricsHelpers_pageInformation",e.contentMaxAge="_jet-internal:responseMetadata_contentMaxAge"}(sm||(sm={}))
const CQ="X-Apple-AppStore-UserId-Secondary"
class kQ extends Error{}class OQ extends Error{}const EQ="x-apple-application-instance",RQ="x-apple-application-site"
class DQ extends hV{constructor(e,t,n,r,o=!1,i=!1){super(),this.strategy=e,this.updateDelayInterval=t,this.timeSinceOnScreenInterval=n,this.timeToLiveEndDate=r,this.refreshWhileVisible=o,this.refreshForDeviceDrivenContentChange=i}}const _Q=new Set([117,122,118,195,194,197,369,370,371,372,373,374,375,376,377,378,379,380,395,396,397,398,399,400,491,492,493,504,505,506,520,521,522,523,524,525,530,531,532,533,567,571]),LQ=new Set([491,492,493]),xQ=new Set([530,531,532,533]),MQ=new Set([567,571]),$Q=new Set([311,312,476]),FQ=new Set([...$Q,518]),NQ=new Set([557,418,431,429,430,420,304,305,260,497]),BQ=new Set([413,414,254,255,256,266,271,436])
class UQ extends hV{constructor(e,t,n,r,o){super(),this.name=e,this.genreId=t,this.artwork=n,this.ageBandId=r,this.children=o}}class GQ extends hV{constructor(e){super(),this.categories=e}}class jQ{}class VQ extends Error{}class HQ extends jQ{constructor(e){super(),this.rawData=e,this.appId=null,this.groupId=null,this.score=0,this.segScores=new Map,this.modifiedScore=0,this.onDeviceScore=0}}class WQ extends jQ{constructor(e){super(),this.rawData=e,this.isExactMatch=!1,this.isWildcardMatch=!1,this.isUnpersonalizedMatch=!1,this.isFallbackMatch=!1,this.appId=null,this.groupId=null,this.score=0,this.modifiedScore=0,this.onDeviceScore=0}}const qQ="-1"
class zQ{constructor(e,t){e&&(this.appStoreClientRequestId=t,this.iAdId=e[DN],this.sponsoredSearchRequestData=e.dataBlob,this.routingInfo=e.iAdRoutingInfo,this.canary=e.canary)}validAdRequest(){const e=this.sponsoredSearchRequestData&&this.sponsoredSearchRequestData.length>0,t=this.routingInfo&&this.routingInfo.length>0
return e&&t}}const YQ={showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}}
let JQ=null
const KQ=(e,t)=>{const n=e.isLandscape()
return n===t.isLandscape()?0:n?-1:1},ZQ="jet_native_advert_instanceid"
am=e(8371)
class QQ extends hV{constructor(e){super(),this.incidentType=e}}class XQ extends QQ{constructor(e,t){super("discard"),this.instanceId=e,this.reason=t}}const eX="isOnBoardingCard"
cm=e(172)
const tX="appStore.getEngagementEvents"
!function(e){e.EditorialItem="editorialItem",e.EditorialItemGroup="editorialItemGroup"}(lm||(lm={}))
const nX="X-AppStore-iAdClickToken",rX="X-AppStore-iAdLineItem",oX="X-AppStore-iAdDismissAdActionMetrics"
class iX{constructor(e,t,n,r,o,s,a){this.placementType=t,this.placementId=null===t?null:this.placementIdFromType(t),this.pageFields={},this.clickFields={},this.impressionsFields={},this.fastImpressionFields={},this.iAdClickEventFields={},this._iAdApplied=!1,this._iAdAdamId=void 0,this.positionInfo=a,this.slotInfo=n,this.setInitialAdData(e,r,o),i(s)&&(this.pageFields[wT]=s),this.fastImpressionFields[bO]=!0}static from(e,t){var n,r,o,i
const s=new iX(e,d(t.placementType),c(t.slotInfo),null!==(n=d(t.iAdId))&&void 0!==n?n:void 0,null!==(r=d(t.appStoreClientRequestId))&&void 0!==r?r:void 0,null!==(o=w(t.wasOdmlSuccessful))&&void 0!==o?o:void 0,h(t.positionInfo))
return s._iAdApplied=l(t._iAdApplied),s._iAdAdamId=null!==(i=d(t._iAdAdamId))&&void 0!==i?i:void 0,Object.assign(s.pageFields,t.pageFields),Object.assign(s.clickFields,t.clickFields),Object.assign(s.impressionsFields,t.impressionsFields),Object.assign(s.fastImpressionFields,t.fastImpressionFields),Object.assign(s.iAdClickEventFields,t.iAdClickEventFields),s.updateContainerId(d(t.containerId)),s}static createInitialSlotInfos(e,t,n,r){var o
switch(t){case BG:case vG:const i=iX.containerIdFromType(t),s=null!==(o=null==n?void 0:n.slot)&&void 0!==o?o:0
return[{containerId:i,slots:[{slotId:`${i}_${s}`,slotIndex:s,hasAdData:!1}]}]
case Cj:const a=po(e,t),c=(0,Ag.isNothing)(a)?[]:a.map(e=>e.slot),l={},u=(0,Ag.isSome)(n)?n.slot-1:null
let d=!1
return c.forEach(e=>{var t
const n=d?e-1:e,o=null==r?void 0:r.find(e=>e.containedAdSlots.includes(n)),i=u===e,s=function(e,t,n){return(0,Ag.isNothing)(n)?"0":n.type===lm.EditorialItemGroup?(!(n.containedAdSlots.length>1)||e===n.containedAdSlots[0]||n.containedAdSlots[n.containedAdSlots.length-1],"0"):"0"}(n,0,o),a=null!==(t=l[s])&&void 0!==t?t:{containerId:s,slots:[]}
l[s]=a
const c={slotId:`${s}_${e}`,slotIndex:e,hasAdData:!1}
a.slots.push(c),d=d||i}),Object.values(l)
default:return null}}get iAdIsPresent(){return this._iAdApplied}get iAdAdamId(){return this._iAdAdamId}updateForAdResponse(e,t){var n
r(t)||(this.placementType=t.placementType,this.placementId=this.placementIdFromType(this.placementType),this.positionInfo=null===(n=t.onDeviceAd)||void 0===n?void 0:n.positionInfo,this.setInitialAdData(e,t.iAdId,t.clientRequestId))}setInitialAdData(e,t,n){if((0,Ag.isNothing)(t)||(0,Ag.isNothing)(n))return
switch(this.pageFields[u2.hasIAdData]=!0,this.placementType){case Cj:case BG:case vG:this.impressionsFields[u2.hasIAdData]=!0}switch(this.pageFields[p_]=n,this.placementType){case Cj:case BG:case vG:this.clickFields[p_]=n,this.impressionsFields[p_]=n}const r=Hd(t)
if(this.pageFields[DN]=r,this.impressionsFields[DN]=r,this.clickFields[DN]=r,this.updateContainerId(null),this.updateSlotInfo(),s(this.slotInfo)&&(this.pageFields[YN]=this.slotInfo,this.clickFields[YN]=this.slotInfo,this.impressionsFields[YN]=this.slotInfo),null!==this.placementId&&this.placementId.length>0)switch(this.pageFields[EN]=this.placementId,this.clickFields[EN]=this.placementId,this.impressionsFields[EN]=this.placementId,this.placementType){case Cj:case BG:case vG:this.fastImpressionFields[EN]=this.placementId}}updateContainerId(e){this.placementType===Cj?(this.containerId=null!=e?e:null,i(this.containerId)&&(this.clickFields[jF]=this.containerId,this.fastImpressionFields[jF]=this.containerId)):(this.containerId=null===this.placementType?null:iX.containerIdFromType(this.placementType),i(this.containerId)&&(this.pageFields[jF]=this.containerId,this.clickFields[jF]=this.containerId,this.fastImpressionFields[jF]=this.containerId))}containerIdForSlotIndex(e){if((0,Ag.isNothing)(e)||(0,Ag.isNothing)(this.slotInfo))return null
for(const t of this.slotInfo)for(const n of t.slots)if(n.slotIndex===e)return t.containerId
return this.containerId}apply(e,t){if((0,Ag.isNothing)(t)||o(t))return
const n=t.id,r=H(t,wN)
if(this._iAdAdamId=n,r){this.impressionsFields[u2.hasIAdData]=!0,this.clickFields[u2.hasIAdData]=!0
const o=Hd(r[h_])
this.fastImpressionFields[i_]=o,this.clickFields[i_]=o
const i=Hd(r[gT])
this.clickFields[o_]=i,this.fastImpressionFields[o_]=i,this.pageFields[$U]=n,this.pageFields.iAd={iAdFormat:qd(h(g(r),"format")),iAdAlgoId:Hd(r.algoId),iAdImpressionId:Hd(r[h_]),iAdMetadata:Hd(r[gT])}
const s=Fe(e,t)
this.updateIAdMetricsFieldsForProductVariantData(s,this.clickFields),Object.assign(this.iAdClickEventFields,r),this._iAdApplied=!0,this.setMissedOpportunity(e,void 0,this.placementType)}this.updateSlotInfo(),s(this.slotInfo)&&(this.pageFields[YN]=this.slotInfo,this.clickFields[YN]=this.slotInfo,this.impressionsFields[YN]=this.slotInfo)}applyClickFieldsFromPageRequest(e,t){this._iAdApplied=!0,this._iAdAdamId=e,Object.assign(this.clickFields,t),Object.keys(this.pageFields).forEach(e=>delete this.pageFields[e])}setSpecifiedCreativeUsed(e){this.fastImpressionFields[mT]=e,this.clickFields[mT]=e}setTemplateType(e){this.pageFields[$x]=e,this.impressionsFields[$x]=e,this.clickFields[$x]=e}setMissedOpportunity(e,t,n){if(this.missedOpportunityReason=t,i(t))switch(this.clickFields[jB]=t,this.placementType){case Cj:case BG:case vG:break
default:this.pageFields[jB]=t,this.impressionsFields[jB]=t}else delete this.clickFields[jB],n===vG?(this.pageFields[jB]=null,this.impressionsFields[jB]=null):(delete this.pageFields[jB],delete this.impressionsFields[jB])
i(t)?(this.pageFields[jB]=t,this.impressionsFields[jB]=t):(delete this.pageFields[jB],delete this.impressionsFields[jB]),this.updateSlotInfo(),s(this.slotInfo)&&(this.pageFields[YN]=this.slotInfo,this.clickFields[YN]=this.slotInfo,this.impressionsFields[YN]=this.slotInfo)}placementIdFromType(e){switch(e){case wU:return vT
case qB:return yT
case Cj:return AT
case BG:return TT
case vG:return bT
default:throw new Error(`This method should never be called with value: ${e}`)}}static placementTypeFromPlacementId(e,t){switch(t){case vT:return wU
case yT:return qB
case AT:return Cj
case TT:return BG
case bT:return vG
default:return e.console.log(`Failed to get placementType from placementId ${t}. Defaulting to searchResults`),qB}}static containerIdFromType(e){switch(e){case BG:return hN
case vG:return aC
default:return null}}fastImpressionsFieldsForCurrentItem(e,t){switch(this.placementType){case BG:case vG:case Cj:let r
if((0,Ag.isSome)(t))r=t
else{const t=of(e)
r=null!==t&&t.locationType===_B?(n=e).locationStack.length<2?null:n.locationStack[1].position:rf(e)}const o=y(this.fastImpressionFields)
if(o[ST]=`${this.containerIdForSlotIndex(r)}_${r}`,r!==this.adjustedSlotIndex){const e=[bO,EN,jF,ST]
Object.keys(o).forEach(t=>{e.includes(t)||delete o[t]})}return o
default:return this.fastImpressionFields}var n}get adjustedSlotIndex(){var e
const t=null===(e=this.positionInfo)||void 0===e?void 0:e.slot
return i(t)?t-1:null}updateSlotInfo(){if(!(0,Ag.isNothing)(this.slotInfo))switch(this.placementType){case BG:case vG:for(const e of this.slotInfo)for(const t of e.slots)t.hasAdData=this.iAdIsPresent,i(this.missedOpportunityReason)&&(t.missedOpportunityReason=this.missedOpportunityReason)
break
case Cj:const e=this.adjustedSlotIndex
for(const t of this.slotInfo)for(const n of t.slots){const t=e===n.slotIndex,r=this.iAdIsPresent&&t
let o=this.missedOpportunityReason
!t&&i(e)&&(o=JR),n.hasAdData=r,i(o)&&(n.missedOpportunityReason=o)}}}updateIAdMetricsFieldsForProductVariantData(e,t){(0,Ag.isSome)(e)&&He(e,w_)?t[PT]=e.productPageId:delete t[PT]}get fastImpressionsEventVersion(){switch(this.placementType){case BG:case vG:case Cj:return 5
default:return 4}}get shouldIncludeAdRotationFields(){switch(this.placementType){case BG:case vG:case Cj:return!1
default:return!0}}}class sX{constructor(e={}){this.baseFields=e}}const aX="data.search.dataSetId",cX=PE,lX=new Set([p_,DN,YN,wT,bO,jF,i_,o_,$U,"iAd",EN,jB,WA,$x,GB,ZM])
class uX{constructor(e,t,n){this.periodDuration=e,this.periodCount=t,this.type=n}isEqualTo(e){return e.periodDuration===this.periodDuration&&e.periodCount===this.periodCount&&e.type===this.type}}const dX=new Set([Zg.Grid,Zg.List,Zg.NumberedList,Zg.River]),fX={11:"43",30:"44"},pX=ZO,hX="ReviewsPage.ShelfId"
class wX{constructor(e,t,n){this.sectionType=e,this.shelfId=t,this.shelfBasedMappedIds=n}createProductPageSection(e){return zY.has(this.sectionType)?new HY(this.sectionType,null):new HY(this.sectionType,this.shelfId)}createShelfIdList(){return this.shelfBasedMappedIds||[this.shelfId]}}const gX=5,mX=5,vX=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Hj,LG),new wX(Hj,rF),new wX(Hj,KU),new wX(Hj,QN),new wX(Hj,xN),new wX(Hj,FG),new wX(Hj,WU),new wX(Hj,RB),new wX(Hj,EB),new wX(Hj,Aj),new wX(Hj,oj),new wX(Hj,DG),new wX(Rj,Rj),new wX(Hj,pj),new wX(Hj,HU),new wX(Hj,EG),new wX(Hj,yj,[PG,YF,Vx,VB]),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,fU),new wX(Hj,jG),new wX(Hj,oG),new wX(Hj,xG),new wX(Hj,qG)],yX=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Hj,LG),new wX(Hj,rF),new wX(Hj,KU),new wX(Hj,QN),new wX(Hj,xN),new wX(Hj,FG),new wX(Hj,WU),new wX(Hj,RB),new wX(Hj,EB),new wX(Hj,Aj),new wX(Hj,oj),new wX(Hj,DG),new wX(Rj,Rj),new wX(Hj,pj),new wX(Hj,HU),new wX(Hj,EG),new wX(Hj,yj,[PG,lU,LN,ZN,VB,JF,KF]),new wX(Hj,JF),new wX(Hj,LN),new wX(Hj,ZN),new wX(Hj,KF),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,fU),new wX(Hj,jG),new wX(Hj,oG),new wX(Hj,xG),new wX(Hj,qG)],AX=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Hj,LG),new wX(Hj,rF),new wX(Hj,KU),new wX(Hj,QN),new wX(Hj,xN),new wX(Rj,Rj),new wX(Hj,pj),new wX(Hj,FG),new wX(Hj,HU),new wX(Hj,DG),new wX(Hj,EG),new wX(Hj,yj,[PG,YF,VB]),new wX(Hj,Aj),new wX(Hj,oj),new wX(Hj,WU),new wX(Hj,RB),new wX(Hj,EB),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,hB),new wX(Hj,jG),new wX(Hj,oG),new wX(Hj,xG),new wX(Hj,qG)],TX=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Hj,LG),new wX(Hj,rF),new wX(Hj,KU),new wX(Hj,QN),new wX(Hj,xN),new wX(Rj,Rj),new wX(Hj,pj),new wX(Hj,FG),new wX(Hj,HU),new wX(Hj,DG),new wX(Hj,EG),new wX(Hj,yj,[PG,lU,LN,ZN,VB]),new wX(Hj,Aj),new wX(Hj,oj),new wX(Hj,WU),new wX(Hj,RB),new wX(Hj,EB),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,hB),new wX(Hj,jG),new wX(Hj,oG),new wX(Hj,xG),new wX(Hj,qG)],bX=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Hj,LG),new wX(Hj,rF),new wX(Hj,KU),new wX(Hj,qG),new wX(Hj,QN),new wX(Hj,xN),new wX(Hj,FG),new wX(Hj,WU),new wX(Hj,RB),new wX(Hj,EB),new wX(Hj,Aj),new wX(Hj,oj),new wX(Hj,DG),new wX(Rj,Rj),new wX(Hj,pj),new wX(Hj,HU),new wX(Hj,EG),new wX(Hj,yj,[PG,YF,Vx,VB]),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,fU),new wX(Hj,jG),new wX(Hj,oG),new wX(Hj,xG)],SX=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Hj,LG),new wX(Hj,rF),new wX(Hj,KU),new wX(Hj,qG),new wX(Hj,QN),new wX(Hj,xN),new wX(Hj,FG),new wX(Hj,WU),new wX(Hj,RB),new wX(Hj,EB),new wX(Hj,Aj),new wX(Hj,oj),new wX(Hj,DG),new wX(Rj,Rj),new wX(Hj,pj),new wX(Hj,HU),new wX(Hj,EG),new wX(Hj,yj,[PG,lU,LN,ZN,VB,JF,KF]),new wX(Hj,JF),new wX(Hj,LN),new wX(Hj,ZN),new wX(Hj,KF),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,fU),new wX(Hj,jG),new wX(Hj,oG),new wX(Hj,xG)],PX=5,IX=5,CX=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Hj,LG),new wX(Hj,nF),new wX(Hj,KU),new wX(Hj,FG),new wX(Hj,WU),new wX(Hj,Aj),new wX(Hj,oj),new wX(Hj,DG),new wX(Rj,Rj),new wX(Hj,pj),new wX(Hj,HU),new wX(Hj,EG),new wX(Hj,yj,[PG,YF,Vx,VB]),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,fU),new wX(Hj,jG),new wX(Hj,oG),new wX(Hj,qG),new wX(Hj,xG)],kX=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Hj,LG),new wX(Hj,nF),new wX(Hj,KU),new wX(Hj,FG),new wX(Hj,WU),new wX(Hj,Aj),new wX(Hj,oj),new wX(Hj,DG),new wX(Rj,Rj),new wX(Hj,pj),new wX(Hj,HU),new wX(Hj,EG),new wX(Hj,yj,[PG,lU,LN,ZN,VB,JF,KF]),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,fU),new wX(Hj,jG),new wX(Hj,oG),new wX(Hj,qG),new wX(Hj,xG)],OX=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Hj,LG),new wX(Hj,nF),new wX(Hj,KU),new wX(Rj,Rj),new wX(Hj,pj),new wX(Hj,HU),new wX(Hj,DG),new wX(Hj,EG),new wX(Hj,yj,[PG,YF,VB]),new wX(Hj,FG),new wX(Hj,Aj),new wX(Hj,oj),new wX(Hj,WU),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,hB),new wX(Hj,jG),new wX(Hj,oG),new wX(Hj,qG),new wX(Hj,xG)],EX=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Hj,LG),new wX(Hj,nF),new wX(Hj,KU),new wX(Rj,Rj),new wX(Hj,pj),new wX(Hj,HU),new wX(Hj,DG),new wX(Hj,EG),new wX(Hj,yj,[PG,lU,LN,ZN,VB]),new wX(Hj,FG),new wX(Hj,Aj),new wX(Hj,oj),new wX(Hj,WU),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,hB),new wX(Hj,jG),new wX(Hj,oG),new wX(Hj,qG),new wX(Hj,xG)],RX=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Hj,LG),new wX(Hj,nF),new wX(Hj,KU),new wX(Hj,qG),new wX(Hj,FG),new wX(Hj,WU),new wX(Hj,Aj),new wX(Hj,oj),new wX(Hj,DG),new wX(Rj,Rj),new wX(Hj,pj),new wX(Hj,HU),new wX(Hj,EG),new wX(Hj,yj,[PG,Vx,YF,VB]),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,fU),new wX(Hj,jG),new wX(Hj,oG),new wX(Hj,xG)],DX=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Hj,LG),new wX(Hj,nF),new wX(Hj,KU),new wX(Hj,qG),new wX(Hj,FG),new wX(Hj,WU),new wX(Hj,Aj),new wX(Hj,oj),new wX(Hj,DG),new wX(Rj,Rj),new wX(Hj,pj),new wX(Hj,HU),new wX(Hj,EG),new wX(Hj,yj,[PG,JF,lU,LN,ZN,VB,KF]),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,fU),new wX(Hj,jG),new wX(Hj,oG),new wX(Hj,xG)],_X=5,LX=5,xX=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Hj,LG),new wX(Hj,KU),new wX(Hj,QN),new wX(Hj,xN),new wX(Hj,FG),new wX(Hj,WU),new wX(Hj,RB),new wX(Hj,EB),new wX(Hj,Aj),new wX(Hj,oj),new wX(Hj,DG),new wX(Rj,Rj),new wX(Hj,pj),new wX(Hj,HU),new wX(Hj,yj),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,fU),new wX(Hj,jG),new wX(Hj,oG),new wX(Hj,xG),new wX(Hj,qG)],MX=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Hj,LG),new wX(Hj,KU),new wX(Hj,QN),new wX(Hj,xN),new wX(Rj,Rj),new wX(Hj,pj),new wX(Hj,FG),new wX(Hj,HU),new wX(Hj,DG),new wX(Hj,yj),new wX(Hj,Aj),new wX(Hj,oj),new wX(Hj,WU),new wX(Hj,RB),new wX(Hj,EB),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,hB),new wX(Hj,jG),new wX(Hj,oG),new wX(Hj,xG),new wX(Hj,qG)],$X=5,FX=5,NX=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Hj,LG),new wX(Hj,KU),new wX(Hj,FG),new wX(Hj,WU),new wX(Hj,Aj),new wX(Hj,oj),new wX(Hj,DG),new wX(Rj,Rj),new wX(Hj,pj),new wX(Hj,HU),new wX(Hj,yj),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,fU),new wX(Hj,jG),new wX(Hj,oG),new wX(Hj,qG),new wX(Hj,xG)],BX=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Hj,LG),new wX(Hj,KU),new wX(Rj,Rj),new wX(Hj,pj),new wX(Hj,HU),new wX(Hj,DG),new wX(Hj,yj),new wX(Hj,FG),new wX(Hj,Aj),new wX(Hj,oj),new wX(Hj,WU),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,hB),new wX(Hj,jG),new wX(Hj,oG),new wX(Hj,qG),new wX(Hj,xG)],UX=5,GX=5,jX=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Hj,DG),new wX(Rj,Rj),new wX(Hj,MN),new wX(Hj,Aj),new wX(Hj,oj),new wX(Hj,QF),new wX(Hj,xG),new wX(Hj,qG),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,fU),new wX(Hj,oM)],VX=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Rj,Rj),new wX(Hj,MN),new wX(Hj,DG),new wX(Hj,ZF),new wX(Hj,Aj),new wX(Hj,oj),new wX(Hj,xG),new wX(Hj,qG),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,hB),new wX(Hj,oM)],HX=5,WX=5,qX=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Hj,DG),new wX(Rj,Rj),new wX(Hj,MN),new wX(Hj,Aj),new wX(Hj,oj),new wX(Hj,QF),new wX(Hj,qG),new wX(Hj,xG),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,fU),new wX(Hj,oM)],zX=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Rj,Rj),new wX(Hj,MN),new wX(Hj,DG),new wX(Hj,ZF),new wX(Hj,Aj),new wX(Hj,oj),new wX(Hj,qG),new wX(Hj,xG),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,hB),new wX(Hj,oM)],YX=3,JX=3,KX=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Hj,WU),new wX(Rj,Rj),new wX(Hj,pj),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,AL)],ZX=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Rj,Rj),new wX(Hj,pj),new wX(Hj,WU),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,AL)],QX=5,XX=5,e0=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Hj,KU),new wX(Hj,DG),new wX(Rj,Rj),new wX(Hj,MN),new wX(Hj,Hx),new wX(Hj,QF),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,fU),new wX(Hj,jG),new wX(Hj,xG),new wX(Hj,qG)],t0=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Hj,KU),new wX(Rj,Rj),new wX(Hj,MN),new wX(Hj,DG),new wX(Hj,Hx),new wX(Hj,ZF),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,hB),new wX(Hj,jG),new wX(Hj,xG),new wX(Hj,qG)],n0=5,r0=5,o0=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Hj,KU),new wX(Hj,Aj),new wX(Hj,oj),new wX(Hj,DG),new wX(Rj,Rj),new wX(Hj,MN),new wX(Hj,Hx),new wX(Hj,QF),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,fU),new wX(Hj,jG),new wX(Hj,qG),new wX(Hj,xG)],i0=[new wX(Sj,Sj),new wX(Ij,Ij),new wX(Hj,KU),new wX(Rj,Rj),new wX(Hj,MN),new wX(Hj,DG),new wX(Hj,Hx),new wX(Hj,ZF),new wX(Hj,Aj),new wX(Hj,oj),new wX(Hj,WG),new wX(Hj,NG),new wX(Hj,RG),new wX(Hj,hj),new wX(Hj,hB),new wX(Hj,jG),new wX(Hj,qG),new wX(Hj,xG)]
class s0 extends hV{constructor(e){super(),this.productMedia=e,this.pageMetrics=new bH,this.pageRenderMetrics={}}}const a0="product_media"
class c0 extends hV{constructor(e){super(),this.style=e}isValidUber(e,t){function n(e){return null!=e&&0!==Object.keys(e).length}return n(this.artwork)||n(this.compactArtwork)||n(this.video)||n(this.compactVideo)||(e||t)&&n(this.iconArtwork)}}let l0=null
const u0=[pj,Vv,cD,pG,IM,Hv,bB,lD,uD,CF,oB,dD,xB,$C,pN,Wv,qv,mC,zv],d0=/id([0-9]+)\/?$/i,f0={915249334:"1462947752"},p0=[jN,jC,kU,Pj,kM,gD,sx,ax],h0=[jN,VC,kU,kM],w0=[jN,kU,Pj,OM],g0=sx
class m0{supports(e,t,n,r){return this._supports(e,t,n,r)}_supports(e,t,n,r){const o=this.supportedFeaturedContentIds.has(n)
let s
return s=!i(r)||this.supportedNativeGroupingShelfIds.has(r),o&&s}createShelf(e,t,n,o,a){var c,l,u
const d=t,f=this.initialShelfDataFromGroupingMediaApiData(e,d),p=this.shelfTokenFromBaseTokenAndMediaApiData(e,d,o,n),h=this.shelfMetricsOptionsFromBaseMetricsOptions(e,p,a),w=s(h)
w&&this.shouldImpressShelf()&&ef(0,h,p.title),s(f.shelfContents)&&(f.shelfContents=Co(f.shelfContents,null!==(c=n.recoImpressionData)&&void 0!==c?c:{},null!==(l=null==a?void 0:a.recoMetricsData)&&void 0!==l?l:{}))
const g=this._createShelf(e,p,f,n)
if(w&&this.shouldImpressShelf()&&(nf(h.locationTracker),i(g)&&(pf(e,g,h),(null===(u=g.url)||void 0===u?void 0:u.length)>0&&s(g.impressionMetrics)&&p.showingPlaceholders))){const e=g.url
try{const t=kq.from(e).pathComponents().pop(),n=JSON.parse(decodeURIComponent(t))
n.originalPlaceholderShelfImpressionMetrics=g.impressionMetrics,function(e,t){const n=kq.from(e.url),o=kq.from(Yn(e,t))
for(const e of Object.keys(n.query))r(o.query[e])&&(o.query[e]=n.query[e])
e.url=o.build()}(g,n)}catch{g.url=e}}return this.finalizeInitialShelfForDisplay(e,g,p,f,n),w&&this.shouldPrepareLocationTrackerForNextPosition()&&af(n.metricsLocationTracker),g}constructor(e){this.supportedFeaturedContentIds=new Set([]),this.supportedNativeGroupingShelfIds=new Set([]),this.builderClass=e}incompleteShelfFetchStrategy(e){return e.featureFlags.isEnabled("on_demand_grouping_shelf_fetching")?_g.OnShelfWillAppear:_g.OnPageLoad}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){return n}shouldImpressShelf(){return!0}shouldPrepareLocationTrackerForNextPosition(){return!0}finalizeInitialShelfForDisplay(e,t,n,r,i){var a,c
if(o(t))return
n.isSearchLandingPage&&rr(0,t,n),(null===(a=t.url)||void 0===a?void 0:a.length)>0&&s(i.additionalShelfParameters)&&(t.url=kq.from(t.url).append(aB,i.additionalShelfParameters).build()),t.fetchStrategy=this.incompleteShelfFetchStrategy(e)
const l=(0,Tg.isSome)(t)&&(null===(c=t.url)||void 0===c?void 0:c.length)>0
o(t.items)&&!l&&(t.isHidden=!0)}finalizeSecondaryShelfForDisplay(e,t,n,i){if(!o(t)){if(n.remainingItems.length){const t=n.remainingItems.map(e=>e.id)
e.console.warn("Could not load items for: "+t.join(","))}var a,c
if(t&&(t.mergeWhenFetched=((c=n).shelfStyle,!(c.showingPlaceholders||c.shelfStyle===FD||c.shelfStyle===Ck&&(0,Tg.isSome)(c.initialHydratedItems)&&c.initialHydratedItems.length>0)),t.networkTimingMetrics=i.responseTimingValues,t.nextPreferredContentRefreshDate=null==(a={timeToLive:null,nextPreferredContentRefreshDate:null,refreshWhileVisibleForNextPreferredContentRefreshDate:!1})?void 0:a.nextPreferredContentRefreshDate),s(n.originalPlaceholderShelfImpressionMetrics))if(r(t.impressionMetrics))t.impressionMetrics=n.originalPlaceholderShelfImpressionMetrics
else for(const e in n.originalPlaceholderShelfImpressionMetrics.fields)Object.prototype.hasOwnProperty.call(n.originalPlaceholderShelfImpressionMetrics.fields,e)&&(t.impressionMetrics.fields[e]=n.originalPlaceholderShelfImpressionMetrics.fields[e])
!n.hasExistingContent&&o(t.items)&&(t.isHidden=!0),n.isSearchLandingPage&&rr(0,t,n)}}handleShelf(e,t,n,r,o,i){const s=n[sU],a=JSON.parse(s)
a.isFirstRender=!1,this.secondaryShelfDataForShelfUrl(e,t,a,n).then(t=>{const n=this._createShelf(e,a,t,null)
this.finalizeSecondaryShelfForDisplay(e,n,a,t),o(n)}).catch(e=>{if(a&&!a.hasExistingContent){const e=new Ez(a.shelfStyle)
e.isHidden=!0,o(e)}else i(e)})}shelfRoute(e){return s(this.supportedNativeGroupingShelfIds)?function(e,t){const n=[]
for(const t of e)n.push(ma(-1,t,void 0))
return n}(this.supportedNativeGroupingShelfIds):va(this.supportedFeaturedContentIds)}static async secondaryGroupingShelfDataForShelfUrl(e,t,n,r){return await m0.secondaryGroupingShelfMediaApiData(e,t,n,r).then(t=>{const r=function(e,t,n){var r
const o=(null===(r=t.relationshipToFetch)||void 0===r?void 0:r.length)>0
let i=L(n)
if(o){const r={}
for(const e of n.data)r[e.id]=e
i=[]
for(const n of t.remainingItems){const o=ie(e,n,t.relationshipToFetch)
s(o)&&(n.relationships[t.relationshipToFetch].data=[r[o.id]]),i.push(n)}}return i}(e,n,t)
return{shelfContents:r,responseTimingValues:t[sm.timingValues]}})}static async secondaryGroupingShelfMediaApiData(e,t,n,r){const o=t.build()
let i
return i=ua(e,t)?new Uz(e,o):Kn(e,n),i?(i.includingAdditionalPlatforms(function(e){return O(e)}(e)),i.includingAttributes(function(e){const t=[lj,YU,eG,N$]
return e.appleSilicon.isSupportEnabled&&t.push(AG),t}(e)),i.usingCustomAttributes($e(e)),i.attributingTo(t.build()),await An(e,i).then(e=>(Jn(n,i.ids),e))):await Promise.reject(new Error(`Could not construct media API request for: ${t}`))}}class v0 extends m0{constructor(){super("GroupingAppEventShelfController"),this.supportedFeaturedContentIds=new Set([519,518])}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:se(t,Uj)}}async secondaryShelfDataForShelfUrl(e,t,n,r){var o
if(!((null===(o=n.recommendationsHref)||void 0===o?void 0:o.length)>0)){const t=[],r=[],o=[]
for(const e of n.remainingItems)switch(e.type){case CU:r.push(e)
break
case jU:o.push(e)
break
case xj:t.push(e)}const i=new Uz(e,t)
We(e,i,t)
const s=new Uz(e,r)
We(e,s,r)
const a=new Uz(e,o)
We(e,a,o)
const c=await Promise.all([this.fetchRemainingItems(e,i),this.fetchRemainingItems(e,s),this.fetchRemainingItems(e,a)]),l={...c[0],...c[1],...c[2]},u=[]
for(const e of n.remainingItems){const t=l[e.id];(0,Tg.isSome)(t)&&u.push(t)}return Jn(n,new Set([...a.ids,...s.ids,...i.ids])),{shelfContents:u}}try{const o=await m0.secondaryGroupingShelfMediaApiData(e,t,n,r),s=_(e,o),a=this.initialShelfDataFromGroupingMediaApiData(e,s)
a.responseTimingValues=o[sm.timingValues]
const c=q(s,qn(0,n.featuredContentId))
return i(c)&&(null==c?void 0:c.length)>0&&(a.shelfTitle=c),a}catch{return{shelfContents:[]}}}async fetchRemainingItems(e,t){const n={}
if(t.ids.size>0){Zn(e,t)
try{await An(e,t).then(e=>{(e=>{for(const t of e.data)n[t.id]=t})(e)})}catch(n){e.console.error("Error fetching remaining items",t.ids)}}return n}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o=518===n.featuredContentId
let i=null
const a=this.initialShelfDataFromGroupingMediaApiData(e,t)
o&&s(a.shelfContents)&&(i=this.personalizedDataResultFromDataItems(e,a.shelfContents))
const c={...n,shouldPersonalizeData:o,personalizedDataResult:i},l=s(a.shelfContents),u=!Y(t,eA)
return!l&&u?(c.recommendationsHref=t.href,c.isValidRecommendationsShelf=!0):c.isValidRecommendationsShelf=l,c}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){const r={...n}
if(s(t.personalizedDataResult)){const e=Zd(n.recoMetricsData,t.personalizedDataResult.processingType,null)
r.recoMetricsData=e}return r}_createShelf(e,t,n,i){var a
if(!ki(e))return null
if(!t.isValidRecommendationsShelf)return null
const c={pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:t.metricsPageInformation.recoMetricsData}
let l=n.shelfContents
s(t.personalizedDataResult)&&t.isFirstRender&&(l=t.personalizedDataResult.personalizedData)
const u=[]
for(const e of l)r(e.attributes)||Wn(t)?(t.isDeferring=!0,t.remainingItems.push(e)):u.push(e)
const d=$i(e,u,null,!1,!1,c,!1,!0,t.isArcadePage,!1)
kn(d.nextAppEventPromotionStartDate,null==i?void 0:i.refreshController)
const f=d.appPromotions,p=new Ez(uC)
return p.isHorizontal=!0,p.title=null!==(a=n.shelfTitle)&&void 0!==a?a:t.title,p.items=f,o(p.items)&&t.isFirstRender&&oa(e,p,t,t.featuredContentId),p.url=Yn(p,t),o(p.items)&&o(p.url)?t.isFirstRender?null:v0.makeHiddenShelf(t):p}personalizedDataResultFromDataItems(e,t){const n=new Set
for(const e of t){const t=d(e,NF);(null==t?void 0:t.length)>0&&n.add(t)}const r=vr(e,n)
return gr(e,tA,t,!1,r,null,null,null,!0)}static makeHiddenShelf(e){const t=new Ez(e.shelfStyle)
return t.isHidden=!0,t}}class y0 extends m0{constructor(){super("GroupingArcadeFooterShelfController"),this.supportedFeaturedContentIds=new Set([-1]),this.supportedNativeGroupingShelfIds=new Set([1])}shouldImpressShelf(){return!1}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:M(t),responseTimingValues:null}}async secondaryShelfDataForShelfUrl(e,t,n,r){const o=jf(e,this.numberOfIconsForArcadeAppGrid(e.client.deviceType))
return await An(e,o).then(t=>{const n=this.initialShelfDataFromGroupingMediaApiData(e,t)
return n.responseTimingValues=t[sm.timingValues],n})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o={...n,shouldIncludeShelfUrl:n.isFirstRender}
return o.showingPlaceholders=n.isFirstRender,o}_createShelf(e,t,n,o){const i=new xV,a=new Ez(Sk)
a.items=[i]
const c={targetType:qy,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,title:e.loc.string(rD),id:t.id,kind:zy,softwareType:QG}
pf(e,i,c),ef(0,c,c.title),i.buttonAction=Ff(e,sN,t.metricsPageInformation,t.metricsLocationTracker)
const l={targetType:Nj,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,title:i.buttonAction.title,id:mv,kind:Nj,softwareType:QG}
pf(e,i.buttonAction,l),nf(c.locationTracker)
const u=e.bag.termsAndConditionsURL
if(!r(u)&&"tv"!==e.client.deviceType){const t=e.loc.string(Pk),n=new OH(u),r=new zq(t)
r.clickAction=n,r.presentationStyle=[_D,LD,xD],i.footnote=r}if(a.background={type:_U,color:G(qC)},s(n.shelfContents)){const r={pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker}
i.icons=Bu(e,n.shelfContents,r,{useCase:2})}else i.icons=[]
return t.shouldIncludeShelfUrl&&(a.url=zn(t)),a}numberOfIconsForArcadeAppGrid(e){return e===Lj?9:20}}class A0 extends m0{constructor(){super("GroupingBrickShelfController"),this.supportedFeaturedContentIds=new Set([421,422,423,261])}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:se(t,QU)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await m0.secondaryGroupingShelfDataForShelfUrl(e,t,n,r).then(e=>({shelfContents:nr(e.shelfContents,se(n.featuredContentData,QU))}))}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,o){let i=z(t,"suppressText")
r(i)&&(i=!0)
const s={...n,showSupplementaryText:!i}
return s.clientIdentifierOverride=Jt(e,t),s}_createShelf(e,t,r,s){const a=[],c=[],u=d(t.featuredContentData.attributes,XU)===PB
let p
if(u){p=new Ez(ND)
const n=f(t.featuredContentData.attributes,"layoutStyle.layoutSize")
p.rowsPerColumn=null!=n?n:function(e){return e.client.isPhone?2:1}(e),of(t.metricsLocationTracker).name=nA}else p=new Ez($F)
p.isHorizontal=!0
for(const n of r.shelfContents){const r=A0.createBrick(e,n,u,t.metricsPageInformation,t.metricsLocationTracker,t,s)
r?(a.push(r),af(t.metricsLocationTracker)):c.push(n)}if(i(t.presentationHints)&&(p.presentationHints=t.presentationHints),i(t.showSupplementaryText)&&(p.presentationHints={...p.presentationHints,showSupplementaryText:t.showSupplementaryText}),delete t.maxItemCount,i(n(t.featuredContentData,"relationships.children.data"))&&(t.featuredContentData.relationships[QU].data=c),p.title=t.title,p.subtitle=t.subtitle,u){const e=f(t.featuredContentData.attributes,Rk)
p.items=a.slice(0,null!=e?e:a.length)}else p.items=a
const h=l(t.featuredContentData.attributes,rA)
if(u&&h){const n=new Ez(ND)
n.items=this.sortCategories(e,a),n.presentationHints={isSeeAllContext:!0}
const r=new xz([n])
r.title=t.title
const o=new _q(Vj)
o.title=e.loc.string(xU),o.pageData=r,p.seeAllAction=o,xf(e,o,null,{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker})}const w=p&&o(p.items)&&t.isFirstRender
if(w&&oa(e,p,t,t.featuredContentId),!w&&A0.shouldDisplayChooseYourFavoritesBrick(e,t,u,s)){const n=A0.createChooseYourFavoritesBrick(e,t.metricsPageInformation,t.metricsLocationTracker)
p.items.splice(0,0,n)}return t.presentationHints=p.presentationHints,p.url=Yn(p,t),p}static shouldDisplayChooseYourFavoritesBrick(e,t,n,r){return t.isArcadePage&&n&&e.featureFlags.isEnabled("arcade_choose_your_favorites_brick_Future")&&(0,Tg.isSome)(null==r?void 0:r.additionalShelfParameters)&&((null==r?void 0:r.additionalShelfParameters.isSubscribed)===GG||(null==r?void 0:r.additionalShelfParameters.isTrialEnrolled)===GG)}static createBrick(e,t,n,r,o,s,a){const c={targetType:n?IB:$F,pageInformation:r,locationTracker:o,recoMetricsData:$(t)},l=tr(e,t,s,!1,null,c,a)
if(!l)return null
const u=new cz,d={useCase:18}
if(n){const t=Uu(e,l.content,pm.categoryBreakout,Ug.Density1)
u.artworks=t}else if(l.artwork&&261!==(null==s?void 0:s.featuredContentId)){let t=p(l.artwork,wk)
t||(t=p(l.artwork,"originalFlowcaseBrick"))
const n=Xn(e,t,d)
u.artworks=[n]}else{const n=er(e,t,1060,520,d)
u.artworks=[n]}u.accessibilityLabel=l.title,u.shortEditorialDescription=l.title,u.clickAction=l.action,435===J(t,mB)&&(u.personalizationStyle=vx)
const f=ie(e,t,Uj)
if(i(f)){const n=Rf(e,f,c)
u.flowPreviewActionsConfiguration=hs(e,t,!0,null==s?void 0:s.clientIdentifierOverride,u.clickAction,c,n)}return pf(e,u,vf(e,t,l.title,c)),u.artworkSafeArea=zV.defaultTileArtworkSafeArea,u.textSafeArea=zV.defaultTileTextSafeArea,u.isValid()?u:null}static createChooseYourFavoritesBrick(e,t,n){const r=new cz,o=new AV("",1060,520,[],F("efac78"))
r.artworks=[o]
const i=e.loc.string("ARCADE_CHOOSE_YOUR_FAVORITES_BRICK_TITLE")
r.accessibilityLabel=i,r.shortEditorialDescription=i
const s=new _q(C$)
var a
return s.presentationContext=WB,s.pageData=Ej,r.clickAction=s,pf(e,r,(a={targetType:$F,pageInformation:t,locationTracker:n,recoMetricsData:null},yg.context("impressionOptionsForArcadeChooseYourFavoritesBrick",()=>({...a,id:"",kind:null,softwareType:null,title:"choose_your_games_brick"})))),r.artworkSafeArea=zV.defaultTileArtworkSafeArea,r.textSafeArea=zV.defaultTileTextSafeArea,r}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){const r={...n}
return d(t.featuredContentData.attributes,XU)===PB&&(r.title=nA),r}sortCategories(e,t){return t.sort((t,n)=>{try{return t.shortEditorialDescription.localeCompare(n.shortEditorialDescription,e.loc.safeIdentifier,{usage:zU})}catch(e){return 0}})}}class T0 extends m0{constructor(){super("GroupingRibbonBarShelfController"),this.supportedFeaturedContentIds=new Set([556])}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:se(t,Uj)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await m0.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}_createShelf(e,t,n,o){var i
const s=[],a=new Ez(Ck)
a.isHorizontal=!0
const c=lt(e,e.bag.arcadeCategoryBarSAGUpliftDisplayRate)
if(t.isArcadePage&&t.isFirstRender&&c){const n=T0.createSeeAllGamesRibbonItem(e,t.metricsPageInformation,t.metricsLocationTracker)
s.push(n),af(t.metricsLocationTracker)}let l=null!==(i=n.shelfContents)&&void 0!==i?i:[];(0,Tg.isSome)(t.initialHydratedItems)&&t.initialHydratedItems.length>0&&(l=t.initialHydratedItems.concat(l))
const u=[]
let d=!1
for(const n of l){if(r(n.attributes)||Wn(t)){t.isDeferring=!0,t.remainingItems.push(n),T0.shouldPriorizeItemWithData(e,n)&&(d=!0)
continue}const i=T0.createRibbonItem(e,n,t.metricsPageInformation,t.metricsLocationTracker,t,o);(0,Tg.isSome)(i)&&(T0.shouldPriorizeItemWithData(e,n)?s.unshift(i):s.push(i),u.push(n)),af(t.metricsLocationTracker)}return a.items=s,d&&u.length>0&&(t.initialHydratedItems=u),a.url=Yn(a,t),a}static createRibbonItem(e,t,n,r,o,i){var s,a
const c={targetType:H$,pageInformation:n,locationTracker:r,recoMetricsData:$(t)},l=tr(e,t,o,!1,null,c,i),u=Rf(e,t,c)
u.targetType=c.targetType
const d=Iu(e,t,u,null==o?void 0:o.clientIdentifierOverride),f=null!==(s=null==l?void 0:l.action)&&void 0!==s?s:d,p=Rd(e,t,jj),h=null!==(a=null==l?void 0:l.title)&&void 0!==a?a:p,w=new az(h,f),g=Vn(e,t)
let m
if((0,Tg.isSome)(g))m=Fu(e,g,{useCase:29})
else{let t
t=o.isArcadePage?"resource://arcade-ribbon-bar-fallback-icon":"resource://appstore-ribbon-bar-fallback-icon",m=ce(e,t,36,36)}return w.artwork=m,w.accessibilityLabel=h,pf(e,w,vf(e,t,h,c)),w.isValid()?w:null}static createSeeAllGamesRibbonItem(e,t,n){const r=e.loc.string("Arcade.CategoryBar.AllGames.Title"),o=Ff(e,sN,t,n,r,Tk,zG,H$)
let i
if(e.props.enabled("supressFlowPreviewForArcadeAllGamesRibbonItem"))i=new az(r,o)
else{const e=new EH([o]),t=new EH([e])
i=new az(r,t)}const s=ce(e,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACACAYAAADHy7H2AAABdWlDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokXWQvUvDUBTFT6tS0DqIDh0cMolD1NIKdnFoKxRFMFQFq1OafgltfCQpUnETVyn4H1jBWXCwiFRwcXAQRAcR3Zw6KbhoeN6XVNoi3sfl/Ticc7lcwBtQGSv2AijplpFMxKS11Lrke4OHnlOqZrKooiwK/v276/PR9d5PiFlNu3YQ2U9cl84ul3aeAlN//V3Vn8maGv3f1EGNGRbgkYmVbYsJ3iUeMWgp4qrgvMvHgtMunzuelWSc+JZY0gpqhrhJLKc79HwHl4plrbWD2N6f1VeXxRzqUcxhEyYYilBRgQQF4X/8044/ji1yV2BQLo8CLMpESRETssTz0KFhEjJxCEHqkLhz634PrfvJbW3vFZhtcM4v2tpCAzidoZPV29p4BBgaAG7qTDVUR+qh9uZywPsJMJgChu8os2HmwiF3e38M6Hvh/GMM8B0CdpXzryPO7RqFn4Er/QcXKWq8UwZBywAAAARjSUNQDA0AAW4D4+8AAAB4ZVhJZk1NACoAAAAIAAUBEgADAAAAAQABAAABGgAFAAAAAQAAAEoBGwAFAAAAAQAAAFIBKAADAAAAAQACAACHaQAEAAAAAQAAAFoAAAAAAAAASAAAAAEAAABIAAAAAQACoAIABAAAAAEAAACCoAMABAAAAAEAAACAAAAAACBAcQEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAIGaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4yMTk2PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjIxNjA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KIUPY5gAAGmtJREFUeAHtXXuMJMV5r+qZ2Qe7h299bA7O3B0GGwOXBwEsbMXCC1H+QJjHgpbHEcyBEiLl4cgJxLKElIkUS4DtQCCSpZOSEAx3hjW+YwmclAfa4MQScfBL2Tg5ED5uyfFYw0Lu9nZvHl35/b7qmu3Z65numZ3dndnpupvt7np+31e/+qq6uuorpVKXSiCVQCqBVAKpBFIJpBJIJZBKIJVAKoF6EtD1ApcbZpRa0fxJHwpAMe3hVprfleS1ZRVlRkayqr8/ozbPa7Wh36gTW3118KBRw8NG7djR2sqamrJ0D73mqdmztRqY8QQKc8M+yirpfN5fSWgYA/zdOJarKnfoNQNabLkrwe/MjFbnnqvV9LRXkfGm+bLOT5ZaweuygWCuvLKXhOgDB060gqDl5mHyylNTY6SpoMfHy8vNL5ze5PPIe2pF8g6X08i9GRvrUacf0/qR5cm/aSCIUA5N9uhHJxcc4ebma7aoTHabMmYLNPZpaDcbAJE+hGfg13RZLn939Y0xnucVlPGPI/9ZlPUO7t9Qpb7XUfnHXDyza6QvTJ/zb+YqgD9woAAmRLuhAvpVdmG70t6ZyujTkecQaBnwld/jad0yXgNayyjjBCB+FGX8HH5vqkJxWo8/e9jxIoCYmfH1ZHMaoimCTR7dgJr0dV755o6xYVUo3YiKvgJEfgJyolAAANWjPKuxhdimSnJsLrm6jgY6GuVSHc/jbhbiP4xq+gGENqH37vtHpjK7dgEMj1bAuiSnRI8EgdN45pbRzyDX6wDyS5D4LFw/jDIHlNYefja/leCVOVt+i7gj2N/B7xXw+qLKZZ/Uj40LKAgINIYCwhpyDZNs7rorp3fvJjHK3Dx6p9LmbuXp86XSSajvs5oYTrXMSqIvZcRLSxwydCIH0lABymThw58UpMrl4xDQ8ypT/rJ+fOLV5WgGJ1gzduWwyvU+AAauA68bAQBwB5aMKYOeEoq2/LaQz4qwOCYBZ/ixZWVQak5D7Qjrvoj4Z/B/WD+x/yFcVRi4fE7imHlixwGhUz1m57V/CUK+IML3/XmQeYI1LjVkQDDIRNVL/ga1whsE0xvRws8n+yMWo8KFuxP6uWcXbiPhr0iDCRApi7JOUdlMRpXK00iyC9rhhWbA4Pg1t157AYh/Gt3eeQAZKxxdklQ8LsIjKygkS0un47eaboYt5WWRLysbKyOXOa+ShhLlP2SIH3lmmTkIfQCNERSZx1Qx+9vUCA7ACE/kyEAiZzgI4xsAnNl53UMqm/0CxF6EBkAfrUogrQe13YP7HpCHrgPjAotgkEgcoOO0fad9to8MQqDghF2rPCM9gYSfe+YVz4xHvyDfIF4GVwhDyu1FIHk6BhB8gJa7FTL/trn1+k9xrMBuAmGJHMdABL0Zu3obyj2gvAxB8AESUy2TPvLJH8smDSw3+JFGchPQKtfwPdPjORwuz6xOGw+PEkF4DvyQP8uB5pMye3GlvAENM6vK/hy6iM/72eJfw08JGKQL51O8o1ATOSCsH5nPm1tHb0eCR1E4+6HjATEWo4lyWoVI5Mq2nKKocd9Mqb7yp/XfTBwNd21JKDE7R19QWe9yAOs9xOcbAytbGkSS9Csex/JKFcOBbAYNdFCVS3ejm/g6/LTK53WS12kyFesCNTNvdl6FkbH5kiTQAQgokvYRi5DG/gEioIiyxi/PoZ3tUAven0hg4SA1VV1n7ro4xwgCeguC9/FIbWLFzsB2cVb27FuoHU5Aa6HT0F80O2/4OPyMOnIkll+ykggIiGcz0z03Ievz8eMoPFEBLGS1HWsrACdVbRndFwcPNxLI0kXw3bue2/2ynaQx5nehCRiTKjnIsl7CNQ0jJPqkm8hlPoLX6RtIDQf28qofQ1osEKANMuwSmA9e1H5d3g6UKUCwmBuIyX2tgwUR0oqL6HC3o9FcJiQtLHAME+lkgAhWzW2jv4gIv4IfB4bCq80uMlm7eLI+MYhExWhzBTW5JWwytp5jIyAjafnm86ObIMxz2bTg7LDfltK+fy1Q2UkUMd5C/24uFmLPss08kvDhYSuTkvokQM8xgaiEyLjt6ekFWuw8lfPPFBKPHI3FcDwQBgZsnEIZo2ezOQBCe4ogmiq+dPky8DbqYxJl06Xx6tIzO6Kza2NfO4eBhmvYdaOu/K1CrfsGUof0eCDMzVk0efoM5DOIH/vPWITVKXO1g0gr1CWclqlgJaPoyRrqkh+P6Hy9XUDfSZxaylGnmm9LPZiXxlQ/3FPjnPqqy0k8EAYGbPZKnYYsOXKmqqybKcLbz0mXZjaaO6/h9LfCnEg071uutl2BNsMSL5gUk/vO+MO6KXNGIqPVJpKMLt2+TNehP1oY4QRvv22BoD0KkGqns0RTBVnTr+Yx60h37FhVCL3YakLv3IP4tkXvTnPkCxqQF3Nqhfg/y5/EbyUMN/FAGBwMpGH6pJ/l9GhnQYH8BjzoHIa5diRtRwthWSiVt5qOb0pIgVlKbbuU6ljt/WSrO6gh+fKbiN54ICxmY+cN7IBk0bez7sCvtnxE0p23vjuwCESmjIl59x0gMkGbe9bjtZr0RoBQnbJLnoCIjuwfpHoaWAOSAiEW0J2sEWKZq0RIgVARRfRN56qDaH5q+aZAqCEZ+25Ud6BdI2VneqdAqFtv3aIPkrw+1hVUGrheJJBqhPVSk8vkIwXCMgW4XpKnQFgvNblMPlIgLFOA6yV5CoT1UpPL5CMFwjIFuF6Sp0BYLzW5TD5SICxTgOsleQqE9VKTy+Sju4DQPZ8OGoZFdwGhgU8Hss4P4uwW7HQXEBpuJ0zQwQtTGuA3BUIDwlrPUZMDwV8XLQOWG7z4DmKSVe747eAVSl7yxbfxQKgs+4YtBDqsjxVJxotTorfJH9fVl1WxYDe4vhpBWT5vuZqcxN4QE2zkcYCIiN++XpZf2q9I6OKB4JZ9e3oOwuFSf2ydIBwSlrDW0cKAhdE/1Z+z9pQqy/SrCUR0jBMF7tz42ylcLjJh+Q3Wmpu5xYD6d/FAOLrZCsMo2ggoQEpMExZv/RLaKVTDKtnMAi2ewAba0Ek8CADGxgKZwFobIdF5jnx5sl1PLM5JZdFgxkn8hlmLB4Lb+6j020jIVsJ9AXUzDRfQJvdYlS6V+q6zjqZmZ2ttXrH7HgxM2DFNJ+3jIIta9nlmxWCGljrDxp08OalbZ/FAGJgJMtBv4IatJD5Nm9R+QAbpB8286NfpJxZRxsejgRCMiXxP2VFEwD3TdYTjzm+Y+AHZ7wMM/ys019rwG2IovlJ7zrWbQgc3TQNVh4OWFYOvUAlrfSstBDt+YKUT28T/S8iZPZuW16KrOBg7QDA/oqUVOETtEGdHbtgA62UxxH0dw/ppofzcVthH2L27tGiASv8gkF8WBUS3qDaTmd3Harjf8V2A+HtC3uIO75OphS1n8SzkXkI/+xbQwrTRoDk59Zr5hAiELRvAWOvv673P0kor9HhgI7oOdbEaQVrO7CwrHq68Hy3r/3DD7fEwPkG/tnacBOD4gHz+u96z/0cQmFZnnVXTMil3Q7PrgLmg95DuOZ3xepCmRF5Dwm47pjkIgCOd/apYQgdRfpYeYgoogU3qWCAwM1g8PyF2B/dMvIiCngPiOKBKsOteUq/lH2qtHrRsvE+bB4WQsbG+0Nb3aNoqLShzP/rZBcgYecB0RnTs9vC13cIJmNfjtv/n1HkX/b0QNpKMvERAEMG99JKYnINhx7vxO4TZBNpLoBptx4ZCmggCDxZYqdof0Xue+SdnJhDPdR20QVmMiO15+hXg/R4YsuxHAlgdsR1N3cSrHCjCtwiF9Vt9GrTBDOrmXtFstMuc0Ix/IiCQN752iRnbb00cwSBqDGJBgd6HQIgTOgXPe6GNaVbRuXJJQ0AHbDNnswOqWN6LLuGPA1rswDcBYQQDoyHtX6lS8avI61T0MZQX8hdArDG/jgZcjRgLg3FwQwOot+vH9/04eDNKPLPYsLZzBp/NTaPnm4x5XGcyF0F9oiJgRl7DAB/JWn0wOD5YUbCJCGMYtNquzdf1E8+IoU1p4Qn6SqSvODKFjMmPglX2P4KQv4IfbRlyjEGgIIwVsurT0MAk/uG0AvQIOdRBBlr6FYwM7szt3fevYj0/P1l2tJP+OOcEGBevKjxQsbS1qNXO0buN9u+EMM6B9WDbfTC2AJaCopDwv6WOZBtmbMdIwUjJ1gnen43C24F/v+aYhjGtrcjE2iBMKsvgM4UK49y/hLt7UfTleMR5FEHBlldGY3T88L+lzvKLLDnwreSM+X5W9mF471XHyvfpCZgYXi0z/Y6KxVdKsE3DjtnSZyGDSxF+Pn4fAXE018uBC8HBltpqh/GJwakx+igynsH1Z3j+iSrr7+on9/2UhQld4+NFCGtZNYPEWo2N8U1C3jbMbVd/VJUzn0URF+J3NkJ/AddTUQrMC0Ej2YEbvFrmSD/VPFU/p/rfRBn/A2h+X/WbSdqYZknNgoBpF+HFpwadPcXlEE5xOflgDDnxZMg7RRVP6VWZEx5U17LKqiItA42Yy5RUrjyvtl00t/QtgK9MPF+qMp1clbj5BwEWvlG48yrCOSGMpgf7wWuupbyykIH+sppTBTUwcDxS1jipRs0NF924JkxX0vuWVA6EkAGROcXvEkNDpShBJSWomXgCyHfxVvPWIDVPWbVAC9SjQwDBsQin35dZAfXKqRUmA0HMjkr4zEzRnaFRK34S/5YAYWlBUjGc3+apZLOzK1KGfD3cglPkpnCGBL4boJBlqf+lPCR9DroNT9EA15EV5pen5o2M+PySuFb8JpVLGi+VQCqBVAKpBFIJpBJYHxJYkYFcOlhcAXBwaV0wWFz6utyK0loChPT1sbVHD8dVbNu9Pq7phFJ/L05lObGgtk1gQkk+NFXkl04oVUSR+KZpjVA1xcyDwjf2XYYp5k+h5PPwSzLFzLL57i9Xvo/jxj3DuzIv4OLRT1wQKXKKuYAp5t6VnmLeecPZmLe6DMQ0MsXs+JAvVHwIXBXPITm4cF4Zp/2mmDmzxnl30QgHf3gPiNyFejwHVdnAR6eKXAI+cRHn/Gs9O3/5umM/wbgPMfbjz/uQ2ve0b+7T33rmu4zNrqvZ6VdWDPPAH2NuueaX8SX6Xjxejt+m6I9OFQAzWcg5vsJXBrOOnV8oetWthPNP1UcnUMT1INOQxB5V6LkPPB5zdVOVPMEDM2/IVT5D3zZ6Po6gfVy182doo76m9+7/EhlsBgwEAQTEmsJn6Ou4puErWPTRiwoIfYaWcInDeKvkKp+hQWIOdYDP0OVXcLzEHfqJiX9b8c/Q7nxlc/M1l+CI3OchlGHj++GjUByw3HWV5FJphaEK4cKUTB9W7OwFGHaSkGbAIOluvfYBlcndo0ol7uvA52xZCsmyHJ/uyuir4Ryf0IE8cE9jraL+EACKownNGFZjPS8DSpxfCcJc3Lp0Jf48LJqA5yv/5vVnYGXSU/iwPIyVSh+gIAqB+fDHe/5W27lyQ3RAbZZKOC85cwuO9f2LgCCutUzkCBpGxGmwv6eyAgIu2uWaBpQhfVGb8Esc4FO/MVxsewq+gP8dzu6+UO9+uchP5+QhiSMzsU7GAoOD7I+w3sP/GhavfhRL1fgNnF/A1qLiSUk9R5rIm48zEKnGfx8rjH5DxjU447peQoY5zWFuuu4cCPirqljkfknml0hezGO1nAjftvl+0PpznctywcyfBzxgHIdP8glcMsampno52IIwP4M8P4fv7XaZFrHY3o78FaTFaPNFIXV8fEGAXY/uodesXDycg53JADhchqcS7Kevl+kKh9mteb3Qgsexcukq1Vu+SkqcTFZuLBAANlljINlpM4pxAU8Osy0kUe+TjJAVikWgYo8T1i8q9UmMbX4VHkYdOsSVzZGOIKFalQPRtQboRaNkk/W0kVmuimewWi6L67zOZqG4/WtYMNcquG6uHiGxQFB3XZyVg6a56kepi4OegN1EfNp6Ja9WGLUWV/na171PS7GVjb0RRLjT1U0Pl93x0FN2LaL52ln9OdpwxSY/n+rrEnPL1TyrEzu/Aw0nD9F/4iuzsMEOsLZs2oYstqIfsjm5kqPzbR9f2nPQ2H/Bv0rbY36HXsOCX1u5JxE6Pe1kciEGxQxuf73nmLDdA/Z5+iW812zHC8VWCTq4IZYHx7TL6uTr3HBQ5cUzEci181SzneRIP2gmDhTBrIIRdTTvFQMa5uOdxGSFVmu/4gS43YjxDWZ44bCqqSbwg4TRwggC5VLZMJrZjMy4KpkDxQAc4YhtfY/XbTYKc5osqiWpQ0O1eCd/5PCMQPt1Dq/ConTZJYAA7OJQd7oYIxmMUksYDLNugzsSWG2ERPBeqjsRCJYXowfVcB9XG2OH8MlrKaXVVOwmmKEACDZt5/wlcLG5hxfwAIc7Q2MZvK/l4oHwapDUNwPInHmybdneqFau7eQvUggI0qpXzRe5kzvybGh6C4PCn+Z8A9tYZzlb3cHOCj2QlPh4IFT6zOCDEiAgZdkCk5azpvFYuQEBGZXrsRMsH4sgybWakRFum2M8gN6yGxG7nb0sv+GPgDHUxgPBZeB1pEAc9e7KV6t4CI8wusO7fDV26Tvr6pvE9Zs4YmdJIKW2UQmkQIiV2LrQhLFcdhcQ4juFisAwOJDYbnBRCVinN90FhG6p1SbA2l1AaEJA3ZIkBUK31HQMnykQYgTULcEpELqlpmP4TIEQI6BuCU6B0C01HcNnCoQYAXVLcAqEbqnpGD5TIMQIqFuCUyB0S03H8JkCIUZA3RKcAqFGTWMtVld9mUiBUAMIzruBD5YuSUdeUyDEVlsHr1CK5W0xQgqERVlE3nXomkXLi04O4uRA8GU/A5eBdrK2xEYXY/ctRFZ73vrSrK8cm8f9csmFGZnlmnrW47WasHgguLOhPb1g1/lj6VbnDaQC8OJsJy3WTlRwqmO1NPJ2gChmdjSOD1bJF39WZ7SGT8H6ZcuJsccfJyAnHgib3ZHAPu0hYPNrh42nq8b+eh6G9GFVBK6yTF+e5A/QYipb5nl8sGwSWQzvkDtyjHrlRdO4h3V/mq+ShPN213ggLO4c5hmC3BnMTbF1M3WZt9VVKlW/7w65UDMz0Xs4jzxrN/362p6Z2Hnaj3XDA09xsTzI+suYDj0eCG7vo2/eRM7OSkonAYG0Cp8wlPAW7pW0epq7j3KzZ1uRaWNPve0kTi3l4AubkXy/gObKOlPqxjGP2i6KXednd/24p6jr3JwVWE/msCqZd6AuN9uxQlTktvTj8Naenq6DkQEO+dCPHMAYoI7TeqpOaHsG2YE8BsOG2/pgds+bFkKtfYQ6g+Qkm2Dt7melH9v3LiB1MOg3NTdAtr2zLYRvADQ2hfOE9MtC86GsVf9RDLguwy//ByzGua4wKmZb+qFafFiTI20/VUXvDSFySwvsI4jtpMAAFeT6z7TGAcT14L7c9i+SFqz8S+tih1SP+RcRTF8fLb5EOncsjt478RPw+GNEsqYA8NABjvv50A2SWPMCjYdZmmt0gyGG4scINrJVK8Xckyjkv6FyqHrqqppQGat+K/VvK46nt2YCyydP6Uf3vy+2IisCiiaN5oUlxJhv4OBP3pbr97DR+ayyLzlegMYegkGtN2A752mWL6aScd51HC2JgEBkmV27+nB9Txn/gSDTUyAcWiyzAIwraRXD5QWBHQJed7WXGQDN/6mKOUt3z9FYALvDyfTeZ/4WBjsnoWo3gkm+k7NHtBBbRX7qFmWp4V+2fpyoh27B6Af14xOvCq1btsTyy/wTAYERFU5YF9t9FI5RD0M4tEwGIWPixQTawYHCXSVh6I8l2nq4OLX8wuHuninj4kMM+EfjWbCb5G1EPz+L1vFbAPEx0QY0RJnAVeYTcrnbYatxGjaYPsw8UTwFbodlji53XZqvo9VdGe7uw2ncvQtbGs/lG4onlcxnmQEVK3dZlcsNQht8U+/dZw2M5kcySc92CBftiqt5lSPoYa6NEWDd8yGooT+UwaPv44BqAQRbDF9VZG42EBdjyzytna519+TBysVeOf6kOVk6N60b3oDqwl2YROQfJpeBS3DPkdIAgJqRCjR6FwTzgjMfjLDEzvGLE2AvAE3fhtlh2J8uc2x0HKW6lkaS2aBCsnQ8ktZqHuxz2H/pPcljGscvnwOeOafBf4s8s8wc6mBApF72vwnNR9Cz0YrhdKZO4kLEJ4kOCtB/OtVpbrn2DhBxN34XSD9MGPgyk8FWR0HZCmrxpAyKCQAjAyNUgsnChz/IDL9ymbOHBzCv8mWNE9/NH1zZG/u6WIN9J1AxVedl7kc1wNakNyTVTlZxLC/oKaFYxy8hwcpqnVvUPwRcBuXhPGiUyDPLOXg35hAKfVjv2fcgC3WG03mf1DUMBGZszbqO+FQ7ENSw6indCGKuADGfQCgNONEoZ08wSGMSCqd1zomZwBPVaOaROWwR493ZmB8CDBP6if3/wAJlbBNxUm0jxISBZG69/tcg/FGUdQnyOAtXWJqDBtKoFYKQbiV4Zb7CL76XwPAPfu/g9wqUx4so9ym95zuv45nmgxvSBExD1zTJ0ocemsRxwJOVDxuwbLpFZbLbQPAWkASbwGoDiuAbBs5LDqtIKbv5P2LGycNA1UfL17Mo6x0MCN9Qpb7XORZwGTfTHbi0S69ije3SA0WdFy1Hgfer7MJ2tMozURmnIz4MV0FFa8M3DrbcVjq8tcAMsIeZXaPeRcUfUYXitB5/9rArhADgtLl7/XX+Sa9NA8EV4MzVtfocZpd/o1c0Go0pVYKvAFC4frzRbCLjC/hhl3ol8o4sMIGnAOD0Y7rZrs8VsWwguIzcOUpq8zz0QD/eJbb6cirZML7t0+3Y4RS6S9L8dWrK0s2pU34bGJixLXBu2Ec5paQj5WYJELD9zl1ZVThoZyhZ7tBrBrTY9/VW8koiye8MjhzmEcu0DOtkvGm+rPN28N4sLy5dy4DgMgxfUfMrmj/LQgGtA1iY+CbuV5rfduK1CfGkSVIJpBJIJZBKIJVAKoFUAqkEUgmkEuhoCfw/vJfHMO4YqncAAAAASUVORK5CYII=",36,36)
var a
return i.artwork=s,i.accessibilityLabel=r,pf(e,i,(a={targetType:H$,pageInformation:t,locationTracker:n,recoMetricsData:null},yg.context("impressionOptionsForArcadeSeeAllGamesRibbonItem",()=>({...a,id:Tk,idType:zG,kind:null,softwareType:null,title:"All Games"})))),i}static shouldPriorizeItemWithData(e,t){var n,r
return null!==(r=null===(n=e.userDefaults)||void 0===n?void 0:n.bool(PA))&&void 0!==r&&r&&e.bag.ribbonBarVisionEditorialItemIds.includes(t.id)&&e.bag.enableDeviceDrivenDiscoveryContent}}class b0 extends m0{constructor(){super("GroupingCategoryShelfController"),this.supportedFeaturedContentIds=new Set([425])}initialShelfDataFromGroupingMediaApiData(e,t){const n=ie(e,t,QU)
return n?{shelfContents:se(n,QU)}:{shelfContents:[]}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await m0.secondaryGroupingShelfDataForShelfUrl(e,t,n,r).then(t=>{const r=ie(e,n.featuredContentData,QU)
return r?{shelfContents:nr(t.shelfContents,se(r,QU))}:{shelfContents:[]}})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}_createShelf(e,t,n,i){var a
if(o(n.shelfContents))return null
const c=[]
let u=!1
for(const o of n.shelfContents){const n=ie(e,o,V$)
if(r(n))continue
const a=ir(0,n)
if(r(o.attributes)||r(n.attributes)||Wn(t)){t.isDeferring=!0,t.remainingItems.push(n)
continue}const d={targetType:oA,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:$(o)},f=Iu(e,n,{...d,id:a},t.clientIdentifierOverride)
pf(e,f,{...d,kind:aj,softwareType:l(null==i?void 0:i.isArcadePage)?QG:null,title:f.title,id:a})
const p=H(n,_j)
p.width>p.height&&(u=!0),s(p)&&(f.artwork=Fu(e,p,{allowingTransparency:!0,useCase:20})),c.push(f),af(t.metricsLocationTracker)}const d=this.shelfForCategoryActions(e,c,t)
if(d.title=t.title,d.subtitle=t.subtitle,d.url=Yn(d,t),u){const e=null!==(a=d.presentationHints)&&void 0!==a?a:{}
d.presentationHints={...e,itemsHaveRectangularArtwork:!0}}return d}shelfForCategoryActions(e,t,n){const r=new Ez(CG)
let o
switch(e.client.deviceType){case"tv":r.isHorizontal=!0,o=8
break
case Mj:r.isHorizontal=!1,o=null
break
default:r.isHorizontal=!1,o=6}if(null!==o&&t.length>o){r.items=t.slice(0,o)
const i=new _q(Vj)
i.title=e.loc.string(xU),xf(e,i,null,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker}),r.seeAllAction=i
const s=new Ez(CG)
s.isHorizontal=!1,this.sortCategories(e,t),s.items=t
const a=new xz([s])
a.title=e.loc.string("PAGE_TITLE_CATEGORIES"),i.pageData=a}else r.items=t
return r}sortCategories(e,t){t.sort((t,n)=>{try{return t.title.localeCompare(n.title,e.loc.safeIdentifier,{usage:zU})}catch(e){return 0}})}}class S0 extends m0{constructor(){super("GroupingEditorialCardShelfController"),this.supportedFeaturedContentIds=new Set([415,416,501,417,258])}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:se(t,QU)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await m0.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}_createShelf(e,t,n,r){const i=new Ez("editorialCard")
i.isHorizontal=!0
const s=this.personalizationDataContainerForEditorialCardItemsDataArray(e,n.shelfContents),a=[]
for(const i of n.shelfContents){const n=S0.makeEditorialCard(e,i,s,r,t)
!o(n)&&n.isValid()&&(a.push(n),af(t.metricsLocationTracker))}return delete t.maxItemCount,i.items=a,i.url=Yn(i,t),i}static makeEditorialCard(e,t,n,o,s){var a,c,l
const u={targetType:aN,pageInformation:null==s?void 0:s.metricsPageInformation,locationTracker:null==s?void 0:s.metricsLocationTracker,recoMetricsData:$(t),id:t.id,idType:HM},f=J(t,mB),h=tr(e,t,s,501===f,n,u,o,()=>{null==s||s.remainingItems.push(t)})
if(!h)return null;(null===(c=null===(a=h.content)||void 0===a?void 0:a.id)||void 0===c?void 0:c.length)>0&&(u.id=h.content.id,u.idType=tj,u.adamId=h.content.id)
const w=new iz
let g=q(t,"designBadge")
g||(g=h.caption),w.caption=g
let m=q(t,VG)
m||(m=h.title),w.title=m
let v=sr(q(t,Dk))
v||(v=h.subtitle),w.subtitle=v
const y={useCase:19,withJoeColorPlaceholder:!0}
if(h.artwork&&258!==(null==s?void 0:s.featuredContentId)){let t=p(h.artwork,wk)
r(t)&&i(h.appEvent)&&(t=p(h.artwork,"eventCard")),w.artwork=Xn(e,t,y)}else w.artwork=er(e,t,416,204,y)
if(w.clickAction=h.action,i(h.appEvent)&&(w.appEventFormattedDates=h.appEvent.formattedDates),w.lockup=h.lockup,i(w.artwork)&&i(w.artwork.backgroundColor)){const e=U(w.artwork.backgroundColor)
if(w.mediaOverlayStyle=e?bj:_G,i(w.lockup)&&i(w.lockup.offerDisplayProperties)){const t=e?bj:_G
w.lockup.offerDisplayProperties=w.lockup.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,tB,t)}}w.adamId=d(h.content,"id")
const A=ie(e,t,Uj)
if(i(A)){const n=Rf(e,A,u)
n.targetType=u.targetType,w.flowPreviewActionsConfiguration=hs(e,t,!1,null==s?void 0:s.clientIdentifierOverride,w.clickAction,u,n)}const T=vf(e,null!==(l=h.content)&&void 0!==l?l:t,h.title,u)
if(i(h.onDevicePersonalizationDataProcessingType)){const e=Zd(T.recoMetricsData,h.onDevicePersonalizationDataProcessingType,null)
T.recoMetricsData=e}return i(h.appEvent)&&(T.inAppEventId=h.appEvent.appEventId,i(h.appEvent.lockup)&&(T.relatedSubjectIds=[h.appEvent.lockup.adamId])),i(s)&&pf(e,w,T),w}personalizationDataContainerForEditorialCardItemsDataArray(e,t){var n,r
if(!mr(e))return null
const o=new Set
for(const e of t){const t=501===J(e,mB),i=(null===(n=d(e,gj))||void 0===n?void 0:n.length)>0,s=(null===(r=q(e,iA))||void 0===r?void 0:r.length)>0,a=ne(e,Uj,!1)
if(t&&!i&&!s&&a){const t=se(e,Uj)
for(const e of t){const t=d(e,NF);(null==t?void 0:t.length)>0&&o.add(t)}}}return vr(e,o)}}class P0 extends m0{constructor(){super("GroupingEditorialStoryCardShelfController"),this.supportedFeaturedContentIds=new Set([475])}shelfRoute(e){return va(this.supportedFeaturedContentIds,["shelfContentType=editorialStoryCard"])}_supports(e,t,n,r){return!!super._supports(e,t,n,r)&&or(0,q(t,XU))===_k}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:se(t,QU)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await m0.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o={...n},i=q(t,XU)
return o.shelfStyle=or(0,i),o}_createShelf(e,t,n,r){const i=[]
for(const r of n.shelfContents){if(!K(r)||Wn(t)){t.remainingItems.push(r),t.isDeferring=!0
continue}const n=P0.makeStoryCard(e,r,t)
o(n)||(i.push(n),af(t.metricsLocationTracker))}const s=new Ez(t.shelfStyle)
return s.title=t.title,s.items=i,s.isHorizontal=!0,s.background={type:DD},s.url=Yn(s,t),s.isHorizontal=!0,s}static makeStoryCard(e,t,n){let s=H(t,"editorialArtwork.subscriptionHero")
o(s)&&(s=H(t,yx))
const a=Fu(e,s,{cropCode:"fn",withJoeColorPlaceholder:!0,useCase:16})
if(r(a))return null
const c=q(t,KB),l=q(t,MG),u=q(t,vk),d=new Rz(c,a,null,l,{type:TG,title:l},u),f=To(e,t,null,new AJ(null==n?void 0:n.metricsPageInformation,null==n?void 0:n.metricsLocationTracker))
i(f)&&(d.clickAction=f.clickAction)
const p=U(a.backgroundColor)?bj:_G
return d.shelfBackground={type:_j,artwork:a,style:p},d}}class I0 extends m0{constructor(){super("GroupingGameCenterActivityFeedController"),this.batchGroupKey=vU,this.supportedFeaturedContentIds=new Set([548])}shelfRoute(e){return[...super.shelfRoute(e),{protocol:AW,path:`/${OW}/${PW}/{token}`,query:[pq.isGameCenterActivityFeedShelf]}]}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:[],activities:[]}}async secondaryShelfDataForShelfUrl(e,t,n,r){const o=this.gameCategoryFilter(n.gamesFilter)
return await e.gameCenter.fetchActivityFeedCards(o,20).then(e=>({shelfContents:[],activities:e}))}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}incompleteShelfFetchStrategy(e){return _g.OnPageLoad}_createShelf(e,t,n,r){return t.isFirstRender?this.pendingActivityFeedShelfForGrouping(e,t,null==r?void 0:r.isArcadePage):this.activityFeedShelfForGrouping(e,n,t,null==r?void 0:r.isArcadePage)}pendingActivityFeedShelfForGrouping(e,t,n){if(e.client.deviceType!==Lj&&e.client.deviceType!==Oj)return null
const r=this.activityFeedShelfForGrouping(e,{shelfContents:[],activities:[]},t,n),o=kq.from(zn(t))
return r.url=o.param(pq.isGameCenterActivityFeedShelf,GG).build(),r.isHidden=0===r.items.length,r.batchGroup=this.batchGroupKey,r}activityFeedShelfForGrouping(e,t,n,r){if(e.client.deviceType!==Lj&&e.client.deviceType!==Oj)return null
const o=this.activityFeedShelf(e,t.activities,n,r),i=e.loc.string("Arcade.ActivityFeed.RecentActivity")
return o.header=Uf(e,i),cr(e,o,o.seeAllAction),o.batchGroup=this.batchGroupKey,o.isHidden=0===o.items.length,o}activityFeedShelf(e,t,n,r=!1){const o=new Ez("gameCenterActivityFeedCard")
o.isHorizontal=!0,o.mergeWhenFetched=!0,o.batchGroup=this.batchGroupKey,o.items=t,o.isHidden=0===o.items.length,t.forEach((t,o)=>{const i={id:"friendActivity",idType:rj,targetType:"chiclet",kind:null,softwareType:r?QG:null,title:"",pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker}
pf(e,t,i)
const s=new TH,a=new TH,c=new TH,l=new TH,u=new TH;[{targetId:"playerName",metrics:s},{targetId:"profileImage",metrics:a},{targetId:"leaderboardAchievement",metrics:c},{targetId:Ax,metrics:l},{targetId:t.adamID||"gameIcon",metrics:u}].forEach(t=>function(e,t,n,r,o){const i={actionType:Dj,id:r,idType:rj,location:Xd(0,o,n)},s=Pf(e,r,aj,i)
t.addMetricsData(s)}(e,t.metrics,n.title,t.targetId,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker})),t.profileActionMetrics=s,t.profileAvatarActionMetrics=a,t.leaderboardActionMetrics=c,t.achievementActionMetrics=l,t.appActionMetrics=u,af(n.metricsLocationTracker)})
const i=new WH
return i.title=e.loc.string("Arcade.ActivityFeed.AllActivity",e.loc.string(xU)),xf(e,i,null,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker}),o.seeAllAction=i,o}gameCategoryFilter(e){return e===BD?Lk:e}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){return{...n,title:"Friend Activity",badges:{gameCenter:!0},idType:Wy}}}class C0 extends m0{constructor(){super("GroupingGameCenterPopularWithYourFriendsController"),this.batchGroupKey=vU,this.supportedFeaturedContentIds=new Set([495])}shelfRoute(e){return[...super.shelfRoute(e),{protocol:AW,path:`/${OW}/${PW}/{token}`,query:[pq.isGameCenterPopularWithYourFriendsShelf]}]}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:[]}}async secondaryShelfDataForShelfUrl(e,t,n,r){const o=e.gameCenter.fetchGamesPopularWithFriends(this.gameCategoryFilter(n.gamesFilter),30)
return await o.then(async t=>{const n=t.map(e=>this.gameplayHistoryFromData(e)).sort((e,t)=>t.records.length-e.records.length).filter(t=>this.isCompatibleGameCenterPlatform(e,t.platformId)).map(e=>e.adamId)
if(0===n.length){const e={shelfContents:[]}
return await Promise.resolve(e)}const r=new Uz(e).withIdsOfType(n.slice(0,100),Gj)
return Zn(e,r),await An(e,r,{}).then(e=>({shelfContents:e.data,responseTimingValues:e[sm.timingValues]}))})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}incompleteShelfFetchStrategy(e){return _g.OnPageLoad}_createShelf(e,t,n,r){return t.isFirstRender?this.pendingPopularWithFriendsShelfForGrouping(e,n,t):this.popularWithFriendsShelfForGrouping(e,n,t)}pendingPopularWithFriendsShelfForGrouping(e,t,n){const r=this.popularWithFriendsShelfForGrouping(e,t,n),o=kq.from(zn(n))
return r.url=o.param(pq.isGameCenterPopularWithYourFriendsShelf,GG).build(),r}popularWithFriendsShelfForGrouping(e,t,n){const r=this.popularWithFriendsShelf(e,t.shelfContents,n)
return r.mergeWhenFetched=!0,r.batchGroup=this.batchGroupKey,r.isHidden=0===r.items.length,r.header.title=n.title,r.header.subtitle=n.subtitle,r}popularWithFriendsShelf(e,t,n){const r=n.shelfStyle||nG,o=new Ez(r)
o.isHorizontal=!0
const s=[]
for(let o=0;o<t.length;o++){const a=t[o],c={metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:$(a),anonymizationOptions:{anonymizationString:`"GAME"${o+1}`}},artworkUseCase:$u(0,r),canDisplayArcadeOfferButton:$d(0,r),shouldHideArcadeHeader:e.featureFlags.isEnabled(T$)&&n.isArcadePage,shouldShowFriendsPlayingShowcase:!0},l=Oe(e,a,$$)
if(Y(a,ZG)||!l)continue
const u=hu(e,a,c)
u.clickAction=ya(e,u.clickAction),i(u)&&(s.push(u),af(c.metricsOptions.locationTracker))}let a
switch(e.client.deviceType){case Lj:a=2
break
case Oj:case Mj:case"tv":a=6
break
default:a=0}if(o.header=Uf(e),s.length<a)return o.isHidden=!0,o
if(o.items=s.slice(0,12),o.isHidden=!1,o.batchGroup=vU,s.length>12){const t=new Ez(nG)
t.items=s,t.rowsPerColumn=1
const r=new xz([t])
r.title=n.title
const i=new _q(Vj)
i.title=e.loc.string(xU),i.pageData=r,xf(e,i,null,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker}),cr(e,o,i)}return o}isCompatibleGameCenterPlatform(e,t){return 1===t}gameplayHistoryFromData(e){const t=d(e,$U),n=f(e,"platformId"),r=l(e,xk),o=this.gameplayHistoryRecordFromData(c(e,"records"))
return new GV(t,n,r,o)}gameplayHistoryRecordFromData(e){return e.map(e=>{const t=d(e,"playerId"),n=f(e,"timestamp")
return new jV(t,n)})}gameCategoryFilter(e){return e===BD?Lk:e}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){return{...n,badges:{gameCenter:!0},idType:oU}}}class k0 extends m0{constructor(){super("GroupingGameCenterContinuePlayingShelfController"),this.batchGroupKey="gameCenterContinuePlaying",this.supportedFeaturedContentIds=new Set([500])}_supports(e,t,n,r){return super._supports(e,t,n,r)&&this.supportsVideoCardShelf(e,e.host.platform)}shelfRoute(e){return[...super.shelfRoute(e),{protocol:AW,path:`/${OW}/${PW}/{token}`,query:[pq.isGameCenterContinuePlayingShelf]}]}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:se(t,Uj)}}async secondaryShelfDataForShelfUrl(e,t,n,r){const o=Date.now(),i=this.maximumNumberOfRecentGamesToRequest(),s=e.gameCenter.fetchRecentlyPlayedGamesWithinSeconds(this.gameCategoryFilter(n.gamesFilter),i,e.bag.recentlyPlayedGamesWindowInSeconds)
return await s.then(async t=>{const n=Date.now()
let r
if(e.console.log("grouping-gamecenter-builder: requestForContinuePlaying NATIVE took "+(n-o).toString(10)+" milliseconds."),0===t.length){const e={shelfContents:[]}
return await Promise.resolve(e)}{const n=new Uz(e).withIdsOfType(t.slice(0,this.maximumNumberOfRecentGamesToShow()),Gj)
Zn(e,n),r=An(e,n,{}).then(e=>({shelfContents:e.data,responseTimingValues:e[sm.timingValues]}))}return await r})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}incompleteShelfFetchStrategy(e){return _g.OnPageLoad}_createShelf(e,t,n,r){return t.isFirstRender?this.pendingContinuePlayingForGrouping(e,t):this.continuePlayingShelfForGrouping(e,n.shelfContents,t)}pendingContinuePlayingForGrouping(e,t){const n=this.continuePlayingShelfForGrouping(e,[],t)
if(!n)return null
const r=kq.from(zn(t))
return n.url=r.param(pq.isGameCenterContinuePlayingShelf,GG).build(),n.batchGroup=this.batchGroupKey,n}continuePlayingShelfForGrouping(e,t,n){return yg.context("continuePlayingShelfForGrouping",()=>{const r=this.videoCardContinuePlayingShelf(e,t,n)
return r.mergeWhenFetched=!1,r.batchGroup=this.batchGroupKey,r.isHidden=0===r.items.length,r.header=Uf(e,e.loc.string(sA),n.subtitle),r})}supportsVideoCardShelf(e,t){switch(t){case bU:case kN:case hU:return!0
default:return!1}}videoCardContinuePlayingShelf(e,t,n){return yg.context("videoCardContinuePlayingShelf",()=>{const r=new Ez(aA)
r.isHorizontal=!0,r.batchGroup=this.batchGroupKey
const o=[]
for(const r of t){if(tt(e,r))continue
const t=this.editorialSplashVideoCardForContinuePlaying(e,r,n)
t&&(o.push(t),af(n.metricsLocationTracker))}return r.items=o,r})}editorialSplashVideoCardForContinuePlaying(e,t,n){return yg.context("editorialSplashVideoCardForContinuePlaying",()=>{const r=rf(n.metricsLocationTracker),o={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,targetType:XG,anonymizationOptions:{anonymizationString:`GAME${r}`}},i=e.featureFlags.isEnabled(T$)&&l(n.isArcadePage),s=Od(e,t),a={metricsOptions:o,artworkUseCase:1,offerEnvironment:bj,offerStyle:nj,canDisplayArcadeOfferButton:!0,shouldHideArcadeHeader:i,isSubtitleHidden:s&&!i},c=this.editorialSplashVideoWithTopShelfStill(e,t)
if(!c||!c.preview)return null
const u=hu(e,t,a)
if(!u)return null
u.clickAction=ya(e,u.clickAction)
const d=this.clickActionForVideoCard(e,t,e.host.platform,o,n.clientIdentifierOverride)
if(!d)return null
const f=new sz
f.video=c,f.lockup=u,f.overlayStyle=bj,f.clickAction=d
const p=Rf(e,t,o)
f.flowPreviewActionsConfiguration=hs(e,t,!0,n.clientIdentifierOverride,f.clickAction,o,p)
const h=vf(e,t,u.title,o)
return pf(e,f,h),f})}editorialSplashVideoWithTopShelfStill(e,t){return yg.context("editorialSplashVideoWithTopShelfStill",()=>{let n=null
const r=Pe(e,t,ok)
return i(r)&&(n=Fu(e,r,{withJoeColorPlaceholder:!0,useCase:23,cropCode:"sr"})),gd(e,t,n)})}clickActionForVideoCard(e,t,n,r,o){let i=Iu(e,t,Rf(e,t,r),o)
if(i=ya(e,i),n===kN){const n=new $H(t.id,Tj)
Lf(e,n,{actionType:qN,id:t.id,contextualAdamId:t.id,anonymizationOptions:r.anonymizationOptions,pageInformation:r.pageInformation,locationTracker:r.locationTracker})
const o=new MH(t.id,i)
return o.openAction=n,o.cancelAction=i,o}return i}maximumNumberOfRecentGamesToRequest(){return 200}maximumNumberOfRecentGamesToShow(){return 10}gameCategoryFilter(e){return e===BD?Lk:e}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){return{...n,badges:{gameCenter:!0},idType:oU,title:e.loc.string(sA)}}}class O0 extends m0{constructor(){super("GroupingGameCenterReengagementShelfController"),this.batchGroupKey=vU,this.supportedFeaturedContentIds=new Set([494])}shelfRoute(e){return[...super.shelfRoute(e),{protocol:AW,path:`/${OW}/${PW}/{token}`,query:[pq.isGameCenterReengagementShelf]}]}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:[],achievementData:null,achievementSummaryData:null}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await e.gameCenter.fetchRengagementDataForLocalPlayer().then(async t=>{const n=d(t,$U),r=m(t[Ax]),i=m(t.achievementSummary)
if(o(n)){const e={shelfContents:[],responseTimingValues:null,achievementData:null,achievementSummaryData:null}
return await Promise.resolve(e)}const s=new Uz(e).withIdOfType(n,Gj)
return Zn(e,s),await An(e,s,{}).then(e=>({shelfContents:e.data,responseTimingValues:e[sm.timingValues],achievementData:r,achievementSummaryData:i}))})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}_createShelf(e,t,n,r){return t.isFirstRender?this.pendingGameCenterReengagementShelf(e,n,t,null==r?void 0:r.isArcadePage):this.gameCenterReengagementShelf(e,n,t,null==r?void 0:r.isArcadePage)}pendingGameCenterReengagementShelf(e,t,n,r){const o=this.gameCenterReengagementShelf(e,t,n,r)
if(!o)return null
const i=kq.from(zn(n))
return o.url=i.param(pq.isGameCenterReengagementShelf,GG).build(),o.batchGroup=this.batchGroupKey,o}gameCenterReengagementShelf(e,t,n,r=!1){return yg.context("gameCenterReengagementShelf",()=>{if(!s(t.shelfContents))return null
const o=new Ez("gameCenterReengagement")
o.isHorizontal=!1,o.mergeWhenFetched=!1,o.batchGroup=this.batchGroupKey
const i={id:n.id,kind:null,softwareType:r?QG:null,targetType:Aj,title:cA,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,idType:oU,fcKind:n.featuredContentId,badges:{gameCenter:!0}},a=wd(e,t.shelfContents[0],21)
let c=G("componentBackground"),l=null
s(a)&&(l=a.preview,c=l.backgroundColor)
const u={lockupOptions:{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},offerStyle:nj,artworkUseCase:$u(0,uj),isSubtitleHidden:!0}}
ef(0,i,i.title)
const d=Pu(e,t.shelfContents,u)[0]
d.clickAction=ya(e,d.clickAction),nf(n.metricsLocationTracker)
let f=null
s(d)&&(f=new sW(d.bundleId),f.title=cA,Lf(e,f,i))
const p=e.loc.string("GameCenter.Reengagement.Badge.GameCenter"),h=this.achievementFromData(e,t.achievementData),w=this.achievementCountsFromData(e,t.achievementSummaryData),g=this.shelfMetadataForAchievement(e,h,w),m=new kz("gamecenter.fill",p,g.title,g.subtitle,h,d,c,l,f)
return o.items=[m],pf(e,m,i),o})}achievementStatusFromData(e,t){const n=d(t,tU),r=new BV(n)
return r.percent=f(t,"percent"),r.date=d(t,Mk),r.artwork=new AV(d(t,"artwork.template"),f(t,"artwork.width"),f(t,"artwork.height"),[]),r}achievementFromData(e,t){const n=d(t,"id"),r=d(t,VG),o=d(t,hG),i=this.achievementStatusFromData(e,p(t,"status"))
return new UV(n,r,o,i)}achievementCountsFromData(e,t){return{completed:f(t,"completedAchievements"),total:f(t,"totalAchievements")}}shelfMetadataForAchievement(e,t,n){if(!i(t))return{title:"",subtitle:null}
if(0===n.completed)return{title:e.loc.string("GameCenter.Reengagement.Achievement.First.Title"),subtitle:e.loc.string("GameCenter.Reengagement.Achievement.First.Subtitle")}
switch(t.status.type){case lA:case"hidden":case uA:return{title:e.loc.string("GameCenter.Reengagement.Achievement.KeepPlaying.Title"),subtitle:e.loc.string("GameCenter.Reengagement.Achievement.KeepPlaying.Subtitle")}
case sB:const t=e.loc.stringWithCount("GameCenter.AchievementSummary.TotalToCompleteCount",n.total),r=e.loc.stringWithCount("GameCenter.AchievementSummary.NumberCompletedCount",n.completed),o=e.loc.string("GameCenter.AchievementSummary.CompletedCount.Subtitle").replace("@@completedCount@@",r).replace("@@totalCount@@",t)
return{title:e.loc.string("GameCenter.Reengagement.Achievement.CompletedCount.Title"),subtitle:o}
default:return{title:"",subtitle:null}}}}class E0 extends m0{constructor(){super("GroupingGameCenterSuggestedFriendsController"),this.batchGroupKey=vU,this.supportedFeaturedContentIds=new Set([496])}shelfRoute(e){return[...super.shelfRoute(e),{protocol:AW,path:`/${OW}/${PW}/{token}`,query:[pq.isGameCenterSuggestedFriendsShelf]}]}initialShelfDataFromGroupingMediaApiData(e,t){return{$kind:UD,shelfContents:[],suggestedFriends:[]}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await e.gameCenter.fetchSuggestedFriends(10).then(t=>e.props.enabled(dA)?{$kind:UD,shelfContents:[],suggestedFriends:t}:{$kind:fA,shelfContents:[],suggestedFriends:t})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}incompleteShelfFetchStrategy(e){return _g.OnPageLoad}_createShelf(e,t,n,r){return t.isFirstRender?this.pendingSuggestedFriendsShelfForGrouping(e,t,null==r?void 0:r.isArcadePage):this.suggestedFriendsShelfForGrouping(e,n,t,null==r?void 0:r.isArcadePage)}pendingSuggestedFriendsShelfForGrouping(e,t,n){if(e.client.deviceType!==Lj&&e.client.deviceType!==Oj)return null
const r=this.suggestedFriendsShelfForGrouping(e,{$kind:e.props.enabled(dA)?UD:fA,shelfContents:[],suggestedFriends:[]},t,n),o=kq.from(zn(t))
return r.url=o.param(pq.isGameCenterSuggestedFriendsShelf,GG).build(),r.isHidden=0===r.items.length,r.batchGroup=this.batchGroupKey,r}suggestedFriendsShelfForGrouping(e,t,n,r){if(e.client.deviceType!==Lj&&e.client.deviceType!==Oj)return null
let o
return o=t.$kind===UD?this.suggestedFriendsShelf(e,t.suggestedFriends,n,r):this.legacySuggestedFriendsShelf(e,t.suggestedFriends,n,r),o.header=Uf(e,n.title,n.subtitle),o.batchGroup=this.batchGroupKey,o.isHidden=0===o.items.length,o}suggestedFriendsShelf(e,t,n,r=!1){const o=pA
if(e.client.deviceType!==Lj&&e.client.deviceType!==Oj)return null
const i=new Ez(hA)
i.isHorizontal=!0,i.mergeWhenFetched=!0,i.batchGroup=vU
const s=[]
for(let i=0;i<t.length;i++){const a=`${o}${i+1}`,c=t[i],l=e.loc.string(wA),u=e.loc.string(gA),d={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,id:a,anonymizationOptions:{anonymizationString:a}}
let f,p
c.supportsFriendingViaPush&&c.contactAssociationID?(f={contact:{contactID:c.contactID,contactAssociationID:c.contactAssociationID}},p=!1):(f={messages:{contactID:c.contactID}},p=!0)
const h=new cW(f)
Lf(e,h,{...d,actionType:mA})
const w=new lW(c.contactID)
Lf(e,w,{...d,actionType:vA})
const g={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,title:a,id:a,kind:yA,softwareType:r?QG:null,anonymizationOptions:{anonymizationString:a}},m=new NV(c.contactID,c.fullName,u,l,c.contactID,h,w,p)
pf(e,m,g),s.push(m),af(n.metricsLocationTracker)}return i.items=s,i.isHidden=0===i.items.length,i}legacySuggestedFriendsShelf(e,t,n,r=!1){const o=pA
if(e.client.deviceType!==Lj&&e.client.deviceType!==Oj)return null
const i=new Ez(hA)
i.isHorizontal=!0,i.mergeWhenFetched=!0,i.batchGroup=vU
const s=[]
for(let i=0;i<t.length;i++){const a=`${o}${i+1}`,c=t[i]
c.buttonText=e.loc.string(wA),c.subtitle=e.loc.string(gA)
const l={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,id:a,anonymizationOptions:{anonymizationString:a}}
c.buttonAction=new aW(c.contactId),Lf(e,c.buttonAction,{...l,actionType:mA}),c.removeButtonAction=new lW(c.contactId),Lf(e,c.removeButtonAction,{...l,actionType:vA}),pf(e,c,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,title:a,id:a,kind:yA,softwareType:r?QG:null,anonymizationOptions:{anonymizationString:a}}),s.push(c),af(n.metricsLocationTracker)}return i.items=s,i.isHidden=0===i.items.length,i}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){return{...n,badges:{gameCenter:!0},idType:oU}}}class R0 extends wV{isValid(){const e=void 0!==this.callToActionText&&null!==this.callToActionText&&void 0!==this.clickAction&&null!==this.clickAction,t=void 0!==this.titleText&&null!==this.titleText,n=void 0!==this.lockup&&null!==this.lockup,r=void 0!==this.collectionIcons&&null!==this.collectionIcons
return t&&(n||r||e)}}class D0 extends wV{isValid(){const e=(0,Ag.isSome)(this.collectionIcons)&&this.collectionIcons.length>0,t=(0,Ag.isSome)(this.artwork)&&this.artwork.isValid(),n=(0,Ag.isSome)(this.video)&&this.video.isValid(),r=t||n||e,o=(0,Ag.isSome)(this.overlay)&&this.overlay.isValid()
return r&&o}}class _0 extends wV{constructor(){super(...arguments),this.items=[],this.rtlItems=[]}}class L0 extends hV{constructor(e,t,n){super(),this.card=e,this.shelves=t,this.shareAction=n,this.isIncomplete=!1,this.pageMetrics=new bH,this.pageRenderMetrics={}}}class x0 extends wV{constructor(e,t,n,r,o,i,s){super(),this.details=e,this.displayProperties=n,this.offerButtonAction=r,this.buttonCallToAction=o,this.offerDisplayProperties=t,this.artwork=i,this.video=s}}const M0=G(V_),$0=G(V_),F0=G(V_)
class N0{constructor(){this.index=0,this.todayShelfRecoMetricsData={},this.hasFocusableElements=!1,this.hasNonFocusableElements=!1,this.isResilientDeepLink=!1,this.allowUnpublishedAppEventPreviews=!1}}const B0=[HS,VS,WS,QE]
class U0 extends m0{constructor(){super("GroupingHeroCarouselShelfController"),this.supportedFeaturedContentIds=new Set([480])}_supports(e,t,n,r){return!!super._supports(e,t,n,r)&&q(t,XU)===aN}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:se(t,Uj)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await m0.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}shouldImpressShelf(){return!1}_createShelf(e,t,n,i){if(0!==i.shelves.length)return null
const a=new Ez(PN),c=t.featuredContentData,l={targetType:JG,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:$(c)},u=new _0
u.autoScrollConfiguration={isAutoScrollEnabled:e.bag.heroCarouselAutoScrollDuration>0,autoScrollInterval:e.bag.heroCarouselAutoScrollDuration}
const d=vf(e,c,PN,l)
d.autoAdvanceInterval=u.autoScrollConfiguration.autoScrollInterval,pf(e,a,d),ef(0,d,PN)
for(const i of n.shelfContents){if(r(i.attributes)||Wn(t)){t.isDeferring=!0,t.remainingItems.push(i)
continue}const n=Bd(e,i)
if(Ea(0,i)&&!K(n)){t.isDeferring=!0,t.remainingItems.push(i),t.relationshipToFetch=lG
continue}const s={targetType:UM,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:$(i)},a=Ta(e,i),c=Aa(e,i)
if(o(a.video)&&o(c.artwork))continue
const l=new D0,d=Va(0,i),f=Ja(e,i),p=vf(e,i,f,s)
p.isPreorder=Oe(e,d,ZG),pf(e,l,p),ef(0,p,f)
const h=a.artworkData||c.artworkData,w=a.backgroundColor||c.backgroundColor,g={metricsPageInformation:t.metricsPageInformation,metricsLocationTracker:t.metricsLocationTracker,canDisplayArcadeOfferButton:$d(0,t.shelfStyle),lockupArtworkUseCase:$u(0,t.shelfStyle),isContainedInPreorderExclusiveShelf:497===t.featuredContentId}
l.overlay=za(e,i,g),l.backgroundColor=w,l.titleEffect=Da(0,h),l.artwork=c.artwork,l.video=a.video
const m=Ra(e,i)
Lf(e,m,{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:$(i),targetType:UM,id:i.id}),l.clickAction=m,u.items.push(l),nf(p.locationTracker),af(p.locationTracker)}return s(u.items)&&(a.items=[u],i.pageTitleEffect=u.items[0].titleEffect),a.url=Yn(a,t),nf(d.locationTracker),af(d.locationTracker),a}}class G0 extends m0{constructor(){super("GroupingHorizontalCardShelfController"),this.supportedFeaturedContentIds=new Set([475])}_supports(e,t,n,r){return!!super._supports(e,t,n,r)&&or(0,q(t,XU))!==_k}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:se(t,Uj)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await m0.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o={...n},i=q(t,XU)
return o.shelfStyle=or(0,i),o}_createShelf(e,t,n,r){const o={metricsLocationTracker:t.metricsLocationTracker,metricsPageInformation:t.metricsPageInformation}
let i
if(t.shelfStyle===MU)i=t.shelfStyle
else switch(e.client.deviceType){case Mj:case"tv":i=t.shelfStyle
break
case Fj:i=_B
break
default:i=BF}const s=Yf(e,n.shelfContents,i,t.title,t.subtitle,o,function(e){return t.remainingItems.push(e),!1})
return s.contentType===MU&&Array.isArray(s.items)&&(s.items=s.items.filter(e=>!(e instanceof fY)||qf(0,e.media.kind,MU))),s.url=Yn(s,t),s.isHorizontal=!0,s}}class j0 extends m0{constructor(e=null){super(e||"GroupingLargeBreakoutShelfController"),this.supportedFeaturedContentIds=new Set([480])}_supports(e,t,n,r){return!!super._supports(e,t,n,r)&&q(t,XU)===eB}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:se(t,Uj)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await m0.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}shouldImpressShelf(){return!1}isInHeroPosition(){return!1}_createShelf(e,t,n,i){const a=s(i)&&o(i.pageTitleEffect)&&0===i.shelves.length,c=s(n.shelfContents)?[n.shelfContents[0]]:[],l=[]
for(const n of c){if(r(n.attributes)||Wn(t)){t.isDeferring=!0,t.remainingItems.push(n)
continue}const s={targetType:this.isInHeroPosition()?"heroBreakout":UM,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:$(n)},c=Ta(e,n),u=Aa(e,n),d=c.artworkData||u.artworkData,f=j0.createLargeBreakout(e,n,t,this.isInHeroPosition(),a,s)
o(f)||(l.push(f),a&&(i.pageTitleEffect=Da(0,d)))}const u=new Ez(wx)
return u.isHorizontal=!1,u.items=l,u.url=Yn(u,t),0===i.shelves.length&&(u.presentationHints={isFirstShelf:!0}),u}static createLargeBreakout(e,t,n,r,i,s){const a=Bd(e,t)
if(Ea(0,t)&&!K(a))return n.isDeferring=!0,n.remainingItems.push(t),n.relationshipToFetch=lG,null
const c=Ta(e,t),l=Aa(e,t)
if(o(c.video)&&o(l.artwork))return null
const u=c.backgroundColor||l.backgroundColor,d=r?null:q(t,"breakoutBadge")
let f
const p=q(t,MG)
f=Oe(e,t,FF)?e.loc.uppercased(Nd(e,a,p)):p
let h={type:zG};(null==f?void 0:f.length)>0&&(h={type:TG,title:f})
const w=Rd(e,t,jj)||Ce(e,a,jj),g=Rd(e,t,DB)||Ce(e,a,BB),m=ba(e,t,!0,0,!1),v=Pa(e,t,0,!1),y=new bz(w,g,h,null,m,Ia(0,v,t)),A=new Sz(y,{position:v||vj},d,l.artwork,c.video,null,u),T=vf(e,t,A.details.title,s),b=Oe(e,Va(0,t),ZG)
T.isPreorder=b,pf(e,A,T),ef(0,T,A.details.title)
const S=Ra(e,t),P={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:$(t),targetType:Nj,id:t.id}
return Lf(e,S,P),A.details.callToActionButtonAction=S,A.clickAction=S,nf(s.locationTracker),A.flowPreviewActionsConfiguration=hs(e,t,!0,n.clientIdentifierOverride,S,s,P),A}}class V0 extends m0{constructor(){super("GroupingLinkShelfController"),this.supportedFeaturedContentIds=new Set([437,265])}initialShelfDataFromGroupingMediaApiData(e,t){let n=se(t,QU)
return o(n)&&(n=W(t,WM)),{shelfContents:n}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await m0.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o={...n,shouldHideShelf:Y(t,"hide"),areContentLinks:s(se(t,QU))}
return o.clientIdentifierOverride=Jt(e,t),o}_createShelf(e,t,n,i){if(t.shouldHideShelf)return null
const s=[]
for(let a=0;a<n.shelfContents.length;a++){const c=n.shelfContents[a],u={targetType:aj,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker}
t.areContentLinks&&(u.recoMetricsData=$(c))
let d=null
if(t.isSearchLandingPage){const n=this.trendingSearchLinkFromData(e,c,t.metricsLocationTracker)
if(r(n)||r(n.action))continue
pf(e,null==n?void 0:n.action,{...u,kind:aj,softwareType:l(null==i?void 0:i.isArcadePage)?QG:null,title:n.action.title,id:`${a}`,idType:sj}),d=n}else{const n=tr(e,c,t,!1,null,u,null)
if(o(n)||o(n.action.title))continue
d=n.action
const r=ir(0,c)
r&&pf(e,d,{...u,kind:aj,softwareType:l(null==i?void 0:i.isArcadePage)?QG:null,title:d.title,id:r})}o(d)||(s.push(d),af(t.metricsLocationTracker))}if(o(s))return null
if(t.isSearchLandingPage&&e.client.isPhone&&s.length>=6)for(const t of s)t instanceof nW&&(t.action.artwork=ce(e,Tx))
const a=new Ez(CG)
return a.isHorizontal=!1,a.items=s,a.title=t.title,a.subtitle=t.subtitle,a.presentationHints={isWidthConstrained:!0},a.url=Yn(a,t),t.isSearchLandingPage&&(e.client.isPhone||e.client.isPad)&&(a.contentsMetadata={type:bx,numberOfColumns:s.length>=6?2:1}),a}trendingSearchLinkFromData(e,t,n){const r=d(t,MG)
if((0,Tg.isNothing)(r)||0===r.length)return null
const o=new pQ(r,r,null,qM)
return $f(e,o,Nj,n),af(n),new nW(o)}}const H0={shelfIdentifier:"first",slot:0},W0="SLPPage"
class q0{constructor(e,t=!0){this.promise=e,this.isRequired=t}}class z0 extends Error{constructor(e){super(function(e){let t=""
for(const n of e)n instanceof Error?t+=n.message:t+=JSON.stringify(n)
return t}(e)),this.reasons=e}}class Y0{constructor(e){this.builderClass=e}handleShelf(e,t,n,r,o,i){i(new Error(`${this.builderClass} does not implement handleShelf`))}handlePagination(e,t,n,r,o,i,s){s(new Error(`${this.builderClass} does not implement handlePagination`))}shelfRoute(e){return[{protocol:AW,path:`${this.shelfPath}{data}`}]}paginationRoute(e){return[{protocol:AW,path:`${this.paginationPath}`}]}shelfUrl(e){return`${AW}:${this.shelfPath}${encodeURIComponent(JSON.stringify(e))}`}get shelfPath(){return`/${this.builderClass}/${PW}/`}get paginationUrl(){return`${AW}:${this.paginationPath}`}get paginationPath(){return`/${this.builderClass}/${CW}/`}static createFlowAction(e,t,n){const r=new _q(t)
return r.pageUrl=n.build(),r.pageData=e,r}}!function(e){e.Page="page",e.Shelf="shelf",e.Pagination="pagination"}(um||(um={}))
class J0 extends Y0{defaultAttributes(e){return[]}defaultTab(e){return null}prepareRequest(e,t,n,r,o){t.includingAdditionalPlatforms(this.defaultPlatforms(e)),t.includingAttributes(this.defaultAttributes(e)),t.usingCustomAttributes($e(e))}defaultAction(e,t,n,r){return J0.createFlowAction(t,this.pageType(),r)}handlePage(e,t,n,r,o,s,a){yg.context(`${this.builderClass}.handlePage`,()=>{var r
let c
const l=t.build()
ua(e,t)?c=new Uz(e,l):((0,Tg.isSome)(o)&&(n[pq.includeUnlistedApps]="1"),c=this.generatePageRequest(e,t,n)),c||a(new Error(`Could not construct media API request for: ${t}`)),this.prepareRequest(e,c,um.Page,t,n),c.attributingTo(l)
const u=null!==(r=e.fetchTimingMetricsBuilder)&&void 0!==r?r:new gg.FetchTimingMetricsBuilder,d=void 0===e.fetchTimingMetricsBuilder?e.addingFetchTimingMetricsBuilder(u):e
let f
f=new q0(An(d,c)),f.promise.then(t=>{ic(e,e.user.dsid,t)})
const p=this.generateAdditionalPageRequirements(e,t,n)
cc(e,f,p).then(async e=>(i(e.primaryPageDataFetchFailureReason)&&this.handlePageError(e.primaryPageDataFetchFailureReason,s,a,t,n),i(e.requiredAdditionalDataFailureReason)&&this.handlePageError(e.requiredAdditionalDataFailureReason,s,a,t,n),this.supportsDataAugmenting()?await this.augmentData(d,t,n,e.primaryPageData).then(t=>u.measureModelConstruction(()=>this.renderPage(d,t.originalData,n,e.additionalData,t.additionalData,o))):u.measureModelConstruction(()=>this.renderPage(d,e.primaryPageData,n,e.additionalData,null,o)))).then(r=>{const o=this.defaultTab(r),i=this.defaultAction(e,r,n,t),s=n[pq.isPPT]
if(t.removeParam(pq.isPPT),null===o||s)return i
{const e=new CH(o)
return e.actions=[i],e}}).then(s,e=>{this.handlePageError(e,s,a,t,n)})})}handlePageError(e,t,n,r,o){n(e)}handleShelf(e,t,n,r,o,i){yg.context(`${this.builderClass}.handleShelf`,()=>{let r
const s=t.build()
r=ua(e,t)?new Uz(e,s):this.generateShelfRequest(e,t,n),r?(this.prepareRequest(e,r,um.Shelf,t,n),r.attributingTo(t.build()),An(e,r).then(async t=>{const r=this.renderShelf(e,t,n)
return this.shelfRequiresAdditionalModification(r,n)?await this.performAdditionalShelfModifications(e,r,n):r}).then(o,e=>{this.handleShelfError(e,o,i,n)})):i(new Error(`Could not construct media API request for: ${t}`))})}async performAdditionalShelfModifications(e,t,n){return await Promise.resolve(t)}shelfRequiresAdditionalModification(e,t){return!1}handleShelfError(e,t,n,r){n(e)}handlePagination(e,t,n,r,o,i,s){yg.context(`${this.builderClass}.handlePagination`,()=>{let r
const a=t.build()
r=ua(e,t)?new Uz(e,a):this.generatePaginationRequest(e,t,n,o),r?(this.prepareRequest(e,r,um.Pagination,t,n),r.attributingTo(t.build()),An(e,r).then(t=>this.renderPaginatedPage(e,t,o)).then(i,e=>{this.handlePaginationError(e,i,s,n,o)})):s(new Error(`Could not construct media API request for: ${t}`))})}handlePaginationError(e,t,n,r,o){n(e)}generateAdditionalPageRequirements(e,t,n){return{}}generateShelfRequest(e,t,n){throw new Error(`generateShelfRequest is not supported on: ${this.builderClass}`)}generatePaginationRequest(e,t,n,r){throw new Error(`generatePaginationRequest is not supported on: ${this.builderClass}`)}supportsDataAugmenting(){return!1}async augmentData(e,t,n,r){const o={url:t,parameters:n}
return await _a(e,r,this.additionalDataKeysNeededForData,this.fetchAdditionalDataForKey,o)}additionalDataKeysNeededForData(e,t,n){return null}fetchAdditionalDataForKey(e,t){return null}renderShelf(e,t,n){throw new Error(`renderShelf is not supported on: ${this.builderClass}`)}renderPaginatedPage(e,t,n){throw new Error(`renderPaginatedPage is not supported on: ${this.builderClass}`)}}const K0=nG
class Z0{constructor(){this.profile=XG,this.maxPerPage=20}}class Q0 extends J0{defaultAttributes(e){const t=[lj,ij,YU,eG]
return e.appleSilicon.isSupportEnabled&&t.push(AG),t}defaultPlatforms(e){return O(e)}pageType(){return Vj}generatePaginationRequest(e,t,n,r){return new Uz(e,r.remainingContent)}renderPaginatedPage(e,t,n){const r=n
return this.pageWithContent(e,t,r)}pageWithContent(e,t,n,r=!0){return yg.context("pageWithContent",()=>{const o=n.preferredShelfContentType||K0,i=new Ez(o),s={id:null,kind:null,softwareType:null,targetType:JG,title:n.title,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,idType:oU,recoMetricsData:$(t)}
pf(e,i,s),ef(0,s,n.title),i.isHorizontal=!1,i.shouldFilterApps=n.shouldFilter
const a=L(t)
r&&(n.remainingContent=[]),i.items=Pu(e,a,{contentUnavailable:(e,t)=>(r&&(n.remainingContent=st(0,a,e)),!0),lockupOptions:{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,artworkUseCase:$u(0,o)}})
const c=new xz([i])
return n.remainingContent.length&&(c.nextPage=n),c})}}class X0 extends Q0{requestWithFilter(e,t,n){return new Uz(e).forType(Gj).includingMacOSCompatibleIOSAppsWhenSupported(!0).withFilter(t,n)}renderPage(e,t,n,r){return yg.context(pB,()=>{const r=new Z0
r.url=this.paginationUrl,r.metricsPageInformation=this.pageInformation(e,t,n),r.shouldFilter=!1,r.metricsLocationTracker={rootPosition:0,locationStack:[]}
const o=this.pageWithContent(e,t,r)
return ti(e,o,r.metricsPageInformation),o})}}class e1 extends m0{constructor(e=null){super(e||"GroupingLockupShelfController"),this.supportedFeaturedContentIds=new Set([..._Q,...NQ])}initialShelfDataFromGroupingMediaApiData(e,t){const n=re(t,Uj)
let r=n?n.data:null
return r&&0!==r.length||(r=se(t,QU)),{shelfContents:r}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await m0.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return pc(e,t,n,r)}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){const r={...n}
if(r.displayStyle=t.shelfStyle,557===t.featuredContentId){const n=d(H(ie(e,t.featuredContentData,TA),OU),jj)
r.title=n,r.idType=oU,r.badges={forYou:!0},r.targetType="swooshBreakout"}return r}_createShelf(e,t,n,r){if(557===t.featuredContentId){const t=!s(n.shelfContents),r=e.client.isPad
if(t||r)return null}return hc(e,t,n,r)}}class t1 extends m0{constructor(){super("GroupingPersonalizedLockupShelfController"),this.supportedFeaturedContentIds=$Q}shelfRoute(e){return va(this.supportedFeaturedContentIds,[`${pq.isOnDeviceRecommendationsShelf}?`,`${pq.onDeviceRecommendationsUseCase}?`])}initialShelfDataFromGroupingMediaApiData(e,t){const n=re(t,Uj)
let r=n?n.data:null
return r&&0!==r.length||(r=se(t,QU)),{shelfContents:r||[],containsODPShelfContents:!1,recoMetrics:$(n),candidates:null,isHiddenShelf:!1,responseTimingValues:null}}async secondaryShelfDataForShelfUrl(e,t,n,r){var o
const i=r[pq.onDeviceRecommendationsUseCase]
return(null==i?void 0:i.length)>0?await lr(e,i,Hj).then(e=>({shelfContents:L(e.dataContainer),containsODPShelfContents:!0,recoMetrics:e.recoMetrics,candidates:e.candidates,isHiddenShelf:!1})).catch(async o=>o instanceof VQ?await t1.fetchODPFallbackContent(e,t,n,r).catch(e=>t1.makeHiddenShelfData(n)):t1.makeHiddenShelfData(n)):(null===(o=n.recommendationsHref)||void 0===o?void 0:o.length)>0?await m0.secondaryGroupingShelfMediaApiData(e,t,n,r).then(t=>{const n=_(e,t),r=this.initialShelfDataFromGroupingMediaApiData(e,n)
return r.responseTimingValues=t[sm.timingValues],r.shelfTitle=q(n,jj),r}):await m0.secondaryGroupingShelfMediaApiData(e,t,n,r).then(e=>{const t={shelfContents:L(e)||[],containsODPShelfContents:!1,recoMetrics:null,candidates:null,isHiddenShelf:!1,responseTimingValues:e[sm.timingValues]}
return t.shelfTitle=n.title,t})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o=pc(e,t,n,r)
return this.addPersonalizationValuesToShelfToken(e,o,t,r),o}_createShelf(e,t,n,r){var s,a
if(!t.isValidRecommendationsShelf)return null
let c=null
if((0,Tg.isNothing)(t.title)&&(t.title=n.shelfTitle),n.containsODPShelfContents){c=this.personalizedShelf(e,n,t,r)
const o=(new kq).set(LB,AW).path(`${eq}`).param(pq.onDeviceRecommendationsUseCase,t.onDeviceRecommendationsUseCase).param(pq.token,JSON.stringify(t)).build(),i=new _q(Vj,o)
i.title=e.loc.string(xU),i.pageData=this.odpSeeAllPage(e,n.shelfTitle,K0),cr(e,c,i),c.mergeWhenFetched=!1}else n.isHiddenShelf?c=t1.makeHiddenShelf(t):i(t.recommendationsHref)?(c=this.personalizedShelf(e,n,t,r),c.url=this.addOnDeviceQueryParamsIfNecessary(e,c.url,t)):(c=hc(e,t,n,r),c.url=this.addOnDeviceQueryParamsIfNecessary(e,c.url,t))
const l=(0,Tg.isSome)(c.header),u=l&&o(null===(s=c.header)||void 0===s?void 0:s.title),d=!l&&o(c.title),f=(null===(a=n.shelfTitle)||void 0===a?void 0:a.length)>0
return u&&f?c.header.title=n.shelfTitle:d&&f&&(c.title=n.shelfTitle),c}personalizedShelf(e,t,n,r){const o=of(n.metricsLocationTracker)
o&&o.fcKind===n.featuredContentId&&nf(n.metricsLocationTracker)
const i={id:n.id,kind:null,softwareType:l(null==r?void 0:r.isArcadePage)?QG:null,targetType:JG,title:n.title,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,idType:oU,fcKind:n.featuredContentId,recoMetricsData:t.recoMetrics,displayStyle:n.shelfStyle}
ef(0,i,n.title)
const s=hc(e,n,t,r)
return nf(n.metricsLocationTracker),pf(e,s,i),s}addPersonalizationValuesToShelfToken(e,t,n,r){const o=476===t.featuredContentId
if(!r.hasAuthenticatedUser&&!t.isSearchLandingPage&&!o)return void e.console.log(`Skipping recommendations shelf with fcID ${t.featuredContentId}: No user logged-in`)
const i=q(n,Px)
if((null==i?void 0:i.length)>0)return t.onDeviceRecommendationsUseCase=i,t.recommendationsHref=n.href,void(t.isValidRecommendationsShelf=!0)
const a=s(se(n,Uj)),c=!Y(n,eA)
!a&&c?(t.recommendationsHref=n.href,t.isValidRecommendationsShelf=!0):t.isValidRecommendationsShelf=a}addOnDeviceQueryParamsIfNecessary(e,t,n){var r
if(o(t))return null
if((null===(r=n.onDeviceRecommendationsUseCase)||void 0===r?void 0:r.length)>0){const e=new kq(t)
return e.param(pq.isOnDeviceRecommendationsShelf,GG),e.param(pq.onDeviceRecommendationsUseCase,n.onDeviceRecommendationsUseCase),e.build()}return t}odpSeeAllPage(e,t,n){const r=new Ez(n||K0)
r.isHorizontal=!1,r.items=SA
const o=new xz([r])
return o.isIncomplete=!0,o.title=t,o}static async fetchODPFallbackContent(e,t,n,r){return await new Promise((r,o)=>{const i=Kn(e,n)
if(!i){const e=`OnDeviceRecommendationsShelfController: Could not construct media API request for: ${t}`
yg.unexpectedType(SG,e,null),o(new Error(e))}Zn(e,i),i.attributingTo(t.build()),An(e,i).then(t=>{const n=re(_(e,t),Uj),o=$(n),i={shelfContents:L(n),containsODPShelfContents:!1,recoMetrics:o,candidates:null,responseTimingValues:t[sm.timingValues]}
r(i)}).catch(e=>{const n=`OnDeviceRecommendationsShelfController: Failed to fetch fallback shelf contents: ${t}`
yg.unexpectedType(SG,n,null),o(e)})})}static makeHiddenShelfData(e){return{shelfContents:[],containsODPShelfContents:!1,recoMetrics:null,candidates:null,isHiddenShelf:!0}}static makeHiddenShelf(e){const t=new Ez(e.shelfStyle)
return t.isHidden=!0,t}}class n1 extends m0{constructor(){super("GroupingSmallBreakoutShelfController"),this.supportedFeaturedContentIds=new Set([480])}_supports(e,t,n,r){return!!super._supports(e,t,n,r)&&q(t,XU)===PB}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:se(t,Uj)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await m0.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}shouldImpressShelf(){return!1}_createShelf(e,t,n,o){const i=[]
for(const o of n.shelfContents){if(r(o.attributes)||Wn(t)){t.isDeferring=!0,t.remainingItems.push(o)
continue}const n=Bd(e,o)
if(Ea(0,o)&&!K(n)){t.isDeferring=!0,t.remainingItems.push(o),t.relationshipToFetch=lG
continue}const s={targetType:CA,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:$(o)}
let a
const c=q(o,MG)
a=Oe(e,o,FF)?e.loc.uppercased(Nd(e,n,c)):c
let l={type:zG};(null==a?void 0:a.length)>0&&(l={type:TG,title:a})
const u=Rd(e,o,jj)||Ce(e,n,jj),f=Rd(e,o,DB)||Ce(e,n,BB),p=Gu(e,n,{useCase:5,withJoeColorPlaceholder:!0}),h=F(d(we(n,Re(e,o),_j),AM))||(null==p?void 0:p.backgroundColor),w=new bz(u,f,l,null,Sa(0,h),null),g=new Pz(w,p,h),m=vf(e,o,g.details.title,s),v=Oe(e,Va(0,o),ZG)
m.isPreorder=v,pf(e,g,m),ef(0,m,g.details.title)
const y=Ra(e,o),A={pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:$(o),targetType:Nj,id:o.id}
Lf(e,y,A),g.details.callToActionButtonAction=y,g.clickAction=y,nf(s.locationTracker),g.flowPreviewActionsConfiguration=hs(e,o,!0,null==t?void 0:t.clientIdentifierOverride,y,s,A),i.push(g)}const s=new Ez(CA)
return s.isHorizontal=!1,s.items=i,s.url=Yn(s,t),0===o.shelves.length&&(s.presentationHints={isFirstShelf:!0}),s}}class r1 extends m0{constructor(){super("ArcadeDownloadPackShelfController"),this.shelfId="arcadeDownloadPackShelf",this.supportedFeaturedContentIds=new Set([566])}shelfRoute(e){return[...super.shelfRoute(e),{protocol:AW,path:`/${OW}/${PW}/{token}`,query:[pq.isArcadeDownloadPackShelfPlaceholder]}]}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return pc(e,t,n,r)}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:[],categoriesContents:[],apps:[],title:""}}async secondaryShelfDataForShelfUrl(e,t,n,r){const o=e.arcade.getDownloadPackGames(e.bag.arcadeDownloadPackShelfTTLInSeconds)
if((0,Ag.isNothing)(o)||0===o.apps.length)return{shelfContents:[],categoriesContents:[],apps:[],title:""}
const i=o.apps,s=this.shelfTitle(e,te(o.subscriptionStatus))
if((0,Ag.isSome)(t.query[pq.isArcadeDownloadPackShelfPlaceholder]))return{shelfContents:[],categoriesContents:[],apps:i,title:s}
const a=i.map(e=>e.adamId),c=i.map(e=>e.categoryId),l=Gj,u=kj,d=new Uz(e).addingQuery(`ids[${l}]`,Array.from(a).join(",")).addingQuery(`ids[${u}]`,Array.from(c).join(",")).includingAdditionalPlatforms(O(e)).includingAttributes(ha(e))
return await An(e,d).then(async e=>({shelfContents:e.data.filter(e=>e.type===l),categoriesContents:e.data.filter(e=>e.type===u),apps:i,title:s,responseTimingValues:e[sm.timingValues]}))}_createShelf(e,t,n,r){if(t.isFirstRender){const n=e.arcade.getDownloadPackGames(e.bag.arcadeDownloadPackShelfTTLInSeconds)
if((0,Ag.isNothing)(n)||0===n.apps.length){const n=this.emptyShelfWithRefreshUrl(e)
return n.refreshUrl=this.shelfRefreshURL(t),af(r.metricsLocationTracker),n}{const o=this.placeholderShelf(e,t,n.apps,this.shelfTitle(e,te(n.subscriptionStatus)))
return af(r.metricsLocationTracker),o}}if(n.apps.length>0&&((0,Ag.isNothing)(n.shelfContents)||0===n.shelfContents.length))return this.placeholderShelf(e,t,n.apps,n.title)
{const r=this.shelfMetrics(n.title,t)
ef(0,r,n.title)
const o=this.downloadPackShelf(e,t,n)
return o.refreshUrl=this.shelfRefreshURL(t),nf(t.metricsLocationTracker),pf(e,o,r),o}}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){return null}emptyShelfWithRefreshUrl(e){const t=new Ez(this.useCustomDownloadPackCardShelf(e)?FD:uj)
return t.id=this.shelfId,t.isHidden=!0,t}placeholderShelf(e,t,n,r){const o=this.useCustomDownloadPackCardShelf(e)?this.downloadPackCardPlaceholderShelf(e,t,n.length):this.smallLockupsPlaceholderShelf(e,t,n)
return o.url=kq.from(zn(t)).build(),o.title=r,o}downloadPackCardPlaceholderShelf(e,t,n){const r=new Ez(FD)
r.id=this.shelfId
const o=new MV
return o.numberOfPlaceholders=n,r.items=[o],t.shelfStyle=r.contentType,r}smallLockupsPlaceholderShelf(e,t,n){const r=new Ez(uj)
return r.id=this.shelfId,r.items=[],r.isHorizontal=!0,r.rowsPerColumn=2,r.items=Array(n.length).fill(new Iz),r.placeholderContentType=r.contentType,r.contentType=B$,t.showingPlaceholders=!0,t.remainingItems=n.map(e=>({id:e.adamId,type:Gj})),r}downloadPackShelf(e,t,n){const r=this.categoriesMapFromResponse(e,n.categoriesContents,n.apps),o=this.useCustomDownloadPackCardShelf(e),i=o?FD:uj,s=this.lockupsFromResponse(e,t,r,o,o,$u(0,i),(0,Ag.isSome)(n.shelfContents)?n.shelfContents:[],n.apps),a=new Ez(i)
if(a.id=this.shelfId,a.title=n.title,o){const e=new MV
e.lockups=s,a.items=[e]}else a.items=s,a.isHorizontal=!0,a.rowsPerColumn=2
return a.isHidden=0===s.length,a}useCustomDownloadPackCardShelf(e){return e.client.isPhone}shelfRefreshURL(e){return kq.from(zn(e)).param(pq.isArcadeDownloadPackShelfPlaceholder,GG).build()}lockupsFromResponse(e,t,n,r,o,i,s,a){return yg.context("lockupsFromResponse",()=>{const c=new Map
for(const e of s)c.set(e.id,e)
const l=t.metricsLocationTracker,u=t.metricsPageInformation,d=[]
for(const t of a){const s=c.get(t.adamId)
if((0,Ag.isNothing)(s))continue
const a=hu(e,s,{offerStyle:o?tB:void 0,offerEnvironment:o?bj:void 0,metricsOptions:{pageInformation:u,locationTracker:l,badges:{categoryId:t.categoryId}},metricsClickOptions:{id:s.id,pageInformation:u,locationTracker:l,badges:{categoryId:t.categoryId}},artworkUseCase:i,shouldHideArcadeHeader:!0,isSubtitleHidden:r});(0,Ag.isNothing)(a)||(Mu(a,e),af(l),r?a.heading=n.get(a.adamId):a.subtitle=n.get(a.adamId),d.push(a))}return d})}categoriesMapFromResponse(e,t,n){const r=new Map
for(const o of n){const n=t.find(e=>e.id===o.categoryId)
if(!n)continue
const i=Rd(e,n,jj)
r.set(o.adamId,i)}return r}shelfTitle(e,t){return e.loc.string(t===m$?"Arcade.DownloadPack.ShelfTitle.NewUser":"Arcade.DownloadPack.ShelfTitle")}shelfMetrics(e,t){return{id:t.id,kind:null,softwareType:QG,targetType:JG,title:e,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,idType:oU,fcKind:t.featuredContentId}}}const o1=[new v0,new y0,new A0,new T0,new b0,new S0,new P0,new k0,new C0,new O0,new E0,new I0,new U0,new G0,new j0,new V0,new e1,new t1,new n1,new r1]
class i1 extends hV{constructor(e,t,n,r,o,i){super(),this.bodyText=e,this.isDetailHeader=t,this.privacyTypes=n,this.bodyActions=r,this.supplementaryItems=o,this.seeDetailsAction=i}}class s1 extends hV{constructor(e,t){super(),this.bodyText=e,this.action=t}}class a1 extends hV{constructor(e,t,n){super(),this.bodyText=e,this.actions=t,this.privacyTypesCount=n}}class c1 extends wV{constructor(e,t,n,r,o,i,s,a){super(),this.identifier=e,this.title=t,this.detail=n,this.artwork=r,this.style=o,this.purposes=i,this.categories=s,this.clickAction=a,this.wantsScrollFocus=!1}}class l1 extends hV{constructor(e,t,n){super(),this.identifier=e,this.title=t,this.categories=n}}class u1 extends hV{constructor(e,t,n,r,o=[]){super(),this.identifier=e,this.title=t,this.artwork=n,this.style=r,this.dataTypes=o,this.prefersSmallArtwork=!1}}const d1=["284417353","1464590764","314638464","284993479","1351056256"]
class f1{setShelfId(e,t){this.shelfId=e,this.index=t,YY.has(e)&&(this.section=new HY(Hj,e))}}class p1{constructor(e,t,n=0){this.sequenceId=0,this.metricsPageInformation=e,this.locationTracker=t,this.sequenceId=n}addImpressionsToShelf(e,t,n,r,o,i,s){pf(e,t,{id:null!=r?r:`${this.sequenceId}`,idType:null!=o?o:sj,kind:null,softwareType:null,targetType:n,title:null!=s?s:t.title,pageInformation:this.metricsPageInformation,locationTracker:this.locationTracker,recoMetricsData:i}),this.sequenceId++}getSequenceId(){return this.sequenceId}addImpressionsFieldsToSimilarItemsShelf(e,t,n,r){t&&(pf(e,t,{id:p1.similarItemsShelfId,kind:null,softwareType:null,targetType:n,title:t.title,pageInformation:this.metricsPageInformation,locationTracker:this.locationTracker,idType:r}),this.sequenceId++)}static resetLocationTrackerForSimilarItemsDuringDownloadShelf(e,t){const n=t.sourceLocationTracker
sf(n,0),of(n).id=p1.similarItemsDuringDownloadShelfId}static addImpressionsFieldsToSimilarItemsDuringDownloadShelf(e,t,n){t&&pf(e,t,{id:p1.similarItemsDuringDownloadShelfId,kind:null,softwareType:null,targetType:qG,title:n.title,pageInformation:n.sourcePageInformation,locationTracker:n.sourceLocationTracker,idType:zF})}}p1.similarItemsShelfId=hN,p1.similarItemsDuringDownloadShelfId=aC
const h1=[al,ll,Bc,Wc,Uc,Yc,Qc,Zc,Kc,Vc,ul,zc,Jc,qc],w1=[ll,Bc,Wc,Uc,Yc,Qc,Zc,Kc,Vc,ul,zc,al,Jc,qc],g1=[al,Bc,function(e,t,n,r,o,i){const s=Ie(e,t,CF)
if(0===s.length)return null
const a=s[0]
let c=null
const l=d(a,sN)
if(l){const t=e.loc.string("ProductPage.VersionAnnotation.Value.DateFormat")
c=e.loc.formatDate(t,new Date(l))}const u=d(a,AE)
if(0===s.length)return null
let f
if(u&&c)f=e.loc.string("ProductPage.VersionAnnotation.Value").replace("@@version@@",u).replace(gv,c)
else{if(!u)return null
f=u}const p=new Mq(f),h=new $q(f),w=o?"":e.loc.string("ProductPage.VersionAnnotation.Title"),g=new xq(w,[p],[h])
return g&&!r?g:null},ll,Jc,qc],m1=[Uc,Zc,Vc,function(e,t,n,r,o,i){const s=[],a=[],c=jc(e,t);(0,Tg.isSome)(c)&&(s.push(c[0]),a.push(c[1]))
const l=Hc(e,t)
if((0,Tg.isSome)(l)&&(s.length>0&&(s[s.length-1].text+="\n"),s.push(l[0]),a.push(l[1])),0===s.length)return null
const u=e.loc.string("InfoList.AgeRating.Title.KR"),d=new xq(u,s,a)
return d.shouldAlwaysPresentExpanded=!0,d}],v1=[vl,El,gl,Pl,Tl,function(e,t,n,r){var o
return null!==(o=yl(e,t))&&void 0!==o?o:Al(e,t)},Sl],y1=[kl,bl,ml,vl,El],A1=[kl,vl,El,yl,function(e,t,n,r){if(!Oe(e,t,$$))return null
const o=e.loc.string("BADGE_FRIENDS_HEADING","Friends"),i=Bj,s=oj,a=oj,c={maxNumberOfAvatarsToDisplay:3,maxNumberOfFriendsBeforeTruncation:99,adamId:t.id}
return new VY(s,a,c,i,o,"",null,"",o,rG)},ml,gl,Pl,Tl,Al,Sl,function(e,t,n,o){if(et(e).isSystemAppFromData(t))return null
const i=pd(e,t)
if(r(i)||r(i.fileSizeByDevice))return null
const s=function(e,t){let n
if(n=(0,Ag.isSome)(t.maxEssentialInstallSizeInBytes)?t.fileSizeByDevice+t.maxEssentialInstallSizeInBytes:(0,Ag.isSome)(t.maxInstallSizeInBytes)?t.fileSizeByDevice+t.maxInstallSizeInBytes:t.fileSizeByDevice,n<=0)return null
const r=e.loc.fileSize(n).trim().split(/\s+/)
return 2!==r.length?null:{size:r[0],unit:r[1]}}(e,i)
if(!s)return null
const a={paragraphText:s.size},c=s.unit,l=e.loc.string("BADGE_SIZE_HEADING")
return new VY(wB,S_,a,Bj,l,c,null,null,c,uU)}]
!function(e){e.StoryCenteredMotion16x9="storyCenteredMotion16x9",e.StoryCenteredStatic16x9="storyCenteredStatic16x9",e.StoryDetailMotion3x4="storyDetailMotion3x4",e.StoryDetailStatic3x4="storyDetailStatic3x4",e.HeroMotion16x9="heroMotion16x9",e.HeroStatic16x9="heroStatic16x9",e.HeroMotionRTL16x9="heroMotionRTL16x9",e.HeroStaticRTL16x9="heroStaticRTL16x9",e.LargeBreakoutMotion16x9="largeBreakoutMotion16x9",e.LargeBreakoutStatic16x9="largeBreakoutStatic16x9",e.LargeBreakoutRTLMotion16x9="largeBreakoutRTLMotion16x9",e.LargeBreakoutRTLStatic16x9="largeBreakoutRTLStatic16x9",e.StoryCardMotion3x4="storyCardMotion3x4",e.StoryCardStatic3x4="storyCardStatic3x4",e.StorySearchStatic16x9="storySearchStatic16x9",e.SubscriptionHero="subscriptionHero",e.UniversalAMotion16x9="universalAMotion16x9",e.UniversalAStatic16x9="universalAStatic16x9",e.BrickStatic16x9="brickStatic16x9",e.BrickStaticRTL16x9="brickStaticRTL16x9"}(dm||(dm={})),function(e){e.Hero="hero",e.LargeBreakout="largeBreakout",e.StoryCard="storyCard",e.StoryDetail="storyDetail",e.StoryDetailLandscape="storyDetailLandscape",e.Search="search",e.Brick="brick",e.EditorialLockup="editorialLockup",e.EditorialPage="editorialPage"}(fm||(fm={}))
const T1={hero:[dm.HeroMotion16x9,dm.HeroStatic16x9,dm.StoryCenteredMotion16x9,dm.StoryCenteredStatic16x9],largeBreakout:[dm.LargeBreakoutMotion16x9,dm.LargeBreakoutStatic16x9,dm.StoryCenteredMotion16x9,dm.StoryCenteredStatic16x9],storyCard:[dm.StoryCardMotion3x4,dm.StoryCardStatic3x4,dm.StoryCenteredMotion16x9,dm.StoryCenteredStatic16x9],storyDetail:[dm.StoryDetailMotion3x4,dm.StoryDetailStatic3x4,dm.StoryCenteredMotion16x9,dm.StoryCenteredStatic16x9],storyDetailLandscape:[dm.StoryCenteredMotion16x9,dm.StoryCenteredStatic16x9,dm.StoryDetailMotion3x4,dm.StoryDetailStatic3x4],search:[dm.StorySearchStatic16x9,dm.StoryCenteredStatic16x9],brick:[dm.BrickStatic16x9,dm.HeroStatic16x9,dm.StoryCenteredStatic16x9],editorialLockup:[dm.SubscriptionHero],editorialPage:[dm.StoryCardStatic3x4,dm.HeroStatic16x9,dm.StoryCenteredStatic16x9,dm.SubscriptionHero]},b1={hero:[dm.HeroMotion16x9,dm.HeroStatic16x9,dm.StoryCenteredMotion16x9,dm.StoryCenteredStatic16x9,dm.UniversalAMotion16x9,dm.UniversalAStatic16x9],largeBreakout:[dm.LargeBreakoutMotion16x9,dm.LargeBreakoutStatic16x9,dm.StoryCenteredMotion16x9,dm.StoryCenteredStatic16x9,dm.UniversalAMotion16x9,dm.UniversalAStatic16x9],storyCard:[dm.StoryCardMotion3x4,dm.StoryCardStatic3x4,dm.StoryCenteredMotion16x9,dm.StoryCenteredStatic16x9,dm.UniversalAMotion16x9,dm.UniversalAStatic16x9],storyDetail:[dm.StoryDetailMotion3x4,dm.StoryDetailStatic3x4,dm.StoryCenteredMotion16x9,dm.StoryCenteredStatic16x9,dm.UniversalAMotion16x9,dm.UniversalAStatic16x9],storyDetailLandscape:[dm.StoryCenteredMotion16x9,dm.StoryCenteredStatic16x9,dm.UniversalAMotion16x9,dm.UniversalAStatic16x9,dm.StoryDetailMotion3x4,dm.StoryDetailStatic3x4],search:[dm.StorySearchStatic16x9,dm.StoryCenteredStatic16x9,dm.UniversalAStatic16x9],brick:[dm.BrickStatic16x9,dm.HeroStatic16x9,dm.StoryCenteredStatic16x9,dm.UniversalAStatic16x9],editorialLockup:[dm.SubscriptionHero],editorialPage:[dm.StoryCardStatic3x4,dm.HeroStatic16x9,dm.StoryCenteredStatic16x9,dm.SubscriptionHero]},S1={hero:[dm.HeroMotionRTL16x9,dm.HeroStaticRTL16x9,dm.StoryCenteredMotion16x9,dm.StoryCenteredStatic16x9,dm.UniversalAMotion16x9,dm.UniversalAStatic16x9],largeBreakout:[dm.LargeBreakoutRTLMotion16x9,dm.LargeBreakoutRTLStatic16x9,dm.StoryCenteredMotion16x9,dm.StoryCenteredStatic16x9,dm.UniversalAMotion16x9,dm.UniversalAStatic16x9],storyCard:[dm.StoryCardMotion3x4,dm.StoryCardStatic3x4,dm.StoryCenteredMotion16x9,dm.StoryCenteredStatic16x9,dm.UniversalAMotion16x9,dm.UniversalAStatic16x9],storyDetail:[dm.StoryDetailMotion3x4,dm.StoryDetailStatic3x4,dm.StoryCenteredMotion16x9,dm.StoryCenteredStatic16x9,dm.UniversalAMotion16x9,dm.UniversalAStatic16x9],storyDetailLandscape:[dm.StoryCenteredMotion16x9,dm.StoryCenteredStatic16x9,dm.UniversalAMotion16x9,dm.UniversalAStatic16x9,dm.StoryDetailMotion3x4,dm.StoryDetailStatic3x4],search:[dm.StorySearchStatic16x9,dm.StoryCenteredStatic16x9,dm.UniversalAStatic16x9],brick:[dm.BrickStaticRTL16x9,dm.HeroStatic16x9,dm.StoryCenteredStatic16x9,dm.UniversalAStatic16x9],editorialLockup:[dm.SubscriptionHero],editorialPage:[dm.StoryCardStatic3x4,dm.HeroStatic16x9,dm.StoryCenteredStatic16x9,dm.SubscriptionHero]},P1={chartPositions:function(e,t,n,r,i){var s,a
const c=function(e,t){const n=Pe(e,t,oE)
if(o(n))return null
const r=yd(0,e.host.clientIdentifier)
return o(r)?null:p(n,r)}(e,t)
if(o(c))return null
const l=f(c,s_)
if((0,Ag.isNothing)(l)||l>50)return null
const u=null!==(s=d(c,"genreShortName"))&&void 0!==s?s:d(c,Eb)
if(null!=u){if(r.has(u))return null
r.add(u)}let h
h=e.props.enabled(xS)&&e.bag.isLLMSearchTagsEnabled?new Qq("highlightedText"):new Qq("borderedTextLabel"),h.moduleType=oE
const w=(0,Ag.isSome)(null===(a=n.searchAdOpportunity)||void 0===a?void 0:a.searchAd)||(0,Ag.isSome)(n.searchAd)?e.bag.adsOverrideLanguage:null,g=(0,Ag.isSome)(w)?e.adsLoc:e.loc
{const t=g.string("MetadataRibbon.ChartPosition").replace(MS,e.loc.formattedCountForPreferredLocale(e,l,w))
e.props.enabled(xS)&&e.bag.isLLMSearchTagsEnabled?(h.highlightedText=t,h.labelText=g.string("MetadataRibbon.ChartPositionAndCategory.Tags").replace(MS,e.loc.formattedCountForPreferredLocale(e,l,w)).replace("@@category@@",u)):(h.labelText=u,h.borderedText=t)}return h.secondaryViewPlacement=vj,hf(e,h,yf(i,L_,h.labelText,rj)),[h]},genreDisplayName:function(e,t,n,r,i){const s=Vn(e,t,!0),a=(0,Tg.isSome)(s),c=pu(e,t)
if(o(c))return null
if(null!=c){if(r.has(c))return null
r.add(c)}const l=new Qq(a?Q_:Jx)
if(l.moduleType=UB,l.labelText=c,a){const t=Fu(e,s,{useCase:20})
t.crop="sr",l.artwork=t}return hf(e,l,yf(i,UB,l.labelText,rj)),[l]},genreShortDisplayName:function(e,t,n,r,o){const i=Vn(e,t,!0),s=(0,Tg.isSome)(i),a=q(t,qx)
if(null!=a){if(r.has(a))return null
r.add(a)}if((0,Tg.isNothing)(a)||0===a.length)return null
const c=new Qq(s?Q_:Jx)
return c.moduleType=qx,c.labelText=a,s&&(c.artwork=Fu(e,i,{useCase:20,cropCode:"sr"})),hf(e,c,yf(o,UB,c.labelText,rj)),[c]},secondaryGenreShortDisplayNames:function(e,t,n,r,i){const s=W(t,xE)
return o(s)?null:s.map(t=>{const n=new Qq(Jx)
n.moduleType=qx,n.labelText=t
const r=yf(i,UB,n.labelText,rj)
return hf(e,n,r),af(i.locationTracker),n}).filter(e=>null!=e.labelText&&!r.has(e.labelText))},developerInfo:function(e,t,n,r,o){var i
let s=n.developerName
if((0,Tg.isNothing)(s)&&(s=null!==(i=q(t,SU))&&void 0!==i?i:q(t,_A)),null!=s){if(r.has(s))return null
r.add(s)}if((0,Tg.isSome)(s)&&s.length>0){const t=new Qq(Q_)
t.moduleType=$S,t.labelText=s,t.artwork=ce(e,F_)
const n=6
return t.maxCharacterCount=16,t.truncationLegibilityCharacterCountThreshold=Math.min(n,s.length),t.allowsTruncation=s.length>=n,hf(e,t,yf(o,$S,t.labelText,rj)),[t]}return null},editorialBadgeInfo:function(e,t,n,r,o){var i
if(n.isEditorsChoice){const t=new Qq(EG)
return t.moduleType=ON,t.useAdsLocale=((0,Ag.isSome)(null===(i=n.searchAdOpportunity)||void 0===i?void 0:i.searchAd)||(0,Ag.isSome)(n.searchAd))&&(0,Ag.isSome)(e.bag.adsOverrideLanguage),hf(e,t,yf(o,ON,"Editors Choice",rj)),[t]}return null},userRating:function(e,t,n,r,o){const s=Oe(e,t,ZG)
if(i(n.ratingCount)&&i(n.rating)&&!s){const t=new Qq("starRating")
return t.moduleType=tF,t.starRating=n.rating,t.labelText=n.ratingCount,hf(e,t,yf(o,tF,"User Rating",rj)),[t]}return null},supportsGameController:function(e,t,n,r,o){var i
let s=!1
switch(Ce(e,t,pN)){case xL:case jR:s=!0}if(Oe(e,t,zE)&&(s=!0),!s)return null
const a=new Qq(Q_)
a.moduleType=zE
const c=((0,Ag.isSome)(n.searchAd)||(0,Ag.isSome)(null===(i=n.searchAdOpportunity)||void 0===i?void 0:i.searchAd))&&(0,Ag.isSome)(e.bag.adsOverrideLanguage)
return a.labelText=c?e.adsLoc.string(eF):e.loc.string(eF),a.artwork=ce(e,"systemimage://gamecontroller.fill"),hf(e,a,yf(o,zE,"Supports Game Controller",rj)),[a]},tag:function(e,t,n,r,o){const i=t,s=new Qq(Jx)
return s.moduleType=TO,s.labelText=q(i,jj),(0,Tg.isNothing)(s.labelText)||0===s.labelText.length||r.has(s.labelText)?null:(hf(e,s,yf(o,i.id,s.labelText,"tag_id")),r.add(s.labelText),[s])},divider:function(e,t,n,r,o){const i=new Qq(FS)
return i.moduleType=FS,i.labelText="|",[i]}}
class I1{constructor(){this.runsOnIntel=!0,this.runsOnAppleSilicon=!0,this.requiresRosetta=!1}}!function(e){e[e.seeAllPage=0]="seeAllPage",e[e.categoryBreakout=1]="categoryBreakout",e[e.other=2]="other"}(pm||(pm={}))
class C1{constructor(e,t){this.videos=e,this.mediaPlatform=t}}const k1=new SV(414,896),O1=new SV(375,812),E1=new SV(414,736),R1=new SV(375,667),D1=new SV(320,568),_1=new SV(320,480),L1=(new SV(768,1024),new SV(810,1080)),x1=new SV(834,1112),M1=new SV(834,1194),$1=new SV(1194,834),F1=new SV(1024,1366),N1=new SV(1024,1366),B1=new SV(1366,1024),U1=new SV(744,1133),G1=new SV(1133,744),j1=new SV(1032,1376),V1=new SV(1376,1032),H1=new SV(834,1210),W1=new SV(1210,834),q1=new SV(312,390),z1=new SV(368,448),Y1=new SV(396,484),J1=new SV(410,502),K1=new SV(416,496),Z1=new SV(820,1180),Q1=new SV(360,780),X1=new SV(390,844),e2=new SV(428,926),t2=new SV(393,852),n2=new SV(430,932),r2=new SV(402,874),o2=new SV(440,956),i2=[nk,ek,tk,TD,oy,ry,ny,sG],s2=112.5,a2=4.5
class c2{constructor(){this.position=0}}const l2="::"
class u2{constructor(e){this._options=Object.freeze(e)}get defaultTopic(){return this._options.defaultTopic}_reduceFieldAccuracy(e,t){for(const n of t){const t=d(n,"fieldName")
if(r(t))continue
const o=f(e,t)
if(r(o))continue
let i=f(n,"magnitude")
r(i)&&(i=1048576)
let s=f(n,"significantDigits")
if(r(s)&&(s=2),i<=0||s<0){e[t]=Number.NaN
continue}const a=o/i
e[t]=le(a,s)}}_urlScrubbingAdParameters(e){const t=new kq(e)
return t.removeParam(nX),t.removeParam(rX),t.removeParam(oX),t.build()}_urlScrubbingExtRefUrl(e){const t=new kq(e)
return t.username="",t.password="",t.pathname=void 0,t.query=void 0,t.hash=void 0,t.build()}_derezFastImpressions(e){const t=d(e,ZM),n=f(e,QM)
if(t===Kk){if(4===n){const t=c(e,FU)
e[FU]=t.map(e=>{if((0,Ag.isNothing)(e))return e
const t=c(e,qA)
return 0===t.length||(e[qA]=t.map(e=>{if((0,Ag.isNothing)(e))return e
const t=f(e,"d")
return e.s=0,(0,Ag.isSome)(t)&&(e.d=le(t,2)),e})),e})}if(5===n){const t=c(e,FU)
e[FU]=t.map(e=>{if((0,Ag.isNothing)(e))return e
delete e[r_],(o(d(e,o_))||o(d(e,i_)))&&delete e.id
const t=p(e,zA)
return(0,Ag.isNothing)(t)||o(t)||(Object.entries(t).forEach(([e,n])=>{const r=c(n)
t[e]=r.map(e=>{if((0,Ag.isNothing)(e))return e
const t=f(e,"d")
return e.s=0,(0,Ag.isSome)(t)&&(e.d=le(t,2)),e})}),e[zA]=t),e})}}}_decorateSearchResultImpressions(e){const t=d(e,QB),n=d(e,cB)
t===aU&&n!==e$&&function(e){const t=c(e,FU)
let n
for(const e of t){const t=d(e,Dx)
if((0,Ag.isSome)(e)&&t===uB){n=e[h_]
break}}n&&(e[FU]=t.map(e=>{const t=d(e,Dx),r=t===RU||t===HL
return(0,Ag.isSome)(e)&&r&&(e[SO]=n),e}))}(e)}_decorateSearchFocusImpressions(e){const t=d(e,QB),n=d(e,cB)
t===Xk&&n===eO&&function(e){var t
const n=c(e,FU)
let r
for(const e of n)if("R8804"===d(e,GM)){r=null!==(t=d(e,h_))&&void 0!==t?t:void 0
break}r&&(e[FU]=n.map(e=>{const t=d(e,GM),n=d(e,Dx)
return o(t)&&n===aj&&null!=e&&null==d(e,SO)&&(e[SO]=r),e}))}(e)}_decorateAll(e,t,n){var o,i
const s=this._options.bagProvider,a=s("metricsBase",n)
r(a)||typeof a!==IF||Object.assign(t,a),t.clientBuildType=this._options.buildType,t.resourceRevNum=this._options.jsVersion,t.xpSendMethod="jet-js",this._options.buyDecorator.useApp(d(t,Tj)),delete t[DY]
const l=function*(e){if((0,Ag.isNothing)(e))return
const t=e.split(";")
for(const e of t){const t=e.indexOf("=")
if(-1===t){const t=decodeURIComponent(e).trim()
yield{key:t,value:""}}else{const n=decodeURIComponent(e.substring(0,t)).trim(),r=decodeURIComponent(e.substring(t+1)).trim()
yield{key:n,value:r}}}}(d(t,YA))
for(const e of l)if("xp_ci"===e.key){this._options.buyDecorator.useClientId(e.value)
break}delete t[YA]
const u=null!==(i=null===(o=e.metricsIdentifiersCache)||void 0===o?void 0:o.getMetricsFieldsForTypes([kg.client]))&&void 0!==i?i:{}
Object.assign(t,u),delete t.clientGeneratedId
const f=d(t,QB),p=d(t,cB)
if(!r(f)&&!r(p)){const e=d(s("compoundSeparator",n))||"_"
t[Vj]=`${f}${e}${p}`}const h=c(s("deResFields",n))
this._reduceFieldAccuracy(t,h)
const w=[Y$,KM,J$,K$,gj,"parentPageUrl"]
for(const e of w){const n=d(t,e);(0,Ag.isSome)(n)&&n.length>0&&(t[e]=e===J$?this._urlScrubbingExtRefUrl(n):this._urlScrubbingAdParameters(n))}const g=d(t,tO)
if((0,Ag.isSome)(g)&&(delete t[tO],t[t$]=g),e.bag.isMetricsUserIdFallbackEnabled){const n=d(t,nO)
let r=null;((0,Ag.isNothing)(n)||0===n.length||n.length===u2.clientGeneratedUserIdLength)&&(r=e.user.dsid),(0,Ag.isSome)(r)&&r.length>0&&(t[rO]=r)}}_decorateClick(e){!function(e){const t=d(e,Mx),n=d(e,PO)
r(t)&&(0,Tg.isSome)(n)&&(null==n?void 0:n.length)>0&&(e[Mx]=n),d(e,IO)===kT&&delete e[CO]}(e),this._decorateSearchResultImpressions(e),this._decorateSearchFocusImpressions(e),wH.shared.addReferralDataToEventIfNecessary(e),this._filterBuyParams(e)
const t=d(e,QB)
!(0,Ag.isNothing)(t)&&t.toLowerCase().includes(ej)||delete e[FU],Tf(e)}_decorateImpressions(e,t){if(o(t[FU]))return!1
this._derezFastImpressions(t),this._decorateSearchResultImpressions(t)
const n=d(t,K$)
return(0,Ag.isSome)(n)&&n.length>0&&(t[bG]=Yd(n),delete t[K$]),Tf(t),delete t[ZM],!0}_decorateMedia(e){const t=f(e,s_)
r(t)||(e[s_]=Math.round(t))}_filterBuyParams(e){const t=d(e,"actionDetails.buyParams")
if((0,Ag.isSome)(t)&&t.length>0){const n=new RY(t);[JA].forEach(e=>{n.set(e,null,null)}),(0,Ag.isSome)(e[zN])&&(e[zN][vB]=n.toString())}}_decoratePage(e,t){const n=d(t,Vj)
r(n)||(t.pageHistory=this._options.buyDecorator.getPageHistoryFor(n)),wH.shared.setReferralDataForProductPageExtensionIfNecessary(t),wH.shared.beginReferralContextForPageIfNecessary(t),wH.shared.addReferralDataToEventIfNecessary(t)
const o=d(t,K$)
if(!r(o)){const e=Wd(o),n=Yd(o)
null!==e&&e.length>0&&(t[Rx]=e),null!==n&&n.length>0&&(t[bG]=n)}}_decoratePageChange(e,t){this._decoratePage(e,t)}_decorateSearch(e){e[QM]=3,function(e){var t
const n=null!==(t=e[zN])&&void 0!==t?t:{},o=n[Mx],i=d(e,PO)
r(o)&&(0,Tg.isSome)(i)&&(null==i?void 0:i.length)>0&&(n[Mx]=i,e[zN]=n),d(e,IO)===kT&&delete e[CO],e[gF]===OT&&delete e[CO]}(e)}_decoratePageExit(e){wH.shared.endReferralContextIfNecessaryForPageEvent(e)}_filterExtraneous(e){!function(e){delete e[PO],delete e[IO],delete e.searchGhostHintTermLastDisplayed}(e),wH.shared.removeReferralContextInfoFromMetricsEvent(e)}makeEvent(e,t){const n=d(t,GB)
this._options.isLoggingEnabled&&e.console.log(`Building event for topic: ${n}`)
const r=t[RN],o=t[Tj]
if("com.apple.mobilesafari"===r&&o===GI)return new AH({})
const i=d(t,TM)||this._options.defaultTopic
this._decorateAll(e,t,i),e.user.isUnderThirteen&&(delete t[rO],delete t[nO])
const s=t[J$]
switch(s&&""===s&&delete t[J$],n){case UF:this._decorateClick(t)
break
case Qk:break
case FU:if(!this._decorateImpressions(e,t))return new AH({})
break
case Zk:this._decorateMedia(t)
break
case Vj:this._decoratePage(e,t)
break
case _R:this._decoratePageChange(e,t)
break
case KA:this._decoratePageExit(t)
break
case ej:this._decorateSearch(t)}return this._filterExtraneous(t),e.bag.metricsIdMigrationEnabled&&function(e){delete e[OO],delete e.DSID}(t),new AH(t)}}u2.clientGeneratedUserIdLength=24,u2.hasIAdData=WA,new Set([_j,aM,pU,PL,YG])
const d2=new Set([XN,_j,aM,pU,PL,YG]),f2=new Set([XN,_j,aM,pU,PL,YG]),p2=new Set([XN,_j,pU,YG]),h2="write-review",w2=yj,g2="appPromotionRequirementKey"
j(F("F0F0F8"),F("303031")),function(e){e.MoreByDeveloper="moreByDeveloper",e.SimilarItems="similarItems",e.SmallStory="smallStory"}(hm||(hm={}))
class m2{constructor(e,t,n,r,o,i,s,a,c,l,u,d){this.isFirstRender=!0,this.isBundleShelf=!1,this.showingPlaceholders=!1,this.productId=e,this.onDemandShelfType=d,this.remainingItems=t,this.title=n,this.shouldInferSeeAllFromFetchesItems=r,this.capabilities=o,this.contentType=i,this.offerStyle=s,this.spotlightInAppProductIdentifier=a,this.refreshUrl=c,this.recoMetricsData=l,this.supportsArcade=u}}const v2=[XN,pU,_j,YG],y2=(0,vg.makeMetatype)("app-store:page-router")
class A2{constructor(){this.registeredBuilders=new Set,this.pageRouter=new Rq,this.shelfRouter=new Rq,this.paginationRouter=new Rq}registerPageBuilder(e,t){if(this.registeredBuilders.has(t.builderClass))throw new Error(`routing: Registering duplicate builderClass ${t.builderClass}`)
this.registeredBuilders.add(t.builderClass),this.pageRouter.associate(t.pageRoute(e),t),this.shelfRouter.associate(t.shelfRoute(e),t),this.paginationRouter.associate(t.paginationRoute(e),t)}registerShelfBuilder(e,t){if(this.registeredBuilders.has(t.builderClass))throw new Error(`routing: Registering duplicate builderClass ${t.builderClass}`)
this.registeredBuilders.add(t.builderClass),this.shelfRouter.associate(t.shelfRoute(e),t)}registerPaginationBuilder(e,t){if(this.registeredBuilders.has(t.builderClass))throw new Error(`routing: Registering duplicate builderClass ${t.builderClass}`)
this.registeredBuilders.add(t.builderClass),this.paginationRouter.associate(t.paginationRoute(e),t)}fetchFlowPage(e){const t=this.pageRouter.routedObjectForUrl(e)
if(!t.object)return"unknown"
const n=t.object
return n.builderClass===$v&&t.parameters[pq.action]!==w2&&t.parameters[pq.action]!==h2?VU:n.pageType()}async fetchPage(e,t,n){return await this.fetchAction(e,t,null).then(async r=>await new Promise((o,i)=>{if(!r)throw new Error(`Promise resolved to null action for: ${t}`)
if(r.actionClass!==DR){if(r.actionClass===Dm){const e=r
if(1===e.actions.length&&e.actions[0].actionClass===DR){const t=e.actions[0].pageData
return A(t,n)?void o(t):void i(new Error(`pageData is not expected type ${n.name}, ${JSON.stringify(t)}`))}}i(new Error("Action is not a flowAction or a tabChangeAction that contains a single flowAction."))}else{const s=r.pageData
if(!A(s,n)){const a=r.pageUrl
return a&&a!==t?void this.fetchPage(e,a,n).then(e=>{o(e)}).catch(e=>{i(e)}):void i(new Error(`pageData is not expected type ${n.name}, ${JSON.stringify(s)}`))}o(s)}}))}async fetchAction(e,t,n,r=new Set){return await new Promise((o,i)=>{const s=this.pageRouter.routedObjectForUrl(t)
s.object?s.object.handlePage(e,s.normalizedUrl,s.parameters,s.matchedRuleIdentifier,n,o,i):this.redirectAndRefetchActionIfPossible(e,s.normalizedUrl,o,i,r)})}async fetchMoreOfPage(e,t){return await new Promise((n,r)=>{const o=t.url
if(!o)return void r(new Error("Page token missing required `url` property"))
const i=this.paginationRouter.routedObjectForUrl(o)
i.object?i.object.handlePagination(e,i.normalizedUrl,i.parameters,i.matchedRuleIdentifier,t,n,r):r(new Error(`fetchMoreOfPage: Unhandled pagination url: ${o}`))})}async fetchShelves(e,t){return await new Promise((n,r)=>{const o=Object.keys(t),i={shelves:{},errors:{}},s=new Dq(o.length)
s.then(()=>{if(Object.keys(i.shelves).length>0)n(i)
else{const e=Object.keys(i.errors).map(e=>i.errors[e].message)
0===e.length?r(new Error(`Could not load any shelves: ${JSON.stringify(t)}`)):r(new Error(e.join("\n")))}})
for(const n of o){const r=t[n],o=e=>{i.shelves[n]=e,s.countDown()},a=e=>{i.errors[n]=e,s.countDown()},c=this.shelfRouter.routedObjectForUrl(r)
c.object?c.object.handleShelf(e,c.normalizedUrl,c.parameters,c.matchedRuleIdentifier,o,a):a(new Error(`fetchShelves: Unhandled shelf url: ${r}`))}})}redirectAndRefetchActionIfPossible(e,t,n,r,o=new Set){const i=t.toString()
o.has(i)?r(new Error(`redirectAndRefetchActionIfPossible: Redirect cycle detected for URL: ${i}`)):(o.add(i),e.network.fetch({url:i,method:v$}).then(i=>{this.hasGotoURLInResponse(e,i)?n(new tW):200===i.status&&i.redirected&&i.url?this.fetchAction(e,i.url,null,o).then(n,r):r(new Error(`redirectAndRefetchActionIfPossible: Unhandled page url: ${t}`))}).catch(()=>{r(new Error(`redirectAndRefetchActionIfPossible: Failed to fetch page at url: ${t}`))}))}hasGotoURLInResponse(e,t){if(o(t.body))return!1
try{const n=g(e.plist.parse(t.body)),r=d(n,_C),o=d(n,LC)
return!(r!==xC||!(0,Tg.isSome)(o))}catch{return!1}}fetchBuilder(e){const t=this.pageRouter.routedObjectForUrl(e)||this.shelfRouter.routedObjectForUrl(e)||this.paginationRouter.routedObjectForUrl(e)
return t?t.object:null}}class T2{constructor(){this.$intentKind="GenericPageIntent"}async perform(e,t){const n=t.required(y2)
return await n.fetchPage(t,e.url,xz)}}class b2{constructor(){this.$intentKind="GenericPageMoreIntent"}async perform(e,t){const n=t.required(y2)
return await n.fetchMoreOfPage(t,e.pageToken)}}class S2{constructor(){this.$intentKind="ShelvesIntent"}async perform(e,t){const n=t.required(y2)
return await n.fetchShelves(t,e.requests)}}class P2{constructor(){this.$intentKind="ActionIntent"}async perform(e,t){return await lp(t,e)}}class I2{constructor(){this.$intentKind="MetricsFieldLintingIntent"}async perform(e,t){const n=ht(t).makeEvent(t,m(e.fields))
return await Promise.resolve(n)}}class C2{constructor(){this.$intentKind="AppUpdateLockupsIntent"}async perform(e,t){const n=this.createUpdateLockups(t,e.appUpdateMetadata)
return await Promise.resolve(n)}createUpdateLockups(e,t){const n={lockupOptions:{metricsOptions:{pageInformation:ei(e,FL,"Updates",""),locationTracker:{rootPosition:0,locationStack:[]}},artworkUseCase:1}}
return this.updatesLockupsFromData(e,t,n)}updatesLockupsFromData(e,t,n){return yg.context("updatesLockupsFromData",()=>{const a=[]
return null==t||t.forEach((t,c)=>{var l
const u=t.updateMetadata
if(r(u.attributes))return void(n.contentUnavailable&&n.contentUnavailable(c,u))
const f=n.lockupOptions
let p=80894
if(i(n.filter)&&(p=n.filter),tt(e,u,p))return
const h=hu(e,u,f)
if(r(h)||!h.isValid())return
const w=we(u,Re(e,u),"latestVersionInfo"),g=d(w,AE),m=d(w,sN)
h.releaseDate=new Date(m),h.installDate=t.updateInstallDate
const v=t.isUpdateAvailable||t.isUpdating?h.releaseDate:h.installDate
let y=this.timeAgoStringForDate(e,v)
o(y)&&(y=e.loc.string("UPDATES_VERSION_FORMAT").replace("{updateVersion}",g)),s(y)&&(h.subtitle=y)
const A=d(w,Zb);(0,Tg.isSome)(A)&&(h.whatsNew=new _V(A.trim())),h.version=g,h.size=null===(l=pd(e,u))||void 0===l?void 0:l.fileSizeByDevice,h.externalVersionId=Ee(e,u,fE),a.push(h),af(n.lockupOptions.metricsOptions.locationTracker)}),a})}timeAgoStringForDate(e,t){if((0,Tg.isNothing)(t))return
const n=(new Date).getTime()-t.getTime(),r=Math.floor(n/864e5)
switch(r){case 0:return e.loc.string("LOCKUPS_TODAY")
case 1:return e.loc.string("LOCKUPS_YESTERDAY")
case 2:case 3:return e.loc.string("LOCKUPS_DAYS_AGO_FORMAT").replace("{daysAgo}",r.toString())
default:const n=N_
return e.loc.formatDate(n,t)}}}class k2 extends hV{constructor(e,t){super(),this.title=e,this.sections=t||[],this.pageMetrics=new bH,this.pageRenderMetrics={}}}class O2 extends hV{constructor(e,t){super(),this.personalizationEnabledPage=e,this.personalizationDisabledPage=t}}class E2 extends hV{constructor(e,t){super(),this.title=e,this.footer=t,this.contents=[]}addContentItem(e){this.contents.push(e)}}class R2 extends hV{constructor(e){super(),this.type=e}}class D2 extends R2{constructor(e,t,n){super(aj),this.title=e,this.action=t,this.displayType=n||CG}}class _2 extends R2{constructor(e,t){super("infoListItem"),this.title=e,this.value=t}}class L2 extends R2{constructor(e){super(TG),this.text=e}}class x2 extends hV{constructor(){super(...arguments),this.links={},this.pageMetrics=new bH,this.pageRenderMetrics=null}}class M2 extends R2{constructor(e,t){super("personalizedRecommendationsToggle"),this.title=e,this.defaultValue=t}}class $2{constructor(){this.$intentKind="AccountLinksIntent"}async perform(e,t){return dp(t)}}class F2 extends Y0{constructor(e,t){super("AccountController"),t.exportingService("AccountData",{fetchAccountLinks:async t=>dp(e)})}handlePage(e,t,n,r,o,i,s){s(new Error(TU))}pageRoute(e){return[]}pageType(){return Ej}}class N2 extends Y0{constructor(){super("DynamicUIBuilder")}pageType(){return ML}handlePage(e,t,n,r,o,i,s){const a=new _q(ML)
a.pageUrl=t.toString(),a.referrerUrl=t.build()
const c=new TY
if(e.bag.arcadeDownloadPacksCIPDeeplinkIntegrationEnabled&&lt(e,e.bag.arcadeDownloadPackRolloutRate)){const e=new _q(C$),t=m$
e.pageData=t,e.presentationContext=WB,c.carrierLinkSuccessAction=e}a.pageData=c,i(a)}pageRoute(e){const t=e.bag.dynamicUIRegexStrings,n=[]
for(const e of t)n.push(new RegExp(e,"i"))
return[{regex:n}]}}class B2 extends Y0{constructor(){super("FinancePageBuilder")}pageType(){return Ej}handlePage(e,t,n,r,o,i,s){const a=new _q(gB)
a.pageUrl=t.toString(),i(a)}pageRoute(e){const t=e.bag.financeUIRegexStrings,n=[]
for(const e of t)n.push(new RegExp(e,"i"))
return[{regex:n}]}}const U2="https://itunes.apple.com/WebObjects/MZStore.woa/wa/genericPageTemplate?pageComponent=finance_internet_eraser_page&additionalResources=p7financebootstrap"
class G2{constructor(){this.$intentKind="GenericAccountPageIntent"}async perform(e,t){return await fp(t,e.url)}}class j2{constructor(){this.$intentKind="PersonalizationTransparencyPageIntent"}async perform(e,t){return await async function(e){const t=e.required(y2),n=`${AW}:///${qW}/${zW}`
return await t.fetchPage(e,n,O2)}(t)}}class V2 extends Y0{constructor(e,t){super("PersonalizationTransparencyBuilder"),t.exportingService(Mv,{fetchGenericAccount:async t=>await fp(e,t.url)})}handlePage(e,t,n,r,o,i,s){(async function(e,t,n){let r,o
if(e.bag.personalizedRecommendationsToggleEnabled){o=tx
const t=await pp(e),n=hp(e)
r=new O2(t,n)}else o=iG,r=w(n[pq.enabled])?await pp(e):hp(e)
return Y0.createFlowAction(r,o,t)})(e,t,n).then(i,s)}pageRoute(e){return e.bag.personalizedRecommendationsToggleEnabled?[{protocol:AW,path:`/${qW}/${zW}`},{path:`${zW}`}]:[{protocol:AW,path:`/${qW}/${zW}`,query:[pq.enabled]},{path:`${zW}`,query:[pq.enabled]}]}pageType(){return iG}}class H2 extends Y0{constructor(){super("ShowAccountPageBuilder")}pageType(){return Ej}handlePage(e,t,n,r,o,i,s){let a,c=[]
{a=$R
const e=new _q(iG)
e.presentationContext=WB,e.animationBehavior=ZU,c=[e]}const l=new CH(a)
l.actions=c,i(l)}pageRoute(e){return[{hostName:"showAccountPage"},{hostName:"showPurchasesPage"}]}}class W2 extends Y0{constructor(){super("ShowSubscriptionPageBuilder")}pageType(){return Ej}handlePage(e,t,n,r,o,i,s){i(new _q(gB,e.bag.manageSubscriptionsUrl))}pageRoute(e){return[{hostName:"showSubscriptionsPage"}]}}class q2 extends Y0{constructor(){super("ShowUpdatesPageBuilder")}pageType(){return Ej}handlePage(e,t,n,r,o,i,s){const a=new CH($R)
if(e.client.deviceType!==Mj){const e=new _q(iG)
e.presentationContext=WB,e.animationBehavior=ZU,a.actions=[e]}i(a)}pageRoute(e){return[{hostName:"showUpdatesPage"},{path:"updates"},{path:"{countryCode}/updates"},{query:[`${pq.action}=updates`]}]}}class z2 extends Y0{constructor(){super("StorefrontChangeController")}handlePage(e,t,n,r,o,i,s){const a={url:t.toString(),signingStyle:$N}
e.network.fetch(a).then(e=>{i(null)},s)}pageRoute(e){return[{protocol:TW,path:`/${IW}/resetAndRedirect`}]}pageType(){return Ej}}class Y2 extends Y0{constructor(){super("WebUIPageBuilder")}pageType(){return $L}handlePage(e,t,n,r,o,i,s){const a=new _q($L)
a.pageUrl=t.toString(),i(a)}pageRoute(e){const t=e.bag.webViewRegexStrings,n=[]
for(const e of t)n.push(new RegExp(e,"i"))
return[{regex:n}]}}class J2{constructor(){this.$intentKind="UpdateAppEventNotificationIntent"}async perform(e,t){return await mp(t,e)}}class K2 extends Y0{constructor(e,t){super("AppEventsController"),t.exportingService("AppEvents",{updateAppEventNotification:async t=>await mp(e,t)})}handlePage(e,t,n,r,o,i,s){s(new Error(TU))}pageRoute(e){return[]}pageType(){return Ej}}class Z2 extends Y0{constructor(){super("AppClipSubscribeBuilder")}pageType(){return Ej}handlePage(e,t,n,r,o,s,a){const c=d(n[pq.appId])
i(c)||a(new Error(`No adamId supplied in appClipSubscribe url: ${t}`))
const l=new Uz(e).withIdOfType(c,Gj).includingAdditionalPlatforms(O(e))
An(e,l).then(t=>{const n=_(e,t),r={metricsOptions:{pageInformation:new sX({}),locationTracker:{rootPosition:0,locationStack:[]}},artworkUseCase:null},o=hu(e,n,r),i=(new kq).set(LB,bW).set(tN,eN).path($W).path(c).build(),a=new _q(VU)
a.pageUrl=i
const l=Nf(e,oN,c,o.buttonAction),u=new CH($j)
u.actions=[a,l],s(u)},a)}pageRoute(e){return[{hostName:"appClipSubscribe",query:[pq.appId,pq.context]}]}}class Q2 extends Y0{constructor(){super("ArcadeOfferRedirectHandler")}pageType(){return HG}defaultTab(e){return $j}pageRoute(e){return[{path:"arcade/offers",query:[`${pq.offerHints}?`]},{path:"/{countryCode}/arcade/offers",query:[`${pq.offerHints}?`]}]}handlePage(e,t,n,r,o,i,s){var a
const c=null!==(a=n[pq.offerHints])&&void 0!==a?a:"deeplink_hardware_firstchance",l=new AY($j,oN,null,{offerHints:c})
l.offerHints=c
const u=new _q(AB)
u.pageData=l,u.referrerUrl=t.build(),i(u)}}class X2 extends hV{constructor(e,t,n=null,r){super(),this.title=e,this.value=t,this.systemImageName=r,this.metricsValue=n}}X2.defaultValue="pageFacetsDefaultValue",X2.trueValue=new X2(GG,yL),X2.falseValue=new X2(yL,yL)
class e4 extends hV{constructor(e,t,n,r,o=[],i=null,s=null,a=null,c=!1,l=!1,u=!1){super(),this.id=e,this.parameterName=t,this.title=n,this.displayType=r,this.defaultOptions=i,this.options=o,this.metricsParameterName=s,this.clickAction=a,this.displayOptionsInline=c,this.showsSelectedOptions=l,this.isHiddenFromMenu=u}}class t4 extends hV{constructor(e=[],t=null){super(),this.title=t,this.facets=e}}class n4 extends hV{constructor(e,t,n){super(),this.facetGroups=e,this.allowsResetButton=t,this.resetButtonTitle=n}static isDefinedNonNullNonEmpty(e){return(0,Ag.isSome)(e)&&0!==Object.keys(e).length}}n4.requestValuesForSelectedFacetOptions=function(e){if(n4.isDefinedNonNullNonEmpty(e)){const t=e.filter(e=>n4.isDefinedNonNullNonEmpty(e.value)).map(e=>e.value).join(",").split("&"),n=t[0],r=t.splice(1),o={}
for(const e of r){const t=e.split("=")
2===t.length&&(o[t[0]]=t[1])}return{value:n,additionalKeyValuePairs:o}}return null}
const r4="-releaseDateByDay&sort=name",o4="-lastUpdatedByDay&sort=name",i4="alphabet&sort=name",s4="category&sort=-releaseDate",a4="groupBy",c4=JL,l4=wC,u4=PF,d4="filter[platform]",f4={}
let p4=!1,h4=null,w4=null,g4=null,m4=null,v4=null,y4=null,A4=null,T4=null,b4=null,S4=null,P4=null
const I4={}
I4[pq.sort]=a4,I4[pq.ageRating]=vC,I4[pq.controllerSupport]=yC,I4[pq.multiplayerSupport]=AC,I4[pq.comingSoon]=c4,I4[pq.binCompatGames]=d4
class C4{constructor(){this.$intentKind="ArcadeSeeAllGamesPageIntent"}async perform(e,t){return await bp(t,e.requestDescriptor)}}class k4{constructor(){this.$intentKind="ArcadeSeeAllGamesPageMoreIntent"}async perform(e,t){return await Sp(t,e.pageToken)}}class O4 extends J0{constructor(e,t){super("ArcadeSeeAllGamesPageBuilder"),this.pageSize=20,t.exportingService(Xx,{fetchArcadeSeeAllGames:async t=>await bp(e,t),fetchMoreArcadeSeeAllGames:async t=>await Sp(e,t.pageToken)})}defaultPlatforms(e){return O(e)}defaultAttributes(e){const t=[lj,ij,YU,eG,oB,bB,xB]
return e.appleSilicon.isSupportEnabled&&t.push(AG),t}defaultTab(e){return $j}pageType(){return bF}pageRoute(e){return[{identifier:bF,path:`/${RW}`,query:[`${pq.requestDescriptor}?`,`${pq.sort}?`,`${pq.ageRating}?`,`${pq.controllerSupport}?`,`${pq.multiplayerSupport}?`,`${pq.comingSoon}?`]},{identifier:bF,hostName:`${iq}`,query:[`${pq.requestDescriptor}?`,`${pq.sort}?`,`${pq.ageRating}?`,`${pq.controllerSupport}?`,`${pq.multiplayerSupport}?`,`${pq.comingSoon}?`]},{path:"/{countryCode}/{platform}/arcade/see-all",query:[`${pq.requestDescriptor}?`,`${pq.sort}?`,`${pq.ageRating}?`,`${pq.controllerSupport}?`,`${pq.multiplayerSupport}?`,`${pq.comingSoon}?`]}]}paginationRoute(e){return[{identifier:bF,protocol:AW,path:`/${RW}/${DW}`}]}shelfRoute(e){return[{protocol:AW,path:`/${RW}/${PW}/`,query:[`${pq.token}`]}]}generatePageRequest(e,t,n){return yg.context("generatePageRequest",()=>{const t=Cp(e,n)
let r=Gf(e).includingAdditionalPlatforms(O(e)).includingRelationships([]).withSparseLimit(10).includingAttributes(Tp(e)).usingCustomAttributes($e(e))
const i=s(t.selectedFacetOptions)?t.selectedFacetOptions:yp(e)
let a=!1
for(const e of Object.keys(i)){if(e===c4&&s(i[e])){const t=i[a4]
if(s(t))switch(t[0].value){case r4:case o4:i[e][0].value=u4
break
case i4:i[e][0].value=l4
break
case s4:i[e][0].value=l4,a=!0}}e===d4&&o(i[e])&&(i[e]=f4[pq.binCompatGames].false)}a&&(r=r.withSparseCount(4))
for(const e of Object.keys(i)){const t=n4.requestValuesForSelectedFacetOptions(i[e])
if(s(t)){s(t.value)&&r.addingQuery(e,t.value)
for(const e of Object.keys(t.additionalKeyValuePairs))r.addingQuery(e,t.additionalKeyValuePairs[e])}}return r})}renderPage(e,t,n,o){return yg.context(pB,()=>{const o=h(t),i=Cp(e,n),a=Xo(e,cU,bF,o),l={url:kq.fromComponents(AW,null,`/${RW}/${DW}`).build(),metricsPageInformation:a,metricsLocationTracker:{rootPosition:0,locationStack:[]},remainingGroups:[],lastShelfIndex:0,isCompactMode:i.isCompactMode},u=new Bz(Pp(e,c(o,"results.groups"),l))
u.title=e.loc.string(IP),u.pageFacets=function(e){vp(e),e.featureFlags.isEnabled("see_all_games_segmented_nav_2024A")
const t=e.loc.string("PAGE_FACETS_FILTERS_AGE_RATINGS"),n=new e4(pq.ageRating,vC,t,I$,[v4,y4,A4,T4],[v4],"age",Ap(e,zU)),r=e.featureFlags.isEnabled("arcade_see_all_games_menu_uplift")||!1,o=new e4(pq.sort,a4,e.loc.string(Sv),I$,[h4,w4,g4,m4],r?[h4]:null,zU,Ap(e,zU)),i=e.loc.string(Tv),s=new e4(pq.controllerSupport,yC,i,PM,[b4],null,Pv,Ap(e,zU)),a=e.loc.string("PAGE_FACETS_FILTERS_MULTIPLAYER_GAMES"),c=new e4(pq.multiplayerSupport,AC,a,PM,[S4],null,Iv,Ap(e,zU)),l=new e4(pq.comingSoon,c4,e.loc.string(bv),PM,[P4],[P4],iD,Ap(e,iD))
l.isHiddenFromMenu=r
const u=new n4([],!1,null)
switch(e.client.deviceType){case Mj:u.facetGroups.push(new t4([n])),e.bag.enableComingSoonToggle&&u.facetGroups.push(new t4([l],e.loc.string(Cv))),u.facetGroups.push(new t4([s,c],e.loc.string("PAGE_FACETS_SUPPORTS_TITLE"))),u.facetGroups.push(new t4([o]))
break
case"tv":u.facetGroups.push(new t4([n],e.loc.string("PAGE_FACETS_AGE_RATINGS_TITLE_LOWERCASE")))
const t=[s,c]
e.bag.enableComingSoonToggle&&t.push(l),u.facetGroups.push(new t4(t,e.loc.string("PAGE_FACETS_FILTERS_TITLE"))),u.facetGroups.push(new t4([o],e.loc.string("PAGE_FACETS_SORT_BY_TITLE_LOWERCASE")))
break
default:o.displayOptionsInline=!0,u.facetGroups.push(new t4([o],e.loc.string(Sv))),n.showsSelectedOptions=!0,u.facetGroups.push(new t4([s,c,n],e.loc.string("PAGE_FACETS_FILTER_BY_TITLE"))),e.bag.enableComingSoonToggle&&u.facetGroups.push(new t4([l],e.loc.string(Cv)))}return u}(e),u.selectedFacetOptions=s(i.selectedFacetOptions)?i.selectedFacetOptions:yp(e),u.pageSegments=[],ti(e,u,a)
const d=u.pageMetrics.instructions
if(!r(d))for(const e of d)e.data.includingFields.push(sT)
return l.remainingGroups.length>0&&(u.nextPage=l),u})}generatePaginationRequest(e,t,n,r){const o=h(r)
let i=[],s=20,a=!0
for(const e of o.remainingGroups)a=a&&(e.data.length<s||0===i.length),a&&(i=i.concat(e.data),s-=e.data.length)
return new Uz(e,i).includingAdditionalPlatforms(O(e)).includingAttributes(Tp(e)).usingCustomAttributes($e(e))}renderPaginatedPage(e,t,n){const r=h(n),o=[]
let i=20
const a={}
for(const e of t.data)a[e.id]=e
let c=!0
for(const e of r.remainingGroups){if(c=c&&(e.data.length<i||0===o.length),c){for(let t=0;t<e.data.length;t++){const n=a[e.data[t].id]
s(n)&&(e.data[t]=n)}i-=e.data.length}o.push(e)}r.remainingGroups=[]
const l=Pp(e,o,r),u=new Bz(l)
return u.title=e.loc.string(IP),r.remainingGroups.length>0&&(u.nextPage=r),u}generateShelfRequest(e,t,n){const r=h(JSON.parse(n[sU])).remainingContent.slice(0,20),o=new Uz(e,r).includingAdditionalPlatforms(O(e)).includingAttributes(Tp(e)).usingCustomAttributes($e(e))
return We(e,o,r),o}renderShelf(e,t,n){const r=h(JSON.parse(n[sU]))
return r.remainingContent=t.data.concat(r.remainingContent.slice(20,r.remainingContent.length)),r.isFirstRender=!1,Ip(e,r)}}const E4=eP
class R4{constructor(){this.$intentKind="ArcadeSubscribePageIntent"}async perform(e,t){return await Ep(t,e.url)}}class D4 extends J0{constructor(e,t){super("ArcadeSubscribeBuilder"),t.exportingService(Xx,{fetchSubscribePage:async t=>await Ep(e,t.url)})}defaultPlatforms(e){return O(e)}defaultTab(e){return $j}defaultAttributes(e){const t=[lj,YU,eG]
return e.appleSilicon.isSupportEnabled&&t.push(AG),t}pageType(){return EC}pageRoute(e){return[{hostName:"arcadeSubscribePageCustomContext",query:[`${pq.appId}?`,`${pq.context}?`,`${pq.subscribePageMessage}?`,`${pq.askToBuyId}?`,`${pq.editorialItem}?`,`${pq.includePostSubscribeAttribution}?`]},{hostName:`${oq}`,query:[`${pq.appId}?`,`${pq.context}?`,`${pq.subscribePageMessage}?`,`${pq.askToBuyId}?`,`${pq.editorialItem}?`,`${pq.includePostSubscribeAttribution}?`]},{path:"arcade/subscribe",query:[`${pq.appId}?`,`${pq.context}?`,`${pq.subscribePageMessage}?`,`${pq.askToBuyId}?`,`${pq.editorialItem}?`,`${pq.includePostSubscribeAttribution}?`]},{path:"{countryCode}/arcade/subscribe",query:[`${pq.appId}?`,`${pq.context}?`,`${pq.subscribePageMessage}?`,`${pq.askToBuyId}?`,`${pq.editorialItem}?`,`${pq.includePostSubscribeAttribution}?`]}]}generatePageRequest(e,t,n){return Vf(e,this.marketingItemContextFromParameters(n),d(n,pq.appId)).attributingTo(t.build())}renderPage(e,t,n,o){const a=o[D4.contextualAppRequirementKey]
let l=null
s(a)&&(l=_(e,a))
const u=c(t,XI).map(e=>m(e)),f=e.arcade.getMarketingItemFromMarketingItems(u),p=f,h=$a(e,p,0,!1,!1,KL),g=this.marketingItemContextFromParameters(n),v=e.client.isPhone,y=g===DI,A=new mV($j,e.bag.arcadeAppAdamId,SB,null,y&&v?"arcadeLaunchRepairCompactSheet":kP,null,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId)
A.titles[Ox]=e.loc.string(q$,z$)
const T=d(n,pq.appId),b=function(e,t,n,r){var o
const s=Xo(e,"Upsell",n,r)
return i(r)&&(s.mercuryMetricsData=null!==(o=Kd(0,r))&&void 0!==o?o:void 0),s}(e,0,p.id,p)
b.offerType=TC,b.baseFields.upsellType=this.metricsUpsellType(g),b.baseFields.subscriptionSKU=e.bag.arcadeProductId
const S={pageInformation:b,locationTracker:{rootPosition:0,locationStack:[]}},P=Na(e,{marketingItemData:f},xa(0,p),S,!1)
if(!(P instanceof XH))throw new Error("Only buy actions are supported on the upsell page")
const I=new gY(h,e.loc.string(Ov),P,A)
let C
I.askToBuyMessage=d(n,pq.subscribePageMessage),I.askToBuyId=d(n,pq.askToBuyId),ti(e,I,b)
let k=!1
if(s(l)){I.primaryIcon=Nu(e,l,S,{useCase:3})
const t=z(l,ZG),r=Rf(e,l,S)
r.excludeAttribution=!w(n[pq.includePostSubscribeAttribution]),C=Ot(e,l,cj,g,t,r),k=!0}if(!w(n[pq.includePostSubscribeAttribution])){const e=I.pageMetrics.instructions
if(!r(e))for(const t of e)t.data.includingFields.push(Jk)}let O=[]
const E=o[D4.contextualIconsRequirementKey]
if(s(E)&&(O=M(E)),i(f)&&(O=se(f,Uj)),s(O)){const t=[]
for(const n of O)if(n.id===T){if(!k){I.primaryIcon=Nu(e,n,S,{useCase:3})
const t=z(l,ZG),r=Rf(e,n,S)
C=Ot(e,n,cj,g,t,r)}}else t.push(Nu(e,n,S,{useCase:2}))
I.icons=t}return i(C)&&(P.postSubscribeAction=C),y&&i(T)&&(I.openAppAction=new $H(T)),s(I.icons)||i(I.primaryIcon)||(I.artwork=this.genericArtworkFromData(e,p)),y&&(I.singleIcon=I.primaryIcon),I.subscribedOfferButtonAction=new CH($j),I}genericArtworkFromData(e,t){if(!i(t))return null
const n=e.client.isPhone,r=function(e,t,n){const r=function(e,t){return ka(e,t)}(e,t)
return p(r,n)}(e,t,n?Zy:Qy)
if(!s(r))return null
let o=null,a=f(r,VN)
return n?(o="of",a=a-296-1602):(o="og",a=a-344-772),Fu(e,r,{cropCode:o,allowingTransparency:!0,useCase:7,overrideHeight:a})}metricsUpsellType(e){return i(e)?e:oN}marketingItemContextFromParameters(e){let t=d(e,pq.context)
const n=d(e,pq.askToBuyId)
switch(o(t)&&s(n)&&(t=EI),t){case Om:return DI
case EI:return Cm
default:return t}}}D4.contextualIconsRequirementKey="contextualIconsRequirement",D4.contextualAppRequirementKey="contextualPrimaryIconRequirement"
const _4="amdImpressionData"
class L4 extends J0{constructor(e=null){super(e||"AbstractGroupingPageController")}generateAdditionalPageRequirements(e,t,n){var r
const o=super.generateAdditionalPageRequirements(e,t,n),i=e.amsEngagement
if(!i||!Oo(e))return o
const s=[EU,Gj,$j],a=null===(r=e.bag.tabsStandard.find(e=>e.url===t.toString()))||void 0===r?void 0:r.id
if(!s.includes(a))return o
const c={timeout:1e3,eventType:tX,tab:a}
return o[_4]=new q0(i.performRequest(c),!1),o}renderPage(e,t,n,r,o,s){return yg.context(Xy,()=>{const a=_(e,t)
if(!a)return null
if(!ne(a,hF))return null
const c=Xo(e,Ek,a.id,t),l=yr(e)
c.recoMetricsData=Zd(c.recoMetricsData,null,l)
const u={shelves:[],metricsPageInformation:c,metricsLocationTracker:{rootPosition:0,locationStack:[]},pageGenreAdamId:q(a,"id"),pageGenreId:null,hasAuthenticatedUser:i(e.user.dsid),refreshController:Cn(t),recoImpressionData:ko(0,null==r?void 0:r[_4])},d=yc(e,a)
return this.renderGroupingPage(e,d,u,n,r,o,s)})}}class x4{constructor(){this.$intentKind="ArcadePageIntent"}async perform(e,t){return await Dp(t,e)}}class M4 extends L4{constructor(e,t){super("ArcadePageBuilder"),t.exportingService(Xx,{fetchPage:async t=>await Dp(e,t)})}defaultPlatforms(e){return O(e)}defaultAttributes(e){const t=[lj,YU,eG,N$]
return e.appleSilicon.isSupportEnabled&&t.push(AG),t}pageType(){return $j}pageRoute(e){return[{protocol:TW,path:`/${IW}/${OW}`,query:[pq.isArcade,`${pq.isTrialAvailable}?`,`${pq.isTrialEnrolled}?`,`${pq.isSubscribed}?`,pq.id]},{hostName:nq,path:`/WebObjects/{storePreviewInstance}/wa/${OW}`,query:[pq.isArcade,`${pq.isTrialAvailable}?`,`${pq.isTrialEnrolled}?`,`${pq.isSubscribed}?`,pq.id,`${pq.useReleaseId}?`]},{protocol:TW,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}",query:[pq.isArcade,`${pq.isTrialAvailable}?`,`${pq.isTrialEnrolled}?`,`${pq.isSubscribed}?`]},{protocol:TW,path:"{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}",query:[pq.isArcade,`${pq.isTrialAvailable}?`,`${pq.isTrialEnrolled}?`,`${pq.isSubscribed}?`]},{protocol:TW,path:"{apiVersion}/editorial/{countryCode}/groupings/{id}",query:[pq.isArcade,`${pq.isTrialAvailable}?`,`${pq.isTrialEnrolled}?`,`${pq.isSubscribed}?`]}]}generatePageRequest(e,t,n){const r=n[pq.id],o=w(n[pq.isSubscribed]),s=w(n[pq.isTrialEnrolled])
if(!a(r))throw new Error(`Unable to map ${t.build()} to a media api url`)
const c=[lj,ij,YU,eG,xB,FF]
e.appleSilicon.isSupportEnabled&&c.push(AG)
let l=new Uz(e).includingAttributes(c).includingMacOSCompatibleIOSAppsWhenSupported()
ki(e)&&(l.enablingFeature(FG),l.includingScopedAttributes(xj,[pj,GU,IU]),l.includingScopedRelationships(xj,[Tj])),Oi(e)&&(l.enablingFeature(WD),_n(l)),Ei(e)&&(l.enablingFeature(E$),Ln(l))
const u=R(e)
if(i(u)&&l.addingQuery(GN,u),o){const t=!0,n=lt(e,e.bag.arcadeTrialEnrolledStateRate)
t&&s&&n?l.addingQuery(hF,"trial-enrolled"):l.addingQuery(hF,"subscriber")}else l.addingQuery(hF,"nonsubscriber"),l.includingRelationshipsForUpsell(!1)
l.withIdOfType(r,PU)
const d=t.query[pq.useReleaseId]
return fq.has(t.host)&&(null==d?void 0:d.length)>0&&(l=l.addingQuery(OP,d),l.isStorePreviewRequest=!0),l.enablingFeature(fR),l.enablingFeature(EP),l.withSparseCount(C(e)),l.includingScopedSparseLimit(YM,k(e)),l.attributingTo(t.build())}renderGroupingPage(e,t,n,r,i,a,c){return yg.context(pB,()=>{const i=w(r[pq.isSubscribed]),c=w(r[pq.isTrialAvailable]),l=w(r[pq.isTrialEnrolled]),u={}
u[pq.isArcade]="true",u[pq.isSubscribed]=`${i}`,u[pq.isTrialAvailable]=`${c}`,u[pq.isTrialEnrolled]=`${l}`,n.additionalShelfParameters=u,n.isArcadePage=!0,n.metricsPageInformation.isCrossfireReferralCandidate=!0
let d=null,f=null
if(!i){const r=Hf(e,t.originalGroupingData)
if(r)d=r.marketingItemData
else if(a){yg.unexpectedNull(SG,RP,"relationships.upsell")
const e=Wf(0,a.get(pR))
e&&(d=e.marketingItemData)}if(s(d)&&s(d.attributes)){const t={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,mercuryMetricsData:Kd(0,d)}
f=La(e,d,t),s(n)&&o(n.pageTitleEffect)&&0===n.shelves.length&&(n.pageTitleEffect=function(e,t){const n=Ta(e,t,!0),r=Aa(e,t)
return Da(0,n.artworkData||r.artworkData,!0)}(e,d)),af(n.metricsLocationTracker)}}const p=M4.insertUpsellBreakoutShelfIntoParseContextIfNecessary(f,i,n)
mc(e,t,n)
const h=new Nz(n.shelves)
ti(e,h,n.metricsPageInformation),h.tabTitle=q(t.originalGroupingData,jj)
const g=q(t.originalGroupingData,jj)
e.host.clientIdentifier,p||(h.title=g)
const m=new $V(_U)
m.color=G("primaryText"),m.isFallbackStyle=!0,h.titleEffect=n.pageTitleEffect||m,h.presentationOptions=[]
let v=!1
if(n.shelves.length>0){const e=n.shelves[0].contentType===wx,t=n.shelves[0].contentType===yN,r=n.shelves[0].contentType===PN
v=e||t||r}if(v&&h.presentationOptions.push(BM),!i&&s(f)){h.subscriptionOfferAction=M4.createSubscribeAction(e,f,{id:null,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,targetType:Nj}),h.subscriptionOfferDisplayProperties=new mV($j,e.bag.arcadeAppAdamId,SB,null,$j,null,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId)
const t={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},r={marketingItemData:d}
h.subscriptionLockup=bu(e,r,t,g$,SB,bk)}const y={id:"arcade-see-all-games-footer",presentationHints:{},featuredContentId:-1,featuredContentData:null,nativeGroupingShelfId:1,metricsPageInformation:n.metricsPageInformation,metricsLocationTracker:n.metricsLocationTracker,pageGenreId:n.pageGenreId,title:null,shouldFilter:!1,remainingItems:[],isFirstRender:!0,isDeferring:!1,showOrdinals:!1,hasExistingContent:!1,showingPlaceholders:!1,ordinalIndex:1,isSearchLandingPage:n.isSearchLandingPage,isArcadePage:null==n?void 0:n.isArcadePage}
if(this.insertUnifiedMessageShelves(e,h),h.shelves.length>0){const t=M4.groupingArcadeFooterShelfController.createShelf(e,null,n,y,null)
h.shelves.push(t)}if(0===h.shelves.length)throw new Error(`Missing content for Arcade grouping ${JSON.stringify(r)}`)
return h.autoUpsellAction=Nf(e,oN,null,null),Rp(h),h})}static insertUpsellBreakoutShelfIntoParseContextIfNecessary(e,t,n){return yg.context("insertShelfForUpsellBreakoutIfNecessary",()=>{if(o(e))return t||yg.unexpectedNull(gG,RP,yN),!1
const r=new Ez(yN)
return r.items=[e],r.presentationHints={isFirstShelf:!0},n.shelves.push(r),!0})}static createSubscribeAction(e,t,n){if(o(t))return null
{const r=Nf(e,LI,null,null,n)
return r.title=t.offerButtonAction.title,r}}createTermsAndConditionsShelf(e){return!r(e.bag.termsAndConditionsURL)&&e.client.deviceType,null}supportsDataAugmenting(){return!0}additionalDataKeysNeededForData(e,t,n){if(r(n))return null
const o=_(e,t),i=w(n.parameters[pq.isSubscribed]),s=Hf(e,o)
return!i&&r(s)?new Set([pR]):null}fetchAdditionalDataForKey(e,t){return yg.context("fetchAdditionalDataForKey",async()=>{let n
return t===pR&&(n=Vf(e,g$),yg.unexpectedNull(gG,mU,"upsellRecovery.marketingItem")),r(n)?null:await An(e,n).catch(()=>null)})}insertUnifiedMessageShelves(e,t){t.shelves.length<=0||(t.shelves.splice(1,0,bc(0,"arcadePageHeader")),t.shelves.splice(6,0,bc(0,"arcadePageMid")),t.shelves.push(bc(0,"arcadePageFooter")))}}M4.groupingArcadeFooterShelfController=new y0
const $4={width:1680,height:3636,url:"https://is3-ssl.mzstatic.com/image/thumb/Features123/v4/9a/d4/48/9ad448b5-ddbb-f295-fae3-2a2e69bf5604/source/{w}x{h}{c}.{f}",bgColor:kv,textColor1:"f7c981",textColor2:"f8a710",textColor3:"c6a067",textColor4:"c6850d"},F4={width:4320,height:3240,url:"https://is3-ssl.mzstatic.com/image/thumb/Features124/v4/57/71/7f/57717f8b-c486-4faf-7558-a4f88186855d/source/{w}x{h}{c}.{f}",bgColor:kv,textColor1:"fdc97a",textColor2:"f73a03",textColor3:"caa161",textColor4:"c52e02"}
class N4{constructor(){this.$intentKind="ArcadeWelcomePageIntent"}async perform(e,t){return await Lp(t,e.url)}}class B4 extends Y0{constructor(e,t){super("ArcadeWelcomeBuilder"),t.exportingService(Xx,{fetchArcadeWelcomePage:async t=>await Lp(e,t.url)})}pageType(){return"arcadeWelcome"}handlePage(e,t,n,r,o,i,s){const a=this.generatePage(e,n,r)
i(Y0.createFlowAction(a,this.pageType(),t))}pageRoute(e){return[{hostName:"arcadeWelcomePage",query:[`${pq.context}?`]}]}generatePage(e,t,n){return function(e,t){return function(e,t){const n={rootPosition:0,locationStack:[]},r=function(e,t){if(ee(t)){const t=new tW
return t.title=e.loc.string("ARCADE_WELCOME_TV_CONTINUE_BUTTON"),t}return _p(0,e.loc.string("ARCADE_WELCOME_CONTINUE_BUTTON"))}(e,t)
Lf(e,r,{id:"arcade-welcome-continue",actionType:Dj,pageInformation:new sX,locationTracker:n,targetType:Nj})
const o=function(e,t){return ee(t)?_p(0,e.loc.string(SC)):null}(e,t)
o&&Lf(e,o,{id:"arcade-welcome-create-family",actionType:Dj,pageInformation:new sX,locationTracker:n,targetType:Nj})
let i=$4,s="oe"
e.client.isPad&&(i=F4,s="og")
const a=new vY(e.loc.string("ARCADE_WELCOME_INDIVIDUAL_TITLE"),e.loc.string("Arcade.Welcome.Family.Description"),[new mY(null,null,Fu(e,i,{useCase:24,cropCode:s}))],r,o)
if(ee(t)){a.nonDismissingContinueAction=_p(0,e.loc.string(SC)),r.title=a.nonDismissingContinueAction.title
const t=new tW
t.title=e.loc.string(Ov),a.dismissingFamilyAction=t,o.title=a.dismissingFamilyAction.title}else a.nonDismissingContinueAction=_p(0,e.loc.string(SC)),r.title=a.nonDismissingContinueAction.title
return new yY(a,a)}(e,t)}(e,t[pq.context])}}class U4 extends Y0{constructor(){super("FamilyCircleBuilder")}pageType(){return Ej}defaultTab(e){return $j}handlePage(e,t,n,r,o,i,s){var a
const c=new CH($j),l=null!==(a=t.query[GB])&&void 0!==a?a:tv,u=new eW(QG,l,t.query)
c.actions.push(u),i(c)}pageRoute(e){return[{hostName:`${sq}`},{path:`${sq}`}]}}class G4{constructor(){this.$intentKind="ArcadeUpsellGridIntent"}async perform(e,t){return await xp(t,e.contentDictionary)}}class j4 extends Y0{constructor(e,t){super("MarketingItemUpsellBuilder"),t.exportingService(Xx,{fetchUpsellGrid:async t=>await xp(e,t.contentDictionary)})}pageType(){return AB}pageRoute(e){return[{hostName:`${oq}`,query:[`${pq.appId}?`,`${pq.context}?`,`${pq.includePostSubscribeAttribution}?`],exclusions:[{query:[`${pq.askToBuyId}`]}]},{path:"arcade/subscribe",query:[`${pq.appId}?`,`${pq.context}?`,`${pq.includePostSubscribeAttribution}?`]},{path:"{countryCode}/arcade/subscribe",query:[`${pq.appId}?`,`${pq.context}?`,`${pq.includePostSubscribeAttribution}?`]}]}handlePage(e,t,n,r,o,i,s){var a
const c=function(e){var t
switch(e){case EI:return Cm
case RI:return oN
case km:return OR
case Om:return DI
case DU:return rM
case"topShelfATV":return"arcadeTopShelfATV"
case"topShelfATVClickThrough":return"arcadeTopShelfATVClickThrough"
case iN:return _I
case"editorialItemCanvas":return ER
case vL:return vL
case g$:return g$
case LI:return LI
default:return null!==(t=e)&&void 0!==t?t:oN}}(d(n,pq.context)),l=d(n,pq.appId),u=new AY($j,c,l),f=new _q(AB),p=null===(a=e.metricsIdentifiersCache)||void 0===a?void 0:a.getMetricsFieldsForTypes([kg.user,kg.client]);(0,Tg.isSome)(p)&&(u.metricsOverlay={...u.metricsOverlay,...p}),f.pageData=u,i(f)}}class V4{constructor(){this.$intentKind="ArcadeSubscriptionDecorationIntent"}async perform(e,t){return await Mp(t,e.json)}}class H4 extends Y0{constructor(e,t){super("ArcadePurchaseDecorationController"),t.exportingService(BP,{decorateArcadePurchase:async t=>await Mp(e,t.intent)})}handlePage(e,t,n,r,o,i,s){s(new Error(TU))}pageRoute(e){return[]}pageType(){return Ej}}class W4{constructor(){this.$intentKind="PersonalizedOfferContextIntent"}async perform(e,t){return await $p(t,e.offerToken)}}class q4 extends Y0{constructor(e,t){super("CompleteCollectionController"),t.exportingService("CMCPersonalizationData",{fetchPersonalizedOfferContext:async t=>await $p(e,t.offerToken)})}handlePage(e,t,n,r,o,i,s){s(new Error(TU))}pageRoute(e){return[]}pageType(){return Ej}}class z4{constructor(){this.$intentKind="PurchaseDecorationIntent"}async perform(e,t){return await Fp(t,e.json)}}class Y4{constructor(){this.$intentKind="PurchasesDecorationIntent"}async perform(e,t){const n=[]
for(const r of e.json)n.push(await Fp(t,r))
return n}}class J4{constructor(){this.$intentKind="BatchPurchaseDecorationIntent"}async perform(e,t){const n=[]
for(const r of e.json)n.push(await Fp(t,r))
const r=n.map(e=>e.buyParams),[o,i]=function(e){const t=[]
for(const n of e)t.push(new RY(n).toRawMap())
const n=function(e){if(0===e.length)return{}
const t={},n=e[0]
for(const r of Object.keys(n)){let o=!0
for(let t=1;t<e.length;t++)if(e[t][r]!==n[r]){o=!1
break}o&&(t[r]=n[r])}return t}(t)
for(const e of t)for(const t of Object.keys(n))delete e[t]
return[t,n]}(r),s=[]
for(let e=0;e<n.length;e++)s.push(new EY(n[e],o[e]))
return new OY(s,i)}}class K4 extends Y0{constructor(e,t){super("PurchaseDecorationController"),t.exportingService(BP,{decoratePurchase:async t=>await Fp(e,t.intent)})}handlePage(e,t,n,r,o,i,s){s(new Error(TU))}pageRoute(e){return[]}pageType(){return Ej}}class Z4{constructor(){this.$intentKind="IconArtworkIntent"}async perform(e,t){return await Np(t,e.adamIds)}}class Q4 extends Y0{constructor(e,t){super("IconLookupController"),t.exportingService("ContentData",{fetchIconArtwork:async t=>await Np(e,t.adamIds)})}handlePage(e,t,n,r,o,i,s){s(new Error(TU))}pageRoute(e){return[]}pageType(){return Ej}}class X4 extends Y0{constructor(){super("ContentLink")}pageType(){return Vj}handlePage(e,t,n,o,s,a,c){r(d(n,pq.path))?c(new Error(`Unhandled search url: ${t}`)):e.network.fetch({url:t.build(),method:v$}).then(n=>{this.hasGotoURLInResponse(e,n)?a(new tW):i(n.url)?e.required(y2).fetchAction(e,n.url,s).then(a,c):c(new Error(`Unhandled search url: ${t}`))}).catch(()=>{c(new Error(`Unhandled search url: ${t}`))})}pageRoute(e){return[{hostName:"search.itunes.apple.com",path:"WebObjects/MZContentLink.woa/wa/link",query:[pq.path]}]}hasGotoURLInResponse(e,t){const n=t.body
if((0,Tg.isNothing)(n)||0===n.length)return!1
try{const t=g(e.plist.parse(n)),r=d(t,_C),o=d(t,LC)
return!!(r===xC&&(0,Tg.isSome)(o)&&o.length>0)}catch{return!1}}}class e5 extends Y0{constructor(){super("ExperimentLink")}pageType(){return Ej}handlePage(e,t,n,r,o,i,s){const a={url:t.toString()}
e.network.fetch(a).then(e=>{if(e.status>=200&&e.status<300){const e=new zH(cj)
e.title="You have been enrolled in the AB test",e.message=`Test ${t.query.ab2} is now active on your device.`,e.buttonTitles=["OK"],e.buttonActions=[new CH(rG)],i(e)}else s(new Error(`unexpected response status: ${e.status} from ${e.url}`))}).catch(s)}pageRoute(e){return[{protocol:TW,hostName:"xp.apple.com",path:"register",query:["ab2"]}]}}const t5=[Gj,DE]
class n5 extends Y0{constructor(){super("FallbackActionBuilder")}handlePage(e,t,n,i,s,a,c){(async function(e,t,n,i){var s
const a=t.query[CG]
switch(a){case iG:const n=new _q(gB)
n.presentationContext=WB,n.animationBehavior=pF
const c=t.query[xR]
return c?n.pageUrl=c:t.query[Fm]?n.pageUrl=kq.fromComponents(null,a,null,{continuation:t.query[Fm]}).toString():n.pageUrl=a,await Promise.resolve(n)
case Nm:const l=new _q(gB)
return l.presentationContext=WB,l.animationBehavior=pF,l.pageUrl=function(e){let t=e.bag.createAccountUrl
return(r(t)||typeof t!==fj)&&(t=WI),new kq(t)}(e).build(),await Promise.resolve(l)
case MR:let u,d=[]
{u=$R
const e=new _q(iG)
e.presentationContext=WB,e.animationBehavior=ZU
const t=new _q(Bm)
t.animationBehavior=ZU,d=[e,t]}const f=new CH(u)
return f.actions=d,await Promise.resolve(f)
case FR:const p=t.query[xR]
if(p.length>0){const t={url:p,signingStyle:$N}
return e.network.fetch(t),await Promise.resolve(new tW)}return await Promise.reject(new Error("Original url is missing when creating deep-link for checkForPreorders."))
case cM:const h=new _q(gB)
h.presentationContext=WB,h.animationBehavior=pF
const w=new kq(a)
return t.query[y$]&&t.query[y$].length>0&&w.param(pq.code,t.query[y$]),h.pageUrl=w.build(),await Promise.resolve(h)
case lM:const g=new _q(gB)
return g.presentationContext=WB,g.animationBehavior=pF,g.pageUrl=a,await Promise.resolve(g)
case Um:const m=new _q(gB)
return m.presentationContext=WB,m.animationBehavior=pF,m.pageUrl="charity",await Promise.resolve(m)
case ej:let v=t.query[uN]
if(v||(v=null!==(s=t.query.q)&&void 0!==s?s:t.query[HI]),v&&v.length>0){const t=v
if(v=v.replace(/\+/g," ").trim(),t.endsWith("+")&&v.length>0&&(v+="+"),o(v))return await Promise.reject(new Error("Empty search term."))
const n=qe(e,Gp(e,{term:v,origin:uM})).toString(),r=new pQ(v,v,n,uM,null,null,null,i)
{const e=new _q(ej)
return e.pageData=r,await Promise.resolve(e)}}{const e=new CH(ej)
return await Promise.resolve(e)}}return await Promise.reject(new Error(`FlowAction was not able to be created for this action URL: ${t}`))})(e,t,0,s).then(a,c)}pageRoute(e){return[{query:[`${pq.action}=account`]},{query:[`${pq.action}=signup`]},{query:[`${pq.action}=purchased`]},{query:[`${pq.action}=checkForPreorders`]},{query:[`${pq.action}=redeem`]},{query:[`${pq.action}=gift`]},{query:[`${pq.action}=donate`]},{query:[`${pq.action}=search`]}]}pageType(){return Ej}}class r5 extends Y0{constructor(){super("GameCenterProfileLinkController")}defaultTab(e){return $j}pageType(){return Ej}handlePage(e,t,n,r,o,i,s){let a=!1
if(e.host.clientIdentifier===ZV)a=!0
else for(const t of e.bag.tabsStandard)if("ocelot"===d(t,"id")){a=!0
break}const c=new CH(a?$j:EU),l=n[pq.id]||"GameCenter.localPlayer"
c.actions.push(new iW(l)),i(c)}pageRoute(e){return[{identifier:UP,path:`/${XW}`,query:[`${pq.id}?`]}]}}class o5 extends Y0{constructor(){super("LibraryLink")}pageType(){return Ej}handlePage(e,t,n,r,o,i,s){const a=`https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewGenre?id=${t.query.g}&mt=8`
e.required(y2).fetchAction(e,a,o).then(i,s)}pageRoute(e){return[{query:[`${pq.action}=library-link`]}]}}class i5 extends Y0{constructor(){super("LongUrlBuilder")}pageType(){return Ej}handlePage(e,t,n,r,o,a,c){const l=t.query[xR];(null==l?void 0:l.length)>0?e.network.fetch({url:l,method:v$,signingStyle:$N}).then(t=>{let n
const r=t.headers["Content-Type"]
if(t.ok&&t.redirected&&i(t.url))n=t.url
else{if(t.ok&&l!==t.url)return e.console.log(`[LongUrlBuilder] Url redirect was already processed. Original url: ${l}. Redirected url: ${t.url}`),void a(new tW)
if(t.ok&&s(r)&&-1!==r.toLowerCase().indexOf("text/xml")){const r=g(e.plist.parse(t.body)),o=d(r,_C),i=d(r,LC)
o===xC&&i&&(n=i)}}(null==n?void 0:n.length)>0?e.required(y2).fetchAction(e,n,o).then(a,c):c(new Error(`Unable to map long url for: ${l}`))},e=>{c(new Error(`Unable to fetch long url: ${l}`))}):c(new Error("Original url is missing when creating deep-link for checkForLongUrl."))}pageRoute(e){return[{query:[`${pq.action}=checkForLongUrl`]}]}}class s5 extends Y0{constructor(){super("MultiplexingBuilder")}pageType(){return Ej}handlePage(e,t,n,r,o,i,s){const a=new Uz(e).withIdOfType(n.id,uL)
An(e,a).then(async t=>await this.actionFromMultiplexResponse(e,t)).then(i,s)}pageRoute(e){return[{protocol:TW,path:"WebObjects/MZStore.woa/wa/viewFeature",query:[pq.id]}]}async actionFromMultiplexResponse(e,t){const n=p(t,"results.target"),r=p(t,"results.target-link")
return n?await this.targetDataToAction(e,n):r?await this.targetLinkDataToAction(r):null}async targetDataToAction(e,t){const n=d(t,Ex)
if(!n)return null
const r=da(e,n)
return await e.required(y2).fetchAction(e,r,null)}async targetLinkDataToAction(e){const t=d(e,gj),n=new kq(t),r=this.addProtocolToURLIfNeeded(n).toString()
return await Promise.resolve(new OH(r,!1))}addProtocolToURLIfNeeded(e){return e.protocol||(e.protocol=gR),e}}class a5 extends Y0{constructor(){super("NotificationSettingsLinkController")}pageType(){return Ej}handlePage(e,t,n,r,o,i,s){i(new _q(Lv))}pageRoute(e){const t=[]
return t.push({path:"notifications/settings"}),t}}class c5 extends Y0{constructor(){super("TabSelectionBuilder")}pageType(){return Ej}handlePage(e,t,n,r,o,i,s){var a
const c=t.pathComponents(),l=c.length-1
let u,d
u=l>=0?c[l]:t.query[CG],null!=u&&this.currentDeviceSupportsUrlAction(e,u)&&(d=new CH(u),d.popToRoot=null!==(a=t.query.popToRoot===GG)&&void 0!==a&&a),void 0===d&&(d=new CH(Cj)),i(d)}pageRoute(e){const t=[Cj,EU,Gj,lF,_N,mR,vR,yR,DL,$j,p$],n=[]
for(const e of t){const t=`${pq.action}=${e}`,r=`${e}`
n.push({query:[t]}),n.push({path:r}),n.push({path:`{countryCode}/${r}`})}return n.push({path:"{countryCode}/ipad"}),n.push({path:"{countryCode}/iphone"}),c5.supportedIOSTabs.forEach(e=>{n.push({path:`{countryCode}/ipad/${e}`}),n.push({path:`{countryCode}/iphone/${e}`})}),n}currentDeviceSupportsUrlAction(e,t){return!!c5.supportedIOSTabs.includes(t)}}c5.supportedMacTabs=[lF,$j,_N,mR,vR,yR,DL,ej],c5.supportedIOSTabs=[Cj,Gj,EU,$j,ej],c5.supportedTvTabs=[lF,Gj,EU,$j,ej],c5.supportedVisionOSTabs=[p$,$j,ej]
class l5 extends Y0{constructor(){super("PassbookBuilder")}pageType(){return Ej}handlePage(e,t,n,r,o,i,s){const a=this.assemblePassbookRoomURL(e,t).build()
e.required(y2).fetchAction(e,a,o).then(i,s)}pageRoute(e){return[{query:[`${pq.action}=passbook`]}]}assemblePassbookRoomURL(e,t){let n=e.bag.passbookMainURL
return null!=n&&typeof n===fj||(n="https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewFeature?id=717384713&mt=8"),new kq(n)}}class u5 extends Y0{constructor(){super("WatchCategoryBuilder")}pageType(){return Ej}handlePage(e,t,n,r,o,i,s){if(e.client.deviceType!==Lj)return void s(new Error(`Unsupported url for current platform: ${t}`))
const a=e.bag.watchAppsGroupingURL
e.required(y2).fetchAction(e,a,o).then(e=>{const t=new CH(Gj)
t.actions=[e],i(t)},s)}pageRoute(e){return[{query:[`${pq.action}=watchCategory`]}]}}class d5 extends Z0{}const f5=[jN,kU,Pj,OM,cx],p5=[jN,kU,jC,Pj,kM,gD,sx,ax],h5=[jN,VC,kU,kM]
class w5{}class g5 extends Y0{constructor(){super("DeveloperBuilder")}handlePage(e,t,n,r,o,i,s){const c=function(e,t){const n=fa(t)
if(!a(n))throw new Error(`Unable to map ${t.build()} to a media api url`)
return new Uz(e).withIdOfType(n,eU).includingAdditionalPlatforms(O(e)).includingRelationships(wa(e)).includingAttributes(ha(e)).includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes($e(e)).attributingTo(t.build())}(e,t)
An(e,c).then(t=>Vp(e,t)).then(e=>Y0.createFlowAction(e,Vj,t)).then(i,s)}pageRoute(e){return[{protocol:TW,path:`/${BW}/{id}`},{protocol:TW,path:`/${BW}/{developerName}/{id}`},{protocol:TW,path:`/{countryCode}/${BW}/{developerName}/{id}`},{protocol:TW,path:"/{countryCode}/artist/{developerName}/{id}"},{protocol:TW,path:`/${IW}/viewArtist`,query:[pq.id,`${pq.v0}?`]}]}handleShelf(e,t,n,r,i,s){const a=n[sU],c=JSON.parse(a),l=new Uz(e,c.remainingData).includingAdditionalPlatforms(O(e)).includingAttributes(ha(e)).includingMacOSCompatibleIOSAppsWhenSupported()
An(e,l).then(t=>function(e,t,n){const r=zp(e,n.title,n.developerId,L(t),n.relationship,n.contentType,n.lockupListOptions,n.lockupListOptions.lockupOptions.metricsOptions.pageInformation,n.lockupListOptions.lockupOptions.metricsOptions.locationTracker,n.roomUrl,(0,Tg.isSome)(n.roomUrl))
return r.mergeWhenFetched=!0,!n.hasExistingContent&&o(r.items)&&(r.isHidden=!0),r}(e,t,c)).then(i,s)}shelfRoute(e){return[{protocol:AW,path:`/${BW}/${PW}/{token}`}]}pageType(){return Vj}}class m5 extends Y0{constructor(){super("DeveloperHrefBuilder")}handlePage(e,t,n,r,o,i,s){const a=n[pq.href],c=function(e,t){return new Uz(e,t).includingAdditionalPlatforms(O(e)).includingAttributes(ha(e)).includingRelationships(wa(e)).includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes($e(e))}(e,a)
An(e,c).then(t=>Vp(e,t)).then(e=>Y0.createFlowAction(e,Vj,t)).then(i,s)}pageRoute(e){return[{protocol:AW,path:`/${BW}/${YW}`,query:[pq.href]}]}pageType(){return Vj}}class v5 extends Q0{constructor(){super("DeveloperRoomBuilder")}pageRoute(e){return[{protocol:AW,path:`/${BW}/${xW}/{token}`}]}paginationRoute(e){return[{protocol:AW,path:`${this.paginationPath}`,query:[`${pq.token}`]}]}generatePageRequest(e,t,n){const o=n[sU],i=JSON.parse(o)
if(r(i))throw new Error(`Unable to map ${t.build()} to a media api url`)
return new Uz(e,i.url).withSparseLimit(i.maxPerPage).includingAdditionalPlatforms(O(e)).includingAttributes(ha(e))}renderPage(e,t,n,r){return yg.context(pB,()=>{const r=n[sU],o=JSON.parse(r),i=Xo(e,cU,`${o.developerId}_${o.relationshipId}`,t)
o.metricsPageInformation=i,o.metricsLocationTracker={rootPosition:0,locationStack:[]}
const s=this.pageWithContent(e,t,o)
return s.title=o.title,this.configurePaginationForPage(s,o,t.next),ti(e,s,i),s})}generatePaginationRequest(e,t,n,r){var o
const i=r,a=ot(0,i)
let c
return s(a)?c=new Uz(e,a):(null===(o=i.nextHref)||void 0===o?void 0:o.length)>0&&(c=new Uz(e,i.nextHref).withSparseLimit(i.maxPerPage)),c.includingAdditionalPlatforms(O(e)).includingAttributes(ha(e)),c}renderPaginatedPage(e,t,n){const r=n,o=s(r.remainingContent),i=this.pageWithContent(e,t,r,!o),a=it(0,r)
return this.configurePaginationForPage(i,a,o?r.nextHref:t.next),i}configurePaginationForPage(e,t,n){const r=(null==n?void 0:n.length)>0,o=s(t.remainingContent)
r||o?(t.nextHref=n,t.url=`${this.paginationUrl}?${pq.token}=${JSON.stringify(t)}`,e.nextPage=t):e.nextPage=null}}e(377)
class y5 extends J0{constructor(){super("EditorialPageController")}defaultPlatforms(e){return O(e)}prepareRequest(e,t,n,r,o){super.prepareRequest(e,t,n,r,o)
const s=r.pathname===`/${tq}/${PW}`
let a
t.includingScopedRelationships("editorial-shelves",[Uj]).includingScopedRelationships(rU,[ED]),s?t.includingAssociateKeys(Gj,[MB]).includingAssociateKeys(kj,[MB]):t.includingRelationships([nx]).withSparseCount(y5.pageSparseCount).withSparseLimit(y5.pageSparseLimit).includingAssociateKeys(gk,[MB]),Jp(e,t),a=r.query[pq.context]||R(e),i(a)&&t.addingQuery(GN,a)}generatePageRequest(e,t,n){let r
r=t.host===cq?e.bag.safariExtensionsEditorialPageId:t.query[pq.id]||n[pq.id]
const i=n[pq.name]
if(o(r)&&o(i))throw new Error(`Unable to map ${t.build()} to a media api url`)
const s=new Uz(e).forType(rU)
return(null==r?void 0:r.length)>0&&s.withIdOfType(r,rU),(null==i?void 0:i.length)>0&&s.addingQuery(pq.name,i),s.attributingTo(t.build())}pageRoute(e){return[{protocol:AW,path:`${tq}`,query:[`${pq.name}`,`${pq.isArcade}?`]},{protocol:AW,path:`${tq}`,query:[`${pq.id}`,`${pq.isArcade}?`]},{protocol:TW,path:"/{countryCode}/editorial-page/id{id}"},{protocol:TW,path:"/editorial-page/id{id}"},{protocol:TW,path:"/{countryCode}/{platform}/editorial/{id}"},{protocol:TW,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/editorial-pages/{id}",query:[`${pq.name}?`,`${pq.isArcade}?`]},{path:"{apiVersion}/{realm}/editorial/{countryCode}/editorial-pages/{id}",query:[`${pq.name}?`,`${pq.isArcade}?`]},{path:"{apiVersion}/editorial/{countryCode}/editorial-pages/{id}",query:[`${pq.name}?`,`${pq.isArcade}?`]},{protocol:TW,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/editorial-pages/{id}",query:[`${pq.name}?`,`${pq.isArcade}?`]},{path:"{apiVersion}/{realm}/editorial/editorial-pages/{id}",query:[`${pq.name}?`,`${pq.isArcade}?`]},{path:"{apiVersion}/editorial/editorial-pages/{id}",query:[`${pq.name}?`,`${pq.isArcade}?`]}]}pageType(){return Vj}renderPage(e,t,n,a,c,l){return yg.context("renderEditorialPage",()=>{var a
const c=_(e,t),l=se(c,nx)
if(!s(l))return null
const u=Xo(e,"Editorial",c.id,t),d={rootPosition:0,locationStack:[]},f=yr(e)
u.recoMetricsData=Zd(u.recoMetricsData,null,f)
const p=Cn(t),h=w(n,pq.isArcade),g=w(n[pq.isSubscribed]),m=[]
let v=null,y=null
i(c.attributes)&&(v={id:c.id,type:c.type,attributes:c.attributes,relationships:c.relationships})
for(const t of l){const n=m.length,r=Ah(e,v.id,t,h,n,u,d),i=kh(e,v,r)
if(!o(i)){if(0===m.length){const e=i.presentationHints
i.presentationHints={...e,isFirstShelf:!0}}h&&!g&&i.contentType===yN&&(y=Oh(e,r)),m.push(i)}}const A=h?new Nz(m):new xz(m)
A.title=q(c,KB),A.shareAction=this.shareSheetActionFromData(e,c),A.pageRefreshPolicy=On(e,p),h&&i(y)&&(A.subscriptionLockup=y),h&&(u.isCrossfireReferralCandidate=!0),ti(e,A,u)
const T=(null===(a=m[m.length-1])||void 0===a?void 0:a.contentType)===Sk
if(e.client.deviceType!==Fj&&"tv"!==e.client.deviceType&&!T){const t=e.bag.termsAndConditionsURL
if(!r(t)){const n=Tc(e,t)
m.push(n)}}if(m.length>0){const e=m[0].contentType===wx,t=m[0].contentType===yN,n=m[0].contentType===PN;(e||t||n)&&A.presentationOptions.push(BM)}return Rp(A),A})}shelfRoute(e){return[{protocol:AW,path:`/${tq}/${PW}/`,query:[`${pq.token}`]}]}generateShelfRequest(e,t,n){const r=n[pq.token],o=JSON.parse(decodeURIComponent(r)),i=s(o.remainingItems),a=!i&&(0,Ag.isSome)(o.recommendationsHref)&&o.recommendationsHref.length>0
if(i){const t=o.remainingItems,n=new Uz(e,t,!0,[MB])
return We(e,n,t),n}if(a){const t=new Uz(e,o.recommendationsHref)
return ki(e)&&(t.enablingFeature(FG),t.includingMetaKeys(YM,[Cx,HD]),t.includingScopedAttributes(xj,[pj,GU,IU]),t.includingScopedRelationships(xj,[Tj])),Ei(e)&&(t.enablingFeature(E$),Ln(t)),t}return null}renderShelf(e,t,n){var i
const a=n[pq.token],c=JSON.parse(decodeURIComponent(a)),l=s(c.remainingItems),u=!l&&(null===(i=c.recommendationsHref)||void 0===i?void 0:i.length)>0
if(c.isFirstRender=!1,l)c.remainingItems=this.buildHydratedShelfItems(e,c.remainingItems,t)
else if(u){c.data={...c.data,..._(e,t)}
const n=se(c.data,Uj)
c.remainingItems=s(n)?n:[],Th(e,c.data,c)}const d=kh(e,void 0,c)
return o(d)&&!c.hasExistingContent?this.makeHiddenShelf():(function(e,t,n){if(!o(n.originalPlaceholderShelfImpressionMetrics))if(r(t.impressionMetrics))t.impressionMetrics=n.originalPlaceholderShelfImpressionMetrics
else for(const e in n.originalPlaceholderShelfImpressionMetrics.fields)Object.prototype.hasOwnProperty.call(n.originalPlaceholderShelfImpressionMetrics.fields,e)&&(t.impressionMetrics.fields[e]=n.originalPlaceholderShelfImpressionMetrics.fields[e])}(0,d,c),!c.hasExistingContent&&o(d.items)&&(d.isHidden=!0),d)}buildHydratedShelfItems(e,t,n){var r,o,i,s
const a=new Map,c=L(n)
for(const t of c)a[this.dataMapKey(e,t.type,t.id)]=t
const l=[]
for(const n of t){const t=a[this.dataMapKey(e,n.type,n.id)]
if((0,Ag.isSome)(t)){const c=Vt(0,n)
if((0,Ag.isSome)(c)){const n=a[this.dataMapKey(e,MB,c.id)]
if((0,Ag.isSome)(n)){const e=null!==(r=t.meta)&&void 0!==r?r:{},a=null!==(o=m(e.associations))&&void 0!==o?o:{},c=null!==(i=m(a[MB]))&&void 0!==i?i:{},l=null!==(s=m(n))&&void 0!==s?s:{}
c.data=[l],a[MB]=c,e.associations=a,t.meta=e}}l.push(t)}}return l}dataMapKey(e,t,n){return`${t}_${n}`}makeHiddenShelf(){const e=new Ez(B$)
return e.isHidden=!0,e}shareSheetActionFromData(e,t){var n
const r=q(t,gj),s=function(e,t,n,r,i,s){return yg.context("shareSheetDataForGenericPage",()=>{if(o(n))return null
const e=new OV(t,r,s)
return new EV(e,n,null)})}(0,q(t,KB),r,e.loc.string("SHARE_EDITORIAL_PAGE_SUBTITLE"),0,null===(n=Wl(e,t,fm.EditorialPage))||void 0===n?void 0:n.artwork)
if(!i(s))return null
const a=function(e,t){const n=[]
if((null==t?void 0:t.length)>0){const r=ds(e,t)
i&&n.push(r)}return n}(e,r)
return new JH(s,a)}}y5.pageSparseCount=5,y5.pageSparseLimit=12
class A5 extends J0{constructor(){super("EditorialShelfCollectionPageController")}defaultPlatforms(e){return O(e)}defaultAttributes(e){const t=[lj,ij,YU,eG,xB,FF,N$,aG]
return e.appleSilicon.isSupportEnabled&&t.push(AG),t}pageType(){return Vj}pageRoute(e){return[{protocol:TW,path:`WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/editorial-shelves-collection/{${pq.shelfId}}`},{protocol:TW,path:`{apiVersion}/{realm}/editorial/{countryCode}/editorial-shelves-collection/{${pq.shelfId}}`},{protocol:TW,path:`{apiVersion}/editorial/{countryCode}/editorial-shelves-collection/{${pq.shelfId}}`}]}generatePageRequest(e,t,n){if(o(n[pq.shelfId]))throw new Error(`Unable to map ${t.build()} to a media api url`)
return new Uz(e).forType("editorial-shelves-collection").attributingTo(t.build())}prepareRequest(e,t,n,r,o){super.prepareRequest(e,t,n,r,o),t.includingRelationships([Uj]).includingScopedRelationships(rU,[ED]).includingAssociateKeys(gk,[MB]),Jp(e,t)}renderPage(e,t,n,r,o,i){return yg.context("renderEditorialShelfCollectionPage",()=>{const n=_(e,t)
if(!s(n))return null
const r=Xo(e,cU,n.id,t),o=Cn(t),i=(Yt(0,n),Ah(e,void 0,n,!1,0,r,{rootPosition:0,locationStack:[]},!1,null)),a=[],c=kh(e,void 0,i)
c.title=null,c.eyebrow=null,c.isHorizontal=!1
const l=q(n,KB)
if((0,Tg.isSome)(l)){const e=new Ez(gx)
let t
e.id=Ik,t=new WV(null,l,q(n,NB)),e.items=[t],a.push(e)}a.push(c)
const u=new xz(a)
return u.pageRefreshPolicy=On(e,o),ti(e,u,r),u})}}const T5="com.apple.Arcade.ArcadeHardware1",b5="com.apple.Arcade.TrialEligible1",S5=[T5,b5]
class P5{constructor(){this.$intentKind="EngagementEventIntent"}async perform(e,t){return await Rh(t,e)}}class I5{constructor(){this.$intentKind="BadgingEventIntent"}async perform(e,t){return await Dh(t,e)}}class C5 extends Y0{constructor(e,t){super("UserEngagementController"),t.exportingService("AppStoreEngagement",{fetchEngagementTask:async t=>await Rh(e,t),fetchBadgingTask:async t=>await Dh(e,t)})}handlePage(e,t,n,r,o,i,s){s(new Error(TU))}pageRoute(e){return[]}pageType(){return Ej}}class k5 extends L4{constructor(){super("GroupingPageBuilder")}defaultPlatforms(e){return O(e)}defaultAttributes(e){const t=[lj,YU,eG,N$]
return e.appleSilicon.isSupportEnabled&&t.push(AG),t}prepareRequest(e,t,n,r,o){if(super.prepareRequest(e,t,n,r,o),n===um.Page){const n=r.query.id
let o,i
const s=r.pathComponents();-1!==s.indexOf(BR)?o=n:-1!==s.indexOf(fG)?o=fa(r):i=n,a(i)?t=t.withIdOfType(i,PU):a(o)&&(t=t.addingQuery(fG,o)),t.withSparseCount(C(e)),t.includingScopedSparseLimit(YM,k(e))}t.includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes($e(e)),ki(e)&&(t.enablingFeature(FG),t.includingMetaKeys(YM,[Cx,HD]),t.includingScopedAttributes(xj,[pj,GU,IU]),t.includingScopedRelationships(xj,[Tj])),Oi(e)&&(t.enablingFeature(WD),_n(t)),Ei(e)&&(t.enablingFeature(E$),Ln(t)),t.enablingFeature(fR),e.bag.enableFeaturedCategoriesOnGroupings&&t.enablingFeature(EP),e.bag.enableCategoryBricksOnGroupings&&t.enablingFeature("categoryBricks")
const s=r.query[pq.context]||R(e)
i(s)&&t.addingQuery(GN,s)
const c=r.query[pq.useReleaseId]
r.host===nq&&(null==c?void 0:c.length)>0&&(t.isStorePreviewRequest=!0,t=t.addingQuery(OP,c))}pageType(){return Vj}pageRoute(e){return[{protocol:TW,path:`/${IW}/${OW}`,query:[pq.id,`${pq.context}?`]},{hostName:nq,path:`/WebObjects/{storePreviewInstance}/wa/${OW}`,query:[pq.id,`${pq.useReleaseId}?`]},{protocol:TW,path:`/{countryCode}/${_W}/{genreName}/{id}`},{protocol:TW,path:`/{countryCode}/{platform}/${OW}/{id}`},{protocol:TW,path:`/${IW}/${LW}`,query:[pq.id]},{hostName:nq,path:`/WebObjects/{storePreviewInstance}/wa/${LW}`,query:[pq.id,`${pq.useReleaseId}?`]},{protocol:TW,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}"},{protocol:TW,path:"{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}"},{protocol:TW,path:"{apiVersion}/editorial/{countryCode}/groupings/{id}"},{protocol:TW,hostName:`${cq}`}]}generatePageRequest(e,t,n){var r
let o,s,c=t.query.id
if(t.host===cq&&(null===(r=e.bag.safariExtensionsGroupingURL)||void 0===r?void 0:r.length)>0){const n=kq.from(e.bag.safariExtensionsGroupingURL)
i(n)&&(c=fa(n),t.query.id=c)}const l=t.pathComponents()
if(-1!==l.indexOf(BR)?o=c:-1!==l.indexOf(fG)?o=fa(t):s=c,!a(s)&&!a(o))throw new Error(`Unable to map ${t.build()} to a media api url`)
const u=[lj,ij,YU,eG,xB,FF]
return e.appleSilicon.isSupportEnabled&&u.push(AG),new Uz(e).forType(PU).includingAttributes(u).includingRelationshipsForUpsell(!0).attributingTo(t.build())}renderGroupingPage(e,t,n,o,i,s,a){return yg.context(Xy,()=>{if(n.pageGenreId=J(t.originalGroupingData,fG)||(r(o=q(t.originalGroupingData,"chartUrl"))?null:f(kq.from(o).query,fG)),mc(e,t,n),"tv"!==e.client.deviceType){const t=Ac(e,n.metricsPageInformation,n.metricsLocationTracker)
t&&n.shelves.push(t)}var o
if(e.client.deviceType!==Fj&&"tv"!==e.client.deviceType){const t=e.bag.termsAndConditionsURL
if(!r(t)){const r=Tc(e,t)
n.shelves.push(r)}}const i=this.groupingPageTitleForData(e,t.originalGroupingData,n.pageGenreId),s=new xz(n.shelves)
switch(e.client.deviceType){case"tv":s.title=i
break
case Fj:s.title=i,s.presentationOptions=[hR]
break
default:s.title=i,39===n.pageGenreId||(n.pageGenreId,0)?s.presentationOptions=["prefersRevealNavigationBarOnMouseOver"]:s.presentationOptions=[hR]}return s.pageRefreshPolicy=On(e,null==n?void 0:n.refreshController),ti(e,s,n.metricsPageInformation),this.insertUnifiedMessageShelves(e,s,n.pageGenreId),Rp(s),s})}groupingPageTitleForData(e,t,n){let r=null
switch(n){case 36:r=e.host.clientIdentifier===YV?e.loc.string("GROUPING_APPS"):e.loc.string("GROUPING_APP_STORE","App Store")
break
case 39:r=e.loc.string(GP)
break
default:r=Ru(0,t)}return r}macDiscoverPageTitleForData(e,t){const n=re(t,hF)
if(i(n)&&i(n.data))for(const e of n.data){const t=q(e,jj),n=J(e,mB),r=q(e,sU)
if((null==t?void 0:t.length)>0&&i(n)&&s(r)&&r===hU&&414===n)return t}return e.loc.string(GP)}shelfForHeaderButtons(e){const t=new Ez(CG),n=[],r=new _q(ej)
return r.title=e.loc.string("SEARCH",aU),r.artwork=ce(e,Tx),n.push(r),t.items=n,t}insertUnifiedMessageShelves(e,t,n){if(!(t.shelves.length<=0))switch(n){case 36:t.shelves.splice(0,0,bc(0,"appsPageHeader")),t.shelves.splice(6,0,bc(0,"appsPageMid")),t.shelves.push(bc(0,"appsPageFooter"))
break
case 6014:t.shelves.splice(0,0,bc(0,"gamesPageHeader")),t.shelves.splice(6,0,bc(0,"gamesPageMid")),t.shelves.push(bc(0,"gamesPageFooter"))}}}class O5 extends Y0{constructor(){super(ZT)}pageRoute(e){return[{protocol:AW,path:`${eq}`,query:[pq.onDeviceRecommendationsUseCase,pq.token]}]}handlePage(e,t,n,r,o,i,s){const a=n[pq.onDeviceRecommendationsUseCase]
lr(e,a,Hj).then(r=>{const o=JSON.parse(n[pq.token]),s=new Z0
s.title=o.title
const a=this.makePage(e,r.dataContainer,r.recoMetrics,s),c=new _q(Vj,t.build())
c.pageData=a,i(c)}).catch(e=>{s(e)})}makePage(e,t,n,r){const o=yr(e)
r.url=this.paginationUrl,r.metricsPageInformation=Xo(e,cU,"onDevicePersonalizationSeeAll",t),r.metricsPageInformation.recoMetricsData=Zd(n,null,o),r.shouldFilter=!1,r.metricsLocationTracker={rootPosition:0,locationStack:[]}
const i=new Ez(K0),s={id:null,kind:null,softwareType:null,targetType:JG,title:r.title,pageInformation:r.metricsPageInformation,locationTracker:r.metricsLocationTracker,idType:oU,recoMetricsData:n}
pf(e,i,s),ef(0,s,r.title),i.isHorizontal=!1,i.shouldFilterApps=r.shouldFilter
const a=L(t)
r.remainingContent=[],i.items=Pu(e,a,{contentUnavailable:(e,t)=>(r.remainingContent=st(0,a,e),!0),lockupOptions:{metricsOptions:{pageInformation:s.pageInformation,locationTracker:s.locationTracker},clientIdentifierOverride:r.clientIdentifierOverride,artworkUseCase:$u(0,i.contentType)}})
const c=new xz([i])
return c.title=r.title,r.remainingContent.length&&(c.nextPage=r),ti(e,c,r.metricsPageInformation),c}handleShelf(e,t,n,r,o,i){i(new Error(jP))}shelfRoute(e){return[]}pageType(){return Vj}}class E5{constructor(){this.$intentKind="InAppPurchaseInstallPageIntent"}async perform(e,t){return await _h(t,e.url)}}class R5 extends Y0{constructor(e,t){super("InAppPurchaseInstallController"),t.exportingService(VP,{fetchInstallPage:async t=>await _h(e,t.url)})}handlePage(e,t,n,r,o,i,s){const a=n[pq.id],c=n[hq],l=new Uz(e).withIdOfType(c,$G)
An(e,l,{}).then(t=>{const n=function(e,t,n){const r={pageId:n||"",pageType:"IAPInstallPage",parentId:Hd(t)}
return new sX(r)}(0,a,c),r=_(e,t)
let o
const i={metricsOptions:{pageInformation:n,locationTracker:{rootPosition:0,locationStack:[]}},artworkUseCase:1}
c&&r&&(o=wu(e,r,i),o.theme=bj)
const s=ie(e,r,Tj)
let l
a&&s&&(l=hu(e,s,i))
const u=new Mz
u.isComplete=!0,u.lockup=o,u.parentLockup=l
const d=At(e,r)
return u.preInstallOfferDescription=gi(e,d),function(e,t,n){ti(e,t,n)}(e,u,n),u}).then(e=>Y0.createFlowAction(e,Vk,t)).then(i,s)}pageRoute(e){return[{protocol:AW,path:`/${$W}/${kW}`,query:[`${pq.id}`,`${hq}?`]}]}pageType(){return Vk}}class D5 extends Y0{constructor(e,t){super("MetricsLinterController"),t.exportingService("Metrics",{async lintEvent(t){const n=ht(e).makeEvent(e,t.fields)
return await Promise.resolve(n)}})}handlePage(e,t,n,r,o,i,s){s(new Error(TU))}pageRoute(e){return[]}pageType(){return Ej}}class _5{constructor(e,t,n,r){this.name=e,this.url=t,this.artwork=n,this.roomUber=r}}class L5 extends hV{constructor(e,t){super(),this.apps=e,this.appsToAlwaysShow=t}}class x5{constructor(){this.$intentKind="MSOProviderDataIntent"}async perform(e,t){return await Lh(t,e.providerAdamId)}}class M5{constructor(){this.$intentKind="MSOPageIntent"}async perform(e,t){return await xh(t,e)}}class $5 extends Y0{constructor(e,t){super("MSOBuilder"),t.exportingService("MSOData",{fetchProviderData:async t=>await Lh(e,t.providerAdamId),fetchPage:async t=>await xh(e,t)})}handlePage(e,t,n,r,o,i,s){const a=function(e){const t=e[Aq]
return t?t.split(","):[]}(n),c=t.removeParam(Aq),l=function(e,t){return Mh(e,fa(t))}(e,c)
An(e,l).then(t=>$h(e,t,a)).then(e=>Y0.createFlowAction(e,vx,t)).then(i,s)}pageRoute(e){return[{protocol:TW,path:`/{countryCode}/${WW}/{appName}/{id}`,query:[`${Aq}?`]},{protocol:TW,path:`/${WW}/{providerName}/{id}`,query:[`${Aq}?`]},{protocol:TW,path:`/{countryCode}/${WW}/{id}`,query:[`${Aq}?`]},{protocol:TW,path:`/${WW}/{id}`,query:[`${Aq}?`]},{protocol:TW,path:`/${WW}`,query:[pq.id,`${Aq}?`]},{protocol:TW,path:`{countryCode}/${WW}`,query:[pq.id,`${Aq}?`]}]}handleShelf(e,t,n,r,o,i){const s=n[sU],a=JSON.parse(s),c=new Uz(e,a.remainingContent).includingAdditionalPlatforms(O(e)).includingAttributes([lj,ij,pG])
An(e,c).then(t=>function(e,t,n){const r=L(t),o=n
o.remainingContent=[]
const i={lockupOptions:{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},artworkUseCase:$u(0,n.preferredShelfContentType)},contentUnavailable:function(e,t){return o.remainingContent=st(0,o.remainingContent,e),o.remainingContent.push(r[e]),!1}},s=new Ez(n.preferredShelfContentType)
return s.shouldFilterApps=n.shouldFilter,s.items=Pu(e,r,i),s.mergeWhenFetched=!0,s.url=Fh(o),s}(e,t,a)).then(o,i)}shelfRoute(e){return[{protocol:AW,path:`/${WW}/${PW}/{token}`}]}pageType(){return vx}}class F5{constructor(){this.$intentKind="CancelPreorderIntent"}async perform(e,t){return await Nh(t,e)}}class N5 extends Y0{constructor(e,t){super("CancelPreorderController"),t.exportingService("Preorder",{cancelPreorder:async t=>await Nh(e,t)})}handlePage(e,t,n,r,o,i,s){s(new Error(TU))}pageRoute(e){return[]}pageType(){return Ej}}class B5 extends J0{constructor(){super("EulaBuilder")}defaultPlatforms(e){return O(e)}generatePageRequest(e,t,n){const o=t.query.resourceId,i=t.query.resourceType
if(r(o)||r(i))throw new Error(`Unable to map ${t.build()} to a media api url`)
const s=new Uz(e).withIdOfType(o,cF)
return s.targetResourceType=i,s}pageRoute(e){return[{protocol:AW,path:`${JW}`}]}pageType(){return Vj}renderPage(e,t,n,r){return yg.context(pB,()=>{const n=d(t,"results.eula.text").split(/\n{1,2}/),r=[]
for(const e of n){const t=new _V(e)
t.wantsCollapsedNewlines=!1,t.suppressVerticalMargins=!0,r.push(t)}const o=new Ez(wB)
o.isHorizontal=!1,o.items=r
const i=new xz([o])
return i.title=e.loc.string(W_),i})}}class U5 extends Y0{constructor(){super("PersonalizedReviewsBuilder")}handlePage(e,t,n,r,o,i,s){s(new Error("PersonalizedReviewsBuilder:handlePage not implemented"))}pageRoute(e){return[]}handleShelf(e,t,n,r,o,i){const s=n[sU],a=JSON.parse(s),c=new Uz(e).withIdOfType(a.adamId,yj)
An(e,c).then(t=>Ns(e,e.client.guid,a,t)).catch(()=>Ns(e,e.client.guid,a)).then(o,i)}shelfRoute(e){return[{protocol:AW,path:`/personalizedReviews/${PW}/{token}`}]}pageType(){return Ej}}class G5 extends J0{constructor(){super("PrivacyDetailBuilder")}defaultPlatforms(e){return O(e)}pageType(){return qO}pageRoute(e){return[{protocol:AW,path:`${QW}/${$W}/{id}`,query:[`${pq.privacyTypeId}?`]},{protocol:AW,path:`${QW}/${NW}/{id}`,query:[`${pq.privacyTypeId}?`]}]}generatePageRequest(e,t,n){const r=fa(t)
if((0,Ag.isNothing)(r)||0===r.length)throw new Error(`Unable to map ${t.build()} to a media api url. Missing id.`)
let o=Gj
const i=[k_,SU,IM]
return-1!==t.pathname.indexOf(NW)&&(o=Pj),new Uz(e).withIdOfType(r,o).addingQuery(_L,i.join(","))}renderPage(e,t,n,s){return yg.context(pB,()=>{const s=n[pq.privacyTypeId]
return function(e,t,n){return yg.context("privacyDetailPageFromResponse",()=>{const s=_(e,t)
if(o(s))return null
const a=Xo(e,"PrivacyDetails",s.id,t),c={rootPosition:0,locationStack:[]}
let l=[]
if(!Rc(e)){const t=function(e,t,n,r){const o=new Ez(WG)
o.isHorizontal=!1
const i=Dc(e,t,!0,!0,n,r)
return o.items=[i],o.presentationHints={isFirstShelf:!0},o}(e,s,a,c)
i(t)&&l.push(t)}const u=function(e,t,n,s,a){const c=H(t,k_)
if(o(c))return[]
const l=Sc(e,c,t,KN,!0,n,s)
if(0===l.length)return[]
const u=[]
for(const t of l)if(r(a)||t.identifier===a||e.client.deviceType!==Fj){const e=new Ez(O_)
i(t.identifier)&&t.identifier===a?(t.wantsScrollFocus=!0,e.id="privacyTypeShelf_"+t.identifier):t.wantsScrollFocus=!1,e.items=[t],e.presentationHints={isSingleDensity:!0},u.push(e)
for(const e of t.purposes){const t=new Ez("privacyCategory")
t.title=e.title,t.items=e.categories,u.push(t)}}return u}(e,s,a,c,n)
l=l.concat(u)
const d=new xz(l)
d.title=e.loc.string(C_)
for(const e of u)if((0,Ag.isSome)(e.id)){d.loadCompletedAction=new dW(e.id)
break}return ti(e,d,a),d})}(e,t,s)})}}class j5 extends Y0{constructor(){super("ProductInAppPurchaseBuilder")}handlePage(e,t,n,r,o,i,s){const a=n[wq],c=new kq(a),l=pa(e,c),u={},d=n[gq]===GG
u.spotlightSection=Ys(d),u.spotlightInAppProductIdentifier=n[pq.offerName],An(e,l).then(n=>{const r=jl(e,n,u)
return Y0.createFlowAction(r,VU,t)}).then(i,s)}pageRoute(e){return[{protocol:AW,path:`/${$W}/${CW}`,query:[wq,pq.offerName,gq]}]}pageType(){return VU}}class V5{constructor(){this.$intentKind="ShelfBasedProductPageIntent"}async perform(e,t){return await Bh(t,e)}}class H5 extends J0{constructor(e,t){super($v),t.exportingService(VP,{fetchPage:async t=>await async function(e,t){if(t.preloading&&Me(e))return await Promise.reject(new Error(HP))
if(0!==Tn(e,new kq(t.url)).length&&cp(e,t.url),t.preloading){const e=new kq(t.url)
e.param(pq.isPreloading,GG),t.url=e.build()}const n=H5.generateProductPageOptions(e,void 0,new kq(t.url))
let r=e.required(y2).fetchPage(e,t.url,qY)
if(!r){const o=new Uz(e,t.url)
r=An(e,o).then(r=>jl(e,r,n,{},null,t.preloading))}return await r.then(n=>(e.host.clientIdentifier===XV?n&&ex in n&&si(0,n):i(t.referrerData)&&n&&ex in n&&si(0,n),n))}(e,t),fetchShelfBasedPage:async t=>await Bh(e,t)})}defaultPlatforms(e){return O(e)}pageType(){return VU}defaultTab(e){return H5.representsArcadeApp(e)?$j:super.defaultTab(e)}defaultAction(e,t,n,r){if(t instanceof _q)return t
const o=super.defaultAction(e,t,n,r)
if(!(t instanceof qY||t instanceof pJ))return o
const i=1===t.appPlatforms.length&&"tv"===t.appPlatforms[0]
if(n[pq.action]!==h2||i){if(n[pq.action]!==w2||i)return o
{const e=t.shelfMapping[yj]||t.shelfMapping[PG]
let n=null
return e&&e.seeAllAction&&(n=e.seeAllAction,n.animationBehavior=ZU),o.animationBehavior=ZU,new EH([o,n])}}{const n=H5.representsBundle(t)
let r=null,i=null,s=null,a=null
t instanceof qY?(r=t.adamId,i=t.icon,s=t.title,a=t.subtitle):t instanceof pJ&&(r=t.lockup.adamId,i=t.lockup.icon,s=t.lockup.title,a=t.lockup.subtitle)
const c=xs(e,r,n,i,!1,a,s)
return o.animationBehavior=ZU,new EH([o,c])}}static generateProductPageOptions(e,t,n){const r={clientIdentifierOverride:n.query[pq.clientIdentifierOverride]},o=null==t?void 0:t[pq.offerName]
if(o){const e=t[gq]===GG
r.spotlightSection=Ys(e),r.spotlightInAppProductIdentifier=o}const s=n.query[nX]
s&&(r.iAdClickFields=JSON.parse(s))
const a=n.query[rX]
a&&(r.iAdLineItem=a)
const c=n.query[oX];(0,Tg.isSome)(c)&&(r.iAdDismissAdActionMetrics=JSON.parse(c))
const l=n.query[wJ]
i(l)&&(r.externalDeepLinkUrl=l)
const u=n.query[gJ]
i(u)&&(r.isCppDeepLinkDisabled=JSON.parse(u))
const d=null==t?void 0:t[pq.webBrowser]
return(0,Tg.isSome)(d)&&(r.webBrowser="1"===d),e.props.enabled(v_)&&e.client.isCompanionVisionApp&&(r.clientIdentifierOverride="com.apple.visionproapp"),r}pageRoute(e){return op()}generatePageRequest(e,t,n){var o
const i=n[pq.bundleIdentifier],s=n[pq.ids],a=n[pq.productVariantID],c="1"===n[pq.includeUnlistedApps]||"1"===n[pq.isViewOnly]
let l=null
if(i){const t=et(e).adamIdFromSystemBundleId(i)
l=(0,Tg.isSome)(t)?ga(e,t,!1,void 0,!1,c):function(e,t,n,r){const o=u0
e.bag.enablePrivacyNutritionLabels&&!la(e,t)&&o.push(ix),e.appleSilicon.isSupportEnabled&&o.push(AG),e.bag.enableLicenses&&o.push(FC)
const i=new Uz(e).forType(Gj).withFilter(KG,t).includingAdditionalPlatforms(O(e)).includingRelationships([dG,hN,rx,yj,Pj,fD,ox,pD]).includingAttributes(o).addingRelationshipLimit(yj,E(e)).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes($e(e))
return(0,Ag.isSome)(n)&&i.addingQuery(pq.productVariantID,n),no(e,BG)&&i.enablingFeature(hD),r&&i.enablingFeature(GC),Oi(e)?i.includingViews([MC]):i.includingRelationships([wD]),i}(e,i,a,c)}else if(n[pq.action]===WP&&s){const r=(null===(o=t.pathname)||void 0===o?void 0:o.length)>0&&-1!==t.pathname.indexOf(qP)
l=ga(e,s,w(n,pq.isPurchasesApp),a,r,c)}else l=pa(e,t,c)
if(r(l))throw new Error(`Unable to map ${t.build()} to a media api url`)
return l}generateAdditionalPageRequirements(e,t,n){const r=super.generateAdditionalPageRequirements(e,t,n),o=function(e){for(const[t,n]of Object.entries(e))if(t.toLocaleLowerCase()===pq.appEventId.toLocaleLowerCase())return n
return null}(n),i=n[pq.offerItemId]
if((null==o?void 0:o.length)>0&&ki(e)){const t=new Uz(e).withIdOfType(o,xj).includingAdditionalPlatforms(O(e)).includingScopedAttributes(xj,[pj,GU,IU]).includingScopedAvailableIn(xj,[Kv,UC])
r[g2]=new q0(An(e,t).catch(()=>null),!1)}else if(s(i)&&Ei(e)){const t=new Uz(e).withIdOfType(i,jU).includingAdditionalPlatforms(O(e))
Ln(t),r[g2]=new q0(An(e,t).catch(()=>null),!1)}return r}renderPage(e,t,n,r,o,i){return yg.context(pB,()=>{const o=Xo(e,lB,"",t),a=H5.generateProductPageOptions(e,n,new kq(o.pageUrl)),c=_(e,t),l=H5.alternativeAppForPlatform(e,c,De(e))
if(null!==l)return l
const u="1"===n[pq.isViewOnly]
s(i)&&wH.shared.setReferralDataForProduct(c.id,i)
const d=jl(e,t,a,r,i,w(n[pq.isPreloading]),u),f=e.fetchTimingMetricsBuilder
return(0,Tg.isSome)(f)&&f.decorate(d),d})}shelfRoute(e){return[{protocol:AW,path:`/${$W}/${PW}/{token}`}]}generateShelfRequest(e,t,n){return ip(e,0,n)}renderShelf(e,t,n){return sp(e,t,n)}shelfRequiresAdditionalModification(e,t){return!0}async performAdditionalShelfModifications(e,t,n){return await new Promise(r=>{const o=n[sU],i=JSON.parse(o),s=t.items
if(i.contentType===D$&&s){const n=[],o=[]
for(const e of s){const t=e.productIdentifier
Ys(e.isSubscription).shelfId===i.inAppShelfId&&(n.push(t),e.isVisibleByDefault&&o.push(t))}e.clientOrdering.orderedVisibleIAPs(i.appBundleId,n,o,i.spotlightInAppProductIdentifier).then(e=>{t.items=H5.filteredInAppLockupsUsingOrdering(s,e),r(t)})}else new Set([MU,BF]).has(t.contentType)&&0===t.items.length&&(t.isHidden=!0),r(t)})}handleShelfError(e,t,n,r){const o=r[sU],i=JSON.parse(o)
if(i&&!i.hasExistingContent){const e=new Ez(i.contentType)
e.isHidden=!0,t(e)}else super.handleShelfError(e,t,n,r)}static alternativeAppForPlatform(e,t,n){if(!he(t,n)){const r=se(t,pD)
if(s(r))for(const t of r){const r=Ce(e,t,gj)
if(he(t,n)&&(null==r?void 0:r.length)>0)return new _q(Ej,r)}}return null}static representsBundle(e){return!!(e.pageMetrics&&e.pageMetrics.pageFields&&QB in e.pageMetrics.pageFields)&&e.pageMetrics.pageFields[QB]===sO}static representsArcadeApp(e){return!!(e.pageMetrics&&e.pageMetrics.pageFields&&QB in e.pageMetrics.pageFields)&&e.pageMetrics.pageFields[r$]===QG}static filteredInAppLockupsUsingOrdering(e,t){const n={}
for(const t of e)n[t.productIdentifier]=t
const r=[]
for(const e of t){const t=n[e]
if(t){const e=y(t)
r.push(e)}}return r}}class W5 extends Y0{handlePage(e,t,n,r,o,i,s){this.renderPage(e,t,n)}renderPage(e,t,n){throw new Error(`renderPage is not supported on: ${this.builderClass}`)}handlePageError(e,t,n,r,o){n(e)}handleShelf(e,t,n,r,o,i){this.renderShelf(e,t,n).then(o,e=>{this.handleShelfError(e,o,i,n)})}async renderShelf(e,t,n){throw new Error(`renderShelf is not supported on: ${this.builderClass}`)}handleShelfError(e,t,n,r){n(e)}}class q5 extends W5{constructor(){super("ProductBuilderNative")}pageType(){return VU}pageRoute(e){return[]}shelfRoute(e){return[{protocol:AW,path:`/${$W}/${PW}`,query:[pq.isGameCenterPlayerShelf,pq.token]},{protocol:AW,path:`/${$W}/${PW}`,query:[pq.isGameCenterPlayerRibbonItem]},{protocol:AW,path:`/${$W}/${PW}`,query:[pq.isGameCenterAchievementsShelf,pq.token]}]}async renderShelf(e,t,n){return await new Promise((r,o)=>{if(t.query[pq.isGameCenterPlayerShelf]){const i=t.query[pq.id],s=e.gameCenter.fetchFriendsThatPlayGame(i),a=n[pq.token],c=JSON.parse(a)
s.then(t=>{const n=pl(e,t,!0,c)
r(n)}).catch(e=>{o(e)})}else if(t.query[pq.isGameCenterPlayerRibbonItem]){const n=t.query[pq.id]
e.gameCenter.fetchFriendsThatPlayGame(n).then(t=>{const n=pl(e,t,!1)
r(n)}).catch(e=>{o(e)})}else if(t.query[pq.isGameCenterAchievementsShelf]){const i=t.query[pq.bundleId]
e.gameCenter.fetchAchievementSummaryForGame(i).then(t=>{const o=t
let i=null
if(o.length>0){const t=new sW(o[0].bundleId),n=e.loc.string("PRODUCT_ACHIEVEMENT_SUMMARY_COMPLETED","Completed"),r=o[0].achievements
let s=null
const a=r.filter(e=>e.status.type===sB)
if(a.length>0&&(s=a[0]),null===s){const e=r.filter(e=>e.status.type===uA||e.status.type===lA)
e.sort((e,t)=>t.status.percent-e.status.percent),e.length>0&&(s=e[0])}null!==s&&(i=new FV(o[0].bundleId,o[0].completedAchievements,o[0].totalAchievements,n,t,[s]))}const s=n[pq.token],a=JSON.parse(s),c=function(e,t,n){const r=new Ez(Nb)
if(r.isHorizontal=!0,t){const o={pageInformation:n.destinationPageInformation,locationTracker:n.sourceLocationTracker,kind:Aj,title:oF,id:"achievements_summary",idType:tj,softwareType:null,targetType:Aj,badges:{gameCenter:!0}}
pf(e,r,o),Lf(e,t.action,o),r.items=[t]}return r.mergeWhenFetched=!0,r.batchGroup=vU,r.isHidden=0===r.items.length,r}(e,i,a)
r(c)}).catch(e=>{o(e)})}else r(super.renderShelf(e,t,n))})}}const z5="todayTabPersonalization",Y5="OnDeviceRecommendationsTodayShelfController"
class J5{constructor(e){this.recommendations=e}storyData(e){var t
const n=this.recommendationForUseCase(e),r=null==n?void 0:n.candidate(kj)
if(!(0,Tg.isNothing)(n)&&!(0,Tg.isNothing)(r))return null===(t=null==n?void 0:n.dataContainer)||void 0===t?void 0:t.data.find(e=>e.id===r.id)}storyGroupData(e){var t,n
const r=this.recommendationForUseCase(e),o=null==r?void 0:r.candidate(kB)
if((0,Tg.isNothing)(r)||(0,Tg.isNothing)(o))return
const i=null===(t=null==r?void 0:r.dataContainer)||void 0===t?void 0:t.data.find(e=>e.id===(null==o?void 0:o.id)),s=null===(n=null==r?void 0:r.dataContainer)||void 0===n?void 0:n.data.filter(e=>o.candidateIDs.includes(e.id))
return(0,Tg.isNothing)(i)||(0,Tg.isNothing)(s)?void 0:(i[yU]={associations:{recommendations:{data:s}}},i)}recommendationForUseCase(e){return this.recommendations.find(t=>t.useCase===e)}}class K5{constructor(e,t,n,r){this.useCase=e,this.candidates=t,this.recoMetrics=n,this.dataContainer=r}candidate(e){return this.candidates.find(t=>t.type===e)}}class Z5{constructor(e,t,n,r){this.id=e,this.type=t,this.candidateIDs=n,this.data=r}}class Q5 extends W5{constructor(){super("ProductPageShelfWithAdController")}pageType(){return VU}pageRoute(e){return[]}shelfRoute(e){return[{protocol:AW,path:`/${$W}/${PW}/{token}`,query:[pq.isShelfWithAd,pq.shelfWithAdPlacementType]}]}async renderShelf(e,t,n){const r=n[pq.shelfWithAdPlacementType],o=t.query[pq.id],i=Uh(e,r,o).catch(()=>null),s=ip(e,0,n)
s.attributingTo(t.build())
const a=An(e,s)
return await Promise.all([a,i]).then(([t,r])=>sp(e,t,n,r,!0))}}class X5 extends W5{constructor(){super("ProductPageSimilarItemsShelfRefreshController")}pageType(){return VU}pageRoute(e){return[]}shelfRoute(e){return[{protocol:AW,path:`/${$W}/${PW}/{token}`,query:[`${pq.shelfRefreshType}=${Sq}`]}]}async renderShelf(e,t,n){const r=t.query[pq.id]
let o=Promise.resolve(null),i=!1
i=no(e,vG),i&&(o=Uh(e,vG,r).catch(()=>null))
const s=function(e,t){const n=[lj,ij,pG]
return new Uz(e).withIdOfType(t,dL).enablingFeature(yU).includingAdditionalPlatforms(O(e)).includingAttributes(n).enablingFeature(hD)}(e,r)
s.attributingTo(t.build())
const a=An(e,s).catch(async()=>{const r=ip(e,0,n)
return r.attributingTo(t.build()),await An(e,r)})
return await Promise.all([a,o]).then(([t,r])=>sp(e,t,n,r,i))}}class e6 extends Y0{constructor(){super("ReviewsAdapterBuilder")}handlePage(e,t,n,r,o,i,s){const a=pa(e,t)
An(e,a).then(n=>{const r=jl(e,n)
let o,i
if(Gl(e)){const e=r
o=e.shelfMapping[PG],i=1===e.appPlatforms.length&&"tv"===e.appPlatforms[0]}else{const e=r
o=e.shelfMapping[yj],i=1===e.appPlatforms.length&&"tv"===e.appPlatforms[0]}const s=Y0.createFlowAction(r,VU,t)
let a=null
return o&&o.seeAllAction&&!i&&(a=o.seeAllAction,a.animationBehavior=ZU),a?(s.animationBehavior=ZU,new EH([s,a])):s}).then(i,s)}pageRoute(e){return[{protocol:TW,path:`/{countryCode}/${$W}/{appName}/{id}`,hash:bq},{protocol:TW,path:`/${IW}/viewContentsUserReviews`,query:[pq.id]}]}handlePagination(e,t,n,r,o,i,s){const a=n[vq],l=n[yq],u=c(o.remainingContent),d=new Uz(e,o.nextHref).includingAdditionalPlatforms(O(e)).addingQuery(zU,l)
An(e,d,{}).then(t=>Vs(e,e.client.guid,a,u,t,!1,l)).then(i,s)}paginationRoute(e){return[{protocol:AW,path:`/${UW}/${PW}/{adamId}/{sort}`}]}pageType(){return VU}}class t6 extends Y0{constructor(){super("SortedReviewsBuilder")}handlePage(e,t,n,r,o,a,c){const l=n[vq],u=n[yq],d=new Uz(e).withIdOfType(l,fL).includingAdditionalPlatforms(O(e)).addingQuery(zU,u)
An(e,d,{}).then(t=>{const r=n[pq.token]
let o=null
if(s(r))try{o=JSON.parse(r)}catch(e){}const a=Vs(e,e.client.guid,l,[],t,!0,u,o)
return i(null==o?void 0:o.reviewActionsShelf)&&a.shelves.unshift(o.reviewActionsShelf),i(null==o?void 0:o.reviewSummaryShelf)&&a.shelves.unshift(o.reviewSummaryShelf),i(null==o?void 0:o.ratingsShelf)&&a.shelves.unshift(o.ratingsShelf),a}).then(e=>Y0.createFlowAction(e,yj,t)).then(a,c)}pageRoute(e){return[{protocol:AW,path:`/${UW}/{adamId}/{sort}`,query:[`${pq.token}?`]}]}pageType(){return yj}}class n6 extends X0{constructor(){super("AccessoryProtocolRoomBuilder")}pageInformation(e,t,n){return ni(0,"accessory")}generatePageRequest(e,t,n){const r=[]
for(const e of Object.keys(t.query))e.startsWith("id")&&r.push(t.query[e])
return this.requestWithFilter(e,"deviceProtocol",r.join(","))}pageRoute(e){return[{query:[`${pq.action}=accessoryLookup`]}]}}class r6 extends Y0{constructor(){super("CollectionDeepLinkingController")}pageType(){return Vj}pageRoute(e){return[{protocol:TW,path:"{countryCode}/{tab}/recommendations",query:[`${pq.useCaseShort}`,`${pq.collectionId}?`,`${pq.seedId}?`]}]}handlePage(e,t,n,r,o,i,s){const a=n.tab,c=n[pq.useCaseShort],l=n[pq.collectionId],u=n[pq.seedId]
let d=new Uz(e).forType(oD).addingQuery(jj,a).addingQuery("filter[recoUseCase]",c).includingRelationships([Uj]).includingAdditionalPlatforms(O(e))
d.enablingFeature(fR),(null==l?void 0:l.length)>0&&(d=d.addingQuery(AU,l)),(null==u?void 0:u.length)>0&&(d=d.addingQuery(yv,u)),An(e,d).then(n=>{const r=q(_(e,n),Px);((null==r?void 0:r.length)>0?this.makeODPPage(e,c,r,n):this.makeCollectionPage(e,c,n)).then(e=>{let n
const r=this.createTabChangeActionForRequest(a),o=new _q(Vj,t.build())
o.pageData=e,null!=r?(r.actions=[o],n=r):n=o,i(n)}).catch(e=>{s(new Error(`CollectionDeeplinkingController: Failed to create GenericPage for useCase: ${c}`))})}).catch(e=>{s(new Error(`CollectionDeeplinkingController: Failed to fetch Media API data for useCase: ${c}`))})}async makeODPPage(e,t,n,r){const o=new Promise((o,i)=>{lr(e,n,Vj).then(n=>{const i=_(e,r),s=new Z0
s.title=q(i,VG),s.metricsPageInformation=Xo(e,cU,t,r),s.metricsPageInformation.recoMetricsData=Zd($(r),null,n.recoMetrics),s.shouldFilter=!1,s.metricsLocationTracker={rootPosition:0,locationStack:[]}
const a=this.makePage(e,s,n.dataContainer)
o(a)}).catch(e=>{i(e)})})
return await o}async makeCollectionPage(e,t,n){const r=_(e,n),o=re(r,Uj),i=new Z0
return i.url=this.paginationUrl,i.title=q(r,VG),i.metricsPageInformation=Xo(e,cU,t,n),i.metricsPageInformation.recoMetricsData=$(n),i.shouldFilter=!1,i.metricsLocationTracker={rootPosition:0,locationStack:[]},await Promise.resolve(this.makePage(e,i,o))}makePage(e,t,n){return yg.context("makePage",()=>{const r=t.preferredShelfContentType||K0,o=new Ez(r),i={id:null,kind:null,softwareType:null,targetType:JG,title:t.title,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,idType:oU,recoMetricsData:$(n)}
pf(e,o,i),ef(0,i,t.title),o.isHorizontal=!1,o.shouldFilterApps=t.shouldFilter
const s=L(n)
t.remainingContent=[],o.items=Pu(e,s,{contentUnavailable:(e,n)=>(t.remainingContent=st(0,s,e),!0),lockupOptions:{metricsOptions:{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker},clientIdentifierOverride:t.clientIdentifierOverride,artworkUseCase:$u(0,r)}})
const a=new xz([o])
return a.title=t.title,t.remainingContent.length&&(a.nextPage=t),a})}createTabChangeActionForRequest(e){const t=e
return new Set([Cj,Gj,EU,ej,$R,$j,lF,_N,mR,vR,yR,DL,iG,p$]).has(t)?new CH(t):null}handleShelf(e,t,n,r,o,i){i(new Error(jP))}shelfRoute(e){return[]}paginationRoute(e){return[{protocol:AW,path:`${this.paginationPath}`}]}handlePagination(e,t,n,r,o,i,s){yg.context(`${this.builderClass}.handlePagination`,()=>{const n=o,r=new Uz(e,n.remainingContent)
if(!r)return void s(new Error(`Could not construct media API request for: ${t}`))
r.includingAdditionalPlatforms(O(e))
const a=[lj,ij,YU,eG]
e.appleSilicon.isSupportEnabled&&a.push(AG),r.includingAttributes(a),r.usingCustomAttributes($e(e)),r.attributingTo(t.build()),An(e,r).then(t=>{i(this.makePage(e,n,t))}).catch(e=>{s(e)})})}}class o6 extends Q0{constructor(){super("RecommendationRoomBuilder")}generatePageRequest(e,t,n){const r=fa(t),o=n[pq.grouping]
if(!this.isValidId(r))throw new Error(`Unable to map ${t.build()} to a media api url. Missing id.`)
if(!this.isValidId(o))throw new Error(`Unable to map ${t.build()} to a media api url. Missing grouping.`)
return new Uz(e).withIdOfType(r,OD).addingQuery(V$,o).includingMacOSCompatibleIOSAppsWhenSupported(!0)}renderPage(e,t,n){return yg.context(pB,()=>{const r=_(e,t),o=re(r,Uj),i=n[pq.grouping],s=Xo(e,cU,`${r.id}-${i}`,t),a=new Z0
a.remainingContent=o.data,a.url=this.paginationUrl,a.shouldFilter=!Y(r,VD),a.metricsPageInformation=s,a.metricsLocationTracker={rootPosition:0,locationStack:[]},a.title=q(r,jj)
const c=this.pageWithContent(e,o,a)
return c.title=a.title,ti(e,c,s),c})}pageRoute(e){return[{protocol:TW,path:`/{countryCode}/${KW}/{title}/{id}`,query:[pq.grouping]},{protocol:TW,path:`/{countryCode}/${KW}/{id}`,query:[pq.grouping]},{protocol:TW,path:`/${KW}/{title}/{id}`,query:[pq.grouping]},{protocol:TW,path:`/${KW}/{id}`,query:[pq.grouping]}]}isValidId(e){return!(r(e)||isNaN(e))}}class i6 extends Q0{constructor(){super("RoomBuilder")}generatePageRequest(e,t,n){let r=t.query[pq.featuredContentId]
if(this.isValidRoomId(r)||(r=n.id),!this.isValidRoomId(r))throw new Error(`Unable to map ${t.build()} to a media api url`)
return new Uz(e).withIdOfType(r,u$).includingMacOSCompatibleIOSAppsWhenSupported(!0)}prepareRequest(e,t,n,r,o){super.prepareRequest(e,t,n,r,o),t.includingMacOSCompatibleIOSAppsWhenSupported(!0)}renderPage(e,t,n,r){return yg.context(pB,()=>{const n=_(e,t),r=re(n,Uj),o=Xo(e,cU,n.id,t),i=new Z0
i.remainingContent=r.data,i.url=this.paginationUrl,i.shouldFilter=!Y(n,VD),i.metricsPageInformation=o,i.metricsLocationTracker={rootPosition:0,locationStack:[]}
const s=q(n,mB)
i.preferredShelfContentType=this.preferredShelfStyleForFcKind(Number(s)),i.clientIdentifierOverride=Jt(e,n),i.title=q(n,VG)
const a=this.pageWithContent(e,r,i)
return a.title=i.title,ti(e,a,o),a})}pageRoute(e){return[{protocol:TW,path:`/${IW}/${xW}`,query:[pq.featuredContentId]},{protocol:TW,path:"/WebObjects/MZStoreElements.woa/wa/recommendationsSeeAll"},{protocol:TW,path:"{apiVersion}/editorial/{countryCode}/rooms/{id}"},{protocol:TW,path:"/{countryCode}/collection/today-view-widgets",query:[pq.featuredContentId]},{protocol:TW,path:"/{countryCode}/collections/id{id}"}]}isValidRoomId(e){return a(e)}preferredShelfStyleForFcKind(e){return null==e?null:431===e?jD:null}}!function(e){e[e.Landing=0]="Landing",e[e.Results=1]="Results",e[e.ChartsAndCategories=2]="ChartsAndCategories",e[e.Focus=3]="Focus"}(wm||(wm={}))
class s6{constructor(){this.$intentKind="SearchChartsAndCategoriesPageIntent"}async perform(e,t){return await Zh(e,t)}}class a6 extends Y0{constructor(e,t){super("SearchChartsAndCategoriesPageBuilder"),t.exportingService(eM,{fetchSearchChartsAndCategoriesPage:async t=>await Zh(t,e)})}pageType(){return NE}pageRoute(e){return[{path:"/{apiVersion}/recommendations/{countryCode}/search-recommendations/{search-recommendations-id}"}]}handlePage(e,t,n,r,o,i,s){yg.context(`${this.builderClass}.handlePage`,()=>{const n=new Uz(e,t.toString()).forType(pL).includingScopedRelationships(zP,[Uj]).enablingFeature(yU).enablingFeature(tM).addingQuery(pq.name,yM)
this.fetchCategoriesAndChartsPage(e,n).then(e=>{i(Y0.createFlowAction(e,this.pageType(),t))}).catch(s)})}async fetchCategoriesAndChartsPage(e,t){const n=An(e,t)
return await n.then(t=>zh(e,t))}}class c6 extends wV{constructor(e,t,n,r,o){super(),this.value=e,this.isSelected=t,this.leadingIcon=n,this.displayName=r,this.clickAction=o}}class l6 extends hV{constructor(e,t,n){super(),this.searchTerm=e,this.selectedTokens=t,this.optimizationTerm=n}}class u6 extends IH{constructor(e,t){super("GuidedSearchTokenToggleAction"),this.targetToken=e,this.searchOrigin=t}}class d6 extends IH{constructor(e,t){super("SearchEntityChangeAction"),this.entity=e,this.searchOrigin=t}}!function(e){e[e.EmptyResults=0]="EmptyResults",e[e.Picker=1]="Picker",e[e.NonNative=2]="NonNative"}(gm||(gm={}))
class f6{constructor(){this.$intentKind="SearchHintsIntent"}async perform(e,t){return await yw(t,e.term)}}class p6 extends Y0{constructor(e,t){super("SearchHintsBuilder"),t.exportingService(eM,{fetchHints:async t=>await yw(e,t.term)})}handlePage(e,t,n,r,o,i,s){s(new Error(TU))}pageRoute(e){return[]}pageType(){return Ej}}class h6{constructor(e,t,n,r){this.title=e,this.maxItems=t,this.shelfDisplayStyle=n,this.itemDisplayStyle=r}}class w6 extends Y0{constructor(){super("SearchLandingPageBuilder")}pageRoute(e){return[{protocol:AW,path:`${ZW}`}]}shelfRoute(e){return[{protocol:AW,path:`${ZW}/${PW}`,query:[pq.isOnDeviceSearchHistoryShelf]},{protocol:AW,path:`${ZW}/${PW}`,query:[pq.isSearchFocusHeaderShelf]}]}pageType(){return Vj}handlePage(e,t,n,r,o,i,s){yg.context(`${this.builderClass}.handlePage`,()=>{this.fetchPage(e).then(e=>{i(Y0.createFlowAction(e,this.pageType(),t))}).catch(s)})}handleShelf(e,t,n,r,o,s){yg.context(`${this.builderClass}.handleShelf`,()=>{var a,c,l
const u=w(null!==(a=n[pq.isOnDeviceSearchHistoryShelf])&&void 0!==a?a:t.query[pq.isOnDeviceSearchHistoryShelf]),d=u?function(e){if(!(0,Ag.isNothing)(e))return JSON.parse(decodeURIComponent(e))}(null!==(c=n[pq.token])&&void 0!==c?c:t.query[pq.token]):void 0,f=w(null!==(l=[pq.isSearchFocusHeaderShelf])&&void 0!==l?l:t.query[pq.isSearchFocusHeaderShelf])
u&&i(d)?this.handleSearchHistoryShelf(e,d,o,s):f?o(this.createNaturalLanguageSearchBubbleTipShelf(e)):super.handleShelf(e,t,n,r,o,s)})}handleSearchHistoryShelf(e,t,n,r){e.onDeviceSearchHistoryManager.fetchRecentsWithLimit(t.maxItems).then(n=>{const r=ei(e,Xk,eO," ")
return ef(0,{locationTracker:{rootPosition:0,locationStack:[]},id:NS,pageInformation:r},t.title),Aw(e,t,r,{rootPosition:0,locationStack:[]},n)}).then(n,r)}async fetchPage(e){const t=no(e,wU)?Uh(e,wU).catch(()=>null):null
return await this.fetchSearchLandingPage(e,t).catch(async n=>await this.fetchTrendingSearchesFallbackPage(e,t))}async fetchTrendingSearchesFallbackPage(e,t){const n={url:e.bag.trendingSearchesURL},r=e.network.fetch(n).then(e=>{if(!e.ok)throw Error(`Bad Status code ${e.status} for ${n.url}`)
return JSON.parse(e.body)})
return await Promise.all([r,t]).then(([t,n])=>{var r
const o=new Fz(this.trendingSearchesShelvesForResponse(e,t)),i=ei(e,o$,Z$,"")
return i.iAdInfo=co(e,wU,n),null===(r=i.iAdInfo)||void 0===r||r.setMissedOpportunity(e,rv,wU),ti(e,o,i),o})}async fetchSearchLandingPage(e,t){return this.shouldUseProtocolV1(e)?await this.fetchSearchLandingPageV1(e,t):e.bag.mediaAPISearchFocusEnabled?await this.fetchSearchLandingPageV2WithFocusPage(e,t):await this.fetchSearchLandingPageV2(e,t)}async fetchSearchLandingPageV1(e,t){const n=new Uz(e).forType(hL).includingAdditionalPlatforms(O(e)).usingCustomAttributes($e(e))
n.targetResourceType=PU
const r=sc(e,e.user.dsid);(null==r?void 0:r.length)>0&&n.addingQuery(YP,r)
const o=new gg.FetchTimingMetricsBuilder,i=e.addingFetchTimingMetricsBuilder(o),s=An(i,n)
return await Promise.all([s,t]).then(([e,t])=>o.measureModelConstruction(()=>this.landingPageFromResponseV1(i,e,t)))}makeSearchLandingRequestV2(e,t){const n=new Uz(e).forType(TR).includingAdditionalPlatforms(O(e)).usingCustomAttributes($e(e)).includingScopedRelationships("search-recommendations",[Uj]).addingQuery(jj,yM),r=sc(e,e.user.dsid)
return(null==r?void 0:r.length)>0&&n.addingQuery(YP,r),n.addingQuery(yU,"adDisplayStyle"),n}async fetchSearchLandingPageV2(e,t){const n=this.makeSearchLandingRequestV2(e,t),r=new gg.FetchTimingMetricsBuilder,o=e.addingFetchTimingMetricsBuilder(r),i=An(o,n),s=e.amsEngagement
let a
if(s&&e.bag.enableRecoOnDeviceReordering){const e={timeout:500,eventType:tX,tab:ej}
a=s.performRequest(e)}return await Promise.all([i,t,a]).then(([e,t,n])=>r.measureModelConstruction(()=>this.landingPageFromResponseV2(o,e,t,n)))}async fetchSearchLandingPageV2WithFocusPage(e,t){const n=this.makeSearchLandingRequestV2(e,t).enablingFeature("search-focus-suggestions"),r=new gg.FetchTimingMetricsBuilder,o=e.addingFetchTimingMetricsBuilder(r),i=An(o,n),s=e.amsEngagement
let a
if(s&&e.bag.enableRecoOnDeviceReordering){const e={timeout:500,eventType:tX,tab:ej}
a=s.performRequest(e)}return await Promise.all([i,t,a]).then(async([e,t,n])=>await r.measureModelConstructionAsync(async()=>await this.landingPageFromResponseV2WithFocusPage(o,e,t,n)))}landingPageFromResponseV2(e,t,n,r){if(o(t.data))return null
const i=Xo(e,o$,o$,t),s=yr(e)
i.recoMetricsData=Zd(i.recoMetricsData,null,s),i.iAdInfo=co(e,wU,n)
const a=ho(0,i.iAdInfo)
mo(e,a,n)
const c={shelves:[],metricsLocationTracker:{rootPosition:0,locationStack:[]},metricsPageInformation:i,adStitcher:nc(e,n,t),adIncidentRecorder:a,pageType:wm.Landing,recoImpressionData:ko(0,r)}
bw(e,t,c)
const l=this.createNaturalLanguageSearchBubbleTipShelf(e)
l&&c.shelves.unshift(l)
const u=new Fz(c.shelves)
return u.pageRefreshPolicy=new DQ(JP,e.bag.searchLandingPageRefreshUpdateDelayInterval,e.bag.searchLandingPageOffscreenRefreshInterval,null),u.adIncidents=wo(0,c.adIncidentRecorder),ti(e,u,c.metricsPageInformation),u}async landingPageFromResponseV2WithFocusPage(e,t,n,r){const o=this.landingPageFromResponseV2(e,t,n,r)
return await this.fetchFocusPageUsingLandingPageResponse(e,t).then(e=>(o.searchFocusPage=e,o))}async fetchFocusPageUsingLandingPageResponse(e,t){var n
if(o(t.data))return null
const r=Xo(e,Xk,eO,t," "),i=yr(e)
r.recoMetricsData=Zd(r.recoMetricsData,null,i)
const s={shelves:[],metricsLocationTracker:{rootPosition:0,locationStack:[]},metricsPageInformation:r,pageType:wm.Focus},a=function(e,t,n){const r=e.data
if(o(r))return null
for(const e of r){if(o(e))continue
const r=p(e,yU)
if(Sw(null==r?void 0:r.category)===t.pageType&&n===q(e,Px))return e}return null}(t,s,_S)
if((0,Ag.isNothing)(a))return this.createFocusPageFromResponse(e,t,s)
const c=null!==(n=J(a,Rk))&&void 0!==n?n:0,l=e.onDeviceSearchHistoryManager.fetchRecentsWithLimit(c)
return await l.then(n=>(s.searchHistory=n,this.createFocusPageFromResponse(e,t,s)))}createFocusPageFromResponse(e,t,n){bw(e,t,n)
const r=new $z(n.shelves)
return o(r.shelves)?null:(ti(e,r,n.metricsPageInformation),r)}createNaturalLanguageSearchBubbleTipShelf(e){var t
if(e.props.isNotEnabled("naturalLanguageSearchBubbleTip"))return
if(!e.bag.isNaturalLanguageSearchEnabled&&!e.bag.isNaturalLanguageSearchResultsEnabled)return
const n=bc(0,"searchFocusHeader",{signal:{lastNLSQueryDate:e.storage.retrieveString(RE),treatmentId:null!==(t=xe(e,Cg.SearchLandingPage))&&void 0!==t?t:null}},"pullOnly")
return n.refreshUrl=`${AW}:/${ZW}/${PW}/?${pq.isSearchFocusHeaderShelf}=true`,n}landingPageFromResponseV1(e,t,n){const r=c(t,KP)[0]
if(o(r))return null
if(!ne(r,hF))return null
const s=q(r,"id"),a=Xo(e,Ek,r.id,t),l=yr(e)
a.recoMetricsData=Zd(a.recoMetricsData,null,l),a.iAdInfo=co(e,wU,n)
const u=ho(0,a.iAdInfo)
mo(e,u,n)
const d={shelves:[],metricsPageInformation:a,metricsLocationTracker:{rootPosition:0,locationStack:[]},pageGenreAdamId:s,pageGenreId:J(r,fG),hasAuthenticatedUser:i(e.user.dsid),isSearchLandingPage:!0,adStitcher:nc(e,n),adIncidentRecorder:u}
mc(e,yc(e,r),d)
const f=new Fz(d.shelves),p=new DQ(JP,e.bag.searchLandingPageRefreshUpdateDelayInterval,e.bag.searchLandingPageOffscreenRefreshInterval,null)
return f.pageRefreshPolicy=p,f.adIncidents=wo(0,d.adIncidentRecorder),ti(e,f,d.metricsPageInformation),f}shouldUseProtocolV1(e){return!e.bag.supportsSearchLandingPageV2||!lt(e,e.bag.searchLandingPageV2RolloutRate)}trendingSearchesShelvesForResponse(e,t){return yg.context("trendingSearchesShelfForResponse",()=>{const n={rootPosition:0,locationStack:[]},r=c(t,"trendingSearches").map(t=>{const r=d(t,MG),o=new pQ(r,r,d(t,gj),Z$)
return e.client.isPhone&&(o.artwork=ce(e,Tx)),$f(e,o,Nj,n),af(n),new nW(o)})
let o=0
switch(e.client.deviceType){case Oj:o=10
break
case Lj:o=7}const i=new Ez(CG)
return i.title=r.length>0?d(t,"header.label"):null,i.isHorizontal=!1,i.items=r.slice(0,o),[i]})}}class g6{constructor(){this.$intentKind="SearchResultsPageIntent"}async perform(e,t){return await Dw(t,e.requestDescriptor)}}class m6{constructor(){this.$intentKind="SearchResultsPageMoreIntent"}async perform(e,t){return await _w(t,e.pageToken)}}class v6 extends Y0{constructor(e,t){super("SearchResultsBuilder"),t.exportingService(eM,{fetchResults:async t=>await async function(e,t){const n=new gg.FetchTimingMetricsBuilder,r=e.addingFetchTimingMetricsBuilder(n),o=await Bp(r,t)
return null===o?hw(r,t.facets):await async function(e,t){return await gw(e,t)}(r,o)}(e,t),fetchMoreResults:async t=>await async function(e,t){return await async function(e,t){return await yg.context("paginatedSearchResultsWithToken",async()=>{const n=lw(0,t),r=uw(0,t)
return 0===n.length?await Promise.resolve(hw(e)):await Up(e,n).then(async n=>{const o=L(n)
return await sw(e,t.requestMetadata,t.responseMetadata,t.metricsOptions,o).then(e=>{const t=new iQ
return t.results=e.builtSearchResults,t.nextPage=r,t})})})}(e,t)}(e,t.pageToken),fetchSearchResultsPage:async t=>await Dw(e,t),fetchMoreOfSearchResultsPage:async t=>await _w(e,t.pageToken)})}handlePage(e,t,n,r,o,i,s){s(new Error(TU))}pageRoute(e){return[]}pageType(){return Ej}}class y6{constructor(){this.$intentKind="ArticlePageIntent"}async perform(e,t){return await t.required(y2).fetchPage(t,e.url,L0)}}class A6 extends Y0{constructor(e,t){super("ArticleBuilder"),t.exportingService(QP,{fetchArticle:async t=>await e.required(y2).fetchPage(e,t.url,L0)})}handlePage(e,t,n,o,c,l,u){const f=new gg.FetchTimingMetricsBuilder,p=e.addingFetchTimingMetricsBuilder(f),h=JSON.parse(d(t.query,pq.recoMetrics)),w=function(e,t){const n=t.pathComponents()
if(n.indexOf(lN)<0&&n.indexOf(iN)<0&&n.indexOf(Jv)<0&&t.host!==aq&&t.host!==uq&&t.host!==dq)throw new Error(`Unable to map ${t.build()} to a media api url`)
let r
if(r=t.host===aq?e.props.asString("spamBlockingExtensionsEditorialItemID"):t.host===uq?e.bag.sharePlayAppsEditorialItemId:t.host===dq?e.bag.buddyOnboardingEditorialItemId:fa(t),!a(r))throw new Error(`Unable to map ${t.build()} to a media api url`)
if(!a(r))throw new Error(`Unable to map ${t} to a media api url`)
const o=[nx],i=[bB,oB,eG,pG,lj,ij,kF,O$]
e.appleSilicon.isSupportEnabled&&i.push(AG),i.push(O$)
const c=new Uz(e).withIdOfType(r,kj).includingAdditionalPlatforms(O(e)).includingAttributes(i).includingRelationships(o).includingRelationshipsForUpsell(!0).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes($e(e))
ki(e)&&(c.enablingFeature(FG),c.includingScopedAttributes(xj,[pj,GU,IU]),c.includingScopedRelationships(xj,[Tj]),c.includingScopedRelationships(Yv,[xj]),c.includingScopedAvailableIn(xj,[Kv]))
const l=t.query[pq.editorialCardId]
s(l)&&c.withFilter("canvas:cardId",l),Ei(e)&&(c.enablingFeature(E$),c.includingScopedRelationships(jU,[TF]),c.includingAssociateKeys(kj,[MB]),c.includingMetaKeys(Gv,[jv]),c.includingScopedAttributes(jU,[VG,hG,SM,tD])),c.includingAttributes([R$])
const u=t.query[pq.preview]
return fq.has(t.host)&&(null==u?void 0:u.length)>0&&(c.addingQuery(Zv,u),c.isStorePreviewRequest=!0),c.attributingTo(t.build())}(e,t)
An(p,w).then(async t=>await async function(e,t){return await _a(e,t,Ba,Ua)}(e,t)).then(o=>{const s=new N0
s.todayShelfRecoMetricsData=h,s.showingFallbackMediaInline=Boolean(n[pq.showingFallbackMedia]),s.additionalData=o.additionalData
const a=d(t.query,pq.todayCardConfig)
return(null==a?void 0:a.length)>0&&(s.todayCardConfig=JSON.parse(a)),s.allowUnpublishedAppEventPreviews=(0,Tg.isSome)(n[pq.preview]),s.isResilientDeepLink=e.deepLinks.hasResilientDeepLinks(),e.props.enabled(v_)&&e.client.isCompanionVisionApp&&(s.clientIdentifierOverride="com.apple.visionproapp"),f.measureModelConstruction(()=>function(e,t,n){return yg.context("articlePageWithResponse",()=>{var o
const s=_(e,t)
n.metricsPageInformation=Xo(e,iN,s.id,t),n.metricsLocationTracker={rootPosition:0,locationStack:[]},n.pageId=s.id
const a=new AJ(n.metricsPageInformation,n.metricsLocationTracker,n.refreshController),c=function(e,t){if(!i(t))return null
if((0,Tg.isSome)(t.todayCardConfig))return t.todayCardConfig
const n={useOTDTextStyle:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!1,canDisplayArcadeOfferButton:!0,isHeroCard:!1}
switch(n.clientIdentifierOverride=t.clientIdentifierOverride,n.useOTDTextStyle=!1,n.allowUnpublishedAppEventPreviews=t.allowUnpublishedAppEventPreviews,n.currentRowIndex=void 0,e.client.deviceType){case Mj:n.prevailingCropCode="en",n.coercedCollectionTodayCardDisplayStyle=Zg.Grid,n.heroDisplayContext=rm.Article
break
case"tv":n.prevailingCropCode="ek",n.coercedCollectionTodayCardDisplayStyle=Zg.Grid,n.heroDisplayContext=rm.Article}return n}(e,n)
let l=qi(e,s,c,a)
const u=null==l?void 0:l.media,f=null!==(o=null==l?void 0:l.title)&&void 0!==o?o:void 0,p=q(s,JU)
n.crossLinkSubtitle=ls(e,s),n.clientIdentifierOverride=c.clientIdentifierOverride,ef(0,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,targetType:HG,id:n.pageId,idType:tj},f)
const h=function(e,t,n,r){return yg.context("renderArticle",()=>{var o
const s=[],a=null!==(o=se(t,nx))&&void 0!==o?o:[]
for(const n of a){r.module=q(n,US),r.subStyle=null,s.length
const o=ja(e,n,t,r)
if(o.length>0)for(const e of o)e.title=r.titleForNextShelf,s.push(e),r.titleForNextShelf=null
r.index++,af(r.metricsLocationTracker)}if(r.showingFallbackMediaInline&&0===s.length){const e=function(e,t){if(t instanceof Kz){const e=new Ez(uj)
return e.items=t.lockups,e}return null}(0,n)
i(e)&&s.push(e)}return s})}(e,s,u,n),w=h[h.length-1],m=n.isResilientDeepLink||"OfferItem"===p?null:function(e,t,n){const o=Va(0,t)
let s=null
const a=Ed(e,t,jj),c=Ed(e,t,DB)
if(a&&c&&(s=e.loc.string("ShareSheet.TitleSubtitle.Format","{title}: {subtitle}").replace(HF,a).replace(Fb,c)),!s&&a&&(s=a),!s&&c&&(s=c),!s&&o){const n=q(o,jj),r=q(t,Yx)
switch(r){case Zg.GameOfTheDay:s=e.loc.string("SHARE_SHEET_GAME_OF_DAY_TITLE_FORMAT").replace(HF,n)
break
case Zg.AppOfTheDay:s=e.loc.string("SHARE_SHEET_APP_OF_DAY_TITLE_FORMAT").replace(HF,n)
break
default:e.console.log(`No title for article with unknown style: ${r}`)}}const l=q(t,gj)
let u
switch(q(t,Yx)){case Zg.Grid:case Zg.List:case Zg.River:u=ce(e,"resource://ShareCollectionThumbnail",40,40)
break
default:u=null}const d=function(e,t,n,o,s,a){return r(a)?null:yg.context("shareSheetDataForArticle",()=>{let r=s
!r&&a&&(r=function(e,t){const n=Ki(t)
{const r=cs(e,t,rm.Article,n)
if(i(r))return r}return ts(e,H(t,es(0,n)))}(e,a))
let o=t
e.props.isNotEnabled("stripNQMLFromShareSheetNatively")&&(o=function(e,t){return t}(0,t))
const c=e.loc.string("ShareSheet.Story.Subtitle"),l=new IV(a.id,o,c,r)
return new EV(l,n,null)})}(e,s,l,0,u,t)
if(!i(d))return null
const f=function(e,t,n){const r=[]
if((null==t?void 0:t.length)>0){const n=ds(e,t)
i(n)&&r.push(n)}if((null==n?void 0:n.length)>0){const t=ds(e,n,"Copy Card Preview Link")
i(t)&&r.push(t)}return r}(e,l,function(e,t,n){if((0,Tg.isNothing)(t))return null
switch(e.client.buildType){case HN:case RF:const e=new kq
return e.protocol=TW,e.host=eN,e.pathname=`/${HW}`,e.param(pq.ids,`${t}`),e.param(pq.isTodayFeedPreview,GG),e.param(pq.isTodaySection,n.useOTDTextStyle?GG:yL),decodeURIComponent(e.build())
default:return null}}(e,t.id,n))
return new JH(d,f)}(e,s,c)
if(i(m)){Lf(e,m,{targetType:Nj,id:n.pageId,actionType:gM,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker})
const t=function(e,t,n){if(t&&n){const e=t.items.length
if(e>0&&-1!==B0.indexOf(n)){const n=t.items[e-1]
switch(t.contentType){case Kx:case q_:return n&&n.isFullWidth
default:return!0}}}return!1}(0,w,n.module),r=function(e,t,n,r){if(!i(t)||e.client.isCompanionVisionApp)return null
const o=new gz(gM,e.loc.string("SHARE_STORY"),!r,t),s=new Ez("roundedButton")
return s.items=[o],s}(e,m,0,t)
r&&h.push(r)}const v=new L0(l,h,m)
if(v.editorialStoryCard=void 0,function(e,t,n,r){const o=Va(0,n)
if(o){const i=at(0,n)
return void(t.footerLockup=function(e,t,n,r){return hu(e,t,{offerStyle:Ha(e),metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,externalDeepLinkUrl:r,crossLinkSubtitle:n.crossLinkSubtitle,artworkUseCase:0,canDisplayArcadeOfferButton:$d(0,uj)})}(e,o,r,i))}const s=Y(n,XE)
if(i(r.additionalData)&&s){const o=Hf(e,n)
t.arcadeFooterLockup=function(e,t,n){return bu(e,t,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},_I,rG,null)}(e,o,r)}}(e,v,s,n),v.shouldTerminateOnClose=n.isResilientDeepLink,ti(e,v,n.metricsPageInformation,e=>{let t=f
if((null==l?void 0:l.media)instanceof Jz&&(null==l?void 0:l.overlay)instanceof iY&&(t=(null==l?void 0:l.overlay).lockup.title),!t)return
let n=d(g(e[VF]),OG)
n=n||d(g(e[cB])),e[VF]=n?`${n}_${t}`:`unknown_${t}`}),(0,Tg.isSome)(s)){const e=q(s,gj);(0,Tg.isSome)(e)&&(v.viewArticleAction=new OH(e,!0))}return v})}(p,o.originalData,s))}).then(e=>{const n=Y0.createFlowAction(e,HG,t)
{const e=new CH(Cj)
return e.actions=[n],e}}).then(l,u)}pageRoute(e){return[{protocol:TW,path:`/{countryCode}/${jW}/{id}`,query:[`${pq.showingFallbackMedia}?`,`${pq.preview}?`,`${pq.todayCardConfig}?`]},{protocol:TW,path:`/{countryCode}/${jW}/{seoSlug}/{id}`,query:[`${pq.showingFallbackMedia}?`,`${pq.preview}?`,`${pq.todayCardConfig}?`]},{protocol:TW,path:`/{countryCode}/${GW}/{id}`,query:[`${pq.showingFallbackMedia}?`,`${pq.preview}?`,`${pq.todayCardConfig}?`]},{protocol:TW,path:`/{countryCode}/{platform}/${GW}/{id}`,query:[`${pq.showingFallbackMedia}?`,`${pq.preview}?`,`${pq.todayCardConfig}?`]},{protocol:TW,path:`/{countryCode}/${GW}/{seoSlug}/{id}`,query:[`${pq.showingFallbackMedia}?`,`${pq.preview}?`,`${pq.todayCardConfig}?`]},{protocol:TW,path:`/${GW}/{id}`,query:[`${pq.showingFallbackMedia}?`,`${pq.preview}?`,`${pq.todayCardConfig}?`]},{protocol:TW,path:`/${GW}/{seoSlug}/{id}`,query:[`${pq.showingFallbackMedia}?`,`${pq.preview}?`,`${pq.todayCardConfig}?`]},{protocol:TW,path:`/${IW}/${VW}`,query:[pq.id,`${pq.showingFallbackMedia}?`,`${pq.preview}?`,`${pq.todayCardConfig}?`]},{protocol:TW,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/editorial-items/{id}",query:[pq.id,`${pq.showingFallbackMedia}?`,`${pq.preview}?`,`${pq.todayCardConfig}?`]},{protocol:TW,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/editorial-items/{seoSlug}/{id}",query:[pq.id,`${pq.showingFallbackMedia}?`,`${pq.preview}?`,`${pq.todayCardConfig}?`]},{protocol:TW,path:"{apiVersion}/editorial/{countryCode}/editorial-items/{id}",query:[pq.id,`${pq.showingFallbackMedia}?`,`${pq.preview}?`,`${pq.todayCardConfig}?`]},{protocol:TW,path:"{apiVersion}/editorial/{countryCode}/editorial-items/{seoSlug}/{id}",query:[pq.id,`${pq.showingFallbackMedia}?`,`${pq.preview}?`,`${pq.todayCardConfig}?`]},{protocol:TW,hostName:`${aq}`},{protocol:AW,path:`/${GW}/{id}`,query:[`${pq.metrics}?`,`${pq.invalidateWidgetsOnFailure}?`]},{protocol:TW,hostName:`${uq}`},{protocol:TW,hostName:`${dq}`}]}pageType(){return HG}}mm=e(1415),function(e){e.OnboardingCards="onboardingCards",e.Ads="ads",e.ODP="ODP",e.AMDData="amdData"}(vm||(vm={}))
const T6=[lj,ij,pG,nR,rR,oR,kF,eG,O$]
class b6 extends Y0{constructor(){super("TodayCardPreviewBuilder")}pageType(){return Cj}pageRoute(e){return[{protocol:TW,path:`/${HW}`,query:[`${pq.ids}?`,`${pq.isTodaySection}?`,`${pq.isTodayFeedPreview}?`,`${pq.preview}?`,`${pq.experimentId}?`,`${pq.fetchData}?`]}]}handlePage(e,t,n,r,i,a,c){yg.context(`${this.builderClass}.pageHandler`,()=>{var r
const i=new _q(this.pageType())
if(i.pageUrl=t.build(),!w(n[pq.fetchData]))return void a(i)
const l=null===(r=n[pq.experimentId])||void 0===r?void 0:r.split(","),u=n[pq.ids]
if(s(l)&&o(u)){const t={}
for(const e of l){const n=e.split(":")[0],r=e.split(":")[1]
t[n]=r}const n=s(t)?JSON.stringify(t):void 0
$w(e,{experimentIdHeader:n,url:"",onboardingCardIds:[]}).then(e=>{i.pageData=e,a(i)}).catch(e=>{c(e)})}else{const n=Fw(e,this.createFlattenedTodayItemsFromUrl(t),b6.emptyTodayPageResponse,null,null)
i.pageData=n,a(i)}})}createFlattenedTodayItemsFromUrl(e){const t=[],n=d(e.query[pq.ids]),r=(0,Tg.isSome)(e.query[pq.isTodayFeedPreview])&&w(e.query[pq.isTodayFeedPreview]),o=(0,Tg.isSome)(e.query[pq.isTodaySection])&&w(e.query[pq.isTodaySection])
if(!s(n))return t
const i=n.match(/([a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)?:\[[^\]]+\]|[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)?)/g)
let a=r,c=0
for(const e of i){const n=e.split(":")[0],r=b6.storyGroupIdRegex.exec(e)
if((0,Tg.isSome)(r)){const e=r[1].split(",").map(e=>this.createUnhydratedEditorialItemFromId(e,o))
t.push({type:lm.EditorialItemGroup,data:{id:n,type:kB,relationships:{},meta:{associations:{recommendations:{data:e}}}},isDataHydrated:!1,isFirstItemInModule:a,moduleMetadata:{...b6.previewModuleData},containedAdSlots:Array.from({length:e.length},(e,t)=>t+c)}),a=!1,c+=e.length}else t.push({type:lm.EditorialItem,data:this.createUnhydratedEditorialItemFromId(e,o),isDataHydrated:!1,isFirstItemInModule:a,moduleMetadata:{...b6.previewModuleData},containedAdSlots:[c]}),a=!1,c+=1}return t}createUnhydratedEditorialItemFromId(e,t){const n=e.split(":")[0],r=e.split(":")[1],o=(0,Tg.isSome)(r)?{"editorial-cards":{data:[{id:`${n}-${r}`,type:MB}]}}:{}
return{id:n,type:kj,relationships:{},meta:{personalizationData:{isOfTheDay:t},associations:o}}}}b6.storyGroupIdRegex=/\[(.*)\]/,b6.previewModuleData={label:XP,title:"Today Preview",meta:{},isTodayForAppsModule:!1},b6.emptyTodayPageResponse={results:{data:[]}}
class S6{constructor(){this.$intentKind="TodayPageIntent"}async perform(e,t){const n=e.isRunningPPTs?JSON.stringify({NyCxKBD:"client-perf"}):void 0
return await $w(t,{url:e.url,onboardingCardIds:e.onboardingCardIds,experimentIdHeader:n})}}class P6{constructor(){this.$intentKind="TodayPageMoreIntent"}async perform(e,t){const n=e.pageToken
return jw(t,n.pageInformation),await Bw(t,n),Nw(t,n)}}class I6 extends Y0{constructor(e,t){super("TodayPageBuilder"),t.exportingService(QP,{fetchPage:async t=>await $w(e,{url:t.url,onboardingCardIds:t.onboardingCardIds}),async fetchMoreOfPage(t){const n=t.pageToken
return jw(e,n.pageInformation),await Bw(e,n),Nw(e,n)}})}defaultTab(e){return Cj}pageType(){return Cj}pageRoute(e){return[]}handlePage(e,t,n,r,o,i,s){s(new Error("handlePage not implemented for TodayBuilder"))}}class C6 extends hV{constructor(e,t,n,r){super(),this.shortName=e,this.longName=t,this.chart=n,this.shelves=r,this.nextPage=null,this.pageMetrics=new bH,this.pageRenderMetrics={}}}class k6 extends UQ{constructor(e,t,n){super(e.name,e.genreId,e.artwork,e.ageBandId,n),this.shortName=this.name,this.longName=this.name,this.url=t}}class O6 extends hV{constructor(e,t,n,r,o,i){super(),this.genreId=e,this.ageBandId=t,this.title=n,this.segments=r,this.categoriesButtonTitle=o,this.categories=i,this.initialSegmentIndex=0}}class E6{constructor(){this.$intentKind="TopChartsPageIntent"}async perform(e,t){return await Vw(t,e.url)}}class R6{constructor(){this.$intentKind="TopChartsPageMoreIntent"}async perform(e,t){return await Hw(t,e.pageToken)}}class D6 extends Y0{constructor(e,t){super("TopChartsBuilder"),t.exportingService("TopChartData",{fetchPage:async t=>await Vw(e,t.url),fetchMoreOfSegment:async t=>await Hw(e,t.pageToken)})}pageRoute(e){return Ww()}handlePage(e,t,n,i,a,c,l){const u=n[pq.isPPT]
t.removeParam(pq.isPPT)
let f=t.query[pq.chart],p=n[pq.genre]
o(p)&&(p=d(e.bag.defaultChart,"genre-id"),o(f)&&(f=d(e.bag.defaultChart,"chart-id")))
let h=n[pq.charts]
if(o(h)){const e=uc(0,f)
h=void 0!==e?`${f},${e}`:f}else h.includes(f)||(h+=`,${f}`)
const w=dc(e,p,h,n[pq.ages])
let g
g=fc(e,h,p),Promise.all([w,g]).then(async([t,n])=>{const o=Gn(e,n),i=r(o)?Nn(p):Bn(o)
{const n=qw(e,t,p,o,f,i)
if(u&&s(n.segments)){const t=n.segments[0],r=t.nextPage,o=ot(0,r)
if(s(o)){const i=new Uz(e,o)
return await An(e,i).then(o=>{const i=it(0,r)
i.remainingContent=[],i.maxPerPage=0
const s=Jw(e,o,r,i),a=t.shelves.concat(s.shelves),c=new C6(t.shortName,t.longName,t.chart,a)
return c.pageMetrics=t.pageMetrics,c.nextPage=null,n.segments[0]=c,n})}}return n}}).then(e=>{let n
return e instanceof O6?n=Sx:e instanceof xz&&(n=Vj),Y0.createFlowAction(e,n,t)}).then(c,l)}pageType(){return Sx}handlePagination(e,t,n,r,o,i,a){yg.context(`${this.builderClass}.handlePagination`,()=>{Hw(e,o).then(e=>function(e){var t,n
const r=new xz(e.shelves)
return r.title=null!==(t=e.longName)&&void 0!==t?t:e.shortName,r.pageMetrics=e.pageMetrics,r.pageRenderMetrics=e.pageRenderMetrics,s(null===(n=null==e?void 0:e.nextPage)||void 0===n?void 0:n.remainingContent)&&(r.nextPage=e.nextPage),r}(e)).then(i).catch(a)})}}class _6 extends hV{constructor(e,t,n,r){super(),this.collections=e,this.refreshDate=t,this.originalResponseDate=n,this.originalResponseHash=r}}class L6 extends hV{constructor(e,t){super(),this.cards=e,this.displayDate=t}}class x6 extends hV{constructor(e,t,n,r,o,i,s,a,c,l,u,d){super(),this.storyId=e,this.heading=t,this.title=n,this.backgroundColor=r,this.isDark=o,this.iconArtwork=i,this.url=s,this.eventBadgeKind=l,this.editorialArtwork=c,this.isVideoArtwork=a,this.eventStartDate=u,this.eventEndDate=d}}class M6{make(e){const t=new Uz(e).forType(this.typeForUseCase()).withIdsOfType(this.ids(),this.typeForUseCase()).addingContext(this.context()).includingAttributes(this.attributesForUseCase()).asPartialResponseLimitedToFields(this.fieldsForRequest()).withSparseCount(this.sparseCountForUseCase()).withSparseLimit(this.sparseLimitForUseCase()).enablingFeature(this.enablingFeature(e)).usingCustomAttributes(this.shouldUseCustomAttributes(e)),n=this.addingQuery()
if(null!==n)for(const e of n)t.addingQuery(e.key,e.value)
return t}}class $6 extends M6{context(){return iO}typeForUseCase(){return Cj}attributesForUseCase(){return[lj,ij,pG]}sparseCountForUseCase(){return null}sparseLimitForUseCase(){return null}addingQuery(){return null}ids(){return[]}fieldsForRequest(){return[BE,_j,VL,Yx,JC,XU,BA,lj,RA,OU,ij,jL,"id",k$,JU,MG,aj,pG,jj,KC,GL]}enablingFeature(e){return ki(e)?FG:null}shouldUseCustomAttributes(e){return $e(e)}}class F6{constructor(){this.$intentKind="WidgetIntent"}async perform(e,t){const n=e.widgetKind
if(n===pP)return await og(t,e)
throw Error(`Invalid widgetKind of '${n}'`)}}class N6 extends Y0{constructor(e,t){super("WidgetController"),t.exportingService("WidgetData",{fetchTodayWidget:async t=>await og(e,t)})}handlePage(e,t,n,r,o,i,s){s(new Error(TU))}pageRoute(e){return[]}pageType(){return Ej}}ym=e(5881)
class B6{constructor(){this.dispatcher=new ym.IntentDispatcher}register(e){this.dispatcher.register(e)}async dispatch(e,t){const n=await this.createIntentObjectGraphWithAsyncValues(t)
return await this.dispatcher.dispatch(e,n)}controller(e){return this.dispatcher.controller(e)}get registeredControllers(){return this.dispatcher.registeredControllers}async createIntentObjectGraphWithAsyncValues(e){const t=new cH,n=new fH,r=new fH(dH)
let o
return e instanceof hH&&(await t.loadTreatments(e),await n.loadValues(e,[kg.client,kg.user]),e.bag.personalizationUserIdEnabled&&await r.loadValues(e,[kg.user]),e.props.enabled(uO)&&e.bag.metricsPaymentNamespaceEnabled&&(o=new fH(lH),await o.loadValues(e,[kg.client,kg.user]))),e.adding(cH.metatype,t).adding(fH.defaultMetatype,n).adding(fH.paymentMetatype,o||n).adding(fH.personalizationMetatype,r)}}class U6 extends hg.LegacyRuntime{constructor(e,t){super(e,t,{})}exportingService(e,t){this.wrapServiceInValidation(t)
const n={...this.serviceWithName(e)||{},...t}
return super.exportingService(e,n)}exportingServiceName(e,t,n){const r={}
r[t]=n,this.exportingService(e,r)}wrapServiceInValidation(e){for(const t of Object.keys(e)){const n=e[t]
n instanceof Function&&(e[t]=function(...e){const t=n.apply(this,e)
return t instanceof Promise?t.then(e=>(yg.recordValidationIncidents(e),e)):(yg.recordValidationIncidents(t),t)})}}}!function(e){e.Control="Tf5Kjqz00",e.LayoutA="Tf5Kjqz01",e.LayoutB="Tf5Kjqz02"}(Am||(Am={}))
class G6{constructor(){this.$intentKind="ArcadeDownloadPackCategoriesPageIntent",this.maxNumberOfCategoriesToChoose=4}async perform(e,t){return await this.fetchDownloadPackPage(t,te(e.subscriptionStatus))}async fetchDownloadPackPage(e,t){const n=new tW
n.title=e.loc.string("Arcade.DownloadPack.CategorySelection.PrimaryButtonTitle")
const r=new tW
r.title=e.loc.string("Arcade.DownloadPack.CategorySelection.SecondaryButtonTitle")
const o=await this.fetchCategories(e),i=new IY(e.loc.string(t===xI?"Arcade.DownloadPack.CategorySelection.Title.CurrentUser":"Arcade.DownloadPack.CategorySelection.Title"),o,this.maxNumberOfCategoriesToChoose,"Arcade.DownloadPack.CategorySelection.MaxCount","Arcade.DownloadPack.CategorySelection.Selected.Full",n,r),s=new sX({pageId:"SelectCategories",pageType:SP}),a={rootPosition:0,locationStack:[]}
return e.bag.arcadeDownloadPacksMetricsEventsEnabled&&(n.actionMetrics.addMetricsData(Pf(e,"Ok",Nj,{actionType:Dj})),r.actionMetrics.addMetricsData(Pf(e,"Skip",Nj,{actionType:eD})),o.forEach(t=>{t.selectActionMetrics.addMetricsData(Pf(e,t.id,H$,{actionType:Ob})),t.deselectActionMetrics.addMetricsData(Pf(e,t.id,H$,{actionType:"remove"}))}),ti(e,i,s)),e.bag.arcadeDownloadPacksImpressionEventsEnabled&&o.forEach(t=>{const n={id:t.id,idType:tj,kind:Nj,locationTracker:a,pageInformation:s,softwareType:QG,targetType:H$,title:t.title}
pf(e,t,n),af(a)}),i}async fetchCategories(e){const t=e.bag.arcadeDownloadPackCategoriesCollectionId,n=new Uz(e).withIdOfType(t,ZB).addingQuery(PP,nP).includingAdditionalPlatforms(O(e))
return await An(e,n).then(t=>this.categoriesFromResponse(e,t))}categoriesFromResponse(e,t){return yg.context("categoriesFromResponse",()=>{const n=L(t),r=[]
for(const t of n){const n=t.id,o=Rd(e,t,jj),i=p(Pe(e,t,lj),bA)
if((0,Tg.isNothing)(i))continue
const s=Fu(e,i,{useCase:20}),a=Ie(e,t,"editorialBackground.stops").map(e=>F(d(e,_U))).filter(e=>(0,Tg.isSome)(e))
if(0===a.length){e.console.log(`Empty gradient for category: ${n}`)
continue}const c=a[0],l=1===a.length?a[0]:a[1],u=new PY(n,o,s,c,l)
r.push(u)}return r.sort((t,n)=>{try{return t.title.localeCompare(n.title,e.loc.safeIdentifier,{usage:zU})}catch(e){return 0}})})}}class j6{constructor(){this.$intentKind="ArcadeDownloadPackSuggestionsPageIntent",this.maxGamesCount=4}async perform(e,t){const n={rootPosition:0,locationStack:[]},r=new sX({pageId:"DownloadStarterPack",pageType:SP})
return await this.fetchSuggestedGames(t,e.categories,this.maxGamesCount,r,n).then(o=>this.createSuggestionsPage(o,t,te(e.subscriptionStatus),r,n))}async fetchSuggestedGames(e,t,n,r,o){const i=new Uz(e).forType(oD).addingQuery("include[personal-recommendations]",Uj).addingQuery("associate[apps]",HB).addingQuery("limit[personal-recommendations:contents]",`${n}`).addingQuery("omit[resource:apps]","autos").addingQuery("sparseLimit[apps:association.category]","0").addingQuery("sparseLimit[personal-recommendations:contents]",`${n}`).addingQuery(CG,"arcade-onboarding").includingAdditionalPlatforms(O(e)),s=this.fetchOptions(t,kj)
return await An(e,i,s).then(n=>this.suggestionFromResponse(e,t,n,r,o))}suggestionFromResponse(e,t,n,r,o){return yg.context("suggestionFromResponse",()=>{const i={}
for(const e of t)i[e.id]=e
const s=L(re(_(e,n),Uj)),a=[]
for(const t of s){const n=c(t.meta,"associations.category.data")[0].id,s=hu(e,t,{offerStyle:tB,offerEnvironment:bj,metricsOptions:{pageInformation:r,locationTracker:o,badges:{categoryId:n}},metricsClickOptions:{id:t.id,pageInformation:r,locationTracker:o,badges:{categoryId:n}},artworkUseCase:1,isSubtitleHidden:!0});(0,Tg.isNothing)(s)||(s.heading=i[n].title,af(o),Mu(s,e),a.push(new CY(s,n)))}return a})}createSuggestionsPage(e,t,n,r,o){const i=e.map(e=>this.offerAction(e.lockup.buttonAction)).filter(e=>(0,Tg.isSome)(e)),s=new FH(i)
s.title=function(e){switch(ig(e)){case Am.Control:return e.loc.string(tI)
case Am.LayoutA:case Am.LayoutB:return e.loc.string("Arcade.DownloadPack.Suggestions.DownloadAllButtonTitle")
default:return e.loc.string(tI)}}(t)
const a=i.map(e=>e.adamId),c=new tW
c.title=function(e){switch(ig(e)){case Am.Control:return e.loc.string(SR)
case Am.LayoutA:case Am.LayoutB:return e.loc.string("Arcade.DownloadPack.Suggestions.NotNowButtonTitle")
default:return e.loc.string(SR)}}(t)
const l=new kY(t.loc.string(n===m$?"Arcade.DownloadPack.Suggestions.Title.NewUser":"Arcade.DownloadPack.Suggestions.Title"),e,s,function(e){switch(ig(e)){case Am.Control:return bR
case Am.LayoutA:return"withinLockups"
case Am.LayoutB:default:return bR}}(t),c,function(e){switch(ig(e)){case Am.Control:case Am.LayoutA:return eI
case Am.LayoutB:return"getAll"
default:return eI}}(t),function(e){switch(ig(e)){case Am.Control:return null
case Am.LayoutA:case Am.LayoutB:return e.loc.string(SR)
default:return null}}(t))
return t.bag.arcadeDownloadPacksMetricsEventsEnabled&&(Lf(t,s,{id:"GetAll",actionType:ZL,subjectIds:a,actionDetails:{subjectIds:a},pageInformation:r,locationTracker:o,targetType:Nj}),c.actionMetrics.addMetricsData(Pf(t,"Done",Nj,{actionType:Dj})),ti(t,l,r)),l}offerAction(e){return e instanceof RH?e:e instanceof MH?e.defaultAction instanceof RH?e.defaultAction:e.buyAction instanceof RH?e.buyAction:null:null}fetchOptions(e,t){const n={selected:e.map(e=>({id:e.id,type:t}))}
return{method:SN,headers:{"Content-Type":ck},requestBodyString:JSON.stringify(n)}}}class V6 extends Y0{constructor(e,t){super("ArcadeDownloadPackBuilder")}pageRoute(e){return lt(e,e.bag.arcadeDownloadPackRolloutRate)?[{hostName:"arcadeDownloadPack",query:[`${pq.arcadeSubscriptionStatus}?`]}]:[]}handlePage(e,t,n,r,o,i,s){const a=new _q(C$),c=d(n,pq.arcadeSubscriptionStatus)
a.pageData=te(c),i(a)}pageType(){return C$}}class H6 extends J0{constructor(){super("EditorialShelfRecommendationPageController")}defaultPlatforms(e){return O(e)}defaultAttributes(e){const t=[lj,ij,YU,eG,xB,FF,N$,aG]
return e.appleSilicon.isSupportEnabled&&t.push(AG),t}pageType(){return Vj}pageRoute(e){return[{protocol:TW,path:`WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/editorial-shelves-recommendation/{${pq.shelfId}}`,query:[`${pq.editorialPageId}?`]},{protocol:TW,path:`{apiVersion}/{realm}/editorial/{countryCode}/editorial-shelves-recommendation/{${pq.shelfId}}`,query:[`${pq.editorialPageId}?`]},{protocol:TW,path:`{apiVersion}/editorial/{countryCode}/editorial-shelves-recommendation/{${pq.shelfId}}`,query:[`${pq.editorialPageId}?`]}]}generatePageRequest(e,t,n){const r=n[pq.shelfId],o=n[pq.editorialPageId]
if((0,Tg.isNothing)(r)||0===r.length||(0,Tg.isNothing)(o)||0===o.length)throw new Error(`Unable to map ${t.build()} to a media api url`)
const i=new Uz(e,t.toString())
return i.addingQuery(pq.editorialPageId,o),i}prepareRequest(e,t,n,r,o){super.prepareRequest(e,t,n,r,o),t.includingRelationships([Uj]),Jp(e,t)}renderPage(e,t,n,r,o,i){return yg.context("renderEditorialShelfRecommendationPage",()=>{const n=_(e,t)
if(!s(n))return null
const r=Xo(e,cU,n.id,t),o=Cn(t),i=Ah(e,void 0,n,!1,0,r,{rootPosition:0,locationStack:[]}),a=new Ez(gx)
a.id=Ik,a.items=[new WV(null,q(n,KB),q(n,NB))]
const c=kh(e,void 0,i)
c.title=null,c.eyebrow=null,c.isHorizontal=!1
const l=new xz([a,c])
return l.pageRefreshPolicy=On(e,o),ti(e,l,r),l})}}(0,hg.exportBootstrap)(function(e){const[t,n]=function(){const e=new A2,t=function(e,t,n){var r
const o=function(e,t,n,r,o,i,s,a,c,l,u,d,f,p,h,w,g,m,v,y,A,T,b,S,P,I,C,k,O,E,R,D,_,L,x,M,$){return e.configureDefaults(n,r,o,i,s,a,c,l,u,d,f,p,h,w,g,m,v,y,A,T,b,S,P,I,C,k,O,E,R,D,_,L,x,M,$).adding(y2,t)}(new hH("app-store"),e,bag,cryptography,host,net,platform,plist,random,services,cookieProvider,console,ask.storeMetrics,ask.amsEngagement,ask.loc,ask.adsLoc,ask.device,ask.client,ask.props,ask.user,ask.metricsIdentifiers,ask.clientOrdering,ask.personalizationStore,ask.arcade,ask.gameCenter,ask.resilientDeepLinks,ask.appleSilicon,ask.storage,ask.ads,ask.onDeviceRecommendationsManager,ask.onDeviceSearchHistoryManager,null!==(r=ask.featureFlags)&&void 0!==r?r:{isEnabled:()=>!1,isGSEUIEnabled:()=>!1},mediaToken,ask.appDistribution,ask.timeoutManager,ask.treatmentStore,ask.userDefaults)
return wH.createSharedMetricsReferralContext(o),o}(e),n=new B6,r=new U6(n,t)
return function(e,t){const n=e.required(y2)
t.exportingService(Mv,{fetchGeneric:async t=>await n.fetchPage(e,t.url,xz),fetchMoreOfGeneric:async t=>await n.fetchMoreOfPage(e,t.pageToken),fetchShelves:async t=>await n.fetchShelves(e,t.requests),fetchAction:async t=>await lp(e,t)})}(t,r),e.registerPageBuilder(t,new I6(t,r)),e.registerPageBuilder(t,new A6(t,r)),e.registerPageBuilder(t,new b6),e.registerPageBuilder(t,new D6(t,r)),e.registerShelfBuilder(t,new v0),e.registerShelfBuilder(t,new y0),e.registerShelfBuilder(t,new A0),e.registerShelfBuilder(t,new b0),e.registerShelfBuilder(t,new T0),e.registerShelfBuilder(t,new S0),e.registerShelfBuilder(t,new P0),e.registerShelfBuilder(t,new I0),e.registerShelfBuilder(t,new k0),e.registerShelfBuilder(t,new C0),e.registerShelfBuilder(t,new O0),e.registerShelfBuilder(t,new E0),e.registerShelfBuilder(t,new U0),e.registerShelfBuilder(t,new G0),e.registerShelfBuilder(t,new j0),e.registerShelfBuilder(t,new V0),e.registerShelfBuilder(t,new e1),e.registerShelfBuilder(t,new t1),e.registerShelfBuilder(t,new n1),e.registerPageBuilder(t,new O5),e.registerPageBuilder(t,new M4(t,r)),e.registerPageBuilder(t,new O4(t,r)),e.registerPageBuilder(t,new j4(t,r)),e.registerPageBuilder(t,new Q2),e.registerPageBuilder(t,new D4(t,r)),e.registerPageBuilder(t,new B4(t,r)),e.registerPageBuilder(t,new U4),e.registerPageBuilder(t,new Z2),e.registerPageBuilder(t,new V6(t,r)),e.registerShelfBuilder(t,new r1),e.registerPageBuilder(t,new y5),e.registerPageBuilder(t,new A5),e.registerPageBuilder(t,new H6),e.registerPageBuilder(t,new k5),e.registerPageBuilder(t,new q5),e.registerPageBuilder(t,new Q5),e.registerPageBuilder(t,new X5),e.registerPageBuilder(t,new H5(t,r)),e.registerPageBuilder(t,new j5),e.registerPageBuilder(t,new e6),e.registerPageBuilder(t,new t6),e.registerPageBuilder(t,new U5),e.registerPageBuilder(t,new B5),e.registerPageBuilder(t,new G5),e.registerPageBuilder(t,new w6),e.registerPageBuilder(t,new a6(t,r)),e.registerPageBuilder(t,new v6(t,r)),e.registerPageBuilder(t,new p6(t,r)),e.registerPageBuilder(t,new g5),e.registerPageBuilder(t,new m5),e.registerPageBuilder(t,new v5),e.registerPageBuilder(t,new F2(t,r)),e.registerPageBuilder(t,new V2(t,r)),e.registerPageBuilder(t,new N2),e.registerPageBuilder(t,new Y2),e.registerPageBuilder(t,new B2),e.registerPageBuilder(t,new z2),e.registerPageBuilder(t,new H2),e.registerPageBuilder(t,new W2),e.registerPageBuilder(t,new q2),e.registerPageBuilder(t,new c5),e.registerPageBuilder(t,new l5),e.registerPageBuilder(t,new o5),e.registerPageBuilder(t,new X4),e.registerPageBuilder(t,new i5),e.registerPageBuilder(t,new u5),e.registerPageBuilder(t,new e5),e.registerPageBuilder(t,new n5),e.registerPageBuilder(t,new s5),e.registerPageBuilder(t,new r5),e.registerPageBuilder(t,new a5),e.registerPageBuilder(t,new $5(t,r)),e.registerPageBuilder(t,new R5(t,r)),e.registerPageBuilder(t,new i6),e.registerPageBuilder(t,new o6),e.registerPageBuilder(t,new n6),e.registerPageBuilder(t,new r6),e.registerPageBuilder(t,new C5(t,r)),e.registerPageBuilder(t,new N6(t,r)),e.registerPageBuilder(t,new K2(t,r)),e.registerPageBuilder(t,new D5(t,r)),e.registerPageBuilder(t,new q4(t,r)),e.registerPageBuilder(t,new K4(t,r)),e.registerPageBuilder(t,new H4(t,r)),e.registerPageBuilder(t,new N5(t,r)),e.registerPageBuilder(t,new Q4(t,r)),[n,r]}()
return t.register(new $2),t.register(new P2),t.register(new C2),t.register(new x4),t.register(new C4),t.register(new k4),t.register(new R4),t.register(new V4),t.register(new G4),t.register(new N4),t.register(new G6),t.register(new j6),t.register(new y6),t.register(new I5),t.register(new J4),t.register(new F5),t.register(new P5),t.register(new G2),t.register(new T2),t.register(new b2),t.register(new Z4),t.register(new E5),t.register(new I2),t.register(new M5),t.register(new x5),t.register(new j2),t.register(new W4),t.register(new z4),t.register(new Y4),t.register(new f6),t.register(new g6),t.register(new m6),t.register(new s6),t.register(new V5),t.register(new S2),t.register(new S6),t.register(new P6),t.register(new E6),t.register(new R6),t.register(new J2),t.register(new F6),n})})()})()

//# sourceMappingURL=main.js.map