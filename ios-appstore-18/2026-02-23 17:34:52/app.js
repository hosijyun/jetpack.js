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
const S=A.toString()
let P=c.headers
null==P&&(P={}),P.Authorization="Bearer "+r
const b={url:S,excludeIdentifierHeadersForAccount:null!==(h=c.excludeIdentifierHeadersForAccount)&&void 0!==h&&h,alwaysIncludeAuthKitHeaders:null===(v=c.alwaysIncludeAuthKitHeaders)||void 0===v||v,alwaysIncludeMMeClientInfoAndDeviceHeaders:null===(y=c.alwaysIncludeMMeClientInfoAndDeviceHeaders)||void 0===y||y,headers:P,method:c.method,body:c.requestBodyString,timeout:c.timeout},I=await e.network.fetch(b)
try{if(401===I.status||403===I.status){if(l)throw Error("We refreshed the token but we still get 401 from the API")
return t.resetToken(),await t.refreshToken().then(async r=>await i(e,t,n,r,c,!0,u))}if(404===I.status)throw s()
if(!I.ok){const e=new w(`Bad Status code ${I.status} for ${S}, original ${n}`)
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
throw new Error(`Error Fetching - filtered: ${S}, original: ${n}, ${e.name}, ${e.message}`)}}function s(){const e=new w("No content")
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
if(typeof t===vj){if(r=gV[t],!r){if(!t.includes(".")){const r=e[t]
return null!=r?r:n}r=t.split("."),gV[t]=r}}else r=t
let o=e
for(const e of r)if(o=o[e],null==o)return n
return o}function r(e){return null==e}function o(e){return r(e)||0===Object.keys(e).length}function i(e){return typeof e!==DB&&null!==e}function s(e){return!(0,bg.isNothing)(e)&&(typeof e===vj||Array.isArray(e)?e.length>0:0!==Object.keys(e).length)}function a(e){if(r(e))return!1
let t
return t=typeof e===vj?parseInt(e):e,!Number.isNaN(t)}function c(e,o){const i=n(e,o,null)
return Array.isArray(i)?i:(r(i)||Pg.context("asArrayOrEmpty",()=>{Pg.unexpectedType(EG,"array",i,t(o))}),[])}function l(e,t){return u(e,!1,t)}function u(e,o,i){const s=n(e,i,null)
return typeof s===dM?s:(r(s)||Pg.context("asBooleanWithDefault",()=>{Pg.unexpectedType(EG,dM,s,t(i))}),o)}function d(e,o,i=xG){const s=n(e,o,null)
if(r(s))return s
if(typeof s===vj)return s
{const e=typeof s===RF?null:String(s)
switch(i){case RR:Pg.context(aI,()=>{Pg.unexpectedType(gF,vj,s,t(o))})
break
case xG:r(e)&&Pg.context(aI,()=>{Pg.unexpectedType(gF,vj,s,t(o))})}return e}}function f(e,o,i=xG){const s=n(e,o,null)
if(r(s)||typeof s===mF)return s
{const e=Number(s)
switch(i){case RR:Pg.context(cI,()=>{Pg.unexpectedType(gF,mF,s,t(o))})
break
case xG:if(isNaN(e))return Pg.context(cI,()=>{Pg.unexpectedType(gF,mF,s,t(o))}),null}return e}}function p(e,o,s){const a=n(e,o,null)
return a instanceof Object&&!Array.isArray(a)?a:(r(a)||Pg.context("asDictionary",()=>{Pg.unexpectedType(EG,RF,a,t(o))}),i(s)?s:null)}function h(e,t,n){return p(e,t,n)}function w(e,o,i=xG){const s=n(e,o,null)
if(r(s))return null
if(typeof s===dM)return s
if(typeof s===vj){if(s===zG)return!0
if(s===bL)return!1}const a=Boolean(s)
switch(i){case RR:Pg.context(lI,()=>{Pg.unexpectedType(gF,mF,s,t(o))})
break
case xG:if(r(a))return Pg.context(lI,()=>{Pg.unexpectedType(gF,mF,s,t(o))}),null}return a}function g(e){if(null==e)return null
switch(typeof e){case vj:case mF:case dM:return e
case RF:return Array.isArray(e),e
default:return Pg.context(uI,()=>{Pg.unexpectedType(EG,"JSONValue",typeof e)}),null}}function m(e){return null==e?null:e instanceof Object&&!Array.isArray(e)?e:(Pg.context(uI,()=>{Pg.unexpectedType(EG,RF,typeof e)}),null)}function v(e,t,n){const r=e.indexOf(t)
let o,i=e
if(-1!==r){const s=e.slice(0,r),a=e.slice(r+t.length,e.length)
n===gI?(o=s,i=a):(o=a,i=s)}return{result:o,remainder:i}}function y(e){if(null==e)return e
const t=Object.create(Object.getPrototypeOf(e))
return Object.assign(t,e),t}function A(e,t){return e instanceof t}function T(e){return!(!(0,bg.isSome)(e.protocol)||-1===Mq.indexOf(e.protocol))}function S(e){const t=e.indexOf("{"),n=e.indexOf("}")
return t>=0&&n>t+1}function P(e){const t=e.indexOf("{"),n=e.indexOf("}")
return t>=0&&n>t?e.substring(t+1,n):e}function b(e,t){const n=t.indexOf("{"),r=e.length-(t.length-(t.indexOf("}")+1))
return n>=0&&r>n?e.substring(n,r):e}function I(e){if(e.props.enabled(P_)&&e.client.isCompanionVisionApp)return tU
switch(e.client.deviceType){case Bj:return fG
case Lj:return hG
case"tv":return ED
case jj:return jj
case Vj:return Vj
case Tj:return tU
default:return null}}function C(e){switch(e.client.deviceType){case Bj:return 4
case Lj:return 5
case"tv":return 6
case jj:return 5
case Vj:return 10
default:return null}}function k(e){switch(e.client.deviceType){case Bj:return 9
case Lj:return 12
case"tv":case jj:return 15
case Vj:return 3
default:return null}}function O(e){switch(e.host.clientIdentifier){case BR:case ML:case zI:return[]
default:{const t=I(e)
return function(e,t){const n=new Set
if(n.add(fG),n.add(hG),n.add(ED),n.add(jj),n.add(Vj),e.bag.enableVisionPlatform&&n.add(tU),(0,bg.isSome)(t))for(const e of t)n.delete(e)
return Array.from(n)}(e,(0,bg.isSome)(t)?new Set([t]):void 0)}}}function E(e){switch(e.client.deviceType){case Bj:return 6
case Lj:return 10
case jj:return 12
case Tj:return 10
default:return 8}}function R(e){let t=null
return e.host.clientIdentifier===nH?t=LG:e.host.clientIdentifier===tH&&(t=Vj),t}function D(e,t){if(o(t))return null
const n=c(t,`meta.associations.${e}.data`)
return(0,bg.isNothing)(n)?null:[...n]}function _(e,t){const n=c(t,VB)
return n.length>1&&e.console.warn("tried to extract data from container but more than one member present"),1!==n.length?null:n[0]}function L(e){return c(e,VB)}function x(e){const t=oI,r=n(e,Gk)
return e.label===t||i(r)}function M(e){return c(e,tI)}function $(e){return p(e,LO)}function F(e){if((0,bg.isNothing)(e)||""===e)return null
const t=Yz.exec(e)
return null===t||4!==t.length&&5!==t.length?null:{red:parseInt(t[1],16)/255,green:parseInt(t[2],16)/255,blue:parseInt(t[3],16)/255,alpha:(0,bg.isSome)(t[4])?parseInt(t[4],16)/255:void 0,type:eU}}function N(e,t,n,r){return{red:e,green:t,blue:n,alpha:r,type:eU}}function B(e){return.2126*e.red+.7152*e.green+.0722*e.blue}function U(e,t=84){if((0,bg.isNothing)(e))return!1
switch(e.type){case eU:return 100*B(e)<t
case XM:return e.name===LC
default:return!1}}function G(e){return{name:e,type:XM}}function j(e,t){return{lightColor:e,darkColor:t,type:SL}}function V(e,t){return!(0,bg.isNothing)(e)&&!(0,bg.isNothing)(t)&&(e.type===eU&&t.type===eU?e.red===t.red&&e.green===t.green&&e.blue===t.blue&&e.alpha===t.alpha:e.type===XM&&t.type===XM?e.name===t.name:e.type===SL&&t.type===SL&&V(e.lightColor,t.lightColor)&&V(e.darkColor,t.darkColor))}function H(e,t,n){return(0,bg.isNothing)(e)?null:p(e.attributes,t,n)}function W(e,t){return r(e)?[]:c(e.attributes,t)}function q(e,t,n=xG){return r(e)?null:d(e.attributes,t,n)}function z(e,t,n=xG){return r(e)?null:w(e.attributes,t,n)}function Y(e,t){return!r(e)&&l(e.attributes,t)}function J(e,t,n=xG){return r(e)?null:f(e.attributes,t,n)}function K(e){return!r(p(e,aM))}function Z(e){return!K(e)}function Q(e){return SY[e]}function X(e){return e===AL}function ee(e){switch(e){case xR:case lM:case FU:case Dm:return!0
default:return!1}}function te(e){switch(e){case P$:return P$
case BI:return BI
default:return Mj}}function ne(e,t,n=!0){const r=re(e,t)
return!!r&&!(!r.data||n&&0===r.data.length)}function re(e,t){return i(e)?h(e.relationships,t):null}function oe(e,t){return h(e.views,t)}function ie(e,t,n){const r=c(t.relationships,[n,VB])
return 0===r.length?null:(r.length>1&&e.console.warn(`there was an array of relationships when only the first was asked for in relationship ${n}`),r[0])}function se(e,t,n=!1){return!ne(e,t,!1)&&n?null:c(e.relationships,[t,VB])}function ae(e,t=!1,n=!1,r=0){const o=function(e,t){let n
switch(e.host.clientIdentifier){case BR:case ML:case zI:n=!1
break
default:n=e.client.supportsHEIF}return t?n?yx:nD:n?yx:Ak}(e,t)
return function(e,t,n=!1,r=0){return new IV(t,t===yx?60:70,n)}(0,o,n,r)}function ce(e,t,n=0,r=0,o=null,i=null,s=null){const a=new CV(t,n,r,[ae(e,!1,!1,0)])
return a.backgroundColor=o,a.textColor=i,a.checksum=s,a}function le(e,t){const n=Math.pow(10,t)
return(e>0?Math.floor:Math.ceil)(e/n)*n}function ue(e){throw new Error(`This method should never be called with value: ${e}`)}function de(e,t,r){return e?Pg.context(t,()=>{let o=e[BY],i=null
return o?(i=n(o,t),i||(i=fe(o,t,r))):(o={},e[BY]=o,i=fe(o,t,r)),i}):null}function fe(e,t,n){const r=n()
return e[t]=r,r}function pe(e,t){return n(H(e,"platformAttributes"),t)}function he(e,t){return s(pe(e,t))}function we(e,t,n){const o=pe(e,t)
return r(o)?null:p(o,n)}function ge(e,t,n){const o=pe(e,t)
return r(o)?[]:c(o,n)}function me(e,t,n,o=xG){const i=pe(e,t)
return r(i)?null:d(i,n,o)}function ve(e,t,n,o=xG){const i=pe(e,t)
return r(i)?null:w(i,n,o)}function ye(e,t,n){const o=pe(e,t)
return!r(o)&&l(o,n)}function Ae(e,t,n,r=!1){return de(t,`dataHasDeviceFamily.${n}`,()=>!(!t||!n)&&-1!==Pe(e,t,r).indexOf(n))}function Te(e,t,n,r=!1){var o
return null!==(o=Ae(e,t,n,r))&&void 0!==o&&o&&1===Pe(e,t,r).length}function Se(e,t,n,r=!1){const o=new Set(Pe(e,t,r))
return n.length===o.size&&n.every(e=>o.has(e))}function Pe(e,t,n=!1){const r=W(t,dB)
if(0===r.length&&n){const r=se(t,zj)
if((0,bg.isSome)(r))for(const t of r){const r=Pe(e,t,n)
if(s(r))return r}}return r}function be(e,t,n,r,o){if(r||(r=Re(e,t)),(0,bg.isNothing)(r))return null
let i=we(t,r,n)
return i||(i=H(t,n,o)),i}function Ie(e,t,n,r){const i=null!=r?r:Re(e,t)
if((0,bg.isNothing)(i))return[]
let s=ge(t,i,n)
return o(s)&&(s=W(t,n)),s}function Ce(e,t,n,r,o=xG){const i=null!=r?r:Re(e,t)
if((0,bg.isNothing)(i))return null
let s=me(t,i,n,o)
return s||(s=q(t,n,o)),s}function ke(e,t,n,o,i=xG){if(o||(o=Re(e,t)),(0,bg.isNothing)(o))return null
let s=ve(t,o,n,i)
return r(s)&&(s=z(t,n,i)),s}function Oe(e,t,n,o){if(o||(o=Re(e,t)),(0,bg.isNothing)(o))return!1
let i=ve(t,o,n)
return r(i)&&(i=Y(t,n)),i}function Ee(e,t,n,o=xG){const i=Re(e,t)
if((0,bg.isNothing)(i))return null
let s=function(e,t,n,o=xG){const i=pe(e,t)
return r(i)?null:f(i,n,o)}(t,i,n,o)
return r(s)&&(s=J(t,n)),s}function Re(e,t,n){const o="bestAttributePlatformFromData",i=(0,bg.isSome)(n)?`${o}.${n}`:o
return de(t,i,()=>{const o=Se(e,t,[fG,hG,$M],!0),i=Te(e,t,xF),s=Te(e,t,jj),a=Te(e,t,Vj),c=Te(e,t,tU)
let l=null
if(i?l=jB:s?l=aG:o?l=mj:a?l=Vj:c&&(l=QU),!r(l))return l
const u=function(e,t){const n=De(e)
if(null===n)return[]
switch(n){case mj:return"VisionAppStore"===t||"com.apple.visionproapp"===t?[QU,mj,jB,aG]:[mj,jB,aG,QU]
case aG:return[aG,mj,jB,QU]
case jB:return[jB,mj,aG,QU]
case Vj:return[mj,Vj,aG,QU]
case QU:return[QU,mj,jB,aG]
default:return[n]}}(e,n)
for(const e of u)if(he(t,e))return e
return De(e)})}function De(e){switch(e.client.deviceType){case Bj:case Lj:return mj
case"tv":return jB
case jj:return aG
case Vj:return Vj
case Tj:return QU
default:return null}}function _e(e,t,n,r,o){const i=Q(r)
if((0,bg.isNothing)(i))return null
const a=Ne(0,be(e,t,KC,o),n,i,X(i))
return s(a)?p(a):be(e,t,r,o)}function Le(e,t,n,r,o){const i=Q(r)
if((0,bg.isNothing)(i))return null
const a=Ne(0,be(e,t,KC,o),n,i,X(i))
return s(a)?d(a):Ce(e,t,r)}function xe(e,t){var n
const r=e.optional(hH.metatype)
return null===(n=null==r?void 0:r.currentTreatmentForExperiment(t))||void 0===n?void 0:n.identifier}function Me(e){return"3NepyQj01"===xe(e,Rg.ProductPagePreloading)}function $e(e){return e.bag.enableProductPageVariants}function Fe(e,t,r){if(void 0===r&&(r=function(e){const t=function(e){return xe(e,Rg.ProductPageVariants)}(e)
return t}(e)),o(t.id))return
const i={adamID:t.id,productPageId:UY,treatmentPageIdMap:{[UY]:UY},experimentIdMap:{},experimentLocaleMap:{}}
return o(n(t,IU,null))||(function(e,t,r){const i=n(r,"meta.cppData",null)
if(o(i))return
const a=d(i,h$)
s(a)&&(t.productPageId=a)}(0,i,t),function(e,t,r,i,a){const c=n(a,"meta.experimentData",null)
if(o(c))return
const l=n(c,r,null)
if(o(l))return
const u=d(l,tE),f=d(l,wS)
let p=null
const h=n(l,"trafficAllocation",null)
p=s(h)?function(e,t,n){if(void 0===n||o(n))return UY
for(const[e,r]of Object.entries(t))if(s(r)&&-1!==r.indexOf(n))return e
return UY}(0,h,i):function(e,t,n){const r=be(e,t,`customAttributes.${n}`)
if(o(r))return UY
const i=Object.keys(r)[0]
return o(i)?UY:i}(e,a,r),s(p)&&s(u)&&(t.treatmentPageIdMap[r]=p,t.experimentIdMap[r]=u,s(f)&&(t.experimentLocaleMap[r]=f))}(e,i,UY,r,t)),i}function Ne(e,t,r,s,a){if(o(t))return null
let c
if(r.productPageId!==UY){const e=r.treatmentPageIdMap[UY]
c=a?[`${r.productPageId}.${UY}.${s}`,`${UY}.${e}.${s}`,`${UY}.${UY}.${s}`]:[`${r.productPageId}.${UY}.${s}`,`${UY}.${UY}.${s}`]}else{const e=r.treatmentPageIdMap[UY]
c=[`${UY}.${e}.${s}`,`${UY}.${UY}.${s}`]}for(const e of c){const r=n(t,e)
if(i(r))return r}return null}function Be(e){return(0,bg.isNothing)(e)||e.productPageId===UY?null:e.productPageId}function Ue(e,t){return Be(Fe(e,t))}function Ge(e,t){const n=be(e,t,KC)
return null===n||o(n)?null:Object.keys(n).filter(e=>e!==UY)}function je(e){const t={}
He(e,A_)&&(t[gS]=e.productPageId)
const n=e.treatmentPageIdMap[UY],r=e.experimentIdMap[UY],o=e.experimentLocaleMap[UY]
return He(e,XD)&&(t.pageVariantId=n,t.pageExperimentId=r,t.pageExperimentLocale=o),t}function Ve(e){const t={}
He(e,A_)&&(t[gS]=e.productPageId)
const n=e.treatmentPageIdMap[UY],r=e.experimentIdMap[UY],o=e.experimentLocaleMap[UY]
return He(e,XD)&&(t.variantId=n,t[tE]=r,t[wS]=o),t}function He(e,t){if(r(e))return!1
switch(t){case A_:return s(e.productPageId)&&e.productPageId!==UY
case XD:return s(e.experimentIdMap)
default:ue(t)}}function We(e,t,n){for(const r of n){const n=Ue(e,r)
i(n)&&t.addingQuery(`ppid[apps:${r.id}]`,`${n}`)}}function qe(e,t){var n,o,a
const c=t.href&&t.href.length>0?t.href:function(e,t,n,r){switch(n){case gR:case Ij:case oM:return`/v1/${ze(n)}/`
default:const o=(0,bg.isSome)(r)&&r.length>0?r:e.bag.mediaCountryCode,i=`/v1/${ze(n)}/${o}`
return t?i:`${i}/`}}(e,t.isMixedMediaRequest,t.resourceType,t.countryCodeOverride),l=new xq(c)
if(s(t.resourceType))for(const e of function(e,t){switch(e){case hF:return void 0===t?[e]:[e,t]
case kR:return[]
case yL:return void 0===t?[sj,e]:[sj,e,t]
case mL:return[zj]
case Ij:return[Ij,zj]
case wL:return[wL]
case IB:return[bv,TU]
case nI:return[sj,e]
case gL:return[zj]
case vL:case X_:return[]
case oM:return[zj]
default:return[e]}}(t.resourceType,t.targetResourceType))l.append(lU,e)
if(t.isMixedMediaRequest)for(const[e,n]of t.idsByResourceType.entries())l.param(`ids[${e}]`,Array.from(n).sort().join(","))
else if(t.ids.size>1||t.useIdsAsQueryParam)l.param("ids",Array.from(t.ids).sort().join(","))
else if(1===t.ids.size){const e=t.ids.values().next().value
l.append(lU,e)}if(void 0!==t.resourceType){const e=function(e){switch(e){case mL:return Ij
case gL:return"view/customers-also-bought-apps-with-download-intent"
case rU:return qj
case vL:return pI
case X_:return"search/suggestions"
default:return null}}(t.resourceType)
s(e)&&l.append(lU,e)}if(l.param(jN,null!==(n=t.platform)&&void 0!==n?n:void 0),t.additionalPlatforms.size>0&&l.param("additionalPlatforms",Array.from(t.additionalPlatforms).sort().join(",")),t.attributeIncludes.size>0||t.useCustomAttributes){let e=Array.from(t.attributeIncludes)
t.useCustomAttributes&&(e=function(e){const t=e.map(e=>{var t
return null!==(t=Q(e))&&void 0!==t?t:e})
return t.push(AL),t.push(Lx),t}(e)),e.sort(),l.param(Ob,e.join(","))}if(t.includeAppBinaryTraitsAttribute&&t.includingScopedAttributes(zj,[ry]),i(t.scopedAttributeIncludes))for(const[e,n]of t.scopedAttributeIncludes.entries())l.param(`extend[${e}]`,Array.from(n).sort().join(","))
if(t.relationshipIncludes.size>0&&l.param("include",Array.from(t.relationshipIncludes).sort().join(",")),i(t.scopedRelationshipIncludes))for(const[e,n]of t.scopedRelationshipIncludes.entries())l.param(`include[${e}]`,Array.from(n).sort().join(","))
if(i(t.metaIncludes))for(const[e,n]of t.metaIncludes.entries())l.param(`meta[${e}]`,Array.from(n).sort().join(","))
if(i(a=t.viewsIncludes)&&a.size>0&&l.param("views",Array.from(t.viewsIncludes).sort().join(",")),i(t.kindIncludes))for(const[e,n]of t.kindIncludes.entries())l.param(`kinds[${e}]`,Array.from(n).sort().join(","))
if(i(t.associateIncludes))for(const[e,n]of t.associateIncludes.entries())l.param(`associate[${e}]`,Array.from(n).sort().join(","))
if(i(t.scopedAvailableInIncludes))for(const[e,n]of t.scopedAvailableInIncludes.entries())l.param(`availableIn[${e}]`,Array.from(n).sort().join(","))
if(s(t.fields)){let e=Array.from(t.fields)
t.useCustomAttributes&&(e=function(e){const t=e.map(e=>{var t
return null!==(t=Q(e))&&void 0!==t?t:e})
return t}(e)),t.fields.sort(),l.param(NL,e.join(","))}if(i(t.limit)&&t.limit>0&&l.param("limit",`${t.limit}`),i(t.sparseLimit)&&l.param("sparseLimit",`${t.sparseLimit}`),i(t.scopedSparseLimit))for(const[e,n]of t.scopedSparseLimit.entries())l.param(`sparseLimit[${e}]`,String(n))
i(t.sparseCount)&&l.param("sparseCount",`${t.sparseCount}`)
for(const e of Object.keys(t.relationshipLimits).sort()){const n=t.relationshipLimits[e]
l.param(`limit[${e}]`,`${n}`)}s(t.additionalQuery)&&l.append(pB,t.additionalQuery),s(t.searchTerm)&&(((0,bg.isNothing)(t.resourceType)||t.resourceType!==X_)&&(l.append(lU,sj),l.param("bubble[search]",t.searchTypes.join(","))),l.param(gN,t.searchTerm)),s(t.enabledFeatures)&&l.param(tx,t.enabledFeatures.join(",")),s(t.context)&&l.param(zN,t.context),s(t.filterType)&&s(t.filterValue)&&l.param(`filter[${t.filterType}]`,t.filterValue)
const u=e.bag.mediaApiLanguage
return i(u)&&r(t.additionalQuery.l)&&l.param("l",u),l.host=null!==(o=function(e,t,n){var o
const i=null!==(o=t.pathname)&&void 0!==o?o:""
let s=null
return s=n.isStorePreviewRequest?e.bag.mediaPreviewHost:n.isMediaRealmRequest?e.bag.mediaRealmHost:i.includes("search/landing")?-1!==e.bag.edgeEndpoints.indexOf(yL)?e.bag.mediaEdgeHost(e):e.bag.mediaHost:n.resourceType===oM&&(0,bg.isSome)(e.bag.appDistributionMediaAPIHost)?e.bag.appDistributionMediaAPIHost:n.isMixedMediaRequest&&e.bag.mediaAPICatalogMixedShouldUseEdge?e.bag.mediaEdgeHost(e):e.bag.edgeEndpoints.map(e=>i.includes(e)).reduce(zY,!1)?i.includes(sj)&&!i.includes(pI)?e.bag.mediaEdgeSearchHost:e.bag.mediaEdgeHost(e):e.bag.mediaHost,r(s)&&(s="api.apps.apple.com"),s}(e,l,t))&&void 0!==o?o:void 0,l.protocol=SR,l}function ze(e){switch(e){case zj:case Uj:case LU:case xj:case MM:case qj:case SU:case hF:case jG:case i_:case mL:case gL:return dI
case FL:case aU:case _j:case LB:case LD:case RU:case wL:case Xx:case g$:case Dj:case rU:return WI
case DR:return DR
case gR:case Ij:return"me"
case IB:case yL:return fI
case kR:case lD:return HU
case Cb:return fI
case oM:return"listing"
default:return dI}}function Ye(e){return r(e)||""===e?null:(-1!==e.indexOf("T")&&(e=e.split("T")[0]),new Date(e.replace(/-/g,"/")))}function Je(e){if(r(e))return null
const t=function(e){return r(e)?null:new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))}(e)
return r(t)?null:t.getTime()}function Ke(e){if(r(e))return null
const t=new Date(e)
return t.setHours(0,0,0,0),t}function Ze(e){return r(e)?null:Qe(e)}function Qe(e){const t=new Date(e.getTime())
return t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t}function Xe(e,t){return r(e)||r(t)?null:Math.ceil((t.getTime()-Qe(e).getTime())/36e5)}function et(e){return null!==YY||(YY={bundleIdFromData:t=>Ce(e,t,nj),isSystemAppFromData:e=>Y(e,mN),isUnsupportedDeletableSystemAppFromData:e=>!1,adamIdFromSystemBundleId(e){}}),YY}function tt(e,t,n=80894){let o=!1
return 2&n&&(o=o||function(e,t){return Oe(e,t,Wm)||Oe(e,t,qm)}(e,t)),4&n&&(o=o||function(e,t){return de(t,"shouldFilterDeletableSystemApp",()=>{const n=et(e)
if(!n.isSystemAppFromData(t))return!1
const r=n.bundleIdFromData(t),o=e.host.deviceModel,s=o.startsWith(ZI),a=o.startsWith(Jm)
let c
switch(c=!!$d(e,"12.3")||e.bag.isTVAppEnabled,r){case"com.apple.Bridge":case"com.apple.Passbook":case"com.apple.journal":case YI:case"com.apple.mobilephone":return!s
case"com.apple.Photo-Booth":return!a
case"com.apple.tv":return!c
case"com.apple.videos":return c
case"com.apple.iCloudDriveApp":return!0
case"com.apple.facetime":return!rt(e,"any-telephony")||!rt(e,"venice")
case"com.apple.Fitness":if(a||s){let t=!1
return i(e.user.isFitnessAppInstallationAllowed)&&(t=e.user.isFitnessAppInstallationAllowed),!t}return!0
case"com.apple.measure":return!rt(e,"arkit")
case"com.apple.Jellyfish":return!rt(e,"front-depth-camera")
case zm:case Ym:return!0
case"com.apple.NanoHeartRhythm":return!e.client.isElectrocardiogramInstallationAllowed
case Km:return!rt(e,"magnetometer")
case"com.apple.NanoOxygenSaturation.watchkitapp":return!e.client.isScandiumInstallationAllowed
case Zm:case"com.apple.NanoRadio":return!0
case Qm:return!e.client.isCharonSupported
case Xm:return!e.client.isMandrakeSupported
case"com.apple.GenerativePlaygroundApp":return!rt(e,"generative-model-systems")}return!1})}(e,t)),8&n&&(o=o||function(e,t){return de(t,"shouldFilterUnsupportedWatchAppOnWatchClient",()=>{const n=Oe(e,t,eG),r=t.type===xj
return e.host.clientIdentifier===tH&&!n&&!r})}(e,t)),16&n&&(o=o||function(e,t){return t.type===jG&&!s(p(t,mM))&&!s(p(t,VR))&&!Y(t,"isMerchandisedEnabled")}(0,t)),32&n&&(o=o||function(e,t){return de(t,"shouldFilterLegacyApps",()=>{switch(Ce(e,t,nj)){case"com.apple.mobileme.fmip1":case zm:return!0}return!1})}(e,t)),64&n&&(o=o||function(e,t){return de(t,"isLegacyMacOSInstaller",()=>(Ce(e,t,nj),!1))}(e,t)),128&n&&(o=o||function(e,t){return de(t,"shouldFilterUnsupportedPlatform",()=>!jd(e,t))}(e,t)),16384&n&&(o=o||function(e,t){return de(t,"shouldFilterUnsupportedPlatformForCharts",()=>{if(t.type!==zj&&t.type!==xj)return!1
const n=Qu(e,t),r=id(0,t,!0)
return!ud(e,t,n,e.client.deviceType,r,!1)})}(e,t)),256&n&&(o=o||function(e,t){return de(t,"shouldFilterUnsupportedPreordersOnPlatform",()=>{if(!Y(t,rj))return!1
if(t.type!==zj)return!1
const n=Qu(e,t),r=id(0,t,e.appleSilicon.isSupportEnabled)
return!pd(0,n,e.client.deviceType,r,!1)})}(e,t)),512&n&&(o=o||nt(e,t)),1024&n&&(o=o||function(e,t){const n=Y(t,mN),r=!Oe(e,t,XI)&&Oe(e,t,VN)
return n&&r}(e,t)),2048&n&&(o=o||function(e,t){return e.client.deviceType===Vj&&(!Oe(e,t,VN)&&!Oe(e,t,QI)&&!function(e,t){return!(!r(t)&&0!==t.length)||e.client.isPairedSystemVersionAtLeast(t)}(e,me(t,Re(e,t),yG)))}(e,t)),4096&n&&(o=o||function(e,t){return e.client.deviceType===jj&&(Oe(e,t,ev,De(e))&&!e.appleSilicon.isSupportEnabled)}(e,t)),8192&n&&(o=o||function(e,t){const n=Qu(e,t)
return!(e.client.deviceType!==jj||!n.includes(jj))&&!fd(e,t,e.appleSilicon.isSupportEnabled,e.appleSilicon.isRosettaAvailable)}(e,t)),32768&n&&(o=o||function(e,t){if(!e.client.isCompanionVisionApp)return!1
const n=ye(t,mj,eC)
return!(Qu(e,t).indexOf(Tj)>-1||n)}(e,t)),65536&n&&(o=o||function(e,t){return!!et(e).isSystemAppFromData(t)&&nt(e,t)}(e,t)),o}function nt(e,t){return!(!e.client.isPhone||!Oe(e,t,VN)||function(e,t){if(r(t)||0===t.length)return!0
const n=t.split("."),o=f(n[0])||0,i=f(n[1])||0,s=f(n[2])||0
return e.client.isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(o,i,s)}(e,Ce(e,t,vM)))||!$d(e,ad(e,t,e.appleSilicon.isSupportEnabled))}function rt(e,t,n){return e.client.deviceHasCapabilitiesIncludingCompatibilityCheckIsVisionOSCompatibleIOSApp([t],!1)}function ot(e,t){return t&&t.remainingContent?t.remainingContent.slice(0,t.maxPerPage):[]}function it(e,t,n){const r={...t}
if(t&&t.remainingContent){const e=st(0,t.remainingContent,t.maxPerPage,n)
r.remainingContent=e}return r}function st(e,t,n,r){return t.slice(n,null!=r?r:t.length)}function at(e,t){return i(t)?q(t,"customUrl"):null}function ct(e,t,n,r,o,i,a){if(!s(o)&&e.client.deviceType!==jj)return t
let c
{const e=new jH(n,Oj)
c=new yW(r,o,e)}const l=y(a)
if(l.actionType=QN,l.actionDetails={actionUrl:o},$f(e,c,l,!0,Hj),t instanceof GH)return t.openAction=c,t.includeBetaApps=i,t
{const e=new GH(n,t)
return e.openAction=c,e.includeBetaApps=i,e}}function lt(e,t){var n
if(t<=0)return!1
if(t>=1)return!0
const r=null===(n=e.metricsIdentifiersCache)||void 0===n?void 0:n.getMetricsIdForType(Dg.user)
return!(0,Ig.isNothing)(r)&&0!==r.length&&!(r.length<2)&&function(e){function t(e){const t=e.charCodeAt(0)
return t>=48&&t<=57?52+t-48:t>=65&&t<=90?26+t-65:t>=97&&t<=122?t-97:t}const n=e.slice(-2)
return(62*t(n[0])+t(n[1]))/3843}(r)<t}function ut(e,t){switch(ft(e,t)){case zR:case UL:case JR:case YR:case Oy:return!0
default:return!1}}function dt(e,t){return lt(e,e.bag.gameControllerRecommendedRolloutRate)&&ft(e,t)===Oy}function ft(e,t){const n=De(e)
if(null===n)return hN
if(!he(t,n)){const r=be(e,t,pG)
if(null===r||o(r))return hN
const i=r[n]
return o(i)?hN:i}const r=Ce(e,t,yN)
return s(r)?r:hN}function pt(e,t=null){return e===jj?function(e){let t="x-apple.systempreferences:com.apple.preferences.softwareupdate?client=AppStore&variant=CUSTOMER"
return e&&(t+=`&installMajorOSBundle=${e}`),t}(t):null}function ht(e){var t
return null===IJ&&(IJ=new m2({defaultTopic:bH,buildType:e.client.buildType,jsVersion:null!==(t=e.props.asString("version"))&&void 0!==t?t:Mj,buyDecorator:bJ,isLoggingEnabled:!0,bagProvider:(t,o)=>{const i=e.bag.metricsConfiguration
if(!r(o)){const e=n(i,[o,t])
if(!r(e))return e}return n(i,t)}})),IJ}function wt(e){var t
const n={}
if(!e)return n
Object.assign(n,e.baseFields),e.pageUrl?n[eF]=e.pageUrl:e.timingMetrics&&e.timingMetrics.pageURL&&(n[eF]=e.timingMetrics.pageURL),e.recoMetricsData&&Object.assign(n,e.recoMetricsData),e.mercuryMetricsData&&Object.assign(n,e.mercuryMetricsData),e.productVariantData&&Object.assign(n,je(e.productVariantData)),e.iAdInfo&&i(e.iAdInfo.pageFields[m2.hasIAdData])&&(n[m2.hasIAdData]=e.iAdInfo.pageFields[m2.hasIAdData])
const r=null===(t=e.iAdInfo)||void 0===t?void 0:t.pageFields[FN]
return i(r)&&(n[FN]=r),Jd(n)}function gt(e,t,n,s,a,c,l,u,f,p,h,w,g,v,y){const A=function(e,t){const n=new FY(t),r=d(e.bag.metricsConfiguration,"metricsBase.language")
return n.set("languageId",r),n.toString()}(e,n)
return function(e,t,n,o,s,a,c){const l=new FY(t)
return function(e,t,n,o,s,a,c){var l,u
const f=d(a,a$)
t.set(a$,f)
const p=e.props.enabled(gO)?e.bag.metricsPaymentTopic:void 0
t.set(kM,null!=p?p:bH),bJ.useNativeValues(a)
const h=bJ.params
for(const e of Object.keys(h)){if(e===f_&&(0,bg.isSome)(t.get(f_)))continue
const n=d(h,e)
t.set(e,n)}if(!r(c))for(const e of Object.keys(c)){const n=d(c,e)
t.set(e,n),t.set(e,n,null)}if(!a)return t.set(OG,null),void t.set(p_,null)
const w=d(a,$N)
if((0,bg.isSome)(w)&&w.length>0&&t.set($N,w),(null===(l=t.get(rT,null))||void 0===l?void 0:l.length)>0&&t.set(Oj,e.host.clientIdentifier),!o&&!TH.shared.shouldUseJSReferralData){const e=d(a,Bx),n=Yd(e)
e&&n&&(a[$x]=n)
const r=d(a,"usageContext")
if((0,bg.isSome)(r)){switch(r){case c$:t.set($N,"com.apple.AppStore.overlay")
break
case mO:t.set($N,wO)}t.set(Nx,w,null)}else{const e=d(a,Nx)
t.set(Nx,e,null)
const n=d(a,Bx)
t.set(Bx,n,null),d(a,"extRefAppType")===sT&&t.set($N,wO)}}const g=t.get(hB),m=t.get(oU),v=(null!==(u=null==g?void 0:g.split("_"))&&void 0!==u?u:[]).includes(n)
if(m!==wB||v){const e=Zd(d(a,nF))
i(e)&&t.set(OG,e)}t.set(QA,null,null)}(e,l,n,o,0,a,c),l.toString()}(e,function(e,t,n,s,a,c,l,u,f,p,h,w){const g=new FY(t)
return function(e,t,n,s,a,c,l,u,f,p,h,w){var g,v,y
const A=wt(s)
a&&t.set(Fx,a),c&&t.set(tG,c)
const T=d(m(A),hB)
t.set(hB,T)
const S=d(m(A),oU)
t.set(oU,S)
const P=d(m(A),zF);(0,bg.isSome)(P)&&P.length>0&&t.set(CJ.containerId,P,null)
const b=(null!==(g=null==T?void 0:T.split("_"))&&void 0!==g?g:[]).includes(n),I=S===wB,C=(null===(v=t.get(rT,null))||void 0===v?void 0:v.length)>0
if(!I||b||C){let e=d(m(s),OG)
o(e)&&(e=function(e){if((0,Ig.isNothing)(e))return null
const t=new xq(e),n=t.query,r=null==n?void 0:n[OG],o=t.pathname
return(0,Ig.isNothing)(r)||(0,Ig.isNothing)(o)?null:o.includes("/app")?r:null}(null==s?void 0:s.pageUrl)),r(e)||t.set(OG,e)}if(I&&(0,bg.isSome)(s)&&(0,bg.isSome)(s.pageUrl)&&(null===(y=new xq(s.pageUrl).query)||void 0===y?void 0:y[pO])===oT&&(t.set(f_,hO),t.set(iT,"1",null)),function(e,t,n,r){const o=i(n)&&n.adamID===t,s=i(r)&&r.adamID===t&&!o
if(o&&i(n)){const t=je(n)
for(const n of Object.keys(t)){const r=d(t,n);(0,bg.isSome)(r)&&e.set(n,r)}}if(s&&i(r)){const t=Ve(r)
for(const n of Object.keys(t)){const r=d(t,n);(0,bg.isSome)(r)&&e.set(n,r)}}}(t,n,null==s?void 0:s.productVariantData,null!=u?u:void 0),!r(l)&&l.length>0&&t.set(p_,l),t.set(ZL,f),!p)if(i(TH.shared.activeReferralData)){if(t.set(Nx,TH.shared.activeReferralData.extRefApp2,null),t.set(Bx,TH.shared.activeReferralData.extRefUrl2,null),(0,bg.isSome)(TH.shared.activeReferralData.kind)){const e=TH.shared.activeReferralData.kind.name
e!==sT&&"appClip"!==e||t.set($N,wO)}}else t.set(Nx,h,null),t.set(Bx,w,null)}(0,g,n,s,a,c,l,u,f,p,h,w),g.toString()}(0,A,t,s,l,u,f,w,g,a,v,y),t,a,0,p,h)}function mt(e,t){const n=Oe(e,t,"usesExternalPurchase"),r=Oe(e,t,"usesExternalLinkPurchase")
return n||r}function vt(e,t){return e.bag.enableExternalPurchases&&e.bag.enabledExternalPurchasesPlacements.includes(t)}function yt(e,t,n,r){const i=e.bag.externalPurchasesLearnMoreEditorialItemId
if(o(i)||!e.bag.enableExternalPurchases)return null
const s=new Bq(KG)
return s.title=t,s.pageUrl=`https://apps.apple.com/story/id${i}`,$f(e,s,{id:R$,targetType:pj,actionType:Fj,pageInformation:n,locationTracker:r}),s}function At(e,t,n){return Pg.context("offerDataFromData",()=>{const r=Ie(e,t,_B,n)
return 0===r.length?null:r[0]})}function Tt(e,t){const n=W(t,_B)
return 0===n.length?null:n[0]}function St(e,t,n,o,a,c,l,u=hj,f,p,h){return Pg.context(`offerActionFromOfferData: ${n.id}`,()=>{var w,g,m,v,y,A,T
let S=d(t,PB)
if(r(S))return Pg.unexpectedNull(SG,vj,Kk),null
if(n.type===xj&&(S.indexOf("rebuy")>=0?S=S.replace("rebuy=false",UT):(S.length>0&&(S+="&"),S+=UT)),s(l.inAppEventId)&&(S.length>0&&(S+="&"),S+=`mtInAppEventId=${l.inAppEventId}`),l.isAdvert){const e=null===(g=null===(w=l.pageInformation)||void 0===w?void 0:w.iAdInfo)||void 0===g?void 0:g.placementId
i(e)&&(S.length>0&&(S+="&"),S+=`${CJ.placementId}=${e}`)
const t=null===(v=null===(m=l.pageInformation)||void 0===m?void 0:m.iAdInfo)||void 0===v?void 0:v.containerId
i(t)&&(S.length>0&&(S+="&"),S+=`${CJ.containerId}=${t}`)
const n=null===(A=null===(y=l.pageInformation)||void 0===y?void 0:y.iAdInfo)||void 0===A?void 0:A.clickFields[jx]
i(n)&&(S.length>0&&(S+="&"),S+=`${CJ.templateType}=${n}`)}const P=n.id
if(r(P))return Pg.unexpectedNull(SG,vj,"item.offer.id"),null
const b=function(e,t,n,r,o,i,s,a,c,l){return Pg.context("purchaseConfigurationFromProduct",()=>{const u=q(t,Yj)
let f=q(t,EU)
f||(f=FO)
const p=et(e).bundleIdFromData(t),h=Qu(e,t),w=q(t,VA),g=Ce(e,t,"preflightPackageUrl"),m=Rd(e,t),v=id(0,t,e.appleSilicon.isSupportEnabled),y=d(c,Oj),A=d(c,gM),T=Ft(e,t)?e.client.remoteDownloadIdentifiers:[],S=new SV(n,f,u,p,h,r,o,s,w,!1,g,m,v,!1,a.inAppEventId,y,A,void 0,sd(e,t),l,T)
return S.pageInformation=i,S.productVariantData=Fe(e,t),S.targetType=a.targetType,S.metricsKind=a.kind,S})}(e,n,S,o,l.excludeAttribution,l.pageInformation,c,l,f,p),I=Ct(e,t,P,b,a,u,null!==(T=l.isAdvert)&&void 0!==T&&T,h)
return function(e,t,n,r,o){var i,s,a,c,l
const u=n.pageInformation,d=tf(e,{...n,targetType:Hj},null!==(i=t.title)&&void 0!==i?i:"")
let f=null!==(a=null===(s=n.anonymizationOptions)||void 0===s?void 0:s.anonymizationString)&&void 0!==a?a:t.adamId;(0,bg.isSome)(n.targetId)&&(null===(c=n.targetId)||void 0===c?void 0:c.length)>0&&(f=n.targetId),xf(e,t,f,r,u,d,null!==(l=n.isAdvert)&&void 0!==l&&l,n.recoMetricsData,o)}(e,I,l,o,p),I})}function Pt(e,t){return r(t)||r(t.price)||0===t.price}function bt(e,t){return Pg.context("expectedReleaseDateFromData",()=>Ye(q(t,"offers.0.expectedReleaseDate")))}function It(e,t){const n=d(t,PU)
return n===rx||n===T_||n===BU?f(t,yM):null}function Ct(e,t,n,r,o,i=hj,s=!1,a){return Pg.context("offerActionFromOfferData",()=>{const c=d(t,PU),l=s&&i===hj&&(0,bg.isSome)(e.bag.adsOverrideLanguage)?e.adsLoc:e.loc
let u
switch(c){case"get":if(i===sU)u=e.loc.string(GT,"Get")
else{const e=S_
u=l.string(e)}break
case BU:u=i===sU?e.loc.string(jT,"Pre-Order"):l.string(S_)
break
default:u=c}let f=null,p=null
const h=It(0,t)
h>0&&(f=h,p=d(t,cB))
const w=Ye(d(t,NF)),g=new $H(u,n,r,a)
return g.price=f,g.priceFormatted=p,g.expectedReleaseDate=w,g.includeBetaApps=o,g})}function kt(e,t,n,o,i,a=hj,c=null,l=!1){if((0,bg.isNothing)(t))return null
if(Ld(0,n)){if(a===sU)return null
if(a===hj)return Cu(e,n,i,null)
const r=Ce(e,n,nj)
if(s(r)){const e=pt(jj,r)
if((0,bg.isSome)(e)){const n=new xH(e)
return new GH(t.adamId,n)}}}if(a===hj&&(n.type===xj||xd(e,n)||l))return Cu(e,n,i,null)
if(o&&"tv"!==e.client.deviceType&&!Rd(e,n)){const o=function(e,t,n,o,i){if(r(t))return null
const s=Et(e,n,t,!1,o)
return s.buyAction=t,s}(e,t,n,i)
if(null!==o)return o}const u=Te(e,n,tU),d=e.client.isCompanionVisionApp
if(!Rd(e,n)&&(d||u&&e.client.deviceType!==Tj))return function(e,t,n,r,o){const i=Mt(e,t,n,r,o),s=new GH(t.adamId,i)
return s.title=t.title,s}(e,t,n,Pt(0,t),Rd(e,n))
if(Te(e,n,xF)&&"tv"!==e.client.deviceType)return function(e,t,n){const r=new XH(hj)
r.title=e.loc.string("Alert.Buy.TvOnly.Title"),r.message=e.loc.string("Alert.Buy.TvOnly.Message"),r.isCancelable=!0,r.buttonActions=n?[Bt(e,t)]:[t],r.buttonTitles=[e.loc.string("Alert.Buy.TvOnly.ButtonTitle")]
const o=new GH(t.adamId,r)
return o.title=t.title,o}(e,t,Oe(e,n,BL))
if(!Oe(e,n,XI)&&Oe(e,n,VN)&&e.client.deviceType!==Vj)return function(e,t){const n=new XH(hj)
n.title=e.loc.string("Alert.Buy.WatchOnly.Title"),n.message=e.loc.string("Alert.Buy.WatchOnly.Message"),n.isCancelable=!0,n.buttonActions=[t],n.buttonTitles=[e.loc.string("Alert.Buy.WatchOnly.ButtonTitle")]
const r=new GH(t.adamId,n)
return r.title=t.title,r}(e,t)
const f=Ce(e,n,vM)
if(s(c)&&c===tH&&(0,bg.isSome)(f)&&Fd(e,f))return function(e,t,n){const r=new XH(hj)
r.title=e.loc.string("ProductPage.WatchOSUpdateRequired.Title").replace(tB,n),r.message=e.loc.string("ProductPage.WatchOSUpdateRequired.Message").replace(tB,n),r.buttonActions=[t],r.buttonTitles=[e.loc.string(MC)]
const o=new GH(t.adamId,t)
return o.buyAction=r,o}(e,t,f)
if(function(e,t){return!!Rd(e,t)}(e,n)){if(Rd(e,n))return function(e,t,n,r,o,i,s){if(!Rd(e,n))return t
switch(e.client.deviceType){case"tv":return function(e,t,n,r,o,i){var s,a,c,l
const u=_t(e,t,null,n,r),d=u.startAction,f=u.underlyingOfferAction,p=ee(o),h=new kY(Gj,o,n.id);(0,bg.isSome)(null===(a=null===(s=i.pageInformation)||void 0===s?void 0:s.searchTermContext)||void 0===a?void 0:a.term)&&(h.metricsOverlay[OG]=null===(c=i.pageInformation.searchTermContext)||void 0===c?void 0:c.term)
const w=null===(l=e.metricsIdentifiersCache)||void 0===l?void 0:l.getMetricsFieldsForTypes([Dg.user,Dg.client]);(0,bg.isSome)(w)&&(h.metricsOverlay={...h.metricsOverlay,...w}),p&&(h.purchaseSuccessAction=f,h.carrierLinkSuccessAction=f)
const g=new Bq(IB)
if(g.pageData=h,i&&i.pageInformation&&(g.referrerUrl=i.pageInformation.pageUrl),d instanceof $H&&(i.actionDetails={buyParams:d.purchaseConfiguration.buyParams,...i.actionDetails}),Mf(e,g,i),r){const t=Et(e,n,f,!0,i)
t.buyAction=d
const r=Et(e,n,f,!0,i)
return r.buyAction=d,t.subscribePageAction=r,f.buyCompletedAction=null,t}{const o=new GH(n.id,d),i=_t(e,t,g,n,r).startAction
return o.subscribePageAction=i,o}}(e,t,n,r,i,s)
case Tj:return function(e,t,n,r,o,i){var s,a,c,l
const u=Lt(e,t,null,n,r),d=u.startAction,f=u.underlyingOfferAction,p=ee(o),h=new kY(Gj,o,n.id);(0,bg.isSome)(null===(a=null===(s=i.pageInformation)||void 0===s?void 0:s.searchTermContext)||void 0===a?void 0:a.term)&&(h.metricsOverlay[OG]=null===(c=i.pageInformation.searchTermContext)||void 0===c?void 0:c.term)
const w=null===(l=e.metricsIdentifiersCache)||void 0===l?void 0:l.getMetricsFieldsForTypes([Dg.user,Dg.client]);(0,bg.isSome)(w)&&(h.metricsOverlay={...h.metricsOverlay,...w}),p&&(h.purchaseSuccessAction=f,h.carrierLinkSuccessAction=f)
const g=new Bq(IB)
if(g.pageData=h,i&&i.pageInformation&&(g.referrerUrl=i.pageInformation.pageUrl),d instanceof $H&&(i.actionDetails={buyParams:d.purchaseConfiguration.buyParams,...i.actionDetails}),Mf(e,g,i),r&&null!==f){const t=Et(e,n,f,!0,i)
t.buyAction=d
const r=Et(e,n,f,!0,i)
return r.buyAction=d,t.subscribePageAction=r,f.buyCompletedAction=Dt(e,g),t}{const o=new GH(n.id,d),i=Lt(e,t,g,n,r).startAction
return o.subscribePageAction=i,o}}(e,t,n,r,i,s)
default:return function(e,t,n,r,o,i,s){var a,c,l,u
const d=ee(i),f=new kY(Gj,i,n.id);(0,bg.isSome)(null===(c=null===(a=s.pageInformation)||void 0===a?void 0:a.searchTermContext)||void 0===c?void 0:c.term)&&(f.metricsOverlay[OG]=null===(l=s.pageInformation.searchTermContext)||void 0===l?void 0:l.term)
const p=null===(u=e.metricsIdentifiersCache)||void 0===u?void 0:u.getMetricsFieldsForTypes([Dg.user,Dg.client]);(0,bg.isSome)(p)&&(f.metricsOverlay={...f.metricsOverlay,...p}),e.props.enabled(P_)&&e.client.isCompanionVisionApp&&(0,bg.isNothing)(f.metricsOverlay[$N])&&(f.metricsOverlay[$N]="com.apple.visionproapp"),d&&(f.purchaseSuccessAction=t,f.carrierLinkSuccessAction=t)
const h=new Bq(IB)
if(h.pageData=f,s&&s.pageInformation&&(h.referrerUrl=s.pageInformation.pageUrl),s.actionDetails={buyParams:t.purchaseConfiguration.buyParams,...s.actionDetails},Mf(e,h,s),r&&t instanceof $H){const r=Et(e,n,t,!0,s)
r.buyAction=t
const o=Et(e,n,t,!0,s)
return o.buyAction=t,r.subscribePageAction=o,t.buyCompletedAction=Dt(e,h),r}const w=Te(e,n,tU)
if(Ft(e,n)||w&&e.client.deviceType!==Tj){const r=Mt(e,t,n,!0,!0),o=Mt(e,h,n,!0,!0),i=new GH(n.id,r)
return i.subscribePageAction=new GH(n.id,o),i}const g=new GH(n.id,t)
return g.subscribePageAction=h,g}(e,t,n,r,0,i,s)}}(e,t,n,o,0,function(e,t,n){if(n)return PL
switch(t){case FU:return lM
case hj:case sU:return xR
default:return lN}}(0,a,o),i)
const s=function(e,t,n,o,i){return"tv"===e.client.deviceType?_t(e,t,null,n,o):{startAction:r(t)?null:t,underlyingOfferAction:null}}(e,t,n,o),c=s.startAction
if(o){const t=Et(e,n,s.underlyingOfferAction,!1,i)
return t.buyAction=c,t}return c}return xt(e,t,o,i)}function Ot(e,t,n,r,o,i,s=null){switch(r){case lM:case xR:const r=ju(e,t,{useCase:3}),a=Lf(e,t,i)
return St(e,At(e,t),t,o,!1,Qd(e,t,r,s),a,n)
default:return null}}function Et(e,t,n,r,o){let i
if(r){const s=Rt(e,t,n.purchaseConfiguration.appName,r,!0,o),a=Rt(e,t,n.purchaseConfiguration.appName,r,!1,o)
i=new uW(a,a,s,a)}else i=Rt(e,t,n.purchaseConfiguration.appName,!1,!1,o)
return new GH(t.id,i)}function Rt(e,t,n,r,o,i){const s=new BH(t.id,r)
let a,c,l,u
if(a=e.loc.string("CANCEL_COMING_SOON_TITLE"),e.client.isAutomaticDownloadingEnabled()&&(r&&o||!r)?(s.title=e.loc.string("CANCEL_COMING_SOON_BUTTON_DOWNLOAD"),l=e.loc.string("COMING_SOON_BODY_DOWNLOAD").replace(b_,n)):(s.title=e.loc.string("CANCEL_COMING_SOON_BUTTON"),l=e.loc.string("COMING_SOON_BODY").replace(b_,n)),c=e.loc.string("CANCEL_COMING_SOON_CANCEL"),e.client.deviceType===jj||"tv"===e.client.deviceType){const e=new XH(hj)
e.title=a,e.message=l,e.buttonActions=[s],e.isCancelable=!0,e.cancelTitle=c,e.destructiveActionIndex=0,u=e}else if(e.client.deviceType===Tj){const t=new XH(hj)
t.title=a,t.artwork=ce(e,"systemimage://bell.slash.fill",95,90),t.message=l,t.buttonActions=[s],t.isCancelable=!0,t.cancelTitle=c,u=t}else{const e=new QH([s])
e.title=a,e.message=l,e.isCancelable=!0,e.cancelTitle=c,e.isCustom=!1,e.destructiveActionIndex=0,u=e}return $f(e,s,{...i,actionType:"cancelPreorder"}),u}function Dt(e,t){const n=ce(e,"systemimage://checkmark",95,90),r=ce(e,gv,95,90)
let o,i
o=new XH(O$),o.title="",o.artwork=n,e.client.isAutomaticDownloadingEnabled()?(o.message=e.loc.string(BO),o.toastDuration=2.5):(o.message=e.loc.string(d$),o.toastDuration=1.5)
{const n=new XH(O$)
n.title="",n.artwork=r,n.message=e.loc.string(d$),n.toastDuration=1.5
const o=new lW(UO,new MH([t,n]))
o.rateLimit=e.bag.arcadePreOrderUpsellLimitSeconds,o.fallbackAction=n,i=o}const s=!e.client.isAuthorizedForUserNotifications()
return e.bag.newEventsForODJAreEnabled&&s?new uW(new aW,new aW,new aW,new aW):new uW(i,o,o,o)}function _t(e,t,n,o,s,a){if(r(t))return{startAction:null,underlyingOfferAction:null}
const c=new NH,l=Pt(0,t),u=t.purchaseConfiguration.appName
c.shouldCheckForAvailableDiskSpace=!s,c.remoteControllerRequirement=hN,c.shouldCheckForGameController=Oe(e,o,BL),c.shouldPromptForConfirmation=!e.featureFlags.isEnabled("disable_redundant_interstitial")
const d=J(o,VT)
if(i(d)&&(c.checkRestrictionsForContentRating=d),l){const t=s?e.loc.string("OfferAlert.TV.Title.PredorderFree"):e.loc.string("OfferAlert.TV.Title.Free")
c.title=t.replace(JF,u)}else{const n=s?e.loc.string("OfferAlert.TV.Title.PreorderPaid"):e.loc.string("OfferAlert.TV.Title.Paid")
c.title=n.replace(JF,u).replace(Hx,t.priceFormatted)}const f=y(t)
f.title=s?e.loc.string("OfferButton.Title.Preorder"):l?e.loc.string(S_):e.loc.string("OfferButton.Title.Buy")
const p=(0,bg.isNothing)(n)?f:n
c.completionAction=p,c.shouldIncludeActiveAccountInFooterMessage=!0
const h=[]
Oe(e,o,vk)&&h.push(e.loc.string("OFFERS_IN_APP_PURCHASES","Offers In-App Purchases")),h.length>0&&(c.footerMessage=h.join(e.loc.string("TV_OFFER_ALERT_FOOTER_LINE_BREAK"))),c.impressionMetrics=f.impressionMetrics
const w=y(c)
w.shouldPromptForConfirmation=!1,w.title=null,w.footerMessage=null
const g=new GH(t.adamId,w)
return Rd(e,o)||(g.buyAction=c),g.openAction=t,{startAction:g,underlyingOfferAction:f}}function Lt(e,t,n,o,i,s){if(r(t))return{startAction:null,underlyingOfferAction:null}
const a=new NH,c=Pt(0,t)
a.remoteControllerRequirement=ft(e,o)
const l=y(t)
l.title=i?e.loc.string("OFFER_BUTTON_TITLE_PREORDER"):c?e.loc.string("OFFER_BUTTON_TITLE_GET"):e.loc.string("OFFER_BUTTON_TITLE_BUY")
const u=(0,bg.isNothing)(n)?l:n
a.completionAction=u,a.impressionMetrics=l.impressionMetrics
const d=y(a)
d.shouldPromptForConfirmation=!1,d.title=null,d.footerMessage=null
const f=new GH(t.adamId,d)
return f.buyAction=a,f.cancelAction=l,f.openAction=l,{startAction:f,underlyingOfferAction:l}}function xt(e,t,n,o){if(r(t))return null
if(e.client.newPaymentMethodEnabled||n)return t
const i=new aW
i.impressionMetrics=t.impressionMetrics
const s=y(o)
r(s)||(s.actionType=yO,s.targetType=Hj,$f(e,i,s))
const a=new FH(t,i)
return a.confirmationAccessibilityAction=function(e,t){if(r(t))return null
const n=new XH(hj)
r(t.priceFormatted)?(n.title=e.loc.string(b$),n.message="Are you sure you want to get "+t.purchaseConfiguration.appName):(n.title="Buy App",n.message=`Are you sure you want to buy ${t.purchaseConfiguration.appName} for ${t.priceFormatted}`),n.isCancelable=!0,n.buttonActions=[t]
const o=new GH(t.adamId,t)
return o.buyAction=n,o}(e,t),a}function Mt(e,t,n,r,o){const i=new XH(hj)
return i.isCancelable=!0,i.buttonActions=[t],i.imageName="vision.pro",Ft(e,n)?r?(i.title=e.loc.string("Alert.Buy.VisionOnly.Free.RemoteDownloads.Title"),i.message=e.loc.string("Alert.Buy.VisionOnly.Free.RemoteDownloads.Message"),i.buttonTitles=[e.loc.string("Alert.Buy.VisionOnly.Free.RemoteDownloads.ButtonTitle")]):(i.title=e.loc.string("Alert.Buy.VisionOnly.Paid.RemoteDownloads.Title"),i.message=e.loc.string("Alert.Buy.VisionOnly.Paid.RemoteDownloads.Message"),i.buttonTitles=[e.loc.string("Alert.Buy.VisionOnly.Paid.RemoteDownloads.ButtonTitle")]):(i.title=e.loc.string("Alert.Buy.VisionOnly.Title"),i.message=o?e.loc.string("Alert.Buy.VisionOnly.Message.Arcade"):e.loc.string("Alert.Buy.VisionOnly.Message"),i.buttonTitles=[e.loc.string("Alert.Buy.VisionOnly.ButtonTitle")]),i}function $t(e,t){if(!e.props.enabled("remoteDownloadIdentifiers"))return!1
if(!e.client.isCompanionVisionApp)return!1
const n=Qu(e,t).includes(Tj)||function(e){return ye(e,mj,eC)}(t)
return!!n}function Ft(e,t){return!!$t(e,t)&&Nt(e)}function Nt(e){return!((0,bg.isNothing)(e.client.remoteDownloadIdentifiers)||0===e.client.remoteDownloadIdentifiers.length)}function Bt(e,t){const n=new XH(hj)
return n.title=e.loc.string("Alert.Buy.TvGameControllerRequired.Title"),n.message=e.loc.string("Alert.Buy.TvGameControllerRequired.Message"),n.buttonTitles=[e.loc.string("Alert.Buy.TvGameControllerRequired.ButtonTitle")],n.isCancelable=!0,n.buttonActions=[t],n}function Ut(e,t,n,o,s,a,c,l,u,f,p=hj,h=!1,w=!1,g,m){return r(t)?null:Pg.context("displayPropertiesFromOfferAction",()=>{var r,a
let g=c
tt(e,o,77238)&&(g=dN),_u(e,o)||(g=dN),e.client.isCompanionVisionApp&&!Ft(e,o)&&(g=dN)
const v=null!==(r=Mu(e,o))&&void 0!==r?r:m
let A=null
v&&(A=v.id)
let T=new PV(n,t.adamId,g,A,l)
T.isPreorder=s
const S=w&&p===hj&&(0,bg.isSome)(e.bag.adsOverrideLanguage),P=S?e.adsLoc:e.loc
if(T.useAdsLocale=S,s)if(Rd(e,o))T.offerLabelStyle=PL,T.subtitles[NF]=Ud(e,o,e.loc.string(Vx)),T.titleSymbolNames[HT]=I_,T.titleSymbolNames[WT]="bell.fill",T.subtitles[NF]===e.loc.string(Zy)&&(T.subtitles[NF]=e.loc.string(Vx))
else{T.offerLabelStyle=BU,T.titleSymbolNames[Wj]=I_
const t=Ud(e,o,"");(0,bg.isSome)(t)&&(T.subtitles[NF]=t)}const b=o.type===xj,I=Pt(0,t),C=I&&b&&!jd(e,o,!1)
T.isFree=!C&&I
let k=null
if(p===hj&&(o.type===xj||Ld(0,o)||xd(e,o)||h))k=e.loc.string("OfferButton.Title.View")
else{if(p===sU&&(o.type===xj||Ld(0,o)||xd(e,o)))return null
k=p===qT&&e.props.enabled(oF)?e.loc.string("OfferButton.Title.Select"):I?p===sU?s?e.loc.string(jT):e.loc.string(GT):t.title:p===sU?s?e.loc.string("OfferButton.FlowPreview.PreorderWithPrice").replace(Hx,t.priceFormatted):e.loc.string("OfferButton.FlowPreview.BuyWithPrice").replace(Hx,t.priceFormatted):t.priceFormatted}if(T.titles[Wj]=k,T.priceFormatted=t.priceFormatted,e.client.newPaymentMethodEnabled||p===sU||(T.titles[GO]=I?e.loc.string("OfferButton.Title.ConfirmGet"):e.loc.string("OfferButton.Title.ConfirmBuy")),Rd(e,o))if(p===sU){const t=e.loc.string("OfferButton.FlowPreview.Arcade.Standard")
T.titles[Wj]=t,T.titles[C_]=t,T.titles[QN]=e.loc.string("OfferButton.FlowPreview.Arcade.Open"),T.titles[jO]=t,s&&(T.titles[zT]=e.loc.string("OfferButton.FlowPreview.Arcade.PreorderSubscribed"),T.titles[YT]=e.loc.string("OfferButton.FlowPreview.Arcade.PreorderNotSubscribed"))}else{const e=P.string("OfferButton.Arcade.Title.Standard")
T.titles[Wj]=e,T.titles[C_]=e,T.titles[QN]=P.string("OfferButton.Arcade.Title.Open"),T.titles[jO]=e,s&&(T.titles[zT]=P.string("OfferButton.Arcade.Title.PreorderSubscribed"),T.titles[YT]=P.string("OfferButton.Arcade.Title.PreorderNotSubscribed"),T.titles[HT]=P.string("OfferButton.Arcade.Title.PreorderedSubscribed"),T.titles[WT]=P.string("OfferButton.Arcade.Title.PreorderedNotSubscribed"))}if(u&&p!==sU){const t=d(u,$T),n=d(u,cB)
if(i(n)&&i(t)){let r=null,o=null
switch(t){case FT:f?(r=e.loc.string(VO),o=e.loc.string(VO)):(r=e.loc.string(VO),o=e.loc.string(k_))
break
case NT:const t=e.loc.string("OfferButton.IntroPrice.PaidUpfront.Trial").replace(Hx,n)
f?(r=t,o=t):(r=t,o=e.loc.string(k_))
break
case BT:r=e.loc.string(k_),o=e.loc.string(k_)}T.titles[HO]=r,T.titles[WO]=o,T.subtitles[HO]=e.loc.string(JT),T.subtitles[WO]=e.loc.string(JT)
const i=10
let s=!1
for(const e of Object.keys(T.titles))if(T.titles[e].length>i){s=!0
break}s&&(T=T.newOfferDisplayPropertiesChangingAppearance(!1,null,NA))}}const O=Oe(e,o,vk),E=mt(e,o),R=vt(e,ij),D=E&&R
if(T.hasInAppPurchases=O,T.hasExternalPurchases=D,O||D){const t=D?ZT:KT,n=P.string(t)
T.subtitles[Wj]=n,e.client.newPaymentMethodEnabled||p===sU||(T.subtitles[GO]=n)}T.isDeletableSystemApp=et(e).isSystemAppFromData(o)&&!xd(e,o)
const _=J(o,VT)
T.contentRating=_,T.appCapabilities=t.purchaseConfiguration.appCapabilities
const L=null!==(a=se(o,zj))&&void 0!==a?a:[],x=[]
if((0,bg.isSome)(L))for(const t of L)jd(e,t)&&x.push(t.id)
return o.type===xj&&p!==sU&&(T.offerToken={offerAction:t,offerDisplayProperties:y(T),freeBundleId:C?t.adamId:void 0,supportedBundleChildrenIds:x.length>0?x:void 0}),T})}function Gt(e,t,n,o,i){return r(t)?null:Pg.context("personalizedCMCDisplayPropertiesFromBuyButtonMetadata",()=>{const r=new PV(n,t.adamId,i),s=Pt(0,t)
r.isFree=s
let a=null
a=s?t.title:t.priceFormatted,r.titles[Wj]=a,r.priceFormatted=t.priceFormatted
const c=o.hasInAppPurchases,l=o.hasExternalPurchases
if(r.hasInAppPurchases=c,r.hasExternalPurchases=l,l){const t=e.loc.string(ZT)
r.subtitles[Wj]=t}else if(c){const t=e.loc.string(KT)
r.subtitles[Wj]=t}return r.contentRating=o.contentRating,r.appCapabilities=t.purchaseConfiguration.appCapabilities,r})}function jt(e,t){if(!t.isFirstRender)return s(t.remainingItems)?t.remainingItems:[]
const n=se(t.data,qj)
return s(n)?n:[]}function Vt(e,t){let n=null
switch(t.type){case _j:case aU:case UF:n=ie(e,t,wG)||ie(e,t,gG)||ie(e,t,qj)||ie(e,t,Oj)
break
case zj:case jG:case xj:n=t}return n}function Ht(e,t){if(o(t))return null
const n=c(t.meta,"associations.editorial-cards.data")
return o(n)?null:n[0]}function Wt(e,t){return h({...H(t,_F,{}),...H(Ht(0,t),_F,{})})}function qt(e){return{showAppIcon:u(e.showAppIcon,!1),suppressLockup:u(e.suppressLockup,!1),useGeneratedBackground:u(e.useGeneratedBackground,!1),useMaterialBlur:u(e.useMaterialBlur,!0),useTextProtectionColor:u(e.useTextProtectionColor,!1)}}function zt(e,t){if(!K(t))return null
let n
return n=t.type===_j?Gd(e,t):t,K(n)?n:null}function Yt(e,t){const n=s(H(t,pj)),r=Y(t,L$)
return!n&&!r}function Jt(e,t){const n=t.type
return n!==qg.Collection&&n!==qg.Recommendations?null:q(t,iG)}function Kt(e,t){switch(q(t,LA)){case Vk:return"com.apple.AppStore.BridgeStoreExtension"
case Hk:return"com.apple.MobileSMS"
case"RealityDevice":return e.bag.enableDeviceDrivenDiscoveryContent?"VisionAppStore":null
default:return null}}function Zt(e){return h(function(e){return c(e,"meta.associations.editorial-cards.data")}(e)[0])}function Qt(e){switch(e){case Cg.bottomLeft:return Cg.bottomRight
case Cg.left:return Cg.right
case Cg.topLeft:return Cg.topRight
case Cg.bottomRight:return Cg.bottomLeft
case Cg.right:return Cg.left
case Cg.topRight:return Cg.topLeft
default:return e}}function Xt(e){return{collapsedContentMode:Qt(e.collapsedContentMode),expandedContentMode:Qt(e.expandedContentMode),collapsedLayoutInsets:{top:e.collapsedLayoutInsets.top,left:e.collapsedLayoutInsets.right,bottom:e.collapsedLayoutInsets.bottom,right:e.collapsedLayoutInsets.left},expandedLayoutInsets:{top:e.expandedLayoutInsets.top,left:e.expandedLayoutInsets.right,bottom:e.expandedLayoutInsets.bottom,right:e.expandedLayoutInsets.left}}}function en(e,t){return e.props.enabled(qU)||t?[gn(e),mn(e)]:[]}function tn(e){return e.props.enabled(qU)?LJ:LK}function nn(e){return e.props.enabled(qU)?NJ:_K}function rn(e,t){return vn(e.props.enabled(qU)?VJ:MK,t)}function on(e){return e.props.enabled(qU)?JK:OK}function sn(e){return e.props.enabled(qU)?nZ:EK}function an(e,t){return vn(e.props.enabled(qU)?aZ:xK,t)}function cn(e){return e.props.enabled(qU)?lZ:RK}function ln(e){return e.props.enabled(qU)?dZ:DK}function un(e){return e.props.enabled(qU)?hZ:SK}function dn(e){return e.props.enabled(qU)?yZ:PK}function fn(e){return e.props.enabled(qU)?SZ:bK}function pn(e,t){return vn(e.props.enabled(qU)?kZ:IK,t)}function hn(e){return e.props.enabled(qU)?KZ:CK}function wn(e,t){return vn(e.props.enabled(qU)?eQ:kK,t)}function gn(e){return e.props.enabled(qU)?NZ:FK}function mn(e){return e.props.enabled(qU)?zZ:$K}function vn(e,t){const n={...e}
return(0,Ig.isSome)(t)&&(n.crops=t),n}function yn(e,t,n){const r=Zi(t,n.coercedCollectionTodayCardDisplayStyle),o=n.isHorizontalShelfContext?function(e,t){const n=[]
n.push(pn(e,["SCS.ApDPCS01"])),t.horizontalCardContentType===t$&&n.push(cn(e))
const r=e.props.enabled("todayBrickPreferredContentModes")||!1
return n.push(an(e,r?["sr"]:void 0),rn(e,r?["sr"]:void 0)),n}(e,n):function(e,t,n){const r=new Set([tm.List,tm.NumberedList])
if(e.client.isPad&&n.isHeroCard&&!r.has(t))return en(e,n.isHeroCard)
switch(t){case tm.AppEventCard:return[un(e),dn(e),fn(e),pn(e),...en(e,n.isHeroCard),nn(e)]
case tm.AppOfTheDay:case tm.GameOfTheDay:return[un(e),dn(e),fn(e),pn(e),...en(e,n.isHeroCard),tn(e)]
case tm.List:case tm.NumberedList:return[on(e),sn(e)]
case tm.ShortImage:return n.isSearchContext?[rn(e),un(e),dn(e),fn(e),pn(e),...en(e,n.isHeroCard),cn(e),ln(e),an(e)]:[un(e),dn(e),fn(e),pn(e),...en(e,n.isHeroCard),cn(e),ln(e),rn(e),an(e)]
case tm.FullBleedImage:return[un(e),dn(e),hn(e),wn(e),fn(e),pn(e),...en(e,n.isHeroCard),cn(e),ln(e),an(e),rn(e)]
case tm.SingleApp:case tm.Video:default:return[un(e),dn(e),fn(e),pn(e),...en(e,n.isHeroCard),cn(e),ln(e),an(e),rn(e)]}}(e,r,n)
let i,s=!1
const a=Zt(t)
if(K(a)&&(i=o.find(e=>(0,Ig.isSome)(H(a,e.objectPath))),s=(0,Ig.isSome)(i)),(0,Ig.isNothing)(i)&&(i=o.find(e=>(0,Ig.isSome)(H(t,e.objectPath)))),i===VJ&&n.metricsDisplayStyle===nm.SmallCard&&(i.cardArtLayouts=[i.cardArtLayoutMetrics[0].ltr,i.cardArtLayoutMetrics[0].rtl]),!i)return
const c=H(s?a:t,i.objectPath)
if(i.type===DG){const t=i.crops.map(t=>{let r=t
return n.isSearchContext&&(0,Ig.isSome)(n.prevailingCropCode)&&(r=n.prevailingCropCode),Nu(e,c,{withJoeColorPlaceholder:!0,cropCode:r,useCase:15,overrideHeight:i.sourceHeight,overrideWidth:i.sourceWidth})}),r=An(c)
return{artworks:t,videos:[],cardArtLayouts:i.cardArtLayouts,artworkLayoutsWithMetrics:i.cardArtLayoutMetrics,joeColors:r}}{const t=p(c,kN),r=f(t,CN),o=f(t,JN)>=r
let s=i.sourceHeight,a=i.sourceWidth
o&&([s,a]=[a,s])
const l=Nu(e,t,{withJoeColorPlaceholder:!0,cropCode:i.crops[0],useCase:15,overrideHeight:s,overrideWidth:a})
if((0,Ig.isNothing)(l))return
let u={prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0};(0,Ig.isSome)(n.videoPlaybackControls)&&(u=n.videoPlaybackControls)
let h={prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0};(0,Ig.isSome)(n.videoPlaybackControls)&&(h=n.videoAutoplayPlaybackControls)
const w=d(c,ej)
if((0,Ig.isNothing)(w))return
const g=new JV(w,l,{playbackControls:u,autoPlayPlaybackControls:h,canPlayFullScreen:n.enableFullScreenVideo}),m=An(t)
return{artworks:[],videos:[g],cardArtLayouts:i.cardArtLayouts,artworkLayoutsWithMetrics:i.cardArtLayoutMetrics,joeColors:m}}}function An(e){return{bgColor:F(d(e,qN)),textColor1:F(d(e,XC)),textColor2:F(d(e,nL)),textColor3:F(d(e,"textColor3")),textColor4:F(d(e,CM)),textGradient:c(e,Mv).map(e=>F(d(e)))}}async function Tn(e,t,n){var r
const o=Date.now(),i=await e.mediaToken.refreshToken(),s=e.fetchTimingMetricsBuilder,a=null!=n?n:{},c=null===(r=e.personalizationMetricsIdentifiersCache)||void 0===r?void 0:r.getMetricsIdForType(Dg.user);(0,bg.isSome)(c)&&((0,bg.isSome)(null==a?void 0:a.headers)?a.headers[LQ]=c:a.headers={[LQ]:c})
const l=await Pn(e,t,i,a,!1,s),u=Date.now()
t.canonicalUrl&&(l[um.requestedUrl]=t.canonicalUrl)
const d=u-o
if(d>500){const n=qe(e,t).toString()
e.console.warn("Fetch took too long ("+d.toString()+"ms) "+n)}return l}function Sn(e,t){return e.bag.redirectUrlWhitelistedQueryParams.filter(e=>{var n
return i(null===(n=t.query)||void 0===n?void 0:n[e])})}async function Pn(e,t,n,a={},c=!1,u){var d,p
const h=qe(e,t).toString(),w=new xq(h),g=Sn(e,w)
for(const e of g)w.removeParam(e)
const v=w.toString()
let y=a.headers
y||(y={}),y.Authorization="Bearer "+n
const A=await e.network.fetch({url:v,headers:y,method:a.method,body:a.requestBodyString,timeout:a.timeout})
try{if(401===A.status||403===A.status){if(c)throw Error("We refreshed the token but we still get 401 from the API")
return e.mediaToken.resetToken(),await e.mediaToken.refreshToken().then(async n=>await Pn(e,t,n,a,!0,u))}if(404===A.status)throw bn()
if(!A.ok){const e=new xQ(`Bad Status code ${A.status} for ${v}, original ${h}`)
throw e.statusCode=A.status,e}const n=n=>{var c,u
const d=Date.now()
let p
if(r(n.body)||""===n.body){if(204!==n.status)throw bn()
p={}}else try{p=JSON.parse(n.body)}catch(t){let r=t.message
throw[KN,MF].includes(e.client.buildType)&&(r=`${t.message}, body: ${n.body}`),new MQ(r)}const w=Date.now()
if(p){if(p[um.pageInformation]=m(function(e,t){const n=e.client.storefrontIdentifier
let r=null
if((null==n?void 0:n.length)>0){const e=n.split("-")
s(e)&&(r=e[0])}return{serverInstance:t.headers[$Q],storeFrontHeader:n,language:e.bag.language,storeFront:r,environmentDataCenter:t.headers[FQ]}}(e,n)),n.metrics.length>0){const e={...n.metrics[0],parseStartTime:d,parseEndTime:w}
p[um.timingValues]=e}else{const e={pageURL:n.url,parseStartTime:d,parseEndTime:w}
p[um.timingValues]=e}if(p[um.contentMaxAge]=function(e,t){const n=Object.keys(t.headers).find(e=>"cache-control"===e.toLowerCase())
if(r(n)||""===n)return null
const i=t.headers[n]
if(o(i))return null
const s=i.match(/max-age=(\d+)/)
return r(s)||s.length<2?null:f(s[1])}(0,n),Array.isArray(p.data)&&i(u=p.data)&&0===u.length&&!l(a.allowEmptyDataResponse))throw bn()
Array.isArray(p.data)&&t.originalOrdering.length>1&&(p.data=function(e,t,n,r=[]){const o={}
for(const e of n)o[In(0,e.type,e.id)]=e
const i=[]
for(const e of t){const t=o[In(0,e.type,e.id)]
if((0,bg.isSome)(t)){if(s(r)){t.meta={...e.meta}
for(const n of r)Cn(0,n,t,e,o)}i.push(t)}}return i}(0,t.originalOrdering,null!==(c=p.data)&&void 0!==c?c:[],t.supplementaryMetadataAssociations)),p[um.requestedUrl]=h}return p}
return(0,bg.isSome)(u)?u.measureParsing(A,n):n(A)}catch(e){if(e instanceof xQ)throw e
const t=null!==(d=A.headers["x-apple-jingle-correlation-key"])&&void 0!==d?d:null===(p=A.metrics[0])||void 0===p?void 0:p.clientCorrelationKey
throw new Error(`Error Fetching - filtered: ${v}, original: ${h}, correlationKey: ${null!=t?t:"N/A"}, ${e.name}, ${e.message}`)}}function bn(){const e=new xQ("No content")
return e.statusCode=204,e}function In(e,t,n){return`${t}_${n}`}function Cn(e,t,n,r,o){var i;(0,bg.isNothing)(n.meta)?n.meta={associations:{}}:(0,bg.isNothing)(n.meta.associations)&&(n.meta.associations={})
const a=D(t,r)
if(s(a)){const e=[]
for(const t of a){const n=o[In(0,t.type,t.id)];(0,bg.isSome)(n)&&e.push(n)}(null!==(i=p(n.meta.associations))&&void 0!==i?i:{})[t]={data:e}}}function kn(e,t=!1){return{timeToLive:Rn(e),nextPreferredContentRefreshDate:null,refreshWhileVisibleForNextPreferredContentRefreshDate:t}}function On(e,t){r(t)||r(e)||(r(t.nextPreferredContentRefreshDate)||e.getTime()<t.nextPreferredContentRefreshDate.getTime())&&e.getTime()>(new Date).getTime()&&(t.nextPreferredContentRefreshDate=e)}function En(e,t){if(!function(e){return e.bag.enableAutomaticPageRefresh}(e))return null
if(r(t))return null
let n,o=!1
if(i(t.timeToLive)&&i(t.nextPreferredContentRefreshDate)){const e=Dn(t.timeToLive)
e.getTime()<t.nextPreferredContentRefreshDate.getTime()&&e.getTime()>(new Date).getTime()?n=e:(n=t.nextPreferredContentRefreshDate,o=!0)}else if(i(t.timeToLive))n=Dn(t.timeToLive)
else{if(!i(t.nextPreferredContentRefreshDate))return null
n=t.nextPreferredContentRefreshDate,o=!0}if(n.getTime()<=(new Date).getTime())return null
const s=o&&t.refreshWhileVisibleForNextPreferredContentRefreshDate
return new NQ("timeToLive",0,null,n,s)}function Rn(e){return e[um.contentMaxAge]}function Dn(e){const t=new Date
return t.setSeconds(t.getSeconds()+e),t}function _n(e){e.includingScopedRelationships(_U,[gC,QL,bF]),e.includingViews([rD,UC]),e.includingScopedAttributes(_U,[Yj,AG,EM]),e.includingMetaKeys(Gv,[jv]),e.includingMetaKeys(Vv,[mC]),e.includingAssociateKeys(_U,[Hv])}function Ln(e){e.includingScopedRelationships(_U,[gC,QL,bF]),e.includingScopedAttributes(_U,[Yj,AG,EM]),e.includingMetaKeys(Gv,[jv]),e.includingMetaKeys(Vv,[mC]),e.includingAssociateKeys(_U,[Hv])}function xn(e){e.includingScopedRelationships(YU,[CF]),e.includingScopedAttributes(YU,[JG,AG,EM,sD]),e.includingMetaKeys(Wv,[qv]),e.includingKindsKeys(YU,[ex])}function Mn(e){return HQ.has(e)}function $n(e){return BQ.has(e)}function Fn(e){return jQ.has(e)}function Nn(e){return GQ.has(e)}function Bn(e){return e===36..toString()?1:e===6014..toString()?2:0}function Un(e){const t=e.categories
if(s(t)){const e=t[0].genreId
if(e===6014..toString())return 2
if(e===36..toString())return 1}return 0}function Gn(e,t,n=e.host.clientIdentifier,r=[]){t||(t=36)
const o=new zz(e).forType(FL).includingAdditionalPlatforms(r).includingMacOSCompatibleIOSAppsWhenSupported(!0).addingQuery(vG,`${t}`)
return n===tH?o.addingContext(Vj):n===nH&&o.addingContext(LG),o}function jn(e,t,n=!0){return Pg.context("categoryListFromApiResponse",()=>{const r=c(t,"results.categories"),o=Vn(e,p(r,"0"),n)
return o?new YQ(o.children):null})}function Vn(e,t,n=!0){return Pg.context("categoryFromApiResponse",()=>{if(!t)return null
const r=d(t,Yj),o=d(t,vG),s=d(t,C$),a=Nu(e,p(t,Nj),{allowingTransparency:!0,useCase:20}),l=c(t,oG).map(t=>Vn(e,p(t),n)).filter(e=>i(e)),u=function(e,t){return t.sort((t,n)=>{try{return t.name.localeCompare(n.name,e.loc.safeIdentifier,{usage:XU})}catch(e){return 0}})}(e,l),f=d(t,GG)
return f&&n&&u.unshift(new zQ(f,o,a,s,[])),new zQ(r,o,a,s,u)})}function Hn(e,t,n=!1,r=!1,o=!0){const i=n?"contentIconTrimmedMonochrome":"contentIconTrimmed",s="brandLogo",a=be(e,t,wj)
if(r)return p(a,s)
{let e=p(a,i)
return o&&(0,Ig.isNothing)(e)&&(e=p(a,s)),e}}function Wn(e,t,n){const r=J(t,SB)
let o=null
const i=q(t,"gamesFilter")
switch(i){case Gj:case HD:case"all":o=i
break
default:495!==r&&500!==r||(o=Gj)}let a=null,c=q(t,zn(0,r)),u=null,f=null,p=q(t,WB)
const h={}
let w=!1
const g=se(t,H$)[0]
if(476===r&&s(g))if(a=e.loc.uppercased(q(t,zn(0,r))),p=null,g.type===rU){c=Dd(e,g,Yj)
const t=Hn(e,g,!1)
if((0,Ig.isSome)(t)){u=Nu(e,t,{useCase:1,style:NM})
const n={type:XM,name:Dx}
h.eyebrowColor=n}f={forYou:!0}}else w=!0,c=q(g,zn(0,r)),u=ju(e,g,{useCase:1})
const m={featuredContentId:r,id:d(t,"id"),presentationHints:{},metricsPageInformation:n.metricsPageInformation,metricsLocationTracker:n.metricsLocationTracker,pageGenreId:n.pageGenreId,featuredContentData:t,title:c,subtitle:p,eyebrow:a,titleArtwork:u,shelfHeaderConfiguration:h,shouldFilter:!1,gamesFilter:o,remainingItems:[],isFirstRender:!0,isDeferring:!1,showOrdinals:!1,hasExistingContent:!1,showingPlaceholders:!1,ordinalIndex:1,isSearchLandingPage:n.isSearchLandingPage,isArcadePage:null==n?void 0:n.isArcadePage}
return{shelfToken:m,metricsOptions:{id:m.id,kind:null,softwareType:l(null==n?void 0:n.isArcadePage)?oj:null,targetType:tj,title:w?m.eyebrow:m.title,badges:f,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,idType:cU,fcKind:r,recoMetricsData:Xn(e,t)}}}function qn(e){return e&&e.isDeferring&&e.isFirstRender}function zn(e,t){switch(t){case 548:case 495:case 496:return JG
default:return Yj}}function Yn(e){let t=(new xq).set(BB,CW).append(lU,xW).append(lU,RW).append(lU,encodeURIComponent(JSON.stringify(e))).param(Aq.groupingFeaturedContentId,`${e.featuredContentId}`)
return(0,Ig.isSome)(e.nativeGroupingShelfId)&&(t=t.param(Aq.nativeGroupingShelfId,`${e.nativeGroupingShelfId}`)),t.build()}function Jn(e,t){if(o(t))return null
r(t.shelfStyle)&&(t.shelfStyle=e.contentType)
const n=e.contentType!==W$&&s(e.items)
return t.hasExistingContent=t.hasExistingContent||n&&t.isFirstRender,(t.remainingItems.length||t.recommendationsHref||t.onDeviceRecommendationsUseCase)&&t.isFirstRender?Yn(t):null}function Kn(e,t){e.remainingItems=e.remainingItems.filter(e=>!t.has(e.id))}function Zn(e,t,n){var r
const o=s(t.remainingItems),i=!o&&(null===(r=t.recommendationsHref)||void 0===r?void 0:r.length)>0
if(o){const n=function(e,t){var n
const r=(null===(n=t.relationshipToFetch)||void 0===n?void 0:n.length)>0
let o=t.remainingItems
return r&&(o=t.remainingItems.map(n=>ie(e,n,t.relationshipToFetch))),o}(e,t),r=new zz(e,n)
return We(e,r,n),Qn(e,r),r}if(i){const n=new zz(e,t.recommendationsHref)
return Qn(e,n),Oi(e)&&(n.enablingFeature(VG),n.includingMetaKeys(e$,[_x,JD]),n.includingScopedAttributes(Uj,[yj,zU,DU]),n.includingScopedRelationships(Uj,[Oj])),Ei(e)&&(n.enablingFeature(KD),Ln(n)),Ri(e)&&(n.enablingFeature(M$),xn(n)),n}return null}function Qn(e,t){t.includingAdditionalPlatforms(O(e)).includingRelationshipsForUpsell(!0).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes($e(e))
let n=[wj,dj,yG]
t.includesResourceType(Uj)&&Oi(e)&&(t.enablingFeature(VG),t.includingMetaKeys(e$,[_x,JD]),t.includingScopedAttributes(Uj,[yj,zU,DU]),t.includingScopedRelationships(Uj,[Oj])),t.includesResourceType(_U)&&Ei(e)&&(t.enablingFeature(KD),Ln(t),n=[]),t.includesResourceType(YU)&&Ri(e)&&(t.enablingFeature(M$),xn(t),n=[]),(t.includesResourceType(zj)||t.includesResourceType(Uj))&&(n=n.concat(kB,uB,UB)),t.includingAttributes(n)}function Xn(e,t){const n=J(t,SB)
switch(n){case 425:case 415:case 416:case 417:case 501:case 258:case 421:case 422:case 423:case 261:return $(re(t,oG))
case 437:case 265:{const e=re(t,oG),n=W(t,ZM)
return s(e)?$(e):s(n)?$(t):null}case 414:case 424:case 566:return null
default:if(function(e){return $n(e)||Mn(e)||WQ.has(e)||518===e}(n)){let e=re(t,qj)
if(r(e))return null
const n=e.data
return n&&0!==n.length||(e=re(t,oG)),$(e)}return e.console.warn("Unknown featured content ID:",n),null}}function er(e,t,n){const r=Nu(e,t,n)
return r&&(r.crop="sr"),r}function tr(e,t,n,r,o){const i=H(t,Nj)
if(i instanceof Array){const t=function(e,t,n,r){const o=n/r
let i=0,s=null
for(const e of t){const t=f(e,CN),r=t/f(e,JN);(r===o||Math.abs(o-r)<=Math.abs(o-i))&&(!s||t<=n&&t>s.width||s.width>n&&t<s.width&&t>s.width)&&(s=e,i=r)}return s?ce(e,d(s,Sj),f(s,CN),f(s,JN),null,null,d(s,ek)):null}(e,i,n,r)
return t.crop="bb",t}return null!=i?er(e,i,o):null}function nr(e,t,n,a,c,l,u,f){var p,h,w
const g=(null===(p=d(t,Sj))||void 0===p?void 0:p.length)>0,m=(null===(h=q(t,cA))||void 0===h?void 0:h.length)>0,v=ne(t,wG,!1),y=ne(t,qj,!1)||v
let A=q(t,tG)===OA
if(m||g)return function(e,t,n,o,s){const a=i(d(t,Sj))?t:H(t,pj)
if(r(a)||qn(n))return c=t,s?s():null==n||n.remainingItems.push(c),null
var c
const l=d(a,ox),u=d(a,Sj),f=d(a,GG),p=ar(q(t,Fk))||f
let h=null
if(l===dD)h=new xH(u),h.title=p
else{const t=e.required(C2).fetchFlowPage(u),n=new Bq(t)
n.pageUrl=u,n.title=p,h=n}return h.presentationStyle=[VI],$f(e,h,{...o,id:""}),{action:h,caption:null,title:p,subtitle:null,artwork:null,shortEditorialDescription:null}}(e,t,n,l,f)
if(y){let p,h,g
if(a&&!v){g=mr(e,"groupingCommon",se(t,qj),!0,c,!1,1)
const n=g.personalizedData
if(0===n.length)return null
p=n[0]}else p=ie(e,t,v?wG:qj)
if(q(p,tG)===OA&&(h=p,p=ie(e,p,wG),A=!0),r(p))return null
if(r(p.attributes)||qn(n))return s(n)&&(n.isDeferring=!0),function(e){f?f():null==n||n.remainingItems.push(e)}(p),null
let m=Dd(e,p,WB)||uu(e,p)
const y=Lf(e,t,l)
y.targetType=l.targetType
let T=Cu(e,p,y,null==n?void 0:n.clientIdentifierOverride)
const S=Y(p,L$)
let P,b=null,I=null,C=null
const k=q(p,"itunesNotes.short"),O=(null===(w=p.id)||void 0===w?void 0:w.length)>0,E={...l,id:O?p.id:t.id,idType:O?aj:KM}
switch(p.type){case RU:b=H(p,Nj),A&&(p=null!=h?h:t)
break
case _j:{const t=ie(e,p,gG)
if(s(t)){const r={...E,inAppEventId:t.id},s=ie(e,t,Oj)
i(s)&&(r.relatedSubjectIds=[s.id])
const a=Bi(e,t,null,!1,!0,kj,cj,!1,!1,r,!1,!0,null,n.isArcadePage,!1)
if(i(a)){if(a instanceof Date)return On(a,u.refreshController),null
P=a,S||(T=P.clickAction),o(m)&&(m=Dd(e,t,FB))}}I=q(p,GG),I&&(I=I.replace(/\n/g," "))
const a=ie(e,p,qj),c=d(p,HB)
o(m)&&(c?m=c:a&&(m=Dd(e,a,FB))),o(m)&&i(P)&&(m=P.subtitle)
let f=q(p,bk);((0,Ig.isNothing)(f)||0===f.length)&&(f=m)
const h={useOTDTextStyle:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,isHeroCard:!1}
if(r(P)&&at(0,p),h.clientIdentifierOverride=Kt(e,p),i(P))C=P.lockup
else{const t=null,r=null
{rf(e,E,null==n?void 0:n.title)
const o=Qi(e,se(p,gG),h,l.pageInformation,l.locationTracker,t,r,at(0,p))
1===o.length&&(C=o[0]),sf(E.locationTracker)}}}default:{const t=[zj,LU,xj,jG]
if(r(C)&&t.indexOf(p.type)>-1){rf(e,E,null==n?void 0:n.title)
const t={metricsOptions:{pageInformation:l.pageInformation,locationTracker:l.locationTracker,recoMetricsData:$(p)},clientIdentifierOverride:null==n?void 0:n.clientIdentifierOverride,artworkUseCase:Fu(0,null==n?void 0:n.shelfStyle),canDisplayArcadeOfferButton:!0,shouldHideArcadeHeader:e.featureFlags.isEnabled(k$)&&n.isArcadePage}
C=wu(e,p,t),sf(E.locationTracker)}b=be(e,p,wj)||H(p,wj),o(m)&&i(C)&&(m=C.subtitle)
break}}if(i(T)&&(T.presentationStyle=[VI],!A)){const n=ar(q(t,Fk)),r=Dd(e,p,Yj)
T.title=n||r||T.title||m||I}return{action:T,caption:I,title:null==T?void 0:T.title,subtitle:m,artwork:b,shortEditorialDescription:k,content:p,lockup:C,appEvent:P,onDevicePersonalizationDataProcessingType:null==g?void 0:g.processingType}}return null}function rr(e,t){const n={}
for(const t of e)n[t.id]=t
const r=[qj,J$],o=[]
for(const e of t){let t=!0
for(const o of r){const r=se(e,o)
if(i(r)){const i=[]
for(const e of r){const t=n[e.id]
s(t)&&i.push(t)}i.length===r.length?e.relationships[o]={data:i}:t=!1}}t&&o.push(e)}return o}function or(e,t,n){t.seeAllAction=null,t.isHorizontal=!1,t.shouldFilterApps&&(t.filteredItemsMinimumCount=0,t.filteringExcludedItems=n.includedAdAdamIds)}function ir(e,t){switch(t){case EB:return GU
case qD:return JM
case sB:return t$
case $U:return Nk
default:return null}}function sr(e,t){let n=q(t,jU)
return n||(n=q(t,"contentId")),n||(n=q(t,"id")),n}function ar(e){if(r(e))return null
const t=e.replace(/&amp;/g,"&").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#96;/g,"`").replace(/\r\n/g," ").replace(/&nbsp;/g," ").replace(/<span>/g,"").replace(/<\/span>/g,"").replace(/<br>/g," ").replace(/\u23ce/g,"").replace(/<i>/g,"").replace(/<\/i>/g,"").replace(/<b>/g,"").replace(/<\/b>/g,"")
return t.match(/^\s*$/)?null:t}function cr(e,t,n){e.featureFlags.isEnabled(OF)?t.titleAction=n:t.accessoryAction=n}function lr(e,t,n){e.featureFlags.isEnabled(OF)?(0,Ig.isSome)(t.header)?cr(e,t.header,n):t.header={titleAction:n}:t.seeAllAction=n}async function ur(e,t,n){const r=n===Kj?"OnDeviceRecommendationsShelfController":tS
return await new Promise((n,i)=>{if(o(e.user.dsid)){const e=`${r}: User is currently not signed in.`
return Pg.unexpectedType(EG,e,null),void i(new Error(e))}if(o(t)){const e=`${r}: Missing valid useCase for ODP: ${t}`
return Pg.unexpectedType(EG,e,null),void i(new Error(e))}e.onDeviceRecommendationsManager.performRequest({type:nS,dsId:e.user.dsid,useCase:t}).then(a=>{const l=c(a[rS]),u=m(a[CB])
if(o(l)){const e=`${r}: ODP returned no candidate ids for useCase: ${t}`
return Pg.unexpectedType(EG,e,null),void i(new KQ(e))}if(o(u)){const e=`${r}: ODP returned no metrics for useCase: ${t}`
return Pg.unexpectedType(EG,e,null),void i(new Error(e))}const d=[]
for(const e of l)s(e)&&d.push({id:e,type:zj})
const f=new zz(e,d).withFilter("apps:recommendable",zG).addingQuery(Aq.onDevicePersonalizationUseCase,t)
Qn(e,f),Tn(e,f).then(e=>{n({candidates:l,recoMetrics:u,dataContainer:e})}).catch(e=>{const t=`${r}: Failed to fetch Media API data for candidates: ${l}`
Pg.unexpectedType(EG,t,null),i(new Error(t))})}).catch(e=>{const n=`${r}: Failed to perform ODP for useCase: ${t}, ${e}`
Pg.unexpectedType(EG,n,null),i(new Error(n))})})}function dr(e){const t=new Set,n=[]
return e.forEach((e,r)=>{t.has(e.appId)||(n.push(e.appId),t.add(e.appId))}),n}function fr(e,t){var n
const r=Number(null!==(n=t[QT])&&void 0!==n?n:0)
for(const t of e){const e=t.score,n=t.onDeviceScore
t.modifiedScore=r*n+(1-r)*e}return e.sort((e,t)=>t.modifiedScore-e.modifiedScore),e}function pr(e,t){const n=e.filter(e=>i(e.pinnedPosition))
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
return c}function hr(e){const t=new Map
return s(e)&&e.split(",").forEach(e=>{const n=e.split("=")
2===n.length&&t.set(n[0],Number(n[1]))}),t}function wr(e,t,n,s,a,c,l,u){var p
let h={sortedDataItems:[],processingType:0}
if(null!==(p=null==n?void 0:n.metricsData[qO])&&void 0!==p&&p){const e=function(e,t,n,r,o){const s=[]
for(const e of t){const t=new QQ(e),a=f(e,E_)
let c=d(e,VF)
if(((0,Ig.isNothing)(c)||0===c.length)&&(null==o?void 0:o.length)>0&&(c=o),(0,Ig.isNothing)(c)||0===c.length)r&&(t.isUnpersonalizedMatch=!0,s.push(t))
else{if(i(n)){const e=n[c]
i(e)&&i(e.onDeviceSignals)&&(t.onDeviceScore=+e.onDeviceSignals)}t.appId=c,t.score=null!=a?a:0,s.push(t)}}return s}(0,t,null==n?void 0:n.personalizationData,s,l),r=fr(e,null==n?void 0:n.metricsData),o=e.every((e,t)=>e===r[t])
h={sortedDataItems:r,processingType:o?0:2},i(c)&&h.sortedDataItems.length>=c&&(h.sortedDataItems=h.sortedDataItems.slice(0,c))}else{const f=function(e,t,n,r,s){const a=[]
for(const c of t){const t=new QQ(c),l=d(c,eS)
let u=d(c,VF),f=d(c,zO)
if(((0,Ig.isNothing)(u)||0===u.length)&&(null==s?void 0:s.length)>0&&(u=s,f=e.random.nextUUID()),o(l)||o(u)||o(f)){r&&(t.isUnpersonalizedMatch=!0,a.push(t))
continue}const p=l.split(",")
if(p.includes(XQ)&&(t.isWildcardMatch=!0),i(n)){const e=n[u]
if(i(e))for(const n of p)if(e.userSegments.includes(n)){t.isExactMatch=!0
break}}t.appId=u,t.groupId=f,a.push(t)}return a}(e,t,null==n?void 0:n.personalizationData,s,l),p=dr(f),w=function(e,t){var n
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
return r(i)?a=gr(c,o,s):c.length>=i||!n?(a=gr(c,o,s),a.sortedDataItems=a.sortedDataItems.slice(0,i)):(a=gr(t,o,s),a.sortedDataItems=a.sortedDataItems.slice(0,i)),a}(0,w,a,p,c,u)}const w=h.sortedDataItems.map(e=>e.rawData)
return{personalizedData:w,processingType:(t.length!==w.length?1:0)+h.processingType}}function gr(e,t,n){const r=e.filter(e=>e.isExactMatch)
let o=e.filter(e=>!e.isExactMatch)
i(n)&&n&&(o=pr(o,t))
const s=r.concat(o),a=e.every((e,t)=>e===s[t])
return{sortedDataItems:s,processingType:a?0:2}}function mr(e,t,n,r,a,c=!1,l,u,p){return vr(e)?t===oA?function(e,t,n,r,o){var a,c
let l=t,u=!1
const p=[]
e.featureFlags.isEnabled("contingent_offers_personalization")||(l=t.filter((e,t)=>!s(e.type)||e.type===Uj||(p.push(t),!1)),u=l.length!==t.length)
const h=null==r?void 0:r.metricsData,g=null!==(a=h.use_segment_scores)&&void 0!==a&&a,m=null!==(c=h[qO])&&void 0!==c&&c
let v
if(v=g||m?function(e,t,n,r){var o
let s=[],a=[]
null!==(o=null==n?void 0:n.metricsData[qO])&&void 0!==o&&o?(s=function(e,t,n){const r=[]
for(const[e,o]of t.entries()){const t=new ZQ(o),s=w(o,XT),a=d(o,VF),c=f(o,E_)
if(i(n)){const e=n[a]
i(e)&&i(e.onDeviceSignals)&&(t.onDeviceScore=+e.onDeviceSignals)}t.appId=a,t.score=null!=c?c:0,s&&(t.pinnedPosition=e),r.push(t)}return r}(0,t,null==n?void 0:n.personalizationData),a=fr(s,null==n?void 0:n.metricsData)):(s=function(e,t){const n=[]
for(const[e,r]of t.entries()){const t=new ZQ(r),o=d(r,VF),i=d(r,zO),s=f(r,E_),a=d(r,"meta.personalizationData.segScores"),c=w(r,XT),l=hr(a)
t.appId=o,t.groupId=i,t.score=null!=s?s:0,t.segScores=l,c&&(t.pinnedPosition=e),n.push(t)}return n}(0,t),a=function(e,t){const n=function(e,t){var n
for(const r of e){const e=r.appId,o=r.segScores,s=r.score
if(i(t)){const a=t[e]
if(i(a)){let e=0,t=0
for(const n of a.userSegments)o.has(n)&&(t+=o.get(n),e+=1)
if(e){const n=t/e
r.modifiedScore=s*n}}else{const e=null!==(n=o.get("0"))&&void 0!==n?n:0
r.modifiedScore=s*e}}else r.modifiedScore=s}return e}(e,null==t?void 0:t.personalizationData),r=function(e,t){var n
const r=Number(null!==(n=t[QT])&&void 0!==n?n:0)
for(const t of e){const e=t.score,n=t.modifiedScore
t.modifiedScore=r*n+(1-r)*e}return e}(n,null==t?void 0:t.metricsData)
return r.sort((e,t)=>t.modifiedScore-e.modifiedScore),r}(s,n),i(r)&&r&&(a=pr(a,dr(a))))
const c=a.map(e=>e.rawData),l=a.every((e,t)=>e===s[t])?0:2
return{personalizedData:c,processingType:(t.length!==c.length?1:0)+l}}(0,l,r,o):wr(e,l,r,n,null,null,null,o),u){const e=v.personalizedData
p.forEach(n=>{const r=t[n]
n<e.length?e.splice(n,0,r):e.push(r)}),v={personalizedData:e,processingType:v.processingType}}return v}(e,n,r,a,p):wr(e,n,a,r,c,l,u,p):function(e,t,n){let r=[]
const s=new Set
for(const e of t){const t=d(e,eS),n=d(e,VF),i=d(e,zO)
o(t)||o(n)||o(i)?r.push(e):s.has(i)||t.split(",").includes(XQ)&&(r.push(e),s.add(i))}return i(n)&&r.length>n&&(r=r.slice(0,n)),{personalizedData:r,processingType:null}}(0,n,l)}function vr(e){return e.user.isOnDevicePersonalizationEnabled&&e.bag.enableOnDevicePersonalization}function yr(e,t){return vr(e)?e.host.platform===OU?e.user.onDevicePersonalizationDataContainerForAppIds(Array.from(t)):{personalizationData:{},metricsData:null}:null}function Ar(e){return vr(e)&&e.host.platform===OU?e.user.onDevicePersonalizationDataContainerForAppIds([]).metricsData:null}function Tr(e,t){if(!Y(t,NE))return null
const n=q(t,WE)
if(s(n))return n
const r=q(t,GG)
return s(r)?r.replace(/\n/g," "):null}function Sr(e,t,n,a,c,u,d,f){return Pg.context("searchResultFromData",()=>{let p=null
const h=t.type,w={metricsOptions:{pageInformation:c.pageInformation,locationTracker:c.locationTracker,targetType:$U,createUniqueImpressionId:!0},hideZeroRatings:!0,artworkUseCase:8,isNetworkConstrained:u,canDisplayArcadeOfferButton:Nd(0,gx),clientIdentifierOverride:kr(0,d),isMultilineTertiaryTitleAllowed:!1},g=function(e,t,n){var r,o
if(!function(e){return e.client.deviceType===Bj}(e))return rG
const s=t.meta,a=null===(r=null==s?void 0:s.displayStyle)||void 0===r?void 0:r.condensed
if(i(a))return br(e,a)
const c=null===(o=null==n?void 0:n.displayStyle)||void 0===o?void 0:o.condensed
return i(c)?br(e,c):Ir(e)}(e,t,f)
switch(h){case g$:case Xx:case SU:case _j:case RU:const u=zi(e,t,{useOTDTextStyle:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,isHeroCard:!1,isSearchContext:!0},new kJ(c.pageInformation,c.locationTracker))
if(u&&u.media&&u.media.kind===cN){const e=u.media.lockup
e.theme=kj,p=new IQ(e)}else if(function(e,t,n){if(1!=(l(n,"experiments.showGridCard")?0:1))return!1
switch(t.type){case RU:return s(W(t,qE))
case g$:case Xx:return!0
case _j:switch(Zi(t)){case tm.List:case tm.NumberedList:case tm.Grid:case tm.River:return!0
default:return!1}default:return!1}}(0,t,n)){const n=function(e,t,n){const r=function(e,t){if(t.type===SU)return e.loc.string(DP)
const n=Tr(0,t)
return s(n)?n:e.loc.string("Search.EditorialSearchResultType.Heading.Collection")}(e,t),i=function(e,t){return t.type===SU?q(t,Yj):Dd(e,t,Yj)}(e,t),a=Tf(e,t,i,{targetType:$U,pageInformation:n.pageInformation,locationTracker:n.locationTracker})
rf(e,a,i)
const c=Cu(e,t,{actionType:Fj,targetType:Hj,pageInformation:n.pageInformation,locationTracker:n.locationTracker,id:AO,idType:fj},e.host.clientIdentifier)
c.title=e.loc.string(UU)
const l={lockupOptions:{metricsOptions:{pageInformation:n.pageInformation,locationTracker:n.locationTracker,targetType:ij},skipDefaultClickAction:!1,artworkUseCase:8,hideCompatibilityBadge:!1},filter:128}
let u=se(t,gG)
o(u)&&(u=se(t,FE))
const d=Iu(e,u,l)
sf(n.locationTracker)
const f=new RQ(r,i,d,c,null)
return gf(e,f,a),o(d)?null:f}(e,t,c)
n&&(p=n)}else{const n=function(e,t,n,o){return Pg.context("editorialSearchResultFromData",()=>{let a
const c=q(t,Yj)
switch(t.type){case RU:{const n=new EQ(c),r=W(t,qE)
if(s(r))n.collectionAdamIds=r
else{const r=Nu(e,H(t,Nj),{useCase:9,allowingTransparency:!0})
n.iconArtwork=r}n.type=KB,a=n
break}case g$:case Xx:{const n=new EQ(c)
n.artwork=Nu(e,H(t,Nj),{useCase:9,cropCode:"sr"}),n.collectionAdamIds=W(t,qE),n.type=CU,a=n
break}case _j:{if(e.bag.searchFilterEditorialItemIds.has(t.id))return null
const c=new kJ(n.pageInformation,n.locationTracker),l=function(e,t,n,o){const a={useOTDTextStyle:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,isHeroCard:!1,isSearchContext:!0}
a.prevailingCropCode=o&&e.client.isPhone?"DMGE.AppST01":"fo"
const c=zi(e,t,a,n)
if(!c)return null
const l=new EQ(c.title)
l.type=wN,l.clickAction=c.clickAction
let u=null
if(c.media)switch(c.media.kind){case iB:const n=c.media
switch(l.artwork=n.artworks[0],r(l.artwork)&&(l.iconArtwork=n.icon),q(t,eM)){case tm.AppOfTheDay:case tm.GameOfTheDay:const n=ie(e,t,gG)
n&&(l.title=q(n,Yj)||l.title)}break
case UI:case GI:u=c.media.lockups
break
case Nj:const o=c.media
l.artwork=o.artworks[0]
break
case mU:case EL:u=c.media.lockups
break
case ej:const s=c.media
if(l.artwork=s.videos[0].preview,l.video=s.videos[0],c.overlay instanceof mY){const e=c.overlay
l.title=e.title,l.subtitle=e.description}else l.subtitle=s.description
break
case T$:const a=c.media
if(l.artwork=a.artworks[0],l.appEventFormattedDates=a.formattedDates,l.subtitle=c.inlineDescription,l.tintColor=a.tintColor,l.type="appEventStory",i(c.style))switch(c.style){case NG:case cj:l.mediaOverlayStyle=NG
break
case kj:l.mediaOverlayStyle=kj
break
default:ue(c.style)}}if(c.overlay)switch(c.overlay.kind){case ij:const e=c.overlay
l.artwork||(u=[e.lockup])
break
case xm:u=c.overlay.lockups
break
case AB:const t=c.overlay
l.subtitle=t.paragraph.text}if(i(u)){l.collectionAdamIds=[],l.collectionAppIcons=[]
for(const e of u)l.collectionAdamIds.push(e.adamId),l.collectionAppIcons.push(e.icon)
1===u.length&&(l.lockup=u[0])}const d=Wt(0,t)
l.editorialDisplayOptions=qt(d)
const f=Tr(0,t);(null==f?void 0:f.length)>0&&f!==l.title&&(l.tagline=f)
const p=c.heroMedia
return s(p)&&(s(p.artworks[0])?(l.artwork=p.artworks[0],l.artwork.crop="em"):s(p.videos[0])&&(l.video=p.videos[0])),l.video&&(l.video.showPlaybackControls=!1,l.video.canPlayFullScreen=!1,l.video.playbackControls={}),l.collectionAdamIds||l.artwork||l.iconArtwork?l:null}(e,t,c,o===vF)
a=l
break}case SU:{const n=new EQ(c)
if(n.artwork=Nu(e,H(t,kD),{useCase:9,cropCode:"sr"}),n.type=mG,(0,bg.isSome)(n.artwork))a=n
else{let r=se(t,FE)
r=r.filter(t=>!tt(e,t,76532))
const o=[],s=[]
r.forEach(t=>{o.push(t.id)
const n=ju(e,t,{useCase:9})
i(n)&&s.push(n)}),n.collectionAdamIds=o,n.collectionAppIcons=s,a=n}break}}if(r(a))return null
if(a instanceof EQ&&null!=a.collectionAdamIds&&a.collectionAdamIds.length){const e=a.collectionAdamIds.length
a.artworkGridType=e<=5?"extraLarge":e<=8?sB:e<=16?LP:EB}const l=Tf(e,t,a.title,n)
return a.clickAction=Cu(e,t,l,null),gf(e,a,l),a})}(e,t,w.metricsOptions,g)
n&&(n.title&&(n.title=n.title.replace(/\n/g," ")),n instanceof EQ&&n.subtitle&&(n.subtitle=n.subtitle.replace(/\n/g," ")),p=n)}break
case jG:if(o(Mu(e,t)))return null
const d=gu(e,t,w)
d.theme=kj,Cr(e,d,f),p=new IQ(d)
break
default:if(delete t.attributes[TN],h===xj){const n=wu(e,t,w)
Cr(e,n,f),p=new CQ(n)}else{const n=yu(e,t,w,{showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}},f)
Cr(e,n,f)
const o=function(e,t,n,o,s,a){return Pg.context("appEventSearchResultFromData",()=>{if(!Or(e,t))return null
const{dataItems:c,personalizationData:u}=Er(e,t,s)
let d,f
for(const n of c){const r=Rr(e,n,t,a,o.offerEnvironment,o.offerStyle)
if(i(r)){d=r,f=null!=t?t:ie(e,n,Oj)
break}}if(r(d))return null
const p=l(t.meta,YE),h=new OQ
h.lockup=n,h.appEvent=d,h.alwaysShowAppEvent=p,h.clickAction=n.clickAction
const w=ef(null,null==u?void 0:u.processingType,null),g={...a,id:d.appEventId,kind:wv,targetType:KL,title:d.title,softwareType:null,recoMetricsData:w}
return i(f)&&(g.relatedSubjectIds=[f.id]),gf(e,h,g),h})}(e,t,n,w,a,c)
i(o)?(p=o,p.condensedBehavior=rG):p=new bQ(n)}}return i(p)&&r(p.condensedBehavior)&&(p.condensedBehavior=g),p})}function Pr(e,t,n,r,o,s){if(!Or(e,t))return!1
const{dataItems:a}=Er(e,t,s)
let c
for(const n of a)if(c=Rr(e,n,t,o,void 0,void 0),i(c))break
const l=!(!i(n)||!i(n[t.id]))&&n[t.id],u=!(!i(r)||!i(r[t.id]))&&["downloadable"].includes(r[t.id])
return(l||u)&&i(c)}function br(e,t){switch(t){case vF:return vF
case rG:return rG
case"when-installed":return _P
default:return Ir(e)}}function Ir(e){return e.client.deviceType===Bj?_P:rG}function Cr(e,t,n){const o=function(e,t,n,o){var i
if(r(t)||!e.client.isPhone)return null
const a=null===(i=null==t?void 0:t.displayStyle)||void 0===i?void 0:i.metadataPrecedenceOrder
if(!s(a))return null
const c=a.indexOf(n),l=a.indexOf(o)
return-1===c&&-1===l?null:-1!==c&&(-1===l||c<l)}(e,n,xN,aF)
i(o)&&(t.isEditorsChoice=t.isEditorsChoice&&o)}function kr(e,t){return t===Vj?tH:null}function Or(e,t){if(!Oi(e)||r(t.meta))return!1
const n=c(t.meta,zE).length>0
return![g$,Xx,SU,_j,RU,jG,xj].includes(t.type)&&n}function Er(e,t,n){const r=l(t.meta,YE),o=c(t.meta,zE)
if(r)return{dataItems:[o[0]]}
const i=mr(e,sj,o,!1,n,!1,void 0,t.id),s=i.personalizedData
return s.length<=0?{dataItems:[]}:{dataItems:s,personalizationData:i}}function Rr(e,t,n,o,i,s){const a=Bi(e,t,n,!1,!0,i,s,!1,!1,{...o,targetType:KL},!1,!0,null,!1,!1)
return r(a)||a instanceof Date?null:a}function Dr(e,t,n){const r=n&&n[t]
return e&&t&&e===t&&!r}function _r(e,t,n,s,a,c,l,u,d,f,p,h){const w=o(c),g=Mr(e,t,n,a,c,l)
if(r(g))return null
const m={platform:t.mediaPlatformUsedForDisplayStyle,style:g}
if(Vr(e,`[${n}] tentatively resolved to: ${jr(m)}`),"DUP"===s){!function(e,t){switch(e){case"PI4":t.portraitScreenshots.length<=5&&t.portraitScreenshots.splice(0,4)
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
const r=Mr(e,t,n,a,null,l),o=function(e,t,n){switch(t){case"PV4":case"PI4":case"LI1":case"LV1":return!0
case"PV3":case"PI3":return 3===Gr(e,n)
case"PV2":case"PI2":return 2===Gr(e)
default:return!1}}(e,r,l),i=Pr(e,u,d,f,p,h)
return(o||i)&&w?(Vr(e,`[${n}] Organic Dupe would be full creative as ${r} so choosing tentative style for ad`),m):o&&!w&&$r(g,c)?(Vr(e,`[${n}] Organic Dupe would be a full creative, but ad is not the first so returning compatible style with first ${g}`),m):$r("TEXT",c)?(Vr(e,`[${n}] tentative style would not yield full creative for organic result so returning TEXT`),{style:"TEXT"}):(Vr(e,`[${n}] tentative style would not yield full creative for organic result and first style is not compatible with TEXT so skipping ad`),null)}return i(c)&&"TEXT"===c.style?(Vr(e,`[${n}] tentative style would be filtered since the first ad has style: ${jr(c)}, so returning TEXT`),{style:"TEXT"}):m}function Lr(e){return!!i(e)&&e===OL}function xr(e,t){const n=e.findIndex(e=>e.id===t)
return-1===n?null:n}function Mr(e,t,n,r,o,i){if(!r)return Vr(e,`[${n}] is not allowed to display media because of iAd configuration.`),"TEXT"
if(t.mediaPlatformUsedForDisplayStyle&&o&&o.mediaPlatform&&!t.mediaPlatformUsedForDisplayStyle.isEqualTo(o.mediaPlatform))return Vr(e,`[${n}] filtered because media is derived from: ${t.mediaPlatformUsedForDisplayStyle.mediaType}, but first ad media is derived from: ${o.mediaPlatform.mediaType}`),null
let a,c=null
if(s(t.videos)&&(c=t.videos[0].preview),s(c)&&c.isLandscape()&&$r("LV1",o))a="LV1"
else if(s(c)&&c.isPortrait()&&Lr(i)&&$r("PV4",o))a=s(t.portraitScreenshots)&&t.portraitScreenshots.length>=3?"PV4":s(t.portraitScreenshots)&&t.portraitScreenshots.length>=2?"PV3":s(t.portraitScreenshots)?"PV2":"PV1"
else if(s(c)&&c.isPortrait()&&$r("PV3",o))a=s(t.portraitScreenshots)&&t.portraitScreenshots.length>=2?"PV3":s(t.portraitScreenshots)?"PV2":"PV1"
else if(s(t.landscapeScreenshots)&&$r("LI1",o))a="LI1"
else if(s(t.portraitScreenshots)&&Lr(i)&&$r("PI4",o))a=t.portraitScreenshots.length>=4?"PI4":t.portraitScreenshots.length>=3?"PI3":t.portraitScreenshots.length>=2?"PI2":"PI1"
else if(s(t.portraitScreenshots)&&$r("PI3",o))a=t.portraitScreenshots.length>=3?"PI3":t.portraitScreenshots.length>=2?"PI2":"PI1"
else{if(!$r("TEXT",o))return Vr(e,`[${n}] filtered because we could not create a compatible style for the first style of: ${jr(o)}`),null
a="TEXT"}return 2===Gr(e,i)&&("PI3"===a?a="PI2":"PV3"===a&&(a="PV2")),a}function $r(e,t){if(r(t))return!0
let n=!0
switch(e){case"TEXT":n="TEXT"===t.style
break
case"LV1":case"LI1":n="LV1"===t.style||"LI1"===t.style
break
case"PI4":case"PI3":case"PI2":case"PI1":case"PV4":case"PV3":case"PV2":case"PV1":n="PI4"===t.style||"PI3"===t.style||"PI2"===t.style||"PI1"===t.style||"PV4"===t.style||"PV3"===t.style||"PV2"===t.style||"PV1"===t.style
break
default:n=!1}return n}function Fr(e){let t=null
const n=e.trailers[0]
let r=null
s(n)&&(n.videos.sort((e,t)=>rX(e.preview,t.preview)),r=n.videos,t=n.mediaPlatform)
const o=e.screenshots[0],i=[],a=[]
return s(o)&&(o.artwork.forEach(e=>{e.isPortrait()?i.push(e):a.push(e)}),t=o.mediaPlatform),{portraitScreenshots:i,landscapeScreenshots:a,videos:r,mediaPlatformUsedForDisplayStyle:t}}function Nr(e,t){let n=null
const r=d(H(e,EE),t)
return r&&r.length&&(n=JSON.parse(r)),n}function Br(e,t){return o(e)?"NOORGANIC":t?"DUP":"NORMAL"}function Ur(e,t,n,r){var o,a
const c=s(null===(a=null===(o=e.impressionMetrics)||void 0===o?void 0:o.fields)||void 0===a?void 0:a.pageCustomId),l=n&&!r&&!c
if(s(e.trailers)){const t=e.trailers.shift()
t.videos.sort((e,t)=>rX(e.preview,t.preview)),e.trailers.unshift(t)}let u,d=[],f=[]
if(s(e.screenshots)){const t=e.screenshots.shift()
t.artwork.forEach(e=>{e.isPortrait()?d.push(e):f.push(e)}),u=t.mediaPlatform}switch(t.style){case"PI4":if(e.trailers=null,f=null,e.screenshotsDisplayStyle=OL,l)if(d.length>5&&d.length<8){const e=d.splice(0,4),t=4-d.length,n=e.splice(e.length-t)
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
case"PV4":if(f=null,e.screenshotsDisplayStyle=OL,l)if(e.trailers[0].videos.splice(0,1),d.length>4&&d.length<7){const e=d.splice(0,3),t=3-d.length,n=e.splice(e.length-t)
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
if(s(p)){const t=new kV(p,u)
e.screenshots=[t]}else e.screenshots=null
return e}function Gr(e,t=null){return e.client.isPhone?Lr(t)?4:3:2}function jr(e){if(o(e))return""
let t=""
return e&&e.mediaPlatform&&(t=` derived from ${e.mediaPlatform.mediaType} media`),`${e.style}${t}`}function Vr(e,t){e.console.log(`[Ads] ${t}`),e.client.buildType===MF&&e.isAvailable(sV)&&i(e.ads.debugLog)&&(r(nX)&&i(e.ads.isNativeAdLoggingEnabled)&&(nX=e.ads.isNativeAdLoggingEnabled()),nX&&e.ads.debugLog(t))}function Hr(e,t,n,r,o){var i
if(!(n instanceof bQ||n instanceof OQ))return
const a=n.lockup,c=t.lockups[0]
if(c.adamId!==a.adamId)return
const l=new Set
if(s(c.screenshots))for(const e of c.screenshots[0].artwork)l.add(e.template)
if(s(c.trailers))for(const e of c.trailers[0].videos)l.add(e.preview.template)
if(s(a.screenshots)){const e=a.screenshots[0].artwork.filter(e=>!l.has(e.template))
a.screenshots[0]=new kV(e,a.screenshots[0].mediaPlatform)}if(s(a.trailers)){const e=a.trailers[0].videos.filter(e=>!l.has(e.preview.template))
a.trailers[0]=new az(e,a.trailers[0].mediaPlatform)}if((null===(i=null==r?void 0:r.displayStyle)||void 0===i?void 0:i.screenshots)===OL)switch(o){case"PV4":case"PI4":(e=>{const t=a.screenshots[0].artwork
if(t.length>=4)return
let n=4-t.length
const r=c.screenshots[0].artwork.slice().reverse()
for(const e of r){if(n<=0)return
a.screenshots[0].artwork.unshift(e),n-=1}})()}}function Wr(e,t,n,o,i,s,a,c){var l,u
const d=n.lockups[0]
if(d.adamId!==o.id)return
const f=t.find(e=>e.id===d.adamId)
Pr(e,o,i,s,a,c)||function(e,t){var n
let o=y(t.meta)
r(e)?null===(n=null==o?void 0:o.cppData)||void 0===n||delete n[h$]:(r(o)&&(o={}),r(o.cppData)&&(o.cppData={}),o.cppData[h$]=e),t.meta=o}(null===(u=null===(l=null==f?void 0:f.meta)||void 0===l?void 0:l.cppData)||void 0===u?void 0:u[h$],o)}function qr(e){return!!function(e){return e.host.clientIdentifier===eH||e.host.clientIdentifier===iH}(e)||e.host.platform===Mj}function zr(e,t){return s(H(t,TN))}function Yr(e,t,n,r,o=!0){if(!r.isAdvert)return void Kr(e,t,n,r)
let i
e.props.enabled(XB)?(n.searchAdOpportunity=function(e,t,n){const r=Xr(e,t,n),o=eo(r.instanceId,n)
return new mQ(r.instanceId,o,r)}(e,t,r.pageInformation),i=n.searchAdOpportunity.searchAd):(n.searchAd=Xr(e,t,r.pageInformation),i=n.searchAd)
const s=Rd(e,t)?Z$:ZD,a=no(0,r.pageInformation),c=q(t,QD),l=Y(t,rj)?BU:Wj,u=new JY(i.instanceId,t.id,c,s,RA,l,a)
n.clickAction=to(0,n.clickAction,u)
const d=new JY(i.instanceId,t.id,c,s,DA,l,a)
n.buttonAction=to(0,n.buttonAction,d),n.itemBackground="ad",n.offerDisplayProperties&&o&&(n.offerDisplayProperties=n.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,OB,"ad")),Y(t,"iad.format.userRating")||(n.rating=null,n.ratingCount=null),Kr(e,t,n,r)}function Jr(e){const t=l(H(e,TN),"passthroughAdInfo.deepLinkEligible"),n=l(e,"meta.passthroughAdInfo.deepLinkEligible")
return t||n}function Kr(e,t,n,o){const i=Af(e,t,n,Qd(e,t,n.icon,null),o,!0)
!function(e,t,n){var o,i,s,a,c
const l=null!==(i=null===(o=t.searchAdOpportunity)||void 0===o?void 0:o.searchAd)&&void 0!==i?i:t.searchAd
if(r(l))return
null===(s=t.clickAction)||void 0===s||s.actionMetrics.clearAll(),t.clickAction&&$f(e,t.clickAction,n,!0)
const u=n.pageInformation,d={actionType:"ad_transparency"};(null==u?void 0:u.iAdInfo)&&Object.assign(d,u.iAdInfo.clickFields)
const f=kf(e,t.adamId,Hj,d)
null!==(c=null===(a=null==u?void 0:u.iAdInfo)||void 0===a?void 0:a.shouldIncludeAdRotationFields)&&void 0!==c&&c&&f.includingFields.push(i$),l.transparencyAction.actionMetrics.addMetricsData(f)}(e,n,i),yf(e,n,i,i.pageInformation.iAdInfo)}function Zr(e){var t
return["MEDRIVER_","U","I",(null!==(t=null==e?void 0:e.artwork)&&void 0!==t?t:[]).length].join("")}function Qr(e,t){let n
const r=null==t?void 0:t.iAdInfo.placementType
if(i(r)&&e.props.enabled(XB))try{n=e.ads.getIdentifierForMissedOpportunity(r)}catch{n=e.random.nextUUID(),Vr(e,`Error: getIdentifierForMissedOpportunity threw exception. Assigned ${n}`)}else n=e.random.nextUUID(),Vr(e,`Error: placementType was null or empty. Assigned ${n}`)
const o=eo(n,t)
return new mQ(n,o)}function Xr(e,t,n){let o=uo(0,t);(r(o)||0===o.length)&&(o=e.random.nextUUID(),Vr(e,`Error: instanceId was null or empty. Assigned ${o}`))
const i=H(t,TN),s=q(t,"iad.impressionId"),a=q(t,"iad.privacy"),c=q(t,QD),l=new yQ(a)
l.title=e.adsLoc.string("IAD_PRIVACY_MARKER_BUTTON_TITLE")
const u=Rd(e,t)?Z$:ZD,d=Y(t,rj)?BU:Wj,f=no(0,n),p=new JY(o,t.id,c,u,"markerPress",d,f),h=eo(o,n),w=to(0,l,p)
return new vQ(o,i,h,s,w)}function eo(e,t){const n=null==t?void 0:t.baseFields.pageId,r=typeof n===vj?n:Mj
return{placed:{adInstanceId:e,pageIdentifier:r},pageEnter:{pageIdentifier:r},pageExit:{pageIdentifier:r},onScreen:{adInstanceId:e},offScreen:{adInstanceId:e},visible:{adInstanceId:e},completed:{adInstanceId:e}}}function to(e,t,n){const r=new bW(n),o=new MH([r,t])
return o.title=t.title,o}function no(e,t){const n=null==t?void 0:t.iAdInfo
if(r(n))return DB
const o=n.placementType
switch(o){case yU:return _A
case QB:return"searchAds"
case Dj:case WG:case bG:return _A
default:throw new Error(`This method should never be called with value: ${o}`)}}function ro(e,t){if(!qr(e))return!1
switch(t){case yU:const n=so(t)
return(0,Ig.isSome)(n)?e.bag.isSearchLandingAdsEnabled||e.bag.enabledAdPlacements.includes(n):e.bag.isSearchLandingAdsEnabled
case QB:return!0
case Dj:const o=so(t)
return!r(o)&&e.bag.enabledAdPlacements.includes(o)&&(0,Ig.isSome)(oo(e))
case WG:case bG:const i=so(t)
return!r(i)&&e.bag.enabledAdPlacements.includes(i)
default:return!1}}function oo(e){if(e.bag.todayAdMediumLockupScreenshotEnabled)return RL
if(e.bag.todayAdCondensedEnabled){if(!e.client.isPhone)return
return DL}return function(e){return!!e.client.isPhone&&"5pdfhju01"===xe(e,Rg.CondensedTodayAds)}(e)?DL:void 0}function io(e,t,n){var r,o,i,s,a
const c=e.bag.adPlacementTimeouts,l=.3
switch(t){case QB:return n?null:null!==(r=null==c?void 0:c["search-results-in-seconds"])&&void 0!==r?r:l
case yU:return n?null:null!==(o=e.bag.searchLandingAdFetchTimeout)&&void 0!==o?o:l
case Dj:return n?null!==(i=null==c?void 0:c["today-in-seconds"])&&void 0!==i?i:l:null
case WG:return n?null:null!==(s=null==c?void 0:c["product-page-ymal-in-seconds"])&&void 0!==s?s:l
case bG:return n?null:null!==(a=null==c?void 0:c["product-page-ymal-during-download-in-seconds"])&&void 0!==a?a:l
default:return l}}function so(e){switch(e){case QB:return bM
case yU:return IM
case Dj:return Dj
case WG:return"product-page-ymal"
case bG:return"product-page-ymal-during-download"
default:return}}function ao(e,t,n,o,s){var a,c,l
if(!qr(e)||r(s.iAdInfo))return
const u=co(n,o)
if((0,Ig.isNothing)(u))return
let d=null
if(typeof s.iAdInfo.pageFields.iAdMissedOpportunityReason===vj&&(d=s.iAdInfo.pageFields.iAdMissedOpportunityReason),(0,Ig.isNothing)(d)||0===d.length||d===sv||d===av)return
const f=[]
for(const e of t){if(e.contentType!==gj&&e.contentType!==NB)continue
const t=e.items
i(t)&&t.length>0&&f.push(...t)}if(f.length<=u)return
const p=f[u],h=p instanceof nz,w=p instanceof yY?p.media:null,g=i(w)&&w instanceof lY,m=i(w)&&w instanceof uY&&i(w.condensedAdLockupWithIconBackground.lockup.searchAdOpportunity),v=g&&i(w.mediumAdLockupWithScreenshotsBackground.lockup.searchAdOpportunity),y=h&&i(p.searchAdOpportunity)
m||v||y||(p.searchAdOpportunity=Qr(e,s),null===(a=p.searchAdOpportunity)||void 0===a||a.setMissedOpportunityReason(null!=d?d:eD),g?null===(c=p.searchAdOpportunity)||void 0===c||c.setTemplateType(Zr(w.mediumAdLockupWithScreenshotsBackground.screenshots[0])):null===(l=p.searchAdOpportunity)||void 0===l||l.setTemplateType(bB))}function co(e,t){var n
const r=(null!==(n={today:[{shelfIdentifier:Dj,adEligibleIndex:1}],productPageYMAL:[{shelfIdentifier:AN,adEligibleIndex:0}],searchLanding:[{shelfIdentifier:"R8802",adEligibleIndex:0}],searchResults:[{shelfIdentifier:bM,adEligibleIndex:0}]}[e])&&void 0!==n?n:[]).find(e=>e.shelfIdentifier===t)
return s(r)&&i(r.adEligibleIndex)?r.adEligibleIndex:void 0}function lo(e,t,n,o=null){var i,s
return!qr(e)||r(n)?null:new fX(e,t,fX.createInitialSlotInfos(e,t,null===(i=null==n?void 0:n.onDeviceAd)||void 0===i?void 0:i.positionInfo,o),n.iAdId,n.clientRequestId,void 0,null===(s=n.onDeviceAd)||void 0===s?void 0:s.positionInfo)}function uo(e,t){return q(t,oX)}function fo(e,t,n){s(null==t?void 0:t.attributes)&&(t.attributes[oX]=n)}function po(e,t,n,r){var i,a,c,l,u
const d=e.bag.adsOverrideLanguage
if(o(d)||o(t))return!0
let f=null===(i=t.meta)||void 0===i?void 0:i.resource
if(o(f)&&s(n)&&(f=null===(u=null===(l=null===(c=null===(a=null==n?void 0:n.appMetadata)||void 0===a?void 0:a.data)||void 0===c?void 0:c[0])||void 0===l?void 0:l.meta)||void 0===u?void 0:u.resource),o(f))return!1
if(q(f,"name.locale")!==d)return!1
const p=Ce(e,t,AG),h=Ce(e,f,"subtitle.locale")
if(s(p)&&h!==d)return!1
if("TEXT"===r){const n=q(t,cv)
if((0,Ig.isSome)(n)&&n!==XG){let r
const o=n
r=n===yj?HN:n
const i=Ce(e,t,r),a=Ce(e,f,o.concat(".locale"))
if(s(i)&&a!==d)return!1}}return!0}function ho(e,t){if((0,Ig.isNothing)(t))return
const n=so(t)
return(0,Ig.isNothing)(n)?void 0:e.bag.adPlacementEligibleSlotPositions[n]}function wo(e,t){return{incidents:[],iAdInfo:t}}function go(e,t){return r(t)||o(t.incidents)?null:t.incidents}function mo(e,t,n){var r,o
const i=uo(0,n);(0,Ig.isNothing)(i)||(yo(t,e.props.enabled(XB)?null:new sX(i,lv)),null===(r=null==t?void 0:t.iAdInfo)||void 0===r||r.setMissedOpportunity(e,tD,null===(o=null==t?void 0:t.iAdInfo)||void 0===o?void 0:o.placementType))}function vo(e,t,n){var r,s,a,c,l,u,d,f
if(o(null==n?void 0:n.failureReason))return
const p=null===(r=null==n?void 0:n.onDeviceAd)||void 0===r?void 0:r.instanceId,h=null===(s=null==t?void 0:t.iAdInfo)||void 0===s?void 0:s.placementType
switch(null==n?void 0:n.failureReason){case uv:i(p)&&yo(t,e.props.enabled(XB)?null:new sX(p,lv)),null===(a=null==t?void 0:t.iAdInfo)||void 0===a||a.setMissedOpportunity(e,tD,h)
break
case uC:i(p)&&yo(t,e.props.enabled(XB)?null:new sX(p,uC)),null===(c=null==t?void 0:t.iAdInfo)||void 0===c||c.setMissedOpportunity(e,tD,h)
break
case dv:i(p)&&yo(t,e.props.enabled(XB)?null:new sX(p,dv)),null===(l=null==t?void 0:t.iAdInfo)||void 0===l||l.setMissedOpportunity(e,tD,h)
break
case"noAdAvailable":null===(u=null==t?void 0:t.iAdInfo)||void 0===u||u.setMissedOpportunity(e,eD,h)
break
case"timeout":null===(d=null==t?void 0:t.iAdInfo)||void 0===d||d.setMissedOpportunity(e,"APSLA",h)
break
case dC:i(p)&&yo(t,e.props.enabled(XB)?null:new sX(p,dC)),null===(f=null==t?void 0:t.iAdInfo)||void 0===f||f.setMissedOpportunity(e,"NOLOC",h)}}function yo(e,t){r(e)||r(t)||e.incidents.push(t)}function Ao(e,t,n){if((0,Ig.isNothing)(t))return
const r=wt(n.pageInformation)
if(null===r)return
r.id=zd(n.id)
const o=Hd(n);(0,Ig.isSome)(o)&&(r[g_]=o),r[PU]=ej,r.typeDetails="iTunesStoreContent",r[E$]=tf(e,n,""),n.actionDetails&&(r[XN]=n.actionDetails),t.templateMediaEvent=function(e,t){const n={}
return Object.assign(n,t),n[zB]=rO,_f(e,n),Cf(0,new IH(n,[],[],Df(0,n),Rf(e,n)))}(e,r)
const i=y(r)
i[n$]=t.videoUrl,t.templateClickEvent=function(e,t,n,r){const o={}
Object.assign(o,r),o[zB]=WF,o[eO]=n,o[WA]=null
const i=[qF]
return _f(e,o),Cf(0,new IH(o,i,[],Df(0,o),Rf(e,o)))}(e,0,Hj,i)}function To(e,t){return l(t,aX)}function So(e,t,n,r,o){return Pg.context("createTodayBaseCard",()=>{const i=new yY,s=Zi(t,null==n?void 0:n.coercedCollectionTodayCardDisplayStyle),a=Po(e,t,s,n)
i.heading=a
const c=function(e,t,n){var r
let o=null
if((null==n?void 0:n.useOTDTextStyle)&&(o=null!==(r=q(t,"ofTheDayLabel"))&&void 0!==r?r:q(t,GG),(0,bg.isSome)(o)&&(o=o.replace(/\n/g,XL))),(0,bg.isNothing)(o)&&(o=Dd(e,t,Yj,!0)),(0,bg.isNothing)(o)){const e=bo(0,t)
o=(0,bg.isSome)(e)?q(e,Yj):null}return o}(e,t,n)
i.title=c
const l=Ce(e,t,[x$,Yj])
i.shortTitle=l
const u=function(e,t){return Nu(e,H(t,fy),{contentMode:Cg.scaleAspectFit,allowingTransparency:!0,useCase:17})}(e,t)
i.titleArtwork=u
const d=function(e,t){var n
const r=Wt(0,t)
if(Y(t,Pk)||r.suppressNoteShort)return null
let o=Dd(e,t,FB,!0)
if((0,bg.isNothing)(o)&&!r.suppressNoteTagline){const r=bo(0,t);(0,bg.isSome)(r)&&(o=null!==(n=Dd(e,r,WB))&&void 0!==n?n:uu(e,r))}return o}(e,t)
i.inlineDescription=d
const f=Ji(e,t,n,r,c)
return f.adSlotOverride=r.parsedCardCount,i.clickAction=function(e,t,n,r,o,i,s){var a
const c=i,l={cardType:n,franchise:q(t,GG)},u=To(0,t)
return u&&(l[wT]=u),c[XN]=l,(0,bg.isSome)(s)&&s(c),Eu(e,t,c,null!==(a=null==r?void 0:r.clientIdentifierOverride)&&void 0!==a?a:e.host.clientIdentifier,Zo(o.currentTodayItem),r)}(e,t,s,n,r,f,o),vf(e,i,f,a,s,To(0,t)),i.editorialDisplayOptions=function(e,t,n){const r=Wt(0,t),o=e.client.isPad&&(null==n?void 0:n.isHeroCard)
return{suppressTagline:z(t,Pk),suppressLockup:w(r.suppressLockup),showBadgeInSmallCards:w(r.showBadgeInSmallCards),useMaterialBlur:o||w(r.useMaterialBlur)}}(e,t,n),i})}function Po(e,t,n,o){var i,s
let a=null
if(null==o?void 0:o.useOTDTextStyle)a=o.isHorizontalShelfContext?q(t,GG):null
else if(function(e,t){let n=q(e,"ofTheDayIntent")
if((0,Ig.isNothing)(n))switch(Zi(e,null==t?void 0:t.coercedCollectionTodayCardDisplayStyle)){case tm.AppOfTheDay:n=om.AppOfTheDay
break
case tm.GameOfTheDay:n=om.GameOfTheDay}return n===om.AppOfTheDay||n===om.GameOfTheDay}(t,o))a=null!==(i=q(t,WE))&&void 0!==i?i:q(t,GG),r(a)&&n===tm.AppOfTheDay?a="FEATURED APP":r(a)&&n===tm.GameOfTheDay&&(a="FEATURED GAME")
else if(n===tm.AppEventCard){const n=bo(0,t);(0,bg.isSome)(n)&&(a=null!==(s=_d(e,t,PF,!0))&&void 0!==s?s:q(n,tG))}else a=q(t,GG)
return a}function bo(e,t){const n=se(t,wG)
if(1===(null==n?void 0:n.length))return n[0]
const r=Xi(0,t)
return 1===r.length?r[0]:null}function Io(e,t,n,r,o){return Pg.context("addArtworkMediaToBaseCard",()=>{if(Y(t,rb))return!1
const i=yn(e,t,r)
return!(0,bg.isNothing)(i)&&((0,bg.isSome)(o)&&Ao(e,null==i?void 0:i.videos[0],{pageInformation:o.pageInformation,locationTracker:o.locationTracker,id:t.id}),n.media=new eY(i.artworks,i.videos,i.cardArtLayouts,i.artworkLayoutsWithMetrics,rs(0,t,r)),n.style=is(i.joeColors,qN),n.clickAction instanceof xH&&(n.overlay=new gY(n.clickAction),n.style=cj),!0)})}function Co(e,t,n,r){return Su(e,t,{offerEnvironment:"ad",offerStyle:aB,metricsOptions:{pageInformation:r.pageInformation,locationTracker:r.locationTracker,isAdvert:!0,adSlotOverride:r.parsedCardCount,disableFastImpressionsForAds:!0},clientIdentifierOverride:n.clientIdentifierOverride,crossLinkSubtitle:n.crossLinkSubtitle,artworkUseCase:1,canDisplayArcadeOfferButton:n.canDisplayArcadeOfferButton},{allowsAutoPlay:!0,looping:!0,showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}},null,!1)}function ko(e,t,n){const r=n.reco_algoId
if(o(r)||o(e)||o(t[r]))return e
const i=e.map(e=>{var t
return{identifier:f(e.id),score:null!==(t=f(e,E_))&&void 0!==t?t:0}}),s=t[r],a=(0,fm.demoteByEngagements)(i,s),c=e.reduce((e,t)=>({...e,[t.id]:t}),{})
return a.map(e=>c[e.identifier.toString()])}function Oo(e,t){if(!s(t))return{}
const n=p(t,"data.engagementEvents.impression"),r={}
for(const e in n)if(s(e)){const t=c(n,e)
r[e]=t.map(e=>({adamIdentifier:f(e[jU]),timestamp:f(e.eventTimeMillis)}))}return r}function Eo(e){return e.bag.enableRecoOnDeviceReordering}function Ro(e){for(const t of e)switch(t.type){case pm.EditorialItem:case pm.EditorialItemGroup:return K(t.data)}return!1}function Do(e,t){if(!vr(e))return null
const n=new Set
for(const e of t){if(r(e.contents))continue
const t=e=>d(e,VF)
for(const r of e.contents)if(r.type===LB){const e=c(r.meta,fR)
for(const r of e){const e=t(r)
s(e)&&n.add(e.toString())}}else{const e=t(r)
s(e)&&n.add(e.toString())}}return yr(e,n)}function _o(e,t,n,r,o,i){var s
const a={useOTDTextStyle:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,isHeroCard:!1}
return a.useOTDTextStyle=null!==(s=w(t,"meta.personalizationData.isOfTheDay"))&&void 0!==s&&s,a.replaceIfAdPresent=w(t,ib),a.isAdEligible=n,a.currentRowIndex=r,a.metricsDisplayStyle=o,a.isHeroCard=i,a}function Lo(e,t){if(e.client.isPhone)return t.currentRowIndex}function xo(e,t,n){switch(t){case Bg.Grid:n%2==1&&e.currentRowIndex++
break
case Bg.Hero:0!==n&&(n-1)%2!=1||e.currentRowIndex++
break
case Bg.Standard:e.currentRowIndex++}}function Mo(e,t,n,r){if(e.client.isPad)t.currentRowMetricsDisplayStyle=nm.MediumCard
else switch(n){case Bg.Grid:t.currentRowMetricsDisplayStyle=nm.SmallCard
break
case Bg.Hero:t.currentRowMetricsDisplayStyle=0===r?nm.MediumCard:nm.SmallCard
break
case Bg.Standard:t.currentRowMetricsDisplayStyle=nm.MediumCard}}function $o(e,t){var n
if(t.type===_j)return Bg.Standard
let r
const o=Zt(t)
return K(o)&&(r=q(o,"editorialItemGroupDisplayStyle")),(0,Ig.isNothing)(r)&&(r=null!==(n=q(t,iG))&&void 0!==n?n:Bg.Standard),function(e,t){return!(0,Ig.isNothing)(t)&&(t!==Bg.Grid||e.client.isPhone)}(e,r)?r:Bg.Standard}function Fo(e){return e.adLocation===e.parsedCardCount||!(0,Ig.isNothing)(e.eligibleAdLocations)&&e.eligibleAdLocations.includes(e.parsedCardCount)}function No(e,t,n){var r
const o=Uo(e,t,n,()=>{var r,o,i
const s=[]
null===(r=n.pageInformation.iAdInfo)||void 0===r||r.updateContainerId(null===(o=n.pageInformation.iAdInfo)||void 0===o?void 0:o.containerIdForSlotIndex(null!==(i=n.parsedCardCount)&&void 0!==i?i:0))
const a=$o(e,t.data)
Mo(e,n,a,0)
const c=_o(0,t.data,Fo(n),Lo(e,n),n.currentRowMetricsDisplayStyle,!1)
c.baseMetricsOptions={recoMetricsData:Zo(t)}
const l=Go(e,n,c,t.data)
return(0,Ig.isNothing)(l)||(s.push(l),uf(n.locationTracker),n.parsedCardCount++,xo(n,a,0)),s})
if(o.contentsMetadata={type:pR,debugSectionTypeIndicatorColor:t.type===pm.EditorialItemGroup?G(yk):G(jk),groupDisplayStyle:Bg.Standard},!t.isFirstItemInModule){const e=Ko(0,t);(0,Ig.isSome)(e)&&(o.background=e.shelfBackground,(0,Ig.isSome)(null===(r=o.header)||void 0===r?void 0:r.configuration)&&(o.header.configuration.eyebrowColor=e.eyebrowColor,o.header.configuration.titleColor=e.titleColor,o.header.configuration.subtitleColor=e.subtitleColor))}return o}function Bo(e,t,n){var r
let o=!0
const i=Uo(e,t,n,()=>{var r,i,s,a,l,u,d
const f=[],p=Eo(e)&&null!==(r=(0,dm.asNumber)(t.data,"meta.personalizationData.displayEICount"))&&void 0!==r?r:100
let h=c(t.data.meta,fR);(0,Ig.isSome)(n.recoImpressionData)&&(h=ko(h,n.recoImpressionData,null!==(i=n.pageInformation.recoMetricsData)&&void 0!==i?i:{}))
const w=$o(e,t.data)
let g=0
for(const[r,i]of h.entries()){null===(s=n.pageInformation.iAdInfo)||void 0===s||s.updateContainerId(null===(a=n.pageInformation.iAdInfo)||void 0===a?void 0:a.containerIdForSlotIndex(null!==(l=n.parsedCardCount)&&void 0!==l?l:0)),Mo(e,n,w,g)
const c=_o(0,i,Fo(n),Lo(e,n),n.currentRowMetricsDisplayStyle,w===Bg.Hero&&0===r),d=Go(e,n,c,i)
if((0,Ig.isSome)(d)&&(f.push(d),uf(n.locationTracker),n.parsedCardCount++,xo(n,w,g),g++),c.isHeroCard&&(0,Ig.isNothing)(d)&&([KN,MF].includes(e.client.buildType)&&Pg.unexpectedType(EG,`Hero story group ${null===(u=t.data)||void 0===u?void 0:u.id} must contain a valid hero card at index ${r}. Unable to parse card ${i.id}.`,null),o=!1),r<h.length-1&&n.adPlacementBehavior===Gg.insertIntoShelf){const t=Vo(e,n,_o(0,n.adData,Fo(n),Lo(e,n),void 0,!1));(0,Ig.isSome)(t)&&(n.parsedCardCount++,xo(n,Bg.Standard,0),uf(n.locationTracker),f.push(t))}if(f.length===p)break}if(o){const n=3
f.length!==n&&([KN,MF].includes(e.client.buildType)&&Pg.unexpectedType(EG,`Hero story group ${null===(d=t.data)||void 0===d?void 0:d.id} must contain exactly ${n} items but only found ${f.length} items.`,null),o=!1)}return f})
let s=$o(e,t.data)
if(s!==Bg.Hero||o||(s=Bg.Standard),i.contentsMetadata={type:pR,debugSectionTypeIndicatorColor:G(yk),groupDisplayStyle:s},!t.isFirstItemInModule){const e=Ko(0,t);(0,Ig.isSome)(e)?(i.background=e.shelfBackground,(0,Ig.isSome)(null===(r=i.header)||void 0===r?void 0:r.configuration)&&(i.header.configuration.eyebrowColor=e.eyebrowColor,i.header.configuration.titleColor=e.titleColor,i.header.configuration.subtitleColor=e.subtitleColor)):s===Bg.Hero&&Array.isArray(i.items)&&(i.background=function(e){const t=e.map(e=>e.media.bestBackgroundColor()).filter(e=>(0,Ig.isSome)(e))
let n=null
if(t.length>0&&t.length<=4&&t.length===e.length)switch(t.length){case 1:n={type:uL,colors:{colorCount:"oneColor",color:t[0]}}
break
case 2:n={type:uL,colors:{colorCount:"twoColor",top:t[0],bottom:t[1]}}
break
case 3:n={type:uL,colors:{colorCount:"threeColor",top:t[0],bottomLeading:t[1],bottomTrailing:t[2]}}
break
case 4:n={type:uL,colors:{colorCount:"fourColor",topLeading:t[0],topTrailing:t[1],bottomLeading:t[2],bottomTrailing:t[3]}}}else n={type:NU,color:G("secondarySystemBackground")}
return n}(i.items))}return i}function Uo(e,t,n,r){const i=t.type===pm.EditorialItemGroup,s=new $z(NB)
if(s.id=t.data.id,s.isHorizontal=!1,s.header=function(e,t,n){var r
if(null!==(r=w(t.data,"meta.personalizationData.suppressHeader"))&&void 0!==r&&r)return null
const o={eyebrow:Ho(0,t),eyebrowArtwork:zo(e,t,im.Eyebrow),eyebrowArtworkType:Yo(e,t,im.Eyebrow),title:Wo(0,t),titleArtwork:zo(e,t,im.Title),titleArtworkType:Yo(e,t,im.Title),subtitle:qo(0,t),configuration:{eyebrowImageColor:null,titleImageColor:null,includeSeparator:!1}}
return(0,Ig.isSome)(o.eyebrow)||(0,Ig.isSome)(o.title)||(0,Ig.isSome)(o.subtitle)?o:null}(e,t),i){const r={id:s.id,kind:YO,softwareType:null,targetType:tj,title:Wo(0,t,!0),pageInformation:n.pageInformation,locationTracker:n.locationTracker,idType:aj,recoMetricsData:Zo(t)}
t.type===pm.EditorialItemGroup&&(r[mT]=d(t.data,tb),r[gT]=d(t.data,nb)),gf(e,s,r),rf(e,r,r.title)}return s.items=r(),s.isHidden=o(s.items),i&&(sf(n.locationTracker),uf(n.locationTracker)),s}function Go(e,t,n,r){var o,a
let c
if(t.adPlacementBehavior===Gg.replaceOrganic&&i(n.replaceIfAdPresent)&&w(n.replaceIfAdPresent)){const o=Vo(e,t,n)
c=s(o)?o:zi(e,r,n,t)}else if(t.adPlacementBehavior===Gg.dropAd&&i(n.replaceIfAdPresent)&&!w(n.replaceIfAdPresent)){if(c=zi(e,r,n,t),s(t.adData)){const n=t.adIncidentRecorder
null===(o=null==n?void 0:n.iAdInfo)||void 0===o||o.setMissedOpportunity(e,sv,null===(a=null==n?void 0:n.iAdInfo)||void 0===a?void 0:a.placementType)}}else c=zi(e,r,n,t)
return c}function jo(e,t){let n=null
if(!ro(e,Dj)||(0,Ig.isNothing)(t.adData)||t.adPlacementBehavior!==Gg.insertIntoShelf)return n
if(t.adLocation!==t.parsedCardCount)return n
n=new $z(NB),n.id=t.adData.id,n.isHorizontal=!1,n.contentsMetadata={type:pR,debugSectionTypeIndicatorColor:G(jk),groupDisplayStyle:Bg.Standard}
const r=[],o=Vo(e,t,_o(0,t.adData,Fo(t),Lo(e,t),void 0,!1))
return(0,Ig.isSome)(o)&&(t.parsedCardCount++,xo(t,Bg.Standard,0),uf(t.locationTracker),r.push(o)),n.items=r,s(n.items)?n:null}function Vo(e,t,n){var o,s,a
if(!ro(e,Dj))return null
if(t.adLocation!==t.parsedCardCount&&t.adPlacementBehavior!==Gg.replaceOrganic)return null
null===(o=t.pageInformation.iAdInfo)||void 0===o||o.updateContainerId(null===(s=t.pageInformation.iAdInfo)||void 0===s?void 0:s.containerIdForSlotIndex(null!==(a=t.parsedCardCount)&&void 0!==a?a:0))
const c=function(e,t,n,o,s){return Pg.context("createTodayAdCard",()=>{var a,c,l
if(r(t))return null
const u=So(e,t,o,s)
Yi(e,t,o,s,d(t.attributes.name))
const f=Tf(e,t,d(t.attributes.name),{targetType:NB,pageInformation:s.pageInformation,locationTracker:s.locationTracker,isAdvert:!0,rowIndex:o.currentRowIndex,displayStyle:o.metricsDisplayStyle}),p=Fe(e,t)
f.productVariantData=p,f.adSlotOverride=s.parsedCardCount,f.kind=KE
const h=f
let w
f.pageInformation.iAdInfo.apply(e,t),i(o)&&(w=o.clientIdentifierOverride),u.style=kj,oo(e)===DL&&(null===(a=f.pageInformation.iAdInfo)||void 0===a||a.setTemplateType(bB))
let g=Co(e,t,o,s)
if(r(g))return mo(e,n,t),Ki(s),vf(e,u,f,null,null,!1,!1),null
switch(e.props.enabled(XB)?null===(c=g.searchAdOpportunity)||void 0===c||c.setTemplateType(bB):null===(l=g.searchAd)||void 0===l||l.setTemplateType(bB),oo(e)){case DL:const n=new WY(g,g.icon)
u.media=new uY(n),u.media.impressionMetrics=g.impressionMetrics
break
case RL:if(u.media=function(e,t,n,r,o){var i,s,a
const c=t.screenshots[0],l=Zr(c)
null===(i=r.iAdInfo)||void 0===i||i.setTemplateType(l),e.props.enabled(XB)?null===(s=t.searchAdOpportunity)||void 0===s||s.setTemplateType(l):null===(a=t.searchAd)||void 0===a||a.setTemplateType(l)
const u=ju(e,o,{useCase:0,withJoeColorPlaceholder:!0,overrideTextColorKey:nL})
let d=u.backgroundColor,f=u.textColor
const p={type:eU,red:1,green:1,blue:1}
V(p,d)?(d=f,f=void 0):V(p,f)&&(f=void 0)
const h=new HY(t,[c],n,f,d,8)
return new lY(h)}(e,g,e.bag.todayAdMediumLockupScreenshotAnimationEnabled,f.pageInformation,t),g=Co(e,t,o,s),r(g))return null
g.searchAdOpportunity=u.media.mediumAdLockupWithScreenshotsBackground.lockup.searchAdOpportunity,g.searchAd=u.media.mediumAdLockupWithScreenshotsBackground.lockup.searchAd,u.media.mediumAdLockupWithScreenshotsBackground.lockup=g,u.media.impressionMetrics=g.impressionMetrics
break
default:return null}Ki(s)
const m=Jr(t)
return u.clickAction=Cu(e,t,h,w,void 0,m),function(e,t,n,o){let i=uo(0,t);(r(i)||0===i.length)&&(i=e.random.nextUUID(),Vr(e,`Error: instanceId was null or empty. Assigned ${i}`))
const s=Rd(e,t)?Z$:ZD,a=no(0,o.pageInformation),c=q(t,QD),l=Y(t,rj)?BU:Wj,u=new JY(i,t.id,c,s,RA,l,a)
n.clickAction=to(0,n.clickAction,u)}(e,t,u,f),vf(e,u,f,null,null,!1,!1),u})}(e,t.adData,t.adIncidentRecorder,n,t)
return(0,Ig.isSome)(c)?c:null}function Ho(e,t){const n=Wt(0,t.data)
if(t.isFirstItemInModule||n.suppressHeaderBadge)return null
let r
const o=Zt(t.data)
if(K(o)&&(r=q(o,lR)),(0,Ig.isSome)(r))return r
switch(t.data.type){case _j:r=q(t.data,lR)
break
case LB:r=q(t.data,[xU,PF])}return r}function Wo(e,t,n=!1){const r=Wt(0,t.data)
if((t.isFirstItemInModule||r.suppressHeaderName)&&!n)return null
let o
const i=Zt(t.data)
if(K(i)&&(o=q(i,cR)),(0,Ig.isSome)(o))return o
switch(t.data.type){case _j:o=q(t.data,cR)
break
case LB:o=q(t.data,[xU,Yj])}return o}function qo(e,t){const n=Wt(0,t.data)
if(t.isFirstItemInModule||n.suppressHeaderTagline)return null
let r
const o=Zt(t.data)
if(K(o)&&(r=q(o,uR)),(0,Ig.isSome)(r))return r
switch(t.data.type){case _j:r=q(t.data,uR)
break
case LB:r=q(t.data,[xU,WB])}return r}function zo(e,t,n){var r
const o=Wt(0,t.data),i=ie(e,t.data,lL),s=null!==(r=o.headerArtworkBehavior)&&void 0!==r?r:rm.NoArtwork
switch(n){case im.Eyebrow:return s===rm.CategoryArtworkWithBadge?Jo(e,i):null
case im.Title:switch(s){case rm.CategoryArtworkWithTitle:return Jo(e,i)
case rm.ContentArtworkWithTitle:return ju(e,i,{useCase:1})
default:return null}default:return null}}function Yo(e,t,n){const r=ie(e,t.data,lL),o=q(t.data,[_F,"headerArtworkBehavior"])
switch(n){case im.Eyebrow:return o===rm.CategoryArtworkWithBadge&&(0,Ig.isSome)(Jo(e,r))?Ug.Category:null
case im.Title:switch(o){case rm.CategoryArtworkWithTitle:return(0,Ig.isSome)(Jo(e,r))?Ug.Category:null
case rm.ContentArtworkWithTitle:return(0,Ig.isSome)(Jo(e,r))?Ug.Icon:null
default:return null}default:return null}}function Jo(e,t){const n=Hn(e,t,!1,!1,!1)
return(0,Ig.isNothing)(n)?null:Nu(e,n,{useCase:20,allowingTransparency:!0,cropCode:"sr"})}function Ko(e,t){const n=H(t.data,sb,null),r=null==n?void 0:n[PU]
if((0,Ig.isNothing)(r))return null
let o=null
if(r===sm.LinearGradient){const e=h(n).stops.map(e=>F(e.color)),t={type:"gradient",colors:e,start:Ng.Top,end:Ng.Bottom},r=U(e[0]),i={type:eU,red:60/255,green:60/255,blue:67/255,alpha:.6},s={type:eU,red:235/255,green:235/255,blue:245/255,alpha:.6}
o={shelfBackground:t,eyebrowColor:r?s:i,titleColor:G(r?cj:LC),subtitleColor:r?s:i}}else o=null
return o}function Zo(e){var t,n
return(0,Ig.isNothing)(e)?{}:null!==(n=ef(null!==(t=p(e.moduleMetadata,LO))&&void 0!==t?t:{},e.moduleMetadata.onDevicePersonalizationProcessingType,null))&&void 0!==n?n:{}}function Qo(e,t,n,r=null,o=null){var i
const s=d(n,lX)
if((0,bg.isNothing)(s))return null
const a=JSON.parse(s),c=fX.placementTypeFromPlacementId(e,d(a,MN)),l=new fX(e,c,fX.createInitialSlotInfos(e,c,r,o),null!==(i=d(a,FN))&&void 0!==i?i:void 0,void 0,void 0,r)
return l.applyClickFieldsFromPageRequest(null!=t?t:void 0,a),l}function Xo(e,t,n,r){const o=af(r.locationTracker),i={impressionIndex:o,id:o.toString(),idType:fj,name:t.displayName,impressionType:n,parentId:MP}
t.impressionMetrics=new EH(i)}function ei(e,t,n,r,o,s){var a,c,l
const u=null!==(a=h(r,um.pageInformation,{}))&&void 0!==a?a:{},f=h(r,um.timingValues),p=d(r,um.requestedUrl)
let w
const g=u
if(g.pageType=t,g.pageId=n,o&&(g[YF]=o),t===wB){const t=_(e,r)
if((0,bg.isSome)(t)){const n=q(t,Yj),r=q(t,EU)
g[YF]=`${r}_${n}`,Rd(e,t)&&(g[l$]=oj),w=Fe(e,t)}}else t===Mk?g[YF]=`${t}_${n}`:t===dU?g[YF]=uT:t===u$&&n===u$&&(g[YF]=`${t}_${n}`)
const m=new pX(null!==(c=Jd(g))&&void 0!==c?c:{})
null!==f&&(m.timingMetrics=f,(0,bg.isSome)(p)&&(m.pageUrl=p)),i(w)&&(m.productVariantData=w)
const v=null!=s?s:Qo(e,n,r)
return(0,bg.isSome)(v)&&(m.iAdInfo=v),m.recoMetricsData=null!==(l=$(r))&&void 0!==l?l:void 0,m}function ti(e,t,n,r,o){var i
const s=new pX({pageType:t,pageId:n,page:`${t}_${n}`,pageDetails:r})
if(o){const t=fX.placementTypeFromPlacementId(e,d(o,MN))
s.iAdInfo=new fX(e,t,fX.createInitialSlotInfos(e,t,null,null),null!==(i=d(o,FN))&&void 0!==i?i:void 0),s.iAdInfo.applyClickFieldsFromPageRequest(n,o)}return s}function ni(e,t,n,o,i){if(r(n))return
t.pageMetrics.pageFields=wt(n),t.pageMetrics.addManyInstructions(fi(e,n,o)),t.pageMetrics.addData(li(e,n,o,i),[Mg.PageInvocationPoint.pageEnter]),t.pageMetrics.addData(function(e,t,n){const r=li(e,t,n)
return r.fields[zB]=XA,r}(e,n,o),[Mg.PageInvocationPoint.pageExit]),t.pageMetrics.pageRenderFields=di(e,n,o),t.pageRenderMetrics=di(e,n,o),function(e){return!(e instanceof fQ||e instanceof cQ||e instanceof uQ)}(t)&&t.pageMetrics.addData(ui(e,n,o),[Mg.PageInvocationPoint.backButton])
const s=e.fetchTimingMetricsBuilder;(0,bg.isSome)(s)&&s.decorate(t)}function ri(e,t){return new pX({pageType:fU,pageId:t,page:`${fU}_${t}`})}function oi(e,t,n,r){const o={pageId:s$,pageType:dU}
r&&(o[hX]=r)
const i=new pX(o)
return i.pageUrl=n,i}function ii(e,t,n,r,i,a,c,l,u){const d=ei(e,dU,a,n)
return d.searchTermContext=r,d.searchTerm=r.term,d.pageUrl=i,u&&(d.guidedSearch=function(e,t,n){const r={}
if(s(t.guidedSearchTokens)&&(r.searchSelectedGuidedFacets=t.guidedSearchTokens),n&&n.finalTerm&&(r.searchGuidedFinalQuery=n.finalTerm),!o(r))return r}(0,t,u)),qr(e)&&null!=c&&(d.iAdInfo=new fX(e,QB,fX.createInitialSlotInfos(e,QB,null,null),c.iAdId,c.appStoreClientRequestId,l)),d}function si(e,t,n,r,o,s){let a="",c=""
switch(t){case cm.AppEvent:a=`${n}_${r}`,c=WL
break
case cm.ContingentOffer:case cm.OfferItem:a=`${n}`,c="OfferDetails"}const l={pageId:a,pageType:c}
i(o)&&(l[$x]=o[Oj],l[tF]=o[gM])
const u=new pX(l)
return u.recoMetricsData=null!=s?s:void 0,u}function ai(e,t){if(r(t)||r(t.pageMetrics))return
const n=t.pageMetrics.instructions
if(!r(n))for(const e of n)e.data.fields[zB]===Jj&&e.data.includingFields.push(tO)
let o=null
if(t instanceof XY?o=t:t instanceof AJ&&(o=t.lockup),o){const e=[]
if(o.buttonAction instanceof $H)e.push(o.buttonAction)
else if(o.buttonAction instanceof FH&&o.buttonAction.buyAction instanceof $H)e.push(o.buttonAction.buyAction)
else if(o.buttonAction instanceof NH&&o.buttonAction.completionAction instanceof $H)e.push(o.buttonAction.completionAction)
else if(o.buttonAction instanceof GH){if(o.buttonAction.buyAction instanceof $H&&e.push(o.buttonAction.buyAction),o.buttonAction.defaultAction instanceof $H&&e.push(o.buttonAction.defaultAction),o.buttonAction.openAction instanceof $H&&e.push(o.buttonAction.openAction),o.buttonAction.subscribePageAction instanceof Bq&&o.buttonAction.subscribePageAction.page===xC&&(0,bg.isSome)(o.buttonAction.subscribePageAction.pageUrl)&&o.buttonAction.subscribePageAction.pageUrl.length>0){const e=xq.from(o.buttonAction.subscribePageAction.pageUrl)
e.param(Aq.includePostSubscribeAttribution,zG),o.buttonAction.subscribePageAction.pageUrl=e.build()}o.buttonAction.subscribePageAction instanceof Bq&&o.buttonAction.subscribePageAction.pageData instanceof kY&&o.buttonAction.subscribePageAction.pageData.purchaseSuccessAction instanceof $H&&e.push(o.buttonAction.subscribePageAction.pageData.purchaseSuccessAction)}for(const t of e)t.purchaseConfiguration&&(t.purchaseConfiguration.excludeAttribution=!1)}}function ci(e){Object.keys(e).filter(e=>!gX.has(e)).forEach(t=>delete e[t])}function li(e,t,n,r){var o,s,a,c,l
const u=pi(t,n)
t.iAdInfo&&Object.assign(u,t.iAdInfo.pageFields),i(t.offerReleaseDate)&&(u[vO]=Je(t.offerReleaseDate))
const d=t.searchTermContext
d&&(u[OG]=d.term,d.suggestedTerm&&(u.searchSuggestedTerm=d.suggestedTerm),d.correctedTerm&&(u.searchCorrectedTerm=d.correctedTerm),d.originatingTerm&&(u[TO]=d.originatingTerm)),t.guidedSearch&&Object.assign(u,t.guidedSearch)
const f=function(e,t,n,r,o,i){const s={}
Object.assign(s,o),s[zB]=Jj,r&&(s[qA]=r.clientCorrelationKey,s.requestStartTime=r.requestStartTime,s.responseStartTime=r.responseStartTime,s.responseEndTime=r.responseEndTime)
const a=[qF,s_]
return n&&a.push("crossfireReferralCandidate"),_f(e,s),Cf(0,new IH(s,a,[],Df(0,s),Rf(e,s,null,i)))}(e,0,null!==(o=t.isCrossfireReferralCandidate)&&void 0!==o&&o,t.timingMetrics,u,r),p=null!==(a=null===(s=t.iAdInfo)||void 0===s?void 0:s.iAdIsPresent)&&void 0!==a&&a,h=null!==(l=null===(c=t.iAdInfo)||void 0===c?void 0:c.shouldIncludeAdRotationFields)&&void 0!==l&&l
return p&&h&&f.includingFields.push(i$),f}function ui(e,t,n){return function(e,t){const n={}
return Object.assign(n,t),n[TF]=SF,kf(e,SF,Hj,n)}(e,pi(t,n))}function di(e,t,n){const r=pi(t,n)
return t.searchTermContext&&(r[OG]=t.searchTermContext.term),t.baseFields&&Object.assign(r,t.baseFields),function(e,t,n){const r={}
return Object.assign(r,n),r[zB]=zA,t&&(r[eF]||(r[eF]=t.pageURL),r[qA]=t.clientCorrelationKey,r.platformRequestStartTime=t.requestStartTime,r.platformResponseStartTime=t.responseStartTime,r.platformResponseEndTime=t.responseEndTime,r.platformResponseWasCached=t.responseWasCached,r.platformJsonParseStartTime=t.parseStartTime,r.platformJsonParseEndTime=t.parseEndTime),_f(e,r),r}(e,t.timingMetrics,r)}function fi(e,t,n){var r,s,a
const c=pi(t,n)
t.searchTermContext&&(c[OG]=t.searchTermContext.term)
const l=y(c)
t.iAdInfo&&Object.assign(l,t.iAdInfo.impressionsFields),t.guidedSearch&&Object.assign(l,t.guidedSearch)
const u=i(t.iAdInfo),d=o(null===(r=t.iAdInfo)||void 0===r?void 0:r.missedOpportunityReason)&&e.client.isPad,f=[{data:Ef(e,l,u&&d,null!==(a=null===(s=t.iAdInfo)||void 0===s?void 0:s.shouldIncludeAdRotationFields)&&void 0!==a&&a,!0),invocationPoints:[Mg.PageInvocationPoint.appExit,Mg.PageInvocationPoint.pageExit]}]
if(u){const n=function(e,t,n){var r,o
const s=i(n.iAdInfo)&&e.client.isPad&&((0,bg.isNothing)(n.iAdInfo.missedOpportunityReason)||0===n.iAdInfo.missedOpportunityReason.length),a=null!==(o=null===(r=n.iAdInfo)||void 0===r?void 0:r.shouldIncludeAdRotationFields)&&void 0!==o&&o,c=[],l=Ef(e,t,s,a,!1).fields
if(l[r$]=nO,null!==n&&i(n.iAdInfo)){const e=n.iAdInfo.fastImpressionsEventVersion
l[o$]=e,c.push(o$),5===e&&(l.viewableArea="excludingTabBar",delete l[MN])}const u=["fastImpressions",qF,s_]
return s&&u.push(a_),a&&u.push(i$),Cf(0,new IH(l,u,c,Df(0,l),Rf(e,l,n)))}(e,l,t)
f.push({data:n,invocationPoints:[Mg.PageInvocationPoint.appExit,Mg.PageInvocationPoint.pageExit,Mg.PageInvocationPoint.timer]})}return f}function pi(e,t){const n={}
return i(e.offerType)&&(n[Ux]=e.offerType),void 0!==t&&n&&t(n),n}function hi(e,t,n,r,o){let i
switch(t){case R$:i=Fj
break
case SF:i=SF
break
case oD:i=iD}const s={targetType:Hj,actionType:i,targetId:t,idType:void 0,location:tf(e,{pageInformation:n,locationTracker:r,targetType:Hj,id:t},null!=o?o:t)}
return kf(e,t,Hj,s)}function wi(e,t,n,r,o){let i
switch(t){case R$:i=Fj
break
case SF:i=SF
break
case oD:i=iD}const s={targetType:Hj,actionType:i,targetId:t,idType:void 0,location:tf(e,{pageInformation:n,locationTracker:r,targetType:Hj,id:t},null!=o?o:t)}
return kf(e,t,Hj,s)}function gi(e,t,n){if((0,Ig.isNothing)(t))return null
const r=t.match(/P(\d+)([A-Z]+)/)
if(!r||3!==r.length)return null
let o=f(r[1]),i=r[2]
return o&&i?("D"===i&&o>0&&o%7==0&&(i="W",o/=7),new mX(o,null!=n?n:1,i)):null}function mi(e,t){const n=c(t,Yk)[0]
if(!n)return null
const r=d(n,SN),o=f(n,PN),i=d(t,SN),s=f(t,PN)
if(!r||!i)return null
const a=d(n,$T),l=gi(0,r,o),u=gi(0,i,s),p=d(n,cB).replace(/ /g,"\xa0"),h=d(t,cB).replace(/ /g,"\xa0")
let w=vi(e,u.type,u.periodDuration,h)
switch(w=w.replace(/\//g,"\u2060/\u2060"),a){case FT:const t=yi(e,l.type,l.periodDuration*l.periodCount)
if(t&&w)return e.loc.string("InAppOfferPage.Description.FreeTrialTemplate").replace(MO,t).replace($O,w)
break
case NT:const n=yi(e,l.type,l.periodDuration*l.periodCount)
if(n&&w)return e.loc.string("InAppOfferPage.Description.PaidUpFrontTemplate").replace(MO,n).replace("@@trialPrice@@",p).replace($O,w)
break
case BT:const r=vi(e,l.type,l.periodDuration,p),o=yi(e,l.type,l.periodDuration*l.periodCount)
if(o&&w)return e.loc.string("InAppOfferPage.Description.PaidTrialTemplate").replace("@@trialPriceDuration@@",r).replace(MO,o).replace($O,w)
break
default:return null}return null}function vi(e,t,n,r){let o
switch(t){case"D":o=1===n?e.loc.string("InAppOfferPage.Description.PriceDuration.Days.one").replace(bN,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.PriceDuration.Days",n)
break
case"W":o=1===n?e.loc.string("InAppOfferPage.Description.PriceDuration.Weeks.one").replace(bN,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.PriceDuration.Weeks",n)
break
case"M":o=1===n?e.loc.string("InAppOfferPage.Description.PriceDuration.Months.one").replace(bN,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.PriceDuration.Months",n)
break
case"Y":o=1===n?e.loc.string("InAppOfferPage.Description.PriceDuration.Years.one").replace(bN,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.PriceDuration.Years",n)}return o.replace("@@price@@",r)}function yi(e,t,n){switch(t){case"D":return 1===n?e.loc.string("InAppOfferPage.Description.DurationCount.Days.one").replace(bN,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.DurationCount.Days",n)
case"W":return 1===n?e.loc.string("InAppOfferPage.Description.DurationCount.Weeks.one").replace(bN,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.DurationCount.Weeks",n)
case"M":return 1===n?e.loc.string("InAppOfferPage.Description.DurationCount.Months.one").replace(bN,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.DurationCount.Months",n)
case"Y":return 1===n?e.loc.string("InAppOfferPage.Description.DurationCount.Years.one").replace(bN,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.DurationCount.Years",n)}return null}function Ai(e,t){var n,r,i
const s=ie(e,t,bF)
if((0,bg.isNothing)(s))return
const a=At(e,s),c=p(s,mM)
if(o(a)||o(c))return
const l=null===(n=Ti(e,d(a,SN),f(a,PN),d(a,cB)))||void 0===n?void 0:n.replace("/","/\u2060"),u=null===(r=Ti(e,d(c,SN),f(c,PN),d(c,cB)))||void 0===r?void 0:r.replace("/","/\u2060")
if(o(l)||o(u))return null
const h=q(t,Yj),w={"@@discountedPrice@@/@@recurringSubscriptionPeriod@@":u,"@@regularPrice@@/@@recurringSubscriptionPeriod@@":l,"@@discountedPricePerRecurringSubscriptionPeriod@@":u,"@@regularPricePerRecurringSubscriptionPeriod@@":l}
let g=null!=h?h:""
Object.keys(w).forEach(e=>{g=g.replace(e,w[e])})
const m=g.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,""),v=new NV(g,AU,mv),y=null!==(i=q(t,HN))&&void 0!==i?i:"",A=e.loc.string("ContingentOffer.Description.Format"),T={"@@BranchName@@":q(s,Yj),"@@RegularPrice@@":l,"@@DiscountedPrice@@":u}
let S=A
return Object.keys(T).forEach(e=>{S=S.replace(e,T[e])}),{title:v,rawTitle:m,description:[S,y].join(" ")}}function Ti(e,t,n,r){const o=gi(0,t,n)
if(!(0,bg.isNothing)(o)&&!(0,bg.isNothing)(r))return vi(e,o.type,o.periodDuration,r)}function Si(e,t,n,r){const o=gi(0,t,n)
return(0,bg.isNothing)(o)||(0,bg.isNothing)(r)?null:vi(e,null==o?void 0:o.type,null==o?void 0:o.periodDuration,r)}function Pi(e){switch(e.type){case Uj:return cm.AppEvent
case _U:return cm.ContingentOffer
case YU:return cm.OfferItem
default:return null}}function bi(e){switch(e.type){case Uj:return KL
case _U:case YU:return pC
default:return null}}function Ii(e){switch(e.type){case Uj:return wv
case _U:return"contingentPriceOffer"
case YU:return"winbackPriceOffer"
default:return null}}function Ci(e,t,n,s,a,c,l,u,w,g,m,v,y,A,T){const S=Pi(t),P={...g,targetType:bi(t)}
switch(S){case cm.AppEvent:return Bi(e,t,n,s,a,c,l,u,w,P,m,v,y,A,T)
case cm.ContingentOffer:return function(e,t,n,s,a,c,l,u){var d,f,w
if(t.type!==_U)return null
const g=_i(e,t,qL)
if(r(g))return null
const m=U(g.backgroundColor)?kj:NG,v=q(t,PF),y=q(t,AG),A=q(t,GG),T=e.loc.string("ContingentOffer.AdditionalInfoButton.Title")
if((0,bg.isNothing)(v)||(0,bg.isNothing)(A))return null
const S=ie(e,t,bF)
if((0,bg.isNothing)(S)||o(p(S,mM)))return null
const P=Ai(e,t)
if((0,bg.isNothing)(P)||(0,bg.isNothing)(null==P?void 0:P.title))return null
const b=ie(e,t,QL),I=Y(b,OM),C=xi(e,t,b,"",s,a,!1,c,l,null,u,!0)
if((0,bg.isNothing)(C))return null
const k=ie(e,t,gC)
let O;(0,bg.isSome)(k)&&(0,bg.isSome)(y)&&(null==y?void 0:y.length)>0&&(O=null!==(d=_i(e,k,Nj))&&void 0!==d?d:Di(e,k,Nj)),(0,bg.isSome)(y)&&(null==y?void 0:y.length)>0&&(O=null!==(f=function(e,t){var n,r
const o=h(t,"meta.associations.trunks")
if((0,bg.isNothing)(o))return null
const i=o.data[0]
if(null!==(r=null===(n=null==i?void 0:i.meta)||void 0===n?void 0:n[mC])&&void 0!==r&&r){const t=be(e,i,vC)
return(0,bg.isNothing)(t)?null:Nu(e,t,{useCase:1,style:IF})}return null}(e,t))&&void 0!==f?f:O)
const E=function(e,t,n){const r=AM+q(n,Yj)+TM,o=q(n,HN)+XL,i=AM+e.loc.string("ContingentOffer.Terms.Title")+TM,s=q(t,EM)
return new NV([r,o,i,s].join(XL),AU)}(e,t,S),R=new sQ(g,m,I,T,P.title,null!=y?y:void 0,null!==(w=P.description)&&void 0!==w?w:void 0,A,v,E,null!=O?O:void 0,C)
return R.title=P.rawTitle,i(b)&&(R.clickAction=$i(e,t,b,R,c,l)),R}(e,t,0,c,l,P,v,A)
case cm.OfferItem:return function(e,t,n,s,a,c,l,u){var h,w,g,m,v,y
if(t.type!==YU)return null
const A=q(t,tG)
if("resubscription"!==A&&A!==ex)return null
const T=NG,S=ie(e,t,CF)
if((0,bg.isNothing)(S))return null
const P=p(S,VR),b=At(e,S)
if((0,bg.isNothing)(P))return null
const I=null!==(h=null!=n?n:ie(e,t,Oj))&&void 0!==h?h:ie(e,S,Oj),C=Y(I,OM),k=q(t,sD)
if((0,bg.isNothing)(k)||!function(e){if((0,bg.isNothing)(e)||o(e))return!1
const t=new Date(e)
if(r(t))return!1
const n=new Date
return!(t.getTime()<=n.getTime())}(k))return null
const O=new Date(k)
let E=function(e,t){if((0,bg.isNothing)(t))return null
const n=Ke(t),o=new Date,i=(a=n,r(s=o)||r(a)?null:Math.floor((a.getTime()-s.getTime())/864e5))
var s,a
if((0,bg.isNothing)(i))return null
const c=function(e,t){var n,r
return(null===(n=Ke(e))||void 0===n?void 0:n.getTime())===(null===(r=Ke(t))||void 0===r?void 0:r.getTime())}(o,t)
if(i>90)return e.loc.string(yv)
if(i>5){const n=o.getFullYear()!==t.getFullYear()?e.loc.string("OfferItems.FormattedDate.NextYear.DateFormat"):e.loc.string("OfferItems.FormattedDate.FiveDaysOrMore.DateFormat"),r=e.loc.uppercased(e.loc.formatDate(n,t))
return(0,bg.isNothing)(r)?null:e.loc.string("OfferItems.FormattedDate.FiveDaysOrMore.Title").replace(Av,r)}return i>1?e.loc.string("OfferItems.FormattedDate.FiveDaysOrLess.Title").replace(bN,e.loc.formattedCount(i)):1!==i||c?e.loc.string("OfferItems.FormattedDate.Today.Title"):e.loc.string("OfferItems.FormattedDate.Tomorrow.Title")}(e,O);(0,bg.isNothing)(E)&&(E=e.loc.string(yv))
let R=ju(e,S,{useCase:3,withJoeColorPlaceholder:!0,overrideTextColorKey:CM})
o(R)&&(R=ce(e,yC,200,200,{type:eU,red:0,green:0,blue:0,alpha:1}),R.style=vN)
const D=gi(0,d(P,SN),f(P,PN)),_=(0,bg.isSome)(D)?yi(e,D.type,D.periodDuration*D.periodCount):void 0,L=null===(w=Si(e,d(b,SN),f(b,PN),d(b,cB)))||void 0===w?void 0:w.replace("/","/\u2060"),x=null===(g=Si(e,d(P,SN),f(P,PN),d(P,cB)))||void 0===g?void 0:g.replace("/","/\u2060"),M=e.loc.string(vv),$={"@@redemptionDate@@":e.loc.formatDate(M,O),"@@skuName@@":null!==(m=q(S,Yj))&&void 0!==m?m:"@@skuName@@","@@discountedPrice@@":null!=x?x:"@@discountedPrice@@","@@regularPricePerDuration@@":null!=L?L:"@@regularPricePerDuration@@","@@discountDuration@@":null!=_?_:"@@discountDuration@@","@@payUpfrontPrice@@":null!==(v=d(P,cB))&&void 0!==v?v:"@@payUpfrontPrice@@"},F=q(t,PF)
if((0,bg.isNothing)(F))return null
const N=Ni(q(t,JG),$),B=new NV(N,AU,mv),U=Ni(q(t,AG),$),G=Ni(null!==(y=q(t,aD))&&void 0!==y?y:"",$)
let j
if(i(I)&&(j=xi(e,t,I,"",s,a,!1,c,l,null,u,!0)),(0,bg.isNothing)(j))return null
const V=new lQ(null,null,T,C,B,E,U,G,F,O,R,j)
return V.title=N,i(I)&&(V.clickAction=$i(e,t,I,V,c,l)),V}(e,t,n,c,l,P,v,A)
default:return null}}function ki(e,t,n,o,a,c,l,u){const d=Pi(t),f={...a,targetType:bi(t)}
switch(d){case cm.AppEvent:return function(e,t,n,o,a,c,l,u){const d=function(e,t,n,o,a,c,l,u){var d,f
const p=Di(e,t,zU),h=Li(e,t,DU,!0,!0),w=y(o),g=null!==(d=null==h?void 0:h.preview)&&void 0!==d?d:p
let m=kj,v=!0,A=!1
i(g)&&(v=U(g.backgroundColor),A=U(g.backgroundColor,10),m=v?kj:NG)
const T=si(0,cm.AppEvent,t.id,n.id,l,null!==(f=a.recoMetricsData)&&void 0!==f?f:null),S={...a,pageInformation:T,locationTracker:{rootPosition:0,locationStack:[]},targetType:WL},P={...S,id:n.id,inAppEventId:t.id,relatedSubjectIds:[n.id]}
w.notificationConfig=Mi(e,t,o,P,!1)
const b=function(e,t,n,r){var o,s
const a=q(t,Sj)
if((0,Ig.isNothing)(a)||0===a.length)return null
const c=null!==(o=n.moduleArtwork)&&void 0!==o?o:null===(s=n.moduleVideo)||void 0===s?void 0:s.preview
let l=e.loc.string(pv)
l===pv&&(l=n.subtitle)
const u=function(e,t,n,r,o,i){return Pg.context("shareSheetDataForAppEvent",()=>{const e=new _V(t,n,i)
return new MV(e,r,void 0)})}(0,n.title,l,a,0,c)
if(!i(u))return null
const d=function(e,t,n){var r
const o=[]
if((null==n?void 0:n.length)>0){const t=fs(e,n)
i&&o.push(t)}if(t.startDate.getTime()<=Date.now())return o
if(e.host.clientIdentifier===iH)return o
const s=new XH(hj)
s.title=e.loc.string("APP_EVENTS_CALENDAR_NOT_AUTHORIZED_TITLE"),s.message=e.loc.string("APP_EVENTS_CALENDAR_NOT_AUTHORIZED_DETAIL"),s.isCancelable=!0,s.buttonTitles=[e.loc.string(tv)],s.buttonActions=[new xH("prefs:root=Privacy&path=CALENDARS",!0)]
let a=!1
if(i(t.endDate)){const e=Ke(t.startDate),n=Ke(t.endDate),r=t.endDate.getTime()-t.startDate.getTime(),o=216e5
n.getTime()>e.getTime()&&r>o&&(a=!0)
const i=8634e4
e.getTime()===n.getTime()&&r>=i&&(a=!0)}const c=new AW(t.startDate,t.endDate,a,t.title,null===(r=t.lockup)||void 0===r?void 0:r.title,t.detail,n,s,tC)
c.title=e.loc.string("SHARE_SHEET_ADD_TO_CALENDAR"),c.artwork=ce(e,"systemimage://calendar.circle")
const l=new eW("com.apple.AppStore.createCalendarEventActivity",c)
return o.unshift(l),o}(e,n,a),f=new tW(u,d)
return $f(e,f,{...r,targetType:ij,actionType:SM,idType:aj}),f}(e,t,o,P),I=v?kj:NG,C=xi(e,t,n,w.title,I,aB,!1,S,c,l,!1,!1)
if(r(C))return null
w.lockup=C
const k=new oQ(w,p,h,b,m,A)
return ni(e,k,T,e=>{s(l)&&TH.shared.addReferralContextToMetricsFieldsIfNecessary(e)}),k}(e,t,n,o,a,l,u),f=new Bq("appEventDetail")
return f.title=o.title,f.pageData=d,f.animationBehavior=c,a&&a.pageInformation&&(f.referrerUrl=a.pageInformation.pageUrl),f}(e,t,n,o,f,c,l,u)
case cm.ContingentOffer:return function(e,t,n,o,a,c,l,u){const d=function(e,t,n,o,a,c,l,u){var d,f
const p=_i(e,t,zU),h=y(o)
let w=kj,g=!0
i(p)&&(g=U(p.backgroundColor),w=g?kj:NG)
const m=si(0,cm.ContingentOffer,t.id,n.id,l,null!==(d=a.recoMetricsData)&&void 0!==d?d:null),v={...a,pageInformation:m,locationTracker:{rootPosition:0,locationStack:[]}},A=g?kj:NG,T=xi(e,t,n,null!==(f=h.title)&&void 0!==f?f:void 0,A,aB,!1,v,c,l,!1,!1)
if(r(T))return null
h.offerLockup=T,h.trunkAppIcon=o.trunkAppIcon
const S=new cQ(h,null!=p?p:void 0,w)
return S.backButtonActionMetrics.addMetricsData(hi(e,SF,m,v.locationTracker)),S.learnMoreActionMetrics.addMetricsData(hi(e,R$,m,v.locationTracker,o.learnMoreTitle)),S.closeButtonActionMetrics.addMetricsData(hi(e,oD,m,v.locationTracker)),ni(e,S,m,e=>{s(l)&&TH.shared.addReferralContextToMetricsFieldsIfNecessary(e)}),S}(e,t,n,o,a,l,u),f=new Bq("contingentOfferDetail")
return f.title=o.title,f.pageData=d,f.animationBehavior=c,a&&a.pageInformation&&(f.referrerUrl=a.pageInformation.pageUrl),f}(e,t,n,o,f,c,l,u)
case cm.OfferItem:return function(e,t,n,o,i,a,c,l){const u=function(e,t,n,o,i,a,c,l){var u,d
let f=_i(e,t,zU)
f=null
const p=kj,h=y(o),w=si(0,cm.OfferItem,t.id,n.id,c,null!==(u=i.recoMetricsData)&&void 0!==u?u:null),g={...i,pageInformation:w,locationTracker:{rootPosition:0,locationStack:[]}},m=kj,v=xi(e,t,n,null!==(d=h.title)&&void 0!==d?d:void 0,m,aB,!1,g,a,c,!1,!1)
if(r(v))return null
h.offerLockup=v
const A=e.loc.string("Winback.AdditionalInfoButton.Title"),T=ie(e,t,CF),S=q(t,sD)
let P;(0,bg.isSome)(S)&&(0,bg.isSome)(T)&&(P=function(e,t,n,r){if((0,bg.isNothing)(n))return
const o=q(n,Yj),i=(0,bg.isSome)(o)?AM+o+TM:void 0,s=q(n,HN),a=(0,bg.isSome)(s)?s+XL:void 0,c=AM+e.loc.string("Promotion.Terms.Title")+TM
let l
const u=e.loc.string(vv)
if((0,bg.isSome)(o)&&(0,bg.isSome)(r)){const n={"@@redemptionDate@@":e.loc.formatDate(u,r),"@@skuName@@":o}
l=Ni(q(t,EM),n)}const d=[i,a,c,l].filter(bg.isSome).join(XL)
return new NV(d,AU)}(e,t,T,new Date(S)))
const b=new uQ(h,void 0,void 0,p,!1,A,P)
return b.backButtonActionMetrics.addMetricsData(wi(e,SF,w,g.locationTracker)),b.learnMoreActionMetrics.addMetricsData(wi(e,R$,w,g.locationTracker,A)),b.closeButtonActionMetrics.addMetricsData(wi(e,oD,w,g.locationTracker)),ni(e,b,w,e=>{s(c)&&TH.shared.addReferralContextToMetricsFieldsIfNecessary(e)}),b}(e,t,n,o,i,c,l),d=new Bq("offerItemDetail")
return d.title=o.title,d.pageData=u,d.animationBehavior=a,i&&i.pageInformation&&(d.referrerUrl=i.pageInformation.pageUrl),d}(e,t,n,o,f,c,l,u)
default:return null}}function Oi(e){return e.bag.enableAppEvents&&!0}function Ei(e){return e.bag.enableContingentOffers&&!0}function Ri(e){return e.bag.enableOfferItems&&(e.featureFlags.isEnabled("winback_offers")||e.featureFlags.isEnabled("winback_offers_2024"))&&!0}function Di(e,t,n){const r=H(t,n)
return(0,Ig.isNothing)(r)?null:Nu(e,r,{useCase:0,withJoeColorPlaceholder:!0,cropCode:"sr"})}function _i(e,t,n){const r=Re(e,t)
if((0,Ig.isNothing)(r))return null
const o=we(t,r,n)
return(0,Ig.isNothing)(o)?null:Nu(e,o,{useCase:0,withJoeColorPlaceholder:!0,cropCode:"sr"})}function Li(e,t,n,o,i){const s=Di(e,t,`${n}.previewFrame`)
if(r(s))return null
const a=q(t,`${n}.video`)
if(r(a))return null
const c=new JV(a,s,{allowsAutoPlay:!0,looping:!0,canPlayFullScreen:o,showPlaybackControls:!1,playbackControls:i?{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0}:{},autoPlayPlaybackControls:i?{muteUnmute:!0}:{}})
return c.canPlayFullScreen=o,c.allowsAutoPlay=!0,c.looping=!0,c}function xi(e,t,n,i,s,a,c,l,u,d,f,p){var h,w,g,m
if((0,Ig.isNothing)(t)||(0,Ig.isNothing)(n))return null
const v=Pi(t),y={...l,id:t.id,relatedSubjectIds:[n.id],idType:aj},A={...l,id:n.id,relatedSubjectIds:[n.id],targetType:ij,idType:aj,kind:null,softwareType:null,title:null!==(h=q(n,Yj))&&void 0!==h?h:"",excludeAttribution:o(d)}
if(v===cm.AppEvent&&(y[ZL]=t.id,A[ZL]=t.id),(m=l)&&Object.prototype.hasOwnProperty.call(m,"id")&&(y.id=l.id,y.idType=l.idType),p){const n=v===cm.ContingentOffer?null===(w=Ai(e,t))||void 0===w?void 0:w.rawTitle:q(t,Yj)
rf(e,y,null!=n?n:"")}const T=q(t,hC),S={metricsOptions:A,artworkUseCase:1,externalDeepLinkUrl:null!=T?T:void 0,crossLinkSubtitle:c?i:void 0,offerEnvironment:s,offerStyle:a,skipDefaultClickAction:!u,includeBetaApps:!0,referrerData:null!=d?d:void 0,shouldHideArcadeHeader:e.featureFlags.isEnabled(k$)&&f,parentAppData:n,useJoeColorIconPlaceholder:!0,overrideArtworkTextColorKey:CM},P=wu(e,v===cm.AppEvent?n:t,S)
return p&&sf(l.locationTracker),r(P)?null:(c&&(P.crossLinkTitle=null!==(g=e.loc.uppercased(P.title))&&void 0!==g?g:void 0),P)}function Mi(e,t,n,r,o){if(n.startDate.getTime()<=Date.now())return null
if((0,Ig.isNothing)(n.lockup))return null
const i=e.loc.string("APP_EVENTS_NOTIFICATION_TITLE").replace("{appTitle}",n.lockup.title),s=e.loc.string("APP_EVENTS_NOTIFICATION_DETAIL").replace("{eventTitle}",n.title),a=n.startDate,c=n.lockup.icon,l=n.lockup.icon.template.replace("{w}",`${c.width}`).replace("{h}",`${c.height}`).replace("{c}","wd").replace("{f}",nD)
let u,d
if(o&&(u=new XH(O$),u.title=e.loc.string("APP_EVENTS_NOTIFICATION_TOAST_TITLE"),u.message=e.loc.string("APP_EVENTS_NOTIFICATION_TOAST_DETAIL"),u.artwork=ce(e,gv)),e.bag.newEventsForODJAreEnabled){const o=new aW,i=wt(r.pageInformation)
i[TF]="notifyActivateNotificationsDisabled",i[E$]=tf(e,{...r,id:t.id},""),i[kM]=""
const s=kf(e,n.lockup.adamId,ij,i)
o.actionMetrics.addMetricsData(s),d=o}else{const t=new XH(hj)
t.title=e.loc.string("APP_EVENTS_NOTIFICATION_NOT_AUTHORIZED_TITLE"),t.message=e.loc.string("APP_EVENTS_NOTIFICATION_NOT_AUTHORIZED_DETAIL"),t.isCancelable=!0,t.buttonTitles=[e.loc.string(tv)],t.buttonActions=[new xH("prefs:root=NOTIFICATIONS_ID&path=com.apple.AppStore",!0)],d=t}const f=new XH(hj)
f.title=e.loc.string("APP_EVENTS_NOTIFICATION_FAILURE_TITLE"),f.message=e.loc.string("APP_EVENTS_NOTIFICATION_FAILURE_DETAIL"),f.isCancelable=!0
const p=(new xq).set(BB,EW).param(Aq.appId,n.lockup.adamId).param(Aq.bundleId,n.lockup.bundleId).param(Aq.appEventId,n.appEventId)
p.host=gq
const h=q(t,hC);(0,Ig.isSome)(h)&&(null==h?void 0:h.length)>0&&p.param(Aq.appEventDeepLink,encodeURIComponent(h))
const w=wt(r.pageInformation)
w[TF]="notifyActivate",w[E$]=tf(e,{...r,id:t.id},"")
const g=kf(e,n.lockup.adamId,ij,w),m=y(w)
m[TF]="notifyDeactivate"
const v=kf(e,n.lockup.adamId,ij,m)
return new iQ(t.id,i,s,l,a,u,d,f,p.build(),g,v)}function $i(e,t,n,r,o,i){const s=ki(e,t,n,r,o,lG,i,null)
if((0,Ig.isNothing)(s))return
const a={id:t.id,actionDetails:{action:"Open",contentType:bi(t)},relatedSubjectIds:[n.id],...o}
return Pi(t)===cm.AppEvent&&(a[ZL]=t.id),$f(e,s,a),s}function Fi(e,t,n=null,o,s,a,c,l,u,d){var f
const p=[]
let h
for(const w of t){const t=Ci(e,w,n,o,!0,NG,lG,s,!1,a,c,l,null,u,d)
if(r(t))continue
if(t instanceof Date){((0,Ig.isNothing)(h)||t.getTime()<h.getTime())&&(h=t)
continue}const g=t,m={...a,id:w.id,kind:Ii(w),targetType:bi(w),title:null!==(f=g.title)&&void 0!==f?f:"",softwareType:null},v=null!=n?n:ie(e,w,Oj)
i(v)&&(m.relatedSubjectIds=[v.id]),gf(e,g,m),uf(m.locationTracker),p.push(g)}return{appPromotions:p,nextAppEventPromotionStartDate:h}}function Ni(e,t){let n=null!=e?e:""
return Object.keys(t).forEach(e=>{n=n.replace(e,t[e])}),n}function Bi(e,t,n,r,a,c,l,u,d,f,p,h,w,g,m){var v,y,A
if(t.type!==Uj)return null
const T=q(t,"promotionStartDate")
if((0,Ig.isNothing)(T)||0===T.length)return null
const S=new Date(T)
if((0,Ig.isNothing)(S))return null
const P=new Date
if(S.getTime()>P.getTime()&&!m)return S
const b=Di(e,t,qL),I=Li(e,t,"lockupVideo",!1,!1)
if((0,Ig.isNothing)(b)&&o(I))return null
const C=null!==(v=null==I?void 0:I.preview)&&void 0!==v?v:b,k=U(null==C?void 0:C.backgroundColor)?kj:NG,O=U(null==C?void 0:C.backgroundColor,10),E=q(t,Yj)
let R=q(t,tG)
s(w)&&(R=w)
const D=q(t,zL)
if((0,Ig.isNothing)(E)||0===E.length||(0,Ig.isNothing)(R)||0===R.length||(0,Ig.isNothing)(D)||0===D.length)return null
const _=new Date(D)
if((0,Ig.isNothing)(_))return null
const L=null!==(y=q(t,HN))&&void 0!==y?y:"",x=null!=n?n:ie(e,t,Oj)
let M=null
if(i(x)){if(M=xi(e,t,x,E,c,l,u,f,h,null,g,!0),(0,Ig.isNothing)(M))return null}else if(!d)return null
const $=q(t,"requirement"),F=q(t,AG),N=q(t,YL)
let B
if((0,Ig.isSome)(N)&&N.length>0&&(B=new Date(N)),void 0!==B&&B.getTime()<=P.getTime()&&!p)return null
const G=Gi(e,Ui(null!==(A=q(t,JL))&&void 0!==A?A:void 0,_,B),_,B),j=new rQ(t.id,null!=b?b:void 0,null!=I?I:void 0,E,null!=F?F:void 0,L,_,B,R,null!=$?$:void 0,M,r,G,k,O)
if(i(x)){const n={...f,id:x.id,inAppEventId:t.id,relatedSubjectIds:[x.id]}
j.notificationConfig=Mi(e,t,j,n,!0)}return a&&i(x)&&(j.clickAction=$i(e,t,x,j,f,h)),j}function Ui(e,t,n){let r=null!=e?e:"live"
return"live"===r&&i(n)&&n.getTime()-t.getTime()>216e5&&(r="happening"),r}function Gi(e,t,n,r){const o=[],i=Ke(n)
if((0,Ig.isNothing)(i))return[]
const s=e.loc.string("AppEvents.FormattedDate.SevenDaysOrMore.DateFormat"),a=e.loc.uppercased(e.loc.formatDate(s,n)),c=new tQ(!1,void 0,null!=a?a:void 0,void 0,void 0)
o.push(c)
const l=new Date(i)
l.setDate(l.getDate()-6)
const u=e.loc.string("AppEvents.FormattedDate.SixDaysOrLess.DateFormat"),d=e.loc.formatDate(u,n),f=e.loc.uppercased(d),p=new tQ(!1,l,null!=f?f:void 0,void 0,void 0)
o.push(p)
const h=new Date(i)
h.setDate(h.getDate()-1)
const w=e.loc.string("AppEvents.FormattedDate.Tomorrow"),g=e.loc.formatDateInSentence(w,hv,n),m=e.loc.uppercased(g),v=new tQ(!1,h,null!=m?m:void 0,void 0,void 0)
if(o.push(v),n.getHours()>1||1===n.getHours()&&n.getMinutes()>0){let t
t=n.getHours()>=19?e.loc.string("AppEvents.FormattedDate.Tonight"):e.loc.string("AppEvents.FormattedDate.Today")
const r=e.loc.formatDateInSentence(t,hv,n),s=e.loc.uppercased(r),a=new tQ(!1,null!=i?i:void 0,null!=s?s:void 0,void 0,void 0)
o.push(a)}const y=new Date(n)
let A
y.setHours(y.getHours()-1),A="available"===t?"AppEvents.FormattedDate.AvailableIn.MinutesCountdown":"AppEvents.FormattedDate.StartsIn.MinutesCountdown"
const T=new tQ(!1,y,void 0,n,A)
let S,P
switch(o.push(T),t){case"available":S=e.loc.string("AppEvents.FormattedDate.NowAvailable"),P=!1
break
case"happening":S=e.loc.string("AppEvents.FormattedDate.HappeningNow"),P=!1
break
default:S=e.loc.string("AppEvents.FormattedDate.Live"),P=!0}const b=new tQ(P,n,S,void 0,void 0)
if(o.push(b),null!==r){const t=new tQ(!1,r,e.loc.string("AppEvents.FormattedDate.EventEnded"),void 0,void 0)
o.push(t)}return o}function ji(e,t,n,r,o){const i=Wt(0,r)
if((0,Ig.isSome)(i.suppressLockup)&&i.suppressLockup)return null
let s=null
const a=(0,Ig.isSome)(o)&&1===o.length,c=(0,Ig.isSome)(o)&&o.length>1
return a?s=new fY(o[0]):c&&(s=new hY(o)),s}function Vi(e,t,n,r,o,i,s){if(!Y(o,iR))return
let a=zf(e,o);(0,bg.isNothing)(a)&&(0,Ig.isSome)(i)&&(a=Yf(0,i.arcadeUpsellEditorialResponse))
const c=function(e,t,n,r,o,i,s){if(!function(e){const t=e.host.platform
return t===OU||t===vU}(e))return null
Hi(e,t,n,r)
const a=as(),c=Pu(e,i,s,FI,a,NB)
return new vY(c)}(e,o,t,n,0,a,s)
if(c){t.overlay=c,t.impressionMetrics.fields[pT]=!0
const r=Hi(e,o,t,n)
t.style!==r&&(t.style=r)}}function Hi(e,t,n,r){const o=!r.enableListCardToMultiAppFallback,i=yn(e,t,r),s=is(null==i?void 0:i.joeColors)
return o?n.style:s}function Wi(e,t,n,r,o){return Pg.context("createTodaySingleAppCard",()=>{const s=So(e,t,n,r)
Yi(e,t,n,r)
const a=Io(e,t,s,n,r),c=Xi(0,t),l=Qi(e,c,n,r.pageInformation,r.locationTracker,NB,null,at(0,t)),u=ji(0,0,0,t,l)
return i(u)&&u instanceof wY&&(u.style=cj),s.overlay=u,a||1!==c.length||qi(e,t,s,c,n,r)?(Vi(e,s,n,Zi(t,n.coercedCollectionTodayCardDisplayStyle),t,o,r),Ki(r),s):(Ki(r),null)})}function qi(e,t,n,r,o,i){if(1!==r.length)return!1
o.useJoeColorIconPlaceholder=!0,n.style=kj
const s=as(0,n.style),a=Qi(e,r,o,i.pageInformation,i.locationTracker,cs(n.style),s,at(0,t))
if(1!==a.length)return!1
const c=a[0]
return n.media=new tY(c.icon),!0}function zi(e,t,n,a,c){return Pg.catchingContext("todayCardFromData",()=>{const u=Zi(t,n.coercedCollectionTodayCardDisplayStyle),d=Kt(e,t);(0,Ig.isSome)(d)&&(function(e,t,n,r){if("com.apple.visionproapp"===n||"VisionAppStore"===n)return!0
const o=Xi(0,t),i=Zi(t,r.coercedCollectionTodayCardDisplayStyle)
if(!new Set([tm.AppEventCard,tm.Grid,tm.InAppPurchase,tm.List,tm.NumberedList,tm.River,tm.ShortImage,tm.SingleApp]).has(i))return!1
if(o.length>=6&&i===tm.Grid)return!1
const s=ts(0,i)
return!(!Y(t,rb)&&ns(e,H(t,s),r.prevailingCropCode)||function(e,t){if(1===t.length){const e=t[0]
if(e.type===jG)return e}return null}(0,o))}(e,t,d,n)?n.clientIdentifierOverride=d:n.clientIdentifierOverride=null),n.crossLinkSubtitle=us(e,t)
let f=null
switch(u){case tm.AppOfTheDay:case tm.GameOfTheDay:f=function(e,t,n,r,i){return Pg.context("createTodayBrandedCard",()=>{const s=So(e,t,n,r)
Yi(e,t,n,r)
const a=yn(e,t,n)
if(!((0,bg.isSome)(a)&&(0,bg.isSome)(a.joeColors.bgColor)&&(a.artworks.length>0||a.videos.length>0)))return Ki(r),Wi(e,t,n,r)
s.style=is(null==a?void 0:a.joeColors,qN)
const c=as(0,s.style),l=Xi(0,t),u=Qi(e,l,n,r.pageInformation,r.locationTracker,cs(s.style),c,at(0,t),!0)
if(o(u)||1!==u.length)return Ki(r),null
n.isHorizontalShelfContext||(s.overlay=ji(0,0,0,t,u))
const d=u[0]
return s.media=new nY(d.icon,a.artworks,a.videos,a.cardArtLayouts,a.artworkLayoutsWithMetrics,rs(0,t,n)),s.media.impressionMetrics=d.impressionMetrics,Vi(e,s,n,Zi(t,n.coercedCollectionTodayCardDisplayStyle),t,i,r),Ki(r),s})}(e,t,n,a,c)
break
case tm.Video:f=function(e,t,n,r,o){return Pg.context("createTodayVideoCard",()=>{const i=So(e,t,n,r)
Io(e,t,i,n,r),Yi(e,t,n,r)
const s=as(0,i.style),a=Xi(0,t),c=Qi(e,a,n,r.pageInformation,r.locationTracker,NB,s,at(0,t)),l=ji(0,0,0,t,c)
return i.overlay=l,Vi(e,i,n,Zi(t,n.coercedCollectionTodayCardDisplayStyle),t,o,r),Ki(r),i})}(e,t,n,a,c)
break
case tm.FullBleedImage:f=function(e,t,n,r,o){return Pg.context("createTodayFullBleedImageCard",()=>{const i=So(e,t,n,r)
if(Yi(e,t,n,r),!Io(e,t,i,n,r))return Ki(r),null
const s=Xi(0,t),a=as(0,i.style),c=Qi(e,s,n,r.pageInformation,r.locationTracker,cs(i.style),a,at(0,t)),l=ji(0,0,0,t,c)
return i.overlay=l,Vi(e,i,n,Zi(t,n.coercedCollectionTodayCardDisplayStyle),t,o,r),Ki(r),i})}(e,t,n,a,c)
break
case tm.InAppPurchase:f=function(e,t,n,r,i){return Pg.context("createTodayInAppPurchaseCard",()=>{const s=So(e,t,n,r)
Yi(e,t,n,r)
const a=function(e,t){if(1===t.length){const e=t[0]
if(e.type===jG)return e}return null}(0,Xi(0,t))
if(o(a))return Ki(r),null
const c=gu(e,a,{offerStyle:OB,metricsOptions:{pageInformation:r.pageInformation,locationTracker:r.locationTracker},artworkUseCase:1})
return o(c)?(Ki(r),null):(c.theme=lG,s.media=new iY(c),s.media.impressionMetrics=c.impressionMetrics,s.media.impressionMetrics.fields[o_]=s.impressionMetrics.fields.id,s.style=cj,Vi(e,s,n,Zi(t,n.coercedCollectionTodayCardDisplayStyle),t,i,r),Ki(r),s)})}(e,t,n,a,c)
break
case tm.AppEventCard:f=function(e,t,n,r,o){return Pg.context("createTodayAppEventCard",()=>{var i,s,a,c,u
if(!Oi(e))return null
const d=function(e,t){let n
const r=se(t,wG)
if(r.length>0)n=r[0]
else{const e=se(t,gG)
if(0===e.length)return null
n=e[0]}return n}(0,t)
if((0,bg.isNothing)(d))return null
const f=So(e,t,n,r,t=>{t.inAppEventId=d.id
const n=ie(e,d,Oj);(0,Ig.isSome)(n)&&(t.relatedSubjectIds=[n.id])});(0,Ig.isSome)(f.editorialDisplayOptions)&&(f.editorialDisplayOptions.useMaterialBlur=!0),Yi(e,t,n,r)
const p=yn(e,t,n)
if((0,bg.isNothing)(p))return Ki(r),null
const h=null!==(s=null===(i=p.joeColors)||void 0===i?void 0:i.textColor4)&&void 0!==s?s:Jz,w=U(null!==(c=null===(a=p.joeColors)||void 0===a?void 0:a.bgColor)&&void 0!==c?c:Jz)?kj:NG,g={pageInformation:r.pageInformation,locationTracker:r.locationTracker,targetType:KL}
f.style=null!==(u=os(p.joeColors,CM))&&void 0!==u?u:U(h)?kj:NG
const m=as(0,f.style),v=q(t,GG),y=Bi(e,d,null,!1,!1,cs(f.style),m,!0,!0,g,!0,!0,v,!1,l(n.allowUnpublishedAppEventPreviews))
if((0,bg.isNothing)(y)||y instanceof Date)return On(y,r.refreshController),Ki(r),null
const A=y
return f.media=new cY(A.formattedDates,A.startDate,h,p.artworks,p.videos,p.cardArtLayouts,p.artworkLayoutsWithMetrics,w),(0,Ig.isSome)(A.lockup)&&(f.overlay=new fY(A.lockup)),Vi(e,f,n,Zi(t,n.coercedCollectionTodayCardDisplayStyle),t,o,r),Ki(r),f})}(e,t,n,a,c)
break
case tm.List:case tm.NumberedList:f=function(e,t,n,r,o){return Pg.context("createTodayListCard",()=>{var i,s,a,c
const l=So(e,t,n,r)
Yi(e,t,n,r),n.useJoeColorIconPlaceholder=!0
const u=Xi(0,t),d=Qi(e,u,n,r.pageInformation,r.locationTracker,void 0,void 0,void 0)
if(0===d.length)return Ki(r),null
if(n.canDisplayArcadeOfferButton=!1,d.length<function(e){return"tv"===e.client.deviceType?3:4}(e)&&n.enableListCardToMultiAppFallback)es(e,t,d,l)
else{if(Zi(t,n.coercedCollectionTodayCardDisplayStyle)===tm.NumberedList){let e=1
for(const t of d)t.ordinal=`${e}`,e++}const r=yn(e,t,n),o=os(null==r?void 0:r.joeColors,qN),u=e.props.enabled("todayListCardStyleV2")
null==r||r.videos.forEach(e=>{e.canPlayFullScreen=!1,e.playbackControls={prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1},e.autoPlayPlaybackControls={prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1}}),l.style=u?void 0:cj,l.media=new rY(d,null!==(i=null==r?void 0:r.artworks)&&void 0!==i?i:[],null!==(s=null==r?void 0:r.videos)&&void 0!==s?s:[],null!==(a=null==r?void 0:r.cardArtLayouts)&&void 0!==a?a:[],null!==(c=null==r?void 0:r.artworkLayoutsWithMetrics)&&void 0!==c?c:[],void 0,u?o!==cj:o===kj)}return Vi(e,l,n,Zi(t,n.coercedCollectionTodayCardDisplayStyle),t,o,r),Ki(r),l})}(e,t,n,a,c)
break
case tm.River:case tm.Grid:f=function(e,t,n,r,o){return Pg.context("createTodayRiverCard",()=>{const i=So(e,t,n,r)
n.useJoeColorIconPlaceholder=!0,Yi(e,t,n,r)
const s=function(e,t,n,r,o){const i=Xi(0,t).filter(t=>{const n=kd(e,t)
return!Id(e,t)||!n})
return Qi(e,i,n,r.pageInformation,r.locationTracker,void 0,void 0,void 0,!1)}(e,t,n,r)
return 0===s.length?(Ki(r),null):(n.canDisplayArcadeOfferButton=!1,s.length<function(e){return"tv"===e.client.deviceType?2:4}(e)?es(e,t,s,i):(i.style=kj,function(e){for(const t of e)U(t.icon.backgroundColor,90)||(t.icon.backgroundColor=N(.8,.8,.8))}(s),i.media=new sY(s)),Vi(e,i,n,Zi(t,n.coercedCollectionTodayCardDisplayStyle),t,o,r),Ki(r),i)})}(e,t,n,a,c)
break
case tm.SingleApp:f=Wi(e,t,n,a,c)
break
case tm.ShortImage:f=function(e,t,n,r,o){return Pg.context("createTodayShortImageCard",()=>{const i=So(e,t,n,r)
Yi(e,t,n,r)
const s=Io(e,t,i,n,r)
let a=!1
const c=Xi(0,t),l=as(0,i.style),u=Qi(e,c,n,r.pageInformation,r.locationTracker,cs(i.style),l,at(0,t)),d=ji(0,0,0,t,u)
return i.overlay=d,s||1!==c.length||(a=qi(e,t,i,c,n,r)),s||a?(Vi(e,i,n,Zi(t,n.coercedCollectionTodayCardDisplayStyle),t,o,r),Ki(r),i):(Ki(r),null)})}(e,t,n,a,c)
break
default:f=null}return r(f)?(e.console.log(`Unknown style: ${u}`),f):(function(e,t,n,r){const o=Zi(r,n.coercedCollectionTodayCardDisplayStyle),s=ls(e,r,n.heroDisplayContext,o,n.prevailingCropCode)
let a=[],c=[]
i(s)&&(a=[s]),i(t.media)&&(t.media instanceof aY||t.media instanceof eY)&&(c=t.media.videos),new Xz(a,c)}(e,f,n,t),function(e){e.clickAction instanceof xH&&(e.overlay=new gY(e.clickAction),e.style=cj)}(f),function(e,t){(0,Ig.isNothing)(e.media)||(e.media.otdTextStyle=t.useOTDTextStyle)}(f,n),function(e,t){const n=t.media
if(!(n instanceof Qz))return
const r=s(n.videos)
t.supportsMediaMirroring=r}(0,f),(0,Ig.isNothing)(f.media)&&(e.console.log(`Missing required media: ${u}`),f=null),f)},t=>(e.console.log(t),null))}function Yi(e,t,n,r,i){const a=s(i)?i:function(e,t,n){let r=Dd(e,t,Yj)
if(o(r))switch(n){case tm.AppOfTheDay:case tm.GameOfTheDay:r=q(t,GG)}return r}(e,t,Zi(t,n.coercedCollectionTodayCardDisplayStyle))
rf(e,Ji(e,t,n,r,a),null!=a?a:"")}function Ji(e,t,n,r,o){var i
return Tf(e,t,null!=o?o:"",{...null==n?void 0:n.baseMetricsOptions,targetType:NB,pageInformation:r.pageInformation,locationTracker:r.locationTracker,isAdEligible:null!==(i=null==n?void 0:n.isAdEligible)&&void 0!==i&&i,optimizationId:d(t,tb),optimizationEntityId:d(t,nb),rowIndex:null==n?void 0:n.currentRowIndex,displayStyle:null==n?void 0:n.metricsDisplayStyle})}function Ki(e){sf(e.locationTracker)}function Zi(e,t){const n=q(e,eM)
return vX.has(n)&&(0,Ig.isSome)(t)?t:n}function Qi(e,t,n,r,i,a,c,l,u=!0){return o(t)?[]:Iu(e,t.filter(e=>!s(e.attributes)||e.type!==jG),{lockupOptions:{metricsOptions:{pageInformation:r,locationTracker:i},offerEnvironment:a,offerStyle:c,clientIdentifierOverride:n.clientIdentifierOverride,externalDeepLinkUrl:l,crossLinkSubtitle:n.crossLinkSubtitle,artworkUseCase:1,canDisplayArcadeOfferButton:n.canDisplayArcadeOfferButton,useJoeColorIconPlaceholder:n.useJoeColorIconPlaceholder,skipDefaultClickAction:!u},filter:76670})}function Xi(e,t){return se(t,gG)}function es(e,t,n,r){const o=Dd(e,t,FB)
if(r.media=new oY(n,o),r.style=kj,r.clickAction instanceof Bq){const e=xq.from(r.clickAction.pageUrl)
e.param(Aq.showingFallbackMedia,zG),r.clickAction.pageUrl=e.build()}}function ts(e,t){switch(t){case tm.AppOfTheDay:case tm.GameOfTheDay:return iL
case tm.AppEventCard:return sL
case tm.Video:case tm.FullBleedImage:return Ix
default:return aL}}function ns(e,t,n){if(o(t))return null
const r=Nu(e,t,{withJoeColorPlaceholder:!0,useCase:15})
return r.crop=n||"sr",r}function rs(e,t,n){const r=H(t,ts(0,Zi(t,n.coercedCollectionTodayCardDisplayStyle)))
return i(r)?d(r,"bgGradientKind"):null}function os(e,t=qN){if((0,Ig.isNothing)(e))return
if((0,Ig.isSome)(null==e?void 0:e.textGradient)&&2===e.textGradient.length)return U(e.textGradient[0])?cj:kj
const n=e[t]
if((0,Ig.isNothing)(n))return
const r=B(n)
return r<=.1?kj:r>=.84?cj:NG}function is(e,t=qN){var n
return null!==(n=os(e,t))&&void 0!==n?n:NG}function ss(e,t){return i(t.heading)?t.heading.replace(/\n/g," "):t.collapsedHeading}function as(e,t){return aB}function cs(e){return e===cj?NG:NB}function ls(e,n,r,o,i){const s=function(e,t,n,r){return t===KG?ts(0,n):"editorialArtwork.crossoverCard"}(0,r,o,Object.keys(H(n,wj)))
return ns(e,H(n,s),function(e,t,n,r){return am.Article,am.Article,r}(0,0,t(s),i))}function us(e,t){let n=_d(e,t,FB)
if(s(n)||(n=Dd(e,t,Yj)),!s(n)){const e=q(t,iG)
e!==tm.AppOfTheDay&&e!==tm.GameOfTheDay||(n=q(t,GG))}return n}function ds(e,t,n){const r=q(t,n)
if(o(r))return null
const s=new xq(r)
let a=null
switch(e.host.clientIdentifier){case nH:a=LG
break
case tH:a=Vj}a&&s.param(Oq,a)
const c=Be(Fe(e,t))
return i(c)&&s.param(Aq.productVariantID,c),s.toString()}function fs(e,t,n){if(o(t))return null
const r=new TW(t)
return r.title=null!=n?n:e.loc.string("ShareSheet.CopyLink.Title"),r.artwork=ce(e,"systemimage://link"),new eW("com.apple.AppStore.copyLinkActivity",r)}function ps(e,t,n){return Pg.context("shareSheetDataForProductFromProductData",()=>{if(r(t))return null
const o=ds(e,t,Sj),s=q(t,Yj),a=q(t,EU),c=t.id,l=e.client.storefrontIdentifier
if(!(o&&s&&a&&c))return null
const u=ds(e,t,"shortUrl")
let d=null,f=null
const p=OU,h=Ce(e,t,AG)||a
i(t)&&q(t,Sj)&&(d=ju(e,t,{useCase:1},n),f=function(e,t){return Pg.context("notesMetadataFromProductData",()=>{var n
if(r(t))return null
const o=q(t,Yj)
if((0,Ig.isNothing)(o)||0===o.length)return null
const i=ds(e,t,Sj),s=q(t,EU),a=q(t,"genreNames.0"),c=null===(n=wd(e,t))||void 0===n?void 0:n.fileSizeByDevice
let l
switch(t.type){case zj:l=Oj
break
case xj:l=HI
break
case jG:l=vN
break
default:l=null}return new RV(o,i,s,a,c,l)})}(e,t))
const w=new LV(c,l,s,p,d,[],[],!1,h,null,null,f)
return new MV(w,o,u)})}function hs(e,t,n,o,s){return Pg.context(`shareActionFromData: ${t.type}`,()=>{var a
const c=t.id
switch(e.client.deviceType){case jj:{const r=ps(e,t)
if(r){const t=new tW(r,[])
return $f(e,t,{targetType:Hj,id:c,actionType:SM,pageInformation:n,locationTracker:o}),t}break}case Bj:case Lj:case Tj:{const l=ps(e,t,s),u=[]
if((null===(a=null==l?void 0:l.url)||void 0===a?void 0:a.length)>0){const t=fs(e,l.url)
i&&u.push(t)}const d=function(e,t){if(!e.bag.isContentGiftingEnabled)return null
if(r(t))return null
const n=At(e,t)
return r(n)||z(t,rj)?null:f(n,yM)>0?t.id:null}(e,t)
if(d){const t=new Bq(TB)
t.presentationContext=nC,t.title=e.loc.string("SHARE_GIFT_APP"),t.artwork=ce(e,"systemimage://app.gift"),t.pageUrl=`gift/${d}`,$f(e,t,{targetType:Hj,id:c,actionType:wM,actionContext:nv,pageInformation:n,locationTracker:o})
const r=new eW("com.apple.AppStore.giftActivity",t)
u.push(r)}if(l){const t=new tW(l,u,$m)
return t.title=e.loc.string("SHARE_APP"),t.artwork=ce(e,rC),$f(e,t,{targetType:Hj,id:c,actionType:SM,actionContext:nv,pageInformation:n,locationTracker:o}),t}if(u.length>0){const t=u.map(e=>e.action),r=new QH(t)
return r.isCancelable=!0,r.isCustom=!0,$f(e,r,{targetType:Hj,id:c,actionType:"actionSheet",pageInformation:n,locationTracker:o}),r}break}}return null})}function ws(e,t,n,o,a,c,l,u,d,f){return Pg.context("flowPreviewActionsConfigurationForProductFromData",()=>{if(e.client.deviceType!==Bj&&e.client.deviceType!==Lj)return null
const p=gs(e,t)
if(!s(p))return null
const h=[]
let w=null,g=null
const m=Y(p,rj)
if(n){const t=Rd(e,p),n=iu(0,p.type,t),s=function(e,t,n,o,i,s,a){return r(t)||t.type!==zj?null:St(e,At(e,t),t,n,!1,Qd(e,t,ju(e,t,null,s),s),a,sU)}(e,p,m,0,0,o,l)
g=Ut(e,s,n,p,m,0,null,null,null,null,sU)
const a=function(e,t,n,o,i,s,a,c){if(r(n))return null
let l=kt(e,n,t,o,s,sU,i)
return(null==c?void 0:c.length)>0&&(l=ct(e,l,n.adamId,null,c,!1,s)),l}(e,p,s,m,o,l,0,u)
i(a)&&i(g)&&(w=h.length,h.push(a))}const v=function(e,t,n){const r=hs(e,t,n.pageInformation,n.locationTracker)
return i(r)?(r.title=e.loc.string("FLOW_PREVIEW_ACTION_SHARE"),r.artwork=ce(e,rC),r):r}(e,p,c)
i(v)&&h.push(v)
const A=Ts(e,p)
if(!m&&!A){if(i(a)&&a instanceof Bq&&(a.pageData instanceof XY||a.pageData instanceof AJ)){const t=function(e,t,n){const r=function(e,t,n){return Pg.context("seeRatingsAndReviewsActionFromData",()=>{const t=y(n)
if(n.pageData instanceof XY||n.pageData instanceof AJ){let r
r=new mW(RG)
const o=jl(e)?r:new oW(new ZY(Kj,Ij)),i=y(n.pageData)
i.fullProductFetchedAction=o,t.pageData=i}return t})}(e,t.id,n)
return i(r)&&(r.title=e.loc.string("FLOW_PREVIEW_ACTION_SEE_RATINGS_AND_REVIEWS"),r.artwork=ce(e,"systemimage://star"),r.animationBehavior=rG),r}(e,p,a)
i(t)&&h.push(t)}if(!Te(e,t,xF)){const t=function(e,t,n,r){const o=$s(e,t,n,r)
return i(o)&&(o.title=e.loc.string("FLOW_PREVIEW_ACTION_WRITE_REVIEW"),o.artwork=ce(e,wk)),o}(e,p,d,f)
i(t)&&h.push(t)}}return new BV(h,g,w)})}function gs(e,t){return Pg.context(`productDataFromData: ${t.type}`,()=>{switch(t.type){case zj:case xj:return t
case _j:{const n=se(t,gG)
if(s(n)&&1===n.length){const t=n[0]
return gs(e,t)}break}case LD:{const n=se(t,qj)
if(s(n)&&1===n.length){const t=n[0]
return gs(e,t)}break}default:return null}return null})}function ms(e,t,n,r){const o=e.bag.voteUrl,i=d(t,"id",xG),s=new xq(o).param(Py,i),a=new WH(s.build()),c=new XH(O$)
return r?(a.title=e.loc.string("ACTION_REVIEW_HELPFUL"),c.title=e.loc.string("TOAST_HELPFUL_TITLE"),c.message=e.loc.string("TOAST_HELPFUL_DESCRIPTION"),a.artwork=ce(e,by),c.artwork=ce(e,by)):(a.title=e.loc.string("ACTION_REVIEW_NOT_HELPFUL"),c.title=e.loc.string("TOAST_NOT_HELPFUL_TITLE"),c.message=e.loc.string("TOAST_NOT_HELPFUL_DESCRIPTION"),a.artwork=ce(e,Iy),c.artwork=ce(e,Iy)),a.method=EN,a.isStoreRequest=!0,a.disableCache=!0,a.headers={"Content-Type":TJ.contentType},a.body=(new TJ).param("vote",r?"1":"0").param(Cy,n).build(),a.successAction=c,a}function vs(e,t,n){return Pg.context("reportConcernActionFromApiRow",()=>{const r=d(t,"id",xG),i=e.bag.reportConcernUrl,s=new zH(i)
s.method=EN,s.isStoreRequest=!0,s.disableCache=!0,s.needsAuthentication=!0,s.headers={"Content-Type":TJ.contentType},s.body=(new TJ).param(Py,r).param(Cy,n).build()
const a=new qH("selectedReason",ky,gk),c=new qH("explanation",ky,kG)
if(s.parameters=[a,c],e.props.isNotEnabled("reportConcernVisionUpdates")){const t=new XH(O$)
t.title=e.loc.string(yy),t.message=e.loc.string(Ay),t.artwork=ce(e,_D),s.successAction=t}const l=new XH(hj)
l.title=e.loc.string(Ty),l.message=e.loc.string(Sy),l.isCancelable=!0,s.failureAction=l
let u=e.bag.reportConcernReasons
o(u)&&(u=[{reasonId:"1",name:"It contains offensive material",upperCaseName:"IT CONTAINS OFFENSIVE MATERIAL"},{reasonId:"8",name:"It's off-topic",upperCaseName:"IT\u2019S OFF-TOPIC"},{reasonId:"111003",name:"It looks like spam",upperCaseName:"IT LOOKS LIKE SPAM"},{reasonId:"7",name:"Something else",upperCaseName:"SOMETHING ELSE"}])
const f=u.map(e=>new $V(d(e,"reasonId"),d(e,Yj),d(e,"upperCaseName"))),p=new nW(f)
return p.title=e.loc.string(vy),p.explanation=e.bag.reportConcernExplanation,o(p.explanation)&&(p.explanation="Tell us a little more (Optional)"),p.artwork=ce(e,_D),p.sendAction=s,p})}function ys(e,t){return Pg.context(SS,()=>{const n=d(be(e,t,xU),Wj)
if(n){const r=new lJ(n),o=be(e,t,xN)
if(o){const e=d(o,e_)
r.showsBadge=e&&e===t_}return r.showsBadge||(r.title=e.loc.string(J_)),r}return null})}function As(e,t,n){return`${CW}:/${zW}/${RW}/${t}/${n}`}function Ts(e,t){return!(!i(t)||Ss(e,t)||!Y(t,mN)&&!Y(t,"reviewsRestricted"))}function Ss(e,t){return!(o(t)||!e.bag.enableSystemAppReviews)&&et(e).isSystemAppFromData(t)}function Ps(e,t){const n=xq.from(e),r=d(n.query,AS)
return t&&(null==r?void 0:r.length)>0&&(n.query[AS]=yX[r]||r),n}function bs(e,t,n,r=!1,o,a,c){return Pg.context("createProductReviewsList",()=>{const l=[]
if(s(a)&&e.featureFlags.isEnabled(iU)){if((0,Ig.isSome)(c)){const t={id:`${c.getSequenceId()}`,kind:null,softwareType:null,targetType:pU,title:e.loc.string(qx),pageInformation:c.metricsPageInformation,locationTracker:c.locationTracker,idType:fj}
rf(e,{pageInformation:c.metricsPageInformation,locationTracker:c.locationTracker,targetType:pU,id:`${c.getSequenceId()}`,idType:fj},e.loc.string(qx)),gf(e,a,t),sf(c.locationTracker),uf(c.locationTracker)}l.push(a)}if(s(o)&&!e.featureFlags.isEnabled(iU)&&l.push(o),i(n)&&n.length>0){const o=!1,i=!o,s=o?n.slice(0,1):n,a=!1,u=Is(e,e.client.guid,t,s,r&&i,a&&i,i,c);(0,Ig.isSome)(c)&&rf(e,{pageInformation:c.metricsPageInformation,locationTracker:c.locationTracker,targetType:oE,id:`${c.getSequenceId()}`,idType:fj},null),u.forEach((t,n)=>{const r=new vJ
if(r.sourceType=vS,r.review=t,l.push(r),(0,Ig.isSome)(c)){const t={id:r.id,idType:aj,kind:null,softwareType:null,title:null,pageInformation:c.metricsPageInformation,locationTracker:c.locationTracker,targetType:"helpfulReview"}
gf(e,r,t),uf(c.locationTracker)}}),(0,Ig.isSome)(c)&&(sf(c.locationTracker),uf(c.locationTracker))}return l})}function Is(e,t,n,r,i=!1,s=!1,a=!0,c){return Pg.context("createReviewItems",()=>{const l=function(t,n){return n?1e3*((new Date).getTime()-t.getTime())<3600?e.loc.string("TimeAgo.Edited.JustNow"):e.loc.string("TimeAgo.Edited.Time").replace("{time}",e.loc.timeAgoWithContext(t,"standalone")):e.loc.timeAgoWithContext(t,"standalone")}
return r.map(r=>{var u
const f=new iJ
f.id=d(r,"id",xG),f.title=q(r,JG)
const p=q(r,Gk)
p&&(f.date=new Date(p),f.dateText=l(f.date,Y(r,"isEdited"))),f.contents=q(r,"review"),f.rating=J(r,mB),f.reviewerName=q(r,"userName"),f.dateAuthorText=e.loc.string("ProductPage.Section.Reviews.DateAuthor").replace("{date}",f.dateText).replace("{author}",f.reviewerName)
let h=null
const w=q(r,"developerResponse.id")
if((null==w?void 0:w.length)>0){const e=new sJ
e.id=w,e.contents=q(r,"developerResponse.body")
const t=q(r,"developerResponse.modified")
t&&(e.date=new Date(t),e.dateText=l(e.date,!1)),f.response=e,h=f.response.contents}if(a&&(d(n,jU),f.flowPreviewActionsConfiguration=function(e,t,n,r,i){var s
if(o(t)||e.client.deviceType!==Bj&&e.client.deviceType!==Lj&&e.client.deviceType!==jj)return null
const a=[ms(e,t,n,!0),ms(e,t,n,!1)]
return(null===(s=e.bag.reportConcernUrl)||void 0===s?void 0:s.length)>0&&a.push(vs(e,t,n)),(null==i?void 0:i.length)>0&&a.push(function(e,t){const n=new TW(t)
return n.title=e.loc.string("ACTION_REVIEW_COPY"),n.artwork=ce(e,"systemimage://doc.on.doc"),n}(e,i)),new BV(a)}(e,r,t,0,h)),s){const n=[ms(e,r,t,!0),ms(e,r,t,!1)];(null===(u=e.bag.reportConcernUrl)||void 0===u?void 0:u.length)>0&&n.push(vs(e,r,t)),f.voteActions=n}return i&&(f.moreAction=function(e,t,n,r,o){return r?Pg.context("singleReviewActionFromReviewData",()=>{const i=Fs(e,t,n,[r],null,null,null,o),s=new rJ
s.adamId=d(n,jU),s.targetReviewId=d(r,"id",xG),s.shelves=[i]
const a=new Bq(Ij)
return a.pageData=s,a.title=qs(e),a}):null}(e,t,n,r,c)),f})})}function Cs(e,t,n,r){return r?Pg.context("ratingsFromApiResponses",()=>{const t=new oJ
t.productId=d(r,jU,xG),t.ratingAverage=f(r,"ratingAverage"),t.totalNumberOfRatings=f(r,PS),t.totalNumberOfReviews=f(r,"totalNumberOfReviews"),t.context=n
const o=c(r,"ratingCountList").slice().reverse(),i=o.reduce((e,t)=>e+t,0)
if(t.ratingCounts=i>0?o.map(e=>e/i*t.totalNumberOfRatings):o,!(t.ratingAverage>0&&t.ratingCounts)){const n=l(r,iE)
t.status=n?e.loc.string("RATINGS_STATUS_DEVELOPER_RESET"):e.loc.string("RATINGS_STATUS_NOT_ENOUGH_RATINGS")}return t}):null}function ks(e,t,n){if(!Os(e))return null
const r=re(t,HC)
if((0,Ig.isNothing)(r))return null
const i=r.data
if(o(i))return null
const s=i[0],a=d(s,"id",xG),l=Es(e,s,!0),u=Es(e,s,!1),f=e.loc.string("ProductPage.ReviewSummary.Subtitle"),p=e.bag.reviewSummaryReportConcernData
if((0,Ig.isNothing)(u)||(0,Ig.isNothing)(l))return null
const h=q(t,Yj),g=Ce(e,s,kG),m=ce(e,"systemimage://text.line.2.summary"),v=new mJ(l,u,f,m,bj,"text/markdown",function(e,t,n,r,o,i,s){const a=[],l=function(e,t,n,r){return Pg.context("reviewSummaryReportConcernActionFromApiRow",()=>{if(!w(t,gy))return null
const r=function(e,t){const n=new zz(e)
n.includeAppBinaryTraitsAttribute=!1,n.resourceType=my
const r=qe(e,n),o=new zH(r.toString())
o.method=EN,o.disableCache=!0,o.needsMediaToken=!0,o.headers={"Content-Type":hk},o.bodyDictionary={report:{contentId:t,contentKind:"review-summaries",concerns:null}}
const i=new XH(O$)
i.title=e.loc.string(yy),i.message=e.loc.string(Ay),i.artwork=ce(e,_D),o.successAction=i
const s=new XH(hj)
return s.title=e.loc.string(Ty),s.message=e.loc.string(Sy),s.isCancelable=!0,o.failureAction=s,o}(e,n),o=c(t,my).map(t=>{let n,r
const o=d(t,tG)
switch(o){case"OFFENSIVE":case"OFFENSIVE_OR_HARMFUL":n=e.loc.string("ProductPage.ReviewSummary.ReportAConcern.Offensive.Name"),r=e.loc.string("ProductPage.ReviewSummary.ReportAConcern.Offensive.UppercaseName")
break
case"MISREPRESENTING_THE_APP":case"MISREPRESENT":n=e.loc.string("ProductPage.ReviewSummary.ReportAConcern.Misrepresent.Name"),r=e.loc.string("ProductPage.ReviewSummary.ReportAConcern.Misrepresent.UppercaseName")
break
case"SOMETHING_ELSE":n=e.loc.string("ProductPage.ReviewSummary.ReportAConcern.SomethingElse.Name"),r=e.loc.string("ProductPage.ReviewSummary.ReportAConcern.SomethingElse.UppercaseName")}return new $V(o,n,r)})
if(0===o.length)return null
const i=e.loc.string(vy),s=e.loc.string("ProductPage.ReviewSummary.ReportAConcern.Explanation"),a=new rW(o,i,s,r)
return a.artwork=ce(e,_D),a})}(e,t,o);(0,Ig.isSome)(l)&&a.push(l)
const u=Gs(e);(0,Ig.isSome)(u)&&a.push(u)
const f=function(e,t,n,r,o){if(![KN,MF].includes(e.client.buildType))return null
const i=new xH(`tap-to-radar://new/problem?componentid=999915&title=Review Summary Feedback: ${n}&description=App ID: ${t}\nApp name: ${n}\nReview summary ID: ${r}\nReview summary: ${o}\n\nFeedback: `,!0)
return i.title=e.loc.string("Action.ProvideFeedback"),i.artwork=ce(e,"systemimage://ant.circle"),i}(e,n,r,o,i)
return(0,Ig.isSome)(f)&&a.push(f),new BV(a)}(e,p,t.id,h,a,g,e.client.guid)),y={id:`${n.getSequenceId()}`,kind:null,softwareType:null,targetType:pU,title:e.loc.string(qx),pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,idType:fj}
return rf(e,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:pU,id:`${n.getSequenceId()}`,idType:fj},v.title),gf(e,v,y),sf(n.locationTracker),uf(n.locationTracker),v}function Os(e){return e.featureFlags.isEnabled(iU)&&e.bag.enableReviewSummarization}function Es(e,t,n){const r=Ce(e,t,kG)
if((0,Ig.isNothing)(r))return null
const o=`^[${e.loc.string(qx)}](jetFont: 'reviewSummaryTitle')`,i=`^[${r}](jetFont: 'reviewSummaryText')`
return n?e.loc.string("ProductPage.ReviewSummary.Body").replace("{styledTitle}",o).replace("{reviewSummary}",i):i}function Rs(e){if(!e)return null
const t=new pJ
return Ls(e,t),t}function Ds(e){if(!e)return null
const t=new hJ
return Ls(e,t),t}function _s(e){if(!e)return null
const t=new wJ
return Ls(e,t),t}function Ls(e,t){t.ratingAverage=e.ratingAverage,t.ratingCounts=e.ratingCounts,t.totalNumberOfRatings=e.totalNumberOfRatings,t.totalNumberOfReviews=e.totalNumberOfReviews,t.status=e.status,t.reviews=e.reviews,t.actions=e.actions,t.nextPage=e.nextPage}function xs(e,t,n,r=null,o=null){const i=new aJ
switch(e.client.deviceType){case"tv":i.title=e.loc.string("TV_SELECT_TO_RATE")
break
case jj:i.title=e.loc.string("CLICK_TO_RATE")
break
default:i.title=e.featureFlags.isEnabled(iU)?e.loc.string("TAP_TO_RATE"):e.loc.string("TAP_TO_RATE_LEGACY")}return i.rating=o,i.rateAction=function(e,t,n,r=null){const o=new XH(O$)
o.title=e.loc.string("TOAST_TAP_TO_RATE_TITLE"),o.message=e.loc.string("TOAST_TAP_TO_RATE_DESCRIPTION"),o.artwork=ce(e,"resource://ToastStar.png",95,90)
const i=new YH(function(e,t,n){return Ps(e.bag.userRateURL,n).param("id",t).build()}(e,t,n))
i.adamId=t,i.method=EN,i.isStoreRequest=!0,i.disableCache=!0,i.successAction=o
const s=new qH(mB,TS,gk),a=new qH("version-to-review",TS,gk)
return i.parameters=[s,a],i}(e,t,n,r),i}function Ms(e,t,n,r,o=!1,i,s){return Pg.context("createWriteReviewAction",()=>{const a=o?e.loc.string("EDIT_REVIEW"):e.loc.string("WRITE_A_REVIEW"),c=function(e,t,n){return Ps(e.bag.writeReviewURL,n).param("id",t).build()}(e,t,n)
let l
switch(e.client.deviceType){case jj:{const e=new JH(t,c)
e.title=a,e.appIcon=r,e.itemDescription=i,e.appName=s,l=e
break}default:if(e.featureFlags.isEnabled("review_composer_redesign")){const n=new JH(t,c)
n.title=a,n.appName=s,n.itemDescription=i,n.appIcon=r,n.artwork=ce(e,wk),l=n
break}{const n=new Bq("writeReview")
n.title=a,n.pageUrl=c,n.pageData=t,n.presentationContext=nC,n.artwork=ce(e,wk),l=n
break}}return l})}function $s(e,t,n,r,o){return Pg.context("writeReviewActionFromData",()=>{const s=t.id
if((null==s?void 0:s.length)>0){const a=t.type===xj,c=J(t,mB),l=i(c)&&c>0
return Ms(e,s,a,o,l,n,r)}return null})}function Fs(e,t,n,r,o=!1,i=!1,s=!0,a){return Pg.context("reviewsShelfForReviewsData",()=>{if(e.featureFlags.isEnabled(sE)){const t=new $z(kL)
return null==a||a.addImpressionsToShelf(e,t,aE),t.items=bs(e,n,r,o,null,null,a),t}{const c=new $z(Ij)
return null==a||a.addImpressionsToShelf(e,c,aE),c.items=Is(e,t,n,r,o,i,s,a),c}})}function Ns(e,t,n,o,s,a,c,u,f,p,h=!1,w=!0,g=null,m=!1){return Pg.context("reviewsContainerShelfForReviewsData",()=>{const w=function(e,t,n,o,s,a,c,u,f,p=null,h=!1){return Pg.context("reviewsContainerForReviewsData",()=>{const w=new uJ,g=d(n,jU),m=l(n,"isBundle")
if(w.adamId=g,w.ratings=Cs(e,0,aD,n),e.featureFlags.isEnabled(iU)){const t=ks(e,s,f)
i(t)&&(w.reviewSummary=t)}if(h||(w.tapToRate=xs(e,g,m,a,p)),i(o)&&o.length>0){const r=!1,i=!r,s=r?o.slice(0,1):o
w.reviews=Is(e,t,n,s,i,!1,i,f)}if(r(w.reviews)||0===w.reviews.length){const t=w.ratings.ratingAverage>0&&w.ratings.ratingCounts,r=l(n,iE)
t||r||(w.ratings.status=e.loc.string(cE))}if(r(u)||(w.editorsChoice=u),!h){const t=i(p)&&p>0
w.writeReviewAction=Ms(e,g,m,c,t,uu(e,s),a)}const v=d(n,lE)
if(v){const t=new xH(v,!1)
t.title=e.loc.string(bS),w.supportAction=t}let y=!1
for(const t of o)if(Ss(e,t)){y=!0
break}return w.alwaysAllowReviews=y,w})}(e,t,n,o,a,s,c,u,f,g,m),v=new $z(yS)
return v.title=qs(e),v.items=[w],null==f||f.addImpressionsToShelf(e,v,aE),h&&i(w.reviews)&&w.reviews.length>0&&(v.seeAllAction=Ws(e,t,n,o,p,s,c,!1,!1)),v})}function Bs(e,t,n,r){return Pg.context("personalizedReviewsContainerShelf",()=>{const o=_(e,r),i=J(o,mB)
return Ns(e,t,n.ratingsData,n.reviewItems,n.appName,o,n.appIcon,n.editorsChoice,n.shelfMetrics,n.nextPageHref,n.includeSeeAllAction,!1,i)})}function Us(e,t,n,r,o,i=null){const a=function(e,t,n,r=null){let o=`${CW}:/${zW}/${t}/${n}`
return s(r)&&(o=`${o}/?${Aq.token}=${encodeURIComponent(JSON.stringify(r))}`),o}(0,t,n,i)
return new nJ(n,r,o,a)}function Gs(e){const t=e.bag.reviewSummarizationLearnMoreEditorialItemId
if(o(t))return null
const n=e.loc.string(IS),r=new Bq(KG)
return r.title=n,r.pageUrl=`https://apps.apple.com/story/id${t}`,r.artwork=ce(e,yC),r}function js(e,t,n,o,i,s=null,a=null,c,l=null,u,f,p=!1,h=!1,w=AX,g=null){const m=new rJ
return m.shelves=[],Pg.context("reviewsPageForReviewsData",()=>{const v=r(a)?d(n,jU):a
if(i&&!r(n)&&!e.featureFlags.isEnabled(sE)){const r=Ns(e,t,n,[],c,u,l,null,f)
m.trailingNavBarAction=Gs(e),m.shelves.push(r)}const y=Vs(e,t,v,n,o,s,p,h,w,g,f)
return y.reviewsShelf.presentationHints={...y.reviewsShelf.presentationHints,isSortable:i&&y.reviewsShelf.presentationHints.isSortable},m.adamId=v,m.shelves.push(y.reviewsShelf),m.nextPage=y.paginationToken,m.initialSortOptionIdentifier=y.initialSortId,m.sortActionSheetTitle=y.sortActionSheetTitle,m.sortOptions=y.sorts,m.alwaysAllowReviews=Ss(e,u),m})}function Vs(e,t,n,r,i,a=null,c=!1,l=!1,u=AX,d=null,f){const p=(null==a?void 0:a.length)>0&&s(i)&&i.length%2>0,h=p?i.slice(0,i.length-1):i,w=p?i.slice(i.length-1):[],g=Fs(e,t,r,h,c,l,!0,f)
var m
g.id=o(m=u)?TX:`${TX}.${m}`
const v={reviewsShelf:g}
return g.presentationHints={isSortable:i.length>0||(null==a?void 0:a.length)>0,isSeeAllContext:!0},v.initialSortId=u,v.sortActionSheetTitle=e.loc.string("REVIEWS_SORT_BY"),v.sorts=[Us(0,n,rE,e.loc.string(CS),e.loc.string(e.featureFlags.isEnabled(iU)?CS:"REVIEWS_SORT_BY_MOST_HELPFUL"),d),Us(0,n,"favorable",e.loc.string(kS),e.loc.string(e.featureFlags.isEnabled(iU)?kS:"REVIEWS_SORT_BY_MOST_FAVORABLE"),d),Us(0,n,"critical",e.loc.string(OS),e.loc.string(e.featureFlags.isEnabled(iU)?OS:"REVIEWS_SORT_BY_MOST_CRITICAL"),d),Us(0,n,ES,e.loc.string(RS),e.loc.string(e.featureFlags.isEnabled(iU)?RS:"REVIEWS_SORT_BY_MOST_RECENT"),d)],(null==a?void 0:a.length)>0&&(v.paginationToken=function(e,t,n,r,o){return{url:As(0,t,r),remainingContent:o,nextHref:n,profile:ij,maxPerPage:20,highestOrdinal:0,metricsPageInformation:null,metricsLocationTracker:null}}(0,n,a,u,w)),v}function Hs(e,t,n,r,o,i,a,c,l){return Pg.context("reviewsPageForReviewsMediaContainer",()=>{let u
return u=s(o.data)?r.concat(o.data):r,js(e,t,null,u,i,o.next,n,null,null,null,l,!1,!1,a,c)})}function Ws(e,t,n,r,o=null,i=null,s=null,a,c,l,u){return n?Pg.context(DS,()=>{const d=js(e,t,n,r,!0,o,null,i,s,l,u,a,c)
d.title=null
const f=new Bq(Ij)
return f.pageData=d,f.title=e.loc.string(UU),f}):null}function qs(e){switch(e.client.deviceType){case"tv":return e.loc.string("TV_PRODUCT_SECTION_RATINGS")
case Vj:return null
default:return e.loc.string("PRODUCT_SECTION_REVIEWS")}}function zs(e,t){return t.map(t=>t.createProductPageSection(e))}function Ys(e,t,n,r,o,i,s){const a=function(e,t,n){switch(t){case LN:return n?hg:pg
case H_:return wg
case OU:return n?ug:Em
case vU:return n?fg:dg
case W_:return n?mg:gg
default:return Em}}(0,n,r)
let c=[]
c=t?o&&a.purchasedOrderingCompact?a.purchasedOrderingCompact.slice():a.purchasedOrdering.slice():i&&a.downloadingOrdering?o&&a.downloadingOrderingCompact?a.downloadingOrderingCompact.slice():a.downloadingOrdering.slice():o&&a.notPurchasedOrderingCompact?a.notPurchasedOrderingCompact.slice():a.notPurchasedOrdering.slice()
const l=t?a.purchasedSpotlightIndex:a.notPurchasedSpotlightIndex
if(s&&s.spotlightSection){const e=function(e,t){for(let n=0;n<t.length;n++){const r=t[n]
if(e.sectionType===r.sectionType&&e.shelfId===r.shelfId&&JSON.stringify(e.shelfBasedMappedIds)===JSON.stringify(r.shelfBasedMappedIds))return n}return-1}(s.spotlightSection,c);-1!==e&&(c.splice(e,1),c.splice(l,0,s.spotlightSection))}return c}function Js(e){return new SX(Kj,e?$B:MB)}function Ks(e){var t
return(0,Ig.isSome)(e)&&(null===(t=e.id)||void 0===t?void 0:t.indexOf(h0))>-1}function Zs(e,t,n){if(!e.featureFlags.isEnabled(Zx))return null
const r=new p0(t)
ni(e,r,ti(e,"ProductMediaGallery",n,""))
const o=new Bq("productMediaGallery")
return o.pageData=r,o}function Qs(e,t){var n
return r(t)?1:i(null===(n=t.video)||void 0===n?void 0:n.preview)&&t.video.preview.height>0?t.video.preview.width/t.video.preview.height:i(t.screenshot)&&t.screenshot.height>0?t.screenshot.width/t.screenshot.height:1}function Xs(e,t,n,r){return Pg.context("createProductPageFromShelfBasedProductPage",()=>{var o,a,c,l
const u=new XY
return u.adamId=t.lockup.adamId,u.bundleId=t.lockup.bundleId,u.icon=t.lockup.icon,u.isEditorsChoice=t.lockup.isEditorsChoice,u.ordinal=t.lockup.ordinal,u.title=t.lockup.title,u.subtitle=t.lockup.subtitle,u.developerTagline=t.lockup.developerTagline,u.editorialTagline=t.lockup.editorialTagline,u.editorialDescription=t.lockup.editorialDescription,u.shortEditorialDescription=t.lockup.shortEditorialDescription,u.rating=t.lockup.rating,u.ratingCount=t.lockup.ratingCount,u.ageRating=t.lockup.ageRating,u.buttonAction=t.lockup.buttonAction,u.offerDisplayProperties=t.lockup.offerDisplayProperties,u.titleOfferDisplayProperties=t.titleOfferDisplayProperties,u.clickAction=t.lockup.clickAction,u.children=t.lockup.children,u.contextMenuData=t.lockup.contextMenuData,u.shelfBackground=t.lockup.shelfBackground,u.searchAd=t.lockup.searchAd,u.searchAdOpportunity=t.lockup.searchAdOpportunity,u.crossLinkTitle=t.lockup.crossLinkTitle,u.crossLinkSubtitle=t.lockup.crossLinkSubtitle,u.tertiaryTitle=t.lockup.tertiaryTitle,u.tertiaryTitleAction=t.lockup.tertiaryTitleAction,u.tertiaryTitleArtwork=t.lockup.tertiaryTitleArtwork,u.flowPreviewActionsConfiguration=t.lockup.flowPreviewActionsConfiguration,u.productDescription=t.lockup.productDescription,u.itemBackground=t.lockup.itemBackground,u.developerAction=t.developerAction,u.logoArtwork=t.logoArtwork,u.navigationBarIconArtwork=t.navigationBarIconArtwork,u.uberArtwork=null===(o=t.uber)||void 0===o?void 0:o.artwork,u.uberArtworkForCompactDisplay=null===(a=t.uber)||void 0===a?void 0:a.compactArtwork,u.uberVideo=null===(c=t.uber)||void 0===c?void 0:c.video,u.uberStyle=null===(l=t.uber)||void 0===l?void 0:l.style,u.media=function(e){const t=[]
for(const n of Object.values(e.shelfMapping))if(Ks(n)){const e=n.contentsMetadata,r=n.items
t.push(new Zq(r,e.platform,e.allPlatforms,e.platformDescription,e.allPlatformsDescription,e.allPlatformsDescriptionPlacement))}return t}(t),i(t.shelfMapping[BG])&&(u.badges=Wl(e,t.shelfMapping[BG])),u.shareAction=t.shareAction,u.pageMetrics=t.pageMetrics,u.pageRenderMetrics=t.pageRenderMetrics,u.isComplete=!t.isIncomplete,u.hasDarkUserInterfaceStyle=t.hasDarkUserInterfaceStyle,u.mediaSectionTitle=e.loc.string(mS),u.expandedOfferDetails=t.expandedOfferDetails,u.regularPriceFormatted=t.regularPriceFormatted,u.theme=t.theme,u.externalVersionIdentifier=t.externalVersionIdentifier,u.updateBuyParams=t.updateBuyParams,u.appPlatforms=t.appPlatforms,u.descriptionHeader=t.descriptionHeader,u.description=t.description,u.banner=t.banner,u.secondaryBanner=t.secondaryBanner,u.fullProductFetchedAction=t.fullProductFetchedAction,u.appPromotionDetailPageFlowAction=t.appPromotionDetailPageFlowAction,u.pageRefreshPolicy=t.pageRefreshPolicy,u.purchasedOrdering=zs(e,Ys(0,!0,e.host.platform,n,!1,!1,r)),u.notPurchasedOrdering=zs(e,Ys(0,!1,e.host.platform,n,!1,!1,r)),u.shelfMapping=function(e,t){const n={}
for(const r of tJ){let o
o=r===Ij?ea(e,t):t.shelfMapping[r],s(o)&&(n[r]=o)}return n}(e,t),u.alwaysAllowReviews=t.alwaysAllowReviews,u})}function ea(e,t){const n=t.shelfMapping[RG],r=t.shelfMapping[XF],i=e.featureFlags.isEnabled(iU)?t.shelfMapping[MG]:t.shelfMapping[rB],a=t.shelfMapping[eN],c=t.shelfMapping[tN]
if(o(n)&&o(r)&&o(i)&&o(a)&&o(c))return null
let l=null,u=[],d=null,f=null,p=null,h=null,w=null
if(s(null==r?void 0:r.items))for(const e of r.items){const t=e
switch(t.sourceType){case MG:l=t.review
break
case vS:u.push(t.review)}}else u=null
if(s(null==i?void 0:i.items)&&(l=e.props.enabled(nE)?i.items[0]:i.items[0].review),s(null==a?void 0:a.items)&&(f=a.items[0].action),s(null==c?void 0:c.items)){const e=c.items[0].action
p=e.writeReviewAction,h=e.supportAction}s(null==n?void 0:n.items)&&(d=n.items[0],w=null==n?void 0:n.seeAllAction)
const g=new uJ
g.adamId=t.lockup.adamId,g.ratings=d,g.tapToRate=f,g.editorsChoice=l,g.reviews=u,g.supportAction=h,g.writeReviewAction=p,g.alwaysAllowReviews=t.alwaysAllowReviews
const m=new $z(yS)
return m.title=qs(e),m.items=[g],m.seeAllAction=w,m}function ta(e,t,n,r,i){if(!Oi(e))return null
if(o(t))return null
const s={pageInformation:n,locationTracker:r},a=Fi(e,t,null,!1,!1,s,!0,!0,!1,i.allowUnpublishedAppEventPreviews);(0,Ig.isSome)(a.nextAppEventPromotionStartDate)&&(0,Ig.isSome)(null==i?void 0:i.refreshController)&&On(a.nextAppEventPromotionStartDate,null==i?void 0:i.refreshController)
const c=a.appPromotions
if(0===c.length)return null
const l=na(0,c,void 0)
return l.isHorizontal=!1,gf(e,l,{...s,id:"",kind:null,softwareType:null,targetType:tj,title:""}),l}function na(e,t,n){const r=new $z(wC)
return r.isHorizontal=!0,r.title=n,r.items=t,r}function ra(e,t,n){e.featureFlags.isEnabled(R_)&&e.bag.isOnDemandShelfFetchingEnabled&&(0,bg.isSome)(t)&&o(t.items)&&n.isFirstRender&&(n.showingPlaceholders=sa(e,t,n.remainingItems.length))}function oa(e,t,n,r,i){(0,bg.isSome)(t)&&(0,bg.isSome)(t.url)&&o(t.items)&&n.isFirstRender&&(n.showingPlaceholders=sa(e,t,null!=r?r:n.remainingItems.length,n.isSearchLandingPage,n.isArcadePage,i))}function ia(e,t,n,r){n.showingPlaceholders=sa(e,t,n.remainingItems.length,n.isSearchLandingPage,n.isArcadePage,r)}function sa(e,t,n,r=!1,i=!1,a=null){if(s(t.items))return!1
if(!function(e,t){switch(t){case gj:case cG:case N$:case GF:case VD:case uA:case Y$:case GM:case jM:case wC:case T$:case GU:return!0
default:return!1}}(0,t.contentType)||r)return!1
const c=function(e,t,n){return t>0?t:(0,bg.isSome)(n)&&!Mn(n)?0:e.client.isPad?15:6}(e,n,a),l=new Array(c)
for(let e=0;e<c;e+=1)l[e]=new _z
if(o(l))return!1
const u=function(e,t){if((0,bg.isSome)(t.rowsPerColumn))return t.rowsPerColumn
switch(t.contentType){case gj:return 3
case cG:return 2
case N$:return 1
case VD:return null
default:return 1}}(0,t)
return(0,bg.isSome)(u)&&(t.rowsPerColumn=u),t.placeholderContentType=t.contentType,t.contentType=W$,t.items=l,s(i)&&(t.presentationHints={...t.presentationHints,isAppleArcadeContext:i}),t.isHidden=!1,!0}function aa(e){return e.contentType===W$}function ca(e){if(null===g0){g0=new Set
for(const t of e.bag.suppressedPrivacyAppIds)g0.add(t)}}function la(e,t){return ca(e),!(0,bg.isNothing)(g0)&&!o(t)&&g0.has(t)}function ua(e,t){return ca(e),!(0,bg.isNothing)(g0)&&!o(t)&&(!(!g0.has("com.apple.InstallAssistant.*")||!t.startsWith("com.apple.InstallAssistant."))||g0.has(t))}function da(e,t){const n=t.host
if(r(n))return!1
const o=[e.bag.mediaHost,e.bag.mediaEdgeHost(e),e.bag.mediaEdgeSearchHost]
for(const e of o)if(!r(e)&&-1!==n.indexOf(e))return!0
return!1}function fa(e,t,n){if(!(0,bg.isNothing)(t))return qe(e,new zz(e,t).addingQueryValues(n)).toString()}function pa(e){let t=e.query.id
const n=e.pathname
if(r(t)&&(null==n?void 0:n.length)>0){const e=v0.exec(n)
e&&e.length>1&&(t=e[1])}if(!a(t)){const n=e.pathComponents()
s(n)&&(t=n[n.length-1])}return t}function ha(e,t,n=!1){var r,o
let s=pa(t)
if(!a(s))throw new Error(`Unable to map ${t.build()} to a media api url`)
s in y0&&(s=y0[s])
let c=zj,l=m0,u=[AN,lx,Ij,xj,mD,ux,vD]
const d=null===(r=t.pathname)||void 0===r?void 0:r.split("/"),f=(0,bg.isSome)(d)&&d.includes(HW)
f&&(c=xj,l=[kB,uB,yG,GC,yN],u=[lx,zj,Ij,ux]),e.bag.enablePrivacyNutritionLabels&&!la(e,s)&&l.push(dx),e.appleSilicon.isSupportEnabled&&l.push(CG),e.bag.enableLicenses&&l.push(jC)
const p=w(t.query[Aq.isArcade]);(null===p||p)&&(l.push(WR,qR,dj),u.push(mG)),e.bag.enableSellerInfo&&l.push(_M),e.bag.enableSellerICPAnnotation&&l.push(VC),e.bag.gameCenterExtendSupportedFeatures&&l.push("supportedGameCenterFeatures"),Os(e)&&u.push(HC)
const h=new zz(e).withIdOfType(s,c).includingAdditionalPlatforms(O(e)).includingRelationships(u).includingAttributes(l).addingRelationshipLimit(Ij,E(e)).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes($e(e));(null===(o=t.query[Aq.productVariantID])||void 0===o?void 0:o.length)>0&&h.addingQuery(Aq.productVariantID,t.query[Aq.productVariantID])
const g=t.query[bq]
return i(g)&&h.addingQuery(bq,g),Oi(e)&&!f&&(Ei(e)||h.includingScopedRelationships(zj,[Uj]),h.includingScopedAttributes(Uj,[yj,zU,DU]),h.includingScopedAvailableIn(Uj,[WC])),Ei(e)&&_n(h),Ri(e)&&xn(h),ro(e,WG)&&h.enablingFeature(yD),n&&h.enablingFeature(qC),Ei(e)||h.includingRelationships([AD]),h.attributingTo(t.build())}function wa(e){const t=[wj,dj,sG,yG]
return t.push(eG),e.appleSilicon.isSupportEnabled&&t.push(CG),t}function ga(e){let t=[]
switch(e.client.deviceType){case jj:t=t.concat(S0),e.appleSilicon.isSupportEnabled&&t.push(hx)
break
case Vj:t.push(P0)
break
case Tj:t=t.concat(T0)
break
default:t=t.concat(A0)}return t}function ma(e,t,n,r,o,i){const s=m0
e.bag.enablePrivacyNutritionLabels&&!la(e,t)&&s.push(dx),e.appleSilicon.isSupportEnabled&&s.push(CG),e.bag.enableLicenses&&s.push(jC)
const a=new zz(e).withIdOfType(t,zj).includingAdditionalPlatforms(O(e)).includingAttributes(s).includingRelationships([mG,AN,lx,Ij,xj,mD,ux,vD]).addingRelationshipLimit(Ij,E(e)).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes($e(e))
return n&&a.addingQuery("availability",JC),(0,bg.isSome)(r)&&a.addingQuery(Aq.productVariantID,r),i&&a.enablingFeature(qC),Oi(e)&&!o&&(Ei(e)||a.includingScopedRelationships(zj,[Uj]),a.includingScopedAttributes(Uj,[yj,zU,DU]),a.includingScopedAvailableIn(Uj,[WC])),Ei(e)&&_n(a),Ri(e)&&xn(a),Ei(e)||a.includingRelationships([AD]),Os(e)&&a.includingRelationships([HC]),ro(e,WG)&&a.enablingFeature(yD),a}function va(e,t,n){const r=s(n)?[...n]:[]
return r.push(`${Aq.groupingFeaturedContentId}=${e}`),s(t)&&r.push(`${Aq.nativeGroupingShelfId}=${t}`),{protocol:CW,path:`/${xW}/${RW}/{token}`,query:r}}function ya(e,t){const n=[]
for(const r of e)n.push(va(r,null,t))
return n}function Aa(e,t){if(e.featureFlags.isEnabled("game_center_shelves_crossfire_referral_2023G")&&t instanceof Bq){const e={app:"com.apple.gamecenter.from.browse",kind:{name:bU}}
return t.referrerData=e,new MH([new IW(e),t])}return t}function Ta(e,t,n=!1){const r=Oa(e,t),o=e.client.isPhone
let i=o?eA:tA
n&&(i="topShelf")
const a=p(r,i)
let c=null,l=null
return s(a)&&(c=Nu(e,a,{withJoeColorPlaceholder:!0,useCase:6}),s(c)&&(c.crop=o?"oa":n?"ta":"ob",l=c.backgroundColor)),{artwork:c,artworkData:a,backgroundColor:l}}function Sa(e,t,n=!1){const r=function(e,t){switch(t.type){case _j:return H(t,dj)
case TU:return H(t,TC)
default:return we(t,Re(e,t),TC)}}(e,t),o=e.client.isPhone,i=o?"breakoutVideo9x16":"breakoutVideo16x9",a=p(r,o?"sizzleVideo9x16":"sizzleVideo16x9")||p(r,i)
let c=null,l=null,u=null
if(s(a)){u=p(a,kN)
const t=Nu(e,u,{withJoeColorPlaceholder:!0,useCase:6})
s(t)&&(t.crop="sr",l=t.backgroundColor)
const r=d(a,ej)
s(t)&&(null==r?void 0:r.length)>0&&(c=new JV(r,t,{canPlayFullScreen:!1,showPlaybackControls:!1,allowsAutoPlay:!0,looping:!0,playbackControls:{prominentPlay:n},autoPlayPlaybackControls:{}}))}return{video:c,artworkData:u,backgroundColor:l}}function Pa(e,t,n=!0,r,o){const i=Sa(e,t),s=Ta(e,t),a=i.backgroundColor||s.backgroundColor
return Ia(e,t,0,o),(t.type===TU?l(ka(0,t),"displayMaterial"):Y(t,Lv))&&n?xv:ba(0,a)}function ba(e,t){return t?U(t,50)?kj:NG:kj}function Ia(e,t,n,r){if(e.client.isPhone||r)return IG
const o=t.type===TU?d(ka(0,t),"textPosition"):q(t,EC)
if((0,Ig.isNothing)(o)||0===o.length)return bj
switch(o.toLowerCase()){case RC:return bj
case IG:return IG
case DC:return fM
default:return bj}}function Ca(e,t,n,r=!1){switch(t){case bj:case fM:return bj
case IG:return r||n.type===TU?IG:function(e,t){var n
switch((null!==(n=q(t,EC))&&void 0!==n?n:"").toLowerCase()){case RC:return bj
case IG:return IG
case DC:return fM
default:return bj}}(0,n)
default:return bj}}function ka(e,t){return t.type!==TU?null:H(t,"display.templateParameters")}function Oa(e,t){switch(t.type){case _j:return H(t,wj)
case TU:return H(t,Sv)
default:return we(t,Re(e,t),wj)}}function Ea(e,t){return t.type===TU?d(Tt(0,t),"callToActionLabel"):q(t,_C)}function Ra(e,t){const n=s(H(t,pj)),r=Y(t,L$)
return!n&&!r}function Da(e,t){const n=H(t,pj),o=s(n),i=Y(t,L$),a=ie(e,t,wG)
if(!o&&!i&&!K(a))return null
let c=null
if(c=o?d(n,Sj):q(i?t:a,Sj),r(c))return null
let l=null
if(o&&d(n,ox)===dD)l=new xH(c)
else{const t=e.required(C2).fetchFlowPage(c),n=new Bq(t)
n.pageUrl=c,t===JU&&(n.pageData=Hl(e,a)),l=n}return l.title=Ea(0,t),l}function _a(e,t,n=!1){if(o(t))return null
let r=null
const i=G(cj),s=G(LC),a=F(d(t,qN)),l=c(t,Mv).map(e=>F(e)),u=ba(0,a)
if(2===l.length){r=new jV("horizontalGradient")
const e=l[0],t=l[1]
r.gradientStartColor=j(e,e),r.gradientEndColor=j(t,t),r.filter=$v,n||(r.accessoryColor=r.gradientEndColor)}else r=new jV(NU),r.color=u===kj?i:s,n||(r.accessoryColor=r.color),r.isFallbackStyle=!0
return r}async function La(e,t,n,o,i){const s=n(e,t,i)
if(!s)return await Promise.resolve({originalData:t,additionalData:null})
const a=Array.from(s),c=[]
for(const t of a){const n=o(e,t)
if(r(n)){const e=a.indexOf(t)
a.splice(e,1)}else c.push(n)}return await Promise.all(c).then(e=>{const n=new Map
for(const[t,r]of a.entries()){const o=e[t]
n.set(r,o)}return{originalData:t,additionalData:n}})}function xa(e,t,n,r=cj){if(o(t)||o(t.attributes))return null
const s=Sa(e,t,!0),a=Ta(e,t),c=s.backgroundColor||a.backgroundColor,l=Ia(e,t,0,!0),u=Pa(e,t,!1,0,!0)!==xv&&!0,f=Fa(e,t,0,!1,u,nx)
let p=null
"tv"!==e.client.deviceType&&(p=f.description,f.description=null)
const h=function(e,t){const n=ka(0,t),r=d(n,"ctaButtonBackgroundColor"),o=d(n,"ctaButtonTextColor")
return i(r)&&i(o)?{type:kC,fillColor:F(r),textColor:F(o)}:{type:$R,fillColor:null,textColor:null}}(0,t),w=new PV(Gj,e.bag.arcadeAppAdamId,r,null,Gj,h,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId),g=new G0(f,w,{backgroundColor:c,wantsMaterialDetailBackground:!1,wantsBlur:u,badgeColor:null,titleColor:null,descriptionColor:null,callToActionColor:null,textAlignment:null,detailsPosition:l},null,p,a.artwork,s.video),m=Tf(e,t,g.details.title,{...n,targetType:IN})
return m.displaysArcadeUpsell=!0,gf(e,g,m),rf(e,m,g.details.title),g.offerButtonAction=Na(e,t,S$,n),sf(n.locationTracker),g}function Ma(e,t){return Ea(0,t)}function $a(e,t){return q(t,AG)}function Fa(e,t,n,r,o,i){let s=null
switch(i){case nx:s={type:nx}
break
case kG:const e=q(t,PF)
s=(null==e?void 0:e.length)>0?{type:kG,title:e}:{type:XG}
break
default:s={type:XG}}let a=Pa(e,t,r,0,!0)
const c=Ia(e,t,0,!0)
return o&&(a=kj),new Ez(function(e,t){return q(t,JG)}(0,t),$a(0,t),s,null,a,Ca(0,c,t,!0))}function Na(e,t,n,r){const o={marketingItemData:t},i=n===S$&&e.bag.arcadeDownloadPackPostSubscribeTrigger&&lt(e,e.bag.arcadeDownloadPackRolloutRate)
return Ba(e,o,Ma(0,t),r,i)}function Ba(e,t,n,r,o){const s=t.marketingItemData
if(!i(s))return null
const a=Tt(0,s),l=d(a,tG)===pj,u=d(a,Sj)
if(l&&u){const t=function(e,t){const n=e.bag.dynamicUIRegexStrings
for(const e of n)if(new RegExp(e).test(t)){const e=new Bq(GL,t)
return e.pageData=new OY,e}const r=e.bag.financeUIRegexStrings
for(const e of r)if(new RegExp(e).test(t))return new Bq(TB,t)
const o=e.bag.webViewRegexStrings
for(const e of o)if(new RegExp(e).test(t))return new Bq(jL,t)
return new xH(t,!1)}(e,u),o={id:e.bag.arcadeAppAdamId,actionType:rx,actionContext:oj,contextualAdamId:e.bag.arcadeAppAdamId,offerType:CC,targetType:Hj,mercuryMetricsData:Xd(0,s),...r}
return t.title=n,$f(e,t,o),t}{const t=function(e,t,n,r){const o=Tt(0,t),s=d(o,lB),a=d(o,PB)
if(!i(s)||!i(a))return null
const l=c(o,"serviceTypes").length>1&&e.bag.aristotleParentAppAdamId?e.bag.aristotleParentAppAdamId:e.bag.arcadeAppAdamId,u=new iW(s,l,{buyParams:a,productIdentifier:s,pageInformation:r.pageInformation}),f={id:l,actionType:rx,targetType:Hj,subscriptionSKU:s,actionContext:oj,contextualAdamId:l,actionDetails:{buyParams:a},offerType:CC,mercuryMetricsData:Xd(0,t),...r}
return u.title=n,$f(e,u,f),u}(e,s,n,r)
if(o){const e=new Bq(_$),r=P$
e.pageData=r,e.presentationContext=ZB
const o=new uW(void 0,void 0,e,void 0),i=new MH([t,o])
return i.title=n,i}return t}}function Ua(e,t){const n=new Set,r=_(e,t),o=se(r,cx)
for(const t of o){const o=ja(e,t,r)
if(s(o))for(const e of o)n.add(e)}return n}function Ga(e,t){let n
return t===nR&&(n=qf(e,MR)),t===rR&&(n=Wf(e,10)),r(n)?null:Tn(e,n).catch(()=>null)}function ja(e,t,n){if(q(t,HP)!==oR)return null
const o=q(t,WP),i=r(zf(e,n)),s=[]
return o===qP&&(s.push(rR),i&&s.push(nR)),s}function Va(e,t,n,a,c){return Pg.catchingContext(`module: ${a.module}`,()=>{var c
const l=[]
switch(a.module){case"Header":a.titleForNextShelf=q(t,DN)
break
case"TextBlock":{const e=function(e,t,n){const r=q(t,DN)
if(!r)return null
const o=new NV(r,AU,KG)
za(0,o,n)
const i=new $z(AB)
return i.items=[o],i}(0,t,a);(0,Ig.isSome)(e)&&(l.push(e),a.hasNonFocusableElements=!0)
break}case"CollectionLockup":{const n=function(e,t,n){const r=Y(t,"showOrdinals"),o="OrdinalDesc"===q(t,"collectionLockupDisplayType")?UA:"ascending",i=q(t,"collectionLockupSize")
let s
if(n.subStyle=i,i)switch(i){case XP:s=N$
break
case QP:s=cG
break
default:s=gj}const a={metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,artworkUseCase:Fu(0,s),canDisplayArcadeOfferButton:Nd(0,s)},c=Iu(e,se(t,qj),{includeOrdinals:r,ordinalDirection:o,lockupOptions:a})
if(!c||0===c.length)return null
const l=new $z(s)
return l.items=c,l}(e,t,a);(0,Ig.isSome)(n)&&(l.push(n),a.hasFocusableElements=!0)
break}case zP:{const n=function(e,t,n){const r=q(t,"inlineImageDisplayType"),o=Nu(e,H(t,Nj),{useCase:13,allowingTransparency:r===rM&&!0,withJoeColorPlaceholder:!1})
if(!o)return null
const i=new Tz(o,!1,AU)
i.caption=q(t,DN),n.subStyle=r,r&&("BoundingBox"===r?(i.isFullWidth=!1,i.hasRoundedCorners=!0):(i.isFullWidth=!0,i.hasRoundedCorners=!1)),za(0,i,n)
const s=new $z(nM)
return s.items=[i],s}(e,t,a);(0,Ig.isSome)(n)&&(l.push(n),a.hasNonFocusableElements=!0)
break}case YP:{const n=function(e,t,n){const r=qa(e,t)
if(!r)return null
let o=null
const a=se(t,Uj)
if(s(a)&&(o=ta(e,a,n.metricsPageInformation,n.metricsLocationTracker,n),i(o)))return o
const c=q(t,"appLockupSize")
let l
n.subStyle=c
let u=!1
if(c)switch(c){case ZP:l=gj,u=!0
break
case QP:l=cG,u=!0
break
default:l=ZC}const d=at(0,t)
if(u){const t=new $z(l),i=wu(e,r,{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,externalDeepLinkUrl:d,artworkUseCase:Fu(0,l)})
t.items=[i],o=t}else o=function(e,t,n){const r=new $z(ZC),o="tv"!==e.client.deviceType,i=qa(e,t),s=at(0,t),a=wu(e,i,{offerStyle:OB,metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,externalDeepLinkUrl:s,crossLinkSubtitle:n.crossLinkSubtitle,artworkUseCase:1}),c=new qq(sB,a)
c.description=uu(e,i)
let l=null
switch(q(t,"appLockupVideo")){case"AppTrailer":{const t=zu(e,i)
t&&t.length>0&&(l=t[0])
break}}return l&&(Ao(e,l,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,id:n.pageId}),c.video=l),o&&(r.background={type:NU,color:V0}),r.items=[c],r}(e,t,n)
return o}(e,t,a);(0,Ig.isSome)(n)&&(l.push(n),a.hasFocusableElements=!0)
break}case"TipBlock":{const n=function(e,t,n){const r=Nu(e,H(t,Nj),{useCase:13})
if(!r)return null
const o=q(t,DN),i=q(t,"tipNumber"),s=new Tz(r,!1,AU)
s.isFullWidth=!1,s.hasRoundedCorners=!0,s.caption=o,s.ordinal=i,za(0,s,n)
const a=new $z(nM)
return a.items=[s],a}(e,t,a);(0,Ig.isSome)(n)&&(l.push(n),a.hasNonFocusableElements=!0)
break}case"PullQuote":{const n=function(e,t,n){const r=q(t,KP),o=q(t,"quoteAttribution"),i=Nu(e,H(t,Nj),{useCase:13}),s=q(t,"pullQuoteDisplayType")===rM,a=new bz(r,o,i,s)
za(0,a,n)
const c=new $z(KP)
return c.items=[a],c}(e,t,a);(0,Ig.isSome)(n)&&(l.push(n),a.hasNonFocusableElements=!0)
break}case"HorizontalRule":{const e=function(e,t,n){const r=q(t,"lineStyle"),i=q(t,iG)===rM
let s=G("defaultLine")
const a=H(t,"customColor"),c=F(d(a,"lightMode")),l=F(d(a,"darkMode"))
o(c)||o(l)||(s=j(c,l))
const u=new Cz(r,s,i),f=new $z("horizontalRule")
return f.items=[u],f}(0,t);(0,Ig.isSome)(e)&&(l.push(e),a.hasNonFocusableElements=!0)
break}case JP:{const n=function(e,t,n){const r=Nu(e,H(t,"video.previewFrame"),{useCase:13})
if(!r)return null
const o=q(t,"video.video")
if(!o)return null
const i=q(t,"inlineVideoDisplayType")===rM,s=new JV(o,r,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}})
Ao(e,s,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,id:n.pageId})
const a=new Sz(s,i,AU)
a.caption=q(t,DN),za(0,a,n)
const c=new $z(Z_)
return c.items=[a],c}(e,t,a);(0,Ig.isSome)(n)&&(l.push(n),a.hasFocusableElements=!0)
break}case"AppMedia":{const n=function(e,t,n){const o=qa(e,t)
if(!o)return null
const s=q(t,"appMediaOption"),a=q(t,"appMediaPlatform")
switch(n.subStyle=s,s){case"Screenshots":{let t=null
if(t=new $z($j),r(a)){const n=Yu(e,o,14)
n&&n.length>0&&(t.items=[n[0]])}else{const n=function(e,t){switch(t){case Vk:return Vj
case OU:return e.client.isPad?Lj:Bj
case LN:return"tv"
case Hk:return LG
case"visionOS":return Tj
default:return null}}(e,a)
if(n){const r=Yu(e,o,14,[n])
r&&r.length&&(t.items=[r[0]])}}return i(t)&&0===t.items.length?null:t}case"AppTrailers":const t=new $z(Z_),s=zu(e,o)
if(s&&s.length>0){const r=s[0]
Ao(e,r,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,id:n.pageId})
const o=new Sz(r,!1,wU,null,null,!0)
return t.items=[o],t}return null
default:return null}}(e,t,a);(0,Ig.isSome)(n)&&(l.push(n),a.hasFocusableElements=!0)
break}case"LinkBlock":{const r=function(e,t,n,r){const o=q(t,Sj)
if(!o)return null
const i=new xq(o),s=q(t,"urlTitle")
let a=q(t,DN)
a||(a=i.host)
const c=[eb,iN,"music.apple.com","books.apple.com","podcasts.apple.com","watch-app.cdn-apple.com","tv.apple.com"]
let l=!1
for(const e of c)i.host.endsWith(e)&&(l=!0)
e.bag.disabledRichLinkPresentationEditorialItemIds.includes(r.id)&&(l=!1)
const u=new xH(o)
$f(e,u,{targetType:pj,pageInformation:n.metricsPageInformation,id:`${n.index}`,locationTracker:n.metricsLocationTracker})
const d=new gz(s,a,u,l)
za(0,d,n)
const f=new $z(tR)
return f.items=[d],f}(e,t,a,n);(0,Ig.isSome)(r)&&(l.push(r),a.hasFocusableElements=!0)
break}case"TextList":{const e=function(e,t,n){const r=W(t,DN)
if(!r.length)return null
const o=q(t,"textListDisplayType")
n.subStyle=o
let i,s=!1
s="Bulleted"===o,i=s?"<ul>":"<ol>"
for(const e of r){const t=JSON.stringify(e)
i=`${i}<li>${JSON.parse(t)}</li>`}i=s?`${i}</ul>`:`${i}</ol>`
const a=new NV(i,AU,KG)
za(0,a,n)
const c=new $z(AB)
return c.items=[a],c}(0,t,a);(0,Ig.isSome)(e)&&(l.push(e),a.hasNonFocusableElements=!0)
break}case"IAPLockup":{const n=function(e,t,n){const r=qa(e,t)
if(!r)return null
const o=gu(e,r,{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,artworkUseCase:1})
if(!o)return null
const i=new Jq(o),s=new $z("inAppPurchaseShowcase")
return s.background={type:NU,color:j0},s.items=[i],s}(e,t,a);(0,Ig.isSome)(n)&&(l.push(n),a.hasFocusableElements=!0)
break}case oR:{const o=function(e,t,n,o){const a=q(t,WP)
o.subStyle=a
let c=null
switch(a){case"OSUpgrade":c=function(e,t,n){const r=e.client.deviceType
if(r!==jj)return null
const o=pt(r)
if(null===o)return null
const i=new xH(o)
$f(e,i,{targetType:pj,pageInformation:n.metricsPageInformation,id:`${n.index}`,locationTracker:n.metricsLocationTracker})
const s=e.loc.string("CLIENT_CONTROL_OS_UPGRADE_TITLE","CHECK FOR UPDATE"),a=new Oz(s,i)
za(0,a,n)
const c=new $z("clientControlButton")
return c.items=[a],c}(e,0,o)
break
case qP:c=function(e,t,n,o){let a=zf(e,n)
if(!a&&o.additionalData&&(a=Yf(0,o.additionalData.get(nR))),!i(a))return null
const c={pageInformation:o.metricsPageInformation,locationTracker:o.metricsLocationTracker},l=jf(0,o.metricsPageInformation,o.metricsLocationTracker,!1)
let u
l.title=e.loc.string(Q$,X$)
const d=Ea(0,a.marketingItemData)
s(d)?(u=Na(e,a.marketingItemData,MR,c),i(u)&&(u.title=d)):(u=jf(0,o.metricsPageInformation,o.metricsLocationTracker,!1),u.title=e.loc.string(Q$,X$))
const f=new Lz(u,l),p=$a(0,a.marketingItemData)
f.unsubscribedDescription=p
const h=new PV(Gj,e.bag.arcadeAppAdamId,OB,null,kj,null,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId)
h.titles[xx]=e.loc.string(Q$,X$),f.offerDisplayProperties=h,gf(e,f,{...c,targetType:RD,title:d,id:t.id,kind:RD,softwareType:null,displaysArcadeUpsell:!0})
{if(r(o.additionalData))return null
const t=o.additionalData.get(rR)
if(s(t)){const n={pageInformation:o.metricsPageInformation,locationTracker:o.metricsLocationTracker},r=M(t)
f.iconArtworks=Uu(e,r,n,{useCase:2})}}const w=new $z(RD)
return w.items=[f],w.background={type:NU,color:H0},w}(e,t,n,o)}return c}(e,t,n,a);(0,Ig.isSome)(o)&&(l.push(o),a.hasFocusableElements=!0)
break}case"StoryList":{const n=function(e,t,n,r){const o=se(t,qj)
if(!o)return null
const i=q(t,Yj),s=q(t,WB),a=GU,c=Zf(e,o,a,i,s,n,null)
return Array.isArray(c.items)&&(c.items=c.items.filter(e=>!(e instanceof yY)||Jf(0,e.media.kind,a))),c}(e,t,a);(0,Ig.isSome)(n)&&(l.push(n),a.hasFocusableElements=!0)
break}case"AppEventLockup":{const n=function(e,t,n){const r=qa(e,t)
return r?ta(e,[r],n.metricsPageInformation,n.metricsLocationTracker,n):null}(e,t,a);(0,Ig.isSome)(n)&&(l.push(n),a.hasFocusableElements=!0)
break}case"OfferItemLockup":{const n=function(e,t,n){const r=ie(e,t,qj)
if(o(r))return null
const i=q(t,DN),s=new NV(i,AU,KG),a=new $z(AB)
return a.items=[s],[a,ta(e,[r],n.metricsPageInformation,n.metricsLocationTracker,n)]}(e,t,a);(0,Ig.isSome)(n)&&(l.push(...n),a.hasFocusableElements=!0)
break}default:e.console.log(`Unknown module: ${a.module}`)}for(const e of l){const t=null!==(c=e.presentationHints)&&void 0!==c?c:{}
e.presentationHints={...t,isArticleContext:!0}}return l})}function Ha(e,t){const n=se(t,gG)
if(1!==n.length)return null
const r=n[0]
if(!r)return null
switch(r.type){case zj:case xj:return r
default:return null}}function Wa(e){return e.client.deviceType===jj?cj:lG}function qa(e,t,n){return ie(e,t,qj)||null}function za(e,t,n,o){if(!t)return
let i=n.module
n.subStyle&&(i=i+"_"+n.subStyle),r(o)&&(o={id:`${n.index}`,impressionIndex:n.index,idType:fj,impressionType:i,kind:"iosModule"}),t.impressionMetrics=new EH(Jd(o))}function Ya(e,t,n){const r=new F0
r.overlayType=Ja(e,t),r.displayOptions={horizontalPlacement:Xa(e,t),textAlignment:ec(e,t),isOverDarkContent:Qa(e,t)}
const a=Gd(e,t),c=q(t,GG)
if(Oe(e,t,jF)?r.badgeText=e.loc.uppercased(Ud(e,a,c)):r.badgeText=c,r.titleText=_d(e,t,Yj)||Ce(e,a,Yj),r.overlayType===UD||r.overlayType===Lk?r.descriptionText=_d(e,t,WB):r.descriptionText=_d(e,t,FB)||Ce(e,a,WB),r.callToActionText=q(t,_C),r.buttonTitle=Za(e,t),r.overlayType!==ij&&r.overlayType!==UD||(r.lockup=function(e,t,n){let r=ie(e,t,wG)
const i=se(t,gG)
if(o(r)&&s(i)&&(r=i[0]),o(r))return null
const a={metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:$(t)},artworkUseCase:n.lockupArtworkUseCase,offerStyle:aB,offerEnvironment:kj,canDisplayArcadeOfferButton:n.canDisplayArcadeOfferButton,shouldHideArcadeHeader:e.featureFlags.isEnabled(k$),isContainedInPreorderExclusiveShelf:n.isContainedInPreorderExclusiveShelf},c=wu(e,r,a),l=Gd(e,t),u=_d(e,t,FB)||Ce(e,l,WB)
return(null==u?void 0:u.length)>0&&(c.subtitle=u),c}(e,t,n)),(null==c?void 0:c.length)>0&&i(r.lockup)&&(r.lockup.heading=c),r.collectionIcons=function(e,t){const n=se(t,gG)
if(o(n))return null
const r=[]
for(const t of n){const n=ju(e,t,{useCase:1,withJoeColorPlaceholder:!0})
s(n)&&r.push(n)}return s(r)?r:null}(e,t),s(r.lockup))r.clickAction=r.lockup.clickAction,r.impressionMetrics=r.lockup.impressionMetrics
else{const o={targetType:ij,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:$(t)},i=Ka(e,t),s=Da(e,t)
s.title=i,$f(e,s,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:$(t),targetType:ij,id:t.id}),r.clickAction=s,gf(e,r,Tf(e,t,i,o))}return r}function Ja(e,t){const n=Y(t,Lv),r=q(t,tG),a=se(t,gG),c=_d(e,t,WB),l=function(e){return lt(e,e.bag.hero3RolloutRate)}(e)&&(null==c?void 0:c.length)>0
let u=ie(e,t,wG)
return o(u)&&s(a)&&(u=a[0]),i(u)&&"App"===r?l?UD:ij:s(a)&&"Collection"===r?l?Lk:xk:n?GD:kG}function Ka(e,t){const n=Ja(e,t),r=ie(e,t,wG)
switch(n){case ij:case UD:return q(r,Yj)
case GD:case kG:case xk:case Lk:return _d(e,t,Yj)||Ce(e,r,Yj)
default:return null}}function Za(e,t){if("tv"!==e.client.deviceType)return null
switch(Ja(e,t)){case ij:return e.loc.string(Xy)
case GD:case kG:let t=e.loc.string(Ik)
return t===Ik&&(t=e.loc.string(Xy)),t
case xk:return e.loc.string("HERO_CAROUSEL_OVERLAY_BUTTON_TITLE_COLLECTION")
default:return null}}function Qa(e,t){const n=Sa(e,t),r=Ta(e,t),o=n.backgroundColor||r.backgroundColor
return!o||U(o,50)}function Xa(e,t){if(e.client.isPhone)return IG
const n=q(t,EC)
if(!s(n))return bj
switch(n.toLowerCase()){case RC:return bj
case IG:return IG
case DC:return fM
default:return bj}}function ec(e,t){return Xa(e,t),bj}function tc(e){return`${e.shelfIdentifier}.${e.slot}`}function nc(e,t){if(r(e))return null
const n=tc(t),o=e.tasks[n]
return r(o)?null:(delete e.tasks[n],o)}function rc(e,t,n){var r
const o=(null==n?void 0:n.meta)||null,i=null===(r=null==o?void 0:o.adDisplayStyle)||void 0===r?void 0:r.slot
return(0,Ig.isSome)(i)?oc(e,t,{shelfIdentifier:Q0,slot:i}):oc(e,t,Z0)}function oc(e,t,n){const o=null==t?void 0:t.mediaResponse
if((0,Ig.isNothing)(o)||(0,Ig.isSome)(null==t?void 0:t.failureReason))return null
const i={tasks:{}}
return function(e,t){if(r(e))return
const n=tc(t.positionInfo)
e.tasks[n]=t}(i,{data:_(e,o),positionInfo:n}),i}async function ic(e){const t=new Array(e.length)
let n=e.length
return await new Promise((r,o)=>{const s=function(){if(0===n){const e=t.map(e=>e.status===ix?e.reason:null).filter(i)
0===e.length?r(t):1===t.length&&1===e.length?o(e[0]):o(new e1(e))}}
for(let r=0;r<e.length;r++){const o=r
e[o].promise.then(r=>{t[o]={status:fD,value:r,isRequired:e[o].isRequired},n--,s()},r=>{t[o]={status:ix,reason:r,isRequired:e[o].isRequired},n--,s()})}})}function sc(e,t,n){if(o(t))return
const r=function(e){return d(e,"meta.metrics.clusterId")}(n)
o(r)||function(e,t,n){const r=cc(t)
e.storage.storeString(r,n)}(e,t,r)}function ac(e,t){return o(t)?null:function(e,t){const n=cc(t)
return e.storage.retrieveString(n)}(e,t)}function cc(e){return e+"-cohort-id"}async function lc(e,t,n){const r={primaryPageData:null,additionalData:{},requiredAdditionalDataFailureReason:void 0},o=Object.keys(n),s=[t,...o.map(e=>n[e])],a=await ic(s)
switch(a[0].status){case fD:r.primaryPageData=a[0].value
break
case ix:r.primaryPageDataFetchFailureReason=a[0].reason}const c=a.slice(1)
for(const[t,n]of c.entries()){const s=o[t]
switch(n.status){case fD:r.additionalData[s]=n.value
break
case ix:r.additionalData[s]=null,e.console.log(`Builder - failed to fetch additionalPageRequirement ${s}, isRequired: ${n.isRequired}, reason: ${n.reason}`),n.isRequired&&(r.requiredAdditionalDataFailureReason=n.reason)}if(i(r.requiredAdditionalDataFailureReason))break}return r}function uc(e,t,n){const r=new $z(n||r1)
r.isHorizontal=!1,r.items=CA
const o=new Gz([r])
return o.isIncomplete=!0,o.title=t,o}function dc(e,t){if(!(0,bg.isNothing)(t))switch(t){case"top-free":return"top-paid"
case"top-paid":return"top-free"
default:return}}async function fc(e,t,n,r=null){const o=function(e,t,n,r=null,o=e.host.clientIdentifier){const i=[eG,sG,yG]
e.appleSilicon.isSupportEnabled&&i.push(CG)
const a=new zz(e).forType(MM).addingQuery(vG,t).includingAttributes(i).addingQuery(LF,zj).includingMacOSCompatibleIOSAppsWhenSupported(!0).includingAdditionalPlatforms(O(e)).usingCustomAttributes($e(e))
return s(n)&&a.addingQuery(Aq.charts,n),o===tH?a.addingContext(Vj):o===nH&&a.addingContext(LG),e.appleSilicon.isSupportEnabled&&a.includingAdditionalPlatforms([fG,hG]),(0,bg.isSome)(r)&&a.addingQuery(Aq.ages,r),a}(e,t,n,r)
return o.withLimit(200),o.enablingFeature("newChartsElements"),await Tn(e,o)}async function pc(e,t,n){let r
return r=e.host.clientIdentifier===nH||function(e){return s(e)&&(-1!==e.indexOf("top-free-safari-extensions")||-1!==e.indexOf("top-paid-safari-extensions"))}(t)?Promise.resolve({}):Tn(e,Gn(e,n)).catch(()=>{}),await r}function hc(e,t,n,r){const o={...n,shouldFilter:!Y(t,YD),chartUrl:q(t,PM),chartIdentifier:q(t,TG),roomRelationshipData:ie(e,t,"room")}
return $n(o.featuredContentId)?(o.seeAllUrl=function(e,t,n){const r=q(t,PM),o=new xq(r),i=q(t,TG)
s(i)&&o.param(Aq.chart,i)
const a=function(e,t,n){var r
const o=null!==(r=(null==n?void 0:n.editorialCharts.length)>1)&&void 0!==r&&r,i=null==n?void 0:n.editorialCharts.map(e=>e.type.toString()).join(",")
if((0,bg.isSome)(i)&&i.includes(t)&&o)return i
const s=dc(0,t)
return void 0===s?t:[t,s].join(",")}(0,i,n)
return s(a)&&o.param(Aq.charts,a),o.toString()}(0,t,r.chartSet),o.showOrdinals=!0,o.shouldFilter=!1):s(o.roomRelationshipData)&&(o.seeAllUrl=fa(e,o.roomRelationshipData.href)),o.shelfStyle=function(e,t,n,r){const o=n.featuredContentId
if(557===o||418===o||495===o||function(e){return VQ.has(e)}(o)){let e=q(t,iG)
return e||(e=311===o||312===o?sB:495===o||557===o?qD:EB),`${e}Lockup`}if(431===o)return zD
if(429===o)return jM
if(304===o||305===o||430===o||420===o)return GM
if($n(o))return gj
if(497===o)return Y$
switch(r.shelves.length%3){case 0:return gj
case 1:return cG
default:return N$}}(0,t,o,r),o.clientIdentifierOverride=Kt(e,t),o}function wc(e,t,n,a){const c=(l=t.featuredContentId,UQ.has(l)?84862:80894)
var l
let u,f,h=[]
if(s(n.shelfContents)){const o=function(e,t,n,o,s){const a=nc(t,o)
if(r(a))return null
const c=a.data,l=gc(e,c,s)
return i(l)?s.includedAdAdamIds=[c.id]:mo(e,n,c),l}(e,null==a?void 0:a.adStitcher,null==a?void 0:a.adIncidentRecorder,Z0,t)
o&&o instanceof nz&&(h.push(o),uf(t.metricsLocationTracker),t.ordinalIndex++,n.shelfContents=n.shelfContents.filter(e=>e.id!==o.adamId))}for(const o of n.shelfContents){if(o.type===Uj)return null
if(557===t.featuredContentId&&o.type===_j){u=o
continue}if(r(o.attributes)||qn(t)){t.isDeferring=!0,t.remainingItems.push(o)
continue}if(tt(e,o,c))continue
const n=gc(e,o,t)
n&&(h.push(n),uf(t.metricsLocationTracker),t.ordinalIndex++)}!$n(t.featuredContentId)||Nn(t.featuredContentId)||Fn(t.featuredContentId)||(h=function(e,t){if(!e)return null
const n=e.length,r=n%3
return n>=3?e.slice(0,n-r):e}(h)),delete t.maxItemCount,f=Fn(t.featuredContentId)?Vf(e,t.title):{eyebrow:t.eyebrow,eyebrowArtwork:t.eyebrowArtwork,title:t.title,titleArtwork:t.titleArtwork,subtitle:t.subtitle,configuration:t.shelfHeaderConfiguration}
const w=new $z(t.shelfStyle)
let g
if(w.isHorizontal=!0,w.items=h,w.shouldFilterApps=t.shouldFilter,557===t.featuredContentId?function(e,t,n,r,o,i,a){if((0,bg.isNothing)(i)&&(i=ie(e,t.featuredContentData,bA)),r.configuration.includeTrailingArtwork=!0,!K(i)){const e=q(t.featuredContentData,Yj)
return r.eyebrow=e,r.title="",n.footerTitle="",t.isDeferring=!0,void t.remainingItems.push(i)}const c=q(t.featuredContentData,Yj)
r.eyebrow=c
const l=H(i,xU),u=d(l,Yj)
r.title=u,cf(t.metricsLocationTracker).name=u,s(t.originalPlaceholderShelfImpressionMetrics)&&(t.originalPlaceholderShelfImpressionMetrics.fields.name=u)
const f=H(i,wj)
if((0,bg.isNothing)(f))return void(n.isHidden=!0)
const h=p(f,"storyBackgroundStatic16x9"),w=er(e,h,{useCase:28,withJoeColorPlaceholder:!0}),g=U(w.backgroundColor)?kj:NG
n.background={type:Nj,artwork:w,style:g},o.forEach((t,n)=>{(0,bg.isSome)(t)&&t instanceof nz&&(t.offerDisplayProperties=t.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,aB,g),t.subtitleTextFilter=$v,e.props.enabled(PA)||(t.redownloadButtonTint=G(cj)))})
const m=p(f,IA)
if((0,bg.isNothing)(m))return void(n.isHidden=!0)
const v={contentMode:Cg.scaleAspectFit,useCase:18},y=er(e,m,v)
r.trailingArtwork=y
const A=d(i.attributes,Sj),T=d(i.attributes,_C),S={id:i.id,idType:aj,targetType:Hj,actionType:Fj,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker}
if((0,bg.isSome)(A)){n.footerTitle=T
const t=e.required(C2).fetchFlowPage(A),r=new Bq(t)
r.title=T,r.pageUrl=A,$f(e,r,S),n.footerAction=r}else{const r={targetType:Hj,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:$(i)},o=nr(e,i,t,!1,null,r,a);(0,bg.isSome)(o.action)&&(o.action.actionMetrics.clearAll(),o.action.title=null!=T?T:d(l,"callToAction"),$f(e,o.action,S),n.footerAction=o.action,n.footerTitle=o.action.title)}}(e,t,w,f,h,u,a):e.props.enabled(PA)||w.items.forEach((e,t)=>{(0,bg.isSome)(e)&&e instanceof nz&&(e.redownloadButtonTint=G(jk))}),w&&o(w.items)&&t.isFirstRender&&ia(e,w,t,t.featuredContentId),$n(t.featuredContentId))g=new Bq(Ex)
else if(g=new Bq(Jj),!aa(w)){const e=function(e,t){if(!t)return null
switch(t){case F$:case zD:return t
default:return null}}(0,t.shelfStyle)
g.pageData=uc(0,t.title,e)}g.pageUrl=t.seeAllUrl,g.title=e.loc.string(UU),g.referrerUrl=t.metricsPageInformation.pageUrl,Ff(e,g,t.seeAllUrl,{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker})
const m=function(e,t,n){return 557!==n.featuredContentId&&!Nn(n.featuredContentId)&&!Fn(n.featuredContentId)&&497!==n.featuredContentId}(0,w.items,t),v=i(g.pageUrl)||i(g.pageData)
if(m&&v&&cr(e,f,g),t.shelfStyle===jM||t.shelfStyle===GM){const e=q(t.featuredContentData,"suppressTagline")!==zG
r(w.presentationHints)?w.presentationHints={showSupplementaryText:e}:w.presentationHints={...w.presentationHints,showSupplementaryText:e}}return t.shelfStyle,w.header=f,w.url=Jn(w,t),w}function gc(e,t,n){if(o(t))return null
let a
n.showOrdinals&&(a=e.loc.decimal(n.ordinalIndex))
let c,l=null
!i(n.shelfBackground)||n.shelfBackground.type!==NU&&n.shelfBackground.type!==$D||(l=cj),s(n)&&(c=n.clientIdentifierOverride)
const u={ordinal:a,metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:$(t),isAdvert:zr(0,t)},clientIdentifierOverride:c,artworkUseCase:Fu(0,n.shelfStyle),offerStyle:l,canDisplayArcadeOfferButton:Nd(0,n.shelfStyle),isContainedInPreorderExclusiveShelf:497===n.featuredContentId,shouldHideArcadeHeader:e.featureFlags.isEnabled(k$)&&n.isArcadePage}
let d
switch(n.shelfStyle){case GM:d=function(e,t,n,r){return Pg.context("trailersLockupFromData",()=>{const o=new sz
return function(e,t,n,r,o){t&&Pg.context("copyDataIntoTrailersLockup",()=>{au(e,t,n,o),n.trailers=Wu(e,t,r,o.metricsOptions,n.adamId)})}(e,t,o,r,n),o})}(e,t,u,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}})
break
case jM:d=mu(e,t,u)
break
case Y$:d=vu(e,t,u)
break
case F$:case zD:d=gu(e,t,u)
break
case"smallImageLockup":case _N:case Px:d=Au(e,t,u,zg.EditorialLockupLarge)
break
default:d=wu(e,t,u)}return r(d)||!d.isValid()?null:d}function mc(e,t){const n=e.bag.dynamicUIRegexStrings
for(const e of n){const n=e.replace(/\//g,"\\/")
if(new RegExp(n).test(t)){const e=new Bq(GL,t)
return e.pageData=new OY,e}}const r=e.bag.webViewRegexStrings
for(const e of r){const n=e.replace(/\//g,"\\/")
if(new RegExp(n).test(t))return new Bq(jL,t)}return new Bq(TB,t)}function vc(e,t,n){Pg.catchingContext("parseGrouping",()=>{for(const r of t.data){const o=J(r,SB)
if($n(o)){const e=d(r,"id")
n.chartSet=yc(e,t.editorialChartSets)}else n.chartSet=null
const s=Wn(e,r,n),a=s.shelfToken,c=s.metricsOptions
let l
for(const t of d1)if(t.supports(e,r,o)){l=Pg.catchingContext("parseGroupingShelf",()=>t.createShelf(e,r,n,a,c))
break}i(l)&&(n.shelves.push(l),ao(e,n.shelves,yU,c.id,n.metricsPageInformation))}})}function yc(e,t){for(const n of t){if(n.id===e)return n
for(const t of n.editorialCharts)if(t.id===e)return n}return null}function Ac(e,t){const n=[],r=[]
return function t(o){const s=J(o,SB)
Pg.catchingContext(`flattenGroupingTree.addMediaApiDataToGroupingData: ${s}`,()=>{const a=ie(e,o,yF)
if(i(a))t(a)
else if(function(e){return qQ.has(e)}(s)){const e=se(o,oG)
for(const n of e)t(n)}else if(424===s){const e=424!==J(c=o,SB)?null:{id:d(c,"id"),name:q(c,Yj),editorialCharts:se(c,oG).map(e=>function(e){return $n(J(e,SB))?{id:d(e,"id"),href:q(e,PM),name:q(e,Yj),type:q(e,TG)}:null}(e)).filter(e=>(0,Ig.isSome)(e))};(0,Ig.isSome)(e)&&r.push(e)
const n=se(o,oG)
for(const e of n)t(e)}else n.push(o)
var c})}(t),{data:n,editorialChartSets:r,originalGroupingData:t}}function Tc(e,t,n){var r
if(e.user&&e.user.isManagedAppleID)return null
{const t=[],n=e.loc.string("FOOTER_REDEEM",lC),o=mc(e,e.bag.redeemUrl),i=new Az(n,o)
if(i.id=hM,t.push(i),e.bag.isMonetaryGiftingEnabled){const n=e.loc.string("FOOTER_SEND_GIFT",ov),r=mc(e,wM),o=new Az(n,r)
o.id=wM,t.push(o)}const s=e.bag.accountTopUpURL
if((0,Ig.isSome)(s)){const n=null!==(r=e.bag.accountTopUpTitle)&&void 0!==r?r:e.loc.string("FOOTER_ADD_MONEY"),o=mc(e,s),i=new Az(n,o)
i.id="topUp",t.push(i)}let a
{a=new $z("titledButtonStack")
const e=new yz(t)
e.compactLineBreaks=e.buttons.map((e,t)=>t),a.items=[e]}return a}}function Sc(e,t,n=!0){const r=new xH(t),o=e.loc.string(Rk),i=new ez(o)
i.clickAction=r,i.presentationStyle=[FD,ND],n&&i.presentationStyle.push(BD)
const s=new $z("footnote")
if(s.items=[i],e.bag.emailSupportLinkURL){const t=new xH(e.bag.emailSupportLinkURL),r=new ez("Email Support")
r.clickAction=t,r.presentationStyle=[FD,ND],n&&r.presentationStyle.push(BD),s.items.push(r)}return s}function Pc(e,t,n,r){const o=new $z("unifiedMessage")
return o.id=t,o.items=[new Mz(t,n,r)],o.isHidden=!0,o}function bc(e,t,n,r,o,a,l){const u=c(t,HG),d=[]
for(const t of u){const c=m(t)
if(s(c)){const t=Ic(e,c,n,r,o,a,l)
i(t)&&d.push(t)}}if(0===d.length){const t=function(e,t,n,r,o){const i=JO,s=e.loc.string("PRODUCT_PRIVACY_NO_DETAILS_PROVIDED_TITLE"),a=e.loc.string("PRODUCT_PRIVACY_NO_DETAILS_PROVIDED_BODY"),c=ce(e,x_),l=Cc(e,t,i,n,r,o)
return new w1(i,s,a,c,n,[],[],l)}(e,n,r,a,l)
d.push(t)}for(const t of d)gf(e,t,{id:null,kind:null,softwareType:null,title:t.title,pageInformation:a,locationTracker:l,targetType:XO}),uf(l)
return d}function Ic(e,t,n,r,a,l,u){const f=d(t,eE),p=d(t,L_),h=d(t,yj)
if((0,bg.isNothing)(f)||o(f)||(0,bg.isNothing)(p)||o(p)||(0,bg.isNothing)(h)||o(h))return null
const w=Rc(e,t,function(e,t){switch(t){case"DATA_NOT_LINKED_TO_YOU":return"resource://person.circle.slash"
case"DATA_USED_TO_TRACK_YOU":return"systemimage://person.fill.viewfinder"
case"DATA_NOT_COLLECTED":return"systemimage://checkmark.circle"
case"DATA_LINKED_TO_YOU":return dS
default:return null}}(0,f)),g=a?kc(e,t,r):[],v=function(e,t,n){const r=c(t,"purposes"),o=[]
for(const t of r){const r=m(t)
if(s(r)){const t=Ec(e,r,n)
i(t)&&o.push(t)}}return o}(e,t,r),y=Cc(e,n,f,r,l,u)
return new w1(f,p,h,w,r,v,g,y)}function Cc(e,t,n,r,o,i){let s=null
return r!==FU&&r!==Wx||(s=$c(e,t,Dc(e)&&r===FU?Wx:nB,o,i,n)),s}function kc(e,t,n){const r=c(t,"dataCategories"),o=[]
for(const t of r){const r=m(t)
if(s(r)){const t=Oc(e,r,n===FU?FU:nB)
i(t)&&o.push(t)}}return o}function Oc(e,t,n){const i=d(t,eE),s=d(t,"dataCategory")
if((0,bg.isNothing)(i)||o(i)||(0,bg.isNothing)(s)||o(s))return null
const a=Rc(e,t,function(e,t){switch(t){case"FINANCIAL_INFO":return"systemimage://creditcard.fill"
case"CONTACT_INFO":return"systemimage://info.circle.fill"
case"OTHER":return"systemimage://ellipsis.circle.fill"
case"SENSITIVE_INFO":return"systemimage://eye.fill"
case uS:return"systemimage://chart.bar.fill"
case"CONTACTS":return dS
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
n===nB&&(l=c(t,"dataTypes"))
const u=new m1(i,s,a,n,l)
return i===uS&&(u.prefersSmallArtwork=!0),u}function Ec(e,t,n){const r=d(t,eE),i=d(t,"purpose"),s=kc(e,t,n)
return(0,bg.isNothing)(r)||o(r)||(0,bg.isNothing)(i)||o(i)||0===s.length?null:new g1(r,i,s)}function Rc(e,t,n){let o=null
if((0,bg.isSome)(n)&&(null==n?void 0:n.length)>0&&(o=ce(e,n)),r(o)){const n=p(t,Nj)
i(n)&&(o=Nu(e,n,{useCase:0,allowingTransparency:!0}))}return o}function Dc(e){return e.client.deviceType===Vj}function _c(e,t,n,a,c,l){return Pg.context("createPrivacyHeaderFromData",()=>{const u=function(e,t,n,r,a,c){let l,u=AU
const f=ie(e,t,mG),p=s(f)&&v1.indexOf(f.id)>-1
l=n&&!p?e.loc.string("PRODUCT_PRIVACY_DETAIL_HEADER_TEMPLATE"):e.loc.string("PRODUCT_PRIVACY_HEADER_TEMPLATE")
const h=Mc(e,t,r,nB,a,c),w=1===h.length&&h[0].identifier===JO||0===h.length
w&&(l=e.loc.string("PRODUCT_PRIVACY_HEADER_NO_DETAILS_TEMPLATE"))
const g=q(t,EU)
i(g)?l=l.replace(iS,AM+g+TM):(l=w?e.loc.string("PRODUCT_PRIVACY_FALLBACK_HEADER_NO_DETAILS_TEMPLATE"):n?e.loc.string("PRODUCT_PRIVACY_FALLBACK_DETAIL_HEADER_TEMPLATE"):e.loc.string("PRODUCT_PRIVACY_FALLBACK_HEADER_TEMPLATE"),u=wU)
const m=e.loc.string("PRODUCT_PRIVACY_SUMMARY_PRIVACY_POLICY_LINK")
l=l.replace("{privacyPolicyLink}",m)
const v=function(e,t,n,r){let i
{const n=Ce(e,t,DM)
if((0,bg.isNothing)(n)||o(n))return null
i=new xH(n,!1)}return i.title=e.loc.string("PRODUCT_PRIVACY_SUMMARY_PRIVACY_POLICY_BUTTON_TITLE"),$f(e,i,{targetType:pj,id:aS,pageInformation:n,locationTracker:r}),i}(e,t,a,c),y={}
if(i(v)&&(y[m]=v),n){const n=function(e,t,n,r){const i=d(H(t,__),"managePrivacyChoicesUrl")
if((0,bg.isNothing)(i)||o(i))return null
const s=new xH(i,!1)
return $f(e,s,{targetType:pj,id:"managePrivacyChoices",pageInformation:n,locationTracker:r}),s}(e,t,a,c)
if(i(n)){const t=e.loc.string("PRODUCT_PRIVACY_MANAGE_CHOICES_LINK")
l+=sS,l+=e.loc.string("PRODUCT_PRIVACY_MANAGE_CHOICES_TEMPLATE").replace("{manageChoicesLink}",t),n.title=t,y[t]=n}}const A=new FV(l,u)
return new mz(A,y)}(e,t,n,a,c,l),f=function(e,t,n,o,i){if(!n)return null
const s=e.loc.string(cS),a=e.loc.string("PRODUCT_PRIVACY_DEFINITIONS_LINK_TEMPLATE").replace("{privacyDefinitionsLink}",s),c=xc(e,o,i)
if(r(c))return null
c.title=s
const l={}
l[s]=c
const u=new FV(a,wU)
return new mz(u,l)}(e,0,n,c,l)
let p,h
n&&(p=function(e,t,n,o,i){if(!n)return null
const s=e.loc.string(KO),a=Lc(e,o,i)
let c
const l={}
r(a)?c=e.loc.string(ZO):(c=e.loc.string(oS).replace(ZN,s),a.title=s,l[s]=a)
const u=new FV(c,wU)
return new mz(u,l)}(e,0,n,c,l),s(p)&&(h=Lc(e,c,l)))
const w=[]
if(i(f)){const e=new p1(f,void 0)
w.push(e)}if(i(p)){const e=new p1(p,h)
w.push(e)}return new f1(u,n,[],[],w,void 0)})}function Lc(e,t,n){const r=e.bag.appPrivacyLearnMoreEditorialItemId
if(o(r))return null
const i=new Bq(KG)
return i.title=e.loc.string(KO),i.pageUrl=`https://apps.apple.com/story/id${r}`,$f(e,i,{targetType:Hj,id:"privacyLearnMore",pageInformation:t,locationTracker:n}),i}function xc(e,t,n){const r=e.bag.appPrivacyDefinitionsEditorialItemId
if(o(r))return null
const i=new Bq(KG)
return i.title=e.loc.string(cS),i.pageUrl=`https://apps.apple.com/story/id${r}`,$f(e,i,{targetType:Hj,id:lS,pageInformation:t,locationTracker:n}),i}function Mc(e,t,n,r,o,i){var a
let c=[]
const l=H(t,n?__:dx)
return s(l)&&(c=null!==(a=bc(e,l,t,r,e.client.deviceType!==Vj||r===Wx,o,i))&&void 0!==a?a:[],1===c.length&&0===c[0].categories.length&&(c[0].style=FU)),c}function $c(e,t,n,o,a,c){if(r(t.id))return null
const l=new Bq(QO)
l.title=e.loc.string("ACTION_SEE_DETAILS"),l.pageData=function(e,t,n,r,o){const i=[]
if(e.client.deviceType!==Vj||n!==nB){const n=new $z(ZG),s=_c(e,t,!0,!1,r,o)
n.items=[s],n.presentationHints={isFirstShelf:!0},i.push(n)}const s=new Gz(i)
return e.client.deviceType===Vj&&n!==nB||(s.isIncomplete=!0),s.title=e.loc.string(D_),s}(e,t,n,o,a)
const u=t.type===xj?HW:jW
let d
s(c)&&(d={privacyTypeId:c})
const f=xq.fromComponents(CW,null,`/${iq}/${u}/${t.id}`,d)
l.pageUrl=f.build()
const p={targetType:Hj,id:"seeDetails",pageInformation:o,locationTracker:a}
return i(c)&&(p.targetType=XO,p.id=c),$f(e,l,p),l}function Fc(e,t,n){if(!s(t))return null
let r=null
r=(0,bg.isNothing)(n)?"sr":n
const i=Nu(e,t,{cropCode:r,useCase:12,allowingTransparency:!0})
return o(i)?null:i}function Nc(e,t,n,r){let o=0
for(const i of t){const t=n[i.key]
if(t){let n=null
if(jl(e))n=new mW(t.shelfId,null,null,null,t.index,!0)
else{const e=new oW(t.section,!0)
e.index=t.index,n=e}i.clickAction=n}let s
switch(i.key){case F_:case MG:case mB:case zx:case O_:case iF:case KB:s=_S
break
default:s=Fj}i.clickAction&&$f(e,i.clickAction,{targetType:PF,id:i.key,idType:fj,actionType:s,actionDetails:{position:o},pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker}),o+=1}}function Bc(e,t,n){return new zq(n,void 0,void 0,void 0,void 0,void 0,void 0,void 0,{type:"canPerformAppAction",appAction:e,appCapabilities:t})}function Uc(e,t,n,r,o,i){if(r)return null
const s=hu(e,t)
if((0,Ig.isNothing)(s))return null
const a=new jq(s),c=new Vq(s),l=o?"":e.loc.string("InfoList.Category.Title")
return new Gq(l,[a],[c])}function Gc(e,t,n,a,c,l){const u=H(t,GC)
let d=[],f=[],h=function(e,t){let n
if(_u(e,t)){const r=id(0,t,e.appleSilicon.isSupportEnabled),o=!1,i=Qu(e,t),s=fd(e,t,e.appleSilicon.isSupportEnabled,e.appleSilicon.isRosettaAvailable),a=function(e,t,n,r,o,i=!0){return!!cd(0,n,r,o).some(e=>ld(t,e))}(0,i,e.client.deviceType,r,o,s),c=e.loc.deviceDisplayName(e)
a&&c&&(n=e.loc.string("InfoList.Requirements.Summary").replace("{deviceName}",c))}return n}(e,t)
const w=Oe(e,t,oy,De(e))
if(s(u)){const t=function(e){const t=[fG,hG,$M,jj,tU,xF,Vj],n=function(e,t,n){let r=null
switch(t){case Bj:r=fG
break
case Lj:r=hG
break
case jj:r=jj
break
case"tv":r=xF
break
case Vj:r=Vj
break
case Tj:r=tU}return i(n)&&n===$M&&(r=$M),r}(0,e.client.deviceType,e.host.deviceModel)
if(i(n)){const e=t.indexOf(n)
e>0&&(t.splice(e,1),t.unshift(n))}return t}(e)
for(const n of t){const t=p(u,n)
if(s(t)){const r=jc(0,t,e.appleSilicon.isSupportEnabled&&n===jj&&w&&!e.appleSilicon.isRosettaAvailable)
i(r)&&(d.push(r[0]),f.push(r[1]))}}!i(h)&&d.length>0&&(h=d[0].text)}else{const n=function(e,t){const n=Ce(e,t,"requirementsString")
return r(n)?null:[new jq(n),new Vq(n)]}(e,t)
i(n)&&(d=[n[0]],f=[n[1]])}if(o(d))return null
const g=c?"":e.loc.string("Requirements")
return new Gq(g,d,f,h)}function jc(e,t,n){var r
const o=null!==(r=d(t,"deviceFamily"))&&void 0!==r?r:void 0
let i=d(t,"requirementString")
const a=c(t,"devices")
if(n){const e=d(t,"rosettaUnavailableRequirementString")
s(e)&&(i=e)}if((0,Ig.isNothing)(i))return null
const l=[]
for(const e of a)l.push("\u2022\t\u2068"+e+"\u2069")
const u=l.length>0?l.join("\n"):void 0
return[new jq(i,o,void 0,u),new Vq(i,{heading:o,listText:u})]}function Vc(e,t){const n=H(t,"contentRatingsBySystem.appsKorea")
if((0,Ig.isNothing)(n))return null
const r=f(n,dF)
if((0,Ig.isNothing)(r))return null
const o=c(n,iP)[0]
if((0,Ig.isNothing)(o))return null
const i=Pd(e,r),s=[]
return(0,Ig.isSome)(i)&&s.push(ce(e,`resource://${i}`)),[new jq(o,void 0,void 0,void 0,s),new Vq(o,{headingArtworks:s})]}function Hc(e,t,n,o,s,a){const l=H(t,"contentRatingsBySystem.appsApple")
if(r(l))return null
const u=d(l,Yj)
if(r(u))return null
if(99===f(l,dF))return null
const p=c(l,iP)
let h
const w=we(t,Re(e,t),"ageBand"),g=f(w,"minAge"),m=f(w,"maxAge")
h=i(g)&&i(m)?e.loc.string("InfoList.AgeRating.Summary").replace("{ageRating}",u).replace("{minAgeRating}",e.loc.decimal(g)).replace("{maxAgeRating}",e.loc.decimal(m)):u
const v=[],y=[];(0,Ig.isSome)(h)&&v.push(new jq(h))
for(const e of p)v.push(new jq(e))
let A,T="";(0,Ig.isSome)(h)&&(T+=h)
for(const e of p)T+="\n",T+=e
y.push(new Vq(T))
{const n=Vc(e,t);(0,Ig.isSome)(n)&&(v.push(n[0]),y.push(n[1]))
const r=Wc(e,t);(0,Ig.isSome)(r)&&(v.push(r[0]),y.push(r[1]))}v.length>1&&(A=h)
const S=s?"":e.loc.string("InfoList.AgeRating.Title")
let P
if((0,Ig.isSome)(e.bag.ageRatingLearnMoreEditorialItemId)&&e.bag.ageRatingLearnMoreEditorialItemId.length>0){const t=new Bq(KG)
t.title=e.loc.string("InfoList.AgeRating.LearnMore"),t.pageUrl=`https://apps.apple.com/story/id${e.bag.ageRatingLearnMoreEditorialItemId}`,P=t}return new Gq(S,v,y,A,P)}function Wc(e,t){if(e.bag.requireAgeVerification&&function(e,t,n){const r=J(t,"contentRatingsBySystem.appsApple.rank")
if((0,Ig.isNothing)(r))return!1
let o
switch(n){case cP:o=3
break
case sP:o=4
break
case"adultOnly":o=5
break
default:o=1}return r>=o}(0,t,sP)&&function(e,t){var n
const r=null!==(n=se(t,Qk))&&void 0!==n?n:[]
for(const e of r)if(d(e,"id")===6014..toString())return!0
return!1}(0,t)){let n
if(t.type===xj){const r=re(t,zj)
if(i(r))for(const t of r.data)if(i(q(t,aP))){n=e.loc.string("AgeVerification.ProductPage.Rating.BundleUnsuitableForJuveniles")
break}}else i(q(t,aP))&&(n=e.loc.string("AgeVerification.ProductPage.Rating.UnsuitableForJuveniles"))
return(0,Ig.isNothing)(n)?null:[new jq(n),new Vq(n)]}return null}function qc(e,t,n,r,o,i){const s=lt(e,e.bag.gameControllerRecommendedRolloutRate),a=dt(e,t)
if(s&&a){const n=o?"":e.loc.string("ProductPage.Info.GameController.Title"),r=a?"ProductPage.Info.GameController.Recommended":"ProductPage.Info.GameController.Required",i=e.loc.string(r),s=q(t,EU),c=a?"ProductPage.Info.GameController.Recommended.Summary":"ProductPage.Info.GameController.Required.Summary",l=e.loc.string(c).replace(iS,s),u=[new jq(l)],d=[new Vq(l)]
let f
const p=e.bag.gameControllerLearnMoreEditorialItemId
if((0,Ig.isSome)(p)&&p.length>0){const t=new Bq(KG),n=a?"ProductPage.Info.GameController.Recommended.LearnMore":"ProductPage.Info.GameController.Required.LearnMore"
t.title=e.loc.string(n),t.pageUrl=`https://apps.apple.com/story/id${p}`,f=t}return new Gq(n,u,d,i,f)}return null}function zc(e,t,n,r,o,i){const s=Ce(e,t,"copyright")
if((0,Ig.isNothing)(s))return null
const a=new jq(s),c=new Vq(s),l=o?"":e.loc.string("InfoList.Copyright")
return new Gq(l,[a],[c])}function Yc(e,t,n,r,o,i){const s=mt(e,t),a=vt(e,oP)
if(!s||!a)return null
const c=o?"":e.loc.string("Annotations.ExternalPurchases.Title"),l=e.loc.string("YES")
let u
if((0,bg.isSome)(e.bag.externalPurchasesProductPageAnnotationVariant)){const t=`Annotations.ExternalPurchases.Expanded.Variant${e.bag.externalPurchasesProductPageAnnotationVariant}`
u=e.loc.string(t)}else u=e.loc.string("Annotations.ExternalPurchases.Expanded")
const d=new jq(u),f=new Vq(u),p=e.loc.string("Annotations.ExternalPurchases.Expanded.LearnMore")
let h=yt(e,p,i.metricsPageInformation,i.locationTracker)
return new Gq(c,[d],[f],l,null!=h?h:void 0)}function Jc(e,t,n,r,i,s){var a
if(!function(e,t){var n
const r=sd(e,t),o=new Set(["uses-non-webkit-browser-engine","is-custom-browser-engine-app"])
return null!==(n=null==r?void 0:r.some(e=>o.has(e)))&&void 0!==n&&n}(e,t))return null
const c=null!==(a=function(e,t,n){const r=e.bag.externalBrowserLearnMoreEditorialItemId
if(o(r))return null
const i=new Bq(KG)
return i.title=e.loc.string(IS),i.pageUrl=`https://apps.apple.com/story/id${r}`,$f(e,i,{id:R$,targetType:pj,actionType:Fj,pageInformation:t,locationTracker:n}),i}(e,s.metricsPageInformation,s.locationTracker))&&void 0!==a?a:void 0
let l=c
const u=i?"":e.loc.string("Annotations.ExternalBrowser.Title"),d=e.loc.string("Annotations.ExternalBrowser.Value.Summary"),f=e.loc.string("Annotations.ExternalBrowser.Value.Expanded"),p=[new jq(f)],h=[new Vq(f)]
return new Gq(u,p,h,d,l)}function Kc(e,t,n,r,o,i){const s=(0,dm.attributeAsDictionary)(t,"licenses.gameLicenseVietnam")
let a=e.loc.string("InfoList.GameLicense.Disclaimer")
const c=[new jq(a)],l=[new Vq(a)],u=(0,dm.asString)(s,"licenseId")
if(!(0,dm.isDefinedNonNullNonEmpty)(u))return null
{const t=e.loc.string("InfoList.GameLicense.Id.Title")
c.push(new jq(u,t)),l.push(new Vq(u,{heading:t}))}const d=(0,dm.asString)(s,"licenseUrl")
if((0,dm.isDefinedNonNullNonEmpty)(d)){const t=e.loc.string("InfoList.GameLicense.Url.Title")
c.push(new jq(d,t)),l.push(new Vq(d,{heading:t}))}const f=o?"":e.loc.string("InfoList.GameLicense.Title")
return new Gq(f,c,l,u)}function Zc(e,t,n,r,o,i){return null}function Qc(e,t,n,r,s,a){var c
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
d=e.loc.string("InfoList.More.Languages.Summary").replace("{language}",l[0]).replace(wE,e.loc.formattedCount(t)),f=null!==(c=function(e,t){if(null==e||null==t)return null
if(0===e.length)return""
let n=e.length,r=""
return e.forEach((e,o)=>{null===e?n-=1:(r+=e,o<n-1&&(r+=t))}),r}(l,e.loc.string("Conjunction.Separator")))&&void 0!==c?c:void 0}if(!i(f))return null
const p=new jq(f),h=new Vq(f),w=s?"":e.loc.string("Supported.Languages")
return new Gq(w,[p],[h],d)}function Xc(e,t,n,r,o,i){if(!Y(t,"usesLocationBackgroundMode"))return null
const s=o?"":e.loc.string("InfoList.Location.Title"),a=e.loc.string("InfoList.Location.Description"),c=new jq(a),l=new Vq(a)
return new Gq(s,[c],[l])}function el(e,t,n){return Pg.context("capabilitiesFromData",()=>[tl(e,t),nl(e,t),al(e,t),rl(e,t),ol(e,t),il(e,t,n),sl(e,t)].filter(e=>e))}function tl(e,t){if(!(0,Ig.isSome)(t)||!Oe(e,t,j$))return null
if(e.bag.gameCenterExtendSupportedFeatures){const n=function(e){if(!(0,bg.isNothing)(e))return de(e,"supportedGameCenterFeaturesFromData",()=>{const t=[],n=c(e,"attributes.supportedGameCenterFeatures")
return n.includes(PG)&&t.push(PG),n.includes(Cj)&&t.push(Cj),t})}(t),r=null==n?void 0:n.includes(PG),o=null==n?void 0:n.includes(Cj)
let i
i=r&&o?e.loc.string("CAPABILITY_GAME_CENTER_EXPLANATION_ALL_FEATURES"):r?e.loc.string("CAPABILITY_GAME_CENTER_EXPLANATION_ONLY_LEADERBOARDS"):o?e.loc.string("CAPABILITY_GAME_CENTER_EXPLANATION_ONLY_ACHIEVEMENTS"):e.loc.string("CAPABILITY_GAME_CENTER_EXPLANATION_NO_FEATURES")
const s=e.loc.string(Ey),a=ce(e,Ry,46,45),l=new FV(i),u=new mz(l)
return new Qq(bU,s,u,null,null,a)}{const t=e.loc.string(Ey),n=new FV(e.loc.string("CAPABILITY_GAME_CENTER_EXPLANATION")),r=new mz(n),o=ce(e,Ry,46,45)
return new Qq(bU,t,r,void 0,null,o)}}function nl(e,t){if(!Oe(e,t,"isSiriSupported"))return null
const n=e.loc.string("CAPABILITY_SIRI_TITLE"),r=new FV(e.loc.string("CAPABILITY_SIRI_EXPLANATION")),o=new mz(r),i=ce(e,"resource://ProductCapabilitySiri",46,45)
return new Qq(mk,n,o,void 0,null,i)}function rl(e,t){if(!Oe(e,t,"supportsPassbook"))return null
const n=e.loc.string("CAPABILITY_WALLET_TITLE"),r=new FV(e.loc.string("CAPABILITY_WALLET_EXPLANATION")),o=new mz(r),i=ce(e,"resource://ProductCapabilityWallet",46,45)
return new Qq("wallet",n,o,void 0,null,i)}function ol(e,t){if(!ut(e,t))return null
const n=e.loc.string("CAPABILITY_MFI_CONTROLLERS_TITLE")
let r=null
const o=e.bag.gameControllerLearnMoreEditorialItemId
lt(e,e.bag.gameControllerRecommendedRolloutRate)&&(null==o?void 0:o.length)>0&&(r=new Bq(KG),r.title=e.loc.string("ProductPage.Capability.GameController.ActionTitle"),r.pageUrl=`https://apps.apple.com/story/id${o}`)
let i=r?e.loc.string("ProductPage.Capability.GameController.Explanation.WithNewlineActionTemplate"):e.loc.string("ProductPage.Capability.GameController.Explanation")
const s={};(null==r?void 0:r.title)&&(i=i.replace(ZN,r.title),s[r.title]=r)
const a=new FV(i),c=new mz(a,s),l=ce(e,"resource://ProductCapabilityController",46,45)
return new Qq("controllers",n,c,void 0,null,l)}function il(e,t,n){var r
const o=q(t,"familyShareEnabledDate")
if(!o||Y(t,mN))return null
const i=new Date(o),s=new Date
if(!i||i>s)return null
const a=Oe(e,t,vk),c=a&&Oe(e,t,"hasFamilyShareableInAppPurchases")
let l=null;(null===(r=e.bag.familySubscriptionsLearnMoreEditorialItemId)||void 0===r?void 0:r.length)>0&&c&&(l=new Bq(KG),l.title=e.loc.string("CAPABILITY_FAMILY_SHARING_ACTION_TITLE"),l.pageUrl=`https://apps.apple.com/story/id${e.bag.familySubscriptionsLearnMoreEditorialItemId}`)
const u=e.loc.string("CAPABILITY_FAMILY_SHARING_TITLE")
let d
if(c?d=l?"CAPABILITY_FAMILY_SHARING_SOME_SHAREABLE_IAPS_EXPLANATION_WITH_ACTION_TEMPLATE":"CAPABILITY_FAMILY_SHARING_SOME_SHAREABLE_IAPS_EXPLANATION":a||n||(d=l?"CAPABILITY_FAMILY_SHARING_PAID_APP_NO_IAPS_EXPLANATION_WITH_ACTION_TEMPLATE":"CAPABILITY_FAMILY_SHARING_PAID_APP_NO_IAPS_EXPLANATION"),!d)return null
let f=e.loc.string(d)
const p={};(null==l?void 0:l.title)&&(f=f.replace(ZN,l.title),p[l.title]=l)
const h=new FV(f),w=new mz(h,p),g=ce(e,"resource://ProductCapabilityFamilySharing",46,45)
return new Qq(ZR,u,w,void 0,l,g)}function sl(e,t){if(!Oe(e,t,"hasSafariExtension"))return null
const n=e.loc.string("CAPABILITY_SAFARI_EXTENSION_TITLE"),r=new FV(e.loc.string("CAPABILITY_SAFARI_EXTENSION_EXPLANATION")),o=new mz(r),i=ce(e,"resource://ProductCapabilitySafariExtension",129,129)
return new Qq(Dy,n,o,void 0,null,i)}function al(e,t){if(!Oe(e,t,SC))return null
const n=e.loc.string("CAPABILITY_SHAREPLAY_TITLE"),r=new FV(e.loc.string("CAPABILITY_SHAREPLAY_EXPLANATION")),o=new mz(r),i=ce(e,"systemimage://shareplay"),s=G(yk)
return new Qq("sharePlay",n,o,void 0,null,i,s)}function cl(e,t,n,r,o,i){if(r)return null
const s=Ce(e,t,"seller"),a=be(e,t,_M),c=be(e,t,VC),l=e.bag.enableSellerICPAnnotation&&!0
if((0,Ig.isNothing)(s))return null
const u=Ce(e,t,"sellerLabel")||e.loc.string(lP)
let f,p=[],h=[]
const g=d(a,Yj),m=(0,Ig.isSome)(g)&&(null==g?void 0:g.length)>0?g:s,v=o?"":u
let y=null
if((0,Ig.isSome)(a)){const[t,n,r]=function(e,t){const n=[],r=[],o={name:"ProductPage.SellerInfo.Name.Title",dunsNumber:"ProductPage.SellerInfo.DunsNumber.Title",address:"ProductPage.SellerInfo.Address.Title",brn:"ProductPage.SellerInfo.BusinessRegistrationNumber.Title",phoneNumber:"ProductPage.SellerInfo.PhoneNumber.Title",email:"ProductPage.SellerInfo.Email.Title",usci:"ProductPage.SellerInfo.UnifiedSocialCreditIdentifier.Title"},i=d(t,Yj),s=(0,Ig.isSome)(i)&&(null==i?void 0:i.length)>0?i:e.loc.string(lP),a=(0,Ig.isSome)(d(t,uP))
if(a){const o=w(t,uP),i=o?"ProductPage.SellerInfo.VerifiedSeller.Subtitle":"ProductPage.SellerInfo.UnverifiedSeller.Subtitle"
if(n.push(new jq(e.loc.string(i).replace(dP,s)+"\n")),r.push(new Vq(e.loc.string(i).replace(dP,s))),!o)return[n,r,s]}let c=null
1!==Object.keys(t).length||Object.keys(t).includes(Yj)||(c=e.loc.string("ProductPage.SellerInfo.SeeDetails.Title"))
for(const i of Object.keys(o)){if(i===Yj&&a)continue
const s=ll(e,i,e.loc.string(o[i]),t);(0,Ig.isSome)(s)&&(n.push(s[0]),r.push(s[1]))}return[n,r,c]}(e,a)
y=r,p=p.concat(t),h=h.concat(n)}if(l&&(0,Ig.isSome)(c)){const t=ll(e,"filingNumber",e.loc.string("ProductPage.Info.ICPNumber.Title"),c)
if(0===p.length){const e=new jq((0,Ig.isSome)(t)?m+"\n":m),n=new Vq(m)
p.push(e),h.push(n)}(0,Ig.isSome)(t)&&(p.push(t[0]),h.push(t[1]))}if(p.length>0)(0,Ig.isNothing)(y)&&(y=p.length>1?m:void 0),f=new Gq(v,p,h,y,void 0)
else{const e=new jq(s),t=new Vq(s)
f=new Gq(v,[e],[t])}return(0,Ig.isSome)(f),f}function ll(e,t,n,r){let o=d(r,t)
return(0,Ig.isSome)(o)?("brn"===t&&(o=o+"\n"+e.loc.string("ProductPage.SellerInfo.BusinessRegistrationNumber.Subtitle")),[new jq(o,n),new Vq(o,{heading:n})]):null}function ul(e,t,n,o,s,a){const c=wd(e,t)
if(n||r(c)||r(c.fileSizeByDevice))return null
const l=e.loc.fileSize(c.fileSizeByDevice),u=s?"":e.loc.string("File.Size")
let d,f=c.fileSizeByDevice
if(i(c.maxEssentialInstallSizeInBytes)){const t=c.fileSizeByDevice+c.maxEssentialInstallSizeInBytes,n=e.loc.string(kE).replace(OE,e.loc.fileSize(t)),r=new jq(n),o=new Vq(n)
d=new Gq(u,[r],[o])}else if(i(c.maxInstallSizeInBytes)){const t=[],n=[],r=new jq(l,e.loc.string(fP)),o=new Vq(l,{heading:e.loc.string(fP)})
t.push(r),n.push(o)
const i=e.loc.string(kE).replace(OE,e.loc.fileSize(c.maxInstallSizeInBytes)),s=new jq(i,e.loc.string(pP)),a=new Vq(i,{heading:e.loc.string(pP)})
t.push(s),n.push(a),f+=c.maxInstallSizeInBytes
const p=e.loc.string(kE).replace(OE,e.loc.fileSize(f))
d=new Gq(u,t,n,p)}else{const e=new jq(l),t=new Vq(l)
d=new Gq(u,[e],[t])}return d}function dl(e,t,n,r,o,i){const s=se(t,mD)
if((0,Ig.isNothing)(s)||s.length<1)return null
const a=[],c=[]
for(const t of s){const n=q(t,Yj)
if((0,Ig.isNothing)(n))continue
const r=At(e,t)
if((0,Ig.isNothing)(r))continue
const o=d(r,cB)
if((0,Ig.isNothing)(o))continue
const i=d(r,SN),s=f(r,PN)
let l=e.loc.string("InfoList.IAP.Duration")
if((0,Ig.isSome)(i)){l=l.replace("{name}",n)
const t=gi(0,i,s)
let r
switch(null==t?void 0:t.type){case"D":r="days"
break
case"W":r="weeks"
break
case"M":r="months"
break
case"Y":r="years"
break
default:l=`${n}`}if((0,Ig.isSome)(r)&&(0,Ig.isSome)(t)){const n=e.loc.formatDuration(t.periodDuration,r);(0,Ig.isSome)(n)&&(l=l.replace("{duration}",n))}}else l=`${n}`
a.push(new jq(l,void 0,o)),c.push([l,o])}const l=o?"":e.loc.string("InfoList.InAppPurchases")
let u
const p=e.bag.inAppPurchasesLearnMoreEditorialItemId
if((0,Ig.isSome)(p)&&p.length>0){const t=new Bq(KG)
t.title=e.loc.string("ProductPage.Info.InAppPurchases.LearnMore"),t.pageUrl=`https://apps.apple.com/story/id${e.bag.inAppPurchasesLearnMoreEditorialItemId}`,u=t}const h=[new Vq(void 0,{textPairs:c})]
return new Gq(l,a,h,e.loc.string("YES"),u)}function fl(e,t,n,r,o,i,s,a){const c=[]
for(const l of t){const t=l(e,n,r,o,i,s)
t&&(t.expandAction=null,c.push(t),a&&a(l,t,c.length-1))}return c}function pl(e,t){const n=be(e,t,VC),r=e.bag.enableSellerICPAnnotation&&(0,Ig.isSome)(n),o=be(e,t,_M),i=e.bag.enableSellerInfo&&(0,Ig.isSome)(o)
return r||i}function hl(e,t,n,r){const o=new $z(WS)
o.isHorizontal=!0
let i=null
i=n?t.slice(0,8):t
const a=[]
for(let t=0;t<i.length;t++){const n=i[t]
if(n.action=new dW(n.playerId),s(r)){const o="friendPlayer",i={pageInformation:r.destinationPageInformation,locationTracker:r.sourceLocationTracker,id:"",idType:fj,anonymizationOptions:{anonymizationString:`FRIEND${t+1}`}}
if(gf(e,n,{...i,kind:o,title:"",softwareType:null}),e.bag.productPageFriendsPlayingClickEventsEnabled){const t={...i,kind:o,targetType:ij,actionType:Fj,softwareType:null}
$f(e,n.action,t)}}a.push(n),s(r)&&uf(r.sourceLocationTracker)}if(o.items=a,o.mergeWhenFetched=!0,o.isHidden=0===o.items.length,o.batchGroup=bU,n&&t.length>8){const n=new $z("smallGameCenterPlayer")
n.title=e.loc.stringWithCount("ProductPage.FriendsPlaying.SeeAllTitle",t.length),n.items=t.map(e=>(e.action=new dW(e.playerId),e)),n.rowsPerColumn=1
const i=new Gz([n])
i.title=null==r?void 0:r.title
const s=new Bq(Jj)
s.title=e.loc.string(UU),s.pageData=i,o.seeAllAction=s}return s(r)&&gf(e,o,{id:"",kind:null,softwareType:null,targetType:tj,title:r.title,pageInformation:r.sourcePageInformation,locationTracker:r.sourceLocationTracker,idType:fj,badges:{gameCenter:!0}}),o}function wl(e,t,n,i){return Pg.context("inAppPurchasesShelf",()=>{if(!function(e,t){return t!==vU&&!e.client.isCompanionVisionApp}(e,e.host.platform))return null
if(o(t))return null
let a
if(a=Ei(e)?oe(t,UC):re(t,AD),!a||!a.data.length)return null
if(!a.data.filter(function(e){return Y(e,n_)===i.isForSubscriptions}).length)return null
const c={pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:tj,id:`${n.getSequenceId()}`,idType:fj},l=z(t,rj)
let u=lG
l&&(u=dN)
const d=F$,f=new $z(d)
let p=null
i.options&&(p=i.options.spotlightInAppProductIdentifier),function(e,t,n){const o=Oj
for(const e of n.data){let n=re(e,o)
n||(n={data:[t]}),r(e.relationships)&&(e.relationships={}),e.relationships[o]=n}}(0,t,a)
const h=[],w=function(e,t,n,r,o,i){const s=Iu(e,t,{lockupOptions:{metricsOptions:r,offerStyle:n,skipDefaultClickAction:!0,artworkUseCase:1},contentUnavailable:function(e,t){return h.push(t),!1}})
return o&&ip(0,o,s),s}(e,a.data,u,c,p).filter(function(e){return e.productIdentifier===p&&(i.options.spotlightSection=new SX(Kj,i.isForSubscriptions?$B:MB)),e.isSubscription===i.isForSubscriptions})
if(0===w.length&&0===h.length)return null
if(f.items=w,s(h)){const r=new b2(t.id,h,f.title,!1,void 0,d,u,null)
r.appBundleId=Ce(e,t,nj),r.iapShelfContext=i,i.isForSubscriptions?r.inAppShelfId=$B:r.inAppShelfId=MB,f.url=tp(0,r,n)}let g
return i.isForSubscriptions?(f.title=e.loc.string("ProductPage.Section.Subscriptions.Title","Subscriptions"),g="subscription"):(f.title=e.loc.string("ProductPage.Section.InAppPurchases.Title"),g="iAP"),rf(e,c,f.title),sf(n.locationTracker),uf(n.locationTracker),f.isHorizontal=!0,n.addImpressionsToShelf(e,f,g),f})}function gl(e,t,n,r,s,a){return Pg.context(NN,()=>o(t)?null:function(e,t,n,r,o){return Pg.context("standardLinksShelf",()=>{const s=new $z("productPageLink"),a=[]
if(e.client.deviceType!==jj){const n=Ce(e,t,gD)
if(n){const t=new xH(n,!1),r=e.loc.string("DEVELOPER_WEBSITE")
a.push(new vz(r,t,"safari"))}}const c=Ce(e,t,DM)
if(c){const t=new xH(c,!1),n=e.loc.string(q_)
a.push(new vz(n,t,"hand.raised.fill"))}if(z(t,qS)){const n=function(e,t){const n=t.id,r=t.type
return i(t)&&i(n)&&i(r)?`${CW}:/${nq}?resourceType=${r}&resourceId=${n}`:null}(0,t)
if(n){const t=new Bq(Jj)
t.pageUrl=n
const r=e.loc.string(K_)
a.push(new vz(r,t,"doc.plaintext"))}}const l=d(be(e,t,_M),SE)
if((null==l?void 0:l.length)>0){const t=new xH(l,!1),n=e.loc.string(z_)
a.push(new vz(n,t,"checkmark.seal"))}const u=e.bag.productPageReportProblemSADSubscriptionArray,f=t.id,p=u.includes(f),h=et(e).isSystemAppFromData(t),w=t.type===xj,g=r&&!h,m=e.bag.productPageReportProblemSecondPartyAppArray.includes(f)
if(!w&&!m&&!o&&e.bag.reportProblemEnabled&&(p||g)){const n=function(e,t){const n=t.id,r=e.bag.productPageReportProblemURL
return i(n)&&i(r)?r.replace("{productId}",n):null}(e,t)
if((null==n?void 0:n.length)>0){const t=new xH(n,!1),r=e.loc.string(Qy),o=new vz(r,t,"exclamationmark.triangle",p?null:f)
a.push(o)}}return a&&a.length>0&&(s.items=a),n.addImpressionsToShelf(e,s,ZM),s})}(e,t,n,r,a))}function ml(e,t,n,i){const s=hu(e,t)
if(o(s))return null
const a=e.loc.string("BADGE_CATEGORY_HEADING"),c=new KY(Nj,KB,{},Wj,a,s,null,s,a,lG)
if(new Bq(Jj).title=q(t,EU),n&&"tv"!==e.client.deviceType){const n=Hn(e,t,!0)
if(r(n))return null
c.artwork=Fc(e,n,"bb")}return c}function vl(e,t,n,r){const o=be(e,t,uE)
if(o){const t=Td(0,e.host.clientIdentifier)
if(t){const n=p(o,t)
if(n){const t=f(n,d_),r=d(n,LS),o=d(n,vG),i=d(n,TG),s=e.loc.string("BADGE_CHART_POSITION_HEADING"),a=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_CHART_POSITION_TITLE").replace("{chartPosition}",t.toString()),c=new KY(N_,N_,{position:e.loc.decimal(t)},Wj,s,r,null,a,r,hU),l=Ad(e,o,i)
if((0,bg.isSome)(l)){const e=new Bq(Ex)
e.pageUrl=l,c.clickAction=e}return c}}}return null}function yl(e,t,n,r){const o=q(t,xA)
if(o){const r={contentRating:o},i=J(t,"contentRatingsBySystem.appsBrazil.rank"),s=Pd(e,null!=i?i:void 0)
let a
s&&(r.contentRatingResource=s),a=n?e.loc.string(B_):e.loc.string(U_)
const c=e.loc.string("BADGE_AGE_RATING_HEADING"),l=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_AGE_RATING_TITLE")
return new KY(F_,F_,r,Wj,c,a,void 0,o,l,hU)}return null}function Al(e,t,n,r){return function(e,t,n,r){if(dt(e,t)){const t=e.loc.string(G_),n=e.loc.string("ProductPage.Badge.GameController.Recommended"),r=new KY(iF,iF,{},Wj,t,n,null,null,n,hU)
return r.clickAction=jl(e)?new mW(YG):new oW(new ZY(Kj,YG)),r}return null}(e,t)}function Tl(e,t,n,r){return function(e,t,n,r){if(!ut(e,t)||function(e,t){switch(ft(e,t)){case UL:case JR:case YR:return!0
default:return!1}}(e,t)||dt(e,t))return null
{const t=e.loc.string(G_),n=e.loc.string(sF),r=new KY(iF,iF,{},Wj,t,n,null,null,n,hU)
return r.clickAction=jl(e)?new mW(YG):new oW(new ZY(Kj,YG)),r}}(e,t)}function Sl(e,t,n,o){const s=ie(e,t,mG),a=e.loc.string("BADGE_DEVELOPER_HEADING"),c=q(t,EU),l=new KY(Nj,mG,{},Wj,a,c,null,c,a,lG)
if(n&&"tv"!==e.client.deviceType){const t=Hn(e,s,!0)
r(t)?l.artwork=ce(e,j_,26,26):l.artwork=Fc(e,t)}const u=yd(0,s)
if(i(u)){const n=new Bq(Jj)
n.title=q(t,EU),n.pageUrl=u,$f(e,n,{targetType:BG,id:s.id,actionType:Fj,pageInformation:o.pageInformation,locationTracker:o.locationTracker}),l.clickAction=n}return l}function Pl(e,t,n,r){const o=be(e,t,xN)
if(o){const r=d(o,e_)
if(r&&r===t_){let r,o
r="Games"===W(t,Xk)[0]?e.loc.string("EDITORIAL_BADGE_GAMES"):e.loc.string("EDITORIAL_BADGE_APPS"),o=n?e.loc.string("EDITORS_CHOICE_RIBBON_HEADING"):e.loc.string("EDITORS_CHOICE_SINGLE_LINE")
const i=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_EDITORS_CHOICE"),s=new KY(MG,MG,{},Wj,o,r,null,i,r)
return jl(e)?s.clickAction=new mW(e.featureFlags.isEnabled(iU)?MG:RG):s.clickAction=new oW(new ZY(Kj,Ij)),s}}return null}function bl(e,t,r,o){const i=Ie(e,t,"supportedLocales"),s=(a=i).length<=0?null:{tag:d(n(a,"0.tag")).split("-")[0].toUpperCase(),name:d(n(a,"0.name"))}
var a
if(!s)return null
const c={paragraphText:s.tag}
let l
const u=i.length
l=u>1?e.loc.string("BADGE_LANGUAGE_CAPTION").replace("{number_other_languages}",e.loc.formattedCount(u-1)):s.name
const f=e.loc.string("BADGE_LANGUAGE_HEADING")
return new KY(AB,zx,c,Wj,f,l,null,null,l,hU)}function Il(e,t,n,r){const o=Ee(e,t,WR),s=Ee(e,t,qR)
if(!i(o)||!i(s))return null
if(o<=0||s<=0||o>s)return null
const a=e.loc.string(xS),c=kl(e,o,s,!1),l=kl(e,o,s,!0),u=e.loc.string(xS),d={paragraphText:Cl(e,o,s)}
return new KY(AB,Ev,d,Wj,a,c,null,l,u,hU)}function Cl(e,t,n){return t===n?t<=32?e.loc.formattedCount(t):e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER_INDEFINITE_MIN_AND_MAX_LIMIT").replace(fE,e.loc.formattedCount(32)):n<=32?e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER_DEFINITE_LIMIT").replace(fE,e.loc.formattedCount(t)).replace(MS,e.loc.formattedCount(n)):e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER_INDEFINITE_MAX_LIMIT").replace(fE,e.loc.formattedCount(t)).replace(MS,e.loc.formattedCount(32))}function kl(e,t,n,r){return 1===t&&1===n?e.loc.string("BADGE_PLAYERS_CAPTION_SINGLE"):1===t||r?e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER"):e.loc.string("BADGE_PLAYERS_CAPTION_REQUIRED")}function Ol(e,t,n,r){const o=H(t,aF)
let i=null
const s=Ts(e,t)
if(!s&&o&&o.value&&o.ratingCount){const t=f(o,hE),n=Math.round(10*t)/10,r=e.loc.decimal(n,1),s=f(o,PS),a=e.loc.formattedCount(s)
let c
c=e.loc.stringWithCount("ProductPage.BadgeRating.Caption.ShortTemplate",s).replace(wE,a)
const l=e.loc.stringWithCount("ProductPage.BadgeRating.Caption.LongTemplate",s).replace(wE,a).replace("{rating}",r),u=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_STAR_RATING").replace("{starCount}",r)
i=new KY(mB,mB,{rating:n,ratingFormatted:r},Wj,c,c,l,u,c)}else{if(n)return null
const t=e.loc.string($S)
if(s&&t!==$S)i=new KY(mB,mB,{},Wj,null,t,null,t)
else if(!s){const t=e.loc.string("BADGE_NOT_ENOUGH_RATINGS_CAPTION")
i=new KY(mB,mB,{},Wj,null,t,null,t)}}if(i){let t
return t=new mW(RG),i.clickAction=jl(e)?t:new oW(new ZY(Kj,Ij)),i}return null}function El(e,t,n,r){const o=Yx,i=Yx,s={contentRating:n},a=Wj,c=e.loc.string(`ProductPage.Badge.AgeRating.${r}.Heading`)
let l
l=t?e.loc.string(B_):e.loc.string(U_)
const u=n,d=e.loc.string(`ProductPage.Badge.AgeRating.${r}.AX.Caption`)
return new KY(o,i,s,a,c,l,void 0,u,d,hU)}function Rl(e,t,n,r){if(e.props.isNotEnabled(hy))return function(e,t,n,r){const o=J(t,FS),i=bd(e,null!=o?o:void 0)
if((0,Ig.isSome)(o)&&(0,Ig.isSome)(i)){const t=El(e,n,i,"AU"),r=Pd(e,o)
return(null==t?void 0:t.type)===Nj&&(0,Ig.isSome)(r)&&(t.artwork=ce(e,`resource://${r}`,26,26)),t}const s=J(t,NS),a=bd(e,null!=s?s:void 0)
if((0,Ig.isSome)(s)&&(0,Ig.isSome)(a)){const t=El(e,n,a,"FR"),r=Pd(e,s)
return(null==t?void 0:t.type)===Nj&&(0,Ig.isSome)(r)&&(t.artwork=ce(e,`resource://${r}`,26,26)),t}const c=J(t,BS),l=q(t,US)
if((0,Ig.isSome)(c)&&(0,Ig.isSome)(l))return function(e,t,n,r){const o=Pd(e,n)
if((0,Ig.isNothing)(o))return
const i=Nj,s=Yx,a={contentRating:r},c=Wj,l=e.loc.string("ProductPage.Badge.AgeRating.KR.Heading")
let u,d
u=t?e.loc.string(B_):e.loc.string(U_),d=r
const f=e.loc.string("ProductPage.Badge.AgeRating.KR.AX.Caption"),p=new KY(i,s,a,c,l,u,void 0,d,f,hU)
return p.isMonochrome=!1,p.artwork=ce(e,`resource://${o}`,26,26),p}(e,n,c,l)}(e,t,n)
const o=J(t,FS),i=q(t,"contentRatingsBySystem.appsAustralia.name")
if((0,Ig.isSome)(o)&&(0,Ig.isSome)(i))return Dl(e,n,"AU",o,i,!1)
const s=J(t,NS),a=q(t,"contentRatingsBySystem.appsFrance.name")
if((0,Ig.isSome)(s)&&(0,Ig.isSome)(a))return Dl(e,n,"FR",s,a,!1)
const c=J(t,BS),l=q(t,US)
return(0,Ig.isSome)(c)&&(0,Ig.isSome)(l)?Dl(e,n,"KR",c,l,!0):void 0}function Dl(e,t,n,r,o,i){const s=bd(e,r),a=Pd(e,r)
if((0,Ig.isNothing)(a)||(0,Ig.isNothing)(s))return
const c=Nj,l=Yx,u={contentRating:s},d=Wj,f=e.loc.string(`ProductPage.Badge.AgeRating.${n}.Heading`)
let p,h
p=t?e.loc.string(B_):e.loc.string(U_),h=o
const w=e.loc.string(`ProductPage.Badge.AgeRating.${n}.AX.Caption`),g=new KY(c,l,u,d,f,p,void 0,h,w,hU)
return g.isMonochrome=!i,g.artwork=ce(e,`resource://${a}`,26,26),g}function _l(e,t,n,r){return t?Pg.context("badgesFromLookupResponse",()=>{let o,i=!1
return Y(t,rj)?o=I1:n?(o=k1,-1===o.indexOf(Pl)&&o.splice(1,0,Pl),i=!0):o=C1,function(e,t,n,r,o,i){const s=[]
for(const o of t){const t=o(e,n,r,i)
t&&s.push(t)}if(o&&s.some(e=>e.key===N_)){const e=s.findIndex(e=>e.key===KB)
e>=0&&s.splice(e,1)}return s}(e,o,t,n,i,r)}):null}function Ll(e,t,n,r,o,i){return Pg.context(JS,()=>i?null:xs(e,t.id,o,n,null))}function xl(e,t){const n=d(t,lE)
if(n){const t=new xH(n,!1)
return t.title=e.loc.string(bS),t.artwork=ce(e,yC),t}return null}function Ml(e){var t
if((0,Ig.isSome)(e)){const n=null!==(t=e.presentationHints)&&void 0!==t?t:{}
e.presentationHints={...n,isSeeAllContext:!0}}}function $l(e,t,n,r,o){const i=`${CW}:/${jW}/${RW}/`+np(n,r,o),s=new xq(i)
return s.param(Aq.shelfRefreshType,Rq),s.param(Aq.id,t),s.build()}function Fl(e,t){return t?t.map(t=>Nl(e,t,eP)):[]}function Nl(e,t,n){return Pg.context("titledParagraphFromVersionHistoryEntry",()=>{let r=d(t,tP);(0,Ig.isSome)(r)&&(r=r.trim())
const o=new dz(r,n),i=d(t,CE),s=e.loc.string("VERSION_STRING_TEMPLATE")
o.primarySubtitle=n===eP?i:s.replace("{version}",i)
const a=d(t,"releaseTimestamp")
if(a){const t=new Date(a)
o.secondarySubtitle=e.loc.relativeDate(t)}return o})}function Bl(e,t,n,a,u,p=!1){return Pg.context("createProductPageFromResponse",()=>{var h
const w=_(e,t)
if(o(w))return null
w.type
const g=a[P2],m=_(e,g),v=s(m)?u:null,A=s(m)?null:u,T=function(e,t,n){var r
const o=_(e,t),s=o.type===xj
i(n)&&(n.iAdClickFields&&(t[lX]=JSON.stringify(n.iAdClickFields)),n.iAdLineItem&&(t[uX]=n.iAdLineItem))
const a=ei(e,s?fO:wB,o.id,t),c=new xq(a.pageUrl)
return null!==(r=null==n?void 0:n.webBrowser)&&void 0!==r&&r&&(c.param(pO,oT),c.removeParam(M_),a.pageUrl=c.build()),new A1(a,{rootPosition:0,locationStack:[]})}(e,t,n),S=Ul(e,w,T,n,m,A,v,p)
T.metricsPageInformation.baseFields[p_]=Qd(e,w,S.lockup.icon,null==n?void 0:n.clientIdentifierOverride),(ro(e,WG)||ro(e,bG))&&(T.metricsPageInformation.iAdInfo=new fX(e,WG,fX.createInitialSlotInfos(e,WG,null,null)))
const P=Qu(e,w),b=null!==(h=null==n?void 0:n.webBrowser)&&void 0!==h&&h
b&&!e.props.isNotEnabled(oF)||ni(e,S,T.metricsPageInformation,t=>{const n=id(0,w,e.appleSilicon.isSupportEnabled),r=fd(e,w,e.appleSilicon.isSupportEnabled,e.appleSilicon.isRosettaAvailable),o=ud(e,w,P,e.client.deviceType,n,!1,r),i=pd(0,P,e.client.deviceType,n,!1),a=P&&(o||i),c=function(e,t,n,r){if(!_u(e,t))return!1
if(tt(e,t,8838))return!1
const o=cd(0,n,id(0,t,r),!1),i=Qu(e,t)
return o.some(e=>ld(i,e))}(e,w,e.client.deviceType,e.appleSilicon.isSupportEnabled)
t[gE]=a&&c?"runnable":a?"purchasable":XG,s(A)&&TH.shared.addReferralContextToMetricsFieldsIfNecessary(t)},b)
const I=kn(t,!0)
return function(e,t,n,a,u,p,h){var w
const g=Qu(e,n),m=n.type===xj,v=z(n,rj),A=!(1===g.length&&g[0]===jj),T=Ts(e,n),S=A&&!v&&!T,P=s(u)?u.clientIdentifierOverride:null,b=Y(n,mN),I=t.lockup.offerDisplayProperties,C=!i(I)||I.isFree
let k
if(m){const t=re(n,zj)
k=function(e,t,n,r){return n?Pg.context("bundleChildrenShelf",()=>{const o=gj,i=new $z(o)
i.isHorizontal=!0
const s=n.data.length
if(!s)return null
i.title=e.loc.stringWithCount("ProductPage.AppsInBundleShelf.Title",s)
const a=rp(e,n,r,1,o,null,76286,null,!0)
if(a.remainingItems.length){const e=new b2(t.id,a.remainingItems,i.title,!1,void 0,gj,lG,null)
e.isBundleShelf=!0,i.url=tp(0,e,r)}return rf(e,{pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker,targetType:tj,id:`${r.getSequenceId()}`,idType:fj},i.title),i.items=a.items,sf(r.locationTracker),r.addImpressionsToShelf(e,i,oB),uf(r.locationTracker),i.rowsPerColumn=s<2?1:2,i}):null}(e,n,t,a)}k&&(t.shelfMapping[oB]=k)
const O=re(n,xj),E=function(e,t,n,r){return n?Pg.context("bundleParentsShelf",()=>{const o=n.data.length
if(!o)return null
const i=gj,a=new $z(i)
a.isHorizontal=!0,a.title=e.loc.string("ProductPage.Section.IncludedInBundles.Title")
const c=rp(e,n,r,1,i)
if(0===c.remainingItems.length&&0===c.items.length)return null
if(a.items=c.items,s(c.remainingItems)){const e=new b2(t.id,c.remainingItems,a.title,!1,void 0,i,lG,null)
e.isBundleShelf=!0,a.url=tp(0,e,r)}return a.rowsPerColumn=o<2?1:2,r.addImpressionsToShelf(e,a,"bundleParent"),a}):null}(e,n,O,a)
E&&(t.shelfMapping[UN]=E)
const R={productTitle:t.title,shouldShowRatingsAndReviews:S,isFirstPartyHideableApp:b,isBundle:m,isPreorder:v},D=function(e,t,n,r,i){return Pg.context("createReviewsShelves",()=>{const a={}
if(o(t))return a
const c=function(e,t){if(jl(e))return!0
if(o(t))return!1
let n
return n=et(e).isSystemAppFromData(t),!n||e.bag.enableSystemAppReviews}(e,t),u=Qu(e,t),p=re(t,Ij),h=L(p),w=H(t,aF)
w.ratingAverage=f(w,hE),w.adamId=t.id,w.isBundle=r.isBundle,w.supportUrl=Ce(e,t,wD)
const g=ju(e,t,{useCase:2}),m=1===u.length&&"tv"===u[0],v=qs(e),A=l(w,iE),T=function(e,t,n,r){return Pg.context("createProductRatings",()=>{const n=Cs(e,e.client.guid,FU,t)
return n.ratingAverage>0&&n.ratingCounts||r||(n.status=e.loc.string(cE)),n})}(e,w,h.length,A),S=function(e,t,n,r,o,i){return Pg.context(JS,()=>{const r=Ll(e,t,n,0,o,i)
if(r){const e=new dJ
return e.actionType=Lm,e.action=r,e.id="ProductReviewAction.TapToRate",e}return null})}(e,t,r.productTitle,0,r.isBundle,m),P=function(e,t,n,r,o,i,s){return Pg.context("createWriteAReview",()=>{if(r)return null
{const r=new fJ
r.writeReviewAction=$s(e,t,i,s,o),r.supportAction=xl(e,n)
const a=new dJ
return a.actionType="writeAReview",a.action=r,a}})}(e,t,w,m,g,i,r.productTitle),b=function(e,t){return Pg.context(SS,()=>{if(e.props.enabled(nE))return null
const n=ys(e,t)
if((0,Ig.isSome)(n)){const e=new vJ
return e.sourceType=MG,e.review=n,e}return null})}(e,t),I=function(e,t,n){return Pg.context("createReviewSummaryProductReview",()=>{const r=ks(e,t,n)
if((0,Ig.isNothing)(r))return null
const o=new vJ
return o.review=r,o.sourceType=pU,o})}(e,t,n),C=ks(e,t,n),k=bs(e,w,h,!0,b,I,n),O=bs(e,w,h,!0,null,null,n),E=(function(e,t,n,r,o,i,s,a){Pg.context("createProductReviewActions",()=>{const c=new cJ
return c.tapToRate=Ll(e,t,n,0,o,i),c.writeReviewAction=$s(e,t,a,n,s),c.supportAction=xl(e,r),c})}(e,t,r.productTitle,w,r.isBundle,m,g,i),!1),R=!1
if(m||0===h.length||Ws(e,e.client.guid,w,h,p.next,r.productTitle,g,E,R,t,n),r.shouldShowRatingsAndReviews){const o=new $z(RG)
o.title=v,o.items=[T],a.ratingsShelf=o,n.addImpressionsToShelf(e,o,"ratingsOverview",null,null,null,e.loc.string("ProductPage.Section.Reviews.Title"))
const i=[]
if(s(S)&&c&&i.push(S),s(P)&&c&&i.push(P),s(i)){const e=new $z(PE)
e.items=i,a.allReviewActionsShelf=e}if(s(C)){const e=new $z(pU)
e.items=[C],a.reviewSummaryShelf=e}let l=null
s(S)&&c&&(l=new $z(PE),l.items=[S],a.tapToRateActionsShelf=l)
let u=null
s(P)&&c&&(u=new $z(PE),u.items=[P],a.writeAReviewActionsShelf=u)
const f=e.loc.string(bE),A=e.loc.string(qx),D=(0,Ig.isSome)(O)&&O.length>0
let _,L
if((0,Ig.isSome)(k)&&k.length>0&&(_=new $z(kL),_.items=k,_.isHorizontal=!0,e.props.enabled(YS)&&(D?(_.title=f,_.contentsMetadata={type:"productReviewsSection",hasReviewSummary:(0,Ig.isSome)(I),reviewSummaryTitle:A},n.addImpressionsToShelf(e,_,oE,null,null,null,e.loc.string(bE))):_.title=A),a.allProductReviewsShelf=_),D&&(L=new $z(kL),L.items=O,L.isHorizontal=!0,e.props.enabled(YS)&&(L.title=f),n.addImpressionsToShelf(e,L,oE,null,null,null,e.loc.string(bE)),a.userProductReviewsShelf=L),"tv"===e.client.deviceType){const t=new $z(IE)
t.title=v
const n=[]
s(S)&&S.action instanceof aJ&&c&&n.push(S.action),s(T.status)?e.featureFlags.isEnabled(Zx)?n.push(new gJ(T.status)):n.push(_s(T)):(n.push(Rs(T)),n.push(Ds(T))),t.items=n,a.purchasedRatingsAndReviewsComponentShelf=t}if("tv"===e.client.deviceType){const t=new $z(IE)
t.title=v
const n=[]
s(T.status)?e.featureFlags.isEnabled(Zx)?n.push(new gJ(T.status)):n.push(_s(T)):(n.push(Rs(T)),n.push(Ds(T))),t.items=n,a.notPurchasedRatingsAndReviewsComponentShelf=t}let x=null
s(b)&&(x=new $z(kL),x.items=[b],r.shouldShowRatingsAndReviews?e.featureFlags.isEnabled(iU)&&!b.review.showsBadge&&(x.title=e.loc.string(VS)):x.title=v,a.editorsChoiceProductReviewsShelf=x),!m&&h.length>0&&(a.ratingsShelf.seeAllAction=e.featureFlags.isEnabled(sE)?function(e,t,n,r,o,i=null,s,a,c){return r?Pg.context(DS,()=>{var l
const u=new rJ
let f,p,h
if((0,Ig.isSome)(null==c?void 0:c.allReviewActionsShelf)){f=y(c.allReviewActionsShelf)
const e=null!==(l=f.presentationHints)&&void 0!==l?l:{}
f.presentationHints={...e,displayIfReviewable:!0},Ml(f)}if((0,Ig.isSome)(null==c?void 0:c.ratingsShelf)){p=y(c.ratingsShelf)
const e=p.items[0]
if((0,Ig.isSome)(e)&&1===p.items.length){const t=y(e)
t.context=aD,p.items=[t]}p.seeAllAction=null,p.title=null,Ml(p)}(0,Ig.isSome)(null==c?void 0:c.reviewSummaryShelf)&&(h=y(c.reviewSummaryShelf),Ml(h))
const w=Vs(e,t,n,r,o,i,s,a,rE,{ratingsShelf:p,reviewSummaryShelf:h,reviewActionsShelf:f})
u.title=null,u.adamId=d(r,jU),u.nextPage=w.paginationToken,u.initialSortOptionIdentifier=w.initialSortId,u.sortActionSheetTitle=w.sortActionSheetTitle,u.sortOptions=w.sorts,(0,Ig.isSome)(p)&&u.shelves.push(p),(0,Ig.isSome)(h)&&u.shelves.push(h),(0,Ig.isSome)(f)&&u.shelves.push(f),u.shelves.push(w.reviewsShelf)
const g=Gs(e);(0,Ig.isSome)(g)&&(u.trailingNavBarAction=g)
const m=new Bq(Ij)
return m.pageData=u,m.title=e.loc.string(UU),m}):null}(e,e.client.guid,t.id,w,h,p.next,E,R,a):Ws(e,e.client.guid,w,h,p.next,r.productTitle,g,E,R,t,n))}return a})}(e,n,a,R,t.lockup.subtitle)
s(D)&&(t.shelfMapping[rN]=D.purchasedRatingsAndReviewsComponentShelf,t.shelfMapping[nN]=D.notPurchasedRatingsAndReviewsComponentShelf,t.shelfMapping[RG]=D.ratingsShelf,t.shelfMapping[Jx]=D.allReviewActionsShelf,t.shelfMapping[XF]=D.allProductReviewsShelf,t.shelfMapping[BN]=D.userProductReviewsShelf,e.featureFlags.isEnabled(iU)?e.props.enabled(nE)?t.shelfMapping[MG]=function(e,t){const n=ys(e,t)
if((0,bg.isNothing)(n))return null
const r=new $z(MG)
return r.items=[n],n.showsBadge?r.background={type:MG}:r.title=e.loc.string(VS),r}(e,n):t.shelfMapping[MG]=D.editorsChoiceProductReviewsShelf:t.shelfMapping[rB]=D.editorsChoiceProductReviewsShelf,t.shelfMapping[eN]=D.tapToRateActionsShelf,t.shelfMapping[tN]=D.writeAReviewActionsShelf,t.shelfMapping[Kx]=D.productReviewsHeader)
{const n=function(e){if(o(e.bag.ratingsAndReviewsLearnMoreEditorialId))return null
if(!e.props.enabled("ratingsAndReviewsLearnMoreFooter"))return null
const t=new $z("linkableText"),n=function(e){const t=e.loc.string(KS),n={},r=function(e){const t=e.bag.ratingsAndReviewsLearnMoreEditorialId
if(o(t))return null
const n=new Bq(KG)
return n.title=e.loc.string(KS),n.pageUrl=`https://apps.apple.com/story/id${t}`,n}(e)
if((0,Ig.isNothing)(r))return null
n[t]=r
let i=e.loc.string("ProductPage.RatingsAndReviews.Footer")
i=i.replace(ZN,t)
const s=new FV(i,wU)
return new mz(s,n)}(e)
return(0,Ig.isNothing)(n)?null:(t.items=[n],t)}(e);(0,Ig.isSome)(n)&&(t.shelfMapping[JB]=n)}const _=function(e,t,n){const r=ks(e,t,n)
if((0,Ig.isNothing)(r))return null
const o=new $z(pU)
return o.items=[r],o}(e,n,a);(0,Ig.isSome)(_)&&e.featureFlags.isEnabled(iU)&&(t.shelfMapping[pU]=_)
const x=function(e,t,n,r){return Pg.context(NN,()=>function(e,t,n,r,o,i){return Pg.context("standardMostRecentVersionShelf",()=>{if(!n&&!r&&!o){const n=Ie(e,t,DF)
if(n.length>1&&Fl(e,n).length>0){const r=new $z(XS)
r.title=e.loc.string(ZS)
const o=Nl(e,n[0],QS)
if(r.items=[o],i.addImpressionsToShelf(e,r,DF),r)return e.client.deviceType!==Vj&&(r.seeAllAction=function(e,t,n,r){return Pg.context("versionHistorySeeAllAction",()=>{const o=function(e,t,n){return Pg.context("versionHistoryPageAction",()=>{const r=Fl(e,t)
let o
if(r.length>0){const t=new $z(XS)
t.items=r
const i=new Gz([t])
i.title=e.loc.string("VERSION_HISTORY_PAGE_TITLE","Version History"),e.client.deviceType!==Vj&&(i.presentationOptions=[BF])
const s=ti(e,"VersionHistory",n,"")
ni(e,i,s)
const a=new Bq(DF)
a.title=e.loc.string("ACTION_VERSION_HISTORY_SEE_ALL"),a.pageData=i,o=a}return o})}(e,t,n)
return Ff(e,o,null,{pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker}),o})}(e,n,t.id,i)),r}}return null})}(e,t,r.isFirstPartyHideableApp,r.isBundle,r.isPreorder,n))}(e,n,a,{isFirstPartyHideableApp:b,isBundle:m,isPreorder:v})
x&&(t.shelfMapping[ZU]=x),t.shelfMapping[GN]=function(e,t,n){return Pg.context("textCardShelfFromResponse",()=>(o(t),null))}(0,n)
const M=Ce(e,n,nj)
if(e.bag.enablePrivacyNutritionLabels&&!la(e,n.id)&&!ua(e,M)){const s=function(e,t,n,r){return Pg.context("privacyShelf",()=>{if(o(t))return null
const i=new $z(ZG)
i.title=e.loc.string(D_)
const s=_c(e,t,!1,!1,n,r)
return i.items=[s],e.client.deviceType!==Vj&&"tv"!==e.client.deviceType&&(i.seeAllAction=$c(e,t,nB,n,r,null)),i})}(e,n,a.metricsPageInformation,a.locationTracker),c=function(e,t,n){return Pg.context(NN,()=>{if(o(t))return null
const r=H(t,dx)
if((0,bg.isNothing)(r)||o(r))return null
const i=new $z(L_),s=e.loc.string(D_)
rf(e,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:XO,id:`${n.getSequenceId()}`,idType:fj},s)
const a=bc(e,r,t,FU,!0,n.metricsPageInformation,n.locationTracker)
return null===a||0===a.length?null:(i.items=a,a.length<=2&&(i.presentationHints={isLowDensity:!0}),i.title=s,n.addImpressionsToShelf(e,i,"appPrivacy"),sf(n.locationTracker),uf(n.locationTracker),i.title=null,i)})}(e,n,a)
if(i(s)&&i(c)){t.shelfMapping[ZG]=s,i(c)&&(t.shelfMapping[HG]=c)
const l=function(e,t,n,s){return Pg.context(NN,()=>{if(o(t))return null
const a=Mc(e,t,!1,nB,n,s)
if((1===a.length&&a[0].identifier===JO||0===a.length)&&"tv"!==e.client.deviceType)return null
const c=new $z($G),l=function(e,t,n,o){return Pg.context("privacyFooterFromData",()=>{const t=function(e,t,n,o){let i
const s=e.loc.string(KO),a={},c=Lc(e,n,o)
r(c)?i=e.loc.string(ZO):(i=e.loc.string(oS),i=i.replace(ZN,s),r(c)?i=e.loc.string(ZO):a[s]=c)
const l=new FV(i,wU)
return new mz(l,a)}(e,0,n,o),s=function(e,t,n,r){if("tv"!==e.client.deviceType)return[]
const o=[],s=Lc(e,n,r)
i(s)&&o.push(s)
const a=xc(e,n,r)
return i(a)&&o.push(a),o}(e,0,n,o)
return new h1(t,s,[].length)})}(e,0,n,s)
return c.items=[l],c})}(e,n,a.metricsPageInformation,a.locationTracker)
i(l)&&(t.shelfMapping[$G]=l)}}const F=new y1,N=new y1,B=new y1,U=new y1,j=new y1,V=Rd(e,n),W=function(e,t,n,o,i,s,a,c){return Pg.context(NN,()=>{let l
switch(e.client.deviceType){case Vj:l=function(e,t,n,o){return Pg.context(rP,()=>{let i
const s=pl(e,t)?S1:T1,a=fl(e,s,t,n,!1,!1,o,null)
return a.length>0&&(i=new $z(WN),i.items=a,r(o)||o.addImpressionsToShelf(e,i,Aj)),i})}(e,t,n,o)
break
case"tv":l=function(e,t,n,o,i,s,a){return Pg.context("tvInformationShelf",()=>{let c
const l=fl(e,P1,t,n,!1,!1,o,a),u=function(e,t,n){return Pg.context("productCapabilitiesAsAnnotations",()=>{const r=[],o=el(e,t,n)
for(const e of o){const t=e.title,n=e.caption.styledText.rawText
if((null==t?void 0:t.length)>0&&(null==n?void 0:n.length)>0){const e=new jq(n),o=new Vq(n),i=new Gq(t,[e],[o])
r.push(i)}}return r})}(e,t,s).concat(fl(e,b1,t,n,!1,!1,o,a)),d=vt(e,oP),f=fl(e,d?[Yc]:[dl],t,n,!1,!0,o,a),p=[]
if(l.length>0){const t=new Uq(e.loc.string(AE),l,i)
p.push(t)}if(u.length>0){const t=new Uq(e.loc.string(TE),u,i)
p.push(t)}if(f.length>0){const t=d?e.loc.string("ProductPage.Section.ExternalPurchases.Title"):e.loc.string("ProductPage.Section.TopInAppPurchases.Title"),n=new Uq(t,f,!0)
p.push(n)}return p.length>0&&(jl(e)?(c=new $z("annotationGroup"),c.items=p,c.background=ep(e),r(o)||o.addImpressionsToShelf(e,c,Aj)):(c=new $z("informationContainer"),c.items=[new Hq(p)],r(o)||o.addImpressionsToShelf(e,c,Aj))),c})}(e,t,n,o,c,a,i)
break
default:l=function(e,t,n,o,i,s){return Pg.context(rP,()=>{let a
const c=pl(e,t)?S1:T1,l=fl(e,c,t,n,i,!1,o,s)
return l.length>0&&(a=new $z(WN),a.title=e.loc.string(AE),a.items=l,r(o)||o.addImpressionsToShelf(e,a,Aj)),a})}(e,t,n,o,s,i)}return l})}(e,n,b,a,(n,r,o)=>{var s,a
if(n===Hc&&(F.setShelfId(Aj,o),F.annotation=r),n===Gc&&i(t.banner)){i(t.banner.fullProductAction)&&(t.banner.action=t.banner.fullProductAction)
const n=t.banner.action
i(n)&&(jl(e)?n instanceof mW&&(null===(s=n.shelfId)||void 0===s?void 0:s.length)>0&&n.shelfId===Aj&&n.indexId===ZF&&(n.index=o):n instanceof oW&&(null===(a=n.section.shelfId)||void 0===a?void 0:a.length)>0&&n.section.shelfId===Aj&&n.indexId===ZF&&(n.index=o))}n===Qc&&(N.setShelfId(Aj,o),N.annotation=r),n===ul&&(B.setShelfId(Aj,o),B.annotation=r),n===Uc&&(U.setShelfId(Aj,o),U.annotation=r),n===Zc&&(j.setShelfId(Aj,o),j.annotation=r)},V,C,!1)
W&&(t.shelfMapping[Aj]=W)
const J=function(e,t,n,r){var o
if(!Oi(e))return null
let i=function(e,t){return c(e.views,[t,VB])}(t,rD)
if(((0,Ig.isNothing)(i)||0===i.length)&&(i=se(t,Uj)),(0,Ig.isNothing)(i)||0===i.length)return null
const s=oe(t,rD),a={pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,recoMetricsData:null!==(o=$(s))&&void 0!==o?o:void 0},l=i.some(e=>e.type!==Uj),u=l?"ProductPage.Section.AppEventsAndOffers.Title":"ProductPage.Section.AppEvents.Title",d=e.loc.string(u),f=l?"EventsAndOffers":"Events"
rf(e,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,recoMetricsData:a.recoMetricsData,targetType:tj,id:f,idType:XG},d)
const p=Fi(e,i,t,!l,!1,a,!1,!1,!1,!1);(0,Ig.isSome)(p.nextAppEventPromotionStartDate)&&On(p.nextAppEventPromotionStartDate,r)
const h=p.appPromotions
if(0===h.length)return sf(a.locationTracker),null
const w=na(0,h,d)
return n.addImpressionsToShelf(e,w,tj,f,XG,a.recoMetricsData),sf(a.locationTracker),uf(a.locationTracker),w}(e,n,a,p)
if(i(J)&&(t.shelfMapping[VG]=J),V){const r=function(e,t,n){if(o(t))return null
const r=d(be(e,t,xU),Wj)
if(r){const t=e.loc.string("APP_STORE_EDITORS_ATTRIBUTION"),o=new Iz(r,t),i=new $z(KU)
return i.items=[o],n.addImpressionsToShelf(e,i,KU),i.background={type:NU,color:G(Y_)},i}return null}(e,n,a)
r&&(t.shelfMapping[KU]=r)}t.shelfMapping[yB]=gl(e,n,a,!1,0,V),t.shelfMapping[gU]=gl(e,n,a,!0,0,V),t.shelfMapping[uM]=function(e,t,n){return Pg.context(NN,()=>{if("tv"!==e.client.deviceType)return null
if(o(t))return null
const r=new $z(AB)
r.isHorizontal=!1
const i=function(e,t){return t?Pg.context("externalProductLinksAsParagraphsFromData",()=>{const n=[],r=Ce(e,t,gD)
if(r){const t=e.loc.string("DEVELOPER_WEBSITE_WITH_URL").replace("{URL}",r),o=new NV(t)
e.featureFlags.isEnabled(Zx)&&(o.style=NM),o.alignment=IG,n.push(o)}return n}):null}(e,t)
return i&&i.length>0&&(r.items=i),jl(e)&&(r.background=ep(e)),n.addImpressionsToShelf(e,r,ZM),r})}(e,n,a)
const K=function(e,t,n,r){return Pg.context("capabilitiesShelf",()=>{if(o(t))return null
const i=Re(e,t)
if(o(me(t,i,nj)))return null
const s=el(e,t,n)
if(o(s))return null
const a=new $z("productCapability")
return a.title=e.loc.string(TE),a.items=s,a.mergeWhenFetched=!0,a.batchGroup=bU,r.addImpressionsToShelf(e,a,"supports"),a})}(e,n,C,a)
K&&(t.shelfMapping[YG]=K)
const Z=null!==(w=null==u?void 0:u.webBrowser)&&void 0!==w&&w
if(!Z){const r=re(n,ux)
if(s(r)){const i=function(e,t,n,r){return Pg.context("smallStoryShelf",()=>{if(o(n))return null
const i={pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker,targetType:tj,id:`${r.getSequenceId()}`,idType:fj},a=e.loc.string(HS)
rf(e,i,a)
const c=[],l={metricsLocationTracker:i.locationTracker,metricsPageInformation:i.pageInformation,filterOutMediaCardKinds:new Set([pM])},u=Zf(e,n,GU,a,null,l,function(e){return c.push(e),!1})
if(Array.isArray(u.items)&&(u.items=u.items.filter(e=>!(e instanceof yY)||Jf(0,e.media.kind,GU))),u.isHorizontal=!0,e.featureFlags.isEnabled(R_)&&e.bag.isOnDemandShelfFetchingEnabled&&(u.fetchStrategy=$g.OnShelfWillAppear),s(c)){sf(r.locationTracker),r.addImpressionsToShelf(e,u,uG),uf(r.locationTracker)
const n=new b2(t.id,c,u.title,!1,void 0,GU,null,null,null,null,null,vm.SmallStory)
ra(e,u,n),u.url=tp(0,n,r)}else sf(r.locationTracker),r.addImpressionsToShelf(e,u,uG),uf(r.locationTracker)
return u})}(e,n,r.data,a)
i&&(t.shelfMapping[uG]=i)}}const Q={isPreorder:v},X=new y1,ee=function(e,t,n,r){return Pg.context("friendsPlayingShelf",()=>{if(o(t))return null
const i=t.id
if(o(i))return null
if(!Oe(e,t,j$))return null
if(r.isPreorder)return null
const s=e.loc.string("ProductPage.Section.FriendsPlaying.Title","Playing This Game"),a={pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:tj,id:`${n.getSequenceId()}`,idType:fj}
rf(e,a,s)
const c=new $z(WS)
c.header=Vf(e,s),c.isHidden=!0,c.isHorizontal=!0,c.items=[],c.mergeWhenFetched=!0
const l=new b2(t.id,[],c.title,!1,void 0,null,null,null)
c.url=`${CW}:/${jW}/${RW}/?${Aq.isGameCenterPlayerShelf}=true&${Aq.id}=${i}&${Aq.token}=${np(l,n,n.metricsPageInformation)}`,c.batchGroup=bU,n.addImpressionsToShelf(e,c,uj),sf(n.locationTracker),uf(n.locationTracker)
const u=new Bq(Jj)
return Ff(e,u,null,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker}),c})}(e,n,a,Q)
ee&&(t.shelfMapping[uj]=ee,X.setShelfId(uj))
const te=function(e,t,n,r){return Pg.context("achievementsShelf",()=>{if(o(t))return null
if(r.isPreorder)return null
if(!Oe(e,t,j$))return null
const i=Re(e,t),s=me(t,i,nj)
if(o(s))return null
const a=e.loc.string("ProductPage.Section.Achievements.Title",uF),c=new $z(jS)
c.header=Vf(e,a),c.isHorizontal=!0,c.items=[],c.mergeWhenFetched=!0
const l=new b2(t.id,[],c.title,!1,void 0,null,null,null)
return l.sourceLocationTracker=n.locationTracker,l.destinationPageInformation=n.metricsPageInformation,c.url=`${CW}:/${jW}/${RW}/?${Aq.isGameCenterAchievementsShelf}=true&${Aq.bundleId}=${s}&${Aq.token}=${np(l,n,n.metricsPageInformation)}`,c.batchGroup=bU,uf(n.locationTracker),c})}(e,n,a,{isPreorder:v})
if(te&&(t.shelfMapping[Cj]=te),!h&&!Z){const r=function(e,t,n){return Pg.context("moreByDeveloperShelf",()=>{if(o(t))return null
const r=yd(0,ie(e,t,mG)),i=q(t,EU),a=re(t,lx)
if(!a||0===a.data.length)return null
const c=e.loc.string("ProductPage.Section.MoreByDeveloper.TitleTemplate").replace("{developer}",i)
let l
switch(rf(e,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:tj,id:`${n.getSequenceId()}`,idType:fj},c),e.client.deviceType){case jj:case"tv":l=cG
break
default:l=gj}const u=new $z(l)
u.title=c
const d=e.client.isCompanionVisionApp?32768:void 0,f=rp(e,a,n,Fu(0,l),l,null,d)
if(!f)return null
u.items=f.items,u.isHorizontal=!0,a.data.length<2?u.rowsPerColumn=1:u.rowsPerColumn=2
{const t=new Bq(Jj)
t.pageUrl=r,t.title=e.loc.string(UU),Ff(e,t,t.pageUrl,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker}),u.seeAllAction=t}if(e.featureFlags.isEnabled(R_)&&e.bag.isOnDemandShelfFetchingEnabled&&(u.fetchStrategy=$g.OnShelfWillAppear),s(f.remainingItems)){sf(n.locationTracker),n.addImpressionsToShelf(e,u,mG),uf(n.locationTracker)
const o=new b2(t.id,f.remainingItems,u.title,!1,void 0,l,null,null,null,null,null,vm.MoreByDeveloper)
o.developerUrl=r,ra(e,u,o),u.url=tp(0,o,n)}else sf(n.locationTracker),n.addImpressionsToShelf(e,u,mG),uf(n.locationTracker)
return u})}(e,n,a);(0,Ig.isSome)(r)&&(t.shelfMapping[UG]=r)}if(!h&&!Z){const r=function(e,t,n){return Pg.context("similarItemsShelf",()=>{var r
if(o(t))return null
if(e.client.isCompanionVisionApp)return null
const i=re(t,AN)
if(o(i))return null
const a=Rd(e,t),c=a?e.loc.string("Arcade.ProductPage.MoreFromAppleArcade"):e.loc.string("ProductPage.Section.SimilarItems.Title"),l=QG,u=QF
let d,f
switch(rf(e,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:l,id:A1.similarItemsShelfId,idType:u},c),e.client.deviceType){case"tv":d=cG,f=!1
break
case jj:d=cG,f=!0
break
default:d=gj,f=!0}const p=new $z(d)
p.title=c
const h=$(i),w=rp(e,i,n,Fu(0,d),d,null,null,h)
if(!w)return null
p.items=w.items
const g=ro(e,WG),m=ti(e,"SimilarItems",t.id,""),v=new b2(t.id,i.data,p.title,f,void 0,d,null,null,null,null,null,vm.SimilarItems),y=$l(0,t.id,v,n,m)
if(p.refreshUrl=y,p.isHorizontal=!0,i.data.length<2?p.rowsPerColumn=1:p.rowsPerColumn=a?2:3,e.featureFlags.isEnabled(R_)&&e.bag.isOnDemandShelfFetchingEnabled&&(p.fetchStrategy=$g.OnShelfWillAppear),s(w.remainingItems)||g){sf(n.locationTracker),n.addImpressionsFieldsToSimilarItemsShelf(e,p,l,u),uf(n.locationTracker)
const o=new b2(t.id,null!==(r=w.remainingItems)&&void 0!==r?r:[],p.title,f,void 0,d,null,null,p.refreshUrl,h,a,vm.SimilarItems)
if(ra(e,p,o),p.url=tp(0,o,n,m),g){const e=new xq(p.url)
e.param(Aq.isShelfWithAd,zG),e.param(Aq.shelfWithAdPlacementType,WG),e.param(Aq.id,t.id),p.url=e.build()}}else sf(n.locationTracker),n.addImpressionsFieldsToSimilarItemsShelf(e,p,l,u),uf(n.locationTracker)
return p})}(e,n,a);(0,Ig.isSome)(r)&&(t.shelfMapping[QG]=r)}const ne=wl(e,n,a,{isForSubscriptions:!0,options:u})
ne&&(t.shelfMapping[$B]=ne)
const ae=wl(e,n,a,{isForSubscriptions:!1,options:u})
ae&&(t.shelfMapping[MB]=ae),t.title
const ce=function(e,t,n,r){return Pg.context("createActionLinks",()=>(o(t),null))}(0,n)
ce&&(t.shelfMapping[IL]=ce)
const le=function(e,t,n,r){return Pg.context("productMediaShelves",()=>{if(o(t))return null
const i=(e.client.deviceType,null),a=(e.client.deviceType,null),c=Fe(e,t),l=Ju(e,t,11,i,c,n),u=qu(e,t,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}},a)
let d=null
if(u)for(const e of l)if(e.mediaPlatform.isEqualTo(u.mediaPlatform)){d=e
break}let f=null
if(d){const e=d.mediaPlatform.appPlatform
if(e===Bj||e===LG)for(const e of d.items){const t=e.screenshot
if(f=t.width/t.height,f<1)break}}const p=[],h=[]
if(d&&u&&u.videos)for(const n of u.videos){const o=new Kq
o.video=n
const i=n.preview.width/n.preview.height,s=null===f||Math.abs(i-f)<.01,a=d.mediaPlatform.isEqualTo(u.mediaPlatform)
s&&a?p.push(o):h.push(n)
const c={pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker,id:t.id,isAdvert:!!r.metricsPageInformation.iAdInfo&&r.metricsPageInformation.iAdInfo.iAdIsPresent}
Ao(e,n,c)}d&&(d.items=p.concat(d.items))
let w=[],g={}
for(let n=0;n<l.length;n++){const o=l[n],i=`${h0}_${o.mediaPlatform.appPlatform}_${o.mediaPlatform.supplementaryAppPlatforms.join("_")}`
w.push(new SX(Kj,i))
const a=new $z(zS,null,o.items)
a.isHorizontal=!0
let c=!1,u=Qs(0,o.items[0])
for(const e of o.items)if(s(e.screenshot)&&e.screenshot.isPortrait()||s(e.video)&&e.video.preview.isPortrait()){u=Qs(0,e),c=!0
break}a.contentsMetadata={type:"productMedia",platform:o.mediaPlatform,allPlatforms:o.allPlatforms,platformDescription:o.platformDescription,allPlatformsDescription:o.allPlatformsDescription,allPlatformsDescriptionPlacement:o.allPlatformsDescriptionPlacement,hasPortraitMedia:c,expandProductMediaAction:null,viewProductMediaGalleryAction:Zs(e,o,t.id),aspectRatio:u},r.addImpressionsToShelf(e,a,$j),0===n&&"tv"!==e.client.deviceType&&(a.title=e.loc.string(mS)),g[i]=a}return h.length>0&&(g[FG]=function(e,t,n){return Pg.context("videoShelf",()=>{if(!t||0===t.length)return null
let r
return jl(e)?(r=new $z(zS),r.title=e.loc.string(nP),r.items=t.map(e=>{const t=new Kq
return t.video=e,t})):(r=new $z(Z_),r.title=e.loc.string(nP),r.items=t.map(e=>new Sz(e,!0,wU,null,null,!0))),r.isHorizontal=!0,n.addImpressionsToShelf(e,r,FG),r})}(e,h,r)),{sectionMappings:w,shelfMapping:g}})}(e,n,P,a)
t.shelfMapping={...t.shelfMapping,...le.shelfMapping}
{const e=V?cF:lF,n=Pc(0,e)
t.shelfMapping[e]=n}!function(e,t,n){if(t&&t.spotlightSection){const e=t.spotlightInAppProductIdentifier
if(e&&t.spotlightSection){const r=n.shelfMapping[t.spotlightSection.shelfId]
if(!r)return
if(r.presentationHints={isInProductPageSpotlight:!0},ip(0,e,r.items),r.url){const t=new xq(r.url)
t&&(r.url=t.param(Aq.offerName,e).build())}}}}(0,u,t)
const ue={},de=Yx,fe=zx,pe=O_,he=KB,we=uj,ge=dE
ue[F_]=F,ue[de]=F,ue[fe]=N,ue[pe]=B,ue[he]=U,ue[we]=X,ue[ge]=j,t.badges&&Nc(e,t.badges,ue,a),null!=t.shelfMapping[BG]&&Nc(e,Wl(e,t.shelfMapping[BG]),ue,a),Gl(e,t,le.sectionMappings,V,u)}(e,S,w,T,n,I,p),S.pageRefreshPolicy=En(e,I),S.isIncomplete=!1,S.alwaysAllowReviews=Ss(e,w),p&&(S.shareAction=null,S.titleOfferDisplayProperties=null,S.expandedOfferDetails=null,S.lockup.offerDisplayProperties=null,S.banner=null),S})}function Ul(e,t,n,a,c,u,f,p=!1){return Pg.context("createProductPageSidePack",()=>{var p
let h
i(a)&&(h=a.clientIdentifierOverride)
const w=t.id,g=q(t,Yj),m=Y(t,mN),v=Ts(e,t),y=Rd(e,t),A={pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,id:w,isAdvert:!!n.metricsPageInformation.iAdInfo&&n.metricsPageInformation.iAdInfo.iAdIsPresent},T=new AJ,S=new nz,P=z(t,rj)
P&&i(n)&&i(n.metricsPageInformation)&&(n.metricsPageInformation.offerType=BU,n.metricsPageInformation.offerReleaseDate=bt(0,t)),S.adamId=w,S.bundleId=d(t,nj),T.uber=function(e,t,n){Vu(e,t,n)
const r=Rd(e,t),s=function(e,t){return t&&!0}(0,r)?Pj:_y,a=new w0(s)
if(a.artwork=gd(e,t,{supportsArcade:r}),a.compactArtwork=gd(e,t,{supportsArcade:r,prefersCompactVariant:!0}),a.video=md(e,t,21),i(a.video)&&(a.video.playbackId=function(e){return`ProductPage.${e.id}.productUberVideoPlaybackId`}(t)),r&&o(a.video)&&o(a.artwork)){const r=Ju(e,t,11,(e.client.deviceType,null),Fe(e,t),n)
if(r.length>0&&r[0].items.length>0){const e=r[0].items[0]
a.video=e.video,a.artwork=e.screenshot}}return o(a.compactArtwork)&&(a.compactArtwork=a.artwork),a.isValidUber(!1,!1)?a:null}(e,t,h)
const b=T.uber&&T.uber.style===Pj
S.icon=ju(e,t,{useCase:10,withJoeColorPlaceholder:void 0},h),T.title=g,T.isIncomplete=!0,S.title=g,S.subtitle=uu(e,t),S.developerTagline=Ce(e,t,AG),T.regularPriceFormatted=q(t,"regularPriceFormatted"),T.logoArtwork=function(e,t){let n=null,r=null
if("tv"!==e.client.deviceType)return null
n=fy,r="bb"
const o=be(e,t,n)
return i(o)&&i("bb")?Nu(e,o,{cropCode:"bb",useCase:0,withJoeColorPlaceholder:!0}):null}(e,t),T.navigationBarIconArtwork=null,v||(S.rating=J(t,zk)),S.children=cu(e,t,{metricsOptions:A,artworkUseCase:1})
const I=function(e,t,n,r,o,a,c){var u
const d=At(e,t),f=Ce(e,t,nj),p=z(t,rj),h=St(e,d,t,p,!1,Qd(e,t,n,null==a?void 0:a.clientIdentifierOverride),o,FU,c,a.webBrowser)
if(null!==(u=null==a?void 0:a.webBrowser)&&void 0!==u&&u&&e.props.enabled(oF))return{buttonAction:new HH(t.id),offerAction:h}
let w
if(s(h)){i(a)&&(h.lineItem=a.iAdLineItem)
const n=s(a)?a.clientIdentifierOverride:null
if(w=kt(e,h,t,p,o,FU,n),i(a)&&s(w)){const n=De(e),r=Le(e,t,Fe(e,t),Lx,n),i=s(r)&&!l(a.isCppDeepLinkDisabled),c=s(a.externalDeepLinkUrl)
if(i||c){const t=i?r:a.externalDeepLinkUrl
w=ct(e,w,h.adamId,f,t,!1,o)}}}return{buttonAction:w,offerAction:h}}(e,t,S.icon,0,A,a,u)
if(S.buttonAction=I.buttonAction,P){let n
T.theme=$R
let r=null
if(y)n="",r=e.loc.uppercased(Ud(e,t,e.loc.string(mE)))
else if(n=e.loc.string(mE),i(I.offerAction.expectedReleaseDate)){const n=V_,o=e.loc.formatDate(n,I.offerAction.expectedReleaseDate),i=e.loc.string("PREORDER_EXPANDED_OFFER_SUBTITLE").replace(pE,o)
r=Ud(e,t,i)}T.expandedOfferDetails=new QY(n,r)}let C,k
b&&y&&(T.theme=cj),b&&y?(C=cj,k=lM):(C=OB,k=FU)
const O=FU,E=OB,R=y?Z$:Oj,D=null!==(p=null==a?void 0:a.webBrowser)&&void 0!==p&&p?qT:FU
let _
S.offerDisplayProperties=Ut(e,I.offerAction,R,t,P,0,C,k,null,null,D,!1,!1),T.titleOfferDisplayProperties=Ut(e,I.offerAction,R,t,P,0,E,O,null,null,D)
const L=ie(e,t,mG),x=yd(0,L)
i(x)&&(_=new Bq(Jj),_.title=q(t,EU),_.pageUrl=x,$f(e,_,{targetType:Hj,id:L.id,actionType:Fj,pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker})),T.developerAction=_,T.shareAction=hs(e,t,n.metricsPageInformation,n.locationTracker,h),S.tertiaryTitle=du(e,t),S.tertiaryTitleAction=fu(e,t),S.tertiaryTitleArtwork=null
const M={appPlatforms:Qu(e,t),clientIdentifierOverride:h,offerButtonShouldBeDisabled:!1,productTitle:T.title,metricsPageInformation:n.metricsPageInformation,metricsLocationTracker:n.locationTracker,webBrowser:a.webBrowser},$=function(e,t,n){let i=null,a=null,c=null,l=null,u=null,d=!1,f=null
const p=Oe(e,t,Wm),h=Oe(e,t,qm)
if((p||h)&&(i=e.loc.string("APP_UPDATE_REQUIRED_IOS"),n.offerButtonShouldBeDisabled=!0),null===i&&tt(e,t,1024)&&(i=e.loc.string("OFFER_WATCH_ONLY_BANNER"),n.offerButtonShouldBeDisabled=!0),null===i&&!_u(e,t)){if(i=e.loc.string(fS),jl(e)){const t=new mW(Aj)
t.title=e.loc.string(KF),t.indexId=ZF,c=t}else{const t=new ZY(Kj,Aj),n=new oW(t)
n.title=e.loc.string(KF),n.indexId=ZF,c=n}i=e.loc.string(f$).replace(p$,c.title),n.offerButtonShouldBeDisabled=!0}if(null===i&&tt(e,t,36)&&(i=e.loc.string(pS),n.offerButtonShouldBeDisabled=!0),tt(e,t,512)){const n=ad(e,t,e.appleSilicon.isSupportEnabled),r=function(e,t){if(t.type!==xj)return!1
const n=se(t,zj)
if(!n||0===n.length)return!1
let r=0
for(const t of n)tt(e,t,512)&&r++
return 0!==r&&r!==n.length}(e,t)
switch(e.client.deviceType){case jj:const o=r?"ProductPage.Banner.Bundle.SomeAppsRequireMinimumOS.macOS":"UNSUPPORTED_MACOS_VERSION"
i=e.loc.string(o).replace(tB,n)
break
case Bj:case Lj:const s=r?"ProductPage.Banner.Bundle.SomeAppsRequireMinimumOS.iOS":"UNSUPPORTED_IOS_VERSION"
i=e.loc.string(s).replace(tB,n)
break
case"tv":const a=r?"ProductPage.Banner.Bundle.SomeAppsRequireMinimumOS.tvOS":"UNSUPPORTED_TVOS_VERSION"
i=e.loc.string(a).replace(tB,n)
break
case Vj:const c=Ce(e,t,vM),l=r?"ProductPage.Banner.Bundle.SomeAppsRequireMinimumOS.watchOS":hS
i=e.loc.string(l).replace(tB,c)
break
case Tj:const u=r?"ProductPage.Banner.Bundle.SomeAppsRequireMinimumOS.visionOS":"UNSUPPORTED_VISIONOS_VERSION"
i=e.loc.string(u).replace(tB,n)
break
default:i=e.loc.string(pS)}if(e.client.isPhone&&Oe(e,t,VN)){const n=Ce(e,t,vM)
i=e.loc.string(hS).replace(tB,n)}}if(tt(e,t,128))if(n.offerButtonShouldBeDisabled=!0,i=e.loc.string(fS),jl(e)){const t=new mW(Aj)
t.title=e.loc.string(KF),t.indexId=ZF,c=t,i=e.loc.string(f$).replace(p$,t.title)}else{const t=new ZY(Kj,Aj),n=new oW(t)
n.title=e.loc.string(KF),n.indexId=ZF,c=n,i=e.loc.string(f$).replace(p$,n.title)}if(tt(e,t,8192)){if(jl(e)){const t=new mW(Aj)
t.title=e.loc.string(KF),t.indexId=ZF,c=t}else{const t=new ZY(Kj,Aj),n=new oW(t)
n.title=e.loc.string(KF),n.indexId=ZF,c=n}i=e.loc.string(f$).replace(p$,c.title)}(function(e,t){if(e.client.deviceType!==jj)return!1
if(t.type!==xj)return!1
const n=se(t,zj)
if(0===n.length)return!1
let o=!1,i=!1
for(const t of n){if(r(t.attributes))continue
const n=dd(e,t)
n.runsOnAppleSilicon&&!n.runsOnIntel?o=!0:i=!0}return o&&i})(e,t)&&!e.appleSilicon.isSupportEnabled&&(i=e.loc.string("ProductPage.Banner.Bundle.SomeAppsRequireAppleSilicon"))
const w=Y(t,rj)
xd(e,t)&&(i=w?e.loc.string("ProductPage.WatchOS.PreOrderRequiresiPhone"):e.loc.string("UNSUPPORTED_COMPANION_CONFIGURATION","Requires iPhone"),n.offerButtonShouldBeDisabled=!0)
const g=Ce(e,t,vM)
if(null===i&&n.clientIdentifierOverride===tH&&Fd(e,g)&&(i=e.loc.string("ProductPage.Banner.PairedWatchOSVersionBelowMinimum").replace(tB,g)),Te(e,t,tU)&&!e.client.isCompanionVisionApp){const t=e.loc.string("BANNER_VISION_ONLY_APP_LEARN_MORE_LINK")
a=function(e,t,n,r){const i=e.bag.visionOnlyAppLearnMoreEditorialItemId
if(o(i))return null
const s=new Bq(KG)
return s.title=t,s.pageUrl=`https://apps.apple.com/story/id${i}`,$f(e,s,{id:R$,targetType:pj,actionType:Fj,pageInformation:n,locationTracker:r}),s}(e,t,n.metricsPageInformation,n.metricsLocationTracker),i=function(e,t,n){return t&&n?e.loc.string("BANNER_VISION_ONLY_APP_WITH_LINK").replace(ZN,t):e.loc.string("BANNER_VISION_ONLY_APP_NO_LINK")}(e,t,a),c=null,l=ce(e,"systemimage://visionpro"),u=G(Dx),d=!0}$t(e,t)&&!Nt(e)?(n.offerButtonShouldBeDisabled=!0,i=e.loc.string("ProductPage.Banner.Companion.VisionDeviceRequired")):e.client.isCompanionVisionApp&&!$t(e,t)&&(n.offerButtonShouldBeDisabled=!0,i=e.loc.string("ProductPage.Banner.Companion.RemoteDownloadUnavailable"))
const m=mt(e,t),v=vt(e,"product-page-banner")
if((null===i||!n.offerButtonShouldBeDisabled)&&m&&v){const t=e.loc.string("ProductPage.ExternalPurchasesBanner.LearnMore")
a=yt(e,t,n.metricsPageInformation,n.metricsLocationTracker),i=function(e,t,n){if(t&&n){if((0,bg.isSome)(e.bag.externalPurchasesProductPageBannerTextVariant)){const n=`ProductPage.ExternalPurchasesBanner.WithLink.Variant${e.bag.externalPurchasesProductPageBannerTextVariant}`
return e.loc.string(n).replace(ZN,t)}return e.loc.string("ProductPage.ExternalPurchasesBanner.WithLink").replace(ZN,t)}if((0,bg.isSome)(e.bag.externalPurchasesProductPageBannerTextVariant)){const t=`ProductPage.ExternalPurchasesBanner.NoLink.Variant${e.bag.externalPurchasesProductPageBannerTextVariant}`
return e.loc.string(t)}return e.loc.string("ProductPage.ExternalPurchasesBanner.NoLink")}(e,t,a),c=null,e.bag.externalPurchasesIncludeProductPageBannerIcon?"secondaryInfoCircle"===e.bag.externalPurchasesProductPageBannerIconVariant?(l=ce(e,"systemimage://info.circle"),u=G(Dx)):(l=ce(e,x_),u=G("systemRed")):(l=null,u=null),d=!0}if(e.props.isNotEnabled(oF)&&(null===i||!n.offerButtonShouldBeDisabled)&&(0,bg.isSome)(n.webBrowser)&&n.webBrowser&&(i=e.props.enabled("productPageSetDefaultBrowserOnPurchase")?e.loc.string("ProductPage.Banner.DefaultBrowser.Message"):e.loc.string("ProductPage.Banner.WebBrowser.Message"),l=ce(e,"systemimage://gear"),u=G(Dx),f=M_),(null==i?void 0:i.length)>0)return new zq(i,null,a,c,l,u,d,f)
if(!n.offerButtonShouldBeDisabled){const n=sd(e,t)
if(s(n))return function(e,t){const n=e.loc.string("ProductPage.Banner.ExternalBrowser.Message")
let r=n,o=n,i=n,s=n,a=n
return[KN].includes(e.client.buildType)&&(r+="\n(Internal: unknown)",o+="\n(Internal: buyOrGet)",i+="\n(Internal: redownload)",s+="\n(Internal: update)",a+="\n(Internal: open)"),new Yq(Bc($_,t,r),Bc($_,t,o),Bc($_,t,i),Bc(NO,t,s),Bc("launch",t,a))}(e,n)}return null}(e,t,M)
$ instanceof zq?T.banner=$:$ instanceof Yq&&(T.appStateBanner=$)
const F=S.offerDisplayProperties
M.offerButtonShouldBeDisabled&&s(F)&&(S.offerDisplayProperties=F.newOfferDisplayPropertiesChangingAppearance(!1,dN))
const N=!tt(e,t,512)
if(!m&&!M.offerButtonShouldBeDisabled&&N){const n=function(e,t){return Pg.context("updateOfferDataFromData",()=>{const n=Ie(e,t,_B)
if(0===n.length)return null
for(const e of n)if(d(e,PU)===NO)return e
return null})}(e,t)
T.updateBuyParams=d(n,PB),T.externalVersionIdentifier=Ee(e,t,vE)}if(y&&(S.editorialTagline=e.loc.string("APPLE_ARCADE")),T.lockup=S,T.appPlatforms=Qu(e,t),i(c)){const n=Ci(e,c,t,!1,!1,kj,cj,!0,!1,A,!0,!1,null,!1,!1)
if(i(c)&&n instanceof nQ){const r=n
T.appPromotionDetailPageFlowAction=ki(e,c,t,r,A,rG,!1,f)}}!function(e,t,n,i,s,a){if(t.shelfMapping[Rj]=new $z(yE,"productTopLockup"),"tv"!==e.client.deviceType){const s={developerAction:t.developerAction}
t.shelfMapping[yj]=function(e,t,n,i){return Pg.context("descriptionShelf",()=>{if(o(t))return null
const s=new $z("productDescription"),a=function(e,t){return t?Pg.context("productDescriptionLinksFromData",()=>{const n=[],r=Ce(e,t,gD)
if(r){const t=new xH(r,!1),o=e.loc.string("PRODUCT_DEVELOPER_WEBSITE")
n.push(new vz(o,t,"safari"))}const o=Ce(e,t,wD)
if(o){const t=new xH(o,!1),r=e.loc.string("DEVELOPER_SUPPORT")
n.push(new vz(r,t,"questionmark.circle"))}return n}):null}(e,t),c=function(e,t,n=null){return Pg.context("descriptionFromData",()=>{r(n)&&(n=Fe(e,t))
let o=function(e,t,n){return Le(e,t,n,Yv)}(e,t,n)
o||(o="")
let i=Ce(e,t,HN)
i||(i="")
let s=""
o.length>0&&i.length>0&&(s="\n\n")
const a=o+s+i
if(a.length>0){const e=new NV(a)
return e.isCollapsed=!0,e}return null})}(e,t)
if(null===c)return null
const l=new Xq(c,a,i.developerAction)
return s.items=[l],n.addImpressionsToShelf(e,s,yj),s})}(e,n,i,s)}{const r={useInlineUberStyle:t.uber&&t.uber.style===Pj}
t.shelfMapping[BG]=function(e,t,n,r){if(jl(e)){const r=new $z("productBadge"),o=_l(e,t,!0,{locationTracker:n.locationTracker,pageInformation:n.metricsPageInformation})
return r.items=o,r.isHorizontal=!0,n.addImpressionsToShelf(e,r,BG),r}{const o=new $z(BG),i=_l(e,t,!0,{locationTracker:n.locationTracker,pageInformation:n.metricsPageInformation}),s=!r.useInlineUberStyle,a=!1,c=r.useInlineUberStyle,l=new kz(i,s,a,c,"justified")
return o.items=[l],o.isHorizontal=!0,n.addImpressionsToShelf(e,o,BG),o}}(e,n,i,r)}Gl(e,t,[],Rd(e,n),s)}(e,T,t,n,a),T.uber&&(T.presentationOptions.push(WM),T.presentationOptions.push(Ly)),T.alwaysAllowReviews=Ss(e,t)
const B=null==a?void 0:a.iAdDismissAdActionMetrics
if((0,Ig.isSome)(B)){const e=new JY(d(B.instanceId),d(B.adamId),d(B.bundleId),d(B.advertType),d(B.invocation),d(B.purchaseType),d(B.reportingDestination)),t=new bW(e)
T.pageDisappearedAction=t
const n=new JY(d(B.instanceId),d(B.adamId),d(B.bundleId),d(B.advertType),DA,d(B.purchaseType),d(B.reportingDestination))
T.lockup.buttonAction=to(0,T.lockup.buttonAction,n)}return T})}function Gl(e,t,n,r,o){const i=function(e,t,r){return e.map(e=>e.shelfId===$j&&r?n:e.shelfId===$j?n[0]?[n[0]]:[]:[e]).reduce((e,t)=>e.concat(t)).map(e=>e.createShelfIdList()).reduce((e,t)=>e.concat(t))},a=Ys(0,!0,e.host.platform,r,!1,!1,o),c=Ys(0,!1,e.host.platform,r,!1,!1,o),l=Ys(0,!0,e.host.platform,r,!0,!1,o),u=Ys(0,!1,e.host.platform,r,!0,!1,o),d=Ys(0,!1,e.host.platform,r,!1,!0,o),f=Ys(0,!1,e.host.platform,r,!0,!0,o)
t.shelfOrderings.purchasedOrdering=i(a,0,!1),t.shelfOrderings.purchasedOrdering_ExpandedMedia=i(a,0,!0),t.shelfOrderings[yJ]=i(c,0,!1),t.shelfOrderings.notPurchasedOrdering_ExpandedMedia=i(c,0,!0),t.shelfOrderings.purchasedOrdering_Compact=i(l,0,!1),t.shelfOrderings.purchasedOrdering_ExpandedMedia_Compact=i(l,0,!0),t.shelfOrderings.notPurchasedOrdering_Compact=i(u,0,!1),t.shelfOrderings.notPurchasedOrdering_ExpandedMedia_Compact=i(u,0,!0),t.shelfOrderings.downloadingOrdering=i(d,0,!1),t.shelfOrderings.downloadingOrdering_ExpandedMedia=i(d,0,!0),t.shelfOrderings.downloadingOrdering_Compact=i(f,0,!1),t.shelfOrderings.downloadingOrdering_ExpandedMedia_Compact=i(f,0,!0),t.defaultShelfOrdering=yJ
for(const e of Object.keys(t.shelfMapping))s(t.shelfMapping[e])&&(t.shelfMapping[e].id=e)}function jl(e){return e.featureFlags.isEnabled("shelves_2_0_product")||!0}function Vl(e,t,n={},r={},o=null,i=!1,s=!1){const a=Rd(e,_(e,t)),c=Bl(e,t,n,r,o,s)
return jl(e)&&!i?c:Xs(e,c,a,n)}function Hl(e,t,n={}){if(!e.client.isSidepackingEnabled)return null
const o=Rd(e,t),i=function(e,t,n){return Pg.context("createProductPageSidePackFromResponse",()=>{if(!e.client.isSidepackingEnabled)return null
const o=function(e,t,n){const r=q(t,Sj),o=q(t,Yj),i=q(t,EU)
let s=null
n&&(s=n.iAdClickFields)
const a=ti(e,wB,t.id,`${i}_${o}`,s)
return a.pageUrl=r,new A1(a,{rootPosition:0,locationStack:[]})}(e,t,n),i=Ul(e,t,o,n)
return function(e,t,n){r(n)||(t.pageMetrics.addData(ui(e,n,void 0),[Mg.PageInvocationPoint.backButton]),r(t.pageMetrics.pageFields)&&(t.pageMetrics.pageFields={}))}(e,i,o.metricsPageInformation),i})}(e,t,n)
return jl(e)?i:Xs(e,i,o,n)}function Wl(e,t){if(o(null==t?void 0:t.items))return[]
if(jl(e))return t.items
{const e=t.items
return e.length>0?e[0].badges:[]}}function ql(e,t,n){const r=Ht(0,t),o=e.props.enabled("universalEditorialMediaFlavors")?E1[n]:O1[n],i=zl(e,t,r,n,o,!1),s=zl(e,t,r,n,R1[n],!0)
return i.rtlArtwork=s.rtlArtwork,i.rtlArtworkData=s.rtlArtworkData,i.rtlVideo=s.rtlVideo,i.rtlBackgroundColor=s.rtlBackgroundColor,i.rtlTextColorOverride=s.rtlTextColorOverride,i}function zl(e,t,n,r,o,a){let c={}
for(const l of o){if(i(n)&&(c=Jl(e,n,r,l,a)||Yl(e,n,r,l,a),s(c)))break
if(c=Jl(e,t,r,l,a)||Yl(e,t,r,l,a),s(c))break}return(0,bg.isNothing)(c)&&(c={}),c}function Yl(e,t,n,r,i){let a=null,c=null,l=null
const u=`editorialArtwork.${r}`,d=Re(e,t)
if(c=H(t,u)||we(t,d,u),o(c))return null
a=Nu(e,c,{withJoeColorPlaceholder:!0,useCase:Kl(n),cropCode:Zl(n,r,i)}),s(a)&&(l=a.backgroundColor)
const f=Xl(0,c,a)
return i?{rtlArtwork:a,rtlArtworkData:c,rtlBackgroundColor:l,rtlTextColorOverride:f}:{artwork:a,artworkData:c,backgroundColor:l,textColorOverride:f}}function Jl(e,t,n,r,i){let a=null,c=null,l=null,u=null
const f=`editorialVideo.${r}`,h=Re(e,t)
if(l=H(t,f)||we(t,h,f),o(l))return null
const w=p(l,kN)
s(w)&&(c=Nu(e,w,{withJoeColorPlaceholder:!0,useCase:Kl(n),cropCode:"sr"})),s(c)&&(c.crop="sr",u=c.backgroundColor)
const g=d(l,ej)
s(c)&&(null==g?void 0:g.length)>0&&(a=new JV(g,c,{canPlayFullScreen:!1,showPlaybackControls:!1,allowsAutoPlay:!0,looping:!0,playbackControls:eu(0,n),autoPlayPlaybackControls:{}}),a.editorialMediaFlavor=r,a.editorialMediaPlacement=n)
const m=Xl(0,w,c)
return i?{rtlVideo:a,rtlArtwork:c,rtlArtworkData:w,rtlBackgroundColor:u,rtlTextColorOverride:m}:{video:a,artwork:c,artworkData:w,backgroundColor:u,textColorOverride:m}}function Kl(e){switch(e){case gm.Hero:return 19
case gm.LargeBreakout:return 6
case gm.StoryCard:return 15
case gm.StoryDetail:case gm.StoryDetailLandscape:return 13
case gm.Search:return 9
default:return 0}}function Zl(e,t,n){switch(e){case gm.Hero:switch(t){case wm.HeroStatic16x9:if(!n)return"gd"
break
case wm.HeroStaticRTL16x9:if(n)return"gg"
break
case wm.StoryCenteredStatic16x9:return n?"gh":"ge"
case wm.UniversalAStatic16x9:return n?"gj":"gi"}break
case gm.LargeBreakout:switch(t){case wm.StoryCenteredStatic16x9:return n?"gk":"gf"
case wm.UniversalAStatic16x9:return n?"gl":"gm"}break
case gm.StoryCard:case gm.StoryDetail:case gm.StoryDetailLandscape:case gm.Search:if(t===wm.UniversalAStatic16x9)return"gn"}return"sr"}function Ql(e,t,n=!1){if((0,bg.isNothing)(t))return null
const r=n?t.rtlTextColorOverride:t.textColorOverride,o=n?t.rtlBackgroundColor:t.backgroundColor
return(0,bg.isSome)(r)?V(r,Kz):(0,bg.isSome)(o)?U(o):null}function Xl(e,t,n){const r=null==n?void 0:n.textColor
if((0,bg.isNothing)(r))return null
const o=l(t,"useCustomTextColor"),i=V(r,Jz)||V(r,Kz)
return o&&i?r:null}function eu(e,t){switch(t){case gm.Hero:case gm.StoryDetail:case gm.StoryDetailLandscape:return{prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1}
default:return{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0}}}function tu(e,t,n){switch(n){case vx:case mx:case HM:case VM:return ql(e,t,gm.EditorialLockup)
case"BrickSmall":case"BrickMedium":case"BrickLarge":return ql(e,t,gm.Brick)
case DD:case"StorySmall":return ql(e,t,gm.StoryCard)
case pk:return ql(e,t,gm.Hero)
case fk:return ql(e,t,gm.LargeBreakout)
default:return{}}}function nu(e,t,n){const r=function(e,t,n){const r=function(e,t){let n=null
switch(t.type){case _j:case aU:case UF:n=se(t,xD,!0)||se(t,gG,!0)||se(t,qj,!0)
break
default:n=null}return n}(0,t)
return o(r)?null:Iu(e,r,n)}(e,t,{lockupOptions:n})
return o(r)?null:r.map(e=>e.icon)}function ru(e,t,n){const r=Vt(e,t)
return o(r)?null:wu(e,r,n)}function ou(e,t,n,r,o){if((0,Ig.isNothing)(t)||0===t.length||r.has(t))return null
const i=new iz(tM)
return i.moduleType=eR,(0,Ig.isSome)(t)&&(i.labelText=t,mf(e,i,Sf(o,eR,i.labelText,lj))),r.add(t),[i]}function iu(e,t,n){return t===jG?n?Gj:cN:n?Z$:Oj}function su(e,t,n,s,a){var l,u,d,f,h,w,g,m,v,y,A
if(o(t))return
if(n.showMetadataInformationInLockup=e.bag.isLLMSearchTagsEnabled||e.client.isPad,!e.client.isPhone)return
const T=p(t,IU),S=null!==(u=null===(l=null==T?void 0:T.displayStyle)||void 0===l?void 0:l.metadataRibbon)&&void 0!==u?u:null===(d=null==s?void 0:s.displayStyle)||void 0===d?void 0:d.metadataRibbon
let P=[]
P=e.bag.isLLMSearchTagsEnabled?null!==(g=null!==(h=null===(f=null==T?void 0:T.displayStyle)||void 0===f?void 0:f.llmRibbon)&&void 0!==h?h:null===(w=null==T?void 0:T.displayStyle)||void 0===w?void 0:w.metadataRibbon)&&void 0!==g?g:null===(m=null==s?void 0:s.displayStyle)||void 0===m?void 0:m.metadataRibbon:null!==(y=null===(v=null==T?void 0:T.displayStyle)||void 0===v?void 0:v.metadataRibbon)&&void 0!==y?y:null===(A=null==s?void 0:s.displayStyle)||void 0===A?void 0:A.metadataRibbon
const b=function(e,t,n,s,a,c=D1){if(o(s))return[]
const l=[],u=new Set
for(const d of s)if(!o(d))for(const o of d){const s=c[o]
if(r(s))continue
const d=s(e,t,n,u,a.metricsOptions)
if(i(d)){l.push(...d)
break}}return l}(e,t,n,S,a),I=function(e,t,n,s,a,l=D1){if(o(s))return[]
const u=c(t.meta,"associations.tags.data"),d=[]
let f=0,h=0
const w=new Set
for(const c of s){const s=Array.isArray(c)?c:[c]
if(!o(s))for(const o of s){const s=o===kO
let c,g=t,m=""
if(o===eR){const n=p(t,IU);(0,Ig.isSome)(null==n?void 0:n.rankedSecondaryGenreShortDisplayNames)&&(m=null==n?void 0:n.rankedSecondaryGenreShortDisplayNames[h]),(0,Ig.isSome)(m)?(c=ou(e,m,0,w,a.metricsOptions),h+=1):c=[]}else{const i=l[o]
if(r(i))continue
g=s?u[f]:t,c=i(e,g,n,w,a.metricsOptions),f=s?f+1:f}if(i(c)){d.push(...c)
for(const e of c)(0,Ig.isSome)(e.impressionMetrics)&&uf(a.metricsOptions.locationTracker)
break}}}return d}(e,t,n,P,a)
n.metadataRibbonItems=b,n.searchTagRibbonItems=I,n.shouldEvenlyDistributeRibbonItems=!e.bag.isLLMSearchTagsEnabled}function au(e,t,n,r,o,i){t&&Pg.context("copyDataIntoLockup",()=>{var s,a,l,u,f
const p=Y(t,rj)
if(r.isContainedInPreorderExclusiveShelf&&!p)return null
const h=null!==(s=null==r?void 0:r.attributePlatformOverride)&&void 0!==s?s:De(e),w=Fe(e,t)
n.productVariantID=Be(w),r.metricsOptions.productVariantData=w,n.adamId=t.id
const g=Ce(e,t,nj,null==r?void 0:r.attributePlatformOverride)
n.bundleId=g,n.decorations=[]
let m=null
r&&r.clientIdentifierOverride&&(m=r.clientIdentifierOverride),n.icon=ju(e,t,{useCase:r.artworkUseCase,withJoeColorPlaceholder:r.useJoeColorIconPlaceholder,overrideTextColorKey:r.overrideArtworkTextColorKey},m,w,r.attributePlatformOverride),r&&r.titleObjectPath?n.title=Ce(e,t,r.titleObjectPath,null==r?void 0:r.attributePlatformOverride):n.title=q(t,Yj),n.useAdsLocale=r.metricsOptions.isAdvert&&(0,bg.isSome)(e.bag.adsOverrideLanguage)
const v=Rd(e,t,null==r?void 0:r.attributePlatformOverride)
v&&!r.shouldHideArcadeHeader&&(n.heading=r.metricsOptions.isAdvert?e.adsLoc.string(Wk):e.loc.string(Wk)),r.shouldShowFriendsPlayingShowcase&&n.decorations.push("showcaseFriendsPlaying")
const A=!v&&!p&&(null===(a=r.isMultilineTertiaryTitleAllowed)||void 0===a||a)
if(r.isSubtitleHidden||function(e,t,n){return Pg.context("isBadgeMultilineFromData",()=>{if(!n)return!1
if(!id(0,t,!1))return!1
if(pu(e,t))return!1
const r=Qu(e,t)
return ld(r,Lj)||ld(r,Bj)})}(e,t,A)||(n.subtitle=uu(e,t,r)),n.tertiaryTitle=du(e,t,A,r.hideCompatibilityBadge),n.tertiaryTitleAction=fu(e,t),n.tertiaryTitleArtwork=null,n.developerTagline=Ce(e,t,AG,null==r?void 0:r.attributePlatformOverride),n.editorialTagline=Dd(e,t,WB,!1,null==r?void 0:r.attributePlatformOverride),n.editorialDescription=Dd(e,t,Wj,!1,null==r?void 0:r.attributePlatformOverride),n.shortEditorialDescription=Dd(e,t,FB,!1,null==r?void 0:r.attributePlatformOverride),n.ageRating=q(t,xA),n.productDescription=Ce(e,t,HN,null==r?void 0:r.attributePlatformOverride),!Ts(e,t)&&(J(t,qk)>0||!r||!r.hideZeroRatings)){n.rating=J(t,zk)
const o=J(t,qk),i=r.metricsOptions.isAdvert?e.bag.adsOverrideLanguage:null
n.ratingCount=e.loc.formattedCountForPreferredLocale(e,o,i)}const T=Lf(e,t,r.metricsOptions,r.metricsClickOptions)
rf(e,T,n.title)
const S=At(e,t,null==r?void 0:r.attributePlatformOverride),P=null!==(l=null==r?void 0:r.includeBetaApps)&&void 0!==l&&l,b=Qd(e,t,n.icon,m),I=y(T),C=St(e,S,t,p,P,b,I,hj,null==r?void 0:r.referrerData),k=c(S,Yk)
let O=kt(e,C,t,p,I,hj,m,r.shouldNavigateToProductPage)
const E=Le(e,t,w,Lx,h),R=zr(0,t),D=!R||Jr(t),_=D&&(null==E?void 0:E.length)>0,L=(null===(u=null==r?void 0:r.externalDeepLinkUrl)||void 0===u?void 0:u.length)>0
if(_||L){const o=_?E:r.externalDeepLinkUrl
O=ct(e,O,C.adamId,g,o,P,I),(null===(f=r.crossLinkSubtitle)||void 0===f?void 0:f.length)>0&&(n.crossLinkTitle=e.loc.uppercased(q(t,Yj)),n.crossLinkSubtitle=r.crossLinkSubtitle)}n.buttonAction=O,n.includeBetaApps=P,n.developerName=q(t,EU),(0,bg.isNothing)(n.developerName)&&(n.developerName=q(t,MA)),n.children=cu(e,t,r),(0,bg.isSome)(i)&&i(),sf(r.metricsOptions.locationTracker)
const x=ps(e,t,m)
if(x){const t=new aW,r=y(T)
r.actionType=SM,r.targetType=ij,$f(e,t,r)
const o=new tz
o.shareAction=t,o.shareSheetData=x,n.contextMenuData=o}const M=null!=o?o:Mu(e,t)
let $=!1
M&&($=!(It(0,At(e,M))>0))
const F=iu(0,t.type,v)
n.offerDisplayProperties=r?Ut(e,C,F,t,p,r.isContainedInPreorderExclusiveShelf,r.offerStyle,r.offerEnvironment,k[0],$,hj,r.shouldNavigateToProductPage,r.metricsOptions.isAdvert,0,r.parentAppData):Ut(e,C,F,t,p,r.isContainedInPreorderExclusiveShelf,null,null,k[0],$,hj),r&&r.skipDefaultClickAction||(n.clickAction=Ru(e,t,T,{clientIdentifierOverride:m,productVariantData:w,isCppDeepLinkEligible:D})),r&&r.ordinal&&(n.ordinal=r.ordinal)
const N=be(e,t,xN,null==r?void 0:r.attributePlatformOverride)
if(N){const e=d(N,e_),t=e&&e===t_
n.isEditorsChoice=t}R||(n.flowPreviewActionsConfiguration=ws(e,t,!1,m,n.clickAction,r.metricsOptions,T,r.externalDeepLinkUrl,n.subtitle,n.title))
const B=Af(e,t,n,b,r.metricsOptions,r.canDisplayArcadeOfferButton)
gf(e,n,B)})}function cu(e,t,n){const r=re(t,zj)
return r?bu(e,r,{lockupOptions:n,filter:0}):null}function lu(e,t,n,r,s,a){var c
if(!t)return
if(s.isNetworkConstrained)return
const l=null!==(c=s.metricsOptions.isAdvert)&&void 0!==c&&c
Pg.context("copyMediaIntoMixedMediaLockup",()=>{n.screenshots=Yu(e,t,4,null,s.clientIdentifierOverride,null,l,a)
const c=n.screenshots[0]
n.trailers=[]
const u=Wu(e,t,r,s.metricsOptions,n.adamId,l,a)
i(u)&&(o(c)||u.mediaPlatform.isEqualTo(c.mediaPlatform))&&n.trailers.push(u)})}function uu(e,t,n=null){return(0,bg.isNothing)(t)?null:Pg.context("subtitleFromData",()=>{let r
return n&&n.subtitleObjectPath&&(r=Ce(e,t,n.subtitleObjectPath,null==n?void 0:n.attributePlatformOverride)),o(r)&&(r=Ce(e,t,AG,null==n?void 0:n.attributePlatformOverride)),r||hu(e,t,n)})}function du(e,t,n=!1,r){return Pg.context("badgeFromData",()=>{if(r)return null
const o=id(0,t,!1)
if(o){let r=""
const i=Qu(e,t)
if(ld(i,Lj)?r="Platform.DesignedForPad":ld(i,Bj)&&(r="Platform.DesignedForPhone"),(null==r?void 0:r.length)>0)return o&&(pu(e,t)||(r+=".NotVerified",n&&(r+=".Expanded"))),e.loc.string(r)}return null})}function fu(e,t){return Pg.context("badgeActionFromData",()=>{if(!id(0,t,!1))return null
if(pu(e,t))return null
const n=Qu(e,t)
if(!ld(n,Lj)&&!ld(n,Bj))return null
const r=new Bq(KG)
return r.pageUrl=`https://apps.apple.com/story/id${e.bag.appleSiliconMacUnverifiedBadgeEditorialItemId}`,r})}function pu(e,t){if(!e.appleSilicon.isSupportEnabled)return!0
const n=ke(e,t,FA,mj)
return!!i(n)&&n}function hu(e,t,n=null){return Pg.context("categoryFromData",()=>{const r=Ce(e,t,qB,null==n?void 0:n.attributePlatformOverride)
if((null==r?void 0:r.length)>0)return r
const o=se(t,Qk)
if(o.length>0){let e=o[0]
const t=6014..toString()
if(e.id===t)for(const n of o){const r=q(n,o_)
if(n.id!==t&&r===t){e=n
break}}return q(e,Yj)}{const e=W(t,Xk)
return e.length>0?e[0]:null}})}function wu(e,t,n){return Pg.context("lockupFromData",()=>{var r,i,s,a,c,l,u,f,p
if(!t)return Pg.unexpectedNull(SG,VB),null
const h=zr(0,t)
n.metricsOptions.isAdvert=h
const w=function(e,t){var n
if((0,Ig.isNothing)(t)||(0,Ig.isNothing)(e))return!1
const r=null===(n=cf(t))||void 0===n?void 0:n.id
if((0,Ig.isNothing)(r))return!1
const o=co(e,r)
return!(0,Ig.isNothing)(o)&&af(t)===o}(null===(i=null===(r=n.metricsOptions.pageInformation)||void 0===r?void 0:r.iAdInfo)||void 0===i?void 0:i.placementType,n.metricsOptions.locationTracker)
if(n.metricsOptions.isAdEligible=w,(h||w)&&(null===(a=null===(s=n.metricsOptions.pageInformation)||void 0===s?void 0:s.iAdInfo)||void 0===a||a.apply(e,t)),h&&(null===(l=null===(c=n.metricsOptions.pageInformation)||void 0===c?void 0:c.iAdInfo)||void 0===l||l.setTemplateType(bB)),!K(t))return null
switch(t.type){case jG:return n.offerEnvironment=NA,gu(e,t,n)
case Uj:const r=ie(e,t,Oj)
if(o(r))return null
const i=new nz
return au(e,r,i,n),i
case _U:case YU:return function(e,t,n){return Pg.context("appPromotionOfferLockupFromData",()=>{var r,o,i
const s=null!==(r=Mu(e,t))&&void 0!==r?r:n.parentAppData,a=Lu(e,t)
if(Y(s,OM)){const r=gu(e,t,n)
r.offerDisplayProperties.titles[Wj]=e.loc.string(BA),r.offerDisplayProperties.isStreamlinedBuy=!0,r.offerDisplayProperties.hasDiscount=!1
const o=H(a,Nj),i=_i(e,s,Nj),c=Nu(e,o,{useCase:n.artworkUseCase,withJoeColorPlaceholder:n.useJoeColorIconPlaceholder,style:vN,overrideTextColorKey:n.overrideArtworkTextColorKey})
return r.icon=null!=c?c:i,r}{const r=new nz
au(e,s,r,n)
const c=Lf(e,t,n.metricsOptions,n.metricsClickOptions)
rf(e,c,r.title)
const l=Ce(e,s,nj),u=q(a,lB),f=q(s,$A),p=new UH(u,s.id,l,r.buttonAction,f)
if(p.appTitle=null!==(o=q(s,Yj))&&void 0!==o?o:"",p.productTitle=null!==(i=q(a,Yj))&&void 0!==i?i:"",t.type===YU){const e=d(xu(a),Zk);(0,bg.isSome)(e)&&e.length>0&&(p.additionalBuyParams="adHocOfferId="+e)}else p.additionalBuyParams="contingentItemId="+t.id
return r.buttonAction=p,sf(n.metricsOptions.locationTracker),r}})}(e,t,n)
default:const s=new nz
return au(e,t,s,n),(0,bg.isSome)(null===(u=n.metricsOptions.pageInformation)||void 0===u?void 0:u.iAdInfo)&&((h||w)&&Yr(e,t,s,n.metricsOptions),h&&(e.props.enabled(XB)?null===(f=s.searchAdOpportunity)||void 0===f||f.setTemplateType(bB):null===(p=s.searchAd)||void 0===p||p.setTemplateType(bB))),s}})}function gu(e,t,n){return Pg.context("inAppPurchaseLockupFromData",()=>{const r=new cz
return function(e,t,n,r){t&&Pg.context("copyDataIntoInAppPurchaseLockup",()=>{var o
const i=null!==(o=Mu(e,t))&&void 0!==o?o:r.parentAppData,a=Y(i,OM),l=Lu(e,t)
au(e,t=l,n,r,i),n.productIdentifier=q(t,lB),n.parent=wu(e,i,r),n.description=q(t,HN),n.isVisibleByDefault=Y(t,"isMerchandisedVisibleByDefault"),n.isSubscription=Y(t,n_)
const u=At(e,t),f=c(u,Yk)
n.offerDisplayProperties.hasDiscount=f.length>0,n.offerDisplayProperties.subscriptionFamilyId=q(t,"subscriptionFamilyId")
const p=new Bq(Jk)
p.presentationContext=ZB
const h=function(e,t,n){const r=(new TJ).param(Aq.id,n).param(Tq,t).build()
return`${CW}:/${jW}/${LW}/?${r}`}(0,n.adamId,i.id)
p.pageUrl=h
const w=new jz
w.parentLockup=y(n.parent),w.lockup=y(n),w.preInstallOfferDescription=mi(e,u),p.pageData=w
const g=q(t,lB),m=Ce(e,i,nj),v=q(i,$A),A=s(xu(t)),T=Af(e,t,n,vN,r.metricsOptions,r.canDisplayArcadeOfferButton)
if(rf(e,T,n.title),a&&A){const o=new UH(g,i.id,m,n.parent.buttonAction)
n.parent&&(o.appTitle=n.parent.title),o.productTitle=n.title,o.streamlineBuyAction=function(e,t,n,r,o){var i
const a={...o.metricsOptions,id:n.id,targetId:n.id,idType:aj,actionDetails:{parentAdamId:n.id}},c=Qd(e,t,r.icon,o.clientIdentifierOverride),l=y(a),u=xu(t),f=At(e,t),p=At(e,n),h=new FY(d(p,PB))
let w=null!==(i=d(u,PB))&&void 0!==i?i:d(f,PB)
w+=`&appAdamId=${d(n,"id")}`,w+=`&appExtVrsId=${h.get(r_,"")}`,w+=`&bid=${Ce(e,n,nj)}`,w+="&bvrs=1.0",w+=`&offerName=${Ce(e,t,lB)}`
const g=d(u,Zk)
return s(g)&&(w+=`&adHocOfferId=${g}`),f[PB]=w,St(e,f,t,!1,!1,c,l,hj,null==o?void 0:o.referrerData,!1,n.id)}(e,t,i,n,r),n.buttonAction=o,n.subtitle=q(i,Yj)}else if(v){const t=new UH(g,i.id,m,p,v)
n.parent&&(t.appTitle=n.parent.title),t.productTitle=n.title
const o={...r.metricsOptions,id:n.adamId,idType:aj,actionDetails:{parentAdamId:i.id}}
$f(e,t,o),n.buttonAction=t}else{const t=new XH(hj)
t.title=e.loc.string("SEED_IN_APP_UNSUPPORTED_MESSAGE_OPTION_1"),t.message="",t.isCancelable=!0,n.buttonAction=t}if(sf(r.metricsOptions.locationTracker),!r||!r.skipDefaultClickAction){const r=ku(e,t,T)
n.clickAction=r,n.productAction=r}!function(e,t,n){t&&(t.impressionMetrics||gf(e,t,n),t.parent&&t.parent.adamId&&(0,Ig.isSome)(t.impressionMetrics)&&(t.impressionMetrics.fields.parentAdamId=zd(t.parent.adamId)))}(e,n,T)},Kk)}(e,t,r,n),r})}function mu(e,t,n){return Pg.context("screenshotsLockupFromData",()=>{const r=new rz
return function(e,t,n,r){t&&Pg.context("copyDataIntoScreenshotsLockup",()=>{au(e,t,n,r),n.screenshots=Yu(e,t,4,null,r.clientIdentifierOverride)})}(e,t,r,n),r})}function vu(e,t,n){return Pg.context("posterLockupFromData",()=>{const o=new Nz
return function(e,t,n,o){t&&Pg.context("copyDataIntoPosterLockup",()=>{au(e,t,n,o),n.epicHeading=function(e,t){const n=be(e,t,"editorialArtwork.epicHeading")
return i(n)&&i("bb")?Nu(e,n,{cropCode:"bb",useCase:0}):null}(e,t),n.posterArtwork=function(e,t){const n=be(e,t,"editorialArtwork.postCard")
return i(n)?Nu(e,n,{cropCode:"sr",useCase:0,withJoeColorPlaceholder:!0}):null}(e,t),n.posterVideo=function(e,t,n){const o=be(e,t,[dj,py]),s=Nu(e,be(e,t,[dj,py,kN]),{useCase:19,withJoeColorPlaceholder:!0,cropCode:"sr"})
if(i(o)){const e=d(o,ej)
return r(e)?null:new JV(e,s,{allowsAutoPlay:!0,looping:!0,canPlayFullScreen:!1,showPlaybackControls:!1,playbackControls:{prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1},autoPlayPlaybackControls:{prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1}})}return null}(e,t),n.offerDisplayProperties&&(n.offerDisplayProperties=n.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,cj,z$)),n.posterVideo?n.isDark=U(n.posterVideo.preview.backgroundColor):n.posterArtwork?n.isDark=U(n.posterArtwork.backgroundColor):n.isDark=!1
const s=Oe(e,t,ON)
if(Oe(e,t,rj)){const r=s?e.loc.string("Offer.Label.ComingSoon"):null
let o
o=e.loc.uppercased(Ud(e,t,r)),(0,bg.isSome)(o)&&(n.footerText=o)}})}(e,t,o,n),o})}function yu(e,t,n,r,o=null,i){return Pg.context("mixedMediaLockupFromData",()=>{const s=new oz
return au(e,t,s,n,null,()=>{su(e,t,s,o,n),lu(e,t,s,r,n,i),Tu(e,t,s,o)}),s})}function Au(e,t,n,r){const o=t.type===_j?ie(e,t,wG):t,i=wu(e,o,n),s=Re(e,o),a=tu(e,o,r),c=tu(e,t,r),l=null==a?void 0:a.artwork,u=null==c?void 0:c.artwork
let d,f
if((0,bg.isSome)(u),(0,bg.isSome)(l)&&(f=Ql(0,a),d=l),(0,bg.isSome)(d)&&(0,bg.isSome)(i)){const e=new uz(d,i,null,null,f)
return e.caption=me(o,s,MD),(0,bg.isSome)(e.caption),e.title=me(o,s,HB)||q(o,qB),e.impressionMetrics=i.impressionMetrics,e}return null}function Tu(e,t,n,r){var o
if(!e.client.isPhone)return
const s=d(t.meta,"imageLockupFromData")
i(s)?n.screenshotsDisplayStyle=s:i(null===(o=null==r?void 0:r.displayStyle)||void 0===o?void 0:o.screenshots)&&(n.screenshotsDisplayStyle=r.displayStyle.screenshots)}function Su(e,t,n,r,o,i=!0){return Pg.context("mixedMediaAdLockupFromData",()=>{const s=new oz
return Y(t,"iad.format.images")?(lu(e,t,s,r,n),function(e,t,n,r){if(!function(e,t){const n=function(e,t,n){const r=Fe(e,t)
return(0,bg.isNothing)(r)?null:He(r,n)}(e,t,XD)
return!n}(e,t))return
const o=W(t,"iad.assetOverride")
if(o.length){const e=function(e,t,n){const r=new Set(n),o=[],i=[],s=function(e,t){if(0===r.size)return!1
for(const o of n)if(o===t||-1!==e.indexOf(o))return r.delete(o),!0
return!1}
if(n.length&&(t.screenshots.length||t.trailers.length)){if(t.trailers.length)for(const e of t.trailers[0].videos)s(e.videoUrl,e.preview.checksum)&&o.push(e)
if(t.screenshots.length)for(const e of t.screenshots[0].artwork)s(e.template,e.checksum)&&i.push(e)}return!(0!==r.size||!o.length&&!i.length||(t.trailers.length&&(t.trailers[0].videos=o),t.screenshots.length&&(t.screenshots[0]=new kV(i,t.screenshots[0].mediaPlatform)),0))}(0,n,o)
r.pageInformation.iAdInfo&&r.pageInformation.iAdInfo.iAdIsPresent&&r.pageInformation.iAdInfo.setSpecifiedCreativeUsed(e)}}(e,t,s,n.metricsOptions),au(e,t,s,n,null,()=>{Tu(e,t,s,o),su(e,t,s,o,n)})):(au(e,t,s,n,null,()=>{su(e,t,s,o,n)}),s.screenshots=[]),Yr(e,t,s,n.metricsOptions,i),s})}function Pu(e,t,n,r,i,s){return Pg.context("arcadeLockupFromData",()=>{const a=t.marketingItemData,c=new lz
c.title=e.loc.string("ARCADE_LOCKUP_TITLE","Apple Arcade")
const l=t.marketingItemData
n={...n,mercuryMetricsData:Xd(0,l)}
let u,d=$a(0,a);(null==d?void 0:d.length)>0&&(d=d.replace(/\n/g," "),c.nonsubscribedSubtitle=d,c.subscribedSubtitle=d)
const f=Ma(0,a)
u=Na(e,t.marketingItemData,r,n),u.title=f,c.unsubscribedButtonAction=u
const p=jf(0,n.pageInformation,n.locationTracker)
p.title=e.loc.string(Q$,X$),c.subscribedButtonAction=p
const h=Tf(e,t.marketingItemData,c.title,n)
h.displaysArcadeUpsell=!0,o(h.targetType)&&(h.targetType=ij),gf(e,c,h)
const w=new PV(Gj,e.bag.arcadeAppAdamId,i,null,s,null,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId)
return w.titles[xx]=e.loc.string(Q$,X$),c.offerDisplayProperties=w,c})}function bu(e,t,n){return r(t)?[]:Iu(e,t.data,n)}function Iu(e,t,n){return Pg.context("lockupsFromData",()=>{if(!t)return[]
const o=[]
let s=!1
for(let a=0;a<t.length&&!s;a++){const c=t[a]
if(!K(c)){n.contentUnavailable&&(s=n.contentUnavailable(a,c))
continue}const l=n.lockupOptions
let u=80894
if(n.includeOrdinals){const r=n.ordinalDirection===UA?t.length-a:a+1
l.ordinal=e.loc.decimal(r).toString()}if(i(n.filter)&&(u=n.filter),tt(e,c,u)&&!n.shouldShowOnUnsupportedPlatform)continue
const d=wu(e,c,l)
!r(d)&&d.isValid()&&(o.push(d),uf(n.lockupOptions.metricsOptions.locationTracker))}return o})}function Cu(e,t,n,r,s=null,a){return Pg.context(`actionFromData: ${t.type}`,()=>{switch(t.type){case zj:case xj:return Ru(e,t,n,{clientIdentifierOverride:r,externalDeepLinkUrl:s,isCppDeepLinkEligible:a})
case jG:return ku(e,t,n)
case _j:return Eu(e,t,n,r)
case aU:return function(e,t,n){return t?Pg.context("editorialPageActionFromData",()=>{const r=t.href
if(o(r))return Pg.unexpectedNull(SG,vj,Mx),null
const i=new Bq(Jj)
return i.pageUrl=r,i.title=_d(e,t,Yj),o(i.title)&&(i.title=q(t,Yj)),$f(e,i,n),i}):null}(e,t,n)
case i_:return function(e,t,n){return t?Pg.context("msoActionFromPlatformData",()=>{const r=q(t,Sj)
if(!r)return Pg.unexpectedNull(SG,vj,Sj),null
const o=new Bq(bx)
return o.pageUrl=r,o.title=q(t,Yj),$f(e,o,n),o}):null}(e,t,n)
case RU:return function(e,t,n){return t?Pg.context("groupingActionFromData",()=>{if(!t.href)return Pg.unexpectedNull(SG,vj,Mx),null
const r=new Bq(Jj)
return r.pageUrl=qe(e,function(e,t){const n=[wj,dj,eG,sG,yG,UB]
e.appleSilicon.isSupportEnabled&&n.push(CG)
const r=new zz(e,t).includingAttributes(n).includingMacOSCompatibleIOSAppsWhenSupported()
Oi(e)&&(r.enablingFeature(VG),r.includingScopedAttributes(Uj,[yj,zU,DU]),r.includingScopedRelationships(Uj,[Oj]),r.includingScopedRelationships(Qv,[Uj]))
const o=R(e)
return i(o)&&r.addingQuery(zN,o),r}(e,t.href)).toString(),r.title=Du(0,t),$f(e,r,n),r}):null}(e,t,n)
default:return function(e,t,n){return t?Pg.context("genericActionFromData",()=>{const r=d(t,PU),o=q(t,Sj)
if(!o)return Pg.unexpectedNull(SG,vj,Sj),null
const i=new Bq(Jj)
return i.pageUrl=o,i.title=r===RU?Du(0,t):q(t,Yj),$f(e,i,n),i}):null}(e,t,n)}})}function ku(e,t,n){return Pg.context("iAPActionFromData",()=>{var r
const o=Mu(e,t)
if(!o)return null
const s=new Bq(JU),a=xq.from(q(o,Sj)),c=Be(null!==(r=n.productVariantData)&&void 0!==r?r:Fe(e,o))
i(c)&&a.param(Aq.productVariantID,c)
const l=a.toString(),u=q(t,lB),d=Y(t,n_)
return s.pageUrl=function(e,t,n,r){const o=(new TJ).param(Sq,t).param(Aq.offerName,n).param(Pq,r.toString()).build()
return`${CW}:/${jW}/${_W}/?${o}`}(0,l,u,d),s.title=q(t,Yj),$f(e,s,n),s})}function Ou(e,t){return o(t)?0:Pg.context(GA,()=>{if(function(e){const t=d(e,ox)
return t&&t===dD}(H(t,pj)))return 1
const e=q(t,jA),n="List"===e||"NumberedList"===e
if(Y(t,L$)||n)return 2
const r=se(t,wG),o=se(t,gG),i=s(r)&&1===r.length,a=s(o)&&1===o.length
return a&&o[0].type===Uj||i&&r[0].type===Uj?4:a?3:0})}function Eu(e,t,n,a,c,l){return o(t)?null:Pg.context(GA,()=>{var u
let f,p
switch(Ou(0,t)){case 1:return function(e,t,n){return Pg.context("editorialItemExternalLinkActionFromData",()=>{const r=d(H(t,pj),Sj),o=new xH(r),i=Dd(e,t,FB)
if(i)o.title=i
else{const e=new xq(r)
o.title=e.host}return $f(e,o,n),o})}(e,t,n)
case 2:f=KG
const h=xq.from(q(t,Sj))
i(c)&&h.param(Aq.recoMetrics,JSON.stringify(c)),(0,bg.isSome)(l)&&!l.isHorizontalShelfContext&&h.param(Aq.todayCardConfig,JSON.stringify(l))
const w=null===(u=Zt(t))||void 0===u?void 0:u.id;(0,bg.isSome)(w)&&h.param(Aq.editorialCardId,w),p=h.build()
break
case 3:const g=se(t,gG)[0]
return Cu(e,g,n,a)
case 4:const m=se(t,wG),v=s(m)&&1===m.length?m[0]:se(t,gG)[0],y=ie(e,v,Oj)
if(o(y))return null
const A=Bi(e,v,y,!1,!1,kj,lG,!1,!1,n,!1,!0,null,!1,!1)
return r(A)||A instanceof Date?null:$i(e,v,y,A,n,!0)
case 5:f=Jj,p=fa(e,t.href)
break
default:f=Mj,p=d(H(t,pj),Sj)}if((0,bg.isNothing)(p))return null
const h=new Bq(f)
h.pageUrl=p
let w=Dd(e,t,Yj)
return r(w)&&(w=d(t,GG)),h.title=w,$f(e,h,n),h})}function Ru(e,t,n,r){var o,s,a,c
if(!t)return null
const l=null!==(o=r.clientIdentifierOverride)&&void 0!==o?o:null,u=null!==(s=r.externalDeepLinkUrl)&&void 0!==s?s:null,f=!(null!==(a=r.isCppDeepLinkEligible)&&void 0!==a&&a),p=null!==(c=r.productVariantData)&&void 0!==c?c:Fe(e,t)
return Pg.context("productActionFromData",()=>{var r,o,s
let a=q(t,Sj)
if(!a)return Pg.unexpectedNull(SG,vj,Sj),null
let c={}
const h=new xq(a)
if(n.isAdvert){const o=d(t,VA)
null!==o&&o.length>0&&h.param(uX,o)
const i=null===(r=n.pageInformation.iAdInfo)||void 0===r?void 0:r.clickFields
h.param(lX,JSON.stringify(i)),c={iAdClickFields:m(i),iAdLineItem:o}
const s=uo(0,t)
if((0,bg.isSome)(s)){const r=Rd(e,t)?Z$:ZD,o=no(0,n.pageInformation),i=q(t,QD),a=Y(t,rj)?BU:Wj,l=new JY(s,t.id,i,r,"productPageDismissed",a,o)
h.param(dX,JSON.stringify(l)),c.iAdDismissAdActionMetrics=m(l)}}const w=Be(p)
i(w)&&h.param(Aq.productVariantID,w),c.externalDeepLinkUrl=u,i(u)&&h.param(SJ,u),c.isCppDeepLinkDisabled=f,h.param(PJ,f.toString()),c.clientIdentifierOverride=l,(null==l?void 0:l.length)>0&&h.param(HA,l)
const g=null===(s=null===(o=n.pageInformation)||void 0===o?void 0:o.searchTermContext)||void 0===s?void 0:s.term;(0,bg.isSome)(g)&&h.param(OG,g),a=h.toString()
const v=new Bq(JU)
v.pageUrl=a,v.pageData=Hl(e,t,c),v.title=q(t,Yj),n&&n.pageInformation&&(v.referrerUrl=n.pageInformation.pageUrl)
const y=Y(t,rj)
return $f(e,v,y?{...n,offerType:BU,offerReleaseDate:bt(0,t)}:n,!0),v})}function Du(e,t){const n=W(t,Xk)
return s(n)?n[0]:q(t,Yj)}function _u(e,t){if(!t)return!1
if(e.client.isCompanionVisionApp)return!0
const n=function(e,t,n){return Ce(e,t,id(0,t,n)?CG:sG)}(e,t,e.appleSilicon.isSupportEnabled)
if(o(n))return!0
const r=n.split(" ")
return e.client.deviceHasCapabilitiesIncludingCompatibilityCheckIsVisionOSCompatibleIOSApp(r,!1)}function Lu(e,t){if(!t)return null
switch(t.type){case _U:return ie(e,t,bF)
case YU:return ie(e,t,CF)}return t}function xu(e){if(!e)return null
const t=p(e,mM)
if(s(t))return t
const n=p(e,VR)
return s(n)?n:null}function Mu(e,t){if(!t)return null
switch(t.type){case _U:return ie(e,t,QL)
case YU:const n=ie(e,t,CF)
return ie(e,n,Oj)}return ie(e,t,Oj)}function $u(e,t){t.bag.arcadeDownloadPacksMetricsEventsEnabled||(e.clickAction.actionMetrics.clearAll(),e.buttonAction.actionMetrics.clearAll(),e.buttonAction instanceof GH&&e.buttonAction.defaultAction.actionMetrics.clearAll()),t.bag.arcadeDownloadPacksImpressionEventsEnabled||(e.impressionMetrics=null)}function Fu(e,t){switch(t){case F$:case ZC:case gj:return 1
case cG:return 2
case N$:return 3
default:return 0}}function Nu(e,t,n){return Pg.context("artworkFromApiArtwork",()=>{var o
const s=!!i(n.allowingTransparency)&&n.allowingTransparency,a=!!i(n.withJoeColorPlaceholder)&&n.withJoeColorPlaceholder,c=d(t,Sj)
if(r(c))return null
const u=l(t,"hasP3"),p=[ae(e,s,u,n.useCase)]
let h
if(l(t,"supportsLayeredImage"),s)h=G(B$)
else if(a){const e=F(d(t,qN))
r(e)||(h=e)}r(h)&&(h=G(QC))
const w=null!==(o=n.overrideTextColorKey)&&void 0!==o?o:XC,g=F(d(t,w)),m=new CV(c,n.overrideWidth||f(t,CN),n.overrideHeight||f(t,JN),p)
return m.backgroundColor=h,m.checksum=d(t,ek),i(g)&&(m.textColor=g),i(n.style)&&(m.style=n.style),i(n.cropCode)&&(m.crop=n.cropCode),i(n.contentMode)&&(m.contentMode=n.contentMode),m})}function Bu(e,t,n,r){return Pg.context(ny,()=>{const o=ju(e,t,r)
if(!i(o))return null
const s=new Wq(o),a=q(t,Yj),c=Tf(e,t,a,n)
return gf(e,s,c),s})}function Uu(e,t,n,r){return Pg.context(ny,()=>{const i=[]
o(n.targetType)&&(n.targetType=Nj)
for(const o of t){const t=Bu(e,o,n,r)
t&&(i.push(t),uf(n.locationTracker))}return i})}function Gu(e,t,n,r){const i=be(e,t,"editorialArtwork.searchCategoryBrick")
if(o(i))return null
let s=r
n===mm.seeAllPage&&(s=Hg.Density1)
let a=[],c=[]
switch(s){case Hg.Density1:const e=n===mm.categoryBreakout?"1191":"2350"
i[CN]=e,i[JN]=SD,a=["SCB.ApSCBL01","SCB.ApSCBL03"],c=[Cg.right,Cg.left]
break
case Hg.Density2:i[CN]="2482",i[JN]=SD,a=["SCB.ApSCBS01","SCB.ApSCBS02"],c=[Cg.left,Cg.right]
break
case Hg.Density3:i[CN]=SD,i[JN]=SD,a=["cc"],c=[Cg.scaleAspectFit]}return a.map((t,n)=>Nu(e,i,{cropCode:t,contentMode:n<c.length?c[n]:null,useCase:0,withJoeColorPlaceholder:!0}))}function ju(e,t,n,o,s,a){return Pg.context("iconFromData",()=>{if(!t)return Pg.unexpectedNull(SG,VB),null
const c=t.type,l=null!=a?a:Vu(e,t,o),u=o||e.host.clientIdentifier,d=we(t,l,tk)
if((u===tH||"VisionAppStore"===u||Oe(e,t,VN))&&i(d))return Nu(e,d,{...n,style:wx,withJoeColorPlaceholder:!0})
const f=kd(e,t),p=Id(e,t)&&(u===nH||f),h=we(t,l,nk)
if(p&&i(h))return Nu(e,h,{...n,style:FM})
let w
return c===jG?(w=H(t,Nj),Nu(e,w,{...n,style:vN})):c===xj?(w=H(t,Nj),Nu(e,w,{...n,style:IF,allowingTransparency:!0})):(r(s)&&(s=Fe(e,t)),w=function(e,t,n,r){return _e(e,t,r,Nj,n)}(e,t,l,s),Nu(e,w,l===jB||o===oH?{...n,style:PD}:l===QU||"VisionAppStore"===u?{...n,style:wx}:l===aG?{...n,style:NM,allowingTransparency:!0}:{...n,style:IF}))})}function Vu(e,t,n){switch(n){case tH:case nH:return mj
case oH:return jB
case"VisionAppStore":return QU
default:return Re(e,t,n)}}function Hu(e,t,n,r){if(!t)return null
const o=function(e){switch(e){case Bj:return fG
case Lj:return hG
case"tv":return"tv"
case Vj:return Bm
case jj:return"macbook"
case LG:return CL
case Tj:return"visionpro"
default:ue(e)}}(t),i=Md(0,n),s=function(e,t){switch(t){case ik:return 13/X1.width
case ok:return 11/e2.width
case rk:return 5.5/t2.width
case ID:return h2/n2.width
case bD:return h2/r2.width
default:return null}}(0,n),a=function(e,t){switch(t){case ik:return 30/X1.width
case ID:return p2/n2.width
case bD:return p2/r2.width
default:return Md(0,t)}}(0,n)
return new OV(t,n,o,r,i,s,a)}function Wu(e,t,n,r,o,i=!1,s){const a=qu(e,t,n,null,null,i,s)
if(!a)return null
const c=a.videos,l=[]
if(c&&c.length>0)for(const t of c)Ao(e,t,{...r,id:o}),l.push(t)
let u=null
return l.length>0&&(u=new az,u.videos=l,u.mediaPlatform=a.mediaPlatform),u}function qu(e,t,n,o=null,s=null,a=!1,l){return Pg.context("platformVideoPreviewFromData",()=>{r(s)&&(s=Fe(e,t))
const u=function(e,t,n,r,o){return _e(e,t,n,r?dk:uB,void 0)}(e,t,s,a),h={}
if(!u)return null
let w=Zu(e,t,e.host.clientIdentifier,e.client.deviceType)
if(i(o)){const e=[]
for(const t of w)o.includes(t)&&e.push(t)
w=e}if(0===w.length)return null
for(const t of w){const r=hd(e,t,e.client.screenSize)
for(const t of Object.keys(u)){const r=c(u,t),o=[]
for(const s of r){const r=p(s,kN)
if(!r){Pg.unexpectedNull(SG,RF,`videoPreviewsByType.${t}.previewFrame`)
continue}const a=d(s,ej)
if(!a){Pg.unexpectedNull(SG,vj,`videoPreviewsByType.${t}.video`)
continue}const c=ce(e,d(r,Sj),f(r,CN),f(r,JN),null,null,d(r,ek))
i(l)&&(c.crop=l),o.push(new JV(a,c,n))}h[t]=o}for(const e of r)if(h[e])return new L1(h[e],Hu(0,t,e))}return null})}function zu(e,t){return Pg.context("videoPreviewsFromApiPlatformData",()=>{const n=qu(e,t,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}})
return n?n.videos:[]})}function Yu(e,t,n,o=null,i,s,a=!1,c){return Pg.context("screenshotsFromData",()=>{const l=[]
r(s)&&(s=Fe(e,t))
let u=o
if(!u||0===u.length){const n=i||e.host.clientIdentifier
let r=e.client.deviceType
n===tH&&(r=Vj),"VisionAppStore"!==i&&"com.apple.visionproapp"!==i||(r=Tj),u=Zu(e,t,n,r)}for(const r of u){const o=[]
let i
if(r===LG?(i=Od(e,t,mj),Cd(e,t,mj)&&o.push("faceTime")):i="tv"===r?Ed(e,t,s,a,jB):r===Tj?Ed(e,t,s,a,QU):r===jj?Ed(e,t,s,a,aG):Ed(e,t,s,a),!i)continue
const u=Ku(e,i,r,n,o,c)
u&&l.push(u)}return l})}function Ju(e,t,n,r=null,o=null,i){return function(e,t,n){const r=[]
if(n&&n.length>0){const o=n.map(e=>e.mediaPlatform)
for(const i of n){const n=[]
for(const e of i.artwork){const t=new Kq
t.screenshot=e,n.push(t)}const s=i.mediaPlatform,a=new Zq(n,s,o,rd(e,s),ed(e,t,o),td(e,t,o))
r.push(a)}}return r}(e,t,Yu(e,t,n,r,i,o))}function Ku(e,t,n,r,o,i){const a=function(e,t){return t===LG?e.client.deviceType===Lj?Lj:Bj:t}(e,n),l=hd(e,a,e.client.screenSize)
let u,d=null
for(let e=0;e<l.length&&!s(d);e++)d=c(t,l[e]),u=l[e]
if(s(d)){const t=d.map(function(t){return Nu(e,t,{useCase:r,cropCode:i})}),s=Hu(0,n,u,o)
return new kV(t,s)}return null}function Zu(e,t,n,r){return de(t,`sortedAppPlatformsFromData.${n}.${r}`,()=>{const o=Qu(e,t),i=[]
let s=[]
const a=function(e,t){-1===s.indexOf(e)&&-1===i.indexOf(e)&&-1!==o.indexOf(e)&&(s.push(e),t&&i.push(t))}
switch("VisionAppStore"!==n&&"com.apple.visionproapp"!==n||a(Tj),n){case tH:a(Vj)
break
case nH:a(LG)}switch(r){case Bj:a(Bj)
break
case Lj:a(Lj)
break
case"tv":a("tv")
break
case Vj:a(Vj)
break
case jj:a(jj)
break
case Tj:a(Tj)}return"VisionAppStore"!==n&&"com.apple.visionproapp"!==n||(a(Lj),a(Bj)),e.appleSilicon.isSupportEnabled?(a(Lj),a(Bj)):(a(Bj),a(Lj)),a(jj),a(Tj),a("tv"),a(Vj),a(LG),s=s.filter(function(e){return-1===i.indexOf(e)}),s})}function Qu(e,t){return t?de(t,"supportedAppPlatformsFromData",()=>Xu(e,t,!0)):null}function Xu(e,t,n){if(!t)return null
const r=Id(e,t,mj),o=kd(e,t),i=function(e,t){return Oe(e,t,eG)}(e,t)
let s=W(t,dB)
if(t.type===xj&&n){const e=W(t,"unionDeviceFamilies")
e.length>0&&(s=e)}const a=[]
let c=!1
for(const e of s)switch(e){case fG:o||a.push(Bj)
break
case hG:o||a.push(Lj)
break
case xF:a.push("tv")
break
case Vj:a.push(Vj),c=!0
break
case tU:a.push(Tj)
break
case jj:a.push(jj)}return r&&a.push(LG),!c&&i&&a.push(Vj),a}function ed(e,t,n){if(nd(e,t,n)){const t=n[0].appPlatform.toUpperCase()
return e.loc.string(`ONLY_FOR_${t}_APP`)}let r=n.reduce((e,t)=>e.concat(od(t)),[])
try{return e.loc.tryString(`PLATFORMS_${r.join("_")}`)}catch(t){return r=["PHONE","PAD","MAC","VISION","TV","WATCH","MESSAGES","FACETIME"].filter(e=>r.includes(e)),e.loc.string(`PLATFORMS_${r.join("_")}`)}}function td(e,t,n){return nd(e,t,n)?"top":"bottom"}function nd(e,t,n){if(1===n.length){const r=n[0],o=id(0,t,e.appleSilicon.isSupportEnabled),i=!1,s=ld(cd(0,e.client.deviceType,o,i),r.appPlatform),a=0===r.supplementaryAppPlatforms.length,c=r.appPlatform!==e.client.deviceType
if(a&&c&&!s)return!0}return!1}function rd(e,t){const n=od(t)
return e.loc.string(`PLATFORMS_${n.join("_")}`)}function od(e){const t=e.appPlatform.toUpperCase(),n=e.supplementaryAppPlatforms.map(e=>e.toUpperCase())
return[t].concat(n)}function id(e,t,n){return n&&Y(t,ev)}function sd(e,t){let n
return e.isAvailable(sV)&&[KN,MF].includes(e.client.buildType)&&(0,bg.isSome)(e.ads.fetchAppBinaryTraitsOverride)&&(n=e.ads.fetchAppBinaryTraitsOverride()),(0,bg.isNothing)(n)&&(n=ge(t,mj,ry)),n}function ad(e,t,n){if(id(0,t,n)){const n=Ce(e,t,"minimumMacOSVersion")
if(s(n))return n}return me(t,Re(e,t),yG)}function cd(e,t,n,r){switch(t){case Bj:return[Bj,LG]
case Lj:return[Bj,Lj,LG]
case"tv":return["tv"]
case Vj:return[Vj]
case jj:return n?[jj,Bj,Lj]:[jj]
case Tj:return r?[Tj,Bj,Lj]:[Tj]
default:return[]}}function ld(e,t){return-1!==e.indexOf(t)}function ud(e,t,n,r,o,i,s=!0){const a=function(e,t,n,r,o){let i
switch(n){case Bj:return i=et(e),(0,bg.isSome)(t)&&i.isSystemAppFromData(t)?[Bj,Vj,LG]:[Bj,Vj,LG,"tv",Tj]
case Lj:return i=et(e),(0,bg.isSome)(t)&&i.isSystemAppFromData(t)?[Bj,Lj,LG]:[Bj,Lj,LG,"tv",Tj]
case"tv":return["tv"]
case Vj:return[Vj]
case jj:return r?[jj,Bj,Lj]:[jj]
case Tj:return o?[Tj,Bj,Lj]:[Tj]
default:return[]}}(e,t,r,o,i)
return!!a.some(e=>ld(n,e))}function dd(e,t){var n
const o=new _1
if(e.client.deviceType!==jj)return o
if(t.type!==xj)return o.runsOnIntel=null===(n=ke(e,t,"runsOnIntel",De(e)))||void 0===n||n,o.runsOnAppleSilicon=Oe(e,t,"runsOnAppleSilicon",De(e)),o.requiresRosetta=Oe(e,t,oy,De(e)),o
const i=se(t,zj)
if(0===i.length)return o
for(const t of i){if(r(t.attributes))continue
const n=dd(e,t)
o.runsOnIntel=o.runsOnIntel||n.runsOnIntel,o.runsOnAppleSilicon=o.runsOnAppleSilicon||n.runsOnAppleSilicon,o.requiresRosetta=o.requiresRosetta||n.requiresRosetta}return o}function fd(e,t,n,r){const o=dd(e,t)
return n?o.runsOnAppleSilicon&&(!o.requiresRosetta||o.requiresRosetta&&r):o.runsOnIntel}function pd(e,t,n,r,o){const i=function(e,t,n,r){switch(t){case Bj:return[Bj,Vj,LG]
case Lj:return[Bj,Lj,LG]
case"tv":return["tv"]
case Vj:return[Vj]
case jj:return n?[jj,Bj,Lj]:[jj]
case Tj:return r?[Tj,Bj,Lj]:[Tj]
default:return[]}}(0,n,r,o)
return i.some(e=>ld(t,e))}function hd(e,t,n){switch(t){case jj:return[jj]
case Vj:return[bD,ID,rk,ok,ik]
case"tv":return["appleTV"]
case Tj:return["appleVisionPro"]
case Lj:{const t=[]
return(n.isEqualTo(W1)||n.isEqualTo(q1)||n.isEqualTo(J1)||n.isEqualTo(K1))&&e.client.screenCornerRadius>0?(t.push($F),t.push(FF),t.push(U$),t.push(G$),t.push(hG)):n.isEqualTo(H1)?(t.push(U$),t.push($F),t.push(FF),t.push(G$),t.push(hG)):n.isEqualTo(j1)||n.isEqualTo(V1)||n.isEqualTo(z1)||n.isEqualTo(Y1)||n.isEqualTo(Z1)||n.isEqualTo(Q1)?(t.push(FF),t.push($F),t.push(U$),t.push(G$),t.push(hG)):n.isEqualTo(G1)?(t.push(G$),t.push(hG),t.push(FF),t.push(U$),t.push($F)):n.isEqualTo(o2)?(t.push(FF),t.push(U$),t.push($F),t.push(G$),t.push(hG)):n.isEqualTo(U1)?(t.push(hG),t.push(G$),t.push(FF),t.push(U$),t.push($F)):(t.push($F),t.push(FF),t.push(hG),t.push(G$),t.push(U$)),t}case Bj:{let e
e=n.isEqualTo(x1)||n.isEqualTo(a2)?sk:n.isEqualTo(M1)||n.isEqualTo(i2)||n.isEqualTo(s2)?CD:n.isEqualTo(B1)?fG:n.isEqualTo(N1)?iy:n.isEqualTo(F1)?sy:n.isEqualTo($1)?ay:n.isEqualTo(c2)||n.isEqualTo(u2)?ak:n.isEqualTo(l2)||n.isEqualTo(d2)?ck:CD
const t=f2.indexOf(e),r=f2.slice(0,t)
r.reverse()
const o=f2.slice(t+1)
return[e].concat(r,o)}default:return[]}}function wd(e,t){if(r(t))return null
const n=be(e,t,Jv),o=be(e,t,Kv),i=id(0,t,!0)
if(Te(e,t,jj)&&!i){const i=e.bag.enableProductPageInstallSize?function(e,t){const n=we(t,aG,Zv)
if((0,bg.isNothing)(n))return null
const r=n[dy]
return(0,bg.isNothing)(r)?null:f(r)}(0,t):function(e,t){const n=At(e,t)
if(r(n))return null
const o=c(n,"assets")
if(!o.length)return null
for(const e of o)if(d(e,"flavor")===OT)return f(e,O_)
return null}(e,t)
if(s(o)){const e=f(o,cy)
return new KV(i,null,null,e)}if(s(n)){const e=f(n,ly),t=f(n,uy)
return new KV(i,e,t,null)}return new KV(i,null,null,null)}{const r=H(t,zv)
if(r){let t=[]
e.client.thinnedApplicationVariantIdentifier&&(t=e.client.thinnedApplicationVariantIdentifier.split(" ")),t=t.concat([e.host.deviceModel,"universal"])
for(const e of t){const t=f(r[e])
if(t){if(s(o)){const e=f(o,cy)
return new KV(t,null,null,e)}if(s(n)){const e=f(n,ly),r=f(n,uy)
return new KV(t,e,r,null)}return new KV(t,null,null,null)}}}}return null}function gd(e,t,n){let r,s=null,a=null,c=null,l=null
switch(e.client.deviceType){case jj:n.supportsArcade?(s=lk,c="sr"):(s="editorialArtwork.centeredFullscreenBackground",c="ep")
break
case"tv":n.presentedInTopShelf?(s=uk,c="sr"):(s=lk,c="ta",a="editorialArtwork.fullscreenBackground",l="sr")
break
case Tj:s="editorialArtwork.productUberStatic16x9",c="sr"
break
default:n.supportsArcade?n.prefersCompactVariant||e.client.isPhone?(s="editorialArtwork.splashTall",c="oc"):(s=lk,c="oh"):(s=kD,c="sr")}return r=be(e,t,s),null!==a&&o(r)&&(r=be(e,t,a),null!==l&&(c=l)),i(r)&&i(c)?Nu(e,r,{cropCode:c,useCase:21,withJoeColorPlaceholder:!0,overrideHeight:null,overrideWidth:null}):null}function md(e,t,n,o,a){let c=[]
if(s(o))c=o
else switch(e.client.deviceType){case jj:case"tv":c=[BM]
break
case Lj:c=[OD]
break
case Tj:c=["productUberMotion16x9"]
break
default:c=[UM]}let l=null,u=null
for(const n of c)if(l=be(e,t,[dj,n]),u=be(e,t,[dj,n,kN]),s(l))break
const f=null!=a?a:Nu(e,u,{useCase:n,withJoeColorPlaceholder:!0,cropCode:"sr"})
if(i(l)){const e=d(l,ej)
if(r(e))return null
let t,n
return t={prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},n={muteUnmute:!0},new JV(e,f,{allowsAutoPlay:!0,looping:!0,canPlayFullScreen:!1,showPlaybackControls:!1,playbackControls:t,autoPlayPlaybackControls:n})}return null}function vd(e,t,n){let r=null
switch(e.client.deviceType){case jj:case"tv":case Bj:case Tj:r=[BM,OD,UM]
break
default:r=[OD,BM,UM]}return md(e,t,21,r,n)}function yd(e,t){return i(t)?`${CW}:/${WW}/${tq}?${Aq.href}=${t.href}`:null}function Ad(e,t,n){return qe(e,new zz(e).forType(MM).addingQuery(LF,zj).addingQuery(TG,n).addingQuery(vG,t).includingMacOSCompatibleIOSAppsWhenSupported(!0)).toString()}function Td(e,t){switch(t){case eH:case iH:return"appStore"
case tH:return Vj
case nH:return LG
case oH:return ED
default:return null}}function Sd(e,t){switch(t){case 6:return["L","AgeRatingL"]
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
case 32:return e.props.isNotEnabled(hy)?["18+",wy]:["R 18+",wy]
case 47:return["18+","AgeRating-FR-18"]
default:return}}function Pd(e,t){var n
return null===(n=Sd(e,t))||void 0===n?void 0:n[1]}function bd(e,t){var n
return null===(n=Sd(e,t))||void 0===n?void 0:n[0]}function Id(e,t,n){return Oe(e,t,"hasMessagesExtension",n)}function Cd(e,t,n){return Oe(e,t,hD,n)}function kd(e,t){return Oe(e,t,"isHiddenFromSpringboard")}function Od(e,t,n){return be(e,t,pD,n)}function Ed(e,t,n,r,o){return _e(e,t,n,r?HL:kB,o)}function Rd(e,t,n){return Oe(e,t,ON,n)}function Dd(e,t,n,r=!1,o){var i,s
if((0,bg.isNothing)(t))return null
let a
if(r){const r=Zt(t)
K(r)&&(a=Ce(e,r,[xU,n],o))}return a=null!==(s=null!==(i=null!=a?a:Ce(e,t,[$$,n],o))&&void 0!==i?i:Ce(e,t,[xU,n],o))&&void 0!==s?s:Ce(e,t,["itunesNotes",n],o),a}function _d(e,t,n,r=!1){var o
let i
if(r){const r=Zt(t)
K(r)&&(i=Ce(e,r,[xU,n]))}return i=null!==(o=null!=i?i:Ce(e,t,[$$,n]))&&void 0!==o?o:Ce(e,t,[xU,n]),i}function Ld(e,t){return de(t,"isMacOSInstaller",()=>!1)}function xd(e,t){const n=et(e)
return!(!function(e,t,n){if(n&&et(e).isSystemAppFromData(t)){const e=q(t,"watchBundleId")
if(s(e))switch(e){case"com.apple.mobilemail.watchkitapp":case"com.apple.news.watchkitapp":case"com.apple.iBooks.watchkitapp":return!0
default:return!1}}return!1}(e,t,e.client.isTinkerWatch)&&(!e.client.isTinkerWatch||(n.isSystemAppFromData(t)?Oe(e,t,XI)||Oe(e,t,VN):Oe(e,t,QI)||Oe(e,t,VN))))}function Md(e,t){switch(t){case $F:return 18/W1.width
case FF:return 18/j1.width
case sk:return 41.5/x1.width
case CD:return 39/M1.width
case ak:return 55/c2.width
case ck:return 55/l2.width
case ok:return 34/e2.width
case rk:return 55/t2.width
case ID:return 108/n2.width
case bD:return 108/r2.width
default:return null}}function $d(e,t){if(r(t)||0===t.length)return!0
const n=t.split("."),o=f(n[0])||0,i=f(n[1])||0,s=f(n[2])||0
return e.host.isOSAtLeast(o,i,s)}function Fd(e,t){return!r(t)&&0!==t.length&&e.client.isActivePairedWatchSystemVersionBelow(t)}function Nd(e,t){switch(t){case gj:case cG:case GM:case jM:case gx:case IN:case RD:return!0
default:return!1}}function Bd(e,t){switch(t){case"LockupSmall":case"LockupLarge":case fk:case pk:case mx:case VM:case vx:case HM:case DD:return!0
default:return!1}}function Ud(e,t,n){const r=At(e,t)
if(d(r,PU)===BU){const n=d(r,NF),o=Ce(e,t,UB)
if(s(o)){if(s(n)){const t=Ye(n),r={"@@expectedDateMY@@":e.loc.string("PreOrder.Date.MonthYear"),"@@expectedDateMDY@@":e.loc.string("PreOrder.Date.MonthDayYear")}
for(const[n,i]of Object.entries(r))if(o.includes(n)){let r=e.loc.formatDateWithContext(i,t,"middleOfSentence")
return o.replace(n,r)}}return o}}return n}function Gd(e,t){const n=ie(e,t,wG)
return s(n)?n:Oe(e,t,L$)?ie(e,t,gG):null}function jd(e,t,n=!0){return Pg.context("isSupportedOnCurrentPlatform",()=>{if(t.type!==zj&&t.type!==xj)return!0
const r=Xu(e,t,n),o=id(0,t,e.appleSilicon.isSupportEnabled)
return ud(e,t,r,e.client.deviceType,o,!1)})}function Vd(e,t){let n=t.targetType
return n||(n=ij),n}function Hd(e){let t=e.idType
return t===XG?t=null:t||(t=aj),t}function Wd(e,t){return Rd(e,t)?oj:null}function qd(e,t,n){const r=d(t,PU),o=Ae(e,t,jj,!0),i=Te(e,t,jj,!0),s=function(e,t,n,r=!1){const o=new Set(Pe(e,t,r))
for(const e of n)if(o.has(e))return!0
return!1}(e,t,[fG,hG,$M,xF,Vj],!0),a=Se(e,t,[fG,hG,$M,xF,Vj],!0),c=Ae(e,t,tU,!0),l=Te(e,t,tU,!0)
if(i||o&&n===aG)switch(r){case zj:return OT
case xj:return"macSoftwareBundle"}if((l||c&&n===QU)&&r===zj)return"visionSoftware"
if(a||s||s&&n===mj||s&&n===Vj||s&&n===jB)switch(r){case zj:return ET
case xj:return"mobileSoftwareBundle"}switch(r){case jG:return"softwareAddOn"
case RU:return J$
case LD:case _j:return uN
case SU:return RT
default:return null}}function zd(e){return null==e?"":e}function Yd(e){if(!e)return null
let t=null
const n=new xq(e).query
if((0,Ig.isSome)(n))for(const e of Object.keys(n))if("referrer"===e){n[e]===mk&&(t="com.apple.siri")
break}return t}function Jd(e){var t
return(0,Ig.isNothing)(e)?{}:null!==(t=h(Kd(m(e))))&&void 0!==t?t:{}}function Kd(e){if(r(e))return null
if(e instanceof Array){const t=[]
for(const n of e){const e=Kd(n)
i(e)&&t.push(e)}return t}if(e instanceof Object){const t={}
return Object.keys(e).forEach((n,r,o)=>{const s=Kd(e[n])
i(s)&&(t[n]=s)}),t}return e}function Zd(e){if(!e)return null
const t=new xq(e),n=t.query,o=null==n?void 0:n[gN],i=t.pathname
return r(o)||r(i)?null:i.endsWith("/search")?o:null}function Qd(e,t,n,r){if(!t||!n)return Mj
if(t.type===xj)return HI
const o=n.style
if((0,Ig.isNothing)(o))return Mj
switch(o){case IF:return mj
case NM:return jj
case PD:return"tv"
case wx:return Vu(e,t,null!=r?r:void 0)===QU?Tj:Vj
case FM:return LG
case vN:return vN
default:return ue(o),Mj}}function Xd(e,t){if(!i(t))return null
const n={},r=p(t,LO)
if(!s(r))return null
const o=d(r,LT);(0,Ig.isSome)(o)&&(null==o?void 0:o.length)>0&&(n[LT]=o)
const a=d(r,xT);(0,Ig.isSome)(a)&&(null==a?void 0:a.length)>0&&(n[xT]=a)
const c=d(r,MT)
return(0,Ig.isSome)(c)&&(null==c?void 0:c.length)>0&&(n[MT]=c),n.marketing={marketingItemId:t.id},n}function ef(e,t,n){let o=null
return i(e)&&(o=y(e)),i(t)&&(r(o)&&(o={}),o.odpModuleUpdate=t.toString()),s(n)&&(r(o)&&(o={}),o.userSegment=n),o}function tf(e,t,n){const r=pf(t.locationTracker)
return[df(0,t,n),...r]}function nf(e,t,n){const r=pf(t.locationTracker)
return[ff(0,t,n),...r]}function rf(e,t,n){const r=new w2
r.location=df(0,t,n),t.locationTracker.locationStack.unshift(r)}function of(e,t,n){const r=new w2
r.location=ff(0,t,n),t.locationTracker.locationStack.unshift(r)}function sf(e){0!==e.locationStack.length?e.locationStack.shift():Pg.unexpectedType(SG,"non-empty location stack","empty location stack")}function af(e){const t=hf(e)
return t?t.position:e.rootPosition}function cf(e){const t=hf(e)
return t?t.location:null}function lf(e,t){const n=hf(e)
n?n.position=t:e.rootPosition=t}function uf(e){const t=hf(e)
t?t.position++:e.rootPosition++}function df(e,t,n){var r
const o=ff(0,t,n)
if(!t.id&&t.locationTracker)o.idType=fj,o.id=af(t.locationTracker).toString()
else{const e=Hd(t);(0,bg.isSome)(e)&&(o.idType=e)
let n=t.id;(null===(r=t.anonymizationOptions)||void 0===r?void 0:r.anonymizationString)&&(n=t.anonymizationOptions.anonymizationString),o.id=(0,bg.isNothing)(n)?"":n}return t.fcKind&&(o.fcKind=t.fcKind),t.displayStyle&&(o.displayStyle=t.displayStyle),t.inAppEventId&&(o.inAppEventId=t.inAppEventId),t.relatedSubjectIds&&(o.relatedSubjectIds=t.relatedSubjectIds),t.canonicalId&&(o.canonicalId=t.canonicalId),t.optimizationEntityId&&(o.optimizationEntityId=t.optimizationEntityId),t.optimizationId&&(o.optimizationId=t.optimizationId),(0,bg.isSome)(t.rowIndex)&&(o.rowIndex=t.rowIndex),t.productVariantData&&Object.assign(o,Ve(t.productVariantData)),o}function ff(e,t,n){var r,o
let i=n;(null===(r=t.anonymizationOptions)||void 0===r?void 0:r.anonymizationString)&&(i=t.anonymizationOptions.anonymizationString)
const s={locationPosition:af(t.locationTracker),locationType:Vd(0,t),name:(0,bg.isNothing)(i)?"":i}
return(0,bg.isSome)(t.badges)&&(s.badges=null!==(o=m(t.badges))&&void 0!==o?o:void 0),t.recoMetricsData&&Object.assign(s,t.recoMetricsData),s}function pf(e){return e.locationStack.map(e=>e.location)}function hf(e){return 0===e.locationStack.length?null:e.locationStack[0]}function wf(e,t){var n,r,a
let c=t.id,l=t.title
if(s(t.anonymizationOptions)){const e=null!==(r=null===(n=t.anonymizationOptions)||void 0===n?void 0:n.anonymizationString)&&void 0!==r?r:"ANONYMOUS"
c=e,l=e}else c&&t.createUniqueImpressionId&&(c=`${c}${g2}${random.nextUUID()}`)
const u={id:zd(c),name:zd(l),impressionType:Vd(0,t)},d=Hd(t)
if((0,Ig.isSome)(d)&&(u[g_]=d),t&&t.kind&&(u[tG]=t.kind),t&&t.softwareType&&(u[l$]=t.softwareType),t&&t.recoMetricsData&&Object.assign(u,t.recoMetricsData),t&&t.mercuryMetricsData&&Object.assign(u,t.mercuryMetricsData),t&&t.lockupDisplayStyle&&(u[p_]=t.lockupDisplayStyle),t&&t.locationTracker){const e=af(t.locationTracker)
u.impressionIndex=e,""===u.id&&(u.id=e.toString(),u[g_]=fj)}return t&&t.modelSource&&(u.modelSource=t.modelSource),i(t.offerType)&&(u[Ux]=t.offerType),t&&i(t.displaysArcadeUpsell)&&(u[pT]=t.displaysArcadeUpsell),t&&i(t.isPreorder)&&(u[rj]=t.isPreorder),i(t.adamId)&&o(t.anonymizationOptions)&&(u[jU]=t.adamId),t&&i(t.badges)&&(u.badges=t.badges),t&&i(t.inAppEventId)&&(u[ZL]=t.inAppEventId),t&&i(t.relatedSubjectIds)&&(u.relatedSubjectIds=t.relatedSubjectIds),(null===(a=null==t?void 0:t.hintsEntity)||void 0===a?void 0:a.length)&&(u[w_]=t.hintsEntity),t&&i(t.autoAdvanceInterval)&&(u.autoAdvanceInterval=t.autoAdvanceInterval),i(null==t?void 0:t.fcKind)&&(u.fcKind=t.fcKind),i(null==t?void 0:t.canonicalId)&&(u[zM]=t.canonicalId),i(null==t?void 0:t.displayStyle)&&(u[iG]=t.displayStyle),i(t.productVariantData)&&Object.assign(u,Ve(t.productVariantData)),""===u.id&&e.console.log(`impressionId missing. Tracking broken for ${u.name} of ${u.impressionType}`),u}function gf(e,t,n){t&&(t.impressionMetrics=new EH(wf(e,n)))}function mf(e,t,n){var r
t&&(gf(e,t,n),(n.isAdvert||n.isAdEligible)&&(null===(r=n.pageInformation)||void 0===r?void 0:r.iAdInfo)&&t.impressionMetrics&&(t.impressionMetrics=new RH(t.impressionMetrics,!0)))}function vf(e,t,n,r,o,i,s=!0){var a,c,l,u,d,f
if(!t)return
const p=wf(e,n)
if(s?(p[hT]=zd(r),p[c_]=zd(o)):(r&&(p[hT]=r),o&&(p[c_]=o)),i&&(p[wT]=i),(null!==(c=null===(a=null==n?void 0:n.optimizationEntityId)||void 0===a?void 0:a.length)&&void 0!==c?c:0)>0&&(p[gT]=n.optimizationEntityId),(null!==(u=null===(l=null==n?void 0:n.optimizationId)||void 0===l?void 0:l.length)&&void 0!==u?u:0)>0&&(p[mT]=n.optimizationId),(0,Ig.isSome)(null==n?void 0:n.rowIndex)&&(p.rowIndex=n.rowIndex),t.impressionMetrics=new EH(p),(n.isAdvert||n.isAdEligible)&&(null===(d=n.pageInformation)||void 0===d?void 0:d.iAdInfo)){const e=Jd(n.pageInformation.iAdInfo.fastImpressionsFieldsForCurrentItem(n.locationTracker,n.adSlotOverride))
Object.assign(t.impressionMetrics.fields,e),t.impressionMetrics=new RH(t.impressionMetrics,!0),n.isAdvert&&(null===(f=t.impressionMetrics)||void 0===f||delete f.fields[c_])}}function yf(e,t,n,r){if(!t||!r)return
gf(e,t,n)
const o=Jd(r.fastImpressionsFieldsForCurrentItem(n.locationTracker,n.adSlotOverride))
if((0,Ig.isSome)(t.impressionMetrics)){Object.assign(t.impressionMetrics.fields,o)
const e=l(n.disableFastImpressionsForAds)
t.impressionMetrics=new RH(t.impressionMetrics,!e)}(0,Ig.isSome)(t.impressionMetrics)&&(t.impressionMetrics.fields[o_]=m_)}function Af(e,t,n,r,a,c,l){const u=Tf(e,t,n.title,a)
u.lockupDisplayStyle=r,o(u.targetType)&&(u.targetType=ij),c&&Rd(e,t)&&(u.displaysArcadeUpsell=!0)
const d=a.id
return s(xu(t))&&i(d)&&d.length>0&&(u.id=d),u}function Tf(e,t,n,r,o){return Pg.context("impressionOptions",()=>{const i=qd(e,t),s=Wd(e,t),a={...r,kind:i,softwareType:s,title:n,id:t.id}
return Oe(e,t,rj,o)&&(a.offerType=BU),a})}function Sf(e,t,n,r){return Pg.context("impressionOptionsForMetadataRibbonItem",()=>({...e,id:t,kind:null,softwareType:null,title:n,idType:r,targetType:kO}))}function Pf(e,t,n){var r,o,i,s
const a=wf(e,(r=t.term,o=n,i=t.entity,s=t.source,Pg.context("impressionOptionsForSearchHint",()=>({...o,id:"",kind:null,softwareType:null,title:r,hintsEntity:i,modelSource:s}))))
t.impressionMetrics=new EH(a)}function bf(e){const t=c(e,VU)
for(const e of t){const t=d(e,"id");(0,Ig.isNothing)(t)||(e.id=If(t))}}function If(e){return e.includes(g2)?e.split(g2)[0]:e}function Cf(e,t){var n
const r=null!==(n=t.excludingFields)&&void 0!==n?n:[]
return r.push("amsMetricsID"),new IH(t.fields,t.includingFields,r,t.topic,t.shouldFlush)}function kf(e,t,n,r,o,i){const s={}
Object.assign(s,r),s[zB]=WF,s[eO]=n,s[WA]=t
const a=["impressionsSnapshot",qF]
return o&&a.push(...o),_f(e,s),Cf(0,new IH(s,a,[],Df(0,s),Rf(e,s,null,i)))}function Of(e,t,n,r,o,i,s){const a={}
Object.assign(a,i),a[gN]=t,a[eO]=n,a[TF]=r,o&&(a[n$]=o),a[zB]=sj
const c=[s_]
return s&&c.push(...s),_f(e,a),Cf(0,new IH(a,c,[],Df(0,a),Rf(e,a)))}function Ef(e,t,n,r,o){const i={}
Object.assign(i,t),i[zB]=VU,i[r$]="data-metrics",i[o$]=4
const s=[VU,qF,s_]
return n&&s.push(a_),r&&s.push(i$),o&&s.push("impressionsAppendix"),_f(e,i),Cf(0,new IH(i,s,[o$],Df(0,i),Rf(e,i)))}function Rf(e,t,n=null,r){var o,i
const a=t[zB]
let c=!1
if(!s(a))return c
const u=null!=r&&r
switch(a){case WF:c=l(t,m2.hasIAdData)||u
break
case oO:c=!0
break
case VU:c=l(t,m2.hasIAdData),t[r$]!==nO||(null===(o=null==n?void 0:n.iAdInfo)||void 0===o?void 0:o.placementType)!==WG&&(null===(i=null==n?void 0:n.iAdInfo)||void 0===i?void 0:i.placementType)!==bG||(c=!0)
break
case Jj:c=e.host.clientIdentifier===iH&&(l(t,m2.hasIAdData)||u)}return e.host.clientIdentifier,c}function Df(e,t){return t[kM]||bH}function _f(e,t){e.bag.isMetricsAb2DataFallbackEnabled&&(0,Ig.isSome)(e.experimentCache)&&(t.alt_ab2_data=JSON.stringify(e.experimentCache.createAb2Data()))}function Lf(e,t,n,i){return Pg.context("clickOptionsForLockup",()=>{const s=t.id.slice()
let a=t.id
void 0!==n.anonymizationOptions&&n.anonymizationOptions.anonymizationString.length>0&&(a=n.anonymizationOptions.anonymizationString)
const c={...n,...i,id:a,contextualAdamId:s,softwareType:Wd(e,t)}
return o(c.targetType)&&(c.targetType=ij),r(c.kind)&&(c.kind=qd(e,t)),z(t,rj)&&(c.offerType=BU),c})}function xf(e,t,n,r,o,a,c,l,u){var d,f,p,h,w
const g={}
if(o){const e=o
c&&(null!==(p=null===(f=null===(d=e.iAdInfo)||void 0===d?void 0:d.iAdAdamId)||void 0===f?void 0:f.length)&&void 0!==p?p:0)>0&&(0,bg.isSome)(e.iAdInfo)&&e.iAdInfo.iAdAdamId===t.adamId&&Object.assign(g,e.iAdInfo.clickFields),s(e.searchTermContext)&&(g[OG]=e.searchTermContext.term)}(0,bg.isSome)(l)&&Object.assign(g,l),g[XN]={buyParams:t.purchaseConfiguration.buyParams},void 0!==a&&(g[E$]=a),g[NY]=t.adamId,t.actionMetrics.custom[NY]=t.adamId,r&&(g[Ux]=BU,i(t.expectedReleaseDate)&&(g[vO]=Je(t.expectedReleaseDate)))
const m=kf(e,n,Hj,g,void 0,u)
g[NY]=t.adamId,t.actionMetrics.custom[NY]=t.adamId,m.includingFields.push("appState"),t.purchaseConfiguration.isArcadeApp&&m.includingFields.push(aT)
const v=null!==(w=null===(h=null==o?void 0:o.iAdInfo)||void 0===h?void 0:h.shouldIncludeAdRotationFields)&&void 0!==w&&w
c&&v&&m.includingFields.push(i$),c&&e.client.isPad&&m.includingFields.push(a_),t.actionMetrics.addMetricsData(m)}function Mf(e,t,n){var r
$f(e,t,{...n,actionType:yO,subscriptionSKU:null!==(r=e.bag.arcadeProductId)&&void 0!==r?r:void 0,actionContext:oj,targetType:Hj})}function $f(e,t,n,r=!1,o){var s,a,c,l,u,d,f
let p=n.actionType
p||(p=Fj)
const h={actionType:p}
let w
w=t instanceof MH?t.actions:[t],w.forEach(e=>{if(e instanceof Bq){const t=e
h[n$]=t.pageUrl}else if(e instanceof xH){const t=e
h[n$]=t.url}}),n.actionDetails&&(h[XN]=n.actionDetails),n.actionContext&&(h[cT]=n.actionContext),i(n.offerType)&&(h[Ux]=n.offerType),i(n.offerReleaseDate)&&(h[vO]=Je(n.offerReleaseDate))
const g=null!==(c=null!==(a=null===(s=n.anonymizationOptions)||void 0===s?void 0:s.anonymizationString)&&void 0!==a?a:null==t?void 0:t.title)&&void 0!==c?c:""
let m
h[E$]=tf(0,n,g),n.pageInformation&&n.pageInformation.searchTermContext&&(h[OG]=n.pageInformation.searchTermContext.term),i(n.softwareType)&&(h[l$]=n.softwareType),(n.isAdvert||n.isAdEligible)&&r&&(null===(l=n.pageInformation)||void 0===l?void 0:l.iAdInfo)&&(Object.assign(h,n.pageInformation.iAdInfo.clickFields),e.client.isPad&&(m=[a_])),n.mercuryMetricsData&&Object.assign(h,n.mercuryMetricsData),(0,bg.isSome)(n.subjectIds)&&(h.subjectIds=n.subjectIds)
const v=kf(e,n.id,null!=o?o:Vd(0,n),h,m)
n.actionContext===oj&&(n.actionType===rx||n.actionType===yO)&&(v.includingFields.push(aT),v.fields[NY]=n.contextualAdamId,(0,bg.isSome)(t.adamId)&&(t.actionMetrics.custom[NY]=t.adamId))
const y=null!==(f=null===(d=null===(u=n.pageInformation)||void 0===u?void 0:u.iAdInfo)||void 0===d?void 0:d.shouldIncludeAdRotationFields)&&void 0!==f&&f
n.isAdvert&&y&&v.includingFields.push(i$),t.actionMetrics.addMetricsData(v)}function Ff(e,t,n,r){const o={}
i(n)&&(o[n$]=n),r.targetType||(r.targetType=Hj),o[E$]=nf(0,r,t.title),o[TF]=Fj,o[ox]="button_See All"
const s=kf(e,AO,Hj,o)
t.actionMetrics.addMetricsData(s)}function Nf(e,t,n){const r={}
r[TF]="filter"
const o=kf(e,`filter_${n}`,Hj,r)
o.includingFields.push(lT),t.actionMetrics.addMetricsData(o)}function Bf(e,t,n,r,o){var i,a,c,l
const u=function(e){switch(e){case rF:return rF
case QM:return QM
case SO:return"recentQuery"
case s$:return PO
case bO:return"searchInsteadFor"
case IO:return fT
case CO:return CO
default:return"submit"}}(t.origin);(0,bg.isNothing)(o)&&(o=new pX({page:dU,pageType:dU,pageId:dU,pageDetails:uT}))
const d={pageInformation:o,locationTracker:r,targetType:n},f={...wt(o),actionType:u,actionUrl:zd(t.url),location:nf(0,d,t.term),searchTerm:t.term},p={targetId:t.term},h={};(null===(i=t.prefixTerm)||void 0===i?void 0:i.length)&&(h[Gx]=t.prefixTerm),(null===(a=t.entity)||void 0===a?void 0:a.length)&&(h[w_]=t.entity),s(h)&&(p[XN]=h),(null===(c=t.originatingTerm)||void 0===c?void 0:c.length)&&(f[TO]=t.originatingTerm,p[TO]=t.originatingTerm)
const w=kf(e,t.term,n,f,[dT])
t.actionMetrics.addMetricsData(w)
const g=Of(e,t.term,n,u,null!==(l=t.url)&&void 0!==l?l:null,p,[dT])
t.actionMetrics.addMetricsData(g)}function Uf(e,t=fN,n,r,o,i,s,a=Hj){const c=xq.fromComponents(CW,null,`/${$W}`,{sort:t}),l=new Bq(kF,c.build())
return l.title=null!=o?o:e.loc.string(cD),$f(e,l,{id:null!=i?i:Tv,idType:s,targetType:a,actionType:Fj,actionContext:oj,pageInformation:n,locationTracker:r}),l}function Gf(e,t,n,r,o){var s,a,c,l
const u=new kY(Gj,t,n)
u.purchaseSuccessAction=r,u.carrierLinkSuccessAction=r
const d=new Bq(IB);(0,Ig.isSome)(null===(a=null===(s=null==o?void 0:o.pageInformation)||void 0===s?void 0:s.searchTermContext)||void 0===a?void 0:a.term)&&(u.metricsOverlay[OG]=null===(c=o.pageInformation.searchTermContext)||void 0===c?void 0:c.term)
const f=null===(l=e.metricsIdentifiersCache)||void 0===l?void 0:l.getMetricsFieldsForTypes([Dg.user,Dg.client])
return(0,Ig.isSome)(f)&&(u.metricsOverlay={...u.metricsOverlay,...f}),d.pageData=u,i(o)&&Mf(e,d,o),d}function jf(e,t,n,r){{const e=new _H(Gj)
return i(r)&&(e.popToRoot=r),new MH([e])}}function Vf(e,t,n,r){const o=e.loc.uppercased(e.loc.string("GAME_CENTER"))
let i
i=ce(e,"resource://GameCenterEyebrow",16,16)
const s={includeSeparator:!e.featureFlags.isEnabled(OF),prefersShelfHeader:e.featureFlags.isEnabled("game_center_shelf_header")}
return(0,Ig.isSome)(r)&&r?{title:t,titleArtwork:i,titleArtworkType:Ug.Icon,subtitle:n,configuration:s}:{eyebrow:o,eyebrowArtwork:i,eyebrowArtworkType:Ug.Icon,title:t,subtitle:n,configuration:s}}function Hf(e,t=!1){let n=new zz(e).forType(LU)
return t&&(n=n.addingQuery(tx,AC)),n}function Wf(e,t){return Hf(e).withSparseLimit(t).asPartialResponseLimitedToFields([Nj]).usingCustomAttributes($e(e))}function qf(e,t,n){return function(e,t,n){o(t)&&(t=lN)
const r=new zz(e).forType(IB).addingQuery("serviceType",Gj).addingQuery("placement",t).includingMetaKeys(TU,[CB]).includingRelationships([qj]).includingAttributes([Sv,TC])
return i(n)&&r.addingQuery(Pv,n),r}(e,t,n)}function zf(e,t){let n=null
const s=re(t,bv)||re(t,TU)
if(o(s)||o(s.data))return null
const a=s.data.map(e=>e.type===TU?e:null).filter(e=>i(e))
if(o(a))return null
const c=e.bag.marketingItemSelectionTimeout
if(1===a.length||0===c)n=a[0]
else try{n=e.arcade.getMarketingItemWithTimeout(a,c)}catch{n=a[0]}return r(n)?null:{marketingItemData:n}}function Yf(e,t){if(!t)return null
let n=null
const r=c(t,oC)
return r.length>0&&(n=r[0]),i(n)?{marketingItemData:n}:null}function Jf(e,t,n){switch(n){case GU:return A2.has(t)
case JM:return v2.has(t)
case t$:return y2.has(t)
default:return!1}}function Kf(e,t,n,o,s,a){const c=new kJ(o.metricsPageInformation,o.metricsLocationTracker)
null==a&&((a={useOTDTextStyle:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,isHeroCard:!1}).isHorizontalShelfContext=!0),e.client.deviceType!==Vj&&(a.coercedCollectionTodayCardDisplayStyle=tm.Grid)
const l=Zi(t,a.coercedCollectionTodayCardDisplayStyle)
if(a.prevailingCropCode=function(e,t,n){switch(t){case GU:return null
case JM:return"el"
case t$:return n===tm.Video?"sr":"ek"
default:return null}}(0,n,l),a.horizontalCardContentType=n,!i(t.attributes))return s&&s(t),null
const u=zi(e,t,a,c,o.augmentingData)
if(r(u))return null
{u.collapsedHeading=ss(0,u),u.inlineDescription=Qf(e,u,t),u.inlineDescription===u.collapsedHeading&&(u.inlineDescription=null)
const n=u.media
n&&n.kind===iB&&(u.title=null)}if(n===t$){const e=u.heroMedia
if(!i(e)||0===e.artworks.length&&0===e.videos.length)return null}return Jf(0,u.media.kind,n)&&i(o.filterOutMediaCardKinds)&&o.filterOutMediaCardKinds.has(u.media.kind)?null:(function(e,t,n){if("tv"!==e.client.deviceType||!Y(n,iR))return
const r=new xH("com.apple.Arcade://")
t.clickAction=r}(e,u,t),u)}function Zf(e,t,n,r,s,a,c){if(!i(n))return null
const l=new $z(n)
return r&&(l.title=r),l.subtitle=s,l.isHorizontal=!0,l.items=n===HF?[Xf(e,t,a.metricsPageInformation,a.metricsLocationTracker,()=>!0,c)]:function(e,t,n,r,i,s){const a=[]
for(const s of t){const t=Kf(e,s,n,r,i,void 0)
o(t)||(a.push(t),uf(r.metricsLocationTracker))}return a}(e,t,n,a,c),l}function Qf(e,t,n){{let r=_d(e,n,Yj)
return i(r)&&(r=r.replace(/\n/g," ")),t.media.kind===iB&&t.overlay instanceof pY&&i(t.overlay.lockup)?t.overlay.lockup.title:r}}function Xf(e,t,n,o,s,a){return Pg.context("todayCardsFromPlatformData",()=>{if(!t)return null
const c={useOTDTextStyle:!1,enableFullScreenVideo:!1,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,isHeroCard:!1}
c.coercedCollectionTodayCardDisplayStyle=tm.Grid,c.prevailingCropCode="fo",c.isHorizontalShelfContext=!0
const l=new kJ(n,o),u=[]
for(const n of t){if(!i(n.attributes)){a&&a(n)
continue}const t=zi(e,n,c,l)
if(!r(t)&&s(t)){t.collapsedHeading=ss(0,t),t.inlineDescription=Qf(e,t,n),t.inlineDescription===t.collapsedHeading&&(t.inlineDescription=null)
const r=t.media
r&&r.kind===iB&&(t.title=null),u.push(t)}}return u.length?new AY(u):null})}function ep(e){return e.props.enabled("shelfBackgroundDarkOverlay")?{type:"darkOverlay"}:{type:NU,color:{type:eU,red:0,green:0,blue:0,alpha:.2}}}function tp(e,t,n,r){return o(t.remainingItems)?null:`${CW}:/${jW}/${RW}/`+np(t,n,r)}function np(e,t,n){return e.sourceSequenceId=t.getSequenceId(),e.sourcePageInformation=t.metricsPageInformation,e.sourceLocationTracker=t.locationTracker,e.destinationPageInformation=n,encodeURIComponent(JSON.stringify(e))}function rp(e,t,n,r,o,i,s,a,c){return op(e,t.data,n,r,o,i,s,a,c)}function op(e,t,n,i,s,a,c,l,u){if(o(t))return null
const d=[]
return{items:Iu(e,t,{shouldShowOnUnsupportedPlatform:null!=u&&u,lockupOptions:{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,recoMetricsData:l},artworkUseCase:i,canDisplayArcadeOfferButton:Nd(0,s),...r(a)?{}:{offerStyle:a}},shouldConsiderDataPastLastAvailable:!0,contentUnavailable:(e,t)=>(d.push(t),!1),filter:c}),remainingItems:d}}function ip(e,t,n){if(!n)return
let r=-1,o=null
n.forEach((e,n)=>{const i=e,s=i,a=i&&i.adamId===t,c=s&&s.productIdentifier===t;(a||c)&&(r=n,o=i,s&&(s.theme="spotlight",s.offerDisplayProperties=s.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,OB,"ad",{type:$R})))}),-1!==r&&(n.splice(r,1),n.splice(0,0,o))}function sp(e){if(-1===I2.indexOf(e.media.kind))return!1
const t=e.clickAction
if(!t)return!0
const n=t.pageUrl
if(!n)return!0
const r=new xq(n),o=ap()
for(const e of o)if(new $q(e).matches(r))return!1
return!0}function ap(){return[{protocol:kW,path:`/{countryCode}/${jW}/{appName}/{id}`,query:[`${Aq.action}?`,`${Aq.offerName}?`,`${Aq.isPPT}?`,`${Aq.appEventId}?-caseInsensitive`,`${Aq.offerItemId}?`,`${Aq.isPreloading}?`,`${Aq.isViewOnly}?`,`${Aq.includeUnlistedApps}?`,`${Aq.webBrowser}?`]},{protocol:kW,path:`/{countryCode}/${HW}/{appName}/{id}`,query:[`${Aq.action}?`,`${Aq.offerName}?`,`${Aq.isPreloading}?`,`${Aq.isViewOnly}?`,`${Aq.includeUnlistedApps}?`]},{protocol:kW,path:`/{countryCode}/${jW}/{id}`,query:[`${Aq.action}?`,`${Aq.offerName}?`,`${Aq.appEventId}?-caseInsensitive`,`${Aq.offerItemId}?`,`${Aq.isPreloading}?`,`${Aq.isViewOnly}?`,`${Aq.includeUnlistedApps}?`,`${Aq.webBrowser}?`]},{protocol:kW,path:`/{countryCode}/${HW}/{id}`,query:[`${Aq.action}?`,`${Aq.offerName}?`,`${Aq.isPreloading}?`,`${Aq.isViewOnly}?`,`${Aq.includeUnlistedApps}?`]},{protocol:kW,path:`/${jW}/{appName}/{id}`,query:[`${Aq.action}?`,`${Aq.offerName}?`,`${Aq.appEventId}?-caseInsensitive`,`${Aq.offerItemId}?`,`${Aq.isPreloading}?`,`${Aq.isViewOnly}?`,`${Aq.includeUnlistedApps}?`,`${Aq.webBrowser}?`]},{protocol:kW,path:`/${HW}/{appName}/{id}`,query:[`${Aq.action}?`,`${Aq.offerName}?`,`${Aq.isPreloading}?`,`${Aq.isViewOnly}?`,`${Aq.includeUnlistedApps}?`]},{protocol:kW,path:`/${jW}/{id}`,query:[`${Aq.action}?`,`${Aq.offerName}?`,`${Aq.appEventId}?-caseInsensitive`,`${Aq.offerItemId}?`,`${Aq.isPreloading}?`,`${Aq.isViewOnly}?`,`${Aq.includeUnlistedApps}?`,`${Aq.webBrowser}?`]},{protocol:kW,path:`/${jW}/{id}`,query:[`${Aq.v0}?`,`${Aq.metrics}?`,`${Aq.isPreloading}?`,`${Aq.isViewOnly}?`,`${Aq.includeUnlistedApps}?`,`${Aq.webBrowser}?`]},{protocol:kW,path:`/${HW}/{id}`,query:[`${Aq.action}?`,`${Aq.offerName}?`,`${Aq.isPreloading}?`,`${Aq.isViewOnly}?`,`${Aq.includeUnlistedApps}?`]},{protocol:kW,query:[Aq.bundleIdentifier,`${Aq.isPreloading}?`,`${Aq.isViewOnly}?`,`${Aq.includeUnlistedApps}?`,`${Aq.webBrowser}?`]},{protocol:kW,query:[Aq.action,Aq.ids,`${Aq.isPurchasesApp}?`,`${Aq.isPreloading}?`,`${Aq.isViewOnly}?`,`${Aq.includeUnlistedApps}?`]},{protocol:kW,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/catalog/{countryCode}/apps/{id}",query:[`${Aq.isPreloading}?`,`${Aq.isViewOnly}?`,`${Aq.includeUnlistedApps}?`]},{protocol:kW,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/catalog/{countryCode}/app-bundles/{id}",query:[]},{protocol:kW,path:"{apiVersion}/catalog/{countryCode}/apps/{id}",query:[`${Aq.isPreloading}?`,`${Aq.isViewOnly}?`,`${Aq.includeUnlistedApps}?`,`${Aq.offerItemId}?`]},{protocol:kW,path:"{apiVersion}/catalog/{countryCode}/app-bundles/{id}",query:[`${Aq.isPreloading}?`,`${Aq.isViewOnly}?`,`${Aq.includeUnlistedApps}?`]},{protocol:kW,hostName:`${uq}`,path:`/${VW}/{id}`,query:[`${Aq.isPreloading}?`,`${Aq.isViewOnly}?`,`${Aq.includeUnlistedApps}?`]},{protocol:kW,path:`/${DW}/${MW}`,query:[Aq.id,`${Aq.v0}?`,`${Aq.isPreloading}?`,`${Aq.isViewOnly}?`,`${Aq.includeUnlistedApps}?`]},{protocol:CW,path:`/${jW}/{id}`,query:[Aq.invalidateWidgetsOnFailure,`${Aq.metrics}?`,`${Aq.offerItemId}?`,`${Aq.appEventId}?`,`${Aq.isPreloading}?`,`${Aq.isViewOnly}?`,`${Aq.includeUnlistedApps}?`,`${Aq.webBrowser}?`]}]}function cp(e,t,n){const r=n[uU],o=JSON.parse(r)
let i
if(o.isBundleShelf)i=xj
else switch(o.contentType){case GU:case HF:i=_j
break
case F$:i=jG
break
default:i=zj}const s=[wj,dj,yG]
return e.appleSilicon.isSupportEnabled&&s.push(CG),new zz(e).withIdsOfType(o.remainingItems.map(e=>e.id),i).includingAdditionalPlatforms(O(e)).includingAttributes(i===jG?[]:s)}function lp(e,t,n,a,c=!1){const l=n[uU],u=JSON.parse(l,(t,n)=>typeof n===RF&&"iAdInfo"===t&&s(n)?fX.from(e,n):n)
u.isFirstRender=!1
const d=$(t)
u.recoMetricsData=null!=d?d:u.recoMetricsData,n[Aq.shelfRefreshType]===Rq&&A1.resetLocationTrackerForSimilarItemsDuringDownloadShelf(e,u)
const p=function(e,t,n,s){return Pg.context("shelfFromLookupResponse",()=>{switch(n.onDemandShelfType){case vm.SimilarItems:return function(e,t,n,i){return Pg.context("similarItemsSecondaryShelf",()=>{var s,a
if(o(t))return null
if(e.client.isCompanionVisionApp)return null
const c=new A1(n.sourcePageInformation,n.sourceLocationTracker,n.sourceSequenceId),l=QG,u=QF,d={pageInformation:c.metricsPageInformation,locationTracker:c.locationTracker,targetType:l,id:A1.similarItemsShelfId,idType:u,excludeAttribution:!0,recoMetricsData:n.recoMetricsData}
rf(0,d,n.title)
const f=new $z(n.contentType)
let p
if(ro(e,WG)||ro(e,bG)){p=wo(0,n.sourcePageInformation.iAdInfo),vo(e,p,i)
const o=function(e,t){var n
const r=null===(n=null==t?void 0:t.onDeviceAd)||void 0===n?void 0:n.positionInfo
if((0,Ig.isNothing)(r)||(0,Ig.isNothing)(t))return null
let o
switch(t.placementType){case WG:o=AN
break
case bG:o=fC}return(0,Ig.isNothing)(o)?null:oc(e,t,{shelfIdentifier:o,slot:r.slot-1})}(e,i)
null===(s=c.metricsPageInformation.iAdInfo)||void 0===s||s.updateForAdResponse(e,i)
const l=function(e,t){if(r(e))return[]
const n=[]
return Object.entries(e.tasks).forEach(([r,o])=>{r.startsWith(t)&&(n.push(o),delete e.tasks[r])}),n}(o,null===(a=cf(c.locationTracker))||void 0===a?void 0:a.id)
l.forEach(e=>{(t=t.filter(t=>t.id!==e.data.id)).splice(e.positionInfo.slot,0,e.data)}),f.adIncidents=go(0,p)}const h=op(e,t,c,Fu(0,n.contentType),n.contentType,n.offerStyle,null,n.recoMetricsData)
if(o(h))return null
f.title=n.title,f.items=h.items,f.isHorizontal=!0
const w=new b2(n.productId,t,n.title,n.shouldInferSeeAllFromFetchesItems,void 0,n.contentType,null,null,null,null,null,vm.SimilarItems),g=$l(0,n.productId,w,c,n.destinationPageInformation)
return f.refreshUrl=g,t.length<2?f.rowsPerColumn=1:n.supportsArcade?f.rowsPerColumn=2:f.rowsPerColumn=3,c.addImpressionsFieldsToSimilarItemsShelf(e,f,l,u),ao(e,[f],WG,d.id,d.pageInformation),sf(c.locationTracker),uf(c.locationTracker),f})}(e,t.data,n,s)
case vm.MoreByDeveloper:return function(e,t,n){return Pg.context("moreByDeveloperSecondaryShelf",()=>{if(o(t))return null
const r=new A1(n.sourcePageInformation,n.sourceLocationTracker,n.sourceSequenceId)
rf(0,{pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker,targetType:tj,id:`${r.getSequenceId()}`,idType:fj,excludeAttribution:!0,recoMetricsData:n.recoMetricsData},n.title)
const i=new $z(n.contentType)
i.title=n.title
const s=e.client.isCompanionVisionApp?32768:void 0,a=op(e,t,r,Fu(0,n.contentType),n.contentType,n.offerStyle,s)
if(o(a))return null
if(i.items=a.items,i.isHorizontal=!0,t.length<2?i.rowsPerColumn=1:i.rowsPerColumn=2,(0,Ig.isSome)(n.developerUrl)){const t=new Bq(Jj)
t.pageUrl=n.developerUrl,t.title=e.loc.string(UU),Ff(e,t,t.pageUrl,{pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker}),i.seeAllAction=t}return r.addImpressionsToShelf(e,i,mG),sf(r.locationTracker),uf(r.locationTracker),i})}(e,t.data,n)
case vm.SmallStory:return function(e,t,n){return Pg.context("smallStorySecondaryShelf",()=>{if(o(t))return null
const r=new A1(n.sourcePageInformation,n.sourceLocationTracker,n.sourceSequenceId),i={pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker,targetType:tj,id:`${r.getSequenceId()}`,idType:fj,excludeAttribution:!0,recoMetricsData:n.recoMetricsData}
rf(0,i,n.title)
const s={metricsLocationTracker:i.locationTracker,metricsPageInformation:i.pageInformation,filterOutMediaCardKinds:up(e.host.platform)},a=Zf(e,t,GU,n.title,null,s)
return Array.isArray(a.items)&&(a.items=a.items.filter(e=>!(e instanceof yY)||Jf(0,e.media.kind,GU))),a.isHorizontal=!0,r.addImpressionsToShelf(e,a,uG),sf(r.locationTracker),uf(r.locationTracker),a})}(e,t.data,n)}const a=new $z(n.contentType),c=$(t),l={pageInformation:n.sourcePageInformation,locationTracker:n.sourceLocationTracker,excludeAttribution:!0,recoMetricsData:null!=c?c:n.recoMetricsData}
let u
if(n.contentType===HF){const n=Xf(e,t.data,l.pageInformation,l.locationTracker,sp)
i(n)&&(u=[n])}else{const r={metricsOptions:l,offerStyle:n.offerStyle,artworkUseCase:Fu(0,n.contentType),canDisplayArcadeOfferButton:Nd(0,n.contentType)}
n.contentType===F$&&(r.skipDefaultClickAction=!0)
const o={lockupOptions:r}
n.isBundleShelf&&(o.filter=0)
const i=bu(e,t,o),s={[tH]:wx,[nH]:FM}[e.host.clientIdentifier]
s&&i.sort((e,t)=>{const n=e.icon.style===s,r=t.icon.style===s
return n&&r?0:n&&!r?-1:1})
const a=n.spotlightInAppProductIdentifier
a&&ip(0,a,i),u=i}return a.items=u,a.mergeWhenFetched=!0,a})}(e,t,u,a)
if(c&&function(e,t,n,o){if(r(n))return
let i=[]
const s=wt(n),a=li(e,n,o)
i.push(a)
const c=fi(e,n,o).map(e=>e.data)
i=i.concat(c),ci(s),i.forEach(e=>ci(e.fields)),t.pageChangeMetrics={pageFields:s,updatedEvents:i}}(e,p,u.sourcePageInformation),p.refreshUrl=u.refreshUrl,n[Aq.shelfRefreshType]===Rq&&A1.addImpressionsFieldsToSimilarItemsDuringDownloadShelf(e,p,u),u.shouldInferSeeAllFromFetchesItems){const t=new Bq(Jj)
t.title=e.loc.string(UU)
const n=new $z(p.contentType)
n.items=function(e,t,n,r=!1){var o,s
if(!t)return null
let a=0
const c=[]
for(const e of t){if(r&&i(null!==(o=e.searchAd)&&void 0!==o?o:null===(s=e.searchAdOpportunity)||void 0===s?void 0:s.searchAd)){a+=1
continue}const t=y(e)
if(n&&t.offerDisplayProperties&&(t.offerDisplayProperties=t.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,n)),a>0){const e=y(t.impressionMetrics.fields),n=f(e.impressionIndex);(0,bg.isSome)(n)&&(e.impressionIndex=n-a,t.impressionMetrics=new EH(e,t.impressionMetrics.id,t.impressionMetrics.custom))}c.push(t)}return c}(0,p.items,lG,!0)
const r=new Gz([n])
ni(e,r,u.destinationPageInformation),r.title=u.title,t.pageData=r,Ff(e,t,null,{pageInformation:u.sourcePageInformation,locationTracker:u.sourceLocationTracker}),p.seeAllAction=t}return o(p.items)&&!u.hasExistingContent&&(p.isHidden=!0),p}function up(e){const t=new Set([pM])
return e===vU&&(t.add(iB),t.add(UI),t.add(cN),t.add(GI)),t}async function dp(e,t){return e.props.enabled("campaignAttribution")&&typeof campaignAttribution!==DB?await campaignAttribution.processRedirectURL(t):await e.network.fetch({url:e.bag.redirectUrlEndpoint,method:EN,headers:{"Content-Type":h_},body:`url=${encodeURIComponent(t)}`}).then(e=>e.ok)}async function fp(e,t){const n=e.required(C2)
0!==Sn(e,new xq(t.url)).length&&dp(e,t.url),t.url=function(e,t){const n=new xq(t.url)
if($C in n.query){const r="com.apple.appstorecomponentsd"===d(t.referrerData,Oj),o="com.apple.AppStore.ProductPageExtension"===e.host.clientIdentifier
return r||o||delete n.query[$C],n.toString()}return t.url}(e,t)
const r=new Ag.FetchTimingMetricsBuilder,o=e.addingFetchTimingMetricsBuilder(r)
return await n.fetchAction(o,t.url,t.referrerData).then(n=>{if(!n)throw new Error(`Promise resolved to null action for: ${t.url}`)
if(t.isIncomingURL){const e=[n]
if(n instanceof _H)for(const t of n.actions)e.push(t)
for(const t of e){const e=t.pageData
e&&typeof e===RF&&sx in e&&ai(0,e)}}if(n.actionClass===FR){const e=n
e.page===TB||e.page===KG||e.page===xC||e.page===IB||e.page===GL||e.page===jL||e.page===dG||e.page===ax?e.presentationContext=lG:e.page===Fv?e.presentationContext=nC:e.page===_$?e.presentationContext=ZB:t.isIncomingURL?e.presentationContext=XR:(e.presentationContext="replace",e.animationBehavior=rG)}return t.isIncomingURL&&(e.deepLinks.hasResilientDeepLinks()||e.deepLinks.removeDeepLink(t.url)),r.decorate(n),n}).catch(n=>{let r=[]
n instanceof e1?r=n.reasons.filter(e=>e instanceof xQ):n instanceof xQ&&r.push(n)
for(const n of r)if(204===n.statusCode){const n=new XH(hj)
n.title=e.loc.string("APP_NOT_AVAILABLE_TITLE"),n.message=e.loc.string("APP_NOT_AVAILABLE_MESSAGE"),n.isCancelable=!0
{const r=new _H(Dj)
if(r.title=e.loc.string(MC),w(new xq(t.url).query[Nv])){const e=new vW
r.actions=[n,e]}else r.actions=[n]
return r}}throw Error(n.message)})}function pp(e,t,n){switch(t){case iC:return function(e,t){const n=mc(e,e.bag.accountUrl)
return n.title=e.loc.string("VIEW_ACCOUNT_INFO",VL),$f(e,n,{...t,id:dG,actionType:Fj},!1,AF),n}(e,n)
case sC:return function(e,t){const n=e.bag.signup
if((0,bg.isNothing)(n))return null
const r=mc(e,n)
return e.featureFlags.isEnabled(rv)?r.title=e.loc.string("ACCOUNT_CREATE_APPLE_ID_REBRAND"):r.title=e.loc.string("ACCOUNT_CREATE_APPLE_ID"),$f(e,r,{...t,id:dG,actionType:Fj},!1,AF),r}(e,n)
case KR:return function(e,t){if((0,bg.isNothing)(e.bag.purchaseHistoryUrl))return null
const n=mc(e,e.bag.purchaseHistoryUrl)
return n.title=e.loc.string("ACCOUNT_PURCHASE_HISTORY"),n.presentationContext=XR,$f(e,n,{...t,id:KR,actionType:Fj},!1,AF),n}(e,n)
case hM:return function(e,t){if(e.user&&e.user.isManagedAppleID)return null
const n=mc(e,e.bag.redeemUrl)
return n.title=e.loc.string("ACCOUNT_REDEEM",lC),$f(e,n,{...t,id:"redeemGiftCardOrCode",actionType:Fj},!1,AF),n}(e,n)
case aC:return function(e,t){if(!e.bag.isMonetaryGiftingEnabled)return null
const n=mc(e,wM)
return n.title=e.loc.string("ACCOUNT_SEND_GIFT",ov),$f(e,n,{...t,id:"sendGiftCardByEmail",actionType:Fj},!1,AF),n}(e,n)
case cC:return function(e,t){var n
const r=e.bag.accountTopUpURL
if((0,bg.isNothing)(r)||o(r))return null
const i=mc(e,r)
return i.title=null!==(n=e.bag.accountTopUpTitle)&&void 0!==n?n:e.loc.string("ACCOUNT_TOP_UP"),$f(e,i,{...t,id:"addFundsToAppleId",actionType:Fj},!1,AF),i}(e,n)
case ZR:return function(e,t){const n=new sW(oj,iv)
return n.title=e.loc.string("ACCOUNT_SETUP_FAMILY_SHARING"),$f(e,n,{...t,id:"setUpFamilySharing",actionType:Fj},!1,AF),n}(e,n)
case QR:return function(e,t){const n=mc(e,e.bag.manageSubscriptionsV2Url)
return n.title=e.loc.string("ACCOUNT_SUBSCRIPTIONS"),n.presentationContext=XR,$f(e,n,{...t,id:QR,actionType:Fj},!1,AF),n}(e,n)
default:return null}}function hp(e){const t=new Ag.FetchTimingMetricsBuilder,n=e.addingFetchTimingMetricsBuilder(t),r={pageInformation:ti(e,VL,dG,""),locationTracker:{rootPosition:0,locationStack:[]},targetType:pj},o=t.measureModelConstruction(()=>{const t=new G2
return t.links[iC]=pp(e,iC,r),t.links[sC]=pp(e,sC,r),t.links[hM]=pp(e,hM,r),t.links[aC]=pp(e,aC,r),t.links[cC]=pp(e,cC,r),t.links[ZR]=pp(e,ZR,r),t.links[QR]=pp(e,QR,r),t.links[KR]=pp(e,KR,r),t})
return ni(n,o,r.pageInformation),o}async function wp(e,t){return await e.required(C2).fetchPage(e,t,x2)}async function gp(e){let t
try{t=await Tn(e,function(e){return new zz(e).forType(gR)}(e))}catch{t=void 0}return function(e,t){const r=[],o=new $2,i=new NV(e.loc.string("PERSONALIZATION_DESCRIPTION_OPTED_IN"),wU,ax)
o.addContentItem(new U2(i))
const a=e.bag.personalizedRecommendationsToggleEnabled
if(!a){const t={}
t[e.loc.string(mR)]=yp(e)
const n=new FV(e.loc.string("PERSONALIZATION_DESCRIPTION_FOOTER_OPTED_IN").replace("{account_settings}",e.loc.string(mR)))
o.footer=new mz(n,t)}if(r.push(o),a){const t=new $2
t.addContentItem(new j2(e.loc.string(Sb),!1))
const n=new FV(e.loc.string(Pb))
t.footer=new mz(n),r.push(t)}{const t=new $2(e.loc.string("PERSONALIZATION_SECTION_USAGE_HEADER")),n=new FV(e.loc.string("PERSONALIZATION_SECTION_USAGE_FOOTER"))
t.footer=new mz(n),t.addContentItem(new N2(e.loc.string("PERSONALIZATION_SECTION_USAGE_CLEAR_DATA"),function(e){const t=new SW
t.title=e.loc.string("PERSONALIZATION_CLEAR_USAGE_DATA_CONFIRMATION_TITLE")
const n=new QH([t])
return n.title=e.loc.string("PERSONALIZATION_CLEAR_USAGE_DATA_CONFIRMATION_HEADER"),n.isCancelable=!0,n.destructiveActionIndex=0,n}(e))),r.push(t)}const c=new $2(e.loc.string("PERSONALIZATION_INTERACTIONS")),l=new FV(e.loc.string("PERSONALIZATION_INTERACTIONS_FOOTER"))
c.footer=new mz(l)
const u=e.bag.purchaseHistoryUrl;(0,Ig.isSome)(u)&&e.props.enabled("personalizedRecommendationsPurchaseHistoryUpleveling")?c.addContentItem(new N2(e.loc.string(bb),vp(e,TB,u,!0),v$)):c.addContentItem(new N2(e.loc.string(bb),vp(e,Vm,null,!0),v$)),c.addContentItem(new N2(e.loc.string("PERSONALIZATION_SUBSCRIPTIONS"),vp(e,null,e.bag.manageSubscriptionsV2Url,!1),v$)),c.addContentItem(new N2(e.loc.string("PERSONALIZATION_PREORDERS"),vp(e,null,e.bag.managePreordersUrl,!0),v$)),c.addContentItem(new N2(e.loc.string("PERSONALIZATION_RATINGS"),vp(e,null,e.bag.ratingsReviewsUrl,!0),v$)),r.push(c)
const f=new $2(e.loc.string("PERSONALIZATION_ADDITIONAL_INFO")),p=[e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_1"),e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_2"),e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_3"),e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_4"),e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_5")].join("\n"),h=new NV(p,wU,ax)
f.addContentItem(new U2(h)),r.push(f)
const w=n(t,"results.derived-user-info")
if(s(w)){const t=new $2(e.loc.string("ACCOUNT_INFO")),n=["gender","birthyear"]
for(const e of n){const n=d(w,`${e}.label`),r=d(w,`${e}.value`);(null==n?void 0:n.length)>0&&(null==r?void 0:r.length)>0&&t.addContentItem(new B2(n,r))}const o=e.featureFlags.isEnabled(rv)?"PERSONALIZATION_ACCOUNT_INFO_FOOTER_REBRAND":"PERSONALIZATION_ACCOUNT_INFO_FOOTER",i=new FV(e.loc.string(o))
t.footer=new mz(i),r.push(t)}return new x2(e.loc.string(Ib),r)}(e,t)}function mp(e){const t=[],n=e.bag.personalizedRecommendationsToggleEnabled,r=new $2,o=n?e.loc.string("PersonalizedRecommendations.OptedOut.Description"):e.loc.string("PERSONALIZATION_DESCRIPTION_OPTED_OUT"),i=new NV(o)
if(r.addContentItem(new U2(i)),t.push(r),n){const n=new $2
n.addContentItem(new j2(e.loc.string(Sb),!1))
const r=new FV(e.loc.string(Pb))
n.footer=new mz(r),t.push(n)}else{const n=new $2
n.addContentItem(new N2(e.loc.string(mR),yp(e),v$)),t.push(n)}return new x2(e.loc.string(Ib),t)}function vp(e,t,n,r){let o
if((0,Ig.isSome)(t))o=new Bq(t,n)
else{if((0,Ig.isNothing)(n))return null
o=mc(e,n)}return r&&(o.presentationContext=XR),o}function yp(e){return vp(e,void 0,e.bag.accountUrl,!1)}async function Ap(e,t){const n=new zz(e).forType(Cb).addingQuery(ME,"events-reminders").addingQuery("service",xL).addingQuery(_G,"explicit")
n.isMediaRealmRequest=!0
const r=function(e,t){const n={"events-reminders":{"com.apple.AppStore":{contents:[{id:e,type:Uj,notify:t}]}}}
return{method:"PATCH",headers:{"Content-Type":hk},requestBodyString:JSON.stringify(n)}}(t.appEventId,t.shouldSchedule)
return await new Promise((t,o)=>{Tn(e,n,r).then(e=>{t(!0)}).catch(e=>{o(e)})})}function Tp(e){y4||(y4=!0,A4=new i4(e.loc.string("PAGE_FACETS_SORTS_RELEASE_DATE"),l4,fN),T4=new i4(e.loc.string("PAGE_FACETS_SORTS_LAST_UPDATED"),u4,"lastUpdated"),S4=new i4(e.loc.string("PAGE_FACETS_SORTS_NAME"),d4,Yj),P4=new i4(e.loc.string("PAGE_FACETS_SORTS_CATEGORY"),f4,KB),b4=new i4(e.loc.string("PAGE_FACETS_DEFAULT_ALL"),null),I4=new i4(e.loc.string("PAGE_FACETS_FILTERS_AGE_VALUE_4PLUS"),"4Plus"),C4=new i4(e.loc.string("PAGE_FACETS_FILTERS_AGE_VALUE_9PLUS"),"9Plus"),k4=new i4(e.loc.string("PAGE_FACETS_FILTERS_AGE_VALUE_12PLUS"),"12Plus"),O4=new i4(e.loc.string(Iv),zG,null,"gamecontroller"),E4=new i4(e.loc.string("PAGE_FACETS_FILTERS_MULTIPLAYER"),zG,null,"person.2"),R4=new i4(e.loc.string(Cv),zG),v4[Aq.sort]={releaseDate:[A4],lastUpdated:[T4],name:[S4],category:[P4]},v4[Aq.ageRating]={"4plus":[I4],"9plus":[C4],"12plus":[k4]},v4[Aq.controllerSupport]={true:[O4],false:[]},v4[Aq.multiplayerSupport]={true:[E4],false:[]},v4[Aq.comingSoon]={true:[R4],false:[]})}function Sp(e,t={}){Tp(e)
const n={"filter[ageRating]":[b4]}
n[p4]=[A4],n[h4]=[R4]
const r=[Aq.sort,Aq.ageRating,Aq.controllerSupport,Aq.multiplayerSupport,Aq.comingSoon]
for(const e of r){const r=t[e]
if(o(r))continue
const a=v4[e][r],c=D4[e]
i(a)&&s(c)&&(n[`${c}`]=a)}return n}function Pp(e,t){const n=new aW
return Nf(e,n,t),n}function bp(e){const t=[wj,dj,eG,sG,uB,kB]
return e.appleSilicon.isSupportEnabled&&t.push(CG),t}async function Ip(e,t){const n=e.required(C2),r=xq.from(t.url)
return r.param(Aq.requestDescriptor,JSON.stringify(t)),await n.fetchPage(e,r.build(),qz)}async function Cp(e,t){const n=e.required(C2)
return await n.fetchMoreOfPage(e,t).then(function(e){return e})}function kp(e,t,n){return Pg.context("createShelves",()=>{const r=[]
if(0===t.length)return r
let o=!1
for(const s of t)if(o=o||!K(s.data[0]),o)n.remainingGroups.push(s)
else{const t={index:n.lastShelfIndex,title:Rp(e,s),contentType:(i=n.isCompactMode,i?gj:GM),shouldFilter:!1,remainingContent:s.data,groupKind:s.kind,isCompactMode:n.isCompactMode,hasExistingContent:!1,isFirstRender:!0,metricsPageInformation:n.metricsPageInformation,metricsLocationTracker:n.metricsLocationTracker},o=Op(e,t)
r.push(o),n.lastShelfIndex++}var i
return r})}function Op(e,t){const n=[],r=new $z(t.contentType)
r.title=t.title,r.presentationHints={showSupplementaryText:!1},r.isHorizontal=t.groupKind===EF||t.groupKind===KB
const i={id:`${t.index}`,kind:null,softwareType:null,targetType:tj,title:r.title,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,idType:fj}
for(gf(e,r,i),rf(0,i,r.title);s(t.remainingContent)&&K(t.remainingContent[0]);){const r=t.remainingContent.shift(),o={metricsOptions:{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:$(r)},artworkUseCase:1,canDisplayArcadeOfferButton:Nd(0,t.contentType),shouldHideArcadeHeader:e.featureFlags.isEnabled(k$),isContainedInPreorderExclusiveShelf:t.groupKind===EF},i=yu(e,r,o,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}},null,null)
Dp(e,i,r)&&(i.editorialTagline=null,i.developerTagline=null,n.push(i),uf(t.metricsLocationTracker))}return r.mergeWhenFetched=t.hasExistingContent,t.hasExistingContent=t.hasExistingContent||n.length>0,r.items=n,s(t.remainingContent)?r.url=function(e){return o(e.remainingContent)?null:`${CW}:/${$W}/${RW}/?${Aq.token}=${encodeURIComponent(JSON.stringify(e))}`}(t):"tv"!==e.client.deviceType&&t.isCompactMode&&r.items.length<3&&(r.rowsPerColumn=r.items.length),sf(t.metricsLocationTracker),r}function Ep(e,t){const n=Sp(e,t),r={}
for(const e of Object.keys(n))r[e]=n[e].map(e=>({value:e.value,title:e.title,metricsValue:e.metricsValue,systemImageName:e.systemImageName}))
const o={url:`${CW}:/${$W}`,isCompactMode:!1,selectedFacetOptions:r},i=t[Aq.requestDescriptor]
if(s(i)){const e=h(JSON.parse(i))
o.isCompactMode=e.isCompactMode,Object.assign(o.selectedFacetOptions,e.selectedFacetOptions)}return o}function Rp(e,t){let n,r,o=null,i=null
if((!t.name||0===t.name.length)&&t.kind!==EF)return""
switch(t.kind){case"releaseDateByDay":o=t.name.split("-"),i=new Date(parseInt(o[0]),parseInt(o[1])-1,parseInt(o[2])),r=e.loc.string("ALL_GAMES_SECTION_TITLE_RELEASE_DATE_SENTENCE"),n=e.loc.formatDateInSentence(r,Rb,i)
break
case"lastUpdatedByDay":o=t.name.split("-"),i=new Date(parseInt(o[0]),parseInt(o[1])-1,parseInt(o[2])),r=e.loc.string("ALL_GAMES_SECTION_TITLE_LAST_UPDATED_SENTENCE"),n=e.loc.formatDateInSentence(r,Rb,i)
break
case EF:n=e.loc.string("Arcade.SeeAllGames.ComingSoonShelf.Title")
break
default:n=t.name}return n}function Dp(e,t,n){if(o(t.trailers)){const r=vd(e,n)
if(s(r)){const e=new az
r.playbackControls={prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},r.autoPlayPlaybackControls={prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0},r.canPlayFullScreen=!0,e.videos=[r],t.trailers=[e]}}return o(t.trailers)&&function(e){const t=e.screenshots[0]
if(o(t))return
const n=t.artwork[0],r=new JV(M4,n,{allowsAutoPlay:!1,looping:!1,canPlayFullScreen:!1,showPlaybackControls:!1,autoPlayPlaybackControls:{},playbackControls:{}}),i=new az
i.videos=[r],e.trailers=[i]}(t),s(t.trailers)}async function _p(e,t){const n=xq.from(t)
return await e.required(C2).fetchPage(e,n.build(),PY)}function Lp(e){let t=0,n=0
for(const r of e.shelves)(0,Ig.isSome)(r.batchGroup)&&r.batchGroup.length>0||(r.batchGroup=`shelfBatchGroup_${t}`,n++,5===n&&(n=0,t++))}async function xp(e,t){const n=xq.from(t.url)
return n.param(Aq.isArcade,"true"),n.param(Aq.isSubscribed,`${t.isSubscribed}`),n.param(Aq.isTrialAvailable,`${t.isTrialAvailable}`),n.param(Aq.isTrialEnrolled,`${t.isTrialEnrolled}`),await e.required(C2).fetchPage(e,n.build(),Wz)}function Mp(e,t){const n=new _H(Gj)
n.popToRoot=!0
const r=new MH([n])
return r.title=t,r}async function $p(e,t){return await e.required(C2).fetchPage(e,t,CY)}async function Fp(e,t){const n=new Promise((n,r)=>{const o=t
s(o)||r(new Error("fetchUpsellGrid called with malformed contentDictionary"))
const i=se(o,qj),a={pageInformation:new pX({}),locationTracker:{rootPosition:0,locationStack:[]}},c=Uu(e,i,a,{useCase:2}),l=c.shift()
n(new EY(l,c))})
return await n}async function Np(e,t){const n=h(t,uU)
let r=n.buyParams
r=gt(e,d(t,jU),r,h(t,Mb),l(t,$b),l(t,Fb),d(t,Nb),d(t,Bb),d(t,TR),p(t,CB),p(t,Ub),h(t,Gb),d(t,jb),d(t,"token.extRefApp2"),d(t,"token.extRefUrl2"))
const o=new FY(r),i={product:d(t,JU)||n.productIdentifier,adamId:d(t,jU),buyParams:o.toEncodedMap()}
return await Promise.resolve(i)}async function Bp(e,t){const n=t.offerAction,o=t.offerDisplayProperties
if(!n||!o)return await Promise.reject(new Error("Invalid offerToken for personalized offer fetch."))
const i=[n.adamId];(0,Ig.isSome)(t.supportedBundleChildrenIds)&&i.push(...t.supportedBundleChildrenIds)
const s={"Content-Type":h_},a={url:e.bag.buyButtonMetadataURL,method:EN,headers:s,body:"ids="+i.join(","),signingStyle:jN},l=e.network.fetch(a)
return await l.then(i=>{if(!i.ok)throw Error(`Bad Status code ${i.status} for ${a.url}`)
const s=JSON.parse(i.body)
if((0,Ig.isSome)(t.freeBundleId)&&(0,Ig.isSome)(t.supportedBundleChildrenIds)){let r=!0
for(const e of t.supportedBundleChildrenIds)if(!Up(p(s,e))){r=!1
break}if(r)return function(e,t,n){const r=Gt(e,t,Oj,n,dN)
return r.titles[Wj]=e.loc.string(Hb),new bV($L,t,r)}(e,n,o)}const l=p(s,n.adamId)
let u=null,f=null
const h=function(e,t){return Pg.context("personalizedOfferTypeFromBuyButtonMetadata",()=>{const e=c(t,_B)
if(0===e.length)return null
for(const t of e){const e=d(t,PU)
if(e)return e}return XG})}(0,l)
if(r(h))throw new Error("fetchPersonalizedOfferContext: Failed to determine offer type from buyButtonMetadata")
if(h!==XG){let t=OB
u=function(e,t,n,o){return Pg.context("personalizedCMCOfferActionFromBuyButtonMetadata",()=>{const o=c(t,_B)
if(0===o.length)return null
let i,s=null
for(const e of o)switch(i=d(e,PU),i){case T_:case $L:s=e
break
default:s=null}if(!s)return null
let a=d(s,PB)
if(i===T_&&r(a))return Pg.unexpectedNull(SG,vj,Kk),null
a||(a="")
const l=n.purchaseConfiguration,u=new SV(a,l.vendor,l.appName,l.bundleId,l.appPlatforms,l.isPreorder,l.excludeAttribution,l.metricsPlatformDisplayStyle,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,l.appCapabilities,l.isDefaultBrowser)
u.pageInformation=l.pageInformation
const f=Ct(e,s,n.adamId,u,!1)
return function(e,t,n,r){const o=n.purchaseConfiguration.pageInformation
let i
for(const e of n.actionMetrics.data)if(i=c(g(e.fields),E$),i)break
xf(e,t,t.adamId,false,o,i,!1)}(e,f,n),f})}(e,l,n)
let i=null
switch(h){case $L:t=dN,i=e.loc.string(Hb)
break
case T_:(r(u.price)||0===u.price)&&(i=e.loc.string(S_))}f=Gt(e,u,Oj,o,t),i&&(f.titles[Wj]=i)}const w=xt(e,u,!1)
return new bV(h,w,f)})}function Up(e){if((0,Ig.isNothing)(e))return!1
const t=c(e,_B)
if((0,Ig.isNothing)(t)||0===t.length)return!1
for(const e of t)if(d(e,PU)===JC)return!0
return!1}async function Gp(e,t){var n
let r=d(t,"token.buyParams")
const s=d(t,"overrideBuyParams")
i(s)&&(r=function(e,t){const n=new FY(e),r=new FY(t),i=n.get(CJ.placementId,null);(null==i?void 0:i.length)>0&&o(r.get(CJ.placementId,null))&&r.set(CJ.placementId,i,null)
const s=n.get(CJ.containerId,null);(null==s?void 0:s.length)>0&&o(r.get(CJ.containerId,null))&&r.set(CJ.containerId,s,null)
const a=n.get(CJ.templateType,null)
return(null==a?void 0:a.length)>0&&o(r.get(CJ.templateType,null))&&r.set(CJ.templateType,a,null),r.toString()}(r,s)),r=gt(e,d(t,jU),r,h(t,Mb),l(t,$b),l(t,Fb),d(t,Nb),d(t,Bb),d(t,TR),p(t,CB),p(t,Ub),h(t,Gb),d(t,jb),d(t,"metrics.extRefApp2"),d(t,"metrics.extRefUrl2"))
const a=c(t,"token.appPlatforms"),u=a&&a.length&&a.length>0&&a.indexOf("tv")>=0,f=a&&a.length&&a.length>0&&a.indexOf(Tj)>=0,g=l(t,"token.isHalva")||l(t,"token.isMacOSCompatibleIOSApp"),m=l(t,"token.supportsVisionOSCompatibleIOSBinary"),v=cd(0,e.client.deviceType,g,m).some(e=>-1!==a.indexOf(e)),y=g&&!1,A=(a.indexOf(Tj),m&&!1),T=d(t,"instalationType"),S=T===NO,P=T===JC,b=l(t,"token.isPreorder"),I=!(b||(u||f)&&!v),C=d(t,TR)===Vj&&e.client.deviceType!==Vj,k=d(t,"token.preflightPackageUrl"),O={...p(t,"token.additionalHeaders",{}),...p(t,"additionalHeaders",{})}
let E={}
const R=null===(n=e.paymentMetricsIdentifiersCache)||void 0===n?void 0:n.getMetricsFieldsForTypes([Dg.user,Dg.client])
return(0,Ig.isSome)(R)&&(E={...R}),{adamId:d(t,jU),buyParams:r,vendor:d(t,"token.vendor"),appName:d(t,"token.appName"),bundleId:d(t,"token.bundleId"),appPlatforms:a,additionalHeaders:O,isUpdate:S,isRedownload:P,isPreorder:b,createsJobs:I,preflightPackageUrl:k,isArcadeApp:w(t,"token.isArcadeApp"),forceWatchInstall:C,isMacOSCompatibleIOSApp:y,isVisionOSCompatibleIOSApp:A,presentingSceneIdentifier:d(t,"presentingSceneIdentifier"),appCapabilities:c(t,"token.appCapabilities"),isDefaultBrowser:w(t,"token.isDefaultBrowser"),metricsOverlay:E,remoteDownloadIdentifiers:c(t,"token.remoteDownloadIdentifiers")}}async function jp(e,t){const n=new zz(e).withIdsOfType(t,zj).includingMacOSCompatibleIOSAppsWhenSupported(!0).includingAdditionalPlatforms(O(e))
return await Tn(e,n).then(t=>{const n=L(t),r={}
for(const t of n)r[t.id]=ju(e,t,{useCase:3})
return r})}async function Vp(e,t){const n=new eX(t.targetingData,e.random.nextUUID()),r=Wp(e,t)
if(null===r)return null
const s=Tn(e,r,function(e,t){const n={}
return t&&t.validAdRequest()&&(n["X-Apple-App-Store-Client-Request-Id"]=t.appStoreClientRequestId,n["X-Apple-iAd-Request-Data"]=t.sponsoredSearchRequestData,n["X-Apple-iAd-Env-Name"]=t.routingInfo),{headers:n}}(0,n))
if(e.bag.mediaAPISearchFocusEnabled){const n={term:t.term.trim(),entity:t.searchEntity}
e.onDeviceSearchHistoryManager.saveRecentSearchWithLimit(n,30)}const a=async function(e,t,n,r){var i
if(!t.validAdRequest())return Vr(e,"ODML fetch skipped - Malformed request"),{adverts:[],odmlSuccess:!1}
const s=await r,a=function(e,t){const n=L(t.results[RP]),r=[]
for(const t of n){const n=d(t,"id"),i=H(t,EE)
if(o(n)||o(i))continue
let s=null,a=null
e.bag.enableCPPInSearchAds&&(s=Be(Fe(e,t)),a=Ge(e,t)),r.push({instanceId:e.random.nextUUID(),adamId:n,assetInformation:{},adData:i,cppIds:a,serverCppId:s,selectedCppId:s,appBinaryTraits:sd(e,t)})}return r}(e,s),c=function(e,t,n){const r=L(t.results.search),i=[]
for(const e of r){const t=d(e,"id")
o(t)||i.push({adamId:t,assetInformation:{}})}return i}(0,s)
try{if(e.isAvailable(sV)){const t=await e.ads.processAdvertsForSponsoredSearch(a,c,n,e.bag.sponsoredSearchODMLTimeout,e.client.isPhone||e.client.isPad)
return t.odmlSuccess?Vr(e,"ODML processing completed"):Vr(e,"ODML processing failed"),{adverts:null!==(i=t.adverts)&&void 0!==i?i:a,odmlSuccess:t.odmlSuccess,installedStates:t.installedStates,appStates:t.appStates}}return Vr(e,"ODML fetch skipped - Unsupported client"),{adverts:a,odmlSuccess:!1}}catch(t){return Vr(e,`ODML fetch failed - ${t}`),{adverts:a,odmlSuccess:!1}}}(e,n,t.term,s),c=async function(e){if(function(e){switch(e){case Lj:case jj:return!0
default:return!1}}(e.client.deviceType)){const t=Gn(e,null,null,O(e))
if(t)return await Tn(e,t).catch(()=>null)}return null}(e)
return await Promise.all([s,a,c]).then(([o,s,a])=>{var c,l,u,f
if(function(e){var t
const n=$(e),r=RE
i(n)&&i(e.meta)&&i(null===(t=e.meta)||void 0===t?void 0:t.metrics)&&(e.meta.metrics[hX]=d(n,r),delete e.meta.metrics[r])}(o),null===(u=null===(l=null===(c=o.meta)||void 0===c?void 0:c.results)||void 0===l?void 0:l.search)||void 0===u?void 0:u.naturalLanguage){const t=e.storage.retrieveString($E),n=Qe(new Date).getTime().toString()
e.storage.storeString($E,n),null===(f=e.amsEngagement)||void 0===f||f.enqueueData({eventType:"lastNLSQueryDateChange",app:xL,oldState:t,newState:n})}return{catalogResponse:o,categoriesFilterData:a,sponsoredSearchRequestData:n,sponsoredSearchAdvertData:s,requestMetadata:{requestDescriptor:t,searchRequestUrl:qe(e,r).toString()}}})}async function Hp(e,t){const n=function(e,t){const n=e.bag.isLLMSearchTagsEnabled||l(e.bag.supportedMixedMediaRequestUsecases[sj]),r=new zz(e,t,n,[CP]).includingAdditionalPlatforms(O(e)).includingScopedAttributes(_j,[NE]).includingAttributes(qp(e)).includingRelationshipsForUpsell(!0).includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes($e(e))
return We(e,r,t),r.includingRelationships(a5),Oi(e)&&(r.includingAssociateKeys(zj,[Uj]),r.includingScopedAttributes(Uj,[yj,zU,DU]),r.includingScopedRelationships(_j,[wG])),r}(e,t)
return await Tn(e,n)}function Wp(e,t){var n
const r=null===(n=t.term)||void 0===n?void 0:n.trim()
if(o(r))return null
const i=t.origin,a=t.source,c=t.searchEntity,u=t.facets,d=t.selectedFacetOptions,f=t.spellCheckEnabled,p=t.excludedTerms,h=e.host.clientIdentifier,w=new zz(e).withSearchTerm(r).includingAdditionalPlatforms(O(e)).includingAttributes(qp(e)).includingScopedAttributes(_j,[NE]).includingRelationshipsForUpsell(!0).includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes($e(e))
if(w.includingRelationships(a5),Oi(e)&&(w.includingAssociateKeys(zj,[Uj]),w.includingScopedAttributes(Uj,[yj,zU,DU]),w.includingScopedRelationships(_j,[wG])),l(e.client.isTinkerWatch)&&w.withFilter(zN,"tinker"),w.enablingFeature(LL),e.props.enabled(eL)&&w.enablingFeature(eL),s(t.guidedSearchTokens)&&w.addingQuery("selectedFacets",t.guidedSearchTokens.join(",")),s(t.guidedSearchOptimizationTerm)&&w.addingQuery("finalTerm",t.guidedSearchOptimizationTerm),e.bag.isLLMSearchTagsEnabled&&w.includingAssociateKeys("results:apps",[CP]),c===wN?w.searchingOverTypes([_j]):c===mG?w.searchingOverTypes([SU]):c===Vj||c===Gj?w.searchingOverTypes([zj]).withFilter(zN,c):w.searchingOverTypes([zj,SU,RU,_j,xj,jG]),e.appleSilicon.isSupportEnabled&&!e.appleSilicon.isRosettaAvailable&&w.addingQuery("restrict","!requiresRosetta"),u)for(const e of Object.keys(u))w.addingQuery(e,u[e])
if(d)for(const e of Object.keys(d)){const t=c4.requestValuesForSelectedFacetOptions(d[e])
if(s(t)){w.addingQuery(e,t.value)
for(const e of Object.keys(t.additionalKeyValuePairs))w.addingQuery(e,t.additionalKeyValuePairs[e])}}const g=e.bag.isNaturalLanguageSearchEnabled||e.bag.isNaturalLanguageSearchResultsEnabled,m=g?"source":"src"
if(i===s$){const e=g&&(null==a?void 0:a.length)?"hint:".concat(a):PO
w.addingQuery(m,e)}else i===SO?w.addingQuery(m,ES):i===rF?w.addingQuery(m,rF):i===bO?w.addingQuery(m,"searchInstead"):i===IO?w.addingQuery(m,fT):i===BE&&w.addingQuery(m,K$)
switch(h){case tH:w.addingContext(Vj)
break
case nH:w.addingContext(LG)
break
case rH:w.addingContext(Gj)}return w.addingQuery("limit[ads-result]",e.bag.mediaAdvertRequestLimit.toString()),s(e.bag.adsOverrideLanguage)&&w.enablingFeature(fv),f&&w.enablingFeature("spellCheck"),g&&w.enablingFeature(IP),w.enablingFeature("searchResultCpps"),p&&w.addingQuery("excludeTerms",p.join(",")),w}function qp(e){const t=[kB,pD,uB,sG,xN,hD,yG,HL,dk,UE,Qx,dj]
return e.appleSilicon.isSupportEnabled&&t.push(CG),e.host.isOSAtLeast(15,5,0)&&t.push(yN),t}function zp(e,t){return Pg.context("developerPageFromResponse",()=>{const n=t.data.length?t.data[0]:null
if(!n)return null
const r=ei(e,"Artist",n.id,t),i=function(e,t,n,r){switch(e.client.deviceType){case jj:return function(e,t,n,r){var i
e.appleSilicon.isSupportEnabled?(Qp(t,LU,[xM,hx]),Qp(t,xM,[hx])):Qp(t,LU,[xM])
const a=gj
let l=0
const u=[]
for(const d of v5){const f=re(t,d),p=c(f,VB),h=p.length
if(0===h)continue
if(d===YN&&0===h)continue
const w=Kp(e,d,t)
rf(0,{pageInformation:n,locationTracker:r,idType:fj,id:`${l}`,targetType:tj},w)
const g={lockupOptions:{metricsOptions:{pageInformation:n,locationTracker:r},artworkUseCase:1},filter:76532},m=p.filter(e=>o(e.attributes)),v=(null===(i=f.next)||void 0===i?void 0:i.length)>0||h>=8,y=Zp(e,w,t.id,p,d,a,g,n,r,f.href,v),A=y.items.length+m.length
A<3&&(y.rowsPerColumn=A)
const T={id:null,kind:null,softwareType:null,targetType:tj,title:y.title,pageInformation:n,locationTracker:r,idType:null}
if(sf(r),gf(e,y,T),uf(r),m.length){const e=new T5
e.title=w,e.developerId=t.id,e.contentType=gj,e.remainingData=m,e.lockupListOptions=g,e.relationship=d,e.roomUrl=f.href,e.shouldShowSeeAll=v,e.hasExistingContent=s(y.items),y.url=`${CW}:/${WW}/${RW}/`+encodeURIComponent(JSON.stringify(e))}y.items.length>0&&(u.push(y),l++)}return u}(e,t,n,r)
case Vj:return function(e,t,n,r,i,a,c){const l=se(n,r),u={lockupOptions:{metricsOptions:{pageInformation:a,locationTracker:c},artworkUseCase:1},filter:76532}
rf(0,{pageInformation:a,locationTracker:c,idType:fj,id:"0",targetType:tj},i)
const d=Zp(e,i,n.id,l,r,t,u,a,c,null,!1),f=l.filter(e=>o(e.attributes)),p={id:null,kind:null,softwareType:null,targetType:tj,title:i,pageInformation:a,locationTracker:c,idType:null}
if(sf(c),gf(e,d,p),uf(c),f.length){const e=new T5
e.title=i,e.developerId=n.id,e.contentType=t,e.remainingData=f,e.lockupListOptions=u,e.hasExistingContent=s(d.items),d.url=`${CW}:/${WW}/${RW}/`+encodeURIComponent(JSON.stringify(e))}return[d]}(e,gj,t,P0,e.loc.string(xy),n,r)
case Tj:return Jp(e,t,A5,n,r)
default:return Jp(e,t,y5,n,r)}}(e,n,r,{rootPosition:0,locationStack:[]})
1===i.length&&(i[0].isHorizontal=!1)
const a=Dd(e,n,Wj)
if(a){const e=new NV(a,AU),t=new $z(AB)
t.items=[e],i.unshift(t)}const l=new Gz(i)
l.title=q(n,Yj),e.client.deviceType!==Vj&&(l.presentationOptions=[BF]),ni(e,l,r)
const u=H(n,kD)
if(u){const t=Nu(e,u,{cropCode:"sr",useCase:21})
l.uber=t
{const e=new $z("uber"),n=new w0(_y)
n.artwork=t,e.items=[n],n.title=l.title,i.unshift(e),l.presentationOptions.push(WM),l.presentationOptions.push(Ly)}}return l})}function Yp(e,t,n){switch(t){case YN:return e.loc.string(My)
case zC:return e.loc.string("DEVELOPER_SYSTEM_APPS")
case TD:return e.loc.string("DEVELOPER_IMESSAGE")
case fx:return e.loc.string(xy)
case px:return e.loc.string("DEVELOPER_TV")
case xj:return e.loc.string($y)
case YC:return e.loc.string("DEVELOPER_VISION")
case LM:const t=Y(n,Fy),r=Y(n,Ny)
return t&&r?e.loc.string(By):r?e.loc.string(Uy):e.loc.string(Gy)
case LU:return e.loc.string(jy)
default:return null}}function Jp(e,t,n,r,i){var a,l
let u,d
Qp(t,LU,[LM,px]),"tv"===e.client.deviceType?(u=cG,d=2):(u=gj,d=1)
let f=0
const p=[]
for(const h of n){const n=re(t,h),w=c(n,VB),g=w.length
if(0===g)continue
if(h===YN&&0===g)continue
let m
m=h===TD?nH:h===fx?tH:h===px?oH:eH
const v=Yp(e,h,t)
rf(0,{pageInformation:r,locationTracker:i,idType:fj,id:`${f}`,targetType:tj},v)
const y={lockupOptions:{metricsOptions:{pageInformation:r,locationTracker:i},clientIdentifierOverride:m,artworkUseCase:d},filter:76532},A=w.filter(e=>o(e.attributes)),T=((null===(a=n.next)||void 0===a?void 0:a.length)>0||g>=8)&&!0,S=Zp(e,v,t.id,w,h,u,y,r,i,n.href,T),P=S.items.length+A.length
P<3&&(S.rowsPerColumn=P)
const b={id:null,kind:null,softwareType:null,targetType:tj,title:S.title,pageInformation:r,locationTracker:i,idType:null}
if(sf(i),gf(e,S,b),uf(i),A.length){const e=new T5
e.title=v,e.developerId=t.id,e.contentType=u,e.remainingData=A,e.lockupListOptions=y,e.relationship=h,e.roomUrl=n.href,e.shouldShowSeeAll=T,e.hasExistingContent=s(S.items),S.url=`${CW}:/${WW}/${RW}/`+encodeURIComponent(JSON.stringify(e))}(S.items.length>0||(null===(l=S.url)||void 0===l?void 0:l.length)>0)&&(p.push(S),f++)}return p}function Kp(e,t,n){switch(t){case YN:return e.loc.string(My)
case xj:return e.loc.string($y)
case xM:if(e.appleSilicon.isSupportEnabled)return e.loc.string("DEVELOPER_MAC_APPS")
{const t=Y(n,Fy),r=Y(n,Ny)
return t&&r?e.loc.string(By):r?e.loc.string(Uy):e.loc.string(Gy)}case hx:return e.loc.string("DEVELOPER_PHONE_PAD_APPS")
case LU:return e.loc.string(jy)
default:return null}}function Zp(e,t,n,o,s,a,c,l,u,d,f){const p=new $z(a)
if(p.title=t,a===jM?(p.items=function(e,t,n){return Pg.context("screenshotsLockupsFromData",()=>{if(!t)return[]
const o=[]
for(let s=0;s<t.length;s++){const a=t[s]
if(r(a.attributes)){n.contentUnavailable&&n.contentUnavailable(s,a)
continue}const c=n.lockupOptions
let l=80894
if(i(n.filter)&&(l=n.filter),tt(e,a,l))continue
const u=mu(e,a,c)
u.isValid()&&(o.push(u),uf(n.lockupOptions.metricsOptions.locationTracker))}return o})}(e,o,c),p.isHorizontal=!1,p.presentationHints={showSupplementaryText:!1}):(p.items=Iu(e,o,c),p.isHorizontal=e.client.deviceType!==Vj),f){const r=new m5
r.title=t,r.url=d,r.developerId=n,r.relationshipId=s,r.clientIdentifierOverride=c.lockupOptions.clientIdentifierOverride
const o=new Bq(Jj)
o.pageUrl=i(h=r)?`${CW}:/${WW}/${UW}/`+encodeURIComponent(JSON.stringify(h)):null,o.title=e.loc.string(UU),o.pageData=uc(0,t),Ff(e,o,o.pageUrl,{pageInformation:l,locationTracker:u}),p.seeAllAction=o}var h
return p}function Qp(e,t,n){const o=re(e,t)
if(r(o))return
const i=L(o)
if(r(i))return
const s=i.map(e=>e.id)
for(const t of n){const n=re(e,t)
if(r(n))continue
const o=L(n)
r(n)||(e.relationships[t].data=o.filter(e=>!s.includes(e.id)))}}function Xp(e,t){const n=[wj,dj,_F],r=[...n,jF,UB,$$,x$],o=[...n,$$],i=[...n,yG,kB,uB,UB,eG,yG,pG]
e.appleSilicon.isSupportEnabled&&i.push(CG)
const s=[...i]
t.includingAdditionalPlatforms(O(e)).enablingFeatures(["personalization","supportsCustomTextColor"]).includingRelationshipsForUpsell(!0).includingScopedAttributes(_j,r).includingScopedAttributes(aU,o).includingScopedAttributes(zj,s)}function eh(e,t,n,r){const o=function(e,t,n,r){const o=th(0,n.collectionDisplayStyle)
return{...n.metricsImpressionOptions,...r,id:t.id,targetType:o}}(0,t,n,r)
return Cu(e,t,o,n.clientIdentifierOverride)}function th(e,t){switch(t){case zg.Hero:return pN
case zg.TextOnly:return Vy
case zg.TextWithArtwork:return"textWithArtwork"
case zg.BrickSmall:return"brickSmall"
case zg.BrickMedium:return"brickMedium"
case zg.BrickLarge:return"brickLarge"
case zg.EditorialLockupMedium:case zg.EditorialLockupMediumVariant:return"editorialLockupMedium"
case zg.EditorialLockupLarge:case zg.EditorialLockupLargeVariant:return"editorialLockupLarge"
case zg.LockupSmall:return V$
case zg.LockupLarge:return"lockupLarge"
case zg.StorySmall:return"storySmall"
case zg.StoryMedium:return"storyMedium"
case zg.BreakoutLarge:return qM
default:return ij}}function nh(e,t,n){let r=null,s=null,a=[]
const c=Ht(0,t)
switch(t.type){case _j:case aU:case UF:a=["enrichedEditorialNotes.badge",MD,GG],r=ch(e,t,a,!1),s=ch(e,c,a,!1)
break
case zj:case jG:case xj:a=[MD],r=ch(e,t,a,!0),s=ch(e,c,a,!0)}const l=i(s)?s:r
return o(l)?null:l}function rh(e,t,n){let r=null,s=[]
switch(n){case HM:case VM:switch(t.type){case _j:case aU:case UF:s=[Hy,nU],r=sh(t,s)
break
case zj:case jG:case xj:s=[HB],r=ch(e,t,s,!0)}break
default:switch(t.type){case _j:case aU:case UF:s=[Hy,nU],r=ch(e,t,s,!1)
break
case zj:case jG:case xj:s=[Yj],r=ch(e,t,s,!1)}}const a=ch(e,Ht(0,t),s,!1),c=i(a)?a:r
return o(c)?null:c}function oh(e,t,n=!1){let r=null,s=[]
switch(t.type){case _j:n?s=[Wy,HB]:Y(t,Pk)||(s=["enrichedEditorialNotes.short",bk]),r=ch(e,t,s,!1)
break
case aU:case UF:s=[Wy,HB],r=ch(e,t,s,!1)
break
case zj:case jG:case xj:s=[HB],r=ch(e,t,s,!0)}const a=ch(e,Ht(0,t),s,!1),c=i(a)?a:r
return o(c)?null:c}function ih(e,t){let n=null,r=[]
switch(t.type){case _j:case aU:case UF:r=[qy,zy],n=ch(e,t,r,!1)
break
case zj:case jG:case xj:r=[qy,zy],n=ch(e,t,r,!0)}const o=ch(e,Ht(0,t),r,!1)
let i=null
return i=(null==o?void 0:o.length)>0?o:s(n)?n:e.loc.string(Ik),i}function sh(e,t){return o(e)?null:q(e,t)}function ah(e,t,n){return o(e)?null:me(e,t,n)}function ch(e,t,n,r){if(o(t))return null
const i=Re(e,t)
for(const e of n){const n=r?ah(t,i,e):sh(t,e)
if(s(n))return n}return null}function lh(e,t,n){const r={}
of(0,n.metricsOptions,Ck)
const a=nu(e,t,n)
sf(n.metricsOptions.locationTracker)
const c=ru(e,t,n)
return s(a)&&(a.length>1||o(c))?r.collectionIcons=a:i(c)&&(r.lockup=c,r.collectionIcons=[c.icon]),r}function uh(e,t,n,r){const o=[],s=new $z(r)
s.isHorizontal=q(t.data,q$)===Ax
const a=jt(0,t)
for(const r of a){const i={...t.metricsImpressionOptions,targetType:th(0,n),recoMetricsData:$(r)}
if(r.attributes&&!kh(t)){{const n=dh(e,r,t.collectionDisplayStyle,i,i,t.clientIdentifierOverride)
if(n.clickAction=eh(e,r,t),!n.isValid())continue
o.push(n)}uf(t.metricsImpressionOptions.locationTracker)}else t.remainingItems.push(r),t.isDeferring=!0}return i(t.presentationHints)&&(s.presentationHints=t.presentationHints),delete t.maxItemCount,s.eyebrow=t.eyebrow,s.eyebrowArtwork=t.eyebrowArtwork,s.title=t.title,s.subtitle=t.subtitle,s.items=o,s.rowsPerColumn=J(t.data,YM),s.url=Oh(0,0,t),oa(e,s,t),s}function dh(e,t,n,r,i,a){const c=new wz,u=Wt(0,t)
if(!l(u.hideEditorialMedia)){const r=tu(e,t,n);(0,bg.isSome)(null==r?void 0:r.artwork)&&(c.artworks=[r.artwork],c.isMediaDark=Ql(0,r)),(0,bg.isSome)(null==r?void 0:r.rtlArtwork)&&(c.rtlArtwork=null==r?void 0:r.rtlArtwork,c.isRTLMediaDark=Ql(0,r,!0))}const d={metricsOptions:i,clientIdentifierOverride:a,artworkUseCase:0,canDisplayArcadeOfferButton:!0,externalDeepLinkUrl:at(0,t)}
if(of(0,d.metricsOptions,Ck),c.collectionIcons=nu(e,t,d),sf(d.metricsOptions.locationTracker),o(c.collectionIcons)){const n=ju(e,t,{useCase:0})
s(n)&&(c.collectionIcons=[n])}c.caption=nh(e,t),c.title=rh(e,t,n),c.subtitle=oh(e,t),c.accessibilityLabel=c.title,c.editorialDisplayOptions=qt(u)
const f=s(c.artworks)?cU:"collection_id",p={...r,id:t.id,idType:f}
return gf(e,c,Tf(e,t,c.title,p)),c.artworkSafeArea=XV.defaultTileArtworkSafeArea,c.textSafeArea=XV.defaultTileTextSafeArea,c}function fh(e,t,n,r){const o=new F0
o.overlayType=Ja(e,t),o.displayOptions={horizontalPlacement:bj,textAlignment:bj,isOverDarkContent:Qa(e,t)},o.badgeText=nh(e,t,zg.Hero),o.titleText=rh(e,t,zg.Hero),r.suppressTagline||(o.descriptionText=oh(e,t,!0)),o.callToActionText=ih(e,t),o.buttonTitle=Za(e,t)
const a={metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,targetType:V$,recoMetricsData:$(t)},metricsClickOptions:{id:t.id,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,actionDetails:{franchise:o.badgeText}},artworkUseCase:1,offerEnvironment:kj,canDisplayArcadeOfferButton:Bd(0,n.collectionDisplayStyle),isContainedInPreorderExclusiveShelf:!1,externalDeepLinkUrl:at(0,t)},c=ru(e,t,a),l=lh(e,t,a)
o.lockup=l.lockup,o.collectionIcons=l.collectionIcons
const u=q(t,GG)
s(u)&&i(c)&&(c.heading=u)
const d=(0,bg.isSome)(r.suppressLockup)&&r.suppressLockup
if(s(o.lockup)&&!d)o.clickAction=o.lockup.clickAction,o.impressionMetrics=o.lockup.impressionMetrics
else{const r={targetType:pN,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:$(t)},i={...r,id:t.id,actionDetails:{franchise:o.badgeText}}
o.clickAction=Eu(e,t,i,n.clientIdentifierOverride),gf(e,o,Tf(e,t,o.titleText,r))}return o}function ph(e,t,n,r,o){if(!n){const e=o?null==r?void 0:r.rtlBackgroundColor:null==r?void 0:r.backgroundColor
t.backgroundColor=e
const n=o?null==r?void 0:r.rtlArtworkData:null==r?void 0:r.artworkData
t.titleEffect=_a(0,n)
const i=o?null==r?void 0:r.rtlArtwork:null==r?void 0:r.artwork
t.artwork=i
const s=o?null==r?void 0:r.rtlVideo:null==r?void 0:r.video
t.video=s}t.isMediaDark=Ql(0,r,o)}function hh(e){return{isAutoScrollEnabled:e.bag.heroCarouselAutoScrollDuration>0,autoScrollInterval:e.bag.heroCarouselAutoScrollDuration}}function wh(e,t,n,a,c){if(o(t))return null
let l
n.showOrdinals&&(l=e.loc.decimal(n.ordinalIndex))
let u,d=null
!i(n.shelfBackground)||n.shelfBackground.type!==NU&&n.shelfBackground.type!==$D||(d=cj),s(n)&&(u=n.clientIdentifierOverride)
const f={ordinal:l,metricsOptions:{...{...n.metricsImpressionOptions,id:t.id,idType:aj},recoMetricsData:$(t),isAdvert:zr(0,t),targetType:th(0,c)},clientIdentifierOverride:u,artworkUseCase:0,offerStyle:d,canDisplayArcadeOfferButton:Bd(0,c),isContainedInPreorderExclusiveShelf:n.filterOverrides.includes(Kg.ShowOnlyPreorder)}
let p
switch(c){case HM:case vx:case VM:case mx:f.offerEnvironment=NG,p=Au(e,t,f,c)
break
case"Poster":p=vu(e,t,f)
break
default:p=wu(e,t,f)}return r(p)||!p.isValid()?null:(p.id=function(e,t,n){return(0,bg.isNothing)(n)?null:`${e.id}_${t}_${n}`}(n,a,p.adamId),p)}function gh(e,t){return Ah(e,t,zg.EditorialLockupHierarchicalPortrait,_N,!0,Jg.Vertical)}function mh(e,t){return Ah(e,t,zg.EditorialLockupLarge,Px)}function vh(e,t,n=!0,r){return e.featureFlags.isEnabled("force_display_lockup_ordinals")&&(t.showOrdinals=!0),Ah(e,t,zg.LockupSmall,gj,n,r)}function yh(e,t,n=!0){return Ah(e,t,zg.LockupLarge,N$,n)}function Ah(e,t,n,o,i=!0,s){const a=[],c=new $z(o)
c.isHorizontal=(null!=s?s:q(t.data,q$))===Jg.Horizontal
const l=jt(0,t),u=void 0
for(const[o,i]of l.entries()){if(i.type===Uj)return null
if(r(i.attributes)||kh(t)){t.isDeferring=!0,t.remainingItems.push(i)
continue}if(tt(e,i,80894))continue
let o=null
if(o=wh(e,i,t,a.length,n),o&&(a.push(o),uf(t.metricsImpressionOptions.locationTracker),t.ordinalIndex++,a.length===u))break}return n!==zg.EditorialLockupMediumVariant&&n!==zg.EditorialLockupLargeVariant||(r(c.presentationHints)?c.presentationHints={showSupplementaryText:!0}:c.presentationHints={...c.presentationHints,showSupplementaryText:!0}),delete t.maxItemCount,c.eyebrow=t.eyebrow,c.eyebrowArtwork=t.eyebrowArtwork,c.title=t.title,c.subtitle=t.subtitle,c.items=a,c.rowsPerColumn=J(t.data,YM),c.shouldFilterApps=!t.filterOverrides.includes(Kg.ShowInstalled),c.url=Oh(0,0,t),i&&oa(e,c,t,u),c}function Th(e,t,n,r,o,a,c){const u=Wt(0,t),d=new Fz
if(d.title=rh(e,t,o),u.suppressShort||(d.description=oh(e,t)),!l(u.hideEditorialMedia)){const r=ql(e,t,n)
if(d.artwork=null==r?void 0:r.artwork,d.video=null==r?void 0:r.video,d.isMediaDark=Ql(0,r),n===gm.StoryDetail){const n=ql(e,t,gm.StoryDetailLandscape)
d.landscapeArtwork=null==n?void 0:n.artwork,d.landscapeVideo=null==n?void 0:n.video,d.isLandscapeMediaDark=Ql(0,n)}}const f=lh(e,t,{metricsOptions:{pageInformation:r.pageInformation,locationTracker:r.locationTracker,recoMetricsData:$(t)},artworkUseCase:1,offerEnvironment:u.useMaterialBlur?NG:z$,canDisplayArcadeOfferButton:Bd(0,o),isContainedInPreorderExclusiveShelf:!1,externalDeepLinkUrl:at(0,t)}),p=a&&l(u.suppressLockup)
p||(d.lockup=f.lockup)
const h=Vt(e,t)
if(Y(h,rj),Rd(e,h),s(h)&&!p&&tt(e,h,80894)&&n!==gm.StoryDetail)return null
let w
if(w=nh(e,t),d.badge={type:kG,title:w},d.collectionIcons=f.collectionIcons,i(c)){const n={id:t.id,pageInformation:c.metricsPageInformation,locationTracker:c.metricsLocationTracker,actionDetails:{franchise:d.badge.title},idType:KM}
d.clickAction=eh(e,t,c,n)}d.editorialDisplayOptions=qt(u)
const g={...r,id:t.id,idType:KM}
return gf(e,d,Tf(e,t,d.title,g)),d.isValid()?d:null}function Sh(e,t,n,o){const i=[],s=new $z(o)
s.isHorizontal=q(t.data,q$)===Ax
const a=jt(0,t)
for(const o of a){const s={...t.metricsImpressionOptions,targetType:th(0,n),recoMetricsData:$(o)}
if(!K(o)||kh(t)){t.remainingItems.push(o),t.isDeferring=!0
continue}let a=null
a=Th(e,o,gm.StoryCard,s,t.collectionDisplayStyle,!0,t),r(a)||(i.push(a),uf(t.metricsImpressionOptions.locationTracker))}return delete t.maxItemCount,s.eyebrow=t.eyebrow,s.eyebrowArtwork=t.eyebrowArtwork,s.title=t.title,s.subtitle=t.subtitle,s.items=i,s.rowsPerColumn=J(t.data,YM),s.url=Oh(0,0,t),oa(e,s,t),s}function Ph(e,t,n){const r=Jt(0,t)
o(r)||(n.displayStyle=r)}function bh(e,t,n,r,o,i,s,a=!1,c=null){const l={id:d(n,"id"),type:n.type,collectionDisplayStyle:null!=c?c:Jt(0,n),filterOverrides:W(n,"filterOverrides"),pageId:t,data:n,presentationHints:{},clientIdentifierOverride:null,isFirstRender:!0,shouldFilter:!0,gamesFilter:Ch(n),hasExistingContent:!1,title:null,subtitle:null,eyebrow:null,titleArtwork:null,remainingItems:[],metricsImpressionOptions:null,metricsPageInformation:i,metricsLocationTracker:s,recoMetricsData:Xn(e,n),isDeferring:!1,showOrdinals:!1,ordinalIndex:1,isSearchLandingPage:!1,isArcadePage:r,shelfIndex:o,isSeeAll:a}
return Ih(e,n,l),l}function Ih(e,t,n){let r=q(t,nU),o=q(t,HB),i=q(t,MD),a=null,c=!1
const l=ie(e,t,H$)
s(l)&&(i=e.loc.uppercased(q(t,nU)),r=q(l,nU),a=ju(e,l,{useCase:1}),o=null,c=!0)
const u=function(e,t,n,r,o){const i=t.type,s=Jt(0,t),a={id:d(t,"id"),kind:null,softwareType:null,targetType:tj,title:n,pageInformation:r,locationTracker:o,idType:Yy,shelfType:i,recoMetricsData:$(t),canonicalId:d(t.meta,zM)}
switch(i){case qg.Collection:Ph(0,t,a),s===zg.Hero&&function(e,t){t.title=RN
const n=hh(e)
t.autoAdvanceInterval=n.autoScrollInterval}(e,a)
break
case qg.Recommendations:Ph(0,t,a)}return a}(e,t,c?i:r,n.metricsPageInformation,n.metricsLocationTracker)
n.title=r,n.subtitle=o,n.eyebrow=i,n.titleArtwork=a,n.metricsImpressionOptions=u}function Ch(e){let t=null
switch(q(e,"clientFilter")){case Zg.ArcadeGames:t=Gj
break
case Zg.AllGames:t="all"}return t}function kh(e){return e&&e.isDeferring&&e.isFirstRender}function Oh(e,t,n){return o(n)?null:(n.remainingItems.length||n.recommendationsHref||n.onDeviceRecommendationsUseCase)&&n.isFirstRender?function(e){return(new xq).set(BB,CW).append(lU,cq).append(lU,RW).param(Aq.token,encodeURIComponent(JSON.stringify(e))).build()}(n):null}function Eh(e,t,n){if(o(n)||o(t))return null
if(function(e){if(e.isSeeAll)return!1
switch(e.collectionDisplayStyle){case zg.BreakoutLarge:case zg.Poster:return!1}return!e.filterOverrides.includes(Kg.ShowOnlyPreorder)}(n)){const r=new Bq(Jj)
if(!aa(t)){const o=`shelf_${n.id}`
r.pageData=function(e,t,n,r,o){const i=Dh(e,void 0,(Jt(0,t.data),bh(e,t.pageId,t.data,t.isArcadePage,t.shelfIndex,t.metricsPageInformation,{rootPosition:0,locationStack:[]},!0,null)))
if(null===i)return null
let s
i.title=null,i.eyebrow=null,i.isHorizontal=!1,i.id=r,s=new ZV(null,t.title,null)
const a=new $z(Sx)
a.id=Dk,a.items=[s]
const c=new Gz([a,i])
return c.isIncomplete=!(null!=o&&o),(0,Ig.isNothing)(c.pageMetrics.pageFields)&&(c.pageMetrics.pageFields={}),c}(e,n,t.contentType,o,(0,Ig.isSome)(n.recommendationsHref))}const o={}
n.type===qg.Recommendations&&(o[Aq.editorialPageId]=n.pageId),r.pageUrl=fa(e,n.data.href,o),r.title=e.loc.string(UU),r.referrerUrl=n.metricsPageInformation.pageUrl
const i=function(e){const t=[]
for(const n of e.locationStack)t.push({...n})
return{rootPosition:e.rootPosition,locationStack:t}}(n.metricsLocationTracker)
return lf(i,0),Ff(e,r,n.seeAllUrl,{pageInformation:n.metricsPageInformation,locationTracker:i}),r}return null}function Rh(e,t,n,r,o){n||(t.backgroundColor=o?null==r?void 0:r.rtlBackgroundColor:null==r?void 0:r.backgroundColor,t.artwork=o?null==r?void 0:r.rtlArtwork:null==r?void 0:r.artwork,t.video=o?null==r?void 0:r.rtlVideo:null==r?void 0:r.video),t.isMediaDark=Ql(0,r,o)}function Dh(e,t,n){let a=null
switch(n.isFirstRender&&rf(0,n.metricsImpressionOptions,n.title),n.type){case qg.ArcadeSeeAllGames:a=function(e,t){const n=new UV,o=new $z(Ek)
o.items=[n]
const i={targetType:Jy,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,title:e.loc.string(cD),id:t.id,kind:Ky,softwareType:oj}
gf(e,n,i),rf(0,i,i.title),n.buttonAction=Uf(e,fN,t.metricsPageInformation,t.metricsLocationTracker)
const a={targetType:Hj,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,title:n.buttonAction.title,id:"SeeAllGames",kind:Hj,softwareType:oj}
gf(e,n.buttonAction,a),sf(i.locationTracker)
const c=e.bag.termsAndConditionsURL
if(!r(c)&&"tv"!==e.client.deviceType){const t=e.loc.string(Rk),r=new xH(c),o=new ez(t)
o.clickAction=r,o.presentationStyle=[FD,ND,BD],n.footnote=o}o.background={type:NU,color:G(QC)}
const l=jt(0,t)
if(s(l)){const r={pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker}
n.icons=Uu(e,l,r,{useCase:2})}else n.icons=[]
return o}(e,n)
break
case qg.Collection:a=function(e,t){let n=q(t.data,iG)
if(o(n))return null
let a=null
switch(n){case zg.Hero:a=function(e,t){if(0!==t.shelfIndex)return null
const n=new $z(RN),r=new B0
r.autoScrollConfiguration=hh(e)
const o=jt(0,t)
for(const n of o){const o=zt(e,n)
if(Yt(0,n)&&!K(o)||kh(t)){t.isDeferring=!0,t.remainingItems.push(n)
continue}const i={...t.metricsImpressionOptions,idType:cU,targetType:pN,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:$(n)},s=ql(e,n,gm.Hero),a=lh(e,n,{metricsOptions:i,clientIdentifierOverride:t.clientIdentifierOverride,artworkUseCase:0,offerEnvironment:z$,canDisplayArcadeOfferButton:!0}),c=new N0,u=Ha(0,n),d=rh(e,n,zg.Hero),f=Tf(e,n,d,i)
f.isPreorder=Oe(e,u,rj),gf(e,c,f),rf(0,f,d)
const p=Wt(0,n),h=l(p.hideEditorialMedia)
c.overlay=fh(e,n,t,p),c.collectionIcons=a.collectionIcons,c.editorialDisplayOptions=qt(p),ph(0,c,h,s,!1),c.isValid()&&r.items.push(c)
const w=y(c)
ph(0,w,h,s,!0),w.isValid()&&r.rtlItems.push(w),sf(f.locationTracker),uf(f.locationTracker)}return delete t.maxItemCount,n.isHorizontal=!1,n.eyebrow=t.eyebrow,n.eyebrowArtwork=t.eyebrowArtwork,n.title=t.title,n.subtitle=t.subtitle,n.items=[r],n.url=Oh(0,0,t),n}(e,t)
break
case zg.TextOnly:a=function(e,t){var n
const o=[],i=new $z(_G)
i.isHorizontal=q(t.data,q$)===Jg.Horizontal
const s=jt(0,t)
for(const n of s){if(r(n.attributes)||kh(t)){t.isDeferring=!0,t.remainingItems.push(n)
continue}const i=eh(e,n,t)
i.title=rh(e,n,t.collectionDisplayStyle)
const s={...t.metricsImpressionOptions,id:n.id,idType:KM,targetType:Vy}
gf(e,i,Tf(e,n,i.title,s)),i.isValid()&&(o.push(i),uf(t.metricsImpressionOptions.locationTracker))}return delete t.maxItemCount,i.eyebrow=t.eyebrow,i.eyebrowArtwork=t.eyebrowArtwork,i.title=t.title,i.subtitle=t.subtitle,i.items=o,i.rowsPerColumn=null!==(n=J(t.data,YM))&&void 0!==n?n:1,i.url=Oh(0,0,t),oa(e,i,t),i}(e,t)
break
case zg.TextWithArtwork:a=function(e,t){var n
const o=[],i=new $z(_G)
i.isHorizontal=q(t.data,q$)===Jg.Horizontal
const a=jt(0,t)
for(const n of a){if(r(n.attributes)||kh(t)){t.isDeferring=!0,t.remainingItems.push(n)
continue}const i=eh(e,n,t)
let a
i.title=rh(e,n,t.collectionDisplayStyle),a=H(n,Nj),s(a)&&(i.artwork=Nu(e,a,{allowingTransparency:!0,useCase:20})),i.isValid()&&(o.push(i),uf(t.metricsImpressionOptions.locationTracker))}return delete t.maxItemCount,i.eyebrow=t.eyebrow,i.eyebrowArtwork=t.eyebrowArtwork,i.title=t.title,i.subtitle=t.subtitle,i.items=o,i.rowsPerColumn=null!==(n=J(t.data,YM))&&void 0!==n?n:1,i.url=Oh(0,0,t),oa(e,i,t),i}(e,t)
break
case zg.BrickSmall:a=function(e,t){return uh(e,t,zg.BrickSmall,"smallBrick")}(e,t)
break
case zg.BrickMedium:a=function(e,t){return uh(e,t,zg.BrickMedium,GF)}(e,t)
break
case zg.BrickLarge:a=function(e,t){return uh(e,t,zg.BrickLarge,"largeBrick")}(e,t)
break
case zg.EditorialLockupHierarchicalPortrait:a=gh(e,t)
break
case zg.EditorialLockupHierarchicalRows:a=function(e,t){return Ah(e,t,zg.EditorialLockupHierarchicalRows,_N,!0,Jg.Vertical)}(e,t)
break
case zg.EditorialLockupMedium:a=function(e,t){return Ah(e,t,zg.EditorialLockupMedium,_N)}(e,t)
break
case zg.EditorialLockupMediumVariant:a=function(e,t){return Ah(e,t,zg.EditorialLockupMediumVariant,_N)}(e,t)
break
case zg.EditorialLockupLarge:a=mh(e,t)
break
case zg.EditorialLockupLargeVariant:a=function(e,t){return Ah(e,t,zg.EditorialLockupLargeVariant,Px)}(e,t)
break
case zg.LockupMedium:a=function(e,t){return Ah(e,t,zg.LockupMedium,gj)}(e,t)
break
case zg.Lockup4Up:a=function(e,t){return Ah(e,t,zg.Lockup4Up,_N,!0,Jg.Vertical)}(e,t)
break
case zg.Poster:a=function(e,t){const n=Ah(e,t,zg.Poster,Y$)
return(0,Ig.isSome)(n)&&(n.horizontalScrollTargetBehavior=Fg.CenterAligned),n}(e,t)
break
case zg.StorySmall:a=function(e,t){return Sh(e,t,zg.StorySmall,GU)}(e,t)
break
case zg.StoryMedium:a=function(e,t){return Sh(e,t,zg.StoryMedium,JM)}(e,t)
break
case zg.LockupSmall:a=vh(e,t)
break
case zg.LockupLarge:a=yh(e,t)
break
case zg.BreakoutLarge:a=function(e,t){const n=[],r=new $z(Tx)
r.isHorizontal=q(t.data,q$)===Ax
const s=jt(0,t)
for(const r of s){const s=zt(e,r)
if(Yt(0,r)&&!K(s)||kh(t)){t.isDeferring=!0,t.remainingItems.push(r)
continue}const a={targetType:qM,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:$(r)},c=Wt(0,r),u=l(c.hideEditorialMedia)?null:tu(e,r,t.collectionDisplayStyle),d=lh(e,r,{metricsOptions:a,clientIdentifierOverride:t.clientIdentifierOverride,artworkUseCase:0,offerEnvironment:z$,canDisplayArcadeOfferButton:!0,externalDeepLinkUrl:at(0,r)})
if(o(u)&&o(d.collectionIcons))continue
const f=nh(e,r,t.collectionDisplayStyle),p=i(f)?{type:kG,title:f}:{type:XG,title:null},h=new Ez(rh(e,r,t.collectionDisplayStyle),oh(e,r,!0),p,null),w=new Rz(h,{position:bj,wantsBlur:!0},null,null==u?void 0:u.artwork,null==u?void 0:u.video,d.collectionIcons,null==u?void 0:u.backgroundColor)
w.rtlArtwork=null==u?void 0:u.rtlArtwork,w.rtlVideo=null==u?void 0:u.rtlVideo,w.rtlBackgroundColor=null==u?void 0:u.rtlBackgroundColor
const g={...a,id:r.id,idType:cU}
gf(e,w,Tf(e,r,w.details.title,g))
const m=eh(e,r,t)
i(m)&&(m.title=ih(e,r)),w.details.callToActionButtonAction=m,w.clickAction=m,w.editorialDisplayOptions=qt(c),w.lockup=d.lockup,w.isMediaDark=Ql(0,u),w.isRTLMediaDark=Ql(0,u,!0),n.push(w)}return delete t.maxItemCount,r.eyebrow=t.eyebrow,r.eyebrowArtwork=t.eyebrowArtwork,r.title=t.title,r.subtitle=t.subtitle,r.items=n,r.rowsPerColumn=J(t.data,YM),r.url=Oh(0,0,t),oa(e,r,t),r}(e,t)}return s(a)&&(a.seeAllAction=Eh(e,a,t),a.id=`shelf_${t.id}`),a}(e,n)
break
case qg.Chart:a=function(e,t){let n
if(t.showOrdinals=!0,n=vh(e,t,!1,Jg.Horizontal),!(0,Ig.isNothing)(n))return n.url=Oh(0,0,t),oa(e,n,t),function(e,t,n){e.featureFlags.isEnabled(OF)?(0,Ig.isSome)(t.header)?function(e,t,n){e.featureFlags.isEnabled(OF)?t.titleAction=n:t.accessoryAction=n}(e,t.header,n):t.header={titleAction:n}:t.seeAllAction=n}(e,n,function(e,t){const n=q(t.data,vG),r=q(t.data,TG),o=new Bq(Jj)
return o.pageUrl=Ad(e,n,r),o.title=e.loc.string(UU),o.referrerUrl=t.metricsPageInformation.pageUrl,Ff(e,o,o.pageUrl,{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker}),o}(e,t)),n}(e,n)
break
case qg.Tag:case qg.Engagement:case qg.Text:case qg.Image:case qg.VideoClip:a=null
break
case qg.Header:a=function(e,t,n){const r=s(H(n.data,xU))?n.data:t
if(void 0===r)return null
const o=new B0,i=new N0,a=Wt(0,r),c=fh(e,r,n,a)
c.overlayType=kG,c.callToActionText=null,i.clickAction=null,c.collectionIcons=null,c.lockup=null,c.callToActionText=null,i.overlay=c
const u={artworkUseCase:1,offerStyle:aB,offerEnvironment:kj,canDisplayArcadeOfferButton:Bd(0,n.collectionDisplayStyle),isContainedInPreorderExclusiveShelf:!1,metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:$(r)},externalDeepLinkUrl:at(0,r)}
of(0,u.metricsOptions,Ck)
const d=nu(e,r,u)
sf(u.metricsOptions.locationTracker),i.collectionIcons=d
const f=ql(e,r,gm.Hero),p=l(a.hideEditorialMedia)
Rh(0,i,p,f,!1),i.editorialDisplayOptions=qt(a),o.items=[i]
const h=y(i)
Rh(0,h,p,f,!0),o.rtlItems=[h]
const w=new $z(RN)
return w.items=[o],w}(e,t,n)
break
case qg.Recommendations:a=function(e,t){let n=null
switch(q(t.data,iG)){case zg.LockupSmall:n=vh(e,t,!1)
break
case zg.LockupLarge:n=yh(e,t,!1)
break
case zg.EditorialLockupHierarchicalPortrait:n=gh(e,t)
break
case zg.EditorialLockupLarge:n=mh(e,t)
break
default:n=t.isFirstRender?function(){const e=new $z(W$)
return e.isHidden=!0,e}():null}return(0,Ig.isNothing)(n)?null:(n.id=`shelf_${t.id}`,function(e,t){const n=s(se(t.data,qj))||s(t.remainingItems),r=Y(t.data,"isPersonalizationAvailable"),o=t.data.href
if(!r||n||!s(o))return
const i=qe(e,new zz(e,t.data.href).addingQuery(Aq.editorialPageId,t.pageId).includingRelationships([qj]))
t.recommendationsHref=i.toString()}(e,t),n.url=Oh(0,0,t),oa(e,n,t),n.seeAllAction=Eh(e,n,t),n)}(e,n)
break
case qg.GameCenter:a=null
break
case qg.Upsell:a=function(e,t){const n=zf(e,t.data)
if(o(n))return null
const r=n.marketingItemData
if(o(r)||o(r.attributes))return null
const i=xa(e,r,{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,mercuryMetricsData:Xd(0,r)})
uf(t.metricsLocationTracker)
const s=new $z(IN)
return s.items=[i],s}(e,n)
break
case qg.Marker:a=function(e,t){const n=q(t.data,tG)
if(o(n))return null
let r=null
return n===Yg.QuickLinks&&(r=function(e,t){if(e.user&&e.user.isManagedAppleID)return null
{const n=[]
if((0,bg.isSome)(e.bag.aboutAppStoreUrl)){const t=new xH(e.bag.aboutAppStoreUrl)
t.title=e.loc.string("QuickLinks.AboutTheAppStore.Title"),n.push(t)}if((0,bg.isSome)(e.bag.aboutInAppPurchasesEditorialItemId)){const t=new Bq(KG)
t.title=e.loc.string("QuickLinks.AboutInAppPurchases.Title"),t.pageUrl=`https://apps.apple.com/story/id${e.bag.aboutInAppPurchasesEditorialItemId}`,n.push(t)}if((0,bg.isSome)(e.bag.reportProblemUrl)){const t=new xH(e.bag.reportProblemUrl)
t.title=e.loc.string(Qy,"Report a Problem"),n.push(t)}if((0,bg.isSome)(e.bag.requestARefundUrl)){const t=new xH(e.bag.requestARefundUrl)
t.title=e.loc.string("QuickLinks.RequestARefund.Title"),n.push(t)}if((0,bg.isSome)(e.bag.changePaymentMethodUrl)){const t=new xH(e.bag.changePaymentMethodUrl)
t.title=e.loc.string("QuickLinks.ChangePaymentMethod.Title"),n.push(t)}if((0,bg.isSome)(e.bag.aboutFrenchAppStoreEditorialItemId)){const t=new Bq(KG)
t.title=e.loc.string("QuickLinks.AboutFrenchAppStore.Title"),t.pageUrl=`https://apps.apple.com/story/id${e.bag.aboutFrenchAppStoreEditorialItemId}`,n.push(t)}const r=new $z(_G)
return r.title=e.loc.string("QuickLinks.Title"),r.items=n,r.isHorizontal=!0,r.rowsPerColumn=1,t.metricsImpressionOptions.title=r.title,r}}(e,t)),r}(e,n)}return o(null==a?void 0:a.items)&&o(null==a?void 0:a.url)&&(a=null),n.isFirstRender&&sf(n.metricsImpressionOptions.locationTracker),gf(e,a,n.metricsImpressionOptions),n.isFirstRender&&uf(n.metricsImpressionOptions.locationTracker),(0,bg.isSome)(a)&&function(e,t,n){if((0,Ig.isNothing)(t.url)||(0,Ig.isNothing)(t.impressionMetrics)||!n.showingPlaceholders)return
const o=t.url
try{const e=xq.from(o).query[Aq.token],n=JSON.parse(decodeURIComponent(e))
n.originalPlaceholderShelfImpressionMetrics=t.impressionMetrics,function(e,t,n){const o=xq.from(t.url),i=xq.from(Oh(0,0,n))
for(const e of Object.keys(o.query))r(i.query[e])&&(i.query[e]=o.query[e])
t.url=i.build()}(0,t,n)}catch{t.url=o}}(0,a,n),a}function _h(e,t){const n={pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker},r=zf(e,t.data)
return o(r)?null:Pu(e,r,n,S$,OB,Ok)}function Lh(e,t,n){var r
const o=function(e,t){switch(t){case k5:return"badge_hardware"
case O5:return"badge_trial_eligible"
default:return null}}(0,t),i=new kY(Gj,lN,null,{offerHints:o})
i.metricsOverlay={...i.metricsOverlay,...n}
const s=null===(r=e.metricsIdentifiersCache)||void 0===r?void 0:r.getMetricsFieldsForTypes([Dg.user,Dg.client])
if((0,Ig.isSome)(s)&&(i.metricsOverlay={...i.metricsOverlay,...s}),e.bag.arcadeDownloadPacksHardwareTabBadgeUpsellIntegrationEnabled&&lt(e,e.bag.arcadeDownloadPackRolloutRate)){const e=new Bq(_$),t=P$
e.pageData=t,e.presentationContext=ZB,i.purchaseSuccessAction=e}const a=new Bq(IB)
return a.pageData=i,a}async function xh(e,t){const n=t.eventString,r=t.featuresDictionary
if(!i(r))return await Promise.reject("Received non-defined engagement features.")
const o=function(e,t,n,r){switch(t){case"arcadeTabDidComeOnScreen":case"arcadePageDidAppear":return function(e,t,n){const r=[]
for(const e of E5)if(e in t){const t=new gW(e,!1)
r.push(t)}for(const o of E5){if(n.includes(o)&&!e.bag.unrestrictedServerSideTabBadging)continue
const s=t[o]
if(i(s)){const t=Lh(e,o,s)
r.push(t)
break}}if(r.length>0)return new RY(new MH(r))
{const e=new aW
return new RY(e)}}(e,n,r)
case"didBecomeArcadeTrialEligible":if(!e.bag.enableArcadeTrialEligibleBadging)return e.console.log(`Bag prohibits badging for identifier ${O5}`),new RY(new aW)
if(r.includes(O5))return e.console.log(`Badging identifier ${O5} was previously invalidated.`),new RY(new aW)
const t=new gW(O5,!0),o=new LH(Gj,e.loc.decimal(1)),s=new MH([t,o])
return new RY(s)
case"didSubscribeToArcade":return function(e){const t=[]
for(const e of E5){const n=new gW(e,!1)
t.push(n)}const n=new MH(t)
return new RY(n)}()
case"didBecomeSubscribed":if(!i(n[O5]))return new RY(new aW)
const a=new gW(O5,!1)
return new RY(a)
case"didBecomeNonSubscribed":return new RY(new aW)
default:return null}}(e,n,r,i(t.previouslyDisabledFeatures)?t.previouslyDisabledFeatures:[])
return i(o)?await Promise.resolve(o):await Promise.reject("Did not receive a valid engagement event.")}async function Mh(e,t){var n
const r=function(e,t,n,r){if(!E5.includes(t))return null
let o=null
if(n&&e.bag.unrestrictedServerSideTabBadging){const t=e.loc.decimal(1)
o=new LH(Gj,t)}else if(n&&!r.includes(t)){const t=e.loc.decimal(1)
o=new LH(Gj,t)}else n||(o=new LH(Gj,null))
return new RY(o)}(e,t.identifier,t.isEnabled,null!==(n=t.previouslyDisabledFeatures)&&void 0!==n?n:[])
return i(r)?await Promise.resolve(r):await Promise.reject(new Error(`fetchBadgingTask called with unsupported identifier: ${t.identifier}, featuresDictionary: ${JSON.stringify(t.featuresDictionary)}, previouslyDisabledFeatures: ${t.previouslyDisabledFeatures}`))}async function $h(e,t){return await e.required(C2).fetchPage(e,t,jz)}async function Fh(e,t){const n=new zz(e).withIdOfType(t,i_),r=Tn(e,n)
return await r.then(t=>function(e,t){return Pg.context("msoProviderDataFromData",()=>{const n=_(e,t),r=q(n,Yj),o=q(n,Sj),i=function(e,t){return Pg.context("msoProviderArtworkFromData",()=>{const n=H(t,"editorialArtwork.storeFlowcase")
if(n)return Nu(e,n,{useCase:3})
const r=H(t,Nj)
return Nu(e,r,{useCase:3})})}(e,n)
i&&(i.crop="sr")
const s=function(e,t){const n=H(t,kD)
return n?Nu(e,n,{useCase:21}):null}(e,n)
return new N5(r,o,i,s)})}(e,t))}async function Nh(e,t){if(r(t.providerAdamId)||r(t.subscribedChannelIds))return await e.required(C2).fetchPage(e,t.url,Gz)
{const n=Bh(e,t.providerAdamId),r=Tn(e,n)
return await r.then(n=>{const r=function(e,t){return Pg.context("msoAppsFromResponse",()=>{const n=_(e,t),r=se(n,CR),o={}
for(const t of r)o[ie(e,t,Oj).id]=W(t,"channelNames")
const i=se(n,zj).map(e=>e.id)
return new B5(o,i)})}(e,n),o=function(e,t){const n=e.appsToAlwaysShow
for(const r of Object.keys(e.apps)){const o=e.apps[r]
for(const e of o)if(-1!==t.indexOf(e)){n.push(r)
break}}return n}(r,t.subscribedChannelIds)
return Uh(e,n,o)})}}function Bh(e,t){return new zz(e).withIdOfType(t,i_).includingRelationships([zj,CR]).addingQuery("limit[channel-apps]","100")}function Uh(e,t,n){return Pg.context("msoRoomPageWithResponse",()=>{const r=_(e,t),o=ei(e,fU,r.id,t),i=se(r,zj),a=se(r,CR)
for(const t of a){const n=ie(e,t,Oj)
s(n)&&i.push(n)}const c=new o1
c.ids=i.map(e=>e.id),c.shouldFilter=!1,c.metricsPageInformation=o
const l=function(e,t,n,r,o=[]){return Pg.context("msoRoomPageWithContext",()=>{const i=[],s=[]
for(const e of t)-1!==n.indexOf(e.id)?i.push(e):s.push(e)
const a={rootPosition:0,locationStack:[]},c={lockupOptions:{metricsOptions:{pageInformation:r.metricsPageInformation,locationTracker:a},artworkUseCase:2}},l=[],u={pageInformation:r.metricsPageInformation,locationTracker:a,targetType:tj,idType:fj,id:"0"}
if(i.length>0){const t=e.loc.string("MSO_INCLUDED_IN_SUBSCRIPTION"),n=new o1
n.remainingContent=[],n.metricsPageInformation=r.metricsPageInformation,n.metricsLocationTracker=a,n.preferredShelfContentType=cG,u.id="0",rf(0,u,t),c.contentUnavailable=function(e,t){return n.remainingContent.push(i[e]),!1}
const o=new $z(cG)
o.title=t,o.shouldFilterApps=r.shouldFilter,o.items=Iu(e,i,c),o.url=Gh(n),sf(a),o.items.length>0&&(uf(a),l.push(o))}if(i.length>0&&s.length>0){const t=e.loc.string("MSO_AVAILABLE_WITH_UPGRADED_SUBSCRIPTION"),n=new o1
n.remainingContent=[],n.metricsPageInformation=r.metricsPageInformation,n.metricsLocationTracker=a,n.preferredShelfContentType=cG,u.id="1",rf(0,u,t),c.contentUnavailable=function(e,t){return n.remainingContent.push(s[e]),!1}
const o=new $z(cG)
o.title=t,o.shouldFilterApps=r.shouldFilter,o.items=Iu(e,s,c),o.url=Gh(n),sf(a),o.items.length>0&&(uf(a),l.push(o))}if(0===l.length){const n=new o1
n.remainingContent=[],n.metricsPageInformation=r.metricsPageInformation,n.metricsLocationTracker=a,n.preferredShelfContentType=gj,u.id="0",rf(0,u,null),c.contentUnavailable=function(e,r){return n.remainingContent.push(t[e]),!1}
const o=new $z(cG)
o.shouldFilterApps=r.shouldFilter,o.items=Iu(e,t,c),o.url=Gh(n),sf(a),uf(a),l.push(o)}for(const e of l)e.isHorizontal=l.length>1
const d=o.concat(l)
return new Gz(d)})}(e,i,n,c)
return l.title=q(r,Yj),l.isIncomplete=!1,ni(e,l,o),l})}function Gh(e){return e.remainingContent.length?`${CW}:/${QW}/${RW}/`+encodeURIComponent(JSON.stringify(e)):null}async function jh(e,t){const n={url:`${e.bag.getCancellablePreorderItemsSrv}?&includeAllLockups=false&includeNonBookCancellablePreorderItems=true${t.isArcade?"&preorderItemType=ArcadeApp":""}`,signingStyle:jN}
return await e.network.fetch(n).then(async n=>{const r=JSON.parse(n.body)
if(0!==r.status)return await Promise.resolve("noAuthorization")
const o=r.cancellablePreorderItems.filter(e=>e.preorderAdamId.toString()===t.adamId)
if(null===o||0===o.length)return await Promise.reject("Expected AdamID was missing. This AdamId might have not been preordered before, or the isArcade flag may be incorrect.")
if(o.length>1)return await Promise.reject(`Multiple matches for adamId ${t.adamId}, when only one is expected.`)
const i=o[0].preorderId,s={url:e.bag.cancelPreorderItemSrv,method:EN,signingStyle:jN}
return s.body=`preorderId=${i}`,await e.network.fetch(s).then(async e=>{if(!e.ok)throw Error(`Bad Status code ${e.status} for ${s.url}`)
return 0!==JSON.parse(e.body).status?await Promise.resolve("unableToCancel"):await Promise.resolve("canceled")}).catch(async e=>await Promise.reject(e))}).catch(async e=>await Promise.reject(e))}async function Vh(e,t){if(t.preloading&&Me(e))return await Promise.reject(new Error(Jb))
0!==Sn(e,new xq(t.url)).length&&dp(e,t.url)
const n=K5.generateProductPageOptions(e,void 0,new xq(t.url))
let r=e.required(C2).fetchPage(e,t.url,AJ)
if(!r){const o=new zz(e,t.url)
r=Tn(e,o).then(r=>Bl(e,r,n,void 0,t.referrerData))}return await r.then(n=>(e.host.clientIdentifier===iH?n&&sx in n&&ai(0,n):i(t.referrerData)&&n&&sx in n&&ai(0,n),n))}async function Hh(e,t,n){const a=io(e,t,!1),c=new zz(e)
switch(t){case Dj:c.usingCustomAttributes($e(e)),oo(e)===RL&&c.includingAttributes([HL])
break
case WG:case bG:c.usingCustomAttributes($e(e))}const l=e.bag.adsOverrideLanguage
s(l)&&c.enablingFeature(fv).addingQuery("l",l)
const u=qe(e,c).query
try{const c=await e.ads.fetchOnDeviceAdPlacement(t,a,u,n)
return await async function(e,t,n){var a,c,l,u,d,f
o(t.clientRequestId)&&(t.clientRequestId=e.random.nextUUID(),Vr(e,`clientRequestId was nil. Assigned ${t.clientRequestId}`))
const p={clientRequestId:t.clientRequestId,iAdId:t.iAdId,placementType:null!==(c=null===(a=null==t?void 0:t.ad)||void 0===a?void 0:a.placementType)&&void 0!==c?c:n}
if(t.failureReason)return p.failureReason=t.failureReason,p
p.onDeviceAd=t.ad
let h=null===(l=t.ad)||void 0===l?void 0:l.appMetadata
const w=_(e,h)
if(o(null===(u=null==w?void 0:w.attributes)||void 0===u?void 0:u.name)||o(null===(d=null==w?void 0:w.attributes)||void 0===d?void 0:d.platformAttributes)||o(At(e,w)))try{const n=function(e,t){const n=new zz(e).withIdOfType(t.adamId,zj).usingCustomAttributes($e(e)).includingAttributes([HL])
s(t.cppIds)&&n.addingQuery(Aq.productVariantID,t.cppIds[0])
const r=e.bag.adsOverrideLanguage
return s(r)&&n.addingQuery("l",r),n}(e,t.ad)
h=await Tn(e,n)}catch(t){Vr(e,`fetchAds request failed - ${t}`),p.failureReason=uv}if(s(null===(f=_(e,h))||void 0===f?void 0:f.attributes)){p.mediaResponse=function(e,t,n){const i=_(e,t)
if(o(i)||r(i.attributes))return Vr(e,"decorateiAdAttributeFromOnDeviceAd cannot decorate for malformed response"),null
const a=n.ad,c=`${a.adamId}|${a.metadata}`,l={clientRequestId:n.clientRequestId,impressionId:a.impressionId,metadata:a.metadata,privacy:a.privacy,lineItem:c},u=_(e,a.appMetadata)
switch(s(i.meta)&&s(u)&&s(u.meta)&&(i.meta.passthroughAdInfo=u.meta.passthroughAdInfo),a.placementType){case Dj:const t=oo(e)===RL
l.format={images:t,text:"",userRating:!1}
break
case yU:l.format={images:!0,text:"",userRating:!1}}return i.attributes[TN]=l,fo(0,i,a.instanceId),t}(e,h,t),po(e,_(e,h),p.onDeviceAd)||(Vr(e,"fetchAds request failed - localization not available"),p.failureReason=dC)
const a=function(e,t,n){return n===Dj?function(e,t){var n,r
const o=Fe(e,_(e,t.mediaResponse))
return(null===(r=null===(n=t.onDeviceAd)||void 0===n?void 0:n.cppIds)||void 0===r?void 0:r.includes(o.productPageId))?null:uC}(e,t):null}(e,p,n)
i(a)&&(Vr(e,`fetchAds request failed - ${a}`),p.failureReason=a)}return p}(e,c,t)}catch{return null}}function Wh(e,t,n,r=Vg.Default){var o,i,s
const a=null!==(o=q(t,JG))&&void 0!==o?o:void 0
let c=null!==(i=function(e,t,n){return H(e,t,void 0)}(t,iG))&&void 0!==i?i:void 0;(0,Ig.isNothing)(c)&&r===Vg.CategoriesAndCharts&&(c={layoutDensity:Hg.Density1,layout:void 0,layoutSize:void 0})
const l=h(H(t,"itemDisplayStyle")),u=Y(t,sA),d=null!==(s=J(t,$k))&&void 0!==s?s:void 0,f=u?t.href:void 0
return new qY(t.id,a,c,d,u,f,l,n)}function qh(e,t,n,r){return{metricsOptions:zh(0,t,n,r)}}function zh(e,t,n,r){var o,i,s
const a=re(t,qj),c=null===a?void 0:null!==(o=$(a))&&void 0!==o?o:void 0
let l=cU
return r.pageType===ym.ChartsAndCategories&&(l=lj),{id:n.id,kind:null,softwareType:null,targetType:tj,title:null!==(i=n.title)&&void 0!==i?i:"",pageInformation:r.metricsPageInformation,locationTracker:r.metricsLocationTracker,idType:l,fcKind:void 0,canonicalId:null!==(s=d(t.meta,zM))&&void 0!==s?s:void 0,recoMetricsData:c}}function Yh(e,t,n,r){var o
return{...r.metricsOptions,...Tf(e,n,t.title,r.metricsOptions),recoMetricsData:null!==(o=$(n))&&void 0!==o?o:void 0,targetType:Kh(t.density),idType:aj}}function Jh(e,t,n,r){var o
return{pageInformation:r.metricsOptions.pageInformation,locationTracker:r.metricsOptions.locationTracker,recoMetricsData:null!==(o=$(n))&&void 0!==o?o:void 0,targetType:Kh(t),id:n.id}}function Kh(e){if((0,bg.isNothing)(e))return RB
switch(e){case Hg.Density1:return RB
case Hg.Density2:return FM
default:return RB}}function Zh(e,t){var n,r
const o=q(t,JG),i=d(t,"meta.autoSelectedTabId"),a=d(t,"meta.sourceShelfCanonicalId"),l=ei(e,fU,a,t),u=Ar(e)
l.recoMetricsData=ef(l.recoMetricsData,null,u)
const f={shelves:[],metricsLocationTracker:{rootPosition:0,locationStack:[]},metricsPageInformation:l,adStitcher:null,adIncidentRecorder:null,pageType:ym.ChartsAndCategories},p=c(t,VB),h={},w=[],g=[],m={rootPosition:0,locationStack:[]}
for(const t of p){const o=Wh(0,t,jg.CategoriesAndCharts,Vg.CategoriesAndCharts),i=qh(0,t,o,{...f,metricsLocationTracker:{rootPosition:0,locationStack:[]}})
rf(0,i.metricsOptions,o.title)
const s=Qh(e,t,!0,o,0,i)
if(sf(i.metricsOptions.locationTracker),(0,Ig.isNothing)(s))continue
h[s.id]=s,w.push(s.id)
const a=new Bz,c=new KH(t.id,o.title)
$f(e,c,{id:o.title,canonicalId:null!==(n=d(t.meta,zM))&&void 0!==n?n:void 0,actionType:Fj,targetType:Hj,pageInformation:f.metricsPageInformation,locationTracker:m}),a.action=c,a.id=s.id,a.title=`${null!==(r=s.title)&&void 0!==r?r:""}`,g.push(a),uf(m)}if(!s(w))return new jY
const v=new Uz
v.id=e.random.nextUUID()
const y=new $z("pageTabs")
y.items=[v],h[v.id]=y
const A=new jY
A.shelfMapping=h
const T={}
for(const e of w)g.length>1?T[e]=[v.id,e]:T[e]=[e]
for(const e of Object.values(h))e.title=void 0
return A.title=o,A.pageTabs=v,A.columnCount=2,A.shelfOrderings=T,A.defaultShelfOrdering=w.includes(i)?i:w[0],v.tabs=g,v.selectedTabId=A.defaultShelfOrdering,ni(e,A,f.metricsPageInformation),A}function Qh(e,t,n,r,i,c){var l,u,f,p,h,w
const g=[],m=se(t,qj),v=new $z(HE)
if(v.isHorizontal=!1,v.id=t.id,v.title=r.title,v.presentationHints={isWidthConstrained:!0},a(null===(l=r.displayStyle)||void 0===l?void 0:l.layoutSize)&&(v.contentsMetadata={type:"searchLandingChartsAndCategoriesSection",numberOfColumns:r.displayStyle.layoutSize}),r.hasSeeAll){const t=new Bq(HE)
t.pageUrl=r.seeAllLink,t.title=e.loc.string(UU)
const n={...c.metricsOptions,targetType:Hj}
Ff(e,t,t.pageUrl,n),v.seeAllAction=t}gf(e,v,c.metricsOptions)
const y=n?mm.seeAllPage:mm.other
for(const t of m){const n=Gu(e,t,y,null===(u=null==r?void 0:r.displayStyle)||void 0===u?void 0:u.layoutDensity),i=H(t,xU)
let a=null,l=null
s(i)&&(a=d(i,Yj),l=d(i,PF))
const m=q(t,tG),v=H(t,pj),A=d(v,Sj),T=se(t,wG)
let S=!0,P=null
if((0,Ig.isSome)(A))switch(m){case"CategoryChart":const t=new Bq(Ex)
t.pageUrl=A,t.title=a,P=t
break
case"External":if(S=!1,d(v,ox)===dD)P=new xH(A),P.title=null!=a?a:""
else{const t=e.required(C2).fetchFlowPage(A),n=new Bq(t)
n.pageUrl=A,n.title=null!=a?a:"",P=n}}else{if(!s(T))continue
{const t=fa(e,T[0].href)
if(!((null==t?void 0:t.length)>0))continue
{const e=new Bq(Jj)
e.pageUrl=t,e.title=a,P=e}}}if($f(e,P,Jh(0,null===(f=null==r?void 0:r.displayStyle)||void 0===f?void 0:f.layoutDensity,t,c)),S&&o(a))continue
const b=new VY(a,n,l,P,null===(p=null==r?void 0:r.displayStyle)||void 0===p?void 0:p.layoutDensity,Xh(null===(h=null==r?void 0:r.displayStyle)||void 0===h?void 0:h.layoutDensity),ew(null===(w=null==r?void 0:r.displayStyle)||void 0===w?void 0:w.layoutDensity))
gf(e,b,Yh(e,b,t,c)),g.push(b),uf(c.metricsOptions.locationTracker)}return o(g)?null:(v.items=g,v)}function Xh(e){switch(e){case Hg.Density1:return XV.defaultTileArtworkSafeArea
case Hg.Density2:return XV.defaultPillArtworkSafeArea
case Hg.Density3:default:return}}function ew(e){switch(e){case Hg.Density1:return XV.defaultTileTextSafeArea
case Hg.Density2:return XV.defaultPillTextSafeArea
default:return}}async function tw(e,t){const n=new zz(t,e.url).forType(vL).includingScopedRelationships(Qb,[qj]).enablingFeatures([IU,aM]).addingQuery(Aq.name,IM),r=Tn(t,n)
return await r.then(e=>Zh(t,e))}function nw(e){switch(e){case mG:return Nm
case wN:return _L
case Vj:return Bm
case Gj:return"joystickcontroller.fill"
default:return}}function rw(e,t,n,r,i){if(o(r))return null
const s=BE,a=n.term,c=r.displayLabel,l=t===OP?new AQ(c,r.finalTerm,null,s):new g6(c,s)
!function(e,t,n,r,o){const i=LL,s=xP,a={targetId:n},c=kf(e,n,s,{actionType:i,location:nf(0,{pageInformation:null,locationTracker:o.locationTracker,targetType:s},n),searchTerm:r},[LL])
t.actionMetrics.addMetricsData(c)
const l=Of(e,r,s,i,null,a,[LL])
t.actionMetrics.addMetricsData(l)}(e,l,c,a,i)
const u=new h6(c,r.isSelected,void 0,c,l)
return Xo(0,u,xP,i),u}function ow(e,t,n){const r=y(t),i=y(t.attributes)
return i[EE]=n.adData,r.attributes=i,function(e,t,n){var r
const i=Be(Fe(e,t))
if(n.selectedCppId===i||o(null===(r=null==t?void 0:t.meta)||void 0===r?void 0:r.cppData))return
const s=y(t.meta)
s.cppData[h$]=n.selectedCppId,t.meta=s}(e,r,n),fo(0,r,n.instanceId),r}function iw(e,t,n){const r=t||{},o=[]
e.client.deviceType!==jj&&o.push(new wQ(w$,[new gQ(e.loc.string(hP),null,r[w$]),new gQ(e.loc.string(wP),fG,r[w$])])),o.push(new wQ(yM,[new gQ(e.loc.string(DE,oN),null,r[yM]),new gQ(e.loc.string(gP,oN),tC,r[yM])]))
const s=jn(e,n,!1)
if(s){const t=s.categories
if(t.length){const n=t.filter(e=>i(e.genreId)).map(e=>new gQ(e.name,e.genreId,r[vG]))
n.unshift(new gQ(e.loc.string(_E,oN),null,r[vG])),o.push(new wQ(vG,n))}}const a=e.bag.searchSortOptions,c=[]
c.push(new gQ(e.loc.string(LE),null,r[XU]))
for(const t of a)c.push(new gQ(e.loc.string(mP+t),t,r[XU]))
c.length>1&&o.push(new wQ(XU,c))
const l=e.bag.ageBands.map(e=>new gQ(d(e,Yj),d(e,vP),r[C$]))
return l.length>0&&e.client.deviceType!==jj&&o.push(new wQ(C$,l)),o}function sw(e,t){let n=null,r=null,o=null
const s=new s4(w$,w$,e.loc.string("SEARCH_FACET_TYPE_TITLE_DEVICE_TYPE"),D$,[new i4(e.loc.string(hP),null),new i4(e.loc.string(wP),fG)],null,null,cw(e,w$)),a=new s4(yP,yP,e.loc.string("SEARCH_FACET_TYPE_TITLE_PRICE"),D$,[new i4(e.loc.string(DE,oN),null),new i4(e.loc.string(gP,oN),tC)],null,null,cw(e,yM)),c=jn(e,t,!1)
if(c){const t=c.categories
if(t.length){const r=t.filter(e=>i(e.genreId))
n=new s4(AP,AP,e.loc.string("SEARCH_FACET_TYPE_TITLE_CATEGORY"),D$,[new i4(e.loc.string(_E,oN),null)],null,null,cw(e,vG))
for(const e of r)n.options.push(new i4(e.name,e.genreId))}}const l=e.bag.searchSortOptions
r=new s4(XU,XU,e.loc.string("SEARCH_FACET_TYPE_TITLE_SORT"),D$,[new i4(e.loc.string(LE),null)],null,null,cw(e,XU))
for(const t of l)r.options.push(new i4(e.loc.string(mP+t),t))
const u=e.bag.ageBands.map(e=>new i4(d(e,Yj),d(e,vP)))
u.length>0&&e.client.deviceType!==jj&&(o=new s4(TP,TP,e.loc.string("SEARCH_FACET_TYPE_TITLE_AGE_BAND"),D$,u,null,null,cw(e,C$)))
const f=new c4([],!1,null)
{const e=[s,a]
i(n)&&e.push(n),e.push(r),i(o)&&e.push(o)
for(const t of e)t.showsSelectedOptions=!0
f.facetGroups.push(new a4(e))}return f}function aw(e){return{targetPlatform:[new i4(e.loc.string("SEARCH_FACET_IPAD_ONLY"),null)],"filter[price]":[new i4(e.loc.string(DE,oN),null)],sort:[new i4(e.loc.string(LE),null)],"filter[genre]":[new i4(e.loc.string(_E,oN),null)]}}function cw(e,t){const n=new aW
return Nf(e,n,t),n}function lw(e,t){var n,r,o
if(t.props.isNotEnabled(eL))return
const i=null===(n=t.userDefaults)||void 0===n?void 0:n.integer("GuidedSearchOverrides.position")
return a(i)&&i>1?i:null===(o=null===(r=null==e?void 0:e.displayStyle)||void 0===r?void 0:r.guidedSearch)||void 0===o?void 0:o.position}async function uw(e,t,n,a,c,u,d,f,p){var h,w,g,m,v,y
const A=[],T=[],S=n||null,P=c.filter(e=>e.type===zj).map(e=>e.id),b=yr(e,new Set(P))
let I,C
if(qr(e)&&s(u)){const n=function(e,t,n,a,c,u,d,f,p){var h,w,g,m,v,y,A,T,S,P,b
const I=new kQ,C=null!==(h=a.requestDescriptor.isNetworkConstrained)&&void 0!==h&&h
if(rf(0,{id:m_,kind:ET,softwareType:null,targetType:null,title:m_,pageInformation:c.pageInformation,locationTracker:c.locationTracker,idType:fj},m_),o(t))return{result:I}
const k=n[0]
let O
Vr(e,`Adverts received from ad server: ${t.filter(i).map(e=>`[${e.id}]`).join(", ")}`)
let E=!0
for(const a of t){if(r(a))continue
if(tt(e,a)){Vr(e,`[${a.id}] filtered by shouldFilter() - app probably not supported on current os or device`)
continue}const t=Dr(a.id,null==k?void 0:k.id,u),h=Br(k,t)
if(a.attributes[TN]=Nr(a,h),o(a.attributes[TN])){Vr(e,`[${a.id}] filtered because no appropriate iAd dictionary was found. (Probably a server issue if hitting this)`)
continue}const P={metricsOptions:{pageInformation:c.pageInformation,locationTracker:c.locationTracker,targetType:$U,isAdvert:!0},hideZeroRatings:!0,artworkUseCase:8,isNetworkConstrained:C,canDisplayArcadeOfferButton:Nd(0,gx)},b=l(be(e,a,TN),"format.images"),R=o(O),D=Fr(Su(e,a,P,tX,f)),_=null===(w=null==f?void 0:f.displayStyle)||void 0===w?void 0:w.screenshots,L=_r(e,D,a.id,h,b,O,_,k,u,d,c,p)
if(r(L)){Vr(e,`[${a.id}] will not be displayed because we could not create an ad style compatible with ${jr(O)}`)
continue}if(!po(e,a,null,L.style)){Vr(e,`[${a.id}] filtered because localization is not available`)
continue}R?(Vr(e,`[${a.id}] first ad dictates ad display style of: ${jr(L)}`),O=L):Vr(e,`[${a.id}] will be displayed because it is compatible with the display style of: ${jr(L)}, which is the same height as display style: ${jr(O)}`),c.pageInformation.iAdInfo.apply(e,a),null===(g=c.pageInformation.iAdInfo)||void 0===g||g.setTemplateType(L.style)
let x=Su(e,a,P,tX,f)
if(x=Ur(x,L,t,E),e.props.enabled(XB)?null===(m=x.searchAdOpportunity)||void 0===m||m.setTemplateType(L.style):null===(v=x.searchAd)||void 0===v||v.setTemplateType(L.style),"TEXT"===L.style){const t=q(a,cv)
if(t!==XG){let n
n=Ce(e,a,t===yj?HN:t)
const r=null!==(y=x.searchAd)&&void 0!==y?y:null===(A=x.searchAdOpportunity)||void 0===A?void 0:A.searchAd
i(r)&&i(n)&&(r.advertisingText=n)}I.displaysScreenshots=!1}if(s(x)){const t=xr(n,x.adamId)
i(t)&&(e.props.enabled(XB)?null===(T=x.searchAdOpportunity)||void 0===T||T.setDuplicatePosition(t):null===(S=x.searchAd)||void 0===S||S.setDuplicatePosition(t)),I.lockups.push(x),uf(c.locationTracker),E=!1}}if(sf(c.locationTracker),s(I.lockups)){const n=t[0]
c.pageInformation.iAdInfo.apply(e,n),uf(c.locationTracker)}return O?null===(P=c.pageInformation.iAdInfo)||void 0===P||P.setTemplateType(O.style):null===(b=c.pageInformation.iAdInfo)||void 0===b||b.setTemplateType(null),I.condensedBehavior=rG,{result:I,displayStyle:null==O?void 0:O.style}}(e,u,c,t,a,null!=f?f:null,null!=p?p:null,S,b)
I=n.result,C=n.displayStyle,s(null==I?void 0:I.lockups)&&(I.searchAdOpportunity=I.lockups[0].searchAdOpportunity,A.push(I))}let k=!0
const O=lw(n,e)
for(const[l,P]of c.entries()){if(l===O){const r=dw(e,t.requestDescriptor,d,a)
if(r.length>0){const t=null!==(g=null===(w=null===(h=null==n?void 0:n.displayStyle)||void 0===h?void 0:h.guidedSearch)||void 0===w?void 0:w.title)&&void 0!==g?g:e.loc.string("Search.Guided.Title.ExploreMore"),o=new DQ(t,r)
gf(e,o,{...a,id:eL,kind:J$,targetType:pC,title:t,softwareType:null}),A.push(o),uf(a.locationTracker)}}if(!i(P.attributes)){T.push(...c.slice(l))
break}if(tt(e,P,10750))continue
k&&s(null==I?void 0:I.lockups)&&Wr(e,null!=u?u:[],I,P,null!=f?f:null,null!=p?p:null,a,b)
const E=Sr(e,P,n,b,a,t.requestDescriptor.isNetworkConstrained,t.requestDescriptor.searchEntity,S)
E&&(k&&s(I)&&s(I.lockups)&&Hr(0,I,E,S,C),k&&qr(e)&&i(null===(m=a.pageInformation)||void 0===m?void 0:m.iAdInfo)&&(r(I)||o(null==I?void 0:I.lockups))&&(E.searchAdOpportunity=Qr(e,a.pageInformation),null===(v=E.searchAdOpportunity)||void 0===v||v.setMissedOpportunityReason(eD),null===(y=E.searchAdOpportunity)||void 0===y||y.setTemplateType(bB)),A.push(E),k=!1,uf(a.locationTracker))}return await async function(e,t){return await Pg.context("applyClientFilteringToIAPs",async()=>{const n={}
for(const e of t)if(e.resultType===cN){const t=e.lockup
t.parent&&t.productIdentifier&&t.parent.bundleId?n[t.productIdentifier]=t.parent.bundleId:Pg.unexpectedNull(SG,vj,`required fields for ${t.adamId}`)}return 0===Object.keys(n).length?await Promise.resolve(t):await e.clientOrdering.visibilityForIAPs(n).then(e=>t.filter(t=>{if(t.resultType!==cN)return!0
const n=t.lockup
return!(!n.productIdentifier||!e[n.productIdentifier])||n.isVisibleByDefault}))})}(e,A).then(e=>({builtSearchResults:e,deferredSearchResults:T}))}function dw(e,t,n,r){if((0,bg.isNothing)(n)||0===n.length)return[]
of(0,{pageInformation:r.pageInformation,locationTracker:r.locationTracker,targetType:GE},"")
const o=[]
for(const i of n){const n=rw(e,OP,t,i,r)
n&&(o.push(n),uf(r.locationTracker))}return sf(r.locationTracker),o}function fw(e,t,n,r){const o=new AQ(t,t,null,r)
return o.spellCheckEnabled=!1,o.excludedTerms=[n],o.originatingTerm=n,o}function pw(e,t){return t&&t.results?t.results.slice(0,t.maxPerPage):[]}function hw(e,t){let n=[]
if(t&&t.results&&(n=t.results.slice(t.maxPerPage,t.results.length)),o(n))return null
const r={...t}
return r.results=n,r}function ww(e,t){const n=e.bag.searchResultsLearnMoreEditorialId
if((0,Ig.isNothing)(n)||0===(null==n?void 0:n.length))return
const r={kind:uN,softwareType:null,title:e.loc.string(kP),id:n,targetType:pj,pageInformation:t.pageInformation,locationTracker:t.locationTracker},o=e.loc.string("SEARCH_TRANSPARENCY_TEXT"),i=new Bq(KG)
i.title=o,i.pageUrl=`https://apps.apple.com/story/id${n}`,$f(e,i,r)
const s={}
s[`${e.loc.string(kP)}`]=i
const a=new FV(o,wU)
return new mz(a,s)}function gw(e){return(0,Ig.isSome)(e)&&0!==e.length?`SearchResults.${e}.shelfId`:"SearchResults.shelfId"}function mw(e){switch(e){case lm.iOS:return mj
case lm.visionOS:return"visionos"
default:return"SearchTopResults"}}function vw(e,t){const n=new fQ
return i(t)&&(n.facets=iw(e,t),n.pageFacets=sw(e),n.selectedFacetOptions=aw(e)),n.results=[],n}function yw(e,t){const n=new hQ([])
return i(t)&&(n.facets=iw(e,t),n.pageFacets=sw(e),n.selectedFacetOptions=aw(e)),n}async function Aw(e,t){return await Pg.context("searchResultsFromResponse",async()=>{var n
const a=null!==(n=e.fetchTimingMetricsBuilder)&&void 0!==n?n:new Ag.FetchTimingMetricsBuilder,c=await a.measureModelConstructionAsync(async()=>{var n,a,c,l,u,d,f,p,h,w,g,m,v,y,A,T,S,P,b,I
const C=t.catalogResponse,k=t.requestMetadata,O=k.searchRequestUrl,E=t.sponsoredSearchRequestData,R=C.results.guidedSearch,D=function(e,t,n){var r,o,i,s,a,c,l
return{term:t.term,suggestedTerm:null===(o=null===(r=n.results)||void 0===r?void 0:r.spellCheck)||void 0===o?void 0:o.suggestedTerm,correctedTerm:null===(s=null===(i=n.results)||void 0===i?void 0:i.spellCheck)||void 0===s?void 0:s.correctedTerm,resultsTerm:null!==(l=null===(c=null===(a=n.results)||void 0===a?void 0:a.spellCheck)||void 0===c?void 0:c.correctedTerm)&&void 0!==l?l:t.term,originatingTerm:t.originatingTerm}}(0,k.requestDescriptor,C),_=(b=t.sponsoredSearchAdvertData)&&b.odmlSuccess,x={locationTracker:{rootPosition:0,locationStack:[]},pageInformation:ii(e,k.requestDescriptor,C,D,O,mw(),E,_,R),createUniqueImpressionId:!0},M=e.featureFlags.isEnabled("shelves_2_0_search")||!0,$=M?new hQ:new fQ,F=lw(C.meta,e);(0,Ig.isNothing)(F)&&function(e,t,n,r,i){const a=n.requestDescriptor
of(0,{pageInformation:i.pageInformation,locationTracker:i.locationTracker,targetType:GE},"")
const c=[]
if(s(r))for(const t of r){const n=rw(e,RM,a,t,i)
n&&(c.push(n),uf(i.locationTracker))}if(o(c)&&n.requestDescriptor.searchEntity){const t=function(e,t,n){var r
const o=t.searchEntity
if(!o)return null
const i=new m6(null,BE)
let s
switch(function(e,t,n,r,o){const i=PO,s=w_,a={targetId:r},c=kf(e,r,s,{actionType:i,location:nf(0,{pageInformation:null,locationTracker:o.locationTracker,targetType:s},r),searchTerm:n})
t.actionMetrics.addMetricsData(c)
const l=Of(e,n,s,i,null,a)
t.actionMetrics.addMetricsData(l)}(e,i,t.term,o,n),o){case Gj:s=e.loc.string("GUIDED_SEARCH_TOKEN_ENTITY_ARCADE")
break
case mG:s=e.loc.string("GUIDED_SEARCH_TOKEN_ENTITY_DEVELOPERS")
break
case wN:s=e.loc.string("GUIDED_SEARCH_TOKEN_ENTITY_STORIES")
break
case Vj:s=e.loc.string("GUIDED_SEARCH_TOKEN_ENTITY_APPLEWATCH")
break
default:ue(o)}const a=new h6(s,!0,null!==(r=nw(o))&&void 0!==r?r:EP,s,i)
return Xo(0,a,w_,n),a}(e,n.requestDescriptor,i)
c.push(t),uf(i.locationTracker)}const l=function(e,t,n){var r
if(o(n))return null
const i=t.term,s=null!==(r=t.guidedSearchTokens)&&void 0!==r?r:[],a=[]
for(const e of n){const t=e.displayLabel,n=Array.from(s)
if(e.isSelected){const e=n.indexOf(t);-1!==e&&n.splice(e,1)}else n.push(t)
const r=new w6(i,n,e.finalTerm)
a.push(r)}return a}(0,n.requestDescriptor,r)
sf(i.locationTracker),s(c)&&(t.guidedSearchTokens=c,t.guidedSearchQueries=l,function(e,t,n){const r=af(n.locationTracker)
t.guidedSearchTokensParentImpressionMetrics=new EH({impressionIndex:r,impressionType:GE,idType:QF,id:MP,name:"Search Revisions"})}(0,t,i),uf(i.locationTracker))}(e,$,k,null==R?void 0:R.facets,x)
const N={id:bM,kind:null,softwareType:null,targetType:gB,title:pF,pageInformation:x.pageInformation,locationTracker:x.locationTracker,idType:QF}
let B
M&&(B=new $z(tL),B.id=gw(),B.isHorizontal=!1,gf(e,B,N),rf(0,N,pF))
const U=null!==(l=null===(c=null===(a=null===(n=C.meta)||void 0===n?void 0:n.results)||void 0===a?void 0:a.search)||void 0===c?void 0:c.searchSafety)&&void 0!==l&&l,G=U?[]:function(e,t){return function(e,t,n){if(r(n))return t
const i=[],s=t.reduce((e,t)=>({...e,[t.id]:t}),{})
for(const t of n.adverts){const n=s[t.adamId]
if(o(n)){Vr(e,`[${t.adamId}] skipped - Data was not part of original response`)
continue}if(o(n.attributes)){Vr(e,`[${n.id}] skipped - Data is missing attributes`)
continue}const r=ow(e,n,t)
i.push(r)}return i}(e,L(t.catalogResponse.results[RP]),t.sponsoredSearchAdvertData)}(e,t),j=(null===(p=null===(f=null===(d=null===(u=C.meta)||void 0===u?void 0:u.results)||void 0===d?void 0:d.search)||void 0===f?void 0:f.reason)||void 0===p?void 0:p.kind)===VE?"NLS_NORESULTS":"NLS_NOAD"
U&&(null===(h=x.pageInformation)||void 0===h||h.iAdInfo.setMissedOpportunity(e,j,QB))
const V=await uw(e,k,C.meta,x,function(e,t){return L(t.catalogResponse.results.search)}(0,t),G,null==R?void 0:R.facets,function(e){var t,n
return null!==(n=null===(t=e.sponsoredSearchAdvertData)||void 0===t?void 0:t.installedStates)&&void 0!==n?n:{}}(t),function(e){var t,n
return null!==(n=null===(t=e.sponsoredSearchAdvertData)||void 0===t?void 0:t.appStates)&&void 0!==n?n:{}}(t))
if(U&&0!==V.builtSearchResults.length){const e=V.builtSearchResults[0].lockup.searchAdOpportunity
null==e||e.setMissedOpportunityReason(j),null==e||e.setTemplateType(bB)}if(M&&B){const t=$
B.items=V.builtSearchResults,t.resultsParentImpressionMetrics=B.impressionMetrics,t.shelves.push(B)
const n=function(e,t){return Pg.context("createSearchResultsContextCard",()=>{var n,r
if((0,Ig.isNothing)(e)||![OU,vU].includes(t.host.platform))return
if(t.props.isNotEnabled("searchResultsContextCardV2"))return
const o=null===(n=e.links)||void 0===n?void 0:n.map(Tw),i=null==o?void 0:o.reduce((e,t)=>{var n
return(null===(n=t.title)||void 0===n?void 0:n.length)&&(e[t.title]=t),e},{})
let s=e.text
1===(null==o?void 0:o.length)&&(null===(r=o[0].title)||void 0===r?void 0:r.length)?s+=" "+o[0].title:o&&o.length>1&&(s.length>0&&(s+="\n"),s+=o.map(e=>e.title).filter(e=>null==e?void 0:e.length).join("\n"))
const a=new FV(s),c=new mz(a,i)
return new pQ(c)})}(C.results.queryContext,e),r=null===(m=null===(g=null===(w=C.meta)||void 0===w?void 0:w.results)||void 0===g?void 0:g.search)||void 0===m?void 0:m.reason
if((null==r?void 0:r.kind)===VE)t.unavailableReason={title:e.loc.stringWithFallback("Search.Results.Empty.Title","No results"),message:r.text,action:(I=r.links,Pg.context("actionFromSearchResultsLinks",()=>{const e=null==I?void 0:I.find(e=>e.url.length>0)
return e?Tw(e):void 0})),contextCard:n}
else if(n){const r=B.items[0],o=n=>{if((null==r?void 0:r.resultType)===Um&&e.props.isNotEnabled("queryContextCardAboveAd")){const e=new $z(W$)
e.placeholderContentType="banner",e.items=[new _z,new _z],n?t.shelves.unshift(e):t.shelves.push(e)}},i=null!==(T=null===(A=null===(y=null===(v=C.meta)||void 0===v?void 0:v.displayStyle)||void 0===y?void 0:y.queryContext)||void 0===A?void 0:A.position)&&void 0!==T?T:0,s=new $z("searchResultsContextCard")
if(s.items=[n],i>0){const e=B.items.splice(i),n={...B,id:"searchResults2",items:e,isValid:B.isValid}
t.shelves.push(s),o(!1),t.shelves.push(n)}else o(!0),t.shelves.unshift(s)}U&&0===V.builtSearchResults.length&&(null===(P=(S=e.onDeviceSearchHistoryManager).removeRecentSearchTerm)||void 0===P||P.call(S,D.term))}else{const e=$
e.results=V.builtSearchResults,function(e,t,n){const r=af(n.locationTracker)
t.resultsParentImpressionMetrics=new EH({impressionIndex:r,impressionType:gB,idType:QF,id:bM,name:pF})}(0,e,x)}return V.deferredSearchResults.length>0&&($.nextPage=function(e,t,n,r,i){return o(t)?null:{results:t,maxPerPage:30,requestMetadata:n,metricsOptions:i,responseMetadata:null!=r?r:{},contentOffsetWithinResultsShelf:af(i.locationTracker)}}(0,V.deferredSearchResults,k,C.meta,x)),M&&sf(N.locationTracker),$.message=function(e,t,n){const r=i(t.correctedTerm),o=i(t.suggestedTerm)
return of(0,{pageInformation:n.pageInformation,locationTracker:n.locationTracker,targetType:pj},"spellCorrection"),r?function(e,t,n){const r=t.term,o=fw(0,r,t.resultsTerm,bO)
Bf(e,o,Hj,n.locationTracker)
const i=`<i>${t.correctedTerm}</i>`,s=e.loc.string("SEARCH_SHOWING_RESULTS_FOR_TEMPLATE").replace(jE,i),a=new mz(new FV(s,AU),{}),c=e.loc.string("SEARCH_SEARCH_INSTEAD_FOR_TEMPLATE").replace(jE,r),l={}
l[`${c}`]=o
const u=new mz(new FV(c),l)
return new SQ(a,u,o)}(e,t,n):o?function(e,t,n){const r=t.suggestedTerm,o=fw(0,r,t.resultsTerm,IO)
Bf(e,o,Hj,n.locationTracker)
const i=`<i>${r}</i>`,s=e.loc.string("SEARCH_DID_YOU_MEAN_TEMPLATE").replace(jE,i),a={}
a[`${r}`]=o,a[`${r}?`]=o
const c=new mz(new FV(s,AU),a)
return new SQ(c,null,o)}(e,t,n):(sf(n.locationTracker),null)}(e,D,x),!o(k.requestDescriptor.searchEntity)||($.facets=iw(e,k.requestDescriptor.facets,t.categoriesFilterData),$.pageFacets=sw(e,t.categoriesFilterData),$.selectedFacetOptions=s(t.requestMetadata.requestDescriptor.selectedFacetOptions)?t.requestMetadata.requestDescriptor.selectedFacetOptions:aw(e)),$.isAutoPlayEnabled="tv"!==e.client.deviceType,$.isCondensedSearchLockupsEnabled=e.client.isPhone,$.transparencyLink=ww(e,x),ni(e,$,x.pageInformation),$.searchClearAction=Sw(e,B$,x.pageInformation,x.locationTracker,D.term),$.searchCancelAction=Sw(e,fF,x.pageInformation,x.locationTracker,D.term),$})
return c})}function Tw(e){return Pg.context("actionFromSearchResultsLink",()=>{var t
const n=new xH(e.url,!1)
return n.title=null===(t=e.label)||void 0===t?void 0:t.replace(" ","\xa0"),n.artwork=new CV("systemimage://arrow.up.forward",0,0,[]),n})}function Sw(e,t,n,r,o){const s=new aW
let a,c
switch(t){case fF:a=iD,c=fF
break
case B$:a="delete",c=B$}return function(e,t,n,r,o){const s={searchTerm:o,actionType:n.actionType}
n.actionDetails&&(s[XN]=n.actionDetails),n.actionContext&&(s[cT]=n.actionContext),o&&(s[OG]=o),i(n.softwareType)&&(s[l$]=n.softwareType),n.mercuryMetricsData&&Object.assign(s,n.mercuryMetricsData)
const a=kf(e,n.id,null!=r?r:Vd(0,n),s)
t.actionMetrics.addMetricsData(a)}(e,s,{targetType:Hj,id:c,idType:void 0,actionType:a,pageInformation:n,locationTracker:r},Hj,o),s}async function Pw(e,t){const n=function(e){return e.bag.mediaAPISearchHintsEnabled&&lt(e,e.bag.mediaAPISearchHintsRolloutRate)}(e)
return function(e,t,n,r){return Pg.context("searchHintsFromApiResponse",()=>{var o,i,s,a
const c={targetType:aA,pageInformation:oi(0,0,n.hintsRequestUrl,n.dataSetId),locationTracker:{rootPosition:0,locationStack:[]}}
let l=null;(null===(o=n.userTypedTerm)||void 0===o?void 0:o.length)&&(l=new AQ(n.userTypedTerm,n.userTypedTerm,null,CO),l.spellCheckEnabled=!0,l.prefixTerm=t,Pf(e,l,c),Bf(e,l,c.targetType,c.locationTracker,c.pageInformation),uf(c.locationTracker))
const u=null!==(s=null===(i=n.rawHints)||void 0===i?void 0:i.map(n=>function(e,t,n,r,o){var i,s,a,c,l
const u=null!==(i=function(e,t,n,r,o){if(!t)return n
switch(r){case zj:return o
case SU:return mG
case _j:return wN
default:return null}}(0,o,t.hintsEntity,t.entity,t.context))&&void 0!==i?i:void 0,d=new AQ(null!==(s=t.displayTerm)&&void 0!==s?s:"",null!==(a=t.searchTerm)&&void 0!==a?a:"",null,s$,u,t.source)
return d.artwork=function(e,t){return ce(e,`systemimage://${t}`)}(e,null!==(c=nw(u))&&void 0!==c?c:EP),d.spellCheckEnabled=!0,d.prefixTerm=n,Pf(e,d,r),Bf(e,d,r.targetType,r.locationTracker,null!==(l=r.pageInformation)&&void 0!==l?l:void 0),uf(r.locationTracker),d}(e,n,t,c,r)))&&void 0!==s?s:[]
null!=l&&u.unshift(l)
const d=new TQ(u,null!==(a=n.ghostHintsTerm)&&void 0!==a?a:null),f=Of(e,t,"key",_T,n.hintsRequestUrl,{...wt(c.pageInformation)})
return d.pageMetrics.pageFields=wt(c.pageInformation),d.pageMetrics.addData(f,[Mg.PageInvocationPoint.pageEnter]),d.searchClearAction=Sw(e,B$,c.pageInformation,c.locationTracker,t),d.searchCancelAction=Sw(e,fF,c.pageInformation,c.locationTracker,t),d})}(e,t,await async function(e,t,n){if(n){const n=function(e,t){const n=new zz(e).includingAppBinaryTraitsAttribute(!1).forType(X_).withLimit(10).withSearchTerm(t).addingQuery(ME,bP)
e.host.clientIdentifier===nH&&n.addingQuery(zN,LG)
const r=[]
return e.appleSilicon.isSupportEnabled&&r.push(Q_),Oi(e)&&r.push(VG),e.bag.isNaturalLanguageSearchEnabled&&r.push(IP),r.length>0&&n.enablingFeatures(r),n}(e,t)
return await Tn(e,n).then(t=>{var r
return{hintsRequestUrl:qe(e,n).toString(),userTypedTerm:d(t,SP),rawHints:c(t,"results.suggestions"),ghostHintsTerm:d(t,PP),dataSetId:d(null===(r=t.meta)||void 0===r?void 0:r.metrics,wX)}})}{const n=function(e,t){let n=xq.from(e.bag.searchHintsURL).param("caller",xL).param("v","4")
r(t)||(n=n.param(gN,t))
const o=e.host.clientIdentifier
n=o===tH?n.param(rO,"watchSoftware").param(xE,Vk):o===nH?n.param(xE,Hk):n.param(xE,wB)
const i=[]
return e.appleSilicon.isSupportEnabled&&i.push(Q_),Oi(e)&&i.push(VG),i.length>0&&(n=n.param(tx,i.join(","))),n.build()}(e,t),o={url:n,signingStyle:jN}
return await async function(e,t){return await async function(e,t,n){const o=await e.network.fetch(t)
if(!o.ok)throw Error(`Bad Status code ${o.status} for ${t.url}`)
const s=Date.now(),a=n(o.body),c=Date.now()
if(a){const e=function(e,t,n){return r(e)||0===e.length?null:{...e[0],parseStartTime:t,parseEndTime:n}}(o.metrics,s,c)
i(e)&&(a[um.timingValues]=e)}return a[um.requestedUrl]=t.url.toString(),a}(e,t,n=>{if((0,bg.isSome)(n))return e.plist.parse(n)
throw new Error(`Could not fetch Plist, response body was not defined for ${t.url}`)})}(e,o).then(e=>({hintsRequestUrl:n,userTypedTerm:d(e,SP),rawHints:c(e,s$),ghostHintsTerm:d(e,PP)}))}}(e,t,n),n)}function bw(e,t,n,r,i){const s=function(e,t,n,r,i){if(o(i))return[]
const s=[]
for(const[a,c]of i.entries()){const i=Iw(e,c,a,t,n,r)
o(i)||(s.push(i),uf(n))}return s}(e,n,r,t.itemDisplayStyle,i),a=new PW
a.title=e.loc.string("Action.ClearSearches"),function(e,t){const n=kf(e,"Clear Searches",Hj,{actionType:"confirm"})
t.actionMetrics.addMetricsData(n)}(e,a)
const c=new QH([a])
c.title=e.loc.string("Sheet.ClearSearches.Title"),c.message=e.loc.string("Sheet.ClearSearches.Message"),c.destructiveActionIndex=0,c.isCancelable=!0
const l=new MH([c])
l.title=e.loc.string("Action.Clear")
const u="word_cloud"===(f=t.shelfDisplayStyle).layout?VP:2===f.layoutSize?"twoColumnList":FP,d=new $z(u)
var f
return d.id=jP,d.presentationHints={isWidthConstrained:!0},d.header={title:t.title,accessoryAction:l},d.contentType===VP&&(d.isHorizontal=!0,d.rowsPerColumn=t.shelfDisplayStyle.layoutSize),d.contentsMetadata={type:"searchFocusTwoColumnList",numberOfColumns:s.length>1?t.shelfDisplayStyle.layoutSize:1},d.items=s,d.isHidden=o(s),d.refreshUrl=function(e){return`${CW}:/${oq}/${RW}/?${Aq.isOnDeviceSearchHistoryShelf}=true&${Aq.token}=${function(e){return encodeURIComponent(JSON.stringify(e))}(e)}`}(t),d}function Iw(e,t,n,r,o,i){const s=t.term,a=t.entity,c=Rw(e,function(e,t,n){if((0,bg.isNothing)(n))return t
let r
return n===mG?r="Search.ResultsTitle.InDevelopers":n===wN?r="Search.ResultsTitle.InStories":n===Vj?r="Search.ResultsTitle.InWatch":n===Gj&&(r="Search.ResultsTitle.InArcade"),(0,bg.isNothing)(r)?t:e.loc.string(r).replace("@@search_term@@",t)}(e,s,a),s,a,o,SO,void 0,r,i)
return(0,bg.isNothing)(c)?null:(c.id=t.id,gf(e,c,{targetType:pj,pageInformation:r,locationTracker:o,kind:pj,softwareType:null,title:t.term,hintsEntity:t.entity,id:`${n}`,idType:fj}),c)}function Cw(e,t,n){var r
const i=t.data
if(o(i))return
let s=0
const a=e.bag.mediaAPISearchFocusEnabled&&(0,bg.isSome)(n.pageType)
for(const c of i){if(o(c))continue
if(a){const e=p(c,IU),t=kw(null==e?void 0:e.category)
if((0,bg.isSome)(t)&&t!==n.pageType)continue}const i=Lw(e,n,s,t.meta||null);(0,bg.isSome)(i)&&(n.shelves.push(i),uf(n.metricsLocationTracker))
const l=q(c,"contentKind"),u=Wh(0,c,l),d=xw(0,c,u,n,l)
rf(0,d.metricsOptions,null!==(r=u.title)&&void 0!==r?r:"")
const f=Ow(e,c,n,d,u,l)
sf(n.metricsLocationTracker),o(f)||(gf(e,f,d.metricsOptions),ao(e,[f],yU,d.metricsOptions.id,n.metricsPageInformation),n.shelves.push(f),s+=1,uf(n.metricsLocationTracker))}}function kw(e){switch(e){case IM:return ym.Landing
case"search-focus":return ym.Focus
default:return}}function Ow(e,t,n,c,l,u){switch(u){case jg.Suggestion:return n.pageType===ym.Focus?function(e,t,n,r,i){var s,a,c
const l=se(t,qj)
if((0,bg.isNothing)(l))return null
const u=[],d=new $z(FP)
d.isHorizontal=!1,d.title=r.title,d.presentationHints={isWidthConstrained:!0}
for(const[t,i]of l.entries()){const l=q(i,OG)
if((0,bg.isNothing)(l)||0===l.length)continue
const d=null!==(s=q(i,QE))&&void 0!==s?s:l,f=Rw(e,null!=d?d:"",null!=l?l:"",void 0,n.metricsLocationTracker,QM,void 0,n.metricsPageInformation,null!==(a=r.searchLandingItemDisplayStyle)&&void 0!==a?a:void 0);(0,bg.isNothing)(f)||o(f)||(gf(e,f,{targetType:pj,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,kind:pj,softwareType:null,title:null!==(c=f.title)&&void 0!==c?c:"",id:`${t}`,idType:fj}),u.push(f),uf(n.metricsLocationTracker))}return o(u)?null:(d.items=u,d)}(e,t,n,l):function(e,t,n,i,s){var c
const l=se(t,qj),u=[],d=new $z(_G)
d.isHorizontal=!1,d.title=i.title,d.presentationHints={isWidthConstrained:!0}
for(const[t,o]of l.entries()){const s={targetType:pj,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},a=Ew(e,o,n,i)
r(a)||r(a.action)||(gf(e,a.action,{...s,kind:pj,softwareType:null,title:a.action.title,id:`${t}`,idType:fj}),u.push(a),uf(n.metricsLocationTracker))}return o(u)?null:(d.items=u,a(null===(c=i.displayStyle)||void 0===c?void 0:c.layoutSize)?d.contentsMetadata={type:Ox,numberOfColumns:i.displayStyle.layoutSize}:(e.client.isPhone||e.client.isPad)&&(d.contentsMetadata={type:Ox,numberOfColumns:u.length>=6?2:1}),d)}(e,t,n,l)
case jg.CategoriesAndCharts:return Qh(e,t,!1,l,0,c)
case jg.Apps:return function(e,t,n,o,a){var c,l,u,d,f
const p=[]
let h=!1,w=function(e){const t=re(e,qj)
return null==t?void 0:t.data}(t)
const g=new $z(a.shelfStyle)
if(g.isHorizontal=!1,g.title=o.title,g.shouldFilterApps=!1,g.filteringExcludedItems=a.filteringExcludedItems,s(w)){const t=function(e,t,n){const o=nc(t.adStitcher,n.adPositionInfo)
if(r(o))return null
const s=o.data
try{const r=_w(e,s,t,n)
return i(r)?n.filteringExcludedItems=[s.id]:mo(e,t.adIncidentRecorder,s),r}catch(n){return Vr(e,`Failed to create SLP ad lockup: ${n}`),mo(e,t.adIncidentRecorder,s),null}}(e,n,a)
t&&t instanceof nz&&(h=!0,p.push(t),uf(n.metricsLocationTracker),w=w.filter(e=>e.id!==t.adamId))}const m=(0,bg.isSome)(o.displayCount)
s(w)&&(w=ko(w,null!==(c=n.recoImpressionData)&&void 0!==c?c:{},null!==(u=null===(l=a.metricsOptions)||void 0===l?void 0:l.recoMetricsData)&&void 0!==u?u:{}))
for(const t of w){if(t.type===Uj)return null
if(r(t.attributes))continue
if(tt(e,t,80894))continue
const o=_w(e,t,n,a)
o&&(p.push(o),uf(n.metricsLocationTracker))}if(m){const e=o.displayCount
g.items=p.slice(0,e)}else g.items=p
if(m){const r=new $z(a.shelfStyle)
r.items=h?p.splice(1,p.length-1):p
const i=new Gz([r])
i.title=g.title
const s=new Bq(Jj)
s.pageUrl=o.seeAllLink,s.title=e.loc.string(UU),s.pageData=i,g.seeAllAction=s,Ff(e,s,s.pageUrl,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker}),ni(e,i,ri(0,t.id))}return"horizontal"===(null===(d=o.displayStyle)||void 0===d?void 0:d.layout)&&(g.isHorizontal=!0,g.rowsPerColumn=null===(f=o.displayStyle)||void 0===f?void 0:f.layoutSize),g}(e,t,n,l,c)
case jg.EditorialCollection:return null
default:return function(e,t,n,r,o){return"search-recommendations-marker"!==t.type?null:q(t,Rx)===$P?function(e,t,n){return bw(e,new A6(n.title,n.displayCount,n.displayStyle,n.searchLandingItemDisplayStyle),t.metricsPageInformation,t.metricsLocationTracker,t.searchHistory)}(e,n,o):null}(e,t,n,0,l)}}function Ew(e,t,n,r){var o,i
const s=q(t,OG)
if((0,bg.isNothing)(s)||0===s.length)return null
const a=null!==(o=q(t,QE))&&void 0!==o?o:s,c=new AQ(a,s,null,QM,void 0,void 0)
return c.artwork=Dw(null!==(i=r.searchLandingItemDisplayStyle)&&void 0!==i?i:void 0,e),Bf(e,c,Hj,n.metricsLocationTracker),(0,bg.isSome)(c)?new cW(c):null}function Rw(e,t,n,r,i,s,a,c,l){if(o(n))return null
const u=new AQ(t,n,null,s,null!=r?r:void 0,a,[])
return u.artwork=Dw(l,e),Bf(e,u,Hj,i,c),u}function Dw(e,t){var n
return(null==e?void 0:e.iconKind)===Wg.Symbol&&(null===(n=null==e?void 0:e.iconKind)||void 0===n?void 0:n.length)?ce(t,`systemimage://${e.iconSymbol}`):t.client.isPhone?ce(t,kx):void 0}function _w(e,t,n,s){if(o(t))return null
if(s.shelfStyle!==gj)return null
let a=null
!i(s.shelfBackground)||s.shelfBackground.type!==NU&&s.shelfBackground.type!==$D||(a=cj)
const c=wu(e,t,{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:$(t),isAdvert:zr(0,t)},artworkUseCase:Fu(0,s.shelfStyle),offerStyle:a,canDisplayArcadeOfferButton:Nd(0,s.shelfStyle),isContainedInPreorderExclusiveShelf:!1,shouldHideArcadeHeader:!1})
return r(c)||!c.isValid()?null:c}function Lw(e,t,n,o){var i
const s=nc(t.adStitcher,{shelfIdentifier:Q0,slot:n})
if(r(s))return null
const a=s.data
try{switch(null===(i=null==o?void 0:o.adDisplayStyle)||void 0===i?void 0:i.format){case qD:return function(e,t,n){var r,o,i
const s=new $z(JE)
s.isHorizontal=!1
const a=kj,c=cj,l=Tf(e,t,d(t.attributes.name),{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,targetType:$U,recoMetricsData:$(t),isAdvert:zr(0,t)})
l.kind=KE,l.pageInformation.iAdInfo.apply(e,t)
const u={offerEnvironment:a,offerStyle:c,metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:$(t),isAdvert:zr(0,t),disableFastImpressionsForAds:!0},artworkUseCase:Fu(0,JE),canDisplayArcadeOfferButton:Nd(0,JE)},f={showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}}
let p=Su(e,t,u,f,null,!1)
const h=p.screenshots[0],w=Zr(h)
n.metricsPageInformation.iAdInfo.setTemplateType(w)
const g=ju(e,t,{useCase:0,withJoeColorPlaceholder:!0,overrideTextColorKey:nL})
p=Su(e,t,u,f,null,!1),e.props.enabled(XB)?null===(r=p.searchAdOpportunity)||void 0===r||r.setTemplateType(w):null===(o=p.searchAd)||void 0===o||o.setTemplateType(w)
const m=g.backgroundColor,v=g.textColor,y=new HY(p,[h],!0,v,m,null!==(i=e.bag.todayAdMediumLockupScreenshotsRiverSpeed)&&void 0!==i?i:8)
return yf(e,y,l,l.pageInformation.iAdInfo),y.clickAction=Cu(e,t,l,null),s.items=[y],s}(e,a,t)
case"condensed":return function(e,t,n){var r,o,i
const s=new $z(ZE)
s.isHorizontal=!1
const a=kj,c=cj,l=Tf(e,t,d(t.attributes.name),{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,targetType:$U,recoMetricsData:$(t),isAdvert:zr(0,t)})
l.kind=KE,l.pageInformation.iAdInfo.apply(e,t)
const u={offerEnvironment:a,offerStyle:c,metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:$(t),isAdvert:zr(0,t),disableFastImpressionsForAds:!0},artworkUseCase:Fu(0,ZE),canDisplayArcadeOfferButton:Nd(0,ZE)}
null===(r=n.metricsPageInformation.iAdInfo)||void 0===r||r.setTemplateType(bB)
const f=Su(e,t,u,{showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}},null,!1)
e.props.enabled(XB)?null===(o=f.searchAdOpportunity)||void 0===o||o.setTemplateType(bB):null===(i=f.searchAd)||void 0===i||i.setTemplateType(bB)
const p=new WY(f,f.icon)
return yf(e,p,l,l.pageInformation.iAdInfo),s.items=[p],s}(e,a,t)
default:return mo(e,t.adIncidentRecorder,a),null}}catch(n){return Vr(e,`Failed to create SLP ad shelf: ${n}`),mo(e,t.adIncidentRecorder,a),null}}function xw(e,t,n,r,o=null){const i=qh(0,t,n,r)
return o===jg.Apps?{...i,shelfStyle:gj,adPositionInfo:Z0}:i}async function Mw(e,t){const n=new Ag.FetchTimingMetricsBuilder,r=e.addingFetchTimingMetricsBuilder(n),o=await Vp(r,t)
return null===o?yw(e,t.facets):await async function(e,t){return await Aw(e,t)}(r,o)}async function $w(e,t){return await async function(e,t){return await Pg.context("paginatedSearchResultsPageWithToken",async()=>{const n=pw(0,t),r=hw(0,t)
return 0===n.length?await Promise.resolve(yw(e)):await Hp(e,n).then(async n=>{const o=L(n),s={id:bM,kind:null,softwareType:null,targetType:gB,title:pF,pageInformation:t.metricsOptions.pageInformation,locationTracker:t.metricsOptions.locationTracker,idType:QF},a=new $z(tL)
return a.id=gw(),a.isHorizontal=!1,gf(e,a,s),rf(0,s,pF),lf(s.locationTracker,t.contentOffsetWithinResultsShelf),await uw(e,t.requestMetadata,t.responseMetadata,t.metricsOptions,o).then(n=>{const o=ww(e,s),c=function(e,t,n,r,o=0){let i=function(e){const t=e.bag.searchResultsLearnMoreEditorialId
!(0,Ig.isNothing)(t)&&(null==t||t.length)}(e)
const s=n.builtSearchResults.length,a=n.deferredSearchResults.length>0,c=o+s
if(void 0===i||void 0===t||o>=i||a&&c<i||0===c&&!a)return r.items=n.builtSearchResults,[r]
i-=o,r.items=n.builtSearchResults.slice(0,i)
const l=new $z("searchResultsLearnMoreNotice")
l.isHorizontal=!1
const u=new _Q(t)
l.items=[u]
const d=[r,l],f=n.builtSearchResults.slice(i)
if(f.length>0){const e=new $z(tL)
e.impressionMetrics=r.impressionMetrics,e.isHorizontal=!1,e.items=f,d.push(e)}return d}(e,o,n,a,t.contentOffsetWithinResultsShelf),l=new hQ(c)
return i(r)&&(r.contentOffsetWithinResultsShelf=af(s.locationTracker),l.nextPage=r),l.isCondensedSearchLockupsEnabled=e.client.isPhone,l.resultsParentImpressionMetrics=a.impressionMetrics,sf(t.metricsOptions.locationTracker),l.searchClearAction=Sw(e,B$,t.metricsOptions.pageInformation,t.metricsOptions.locationTracker,t.requestMetadata.requestDescriptor.term),l.searchCancelAction=Sw(e,fF,t.metricsOptions.pageInformation,t.metricsOptions.locationTracker,t.requestMetadata.requestDescriptor.term),l})})})}(e,t)}function Fw(e){return O(e)}function Nw(e){return k6}function Bw(e,t,n){var r,o
t.includingAdditionalPlatforms(Fw(e)).includingAttributes(Nw()).includingScopedAttributes(LB,[_F]).includingScopedRelationships(_j,[wG,lL]).includingScopedRelationships(LB,[lL]).enablingFeature("editorialItemGroups").usingCustomAttributes($e(e)).includingRelationshipsForUpsell(!0),n&&(t.includingAssociateKeys(LB,[HU,GB]),t.includingAssociateKeys(_j,[GB])),Oi(e)&&(t.enablingFeature(VG),t.addingQuery(IU,_x),t.includingScopedRelationships(Uj,[Oj]),t.includingScopedAttributes(Uj,[yj,zU,DU])),Ri(e)&&(t.enablingFeature(M$),n&&t.includingKindsKeys(YU,[ex])),Eo(e)&&t.enablingFeature("eiGroupEISelectionOnDevice"),ro(e,Dj)&&t.enablingFeature("adSupport"),t.includingAttributes([$$]),t.enablingFeature("heroStyles"),t.includingAttributes([x$])
const i=null!==(o=null===(r=e.userDefaults)||void 0===r?void 0:r.bool(kA))&&void 0!==o&&o
e.bag.enableDeviceDrivenDiscoveryContent&&i&&t.resourceType===Dj&&t.addingQuery("pairedDevices","visionPro")}async function Uw(e,t){const n=e.required(C2),a=t.url===ob,l=-1!==t.url.indexOf(ZW)
if(a)return await n.fetchPage(e,t.url,TY)
if(l){const r=xq.from(t.url)
return r.param(Aq.fetchData,zG),await n.fetchPage(e,r.build(),TY)}{const n=function(e){return new zz(e).forType(Dj).withSparseCount(1).withSparseLimit(2)}(e)
Bw(e,n,!0)
const a=new Tm.FetchTimingMetricsBuilder,l=e.addingFetchTimingMetricsBuilder(a),u=(0,Ig.isSome)(t.experimentIdHeader)?{"X-Apple-User-Experiment-Ids":t.experimentIdHeader}:void 0,f=Tn(l,n,{headers:u})
f.then(t=>{ro(e,Dj)&&function(e,t){const n=io(e,t,!0)
r(n)||(e.ads.setTimeoutForCurrentOnDeviceAdFetch(t,n),function(e,t,n){e.timeoutManager.setTimeout(t,n)}(e,n,X5))}(e,Dj),sc(e,e.user.dsid,t)})
const p=new X0(f),h=function(e,t){const n={}
if(s(t)){const r=new zz(e).withIdsOfType(t,_j).includingAdditionalPlatforms(Fw(e)).includingAttributes(Nw())
n[Sm.OnboardingCards]=new X0(Tn(e,r,{}).catch(()=>{}),!1)}ro(e,Dj)&&(n[Sm.Ads]=new X0(Hh(e,Dj).catch(()=>null),!1)),function(e){const t=vr(e),n=lt(e,e.bag.todayTabArcadePersonalizationRate)
return t&&n}(e)&&(n[Sm.ODP]=new X0(async function(e,t){return await async function(e,t,n,r){const o=[t,e.timeoutManager.makePromise(r,void 0)]
return await Promise.race(o).then(e=>e)}(e,async function(e){try{const t=await async function(e,t){if(o(t.user.dsid)){const e=`${e6}: User is currently not signed in.`
throw Pg.unexpectedType(EG,e,null),new Error(e)}try{const n=c((await t.onDeviceRecommendationsManager.performRequest({type:"fetchUseCases",tab:e,dsId:t.user.dsid})).useCases)
if(o(n)){const t=`${e6}: ODP returned no use cases for tab: ${e}`
throw Pg.unexpectedType(EG,t,null),new Error(t)}return n}catch(t){const n=`${e6}: Failed to fetch ODP use cases for tab: ${e}, with error: ${t}`
throw Pg.unexpectedType(EG,n,null),new Error(n)}}(Dj,e),n=t.map(t=>new X0(async function(e,t){try{const n=await async function(e,t){if(o(t.user.dsid))throw new Error(`${e6}: User is currently not signed in.`)
try{return await t.onDeviceRecommendationsManager.performRequest({type:nS,dsId:t.user.dsid,useCase:e})}catch(t){const n=`${e6}: Failed to perform ODP Today recommendation for useCase: ${e}, with error: ${t}`
throw Pg.unexpectedType(EG,n,null),new Error(n)}}(t,e),i=await async function(e,t){const n=c(t[rS])
if(o(n)){const t=`${e6}: ODP returned no candidates for useCase: ${e}`
throw Pg.unexpectedType(EG,t,null),new Error(t)}const i=m(t[CB]),a=n.map(e=>function(e){const t=d(e.id),n=d(e.type)
if(r(t))return
let o,i=[]
switch(n){case YO:i=c(e.candidates).map(e=>d(e.id)).filter(e=>(0,Ig.isSome)(e)),o=LB
break
case uN:o=_j
break
default:return}let a=[]
if(a.push({id:t,type:o}),s(i)){const e=i.map(e=>({id:e,type:_j}))
a=a.concat(e)}return new r6(t,o,i,a)}(e)).filter(Ig.isSome)
if(r(i)||o(a)){const t=`${e6}: ODP candidates could not be parsed for useCase: ${e}`
throw Pg.unexpectedType(EG,t,null),new Error(t)}return{candidates:a,metrics:i}}(t,n),a=i.metrics,l=i.candidates
if(0===l.length)return
const u=l[0],f=await async function(e,t,n,r){const o=new zz(r,t.data,!0).addingQuery(Aq.onDevicePersonalizationUseCase,e).addingQuery(Aq.filterRecommendable,zG)
Qn(r,o)
try{const i=await Tn(r,o)
return new n6(e,[t],n,i)}catch(e){const n=`${e6}: Failed to fetch Media API data for: ${t.data}, with error: ${e}`
throw Pg.unexpectedType(EG,n,null),new Error(n)}}(t,u,a,e)
return f}catch(n){return void e.console.log(`${e6}: Failed to perform ODP Today recommendation for useCase: ${t}, with error: ${n}`)}}(e,t),!1)),i=(await ic(n)).map(e=>{if(e.status===fD)return e.value}).filter(Ig.isSome)
return new t6(i)}catch(t){return void e.console.log(`${e6}: Failed to perform ODP for Today recommendations: ${t}`)}}(e),0,X5)}(e).catch(()=>{}),!1))
const i=e.amsEngagement
if(i&&Eo(e)){const e={timeout:1e3,eventType:cX,tab:Dj}
n[Sm.AMDData]=new X0(i.performRequest(e),!1)}return n}(e,t.onboardingCardIds),w=await lc(e,p,h)
if(i(w.primaryPageDataFetchFailureReason))throw w.primaryPageDataFetchFailureReason
if(i(w.requiredAdditionalDataFailureReason))throw w.requiredAdditionalDataFailureReason
return a.measureModelConstruction(()=>{var t,n
const r=L(w.additionalData[Sm.OnboardingCards]),i=w.additionalData[Sm.Ads],s=w.additionalData[Sm.ODP],a=w.additionalData[Sm.AMDData],u=function(e,t,n,r,i){const s=[]
let a=o(r)
const l=Do(e,t)
let u=0
for(const i of t){if(o(i.contents))continue
const t=mr(e,Dj,i.contents,!0,l)
i.contents=t.personalizedData,i.onDevicePersonalizationProcessingType=t.processingType
let f=!0
const p={label:i.label,title:i.title,meta:i.meta,date:i.date,onDevicePersonalizationProcessingType:i.onDevicePersonalizationProcessingType,isTodayForAppsModule:x(i)}
if(!a){for(const e of r)s.push({type:pm.EditorialItem,data:e,isDataHydrated:K(e),isFirstItemInModule:f,moduleMetadata:{...p},containedAdSlots:[u]})
f=!1,a=!0,u+=1}for(let t of i.contents){const r=d(t,"meta.personalizationData.onDeviceUseCase")
switch(t.type){case _j:if((0,Ig.isSome)(r)){const e=null==n?void 0:n.storyData(r);(0,Ig.isSome)(e)&&(t=e)}s.push({type:pm.EditorialItem,data:t,isDataHydrated:K(t),isFirstItemInModule:f,moduleMetadata:{...p},containedAdSlots:[u]}),f=!1,u+=1
break
case LB:const a=c(t,dR)
if(o(a))continue
let d
if((0,Ig.isSome)(r)&&(d=null==n?void 0:n.storyGroupData(r)),(0,Ig.isSome)(d))t=d
else{const n=mr(e,Dj,a,!0,l)
t[IU].associations[HU][VB]=n.personalizedData,i.onDevicePersonalizationProcessingType=n.processingType}s.push({type:pm.EditorialItemGroup,data:t,isDataHydrated:K(t),isFirstItemInModule:f,moduleMetadata:{...p},containedAdSlots:Array.from({length:a.length},(e,t)=>t+u)}),f=!1,u+=a.length}}}return s}(e,null!==(n=null===(t=w.primaryPageData.results)||void 0===t?void 0:t.data)&&void 0!==n?n:[],s,r)
return Gw(l,u,w.primaryPageData,i,a)})}}function Gw(e,t,n,r,i){return Pg.context(vB,()=>{if(o(t))return null
const a=function(e,t,n,r,o){var i,a,l
const u=ei(e,"Today",Dj,n,null,null!==(i=lo(e,Dj,r,t))&&void 0!==i?i:Qo(e,Dj,n,null===(a=null==r?void 0:r.onDeviceAd)||void 0===a?void 0:a.positionInfo,t)),d=Ar(e)
u.recoMetricsData=ef(u.recoMetricsData,null,d)
const f=new OJ(t,u,{rootPosition:0,locationStack:[]},kn(n),Oo(0,o))
if(ro(e,Dj)){const n=ho(e,Dj);(0,Ig.isSome)(n)&&(f.eligibleAdLocations=n.map(e=>e.slot))
const o=wo(0,u.iAdInfo)
if(vo(e,o,r),f.adIncidentRecorder=o,f.adPlacementBehavior=function(e){let t=Gg.insertIntoShelf
for(const n of e){let e=t
switch(n.type){case pm.EditorialItem:e=Ww(n.data)
break
case pm.EditorialItemGroup:const t=c(n.data,dR)
if(s(t))for(const n of t)if(e=Ww(n),e!==Gg.insertIntoShelf)break}if(e!==Gg.insertIntoShelf){t=e
break}}return t}(t),(0,Ig.isNothing)(null==r?void 0:r.failureReason)){f.adData=_(e,null==r?void 0:r.mediaResponse)
const t=null===(l=null==r?void 0:r.onDeviceAd)||void 0===l?void 0:l.positionInfo
if(s(t)){const e=t.slot-1
f.adLocation=e}}}return f}(e,t,n,r,i),l=jw(e,a)
return l.shelves.splice(0,0,Pc(0,"todayPageHeader")),l})}function jw(e,t){var n
const r=[],o=function(e,t){switch(e.client.buildType){case KN:case MF:const e=new xq
e.protocol=kW,e.host=iN,e.pathname=`/${ZW}`
const n=[]
for(const e of t)switch(e.type){case pm.EditorialItem:n.push(e.data.id)
break
case pm.EditorialItemGroup:const t=c(e.data.meta,fR)
n.push(`${e.data.id}:[${t.map(e=>e.id).join(",")}]`)}return e.param(Aq.ids,n.join(",")),e.param(Aq.isTodayFeedPreview,zG),decodeURIComponent(e.build())
default:return null}}(e,t.remainingContent)
let a=Ro(t.remainingContent)
const l=null===(n=t.remainingContent[0])||void 0===n?void 0:n.isFirstItemInModule
for(;a;){const n=t.remainingContent.shift()
if((0,Ig.isNothing)(n)){a=!1
break}const o=jo(e,t);(0,Ig.isSome)(o)&&r.push(o),t.currentTodayItem=n
let i=null
switch(n.type){case pm.EditorialItem:i=No(e,n,t)
break
case pm.EditorialItemGroup:i=Bo(e,n,t)}t.currentTodayItem=void 0,(0,Ig.isSome)(i)&&r.push(i)
const s=jo(e,t);(0,Ig.isSome)(s)&&r.push(s),a=Ro(t.remainingContent)}l&&ao(e,r,Dj,Dj,t.pageInformation)
const u=new TY(r),d=e.loc.string("PAGE_TITLE_TODAY")
return u.title=d,u.tabTitle=d,u.titleDetail=function(e){const t=new Date,n=e.loc.string("Today.ShelfTitle.DateFormat")
return e.loc.formatDate(n,t)}(e),u.shortTitleDetail=function(e){const t=new Date
return e.loc.formatDate("MMM d",t)}(e),u.longTitle=function(e){if(!e.client.isPad)return
const t=new Date,n=e.loc.string("Today.ShelfTitle.DateFormat.IPad")
return e.loc.formatDate(n,t)}(e),u.feedPreviewUrl=o,s(t.remainingContent)?(t.pageHasDisplayedContent=t.pageHasDisplayedContent||r.some(e=>{s(e.items)}),u.nextPage=t):function(e,t,n){const r=[],o=Tc(e)
i(o)&&r.push(o)
const s=e.bag.termsAndConditionsURL
if(i(s)){const t=Sc(e,s)
r.push(t)}return r}(e,t.pageInformation,t.locationTracker).forEach(e=>{u.shelves.push(e)}),ro(e,Dj)&&(u.adIncidents=go(0,t.adIncidentRecorder)),ni(e,u,t.pageInformation),u}async function Vw(e,t){const n=t.pageHasDisplayedContent?6:12
let r=!0,o=0,i=[]
for(;r;){const e=t.remainingContent[o]
switch(e.type){case pm.EditorialItem:i.push(e.data)
break
case pm.EditorialItemGroup:i.push(e.data)
const t=c(e.data,dR)
i=[...i,...t]}o++,r=i.length<n&&o<t.remainingContent.length}const s=new Set(i.map(e=>e.id)),a=new zz(e,i,!0,[HU,GB])
Bw(e,a,!1)
const l=await Tn(e,a,{allowEmptyDataResponse:!0}),u={}
for(const e of l.data)u[e.id]=e
for(const e of t.remainingContent)Hw(e,u)
return t.remainingContent=t.remainingContent.filter(e=>e.isDataHydrated||!s.has(e.data.id)),t}function Hw(e,t){var n,r,o
switch(e.type){case pm.EditorialItem:s(t[e.data.id])&&(e.data={...e.data,...t[e.data.id]}),e.isDataHydrated=K(e.data)
break
case pm.EditorialItemGroup:s(t[e.data.id])&&(e.data={...e.data,attributes:null===(n=t[e.data.id])||void 0===n?void 0:n.attributes,relationships:null===(r=t[e.data.id])||void 0===r?void 0:r.relationships,meta:{...e.data.meta,...null===(o=t[e.data.id])||void 0===o?void 0:o.meta}}),e.isDataHydrated=K(e.data)}}function Ww(e){const t=w(e,ib)
return i(t)&&t?Gg.replaceOrganic:i(t)&&!t?Gg.dropAd:Gg.insertIntoShelf}function qw(e,t){if(i(t.iAdInfo)){const n=m(t.iAdInfo)
s(n)&&(t.iAdInfo=fX.from(e,n))}}async function zw(e,t){const n=Jw().map(e=>new $q(e)),i=new xq(t),s=n.find(e=>e.matches(i)).extractParameters(i),a=i.query[Aq.genre]||s[Aq.genre],c=i.query[Aq.chart]||s[Aq.chart]
let l=i.query[Aq.charts]
if(o(l)){const e=dc(0,c)
l=void 0!==e?`${c},${e}`:c}else l.includes(c)||(l+=`,${c}`)
const u=i.query[Aq.ages],d=new Ag.FetchTimingMetricsBuilder,f=e.addingFetchTimingMetricsBuilder(d),p=fc(f,a,l,u)
let h
return h=pc(e,l,a),await Promise.all([p,h]).then(([t,n])=>d.measureModelConstruction(()=>{const o=jn(e,n),i=r(o)?Bn(a):Un(o)
return Kw(f,t,a,o,c,i)}))}async function Yw(e,t){const n=ot(0,t)
if(0===n.length)return await Promise.resolve(new _6(null,null,null,[]))
let r=new zz(e,n).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes($e(e))
return e.appleSilicon.isSupportEnabled&&(r=r.includingAdditionalPlatforms([fG,hG])),await Tn(e,r).then(n=>{const r=it(0,t)
return Xw(e,n,t,r)})}function Jw(e){return[{path:`/{apiVersion}/catalog/{countryCode}/${GW}`,query:[`${Aq.genre}`,`${Aq.isPPT}?`,`${Aq.charts}?`]},{path:`/{countryCode}/${GW}/{platform}/{chartType}/{genre}`,query:[`${Aq.chart}`]},{path:`/{countryCode}/${GW}/{platform}/{chart}/{genre}`,query:[`${Aq.charts}?`]},{path:`/{countryCode}/${GW}/{platform}`},{path:`/{countryCode}/{platform}/${GW}`},{path:`/{countryCode}/{platform}/${GW}/{genre}`}]}function Kw(e,t,n,o,i,s){return Pg.context("topChartsPageFromApiResponse",()=>{var a
const l=[]
if((0,bg.isSome)(o))for(const t of o.categories)(0,bg.isSome)(t.genreId)&&l.push(Zw(e,t))
const u=function(e){return c(e,"results.apps").filter(e=>!r(e.data))}(t),f=u.map(r=>function(e,t,n,r,o){return Pg.context("segmentFromData",()=>{const{shortName:i,longName:s}=function(e,t,n){let r=d(t,"shortName"),o=d(t,Yj)
if(2!==n)return{shortName:r,longName:o}
const i=e.client.isPad
switch(d(t,TG)){case"top-free":i?(r=e.loc.string("TopCharts.iPadGames.Free.ShortName"),o=e.loc.string("TopCharts.iPadGames.Free.LongName")):(r=e.loc.string("TopCharts.Games.Free.ShortName"),o=e.loc.string("TopCharts.Games.Free.LongName"))
break
case"top-paid":i?(r=e.loc.string("TopCharts.iPadGames.Paid.ShortName"),o=e.loc.string("TopCharts.iPadGames.Paid.LongName")):(r=e.loc.string("TopCharts.Games.Paid.ShortName"),o=e.loc.string("TopCharts.Games.Paid.LongName"))}return{shortName:r,longName:o}}(e,t,o),a=d(t,TG),c=ei(e,"TopChartsPage",r,n,`${a} ${s}`),l={rootPosition:0,locationStack:[]},u=[]
let f=0
const p=[]
for(const n of t.data){const t=eg(e,f,n,c,l)
if(t){if(tt(e,n,68606))continue
u.push(t),uf(l),f++}else p.push(n)}const h=[],w=new $z(gj)
w.items=u,e.featureFlags.isEnabled("shelves_2_0_top_charts"),w.title=s,h.push(w)
const g=new _6(i,s,a,h),m=function(e,t,n,r=null,o,i){return{remainingContent:t,maxPerPage:20,highestOrdinal:0,url:n,metricsPageInformation:o,metricsLocationTracker:i}}(0,p,void 0,t.next,c,l)
return m.metricsPageInformation=c,m.metricsLocationTracker=l,m.highestOrdinal=f,g.nextPage=m,ni(e,g,c),g})}(e,r,t,n,s)).sort((e,t)=>e.chart.localeCompare(t.chart)),p=d(u,"0.href"),h=new xq(p),w=null!==(a=h.query[vG])&&void 0!==a?a:n,g=Qw(w,h.query[C$],l),m=function(e,t){return t.every(e=>function(e){switch(e){case"top-trending-free":case"top-trending-paid":return!0
default:return!1}}(e.chart))?e.loc.string("PAGE_TITLE_TRENDING_CHARTS"):t.every(e=>function(e){switch(e){case"top-emerging-free":case"top-emerging-paid":return!0
default:return!1}}(e.chart))?e.loc.string("PAGE_TITLE_EMERGING_CHARTS"):e.loc.string("PAGE_TITLE_TOP_CHARTS")}(e,f),v=new x6(w,null==g?void 0:g.ageBandId,m,f,null==g?void 0:g.name,l),y=f.findIndex(e=>e.chart===i)
y>=0&&(v.initialSegmentIndex=y)
const A=e.fetchTimingMetricsBuilder
return(0,bg.isSome)(A)&&A.decorate(v),v})}function Zw(e,t){const n=function(e,t,n=null){let r=new zz(e).forType(MM).addingQuery(LF,zj).addingQuery(vG,t).includingMacOSCompatibleIOSAppsWhenSupported(!0)
return n&&(r=r.addingQuery(C$,n)),e.appleSilicon.isSupportEnabled&&(r=r.includingAdditionalPlatforms([fG,hG])),r}(e,t.genreId,t.ageBandId),r=t.children.map(t=>Zw(e,t))
return new L6(t,qe(e,n).toString(),r)}function Qw(e,t,n){for(const r of n){if(t&&r.ageBandId===t||!t&&!r.ageBandId&&r.genreId===e)return r
const n=Qw(e,t,r.children)
if(n)return n}return null}function Xw(e,t,n,r){return Pg.context("topChartSegmentFromLookupResponse",()=>{const o=[]
let i=n.highestOrdinal
const s=L(t)
for(const t of s)tt(e,t,68606)||(o.push(eg(e,i,t,n.metricsPageInformation,n.metricsLocationTracker)),uf(n.metricsLocationTracker),i++)
const a=[]
if(o.length>0){const e=new $z(gj)
e.items=o,a.push(e),r.highestOrdinal=i}const c=new _6(null,null,null,a)
return c.nextPage=r,c})}function eg(e,t,n,r,o){return Pg.context("lockupFromApiChartItem",()=>wu(e,n,{ordinal:e.loc.decimal(t+1),metricsOptions:{pageInformation:r,locationTracker:o},artworkUseCase:1}))}function tg(e,t){const n=Do(e,[t])
if(i(t.contents)){const r=mr(e,"todayWidget",t.contents,!0,n)
t.contents=r.personalizedData}return t}function ng(e,t,n,r,s,a){const c=[]
let l=0,u=0,d=0
for(const a of t.contents){if(Z(a)){l++
continue}const t=se(a,gG),f=ag(e,a,n,r),p=null===f?ig(e,t):[],h=sg(a),w=[null==f?void 0:f.backgroundColor,1===p.length&&null!==p[0]?p[0].backgroundColor:void 0,F("1C68E2")].find(e=>void 0!==e)
if(0===p.length&&null===f){u++
continue}const g=rg(e,a,r)
let m=null,v=null,y=null
if(t.length>0&&t[0].type===Uj){const e=q(t[0],zL)
if(o(e)){d++
continue}y=q(t[0],JL),m=new Date(e)
const n=q(t[0],YL)
v=i(n)?new Date(n):null}const A=Zi(a)
c.push(new U6(a.id,g,h,w,U(w),p,og(e,a,n,g,s),A===dL,f,y,m,v))}return null!==a&&t.contents.length===l+u+d&&a(`All ${t.contents.length} cards in this ${r?"primary":"secondary"} module were filtered due to being unhydrated (${l}), missing artwork (${u}) or missing metadata (${d})`),c}function rg(e,t,n){let r=q(t,GG)
if(!n){const n=Zi(t)
switch(n){case tm.AppOfTheDay:case tm.GameOfTheDay:r=Po(e,t,n,null)}}return r.replace(/\n/g," ")}function og(e,t,n,r,i){let a
switch(n){case m$:a=0
break
case vb:a=1
break
case wR:a=2
break
default:a=-1}const c={widgetId:i,size:a,targetId:t.id,name:r},l=encodeURIComponent(JSON.stringify(c))
switch(Ou(0,t)){case 4:const n=se(t,wG),r=s(n)&&1===n.length?n[0]:se(t,gG)[0],i=ie(e,r,Oj)
if(o(i))break
return`${CW}:/${jW}/${Aq.id}${i.id}?${Aq.appEventId}=${r.id}${Aq.invalidateWidgetsOnFailure}=true&${Aq.metrics}=${l}`
case 3:const a=se(t,gG)[0]
return`${CW}:/${jW}/${Aq.id}${a.id}?${Aq.invalidateWidgetsOnFailure}=true&${Aq.metrics}=${l}`
case 1:return d(H(t,pj),Sj)}return`${CW}:/${YW}/${Aq.id}${t.id}?${Aq.invalidateWidgetsOnFailure}=true&${Aq.metrics}=${l}`}function ig(e,t){return t.map(t=>t.type===jG?null:Nu(e,function(e,t){let n
switch(Kt(e,t)){case"com.apple.AppStore.BridgeStoreExtension":n=tk
break
case"com.apple.MobileSMS":n=nk
break
default:n=Nj}return _e(e,t,Fe(e,t),n)}(e,t),{useCase:25,withJoeColorPlaceholder:!0})).filter(e=>null!==e)}function sg(e){var t
const n=H(e,xU)
let r=null
s(n)&&(r=d(n,Yj))
let o=null
const i=se(e,gG)
switch(i.length>0&&(o=q(i[0],Yj)),q(e,iG)){case tm.AppOfTheDay:case tm.GameOfTheDay:return null!==(t=null!=o?o:r)&&void 0!==t?t:""
default:return null!=r?r:""}}function ag(e,t,n,r,o){let i=null
Zi(t)===dL&&(i=function(e,t,n,r){let o=null,i=null
const s=["editorialVideo.storyCardMotion16x9.previewFrame","editorialVideo.storyCenteredMotion16x9.previewFrame","editorialVideo.storeFrontVideo4x3.previewFrame"]
for(const e of s)if(i=H(t,e),(0,Ig.isSome)(i))break
return i&&(o=Nu(e,i,{withJoeColorPlaceholder:!0,useCase:26}),r||(o.crop="sr")),o}(e,t,0,r))
const s=[{artworkKeyPath:hR,crop:"sr"},{artworkKeyPath:oL,crop:"sr"}]
switch(Zi(t)){case tm.AppOfTheDay:case tm.GameOfTheDay:const e=n===m$?yb:"nr"
s.push({artworkKeyPath:iL,crop:r?e:"fn"})
break
case tm.Video:case tm.FullBleedImage:const t=n===m$?Ab:Tb
s.push({artworkKeyPath:Ix,crop:r?t:"fn"})
break
case tm.AppEventCard:const o=n===m$?yb:"nr"
s.push({artworkKeyPath:sL,crop:r?o:"fn"})
break
default:const i=n===m$?Ab:Tb
s.push({artworkKeyPath:aL,crop:r?i:"fn"})}let a=null
for(const n of s)if(a=Nu(e,H(t,n.artworkKeyPath),{cropCode:n.crop,useCase:26,withJoeColorPlaceholder:!0}),(0,Ig.isSome)(a))break
return null!=a?a:i}async function cg(e,t){let n
switch(t.family){case 1:n=vb
break
case 2:n=wR
break
default:n=m$}let a=null
return typeof t.originalResponseHash!==DB&&null!==t.originalResponseHash&&""!==t.originalResponseHash&&typeof t.originalResponseDate!==DB&&null!==t.originalResponseDate&&""!==t.originalResponseDate&&(a={hash:t.originalResponseHash,creationDate:t.originalResponseDate}),await async function(e,t,n,a,c){return await new Promise((n,l)=>{if(!function(e,t,n,r){return!r||lt(e,e.bag.todayWidgetLivePreviewRolloutRate)}(e,0,0,a))return void l("No live preview will be shown due to losing the todayWidgetLivePreviewRolloutRate lottery.")
const u=new j6,d=e=>l(e)
Tn(e,u.make(e)).then(a=>{const l=f(a,um.contentMaxAge),u=function(e,t){return r(e)||r(e.results)||o(e.results.data)?(t("Unable to create primary module; no results or data."),null):o(e.results.data[0].contents)?(t("Unable to create primary module; no contents."),null):e.results.data[0].contents.length===e.results.data[0].contents.filter(e=>Z(e)).length?(t("Unable to create primary module; none of the cards are hydrated."),null):{label:"",title:"",meta:{},contents:e.results.data[0].contents}}(a,d)
if(null===u)return
const p=function(e){const t={label:"",title:"",meta:{},contents:[]}
if(r(e)||r(e.results)||o(e.results.data))return t
const n=e.results.data.slice(1)
return 0===n.length?t:{label:"",title:"",meta:{},contents:n.map(e=>e.contents).reduce((e,t)=>e.concat(t))}}(a),h=function(t,n,r,o,i){const a=(c=JSON.stringify(t.contents.concat(n.contents).map(e=>e.id))+(null!==r?r.toString():""),e.cryptography.hash("sha256",c))
var c
return null!==i&&s(i.hash)&&s(i.creationDate)&&i.hash===a?i:{hash:a,creationDate:(new Date).toUTCString()}}(u,p,l,0,c),w=function(e,t,n){null===n&&e.console.error("No TTL value was found--deferring to JS client for refresh time.")
const r=new Date(t.creationDate)
return r.setSeconds(r.getSeconds()+n),e.console.info(`Media API provided TTL: ${n} so timeline refresh date will be ${r}`),r}(e,h,l),g=tg(e,u),m=tg(e,p),v=function(e,t,n,s,a,c,l,u,d){if(r(t))return d("Unable to create a TodayWidgetContainer; primaryModule is null."),null
const f=ng(e,t,s,!0,u,d)
if(0===f.length)return null
const p=ng(e,n,s,!1,u,null),h=function(e,t,n,r,s,a){const c=Ze(t),l=Xe(c,n),u={}
for(let e=0;e<r.length;e++){const t=e%r.length*2
u[r[e].storyId]=a===wR?s.slice(t,t+2):[]}const d=function(e,t,n){return function(e,r){const o=[],i=[]
return e.forEach(e=>{return void 0!==(r=e).eventStartDate&&null!==r.eventStartDate&&t<Ze(r.eventStartDate)&&Ze(r.eventStartDate)<=n?o.push(e):i.push(e)
var r}),[o,i]}(e)}(r,c,n),f=d[0]
let p=d[1]
const h=[...Array(l)].map(()=>[]),w=[...Array(l)].map((e,t)=>new Date(c.getTime()+60*t*60*1e3)),g=new Map
r.concat(s).forEach(t=>{if(i(t.eventStartDate)){const n=Ui(t.eventBadgeKind,t.eventStartDate,t.eventEndDate)
g[t.storyId]=Gi(e,n,t.eventStartDate,t.eventEndDate)}}),f.forEach(e=>{var t
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
return new B6(r,n)})}(e,new Date(c.creationDate),l,f,p,s)
return new N6(h,l,c.creationDate,c.hash)}(e,g,m,t,0,h,w,mb,d)
null!==v&&n(v)}).catch(e=>{l(e)})})}(e,n,t.isSnapshot,t.isPreview,a)}function lg(e){return e.props.isNotEnabled("arcadeDownloadPacksGetAllUpliftExperiment")?bm.Control:xe(e,Rg.ArcadeDownloadPackOnboarding)||bm.LayoutB}var ug,dg,fg,pg,hg,wg,gg,mg,vg,yg,Ag,Tg,Sg,Pg,bg,Ig,Cg,kg,Og,Eg,Rg,Dg,_g,Lg,xg,Mg,$g,Fg,Ng,Bg,Ug,Gg,jg,Vg,Hg,Wg,qg,zg,Yg,Jg,Kg,Zg,Qg,Xg,em,tm,nm,rm,om,im,sm,am,cm,lm,um,dm,fm,pm,hm,wm,gm,mm,vm,ym,Am,Tm,Sm,Pm,bm,Im,Cm,km,Om,Em={}
e.r(Em),e.d(Em,{downloadingOrdering:()=>EX,downloadingOrderingCompact:()=>RX,notPurchasedOrdering:()=>kX,notPurchasedOrderingCompact:()=>OX,notPurchasedSpotlightIndex:()=>bX,purchasedOrdering:()=>IX,purchasedOrderingCompact:()=>CX,purchasedSpotlightIndex:()=>PX}),ug={},e.r(ug),e.d(ug,{downloadingOrdering:()=>FX,downloadingOrderingCompact:()=>NX,notPurchasedOrdering:()=>MX,notPurchasedOrderingCompact:()=>$X,notPurchasedSpotlightIndex:()=>_X,purchasedOrdering:()=>LX,purchasedOrderingCompact:()=>xX,purchasedSpotlightIndex:()=>DX}),dg={},e.r(dg),e.d(dg,{notPurchasedOrdering:()=>jX,notPurchasedSpotlightIndex:()=>UX,purchasedOrdering:()=>GX,purchasedSpotlightIndex:()=>BX}),fg={},e.r(fg),e.d(fg,{notPurchasedOrdering:()=>qX,notPurchasedSpotlightIndex:()=>HX,purchasedOrdering:()=>WX,purchasedSpotlightIndex:()=>VX}),pg={},e.r(pg),e.d(pg,{notPurchasedOrdering:()=>KX,notPurchasedSpotlightIndex:()=>YX,purchasedOrdering:()=>JX,purchasedSpotlightIndex:()=>zX}),hg={},e.r(hg),e.d(hg,{notPurchasedOrdering:()=>e0,notPurchasedSpotlightIndex:()=>QX,purchasedOrdering:()=>XX,purchasedSpotlightIndex:()=>ZX}),wg={},e.r(wg),e.d(wg,{notPurchasedOrdering:()=>o0,notPurchasedSpotlightIndex:()=>n0,purchasedOrdering:()=>r0,purchasedSpotlightIndex:()=>t0}),gg={},e.r(gg),e.d(gg,{notPurchasedOrdering:()=>c0,notPurchasedSpotlightIndex:()=>s0,purchasedOrdering:()=>a0,purchasedSpotlightIndex:()=>i0}),mg={},e.r(mg),e.d(mg,{notPurchasedOrdering:()=>f0,notPurchasedSpotlightIndex:()=>u0,purchasedOrdering:()=>d0,purchasedSpotlightIndex:()=>l0})
const Rm="arcadeAskToBuy",Dm="groupingLockup",_m="launchRepair",Lm="tapToRate",xm="lockupList",Mm="TabChangeAction",$m="expanded",Fm="GameCenterInvitePlayerAction",Nm="person.crop.square",Bm="applewatch",Um="advert",Gm="continuation",jm="signup",Vm="purchases",Hm="donate",Wm="is32bitOnly",qm="requires32bit",zm="is.workflow.my.app",Ym="com.apple.mobileme.fmf1",Jm="iPad",Km="com.apple.NanoCompass.watchkitapp",Zm="com.apple.DeepBreathing",Qm="com.apple.Depth",Xm="com.apple.Mandrake",ev="isIOSBinaryMacOSCompatible",tv="ACTION_SETTINGS",nv="shareSheet",rv="AppleAccount.AABranding",ov="Send Gift",iv="initiate",sv="EDITORIALTAKEOVER",av="SLPLOAD",cv="iad.format.text",lv="advertDataMalformed",uv="mapiFetchFail",dv="insufficientAssets",fv="adsLocaleMetadata",pv="SHARE_APP_EVENT_SUBTITLE",hv="j:mm",wv="inAppEvent",gv="systemimage://bell.fill",mv="appPromotionTitle",vv="OfferItems.FormattedDate.RedemptionDate.DateFormat",yv="OfferItems.Available.Now",Av="@@date@@",Tv="arcade-see-all-games-button",Sv="marketingArtwork",Pv="seed",bv="upsell",Iv="PAGE_FACETS_FILTERS_CONTROLLER_SUPPORT",Cv="PAGE_FACETS_FILTERS_COMING_SOON",kv="PAGE_FACETS_SORT_BY_TITLE",Ov="controllerSupport",Ev="multiplayer",Rv="PAGE_FACETS_INCLUDE_TITLE",Dv="000000",_v="ARCADE_SUBSCRIBE_PAGE_NOT_NOW",Lv="displayBreakoutMaterial",xv="material",Mv="textGradient",$v="plusLight",Fv="notificationSettings",Nv="invalidateWidgetsOnFailure",Bv="PageData",Uv="ProductBuilder",Gv="contingent-items:branch",jv="contingentItemOffer",Vv="contingent-items:association.trunks",Hv="trunks",Wv="offer-items:salables",qv="discountOffer",zv="fileSizeByDevice",Yv="promotionalText",Jv="backgroundAssetsInfo",Kv="backgroundAssetsInfoWithOptional",Zv="installSizeByDeviceInBytes",Qv="editorial-item-shelves",Xv="viewEditorialItem",ey="past",ty="preview",ny="impressionableAppIconFromData",ry="appBinaryTraits",oy="requiresRosetta",iy="iphone5",sy="iphone6",ay="iphone6+",cy="maxEssentialInstallSizeInBytes",ly="maxDownloadSizeInBytes",uy="maxInstallSizeInBytes",dy="Mac",fy="editorialArtwork.contentLogoTrimmed",py="posterCardVideo16x9",hy="updatedFallRegulatoryAssets",wy="AgeRating-AU-18",gy="enabled",my="concerns",vy="ACTION_REVIEW_REPORT",yy="TOAST_CONCERN_REPORTED_TITLE",Ay="TOAST_CONCERN_REPORTED_DESCRIPTION",Ty="Alert.GenericError.Title",Sy="Alert.GenericError.Message",Py="userReviewId",by="systemimage://hand.thumbsup",Iy="systemimage://hand.thumbsdown",Cy="guid",ky="formBody",Oy="CONTROLLER_RECOMMENDED",Ey="CAPABILITY_GAME_CENTER_TITLE",Ry="resource://ProductCapabilityGameCenter",Dy="safariExtensions",_y="above",Ly="prefersNonStandardBackButton",xy="DEVELOPER_WATCH",My="DEVELOPER_LATEST_RELEASE",$y="DEVELOPER_BUNDLES",Fy="hasApps",Ny="hasGames",By="DEVELOPER_APPS_AND_GAMES",Uy="DEVELOPER_GAMES",Gy="DEVELOPER_APPS",jy="DEVELOPER_APPLE_ARCADE",Vy="textOnly",Hy="enrichedEditorialNotes.name",Wy="enrichedEditorialNotes.tagline",qy="enrichedEditorialNotes.callToAction",zy="editorialNotes.callToAction",Yy="shelf_id",Jy="arcadeSeeAllGamesFooter",Ky="footer",Zy="ARCADE_PREORDER_COMING_SOON",Qy="REPORT_A_PROBLEM",Xy="HERO_CAROUSEL_OVERLAY_BUTTON_TITLE_GAME",eA="breakoutTall",tA="breakoutFullScreen",nA="renderGroupingPage",rA="noPersonalizationAvailable",oA="groupingAppEvent",iA="Browse Categories",sA="hasSeeAll",aA="listItem",cA="link.url",lA="GameCenter.ContinuePlayingShelf.Title",uA="videoCard",dA="Achievements Hero",fA="locked",pA="inprogress",hA="gameCenterFriendingViaPush",wA="legacy",gA="FRIEND_SUGGESTION",mA="smallContactCard",vA="INVITE",yA="FROM_CONTACTS",AA="inviteFriend",TA="removeFriendSuggestion",SA="friendSuggestion",PA="redownloadButtonTintUsingOfferTheme",bA="see-all-contents",IA="contentGraphicTrimmed",CA="parentShelfItems",kA="displayDeviceDrivenContent",OA="CategoryGrouping",EA="smallBreakout",RA="advertPressed",DA="offerButtonPress",_A="promotedContent",LA="editorialContext",xA="contentRatingsBySystem.appsApple.name",MA="developerName",$A="firstVersionSupportingInAppPurchaseApi",FA="isVerifiedForAppleSiliconMac",NA="widthConstrainedLockup",BA="OfferButton.Title.Subscribe",UA="descending",GA="editorialItemActionFromData",jA="displaySubStyle",VA="iad.lineItem",HA="clientIdentifierOverride",WA="targetId",qA="clientCorrelationKey",zA="pageRender",YA="hasiAdData",JA="viewedInfo",KA="viewedInfoDetailed",ZA="cookie",QA="ownerDsid",XA="pageExit",eT="trampoline",tT="trampolineContext",nT="widgetContext",rT="contingentItemId",oT="browserChoice",iT="browserChoiceScreenBuy",sT="clip",aT="buttonName",cT="actionContext",lT="selectedPageFacets",uT="Apps",dT="searchGhostHint",fT="didYouMean",pT="displaysArcadeUpsell",hT="franchise",wT="isOnboardingCard",gT="optimizationEntityId",mT="optimizationId",vT="iAdOdmlSuccess",yT="metadata",AT="iAdIsSpecifiedCreativeUsed",TT="APPSTORE_SEARCH_LANDING_PAGE",ST="APPSTORE_SEARCH_RESULT_PAGE",PT="APPSTORE_TODAY_TAB",bT="APPSTORE_PRODUCT_PAGE",IT="APPSTORE_PRODUCT_PAGE_DOWNLOAD",CT="iAdSlotId",kT="iAdPageCustomId",OT="macSoftware",ET="iosSoftware",RT="artist",DT="pending",_T="input",LT="channelPartner",xT="eligibilityType",MT="upsellScenario",$T="modeType",FT="FreeTrial",NT="PayUpFront",BT="PayAsYouGo",UT="rebuy=true",GT="OfferButton.FlowPreview.Get",jT="OfferButton.FlowPreview.Preorder",VT="contentRatingsBySystem.appsApple.value",HT="preorderedSubscribed",WT="preorderedNotSubscribed",qT="productPageBrowserChoice",zT="preorderSubscribed",YT="preorderNotSubscribed",JT="INTRO_PRICE_OFFER_SUBTITLE",KT="Offer.InlineInAppPurchases",ZT="OfferButton.ExternalPurchases.Subtitle",QT="weight_parameter",XT="meta.personalizationData.isPinned",eS="meta.personalizationData.segId",tS="OnDeviceRecommendationsPageController",nS="fetchRecommendations",rS="candidates",oS="PRODUCT_PRIVACY_LEARN_MORE_TEMPLATE",iS="{developerName}",sS="<br><br>",aS="privacyPolicy",cS="PRODUCT_PRIVACY_DEFINITIONS_LINK",lS="privacyDefinitions",uS="USAGE_DATA",dS="systemimage://person.circle",fS="NOT_COMPATIBLE_BANNER",pS="UNSUPPORTED_CAPABILITIES",hS="UNSUPPORTED_WATCHOS_VERSION",wS="experimentLocale",gS="pageCustomId",mS="ProductPage.Section.ScreenshotsPreview.Title",vS="user",yS="reviewsContainer",AS="displayable-kind",TS="urlQuery",SS="editorsChoiceItem",PS="ratingCount",bS="APP_SUPPORT",IS="Action.LearnMore",CS="REVIEWS_MOST_HELPFUL",kS="REVIEWS_MOST_FAVORABLE",OS="REVIEWS_MOST_CRITICAL",ES="recent",RS="REVIEWS_MOST_RECENT",DS="reviewsPageActionFromReviewsData",_S="select",LS="genreName",xS="BADGE_PLAYERS_HEADING",MS="{maxPlayers}",$S="BADGE_NO_RATINGS_CAPTION",FS="contentRatingsBySystem.appsAustralia.rank",NS="contentRatingsBySystem.appsFrance.rank",BS="contentRatingsBySystem.appsKorea.rank",US="contentRatingsBySystem.appsKorea.name",GS="{subtitle}",jS="gameCenterPlayerGameAchievementSummary",VS="ProductPage.Section.EditorsNotes.Title",HS="ProductPage.Section.FeaturedIn.Title",WS="largeGameCenterPlayer",qS="hasEula",zS="productMediaItem",YS="productReviewsCustomHeader",JS="createTapToRateProductReviewAction",KS="ProductPage.RatingsAndReviews.Footer.LearnMore",ZS="ProductPage.Section.MostRecentVersion.Title",QS="overview",XS="titledParagraph",eP="detail",tP="releaseNotes",nP="ProductPage.Section.Videos.Title",rP="standardInformationShelf",oP="product-page-info-section",iP="advisories",sP="seventeenPlus",aP="gracRegistrationNumber",cP="twelvePlus",lP="Seller",uP="isTrader",dP="{seller}",fP="Initial.App.Size",pP="Additional.Content.After.App.Install",hP="Search.Facets.iPadAndIPhone",wP="Search.Facets.iPhoneOnly",gP="SEARCH_FACET_FREE",mP="SEARCH_FACET_",vP="ageBandId",yP="filter[price]",AP="filter[genre]",TP="filter[ages]",SP="userTyped",PP="ghosting",bP="terms",IP="naturalLanguage",CP="tags",kP="SEARCH_TRANSPARENCY_LINK",OP="rewrite",EP="magnifyingglass",RP="ads-result",DP="EDITORIAL_SEARCH_RESULT_TYPE_DEVELOPER_TITLE_CASE",_P="whenInstalled",LP="mixed",xP="guidedLabel",MP="search-revisions",$P="recentSearches",FP="singleColumnList",NP="highlightedTextView",BP="@@chartPosition@@",UP="developerInfo",GP="divider",jP="onDeviceSearchHistory",VP="scrollablePill",HP="displayType",WP="appMarkerType",qP="Acquisition",zP="InlineImage",YP="AppLockup",JP="InlineVideo",KP="quote",ZP="Small",QP="Medium",XP="Large",eb="itunes.apple.com",tb="meta.personalizationData.optimizationId",nb="meta.personalizationData.optimizationEntityId",rb="ignoreEditorialArt",ob="x-as3-internal:/today/test",ib="meta.personalizationData.replaceIfAdPresent",sb="editorialBackground",ab="editorialVideo.categoryDetailMotion16x9",cb="editorialVideo.storyCardMotion16x9",lb="editorialVideo.storyCenteredMotion16x9",ub="editorialVideo.listCardMotion21x9",db="editorialArtwork.listCardStatic21x9",fb="LCS.ApLCL01",pb="LCS.ApLCL02",hb="editorialArtwork.universalAStatic16x9",wb="editorialVideo.universalAMotion16x9",gb="LCS.ApLCXW01",mb="com.apple.AppStore.Widgets.Today",vb="systemMedium",yb="DCEC.AppWS01",Ab="MCGC.AppWS01",Tb="MCGC.AppWL01",Sb="PersonalizedRecommendations.Toggle.Title",Pb="PersonalizedRecommendations.Toggle.Footer",bb="PERSONALIZATION_PURCHASES",Ib="RECOMMENDATIONS",Cb="engagement-data",kb="ArcadeOnboarding",Ob="extend",Eb="ALL_ARCADE_GAMES",Rb="MMMM d, y",Db="arcadeSubscribePage",_b="release",Lb="featuredCategories",xb="nonnull",Mb="token.pageInformation",$b="token.excludeAttribution",Fb="isAppInstalled",Nb="token.targetType",Bb="token.metricsKind",Ub="systemInformation",Gb="token.productVariantData",jb="token.inAppEventId",Vb="Purchases",Hb="OfferButton.Title.BundlePurchased",Wb="gameCenterProfile",qb="GROUPING_DISCOVER",zb="OnDeviceRecommendationsPageController:handleShelf not implemented",Yb="ProductData",Jb="Product page preloading is disabled",Kb="lookup",Zb="app-bundle",Qb="search-recommendation-sections",Xb="clusterId",eI="timeSinceOnScreen",tI="results.contents",nI="trending-contents",rI="TodayData",oI="TodayForApps",iI="done",sI="Arcade.DownloadPack.Suggestions.GetAllButtonTitle",aI="asString",cI="asNumber",lI="asBoolean",uI="asJSONValue",dI="catalog",fI="engagement",pI="view/see-all",hI="its_qt",wI="adId",gI="prefix",mI="username",vI="password",yI="port",AI="-caseInsensitive",TI="signatureResumption",SI="checkForLongUrl",PI="getPass",bI="certId",II="metrics-identifiers",CI="language",kI="https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/accountSummary",OI="https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/redeemLandingPage",EI="IPHONE_BRAND_NAME",RI="IPAD_BRAND_NAME",DI="APPLE_TV_BRAND_NAME",_I="APPLE_WATCH_BRAND_NAME",LI="MAC_BRAND_NAME",xI="askToBuy",MI="generic",$I="arcadeLaunchRepair",FI="arcadeTodayCard",NI="arcadeTabNavBar",BI="existing",UI="list",GI="river",jI="timer",VI="textFollowsTintColor",HI="bundle",WI="editorial",qI="com.apple.appstorecomponentsd",zI="com.apple.AppStore.Widgets",YI="com.apple.visionproapp",JI="primaryTerm",KI="https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/signupWizard",ZI="iPhone",QI="isStandaloneWithCompanionForWatchOS",XI="isDeliveredInIOSAppForWatchOS",eC="isXROSCompatible",tC="free",nC="presentModal",rC="systemimage://square.and.arrow.up",oC="results.data",iC="accountDetails",sC="createAccount",aC="sendGift",cC="addFunds",lC="Redeem",uC="cppAssetsMissing",dC="localizationNotAvailable",fC="customers-also-bought-apps-download",pC="module",hC="deepLink",wC="appPromotion",gC="trunk-app",mC="useTrunkArtwork",vC="editorialArtwork.brandLogo",yC="systemimage://questionmark.circle",AC="comingSoonApps",TC="marketingVideo",SC="supportsSharePlay",PC="filter[ageRating]",bC="filter[supportsGameController]",IC="filter[isMultiplayer]",CC="subscribe",kC="custom",OC="Arcade.Welcome.Family.Button.ExploreArcade",EC="breakoutTextAlignment",RC="left",DC="right",_C="breakoutCallToActionLabel",LC="black",xC="arcadeSubscribe",MC="Action.OK",$C="isViewOnly",FC="action.kind",NC="action.url",BC="Goto",UC="standalone-merchandised-in-apps",GC="requirementsByDeviceFamily",jC="licenses",VC="internetContentProviderInfo",HC="review-summary",WC="future",qC="unlistedApps",zC="system-apps",YC="xros-apps",JC="redownload",KC="customAttributes",ZC="appShowcase",QC="placeholderBackground",XC="textColor1",ek="checksum",tk="circularArtwork",nk="ovalArtwork",rk="appleWatch_2021",ok="appleWatch_2018",ik="appleWatch",sk="iphone_6_5",ak="iphone_d73",ck="iphone_d74",lk="editorialArtwork.splashFullScreen",uk="editorialArtwork.topShelf",dk="customVideoPreviewsByTypeForAd",fk="BreakoutLarge",pk="Hero",hk="application/json",wk="systemimage://square.and.pencil",gk="decimalPad",mk="siri",vk="hasInAppPurchases",yk="systemGreen",Ak="jpeg",Tk="subscriptionHero",Sk="editorial-shelves-collection:contents",Pk="ignoreITunesShortNotes",bk="editorialNotes.short",Ik="HERO_CAROUSEL_OVERLAY_BUTTON_TITLE_VIEW",Ck="collectionIcons",kk="AllGames",Ok="navigationBar",Ek="arcadeFooter",Rk="TermsAndConditions.Title",Dk="shelf_page_header",_k="ribbonBar",Lk="collectionModule",xk="collectionLockup",Mk="Genre",$k="displayCount",Fk="designTag",Nk="editorialStoryCard",Bk="nonarcade",Uk="isArcade",Gk="date",jk="systemBlue",Vk="Watch",Hk="Messages",Wk="Lockup.Heading.Arcade",qk="userRating.ratingCount",zk="userRating.value",Yk="discounts",Jk="inAppPurchaseInstall",Kk="item.offer.buyParams",Zk="offerId",Qk="genres",Xk="genreNames",eO="targetType",tO="crossfireReferral",nO="data-metrics-impressions-low-latency",rO="media",oO="exit",iO="SearchFocus",sO="Focus",aO="overridePageContext",cO="userId",lO="dsId",uO="refAppType",dO="widget",fO="SoftwareBundle",pO="context",hO="BrowserChoice",wO="com.apple.AppStore.clipOverlay",gO="paymentTopicFromBag",mO="overlayClip",vO="offerReleaseDate",yO="buyInitiate",AO="See All",TO="searchOriginatingTerm",SO="recents",PO="hint",bO="undoSpellCorrection",IO="applySpellCorrection",CO="userTypedHint",kO="tag",OO="iAdEligible",EO="impressionParentId",RO="searchGhostHintPrefix",DO="searchGhostHintTermPhase",_O="searchGhostHintTerm",LO="meta.metrics",xO="dsid",MO="@@durationCount@@",$O="@@postTrialPriceDuration@@",FO="test",NO="update",BO="PREORDER_NOTIFY_AUTOMATIC_DOWNLOAD_MESSAGE",UO="arcade-preorder",GO="confirmation",jO="notSubscribed",VO="OfferButton.IntroPrice.FreeTrial",HO="discountOwnedParent",WO="discountUnownedParent",qO="use_signals",zO="meta.personalizationData.grpId",YO="editorialItemGroup",JO="DATA_NOT_PROVIDED",KO="PRODUCT_PRIVACY_LEARN_MORE_LINK",ZO="PRODUCT_PRIVACY_LEARN_MORE_NO_LINK",QO="privacyDetail",XO="privacyCard",eE="identifier",tE="experimentId",nE="separateEditorsChoiceShelf",rE="helpful",oE="mostHelpfulReviews",iE="wasReset",sE="shelves_2_0_reviews",aE="ratingsDetails",cE="RATINGS_STATUS_NOT_ENOUGH_RATINGS_OR_REVIEWS",lE="supportUrl",uE="chartPositions",dE="highMotion",fE="{minPlayers}",pE="{releaseDate}",hE="value",wE="{count}",gE="deviceCompatibility",mE="Offer.Expanded.Title.ComingSoon",vE="externalVersionId",yE="marker",AE="ProductPage.Section.Information.Title",TE="ProductPage.Section.Supports.Title",SE="safetyAndComplianceUrl",PE="productReviewAction",bE="ProductPage.Section.Reviews.MostHelpfulReviews.Title",IE="productRatingsAndReviewsComponent",CE="versionDisplay",kE="Install.Size.String",OE="{fileSize}",EE="iads",RE="dataSetId",DE="SEARCH_FACET_ANY_PRICE",_E="SEARCH_FACET_ANY_CATEGORY",LE="SEARCH_FACET_RELEVANCE",xE="clientApplication",ME="kinds",$E="lastNLSQueryDate",FE="top-apps",NE="showLabelInSearch",BE="guidedToken",UE="secondaryGenreShortDisplayNames",GE="SearchRevisions",jE="{searchTerm}",VE="no-results",HE="searchChartsAndCategories",WE="alternateLabel",qE="contentIds",zE="associations.app-events.data",YE="associations.app-events.attributes.forceAppEvent",JE="mediumAdLockupWithScreenshotsBackground",KE="adItem",ZE="condensedAdLockupWithIconBackground",QE="displayTerm",XE="supportsGameController",eR="rankedSecondaryGenre",tR="editorialLink",nR="upsellForNonacquisitionCanvas",rR="arcadeIcons",oR="AppMarker",iR="isAcquisition",sR="editorialVideo.storeFrontVideo4x3",aR="editorialVideo.storeFrontVideo",cR="headerName",lR="headerBadge",uR="headerTagline",dR="meta.associations.recommendations.data",fR="associations.recommendations.data",pR="todaySection",hR="editorialArtwork.storyCardStatic16x9",wR="systemLarge",gR="personalization-data",mR="ACCOUNT_SETTINGS",vR="onDevicePersonalization",yR="upsellRecovery",AR="prefersLargeTitleWhenRoot",TR="token.metricsPlatformDisplayStyle",SR="https",PR="work",bR="play",IR="develop",CR="channel-apps",kR="landing:new-protocol",OR="chin",ER="Arcade.DownloadPack.Suggestions.PrimaryButtonTitle",RR="strict",DR="ratings",_R="suffix",LR="apps-media-api-edge-host",xR="arcadeGroupingLockup",MR="arcadeStoryCanvas",$R="blue",FR="FlowAction",NR="pageChange",BR="com.apple.TVAppStore.AppStoreTopShelfExtension",UR="originalUrl",GR="updates",jR="checkForPreorders",VR="meta.discountOffer",HR="viewGenre",WR="minPlayers",qR="maxPlayers",zR="CONTROLLER_OPTIONAL",YR="SIRI_REMOTE_OR_CONTROLLER_REQUIRED",JR="SIRI_REMOTE_REQUIRED",KR="purchaseHistory",ZR="familySharing",QR="manageSubscriptions",XR="push",eD="NOAD",tD="METADATA",nD="png",rD="events-and-offers",oD="close",iD="dismiss",sD="redemptionExpirationDate",aD="details",cD="Arcade.SeeAllGames.Button.Title",lD="personal-recommendations",uD="comingSoon",dD="external",fD="fulfilled",pD="messagesScreenshots",hD="supportsFunCamera",wD="supportURLForLanguage",gD="websiteUrl",mD="top-in-apps",vD="alternate-apps",yD="cabAdSupport",AD="merchandised-in-apps",TD="imessage-apps",SD="670",PD="tvRect",bD="appleWatch_2024",ID="appleWatch_2022",CD="iphone_5_8",kD="editorialArtwork.bannerUber",OD="splashVideo4x3",ED="appletv",RD="arcadeShowcase",DD="StoryMedium",_D="systemimage://exclamationmark.circle",LD="editorial-elements",xD="primary-contents",MD="editorialNotes.badge",$D="interactive",FD="hasChevron",ND="textLightensOnHighlight",BD="hasSeparator",UD="singleModule",GD="materialText",jD="arcadeDownloadPackCard",VD="categoryBrick",HD="nonArcade",WD="friendingViaPush",qD="medium",zD="inAppPurchaseTiledLockup",YD="doNotFilter",JD="cppData",KD="contingentItems",ZD="standardApp",QD="platformAttributes.ios.bundleId",XD="abExperiment",e_="editorialBadgeType",t_="editorialPriority",n_="isSubscription",r_="appExtVrsId",o_="parentId",i_="multiple-system-operators",s_="pageReferrer",a_="advertDeviceWindow",c_="cardType",l_="iAdMetadata",u_="iAdImpressionId",d_="position",f_="prevPage",p_="platformDisplayStyle",h_="application/x-www-form-urlencoded",w_="hintsEntity",g_="idType",m_="ad_container",v_="iAdAppStoreClientRequestId",y_="impressionId",A_="customProductPage",T_="complete",S_="OfferButton.Title.Get",P_="supportsCompanionCheck",b_="{appName}",I_="checkmark",C_="trial",k_="OfferButton.IntroPrice.Trial",O_="size",E_="meta.personalizationData.score",R_="on_demand_product_shelf_fetching",D_="PRODUCT_PRIVACY_TITLE",__="privacyDetails",L_="privacyType",x_="systemimage://exclamationmark.triangle",M_="webBrowser",$_="install",F_="contentRating",N_="chartPosition",B_="BADGE_AGE_RATING_YEARS",U_="BADGE_AGE_RATING",G_="BADGE_MFI_HEADING",j_="systemimage://person.crop.square",V_="MMM d, yyyy",H_="watchOS",W_="xrOS",q_="PRIVACY_POLICY",z_="ProductPage.Section.SafetyAndCompliance.Title",Y_="componentBackgroundStandout",J_="APP_STORE_EDITORS_NOTES",K_="LICENSE_AGREEMENT",Z_="framedVideo",Q_="macOSCompatibleIOSApps",X_="search-hints",eL="midScrollGuidedSearch",tL="searchResult",nL="textColor2",rL="imageWithLabel",oL="editorialArtwork.storyCenteredStatic16x9",iL="editorialArtwork.dayCard",sL="editorialArtwork.eventCard",aL="editorialArtwork.generalCard",cL="editorialArtwork.categoryDetailStatic16x9",lL="header-contents",uL="materialGradient",dL="Video",fL="fractionalWidth",pL="MC.ApSCFB01",hL="UAS.ApXWC01",wL="multiplex",gL="customers-also-bought-apps-with-download-intent",mL="user-reviews",vL="searchLanding:see-all",yL="landing",AL="customArtwork",TL="hash",SL="dynamic",PL="arcadeComingSoon",bL="false",IL="actionLinks",CL="message",kL="productReview",OL="four-screenshots",EL="multiApp",RL="mediumLockupWithScreenshots",DL="singleLockup",_L="appstore",LL="guidedSearch",xL="com.apple.AppStore",ML="com.apple.Arcade.ArcadeTopShelfExtension",$L="purchased",FL="categories",NL="fields",BL="requiresGameController",UL="CONTROLLER_REQUIRED",GL="dynamicUI",jL="webView",VL="Account",HL="customScreenshotsByTypeForAd",WL="EventDetails",qL="lockupArtwork",zL="startDate",YL="endDate",JL="badgeKind",KL="eventModule",ZL="inAppEventId",QL="branch-app",XL="<br>",ex="winback",tx="with",nx="wordmark",rx="buy",ox="target",ix="rejected",sx="pageMetrics",ax="personalizationTransparency",cx="canvas",lx="developer-other-apps",ux="related-editorial-items",dx="privacy",fx="watch-apps",px="atv-apps",hx="mac-os-compatible-ios-apps",wx="round",gx="mixedMediaLockup",mx="EditorialLockupLarge",vx="EditorialLockupMedium",yx="heic",Ax="Horizontal",Tx="largeHeroBreakout",Sx="pageHeader",Px="largeImageLockup",bx="mso",Ix="editorialArtwork.mediaCard",Cx="achievement",kx="systemimage://magnifyingglass",Ox="searchLandingTrendingSection",Ex="topCharts",Rx="onDevicePersonalizationUseCase",Dx="secondaryText",_x="personalizationData",Lx="customDeepLink",xx="subscribed",Mx="href",$x="refApp",Fx="impressionType",Nx="extRefApp2",Bx="extRefUrl2",Ux="offerType",Gx="searchPrefix",jx="iAdTemplateType",Vx="ARCADE_PREORDER_LOCKUP_COMING_SOON",Hx="{price}",Wx="intermediateDetailPage",qx="ProductPage.ReviewSummary.Body.Title",zx="languages",Yx="storefrontContentRating",Jx="allProductReviewActions",Kx="productReviewsHeader",Zx="tv_product_page_2024E",Qx="genreShortDisplayName",Xx="multirooms",eM="cardDisplayStyle",tM="textLabel",nM="framedArtwork",rM="FullWidth",oM="app-distribution",iM="ArcadeData",sM="SearchData",aM="attributes",cM="many",lM="arcadeProductPage",uM="textLinksShelf",dM="boolean",fM="trailing",pM="appIcon",hM="redeem",wM="gift",gM="externalUrl",mM="meta.contingentItemOffer",vM="minimumWatchOSVersion",yM="price",AM="<b>",TM="</b>",SM="share",PM="chartHref",bM="search-results",IM="search-landing",CM="textColor4",kM="topic",OM="supportsStreamlinedBuy",EM="additionalTerms",RM="toggle",DM="privacyPolicyUrl",_M="sellerInfo",LM="ios-apps",xM="mac-apps",MM="charts",$M="ipod",FM="pill",NM="unadorned",BM="splashVideo16x9",UM="splashVideo3x4",GM="appTrailerLockup",jM="screenshotsLockup",VM="EditorialLockupLargeVariant",HM="EditorialLockupMediumVariant",WM="prefersOverlayedPageHeader",qM="largeBreakout",zM="canonicalId",YM="rowCount",JM="mediumStoryCard",KM="editorial_id",ZM="links",QM="suggested",XM="named",e$="editorial-elements:contents",t$="largeStoryCard",n$="actionUrl",r$="impressionQueue",o$="eventVersion",i$="advertRotation",s$="hints",a$="pageContext",c$="overlay",l$="softwareType",u$="SearchLanding",d$="PREORDER_NOTIFY_MESSAGE",f$="NOT_COMPATIBLE_BANNER_TEMPLATE",p$="{linkTitle}",h$="ppid",w$="targetPlatform",g$="rooms",m$="systemSmall",v$="navigation",y$="apps-and-games",A$="few",T$="appEvent",S$="arcadeTabHeader",P$="new",b$="GET",I$="code",C$="ages",k$="hide_arcade_header_on_arcade_tab",O$="toast",E$="location",R$="LearnMore",D$="singleSelection",_$="arcadeDownloadPackCategories",L$="isCanvasAvailable",x$="shortEditorialNotes",M$="offerItems",$$="enrichedEditorialNotes",F$="inAppPurchaseLockup",N$="largeLockup",B$="clear",U$="ipadPro",G$="ipad_10_5",j$="isGameCenterEnabled",V$="lockupSmall",H$="badge-content",W$="placeholder",q$="layoutDirection",z$="lightOverArtwork",Y$="posterLockup",J$="grouping",K$="facet",Z$="arcadeApp",Q$="ARCADE_ACTION_TITLE_EXPLORE",X$="EXPLORE",eF="pageUrl",tF="extRefUrl",nF="refUrl",rF="trending",oF="webBrowserUpdates",iF="controller",sF="BADGE_MFI_SUPPORTED",aF="userRating",cF="arcadeProductPageInlineMessage",lF="productPageInlineMessage",uF="Achievements",dF="rank",fF="cancel",pF="Search Results",hF="eula",wF="discover",gF="coercedValue",mF="number",vF="always",yF="tabs",AF="menuItem",TF="actionType",SF="back",PF="badge",bF="branch",IF="roundedRect",CF="salables",kF="arcadeSeeAllGames",OF="shelf_header",EF="comingSoonGrouping",RF="object",DF="versionHistory",_F="editorialClientParams",LF="types",xF="tvos",MF="internal",$F="ipadPro_2018",FF="ipad_11",NF="expectedReleaseDate",BF="prefersLargeTitle",UF="editorial-shelves-header",GF="brick",jF="showExpectedReleaseDate",VF="meta.personalizationData.appId",HF="todayBrick",WF="click",qF="pageFields",zF="iAdContainerId",YF="pageDetails",JF="{title}",KF="NOT_COMPATIBLE_BANNER_LINK_TITLE",ZF="compatibilityAnnotation",QF="relationship",XF="allProductReviews",eN="tapToRateProductReviewAction",tN="writeAReviewProductReviewAction",nN="notPurchasedRatingsAndReviews",rN="purchasedRatingsAndReviews",oN="Any",iN="apps.apple.com",sN="host",aN="one",cN="inAppPurchase",lN="arcadeGeneric",uN="editorialItem",dN="disabled",fN="releaseDate",pN="hero",hN="NO_BADGE",wN="story",gN="term",mN="isFirstPartyHideableApp",vN="iap",yN="remoteControllerRequirement",AN="customers-also-bought-apps",TN="iad",SN="recurringSubscriptionPeriod",PN="numOfPeriods",bN="@@count@@",IN="upsellBreakout",CN="width",kN="previewFrame",ON="supportsArcade",EN="POST",RN="heroCarousel",DN="editorialCopy",_N="mediumImageLockup",LN="tvOS",xN="editorialBadgeInfo",MN="iAdPlacementId",$N="hostApp",FN="iAdId",NN="create",BN="userProductReviews",UN="bundleParents",GN="textCards",jN="platform",VN="isStandaloneForWatchOS",HN="description.standard",WN="annotation",qN="bgColor",zN="contexts",YN="latest-release-app",JN="height",KN="debug",ZN="{learnMoreLink}",QN="open",XN="actionDetails",eB="iAdSlotInfo",tB="{osVersion}",nB="detailPage",rB="editorsChoiceProductReviews",oB="bundleChildren",iB="brandedSingleApp",sB="large",aB="transparent",cB="priceFormatted",lB="offerName",uB="videoPreviewsByType",dB="deviceFamilies",fB="completed",pB="query",hB="pageId",wB="Software",gB="SearchResults",mB="rating",vB="renderPage",yB="notPurchasedLinks",AB="paragraph",TB="finance",SB="editorialElementKind",PB="buyParams",bB="APPLOCKUP",IB="upsellMarketingItem",CB="metrics",kB="screenshotsByType",OB="colored",EB="small",RB="tile",DB="undefined",_B="offers",LB="editorial-item-groups",xB="other",MB="inAppPurchases",$B="subscriptions",FB="short",NB="todayCard",BB="protocol",UB="expectedReleaseDateDisplayFormat",GB="editorial-cards",jB="appletvos",VB="data",HB="editorialNotes.tagline",WB="tagline",qB="genreDisplayName",zB="eventType",YB="iAdMissedOpportunityReason",JB="productReviewsFooter",KB="category",ZB="presentModalFormSheet",QB="searchResults",XB="advertSlotReporting",eU="rgb",tU="realityDevice",nU="editorialNotes.name",rU="collections",oU="pageType",iU="review_summarization",sU="flowPreview",aU="editorial-pages",cU="its_contentId",lU="pathname",uU="token",dU="Search",fU="Room",pU="reviewSummary",hU="view",wU="text/plain",gU="purchasedLinks",mU="grid",vU="macOS",yU="searchLanding",AU="text/x-apple-as3-nqml",TU="marketing-items",SU="developers",PU="type",bU="gameCenter",IU="meta",CU="collection",kU="No page routes specified",OU="iOS",EU="artistName",RU="groupings",DU="productVideo",_U="contingent-items",LU="arcade-apps",xU="editorialNotes",MU="games",$U="card",FU="productPage",NU="color",BU="preorder",UU="ACTION_SEE_ALL",GU="smallStoryCard",jU="adamId",VU="impressions",HU="recommendations",WU="fractionalHeight",qU="updatedTodayCardArtworkLayouts",zU="productArtwork",YU="offer-items",JU="product",KU="editorialQuote",ZU="mostRecentVersion",QU="xros",XU="sort",eG="isAppleWatchSupported",tG="kind",nG="preorderDisclaimer",rG="never",oG="children",iG="displayStyle",sG="requiredCapabilities",aG="osx",cG="mediumLockup",lG="infer",uG="featuredIn",dG="account",fG="iphone",pG="compatibilityControllerRequirement",hG="ipad",wG="primary-content",gG="card-contents",mG="developer",vG="genre",yG="minimumOSVersion",AG="subtitle",TG="chart",SG="ignoredValue",PG="leaderboards",bG="productPageYMALDuringDownload",IG="center",CG="macRequiredCapabilities",kG="text",OG="searchTerm",EG="defaultValue",RG="productRatings",DG="image",_G="action",LG="messages",xG="coercible",MG="editorsChoice",$G="privacyFooter",FG="videos",NG="light",BG="informationRibbon",UG="moreByDeveloper",GG="label",jG="in-apps",VG="appEvents",HG="privacyTypes",WG="productPageYMAL",qG="absolute",zG="true",YG="capabilities",JG="title",KG="article",ZG="privacyHeader",QG="similarItems",XG="none",ej="video",tj="swoosh",nj="bundleId",rj="isPreorder",oj="Arcade",ij="lockup",sj="search",aj="its_id",cj="white",lj="static",uj="friendsPlaying",dj="editorialVideo",fj="sequential",pj="link",hj="default",wj="editorialArtwork",gj="smallLockup",mj="ios",vj="string",yj="description",Aj="information",Tj="vision",Sj="url",Pj="inline",bj="leading",Ij="reviews",Cj="achievements",kj="dark",Oj="app",Ej="header",Rj="topLockup",Dj="today",_j="editorial-items",Lj="pad",xj="app-bundles",Mj="unknown",$j="screenshots",Fj="navigate",Nj="artwork",Bj="phone",Uj="app-events",Gj="arcade",jj="mac",Vj="watch",Hj="button",Wj="standard",qj="contents",zj="apps",Yj="name",Jj="page",Kj="shelf"
vg=e(8706),yg=e(9100),Ag=e(8836),Tg=e(1222)
const Zj=(0,(Sg=e(900)).makeMetatype)("app-store:storeMetrics"),Qj=(0,Sg.makeMetatype)("app-store:amsEngagement"),Xj=(0,Sg.makeMetatype)("app-store:device"),eV=(0,Sg.makeMetatype)("app-store:user"),tV=(0,Sg.makeMetatype)("app-store:metricsIdentifiers"),nV=(0,Sg.makeMetatype)("app-store:personalizationStore"),rV=(0,Sg.makeMetatype)("app-store:arcade"),oV=(0,Sg.makeMetatype)("app-store:gameCenter"),iV=(0,Sg.makeMetatype)("app-store:resilientDeepLinks"),sV=(0,Sg.makeMetatype)("app-store:ads"),aV=(0,Sg.makeMetatype)("app-store:onDeviceRecommendationsManager"),cV=(0,Sg.makeMetatype)("app-store:onDeviceSearchHistoryManager"),lV=(0,Sg.makeMetatype)("app-store:featureFlags"),uV=(0,Sg.makeMetatype)("app-store:mediaTokenService"),dV=(0,Sg.makeMetatype)("app-store:adsLocalizer"),fV=(0,Sg.makeMetatype)("app-store:appDistribution"),pV=(0,Sg.makeMetatype)("app-store:timeoutManager"),hV=(0,Sg.makeMetatype)("app-store:treatmentStore"),wV=(0,Sg.makeMetatype)("app-store:userDefaults")
Pg=e(4172),bg=e(2450)
const gV={}
class mV{constructor(e){this.implementation=e}}class vV extends mV{get isSupportEnabled(){return i(this.implementation)&&this.implementation.isSupportEnabled}get isRosettaAvailable(){return i(this.implementation)&&this.implementation.isRosettaAvailable}}vV.type=(0,Sg.makeMetatype)("app-store:as-wrapper"),Ig=e(5542)
class yV extends mV{constructor(e,t){super(e),this.cachedEnableAdditionalLoggingForPPV=null}get todayAdMediumLockupScreenshotEnabled(){var e
return null!==(e=this.implementation.boolean("today-ad-medium-lockup-screenshots-enabled"))&&void 0!==e&&e}get todayAdMediumLockupScreenshotAnimationEnabled(){var e
return null===(e=this.implementation.boolean("today-ad-medium-lockup-screenshots-animation-enabled"))||void 0===e||e}get trendingSearchesURL(){return this.implementation.url("trending-searches")}get searchHintsURL(){return this.implementation.url("searchHints")}get personalizedUserReviewURL(){return this.implementation.url("personalizedUserReviewUrl")}get personalizedUserReviewEnabled(){return this.implementation.boolean("personalizedUserReviewEnabled")}get userRateURL(){return this.implementation.url("p2-application-user-rate-content")}get writeReviewURL(){return this.implementation.url("p2-application-user-write-review")}get accessoryRoomURL(){return this.implementation.url("p2-accessory-room")}get passbookMainURL(){return this.implementation.url("passbook")}get libraryLinkURL(){return this.implementation.url("library-link")}get metricsConfiguration(){return m(this.implementation.dictionary(CB))}get metricsPaymentNamespaceEnabled(){if(o(this.metricsPaymentTopic))return!1
const e=m(this.implementation.dictionary(II)),t=p(e,"APPSTORE_PAYMENTS_ENGAGEMENT"),n=p(e,"APPSTORE_PAYMENTS_ENGAGEMENT_CLIENT")
return(0,Ig.isSome)(t)&&0!==t.length&&(0,Ig.isSome)(n)&&0!==n.length}get metricsPaymentTopic(){var e
return null!==(e=d(this.metricsConfiguration,"topics.APPSTORE_PAYMENTS_ENGAGEMENT_TOPIC"))&&void 0!==e?e:null}get personalizationUserIdEnabled(){const e=p(m(this.implementation.dictionary(II)),"APPSTORE_PERSONALIZATION")
return(0,Ig.isSome)(e)&&0!==Object.keys(e).length}get language(){return this.implementation.string(CI)}get mediaApiLanguage(){return this.implementation.string("language-tag")||this.implementation.string(CI)}get termsAndConditionsURL(){return this.implementation.url("p2-service-terms-url")}get usePostForAppStoreSearch(){return this.implementation.boolean("usePostForAppStoreSearch")}get isMonetaryGiftingEnabled(){return this.implementation.boolean("isBuyingScheduledGiftCertificateEnabled")}get accountTopUpURL(){return this.implementation.url("AddFundsUrl")}get accountTopUpTitle(){return this.implementation.string("account-top-up-title")}get isContentGiftingEnabled(){return this.implementation.boolean("isScheduledGiftingEnabled")}get buyButtonMetadataURL(){return this.implementation.url("personalized-buy-buttons/software")}get isTVAppEnabled(){return this.implementation.boolean("uvSearch/nowplaying-enabled")}get emailSupportLinkURL(){return this.implementation.url("supportLinkUrl")}get voteUrl(){return this.implementation.url("voteUrl")}get enableReviewSummarization(){return this.implementation.boolean("enable-review-summarization")}get reviewSummaryReportConcernData(){return m(this.implementation.dictionary("review-summarization-report-concern"))}get reportConcernUrl(){return this.implementation.url("reportConcernUrl")}get reportConcernExplanation(){return this.implementation.string("reportConcernExplanation")}get reportConcernReasons(){return c(g(this.implementation.array("reportConcernReasons")))}get reportProblemEnabled(){var e
return null!==(e=this.implementation.boolean("product-page-report-problem-enabled"))&&void 0!==e&&e}get productPageReportProblemURL(){return this.implementation.string("product-page-report-problem-url")}get productPageReportProblemSADSubscriptionArray(){return c(g(this.implementation.array("product-page-report-problem-sad-subscriptions")))}get productPageReportProblemSecondPartyAppArray(){const e=c(g(this.implementation.array("product-page-report-problem-second-party-apps")))
return o(e)?["1473505534","1416238567","640199958","1529498570","915061776","1130498044","1070072560"]:e}get createAccountUrl(){var e
return null!==(e=this.implementation.url("createAccountUrl"))&&void 0!==e?e:KI}get mediaCountryCode(){return this.implementation.string("countryCode")}get mediaHost(){return this.implementation.url("apps-media-api-host")}mediaEdgeHost(e){return e.host.clientIdentifier===qI?this.implementation.url(LR):this.implementation.string(LR)}get mediaAPICatalogMixedShouldUseEdge(){var e
return null!==(e=this.implementation.boolean("apps-media-api-catalog-mixed-should-use-edge"))&&void 0!==e&&e}get mediaEdgeSearchHost(){return this.implementation.string("apps-media-api-search-edge-host")}get mediaPreviewHost(){return this.implementation.string("apps-media-api-preview-host")}get mediaRealmHost(){return this.implementation.string("notification-settings-media-api-host")}get edgeEndpoints(){const e=this.implementation.array("apps-media-api-edge-end-points")
return typeof e===DB?[]:c(g(e))}get mediaAdvertRequestLimit(){var e
return null!==(e=this.implementation.double("apps-media-api-search-ads-limit"))&&void 0!==e?e:4}get searchSortOptions(){return c(g(this.implementation.array("searchSortOptions")))}get ageBands(){return c(g(this.implementation.array("ageBands")))}get redirectUrlWhitelistedQueryParams(){let e=c(g(this.implementation.array("processRedirectUrl/whitelistedQueryParams")))
return o(e)&&(e=["affC",wI,"advp","at","ct","itsct","itscg","itscc","itcCt",hI,"ls","partnerId","pt","qtkid","uo"]),e}get redirectUrlEndpoint(){var e
return null!==(e=this.implementation.string("processRedirectUrl/endpoint"))&&void 0!==e?e:"https://itunes.apple.com/WebObjects/MZStoreServices.woa/wa/processRedirectUrl"}get aristotleParentAppAdamId(){var e
return null!==(e=this.implementation.string("aristotle-app-id"))&&void 0!==e?e:"383941000"}get arcadeAppAdamId(){return this.implementation.string("app-store-app-id")}get arcadeProductFamilyId(){var e
return null!==(e=this.implementation.string("arcade-iap-family-id"))&&void 0!==e?e:this.implementation.string("ocelot-iap-family-id")}get arcadeProductId(){var e
return null!==(e=this.implementation.string("arcade-iap-offer-name"))&&void 0!==e?e:this.implementation.string("ocelot-iap-offer-name")}get arcadeCategoryBarSAGUpliftDisplayRate(){var e
return null!==(e=this.implementation.double("arcade-category-bar-see-all-games-display-rate"))&&void 0!==e?e:0}get isArcadeEnabled(){var e
return null!==(e=this.implementation.boolean("arcade-enabled"))&&void 0!==e&&e}get searchResultsLearnMoreEditorialId(){return this.implementation.string("transparencyLawEditorialItemId")}get systemApps(){return c(g(this.implementation.array("hideableSystemApps")))}get nonDeletableSystemApps(){const e=g(this.implementation.array("nonDeletableSystemApps"))
return s(e)?c(e):[{id:1635387927,"bundle-id":Qm},{id:1635862301,"bundle-id":Xm},{id:1584216343,"bundle-id":"com.apple.findmy.finddevices"},{id:1584215960,"bundle-id":"com.apple.NanoWorldClock"},{id:1584215812,"bundle-id":"com.apple.HeartRate"},{id:1584215851,"bundle-id":"com.apple.SessionTrackerApp"},{id:1146562108,"bundle-id":"com.apple.NanoPhone"},{id:1146560473,"bundle-id":"com.apple.MobileSMS"},{id:1584215428,"bundle-id":"com.apple.NanoPhotos"},{id:1459455352,"bundle-id":Zm},{id:1067456176,"bundle-id":Km}]}get tabsStandard(){return c(g(this.implementation.array("tabs/standard")))}get watchAppsGroupingURL(){var e
return null!==(e=this.implementation.url("watchAppsGrouping"))&&void 0!==e?e:"https://apps.apple.com/WebObjects/MZStore.woa/wa/viewFeature?id=1472048385"}get requireAgeVerification(){return this.implementation.boolean("requireAgeVerification")}get ageRatingLearnMoreEditorialItemId(){return this.implementation.string("ageRatingLearnMoreEditorialItemId")}get appleSiliconMacUnverifiedBadgeEditorialItemId(){return this.implementation.string("appleSiliconMacUnverifiedBadgeEditorialItemId")}get safariExtensionsGroupingURL(){return this.implementation.url("safariExtensionsGrouping")}get familySubscriptionsLearnMoreEditorialItemId(){return this.implementation.string("familySubscriptionsLearnMoreEditorialItemId")}get dynamicUIRegexStrings(){const e=this.implementation.array("commerce-ui-urls/dynamic-url-patterns")
return typeof e===DB?[]:c(g(e))}get financeUIRegexStrings(){const e=this.implementation.array("commerce-ui-urls/url-patterns")
return typeof e===DB?[]:c(g(e))}get webViewRegexStrings(){const e=this.implementation.array("commerce-ui-urls/v2-url-patterns")
return typeof e===DB?[]:c(g(e))}get arcadePreOrderUpsellLimitSeconds(){var e
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
return typeof e===DB?[]:c(g(e))}get appPrivacyDefinitionsEditorialItemId(){return this.implementation.string("appPrivacyDefinitionsEditorialItemId")}get todayWidgetLivePreviewRolloutRate(){var e
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
return null!==(e=this.implementation.url("accountUrl"))&&void 0!==e?e:kI}get redeemUrl(){var e
return null!==(e=this.implementation.url("redeemUrl"))&&void 0!==e?e:OI}get charityUrl(){var e
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
return s(e)?e:{today:[{shelfIdentifier:"0",slot:0},{shelfIdentifier:"0",slot:1}],"product-page-ymal":[{shelfIdentifier:AN,slot:0}]}}get managePreordersUrl(){var e
return null!==(e=this.implementation.url("preordersUrl"))&&void 0!==e?e:"https://finance-app.itunes.apple.com/preorders"}get modifyAccount(){var e
return null!==(e=this.implementation.url("modifyAccount"))&&void 0!==e?e:kI}get purchaseHistoryUrl(){return this.implementation.url("purchaseHistoryUrl")}get ratingsReviewsUrl(){var e
return null!==(e=this.implementation.url("ratingsReviewsUrl"))&&void 0!==e?e:"https://apps.mzstatic.com/content/54a1317a0ad442d3965d64ef6bfaae1c/ratings-reviews"}get signup(){var e
return null!==(e=this.implementation.url(jm))&&void 0!==e?e:KI}get redeemCodeLanding(){var e
return null!==(e=this.implementation.url("redeemCodeLanding"))&&void 0!==e?e:OI}get reportProblemUrl(){return this.implementation.string("reportProblemUrl")}get unrestrictedServerSideTabBadging(){var e
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
return c(g(null!==(e=this.implementation.array("disabled-rich-link-presentation-editorial-item-ids"))&&void 0!==e?e:["1842906680"]))}}yV.type=(0,Sg.makeMetatype)("app-store:bag-wrapper")
class AV{constructor(){this.$incidents=void 0}isValid(){return!0}}class TV extends AV{constructor(e=null){super(),this.impressionMetrics=e}}class SV extends AV{constructor(e,t,n,r,o,i,s,a,c,l,u,d,f,p,h,w,g,m,v,y,A){super(),this.buyParams=e,this.vendor=t,this.appName=n,this.bundleId=r,this.appPlatforms=o,this.isPreorder=null!=i&&i,this.excludeAttribution=null==s||s,this.metricsPlatformDisplayStyle=a,this.isRedownload=null!=l&&l,this.lineItem=c,this.preflightPackageUrl=void 0===u?null:u,this.isArcadeApp=d,this.isHalva=f,this.supportsVisionOSCompatibleIOSBinary=p,this.inAppEventId=h,this.extRefApp2=w,this.extRefUrl2=g,this.additionalHeaders=m,this.appCapabilities=v,this.isDefaultBrowser=y,this.remoteDownloadIdentifiers=A}}class PV extends AV{constructor(e,t,n,r,o,i,s,a,c,l,u,d,f,p,h,w,g,m,v,y,A,T){super(),this.offerType=e,this.adamId=t,this.parentAdamId=r,this.style=null==n?lG:n,this.environment=null==o?NG:o,this.offerTint=null==i?{type:$R}:i,this.titles=null==s?{}:s,this.titleSymbolNames=null==a?{}:a,this.subtitles=null==c?{}:c,this.hasInAppPurchases=l,this.hasExternalPurchases=u,this.isDeletableSystemApp=d,this.isFree=f,this.isPreorder=p,this.offerLabelStyle=null==h?XG:h,this.hasDiscount=w,this.contentRating=g,this.subscriptionFamilyId=m,this.useAdsLocale=v,this.priceFormatted=y,this.isStreamlinedBuy=A,this.appCapabilities=T}newOfferDisplayPropertiesChangingAppearance(e,t,n,r){return new PV(this.offerType,this.adamId,null==t||!e&&this.style===dN?this.style:t,this.parentAdamId,null==n?this.environment:n,null==r?this.offerTint:r,this.titles,this.titleSymbolNames,this.subtitles,this.hasInAppPurchases,this.hasExternalPurchases,this.isDeletableSystemApp,this.isFree,this.isPreorder,this.offerLabelStyle,this.hasDiscount,this.contentRating,this.subscriptionFamilyId,this.useAdsLocale,this.priceFormatted,this.isStreamlinedBuy,this.appCapabilities)}}class bV extends AV{constructor(e,t,n){super(),this.offerAction=t,this.offerDisplayProperties=n,this.personalizedOfferType=e}}!function(e){e[e.scaleToFill=0]="scaleToFill",e[e.scaleAspectFit=1]="scaleAspectFit",e[e.scaleAspectFill=2]="scaleAspectFill",e[e.redraw=3]="redraw",e[e.center=4]="center",e[e.top=5]="top",e[e.bottom=6]="bottom",e[e.left=7]="left",e[e.right=8]="right",e[e.topLeft=9]="topLeft",e[e.topRight=10]="topRight",e[e.bottomLeft=11]="bottomLeft",e[e.bottomRight=12]="bottomRight"}(Cg||(Cg={}))
class IV extends AV{constructor(e,t,n){super(),this.format=e,this.quality=t,this.supportsWideGamut=n}isValid(){return this.format&&void 0!==this.supportsWideGamut}}class CV extends AV{constructor(e,t,n,r,o,i){super(),this.checksum=null,this.backgroundColor=null,this.textColor=null,this.style=null,this.crop="bb",this.contentMode=null,this.template=e,this.width=t,this.height=n,this.variants=r,this.backgroundColor=o,this.textColor=i}isPortrait(){return this.height>=this.width}isLandscape(){return!this.isPortrait()}isValid(){return""!==this.template&&this.width>0&&this.height>0&&this.variants.length>0}}class kV extends AV{constructor(e,t){super(),this.artwork=e,this.mediaPlatform=t}}class OV extends AV{constructor(e,t,n,r,o,i,s){super(),this.appPlatform=e,this.supplementaryAppPlatforms=r||[],this.deviceCornerRadiusFactor=o,this.mediaType=t,this.systemImageName=n,this.deviceBorderThickness=i,this.outerDeviceCornerRadiusFactor=s}isEqualTo(e){this.supplementaryAppPlatforms.sort(),e.supplementaryAppPlatforms.sort()
const t=this.supplementaryAppPlatforms.join(",")===e.supplementaryAppPlatforms.join(",")
return e.appPlatform===this.appPlatform&&e.mediaType===this.mediaType&&e.systemImageName===this.systemImageName&&t&&e.deviceCornerRadiusFactor===this.deviceCornerRadiusFactor}}class EV{constructor(e,t){this.width=e,this.height=t}static fromNativeSize(e){return new EV(e.width,e.height)}isEqualTo(e){return e.width===this.width&&e.height===this.height}}class RV extends AV{constructor(e,t,n,r,o,i){super(),this.itemName=e,this.url=t,this.developer=n,this.category=r,this.fileSize=o,this.mediaType=i}}class DV extends AV{constructor(e,t,n,r){super(),this.context=KG,this.id=e,this.text=t,this.subtitle=n,this.artwork=r}}class _V extends AV{constructor(e,t,n){super(),this.context=T$,this.text=e,this.subtitle=t,this.artwork=n}}class LV extends AV{constructor(e,t,n,r,o,i,s,a,c,l,u,d){super(),this.context=JU,this.adamId=e,this.storeFrontIdentifier=t,this.name=n,this.platform=r,this.icon=o,this.screenshots=i,this.videos=s,this.isMessagesOnlyApp=a,this.subtitle=c,this.genreName=l,this.messagesAppIcon=u,this.notesMetadata=d}}class xV extends AV{constructor(e,t,n){super(),this.context=MI,this.text=e,this.subtitle=t,this.artwork=n}}class MV extends AV{constructor(e,t,n){super(),this.metadata=e,this.url=t,this.shortUrl=n}}class $V extends AV{constructor(e,t,n){super(),this.reasonId=e,this.name=t,this.uppercaseName=n}}class FV extends AV{constructor(e,t=wU){super(),this.rawText=e,this.rawTextType=t}}class NV extends TV{constructor(e,t,n){super(),this.text=e,this.mediaType=t||wU,this.style=n||Wj,this.alignment="localized",this.isCollapsed=!1,this.suppressVerticalMargins=!1,this.wantsCollapsedNewlines=!0}}class BV extends AV{constructor(e,t=null,n=null){super(),this.actions=e,this.offerDisplayProperties=t,this.offerActionIndex=n}}class UV extends TV{}class GV extends TV{}class jV extends AV{constructor(e){super(),this.isFallbackStyle=!1,this.type=e}}class VV extends TV{constructor(e,t,n,r,o,i){super(),this.bundleId=e,this.completedAchievements=t,this.totalAchievements=n,this.completedText=r,this.action=o,this.achievements=i}}class HV extends TV{constructor(e,t,n,r,o,i,s,a){super(),this.id=e,this.title=t,this.subtitle=n,this.buttonText=r,this.contactId=o,this.buttonAction=i,this.removeButtonAction=s,this.shouldShowMessagesBadge=a}}class WV extends AV{constructor(e){super(),this.type=e}}class qV extends AV{constructor(e,t,n,r){super(),this.id=e,this.title=t,this.subtitle=n,this.status=r}}class zV extends AV{constructor(e,t,n,r){super(),this.adamId=e,this.platformId=t,this.isArcade=n,this.records=r}}class YV extends AV{constructor(e,t){super(),this.playerId=e,this.timestamp=t}}class JV extends AV{constructor(e,t,n){super(),this.videoUrl=e,this.preview=t,this.allowsAutoPlay=n.allowsAutoPlay,this.looping=n.looping,this.canPlayFullScreen=n.canPlayFullScreen,this.showPlaybackControls=n.showPlaybackControls,this.playbackControls={...n.playbackControls},this.autoPlayPlaybackControls={...n.autoPlayPlaybackControls},this.templateMediaEvent=null}}class KV{constructor(e,t,n,r){this.fileSizeByDevice=e,this.maxDownloadSizeInBytes=t,this.maxInstallSizeInBytes=n,this.maxEssentialInstallSizeInBytes=r}}class ZV extends AV{constructor(e,t,n){super(),this.badge=e,this.title=t,this.subtitle=n}}const QV={top:0,left:0,bottom:0,right:0}
!function(e){e.Mini="mini",e.ExtraWide="extraWide",e.None="none"}(kg||(kg={})),function(e){e.TopRight="topRight",e.TopLeft="topLeft",e.MiddleLeft="middleLeft"}(Og||(Og={})),function(e){e.SquareByWidth="squareByWidth",e.SquareByHeight="squareByHeight",e.FreeForm="freeForm"}(Eg||(Eg={}))
class XV{constructor(e,t,n,r,o){this.width=e,this.height=t,this.asRatioOfSize=null!=n&&n,this.location=r,this.constraint=o}}XV.defaultTileArtworkSafeArea={width:.4,height:.4,asRatioOfSize:!0,constraint:Eg.SquareByWidth,location:{relativeLocation:Og.TopRight}},XV.defaultPillArtworkSafeArea={width:.28,height:1,asRatioOfSize:!0,constraint:Eg.FreeForm,location:{relativeLocation:Og.MiddleLeft}},XV.defaultTileTextSafeArea={width:.15,height:0,asRatioOfSize:!0},XV.defaultPillTextSafeArea={width:.28,height:0,asRatioOfSize:!0}
const eH="com.apple.AppStore",tH="com.apple.AppStore.BridgeStoreExtension",nH="com.apple.MobileSMS",rH="com.apple.Arcade",oH="com.apple.TVAppStore",iH="com.apple.AppStore.ProductPageExtension"
class sH extends mV{get buildType(){return this.implementation.buildType}get deviceType(){return this.implementation.deviceType}get guid(){return this.implementation.guid}get isActivityAvailable(){return this.implementation.isActivityAvailable}get isElectrocardiogramInstallationAllowed(){return this.implementation.isElectrocardiogramInstallationAllowed}get isScandiumInstallationAllowed(){return this.implementation.isScandiumInstallationAllowed}get isSidepackingEnabled(){return this.implementation.isSidepackingEnabled}get isTinkerWatch(){return this.implementation.isTinkerWatch}get newPaymentMethodEnabled(){return this.implementation.newPaymentMethodEnabled}get screenCornerRadius(){return this.implementation.screenCornerRadius}get screenSize(){return EV.fromNativeSize(this.implementation.screenSize)}get storefrontIdentifier(){return this.implementation.storefrontIdentifier}get supportsHEIF(){return this.implementation.supportsHEIF}get thinnedApplicationVariantIdentifier(){return this.implementation.thinnedApplicationVariantIdentifier}get isMandrakeSupported(){return this.implementation.isMandrakeSupported}get isCharonSupported(){return this.implementation.isCharonSupported}get hostBundleId(){return this.implementation.hostBundleId}isPairedSystemVersionAtLeast(e){var t,n,r
return null!==(r=null===(n=(t=this.implementation).isPairedSystemVersionAtLeast)||void 0===n?void 0:n.call(t,e))&&void 0!==r&&r}deletableSystemAppCanBeInstalledOnWatchWithBundleID(e){return this.implementation.deletableSystemAppCanBeInstalledOnWatchWithBundleID(e)}deviceHasCapabilities(e){return this.implementation.deviceHasCapabilities(e)}deviceHasCapabilitiesIncludingCompatibilityCheckIsVisionOSCompatibleIOSApp(e,t){return(!this.isPad||!e.includes("healthkit"))&&(!this.isVision||!e.includes("iphone-performance-gaming-tier")&&!e.includes("apple-graphics-performance-tier"))&&this.implementation.deviceHasCapabilitiesIncludingCompatibilityCheckIsVisionOSCompatibleIOSApp(e,t)}isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(e,t,n){return this.implementation.isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(e,t,n)}canDevicePerformAppActionWithAppCapabilities(e,t){return this.implementation.canDevicePerformAppActionWithAppCapabilities(e,t)}isAutomaticDownloadingEnabled(){return this.implementation.isAutomaticDownloadingEnabled()}isAuthorizedForUserNotifications(){return this.implementation.isAuthorizedForUserNotifications()}isActivePairedWatchSystemVersionBelow(e){const t=e.split("."),n=f(t[0])||0,r=f(t[1])||0,o=f(t[2])||0
return!this.implementation.isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(n,r,o)}get isPhone(){return this.deviceType===Bj}get isPad(){return this.deviceType===Lj}get isiOS(){return this.isPhone||this.isPad}get isMac(){return this.deviceType===jj}get isTV(){return"tv"===this.deviceType}get isWatch(){return this.deviceType===Vj}get isVision(){return this.deviceType===Tj}get isCompanionVisionApp(){return this.hostBundleId===YI}get remoteDownloadIdentifiers(){return this.implementation.remoteDownloadIdentifiers}}sH.type=(0,Sg.makeMetatype)("app-store:client-wrapper")
class aH extends mV{async orderedVisibleIAPs(e,t,n,r){return await new Promise((o,i)=>{const s=t.filter(e=>null!=e),a=n.filter(e=>null!=e)
this.implementation.orderedVisibleIAPs(e,s,a,r,(e,t)=>{t?i(t):o(e)})})}async visibilityForIAPs(e){return await new Promise((t,n)=>{this.implementation.visibilityForIAPs(e,(e,n)=>{t(n?{}:e)})})}}aH.type=(0,Sg.makeMetatype)("app-store:client-ordering-wrapper")
class cH extends mV{info(...e){return this.implementation.info(...e)}error(...e){return this.implementation.error(...e)}log(...e){return this.implementation.log(...e)}warn(...e){return this.implementation.warn(...e)}}cH.type=(0,Sg.makeMetatype)("app-store:console-wrapper")
class lH extends mV{get clientIdentifier(){return this.implementation.clientIdentifier}get clientVersion(){return this.implementation.clientVersion}get deviceLocalizedModel(){return this.implementation.deviceLocalizedModel}get deviceModel(){return this.implementation.deviceModel}get deviceModelFamily(){return this.implementation.deviceModelFamily}get devicePhysicalModel(){return this.implementation.devicePhysicalModel}get deviceMarketingFamilyName(){return this.implementation.deviceMarketingFamilyName}get osBuild(){return this.implementation.osBuild}get platform(){return this.implementation.platform}isOSAtLeast(e,t,n){return this.implementation.isOSAtLeast(e,t,n)}get isiOS(){return this.platform===OU}get isMac(){return this.platform===vU}get isTV(){return this.platform===LN}get isWatch(){return this.platform===H_}get isWeb(){return"web"===this.platform}get isWindows(){return"Windows"===this.platform}get isVision(){return this.platform===W_}}lH.type=(0,Sg.makeMetatype)("app-store:host-wrapper")
class uH{constructor(){this.locData={},this.language="en"}updateLocalizationData(e,t){this.locData=e,this.language=t}localize(e,t){let n=this.locData[e]
return void 0!==n&&typeof n===vj||(n=e),t&&(n=this.replaceTokens(n,t)),n=this.replaceMarkupTokens(n,t),n}localizeWithCount(e,t,n,r){let o,i,s=null
return 0===n&&(o=`${t}.zero`,this.isLocalized(e,o)&&(s=o)),null===s&&(s=t,i=this.pluralCategory(e,n),i!==xB&&(o=`${t}.${i}`,this.isLocalized(e,o)&&(s=o))),r||(r={}),void 0===r.count&&(r.count=this.formatNumber(n.toString())),void 0===r.number&&(r.number=this.formatNumber(n.toString())),this.localize(null!=s?s:t,r)}replaceTokens(e,t){return Object.entries(t).forEach(([t,n])=>{const r="@@"+t+"@@"
e=this.replaceSubstring(e,r,n)}),e}replaceMarkupTokens(e,t){if(e.indexOf("##")<=-1)return e
let n
return t?(n={...uH.MARKUP_PARAMS},Object.entries(t).forEach(([e,t])=>{n[e]=t})):n=uH.MARKUP_PARAMS,Object.entries(n).forEach(([t,n])=>{const r="##"+t+"##"
e=e.replace(new RegExp(r,"gi"),n)}),e=e.replace(/##([^##]+)##/gi,"<$1>")}replaceSubstring(e,t,n){return e.split(t).join(n)}formatNumber(e){let t=this.locData._decimalSeparator
void 0!==t&&typeof t===vj||(t=".")
let n=this.locData._thousandsSeparator
void 0!==n&&typeof n===vj||(n=".")
const r=parseFloat(e).toString().split("."),o=r[0].split("")
for(let e=o.length-3;e>0;e-=3)o.splice(e,0,n)
return r[0]=o.join(""),r.join(t)}isLocalized(e,t){const n=this.locData[t]
return void 0!==n&&typeof n===vj&&(-1===t.indexOf(".")||n!==t&&(0!==n.indexOf("**")||n.lastIndexOf("**")!==n.length-2)||(e.console.error("Unlocalized key in keys dictionary",t),!1))}pluralCategory(e,t){const n=uH.pluralCategoryFnByLanguage[this.language]
return void 0!==n?n(t):(e.console.warn("Missing plural category function for: "+this.language),xB)}}uH.MARKUP_PARAMS={nbsp:"&nbsp;",gt:"&gt;",lt:"&lt;",copy:"\xa9"},uH.pluralCategoryDefault=function(e){return xB},uH.pluralCategoryOne=function(e){return 1===e?aN:xB},uH.pluralCategoryArabic=function(e){const t=e>>0
if(t!==e)return xB
if(0===t)return"zero"
if(1===t)return aN
if(2===t)return"two"
const n=t%100
return n>=11?cM:n>=3?A$:xB},uH.pluralCategoryFrench=function(e){return e<2&&e>=0?aN:xB},uH.pluralCategoryHebrew=function(e){const t=e>>0
return t!==e?xB:1===t?aN:2===t?"two":0==t%10&&t>10?cM:xB},uH.pluralCategoryPolish=function(e){const t=e>>0
if(t!==e)return xB
if(1===t)return aN
const n=t%10
if(n<=4&&n>=2){const e=t%100
if(e>14||e<12)return A$}return cM},uH.pluralCategoryRomanian=function(e){const t=e>>0
if(t!==e)return A$
if(0===t)return A$
if(1===t)return aN
const n=e%100
return n<=19&&n>=1?A$:xB},uH.pluralCategoryRussian=function(e){const t=e>>0
if(t!==e)return xB
const n=t%10
if(n>=5||0===n)return cM
const r=t%100
return r<=14&&r>=11?cM:1===n?aN:A$},uH.pluralCategoryFnByLanguage={zh:uH.pluralCategoryDefault,id:uH.pluralCategoryDefault,ja:uH.pluralCategoryDefault,ko:uH.pluralCategoryDefault,ms:uH.pluralCategoryDefault,th:uH.pluralCategoryDefault,vi:uH.pluralCategoryDefault,en:uH.pluralCategoryOne,ca:uH.pluralCategoryOne,da:uH.pluralCategoryOne,nl:uH.pluralCategoryOne,de:uH.pluralCategoryOne,el:uH.pluralCategoryOne,fi:uH.pluralCategoryOne,hu:uH.pluralCategoryOne,it:uH.pluralCategoryOne,nb:uH.pluralCategoryOne,no:uH.pluralCategoryOne,pt:uH.pluralCategoryOne,es:uH.pluralCategoryOne,sv:uH.pluralCategoryOne,tr:uH.pluralCategoryOne,ar:uH.pluralCategoryArabic,fr:uH.pluralCategoryFrench,iw:uH.pluralCategoryHebrew,pl:uH.pluralCategoryPolish,ro:uH.pluralCategoryRomanian,ru:uH.pluralCategoryRussian}
class dH extends mV{constructor(e,t){super(e),this.locFile=null,this.ampLoc=new uH,this.LOC_STRING_CACHE={},this.objectGraph=t}get identifier(){return this.implementation.identifier}get safeIdentifier(){return this.implementation.identifier.split("_")[0]}string(e,t){return this.implementation.string(e)}tryString(e){const t=this.implementation.string(e)
if(t===e||t===`**${e}**`)throw Pg.context("tryString",()=>{Pg.unexpectedType(gF,"Localization key",e,null)}),new Error(`No value exists for localization key '${e}'`)
return t}stringWithFallback(e,t){const n=this.implementation.string(e)
return n===`**AppStore.${e}**`?t:n}stringForPreferredLocale(e,t,n,r){if(o(n))return this.string(t,r)
const i=`${t}_${n}`
let s=this.LOC_STRING_CACHE[i]
if(!s)if(s=this.implementation.stringForPreferredLocale(t,n),s&&s!==t)this.LOC_STRING_CACHE[i]=s
else{const e=this.ampLoc.localize(t)
s=e!==t?e:r||t}return s}stringWithCount(e,t,n){let r=this.implementation.stringWithCount(e,t)
if(!r||r===e){const o=this.ampLoc.localizeWithCount(this.objectGraph,e,t,n)
o&&(r=o)}return r}stringWithCounts(e,t,n){return this.implementation.stringWithCounts(e,t)}uppercased(e){return e?e.toLocaleUpperCase(this.safeIdentifier):null}decimal(e,t){let n=this.implementation.decimal(e,t)
return n||(n=typeof e===mF?`* ${e.toString()} *`:this.nullString()),n}fileSize(e){let t=this.implementation.fileSize(e)
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
return typeof n===vj&&typeof t===vj&&-1!==n.indexOf(t)?"zh-ma":"zh-hk"}return t}nullString(){return"* null *"}load(e){if(void 0===e.bag.language||null===e.bag.language)throw new Error("Bag language is not available. Unable to load localizations.")
const t=this.normalizedLocale(e,e.bag.language,e.client.storefrontIdentifier),n=`local/${t}`
if(!this.isLocFileLoaded(n)){const r=e.props.asDictionary(`localizations.${t}`)
if(null!=r)this.applyLocalizations(n,r,t)
else{const r=e.props.asDictionary("localizations.en-us")
null!=r&&this.applyLocalizations(n,r,t)}}}deviceDisplayName(e){if(e.host.deviceLocalizedModel)return e.host.deviceLocalizedModel
switch(e.client.deviceType){case Bj:const e=this.string(EI)
return e===EI?ZI:e
case Lj:const t=this.string(RI)
return t===RI?Jm:t
case"tv":const n=this.string(DI)
return n===DI?"Apple\xa0TV":n
case Vj:const r=this.string(_I)
return r===_I?"Apple\xa0Watch":r
case jj:const o=this.string(LI)
return o===LI?dy:o
default:return null}}}dH.type=(0,Sg.makeMetatype)("app-store:loc-wrapper")
class fH extends mV{value(e){return n(this.implementation,e)}enabled(e){const t=this.value(e)
return typeof t!==DB?Boolean(t):Boolean(this.implementation.clientFeatures[e])}isNotEnabled(e){return!this.enabled(e)}asDictionary(e){return p(this.implementation,e)}asString(e){return d(this.implementation,e)}asNumber(e){return f(this.implementation,e)}asArray(e){return c(this.implementation,e)}}fH.type=(0,Sg.makeMetatype)("app-store:props-wrapper")
class pH extends mV{retrieveString(e){const t=this.implementation.retrieveString(e)
return(null==t?void 0:t.length)>0&&"<null>"!==t?t:null}storeString(e,t){this.implementation.storeString(t,e)}}pH.type=(0,Sg.makeMetatype)("app-store:storage-wrapper"),(Im=Rg||(Rg={})).ArcadeDownloadPackOnboarding="Tf5Kjqz",Im.CondensedTodayAds="tBc9hUt",Im.ProductPagePreloading="m0henFo",Im.ProductPageVariants="fNPb5Km",Im.ProductPageYMALRowCount="isj11bm",Im.SearchLandingPage="WqjkRLH"
class hH{constructor(){this.cachedTreatments={},this.cachedRawTreatments={}}async loadTreatments(e){const t=this.experimentAreasForPlatform(e)
if(t.length>0)try{this.cachedRawTreatments=await e.treatmentStore.treatmentsForAreas(t)
for(const[e,t]of Object.entries(this.cachedRawTreatments)){const n=t.identifier
this.cachedTreatments[e]={...t,identifier:n.split(":")[0]}}}catch(t){e.console.error("Failed to load treatments",t)}}currentTreatmentForExperiment(e){return this.cachedTreatments[e]}createAb2Data(){const e=[]
for(const[t,n]of Object.entries(this.cachedRawTreatments))e.push({areaId:t,bucket:-2,treatmentId:n.identifier})
return e}experimentAreasForPlatform(e){const t=[]
switch(e.client.deviceType){case Bj:case Lj:t.push(Rg.ArcadeDownloadPackOnboarding,Rg.CondensedTodayAds,Rg.ProductPagePreloading,Rg.ProductPageVariants,Rg.ProductPageYMALRowCount,Rg.SearchLandingPage)}return t}}hH.metatype=(0,Sg.makeMetatype)("app-store:experimentCache"),function(e){e.client="clientId",e.user="userId"}(Dg||(Dg={})),function(e){e.client="APPSTORE_ENGAGEMENT_CLIENT",e.user="APPSTORE_ENGAGEMENT"}(_g||(_g={})),function(e){e.client="APPSTORE_PAYMENTS_ENGAGEMENT_CLIENT",e.user="APPSTORE_PAYMENTS_ENGAGEMENT"}(Lg||(Lg={})),function(e){e.user="APPSTORE_PERSONALIZATION"}(xg||(xg={}))
const wH={[Dg.client]:{keyType:Dg.client,bagNamespace:Lg.client,crossSyncDevice:!1},[Dg.user]:{keyType:Dg.user,bagNamespace:Lg.user,crossSyncDevice:!0}},gH={[Dg.client]:{keyType:Dg.client,bagNamespace:_g.client,crossSyncDevice:!1},[Dg.user]:{keyType:Dg.user,bagNamespace:_g.user,crossSyncDevice:!0}},mH={[Dg.user]:{keyType:Dg.user,bagNamespace:xg.user,crossSyncDevice:!0}}
class vH{constructor(e=gH){this.cachedMetricsIds={},this.cachedMetricsFields={},this.shouldAddDsIdFallbackField=!1,this.userDsId=null,this.identifierContextMapping=e}async loadValues(e,t){e.bag.isMetricsUserIdFallbackEnabled&&!e.user.isUnderThirteen?(this.shouldAddDsIdFallbackField=!0,this.userDsId=e.user.dsid):(this.shouldAddDsIdFallbackField=!1,this.userDsId=null)
const n=[]
for(const r of t){const t=await this.loadValuesForIdType(e,r)
n.push(t)}for(const{idType:e,id:t,fields:r}of n)t&&(this.cachedMetricsIds[e]=t),r&&(this.cachedMetricsFields[e]=r)}async loadValuesForIdType(e,t){const n={idType:t},r=this.identifierContextMapping[t]
if(r){try{const o=await Pg.context("MetricsIdentifiersCache:loadValues:metricsFields",async()=>await e.metricsIdentifiers.getMetricsFieldsForContexts([r]))
if((0,Ig.isSome)(o)){n[NL]=o
const e=o[t];(0,Ig.isSome)(e)&&typeof e===vj&&e.length>0&&(n.id=e)}}catch(n){e.console.error(`Unable to fetch metrics fields for idType ${t}`,n)}if((0,Ig.isNothing)(n.id))try{const t=await Pg.context("MetricsIdentifiersCache:loadValues:metricsIdentifier",async()=>await e.metricsIdentifiers.getIdentifierForContext(r));(0,Ig.isSome)(t)&&(n.id=t)}catch(n){e.console.error(`Unable to fetch metrics identifier for idType ${t}`,n)}}return n}getMetricsIdForType(e){return this.cachedMetricsIds[e]}getMetricsFieldsForTypes(e){const t=e.map(e=>{var t
return null!==(t=this.cachedMetricsFields[e])&&void 0!==t?t:{}}),n=Object.assign({},...t)
return this.shouldAddDsIdFallbackField&&-1!==e.indexOf(Dg.user)&&this.addDsIdFallbackFieldIfNecessary(n),n}addDsIdFallbackFieldIfNecessary(e){const t=e[Dg.user];((0,Ig.isNothing)(t)||typeof t!==vj||0===t.length||t.length===vH.clientGeneratedUserIdLength)&&(0,Ig.isSome)(this.userDsId)&&this.userDsId.length>0&&(e[lO]=this.userDsId)}}vH.defaultMetatype=(0,Sg.makeMetatype)("app-store:metricsIdentifiersCache"),vH.paymentMetatype=(0,Sg.makeMetatype)("app-store:paymentMetricsIdentifiersCache"),vH.personalizationMetatype=(0,Sg.makeMetatype)("app-store:personalizationMetricsIdentifiersCache"),vH.clientGeneratedUserIdLength=24
const yH={bag:Tg.bag,dispatcher:(0,Sg.makeMetatype)("dispatcher"),host:Tg.host,localizer:Tg.localizer,network:Tg.net,plist:Tg.plist,platform:Tg.platform,router:(0,Sg.makeMetatype)("router"),client:(0,Sg.makeMetatype)("client"),debugSettings:(0,Sg.makeMetatype)("debugSettings"),nativeIntentDispatcher:(0,Sg.makeMetatype)("nativeIntentDispatcher")}
class AH extends yg.ObjectGraph{configureDefaults(e,t,n,r,o,i,s,a,c,l,u,d,f,p,h,w,g,m,v,y,A,T,S,P,b,I,C,k,O,E,R,D,_,L,x){const M=this.addingCryptography(t).addingHost(n).addingNetwork(r).addingPlatform(o).addingPlist(i).addingRandom(s).addingServices(a).addingCookieProvider(c).addingBag(e).addingConsole(l).addingStoreMetrics(u).addingAMSEngagement(d).addingLoc(f).addingAdsLoc(p).addingDevice(h).addingClient(w).addingProperties(g).addingUser(m).addingMetricsIdentifiers(v).addingClientOrdering(y).addingPersonalizationStore(A).addingArcade(T).addingGameCenter(S).addingDeepLinks(P).addingAppleSilicon(b).addingStorage(I).addingAds(C).addingOnDeviceRecommendationsManager(k).addingOnDeviceSearchHistoryManager(O).addingFeatureFlags(E).addingMediaToken(R).addingAppDistribution(D).addingTimeoutManager(_).addingAdsLoc(p).addingTreatmentStore(L).addingUserDefaults(x)
return M.loc.load(M),M}get bag(){return this.required(yV.type)}addingBag(e){return this.addingBagWrapper(new yV(e,this.host)).adding(Tg.bag,e)}addingBagWrapper(e){return this.adding(yV.type,e)}get console(){return this.required(cH.type)}addingConsole(e){return this.addingConsoleWrapper(new cH(e))}addingConsoleWrapper(e){return this.adding(cH.type,e)}get cryptography(){return this.required(Tg.cryptography)}addingCryptography(e){return this.adding(Tg.cryptography,e)}get host(){return this.required(lH.type)}addingHost(e){return this.addingHostWrapper(new lH(e))}addingHostWrapper(e){return this.adding(lH.type,e)}get network(){return this.required(Tg.net)}addingNetwork(e){return this.adding(Tg.net,e)}get platform(){return this.required(Tg.platform)}addingPlatform(e){return this.adding(Tg.platform,e)}get plist(){return this.required(Tg.plist)}addingPlist(e){return this.adding(Tg.plist,e)}get random(){return this.required(Tg.random)}addingRandom(e){return this.adding(Tg.random,e)}get services(){return this.required(Tg.services)}addingServices(e){return this.adding(Tg.services,e)}get cookieProvider(){return this.required(Tg.cookieProvider)}addingCookieProvider(e){return this.adding(Tg.cookieProvider,e)}get fetchTimingMetricsBuilder(){return this.optional(Ag.fetchTimingMetricsBuilderType)}addingFetchTimingMetricsBuilder(e){return this.adding(Ag.fetchTimingMetricsBuilderType,e)}get storeMetrics(){return this.required(Zj)}addingStoreMetrics(e){return this.adding(Zj,e)}get amsEngagement(){return this.optional(Qj)}addingAMSEngagement(e){return this.adding(Qj,e)}get loc(){return this.required(dH.type)}addingLoc(e){return this.addingLocWrapper(new dH(e,this))}addingLocWrapper(e){return this.adding(dH.type,e)}get adsLoc(){return this.required(dV)}addingAdsLoc(e){return this.adding(dV,e)}get device(){return this.required(Xj)}addingDevice(e){return this.adding(Xj,e)}get client(){return this.required(sH.type)}addingClient(e){return this.addingClientWrapper(new sH(e))}addingClientWrapper(e){return this.adding(sH.type,e)}get props(){return this.required(fH.type)}addingProperties(e){return this.addingPropertiesWrapper(new fH(e))}addingPropertiesWrapper(e){return this.adding(fH.type,e)}get user(){return this.required(eV)}addingUser(e){return this.adding(eV,e)}get metricsIdentifiers(){return this.required(tV)}addingMetricsIdentifiers(e){return this.adding(tV,e)}get clientOrdering(){return this.required(aH.type)}addingClientOrdering(e){return this.addingClientOrderingWrapper(new aH(e))}addingClientOrderingWrapper(e){return this.adding(aH.type,e)}get personalizationStore(){return this.required(nV)}addingPersonalizationStore(e){return this.adding(nV,e)}get arcade(){return this.required(rV)}addingArcade(e){return this.adding(rV,e)}get gameCenter(){return this.required(oV)}addingGameCenter(e){return this.adding(oV,e)}get deepLinks(){return this.required(iV)}addingDeepLinks(e){return this.adding(iV,e)}get appleSilicon(){return this.required(vV.type)}addingAppleSilicon(e){return this.addingAppleSiliconWrapper(new vV(e))}addingAppleSiliconWrapper(e){return this.adding(vV.type,e)}get storage(){return this.required(pH.type)}addingStorage(e){return this.addingStorageWrapper(new pH(e))}addingStorageWrapper(e){return this.adding(pH.type,e)}get ads(){return this.required(sV)}addingAds(e){return this.adding(sV,e)}get onDeviceRecommendationsManager(){return this.required(aV)}addingOnDeviceRecommendationsManager(e){return this.adding(aV,e)}get onDeviceSearchHistoryManager(){return this.required(cV)}addingOnDeviceSearchHistoryManager(e){return this.adding(cV,e)}get featureFlags(){return this.required(lV)}addingFeatureFlags(e){return this.adding(lV,e)}get mediaToken(){return this.required(uV)}addingMediaToken(e){return this.adding(uV,e)}get appDistribution(){return this.required(fV)}addingAppDistribution(e){return this.adding(fV,e)}get timeoutManager(){return this.required(pV)}addingTimeoutManager(e){return this.adding(pV,e)}get treatmentStore(){return this.required(hV)}addingTreatmentStore(e){return this.adding(hV,e)}get experimentCache(){return this.optional(hH.metatype)}get metricsIdentifiersCache(){return this.optional(vH.defaultMetatype)}get paymentMetricsIdentifiersCache(){return this.optional(vH.paymentMetatype)}get personalizationMetricsIdentifiersCache(){return this.optional(vH.personalizationMetatype)}get userDefaults(){if(!this.props.isNotEnabled("jsUserDefaults"))return this.required(wV)}addingUserDefaults(e){return this.adding(wV,e)}isAvailable(e){return i(this.optional(e))}get dispatcher(){return this.required(yH.dispatcher)}get nativeIntentDispatcher(){return this.required(yH.nativeIntentDispatcher)}get debugSettings(){return this.required(yH.debugSettings)}get router(){return this.required(yH.router)}get localizer(){return this.required(yH.localizer)}}class TH{static createSharedMetricsReferralContext(e){TH.shared||(TH.shared=new TH(e))}constructor(e){this.currentReferral=null,this.isMetricsReferralContextRequired=!0,this.isEventDetailClickEventOverrideNecessary=!e.host.isOSAtLeast(16,2,0)}get shouldUseJSReferralData(){return this.isMetricsReferralContextRequired&&i(this.currentReferral)}get activeReferralData(){return this.shouldUseJSReferralData&&null!==this.currentReferral&&this.currentReferral.isActive?this.currentReferral.data:null}setReferralDataForProduct(e,t){var n,o,i
if(!this.isMetricsReferralContextRequired||r(t))return
const s=null!==(n=d(t,Oj))&&void 0!==n?n:null,a=null!==(o=d(t,gM))&&void 0!==o?o:null,c=null!==(i=h(t,tG))&&void 0!==i?i:null
this.currentReferral={id:`${e}_${Date.now()}`,data:{extRefApp2:s,extRefUrl2:a,kind:c,refUrl:null},isActive:!1,productPageExtensionInfo:null}}setReferralDataForProductPageExtensionIfNecessary(e){var t,o
if(!this.isMetricsReferralContextRequired)return
const i=d(e,hB),s=d(e,$x)
if(!SH.isProductPageExtension(e)||!SH.isValidPageEvent(e)||r(i)||r(s))return
const a=null!==(t=d(e,tF))&&void 0!==t?t:null,c=d(e,uO)
let l
switch(c){case eT:l=m(n(e,tT))
break
case dO:l=m(n(e,nT))
break
default:l={}}const u=null!==(o=d(e,nF))&&void 0!==o?o:null
this.currentReferral={id:`${i}_${Date.now()}`,data:{extRefApp2:s,extRefUrl2:a,refUrl:u,kind:{name:c,context:l}},isActive:!1,productPageExtensionInfo:{productId:i}},this.addReferralContextToMetricsFieldsIfNecessary(e)}beginReferralContextForPageIfNecessary(e){this.isMetricsReferralContextRequired&&SH.isValidPageEvent(e)&&SH.isReferralForEvent(this.currentReferral,e)&&null!==this.currentReferral&&(this.currentReferral.isActive=!0)}endReferralContextIfNecessaryForPageEvent(e){this.isMetricsReferralContextRequired&&SH.isValidPageEvent(e)&&SH.isReferralForEvent(this.currentReferral,e)&&(this.currentReferral=null)}addReferralContextToMetricsFieldsIfNecessary(e){var t
this.isMetricsReferralContextRequired&&(e[TH.referralContextEventField]=null===(t=this.currentReferral)||void 0===t?void 0:t.id)}removeReferralContextInfoFromMetricsEvent(e){this.isMetricsReferralContextRequired&&delete e[TH.referralContextEventField]}addReferralDataToEventIfNecessary(e){if(!r(this.activeReferralData)&&SH.shouldAddReferralDataToEvent(e)&&(!SH.isEventDetailsClickEvent(e)||this.isEventDetailClickEventOverrideNecessary)&&(SH.isEventDetailsClickEvent(e)&&(e[oU]=WL),e[$x]=this.activeReferralData.extRefApp2,e[tF]=this.activeReferralData.extRefUrl2,s(this.activeReferralData.refUrl)&&(e[nF]=this.activeReferralData.refUrl),null!==this.activeReferralData&&null!==this.activeReferralData.kind))switch(e[uO]=this.activeReferralData.kind.name,e[uO]){case eT:e[tT]=this.activeReferralData.kind.context
break
case dO:e[nT]=this.activeReferralData.kind.context}}}TH.referralContextEventField="referralContextId"
class SH{static isProductPageExtension(e){return d(e,Oj)===SH.productPageExtensionAppId}static isValidPageEvent(e){const t=d(e,oU)
return!(0,Ig.isNothing)(t)&&SH.validPageEventTypes.has(t)}static isReferralForEvent(e,t){var n
if(r(e))return!1
const o=t[TH.referralContextEventField],s=d(t,hB)
return i(o)?o===e.id:!(!SH.isProductPageExtension(t)||!i(s))&&s===(null===(n=null==e?void 0:e.productPageExtensionInfo)||void 0===n?void 0:n.productId)}static shouldAddReferralDataToEvent(e){return e.eventType!==WF||this.isEventDetailsClickEvent(e)}static isEventDetailsClickEvent(e){if(e.eventType!==WF)return!1
const t=e.location,n=null==t?void 0:t[0]
return i(n)&&n.locationType===WL}}SH.productPageExtensionAppId="com.apple.AppStore.ProductPageExtension",SH.eventDetailsPageType=WL,SH.validPageEventTypes=new Set([wB,fO,SH.eventDetailsPageType])
const PH=(Mg=e(447)).PageInvocationPoint
PH[sj]=sj,PH[jI]=jI,PH[rG]=rG,PH[NR]=NR
const bH="xp_ase_appstore_ue"
class IH{constructor(e,t,n,r,o=!1){this.fields=e,this.includingFields=t,this.excludingFields=n,this.topic=r,this.shouldFlush=o}}class CH extends AV{constructor(e){super(),this.fields=e}}class kH extends AV{constructor(e){super(),this.data=e||[],this.custom={}}addMetricsData(e){this.data.push(e)}addManyMetricsData(e){for(const t of e)this.addMetricsData(t)}clearAll(){this.data.length=0}}class OH extends AV{constructor(){super(),this.instructions=[],this.custom={}}addInstruction(e){this.instructions.push(e)}addManyInstructions(e){for(const t of e)this.addInstruction(t)}addData(e,t){const n={data:e,invocationPoints:t}
this.instructions.push(n)}addManyData(e,t){for(const n of e)this.addData(n,t)}}class EH{constructor(e,t,n){this.fields=e,this.id=t,this.custom=n}}class RH extends EH{constructor(e,t){super(e.fields,e.id,e.custom||{}),void 0!==this.custom&&(this.custom.isFast=t),this.isFast=t}}class DH extends TV{constructor(e){super(),this.title=null,this.artwork=null,this.presentationStyle=[],this.actionClass=e,this.$kind=e,this.actionMetrics=new kH}}class _H extends DH{constructor(e){super(Mm),this.navigationTab=e,this.actions=[],this.popToRoot=!1}}class LH extends DH{constructor(e,t){super("TabBadgeAction"),this.navigationTab=e,this.text=t}}class xH extends DH{constructor(e,t=!0){super("ExternalUrlAction"),this.url=e,this.isSensitive=t}}class MH extends DH{constructor(e){super("CompoundAction")
const t=[]
for(const n of e)this.actionMetrics.addManyMetricsData(n.actionMetrics.data),Object.assign(this.actionMetrics.custom,n.actionMetrics.custom),n.actionMetrics.clearAll(),t.push(n)
this.actions=t}}class $H extends DH{constructor(e,t,n,r){super("OfferAction"),this.title=e,this.adamId=t,this.parentAdamId=r,this.purchaseConfiguration=n,n&&(this.bundleId=n.bundleId,this.lineItem=n.lineItem),this.includeBetaApps=!1}}class FH extends DH{constructor(e,t){super("OfferConfirmationAction"),this.buyAction=e,this.confirmationInitiationAction=t}}class NH extends DH{constructor(){super("OfferAlertAction"),this.title=null,this.message=null,this.footerMessage=null,this.isCancelable=!0,this.shouldCheckForAvailableDiskSpace=!1,this.checkRestrictionsForContentRating=null,this.remoteControllerRequirement=hN,this.shouldCheckForGameController=!1,this.shouldIncludeActiveAccountInFooterMessage=!1,this.shouldPromptForConfirmation=!1,this.completionAction=null}}class BH extends DH{constructor(e,t){super("CancelPreorderAction"),this.preorderAdamId=e,this.isArcade=t}}class UH extends DH{constructor(e,t,n,r,o){super("InAppPurchaseAction"),this.productIdentifier=e,this.appAdamId=t,this.appBundleId=n,this.installRequiredAction=r,this.minimumShortVersionSupportingInAppPurchaseFlow=o}}class GH extends DH{constructor(e,t){super("OfferStateAction"),this.title=t.title,this.adamId=e,this.defaultAction=t,this.includeBetaApps=!1}}class jH extends DH{constructor(e,t=Oj){super("OpenAppAction"),this.adamId=e,this.destination=t}}class VH extends DH{constructor(e){super("ArcadePackOfferAction"),this.offerActions=e}}class HH extends DH{constructor(e){super("SelectAppAction"),this.adamId=e}}class WH extends DH{constructor(e){super("HttpAction"),this.url=e,this.method=b$,this.headers={},this.body=null,this.isStoreRequest=!1,this.needsAuthentication=!1,this.needsMediaToken=!1,this.retryCount=0,this.disableCache=!1,this.successAction=null,this.failureAction=null}}class qH{constructor(e,t,n,r){this.key=e,this.target=t,this.inputType=n,this.title=r,this.isRequired=!0,this.maximumLength=null}}class zH extends DH{constructor(e){super("HttpTemplateAction"),this.message=null,this.url=e,this.method=b$,this.headers={},this.body=null,this.bodyDictionary={},this.parameters=[],this.isStoreRequest=!1,this.needsAuthentication=!1,this.needsMediaToken=!1,this.retryCount=0,this.disableCache=!1,this.successAction=null,this.failureAction=null}}class YH extends zH{}class JH extends DH{constructor(e,t){super("WriteReviewAction"),this.adamId=e,this.url=t}}class KH extends DH{constructor(e,t,n){super(null!=n?n:"PageTabChangeAction"),this.selectedTabId=e,this.title=t}}class ZH extends DH{constructor(){super("GameCenterDashboardAction")}}class QH extends DH{constructor(e){super("SheetAction"),this.actions=e,this.isCancelable=!1,this.cancelTitle=null,this.message=null,this.style=hj,this.isCustom=!1,this.destructiveActionIndex=null}}class XH extends DH{constructor(e){super("AlertAction"),this.style=e,this.title=null,this.message=null,this.isCancelable=!1,this.cancelTitle=null,this.cancelAction=null,this.buttonActions=[],this.buttonTitles=[],this.destructiveActionIndex=null,this.imageName=null}}class eW extends TV{constructor(e,t){super(),this.activityType=e,this.action=t}}class tW extends DH{constructor(e,t,n=$m){super("ShareSheetAction"),this.data=e,this.activities=t,this.shareSheetStyle=n}}class nW extends DH{constructor(e){super("ReportConcernAction"),this.reasons=e}}class rW extends DH{constructor(e,t,n,r){super("ReviewSummaryReportConcernAction"),this.concerns=e,this.title=t,this.explanation=n,this.sendAction=r}}class oW extends DH{constructor(e,t){super("ProductPageScrollAction"),this.section=e,this.clicksOnScroll=t}}class iW extends DH{constructor(e,t,n,r){super("ArcadeAction"),this.productIdentifier=e,this.appAdamId=t,this.postSubscribeAction=r,this.subscriptionToken=n}}class sW extends DH{constructor(e,t,n){super("FamilyCircleAction"),this.clientName=e,this.eventType=t,this.additionalParameters=n}}class aW extends DH{constructor(){super("BlankAction")}}class cW extends DH{constructor(e){super("SearchAdAction"),this.action=e}}class lW extends DH{constructor(e,t){super("RateLimitedAction"),this.actionKey=e,this.primaryAction=t}}class uW extends DH{constructor(e,t,n,r){super("ArcadeSubscriptionStateAction"),this.notSubscribedAction=e,this.purchasingAction=t,this.subscribedAction=n,this.unknownAction=r}}class dW extends DH{constructor(e){super("GameCenterPlayerProfileAction"),this.playerId=e}}class fW extends DH{constructor(e){super("GameCenterAchievementsAction"),this.bundleId=e}}class pW extends DH{constructor(e){super(Fm),this.contactId=e}}class hW extends DH{constructor(e){super(Fm),this.invitationType=e}}class wW extends DH{constructor(e){super("GameCenterDenylistPlayerAction"),this.contactId=e}}class gW extends DH{constructor(e,t){super("EngagementToggleAction"),this.identifier=e,this.value=t}}class mW extends DH{constructor(e,t,n,r,o,i){super("ShelfBasedPageScrollAction"),this.shelfId=e,this.notPurchasedShelfId=t,this.purchasedShelfId=n,this.adamId=r,this.index=o,this.clicksOnScroll=i}}class vW extends DH{constructor(){super("InvalidateAllWidgetsAction")}}class yW extends DH{constructor(e,t,n){super("AppLaunchTrampolineAction"),this.bundleId=e,this.payloadUrl=t,this.fallbackAction=n}}class AW extends DH{constructor(e,t,n,r,o,i,s,a,c){super("CreateCalendarEventAction"),this.startDate=e,this.endDate=t,this.isAllDay=n,this.name=r,this.location=o,this.notes=i,this.url=s,this.notAuthorizedAction=a,this.availability=c}}class TW extends DH{constructor(e){super("CopyTextAction"),this.text=e}}class SW extends DH{constructor(){super("ClearAppUsageDataAction")}}class PW extends DH{constructor(){super("ClearSearchHistoryAction")}}class bW extends DH{constructor(e){super("AdInteractionAction"),this.adActionMetrics=e}}class IW extends DH{constructor(e){super("CrossfireReferralAction"),this.referrerData=e}}const CW="x-as3-internal",kW=SR,OW="itms-apps",EW="appstore-ui",RW=Kj,DW="WebObjects/MZStore.woa/wa",_W=Kb,LW=$_,xW="viewGrouping",MW="viewSoftware",$W=kF,FW="arcadeSeeAllGamesLoadMore",NW=vG,BW=HR,UW="viewRoom",GW=MM,jW=Oj,VW=mk,HW=Zb,WW=mG,qW=RT,zW=Ij,YW=wN,JW=uN,KW=Xv,ZW="todayCardPreview",QW=bx,XW=dG,eq=ax,tq=Mx,nq=hF,rq="apps-for-you",oq="searchLandingPage",iq=QO,sq=Wb,aq="onDeviceRecommendations",cq="editorialPage",lq="storepreview.apple.com",uq=JU,dq=Db,fq=kF,pq="familyCircle",hq="spamBlockingExtensions",wq=Dy,gq="launchApp",mq="sharePlayApps",vq="buddyOnboarding",yq=new Set([lq,"preview.apps.apple.com"]),Aq={id:"id",ids:"ids",productVariantID:h$,countryCode:"cc",featuredContentId:"fcId",fetchData:"fetchData",isTodaySection:"isTodaySection",isTodayFeedPreview:"isTodayFeedPreview",genre:vG,bundleIdentifier:"bundleIdentifier",bundleId:nj,offerName:lB,charts:MM,ages:C$,chart:TG,types:LF,v0:"v0",action:_G,type:PU,context:pO,isArcade:Uk,isSubscribed:"isSubscribed",isTrialAvailable:"isTrialAvailable",isTrialEnrolled:"isTrialEnrolled",groupingFeaturedContentId:"groupingFeaturedContentId",editorialPageShelfType:"editorialPageShelfType",nativeGroupingShelfId:"nativeGroupingShelfId",isArcadeSeeAllGamesShelf:"isArcadeSeeAllGamesShelf",isGameCenterActivityFeedShelf:"isGameCenterActivityFeedShelf",isGameCenterPlayerShelf:"isGameCenterPlayerShelf",isGameCenterPlayerRibbonItem:"isGameCenterPlayerRibbonItem",isGameCenterAchievementsShelf:"isGameCenterAchievementsShelf",isGameCenterContinuePlayingShelf:"isGameCenterContinuePlayingShelf",isGameCenterPopularWithYourFriendsShelf:"isGameCenterPopularWithYourFriendsShelf",isGameCenterSuggestedFriendsShelf:"isGameCenterSuggestedFriendsShelf",isGameCenterReengagementShelf:"isGameCenterReengagementShelf",isOnDeviceRecommendationsShelf:"isOnDeviceRecommendationsShelf",isOnDeviceSearchHistoryShelf:"isOnDeviceSearchHistoryShelf",isSearchFocusHeaderShelf:"isSearchFocusHeaderShelf",isArcadeDownloadPackShelfPlaceholder:"isArcadeDownloadPackShelfPlaceholder",onDeviceRecommendationsUseCase:"onDeviceRecommendationsUseCase",onDevicePersonalizationUseCase:Rx,isPurchasesApp:"isPurchasesApp",isViewOnly:$C,includeUnlistedApps:"includeUnlistedApps",enabled:gy,href:Mx,recoMetrics:"recoMetrics",showingFallbackMedia:"showingFallbackMedia",path:"path",useReleaseId:"useReleaseId",clientIdentifierOverride:HA,subscribePageMessage:CL,editorialItem:uN,askToBuyId:"askToBuyId",appId:"appId",isPPT:"isPPT",sort:XU,grouping:J$,code:I$,includePostSubscribeAttribution:"includePostSubscribeAttribution",campaignToken:"ct",providerToken:"pt",qToken:hI,advertisementId:wI,token:uU,parseContext:"parseContext",privacyTypeId:"privacyTypeId",requestDescriptor:"requestDescriptor",ageRating:"ageRating",controllerSupport:Ov,multiplayerSupport:"multiplayerSupport",comingSoon:uD,binCompatGames:"binCompatGames",gamePreviews:"gamePreviews",offerHints:"offerHints",invalidateWidgetsOnFailure:Nv,metrics:CB,appEventId:"eventid",offerItemId:"offerItemId",appEventDeepLink:hC,useCaseShort:"uc",collectionId:"collection-id",seedId:"seed-id",isShelfWithAd:"isShelfWithAd",shelfWithAdPlacementType:"shelfWithAdPlacementType",shelfRefreshType:"refreshType",isPreloading:"isPreloading",name:Yj,shelfType:"shelfType",shelfId:"shelfId",onbaordingCardIds:"onboardingCardIds",preview:ty,todayCardConfig:"todayCardConfig",experimentId:tE,shortEditorialNotes:x$,arcadeSubscriptionStatus:"subscriptionStatus",webBrowser:M_,editorialPageId:"editorialPageId",editorialCardId:"filter[canvas:cardId]",filterRecommendable:"filter[recommendable]"},Tq="inAppPurchaseId",Sq="productUrl",Pq=n_,bq="minExternalVersionId",Iq=jU,Cq=XU,kq="availableAdamIds",Oq=Oj,Eq=Ij,Rq="productPageSimilarItems",Dq=/^([a-z][a-z0-9.+-]*:)(\/\/)?([\S\s]*)/i,_q=/([^=?&]+)=?([^&]*)/g,Lq=[TL,pB,lU,sN]
class xq{constructor(e){if(this.query={},!e)return
let t=e
const n=Dq.exec(e)
if(n){let e=n[1]
e&&(e=e.split(":")[0]),this.protocol=e,t=n[3]}let r={remainder:t,result:void 0}
for(const e of Lq){if(!r.remainder)break
switch(e){case TL:r=v(r.remainder,"#",_R),this.hash=r.result
break
case pB:r=v(r.remainder,"?",_R),r.result&&(this.query=xq.queryFromString(r.result))
break
case lU:r=v(r.remainder,"/",_R),r.result&&(this.pathname="/"+r.result)
break
case sN:if(r.remainder){const e=v(r.remainder,"@",gI),t=e.result,n=e.remainder
if(t){const e=t.split(":")
this.username=decodeURIComponent(e[0]),this.password=decodeURIComponent(e[1])}if(n){const e=n.split(":")
this.host=e[0],this.port=e[1]}}break
default:throw new Error("Unhandled case!")}}}set(e,t){if(!t)return this
switch(e===pB&&typeof t===vj&&(t=xq.queryFromString(t)),e){case BB:this.protocol=t
break
case mI:this.username=t
break
case vI:this.password=t
break
case yI:this.port=t
break
case lU:this.pathname=t
break
case pB:this.query=t
break
case TL:this.hash=t
break
default:this[e]=t}return this}get(e){switch(e){case BB:return this.protocol
case mI:return this.username
case vI:return this.password
case yI:return this.port
case lU:return this.pathname
case pB:return this.query
case TL:return this.hash
default:return this[e]}}append(e,t){const n=this.get(e)
let r
if(e===pB)typeof t===vj&&(t=xq.queryFromString(t)),r=typeof n===vj?{existingValue:n,...t}:{...n,...t}
else{let o=n
o||(o="")
let i=o
if(e===lU){const e=o.length
e&&"/"===o[e-1]||(i+="/")}i+=t,r=i}return this.set(e,r)}param(e,t){return e?(this.query||(this.query={}),this.query[e]=t,this):this}removeParam(e){return e&&this.query?(void 0!==this.query[e]&&delete this.query[e],this):this}path(e){return this.append(lU,e)}pathExtension(){var e
if((0,bg.isNothing)(this.pathname))return null
const t=null===(e=this.pathname.split("/").filter(e=>e.length>0).pop())||void 0===e?void 0:e.split(".")
return void 0===t||t.filter(e=>""!==e).length<2?null:t.pop()}pathComponents(){return this.pathname?this.pathname.split("/").filter(e=>e.length>0):[]}popPathComponent(){if(!this.pathname)return null
const e=this.pathname.slice(this.pathname.lastIndexOf("/")+1)
return 0===e.length?null:(this.pathname=this.pathname.slice(0,this.pathname.lastIndexOf("/")),e)}build(){return this.toString()}toString(){let e=""
return this.protocol&&(e+=this.protocol+"://"),this.username&&(e+=encodeURIComponent(this.username),this.password&&(e+=":"+encodeURIComponent(this.password)),e+="@"),this.host&&(e+=this.host,this.port&&(e+=":"+this.port)),this.pathname&&(e+=this.pathname,e.endsWith("/")&&this.pathname.length>0&&(e=e.slice(0,-1))),this.query&&Object.keys(this.query).length&&(e+="?"+xq.toQueryString(this.query)),this.hash&&(e+="#"+this.hash),e}static queryFromString(e){const t={}
let n=_q.exec(e)
for(;n;){const r=decodeURIComponent(n[1]),o=decodeURIComponent(n[2])
t[r]=o,n=_q.exec(e)}return t}static toQueryString(e){let t="",n=!0
for(const r of Object.keys(e)){n||(t+="&"),n=!1,t+=encodeURIComponent(r)
const o=e[r]
o&&o.length&&(t+="="+encodeURIComponent(o))}return t}static from(e){return new xq(e)}static fromComponents(e,t,n,r,o){const i=new xq
return i.protocol=e,i.host=t,i.pathname=n,i.query=r,i.hash=o,i}}const Mq=[kW,OW,"itms-appss","itms-messages","itms-messagess","itms-watch","itms-watchs","macappstore","macappstores","com.apple.tvappstore","com.apple.TVAppStore","com.apple.Arcade"]
class $q{constructor(e){var t
this.identifier=e.identifier,this._protocol=null==(t=e.protocol)?null:t,this._hostName=e.hostName,e.path?(this._pathComponents=e.path.split("/").filter(e=>e.length>0),this._pathParameterMap=function(e){const t={}
return e.forEach((e,n)=>{S(e)&&(t[e]=n)}),t}(this._pathComponents)):(this._pathComponents=null,this._pathParameterMap=null),this._pathExtension=e.pathExtension,this._query=function(e){const t=[]
if(!e)return t
for(const n of e){const e=n.split("=")
let r=e[0]
const o=-1!==r.indexOf("?")
r=r.replace("?","")
const i=-1!==r.indexOf(AI)
r=r.replace(AI,"")
let s=null
e.length>1&&(s=decodeURIComponent(e[1])),t.push({key:r,value:s,optional:o,caseInsensitive:i})}return t}(e.query),this._hash=e.hash,this._regex=e.regex,e.exclusions?this._exclusions=e.exclusions.map(function(e){return new $q(e)}):this._exclusions=null}matches(e){var t,n
if(this._regex){if(!this._regex.length)return!1
let t=!1
for(const n of this._regex)if(n.test(e.toString())){t=!0
break}if(!t)return!1}if(this._protocol&&e.protocol!==this._protocol)return!1
if(this._hostName&&e.host!==this._hostName)return!1
if(this._pathComponents){const t=this._pathComponents,n=e.pathComponents()
if(t.length!==n.length)return!1
const r=t.length
for(let e=0;e<r;e++){const r=t[e]
if(!S(r)&&r!==n[e])return!1}}if(this._pathExtension&&e.pathExtension()!==this._pathExtension)return!1
if(this._query)for(const r of this._query){let o
if(r.caseInsensitive)for(const[n,i]of Object.entries(null!==(t=e.query)&&void 0!==t?t:{}))r.key.toLocaleLowerCase()===n.toLocaleLowerCase()&&(o=i)
else o=null===(n=e.query)||void 0===n?void 0:n[r.key]
if(!o&&!r.optional)return!1
if(r.value&&r.value!==o)return!1}if(this._hash&&e.hash!==this._hash)return!1
if(this._exclusions)for(const t of this._exclusions){if(t._exclusions)throw Error("Matching exclusion rules with further exclusion rules may introduce significant code-complexity and/or reduce the ease with which developers are able to reason about your desired goals. Are there any simpler options?")
if(t.matches(e))return!1}return!0}extractParameters(e){var t,n
const r={}
if(null!==this._pathComponents&&null!==this._pathParameterMap){const t=e.pathComponents()
for(const e of Object.keys(this._pathParameterMap)){const n=P(e),o=b(t[this._pathParameterMap[e]],e)
r[n]=decodeURIComponent(o)}}if(this._query)for(const o of this._query)r[o.key]=null!==(n=null===(t=e.query)||void 0===t?void 0:t[o.key])&&void 0!==n?n:void 0
return r}}class Fq{constructor(){this._routeMappings=[]}associate(e,t){const n=[]
for(const t of e)n.push(new $q(t))
this._routeMappings.push({route:n,object:t})}routedObjectForUrl(e){let t=typeof e===vj?new xq(e):e
t=function(e){let t=typeof e===vj?new xq(e):e
if(!T(t))return t
const n=t.query,r=null==n?void 0:n[Sj]
return(!t.host||0===t.host.length)&&null!=r&&(t=new xq(r),(null==n?void 0:n[xO])&&(t=t.append(pB,{dsid:n[xO]})),(null==n?void 0:n[TI])&&(t=t.append(pB,{signatureResumption:n[TI]}))),xq.fromComponents(kW,t.host,t.pathname,t.query,t.hash)}(t),t=function(e){var t,n,r
const o=typeof e===vj?new xq(e):e
if(!T(o))return o
const i=o.build()
let s,a=(0,bg.isNothing)(o.query)?void 0:y(o.query)
const c={},l=[{key:"MZSearch.woa",action:sj},{key:sj,action:sj},{key:"buyLandingPage",action:wM},{key:"buyCharityGiftWizard",action:Hm},{key:"longUrlHandler",action:SI},{key:jR,action:jR}],u={"accessory-lookup":"accessoryLookup","finance-app":dG,viewEula:hF,software:zj,primaryTerm:sj}
let d=!1
for(const e of Object.keys(c))if(o.host&&-1!==o.host.indexOf(e)){d=!0,s=c[e]
break}let f=!1
for(const e of l){const t=e.key
if(o.pathname&&-1!==o.pathComponents().indexOf(t)){f=!0,s=e.action,void 0!==(null==a?void 0:a[t])&&delete a[t]
break}}for(const e of Object.keys(u)){const r=void 0!==(null===(t=o.query)||void 0===t?void 0:t[e])&&null!==o.query[e],i=(null===(n=o.query)||void 0===n?void 0:n[_G])&&-1!==o.query[_G].indexOf(e)
if(r||i){s=u[e],void 0!==(null==a?void 0:a[e])&&delete a[e]
break}}if(s===dG&&-1!==i.indexOf(PI)&&(s="addToPassbook",void 0!==a&&delete a[PI]),s){const e=null,t=null,n={action:s}
s===hM&&void 0!==a&&(a[I$]||a[bI])?n[I$]=a[I$]||a[bI]:s!==dG&&s!==jR&&s!==SI||!f&&!d||(n[UR]=o.toString())
const i=null===(r=o.query)||void 0===r?void 0:r[JI]
return s===sj&&void 0!==i&&void 0!==a&&(a[JI]=i),a={...a,...n},xq.fromComponents(o.protocol,t,e,a,o.hash)}return o}(t)
for(const e of this._routeMappings)for(const n of e.route)if(n.matches(t))return{normalizedUrl:t,parameters:n.extractParameters(t),object:e.object,matchedRuleIdentifier:n.identifier}
return{normalizedUrl:t,parameters:null,object:null,matchedRuleIdentifier:null}}}class Nq{constructor(e){this._count=e,this._triggers=[]}countDown(){if(0!==this._count&&(this._count--,0===this._count)){for(const e of this._triggers)e()
this._triggers.splice(0)}}then(e){0===this._count?e():this._triggers.push(e)}}class Bq extends DH{constructor(e,t){super(FR),this.$kind="flowAction",this.page=e,this.pageUrl=t,this.pageData=null,this.referrerData=void 0,this.presentationContext=lG,this.animationBehavior=lG,this.origin="inapp"}}class Uq extends AV{constructor(e,t,n){super(),this.title=e,this.annotations=t,this.forceExpanded=n}}class Gq extends AV{constructor(e,t,n,r,o){super(),this.title=e,this.summary=r,this.items=t,this.items_V2=n,this.shouldAlwaysPresentExpanded=!1,this.linkAction=o}}class jq extends AV{constructor(e,t,n,r,o=[]){super(),this.text=e,this.heading=t,this.subText=n,this.listText=r,this.headingArtworkItems=o}}class Vq extends AV{constructor(e,t={}){super(),this.text=e,this.heading=t.heading,this.headingArtworks=t.headingArtworks,this.listText=t.listText,this.textPairs=t.textPairs}}class Hq extends AV{constructor(e){super(),this.annotationGroups=e}}class Wq extends TV{constructor(e){super(),this.art=e}}class qq extends AV{constructor(e,t){super(),this.type=e,this.lockup=t}}class zq extends AV{constructor(e,t,n,r,o,i,s,a,c){super(),this.message=e,this.focusedMessage=t,this.action=n,this.fullProductAction=r,this.leadingArtwork=o,this.leadingArtworkTintColor=i,this.includeBackgroundBorder=s,this.kind=a,this.hideCriteria=c}}class Yq extends AV{constructor(e,t,n,r,o){super(),this.unknownBanner=e,this.buyBanner=t,this.downloadBanner=n,this.updateBanner=r,this.openBanner=o}}class Jq extends AV{constructor(e){super(),this.lockup=e}}class Kq extends AV{}class Zq extends AV{constructor(e,t,n,r,o,i){super(),this.items=e,this.mediaPlatform=t,this.allPlatforms=n,this.platformDescription=r,this.allPlatformsDescription=o,this.allPlatformsDescriptionPlacement=i}}class Qq extends AV{constructor(e,t,n,r,o,i,s){super(),this.type=e,this.title=t,this.caption=n,this.captionTrailingArtwork=r,this.linkAction=o,this.artwork=i,this.artworkTintColor=s}}class Xq extends AV{constructor(e,t,n){super(),this.paragraph=e,this.developerAction=n,this.developerLinks=t}}class ez extends AV{constructor(e){super(),this.text=e,this.presentationStyle=[],this.clickAction=null}}class tz extends AV{}class nz extends TV{isValid(){return!!this.title&&!(!this.icon||!this.icon.isValid())&&super.isValid()}}class rz extends nz{constructor(){super(),this.screenshots=[],this.screenshotsDisplayStyle=OL}isValid(){return!(!this.screenshots||!this.screenshots.length)&&super.isValid()}}class oz extends nz{constructor(){super(),this.screenshots=[],this.trailers=[],this.overrideLockupPosition=null,this.screenshotsDisplayStyle="control",this.metadataRibbonItems=[],this.showMetadataInformationInLockup=!1}}class iz extends TV{constructor(e){super(),this.viewType=e,this.moduleType=null,this.labelText=null,this.borderedText=null,this.highlightedText=null,this.starRating=null,this.secondaryViewPlacement=bj,this.artwork=null,this.maxCharacterCount=null,this.truncationLegibilityCharacterCountThreshold=null,this.allowsTruncation=null}}class sz extends nz{isValid(){return!(!this.trailers||!this.trailers.isValid())&&!(!this.editorialTagline||0===this.editorialTagline.length)&&super.isValid()}}class az extends AV{constructor(e,t){super(),e&&(this.videos=e),t&&(this.mediaPlatform=t)}isValid(){return this.videos&&this.videos.length>0&&super.isValid()}}class cz extends nz{}class lz extends TV{}class uz extends TV{constructor(e,t,n,r,o=!1){super(),this.isDark=!1,this.artwork=e,this.lockup=t,this.caption=n,this.title=r,this.isDark=o}isValid(){return this.lockup.isValid()&&this.artwork.isValid()}}class dz extends AV{constructor(e,t,n){super(),this.text=e,this.style=t,this.mediaType=n,this.wantsCollapsedNewlines=!0}}class fz extends TV{constructor(){super(),this.adamId=null,this.caption=null,this.title=null,this.subtitle=null,this.artwork=null,this.shelfBackground=null,this.clickAction=null,this.decorations=[],this.flowPreviewActionsConfiguration=null,this.appEventFormattedDates=null,this.mediaOverlayStyle=null}isValid(){return!!this.clickAction&&!(!this.artwork||!this.artwork.isValid())&&!(!this.caption||!this.title)&&super.isValid()}}class pz extends TV{constructor(){super(),this.flowPreviewActionsConfiguration=null}}class hz extends TV{constructor(e,t){super(),this.title=e,this.clickAction=t,this.artwork=null,this.accessibilityLabel=null}isValid(){var e,t
const n=null!==(t=null===(e=this.artwork)||void 0===e?void 0:e.isValid())&&void 0!==t&&t
return(0,bg.isSome)(this.clickAction)&&n&&super.isValid()}}class wz extends TV{constructor(){super(),this.artworks=null,this.accessibilityLabel=null,this.shortEditorialDescription=null,this.clickAction=null,this.personalizationStyle=XG,this.shelfBackground=null,this.flowPreviewActionsConfiguration=null,this.editorialDisplayOptions={},this.artworkSafeArea=null,this.textSafeArea=null}isValid(){var e,t,n,r
const o=null!==(t=null===(e=this.artworks)||void 0===e?void 0:e.every((e,t)=>(0,bg.isSome)(e)&&e.isValid()))&&void 0!==t&&t,i=(null!==(r=null===(n=this.collectionIcons)||void 0===n?void 0:n.length)&&void 0!==r?r:0)>0
return(0,bg.isSome)(this.clickAction)&&(o||i)&&super.isValid()}}class gz extends TV{constructor(e,t,n,r=!0){super(),this.descriptionText=e,this.summaryText=t,this.clickAction=n,this.linkPresentationEnabled=r}}class mz extends AV{constructor(e,t){super(),this.styledText=e,this.linkedSubstrings=t}}class vz extends AV{constructor(e,t,n,r){super(),this.text=e,this.clickAction=t,this.systemImageName=n,this.adamIdForPurchaseHistoryFilter=r}}class yz extends AV{constructor(e){super(),this.buttons=e}}class Az extends AV{constructor(e,t){super(),this.title=e,this.action=t}}class Tz extends TV{constructor(e,t,n=wU,r=null,o=null,i=null){super(),this.artwork=e,this.isFullWidth=t,this.hasRoundedCorners=typeof i===dM?i:!this.isFullWidth,this.ordinal=o,this.caption=r,this.captionMediaType=n}}class Sz extends TV{constructor(e,t,n=wU,r=null,o=null,i=null){super(),this.video=e,this.isFullWidth=t,this.hasRoundedCorners=typeof i===dM?i:!this.isFullWidth,this.ordinal=o,this.caption=r,this.captionMediaType=n}}class Pz extends AV{constructor(e,t,n,r){super(),this.type=e,this.title=t,this.hasDivider=n,this.action=r}}class bz extends TV{constructor(e,t,n,r){super(),this.text=e,this.credit=t,this.artwork=n,this.isFullWidthArtwork=r||!1}}class Iz extends TV{constructor(e,t){super(),this.text=e,this.attribution=t}}class Cz extends AV{constructor(e,t,n){super(),this.style=e,this.color=t,this.isFullWidth=n}}class kz extends TV{constructor(e,t,n,r,o){super(),this.badges=e,this.hasTopSeparator=t,this.hasBottomSeparator=n,this.separatorsAreFullWidth=r,this.alignment=o}}class Oz extends TV{constructor(e,t){super(),this.title=e,this.buttonAction=t}}class Ez extends AV{constructor(e,t,n,r,o,i){super(),this.badgeType=n,this.badge=n.title,this.title=e,this.description=t,this.callToActionButtonAction=r,this.backgroundStyle=o,this.textAlignment=i}}class Rz extends TV{constructor(e,t,n,r,o,i,s){super(),this.details=e,this.detailsDisplayProperties=t,this.heading=n,this.artwork=r,this.video=o,this.collectionIcons=i,this.backgroundColor=s,this.editorialDisplayOptions={}}}class Dz extends TV{constructor(e,t,n){super(),this.details=e,this.iconArtwork=t,this.backgroundColor=n}}class _z extends TV{}class Lz extends TV{constructor(e,t){super(),this.unsubscribedAction=e,this.subscribedAction=t}}class xz extends TV{constructor(e,t,n,r,o,i,s,a,c){super(),this.badgeGlyph=e,this.badge=t,this.title=n,this.subtitle=r,this.achievement=o,this.backgroundColor=s,this.backgroundArtwork=a,this.lockup=i,this.heroAction=c}}class Mz extends TV{constructor(e,t,n){super(),this.placement=e,this.context=t,this.deliveryMethod=null!=n?n:"pushAndPull"}}!function(e){e.OnPageLoad="onPageLoad",e.OnShelfWillAppear="onShelfWillAppear"}($g||($g={})),function(e){e.ViewAligned="viewAligned",e.CenterAligned="centerAligned"}(Fg||(Fg={}))
class $z extends TV{constructor(e,t=null,n=null){super(),this.contentType=e,this.marker=t,this.items=n||[],this.header=void 0,this.url=null,this.mergeWhenFetched=!1,this.fetchStrategy=$g.OnPageLoad,this.batchGroup=null,this.seeAllAction=null,this.footerTitle=null,this.footerAction=null,this.eyebrow=null,this.eyebrowArtwork=null,this.title=null,this.titleArtwork=null,this.subtitle=null,this.isHorizontal=!1,this.isHidden=!1,this.rowsPerColumn=null,this.background={type:XG},this.contentsMetadata={type:XG},this.isPersonalized=!1,this.shouldFilterApps=!1}}!function(e){e.TopLeading="topLeading",e.Top="top",e.TopTrailing="topTrailing",e.Trailing="trailing",e.BottomTrailing="bottomTrailing",e.Bottom="bottom",e.BottomLeading="bottomLeading",e.Leading="leading"}(Ng||(Ng={})),function(e){e.Grid="grid",e.Hero="hero",e.Standard="standard"}(Bg||(Bg={})),function(e){e.Icon="icon",e.Category="category"}(Ug||(Ug={}))
class Fz extends TV{constructor(e,t,n,r,o,i,s){super(),this.title=e,this.artwork=t,this.video=n,this.heading=r,this.badge=o,this.description=i,this.clickAction=s,this.shelfBackground=null,this.collectionIcons=null,this.editorialDisplayOptions={}}}class Nz extends nz{isValid(){const e=this.posterArtwork,t=this.posterVideo
return!(!e&&!t)&&super.isValid()}}class Bz extends AV{}class Uz extends AV{constructor(){super(),this.id=random.nextUUID()}}class Gz extends AV{constructor(e){super(),this.shelves=e,this.title=null,this.presentationOptions=[],this.isIncomplete=!1,this.pageMetrics=new OH}}class jz extends AV{constructor(){super(),this.pageMetrics=new OH,this.pageRenderMetrics={}}}class Vz extends Gz{}class Hz extends Gz{}class Wz extends Gz{}class qz extends Gz{constructor(e,t=null){super(e),this.sort=fN,this.displayStyles=t,this.pageSegments=[]}}class zz{constructor(e,t,n,r){this.contentsResourceTypes=new Set,this.ids=new Set,this.idsByResourceType=new Map,this.originalOrdering=[],this.relationshipIncludes=new Set,this.attributeIncludes=new Set,this.platform=null,this.supplementaryMetadataAssociations=[],this.additionalPlatforms=new Set,this.additionalQuery={},this.relationshipLimits={},this.searchTerm=null,this.searchTypes=[],this.context=null,this.useCustomAttributes=!1,this.countryCodeOverride=void 0,this.objectGraph=e,this.platform=I(e),this.isMixedMediaRequest=null!=n&&n,this.supplementaryMetadataAssociations=null!=r?r:[],this.includeAppBinaryTraitsAttribute=!0,o(t)||(typeof t===vj?this.href=t:Array.isArray(t)&&this.withDataItems(t,r,n))}addDataToIDsByResourceType(e){const t=e.type,n=e.id
let r=this.idsByResourceType.get(t);(0,bg.isNothing)(r)&&(r=new Set),r.add(n),this.idsByResourceType.set(t,r)}forType(e){return this.resourceType=e,this}withDataItems(e,t,n){if(0===e.length)return this
this.isMixedMediaRequest=this.isMixedMediaRequest||null!=n&&n
for(const r of e)if(this.ids.add(r.id),this.addDataToIDsByResourceType(r),(0,bg.isSome)(n)&&n&&(0,bg.isSome)(t)&&t.length>0)for(const e of t){const t=D(e,r);(0,bg.isSome)(t)&&t.length>0&&t.forEach(e=>{this.addDataToIDsByResourceType(e)})}return 1===this.idsByResourceType.size?(this.resourceType=this.idsByResourceType.keys().next().value,this.isMixedMediaRequest=!1):this.idsByResourceType.size>1&&!this.isMixedMediaRequest&&(this.resourceType=qj,this.contentsResourceTypes=new Set(Array.from(this.idsByResourceType.keys()))),this.originalOrdering.push(...e),this}withIdOfType(e,t){return this.withDataItems([{id:e,type:t}])}withIdsOfType(e,t){return this.withDataItems(e.map(e=>({id:e,type:t})))}includingRelationships(e){for(const t of e)this.relationshipIncludes.add(t)
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
return this.associateIncludes.set(e,n),this}includingRelationshipsForUpsell(e){const t=TU
if(e){this.scopedRelationshipIncludes||(this.scopedRelationshipIncludes=new Map)
let e=this.scopedRelationshipIncludes.get(_j)
e||(e=new Set),e.add(t),this.scopedRelationshipIncludes.set(_j,e)}else this.relationshipIncludes.add(t)
{this.metaIncludes||(this.metaIncludes=new Map)
let e=this.metaIncludes.get(TU)
e||(e=new Set),e.add(CB),this.metaIncludes.set(TU,e)}return this}includingAttributes(e){for(const t of e)this.attributeIncludes.add(t)
return this}includingScopedAttributes(e,t){this.scopedAttributeIncludes||(this.scopedAttributeIncludes=new Map)
let n=this.scopedAttributeIncludes.get(e)
n||(n=new Set)
for(const e of t)n.add(e)
return this.scopedAttributeIncludes.set(e,n),this}includingAdditionalPlatforms(e){for(const t of e)this.additionalPlatforms.add(t)
return this}includingScopedAvailableIn(e,t){this.scopedAvailableInIncludes||(this.scopedAvailableInIncludes=new Map)
let n=this.scopedAvailableInIncludes.get(e)
n||(n=new Set)
for(const e of t)n.add(e)
return this.scopedAvailableInIncludes.set(e,n),this}includingScopedSparseLimit(e,t){return this.scopedSparseLimit=new Map,this.scopedSparseLimit.set(e,t),this}addingQuery(e,t){return(0,bg.isSome)(t)?this.additionalQuery[e]=t:delete this.addingQuery[e],this}addingQueryValues(e){return this.additionalQuery={...this.addingQuery,...e},this}addingRelationshipLimit(e,t){return this.relationshipLimits[e]=t,this}withSearchTerm(e){return this.searchTerm=e,this}searchingOverTypes(e){for(const t of e)this.searchTypes.push(t)
return this}addingContext(e){return this.context=e,this}includingMacOSCompatibleIOSAppsWhenSupported(e=!1){return this.objectGraph.appleSilicon.isSupportEnabled&&(e||this.enablingFeature(Q_),this.includingScopedAttributes(zj,[FA])),this}includingAppBinaryTraitsAttribute(e=!0){return this.includeAppBinaryTraitsAttribute=e,this}usingCustomAttributes(e){return this.useCustomAttributes=e,this}alwaysUseIdsAsQueryParam(e){return this.useIdsAsQueryParam=e,this}attributingTo(e){return this.canonicalUrl=e,this}withFilter(e,t){return this.filterType=e,this.filterValue=t,this}withLimit(e){return this.limit=e,this}withSparseLimit(e){return null!==e&&(this.sparseLimit=e),this}withSparseCount(e){return null!==e&&(this.sparseCount=e),this}enablingFeature(e){return this.enabledFeatures||(this.enabledFeatures=[]),this.enabledFeatures.push(e),this}enablingFeatures(e){return this.enabledFeatures||(this.enabledFeatures=[]),this.enabledFeatures.push(...e),this}asPartialResponseLimitedToFields(e){return this.fields=e,this}includesResourceType(e){return this.resourceType===e||!!i(this.contentsResourceTypes)&&this.contentsResourceTypes.has(e)}withCountryCodeOverride(e){return this.countryCodeOverride=e,this}}const Yz=new RegExp("#?([0-9,a-f,A-F][0-9,a-f,A-F])([0-9,a-f,A-F][0-9,a-f,A-F])([0-9,a-f,A-F][0-9,a-f,A-F])([0-9,a-f,A-F][0-9,a-f,A-F])?"),Jz=N(0,0,0),Kz=N(1,1,1)
!function(e){e.insertIntoShelf="insertIntoShelf",e.replaceOrganic="replaceOrganic",e.dropAd="dropAd"}(Gg||(Gg={}))
class Zz extends TV{constructor(e){super(),this.kind=e}bestBackgroundColor(){}}class Qz extends Zz{constructor(e,t,n,r,o){super(e),this.artworks=t,this.videos=n,this.artworkLayouts=r,this.artworkLayoutsWithMetrics=o}bestBackgroundColor(){var e,t,n
return null!==(t=null===(e=this.videos[0])||void 0===e?void 0:e.preview.backgroundColor)&&void 0!==t?t:null===(n=this.artworks[0])||void 0===n?void 0:n.backgroundColor}}class Xz extends Qz{constructor(e,t){super(pN,e,t,[],[])}isValid(){const e=this.artworks.every(e=>e.isValid())&&this.artworks.length>0,t=this.videos.every(e=>e.isValid())&&this.videos.length>0
return(e||t)&&super.isValid()}}class eY extends Qz{constructor(e,t,n,r,o){super(Nj,e,t,n,r),this.titleBackingGradient=o}}class tY extends Zz{constructor(e){super(pM),this.icon=e}bestBackgroundColor(){return this.icon.backgroundColor}}class nY extends Qz{constructor(e,t,n,r,o,i){super(iB,t,n,r,o),this.icon=e,this.titleBackingGradient=i}bestBackgroundColor(){var e
return null!==(e=super.bestBackgroundColor())&&void 0!==e?e:this.icon.backgroundColor}}class rY extends Qz{constructor(e,t,n,r,o,i,s){super(UI,t,n,r,o),this.lockups=e,this.marketingText=i,this.isMediaDark=s}}class oY extends Zz{constructor(e,t){super(EL),this.lockups=e,this.additionalText=t}}class iY extends Zz{constructor(e){super(cN),this.lockup=e}bestBackgroundColor(){return this.lockup.icon.backgroundColor}}class sY extends Zz{constructor(e){super(GI),this.lockups=e,this.lockupImpressionLimit=10}}class aY extends Qz{constructor(e,t,n,r){super(ej,[],e,t,n),this.description=r}}class cY extends Qz{constructor(e,t,n,r,o,i,s,a){super(T$,r,o,i,s),this.formattedDates=e,this.startDate=t,this.tintColor=n,this.blurStyle=a}}class lY extends Zz{constructor(e){super(RL),this.mediumAdLockupWithScreenshotsBackground=e}}class uY extends Zz{constructor(e){super(DL),this.condensedAdLockupWithIconBackground=e}bestBackgroundColor(){var e
return null===(e=this.condensedAdLockupWithIconBackground)||void 0===e?void 0:e.backgroundArtwork.backgroundColor}}class dY extends AV{constructor(e){super(),this.kind=e}}class fY extends dY{constructor(e){super(ij),this.lockup=e,this.displaysIcon=!0}}class pY extends dY{constructor(e,t,n,r){super("marketingLockup"),this.lockup=e,this.paragraph=t,this.hideBackground=n,this.artworkBackgroundColor=r}}class hY extends dY{constructor(e){super(xm),this.lockups=e}}class wY extends dY{constructor(e,t){super(AB),this.paragraph=e,this.style=t}}class gY extends dY{constructor(e){super(_G),this.action=e}}class mY extends dY{constructor(e,t,n){super("threeLine"),this.heading=e,this.title=t,this.description=n}}class vY extends dY{constructor(e){super("arcadeLockup"),this.arcadeLockup=e}}class yY extends TV{constructor(){super(),this.heading=void 0,this.title=void 0,this.shortTitle=void 0,this.titleArtwork=void 0,this.media=void 0,this.heroMedia=void 0,this.overlay=void 0,this.style=void 0,this.clickAction=void 0,this.backgroundColor=void 0,this.inlineDescription=void 0,this.collapsedHeading=void 0,this.editorialDisplayOptions=void 0,this.supportsMediaMirroring=void 0}}class AY extends TV{constructor(e){super(),this.cards=e}}class TY extends AV{constructor(e,t,n,r,o,i){super(),this.shelves=e,this.title=n,this.titleDetail=o,this.shortTitleDetail=i,this.tabTitle=r,this.nextPage=null,this.onboardingCardIds=t||[],this.pageMetrics=new OH,this.pageRenderMetrics={}}}const SY={artwork:AL,screenshotsByType:"customScreenshotsByType",promotionalText:"customPromotionalText",videoPreviewsByType:"customVideoPreviewsByType",customScreenshotsByTypeForAd:HL,customVideoPreviewsByTypeForAd:dk,customDeepLink:Lx}
class PY extends AV{constructor(e,t,n,r){super(),this.details=e,this.dismissButtonTitle=t,this.offerButtonAction=n,this.offerDisplayProperties=r,this.pageMetrics=new OH,this.pageRenderMetrics={}}}class bY extends AV{constructor(e,t,n){super(),this.headline=e,this.body=t,this.artwork=n}}class IY extends AV{constructor(e,t,n,r,o){super(),this.title=e,this.subtitle=t,this.items=n,this.continueAction=r,this.familyAction=o}}class CY extends AV{constructor(e,t){super(),this.individualContent=e,this.familyMemberContent=t,this.pageMetrics=new OH,this.pageRenderMetrics={}}}class kY extends AV{constructor(e,t,n,r){super(),this.serviceType=e,this.placement=t,this.seed=n,this.clientOptions=r,this.metricsOverlay={topic:bH}}}class OY extends AV{constructor(e){super(),this.clientOptions=e,this.metricsOverlay={topic:bH}}}class EY extends AV{constructor(e,t){super(),this.primaryIcon=e,this.icons=t}}class RY extends AV{constructor(e){super(),this.action=e}}class DY extends TV{constructor(e,t,n,r,o){super(),this.id=e,this.title=t,this.artwork=n,this.gradientStartColor=r,this.gradientEndColor=o,this.selectActionMetrics=new kH,this.deselectActionMetrics=new kH}}class _Y extends AV{constructor(e,t,n,r,o,i,s){super(),this.title=e,this.categories=t,this.maxNumberOfCategoriesToChoose=n,this.maxNumberOfCategoriesToChooseTemplate=r,this.numberOfChosenCategoriesTemplate=o,this.primaryAction=i,this.dismissAction=s,this.pageMetrics=new OH,this.pageRenderMetrics={}}}class LY extends AV{constructor(e,t){super(),this.lockup=e,this.categoryId=t}}class xY extends AV{constructor(e,t,n,r,o,i,s){super(),this.title=e,this.suggestions=t,this.getAllAction=n,this.getAllButtonStyle=r,this.primaryAction=o,this.primaryActionKind=i,this.primaryActionSecondaryTitle=s,this.pageMetrics=new OH,this.pageRenderMetrics={}}}class MY{constructor(e,t){this.items=e,this.commonBuyParams=t}}class $Y{constructor(e,t){this.purchase=e,this.buyParams=t}}class FY{constructor(e){if(this._values={},(0,bg.isSome)(e)&&e.length>0){const t=e.split("&")
for(const e of t){const[t,n]=e.split("="),r=decodeURIComponent(t),o=(0,bg.isNothing)(n)?"":decodeURIComponent(n)
this._values[r]=o}}}_searchKey(e,t){if(0===e.length)throw new Error("key may not be zero length")
return(0,bg.isNothing)(t)||0===t.length?e:`${t}${e.charAt(0).toUpperCase()}${e.slice(1)}`}get(e,t="mt"){const n=this._searchKey(e,t)
return this._values[n]}set(e,t,n="mt"){const r=this._searchKey(e,n)
return(0,bg.isNothing)(t)?delete this._values[r]:this._values[r]=t,this}toString(){let e=""
for(const t of Object.keys(this._values)){const n=this._values[t]
e.length>0&&(e+="&"),e+=encodeURIComponent(t),e+="=",e+=encodeURIComponent(n)}return e}toEncodedMap(){const e={}
for(const t of Object.keys(this._values)){const n=this._values[t],r=encodeURIComponent(t),o=encodeURIComponent(n)
e[r]=o}return e}toRawMap(){return{...this._values}}}const NY="jet_adamId",BY="_jet-internal:derived-data",UY=hj
class GY extends AV{constructor(){super(),this.shelfOrderings={},this.shelfMapping={},this.presentationOptions=[],this.isIncomplete=!1,this.pageMetrics=new OH,this.pageRenderMetrics={}}}class jY extends GY{}class VY extends TV{constructor(e,t,n,r,o,i,s){super(),this.title=e,this.artwork=t,this.badge=n,this.action=r,this.density=o,this.artworkSafeArea=i,this.textSafeArea=s}}class HY extends TV{constructor(e,t,n,r,o,i){super(),this.lockup=e,this.screenshots=t,this.isAnimated=n,this.secondaryTextColor=r,this.backgroundColor=o,this.riverSpeed=i}}class WY extends TV{constructor(e,t){super(),this.lockup=e,this.backgroundArtwork=t}}class qY{constructor(e,t,n,r,o,i,s=null,a){this.id=e,this.title=t,this.searchLandingItemDisplayStyle=s,this.displayStyle=n,this.displayCount=r,this.hasSeeAll=o,this.seeAllLink=i,this.searchShelfKind=a}}!function(e){e.Suggestion="Query",e.CategoriesAndCharts="EditorialLink",e.Apps="AppsLockup",e.EditorialCollection="EditorialCollection"}(jg||(jg={})),function(e){e[e.Default=0]="Default",e[e.CategoriesAndCharts=1]="CategoriesAndCharts"}(Vg||(Vg={})),function(e){e.Density1="density_1",e.Density2="density_2",e.Density3="density_3"}(Hg||(Hg={})),function(e){e.Chiclet="chiclet",e.App="app",e.Symbol="symbol"}(Wg||(Wg={}))
const zY=(e,t)=>e||t
let YY=null
class JY extends AV{constructor(e,t,n,r,o,i,s){super(),this.instanceId=e,this.adamId=t,this.bundleId=n,this.advertType=r,this.invocation=o,this.purchaseType=i,this.reportingDestination=s}}class KY extends AV{constructor(e,t,n,r,o,i,s,a,c,l=lG){super(),this.type=e,this.key=t,this.content=n,this.heading=o,this.caption=i,this.longCaption=s,this.leadingValue=l,this.accessibilityTitle=a,this.accessibilityCaption=c,this.style=r,this.isMonochrome=!0}}class ZY extends AV{constructor(e,t){super(),this.type=e,this.shelfId=t}}class QY extends AV{constructor(e,t){super(),this.title=e,this.subtitle=t}}class XY extends nz{constructor(){super(),this.pageMetrics=new OH,this.pageRenderMetrics={}}}const eJ=new Set([Ej,Rj,$j]),tJ=new Set([Cj,IL,VG,oB,UN,YG,yj,KU,uG,uj,MB,Aj,BG,yB,gU,UG,ZU,nG,$G,ZG,HG,Ij,QG,$B,GN,uM,FG])
class nJ extends AV{constructor(e,t,n,r){super(),this.id=e,this.title=t,this.selectedActionTitle=n,this.url=r}}class rJ extends Gz{constructor(){super([])}}class oJ extends AV{}class iJ extends TV{}class sJ extends AV{}class aJ extends AV{constructor(){super(...arguments),this.componentType=Lm}}class cJ extends AV{constructor(){super(...arguments),this.componentType="productReviewActions"}}class lJ extends AV{constructor(e){super(),this.showsBadge=!1,this.title=null,this.notes=e,this.isCollapsed=!0}}class uJ extends AV{}class dJ extends AV{}class fJ extends AV{}class pJ extends oJ{constructor(){super(...arguments),this.componentType="starRatings"}}class hJ extends oJ{constructor(){super(...arguments),this.componentType="starRatingsHistogram"}}class wJ extends oJ{constructor(){super(...arguments),this.componentType="noRatings"}}class gJ extends AV{constructor(e){super(),this.componentType=CL,this.messageText=e}}class mJ extends TV{constructor(e,t,n,r,o,i,s){super(),this.body=e,this.bodyNoTitle=t,this.subtitle=n,this.subtitleTrailingArtwork=r,this.subtitleArtwork=r,this.subtitleArtworkAlignment=o,this.bodyMediaType=i,this.flowPreviewActionsConfiguration=s}}class vJ extends TV{constructor(){super(...arguments),this.componentType=kL}}const yJ="notPurchasedOrdering"
class AJ extends GY{constructor(){super(...arguments),this.appPlatforms=[]}}class TJ{static get contentType(){return h_}constructor(){this._params=""}param(e,t){if(e&&t){const n=this._params.length>0?"&":""
this._params+=`${n}${encodeURIComponent(e)}=${encodeURIComponent(t)}`}return this}build(){return this._params}}const SJ="externalDeepLinkUrl",PJ="isCppDeepLinkDisabled",bJ=new class{constructor(){this._app="",this._clientId="",this._pages=[]}get _requestId(){const e=Date.now().toString(36).toUpperCase(),t=Math.floor(1e5*Math.random()).toString(36).toUpperCase()
return this._clientId+"z"+e+"z"+t}get _prevPage(){return this._pages.length>=2?this._pages[this._pages.length-2]:void 0}useApp(e){""!==this._app||r(e)||(this._app=e)}useClientId(e){r(e)||(this._clientId=e)}usePageHistory(e){if(0!==e.length){this._pages.length=0
for(const t of e){const e=d(t)
r(e)||this._pages.push(e)}}}useNativeValues(e){const t=d(e,"nativeApp")
this.useApp(t)
const n=d(e,"nativeClientId")
this.useClientId(n)
const r=c(e,"nativePageHistory")
this.usePageHistory(r)}getPageHistoryFor(e){const t=this._pages.slice()
return this._pages.length>=5&&this._pages.shift(),this._pages.push(e),t}get params(){return{app:this._app,clientId:this._clientId,requestId:this._requestId,prevPage:this._prevPage,eventTime:Date.now()}}}
let IJ=null
const CJ={containerId:"mtContainerId",placementId:"mtIadPlacementId",templateType:"mtIadTemplateType"};(Om=qg||(qg={})).ArcadeSeeAllGames="editorial-shelves-arcade-see-all-games",Om.Collection="editorial-shelves-collection",Om.Chart="editorial-shelves-chart",Om.Tag="editorial-shelves-tag",Om.Engagement="editorial-shelves-engagement",Om.Text="editorial-shelves-text",Om.Image="editorial-shelves-image",Om.VideoClip="editorial-shelves-video-clip",Om.Header="editorial-shelves-header",Om.Recommendations="editorial-shelves-recommendation",Om.GameCenter="editorial-shelves-game-center",Om.Upsell="editorial-shelves-upsell",Om.Marker="editorial-shelves-marker",(km=zg||(zg={})).Hero="Hero",km.TextOnly="TextOnly",km.TextWithArtwork="TextWithArtwork",km.BrickSmall="BrickSmall",km.BrickMedium="BrickMedium",km.BrickLarge="BrickLarge",km.Charts="Charts",km.EditorialLockupHierarchicalPortrait="EditorialLockupHierarchicalPortrait",km.EditorialLockupHierarchicalRows="EditorialLockupHierarchicalRows",km.EditorialLockupMedium="EditorialLockupMedium",km.EditorialLockupMediumVariant="EditorialLockupMediumVariant",km.EditorialLockupLarge="EditorialLockupLarge",km.EditorialLockupLargeVariant="EditorialLockupLargeVariant",km.LockupMedium="LockupMedium",km.Lockup4Up="Lockup4Up",km.Poster="Poster",km.StorySmall="StorySmall",km.StoryMedium="StoryMedium",km.LockupSmall="LockupSmall",km.LockupLarge="LockupLarge",km.BreakoutLarge="BreakoutLarge",function(e){e.QuickLinks="QuickLinks"}(Yg||(Yg={})),(Cm=Jg||(Jg={})).Vertical="Vertical",Cm.Horizontal="Horizontal",function(e){e.ShowInstalled="ShowInstalled",e.ShowAllPlatforms="ShowAllPlatforms",e.ShowOnlyPreorder="ShowOnlyPreorder"}(Kg||(Kg={})),function(e){e.AllGames="AllGames",e.ArcadeGames="ArcadeGames"}(Zg||(Zg={})),function(e){e.FriendsArePlaying="FriendsArePlaying",e.ContinuePlaying="ContinuePlaying"}(Qg||(Qg={})),function(e){e.ArcadeTabHeader="ArcadeTabHeader"}(Xg||(Xg={})),function(e){e.Arcade="Arcade"}(em||(em={}))
class kJ{constructor(e,t,n){this.locationTracker={rootPosition:0,locationStack:[]},this.parsedCardCount=0,this.currentRowIndex=0,this.pageInformation=e,this.locationTracker=null!=t?t:{rootPosition:0,locationStack:[]},this.refreshController=n}}class OJ extends kJ{constructor(e,t,n,r,o){super(t,n,r),this.pageHasDisplayedContent=!1,this.remainingContent=e,this.adPlacementBehavior=Gg.insertIntoShelf,this.recoImpressionData=o}}!function(e){e.AppEventCard="AppEventCard",e.AppOfTheDay="AppOfTheDay",e.FullBleedImage="FullBleedImage",e.GameOfTheDay="GameOfTheDay",e.Grid="Grid",e.InAppPurchase="InAppPurchase",e.List="List",e.NumberedList="NumberedList",e.River="River",e.ShortImage="ShortImage",e.SingleApp="SingleApp",e.Video="Video"}(tm||(tm={})),function(e){e.SmallCard="smallCard",e.MediumCard="mediumCard"}(nm||(nm={})),function(e){e.NoArtwork="no-artwork",e.ContentArtworkWithTitle="content-artwork-with-title",e.CategoryArtworkWithTitle="category-artwork-with-title",e.CategoryArtworkWithBadge="category-artwork-with-badge"}(rm||(rm={})),function(e){e.AppOfTheDay="app-of-the-day",e.GameOfTheDay="game-of-the-day"}(om||(om={})),function(e){e.Eyebrow="eyebrow",e.Title="title"}(im||(im={})),function(e){e.LinearGradient="linear-gradient"}(sm||(sm={})),function(e){e.Inline="inline",e.Article="article"}(am||(am={}))
const EJ={collapsedContentMode:Cg.bottomLeft,expandedContentMode:Cg.bottomLeft,collapsedLayoutInsets:{top:0,left:-8,bottom:0,right:0},expandedLayoutInsets:QV},RJ={collapsedContentMode:Cg.bottomLeft,expandedContentMode:Cg.bottomLeft,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},DJ={collapsedContentMode:Cg.topLeft,expandedContentMode:Cg.bottomLeft,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},_J={maxWidth:250,ltr:EJ,rtl:EJ,collapsedSize:{type:WU,height:1},priority:kg.Mini},LJ={objectPath:iL,cardArtLayoutMetrics:[_J,{maxWidth:704,ltr:RJ,rtl:RJ,collapsedSize:{type:WU,height:1.062}},{ltr:DJ,rtl:DJ,collapsedSize:{type:fL,width:1}}],crops:["sr"],sourceWidth:800,sourceHeight:490,type:DG,cardArtLayouts:[]},xJ={collapsedContentMode:Cg.bottomLeft,collapsedLayoutInsets:{top:0,left:-8,bottom:0,right:0},expandedContentMode:Cg.bottomLeft,expandedLayoutInsets:QV},MJ={collapsedContentMode:Cg.bottomLeft,collapsedLayoutInsets:QV,expandedContentMode:Cg.bottomLeft,expandedLayoutInsets:QV},$J={collapsedContentMode:Cg.scaleAspectFill,expandedContentMode:Cg.bottomLeft,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},FJ={maxWidth:250,ltr:xJ,rtl:xJ,collapsedSize:{type:WU,height:1},priority:kg.Mini},NJ={objectPath:sL,cardArtLayoutMetrics:[FJ,{maxWidth:704,ltr:MJ,rtl:MJ,collapsedSize:{type:WU,height:1.062}},{ltr:$J,rtl:$J,collapsedSize:{type:fL,width:1}}],crops:["sr"],sourceWidth:800,sourceHeight:490,type:DG,cardArtLayouts:[]},BJ={collapsedContentMode:Cg.bottomLeft,expandedContentMode:Cg.bottomLeft,collapsedLayoutInsets:{top:0,left:-8,bottom:0,right:0},expandedLayoutInsets:QV},UJ={collapsedContentMode:Cg.bottomLeft,expandedContentMode:Cg.bottomLeft,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},GJ={collapsedContentMode:Cg.scaleAspectFill,expandedContentMode:Cg.bottomLeft,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},jJ={maxWidth:250,ltr:BJ,rtl:BJ,collapsedSize:{type:WU,height:1},priority:kg.Mini},VJ={objectPath:aL,cardArtLayoutMetrics:[jJ,{maxWidth:704,ltr:UJ,rtl:UJ,collapsedSize:{type:WU,height:1.062}},{ltr:GJ,rtl:GJ,collapsedSize:{type:fL,width:1}}],crops:[pL],sourceWidth:800,sourceHeight:490,type:DG,cardArtLayouts:[]},HJ={collapsedContentMode:Cg.bottom,expandedContentMode:Cg.center,collapsedLayoutInsets:{top:36,left:36,bottom:0,right:36},expandedLayoutInsets:QV},WJ={collapsedContentMode:Cg.top,expandedContentMode:Cg.center,collapsedLayoutInsets:{top:36,left:36,bottom:0,right:36},expandedLayoutInsets:QV},qJ={collapsedContentMode:Cg.bottom,expandedContentMode:Cg.center,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},zJ={collapsedContentMode:Cg.right,expandedContentMode:Cg.right,collapsedLayoutInsets:{top:50,left:0,bottom:50,right:0},expandedLayoutInsets:QV},YJ={collapsedContentMode:Cg.right,expandedContentMode:Cg.right,collapsedLayoutInsets:{top:168,left:0,bottom:168,right:533},expandedLayoutInsets:{top:117,left:0,bottom:117,right:533}},JJ={collapsedContentMode:Cg.center,expandedContentMode:Cg.center,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},KJ={collapsedContentMode:Cg.bottomLeft,expandedContentMode:Cg.bottomLeft,collapsedLayoutInsets:{top:36,left:18,bottom:36,right:0},expandedLayoutInsets:QV},ZJ={collapsedContentMode:Cg.bottomLeft,expandedContentMode:Cg.bottomLeft,collapsedLayoutInsets:{top:0,left:18,bottom:0,right:0},expandedLayoutInsets:QV},QJ={collapsedContentMode:Cg.center,expandedContentMode:Cg.center,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},XJ={collapsedContentMode:Cg.topLeft,expandedContentMode:Cg.center,collapsedLayoutInsets:{top:0,left:70,bottom:0,right:0},expandedLayoutInsets:QV},eK={collapsedContentMode:Cg.topLeft,expandedContentMode:Cg.center,expandedLayoutInsets:QV,collapsedLayoutInsets:{top:0,left:0,bottom:0,right:500}},tK={collapsedContentMode:Cg.topLeft,expandedContentMode:Cg.center,collapsedLayoutInsets:{top:0,left:0,bottom:0,right:360},expandedLayoutInsets:{top:0,left:360,bottom:0,right:360}},nK={collapsedContentMode:Cg.top,expandedContentMode:Cg.top,collapsedLayoutInsets:{top:117,left:0,bottom:0,right:0},expandedLayoutInsets:{top:130,left:0,bottom:0,right:0}},rK={collapsedContentMode:Cg.topLeft,expandedContentMode:Cg.top,collapsedLayoutInsets:{top:70,left:116,bottom:0,right:0},expandedLayoutInsets:{top:130,left:0,bottom:0,right:0}},oK={collapsedContentMode:Cg.topLeft,expandedContentMode:Cg.top,collapsedLayoutInsets:{top:148,left:0,bottom:0,right:0},expandedLayoutInsets:{top:130,left:0,bottom:0,right:0}},iK={collapsedContentMode:Cg.topLeft,expandedContentMode:Cg.top,collapsedLayoutInsets:{top:170,left:0,bottom:0,right:0},expandedLayoutInsets:{top:130,left:0,bottom:0,right:0}},sK={ltr:qJ,rtl:qJ},aK={maxWidth:874,ltr:HJ,rtl:HJ},cK={ltr:WJ,rtl:WJ},lK={ltr:YJ,rtl:Xt(YJ)},uK={ltr:zJ,rtl:Xt(zJ)},dK={ltr:JJ,rtl:JJ},fK={ltr:KJ,rtl:KJ},pK={maxWidth:200,ltr:ZJ,rtl:ZJ},hK={maxWidth:700,ltr:QJ,rtl:Xt(QJ)},wK={maxWidth:900,ltr:XJ,rtl:Xt(XJ)},gK={maxWidth:1090,ltr:eK,rtl:Xt(eK)},mK={ltr:tK,rtl:Xt(tK)},vK={maxWidth:700,ltr:nK,rtl:Xt(nK),collapsedSize:{type:qG,width:1100,height:619},expandedSize:{type:qG,width:1200,height:675}},yK={maxWidth:874,ltr:rK,rtl:Xt(rK),collapsedSize:{type:qG,width:1092,height:614},expandedSize:{type:qG,width:1200,height:675}},AK={maxWidth:1090,ltr:oK,rtl:Xt(oK),collapsedSize:{type:qG,width:1392,height:783},expandedSize:{type:qG,width:1200,height:675}},TK={ltr:iK,rtl:Xt(iK),collapsedSize:{type:qG,width:1600,height:900},expandedSize:{type:qG,width:1200,height:675}},SK={objectPath:cb,cardArtLayouts:[qJ],cardArtLayoutMetrics:[sK],sourceWidth:800,sourceHeight:450,type:ej,crops:void 0},PK={objectPath:hR,cardArtLayouts:[HJ],cardArtLayoutMetrics:[aK,cK],crops:["sr"],sourceWidth:800,sourceHeight:450,type:DG},bK={objectPath:lb,cardArtLayouts:[qJ],cardArtLayoutMetrics:[sK],crops:[],sourceWidth:800,sourceHeight:450,type:ej},IK={objectPath:oL,cardArtLayouts:[HJ],cardArtLayoutMetrics:[aK,cK],crops:["sr"],sourceWidth:800,sourceHeight:450,type:DG},CK={objectPath:ab,cardArtLayouts:[qJ],cardArtLayoutMetrics:[sK],crops:[],sourceWidth:800,sourceHeight:450,type:ej},kK={objectPath:cL,cardArtLayouts:[HJ],cardArtLayoutMetrics:[aK,cK],crops:["sr"],sourceWidth:800,sourceHeight:450,type:DG},OK={objectPath:ub,cardArtLayouts:[YJ,Xt(YJ)],cardArtLayoutMetrics:[lK],crops:[],sourceWidth:1208,sourceHeight:518,type:ej},EK={objectPath:db,cardArtLayouts:[zJ,Xt(zJ)],cardArtLayoutMetrics:[uK],crops:[fb,pb],sourceWidth:688,sourceHeight:286,type:DG},RK={objectPath:aR,cardArtLayouts:[JJ],cardArtLayoutMetrics:[dK],crops:[],sourceWidth:875,sourceHeight:492,type:ej},DK={objectPath:sR,cardArtLayouts:[JJ],cardArtLayoutMetrics:[pK,dK],crops:[],sourceWidth:656,sourceHeight:492,type:ej},_K={objectPath:sL,cardArtLayouts:[KJ],cardArtLayoutMetrics:[pK,fK],crops:["sr"],sourceWidth:800,sourceHeight:490,type:DG},LK={objectPath:iL,cardArtLayouts:[KJ],cardArtLayoutMetrics:[pK,fK],crops:["sr"],sourceWidth:800,sourceHeight:490,type:DG},xK={objectPath:Ix,cardArtLayouts:[KJ],cardArtLayoutMetrics:[pK,fK],crops:[pL],sourceWidth:800,sourceHeight:490,type:DG},MK={objectPath:aL,cardArtLayouts:[KJ],cardArtLayoutMetrics:[pK,fK],crops:[pL],sourceWidth:800,sourceHeight:490,type:DG},$K={objectPath:hb,cardArtLayouts:[tK],cardArtLayoutMetrics:[hK,wK,gK,mK],crops:[hL],sourceWidth:1600,sourceHeight:604,type:DG},FK={objectPath:wb,cardArtLayouts:[iK],cardArtLayoutMetrics:[vK,yK,AK,TK],crops:[hL],sourceWidth:1600,sourceHeight:900,type:ej},NK=Cg.topRight,BK={top:-108,left:495,bottom:0,right:0},UK=Cg.topLeft,GK={top:-108,left:-495,bottom:0,right:0},jK={type:qG,width:1124,height:482},VK={collapsedContentMode:Cg.top,collapsedLayoutInsets:{top:-117,left:0,bottom:0,right:0},expandedContentMode:NK,expandedLayoutInsets:BK},HK={collapsedContentMode:Cg.top,collapsedLayoutInsets:{top:-117,left:0,bottom:0,right:0},expandedContentMode:UK,expandedLayoutInsets:GK},WK={collapsedContentMode:Cg.topRight,collapsedLayoutInsets:{top:-165,left:524,bottom:0,right:0},expandedContentMode:NK,expandedLayoutInsets:BK},qK={collapsedContentMode:Cg.topLeft,collapsedLayoutInsets:{top:-165,left:-524,bottom:0,right:0},expandedContentMode:UK,expandedLayoutInsets:GK},zK={collapsedContentMode:Cg.top,collapsedLayoutInsets:{top:-55,left:0,bottom:0,right:0},expandedContentMode:NK,expandedLayoutInsets:BK},YK={collapsedContentMode:Cg.top,collapsedLayoutInsets:{top:-55,left:0,bottom:0,right:0},expandedContentMode:UK,expandedLayoutInsets:GK},JK={objectPath:ub,cardArtLayoutMetrics:[{maxWidth:250,ltr:VK,rtl:HK,collapsedSize:{type:qG,width:914,height:392},expandedSize:jK,priority:kg.Mini},{ltr:WK,rtl:qK,collapsedSize:{type:qG,width:1188,height:509},expandedSize:jK},{ltr:zK,rtl:YK,collapsedSize:{type:qG,width:1456,height:624},expandedSize:jK,priority:kg.ExtraWide}],crops:[],sourceWidth:1208,sourceHeight:518,type:ej,cardArtLayouts:[]},KK={collapsedContentMode:Cg.bottomRight,collapsedLayoutInsets:QV,expandedContentMode:Cg.topRight,expandedLayoutInsets:QV},ZK={collapsedContentMode:Cg.bottomLeft,collapsedLayoutInsets:QV,expandedContentMode:Cg.topLeft,expandedLayoutInsets:QV},QK={collapsedContentMode:Cg.topRight,collapsedLayoutInsets:{top:-49,left:0,bottom:0,right:0},expandedContentMode:Cg.right,expandedLayoutInsets:QV},XK={collapsedContentMode:Cg.topLeft,collapsedLayoutInsets:{top:-49,left:0,bottom:0,right:0},expandedContentMode:Cg.left,expandedLayoutInsets:QV},eZ={collapsedContentMode:Cg.scaleAspectFill,collapsedLayoutInsets:QV,expandedContentMode:Cg.bottomRight,expandedLayoutInsets:{top:50,left:495,bottom:0,right:0}},tZ={collapsedContentMode:Cg.scaleAspectFill,collapsedLayoutInsets:QV,expandedContentMode:Cg.bottomRight,expandedLayoutInsets:{top:50,left:-495,bottom:0,right:0}},nZ={objectPath:db,cardArtLayoutMetrics:[{maxWidth:250,ltr:KK,rtl:ZK,sourceCropOverrideLTR:"LCS.ApLCS01",sourceCropOverrideRTL:"LCS.ApLCS02",sourceSizeOverride:new EV(550,264),priority:kg.Mini},{ltr:QK,rtl:XK,collapsedSize:{type:qG,width:672,height:279}},{ltr:eZ,rtl:tZ,expandedSize:{type:qG,width:1124,height:482},sourceCropOverrideLTR:gb,sourceCropOverrideRTL:gb,priority:kg.ExtraWide}],crops:[fb,pb],sourceWidth:688,sourceHeight:286,type:DG,cardArtLayouts:[]},rZ={collapsedContentMode:Cg.bottomLeft,collapsedLayoutInsets:{top:0,left:-8,bottom:0,right:0},expandedContentMode:Cg.bottomLeft,expandedLayoutInsets:QV},oZ={collapsedContentMode:Cg.bottomLeft,collapsedLayoutInsets:QV,expandedContentMode:Cg.bottomLeft,expandedLayoutInsets:QV},iZ={collapsedContentMode:Cg.scaleAspectFill,expandedContentMode:Cg.bottomLeft,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},sZ={maxWidth:250,ltr:rZ,rtl:rZ,collapsedSize:{type:WU,height:1},priority:kg.Mini},aZ={objectPath:Ix,cardArtLayoutMetrics:[sZ,{maxWidth:704,ltr:oZ,rtl:oZ,collapsedSize:{type:WU,height:1.062}},{ltr:iZ,rtl:iZ,collapsedSize:{type:fL,width:1}}],crops:[pL],sourceWidth:800,sourceHeight:490,type:DG,cardArtLayouts:[]},cZ={collapsedContentMode:Cg.center,collapsedLayoutInsets:QV,expandedContentMode:Cg.center,expandedLayoutInsets:QV},lZ={objectPath:aR,cardArtLayoutMetrics:[{ltr:cZ,rtl:cZ,collapsedSize:{type:WU,height:1},expandedSize:{type:WU,height:1}}],crops:[],sourceWidth:875,sourceHeight:492,type:ej,cardArtLayouts:[]},uZ={collapsedContentMode:Cg.center,collapsedLayoutInsets:QV,expandedContentMode:Cg.center,expandedLayoutInsets:QV},dZ={objectPath:sR,cardArtLayoutMetrics:[{ltr:uZ,rtl:uZ,collapsedSize:{type:WU,height:1},expandedSize:{type:WU,height:1}}],crops:[],sourceWidth:656,sourceHeight:492,type:ej,cardArtLayouts:[]},fZ={collapsedContentMode:Cg.bottom,expandedContentMode:Cg.bottom,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},pZ={collapsedContentMode:Cg.top,expandedContentMode:Cg.top,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},hZ={objectPath:cb,cardArtLayoutMetrics:[{maxWidth:250,ltr:fZ,rtl:fZ,collapsedSize:{type:qG,width:455,height:256},priority:kg.Mini},{ltr:pZ,rtl:pZ,collapsedSize:{type:WU,height:1}}],sourceWidth:800,sourceHeight:450,type:ej,crops:["sr"],cardArtLayouts:[]},wZ={collapsedContentMode:Cg.bottom,expandedContentMode:Cg.bottom,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},gZ={collapsedContentMode:Cg.bottom,expandedContentMode:Cg.bottom,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},mZ={collapsedContentMode:Cg.scaleAspectFill,expandedContentMode:Cg.bottom,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},vZ={maxWidth:250,ltr:wZ,rtl:wZ,collapsedSize:{type:qG,width:455,height:256},priority:kg.Mini},yZ={objectPath:hR,cardArtLayoutMetrics:[vZ,{maxWidth:704,ltr:gZ,rtl:gZ,collapsedSize:{type:WU,height:1.08}},{ltr:mZ,rtl:mZ}],crops:["sr"],sourceWidth:800,sourceHeight:450,type:DG,cardArtLayouts:[]},AZ={collapsedContentMode:Cg.bottom,expandedContentMode:Cg.bottom,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},TZ={collapsedContentMode:Cg.top,expandedContentMode:Cg.top,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},SZ={objectPath:lb,cardArtLayoutMetrics:[{maxWidth:250,ltr:AZ,rtl:AZ,collapsedSize:{type:qG,width:455,height:256},priority:kg.Mini},{ltr:TZ,rtl:TZ,collapsedSize:{type:WU,height:1}}],sourceWidth:800,sourceHeight:450,type:ej,crops:["sr"],cardArtLayouts:[]},PZ={collapsedContentMode:Cg.bottom,expandedContentMode:Cg.bottom,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},bZ={collapsedContentMode:Cg.bottom,expandedContentMode:Cg.bottom,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},IZ={collapsedContentMode:Cg.scaleAspectFill,expandedContentMode:Cg.bottom,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},CZ={maxWidth:250,ltr:PZ,rtl:PZ,collapsedSize:{type:qG,width:455,height:256},priority:kg.Mini},kZ={objectPath:oL,cardArtLayoutMetrics:[CZ,{maxWidth:704,ltr:bZ,rtl:bZ,collapsedSize:{type:WU,height:1.08}},{ltr:IZ,rtl:IZ}],crops:["sr"],sourceWidth:800,sourceHeight:450,type:DG,cardArtLayouts:[]},OZ={type:qG,width:1200,height:675},EZ={top:-130,left:0,bottom:0,right:0},RZ={collapsedContentMode:Cg.top,collapsedLayoutInsets:{top:-16,left:0,bottom:0,right:0},expandedContentMode:Cg.top,expandedLayoutInsets:EZ},DZ={collapsedContentMode:Cg.top,collapsedLayoutInsets:{top:-116,left:0,bottom:0,right:0},expandedContentMode:Cg.top,expandedLayoutInsets:EZ},_Z={collapsedContentMode:Cg.topLeft,collapsedLayoutInsets:{top:-116,left:-70,bottom:0,right:0},expandedContentMode:Cg.top,expandedLayoutInsets:EZ},LZ={collapsedContentMode:Cg.topRight,collapsedLayoutInsets:{top:-116,left:70,bottom:0,right:0},expandedContentMode:Cg.top,expandedLayoutInsets:EZ},xZ={collapsedContentMode:Cg.topLeft,collapsedLayoutInsets:{top:-148,left:0,bottom:0,right:0},expandedContentMode:Cg.top,expandedLayoutInsets:EZ},MZ={collapsedContentMode:Cg.topRight,collapsedLayoutInsets:{top:-148,left:0,bottom:0,right:0},expandedContentMode:Cg.top,expandedLayoutInsets:EZ},$Z={collapsedContentMode:Cg.topLeft,collapsedLayoutInsets:{top:-170,left:0,bottom:0,right:0},expandedContentMode:Cg.top,expandedLayoutInsets:EZ},FZ={collapsedContentMode:Cg.topRight,collapsedLayoutInsets:{top:-170,left:0,bottom:0,right:0},expandedContentMode:Cg.top,expandedLayoutInsets:EZ},NZ={objectPath:wb,cardArtLayouts:[$Z],cardArtLayoutMetrics:[{maxWidth:250,ltr:RZ,rtl:RZ,collapsedSize:{type:qG,width:455,height:256},expandedSize:OZ,priority:kg.Mini},{maxWidth:699,ltr:DZ,rtl:DZ,collapsedSize:{type:qG,width:1094,height:614},expandedSize:OZ},{maxWidth:899,ltr:_Z,rtl:LZ,collapsedSize:{type:qG,width:1092,height:614},expandedSize:OZ},{maxWidth:1090,ltr:xZ,rtl:MZ,collapsedSize:{type:qG,width:1392,height:783},expandedSize:OZ},{ltr:$Z,rtl:FZ,collapsedSize:{type:qG,width:1600,height:900},expandedSize:OZ}],crops:[hL],sourceWidth:1600,sourceHeight:900,type:ej},BZ={collapsedContentMode:Cg.top,collapsedLayoutInsets:{top:16,left:0,bottom:0,right:0},expandedContentMode:Cg.top,expandedLayoutInsets:QV},UZ={collapsedContentMode:Cg.scaleAspectFill,collapsedLayoutInsets:QV,expandedContentMode:Cg.scaleAspectFill,expandedLayoutInsets:QV},GZ={collapsedContentMode:Cg.topLeft,collapsedLayoutInsets:{top:0,left:-70,bottom:0,right:0},expandedContentMode:Cg.center,expandedLayoutInsets:QV},jZ={collapsedContentMode:Cg.topRight,collapsedLayoutInsets:{top:0,left:70,bottom:0,right:0},expandedContentMode:Cg.center,expandedLayoutInsets:QV},VZ={collapsedContentMode:Cg.topLeft,collapsedLayoutInsets:QV,expandedContentMode:Cg.center,expandedLayoutInsets:QV},HZ={collapsedContentMode:Cg.topRight,collapsedLayoutInsets:QV,expandedContentMode:Cg.center,expandedLayoutInsets:QV},WZ={collapsedContentMode:Cg.topLeft,collapsedLayoutInsets:QV,expandedContentMode:Cg.center,expandedLayoutInsets:QV},qZ={collapsedContentMode:Cg.topRight,collapsedLayoutInsets:QV,expandedContentMode:Cg.center,expandedLayoutInsets:QV},zZ={objectPath:hb,cardArtLayoutMetrics:[{maxWidth:250,ltr:BZ,rtl:BZ,collapsedSize:{type:qG,width:455,height:256},priority:kg.Mini},{maxWidth:699,ltr:UZ,rtl:UZ},{maxWidth:899,ltr:GZ,rtl:jZ},{maxWidth:1090,ltr:VZ,rtl:HZ,collapsedSize:{type:qG,width:1400,height:527}},{ltr:WZ,rtl:qZ,collapsedSize:{type:qG,width:1600,height:604}}],crops:[hL],sourceWidth:1600,sourceHeight:604,type:DG,cardArtLayouts:[]},YZ={collapsedContentMode:Cg.bottom,expandedContentMode:Cg.bottom,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},JZ={collapsedContentMode:Cg.top,expandedContentMode:Cg.top,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},KZ={objectPath:ab,cardArtLayoutMetrics:[{maxWidth:250,ltr:YZ,rtl:YZ,collapsedSize:{type:qG,width:455,height:256},priority:kg.Mini},{ltr:JZ,rtl:JZ,collapsedSize:{type:WU,height:1}}],sourceWidth:800,sourceHeight:450,type:ej,crops:["sr"],cardArtLayouts:[]},ZZ={collapsedContentMode:Cg.bottom,expandedContentMode:Cg.bottom,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},QZ={collapsedContentMode:Cg.bottom,expandedContentMode:Cg.bottom,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},XZ={collapsedContentMode:Cg.scaleAspectFill,expandedContentMode:Cg.bottom,collapsedLayoutInsets:QV,expandedLayoutInsets:QV},eQ={objectPath:cL,cardArtLayoutMetrics:[{maxWidth:250,ltr:ZZ,rtl:ZZ,collapsedSize:{type:qG,width:455,height:256},priority:kg.Mini},{maxWidth:704,ltr:QZ,rtl:QZ,collapsedSize:{type:WU,height:1.08}},{ltr:XZ,rtl:XZ}],crops:["sr"],sourceWidth:800,sourceHeight:450,type:DG,cardArtLayouts:[]}
class tQ extends AV{constructor(e,t,n,r,o){super(),this.showLiveIndicator=e,this.displayFromDate=t,this.displayText=n,this.countdownToDate=r,this.countdownStringKey=o}}!function(e){e.AppEvent="appEvent",e.ContingentOffer="contingentOffer",e.OfferItem="offerItem"}(cm||(cm={}))
class nQ extends TV{constructor(e){super(),this.promotionType=e}}class rQ extends nQ{constructor(e,t,n,r,o,i,s,a,c,l,u,d,f,p,h){super(cm.AppEvent),this.appEventId=e,this.moduleArtwork=t,this.moduleVideo=n,this.title=r,this.subtitle=o,this.detail=i,this.startDate=s,this.endDate=a,this.kind=c,this.requirements=l,this.lockup=u,this.hideLockupWhenNotInstalled=d,this.formattedDates=f,this.mediaOverlayStyle=p,this.includeBorderInDarkMode=h,this.clickAction=null}}class oQ extends AV{constructor(e,t,n,r,o,i){super(),this.appEvent=e,this.artwork=t,this.video=n,this.shareAction=r,this.mediaOverlayStyle=o,this.includeBorderInDarkMode=i,this.pageMetrics=new OH,this.pageRenderMetrics={}}}class iQ extends AV{constructor(e,t,n,r,o,i,s,a,c,l,u){super(),this.appEventId=e,this.title=t,this.detail=n,this.artworkUrl=r,this.displayTime=o,this.scheduledAction=i,this.notAuthorizedAction=s,this.failureAction=a,this.destinationUrl=c,this.scheduleClickEvent=l,this.cancelScheduleClickEvent=u}}class sQ extends nQ{constructor(e,t,n,r,o,i,s,a,c,l,u,d){super(cm.ContingentOffer),this.backgroundArtwork=e,this.isStreamlinedBuy=n,this.mediaOverlayStyle=t,this.titleFormatted=o,this.subtitle=i,this.additionalInfo=l,this.description=s,this.label=a,this.badge=c,this.offerLockup=d,this.trunkAppIcon=u,this.learnMoreTitle=r,this.clickAction=null}}class aQ extends TV{constructor(e){super(),this.promotionType=e}}class cQ extends aQ{constructor(e,t,n){super(cm.ContingentOffer),this.contingentOffer=e,this.artwork=t,this.mediaOverlayStyle=n,this.pageMetrics=new OH,this.pageRenderMetrics={},this.learnMoreActionMetrics=new kH,this.backButtonActionMetrics=new kH,this.closeButtonActionMetrics=new kH}}class lQ extends nQ{constructor(e,t,n,r,o,i,s,a,c,l,u,d){super(cm.OfferItem),this.moduleArtwork=e,this.moduleVideo=t,this.isStreamlinedBuy=r,this.mediaOverlayStyle=n,this.titleFormatted=o,this.description=a,this.badge=c,this.offerLockup=d,this.subtitle=s,this.endDate=l,this.expiryDateFormatted=i,this.iapArtwork=u,this.clickAction=null}}class uQ extends aQ{constructor(e,t,n,r,o,i,s){super(cm.OfferItem),this.offerItem=e,this.artwork=t,this.learnMoreTitle=i,this.video=n,this.mediaOverlayStyle=r,this.pageMetrics=new OH,this.additionalInfo=s,this.pageRenderMetrics={},this.learnMoreActionMetrics=new kH,this.backButtonActionMetrics=new kH,this.closeButtonActionMetrics=new kH}}class dQ extends AV{constructor(){super(),this.pageMetrics=new OH,this.pageRenderMetrics={}}}class fQ extends dQ{}class pQ extends TV{constructor(e,t){super(),this.message=e,this.action=t}}class hQ extends dQ{constructor(e=[]){super(),this.shelves=[],this.shelves=e}}!function(e){e.visionOS="xros",e.iOS="ios"}(lm||(lm={}))
class wQ extends AV{constructor(e,t){super(),this.type=e,this.values=t}}class gQ extends AV{constructor(e,t,n=null){super(),this.name=e,this.value=t,this.isSelected=t===n}}class mQ extends AV{constructor(e,t,n){super(),this.instanceId=e,this.eventPayloads=t,this.searchAd=n}setTemplateType(e){this.eventPayloads.placed.iAdTemplateType=e}setDuplicatePosition(e){this.eventPayloads.placed.duplicatePosition=e}setMissedOpportunityReason(e){this.eventPayloads.placed.missedOpportunityReason=e}}class vQ extends AV{constructor(e,t,n,r,o){super(),this.instanceId=e,this.iAd=t,this.eventPayloads=n,this.impressionId=r,this.transparencyAction=o}setTemplateType(e){this.eventPayloads.placed.iAdTemplateType=e}setDuplicatePosition(e){this.eventPayloads.placed.duplicatePosition=e}}class yQ extends DH{constructor(e){super("AdTransparencyAction"),this.adTransparencyData=e}}class AQ extends DH{constructor(e,t,n,r,o,i,s,a){super("SearchAction"),this.spellCheckEnabled=!1,this.title=e,this.term=t,this.url=n,this.origin=r,this.entity=o,this.source=i,this.presentationStyle=null!=s?s:[VI],this.referrerData=a}}class TQ extends AV{constructor(e,t){super(),this.hints=e,this.ghostHintTerm=t,this.pageMetrics=new OH,this.pageRenderMetrics={}}}class SQ extends AV{constructor(e,t,n=null){super(),this.primaryText=e,this.secondaryText=t,this.messageClickAction=n}}class PQ extends TV{constructor(e){super(),this.resultType=e,this.clickAction=null}}class bQ extends PQ{constructor(e){super("content"),this.lockup=e}}class IQ extends PQ{constructor(e){super(cN),this.lockup=e}}class CQ extends PQ{constructor(e){super(HI),this.lockup=e}}class kQ extends PQ{constructor(){super(Um),this.lockups=[],this.displaysScreenshots=!0,this.itemBackground="ad"}}class OQ extends PQ{constructor(){super(T$)}}class EQ extends PQ{constructor(e){super(WI),this.title=e}}class RQ extends PQ{constructor(e,t,n,r,o){super("lockupCollection"),this.heading=e,this.headingArtwork=o,this.title=t,this.items=n,this.detailAction=r}}class DQ extends PQ{constructor(e,t){super(LL),this.title=e,this.tokens=t}}class _Q extends TV{constructor(e){super(),this.linkableText=e}}!function(e){e.requestedUrl="_jet-internal:metricsHelpers_requestedUrl",e.timingValues="_jet-internal:metricsHelpers_timingValues",e.pageInformation="_jet-internal:metricsHelpers_pageInformation",e.contentMaxAge="_jet-internal:responseMetadata_contentMaxAge"}(um||(um={}))
const LQ="X-Apple-AppStore-UserId-Secondary"
class xQ extends Error{}class MQ extends Error{}const $Q="x-apple-application-instance",FQ="x-apple-application-site"
class NQ extends AV{constructor(e,t,n,r,o=!1,i=!1){super(),this.strategy=e,this.updateDelayInterval=t,this.timeSinceOnScreenInterval=n,this.timeToLiveEndDate=r,this.refreshWhileVisible=o,this.refreshForDeviceDrivenContentChange=i}}const BQ=new Set([117,122,118,195,194,197,369,370,371,372,373,374,375,376,377,378,379,380,395,396,397,398,399,400,491,492,493,504,505,506,520,521,522,523,524,525,530,531,532,533,567,571]),UQ=new Set([491,492,493]),GQ=new Set([530,531,532,533]),jQ=new Set([567,571]),VQ=new Set([311,312,476]),HQ=new Set([...VQ,518]),WQ=new Set([557,418,431,429,430,420,304,305,260,497]),qQ=new Set([413,414,254,255,256,266,271,436])
class zQ extends AV{constructor(e,t,n,r,o){super(),this.name=e,this.genreId=t,this.artwork=n,this.ageBandId=r,this.children=o}}class YQ extends AV{constructor(e){super(),this.categories=e}}class JQ{}class KQ extends Error{}class ZQ extends JQ{constructor(e){super(),this.rawData=e,this.appId=null,this.groupId=null,this.score=0,this.segScores=new Map,this.modifiedScore=0,this.onDeviceScore=0}}class QQ extends JQ{constructor(e){super(),this.rawData=e,this.isExactMatch=!1,this.isWildcardMatch=!1,this.isUnpersonalizedMatch=!1,this.isFallbackMatch=!1,this.appId=null,this.groupId=null,this.score=0,this.modifiedScore=0,this.onDeviceScore=0}}const XQ="-1"
class eX{constructor(e,t){e&&(this.appStoreClientRequestId=t,this.iAdId=e[FN],this.sponsoredSearchRequestData=e.dataBlob,this.routingInfo=e.iAdRoutingInfo,this.canary=e.canary)}validAdRequest(){const e=this.sponsoredSearchRequestData&&this.sponsoredSearchRequestData.length>0,t=this.routingInfo&&this.routingInfo.length>0
return e&&t}}const tX={showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}}
let nX=null
const rX=(e,t)=>{const n=e.isLandscape()
return n===t.isLandscape()?0:n?-1:1},oX="jet_native_advert_instanceid"
dm=e(8371)
class iX extends AV{constructor(e){super(),this.incidentType=e}}class sX extends iX{constructor(e,t){super("discard"),this.instanceId=e,this.reason=t}}const aX="isOnBoardingCard"
fm=e(172)
const cX="appStore.getEngagementEvents"
!function(e){e.EditorialItem="editorialItem",e.EditorialItemGroup="editorialItemGroup"}(pm||(pm={}))
const lX="X-AppStore-iAdClickToken",uX="X-AppStore-iAdLineItem",dX="X-AppStore-iAdDismissAdActionMetrics"
class fX{constructor(e,t,n,r,o,s,a){this.placementType=t,this.placementId=null===t?null:this.placementIdFromType(t),this.pageFields={},this.clickFields={},this.impressionsFields={},this.fastImpressionFields={},this.iAdClickEventFields={},this._iAdApplied=!1,this._iAdAdamId=void 0,this.positionInfo=a,this.slotInfo=n,this.setInitialAdData(e,r,o),i(s)&&(this.pageFields[vT]=s),this.fastImpressionFields[OO]=!0}static from(e,t){var n,r,o,i
const s=new fX(e,d(t.placementType),c(t.slotInfo),null!==(n=d(t.iAdId))&&void 0!==n?n:void 0,null!==(r=d(t.appStoreClientRequestId))&&void 0!==r?r:void 0,null!==(o=w(t.wasOdmlSuccessful))&&void 0!==o?o:void 0,h(t.positionInfo))
return s._iAdApplied=l(t._iAdApplied),s._iAdAdamId=null!==(i=d(t._iAdAdamId))&&void 0!==i?i:void 0,Object.assign(s.pageFields,t.pageFields),Object.assign(s.clickFields,t.clickFields),Object.assign(s.impressionsFields,t.impressionsFields),Object.assign(s.fastImpressionFields,t.fastImpressionFields),Object.assign(s.iAdClickEventFields,t.iAdClickEventFields),s.updateContainerId(d(t.containerId)),s}static createInitialSlotInfos(e,t,n,r){var o
switch(t){case WG:case bG:const i=fX.containerIdFromType(t),s=null!==(o=null==n?void 0:n.slot)&&void 0!==o?o:0
return[{containerId:i,slots:[{slotId:`${i}_${s}`,slotIndex:s,hasAdData:!1}]}]
case Dj:const a=ho(e,t),c=(0,bg.isNothing)(a)?[]:a.map(e=>e.slot),l={},u=(0,bg.isSome)(n)?n.slot-1:null
let d=!1
return c.forEach(e=>{var t
const n=d?e-1:e,o=null==r?void 0:r.find(e=>e.containedAdSlots.includes(n)),i=u===e,s=function(e,t,n){return(0,bg.isNothing)(n)?"0":n.type===pm.EditorialItemGroup?(!(n.containedAdSlots.length>1)||e===n.containedAdSlots[0]||n.containedAdSlots[n.containedAdSlots.length-1],"0"):"0"}(n,0,o),a=null!==(t=l[s])&&void 0!==t?t:{containerId:s,slots:[]}
l[s]=a
const c={slotId:`${s}_${e}`,slotIndex:e,hasAdData:!1}
a.slots.push(c),d=d||i}),Object.values(l)
default:return null}}get iAdIsPresent(){return this._iAdApplied}get iAdAdamId(){return this._iAdAdamId}updateForAdResponse(e,t){var n
r(t)||(this.placementType=t.placementType,this.placementId=this.placementIdFromType(this.placementType),this.positionInfo=null===(n=t.onDeviceAd)||void 0===n?void 0:n.positionInfo,this.setInitialAdData(e,t.iAdId,t.clientRequestId))}setInitialAdData(e,t,n){if((0,bg.isNothing)(t)||(0,bg.isNothing)(n))return
switch(this.pageFields[m2.hasIAdData]=!0,this.placementType){case Dj:case WG:case bG:this.impressionsFields[m2.hasIAdData]=!0}switch(this.pageFields[v_]=n,this.placementType){case Dj:case WG:case bG:this.clickFields[v_]=n,this.impressionsFields[v_]=n}const r=zd(t)
if(this.pageFields[FN]=r,this.impressionsFields[FN]=r,this.clickFields[FN]=r,this.updateContainerId(null),this.updateSlotInfo(),s(this.slotInfo)&&(this.pageFields[eB]=this.slotInfo,this.clickFields[eB]=this.slotInfo,this.impressionsFields[eB]=this.slotInfo),null!==this.placementId&&this.placementId.length>0)switch(this.pageFields[MN]=this.placementId,this.clickFields[MN]=this.placementId,this.impressionsFields[MN]=this.placementId,this.placementType){case Dj:case WG:case bG:this.fastImpressionFields[MN]=this.placementId}}updateContainerId(e){this.placementType===Dj?(this.containerId=null!=e?e:null,i(this.containerId)&&(this.clickFields[zF]=this.containerId,this.fastImpressionFields[zF]=this.containerId)):(this.containerId=null===this.placementType?null:fX.containerIdFromType(this.placementType),i(this.containerId)&&(this.pageFields[zF]=this.containerId,this.clickFields[zF]=this.containerId,this.fastImpressionFields[zF]=this.containerId))}containerIdForSlotIndex(e){if((0,bg.isNothing)(e)||(0,bg.isNothing)(this.slotInfo))return null
for(const t of this.slotInfo)for(const n of t.slots)if(n.slotIndex===e)return t.containerId
return this.containerId}apply(e,t){if((0,bg.isNothing)(t)||o(t))return
const n=t.id,r=H(t,TN)
if(this._iAdAdamId=n,r){this.impressionsFields[m2.hasIAdData]=!0,this.clickFields[m2.hasIAdData]=!0
const o=zd(r[y_])
this.fastImpressionFields[u_]=o,this.clickFields[u_]=o
const i=zd(r[yT])
this.clickFields[l_]=i,this.fastImpressionFields[l_]=i,this.pageFields[jU]=n,this.pageFields.iAd={iAdFormat:Jd(h(g(r),"format")),iAdAlgoId:zd(r.algoId),iAdImpressionId:zd(r[y_]),iAdMetadata:zd(r[yT])}
const s=Fe(e,t)
this.updateIAdMetricsFieldsForProductVariantData(s,this.clickFields),Object.assign(this.iAdClickEventFields,r),this._iAdApplied=!0,this.setMissedOpportunity(e,void 0,this.placementType)}this.updateSlotInfo(),s(this.slotInfo)&&(this.pageFields[eB]=this.slotInfo,this.clickFields[eB]=this.slotInfo,this.impressionsFields[eB]=this.slotInfo)}applyClickFieldsFromPageRequest(e,t){this._iAdApplied=!0,this._iAdAdamId=e,Object.assign(this.clickFields,t),Object.keys(this.pageFields).forEach(e=>delete this.pageFields[e])}setSpecifiedCreativeUsed(e){this.fastImpressionFields[AT]=e,this.clickFields[AT]=e}setTemplateType(e){this.pageFields[jx]=e,this.impressionsFields[jx]=e,this.clickFields[jx]=e}setMissedOpportunity(e,t,n){if(this.missedOpportunityReason=t,i(t))switch(this.clickFields[YB]=t,this.placementType){case Dj:case WG:case bG:break
default:this.pageFields[YB]=t,this.impressionsFields[YB]=t}else delete this.clickFields[YB],n===bG?(this.pageFields[YB]=null,this.impressionsFields[YB]=null):(delete this.pageFields[YB],delete this.impressionsFields[YB])
i(t)?(this.pageFields[YB]=t,this.impressionsFields[YB]=t):(delete this.pageFields[YB],delete this.impressionsFields[YB]),this.updateSlotInfo(),s(this.slotInfo)&&(this.pageFields[eB]=this.slotInfo,this.clickFields[eB]=this.slotInfo,this.impressionsFields[eB]=this.slotInfo)}placementIdFromType(e){switch(e){case yU:return TT
case QB:return ST
case Dj:return PT
case WG:return bT
case bG:return IT
default:throw new Error(`This method should never be called with value: ${e}`)}}static placementTypeFromPlacementId(e,t){switch(t){case TT:return yU
case ST:return QB
case PT:return Dj
case bT:return WG
case IT:return bG
default:return e.console.log(`Failed to get placementType from placementId ${t}. Defaulting to searchResults`),QB}}static containerIdFromType(e){switch(e){case WG:return AN
case bG:return fC
default:return null}}fastImpressionsFieldsForCurrentItem(e,t){switch(this.placementType){case WG:case bG:case Dj:let r
if((0,bg.isSome)(t))r=t
else{const t=cf(e)
r=null!==t&&t.locationType===NB?(n=e).locationStack.length<2?null:n.locationStack[1].position:af(e)}const o=y(this.fastImpressionFields)
if(o[CT]=`${this.containerIdForSlotIndex(r)}_${r}`,r!==this.adjustedSlotIndex){const e=[OO,MN,zF,CT]
Object.keys(o).forEach(t=>{e.includes(t)||delete o[t]})}return o
default:return this.fastImpressionFields}var n}get adjustedSlotIndex(){var e
const t=null===(e=this.positionInfo)||void 0===e?void 0:e.slot
return i(t)?t-1:null}updateSlotInfo(){if(!(0,bg.isNothing)(this.slotInfo))switch(this.placementType){case WG:case bG:for(const e of this.slotInfo)for(const t of e.slots)t.hasAdData=this.iAdIsPresent,i(this.missedOpportunityReason)&&(t.missedOpportunityReason=this.missedOpportunityReason)
break
case Dj:const e=this.adjustedSlotIndex
for(const t of this.slotInfo)for(const n of t.slots){const t=e===n.slotIndex,r=this.iAdIsPresent&&t
let o=this.missedOpportunityReason
!t&&i(e)&&(o=eD),n.hasAdData=r,i(o)&&(n.missedOpportunityReason=o)}}}updateIAdMetricsFieldsForProductVariantData(e,t){(0,bg.isSome)(e)&&He(e,A_)?t[kT]=e.productPageId:delete t[kT]}get fastImpressionsEventVersion(){switch(this.placementType){case WG:case bG:case Dj:return 5
default:return 4}}get shouldIncludeAdRotationFields(){switch(this.placementType){case WG:case bG:case Dj:return!1
default:return!0}}}class pX{constructor(e={}){this.baseFields=e}}const hX="data.search.dataSetId",wX=RE,gX=new Set([v_,FN,eB,vT,OO,zF,u_,l_,jU,"iAd",MN,YB,YA,jx,zB,r$])
class mX{constructor(e,t,n){this.periodDuration=e,this.periodCount=t,this.type=n}isEqualTo(e){return e.periodDuration===this.periodDuration&&e.periodCount===this.periodCount&&e.type===this.type}}const vX=new Set([tm.Grid,tm.List,tm.NumberedList,tm.River]),yX={11:"43",30:"44"},AX=rE,TX="ReviewsPage.ShelfId"
class SX{constructor(e,t,n){this.sectionType=e,this.shelfId=t,this.shelfBasedMappedIds=n}createProductPageSection(e){return eJ.has(this.sectionType)?new ZY(this.sectionType,null):new ZY(this.sectionType,this.shelfId)}createShelfIdList(){return this.shelfBasedMappedIds||[this.shelfId]}}const PX=5,bX=5,IX=[new SX(Ej,Ej),new SX(Rj,Rj),new SX(Kj,BG),new SX(Kj,lF),new SX(Kj,nG),new SX(Kj,oB),new SX(Kj,UN),new SX(Kj,VG),new SX(Kj,ZU),new SX(Kj,$B),new SX(Kj,MB),new SX(Kj,Cj),new SX(Kj,uj),new SX(Kj,FG),new SX($j,$j),new SX(Kj,yj),new SX(Kj,KU),new SX(Kj,MG),new SX(Kj,Ij,[RG,XF,Jx,JB]),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,gU),new SX(Kj,YG),new SX(Kj,uG),new SX(Kj,UG),new SX(Kj,QG)],CX=[new SX(Ej,Ej),new SX(Rj,Rj),new SX(Kj,BG),new SX(Kj,lF),new SX(Kj,nG),new SX(Kj,oB),new SX(Kj,UN),new SX(Kj,VG),new SX(Kj,ZU),new SX(Kj,$B),new SX(Kj,MB),new SX(Kj,Cj),new SX(Kj,uj),new SX(Kj,FG),new SX($j,$j),new SX(Kj,yj),new SX(Kj,KU),new SX(Kj,MG),new SX(Kj,Ij,[RG,pU,BN,rB,JB,eN,tN]),new SX(Kj,eN),new SX(Kj,BN),new SX(Kj,rB),new SX(Kj,tN),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,gU),new SX(Kj,YG),new SX(Kj,uG),new SX(Kj,UG),new SX(Kj,QG)],kX=[new SX(Ej,Ej),new SX(Rj,Rj),new SX(Kj,BG),new SX(Kj,lF),new SX(Kj,nG),new SX(Kj,oB),new SX(Kj,UN),new SX($j,$j),new SX(Kj,yj),new SX(Kj,VG),new SX(Kj,KU),new SX(Kj,FG),new SX(Kj,MG),new SX(Kj,Ij,[RG,XF,JB]),new SX(Kj,Cj),new SX(Kj,uj),new SX(Kj,ZU),new SX(Kj,$B),new SX(Kj,MB),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,yB),new SX(Kj,YG),new SX(Kj,uG),new SX(Kj,UG),new SX(Kj,QG)],OX=[new SX(Ej,Ej),new SX(Rj,Rj),new SX(Kj,BG),new SX(Kj,lF),new SX(Kj,nG),new SX(Kj,oB),new SX(Kj,UN),new SX($j,$j),new SX(Kj,yj),new SX(Kj,VG),new SX(Kj,KU),new SX(Kj,FG),new SX(Kj,MG),new SX(Kj,Ij,[RG,pU,BN,rB,JB]),new SX(Kj,Cj),new SX(Kj,uj),new SX(Kj,ZU),new SX(Kj,$B),new SX(Kj,MB),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,yB),new SX(Kj,YG),new SX(Kj,uG),new SX(Kj,UG),new SX(Kj,QG)],EX=[new SX(Ej,Ej),new SX(Rj,Rj),new SX(Kj,BG),new SX(Kj,lF),new SX(Kj,nG),new SX(Kj,QG),new SX(Kj,oB),new SX(Kj,UN),new SX(Kj,VG),new SX(Kj,ZU),new SX(Kj,$B),new SX(Kj,MB),new SX(Kj,Cj),new SX(Kj,uj),new SX(Kj,FG),new SX($j,$j),new SX(Kj,yj),new SX(Kj,KU),new SX(Kj,MG),new SX(Kj,Ij,[RG,XF,Jx,JB]),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,gU),new SX(Kj,YG),new SX(Kj,uG),new SX(Kj,UG)],RX=[new SX(Ej,Ej),new SX(Rj,Rj),new SX(Kj,BG),new SX(Kj,lF),new SX(Kj,nG),new SX(Kj,QG),new SX(Kj,oB),new SX(Kj,UN),new SX(Kj,VG),new SX(Kj,ZU),new SX(Kj,$B),new SX(Kj,MB),new SX(Kj,Cj),new SX(Kj,uj),new SX(Kj,FG),new SX($j,$j),new SX(Kj,yj),new SX(Kj,KU),new SX(Kj,MG),new SX(Kj,Ij,[RG,pU,BN,rB,JB,eN,tN]),new SX(Kj,eN),new SX(Kj,BN),new SX(Kj,rB),new SX(Kj,tN),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,gU),new SX(Kj,YG),new SX(Kj,uG),new SX(Kj,UG)],DX=5,_X=5,LX=[new SX(Ej,Ej),new SX(Rj,Rj),new SX(Kj,BG),new SX(Kj,cF),new SX(Kj,nG),new SX(Kj,VG),new SX(Kj,ZU),new SX(Kj,Cj),new SX(Kj,uj),new SX(Kj,FG),new SX($j,$j),new SX(Kj,yj),new SX(Kj,KU),new SX(Kj,MG),new SX(Kj,Ij,[RG,XF,Jx,JB]),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,gU),new SX(Kj,YG),new SX(Kj,uG),new SX(Kj,QG),new SX(Kj,UG)],xX=[new SX(Ej,Ej),new SX(Rj,Rj),new SX(Kj,BG),new SX(Kj,cF),new SX(Kj,nG),new SX(Kj,VG),new SX(Kj,ZU),new SX(Kj,Cj),new SX(Kj,uj),new SX(Kj,FG),new SX($j,$j),new SX(Kj,yj),new SX(Kj,KU),new SX(Kj,MG),new SX(Kj,Ij,[RG,pU,BN,rB,JB,eN,tN]),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,gU),new SX(Kj,YG),new SX(Kj,uG),new SX(Kj,QG),new SX(Kj,UG)],MX=[new SX(Ej,Ej),new SX(Rj,Rj),new SX(Kj,BG),new SX(Kj,cF),new SX(Kj,nG),new SX($j,$j),new SX(Kj,yj),new SX(Kj,KU),new SX(Kj,FG),new SX(Kj,MG),new SX(Kj,Ij,[RG,XF,JB]),new SX(Kj,VG),new SX(Kj,Cj),new SX(Kj,uj),new SX(Kj,ZU),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,yB),new SX(Kj,YG),new SX(Kj,uG),new SX(Kj,QG),new SX(Kj,UG)],$X=[new SX(Ej,Ej),new SX(Rj,Rj),new SX(Kj,BG),new SX(Kj,cF),new SX(Kj,nG),new SX($j,$j),new SX(Kj,yj),new SX(Kj,KU),new SX(Kj,FG),new SX(Kj,MG),new SX(Kj,Ij,[RG,pU,BN,rB,JB]),new SX(Kj,VG),new SX(Kj,Cj),new SX(Kj,uj),new SX(Kj,ZU),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,yB),new SX(Kj,YG),new SX(Kj,uG),new SX(Kj,QG),new SX(Kj,UG)],FX=[new SX(Ej,Ej),new SX(Rj,Rj),new SX(Kj,BG),new SX(Kj,cF),new SX(Kj,nG),new SX(Kj,QG),new SX(Kj,VG),new SX(Kj,ZU),new SX(Kj,Cj),new SX(Kj,uj),new SX(Kj,FG),new SX($j,$j),new SX(Kj,yj),new SX(Kj,KU),new SX(Kj,MG),new SX(Kj,Ij,[RG,Jx,XF,JB]),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,gU),new SX(Kj,YG),new SX(Kj,uG),new SX(Kj,UG)],NX=[new SX(Ej,Ej),new SX(Rj,Rj),new SX(Kj,BG),new SX(Kj,cF),new SX(Kj,nG),new SX(Kj,QG),new SX(Kj,VG),new SX(Kj,ZU),new SX(Kj,Cj),new SX(Kj,uj),new SX(Kj,FG),new SX($j,$j),new SX(Kj,yj),new SX(Kj,KU),new SX(Kj,MG),new SX(Kj,Ij,[RG,eN,pU,BN,rB,JB,tN]),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,gU),new SX(Kj,YG),new SX(Kj,uG),new SX(Kj,UG)],BX=5,UX=5,GX=[new SX(Ej,Ej),new SX(Rj,Rj),new SX(Kj,BG),new SX(Kj,nG),new SX(Kj,oB),new SX(Kj,UN),new SX(Kj,VG),new SX(Kj,ZU),new SX(Kj,$B),new SX(Kj,MB),new SX(Kj,Cj),new SX(Kj,uj),new SX(Kj,FG),new SX($j,$j),new SX(Kj,yj),new SX(Kj,KU),new SX(Kj,Ij),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,gU),new SX(Kj,YG),new SX(Kj,uG),new SX(Kj,UG),new SX(Kj,QG)],jX=[new SX(Ej,Ej),new SX(Rj,Rj),new SX(Kj,BG),new SX(Kj,nG),new SX(Kj,oB),new SX(Kj,UN),new SX($j,$j),new SX(Kj,yj),new SX(Kj,VG),new SX(Kj,KU),new SX(Kj,FG),new SX(Kj,Ij),new SX(Kj,Cj),new SX(Kj,uj),new SX(Kj,ZU),new SX(Kj,$B),new SX(Kj,MB),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,yB),new SX(Kj,YG),new SX(Kj,uG),new SX(Kj,UG),new SX(Kj,QG)],VX=5,HX=5,WX=[new SX(Ej,Ej),new SX(Rj,Rj),new SX(Kj,BG),new SX(Kj,nG),new SX(Kj,VG),new SX(Kj,ZU),new SX(Kj,Cj),new SX(Kj,uj),new SX(Kj,FG),new SX($j,$j),new SX(Kj,yj),new SX(Kj,KU),new SX(Kj,Ij),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,gU),new SX(Kj,YG),new SX(Kj,uG),new SX(Kj,QG),new SX(Kj,UG)],qX=[new SX(Ej,Ej),new SX(Rj,Rj),new SX(Kj,BG),new SX(Kj,nG),new SX($j,$j),new SX(Kj,yj),new SX(Kj,KU),new SX(Kj,FG),new SX(Kj,Ij),new SX(Kj,VG),new SX(Kj,Cj),new SX(Kj,uj),new SX(Kj,ZU),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,yB),new SX(Kj,YG),new SX(Kj,uG),new SX(Kj,QG),new SX(Kj,UG)],zX=5,YX=5,JX=[new SX(Ej,Ej),new SX(Rj,Rj),new SX(Kj,FG),new SX($j,$j),new SX(Kj,GN),new SX(Kj,Cj),new SX(Kj,uj),new SX(Kj,rN),new SX(Kj,UG),new SX(Kj,QG),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,gU),new SX(Kj,uM)],KX=[new SX(Ej,Ej),new SX(Rj,Rj),new SX($j,$j),new SX(Kj,GN),new SX(Kj,FG),new SX(Kj,nN),new SX(Kj,Cj),new SX(Kj,uj),new SX(Kj,UG),new SX(Kj,QG),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,yB),new SX(Kj,uM)],ZX=5,QX=5,XX=[new SX(Ej,Ej),new SX(Rj,Rj),new SX(Kj,FG),new SX($j,$j),new SX(Kj,GN),new SX(Kj,Cj),new SX(Kj,uj),new SX(Kj,rN),new SX(Kj,QG),new SX(Kj,UG),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,gU),new SX(Kj,uM)],e0=[new SX(Ej,Ej),new SX(Rj,Rj),new SX($j,$j),new SX(Kj,GN),new SX(Kj,FG),new SX(Kj,nN),new SX(Kj,Cj),new SX(Kj,uj),new SX(Kj,QG),new SX(Kj,UG),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,yB),new SX(Kj,uM)],t0=3,n0=3,r0=[new SX(Ej,Ej),new SX(Rj,Rj),new SX(Kj,ZU),new SX($j,$j),new SX(Kj,yj),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,IL)],o0=[new SX(Ej,Ej),new SX(Rj,Rj),new SX($j,$j),new SX(Kj,yj),new SX(Kj,ZU),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,IL)],i0=5,s0=5,a0=[new SX(Ej,Ej),new SX(Rj,Rj),new SX(Kj,nG),new SX(Kj,FG),new SX($j,$j),new SX(Kj,GN),new SX(Kj,Kx),new SX(Kj,rN),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,gU),new SX(Kj,YG),new SX(Kj,UG),new SX(Kj,QG)],c0=[new SX(Ej,Ej),new SX(Rj,Rj),new SX(Kj,nG),new SX($j,$j),new SX(Kj,GN),new SX(Kj,FG),new SX(Kj,Kx),new SX(Kj,nN),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,yB),new SX(Kj,YG),new SX(Kj,UG),new SX(Kj,QG)],l0=5,u0=5,d0=[new SX(Ej,Ej),new SX(Rj,Rj),new SX(Kj,nG),new SX(Kj,Cj),new SX(Kj,uj),new SX(Kj,FG),new SX($j,$j),new SX(Kj,GN),new SX(Kj,Kx),new SX(Kj,rN),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,gU),new SX(Kj,YG),new SX(Kj,QG),new SX(Kj,UG)],f0=[new SX(Ej,Ej),new SX(Rj,Rj),new SX(Kj,nG),new SX($j,$j),new SX(Kj,GN),new SX(Kj,FG),new SX(Kj,Kx),new SX(Kj,nN),new SX(Kj,Cj),new SX(Kj,uj),new SX(Kj,ZG),new SX(Kj,HG),new SX(Kj,$G),new SX(Kj,Aj),new SX(Kj,yB),new SX(Kj,YG),new SX(Kj,QG),new SX(Kj,UG)]
class p0 extends AV{constructor(e){super(),this.productMedia=e,this.pageMetrics=new OH,this.pageRenderMetrics={}}}const h0="product_media"
class w0 extends AV{constructor(e){super(),this.style=e}isValidUber(e,t){function n(e){return null!=e&&0!==Object.keys(e).length}return n(this.artwork)||n(this.compactArtwork)||n(this.video)||n(this.compactVideo)||(e||t)&&n(this.iconArtwork)}}let g0=null
const m0=[yj,zv,pD,yG,DM,Yv,kB,hD,wD,DF,uB,gD,UB,GC,yN,Jv,Kv,SC,Zv],v0=/id([0-9]+)\/?$/i,y0={915249334:"1462947752"},A0=[YN,zC,LU,xj,LM,TD,fx,px],T0=[YN,YC,LU,LM],S0=[YN,LU,xj,xM],P0=fx
class b0{supports(e,t,n,r){return this._supports(e,t,n,r)}_supports(e,t,n,r){const o=this.supportedFeaturedContentIds.has(n)
let s
return s=!i(r)||this.supportedNativeGroupingShelfIds.has(r),o&&s}createShelf(e,t,n,o,a){var c,l,u
const d=t,f=this.initialShelfDataFromGroupingMediaApiData(e,d),p=this.shelfTokenFromBaseTokenAndMediaApiData(e,d,o,n),h=this.shelfMetricsOptionsFromBaseMetricsOptions(e,p,a),w=s(h)
w&&this.shouldImpressShelf()&&rf(0,h,p.title),s(f.shelfContents)&&(f.shelfContents=ko(f.shelfContents,null!==(c=n.recoImpressionData)&&void 0!==c?c:{},null!==(l=null==a?void 0:a.recoMetricsData)&&void 0!==l?l:{}))
const g=this._createShelf(e,p,f,n)
if(w&&this.shouldImpressShelf()&&(sf(h.locationTracker),i(g)&&(gf(e,g,h),(null===(u=g.url)||void 0===u?void 0:u.length)>0&&s(g.impressionMetrics)&&p.showingPlaceholders))){const e=g.url
try{const t=xq.from(e).pathComponents().pop(),n=JSON.parse(decodeURIComponent(t))
n.originalPlaceholderShelfImpressionMetrics=g.impressionMetrics,function(e,t){const n=xq.from(e.url),o=xq.from(Jn(e,t))
for(const e of Object.keys(n.query))r(o.query[e])&&(o.query[e]=n.query[e])
e.url=o.build()}(g,n)}catch{g.url=e}}return this.finalizeInitialShelfForDisplay(e,g,p,f,n),w&&this.shouldPrepareLocationTrackerForNextPosition()&&uf(n.metricsLocationTracker),g}constructor(e){this.supportedFeaturedContentIds=new Set([]),this.supportedNativeGroupingShelfIds=new Set([]),this.builderClass=e}incompleteShelfFetchStrategy(e){return e.featureFlags.isEnabled("on_demand_grouping_shelf_fetching")?$g.OnShelfWillAppear:$g.OnPageLoad}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){return n}shouldImpressShelf(){return!0}shouldPrepareLocationTrackerForNextPosition(){return!0}finalizeInitialShelfForDisplay(e,t,n,r,i){var a,c
if(o(t))return
n.isSearchLandingPage&&or(0,t,n),(null===(a=t.url)||void 0===a?void 0:a.length)>0&&s(i.additionalShelfParameters)&&(t.url=xq.from(t.url).append(pB,i.additionalShelfParameters).build()),t.fetchStrategy=this.incompleteShelfFetchStrategy(e)
const l=(0,Ig.isSome)(t)&&(null===(c=t.url)||void 0===c?void 0:c.length)>0
o(t.items)&&!l&&(t.isHidden=!0)}finalizeSecondaryShelfForDisplay(e,t,n,i){if(!o(t)){if(n.remainingItems.length){const t=n.remainingItems.map(e=>e.id)
e.console.warn("Could not load items for: "+t.join(","))}var a,c
if(t&&(t.mergeWhenFetched=((c=n).shelfStyle,!(c.showingPlaceholders||c.shelfStyle===jD||c.shelfStyle===_k&&(0,Ig.isSome)(c.initialHydratedItems)&&c.initialHydratedItems.length>0)),t.networkTimingMetrics=i.responseTimingValues,t.nextPreferredContentRefreshDate=null==(a={timeToLive:null,nextPreferredContentRefreshDate:null,refreshWhileVisibleForNextPreferredContentRefreshDate:!1})?void 0:a.nextPreferredContentRefreshDate),s(n.originalPlaceholderShelfImpressionMetrics))if(r(t.impressionMetrics))t.impressionMetrics=n.originalPlaceholderShelfImpressionMetrics
else for(const e in n.originalPlaceholderShelfImpressionMetrics.fields)Object.prototype.hasOwnProperty.call(n.originalPlaceholderShelfImpressionMetrics.fields,e)&&(t.impressionMetrics.fields[e]=n.originalPlaceholderShelfImpressionMetrics.fields[e])
!n.hasExistingContent&&o(t.items)&&(t.isHidden=!0),n.isSearchLandingPage&&or(0,t,n)}}handleShelf(e,t,n,r,o,i){const s=n[uU],a=JSON.parse(s)
a.isFirstRender=!1,this.secondaryShelfDataForShelfUrl(e,t,a,n).then(t=>{const n=this._createShelf(e,a,t,null)
this.finalizeSecondaryShelfForDisplay(e,n,a,t),o(n)}).catch(e=>{if(a&&!a.hasExistingContent){const e=new $z(a.shelfStyle)
e.isHidden=!0,o(e)}else i(e)})}shelfRoute(e){return s(this.supportedNativeGroupingShelfIds)?function(e,t){const n=[]
for(const t of e)n.push(va(-1,t,void 0))
return n}(this.supportedNativeGroupingShelfIds):ya(this.supportedFeaturedContentIds)}static async secondaryGroupingShelfDataForShelfUrl(e,t,n,r){return await b0.secondaryGroupingShelfMediaApiData(e,t,n,r).then(t=>{const r=function(e,t,n){var r
const o=(null===(r=t.relationshipToFetch)||void 0===r?void 0:r.length)>0
let i=L(n)
if(o){const r={}
for(const e of n.data)r[e.id]=e
i=[]
for(const n of t.remainingItems){const o=ie(e,n,t.relationshipToFetch)
s(o)&&(n.relationships[t.relationshipToFetch].data=[r[o.id]]),i.push(n)}}return i}(e,n,t)
return{shelfContents:r,responseTimingValues:t[um.timingValues]}})}static async secondaryGroupingShelfMediaApiData(e,t,n,r){const o=t.build()
let i
return i=da(e,t)?new zz(e,o):Zn(e,n),i?(i.includingAdditionalPlatforms(function(e){return O(e)}(e)),i.includingAttributes(function(e){const t=[wj,eG,sG,H$]
return e.appleSilicon.isSupportEnabled&&t.push(CG),t}(e)),i.usingCustomAttributes($e(e)),i.attributingTo(t.build()),await Tn(e,i).then(e=>(Kn(n,i.ids),e))):await Promise.reject(new Error(`Could not construct media API request for: ${t}`))}}class I0 extends b0{constructor(){super("GroupingAppEventShelfController"),this.supportedFeaturedContentIds=new Set([519,518])}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:se(t,qj)}}async secondaryShelfDataForShelfUrl(e,t,n,r){var o
if(!((null===(o=n.recommendationsHref)||void 0===o?void 0:o.length)>0)){const t=[],r=[],o=[]
for(const e of n.remainingItems)switch(e.type){case _U:r.push(e)
break
case YU:o.push(e)
break
case Uj:t.push(e)}const i=new zz(e,t)
We(e,i,t)
const s=new zz(e,r)
We(e,s,r)
const a=new zz(e,o)
We(e,a,o)
const c=await Promise.all([this.fetchRemainingItems(e,i),this.fetchRemainingItems(e,s),this.fetchRemainingItems(e,a)]),l={...c[0],...c[1],...c[2]},u=[]
for(const e of n.remainingItems){const t=l[e.id];(0,Ig.isSome)(t)&&u.push(t)}return Kn(n,new Set([...a.ids,...s.ids,...i.ids])),{shelfContents:u}}try{const o=await b0.secondaryGroupingShelfMediaApiData(e,t,n,r),s=_(e,o),a=this.initialShelfDataFromGroupingMediaApiData(e,s)
a.responseTimingValues=o[um.timingValues]
const c=q(s,zn(0,n.featuredContentId))
return i(c)&&(null==c?void 0:c.length)>0&&(a.shelfTitle=c),a}catch{return{shelfContents:[]}}}async fetchRemainingItems(e,t){const n={}
if(t.ids.size>0){Qn(e,t)
try{await Tn(e,t).then(e=>{(e=>{for(const t of e.data)n[t.id]=t})(e)})}catch(n){e.console.error("Error fetching remaining items",t.ids)}}return n}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o=518===n.featuredContentId
let i=null
const a=this.initialShelfDataFromGroupingMediaApiData(e,t)
o&&s(a.shelfContents)&&(i=this.personalizedDataResultFromDataItems(e,a.shelfContents))
const c={...n,shouldPersonalizeData:o,personalizedDataResult:i},l=s(a.shelfContents),u=!Y(t,rA)
return!l&&u?(c.recommendationsHref=t.href,c.isValidRecommendationsShelf=!0):c.isValidRecommendationsShelf=l,c}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){const r={...n}
if(s(t.personalizedDataResult)){const e=ef(n.recoMetricsData,t.personalizedDataResult.processingType,null)
r.recoMetricsData=e}return r}_createShelf(e,t,n,i){var a
if(!Oi(e))return null
if(!t.isValidRecommendationsShelf)return null
const c={pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:t.metricsPageInformation.recoMetricsData}
let l=n.shelfContents
s(t.personalizedDataResult)&&t.isFirstRender&&(l=t.personalizedDataResult.personalizedData)
const u=[]
for(const e of l)r(e.attributes)||qn(t)?(t.isDeferring=!0,t.remainingItems.push(e)):u.push(e)
const d=Fi(e,u,null,!1,!1,c,!1,!0,t.isArcadePage,!1)
On(d.nextAppEventPromotionStartDate,null==i?void 0:i.refreshController)
const f=d.appPromotions,p=new $z(wC)
return p.isHorizontal=!0,p.title=null!==(a=n.shelfTitle)&&void 0!==a?a:t.title,p.items=f,o(p.items)&&t.isFirstRender&&ia(e,p,t,t.featuredContentId),p.url=Jn(p,t),o(p.items)&&o(p.url)?t.isFirstRender?null:I0.makeHiddenShelf(t):p}personalizedDataResultFromDataItems(e,t){const n=new Set
for(const e of t){const t=d(e,VF);(null==t?void 0:t.length)>0&&n.add(t)}const r=yr(e,n)
return mr(e,oA,t,!1,r,null,null,null,!0)}static makeHiddenShelf(e){const t=new $z(e.shelfStyle)
return t.isHidden=!0,t}}class C0 extends b0{constructor(){super("GroupingArcadeFooterShelfController"),this.supportedFeaturedContentIds=new Set([-1]),this.supportedNativeGroupingShelfIds=new Set([1])}shouldImpressShelf(){return!1}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:M(t),responseTimingValues:null}}async secondaryShelfDataForShelfUrl(e,t,n,r){const o=Wf(e,this.numberOfIconsForArcadeAppGrid(e.client.deviceType))
return await Tn(e,o).then(t=>{const n=this.initialShelfDataFromGroupingMediaApiData(e,t)
return n.responseTimingValues=t[um.timingValues],n})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o={...n,shouldIncludeShelfUrl:n.isFirstRender}
return o.showingPlaceholders=n.isFirstRender,o}_createShelf(e,t,n,o){const i=new UV,a=new $z(Ek)
a.items=[i]
const c={targetType:Jy,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,title:e.loc.string(cD),id:t.id,kind:Ky,softwareType:oj}
gf(e,i,c),rf(0,c,c.title),i.buttonAction=Uf(e,fN,t.metricsPageInformation,t.metricsLocationTracker)
const l={targetType:Hj,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,title:i.buttonAction.title,id:Tv,kind:Hj,softwareType:oj}
gf(e,i.buttonAction,l),sf(c.locationTracker)
const u=e.bag.termsAndConditionsURL
if(!r(u)&&"tv"!==e.client.deviceType){const t=e.loc.string(Rk),n=new xH(u),r=new ez(t)
r.clickAction=n,r.presentationStyle=[FD,ND,BD],i.footnote=r}if(a.background={type:NU,color:G(QC)},s(n.shelfContents)){const r={pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker}
i.icons=Uu(e,n.shelfContents,r,{useCase:2})}else i.icons=[]
return t.shouldIncludeShelfUrl&&(a.url=Yn(t)),a}numberOfIconsForArcadeAppGrid(e){return e===Bj?9:20}}class k0 extends b0{constructor(){super("GroupingBrickShelfController"),this.supportedFeaturedContentIds=new Set([421,422,423,261])}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:se(t,oG)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await b0.secondaryGroupingShelfDataForShelfUrl(e,t,n,r).then(e=>({shelfContents:rr(e.shelfContents,se(n.featuredContentData,oG))}))}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,o){let i=z(t,"suppressText")
r(i)&&(i=!0)
const s={...n,showSupplementaryText:!i}
return s.clientIdentifierOverride=Kt(e,t),s}_createShelf(e,t,r,s){const a=[],c=[],u=d(t.featuredContentData.attributes,iG)===EB
let p
if(u){p=new $z(VD)
const n=f(t.featuredContentData.attributes,"layoutStyle.layoutSize")
p.rowsPerColumn=null!=n?n:function(e){return e.client.isPhone?2:1}(e),cf(t.metricsLocationTracker).name=iA}else p=new $z(GF)
p.isHorizontal=!0
for(const n of r.shelfContents){const r=k0.createBrick(e,n,u,t.metricsPageInformation,t.metricsLocationTracker,t,s)
r?(a.push(r),uf(t.metricsLocationTracker)):c.push(n)}if(i(t.presentationHints)&&(p.presentationHints=t.presentationHints),i(t.showSupplementaryText)&&(p.presentationHints={...p.presentationHints,showSupplementaryText:t.showSupplementaryText}),delete t.maxItemCount,i(n(t.featuredContentData,"relationships.children.data"))&&(t.featuredContentData.relationships[oG].data=c),p.title=t.title,p.subtitle=t.subtitle,u){const e=f(t.featuredContentData.attributes,$k)
p.items=a.slice(0,null!=e?e:a.length)}else p.items=a
const h=l(t.featuredContentData.attributes,sA)
if(u&&h){const n=new $z(VD)
n.items=this.sortCategories(e,a),n.presentationHints={isSeeAllContext:!0}
const r=new Gz([n])
r.title=t.title
const o=new Bq(Jj)
o.title=e.loc.string(UU),o.pageData=r,p.seeAllAction=o,Ff(e,o,null,{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker})}const w=p&&o(p.items)&&t.isFirstRender
if(w&&ia(e,p,t,t.featuredContentId),!w&&k0.shouldDisplayChooseYourFavoritesBrick(e,t,u,s)){const n=k0.createChooseYourFavoritesBrick(e,t.metricsPageInformation,t.metricsLocationTracker)
p.items.splice(0,0,n)}return t.presentationHints=p.presentationHints,p.url=Jn(p,t),p}static shouldDisplayChooseYourFavoritesBrick(e,t,n,r){return t.isArcadePage&&n&&e.featureFlags.isEnabled("arcade_choose_your_favorites_brick_Future")&&(0,Ig.isSome)(null==r?void 0:r.additionalShelfParameters)&&((null==r?void 0:r.additionalShelfParameters.isSubscribed)===zG||(null==r?void 0:r.additionalShelfParameters.isTrialEnrolled)===zG)}static createBrick(e,t,n,r,o,s,a){const c={targetType:n?RB:GF,pageInformation:r,locationTracker:o,recoMetricsData:$(t)},l=nr(e,t,s,!1,null,c,a)
if(!l)return null
const u=new wz,d={useCase:18}
if(n){const t=Gu(e,l.content,mm.categoryBreakout,Hg.Density1)
u.artworks=t}else if(l.artwork&&261!==(null==s?void 0:s.featuredContentId)){let t=p(l.artwork,Tk)
t||(t=p(l.artwork,"originalFlowcaseBrick"))
const n=er(e,t,d)
u.artworks=[n]}else{const n=tr(e,t,1060,520,d)
u.artworks=[n]}u.accessibilityLabel=l.title,u.shortEditorialDescription=l.title,u.clickAction=l.action,435===J(t,SB)&&(u.personalizationStyle=bx)
const f=ie(e,t,qj)
if(i(f)){const n=Lf(e,f,c)
u.flowPreviewActionsConfiguration=ws(e,t,!0,null==s?void 0:s.clientIdentifierOverride,u.clickAction,c,n)}return gf(e,u,Tf(e,t,l.title,c)),u.artworkSafeArea=XV.defaultTileArtworkSafeArea,u.textSafeArea=XV.defaultTileTextSafeArea,u.isValid()?u:null}static createChooseYourFavoritesBrick(e,t,n){const r=new wz,o=new CV("",1060,520,[],F("efac78"))
r.artworks=[o]
const i=e.loc.string("ARCADE_CHOOSE_YOUR_FAVORITES_BRICK_TITLE")
r.accessibilityLabel=i,r.shortEditorialDescription=i
const s=new Bq(_$)
var a
return s.presentationContext=ZB,s.pageData=Mj,r.clickAction=s,gf(e,r,(a={targetType:GF,pageInformation:t,locationTracker:n,recoMetricsData:null},Pg.context("impressionOptionsForArcadeChooseYourFavoritesBrick",()=>({...a,id:"",kind:null,softwareType:null,title:"choose_your_games_brick"})))),r.artworkSafeArea=XV.defaultTileArtworkSafeArea,r.textSafeArea=XV.defaultTileTextSafeArea,r}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){const r={...n}
return d(t.featuredContentData.attributes,iG)===EB&&(r.title=iA),r}sortCategories(e,t){return t.sort((t,n)=>{try{return t.shortEditorialDescription.localeCompare(n.shortEditorialDescription,e.loc.safeIdentifier,{usage:XU})}catch(e){return 0}})}}class O0 extends b0{constructor(){super("GroupingRibbonBarShelfController"),this.supportedFeaturedContentIds=new Set([556])}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:se(t,qj)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await b0.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}_createShelf(e,t,n,o){var i
const s=[],a=new $z(_k)
a.isHorizontal=!0
const c=lt(e,e.bag.arcadeCategoryBarSAGUpliftDisplayRate)
if(t.isArcadePage&&t.isFirstRender&&c){const n=O0.createSeeAllGamesRibbonItem(e,t.metricsPageInformation,t.metricsLocationTracker)
s.push(n),uf(t.metricsLocationTracker)}let l=null!==(i=n.shelfContents)&&void 0!==i?i:[];(0,Ig.isSome)(t.initialHydratedItems)&&t.initialHydratedItems.length>0&&(l=t.initialHydratedItems.concat(l))
const u=[]
let d=!1
for(const n of l){if(r(n.attributes)||qn(t)){t.isDeferring=!0,t.remainingItems.push(n),O0.shouldPriorizeItemWithData(e,n)&&(d=!0)
continue}const i=O0.createRibbonItem(e,n,t.metricsPageInformation,t.metricsLocationTracker,t,o);(0,Ig.isSome)(i)&&(O0.shouldPriorizeItemWithData(e,n)?s.unshift(i):s.push(i),u.push(n)),uf(t.metricsLocationTracker)}return a.items=s,d&&u.length>0&&(t.initialHydratedItems=u),a.url=Jn(a,t),a}static createRibbonItem(e,t,n,r,o,i){var s,a
const c={targetType:K$,pageInformation:n,locationTracker:r,recoMetricsData:$(t)},l=nr(e,t,o,!1,null,c,i),u=Lf(e,t,c)
u.targetType=c.targetType
const d=Cu(e,t,u,null==o?void 0:o.clientIdentifierOverride),f=null!==(s=null==l?void 0:l.action)&&void 0!==s?s:d,p=_d(e,t,Yj),h=null!==(a=null==l?void 0:l.title)&&void 0!==a?a:p,w=new hz(h,f),g=Hn(e,t)
let m
if((0,Ig.isSome)(g))m=Nu(e,g,{useCase:29})
else{let t
t=o.isArcadePage?"resource://arcade-ribbon-bar-fallback-icon":"resource://appstore-ribbon-bar-fallback-icon",m=ce(e,t,36,36)}return w.artwork=m,w.accessibilityLabel=h,gf(e,w,Tf(e,t,h,c)),w.isValid()?w:null}static createSeeAllGamesRibbonItem(e,t,n){const r=e.loc.string("Arcade.CategoryBar.AllGames.Title"),o=Uf(e,fN,t,n,r,kk,XG,K$)
let i
if(e.props.enabled("supressFlowPreviewForArcadeAllGamesRibbonItem"))i=new hz(r,o)
else{const e=new MH([o]),t=new MH([e])
i=new hz(r,t)}const s=ce(e,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACACAYAAADHy7H2AAABdWlDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokXWQvUvDUBTFT6tS0DqIDh0cMolD1NIKdnFoKxRFMFQFq1OafgltfCQpUnETVyn4H1jBWXCwiFRwcXAQRAcR3Zw6KbhoeN6XVNoi3sfl/Ticc7lcwBtQGSv2AijplpFMxKS11Lrke4OHnlOqZrKooiwK/v276/PR9d5PiFlNu3YQ2U9cl84ul3aeAlN//V3Vn8maGv3f1EGNGRbgkYmVbYsJ3iUeMWgp4qrgvMvHgtMunzuelWSc+JZY0gpqhrhJLKc79HwHl4plrbWD2N6f1VeXxRzqUcxhEyYYilBRgQQF4X/8044/ji1yV2BQLo8CLMpESRETssTz0KFhEjJxCEHqkLhz634PrfvJbW3vFZhtcM4v2tpCAzidoZPV29p4BBgaAG7qTDVUR+qh9uZywPsJMJgChu8os2HmwiF3e38M6Hvh/GMM8B0CdpXzryPO7RqFn4Er/QcXKWq8UwZBywAAAARjSUNQDA0AAW4D4+8AAAB4ZVhJZk1NACoAAAAIAAUBEgADAAAAAQABAAABGgAFAAAAAQAAAEoBGwAFAAAAAQAAAFIBKAADAAAAAQACAACHaQAEAAAAAQAAAFoAAAAAAAAASAAAAAEAAABIAAAAAQACoAIABAAAAAEAAACCoAMABAAAAAEAAACAAAAAACBAcQEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAIGaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4yMTk2PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjIxNjA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KIUPY5gAAGmtJREFUeAHtXXuMJMV5r+qZ2Qe7h299bA7O3B0GGwOXBwEsbMXCC1H+QJjHgpbHEcyBEiLl4cgJxLKElIkUS4DtQCCSpZOSEAx3hjW+YwmclAfa4MQScfBL2Tg5ED5uyfFYw0Lu9nZvHl35/b7qmu3Z65numZ3dndnpupvt7np+31e/+qq6uuorpVKXSiCVQCqBVAKpBFIJpBJIJZBKIJVAKoF6EtD1ApcbZpRa0fxJHwpAMe3hVprfleS1ZRVlRkayqr8/ozbPa7Wh36gTW3118KBRw8NG7djR2sqamrJ0D73mqdmztRqY8QQKc8M+yirpfN5fSWgYA/zdOJarKnfoNQNabLkrwe/MjFbnnqvV9LRXkfGm+bLOT5ZaweuygWCuvLKXhOgDB060gqDl5mHyylNTY6SpoMfHy8vNL5ze5PPIe2pF8g6X08i9GRvrUacf0/qR5cm/aSCIUA5N9uhHJxcc4ebma7aoTHabMmYLNPZpaDcbAJE+hGfg13RZLn939Y0xnucVlPGPI/9ZlPUO7t9Qpb7XUfnHXDyza6QvTJ/zb+YqgD9woAAmRLuhAvpVdmG70t6ZyujTkecQaBnwld/jad0yXgNayyjjBCB+FGX8HH5vqkJxWo8/e9jxIoCYmfH1ZHMaoimCTR7dgJr0dV755o6xYVUo3YiKvgJEfgJyolAAANWjPKuxhdimSnJsLrm6jgY6GuVSHc/jbhbiP4xq+gGENqH37vtHpjK7dgEMj1bAuiSnRI8EgdN45pbRzyDX6wDyS5D4LFw/jDIHlNYefja/leCVOVt+i7gj2N/B7xXw+qLKZZ/Uj40LKAgINIYCwhpyDZNs7rorp3fvJjHK3Dx6p9LmbuXp86XSSajvs5oYTrXMSqIvZcRLSxwydCIH0lABymThw58UpMrl4xDQ8ypT/rJ+fOLV5WgGJ1gzduWwyvU+AAauA68bAQBwB5aMKYOeEoq2/LaQz4qwOCYBZ/ixZWVQak5D7Qjrvoj4Z/B/WD+x/yFcVRi4fE7imHlixwGhUz1m57V/CUK+IML3/XmQeYI1LjVkQDDIRNVL/ga1whsE0xvRws8n+yMWo8KFuxP6uWcXbiPhr0iDCRApi7JOUdlMRpXK00iyC9rhhWbA4Pg1t157AYh/Gt3eeQAZKxxdklQ8LsIjKygkS0un47eaboYt5WWRLysbKyOXOa+ShhLlP2SIH3lmmTkIfQCNERSZx1Qx+9vUCA7ACE/kyEAiZzgI4xsAnNl53UMqm/0CxF6EBkAfrUogrQe13YP7HpCHrgPjAotgkEgcoOO0fad9to8MQqDghF2rPCM9gYSfe+YVz4xHvyDfIF4GVwhDyu1FIHk6BhB8gJa7FTL/trn1+k9xrMBuAmGJHMdABL0Zu3obyj2gvAxB8AESUy2TPvLJH8smDSw3+JFGchPQKtfwPdPjORwuz6xOGw+PEkF4DvyQP8uB5pMye3GlvAENM6vK/hy6iM/72eJfw08JGKQL51O8o1ATOSCsH5nPm1tHb0eCR1E4+6HjATEWo4lyWoVI5Mq2nKKocd9Mqb7yp/XfTBwNd21JKDE7R19QWe9yAOs9xOcbAytbGkSS9Csex/JKFcOBbAYNdFCVS3ejm/g6/LTK53WS12kyFesCNTNvdl6FkbH5kiTQAQgokvYRi5DG/gEioIiyxi/PoZ3tUAven0hg4SA1VV1n7ro4xwgCeguC9/FIbWLFzsB2cVb27FuoHU5Aa6HT0F80O2/4OPyMOnIkll+ykggIiGcz0z03Ievz8eMoPFEBLGS1HWsrACdVbRndFwcPNxLI0kXw3bue2/2ynaQx5nehCRiTKjnIsl7CNQ0jJPqkm8hlPoLX6RtIDQf28qofQ1osEKANMuwSmA9e1H5d3g6UKUCwmBuIyX2tgwUR0oqL6HC3o9FcJiQtLHAME+lkgAhWzW2jv4gIv4IfB4bCq80uMlm7eLI+MYhExWhzBTW5JWwytp5jIyAjafnm86ObIMxz2bTg7LDfltK+fy1Q2UkUMd5C/24uFmLPss08kvDhYSuTkvokQM8xgaiEyLjt6ekFWuw8lfPPFBKPHI3FcDwQBgZsnEIZo2ezOQBCe4ogmiq+dPky8DbqYxJl06Xx6tIzO6Kza2NfO4eBhmvYdaOu/K1CrfsGUof0eCDMzVk0efoM5DOIH/vPWITVKXO1g0gr1CWclqlgJaPoyRrqkh+P6Hy9XUDfSZxaylGnmm9LPZiXxlQ/3FPjnPqqy0k8EAYGbPZKnYYsOXKmqqybKcLbz0mXZjaaO6/h9LfCnEg071uutl2BNsMSL5gUk/vO+MO6KXNGIqPVJpKMLt2+TNehP1oY4QRvv22BoD0KkGqns0RTBVnTr+Yx60h37FhVCL3YakLv3IP4tkXvTnPkCxqQF3Nqhfg/y5/EbyUMN/FAGBwMpGH6pJ/l9GhnQYH8BjzoHIa5diRtRwthWSiVt5qOb0pIgVlKbbuU6ljt/WSrO6gh+fKbiN54ICxmY+cN7IBk0bez7sCvtnxE0p23vjuwCESmjIl59x0gMkGbe9bjtZr0RoBQnbJLnoCIjuwfpHoaWAOSAiEW0J2sEWKZq0RIgVARRfRN56qDaH5q+aZAqCEZ+25Ud6BdI2VneqdAqFtv3aIPkrw+1hVUGrheJJBqhPVSk8vkIwXCMgW4XpKnQFgvNblMPlIgLFOA6yV5CoT1UpPL5CMFwjIFuF6Sp0BYLzW5TD5SICxTgOsleQqE9VKTy+Sju4DQPZ8OGoZFdwGhgU8Hss4P4uwW7HQXEBpuJ0zQwQtTGuA3BUIDwlrPUZMDwV8XLQOWG7z4DmKSVe747eAVSl7yxbfxQKgs+4YtBDqsjxVJxotTorfJH9fVl1WxYDe4vhpBWT5vuZqcxN4QE2zkcYCIiN++XpZf2q9I6OKB4JZ9e3oOwuFSf2ydIBwSlrDW0cKAhdE/1Z+z9pQqy/SrCUR0jBMF7tz42ylcLjJh+Q3Wmpu5xYD6d/FAOLrZCsMo2ggoQEpMExZv/RLaKVTDKtnMAi2ewAba0Ek8CADGxgKZwFobIdF5jnx5sl1PLM5JZdFgxkn8hlmLB4Lb+6j020jIVsJ9AXUzDRfQJvdYlS6V+q6zjqZmZ2ttXrH7HgxM2DFNJ+3jIIta9nlmxWCGljrDxp08OalbZ/FAGJgJMtBv4IatJD5Nm9R+QAbpB8286NfpJxZRxsejgRCMiXxP2VFEwD3TdYTjzm+Y+AHZ7wMM/ys019rwG2IovlJ7zrWbQgc3TQNVh4OWFYOvUAlrfSstBDt+YKUT28T/S8iZPZuW16KrOBg7QDA/oqUVOETtEGdHbtgA62UxxH0dw/ppofzcVthH2L27tGiASv8gkF8WBUS3qDaTmd3Harjf8V2A+HtC3uIO75OphS1n8SzkXkI/+xbQwrTRoDk59Zr5hAiELRvAWOvv673P0kor9HhgI7oOdbEaQVrO7CwrHq68Hy3r/3DD7fEwPkG/tnacBOD4gHz+u96z/0cQmFZnnVXTMil3Q7PrgLmg95DuOZ3xepCmRF5Dwm47pjkIgCOd/apYQgdRfpYeYgoogU3qWCAwM1g8PyF2B/dMvIiCngPiOKBKsOteUq/lH2qtHrRsvE+bB4WQsbG+0Nb3aNoqLShzP/rZBcgYecB0RnTs9vC13cIJmNfjtv/n1HkX/b0QNpKMvERAEMG99JKYnINhx7vxO4TZBNpLoBptx4ZCmggCDxZYqdof0Xue+SdnJhDPdR20QVmMiO15+hXg/R4YsuxHAlgdsR1N3cSrHCjCtwiF9Vt9GrTBDOrmXtFstMuc0Ix/IiCQN752iRnbb00cwSBqDGJBgd6HQIgTOgXPe6GNaVbRuXJJQ0AHbDNnswOqWN6LLuGPA1rswDcBYQQDoyHtX6lS8avI61T0MZQX8hdArDG/jgZcjRgLg3FwQwOot+vH9/04eDNKPLPYsLZzBp/NTaPnm4x5XGcyF0F9oiJgRl7DAB/JWn0wOD5YUbCJCGMYtNquzdf1E8+IoU1p4Qn6SqSvODKFjMmPglX2P4KQv4IfbRlyjEGgIIwVsurT0MAk/uG0AvQIOdRBBlr6FYwM7szt3fevYj0/P1l2tJP+OOcEGBevKjxQsbS1qNXO0buN9u+EMM6B9WDbfTC2AJaCopDwv6WOZBtmbMdIwUjJ1gnen43C24F/v+aYhjGtrcjE2iBMKsvgM4UK49y/hLt7UfTleMR5FEHBlldGY3T88L+lzvKLLDnwreSM+X5W9mF471XHyvfpCZgYXi0z/Y6KxVdKsE3DjtnSZyGDSxF+Pn4fAXE018uBC8HBltpqh/GJwakx+igynsH1Z3j+iSrr7+on9/2UhQld4+NFCGtZNYPEWo2N8U1C3jbMbVd/VJUzn0URF+J3NkJ/AddTUQrMC0Ej2YEbvFrmSD/VPFU/p/rfRBn/A2h+X/WbSdqYZknNgoBpF+HFpwadPcXlEE5xOflgDDnxZMg7RRVP6VWZEx5U17LKqiItA42Yy5RUrjyvtl00t/QtgK9MPF+qMp1clbj5BwEWvlG48yrCOSGMpgf7wWuupbyykIH+sppTBTUwcDxS1jipRs0NF924JkxX0vuWVA6EkAGROcXvEkNDpShBJSWomXgCyHfxVvPWIDVPWbVAC9SjQwDBsQin35dZAfXKqRUmA0HMjkr4zEzRnaFRK34S/5YAYWlBUjGc3+apZLOzK1KGfD3cglPkpnCGBL4boJBlqf+lPCR9DroNT9EA15EV5pen5o2M+PySuFb8JpVLGi+VQCqBVAKpBFIJpBJYHxJYkYFcOlhcAXBwaV0wWFz6utyK0loChPT1sbVHD8dVbNu9Pq7phFJ/L05lObGgtk1gQkk+NFXkl04oVUSR+KZpjVA1xcyDwjf2XYYp5k+h5PPwSzLFzLL57i9Xvo/jxj3DuzIv4OLRT1wQKXKKuYAp5t6VnmLeecPZmLe6DMQ0MsXs+JAvVHwIXBXPITm4cF4Zp/2mmDmzxnl30QgHf3gPiNyFejwHVdnAR6eKXAI+cRHn/Gs9O3/5umM/wbgPMfbjz/uQ2ve0b+7T33rmu4zNrqvZ6VdWDPPAH2NuueaX8SX6Xjxejt+m6I9OFQAzWcg5vsJXBrOOnV8oetWthPNP1UcnUMT1INOQxB5V6LkPPB5zdVOVPMEDM2/IVT5D3zZ6Po6gfVy182doo76m9+7/EhlsBgwEAQTEmsJn6Ou4puErWPTRiwoIfYaWcInDeKvkKp+hQWIOdYDP0OVXcLzEHfqJiX9b8c/Q7nxlc/M1l+CI3OchlGHj++GjUByw3HWV5FJphaEK4cKUTB9W7OwFGHaSkGbAIOluvfYBlcndo0ol7uvA52xZCsmyHJ/uyuir4Ryf0IE8cE9jraL+EACKownNGFZjPS8DSpxfCcJc3Lp0Jf48LJqA5yv/5vVnYGXSU/iwPIyVSh+gIAqB+fDHe/5W27lyQ3RAbZZKOC85cwuO9f2LgCCutUzkCBpGxGmwv6eyAgIu2uWaBpQhfVGb8Esc4FO/MVxsewq+gP8dzu6+UO9+uchP5+QhiSMzsU7GAoOD7I+w3sP/GhavfhRL1fgNnF/A1qLiSUk9R5rIm48zEKnGfx8rjH5DxjU447peQoY5zWFuuu4cCPirqljkfknml0hezGO1nAjftvl+0PpznctywcyfBzxgHIdP8glcMsampno52IIwP4M8P4fv7XaZFrHY3o78FaTFaPNFIXV8fEGAXY/uodesXDycg53JADhchqcS7Kevl+kKh9mteb3Qgsexcukq1Vu+SkqcTFZuLBAANlljINlpM4pxAU8Osy0kUe+TjJAVikWgYo8T1i8q9UmMbX4VHkYdOsSVzZGOIKFalQPRtQboRaNkk/W0kVmuimewWi6L67zOZqG4/WtYMNcquG6uHiGxQFB3XZyVg6a56kepi4OegN1EfNp6Ja9WGLUWV/na171PS7GVjb0RRLjT1U0Pl93x0FN2LaL52ln9OdpwxSY/n+rrEnPL1TyrEzu/Aw0nD9F/4iuzsMEOsLZs2oYstqIfsjm5kqPzbR9f2nPQ2H/Bv0rbY36HXsOCX1u5JxE6Pe1kciEGxQxuf73nmLDdA/Z5+iW812zHC8VWCTq4IZYHx7TL6uTr3HBQ5cUzEci181SzneRIP2gmDhTBrIIRdTTvFQMa5uOdxGSFVmu/4gS43YjxDWZ44bCqqSbwg4TRwggC5VLZMJrZjMy4KpkDxQAc4YhtfY/XbTYKc5osqiWpQ0O1eCd/5PCMQPt1Dq/ConTZJYAA7OJQd7oYIxmMUksYDLNugzsSWG2ERPBeqjsRCJYXowfVcB9XG2OH8MlrKaXVVOwmmKEACDZt5/wlcLG5hxfwAIc7Q2MZvK/l4oHwapDUNwPInHmybdneqFau7eQvUggI0qpXzRe5kzvybGh6C4PCn+Z8A9tYZzlb3cHOCj2QlPh4IFT6zOCDEiAgZdkCk5azpvFYuQEBGZXrsRMsH4sgybWakRFum2M8gN6yGxG7nb0sv+GPgDHUxgPBZeB1pEAc9e7KV6t4CI8wusO7fDV26Tvr6pvE9Zs4YmdJIKW2UQmkQIiV2LrQhLFcdhcQ4juFisAwOJDYbnBRCVinN90FhG6p1SbA2l1AaEJA3ZIkBUK31HQMnykQYgTULcEpELqlpmP4TIEQI6BuCU6B0C01HcNnCoQYAXVLcAqEbqnpGD5TIMQIqFuCUyB0S03H8JkCIUZA3RKcAqFGTWMtVld9mUiBUAMIzruBD5YuSUdeUyDEVlsHr1CK5W0xQgqERVlE3nXomkXLi04O4uRA8GU/A5eBdrK2xEYXY/ctRFZ73vrSrK8cm8f9csmFGZnlmnrW47WasHgguLOhPb1g1/lj6VbnDaQC8OJsJy3WTlRwqmO1NPJ2gChmdjSOD1bJF39WZ7SGT8H6ZcuJsccfJyAnHgib3ZHAPu0hYPNrh42nq8b+eh6G9GFVBK6yTF+e5A/QYipb5nl8sGwSWQzvkDtyjHrlRdO4h3V/mq+ShPN213ggLO4c5hmC3BnMTbF1M3WZt9VVKlW/7w65UDMz0Xs4jzxrN/362p6Z2Hnaj3XDA09xsTzI+suYDj0eCG7vo2/eRM7OSkonAYG0Cp8wlPAW7pW0epq7j3KzZ1uRaWNPve0kTi3l4AubkXy/gObKOlPqxjGP2i6KXednd/24p6jr3JwVWE/msCqZd6AuN9uxQlTktvTj8Naenq6DkQEO+dCPHMAYoI7TeqpOaHsG2YE8BsOG2/pgds+bFkKtfYQ6g+Qkm2Dt7melH9v3LiB1MOg3NTdAtr2zLYRvADQ2hfOE9MtC86GsVf9RDLguwy//ByzGua4wKmZb+qFafFiTI20/VUXvDSFySwvsI4jtpMAAFeT6z7TGAcT14L7c9i+SFqz8S+tih1SP+RcRTF8fLb5EOncsjt478RPw+GNEsqYA8NABjvv50A2SWPMCjYdZmmt0gyGG4scINrJVK8Xckyjkv6FyqHrqqppQGat+K/VvK46nt2YCyydP6Uf3vy+2IisCiiaN5oUlxJhv4OBP3pbr97DR+ayyLzlegMYegkGtN2A752mWL6aScd51HC2JgEBkmV27+nB9Txn/gSDTUyAcWiyzAIwraRXD5QWBHQJed7WXGQDN/6mKOUt3z9FYALvDyfTeZ/4WBjsnoWo3gkm+k7NHtBBbRX7qFmWp4V+2fpyoh27B6Af14xOvCq1btsTyy/wTAYERFU5YF9t9FI5RD0M4tEwGIWPixQTawYHCXSVh6I8l2nq4OLX8wuHuninj4kMM+EfjWbCb5G1EPz+L1vFbAPEx0QY0RJnAVeYTcrnbYatxGjaYPsw8UTwFbodlji53XZqvo9VdGe7uw2ncvQtbGs/lG4onlcxnmQEVK3dZlcsNQht8U+/dZw2M5kcySc92CBftiqt5lSPoYa6NEWDd8yGooT+UwaPv44BqAQRbDF9VZG42EBdjyzytna519+TBysVeOf6kOVk6N60b3oDqwl2YROQfJpeBS3DPkdIAgJqRCjR6FwTzgjMfjLDEzvGLE2AvAE3fhtlh2J8uc2x0HKW6lkaS2aBCsnQ8ktZqHuxz2H/pPcljGscvnwOeOafBf4s8s8wc6mBApF72vwnNR9Cz0YrhdKZO4kLEJ4kOCtB/OtVpbrn2DhBxN34XSD9MGPgyk8FWR0HZCmrxpAyKCQAjAyNUgsnChz/IDL9ymbOHBzCv8mWNE9/NH1zZG/u6WIN9J1AxVedl7kc1wNakNyTVTlZxLC/oKaFYxy8hwcpqnVvUPwRcBuXhPGiUyDPLOXg35hAKfVjv2fcgC3WG03mf1DUMBGZszbqO+FQ7ENSw6indCGKuADGfQCgNONEoZ08wSGMSCqd1zomZwBPVaOaROWwR493ZmB8CDBP6if3/wAJlbBNxUm0jxISBZG69/tcg/FGUdQnyOAtXWJqDBtKoFYKQbiV4Zb7CL76XwPAPfu/g9wqUx4so9ym95zuv45nmgxvSBExD1zTJ0ocemsRxwJOVDxuwbLpFZbLbQPAWkASbwGoDiuAbBs5LDqtIKbv5P2LGycNA1UfL17Mo6x0MCN9Qpb7XORZwGTfTHbi0S69ije3SA0WdFy1Hgfer7MJ2tMozURmnIz4MV0FFa8M3DrbcVjq8tcAMsIeZXaPeRcUfUYXitB5/9rArhADgtLl7/XX+Sa9NA8EV4MzVtfocZpd/o1c0Go0pVYKvAFC4frzRbCLjC/hhl3ol8o4sMIGnAOD0Y7rZrs8VsWwguIzcOUpq8zz0QD/eJbb6cirZML7t0+3Y4RS6S9L8dWrK0s2pU34bGJixLXBu2Ec5paQj5WYJELD9zl1ZVThoZyhZ7tBrBrTY9/VW8koiye8MjhzmEcu0DOtkvGm+rPN28N4sLy5dy4DgMgxfUfMrmj/LQgGtA1iY+CbuV5rfduK1CfGkSVIJpBJIJZBKIJVAKoFUAqkEUgmkEuhoCfw/vJfHMO4YqncAAAAASUVORK5CYII=",36,36)
var a
return i.artwork=s,i.accessibilityLabel=r,gf(e,i,(a={targetType:K$,pageInformation:t,locationTracker:n,recoMetricsData:null},Pg.context("impressionOptionsForArcadeSeeAllGamesRibbonItem",()=>({...a,id:kk,idType:XG,kind:null,softwareType:null,title:"All Games"})))),i}static shouldPriorizeItemWithData(e,t){var n,r
return null!==(r=null===(n=e.userDefaults)||void 0===n?void 0:n.bool(kA))&&void 0!==r&&r&&e.bag.ribbonBarVisionEditorialItemIds.includes(t.id)&&e.bag.enableDeviceDrivenDiscoveryContent}}class E0 extends b0{constructor(){super("GroupingCategoryShelfController"),this.supportedFeaturedContentIds=new Set([425])}initialShelfDataFromGroupingMediaApiData(e,t){const n=ie(e,t,oG)
return n?{shelfContents:se(n,oG)}:{shelfContents:[]}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await b0.secondaryGroupingShelfDataForShelfUrl(e,t,n,r).then(t=>{const r=ie(e,n.featuredContentData,oG)
return r?{shelfContents:rr(t.shelfContents,se(r,oG))}:{shelfContents:[]}})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}_createShelf(e,t,n,i){var a
if(o(n.shelfContents))return null
const c=[]
let u=!1
for(const o of n.shelfContents){const n=ie(e,o,J$)
if(r(n))continue
const a=sr(0,n)
if(r(o.attributes)||r(n.attributes)||qn(t)){t.isDeferring=!0,t.remainingItems.push(n)
continue}const d={targetType:aA,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:$(o)},f=Cu(e,n,{...d,id:a},t.clientIdentifierOverride)
gf(e,f,{...d,kind:pj,softwareType:l(null==i?void 0:i.isArcadePage)?oj:null,title:f.title,id:a})
const p=H(n,Nj)
p.width>p.height&&(u=!0),s(p)&&(f.artwork=Nu(e,p,{allowingTransparency:!0,useCase:20})),c.push(f),uf(t.metricsLocationTracker)}const d=this.shelfForCategoryActions(e,c,t)
if(d.title=t.title,d.subtitle=t.subtitle,d.url=Jn(d,t),u){const e=null!==(a=d.presentationHints)&&void 0!==a?a:{}
d.presentationHints={...e,itemsHaveRectangularArtwork:!0}}return d}shelfForCategoryActions(e,t,n){const r=new $z(_G)
let o
switch(e.client.deviceType){case"tv":r.isHorizontal=!0,o=8
break
case jj:r.isHorizontal=!1,o=null
break
default:r.isHorizontal=!1,o=6}if(null!==o&&t.length>o){r.items=t.slice(0,o)
const i=new Bq(Jj)
i.title=e.loc.string(UU),Ff(e,i,null,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker}),r.seeAllAction=i
const s=new $z(_G)
s.isHorizontal=!1,this.sortCategories(e,t),s.items=t
const a=new Gz([s])
a.title=e.loc.string("PAGE_TITLE_CATEGORIES"),i.pageData=a}else r.items=t
return r}sortCategories(e,t){t.sort((t,n)=>{try{return t.title.localeCompare(n.title,e.loc.safeIdentifier,{usage:XU})}catch(e){return 0}})}}class R0 extends b0{constructor(){super("GroupingEditorialCardShelfController"),this.supportedFeaturedContentIds=new Set([415,416,501,417,258])}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:se(t,oG)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await b0.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}_createShelf(e,t,n,r){const i=new $z("editorialCard")
i.isHorizontal=!0
const s=this.personalizationDataContainerForEditorialCardItemsDataArray(e,n.shelfContents),a=[]
for(const i of n.shelfContents){const n=R0.makeEditorialCard(e,i,s,r,t)
!o(n)&&n.isValid()&&(a.push(n),uf(t.metricsLocationTracker))}return delete t.maxItemCount,i.items=a,i.url=Jn(i,t),i}static makeEditorialCard(e,t,n,o,s){var a,c,l
const u={targetType:pN,pageInformation:null==s?void 0:s.metricsPageInformation,locationTracker:null==s?void 0:s.metricsLocationTracker,recoMetricsData:$(t),id:t.id,idType:KM},f=J(t,SB),h=nr(e,t,s,501===f,n,u,o,()=>{null==s||s.remainingItems.push(t)})
if(!h)return null;(null===(c=null===(a=h.content)||void 0===a?void 0:a.id)||void 0===c?void 0:c.length)>0&&(u.id=h.content.id,u.idType=aj,u.adamId=h.content.id)
const w=new fz
let g=q(t,"designBadge")
g||(g=h.caption),w.caption=g
let m=q(t,JG)
m||(m=h.title),w.title=m
let v=ar(q(t,Fk))
v||(v=h.subtitle),w.subtitle=v
const y={useCase:19,withJoeColorPlaceholder:!0}
if(h.artwork&&258!==(null==s?void 0:s.featuredContentId)){let t=p(h.artwork,Tk)
r(t)&&i(h.appEvent)&&(t=p(h.artwork,"eventCard")),w.artwork=er(e,t,y)}else w.artwork=tr(e,t,416,204,y)
if(w.clickAction=h.action,i(h.appEvent)&&(w.appEventFormattedDates=h.appEvent.formattedDates),w.lockup=h.lockup,i(w.artwork)&&i(w.artwork.backgroundColor)){const e=U(w.artwork.backgroundColor)
if(w.mediaOverlayStyle=e?kj:NG,i(w.lockup)&&i(w.lockup.offerDisplayProperties)){const t=e?kj:NG
w.lockup.offerDisplayProperties=w.lockup.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,aB,t)}}w.adamId=d(h.content,"id")
const A=ie(e,t,qj)
if(i(A)){const n=Lf(e,A,u)
n.targetType=u.targetType,w.flowPreviewActionsConfiguration=ws(e,t,!1,null==s?void 0:s.clientIdentifierOverride,w.clickAction,u,n)}const T=Tf(e,null!==(l=h.content)&&void 0!==l?l:t,h.title,u)
if(i(h.onDevicePersonalizationDataProcessingType)){const e=ef(T.recoMetricsData,h.onDevicePersonalizationDataProcessingType,null)
T.recoMetricsData=e}return i(h.appEvent)&&(T.inAppEventId=h.appEvent.appEventId,i(h.appEvent.lockup)&&(T.relatedSubjectIds=[h.appEvent.lockup.adamId])),i(s)&&gf(e,w,T),w}personalizationDataContainerForEditorialCardItemsDataArray(e,t){var n,r
if(!vr(e))return null
const o=new Set
for(const e of t){const t=501===J(e,SB),i=(null===(n=d(e,Sj))||void 0===n?void 0:n.length)>0,s=(null===(r=q(e,cA))||void 0===r?void 0:r.length)>0,a=ne(e,qj,!1)
if(t&&!i&&!s&&a){const t=se(e,qj)
for(const e of t){const t=d(e,VF);(null==t?void 0:t.length)>0&&o.add(t)}}}return yr(e,o)}}class D0 extends b0{constructor(){super("GroupingEditorialStoryCardShelfController"),this.supportedFeaturedContentIds=new Set([475])}shelfRoute(e){return ya(this.supportedFeaturedContentIds,["shelfContentType=editorialStoryCard"])}_supports(e,t,n,r){return!!super._supports(e,t,n,r)&&ir(0,q(t,iG))===Nk}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:se(t,oG)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await b0.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o={...n},i=q(t,iG)
return o.shelfStyle=ir(0,i),o}_createShelf(e,t,n,r){const i=[]
for(const r of n.shelfContents){if(!K(r)||qn(t)){t.remainingItems.push(r),t.isDeferring=!0
continue}const n=D0.makeStoryCard(e,r,t)
o(n)||(i.push(n),uf(t.metricsLocationTracker))}const s=new $z(t.shelfStyle)
return s.title=t.title,s.items=i,s.isHorizontal=!0,s.background={type:$D},s.url=Jn(s,t),s.isHorizontal=!0,s}static makeStoryCard(e,t,n){let s=H(t,"editorialArtwork.subscriptionHero")
o(s)&&(s=H(t,Ix))
const a=Nu(e,s,{cropCode:"fn",withJoeColorPlaceholder:!0,useCase:16})
if(r(a))return null
const c=q(t,nU),l=q(t,GG),u=q(t,bk),d=new Fz(c,a,null,l,{type:kG,title:l},u),f=So(e,t,null,new kJ(null==n?void 0:n.metricsPageInformation,null==n?void 0:n.metricsLocationTracker))
i(f)&&(d.clickAction=f.clickAction)
const p=U(a.backgroundColor)?kj:NG
return d.shelfBackground={type:Nj,artwork:a,style:p},d}}class _0 extends b0{constructor(){super("GroupingGameCenterActivityFeedController"),this.batchGroupKey=bU,this.supportedFeaturedContentIds=new Set([548])}shelfRoute(e){return[...super.shelfRoute(e),{protocol:CW,path:`/${xW}/${RW}/{token}`,query:[Aq.isGameCenterActivityFeedShelf]}]}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:[],activities:[]}}async secondaryShelfDataForShelfUrl(e,t,n,r){const o=this.gameCategoryFilter(n.gamesFilter)
return await e.gameCenter.fetchActivityFeedCards(o,20).then(e=>({shelfContents:[],activities:e}))}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}incompleteShelfFetchStrategy(e){return $g.OnPageLoad}_createShelf(e,t,n,r){return t.isFirstRender?this.pendingActivityFeedShelfForGrouping(e,t,null==r?void 0:r.isArcadePage):this.activityFeedShelfForGrouping(e,n,t,null==r?void 0:r.isArcadePage)}pendingActivityFeedShelfForGrouping(e,t,n){if(e.client.deviceType!==Bj&&e.client.deviceType!==Lj)return null
const r=this.activityFeedShelfForGrouping(e,{shelfContents:[],activities:[]},t,n),o=xq.from(Yn(t))
return r.url=o.param(Aq.isGameCenterActivityFeedShelf,zG).build(),r.isHidden=0===r.items.length,r.batchGroup=this.batchGroupKey,r}activityFeedShelfForGrouping(e,t,n,r){if(e.client.deviceType!==Bj&&e.client.deviceType!==Lj)return null
const o=this.activityFeedShelf(e,t.activities,n,r),i=e.loc.string("Arcade.ActivityFeed.RecentActivity")
return o.header=Vf(e,i),lr(e,o,o.seeAllAction),o.batchGroup=this.batchGroupKey,o.isHidden=0===o.items.length,o}activityFeedShelf(e,t,n,r=!1){const o=new $z("gameCenterActivityFeedCard")
o.isHorizontal=!0,o.mergeWhenFetched=!0,o.batchGroup=this.batchGroupKey,o.items=t,o.isHidden=0===o.items.length,t.forEach((t,o)=>{const i={id:"friendActivity",idType:lj,targetType:"chiclet",kind:null,softwareType:r?oj:null,title:"",pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker}
gf(e,t,i)
const s=new kH,a=new kH,c=new kH,l=new kH,u=new kH;[{targetId:"playerName",metrics:s},{targetId:"profileImage",metrics:a},{targetId:"leaderboardAchievement",metrics:c},{targetId:Cx,metrics:l},{targetId:t.adamID||"gameIcon",metrics:u}].forEach(t=>function(e,t,n,r,o){const i={actionType:Fj,id:r,idType:lj,location:nf(0,o,n)},s=kf(e,r,pj,i)
t.addMetricsData(s)}(e,t.metrics,n.title,t.targetId,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker})),t.profileActionMetrics=s,t.profileAvatarActionMetrics=a,t.leaderboardActionMetrics=c,t.achievementActionMetrics=l,t.appActionMetrics=u,uf(n.metricsLocationTracker)})
const i=new ZH
return i.title=e.loc.string("Arcade.ActivityFeed.AllActivity",e.loc.string(UU)),Ff(e,i,null,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker}),o.seeAllAction=i,o}gameCategoryFilter(e){return e===HD?Bk:e}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){return{...n,title:"Friend Activity",badges:{gameCenter:!0},idType:Yy}}}class L0 extends b0{constructor(){super("GroupingGameCenterPopularWithYourFriendsController"),this.batchGroupKey=bU,this.supportedFeaturedContentIds=new Set([495])}shelfRoute(e){return[...super.shelfRoute(e),{protocol:CW,path:`/${xW}/${RW}/{token}`,query:[Aq.isGameCenterPopularWithYourFriendsShelf]}]}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:[]}}async secondaryShelfDataForShelfUrl(e,t,n,r){const o=e.gameCenter.fetchGamesPopularWithFriends(this.gameCategoryFilter(n.gamesFilter),30)
return await o.then(async t=>{const n=t.map(e=>this.gameplayHistoryFromData(e)).sort((e,t)=>t.records.length-e.records.length).filter(t=>this.isCompatibleGameCenterPlatform(e,t.platformId)).map(e=>e.adamId)
if(0===n.length){const e={shelfContents:[]}
return await Promise.resolve(e)}const r=new zz(e).withIdsOfType(n.slice(0,100),zj)
return Qn(e,r),await Tn(e,r,{}).then(e=>({shelfContents:e.data,responseTimingValues:e[um.timingValues]}))})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}incompleteShelfFetchStrategy(e){return $g.OnPageLoad}_createShelf(e,t,n,r){return t.isFirstRender?this.pendingPopularWithFriendsShelfForGrouping(e,n,t):this.popularWithFriendsShelfForGrouping(e,n,t)}pendingPopularWithFriendsShelfForGrouping(e,t,n){const r=this.popularWithFriendsShelfForGrouping(e,t,n),o=xq.from(Yn(n))
return r.url=o.param(Aq.isGameCenterPopularWithYourFriendsShelf,zG).build(),r}popularWithFriendsShelfForGrouping(e,t,n){const r=this.popularWithFriendsShelf(e,t.shelfContents,n)
return r.mergeWhenFetched=!0,r.batchGroup=this.batchGroupKey,r.isHidden=0===r.items.length,r.header.title=n.title,r.header.subtitle=n.subtitle,r}popularWithFriendsShelf(e,t,n){const r=n.shelfStyle||cG,o=new $z(r)
o.isHorizontal=!0
const s=[]
for(let o=0;o<t.length;o++){const a=t[o],c={metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:$(a),anonymizationOptions:{anonymizationString:`"GAME"${o+1}`}},artworkUseCase:Fu(0,r),canDisplayArcadeOfferButton:Nd(0,r),shouldHideArcadeHeader:e.featureFlags.isEnabled(k$)&&n.isArcadePage,shouldShowFriendsPlayingShowcase:!0},l=Oe(e,a,j$)
if(Y(a,rj)||!l)continue
const u=wu(e,a,c)
u.clickAction=Aa(e,u.clickAction),i(u)&&(s.push(u),uf(c.metricsOptions.locationTracker))}let a
switch(e.client.deviceType){case Bj:a=2
break
case Lj:case jj:case"tv":a=6
break
default:a=0}if(o.header=Vf(e),s.length<a)return o.isHidden=!0,o
if(o.items=s.slice(0,12),o.isHidden=!1,o.batchGroup=bU,s.length>12){const t=new $z(cG)
t.items=s,t.rowsPerColumn=1
const r=new Gz([t])
r.title=n.title
const i=new Bq(Jj)
i.title=e.loc.string(UU),i.pageData=r,Ff(e,i,null,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker}),lr(e,o,i)}return o}isCompatibleGameCenterPlatform(e,t){return 1===t}gameplayHistoryFromData(e){const t=d(e,jU),n=f(e,"platformId"),r=l(e,Uk),o=this.gameplayHistoryRecordFromData(c(e,"records"))
return new zV(t,n,r,o)}gameplayHistoryRecordFromData(e){return e.map(e=>{const t=d(e,"playerId"),n=f(e,"timestamp")
return new YV(t,n)})}gameCategoryFilter(e){return e===HD?Bk:e}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){return{...n,badges:{gameCenter:!0},idType:cU}}}class x0 extends b0{constructor(){super("GroupingGameCenterContinuePlayingShelfController"),this.batchGroupKey="gameCenterContinuePlaying",this.supportedFeaturedContentIds=new Set([500])}_supports(e,t,n,r){return super._supports(e,t,n,r)&&this.supportsVideoCardShelf(e,e.host.platform)}shelfRoute(e){return[...super.shelfRoute(e),{protocol:CW,path:`/${xW}/${RW}/{token}`,query:[Aq.isGameCenterContinuePlayingShelf]}]}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:se(t,qj)}}async secondaryShelfDataForShelfUrl(e,t,n,r){const o=Date.now(),i=this.maximumNumberOfRecentGamesToRequest(),s=e.gameCenter.fetchRecentlyPlayedGamesWithinSeconds(this.gameCategoryFilter(n.gamesFilter),i,e.bag.recentlyPlayedGamesWindowInSeconds)
return await s.then(async t=>{const n=Date.now()
let r
if(e.console.log("grouping-gamecenter-builder: requestForContinuePlaying NATIVE took "+(n-o).toString(10)+" milliseconds."),0===t.length){const e={shelfContents:[]}
return await Promise.resolve(e)}{const n=new zz(e).withIdsOfType(t.slice(0,this.maximumNumberOfRecentGamesToShow()),zj)
Qn(e,n),r=Tn(e,n,{}).then(e=>({shelfContents:e.data,responseTimingValues:e[um.timingValues]}))}return await r})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}incompleteShelfFetchStrategy(e){return $g.OnPageLoad}_createShelf(e,t,n,r){return t.isFirstRender?this.pendingContinuePlayingForGrouping(e,t):this.continuePlayingShelfForGrouping(e,n.shelfContents,t)}pendingContinuePlayingForGrouping(e,t){const n=this.continuePlayingShelfForGrouping(e,[],t)
if(!n)return null
const r=xq.from(Yn(t))
return n.url=r.param(Aq.isGameCenterContinuePlayingShelf,zG).build(),n.batchGroup=this.batchGroupKey,n}continuePlayingShelfForGrouping(e,t,n){return Pg.context("continuePlayingShelfForGrouping",()=>{const r=this.videoCardContinuePlayingShelf(e,t,n)
return r.mergeWhenFetched=!1,r.batchGroup=this.batchGroupKey,r.isHidden=0===r.items.length,r.header=Vf(e,e.loc.string(lA),n.subtitle),r})}supportsVideoCardShelf(e,t){switch(t){case OU:case LN:case vU:return!0
default:return!1}}videoCardContinuePlayingShelf(e,t,n){return Pg.context("videoCardContinuePlayingShelf",()=>{const r=new $z(uA)
r.isHorizontal=!0,r.batchGroup=this.batchGroupKey
const o=[]
for(const r of t){if(tt(e,r))continue
const t=this.editorialSplashVideoCardForContinuePlaying(e,r,n)
t&&(o.push(t),uf(n.metricsLocationTracker))}return r.items=o,r})}editorialSplashVideoCardForContinuePlaying(e,t,n){return Pg.context("editorialSplashVideoCardForContinuePlaying",()=>{const r=af(n.metricsLocationTracker),o={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,targetType:ij,anonymizationOptions:{anonymizationString:`GAME${r}`}},i=e.featureFlags.isEnabled(k$)&&l(n.isArcadePage),s=Rd(e,t),a={metricsOptions:o,artworkUseCase:1,offerEnvironment:kj,offerStyle:cj,canDisplayArcadeOfferButton:!0,shouldHideArcadeHeader:i,isSubtitleHidden:s&&!i},c=this.editorialSplashVideoWithTopShelfStill(e,t)
if(!c||!c.preview)return null
const u=wu(e,t,a)
if(!u)return null
u.clickAction=Aa(e,u.clickAction)
const d=this.clickActionForVideoCard(e,t,e.host.platform,o,n.clientIdentifierOverride)
if(!d)return null
const f=new pz
f.video=c,f.lockup=u,f.overlayStyle=kj,f.clickAction=d
const p=Lf(e,t,o)
f.flowPreviewActionsConfiguration=ws(e,t,!0,n.clientIdentifierOverride,f.clickAction,o,p)
const h=Tf(e,t,u.title,o)
return gf(e,f,h),f})}editorialSplashVideoWithTopShelfStill(e,t){return Pg.context("editorialSplashVideoWithTopShelfStill",()=>{let n=null
const r=be(e,t,uk)
return i(r)&&(n=Nu(e,r,{withJoeColorPlaceholder:!0,useCase:23,cropCode:"sr"})),vd(e,t,n)})}clickActionForVideoCard(e,t,n,r,o){let i=Cu(e,t,Lf(e,t,r),o)
if(i=Aa(e,i),n===LN){const n=new jH(t.id,Oj)
$f(e,n,{actionType:QN,id:t.id,contextualAdamId:t.id,anonymizationOptions:r.anonymizationOptions,pageInformation:r.pageInformation,locationTracker:r.locationTracker})
const o=new GH(t.id,i)
return o.openAction=n,o.cancelAction=i,o}return i}maximumNumberOfRecentGamesToRequest(){return 200}maximumNumberOfRecentGamesToShow(){return 10}gameCategoryFilter(e){return e===HD?Bk:e}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){return{...n,badges:{gameCenter:!0},idType:cU,title:e.loc.string(lA)}}}class M0 extends b0{constructor(){super("GroupingGameCenterReengagementShelfController"),this.batchGroupKey=bU,this.supportedFeaturedContentIds=new Set([494])}shelfRoute(e){return[...super.shelfRoute(e),{protocol:CW,path:`/${xW}/${RW}/{token}`,query:[Aq.isGameCenterReengagementShelf]}]}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:[],achievementData:null,achievementSummaryData:null}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await e.gameCenter.fetchRengagementDataForLocalPlayer().then(async t=>{const n=d(t,jU),r=m(t[Cx]),i=m(t.achievementSummary)
if(o(n)){const e={shelfContents:[],responseTimingValues:null,achievementData:null,achievementSummaryData:null}
return await Promise.resolve(e)}const s=new zz(e).withIdOfType(n,zj)
return Qn(e,s),await Tn(e,s,{}).then(e=>({shelfContents:e.data,responseTimingValues:e[um.timingValues],achievementData:r,achievementSummaryData:i}))})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}_createShelf(e,t,n,r){return t.isFirstRender?this.pendingGameCenterReengagementShelf(e,n,t,null==r?void 0:r.isArcadePage):this.gameCenterReengagementShelf(e,n,t,null==r?void 0:r.isArcadePage)}pendingGameCenterReengagementShelf(e,t,n,r){const o=this.gameCenterReengagementShelf(e,t,n,r)
if(!o)return null
const i=xq.from(Yn(n))
return o.url=i.param(Aq.isGameCenterReengagementShelf,zG).build(),o.batchGroup=this.batchGroupKey,o}gameCenterReengagementShelf(e,t,n,r=!1){return Pg.context("gameCenterReengagementShelf",()=>{if(!s(t.shelfContents))return null
const o=new $z("gameCenterReengagement")
o.isHorizontal=!1,o.mergeWhenFetched=!1,o.batchGroup=this.batchGroupKey
const i={id:n.id,kind:null,softwareType:r?oj:null,targetType:Cj,title:dA,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,idType:cU,fcKind:n.featuredContentId,badges:{gameCenter:!0}},a=md(e,t.shelfContents[0],21)
let c=G("componentBackground"),l=null
s(a)&&(l=a.preview,c=l.backgroundColor)
const u={lockupOptions:{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},offerStyle:cj,artworkUseCase:Fu(0,gj),isSubtitleHidden:!0}}
rf(0,i,i.title)
const d=Iu(e,t.shelfContents,u)[0]
d.clickAction=Aa(e,d.clickAction),sf(n.metricsLocationTracker)
let f=null
s(d)&&(f=new fW(d.bundleId),f.title=dA,$f(e,f,i))
const p=e.loc.string("GameCenter.Reengagement.Badge.GameCenter"),h=this.achievementFromData(e,t.achievementData),w=this.achievementCountsFromData(e,t.achievementSummaryData),g=this.shelfMetadataForAchievement(e,h,w),m=new xz("gamecenter.fill",p,g.title,g.subtitle,h,d,c,l,f)
return o.items=[m],gf(e,m,i),o})}achievementStatusFromData(e,t){const n=d(t,PU),r=new WV(n)
return r.percent=f(t,"percent"),r.date=d(t,Gk),r.artwork=new CV(d(t,"artwork.template"),f(t,"artwork.width"),f(t,"artwork.height"),[]),r}achievementFromData(e,t){const n=d(t,"id"),r=d(t,JG),o=d(t,AG),i=this.achievementStatusFromData(e,p(t,"status"))
return new qV(n,r,o,i)}achievementCountsFromData(e,t){return{completed:f(t,"completedAchievements"),total:f(t,"totalAchievements")}}shelfMetadataForAchievement(e,t,n){if(!i(t))return{title:"",subtitle:null}
if(0===n.completed)return{title:e.loc.string("GameCenter.Reengagement.Achievement.First.Title"),subtitle:e.loc.string("GameCenter.Reengagement.Achievement.First.Subtitle")}
switch(t.status.type){case fA:case"hidden":case pA:return{title:e.loc.string("GameCenter.Reengagement.Achievement.KeepPlaying.Title"),subtitle:e.loc.string("GameCenter.Reengagement.Achievement.KeepPlaying.Subtitle")}
case fB:const t=e.loc.stringWithCount("GameCenter.AchievementSummary.TotalToCompleteCount",n.total),r=e.loc.stringWithCount("GameCenter.AchievementSummary.NumberCompletedCount",n.completed),o=e.loc.string("GameCenter.AchievementSummary.CompletedCount.Subtitle").replace("@@completedCount@@",r).replace("@@totalCount@@",t)
return{title:e.loc.string("GameCenter.Reengagement.Achievement.CompletedCount.Title"),subtitle:o}
default:return{title:"",subtitle:null}}}}class $0 extends b0{constructor(){super("GroupingGameCenterSuggestedFriendsController"),this.batchGroupKey=bU,this.supportedFeaturedContentIds=new Set([496])}shelfRoute(e){return[...super.shelfRoute(e),{protocol:CW,path:`/${xW}/${RW}/{token}`,query:[Aq.isGameCenterSuggestedFriendsShelf]}]}initialShelfDataFromGroupingMediaApiData(e,t){return{$kind:WD,shelfContents:[],suggestedFriends:[]}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await e.gameCenter.fetchSuggestedFriends(10).then(t=>e.props.enabled(hA)?{$kind:WD,shelfContents:[],suggestedFriends:t}:{$kind:wA,shelfContents:[],suggestedFriends:t})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}incompleteShelfFetchStrategy(e){return $g.OnPageLoad}_createShelf(e,t,n,r){return t.isFirstRender?this.pendingSuggestedFriendsShelfForGrouping(e,t,null==r?void 0:r.isArcadePage):this.suggestedFriendsShelfForGrouping(e,n,t,null==r?void 0:r.isArcadePage)}pendingSuggestedFriendsShelfForGrouping(e,t,n){if(e.client.deviceType!==Bj&&e.client.deviceType!==Lj)return null
const r=this.suggestedFriendsShelfForGrouping(e,{$kind:e.props.enabled(hA)?WD:wA,shelfContents:[],suggestedFriends:[]},t,n),o=xq.from(Yn(t))
return r.url=o.param(Aq.isGameCenterSuggestedFriendsShelf,zG).build(),r.isHidden=0===r.items.length,r.batchGroup=this.batchGroupKey,r}suggestedFriendsShelfForGrouping(e,t,n,r){if(e.client.deviceType!==Bj&&e.client.deviceType!==Lj)return null
let o
return o=t.$kind===WD?this.suggestedFriendsShelf(e,t.suggestedFriends,n,r):this.legacySuggestedFriendsShelf(e,t.suggestedFriends,n,r),o.header=Vf(e,n.title,n.subtitle),o.batchGroup=this.batchGroupKey,o.isHidden=0===o.items.length,o}suggestedFriendsShelf(e,t,n,r=!1){const o=gA
if(e.client.deviceType!==Bj&&e.client.deviceType!==Lj)return null
const i=new $z(mA)
i.isHorizontal=!0,i.mergeWhenFetched=!0,i.batchGroup=bU
const s=[]
for(let i=0;i<t.length;i++){const a=`${o}${i+1}`,c=t[i],l=e.loc.string(vA),u=e.loc.string(yA),d={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,id:a,anonymizationOptions:{anonymizationString:a}}
let f,p
c.supportsFriendingViaPush&&c.contactAssociationID?(f={contact:{contactID:c.contactID,contactAssociationID:c.contactAssociationID}},p=!1):(f={messages:{contactID:c.contactID}},p=!0)
const h=new hW(f)
$f(e,h,{...d,actionType:AA})
const w=new wW(c.contactID)
$f(e,w,{...d,actionType:TA})
const g={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,title:a,id:a,kind:SA,softwareType:r?oj:null,anonymizationOptions:{anonymizationString:a}},m=new HV(c.contactID,c.fullName,u,l,c.contactID,h,w,p)
gf(e,m,g),s.push(m),uf(n.metricsLocationTracker)}return i.items=s,i.isHidden=0===i.items.length,i}legacySuggestedFriendsShelf(e,t,n,r=!1){const o=gA
if(e.client.deviceType!==Bj&&e.client.deviceType!==Lj)return null
const i=new $z(mA)
i.isHorizontal=!0,i.mergeWhenFetched=!0,i.batchGroup=bU
const s=[]
for(let i=0;i<t.length;i++){const a=`${o}${i+1}`,c=t[i]
c.buttonText=e.loc.string(vA),c.subtitle=e.loc.string(yA)
const l={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,id:a,anonymizationOptions:{anonymizationString:a}}
c.buttonAction=new pW(c.contactId),$f(e,c.buttonAction,{...l,actionType:AA}),c.removeButtonAction=new wW(c.contactId),$f(e,c.removeButtonAction,{...l,actionType:TA}),gf(e,c,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,title:a,id:a,kind:SA,softwareType:r?oj:null,anonymizationOptions:{anonymizationString:a}}),s.push(c),uf(n.metricsLocationTracker)}return i.items=s,i.isHidden=0===i.items.length,i}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){return{...n,badges:{gameCenter:!0},idType:cU}}}class F0 extends TV{isValid(){const e=void 0!==this.callToActionText&&null!==this.callToActionText&&void 0!==this.clickAction&&null!==this.clickAction,t=void 0!==this.titleText&&null!==this.titleText,n=void 0!==this.lockup&&null!==this.lockup,r=void 0!==this.collectionIcons&&null!==this.collectionIcons
return t&&(n||r||e)}}class N0 extends TV{isValid(){const e=(0,bg.isSome)(this.collectionIcons)&&this.collectionIcons.length>0,t=(0,bg.isSome)(this.artwork)&&this.artwork.isValid(),n=(0,bg.isSome)(this.video)&&this.video.isValid(),r=t||n||e,o=(0,bg.isSome)(this.overlay)&&this.overlay.isValid()
return r&&o}}class B0 extends TV{constructor(){super(...arguments),this.items=[],this.rtlItems=[]}}class U0 extends AV{constructor(e,t,n){super(),this.card=e,this.shelves=t,this.shareAction=n,this.isIncomplete=!1,this.pageMetrics=new OH,this.pageRenderMetrics={}}}class G0 extends TV{constructor(e,t,n,r,o,i,s){super(),this.details=e,this.displayProperties=n,this.offerButtonAction=r,this.buttonCallToAction=o,this.offerDisplayProperties=t,this.artwork=i,this.video=s}}const j0=G(Y_),V0=G(Y_),H0=G(Y_)
class W0{constructor(){this.index=0,this.todayShelfRecoMetricsData={},this.hasFocusableElements=!1,this.hasNonFocusableElements=!1,this.isResilientDeepLink=!1,this.allowUnpublishedAppEventPreviews=!1}}const q0=[YP,zP,JP,oR]
class z0 extends b0{constructor(){super("GroupingHeroCarouselShelfController"),this.supportedFeaturedContentIds=new Set([480])}_supports(e,t,n,r){return!!super._supports(e,t,n,r)&&q(t,iG)===pN}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:se(t,qj)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await b0.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}shouldImpressShelf(){return!1}_createShelf(e,t,n,i){if(0!==i.shelves.length)return null
const a=new $z(RN),c=t.featuredContentData,l={targetType:tj,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:$(c)},u=new B0
u.autoScrollConfiguration={isAutoScrollEnabled:e.bag.heroCarouselAutoScrollDuration>0,autoScrollInterval:e.bag.heroCarouselAutoScrollDuration}
const d=Tf(e,c,RN,l)
d.autoAdvanceInterval=u.autoScrollConfiguration.autoScrollInterval,gf(e,a,d),rf(0,d,RN)
for(const i of n.shelfContents){if(r(i.attributes)||qn(t)){t.isDeferring=!0,t.remainingItems.push(i)
continue}const n=Gd(e,i)
if(Ra(0,i)&&!K(n)){t.isDeferring=!0,t.remainingItems.push(i),t.relationshipToFetch=wG
continue}const s={targetType:qM,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:$(i)},a=Sa(e,i),c=Ta(e,i)
if(o(a.video)&&o(c.artwork))continue
const l=new N0,d=Ha(0,i),f=Ka(e,i),p=Tf(e,i,f,s)
p.isPreorder=Oe(e,d,rj),gf(e,l,p),rf(0,p,f)
const h=a.artworkData||c.artworkData,w=a.backgroundColor||c.backgroundColor,g={metricsPageInformation:t.metricsPageInformation,metricsLocationTracker:t.metricsLocationTracker,canDisplayArcadeOfferButton:Nd(0,t.shelfStyle),lockupArtworkUseCase:Fu(0,t.shelfStyle),isContainedInPreorderExclusiveShelf:497===t.featuredContentId}
l.overlay=Ya(e,i,g),l.backgroundColor=w,l.titleEffect=_a(0,h),l.artwork=c.artwork,l.video=a.video
const m=Da(e,i)
$f(e,m,{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:$(i),targetType:qM,id:i.id}),l.clickAction=m,u.items.push(l),sf(p.locationTracker),uf(p.locationTracker)}return s(u.items)&&(a.items=[u],i.pageTitleEffect=u.items[0].titleEffect),a.url=Jn(a,t),sf(d.locationTracker),uf(d.locationTracker),a}}class Y0 extends b0{constructor(){super("GroupingHorizontalCardShelfController"),this.supportedFeaturedContentIds=new Set([475])}_supports(e,t,n,r){return!!super._supports(e,t,n,r)&&ir(0,q(t,iG))!==Nk}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:se(t,qj)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await b0.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o={...n},i=q(t,iG)
return o.shelfStyle=ir(0,i),o}_createShelf(e,t,n,r){const o={metricsLocationTracker:t.metricsLocationTracker,metricsPageInformation:t.metricsPageInformation}
let i
if(t.shelfStyle===GU)i=t.shelfStyle
else switch(e.client.deviceType){case jj:case"tv":i=t.shelfStyle
break
case Vj:i=NB
break
default:i=HF}const s=Zf(e,n.shelfContents,i,t.title,t.subtitle,o,function(e){return t.remainingItems.push(e),!1})
return s.contentType===GU&&Array.isArray(s.items)&&(s.items=s.items.filter(e=>!(e instanceof yY)||Jf(0,e.media.kind,GU))),s.url=Jn(s,t),s.isHorizontal=!0,s}}class J0 extends b0{constructor(e=null){super(e||"GroupingLargeBreakoutShelfController"),this.supportedFeaturedContentIds=new Set([480])}_supports(e,t,n,r){return!!super._supports(e,t,n,r)&&q(t,iG)===sB}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:se(t,qj)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await b0.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}shouldImpressShelf(){return!1}isInHeroPosition(){return!1}_createShelf(e,t,n,i){const a=s(i)&&o(i.pageTitleEffect)&&0===i.shelves.length,c=s(n.shelfContents)?[n.shelfContents[0]]:[],l=[]
for(const n of c){if(r(n.attributes)||qn(t)){t.isDeferring=!0,t.remainingItems.push(n)
continue}const s={targetType:this.isInHeroPosition()?"heroBreakout":qM,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:$(n)},c=Sa(e,n),u=Ta(e,n),d=c.artworkData||u.artworkData,f=J0.createLargeBreakout(e,n,t,this.isInHeroPosition(),a,s)
o(f)||(l.push(f),a&&(i.pageTitleEffect=_a(0,d)))}const u=new $z(Tx)
return u.isHorizontal=!1,u.items=l,u.url=Jn(u,t),0===i.shelves.length&&(u.presentationHints={isFirstShelf:!0}),u}static createLargeBreakout(e,t,n,r,i,s){const a=Gd(e,t)
if(Ra(0,t)&&!K(a))return n.isDeferring=!0,n.remainingItems.push(t),n.relationshipToFetch=wG,null
const c=Sa(e,t),l=Ta(e,t)
if(o(c.video)&&o(l.artwork))return null
const u=c.backgroundColor||l.backgroundColor,d=r?null:q(t,"breakoutBadge")
let f
const p=q(t,GG)
f=Oe(e,t,jF)?e.loc.uppercased(Ud(e,a,p)):p
let h={type:XG};(null==f?void 0:f.length)>0&&(h={type:kG,title:f})
const w=_d(e,t,Yj)||Ce(e,a,Yj),g=_d(e,t,FB)||Ce(e,a,WB),m=Pa(e,t,!0,0,!1),v=Ia(e,t,0,!1),y=new Ez(w,g,h,null,m,Ca(0,v,t)),A=new Rz(y,{position:v||bj},d,l.artwork,c.video,null,u),T=Tf(e,t,A.details.title,s),S=Oe(e,Ha(0,t),rj)
T.isPreorder=S,gf(e,A,T),rf(0,T,A.details.title)
const P=Da(e,t),b={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:$(t),targetType:Hj,id:t.id}
return $f(e,P,b),A.details.callToActionButtonAction=P,A.clickAction=P,sf(s.locationTracker),A.flowPreviewActionsConfiguration=ws(e,t,!0,n.clientIdentifierOverride,P,s,b),A}}class K0 extends b0{constructor(){super("GroupingLinkShelfController"),this.supportedFeaturedContentIds=new Set([437,265])}initialShelfDataFromGroupingMediaApiData(e,t){let n=se(t,oG)
return o(n)&&(n=W(t,ZM)),{shelfContents:n}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await b0.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o={...n,shouldHideShelf:Y(t,"hide"),areContentLinks:s(se(t,oG))}
return o.clientIdentifierOverride=Kt(e,t),o}_createShelf(e,t,n,i){if(t.shouldHideShelf)return null
const s=[]
for(let a=0;a<n.shelfContents.length;a++){const c=n.shelfContents[a],u={targetType:pj,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker}
t.areContentLinks&&(u.recoMetricsData=$(c))
let d=null
if(t.isSearchLandingPage){const n=this.trendingSearchLinkFromData(e,c,t.metricsLocationTracker)
if(r(n)||r(n.action))continue
gf(e,null==n?void 0:n.action,{...u,kind:pj,softwareType:l(null==i?void 0:i.isArcadePage)?oj:null,title:n.action.title,id:`${a}`,idType:fj}),d=n}else{const n=nr(e,c,t,!1,null,u,null)
if(o(n)||o(n.action.title))continue
d=n.action
const r=sr(0,c)
r&&gf(e,d,{...u,kind:pj,softwareType:l(null==i?void 0:i.isArcadePage)?oj:null,title:d.title,id:r})}o(d)||(s.push(d),uf(t.metricsLocationTracker))}if(o(s))return null
if(t.isSearchLandingPage&&e.client.isPhone&&s.length>=6)for(const t of s)t instanceof cW&&(t.action.artwork=ce(e,kx))
const a=new $z(_G)
return a.isHorizontal=!1,a.items=s,a.title=t.title,a.subtitle=t.subtitle,a.presentationHints={isWidthConstrained:!0},a.url=Jn(a,t),t.isSearchLandingPage&&(e.client.isPhone||e.client.isPad)&&(a.contentsMetadata={type:Ox,numberOfColumns:s.length>=6?2:1}),a}trendingSearchLinkFromData(e,t,n){const r=d(t,GG)
if((0,Ig.isNothing)(r)||0===r.length)return null
const o=new AQ(r,r,null,QM)
return Bf(e,o,Hj,n),uf(n),new cW(o)}}const Z0={shelfIdentifier:"first",slot:0},Q0="SLPPage"
class X0{constructor(e,t=!0){this.promise=e,this.isRequired=t}}class e1 extends Error{constructor(e){super(function(e){let t=""
for(const n of e)n instanceof Error?t+=n.message:t+=JSON.stringify(n)
return t}(e)),this.reasons=e}}class t1{constructor(e){this.builderClass=e}handleShelf(e,t,n,r,o,i){i(new Error(`${this.builderClass} does not implement handleShelf`))}handlePagination(e,t,n,r,o,i,s){s(new Error(`${this.builderClass} does not implement handlePagination`))}shelfRoute(e){return[{protocol:CW,path:`${this.shelfPath}{data}`}]}paginationRoute(e){return[{protocol:CW,path:`${this.paginationPath}`}]}shelfUrl(e){return`${CW}:${this.shelfPath}${encodeURIComponent(JSON.stringify(e))}`}get shelfPath(){return`/${this.builderClass}/${RW}/`}get paginationUrl(){return`${CW}:${this.paginationPath}`}get paginationPath(){return`/${this.builderClass}/${_W}/`}static createFlowAction(e,t,n){const r=new Bq(t)
return r.pageUrl=n.build(),r.pageData=e,r}}!function(e){e.Page="page",e.Shelf="shelf",e.Pagination="pagination"}(hm||(hm={}))
class n1 extends t1{defaultAttributes(e){return[]}defaultTab(e){return null}prepareRequest(e,t,n,r,o){t.includingAdditionalPlatforms(this.defaultPlatforms(e)),t.includingAttributes(this.defaultAttributes(e)),t.usingCustomAttributes($e(e))}defaultAction(e,t,n,r){return n1.createFlowAction(t,this.pageType(),r)}handlePage(e,t,n,r,o,s,a){Pg.context(`${this.builderClass}.handlePage`,()=>{var r
let c
const l=t.build()
da(e,t)?c=new zz(e,l):((0,Ig.isSome)(o)&&(n[Aq.includeUnlistedApps]="1"),c=this.generatePageRequest(e,t,n)),c||a(new Error(`Could not construct media API request for: ${t}`)),this.prepareRequest(e,c,hm.Page,t,n),c.attributingTo(l)
const u=null!==(r=e.fetchTimingMetricsBuilder)&&void 0!==r?r:new Ag.FetchTimingMetricsBuilder,d=void 0===e.fetchTimingMetricsBuilder?e.addingFetchTimingMetricsBuilder(u):e
let f
f=new X0(Tn(d,c)),f.promise.then(t=>{sc(e,e.user.dsid,t)})
const p=this.generateAdditionalPageRequirements(e,t,n)
lc(e,f,p).then(async e=>(i(e.primaryPageDataFetchFailureReason)&&this.handlePageError(e.primaryPageDataFetchFailureReason,s,a,t,n),i(e.requiredAdditionalDataFailureReason)&&this.handlePageError(e.requiredAdditionalDataFailureReason,s,a,t,n),this.supportsDataAugmenting()?await this.augmentData(d,t,n,e.primaryPageData).then(t=>u.measureModelConstruction(()=>this.renderPage(d,t.originalData,n,e.additionalData,t.additionalData,o))):u.measureModelConstruction(()=>this.renderPage(d,e.primaryPageData,n,e.additionalData,null,o)))).then(r=>{const o=this.defaultTab(r),i=this.defaultAction(e,r,n,t),s=n[Aq.isPPT]
if(t.removeParam(Aq.isPPT),null===o||s)return i
{const e=new _H(o)
return e.actions=[i],e}}).then(s,e=>{this.handlePageError(e,s,a,t,n)})})}handlePageError(e,t,n,r,o){n(e)}handleShelf(e,t,n,r,o,i){Pg.context(`${this.builderClass}.handleShelf`,()=>{let r
const s=t.build()
r=da(e,t)?new zz(e,s):this.generateShelfRequest(e,t,n),r?(this.prepareRequest(e,r,hm.Shelf,t,n),r.attributingTo(t.build()),Tn(e,r).then(async t=>{const r=this.renderShelf(e,t,n)
return this.shelfRequiresAdditionalModification(r,n)?await this.performAdditionalShelfModifications(e,r,n):r}).then(o,e=>{this.handleShelfError(e,o,i,n)})):i(new Error(`Could not construct media API request for: ${t}`))})}async performAdditionalShelfModifications(e,t,n){return await Promise.resolve(t)}shelfRequiresAdditionalModification(e,t){return!1}handleShelfError(e,t,n,r){n(e)}handlePagination(e,t,n,r,o,i,s){Pg.context(`${this.builderClass}.handlePagination`,()=>{let r
const a=t.build()
r=da(e,t)?new zz(e,a):this.generatePaginationRequest(e,t,n,o),r?(this.prepareRequest(e,r,hm.Pagination,t,n),r.attributingTo(t.build()),Tn(e,r).then(t=>this.renderPaginatedPage(e,t,o)).then(i,e=>{this.handlePaginationError(e,i,s,n,o)})):s(new Error(`Could not construct media API request for: ${t}`))})}handlePaginationError(e,t,n,r,o){n(e)}generateAdditionalPageRequirements(e,t,n){return{}}generateShelfRequest(e,t,n){throw new Error(`generateShelfRequest is not supported on: ${this.builderClass}`)}generatePaginationRequest(e,t,n,r){throw new Error(`generatePaginationRequest is not supported on: ${this.builderClass}`)}supportsDataAugmenting(){return!1}async augmentData(e,t,n,r){const o={url:t,parameters:n}
return await La(e,r,this.additionalDataKeysNeededForData,this.fetchAdditionalDataForKey,o)}additionalDataKeysNeededForData(e,t,n){return null}fetchAdditionalDataForKey(e,t){return null}renderShelf(e,t,n){throw new Error(`renderShelf is not supported on: ${this.builderClass}`)}renderPaginatedPage(e,t,n){throw new Error(`renderPaginatedPage is not supported on: ${this.builderClass}`)}}const r1=cG
class o1{constructor(){this.profile=ij,this.maxPerPage=20}}class i1 extends n1{defaultAttributes(e){const t=[wj,dj,eG,sG]
return e.appleSilicon.isSupportEnabled&&t.push(CG),t}defaultPlatforms(e){return O(e)}pageType(){return Jj}generatePaginationRequest(e,t,n,r){return new zz(e,r.remainingContent)}renderPaginatedPage(e,t,n){const r=n
return this.pageWithContent(e,t,r)}pageWithContent(e,t,n,r=!0){return Pg.context("pageWithContent",()=>{const o=n.preferredShelfContentType||r1,i=new $z(o),s={id:null,kind:null,softwareType:null,targetType:tj,title:n.title,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,idType:cU,recoMetricsData:$(t)}
gf(e,i,s),rf(0,s,n.title),i.isHorizontal=!1,i.shouldFilterApps=n.shouldFilter
const a=L(t)
r&&(n.remainingContent=[]),i.items=Iu(e,a,{contentUnavailable:(e,t)=>(r&&(n.remainingContent=st(0,a,e)),!0),lockupOptions:{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,artworkUseCase:Fu(0,o)}})
const c=new Gz([i])
return n.remainingContent.length&&(c.nextPage=n),c})}}class s1 extends i1{requestWithFilter(e,t,n){return new zz(e).forType(zj).includingMacOSCompatibleIOSAppsWhenSupported(!0).withFilter(t,n)}renderPage(e,t,n,r){return Pg.context(vB,()=>{const r=new o1
r.url=this.paginationUrl,r.metricsPageInformation=this.pageInformation(e,t,n),r.shouldFilter=!1,r.metricsLocationTracker={rootPosition:0,locationStack:[]}
const o=this.pageWithContent(e,t,r)
return ni(e,o,r.metricsPageInformation),o})}}class a1 extends b0{constructor(e=null){super(e||"GroupingLockupShelfController"),this.supportedFeaturedContentIds=new Set([...BQ,...WQ])}initialShelfDataFromGroupingMediaApiData(e,t){const n=re(t,qj)
let r=n?n.data:null
return r&&0!==r.length||(r=se(t,oG)),{shelfContents:r}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await b0.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return hc(e,t,n,r)}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){const r={...n}
if(r.displayStyle=t.shelfStyle,557===t.featuredContentId){const n=d(H(ie(e,t.featuredContentData,bA),xU),Yj)
r.title=n,r.idType=cU,r.badges={forYou:!0},r.targetType="swooshBreakout"}return r}_createShelf(e,t,n,r){if(557===t.featuredContentId){const t=!s(n.shelfContents),r=e.client.isPad
if(t||r)return null}return wc(e,t,n,r)}}class c1 extends b0{constructor(){super("GroupingPersonalizedLockupShelfController"),this.supportedFeaturedContentIds=VQ}shelfRoute(e){return ya(this.supportedFeaturedContentIds,[`${Aq.isOnDeviceRecommendationsShelf}?`,`${Aq.onDeviceRecommendationsUseCase}?`])}initialShelfDataFromGroupingMediaApiData(e,t){const n=re(t,qj)
let r=n?n.data:null
return r&&0!==r.length||(r=se(t,oG)),{shelfContents:r||[],containsODPShelfContents:!1,recoMetrics:$(n),candidates:null,isHiddenShelf:!1,responseTimingValues:null}}async secondaryShelfDataForShelfUrl(e,t,n,r){var o
const i=r[Aq.onDeviceRecommendationsUseCase]
return(null==i?void 0:i.length)>0?await ur(e,i,Kj).then(e=>({shelfContents:L(e.dataContainer),containsODPShelfContents:!0,recoMetrics:e.recoMetrics,candidates:e.candidates,isHiddenShelf:!1})).catch(async o=>o instanceof KQ?await c1.fetchODPFallbackContent(e,t,n,r).catch(e=>c1.makeHiddenShelfData(n)):c1.makeHiddenShelfData(n)):(null===(o=n.recommendationsHref)||void 0===o?void 0:o.length)>0?await b0.secondaryGroupingShelfMediaApiData(e,t,n,r).then(t=>{const n=_(e,t),r=this.initialShelfDataFromGroupingMediaApiData(e,n)
return r.responseTimingValues=t[um.timingValues],r.shelfTitle=q(n,Yj),r}):await b0.secondaryGroupingShelfMediaApiData(e,t,n,r).then(e=>{const t={shelfContents:L(e)||[],containsODPShelfContents:!1,recoMetrics:null,candidates:null,isHiddenShelf:!1,responseTimingValues:e[um.timingValues]}
return t.shelfTitle=n.title,t})}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){const o=hc(e,t,n,r)
return this.addPersonalizationValuesToShelfToken(e,o,t,r),o}_createShelf(e,t,n,r){var s,a
if(!t.isValidRecommendationsShelf)return null
let c=null
if((0,Ig.isNothing)(t.title)&&(t.title=n.shelfTitle),n.containsODPShelfContents){c=this.personalizedShelf(e,n,t,r)
const o=(new xq).set(BB,CW).path(`${aq}`).param(Aq.onDeviceRecommendationsUseCase,t.onDeviceRecommendationsUseCase).param(Aq.token,JSON.stringify(t)).build(),i=new Bq(Jj,o)
i.title=e.loc.string(UU),i.pageData=this.odpSeeAllPage(e,n.shelfTitle,r1),lr(e,c,i),c.mergeWhenFetched=!1}else n.isHiddenShelf?c=c1.makeHiddenShelf(t):i(t.recommendationsHref)?(c=this.personalizedShelf(e,n,t,r),c.url=this.addOnDeviceQueryParamsIfNecessary(e,c.url,t)):(c=wc(e,t,n,r),c.url=this.addOnDeviceQueryParamsIfNecessary(e,c.url,t))
const l=(0,Ig.isSome)(c.header),u=l&&o(null===(s=c.header)||void 0===s?void 0:s.title),d=!l&&o(c.title),f=(null===(a=n.shelfTitle)||void 0===a?void 0:a.length)>0
return u&&f?c.header.title=n.shelfTitle:d&&f&&(c.title=n.shelfTitle),c}personalizedShelf(e,t,n,r){const o=cf(n.metricsLocationTracker)
o&&o.fcKind===n.featuredContentId&&sf(n.metricsLocationTracker)
const i={id:n.id,kind:null,softwareType:l(null==r?void 0:r.isArcadePage)?oj:null,targetType:tj,title:n.title,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,idType:cU,fcKind:n.featuredContentId,recoMetricsData:t.recoMetrics,displayStyle:n.shelfStyle}
rf(0,i,n.title)
const s=wc(e,n,t,r)
return sf(n.metricsLocationTracker),gf(e,s,i),s}addPersonalizationValuesToShelfToken(e,t,n,r){const o=476===t.featuredContentId
if(!r.hasAuthenticatedUser&&!t.isSearchLandingPage&&!o)return void e.console.log(`Skipping recommendations shelf with fcID ${t.featuredContentId}: No user logged-in`)
const i=q(n,Rx)
if((null==i?void 0:i.length)>0)return t.onDeviceRecommendationsUseCase=i,t.recommendationsHref=n.href,void(t.isValidRecommendationsShelf=!0)
const a=s(se(n,qj)),c=!Y(n,rA)
!a&&c?(t.recommendationsHref=n.href,t.isValidRecommendationsShelf=!0):t.isValidRecommendationsShelf=a}addOnDeviceQueryParamsIfNecessary(e,t,n){var r
if(o(t))return null
if((null===(r=n.onDeviceRecommendationsUseCase)||void 0===r?void 0:r.length)>0){const e=new xq(t)
return e.param(Aq.isOnDeviceRecommendationsShelf,zG),e.param(Aq.onDeviceRecommendationsUseCase,n.onDeviceRecommendationsUseCase),e.build()}return t}odpSeeAllPage(e,t,n){const r=new $z(n||r1)
r.isHorizontal=!1,r.items=CA
const o=new Gz([r])
return o.isIncomplete=!0,o.title=t,o}static async fetchODPFallbackContent(e,t,n,r){return await new Promise((r,o)=>{const i=Zn(e,n)
if(!i){const e=`OnDeviceRecommendationsShelfController: Could not construct media API request for: ${t}`
Pg.unexpectedType(EG,e,null),o(new Error(e))}Qn(e,i),i.attributingTo(t.build()),Tn(e,i).then(t=>{const n=re(_(e,t),qj),o=$(n),i={shelfContents:L(n),containsODPShelfContents:!1,recoMetrics:o,candidates:null,responseTimingValues:t[um.timingValues]}
r(i)}).catch(e=>{const n=`OnDeviceRecommendationsShelfController: Failed to fetch fallback shelf contents: ${t}`
Pg.unexpectedType(EG,n,null),o(e)})})}static makeHiddenShelfData(e){return{shelfContents:[],containsODPShelfContents:!1,recoMetrics:null,candidates:null,isHiddenShelf:!0}}static makeHiddenShelf(e){const t=new $z(e.shelfStyle)
return t.isHidden=!0,t}}class l1 extends b0{constructor(){super("GroupingSmallBreakoutShelfController"),this.supportedFeaturedContentIds=new Set([480])}_supports(e,t,n,r){return!!super._supports(e,t,n,r)&&q(t,iG)===EB}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:se(t,qj)}}async secondaryShelfDataForShelfUrl(e,t,n,r){return await b0.secondaryGroupingShelfDataForShelfUrl(e,t,n,r)}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return n}shouldImpressShelf(){return!1}_createShelf(e,t,n,o){const i=[]
for(const o of n.shelfContents){if(r(o.attributes)||qn(t)){t.isDeferring=!0,t.remainingItems.push(o)
continue}const n=Gd(e,o)
if(Ra(0,o)&&!K(n)){t.isDeferring=!0,t.remainingItems.push(o),t.relationshipToFetch=wG
continue}const s={targetType:EA,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:$(o)}
let a
const c=q(o,GG)
a=Oe(e,o,jF)?e.loc.uppercased(Ud(e,n,c)):c
let l={type:XG};(null==a?void 0:a.length)>0&&(l={type:kG,title:a})
const u=_d(e,o,Yj)||Ce(e,n,Yj),f=_d(e,o,FB)||Ce(e,n,WB),p=ju(e,n,{useCase:5,withJoeColorPlaceholder:!0}),h=F(d(we(n,Re(e,o),Nj),CM))||(null==p?void 0:p.backgroundColor),w=new Ez(u,f,l,null,ba(0,h),null),g=new Dz(w,p,h),m=Tf(e,o,g.details.title,s),v=Oe(e,Ha(0,o),rj)
m.isPreorder=v,gf(e,g,m),rf(0,m,g.details.title)
const y=Da(e,o),A={pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:$(o),targetType:Hj,id:o.id}
$f(e,y,A),g.details.callToActionButtonAction=y,g.clickAction=y,sf(s.locationTracker),g.flowPreviewActionsConfiguration=ws(e,o,!0,null==t?void 0:t.clientIdentifierOverride,y,s,A),i.push(g)}const s=new $z(EA)
return s.isHorizontal=!1,s.items=i,s.url=Jn(s,t),0===o.shelves.length&&(s.presentationHints={isFirstShelf:!0}),s}}class u1 extends b0{constructor(){super("ArcadeDownloadPackShelfController"),this.shelfId="arcadeDownloadPackShelf",this.supportedFeaturedContentIds=new Set([566])}shelfRoute(e){return[...super.shelfRoute(e),{protocol:CW,path:`/${xW}/${RW}/{token}`,query:[Aq.isArcadeDownloadPackShelfPlaceholder]}]}shelfTokenFromBaseTokenAndMediaApiData(e,t,n,r){return hc(e,t,n,r)}initialShelfDataFromGroupingMediaApiData(e,t){return{shelfContents:[],categoriesContents:[],apps:[],title:""}}async secondaryShelfDataForShelfUrl(e,t,n,r){const o=e.arcade.getDownloadPackGames(e.bag.arcadeDownloadPackShelfTTLInSeconds)
if((0,bg.isNothing)(o)||0===o.apps.length)return{shelfContents:[],categoriesContents:[],apps:[],title:""}
const i=o.apps,s=this.shelfTitle(e,te(o.subscriptionStatus))
if((0,bg.isSome)(t.query[Aq.isArcadeDownloadPackShelfPlaceholder]))return{shelfContents:[],categoriesContents:[],apps:i,title:s}
const a=i.map(e=>e.adamId),c=i.map(e=>e.categoryId),l=zj,u=_j,d=new zz(e).addingQuery(`ids[${l}]`,Array.from(a).join(",")).addingQuery(`ids[${u}]`,Array.from(c).join(",")).includingAdditionalPlatforms(O(e)).includingAttributes(wa(e))
return await Tn(e,d).then(async e=>({shelfContents:e.data.filter(e=>e.type===l),categoriesContents:e.data.filter(e=>e.type===u),apps:i,title:s,responseTimingValues:e[um.timingValues]}))}_createShelf(e,t,n,r){if(t.isFirstRender){const n=e.arcade.getDownloadPackGames(e.bag.arcadeDownloadPackShelfTTLInSeconds)
if((0,bg.isNothing)(n)||0===n.apps.length){const n=this.emptyShelfWithRefreshUrl(e)
return n.refreshUrl=this.shelfRefreshURL(t),uf(r.metricsLocationTracker),n}{const o=this.placeholderShelf(e,t,n.apps,this.shelfTitle(e,te(n.subscriptionStatus)))
return uf(r.metricsLocationTracker),o}}if(n.apps.length>0&&((0,bg.isNothing)(n.shelfContents)||0===n.shelfContents.length))return this.placeholderShelf(e,t,n.apps,n.title)
{const r=this.shelfMetrics(n.title,t)
rf(0,r,n.title)
const o=this.downloadPackShelf(e,t,n)
return o.refreshUrl=this.shelfRefreshURL(t),sf(t.metricsLocationTracker),gf(e,o,r),o}}shelfMetricsOptionsFromBaseMetricsOptions(e,t,n){return null}emptyShelfWithRefreshUrl(e){const t=new $z(this.useCustomDownloadPackCardShelf(e)?jD:gj)
return t.id=this.shelfId,t.isHidden=!0,t}placeholderShelf(e,t,n,r){const o=this.useCustomDownloadPackCardShelf(e)?this.downloadPackCardPlaceholderShelf(e,t,n.length):this.smallLockupsPlaceholderShelf(e,t,n)
return o.url=xq.from(Yn(t)).build(),o.title=r,o}downloadPackCardPlaceholderShelf(e,t,n){const r=new $z(jD)
r.id=this.shelfId
const o=new GV
return o.numberOfPlaceholders=n,r.items=[o],t.shelfStyle=r.contentType,r}smallLockupsPlaceholderShelf(e,t,n){const r=new $z(gj)
return r.id=this.shelfId,r.items=[],r.isHorizontal=!0,r.rowsPerColumn=2,r.items=Array(n.length).fill(new _z),r.placeholderContentType=r.contentType,r.contentType=W$,t.showingPlaceholders=!0,t.remainingItems=n.map(e=>({id:e.adamId,type:zj})),r}downloadPackShelf(e,t,n){const r=this.categoriesMapFromResponse(e,n.categoriesContents,n.apps),o=this.useCustomDownloadPackCardShelf(e),i=o?jD:gj,s=this.lockupsFromResponse(e,t,r,o,o,Fu(0,i),(0,bg.isSome)(n.shelfContents)?n.shelfContents:[],n.apps),a=new $z(i)
if(a.id=this.shelfId,a.title=n.title,o){const e=new GV
e.lockups=s,a.items=[e]}else a.items=s,a.isHorizontal=!0,a.rowsPerColumn=2
return a.isHidden=0===s.length,a}useCustomDownloadPackCardShelf(e){return e.client.isPhone}shelfRefreshURL(e){return xq.from(Yn(e)).param(Aq.isArcadeDownloadPackShelfPlaceholder,zG).build()}lockupsFromResponse(e,t,n,r,o,i,s,a){return Pg.context("lockupsFromResponse",()=>{const c=new Map
for(const e of s)c.set(e.id,e)
const l=t.metricsLocationTracker,u=t.metricsPageInformation,d=[]
for(const t of a){const s=c.get(t.adamId)
if((0,bg.isNothing)(s))continue
const a=wu(e,s,{offerStyle:o?aB:void 0,offerEnvironment:o?kj:void 0,metricsOptions:{pageInformation:u,locationTracker:l,badges:{categoryId:t.categoryId}},metricsClickOptions:{id:s.id,pageInformation:u,locationTracker:l,badges:{categoryId:t.categoryId}},artworkUseCase:i,shouldHideArcadeHeader:!0,isSubtitleHidden:r});(0,bg.isNothing)(a)||($u(a,e),uf(l),r?a.heading=n.get(a.adamId):a.subtitle=n.get(a.adamId),d.push(a))}return d})}categoriesMapFromResponse(e,t,n){const r=new Map
for(const o of n){const n=t.find(e=>e.id===o.categoryId)
if(!n)continue
const i=_d(e,n,Yj)
r.set(o.adamId,i)}return r}shelfTitle(e,t){return e.loc.string(t===P$?"Arcade.DownloadPack.ShelfTitle.NewUser":"Arcade.DownloadPack.ShelfTitle")}shelfMetrics(e,t){return{id:t.id,kind:null,softwareType:oj,targetType:tj,title:e,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,idType:cU,fcKind:t.featuredContentId}}}const d1=[new I0,new C0,new k0,new O0,new E0,new R0,new D0,new x0,new L0,new M0,new $0,new _0,new z0,new Y0,new J0,new K0,new a1,new c1,new l1,new u1]
class f1 extends AV{constructor(e,t,n,r,o,i){super(),this.bodyText=e,this.isDetailHeader=t,this.privacyTypes=n,this.bodyActions=r,this.supplementaryItems=o,this.seeDetailsAction=i}}class p1 extends AV{constructor(e,t){super(),this.bodyText=e,this.action=t}}class h1 extends AV{constructor(e,t,n){super(),this.bodyText=e,this.actions=t,this.privacyTypesCount=n}}class w1 extends TV{constructor(e,t,n,r,o,i,s,a){super(),this.identifier=e,this.title=t,this.detail=n,this.artwork=r,this.style=o,this.purposes=i,this.categories=s,this.clickAction=a,this.wantsScrollFocus=!1}}class g1 extends AV{constructor(e,t,n){super(),this.identifier=e,this.title=t,this.categories=n}}class m1 extends AV{constructor(e,t,n,r,o=[]){super(),this.identifier=e,this.title=t,this.artwork=n,this.style=r,this.dataTypes=o,this.prefersSmallArtwork=!1}}const v1=["284417353","1464590764","314638464","284993479","1351056256"]
class y1{setShelfId(e,t){this.shelfId=e,this.index=t,tJ.has(e)&&(this.section=new ZY(Kj,e))}}class A1{constructor(e,t,n=0){this.sequenceId=0,this.metricsPageInformation=e,this.locationTracker=t,this.sequenceId=n}addImpressionsToShelf(e,t,n,r,o,i,s){gf(e,t,{id:null!=r?r:`${this.sequenceId}`,idType:null!=o?o:fj,kind:null,softwareType:null,targetType:n,title:null!=s?s:t.title,pageInformation:this.metricsPageInformation,locationTracker:this.locationTracker,recoMetricsData:i}),this.sequenceId++}getSequenceId(){return this.sequenceId}addImpressionsFieldsToSimilarItemsShelf(e,t,n,r){t&&(gf(e,t,{id:A1.similarItemsShelfId,kind:null,softwareType:null,targetType:n,title:t.title,pageInformation:this.metricsPageInformation,locationTracker:this.locationTracker,idType:r}),this.sequenceId++)}static resetLocationTrackerForSimilarItemsDuringDownloadShelf(e,t){const n=t.sourceLocationTracker
lf(n,0),cf(n).id=A1.similarItemsDuringDownloadShelfId}static addImpressionsFieldsToSimilarItemsDuringDownloadShelf(e,t,n){t&&gf(e,t,{id:A1.similarItemsDuringDownloadShelfId,kind:null,softwareType:null,targetType:QG,title:n.title,pageInformation:n.sourcePageInformation,locationTracker:n.sourceLocationTracker,idType:QF})}}A1.similarItemsShelfId=AN,A1.similarItemsDuringDownloadShelfId=fC
const T1=[cl,ul,Uc,qc,Gc,Jc,Xc,Qc,Zc,Hc,dl,Yc,Kc,zc],S1=[ul,Uc,qc,Gc,Jc,Xc,Qc,Zc,Hc,dl,Yc,cl,Kc,zc],P1=[cl,Uc,function(e,t,n,r,o,i){const s=Ie(e,t,DF)
if(0===s.length)return null
const a=s[0]
let c=null
const l=d(a,fN)
if(l){const t=e.loc.string("ProductPage.VersionAnnotation.Value.DateFormat")
c=e.loc.formatDate(t,new Date(l))}const u=d(a,CE)
if(0===s.length)return null
let f
if(u&&c)f=e.loc.string("ProductPage.VersionAnnotation.Value").replace("@@version@@",u).replace(Av,c)
else{if(!u)return null
f=u}const p=new jq(f),h=new Vq(f),w=o?"":e.loc.string("ProductPage.VersionAnnotation.Title"),g=new Gq(w,[p],[h])
return g&&!r?g:null},ul,Kc,zc],b1=[Gc,Qc,Hc,function(e,t,n,r,o,i){const s=[],a=[],c=Vc(e,t);(0,Ig.isSome)(c)&&(s.push(c[0]),a.push(c[1]))
const l=Wc(e,t)
if((0,Ig.isSome)(l)&&(s.length>0&&(s[s.length-1].text+="\n"),s.push(l[0]),a.push(l[1])),0===s.length)return null
const u=e.loc.string("InfoList.AgeRating.Title.KR"),d=new Gq(u,s,a)
return d.shouldAlwaysPresentExpanded=!0,d}],I1=[yl,Rl,ml,Il,Sl,function(e,t,n,r){var o
return null!==(o=Al(e,t))&&void 0!==o?o:Tl(e,t)},bl],C1=[Ol,Pl,vl,yl,Rl],k1=[Ol,yl,Rl,Al,function(e,t,n,r){if(!Oe(e,t,j$))return null
const o=e.loc.string("BADGE_FRIENDS_HEADING","Friends"),i=Wj,s=uj,a=uj,c={maxNumberOfAvatarsToDisplay:3,maxNumberOfFriendsBeforeTruncation:99,adamId:t.id}
return new KY(s,a,c,i,o,"",null,"",o,lG)},vl,ml,Il,Sl,Tl,bl,function(e,t,n,o){if(et(e).isSystemAppFromData(t))return null
const i=wd(e,t)
if(r(i)||r(i.fileSizeByDevice))return null
const s=function(e,t){let n
if(n=(0,bg.isSome)(t.maxEssentialInstallSizeInBytes)?t.fileSizeByDevice+t.maxEssentialInstallSizeInBytes:(0,bg.isSome)(t.maxInstallSizeInBytes)?t.fileSizeByDevice+t.maxInstallSizeInBytes:t.fileSizeByDevice,n<=0)return null
const r=e.loc.fileSize(n).trim().split(/\s+/)
return 2!==r.length?null:{size:r[0],unit:r[1]}}(e,i)
if(!s)return null
const a={paragraphText:s.size},c=s.unit,l=e.loc.string("BADGE_SIZE_HEADING")
return new KY(AB,O_,a,Wj,l,c,null,null,c,hU)}]
!function(e){e.StoryCenteredMotion16x9="storyCenteredMotion16x9",e.StoryCenteredStatic16x9="storyCenteredStatic16x9",e.StoryDetailMotion3x4="storyDetailMotion3x4",e.StoryDetailStatic3x4="storyDetailStatic3x4",e.HeroMotion16x9="heroMotion16x9",e.HeroStatic16x9="heroStatic16x9",e.HeroMotionRTL16x9="heroMotionRTL16x9",e.HeroStaticRTL16x9="heroStaticRTL16x9",e.LargeBreakoutMotion16x9="largeBreakoutMotion16x9",e.LargeBreakoutStatic16x9="largeBreakoutStatic16x9",e.LargeBreakoutRTLMotion16x9="largeBreakoutRTLMotion16x9",e.LargeBreakoutRTLStatic16x9="largeBreakoutRTLStatic16x9",e.StoryCardMotion3x4="storyCardMotion3x4",e.StoryCardStatic3x4="storyCardStatic3x4",e.StorySearchStatic16x9="storySearchStatic16x9",e.SubscriptionHero="subscriptionHero",e.UniversalAMotion16x9="universalAMotion16x9",e.UniversalAStatic16x9="universalAStatic16x9",e.BrickStatic16x9="brickStatic16x9",e.BrickStaticRTL16x9="brickStaticRTL16x9"}(wm||(wm={})),function(e){e.Hero="hero",e.LargeBreakout="largeBreakout",e.StoryCard="storyCard",e.StoryDetail="storyDetail",e.StoryDetailLandscape="storyDetailLandscape",e.Search="search",e.Brick="brick",e.EditorialLockup="editorialLockup",e.EditorialPage="editorialPage"}(gm||(gm={}))
const O1={hero:[wm.HeroMotion16x9,wm.HeroStatic16x9,wm.StoryCenteredMotion16x9,wm.StoryCenteredStatic16x9],largeBreakout:[wm.LargeBreakoutMotion16x9,wm.LargeBreakoutStatic16x9,wm.StoryCenteredMotion16x9,wm.StoryCenteredStatic16x9],storyCard:[wm.StoryCardMotion3x4,wm.StoryCardStatic3x4,wm.StoryCenteredMotion16x9,wm.StoryCenteredStatic16x9],storyDetail:[wm.StoryDetailMotion3x4,wm.StoryDetailStatic3x4,wm.StoryCenteredMotion16x9,wm.StoryCenteredStatic16x9],storyDetailLandscape:[wm.StoryCenteredMotion16x9,wm.StoryCenteredStatic16x9,wm.StoryDetailMotion3x4,wm.StoryDetailStatic3x4],search:[wm.StorySearchStatic16x9,wm.StoryCenteredStatic16x9],brick:[wm.BrickStatic16x9,wm.HeroStatic16x9,wm.StoryCenteredStatic16x9],editorialLockup:[wm.SubscriptionHero],editorialPage:[wm.StoryCardStatic3x4,wm.HeroStatic16x9,wm.StoryCenteredStatic16x9,wm.SubscriptionHero]},E1={hero:[wm.HeroMotion16x9,wm.HeroStatic16x9,wm.StoryCenteredMotion16x9,wm.StoryCenteredStatic16x9,wm.UniversalAMotion16x9,wm.UniversalAStatic16x9],largeBreakout:[wm.LargeBreakoutMotion16x9,wm.LargeBreakoutStatic16x9,wm.StoryCenteredMotion16x9,wm.StoryCenteredStatic16x9,wm.UniversalAMotion16x9,wm.UniversalAStatic16x9],storyCard:[wm.StoryCardMotion3x4,wm.StoryCardStatic3x4,wm.StoryCenteredMotion16x9,wm.StoryCenteredStatic16x9,wm.UniversalAMotion16x9,wm.UniversalAStatic16x9],storyDetail:[wm.StoryDetailMotion3x4,wm.StoryDetailStatic3x4,wm.StoryCenteredMotion16x9,wm.StoryCenteredStatic16x9,wm.UniversalAMotion16x9,wm.UniversalAStatic16x9],storyDetailLandscape:[wm.StoryCenteredMotion16x9,wm.StoryCenteredStatic16x9,wm.UniversalAMotion16x9,wm.UniversalAStatic16x9,wm.StoryDetailMotion3x4,wm.StoryDetailStatic3x4],search:[wm.StorySearchStatic16x9,wm.StoryCenteredStatic16x9,wm.UniversalAStatic16x9],brick:[wm.BrickStatic16x9,wm.HeroStatic16x9,wm.StoryCenteredStatic16x9,wm.UniversalAStatic16x9],editorialLockup:[wm.SubscriptionHero],editorialPage:[wm.StoryCardStatic3x4,wm.HeroStatic16x9,wm.StoryCenteredStatic16x9,wm.SubscriptionHero]},R1={hero:[wm.HeroMotionRTL16x9,wm.HeroStaticRTL16x9,wm.StoryCenteredMotion16x9,wm.StoryCenteredStatic16x9,wm.UniversalAMotion16x9,wm.UniversalAStatic16x9],largeBreakout:[wm.LargeBreakoutRTLMotion16x9,wm.LargeBreakoutRTLStatic16x9,wm.StoryCenteredMotion16x9,wm.StoryCenteredStatic16x9,wm.UniversalAMotion16x9,wm.UniversalAStatic16x9],storyCard:[wm.StoryCardMotion3x4,wm.StoryCardStatic3x4,wm.StoryCenteredMotion16x9,wm.StoryCenteredStatic16x9,wm.UniversalAMotion16x9,wm.UniversalAStatic16x9],storyDetail:[wm.StoryDetailMotion3x4,wm.StoryDetailStatic3x4,wm.StoryCenteredMotion16x9,wm.StoryCenteredStatic16x9,wm.UniversalAMotion16x9,wm.UniversalAStatic16x9],storyDetailLandscape:[wm.StoryCenteredMotion16x9,wm.StoryCenteredStatic16x9,wm.UniversalAMotion16x9,wm.UniversalAStatic16x9,wm.StoryDetailMotion3x4,wm.StoryDetailStatic3x4],search:[wm.StorySearchStatic16x9,wm.StoryCenteredStatic16x9,wm.UniversalAStatic16x9],brick:[wm.BrickStaticRTL16x9,wm.HeroStatic16x9,wm.StoryCenteredStatic16x9,wm.UniversalAStatic16x9],editorialLockup:[wm.SubscriptionHero],editorialPage:[wm.StoryCardStatic3x4,wm.HeroStatic16x9,wm.StoryCenteredStatic16x9,wm.SubscriptionHero]},D1={chartPositions:function(e,t,n,r,i){var s,a
const c=function(e,t){const n=be(e,t,uE)
if(o(n))return null
const r=Td(0,e.host.clientIdentifier)
return o(r)?null:p(n,r)}(e,t)
if(o(c))return null
const l=f(c,d_)
if((0,bg.isNothing)(l)||l>50)return null
const u=null!==(s=d(c,"genreShortName"))&&void 0!==s?s:d(c,LS)
if(null!=u){if(r.has(u))return null
r.add(u)}let h
h=e.props.enabled(NP)&&e.bag.isLLMSearchTagsEnabled?new iz("highlightedText"):new iz("borderedTextLabel"),h.moduleType=uE
const w=(0,bg.isSome)(null===(a=n.searchAdOpportunity)||void 0===a?void 0:a.searchAd)||(0,bg.isSome)(n.searchAd)?e.bag.adsOverrideLanguage:null,g=(0,bg.isSome)(w)?e.adsLoc:e.loc
{const t=g.string("MetadataRibbon.ChartPosition").replace(BP,e.loc.formattedCountForPreferredLocale(e,l,w))
e.props.enabled(NP)&&e.bag.isLLMSearchTagsEnabled?(h.highlightedText=t,h.labelText=g.string("MetadataRibbon.ChartPositionAndCategory.Tags").replace(BP,e.loc.formattedCountForPreferredLocale(e,l,w)).replace("@@category@@",u)):(h.labelText=u,h.borderedText=t)}return h.secondaryViewPlacement=bj,mf(e,h,Sf(i,N_,h.labelText,lj)),[h]},genreDisplayName:function(e,t,n,r,i){const s=Hn(e,t,!0),a=(0,Ig.isSome)(s),c=hu(e,t)
if(o(c))return null
if(null!=c){if(r.has(c))return null
r.add(c)}const l=new iz(a?rL:tM)
if(l.moduleType=qB,l.labelText=c,a){const t=Nu(e,s,{useCase:20})
t.crop="sr",l.artwork=t}return mf(e,l,Sf(i,qB,l.labelText,lj)),[l]},genreShortDisplayName:function(e,t,n,r,o){const i=Hn(e,t,!0),s=(0,Ig.isSome)(i),a=q(t,Qx)
if(null!=a){if(r.has(a))return null
r.add(a)}if((0,Ig.isNothing)(a)||0===a.length)return null
const c=new iz(s?rL:tM)
return c.moduleType=Qx,c.labelText=a,s&&(c.artwork=Nu(e,i,{useCase:20,cropCode:"sr"})),mf(e,c,Sf(o,qB,c.labelText,lj)),[c]},secondaryGenreShortDisplayNames:function(e,t,n,r,i){const s=W(t,UE)
return o(s)?null:s.map(t=>{const n=new iz(tM)
n.moduleType=Qx,n.labelText=t
const r=Sf(i,qB,n.labelText,lj)
return mf(e,n,r),uf(i.locationTracker),n}).filter(e=>null!=e.labelText&&!r.has(e.labelText))},developerInfo:function(e,t,n,r,o){var i
let s=n.developerName
if((0,Ig.isNothing)(s)&&(s=null!==(i=q(t,EU))&&void 0!==i?i:q(t,MA)),null!=s){if(r.has(s))return null
r.add(s)}if((0,Ig.isSome)(s)&&s.length>0){const t=new iz(rL)
t.moduleType=UP,t.labelText=s,t.artwork=ce(e,j_)
const n=6
return t.maxCharacterCount=16,t.truncationLegibilityCharacterCountThreshold=Math.min(n,s.length),t.allowsTruncation=s.length>=n,mf(e,t,Sf(o,UP,t.labelText,lj)),[t]}return null},editorialBadgeInfo:function(e,t,n,r,o){var i
if(n.isEditorsChoice){const t=new iz(MG)
return t.moduleType=xN,t.useAdsLocale=((0,bg.isSome)(null===(i=n.searchAdOpportunity)||void 0===i?void 0:i.searchAd)||(0,bg.isSome)(n.searchAd))&&(0,bg.isSome)(e.bag.adsOverrideLanguage),mf(e,t,Sf(o,xN,"Editors Choice",lj)),[t]}return null},userRating:function(e,t,n,r,o){const s=Oe(e,t,rj)
if(i(n.ratingCount)&&i(n.rating)&&!s){const t=new iz("starRating")
return t.moduleType=aF,t.starRating=n.rating,t.labelText=n.ratingCount,mf(e,t,Sf(o,aF,"User Rating",lj)),[t]}return null},supportsGameController:function(e,t,n,r,o){var i
let s=!1
switch(Ce(e,t,yN)){case UL:case zR:s=!0}if(Oe(e,t,XE)&&(s=!0),!s)return null
const a=new iz(rL)
a.moduleType=XE
const c=((0,bg.isSome)(n.searchAd)||(0,bg.isSome)(null===(i=n.searchAdOpportunity)||void 0===i?void 0:i.searchAd))&&(0,bg.isSome)(e.bag.adsOverrideLanguage)
return a.labelText=c?e.adsLoc.string(sF):e.loc.string(sF),a.artwork=ce(e,"systemimage://gamecontroller.fill"),mf(e,a,Sf(o,XE,"Supports Game Controller",lj)),[a]},tag:function(e,t,n,r,o){const i=t,s=new iz(tM)
return s.moduleType=kO,s.labelText=q(i,Yj),(0,Ig.isNothing)(s.labelText)||0===s.labelText.length||r.has(s.labelText)?null:(mf(e,s,Sf(o,i.id,s.labelText,"tag_id")),r.add(s.labelText),[s])},divider:function(e,t,n,r,o){const i=new iz(GP)
return i.moduleType=GP,i.labelText="|",[i]}}
class _1{constructor(){this.runsOnIntel=!0,this.runsOnAppleSilicon=!0,this.requiresRosetta=!1}}!function(e){e[e.seeAllPage=0]="seeAllPage",e[e.categoryBreakout=1]="categoryBreakout",e[e.other=2]="other"}(mm||(mm={}))
class L1{constructor(e,t){this.videos=e,this.mediaPlatform=t}}const x1=new EV(414,896),M1=new EV(375,812),$1=new EV(414,736),F1=new EV(375,667),N1=new EV(320,568),B1=new EV(320,480),U1=(new EV(768,1024),new EV(810,1080)),G1=new EV(834,1112),j1=new EV(834,1194),V1=new EV(1194,834),H1=new EV(1024,1366),W1=new EV(1024,1366),q1=new EV(1366,1024),z1=new EV(744,1133),Y1=new EV(1133,744),J1=new EV(1032,1376),K1=new EV(1376,1032),Z1=new EV(834,1210),Q1=new EV(1210,834),X1=new EV(312,390),e2=new EV(368,448),t2=new EV(396,484),n2=new EV(410,502),r2=new EV(416,496),o2=new EV(820,1180),i2=new EV(360,780),s2=new EV(390,844),a2=new EV(428,926),c2=new EV(393,852),l2=new EV(430,932),u2=new EV(402,874),d2=new EV(440,956),f2=[ck,sk,ak,CD,ay,sy,iy,fG],p2=112.5,h2=4.5
class w2{constructor(){this.position=0}}const g2="::"
class m2{constructor(e){this._options=Object.freeze(e)}get defaultTopic(){return this._options.defaultTopic}_reduceFieldAccuracy(e,t){for(const n of t){const t=d(n,"fieldName")
if(r(t))continue
const o=f(e,t)
if(r(o))continue
let i=f(n,"magnitude")
r(i)&&(i=1048576)
let s=f(n,"significantDigits")
if(r(s)&&(s=2),i<=0||s<0){e[t]=Number.NaN
continue}const a=o/i
e[t]=le(a,s)}}_urlScrubbingAdParameters(e){const t=new xq(e)
return t.removeParam(lX),t.removeParam(uX),t.removeParam(dX),t.build()}_urlScrubbingExtRefUrl(e){const t=new xq(e)
return t.username="",t.password="",t.pathname=void 0,t.query=void 0,t.hash=void 0,t.build()}_derezFastImpressions(e){const t=d(e,r$),n=f(e,o$)
if(t===nO){if(4===n){const t=c(e,VU)
e[VU]=t.map(e=>{if((0,bg.isNothing)(e))return e
const t=c(e,JA)
return 0===t.length||(e[JA]=t.map(e=>{if((0,bg.isNothing)(e))return e
const t=f(e,"d")
return e.s=0,(0,bg.isSome)(t)&&(e.d=le(t,2)),e})),e})}if(5===n){const t=c(e,VU)
e[VU]=t.map(e=>{if((0,bg.isNothing)(e))return e
delete e[c_],(o(d(e,l_))||o(d(e,u_)))&&delete e.id
const t=p(e,KA)
return(0,bg.isNothing)(t)||o(t)||(Object.entries(t).forEach(([e,n])=>{const r=c(n)
t[e]=r.map(e=>{if((0,bg.isNothing)(e))return e
const t=f(e,"d")
return e.s=0,(0,bg.isSome)(t)&&(e.d=le(t,2)),e})}),e[KA]=t),e})}}}_decorateSearchResultImpressions(e){const t=d(e,oU),n=d(e,hB)
t===dU&&n!==s$&&function(e){const t=c(e,VU)
let n
for(const e of t){const t=d(e,Fx)
if((0,bg.isSome)(e)&&t===gB){n=e[y_]
break}}n&&(e[VU]=t.map(e=>{const t=d(e,Fx),r=t===$U||t===KL
return(0,bg.isSome)(e)&&r&&(e[EO]=n),e}))}(e)}_decorateSearchFocusImpressions(e){const t=d(e,oU),n=d(e,hB)
t===iO&&n===sO&&function(e){var t
const n=c(e,VU)
let r
for(const e of n)if("R8804"===d(e,zM)){r=null!==(t=d(e,y_))&&void 0!==t?t:void 0
break}r&&(e[VU]=n.map(e=>{const t=d(e,zM),n=d(e,Fx)
return o(t)&&n===pj&&null!=e&&null==d(e,EO)&&(e[EO]=r),e}))}(e)}_decorateAll(e,t,n){var o,i
const s=this._options.bagProvider,a=s("metricsBase",n)
r(a)||typeof a!==RF||Object.assign(t,a),t.clientBuildType=this._options.buildType,t.resourceRevNum=this._options.jsVersion,t.xpSendMethod="jet-js",this._options.buyDecorator.useApp(d(t,Oj)),delete t[NY]
const l=function*(e){if((0,bg.isNothing)(e))return
const t=e.split(";")
for(const e of t){const t=e.indexOf("=")
if(-1===t){const t=decodeURIComponent(e).trim()
yield{key:t,value:""}}else{const n=decodeURIComponent(e.substring(0,t)).trim(),r=decodeURIComponent(e.substring(t+1)).trim()
yield{key:n,value:r}}}}(d(t,ZA))
for(const e of l)if("xp_ci"===e.key){this._options.buyDecorator.useClientId(e.value)
break}delete t[ZA]
const u=null!==(i=null===(o=e.metricsIdentifiersCache)||void 0===o?void 0:o.getMetricsFieldsForTypes([Dg.client]))&&void 0!==i?i:{}
Object.assign(t,u),delete t.clientGeneratedId
const f=d(t,oU),p=d(t,hB)
if(!r(f)&&!r(p)){const e=d(s("compoundSeparator",n))||"_"
t[Jj]=`${f}${e}${p}`}const h=c(s("deResFields",n))
this._reduceFieldAccuracy(t,h)
const w=[eF,n$,tF,nF,Sj,"parentPageUrl"]
for(const e of w){const n=d(t,e);(0,bg.isSome)(n)&&n.length>0&&(t[e]=e===tF?this._urlScrubbingExtRefUrl(n):this._urlScrubbingAdParameters(n))}const g=d(t,aO)
if((0,bg.isSome)(g)&&(delete t[aO],t[a$]=g),e.bag.isMetricsUserIdFallbackEnabled){const n=d(t,cO)
let r=null;((0,bg.isNothing)(n)||0===n.length||n.length===m2.clientGeneratedUserIdLength)&&(r=e.user.dsid),(0,bg.isSome)(r)&&r.length>0&&(t[lO]=r)}}_decorateClick(e){!function(e){const t=d(e,Gx),n=d(e,RO)
r(t)&&(0,Ig.isSome)(n)&&(null==n?void 0:n.length)>0&&(e[Gx]=n),d(e,DO)===DT&&delete e[_O]}(e),this._decorateSearchResultImpressions(e),this._decorateSearchFocusImpressions(e),TH.shared.addReferralDataToEventIfNecessary(e),this._filterBuyParams(e)
const t=d(e,oU)
!(0,bg.isNothing)(t)&&t.toLowerCase().includes(sj)||delete e[VU],bf(e)}_decorateImpressions(e,t){if(o(t[VU]))return!1
this._derezFastImpressions(t),this._decorateSearchResultImpressions(t)
const n=d(t,nF)
return(0,bg.isSome)(n)&&n.length>0&&(t[OG]=Zd(n),delete t[nF]),bf(t),delete t[r$],!0}_decorateMedia(e){const t=f(e,d_)
r(t)||(e[d_]=Math.round(t))}_filterBuyParams(e){const t=d(e,"actionDetails.buyParams")
if((0,bg.isSome)(t)&&t.length>0){const n=new FY(t);[QA].forEach(e=>{n.set(e,null,null)}),(0,bg.isSome)(e[XN])&&(e[XN][PB]=n.toString())}}_decoratePage(e,t){const n=d(t,Jj)
r(n)||(t.pageHistory=this._options.buyDecorator.getPageHistoryFor(n)),TH.shared.setReferralDataForProductPageExtensionIfNecessary(t),TH.shared.beginReferralContextForPageIfNecessary(t),TH.shared.addReferralDataToEventIfNecessary(t)
const o=d(t,nF)
if(!r(o)){const e=Yd(o),n=Zd(o)
null!==e&&e.length>0&&(t[$x]=e),null!==n&&n.length>0&&(t[OG]=n)}}_decoratePageChange(e,t){this._decoratePage(e,t)}_decorateSearch(e){e[o$]=3,function(e){var t
const n=null!==(t=e[XN])&&void 0!==t?t:{},o=n[Gx],i=d(e,RO)
r(o)&&(0,Ig.isSome)(i)&&(null==i?void 0:i.length)>0&&(n[Gx]=i,e[XN]=n),d(e,DO)===DT&&delete e[_O],e[TF]===_T&&delete e[_O]}(e)}_decoratePageExit(e){TH.shared.endReferralContextIfNecessaryForPageEvent(e)}_filterExtraneous(e){!function(e){delete e[RO],delete e[DO],delete e.searchGhostHintTermLastDisplayed}(e),TH.shared.removeReferralContextInfoFromMetricsEvent(e)}makeEvent(e,t){const n=d(t,zB)
this._options.isLoggingEnabled&&e.console.log(`Building event for topic: ${n}`)
const r=t[$N],o=t[Oj]
if("com.apple.mobilesafari"===r&&o===qI)return new CH({})
const i=d(t,kM)||this._options.defaultTopic
this._decorateAll(e,t,i),e.user.isUnderThirteen&&(delete t[lO],delete t[cO])
const s=t[tF]
switch(s&&""===s&&delete t[tF],n){case WF:this._decorateClick(t)
break
case oO:break
case VU:if(!this._decorateImpressions(e,t))return new CH({})
break
case rO:this._decorateMedia(t)
break
case Jj:this._decoratePage(e,t)
break
case NR:this._decoratePageChange(e,t)
break
case XA:this._decoratePageExit(t)
break
case sj:this._decorateSearch(t)}return this._filterExtraneous(t),e.bag.metricsIdMigrationEnabled&&function(e){delete e[xO],delete e.DSID}(t),new CH(t)}}m2.clientGeneratedUserIdLength=24,m2.hasIAdData=YA,new Set([Nj,pM,mU,EL,ej])
const v2=new Set([iB,Nj,pM,mU,EL,ej]),y2=new Set([iB,Nj,pM,mU,EL,ej]),A2=new Set([iB,Nj,mU,ej]),T2="write-review",S2=Ij,P2="appPromotionRequirementKey"
j(F("F0F0F8"),F("303031")),function(e){e.MoreByDeveloper="moreByDeveloper",e.SimilarItems="similarItems",e.SmallStory="smallStory"}(vm||(vm={}))
class b2{constructor(e,t,n,r,o,i,s,a,c,l,u,d){this.isFirstRender=!0,this.isBundleShelf=!1,this.showingPlaceholders=!1,this.productId=e,this.onDemandShelfType=d,this.remainingItems=t,this.title=n,this.shouldInferSeeAllFromFetchesItems=r,this.capabilities=o,this.contentType=i,this.offerStyle=s,this.spotlightInAppProductIdentifier=a,this.refreshUrl=c,this.recoMetricsData=l,this.supportsArcade=u}}const I2=[iB,mU,Nj,ej],C2=(0,Sg.makeMetatype)("app-store:page-router")
class k2{constructor(){this.registeredBuilders=new Set,this.pageRouter=new Fq,this.shelfRouter=new Fq,this.paginationRouter=new Fq}registerPageBuilder(e,t){if(this.registeredBuilders.has(t.builderClass))throw new Error(`routing: Registering duplicate builderClass ${t.builderClass}`)
this.registeredBuilders.add(t.builderClass),this.pageRouter.associate(t.pageRoute(e),t),this.shelfRouter.associate(t.shelfRoute(e),t),this.paginationRouter.associate(t.paginationRoute(e),t)}registerShelfBuilder(e,t){if(this.registeredBuilders.has(t.builderClass))throw new Error(`routing: Registering duplicate builderClass ${t.builderClass}`)
this.registeredBuilders.add(t.builderClass),this.shelfRouter.associate(t.shelfRoute(e),t)}registerPaginationBuilder(e,t){if(this.registeredBuilders.has(t.builderClass))throw new Error(`routing: Registering duplicate builderClass ${t.builderClass}`)
this.registeredBuilders.add(t.builderClass),this.paginationRouter.associate(t.paginationRoute(e),t)}fetchFlowPage(e){const t=this.pageRouter.routedObjectForUrl(e)
if(!t.object)return"unknown"
const n=t.object
return n.builderClass===Uv&&t.parameters[Aq.action]!==S2&&t.parameters[Aq.action]!==T2?JU:n.pageType()}async fetchPage(e,t,n){return await this.fetchAction(e,t,null).then(async r=>await new Promise((o,i)=>{if(!r)throw new Error(`Promise resolved to null action for: ${t}`)
if(r.actionClass!==FR){if(r.actionClass===Mm){const e=r
if(1===e.actions.length&&e.actions[0].actionClass===FR){const t=e.actions[0].pageData
return A(t,n)?void o(t):void i(new Error(`pageData is not expected type ${n.name}, ${JSON.stringify(t)}`))}}i(new Error("Action is not a flowAction or a tabChangeAction that contains a single flowAction."))}else{const s=r.pageData
if(!A(s,n)){const a=r.pageUrl
return a&&a!==t?void this.fetchPage(e,a,n).then(e=>{o(e)}).catch(e=>{i(e)}):void i(new Error(`pageData is not expected type ${n.name}, ${JSON.stringify(s)}`))}o(s)}}))}async fetchAction(e,t,n,r=new Set){return await new Promise((o,i)=>{const s=this.pageRouter.routedObjectForUrl(t)
s.object?s.object.handlePage(e,s.normalizedUrl,s.parameters,s.matchedRuleIdentifier,n,o,i):this.redirectAndRefetchActionIfPossible(e,s.normalizedUrl,o,i,r)})}async fetchMoreOfPage(e,t){return await new Promise((n,r)=>{const o=t.url
if(!o)return void r(new Error("Page token missing required `url` property"))
const i=this.paginationRouter.routedObjectForUrl(o)
i.object?i.object.handlePagination(e,i.normalizedUrl,i.parameters,i.matchedRuleIdentifier,t,n,r):r(new Error(`fetchMoreOfPage: Unhandled pagination url: ${o}`))})}async fetchShelves(e,t){return await new Promise((n,r)=>{const o=Object.keys(t),i={shelves:{},errors:{}},s=new Nq(o.length)
s.then(()=>{if(Object.keys(i.shelves).length>0)n(i)
else{const e=Object.keys(i.errors).map(e=>i.errors[e].message)
0===e.length?r(new Error(`Could not load any shelves: ${JSON.stringify(t)}`)):r(new Error(e.join("\n")))}})
for(const n of o){const r=t[n],o=e=>{i.shelves[n]=e,s.countDown()},a=e=>{i.errors[n]=e,s.countDown()},c=this.shelfRouter.routedObjectForUrl(r)
c.object?c.object.handleShelf(e,c.normalizedUrl,c.parameters,c.matchedRuleIdentifier,o,a):a(new Error(`fetchShelves: Unhandled shelf url: ${r}`))}})}redirectAndRefetchActionIfPossible(e,t,n,r,o=new Set){const i=t.toString()
o.has(i)?r(new Error(`redirectAndRefetchActionIfPossible: Redirect cycle detected for URL: ${i}`)):(o.add(i),e.network.fetch({url:i,method:b$}).then(i=>{this.hasGotoURLInResponse(e,i)?n(new aW):200===i.status&&i.redirected&&i.url?this.fetchAction(e,i.url,null,o).then(n,r):r(new Error(`redirectAndRefetchActionIfPossible: Unhandled page url: ${t}`))}).catch(()=>{r(new Error(`redirectAndRefetchActionIfPossible: Failed to fetch page at url: ${t}`))}))}hasGotoURLInResponse(e,t){if(o(t.body))return!1
try{const n=g(e.plist.parse(t.body)),r=d(n,FC),o=d(n,NC)
return!(r!==BC||!(0,Ig.isSome)(o))}catch{return!1}}fetchBuilder(e){const t=this.pageRouter.routedObjectForUrl(e)||this.shelfRouter.routedObjectForUrl(e)||this.paginationRouter.routedObjectForUrl(e)
return t?t.object:null}}class O2{constructor(){this.$intentKind="GenericPageIntent"}async perform(e,t){const n=t.required(C2)
return await n.fetchPage(t,e.url,Gz)}}class E2{constructor(){this.$intentKind="GenericPageMoreIntent"}async perform(e,t){const n=t.required(C2)
return await n.fetchMoreOfPage(t,e.pageToken)}}class R2{constructor(){this.$intentKind="ShelvesIntent"}async perform(e,t){const n=t.required(C2)
return await n.fetchShelves(t,e.requests)}}class D2{constructor(){this.$intentKind="ActionIntent"}async perform(e,t){return await fp(t,e)}}class _2{constructor(){this.$intentKind="MetricsFieldLintingIntent"}async perform(e,t){const n=ht(t).makeEvent(t,m(e.fields))
return await Promise.resolve(n)}}class L2{constructor(){this.$intentKind="AppUpdateLockupsIntent"}async perform(e,t){const n=this.createUpdateLockups(t,e.appUpdateMetadata)
return await Promise.resolve(n)}createUpdateLockups(e,t){const n={lockupOptions:{metricsOptions:{pageInformation:ti(e,VL,"Updates",""),locationTracker:{rootPosition:0,locationStack:[]}},artworkUseCase:1}}
return this.updatesLockupsFromData(e,t,n)}updatesLockupsFromData(e,t,n){return Pg.context("updatesLockupsFromData",()=>{const a=[]
return null==t||t.forEach((t,c)=>{var l
const u=t.updateMetadata
if(r(u.attributes))return void(n.contentUnavailable&&n.contentUnavailable(c,u))
const f=n.lockupOptions
let p=80894
if(i(n.filter)&&(p=n.filter),tt(e,u,p))return
const h=wu(e,u,f)
if(r(h)||!h.isValid())return
const w=we(u,Re(e,u),"latestVersionInfo"),g=d(w,CE),m=d(w,fN)
h.releaseDate=new Date(m),h.installDate=t.updateInstallDate
const v=t.isUpdateAvailable||t.isUpdating?h.releaseDate:h.installDate
let y=this.timeAgoStringForDate(e,v)
o(y)&&(y=e.loc.string("UPDATES_VERSION_FORMAT").replace("{updateVersion}",g)),s(y)&&(h.subtitle=y)
const A=d(w,tP);(0,Ig.isSome)(A)&&(h.whatsNew=new NV(A.trim())),h.version=g,h.size=null===(l=wd(e,u))||void 0===l?void 0:l.fileSizeByDevice,h.externalVersionId=Ee(e,u,vE),a.push(h),uf(n.lockupOptions.metricsOptions.locationTracker)}),a})}timeAgoStringForDate(e,t){if((0,Ig.isNothing)(t))return
const n=(new Date).getTime()-t.getTime(),r=Math.floor(n/864e5)
switch(r){case 0:return e.loc.string("LOCKUPS_TODAY")
case 1:return e.loc.string("LOCKUPS_YESTERDAY")
case 2:case 3:return e.loc.string("LOCKUPS_DAYS_AGO_FORMAT").replace("{daysAgo}",r.toString())
default:const n=V_
return e.loc.formatDate(n,t)}}}class x2 extends AV{constructor(e,t){super(),this.title=e,this.sections=t||[],this.pageMetrics=new OH,this.pageRenderMetrics={}}}class M2 extends AV{constructor(e,t){super(),this.personalizationEnabledPage=e,this.personalizationDisabledPage=t}}class $2 extends AV{constructor(e,t){super(),this.title=e,this.footer=t,this.contents=[]}addContentItem(e){this.contents.push(e)}}class F2 extends AV{constructor(e){super(),this.type=e}}class N2 extends F2{constructor(e,t,n){super(pj),this.title=e,this.action=t,this.displayType=n||_G}}class B2 extends F2{constructor(e,t){super("infoListItem"),this.title=e,this.value=t}}class U2 extends F2{constructor(e){super(kG),this.text=e}}class G2 extends AV{constructor(){super(...arguments),this.links={},this.pageMetrics=new OH,this.pageRenderMetrics=null}}class j2 extends F2{constructor(e,t){super("personalizedRecommendationsToggle"),this.title=e,this.defaultValue=t}}class V2{constructor(){this.$intentKind="AccountLinksIntent"}async perform(e,t){return hp(t)}}class H2 extends t1{constructor(e,t){super("AccountController"),t.exportingService("AccountData",{fetchAccountLinks:async t=>hp(e)})}handlePage(e,t,n,r,o,i,s){s(new Error(kU))}pageRoute(e){return[]}pageType(){return Mj}}class W2 extends t1{constructor(){super("DynamicUIBuilder")}pageType(){return GL}handlePage(e,t,n,r,o,i,s){const a=new Bq(GL)
a.pageUrl=t.toString(),a.referrerUrl=t.build()
const c=new OY
if(e.bag.arcadeDownloadPacksCIPDeeplinkIntegrationEnabled&&lt(e,e.bag.arcadeDownloadPackRolloutRate)){const e=new Bq(_$),t=P$
e.pageData=t,e.presentationContext=ZB,c.carrierLinkSuccessAction=e}a.pageData=c,i(a)}pageRoute(e){const t=e.bag.dynamicUIRegexStrings,n=[]
for(const e of t)n.push(new RegExp(e,"i"))
return[{regex:n}]}}class q2 extends t1{constructor(){super("FinancePageBuilder")}pageType(){return Mj}handlePage(e,t,n,r,o,i,s){const a=new Bq(TB)
a.pageUrl=t.toString(),i(a)}pageRoute(e){const t=e.bag.financeUIRegexStrings,n=[]
for(const e of t)n.push(new RegExp(e,"i"))
return[{regex:n}]}}class z2{constructor(){this.$intentKind="GenericAccountPageIntent"}async perform(e,t){return await wp(t,e.url)}}class Y2{constructor(){this.$intentKind="PersonalizationTransparencyPageIntent"}async perform(e,t){return await async function(e){const t=e.required(C2),n=`${CW}:///${XW}/${eq}`
return await t.fetchPage(e,n,M2)}(t)}}class J2 extends t1{constructor(e,t){super("PersonalizationTransparencyBuilder"),t.exportingService(Bv,{fetchGenericAccount:async t=>await wp(e,t.url)})}handlePage(e,t,n,r,o,i,s){(async function(e,t,n){let r,o
if(e.bag.personalizedRecommendationsToggleEnabled){o=ax
const t=await gp(e),n=mp(e)
r=new M2(t,n)}else o=dG,r=w(n[Aq.enabled])?await gp(e):mp(e)
return t1.createFlowAction(r,o,t)})(e,t,n).then(i,s)}pageRoute(e){return e.bag.personalizedRecommendationsToggleEnabled?[{protocol:CW,path:`/${XW}/${eq}`},{path:`${eq}`}]:[{protocol:CW,path:`/${XW}/${eq}`,query:[Aq.enabled]},{path:`${eq}`,query:[Aq.enabled]}]}pageType(){return dG}}class K2 extends t1{constructor(){super("ShowAccountPageBuilder")}pageType(){return Mj}handlePage(e,t,n,r,o,i,s){let a,c=[]
{a=GR
const e=new Bq(dG)
e.presentationContext=ZB,e.animationBehavior=rG,c=[e]}const l=new _H(a)
l.actions=c,i(l)}pageRoute(e){return[{hostName:"showAccountPage"},{hostName:"showPurchasesPage"}]}}class Z2 extends t1{constructor(){super("ShowSubscriptionPageBuilder")}pageType(){return Mj}handlePage(e,t,n,r,o,i,s){i(new Bq(TB,e.bag.manageSubscriptionsUrl))}pageRoute(e){return[{hostName:"showSubscriptionsPage"}]}}class Q2 extends t1{constructor(){super("ShowUpdatesPageBuilder")}pageType(){return Mj}handlePage(e,t,n,r,o,i,s){const a=new _H(GR)
if(e.client.deviceType!==jj){const e=new Bq(dG)
e.presentationContext=ZB,e.animationBehavior=rG,a.actions=[e]}i(a)}pageRoute(e){return[{hostName:"showUpdatesPage"},{path:"updates"},{path:"{countryCode}/updates"},{query:[`${Aq.action}=updates`]}]}}class X2 extends t1{constructor(){super("StorefrontChangeController")}handlePage(e,t,n,r,o,i,s){const a={url:t.toString(),signingStyle:jN}
e.network.fetch(a).then(e=>{i(null)},s)}pageRoute(e){return[{protocol:kW,path:`/${DW}/resetAndRedirect`}]}pageType(){return Mj}}class e4 extends t1{constructor(){super("WebUIPageBuilder")}pageType(){return jL}handlePage(e,t,n,r,o,i,s){const a=new Bq(jL)
a.pageUrl=t.toString(),i(a)}pageRoute(e){const t=e.bag.webViewRegexStrings,n=[]
for(const e of t)n.push(new RegExp(e,"i"))
return[{regex:n}]}}class t4{constructor(){this.$intentKind="UpdateAppEventNotificationIntent"}async perform(e,t){return await Ap(t,e)}}class n4 extends t1{constructor(e,t){super("AppEventsController"),t.exportingService("AppEvents",{updateAppEventNotification:async t=>await Ap(e,t)})}handlePage(e,t,n,r,o,i,s){s(new Error(kU))}pageRoute(e){return[]}pageType(){return Mj}}class r4 extends t1{constructor(){super("AppClipSubscribeBuilder")}pageType(){return Mj}handlePage(e,t,n,r,o,s,a){const c=d(n[Aq.appId])
i(c)||a(new Error(`No adamId supplied in appClipSubscribe url: ${t}`))
const l=new zz(e).withIdOfType(c,zj).includingAdditionalPlatforms(O(e))
Tn(e,l).then(t=>{const n=_(e,t),r={metricsOptions:{pageInformation:new pX({}),locationTracker:{rootPosition:0,locationStack:[]}},artworkUseCase:null},o=wu(e,n,r),i=(new xq).set(BB,OW).set(sN,iN).path(jW).path(c).build(),a=new Bq(JU)
a.pageUrl=i
const l=Gf(e,lN,c,o.buttonAction),u=new _H(Gj)
u.actions=[a,l],s(u)},a)}pageRoute(e){return[{hostName:"appClipSubscribe",query:[Aq.appId,Aq.context]}]}}class o4 extends t1{constructor(){super("ArcadeOfferRedirectHandler")}pageType(){return KG}defaultTab(e){return Gj}pageRoute(e){return[{path:"arcade/offers",query:[`${Aq.offerHints}?`]},{path:"/{countryCode}/arcade/offers",query:[`${Aq.offerHints}?`]}]}handlePage(e,t,n,r,o,i,s){var a
const c=null!==(a=n[Aq.offerHints])&&void 0!==a?a:"deeplink_hardware_firstchance",l=new kY(Gj,lN,null,{offerHints:c})
l.offerHints=c
const u=new Bq(IB)
u.pageData=l,u.referrerUrl=t.build(),i(u)}}class i4 extends AV{constructor(e,t,n=null,r){super(),this.title=e,this.value=t,this.systemImageName=r,this.metricsValue=n}}i4.defaultValue="pageFacetsDefaultValue",i4.trueValue=new i4(zG,bL),i4.falseValue=new i4(bL,bL)
class s4 extends AV{constructor(e,t,n,r,o=[],i=null,s=null,a=null,c=!1,l=!1,u=!1){super(),this.id=e,this.parameterName=t,this.title=n,this.displayType=r,this.defaultOptions=i,this.options=o,this.metricsParameterName=s,this.clickAction=a,this.displayOptionsInline=c,this.showsSelectedOptions=l,this.isHiddenFromMenu=u}}class a4 extends AV{constructor(e=[],t=null){super(),this.title=t,this.facets=e}}class c4 extends AV{constructor(e,t,n){super(),this.facetGroups=e,this.allowsResetButton=t,this.resetButtonTitle=n}static isDefinedNonNullNonEmpty(e){return(0,bg.isSome)(e)&&0!==Object.keys(e).length}}c4.requestValuesForSelectedFacetOptions=function(e){if(c4.isDefinedNonNullNonEmpty(e)){const t=e.filter(e=>c4.isDefinedNonNullNonEmpty(e.value)).map(e=>e.value).join(",").split("&"),n=t[0],r=t.splice(1),o={}
for(const e of r){const t=e.split("=")
2===t.length&&(o[t[0]]=t[1])}return{value:n,additionalKeyValuePairs:o}}return null}
const l4="-releaseDateByDay&sort=name",u4="-lastUpdatedByDay&sort=name",d4="alphabet&sort=name",f4="category&sort=-releaseDate",p4="groupBy",h4=tx,w4=AC,g4=EF,m4="filter[platform]",v4={}
let y4=!1,A4=null,T4=null,S4=null,P4=null,b4=null,I4=null,C4=null,k4=null,O4=null,E4=null,R4=null
const D4={}
D4[Aq.sort]=p4,D4[Aq.ageRating]=PC,D4[Aq.controllerSupport]=bC,D4[Aq.multiplayerSupport]=IC,D4[Aq.comingSoon]=h4,D4[Aq.binCompatGames]=m4
class _4{constructor(){this.$intentKind="ArcadeSeeAllGamesPageIntent"}async perform(e,t){return await Ip(t,e.requestDescriptor)}}class L4{constructor(){this.$intentKind="ArcadeSeeAllGamesPageMoreIntent"}async perform(e,t){return await Cp(t,e.pageToken)}}class x4 extends n1{constructor(e,t){super("ArcadeSeeAllGamesPageBuilder"),this.pageSize=20,t.exportingService(iM,{fetchArcadeSeeAllGames:async t=>await Ip(e,t),fetchMoreArcadeSeeAllGames:async t=>await Cp(e,t.pageToken)})}defaultPlatforms(e){return O(e)}defaultAttributes(e){const t=[wj,dj,eG,sG,uB,kB,UB]
return e.appleSilicon.isSupportEnabled&&t.push(CG),t}defaultTab(e){return Gj}pageType(){return kF}pageRoute(e){return[{identifier:kF,path:`/${$W}`,query:[`${Aq.requestDescriptor}?`,`${Aq.sort}?`,`${Aq.ageRating}?`,`${Aq.controllerSupport}?`,`${Aq.multiplayerSupport}?`,`${Aq.comingSoon}?`]},{identifier:kF,hostName:`${fq}`,query:[`${Aq.requestDescriptor}?`,`${Aq.sort}?`,`${Aq.ageRating}?`,`${Aq.controllerSupport}?`,`${Aq.multiplayerSupport}?`,`${Aq.comingSoon}?`]},{path:"/{countryCode}/{platform}/arcade/see-all",query:[`${Aq.requestDescriptor}?`,`${Aq.sort}?`,`${Aq.ageRating}?`,`${Aq.controllerSupport}?`,`${Aq.multiplayerSupport}?`,`${Aq.comingSoon}?`]}]}paginationRoute(e){return[{identifier:kF,protocol:CW,path:`/${$W}/${FW}`}]}shelfRoute(e){return[{protocol:CW,path:`/${$W}/${RW}/`,query:[`${Aq.token}`]}]}generatePageRequest(e,t,n){return Pg.context("generatePageRequest",()=>{const t=Ep(e,n)
let r=Hf(e).includingAdditionalPlatforms(O(e)).includingRelationships([]).withSparseLimit(10).includingAttributes(bp(e)).usingCustomAttributes($e(e))
const i=s(t.selectedFacetOptions)?t.selectedFacetOptions:Sp(e)
let a=!1
for(const e of Object.keys(i)){if(e===h4&&s(i[e])){const t=i[p4]
if(s(t))switch(t[0].value){case l4:case u4:i[e][0].value=g4
break
case d4:i[e][0].value=w4
break
case f4:i[e][0].value=w4,a=!0}}e===m4&&o(i[e])&&(i[e]=v4[Aq.binCompatGames].false)}a&&(r=r.withSparseCount(4))
for(const e of Object.keys(i)){const t=c4.requestValuesForSelectedFacetOptions(i[e])
if(s(t)){s(t.value)&&r.addingQuery(e,t.value)
for(const e of Object.keys(t.additionalKeyValuePairs))r.addingQuery(e,t.additionalKeyValuePairs[e])}}return r})}renderPage(e,t,n,o){return Pg.context(vB,()=>{const o=h(t),i=Ep(e,n),a=ei(e,fU,kF,o),l={url:xq.fromComponents(CW,null,`/${$W}/${FW}`).build(),metricsPageInformation:a,metricsLocationTracker:{rootPosition:0,locationStack:[]},remainingGroups:[],lastShelfIndex:0,isCompactMode:i.isCompactMode},u=new qz(kp(e,c(o,"results.groups"),l))
u.title=e.loc.string(Eb),u.pageFacets=function(e){Tp(e),e.featureFlags.isEnabled("see_all_games_segmented_nav_2024A")
const t=e.loc.string("PAGE_FACETS_FILTERS_AGE_RATINGS"),n=new s4(Aq.ageRating,PC,t,D$,[b4,I4,C4,k4],[b4],"age",Pp(e,XU)),r=e.featureFlags.isEnabled("arcade_see_all_games_menu_uplift")||!1,o=new s4(Aq.sort,p4,e.loc.string(kv),D$,[A4,T4,S4,P4],r?[A4]:null,XU,Pp(e,XU)),i=e.loc.string(Iv),s=new s4(Aq.controllerSupport,bC,i,RM,[O4],null,Ov,Pp(e,XU)),a=e.loc.string("PAGE_FACETS_FILTERS_MULTIPLAYER_GAMES"),c=new s4(Aq.multiplayerSupport,IC,a,RM,[E4],null,Ev,Pp(e,XU)),l=new s4(Aq.comingSoon,h4,e.loc.string(Cv),RM,[R4],[R4],uD,Pp(e,uD))
l.isHiddenFromMenu=r
const u=new c4([],!1,null)
switch(e.client.deviceType){case jj:u.facetGroups.push(new a4([n])),e.bag.enableComingSoonToggle&&u.facetGroups.push(new a4([l],e.loc.string(Rv))),u.facetGroups.push(new a4([s,c],e.loc.string("PAGE_FACETS_SUPPORTS_TITLE"))),u.facetGroups.push(new a4([o]))
break
case"tv":u.facetGroups.push(new a4([n],e.loc.string("PAGE_FACETS_AGE_RATINGS_TITLE_LOWERCASE")))
const t=[s,c]
e.bag.enableComingSoonToggle&&t.push(l),u.facetGroups.push(new a4(t,e.loc.string("PAGE_FACETS_FILTERS_TITLE"))),u.facetGroups.push(new a4([o],e.loc.string("PAGE_FACETS_SORT_BY_TITLE_LOWERCASE")))
break
default:o.displayOptionsInline=!0,u.facetGroups.push(new a4([o],e.loc.string(kv))),n.showsSelectedOptions=!0,u.facetGroups.push(new a4([s,c,n],e.loc.string("PAGE_FACETS_FILTER_BY_TITLE"))),e.bag.enableComingSoonToggle&&u.facetGroups.push(new a4([l],e.loc.string(Rv)))}return u}(e),u.selectedFacetOptions=s(i.selectedFacetOptions)?i.selectedFacetOptions:Sp(e),u.pageSegments=[],ni(e,u,a)
const d=u.pageMetrics.instructions
if(!r(d))for(const e of d)e.data.includingFields.push(lT)
return l.remainingGroups.length>0&&(u.nextPage=l),u})}generatePaginationRequest(e,t,n,r){const o=h(r)
let i=[],s=20,a=!0
for(const e of o.remainingGroups)a=a&&(e.data.length<s||0===i.length),a&&(i=i.concat(e.data),s-=e.data.length)
return new zz(e,i).includingAdditionalPlatforms(O(e)).includingAttributes(bp(e)).usingCustomAttributes($e(e))}renderPaginatedPage(e,t,n){const r=h(n),o=[]
let i=20
const a={}
for(const e of t.data)a[e.id]=e
let c=!0
for(const e of r.remainingGroups){if(c=c&&(e.data.length<i||0===o.length),c){for(let t=0;t<e.data.length;t++){const n=a[e.data[t].id]
s(n)&&(e.data[t]=n)}i-=e.data.length}o.push(e)}r.remainingGroups=[]
const l=kp(e,o,r),u=new qz(l)
return u.title=e.loc.string(Eb),r.remainingGroups.length>0&&(u.nextPage=r),u}generateShelfRequest(e,t,n){const r=h(JSON.parse(n[uU])).remainingContent.slice(0,20),o=new zz(e,r).includingAdditionalPlatforms(O(e)).includingAttributes(bp(e)).usingCustomAttributes($e(e))
return We(e,o,r),o}renderShelf(e,t,n){const r=h(JSON.parse(n[uU]))
return r.remainingContent=t.data.concat(r.remainingContent.slice(20,r.remainingContent.length)),r.isFirstRender=!1,Op(e,r)}}const M4=ob
class $4{constructor(){this.$intentKind="ArcadeSubscribePageIntent"}async perform(e,t){return await _p(t,e.url)}}class F4 extends n1{constructor(e,t){super("ArcadeSubscribeBuilder"),t.exportingService(iM,{fetchSubscribePage:async t=>await _p(e,t.url)})}defaultPlatforms(e){return O(e)}defaultTab(e){return Gj}defaultAttributes(e){const t=[wj,eG,sG]
return e.appleSilicon.isSupportEnabled&&t.push(CG),t}pageType(){return xC}pageRoute(e){return[{hostName:"arcadeSubscribePageCustomContext",query:[`${Aq.appId}?`,`${Aq.context}?`,`${Aq.subscribePageMessage}?`,`${Aq.askToBuyId}?`,`${Aq.editorialItem}?`,`${Aq.includePostSubscribeAttribution}?`]},{hostName:`${dq}`,query:[`${Aq.appId}?`,`${Aq.context}?`,`${Aq.subscribePageMessage}?`,`${Aq.askToBuyId}?`,`${Aq.editorialItem}?`,`${Aq.includePostSubscribeAttribution}?`]},{path:"arcade/subscribe",query:[`${Aq.appId}?`,`${Aq.context}?`,`${Aq.subscribePageMessage}?`,`${Aq.askToBuyId}?`,`${Aq.editorialItem}?`,`${Aq.includePostSubscribeAttribution}?`]},{path:"{countryCode}/arcade/subscribe",query:[`${Aq.appId}?`,`${Aq.context}?`,`${Aq.subscribePageMessage}?`,`${Aq.askToBuyId}?`,`${Aq.editorialItem}?`,`${Aq.includePostSubscribeAttribution}?`]}]}generatePageRequest(e,t,n){return qf(e,this.marketingItemContextFromParameters(n),d(n,Aq.appId)).attributingTo(t.build())}renderPage(e,t,n,o){const a=o[F4.contextualAppRequirementKey]
let l=null
s(a)&&(l=_(e,a))
const u=c(t,oC).map(e=>m(e)),f=e.arcade.getMarketingItemFromMarketingItems(u),p=f,h=Fa(e,p,0,!1,!1,nx),g=this.marketingItemContextFromParameters(n),v=e.client.isPhone,y=g===$I,A=new PV(Gj,e.bag.arcadeAppAdamId,OB,null,y&&v?"arcadeLaunchRepairCompactSheet":Db,null,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId)
A.titles[xx]=e.loc.string(Q$,X$)
const T=d(n,Aq.appId),S=function(e,t,n,r){var o
const s=ei(e,"Upsell",n,r)
return i(r)&&(s.mercuryMetricsData=null!==(o=Xd(0,r))&&void 0!==o?o:void 0),s}(e,0,p.id,p)
S.offerType=CC,S.baseFields.upsellType=this.metricsUpsellType(g),S.baseFields.subscriptionSKU=e.bag.arcadeProductId
const P={pageInformation:S,locationTracker:{rootPosition:0,locationStack:[]}},b=Ba(e,{marketingItemData:f},Ma(0,p),P,!1)
if(!(b instanceof iW))throw new Error("Only buy actions are supported on the upsell page")
const I=new PY(h,e.loc.string(_v),b,A)
let C
I.askToBuyMessage=d(n,Aq.subscribePageMessage),I.askToBuyId=d(n,Aq.askToBuyId),ni(e,I,S)
let k=!1
if(s(l)){I.primaryIcon=Bu(e,l,P,{useCase:3})
const t=z(l,rj),r=Lf(e,l,P)
r.excludeAttribution=!w(n[Aq.includePostSubscribeAttribution]),C=Ot(e,l,hj,g,t,r),k=!0}if(!w(n[Aq.includePostSubscribeAttribution])){const e=I.pageMetrics.instructions
if(!r(e))for(const t of e)t.data.includingFields.push(tO)}let O=[]
const E=o[F4.contextualIconsRequirementKey]
if(s(E)&&(O=M(E)),i(f)&&(O=se(f,qj)),s(O)){const t=[]
for(const n of O)if(n.id===T){if(!k){I.primaryIcon=Bu(e,n,P,{useCase:3})
const t=z(l,rj),r=Lf(e,n,P)
C=Ot(e,n,hj,g,t,r)}}else t.push(Bu(e,n,P,{useCase:2}))
I.icons=t}return i(C)&&(b.postSubscribeAction=C),y&&i(T)&&(I.openAppAction=new jH(T)),s(I.icons)||i(I.primaryIcon)||(I.artwork=this.genericArtworkFromData(e,p)),y&&(I.singleIcon=I.primaryIcon),I.subscribedOfferButtonAction=new _H(Gj),I}genericArtworkFromData(e,t){if(!i(t))return null
const n=e.client.isPhone,r=function(e,t,n){const r=function(e,t){return Oa(e,t)}(e,t)
return p(r,n)}(e,t,n?eA:tA)
if(!s(r))return null
let o=null,a=f(r,JN)
return n?(o="of",a=a-296-1602):(o="og",a=a-344-772),Nu(e,r,{cropCode:o,allowingTransparency:!0,useCase:7,overrideHeight:a})}metricsUpsellType(e){return i(e)?e:lN}marketingItemContextFromParameters(e){let t=d(e,Aq.context)
const n=d(e,Aq.askToBuyId)
switch(o(t)&&s(n)&&(t=xI),t){case _m:return $I
case xI:return Rm
default:return t}}}F4.contextualIconsRequirementKey="contextualIconsRequirement",F4.contextualAppRequirementKey="contextualPrimaryIconRequirement"
const N4="amdImpressionData"
class B4 extends n1{constructor(e=null){super(e||"AbstractGroupingPageController")}generateAdditionalPageRequirements(e,t,n){var r
const o=super.generateAdditionalPageRequirements(e,t,n),i=e.amsEngagement
if(!i||!Eo(e))return o
const s=[MU,zj,Gj],a=null===(r=e.bag.tabsStandard.find(e=>e.url===t.toString()))||void 0===r?void 0:r.id
if(!s.includes(a))return o
const c={timeout:1e3,eventType:cX,tab:a}
return o[N4]=new X0(i.performRequest(c),!1),o}renderPage(e,t,n,r,o,s){return Pg.context(nA,()=>{const a=_(e,t)
if(!a)return null
if(!ne(a,yF))return null
const c=ei(e,Mk,a.id,t),l=Ar(e)
c.recoMetricsData=ef(c.recoMetricsData,null,l)
const u={shelves:[],metricsPageInformation:c,metricsLocationTracker:{rootPosition:0,locationStack:[]},pageGenreAdamId:q(a,"id"),pageGenreId:null,hasAuthenticatedUser:i(e.user.dsid),refreshController:kn(t),recoImpressionData:Oo(0,null==r?void 0:r[N4])},d=Ac(e,a)
return this.renderGroupingPage(e,d,u,n,r,o,s)})}}class U4{constructor(){this.$intentKind="ArcadePageIntent"}async perform(e,t){return await xp(t,e)}}class G4 extends B4{constructor(e,t){super("ArcadePageBuilder"),t.exportingService(iM,{fetchPage:async t=>await xp(e,t)})}defaultPlatforms(e){return O(e)}defaultAttributes(e){const t=[wj,eG,sG,H$]
return e.appleSilicon.isSupportEnabled&&t.push(CG),t}pageType(){return Gj}pageRoute(e){return[{protocol:kW,path:`/${DW}/${xW}`,query:[Aq.isArcade,`${Aq.isTrialAvailable}?`,`${Aq.isTrialEnrolled}?`,`${Aq.isSubscribed}?`,Aq.id]},{hostName:lq,path:`/WebObjects/{storePreviewInstance}/wa/${xW}`,query:[Aq.isArcade,`${Aq.isTrialAvailable}?`,`${Aq.isTrialEnrolled}?`,`${Aq.isSubscribed}?`,Aq.id,`${Aq.useReleaseId}?`]},{protocol:kW,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}",query:[Aq.isArcade,`${Aq.isTrialAvailable}?`,`${Aq.isTrialEnrolled}?`,`${Aq.isSubscribed}?`]},{protocol:kW,path:"{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}",query:[Aq.isArcade,`${Aq.isTrialAvailable}?`,`${Aq.isTrialEnrolled}?`,`${Aq.isSubscribed}?`]},{protocol:kW,path:"{apiVersion}/editorial/{countryCode}/groupings/{id}",query:[Aq.isArcade,`${Aq.isTrialAvailable}?`,`${Aq.isTrialEnrolled}?`,`${Aq.isSubscribed}?`]}]}generatePageRequest(e,t,n){const r=n[Aq.id],o=w(n[Aq.isSubscribed]),s=w(n[Aq.isTrialEnrolled])
if(!a(r))throw new Error(`Unable to map ${t.build()} to a media api url`)
const c=[wj,dj,eG,sG,UB,jF]
e.appleSilicon.isSupportEnabled&&c.push(CG)
let l=new zz(e).includingAttributes(c).includingMacOSCompatibleIOSAppsWhenSupported()
Oi(e)&&(l.enablingFeature(VG),l.includingScopedAttributes(Uj,[yj,zU,DU]),l.includingScopedRelationships(Uj,[Oj])),Ei(e)&&(l.enablingFeature(KD),Ln(l)),Ri(e)&&(l.enablingFeature(M$),xn(l))
const u=R(e)
if(i(u)&&l.addingQuery(zN,u),o){const t=!0,n=lt(e,e.bag.arcadeTrialEnrolledStateRate)
t&&s&&n?l.addingQuery(yF,"trial-enrolled"):l.addingQuery(yF,"subscriber")}else l.addingQuery(yF,"nonsubscriber"),l.includingRelationshipsForUpsell(!1)
l.withIdOfType(r,RU)
const d=t.query[Aq.useReleaseId]
return yq.has(t.host)&&(null==d?void 0:d.length)>0&&(l=l.addingQuery(_b,d),l.isStorePreviewRequest=!0),l.enablingFeature(vR),l.enablingFeature(Lb),l.withSparseCount(C(e)),l.includingScopedSparseLimit(e$,k(e)),l.attributingTo(t.build())}renderGroupingPage(e,t,n,r,i,a,c){return Pg.context(vB,()=>{const i=w(r[Aq.isSubscribed]),c=w(r[Aq.isTrialAvailable]),l=w(r[Aq.isTrialEnrolled]),u={}
u[Aq.isArcade]="true",u[Aq.isSubscribed]=`${i}`,u[Aq.isTrialAvailable]=`${c}`,u[Aq.isTrialEnrolled]=`${l}`,n.additionalShelfParameters=u,n.isArcadePage=!0,n.metricsPageInformation.isCrossfireReferralCandidate=!0
let d=null,f=null
if(!i){const r=zf(e,t.originalGroupingData)
if(r)d=r.marketingItemData
else if(a){Pg.unexpectedNull(EG,xb,"relationships.upsell")
const e=Yf(0,a.get(yR))
e&&(d=e.marketingItemData)}if(s(d)&&s(d.attributes)){const t={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,mercuryMetricsData:Xd(0,d)}
f=xa(e,d,t),s(n)&&o(n.pageTitleEffect)&&0===n.shelves.length&&(n.pageTitleEffect=function(e,t){const n=Sa(e,t,!0),r=Ta(e,t)
return _a(0,n.artworkData||r.artworkData,!0)}(e,d)),uf(n.metricsLocationTracker)}}const p=G4.insertUpsellBreakoutShelfIntoParseContextIfNecessary(f,i,n)
vc(e,t,n)
const h=new Wz(n.shelves)
ni(e,h,n.metricsPageInformation),h.tabTitle=q(t.originalGroupingData,Yj)
const g=q(t.originalGroupingData,Yj)
e.host.clientIdentifier,p||(h.title=g)
const m=new jV(NU)
m.color=G("primaryText"),m.isFallbackStyle=!0,h.titleEffect=n.pageTitleEffect||m,h.presentationOptions=[]
let v=!1
if(n.shelves.length>0){const e=n.shelves[0].contentType===Tx,t=n.shelves[0].contentType===IN,r=n.shelves[0].contentType===RN
v=e||t||r}if(v&&h.presentationOptions.push(WM),!i&&s(f)){h.subscriptionOfferAction=G4.createSubscribeAction(e,f,{id:null,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,targetType:Hj}),h.subscriptionOfferDisplayProperties=new PV(Gj,e.bag.arcadeAppAdamId,OB,null,Gj,null,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId)
const t={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},r={marketingItemData:d}
h.subscriptionLockup=Pu(e,r,t,S$,OB,Ok)}const y={id:"arcade-see-all-games-footer",presentationHints:{},featuredContentId:-1,featuredContentData:null,nativeGroupingShelfId:1,metricsPageInformation:n.metricsPageInformation,metricsLocationTracker:n.metricsLocationTracker,pageGenreId:n.pageGenreId,title:null,shouldFilter:!1,remainingItems:[],isFirstRender:!0,isDeferring:!1,showOrdinals:!1,hasExistingContent:!1,showingPlaceholders:!1,ordinalIndex:1,isSearchLandingPage:n.isSearchLandingPage,isArcadePage:null==n?void 0:n.isArcadePage}
if(this.insertUnifiedMessageShelves(e,h),h.shelves.length>0){const t=G4.groupingArcadeFooterShelfController.createShelf(e,null,n,y,null)
h.shelves.push(t)}if(0===h.shelves.length)throw new Error(`Missing content for Arcade grouping ${JSON.stringify(r)}`)
return h.autoUpsellAction=Gf(e,lN,null,null),Lp(h),h})}static insertUpsellBreakoutShelfIntoParseContextIfNecessary(e,t,n){return Pg.context("insertShelfForUpsellBreakoutIfNecessary",()=>{if(o(e))return t||Pg.unexpectedNull(SG,xb,IN),!1
const r=new $z(IN)
return r.items=[e],r.presentationHints={isFirstShelf:!0},n.shelves.push(r),!0})}static createSubscribeAction(e,t,n){if(o(t))return null
{const r=Gf(e,NI,null,null,n)
return r.title=t.offerButtonAction.title,r}}createTermsAndConditionsShelf(e){return!r(e.bag.termsAndConditionsURL)&&e.client.deviceType,null}supportsDataAugmenting(){return!0}additionalDataKeysNeededForData(e,t,n){if(r(n))return null
const o=_(e,t),i=w(n.parameters[Aq.isSubscribed]),s=zf(e,o)
return!i&&r(s)?new Set([yR]):null}fetchAdditionalDataForKey(e,t){return Pg.context("fetchAdditionalDataForKey",async()=>{let n
return t===yR&&(n=qf(e,S$),Pg.unexpectedNull(SG,TU,"upsellRecovery.marketingItem")),r(n)?null:await Tn(e,n).catch(()=>null)})}insertUnifiedMessageShelves(e,t){t.shelves.length<=0||(t.shelves.splice(1,0,Pc(0,"arcadePageHeader")),t.shelves.splice(6,0,Pc(0,"arcadePageMid")),t.shelves.push(Pc(0,"arcadePageFooter")))}}G4.groupingArcadeFooterShelfController=new C0
const j4={width:1680,height:3636,url:"https://is3-ssl.mzstatic.com/image/thumb/Features123/v4/9a/d4/48/9ad448b5-ddbb-f295-fae3-2a2e69bf5604/source/{w}x{h}{c}.{f}",bgColor:Dv,textColor1:"f7c981",textColor2:"f8a710",textColor3:"c6a067",textColor4:"c6850d"},V4={width:4320,height:3240,url:"https://is3-ssl.mzstatic.com/image/thumb/Features124/v4/57/71/7f/57717f8b-c486-4faf-7558-a4f88186855d/source/{w}x{h}{c}.{f}",bgColor:Dv,textColor1:"fdc97a",textColor2:"f73a03",textColor3:"caa161",textColor4:"c52e02"}
class H4{constructor(){this.$intentKind="ArcadeWelcomePageIntent"}async perform(e,t){return await $p(t,e.url)}}class W4 extends t1{constructor(e,t){super("ArcadeWelcomeBuilder"),t.exportingService(iM,{fetchArcadeWelcomePage:async t=>await $p(e,t.url)})}pageType(){return"arcadeWelcome"}handlePage(e,t,n,r,o,i,s){const a=this.generatePage(e,n,r)
i(t1.createFlowAction(a,this.pageType(),t))}pageRoute(e){return[{hostName:"arcadeWelcomePage",query:[`${Aq.context}?`]}]}generatePage(e,t,n){return function(e,t){return function(e,t){const n={rootPosition:0,locationStack:[]},r=function(e,t){if(ee(t)){const t=new aW
return t.title=e.loc.string("ARCADE_WELCOME_TV_CONTINUE_BUTTON"),t}return Mp(0,e.loc.string("ARCADE_WELCOME_CONTINUE_BUTTON"))}(e,t)
$f(e,r,{id:"arcade-welcome-continue",actionType:Fj,pageInformation:new pX,locationTracker:n,targetType:Hj})
const o=function(e,t){return ee(t)?Mp(0,e.loc.string(OC)):null}(e,t)
o&&$f(e,o,{id:"arcade-welcome-create-family",actionType:Fj,pageInformation:new pX,locationTracker:n,targetType:Hj})
let i=j4,s="oe"
e.client.isPad&&(i=V4,s="og")
const a=new IY(e.loc.string("ARCADE_WELCOME_INDIVIDUAL_TITLE"),e.loc.string("Arcade.Welcome.Family.Description"),[new bY(null,null,Nu(e,i,{useCase:24,cropCode:s}))],r,o)
if(ee(t)){a.nonDismissingContinueAction=Mp(0,e.loc.string(OC)),r.title=a.nonDismissingContinueAction.title
const t=new aW
t.title=e.loc.string(_v),a.dismissingFamilyAction=t,o.title=a.dismissingFamilyAction.title}else a.nonDismissingContinueAction=Mp(0,e.loc.string(OC)),r.title=a.nonDismissingContinueAction.title
return new CY(a,a)}(e,t)}(e,t[Aq.context])}}class q4 extends t1{constructor(){super("FamilyCircleBuilder")}pageType(){return Mj}defaultTab(e){return Gj}handlePage(e,t,n,r,o,i,s){var a
const c=new _H(Gj),l=null!==(a=t.query[zB])&&void 0!==a?a:iv,u=new sW(oj,l,t.query)
c.actions.push(u),i(c)}pageRoute(e){return[{hostName:`${pq}`},{path:`${pq}`}]}}class z4{constructor(){this.$intentKind="ArcadeUpsellGridIntent"}async perform(e,t){return await Fp(t,e.contentDictionary)}}class Y4 extends t1{constructor(e,t){super("MarketingItemUpsellBuilder"),t.exportingService(iM,{fetchUpsellGrid:async t=>await Fp(e,t.contentDictionary)})}pageType(){return IB}pageRoute(e){return[{hostName:`${dq}`,query:[`${Aq.appId}?`,`${Aq.context}?`,`${Aq.includePostSubscribeAttribution}?`],exclusions:[{query:[`${Aq.askToBuyId}`]}]},{path:"arcade/subscribe",query:[`${Aq.appId}?`,`${Aq.context}?`,`${Aq.includePostSubscribeAttribution}?`]},{path:"{countryCode}/arcade/subscribe",query:[`${Aq.appId}?`,`${Aq.context}?`,`${Aq.includePostSubscribeAttribution}?`]}]}handlePage(e,t,n,r,o,i,s){var a
const c=function(e){var t
switch(e){case xI:return Rm
case MI:return lN
case Dm:return xR
case _m:return $I
case FU:return lM
case"topShelfATV":return"arcadeTopShelfATV"
case"topShelfATVClickThrough":return"arcadeTopShelfATVClickThrough"
case uN:return FI
case"editorialItemCanvas":return MR
case PL:return PL
case S$:return S$
case NI:return NI
default:return null!==(t=e)&&void 0!==t?t:lN}}(d(n,Aq.context)),l=d(n,Aq.appId),u=new kY(Gj,c,l),f=new Bq(IB),p=null===(a=e.metricsIdentifiersCache)||void 0===a?void 0:a.getMetricsFieldsForTypes([Dg.user,Dg.client]);(0,Ig.isSome)(p)&&(u.metricsOverlay={...u.metricsOverlay,...p}),f.pageData=u,i(f)}}class J4{constructor(){this.$intentKind="ArcadeSubscriptionDecorationIntent"}async perform(e,t){return await Np(t,e.json)}}class K4 extends t1{constructor(e,t){super("ArcadePurchaseDecorationController"),t.exportingService(Vb,{decorateArcadePurchase:async t=>await Np(e,t.intent)})}handlePage(e,t,n,r,o,i,s){s(new Error(kU))}pageRoute(e){return[]}pageType(){return Mj}}class Z4{constructor(){this.$intentKind="PersonalizedOfferContextIntent"}async perform(e,t){return await Bp(t,e.offerToken)}}class Q4 extends t1{constructor(e,t){super("CompleteCollectionController"),t.exportingService("CMCPersonalizationData",{fetchPersonalizedOfferContext:async t=>await Bp(e,t.offerToken)})}handlePage(e,t,n,r,o,i,s){s(new Error(kU))}pageRoute(e){return[]}pageType(){return Mj}}class X4{constructor(){this.$intentKind="PurchaseDecorationIntent"}async perform(e,t){return await Gp(t,e.json)}}class e5{constructor(){this.$intentKind="PurchasesDecorationIntent"}async perform(e,t){const n=[]
for(const r of e.json)n.push(await Gp(t,r))
return n}}class t5{constructor(){this.$intentKind="BatchPurchaseDecorationIntent"}async perform(e,t){const n=[]
for(const r of e.json)n.push(await Gp(t,r))
const r=n.map(e=>e.buyParams),[o,i]=function(e){const t=[]
for(const n of e)t.push(new FY(n).toRawMap())
const n=function(e){if(0===e.length)return{}
const t={},n=e[0]
for(const r of Object.keys(n)){let o=!0
for(let t=1;t<e.length;t++)if(e[t][r]!==n[r]){o=!1
break}o&&(t[r]=n[r])}return t}(t)
for(const e of t)for(const t of Object.keys(n))delete e[t]
return[t,n]}(r),s=[]
for(let e=0;e<n.length;e++)s.push(new $Y(n[e],o[e]))
return new MY(s,i)}}class n5 extends t1{constructor(e,t){super("PurchaseDecorationController"),t.exportingService(Vb,{decoratePurchase:async t=>await Gp(e,t.intent)})}handlePage(e,t,n,r,o,i,s){s(new Error(kU))}pageRoute(e){return[]}pageType(){return Mj}}class r5{constructor(){this.$intentKind="IconArtworkIntent"}async perform(e,t){return await jp(t,e.adamIds)}}class o5 extends t1{constructor(e,t){super("IconLookupController"),t.exportingService("ContentData",{fetchIconArtwork:async t=>await jp(e,t.adamIds)})}handlePage(e,t,n,r,o,i,s){s(new Error(kU))}pageRoute(e){return[]}pageType(){return Mj}}class i5 extends t1{constructor(){super("ContentLink")}pageType(){return Jj}handlePage(e,t,n,o,s,a,c){r(d(n,Aq.path))?c(new Error(`Unhandled search url: ${t}`)):e.network.fetch({url:t.build(),method:b$}).then(n=>{this.hasGotoURLInResponse(e,n)?a(new aW):i(n.url)?e.required(C2).fetchAction(e,n.url,s).then(a,c):c(new Error(`Unhandled search url: ${t}`))}).catch(()=>{c(new Error(`Unhandled search url: ${t}`))})}pageRoute(e){return[{hostName:"search.itunes.apple.com",path:"WebObjects/MZContentLink.woa/wa/link",query:[Aq.path]}]}hasGotoURLInResponse(e,t){const n=t.body
if((0,Ig.isNothing)(n)||0===n.length)return!1
try{const t=g(e.plist.parse(n)),r=d(t,FC),o=d(t,NC)
return!!(r===BC&&(0,Ig.isSome)(o)&&o.length>0)}catch{return!1}}}class s5 extends t1{constructor(){super("ExperimentLink")}pageType(){return Mj}handlePage(e,t,n,r,o,i,s){const a={url:t.toString()}
e.network.fetch(a).then(e=>{if(e.status>=200&&e.status<300){const e=new XH(hj)
e.title="You have been enrolled in the AB test",e.message=`Test ${t.query.ab2} is now active on your device.`,e.buttonTitles=["OK"],e.buttonActions=[new _H(lG)],i(e)}else s(new Error(`unexpected response status: ${e.status} from ${e.url}`))}).catch(s)}pageRoute(e){return[{protocol:kW,hostName:"xp.apple.com",path:"register",query:["ab2"]}]}}const a5=[zj,FE]
class c5 extends t1{constructor(){super("FallbackActionBuilder")}handlePage(e,t,n,i,s,a,c){(async function(e,t,n,i){var s
const a=t.query[_G]
switch(a){case dG:const n=new Bq(TB)
n.presentationContext=ZB,n.animationBehavior=vF
const c=t.query[UR]
return c?n.pageUrl=c:t.query[Gm]?n.pageUrl=xq.fromComponents(null,a,null,{continuation:t.query[Gm]}).toString():n.pageUrl=a,await Promise.resolve(n)
case jm:const l=new Bq(TB)
return l.presentationContext=ZB,l.animationBehavior=vF,l.pageUrl=function(e){let t=e.bag.createAccountUrl
return(r(t)||typeof t!==vj)&&(t=KI),new xq(t)}(e).build(),await Promise.resolve(l)
case $L:let u,d=[]
{u=GR
const e=new Bq(dG)
e.presentationContext=ZB,e.animationBehavior=rG
const t=new Bq(Vm)
t.animationBehavior=rG,d=[e,t]}const f=new _H(u)
return f.actions=d,await Promise.resolve(f)
case jR:const p=t.query[UR]
if(p.length>0){const t={url:p,signingStyle:jN}
return e.network.fetch(t),await Promise.resolve(new aW)}return await Promise.reject(new Error("Original url is missing when creating deep-link for checkForPreorders."))
case hM:const h=new Bq(TB)
h.presentationContext=ZB,h.animationBehavior=vF
const w=new xq(a)
return t.query[I$]&&t.query[I$].length>0&&w.param(Aq.code,t.query[I$]),h.pageUrl=w.build(),await Promise.resolve(h)
case wM:const g=new Bq(TB)
return g.presentationContext=ZB,g.animationBehavior=vF,g.pageUrl=a,await Promise.resolve(g)
case Hm:const m=new Bq(TB)
return m.presentationContext=ZB,m.animationBehavior=vF,m.pageUrl="charity",await Promise.resolve(m)
case sj:let v=t.query[gN]
if(v||(v=null!==(s=t.query.q)&&void 0!==s?s:t.query[JI]),v&&v.length>0){const t=v
if(v=v.replace(/\+/g," ").trim(),t.endsWith("+")&&v.length>0&&(v+="+"),o(v))return await Promise.reject(new Error("Empty search term."))
const n=qe(e,Wp(e,{term:v,origin:gM})).toString(),r=new AQ(v,v,n,gM,null,null,null,i)
{const e=new Bq(sj)
return e.pageData=r,await Promise.resolve(e)}}{const e=new _H(sj)
return await Promise.resolve(e)}}return await Promise.reject(new Error(`FlowAction was not able to be created for this action URL: ${t}`))})(e,t,0,s).then(a,c)}pageRoute(e){return[{query:[`${Aq.action}=account`]},{query:[`${Aq.action}=signup`]},{query:[`${Aq.action}=purchased`]},{query:[`${Aq.action}=checkForPreorders`]},{query:[`${Aq.action}=redeem`]},{query:[`${Aq.action}=gift`]},{query:[`${Aq.action}=donate`]},{query:[`${Aq.action}=search`]}]}pageType(){return Mj}}class l5 extends t1{constructor(){super("GameCenterProfileLinkController")}defaultTab(e){return Gj}pageType(){return Mj}handlePage(e,t,n,r,o,i,s){let a=!1
if(e.host.clientIdentifier===rH)a=!0
else for(const t of e.bag.tabsStandard)if("ocelot"===d(t,"id")){a=!0
break}const c=new _H(a?Gj:MU),l=n[Aq.id]||"GameCenter.localPlayer"
c.actions.push(new dW(l)),i(c)}pageRoute(e){return[{identifier:Wb,path:`/${sq}`,query:[`${Aq.id}?`]}]}}class u5 extends t1{constructor(){super("LibraryLink")}pageType(){return Mj}handlePage(e,t,n,r,o,i,s){const a=`https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewGenre?id=${t.query.g}&mt=8`
e.required(C2).fetchAction(e,a,o).then(i,s)}pageRoute(e){return[{query:[`${Aq.action}=library-link`]}]}}class d5 extends t1{constructor(){super("LongUrlBuilder")}pageType(){return Mj}handlePage(e,t,n,r,o,a,c){const l=t.query[UR];(null==l?void 0:l.length)>0?e.network.fetch({url:l,method:b$,signingStyle:jN}).then(t=>{let n
const r=t.headers["Content-Type"]
if(t.ok&&t.redirected&&i(t.url))n=t.url
else{if(t.ok&&l!==t.url)return e.console.log(`[LongUrlBuilder] Url redirect was already processed. Original url: ${l}. Redirected url: ${t.url}`),void a(new aW)
if(t.ok&&s(r)&&-1!==r.toLowerCase().indexOf("text/xml")){const r=g(e.plist.parse(t.body)),o=d(r,FC),i=d(r,NC)
o===BC&&i&&(n=i)}}(null==n?void 0:n.length)>0?e.required(C2).fetchAction(e,n,o).then(a,c):c(new Error(`Unable to map long url for: ${l}`))},e=>{c(new Error(`Unable to fetch long url: ${l}`))}):c(new Error("Original url is missing when creating deep-link for checkForLongUrl."))}pageRoute(e){return[{query:[`${Aq.action}=checkForLongUrl`]}]}}class f5 extends t1{constructor(){super("MultiplexingBuilder")}pageType(){return Mj}handlePage(e,t,n,r,o,i,s){const a=new zz(e).withIdOfType(n.id,wL)
Tn(e,a).then(async t=>await this.actionFromMultiplexResponse(e,t)).then(i,s)}pageRoute(e){return[{protocol:kW,path:"WebObjects/MZStore.woa/wa/viewFeature",query:[Aq.id]}]}async actionFromMultiplexResponse(e,t){const n=p(t,"results.target"),r=p(t,"results.target-link")
return n?await this.targetDataToAction(e,n):r?await this.targetLinkDataToAction(r):null}async targetDataToAction(e,t){const n=d(t,Mx)
if(!n)return null
const r=fa(e,n)
return await e.required(C2).fetchAction(e,r,null)}async targetLinkDataToAction(e){const t=d(e,Sj),n=new xq(t),r=this.addProtocolToURLIfNeeded(n).toString()
return await Promise.resolve(new xH(r,!1))}addProtocolToURLIfNeeded(e){return e.protocol||(e.protocol=SR),e}}class p5 extends t1{constructor(){super("NotificationSettingsLinkController")}pageType(){return Mj}handlePage(e,t,n,r,o,i,s){i(new Bq(Fv))}pageRoute(e){const t=[]
return t.push({path:"notifications/settings"}),t}}class h5 extends t1{constructor(){super("TabSelectionBuilder")}pageType(){return Mj}handlePage(e,t,n,r,o,i,s){var a
const c=t.pathComponents(),l=c.length-1
let u,d
u=l>=0?c[l]:t.query[_G],null!=u&&this.currentDeviceSupportsUrlAction(e,u)&&(d=new _H(u),d.popToRoot=null!==(a=t.query.popToRoot===zG)&&void 0!==a&&a),void 0===d&&(d=new _H(Dj)),i(d)}pageRoute(e){const t=[Dj,MU,zj,wF,NN,PR,bR,IR,FL,Gj,y$],n=[]
for(const e of t){const t=`${Aq.action}=${e}`,r=`${e}`
n.push({query:[t]}),n.push({path:r}),n.push({path:`{countryCode}/${r}`})}return n.push({path:"{countryCode}/ipad"}),n.push({path:"{countryCode}/iphone"}),h5.supportedIOSTabs.forEach(e=>{n.push({path:`{countryCode}/ipad/${e}`}),n.push({path:`{countryCode}/iphone/${e}`})}),n}currentDeviceSupportsUrlAction(e,t){return!!h5.supportedIOSTabs.includes(t)}}h5.supportedMacTabs=[wF,Gj,NN,PR,bR,IR,FL,sj],h5.supportedIOSTabs=[Dj,zj,MU,Gj,sj],h5.supportedTvTabs=[wF,zj,MU,Gj,sj],h5.supportedVisionOSTabs=[y$,Gj,sj]
class w5 extends t1{constructor(){super("PassbookBuilder")}pageType(){return Mj}handlePage(e,t,n,r,o,i,s){const a=this.assemblePassbookRoomURL(e,t).build()
e.required(C2).fetchAction(e,a,o).then(i,s)}pageRoute(e){return[{query:[`${Aq.action}=passbook`]}]}assemblePassbookRoomURL(e,t){let n=e.bag.passbookMainURL
return null!=n&&typeof n===vj||(n="https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewFeature?id=717384713&mt=8"),new xq(n)}}class g5 extends t1{constructor(){super("WatchCategoryBuilder")}pageType(){return Mj}handlePage(e,t,n,r,o,i,s){if(e.client.deviceType!==Bj)return void s(new Error(`Unsupported url for current platform: ${t}`))
const a=e.bag.watchAppsGroupingURL
e.required(C2).fetchAction(e,a,o).then(e=>{const t=new _H(zj)
t.actions=[e],i(t)},s)}pageRoute(e){return[{query:[`${Aq.action}=watchCategory`]}]}}class m5 extends o1{}const v5=[YN,LU,xj,xM,hx],y5=[YN,LU,zC,xj,LM,TD,fx,px],A5=[YN,YC,LU,LM]
class T5{}class S5 extends t1{constructor(){super("DeveloperBuilder")}handlePage(e,t,n,r,o,i,s){const c=function(e,t){const n=pa(t)
if(!a(n))throw new Error(`Unable to map ${t.build()} to a media api url`)
return new zz(e).withIdOfType(n,SU).includingAdditionalPlatforms(O(e)).includingRelationships(ga(e)).includingAttributes(wa(e)).includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes($e(e)).attributingTo(t.build())}(e,t)
Tn(e,c).then(t=>zp(e,t)).then(e=>t1.createFlowAction(e,Jj,t)).then(i,s)}pageRoute(e){return[{protocol:kW,path:`/${WW}/{id}`},{protocol:kW,path:`/${WW}/{developerName}/{id}`},{protocol:kW,path:`/{countryCode}/${WW}/{developerName}/{id}`},{protocol:kW,path:`/{countryCode}/${qW}/{developerName}/{id}`},{protocol:kW,path:`/${DW}/viewArtist`,query:[Aq.id,`${Aq.v0}?`]}]}handleShelf(e,t,n,r,i,s){const a=n[uU],c=JSON.parse(a),l=new zz(e,c.remainingData).includingAdditionalPlatforms(O(e)).includingAttributes(wa(e)).includingMacOSCompatibleIOSAppsWhenSupported()
Tn(e,l).then(t=>function(e,t,n){const r=Zp(e,n.title,n.developerId,L(t),n.relationship,n.contentType,n.lockupListOptions,n.lockupListOptions.lockupOptions.metricsOptions.pageInformation,n.lockupListOptions.lockupOptions.metricsOptions.locationTracker,n.roomUrl,(0,Ig.isSome)(n.roomUrl))
return r.mergeWhenFetched=!0,!n.hasExistingContent&&o(r.items)&&(r.isHidden=!0),r}(e,t,c)).then(i,s)}shelfRoute(e){return[{protocol:CW,path:`/${WW}/${RW}/{token}`}]}pageType(){return Jj}}class P5 extends t1{constructor(){super("DeveloperHrefBuilder")}handlePage(e,t,n,r,o,i,s){const a=n[Aq.href],c=function(e,t){return new zz(e,t).includingAdditionalPlatforms(O(e)).includingAttributes(wa(e)).includingRelationships(ga(e)).includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes($e(e))}(e,a)
Tn(e,c).then(t=>zp(e,t)).then(e=>t1.createFlowAction(e,Jj,t)).then(i,s)}pageRoute(e){return[{protocol:CW,path:`/${WW}/${tq}`,query:[Aq.href]}]}pageType(){return Jj}}class b5 extends i1{constructor(){super("DeveloperRoomBuilder")}pageRoute(e){return[{protocol:CW,path:`/${WW}/${UW}/{token}`}]}paginationRoute(e){return[{protocol:CW,path:`${this.paginationPath}`,query:[`${Aq.token}`]}]}generatePageRequest(e,t,n){const o=n[uU],i=JSON.parse(o)
if(r(i))throw new Error(`Unable to map ${t.build()} to a media api url`)
return new zz(e,i.url).withSparseLimit(i.maxPerPage).includingAdditionalPlatforms(O(e)).includingAttributes(wa(e))}renderPage(e,t,n,r){return Pg.context(vB,()=>{const r=n[uU],o=JSON.parse(r),i=ei(e,fU,`${o.developerId}_${o.relationshipId}`,t)
o.metricsPageInformation=i,o.metricsLocationTracker={rootPosition:0,locationStack:[]}
const s=this.pageWithContent(e,t,o)
return s.title=o.title,this.configurePaginationForPage(s,o,t.next),ni(e,s,i),s})}generatePaginationRequest(e,t,n,r){var o
const i=r,a=ot(0,i)
let c
return s(a)?c=new zz(e,a):(null===(o=i.nextHref)||void 0===o?void 0:o.length)>0&&(c=new zz(e,i.nextHref).withSparseLimit(i.maxPerPage)),c.includingAdditionalPlatforms(O(e)).includingAttributes(wa(e)),c}renderPaginatedPage(e,t,n){const r=n,o=s(r.remainingContent),i=this.pageWithContent(e,t,r,!o),a=it(0,r)
return this.configurePaginationForPage(i,a,o?r.nextHref:t.next),i}configurePaginationForPage(e,t,n){const r=(null==n?void 0:n.length)>0,o=s(t.remainingContent)
r||o?(t.nextHref=n,t.url=`${this.paginationUrl}?${Aq.token}=${JSON.stringify(t)}`,e.nextPage=t):e.nextPage=null}}e(377)
class I5 extends n1{constructor(){super("EditorialPageController")}defaultPlatforms(e){return O(e)}prepareRequest(e,t,n,r,o){super.prepareRequest(e,t,n,r,o)
const s=r.pathname===`/${cq}/${RW}`
let a
t.includingScopedRelationships("editorial-shelves",[qj]).includingScopedRelationships(aU,[xD]),s?t.includingAssociateKeys(zj,[GB]).includingAssociateKeys(_j,[GB]):t.includingRelationships([cx]).withSparseCount(I5.pageSparseCount).withSparseLimit(I5.pageSparseLimit).includingAssociateKeys(Sk,[GB]),Xp(e,t),a=r.query[Aq.context]||R(e),i(a)&&t.addingQuery(zN,a)}generatePageRequest(e,t,n){let r
r=t.host===wq?e.bag.safariExtensionsEditorialPageId:t.query[Aq.id]||n[Aq.id]
const i=n[Aq.name]
if(o(r)&&o(i))throw new Error(`Unable to map ${t.build()} to a media api url`)
const s=new zz(e).forType(aU)
return(null==r?void 0:r.length)>0&&s.withIdOfType(r,aU),(null==i?void 0:i.length)>0&&s.addingQuery(Aq.name,i),s.attributingTo(t.build())}pageRoute(e){return[{protocol:CW,path:`${cq}`,query:[`${Aq.name}`,`${Aq.isArcade}?`]},{protocol:CW,path:`${cq}`,query:[`${Aq.id}`,`${Aq.isArcade}?`]},{protocol:kW,path:"/{countryCode}/editorial-page/id{id}"},{protocol:kW,path:"/editorial-page/id{id}"},{protocol:kW,path:"/{countryCode}/{platform}/editorial/{id}"},{protocol:kW,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/editorial-pages/{id}",query:[`${Aq.name}?`,`${Aq.isArcade}?`]},{path:"{apiVersion}/{realm}/editorial/{countryCode}/editorial-pages/{id}",query:[`${Aq.name}?`,`${Aq.isArcade}?`]},{path:"{apiVersion}/editorial/{countryCode}/editorial-pages/{id}",query:[`${Aq.name}?`,`${Aq.isArcade}?`]},{protocol:kW,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/editorial-pages/{id}",query:[`${Aq.name}?`,`${Aq.isArcade}?`]},{path:"{apiVersion}/{realm}/editorial/editorial-pages/{id}",query:[`${Aq.name}?`,`${Aq.isArcade}?`]},{path:"{apiVersion}/editorial/editorial-pages/{id}",query:[`${Aq.name}?`,`${Aq.isArcade}?`]}]}pageType(){return Jj}renderPage(e,t,n,a,c,l){return Pg.context("renderEditorialPage",()=>{var a
const c=_(e,t),l=se(c,cx)
if(!s(l))return null
const u=ei(e,"Editorial",c.id,t),d={rootPosition:0,locationStack:[]},f=Ar(e)
u.recoMetricsData=ef(u.recoMetricsData,null,f)
const p=kn(t),h=w(n,Aq.isArcade),g=w(n[Aq.isSubscribed]),m=[]
let v=null,y=null
i(c.attributes)&&(v={id:c.id,type:c.type,attributes:c.attributes,relationships:c.relationships})
for(const t of l){const n=m.length,r=bh(e,v.id,t,h,n,u,d),i=Dh(e,v,r)
if(!o(i)){if(0===m.length){const e=i.presentationHints
i.presentationHints={...e,isFirstShelf:!0}}h&&!g&&i.contentType===IN&&(y=_h(e,r)),m.push(i)}}const A=h?new Wz(m):new Gz(m)
A.title=q(c,nU),A.shareAction=this.shareSheetActionFromData(e,c),A.pageRefreshPolicy=En(e,p),h&&i(y)&&(A.subscriptionLockup=y),h&&(u.isCrossfireReferralCandidate=!0),ni(e,A,u)
const T=(null===(a=m[m.length-1])||void 0===a?void 0:a.contentType)===Ek
if(e.client.deviceType!==Vj&&"tv"!==e.client.deviceType&&!T){const t=e.bag.termsAndConditionsURL
if(!r(t)){const n=Sc(e,t)
m.push(n)}}if(m.length>0){const e=m[0].contentType===Tx,t=m[0].contentType===IN,n=m[0].contentType===RN;(e||t||n)&&A.presentationOptions.push(WM)}return Lp(A),A})}shelfRoute(e){return[{protocol:CW,path:`/${cq}/${RW}/`,query:[`${Aq.token}`]}]}generateShelfRequest(e,t,n){const r=n[Aq.token],o=JSON.parse(decodeURIComponent(r)),i=s(o.remainingItems),a=!i&&(0,bg.isSome)(o.recommendationsHref)&&o.recommendationsHref.length>0
if(i){const t=o.remainingItems,n=new zz(e,t,!0,[GB])
return We(e,n,t),n}if(a){const t=new zz(e,o.recommendationsHref)
return Oi(e)&&(t.enablingFeature(VG),t.includingMetaKeys(e$,[_x,JD]),t.includingScopedAttributes(Uj,[yj,zU,DU]),t.includingScopedRelationships(Uj,[Oj])),Ri(e)&&(t.enablingFeature(M$),xn(t)),t}return null}renderShelf(e,t,n){var i
const a=n[Aq.token],c=JSON.parse(decodeURIComponent(a)),l=s(c.remainingItems),u=!l&&(null===(i=c.recommendationsHref)||void 0===i?void 0:i.length)>0
if(c.isFirstRender=!1,l)c.remainingItems=this.buildHydratedShelfItems(e,c.remainingItems,t)
else if(u){c.data={...c.data,..._(e,t)}
const n=se(c.data,qj)
c.remainingItems=s(n)?n:[],Ih(e,c.data,c)}const d=Dh(e,void 0,c)
return o(d)&&!c.hasExistingContent?this.makeHiddenShelf():(function(e,t,n){if(!o(n.originalPlaceholderShelfImpressionMetrics))if(r(t.impressionMetrics))t.impressionMetrics=n.originalPlaceholderShelfImpressionMetrics
else for(const e in n.originalPlaceholderShelfImpressionMetrics.fields)Object.prototype.hasOwnProperty.call(n.originalPlaceholderShelfImpressionMetrics.fields,e)&&(t.impressionMetrics.fields[e]=n.originalPlaceholderShelfImpressionMetrics.fields[e])}(0,d,c),!c.hasExistingContent&&o(d.items)&&(d.isHidden=!0),d)}buildHydratedShelfItems(e,t,n){var r,o,i,s
const a=new Map,c=L(n)
for(const t of c)a[this.dataMapKey(e,t.type,t.id)]=t
const l=[]
for(const n of t){const t=a[this.dataMapKey(e,n.type,n.id)]
if((0,bg.isSome)(t)){const c=Ht(0,n)
if((0,bg.isSome)(c)){const n=a[this.dataMapKey(e,GB,c.id)]
if((0,bg.isSome)(n)){const e=null!==(r=t.meta)&&void 0!==r?r:{},a=null!==(o=m(e.associations))&&void 0!==o?o:{},c=null!==(i=m(a[GB]))&&void 0!==i?i:{},l=null!==(s=m(n))&&void 0!==s?s:{}
c.data=[l],a[GB]=c,e.associations=a,t.meta=e}}l.push(t)}}return l}dataMapKey(e,t,n){return`${t}_${n}`}makeHiddenShelf(){const e=new $z(W$)
return e.isHidden=!0,e}shareSheetActionFromData(e,t){var n
const r=q(t,Sj),s=function(e,t,n,r,i,s){return Pg.context("shareSheetDataForGenericPage",()=>{if(o(n))return null
const e=new xV(t,r,s)
return new MV(e,n,null)})}(0,q(t,nU),r,e.loc.string("SHARE_EDITORIAL_PAGE_SUBTITLE"),0,null===(n=ql(e,t,gm.EditorialPage))||void 0===n?void 0:n.artwork)
if(!i(s))return null
const a=function(e,t){const n=[]
if((null==t?void 0:t.length)>0){const r=fs(e,t)
i&&n.push(r)}return n}(e,r)
return new tW(s,a)}}I5.pageSparseCount=5,I5.pageSparseLimit=12
class C5 extends n1{constructor(){super("EditorialShelfCollectionPageController")}defaultPlatforms(e){return O(e)}defaultAttributes(e){const t=[wj,dj,eG,sG,UB,jF,H$,pG]
return e.appleSilicon.isSupportEnabled&&t.push(CG),t}pageType(){return Jj}pageRoute(e){return[{protocol:kW,path:`WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/editorial-shelves-collection/{${Aq.shelfId}}`},{protocol:kW,path:`{apiVersion}/{realm}/editorial/{countryCode}/editorial-shelves-collection/{${Aq.shelfId}}`},{protocol:kW,path:`{apiVersion}/editorial/{countryCode}/editorial-shelves-collection/{${Aq.shelfId}}`}]}generatePageRequest(e,t,n){if(o(n[Aq.shelfId]))throw new Error(`Unable to map ${t.build()} to a media api url`)
return new zz(e).forType("editorial-shelves-collection").attributingTo(t.build())}prepareRequest(e,t,n,r,o){super.prepareRequest(e,t,n,r,o),t.includingRelationships([qj]).includingScopedRelationships(aU,[xD]).includingAssociateKeys(Sk,[GB]),Xp(e,t)}renderPage(e,t,n,r,o,i){return Pg.context("renderEditorialShelfCollectionPage",()=>{const n=_(e,t)
if(!s(n))return null
const r=ei(e,fU,n.id,t),o=kn(t),i=(Jt(0,n),bh(e,void 0,n,!1,0,r,{rootPosition:0,locationStack:[]},!1,null)),a=[],c=Dh(e,void 0,i)
c.title=null,c.eyebrow=null,c.isHorizontal=!1
const l=q(n,nU)
if((0,Ig.isSome)(l)){const e=new $z(Sx)
let t
e.id=Dk,t=new ZV(null,l,q(n,HB)),e.items=[t],a.push(e)}a.push(c)
const u=new Gz(a)
return u.pageRefreshPolicy=En(e,o),ni(e,u,r),u})}}const k5="com.apple.Arcade.ArcadeHardware1",O5="com.apple.Arcade.TrialEligible1",E5=[k5,O5]
class R5{constructor(){this.$intentKind="EngagementEventIntent"}async perform(e,t){return await xh(t,e)}}class D5{constructor(){this.$intentKind="BadgingEventIntent"}async perform(e,t){return await Mh(t,e)}}class _5 extends t1{constructor(e,t){super("UserEngagementController"),t.exportingService("AppStoreEngagement",{fetchEngagementTask:async t=>await xh(e,t),fetchBadgingTask:async t=>await Mh(e,t)})}handlePage(e,t,n,r,o,i,s){s(new Error(kU))}pageRoute(e){return[]}pageType(){return Mj}}class L5 extends B4{constructor(){super("GroupingPageBuilder")}defaultPlatforms(e){return O(e)}defaultAttributes(e){const t=[wj,eG,sG,H$]
return e.appleSilicon.isSupportEnabled&&t.push(CG),t}prepareRequest(e,t,n,r,o){if(super.prepareRequest(e,t,n,r,o),n===hm.Page){const n=r.query.id
let o,i
const s=r.pathComponents();-1!==s.indexOf(HR)?o=n:-1!==s.indexOf(vG)?o=pa(r):i=n,a(i)?t=t.withIdOfType(i,RU):a(o)&&(t=t.addingQuery(vG,o)),t.withSparseCount(C(e)),t.includingScopedSparseLimit(e$,k(e))}t.includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes($e(e)),Oi(e)&&(t.enablingFeature(VG),t.includingMetaKeys(e$,[_x,JD]),t.includingScopedAttributes(Uj,[yj,zU,DU]),t.includingScopedRelationships(Uj,[Oj])),Ei(e)&&(t.enablingFeature(KD),Ln(t)),Ri(e)&&(t.enablingFeature(M$),xn(t)),t.enablingFeature(vR),e.bag.enableFeaturedCategoriesOnGroupings&&t.enablingFeature(Lb),e.bag.enableCategoryBricksOnGroupings&&t.enablingFeature("categoryBricks")
const s=r.query[Aq.context]||R(e)
i(s)&&t.addingQuery(zN,s)
const c=r.query[Aq.useReleaseId]
r.host===lq&&(null==c?void 0:c.length)>0&&(t.isStorePreviewRequest=!0,t=t.addingQuery(_b,c))}pageType(){return Jj}pageRoute(e){return[{protocol:kW,path:`/${DW}/${xW}`,query:[Aq.id,`${Aq.context}?`]},{hostName:lq,path:`/WebObjects/{storePreviewInstance}/wa/${xW}`,query:[Aq.id,`${Aq.useReleaseId}?`]},{protocol:kW,path:`/{countryCode}/${NW}/{genreName}/{id}`},{protocol:kW,path:`/{countryCode}/{platform}/${xW}/{id}`},{protocol:kW,path:`/${DW}/${BW}`,query:[Aq.id]},{hostName:lq,path:`/WebObjects/{storePreviewInstance}/wa/${BW}`,query:[Aq.id,`${Aq.useReleaseId}?`]},{protocol:kW,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}"},{protocol:kW,path:"{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}"},{protocol:kW,path:"{apiVersion}/editorial/{countryCode}/groupings/{id}"},{protocol:kW,hostName:`${wq}`}]}generatePageRequest(e,t,n){var r
let o,s,c=t.query.id
if(t.host===wq&&(null===(r=e.bag.safariExtensionsGroupingURL)||void 0===r?void 0:r.length)>0){const n=xq.from(e.bag.safariExtensionsGroupingURL)
i(n)&&(c=pa(n),t.query.id=c)}const l=t.pathComponents()
if(-1!==l.indexOf(HR)?o=c:-1!==l.indexOf(vG)?o=pa(t):s=c,!a(s)&&!a(o))throw new Error(`Unable to map ${t.build()} to a media api url`)
const u=[wj,dj,eG,sG,UB,jF]
return e.appleSilicon.isSupportEnabled&&u.push(CG),new zz(e).forType(RU).includingAttributes(u).includingRelationshipsForUpsell(!0).attributingTo(t.build())}renderGroupingPage(e,t,n,o,i,s,a){return Pg.context(nA,()=>{if(n.pageGenreId=J(t.originalGroupingData,vG)||(r(o=q(t.originalGroupingData,"chartUrl"))?null:f(xq.from(o).query,vG)),vc(e,t,n),"tv"!==e.client.deviceType){const t=Tc(e,n.metricsPageInformation,n.metricsLocationTracker)
t&&n.shelves.push(t)}var o
if(e.client.deviceType!==Vj&&"tv"!==e.client.deviceType){const t=e.bag.termsAndConditionsURL
if(!r(t)){const r=Sc(e,t)
n.shelves.push(r)}}const i=this.groupingPageTitleForData(e,t.originalGroupingData,n.pageGenreId),s=new Gz(n.shelves)
switch(e.client.deviceType){case"tv":s.title=i
break
case Vj:s.title=i,s.presentationOptions=[AR]
break
default:s.title=i,39===n.pageGenreId||(n.pageGenreId,0)?s.presentationOptions=["prefersRevealNavigationBarOnMouseOver"]:s.presentationOptions=[AR]}return s.pageRefreshPolicy=En(e,null==n?void 0:n.refreshController),ni(e,s,n.metricsPageInformation),this.insertUnifiedMessageShelves(e,s,n.pageGenreId),Lp(s),s})}groupingPageTitleForData(e,t,n){let r=null
switch(n){case 36:r=e.host.clientIdentifier===eH?e.loc.string("GROUPING_APPS"):e.loc.string("GROUPING_APP_STORE","App Store")
break
case 39:r=e.loc.string(qb)
break
default:r=Du(0,t)}return r}macDiscoverPageTitleForData(e,t){const n=re(t,yF)
if(i(n)&&i(n.data))for(const e of n.data){const t=q(e,Yj),n=J(e,SB),r=q(e,uU)
if((null==t?void 0:t.length)>0&&i(n)&&s(r)&&r===vU&&414===n)return t}return e.loc.string(qb)}shelfForHeaderButtons(e){const t=new $z(_G),n=[],r=new Bq(sj)
return r.title=e.loc.string("SEARCH",dU),r.artwork=ce(e,kx),n.push(r),t.items=n,t}insertUnifiedMessageShelves(e,t,n){if(!(t.shelves.length<=0))switch(n){case 36:t.shelves.splice(0,0,Pc(0,"appsPageHeader")),t.shelves.splice(6,0,Pc(0,"appsPageMid")),t.shelves.push(Pc(0,"appsPageFooter"))
break
case 6014:t.shelves.splice(0,0,Pc(0,"gamesPageHeader")),t.shelves.splice(6,0,Pc(0,"gamesPageMid")),t.shelves.push(Pc(0,"gamesPageFooter"))}}}class x5 extends t1{constructor(){super(tS)}pageRoute(e){return[{protocol:CW,path:`${aq}`,query:[Aq.onDeviceRecommendationsUseCase,Aq.token]}]}handlePage(e,t,n,r,o,i,s){const a=n[Aq.onDeviceRecommendationsUseCase]
ur(e,a,Kj).then(r=>{const o=JSON.parse(n[Aq.token]),s=new o1
s.title=o.title
const a=this.makePage(e,r.dataContainer,r.recoMetrics,s),c=new Bq(Jj,t.build())
c.pageData=a,i(c)}).catch(e=>{s(e)})}makePage(e,t,n,r){const o=Ar(e)
r.url=this.paginationUrl,r.metricsPageInformation=ei(e,fU,"onDevicePersonalizationSeeAll",t),r.metricsPageInformation.recoMetricsData=ef(n,null,o),r.shouldFilter=!1,r.metricsLocationTracker={rootPosition:0,locationStack:[]}
const i=new $z(r1),s={id:null,kind:null,softwareType:null,targetType:tj,title:r.title,pageInformation:r.metricsPageInformation,locationTracker:r.metricsLocationTracker,idType:cU,recoMetricsData:n}
gf(e,i,s),rf(0,s,r.title),i.isHorizontal=!1,i.shouldFilterApps=r.shouldFilter
const a=L(t)
r.remainingContent=[],i.items=Iu(e,a,{contentUnavailable:(e,t)=>(r.remainingContent=st(0,a,e),!0),lockupOptions:{metricsOptions:{pageInformation:s.pageInformation,locationTracker:s.locationTracker},clientIdentifierOverride:r.clientIdentifierOverride,artworkUseCase:Fu(0,i.contentType)}})
const c=new Gz([i])
return c.title=r.title,r.remainingContent.length&&(c.nextPage=r),ni(e,c,r.metricsPageInformation),c}handleShelf(e,t,n,r,o,i){i(new Error(zb))}shelfRoute(e){return[]}pageType(){return Jj}}class M5{constructor(){this.$intentKind="InAppPurchaseInstallPageIntent"}async perform(e,t){return await $h(t,e.url)}}class $5 extends t1{constructor(e,t){super("InAppPurchaseInstallController"),t.exportingService(Yb,{fetchInstallPage:async t=>await $h(e,t.url)})}handlePage(e,t,n,r,o,i,s){const a=n[Aq.id],c=n[Tq],l=new zz(e).withIdOfType(c,jG)
Tn(e,l,{}).then(t=>{const n=function(e,t,n){const r={pageId:n||"",pageType:"IAPInstallPage",parentId:zd(t)}
return new pX(r)}(0,a,c),r=_(e,t)
let o
const i={metricsOptions:{pageInformation:n,locationTracker:{rootPosition:0,locationStack:[]}},artworkUseCase:1}
c&&r&&(o=gu(e,r,i),o.theme=kj)
const s=ie(e,r,Oj)
let l
a&&s&&(l=wu(e,s,i))
const u=new jz
u.isComplete=!0,u.lockup=o,u.parentLockup=l
const d=At(e,r)
return u.preInstallOfferDescription=mi(e,d),function(e,t,n){ni(e,t,n)}(e,u,n),u}).then(e=>t1.createFlowAction(e,Jk,t)).then(i,s)}pageRoute(e){return[{protocol:CW,path:`/${jW}/${LW}`,query:[`${Aq.id}`,`${Tq}?`]}]}pageType(){return Jk}}class F5 extends t1{constructor(e,t){super("MetricsLinterController"),t.exportingService("Metrics",{async lintEvent(t){const n=ht(e).makeEvent(e,t.fields)
return await Promise.resolve(n)}})}handlePage(e,t,n,r,o,i,s){s(new Error(kU))}pageRoute(e){return[]}pageType(){return Mj}}class N5{constructor(e,t,n,r){this.name=e,this.url=t,this.artwork=n,this.roomUber=r}}class B5 extends AV{constructor(e,t){super(),this.apps=e,this.appsToAlwaysShow=t}}class U5{constructor(){this.$intentKind="MSOProviderDataIntent"}async perform(e,t){return await Fh(t,e.providerAdamId)}}class G5{constructor(){this.$intentKind="MSOPageIntent"}async perform(e,t){return await Nh(t,e)}}class j5 extends t1{constructor(e,t){super("MSOBuilder"),t.exportingService("MSOData",{fetchProviderData:async t=>await Fh(e,t.providerAdamId),fetchPage:async t=>await Nh(e,t)})}handlePage(e,t,n,r,o,i,s){const a=function(e){const t=e[kq]
return t?t.split(","):[]}(n),c=t.removeParam(kq),l=function(e,t){return Bh(e,pa(t))}(e,c)
Tn(e,l).then(t=>Uh(e,t,a)).then(e=>t1.createFlowAction(e,bx,t)).then(i,s)}pageRoute(e){return[{protocol:kW,path:`/{countryCode}/${QW}/{appName}/{id}`,query:[`${kq}?`]},{protocol:kW,path:`/${QW}/{providerName}/{id}`,query:[`${kq}?`]},{protocol:kW,path:`/{countryCode}/${QW}/{id}`,query:[`${kq}?`]},{protocol:kW,path:`/${QW}/{id}`,query:[`${kq}?`]},{protocol:kW,path:`/${QW}`,query:[Aq.id,`${kq}?`]},{protocol:kW,path:`{countryCode}/${QW}`,query:[Aq.id,`${kq}?`]}]}handleShelf(e,t,n,r,o,i){const s=n[uU],a=JSON.parse(s),c=new zz(e,a.remainingContent).includingAdditionalPlatforms(O(e)).includingAttributes([wj,dj,yG])
Tn(e,c).then(t=>function(e,t,n){const r=L(t),o=n
o.remainingContent=[]
const i={lockupOptions:{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},artworkUseCase:Fu(0,n.preferredShelfContentType)},contentUnavailable:function(e,t){return o.remainingContent=st(0,o.remainingContent,e),o.remainingContent.push(r[e]),!1}},s=new $z(n.preferredShelfContentType)
return s.shouldFilterApps=n.shouldFilter,s.items=Iu(e,r,i),s.mergeWhenFetched=!0,s.url=Gh(o),s}(e,t,a)).then(o,i)}shelfRoute(e){return[{protocol:CW,path:`/${QW}/${RW}/{token}`}]}pageType(){return bx}}class V5{constructor(){this.$intentKind="CancelPreorderIntent"}async perform(e,t){return await jh(t,e)}}class H5 extends t1{constructor(e,t){super("CancelPreorderController"),t.exportingService("Preorder",{cancelPreorder:async t=>await jh(e,t)})}handlePage(e,t,n,r,o,i,s){s(new Error(kU))}pageRoute(e){return[]}pageType(){return Mj}}class W5 extends n1{constructor(){super("EulaBuilder")}defaultPlatforms(e){return O(e)}generatePageRequest(e,t,n){const o=t.query.resourceId,i=t.query.resourceType
if(r(o)||r(i))throw new Error(`Unable to map ${t.build()} to a media api url`)
const s=new zz(e).withIdOfType(o,hF)
return s.targetResourceType=i,s}pageRoute(e){return[{protocol:CW,path:`${nq}`}]}pageType(){return Jj}renderPage(e,t,n,r){return Pg.context(vB,()=>{const n=d(t,"results.eula.text").split(/\n{1,2}/),r=[]
for(const e of n){const t=new NV(e)
t.wantsCollapsedNewlines=!1,t.suppressVerticalMargins=!0,r.push(t)}const o=new $z(AB)
o.isHorizontal=!1,o.items=r
const i=new Gz([o])
return i.title=e.loc.string(K_),i})}}class q5 extends t1{constructor(){super("PersonalizedReviewsBuilder")}handlePage(e,t,n,r,o,i,s){s(new Error("PersonalizedReviewsBuilder:handlePage not implemented"))}pageRoute(e){return[]}handleShelf(e,t,n,r,o,i){const s=n[uU],a=JSON.parse(s),c=new zz(e).withIdOfType(a.adamId,Ij)
Tn(e,c).then(t=>Bs(e,e.client.guid,a,t)).catch(()=>Bs(e,e.client.guid,a)).then(o,i)}shelfRoute(e){return[{protocol:CW,path:`/personalizedReviews/${RW}/{token}`}]}pageType(){return Mj}}class z5 extends n1{constructor(){super("PrivacyDetailBuilder")}defaultPlatforms(e){return O(e)}pageType(){return QO}pageRoute(e){return[{protocol:CW,path:`${iq}/${jW}/{id}`,query:[`${Aq.privacyTypeId}?`]},{protocol:CW,path:`${iq}/${HW}/{id}`,query:[`${Aq.privacyTypeId}?`]}]}generatePageRequest(e,t,n){const r=pa(t)
if((0,bg.isNothing)(r)||0===r.length)throw new Error(`Unable to map ${t.build()} to a media api url. Missing id.`)
let o=zj
const i=[__,EU,DM]
return-1!==t.pathname.indexOf(HW)&&(o=xj),new zz(e).withIdOfType(r,o).addingQuery(NL,i.join(","))}renderPage(e,t,n,s){return Pg.context(vB,()=>{const s=n[Aq.privacyTypeId]
return function(e,t,n){return Pg.context("privacyDetailPageFromResponse",()=>{const s=_(e,t)
if(o(s))return null
const a=ei(e,"PrivacyDetails",s.id,t),c={rootPosition:0,locationStack:[]}
let l=[]
if(!Dc(e)){const t=function(e,t,n,r){const o=new $z(ZG)
o.isHorizontal=!1
const i=_c(e,t,!0,!0,n,r)
return o.items=[i],o.presentationHints={isFirstShelf:!0},o}(e,s,a,c)
i(t)&&l.push(t)}const u=function(e,t,n,s,a){const c=H(t,__)
if(o(c))return[]
const l=bc(e,c,t,nB,!0,n,s)
if(0===l.length)return[]
const u=[]
for(const t of l)if(r(a)||t.identifier===a||e.client.deviceType!==Vj){const e=new $z(L_)
i(t.identifier)&&t.identifier===a?(t.wantsScrollFocus=!0,e.id="privacyTypeShelf_"+t.identifier):t.wantsScrollFocus=!1,e.items=[t],e.presentationHints={isSingleDensity:!0},u.push(e)
for(const e of t.purposes){const t=new $z("privacyCategory")
t.title=e.title,t.items=e.categories,u.push(t)}}return u}(e,s,a,c,n)
l=l.concat(u)
const d=new Gz(l)
d.title=e.loc.string(D_)
for(const e of u)if((0,bg.isSome)(e.id)){d.loadCompletedAction=new mW(e.id)
break}return ni(e,d,a),d})}(e,t,s)})}}class Y5 extends t1{constructor(){super("ProductInAppPurchaseBuilder")}handlePage(e,t,n,r,o,i,s){const a=n[Sq],c=new xq(a),l=ha(e,c),u={},d=n[Pq]===zG
u.spotlightSection=Js(d),u.spotlightInAppProductIdentifier=n[Aq.offerName],Tn(e,l).then(n=>{const r=Vl(e,n,u)
return t1.createFlowAction(r,JU,t)}).then(i,s)}pageRoute(e){return[{protocol:CW,path:`/${jW}/${_W}`,query:[Sq,Aq.offerName,Pq]}]}pageType(){return JU}}class J5{constructor(){this.$intentKind="ShelfBasedProductPageIntent"}async perform(e,t){return await Vh(t,e)}}class K5 extends n1{constructor(e,t){super(Uv),t.exportingService(Yb,{fetchPage:async t=>await async function(e,t){if(t.preloading&&Me(e))return await Promise.reject(new Error(Jb))
if(0!==Sn(e,new xq(t.url)).length&&dp(e,t.url),t.preloading){const e=new xq(t.url)
e.param(Aq.isPreloading,zG),t.url=e.build()}const n=K5.generateProductPageOptions(e,void 0,new xq(t.url))
let r=e.required(C2).fetchPage(e,t.url,XY)
if(!r){const o=new zz(e,t.url)
r=Tn(e,o).then(r=>Vl(e,r,n,{},null,t.preloading))}return await r.then(n=>(e.host.clientIdentifier===iH?n&&sx in n&&ai(0,n):i(t.referrerData)&&n&&sx in n&&ai(0,n),n))}(e,t),fetchShelfBasedPage:async t=>await Vh(e,t)})}defaultPlatforms(e){return O(e)}pageType(){return JU}defaultTab(e){return K5.representsArcadeApp(e)?Gj:super.defaultTab(e)}defaultAction(e,t,n,r){if(t instanceof Bq)return t
const o=super.defaultAction(e,t,n,r)
if(!(t instanceof XY||t instanceof AJ))return o
const i=1===t.appPlatforms.length&&"tv"===t.appPlatforms[0]
if(n[Aq.action]!==T2||i){if(n[Aq.action]!==S2||i)return o
{const e=t.shelfMapping[Ij]||t.shelfMapping[RG]
let n=null
return e&&e.seeAllAction&&(n=e.seeAllAction,n.animationBehavior=rG),o.animationBehavior=rG,new MH([o,n])}}{const n=K5.representsBundle(t)
let r=null,i=null,s=null,a=null
t instanceof XY?(r=t.adamId,i=t.icon,s=t.title,a=t.subtitle):t instanceof AJ&&(r=t.lockup.adamId,i=t.lockup.icon,s=t.lockup.title,a=t.lockup.subtitle)
const c=Ms(e,r,n,i,!1,a,s)
return o.animationBehavior=rG,new MH([o,c])}}static generateProductPageOptions(e,t,n){const r={clientIdentifierOverride:n.query[Aq.clientIdentifierOverride]},o=null==t?void 0:t[Aq.offerName]
if(o){const e=t[Pq]===zG
r.spotlightSection=Js(e),r.spotlightInAppProductIdentifier=o}const s=n.query[lX]
s&&(r.iAdClickFields=JSON.parse(s))
const a=n.query[uX]
a&&(r.iAdLineItem=a)
const c=n.query[dX];(0,Ig.isSome)(c)&&(r.iAdDismissAdActionMetrics=JSON.parse(c))
const l=n.query[SJ]
i(l)&&(r.externalDeepLinkUrl=l)
const u=n.query[PJ]
i(u)&&(r.isCppDeepLinkDisabled=JSON.parse(u))
const d=null==t?void 0:t[Aq.webBrowser]
return(0,Ig.isSome)(d)&&(r.webBrowser="1"===d),e.props.enabled(P_)&&e.client.isCompanionVisionApp&&(r.clientIdentifierOverride="com.apple.visionproapp"),r}pageRoute(e){return ap()}generatePageRequest(e,t,n){var o
const i=n[Aq.bundleIdentifier],s=n[Aq.ids],a=n[Aq.productVariantID],c="1"===n[Aq.includeUnlistedApps]||"1"===n[Aq.isViewOnly]
let l=null
if(i){const t=et(e).adamIdFromSystemBundleId(i)
l=(0,Ig.isSome)(t)?ma(e,t,!1,void 0,!1,c):function(e,t,n,r){const o=m0
e.bag.enablePrivacyNutritionLabels&&!ua(e,t)&&o.push(dx),e.appleSilicon.isSupportEnabled&&o.push(CG),e.bag.enableLicenses&&o.push(jC)
const i=new zz(e).forType(zj).withFilter(nj,t).includingAdditionalPlatforms(O(e)).includingRelationships([mG,AN,lx,Ij,xj,mD,ux,vD]).includingAttributes(o).addingRelationshipLimit(Ij,E(e)).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes($e(e))
return(0,bg.isSome)(n)&&i.addingQuery(Aq.productVariantID,n),ro(e,WG)&&i.enablingFeature(yD),r&&i.enablingFeature(qC),Ei(e)?i.includingViews([UC]):i.includingRelationships([AD]),i}(e,i,a,c)}else if(n[Aq.action]===Kb&&s){const r=(null===(o=t.pathname)||void 0===o?void 0:o.length)>0&&-1!==t.pathname.indexOf(Zb)
l=ma(e,s,w(n,Aq.isPurchasesApp),a,r,c)}else l=ha(e,t,c)
if(r(l))throw new Error(`Unable to map ${t.build()} to a media api url`)
return l}generateAdditionalPageRequirements(e,t,n){const r=super.generateAdditionalPageRequirements(e,t,n),o=function(e){for(const[t,n]of Object.entries(e))if(t.toLocaleLowerCase()===Aq.appEventId.toLocaleLowerCase())return n
return null}(n),i=n[Aq.offerItemId]
if((null==o?void 0:o.length)>0&&Oi(e)){const t=new zz(e).withIdOfType(o,Uj).includingAdditionalPlatforms(O(e)).includingScopedAttributes(Uj,[yj,zU,DU]).includingScopedAvailableIn(Uj,[ey,WC])
r[P2]=new X0(Tn(e,t).catch(()=>null),!1)}else if(s(i)&&Ri(e)){const t=new zz(e).withIdOfType(i,YU).includingAdditionalPlatforms(O(e))
xn(t),r[P2]=new X0(Tn(e,t).catch(()=>null),!1)}return r}renderPage(e,t,n,r,o,i){return Pg.context(vB,()=>{const o=ei(e,wB,"",t),a=K5.generateProductPageOptions(e,n,new xq(o.pageUrl)),c=_(e,t),l=K5.alternativeAppForPlatform(e,c,De(e))
if(null!==l)return l
const u="1"===n[Aq.isViewOnly]
s(i)&&TH.shared.setReferralDataForProduct(c.id,i)
const d=Vl(e,t,a,r,i,w(n[Aq.isPreloading]),u),f=e.fetchTimingMetricsBuilder
return(0,Ig.isSome)(f)&&f.decorate(d),d})}shelfRoute(e){return[{protocol:CW,path:`/${jW}/${RW}/{token}`}]}generateShelfRequest(e,t,n){return cp(e,0,n)}renderShelf(e,t,n){return lp(e,t,n)}shelfRequiresAdditionalModification(e,t){return!0}async performAdditionalShelfModifications(e,t,n){return await new Promise(r=>{const o=n[uU],i=JSON.parse(o),s=t.items
if(i.contentType===F$&&s){const n=[],o=[]
for(const e of s){const t=e.productIdentifier
Js(e.isSubscription).shelfId===i.inAppShelfId&&(n.push(t),e.isVisibleByDefault&&o.push(t))}e.clientOrdering.orderedVisibleIAPs(i.appBundleId,n,o,i.spotlightInAppProductIdentifier).then(e=>{t.items=K5.filteredInAppLockupsUsingOrdering(s,e),r(t)})}else new Set([GU,HF]).has(t.contentType)&&0===t.items.length&&(t.isHidden=!0),r(t)})}handleShelfError(e,t,n,r){const o=r[uU],i=JSON.parse(o)
if(i&&!i.hasExistingContent){const e=new $z(i.contentType)
e.isHidden=!0,t(e)}else super.handleShelfError(e,t,n,r)}static alternativeAppForPlatform(e,t,n){if(!he(t,n)){const r=se(t,vD)
if(s(r))for(const t of r){const r=Ce(e,t,Sj)
if(he(t,n)&&(null==r?void 0:r.length)>0)return new Bq(Mj,r)}}return null}static representsBundle(e){return!!(e.pageMetrics&&e.pageMetrics.pageFields&&oU in e.pageMetrics.pageFields)&&e.pageMetrics.pageFields[oU]===fO}static representsArcadeApp(e){return!!(e.pageMetrics&&e.pageMetrics.pageFields&&oU in e.pageMetrics.pageFields)&&e.pageMetrics.pageFields[l$]===oj}static filteredInAppLockupsUsingOrdering(e,t){const n={}
for(const t of e)n[t.productIdentifier]=t
const r=[]
for(const e of t){const t=n[e]
if(t){const e=y(t)
r.push(e)}}return r}}class Z5 extends t1{handlePage(e,t,n,r,o,i,s){this.renderPage(e,t,n)}renderPage(e,t,n){throw new Error(`renderPage is not supported on: ${this.builderClass}`)}handlePageError(e,t,n,r,o){n(e)}handleShelf(e,t,n,r,o,i){this.renderShelf(e,t,n).then(o,e=>{this.handleShelfError(e,o,i,n)})}async renderShelf(e,t,n){throw new Error(`renderShelf is not supported on: ${this.builderClass}`)}handleShelfError(e,t,n,r){n(e)}}class Q5 extends Z5{constructor(){super("ProductBuilderNative")}pageType(){return JU}pageRoute(e){return[]}shelfRoute(e){return[{protocol:CW,path:`/${jW}/${RW}`,query:[Aq.isGameCenterPlayerShelf,Aq.token]},{protocol:CW,path:`/${jW}/${RW}`,query:[Aq.isGameCenterPlayerRibbonItem]},{protocol:CW,path:`/${jW}/${RW}`,query:[Aq.isGameCenterAchievementsShelf,Aq.token]}]}async renderShelf(e,t,n){return await new Promise((r,o)=>{if(t.query[Aq.isGameCenterPlayerShelf]){const i=t.query[Aq.id],s=e.gameCenter.fetchFriendsThatPlayGame(i),a=n[Aq.token],c=JSON.parse(a)
s.then(t=>{const n=hl(e,t,!0,c)
r(n)}).catch(e=>{o(e)})}else if(t.query[Aq.isGameCenterPlayerRibbonItem]){const n=t.query[Aq.id]
e.gameCenter.fetchFriendsThatPlayGame(n).then(t=>{const n=hl(e,t,!1)
r(n)}).catch(e=>{o(e)})}else if(t.query[Aq.isGameCenterAchievementsShelf]){const i=t.query[Aq.bundleId]
e.gameCenter.fetchAchievementSummaryForGame(i).then(t=>{const o=t
let i=null
if(o.length>0){const t=new fW(o[0].bundleId),n=e.loc.string("PRODUCT_ACHIEVEMENT_SUMMARY_COMPLETED","Completed"),r=o[0].achievements
let s=null
const a=r.filter(e=>e.status.type===fB)
if(a.length>0&&(s=a[0]),null===s){const e=r.filter(e=>e.status.type===pA||e.status.type===fA)
e.sort((e,t)=>t.status.percent-e.status.percent),e.length>0&&(s=e[0])}null!==s&&(i=new VV(o[0].bundleId,o[0].completedAchievements,o[0].totalAchievements,n,t,[s]))}const s=n[Aq.token],a=JSON.parse(s),c=function(e,t,n){const r=new $z(jS)
if(r.isHorizontal=!0,t){const o={pageInformation:n.destinationPageInformation,locationTracker:n.sourceLocationTracker,kind:Cj,title:uF,id:"achievements_summary",idType:aj,softwareType:null,targetType:Cj,badges:{gameCenter:!0}}
gf(e,r,o),$f(e,t.action,o),r.items=[t]}return r.mergeWhenFetched=!0,r.batchGroup=bU,r.isHidden=0===r.items.length,r}(e,i,a)
r(c)}).catch(e=>{o(e)})}else r(super.renderShelf(e,t,n))})}}const X5="todayTabPersonalization",e6="OnDeviceRecommendationsTodayShelfController"
class t6{constructor(e){this.recommendations=e}storyData(e){var t
const n=this.recommendationForUseCase(e),r=null==n?void 0:n.candidate(_j)
if(!(0,Ig.isNothing)(n)&&!(0,Ig.isNothing)(r))return null===(t=null==n?void 0:n.dataContainer)||void 0===t?void 0:t.data.find(e=>e.id===r.id)}storyGroupData(e){var t,n
const r=this.recommendationForUseCase(e),o=null==r?void 0:r.candidate(LB)
if((0,Ig.isNothing)(r)||(0,Ig.isNothing)(o))return
const i=null===(t=null==r?void 0:r.dataContainer)||void 0===t?void 0:t.data.find(e=>e.id===(null==o?void 0:o.id)),s=null===(n=null==r?void 0:r.dataContainer)||void 0===n?void 0:n.data.filter(e=>o.candidateIDs.includes(e.id))
return(0,Ig.isNothing)(i)||(0,Ig.isNothing)(s)?void 0:(i[IU]={associations:{recommendations:{data:s}}},i)}recommendationForUseCase(e){return this.recommendations.find(t=>t.useCase===e)}}class n6{constructor(e,t,n,r){this.useCase=e,this.candidates=t,this.recoMetrics=n,this.dataContainer=r}candidate(e){return this.candidates.find(t=>t.type===e)}}class r6{constructor(e,t,n,r){this.id=e,this.type=t,this.candidateIDs=n,this.data=r}}class o6 extends Z5{constructor(){super("ProductPageShelfWithAdController")}pageType(){return JU}pageRoute(e){return[]}shelfRoute(e){return[{protocol:CW,path:`/${jW}/${RW}/{token}`,query:[Aq.isShelfWithAd,Aq.shelfWithAdPlacementType]}]}async renderShelf(e,t,n){const r=n[Aq.shelfWithAdPlacementType],o=t.query[Aq.id],i=Hh(e,r,o).catch(()=>null),s=cp(e,0,n)
s.attributingTo(t.build())
const a=Tn(e,s)
return await Promise.all([a,i]).then(([t,r])=>lp(e,t,n,r,!0))}}class i6 extends Z5{constructor(){super("ProductPageSimilarItemsShelfRefreshController")}pageType(){return JU}pageRoute(e){return[]}shelfRoute(e){return[{protocol:CW,path:`/${jW}/${RW}/{token}`,query:[`${Aq.shelfRefreshType}=${Rq}`]}]}async renderShelf(e,t,n){const r=t.query[Aq.id]
let o=Promise.resolve(null),i=!1
i=ro(e,bG),i&&(o=Hh(e,bG,r).catch(()=>null))
const s=function(e,t){const n=[wj,dj,yG]
return new zz(e).withIdOfType(t,gL).enablingFeature(IU).includingAdditionalPlatforms(O(e)).includingAttributes(n).enablingFeature(yD)}(e,r)
s.attributingTo(t.build())
const a=Tn(e,s).catch(async()=>{const r=cp(e,0,n)
return r.attributingTo(t.build()),await Tn(e,r)})
return await Promise.all([a,o]).then(([t,r])=>lp(e,t,n,r,i))}}class s6 extends t1{constructor(){super("ReviewsAdapterBuilder")}handlePage(e,t,n,r,o,i,s){const a=ha(e,t)
Tn(e,a).then(n=>{const r=Vl(e,n)
let o,i
if(jl(e)){const e=r
o=e.shelfMapping[RG],i=1===e.appPlatforms.length&&"tv"===e.appPlatforms[0]}else{const e=r
o=e.shelfMapping[Ij],i=1===e.appPlatforms.length&&"tv"===e.appPlatforms[0]}const s=t1.createFlowAction(r,JU,t)
let a=null
return o&&o.seeAllAction&&!i&&(a=o.seeAllAction,a.animationBehavior=rG),a?(s.animationBehavior=rG,new MH([s,a])):s}).then(i,s)}pageRoute(e){return[{protocol:kW,path:`/{countryCode}/${jW}/{appName}/{id}`,hash:Eq},{protocol:kW,path:`/${DW}/viewContentsUserReviews`,query:[Aq.id]}]}handlePagination(e,t,n,r,o,i,s){const a=n[Iq],l=n[Cq],u=c(o.remainingContent),d=new zz(e,o.nextHref).includingAdditionalPlatforms(O(e)).addingQuery(XU,l)
Tn(e,d,{}).then(t=>Hs(e,e.client.guid,a,u,t,!1,l)).then(i,s)}paginationRoute(e){return[{protocol:CW,path:`/${zW}/${RW}/{adamId}/{sort}`}]}pageType(){return JU}}class a6 extends t1{constructor(){super("SortedReviewsBuilder")}handlePage(e,t,n,r,o,a,c){const l=n[Iq],u=n[Cq],d=new zz(e).withIdOfType(l,mL).includingAdditionalPlatforms(O(e)).addingQuery(XU,u)
Tn(e,d,{}).then(t=>{const r=n[Aq.token]
let o=null
if(s(r))try{o=JSON.parse(r)}catch(e){}const a=Hs(e,e.client.guid,l,[],t,!0,u,o)
return i(null==o?void 0:o.reviewActionsShelf)&&a.shelves.unshift(o.reviewActionsShelf),i(null==o?void 0:o.reviewSummaryShelf)&&a.shelves.unshift(o.reviewSummaryShelf),i(null==o?void 0:o.ratingsShelf)&&a.shelves.unshift(o.ratingsShelf),a}).then(e=>t1.createFlowAction(e,Ij,t)).then(a,c)}pageRoute(e){return[{protocol:CW,path:`/${zW}/{adamId}/{sort}`,query:[`${Aq.token}?`]}]}pageType(){return Ij}}class c6 extends s1{constructor(){super("AccessoryProtocolRoomBuilder")}pageInformation(e,t,n){return ri(0,"accessory")}generatePageRequest(e,t,n){const r=[]
for(const e of Object.keys(t.query))e.startsWith("id")&&r.push(t.query[e])
return this.requestWithFilter(e,"deviceProtocol",r.join(","))}pageRoute(e){return[{query:[`${Aq.action}=accessoryLookup`]}]}}class l6 extends t1{constructor(){super("CollectionDeepLinkingController")}pageType(){return Jj}pageRoute(e){return[{protocol:kW,path:"{countryCode}/{tab}/recommendations",query:[`${Aq.useCaseShort}`,`${Aq.collectionId}?`,`${Aq.seedId}?`]}]}handlePage(e,t,n,r,o,i,s){const a=n.tab,c=n[Aq.useCaseShort],l=n[Aq.collectionId],u=n[Aq.seedId]
let d=new zz(e).forType(lD).addingQuery(Yj,a).addingQuery("filter[recoUseCase]",c).includingRelationships([qj]).includingAdditionalPlatforms(O(e))
d.enablingFeature(vR),(null==l?void 0:l.length)>0&&(d=d.addingQuery(CU,l)),(null==u?void 0:u.length)>0&&(d=d.addingQuery(Pv,u)),Tn(e,d).then(n=>{const r=q(_(e,n),Rx);((null==r?void 0:r.length)>0?this.makeODPPage(e,c,r,n):this.makeCollectionPage(e,c,n)).then(e=>{let n
const r=this.createTabChangeActionForRequest(a),o=new Bq(Jj,t.build())
o.pageData=e,null!=r?(r.actions=[o],n=r):n=o,i(n)}).catch(e=>{s(new Error(`CollectionDeeplinkingController: Failed to create GenericPage for useCase: ${c}`))})}).catch(e=>{s(new Error(`CollectionDeeplinkingController: Failed to fetch Media API data for useCase: ${c}`))})}async makeODPPage(e,t,n,r){const o=new Promise((o,i)=>{ur(e,n,Jj).then(n=>{const i=_(e,r),s=new o1
s.title=q(i,JG),s.metricsPageInformation=ei(e,fU,t,r),s.metricsPageInformation.recoMetricsData=ef($(r),null,n.recoMetrics),s.shouldFilter=!1,s.metricsLocationTracker={rootPosition:0,locationStack:[]}
const a=this.makePage(e,s,n.dataContainer)
o(a)}).catch(e=>{i(e)})})
return await o}async makeCollectionPage(e,t,n){const r=_(e,n),o=re(r,qj),i=new o1
return i.url=this.paginationUrl,i.title=q(r,JG),i.metricsPageInformation=ei(e,fU,t,n),i.metricsPageInformation.recoMetricsData=$(n),i.shouldFilter=!1,i.metricsLocationTracker={rootPosition:0,locationStack:[]},await Promise.resolve(this.makePage(e,i,o))}makePage(e,t,n){return Pg.context("makePage",()=>{const r=t.preferredShelfContentType||r1,o=new $z(r),i={id:null,kind:null,softwareType:null,targetType:tj,title:t.title,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,idType:cU,recoMetricsData:$(n)}
gf(e,o,i),rf(0,i,t.title),o.isHorizontal=!1,o.shouldFilterApps=t.shouldFilter
const s=L(n)
t.remainingContent=[],o.items=Iu(e,s,{contentUnavailable:(e,n)=>(t.remainingContent=st(0,s,e),!0),lockupOptions:{metricsOptions:{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker},clientIdentifierOverride:t.clientIdentifierOverride,artworkUseCase:Fu(0,r)}})
const a=new Gz([o])
return a.title=t.title,t.remainingContent.length&&(a.nextPage=t),a})}createTabChangeActionForRequest(e){const t=e
return new Set([Dj,zj,MU,sj,GR,Gj,wF,NN,PR,bR,IR,FL,dG,y$]).has(t)?new _H(t):null}handleShelf(e,t,n,r,o,i){i(new Error(zb))}shelfRoute(e){return[]}paginationRoute(e){return[{protocol:CW,path:`${this.paginationPath}`}]}handlePagination(e,t,n,r,o,i,s){Pg.context(`${this.builderClass}.handlePagination`,()=>{const n=o,r=new zz(e,n.remainingContent)
if(!r)return void s(new Error(`Could not construct media API request for: ${t}`))
r.includingAdditionalPlatforms(O(e))
const a=[wj,dj,eG,sG]
e.appleSilicon.isSupportEnabled&&a.push(CG),r.includingAttributes(a),r.usingCustomAttributes($e(e)),r.attributingTo(t.build()),Tn(e,r).then(t=>{i(this.makePage(e,n,t))}).catch(e=>{s(e)})})}}class u6 extends i1{constructor(){super("RecommendationRoomBuilder")}generatePageRequest(e,t,n){const r=pa(t),o=n[Aq.grouping]
if(!this.isValidId(r))throw new Error(`Unable to map ${t.build()} to a media api url. Missing id.`)
if(!this.isValidId(o))throw new Error(`Unable to map ${t.build()} to a media api url. Missing grouping.`)
return new zz(e).withIdOfType(r,LD).addingQuery(J$,o).includingMacOSCompatibleIOSAppsWhenSupported(!0)}renderPage(e,t,n){return Pg.context(vB,()=>{const r=_(e,t),o=re(r,qj),i=n[Aq.grouping],s=ei(e,fU,`${r.id}-${i}`,t),a=new o1
a.remainingContent=o.data,a.url=this.paginationUrl,a.shouldFilter=!Y(r,YD),a.metricsPageInformation=s,a.metricsLocationTracker={rootPosition:0,locationStack:[]},a.title=q(r,Yj)
const c=this.pageWithContent(e,o,a)
return c.title=a.title,ni(e,c,s),c})}pageRoute(e){return[{protocol:kW,path:`/{countryCode}/${rq}/{title}/{id}`,query:[Aq.grouping]},{protocol:kW,path:`/{countryCode}/${rq}/{id}`,query:[Aq.grouping]},{protocol:kW,path:`/${rq}/{title}/{id}`,query:[Aq.grouping]},{protocol:kW,path:`/${rq}/{id}`,query:[Aq.grouping]}]}isValidId(e){return!(r(e)||isNaN(e))}}class d6 extends i1{constructor(){super("RoomBuilder")}generatePageRequest(e,t,n){let r=t.query[Aq.featuredContentId]
if(this.isValidRoomId(r)||(r=n.id),!this.isValidRoomId(r))throw new Error(`Unable to map ${t.build()} to a media api url`)
return new zz(e).withIdOfType(r,g$).includingMacOSCompatibleIOSAppsWhenSupported(!0)}prepareRequest(e,t,n,r,o){super.prepareRequest(e,t,n,r,o),t.includingMacOSCompatibleIOSAppsWhenSupported(!0)}renderPage(e,t,n,r){return Pg.context(vB,()=>{const n=_(e,t),r=re(n,qj),o=ei(e,fU,n.id,t),i=new o1
i.remainingContent=r.data,i.url=this.paginationUrl,i.shouldFilter=!Y(n,YD),i.metricsPageInformation=o,i.metricsLocationTracker={rootPosition:0,locationStack:[]}
const s=q(n,SB)
i.preferredShelfContentType=this.preferredShelfStyleForFcKind(Number(s)),i.clientIdentifierOverride=Kt(e,n),i.title=q(n,JG)
const a=this.pageWithContent(e,r,i)
return a.title=i.title,ni(e,a,o),a})}pageRoute(e){return[{protocol:kW,path:`/${DW}/${UW}`,query:[Aq.featuredContentId]},{protocol:kW,path:"/WebObjects/MZStoreElements.woa/wa/recommendationsSeeAll"},{protocol:kW,path:"{apiVersion}/editorial/{countryCode}/rooms/{id}"},{protocol:kW,path:"/{countryCode}/collection/today-view-widgets",query:[Aq.featuredContentId]},{protocol:kW,path:"/{countryCode}/collections/id{id}"}]}isValidRoomId(e){return a(e)}preferredShelfStyleForFcKind(e){return null==e?null:431===e?zD:null}}!function(e){e[e.Landing=0]="Landing",e[e.Results=1]="Results",e[e.ChartsAndCategories=2]="ChartsAndCategories",e[e.Focus=3]="Focus"}(ym||(ym={}))
class f6{constructor(){this.$intentKind="SearchChartsAndCategoriesPageIntent"}async perform(e,t){return await tw(e,t)}}class p6 extends t1{constructor(e,t){super("SearchChartsAndCategoriesPageBuilder"),t.exportingService(sM,{fetchSearchChartsAndCategoriesPage:async t=>await tw(t,e)})}pageType(){return HE}pageRoute(e){return[{path:"/{apiVersion}/recommendations/{countryCode}/search-recommendations/{search-recommendations-id}"}]}handlePage(e,t,n,r,o,i,s){Pg.context(`${this.builderClass}.handlePage`,()=>{const n=new zz(e,t.toString()).forType(vL).includingScopedRelationships(Qb,[qj]).enablingFeature(IU).enablingFeature(aM).addingQuery(Aq.name,IM)
this.fetchCategoriesAndChartsPage(e,n).then(e=>{i(t1.createFlowAction(e,this.pageType(),t))}).catch(s)})}async fetchCategoriesAndChartsPage(e,t){const n=Tn(e,t)
return await n.then(t=>Zh(e,t))}}class h6 extends TV{constructor(e,t,n,r,o){super(),this.value=e,this.isSelected=t,this.leadingIcon=n,this.displayName=r,this.clickAction=o}}class w6 extends AV{constructor(e,t,n){super(),this.searchTerm=e,this.selectedTokens=t,this.optimizationTerm=n}}class g6 extends DH{constructor(e,t){super("GuidedSearchTokenToggleAction"),this.targetToken=e,this.searchOrigin=t}}class m6 extends DH{constructor(e,t){super("SearchEntityChangeAction"),this.entity=e,this.searchOrigin=t}}!function(e){e[e.EmptyResults=0]="EmptyResults",e[e.Picker=1]="Picker",e[e.NonNative=2]="NonNative"}(Am||(Am={}))
class v6{constructor(){this.$intentKind="SearchHintsIntent"}async perform(e,t){return await Pw(t,e.term)}}class y6 extends t1{constructor(e,t){super("SearchHintsBuilder"),t.exportingService(sM,{fetchHints:async t=>await Pw(e,t.term)})}handlePage(e,t,n,r,o,i,s){s(new Error(kU))}pageRoute(e){return[]}pageType(){return Mj}}class A6{constructor(e,t,n,r){this.title=e,this.maxItems=t,this.shelfDisplayStyle=n,this.itemDisplayStyle=r}}class T6 extends t1{constructor(){super("SearchLandingPageBuilder")}pageRoute(e){return[{protocol:CW,path:`${oq}`}]}shelfRoute(e){return[{protocol:CW,path:`${oq}/${RW}`,query:[Aq.isOnDeviceSearchHistoryShelf]},{protocol:CW,path:`${oq}/${RW}`,query:[Aq.isSearchFocusHeaderShelf]}]}pageType(){return Jj}handlePage(e,t,n,r,o,i,s){Pg.context(`${this.builderClass}.handlePage`,()=>{this.fetchPage(e).then(e=>{i(t1.createFlowAction(e,this.pageType(),t))}).catch(s)})}handleShelf(e,t,n,r,o,s){Pg.context(`${this.builderClass}.handleShelf`,()=>{var a,c,l
const u=w(null!==(a=n[Aq.isOnDeviceSearchHistoryShelf])&&void 0!==a?a:t.query[Aq.isOnDeviceSearchHistoryShelf]),d=u?function(e){if(!(0,bg.isNothing)(e))return JSON.parse(decodeURIComponent(e))}(null!==(c=n[Aq.token])&&void 0!==c?c:t.query[Aq.token]):void 0,f=w(null!==(l=[Aq.isSearchFocusHeaderShelf])&&void 0!==l?l:t.query[Aq.isSearchFocusHeaderShelf])
u&&i(d)?this.handleSearchHistoryShelf(e,d,o,s):f?o(this.createNaturalLanguageSearchBubbleTipShelf(e)):super.handleShelf(e,t,n,r,o,s)})}handleSearchHistoryShelf(e,t,n,r){e.onDeviceSearchHistoryManager.fetchRecentsWithLimit(t.maxItems).then(n=>{const r=ti(e,iO,sO," ")
return rf(0,{locationTracker:{rootPosition:0,locationStack:[]},id:jP,pageInformation:r},t.title),bw(e,t,r,{rootPosition:0,locationStack:[]},n)}).then(n,r)}async fetchPage(e){const t=ro(e,yU)?Hh(e,yU).catch(()=>null):null
return await this.fetchSearchLandingPage(e,t).catch(async n=>await this.fetchTrendingSearchesFallbackPage(e,t))}async fetchTrendingSearchesFallbackPage(e,t){const n={url:e.bag.trendingSearchesURL},r=e.network.fetch(n).then(e=>{if(!e.ok)throw Error(`Bad Status code ${e.status} for ${n.url}`)
return JSON.parse(e.body)})
return await Promise.all([r,t]).then(([t,n])=>{var r
const o=new Hz(this.trendingSearchesShelvesForResponse(e,t)),i=ti(e,u$,rF,"")
return i.iAdInfo=lo(e,yU,n),null===(r=i.iAdInfo)||void 0===r||r.setMissedOpportunity(e,av,yU),ni(e,o,i),o})}async fetchSearchLandingPage(e,t){return this.shouldUseProtocolV1(e)?await this.fetchSearchLandingPageV1(e,t):e.bag.mediaAPISearchFocusEnabled?await this.fetchSearchLandingPageV2WithFocusPage(e,t):await this.fetchSearchLandingPageV2(e,t)}async fetchSearchLandingPageV1(e,t){const n=new zz(e).forType(yL).includingAdditionalPlatforms(O(e)).usingCustomAttributes($e(e))
n.targetResourceType=RU
const r=ac(e,e.user.dsid);(null==r?void 0:r.length)>0&&n.addingQuery(Xb,r)
const o=new Ag.FetchTimingMetricsBuilder,i=e.addingFetchTimingMetricsBuilder(o),s=Tn(i,n)
return await Promise.all([s,t]).then(([e,t])=>o.measureModelConstruction(()=>this.landingPageFromResponseV1(i,e,t)))}makeSearchLandingRequestV2(e,t){const n=new zz(e).forType(kR).includingAdditionalPlatforms(O(e)).usingCustomAttributes($e(e)).includingScopedRelationships("search-recommendations",[qj]).addingQuery(Yj,IM),r=ac(e,e.user.dsid)
return(null==r?void 0:r.length)>0&&n.addingQuery(Xb,r),n.addingQuery(IU,"adDisplayStyle"),n}async fetchSearchLandingPageV2(e,t){const n=this.makeSearchLandingRequestV2(e,t),r=new Ag.FetchTimingMetricsBuilder,o=e.addingFetchTimingMetricsBuilder(r),i=Tn(o,n),s=e.amsEngagement
let a
if(s&&e.bag.enableRecoOnDeviceReordering){const e={timeout:500,eventType:cX,tab:sj}
a=s.performRequest(e)}return await Promise.all([i,t,a]).then(([e,t,n])=>r.measureModelConstruction(()=>this.landingPageFromResponseV2(o,e,t,n)))}async fetchSearchLandingPageV2WithFocusPage(e,t){const n=this.makeSearchLandingRequestV2(e,t).enablingFeature("search-focus-suggestions"),r=new Ag.FetchTimingMetricsBuilder,o=e.addingFetchTimingMetricsBuilder(r),i=Tn(o,n),s=e.amsEngagement
let a
if(s&&e.bag.enableRecoOnDeviceReordering){const e={timeout:500,eventType:cX,tab:sj}
a=s.performRequest(e)}return await Promise.all([i,t,a]).then(async([e,t,n])=>await r.measureModelConstructionAsync(async()=>await this.landingPageFromResponseV2WithFocusPage(o,e,t,n)))}landingPageFromResponseV2(e,t,n,r){if(o(t.data))return null
const i=ei(e,u$,u$,t),s=Ar(e)
i.recoMetricsData=ef(i.recoMetricsData,null,s),i.iAdInfo=lo(e,yU,n)
const a=wo(0,i.iAdInfo)
vo(e,a,n)
const c={shelves:[],metricsLocationTracker:{rootPosition:0,locationStack:[]},metricsPageInformation:i,adStitcher:rc(e,n,t),adIncidentRecorder:a,pageType:ym.Landing,recoImpressionData:Oo(0,r)}
Cw(e,t,c)
const l=this.createNaturalLanguageSearchBubbleTipShelf(e)
l&&c.shelves.unshift(l)
const u=new Hz(c.shelves)
return u.pageRefreshPolicy=new NQ(eI,e.bag.searchLandingPageRefreshUpdateDelayInterval,e.bag.searchLandingPageOffscreenRefreshInterval,null),u.adIncidents=go(0,c.adIncidentRecorder),ni(e,u,c.metricsPageInformation),u}async landingPageFromResponseV2WithFocusPage(e,t,n,r){const o=this.landingPageFromResponseV2(e,t,n,r)
return await this.fetchFocusPageUsingLandingPageResponse(e,t).then(e=>(o.searchFocusPage=e,o))}async fetchFocusPageUsingLandingPageResponse(e,t){var n
if(o(t.data))return null
const r=ei(e,iO,sO,t," "),i=Ar(e)
r.recoMetricsData=ef(r.recoMetricsData,null,i)
const s={shelves:[],metricsLocationTracker:{rootPosition:0,locationStack:[]},metricsPageInformation:r,pageType:ym.Focus},a=function(e,t,n){const r=e.data
if(o(r))return null
for(const e of r){if(o(e))continue
const r=p(e,IU)
if(kw(null==r?void 0:r.category)===t.pageType&&n===q(e,Rx))return e}return null}(t,s,$P)
if((0,bg.isNothing)(a))return this.createFocusPageFromResponse(e,t,s)
const c=null!==(n=J(a,$k))&&void 0!==n?n:0,l=e.onDeviceSearchHistoryManager.fetchRecentsWithLimit(c)
return await l.then(n=>(s.searchHistory=n,this.createFocusPageFromResponse(e,t,s)))}createFocusPageFromResponse(e,t,n){Cw(e,t,n)
const r=new Vz(n.shelves)
return o(r.shelves)?null:(ni(e,r,n.metricsPageInformation),r)}createNaturalLanguageSearchBubbleTipShelf(e){var t
if(e.props.isNotEnabled("naturalLanguageSearchBubbleTip"))return
if(!e.bag.isNaturalLanguageSearchEnabled&&!e.bag.isNaturalLanguageSearchResultsEnabled)return
const n=Pc(0,"searchFocusHeader",{signal:{lastNLSQueryDate:e.storage.retrieveString($E),treatmentId:null!==(t=xe(e,Rg.SearchLandingPage))&&void 0!==t?t:null}},"pullOnly")
return n.refreshUrl=`${CW}:/${oq}/${RW}/?${Aq.isSearchFocusHeaderShelf}=true`,n}landingPageFromResponseV1(e,t,n){const r=c(t,tI)[0]
if(o(r))return null
if(!ne(r,yF))return null
const s=q(r,"id"),a=ei(e,Mk,r.id,t),l=Ar(e)
a.recoMetricsData=ef(a.recoMetricsData,null,l),a.iAdInfo=lo(e,yU,n)
const u=wo(0,a.iAdInfo)
vo(e,u,n)
const d={shelves:[],metricsPageInformation:a,metricsLocationTracker:{rootPosition:0,locationStack:[]},pageGenreAdamId:s,pageGenreId:J(r,vG),hasAuthenticatedUser:i(e.user.dsid),isSearchLandingPage:!0,adStitcher:rc(e,n),adIncidentRecorder:u}
vc(e,Ac(e,r),d)
const f=new Hz(d.shelves),p=new NQ(eI,e.bag.searchLandingPageRefreshUpdateDelayInterval,e.bag.searchLandingPageOffscreenRefreshInterval,null)
return f.pageRefreshPolicy=p,f.adIncidents=go(0,d.adIncidentRecorder),ni(e,f,d.metricsPageInformation),f}shouldUseProtocolV1(e){return!e.bag.supportsSearchLandingPageV2||!lt(e,e.bag.searchLandingPageV2RolloutRate)}trendingSearchesShelvesForResponse(e,t){return Pg.context("trendingSearchesShelfForResponse",()=>{const n={rootPosition:0,locationStack:[]},r=c(t,"trendingSearches").map(t=>{const r=d(t,GG),o=new AQ(r,r,d(t,Sj),rF)
return e.client.isPhone&&(o.artwork=ce(e,kx)),Bf(e,o,Hj,n),uf(n),new cW(o)})
let o=0
switch(e.client.deviceType){case Lj:o=10
break
case Bj:o=7}const i=new $z(_G)
return i.title=r.length>0?d(t,"header.label"):null,i.isHorizontal=!1,i.items=r.slice(0,o),[i]})}}class S6{constructor(){this.$intentKind="SearchResultsPageIntent"}async perform(e,t){return await Mw(t,e.requestDescriptor)}}class P6{constructor(){this.$intentKind="SearchResultsPageMoreIntent"}async perform(e,t){return await $w(t,e.pageToken)}}class b6 extends t1{constructor(e,t){super("SearchResultsBuilder"),t.exportingService(sM,{fetchResults:async t=>await async function(e,t){const n=new Ag.FetchTimingMetricsBuilder,r=e.addingFetchTimingMetricsBuilder(n),o=await Vp(r,t)
return null===o?vw(r,t.facets):await async function(e,t){return await Aw(e,t)}(r,o)}(e,t),fetchMoreResults:async t=>await async function(e,t){return await async function(e,t){return await Pg.context("paginatedSearchResultsWithToken",async()=>{const n=pw(0,t),r=hw(0,t)
return 0===n.length?await Promise.resolve(vw(e)):await Hp(e,n).then(async n=>{const o=L(n)
return await uw(e,t.requestMetadata,t.responseMetadata,t.metricsOptions,o).then(e=>{const t=new fQ
return t.results=e.builtSearchResults,t.nextPage=r,t})})})}(e,t)}(e,t.pageToken),fetchSearchResultsPage:async t=>await Mw(e,t),fetchMoreOfSearchResultsPage:async t=>await $w(e,t.pageToken)})}handlePage(e,t,n,r,o,i,s){s(new Error(kU))}pageRoute(e){return[]}pageType(){return Mj}}class I6{constructor(){this.$intentKind="ArticlePageIntent"}async perform(e,t){return await t.required(C2).fetchPage(t,e.url,U0)}}class C6 extends t1{constructor(e,t){super("ArticleBuilder"),t.exportingService(rI,{fetchArticle:async t=>await e.required(C2).fetchPage(e,t.url,U0)})}handlePage(e,t,n,o,c,l,u){const f=new Ag.FetchTimingMetricsBuilder,p=e.addingFetchTimingMetricsBuilder(f),h=JSON.parse(d(t.query,Aq.recoMetrics)),w=function(e,t){const n=t.pathComponents()
if(n.indexOf(wN)<0&&n.indexOf(uN)<0&&n.indexOf(Xv)<0&&t.host!==hq&&t.host!==mq&&t.host!==vq)throw new Error(`Unable to map ${t.build()} to a media api url`)
let r
if(r=t.host===hq?e.props.asString("spamBlockingExtensionsEditorialItemID"):t.host===mq?e.bag.sharePlayAppsEditorialItemId:t.host===vq?e.bag.buddyOnboardingEditorialItemId:pa(t),!a(r))throw new Error(`Unable to map ${t.build()} to a media api url`)
if(!a(r))throw new Error(`Unable to map ${t} to a media api url`)
const o=[cx],i=[kB,uB,sG,yG,wj,dj,_F,x$]
e.appleSilicon.isSupportEnabled&&i.push(CG),i.push(x$)
const c=new zz(e).withIdOfType(r,_j).includingAdditionalPlatforms(O(e)).includingAttributes(i).includingRelationships(o).includingRelationshipsForUpsell(!0).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes($e(e))
Oi(e)&&(c.enablingFeature(VG),c.includingScopedAttributes(Uj,[yj,zU,DU]),c.includingScopedRelationships(Uj,[Oj]),c.includingScopedRelationships(Qv,[Uj]),c.includingScopedAvailableIn(Uj,[ey]))
const l=t.query[Aq.editorialCardId]
s(l)&&c.withFilter("canvas:cardId",l),Ri(e)&&(c.enablingFeature(M$),c.includingScopedRelationships(YU,[CF]),c.includingAssociateKeys(_j,[GB]),c.includingMetaKeys(Wv,[qv]),c.includingScopedAttributes(YU,[JG,AG,EM,sD])),c.includingAttributes([$$])
const u=t.query[Aq.preview]
return yq.has(t.host)&&(null==u?void 0:u.length)>0&&(c.addingQuery(ty,u),c.isStorePreviewRequest=!0),c.attributingTo(t.build())}(e,t)
Tn(p,w).then(async t=>await async function(e,t){return await La(e,t,Ua,Ga)}(e,t)).then(o=>{const s=new W0
s.todayShelfRecoMetricsData=h,s.showingFallbackMediaInline=Boolean(n[Aq.showingFallbackMedia]),s.additionalData=o.additionalData
const a=d(t.query,Aq.todayCardConfig)
return(null==a?void 0:a.length)>0&&(s.todayCardConfig=JSON.parse(a)),s.allowUnpublishedAppEventPreviews=(0,Ig.isSome)(n[Aq.preview]),s.isResilientDeepLink=e.deepLinks.hasResilientDeepLinks(),e.props.enabled(P_)&&e.client.isCompanionVisionApp&&(s.clientIdentifierOverride="com.apple.visionproapp"),f.measureModelConstruction(()=>function(e,t,n){return Pg.context("articlePageWithResponse",()=>{var o
const s=_(e,t)
n.metricsPageInformation=ei(e,uN,s.id,t),n.metricsLocationTracker={rootPosition:0,locationStack:[]},n.pageId=s.id
const a=new kJ(n.metricsPageInformation,n.metricsLocationTracker,n.refreshController),c=function(e,t){if(!i(t))return null
if((0,Ig.isSome)(t.todayCardConfig))return t.todayCardConfig
const n={useOTDTextStyle:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!1,canDisplayArcadeOfferButton:!0,isHeroCard:!1}
switch(n.clientIdentifierOverride=t.clientIdentifierOverride,n.useOTDTextStyle=!1,n.allowUnpublishedAppEventPreviews=t.allowUnpublishedAppEventPreviews,n.currentRowIndex=void 0,e.client.deviceType){case jj:n.prevailingCropCode="en",n.coercedCollectionTodayCardDisplayStyle=tm.Grid,n.heroDisplayContext=am.Article
break
case"tv":n.prevailingCropCode="ek",n.coercedCollectionTodayCardDisplayStyle=tm.Grid,n.heroDisplayContext=am.Article}return n}(e,n)
let l=zi(e,s,c,a)
const u=null==l?void 0:l.media,f=null!==(o=null==l?void 0:l.title)&&void 0!==o?o:void 0,p=q(s,tG)
n.crossLinkSubtitle=us(e,s),n.clientIdentifierOverride=c.clientIdentifierOverride,rf(0,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,targetType:KG,id:n.pageId,idType:aj},f)
const h=function(e,t,n,r){return Pg.context("renderArticle",()=>{var o
const s=[],a=null!==(o=se(t,cx))&&void 0!==o?o:[]
for(const n of a){r.module=q(n,HP),r.subStyle=null,s.length
const o=Va(e,n,t,r)
if(o.length>0)for(const e of o)e.title=r.titleForNextShelf,s.push(e),r.titleForNextShelf=null
r.index++,uf(r.metricsLocationTracker)}if(r.showingFallbackMediaInline&&0===s.length){const e=function(e,t){if(t instanceof rY){const e=new $z(gj)
return e.items=t.lockups,e}return null}(0,n)
i(e)&&s.push(e)}return s})}(e,s,u,n),w=h[h.length-1],m=n.isResilientDeepLink||"OfferItem"===p?null:function(e,t,n){const o=Ha(0,t)
let s=null
const a=Dd(e,t,Yj),c=Dd(e,t,FB)
if(a&&c&&(s=e.loc.string("ShareSheet.TitleSubtitle.Format","{title}: {subtitle}").replace(JF,a).replace(GS,c)),!s&&a&&(s=a),!s&&c&&(s=c),!s&&o){const n=q(o,Yj),r=q(t,eM)
switch(r){case tm.GameOfTheDay:s=e.loc.string("SHARE_SHEET_GAME_OF_DAY_TITLE_FORMAT").replace(JF,n)
break
case tm.AppOfTheDay:s=e.loc.string("SHARE_SHEET_APP_OF_DAY_TITLE_FORMAT").replace(JF,n)
break
default:e.console.log(`No title for article with unknown style: ${r}`)}}const l=q(t,Sj)
let u
switch(q(t,eM)){case tm.Grid:case tm.List:case tm.River:u=ce(e,"resource://ShareCollectionThumbnail",40,40)
break
default:u=null}const d=function(e,t,n,o,s,a){return r(a)?null:Pg.context("shareSheetDataForArticle",()=>{let r=s
!r&&a&&(r=function(e,t){const n=Zi(t)
{const r=ls(e,t,am.Article,n)
if(i(r))return r}return ns(e,H(t,ts(0,n)))}(e,a))
let o=t
e.props.isNotEnabled("stripNQMLFromShareSheetNatively")&&(o=function(e,t){return t}(0,t))
const c=e.loc.string("ShareSheet.Story.Subtitle"),l=new DV(a.id,o,c,r)
return new MV(l,n,null)})}(e,s,l,0,u,t)
if(!i(d))return null
const f=function(e,t,n){const r=[]
if((null==t?void 0:t.length)>0){const n=fs(e,t)
i(n)&&r.push(n)}if((null==n?void 0:n.length)>0){const t=fs(e,n,"Copy Card Preview Link")
i(t)&&r.push(t)}return r}(e,l,function(e,t,n){if((0,Ig.isNothing)(t))return null
switch(e.client.buildType){case KN:case MF:const e=new xq
return e.protocol=kW,e.host=iN,e.pathname=`/${ZW}`,e.param(Aq.ids,`${t}`),e.param(Aq.isTodayFeedPreview,zG),e.param(Aq.isTodaySection,n.useOTDTextStyle?zG:bL),decodeURIComponent(e.build())
default:return null}}(e,t.id,n))
return new tW(d,f)}(e,s,c)
if(i(m)){$f(e,m,{targetType:Hj,id:n.pageId,actionType:SM,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker})
const t=function(e,t,n){if(t&&n){const e=t.items.length
if(e>0&&-1!==q0.indexOf(n)){const n=t.items[e-1]
switch(t.contentType){case nM:case Z_:return n&&n.isFullWidth
default:return!0}}}return!1}(0,w,n.module),r=function(e,t,n,r){if(!i(t)||e.client.isCompanionVisionApp)return null
const o=new Pz(SM,e.loc.string("SHARE_STORY"),!r,t),s=new $z("roundedButton")
return s.items=[o],s}(e,m,0,t)
r&&h.push(r)}const v=new U0(l,h,m)
if(v.editorialStoryCard=void 0,function(e,t,n,r){const o=Ha(0,n)
if(o){const i=at(0,n)
return void(t.footerLockup=function(e,t,n,r){return wu(e,t,{offerStyle:Wa(e),metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,externalDeepLinkUrl:r,crossLinkSubtitle:n.crossLinkSubtitle,artworkUseCase:0,canDisplayArcadeOfferButton:Nd(0,gj)})}(e,o,r,i))}const s=Y(n,iR)
if(i(r.additionalData)&&s){const o=zf(e,n)
t.arcadeFooterLockup=function(e,t,n){return Pu(e,t,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},FI,lG,null)}(e,o,r)}}(e,v,s,n),v.shouldTerminateOnClose=n.isResilientDeepLink,ni(e,v,n.metricsPageInformation,e=>{let t=f
if((null==l?void 0:l.media)instanceof nY&&(null==l?void 0:l.overlay)instanceof fY&&(t=(null==l?void 0:l.overlay).lockup.title),!t)return
let n=d(g(e[YF]),xG)
n=n||d(g(e[hB])),e[YF]=n?`${n}_${t}`:`unknown_${t}`}),(0,Ig.isSome)(s)){const e=q(s,Sj);(0,Ig.isSome)(e)&&(v.viewArticleAction=new xH(e,!0))}return v})}(p,o.originalData,s))}).then(e=>{const n=t1.createFlowAction(e,KG,t)
{const e=new _H(Dj)
return e.actions=[n],e}}).then(l,u)}pageRoute(e){return[{protocol:kW,path:`/{countryCode}/${JW}/{id}`,query:[`${Aq.showingFallbackMedia}?`,`${Aq.preview}?`,`${Aq.todayCardConfig}?`]},{protocol:kW,path:`/{countryCode}/${JW}/{seoSlug}/{id}`,query:[`${Aq.showingFallbackMedia}?`,`${Aq.preview}?`,`${Aq.todayCardConfig}?`]},{protocol:kW,path:`/{countryCode}/${YW}/{id}`,query:[`${Aq.showingFallbackMedia}?`,`${Aq.preview}?`,`${Aq.todayCardConfig}?`]},{protocol:kW,path:`/{countryCode}/{platform}/${YW}/{id}`,query:[`${Aq.showingFallbackMedia}?`,`${Aq.preview}?`,`${Aq.todayCardConfig}?`]},{protocol:kW,path:`/{countryCode}/${YW}/{seoSlug}/{id}`,query:[`${Aq.showingFallbackMedia}?`,`${Aq.preview}?`,`${Aq.todayCardConfig}?`]},{protocol:kW,path:`/${YW}/{id}`,query:[`${Aq.showingFallbackMedia}?`,`${Aq.preview}?`,`${Aq.todayCardConfig}?`]},{protocol:kW,path:`/${YW}/{seoSlug}/{id}`,query:[`${Aq.showingFallbackMedia}?`,`${Aq.preview}?`,`${Aq.todayCardConfig}?`]},{protocol:kW,path:`/${DW}/${KW}`,query:[Aq.id,`${Aq.showingFallbackMedia}?`,`${Aq.preview}?`,`${Aq.todayCardConfig}?`]},{protocol:kW,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/editorial-items/{id}",query:[Aq.id,`${Aq.showingFallbackMedia}?`,`${Aq.preview}?`,`${Aq.todayCardConfig}?`]},{protocol:kW,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/editorial-items/{seoSlug}/{id}",query:[Aq.id,`${Aq.showingFallbackMedia}?`,`${Aq.preview}?`,`${Aq.todayCardConfig}?`]},{protocol:kW,path:"{apiVersion}/editorial/{countryCode}/editorial-items/{id}",query:[Aq.id,`${Aq.showingFallbackMedia}?`,`${Aq.preview}?`,`${Aq.todayCardConfig}?`]},{protocol:kW,path:"{apiVersion}/editorial/{countryCode}/editorial-items/{seoSlug}/{id}",query:[Aq.id,`${Aq.showingFallbackMedia}?`,`${Aq.preview}?`,`${Aq.todayCardConfig}?`]},{protocol:kW,hostName:`${hq}`},{protocol:CW,path:`/${YW}/{id}`,query:[`${Aq.metrics}?`,`${Aq.invalidateWidgetsOnFailure}?`]},{protocol:kW,hostName:`${mq}`},{protocol:kW,hostName:`${vq}`}]}pageType(){return KG}}Tm=e(1415),function(e){e.OnboardingCards="onboardingCards",e.Ads="ads",e.ODP="ODP",e.AMDData="amdData"}(Sm||(Sm={}))
const k6=[wj,dj,yG,cR,lR,uR,_F,sG,x$]
class O6 extends t1{constructor(){super("TodayCardPreviewBuilder")}pageType(){return Dj}pageRoute(e){return[{protocol:kW,path:`/${ZW}`,query:[`${Aq.ids}?`,`${Aq.isTodaySection}?`,`${Aq.isTodayFeedPreview}?`,`${Aq.preview}?`,`${Aq.experimentId}?`,`${Aq.fetchData}?`]}]}handlePage(e,t,n,r,i,a,c){Pg.context(`${this.builderClass}.pageHandler`,()=>{var r
const i=new Bq(this.pageType())
if(i.pageUrl=t.build(),!w(n[Aq.fetchData]))return void a(i)
const l=null===(r=n[Aq.experimentId])||void 0===r?void 0:r.split(","),u=n[Aq.ids]
if(s(l)&&o(u)){const t={}
for(const e of l){const n=e.split(":")[0],r=e.split(":")[1]
t[n]=r}const n=s(t)?JSON.stringify(t):void 0
Uw(e,{experimentIdHeader:n,url:"",onboardingCardIds:[]}).then(e=>{i.pageData=e,a(i)}).catch(e=>{c(e)})}else{const n=Gw(e,this.createFlattenedTodayItemsFromUrl(t),O6.emptyTodayPageResponse,null,null)
i.pageData=n,a(i)}})}createFlattenedTodayItemsFromUrl(e){const t=[],n=d(e.query[Aq.ids]),r=(0,Ig.isSome)(e.query[Aq.isTodayFeedPreview])&&w(e.query[Aq.isTodayFeedPreview]),o=(0,Ig.isSome)(e.query[Aq.isTodaySection])&&w(e.query[Aq.isTodaySection])
if(!s(n))return t
const i=n.match(/([a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)?:\[[^\]]+\]|[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)?)/g)
let a=r,c=0
for(const e of i){const n=e.split(":")[0],r=O6.storyGroupIdRegex.exec(e)
if((0,Ig.isSome)(r)){const e=r[1].split(",").map(e=>this.createUnhydratedEditorialItemFromId(e,o))
t.push({type:pm.EditorialItemGroup,data:{id:n,type:LB,relationships:{},meta:{associations:{recommendations:{data:e}}}},isDataHydrated:!1,isFirstItemInModule:a,moduleMetadata:{...O6.previewModuleData},containedAdSlots:Array.from({length:e.length},(e,t)=>t+c)}),a=!1,c+=e.length}else t.push({type:pm.EditorialItem,data:this.createUnhydratedEditorialItemFromId(e,o),isDataHydrated:!1,isFirstItemInModule:a,moduleMetadata:{...O6.previewModuleData},containedAdSlots:[c]}),a=!1,c+=1}return t}createUnhydratedEditorialItemFromId(e,t){const n=e.split(":")[0],r=e.split(":")[1],o=(0,Ig.isSome)(r)?{"editorial-cards":{data:[{id:`${n}-${r}`,type:GB}]}}:{}
return{id:n,type:_j,relationships:{},meta:{personalizationData:{isOfTheDay:t},associations:o}}}}O6.storyGroupIdRegex=/\[(.*)\]/,O6.previewModuleData={label:oI,title:"Today Preview",meta:{},isTodayForAppsModule:!1},O6.emptyTodayPageResponse={results:{data:[]}}
class E6{constructor(){this.$intentKind="TodayPageIntent"}async perform(e,t){const n=e.isRunningPPTs?JSON.stringify({NyCxKBD:"client-perf"}):void 0
return await Uw(t,{url:e.url,onboardingCardIds:e.onboardingCardIds,experimentIdHeader:n})}}class R6{constructor(){this.$intentKind="TodayPageMoreIntent"}async perform(e,t){const n=e.pageToken
return qw(t,n.pageInformation),await Vw(t,n),jw(t,n)}}class D6 extends t1{constructor(e,t){super("TodayPageBuilder"),t.exportingService(rI,{fetchPage:async t=>await Uw(e,{url:t.url,onboardingCardIds:t.onboardingCardIds}),async fetchMoreOfPage(t){const n=t.pageToken
return qw(e,n.pageInformation),await Vw(e,n),jw(e,n)}})}defaultTab(e){return Dj}pageType(){return Dj}pageRoute(e){return[]}handlePage(e,t,n,r,o,i,s){s(new Error("handlePage not implemented for TodayBuilder"))}}class _6 extends AV{constructor(e,t,n,r){super(),this.shortName=e,this.longName=t,this.chart=n,this.shelves=r,this.nextPage=null,this.pageMetrics=new OH,this.pageRenderMetrics={}}}class L6 extends zQ{constructor(e,t,n){super(e.name,e.genreId,e.artwork,e.ageBandId,n),this.shortName=this.name,this.longName=this.name,this.url=t}}class x6 extends AV{constructor(e,t,n,r,o,i){super(),this.genreId=e,this.ageBandId=t,this.title=n,this.segments=r,this.categoriesButtonTitle=o,this.categories=i,this.initialSegmentIndex=0}}class M6{constructor(){this.$intentKind="TopChartsPageIntent"}async perform(e,t){return await zw(t,e.url)}}class $6{constructor(){this.$intentKind="TopChartsPageMoreIntent"}async perform(e,t){return await Yw(t,e.pageToken)}}class F6 extends t1{constructor(e,t){super("TopChartsBuilder"),t.exportingService("TopChartData",{fetchPage:async t=>await zw(e,t.url),fetchMoreOfSegment:async t=>await Yw(e,t.pageToken)})}pageRoute(e){return Jw()}handlePage(e,t,n,i,a,c,l){const u=n[Aq.isPPT]
t.removeParam(Aq.isPPT)
let f=t.query[Aq.chart],p=n[Aq.genre]
o(p)&&(p=d(e.bag.defaultChart,"genre-id"),o(f)&&(f=d(e.bag.defaultChart,"chart-id")))
let h=n[Aq.charts]
if(o(h)){const e=dc(0,f)
h=void 0!==e?`${f},${e}`:f}else h.includes(f)||(h+=`,${f}`)
const w=fc(e,p,h,n[Aq.ages])
let g
g=pc(e,h,p),Promise.all([w,g]).then(async([t,n])=>{const o=jn(e,n),i=r(o)?Bn(p):Un(o)
{const n=Kw(e,t,p,o,f,i)
if(u&&s(n.segments)){const t=n.segments[0],r=t.nextPage,o=ot(0,r)
if(s(o)){const i=new zz(e,o)
return await Tn(e,i).then(o=>{const i=it(0,r)
i.remainingContent=[],i.maxPerPage=0
const s=Xw(e,o,r,i),a=t.shelves.concat(s.shelves),c=new _6(t.shortName,t.longName,t.chart,a)
return c.pageMetrics=t.pageMetrics,c.nextPage=null,n.segments[0]=c,n})}}return n}}).then(e=>{let n
return e instanceof x6?n=Ex:e instanceof Gz&&(n=Jj),t1.createFlowAction(e,n,t)}).then(c,l)}pageType(){return Ex}handlePagination(e,t,n,r,o,i,a){Pg.context(`${this.builderClass}.handlePagination`,()=>{Yw(e,o).then(e=>function(e){var t,n
const r=new Gz(e.shelves)
return r.title=null!==(t=e.longName)&&void 0!==t?t:e.shortName,r.pageMetrics=e.pageMetrics,r.pageRenderMetrics=e.pageRenderMetrics,s(null===(n=null==e?void 0:e.nextPage)||void 0===n?void 0:n.remainingContent)&&(r.nextPage=e.nextPage),r}(e)).then(i).catch(a)})}}class N6 extends AV{constructor(e,t,n,r){super(),this.collections=e,this.refreshDate=t,this.originalResponseDate=n,this.originalResponseHash=r}}class B6 extends AV{constructor(e,t){super(),this.cards=e,this.displayDate=t}}class U6 extends AV{constructor(e,t,n,r,o,i,s,a,c,l,u,d){super(),this.storyId=e,this.heading=t,this.title=n,this.backgroundColor=r,this.isDark=o,this.iconArtwork=i,this.url=s,this.eventBadgeKind=l,this.editorialArtwork=c,this.isVideoArtwork=a,this.eventStartDate=u,this.eventEndDate=d}}class G6{make(e){const t=new zz(e).forType(this.typeForUseCase()).withIdsOfType(this.ids(),this.typeForUseCase()).addingContext(this.context()).includingAttributes(this.attributesForUseCase()).asPartialResponseLimitedToFields(this.fieldsForRequest()).withSparseCount(this.sparseCountForUseCase()).withSparseLimit(this.sparseLimitForUseCase()).enablingFeature(this.enablingFeature(e)).usingCustomAttributes(this.shouldUseCustomAttributes(e)),n=this.addingQuery()
if(null!==n)for(const e of n)t.addingQuery(e.key,e.value)
return t}}class j6 extends G6{context(){return dO}typeForUseCase(){return Dj}attributesForUseCase(){return[wj,dj,yG]}sparseCountForUseCase(){return null}sparseLimitForUseCase(){return null}addingQuery(){return null}ids(){return[]}fieldsForRequest(){return[WE,Nj,JL,eM,tk,iG,jA,wj,LA,xU,dj,YL,"id",L$,tG,GG,pj,yG,Yj,nk,zL]}enablingFeature(e){return Oi(e)?VG:null}shouldUseCustomAttributes(e){return $e(e)}}class V6{constructor(){this.$intentKind="WidgetIntent"}async perform(e,t){const n=e.widgetKind
if(n===mb)return await cg(t,e)
throw Error(`Invalid widgetKind of '${n}'`)}}class H6 extends t1{constructor(e,t){super("WidgetController"),t.exportingService("WidgetData",{fetchTodayWidget:async t=>await cg(e,t)})}handlePage(e,t,n,r,o,i,s){s(new Error(kU))}pageRoute(e){return[]}pageType(){return Mj}}Pm=e(5881)
class W6{constructor(){this.dispatcher=new Pm.IntentDispatcher}register(e){this.dispatcher.register(e)}async dispatch(e,t){const n=await this.createIntentObjectGraphWithAsyncValues(t)
return await this.dispatcher.dispatch(e,n)}controller(e){return this.dispatcher.controller(e)}get registeredControllers(){return this.dispatcher.registeredControllers}async createIntentObjectGraphWithAsyncValues(e){const t=new hH,n=new vH,r=new vH(mH)
let o
return e instanceof AH&&(await t.loadTreatments(e),await n.loadValues(e,[Dg.client,Dg.user]),e.bag.personalizationUserIdEnabled&&await r.loadValues(e,[Dg.user]),e.props.enabled(gO)&&e.bag.metricsPaymentNamespaceEnabled&&(o=new vH(wH),await o.loadValues(e,[Dg.client,Dg.user]))),e.adding(hH.metatype,t).adding(vH.defaultMetatype,n).adding(vH.paymentMetatype,o||n).adding(vH.personalizationMetatype,r)}}class q6 extends vg.LegacyRuntime{constructor(e,t){super(e,t,{})}exportingService(e,t){this.wrapServiceInValidation(t)
const n={...this.serviceWithName(e)||{},...t}
return super.exportingService(e,n)}exportingServiceName(e,t,n){const r={}
r[t]=n,this.exportingService(e,r)}wrapServiceInValidation(e){for(const t of Object.keys(e)){const n=e[t]
n instanceof Function&&(e[t]=function(...e){const t=n.apply(this,e)
return t instanceof Promise?t.then(e=>(Pg.recordValidationIncidents(e),e)):(Pg.recordValidationIncidents(t),t)})}}}!function(e){e.Control="Tf5Kjqz00",e.LayoutA="Tf5Kjqz01",e.LayoutB="Tf5Kjqz02"}(bm||(bm={}))
class z6{constructor(){this.$intentKind="ArcadeDownloadPackCategoriesPageIntent",this.maxNumberOfCategoriesToChoose=4}async perform(e,t){return await this.fetchDownloadPackPage(t,te(e.subscriptionStatus))}async fetchDownloadPackPage(e,t){const n=new aW
n.title=e.loc.string("Arcade.DownloadPack.CategorySelection.PrimaryButtonTitle")
const r=new aW
r.title=e.loc.string("Arcade.DownloadPack.CategorySelection.SecondaryButtonTitle")
const o=await this.fetchCategories(e),i=new _Y(e.loc.string(t===BI?"Arcade.DownloadPack.CategorySelection.Title.CurrentUser":"Arcade.DownloadPack.CategorySelection.Title"),o,this.maxNumberOfCategoriesToChoose,"Arcade.DownloadPack.CategorySelection.MaxCount","Arcade.DownloadPack.CategorySelection.Selected.Full",n,r),s=new pX({pageId:"SelectCategories",pageType:kb}),a={rootPosition:0,locationStack:[]}
return e.bag.arcadeDownloadPacksMetricsEventsEnabled&&(n.actionMetrics.addMetricsData(kf(e,"Ok",Hj,{actionType:Fj})),r.actionMetrics.addMetricsData(kf(e,"Skip",Hj,{actionType:iD})),o.forEach(t=>{t.selectActionMetrics.addMetricsData(kf(e,t.id,K$,{actionType:_S})),t.deselectActionMetrics.addMetricsData(kf(e,t.id,K$,{actionType:"remove"}))}),ni(e,i,s)),e.bag.arcadeDownloadPacksImpressionEventsEnabled&&o.forEach(t=>{const n={id:t.id,idType:aj,kind:Hj,locationTracker:a,pageInformation:s,softwareType:oj,targetType:K$,title:t.title}
gf(e,t,n),uf(a)}),i}async fetchCategories(e){const t=e.bag.arcadeDownloadPackCategoriesCollectionId,n=new zz(e).withIdOfType(t,rU).addingQuery(Ob,sb).includingAdditionalPlatforms(O(e))
return await Tn(e,n).then(t=>this.categoriesFromResponse(e,t))}categoriesFromResponse(e,t){return Pg.context("categoriesFromResponse",()=>{const n=L(t),r=[]
for(const t of n){const n=t.id,o=_d(e,t,Yj),i=p(be(e,t,wj),IA)
if((0,Ig.isNothing)(i))continue
const s=Nu(e,i,{useCase:20}),a=Ie(e,t,"editorialBackground.stops").map(e=>F(d(e,NU))).filter(e=>(0,Ig.isSome)(e))
if(0===a.length){e.console.log(`Empty gradient for category: ${n}`)
continue}const c=a[0],l=1===a.length?a[0]:a[1],u=new DY(n,o,s,c,l)
r.push(u)}return r.sort((t,n)=>{try{return t.title.localeCompare(n.title,e.loc.safeIdentifier,{usage:XU})}catch(e){return 0}})})}}class Y6{constructor(){this.$intentKind="ArcadeDownloadPackSuggestionsPageIntent",this.maxGamesCount=4}async perform(e,t){const n={rootPosition:0,locationStack:[]},r=new pX({pageId:"DownloadStarterPack",pageType:kb})
return await this.fetchSuggestedGames(t,e.categories,this.maxGamesCount,r,n).then(o=>this.createSuggestionsPage(o,t,te(e.subscriptionStatus),r,n))}async fetchSuggestedGames(e,t,n,r,o){const i=new zz(e).forType(lD).addingQuery("include[personal-recommendations]",qj).addingQuery("associate[apps]",KB).addingQuery("limit[personal-recommendations:contents]",`${n}`).addingQuery("omit[resource:apps]","autos").addingQuery("sparseLimit[apps:association.category]","0").addingQuery("sparseLimit[personal-recommendations:contents]",`${n}`).addingQuery(_G,"arcade-onboarding").includingAdditionalPlatforms(O(e)),s=this.fetchOptions(t,_j)
return await Tn(e,i,s).then(n=>this.suggestionFromResponse(e,t,n,r,o))}suggestionFromResponse(e,t,n,r,o){return Pg.context("suggestionFromResponse",()=>{const i={}
for(const e of t)i[e.id]=e
const s=L(re(_(e,n),qj)),a=[]
for(const t of s){const n=c(t.meta,"associations.category.data")[0].id,s=wu(e,t,{offerStyle:aB,offerEnvironment:kj,metricsOptions:{pageInformation:r,locationTracker:o,badges:{categoryId:n}},metricsClickOptions:{id:t.id,pageInformation:r,locationTracker:o,badges:{categoryId:n}},artworkUseCase:1,isSubtitleHidden:!0});(0,Ig.isNothing)(s)||(s.heading=i[n].title,uf(o),$u(s,e),a.push(new LY(s,n)))}return a})}createSuggestionsPage(e,t,n,r,o){const i=e.map(e=>this.offerAction(e.lockup.buttonAction)).filter(e=>(0,Ig.isSome)(e)),s=new VH(i)
s.title=function(e){switch(lg(e)){case bm.Control:return e.loc.string(sI)
case bm.LayoutA:case bm.LayoutB:return e.loc.string("Arcade.DownloadPack.Suggestions.DownloadAllButtonTitle")
default:return e.loc.string(sI)}}(t)
const a=i.map(e=>e.adamId),c=new aW
c.title=function(e){switch(lg(e)){case bm.Control:return e.loc.string(ER)
case bm.LayoutA:case bm.LayoutB:return e.loc.string("Arcade.DownloadPack.Suggestions.NotNowButtonTitle")
default:return e.loc.string(ER)}}(t)
const l=new xY(t.loc.string(n===P$?"Arcade.DownloadPack.Suggestions.Title.NewUser":"Arcade.DownloadPack.Suggestions.Title"),e,s,function(e){switch(lg(e)){case bm.Control:return OR
case bm.LayoutA:return"withinLockups"
case bm.LayoutB:default:return OR}}(t),c,function(e){switch(lg(e)){case bm.Control:case bm.LayoutA:return iI
case bm.LayoutB:return"getAll"
default:return iI}}(t),function(e){switch(lg(e)){case bm.Control:return null
case bm.LayoutA:case bm.LayoutB:return e.loc.string(ER)
default:return null}}(t))
return t.bag.arcadeDownloadPacksMetricsEventsEnabled&&($f(t,s,{id:"GetAll",actionType:rx,subjectIds:a,actionDetails:{subjectIds:a},pageInformation:r,locationTracker:o,targetType:Hj}),c.actionMetrics.addMetricsData(kf(t,"Done",Hj,{actionType:Fj})),ni(t,l,r)),l}offerAction(e){return e instanceof $H?e:e instanceof GH?e.defaultAction instanceof $H?e.defaultAction:e.buyAction instanceof $H?e.buyAction:null:null}fetchOptions(e,t){const n={selected:e.map(e=>({id:e.id,type:t}))}
return{method:EN,headers:{"Content-Type":hk},requestBodyString:JSON.stringify(n)}}}class J6 extends t1{constructor(e,t){super("ArcadeDownloadPackBuilder")}pageRoute(e){return lt(e,e.bag.arcadeDownloadPackRolloutRate)?[{hostName:"arcadeDownloadPack",query:[`${Aq.arcadeSubscriptionStatus}?`]}]:[]}handlePage(e,t,n,r,o,i,s){const a=new Bq(_$),c=d(n,Aq.arcadeSubscriptionStatus)
a.pageData=te(c),i(a)}pageType(){return _$}}class K6 extends n1{constructor(){super("EditorialShelfRecommendationPageController")}defaultPlatforms(e){return O(e)}defaultAttributes(e){const t=[wj,dj,eG,sG,UB,jF,H$,pG]
return e.appleSilicon.isSupportEnabled&&t.push(CG),t}pageType(){return Jj}pageRoute(e){return[{protocol:kW,path:`WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/editorial-shelves-recommendation/{${Aq.shelfId}}`,query:[`${Aq.editorialPageId}?`]},{protocol:kW,path:`{apiVersion}/{realm}/editorial/{countryCode}/editorial-shelves-recommendation/{${Aq.shelfId}}`,query:[`${Aq.editorialPageId}?`]},{protocol:kW,path:`{apiVersion}/editorial/{countryCode}/editorial-shelves-recommendation/{${Aq.shelfId}}`,query:[`${Aq.editorialPageId}?`]}]}generatePageRequest(e,t,n){const r=n[Aq.shelfId],o=n[Aq.editorialPageId]
if((0,Ig.isNothing)(r)||0===r.length||(0,Ig.isNothing)(o)||0===o.length)throw new Error(`Unable to map ${t.build()} to a media api url`)
const i=new zz(e,t.toString())
return i.addingQuery(Aq.editorialPageId,o),i}prepareRequest(e,t,n,r,o){super.prepareRequest(e,t,n,r,o),t.includingRelationships([qj]),Xp(e,t)}renderPage(e,t,n,r,o,i){return Pg.context("renderEditorialShelfRecommendationPage",()=>{const n=_(e,t)
if(!s(n))return null
const r=ei(e,fU,n.id,t),o=kn(t),i=bh(e,void 0,n,!1,0,r,{rootPosition:0,locationStack:[]}),a=new $z(Sx)
a.id=Dk,a.items=[new ZV(null,q(n,nU),q(n,HB))]
const c=Dh(e,void 0,i)
c.title=null,c.eyebrow=null,c.isHorizontal=!1
const l=new Gz([a,c])
return l.pageRefreshPolicy=En(e,o),ni(e,l,r),l})}}(0,vg.exportBootstrap)(function(e){const[t,n]=function(){const e=new k2,t=function(e,t,n){var r
const o=function(e,t,n,r,o,i,s,a,c,l,u,d,f,p,h,w,g,m,v,y,A,T,S,P,b,I,C,k,O,E,R,D,_,L,x,M,$){return e.configureDefaults(n,r,o,i,s,a,c,l,u,d,f,p,h,w,g,m,v,y,A,T,S,P,b,I,C,k,O,E,R,D,_,L,x,M,$).adding(C2,t)}(new AH("app-store"),e,bag,cryptography,host,net,platform,plist,random,services,cookieProvider,console,ask.storeMetrics,ask.amsEngagement,ask.loc,ask.adsLoc,ask.device,ask.client,ask.props,ask.user,ask.metricsIdentifiers,ask.clientOrdering,ask.personalizationStore,ask.arcade,ask.gameCenter,ask.resilientDeepLinks,ask.appleSilicon,ask.storage,ask.ads,ask.onDeviceRecommendationsManager,ask.onDeviceSearchHistoryManager,null!==(r=ask.featureFlags)&&void 0!==r?r:{isEnabled:()=>!1,isGSEUIEnabled:()=>!1},mediaToken,ask.appDistribution,ask.timeoutManager,ask.treatmentStore,ask.userDefaults)
return TH.createSharedMetricsReferralContext(o),o}(e),n=new W6,r=new q6(n,t)
return function(e,t){const n=e.required(C2)
t.exportingService(Bv,{fetchGeneric:async t=>await n.fetchPage(e,t.url,Gz),fetchMoreOfGeneric:async t=>await n.fetchMoreOfPage(e,t.pageToken),fetchShelves:async t=>await n.fetchShelves(e,t.requests),fetchAction:async t=>await fp(e,t)})}(t,r),e.registerPageBuilder(t,new D6(t,r)),e.registerPageBuilder(t,new C6(t,r)),e.registerPageBuilder(t,new O6),e.registerPageBuilder(t,new F6(t,r)),e.registerShelfBuilder(t,new I0),e.registerShelfBuilder(t,new C0),e.registerShelfBuilder(t,new k0),e.registerShelfBuilder(t,new E0),e.registerShelfBuilder(t,new O0),e.registerShelfBuilder(t,new R0),e.registerShelfBuilder(t,new D0),e.registerShelfBuilder(t,new _0),e.registerShelfBuilder(t,new x0),e.registerShelfBuilder(t,new L0),e.registerShelfBuilder(t,new M0),e.registerShelfBuilder(t,new $0),e.registerShelfBuilder(t,new z0),e.registerShelfBuilder(t,new Y0),e.registerShelfBuilder(t,new J0),e.registerShelfBuilder(t,new K0),e.registerShelfBuilder(t,new a1),e.registerShelfBuilder(t,new c1),e.registerShelfBuilder(t,new l1),e.registerPageBuilder(t,new x5),e.registerPageBuilder(t,new G4(t,r)),e.registerPageBuilder(t,new x4(t,r)),e.registerPageBuilder(t,new Y4(t,r)),e.registerPageBuilder(t,new o4),e.registerPageBuilder(t,new F4(t,r)),e.registerPageBuilder(t,new W4(t,r)),e.registerPageBuilder(t,new q4),e.registerPageBuilder(t,new r4),e.registerPageBuilder(t,new J6(t,r)),e.registerShelfBuilder(t,new u1),e.registerPageBuilder(t,new I5),e.registerPageBuilder(t,new C5),e.registerPageBuilder(t,new K6),e.registerPageBuilder(t,new L5),e.registerPageBuilder(t,new Q5),e.registerPageBuilder(t,new o6),e.registerPageBuilder(t,new i6),e.registerPageBuilder(t,new K5(t,r)),e.registerPageBuilder(t,new Y5),e.registerPageBuilder(t,new s6),e.registerPageBuilder(t,new a6),e.registerPageBuilder(t,new q5),e.registerPageBuilder(t,new W5),e.registerPageBuilder(t,new z5),e.registerPageBuilder(t,new T6),e.registerPageBuilder(t,new p6(t,r)),e.registerPageBuilder(t,new b6(t,r)),e.registerPageBuilder(t,new y6(t,r)),e.registerPageBuilder(t,new S5),e.registerPageBuilder(t,new P5),e.registerPageBuilder(t,new b5),e.registerPageBuilder(t,new H2(t,r)),e.registerPageBuilder(t,new J2(t,r)),e.registerPageBuilder(t,new W2),e.registerPageBuilder(t,new e4),e.registerPageBuilder(t,new q2),e.registerPageBuilder(t,new X2),e.registerPageBuilder(t,new K2),e.registerPageBuilder(t,new Z2),e.registerPageBuilder(t,new Q2),e.registerPageBuilder(t,new h5),e.registerPageBuilder(t,new w5),e.registerPageBuilder(t,new u5),e.registerPageBuilder(t,new i5),e.registerPageBuilder(t,new d5),e.registerPageBuilder(t,new g5),e.registerPageBuilder(t,new s5),e.registerPageBuilder(t,new c5),e.registerPageBuilder(t,new f5),e.registerPageBuilder(t,new l5),e.registerPageBuilder(t,new p5),e.registerPageBuilder(t,new j5(t,r)),e.registerPageBuilder(t,new $5(t,r)),e.registerPageBuilder(t,new d6),e.registerPageBuilder(t,new u6),e.registerPageBuilder(t,new c6),e.registerPageBuilder(t,new l6),e.registerPageBuilder(t,new _5(t,r)),e.registerPageBuilder(t,new H6(t,r)),e.registerPageBuilder(t,new n4(t,r)),e.registerPageBuilder(t,new F5(t,r)),e.registerPageBuilder(t,new Q4(t,r)),e.registerPageBuilder(t,new n5(t,r)),e.registerPageBuilder(t,new K4(t,r)),e.registerPageBuilder(t,new H5(t,r)),e.registerPageBuilder(t,new o5(t,r)),[n,r]}()
return t.register(new V2),t.register(new D2),t.register(new L2),t.register(new U4),t.register(new _4),t.register(new L4),t.register(new $4),t.register(new J4),t.register(new z4),t.register(new H4),t.register(new z6),t.register(new Y6),t.register(new I6),t.register(new D5),t.register(new t5),t.register(new V5),t.register(new R5),t.register(new z2),t.register(new O2),t.register(new E2),t.register(new r5),t.register(new M5),t.register(new _2),t.register(new G5),t.register(new U5),t.register(new Y2),t.register(new Z4),t.register(new X4),t.register(new e5),t.register(new v6),t.register(new S6),t.register(new P6),t.register(new f6),t.register(new J5),t.register(new R2),t.register(new E6),t.register(new R6),t.register(new M6),t.register(new $6),t.register(new t4),t.register(new V6),n})})()})()

//# sourceMappingURL=main.js.map