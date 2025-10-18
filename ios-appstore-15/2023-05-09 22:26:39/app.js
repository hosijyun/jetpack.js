(()=>{function e(r){if(n[r])return n[r].exports
var o=n[r]={exports:{}}
return t[r](o,o.exports,e),o.exports}var t={100:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(908))},908:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0})
const r=n(450)
t.ObjectGraph=class{constructor(e){this._members={},this.name=e}adding(e,t){const n=this.clone()
return n._members[e.name]=t,n}removing(e){const t=this.clone()
return delete t._members[e.name],t}optional(e){return this._members[e.name]}required(e){const t=this._members[e.name]
if(r.isNothing(t)){const t=Object.keys(this._members).sort().join(", ")
throw new Error(`No member with type ${e.name} found in ${this.name}. Candidates ${t}`)}return t}clone(){const e=new(0,this.constructor)(this.name)
for(const[t,n]of Object.entries(this._members))e._members[t]=n
return e}},t.inject=function(e,t){return t.required(e)}},89:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0})
const r=n(450)
t.isBaseActionProvider=function(e){var t
return"object"==typeof e&&r.isSome(null===(t=e)||void 0===t?void 0:t.actionFor)}},129:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(89))},421:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0})
const r=n(450),o=n(395)
t.IntentDispatcher=class{constructor(){this.dispatchableMap={}}register(e){if(r.isNothing(e.$intentKind))throw new Error("Dispatcher cannot register a controller without an $intentKind")
if(e.$intentKind in this.dispatchableMap)throw new Error(`Dispatcher already has a controller registered for ${e.$intentKind}`)
this.dispatchableMap[e.$intentKind]=e}async dispatch(e,t){const n=this.dispatchableMap[e.$kind]
if(r.isNothing(n)||!o.isIntentController(n))throw new Error(`No controller registered to handle ${e.$kind}`)
return n.perform(e,t)}controller(e){return this.dispatchableMap[e.$kind]}get registeredControllers(){return Object.values(this.dispatchableMap)}}},346:(e,t,n)=>{function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(395)),r(n(421))},395:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0})
const r=n(450)
t.isIntentController=function(e){var t
return"object"==typeof e&&r.isSome(null===(t=e)||void 0===t?void 0:t.perform)}},881:(e,t,n)=>{function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(346)),r(n(129))},172:(e,t,n)=>{function r(e,t,n,r){var s
i({type:"badType",expected:t,actual:`${s=n,Array.isArray(s)?"array":null===s?"null":typeof s} (${n})`,objectPath:c.isSome(r)&&r.length>0?r:"<this>",contextNames:o(),recoveryAction:e})}function o(){return 0===a.nameStack.length?["<empty stack>"]:a.nameStack.slice(0)}function s(e,t,n){let o=null
c.isSome(n)&&n.length>0&&(o=e,a.suppressedIncidentPaths.push(n))
let s=null
try{(function(e){a.nameStack.push(e)})(e),s=t()}catch(e){throw e.hasThrown||(r("defaultValue","no exception",e.message),e.hasThrown=!0),e}finally{e===o&&a.suppressedIncidentPaths.pop(),a.nameStack.length,a.nameStack.pop()}return s}function i(e){-1===a.suppressedIncidentPaths.indexOf(e.objectPath)&&a.incidents.push(e)}const c=n(450)
t.Gi=r
const a={nameStack:Array(),incidents:Array(),suppressedIncidentPaths:Array()}
t.rS=function(e){(function(e){return!c.isNothing(e)&&(e.hasOwnProperty("$incidents")||Object.isExtensible(e))})(e)&&(e.$incidents=a.incidents),a.incidents=[],a.nameStack=[],a.suppressedIncidentPaths=[]},t.Do=s,t.x9=function(e,t,n){let r=null
try{r=s(e,t)}catch(e){r=null,c.isSome(n)&&(r=n(e))}return r},t.bm=function(e,t,n){i({type:"nullValue",expected:t,actual:"null",objectPath:c.isSome(n)&&n.length>0?n:"<this>",contextNames:o(),recoveryAction:e})}},882:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.exportBootstrap=function(e){"undefined"!=typeof $exportBootstrap&&$exportBootstrap(e)}},706:(e,t,n)=>{function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(882)),r(n(816))},816:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})
const n="function"==typeof exportService
class r{constructor(e,t){this.dispatcher=e,this.objectGraph=t}async dispatch(e){return this.dispatcher.dispatch(e,this.objectGraph)}}t.Runtime=r,t.LegacyRuntime=class extends r{constructor(e,t,n){super(e,t),this.services=n}serviceWithName(e){return this.services[e]}exportingService(e,t){return n&&function(e,t){exportService(e,t)}(e,t),this.services[e]=t,this}}},222:(e,t,n)=>{const r=n(900)
r.makeMetatype("jet-engine:bag"),t.YJ=r.makeMetatype("jet-engine:cryptography"),r.makeMetatype("jet-engine:host"),t.ef=r.makeMetatype("jet-engine:net"),t.Jv=r.makeMetatype("jet-engine:platform"),t.M_=r.makeMetatype("jet-engine:plist"),t.MX=r.makeMetatype("jet-engine:random"),t.uZ=r.makeMetatype("jet-engine:services")},447:(e,t)=>{var n;(n=t.lo||(t.lo={})).pageEnter="pageEnter",n.pageExit="pageExit",n.appExit="appExit",n.appEnter="appEnter",n.backButton="backButton"},450:(e,t)=>{function n(e){return null==e}function r(e){return null!=e}Object.defineProperty(t,"__esModule",{value:!0}),t.unsafeUninitialized=function(){},t.isNothing=n,t.isSome=r,t.unwrapOptional=function(e){if(n(e))throw new ReferenceError
return e},t.unsafeUnwrapOptional=function(e){return e},t.mapOptional=function(e,t){return r(e)?t(e):e},t.flatMapOptional=function(e,t){return r(e)?t(e):e}},900:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.makeMetatype=function(e){return{name:e}}}},n={}
e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{function t(e){return r(e)?null:Array.isArray(e)?e.join("."):e}function n(e,t,n){if(null==e)return n
if(!t)return e
let r
if(typeof t===Ik){if(r=tN[t],!r){if(!t.includes(".")){const r=e[t]
return null!=r?r:n}r=t.split("."),tN[t]=r}}else r=t
let o=e
for(const e of r)if(o=o[e],null==o)return n
return o}function r(e){return null==e}function o(e){return r(e)||0===Object.keys(e).length}function s(e){return typeof e!==Ev&&null!==e}function i(e){return s(e)&&0!==Object.keys(e).length}function c(e){if(r(e))return!1
let t
return t=typeof e===Ik?parseInt(e):e,!Number.isNaN(t)}function a(e,o){const s=n(e,o,null)
return Array.isArray(s)?s:(r(s)||Ll.Do("asArrayOrEmpty",()=>{Ll.Gi(Lv,Wv,s,t(o))}),[])}function u(e,o){const s=n(e,o,null)
return typeof s===ek?s:(r(s)||Ll.Do("asBooleanOrFalse",()=>{Ll.Gi(Lv,ek,s,t(o))}),!1)}function l(e,o,s=xb){const i=n(e,o,null)
if(r(i)||typeof i===Ik)return i
{const e=typeof i===bO?null:String(i)
switch(s){case xP:Ll.Do(im,()=>{Ll.Gi(nR,Ik,i,t(o))})
break
case xb:r(e)&&Ll.Do(im,()=>{Ll.Gi(nR,Ik,i,t(o))})}return e}}function f(e,o,s=xb){const i=n(e,o,null)
if(r(i)||typeof i===Ab)return i
{const e=Number(i)
switch(s){case xP:Ll.Do(cm,()=>{Ll.Gi(nR,Ab,i,t(o))})
break
case xb:if(isNaN(e))return Ll.Do(cm,()=>{Ll.Gi(nR,Ab,i,t(o))}),null}return e}}function d(e,o,i){const c=n(e,o,null)
return c instanceof Object&&!Array.isArray(c)?c:(r(c)||Ll.Do("asDictionary",()=>{Ll.Gi(Lv,bO,c,t(o))}),s(i)?i:null)}function p(e,t,n){return d(e,t,n)}function h(e,o,s=xb){const i=n(e,o,null)
if(r(i))return null
if(typeof i===ek)return i
if(typeof i===Ik){if(i===$v)return!0
if(i===jP)return!1}const c=Boolean(i)
switch(s){case xP:Ll.Do(am,()=>{Ll.Gi(nR,Ab,i,t(o))})
break
case xb:if(r(c))return Ll.Do(am,()=>{Ll.Gi(nR,Ab,i,t(o))}),null}return c}function w(e){if(null==e)return null
switch(typeof e){case Ik:case Ab:case ek:return e
case bO:return Array.isArray(e),e
default:return Ll.Do(um,()=>{Ll.Gi(Lv,"JSONValue",typeof e)}),null}}function g(e){return null==e?null:e instanceof Object&&!Array.isArray(e)?e:(Ll.Do(um,()=>{Ll.Gi(Lv,bO,typeof e)}),null)}function m(e,t,n){const r=e.indexOf(t)
let o,s=e
if(-1!==r){const i=e.slice(0,r),c=e.slice(r+t.length,e.length)
n===hm?(o=i,s=c):(o=c,s=i)}return{result:o,remainder:s}}function T(e,t,n){return r(e)?null:d(e.attributes,t,n)}function A(e,t){return r(e)?[]:a(e.attributes,t)}function y(e,t,n=xb){return r(e)?null:l(e.attributes,t,n)}function E(e,t,n=xb){return r(e)?null:h(e.attributes,t,n)}function P(e,t){return!r(e)&&u(e.attributes,t)}function I(e,t,n=xb){return r(e)?null:f(e.attributes,t,n)}function _(e){return!r(d(e,"attributes"))}function S(e){return!_(e)}function O(e){return iN[e]}function R(e){return e===FP}function C(e,t){const n=i(t.href)?t.href:function(e,t){switch(t){case SP:case yk:return`/v1/${v(t)}/`
default:return`/v1/${v(t)}/${e.bag.mediaCountryCode}/`}}(e,t.resourceType),o=new sN(n)
if(i(t.resourceType))for(const e of function(e){switch(e.resourceType){case $R:return[e.resourceType,e.targetResourceType]
case Y_:return[Rb,e.resourceType,e.targetResourceType]
case q_:return[Pk]
case yk:return[yk,Pk]
case V_:return[V_]
case FC:return[Gf,Uv]
case om:return[Rb,e.resourceType]
case H_:return[Pk]
default:return[e.resourceType]}}(t))o.append(zC,e)
if(t.ids.size>1||t.useIdsAsQueryParam)o.param(lm,Array.from(t.ids).join(","))
else if(1===t.ids.size){const e=t.ids.values().next().value
o.append(zC,e)}const c=function(e){switch(e){case q_:return yk
case H_:return"view/customers-also-bought-apps-with-download-intent"
default:return null}}(t.resourceType)
if(i(c)&&o.append(zC,c),o.param(TC,t.platform),t.additionalPlatforms.size>0&&o.param("additionalPlatforms",Array.from(t.additionalPlatforms).sort().join(",")),t.attributeIncludes.size>0||t.useCustomAttributes){let e=Array.from(t.attributeIncludes)
t.useCustomAttributes&&(e=function(e){const t=e.map(e=>{var t
return null!==(t=O(e))&&void 0!==t?t:e})
return t.push(FP),t}(e)),e.sort(),o.param("extend",e.join(","))}if(s(t.scopedAttributeIncludes))for(const e of t.scopedAttributeIncludes.keys()){const n=t.scopedAttributeIncludes.get(e)
o.param(`extend[${e}]`,Array.from(n).sort().join(","))}if(t.relationshipIncludes.size>0&&o.param("include",Array.from(t.relationshipIncludes).sort().join(",")),s(t.scopedRelationshipIncludes))for(const e of t.scopedRelationshipIncludes.keys()){const n=t.scopedRelationshipIncludes.get(e)
o.param(`include[${e}]`,Array.from(n).sort().join(","))}if(s(t.metaIncludes))for(const e of t.metaIncludes.keys()){const n=t.metaIncludes.get(e)
o.param(`meta[${e}]`,Array.from(n).sort().join(","))}if(s(t.associateIncludes))for(const e of t.associateIncludes.keys()){const n=t.associateIncludes.get(e)
o.param(`associate[${e}]`,Array.from(n).sort().join(","))}if(s(t.scopedAvailableInIncludes))for(const e of t.scopedAvailableInIncludes.keys()){const n=t.scopedAvailableInIncludes.get(e)
o.param(`availableIn[${e}]`,Array.from(n).sort().join(","))}if(i(t.fields)){let e=Array.from(t.fields)
t.useCustomAttributes&&(e=function(e){const t=e.map(e=>{var t
return null!==(t=O(e))&&void 0!==t?t:e})
return t}(e)),t.fields.sort(),o.param(nI,e.join(","))}s(t.limit)&&t.limit>0&&o.param("limit",`${t.limit}`),s(t.sparseLimit)&&t.sparseLimit>0&&o.param("sparseLimit",`${t.sparseLimit}`),s(t.sparseCount)&&t.sparseCount>0&&o.param("sparseCount",`${t.sparseCount}`)
for(const e of Object.keys(t.relationshipLimits).sort()){const n=t.relationshipLimits[e]
o.param(`limit[${e}]`,`${n}`)}i(t.additionalQuery)&&o.append(sv,t.additionalQuery),i(t.searchTerm)&&(o.append(zC,Rb),o.param("bubble[search]",t.searchTypes.join(",")),o.param(nS,t.searchTerm)),i(t.enabledFeatures)&&o.param(wI,t.enabledFeatures.join(",")),i(t.context)&&o.param(JR,t.context),i(t.filterType)&&i(t.filterValue)&&o.param(`filter[${t.filterType}]`,t.filterValue)
const a=e.bag.mediaApiLanguage
return r(a)||o.param("l",a),o.host=function(e,t,n){const o=t.pathname
let s=null
return s=n.isStorePreviewRequest?e.bag.mediaPreviewHost:o.includes("search/landing")?-1!==e.bag.edgeEndpoints.indexOf(Y_)?e.bag.mediaEdgeHost(e):e.bag.mediaHost:e.bag.edgeEndpoints.map(e=>o.includes(e)).reduce(cN,!1)?o.includes(Rb)?e.bag.mediaEdgeSearchHost:e.bag.mediaEdgeHost(e):e.bag.mediaHost,r(s)&&(s="api.apps.apple.com"),s}(e,o,t),o.protocol=kP,o}function v(e){switch(e){case Pk:case Tk:case wv:case lk:case RO:case ck:case ZR:case $R:case Kv:case XI:case q_:case H_:return fm
case rS:case Kb:case UI:case Mv:case V_:case M_:case rO:case Dv:return bA
case N_:return N_
case SP:case yk:return"me"
case FC:case Y_:return"engagement"
case zA:return"recommendations"
default:return fm}}function b(e,t,n){const r=C(e,t).toString()
return Date.now(),e.mediaToken.refreshToken().then(t=>D(e,r,t,n,!1)).then(e=>(Date.now(),t.canonicalUrl&&(e[$l.requestedUrl]=t.canonicalUrl),e))}function k(e,t){return e.bag.redirectUrlWhitelistedQueryParams.filter(e=>s(t.query[e]))}function D(e,t,n,c={},a=!1){const u=new sN(t),l=k(e,u)
for(const e of l)u.removeParam(e)
const d=u.toString()
let p=c.headers
return p||(p={}),p.Authorization="Bearer "+n,e.network.fetch({url:d,headers:p,method:c.method,body:c.requestBodyString,timeout:c.timeout}).then(n=>{try{if(401===n.status||403===n.status){if(a)throw Error("We refreshed the token but we still get 401 from the API")
return e.mediaToken.resetToken(),e.mediaToken.refreshToken().then(n=>D(e,t,n,c,!0))}if(404===n.status)N()
else if(!n.ok){const e=new aN(`Bad Status code ${n.status} for ${d}, original ${t}`)
throw e.statusCode=n.status,e}const l=Date.now(),p=JSON.parse(n.body),h=Date.now()
if(p){if(p[$l.pageInformation]=g(function(e,t){const n=e.client.storefrontIdentifier
let r=null
if(i(n)){const e=n.split("-")
i(e)&&(r=e[0])}return{serverInstance:t.headers[uN],storeFrontHeader:n,language:e.bag.language,storeFront:r,environmentDataCenter:t.headers[lN]}}(e,n)),n.metrics.length>0){const e=n.metrics[0]
e.parseStartTime=l,e.parseEndTime=h,p[$l.timingValues]=e}else{const e={pageURL:n.url,parseStartTime:l,parseEndTime:h}
p[$l.timingValues]=e}p[$l.contentMaxAge]=function(e,t){const n=Object.keys(t.headers).find(e=>"cache-control"===e.toLowerCase())
if(o(n))return null
const s=t.headers[n]
if(o(s))return null
const i=s.match(/max-age=(\d+)/)
return r(i)||i.length<2?null:f(i[1])}(0,n),Array.isArray(p.data)&&s(u=p.data)&&0===u.length&&N()}return p[$l.requestedUrl]=t,p}catch(e){if(e instanceof aN)throw e
throw new Error(`Error Fetching - filtered: ${d}, original: ${t}, ${e.name}, ${e.message}`)}var u})}function N(){const e=new aN("No content")
throw e.statusCode=204,e}function L(e){switch(e){case qP:case dO:case Yv:case zl:return!0
default:return!1}}function $(e){const t=a(e,XR)
return t.length,1!==t.length?null:t[0]}function x(e){return a(e,XR)}function F(e){return s(e.attributes)}function M(e){return a(e,rm)}function U(e){return d(e,mh)}function B(e){return o(e)?null:(-1!==e.indexOf("T")&&(e=e.split("T")[0]),new Date(e.replace(/-/g,"/")))}function G(e){const t=function(e){return r(e)?null:new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))}(e)
return r(t)?null:t.getTime()}function V(e){if(r(e))return null
const t=new Date(e)
return t.setHours(0,0,0,0),t}function H(e){if(r(e))return null
const t=new Date(e.getTime())
return t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t}function q(e,t){return r(e)||r(t)?null:Math.ceil((t.getTime()-H(e).getTime())/36e5)}function W(e){if(null==e)return e
const t=Object.create(Object.getPrototypeOf(e))
return Object.assign(t,e),t}function Y(e,t){return e instanceof t}function j(e,t,r){return e?Ll.Do(t,()=>{let o=e[U$],s=null
return o?(s=n(o,t),s||(s=z(o,t,r))):(o={},e[U$]=o,s=z(o,t,r)),s}):null}function z(e,t,n){const r=n()
return e[t]=r,r}function J(e){switch(e.client.deviceType){case mk:return Hv
case uk:return ib
case"tv":return Cy
case Sk:return Sk
case Ok:return Ok
default:return null}}function K(e){switch(e.host.clientIdentifier){case JP:case eS:case DA:return[]
default:{const t=J(e)
return function(e){const t=new Set
if(t.add(Hv),t.add(ib),t.add(Cy),t.add(Sk),t.add(Ok),null!==e)for(const n of e)t.delete(n)
return Array.from(t)}(new Set([t]))}}}function Z(e){switch(e.client.deviceType){case mk:return 6
case uk:return 10
case Sk:return 12
default:return 8}}function X(e){let t=null
return e.host.clientIdentifier===RN?t=yb:e.host.clientIdentifier===ON&&(t=Ok),t}function Q(e,t){return n(T(e,"platformAttributes"),t)}function ee(e,t){return i(Q(e,t))}function te(e,t,n){const o=Q(e,t)
return r(o)?null:d(o,n)}function ne(e,t,n,o=xb){const s=Q(e,t)
return r(s)?null:l(s,n,o)}function re(e,t,n,o=xb){const s=Q(e,t)
return r(s)?null:h(s,n,o)}function oe(e,t,n=!0){const r=se(e,t)
return!!r&&!(!r.data||n&&0===r.data.length)}function se(e,t){return p(e.relationships,t)}function ie(e,t){const n=a(e.relationships,[t,XR])
return 0===n.length?null:(n.length,n[0])}function ce(e,t){return a(e.relationships,[t,XR])}function ae(e){if(!e)return null
const t=G$.exec(e)
return null===t||4!==t.length?null:{red:parseInt(t[1],16)/255,green:parseInt(t[2],16)/255,blue:parseInt(t[3],16)/255,type:jO}}function ue(e,t=84){switch(e.type){case jO:return 100*(.2126*(n=e).red+.7152*n.green+.0722*n.blue)<t
case z_:return e.name===YI
default:return!1}var n}function le(e){return{name:e,type:z_}}function fe(e,t){return{lightColor:e,darkColor:t,type:UP}}function de(e){throw new Error(`This method should never be called with value: ${e}`)}function pe(e,t){if(!s(e.user.cookieForUrlWithName))return null
const n=function(e){let t=null
return H$&&(t=H$.value),(0,Ul.isNothing)(t)&&(t=e.user.cookieForUrlWithName("https://apple.com","xp_ab"),function(e){var t,n
if((0,Ul.isNothing)(e))return
const r=Date.now()+q$,o=null!==(n=null===(t=null==e?void 0:e.expiresDate)||void 0===t?void 0:t.getTime())&&void 0!==n?n:Number.MAX_SAFE_INTEGER,s=Math.min(r,o)
H$=new V$(e,s)}(t)),t}(e)
return function(e,t){return Ll.Do("currentExperimentGroup",()=>{var n
if(!t||!t.value||0===t.value.length)return null
const r=t.value.replace(/^\d+#/,"").split("#").map(e=>e.replace(/^(.*\+)/,"")),o=new RegExp(`${e.identifer}\\d+$`),s=r.filter(e=>null!=e.match(o))
if(0===s.length)return null
s.length>1&&Ll.Gi(Hb,Ik,s,`${t.name} cookie`)
const i=s[0].match(/\d+$/)
if(null===i||0===i.length)return Ll.Gi(Hb,e.treatments.join("|"),i[0],`${t.name} cookie, ${s}, treatment id`),null
const c=Number(i[0]),a=null!==(n=e.treatments.find(e=>e===c))&&void 0!==n?n:null
return null==a&&Ll.Gi(Hb,e.treatments.join("|"),c,`${t.name} cookie, ${s}, treatment id`),a})}(t,n)}function he(e){return 1===pe(e,W$)}function we(e){return e.bag.enableProductPageVariants}function ge(e,t,r=null){if(null===r&&(r=function(e){const t=function(e){const t=pe(e,Y$)
return c(t)?function(e){return Y$.identifer+e.toString().padStart(2,"0")}(t):null}(e)
return t}(e)),o(t.id))return
const s={adamID:t.id,productPageId:j$,treatmentPageIdMap:{[j$]:j$},experimentIdMap:{},experimentLocaleMap:{}}
return o(n(t,nC,null))||(function(e,t,r){const s=n(r,"meta.cppData",null)
if(o(s))return
const c=l(s,JO)
i(c)&&(t.productPageId=c)}(0,s,t),function(e,t,r,s,c){const a=n(c,"meta.experimentData",null)
if(o(a))return
const u=n(a,r,null)
if(o(u))return
const f=l(u,iw),d=l(u,cw)
let p=null
const h=n(u,"trafficAllocation",null)
p=i(h)?function(e,t,n){if(o(n))return j$
for(const[e,r]of Object.entries(t))if(i(r)&&-1!==r.indexOf(n))return e
return j$}(0,h,s):function(e,t,n){const r=ve(e,t,`customAttributes.${n}`)
if(o(r))return j$
const s=Object.keys(r)[0]
return o(s)?j$:s}(e,c,r),i(p)&&i(f)&&(t.treatmentPageIdMap[r]=p,t.experimentIdMap[r]=f,t.experimentLocaleMap[r]=d)}(e,s,j$,r,t)),s}function me(e,t,r,i,c){if(o(t))return null
let a
if(r.productPageId!==j$){const e=r.treatmentPageIdMap[j$]
a=c?[`${r.productPageId}.${j$}.${i}`,`${j$}.${e}.${i}`,`${j$}.${j$}.${i}`]:[`${r.productPageId}.${j$}.${i}`,`${j$}.${j$}.${i}`]}else{const e=r.treatmentPageIdMap[j$]
a=[`${j$}.${e}.${i}`,`${j$}.${j$}.${i}`]}for(const e of a){const r=n(t,e)
if(s(r))return r}return null}function Te(e){return r(e)||e.productPageId===j$?null:e.productPageId}function Ae(e,t){return Te(ge(e,t))}function ye(e,t){const n=ve(e,t,hy)
return o(n)?null:Object.keys(n).filter(e=>e!==j$)}function Ee(e){const t={}
Ie(e,m_)&&(t[aw]=e.productPageId)
const n=e.treatmentPageIdMap[j$],r=e.experimentIdMap[j$],o=e.experimentLocaleMap[j$]
return Ie(e,zI)&&(t.pageVariantId=n,t.pageExperimentId=r,t.pageExperimentLocale=o),t}function Pe(e){const t={}
Ie(e,m_)&&(t[aw]=e.productPageId)
const n=e.treatmentPageIdMap[j$],r=e.experimentIdMap[j$],o=e.experimentLocaleMap[j$]
return Ie(e,zI)&&(t.variantId=n,t[iw]=r,t[cw]=o),t}function Ie(e,t){if(r(e))return!1
switch(t){case m_:return i(e.productPageId)&&e.productPageId!==j$
case zI:return i(e.experimentIdMap)
default:de(t)}}function _e(e,t,n){for(const r of n){const n=Ae(e,r)
s(n)&&t.addingQuery(`ppid[apps:${r.id}]`,`${n}`)}}function Se(e,t,n,r=!1){return j(t,`dataHasDeviceFamily.${n}`,()=>!(!t||!n)&&-1!==Ce(e,t,r).indexOf(n))}function Oe(e,t,n,r=!1){return Se(e,t,n,r)&&1===Ce(e,t,r).length}function Re(e,t,n,r=!1){const o=new Set(Ce(e,t,r))
return n.length===o.size&&n.every(e=>o.has(e))}function Ce(e,t,n=!1){const r=A(t,hd)
if(0===r.length&&n){const r=ce(t,Pk)
for(const t of r){const r=Ce(e,t,n)
if(i(r))return r}}return r}function ve(e,t,n,r,o){r||(r=$e(e,t))
let s=te(t,r,n)
return s||(s=T(t,n,o)),s}function be(e,t,n){let s=function(e,t,n){const o=Q(e,t)
return r(o)?[]:a(o,n)}(t,$e(e,t),n)
return o(s)&&(s=A(t,n)),s}function ke(e,t,n,r=xb){let o=ne(t,$e(e,t),n,r)
return o||(o=y(t,n,r)),o}function De(e,t,n,o,s=xb){o||(o=$e(e,t))
let i=re(t,o,n,s)
return r(i)&&(i=E(t,n,s)),i}function Ne(e,t,n,o){o||(o=$e(e,t))
let s=re(t,o,n)
return r(s)&&(s=P(t,n)),s}function Le(e,t,n,o=xb){let s=function(e,t,n,o=xb){const s=Q(e,t)
return r(s)?null:f(s,n,o)}(t,$e(e,t),n,o)
return r(s)&&(s=I(t,n)),s}function $e(e,t){return j(t,"bestAttributePlatformFromData",()=>{const n=Re(e,t,[Hv,ib,CO],!0),o=Oe(e,t,OC),s=Oe(e,t,Sk),i=Oe(e,t,Ok)
let c=null
if(o?c=RC:s?c=tv:n?c=nb:i&&(c=Ok),!r(c))return c
const a=function(e){const t=xe(e)
switch(t){case nb:return[nb,RC,tv]
case tv:return[tv,nb,RC]
case RC:return[RC,nb,tv]
case Ok:return[nb,Ok,tv]
default:return[t]}}(e)
for(const e of a)if(ee(t,e))return e
return xe(e)})}function xe(e){switch(e.client.deviceType){case mk:case uk:return nb
case"tv":return RC
case Sk:return tv
case Ok:return Ok
default:return null}}function Fe(e,t,n,r,o){const s=O(r),c=me(0,ve(e,t,hy,o),n,s,R(s))
return i(c)?d(c):ve(e,t,r,o)}function Me(e){return null!==z$||(z$={bundleIdFromData:t=>ke(e,t,Jv),isDeletableSystemAppFromData:e=>P(e,yC),isUnsupportedDeletableSystemAppFromData:e=>!1}),z$}function Ue(e,t,n=30718){let o=!1
return 2&n&&(o=o||function(e,t){return Ne(e,t,rf)||Ne(e,t,of)}(e,t)),4&n&&(o=o||function(e,t){return j(t,"shouldFilterDeletableSystemApp",()=>{const n=Me(e)
if(!n.isDeletableSystemAppFromData(t))return!1
const r=n.bundleIdFromData(t),o=e.host.deviceModel,i=o.startsWith(af),c=o.startsWith(uf)
let a
switch(a=!!eu(e,"12.3")||e.bag.isTVAppEnabled,r){case"com.apple.Bridge":case"com.apple.Passbook":return!i
case"com.apple.calculator":case"com.apple.weather":return c
case"com.apple.Photo-Booth":return!c
case"com.apple.tv":return!a
case"com.apple.videos":return a
case"com.apple.iCloudDriveApp":return!0
case"com.apple.facetime":return!e.client.deviceHasCapabilities(["any-telephony"])||!e.client.deviceHasCapabilities(["venice"])
case"com.apple.Fitness":if(c){let t=!1
return s(e.user.isFitnessAppInstallationAllowed)&&(t=e.user.isFitnessAppInstallationAllowed),!t}return!e.client.isActivityAvailable
case"com.apple.measure":return!e.client.deviceHasCapabilities(["arkit"])
case"com.apple.Jellyfish":return!e.client.deviceHasCapabilities(["front-depth-camera"])
case sf:case cf:return!0
case"com.apple.NanoHeartRhythm":return!e.client.isElectrocardiogramInstallationAllowed
case"com.apple.NanoCompass.watchkitapp":return!e.client.deviceHasCapabilities(["magnetometer"])
case"com.apple.NanoOxygenSaturation.watchkitapp":return!e.client.isScandiumInstallationAllowed
case"com.apple.DeepBreathing":case"com.apple.NanoRadio":return!0}return!1})}(e,t)),8&n&&(o=o||function(e,t){return j(t,"shouldFilterUnsupportedWatchAppOnWatchClient",()=>{const n=Ne(e,t,qv),r=t.type===lk
return e.host.clientIdentifier===ON&&!n&&!r})}(e,t)),16&n&&(o=o||function(e,t){return t.type===Kv&&!P(t,"isMerchandisedEnabled")}(0,t)),32&n&&(o=o||function(e,t){return j(t,"shouldFilterLegacyApps",()=>{switch(ke(e,t,Jv)){case"com.apple.mobileme.fmip1":case sf:return!0}return!1})}(e,t)),64&n&&(o=o||function(e,t){return j(t,"isLegacyMacOSInstaller",()=>(ke(e,t,Jv),!1))}(e,t)),128&n&&(o=o||function(e,t){return j(t,"shouldFilterUnsupportedPlatform",()=>{if(t.type!==Pk&&t.type!==lk)return!1
const n=Ca(e,t),r=va(0,t,e.appleSilicon.isSupportEnabled)
return!Na(0,n,e.client.deviceType,r)})}(e,t)),32768&n&&(o=o||function(e,t){return j(t,"shouldFilterUnsupportedPlatformForCharts",()=>{if(t.type!==Pk&&t.type!==lk)return!1
const n=Ca(e,t),r=va(0,t,!0)
return!Na(0,n,e.client.deviceType,r)})}(e,t)),256&n&&(o=o||function(e,t){return j(t,"shouldFilterUnsupportedPreordersOnPlatform",()=>{if(!P(t,Lb))return!1
if(t.type!==Pk)return!1
const n=Ca(e,t),r=va(0,t,e.appleSilicon.isSupportEnabled)
return!xa(0,n,e.client.deviceType,r)})}(e,t)),512&n&&(o=o||function(e,t){return!(!e.client.isPhone||!Ne(e,t,AC)||function(e,t){if(r(t)||0===t.length)return!0
const n=t.split("."),o=f(n[0])||0,s=f(n[1])||0,i=f(n[2])||0
return e.client.isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(o,s,i)}(e,ke(e,t,oS)))||!eu(e,ba(e,t,e.appleSilicon.isSupportEnabled))}(e,t)),1024&n&&(o=o||function(e,t){return!(!e.bag.isArcadeComingSoonEnabled||!P(t,eI))}(e,t)),2048&n&&(o=o||function(e,t){const n=P(t,yC),r=!Ne(e,t,$A)&&Ne(e,t,AC)
return n&&r}(e,t)),4096&n&&(o=o||function(e,t){return e.client.deviceType===Ok&&(!Ne(e,t,AC)&&!Ne(e,t,LA)&&!function(e,t){return!(!r(t)&&0!==t.length)||e.client.isPairedSystemVersionAtLeast(t)}(e,ne(t,$e(e,t),Vb)))}(e,t)),8192&n&&(o=o||function(e,t){return e.client.deviceType===Sk&&(Ne(e,t,lf,xe(e))&&!e.appleSilicon.isSupportEnabled)}(e,t)),16384&n&&(o=o||function(e,t){const n=Ca(e,t)
return!(e.client.deviceType!==Sk||!n.includes(Sk))&&!$a(e,t,e.appleSilicon.isSupportEnabled,e.appleSilicon.isRosettaAvailable)}(e,t)),o}function Be(e,t){return t&&t.remainingContent?t.remainingContent.slice(0,t.maxPerPage):[]}function Ge(e,t){const n={...t}
if(t&&t.ids){const e=Ve(0,t.ids,t.maxPerPage)
n.ids=e}if(t&&t.remainingContent){const e=Ve(0,t.remainingContent,t.maxPerPage)
n.remainingContent=e}return n}function Ve(e,t,n){return t.slice(n,t.length)}function He(e,t,n){return t.slice(n,t.length)}function qe(e,t=!1,n=!1,r=0){const o=function(e,t){let n
switch(e.host.clientIdentifier){case JP:case eS:case DA:n=!1
break
default:n=e.client.supportsHEIF}return t?n?OS:pI:n?OS:Ly}(e,t)
return function(e,t,n=!1,r=0){const o=t===OS?60:70
return new Nk(t,o,n)}(0,o,n,r)}function We(e,t,n=0,r=0,o=null,s=null){const i=new Lk(t,n,r,[qe(e,!1,!1,0)])
return i.backgroundColor=o,i.checksum=s,i}function Ye(e,t){const n=Math.pow(10,t)
return(e>0?Math.floor:Math.ceil)(e/n)*n}function je(e){let t=e.targetType
return t||(t=Wb),t}function ze(e){let t=e.idType
return t||(t=qR),t}function Je(e,t){return Ja(e,t)?xC:null}function Ke(e,t){const n=l(t,nv),r=(Se(e,t,Sk,!0),Oe(e,t,Sk,!0)),o=function(e,t,n,r=!1){const o=new Set(Ce(e,t,r))
for(const e of n)if(o.has(e))return!0
return!1}(e,t,[Hv,ib,CO,OC,Ok],!0),s=Re(e,t,[Hv,ib,CO,OC,Ok],!0)
if(r)switch(n){case Pk:return ph
case lk:return"macSoftwareBundle"}if(s||o)switch(n){case Pk:return hh
case lk:return"mobileSoftwareBundle"}switch(n){case Kv:return"softwareAddOn"
case Mv:return UO
case UI:case Kb:return pO
default:return null}}function Ze(e){return null==e?"":e}function Xe(e){if(!e)return null
const t=new sN(e)
let n=null
for(const e of Object.keys(t.query))if("referrer"===e){t.query[e]===BI&&(n="com.apple.siri")
break}return n}function Qe(e){return p(et(g(e)))}function et(e){if(r(e))return null
if(e instanceof Array){const t=[]
for(const n of e){const e=et(n)
s(e)&&t.push(e)}return t}if(e instanceof Object){const t={}
return Object.keys(e).forEach((n,r,o)=>{const i=et(e[n])
s(i)&&(t[n]=i)}),t}return e}function tt(e){if(!e)return null
const t=new sN(e),n=t.query[nS],o=t.pathname
return r(n)||r(o)?null:o.endsWith("/search")?n:null}function nt(e,t,n){if(!t||!n)return wk
if(t.type===lk)return vA
const r=n.style
switch(r){case IS:return nb
case Ay:return Sk
case $I:return"tv"
case LI:return Ok
case PS:return yb
case lR:return lR
default:return de(r),wk}}function rt(e,t){if(!s(t))return null
const n={},r=d(t,mh)
if(!i(r))return null
const o=l(r,Th)
i(o)&&(n[Th]=o)
const c=l(r,Ah)
return i(c)&&(n[Ah]=c),n.marketing={marketingItemId:t.id,offerDecisionId:l(t,"meta.metrics.decisionId")},n}function ot(e,t,n){let o
return s(e)&&(o=W(e)),s(t)&&(r(o)&&(o={}),o.odpModuleUpdate=t.toString()),i(n)&&(r(o)&&(o={}),o.userSegment=n),o}function st(e,t){return t}function it(e,t,n,r,o){const s={}
Object.assign(s,r),s[HC]=GO,s[sE]=n,s[$p]=t
const i=["impressionsSnapshot",CR]
return o&&i.push(...o),st(0,new rD(s,i,[],lt(0,s),ut(e,s)))}function ct(e,t,n,r,o,s,i){const c={}
Object.assign(c,s),c[nS]=t,c[sE]=n,c[WR]=r,o&&(c[xS]=o),c[HC]=Rb
const a=[t_]
return i&&a.push(...i),st(0,new rD(c,a,[],lt(0,c),ut(e,c)))}function at(e,t,n,r){const o={}
Object.assign(o,t),o[HC]=Ov,o[FS]=Up,o[r_]=4
const s=[Ov,CR,t_]
return n&&s.push(VO),r&&s.push(Bp),st(0,new rD(o,s,[],lt(0,o),ut(e,o)))}function ut(e,t){const n=t[HC]
let r=!1
if(!i(n))return r
switch(n){case GO:r=u(t,hx.hasIAdData)
break
case Gp:r=!0
break
case Ov:r=u(t,hx.hasIAdData)}return e.host.clientIdentifier,r}function lt(e,t){return t[hI]||nD}function ft(e,t){const n=Pt(e.locationTracker)
return n.push(yt(e,t)),n}function dt(e,t){const n=Pt(e.locationTracker)
return n.push(Et(e,t)),n}function pt(e,t){const n=new wx
n.location=yt(e,t),e.locationTracker.locationStack.push(n)}function ht(e,t){const n=new wx
n.location=Et(e,t),e.locationTracker.locationStack.push(n)}function wt(e){0!==e.locationStack.length?e.locationStack.pop():Ll.Gi(Hb,"non-empty location stack","empty location stack")}function gt(e){const t=It(e)
return t?t.position:e.rootPosition}function mt(e){const t=It(e)
return t?t.location:null}function Tt(e,t){const n=It(e)
n?n.position=t:e.rootPosition=t}function At(e){const t=It(e)
t?t.position++:e.rootPosition++}function yt(e,t){var n
const r=Et(e,t)
if(!e.id&&e.locationTracker)r.idType=Mb,r.id=gt(e.locationTracker).toString()
else{r.idType=ze(e)
let t=e.id;(null===(n=e.anonymizationOptions)||void 0===n?void 0:n.anonymizationString)&&(t=e.anonymizationOptions.anonymizationString),r.id=Ze(t)}return e.fcKind&&(r.fcKind=e.fcKind),e.displayStyle&&(r.displayStyle=e.displayStyle),e.inAppEventId&&(r.inAppEventId=e.inAppEventId),e.relatedSubjectIds&&(r.relatedSubjectIds=e.relatedSubjectIds),e.productVariantData&&Object.assign(r,Pe(e.productVariantData)),r}function Et(e,t){var n
let r=t;(null===(n=e.anonymizationOptions)||void 0===n?void 0:n.anonymizationString)&&(r=e.anonymizationOptions.anonymizationString)
const o={locationPosition:gt(e.locationTracker),locationType:je(e),name:Ze(r)}
return e.recoMetricsData&&Object.assign(o,e.recoMetricsData),o}function Pt(e){return e.locationStack.map(e=>e.location)}function It(e){const t=e.locationStack.length
return 0===t?null:e.locationStack[t-1]}function _t(e,t,n){return Ll.Do("clickOptionsForLockup",()=>{var s
const c=t.id.slice()
let a=t.id
i(null===(s=n.anonymizationOptions)||void 0===s?void 0:s.anonymizationString)&&(a=n.anonymizationOptions.anonymizationString)
const u={...n,id:a,contextualAdamId:c,softwareType:Je(e,t)}
return o(u.targetType)&&(u.targetType=Wb),r(u.kind)&&(u.kind=Ke(e,t)),E(t,Lb)&&(u.offerType=gv),u})}function St(e,t,n,r,o,c,a){var u,l,f,d
const p={}
if(o){const e=o
a&&i(null===(u=e.iAdInfo)||void 0===u?void 0:u.iAdAdamId)&&e.iAdInfo.iAdAdamId===t.adamId&&Object.assign(p,o.iAdInfo.clickFields),i(e.searchTermContext)&&(p[mv]=e.searchTermContext.term)}p[bR]={buyParams:t.purchaseConfiguration.buyParams},p[pR]=c,p[px]=t.adamId,r&&(p[US]=gv,s(t.expectedReleaseDate)&&(p[pE]=G(t.expectedReleaseDate)))
const h=it(e,n,fk,p)
p[px]=t.adamId,h.includingFields.push(hE),t.purchaseConfiguration.isArcadeApp&&h.includingFields.push(Jp)
const w=null!==(d=null===(f=null===(l=o)||void 0===l?void 0:l.iAdInfo)||void 0===f?void 0:f.shouldIncludeAdRotationFields)&&void 0!==d&&d
a&&w&&h.includingFields.push(VO),t.actionMetrics.addMetricsData(h)}function Ot(e,t,n){Rt(e,t,{...n,actionType:wE,subscriptionSKU:e.bag.arcadeProductId,actionContext:xC,targetType:fk})}function Rt(e,t,n,r=!1,o){var c,a,u,l,f
let d=n.actionType
d||(d=Qv)
const p={actionType:d}
if(t instanceof wD){const e=t
p[xS]=e.pageUrl}else if(t instanceof TD){const e=t
p[xS]=e.url}n.actionDetails&&(p[bR]=n.actionDetails),n.actionContext&&(p.actionContext=n.actionContext),s(n.offerType)&&(p[US]=n.offerType),s(n.offerReleaseDate)&&(p[pE]=G(n.offerReleaseDate))
let h=t.title
i(null===(c=n.anonymizationOptions)||void 0===c?void 0:c.anonymizationString)&&(h=n.anonymizationOptions.anonymizationString),p[pR]=ft(n,h),n.pageInformation&&n.pageInformation.searchTermContext&&(p[mv]=n.pageInformation.searchTermContext.term),s(n.softwareType)&&(p[BS]=n.softwareType),(n.isAdvert||n.isAdEligible)&&r&&(null===(a=n.pageInformation)||void 0===a?void 0:a.iAdInfo)&&Object.assign(p,n.pageInformation.iAdInfo.clickFields),n.mercuryMetricsData&&Object.assign(p,n.mercuryMetricsData)
const w=it(e,n.id,null!=o?o:je(n),p)
n.actionContext===xC&&(n.actionType===mI||n.actionType===wE)&&(w.includingFields.push(Jp),w.fields[px]=n.contextualAdamId)
const g=null!==(f=null===(l=null===(u=n.pageInformation)||void 0===u?void 0:u.iAdInfo)||void 0===l?void 0:l.shouldIncludeAdRotationFields)&&void 0!==f&&f
n.isAdvert&&g&&w.includingFields.push(VO),t.actionMetrics.addMetricsData(w)}function Ct(e,t,n,r){const o={}
s(n)&&(o[xS]=n),r.targetType||(r.targetType=fk),o[pR]=dt(r,t.title),o[WR]=Qv,o[yI]="button_See All"
const i=it(e,Kp,fk,o)
t.actionMetrics.addMetricsData(i)}function vt(e,t,n){const r={}
r[WR]="filter"
const o=it(e,`filter_${n}`,fk,r)
o.includingFields.push(Zp),t.actionMetrics.addMetricsData(o)}function bt(e,t,n,r){const o=function(e,t){switch(t){case kR:return kR
case zy:return zy
case qO:return mE
case TE:return"searchInsteadFor"
case AE:return eh
case yE:return yE
default:return"submit"}}(0,t.origin),s={actionType:o,actionUrl:Ze(t.url),location:dt({pageInformation:null,locationTracker:r,targetType:n},t.term),page:vC,pageType:vC,searchTerm:t.term,pageDetails:Xp},c={targetId:t.term},a={}
i(t.prefixTerm)&&(a[GS]=t.prefixTerm),i(t.entity)&&(a[VS]=t.entity),i(a)&&(c[bR]=a),i(t.originatingTerm)&&(s[gE]=t.originatingTerm,c[gE]=t.originatingTerm)
const u=it(e,"",n,s,[Qp])
t.actionMetrics.addMetricsData(u)
const l=ct(e,t.term,n,o,t.url,c,[Qp])
t.actionMetrics.addMetricsData(l)}function kt(e,t){return s(t)?y(t,"customUrl"):null}function Dt(e,t,n,r,o,s,c){if(!i(o)&&e.client.deviceType!==Sk)return t
let a
{const e=new OD(n,sk)
a=new ZD(r,o,e)}const u=W(c)
if(u.actionType=vS,u.actionDetails={actionUrl:o},Rt(e,a,u,!1,fk),t instanceof SD)return t.openAction=a,t.includeBetaApps=s,t
{const e=new SD(n,t)
return e.openAction=a,e.includeBetaApps=s,e}}function Nt(e,t=null){return e===Sk?function(e){let t="x-apple.systempreferences:com.apple.preferences.softwareupdate?client=AppStore&variant=CUSTOMER"
return e&&(t+=`&installMajorOSBundle=${e}`),t}(t):null}function Lt(e){var t
const n={}
if(!e)return n
Object.assign(n,e.baseFields),e.pageUrl?n[n_]=e.pageUrl:e.timingMetrics&&e.timingMetrics.pageURL&&(n[n_]=e.timingMetrics.pageURL),e.recoMetricsData&&Object.assign(n,e.recoMetricsData),e.mercuryMetricsData&&Object.assign(n,e.mercuryMetricsData),e.productVariantData&&Object.assign(n,Ee(e.productVariantData)),e.iAdInfo&&s(e.iAdInfo.pageFields[hx.hasIAdData])&&(n[hx.hasIAdData]=e.iAdInfo.pageFields[hx.hasIAdData])
const r=null===(t=e.iAdInfo)||void 0===t?void 0:t.pageFields[Tv]
return s(r)&&(n[Tv]=r),Qe(n)}function $t(e,t,n,o,c,a,u,f,d,p,h,w,m,T){const A=function(e,t){const n=new mx(t),r=l(e.bag.metricsConfiguration,"metricsBase.language")
return n.set("languageId",r),n.toString()}(e,n),y=function(e,t,n,o,i,c){var a
const u=new mx(t),f=l(i,p_)
u.set(p_,f),u.set(hI,nD),Tx.useNativeValues(i)
const d=Tx.params
for(const e of Object.keys(d)){const t=l(d,e)
u.set(e,t)}if(!r(c))for(const e of Object.keys(c)){const t=l(c,e)
u.set(e,t),u.set(e,t,null)}if(!i)return u.set(mv,null),u.set(l_,null),u.toString()
if(!o){const e=l(i,d_),t=Xe(e)
e&&t&&(i[a_]=t)
const n=l(i,"usageContext")
if((0,Ul.isSome)(n)){const e=l(i,h_)
switch(n){case jp:u.set(h_,"com.apple.AppStore.overlay")
break
case dE:u.set(h_,zp)}u.set(f_,e,null)}else{const e=l(i,f_)
u.set(f_,e,null)
const t=l(i,d_)
u.set(d_,t,null),"clip"===l(i,"extRefAppType")&&u.set(h_,zp)}}const p=u.get(HO),h=u.get(oC),w=(null!==(a=null==p?void 0:p.split("_"))&&void 0!==a?a:[]).includes(n)
if(h!==vR||w){const e=tt(l(i,i_))
s(e)&&u.set(mv,e)}return u.toString()}(0,function(e,t,n,o,c,a,u,f,d,p,h){var w
const m=new mx(t),T=Lt(o)
c&&m.set(fE,c),a&&m.set(YR,a)
const A=l(g(T),HO)
m.set(HO,A)
const y=l(g(T),oC)
m.set(oC,y)
const E=l(g(T),u_)
m.set("mtIadTemplateType",E,null)
const P=l(g(T),MS)
i(P)&&m.set(yx.containerId,P,null)
const I=(null!==(w=null==A?void 0:A.split("_"))&&void 0!==w?w:[]).includes(n)
if(y!==vR||I){const e=l(g(o),mv)
r(e)||m.set(mv,e)}return function(e,t,n,r){const o=s(n)&&n.adamID===t,i=s(r)&&r.adamID===t&&!o
if(o){const t=Ee(n)
for(const n of Object.keys(t)){const r=l(t,n)
e.set(n,r)}}if(i){const t=Pe(r)
for(const n of Object.keys(t)){const r=l(t,n)
e.set(n,r)}}}(m,n,null==o?void 0:o.productVariantData,f),!r(u)&&u.length>0&&m.set(l_,u),m.set(Yp,d),m.set(f_,p,null),m.set(d_,h,null),m.toString()}(0,A,t,o,a,u,f,h,w,m,T),t,c,d,p)
return y}function xt(e,t){const n=Ne(e,t,"usesExternalPurchase"),r=Ne(e,t,"usesExternalLinkPurchase")
return n||r}function Ft(e,t){return e.bag.enableExternalPurchases&&e.bag.enabledExternalPurchasesPlacements.includes(t)}function Mt(e,t,n,r){const s=e.bag.externalPurchasesLearnMoreEditorialItemId
if(o(s)||!e.bag.enableExternalPurchases)return null
const i=new wD(bb)
return i.title=t,i.pageUrl=`https://apps.apple.com/story/id${s}`,Rt(e,i,{id:"LearnMore",targetType:vb,actionType:Qv,pageInformation:n,locationTracker:r}),i}function Ut(e,t){return Ll.Do("offerDataFromData",()=>{const n=be(e,t,WO)
return 0===n.length?null:n[0]})}function Bt(e,t){const n=A(t,WO)
return 0===n.length?null:n[0]}function Gt(e,t,n,o,c,a,u,f=tk,d){return Ll.Do(`offerActionFromOfferData: ${n.id}`,()=>{var p,h,w,g
let m=l(t,iS)
if(r(m))return Ll.bm(Hb,Ik,tE),null
n.type===lk&&(m.indexOf("rebuy")>=0?m=m.replace("rebuy=false",Ch):(m.length>0&&(m+="&"),m+=Ch)),i(u.inAppEventId)&&(m.length>0&&(m+="&"),m+=`mtInAppEventId=${u.inAppEventId}`)
const T=null===(h=null===(p=u.pageInformation)||void 0===p?void 0:p.iAdInfo)||void 0===h?void 0:h.placementId
s(T)&&(m.length>0&&(m+="&"),m+=`${yx.placementId}=${T}`)
const A=null===(g=null===(w=u.pageInformation)||void 0===w?void 0:w.iAdInfo)||void 0===g?void 0:g.containerId
s(A)&&(m.length>0&&(m+="&"),m+=`${yx.containerId}=${A}`)
const E=n.id
if(r(E))return Ll.bm(Hb,Ik,"item.offer.id"),null
const P=function(e,t,n,r,o,s,i,c,a){return Ll.Do("purchaseConfigurationFromProduct",()=>{const u=y(t,_k)
let f=y(t,Fv)
f||(f=Oh)
const d=Me(e).bundleIdFromData(t),p=Ca(e,t),h=y(t,Np),w=ke(e,t,"preflightPackageUrl"),g=Ja(e,t),m=va(0,t,e.appleSilicon.isSupportEnabled),T=l(a,sk),A=l(a,QP),E=new bk(n,f,u,d,p,r,o,i,h,!1,w,g,m,c.inAppEventId,T,A)
return E.pageInformation=s,E.productVariantData=ge(e,t),E.targetType=c.targetType,E.metricsKind=c.kind,E})}(e,n,m,o,u.excludeAttribution,u.pageInformation,a,u,d),I=Wt(e,t,E,P,c,f)
return function(e,t,n,r){var o
const s=n.pageInformation,c=ft(n,t.title)
let a=t.adamId
i(null===(o=n.anonymizationOptions)||void 0===o?void 0:o.anonymizationString)&&(a=n.anonymizationOptions.anonymizationString),St(e,t,a,r,s,c,n.isAdvert)}(e,I,u,o),I})}function Vt(e,t){return r(t)||r(t.price)||0===t.price}function Ht(e,t){return Ll.Do("expectedReleaseDateFromData",()=>B(y(t,"offers.0.expectedReleaseDate")))}function qt(e,t){const n=l(t,nv)
return n===mI||n===A_||n===gv?f(t,gO):null}function Wt(e,t,n,r,o,s=tk){return Ll.Do("offerActionFromOfferData",()=>{const i=l(t,nv)
let c
switch(i){case"get":c=s===Gv?e.loc.string(vh,"Get"):e.loc.string(y_,UR)
break
case gv:c=s===Gv?e.loc.string(bh,"Pre-Order"):e.loc.string(y_,UR)
break
default:c=i}let a=null,u=null
const f=qt(0,t)
f>0&&(a=f,u=l(t,qS))
const d=B(l(t,SS)),p=new yD(c,n,r)
return p.price=a,p.priceFormatted=u,p.expectedReleaseDate=d,p.includeBetaApps=o,p})}function Yt(e,t,n,o,c,a=tk,u=!1,l=null,f=!1){if(Xa(0,n)){if(a===Gv)return null
if(a===tk)return ca(e,n,c,null,u)
const r=ke(e,n,Jv)
if(i(r)){const e=Nt(Sk,r),n=new TD(e)
return new SD(t.adamId,n)}}if(a===tk&&(n.type===lk||Qa(e,n)||f))return ca(e,n,c,null,u)
if(o&&"tv"!==e.client.deviceType&&!Ja(e,n)){const o=function(e,t,n,o,s){if(r(t))return null
if(e.bag.arePreordersCancellable){const r=zt(e,n,t,!1,o)
return r.buyAction=t,r}{if(s!==tk)return null
const r=ca(e,n,o,null,!1)
if(!r)return t
const i=new SD(t.adamId,r)
return i.buyAction=t,i}}(e,t,n,c,a)
if(null!==o)return o}if(Oe(e,n,OC)&&"tv"!==e.client.deviceType)return function(e,t,n){const r=new ND(tk)
r.title=e.loc.string("BUY_TV_ONLY_ALERT_TITLE"),r.message=e.loc.string("BUY_TV_ONLY_ALERT_MESSAGE"),r.isCancelable=!0,r.buttonActions=n?[Zt(e,t)]:[t],r.buttonTitles=[e.loc.string("BUY_TV_ONLY_ALERT_BUTTON_TITLE")]
const o=new SD(t.adamId,r)
return o.title=t.title,o}(e,t,Ne(e,n,sS))
if(!Ne(e,n,$A)&&Ne(e,n,AC)&&e.client.deviceType!==Ok)return function(e,t){const n=new ND(tk)
n.title=e.loc.string("BUY_WATCH_ONLY_ALERT_TITLE"),n.message=e.loc.string("BUY_WATCH_ONLY_ALERT_MESSAGE"),n.isCancelable=!0,n.buttonActions=[t],n.buttonTitles=[e.loc.string("BUY_WATCH_ONLY_ALERT_BUTTON_TITLE")]
const r=new SD(t.adamId,n)
return r.title=t.title,r}(e,t)
const d=ke(e,n,oS)
if(i(l)&&l===ON&&tu(e,d))return function(e,t,n){const r=new ND(tk)
r.title=e.loc.string("AppStore.ProductPage.WatchOSUpdateRequired.Title").replace(iC,n),r.message=e.loc.string("AppStore.ProductPage.WatchOSUpdateRequired.Message").replace(iC,n),r.buttonActions=[t],r.buttonTitles=[e.loc.string(oy)]
const o=new SD(t.adamId,t)
return o.buyAction=r,o}(e,t,d)
if(function(e,t){return Ja(e,t)||!1}(e,n)){const i=function(e,t,n,o,i){return"tv"===e.client.deviceType?function(e,t,n,o,i){if(r(t))return{startAction:null,underlyingOfferAction:null}
if("tv"!==e.client.deviceType)return{startAction:t,underlyingOfferAction:null}
const c=new PD,a=Vt(0,t),u=t.purchaseConfiguration.appName
c.shouldCheckForAvailableDiskSpace=!o,c.remoteControllerRequirement=MR,c.shouldCheckForGameController=Ne(e,n,sS),c.shouldPromptForConfirmation=!0
const l=I(n,$h)
if(s(l)&&(c.checkRestrictionsForContentRating=l),a){const t=o?e.loc.string("TV_OFFER_ALERT_TITLE_PREORDER_FREE"):e.loc.string("TV_OFFER_ALERT_TITLE_FREE")
c.title=t.replace(sC,u)}else{const n=o?e.loc.string("TV_OFFER_ALERT_TITLE_PREORDER_PAID"):e.loc.string("TV_OFFER_ALERT_TITLE_PAID")
c.title=n.replace(sC,u).replace(WS,t.priceFormatted)}const f=W(t)
f.title=o?e.loc.string("OFFER_BUTTON_TITLE_PREORDER"):a?e.loc.string(y_):e.loc.string("OFFER_BUTTON_TITLE_BUY"),c.completionAction=f,c.shouldIncludeActiveAccountInFooterMessage=!0
const d=[]
o&&!e.bag.arePreordersCancellable&&d.push(e.loc.string("TV_PREORDER_TERMS")),Ne(e,n,Dy)&&d.push(e.loc.string("OFFERS_IN_APP_PURCHASES","Offers In-App Purchases")),d.length>0&&(c.footerMessage=d.join(e.loc.string(Nh))),c.impressionMetrics=f.impressionMetrics
const p=W(c)
p.shouldPromptForConfirmation=!1,p.title=null,p.footerMessage=null
const h=new SD(t.adamId,p)
return Ja(e,n)||(h.buyAction=c),h.openAction=t,{startAction:h,underlyingOfferAction:f}}(e,t,n,o):{startAction:r(t)?null:t,underlyingOfferAction:null}}(e,t,n,o),u=i.startAction
if(Ja(e,n))return function(e,t,n,r,o,s,i,c){if(!Ja(e,r))return t
let a=null
const u=L(i),l=new I$(pk,i,r.id)
u&&(l.purchaseSuccessAction=t,l.carrierLinkSuccessAction=t)
const f=new wD(FC)
if(f.pageData=l,a=f,c&&c.pageInformation&&(a.referrerUrl=c.pageInformation.pageUrl),t instanceof yD&&(c.actionDetails={buyParams:t.purchaseConfiguration.buyParams,...c.actionDetails}),Ot(e,a,c),o&&t instanceof yD&&"tv"!==e.client.deviceType){let n
if(e.bag.arePreordersCancellable){n=zt(e,r,t,!0,c),n.buyAction=t
const o=zt(e,r,t,!0,c)
o.buyAction=t,n.subscribePageAction=o}else{let o=new BD
s===tk&&(o=ca(e,r,c,null,!1)),n=new SD(r.id,o),n.buyAction=t,n.subscribePageAction=t}return t.buyCompletedAction=function(e,t){const n=We(e,"systemimage://checkmark",95,90),r=We(e,vf,95,90),o=new ND(yO)
o.title="",e.bag.arePreordersCancellable?o.artwork=n:o.artwork=r,e.client.isAutomaticDownloadingEnabled()?(o.message=e.loc.string(Dh),o.toastDuration=2.5):(o.message=e.loc.string(E_),o.toastDuration=1.5)
let s=o
const i=new ND(yO)
i.title="",i.artwork=r,i.message=e.loc.string(E_),i.toastDuration=1.5
const c=new VD(Lh,new AD([t,i]))
c.rateLimit=e.bag.arcadePreOrderUpsellLimitSeconds,c.fallbackAction=i
let a=c
return e.props.enabled(bf)&&e.bag.newEventsForODJAreEnabled&&!e.client.isAuthorisedForUserNotifications()&&(a=new BD,s=new BD),new HD(a,s,s,s)}(e,a),n}const d=new SD(r.id,t)
return d.subscribePageAction=a,d}(e,u,i.underlyingOfferAction,n,o,a,function(e,t,n){if(n)return YP
switch(t){case Yv:return dO
case tk:case Gv:return qP
default:return wC}}(0,a,o),c)
if(o&&e.bag.arePreordersCancellable){let t
return t=zt(e,n,i.underlyingOfferAction,!1,c),t.buyAction=u,t}return u}return Kt(e,t,o,c)}function jt(e,t,n,r,o,s){switch(r){case dO:case qP:const r=Aa(e,t,{useCase:3}),i=_t(e,t,s)
return Gt(e,Ut(e,t),t,o,!1,nt(0,t,r),i,n)
default:return null}}function zt(e,t,n,r,o){let s
if(r){const i=Jt(e,t,n.purchaseConfiguration.appName,r,!0,o),c=Jt(e,t,n.purchaseConfiguration.appName,r,!1,o)
s=new HD(c,c,i,c)}else s=Jt(e,t,n.purchaseConfiguration.appName,!1,!1,o)
return new SD(t.id,s)}function Jt(e,t,n,r,o,s){const i=new ID(t.id,r),c=e.loc.string("CANCEL_COMING_SOON_TITLE")
let a
e.client.isAutomaticDownloadingEnabled()&&(r&&o||!r)?(i.title=e.loc.string("CANCEL_COMING_SOON_BUTTON_DOWNLOAD"),a=e.loc.string("COMING_SOON_BODY_DOWNLOAD").replace(kh,n)):(i.title=e.loc.string("CANCEL_COMING_SOON_BUTTON"),a=e.loc.string("COMING_SOON_BODY").replace(kh,n))
const u=e.loc.string("CANCEL_COMING_SOON_CANCEL")
let l
switch(e.client.deviceType){case Sk:case"tv":const e=new ND(tk)
e.title=c,e.message=a,e.buttonActions=[i],e.isCancelable=!0,e.cancelTitle=u,e.destructiveActionIndex=0,l=e
break
default:const t=new DD([i])
t.title=c,t.message=a,t.isCancelable=!0,t.cancelTitle=u,t.isCustom=!1,t.destructiveActionIndex=0,l=t}return Rt(e,i,{...s,actionType:"cancelPreorder"}),l}function Kt(e,t,n,o){if(r(t))return null
if(e.client.newPaymentMethodEnabled||n)return t
const s=new BD
s.impressionMetrics=t.impressionMetrics
const i=W(o)
r(i)||(i.actionType=wE,i.targetType=fk,Rt(e,s,i))
const c=new ED(t,s)
return c.confirmationAccessibilityAction=function(e,t){if(r(t))return null
const n=new ND(tk)
r(t.priceFormatted)?(n.title=e.loc.string(UR),n.message="Are you sure you want to get "+t.purchaseConfiguration.appName):(n.title="Buy App",n.message=`Are you sure you want to buy ${t.purchaseConfiguration.appName} for ${t.priceFormatted}`),n.isCancelable=!0,n.buttonActions=[t]
const o=new SD(t.adamId,t)
return o.buyAction=n,o}(e,t),c}function Zt(e,t){const n=new ND(tk)
return n.title=e.loc.string("BUY_TV_GAME_CONTROLLER_REQUIRED_ALERT_TITLE"),n.message=e.loc.string("BUY_TV_GAME_CONTROLLER_REQUIRED_ALERT_MESSAGE"),n.buttonTitles=[e.loc.string("BUY_TV_GAME_CONTROLLER_REQUIRED_ALERT_BUTTON_TITLE")],n.isCancelable=!0,n.buttonActions=[t],n}function Xt(e,t,n,o,i,c,a,u,f,d=tk,p=!1){return r(t)?null:Ll.Do("displayPropertiesFromOfferAction",()=>{let r=c
Ue(e,o,23990)&&(r=rR),pa(e,o)||(r=rR)
const h=ha(0,o)
let w=null
h&&(w=h.id)
let g=new kk(n,t.adamId,r,w,a)
g.isPreorder=i,i&&(Ja(e,o)?(g.offerLabelStyle=YP,g.subtitles[SS]=ru(e,o,e.loc.string(OE)),e.bag.arePreordersCancellable&&(g.titleSymbolNames[xh]=Fh,g.titleSymbolNames[Mh]="bell.fill"),g.subtitles[SS]===e.loc.string(nE)&&(g.subtitles[SS]=e.loc.string(OE))):(g.offerLabelStyle=gv,e.bag.arePreordersCancellable&&(g.titleSymbolNames[ok]=Fh)))
const m=Vt(0,t)
g.isFree=m
let T=null
if(d===tk&&(o.type===lk||Xa(0,o)||Qa(e,o)||p))T=e.loc.string(Uh)
else{if(d===Gv&&(o.type===lk||Xa(0,o)||Qa(e,o)))return null
T=m?d===Gv?i?e.loc.string(bh):e.loc.string(vh):t.title:d===Gv?i?e.loc.string("FLOW_PREVIEW_OFFER_ACTION_PREORDER_WITH_PRICE").replace(WS,t.priceFormatted):e.loc.string("FLOW_PREVIEW_OFFER_ACTION_BUY_WITH_PRICE").replace(WS,t.priceFormatted):t.priceFormatted}if(g.titles[ok]=T,e.client.newPaymentMethodEnabled||d===Gv||(g.titles[RE]=m?e.loc.string("ACTION_GET_CONFIRM"):e.loc.string("ACTION_BUY_CONFIRM")),Ja(e,o))if(d===Gv){const t=e.loc.string("FLOW_PREVIEW_OFFER_ACTION_ARCADE_STANDARD")
g.titles[ok]=t,g.titles[CE]=t,g.titles[vS]=e.loc.string("FLOW_PREVIEW_OFFER_ACTION_ARCADE_OPEN"),g.titles[vE]=t,i&&(g.titles[Bh]=e.loc.string("FLOW_PREVIEW_OFFER_ACTION_ARCADE_PREORDER_SUBSCRIBED"),g.titles[Gh]=e.loc.string("FLOW_PREVIEW_OFFER_ACTION_ARCADE_PREORDER_NOT_SUBSCRIBED"))}else{const t=e.loc.string(Af)
g.titles[ok]=t,g.titles[CE]=t,g.titles[vS]=e.loc.string(Tf),g.titles[vE]=t,i&&(g.titles[Bh]=e.loc.string("OFFER_BUTTON_TITLE_ARCADE_PREORDER_SUBSCRIBED"),g.titles[Gh]=e.loc.string("OFFER_BUTTON_TITLE_ARCADE_PREORDER_NOT_SUBSCRIBED"),g.titles[xh]=e.loc.string("OFFER_BUTTON_TITLE_ARCADE_PREORDERED_SUBSCRIBED"),g.titles[Mh]=e.loc.string("OFFER_BUTTON_TITLE_ARCADE_PREORDERED_NOT_SUBSCRIBED"))}if(u&&d!==Gv){const t=l(u,Eh),n=l(u,qS)
if(s(n)&&s(t)){let r=null,o=null
switch(t){case Ph:f?(r=e.loc.string(bE),o=e.loc.string(bE)):(r=e.loc.string(bE),o=e.loc.string(P_))
break
case Ih:const t=e.loc.string("INTRO_PRICE_OFFER_PAID_UPFRONT_TRIAL").replace(WS,n)
f?(r=t,o=t):(r=t,o=e.loc.string(P_))
break
case Sh:r=e.loc.string(P_),o=e.loc.string(P_)}g.titles[kE]=r,g.titles[DE]=o,g.subtitles[kE]=e.loc.string(Vh),g.subtitles[DE]=e.loc.string(Vh)
const s=10
let i=!1
for(const e of Object.keys(g.titles))if(g.titles[e].length>s){i=!0
break}i&&(g=g.newOfferDisplayPropertiesChangingAppearance(!1,null,bp))}}const A=Ne(e,o,Dy),y=xt(e,o),E=Ft(e,Wb),P=y&&E
if(g.hasInAppPurchases=A,g.hasExternalPurchases=P,A||P){const t=P?e.loc.string(Hh):e.loc.string(qh)
g.subtitles[ok]=t,e.client.newPaymentMethodEnabled||d===Gv||(g.subtitles[RE]=t)}g.isDeletableSystemApp=Me(e).isDeletableSystemAppFromData(o)&&!Qa(e,o)
const _=I(o,$h)
return g.contentRating=_,o.type===lk&&d!==Gv&&(g.offerToken={offerAction:t,offerDisplayProperties:W(g)}),g})}function Qt(e){return e.bag.enableAppEvents&&!0}function en(e,t,n){return ga(e,T(t,n),{useCase:0,withJoeColorPlaceholder:!0,cropCode:"sr"})}function tn(e,t,n,o){const s=en(e,t,`${n}.previewFrame`)
if(r(s))return null
const i=y(t,`${n}.video`)
if(r(i))return null
const c={muteUnmute:e.props.enabled("appEventsMuteButton")},a=new eD(i,s,{allowsAutoPlay:!0,looping:!0,canPlayFullScreen:o,showPlaybackControls:!1,playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:c})
return a.canPlayFullScreen=o,a.allowsAutoPlay=!0,a.looping=!0,a}function nn(e,t,n,s,i,c,a,u,l,f){if(o(t)||o(n))return null
const d={...u,id:t.id,inAppEventId:t.id,relatedSubjectIds:[n.id],idType:qR}
var p;(p=u)&&p.hasOwnProperty("id")&&(d.id=u.id,d.idType=u.idType),pt(d,"")
const h=y(t,VA),w=Xc(e,n,{metricsOptions:{...u,id:n.id,inAppEventId:t.id,relatedSubjectIds:[n.id],targetType:Wb,idType:qR},artworkUseCase:1,externalDeepLinkUrl:h,crossLinkSubtitle:a?s:null,offerEnvironment:i,offerStyle:c,skipDefaultClickAction:!l,includeBetaApps:!0,referrerData:f})
return r(w)?null:(a&&(w.crossLinkTitle=e.loc.uppercased(w.title)),wt(u.locationTracker),At(u.locationTracker),w)}function rn(e,t,n,r,o){if(n.startDate.getTime()<=Date.now())return null
const s=e.loc.string("APP_EVENTS_NOTIFICATION_TITLE").replace("{appTitle}",n.lockup.title),c=e.loc.string("APP_EVENTS_NOTIFICATION_DETAIL").replace("{eventTitle}",n.title),a=n.startDate,u=n.lockup.icon,l=n.lockup.icon.template.replace("{w}",`${u.width}`).replace("{h}",`${u.height}`).replace("{c}","wd").replace("{f}",pI)
let f,d
if(o&&(f=new ND(yO),f.title=e.loc.string("APP_EVENTS_NOTIFICATION_TOAST_TITLE"),f.message=e.loc.string("APP_EVENTS_NOTIFICATION_TOAST_DETAIL"),f.artwork=We(e,vf)),e.props.enabled(bf)&&e.bag.newEventsForODJAreEnabled){const o=new BD,s=Lt(r.pageInformation)
s[WR]="notifyActivateNotificationsDisabled",s[pR]=ft({...r,id:t.id},null),s[hI]=""
const i=it(e,n.lockup.adamId,Wb,s)
o.actionMetrics.addMetricsData(i),d=o}else{const t=new ND(tk)
t.title=e.loc.string("APP_EVENTS_NOTIFICATION_NOT_AUTHORIZED_TITLE"),t.message=e.loc.string("APP_EVENTS_NOTIFICATION_NOT_AUTHORIZED_DETAIL"),t.isCancelable=!0,t.buttonTitles=[e.loc.string(ff)],t.buttonActions=[new TD("prefs:root=NOTIFICATIONS_ID&path=com.apple.AppStore",!0)],d=t}const p=new ND(tk)
p.title=e.loc.string("APP_EVENTS_NOTIFICATION_FAILURE_TITLE"),p.message=e.loc.string("APP_EVENTS_NOTIFICATION_FAILURE_DETAIL"),p.isCancelable=!0
const h=(new sN).set(XC,R$.storeKitUIServiceAppStore).param(b$.appId,n.lockup.adamId).param(b$.bundleId,n.lockup.bundleId).param(b$.appEventId,n.appEventId)
h.host=v$.launchApp
const w=y(t,VA)
i(w)&&h.param(b$.appEventDeepLink,encodeURIComponent(w))
const g=Lt(r.pageInformation)
g[WR]="notifyActivate",g[pR]=ft({...r,id:t.id},null)
const m=it(e,n.lockup.adamId,Wb,g),T=W(g)
T[WR]="notifyDeactivate"
const A=it(e,n.lockup.adamId,Wb,T)
return new zx(t.id,s,c,l,a,f,d,p,h.build(),m,A)}function on(e,t,n,c,a,u,l,f,d,p,h,w,g){var m,T
if(t.type!==Tk)return null
const A=y(t,"promotionStartDate")
if(o(A))return null
const E=new Date(A)
if(r(E))return null
const P=new Date
if(E.getTime()>P.getTime())return E
const I=en(e,t,"lockupArtwork"),_=tn(e,t,"lockupVideo",!1)
if(r(I)&&o(_))return null
const S=null!==(m=null==_?void 0:_.preview)&&void 0!==m?m:I,O=ue(S.backgroundColor)?rk:ab,R=ue(S.backgroundColor,10),C=y(t,_k)
let v=y(t,YR)
i(g)&&(v=g)
const b=y(t,qA)
if(o(C)||o(v)||o(b))return null
const k=new Date(b)
if(r(k))return null
const D=null!==(T=y(t,fR))&&void 0!==T?T:"",N=null!=n?n:ie(t,sk)
let L
if(s(N)){if(L=nn(e,t,N,C,u,l,f,p,w,null),r(L))return null}else if(!d)return null
const $=y(t,"requirement"),x=y(t,BR),F=y(t,WA)
let M
if(i(F)&&(M=new Date(F)),M.getTime()<=P.getTime()&&!h)return null
const U=cn(e,sn(y(t,YA),k,M),k,M),B=new Yx(t.id,I,_,C,x,D,k,M,v,$,L,c,U,O,R)
if(s(N)){const n={...p,id:N.id,inAppEventId:t.id,relatedSubjectIds:[N.id]}
B.notificationConfig=rn(e,t,B,n,!0)}return a&&s(N)&&(B.clickAction=an(e,t,N,B,p,w)),B}function sn(e,t,n){let r=null!=e?e:"live"
return"live"===r&&s(n)&&n.getTime()-t.getTime()>216e5&&(r="happening"),r}function cn(e,t,n,r){const o=[],s=V(n),i=e.loc.uppercased(e.loc.formatDate("MMM d",n)),c=new Wx(null,i,!1,null,null)
o.push(c)
const a=new Date(s)
a.setDate(a.getDate()-6)
const u=e.loc.formatDate("EEE j:mm",n),l=e.loc.uppercased(u),f=new Wx(a,l,!1,null,null)
o.push(f)
const d=new Date(s)
d.setDate(d.getDate()-1)
const p=e.loc.string("APP_EVENTS_FORMATTED_DATE_TOMORROW"),h=e.loc.formatDateInSentence(p,Nf,n),w=e.loc.uppercased(h),g=new Wx(d,w,!1,null,null)
if(o.push(g),n.getHours()>1||1===n.getHours()&&n.getMinutes()>0){let t
t=n.getHours()>=19?e.loc.string("APP_EVENTS_FORMATTED_DATE_TONIGHT"):e.loc.string("APP_EVENTS_FORMATTED_DATE_TODAY")
const r=e.loc.formatDateInSentence(t,Nf,n),i=e.loc.uppercased(r),c=new Wx(s,i,!1,null,null)
o.push(c)}const m=new Date(n)
let T
m.setHours(m.getHours()-1),T="available"===t?"APP_EVENTS_FORMATTED_DATE_AVAILABLE_IN_COUNTDOWN":"APP_EVENTS_FORMATTED_DATE_STARTS_IN_COUNTDOWN"
const A=new Wx(m,null,!1,n,T)
let y,E
switch(o.push(A),t){case"available":y=e.loc.string("APP_EVENTS_FORMATTED_DATE_NOW_AVAILABLE"),E=!1
break
case"happening":y=e.loc.string("APP_EVENTS_FORMATTED_DATE_HAPPENING_NOW"),E=!1
break
default:y=e.loc.string("APP_EVENTS_FORMATTED_DATE_LIVE"),E=!0}const P=new Wx(n,y,E,null,null)
if(o.push(P),null!==r){const t=new Wx(r,e.loc.string("APP_EVENTS_FORMATTED_DATE_EVENT_ENDED"),!1,null,null)
o.push(t)}return o}function an(e,t,n,r,o,s){const i=un(e,t,n,r,o,_b,s,null)
return Rt(e,i,{id:t.id,actionDetails:{action:"Open",contentType:IC},inAppEventId:t.id,relatedSubjectIds:[n.id],...o}),i}function un(e,t,n,c,a,u,l,f){const d=function(e,t,n,c,a,u,l){var f
const d=en(e,t,Zv),p=tn(e,t,Xv,!0),h=W(c),w=null!==(f=null==p?void 0:p.preview)&&void 0!==f?f:d
let g=rk,m=!0,T=!1
s(w)&&(m=ue(w.backgroundColor),T=ue(w.backgroundColor,10),g=m?rk:ab)
const A=function(e,t,n,r){const o={pageId:`${t}_${n}`,pageType:kf}
return s(r)&&(o[a_]=r[sk],o[lE]=r[QP]),new Xx(o)}(0,t.id,n.id,l),E={...a,pageInformation:A,locationTracker:{rootPosition:0,locationStack:[]},targetType:kf},P={...E,id:n.id,inAppEventId:t.id,relatedSubjectIds:[n.id]}
h.notificationConfig=rn(e,t,c,P,!1)
const I=function(e,t,n,r){var c,a
const u=y(t,Ek)
if(o(u))return null
const l=null!==(c=n.moduleArtwork)&&void 0!==c?c:null===(a=n.moduleVideo)||void 0===a?void 0:a.preview
let f=e.loc.string(Df)
f===Df&&(f=n.subtitle)
const d=function(e,t,n,r,o,s){return Ll.Do("shareSheetDataForAppEvent",()=>{const e=new Bk(t,n,s)
return new Vk(e,r,null)})}(0,n.title,f,u,0,l)
if(!s(d))return null
const p=function(e,t,n){var r
const o=[]
if(i(n)){const t=ti(e,n)
s&&o.push(t)}if(t.startDate.getTime()<=Date.now())return o
if(e.host.clientIdentifier===bN)return o
const c=new ND(tk)
c.title=e.loc.string("APP_EVENTS_CALENDAR_NOT_AUTHORIZED_TITLE"),c.message=e.loc.string("APP_EVENTS_CALENDAR_NOT_AUTHORIZED_DETAIL"),c.isCancelable=!0,c.buttonTitles=[e.loc.string(ff)],c.buttonActions=[new TD("prefs:root=Privacy&path=CALENDARS",!0)]
let a=!1
if(s(t.endDate)){const e=V(t.startDate),n=V(t.endDate),r=t.endDate.getTime()-t.startDate.getTime(),o=216e5
n.getTime()>e.getTime()&&r>o&&(a=!0)
const s=8634e4
e.getTime()===n.getTime()&&r>=s&&(a=!0)}const u=new XD(t.startDate,t.endDate,a,t.title,null===(r=t.lockup)||void 0===r?void 0:r.title,t.detail,n,c,xA)
u.title=e.loc.string("SHARE_SHEET_ADD_TO_CALENDAR"),u.artwork=We(e,"systemimage://calendar.circle")
const l=new LD("com.apple.AppStore.createCalendarEventActivity",u)
return o.unshift(l),o}(e,n,u),h=new $D(d,p)
return Rt(e,h,{...r,targetType:Wb,actionType:mO,idType:qR}),h}(e,t,c,P),_=m?rk:ab,S=nn(e,t,n,h.title,_,HA,!1,E,u,l)
if(r(S))return null
h.lockup=S
const O=new jx(h,d,p,I,g,T)
return uu(e,O,A),O}(e,t,n,c,a,l,f),p=new wD("appEventDetail")
return p.title=c.title,p.pageData=d,p.animationBehavior=u,a&&a.pageInformation&&(p.referrerUrl=a.pageInformation.pageUrl),p}function ln(e,t,n,r,o){const i=new I$(pk,t,n)
i.purchaseSuccessAction=r,i.carrierLinkSuccessAction=r
const c=new wD(FC)
return c.pageData=i,s(o)&&Ot(e,c,o),c}function fn(e,t,n){{const e=new gD(pk)
return new AD([e])}}function dn(e,t=!1){const n=new B$(e).forType(wv)
return t?n.addingQuery(wI,Ff):n}function pn(e,t){return dn(e).withSparseLimit(t).asPartialResponseLimitedToFields([nk]).usingCustomAttributes(we(e))}function hn(e,t,n){return function(e,t,n){o(t)&&(t=wC)
const r=new B$(e).forType(FC).addingQuery("serviceType",pk).addingQuery("placement",t).includingMetaKeys(Uv,[MC]).includingRelationships([ck]).includingAttributes([Mf,Uf])
return s(n)&&r.addingQuery(Bf,n),r}(e,t,n)}function wn(e,t){let n=null
const s=se(t,Gf)||se(t,Uv)
if(o(s)||o(s.data))return null
for(const t of s.data)t.type!==Uv||(n=e.arcade.getMarketingItemFromMarketingItems([t]))
return r(n)?null:{marketingItemData:n}}function gn(e,t){if(!t)return null
let n=null
const r=a(t,FA)
return r.length>0&&(n=r[0]),s(n)?{marketingItemData:n}:null}function mn(e,t,n){const r=n&&n[t]
return e&&t&&e===t&&!r}function Tn(e,t,n,i,c,a,u){const l=o(a),f=yn(e,t,n,c,a,u)
if(r(f))return null
const d={platform:t.mediaPlatformUsedForDisplayStyle,style:f}
if(Cn(e,`[${n}] tentatively resolved to: ${Rn(d)}`),"DUP"===i){!function(e,t){switch(e){case"PI4":t.portraitScreenshots.length<=5&&t.portraitScreenshots.splice(0,4)
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
const r=yn(e,t,n,c,null,u),o=function(e,t,n){switch(t){case"PV4":case"PI4":case"LI1":case"LV1":return!0
case"PV3":case"PI3":return 3===On(e,n)
case"PV2":case"PI2":return 2===On(e)
default:return!1}}(e,r,u)
return o&&l?(Cn(e,`[${n}] Organic Dupe would be full creative as ${r} so choosing tentative style for ad`),d):o&&!l&&En(f,a)?(Cn(e,`[${n}] Organic Dupe would be a full creative, but ad is not the first so returning compatible style with first ${f}`),d):En("TEXT",a)?(Cn(e,`[${n}] tentative style would not yield full creative for organic result so returning TEXT`),{style:"TEXT"}):(Cn(e,`[${n}] tentative style would not yield full creative for organic result and first style is not compatible with TEXT so skipping ad`),null)}return s(a)&&"TEXT"===a.style?(Cn(e,`[${n}] tentative style would be filtered since the first ad has style: ${Rn(a)}, so returning TEXT`),{style:"TEXT"}):d}function An(e){return!!s(e)&&e===x_}function yn(e,t,n,r,o,s){if(!r)return Cn(e,`[${n}] is not allowed to display media because of iAd configuration.`),"TEXT"
if(t.mediaPlatformUsedForDisplayStyle&&o&&o.mediaPlatform&&!t.mediaPlatformUsedForDisplayStyle.isEqualTo(o.mediaPlatform))return Cn(e,`[${n}] filtered because media is derived from: ${t.mediaPlatformUsedForDisplayStyle.mediaType}, but first ad media is derived from: ${o.mediaPlatform.mediaType}`),null
let c,a=null
if(i(t.videos)&&(a=t.videos[0].preview),i(a)&&a.isLandscape()&&En("LV1",o))c="LV1"
else if(i(a)&&a.isPortrait()&&An(s)&&En("PV4",o))c=i(t.portraitScreenshots)&&t.portraitScreenshots.length>=3?"PV4":i(t.portraitScreenshots)&&t.portraitScreenshots.length>=2?"PV3":i(t.portraitScreenshots)?"PV2":"PV1"
else if(i(a)&&a.isPortrait()&&En("PV3",o))c=i(t.portraitScreenshots)&&t.portraitScreenshots.length>=2?"PV3":i(t.portraitScreenshots)?"PV2":"PV1"
else if(i(t.landscapeScreenshots)&&En("LI1",o))c="LI1"
else if(i(t.portraitScreenshots)&&An(s)&&En("PI4",o))c=t.portraitScreenshots.length>=4?"PI4":t.portraitScreenshots.length>=3?"PI3":t.portraitScreenshots.length>=2?"PI2":"PI1"
else if(i(t.portraitScreenshots)&&En("PI3",o))c=t.portraitScreenshots.length>=3?"PI3":t.portraitScreenshots.length>=2?"PI2":"PI1"
else{if(!En("TEXT",o))return Cn(e,`[${n}] filtered because we could not create a compatible style for the first style of: ${Rn(o)}`),null
c="TEXT"}return 2===On(e,s)&&("PI3"===c?c="PI2":"PV3"===c&&(c="PV2")),c}function En(e,t){if(r(t))return!0
let n=!0
switch(e){case"TEXT":n="TEXT"===t.style
break
case"LV1":case"LI1":n="LV1"===t.style||"LI1"===t.style
break
case"PI4":case"PI3":case"PI2":case"PI1":case"PV4":case"PV3":case"PV2":case"PV1":n="PI4"===t.style||"PI3"===t.style||"PI2"===t.style||"PI1"===t.style||"PV4"===t.style||"PV3"===t.style||"PV2"===t.style||"PV1"===t.style
break
default:n=!1}return n}function Pn(e){let t=null
const n=e.trailers[0]
let r=null
i(n)&&(n.videos.sort((e,t)=>cF(e.preview,t.preview)),r=n.videos,t=n.mediaPlatform)
const o=e.screenshots[0],s=[],c=[]
return i(o)&&(o.artwork.forEach(e=>{e.isPortrait()?s.push(e):c.push(e)}),t=o.mediaPlatform),{portraitScreenshots:s,landscapeScreenshots:c,videos:r,mediaPlatformUsedForDisplayStyle:t}}function In(e,t){let n=null
const r=l(T(e,rP),t)
return r&&r.length&&(n=JSON.parse(r)),n}function _n(e,t){return o(e)?"NOORGANIC":t?"DUP":"NORMAL"}function Sn(e,t,n,r){var o,c
const a=i(null===(c=null===(o=e.impressionMetrics)||void 0===o?void 0:o.fields)||void 0===c?void 0:c.pageCustomId),u=n&&!r&&!a
if(i(e.trailers)){const t=e.trailers.shift()
t.videos.sort((e,t)=>cF(e.preview,t.preview)),e.trailers.unshift(t)}let l,f=[],d=[]
if(i(e.screenshots)){const t=e.screenshots.shift()
t.artwork.forEach(e=>{e.isPortrait()?f.push(e):d.push(e)}),l=t.mediaPlatform}switch(t.style){case"PI4":if(e.trailers=null,d=null,e.screenshotsDisplayStyle=x_,u)if(f.length>5&&f.length<8){const e=f.splice(0,4),t=4-f.length,n=e.splice(e.length-t)
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
case"PV4":if(d=null,e.screenshotsDisplayStyle=x_,u)if(e.trailers[0].videos.splice(0,1),f.length>4&&f.length<7){const e=f.splice(0,3),t=3-f.length,n=e.splice(e.length-t)
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
if(i(p)){const t=new $k(p,l)
e.screenshots=[t]}else e.screenshots=null
return e}function On(e,t=null){return e.client.isPhone?An(t)?4:3:2}function Rn(e){if(o(e))return""
let t=""
return e&&e.mediaPlatform&&(t=` derived from ${e.mediaPlatform.mediaType} media`),`${e.style}${t}`}function Cn(e,t){"internal"===e.client.buildType&&e.isAvailable(TN)&&s(e.ads.debugLog)&&(r(iF)&&s(e.ads.isNativeAdLoggingEnabled)&&(iF=e.ads.isNativeAdLoggingEnabled()),iF&&e.ads.debugLog(t))}function vn(e,t,n,r,o){var s
if(!(n instanceof XN||n instanceof nL))return
const c=n.lockup,a=t.lockups[0]
if(a.adamId!==c.adamId)return
const u=new Set
if(i(a.screenshots))for(const e of a.screenshots[0].artwork)u.add(e.template)
if(i(a.trailers))for(const e of a.trailers[0].videos)u.add(e.preview.template)
if(i(c.screenshots)){const e=c.screenshots[0].artwork.filter(e=>!u.has(e.template))
c.screenshots[0]=new $k(e,c.screenshots[0].mediaPlatform)}if(i(c.trailers)){const e=c.trailers[0].videos.filter(e=>!u.has(e.preview.template))
c.trailers[0]=new _L(e,c.trailers[0].mediaPlatform)}if((null===(s=null==r?void 0:r.displayStyle)||void 0===s?void 0:s.screenshots)===x_)switch(o){case"PV4":case"PI4":(e=>{const t=c.screenshots[0].artwork
if(t.length>=4)return
let n=4-t.length
const r=a.screenshots[0].artwork.slice().reverse()
for(const e of r){if(n<=0)return
c.screenshots[0].artwork.unshift(e),n-=1}})()}}function bn(e,t,n){var r,o
const s=n.id,i=t.lockups[0]
if(i.adamId!==s){const e=W(n.meta)
return n.meta=e,void kn(null,n)}const c=e.find(e=>e.id===i.adamId)
kn(null===(o=null===(r=null==c?void 0:c.meta)||void 0===r?void 0:r.cppData)||void 0===o?void 0:o[JO],n)}function kn(e,t){var n
let o=W(t.meta)
r(e)?null===(n=null==o?void 0:o.cppData)||void 0===n||delete n[JO]:(r(o)&&(o={}),r(o.cppData)&&(o.cppData={}),o.cppData[JO]=e),t.meta=o}function Dn(e,t,n){var o
return r(n)?null:new Zx(t,n.iAdId,n.clientRequestId,null,null===(o=n.onDeviceAd)||void 0===o?void 0:o.positionInfo)}function Nn(e,t){return y(t,aF)}function Ln(e,t,n){o(t)&&r(t.attributes)||(t.attributes[aF]=n)}function $n(e,t,n,r){var s,c,a,u,l
const f=e.bag.adsOverrideLanguage
if(o(f)||o(t))return!0
let d=null===(s=t.meta)||void 0===s?void 0:s.resource
if(o(d)&&i(n)&&(d=null===(l=null===(u=null===(a=null===(c=null==n?void 0:n.appMetadata)||void 0===c?void 0:c.data)||void 0===a?void 0:a[0])||void 0===u?void 0:u.meta)||void 0===l?void 0:l.resource),o(d))return!1
if(y(d,"name.locale")!==f)return!1
const p=ke(e,t,BR),h=ke(e,d,"subtitle.locale")
if(i(p)&&h!==f)return!1
if("TEXT"===r){const n=y(t,If)
if((0,Ul.isSome)(n)&&n!==cb){let r
const o=n
r=n===dk?fR:n
const s=ke(e,t,r),c=ke(e,d,o.concat(".locale"))
if(i(s)&&c!==f)return!1}}return!0}function xn(e,t){r(e)||e.incidents.push(t)}function Fn(e){return`${e.shelfIdentifier}.${e.slot}`}function Mn(e,t){return function(e,t,n){if(r(t)||s(t.failureReason))return null
const o={tasks:{}}
return function(e,t){if(r(e))return
const n=Fn(t.positionInfo)
e.tasks[n]=t}(o,{data:$(t.mediaResponse),positionInfo:n}),o}(0,t,uF)}function Un(e,t){var n,r
let c=t.id,a=t.title
if(i(t.anonymizationOptions)){const e=null!==(r=null===(n=t.anonymizationOptions)||void 0===n?void 0:n.anonymizationString)&&void 0!==r?r:"ANONYMOUS"
c=e,a=e}const u={id:Ze(c),name:Ze(a),idType:ze(t),impressionType:je(t)}
if(t&&t.kind&&(u[YR]=t.kind),t&&t.softwareType&&(u[BS]=t.softwareType),t&&t.recoMetricsData&&Object.assign(u,t.recoMetricsData),t&&t.mercuryMetricsData&&Object.assign(u,t.mercuryMetricsData),t&&t.lockupDisplayStyle&&(u[l_]=t.lockupDisplayStyle),t&&t.locationTracker){const e=gt(t.locationTracker)
u.impressionIndex=e,""===u.id&&(u.id=e.toString(),u.idType=Mb)}return s(t.offerType)&&(u[US]=t.offerType),t&&s(t.displaysArcadeUpsell)&&(u[th]=t.displaysArcadeUpsell),t&&s(t.isPreorder)&&(u[Lb]=t.isPreorder),s(t.adamId)&&o(t.anonymizationOptions)&&(u[rb]=t.adamId),t&&s(t.badges)&&(u.badges=t.badges),t&&s(t.inAppEventId)&&(u[Yp]=t.inAppEventId),t&&s(t.relatedSubjectIds)&&(u.relatedSubjectIds=t.relatedSubjectIds),t&&s(t.autoAdvanceInterval)&&(u.autoAdvanceInterval=t.autoAdvanceInterval),s(null==t?void 0:t.fcKind)&&(u.fcKind=t.fcKind),s(t.productVariantData)&&Object.assign(u,Pe(t.productVariantData)),u.id,u}function Bn(e,t,n){t&&(t.impressionMetrics=new cD(Un(0,n)))}function Gn(e,t,n,r,o,s){const i=Vn(e,t,n.title,o)
return i.lockupDisplayStyle=r,s&&Ja(e,t)&&(i.displaysArcadeUpsell=!0),i}function Vn(e,t,n,r){return Ll.Do("impressionOptions",()=>{const o=Ke(e,t),s=Je(e,t),i={...r,kind:o,softwareType:s,title:n,id:t.id}
return Ne(e,t,Lb)&&(i.offerType=gv),i})}function Hn(e,t,n){var r,o
const s=Un(0,(r=t.term,t.entity,o=n,Ll.Do("impressionOptionsForSearchHint",()=>({...o,id:"",kind:null,softwareType:null,title:r}))))
t.entity&&(s[VS]=t.entity),t.impressionMetrics=new cD(s)}function qn(e,t,n){const r=n===Rk?jh:zh
return new Promise((n,s)=>{if(o(t)){const e=`${r}: Missing valid useCase for ODP: ${t}`
return Ll.Gi(Lv,e,null),void s(new Error(e))}e.onDeviceRecommendationsManager.performRequest({type:"fetchRecommendations",dsId:e.user.dsid,useCase:t}).then(o=>{const c=a(o.candidates),u=g(o[MC])
if(i(c)){const o=[]
for(const e of c)i(e)&&o.push({id:e,type:Pk})
const a=new B$(e,o).withFilter("apps:recommendable",$v).addingQuery(Jy,t)
hs(e,a),b(e,a).then(e=>{n({candidates:c,recoMetrics:u,dataContainer:e})}).catch(e=>{const t=`${r}: Failed to fetch Media API data for: ${c}`
Ll.Gi(Lv,t,null),s(new Error(t))})}else{const e=`${r}: ODP returned no candidate ids for useCase: ${t}`
Ll.Gi(Lv,e,null),s(new fF(e))}}).catch(e=>{const n=`${r}: Failed to perform ODP for useCase: ${t}, ${e}`
Ll.Gi(Lv,n,null),s(new Error(n))})})}function Wn(e){const t=new Set,n=[]
return e.forEach((e,r)=>{t.has(e.appId)||(n.push(e.appId),t.add(e.appId))}),n}function Yn(e,t){const n=new Map
e.reverse(),e.forEach((e,t)=>{e.appId in n?n[e.appId].push(e):n[e.appId]=[e]})
const r=[],o=Math.max(...Object.values(n).map(e=>e.length))
for(let e=0;e<o;e++){const e=[]
t.forEach(t=>{t in n&&n[t].length>0&&(r.push(n[t].pop()),0!==n[t].length&&e.push(t))}),t=e}return r}function jn(e){const t=new Map
return i(e)&&e.split(",").forEach(e=>{const n=e.split("=")
2===n.length&&(t[n[0]]=Number(n[1]))}),t}function zn(e,t,n,c,a,u,f,d){const p=function(e,t,n,r,c){const a=[]
for(const u of t){const t=new pF(u),f=l(u,Wh)
let d=l(u,EO),p=l(u,NE)
if(o(d)&&i(c)&&(d=c,p=e.random.nextUUID()),o(f)||o(d)||o(p)){r&&(t.isUnpersonalizedMatch=!0,a.push(t))
continue}const h=f.split(",")
if(h.includes(hF)&&(t.isWildcardMatch=!0),s(n)){const e=n[d]
if(s(e))for(const n of h)if(e.userSegments.includes(n)){t.isExactMatch=!0
break}}t.appId=d,t.groupId=p,a.push(t)}return a}(e,t,null==n?void 0:n.personalizationData,c,f),h=Wn(p),w=function(e,t){const n=new Set,r=[],s=t.filter(e=>e.isExactMatch).map(e=>e.groupId),c=new Set(s)
t.forEach((e,t)=>{if(o(e.groupId))r.push(e)
else if(!n.has(e.groupId))if(e.isUnpersonalizedMatch)r.push(e)
else{if(e.isExactMatch)return n.add(e.groupId),void r.push(e)
if(!c.has(e.groupId)){if(e.isWildcardMatch)return n.add(e.groupId),void r.push(e)
e.isFallbackMatch=!0,r.push(e)}}})
const a=[],u=r.slice().reverse()
for(const e of u)e.isFallbackMatch&&n.has(e.groupId)||(a.push(e),i(e.groupId)&&n.add(e.groupId))
return a.reverse(),a}(0,p),g=function(e,t,n,o,s,i){let c
const a=t.filter(e=>e.isExactMatch||e.isWildcardMatch||e.isUnpersonalizedMatch||r(e.groupId))
return r(s)?c=Jn(a,o,i):a.length>=s||!n?(c=Jn(a,o,i),c.sortedDataItems=c.sortedDataItems.slice(0,s)):(c=Jn(t,o,i),c.sortedDataItems=c.sortedDataItems.slice(0,s)),c}(0,w,a,h,u,d),m=g.sortedDataItems.map(e=>e.rawData)
return{personalizedData:m,processingType:(t.length!==m.length?1:0)+g.processingType}}function Jn(e,t,n){const r=e.filter(e=>e.isExactMatch)
let o=e.filter(e=>!e.isExactMatch)
s(n)&&n&&(o=Yn(o,t))
const i=r.concat(o),c=e.every((e,t)=>e===i[t])
return{sortedDataItems:i,processingType:c?0:2}}function Kn(e,t,n,r,i,c=!1,a,u,d){return Zn(e)?t===Lf?function(e,t,n,r,o){var i
return null!==(i=(null==r?void 0:r.metricsData).use_segment_scores)&&void 0!==i&&i?function(e,t,n,r){const o=function(e,t){const n=[]
for(const e of t){const t=new dF(e),r=l(e,EO),o=l(e,NE),s=f(e,"meta.personalizationData.score"),i=jn(l(e,"meta.personalizationData.segScores"))
t.appId=r,t.groupId=o,t.score=null!=s?s:0,t.segScores=i,n.push(t)}return n}(0,t)
let i=function(e,t){const n=function(e,t){var n
for(const r of e){const e=r.appId,o=r.segScores,i=r.score
if(s(t)){const c=t[e]
if(s(c)){let e=0,t=0
for(const n of c.userSegments)n in o&&(t+=o[n],e+=1)
if(e){const n=t/e
r.modifiedScore=i*n}}else{const e=null!==(n=o[0])&&void 0!==n?n:0
r.modifiedScore=i*e}}else r.modifiedScore=i}return e}(e,null==t?void 0:t.personalizationData),r=function(e,t){var n
const r=Number(null!==(n=t.weight_parameter)&&void 0!==n?n:0)
for(const t of e){const e=t.score,n=t.modifiedScore
t.modifiedScore=r*n+(1-r)*e}return e}(n,null==t?void 0:t.metricsData)
return r.sort((e,t)=>t.modifiedScore-e.modifiedScore),r}(o,n)
s(r)&&r&&(i=Yn(i,Wn(i)))
const c=i.map(e=>e.rawData),a=i.every((e,t)=>e===o[t])?0:2
return{personalizedData:c,processingType:(t.length!==c.length?1:0)+a}}(0,t,r,o):zn(e,t,r,n,null,null,null,o)}(e,n,r,i,d):zn(e,n,i,r,c,a,u,d):function(e,t,n){let r=[]
const i=new Set
for(const e of t){const t=l(e,Wh),n=l(e,EO),s=l(e,NE)
o(t)||o(n)||o(s)?r.push(e):i.has(s)||t.split(",").includes(hF)&&(r.push(e),i.add(s))}return s(n)&&r.length>n&&(r=r.slice(0,n)),{personalizedData:r,processingType:null}}(0,n,a)}function Zn(e){return e.user.isOnDevicePersonalizationEnabled&&e.bag.enableOnDevicePersonalization}function Xn(e,t){return Zn(e)?e.props.enabled(Yh)?e.user.onDevicePersonalizationDataContainerForAppIds(Array.from(t)):{personalizationData:e.user.onDevicePersonalizationDataForAppIds(Array.from(t)),metricsData:null}:null}function Qn(e){return Zn(e)&&e.props.enabled(Yh)?e.user.onDevicePersonalizationDataContainerForAppIds([]).metricsData:null}function er(e){return nr(e)||tr(e)||418===e||431===e||429===e||430===e||420===e||304===e||305===e||260===e||497===e}function tr(e){return 311===e||312===e||476===e}function nr(e){switch(e){case 117:case 122:case 118:case 195:case 194:case 197:case 369:case 370:case 371:case 372:case 373:case 374:case 375:case 376:case 377:case 378:case 379:case 380:case 395:case 396:case 397:case 398:case 399:case 400:case 491:case 492:case 493:case 504:case 505:case 506:case 520:case 521:case 522:case 523:case 524:case 525:case 530:case 531:case 532:case 533:return!0
default:return!1}}function rr(e,t){return!!e.isEnabled("shelf_placeholders_all")||!!e.isEnabled("shelf_placeholders_reco_only")&&tr(t.featuredContentId)}function or(e,t,n){if(!function(e){switch(e){case Jb:case Tb:case ES:case Uy:case Xd:case DS:case kO:case DO:case oR:return!0
default:return!1}}(e.contentType)||t.isSearchGrouping)return
const r=function(e,t,n){return e>0?e:tr(n)?t===uk?15:6:0}(t.remainingItems.length,n,t.featuredContentId),s=new Array(r)
for(let e=0;e<r;e+=1)s[e]=new JL
if(!o(s)){switch(e.contentType){case Jb:e.rowsPerColumn=3
break
case Tb:e.rowsPerColumn=2
break
default:e.rowsPerColumn=1}e.placeholderContentType=e.contentType,e.contentType=jy,e.items=s,i(t.isArcadePage)&&(e.presentationHints={...e.presentationHints,isAppleArcadeContext:t.isArcadePage}),e.isHidden=!1,t.showingPlaceholders=!0}}function sr(e,t=!1){return{timeToLive:ur(e),nextPreferredContentRefreshDate:null,refreshWhileVisibleForNextPreferredContentRefreshDate:t}}function ir(e,t){r(t)||r(e)||(r(t.nextPreferredContentRefreshDate)||e.getTime()<t.nextPreferredContentRefreshDate.getTime())&&e.getTime()>(new Date).getTime()&&(t.nextPreferredContentRefreshDate=e)}function cr(e,t){if(!function(e){return e.bag.enableAutomaticPageRefresh}(e))return null
if(r(t))return null
let n,o=!1
if(s(t.timeToLive)&&s(t.nextPreferredContentRefreshDate)){const e=lr(t.timeToLive)
e.getTime()<t.nextPreferredContentRefreshDate.getTime()&&e.getTime()>(new Date).getTime()?n=e:(n=t.nextPreferredContentRefreshDate,o=!0)}else if(s(t.timeToLive))n=lr(t.timeToLive)
else{if(!s(t.nextPreferredContentRefreshDate))return null
n=t.nextPreferredContentRefreshDate,o=!0}if(n.getTime()<=(new Date).getTime())return null
const i=o&&t.refreshWhileVisibleForNextPreferredContentRefreshDate
return new wF("timeToLive",0,null,n,i)}function ar(e){return null==e?void 0:e.nextPreferredContentRefreshDate}function ur(e){return e[$l.contentMaxAge]}function lr(e){const t=new Date
return t.setSeconds(t.getSeconds()+e),t}function fr(e,t,n,c,a,u,f){if(!Qt(e))return null
if(o(t))return null
const d={pageInformation:c.metricsPageInformation,locationTracker:c.metricsLocationTracker,targetType:IC}
let p=t
if(n){const n=function(e,t){const n=new Set
for(const e of t){const t=l(e,EO)
i(t)&&n.add(t)}const r=Xn(e,n)
return Kn(e,Lf,t,!1,r,null,null,null,!0)}(e,t)
if(p=n.personalizedData,s(f)){const e=ot(f.recoMetricsData,n.processingType,null)
f.recoMetricsData=e}}const h=[]
for(const e of p)r(e.attributes)||as(c)?(c.isDeferring=!0,c.remainingItems.push(e)):h.push(e)
const w=hr(e,h,null,!1,!1,d,!1,!0)
ir(w.nextAppEventPromotionStartDate,null==u?void 0:u.refreshController)
const g=w.appEvents
if(0===g.length&&h.length===p.length&&!a)return null
const m=pr(g,c.title)
return m&&o(m.items)&&c.isFirstRender&&rr(e.featureFlags,c)&&or(m,c,e.client.deviceType),m.url=ns(m,c),m}function dr(e,t,n,r,s){if(!Qt(e))return null
if(o(t))return null
const i={pageInformation:n,locationTracker:r,targetType:IC},c=hr(e,t,null,!1,!1,i,!0,!0)
ir(c.nextAppEventPromotionStartDate,null==s?void 0:s.refreshController)
const a=c.appEvents
if(0===a.length)return null
const u=pr(a,null)
return u.isHorizontal=!1,Bn(0,u,{...i,id:"",kind:null,softwareType:null,targetType:zb,title:""}),u}function pr(e,t){const n=new XL(oR)
return n.isHorizontal=!0,n.title=t,n.items=e,n}function hr(e,t,n=null,o,i,c,a,u){const l=[]
let f
for(const d of t){const t=on(e,d,n,o,!0,ab,_b,i,!1,c,a,u)
if(r(t))continue
if(t instanceof Date){(r(f)||t.getTime()<f.getTime())&&(f=t)
continue}const p=t,h={...c,id:d.id,kind:jA,targetType:IC,title:p.title,softwareType:null},w=null!=n?n:ie(d,sk)
s(w)&&(h.relatedSubjectIds=[w.id]),Bn(0,p,h),l.push(p)}return{appEvents:l,nextAppEventPromotionStartDate:f}}function wr(e){return-1!==gF.indexOf(e.protocol)}function gr(e){const t=e.indexOf("{"),n=e.indexOf("}")
return t>=0&&n>t+1}function mr(e){const t=e.indexOf("{"),n=e.indexOf("}")
return t>=0&&n>t?e.substring(t+1,n):e}function Tr(e,t){const n=t.indexOf("{"),r=e.length-(t.length-(t.indexOf("}")+1))
return n>=0&&r>n?e.substring(n,r):e}function Ar(e,t,n,r){const o=t.ids
return o&&o.length?`${R$.internal}:/${C$.product}/${C$.shelf}/`+yr(t,n,r):null}function yr(e,t,n){return e.sourcePageInformation=t.metricsPageInformation,e.sourceLocationTracker=t.locationTracker,e.destinationPageInformation=n,encodeURIComponent(JSON.stringify(e))}function Er(e,t,n,o,s,i,c,a){if(!t.data||0===t.data.length)return null
const u=[]
return{items:sa(e,t,{lockupOptions:{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,recoMetricsData:a},artworkUseCase:o,canDisplayArcadeOfferButton:nu(0,s),...r(i)?{}:{offerStyle:i}},shouldConsiderDataPastLastAvailable:!0,contentUnavailable:(e,t)=>(u.push(e),!1),filter:c}),unavailableIds:u}}function Pr(e,t,n){if(!n)return
let r=-1,o=null
n.forEach((e,n)=>{const s=e,i=s,c=s&&s.adamId===t,a=i&&i.productIdentifier===t;(c||a)&&(r=n,o=s,i&&(i.theme="spotlight",i.offerDisplayProperties=i.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,iv,"ad",K_)))}),-1!==r&&(n.splice(r,1),n.splice(0,0,o))}function Ir(e){if(-1===OF.indexOf(e.media.kind))return!1
const t=e.clickAction
if(!t)return!0
const n=t.pageUrl
if(!n)return!0
const r=new sN(n),o=_r()
for(const e of o)if(new mF(e).matches(r))return!1
return!0}function _r(){return[{protocol:R$.https,path:`/{countryCode}/${C$.product}/{appName}/{id}`,query:[`${b$.action}?`,`${b$.offerName}?`,`${b$.isPPT}?`,`${b$.appEventId}?`,`${b$.isPreloading}?`]},{protocol:R$.https,path:`/{countryCode}/${C$.productBundle}/{appName}/{id}`,query:[`${b$.action}?`,`${b$.offerName}?`,`${b$.isPreloading}?`]},{protocol:R$.https,path:`/{countryCode}/${C$.product}/{id}`,query:[`${b$.action}?`,`${b$.offerName}?`,`${b$.appEventId}?`,`${b$.isPreloading}?`]},{protocol:R$.https,path:`/{countryCode}/${C$.productBundle}/{id}`,query:[`${b$.action}?`,`${b$.offerName}?`,`${b$.isPreloading}?`]},{protocol:R$.https,path:`/${C$.product}/{appName}/{id}`,query:[`${b$.action}?`,`${b$.offerName}?`,`${b$.appEventId}?`,`${b$.isPreloading}?`]},{protocol:R$.https,path:`/${C$.productBundle}/{appName}/{id}`,query:[`${b$.action}?`,`${b$.offerName}?`,`${b$.isPreloading}?`]},{protocol:R$.https,path:`/${C$.product}/{id}`,query:[`${b$.action}?`,`${b$.offerName}?`,`${b$.appEventId}?`,`${b$.isPreloading}?`]},{protocol:R$.https,path:`/${C$.product}/{id}`,query:[`${b$.v0}?`,`${b$.metrics}?`,`${b$.isPreloading}?`]},{protocol:R$.https,path:`/${C$.productBundle}/{id}`,query:[`${b$.action}?`,`${b$.offerName}?`,`${b$.isPreloading}?`]},{protocol:R$.https,query:[b$.bundleIdentifier,`${b$.isPreloading}?`]},{protocol:R$.https,query:[b$.action,b$.ids,`${b$.isPurchasesApp}?`,`${b$.isPreloading}?`]},{protocol:R$.https,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/catalog/{countryCode}/apps/{id}",query:[`${b$.isPreloading}?`]},{protocol:R$.https,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/catalog/{countryCode}/app-bundles/{id}",query:[]},{protocol:R$.https,path:"{apiVersion}/catalog/{countryCode}/apps/{id}",query:[`${b$.isPreloading}?`]},{protocol:R$.https,path:"{apiVersion}/catalog/{countryCode}/app-bundles/{id}",query:[`${b$.isPreloading}?`]},{protocol:R$.https,hostName:`${v$.product}`,path:`/${C$.siri}/{id}`,query:[`${b$.isPreloading}?`]},{protocol:R$.https,path:`/${C$.store}/${C$.viewSoftware}`,query:[b$.id,`${b$.v0}?`,`${b$.isPreloading}?`]},{protocol:R$.internal,path:`/${C$.product}/{id}`,query:[b$.invalidateWidgetsOnFailure,`${b$.metrics}?`,`${b$.appEventId}?`,`${b$.isPreloading}?`]}]}function Sr(e){const t=new Set([sR])
return e===_v&&(t.add(pv),t.add(_A),t.add(hC),t.add(SA)),t}function Or(e,t,n=!1){const r=Nr(0,t),o=e.client.isPhone
let s=o?Ap:yp
n&&(s="topShelf")
const c=d(r,s)
let a=null,u=null
return i(c)&&(a=ga(e,c,{withJoeColorPlaceholder:!0,useCase:6}),i(a)&&(a.crop=o?"oa":n?"ta":"ob",u=a.backgroundColor)),{artwork:a,artworkData:c,backgroundColor:u}}function Rr(e,t,n=!1){const r=function(e,t){return t.type===Kb?T(t,Zb):T(t,Uf)}(0,t),o=e.client.isPhone?"sizzleVideo9x16":"sizzleVideo16x9",s=e.client.isPhone?"breakoutVideo9x16":"breakoutVideo16x9",c=d(r,o)||d(r,s)
let a=null,u=null,f=null
if(i(c)){f=d(c,TR)
const t=ga(e,f,{withJoeColorPlaceholder:!0,useCase:6})
i(t)&&(t.crop="sr",u=t.backgroundColor)
const r=l(c,bv)
i(t)&&i(r)&&(a=new eD(r,t,{canPlayFullScreen:!1,showPlaybackControls:!1,allowsAutoPlay:!0,looping:!0,playbackControls:{prominentPlay:n},autoPlayPlaybackControls:{}}))}return{video:a,artworkData:f,backgroundColor:u}}function Cr(e,t,n=!0,r,o){const s=Rr(e,t),i=Or(e,t),c=s.backgroundColor||i.backgroundColor
return br(e,t,0,o),(t.type===Uv?u(Dr(0,t),"displayMaterial"):P(t,td))&&n?nd:vr(0,c)}function vr(e,t){return t?ue(t,50)?rk:ab:rk}function br(e,t,n,r){if(e.client.isPhone||r)return $b
const o=t.type===Uv?l(Dr(0,t),"textPosition"):y(t,TI)
if(!i(o))return Gb
switch(o.toLowerCase()){case AI:return Gb
case $b:return $b
case ey:return fS
default:return Gb}}function kr(e,t,n,r=!1){switch(t){case Gb:case fS:return Gb
case $b:return r||n.type===Uv?$b:function(e,t){var n
switch((null!==(n=y(t,TI))&&void 0!==n?n:"").toLowerCase()){case AI:return Gb
case $b:return $b
case ey:return fS
default:return Gb}}(0,n)
default:return Gb}}function Dr(e,t){return t.type!==Uv?null:T(t,"display.templateParameters")}function Nr(e,t){return t.type===Kb?T(t,Qb):T(t,Mf)}function Lr(e,t){return t.type===Uv?l(Bt(0,t),mf):y(t,rd)}function $r(e,t){const n=i(T(t,vb)),r=P(t,IO)
return!n&&!r}function xr(e,t){const n=T(t,vb),o=i(n),s=P(t,IO),c=ie(t,eb)
if(!o&&!s&&!_(c))return null
let a=null
if(a=o?l(n,Ek):y(s?t:c,Ek),r(a))return null
let u=null
if(o&&l(n,yI)===ty)u=new TD(a)
else{const t=e.required(RF).fetchFlowPage(a),n=new wD(t)
n.pageUrl=a,t===ob&&(n.pageData=Fc(e,c)),u=n}return u.title=Lr(0,t),u}function Fr(e){if(null===CF){CF=new Set
for(const t of e.bag.suppressedPrivacyAppIds)CF.add(t)}}function Mr(e,t){return Fr(e),!o(t)&&CF.has(t)}function Ur(e,t){return Fr(e),!o(t)&&(!(!CF.has("com.apple.InstallAssistant.*")||!t.startsWith("com.apple.InstallAssistant."))||CF.has(t))}function Br(e,t){const n=t.host
if(r(n))return!1
const o=[e.bag.mediaHost,e.bag.mediaEdgeHost(e),e.bag.mediaEdgeSearchHost]
for(const e of o)if(!r(e)&&-1!==n.indexOf(e))return!0
return!1}function Gr(e,t){return C(e,new B$(e,t)).toString()}function Vr(e){let t=e.query.id
const n=e.pathname
if(r(t)&&i(n)){const e=bF.exec(n)
e&&e.length>1&&(t=e[1])}if(!c(t)){const n=e.pathComponents()
i(n)&&(t=n[n.length-1])}return t}function Hr(e,t){let n=Vr(t)
if(!c(n))throw new Error(`Unable to map ${t.build()} to a media api url`)
n in kF&&(n=kF[n])
let r=Pk,o=vF,a=[wS,gS,yk,lk,SI,OI,mS,RI];-1!==t.pathname.indexOf(CI)&&(r=lk,o=[QC,UC,Vb,ay,VR],a=[gS,Pk,yk,mS]),e.bag.enablePrivacyNutritionLabels&&!Mr(e,n)&&o.push(SO),e.appleSilicon.isSupportEnabled&&o.push(Pb)
const u=h(t.query[b$.isArcade]);(null===u||u)&&(o.push(rI,oI,Zb),a.push(Bv))
const l=new B$(e).forType(r).withIds([n]).includingAdditionalPlatforms(K(e)).includingRelationships(a).includingAttributes(o).addingRelationshipLimit(yk,Z(e)).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes(we(e))
i(t.query[b$.productVariantID])&&l.addingQuery(b$.productVariantID,t.query[b$.productVariantID])
const f=t.query[D$.minExternalVersionId]
s(f)&&l.addingQuery(D$.minExternalVersionId,f)
const d=i(t.pathname)&&-1!==t.pathname.indexOf(CI)
return Qt(e)&&!d&&(l.includingScopedRelationships(Pk,[Tk]),l.includingScopedAttributes(Tk,[dk,Zv,Xv]),l.includingScopedAvailableIn(Tk,[fy])),l.attributingTo(t.build())}function qr(e){const t=[Qb,Zb,tb,Vb]
return t.push(qv),e.appleSilicon.isSupportEnabled&&t.push(Pb),t}function Wr(e){let t=[]
switch(e.client.deviceType){case Sk:t=t.concat(NF),e.appleSilicon.isSupportEnabled&&t.push(yS)
break
case Ok:t.push(LF)
break
default:t=t.concat(DF)}return t}function Yr(e,t,n){return Ll.Do("continuePlayingShelfForGrouping",()=>{if(!function(e,t){switch(t){case gC:case LO:case _v:return!0
default:return!1}}(0,e.host.platform))return null
const r=function(e,t,n){return Ll.Do("videoCardContinuePlayingShelf",()=>{const r={id:n.id,kind:null,softwareType:null,targetType:zb,title:e.loc.string(Zd),pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,idType:GC,fcKind:n.featuredContentId}
pt(r,r.title)
const o=new XL(Xd)
o.isHorizontal=!0,o.batchGroup=$F
const s=t.data,i=[]
for(const t of s){if(Ue(e,t))continue
const o=jr(e,t,r,n.clientIdentifierOverride,n.isArcadePage)
o&&(i.push(o),At(r.locationTracker))}return o.items=i,wt(n.metricsLocationTracker),Bn(0,o,r),o})}(e,t,n)
return r.mergeWhenFetched=!1,r.eyebrow=e.loc.uppercased(e.loc.string(RS)),r.eyebrowArtwork=We(e,CS,16,16),r.title=e.loc.string(Zd),r.subtitle=n.subtitle,r.batchGroup=$F,r.isHidden=!n.isFirstRender&&0===r.items.length,r})}function jr(e,t,n,r,o){return Ll.Do("editorialSplashVideoCardForContinuePlaying",()=>{const i=gt(n.locationTracker),c={pageInformation:n.pageInformation,locationTracker:n.locationTracker,targetType:Wb,anonymizationOptions:{anonymizationString:`GAME${i}`}},a=e.featureFlags.isEnabled($O)&&u(o),l=Ja(e,t),f={metricsOptions:c,artworkUseCase:1,offerEnvironment:rk,offerStyle:Ub,canDisplayArcadeOfferButton:!0,shouldHideArcadeHeader:a,isSubtitleHidden:l&&!a},d=function(e,t){return Ll.Do("editorialSplashVideoWithTopShelfStill",()=>{let n=null
const r=ve(e,t,Ad)
return s(r)&&(n=ga(e,r,{withJoeColorPlaceholder:!0,useCase:22,cropCode:"sr"})),Ga(e,t,n)})}(e,t)
if(!d||!d.preview)return null
const p=Xc(e,t,f)
if(!p)return null
const h=function(e,t,n,r,o){const s=ca(e,t,_t(e,t,r),o)
if(n===LO){const n=new OD(t.id,sk)
Rt(e,n,{actionType:vS,id:t.id,contextualAdamId:t.id,anonymizationOptions:r.anonymizationOptions,pageInformation:r.pageInformation,locationTracker:r.locationTracker})
const o=new SD(t.id,s)
return o.openAction=n,o.cancelAction=s,o}return s}(e,t,e.host.platform,c,r)
if(!h)return null
const w=new bL
w.video=d,w.lockup=p,w.overlayStyle=rk,w.clickAction=h
const g=_t(e,t,c)
return w.flowPreviewActionsConfiguration=oi(e,t,!0,r,w.clickAction,c,g),Bn(0,w,Vn(e,t,p.title,c)),w})}function zr(e,t,n,r,o){return Ll.Do("gameCenterReengagementShelf",()=>{if(!s(n))return null
const c=new XL("gameCenterReengagement")
c.isHorizontal=!1,c.mergeWhenFetched=!1,c.batchGroup=Nv
const a={id:o.id,kind:null,softwareType:null,targetType:xv,title:Qd,pageInformation:o.metricsPageInformation,locationTracker:o.metricsLocationTracker,idType:GC,fcKind:o.featuredContentId,badges:{gameCenter:{}}},u=Ba(e,t.data[0],20)
let p=le("componentBackground"),h=null
i(u)&&(h=u.preview,p=h.backgroundColor)
const w={lockupOptions:{metricsOptions:{pageInformation:o.metricsPageInformation,locationTracker:o.metricsLocationTracker},offerStyle:Ub,artworkUseCase:wa(0,Jb),isSubtitleHidden:!0}}
pt(a,a.title)
const g=sa(e,t,w)[0]
wt(o.metricsLocationTracker)
let m=null
i(g)&&(m=new WD(g.bundleId),m.title=Qd,Rt(e,m,a))
const T=e.loc.string("GAME_CENTER_REENGAGEMENT_BADGE_GAMECENTER"),A=function(e,t){const n=l(t,"id"),r=l(t,zR),o=l(t,BR),s=function(e,t){const n=l(t,nv),r=new Kk(n)
return r.percent=f(t,"percent"),r.date=l(t,xO),r.artwork=new Lk(l(t,"artwork.template"),f(t,"artwork.width"),f(t,"artwork.height"),[]),r}(0,d(t,"status"))
return new Zk(n,r,o,s)}(0,n),y={completed:f(I=r,"completedAchievements"),total:f(I,"totalAchievements")},E=function(e,t,n){if(!s(t))return{title:"",subtitle:null}
if(0===n.completed)return{title:e.loc.string("GAME_CENTER_REENGAGEMENT_ACHIEVEMENT_FIRST_TITLE"),subtitle:e.loc.string("GAME_CENTER_REENGAGEMENT_ACHIEVEMENT_FIRST_SUBTITLE")}
switch(t.status.type){case ep:case"hidden":case tp:return{title:e.loc.string("GAME_CENTER_REENGAGEMENT_ACHIEVEMENT_KEEPPLAYING_TITLE"),subtitle:e.loc.string("GAME_CENTER_REENGAGEMENT_ACHIEVEMENT_KEEPPLAYING_SUBTITLE")}
case np:return{title:e.loc.string("GAME_CENTER_REENGAGEMENT_ACHIEVEMENT_COMPLETEDCOUNT_TITLE"),subtitle:e.loc.stringWithCounts("GAME_CENTER_REENGAGEMENT_ACHIEVEMENT_COMPLETEDCOUNT_SUBTITLE",[n.completed,n.total])}
default:return{title:"",subtitle:null}}}(e,A,y),P=new ZL("gamecenter.fill",T,E.title,E.subtitle,A,g,p,h,m)
var I
return c.items=[P],Bn(0,P,a),c})}function Jr(e,t,n,o,s){const i=n(e,t,s)
if(!i)return Promise.resolve({originalData:t,additionalData:null})
const c=Array.from(i),a=[]
for(const t of c){const n=o(e,t)
if(r(n)){const e=c.indexOf(t)
c.splice(e,1)}else a.push(n)}return Promise.all(a).then(e=>{const n=new Map
for(const[t,r]of c.entries()){const o=e[t]
n.set(r,o)}return{originalData:t,additionalData:n}})}function Kr(e,t,n){if(o(t))return
const r=function(e){return l(e,"meta.metrics.clusterId")}(n)
o(r)||function(e,t,n){const r=Zr(t)
e.storage.storeString(r,n)}(e,t,r)}function Zr(e){return e+"-cohort-id"}function Xr(e,t,n){const r=new XL(n||UF)
r.isHorizontal=!1,r.items=jw
const o=new uD([r])
return o.isIncomplete=!0,o.title=t,o}function Qr(e,t,n){const r=function(e,t,n){const r={id:n.id,kind:null,softwareType:null,targetType:zb,title:n.title,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,idType:GC,fcKind:n.featuredContentId,badges:{gameCenter:{}}}
pt(r,n.title)
const o=n.shelfStyle||Tb,i=new XL(o)
i.isHorizontal=!0
const c=t.data,a=[]
for(let t=0;t<c.length;t++){const r=c[t],i={metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:U(r),anonymizationOptions:{anonymizationString:`GAME${t+1}`}},artworkUseCase:wa(0,o),canDisplayArcadeOfferButton:nu(0,o),shouldHideArcadeHeader:e.featureFlags.isEnabled($O)&&n.isArcadePage,shouldShowFriendsPlayingShowcase:!0},u=Ne(e,r,PR)
if(P(r,Lb)||!u)continue
const l=Xc(e,r,i)
s(l)&&(a.push(l),At(i.metricsOptions.locationTracker))}let u
switch(e.client.deviceType){case mk:u=2
break
case uk:case Sk:case"tv":u=6
break
default:u=0}if(wt(n.metricsLocationTracker),a.length<u)return i.isHidden=!0,i
if(i.items=a.slice(0,12),i.isHidden=!1,i.batchGroup=Nv,a.length>12){const t=new XL(Tb)
t.items=a,t.rowsPerColumn=1
const o=new uD([t])
o.title=n.title
const s=new wD(ak)
s.title=e.loc.string(ov),s.pageData=o,Ct(e,s,null,{pageInformation:r.pageInformation,locationTracker:r.locationTracker}),i.seeAllAction=s}return Bn(0,i,r),i}(e,t,n)
return r.mergeWhenFetched=!0,r.batchGroup=Nv,r.eyebrow=e.loc.uppercased(e.loc.string(RS)),r.eyebrowArtwork=We(e,CS,16,16),r.subtitle=n.subtitle,r.title=n.title,r.isHidden=0===r.items.length,r}function eo(e,t,n){if(e.client.deviceType!==mk&&e.client.deviceType!==uk)return null
const r=function(e,t,n){if(e.client.deviceType!==mk&&e.client.deviceType!==uk)return null
const r={id:n.id,kind:null,softwareType:null,targetType:zb,title:n.title,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,idType:GC,fcKind:n.featuredContentId,badges:{gameCenter:{}}}
pt(r,n.title)
const o=new XL("smallContactCard")
o.isHorizontal=!0,o.mergeWhenFetched=!0,o.batchGroup=Nv
const s=[]
for(let r=0;r<t.length;r++){const o=`FRIEND_SUGGESTION${r+1}`,i=t[r]
i.buttonText=e.loc.string("INVITE"),i.subtitle=e.loc.string("FROM_CONTACTS")
const c={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,id:o,anonymizationOptions:{anonymizationString:o}}
i.buttonAction=new YD(i.contactId),Rt(e,i.buttonAction,{...c,actionType:"inviteFriend"}),i.removeButtonAction=new jD(i.contactId),Rt(e,i.removeButtonAction,{...c,actionType:"removeFriendSuggestion"}),Bn(0,i,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,title:o,id:o,kind:"friendSuggestion",softwareType:null,anonymizationOptions:{anonymizationString:o}}),s.push(i),At(n.metricsLocationTracker)}return Bn(0,o,r),o.items=s,o.isHidden=0===o.items.length,wt(n.metricsLocationTracker),o}(e,t,n)
return r.eyebrow=e.loc.uppercased(e.loc.string(RS)),r.eyebrowArtwork=We(e,CS,16,16),r.subtitle=n.subtitle,r.title=n.title,r.batchGroup=Nv,r.isHidden=0===r.items.length,r}function to(e,t){return i(T(t,HR))}function no(e,t,n,r,s=!0){if(!r.isAdvert)return void ro(e,t,n,r)
const i=function(e,t,n){let r=Nn(0,t)
o(r)&&(r=e.random.nextUUID(),Cn(e,`Error: instanceId was null or empty. Assigned ${r}`))
const s=T(t,HR),i=y(t,"iad.impressionId"),c=y(t,"iad.privacy"),a=new jN(c)
a.title=e.loc.string("IAD_PRIVACY_MARKER_BUTTON_TITLE")
const u=Ja(e,t)?BO:Zy,l=oo(0,n)
return a.adActionMetrics=new HF(r,t.id,u,"markerPress",l),new YN(r,s,i,a)}(e,t,r),c=Ja(e,t)?BO:Zy,a=oo(0,r)
n.clickAction.adActionMetrics=new HF(i.instanceId,t.id,c,Ep,a),n.buttonAction.adActionMetrics=new HF(i.instanceId,t.id,c,"offerButtonPress",a),n.searchAd=i,n.itemBackground="ad",n.offerDisplayProperties&&s&&(n.offerDisplayProperties=n.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,iv,"ad")),P(t,"iad.format.userRating")||(n.rating=null,n.ratingCount=null),ro(e,t,n,r)}function ro(e,t,n,o){var s
const i=Gn(e,t,n,nt(0,t,n.icon),o,!0)
null===(s=n.clickAction)||void 0===s||s.actionMetrics.clearAll(),function(e,t,n){var o,s
if(!r(t.searchAd)&&(t.clickAction&&Rt(e,t.clickAction,n,!0),t.searchAd.transparencyAction)){const r=n.pageInformation,i={actionType:"ad_transparency"}
r.iAdInfo&&Object.assign(i,r.iAdInfo.clickFields)
const c=it(e,t.adamId,fk,i)
null!==(s=null===(o=r.iAdInfo)||void 0===o?void 0:o.shouldIncludeAdRotationFields)&&void 0!==s&&s&&c.includingFields.push(VO),t.searchAd.transparencyAction.actionMetrics.addMetricsData(c)}}(e,n,i),function(e,t,n,r){if(!t||!r)return
Bn(0,t,n)
const o=Qe(r.fastImpressionsFieldsForCurrentItem(n.locationTracker))
Object.assign(t.impressionMetrics.fields,o)
const s=u(n.disableFastImpressionsForAds)
t.impressionMetrics=new aD(t.impressionMetrics,!s),t.impressionMetrics.fields[rE]=w_}(0,n,i,i.pageInformation.iAdInfo)}function oo(e,t){var n
const o=null===(n=null==t?void 0:t.pageInformation)||void 0===n?void 0:n.iAdInfo
if(r(o))return Ev
const s=o.placementType
switch(s){case ZC:return"promotedContent"
case PC:return"searchAds"
default:throw new Error(`This method should never be called with value: ${s}`)}}function so(e,t){switch(y(t,Pp)){case Xy:return"com.apple.AppStore.BridgeStoreExtension"
case Qy:return"com.apple.MobileSMS"
default:return null}}function io(e,t,n,r=Ub){if(o(t)||o(t.attributes))return null
const c={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,mercuryMetricsData:rt(0,t)},a=Rr(e,t,!0),u=Or(e,t),f=a.backgroundColor||u.backgroundColor,d=br(e,t,0,!0),p=Cr(e,t,!1,0,!0)!==nd&&!0,h=uo(e,t,0,!1,p,gI)
let w=null
"tv"!==e.client.deviceType&&(w=h.description,h.description=null)
const g=us(0,a.artworkData||u.artworkData,!0),m=function(e,t){const n=Dr(0,t),r=l(n,"ctaButtonBackgroundColor"),o=l(n,"ctaButtonTextColor")
return s(r)&&s(o)?{type:_C,fillColor:ae(r),textColor:ae(o)}:{type:K_,fillColor:null,textColor:null}}(0,t),T=new kk(pk,e.bag.arcadeAppAdamId,r,null,pk,null,m,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId),A=new WF(h,T,{backgroundColor:f,wantsMaterialDetailBackground:!1,wantsBlur:p,badgeColor:null,titleColor:null,descriptionColor:null,callToActionColor:null,textAlignment:null,detailsPosition:d},null,w,u.artwork,a.video),y=Vn(e,t,A.details.title,{...c,targetType:PO})
y.displaysArcadeUpsell=!e.bag.isArcadeComingSoonEnabled,Bn(0,A,y),pt(y,A.details.title)
const E=lo(e,t,0,c)
return A.offerButtonAction=E,wt(c.locationTracker),i(n)&&o(n.pageTitleEffect)&&0===n.shelves.length&&(n.pageTitleEffect=g),At(n.metricsLocationTracker),A}function co(e,t){return Lr(0,t)}function ao(e,t){return y(t,BR)}function uo(e,t,n,r,o,s){let c=null
switch(s){case gI:c={type:gI}
break
case dv:const e=y(t,Xf)
c=i(e)?{type:dv,title:e}:{type:cb}
break
default:c={type:cb}}let a=Cr(e,t,r,0,!0)
const u=br(e,t,0,!0)
return o&&(a=rk),new YL(function(e,t){return y(t,zR)}(0,t),ao(0,t),c,null,a,kr(0,u,t,!0))}function lo(e,t,n,r){let o=null
return e.bag.isArcadeComingSoonEnabled?(o=new TD("https://www.apple.com/apple-arcade/#notify-me"),o.title=co(0,t)):o=fo(e,{marketingItemData:t},co(0,t),r),o}function fo(e,t,n,r,o){const i=t.marketingItemData
if(!s(i))return null
const c=Bt(0,i),u=l(c,YR)===vb,f=l(c,Ek)
if(u&&f){const t=function(e,t){const n=e.bag.dynamicUIRegexStrings
for(const e of n)if(new RegExp(e).test(t)){const e=new wD(aS,t)
return e.pageData=new _$,e}const r=e.bag.financeUIRegexStrings
for(const e of r)if(new RegExp(e).test(t))return new wD(lb,t)
const o=e.bag.webViewRegexStrings
for(const e of o)if(new RegExp(e).test(t))return new wD(uS,t)
return new TD(t,!1)}(e,f),o={id:e.bag.arcadeAppAdamId,actionType:mI,actionContext:xC,contextualAdamId:e.bag.arcadeAppAdamId,offerType:XA,targetType:fk,mercuryMetricsData:rt(0,i),...r}
return t.title=n,Rt(e,t,o),t}return function(e,t,n,r,o){const i=Bt(0,t),c=l(i,lS),u=l(i,iS)
if(!s(c)||!s(u))return null
const f=a(i,"serviceTypes").length>1&&e.bag.aristotleParentAppAdamId?e.bag.aristotleParentAppAdamId:e.bag.arcadeAppAdamId,d=new MD(c,f,{buyParams:u,productIdentifier:c},o),p={id:f,actionType:mI,targetType:fk,subscriptionSKU:c,actionContext:xC,contextualAdamId:f,actionDetails:{buyParams:u},offerType:XA,mercuryMetricsData:rt(0,t),...r}
return d.title=n,Rt(e,d,p),d}(e,i,n,r,o)}function po(e,t,n){const r=Lt(n.pageInformation)
r.id=Ze(n.id),r.idType=ze(n),r[nv]=bv,r.typeDetails="iTunesStoreContent",r[pR]=ft(n,null),n.actionDetails&&(r[bR]=n.actionDetails),t.templateMediaEvent=function(e,t){const n={}
return Object.assign(n,t),n[HC]=aE,st(0,new rD(n,[],[],lt(0,n),ut(e,n)))}(e,r)
const o=W(r)
o[xS]=t.videoUrl,t.templateClickEvent=function(e,t,n,r){const o={}
return Object.assign(o,r),o[HC]=GO,o[sE]=n,o[$p]=null,st(0,new rD(o,[CR],[],lt(0,o),ut(e,o)))}(e,0,fk,o)}function ho(e,t){const n=new Set,r=$(t),o=ce(r,ly)
for(const t of o){let o
if(o=go(e,t,r),i(o))for(const e of o)n.add(e)}return n}function wo(e,t){let n
return t===gP&&(n=hn(e,WP)),t===mP&&(n=pn(e,10)),r(n)?null:b(e,n).catch(()=>null)}function go(e,t,n){if(y(t,fg)!==TP)return null
const o=y(t,dg),s=r(wn(e,n)),i=[]
return o===pg&&(i.push(mP),s&&i.push(gP)),i}function mo(e,t,n,c){return Ll.x9(`module: ${c.module}`,()=>{let a
switch(c.module){case"Header":c.titleForNextShelf=y(t,xR),a=null
break
case"TextBlock":a=function(e,t,n){const r=y(t,xR)
if(!r)return null
const o=new Wk(r,BC,bb)
Eo(0,o,n)
const s=new XL(hv)
return s.items=[o],s}(0,t,c),c.hasNonFocusableElements=!0
break
case"CollectionLockup":a=function(e,t,n){const r=P(t,"showOrdinals"),o="OrdinalDesc"===y(t,"collectionLockupDisplayType")?kp:"ascending",s=y(t,"collectionLockupSize")
let i
if(n.subStyle=s,s)switch(s){case yg:i=ES
break
case Ag:i=Tb
break
default:i=Jb}const c={metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,artworkUseCase:wa(0,i),canDisplayArcadeOfferButton:nu(0,i)},a=ia(e,ce(t,ck),{includeOrdinals:r,ordinalDirection:o,lockupOptions:c})
if(!a||0===a.length)return null
const u=new XL(i)
return u.items=a,u}(e,t,c),c.hasFocusableElements=!0
break
case hg:a=function(e,t,n){const r=y(t,"inlineImageDisplayType"),o=ga(e,T(t,nk),{useCase:13,allowingTransparency:r===iO})
if(!o)return null
const s=new ML(o,!1,BC)
s.caption=y(t,xR),n.subStyle=r,r&&("BoundingBox"===r?(s.isFullWidth=!1,s.hasRoundedCorners=!0):(s.isFullWidth=!0,s.hasRoundedCorners=!1)),Eo(0,s,n)
const i=new XL(AP)
return i.items=[s],i}(e,t,c),c.hasNonFocusableElements=!0
break
case wg:a=function(e,t,n){const r=yo(0,t)
if(!r)return null
let o=null
const c=ce(t,Tk)
if(i(c)&&(o=dr(e,c,n.metricsPageInformation,n.metricsLocationTracker,n),s(o)))return o
const a=y(t,"appLockupSize")
let u
n.subStyle=a
let l=!1
if(a)switch(a){case Tg:u=Jb,l=!0
break
case Ag:u=Tb,l=!0
break
default:u=wy}const f=kt(0,t)
if(l){const t=new XL(u),s=Xc(e,r,{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,externalDeepLinkUrl:f,artworkUseCase:wa(0,u)})
t.items=[s],o=t}else o=function(e,t,n){const r=new XL(wy),o="tv"!==e.client.deviceType,s=yo(0,t),i=kt(0,t),c=Xc(e,s,{offerStyle:iv,metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,externalDeepLinkUrl:i,crossLinkSubtitle:n.crossLinkSubtitle,artworkUseCase:1}),a=new lL(GR,c)
a.description=Yc(e,s)
let u=null
switch(y(t,"appLockupVideo")){case"AppTrailer":{const t=Ia(e,s)
t&&t.length>0&&(u=t[0])
break}}return u&&(po(e,u,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,id:n.pageId}),a.video=u),o&&(r.background={type:Sv,color:jF}),r.items=[a],r}(e,t,n)
return o}(e,t,c),c.hasFocusableElements=!0
break
case"TipBlock":a=function(e,t,n){const r=ga(e,T(t,nk),{useCase:13})
if(!r)return null
const o=y(t,xR),s=y(t,"tipNumber"),i=new ML(r,!1,BC)
i.isFullWidth=!1,i.hasRoundedCorners=!0,i.caption=o,i.ordinal=s,Eo(0,i,n)
const c=new XL(AP)
return c.items=[i],c}(e,t,c),c.hasNonFocusableElements=!0
break
case"PullQuote":a=function(e,t,n){const r=y(t,mg),o=y(t,"quoteAttribution"),s=ga(e,T(t,nk),{useCase:13}),i=y(t,"pullQuoteDisplayType")===iO,c=new GL(r,o,s,i)
Eo(0,c,n)
const a=new XL(mg)
return a.items=[c],a}(e,t,c),c.hasNonFocusableElements=!0
break
case"HorizontalRule":a=function(e,t,n){let r=le("defaultLine")
const s=T(t,"customColor"),i=ae(l(s,"lightMode")),c=ae(l(s,"darkMode"))
o(i)||o(c)||(r=fe(i,c))
const a=y(t,"lineStyle"),u=y(t,fb)===iO,f=new HL(a,r,u),d=new XL("horizontalRule")
return d.items=[f],d}(0,t),c.hasNonFocusableElements=!0
break
case gg:a=function(e,t,n){const r=ga(e,T(t,"video.previewFrame"),{useCase:13})
if(!r)return null
const o=y(t,"video.video")
if(!o)return null
const s=y(t,"inlineVideoDisplayType")===iO,i=new eD(o,r,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}})
po(e,i,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,id:n.pageId})
const c=new UL(i,s,BC)
c.caption=y(t,xR),Eo(0,c,n)
const a=new XL(L_)
return a.items=[c],a}(e,t,c),c.hasFocusableElements=!0
break
case"AppMedia":a=function(e,t,n){const o=yo(0,t)
if(!o)return null
const i=y(t,"appMediaOption"),c=y(t,"appMediaPlatform")
switch(n.subStyle=i,i){case"Screenshots":{let t=null
if(t=new XL(Ak),r(c)){const n=_a(e,o,14)
n&&n.length>0&&(t.items=[n[0]])}else{const n=function(e,t){switch(t){case Xy:return Ok
case gC:return e.client.isPad?uk:mk
case LO:return"tv"
case Qy:return yb
default:return null}}(e,c)
if(n){const r=_a(e,o,14,[n])
r&&r.length&&(t.items=[r[0]])}}return s(t)&&0===t.items.length?null:t}case"AppTrailers":const t=new XL(L_),i=Ia(e,o)
if(i&&i.length>0){const r=i[0]
po(e,r,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,id:n.pageId})
const o=new UL(r,!1,jv,null,null,!0)
return t.items=[o],t}return null
default:return null}}(e,t,c),c.hasFocusableElements=!0
break
case"LinkBlock":a=function(e,t,n){const r=y(t,Ek)
if(!r)return null
const o=new sN(r),s=y(t,"urlTitle")
let i=y(t,xR)
i||(i=o.host)
const c=["itunes.apple.com",XO,"music.apple.com","books.apple.com","podcasts.apple.com","watch-app.cdn-apple.com"]
let a=!1
for(const e of c)o.host.endsWith(e)&&(a=!0)
const u=new TD(r)
Rt(e,u,{targetType:vb,pageInformation:n.metricsPageInformation,id:`${n.index}`,locationTracker:n.metricsLocationTracker})
const l=new DL(s,i,u,a)
Eo(0,l,n)
const f=new XL(vb)
return f.items=[l],f}(e,t,c),c.hasFocusableElements=!0
break
case"TextList":a=function(e,t,n){const r=A(t,xR)
if(!r.length)return null
const o=y(t,"textListDisplayType")
n.subStyle=o
let s,i=!1
i="Bulleted"===o,s=i?"<ul>":"<ol>"
for(const e of r)s=`${s}<li>${e}</li>`
s=i?`${s}</ul>`:`${s}</ol>`
const c=new Wk(s,BC,bb)
Eo(0,c,n)
const a=new XL(hv)
return a.items=[c],a}(0,t,c),c.hasNonFocusableElements=!0
break
case"IAPLockup":a=function(e,t,n){const r=yo(0,t)
if(!r)return null
const o=Qc(e,r,{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,artworkUseCase:1})
if(!o)return null
const s=new dL(o),i=new XL("inAppPurchaseShowcase")
return i.background={type:Sv,color:YF},i.items=[s],i}(e,t,c),c.hasFocusableElements=!0
break
case TP:a=function(e,t,n,o){const c=y(t,dg)
o.subStyle=c
let a=null
switch(c){case"OSUpgrade":a=function(e,t,n){const r=e.client.deviceType
if(r!==Sk)return null
const o=Nt(r)
if(null===o)return null
const s=new TD(o)
Rt(e,s,{targetType:vb,pageInformation:n.metricsPageInformation,id:`${n.index}`,locationTracker:n.metricsLocationTracker})
const i=e.loc.string("CLIENT_CONTROL_OS_UPGRADE_TITLE","CHECK FOR UPDATE"),c=new WL(i,s)
Eo(0,c,n)
const a=new XL("clientControlButton")
return a.items=[c],a}(e,0,o)
break
case pg:a=function(e,t,n,o){let c=wn(e,n)
if(!c&&o.additionalData&&(c=gn(0,o.additionalData.get(gP))),!s(c))return null
const a={pageInformation:o.metricsPageInformation,locationTracker:o.metricsLocationTracker},u=fn(0,o.metricsPageInformation,o.metricsLocationTracker)
let l
u.title=e.loc.string(SR,OR)
const f=Lr(0,c.marketingItemData)
i(f)?(l=lo(e,c.marketingItemData,0,a),s(l)&&(l.title=f)):(l=fn(0,o.metricsPageInformation,o.metricsLocationTracker),l.title=e.loc.string(SR,OR))
const d=new KL(l,u),p=ao(0,c.marketingItemData)
d.unsubscribedDescription=p
const h=new kk(pk,e.bag.arcadeAppAdamId,iv,null,rk,null,null,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId)
h.titles[ZI]=e.loc.string(SR,OR),d.offerDisplayProperties=h,Bn(0,d,{...a,targetType:MI,title:f,id:t.id,kind:MI,softwareType:null,displaysArcadeUpsell:!0})
{if(r(o.additionalData))return null
const t=o.additionalData.get(mP)
if(i(t)){const n={pageInformation:o.metricsPageInformation,locationTracker:o.metricsLocationTracker},r=M(t)
d.iconArtworks=Ta(e,r,n,{useCase:2})}}const w=new XL(MI)
return w.items=[d],w.background={type:Sv,color:zF},w}(e,t,n,o)}return a}(e,t,n,c),c.hasFocusableElements=!0
break
case"StoryList":a=function(e,t,n){const r=ce(t,ck)
if(!r)return null
const o=y(t,_k),s=y(t,CC)
return ks(e,r,VC,o,s,n,null)}(e,t,c),c.hasFocusableElements=!0
break
case"AppEventLockup":a=function(e,t,n){const r=yo(0,t)
return r?dr(e,[r],n.metricsPageInformation,n.metricsLocationTracker,n):null}(e,t,c),c.hasFocusableElements=!0
break
default:a=null}return a})}function To(e,t){const n=ce(t,Ib)
if(1!==n.length)return null
const r=n[0]
if(!r)return null
switch(r.type){case Pk:case lk:return r
default:return null}}function Ao(e){return e.client.deviceType===Sk?Ub:_b}function yo(e,t,n){return ie(t,ck)||null}function Eo(e,t,n){if(!t)return
let r=n.module
n.subStyle&&(r=r+"_"+n.subStyle)
const o={id:`${n.index}`,impressionIndex:n.index,idType:Mb,impressionType:r,kind:"iosModule"}
t.impressionMetrics=new cD(Qe(o))}function Po(e,t,n=e.host.clientIdentifier,r=[]){t||(t=36)
const o=new B$(e).forType(rS).includingAdditionalPlatforms(r).includingMacOSCompatibleIOSAppsWhenSupported(!0).addingQuery(Nb,`${t}`)
return n===ON?o.addingContext(Ok):n===RN&&o.addingContext(yb),o}function Io(e,t,n=!0){return Ll.Do("categoryListFromApiResponse",()=>{const r=a(t,"results.categories"),o=_o(e,d(r,"0"),n)
return o?new XF(o.children):null})}function _o(e,t,n=!0){return Ll.Do("categoryFromApiResponse",()=>{if(!t)return null
const r=l(t,_k),o=l(t,Nb),i=l(t,uR),c=ga(e,d(t,nk),{allowingTransparency:!0,useCase:19}),u=a(t,zv).map(t=>_o(e,d(t),n)).filter(e=>s(e)),f=function(e,t){return t.sort((t,n)=>{try{return t.name.localeCompare(n.name,e.loc.safeIdentifier,{usage:kv})}catch(e){return 0}})}(e,u),p=l(t,Eb)
return p&&n&&f.unshift(new ZF(p,o,c,i,[])),new ZF(r,o,c,i,f)})}function So(e){switch(e){case 504:case 505:case 506:case 520:case 521:case 522:case 523:case 524:case 525:return!0
default:return!1}}function Oo(e,t,n,r=null){const o=function(e,t,n,r=null,o=e.host.clientIdentifier){const s=[qv,tb,Vb]
e.appleSilicon.isSupportEnabled&&s.push(Pb)
let c=new B$(e).forType(RO).addingQuery(Nb,t).includingAttributes(s).addingQuery(py,Pk).includingMacOSCompatibleIOSAppsWhenSupported(!0).includingAdditionalPlatforms(K(e)).usingCustomAttributes(we(e))
return i(n)&&c.addingQuery(b$.charts,n),o===ON?c.addingContext(Ok):o===RN&&c.addingContext(yb),e.appleSilicon.isSupportEnabled&&(c=c.includingAdditionalPlatforms([Hv,ib])),r&&(c=c.addingQuery(b$.ages,r)),c}(e,t,n,r)
return o.withLimit(200),o.enablingFeature("newChartsElements"),b(e,o)}function Ro(e,t){let n
return n=e.host.clientIdentifier===RN||function(e){const t=e.query[b$.charts]
return i(t)&&(-1!==t.indexOf("top-free-safari-extensions")||-1!==t.indexOf("top-paid-safari-extensions"))}(t)?Promise.resolve({}):b(e,Po(e)).catch(()=>{}),n}function Co(e,t,n){const r=new Qx
r.overlayType=vo(0,t),r.displayOptions={horizontalPlacement:Do(e,t),textAlignment:No(e,t),isOverDarkContent:ko(e,t)}
const c=ou(e,t),a=y(t,Eb)
if(Ne(e,t,kS)?r.badgeText=e.loc.uppercased(ru(e,c,a)):r.badgeText=a,r.titleText=Za(e,t,_k)||ke(e,c,_k),r.descriptionText=Za(e,t,sb)||ke(e,c,CC),r.callToActionText=y(t,rd),r.buttonTitle=function(e,t){if("tv"!==e.client.deviceType)return null
switch(vo(0,t)){case Wb:return e.loc.string(mp)
case jI:case dv:let t=e.loc.string(Tp)
return t===Tp&&(t=e.loc.string(mp)),t
case Ky:return e.loc.string("HERO_CAROUSEL_OVERLAY_BUTTON_TITLE_COLLECTION")
default:return null}}(e,t),r.overlayType===Wb&&(r.lockup=function(e,t,n){let r=ie(t,eb)
const s=ce(t,Ib)
if(o(r)&&i(s)&&(r=s[0]),o(r))return null
const c={metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:U(t)},artworkUseCase:wa(0,n.shelfStyle),offerStyle:HA,offerEnvironment:rk,canDisplayArcadeOfferButton:nu(0,n.shelfStyle),shouldHideArcadeHeader:e.featureFlags.isEnabled($O)&&n.isArcadePage,isContainedInPreorderExclusiveShelf:497===n.featuredContentId},a=Xc(e,r,c),u=ou(e,t),l=Za(e,t,sb)||ke(e,u,CC)
return i(l)&&(a.subtitle=l),a}(e,t,n)),i(a)&&s(r.lockup)&&(r.lockup.heading=a),r.collectionIcons=function(e,t,n){const r=ce(t,Ib)
if(o(r))return null
const s=[]
for(const t of r){const n=Aa(e,t,{useCase:1,withJoeColorPlaceholder:!0})
i(n)&&s.push(n)}return i(s)?s:null}(e,t),i(r.lockup))r.clickAction=r.lockup.clickAction,r.impressionMetrics=r.lockup.impressionMetrics
else{const o={targetType:Wb,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:U(t)},s=bo(e,t),i=xr(e,t)
i.title=s,Rt(e,i,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:U(t),targetType:Wb,id:t.id}),r.clickAction=i,Bn(0,r,Vn(e,t,s,o))}return r}function vo(e,t){const n=P(t,td),r=y(t,YR),c=ce(t,Ib)
let a=ie(t,eb)
return o(a)&&i(c)&&(a=c[0]),s(a)&&"App"===r?Wb:i(c)&&"Collection"===r?Ky:n?jI:dv}function bo(e,t){const n=vo(0,t),r=ie(t,eb)
switch(n){case Wb:return y(r,_k)
case jI:case dv:case Ky:return Za(e,t,_k)||ke(e,r,_k)
default:return null}}function ko(e,t){const n=Rr(e,t),r=Or(e,t),o=n.backgroundColor||r.backgroundColor
return!o||ue(o,50)}function Do(e,t){if(e.client.isPhone)return $b
const n=y(t,TI)
if(!i(n))return Gb
switch(n.toLowerCase()){case AI:return Gb
case $b:return $b
case ey:return fS
default:return Gb}}function No(e,t){switch(Do(e,t)){case Gb:case fS:return Gb
case $b:return function(e,t){var n
switch((null!==(n=y(t,TI))&&void 0!==n?n:"").toLowerCase()){case AI:return Gb
case $b:return $b
default:return Gb}}(0,t)
default:return Gb}}function Lo(e,t,n){const c=I(t,EC)
Ll.x9(`walkFeaturedContent: ${c}`,()=>{const a=ie(t,KC)
if(s(a))return void Lo(e,a,n)
let u=null
const f=y(t,"gamesFilter")
switch(f){case pk:case rp:case"all":u=f
break
default:495!==c&&500!==c||(u=pk)}let d=null,p=y(t,Fo(0,c)),h=null,w=y(t,CC),g=!1
const m=ce(t,xy)[0]
476===c&&i(m)&&(d=e.loc.uppercased(y(t,Fo(0,c))),p=y(m,Fo(0,c)),h=Aa(e,m,{useCase:1}),w=null,g=!0)
const T={featuredContentId:c,metricsPageInformation:n.metricsPageInformation,metricsLocationTracker:n.metricsLocationTracker,pageGenreId:n.pageGenreId,featuredContentData:t,id:l(t,"id"),eyebrow:d,eyebrowArtwork:null,title:p,titleArtwork:h,subtitle:w,shouldFilter:!1,gamesFilter:u,remainingItems:[],isFirstRender:!0,isDeferring:!1,showOrdinals:!1,hasExistingContent:!1,showingPlaceholders:!1,ordinalIndex:1,isSearchGrouping:n.isSearchGrouping,isArcadePage:n.isArcadePage},A={id:T.id,kind:null,softwareType:null,targetType:zb,title:g?T.eyebrow:T.title,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,idType:GC,fcKind:c,recoMetricsData:xo(0,t)}
let S,O=!0,R=!1
switch(c){case 413:case 414:case 254:case 255:case 256:case 266:case 271:case 436:$o(e,t,n)
break
case 424:n.topChartIdentifiers=function(e,t){const n=[],r=ce(t,zv)
for(const e of r)if(So(I(e,EC))){const t=y(e,TO)
i(t)&&n.push(t)}return n}(0,t),$o(e,t,n),n.topChartIdentifiers=[]
break
case 425:{const r=ie(t,zv)
if(r){const t=ce(r,zv)
t.length&&(pt(A,T.title),S=Uo(e,t,T),wt(n.metricsLocationTracker),R=!0)}break}case 415:case 416:case 501:case 417:case 258:{pt(A,T.title),T.clientIdentifierOverride=so(0,t)
const r=ce(t,zv)
S=Bo(e,r,T,n),wt(n.metricsLocationTracker),R=!0
break}case 421:case 422:case 423:case 261:{pt(A,T.title)
let o=E(t,"suppressText")
r(o)&&(o=!0)
const s=!o
T.clientIdentifierOverride=so(0,t)
const i=ce(t,zv)
S=Mo(e,i,T,s),wt(n.metricsLocationTracker),R=!0
break}case 437:case 265:pt(A,T.title),S=Wo(e,t,T),wt(n.metricsLocationTracker),R=!0
break
case 475:{pt(A,T.title)
const r=function(e,t){switch(t){case MO:return VC
case wp:return Yy
case GR:return WI
case NS:return GI
default:return null}}(0,y(t,fb)),o=ce(t,ck),s={metricsLocationTracker:T.metricsLocationTracker,metricsPageInformation:T.metricsPageInformation}
S=r===GI?Ho(e,o,T,s):Vo(e,o,r,T,s),T.shelfStyle=r,S.url=ns(S,T),S.isHorizontal=!0,wt(n.metricsLocationTracker),R=!0
break}case 480:S=function(e,t,n,s){const c=y(t,fb),a=ce(t,ck)
switch(c){case MO:return Ko(e,a,n)
case zP:return function(e,t,n,s,c){const a=new XL(HI),u={targetType:zb,pageInformation:s.metricsPageInformation,locationTracker:s.metricsLocationTracker,recoMetricsData:U(t)},l=new tF
l.autoScrollConfiguration={isAutoScrollEnabled:e.bag.heroCarouselAutoScrollDuration>0,autoScrollInterval:e.bag.heroCarouselAutoScrollDuration}
const f=Vn(e,t,HI,u)
f.autoAdvanceInterval=l.autoScrollConfiguration.autoScrollInterval,Bn(0,a,f),pt(f,HI)
for(const t of n){if(r(t.attributes)||as(s)){s.isDeferring=!0,s.remainingItems.push(t)
continue}const n=ou(e,t)
if($r(0,t)&&!_(n)){s.isDeferring=!0,s.remainingItems.push(t),s.relationshipDataToFetch=eb
continue}const i={targetType:My,pageInformation:s.metricsPageInformation,locationTracker:s.metricsLocationTracker,recoMetricsData:U(t)},c=Rr(e,t),a=Or(e,t)
if(o(c.video)&&o(a.artwork))continue
const u=new eF,f=To(0,t),d=bo(e,t),p=Vn(e,t,d,i)
p.isPreorder=Ne(e,f,Lb),Bn(0,u,p),pt(p,d)
const h=c.artworkData||a.artworkData,w=c.backgroundColor||a.backgroundColor
u.overlay=Co(e,t,s),u.backgroundColor=w,u.titleEffect=us(0,h),u.artwork=a.artwork,u.video=c.video
const g=xr(e,t)
Rt(e,g,{pageInformation:s.metricsPageInformation,locationTracker:s.metricsLocationTracker,recoMetricsData:U(t),targetType:My,id:t.id}),u.clickAction=g,l.items.push(u),wt(p.locationTracker),At(p.locationTracker)}return i(l.items)&&(a.items=[l],c.pageTitleEffect=l.items[0].titleEffect),a.url=ns(a,s),wt(f.locationTracker),At(f.locationTracker),a}(e,t,a,n,s)
case GR:return qo(e,a,!1,n,s)
default:return null}}(e,t,T,n),0===n.shelves.length&&(S.presentationHints={isFirstShelf:!0}),O=!1
break
case 500:S=function(e,t){const n=Yr(e,{data:[]},t)
if(!n)return null
const r=rs(t)
return n.url=r+`?${b$.isGameCenterContinuePlayingShelf}=true`,n.batchGroup=$F,n}(e,T),R=!0
break
case 494:S=function(e,t){const n=zr(e,{data:[]},{},{},t)
if(!n)return null
const r=rs(t)
return n.url=r+`?${b$.isGameCenterReengagementShelf}=true`,n.batchGroup=Nv,n}(e,T),R=!0
break
case 495:T.shelfStyle=Qo(0,T.featuredContentId,n,t),S=function(e,t){const n=Qr(e,{data:[]},t),r=rs(t)
return n.url=r+`?${b$.isGameCenterPopularWithYourFriendsShelf}=true`,n}(e,T),R=!0
break
case 496:S=function(e,t){if(e.client.deviceType!==mk&&e.client.deviceType!==uk)return null
const n=eo(e,[],t),r=rs(t)
return n.url=r+`?${b$.isGameCenterSuggestedFriendsShelf}=true`,n.isHidden=0===n.items.length,n.batchGroup=Nv,n}(e,T),R=!0
break
case 519:case 518:pt(A,T.title),S=function(e,t,n,r,o,s){return Qt(e)?fr(e,ce(t,ck),n,r,!1,o,s):null}(e,t,518===c,T,n,A),wt(n.metricsLocationTracker),R=!0
break
default:if(er(c)){const r=!P(t,Fy),o=ie(t,"room"),s=se(t,ck)
let a=s?s.data:null
if(tr(c)&&(function(e,t,n,r){const o=476===t.featuredContentId
if(!r.hasAuthenticatedUser&&!t.isSearchGrouping&&!o)return
const s=y(n,Jy)
if(i(s))return t.onDeviceRecommendationsUseCase=s,t.recommendationsHref=n.href,void(t.isValidRecommendationsShelf=!0)
const c=i(ce(n,ck)),a=!P(n,"noPersonalizationAvailable")
if(!c&&a)return t.recommendationsHref=n.href,void(t.isValidRecommendationsShelf=!0)
t.isValidRecommendationsShelf=c}(0,T,t,n),!T.isValidRecommendationsShelf))break
a&&0!==a.length||(a=ce(t,zv)),function(e,t){const n=y(t,wf),r=y(t,TO)
return i(n)&&i(r)}(0,t)?T.seeAllUrl=function(e,t,n){const r=y(t,wf),o=new sN(r),s=y(t,TO)
return o.param(b$.selectedChartId,s),i(n)&&o.param(b$.charts,n.join(",")),o.toString()}(0,t,n.topChartIdentifiers):i(o)&&(T.seeAllUrl=Gr(e,o.href)),T.shouldFilter=r,T.shelfStyle=Qo(0,T.featuredContentId,n,t),A.displayStyle=T.shelfStyle,nr(c)&&(T.showOrdinals=!0,T.shouldFilter=!1),T.clientIdentifierOverride=so(0,t),pt(A,T.title)
const u=function(e){switch(e){case 491:case 492:case 493:return!0
default:return!1}}(c)?38782:30718
S=Yo(e,a,T,n.adStitcher,null,u),tr(c)&&i(T.onDeviceRecommendationsUseCase)&&(S.batchGroup=VI),wt(n.metricsLocationTracker),R=!0
break}}const C=S&&i(S.url)
if(S&&(i(S.items)||C)){if(O&&(Bn(0,S,A),i(S.url)&&i(S.impressionMetrics)&&T.showingPlaceholders)){const e=S.url
try{const t=sN.from(e),n=t.popPathComponent(),r=JSON.parse(decodeURIComponent(n))
r.originalPlaceholderShelfImpressionMetrics=S.impressionMetrics,t.path(encodeURIComponent(JSON.stringify(r))),S.url=t.build()}catch{S.url=e}}n.isSearchGrouping&&Xo(0,S,T),i(S.url)&&i(n.additionalShelfParameters)&&(S.url=sN.from(S.url).append(sv,n.additionalShelfParameters).build()),n.shelves.push(S)}R&&At(n.metricsLocationTracker)})}function $o(e,t,n){const r=ce(t,zv)
for(const t of r)Lo(e,t,n)}function xo(e,t){const n=I(t,EC)
switch(n){case 425:case 415:case 416:case 417:case 501:case 258:case 421:case 422:case 423:case 261:return U(se(t,zv))
case 437:case 265:{const e=se(t,zv),n=A(t,FO)
return i(e)?U(e):i(n)?U(t):null}case 414:case 424:return null
default:if(er(n)||519===(o=n)||518===o){let e=se(t,ck)
if(r(e))return null
const n=e.data
return n&&0!==n.length||(e=se(t,zv)),U(e)}return null}var o}function Fo(e,t){switch(t){case 495:case 496:return zR
default:return _k}}function Mo(e,t,r,i){const c=[],a=[],u=new XL(Uy)
u.isHorizontal=!0
for(const n of t){const t={targetType:Uy,pageInformation:r.metricsPageInformation,locationTracker:r.metricsLocationTracker,recoMetricsData:U(n)},o=ss(e,n,r,!1,null,t,null)
if(!o){a.push(n)
continue}const i=new kL,u={useCase:17}
if(o.artwork&&261!==r.featuredContentId){let t=d(o.artwork,op)
t||(t=d(o.artwork,"originalFlowcaseBrick")),i.artwork=es(e,t,u)}else i.artwork=ts(e,n,1060,520,u)
i.accessibilityLabel=o.title,i.shortEditorialDescription=o.title,i.clickAction=o.action,435===I(n,EC)&&(i.personalizationStyle=bS)
const l=ie(n,ck)
if(s(l)){const o=_t(e,l,t)
i.flowPreviewActionsConfiguration=oi(e,n,!0,r.clientIdentifierOverride,i.clickAction,t,o)}Bn(0,i,Vn(e,n,o.title,t)),i.isValid()&&(c.push(i),At(t.locationTracker))}return s(r.shelfPresentationHints)&&(u.presentationHints=r.shelfPresentationHints),s(i)&&(u.presentationHints={...u.presentationHints,showSupplementaryText:i}),delete r.maxItemCount,s(n(r.featuredContentData,"relationships.children.data"))&&(r.featuredContentData.relationships[zv].data=a),u.title=r.title,u.subtitle=r.subtitle,u.items=c,u&&o(u.items)&&r.isFirstRender&&rr(e.featureFlags,r)&&or(u,r,e.client.deviceType),r.shelfPresentationHints=u.presentationHints,u.url=ns(u,r),u}function Uo(e,t,n){const o=[]
for(const s of t){const t=ie(s,UO)
if(r(t))continue
const c=cs(0,t)
if(r(s.attributes)||r(t.attributes)||as(n)){n.isDeferring=!0,n.remainingItems.push(t)
continue}const a={targetType:sp,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:U(s)},u=ca(e,t,{...a,id:c},n.clientIdentifierOverride)
Bn(0,u,{...a,kind:vb,softwareType:null,title:u.title,id:c})
const l=T(t,nk)
i(l)&&(u.artwork=ga(e,l,{allowingTransparency:!0,useCase:19})),o.push(u),At(n.metricsLocationTracker)}const s=function(e,t,n){const r=new XL(Cv)
let o
switch(e.client.deviceType){case"tv":r.isHorizontal=!0,o=7
break
case Sk:r.isHorizontal=!1,o=null
break
default:r.isHorizontal=!1,o=6}if(null!==o&&t.length>o){r.items=t.slice(0,o)
const s=new wD(ak)
s.title=e.loc.string(ov),Ct(e,s,null,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker}),r.seeAllAction=s
const i=new XL(Cv)
i.isHorizontal=!1,function(e,t){t.sort((t,n)=>{try{return t.title.localeCompare(n.title,e.loc.safeIdentifier,{usage:kv})}catch(e){return 0}})}(e,t),i.items=t
const c=new uD([i])
c.title=e.loc.string("PAGE_TITLE_CATEGORIES"),s.pageData=c}else r.items=t
return r}(e,o,n)
return s.title=n.title,s.subtitle=n.subtitle,s.url=ns(s,n),s}function Bo(e,t,n,o){const c=new XL("editorialCard")
c.isHorizontal=!0,n.relationshipDataToFetch=ck
const a=function(e,t){if(!Zn(e))return null
const n=new Set
for(const e of t){const t=501===I(e,EC),r=i(l(e,Ek)),o=i(y(e,ip)),s=oe(e,ck,!1)
if(t&&!r&&!o&&s){const t=ce(e,ck)
for(const e of t){const t=l(e,EO)
i(t)&&n.add(t)}}}return Xn(e,n)}(e,t),u=[]
for(const c of t){const t={targetType:zP,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:U(c),id:c.id,idType:"editorial_id"},f=I(c,EC),p=ss(e,c,n,501===f,a,t,o,()=>{n.remainingItems.push(c)})
if(!p)continue
i(p.content)&&(t.adamId=p.content.id)
const h=new vL
let w=y(c,"designBadge")
w||(w=p.caption),h.caption=w
let g=y(c,zR)
g||(g=p.title),h.title=g
let m=ls(y(c,By))
m||(m=p.subtitle),h.subtitle=m
const T={useCase:18,withJoeColorPlaceholder:!0}
if(p.artwork&&258!==n.featuredContentId){let t=d(p.artwork,op)
r(t)&&s(p.appEvent)&&(t=d(p.artwork,"eventCard")),h.artwork=es(e,t,T)}else h.artwork=ts(e,c,416,204,T)
if(h.clickAction=p.action,s(p.appEvent)&&(h.appEventFormattedDates=p.appEvent.formattedDates),h.lockup=p.lockup,s(h.artwork)&&s(h.artwork.backgroundColor)){const e=ue(h.artwork.backgroundColor)
if(h.mediaOverlayStyle=e?rk:ab,s(h.lockup)&&s(h.lockup.offerDisplayProperties)){const t=e?rk:ab
h.lockup.offerDisplayProperties=h.lockup.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,HA,t)}}h.adamId=l(p.content,"id")
const A=ie(c,ck)
if(s(A)){const r=_t(e,A,t)
r.targetType=t.targetType,h.flowPreviewActionsConfiguration=oi(e,c,!1,n.clientIdentifierOverride,h.clickAction,t,r)}const E=Vn(e,c,p.title,t)
if(s(p.onDevicePersonalizationDataProcessingType)){const e=ot(E.recoMetricsData,p.onDevicePersonalizationDataProcessingType,null)
E.recoMetricsData=e}s(p.appEvent)&&(E.inAppEventId=p.appEvent.appEventId,s(p.appEvent.lockup)&&(E.relatedSubjectIds=[p.appEvent.lockup.adamId])),Bn(0,h,E),h.isValid()&&(u.push(h),At(n.metricsLocationTracker))}return delete n.maxItemCount,c.items=u,c.url=ns(c,n),c}function Go(e,t,n){var r
if(e.user&&e.user.isManagedAppleID)return null
{const t=new XL(cp),n=[],o=e.loc.string("FOOTER_REDEEM",BA),s=new wD(lb)
s.pageUrl=cR
const i=new FL(o,s)
if(n.push(i),e.bag.isMonetaryGiftingEnabled){const t=e.loc.string("FOOTER_SEND_GIFT",Ef),r=new wD(lb)
r.pageUrl=tS
const o=new FL(t,r)
n.push(o)}const c=e.bag.accountTopUpURL
if(c){const t=null!==(r=e.bag.accountTopUpTitle)&&void 0!==r?r:e.loc.string("FOOTER_ADD_MONEY"),o=new wD(lb)
o.pageUrl=c
const s=new FL(t,o)
n.push(s)}const a=new xL(n)
return a.compactLineBreaks=a.buttons.map((e,t)=>t),t.items=[a],t}}function Vo(e,t,n,r,o){let s
if(n===VC)s=n
else switch(e.client.deviceType){case Sk:case"tv":s=n
break
case Ok:s=_R
break
default:s=tC}return ks(e,t,s,r.title,r.subtitle,o,function(e){return r.remainingItems.push(e),!1})}function Ho(e,t,n,i){const c=[]
let a=!1
for(const u of t){if(!_(u)||a){n.remainingItems.push(u),a=!0
continue}let t=T(u,ap)
o(t)&&(t=T(u,Gy))
const l=ga(e,t,{cropCode:"fn",withJoeColorPlaceholder:!0,useCase:16})
if(r(l))continue
const f=y(u,"editorialNotes.name"),d=y(u,Eb),p=y(u,up),h=new QL(f,l,d,p),w=Hs(e,u,{pageInformation:i.metricsPageInformation,locationTracker:i.metricsLocationTracker},null)
s(w)&&(h.clickAction=w.clickAction)
const g=ue(l.backgroundColor)?rk:ab
h.shelfBackground={type:nk,artwork:l,style:g},c.push(h),At(i.metricsLocationTracker)}const u=new XL(GI)
return u.title=n.title,u.items=c,u.isHorizontal=!0,u.background={type:lp},u}function qo(e,t,n,s,c){const a=new XL(fp)
a.isHorizontal=!1
const u=i(c)&&o(c.pageTitleEffect)&&0===c.shelves.length,l=i(t)?[t[0]]:[],f=[]
for(const t of l){if(r(t.attributes)||as(s)){s.isDeferring=!0,s.remainingItems.push(t)
continue}const a=ou(e,t)
if($r(0,t)&&!_(a)){s.isDeferring=!0,s.remainingItems.push(t),s.relationshipDataToFetch=eb
continue}const l={targetType:n?"heroBreakout":My,pageInformation:s.metricsPageInformation,locationTracker:s.metricsLocationTracker,recoMetricsData:U(t)},d=Rr(e,t),p=Or(e,t)
if(o(d.video)&&o(p.artwork))continue
const h=d.artworkData||p.artworkData,w=d.backgroundColor||p.backgroundColor,g=n?null:y(t,"breakoutBadge")
let m
const T=y(t,Eb)
m=Ne(e,t,kS)?e.loc.uppercased(ru(e,a,T)):T
let A={type:cb}
i(m)&&(A={type:dv,title:m})
const E=Za(e,t,_k)||ke(e,a,_k),P=Za(e,t,sb)||ke(e,a,CC),I=Cr(e,t,!0,0,!1),S=br(e,t,0,!1),O=new YL(E,P,A,null,I,kr(0,S,t)),R=new jL(O,{position:S||Gb},g,p.artwork,d.video,w),C=Vn(e,t,R.details.title,l),v=Ne(e,To(0,t),Lb)
C.isPreorder=v,Bn(0,R,C),pt(C,R.details.title)
const b=xr(e,t),k={pageInformation:s.metricsPageInformation,locationTracker:s.metricsLocationTracker,recoMetricsData:U(t),targetType:fk,id:t.id}
Rt(e,b,k),R.details.callToActionButtonAction=b,R.clickAction=b,wt(l.locationTracker),R.flowPreviewActionsConfiguration=oi(e,t,!0,s.clientIdentifierOverride,b,l,k),f.push(R),u&&(c.pageTitleEffect=us(0,h))}return a.items=f,a.url=ns(a,s),At(s.metricsLocationTracker),a}function Wo(e,t,n){if(P(t,"hide"))return null
const s=[],c=new XL(Cv)
c.isHorizontal=!1
const a=ce(t,zv),u=i(a),l=A(t,FO)
let f=[]
u?f=a:i(l)&&(f=l)
for(let t=0;t<f.length;t++){const i=f[t]
if(r(i))continue
const c={targetType:vb,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker}
u&&(c.recoMetricsData=U(i))
let a=null
if(n.isSearchGrouping){const r=is(e,i,n.metricsLocationTracker)
Bn(0,r.action,{...c,kind:vb,softwareType:null,title:r.action.title,id:`${t}`,idType:Mb}),a=r}else{const t=ss(e,i,n,!1,null,c,null)
if(o(t)||o(t.action.title))continue
a=t.action
const r=cs(0,i)
r&&Bn(0,a,{...c,kind:vb,softwareType:null,title:a.title,id:r})}o(a)||(s.push(a),At(n.metricsLocationTracker))}return c.items=s,c.title=n.title,c.subtitle=n.subtitle,c.presentationHints={isWidthConstrained:!0},c.url=ns(c,n),o(c.items)?null:c}function Yo(e,t,n,c,a,u=30718){let l=[]
const f=new XL(n.shelfStyle)
if(f.isHorizontal=!0,i(t)){const o=function(e,t,n,o,i){const c=function(e,t){if(r(e))return null
const n=Fn(t),o=e.tasks[n]
return r(o)?null:(delete e.tasks[n],o)}(t,o)
if(r(c))return null
const a=c.data,u=jo(e,a,i)
return s(u)?i.includedAdAdamIds=[a.id]:function(e,t,n){var r
const o=Nn(0,n)
xn(t,new rF(o,_f)),null===(r=null==t?void 0:t.iAdInfo)||void 0===r||r.setMissedOpportunity(dI)}(0,n,a),u}(e,c,a,uF,n)
o&&(l.push(o),At(n.metricsLocationTracker),n.ordinalIndex++,t=t.filter(e=>e.id!==o.adamId))}for(const o of t){if(o.type===Tk)return null
if(r(o.attributes)||as(n)){n.isDeferring=!0,n.remainingItems.push(o)
continue}if(Ue(e,o,u))continue
const t=jo(e,o,n)
t&&(l.push(t),At(n.metricsLocationTracker),n.ordinalIndex++)}let d
if(nr(n.featuredContentId)&&(l=function(e,t){if(!e)return null
const n=e.length,r=n%3
return n>=3?e.slice(0,n-r):e}(l)),delete n.maxItemCount,f.eyebrow=n.eyebrow,f.eyebrowArtwork=n.eyebrowArtwork,f.title=n.title,f.titleArtwork=n.titleArtwork,f.subtitle=n.subtitle,f.items=l,f.shouldFilterApps=n.shouldFilter,f&&o(f.items)&&n.isFirstRender&&rr(e.featureFlags,n)&&or(f,n,e.client.deviceType),nr(n.featuredContentId))d=new wD(qI)
else if(d=new wD(ak),!function(e){return e.contentType===jy}(f)){const e=function(e,t){if(!t)return null
switch(t){case vO:case Wy:return t
default:return null}}(0,n.shelfStyle)
d.pageData=Xr(0,n.title,e)}d.pageUrl=n.seeAllUrl,d.title=e.loc.string(ov),d.referrerUrl=n.metricsPageInformation.pageUrl,Ct(e,d,n.seeAllUrl,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker})
const p=function(e,t,n){return!function(e){switch(e){case 530:case 531:case 532:case 533:return!0
default:return!1}}(n.featuredContentId)&&497!==n.featuredContentId}(0,0,n),h=s(d.pageUrl)||s(d.pageData)
if(p&&h&&(f.seeAllAction=d),f.url=ns(f,n),f.url=function(e,t,n){if(o(t))return null
if(tr(n.featuredContentId)&&i(n.onDeviceRecommendationsUseCase)){const e=new sN(t)
return e.param(b$.isOnDeviceRecommendationsShelf,$v),e.param(b$.onDeviceRecommendationsUseCase,n.onDeviceRecommendationsUseCase),e.build()}return t}(0,f.url,n),n.shelfStyle===DO||n.shelfStyle===kO){const e=y(n.featuredContentData,"suppressTagline")!==$v
r(f.presentationHints)?f.presentationHints={showSupplementaryText:e}:f.presentationHints={...f.presentationHints,showSupplementaryText:e}}return n.shelfStyle,f}function jo(e,t,n){if(o(t))return null
let c
n.showOrdinals&&(c=e.loc.decimal(n.ordinalIndex))
let a,f=null
!s(n.shelfBackground)||n.shelfBackground.type!==Sv&&n.shelfBackground.type!==lp||(f=Ub),i(n)&&(a=n.clientIdentifierOverride)
const d={ordinal:c,metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:U(t),isAdvert:to(0,t)},clientIdentifierOverride:a,artworkUseCase:wa(0,n.shelfStyle),offerStyle:f,canDisplayArcadeOfferButton:nu(0,n.shelfStyle),shouldHideArcadeHeader:e.featureFlags.isEnabled($O)&&u(n.isArcadePage),isContainedInPreorderExclusiveShelf:497===n.featuredContentId}
let p
return p=n.shelfStyle===kO?function(e,t,n,r){return Ll.Do("trailersLockupFromData",()=>{const o=new IL
return function(e,t,n,r,o){t&&Ll.Do("copyDataIntoTrailersLockup",()=>{Hc(e,t,n,o),n.trailers=Ea(e,t,r,o.metricsOptions,n.adamId)})}(e,t,o,r,n),o})}(e,t,d,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}}):n.shelfStyle===DO?ea(e,t,d):n.shelfStyle===DS?function(e,t,n){return Ll.Do("posterLockupFromData",()=>{const o=new e$
return function(e,t,n,o){t&&Ll.Do("copyDataIntoPosterLockup",()=>{Hc(e,t,n,o),n.epicHeading=function(e,t){const n=ve(e,t,"editorialArtwork.epicHeading")
return s(n)&&s("bb")?ga(e,n,{cropCode:"bb",useCase:0}):null}(e,t),n.posterArtwork=function(e,t){const n=ve(e,t,"editorialArtwork.postCard")
return s(n)?ga(e,n,{cropCode:"sr",useCase:0,withJoeColorPlaceholder:!0}):null}(e,t),n.posterVideo=function(e,t,n){const o=ve(e,t,[Zb,yd]),i=ga(e,ve(e,t,[Zb,yd,TR]),{useCase:18,withJoeColorPlaceholder:!0,cropCode:"sr"})
if(s(o)){const e=l(o,bv)
return r(e)?null:new eD(e,i,{allowsAutoPlay:!0,looping:!0,canPlayFullScreen:!1,showPlaybackControls:!1,playbackControls:{prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1},autoPlayPlaybackControls:{prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1}})}return null}(e,t),n.offerDisplayProperties&&(n.offerDisplayProperties=n.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,Ub,"lightOverArtwork")),n.posterVideo?n.isDark=ue(n.posterVideo.preview.backgroundColor):n.posterArtwork?n.isDark=ue(n.posterArtwork.backgroundColor):n.isDark=!1
const i=Ne(e,t,eI),c=Ne(e,t,Lb)
i&&c&&(n.footerText=e.loc.uppercased(ru(e,t,e.loc.string(nE))))})}(e,t,o,n),o})}(e,t,d):Xc(e,t,d),r(p)||!p.isValid()?null:p}function zo(e,t,n){n.isFirstRender=!1,n.isDeferring=!1,n.remainingItems=[]
const r={shelves:[],metricsPageInformation:null,metricsLocationTracker:null,groupingData:null,pageGenreAdamId:null,pageGenreId:null,hasAuthenticatedUser:!1,refreshController:{timeToLive:null,nextPreferredContentRefreshDate:null,refreshWhileVisibleForNextPreferredContentRefreshDate:!1}}
let o=new XL(Tb)
const s=n.featuredContentId
switch(s){case 415:case 416:case 417:case 501:case 258:o=Bo(e,t.data,n,r)
break
case 425:{const r=ie(n.featuredContentData,zv)
r&&(o=Uo(e,os(t.data,ce(r,zv)),n))
break}case 421:case 422:case 423:case 261:o=Mo(e,os(t.data,ce(n.featuredContentData,zv)),n)
break
case 437:case 265:o=Wo(e,n.featuredContentData,n)
break
case 475:{const r={metricsLocationTracker:n.metricsLocationTracker,metricsPageInformation:n.metricsPageInformation}
o=n.shelfStyle===GI?Ho(e,t.data,n,r):Vo(e,t.data,n.shelfStyle,n,r)
break}case 480:switch(y(n.featuredContentData,fb)){case MO:o=Ko(e,t.data,n)
break
case zP:o=qo(e,t.data,!0,n,r)
break
case GR:o=qo(e,t.data,!1,n,r)}break
case 519:case 518:o=fr(e,t.data,!1,n,!0,r,null)
break
default:if(er(s)){o=Yo(e,t.data,n)
break}}return n.remainingItems.length&&n.remainingItems.map(e=>e.id),o&&(o.mergeWhenFetched=function(e,t){return t.shelfStyle,!t.showingPlaceholders}(0,n),o.networkTimingMetrics=t[$l.timingValues],o.nextPreferredContentRefreshDate=ar(r.refreshController)),i(n.originalPlaceholderShelfImpressionMetrics)&&(o.impressionMetrics=n.originalPlaceholderShelfImpressionMetrics),n.hasExistingContent||0!==o.items.length||(o.isHidden=!0),n.isSearchGrouping&&Xo(0,o,n),o}function Jo(e,t,n,r){const o=mt(n.metricsLocationTracker)
o&&o.fcKind===n.featuredContentId&&wt(n.metricsLocationTracker)
const s={id:n.id,kind:null,softwareType:null,targetType:zb,title:n.title,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,idType:GC,fcKind:n.featuredContentId,recoMetricsData:r,displayStyle:n.shelfStyle}
pt(s,n.title)
const i=zo(e,t,n)
return wt(n.metricsLocationTracker),Bn(0,i,s),i}function Ko(e,t,n){const o=new XL(dp)
o.isHorizontal=!1
const s=[]
for(const o of t){if(r(o.attributes)||as(n)){n.isDeferring=!0,n.remainingItems.push(o)
continue}const t=ou(e,o)
if($r(0,o)&&!_(t)){n.isDeferring=!0,n.remainingItems.push(o),n.relationshipDataToFetch=eb
continue}const c={targetType:dp,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:U(o)}
let a
const u=y(o,Eb)
a=Ne(e,o,kS)?e.loc.uppercased(ru(e,t,u)):u
let f={type:cb}
i(a)&&(f={type:dv,title:a})
const d=Za(e,o,_k)||ke(e,t,_k),p=Za(e,o,sb)||ke(e,t,CC),h=Aa(e,t,{useCase:5,withJoeColorPlaceholder:!0}),w=ae(l(te(t,$e(e,o),nk),pp))||h.backgroundColor,g=new YL(d,p,f,null,vr(0,w),null),m=new zL(g,h,w),T=Vn(e,o,m.details.title,c),A=Ne(e,To(0,o),Lb)
T.isPreorder=A,Bn(0,m,T),pt(T,m.details.title)
const E=xr(e,o),P={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,recoMetricsData:U(o),targetType:fk,id:o.id}
Rt(e,E,P),m.details.callToActionButtonAction=E,m.clickAction=E,wt(c.locationTracker),m.flowPreviewActionsConfiguration=oi(e,o,!0,n.clientIdentifierOverride,E,c,P),s.push(m)}return o.items=s,o.url=ns(o,n),At(n.metricsLocationTracker),o}function Zo(e,t,n=!0){const r=new TD(t),o=e.loc.string(hp),s=new mL(o)
s.clickAction=r,s.presentationStyle=[Vy,Hy],n&&s.presentationStyle.push(qy)
const i=new XL("footnote")
if(i.items=[s],e.bag.emailSupportLinkURL){const t=new TD(e.bag.emailSupportLinkURL),r=new mL("Email Support")
r.clickAction=t,r.presentationStyle=[Vy,Hy],n&&r.presentationStyle.push(qy),i.items.push(r)}return i}function Xo(e,t,n){t.seeAllAction=null,t.isHorizontal=!1,t.shouldFilterApps&&(t.filteredItemsMinimumCount=0,t.filteringExcludedItems=n.includedAdAdamIds)}function Qo(e,t,n,r){if(418===t||495===t||tr(t)){let e=y(r,fb)
return e||(e=311===t||312===t?GR:495===t?wp:MO),`${e}Lockup`}if(431===t)return Wy
if(429===t)return DO
if(304===t||305===t||430===t||420===t)return kO
if(nr(t))return Jb
if(497===t)return DS
switch(n.shelves.length%3){case 0:return Jb
case 1:return Tb
default:return ES}}function es(e,t,n){const r=ga(e,t,n)
return r&&(r.crop="sr"),r}function ts(e,t,n,r,o){const s=T(t,nk)
if(s instanceof Array){const t=function(e,t,n,r){const o=n/r
let s=0,i=null
for(const e of t){const t=f(e,DI),r=t/f(e,NI);(r===o||Math.abs(o-r)<=Math.abs(o-s))&&(!i||t<=n&&t>i.width||i.width>n&&t<i.width&&t>i.width)&&(i=e,s=r)}return i?We(e,l(i,Ek),f(i,DI),f(i,NI),null,l(i,gy)):null}(e,s,n,r)
return t.crop="bb",t}return null!=s?es(e,s,o):null}function ns(e,t){r(t.shelfStyle)&&(t.shelfStyle=e.contentType)
const n=e.contentType!==jy&&i(e.items)
return t.hasExistingContent=t.hasExistingContent||n&&t.isFirstRender,(t.remainingItems.length||t.recommendationsHref||t.onDeviceRecommendationsUseCase)&&t.isFirstRender?rs(t):null}function rs(e){return`${R$.internal}:/${C$.grouping}/${C$.shelf}/`+encodeURIComponent(JSON.stringify(e))}function os(e,t){const n={}
for(const t of e)n[t.id]=t
const r=[ck,UO],o=[]
for(const e of t){let t=!0
for(const o of r){const r=ce(e,o)
if(s(r)){const s=[]
for(const e of r){const t=n[e.id]
i(t)&&s.push(t)}s.length===r.length?e.relationships[o]={data:s}:t=!1}}t&&o.push(e)}return o}function ss(e,t,n,c,a,u,f,d){const p=i(l(t,Ek)),h=i(y(t,ip)),w=oe(t,ck,!1)
if(h||p)return function(e,t,n,o,i){const c=s(l(t,Ek))?t:T(t,vb)
if(r(c)||as(n))return a=t,i?i():n.remainingItems.push(a),null
var a
const u=l(c,yI),f=l(c,Ek),d=l(c,Eb),p=ls(y(t,By))||d
let h=null
if(u===ty)h=new TD(f),h.title=p
else{const t=e.required(RF).fetchFlowPage(f),n=new wD(t)
n.pageUrl=f,n.title=p,h=n}return h.presentationStyle=[CA],Rt(e,h,{...o,id:""}),{action:h,caption:null,title:p,subtitle:null,artwork:null,shortEditorialDescription:null}}(e,t,n,u,d)
if(w){let p,h
if(c){h=Kn(e,"groupingCommon",ce(t,ck),!0,a,!1,1)
const n=h.personalizedData
if(0===n.length)return null
p=n[0]}else p=ie(t,ck)
if(r(p))return null
if(r(p.attributes)||as(n))return n.isDeferring=!0,function(e){d?d():n.remainingItems.push(e)}(p),null
let w=Ka(e,p,CC)||Yc(e,p)
const g=_t(e,t,u)
g.targetType=u.targetType
let m=ca(e,p,g,n.clientIdentifierOverride)
const A=P(p,IO)
let E,I=null,_=null,S=null
const O=y(p,"itunesNotes.short"),R={...u,id:t.id}
switch(p.type){case Mv:I=T(p,nk)
break
case Kb:{const c=ie(p,Ib)
if(i(c)){const n={...u,id:t.id,inAppEventId:c.id,recoMetricsData:U(p)},r=ie(c,sk)
s(r)&&(n.relatedSubjectIds=[r.id])
const i=on(e,c,null,!1,!0,rk,Ub,!0,!1,n,!1,!0)
if(s(i)){if(i instanceof Date)return ir(i,f.refreshController),null
E=i,A||(m=E.clickAction),o(w)&&(w=Ka(e,c,sb))}}_=y(p,Eb),_&&(_=_.replace(/\n/g," "))
const a=ie(p,ck),d=l(p,"editorialNotes.tagline")
o(w)&&(d?w=d:a&&(w=Ka(e,a,sb))),o(w)&&s(E)&&(w=E.subtitle)
let h=y(p,up)
i(h)||(h=w)
const g={useThreeLineOverlayForBranded:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0}
if(r(E)&&kt(0,p)&&(g.crossLinkSubtitle=h),s(E))S=E.lockup
else{const t=null,r=null
{pt(R,n.title)
const o=Zs(e,p,g,{pageInformation:u.pageInformation,locationTracker:u.locationTracker},!0,t,r)
1===o.length&&(S=o[0]),wt(R.locationTracker)}}}default:{const t=[Pk,wv,lk,Kv]
if(r(S)&&t.indexOf(p.type)>-1){pt(R,n.title)
const t={metricsOptions:{pageInformation:u.pageInformation,locationTracker:u.locationTracker,recoMetricsData:U(p)},clientIdentifierOverride:n.clientIdentifierOverride,artworkUseCase:wa(0,n.shelfStyle),canDisplayArcadeOfferButton:!0,shouldHideArcadeHeader:e.featureFlags.isEnabled($O)&&n.isArcadePage}
S=Xc(e,p,t),wt(R.locationTracker)}I=ve(e,p,Qb)||T(p,Qb),o(w)&&s(S)&&(w=S.subtitle)
break}}if(s(m)){m.presentationStyle=[CA]
const n=ls(y(t,By)),r=Ka(e,p,_k)
m.title=n||r||m.title||w||_}return{action:m,caption:_,title:null==m?void 0:m.title,subtitle:w,artwork:I,shortEditorialDescription:O,content:p,lockup:S,appEvent:E,onDevicePersonalizationDataProcessingType:null==h?void 0:h.processingType}}return null}function is(e,t,n){const r=l(t,Eb)
if(o(r))return null
const s=new zN(r,r,null,zy)
return bt(e,s,fk,n),At(n),new GD(s)}function cs(e,t){let n=y(t,rb)
return n||(n=y(t,"contentId")),n||(n=y(t,"id")),n}function as(e){return e.isDeferring&&e.isFirstRender}function us(e,t,n=!1){if(o(t))return null
let r=null
const s=le(Ub),i=le(YI),c=ae(l(t,kI)),u=a(t,gp).map(e=>ae(e)),f=vr(0,c)
if(2===u.length){r=new zk("horizontalGradient")
const e=u[0],t=u[1]
r.gradientStartColor=fe(e,e),r.gradientEndColor=fe(t,t),r.filter="plusLight",n||(r.accessoryColor=r.gradientEndColor)}else r=new zk(Sv),r.color=f===rk?s:i,n||(r.accessoryColor=r.color),r.isFallbackStyle=!0
return r}function ls(e){if(r(e))return null
const t=e.replace(/&amp;/g,"&").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#96;/g,"`").replace(/\r\n/g," ").replace(/&nbsp;/g," ").replace(/<span>/g,"").replace(/<\/span>/g,"").replace(/<br>/g," ").replace(/\u23ce/g,"").replace(/<i>/g,"").replace(/<\/i>/g,"").replace(/<b>/g,"").replace(/<\/b>/g,"")
return t.match(/^\s*$/)?null:t}function fs(e){return i(e.remainingItems)}function ds(e){return!fs(e)&&i(e.recommendationsHref)}function ps(e,t,n){const r=n[Cb],o=JSON.parse(r),s=fs(o),c=ds(o)
if(s){let t=o.remainingItems
i(o.relationshipDataToFetch)&&(t=o.remainingItems.map(e=>ie(e,o.relationshipDataToFetch)))
const n=new B$(e,t)
return _e(e,n,t),hs(e,n),n}if(c){const t=new B$(e,o.recommendationsHref)
return hs(e,t),Qt(e)&&(t.enablingFeature(Xb),t.includingMetaKeys(II,[mR,_I]),t.includingScopedAttributes(Tk,[dk,Zv,Xv]),t.includingScopedRelationships(Tk,[sk])),t}return null}function hs(e,t){t.includingAdditionalPlatforms(K(e)).includingRelationshipsForUpsell(!0).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes(we(e))
let n=[Qb,Zb,Vb];(t.includesResourceType(Pk)||t.includesResourceType(Tk))&&(n=[Qb,Vb,QC,UC,ev]),t.includingAttributes(n),t.includesResourceType(Tk)&&(t.includingMetaKeys(II,[mR,_I]),t.includingScopedAttributes(Tk,[dk,Zv,Xv]),t.includingScopedRelationships(Tk,[sk]))}function ws(e,t,n){const r=n[Cb],s=JSON.parse(r),c=fs(s),a=ds(s)
let u=null
if(c){let n=t
if(i(s.relationshipDataToFetch)){const e={}
for(const n of t.data)e[n.id]=n
n={data:[]}
for(const t of s.remainingItems){const r=ie(t,s.relationshipDataToFetch)
i(r)&&(t.relationships[s.relationshipDataToFetch].data=[e[r.id]]),n.data.push(t)}}u=zo(e,n,s)}return a&&(u=function(e,t,n){const r=$(t)
return o(n.title)&&(n.title=y(r,_k)),Jo(e,se(r,ck),n,xo(0,r))}(e,t,s)),u&&!s.hasExistingContent&&0===u.items.length&&(u.isHidden=!0),u}function gs(e,t){if(t<=0)return!1
if(t>=1)return!0
const n=e.user.dsid
if(!i(n))return!1
const r=100*t,o=n.slice(-2)
return parseInt(o)<r}function ms(e,t){const n={internalContentType:Rk,shelf:t}
e.push(n)}function Ts(e,t){const n={internalContentType:"contentPool",contentPool:new eM(t)}
e.push(n)}function As(e,t,n){if(o(e))return null
const r=e.shift()
if(r.internalContentType===Rk)return{contentType:Rk,shelf:r.shelf}
const s=r.contentPool,i=s.numberOfItemsProcessed,c=i>0
let a
a=t===Eg&&s.isFullyHydrated?function(e){const t={label:e.label,title:e.title,meta:e.meta,date:e.date,contents:e.remainingContents,onDevicePersonalizationProcessingType:e.onDevicePersonalizationProcessingType}
return e.numberOfItemsProcessed=e.remainingContents.length,e.remainingContents=[],t}(s):function(e,t){const n=e.remainingContents.length,r=e.remainingContents.slice(0,t),o=e.remainingContents.slice(t,n),s={label:e.label,title:e.title,meta:e.meta,date:e.date,contents:r,onDevicePersonalizationProcessingType:e.onDevicePersonalizationProcessingType}
return e.numberOfItemsProcessed+=r.length,e.remainingContents=o,s}(s,n)
const u=o(s.remainingContents),l={todayModule:a,isContinuationModule:c,isLastOfModule:u,contentOffsetWithinSourceModule:i}
return u||e.unshift(r),{contentType:cO,moduleSlice:l}}function ys(e,t,n,r){const o=As(t,EP,n)
if(o.contentType!==cO)return Promise.reject(new Error("dequeueHydratedModuleSlice: TodayContentQueue dequeued unexpected contentType."))
const s=o.moduleSlice
return Ps(e,s).then(n=>{const o=n.todayModule.contents.length
let s=Math.ceil(o/r)*r
0===s&&(s=r)
const i=s-o
return!n.isLastOfModule&&i>0?Es(e,t,i).then(e=>Is(0,n,e)):n})}function Es(e,t,n){if(0===n)return Promise.reject(new Error("hydrateContentsUntilCountOrEndOfModule: Hydrating module slice of size 0."))
const r=As(t,EP,n)
if(r.contentType!==cO)return Promise.reject(new Error("hydrateContentsUntilCountOrEndOfModule: TodayContentQueue dequeued unexpected contentType."))
const o=r.moduleSlice
if(o.isLastOfModule)return Ps(e,o)
const s=o.todayModule.contents.length
return Ps(e,o).then(n=>{const r=n.todayModule.contents.length,o=s-r
return o>0?Es(e,t,o).then(e=>Is(0,n,e)):n})}function Ps(e,t){const n=[],r=[]
for(const e of t.todayModule.contents)F(e)?n.push(e):r.push(e)
if(0===r.length)return Promise.resolve(t)
const o=new B$(e,r).includingAdditionalPlatforms(K(e)).includingAttributes(oM).includingRelationshipsForUpsell(!0).usingCustomAttributes(we(e))
return _e(e,o,r),Qt(e)&&(o.enablingFeature(Xb),o.addingQuery(nC,mR),o.includingScopedRelationships(Tk,[sk]),o.includingScopedAttributes(Tk,[dk,Zv,Xv]),o.includingScopedRelationships(Kb,[eb])),b(e,o).then(e=>{const r=x(e),o=n.concat(r)
return t.todayModule.contents=o,t}).catch(()=>(t.todayModule.contents=[],t))}function Is(e,t,n){const r=t.todayModule,o=n.todayModule
return{todayModule:{label:r.label,title:r.title,meta:r.meta,contents:r.contents.concat(o.contents),onDevicePersonalizationProcessingType:r.onDevicePersonalizationProcessingType},isContinuationModule:t.isContinuationModule,isLastOfModule:n.isLastOfModule,contentOffsetWithinSourceModule:t.contentOffsetWithinSourceModule}}function _s(e,t,n){let r=!1,o=[],s=[]
for(let i=e.length-1;i>=0;i--){const c=e[i]
F(c)?1===t[c.id]?(n&&0===o.length&&o.unshift(...s),s=[],o.unshift(c),r=!0):(s.unshift(c),t[c.id]-=1):s.unshift(c)}return n&&0===o.length&&(o=s),{contents:o,contentsContainsHydratedData:r}}function Ss(e,t){if(!Zn(e))return null
const n=new Set
for(const e of t)if(!r(e.contents))for(const t of e.contents){const e=l(t,EO)
i(e)&&n.add(e.toString())}return Xn(e,n)}function Os(e,t,n,o=null,c,a){const u=e.loc.string(Pg),l=new qx(t,o,c||u,u,a)
if(s(n)&&i(n.queue)&&(l.nextPage=n),l.pageRefreshPolicy=cr(e,null==n?void 0:n.context.refreshController),l.widgetKind=null,l.dateRelevance=null,gs(e,e.bag.widgetSuggestionsFromTodayTabRolloutRate)){const t=new Date,n=l.shelves.filter(e=>e.contentType===_R).map(e=>e.items).reduce((e,t)=>e.concat(t),[]).filter(e=>e.media instanceof Dx).map(n=>{const o=n.media.startDate
if(r(o))return null
const s=new Date(o)
s.setHours(s.getHours()-1)
const i=new Date(t)
if(i.setHours(i.getHours()-1),s<i)return null
if(c=t,V(s).getTime()!==V(c).getTime())return null
var c
const a=function(e,t,n){return Math.max(0,Math.min(60,e))}(e.bag.todayWidgetSmartStackJitterMinutes),u=Math.floor(Math.random()*a*60)
return s.setTime(s.getTime()+1e3*u),{startDate:s,endDate:o}}).filter(e=>null!==e)
n.length>0&&(l.widgetKind=Ig,l.dateRelevance=n)}return l}function Rs(e,t,n,i=!1){if(function(e){if(o(e))return!0
const t=e[0]
return t.internalContentType!==Rk&&t.contentPool.isCompletelyUnhydrated}(t))return null
const c=As(t,Eg,6)
if(r(c))return null
let a,u=null
if(c.contentType===Rk&&(u=c.shelf,a=!0),c.contentType===cO){const t=c.moduleSlice,r={contentOffsetWithinModule:t.contentOffsetWithinSourceModule,hideTitle:t.isContinuationModule,setTitleToDateForTodaySection:i}
u=Cs(e,t.todayModule,r,n),a=t.isLastOfModule}return s(u)&&a&&At(n.locationTracker),u}function Cs(e,t,c,u,f=!1){const d=U(t),p=ot(d,t.onDevicePersonalizationProcessingType,null),h={id:null,kind:null,softwareType:null,targetType:zb,title:t.title,pageInformation:u.pageInformation,locationTracker:u.locationTracker,idType:GC,recoMetricsData:p}
u.currentShelfRecoMetricsData=d
const w=new XL(_R)
w.isHorizontal=!1,Bn(0,w,h),pt(h,t.title),Tt(h.locationTracker,c.contentOffsetWithinModule)
const g={useThreeLineOverlayForBranded:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0}
g.useThreeLineOverlayForBranded=!function(e){const t=PP,r=n(e,xO)
return e.label===t||s(r)}(t)||f
const m=[],T=a(t.contents)
let A=0
for(const t of T){if(!F(t))break
const n=$s(e,t,g,u)
r(n)||(n instanceof Date?ir(n,u.refreshController):(m.push(n),At(u.locationTracker))),A++}const y=T.slice(A)
t.contents=y,w.items=m
const E=l(t,xO)
if(t.label===PP&&c.setTitleToDateForTodaySection){const t=new Date
w.title=e.loc.formatDate("EEEE, MMMM d",t)}else if(i(E)){const t=B(E)
w.title=e.loc.formatDate("EEEE",t),w.subtitle=e.loc.formatDate("MMMM d",t)}else w.title=t.title
if(c.hideTitle&&(w.title=void 0),wt(u.locationTracker),i(t.contents)){const e=c.contentOffsetWithinModule+A+0,n=new iM(t,e,u.pageInformation,u.locationTracker)
w.url=r((P=n).todayModule)||o(P.todayModule.contents)?null:`${R$.internal}:/${C$.today}/${C$.shelf}/`+encodeURIComponent(JSON.stringify(P))}var P
return w}function vs(e,t,n){switch(n){case VC:return uM.has(t)
case Yy:return cM.has(t)
case WI:return aM.has(t)
default:return!1}}function bs(e,t,n,o,i,c){const a={pageInformation:o.metricsPageInformation,locationTracker:o.metricsLocationTracker,hasRiverCard:!1}
null==c&&(c={useThreeLineOverlayForBranded:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0}),c.prevailingCropCode=function(e,t){switch(t){case VC:return"fo"
case Yy:return"el"
case WI:return"ek"
default:return null}}(0,n),e.client.deviceType!==Ok&&(c.coercedGeneralCardSubType=Av)
const u=[]
for(const l of t){if(!s(l.attributes)){i&&i(l)
continue}const t=$s(e,l,c,a,o.augmentingData)
if(r(t)||t instanceof Date)continue
const f=t
{f.collapsedHeading=Ds(0,f),f.inlineDescription=Ns(e,f,l),f.inlineDescription===f.collapsedHeading&&(f.inlineDescription=null)
const t=f.media
t&&t.kind===pv&&(f.title=null)}if(n===WI){const e=f.heroMedia
if(!s(e)||!s(e.art)&&!s(e.video))continue}if(vs(0,f.media.kind,n)){if(s(o.filterOutMediaCardKinds)&&o.filterOutMediaCardKinds.has(f.media.kind))continue
u.push(f)}Qs(e,f,l)}return u}function ks(e,t,n,r,o,i,c){if(!s(n))return null
const a=new XL(n)
return r&&(a.title=r),a.subtitle=o,a.isHorizontal=!0,a.items=n===tC?[Ls(e,t,i.metricsPageInformation,i.metricsLocationTracker,()=>!0,c)]:bs(e,t,n,i,c),a}function Ds(e,t){return s(t.heading)?t.heading.replace(/\n/g," "):t.collapsedHeading}function Ns(e,t,n){if(t.media.kind===pv)return t.overlay instanceof $x&&s(t.overlay.lockup)?t.overlay.lockup.title:null
{const t=Za(e,n,_k)
return s(t)?t.replace(/\n/g," "):null}}function Ls(e,t,n,o,i,c){return Ll.Do("todayCardsFromPlatformData",()=>{if(!t)return null
const a={useThreeLineOverlayForBranded:!1,enableFullScreenVideo:!1,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0}
a.coercedGeneralCardSubType=Av,a.prevailingCropCode="fo"
const u={pageInformation:n,locationTracker:o,hasRiverCard:!1},l=[]
for(const n of t){if(!s(n.attributes)){c&&c(n)
continue}const t=$s(e,n,a,u)
if(r(t)||t instanceof Date)continue
const o=t
if(i(o)){o.collapsedHeading=Ds(0,o),o.inlineDescription=Ns(e,o,n),o.inlineDescription===o.collapsedHeading&&(o.inlineDescription=null)
const t=o.media
t&&t.kind===pv&&(o.title=null),l.push(o)}}return l.length?new Hx(l):null})}function $s(e,t,n,c,a){return Ll.x9("todayCardFromData",()=>{const u=y(t,fb),f=so(0,t)
!function(e,t,n,r){const o=Ks(0,t)
let s=y(t,cv)
if(s&&r.coercedGeneralCardSubType&&(s=r.coercedGeneralCardSubType),y(t,fb)!==dC)return!1
if(o.length>=6&&s===Av)return!1
const i=y(t,fv),c=Fs(0,dC,i)
return!(!P(t,_g)&&Ws(e,T(t,c),r.prevailingCropCode)||Ms(0,o))}(e,t,0,n)?n.clientIdentifierOverride=null:n.clientIdentifierOverride=f,n.crossLinkSubtitle=zs(e,t)
let p=null
switch(u){case $C:p=function(e,t,n,c){return Ll.Do("brandedCard",()=>{const a=Hs(e,t,c,n),u=n.useThreeLineOverlayForBranded
Vs(0,t,a,c)
try{const l=Fs(0,$C),f=T(t,l),d=Ws(e,f,n.prevailingCropCode),p=Ys(0,t,l)
d?a.style=js(0,f):(a.backgroundColor=tM,a.style=rk)
const h=y(t,fb),w=Js(0,a.style,h),g=Zs(e,t,n,c,!0,w,vg)
if(!g||1!==g.length)return null
const m=g[0]
switch(y(t,cv)){case sO:case oO:{let n=!0,c=null
if(s(d)&&(n=!1,c=d.backgroundColor),u){const n=Gs(t)
let i=Za(e,t,_k)
o(i)&&(i=m.title)
let c=Za(e,t,sb)
if(o(c)){const n=ce(t,Ib)
if(0!==n.length){const t=n[0]
c=Za(e,t,CC)}r(c)&&!r(m.subtitle)&&(c=m.subtitle)}a.overlay=new Ux(n,i,c),a.style=Ub,a.title=null,s(d)&&e.client.deviceType!==Ok&&(d.crop="fo")}else{const r=Za(e,t,sb)
let o=null
i(r)&&(o=new Wk(r,jv,Cg)),a.overlay=new $x(m,o,n,c)}break}default:{const e=new Lx(m)
e.displaysIcon=!1,a.overlay=e
break}}return u||(a.title=y(t,Eb)),a.media=new Sx(m.icon,d,p),a.media.impressionMetrics=m.impressionMetrics,a}finally{wt(c.locationTracker)}})}(e,t,n,c)
break
case dC:p=function(e,t,n,o){return Ll.Do("contentCard",()=>{const i=Hs(e,t,o,n)
Vs(0,t,i,o)
try{const c=Ks(0,t),a=Ms(0,c)
if(a){const t=Qc(e,a,{offerStyle:iv,metricsOptions:{pageInformation:o.pageInformation,locationTracker:o.locationTracker},artworkUseCase:1})
return t?(t.theme=_b,i.media=new Cx(t),i.media.impressionMetrics=t.impressionMetrics,i.media.impressionMetrics.fields[rE]=i.impressionMetrics.fields.id,i.style=Ub,o.lastContentCardSubStyle=null,i):null}{const a=y(t,fv)
if(a===G_)return o.lastContentCardSubStyle=null,function(e,t,n,o,i){var c,a,u,f
if(!Qt(e))return null
let d
const p=ce(t,eb)
if(p.length>0)d=p[0]
else{const e=ce(t,Ib)
if(0===e.length)return null
d=e[0]}const h=y(t,fv),w=T(t,Fs(0,dC,h)),g=Ws(e,w,o.prevailingCropCode)
if(r(g))return null
const m=null!==(c=ae(l(w,pp)))&&void 0!==c?c:le(YI),A=ue(m,80),E=ue(null!==(a=ae(l(w,kI)))&&void 0!==a?a:le(YI))?rk:ab,P={pageInformation:i.pageInformation,locationTracker:i.locationTracker,targetType:IC},I=on(e,d,null,!1,!1,A?rk:ab,A?Ub:vg,!0,!0,P,!0,!0,y(t,Eb))
if(r(I)||I instanceof Date)return ir(I,i.refreshController),null
const _=I,S=null!==(u=Za(e,t,_k))&&void 0!==u?u:_.title,O=null!==(f=Za(e,t,sb))&&void 0!==f?f:_.subtitle
return n.heading=_.kind,n.title=S,n.media=new Dx(_.formattedDates,_.startDate,g,m,O,E),s(_.lockup)&&(n.overlay=new Gx(_.lockup)),n.style=A?rk:ab,n}(e,t,i,n,o)
const u=Fs(0,dC,a),f=Bs(e,t,i,u,n.prevailingCropCode)
if(f){const r=y(t,fb),s=Js(0,f.style,r),c=Zs(e,t,n,o,!0,s)
return Us(e,t,f,c,n),null!==i.overlay&&i.overlay instanceof Fx&&(i.overlay.style=Ub),o.lastContentCardSubStyle=null,i}if(1===c.length){const r=Zs(e,t,n,o,!0)
if(1!==r.length)return null
const s=r[0]
return i.media=new _x(s.icon),Us(e,t,i,r,n),null!==i.overlay&&i.overlay instanceof Lx&&(i.overlay.displaysIcon=!1),o.lastContentCardSubStyle=null,i}{const r=c.filter(t=>{const n=Ya(e,t)
return!qa(e,t)||!n})
let s,a,u=y(t,cv)
if(u&&n.coercedGeneralCardSubType&&(u=n.coercedGeneralCardSubType),u||(u=n.coercedGeneralCardSubType),"tv"===e.client.deviceType?(s=3,a=2):(s=4,a=5),u===U_&&o.hasRiverCard&&eu(e,dh)&&(u=o.lastRiverCardOverrideSubStyle===Av?RR:Av,u===o.lastContentCardSubStyle&&(u=u===Av?RR:Av),o.lastRiverCardOverrideSubStyle=u,i.clickAction instanceof wD)){const e=new sN(i.clickAction.pageUrl)
e.param(b$.todayCardSubStyleOverride,u),i.clickAction.pageUrl=e.build()}switch(o.lastContentCardSubStyle=u,u){case RR:case QI:{const r=Zs(e,t,n,o,!1)
if(r.length<s&&n.enableListCardToMultiAppFallback)return qs(e,t,r,i),i
if(u===QI){let e=1
for(const t of r)t.ordinal=`${e}`,e++}return i.style=Ub,i.media=new Ox(r,null),i}case U_:{n.canDisplayArcadeOfferButton=!1
const s=Xs(e,r,n,o,!0)
return 0===s.length?null:s.length<a?(qs(e,t,s,i),i):(i.style=Ub,i.media=new vx(s),o.hasRiverCard=!0,i)}case Av:{n.canDisplayArcadeOfferButton=!1
const s=Xs(e,r,n,o,!0)
if(0===s.length)return null
if(s.length<=a)return qs(e,t,s,i),i
const c=s.length%2!=0
let u
s.length<=9&&c&&"tv"!==e.client.deviceType&&s.pop(),i.style=Ub
const l=s.length
return u=l<=13?GR:l<=25?cg:MO,i.media=new bx(s,u),i}default:return null}}}}finally{wt(o.locationTracker)}})}(e,t,n,c)
break
case B_:p=function(e,t,n,r){return Ll.Do("mediaCard",()=>{const o=Hs(e,t,r,n)
Vs(0,t,o,r)
try{switch(y(t,fv)){case IP:return function(e,t,n,r,o){const s=function(e,t){let n
const r=T(t,"editorialVideo.storeFrontVideo4x3"),o=T(t,"editorialVideo.storeFrontVideo")
return n=e.client.isPad||e.client.screenSize.isEqualTo(GU)&&!e.props.enabled("todayCardVideoFix")?r||o:o||r,n}(e,t)
if(!s)return null
const c=ga(e,d(s,TR),{withJoeColorPlaceholder:!0,useCase:15})
if(!c)return null
const a=l(s,bv)
if(!a)return null
let u={prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0}
i(r.videoPlaybackControls)&&(u=r.videoPlaybackControls)
let f={prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}
i(r.videoPlaybackControls)&&(f=r.videoAutoplayPlaybackControls)
const p=Ka(e,t,sb),h=new eD(a,c,{playbackControls:u,autoPlayPlaybackControls:f,canPlayFullScreen:r.enableFullScreenVideo})
return po(e,h,{pageInformation:o.pageInformation,locationTracker:o.locationTracker,id:t.id}),n.style=Ub,n.media=new kx(h,p),n.overlay=new Ux(n.heading,n.title,p),n.title=null,n.collapsedHeading=Ds(0,n),n.heading=null,n}(e,t,o,n,r)
case"FullBleedImage":const s=Fs(0,B_),c=Bs(e,t,o,s,n.prevailingCropCode)
return Us(e,t,c,[],n),c
default:return null}}finally{wt(r.locationTracker)}})}(e,t,n,c)
break
default:p=null}if(r(p))return null
u!==dC&&(c.lastContentCardSubStyle=null),p.inlineDescription=Ka(e,t,sb),P(t,yP)&&(p=function(e,t,n,r,o){let s=wn(e,n)
!s&&r&&(s=gn(0,r.arcadeUpsellEditorialResponse))
const i=function(e,t,n){if(!function(e){const t=e.host.platform
return t===gC||t===_v}(e))return null
const r=oa(e,t,n,0,_b,ab)
return new Bx(r)}(e,s,o)
return i&&(t.overlay=i,t.impressionMetrics.fields[th]=!0),t}(e,p,t,a,c))
const h=new Px,w=xs(e,t,n.heroDisplayContext,0,n.prevailingCropCode)
return s(w)&&(h.art=w),s(p.media)&&p.media instanceof kx&&(h.video=p.media.video),r(p)?null:p})}function xs(e,t,n,r,o){return Ws(e,T(t,gf),function(e,t,n){return n}(0,0,o))}function Fs(e,t,n){switch(t){case $C:return Sg
case dC:return n===G_?Og:Rg
case B_:return Gy
default:return null}}function Ms(e,t){if(1===t.length){const e=t[0]
if(e.type===Kv)return e}return null}function Us(e,t,n,r,o){if(!n)return
const c=Ka(e,t,sb),a=P(t,"ignoreITunesShortNotes"),u=r&&0!==r.length,l=u&&1===r.length,f=i(kt(0,t)),d=l&&f,p=s(n.media)&&n.media.kind===sR&&(l||u)&&o.isSearchContext
if(!c||a||d||p){if(l)n.overlay=new Lx(r[0])
else if(u){const e=new xx(r)
e.displaysTitle=!1,n.overlay=e}}else n.overlay=new Fx(new Wk(c,jv,Cg))}function Bs(e,t,n,r,o){return Ll.Do("cardWithArtwork",()=>{if(P(t,_g))return null
const s=T(t,r),i=Ws(e,s,o)
return i?(n.media=new Ix(i,Ys(0,t,r)),n.style=js(0,s),n.clickAction instanceof TD&&(n.overlay=new Mx(n.clickAction),n.style=Ub),n):null})}function Gs(e){const t=y(e,cv)
let n=y(e,dP)
return r(n)&&t===sO?n=nM:r(n)&&t===oO&&(n=rM),n}function Vs(e,t,n,r){pt({pageInformation:r.pageInformation,locationTracker:r.locationTracker,targetType:_R,idType:qR,id:t.id},n.title)}function Hs(e,t,n,o){return Ll.Do("basicCard",()=>{var i
const c=new Vx,a=y(t,Eb),l=y(t,fb),f=y(t,cv),d=y(t,fv)
c.heading=a
let p=Ka(e,t,_k)
r(p)&&l===$C&&(p=y(t,Eb)),c.title=p
const h=u(t,QF),w={cardType:l,franchise:a}
s(f)&&(w[rh]=f),h&&(w[oh]=h)
const g=null!==(i=null==o?void 0:o.isAdEligible)&&void 0!==i&&i,m=Vn(e,t,p,{targetType:_R,pageInformation:n.pageInformation,locationTracker:n.locationTracker,isAdEligible:g}),T=m
if(T[bR]=w,d===G_){const e=ce(t,eb)
let n
if(e.length>0)n=e[0]
else{const e=ce(t,Ib)
e.length>0&&(n=e[0])}if(s(n)){T.inAppEventId=n.id
const e=ie(n,sk)
s(e)&&(T.relatedSubjectIds=[e.id])}}let A
return s(o)&&(A=o.clientIdentifierOverride),c.clickAction=la(e,t,T,A,n.currentShelfRecoMetricsData),function(e,t,n,r,o,s,i,c=!0){var a
if(!t)return
const u=Un(0,n)
if(c?(u[nh]=Ze(r),u[uE]=Ze(o)):(r&&(u[nh]=r),o&&(u[uE]=o)),i&&(u[rh]=Ze(i)),s&&(u[oh]=s),t.impressionMetrics=new cD(u),(n.isAdvert||n.isAdEligible)&&(null===(a=n.pageInformation)||void 0===a?void 0:a.iAdInfo)){const e=Qe(n.pageInformation.iAdInfo.fastImpressionsFieldsForCurrentItem(n.locationTracker))
Object.assign(t.impressionMetrics.fields,e),t.impressionMetrics=new aD(t.impressionMetrics,!0)}}(0,c,m,a,l,h,f),c})}function qs(e,t,n,r){const o=Ka(e,t,sb)
if(r.media=new Rx(n,o),r.clickAction instanceof wD){const e=sN.from(r.clickAction.pageUrl)
e.param(b$.showingFallbackMedia,$v),r.clickAction.pageUrl=e.build()}}function Ws(e,t,n){if(t){const r=ga(e,t,{withJoeColorPlaceholder:!0,useCase:15})
return r.crop=n||"sr",r}return null}function Ys(e,t,n){const r=T(t,n)
return s(r)?l(r,"bgGradientKind"):null}function js(e,t){if(o(t))return null
const n=ae(l(t,kI)),r=a(t,gp).map(e=>ae(e)),s=2===r.length
return n||s?s?ue(r[0])?ab:rk:ue(n)?rk:ab:null}function zs(e,t){let n=Za(e,t,sb)
return i(n)||(n=Ka(e,t,_k)),i(n)||y(t,fb)===$C&&(n=y(t,Eb)),n}function Js(e,t,n){return n!==$C?null:t===rk?rk:null}function Ks(e,t){return ce(t,Ib)}function Zs(e,t,n,r,o,s,i){return Xs(e,ce(t,Ib),n,r,o,s,i,kt(0,t))}function Xs(e,t,n,r,s,c,a,u){return o(t)?[]:ia(e,t.filter(e=>!i(e.attributes)||e.type!==Kv),{lockupOptions:{metricsOptions:{pageInformation:r.pageInformation,locationTracker:r.locationTracker},offerEnvironment:c,offerStyle:a,clientIdentifierOverride:n.clientIdentifierOverride,externalDeepLinkUrl:u,crossLinkSubtitle:n.crossLinkSubtitle,artworkUseCase:1,canDisplayArcadeOfferButton:n.canDisplayArcadeOfferButton},shouldIgnoreLocationIncrement:s,filter:22398})}function Qs(e,t,n){if("tv"!==e.client.deviceType||!P(n,yP))return
const r=new TD("com.apple.Arcade://")
t.clickAction=r}function ei(e,t,n){const r=y(t,n)
if(o(r))return null
const i=new sN(r)
let c=null
switch(e.host.clientIdentifier){case RN:c=yb
break
case ON:c=Ok}c&&i.param(x$.clientSpecifier,c)
const a=Te(ge(e,t))
return s(a)&&i.param(b$.productVariantID,a),i.toString()}function ti(e,t){if(o(t))return null
const n=new QD(t)
return n.title=e.loc.string("SHARE_SHEET_COPY_LINK"),n.artwork=We(e,"systemimage://link"),new LD("com.apple.AppStore.copyLinkActivity",n)}function ni(e,t){return Ll.Do("shareSheetDataForProductFromProductData",()=>{if(r(t))return null
const n=ei(e,t,Ek),o=y(t,_k),i=y(t,Fv),c=t.id,a=e.client.storefrontIdentifier
if(!(n&&o&&i&&c))return null
const u=ei(e,t,"shortUrl")
let l=null,f=null
const d=gC,p=_a(e,t,4),h=Ia(e,t),w=ke(e,t,BR)||i
s(t)&&y(t,Ek)&&(l=Aa(e,t,{useCase:1}),f=function(e,t){return Ll.Do("notesMetadataFromProductData",()=>{if(r(t))return null
const n=y(t,_k)
if(!n||0===n.length)return null
const o=ei(e,t,Ek),s=y(t,Fv),i=y(t,"genreNames.0"),c=Ma(e,t)
let a
switch(t.type){case Pk:a=sk
break
case lk:a=vA
break
case Kv:a=lR
break
default:a=null}return new Mk(n,o,s,i,c,a)})}(e,t))
const g=new Gk(c,a,o,d,l,p,h,!1,w,null,null,f)
return new Vk(g,n,u)})}function ri(e,t,n,o){return Ll.Do(`shareActionFromData: ${t.type}`,()=>{const c=t.id
switch(e.client.deviceType){case Sk:{const r=ni(e,t)
if(r){const t=new $D(r,[])
return Rt(e,t,{targetType:fk,id:c,actionType:mO,pageInformation:n,locationTracker:o}),t}break}case mk:case uk:{const a=ni(e,t),u=[]
if(i(null==a?void 0:a.url)){const t=ti(e,a.url)
s&&u.push(t)}const l=function(e,t){if(!e.bag.isContentGiftingEnabled)return null
if(r(t))return null
const n=Ut(e,t)
return r(n)||E(t,Lb)?null:f(n,gO)>0?t.id:null}(e,t)
if(l){const t=new wD(lb)
t.presentationContext=df,t.title=e.loc.string("SHARE_GIFT_APP"),t.artwork=We(e,"systemimage://app.gift"),t.pageUrl=`gift/${l}`,Rt(e,t,{targetType:fk,id:c,actionType:tS,actionContext:pf,pageInformation:n,locationTracker:o})
const r=new LD("com.apple.AppStore.giftActivity",t)
u.push(r)}if(a){const t=new $D(a,u,ql)
return t.title=e.loc.string("SHARE_APP"),t.artwork=We(e,hf),Rt(e,t,{targetType:fk,id:c,actionType:mO,actionContext:pf,pageInformation:n,locationTracker:o}),t}if(u.length>0){const t=u.map(e=>e.action),r=new DD(t)
return r.isCancelable=!0,r.isCustom=!0,Rt(e,r,{targetType:fk,id:c,actionType:"actionSheet",pageInformation:n,locationTracker:o}),r}break}}return null})}function oi(e,t,n,o,c,a,u,l){return Ll.Do("flowPreviewActionsConfigurationForProductFromData",()=>{if(e.client.deviceType!==mk&&e.client.deviceType!==uk)return null
const f=si(e,t)
if(!i(f))return null
const d=[]
let p=null,h=null
const w=P(f,Lb)
if(n){const t=Ja(e,f),n=Gc(0,f.type,t),c=function(e,t,n,o,s,i,c){return r(t)||t.type!==Pk?null:Gt(e,Ut(e,t),t,n,!1,nt(0,t,Aa(e,t,null,i)),c,Gv)}(e,f,w,0,0,o,u)
h=Xt(e,c,n,f,w,null,null,null,null,Gv)
const a=function(e,t,n,o,s,c,a,u){if(r(n))return null
let l=Yt(e,n,t,o,c,Gv,!1,s)
return i(u)&&(l=Dt(e,l,n.adamId,null,u,!1,c)),l}(e,f,c,w,o,u,0,l)
s(a)&&s(h)&&(p=d.length,d.push(a))}const g=function(e,t,n){const r=ri(e,t,n.pageInformation,n.locationTracker)
return s(r)?(r.title=e.loc.string("FLOW_PREVIEW_ACTION_SHARE"),r.artwork=We(e,hf),r):r}(e,f,a)
s(g)&&d.push(g)
const m=ai(e,f)
if(!w&&!m){if(s(c)&&c instanceof wD&&(c.pageData instanceof o$||c.pageData instanceof T$)){const t=function(e,t,n){const r=function(e,t){return Ll.Do("seeRatingsAndReviewsActionFromData",()=>{const n=W(t)
if(t.pageData instanceof o$||t.pageData instanceof T$){const r=$c(e)?new JD(db):new FD(new n$(Rk,yk)),o=W(t.pageData)
o.fullProductFetchedAction=r,n.pageData=o}return n})}(e,n)
return s(r)&&(r.title=e.loc.string("FLOW_PREVIEW_ACTION_SEE_RATINGS_AND_REVIEWS"),r.artwork=We(e,"systemimage://star"),r.animationBehavior=gb),r}(e,0,c)
s(t)&&d.push(t)}if(!Oe(e,t,OC)){const t=function(e,t){const n=gi(e,t)
return s(n)&&(n.title=e.loc.string("FLOW_PREVIEW_ACTION_WRITE_REVIEW"),n.artwork=We(e,"systemimage://square.and.pencil")),n}(e,f)
s(t)&&d.push(t)}}return new Yk(d,h,p)})}function si(e,t){return Ll.Do(`productDataFromData: ${t.type}`,()=>{switch(t.type){case Pk:case lk:return t
case Kb:{const n=ce(t,Ib)
if(i(n)&&1===n.length){const t=n[0]
return si(e,t)}break}case UI:{const n=ce(t,ck)
if(i(n)&&1===n.length){const t=n[0]
return si(e,t)}break}default:return null}return null})}function ii(e,t,n,r){const o=e.bag.voteUrl,s=l(t,"id",xb),i=new sN(o).param(Ed,s),c=new RD(i.build()),a=new ND(yO)
return r?(c.title=e.loc.string("ACTION_REVIEW_HELPFUL"),a.title=e.loc.string("TOAST_HELPFUL_TITLE"),a.message=e.loc.string("TOAST_HELPFUL_DESCRIPTION"),c.artwork=We(e,Pd),a.artwork=We(e,Pd)):(c.title=e.loc.string("ACTION_REVIEW_NOT_HELPFUL"),a.title=e.loc.string("TOAST_NOT_HELPFUL_TITLE"),a.message=e.loc.string("TOAST_NOT_HELPFUL_DESCRIPTION"),c.artwork=We(e,Id),a.artwork=We(e,Id)),c.method=SC,c.isStoreRequest=!0,c.disableCache=!0,c.headers={"Content-Type":dx.contentType},c.body=(new dx).param("vote",r?"1":"0").param(_d,n).build(),c.successAction=a,c}function ci(e,t,n){return`${R$.internal}:/${C$.reviews}/${C$.shelf}/${t}/${n}`}function ai(e,t){return!(!s(t)||ui(e,t)||!P(t,yC)&&!P(t,"reviewsRestricted"))}function ui(e,t){return!(o(t)||!e.bag.enableSystemAppReviews)&&Me(e).isDeletableSystemAppFromData(t)}function li(e,t){const n=sN.from(e),r=l(n.query,dw)
return t&&i(r)&&(n.query[dw]=lM[r]||r),n}function fi(e,t,n,r,s=!1,c=!0){return Ll.Do("createReviewItems",()=>{const a=function(t,n){return n?1e3*((new Date).getTime()-t.getTime())<3600?e.loc.string("TIME_AGO_EDITED_JUST_NOW"):e.loc.string("TIME_AGO_EDITED_TIME").replace("{time}",e.loc.timeAgoWithContext(t,"standalone")):e.loc.timeAgoWithContext(t,"standalone")}
return r.map(r=>{const u=new ex
u.id=l(r,"id",xb),u.title=y(r,zR)
const f=y(r,xO)
f&&(u.date=new Date(f),u.dateText=a(u.date,P(r,"isEdited"))),u.contents=y(r,"review"),u.rating=I(r,uv),u.reviewerName=y(r,"userName")
const d=y(r,"developerResponse.id")
if(i(d)){const e=new tx
e.id=d,e.contents=y(r,"developerResponse.body")
const t=y(r,"developerResponse.modified")
t&&(e.date=new Date(t),e.dateText=a(e.date,!1)),u.response=e}return s&&(u.moreAction=function(e,t,n,r){return r?Ll.Do("singleReviewActionFromReviewData",()=>{const o=mi(e,t,n,[r]),s=new X$
s.adamId=l(n,rb),s.targetReviewId=l(r,"id",xb),s.shelves=[o]
const i=new wD(yk)
return i.pageData=s,i.title=_i(e),i}):null}(e,t,n,r)),c&&(l(n,rb),u.flowPreviewActionsConfiguration=function(e,t,n,r){if(o(t)||e.client.deviceType!==mk&&e.client.deviceType!==uk&&e.client.deviceType!==Sk)return null
const s=[ii(e,t,n,!0),ii(e,t,n,!1)]
return i(e.bag.reportConcernUrl)&&s.push(function(e,t,n){return Ll.Do("reportConcernActionFromApiRow",()=>{const r=l(t,"id",xb),s=e.bag.reportConcernUrl,i=new vD(s)
i.method=SC,i.isStoreRequest=!0,i.disableCache=!0,i.needsAuthentication=!0,i.headers={"Content-Type":dx.contentType},i.body=(new dx).param(Ed,r).param(_d,n).build()
const c=new CD("selectedReason",Sd,ky),a=new CD("explanation",Sd,dv)
i.parameters=[c,a]
const u=new ND(yO)
u.title=e.loc.string("TOAST_CONCERN_REPORTED_TITLE"),u.message=e.loc.string("TOAST_CONCERN_REPORTED_DESCRIPTION"),u.artwork=We(e,Od),i.successAction=u
let f=e.bag.reportConcernReasons
o(f)&&(f=[{reasonId:"1",name:"It contains offensive material",upperCaseName:"IT CONTAINS OFFENSIVE MATERIAL"},{reasonId:"8",name:"It's off-topic",upperCaseName:"IT\u2019S OFF-TOPIC"},{reasonId:"111003",name:"It looks like spam",upperCaseName:"IT LOOKS LIKE SPAM"},{reasonId:"7",name:"Something else",upperCaseName:"SOMETHING ELSE"}])
const d=f.map(e=>new Hk(l(e,"reasonId"),l(e,_k),l(e,"upperCaseName"))),p=new xD(d)
return p.title=e.loc.string("ACTION_REVIEW_REPORT"),p.explanation=e.bag.reportConcernExplanation,o(p.explanation)&&(p.explanation="Tell us a little more (Optional)"),p.artwork=We(e,Od),p.sendAction=i,p})}(e,t,n)),new Yk(s)}(e,r,t)),u})})}function di(e,t,n){return n?Ll.Do("ratingsFromApiResponses",()=>{const t=new Q$
t.productId=l(n,rb,xb),t.ratingAverage=f(n,"ratingAverage"),t.totalNumberOfRatings=f(n,hw),t.totalNumberOfReviews=f(n,"totalNumberOfReviews")
const r=a(n,"ratingCountList").slice().reverse(),o=r.reduce((e,t)=>e+t,0)
if(t.ratingCounts=o>0?r.map(e=>e/o*t.totalNumberOfRatings):r,!(t.ratingAverage>0&&t.ratingCounts)){const r=u(n,GE)
t.status=r?e.loc.string("RATINGS_STATUS_DEVELOPER_RESET"):e.loc.string("RATINGS_STATUS_NOT_ENOUGH_RATINGS")}return t}):null}function pi(e,t){t.ratingAverage=e.ratingAverage,t.ratingCounts=e.ratingCounts,t.totalNumberOfRatings=e.totalNumberOfRatings,t.totalNumberOfReviews=e.totalNumberOfReviews,t.status=e.status,t.reviews=e.reviews,t.actions=e.actions,t.nextPage=e.nextPage}function hi(e,t,n,r=null,o=null){const s=new nx
switch(e.client.deviceType){case"tv":s.title=e.loc.string("TV_SELECT_TO_RATE")
break
case Sk:s.title=e.loc.string("CLICK_TO_RATE")
break
default:s.title=e.loc.string("TAP_TO_RATE")}return s.rating=o,s.rateAction=function(e,t,n,r=null){const o=new ND(yO)
o.title=e.loc.string("TOAST_TAP_TO_RATE_TITLE"),o.message=e.loc.string("TOAST_TAP_TO_RATE_DESCRIPTION"),o.artwork=We(e,"resource://ToastStar.png",95,90)
const s=new bD(function(e,t,n){return li(e.bag.userRateURL,n).param("id",t).build()}(e,t,n))
s.adamId=t,s.method=SC,s.isStoreRequest=!0,s.disableCache=!0,s.successAction=o
const i=new CD(uv,pw,ky),c=new CD("version-to-review",pw,ky)
return s.parameters=[i,c],s}(e,t,n,r),s}function wi(e,t,n,r,o=!1){return Ll.Do("createWriteReviewAction",()=>{const s=o?e.loc.string("EDIT_REVIEW"):e.loc.string("WRITE_A_REVIEW"),i=function(e,t,n){return li(e.bag.writeReviewURL,n).param("id",t).build()}(e,t,n)
let c
switch(e.client.deviceType){case Sk:{const e=new kD(t,i)
e.title=s,e.appIcon=r,c=e
break}default:{const e=new wD("writeReview")
e.title=s,e.pageUrl=i,e.pageData=t,e.presentationContext=df,c=e
break}}return c})}function gi(e,t,n){return Ll.Do("writeReviewActionFromData",()=>{const r=t.id
if(i(r)){const o=t.type===lk,i=I(t,uv),c=s(i)&&i>0
return wi(e,r,o,n,c)}return null})}function mi(e,t,n,r,o=!1,s=!0){return Ll.Do("reviewsShelfForReviewsData",()=>{const i=new XL(yk)
return i.items=fi(e,t,n,r,o,s),i})}function Ti(e,t,n,o,i,c,a,f,d=!1,p=!0,h=null,w=!1){return Ll.Do("reviewsContainerShelfForReviewsData",()=>{const p=function(e,t,n,o,i,c,a,f=null,d=!1){return Ll.Do("reviewsContainerForReviewsData",()=>{const p=new ox,h=l(n,rb),w=u(n,"isBundle")
if(p.adamId=h,p.ratings=di(e,0,n),d||(p.tapToRate=hi(e,h,w,i,f)),s(o)&&o.length>0){const r=!1,s=!r,i=r?o.slice(0,1):o
p.reviews=fi(e,t,n,i,s,s)}if(r(p.reviews)||0===p.reviews.length){const t=p.ratings.ratingAverage>0&&p.ratings.ratingCounts,r=u(n,GE)
t||r||(p.ratings.status=e.loc.string(ww))}if(r(a)||(p.editorsChoice=a),!d){const t=s(f)&&f>0
p.writeReviewAction=wi(e,h,w,c,t)}const g=l(n,gw)
if(g){const t=new TD(g,!1)
t.title=e.loc.string(mw),p.supportAction=t}let m=!1
for(const t of o)if(ui(e,t)){m=!0
break}return p.alwaysAllowReviews=m,p})}(e,t,n,o,i,c,a,h,w),g=new XL(BE)
return g.title=_i(e),g.items=[p],d&&s(p.reviews)&&p.reviews.length>0&&(g.seeAllAction=Ii(e,t,n,o,f,i,c)),g})}function Ai(e,t,n,r){return Ll.Do("personalizedReviewsContainerShelf",()=>{const o=I($(r),uv)
return Ti(e,t,n.ratingsData,n.reviewItems,n.appName,n.appIcon,n.editorsChoice,n.nextPageHref,n.includeSeeAllAction,!1,o)})}function yi(e,t,n,r,o){const s=function(e,t,n){return`${R$.internal}:/${C$.reviews}/${t}/${n}`}(0,t,n)
return new Z$(n,r,o,s)}function Ei(e,t,n,o,s,c=null,a=null,u=null,f=null,d=fM){const p=new X$
return p.shelves=[],Ll.Do("reviewsPageForReviewsData",()=>{let h,w
if(i(c)&&i(o)&&o.length%2>0){const r=o.slice(0,o.length-1)
w=o.slice(o.length-1),h=mi(e,t,n,r,!1)}else h=mi(e,t,n,o,!1),w=[]
const g=r(a)?l(n,rb):a
if(s&&!r(n)){p.adamId=g
const r=Ti(e,t,n,[],u,f)
p.shelves.push(r)}return h.items.length>0&&(s&&(h.presentationHints={isSortable:!0},r(n)||(p.initialSortOptionIdentifier=d,p.sortActionSheetTitle=e.loc.string("REVIEWS_SORT_BY"),p.sortOptions=[yi(0,g,fw,e.loc.string("REVIEWS_MOST_HELPFUL"),e.loc.string("REVIEWS_SORT_BY_MOST_HELPFUL")),yi(0,g,"favorable",e.loc.string("REVIEWS_MOST_FAVORABLE"),e.loc.string("REVIEWS_SORT_BY_MOST_FAVORABLE")),yi(0,g,"critical",e.loc.string("REVIEWS_MOST_CRITICAL"),e.loc.string("REVIEWS_SORT_BY_MOST_CRITICAL")),yi(0,g,"recent",e.loc.string("REVIEWS_MOST_RECENT"),e.loc.string("REVIEWS_SORT_BY_MOST_RECENT"))])),p.shelves.push(h),i(c)&&(p.nextPage=function(e,t,n,r,o){return{url:ci(0,t,r),remainingContent:o,nextHref:n,profile:Wb,maxPerPage:fx,highestOrdinal:0,metricsPageInformation:null,metricsLocationTracker:null}}(0,g,c,d,w))),p})}function Pi(e,t,n,r,o,s,c){return Ll.Do("reviewsPageForReviewsMediaContainer",()=>{let a
return a=i(o.data)?r.concat(o.data):r,Ei(e,t,null,a,s,o.next,n,null,null,c)})}function Ii(e,t,n,r,o=null,s=null,i=null){return n?Ll.Do("reviewsPageActionFromReviewsData",()=>{const c=Ei(e,t,n,r,!0,o,null,s,i)
c.title=null
const a=new wD(yk)
return a.pageData=c,a.title=e.loc.string(ov),a}):null}function _i(e){switch(e.client.deviceType){case"tv":return e.loc.string("TV_PRODUCT_SECTION_RATINGS")
case Ok:return null
default:return e.loc.string(VE)}}function Si(e,t){return t.map(t=>t.createProductPageSection(e))}function Oi(e,t,n,r,o,s,i){const c=function(e,t,n){switch(t){case LO:return n?bl:vl
case ZE:return kl
case gC:return n?Ol:Vl
case _v:return n?Cl:Rl
default:return Vl}}(0,n,r)
let a=[]
a=t?o&&c.purchasedOrderingCompact?c.purchasedOrderingCompact.slice():c.purchasedOrdering.slice():s&&c.downloadingOrdering?o&&c.downloadingOrderingCompact?c.downloadingOrderingCompact.slice():c.downloadingOrdering.slice():o&&c.notPurchasedOrderingCompact?c.notPurchasedOrderingCompact.slice():c.notPurchasedOrdering.slice()
const u=t?c.purchasedSpotlightIndex:c.notPurchasedSpotlightIndex
if(i&&i.spotlightSection){const e=function(e,t){for(let n=0;n<t.length;n++){const r=t[n]
if(e.sectionType===r.sectionType&&e.shelfId===r.shelfId&&JSON.stringify(e.shelfBasedMappedIds)===JSON.stringify(r.shelfBasedMappedIds))return n}return-1}(i.spotlightSection,a);-1!==e&&(a.splice(e,1),a.splice(u,0,i.spotlightSection))}return a}function Ri(e){return new dM(Rk,e?Iv:Pv)}function Ci(e){return i(e)&&i(e.id)&&e.id.indexOf(JM)>-1}function vi(e,t,n,r){return Ll.Do("createProductPageFromShelfBasedProductPage",()=>{var o,c,a,u
const l=new o$
return l.adamId=t.lockup.adamId,l.bundleId=t.lockup.bundleId,l.icon=t.lockup.icon,l.isEditorsChoice=t.lockup.isEditorsChoice,l.ordinal=t.lockup.ordinal,l.title=t.lockup.title,l.subtitle=t.lockup.subtitle,l.developerTagline=t.lockup.developerTagline,l.editorialTagline=t.lockup.editorialTagline,l.editorialDescription=t.lockup.editorialDescription,l.shortEditorialDescription=t.lockup.shortEditorialDescription,l.rating=t.lockup.rating,l.ratingCount=t.lockup.ratingCount,l.ageRating=t.lockup.ageRating,l.buttonAction=t.lockup.buttonAction,l.offerDisplayProperties=t.lockup.offerDisplayProperties,l.titleOfferDisplayProperties=t.titleOfferDisplayProperties,l.clickAction=t.lockup.clickAction,l.children=t.lockup.children,l.contextMenuData=t.lockup.contextMenuData,l.shelfBackground=t.lockup.shelfBackground,l.searchAd=t.lockup.searchAd,l.crossLinkTitle=t.lockup.crossLinkTitle,l.crossLinkSubtitle=t.lockup.crossLinkSubtitle,l.tertiaryTitle=t.lockup.tertiaryTitle,l.tertiaryTitleAction=t.lockup.tertiaryTitleAction,l.flowPreviewActionsConfiguration=t.lockup.flowPreviewActionsConfiguration,l.productDescription=t.lockup.productDescription,l.itemBackground=t.lockup.itemBackground,l.developerAction=t.developerAction,l.logoArtwork=t.logoArtwork,l.uberArtwork=null===(o=t.uber)||void 0===o?void 0:o.artwork,l.uberArtworkForCompactDisplay=null===(c=t.uber)||void 0===c?void 0:c.compactArtwork,l.uberVideo=null===(a=t.uber)||void 0===a?void 0:a.video,l.uberStyle=null===(u=t.uber)||void 0===u?void 0:u.style,l.media=function(e){const t=[]
for(const n of Object.values(e.shelfMapping))if(Ci(n)){const e=n.contentsMetadata,r=n.items
t.push(new hL(r,e.platform,e.allPlatforms))}return t}(t),s(t.shelfMapping[qb])&&(l.badges=Mc(e,t.shelfMapping[qb])),l.shareAction=t.shareAction,l.pageMetrics=t.pageMetrics,l.pageRenderMetrics=t.pageRenderMetrics,l.isComplete=!t.isIncomplete,l.hasDarkUserInterfaceStyle=t.hasDarkUserInterfaceStyle,l.mediaSectionTitle=e.loc.string(uw),l.expandedOfferDetails=t.expandedOfferDetails,l.regularPriceFormatted=t.regularPriceFormatted,l.theme=t.theme,l.externalVersionIdentifier=t.externalVersionIdentifier,l.updateBuyParams=t.updateBuyParams,l.appPlatforms=t.appPlatforms,l.descriptionHeader=t.descriptionHeader,l.description=t.description,l.banner=t.banner,l.secondaryBanner=t.secondaryBanner,l.fullProductFetchedAction=t.fullProductFetchedAction,l.appEventDetailPageFlowAction=t.appEventDetailPageFlowAction,l.pageRefreshPolicy=t.pageRefreshPolicy,l.purchasedOrdering=Si(e,Oi(0,!0,e.host.platform,n,!1,!1,r)),l.notPurchasedOrdering=Si(e,Oi(0,!1,e.host.platform,n,!1,!1,r)),l.shelfMapping=function(e,t){const n={}
for(const r of K$){let o
o=r===yk?bi(e,t):t.shelfMapping[r],i(o)&&(n[r]=o)}return n}(e,t),l.alwaysAllowReviews=t.alwaysAllowReviews,l})}function bi(e,t){const n=t.shelfMapping[db],r=t.shelfMapping[aC],s=t.shelfMapping[jC],c=t.shelfMapping[uC],a=t.shelfMapping[lC]
if(o(n)&&o(r)&&o(s)&&o(c)&&o(a))return null
let u=null,l=[],f=null,d=null,p=null,h=null,w=null
if(i(null==r?void 0:r.items))for(const e of r.items){const t=e
switch(t.sourceType){case LR:u=t.review
break
case lw:l.push(t.review)}}else l=null
if(i(null==s?void 0:s.items)&&(u=s.items[0].review),i(null==c?void 0:c.items)&&(d=c.items[0].action),i(null==a?void 0:a.items)){const e=a.items[0].action
p=e.writeReviewAction,h=e.supportAction}i(null==n?void 0:n.items)&&(f=n.items[0],w=null==n?void 0:n.seeAllAction)
const g=new ox
g.adamId=t.lockup.adamId,g.ratings=f,g.tapToRate=d,g.editorsChoice=u,g.reviews=l,g.supportAction=h,g.writeReviewAction=p,g.alwaysAllowReviews=t.alwaysAllowReviews
const m=new XL(BE)
return m.title=_i(e),m.items=[g],m.seeAllAction=w,m}function ki(e,t,n,r,o,c,u){const l=a(t,Bb),f=[]
for(const t of l){const a=g(t)
if(i(a)){const t=Di(e,a,n,r,o,c,u)
s(t)&&f.push(t)}}if(0===f.length){const t=function(e,t,n,r,o){const s=LE,i=e.loc.string("PRODUCT_PRIVACY_NO_DETAILS_PROVIDED_TITLE"),c=e.loc.string("PRODUCT_PRIVACY_NO_DETAILS_PROVIDED_BODY"),a=We(e,ew),u=Ni(e,t,s,n,r,o)
return new eU(s,i,c,a,n,[],[],u)}(e,n,r,c,u)
f.push(t)}for(const e of f)Bn(0,e,{id:e.identifier,kind:null,softwareType:null,title:e.title,pageInformation:c,locationTracker:u,targetType:ME}),At(u)
return f}function Di(e,t,n,r,c,u,f){const d=l(t,UE),p=l(t,S_),h=l(t,dk)
if(o(d)||o(p)||o(h))return null
const w=Fi(e,t,function(e,t){switch(t){case"DATA_NOT_LINKED_TO_YOU":return"resource://person.circle.slash"
case"DATA_USED_TO_TRACK_YOU":return"systemimage://person.fill.viewfinder"
case"DATA_NOT_COLLECTED":return"systemimage://checkmark.circle"
case"DATA_LINKED_TO_YOU":return nw
default:return null}}(0,d)),m=c?Li(e,t,r):[],T=function(e,t,n){const r=a(t,"purposes"),o=[]
for(const t of r){const r=g(t)
if(i(r)){const t=xi(e,r,n)
s(t)&&o.push(t)}}return o}(e,t,r),A=Ni(e,n,d,r,u,f)
return new eU(d,p,h,w,r,T,m,A)}function Ni(e,t,n,r,o,s){let i
return r!==Yv&&r!==zS||(i=Hi(e,t,Mi(e)&&r===Yv?zS:YC,o,s,n)),i}function Li(e,t,n){const r=a(t,"dataCategories"),o=[]
for(const t of r){const r=g(t)
if(i(r)){const t=$i(e,r,n===Yv?Yv:YC)
s(t)&&o.push(t)}}return o}function $i(e,t,n){const s=l(t,UE),i=l(t,"dataCategory")
if(o(s)||o(i))return null
const c=Fi(e,t,function(e,t){switch(t){case"FINANCIAL_INFO":return"systemimage://creditcard.fill"
case"CONTACT_INFO":return"systemimage://info.circle.fill"
case"OTHER":return"systemimage://ellipsis.circle.fill"
case"SENSITIVE_INFO":return"systemimage://eye.fill"
case tw:return"systemimage://chart.bar.fill"
case"CONTACTS":return nw
case"PURCHASES":return"systemimage://bag.fill"
case"LOCATION":return"systemimage://location.fill"
case"HEALTH_AND_FITNESS":return"systemimage://heart.circle.fill"
case"IDENTIFIERS":return"resource://person.crop.rectangle.line.fill"
case"USER_CONTENT":return"systemimage://photo.fill.on.rectangle.fill"
case"BROWSING_HISTORY":return"systemimage://clock.fill"
case"DIAGNOSTICS":return"systemimage://gearshape.fill"
case"SEARCH_HISTORY":return"systemimage://magnifyingglass.circle.fill"
default:return null}}(0,s))
if(r(c))return null
let u=[]
n===YC&&(u=a(t,"dataTypes"))
const f=new nU(s,i,c,n,u)
return s===tw&&(f.prefersSmallArtwork=!0),f}function xi(e,t,n){const r=l(t,UE),s=l(t,"purpose"),i=Li(e,t,n)
return o(r)||o(s)||0===i.length?null:new tU(r,s,i)}function Fi(e,t,n){let o
if(i(n)&&(o=We(e,n)),r(o)){const n=d(t,nk)
s(n)&&(o=ga(e,n,{useCase:0,allowingTransparency:!0}))}return o}function Mi(e){return!(e.client.deviceType!==Ok||!e.props.enabled("watchAppPrivacyCrashWorkaround")&&eu(e,"8.1"))}function Ui(e,t,n,c,a,u){return Ll.Do("createPrivacyHeaderFromData",()=>{const f=function(e,t,n,r,c,a){let u,f=BC
const d=ie(t,Bv),p=i(d)&&rU.indexOf(d.id)>-1
u=n&&!p?e.loc.string("PRODUCT_PRIVACY_DETAIL_HEADER_TEMPLATE"):e.loc.string("PRODUCT_PRIVACY_HEADER_TEMPLATE")
const h=Vi(e,t,r,YC,c,a),w=1===h.length&&h[0].identifier===LE||0===h.length
w&&(u=e.loc.string("PRODUCT_PRIVACY_HEADER_NO_DETAILS_TEMPLATE"))
const g=y(t,Fv)
s(g)?u=u.replace(Kh,"<b>"+g+"</b>"):(u=w?e.loc.string("PRODUCT_PRIVACY_FALLBACK_HEADER_NO_DETAILS_TEMPLATE"):n?e.loc.string("PRODUCT_PRIVACY_FALLBACK_DETAIL_HEADER_TEMPLATE"):e.loc.string("PRODUCT_PRIVACY_FALLBACK_HEADER_TEMPLATE"),f=jv)
const m=e.loc.string("PRODUCT_PRIVACY_SUMMARY_PRIVACY_POLICY_LINK")
u=u.replace("{privacyPolicyLink}",m)
const A=function(e,t,n,r){let s
{const n=ke(e,t,dS)
if(o(n))return null
s=new TD(n,!1)}return s.title=e.loc.string("PRODUCT_PRIVACY_SUMMARY_PRIVACY_POLICY_BUTTON_TITLE"),Rt(e,s,{targetType:vb,id:Xh,pageInformation:n,locationTracker:r}),s}(e,t,c,a),E={}
if(s(A)&&(E[m]=A),n){const n=function(e,t,n,r){const s=l(T(t,__),"managePrivacyChoicesUrl")
if(o(s))return null
const i=new TD(s,!1)
return Rt(e,i,{targetType:vb,id:"managePrivacyChoices",pageInformation:n,locationTracker:r}),i}(e,t,c,a)
if(s(n)){const t=e.loc.string("PRODUCT_PRIVACY_MANAGE_CHOICES_LINK")
u+=Zh,u+=e.loc.string("PRODUCT_PRIVACY_MANAGE_CHOICES_TEMPLATE").replace("{manageChoicesLink}",t),n.title=t,E[t]=n}}const P=new qk(u,f)
return new NL(P,E)}(e,t,n,c,a,u),d=function(e,t,n,o,s){if(!n)return null
const i=e.loc.string(Qh),c=e.loc.string("PRODUCT_PRIVACY_DEFINITIONS_LINK_TEMPLATE").replace("{privacyDefinitionsLink}",i),a=Gi(e,o,s)
if(r(a))return null
a.title=i
const u={}
u[i]=a
const l=new qk(c,jv)
return new NL(l,u)}(e,0,n,a,u)
let p,h
n&&(p=function(e,t,n,o,s){if(!n)return null
const i=e.loc.string($E),c=Bi(e,o,s)
let a
const u={}
r(c)?a=e.loc.string(xE):(a=e.loc.string(Jh).replace(NO,i),c.title=i,u[i]=c)
const l=new qk(a,jv)
return new NL(l,u)}(e,0,n,a,u),i(p)&&(h=Bi(e,a,u)))
const w=[]
if(s(d)){const e=new XM(d,void 0)
w.push(e)}if(s(p)){const e=new XM(p,h)
w.push(e)}return new ZM(f,n,[],[],w,void 0)})}function Bi(e,t,n){const r=e.bag.appPrivacyLearnMoreEditorialItemId
if(o(r))return null
const s=new wD(bb)
return s.title=e.loc.string($E),s.pageUrl=`https://apps.apple.com/story/id${r}`,Rt(e,s,{targetType:fk,id:"privacyLearnMore",pageInformation:t,locationTracker:n}),s}function Gi(e,t,n){const r=e.bag.appPrivacyDefinitionsEditorialItemId
if(o(r))return null
const s=new wD(bb)
return s.title=e.loc.string(Qh),s.pageUrl=`https://apps.apple.com/story/id${r}`,Rt(e,s,{targetType:fk,id:YS,pageInformation:t,locationTracker:n}),s}function Vi(e,t,n,r,o,s){let c=[]
const a=T(t,n?__:SO)
return i(a)&&(c=ki(e,a,t,r,e.client.deviceType!==Ok||r===zS,o,s),1===c.length&&0===c[0].categories.length&&(c[0].style=Yv)),c}function Hi(e,t,n,o,c,a){if(r(t.id))return null
const u=new wD(FE)
u.title=e.loc.string("ACTION_SEE_DETAILS"),u.pageData=function(e,t,n,r,o){const s=[]
if(e.client.deviceType!==Ok||n!==YC){const n=new XL(jb),i=Ui(e,t,!0,!1,r,o)
n.items=[i],s.push(n)}const i=new uD(s)
return e.client.deviceType===Ok&&n!==YC||(i.isIncomplete=!0),i.title=e.loc.string(jS),i}(e,t,n,o,c)
const l=t.type===lk?C$.productBundle:C$.product
let f
i(a)&&(f={privacyTypeId:a})
const d=sN.fromComponents(R$.internal,null,`/${C$.privacyDetail}/${l}/${t.id}`,f)
u.pageUrl=d.build()
const p={targetType:fk,id:"seeDetails",pageInformation:o,locationTracker:c}
return s(a)&&(p.targetType=ME,p.id=a),Rt(e,u,p),u}function qi(e,t){if(!i(t))return null
const n=ga(e,t,{useCase:12})
return o(n)?null:(n.crop="sr",n)}function Wi(e,t,n,r){let o=0
for(const s of t){const t=n[s.key]
if(t){let n=null
if($c(e))n=new JD(t.shelfId,t.index,!0)
else{const e=new FD(t.section,!0)
e.index=t.index,n=e}s.clickAction=n}let i
switch(s.key){case v_:case LR:case uv:case JS:case I_:case KS:case hR:i="select"
break
default:i=Qv}s.clickAction&&Rt(e,s.clickAction,{targetType:Xf,id:s.key,idType:Mb,actionType:i,actionDetails:{position:o},pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker}),o+=1}}function Yi(e,t,n,r,s,i){if(r)return null
const c=Kc(e,t)
if(o(c))return null
const a=new cL(c),u=s?"":e.loc.string("INFO_LIST_CATEGORY_TITLE")
return new iL(u,[a])}function ji(e,t,n,c,a,u){const l=T(t,ay)
let f=[],p=function(e,t){let n=null
if(pa(e,t)){const r=va(0,t,e.appleSilicon.isSupportEnabled),o=Ca(e,t),s=$a(e,t,e.appleSilicon.isSupportEnabled,e.appleSilicon.isRosettaAvailable),i=function(e,t,n,r,o=!0){return!!ka(0,n,r).some(e=>Da(0,t,e))}(0,o,e.client.deviceType,r,s),c=e.loc.deviceDisplayName(e)
i&&c&&(n=e.loc.string("INFO_LIST_REQUIREMENTS_SUMMARY").replace("{deviceName}",c))}return n}(e,t)
const h=Ne(e,t,wd,xe(e))
if(i(l)){const t=function(e){const t=[Hv,ib,CO,Sk,OC,Ok],n=function(e,t,n){let r=null
switch(t){case mk:r=Hv
break
case uk:r=ib
break
case Sk:r=Sk
break
case"tv":r=OC
break
case Ok:r=Ok}return s(n)&&n===CO&&(r=CO),r}(0,e.client.deviceType,e.host.deviceModel)
if(s(n)){const e=t.indexOf(n)
e>0&&(t.splice(e,1),t.unshift(n))}return t}(e)
for(const n of t){const t=d(l,n)
if(i(t)){const r=zi(0,t,e.appleSilicon.isSupportEnabled&&n===Sk&&h&&!e.appleSilicon.isRosettaAvailable)
s(r)&&f.push(r)}}!s(p)&&f.length>0&&(p=f[0].text)}else{const n=function(e,t){const n=ke(e,t,"requirementsString")
return r(n)?null:new cL(n)}(e,t)
s(n)&&(f=[n])}if(o(f))return null
const w=a?"":e.loc.string("REQUIREMENTS")
return new iL(w,f,p)}function zi(e,t,n){const r=l(t,"deviceFamily")
let s=l(t,"requirementString")
const c=a(t,"devices")
if(n){const e=l(t,"rosettaUnavailableRequirementString")
i(e)&&(s=e)}if(o(s))return null
const u=[]
for(const e of c)u.push("\u2022\t\u2068"+e+"\u2069")
const f=u.length>0?u.join("\n"):null
return new cL(s,r,null,f)}function Ji(e,t,n,r,o,c){const u=T(t,"contentRatingsBySystem.appsApple")
if(u){const n=l(u,_k)
if(n){const r=a(u,"advisories")
let c=null
const d=te(t,$e(e,t),"ageBand"),p=f(d,"minAge"),h=f(d,"maxAge")
c=s(p)&&s(h)?e.loc.string("INFO_LIST_AGE_RATING_SUMMARY").replace("{ageRating}",n).replace("{minAgeRating}",e.loc.decimal(p)).replace("{maxAgeRating}",e.loc.decimal(h)):n
const w=[]
if(e.bag.requireAgeVerification&&function(e,t,n){let r
switch(n){case"twelvePlus":r=3
break
case Ww:r=4
break
case"adultOnly":r=5
break
default:r=1}return t>=r}(0,f(u,"rank"),Ww)&&function(e,t){const n=ce(t,vp)
for(const e of n)if(l(e,"id")===6014..toString())return!0
return!1}(0,t)){let n=null
const r=t.type===lk
if(r){const e=se(t,Pk)
if(s(e))for(const t of e.data)if(s(y(t,Yw))){n="AppStore.AgeVerification.ProductPage.Rating.BundleUnsuitableForJuveniles"
break}}else s(y(t,Yw))&&(n="AppStore.AgeVerification.ProductPage.Rating.UnsuitableForJuveniles")
let o
null!=n&&w.push(new cL(e.loc.string(n))),o=r?"AppStore.AgeVerification.ProductPage.Rating.BundleRequiredAge":"AppStore.AgeVerification.ProductPage.Rating.RequiredAge",w.push(new cL(e.loc.string(o)+"\n"))}if(c&&w.push(new cL(c)),r.length>0)for(const e of r)w.push(new cL(e))
let g=null
w.length>1&&(g=c)
const m=o?"":e.loc.string("INFO_LIST_AGE_RATING_TITLE")
let T
return i(e.bag.ageRatingLearnMoreEditorialItemId)&&(T=new wD(bb),T.title=e.loc.string("INFO_LIST_AGE_RATING_LEARN_MORE"),T.pageUrl=`https://apps.apple.com/story/id${e.bag.ageRatingLearnMoreEditorialItemId}`),new iL(m,w,g,T)}}return null}function Ki(e,t){switch(Xi(e,t)){case sI:case cS:case iI:case Rd:return!0
default:return!1}}function Zi(e,t){return gs(e,e.bag.gameControllerRecommendedRolloutRate)&&Xi(e,t)===Rd}function Xi(e,t){const n=xe(e)
if(!ee(t,n)){const r=ve(e,t,"compatibilityControllerRequirement")
if(o(r))return MR
const s=r[n]
return o(s)?MR:s}const r=ke(e,t,VR)
return i(r)?r:MR}function Qi(e,t,n,o,s,i){const c=ke(e,t,"copyright")
if(!r(c)){const t=new cL(c),n=s?"":e.loc.string("INFO_LIST_COPYRIGHT")
return new iL(n,[t])}return null}function ec(e,t,n,r,i,c){const a=be(e,t,"languageList")
if(o(a))return null
const u=a.length
if(u<1)return null
let l=null,f=null
switch(u){case 0:break
case 1:f=a[0]
break
case 2:f=e.loc.string("INFO_LIST_TWO_LANGUAGES_SUMMARY").replace("{first}",a[0]).replace("{second}",a[1])
break
default:const t=u-1
l=e.loc.string("INFO_LIST_MORE_LANGUAGES_SUMMARY").replace("{language}",a[0]).replace(b_,e.loc.formattedCount(t)),f=function(e,t){if(null===e||null===t)return null
if(0===e.length)return""
let n=e.length,r=""
return e.forEach((e,o)=>{null===e?n-=1:(r+=e,o<n-1&&(r+=t))}),r}(a,e.loc.string("CONJUNCTION_SEPARATOR"))}if(!s(f))return null
const d=new cL(f),p=i?"":e.loc.string("SUPPORTED_LANGUAGES")
return new iL(p,[d],l)}function tc(e,t,n){return e.host.clientIdentifier===RN&&eu(e,"15.2")&&!e.props.enabled("messagesProductCapabilitiesIconFix")?[]:Ll.Do("capabilitiesFromData",()=>[nc(e,t),rc(e,t),oc(e,t),sc(e,t),ic(e,t,n),cc(e,t)].filter(e=>e))}function nc(e,t){if(!Ne(e,t,PR))return null
if(e.props.enabled(IR)){const t=e.loc.string(Cd),n=new qk(e.loc.string(vd)),r=new NL(n)
return new wL(_C,t,r,"ProductCapabilityGameCenter")}return new wL(Nv)}function rc(e,t){if(!Ne(e,t,"isSiriSupported"))return null
if(e.props.enabled(IR)){const t=e.loc.string(bd),n=new qk(e.loc.string(kd)),r=new NL(n)
return new wL(_C,t,r,"ProductCapabilitySiri")}return new wL(BI)}function oc(e,t){if(!Ne(e,t,"supportsPassbook"))return null
if(e.props.enabled(IR)){const t=e.loc.string(Dd),n=new qk(e.loc.string(Nd)),r=new NL(n)
return new wL(_C,t,r,"ProductCapabilityWallet")}return new wL(Ld)}function sc(e,t){if(!Ki(e,t))return null
if(e.props.enabled(IR)){const t=e.loc.string($d)
let n=null
const r=e.bag.gameControllerLearnMoreEditorialItemId
gs(e,e.bag.gameControllerRecommendedRolloutRate)&&i(r)&&(n=new wD(bb),n.title=e.loc.string("AppStore.ProductPage.Capability.GameController.ActionTitle"),n.pageUrl=`https://apps.apple.com/story/id${r}`)
let o=n?e.loc.string("AppStore.ProductPage.Capability.GameController.Explanation.WithActionTemplate"):e.loc.string("AppStore.ProductPage.Capability.GameController.Explanation")
const s={};(null==n?void 0:n.title)&&(o=o.replace(NO,n.title),s[n.title]=n)
const c=new qk(o,BC),a=new NL(c,s)
return new wL(_C,t,a,"ProductCapabilityController")}return new wL(xd)}function ic(e,t,n){const r=y(t,"familyShareEnabledDate")
if(!r||P(t,yC))return null
const o=new Date(r),s=new Date
if(!o||o>s)return null
const c=Ne(e,t,Dy),a=c&&Ne(e,t,"hasFamilyShareableInAppPurchases")
let u=null
if(i(e.bag.familySubscriptionsLearnMoreEditorialItemId)&&a&&(u=new wD(bb),u.title=e.loc.string("CAPABILITY_FAMILY_SHARING_ACTION_TITLE"),u.pageUrl=`https://apps.apple.com/story/id${e.bag.familySubscriptionsLearnMoreEditorialItemId}`),e.props.enabled(IR)){const t=e.loc.string(Ny)
let r
if(a?r=u?"CAPABILITY_FAMILY_SHARING_SOME_SHAREABLE_IAPS_EXPLANATION_WITH_ACTION_TEMPLATE":"CAPABILITY_FAMILY_SHARING_SOME_SHAREABLE_IAPS_EXPLANATION":c||n||(r=u?"CAPABILITY_FAMILY_SHARING_PAID_APP_NO_IAPS_EXPLANATION_WITH_ACTION_TEMPLATE":"CAPABILITY_FAMILY_SHARING_PAID_APP_NO_IAPS_EXPLANATION"),!r)return null
let o=e.loc.string(r)
const s={};(null==u?void 0:u.title)&&(o=o.replace(NO,u.title),s[u.title]=u)
const i=new qk(o),l=new NL(i,s)
return new wL(_C,t,l,"ProductCapabilityFamilySharing",u)}{let e=null
return a?e=u?Fd:Md:c||n||(e=u?Ud:AO),e?new wL(e,null,null,null,u):null}}function cc(e,t){const n=Ne(e,t,"hasSafariExtension"),r=e.props.enabled("productCapabilitySafariExtensions")
if(!n||!r)return null
if(e.props.enabled(IR)){const t=e.loc.string("CAPABILITY_SAFARI_EXTENSION_TITLE"),n=new qk(e.loc.string("CAPABILITY_SAFARI_EXTENSION_EXPLANATION")),r=new NL(n)
return new wL(_C,t,r,"ProductCapabilitySafariExtension")}return new wL("safariExtension")}function ac(e,t,n,r,o,i){const c=ke(e,t,"seller"),a=ke(e,t,"sellerLabel")||e.loc.string("SELLER")
if(!s(c))return null
const u=new cL(c),l=new iL(o?"":a,[u])
return l&&!r?l:null}function uc(e,t,n,r,o,i){const c=Ma(e,t)
if(!n&&s(c)&&!r){const t=e.loc.fileSize(c),n=new cL(t),r=o?"":e.loc.string("FILE_SIZE")
return new iL(r,[n])}return null}function lc(e,t,n,o,s,i){const c=ce(t,OI)
if(c.length>0){const t=[]
for(const n of c){const o=y(n,_k),s=Ut(e,n)
if(r(s))continue
const i=l(s,qS),c=s.recurringSubscriptionPeriod
let a=e.loc.string("INFO_LIST_IAP_DURATION")
if(e.props.enabled("iapDurationOnProductPage"))switch(a=a.replace("{name}",o),c){case"P1Y":a=a.replace($_,e.loc.formatDuration(1,"years"))
break
case"P1M":a=a.replace($_,e.loc.formatDuration(1,"months"))
break
case"P1W":a=a.replace($_,e.loc.formatDuration(1,"weeks"))
break
case"P1D":a=a.replace($_,e.loc.formatDuration(1,"days"))
break
default:a=`${o}`}else a=`${o}`
t.push(new cL(a,null,i))}const n=s?"":e.loc.string("INFO_LIST_IN_APP_PURCHASES")
return new iL(n,t,e.loc.string("YES"))}return null}function fc(e,t,n,r,o,s,i,c){const a=[]
for(const u of t){const t=u(e,n,r,o,s,i)
t&&(a.push(t),c&&c(u,a.length-1))}return a}function dc(e,t,n,r){const o=new XL(Dw)
o.isHorizontal=!0
let s=null
s=n?t.slice(0,8):t
const c=[]
for(let e=0;e<s.length;e++){const t=s[e]
t.action=new qD(t.playerId),i(r)&&Bn(0,t,{pageInformation:r.destinationPageInformation,locationTracker:r.sourceLocationTracker,kind:"friendPlayer",title:"",id:"",idType:Mb,softwareType:null,anonymizationOptions:{anonymizationString:`FRIEND${e+1}`}}),c.push(t),i(r)&&At(r.sourceLocationTracker)}if(o.items=c,o.mergeWhenFetched=!0,o.isHidden=0===o.items.length,o.batchGroup=Nv,t.length>8){const n=new XL("smallGameCenterPlayer")
n.title=e.loc.stringWithCount("PRODUCT_FRIENDS_PLAYING_SEE_ALL_TITLE",t.length),n.items=t.map(e=>(e.action=new qD(e.playerId),e)),n.rowsPerColumn=1
const s=new uD([n])
s.title=r.title
const i=new wD(ak)
i.title=e.loc.string(ov),i.pageData=s,o.seeAllAction=i}return i(r)&&Bn(0,o,{id:"",kind:null,softwareType:null,targetType:zb,title:r.title,pageInformation:r.sourcePageInformation,locationTracker:r.sourceLocationTracker,idType:Mb,badges:{gameCenter:{}}}),o}function pc(e,t,n,s){return Ll.Do("inAppPurchasesShelf",()=>{if(!function(e,t){return t!==_v}(0,e.host.platform))return null
if(o(t))return null
const i=se(t,SI)
if(!i||!i.data.length)return null
if(!i.data.filter(function(e){return P(e,JI)===s.isForSubscriptions}).length)return null
const c={pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:zb,id:`${n.getSequenceId()}`,idType:Mb},a=E(t,Lb)
let u=_b
a&&(u=rR)
const l=vO,f=new XL(l)
let d=null
s.options&&(d=s.options.spotlightInAppProductIdentifier),function(e,t,n){const o=sk
for(const e of n.data){let n=se(e,o)
n||(n={data:[t]}),r(e.relationships)&&(e.relationships={}),e.relationships[o]=n}}(0,t,i)
const p=[],h=function(e,t,n,r,o,s){const i=sa(e,t,{lockupOptions:{metricsOptions:r,offerStyle:n,skipDefaultClickAction:!0,artworkUseCase:1},contentUnavailable:function(e){return p.push(e),!1}})
return o&&Pr(0,o,i),i}(e,i,u,c,d).filter(function(e){return e.productIdentifier===d&&(s.options.spotlightSection=new dM(Rk,s.isForSubscriptions?Iv:Pv)),e.isSubscription===s.isForSubscriptions})
if(0===h.length&&0===p.length)return null
if(f.items=h,p.length){const r=new SF(p,f.title,!1,l,u,null)
r.appBundleId=ke(e,t,Jv),s.isForSubscriptions?r.inAppShelfId=Iv:r.inAppShelfId=Pv,f.url=Ar(0,r,n)}let w
return s.isForSubscriptions?(f.title=e.loc.string("PRODUCT_SECTION_SUBSCRIPTIONS","Subscriptions"),w=Wl):(f.title=e.loc.string("PRODUCT_SECTION_IN_APP_PURCHASES"),w="iAP"),pt(c,f.title),wt(n.locationTracker),At(n.locationTracker),f.isHorizontal=!0,n.addImpressionsToShelf(e,f,w),f})}function hc(e,t,n,r,c,a){return Ll.Do(WC,()=>o(t)?null:function(e,t,n,r,o){return Ll.Do("standardLinksShelf",()=>{const c=new XL("productPageLink"),a=[]
if(e.client.deviceType!==Sk){const n=ke(e,t,PI)
if(n){const t=new TD(n,!1),r=e.loc.string("DEVELOPER_WEBSITE")
a.push(new LL(r,t,Bv))}}const u=ke(e,t,dS)
if(u){const t=new TD(u,!1),n=e.loc.string(k_)
a.push(new LL(n,t,SO))}if(E(t,Nw)){const n=function(e,t){const n=t.id,r=t.type
return s(t)&&s(n)&&s(r)?`${R$.internal}:/${C$.eula}?resourceType=${r}&resourceId=${n}`:null}(0,t)
if(n){const t=new wD(ak)
t.pageUrl=n
const r=e.loc.string(D_)
a.push(new LL(r,t,$R))}}const l=e.bag.productPageReportProblemSADSubscriptionArray,f=t.id,d=l.includes(f),p=Me(e).isDeletableSystemAppFromData(t),h=t.type===lk,w=r&&!p,g=e.bag.productPageReportProblemSecondPartyAppArray.includes(f)
if(!h&&!g&&!o&&e.bag.reportProblemEnabled&&(d||w)){const n=function(e,t){const n=t.id,r=e.bag.productPageReportProblemURL
return s(n)&&s(r)?r.replace("{productId}",n):null}(e,t)
if(i(n)){const t=new TD(n,!1),r=e.loc.string("REPORT_A_PROBLEM"),o=new LL(r,t,"reportAProblem",d?null:f)
a.push(o)}}return a&&a.length>0&&(c.items=a),n.addImpressionsToShelf(e,c,FO),c})}(e,t,n,r,a))}function wc(e,t,n,s){const i=Kc(e,t)
if(o(i))return null
const c=e.loc.string("BADGE_CATEGORY_HEADING"),a=nk,u=new t$(a,hR,{},ok,c,i,null,i,c,_b)
if(new wD(ak).title=y(t,Fv),n&&"tv"!==e.client.deviceType){const n=ve(e,t,qE)
if(a===nk&&r(n))return null
u.artwork=qi(e,n)}return u}function gc(e,t,n,r){const o=ve(e,t,WE)
if(o){const t=Ha(0,e.host.clientIdentifier)
if(t){const n=d(o,t)
if(n){const t=f(n,c_),r=l(n,Tw),o=l(n,Nb),s=l(n,TO),i=e.loc.string("BADGE_CHART_POSITION_HEADING"),c=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_CHART_POSITION_TITLE").replace(YE,t.toString()),a=new t$(HE,HE,{position:e.loc.decimal(t)},ok,i,r,null,c,r,lv),u=function(e,t,n){return C(e,new B$(e).forType(RO).addingQuery(py,Pk).addingQuery(TO,n).addingQuery(Nb,t).includingMacOSCompatibleIOSAppsWhenSupported(!0)).toString()}(e,o,s)
if(u){const e=new wD(qI)
e.pageUrl=u,a.clickAction=e}return a}}}return null}function mc(e,t,n,r){const o=y(t,_p)
if(o){const r={contentRating:o},s=function(e,t){if(!t)return null
switch(t){case 6:return"AgeRatingL"
case 7:return"AgeRating10"
case 8:return"AgeRating12"
case 9:return"AgeRating14"
case 10:return"AgeRating16"
case 11:return"AgeRating18"
default:return null}}(0,I(t,"contentRatingsBySystem.appsBrazil.rank"))
let i
s&&(r.contentRatingResource=s),i=n?e.loc.string("BADGE_AGE_RATING_YEARS"):e.loc.string("BADGE_AGE_RATING")
const c=e.loc.string("BADGE_AGE_RATING_HEADING"),a=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_AGE_RATING_TITLE")
return new t$(v_,v_,r,ok,c,i,null,o,a,lv)}return null}function Tc(e,t,n,r){let o=null
if(Zi(e,t)){const t=e.loc.string(jE),n=e.loc.string("AppStore.ProductPage.Badge.GameController.Recommended")
o=new t$(KS,KS,{},ok,t,n,null,null,n,lv)}return o&&(o.clickAction=$c(e)?new JD(Sb):new FD(new n$(Rk,Sb))),o}function Ac(e,t,n,r){let o=null
if(Ki(e,t)&&!Zi(e,t)){const t=e.loc.string(jE),n=e.loc.string(KO)
o=new t$(KS,KS,{},ok,t,n,null,null,n,lv)}return o?(o.clickAction=$c(e)?new JD(Sb):new FD(new n$(Rk,Sb)),o):null}function yc(e,t,n,o){const i=ie(t,Bv),c=e.loc.string("BADGE_DEVELOPER_HEADING"),a=y(t,Fv),u=nk,l=new t$(u,Bv,{},ok,c,a,null,a,c,_b)
if(n&&"tv"!==e.client.deviceType){const t=T(i,qE)
u===nk&&r(t)?l.artwork=We(e,Aw,26,26):l.artwork=qi(e,t)}const f=Va(0,i)
if(s(f)){const n=new wD(ak)
n.title=y(t,Fv),n.pageUrl=f,Rt(e,n,{targetType:qb,id:i.id,actionType:Qv,pageInformation:o.pageInformation,locationTracker:o.locationTracker}),l.clickAction=n}return l}function Ec(e,t,n,r){const o=ve(e,t,rC)
if(o){const r=l(o,LS)
if(r&&r===$S){let r,o
r="Games"===A(t,oE)[0]?e.loc.string("EDITORIAL_BADGE_GAMES"):e.loc.string("EDITORIAL_BADGE_APPS"),o=n?e.loc.string("EDITORS_CHOICE_RIBBON_HEADING"):e.loc.string("EDITORS_CHOICE_SINGLE_LINE")
const s=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_EDITORS_CHOICE"),i=new t$(LR,LR,{},ok,o,r,null,s,r)
return i.clickAction=$c(e)?new JD(db):new FD(new n$(Rk,yk)),i}}return null}function Pc(e,t,r,o){const s=be(e,t,"supportedLocales"),i=s.length
if(i<=0)return null
const c={tag:l(n(s,"0.tag")).split("-")[0].toUpperCase(),name:l(n(s,"0.name"))},a={paragraphText:c.tag}
let u
u=i>1?e.loc.string("BADGE_LANGUAGE_CAPTION").replace("{number_other_languages}",e.loc.formattedCount(i-1)):c.name
const f=e.loc.string("BADGE_LANGUAGE_HEADING")
return new t$(hv,JS,a,ok,f,u,null,null,u,lv)}function Ic(e,t,n,r){const o=Le(e,t,rI),i=Le(e,t,oI)
if(!s(o)||!s(i))return null
if(o<=0||i<=0||o>i)return null
const c=e.loc.string(yw),a=Sc(e,o,i,!1),u=Sc(e,o,i,!0),l=e.loc.string(yw),f={paragraphText:_c(e,o,i)}
return new t$(hv,Kf,f,ok,c,a,null,u,l,lv)}function _c(e,t,n){return t===n?t<=32?e.loc.formattedCount(t):e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER_INDEFINITE_MIN_AND_MAX_LIMIT").replace(zE,e.loc.formattedCount(32)):n<=32?e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER_DEFINITE_LIMIT").replace(zE,e.loc.formattedCount(t)).replace(Ew,e.loc.formattedCount(n)):e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER_INDEFINITE_MAX_LIMIT").replace(zE,e.loc.formattedCount(t)).replace(Ew,e.loc.formattedCount(32))}function Sc(e,t,n,r){return 1===t&&1===n?e.loc.string("BADGE_PLAYERS_CAPTION_SINGLE"):1===t||r?e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER"):e.loc.string("BADGE_PLAYERS_CAPTION_REQUIRED")}function Oc(e,t,n,r){const o=T(t,ZO)
let s=null
const i=ai(e,t)
if(!i&&o&&o.value&&o.ratingCount){const t=f(o,ZS),n=Math.round(10*t)/10,r=e.loc.decimal(n,1),i=f(o,hw),c=e.loc.stringWithCount("BADGE_RATING_CAPTION_SHORT_TEMPLATE",i).replace(b_,e.loc.formattedCount(i)),a=e.loc.stringWithCount("BADGE_RATING_CAPTION_LONG_TEMPLATE",i).replace(b_,e.loc.formattedCount(i)).replace("{rating}",r),u=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_STAR_RATING").replace("{starCount}",r)
s=new t$(uv,uv,{rating:n,ratingFormatted:r},ok,c,c,a,u,c)}else{if(n)return null
const t=e.loc.string(Pw)
if(i&&t!==Pw)s=new t$(uv,uv,{},ok,null,t,null,t)
else if(!i){const t=e.loc.string("BADGE_NOT_ENOUGH_RATINGS_CAPTION")
s=new t$(uv,uv,{},ok,null,t,null,t)}}return s?(s.clickAction=$c(e)?new JD(db):new FD(new n$(Rk,yk)),s):null}function Rc(e,t,n,r){return t?Ll.Do("badgesFromLookupResponse",()=>{let o,s=!1
return P(t,Lb)?o=dU:n?(o=hU,-1===o.indexOf(Ec)&&o.splice(1,0,Ec),s=!0):o=pU,function(e,t,n,r,o,s){const i=[]
for(const o of t){const t=o(e,n,r,s)
t&&i.push(t)}if(o&&i.some(e=>e.key===HE)){const e=i.findIndex(e=>e.key===hR)
e>=0&&i.splice(e,1)}return i}(e,o,t,n,s,r)}):null}function Cc(e,t,n,r,o){return Ll.Do("createProductReviewsList",()=>{const t=[]
if(i(o)&&t.push(o),s(r)&&r.length>0){const o=!1,s=!o,i=o?r.slice(0,1):r,c=fi(e,e.client.guid,n,i,s,s)
for(const e of c){const n=new lx
n.sourceType=lw,n.review=e,t.push(n)}}return t})}function vc(e,t){return t?t.map(t=>bc(e,t,Bw)):[]}function bc(e,t,n){return Ll.Do("titledParagraphFromVersionHistoryEntry",()=>{const r=l(t,"releaseNotes"),o=new CL(r,n),s=l(t,Gw),i=e.loc.string("VERSION_STRING_TEMPLATE")
o.primarySubtitle=n===Bw?s:i.replace(Vw,s)
const c=l(t,"releaseTimestamp")
if(c){const t=new Date(c)
o.secondarySubtitle=e.loc.relativeDate(t)}return o})}function kc(e,t,n,c,a){return Ll.Do("createProductPageFromResponse",()=>{const d=$(t)
if(o(d))return null
d.type
const p=$(c[IF]),h=function(e,t,n){const r=$(t),o=r.type===lk
s(n)&&(n.iAdClickFields&&(t[Jx]=JSON.stringify(n.iAdClickFields)),n.iAdLineItem&&(t[Kx]=n.iAdLineItem))
const i=cu(e,o?Rw:vR,r.id,t)
return new yF(i,{rootPosition:0,locationStack:[]})}(e,t,n),w=Dc(e,d,h,n,null,p,a)
h.metricsPageInformation.baseFields[l_]=nt(0,d,w.lockup.icon)
const g=Ca(e,d)
uu(e,w,h.metricsPageInformation,t=>{const n=va(0,d,e.appleSilicon.isSupportEnabled),r=$a(e,d,e.appleSilicon.isSupportEnabled,e.appleSilicon.isRosettaAvailable),o=g&&(Na(0,g,e.client.deviceType,n,r)||xa(0,g,e.client.deviceType,n)),s=function(e,t,n,r){if(!pa(e,t))return!1
if(Ue(e,t,17030))return!1
const o=ka(0,n,va(0,t,r)),s=Ca(e,t)
return o.some(e=>Da(0,s,e))}(e,d,e.client.deviceType,e.appleSilicon.isSupportEnabled)
t[JE]=o&&s?"runnable":o?"purchasable":cb})
const m=sr(t,!0)
return function(e,t,n,c,a,d){const p=Ca(e,n),h=n.type===lk,w=E(n,Lb),g=!(1===p.length&&p[0]===Sk),m=ai(e,n),A=g&&!w&&!m,I=i(a)?a.clientIdentifierOverride:null,_=P(n,yC),S=t.lockup.offerDisplayProperties,O=!s(S)||S.isFree
let R
if(h){const t=se(n,Pk)
R=function(e,t,n){return t?Ll.Do("bundleChildrenShelf",()=>{let r
const o=Jb
r=new XL(o),r.isHorizontal=!0
const s=t.data.length
if(!s)return null
r.title=e.loc.stringWithCount("APPS_IN_BUNDLE",s)
const i=Er(e,t,n,1,o,null,22014)
if(i.unavailableIds.length){const e=new SF(i.unavailableIds,r.title,!1,Jb,_b,null)
e.isBundleShelf=!0,r.url=Ar(0,e,n)}return pt({pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:zb,id:`${n.getSequenceId()}`,idType:Mb},r.title),r.items=i.items,wt(n.locationTracker),At(n.locationTracker),r.rowsPerColumn=s<2?1:2,n.addImpressionsToShelf(e,r,JC),r}):null}(e,t,c)}R&&(t.shelfMapping[JC]=R)
const C=se(n,lk),v=function(e,t,n){return t?Ll.Do("bundleParentsShelf",()=>{let r
const o=t.data.length
if(!o)return null
const s=Jb
r=new XL(s),r.isHorizontal=!0,r.title=e.loc.string("INCLUDED_IN_BUNDLES").replace(b_,o.toString())
const i=Er(e,t,n,1,s)
if(0===i.unavailableIds.length&&0===i.items.length)return null
if(r.items=i.items,i.unavailableIds.length){const e=new SF(i.unavailableIds,r.title,!1,s,_b,null)
e.isBundleShelf=!0,r.url=Ar(0,e,n)}return r.rowsPerColumn=o<2?1:2,n.addImpressionsToShelf(e,r,"bundleParent"),r}):null}(e,C,c)
v&&(t.shelfMapping[DC]=v)
const b={productTitle:t.title,shouldShowRatingsAndReviews:A,isFirstPartyHideableApp:_,isBundle:h,isPreorder:w},k=function(e,t,n,r){return Ll.Do("createReviewsShelves",()=>{const n={}
if(o(t))return n
const s=function(e,t){if($c(e))return!0
if(o(t))return!1
let n
return n=Me(e).isDeletableSystemAppFromData(t),!n||e.bag.enableSystemAppReviews}(e,t),c=Ca(e,t),a=se(t,yk),d=x(a),p=T(t,ZO)
p.ratingAverage=f(p,ZS),p.adamId=t.id,p.isBundle=r.isBundle,p.supportUrl=ke(e,t,pS)
const h=Aa(e,t,{useCase:2}),w=1===c.length&&"tv"===c[0],g=_i(e),m=function(e,t,n){return Ll.Do("createProductRatings",()=>{const n=di(e,e.client.guid,t),r=n.ratingAverage>0&&n.ratingCounts,o=u(t,GE)
return r||o||(n.status=e.loc.string(ww)),n})}(e,p,d.length),A=function(e,t,n,r,o,s){return Ll.Do("createTapToRate",()=>{if(s)return null
{const s=hi(e,t.id,o,n,f(r,ZS)),i=new sx
return i.actionType=Kl,i.action=s,i}})}(e,t,r.productTitle,p,r.isBundle,w),y=function(e,t,n,r,o){return Ll.Do("createWriteAReview",()=>{if(r)return null
{const r=new ix
r.writeReviewAction=gi(e,t,o)
const s=l(n,gw)
if(s){const t=new TD(s,!1)
t.title=e.loc.string(mw),r.supportAction=t}const i=new sx
return i.actionType="writeAReview",i.action=r,i}})}(e,t,p,w,h),E=function(e,t){return Ll.Do(xw,()=>{const n=l(ve(e,t,ER),ok)
if(n){const r=new rx(n),o=ve(e,t,rC)
if(o){const e=l(o,LS)
r.showsBadge=e&&e===$S}r.showsBadge||(r.title=e.loc.string(QS))
const s=new lx
return s.sourceType=LR,s.review=r,s}return null})}(e,t),P=Cc(e,0,p,d,E),I=Cc(e,0,p,d,null)
if(r.shouldShowRatingsAndReviews){const t=new XL(db)
t.title=g,t.items=[m],t.seeAllAction=w||0===d.length?null:Ii(e,e.client.guid,p,d,a.next,r.productTitle,h),n.ratingsShelf=t
const o=[]
if(i(A)&&s&&o.push(A),i(y)&&s&&o.push(y),i(o)){const e=new XL(tP)
e.items=o,n.allReviewActionsShelf=e}let c=null
i(A)&&s&&(c=new XL(tP),c.items=[A],n.tapToRateActionsShelf=c)
let u=null
i(y)&&s&&(u=new XL(tP),u.items=[y],n.writeAReviewActionsShelf=u)
let l=null
i(P)&&i(I)&&(l=new XL(nP),l.items=P,l.isHorizontal=!0,n.allProductReviewsShelf=l)
let f=null
if(i(P)&&(f=new XL(nP),f.items=I,f.isHorizontal=!0,n.userProductReviewsShelf=f),"tv"===e.client.deviceType){const e=new XL("productRatingComponent")
e.title=g
const t=[]
i(A)&&A.action instanceof nx&&s&&t.push(A.action),i(m.status)?t.push(function(e){if(!e)return null
const t=new ux
return pi(e,t),t}(m)):(t.push(function(e){if(!e)return null
const t=new cx
return pi(e,t),t}(m)),t.push(function(e){if(!e)return null
const t=new ax
return pi(e,t),t}(m))),e.items=t,n.tvReviewsShelf=e}}let _=null
return i(E)&&(_=new XL(nP),_.items=[E],r.shouldShowRatingsAndReviews||(_.title=g),n.editorsChoiceProductReviewsShelf=_),n})}(e,n,0,b)
i(k)&&(t.shelfMapping[yk]=k.tvReviewsShelf,t.shelfMapping[db]=k.ratingsShelf,t.shelfMapping[XS]=k.allReviewActionsShelf,t.shelfMapping[aC]=k.allProductReviewsShelf,t.shelfMapping[kC]=k.userProductReviewsShelf,t.shelfMapping[jC]=k.editorsChoiceProductReviewsShelf,t.shelfMapping[uC]=k.tapToRateActionsShelf,t.shelfMapping[lC]=k.writeAReviewActionsShelf)
const D=function(e,t,n,r){return Ll.Do(WC,()=>function(e,t,n,r,o,s){return Ll.Do("standardMostRecentVersionShelf",()=>{if(!n&&!r&&!o){const n=be(e,t,gR)
if(n.length>1&&vc(e,n).length>0){const r=new XL(Uw)
r.title=e.loc.string(Fw)
const o=bc(e,n[0],Mw)
if(r.items=[o],s.addImpressionsToShelf(e,r,gR),r)return e.client.deviceType!==Ok&&(r.seeAllAction=function(e,t,n,r){return Ll.Do("versionHistorySeeAllAction",()=>{const o=function(e,t,n){return Ll.Do("versionHistoryPageAction",()=>{const r=vc(e,t)
let o
if(r.length>0){const t=new XL(Uw)
t.items=r
const s=new uD([t])
s.title=e.loc.string("VERSION_HISTORY_PAGE_TITLE","Version History"),e.client.deviceType!==Ok&&(s.presentationOptions=[rv])
const i=au(0,"VersionHistory",n,"")
uu(e,s,i)
const c=new wD(gR)
c.title=e.loc.string("ACTION_VERSION_HISTORY_SEE_ALL"),c.pageData=s,o=c}return o})}(e,t,n)
return Ct(e,o,null,{pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker}),o})}(e,n,t.id,s)),r}}return null})}(e,t,r.isFirstPartyHideableApp,r.isBundle,r.isPreorder,n))}(e,n,c,{isFirstPartyHideableApp:_,isBundle:h,isPreorder:w})
D&&(t.shelfMapping[wb]=D),t.shelfMapping[hO]=function(e,t,n){return Ll.Do("textCardShelfFromResponse",()=>(o(t),null))}(0,n)
const N=ke(e,n,Jv)
if(e.bag.enablePrivacyNutritionLabels&&!Mr(e,n.id)&&!Ur(e,N)){const i=function(e,t,n,r){return Ll.Do("privacyShelf",()=>{if(o(t))return null
const s=new XL(jb)
s.title=e.loc.string(jS)
const i=Ui(e,t,!1,!1,n,r)
return s.items=[i],e.client.deviceType!==Ok&&"tv"!==e.client.deviceType&&(s.seeAllAction=Hi(e,t,YC,n,r,null)),s})}(e,n,c.metricsPageInformation,c.locationTracker),a=function(e,t,n){return Ll.Do(WC,()=>{if(o(t))return null
const r=T(t,SO)
if(o(r))return null
const s=new XL(S_),i=e.loc.string(jS)
pt({pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:ME,id:`${n.getSequenceId()}`,idType:Mb},i)
const c=ki(e,r,t,Yv,!0,n.metricsPageInformation,n.locationTracker)
return 0===c.length?null:(s.items=c,c.length<=2&&(s.presentationHints={isLowDensity:!0}),s.title=i,n.addImpressionsToShelf(e,s,"appPrivacy"),wt(n.locationTracker),At(n.locationTracker),s.title=null,s)})}(e,n,c)
if(s(i)&&s(a)){t.shelfMapping[jb]=i,s(a)&&(t.shelfMapping[Bb]=a)
const u=function(e,t,n,i){return Ll.Do(WC,()=>{if(o(t))return null
const c=Vi(e,t,!1,YC,n,i)
if((1===c.length&&c[0].identifier===LE||0===c.length)&&"tv"!==e.client.deviceType)return null
const a=new XL(kb),u=function(e,t,n,o){return Ll.Do("privacyFooterFromData",()=>{const t=function(e,t,n,o){let s
const i=e.loc.string($E),c={},a=Bi(e,n,o)
r(a)?s=e.loc.string(xE):(s=e.loc.string(Jh),s=s.replace(NO,i),r(a)?s=e.loc.string(xE):c[i]=a)
const u=new qk(s,jv)
return new NL(u,c)}(e,0,n,o),i=function(e,t,n,r){if("tv"!==e.client.deviceType)return[]
const o=[],i=Bi(e,n,r)
s(i)&&o.push(i)
const c=Gi(e,n,r)
return s(c)&&o.push(c),o}(e,0,n,o)
return new QM(t,i,[].length)})}(e,0,n,i)
return a.items=[u],a})}(e,n,c.metricsPageInformation,c.locationTracker)
s(u)&&(t.shelfMapping[kb]=u)}}const L=new cU,$=new cU,F=new cU,M=new cU,B=Ja(e,n),G=Lc(0,B),V=function(e,t,n,o,s,c,a,u){return Ll.Do(WC,()=>{let l
switch(e.client.deviceType){case Ok:l=function(e,t,n,o){return Ll.Do(qw,()=>{let s
const i=fc(e,aU,t,n,!1,!1,o,null)
return i.length>0&&(s=new XL(dR),s.items=i,r(o)||o.addImpressionsToShelf(e,s,ik)),s})}(e,t,n,o)
break
case"tv":l=function(e,t,n,o,s,c,a){return Ll.Do("tvInformationShelf",()=>{let u
const l=fc(e,uU,t,n,!1,!1,o,a),f=function(e,t,n){return Ll.Do("productCapabilitiesAsAnnotations",()=>{const r=[],o=tc(e,t,n)
for(const t of o){let n,o
if(e.props.enabled(IR))n=t.title,o=t.caption.styledText.rawText
else switch(t.type){case Nv:n=e.loc.string(Cd),o=e.loc.string(vd)
break
case BI:n=e.loc.string(bd),o=e.loc.string(kd)
break
case Ld:n=e.loc.string(Dd),o=e.loc.string(Nd)
break
case AO:case Ud:n=e.loc.string(Ny),o=e.loc.string("CAPABILITY_FAMILY_SHARING_EXPLANATION")
break
case Md:case Fd:n=e.loc.string(Ny),o=e.loc.string("CAPABILITY_FAMILY_SHARING_WITH_IAP_EXPLANATION")
break
case xd:n=e.loc.string($d),o=e.loc.string("CAPABILITY_MFI_CONTROLLERS_EXPLANATION")
break
default:n=null,o=null}if(i(n)&&i(o)){const e=new cL(o),t=new iL(n,[e])
r.push(t)}}return r})}(e,t,c).concat(fc(e,lU,t,n,!1,!1,o,a)),d=fc(e,fU,t,n,!1,!0,o,a),p=[]
if(l.length>0){const t=new sL(e.loc.string(XE),l,s)
p.push(t)}if(f.length>0){const t=new sL(e.loc.string(QE),f,s)
p.push(t)}if(d.length>0){const t=new sL(e.loc.string("PRODUCT_SECTION_TOP_IN_APP_PURCHASES"),d,!0)
p.push(t)}return p.length>0&&($c(e)?(u=new XL("annotationGroup"),u.items=p,u.background={type:Sv,color:_F},r(o)||o.addImpressionsToShelf(e,u,ik)):(u=new XL("informationContainer"),u.items=[new aL(p)],r(o)||o.addImpressionsToShelf(e,u,ik))),u})}(e,t,n,o,u,a,s)
break
default:l=function(e,t,n,o,s,i){return Ll.Do(qw,()=>{let c
const a=fc(e,aU,t,n,s,!1,o,i)
return a.length>0&&(c=new XL(dR),c.title=e.loc.string(XE),c.items=a,r(o)||o.addImpressionsToShelf(e,c,ik)),c})}(e,t,n,o,c,s)}return l})}(e,n,_,c,(n,r)=>{if(n===Ji&&L.setShelfId(ik,r),n===ji&&s(t.banner)){s(t.banner.fullProductAction)&&(t.banner.action=t.banner.fullProductAction)
const n=t.banner.action
s(n)&&($c(e)?n instanceof JD&&i(n.shelfId)&&n.shelfId===ik&&n.indexId===cC&&(n.index=r):n instanceof FD&&i(n.section.shelfId)&&n.section.shelfId===ik&&n.indexId===cC&&(n.index=r))}n===ec&&$.setShelfId(ik,r),n===uc&&F.setShelfId(ik,r),n===Yi&&M.setShelfId(ik,r)},G,O,!1)
V&&(t.shelfMapping[ik]=V)
const H=function(e,t,n,r){if(!Qt(e))return null
const s=ce(t,Tk)
if(o(s))return null
const i={pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:IC},c=e.loc.string("PRODUCT_SECTION_APP_EVENTS"),a=hr(e,s,t,!0,!1,i,!1,!1)
ir(a.nextAppEventPromotionStartDate,r)
const u=a.appEvents
if(0===u.length)return null
const l=pr(u,c)
return pt({...i,targetType:IC,id:`${n.getSequenceId()}`,idType:Mb},c),n.addImpressionsToShelf(e,l,jA),wt(i.locationTracker),At(i.locationTracker),l}(e,n,c,d)
if(s(H)&&(t.shelfMapping[Xb]=H),B){const r=function(e,t,n){if(o(t))return null
const r=l(ve(e,t,ER),ok)
if(r){const t=e.loc.string("APP_STORE_EDITORS_ATTRIBUTION"),o=new VL(r,t),s=new XL(pb)
return s.items=[o],n.addImpressionsToShelf(e,s,pb),s.background={type:Sv,color:le("componentBackgroundStandout")},s}return null}(e,n,c)
r&&(t.shelfMapping[pb]=r)}t.shelfMapping[NC]=hc(e,n,c,!1,0,B),t.shelfMapping[vv]=hc(e,n,c,!0,0,B),t.shelfMapping[wO]=function(e,t,n){return Ll.Do(WC,()=>{if("tv"!==e.client.deviceType)return null
if(o(t))return null
const r=new XL(hv)
r.isHorizontal=!1
const s=function(e,t){return t?Ll.Do("externalProductLinksAsParagraphsFromData",()=>{const n=[],r=ke(e,t,PI)
if(r){const t=e.loc.string("DEVELOPER_WEBSITE_WITH_URL").replace("{URL}",r),o=new Wk(t)
o.alignment=$b,n.push(o)}return n}):null}(e,t)
return s&&s.length>0&&(r.items=s),$c(e)&&(r.background={type:Sv,color:_F}),n.addImpressionsToShelf(e,r,FO),r})}(e,n,c)
const q=function(e,t,n,r){return Ll.Do("capabilitiesShelf",()=>{if(o(t))return null
let s
const i=tc(e,t,n)
return i.length>0&&(s=new XL(bw),s.title=e.loc.string(QE),s.items=i,r.addImpressionsToShelf(e,s,eP)),s})}(e,n,O,c)
q&&(t.shelfMapping[Sb]=q)
const W=se(n,mS),Y=function(e,t,n){return Ll.Do("smallStoryShelf",()=>{if(!t||!t.data.length)return null
const r={pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:zb,id:`${n.getSequenceId()}`,idType:Mb},o=e.loc.string(kw)
pt(r,o)
const s=[],i={metricsLocationTracker:r.locationTracker,metricsPageInformation:r.pageInformation,filterOutMediaCardKinds:new Set([sR])},c=ks(e,t.data,VC,o,null,i,function(e){return s.push(e.id),!1})
if(c.isHorizontal=!0,s.length){const e=new SF(s,c.title,!1,VC)
c.url=Ar(0,e,n)}return wt(n.locationTracker),n.addImpressionsToShelf(e,c,hb),At(n.locationTracker),c})}(e,W,c)
Y&&(t.shelfMapping[hb]=Y)
const j={isPreorder:w},z=new cU,J=function(e,t,n,r){return Ll.Do("friendsPlayingShelf",()=>{if(o(t))return null
const s=t.id
if(o(s))return null
if(!Ne(e,t,PR))return null
if(r.isPreorder)return null
const i=e.loc.string("PRODUCT_SECTION_FRIENDS_PLAYING_TITLE","Playing This Game")
pt({pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:zb,id:`${n.getSequenceId()}`,idType:Mb},i)
const c=new XL(Dw)
c.eyebrow=e.loc.uppercased(e.loc.string(RS)),c.eyebrowArtwork=We(e,CS,16,16),c.title=i,c.isHorizontal=!0,c.items=[],c.mergeWhenFetched=!0
const a=new SF([],c.title,!1,null,null,null)
c.url=`${R$.internal}:/${C$.product}/${C$.shelf}/?${b$.isGameCenterPlayerShelf}=true&${b$.id}=${s}&${b$.token}=${yr(a,n,n.metricsPageInformation)}`,c.batchGroup=Nv,n.addImpressionsToShelf(e,c,Yb),wt(n.locationTracker),At(n.locationTracker)
const u=new wD(ak)
return Ct(e,u,null,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker}),c})}(e,n,c,j)
J&&(t.shelfMapping[Yb]=J,z.setShelfId(Yb))
const K=function(e,t,n,r){return Ll.Do("achievementsShelf",()=>{if(o(t))return null
if(r.isPreorder)return null
if(!Ne(e,t,PR))return null
const s=$e(e,t),i=ne(t,s,Jv)
if(o(i))return null
const c=e.loc.string("PRODUCT_SECTION_ACHIEVEMENTS",Cw),a=new XL(vw)
a.eyebrow=e.loc.uppercased(e.loc.string(RS)),a.eyebrowArtwork=We(e,CS,16,16),a.title=c,a.isHorizontal=!0,a.items=[],a.mergeWhenFetched=!0
const u=new SF([],a.title,!1,null,null,null)
return u.sourceLocationTracker=n.locationTracker,u.destinationPageInformation=n.metricsPageInformation,a.url=`${R$.internal}:/${C$.product}/${C$.shelf}/?${b$.isGameCenterAchievementsShelf}=true&${b$.bundleId}=${i}&${b$.token}=${yr(u,n,n.metricsPageInformation)}`,a.batchGroup=Nv,At(n.locationTracker),a})}(e,n,c,{isPreorder:w})
K&&(t.shelfMapping[xv]=K)
const Z=function(e,t,n){return Ll.Do("moreByDeveloperShelf",()=>{if(o(t))return null
let r
const s=Va(0,ie(t,Bv)),i=y(t,Fv),c=se(t,gS)
if(!c||0===c.data.length)return null
const a=e.loc.string("MORE_BY_DEVELOPER_TEMPLATE").replace("{developer}",i)
let u
switch(pt({pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:zb,id:`${n.getSequenceId()}`,idType:Mb},a),e.client.deviceType){case Sk:case"tv":u=Tb
break
default:u=Jb}r=new XL(u),r.title=a
const l=Er(e,c,n,wa(0,u),u,null)
if(!l)return null
if(r.items=l.items,l.unavailableIds&&l.unavailableIds.length){const e=new SF(l.unavailableIds,r.title,!1,u,null)
r.url=Ar(0,e,n)}{const t=new wD(ak)
t.pageUrl=s,t.title=e.loc.string(ov),Ct(e,t,t.pageUrl,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker}),r.seeAllAction=t}return r.isHorizontal=!0,c.data.length<2?r.rowsPerColumn=1:r.rowsPerColumn=2,n.addImpressionsToShelf(e,r,Bv),wt(n.locationTracker),At(n.locationTracker),r})}(e,n,c)
Z&&(t.shelfMapping[Ob]=Z)
const X=function(e,t,n){return Ll.Do("similarItemsShelf",()=>{var r
if(o(t))return null
let s
const c=se(t,wS)
if(o(c))return null
const a=e.loc.string("SIMILAR_ITEMS_TITLE"),u=Fb,l=zO
let f,d
switch(pt({pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,targetType:u,id:yF.similarItemsShelfId,idType:l},a),e.client.deviceType){case"tv":f=Tb,d=!1
break
case Sk:f=Tb,d=!0
break
default:f=Jb,d=!0}s=new XL(f),s.title=a
const p=U(c),h=Er(e,c,n,wa(0,f),f,null,null,p)
if(!h)return null
s.items=h.items
const w=au(0,"SimilarItems",t.id,"")
if(i(h.unavailableIds)){const e=new SF(null!==(r=h.unavailableIds)&&void 0!==r?r:[],s.title,d,f,null,null,s.refreshUrl,p)
s.url=Ar(0,e,n,w)}return s.isHorizontal=!0,c.data.length<2?s.rowsPerColumn=1:s.rowsPerColumn=2,n.addImpressionsFieldsToSimilarItemsShelf(e,s,u,l),wt(n.locationTracker),At(n.locationTracker),s})}(e,n,c)
if(X&&(t.shelfMapping[Fb]=X),w&&!e.bag.arePreordersCancellable){const r=function(e,t,n){return Ll.Do("preorderShelf",()=>{if(o(t))return null
const r=new XL(ub),s=e.loc.string("BADGE_PREORDER_TERMS"),i=new $L(s)
return r.items=[i],n.addImpressionsToShelf(e,r,gv),r})}(e,n,c)
r&&(t.shelfMapping[ub]=r)}else{const r=pc(e,n,c,{isForSubscriptions:!0,options:a})
r&&(t.shelfMapping[Iv]=r)
const o=pc(e,n,c,{isForSubscriptions:!1,options:a})
o&&(t.shelfMapping[Pv]=o)}t.title
const Q=function(e,t,n,r){return Ll.Do("createActionLinks",()=>(o(t),null))}(0,n)
Q&&(t.shelfMapping[X_]=Q)
const ee=function(e,t,n,r){return Ll.Do("productMediaShelves",()=>{if(o(t))return null
const s=(e.client.deviceType,null),c=(e.client.deviceType,null),a=ge(e,t),u=Sa(e,t,11,s,a,n),l=Pa(e,t,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}},c)
let f=null
if(l)for(const e of u)if(e.mediaPlatform.isEqualTo(l.mediaPlatform)){f=e
break}let d=null
if(f){const e=f.mediaPlatform.appPlatform
if(e===mk||e===yb)for(const e of f.items){const t=e.screenshot
if(d=t.width/t.height,d<1)break}}const p=[],h=[]
if(f&&l&&l.videos)for(const n of l.videos){const o=new pL
o.video=n
const s=n.preview.width/n.preview.height,i=null===d||Math.abs(s-d)<.01,c=f.mediaPlatform.isEqualTo(l.mediaPlatform)
i&&c?p.push(o):h.push(n)
const a={pageInformation:r.metricsPageInformation,locationTracker:r.locationTracker,id:t.id,isAdvert:!!r.metricsPageInformation.iAdInfo&&r.metricsPageInformation.iAdInfo.iAdIsPresent}
po(e,n,a)}f&&(f.items=p.concat(f.items))
const w=[],g={}
for(let t=0;t<u.length;t++){const n=u[t],o=`${JM}_${n.mediaPlatform.appPlatform}_${n.mediaPlatform.supplementaryAppPlatforms.join("_")}`
w.push(new dM(Rk,o))
const s=new XL(Lw,null,n.items)
s.isHorizontal=!0
let c=!1
for(const e of n.items)if(i(e.screenshot)&&e.screenshot.isPortrait()||i(e.video)&&e.video.preview.isPortrait()){c=!0
break}s.contentsMetadata={type:$w,platform:n.mediaPlatform,allPlatforms:n.allPlatforms,hasPortraitMedia:c},r.addImpressionsToShelf(e,s,Ak),0===t&&"tv"!==e.client.deviceType&&(s.title=e.loc.string(uw)),g[o]=s}return h.length>0&&(g[Db]=function(e,t,n){return Ll.Do("videoShelf",()=>{if(!t||0===t.length)return null
let r
return $c(e)?(r=new XL(Lw),r.title=e.loc.string(Hw),r.items=t.map(e=>{const t=new pL
return t.video=e,t})):(r=new XL(L_),r.title=e.loc.string(Hw),r.items=t.map(e=>new UL(e,!0,jv,null,null,!0))),r.isHorizontal=!0,n.addImpressionsToShelf(e,r,Db),r})}(e,h,r)),{sectionMappings:w,shelfMapping:g}})}(e,n,I,c)
t.shelfMapping={...t.shelfMapping,...ee.shelfMapping},function(e,t,n){if(t&&t.spotlightSection){const e=t.spotlightInAppProductIdentifier
if(e&&t.spotlightSection){const r=n.shelfMapping[t.spotlightSection.shelfId]
if(!r)return
if(r.presentationHints={isInProductPageSpotlight:!0},Pr(0,e,r.items),r.url){const t=new sN(r.url)
t&&(r.url=t.param(b$.offerName,e).build())}}}}(0,a,t)
const te={},re=JS,oe=I_,ae=hR,ue=Yb
te[v_]=L,te[re]=$,te[oe]=F,te[ae]=M,te[ue]=z,t.badges&&Wi(e,t.badges,te,c),null!=t.shelfMapping[qb]&&Wi(e,Mc(e,t.shelfMapping[qb]),te,c),Nc(e,t,ee.sectionMappings,B,a)}(e,w,d,h,n,m),w.pageRefreshPolicy=cr(e,m),w.isIncomplete=!1,w.alwaysAllowReviews=ui(e,d),w})}function Dc(e,t,n,c,a,u,f){return Ll.Do("createProductPageSidePack",()=>{let d
s(c)&&(d=c.clientIdentifierOverride)
const p=t.id,h=y(t,_k),w=P(t,yC),g=ai(e,t),m=Ja(e,t),T={pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,id:p,isAdvert:!!n.metricsPageInformation.iAdInfo&&n.metricsPageInformation.iAdInfo.iAdIsPresent},A=new T$,_=new AL,S=E(t,Lb)
S&&s(n)&&s(n.metricsPageInformation)&&(n.metricsPageInformation.offerType=gv,n.metricsPageInformation.offerReleaseDate=Ht(0,t)),_.adamId=p,_.bundleId=l(t,Jv),A.uber=function(e,t,n){const r=Ja(e,t),i=Lc(0,r)?KE:Bd,c=new KM(i)
if(c.artwork=Ua(e,t,{supportsArcade:r}),c.compactArtwork=Ua(e,t,{supportsArcade:r,prefersCompactVariant:!0}),c.video=Ba(e,t,20),s(c.video)&&(c.video.playbackId=function(e){return`ProductPage.${e.id}.productUberVideoPlaybackId`}(t)),c.iconArtwork=Aa(e,t,{useCase:10,withJoeColorPlaceholder:!0},n),r&&o(c.video)&&o(c.artwork)){const r=Sa(e,t,11,(e.client.deviceType,null),ge(e,t),n)
if(r.length>0&&r[0].items.length>0){const e=r[0].items[0]
c.video=e.video,c.artwork=e.screenshot}}return o(c.compactArtwork)&&(c.compactArtwork=c.artwork),c.isValid()?c:null}(e,t,d)
const C=A.uber&&A.uber.style===KE
a||(_.icon=Aa(e,t,{useCase:10},d)),A.title=h,A.isIncomplete=!0,_.title=h,_.subtitle=Yc(e,t),_.developerTagline=ke(e,t,BR),A.regularPriceFormatted=y(t,"regularPriceFormatted"),A.logoArtwork=function(e,t,n){let r,o=null,i=null
return"tv"!==e.client.deviceType?null:("editorialArtwork.contentLogoTrimmed","bb",r=ve(e,t,"editorialArtwork.contentLogoTrimmed"),s(r)&&s("bb")?ga(e,r,{cropCode:"bb",useCase:0,withJoeColorPlaceholder:!0}):null)}(e,t),g||(_.rating=I(t,Op)),_.children=qc(e,t,{metricsOptions:T,artworkUseCase:1})
const v=function(e,t,n,r,o,c){const a=Ut(e,t),u=ke(e,t,Jv),l=E(t,Lb),f=Gt(e,a,t,l,!1,nt(0,t,n),o)
let d
if(i(f)){s(c)&&(f.lineItem=c.iAdLineItem)
const n=i(c)?c.clientIdentifierOverride:null
d=Yt(e,f,t,l,o,Yv,!1,n),s(c)&&i(c.externalDeepLinkUrl)&&i(d)&&(d=Dt(e,d,f.adamId,u,c.externalDeepLinkUrl,!1,o))}return{buttonAction:d,offerAction:f}}(e,t,_.icon,0,T,c)
if(_.buttonAction=v.buttonAction,S){let n
A.theme=K_
let r=null
if(m)n="",r=e.loc.uppercased(ru(e,t,e.loc.string(nE)))
else if(n=e.bag.arePreordersCancellable?e.loc.string(Iw):e.loc.string("PREORDER_EXPANDED_OFFER_TITLE"),s(v.offerAction.expectedReleaseDate)){const t=_w,n=e.loc.formatDate(t,v.offerAction.expectedReleaseDate)
r=e.loc.string(Sw).replace(Ow,n)}A.expandedOfferDetails=new r$(n,r)}let b,k
C&&(A.theme=Ub),C?(b=Ub,k=dO):(b=iv,k=Yv)
const D=Yv,N=iv,L=m?BO:sk
let $
_.offerDisplayProperties=Xt(e,v.offerAction,L,t,S,b,k,null,null,Yv),A.titleOfferDisplayProperties=Xt(e,v.offerAction,L,t,S,N,D,null,null,Yv)
const x=ie(t,Bv),F=Va(0,x)
s(F)&&($=new wD(ak),$.title=y(t,Fv),$.pageUrl=F,Rt(e,$,{targetType:fk,id:x.id,actionType:Qv,pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker})),A.developerAction=$,A.shareAction=ri(e,t,n.metricsPageInformation,n.locationTracker),_.tertiaryTitle=jc(e,t),_.tertiaryTitleAction=zc(e,t)
const M={appPlatforms:Ca(e,t),clientIdentifierOverride:d,offerButtonShouldBeDisabled:!1,productTitle:A.title,metricsPageInformation:n.metricsPageInformation,metricsLocationTracker:n.locationTracker}
A.banner=function(e,t,n){let r=null,o=null,s=null,c=null,a=null,u=!1
const l=Ne(e,t,rf),f=Ne(e,t,of)
if((l||f)&&(r=e.loc.string("APP_UPDATE_REQUIRED_IOS"),n.offerButtonShouldBeDisabled=!0),null===r&&Ue(e,t,2048)&&(r=e.loc.string("OFFER_WATCH_ONLY_BANNER"),n.offerButtonShouldBeDisabled=!0),null===r&&!pa(e,t)){if(r=e.loc.string(rw),$c(e)){const t=new JD(ik)
t.title=e.loc.string(YO),t.indexId=cC,s=t}else{const t=new n$(Rk,ik),n=new FD(t)
n.title=e.loc.string(YO),n.indexId=cC,s=n}r=e.loc.string(O_).replace(R_,s.title),n.offerButtonShouldBeDisabled=!0}if(null===r&&Ue(e,t,36)&&(r=e.loc.string(ow),n.offerButtonShouldBeDisabled=!0),Ue(e,t,512)){const n=ba(e,t,e.appleSilicon.isSupportEnabled)
switch(e.client.deviceType){case Sk:r=e.loc.string("UNSUPPORTED_MACOS_VERSION").replace(iC,n)
break
case mk:case uk:r=e.loc.string(sw).replace(iC,n)
break
case"tv":r=e.loc.string("UNSUPPORTED_TVOS_VERSION").replace(iC,n)
break
case Ok:const o=ke(e,t,oS)
r=e.loc.string("UNSUPPORTED_WATCHOS_VERSION").replace(iC,o)
break
default:r=e.loc.string(ow)}}if(Ue(e,t,128))if(n.offerButtonShouldBeDisabled=!0,r=e.loc.string(rw),$c(e)){const t=new JD(ik)
t.title=e.loc.string(YO),t.indexId=cC,s=t,r=e.loc.string(O_).replace(R_,t.title)}else{const t=new n$(Rk,ik),n=new FD(t)
n.title=e.loc.string(YO),n.indexId=cC,s=n,r=e.loc.string(O_).replace(R_,n.title)}if(Ue(e,t,16384)){if($c(e)){const t=new JD(ik)
t.title=e.loc.string(YO),t.indexId=cC,s=t}else{const t=new n$(Rk,ik),n=new FD(t)
n.title=e.loc.string(YO),n.indexId=cC,s=n}r=e.loc.string(O_).replace(R_,s.title)}Qa(e,t)&&(r=P(t,Lb)?e.loc.string("AppStore.ProductPage.WatchOS.PreOrderRequiresiPhone"):e.loc.string("UNSUPPORTED_COMPANION_CONFIGURATION","Requires iPhone"),n.offerButtonShouldBeDisabled=!0)
const d=ke(e,t,oS)
null===r&&n.clientIdentifierOverride===ON&&tu(e,d)&&(r=e.loc.string("AppStore.ProductPage.Banner.PairedWatchOSVersionBelowMinimum").replace(iC,d))
const p=xt(e,t),h=Ft(e,"product-page-banner")
if((null===r||!n.offerButtonShouldBeDisabled)&&p&&h){const t=e.loc.string("AppStore.ProductPage.ExternalPurchasesBanner.LearnMore")
o=Mt(e,t,n.metricsPageInformation,n.metricsLocationTracker),r=function(e,t,n){return e.bag.externalPurchasesProductPageBannerUseAlternateCopy?t&&n?e.loc.string("AppStore.ProductPage.ExternalPurchasesBanner.WithLink_NLD").replace(NO,t):e.loc.string("AppStore.ProductPage.ExternalPurchasesBanner.NoLink_NLD"):t&&n?e.loc.string("AppStore.ProductPage.ExternalPurchasesBanner.WithLink").replace(NO,t):e.loc.string("AppStore.ProductPage.ExternalPurchasesBanner.NoLink")}(e,t,o),s=null,e.bag.externalPurchasesIncludeProductPageBannerIcon?(c=We(e,ew),a=le("systemRed")):(c=null,a=null),u=!0}return i(r)?new fL(r,o,s,c,a,u):null}(e,t,M)
const U=_.offerDisplayProperties
M.offerButtonShouldBeDisabled&&i(U)&&(_.offerDisplayProperties=U.newOfferDisplayPropertiesChangingAppearance(!1,rR))
const B=!Ue(e,t,512)
if(!w&&!M.offerButtonShouldBeDisabled&&B){const n=function(e,t){return Ll.Do("updateOfferDataFromData",()=>{const n=be(e,t,WO)
if(0===n.length)return null
for(const e of n)if(l(e,nv)===Rh)return e
return null})}(e,t)
A.updateBuyParams=l(n,iS),A.externalVersionIdentifier=Le(e,t,"externalVersionId")}if(m&&(_.editorialTagline=e.loc.string(MA)),A.lockup=_,A.appPlatforms=Ca(e,t),s(u)){const n=on(e,u,t,!1,!1,rk,Ub,!0,!1,T,!0,!1)
if(s(n)&&n instanceof Yx){const r=n
A.appEventDetailPageFlowAction=un(e,u,t,r,T,gb,!1,f)}}return function(e,t,n,s,c){if(t.shelfMapping[gk]=new XL("marker","productTopLockup"),"tv"!==e.client.deviceType){const c={developerAction:t.developerAction}
t.shelfMapping[dk]=function(e,t,n,s){return Ll.Do("descriptionShelf",()=>{if(o(t))return null
const c=new XL("productDescription"),a=function(e,t){return t?Ll.Do("productDescriptionLinksFromData",()=>{const n=[],r=ke(e,t,PI)
if(r){const t=new TD(r,!1),o=e.loc.string("PRODUCT_DEVELOPER_WEBSITE")
n.push(new LL(o,t,Bv))}const o=ke(e,t,pS)
if(o){const t=new TD(o,!1),r=e.loc.string("DEVELOPER_SUPPORT")
n.push(new LL(r,t,"support"))}return n}):null}(e,t),u=function(e,t,n=null){return Ll.Do("descriptionFromData",()=>{r(n)&&(n=ge(e,t))
let o=function(e,t,n){return function(e,t,n,r,o){const s=O(r),c=me(0,ve(e,t,hy,void 0),n,s,R(s))
return i(c)?l(c):ke(e,t,r)}(e,t,n,ad)}(e,t,n)
o||(o="")
let s=ke(e,t,fR)
s||(s="")
let c=""
o.length>0&&s.length>0&&(c="\n\n")
const a=o+c+s
if(a.length>0){const e=new Wk(a)
return e.isCollapsed=!0,e}return null})}(e,t)
if(null===u)return null
const f=new gL(u,a,s.developerAction)
return c.items=[f],n.addImpressionsToShelf(e,c,dk),c})}(e,n,s,c)}{const r={useInlineUberStyle:t.uber&&t.uber.style===KE}
t.shelfMapping[qb]=function(e,t,n,r){if($c(e)){const r=new XL("productBadge"),o=Rc(e,t,!0,{locationTracker:n.locationTracker,pageInformation:n.metricsPageInformation})
return r.items=o,r.isHorizontal=!0,n.addImpressionsToShelf(e,r,qb),r}{const o=new XL(qb),s=Rc(e,t,!0,{locationTracker:n.locationTracker,pageInformation:n.metricsPageInformation}),i=!r.useInlineUberStyle,c=!1,a=r.useInlineUberStyle,u=new qL(s,i,c,a,"justified")
return o.items=[u],o.isHorizontal=!0,n.addImpressionsToShelf(e,o,qb),o}}(e,n,s,r)}Nc(e,t,[],Ja(e,n),c)}(e,A,t,n,c),A.uber.isValidUber(!1)&&(A.presentationOptions.push($y),A.presentationOptions.push(Gd)),A.alwaysAllowReviews=ui(e,t),A})}function Nc(e,t,n,r,o){const s=function(e,t,r){return e.map(e=>e.shelfId===Ak&&r?n:e.shelfId===Ak?n[0]?[n[0]]:[]:[e]).reduce((e,t)=>e.concat(t)).map(e=>e.createShelfIdList()).reduce((e,t)=>e.concat(t))},c=Oi(0,!0,e.host.platform,r,!1,!1,o),a=Oi(0,!1,e.host.platform,r,!1,!1,o),u=Oi(0,!0,e.host.platform,r,!0,!1,o),l=Oi(0,!1,e.host.platform,r,!0,!1,o),f=Oi(0,!1,e.host.platform,r,!1,!0,o),d=Oi(0,!1,e.host.platform,r,!0,!0,o)
t.shelfOrderings[i$]=s(c,0,!1),t.shelfOrderings[a$]=s(c,0,!0),t.shelfOrderings[c$]=s(a,0,!1),t.shelfOrderings[u$]=s(a,0,!0),t.shelfOrderings[l$]=s(u,0,!1),t.shelfOrderings[d$]=s(u,0,!0),t.shelfOrderings[f$]=s(l,0,!1),t.shelfOrderings[p$]=s(l,0,!0),t.shelfOrderings[h$]=s(f,0,!1),t.shelfOrderings[w$]=s(f,0,!0),t.shelfOrderings[g$]=s(d,0,!1),t.shelfOrderings[m$]=s(d,0,!0),t.defaultShelfOrdering=c$
for(const e of Object.keys(t.shelfMapping))i(t.shelfMapping[e])&&(t.shelfMapping[e].id=e)}function Lc(e,t){return t&&!0}function $c(e){return e.featureFlags.isEnabled("shelves_2_0_product")}function xc(e,t,n={},r={},o=null,s=!1){const i=Ja(e,$(t)),c=kc(e,t,n,r,o)
return $c(e)&&!s?c:vi(e,c,i,n)}function Fc(e,t,n={},o=!1){if(!e.client.isSidepackingEnabled)return null
const s=Ja(e,t),i=function(e,t,n,o){return Ll.Do("createProductPageSidePackFromResponse",()=>{if(!e.client.isSidepackingEnabled)return null
const s=function(e,t,n){const r=y(t,Ek),o=y(t,_k),s=y(t,Fv)
let i=null
n&&(i=n.iAdClickFields)
const c=au(0,vR,t.id,`${s}_${o}`,i)
return c.pageUrl=r,new yF(c,{rootPosition:0,locationStack:[]})}(0,t,n),i=Dc(e,t,s,n,o)
return function(e,t,n){r(n)||t.pageMetrics.addData(wu(e,n,null),[Nl.lo.backButton])}(e,i,s.metricsPageInformation),i})}(e,t,n,o)
return $c(e)?i:vi(e,i,s,n)}function Mc(e,t){if(o(null==t?void 0:t.items))return[]
if($c(e))return t.items
{const e=t.items
return e.length>0?e[0].badges:[]}}function Uc(e,t){if(!t)return null
const n=t.match(/P(\d+)([A-Z]+)/)
if(!n||3!==n.length)return null
let r=f(n[1]),o=n[2]
return r&&o?("D"===o&&r>0&&r%gU==0&&(o="W",r/=gU),new wU(r,o)):null}function Bc(e,t){const n=a(t,eE)[0]
if(!n)return null
const o=l(n,yh),s=l(t,yh)
if(!o||!s)return null
const i=l(n,Eh),c=Uc(0,o),u=Uc(0,s),d=function(e,t,n,o){if(r(t)||r(n))return null
const s=mU[t.type],i=mU[n.type],c=TU[o]
return s&&i&&c?`IN_APP_OFFER_PAGE_DESCRIPTION_${c}_${s}_POST_TRIAL_${i}`:null}(0,c,u,i)
if(!d)return null
const p=l(n,qS),h=l(t,qS),w=f(n,"numOfPeriods"),g=c.period*w
switch(i){case Ph:const t=e.loc.stringWithCounts(d,[g,u.period])
if(t)return t.replace(SE,h)
break
case Ih:const n=e.loc.stringWithCounts(d,[g,u.period])
if(n)return n.replace(_h,p).replace(SE,h)
break
case Sh:const r=e.loc.stringWithCounts(d,[c.period,g,u.period])
if(r)return r.replace(_h,p).replace(SE,h)
break
default:return null}return null}function Gc(e,t,n){return t===Kv?n?pk:hC:n?BO:sk}function Vc(e,t,n,c){var a,u,l
if(o(t))return
if(!e.client.isPhone)return
let f=(null===(a=null==c?void 0:c.displayStyle)||void 0===a?void 0:a.metadataRibbon)||[]
const p=d(t,nC)
i(null===(u=null==p?void 0:p.displayStyle)||void 0===u?void 0:u.metadataRibbon)&&(f=null===(l=null==p?void 0:p.displayStyle)||void 0===l?void 0:l.metadataRibbon)
const h=function(e,t,n,i,c=AU){if(o(i))return[]
const a=[]
for(const u of i)if(!o(u))for(const o of u){const i=c[o]
if(r(i))continue
const u=i(e,t,n)
if(s(u)){a.push(u)
break}}return a}(e,t,n,f)
n.metadataRibbonItems=h,i(f)&&(n.impressionMetrics.fields.ribbons=h.map(e=>e.moduleType))}function Hc(e,t,n,r){t&&Ll.Do("copyDataIntoLockup",()=>{var o,c
const u=P(t,Lb)
if(r.isContainedInPreorderExclusiveShelf&&!u)return null
const f=ge(e,t)
n.productVariantID=Te(f),r.metricsOptions.productVariantData=f,n.adamId=t.id
const d=ke(e,t,Jv)
n.bundleId=d,n.decorations=[]
let p=null
r&&r.clientIdentifierOverride&&(p=r.clientIdentifierOverride),n.icon=Aa(e,t,{useCase:r.artworkUseCase},p,f),r&&r.titleObjectPath?n.title=ke(e,t,r.titleObjectPath):n.title=y(t,_k)
const h=Ja(e,t)
h&&!r.shouldHideArcadeHeader&&(n.heading=e.loc.string(Ip)),r.shouldShowFriendsPlayingShowcase&&n.decorations.push("showcaseFriendsPlaying")
const w=!h&&(null===(o=r.isMultilineTertiaryTitleAllowed)||void 0===o||o)
r.isSubtitleHidden||function(e,t,n){return Ll.Do("isBadgeMultilineFromData",()=>{if(!n)return!1
if(!va(0,t,!1))return!1
if(Jc(e,t))return!1
const r=Ca(e,t)
return Da(0,r,uk)||Da(0,r,mk)})}(e,t,w)||(n.subtitle=Yc(e,t)),n.tertiaryTitle=jc(e,t,w),n.tertiaryTitleAction=zc(e,t),n.developerTagline=ke(e,t,BR),n.editorialTagline=Ka(e,t,CC),n.editorialDescription=Ka(e,t,ok),n.shortEditorialDescription=Ka(e,t,sb),n.ageRating=y(t,_p),n.productDescription=ke(e,t,fR),ai(e,t)||(I(t,Sp)>0||!r||!r.hideZeroRatings)&&(n.rating=I(t,Op),n.ratingCount=e.loc.formattedCount(I(t,Sp)))
const g=_t(e,t,r.metricsOptions),m=Ut(e,t),T=null!==(c=null==r?void 0:r.includeBetaApps)&&void 0!==c&&c,A=nt(0,t,n.icon),E=W(g),_=Gt(e,m,t,u,T,A,E,tk,null==r?void 0:r.referrerData),S=a(m,eE)
let O=Yt(e,_,t,u,E,tk,r.ignoreIconInSidepack,p,r.shouldNavigateToProductPage)
s(r)&&i(r.externalDeepLinkUrl)&&(O=Dt(e,O,_.adamId,d,r.externalDeepLinkUrl,T,E),i(r.crossLinkSubtitle)&&(n.crossLinkTitle=e.loc.uppercased(y(t,_k)),n.crossLinkSubtitle=r.crossLinkSubtitle)),n.buttonAction=O
const R=ni(e,t)
if(R){const t=new BD,r=W(g)
r.actionType=mO,r.targetType=Wb,Rt(e,t,r)
const o=new TL
o.shareAction=t,o.shareSheetData=R,n.contextMenuData=o}const C=ha(0,t)
let v=!1
C&&(v=!(qt(0,Ut(e,C))>0))
const b=Gc(0,t.type,h)
n.offerDisplayProperties=r?Xt(e,_,b,t,u,r.offerStyle,r.offerEnvironment,S[0],v,tk,r.shouldNavigateToProductPage):Xt(e,_,b,t,u,null,null,S[0],v,tk),r&&r.skipDefaultClickAction||(n.clickAction=fa(e,t,g,{clientIdentifierOverride:p,ignoreIconInSidepack:r.ignoreIconInSidepack,productVariantData:f})),r&&r.ordinal&&(n.ordinal=r.ordinal)
const k=ve(e,t,rC)
if(k){const e=l(k,LS),t=e&&e===$S
n.isEditorsChoice=t}n.flowPreviewActionsConfiguration=oi(e,t,!1,p,n.clickAction,r.metricsOptions,g,r.externalDeepLinkUrl),n.children=qc(e,t,r),n.includeBetaApps=T,n.developerName=y(t,Fv)
const D=Gn(e,t,n,A,r.metricsOptions,r.canDisplayArcadeOfferButton)
Bn(0,n,D)})}function qc(e,t,n){const r=se(t,Pk)
return r?sa(e,r,{lockupOptions:n,filter:0}):null}function Wc(e,t,n,r,i){var c
if(!t)return
if(i.isNetworkConstrained)return
const a=null!==(c=i.metricsOptions.isAdvert)&&void 0!==c&&c
Ll.Do("copyMediaIntoMixedMediaLockup",()=>{n.screenshots=_a(e,t,4,null,i.clientIdentifierOverride,null,a)
const c=n.screenshots[0]
n.trailers=[]
const u=Ea(e,t,r,i.metricsOptions,n.adamId,a)
s(u)&&(o(c)||u.mediaPlatform.isEqualTo(c.mediaPlatform))&&n.trailers.push(u)})}function Yc(e,t){return Ll.Do("subtitleFromData",()=>ke(e,t,BR)||Kc(e,t))}function jc(e,t,n=!1){return Ll.Do("badgeFromData",()=>{if(va(0,t,!1)){let r=""
const o=Ca(e,t)
if(Da(0,o,uk)?r="DESIGNED_FOR_PAD":Da(0,o,mk)&&(r="DESIGNED_FOR_PHONE"),i(r))return Jc(e,t)||(r+="_NOT_VERIFIED",n&&(r+="_EXPANDED")),e.loc.string(r)}return null})}function zc(e,t){return Ll.Do("badgeActionFromData",()=>{if(!va(0,t,!1))return null
if(Jc(e,t))return null
const n=Ca(e,t)
if(!Da(0,n,uk)&&!Da(0,n,mk))return null
const r=new wD(bb)
return r.pageUrl=`https://apps.apple.com/story/id${e.bag.appleSiliconMacUnverifiedBadgeEditorialItemId}`,r})}function Jc(e,t){if(!e.appleSilicon.isSupportEnabled)return!0
const n=De(e,t,Rp,nb)
return!!s(n)&&n}function Kc(e,t){return Ll.Do("categoryFromData",()=>{const n=ke(e,t,Cp)
if(i(n))return n
const r=ce(t,vp)
if(r.length>0){let e=r[0]
const t=6014..toString()
if(e.id===t)for(const n of r){const r=y(n,rE)
if(n.id!==t&&r===t){e=n
break}}return y(e,_k)}{const e=A(t,oE)
return e.length>0?e[0]:null}})}function Zc(e,t,n){const r=(new dx).param(b$.id,n).param(k$.inAppPurchaseId,t).build()
return`${R$.internal}:/${C$.product}/${C$.install}/?${r}`}function Xc(e,t,n){return Ll.Do("lockupFromData",()=>{var r
if(!t)return Ll.bm(Hb,XR),null
const i=to(0,t)
n.metricsOptions.isAdvert=i
const c=(function(e){var t
null===(t=mt(e))||void 0===t||t.id,gt(e)}(n.metricsOptions.locationTracker),!1)
if(n.metricsOptions.isAdEligible=c,(i||c)&&s(null===(r=n.metricsOptions.pageInformation)||void 0===r?void 0:r.iAdInfo)&&n.metricsOptions.pageInformation.iAdInfo.apply(e,t),!_(t))return null
switch(t.type){case Kv:return n.offerEnvironment=bp,Qc(e,t,n)
case Tk:const r=ie(t,sk)
if(o(r))return null
const s=new AL
return Hc(e,r,s,n),s
default:const a=new AL
return Hc(e,t,a,n),(i||c)&&no(e,t,a,n.metricsOptions),a}})}function Qc(e,t,n){return Ll.Do("inAppPurchaseLockupFromData",()=>{const r=new SL
return function(e,t,n,r){t&&Ll.Do("copyDataIntoInAppPurchaseLockup",()=>{Hc(e,t,n,r)
const o=ha(0,t)
if(!o)return
n.productIdentifier=y(t,lS),n.parent=Xc(e,o,r),n.description=y(t,fR),n.isVisibleByDefault=P(t,"isMerchandisedVisibleByDefault"),n.isSubscription=P(t,JI)
const s=Ut(e,t),i=a(s,eE)
n.offerDisplayProperties.hasDiscount=i.length>0,n.offerDisplayProperties.subscriptionFamilyId=y(t,"subscriptionFamilyId")
const c=new wD(KI)
c.presentationContext=mC
const u=Zc(0,n.adamId,o.id)
c.pageUrl=u
const l=new lD
l.parentLockup=W(n.parent),l.lockup=W(n),l.preInstallOfferDescription=Bc(e,s),c.pageData=l
const f=y(t,lS),d=ke(e,o,Jv),p=y(o,"firstVersionSupportingInAppPurchaseApi")
if(p){const t=new _D(f,o.id,d,c,p)
n.parent&&(t.appTitle=n.parent.title),t.productTitle=n.title
const s={...r.metricsOptions,id:n.adamId,idType:qR,actionDetails:{parentAdamId:o.id}}
Rt(e,t,s),n.buttonAction=t}else{const t=new ND(tk)
t.title=e.loc.string("SEED_IN_APP_UNSUPPORTED_MESSAGE_OPTION_1"),t.message="",t.isCancelable=!0,n.buttonAction=t}const h=Gn(e,t,n,lR,r.metricsOptions,r.canDisplayArcadeOfferButton)
if(!r||!r.skipDefaultClickAction){const r=aa(e,t,h)
n.clickAction=r,n.productAction=r}!function(e,t,n){t&&(t.impressionMetrics||Bn(0,t,n),t.parent&&t.parent.adamId&&(t.impressionMetrics.fields.parentAdamId=Ze(t.parent.adamId)))}(0,n,h)},tE)}(e,t,r,n),r})}function ea(e,t,n){return Ll.Do("screenshotsLockupFromData",()=>{const r=new yL
return function(e,t,n,r){t&&Ll.Do("copyDataIntoScreenshotsLockup",()=>{Hc(e,t,n,r),n.screenshots=_a(e,t,4,null,r.clientIdentifierOverride)})}(e,t,r,n),r})}function ta(e,t,n,r,o=null){return Ll.Do("mixedMediaLockupFromData",()=>{const s=new EL
return Hc(e,t,s,n),Vc(e,t,s,o),Wc(e,t,s,r,n),na(e,t,s,o),s})}function na(e,t,n,r){var o
if(!e.client.isPhone)return
const i=l(t.meta,"displayStyle.screenshots")
s(i)?n.screenshotsDisplayStyle=i:s(null===(o=null==r?void 0:r.displayStyle)||void 0===o?void 0:o.screenshots)&&(n.screenshotsDisplayStyle=r.displayStyle.screenshots)}function ra(e,t,n,r,o,s=!0){return Ll.Do("mixedMediaAdLockupFromData",()=>{const i=new EL
return P(t,"iad.format.images")?(Wc(e,t,i,r,n),function(e,t,n,r){if(!function(e,t){const n=function(e,t,n){return Ie(ge(e,t),n)}(e,t,zI)
return!n}(e,t))return
const o=A(t,"iad.assetOverride")
if(o.length){const e=function(e,t,n){const r=new Set(n),o=[],s=[],i=function(e,t){if(0===r.size)return!1
for(const o of n)if(o===t||-1!==e.indexOf(o))return r.delete(o),!0
return!1}
if(n.length&&(t.screenshots.length||t.trailers.length)){if(t.trailers.length)for(const e of t.trailers[0].videos)i(e.videoUrl,e.preview.checksum)&&o.push(e)
if(t.screenshots.length)for(const e of t.screenshots[0].artwork)i(e.template,e.checksum)&&s.push(e)}return!(0!==r.size||!o.length&&!s.length||(t.trailers.length&&(t.trailers[0].videos=o),t.screenshots.length&&(t.screenshots[0]=new $k(s,t.screenshots[0].mediaPlatform)),0))}(0,n,o)
r.pageInformation.iAdInfo&&r.pageInformation.iAdInfo.iAdIsPresent&&r.pageInformation.iAdInfo.setSpecifiedCreativeUsed(e)}}(e,t,i,n.metricsOptions),Hc(e,t,i,n),na(e,t,i,o)):(Hc(e,t,i,n),i.screenshots=[]),no(e,t,i,n.metricsOptions,s),Vc(e,t,i,o),i})}function oa(e,t,n,r,o,s){return Ll.Do("arcadeLockupFromData",()=>{const r=t.marketingItemData,c=new OL
c.title=e.loc.string("ARCADE_LOCKUP_TITLE","Apple Arcade")
const a=t.marketingItemData
n={...n,mercuryMetricsData:rt(0,a)}
let u,l=ao(0,r)
i(l)&&(l=l.replace(/\n/g," "),c.subtitle=l,c.nonsubscribedSubtitle=l,c.subscribedSubtitle=l)
const f=co(0,r)
u=lo(e,t.marketingItemData,0,n),u.title=f,c.unsubscribedButtonAction=u
const d=fn(0,n.pageInformation,n.locationTracker)
d.title=e.loc.string(SR,OR),c.subscribedButtonAction=d
const p=Vn(e,t.marketingItemData,c.title,n)
p.displaysArcadeUpsell=!0,Bn(0,c,p)
const h=new kk(pk,e.bag.arcadeAppAdamId,o,null,s,null,null,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId)
return h.titles[ZI]=e.loc.string(SR,OR),c.offerDisplayProperties=h,c})}function sa(e,t,n){return r(t)?[]:ia(e,t.data,n)}function ia(e,t,n){return Ll.Do("lockupsFromData",()=>{if(!t)return[]
const o=[]
let i=!1
for(let c=0;c<t.length&&!i;c++){const a=t[c]
if(r(a.attributes)){n.contentUnavailable&&(i=n.contentUnavailable(a.id,c))
continue}const u=n.lockupOptions
let l=30718
if(n.includeOrdinals){const r=n.ordinalDirection===kp?t.length-c:c+1
u.ordinal=e.loc.decimal(r).toString()}if(s(n.filter)&&(l=n.filter),Ue(e,a,l))continue
n.excludeIconInSidepacksIfNotTvOnly&&(Oe(e,a,OC)||(u.ignoreIconInSidepack=!0))
const f=Xc(e,a,u)
!r(f)&&f.isValid()&&(o.push(f),At(n.lockupOptions.metricsOptions.locationTracker))}return o})}function ca(e,t,n,r,o=!1,i=null){return Ll.Do(`actionFromData: ${t.type}`,()=>{switch(t.type){case Pk:case lk:return fa(e,t,n,{clientIdentifierOverride:r,ignoreIconInSidepack:o,externalDeepLinkUrl:i})
case Kv:return aa(e,t,n)
case Kb:return la(e,t,n,r)
case XI:return function(e,t,n){return t?Ll.Do("msoActionFromPlatformData",()=>{const r=y(t,Ek)
if(!r)return Ll.bm(Hb,Ik,Ek),null
const o=new wD(bS)
return o.pageUrl=r,o.title=y(t,_k),Rt(e,o,n),o}):null}(e,t,n)
case Mv:return function(e,t,n){return t?Ll.Do("groupingActionFromData",()=>{if(!t.href)return Ll.bm(Hb,Ik,e_),null
const r=new wD(ak)
return r.pageUrl=C(e,function(e,t){const n=[Qb,Zb,qv,tb,Vb,ev]
e.appleSilicon.isSupportEnabled&&n.push(Pb)
const r=new B$(e,t).includingAttributes(n).includingMacOSCompatibleIOSAppsWhenSupported(),o=X(e)
return s(o)&&r.addingQuery(JR,o),r}(e,t.href)).toString(),r.title=da(0,t),Rt(e,r,n),r}):null}(e,t,n)
default:return function(e,t,n){return t?Ll.Do("genericActionFromData",()=>{const r=l(t,nv),o=y(t,Ek)
if(!o)return Ll.bm(Hb,Ik,Ek),null
const s=new wD(ak)
return s.pageUrl=o,s.title=r===Mv?da(0,t):y(t,_k),Rt(e,s,n),s}):null}(e,t,n)}})}function aa(e,t,n){return Ll.Do("iAPActionFromData",()=>{var r
const o=ha(0,t)
if(!o)return null
const i=new wD(ob),c=sN.from(y(o,Ek)),a=Te(null!==(r=n.productVariantData)&&void 0!==r?r:ge(e,o))
s(a)&&c.param(b$.productVariantID,a)
const u=c.toString(),l=y(t,lS),f=P(t,JI)
return i.pageUrl=function(e,t,n,r){const o=(new dx).param(D$.url,t).param(b$.offerName,n).param(D$.isSubscription,r.toString()).build()
return`${R$.internal}:/${C$.product}/${C$.lookup}/?${o}`}(0,u,l,f),i.title=y(t,_k),Rt(e,i,n),i})}function ua(e){return o(e)?0:Ll.Do(Dp,()=>{if(function(e){const t=l(e,yI)
return t&&t===ty}(T(e,vb)))return 1
const t=y(e,cv),n=t===RR||t===QI
if(P(e,IO)||n)return 2
const r=ce(e,eb),o=ce(e,Ib),s=i(r)&&1===r.length,c=i(o)&&1===o.length
return c&&o[0].type===Tk||s&&r[0].type===Tk?4:c?3:0})}function la(e,t,n,c,a){return o(t)?null:Ll.Do(Dp,()=>{let u,f
switch(ua(t)){case 1:return function(e,t,n){return Ll.Do("editorialItemExternalLinkActionFromData",()=>{const r=l(T(t,vb),Ek),o=new TD(r),s=Ka(e,t,sb)
if(s)o.title=s
else{const e=new sN(r)
o.title=e.host}return Rt(e,o,n),o})}(e,t,n)
case 2:u=bb
const d=sN.from(y(t,Ek))
s(a)&&d.param(b$.recoMetrics,JSON.stringify(a)),f=d.build()
break
case 3:const p=ce(t,Ib)[0]
return ca(e,p,n,c)
case 4:const h=ce(t,eb),w=i(h)&&1===h.length?h[0]:ce(t,Ib)[0],g=ie(w,sk)
if(o(g))return null
const m=on(e,w,g,!1,!1,rk,_b,!0,!1,n,!1,!0)
return r(m)||m instanceof Date?null:an(e,w,g,m,n,!0)
default:u=wk,f=l(T(t,vb),Ek)}const d=new wD(u)
d.pageUrl=f
let p=Ka(e,t,_k)
return r(p)&&(p=l(t,Eb)),d.title=p,Rt(e,d,n),d})}function fa(e,t,n,r){var o,c,a,u
if(!t)return null
const f=null!==(o=r.clientIdentifierOverride)&&void 0!==o?o:null,d=null!==(c=r.ignoreIconInSidepack)&&void 0!==c&&c,p=null!==(a=r.externalDeepLinkUrl)&&void 0!==a?a:null,h=null!==(u=r.productVariantData)&&void 0!==u?u:ge(e,t)
return Ll.Do("productActionFromData",()=>{let r=y(t,Ek)
if(!r)return Ll.bm(Hb,Ik,Ek),null
let o={}
const c=new sN(r)
if(n.isAdvert){const e=l(t,Np)
null!==e&&e.length>0&&c.param(Kx,e)
const r=n.pageInformation.iAdInfo.clickFields
c.param(Jx,JSON.stringify(r)),o={iAdClickFields:g(r),iAdLineItem:e}}const a=Te(h)
s(a)&&c.param(b$.productVariantID,a),o.externalDeepLinkUrl=p,s(p)&&c.param(gx,p),o.clientIdentifierOverride=f,i(f)&&c.param(Lp,f),r=c.toString()
const u=new wD(ob)
return u.pageUrl=r,u.pageData=Fc(e,t,o,d),u.title=y(t,_k),n&&n.pageInformation&&(u.referrerUrl=n.pageInformation.pageUrl),P(t,Lb)?Rt(e,u,{...n,offerType:gv,offerReleaseDate:Ht(0,t)}):Rt(e,u,n,!0),u})}function da(e,t){const n=A(t,oE)
return i(n)?n[0]:y(t,_k)}function pa(e,t){if(!t)return!1
const n=function(e,t,n){return ke(e,t,va(0,t,n)?Pb:tb)}(e,t,e.appleSilicon.isSupportEnabled)
if(o(n))return!0
const r=n.split(" ")
return e.client.deviceHasCapabilities(r)}function ha(e,t){return t?ie(t,sk):null}function wa(e,t){switch(t){case vO:case wy:case Jb:return 1
case Tb:return 2
case ES:return 3
default:return 0}}function ga(e,t,n){return Ll.Do("artworkFromApiArtwork",()=>{const o=!!s(n.allowingTransparency)&&n.allowingTransparency,i=!!s(n.withJoeColorPlaceholder)&&n.withJoeColorPlaceholder,c=l(t,Ek)
if(r(c))return null
const a=u(t,"hasP3"),d=[qe(e,o,a,n.useCase)]
let p
if(u(t,"supportsLayeredImage"),o)p=le("clear")
else if(i){const e=ae(l(t,kI))
r(e)||(p=e)}r(p)&&(p=le(dd))
const h=new Lk(c,n.overrideWidth||f(t,DI),n.overrideHeight||f(t,NI),d)
return h.backgroundColor=p,h.checksum=l(t,gy),s(n.style)&&(h.style=n.style),s(n.cropCode)&&(h.crop=n.cropCode),h})}function ma(e,t,n,r){return Ll.Do(pd,()=>{const o=Aa(e,t,r)
if(!s(o))return null
const i=new uL(o),c=y(t,_k)
return Bn(0,i,Vn(e,t,c,n)),i})}function Ta(e,t,n,r){return Ll.Do(pd,()=>{const s=[]
o(n.targetType)&&(n.targetType=nk)
for(const o of t){const t=ma(e,o,n,r)
t&&(s.push(t),At(n.locationTracker))}return s})}function Aa(e,t,n,o,i){return Ll.Do("iconFromData",()=>{if(!t)return Ll.bm(Hb,XR),null
const c=t.type
let a
switch(o){case ON:case RN:a=nb
break
case vN:a=RC
break
default:a=$e(e,t)}const u=o||e.host.clientIdentifier,l=te(t,a,my)
if((u===ON||Ne(e,t,AC))&&s(l))return ga(e,l,{...n,style:LI})
const f=Ya(e,t),d=qa(e,t)&&(u===RN||f),p=te(t,a,Ty)
if(d&&s(p))return ga(e,p,{...n,style:PS})
let h
return c===Kv?(h=T(t,nk),ga(e,h,{...n,style:lR})):c===lk?(h=T(t,nk),ga(e,h,{...n,style:IS,allowingTransparency:!0})):(r(i)&&(i=ge(e,t)),h=function(e,t,n,r){return Fe(e,t,r,nk,n)}(e,t,a,i),ga(e,h,a===RC||o===vN?{...n,style:$I}:a===tv?{...n,style:Ay,allowingTransparency:!0}:{...n,style:IS}))})}function ya(e,t,n,r){if(!t)return null
const o=function(e,t){switch(t){case QR:return HU/DU.width
case eC:return qU/bU.width
case Iy:return WU/PU.width
case xI:return YU/IU.width
case yy:return jU/xU.width
case Py:return ZU/FU.width
default:return null}}(0,n),s=function(e,t){switch(t){case Ey:return JU
case yy:return KU
case Py:return XU
default:return null}}(0,n),i=function(e,t){return t===Ey?zU/$U.width:null}(0,n)
return new xk(t,n,r,o,s,i)}function Ea(e,t,n,r,o,s=!1){const i=Pa(e,t,n,null,null,s)
if(!i)return null
const c=i.videos,a=[]
if(c&&c.length>0)for(const t of c)po(e,t,{...r,id:o}),a.push(t)
let u=null
return a.length>0&&(u=new _L,u.videos=a,u.mediaPlatform=i.mediaPlatform),u}function Pa(e,t,n,o=null,i=null,c=!1){return Ll.Do("platformVideoPreviewFromData",()=>{r(i)&&(i=ge(e,t))
const u=function(e,t,n,r,o){return Fe(e,t,n,r?by:UC,void 0)}(e,t,i,c),p={}
if(!u)return null
let h=Ra(e,t,e.host.clientIdentifier,e.client.deviceType)
if(s(o)){const e=[]
for(const t of h)o.includes(t)&&e.push(t)
h=e}if(0===h.length)return null
for(const t of h){const r=Fa(e,t,e.client.screenSize)
for(const t of Object.keys(u)){const r=a(u,t),o=[]
for(const s of r){const r=d(s,TR)
if(!r){Ll.bm(Hb,bO,`videoPreviewsByType.${t}.previewFrame`)
continue}const i=l(s,bv)
if(!i){Ll.bm(Hb,Ik,`videoPreviewsByType.${t}.video`)
continue}const c=We(e,l(r,Ek),f(r,DI),f(r,NI),null,l(r,gy))
o.push(new eD(i,c,n))}p[t]=o}for(const e of r)if(p[e])return new EU(p[e],ya(0,t,e))}return null})}function Ia(e,t){return Ll.Do("videoPreviewsFromApiPlatformData",()=>{const n=Pa(e,t,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}})
return n?n.videos:[]})}function _a(e,t,n,o=null,s,i,c=!1){return Ll.Do("screenshotsFromData",()=>{const a=[]
r(i)&&(i=ge(e,t))
let u=o
if(!u||0===u.length){const n=s||e.host.clientIdentifier
let r=e.client.deviceType
n===ON&&(r=Ok),u=Ra(e,t,n,r)}for(const r of u){const o=[]
let s
if(r===yb?(s=ja(e,t,nb),Wa(e,t,nb)&&o.push("faceTime")):s="tv"===r?za(e,t,i,c,RC):r===Sk?za(e,t,i,c,tv):za(e,t,i,c),!s)continue
const u=Oa(e,s,r,n,o)
u&&a.push(u)}return a})}function Sa(e,t,n,r=null,o=null,s){return function(e,t){const n=[]
if(t&&t.length>0){const e=t.map(e=>e.mediaPlatform)
for(const r of t){const t=[]
for(const e of r.artwork){const n=new pL
n.screenshot=e,t.push(n)}const o=r.mediaPlatform,s=new hL(t,o,e)
n.push(s)}}return n}(0,_a(e,t,n,r,s,o))}function Oa(e,t,n,r,o){const s=function(e,t){return t===yb?e.client.deviceType===uk?uk:mk:t}(e,n),c=Fa(e,s,e.client.screenSize)
let u,l=null
for(let e=0;e<c.length&&!i(l);e++)l=a(t,c[e]),u=c[e]
if(i(l)){const t=l.map(function(t){return ga(e,t,{useCase:r})}),s=ya(0,n,u,o)
return new $k(t,s)}return null}function Ra(e,t,n,r){return j(t,`sortedAppPlatformsFromData.${n}.${r}`,()=>{const o=Ca(e,t),s=[]
let i=[]
const c=function(e,t){-1===i.indexOf(e)&&-1===s.indexOf(e)&&-1!==o.indexOf(e)&&(i.push(e),t&&s.push(t))}
switch(n){case ON:c(Ok)
break
case RN:c(yb)}switch(r){case mk:c(mk)
break
case uk:c(uk)
break
case"tv":c("tv")
break
case Ok:c(Ok)
break
case Sk:c(Sk)}return e.appleSilicon.isSupportEnabled?(c(uk),c(mk)):(c(mk),c(uk)),c(Sk),c("tv"),c(Ok),c(yb),i=i.filter(function(e){return-1===s.indexOf(e)}),i})}function Ca(e,t){return t?j(t,"supportedAppPlatformsFromData",()=>{const n=qa(e,t,nb),r=Ya(e,t),o=function(e,t){return Ne(e,t,qv)}(e,t),s=A(t,hd),i=[]
for(const e of s)switch(e){case Hv:r||i.push(mk)
break
case ib:r||i.push(uk)
break
case OC:i.push("tv")
break
case Ok:i.push(Ok)}return n&&i.push(yb),o&&i.push(Ok),Se(e,t,Sk)&&i.push(Sk),i}):null}function va(e,t,n){return n&&P(t,lf)}function ba(e,t,n){if(va(0,t,n)){const n=ke(e,t,"minimumMacOSVersion")
if(i(n))return n}return ne(t,$e(e,t),Vb)}function ka(e,t,n){switch(t){case mk:return[mk,yb]
case uk:return[mk,uk,yb]
case"tv":return["tv"]
case Ok:return[Ok]
case Sk:return n?[Sk,mk,uk]:[Sk]
default:return[]}}function Da(e,t,n){return-1!==t.indexOf(n)}function Na(e,t,n,r,o=!0){const s=function(e,t,n){switch(t){case mk:return[mk,Ok,yb,"tv"]
case uk:return[mk,uk,yb,"tv"]
case"tv":return["tv"]
case Ok:return[Ok]
case Sk:return n?[Sk,mk,uk]:[Sk]
default:return[]}}(0,n,r)
return!!s.some(e=>Da(0,t,e))}function La(e,t){var n
const o=new yU
if(e.client.deviceType!==Sk)return o
if(t.type!==lk)return o.runsOnIntel=null===(n=De(e,t,"runsOnIntel",xe(e)))||void 0===n||n,o.runsOnAppleSilicon=Ne(e,t,"runsOnAppleSilicon",xe(e)),o.requiresRosetta=Ne(e,t,wd,xe(e)),o
const s=ce(t,Pk)
if(0===s.length)return o
for(const t of s){if(r(t.attributes))continue
const n=La(e,t)
o.runsOnIntel=o.runsOnIntel&&n.runsOnIntel,o.runsOnAppleSilicon=o.runsOnAppleSilicon&&n.runsOnAppleSilicon,o.requiresRosetta=o.requiresRosetta||n.requiresRosetta}return o}function $a(e,t,n,r){const o=La(e,t)
return n?o.runsOnAppleSilicon&&(!o.requiresRosetta||o.requiresRosetta&&r):o.runsOnIntel}function xa(e,t,n,r){const o=function(e,t,n){switch(t){case mk:return[mk,Ok,yb]
case uk:return[mk,uk,yb]
case"tv":return["tv"]
case Ok:return[Ok]
case Sk:return n?[Sk,mk,uk]:[Sk]
default:return[]}}(0,n,r)
return o.some(e=>Da(0,t,e))}function Fa(e,t,n){switch(t){case Sk:return[Sk]
case Ok:return[yy,Ey,Py]
case"tv":return["appleTV"]
case uk:{const t=[]
return n.isEqualTo(DU)&&e.client.screenCornerRadius>0?(t.push(QR),t.push(eC),t.push(AR),t.push(yR),t.push(ib)):n.isEqualTo(kU)?(t.push(AR),t.push(QR),t.push(eC),t.push(yR),t.push(ib)):n.isEqualTo(bU)||n.isEqualTo(NU)||n.isEqualTo(LU)?(t.push(eC),t.push(QR),t.push(AR),t.push(yR),t.push(ib)):n.isEqualTo(vU)?(t.push(yR),t.push(ib),t.push(eC),t.push(AR),t.push(QR)):n.isEqualTo(MU)?(t.push(eC),t.push(AR),t.push(QR),t.push(yR),t.push(ib)):n.isEqualTo(CU)?(t.push(ib),t.push(yR),t.push(eC),t.push(AR),t.push(QR)):(t.push(QR),t.push(eC),t.push(ib),t.push(yR),t.push(AR)),t}case mk:{let e
e=n.isEqualTo(PU)||n.isEqualTo(GU)?Iy:n.isEqualTo(IU)||n.isEqualTo(UU)||n.isEqualTo(BU)?xI:n.isEqualTo(RU)?Hv:n.isEqualTo(OU)?gd:n.isEqualTo(SU)?md:n.isEqualTo(_U)?Td:xI
const t=VU.indexOf(e),r=VU.slice(0,t)
r.reverse()
const o=VU.slice(t+1)
return[e].concat(r,o)}default:return[]}}function Ma(e,t){if(r(t))return null
{const n=T(t,cd)
if(n){let t=[]
e.client.thinnedApplicationVariantIdentifier&&(t=e.client.thinnedApplicationVariantIdentifier.split(" ")),t=t.concat([e.host.deviceModel,"universal"])
for(const e of t){const t=f(n[e])
if(t)return t}}}return null}function Ua(e,t,n){let r,i=null,c=null,a=null,u=null
switch(e.client.deviceType){case Sk:n.supportsArcade?(i=_y,a="sr"):(i="editorialArtwork.centeredFullscreenBackground",a="ep")
break
case"tv":n.presentedInTopShelf?(i=Ad,a="sr"):(i=_y,a="ta",c="editorialArtwork.fullscreenBackground",u="sr")
break
default:n.supportsArcade?n.prefersCompactVariant||e.client.isPhone?(i="editorialArtwork.splashTall",a="oc"):(i=_y,a="oh"):(i=FI,a="sr")}return r=ve(e,t,i),null!==c&&o(r)&&(r=ve(e,t,c),null!==u&&(a=u)),s(r)&&s(a)?ga(e,r,{cropCode:a,useCase:20,withJoeColorPlaceholder:!0,overrideHeight:null,overrideWidth:null}):null}function Ba(e,t,n,o,c){let a=[]
if(i(o))a=o
else switch(e.client.deviceType){case Sk:case"tv":a=[Sy]
break
case uk:a=[Oy]
break
default:a=[Ry]}let u=null,f=null
for(const n of a)if(u=ve(e,t,[Zb,n]),f=ve(e,t,[Zb,n,TR]),i(u))break
const d=null!=c?c:ga(e,f,{useCase:n,withJoeColorPlaceholder:!0,cropCode:"sr"})
if(s(u)){const e=l(u,bv)
if(r(e))return null
let t,n
return t={prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},n={muteUnmute:!0},new eD(e,d,{allowsAutoPlay:!0,looping:!0,canPlayFullScreen:!1,showPlaybackControls:!1,playbackControls:t,autoPlayPlaybackControls:n})}return null}function Ga(e,t,n){let r=null
switch(e.client.deviceType){case Sk:case"tv":case mk:r=[Sy,Oy,Ry]
break
default:r=[Oy,Sy,Ry]}return Ba(e,t,20,r,n)}function Va(e,t){return s(t)?`${R$.internal}:/${C$.developer}/${C$.href}?${b$.href}=${t.href}`:null}function Ha(e,t){switch(t){case SN:case bN:return"appStore"
case ON:return Ok
case RN:return yb
case vN:return Cy
default:return null}}function qa(e,t,n){return Ne(e,t,"hasMessagesExtension",n)}function Wa(e,t,n){return Ne(e,t,cy,n)}function Ya(e,t){return Ne(e,t,"isHiddenFromSpringboard")}function ja(e,t,n){return ve(e,t,iy,n)}function za(e,t,n,r,o){return Fe(e,t,n,r?vy:QC,o)}function Ja(e,t){return Ne(e,t,eI)}function Ka(e,t,n){return Za(e,t,n)||ke(e,t,["itunesNotes",n])}function Za(e,t,n){return ke(e,t,[ER,n])}function Xa(e,t){return j(t,"isMacOSInstaller",()=>!1)}function Qa(e,t){const n=Me(e)
return!(!function(e,t,n){if(n&&Me(e).isDeletableSystemAppFromData(t)){const e=y(t,"watchBundleId")
if(i(e))switch(e){case"com.apple.podcasts.watchkitapp":case"com.apple.Home.watchkitapp":case"com.apple.mobilemail.watchkitapp":case"com.apple.news.watchkitapp":case"com.apple.iBooks.watchkitapp":return!0
default:return!1}}return!1}(e,t,e.client.isTinkerWatch)&&(!e.client.isTinkerWatch||(n.isDeletableSystemAppFromData(t)?Ne(e,t,$A)||Ne(e,t,AC):Ne(e,t,LA)||Ne(e,t,AC))))}function eu(e,t){if(r(t)||0===t.length)return!0
const n=t.split("."),o=f(n[0])||0,s=f(n[1])||0,i=f(n[2])||0
return e.host.isOSAtLeast(o,s,i)}function tu(e,t){return!r(t)&&0!==t.length&&e.client.isActivePairedWatchSystemVersionBelow(t)}function nu(e,t){switch(t){case Jb:case Tb:case kO:case DO:case _S:case PO:case MI:return!0
default:return!1}}function ru(e,t,n){const r=Ne(e,t,eI),o=Ut(e,t)
if(l(o,nv)===gv&&r){const n=l(o,SS),r=ke(e,t,ev)
if(i(r)){if(i(n)){const t=B(n)
let o=e.loc.formatDate(e.loc.string("MMM y"),t),s=e.loc.formatDate(e.loc.string("MMM d, y"),t)
return r.replace("@@expectedDateMY@@",o).replace("@@expectedDateMDY@@",s)}return r}}return n}function ou(e,t){const n=ie(t,eb)
return i(n)?n:Ne(e,t,IO)?ie(t,Ib):null}function su(e){const t=pe(e,QU)
return null===t||0===t}function iu(e,t,n,r){const o=gt(r.locationTracker),s={impressionIndex:o,id:o.toString(),idType:Mb,name:t.displayName,impressionType:n,parentId:ug}
t.impressionMetrics=new cD(s)}function cu(e,t,n,r,o){const i=p(r,$l.pageInformation,{}),c=p(r,$l.timingValues),a=l(r,$l.requestedUrl)
let u
const f=i
if(f.pageType=t,f.pageId=n,o&&(f[NR]=o),t===vR){const t=$(r),n=y(t,_k),o=y(t,Fv)
f[NR]=`${o}_${n}`,Ja(e,t)&&(f[BS]=xC),u=ge(e,t)}else t===T_?f[NR]=`${t}_${n}`:t===vC&&(f[NR]=Xp)
const d=new Xx(Qe(f))
d.timingMetrics=c,d.pageUrl=a,s(u)&&(d.productVariantData=u)
const h=l(r,Jx)
if(h){const e=JSON.parse(h),t=Zx.placementTypeFromPlacementId(l(e,qC))
d.iAdInfo=new Zx(t,l(e,Tv)),d.iAdInfo.applyClickFieldsFromPageRequest(n,e)}return d.recoMetricsData=U(r),d}function au(e,t,n,r,o){const s=new Xx({pageType:t,pageId:n,page:`${t}_${n}`,pageDetails:r})
if(o){const e=Zx.placementTypeFromPlacementId(l(o,qC))
s.iAdInfo=new Zx(e,l(o,Tv)),s.iAdInfo.applyClickFieldsFromPageRequest(n,o)}return s}function uu(e,t,n,o){r(n)||(t.pageMetrics.pageFields=Lt(n),t.pageMetrics.addManyInstructions(mu(e,n,o)),t.pageMetrics.addData(hu(e,n,o),[Nl.lo.pageEnter]),t.pageMetrics.pageRenderFields=gu(0,n,o),t.pageRenderMetrics=gu(0,n,o),t instanceof VN||t.pageMetrics.addData(wu(e,n,o),[Nl.lo.backButton]))}function lu(e,t,n){const r=new Xx({pageId:qO,pageType:vC})
return r.pageUrl=n,r}function fu(e,t,n,r,s,c,a,u){const f=l(n,[nC,MC,fh]),d=cu(e,vC,f,n)
return d.searchTermContext=r,d.searchTerm=r.term,d.pageUrl=s,u&&(d.guidedSearch=function(e,t,n){const r={}
if(i(t.guidedSearchTokens)&&(r.searchSelectedGuidedFacets=t.guidedSearchTokens),n&&n.finalTerm&&(r.searchGuidedFinalQuery=n.finalTerm),!o(r))return r}(0,t,u)),null!=c&&(d.iAdInfo=new Zx(PC,c.iAdId,c.appStoreClientRequestId,a)),d}function du(e,t){if(r(t)||r(t.pageMetrics))return
const n=t.pageMetrics.instructions
if(!r(n))for(const e of n)e.data.fields[HC]===ak&&e.data.includingFields.push(iE)
let o=null
if(t instanceof o$?o=t:t instanceof T$&&(o=t.lockup),o){const e=[]
if(o.buttonAction instanceof yD)e.push(o.buttonAction)
else if(o.buttonAction instanceof ED&&o.buttonAction.buyAction instanceof yD)e.push(o.buttonAction.buyAction)
else if(o.buttonAction instanceof PD&&o.buttonAction.completionAction instanceof yD)e.push(o.buttonAction.completionAction)
else if(o.buttonAction instanceof SD){if(o.buttonAction.buyAction instanceof yD&&e.push(o.buttonAction.buyAction),o.buttonAction.defaultAction instanceof yD&&e.push(o.buttonAction.defaultAction),o.buttonAction.openAction instanceof yD&&e.push(o.buttonAction.openAction),o.buttonAction.subscribePageAction instanceof wD&&o.buttonAction.subscribePageAction.page===ry&&i(o.buttonAction.subscribePageAction.pageUrl)){const e=sN.from(o.buttonAction.subscribePageAction.pageUrl)
e.param(b$.includePostSubscribeAttribution,$v),o.buttonAction.subscribePageAction.pageUrl=e.build()}o.buttonAction.subscribePageAction instanceof wD&&o.buttonAction.subscribePageAction.pageData instanceof A$&&o.buttonAction.subscribePageAction.pageData.postSubscribeAction instanceof yD&&e.push(o.buttonAction.subscribePageAction.pageData.postSubscribeAction),o.buttonAction.subscribePageAction instanceof wD&&o.buttonAction.subscribePageAction.pageData instanceof I$&&o.buttonAction.subscribePageAction.pageData.purchaseSuccessAction instanceof yD&&e.push(o.buttonAction.subscribePageAction.pageData.purchaseSuccessAction)}for(const t of e)t.purchaseConfiguration&&(t.purchaseConfiguration.excludeAttribution=!1)}}function pu(e){Object.keys(e).filter(e=>!eB.has(e)).forEach(t=>delete e[t])}function hu(e,t,n){var r,o,i,c,a
const u=Tu(t,n)
t.iAdInfo&&Object.assign(u,t.iAdInfo.pageFields),s(t.offerReleaseDate)&&(u[pE]=G(t.offerReleaseDate))
const l=t.searchTermContext
l&&(u[mv]=l.term,l.suggestedTerm&&(u.searchSuggestedTerm=l.suggestedTerm),l.correctedTerm&&(u.searchCorrectedTerm=l.correctedTerm),l.originatingTerm&&(u[gE]=l.originatingTerm)),t.guidedSearch&&Object.assign(u,t.guidedSearch)
const f=function(e,t,n,r,o){const s={}
Object.assign(s,o),s[HC]=ak,r&&(s[Fp]=r.clientCorrelationKey,s.requestStartTime=r.requestStartTime,s.responseStartTime=r.responseStartTime,s.responseEndTime=r.responseEndTime)
const i=[CR,t_]
return n&&e.props.enabled(Mp)&&i.push(Mp),st(0,new rD(s,i,[],lt(0,s),ut(e,s)))}(e,0,null!==(r=t.isCrossfireReferralCandidate)&&void 0!==r&&r,t.timingMetrics,u),d=null!==(i=null===(o=t.iAdInfo)||void 0===o?void 0:o.iAdIsPresent)&&void 0!==i&&i,p=null!==(a=null===(c=t.iAdInfo)||void 0===c?void 0:c.shouldIncludeAdRotationFields)&&void 0!==a&&a
return d&&p&&f.includingFields.push(VO),f}function wu(e,t,n){return function(e,t){const n={}
return Object.assign(n,t),n[WR]=xp,it(e,xp,fk,n)}(e,Tu(t,n))}function gu(e,t,n){const r=Tu(t,n)
return t.searchTermContext&&(r[mv]=t.searchTermContext.term),t.baseFields&&Object.assign(r,t.baseFields),function(e,t,n){const r={}
return Object.assign(r,n),r[HC]="pageRender",t&&(r[n_]||(r[n_]=t.pageURL),r[Fp]=t.clientCorrelationKey,r.platformRequestStartTime=t.requestStartTime,r.platformResponseStartTime=t.responseStartTime,r.platformResponseEndTime=t.responseEndTime,r.platformResponseWasCached=t.responseWasCached,r.platformJsonParseStartTime=t.parseStartTime,r.platformJsonParseEndTime=t.parseEndTime),r}(0,t.timingMetrics,r)}function mu(e,t,n){var r,o
const i=Tu(t,n)
t.searchTermContext&&(i[mv]=t.searchTermContext.term),function(e){return!!e.client.isPhone&&!e.props.enabled("impressionsAppendixWorkaround")&&!!eu(e,dh)}(e)&&s(t.impressionsAppendix)&&(i[Bp]=t.impressionsAppendix)
const c=W(i)
t.iAdInfo&&Object.assign(c,t.iAdInfo.impressionsFields),t.guidedSearch&&Object.assign(c,t.guidedSearch)
const a=[{data:at(e,c,null!==(o=null===(r=t.iAdInfo)||void 0===r?void 0:r.shouldIncludeAdRotationFields)&&void 0!==o&&o,su(e)),invocationPoints:[Nl.lo.appExit,Nl.lo.pageExit]}]
if(s(t.iAdInfo)){const n=function(e,t,n){var r,o
const i=null!==(o=null===(r=n.iAdInfo)||void 0===r?void 0:r.shouldIncludeAdRotationFields)&&void 0!==o&&o,c=at(e,t,i,!1).fields
if(c[FS]=cE,s(n.iAdInfo)){const e=n.iAdInfo.fastImpressionsEventVersion
c[r_]=e,5===e&&(c.viewableArea="excludingTabBar",delete c[qC])}const a=["fastImpressions",CR,t_]
return i&&a.push(VO),st(0,new rD(c,a,[],lt(0,c),ut(e,c)))}(e,c,t)
a.push({data:n,invocationPoints:[Nl.lo.appExit,Nl.lo.pageExit,Nl.lo.timer]})}return a}function Tu(e,t){const n={}
return s(e.offerType)&&(n[US]=e.offerType),n&&t&&t(n),n}function Au(e,t){switch(t){case UA:return function(e){const t=Eu(e,e.bag.accountUrl)
return t.title=e.loc.string("VIEW_ACCOUNT_INFO",yf),t.actionMetrics.data.push(yu(e,cI)),t}(e)
case cI:return function(e){const t=Eu(e,nf)
return t.title=e.loc.string("ACCOUNT_CREATE_APPLE_ID","Create New Apple ID"),t.actionMetrics.data.push(yu(e,mb)),t}(e)
case cR:return function(e){if(e.user&&e.user.isManagedAppleID)return null
const t=Eu(e,e.bag.redeemUrl)
return t.title=e.loc.string("ACCOUNT_REDEEM",BA),t.actionMetrics.data.push(yu(e,cR)),t}(e)
case aI:return function(e){if(!e.bag.isMonetaryGiftingEnabled)return null
const t=Eu(e,tS)
return t.title=e.loc.string("ACCOUNT_SEND_GIFT",Ef),t.actionMetrics.data.push(yu(e,aI)),t}(e)
case uI:return function(e){var t
const n=e.bag.accountTopUpURL
if(o(n))return null
const r=Eu(e,n)
return r.title=null!==(t=e.bag.accountTopUpTitle)&&void 0!==t?t:e.loc.string("ACCOUNT_TOP_UP"),r.actionMetrics.data.push(yu(e,uI)),r}(e)
case AO:return function(e){const t=new UD(xC)
return t.title=e.loc.string("ACCOUNT_SETUP_FAMILY_SHARING"),t.actionMetrics.data.push(yu(e,AO)),t}(e)
case lI:return function(e){const t=Eu(e,e.bag.manageSubscriptionsV2Url)
return t.title=e.loc.string("ACCOUNT_SUBSCRIPTIONS"),t.presentationContext=GA,t.actionMetrics.data.push(yu(e,lI)),t}(e)
default:return null}}function yu(e,t){return it(e,t,"menuItem",{})}function Eu(e,t){const n=e.bag.dynamicUIRegexStrings
for(const e of n)if(new RegExp(e).test(t)){const e=new wD(aS,t)
return e.pageData=new _$,e}const r=e.bag.webViewRegexStrings
for(const e of r)if(new RegExp(e).test(t))return new wD(uS,t)
return new wD(lb,t)}function Pu(e,t){const r=[],o=new nB,s={}
s[e.loc.string(OP)]=new wD(lb,mb)
const c=new qk(e.loc.string("PERSONALIZATION_DESCRIPTION_FOOTER_OPTED_IN").replace("{account_settings}",e.loc.string(OP)))
o.footer=new NL(c,s)
const a=new Wk(e.loc.string("PERSONALIZATION_DESCRIPTION_OPTED_IN"),jv,RP)
if(o.addContentItem(new iB(a)),r.push(o),e.props.enabled("personalizedRecommendationsClearAppUsageData")){const t=new nB(e.loc.string("PERSONALIZATION_SECTION_USAGE_HEADER")),n=new qk(e.loc.string("PERSONALIZATION_SECTION_USAGE_FOOTER"))
t.footer=new NL(n),t.addContentItem(new oB(e.loc.string("PERSONALIZATION_SECTION_USAGE_CLEAR_DATA"),function(e){const t=new eN
t.title=e.loc.string("PERSONALIZATION_CLEAR_USAGE_DATA_CONFIRMATION_TITLE")
const n=new DD([t])
return n.title=e.loc.string("PERSONALIZATION_CLEAR_USAGE_DATA_CONFIRMATION_HEADER"),n.isCancelable=!0,n.destructiveActionIndex=0,n}(e))),r.push(t)}const u=new nB(e.loc.string("PERSONALIZATION_INTERACTIONS")),f=new qk(e.loc.string("PERSONALIZATION_INTERACTIONS_FOOTER"))
u.footer=new NL(f),u.addContentItem(new oB(e.loc.string("PERSONALIZATION_PURCHASES"),Iu(ef,null,!0),aO)),u.addContentItem(new oB(e.loc.string("PERSONALIZATION_SUBSCRIPTIONS"),Iu(lb,aB,!1),aO)),u.addContentItem(new oB(e.loc.string("PERSONALIZATION_PREORDERS"),Iu(lb,"https://finance-app.itunes.apple.com/preorders",!0),aO)),u.addContentItem(new oB(e.loc.string("PERSONALIZATION_RATINGS"),Iu(lb,"https://itunes.apple.com/WebObjects/MZStore.woa/wa/genericPageTemplate?pageComponent=finance_internet_eraser_page&additionalResources=p7financebootstrap",!0),aO)),r.push(u)
const d=new nB(e.loc.string("PERSONALIZATION_ADDITIONAL_INFO")),p=[e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_1"),e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_2"),e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_3"),e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_4"),e.loc.string("PERSONALIZATION_ADDITIONAL_INFO_ITEM_5")].join("\n"),h=new Wk(p,jv,RP)
d.addContentItem(new iB(h)),r.push(d)
const w=n(t,"results.derived-user-info")
if(i(w)){const t=new nB(e.loc.string("ACCOUNT_INFO")),n=["gender","birthyear"]
for(const e of n){const n=l(w,`${e}.label`),r=l(w,`${e}.value`)
i(n)&&i(r)&&t.addContentItem(new sB(n,r))}const o=new qk(e.loc.string("PERSONALIZATION_ACCOUNT_INFO_FOOTER"))
t.footer=new NL(o),r.push(t)}return new tB(e.loc.string(Lg),r)}function Iu(e,t,n){const r=new wD(e,t)
return n&&(r.presentationContext=GA),r}function _u(e){PB||(PB=!0,IB=new uB(e.loc.string("PAGE_FACETS_SORTS_RELEASE_DATE"),pB,Z_),_B=new uB(e.loc.string("PAGE_FACETS_SORTS_LAST_UPDATED"),hB,"lastUpdated"),SB=new uB(e.loc.string("PAGE_FACETS_SORTS_NAME"),wB,_k),OB=new uB(e.loc.string("PAGE_FACETS_SORTS_CATEGORY"),gB,hR),RB=new uB(e.loc.string("PAGE_FACETS_DEFAULT_ALL"),null),CB=new uB(e.loc.string("PAGE_FACETS_FILTERS_AGE_VALUE_4PLUS"),"4Plus"),vB=new uB(e.loc.string("PAGE_FACETS_FILTERS_AGE_VALUE_9PLUS"),"9Plus"),bB=new uB(e.loc.string("PAGE_FACETS_FILTERS_AGE_VALUE_12PLUS"),"12Plus"),kB=new uB(e.loc.string(Wf),$v),DB=new uB(e.loc.string(Yf),$v),NB=new uB(e.loc.string(jf),$v),EB[b$.sort]={releaseDate:[IB],lastUpdated:[_B],name:[SB],category:[OB]},EB[b$.ageRating]={"4plus":[CB],"9plus":[vB],"12plus":[bB]},EB[b$.controllerSupport]={true:[kB],false:[]},EB[b$.multiplayerSupport]={true:[DB],false:[]},EB[b$.comingSoon]={true:[NB],false:[]})}function Su(e,t={}){_u(e)
const n={"filter[ageRating]":[RB]}
n[mB]=[IB],n[TB]=[NB]
const r=[b$.sort,b$.ageRating,b$.controllerSupport,b$.multiplayerSupport,b$.comingSoon]
for(const e of r){const r=t[e]
if(o(r))continue
const c=EB[e][r],a=LB[e]
s(c)&&i(a)&&(n[`${a}`]=c)}return n}function Ou(e,t){const n=new BD
return vt(e,n,t),n}function Ru(e){const t=[Qb,Zb,qv,tb,UC,QC]
return e.appleSilicon.isSupportEnabled&&t.push(Pb),t}function Cu(e,t,n){return Ll.Do("createShelves",()=>{const r=[]
if(0===t.length)return r
let o=!1
for(const i of t)if(o=o||!_(i.data[0]),o)n.remainingGroups.push(i)
else{const t={index:n.lastShelfIndex,title:ku(e,i),contentType:(s=n.isCompactMode,s?Jb:kO),shouldFilter:!1,remainingContent:i.data,groupKind:i.kind,isCompactMode:n.isCompactMode,hasExistingContent:!1,isFirstRender:!0,metricsPageInformation:n.metricsPageInformation,metricsLocationTracker:n.metricsLocationTracker},o=vu(e,t)
r.push(o),n.lastShelfIndex++}var s
return r})}function vu(e,t){const n=[],r=new XL(t.contentType)
r.title=t.title,r.presentationHints={showSupplementaryText:!1},r.isHorizontal=t.groupKind===JA||t.groupKind===hR
const s={id:`${t.index}`,kind:null,softwareType:null,targetType:zb,title:r.title,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,idType:Mb}
for(Bn(0,r,s),pt(s,r.title);i(t.remainingContent)&&_(t.remainingContent[0]);){const r=t.remainingContent.shift(),o={metricsOptions:{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:U(r)},artworkUseCase:1,canDisplayArcadeOfferButton:nu(0,t.contentType),shouldHideArcadeHeader:e.featureFlags.isEnabled($O)},s=ta(e,r,o,{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0}})
Du(e,s,r)&&(s.editorialTagline=null,s.developerTagline=null,n.push(s),At(t.metricsLocationTracker))}return r.mergeWhenFetched=t.hasExistingContent,t.hasExistingContent=t.hasExistingContent||n.length>0,r.items=n,i(t.remainingContent)?r.url=function(e){return o(e.remainingContent)?null:`${R$.internal}:/${C$.arcadeSeeAllGames}/${C$.shelf}/?${b$.token}=${encodeURIComponent(JSON.stringify(e))}`}(t):"tv"!==e.client.deviceType&&t.isCompactMode&&r.items.length<$B&&(r.rowsPerColumn=r.items.length),wt(t.metricsLocationTracker),r}function bu(e,t){const n=Su(e,t),r={}
for(const e of Object.keys(n))r[e]=n[e].map(e=>({value:e.value,title:e.title,metricsValue:e.metricsValue}))
const o={url:`${R$.internal}:/${C$.arcadeSeeAllGames}`,isCompactMode:!1,selectedFacetOptions:r},s=t[b$.requestDescriptor]
if(i(s)){const e=p(JSON.parse(s))
o.isCompactMode=e.isCompactMode,Object.assign(o.selectedFacetOptions,e.selectedFacetOptions)}return o}function ku(e,t){let n,r,o=null,s=null
switch(t.kind){case"releaseDateByDay":o=t.name.split("-"),s=new Date(parseInt(o[0]),parseInt(o[1])-1,parseInt(o[2])),r=e.loc.string("ALL_GAMES_SECTION_TITLE_RELEASE_DATE_SENTENCE"),n=e.loc.formatDateInSentence(r,xg,s)
break
case"lastUpdatedByDay":o=t.name.split("-"),s=new Date(parseInt(o[0]),parseInt(o[1])-1,parseInt(o[2])),r=e.loc.string("ALL_GAMES_SECTION_TITLE_LAST_UPDATED_SENTENCE"),n=e.loc.formatDateInSentence(r,xg,s)
break
case JA:n=e.loc.string(OE)
break
default:n=t.name}return n}function Du(e,t,n){let r=!0
if(!i(t.trailers)){r=!1
const o=Ga(e,n)
if(i(o)){const e=new _L
o.playbackControls={prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},o.autoPlayPlaybackControls={prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!0},o.canPlayFullScreen=!0,e.videos=[o],t.trailers=[e],r=!0}}return r||function(e){const t=e.screenshots[0]
if(o(t))return
const n=t.artwork[0],r=new eD(xB,n,{allowsAutoPlay:!1,looping:!1,canPlayFullScreen:!1,showPlaybackControls:!1,autoPlayPlaybackControls:{},playbackControls:{}}),s=new _L
s.videos=[r],e.trailers=[s]}(t),i(t.trailers)}function Nu(e){let t=0,n=0
for(const r of e.shelves)i(r.batchGroup)||(r.batchGroup=`shelfBatchGroup_${t}`,n++,5===n&&(n=0,t++))}function Lu(e,t){const n=new gD(pk)
n.popToRoot=!0
const r=new AD([n])
return r.title=t,r}function $u(e,t){const n=new oF(t.targetingData,e.random.nextUUID()),r=Fu(e,t)
if(!r)return null
const c=b(e,r,function(e,t){const n={}
return t&&t.validAdRequest()&&(n[sU]=t.appStoreClientRequestId,n[oU]=t.sponsoredSearchRequestData,n[iU]=t.routingInfo),{headers:n}}(0,n)),a=async function(e,t,n,r){var i
if(!t.validAdRequest())return Cn(e,"ODML fetch skipped - Malformed request"),{adverts:[],error:"invalidAdRequest"}
const c=await r,a=function(e,t){const n=x(t.results[rg]),r=[]
for(const t of n){const n=l(t,"id"),s=T(t,rP)
if(o(n)||o(s))continue
let i=null,c=null
e.bag.enableCPPInSearchAds&&(i=Te(ge(e,t)),c=ye(e,t)),r.push({instanceId:e.random.nextUUID(),adamId:n,assetInformation:{},adData:s,cppIds:c,serverCppId:i,selectedCppId:i})}return r}(e,c),u=function(e,t,n){const r=x(t.results.search),s=[]
for(const e of r){const t=l(e,"id")
o(t)||s.push({adamId:t,assetInformation:{}})}return s}(0,c)
try{if(e.isAvailable(TN)){if(e.props.enabled("installedStatesForAdverts")&&e.client.isPhone){const t=await e.ads.processAdvertsForSponsoredSearchAndNativeState(a,u,n,e.bag.sponsoredSearchODMLTimeout)
return s(t.error)?Cn(e,`ODML processing failed - ${t.error}`):Cn(e,"ODML processing completed"),{adverts:null!==(i=t.adverts)&&void 0!==i?i:a,error:t.error,installedStates:t.installedStates}}{const t=await e.ads.processAdvertsForSponsoredSearch(a,u,n,e.bag.sponsoredSearchODMLTimeout)
return Cn(e,"ODML fetch completed"),{adverts:t}}}return Cn(e,"ODML fetch skipped - Unsupported client"),{adverts:a,error:"unsupportedClient"}}catch(t){return Cn(e,`ODML fetch failed - ${t}`),{adverts:a,error:"uncategorizedError"}}}(e,n,t.term,c),u=function(e){let t=null
if(function(e,t){switch(t){case uk:case Sk:return!0
default:return!1}}(0,e.client.deviceType)){const n=Po(e,null,null,K(e))
n&&(t=b(e,n).catch(()=>null))}return t}(e),f=function(e){let t=null
const n=e.bag.searchTransparencyAdamId
return i(n)&&(t=b(e,new B$(e).forType(Kb).withIds([n]).includingAdditionalPlatforms(K(e))).catch(()=>null)),t}(e)
return Promise.all([c,a,u,f]).then(([o,i,c,a])=>(function(e){const t=U(e),n="dataSetId"
s(t)&&(e.meta.metrics[GB]=l(t,n),delete e.meta.metrics[n])}(o),{catalogResponse:o,categoriesFilterData:c,transparencyData:$(a),sponsoredSearchRequestData:n,sponsoredSearchAdvertData:i,requestMetadata:{requestDescriptor:t,searchRequestUrl:C(e,r).toString()}}))}function xu(e,t){const n=function(e,t){const n=new B$(e,t).includingAdditionalPlatforms(K(e)).includingScopedAttributes(Kb,[uP]).includingAttributes(Mu(e)).includingRelationshipsForUpsell(!0).includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes(we(e))
return _e(e,n,t),n.includingRelationships(VB),n}(e,t)
return b(e,n)}function Fu(e,t){var n
const r=null===(n=t.term)||void 0===n?void 0:n.trim()
if(o(r))return null
const s=t.origin,c=t.searchEntity,a=t.facets,l=t.selectedFacetOptions,f=t.spellCheckEnabled,d=t.excludedTerms,p=e.host.clientIdentifier,h=new B$(e).withSearchTerm(r).includingAdditionalPlatforms(K(e)).includingAttributes(Mu(e)).includingScopedAttributes(Kb,[uP]).includingRelationshipsForUpsell(!0).includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes(we(e))
if(h.includingRelationships(VB),Qt(e)&&(h.includingAssociateKeys(Pk,[Tk]),h.includingScopedAttributes(Tk,[dk,Zv,Xv]),h.includingScopedRelationships(Kb,[eb])),u(e.client.isTinkerWatch)&&h.withFilter(JR,eg),h.enablingFeature(F_),i(t.guidedSearchTokens)&&h.addingQuery("selectedFacets",t.guidedSearchTokens.join(",")),i(t.guidedSearchOptimizationTerm)&&h.addingQuery("finalTerm",t.guidedSearchOptimizationTerm),c===hS?h.searchingOverTypes([Kb]):c===Bv?h.searchingOverTypes([ZR]):c===Ok||c===pk?h.searchingOverTypes([Pk]).withFilter(JR,c):h.searchingOverTypes([Pk,ZR,Mv,Kb,lk,Kv]),e.appleSilicon.isSupportEnabled&&!e.appleSilicon.isRosettaAvailable&&h.addingQuery("restrict","!requiresRosetta"),a)for(const e of Object.keys(a))h.addingQuery(e,a[e])
if(l)for(const e of Object.keys(l)){const t=dB.requestValuesForSelectedFacetOptions(l[e])
if(i(t)){h.addingQuery(e,t.value)
for(const e of Object.keys(t.additionalKeyValuePairs))h.addingQuery(e,t.additionalKeyValuePairs[e])}}switch(s===qO?h.addingQuery(tO,mE):s===kR?h.addingQuery(tO,kR):s===TE?h.addingQuery(tO,"searchInstead"):s===AE?h.addingQuery(tO,eh):s===lP&&h.addingQuery(tO,"facet"),p){case ON:h.addingContext(Ok)
break
case RN:h.addingContext(yb)
break
case CN:h.addingContext(pk)}return h.addingQuery("limit[ads-result]",e.bag.mediaAdvertRequestLimit.toString()),i(e.bag.adsOverrideLanguage)&&h.enablingFeature("adsLocaleMetadata"),f&&h.enablingFeature("spellCheck"),d&&h.addingQuery("excludeTerms",d.join(",")),h}function Mu(e){const t=[QC,iy,UC,tb,rC,cy,Vb,vy,by]
return e.appleSilicon.isSupportEnabled&&t.push(Pb),e.host.isOSAtLeast(15,5,0)&&t.push(VR),t}function Uu(e,t){return Ll.Do("developerPageFromResponse",()=>{const n=t.data.length?t.data[0]:null
if(!n)return null
const r=cu(e,"Artist",n.id,t),s=function(e,t,n,r){switch(e.client.deviceType){case Sk:return function(e,t,n,r){e.appleSilicon.isSupportEnabled?(qu(t,wv,[OO,yS]),qu(t,OO,[yS])):qu(t,wv,[OO])
const s=Jb
let i=0
const c=[]
for(const u of qB){const l=se(t,u),f=a(l,XR),d=f.length
if(0===d)continue
const p=Gu(e,u,t)
pt({pageInformation:n,locationTracker:r,idType:Mb,id:`${i}`,targetType:zb},p)
const h={lockupOptions:{metricsOptions:{pageInformation:n,locationTracker:r},artworkUseCase:1},filter:22260},w=Vu(e,f,s,h)
if(w.title=p,l.next){const o=new wD(ak),s=new HB
s.title=p,s.href=l.href,s.developerId=t.id,s.relationshipId=u,o.pageUrl=Hu(0,s),o.title=e.loc.string(ov),w.seeAllAction=o,Ct(e,o,o.pageUrl,{pageInformation:n,locationTracker:r}),o.pageData=Xr(0,p)}if(u===KR&&0===d)continue
const g=f.filter(e=>o(e.attributes)),m=w.items.length+g.length
m<3&&(w.rowsPerColumn=m)
const T={id:null,kind:null,softwareType:null,targetType:zb,title:w.title,pageInformation:n,locationTracker:r,idType:null}
if(wt(r),Bn(0,w,T),At(r),g.length){const e=new YB
e.contentType=Jb,e.remainingData=g,e.lockupListOptions=h,w.url=`${R$.internal}:/${C$.developer}/${C$.shelf}/`+encodeURIComponent(JSON.stringify(e))}w.items.length>0&&(c.push(w),i++)}return c}(e,t,n,r)
case Ok:return function(e,t,n,r,s,i,c){const a=ce(n,r),u={lockupOptions:{metricsOptions:{pageInformation:i,locationTracker:c},artworkUseCase:1},filter:22260}
pt({pageInformation:i,locationTracker:c,idType:Mb,id:"0",targetType:zb},s)
const l=Vu(e,a,t,u),f=a.filter(e=>o(e.attributes)),d={id:null,kind:null,softwareType:null,targetType:zb,title:s,pageInformation:i,locationTracker:c,idType:null}
if(wt(c),Bn(0,l,d),At(c),f.length){const e=new YB
e.contentType=t,e.remainingData=f,e.lockupListOptions=u,l.url=`${R$.internal}:/${C$.developer}/${C$.shelf}/`+encodeURIComponent(JSON.stringify(e))}return[l]}(e,Jb,t,LF,e.loc.string(Vd),n,r)
default:return function(e,t,n,r){let s,i
qu(t,wv,[vI,AS]),"tv"===e.client.deviceType?(s=Tb,i=2):(s=Jb,i=1)
let c=0
const u=[]
for(const l of WB){const f=se(t,l),d=a(f,XR),p=d.length
if(0===p)continue
let h,w=!1
l===bI?h=RN:l===TS?h=ON:l===AS?(h=vN,"tv"!==e.client.deviceType&&(w=!0)):h=SN
const g=Bu(e,l,t)
pt({pageInformation:n,locationTracker:r,idType:Mb,id:`${c}`,targetType:zb},g)
const m={excludeIconInSidepacksIfNotTvOnly:w,lockupOptions:{metricsOptions:{pageInformation:n,locationTracker:r},clientIdentifierOverride:h,artworkUseCase:i},filter:22260},T=Vu(e,d,s,m)
if(T.title=g,f.next){const o=new wD(ak),s=new HB
s.title=g,s.href=f.href,s.developerId=t.id,s.relationshipId=l,o.pageUrl=Hu(0,s),o.title=e.loc.string(ov),T.seeAllAction=o,Ct(e,o,o.pageUrl,{pageInformation:n,locationTracker:r}),o.pageData=Xr(0,g)}if(l===KR&&0===p)continue
const A=d.filter(e=>o(e.attributes)),y=T.items.length+A.length
y<3&&(T.rowsPerColumn=y)
const E={id:null,kind:null,softwareType:null,targetType:zb,title:T.title,pageInformation:n,locationTracker:r,idType:null}
if(wt(r),Bn(0,T,E),At(r),A.length){const e=new YB
e.contentType=Jb,e.remainingData=A,e.lockupListOptions=m,T.url=`${R$.internal}:/${C$.developer}/${C$.shelf}/`+encodeURIComponent(JSON.stringify(e))}T.items.length>0&&(u.push(T),c++)}return u}(e,t,n,r)}}(e,n,r,{rootPosition:0,locationStack:[]})
1===s.length&&(s[0].isHorizontal=!1)
const i=Ka(e,n,ok)
if(i){const e=new Wk(i,BC),t=new XL(hv)
t.items=[e],s.unshift(t)}const c=new uD(s)
c.title=y(n,_k),e.client.deviceType!==Ok&&(c.presentationOptions=[rv]),uu(e,c,r)
const u=T(n,FI)
if(u){const t=ga(e,u,{cropCode:"sr",useCase:20})
if(c.uber=t,e.featureFlags.isEnabled("shelves_2_0_generic")){const e=new XL("uber"),n=new KM(Bd)
n.artwork=t,e.items=[n],n.title=c.title,s.unshift(e),c.presentationOptions.push($y),c.presentationOptions.push(Gd)}}return c})}function Bu(e,t,n){switch(t){case KR:return e.loc.string(Hd)
case dy:return e.loc.string("DEVELOPER_SYSTEM_APPS")
case bI:return e.loc.string("DEVELOPER_IMESSAGE")
case TS:return e.loc.string(Vd)
case AS:return e.loc.string("DEVELOPER_TV")
case lk:return e.loc.string(qd)
case vI:const t=P(n,Wd),r=P(n,Yd)
return t&&r?e.loc.string(jd):r?e.loc.string(zd):e.loc.string(Jd)
case wv:return e.loc.string(Kd)
default:return null}}function Gu(e,t,n){switch(t){case KR:return e.loc.string(Hd)
case lk:return e.loc.string(qd)
case OO:if(e.appleSilicon.isSupportEnabled)return e.loc.string("DEVELOPER_MAC_APPS")
{const t=P(n,Wd),r=P(n,Yd)
return t&&r?e.loc.string(jd):r?e.loc.string(zd):e.loc.string(Jd)}case yS:return e.loc.string("DEVELOPER_PHONE_PAD_APPS")
case wv:return e.loc.string(Kd)
default:return null}}function Vu(e,t,n,o){const i=new XL(n)
return n===DO?(i.items=function(e,t,n){return Ll.Do("screenshotsLockupsFromData",()=>{if(!t)return[]
const o=[]
for(let i=0;i<t.length;i++){const c=t[i]
if(r(c.attributes)){n.contentUnavailable&&n.contentUnavailable(c.id,i)
continue}const a=n.lockupOptions
let u=30718
if(s(n.filter)&&(u=n.filter),Ue(e,c,u))continue
const l=ea(e,c,a)
l.isValid()&&(o.push(l),At(n.lockupOptions.metricsOptions.locationTracker))}return o})}(e,t,o),i.isHorizontal=!1,i.presentationHints={showSupplementaryText:!1}):(i.items=ia(e,t,o),i.isHorizontal=e.client.deviceType!==Ok),i}function Hu(e,t){return s(t)?`${R$.internal}:/${C$.developer}/${C$.room}/`+encodeURIComponent(JSON.stringify(t)):null}function qu(e,t,n){const o=se(e,t)
if(r(o))return
const s=x(o)
if(r(s))return
const i=s.map(e=>e.id)
for(const t of n){const n=se(e,t)
if(r(n))continue
const o=x(n)
r(n)||(e.relationships[t].data=o.filter(e=>!i.includes(e.id)))}}function Wu(e,t,n){const r=function(e,t){switch(t){case jB:return"badge_hardware"
case zB:return"badge_trial_eligible"
default:return null}}(0,t),o=new I$(pk,wC,null,{offerHints:r})
o.metricsOverlay={...o.metricsOverlay,...n}
const s=new wD(FC)
return s.pageData=o,s}function Yu(e,t){return new B$(e).forType(XI).withIds([t]).includingRelationships([Pk,$P]).addingQuery("limit[channel-apps]","100")}function ju(e,t,n){return Ll.Do("msoRoomPageWithResponse",()=>{const r=$(t),o=cu(e,bC,r.id,t),s=ce(r,Pk),c=ce(r,$P)
for(const e of c){const t=ie(e,sk)
i(t)&&s.push(t)}const a=new BF
a.ids=s.map(e=>e.id),a.shouldFilter=!1,a.metricsPageInformation=o
const u=function(e,t,n,r,o=[]){return Ll.Do("msoRoomPageWithContext",()=>{const s=[],i=[]
for(const e of t)-1!==n.indexOf(e.id)?s.push(e):i.push(e)
const c={rootPosition:0,locationStack:[]},a={lockupOptions:{metricsOptions:{pageInformation:r.metricsPageInformation,locationTracker:c},artworkUseCase:2}},u=[],l={pageInformation:r.metricsPageInformation,locationTracker:c,targetType:zb,idType:Mb,id:"0"}
if(s.length>0){const t=e.loc.string("MSO_INCLUDED_IN_SUBSCRIPTION"),n=new BF
n.remainingContent=[],n.metricsPageInformation=r.metricsPageInformation,n.metricsLocationTracker=c,n.preferredShelfContentType=Tb,l.id="0",pt(l,t),a.contentUnavailable=function(e,t){return n.remainingContent.push(s[t]),!1}
const o=new XL(Tb)
o.title=t,o.shouldFilterApps=r.shouldFilter,o.items=ia(e,s,a),o.url=zu(n),wt(c),o.items.length>0&&(At(c),u.push(o))}if(s.length>0&&i.length>0){const t=e.loc.string("MSO_AVAILABLE_WITH_UPGRADED_SUBSCRIPTION"),n=new BF
n.remainingContent=[],n.metricsPageInformation=r.metricsPageInformation,n.metricsLocationTracker=c,n.preferredShelfContentType=Tb,l.id="1",pt(l,t),a.contentUnavailable=function(e,t){return n.remainingContent.push(i[t]),!1}
const o=new XL(Tb)
o.title=t,o.shouldFilterApps=r.shouldFilter,o.items=ia(e,i,a),o.url=zu(n),wt(c),o.items.length>0&&(At(c),u.push(o))}if(0===u.length){const n=new BF
n.remainingContent=[],n.metricsPageInformation=r.metricsPageInformation,n.metricsLocationTracker=c,n.preferredShelfContentType=Jb,l.id="0",pt(l,null),a.contentUnavailable=function(e,r){return n.remainingContent.push(t[r]),!1}
const o=new XL(Tb)
o.shouldFilterApps=r.shouldFilter,o.items=ia(e,t,a),o.url=zu(n),wt(c),At(c),u.push(o)}for(const e of u)e.isHorizontal=u.length>1
const f=o.concat(u)
return new uD(f)})}(e,s,n,a)
return u.title=y(r,_k),u.isIncomplete=!1,uu(e,u,o),u})}function zu(e){return e.remainingContent.length?`${R$.internal}:/${C$.mso}/${C$.shelf}/`+encodeURIComponent(JSON.stringify(e)):null}function Ju(e,t,n,r){if(o(n))return null
const s=new nG(n.displayLabel,lP)
!function(e,t,n,r){const o=F_,s=ag,i={actionType:o,location:dt({pageInformation:null,locationTracker:r.locationTracker,targetType:s},t.targetToken),searchTerm:n},c={targetId:t.targetToken},a=it(e,t.targetToken,s,i,[F_])
t.actionMetrics.addMetricsData(a)
const u=ct(e,n,s,o,null,c,[F_])
t.actionMetrics.addMetricsData(u)}(e,s,t.term,r)
const i=new eG(n.displayLabel,n.isSelected,n.displayLabel,s)
return iu(0,i,ag,r),i}function Ku(e,t,n){const r=W(t),s=W(t.attributes)
return s[rP]=n.adData,r.attributes=s,function(e,t,n){var r
const s=Te(ge(e,t))
if(n.selectedCppId===s||o(null===(r=null==t?void 0:t.meta)||void 0===r?void 0:r.cppData))return
const i=W(t.meta)
i.cppData[JO]=n.selectedCppId,t.meta=i}(e,r,n),Ln(0,r,n.instanceId),r}function Zu(e,t,n){const r=t||{},o=[]
e.client.deviceType!==Sk&&o.push(new qN(eO,[new WN(e.loc.string(oP),null,r[eO]),new WN(e.loc.string(zw),Hv,r[eO])])),o.push(new qN(gO,[new WN(e.loc.string(sP,fC),null,r[gO]),new WN(e.loc.string(Jw,fC),xA,r[gO])]))
const i=Io(e,n,!1)
if(i){const t=i.categories
if(t.length){const n=t.filter(e=>s(e.genreId)).map(e=>new WN(e.name,e.genreId,r[Nb]))
n.unshift(new WN(e.loc.string(iP,fC),null,r[Nb])),o.push(new qN(Nb,n))}}const c=e.bag.searchSortOptions,a=[]
a.push(new WN(e.loc.string(cP),null,r[kv]))
for(const t of c)a.push(new WN(e.loc.string(Kw+t),t,r[kv]))
a.length>1&&o.push(new qN(kv,a))
const u=e.bag.ageBands.map(e=>new WN(l(e,_k),l(e,Zw),r[uR]))
return u.length>0&&e.client.deviceType!==Sk&&o.push(new qN(uR,u)),o}function Xu(e,t){let n=null,r=null,o=null
const i=new lB(eO,e.loc.string("SEARCH_FACET_TYPE_TITLE_DEVICE_TYPE"),wR,null,[new uB(e.loc.string(oP),null),new uB(e.loc.string(zw),Hv)],null,null,el(e,eO)),c=new lB("filter[price]",e.loc.string("SEARCH_FACET_TYPE_TITLE_PRICE"),wR,e.loc.string("SEARCH_FACET_DEFAULT_ANY"),[new uB(e.loc.string(sP,fC),null),new uB(e.loc.string(Jw,fC),xA)],null,null,el(e,gO)),a=Io(e,t,!1)
if(a){const t=a.categories
if(t.length){const r=t.filter(e=>s(e.genreId))
n=new lB("filter[genre]",e.loc.string("SEARCH_FACET_TYPE_TITLE_CATEGORY"),wR,null,[new uB(e.loc.string(iP,fC),null)],null,null,el(e,Nb))
for(const e of r)n.options.push(new uB(e.name,e.genreId))}}const u=e.bag.searchSortOptions
r=new lB(kv,e.loc.string("SEARCH_FACET_TYPE_TITLE_SORT"),wR,null,[new uB(e.loc.string(cP),null)],null,null,el(e,kv))
for(const t of u)r.options.push(new uB(e.loc.string(Kw+t),t))
const f=e.bag.ageBands.map(e=>new uB(l(e,_k),l(e,Zw)))
f.length>0&&e.client.deviceType!==Sk&&(o=new lB("filter[ages]",e.loc.string("SEARCH_FACET_TYPE_TITLE_AGE_BAND"),wR,e.loc.string("SEARCH_FACET_DEFAULT_ALL"),f,null,null,el(e,uR)))
const d=new dB([],!1,null)
{const e=[i,c]
s(n)&&e.push(n),e.push(r),s(o)&&e.push(o)
for(const t of e)t.showsSelectedOptions=!0
d.facetGroups.push(new fB(e))}return d}function Qu(e){return{targetPlatform:[new uB(e.loc.string(oP),null)],"filter[price]":[new uB(e.loc.string(sP,fC),null)],sort:[new uB(e.loc.string(cP),null)],"filter[genre]":[new uB(e.loc.string(iP,fC),null)]}}function el(e,t){const n=new BD
return vt(e,n,t),n}function tl(e,t){if(!P(t,uP))return null
const n=y(t,dP)
if(i(n))return n
const r=y(t,Eb)
return i(r)?r.replace(/\n/g," "):null}function nl(e,t,n,c,l,f,d,p){return Ll.Do("searchResultFromData",()=>{let h=null
const w=t.type,g={metricsOptions:{pageInformation:l.pageInformation,locationTracker:l.locationTracker,targetType:NS},hideZeroRatings:!0,artworkUseCase:8,isNetworkConstrained:f,canDisplayArcadeOfferButton:nu(0,_S),clientIdentifierOverride:il(0,d),isMultilineTertiaryTitleAllowed:!1},m=function(e,t,n){var r,o
if(!function(e){return e.client.deviceType===mk}(e))return gb
const i=t.meta,c=null===(r=null==i?void 0:i.displayStyle)||void 0===r?void 0:r.condensed
if(s(c))return rl(e,c)
const a=null===(o=null==n?void 0:n.displayStyle)||void 0===o?void 0:o.condensed
return s(a)?rl(e,a):ol(e)}(e,t,p)
switch(w){case rO:case M_:case ZR:case Kb:case Mv:const f=$s(e,t,{useThreeLineOverlayForBranded:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,isSearchContext:!0},l)
if(f&&f.media&&f.media.kind===hC){const e=f.media.lockup
e.theme=rk,h=new QN(e)}else if(function(e,t,n){if(1!=(u(n,"experiments.showGridCard")?0:1))return!1
switch(t.type){case Mv:return i(A(t,pP))
case rO:case M_:return!0
case Kb:switch(y(t,cv)){case RR:case QI:case Av:case U_:return!0
default:return!1}default:return!1}}(0,t,n)){const n=function(e,t,n){const r=function(e,t){const n=tl(0,t)
return i(n)?n:e.loc.string("EDITORIAL_SEARCH_RESULT_TYPE_COLLECTION")}(e,t),s=Ka(e,t,_k),c=Vn(e,t,s,{targetType:NS,pageInformation:n.pageInformation,locationTracker:n.locationTracker})
pt(c,s)
const a=ca(e,t,{actionType:Qv,targetType:fk,pageInformation:n.pageInformation,locationTracker:n.locationTracker,id:Kp,idType:Mb},e.host.clientIdentifier)
a.title=e.loc.string(ov)
const u={lockupOptions:{metricsOptions:{pageInformation:n.pageInformation,locationTracker:n.locationTracker,targetType:Wb},artworkUseCase:8},filter:0},l=ia(e,ce(t,Ib),u)
wt(n.locationTracker)
const f=new oL(r,s,l,a)
return Bn(0,f,c),o(l)?null:f}(e,t,l)
n&&(h=n)}else{const n=function(e,t,n,o){return Ll.Do("editorialSearchResultFromData",()=>{let c=new rL
c.title=y(t,_k)
const a={pageInformation:n.pageInformation,locationTracker:n.locationTracker}
switch(e.client.deviceType,t.type){case Mv:const n=A(t,pP)
if(i(n))c.collectionAdamIds=n
else{const n=ga(e,T(t,nk),{useCase:9,allowingTransparency:!0})
c.iconArtwork=n}c.type=hR
break
case rO:case M_:c.artwork=ga(e,T(t,nk),{useCase:9,cropCode:"sr"}),c.collectionAdamIds=A(t,pP),c.type=ig
break
case Kb:c=function(e,t,n,o){const c={useThreeLineOverlayForBranded:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,isSearchContext:!0},a=e.props.enabled("condensedSearchStoriesArtworkCropOverride")
c.prevailingCropCode=o&&a?"DMGE.AppST01":"fo"
const u=$s(e,t,c,n)
if(!u)return null
const l=new rL
l.type=hS,l.title=u.title,l.clickAction=u.clickAction
let f=null
if(u.media)switch(u.media.kind){case pv:const e=u.media
switch(l.artwork=e.art,r(l.artwork)&&(l.iconArtwork=e.icon),y(t,cv)){case oO:case sO:const e=ie(t,Ib)
e&&(l.title=y(e,_k)||l.title)}break
case _A:case SA:f=u.media.lockups
break
case nk:const n=u.media
l.artwork=n.art
break
case iR:case Q_:f=u.media.lockups
break
case bv:const o=u.media
if(l.artwork=o.video.preview,l.video=o.video,u.overlay instanceof Ux){const e=u.overlay
l.title=e.title,l.subtitle=e.description}else l.subtitle=o.description
break
case oR:const i=u.media
if(l.artwork=i.artwork,l.appEventFormattedDates=i.formattedDates,l.subtitle=i.subtitle,l.tintColor=i.tintColor,l.type="appEventStory",s(u.style))switch(u.style){case ab:case Ub:l.mediaOverlayStyle=ab
break
case rk:l.mediaOverlayStyle=rk
break
default:de(u.style)}}if(u.overlay)switch(u.overlay.kind){case Wb:const e=u.overlay
l.artwork||(f=[e.lockup])
break
case Zl:f=u.overlay.lockups
break
case hv:const t=u.overlay
l.subtitle=t.paragraph.text}if(s(f)){l.collectionAdamIds=[],l.collectionAppIcons=[]
for(const e of f)l.collectionAdamIds.push(e.adamId),l.collectionAppIcons.push(e.icon)}const d=tl(0,t)
i(d)&&d!==l.title&&(l.tagline=d)
const p=u.heroMedia
return i(p)&&(i(p.art)?(l.artwork=p.art,l.artwork.crop="em"):i(p.video)&&(l.video=p.video)),l.video&&(l.video.showPlaybackControls=!1,l.video.canPlayFullScreen=!1,l.video.playbackControls={}),l.collectionAdamIds||l.artwork||l.iconArtwork?l:null}(e,t,a,o===LC)
break
case ZR:if(c.artwork=ga(e,T(t,FI),{useCase:9,cropCode:"sr"}),!c.artwork){let n=ce(t,Qw)
n=n.filter(t=>!Ue(e,t,22260))
const r=[],o=[]
n.forEach(t=>{r.push(t.id)
const n=Aa(e,t,{useCase:9})
s(n)&&o.push(n)}),c.collectionAdamIds=r,c.collectionAppIcons=o}c.type=Bv}if(c){if(null!=c.collectionAdamIds&&c.collectionAdamIds.length){const e=c.collectionAdamIds.length
c.artworkGridType=e<=8?GR:e<=16?cg:MO}const r=Vn(e,t,c.title,n)
c.clickAction=ca(e,t,r,null),Bn(0,c,r)}return c})}(e,t,g.metricsOptions,m)
n&&(n.title&&(n.title=n.title.replace(/\n/g," ")),n.subtitle&&(n.subtitle=n.subtitle.replace(/\n/g," ")),h=n)}break
case Kv:const d=Qc(e,t,g)
d.theme=rk,sl(e,d,p),h=new QN(d)
break
default:if(delete t.attributes[HR],w===lk){const n=function(e,t,n,r=null){return Ll.Do("bundleLockupFromData",()=>{const o=new RL
return function(e,t,n,r){t&&Ll.Do("copyDataIntoBundleLockup",()=>{Hc(e,t,n,r)
const o=se(t,Pk)
if(o){const t={lockupOptions:r}
n.children=sa(e,o,t)}})}(e,t,o,n),Vc(e,t,o,r),o})}(e,t,g,p)
sl(e,n,p),h=new eL(n)}else{const n=ta(e,t,g,{showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}},p)
sl(e,n,p)
const o=function(e,t,n,o,i,c){return Ll.Do("appEventSearchResultFromData",()=>{if(!Qt(e)||r(t.meta))return null
const l=a(t.meta,"associations.app-events.data")
if(l.length<=0)return null
const f=u(t.meta,"associations.app-events.attributes.forceAppEvent")
let d,p,h=[]
if(f)h.push(l[0])
else{p=Kn(e,Rb,l,!1,i,!1,null,t.id)
const n=p.personalizedData
if(n.length<=0)return null
h=n}const w={...c,targetType:IC},g={...o,metricsOptions:w}
let m
for(const n of h){const o=on(e,n,t,!1,!0,g.offerEnvironment,g.offerStyle,!1,!1,w,!1,!0)
if(!(r(o)||o instanceof Date)&&(d=o,s(d))){m=null!=t?t:ie(n,sk)
break}}if(r(d))return null
const T=new nL
T.lockup=n,T.appEvent=d,T.alwaysShowAppEvent=f,T.clickAction=n.clickAction
const A=ot(null,null==p?void 0:p.processingType,null),y={...c,id:d.appEventId,kind:jA,targetType:IC,title:d.title,softwareType:null,recoMetricsData:A}
return s(m)&&(y.relatedSubjectIds=[m.id]),Bn(0,T,y),T})}(e,t,n,g,c,l)
h=s(o)?o:new XN(n)}}return s(h)&&(h.condensedBehavior=m),h})}function rl(e,t){switch(t){case LC:return LC
case gb:return gb
case"when-installed":return sg
default:return ol(e)}}function ol(e){return e.client.deviceType===mk?sg:gb}function sl(e,t,n){const o=function(e,t,n,o){var s
if(r(t)||!e.client.isPhone)return null
const c=null===(s=null==t?void 0:t.displayStyle)||void 0===s?void 0:s.metadataPrecedenceOrder
if(!i(c))return null
const a=c.indexOf(n),u=c.indexOf(o)
return-1===a&&-1===u?null:-1!==a&&(-1===u||a<u)}(e,n,rC,ZO)
s(o)&&(t.isEditorsChoice=t.isEditorsChoice&&o)}function il(e,t){return t===Ok?ON:null}function cl(e,t,n,c,a,f=null,d=null){const p=[],h=[]
ht({pageInformation:c.pageInformation,locationTracker:c.locationTracker,targetType:HS},"")
const w=n||null
let g,m
if(i(f)){const n=function(e,t,n,c,a,l,f){var d,p
const h=new tL,w=null!==(d=c.requestDescriptor.isNetworkConstrained)&&void 0!==d&&d
if(pt({id:w_,kind:hh,softwareType:null,targetType:null,title:w_,pageInformation:a.pageInformation,locationTracker:a.locationTracker,idType:Mb},w_),o(t))return{result:h}
const g=n[0]
let m
Cn(e,`Adverts received from ad server: ${t.filter(s).map(e=>`[${e.id}]`).join(", ")}`)
let T=!0
for(const n of t){if(r(n))continue
if(Ue(e,n)){Cn(e,`[${n.id}] filtered by shouldFilter() - app probably not supported on current os or device`)
continue}const t=mn(n.id,null==g?void 0:g.id,l),s=_n(g,t)
if(n.attributes[HR]=In(n,s),o(n.attributes[HR])){Cn(e,`[${n.id}] filtered because no appropriate iAd dictionary was found. (Probably a server issue if hitting this)`)
continue}const c={metricsOptions:{pageInformation:a.pageInformation,locationTracker:a.locationTracker,targetType:NS,isAdvert:!0},hideZeroRatings:!0,artworkUseCase:8,isNetworkConstrained:w,canDisplayArcadeOfferButton:nu(0,_S)},d=u(ve(e,n,HR),"format.images"),A=o(m),E=Pn(ra(e,n,c,sF,f)),P=null===(p=null==f?void 0:f.displayStyle)||void 0===p?void 0:p.screenshots,I=Tn(e,E,n.id,s,d,m,P)
if(r(I)){Cn(e,`[${n.id}] will not be displayed because we could not create an ad style compatible with ${Rn(m)}`)
continue}if(!$n(e,n,null,I.style)){Cn(e,`[${n.id}] filtered because localization is not available`)
continue}A?(Cn(e,`[${n.id}] first ad dictates ad display style of: ${Rn(I)}`),m=I):Cn(e,`[${n.id}] will be displayed because it is compatible with the display style of: ${Rn(I)}, which is the same height as display style: ${Rn(m)}`),a.pageInformation.iAdInfo.apply(e,n)
let _=ra(e,n,c,sF,f)
if(_=Sn(_,I,t,T),"TEXT"===I.style){const t=y(n,If)
t!==cb&&(_.searchAd.advertisingText=ke(e,n,t===dk?fR:t)),h.displaysScreenshots=!1}i(_)&&(h.lockups.push(_),At(a.locationTracker),T=!1)}if(wt(a.locationTracker),i(h.lockups)){const n=t[0]
a.pageInformation.iAdInfo.apply(e,n),At(a.locationTracker)}return a.pageInformation.baseFields[u_]=m?m.style:null,h.condensedBehavior=gb,{result:h,displayStyle:null==m?void 0:m.style}}(e,f,a,t,c,d,w)
g=n.result,m=n.displayStyle,i(g.lockups)&&p.push(g)}let T=!0
const A=a.filter(e=>e.type===Pk).map(e=>e.id),E=Xn(e,new Set(A)),P=function(e,t){var n,r
if(o(e))return[]
if(o(null===(n=null==t?void 0:t.displayStyle)||void 0===n?void 0:n.condensed)&&(null===(r=null==t?void 0:t.displayStyle)||void 0===r?void 0:r.condensed)!==LC)return[]
const c=[]
for(const t of e){const e=l(t,[nC,fb,"condensed"])
i(e)&&e!==LC&&s(t.id)||c.push(t.id)}return c}(a,w)
for(const r of a){if(!F(r)){h.push(r)
continue}if(Ue(e,r,22014))continue
T&&i(null==g?void 0:g.lockups)&&bn(f,g,r)
const o=nl(e,r,n,E,c,t.requestDescriptor.isNetworkConstrained,t.requestDescriptor.searchEntity,w)
o&&(T&&i(g)&&i(g.lockups)&&vn(0,g,o,w,m),p.push(o),T=!1,At(c.locationTracker))}return wt(c.locationTracker),function(e,t){return Ll.Do("applyClientFilteringToIAPs",()=>{const n={}
for(const e of t)if(e.resultType===hC){const t=e.lockup
t.parent&&t.productIdentifier&&t.parent.bundleId?n[t.productIdentifier]=t.parent.bundleId:Ll.bm(Hb,Ik,`required fields for ${t.adamId}`)}return 0===Object.keys(n).length?Promise.resolve(t):e.clientOrdering.visibilityForIAPs(n).then(e=>t.filter(t=>{if(t.resultType!==hC)return!0
const n=t.lockup
return!(!n.productIdentifier||!e[n.productIdentifier])||n.isVisibleByDefault}))})}(e,p).then(e=>({builtSearchResults:e,deferredSearchResults:h,impressionsAppendix:P}))}function al(e,t,n,r){const o=new zN(t,t,null,r)
return o.spellCheckEnabled=!1,o.excludedTerms=[n],o.originatingTerm=n,o}function ul(e,t){return t&&t.results?t.results.slice(0,t.maxPerPage):[]}function ll(e,t){let n=[]
if(t&&t.results&&(n=t.results.slice(t.maxPerPage,t.results.length)),o(n))return null
const r={...t}
return r.results=n,r}function fl(e,t){const n=new VN
return s(t)&&(n.facets=Zu(e,t),n.pageFacets=Xu(e),n.selectedFacetOptions=Qu(e)),n.results=[],n}function dl(e,t){const n=new HN([])
return s(t)&&(n.facets=Zu(e,t),n.pageFacets=Xu(e),n.selectedFacetOptions=Qu(e)),n}async function pl(e,t){return Ll.Do("searchResultsFromResponse",async()=>{const c=t.catalogResponse,a=t.requestMetadata,u=a.searchRequestUrl,l=t.sponsoredSearchRequestData,f=n(c,"results.guidedSearch"),d=function(e,t,n){var r,o,s,i,c,a,u
return{term:t.term,suggestedTerm:null===(o=null===(r=n.results)||void 0===r?void 0:r.spellCheck)||void 0===o?void 0:o.suggestedTerm,correctedTerm:null===(i=null===(s=n.results)||void 0===s?void 0:s.spellCheck)||void 0===i?void 0:i.correctedTerm,resultsTerm:null!==(u=null===(a=null===(c=n.results)||void 0===c?void 0:c.spellCheck)||void 0===a?void 0:a.correctedTerm)&&void 0!==u?u:t.term,originatingTerm:t.originatingTerm}}(0,a.requestDescriptor,c),p=(h=t.sponsoredSearchAdvertData)&&r(h.error)
var h
const w={locationTracker:{rootPosition:0,locationStack:[]},pageInformation:fu(e,a.requestDescriptor,c,d,u,l,p,f)},g=e.featureFlags.isEnabled("shelves_2_0_search"),m=g?new HN:new VN
!function(e,t,n,r,s){const c=n.requestDescriptor
ht({pageInformation:s.pageInformation,locationTracker:s.locationTracker,targetType:og},"")
const a=[]
if(i(r))for(const t of r){const n=Ju(e,c,t,s)
n&&(a.push(n),At(s.locationTracker))}if(o(a)&&n.requestDescriptor.searchEntity){const t=function(e,t,n){const r=t.searchEntity
if(!r)return null
const o=new rG(null,lP)
let s
switch(function(e,t,n,r,o){const s=mE,i=VS,c={targetId:r},a=it(e,r,i,{actionType:s,location:dt({pageInformation:null,locationTracker:o.locationTracker,targetType:i},r),searchTerm:n})
t.actionMetrics.addMetricsData(a)
const u=ct(e,n,i,s,null,c)
t.actionMetrics.addMetricsData(u)}(e,o,t.term,r,n),r){case pk:s=e.loc.string("GUIDED_SEARCH_TOKEN_ENTITY_ARCADE")
break
case Bv:s=e.loc.string("GUIDED_SEARCH_TOKEN_ENTITY_DEVELOPERS")
break
case hS:s=e.loc.string("GUIDED_SEARCH_TOKEN_ENTITY_STORIES")
break
case Ok:s=e.loc.string("GUIDED_SEARCH_TOKEN_ENTITY_APPLEWATCH")
break
default:de(r)}const i=new eG(s,!0,s,o)
return iu(0,i,VS,n),i}(e,n.requestDescriptor,s)
a.push(t),At(s.locationTracker)}const u=function(e,t,n){var r
if(o(n))return null
const s=t.term,i=null!==(r=t.guidedSearchTokens)&&void 0!==r?r:[],c=[]
for(const e of n){const t=e.displayLabel,n=Array.from(i)
if(e.isSelected){const e=n.indexOf(t);-1!==e&&n.splice(e,1)}else n.push(t)
const r=new tG(s,n,e.finalTerm)
c.push(r)}return c}(0,n.requestDescriptor,r)
wt(s.locationTracker),i(a)&&(t.guidedSearchTokens=a,t.guidedSearchQueries=u,function(e,t,n){const r=gt(n.locationTracker)
t.guidedSearchTokensParentImpressionMetrics=new cD({impressionIndex:r,impressionType:og,idType:zO,id:ug,name:"Search Revisions"})}(0,t,s),At(s.locationTracker))}(e,m,a,null==f?void 0:f.facets,w)
const T={id:fI,kind:null,softwareType:null,targetType:HS,title:nO,pageInformation:w.pageInformation,locationTracker:w.locationTracker,idType:zO}
g&&pt(T,nO)
const A=function(e,t){return x(t.catalogResponse.results.search)}(0,t),E=function(e,t){return function(e,t,n){if(r(n))return t
const s=[],i=t.reduce((e,t)=>({...e,[t.id]:t}),{})
for(const t of n.adverts){const n=i[t.adamId]
if(o(n)){Cn(e,`[${t.adamId}] skipped - Data was not part of original response`)
continue}if(o(n.attributes)){Cn(e,`[${n.id}] skipped - Data is missing attributes`)
continue}const r=Ku(e,n,t)
s.push(r)}return s}(e,x(t.catalogResponse.results[rg]),t.sponsoredSearchAdvertData)}(e,t),P=function(e){return e.sponsoredSearchAdvertData.installedStates||{}}(t),I=await cl(e,a,c.meta,w,A,E,P)
if(g){const e=m,t=new XL(ng)
t.id=sG,t.isHorizontal=!1,t.items=I.builtSearchResults,function(e,t){const n=e.impressionsAppendix||[],r=[...new Set([...n,...t||[]])]
e.impressionsAppendix=r}(T.pageInformation,I.impressionsAppendix),Bn(0,t,T),e.resultsParentImpressionMetrics=t.impressionMetrics,e.shelves.push(t)}else{const e=m
e.results=I.builtSearchResults,function(e,t,n){const r=gt(n.locationTracker)
t.resultsParentImpressionMetrics=new cD({impressionIndex:r,impressionType:HS,idType:zO,id:fI,name:nO})}(0,e,w)}return I.deferredSearchResults.length>0&&(m.nextPage=function(e,t,n,r,s){return o(t)?null:{results:t,maxPerPage:oG,requestMetadata:n,metricsOptions:s,responseMetadata:null!=r?r:{}}}(0,I.deferredSearchResults,a,c.meta,w)),g&&wt(T.locationTracker),m.message=function(e,t,n){const r=s(t.correctedTerm),o=s(t.suggestedTerm)
return ht({pageInformation:n.pageInformation,locationTracker:n.locationTracker,targetType:vb},"spellCorrection"),r?function(e,t,n){const r=t.term,o=al(0,r,t.resultsTerm,TE)
bt(e,o,fk,n.locationTracker)
const s=`<i>${t.correctedTerm}</i>`,i=e.loc.string("SEARCH_SHOWING_RESULTS_FOR_TEMPLATE").replace(fP,s),c=new NL(new qk(i,BC),{}),a=e.loc.string("SEARCH_SEARCH_INSTEAD_FOR_TEMPLATE").replace(fP,r),u={}
u[`${a}`]=o
const l=new NL(new qk(a),u)
return new KN(c,l)}(e,t,n):o?function(e,t,n){const r=t.suggestedTerm,o=al(0,r,t.resultsTerm,AE)
bt(e,o,fk,n.locationTracker)
const s=`<i>${r}<i>`,i=e.loc.string("SEARCH_DID_YOU_MEAN_TEMPLATE").replace(fP,s),c={}
c[`${r}`]=o,c[`${r}?`]=o
const a=new NL(new qk(i,BC),c)
return new KN(a)}(e,t,n):(wt(n.locationTracker),null)}(e,d,w),!o(a.requestDescriptor.searchEntity)||(m.facets=Zu(e,a.requestDescriptor.facets,t.categoriesFilterData),m.pageFacets=Xu(e,t.categoriesFilterData),m.selectedFacetOptions=i(t.requestMetadata.requestDescriptor.selectedFacetOptions)?t.requestMetadata.requestDescriptor.selectedFacetOptions:Qu(e)),m.isAutoPlayEnabled="tv"!==e.client.deviceType,m.isCondensedSearchLockupsEnabled=e.client.isPhone&&su(e),m.transparencyLink=function(e,t,n){if(o(t))return null
const r={}
if(o(y(t,Ek)))return null
const s=Vn(e,t,e.loc.string(tg),{targetType:vb,pageInformation:n.pageInformation,locationTracker:n.locationTracker})
r[`${e.loc.string(tg)}`]=la(e,t,s,e.host.clientIdentifier)
const i=new qk(e.loc.string("SEARCH_TRANSPARENCY_TEXT"),jv)
return new NL(i,r)}(e,t.transparencyData,w),uu(e,m,w.pageInformation),m})}function hl(e,t,n,o,s){return Ll.Do("topChartsPageFromApiResponse",()=>{const i=function(e){return a(e,"results.apps").filter(e=>!r(e.data))}(t),c=i.map(o=>function(e,t,n,o){return Ll.Do("segmentFromData",()=>{const s=l(n.query,Nb)
let i=l(t,"shortName")
const c=l(t,_k),a=l(t,TO),u=cu(e,"TopChartsPage",s,o,`${a} ${c}`),f={rootPosition:0,locationStack:[]},d=[]
let p=0
const h=[]
for(const n of t.data){const t=Tl(e,p,n,u,f)
if(t){if(Ue(e,n,6142))continue
d.push(t),At(f),p++}else h.push(n)}const w=[],g=new XL(Jb)
g.items=d,e.featureFlags.isEnabled("shelves_2_0_top_charts")&&(g.title=c),w.push(g),r(i)&&(i=c)
const m=new iG(i,c,a,w),T=function(e,t,n,r=null,o,s){return{remainingContent:t,maxPerPage:fx,highestOrdinal:0,url:n,metricsPageInformation:o,metricsLocationTracker:s}}(0,h,null,t.next,u,f)
return T.metricsPageInformation=u,T.metricsLocationTracker=f,T.highestOrdinal=p,m.nextPage=T,uu(e,m,u),m})}(e,o,n,t)).sort((e,t)=>e.chart.localeCompare(t.chart)),u=l(i,"0.href"),f=new sN(u),d=f.query[Nb],p=f.query[uR],h=function(e,t){return t.every(e=>function(e){switch(e){case"top-trending-free":case"top-trending-paid":return!0
default:return!1}}(e.chart))?e.loc.string("PAGE_TITLE_TRENDING_CHARTS"):t.every(e=>function(e){switch(e){case"top-emerging-free":case"top-emerging-paid":return!0
default:return!1}}(e.chart))?e.loc.string("PAGE_TITLE_EMERGING_CHARTS"):e.loc.string("PAGE_TITLE_TOP_CHARTS")}(e,c),w=[]
if(null!=o)for(const t of o.categories)t.genreId&&w.push(wl(e,t))
const g=gl(d,p,w)
let m
m=null!=g?new aG(d,g.ageBandId,h,c,g.name,w):new aG(d,null,h,c,null,w)
const T=c.findIndex(e=>e.chart===s)
return T>=0&&(m.initialSegmentIndex=T),m})}function wl(e,t){const n=function(e,t,n=null){let r=new B$(e).forType(RO).addingQuery(py,Pk).addingQuery(Nb,t).includingMacOSCompatibleIOSAppsWhenSupported(!0)
return n&&(r=r.addingQuery(uR,n)),e.appleSilicon.isSupportEnabled&&(r=r.includingAdditionalPlatforms([Hv,ib])),r}(e,t.genreId,t.ageBandId),r=t.children.map(t=>wl(e,t))
return new cG(t,C(e,n).toString(),r)}function gl(e,t,n){for(const r of n){if(t&&r.ageBandId===t||!t&&!r.ageBandId&&r.genreId===e)return r
const n=gl(e,t,r.children)
if(n)return n}return null}function ml(e,t,n,r){return Ll.Do("topChartSegmentFromLookupResponse",()=>{const o=[]
let s=n.highestOrdinal
const i=x(t)
for(const t of i)Ue(e,t,6142)||(o.push(Tl(e,s,t,n.metricsPageInformation,n.metricsLocationTracker)),At(n.metricsLocationTracker),s++)
const c=[]
if(o.length>0){const e=new XL(Jb)
e.items=o,c.push(e),r.highestOrdinal=s}const a=new iG(null,null,null,c)
return a.nextPage=r,a})}function Tl(e,t,n,r,o){return Ll.Do("lockupFromApiChartItem",()=>Xc(e,n,{ordinal:e.loc.decimal(t+1),metricsOptions:{pageInformation:r,locationTracker:o},artworkUseCase:1}))}function Al(e,t){const n=Ss(e,[t])
if(s(t.contents)){const r=Kn(e,"todayWidget",t.contents,!0,n)
t.contents=r.personalizedData}return t}function yl(e,t,n,r,i){const c=[]
let a=0,u=0,l=0
for(const i of t.contents){if(S(i)){a++
continue}const t=ce(i,Ib),f=Sl(e,i,n,r),d=null===f?Il(e,t):[],p=_l(i),h=[null==f?void 0:f.backgroundColor,1===d.length&&null!==d[0]?d[0].backgroundColor:void 0,ae("1C68E2")].find(e=>void 0!==e)
if(0===d.length&&null===f){u++
continue}const w=El(i,r)
let g=null,m=null,T=null
if(t.length>0&&t[0].type===Tk){const e=y(t[0],qA)
if(o(e)){l++
continue}T=y(t[0],YA),g=new Date(e)
const n=y(t[0],WA)
m=s(n)?new Date(n):null}const A=y(i,fv)
c.push(new fG(i.id,w,p,h,ue(h),d,Pl(i,n,w),A===IP,f,T,g,m))}return null!==i&&t.contents.length===a+u+l&&i(`All ${t.contents.length} cards in this ${r?"primary":"secondary"} module were filtered due to being unhydrated (${a}), missing artwork (${u}) or missing metadata (${l})`),c}function El(e,t){let n=y(e,Eb)
if(!t){const t=y(e,fb),r=y(e,cv)
if(t===$C)switch(r){case sO:case oO:n=Gs(e)}}return n.replace(/\n/g," ")}function Pl(e,t,n){let r
switch(t){case QO:r=0
break
case bg:r=1
break
case _P:r=2
break
default:r=-1}const s={widgetId:Ig,size:r,targetId:e.id,name:n},c=encodeURIComponent(JSON.stringify(s))
switch(ua(e)){case 4:const t=ce(e,eb),n=i(t)&&1===t.length?t[0]:ce(e,Ib)[0],r=ie(n,sk)
if(o(r))break
return`${R$.internal}:/${C$.product}/${b$.id}${r.id}?${b$.appEventId}=${n.id}${b$.invalidateWidgetsOnFailure}=true&${b$.metrics}=${c}`
case 3:const s=ce(e,Ib)[0]
return`${R$.internal}:/${C$.product}/${b$.id}${s.id}?${b$.invalidateWidgetsOnFailure}=true&${b$.metrics}=${c}`
case 1:return l(T(e,vb),Ek)}return`${R$.internal}:/${C$.story}/${b$.id}${e.id}?${b$.invalidateWidgetsOnFailure}=true&${b$.metrics}=${c}`}function Il(e,t){return t.map(t=>t.type===Kv?null:ga(e,function(e,t){let n
switch(so(0,t)){case"com.apple.AppStore.BridgeStoreExtension":n=my
break
case"com.apple.MobileSMS":n=Ty
break
default:n=nk}return Fe(e,t,ge(e,t),n)}(e,t),{useCase:24,withJoeColorPlaceholder:!0})).filter(e=>null!==e)}function _l(e){var t
const n=T(e,ER)
let r=null
i(n)&&(r=l(n,_k))
let o=null
const s=ce(e,Ib)
return s.length>0&&(o=y(s[0],_k)),y(e,fb)===$C?null!==(t=null!=o?o:r)&&void 0!==t?t:"":null!=r?r:""}function Sl(e,t,n,r){let o,s,i=null
if(y(t,fv)===IP){const n=T(t,"editorialVideo.storeFrontVideo4x3.previewFrame")
n&&(i=ga(e,n,{withJoeColorPlaceholder:!0,useCase:25}),r||(i.crop="sr"))}switch(y(t,fb)){case $C:o=Sg,s=n===QO?kg:"nr"
break
case dC:y(t,fv)===G_?(o=Og,s=n===QO?kg:"nr"):(o=Rg,s=n===QO?Dg:Ng)
break
case B_:o=Gy,s=n===QO?Dg:Ng
break
default:o=null,s=null}r||(s="fn")
let c=null
return null!==o&&(c=ga(e,T(t,o),{cropCode:s,useCase:25,withJoeColorPlaceholder:!0})),null!=c?c:i}var Ol,Rl,Cl,vl,bl,kl,Dl,Nl,Ll,$l,xl,Fl,Ml,Ul,Bl,Gl,Vl={}
e.r(Vl),e.d(Vl,{downloadingOrdering:()=>AM,downloadingOrderingCompact:()=>yM,notPurchasedOrdering:()=>mM,notPurchasedOrderingCompact:()=>TM,notPurchasedSpotlightIndex:()=>hM,purchasedOrdering:()=>wM,purchasedOrderingCompact:()=>gM,purchasedSpotlightIndex:()=>pM}),Ol={},e.r(Ol),e.d(Ol,{downloadingOrdering:()=>RM,downloadingOrderingCompact:()=>CM,notPurchasedOrdering:()=>SM,notPurchasedOrderingCompact:()=>OM,notPurchasedSpotlightIndex:()=>PM,purchasedOrdering:()=>IM,purchasedOrderingCompact:()=>_M,purchasedSpotlightIndex:()=>EM}),Rl={},e.r(Rl),e.d(Rl,{notPurchasedOrdering:()=>DM,notPurchasedSpotlightIndex:()=>bM,purchasedOrdering:()=>kM,purchasedSpotlightIndex:()=>vM}),Cl={},e.r(Cl),e.d(Cl,{notPurchasedOrdering:()=>xM,notPurchasedSpotlightIndex:()=>LM,purchasedOrdering:()=>$M,purchasedSpotlightIndex:()=>NM}),vl={},e.r(vl),e.d(vl,{notPurchasedOrdering:()=>BM,notPurchasedSpotlightIndex:()=>MM,purchasedOrdering:()=>UM,purchasedSpotlightIndex:()=>FM}),bl={},e.r(bl),e.d(bl,{notPurchasedOrdering:()=>qM,notPurchasedSpotlightIndex:()=>VM,purchasedOrdering:()=>HM,purchasedSpotlightIndex:()=>GM}),kl={},e.r(kl),e.d(kl,{notPurchasedOrdering:()=>zM,notPurchasedSpotlightIndex:()=>YM,purchasedOrdering:()=>jM,purchasedSpotlightIndex:()=>WM}),Dl=e(881)
const Hl="TabChangeAction",ql="expanded",Wl="subscription",Yl="askToBuy",jl="arcadeAskToBuy",zl="groupingLockup",Jl="launchRepair",Kl="tapToRate",Zl="lockupList",Xl="com.apple.AppStore",Ql="continuation",ef="purchases",tf="donate",nf="https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/signupWizard",rf="is32bitOnly",of="requires32bit",sf="is.workflow.my.app",cf="com.apple.mobileme.fmf1",af="iPhone",uf="iPad",lf="isIOSBinaryMacOSCompatible",ff="ACTION_SETTINGS",df="presentModal",pf="shareSheet",hf="systemimage://square.and.arrow.up",wf="chartHref",gf="editorialArtwork.crossoverCard",mf="callToActionLabel",Tf="OFFER_BUTTON_TITLE_ARCADE_OPEN",Af="OFFER_BUTTON_TITLE_ARCADE_STANDARD",yf="Account",Ef="Send Gift",Pf="https://finance-app.itunes.apple.com/subscriptions/manage?context=deeplink",If="iad.format.text",_f="advertDataMalformed",Sf="mapiFetchFail",Of="cppAssetsMissing",Rf="insufficientAssets",Cf="APSLA",vf="systemimage://bell.fill",bf="mercuryBasedSheetsAvailable",kf="EventDetails",Df="SHARE_APP_EVENT_SUBTITLE",Nf="j:mm",Lf="groupingAppEvent",$f="SEE_ALL_GAMES",xf="arcade-see-all-games-button",Ff="comingSoonApps",Mf="marketingArtwork",Uf="marketingVideo",Bf="seed",Gf="upsell",Vf="filter[ageRating]",Hf="filter[supportsGameController]",qf="filter[isMultiplayer]",Wf="PAGE_FACETS_FILTERS_CONTROLLER_SUPPORT",Yf="PAGE_FACETS_FILTERS_MULTIPLAYER",jf="PAGE_FACETS_FILTERS_COMING_SOON",zf="PAGE_FACETS_SORT_BY_TITLE",Jf="controllerSupport",Kf="multiplayer",Zf="PAGE_FACETS_INCLUDE_TITLE",Xf="badge",Qf="000000",ed="ARCADE_SUBSCRIBE_PAGE_NOT_NOW",td="displayBreakoutMaterial",nd="material",rd="breakoutCallToActionLabel",od="PageData",sd="invalidateWidgetsOnFailure",id="ProductBuilder",cd="fileSizeByDevice",ad="promotionalText",ud="viewEditorialItem",ld="past",fd="redownload",dd="placeholderBackground",pd="impressionableAppIconFromData",hd="deviceFamilies",wd="requiresRosetta",gd="iphone5",md="iphone6",Td="iphone6+",Ad="editorialArtwork.topShelf",yd="posterCardVideo16x9",Ed="userReviewId",Pd="systemimage://hand.thumbsup",Id="systemimage://hand.thumbsdown",_d="guid",Sd="formBody",Od="systemimage://exclamationmark.circle",Rd="CONTROLLER_RECOMMENDED",Cd="CAPABILITY_GAME_CENTER_TITLE",vd="CAPABILITY_GAME_CENTER_EXPLANATION",bd="CAPABILITY_SIRI_TITLE",kd="CAPABILITY_SIRI_EXPLANATION",Dd="CAPABILITY_WALLET_TITLE",Nd="CAPABILITY_WALLET_EXPLANATION",Ld="wallet",$d="CAPABILITY_MFI_CONTROLLERS_TITLE",xd="controllers",Fd="familySharingIAPWithLinkAction",Md="familySharingIAP",Ud="familySharingWithLinkAction",Bd="above",Gd="prefersNonStandardBackButton",Vd="DEVELOPER_WATCH",Hd="DEVELOPER_LATEST_RELEASE",qd="DEVELOPER_BUNDLES",Wd="hasApps",Yd="hasGames",jd="DEVELOPER_APPS_AND_GAMES",zd="DEVELOPER_GAMES",Jd="DEVELOPER_APPS",Kd="DEVELOPER_APPLE_ARCADE",Zd="CONTINUE_PLAYING",Xd="videoCard",Qd="Achievements Hero",ep="locked",tp="inprogress",np="completed",rp="nonArcade",op="subscriptionHero",sp="listItem",ip="link.url",cp="titledButtonStack",ap="editorialArtwork.subscriptionHero",up="editorialNotes.short",lp="interactive",fp="largeHeroBreakout",dp="smallBreakout",pp="textColor4",hp="TERMS_AND_CONDITIONS_TITLE",wp="medium",gp="textGradient",mp="HERO_CAROUSEL_OVERLAY_BUTTON_TITLE_GAME",Tp="HERO_CAROUSEL_OVERLAY_BUTTON_TITLE_VIEW",Ap="breakoutTall",yp="breakoutFullScreen",Ep="advertPressed",Pp="editorialContext",Ip="LOCKUP_HEADING_ARCADE",_p="contentRatingsBySystem.appsApple.name",Sp="userRating.ratingCount",Op="userRating.value",Rp="isVerifiedForAppleSiliconMac",Cp="genreDisplayName",vp="genres",bp="widthConstrainedLockup",kp="descending",Dp="editorialItemActionFromData",Np="iad.lineItem",Lp="clientIdentifierOverride",$p="targetId",xp="back",Fp="clientCorrelationKey",Mp="crossfireReferralCandidate",Up="data-metrics",Bp="impressionsAppendix",Gp="exit",Vp="hasiAdData",Hp="viewedInfo",qp="viewedInfoDetailed",Wp="cookie",Yp="inAppEventId",jp="overlay",zp="com.apple.AppStore.clipOverlay",Jp="buttonName",Kp="See All",Zp="selectedPageFacets",Xp="Apps",Qp="searchGhostHint",eh="didYouMean",th="displaysArcadeUpsell",nh="franchise",rh="cardSubType",oh="isOnboardingCard",sh="iAdOdmlSuccess",ih="iAdEligible",ch="metadata",ah="iAdIsSpecifiedCreativeUsed",uh="APPSTORE_SEARCH_LANDING_PAGE",lh="iAdPageCustomId",fh="data.search.dataSetId",dh="15.4",ph="macSoftware",hh="iosSoftware",wh="pending",gh="input",mh="meta.metrics",Th="channelPartner",Ah="upsellScenario",yh="recurringSubscriptionPeriod",Eh="modeType",Ph="FreeTrial",Ih="PayUpFront",_h="{trialPrice}",Sh="PayAsYouGo",Oh="test",Rh="update",Ch="rebuy=true",vh="FLOW_PREVIEW_OFFER_ACTION_GET",bh="FLOW_PREVIEW_OFFER_ACTION_PREORDER",kh="{appName}",Dh="PREORDER_NOTIFY_AUTOMATIC_DOWNLOAD_MESSAGE",Nh="TV_OFFER_ALERT_FOOTER_LINE_BREAK",Lh="arcade-preorder",$h="contentRatingsBySystem.appsApple.value",xh="preorderedSubscribed",Fh="checkmark",Mh="preorderedNotSubscribed",Uh="OFFER_BUTTON_TITLE_VIEW",Bh="preorderSubscribed",Gh="preorderNotSubscribed",Vh="INTRO_PRICE_OFFER_SUBTITLE",Hh="AppStore.OfferButton.ExternalPurchases.Subtitle",qh="INLINE_IN_APP_PURCHASES",Wh="meta.personalizationData.segId",Yh="onDevicePersonalizationDataContainer",jh="OnDeviceRecommendationsShelfController",zh="OnDeviceRecommendationsPageController",Jh="PRODUCT_PRIVACY_LEARN_MORE_TEMPLATE",Kh="{developerName}",Zh="<br><br>",Xh="privacyPolicy",Qh="PRODUCT_PRIVACY_DEFINITIONS_LINK",ew="systemimage://exclamationmark.triangle",tw="USAGE_DATA",nw="systemimage://person.circle",rw="NOT_COMPATIBLE_BANNER",ow="UNSUPPORTED_CAPABILITIES",sw="UNSUPPORTED_IOS_VERSION",iw="experimentId",cw="experimentLocale",aw="pageCustomId",uw="PRODUCT_SECTION_SCREENSHOTS_PREVIEW",lw="user",fw="helpful",dw="displayable-kind",pw="urlQuery",hw="ratingCount",ww="RATINGS_STATUS_NOT_ENOUGH_RATINGS_OR_REVIEWS",gw="supportUrl",mw="APP_SUPPORT",Tw="genreName",Aw="systemimage://person.crop.square",yw="BADGE_PLAYERS_HEADING",Ew="{maxPlayers}",Pw="BADGE_NO_RATINGS_CAPTION",Iw="COMING_SOON_EXPANDED_OFFER_TITLE",_w="MMM d, yyyy",Sw="PREORDER_EXPANDED_OFFER_SUBTITLE",Ow="{releaseDate}",Rw="SoftwareBundle",Cw="Achievements",vw="gameCenterPlayerGameAchievementSummary",bw="productCapability",kw="PRODUCT_SECTION_FEATURED_IN",Dw="largeGameCenterPlayer",Nw="hasEula",Lw="productMediaItem",$w="productMedia",xw="editorsChoiceItem",Fw="PRODUCT_SECTION_MOST_RECENT_VERSION",Mw="overview",Uw="titledParagraph",Bw="detail",Gw="versionDisplay",Vw="{version}",Hw="PRODUCT_SECTION_VIDEOS",qw="standardInformationShelf",Ww="seventeenPlus",Yw="gracRegistrationNumber",jw="parentShelfItems",zw="SEARCH_FACET_IPHONE_ONLY",Jw="SEARCH_FACET_FREE",Kw="SEARCH_FACET_",Zw="ageBandId",Xw="macOSCompatibleIOSApps",Qw="top-apps",eg="tinker",tg="SEARCH_TRANSPARENCY_LINK",ng="searchResult",rg="ads-result",og="SearchRevisions",sg="whenInstalled",ig="collection",cg="mixed",ag="guidedLabel",ug="search-revisions",lg="supportsGameController",fg="displayType",dg="appMarkerType",pg="Acquisition",hg="InlineImage",wg="AppLockup",gg="InlineVideo",mg="quote",Tg="Small",Ag="Medium",yg="Large",Eg="greedy",Pg="PAGE_TITLE_TODAY",Ig="com.apple.AppStore.Widgets.Today",_g="ignoreEditorialArt",Sg="editorialArtwork.dayCard",Og="editorialArtwork.eventCard",Rg="editorialArtwork.generalCard",Cg="todayCardOverlay",vg="grey",bg="systemMedium",kg="DCEC.AppWS01",Dg="MCGC.AppWS01",Ng="MCGC.AppWL01",Lg="RECOMMENDATIONS",$g="ALL_GAMES",xg="MMMM d, y",Fg="x-as3-internal:/today/test",Mg="arcadeSubscribePage",Ug="nonnull",Bg="Purchases",Gg="token.pageInformation",Vg="token.excludeAttribution",Hg="token.targetType",qg="token.metricsKind",Wg="systemInformation",Yg="token.productVariantData",jg="token.inAppEventId",zg="token.extRefApp2",Jg="token.extRefUrl2",Kg="gameCenterProfile",Zg="GROUPING_DISCOVER",Xg="isArcade",Qg="OnDeviceRecommendationsPageController:handleShelf not implemented",em="ProductData",tm="Product page preloading is disabled",nm="lookup",rm="results.contents",om="trending-contents",sm="TodayData",im="asString",cm="asNumber",am="asBoolean",um="asJSONValue",lm="ids",fm="catalog",dm="its_qt",pm="adId",hm="prefix",wm="username",gm="password",mm="port",Tm="dsid",Am="signatureResumption",ym="checkForLongUrl",Em="getPass",Pm="certId",Im="trending-searches",_m="searchHints",Sm="personalizedUserReviewUrl",Om="personalizedUserReviewEnabled",Rm="p2-application-user-rate-content",Cm="p2-application-user-write-review",vm="p2-accessory-room",bm="passbook",km="library-link",Dm="language-tag",Nm="p2-service-terms-url",Lm="usePostForAppStoreSearch",$m="isBuyingScheduledGiftCertificateEnabled",xm="isScheduledGiftingEnabled",Fm="AddFundsUrl",Mm="account-top-up-title",Um="personalized-buy-buttons/software",Bm="uvSearch/nowplaying-enabled",Gm="supportLinkUrl",Vm="voteUrl",Hm="reportConcernUrl",qm="reportConcernExplanation",Wm="product-page-report-problem-enabled",Ym="product-page-report-problem-url",jm="product-page-report-problem-sad-subscriptions",zm="product-page-report-problem-second-party-apps",Jm="reportConcernReasons",Km="createAccountUrl",Zm="apps-media-api-host",Xm="apps-media-api-preview-host",Qm="apps-media-api-search-edge-host",eT="apps-media-api-edge-end-points",tT="apps-media-api-search-ads-limit",nT="countryCode",rT="searchSortOptions",oT="ageBands",sT="processRedirectUrl/whitelistedQueryParams",iT="processRedirectUrl/endpoint",cT="app-store-app-id",aT="arcade-iap-family-id",uT="ocelot-iap-family-id",lT="arcade-iap-offer-name",fT="ocelot-iap-offer-name",dT="transparencyLawEditorialItemId",pT="hideableSystemApps",hT="tabs/standard",wT="isInternalArcadeComingSoon",gT="watchAppsGrouping",mT="requireAgeVerification",TT="ageRatingLearnMoreEditorialItemId",AT="safariExtensionsGrouping",yT="familySubscriptionsLearnMoreEditorialItemId",ET="commerce-ui-urls/dynamic-url-patterns",PT="commerce-ui-urls/url-patterns",IT="commerce-ui-urls/v2-url-patterns",_T="arcadePreOrderUpsellLimitSeconds",ST="recentlyPlayedGamesWindowInSeconds",OT="enable-privacy-nutrition-labels",RT="appleSiliconMacUnverifiedBadgeEditorialItemId",CT="enableComingSoonToggle",vT="sponsored-search-odml-timeout",bT="search-landing-ad-fetch-timeout",kT="isSearchLandingAdsEnabled",DT="search-landing-offscreen-refresh-interval-in-seconds",NT="search-landing-page-update-delay-interval-in-seconds",LT="appPrivacyLearnMoreEditorialItemId",$T="suppressedPrivacyLabels",xT="arcadeOfferEditorialItemId",FT="appPrivacyDefinitionsEditorialItemId",MT="todayWidgetInvalidationHour",UT="todayWidgetInvalidationJitterMinutes",BT="todayWidgetLivePreviewRolloutRate",GT="enableAppEvents",VT="enableProductPageVariants",HT="enable-arcade-trial-eligible-badging",qT="heroCarouselAutoScrollDuration",WT="enableAdditionalLoggingForPPV",YT="enable-on-device-personalization",jT="enable-automatic-page-refresh",zT="widget-suggestions-from-today-tab-rollout-rate",JT="enable-system-app-reviews",KT="cancelPreorderItemSrv",ZT="getCancellablePreorderItemsSrv",XT="are-preorders-cancellable",QT="enable-external-purchase",eA="enabled-external-purchase-placements",tA="external-purchase-learn-more-editorial-item-id",nA="external-purchase-product-page-banner-include-icon",rA="external-purchase-product-page-banner-use-alternate-copy",oA="external-purchase-product-page-annotation-use-alternate-copy",sA="enabled-ad-placements",iA="ad-placement-timeouts",cA="new-events-for-odj-are-enabled",aA="default-chart",uA="accountUrl",lA="redeemUrl",fA="charityUrl",dA="manageSubscriptionsUrl",pA="manageSubscriptionsV2Url",hA="ads-override-language",wA="game-controller-recommended-rollout-rate",gA="game-controller-learn-more-editorial-item-id",mA="IPHONE_BRAND_NAME",TA="IPAD_BRAND_NAME",AA="APPLE_TV_BRAND_NAME",yA="APPLE_WATCH_BRAND_NAME",EA="MAC_BRAND_NAME",PA="arcadeLaunchRepair",IA="arcadeTabNavBar",_A="list",SA="river",OA="timer",RA="pageChange",CA="textFollowsTintColor",vA="bundle",bA="editorial",kA="com.apple.appstorecomponentsd",DA="com.apple.AppStore.Widgets",NA="purchased",LA="isStandaloneWithCompanionForWatchOS",$A="isDeliveredInIOSAppForWatchOS",xA="free",FA="results.data",MA="APPLE_ARCADE",UA="accountDetails",BA="Redeem",GA="push",VA="deepLink",HA="transparent",qA="startDate",WA="endDate",YA="badgeKind",jA="inAppEvent",zA="personal-recommendations",JA="comingSoonGrouping",KA="toggle",ZA="comingSoon",XA="subscribe",QA="AppStore.Arcade.Welcome.Family.Button.ExploreArcade",ey="right",ty="external",ny="pageMetrics",ry="arcadeSubscribe",oy="ACTION_OK",sy="fulfilled",iy="messagesScreenshots",cy="supportsFunCamera",ay="requirementsByDeviceFamily",uy="release",ly="canvas",fy="future",dy="system-apps",py="types",hy="customAttributes",wy="appShowcase",gy="checksum",my="circularArtwork",Ty="ovalArtwork",Ay="unadorned",yy="appleWatch_2018",Ey="appleWatch",Py="appleWatch_2021",Iy="iphone_6_5",_y="editorialArtwork.splashFullScreen",Sy="splashVideo16x9",Oy="splashVideo4x3",Ry="splashVideo3x4",Cy="appletv",vy="customScreenshotsByTypeForAd",by="customVideoPreviewsByTypeForAd",ky="decimalPad",Dy="hasInAppPurchases",Ny="CAPABILITY_FAMILY_SHARING_TITLE",Ly="jpeg",$y="prefersOverlayedPageHeader",xy="badge-content",Fy="doNotFilter",My="largeBreakout",Uy="brick",By="designTag",Gy="editorialArtwork.mediaCard",Vy="hasChevron",Hy="textLightensOnHighlight",qy="hasSeparator",Wy="inAppPurchaseTiledLockup",Yy="mediumStoryCard",jy="placeholder",zy="suggested",Jy="onDevicePersonalizationUseCase",Ky="collectionLockup",Zy="standardApp",Xy="Watch",Qy="Messages",eE="discounts",tE="item.offer.buyParams",nE="ARCADE_PREORDER_COMING_SOON",rE="parentId",oE="genreNames",sE="targetType",iE="crossfireReferral",cE="data-metrics-impressions-low-latency",aE="media",uE="cardType",lE="extRefUrl",fE="impressionType",dE="overlayClip",pE="offerReleaseDate",hE="appState",wE="buyInitiate",gE="searchOriginatingTerm",mE="hint",TE="undoSpellCorrection",AE="applySpellCorrection",yE="userTypedHint",EE="impressionId",PE="searchGhostHintPrefix",IE="searchGhostHintTermPhase",_E="searchGhostHintTerm",SE="{postTrialPrice}",OE="ARCADE_PREORDER_LOCKUP_COMING_SOON",RE="confirmation",CE="trial",vE="notSubscribed",bE="INTRO_PRICE_OFFER_FREE_TRIAL",kE="discountOwnedParent",DE="discountUnownedParent",NE="meta.personalizationData.grpId",LE="DATA_NOT_PROVIDED",$E="PRODUCT_PRIVACY_LEARN_MORE_LINK",xE="PRODUCT_PRIVACY_LEARN_MORE_NO_LINK",FE="privacyDetail",ME="privacyCard",UE="identifier",BE="reviewsContainer",GE="wasReset",VE="PRODUCT_SECTION_REVIEWS",HE="chartPosition",qE="editorialArtwork.brandLogo",WE="chartPositions",YE="{chartPosition}",jE="BADGE_MFI_HEADING",zE="{minPlayers}",JE="deviceCompatibility",KE="inline",ZE="watchOS",XE="PRODUCT_SECTION_INFORMATION",QE="PRODUCT_SECTION_SUPPORTS",eP="supports",tP="productReviewAction",nP="productReview",rP="iads",oP="SEARCH_FACET_IPAD_ONLY",sP="SEARCH_FACET_ANY_PRICE",iP="SEARCH_FACET_ANY_CATEGORY",cP="SEARCH_FACET_RELEVANCE",aP="clientApplication",uP="showLabelInSearch",lP="guidedToken",fP="{searchTerm}",dP="alternateLabel",pP="contentIds",hP="imageWithLabel",wP="F1F4F6",gP="upsellForNonacquisitionCanvas",mP="arcadeIcons",TP="AppMarker",AP="framedArtwork",yP="isAcquisition",EP="conservative",PP="TodayForApps",IP="Video",_P="systemLarge",SP="personalization-data",OP="ACCOUNT_SETTINGS",RP="personalizationTransparency",CP="upsellRecovery",vP="prefersLargeTitleWhenRoot",bP="token.metricsPlatformDisplayStyle",kP="https",DP="work",NP="play",LP="develop",$P="channel-apps",xP="strict",FP="customArtwork",MP="suffix",UP="dynamic",BP="dictionary",GP="language",VP="apps-media-api-edge-host",HP="FlowAction",qP="arcadeGroupingLockup",WP="arcadeStoryCanvas",YP="arcadeComingSoon",jP="false",zP="hero",JP="com.apple.TVAppStore.AppStoreTopShelfExtension",KP="originalUrl",ZP="updates",XP="checkForPreorders",QP="externalUrl",eI="supportsArcade",tI="viewGenre",nI="fields",rI="minPlayers",oI="maxPlayers",sI="CONTROLLER_OPTIONAL",iI="SIRI_REMOTE_OR_CONTROLLER_REQUIRED",cI="createAccount",aI="sendGift",uI="addFunds",lI="manageSubscriptions",fI="search-results",dI="METADATA",pI="png",hI="topic",wI="with",gI="wordmark",mI="buy",TI="breakoutTextAlignment",AI="left",yI="target",EI="rejected",PI="websiteUrl",II="editorial-elements:contents",_I="cppData",SI="merchandised-in-apps",OI="top-in-apps",RI="alternate-apps",CI="app-bundle",vI="ios-apps",bI="imessage-apps",kI="bgColor",DI="width",NI="height",LI="round",$I="tvRect",xI="iphone_5_8",FI="editorialArtwork.bannerUber",MI="arcadeShowcase",UI="editorial-elements",BI="siri",GI="editorialStoryCard",VI="onDevicePersonalization",HI="heroCarousel",qI="topCharts",WI="largeStoryCard",YI="black",jI="materialText",zI="abExperiment",JI="isSubscription",KI="inAppPurchaseInstall",ZI="subscribed",XI="multiple-system-operators",QI="NumberedList",e_="href",t_="pageReferrer",n_="pageUrl",r_="eventVersion",o_="iAdMetadata",s_="iAdImpressionId",i_="refUrl",c_="position",a_="refApp",u_="iAdTemplateType",l_="platformDisplayStyle",f_="extRefApp2",d_="extRefUrl2",p_="pageContext",h_="hostApp",w_="ad_container",g_="iAdAppStoreClientRequestId",m_="customProductPage",T_="Genre",A_="complete",y_="OFFER_BUTTON_TITLE_GET",E_="PREORDER_NOTIFY_MESSAGE",P_="INTRO_PRICE_OFFER_TRIAL",I_="size",__="privacyDetails",S_="privacyType",O_="NOT_COMPATIBLE_BANNER_TEMPLATE",R_="{linkTitle}",C_="303031",v_="contentRating",b_="{count}",k_="PRIVACY_POLICY",D_="LICENSE_AGREEMENT",N_="ratings",L_="framedVideo",$_="{duration}",x_="four-screenshots",F_="guidedSearch",M_="multirooms",U_="River",B_="Media",G_="AppEventCard",V_="multiplex",H_="customers-also-bought-apps-with-download-intent",q_="user-reviews",W_="SearchData",Y_="landing",j_="hash",z_="named",J_="arcadeTabHeader",K_="blue",Z_="releaseDate",X_="actionLinks",Q_="multiApp",eS="com.apple.Arcade.ArcadeTopShelfExtension",tS="gift",nS="term",rS="categories",oS="minimumWatchOSVersion",sS="requiresGameController",iS="buyParams",cS="CONTROLLER_REQUIRED",aS="dynamicUI",uS="webView",lS="offerName",fS="trailing",dS="privacyPolicyUrl",pS="supportURLForLanguage",hS="story",wS="customers-also-bought-apps",gS="developer-other-apps",mS="related-editorial-items",TS="watch-apps",AS="atv-apps",yS="mac-os-compatible-ios-apps",ES="largeLockup",PS="pill",IS="roundedRect",_S="mixedMediaLockup",SS="expectedReleaseDate",OS="heic",RS="GAME_CENTER",CS="resource://GameCenterEyebrow",vS="open",bS="mso",kS="showExpectedReleaseDate",DS="posterLockup",NS="card",LS="editorialBadgeType",$S="editorialPriority",xS="actionUrl",FS="impressionQueue",MS="iAdContainerId",US="offerType",BS="softwareType",GS="searchPrefix",VS="hintsEntity",HS="SearchResults",qS="priceFormatted",WS="{price}",YS="privacyDefinitions",jS="PRODUCT_PRIVACY_TITLE",zS="intermediateDetailPage",JS="languages",KS="controller",ZS="value",XS="allProductReviewActions",QS="APP_STORE_EDITORS_NOTES",eO="targetPlatform",tO="src",nO="Search Results",rO="rooms",oO="GameOfDay",sO="AppOfDay",iO="FullWidth",cO="moduleSlice",aO="navigation",uO="ArcadeData",lO="games",fO="many",dO="arcadeProductPage",pO="editorialItem",hO="textCards",wO="textLinksShelf",gO="price",mO="share",TO="chart",AO="familySharing",yO="toast",EO="meta.personalizationData.appId",PO="upsellBreakout",IO="isCanvasAvailable",_O="application/x-www-form-urlencoded",SO="privacy",OO="mac-apps",RO="charts",CO="ipod",vO="inAppPurchaseLockup",bO="object",kO="appTrailerLockup",DO="screenshotsLockup",NO="{learnMoreLink}",LO="tvOS",$O="hide_arcade_header_on_arcade_tab",xO="date",FO="links",MO="small",UO="grouping",BO="arcadeApp",GO="click",VO="advertRotation",HO="pageId",qO="hints",WO="offers",YO="NOT_COMPATIBLE_BANNER_LINK_TITLE",jO="rgb",zO="relationship",JO="ppid",KO="BADGE_MFI_SUPPORTED",ZO="userRating",XO="apps.apple.com",QO="systemSmall",eR="discover",tR="few",nR="coercedValue",rR="disabled",oR="appEvent",sR="appIcon",iR="grid",cR="redeem",aR="code",uR="ages",lR="iap",fR="description.standard",dR="annotation",pR="location",hR="category",wR="singleSelection",gR="versionHistory",mR="personalizationData",TR="previewFrame",AR="ipadPro",yR="ipad_10_5",ER="editorialNotes",PR="isGameCenterEnabled",IR="customProductCapabilities",_R="todayCard",SR="ARCADE_ACTION_TITLE_EXPLORE",OR="EXPLORE",RR="List",CR="pageFields",vR="Software",bR="actionDetails",kR="trending",DR="iAdMissedOpportunityReason",NR="pageDetails",LR="editorsChoice",$R="eula",xR="editorialCopy",FR="one",MR="NO_BADGE",UR="GET",BR="subtitle",GR="large",VR="remoteControllerRequirement",HR="iad",qR="its_id",WR="actionType",YR="kind",jR="arcadeSeeAllGames",zR="title",JR="contexts",KR="latest-release-app",ZR="developers",XR="data",QR="ipadPro_2018",eC="ipad_11",tC="todayBrick",nC="meta",rC="editorialBadgeInfo",oC="pageType",sC="{title}",iC="{osVersion}",cC="compatibilityAnnotation",aC="allProductReviews",uC="tapToRateProductReviewAction",lC="writeAReviewProductReviewAction",fC="Any",dC="Content",pC="host",hC="inAppPurchase",wC="arcadeGeneric",gC="iOS",mC="presentModalFormSheet",TC="platform",AC="isStandaloneForWatchOS",yC="isFirstPartyHideableApp",EC="editorialElementKind",PC="searchResults",IC="eventModule",_C="custom",SC="POST",OC="tvos",RC="appletvos",CC="tagline",vC="Search",bC="Room",kC="userProductReviews",DC="bundleParents",NC="notPurchasedLinks",LC="always",$C="Branded",xC="Arcade",FC="upsellMarketingItem",MC="metrics",UC="videoPreviewsByType",BC="text/x-apple-as3-nqml",GC="its_contentId",VC="smallStoryCard",HC="eventType",qC="iAdPlacementId",WC="create",YC="detailPage",jC="editorsChoiceProductReviews",zC="pathname",JC="bundleChildren",KC="tabs",ZC="searchLanding",XC="protocol",QC="screenshotsByType",ev="expectedReleaseDateDisplayFormat",tv="osx",nv="type",rv="prefersLargeTitle",ov="ACTION_SEE_ALL",sv="query",iv="colored",cv="displaySubStyle",av="renderPage",uv="rating",lv="view",fv="cardDisplayStyle",dv="text",pv="brandedSingleApp",hv="paragraph",wv="arcade-apps",gv="preorder",mv="searchTerm",Tv="iAdId",Av="Grid",yv="other",Ev="undefined",Pv="inAppPurchases",Iv="subscriptions",_v="macOS",Sv="color",Ov="impressions",Rv="iAdSlotInfo",Cv="action",vv="purchasedLinks",bv="video",kv="sort",Dv="today",Nv="gameCenter",Lv="defaultValue",$v="true",xv="achievements",Fv="artistName",Mv="groupings",Uv="marketing-items",Bv="developer",Gv="flowPreview",Vv="No page routes specified",Hv="iphone",qv="isAppleWatchSupported",Wv="array",Yv="productPage",jv="text/plain",zv="children",Jv="bundleId",Kv="in-apps",Zv="productArtwork",Xv="productVideo",Qv="navigate",eb="primary-content",tb="requiredCapabilities",nb="ios",rb="adamId",ob="product",sb="short",ib="ipad",cb="none",ab="light",ub="preorderDisclaimer",lb="finance",fb="displayStyle",db="productRatings",pb="editorialQuote",hb="featuredIn",wb="mostRecentVersion",gb="never",mb="account",Tb="mediumLockup",Ab="number",yb="messages",Eb="label",Pb="macRequiredCapabilities",Ib="card-contents",_b="infer",Sb="capabilities",Ob="moreByDeveloper",Rb="search",Cb="token",vb="link",bb="article",kb="privacyFooter",Db="videos",Nb="genre",Lb="isPreorder",$b="center",xb="coercible",Fb="similarItems",Mb="sequential",Ub="white",Bb="privacyTypes",Gb="leading",Vb="minimumOSVersion",Hb="ignoredValue",qb="informationRibbon",Wb="lockup",Yb="friendsPlaying",jb="privacyHeader",zb="swoosh",Jb="smallLockup",Kb="editorial-items",Zb="editorialVideo",Xb="appEvents",Qb="editorialArtwork",ek="boolean",tk="default",nk="artwork",rk="dark",ok="standard",sk="app",ik="information",ck="contents",ak="page",uk="pad",lk="app-bundles",fk="button",dk="description",pk="arcade",hk="header",wk="unknown",gk="topLockup",mk="phone",Tk="app-events",Ak="screenshots",yk="reviews",Ek="url",Pk="apps",Ik="string",_k="name",Sk="mac",Ok="watch",Rk="shelf"
class Ck{constructor(){this.$incidents=void 0}isValid(){return!0}}class vk extends Ck{constructor(e=null){super(),this.impressionMetrics=e}}class bk extends Ck{constructor(e,t,n,r,o,s,i,c,a,u,l,f,d,p,h,w,g){super(),this.buyParams=e,this.vendor=t,this.appName=n,this.bundleId=r,this.appPlatforms=o,this.isPreorder=null!=s&&s,this.excludeAttribution=null==i||i,this.metricsPlatformDisplayStyle=c,this.isRedownload=null!=u&&u,this.lineItem=a,this.preflightPackageUrl=void 0===l?null:l,this.isArcadeApp=f,this.isHalva=d,this.inAppEventId=p,this.extRefApp2=h,this.extRefUrl2=w,this.additionalHeaders=g}}class kk extends Ck{constructor(e,t,n,r,o,s,i,c,a,u,l,f,d,p,h,w,g,m,T){super(),this.offerType=e,this.adamId=t,this.parentAdamId=r,this.style=null==n?_b:n,this.environment=null==o?ab:o,this.tint=null==s?K_:s,this.offerTint=null==i?{type:K_}:i,this.titles=null==c?{}:c,this.titleSymbolNames=null==a?{}:a,this.subtitles=null==u?{}:u,this.hasInAppPurchases=l,this.hasExternalPurchases=f,this.isDeletableSystemApp=d,this.isFree=p,this.isPreorder=h,this.offerLabelStyle=null==w?cb:w,this.hasDiscount=g,this.contentRating=m,this.subscriptionFamilyId=T}newOfferDisplayPropertiesChangingAppearance(e,t,n,r,o){return new kk(this.offerType,this.adamId,null==t||!e&&this.style===rR?this.style:t,this.parentAdamId,null==n?this.environment:n,null==r?this.tint:r,null==o?this.offerTint:o,this.titles,this.titleSymbolNames,this.subtitles,this.hasInAppPurchases,this.hasExternalPurchases,this.isDeletableSystemApp,this.isFree,this.isPreorder,this.offerLabelStyle,this.hasDiscount,this.contentRating,this.subscriptionFamilyId)}}class Dk extends Ck{constructor(e,t,n){super(),this.offerAction=t,this.offerDisplayProperties=n,this.personalizedOfferType=e}}class Nk extends Ck{constructor(e,t,n){super(),this.format=e,this.quality=t,this.supportsWideGamut=n}isValid(){return this.format&&void 0!==this.supportsWideGamut}}class Lk extends Ck{constructor(e,t,n,r){super(),this.checksum=null,this.backgroundColor=null,this.style=null,this.crop="bb",this.template=e,this.width=t,this.height=n,this.variants=r}isPortrait(){return this.height>=this.width}isLandscape(){return!this.isPortrait()}isValid(){return this.template&&this.width>0&&this.height>0&&this.variants.length>0}}class $k extends Ck{constructor(e,t){super(),this.artwork=e,this.mediaPlatform=t}}class xk extends Ck{constructor(e,t,n,r,o,s){super(),this.appPlatform=e,this.supplementaryAppPlatforms=n||[],this.deviceCornerRadiusFactor=r,this.mediaType=t,this.deviceBorderThickness=o,this.outerDeviceCornerRadiusFactor=s}isEqualTo(e){this.supplementaryAppPlatforms.sort(),e.supplementaryAppPlatforms.sort()
const t=this.supplementaryAppPlatforms.join(",")===e.supplementaryAppPlatforms.join(",")
return e.appPlatform===this.appPlatform&&e.mediaType===this.mediaType&&t&&e.deviceCornerRadiusFactor===this.deviceCornerRadiusFactor}}class Fk{constructor(e,t){this.width=e,this.height=t}static fromNativeSize(e){return new Fk(e.width,e.height)}isEqualTo(e){return e.width===this.width&&e.height===this.height}}class Mk extends Ck{constructor(e,t,n,r,o,s){super(),this.itemName=e,this.url=t,this.developer=n,this.category=r,this.fileSize=o,this.mediaType=s}}class Uk extends Ck{constructor(e,t,n){super(),this.context=bb,this.text=e,this.subtitle=t,this.artwork=n}}class Bk extends Ck{constructor(e,t,n){super(),this.context=oR,this.text=e,this.subtitle=t,this.artwork=n}}class Gk extends Ck{constructor(e,t,n,r,o,s,i,c,a,u,l,f){super(),this.context=ob,this.adamId=e,this.storeFrontIdentifier=t,this.name=n,this.platform=r,this.icon=o,this.screenshots=s,this.videos=i,this.isMessagesOnlyApp=c,this.subtitle=a,this.genreName=u,this.messagesAppIcon=l,this.notesMetadata=f}}class Vk extends Ck{constructor(e,t,n){super(),this.metadata=e,this.url=t,this.shortUrl=n}}class Hk extends Ck{constructor(e,t,n){super(),this.reasonId=e,this.name=t,this.uppercaseName=n}}class qk extends Ck{constructor(e,t=jv){super(),this.rawText=e,this.rawTextType=t}}class Wk extends vk{constructor(e,t,n){super(),this.text=e,this.mediaType=t||jv,this.style=n||ok,this.alignment="localized",this.isCollapsed=!1,this.suppressVerticalMargins=!1,this.wantsCollapsedNewlines=!0}}class Yk extends Ck{constructor(e,t=null,n=null){super(),this.actions=e,this.offerDisplayProperties=t,this.offerActionIndex=n}}class jk extends vk{}class zk extends Ck{constructor(e){super(),this.isFallbackStyle=!1,this.type=e}}class Jk extends vk{constructor(e,t,n,r,o,s){super(),this.bundleId=e,this.completedAchievements=t,this.totalAchievements=n,this.completedText=r,this.action=o,this.achievements=s}}class Kk extends Ck{constructor(e){super(),this.type=e}}class Zk extends Ck{constructor(e,t,n,r){super(),this.id=e,this.title=t,this.subtitle=n,this.status=r}}class Xk extends Ck{constructor(e,t,n,r){super(),this.adamId=e,this.platformId=t,this.isArcade=n,this.records=r}}class Qk extends Ck{constructor(e,t){super(),this.playerId=e,this.timestamp=t}}class eD extends Ck{constructor(e,t,n){super(),this.videoUrl=e,this.preview=t,this.allowsAutoPlay=n.allowsAutoPlay,this.looping=n.looping,this.canPlayFullScreen=n.canPlayFullScreen,this.showPlaybackControls=n.showPlaybackControls,this.playbackControls={...n.playbackControls},this.autoPlayPlaybackControls={...n.autoPlayPlaybackControls},this.templateMediaEvent=null}}const tD=(Nl=e(447)).lo
tD[Rb]=Rb,tD[OA]=OA,tD[gb]=gb,tD[RA]=RA
const nD="xp_amp_appstore"
class rD{constructor(e,t,n,r,o=!1){this.fields=e,this.includingFields=t,this.excludingFields=n,this.topic=r,this.shouldFlush=o}}class oD extends Ck{constructor(e){super(),this.fields=e}}class sD extends Ck{constructor(e){super(),this.data=e||[],this.custom={}}addMetricsData(e){this.data.push(e)}addManyMetricsData(e){for(const t of e)this.addMetricsData(t)}clearAll(){this.data.length=0}}class iD extends Ck{constructor(){super(),this.instructions=[],this.custom={}}addInstruction(e){this.instructions.push(e)}addManyInstructions(e){for(const t of e)this.addInstruction(t)}addData(e,t){const n={data:e,invocationPoints:t}
this.instructions.push(n)}addManyData(e,t){for(const n of e)this.addData(n,t)}}class cD{constructor(e,t,n){this.fields=e,this.id=t,this.custom=n}}class aD extends cD{constructor(e,t){super(e.fields,e.id,e.custom||{}),this.custom.isFast=t,this.isFast=t}}class uD extends Ck{constructor(e){super(),this.shelves=e,this.title=null,this.presentationOptions=[],this.isIncomplete=!1,this.pageMetrics=new iD}}class lD extends Ck{constructor(){super(),this.pageMetrics=new iD,this.pageRenderMetrics={}}}class fD extends uD{}class dD extends uD{}class pD extends uD{constructor(e,t=null){super(e),this.sort=Z_,this.displayStyles=t}}class hD extends vk{constructor(e){super(),this.title=null,this.artwork=null,this.presentationStyle=[],this.actionClass=e,this.actionMetrics=new sD}}class wD extends hD{constructor(e,t){super(HP),this.page=e,this.pageUrl=t,this.pageData=null,this.presentationContext=_b,this.animationBehavior=_b,this.origin="inapp"}}class gD extends hD{constructor(e){super(Hl),this.navigationTab=e,this.actions=[],this.popToRoot=!1}}class mD extends hD{constructor(e,t){super("TabBadgeAction"),this.navigationTab=e,this.text=t}}class TD extends hD{constructor(e,t=!0){super("ExternalUrlAction"),this.url=e,this.isSensitive=t}}class AD extends hD{constructor(e){super("CompoundAction")
const t=[]
for(const n of e)this.actionMetrics.addManyMetricsData(n.actionMetrics.data),n.actionMetrics.clearAll(),t.push(n)
this.actions=t}}class yD extends hD{constructor(e,t,n){super("OfferAction"),this.title=e,this.adamId=t,this.purchaseConfiguration=n,n&&(this.bundleId=n.bundleId,this.lineItem=n.lineItem),this.includeBetaApps=!1}}class ED extends hD{constructor(e,t){super("OfferConfirmationAction"),this.buyAction=e,this.confirmationInitiationAction=t}}class PD extends hD{constructor(){super("OfferAlertAction"),this.title=null,this.message=null,this.footerMessage=null,this.isCancelable=!0,this.shouldCheckForAvailableDiskSpace=!1,this.checkRestrictionsForContentRating=null,this.remoteControllerRequirement=MR,this.shouldCheckForGameController=!1,this.shouldIncludeActiveAccountInFooterMessage=!1,this.shouldPromptForConfirmation=!1,this.completionAction=null}}class ID extends hD{constructor(e,t){super("CancelPreorderAction"),this.preorderAdamId=e,this.isArcade=t}}class _D extends hD{constructor(e,t,n,r,o){super("InAppPurchaseAction"),this.productIdentifier=e,this.appAdamId=t,this.appBundleId=n,this.installRequiredAction=r,this.minimumShortVersionSupportingInAppPurchaseFlow=o}}class SD extends hD{constructor(e,t){super("OfferStateAction"),this.title=t.title,this.adamId=e,this.defaultAction=t,this.includeBetaApps=!1}}class OD extends hD{constructor(e,t=sk){super("OpenAppAction"),this.adamId=e,this.destination=t}}class RD extends hD{constructor(e){super("HttpAction"),this.url=e,this.method=UR,this.headers={},this.body=null,this.isStoreRequest=!1,this.needsAuthentication=!1,this.retryCount=0,this.disableCache=!1,this.successAction=null,this.failureAction=null}}class CD{constructor(e,t,n,r){this.key=e,this.target=t,this.inputType=n,this.title=r,this.isRequired=!0,this.maximumLength=null}}class vD extends hD{constructor(e){super("HttpTemplateAction"),this.message=null,this.url=e,this.method=UR,this.headers={},this.body=null,this.parameters=[],this.isStoreRequest=!1,this.needsAuthentication=!1,this.retryCount=0,this.disableCache=!1,this.successAction=null,this.failureAction=null}}class bD extends vD{}class kD extends hD{constructor(e,t){super("WriteReviewAction"),this.adamId=e,this.url=t}}class DD extends hD{constructor(e){super("SheetAction"),this.actions=e,this.isCancelable=!1,this.cancelTitle=null,this.message=null,this.style=tk,this.isCustom=!1,this.destructiveActionIndex=null}}class ND extends hD{constructor(e){super("AlertAction"),this.style=e,this.title=null,this.message=null,this.isCancelable=!1,this.cancelTitle=null,this.buttonActions=[],this.buttonTitles=[],this.destructiveActionIndex=null}}class LD extends vk{constructor(e,t){super(),this.activityType=e,this.action=t}}class $D extends hD{constructor(e,t,n=ql){super("ShareSheetAction"),this.data=e,this.activities=t,this.shareSheetStyle=n}}class xD extends hD{constructor(e){super("ReportConcernAction"),this.reasons=e}}class FD extends hD{constructor(e,t){super("ProductPageScrollAction"),this.section=e,this.clicksOnScroll=t}}class MD extends hD{constructor(e,t,n,r){super("ArcadeAction"),this.productIdentifier=e,this.appAdamId=t,this.postSubscribeAction=r,this.subscriptionToken=n}}class UD extends hD{constructor(e){super("FamilyCircleAction"),this.clientName=e}}class BD extends hD{constructor(){super("BlankAction")}}class GD extends hD{constructor(e,t){super("SearchAdAction"),this.action=e,this.searchAd=t}}class VD extends hD{constructor(e,t){super("RateLimitedAction"),this.actionKey=e,this.primaryAction=t}}class HD extends hD{constructor(e,t,n,r){super("ArcadeSubscriptionStateAction"),this.notSubscribedAction=e,this.purchasingAction=t,this.subscribedAction=n,this.unknownAction=r}}class qD extends hD{constructor(e){super("GameCenterPlayerProfileAction"),this.playerId=e}}class WD extends hD{constructor(e){super("GameCenterAchievementsAction"),this.bundleId=e}}class YD extends hD{constructor(e){super("GameCenterInvitePlayerAction"),this.contactId=e}}class jD extends hD{constructor(e){super("GameCenterDenylistPlayerAction"),this.contactId=e}}class zD extends hD{constructor(e,t){super("EngagementToggleAction"),this.identifier=e,this.value=t}}class JD extends hD{constructor(e,t,n){super("ShelfBasedPageScrollAction"),this.shelfId=e,this.index=t,this.clicksOnScroll=n}}class KD extends hD{constructor(){super("InvalidateAllWidgetsAction")}}class ZD extends hD{constructor(e,t,n){super("AppLaunchTrampolineAction"),this.bundleId=e,this.payloadUrl=t,this.fallbackOpenAppAction=null,this.fallbackAction=n}}class XD extends hD{constructor(e,t,n,r,o,s,i,c,a){super("CreateCalendarEventAction"),this.startDate=e,this.endDate=t,this.isAllDay=n,this.name=r,this.location=o,this.notes=s,this.url=i,this.notAuthorizedAction=c,this.availability=a}}class QD extends hD{constructor(e){super("CopyTextAction"),this.text=e}}class eN extends hD{constructor(){super("ClearAppUsageDataAction")}}Ll=e(172)
const tN={}
!function(e){e.requestedUrl="_jet-internal:metricsHelpers_requestedUrl",e.timingValues="_jet-internal:metricsHelpers_timingValues",e.pageInformation="_jet-internal:metricsHelpers_pageInformation",e.contentMaxAge="_jet-internal:responseMetadata_contentMaxAge"}($l||($l={}))
const nN=/^([a-z][a-z0-9.+-]*:)(\/\/)?([\S\s]*)/i,rN=/([^=?&]+)=?([^&]*)/g,oN=[j_,sv,zC,pC]
class sN{constructor(e){if(this.query={},!e)return
let t=e
const n=nN.exec(e)
if(n){let e=n[1]
e&&(e=e.split(":")[0]),this.protocol=e,t=n[3]}let r={remainder:t,result:null}
for(const e of oN){if(!r.remainder)break
switch(e){case j_:r=m(r.remainder,"#",MP),this.hash=r.result
break
case sv:r=m(r.remainder,"?",MP),r.result&&(this.query=sN.queryFromString(r.result))
break
case zC:r=m(r.remainder,"/",MP),r.result&&(this.pathname="/"+r.result)
break
case pC:if(r.remainder){const e=m(r.remainder,"@",hm),t=e.result,n=e.remainder
if(t){const e=t.split(":")
this.username=decodeURIComponent(e[0]),this.password=decodeURIComponent(e[1])}if(n){const e=n.split(":")
this.host=e[0],this.port=e[1]}}break
default:throw new Error("Unhandled case!")}}}set(e,t){if(!t)return this
switch(e===sv&&typeof t===Ik&&(t=sN.queryFromString(t)),e){case XC:this.protocol=t
break
case wm:this.username=t
break
case gm:this.password=t
break
case mm:this.port=t
break
case zC:this.pathname=t
break
case sv:this.query=t
break
case j_:this.hash=t
break
default:this[e]=t}return this}get(e){switch(e){case XC:return this.protocol
case wm:return this.username
case gm:return this.password
case mm:return this.port
case zC:return this.pathname
case sv:return this.query
case j_:return this.hash
default:return this[e]}}append(e,t){const n=this.get(e)
let r
if(e===sv)typeof t===Ik&&(t=sN.queryFromString(t)),r=typeof n===Ik?{existingValue:n,...t}:{...n,...t}
else{let o=n
o||(o="")
let s=o
if(e===zC){const e=o.length
e&&"/"===n[e-1]||(s+="/")}s+=t,r=s}return this.set(e,r)}param(e,t){return e?(this.query||(this.query={}),this.query[e]=t,this):this}removeParam(e){return e&&this.query?(void 0!==this.query[e]&&delete this.query[e],this):this}path(e){return this.append(zC,e)}pathExtension(){if(void 0===this.pathname)return null
const e=this.pathname.split("/").filter(e=>e.length>0).pop().split(".")
return e.filter(function(e){return""!==e}).length<2?null:e.pop()}pathComponents(){return this.pathname?this.pathname.split("/").filter(e=>e.length>0):[]}popPathComponent(){if(!this.pathname)return null
const e=this.pathname.slice(this.pathname.lastIndexOf("/")+1)
return 0===e.length?null:(this.pathname=this.pathname.slice(0,this.pathname.lastIndexOf("/")),e)}build(){return this.toString()}toString(){let e=""
return this.protocol&&(e+=this.protocol+"://"),this.username&&(e+=encodeURIComponent(this.username),this.password&&(e+=":"+encodeURIComponent(this.password)),e+="@"),this.host&&(e+=this.host,this.port&&(e+=":"+this.port)),this.pathname&&(e+=this.pathname),this.query&&Object.keys(this.query).length&&(e+="?"+sN.toQueryString(this.query)),this.hash&&(e+="#"+this.hash),e}static queryFromString(e){const t={}
let n=rN.exec(e)
for(;n;){const r=decodeURIComponent(n[1]),o=decodeURIComponent(n[2])
t[r]=o,n=rN.exec(e)}return t}static toQueryString(e){let t="",n=!0
for(const r of Object.keys(e)){n||(t+="&"),n=!1,t+=encodeURIComponent(r)
const o=e[r]
o&&o.length&&(t+="="+encodeURIComponent(o))}return t}static from(e){return new sN(e)}static fromComponents(e,t,n,r,o){const s=new sN
return s.protocol=e,s.host=t,s.pathname=n,s.query=r,s.hash=o,s}}const iN={artwork:FP,screenshotsByType:"customScreenshotsByType",promotionalText:"customPromotionalText",videoPreviewsByType:"customVideoPreviewsByType",customScreenshotsByTypeForAd:vy,customVideoPreviewsByTypeForAd:by},cN=(e,t)=>e||t
class aN extends Error{}const uN="x-apple-application-instance",lN="x-apple-application-site"
xl=e(100),Fl=e(222)
const fN=(0,(Ml=e(900)).makeMetatype)("app-store:storeMetrics"),dN=(0,Ml.makeMetatype)("app-store:device"),pN=(0,Ml.makeMetatype)("app-store:user"),hN=(0,Ml.makeMetatype)("app-store:personalizationStore"),wN=(0,Ml.makeMetatype)("app-store:arcade"),gN=(0,Ml.makeMetatype)("app-store:gameCenter"),mN=(0,Ml.makeMetatype)("app-store:resilientDeepLinks"),TN=(0,Ml.makeMetatype)("app-store:ads"),AN=(0,Ml.makeMetatype)("app-store:onDeviceRecommendationsManager"),yN=(0,Ml.makeMetatype)("app-store:featureFlags"),EN=(0,Ml.makeMetatype)("app-store:mediaTokenService")
class PN{constructor(e){this.implementation=e}}class IN extends PN{get isSupportEnabled(){return s(this.implementation)&&this.implementation.isSupportEnabled}get isRosettaAvailable(){return s(this.implementation)&&this.implementation.isRosettaAvailable}}IN.type=(0,Ml.makeMetatype)("app-store:as-wrapper")
class _N extends PN{constructor(e,t){super(e),e.registerBagKeys([{key:Im,type:Ek},{key:Rb,type:Ek},{key:_m,type:Ek},{key:Sm,type:Ek},{key:Om,type:ek},{key:Rm,type:Ek},{key:Cm,type:Ek},{key:vm,type:Ek},{key:bm,type:Ek},{key:km,type:Ek},{key:MC,type:BP},{key:Dm,type:Ik},{key:GP,type:Ik},{key:Nm,type:Ek},{key:Lm,type:ek},{key:$m,type:ek},{key:xm,type:ek},{key:Fm,type:Ek},{key:Mm,type:Ik},{key:Um,type:Ek},{key:Bm,type:ek},{key:Gm,type:Ek},{key:Vm,type:Ek},{key:Hm,type:Ek},{key:qm,type:Ik},{key:Wm,type:ek},{key:Ym,type:Ik},{key:jm,type:Wv},{key:zm,type:Wv},{key:Jm,type:Wv},{key:Km,type:Ek},{key:Zm,type:Ek},{key:VP,type:this.mediaEdgeHostBagValueType(t)},{key:Xm,type:Ik},{key:Qm,type:Ik},{key:eT,type:Wv},{key:tT,type:Ab},{key:nT,type:Ik},{key:rT,type:Wv},{key:oT,type:Wv},{key:sT,type:Wv},{key:iT,type:Ik},{key:cT,type:Ik},{key:aT,type:Ik},{key:uT,type:Ik},{key:lT,type:Ik},{key:fT,type:Ik},{key:dT,type:Ik},{key:pT,type:Wv},{key:hT,type:Wv},{key:wT,type:ek},{key:gT,type:Ek},{key:mT,type:ek},{key:TT,type:Ik},{key:AT,type:Ek},{key:yT,type:Ik},{key:ET,type:Wv},{key:PT,type:Wv},{key:IT,type:Wv},{key:_T,type:Ab},{key:ST,type:Ab},{key:OT,type:ek},{key:RT,type:Ik},{key:CT,type:ek},{key:vT,type:Ab},{key:bT,type:Ab},{key:kT,type:ek},{key:DT,type:Ab},{key:NT,type:Ab},{key:LT,type:Ik},{key:$T,type:Wv},{key:xT,type:Ik},{key:FT,type:Ik},{key:MT,type:Ab},{key:UT,type:Ab},{key:BT,type:Ab},{key:GT,type:ek},{key:VT,type:ek},{key:"productPageVariantsTreatmentGroupIdOverride",type:Ik},{key:HT,type:ek},{key:qT,type:Ab},{key:WT,type:ek},{key:YT,type:ek},{key:jT,type:ek},{key:zT,type:Ab},{key:JT,type:ek},{key:KT,type:Ik},{key:ZT,type:Ik},{key:XT,type:ek},{key:QT,type:ek},{key:eA,type:Wv},{key:tA,type:Ik},{key:nA,type:ek},{key:rA,type:ek},{key:oA,type:ek},{key:sA,type:Wv},{key:iA,type:BP},{key:cA,type:ek},{key:aA,type:BP},{key:uA,type:Ik},{key:lA,type:Ik},{key:fA,type:Ik},{key:dA,type:Ik},{key:pA,type:Ik},{key:hA,type:Ik},{key:wA,type:Ab},{key:gA,type:Ik}])}mediaEdgeHostBagValueType(e){return e.clientIdentifier===kA?Ek:Ik}get trendingSearchesURL(){return this.implementation.url(Im)}get searchHintsURL(){return this.implementation.url(_m)}get personalizedUserReviewURL(){return this.implementation.url(Sm)}get personalizedUserReviewEnabled(){return this.implementation.boolean(Om)}get userRateURL(){return this.implementation.url(Rm)}get writeReviewURL(){return this.implementation.url(Cm)}get accessoryRoomURL(){return this.implementation.url(vm)}get passbookMainURL(){return this.implementation.url(bm)}get libraryLinkURL(){return this.implementation.url(km)}get metricsConfiguration(){return g(this.implementation.dictionary(MC))}get language(){return this.implementation.string(GP)}get mediaApiLanguage(){return this.implementation.string(Dm)||this.implementation.string(GP)}get termsAndConditionsURL(){return this.implementation.url(Nm)}get usePostForAppStoreSearch(){return this.implementation.boolean(Lm)}get isMonetaryGiftingEnabled(){return this.implementation.boolean($m)}get accountTopUpURL(){return this.implementation.url(Fm)}get accountTopUpTitle(){return this.implementation.string(Mm)}get isContentGiftingEnabled(){return this.implementation.boolean(xm)}get buyButtonMetadataURL(){return this.implementation.url(Um)}get isTVAppEnabled(){return this.implementation.boolean(Bm)}get emailSupportLinkURL(){return this.implementation.url(Gm)}get voteUrl(){return this.implementation.url(Vm)}get reportConcernUrl(){return this.implementation.url(Hm)}get reportConcernExplanation(){return this.implementation.string(qm)}get reportConcernReasons(){return a(w(this.implementation.array(Jm)))}get reportProblemEnabled(){var e
return null!==(e=this.implementation.boolean(Wm))&&void 0!==e&&e}get productPageReportProblemURL(){return this.implementation.string(Ym)}get productPageReportProblemSADSubscriptionArray(){return a(w(this.implementation.array(jm)))}get productPageReportProblemSecondPartyAppArray(){const e=a(w(this.implementation.array(zm)))
return o(e)?["1473505534","1416238567","640199958","1529498570","915061776","1130498044","1070072560"]:e}get createAccountUrl(){return this.implementation.url(Km)}get mediaCountryCode(){return this.implementation.string(nT)}get mediaHost(){return this.implementation.url(Zm)}mediaEdgeHost(e){return e.host.clientIdentifier===kA?this.implementation.url(VP):this.implementation.string(VP)}get mediaEdgeSearchHost(){return this.implementation.string(Qm)}get mediaPreviewHost(){return this.implementation.string(Xm)}get edgeEndpoints(){const e=this.implementation.array(eT)
return typeof e===Ev?[]:a(w(e))}get mediaAdvertRequestLimit(){var e
return null!==(e=this.implementation.double(tT))&&void 0!==e?e:4}get searchSortOptions(){return a(w(this.implementation.array(rT)))}get ageBands(){return a(w(this.implementation.array(oT)))}get redirectUrlWhitelistedQueryParams(){let e=a(w(this.implementation.array(sT)))
return o(e)&&(e=["affC",pm,"advp","at","ct","itsct","itscg","itscc","itcCt",dm,"ls","partnerId","pt","qtkid","uo"]),e}get redirectUrlEndpoint(){var e
return null!==(e=this.implementation.string(iT))&&void 0!==e?e:"https://itunes.apple.com/WebObjects/MZStoreServices.woa/wa/processRedirectUrl"}get aristotleParentAppAdamId(){var e
return null!==(e=this.implementation.string("aristotle-app-id"))&&void 0!==e?e:"383941000"}get arcadeAppAdamId(){return this.implementation.string(cT)}get arcadeProductFamilyId(){var e
return null!==(e=this.implementation.string(aT))&&void 0!==e?e:this.implementation.string(uT)}get arcadeProductId(){var e
return null!==(e=this.implementation.string(lT))&&void 0!==e?e:this.implementation.string(fT)}get searchTransparencyAdamId(){return this.implementation.string(dT)}get hideableSystemApps(){return a(w(this.implementation.array(pT)))}get tabsStandard(){return a(w(this.implementation.array(hT)))}get isArcadeComingSoonEnabled(){return this.implementation.boolean(wT)}get watchAppsGroupingURL(){var e
return null!==(e=this.implementation.url(gT))&&void 0!==e?e:"https://apps.apple.com/WebObjects/MZStore.woa/wa/viewFeature?id=1472048385"}get requireAgeVerification(){return this.implementation.boolean(mT)}get ageRatingLearnMoreEditorialItemId(){return this.implementation.string(TT)}get appleSiliconMacUnverifiedBadgeEditorialItemId(){return this.implementation.string(RT)}get safariExtensionsGroupingURL(){return this.implementation.url(AT)}get familySubscriptionsLearnMoreEditorialItemId(){return this.implementation.string(yT)}get dynamicUIRegexStrings(){const e=this.implementation.array(ET)
return typeof e===Ev?[]:a(w(e))}get financeUIRegexStrings(){const e=this.implementation.array(PT)
return typeof e===Ev?[]:a(w(e))}get webViewRegexStrings(){const e=this.implementation.array(IT)
return typeof e===Ev?[]:a(w(e))}get arcadePreOrderUpsellLimitSeconds(){var e
return null!==(e=this.implementation.double(_T))&&void 0!==e?e:86400}get recentlyPlayedGamesWindowInSeconds(){var e
return null!==(e=this.implementation.double(ST))&&void 0!==e?e:7776e3}get enableComingSoonToggle(){return this.implementation.boolean(CT)}get enablePrivacyNutritionLabels(){var e
return null!==(e=this.implementation.boolean(OT))&&void 0!==e&&e}get arcadeOfferEditorialItemId(){return this.implementation.string(xT)}get sponsoredSearchODMLTimeout(){var e
return null!==(e=this.implementation.double(vT))&&void 0!==e?e:3}get isSearchLandingAdsEnabled(){return this.implementation.boolean(kT)}get searchLandingAdFetchTimeout(){var e
return null!==(e=this.implementation.double(bT))&&void 0!==e?e:.175}get searchLandingPageOffscreenRefreshInterval(){var e
return null!==(e=this.implementation.double(DT))&&void 0!==e?e:60}get searchLandingPageRefreshUpdateDelayInterval(){var e
return null!==(e=this.implementation.double(NT))&&void 0!==e?e:.3}get appPrivacyLearnMoreEditorialItemId(){return this.implementation.string(LT)}get suppressedPrivacyAppIds(){const e=this.implementation.array($T)
return typeof e===Ev?[]:a(w(e))}get appPrivacyDefinitionsEditorialItemId(){return this.implementation.string(FT)}get todayWidgetInvalidationHour(){var e
return null!==(e=this.implementation.double(MT))&&void 0!==e?e:2}get todayWidgetInvalidationJitterMinutes(){var e
return null!==(e=this.implementation.double(UT))&&void 0!==e?e:119}get todayWidgetLivePreviewRolloutRate(){var e
return null!==(e=this.implementation.double(BT))&&void 0!==e?e:1}get enableAppEvents(){var e
return null!==(e=this.implementation.boolean(GT))&&void 0!==e&&e}get enableProductPageVariants(){var e
return null!==(e=this.implementation.boolean(VT))&&void 0!==e&&e}get enableArcadeTrialEligibleBadging(){return this.implementation.boolean(HT)}get heroCarouselAutoScrollDuration(){var e
return null!==(e=this.implementation.double(qT))&&void 0!==e?e:7}get enableAdditionalLoggingForPPV(){var e
return null!==(e=this.implementation.boolean(WT))&&void 0!==e&&e}get enableOnDevicePersonalization(){const e=this.implementation.boolean(YT)
return!!r(e)||e}get enableAutomaticPageRefresh(){var e
return null===(e=this.implementation.boolean(jT))||void 0===e||e}get widgetSuggestionsFromTodayTabRolloutRate(){var e
return null!==(e=this.implementation.double(zT))&&void 0!==e?e:1}get todayWidgetSmartStackJitterMinutes(){var e
return null!==(e=this.implementation.double("today-widget-smart-stack-jitter-minutes"))&&void 0!==e?e:45}get enableSystemAppReviews(){var e
return null!==(e=this.implementation.boolean(JT))&&void 0!==e&&e}get enableCPPInSearchAds(){return this.implementation.boolean("enableCPPsInSearchAds")||!1}get cancelPreorderItemSrv(){return this.implementation.url(KT)||"https://buy.itunes.apple.com/commerce/preorders/cancel"}get getCancellablePreorderItemsSrv(){return this.implementation.url(ZT)||"https://buy.itunes.apple.com/commerce/preorders/cancellable"}get arePreordersCancellable(){var e
return null!==(e=this.implementation.boolean(XT))&&void 0!==e&&e}get enabledAdPlacements(){return a(w(this.implementation.array(sA)))}get adPlacementTimeouts(){return d(g(this.implementation.dictionary(iA)))}get enableExternalPurchases(){var e
return null!==(e=this.implementation.boolean(QT))&&void 0!==e&&e}get enabledExternalPurchasesPlacements(){return a(w(this.implementation.array(eA)))}get externalPurchasesLearnMoreEditorialItemId(){return this.implementation.string(tA)}get externalPurchasesIncludeProductPageBannerIcon(){var e
return null!==(e=this.implementation.boolean(nA))&&void 0!==e&&e}get externalPurchasesProductPageBannerUseAlternateCopy(){var e
return null!==(e=this.implementation.boolean(rA))&&void 0!==e&&e}get externalPurchasesProductPageAnnotationUseAlternateCopy(){var e
return null!==(e=this.implementation.boolean(oA))&&void 0!==e&&e}get newEventsForODJAreEnabled(){var e
return null!==(e=this.implementation.boolean(cA))&&void 0!==e&&e}get defaultChart(){return g(this.implementation.dictionary(aA))}get accountUrl(){var e
return null!==(e=this.implementation.string(uA))&&void 0!==e?e:"https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/accountSummary"}get redeemUrl(){var e
return null!==(e=this.implementation.string(lA))&&void 0!==e?e:"https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/redeemLandingPage"}get charityUrl(){var e
return null!==(e=this.implementation.string(fA))&&void 0!==e?e:"https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/buyCharityGiftWizard"}get manageSubscriptionsUrl(){var e
return null!==(e=this.implementation.string(dA))&&void 0!==e?e:Pf}get manageSubscriptionsV2Url(){var e
return null!==(e=this.implementation.string(pA))&&void 0!==e?e:"https://apps.mzstatic.com/content/54a1317a0ad442d3965d64ef6bfaae1c/"}get adsOverrideLanguage(){return this.implementation.string(hA)}get gameControllerRecommendedRolloutRate(){var e
return null!==(e=this.implementation.double(wA))&&void 0!==e?e:0}get gameControllerLearnMoreEditorialItemId(){return this.implementation.string(gA)}}_N.type=(0,Ml.makeMetatype)("app-store:bag-wrapper")
const SN="com.apple.AppStore",ON="com.apple.AppStore.BridgeStoreExtension",RN="com.apple.MobileSMS",CN="com.apple.Arcade",vN="com.apple.TVAppStore",bN="com.apple.AppStore.ProductPageExtension"
class kN extends PN{get buildType(){return this.implementation.buildType}get deviceType(){return this.implementation.deviceType}get guid(){return this.implementation.guid}get isActivityAvailable(){return this.implementation.isActivityAvailable}get isElectrocardiogramInstallationAllowed(){return this.implementation.isElectrocardiogramInstallationAllowed}get isScandiumInstallationAllowed(){return this.implementation.isScandiumInstallationAllowed}get isSidepackingEnabled(){return this.implementation.isSidepackingEnabled}get isTinkerWatch(){return this.implementation.isTinkerWatch}get newPaymentMethodEnabled(){return this.implementation.newPaymentMethodEnabled}get screenCornerRadius(){return this.implementation.screenCornerRadius}get screenSize(){return Fk.fromNativeSize(this.implementation.screenSize)}get storefrontIdentifier(){return this.implementation.storefrontIdentifier}get supportsHEIF(){return this.implementation.supportsHEIF}get thinnedApplicationVariantIdentifier(){return this.implementation.thinnedApplicationVariantIdentifier}isPairedSystemVersionAtLeast(e){return this.implementation.isPairedSystemVersionAtLeast(e)}deletableSystemAppCanBeInstalledOnWatchWithBundleID(e){return this.implementation.deletableSystemAppCanBeInstalledOnWatchWithBundleID(e)}deviceHasCapabilities(e){return this.implementation.deviceHasCapabilities(e)}isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(e,t,n){return this.implementation.isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(e,t,n)}isAutomaticDownloadingEnabled(){return this.implementation.isAutomaticDownloadingEnabled()}isAuthorisedForUserNotifications(){return this.implementation.isAuthorisedForUserNotifications()}isActivePairedWatchSystemVersionBelow(e){const t=e.split("."),n=f(t[0])||0,r=f(t[1])||0,o=f(t[2])||0
return!this.implementation.isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(n,r,o)}get isPhone(){return this.deviceType===mk}get isPad(){return this.deviceType===uk}get isiOS(){return this.isPhone||this.isPad}get isMac(){return this.deviceType===Sk}get isTV(){return"tv"===this.deviceType}get isWatch(){return this.deviceType===Ok}}kN.type=(0,Ml.makeMetatype)("app-store:client-wrapper")
class DN extends PN{orderedVisibleIAPs(e,t,n,r){return new Promise((o,s)=>{const i=t.filter(e=>null!=e),c=n.filter(e=>null!=e)
this.implementation.orderedVisibleIAPs(e,i,c,r,(e,t)=>{t?s(t):o(e)})})}visibilityForIAPs(e){return new Promise((t,n)=>{this.implementation.visibilityForIAPs(e,(e,n)=>{t(n?{}:e)})})}}DN.type=(0,Ml.makeMetatype)("app-store:client-ordering-wrapper")
class NN extends PN{get clientIdentifier(){return this.implementation.clientIdentifier}get clientVersion(){return this.implementation.clientVersion}get deviceLocalizedModel(){return this.implementation.deviceLocalizedModel}get deviceModel(){return this.implementation.deviceModel}get osBuild(){return this.implementation.osBuild}get platform(){return this.implementation.platform}isOSAtLeast(e,t,n){return this.implementation.isOSAtLeast(e,t,n)}get isiOS(){return this.platform===gC}get isMac(){return this.platform===_v}get isTV(){return this.platform===LO}get isWatch(){return this.platform===ZE}get isWeb(){return"web"===this.platform}}NN.type=(0,Ml.makeMetatype)("app-store:host-wrapper")
class LN{constructor(){this.locData={},this.language="en"}updateLocalizationData(e,t){this.locData=e,this.language=t}localize(e,t){let n=this.locData[e]
return void 0!==n&&typeof n===Ik||(n=e),t&&(n=this.replaceTokens(n,t)),n=this.replaceMarkupTokens(n,t),n}localizeWithCount(e,t,n){let r,o,s=null
return 0===t&&(r=`${e}.zero`,this.isLocalized(r)&&(s=r)),null===s&&(s=e,o=this.pluralCategory(t),o!==yv&&(r=`${e}.${o}`,this.isLocalized(r)&&(s=r))),n||(n={}),void 0===n.count&&(n.count=this.formatNumber(t.toString())),void 0===n.number&&(n.number=this.formatNumber(t.toString())),this.localize(s,n)}replaceTokens(e,t){return Object.entries(t).forEach(([t,n])=>{const r="@@"+t+"@@"
e=this.replaceSubstring(e,r,n)}),e}replaceMarkupTokens(e,t){if(e.indexOf("##")<=-1)return e
let n
return t?(n={...LN.MARKUP_PARAMS},Object.entries(t).forEach(([e,t])=>{n[e]=t})):n=LN.MARKUP_PARAMS,Object.entries(n).forEach(([t,n])=>{const r="##"+t+"##"
e=e.replace(new RegExp(r,"gi"),n)}),e=e.replace(/##([^##]+)##/gi,"<$1>")}replaceSubstring(e,t,n){return e.split(t).join(n)}formatNumber(e){let t=this.locData._decimalSeparator
void 0!==t&&typeof t===Ik||(t=".")
let n=this.locData._thousandsSeparator
void 0!==n&&typeof n===Ik||(n=".")
const r=parseFloat(e).toString().split("."),o=r[0].split("")
for(let e=o.length-3;e>0;e-=3)o.splice(e,0,n)
return r[0]=o.join(""),r.join(t)}isLocalized(e){const t=this.locData[e]
return void 0!==t&&typeof t===Ik&&(-1===e.indexOf(".")||t!==e&&(0!==t.indexOf("**")||t.lastIndexOf("**")!==t.length-2))}pluralCategory(e){const t=LN.pluralCategoryFnByLanguage[this.language]
return void 0!==t?t(e):yv}}LN.MARKUP_PARAMS={nbsp:"&nbsp;",gt:"&gt;",lt:"&lt;",copy:"\xa9"},LN.pluralCategoryDefault=function(e){return yv},LN.pluralCategoryOne=function(e){return 1===e?FR:yv},LN.pluralCategoryArabic=function(e){const t=e>>0
if(t!==e)return yv
if(0===t)return"zero"
if(1===t)return FR
if(2===t)return"two"
const n=t%100
return n>=11?fO:n>=3?tR:yv},LN.pluralCategoryFrench=function(e){return e<2&&e>=0?FR:yv},LN.pluralCategoryHebrew=function(e){const t=e>>0
return t!==e?yv:1===t?FR:2===t?"two":0==t%10&&t>10?fO:yv},LN.pluralCategoryPolish=function(e){const t=e>>0
if(t!==e)return yv
if(1===t)return FR
const n=t%10
if(n<=4&&n>=2){const e=t%100
if(e>14||e<12)return tR}return fO},LN.pluralCategoryRomanian=function(e){const t=e>>0
if(t!==e)return tR
if(0===t)return tR
if(1===t)return FR
const n=e%100
return n<=19&&n>=1?tR:yv},LN.pluralCategoryRussian=function(e){const t=e>>0
if(t!==e)return yv
const n=t%10
if(n>=5||0===n)return fO
const r=t%100
return r<=14&&r>=11?fO:1===n?FR:tR},LN.pluralCategoryFnByLanguage={zh:LN.pluralCategoryDefault,id:LN.pluralCategoryDefault,ja:LN.pluralCategoryDefault,ko:LN.pluralCategoryDefault,ms:LN.pluralCategoryDefault,th:LN.pluralCategoryDefault,vi:LN.pluralCategoryDefault,en:LN.pluralCategoryOne,ca:LN.pluralCategoryOne,da:LN.pluralCategoryOne,nl:LN.pluralCategoryOne,de:LN.pluralCategoryOne,el:LN.pluralCategoryOne,fi:LN.pluralCategoryOne,hu:LN.pluralCategoryOne,it:LN.pluralCategoryOne,nb:LN.pluralCategoryOne,no:LN.pluralCategoryOne,pt:LN.pluralCategoryOne,es:LN.pluralCategoryOne,sv:LN.pluralCategoryOne,tr:LN.pluralCategoryOne,ar:LN.pluralCategoryArabic,fr:LN.pluralCategoryFrench,iw:LN.pluralCategoryHebrew,pl:LN.pluralCategoryPolish,ro:LN.pluralCategoryRomanian,ru:LN.pluralCategoryRussian}
class $N extends PN{constructor(){super(...arguments),this.locFile=null,this.ampLoc=new LN,this.LOC_STRING_CACHE={}}get arcadeWordmarkAssetName(){return this.implementation.arcadeWordmarkAssetName}get identifier(){return this.implementation.identifier}get safeIdentifier(){return this.implementation.identifier.split("_")[0]}string(e,t){let n=this.LOC_STRING_CACHE[e]
if(!n)if(n=this.implementation.string(e),n&&n!==e)this.LOC_STRING_CACHE[e]=n
else{const r=this.ampLoc.localize(e)
n=r!==e?r:t||e}return n}stringWithCount(e,t,n){let r=this.implementation.stringWithCount(e,t)
if(!r||r===e){const o=this.ampLoc.localizeWithCount(e,t,n)
o&&(r=o)}return r}stringWithCounts(e,t,n){return this.implementation.stringWithCounts(e,t)}uppercased(e){return e?e.toLocaleUpperCase(this.safeIdentifier):null}decimal(e,t){let n=this.implementation.decimal(e,t)
return n||(n=typeof e===Ab?`* ${e.toString()} *`:this.nullString()),n}fileSize(e){let t=this.implementation.fileSize(e)
return t||(t=this.nullString()),t}formattedCount(e){let t=this.implementation.formattedCount(e)
return t||(t=this.nullString()),t}timeAgoWithContext(e,t){let n=this.implementation.timeAgoWithContext(e,t)
return n||(n=this.nullString()),n}formatDate(e,t){let n=this.implementation.formatDate(e,t)
return n||(n=this.nullString()),n}formatDateWithContext(e,t,n){let r=this.implementation.formatDateWithContext(e,t,n)
return r||(r=this.nullString()),r}formatDateInSentence(e,t,n){let r=this.implementation.formatDateInSentence(e,t,n)
return r||(r=this.nullString()),r}relativeDate(e){let t=this.implementation.relativeDate(e)
return t||(t=this.nullString()),t}formatDuration(e,t){let n=this.implementation.formatDuration(e,t)
return n||(n=this.nullString()),n}applyLocalizations(e,t,n){this.isLocFileLoaded(e)||(this.locFile=e,this.ampLoc.updateLocalizationData(t,n.slice(0,2)))}isLocFileLoaded(e){return this.locFile===e}normalizedLocale(e,t,n){if(null==t)return null
if("yue-hant"===(t=t.toLowerCase())){const t=e.props.asString("macauStorefrontIdentifier")
return typeof n===Ik&&-1!==n.indexOf(t)?"zh-ma":"zh-hk"}return t}nullString(){return"* null *"}load(e){if(void 0===e.bag.language||null===e.bag.language)throw new Error("Bag language is not available. Unable to load localizations.")
const t=this.normalizedLocale(e,e.bag.language,e.client.storefrontIdentifier),n=`local/${t}`
if(!this.isLocFileLoaded(n)){const r=e.props.asDictionary(`localizations.${t}`)
if(null!=r)this.applyLocalizations(n,r,t)
else{const r=e.props.asDictionary("localizations.en-us")
null!=r&&this.applyLocalizations(n,r,t)}}}deviceDisplayName(e){if(e.host.deviceLocalizedModel)return e.host.deviceLocalizedModel
switch(e.client.deviceType){case mk:const e=this.string(mA)
return e===mA?af:e
case uk:const t=this.string(TA)
return t===TA?uf:t
case"tv":const n=this.string(AA)
return n===AA?"Apple\xa0TV":n
case Ok:const r=this.string(yA)
return r===yA?"Apple\xa0Watch":r
case Sk:const o=this.string(EA)
return o===EA?"Mac":o
default:return null}}}$N.type=(0,Ml.makeMetatype)("app-store:loc-wrapper")
class xN extends PN{value(e){return n(this.implementation,e)}enabled(e){const t=this.value(e)
return typeof t!==Ev?Boolean(t):Boolean(this.implementation.clientFeatures[e])}isNotEnabled(e){return!this.enabled(e)}asDictionary(e){return d(this.implementation,e)}asString(e){return l(this.implementation,e)}asNumber(e){return f(this.implementation,e)}asArray(e){return a(this.implementation,e)}}xN.type=(0,Ml.makeMetatype)("app-store:props-wrapper")
class FN extends PN{retrieveString(e){const t=this.implementation.retrieveString(e)
return i(t)?t:null}storeString(e,t){this.implementation.storeString(t,e)}}FN.type=(0,Ml.makeMetatype)("app-store:storage-wrapper")
class MN extends xl.ObjectGraph{configureDefaults(e,t,n,r,o,s,i,c,a,u,l,f,d,p,h,w,g,m,T,A,y,E,P,I,_){const S=this.addingCryptography(t).addingHost(n).addingNetwork(r).addingPlatform(o).addingPlist(s).addingRandom(i).addingServices(c).addingBag(e).addingStoreMetrics(a).addingLoc(u).addingDevice(l).addingClient(f).addingProperties(d).addingUser(p).addingClientOrdering(h).addingPersonalizationStore(w).addingArcade(g).addingGameCenter(m).addingDeepLinks(T).addingAppleSilicon(A).addingStorage(y).addingAds(E).addingOnDeviceRecommendationsManager(P).addingFeatureFlags(I).addingMediaToken(_)
return S.loc.load(S),S}get bag(){return this.required(_N.type)}addingBag(e){return this.addingBagWrapper(new _N(e,this.host))}addingBagWrapper(e){return this.adding(_N.type,e)}get cryptography(){return this.required(Fl.YJ)}addingCryptography(e){return this.adding(Fl.YJ,e)}get host(){return this.required(NN.type)}addingHost(e){return this.addingHostWrapper(new NN(e))}addingHostWrapper(e){return this.adding(NN.type,e)}get network(){return this.required(Fl.ef)}addingNetwork(e){return this.adding(Fl.ef,e)}get platform(){return this.required(Fl.Jv)}addingPlatform(e){return this.adding(Fl.Jv,e)}get plist(){return this.required(Fl.M_)}addingPlist(e){return this.adding(Fl.M_,e)}get random(){return this.required(Fl.MX)}addingRandom(e){return this.adding(Fl.MX,e)}get services(){return this.required(Fl.uZ)}addingServices(e){return this.adding(Fl.uZ,e)}get storeMetrics(){return this.required(fN)}addingStoreMetrics(e){return this.adding(fN,e)}get loc(){return this.required($N.type)}addingLoc(e){return this.addingLocWrapper(new $N(e))}addingLocWrapper(e){return this.adding($N.type,e)}get device(){return this.required(dN)}addingDevice(e){return this.adding(dN,e)}get client(){return this.required(kN.type)}addingClient(e){return this.addingClientWrapper(new kN(e))}addingClientWrapper(e){return this.adding(kN.type,e)}get props(){return this.required(xN.type)}addingProperties(e){return this.addingPropertiesWrapper(new xN(e))}addingPropertiesWrapper(e){return this.adding(xN.type,e)}get user(){return this.required(pN)}addingUser(e){return this.adding(pN,e)}get clientOrdering(){return this.required(DN.type)}addingClientOrdering(e){return this.addingClientOrderingWrapper(new DN(e))}addingClientOrderingWrapper(e){return this.adding(DN.type,e)}get personalizationStore(){return this.required(hN)}addingPersonalizationStore(e){return this.adding(hN,e)}get arcade(){return this.required(wN)}addingArcade(e){return this.adding(wN,e)}get gameCenter(){return this.required(gN)}addingGameCenter(e){return this.adding(gN,e)}get deepLinks(){return this.required(mN)}addingDeepLinks(e){return this.adding(mN,e)}get appleSilicon(){return this.required(IN.type)}addingAppleSilicon(e){return this.addingAppleSiliconWrapper(new IN(e))}addingAppleSiliconWrapper(e){return this.adding(IN.type,e)}get storage(){return this.required(FN.type)}addingStorage(e){return this.addingStorageWrapper(new FN(e))}addingStorageWrapper(e){return this.adding(FN.type,e)}get ads(){return this.required(TN)}addingAds(e){return this.adding(TN,e)}get onDeviceRecommendationsManager(){return this.required(AN)}addingOnDeviceRecommendationsManager(e){return this.adding(AN,e)}get featureFlags(){return this.required(yN)}addingFeatureFlags(e){return this.adding(yN,e)}get mediaToken(){return this.required(EN)}addingMediaToken(e){return this.adding(EN,e)}isAvailable(e){return s(this.optional(e))}}class UN{constructor(e,t=!0){this.promise=e,this.isRequired=t}}class BN extends Error{constructor(e){super(function(e){let t=""
for(const n of e)n instanceof Error?t+=n.message:t+=JSON.stringify(n)
return t}(e)),this.reasons=e}}class GN extends Ck{constructor(){super(),this.pageMetrics=new iD,this.pageRenderMetrics={}}}class VN extends GN{}class HN extends GN{constructor(e=[]){super(),this.shelves=[],this.shelves=e}}class qN extends Ck{constructor(e,t){super(),this.type=e,this.values=t}}class WN extends Ck{constructor(e,t,n=null){super(),this.name=e,this.value=t,this.isSelected=t===n}}class YN extends Ck{constructor(e,t,n,r){super(),this.instanceId=e,this.iAd=t,this.impressionId=n,this.transparencyAction=r}}class jN extends hD{constructor(e){super("AdTransparencyAction"),this.adTransparencyData=e}}class zN extends hD{constructor(e,t,n,r,o){super("SearchAction"),this.spellCheckEnabled=!1,this.title=e,this.term=t,this.url=n,this.origin=r,this.entity=o,this.presentationStyle=[CA]}}class JN extends Ck{constructor(e,t){super(),this.hints=e,this.ghostHintTerm=t,this.pageMetrics=new iD,this.pageRenderMetrics={}}}class KN extends Ck{constructor(e,t){super(),this.primaryText=e,this.secondaryText=t}}class ZN extends vk{constructor(e){super(),this.resultType=e,this.clickAction=null}}class XN extends ZN{constructor(e){super("content"),this.lockup=e}}class QN extends ZN{constructor(e){super(hC),this.lockup=e}}class eL extends ZN{constructor(e){super(vA),this.lockup=e}}class tL extends ZN{constructor(){super("advert"),this.lockups=[],this.displaysScreenshots=!0,this.itemBackground="ad"}}class nL extends ZN{constructor(){super(oR)}}class rL extends ZN{constructor(){super(bA)}}class oL extends ZN{constructor(e,t,n,r){super("lockupCollection"),this.heading=e,this.title=t,this.items=n,this.detailAction=r}}class sL extends Ck{constructor(e,t,n){super(),this.title=e,this.annotations=t,this.forceExpanded=n}}class iL extends Ck{constructor(e,t,n,r){super(),this.title=e,this.summary=n,this.items=t,this.shouldAlwaysPresentExpanded=!1,this.linkAction=r}}class cL extends Ck{constructor(e,t,n,r){super(),this.text=e,this.heading=t,this.subText=n,this.listText=r}}class aL extends Ck{constructor(e){super(),this.annotationGroups=e}}class uL extends vk{constructor(e){super(),this.art=e}}class lL extends Ck{constructor(e,t){super(),this.allowsAutoPlay=!0,this.type=e,this.lockup=t}}class fL extends Ck{constructor(e,t,n,r,o,s){super(),this.message=e,this.action=t,this.fullProductAction=n,this.leadingArtwork=r,this.leadingArtworkTintColor=o,this.includeBackgroundBorder=s}}class dL extends Ck{constructor(e){super(),this.lockup=e}}class pL extends Ck{}class hL extends Ck{constructor(e,t,n){super(),this.items=e,this.mediaPlatform=t,this.allPlatforms=n}}class wL extends Ck{constructor(e,t,n,r,o){super(),this.type=e,this.title=t,this.caption=n,this.imageName=r,this.linkAction=o}}class gL extends Ck{constructor(e,t,n){super(),this.paragraph=e,this.developerAction=n,this.developerLinks=t}}class mL extends Ck{constructor(e){super(),this.text=e,this.presentationStyle=[],this.clickAction=null}}class TL extends Ck{}class AL extends vk{isValid(){return!!this.title&&!(!this.icon||!this.icon.isValid())&&super.isValid()}}class yL extends AL{isValid(){return!(!this.screenshots||!this.screenshots.length)&&super.isValid()}}class EL extends AL{constructor(){super(),this.screenshots=[],this.trailers=[],this.overrideLockupPosition=null,this.screenshotsDisplayStyle="control",this.metadataRibbonItems=[]}}class PL extends Ck{constructor(e){super(),this.viewType=e,this.itemType=e,this.moduleType=null,this.labelText=null,this.borderedText=null,this.starRating=null,this.secondaryViewPlacement=Gb,this.artwork=null}}class IL extends AL{isValid(){return!(!this.trailers||!this.trailers.isValid())&&!(!this.editorialTagline||0===this.editorialTagline.length)&&super.isValid()}}class _L extends Ck{constructor(e,t){super(),this.allowsAutoPlay=!0,this.looping=!0,e&&(this.videos=e),t&&(this.mediaPlatform=t)}isValid(){return this.videos&&this.videos.length>0&&super.isValid()}}class SL extends AL{}class OL extends vk{}class RL extends EL{isValid(){if(this.children)for(const e of this.children)if(!e.isValid())return!1
return super.isValid()}}class CL extends Ck{constructor(e,t,n){super(),this.text=e,this.style=t,this.mediaType=n,this.wantsCollapsedNewlines=!0}}class vL extends vk{constructor(){super(),this.adamId=null,this.caption=null,this.title=null,this.subtitle=null,this.artwork=null,this.shelfBackground=null,this.clickAction=null,this.decorations=[],this.flowPreviewActionsConfiguration=null,this.appEventFormattedDates=null,this.mediaOverlayStyle=null}isValid(){return!!this.clickAction&&!(!this.artwork||!this.artwork.isValid())&&!(!this.caption||!this.title)&&super.isValid()}}class bL extends vk{constructor(){super(),this.flowPreviewActionsConfiguration=null}}class kL extends vk{constructor(){super(),this.artwork=null,this.accessibilityLabel=null,this.shortEditorialDescription=null,this.clickAction=null,this.personalizationStyle=cb,this.shelfBackground=null,this.flowPreviewActionsConfiguration=null}isValid(){return this.clickAction&&this.artwork&&this.artwork.isValid()&&super.isValid()}}class DL extends vk{constructor(e,t,n,r=!0){super(),this.descriptionText=e,this.summaryText=t,this.clickAction=n,this.linkPresentationEnabled=r}}class NL extends Ck{constructor(e,t){super(),this.styledText=e,this.linkedSubstrings=t}}class LL extends Ck{constructor(e,t,n,r){super(),this.text=e,this.clickAction=t,this.type=n,this.adamIdForPurchaseHistoryFilter=r}}class $L extends Ck{constructor(e){super(),this.disclaimer=e}}class xL extends Ck{constructor(e){super(),this.buttons=e}}class FL extends Ck{constructor(e,t){super(),this.title=e,this.action=t}}class ML extends vk{constructor(e,t,n=jv,r=null,o=null,s=null){super(),this.artwork=e,this.isFullWidth=t,this.hasRoundedCorners=typeof s===ek?s:!this.isFullWidth,this.ordinal=o,this.caption=r,this.captionMediaType=n}}class UL extends vk{constructor(e,t,n=jv,r=null,o=null,s=null){super(),this.canPlayFullScreen=!0,this.allowsAutoPlay=!0,this.looping=!0,this.showAudioControl=!0,this.video=e,this.isFullWidth=t,this.hasRoundedCorners=typeof s===ek?s:!this.isFullWidth,this.ordinal=o,this.caption=r,this.captionMediaType=n}}class BL extends Ck{constructor(e,t,n,r){super(),this.type=e,this.title=t,this.hasDivider=n,this.action=r}}class GL extends vk{constructor(e,t,n,r){super(),this.text=e,this.credit=t,this.artwork=n,this.isFullWidthArtwork=r||!1}}class VL extends vk{constructor(e,t){super(),this.text=e,this.attribution=t}}class HL extends Ck{constructor(e,t,n){super(),this.style=e,this.color=t,this.isFullWidth=n}}class qL extends vk{constructor(e,t,n,r,o){super(),this.badges=e,this.hasTopSeparator=t,this.hasBottomSeparator=n,this.separatorsAreFullWidth=r,this.alignment=o}}class WL extends vk{constructor(e,t){super(),this.title=e,this.buttonAction=t}}class YL extends Ck{constructor(e,t,n,r,o,s){super(),this.badgeType=n,this.badge=n.title,this.title=e,this.description=t,this.callToActionButtonAction=r,this.backgroundStyle=o,this.textAlignment=s}}class jL extends vk{constructor(e,t,n,r,o,s){super(),this.details=e,this.detailsDisplayProperties=t,this.heading=n,this.artwork=r,this.video=o,this.backgroundColor=s}}class zL extends vk{constructor(e,t,n){super(),this.details=e,this.iconArtwork=t,this.backgroundColor=n}}class JL extends vk{constructor(){super()}}class KL extends vk{constructor(e,t){super(),this.unsubscribedAction=e,this.subscribedAction=t}}class ZL extends vk{constructor(e,t,n,r,o,s,i,c,a){super(),this.badgeGlyph=e,this.badge=t,this.title=n,this.subtitle=r,this.achievement=o,this.backgroundColor=i,this.backgroundArtwork=c,this.lockup=s,this.heroAction=a}}class XL extends vk{constructor(e,t=null,n=null){super(),this.contentType=e,this.marker=t,this.items=n||[],this.url=null,this.mergeWhenFetched=!1,this.batchGroup=null,this.seeAllAction=null,this.eyebrow=null,this.eyebrowArtwork=null,this.title=null,this.titleArtwork=null,this.subtitle=null,this.isHorizontal=!1,this.isHidden=!1,this.backgroundColor=null,this.rowsPerColumn=null,this.background={type:cb},this.contentsMetadata={type:cb},this.isPersonalized=!1,this.shouldFilterApps=!1}}class QL extends vk{constructor(e,t,n,r,o){super(),this.title=e,this.artwork=t,this.heading=n,this.description=r,this.clickAction=o,this.shelfBackground=null}}class e$ extends AL{isValid(){const e=this.posterArtwork,t=this.posterVideo
return!(!e&&!t)&&super.isValid()}}class t$ extends Ck{constructor(e,t,n,r,o,s,i,c,a,u=_b){super(),this.type=e,this.key=t,this.content=n,this.heading=o,this.caption=s,this.longCaption=i,this.leadingValue=u,this.accessibilityTitle=c,this.accessibilityCaption=a,this.style=r}}class n$ extends Ck{constructor(e,t){super(),this.type=e,this.shelfId=t}}class r$ extends Ck{constructor(e,t){super(),this.title=e,this.subtitle=t}}class o$ extends AL{constructor(){super(),this.pageMetrics=new iD,this.pageRenderMetrics={}}}class s$ extends Ck{constructor(){super(),this.shelfOrderings={},this.shelfMapping={},this.presentationOptions=[],this.isIncomplete=!1,this.pageMetrics=new iD,this.pageRenderMetrics={}}}const i$="purchasedOrdering",c$="notPurchasedOrdering",a$="purchasedOrdering_ExpandedMedia",u$="notPurchasedOrdering_ExpandedMedia",l$="purchasedOrdering_Compact",f$="notPurchasedOrdering_Compact",d$="purchasedOrdering_ExpandedMedia_Compact",p$="notPurchasedOrdering_ExpandedMedia_Compact",h$="downloadingOrdering",w$="downloadingOrdering_ExpandedMedia",g$="downloadingOrdering_Compact",m$="downloadingOrdering_ExpandedMedia_Compact"
class T$ extends s${constructor(){super(...arguments),this.appPlatforms=[]}}class A$ extends Ck{constructor(e,t,n,r){super(),this.details=e,this.dismissButtonTitle=t,this.offerButtonAction=n,this.offerDisplayProperties=r,this.pageMetrics=new iD,this.pageRenderMetrics={}}}class y$ extends Ck{constructor(e,t,n){super(),this.headline=e,this.body=t,this.artwork=n}}class E$ extends Ck{constructor(e,t,n,r,o){super(),this.title=e,this.subtitle=t,this.items=n,this.continueAction=r,this.familyAction=o}}class P$ extends Ck{constructor(e,t){super(),this.individualContent=e,this.familyMemberContent=t,this.pageMetrics=new iD,this.pageRenderMetrics={}}}class I$ extends Ck{constructor(e,t,n,r){super(),this.serviceType=e,this.placement=t,this.seed=n,this.clientOptions=r,this.contextInfo=r,this.metricsOverlay={topic:nD}}}class _$ extends Ck{constructor(e){super(),this.clientOptions=e,this.metricsOverlay={topic:nD}}}class S$ extends Ck{constructor(e,t){super(),this.primaryIcon=e,this.icons=t}}class O$ extends Ck{constructor(e){super(),this.action=e}}const R$={internal:"x-as3-internal",http:"http",https:kP,itms:"itms",itmss:"itmss",itmsAppss:"itms-appss",itmsApps:"itms-apps",itmsMessagess:"itms-messagess",itmsMessages:"itms-messages",itmsWatchs:"itms-watchs",itmsWatch:"itms-watch",file:"file",resource:"resource",macappstore:"macappstore",macappstores:"macappstores",tvappstoreLegacy:"com.apple.tvappstore",tvappstore:"com.apple.TVAppStore",arcade:"com.apple.Arcade",storeKitUIServiceAppStore:"appstore-ui"},C$={shelf:Rk,store:"WebObjects/MZStore.woa/wa",storeElements:"WebObjects/MZStoreElements.woa/wa",lookup:nm,docTypeLookup:"docTypeLookup",install:"install",grouping:"viewGrouping",viewArtist:"viewArtist",viewSoftware:"viewSoftware",today:Dv,arcade:pk,arcadeUpsellPreview:"arcadeUpsellPreview",arcadeSeeAllGames:jR,arcadeSeeAllGamesLoadMore:"arcadeSeeAllGamesLoadMore",genre:Nb,viewGenre:tI,recommendationsSeeAll:"recommendationsSeeAll",screenshots:Ak,room:"viewRoom",multiRoom:"viewMultiRoom",charts:RO,product:sk,siri:BI,productBundle:CI,developer:Bv,artist:"artist",ratings:N_,reviews:yk,viewReviews:"viewContentsUserReviews",personalizedReviews:"personalizedReviews",article:bb,story:hS,editorialItem:pO,viewEditorialItem:ud,todayCardPreview:"todayCardPreview",mso:bS,resetAndRedirect:"resetAndRedirect",account:mb,personalizationTransparency:RP,href:e_,eula:$R,tvEula:"tv-eula",privacyPolicy:Xh,appsForYou:"apps-for-you",storeFront:"storeFront",tab:"tab",searchLandingPage:"searchLandingPage",searchTrendingApps:"searchTrendingApps",privacyDetail:FE,privacyDefinitions:YS,reportAProblem:"reportaproblem.apple.com/store",gameCenterProfile:Kg,onDeviceRecommendations:"onDeviceRecommendations",test:Oh,groupingTest:UO,builtIn:"builtIn",shelfTextTest:"shelfText",shelfLockupsTest:"shelfLockups",shelfMiscTest:"shelfMisc",lockupTest:"lockupTest",articleTestArtwork:"articleArtworkTest",articleTestSingleAppIcon:"articleSingleAppIconTest",articleTestSingleAppIconHeroArt:"articleSingleAppIconHeroArtTest",articleTestBrandedApp:"articleBrandedAppTest",articleTestMultiAppTwo:"articleMultiAppTwoTest",articleTestMultiAppThree:"articleMultiAppThreeTest",articleTestGrid:"articleGridTest",articleTestInAppPurchase:"articleInAppPurchaseTest"},v$={showUpdatesPage:"showUpdatesPage",showAccountPage:"showAccountPage",showPurchasesPage:"showPurchasesPage",showSubscriptionsPage:"showSubscriptionsPage",searchExtensions:"searchExtensions",searchItunes:"search.itunes.apple.com",storePreview:"storepreview.apple.com",product:ob,arcadeSubscribePage:Mg,arcadeSubscribePageCustomContext:"arcadeSubscribePageCustomContext",arcadeWelcomePage:"arcadeWelcomePage",arcadeSeeAllPage:jR,appClipSubscribe:"appClipSubscribe",familyCircle:"familyCircle",spamBlockingExtensions:"spamBlockingExtensions",safariExtensions:"safariExtensions",launchApp:"launchApp"},b$={id:"id",ids:lm,productVariantID:JO,countryCode:"cc",featuredContentId:"fcId",fetchData:"fetchData",isTodaySection:"isTodaySection",genre:Nb,bundleIdentifier:"bundleIdentifier",bundleId:Jv,offerName:lS,selectedChartId:"selectedChartId",charts:RO,ages:uR,v0:"v0",action:Cv,type:nv,context:"context",isArcade:Xg,isSubscribed:"isSubscribed",isTrialAvailable:"isTrialAvailable",isArcadeSeeAllGamesShelf:"isArcadeSeeAllGamesShelf",isGameCenterPlayerShelf:"isGameCenterPlayerShelf",isGameCenterPlayerRibbonItem:"isGameCenterPlayerRibbonItem",isGameCenterAchievementsShelf:"isGameCenterAchievementsShelf",isGameCenterContinuePlayingShelf:"isGameCenterContinuePlayingShelf",isGameCenterPopularWithYourFriendsShelf:"isGameCenterPopularWithYourFriendsShelf",isGameCenterSuggestedFriendsShelf:"isGameCenterSuggestedFriendsShelf",isGameCenterReengagementShelf:"isGameCenterReengagementShelf",isOnDeviceRecommendationsShelf:"isOnDeviceRecommendationsShelf",onDeviceRecommendationsUseCase:"onDeviceRecommendationsUseCase",isPurchasesApp:"isPurchasesApp",enabled:"enabled",href:e_,recoMetrics:"recoMetrics",showingFallbackMedia:"showingFallbackMedia",path:"path",useReleaseId:"useReleaseId",clientIdentifierOverride:Lp,subscribePageMessage:"message",editorialItem:pO,askToBuyId:"askToBuyId",appId:"appId",isPPT:"isPPT",sort:kv,grouping:UO,code:aR,includePostSubscribeAttribution:"includePostSubscribeAttribution",campaignToken:"ct",providerToken:"pt",qToken:dm,advertisementId:pm,token:Cb,privacyTypeId:"privacyTypeId",requestDescriptor:"requestDescriptor",ageRating:"ageRating",controllerSupport:Jf,multiplayerSupport:"multiplayerSupport",comingSoon:ZA,offerHints:"offerHints",invalidateWidgetsOnFailure:sd,metrics:MC,appEventId:"eventid",appEventDeepLink:VA,useCaseShort:"uc",collectionId:"collection-id",seedId:"seed-id",isShelfWithAd:"isShelfWithAd",shelfWithAdPlacementType:"shelfWithAdPlacementType",shelfRefreshType:"refreshType",isPreloading:"isPreloading",todayCardSubStyleOverride:"todayCardSubStyleOverride"},k$={inAppPurchaseId:"inAppPurchaseId"},D$={url:"productUrl",isSubscription:JI,minExternalVersionId:"minExternalVersionId"},N$=rb,L$=kv,$$="availableAdamIds",x$={clientSpecifier:sk},F$=yk,M$="productPageSimilarItems",U$="_jet-internal:derived-data"
class B${constructor(e,t){if(this.contentsResourceTypes=new Set,this.ids=new Set,this.relationshipIncludes=new Set,this.attributeIncludes=new Set,this.platform=null,this.additionalPlatforms=new Set,this.additionalQuery={},this.relationshipLimits={},this.searchTerm=null,this.searchTypes=[],this.context=null,this.useCustomAttributes=!1,this.objectGraph=e,this.platform=J(e),!o(t))if(typeof t===Ik)this.href=t
else if(Array.isArray(t)){const e=new Set
for(const n of t)e.add(n.type),this.ids.add(n.id)
1===e.size?this.resourceType=e.values().next().value:e.size>1&&(this.resourceType=ck,this.contentsResourceTypes=e)}}forType(e){return this.resourceType=e,this}withIds(e){for(const t of e)i(t)&&this.ids.add(t)
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
return this.associateIncludes.set(e,n),this}includingRelationshipsForUpsell(e){const t=Uv
if(e){this.scopedRelationshipIncludes||(this.scopedRelationshipIncludes=new Map)
let e=this.scopedRelationshipIncludes.get(Kb)
e||(e=new Set),e.add(t),this.scopedRelationshipIncludes.set(Kb,e)}else this.relationshipIncludes.add(t)
if(t===Uv){this.metaIncludes||(this.metaIncludes=new Map)
let e=this.metaIncludes.get(Uv)
e||(e=new Set),e.add(MC),this.metaIncludes.set(Uv,e)}return this}includingAttributes(e){for(const t of e)this.attributeIncludes.add(t)
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
return this}addingContext(e){return this.context=e,this}includingMacOSCompatibleIOSAppsWhenSupported(e=!1){return this.objectGraph.appleSilicon.isSupportEnabled&&(e||this.enablingFeature(Xw),this.includingScopedAttributes(Pk,[Rp])),this}usingCustomAttributes(e){return this.useCustomAttributes=e,this}alwaysUseIdsAsQueryParam(e){return this.useIdsAsQueryParam=e,this}attributingTo(e){return this.canonicalUrl=e,this}withFilter(e,t){return this.filterType=e,this.filterValue=t,this}withLimit(e){return this.limit=e,this}withSparseLimit(e){return null!==e&&(this.sparseLimit=e),this}withSparseCount(e){return null!==e&&(this.sparseCount=e),this}enablingFeature(e){return this.enabledFeatures||(this.enabledFeatures=[]),this.enabledFeatures.push(e),this}asPartialResponseLimitedToFields(e){return this.fields=e,this}includesResourceType(e){return this.resourceType===e||!!s(this.contentsResourceTypes)&&this.contentsResourceTypes.has(e)}}const G$=new RegExp("#?([0-9,a-f,A-F][0-9,a-f,A-F])([0-9,a-f,A-F][0-9,a-f,A-F])([0-9,a-f,A-F][0-9,a-f,A-F])")
Ul=e(450)
class V${constructor(e,t){this._value=e,this._maxAge=t}isValid(){return Date.now()<this._maxAge}get value(){return this.isValid()?this._value:null}}let H$=null
const q$=6e4,W$={identifer:"3NepyQj",treatments:[0,1]},Y$={identifer:"xSb5Dsb",treatments:[...Array(100).keys()]},j$=tk
let z$=null
const J$=new Set([hk,gk,Ak]),K$=new Set([xv,X_,Xb,JC,DC,Sb,dk,pb,hb,Yb,Pv,ik,qb,NC,vv,Ob,wb,ub,kb,jb,Bb,yk,Fb,Iv,hO,wO,Db])
class Z$ extends Ck{constructor(e,t,n,r){super(),this.id=e,this.title=t,this.selectedActionTitle=n,this.url=r}}class X$ extends uD{constructor(){super([])}}class Q$ extends Ck{}class ex extends Ck{}class tx extends Ck{}class nx extends Ck{constructor(){super(...arguments),this.componentType=Kl}}class rx extends Ck{constructor(e){super(),this.showsBadge=!1,this.title=null,this.notes=e,this.isCollapsed=!0}}class ox extends Ck{}class sx extends Ck{}class ix extends Ck{}class cx extends Q${constructor(){super(...arguments),this.componentType="starRatings"}}class ax extends Q${constructor(){super(...arguments),this.componentType="starRatingsHistogram"}}class ux extends Q${constructor(){super(...arguments),this.componentType="noRatings"}}class lx extends Ck{}const fx=20
class dx{constructor(){this._params=""}static get contentType(){return _O}param(e,t){if(e&&t){const n=this._params.length>0?"&":""
this._params+=`${n}${encodeURIComponent(e)}=${encodeURIComponent(t)}`}return this}build(){return this._params}}const px="jet_adamId"
class hx{constructor(e){this._options=Object.freeze(e)}get defaultTopic(){return this._options.defaultTopic}_reduceFieldAccuracy(e,t){for(const n of t){const t=l(n,"fieldName")
if(r(t))continue
const o=f(e,t)
if(r(o))continue
let s=f(n,"magnitude")
r(s)&&(s=1048576)
let i=f(n,"significantDigits")
if(r(i)&&(i=2),s<=0||i<0){e[t]=Number.NaN
continue}const c=o/s
e[t]=Ye(c,i)}}_derezFastImpressions(e){const t=l(e,FS),n=f(e,r_)
if(t===cE){if(4===n){const t=a(e,Ov)
e[Ov]=t.map(e=>{const t=a(e,Hp)
return 0===t.length||(e[Hp]=t.map(e=>{const t=f(e,"d")
return e.s=0,e.d=Ye(t,2),e})),e})}if(5===n){const t=a(e,Ov)
e[Ov]=t.map(e=>{delete e[uE],(o(l(e,o_))||o(l(e,s_)))&&delete e.id
const t=d(e,qp)
return o(t)||(Object.entries(t).forEach(([e,n])=>{const r=a(n)
t[e]=r.map(e=>{const t=f(e,"d")
return e.s=0,e.d=Ye(t,2),e})}),e[qp]=t),e})}}}_decorateSearchResultImpressions(e){const t=l(e,oC),n=l(e,HO)
t===vC&&n!==qO&&function(e){const t=a(e,Ov)
let n
for(const e of t)if(l(e,fE)===HS){n=e[EE]
break}n&&(e[Ov]=t.map(e=>(l(e,fE)===NS&&(e.impressionParentId=n),e)))}(e)}_decorateAll(e,t){const n=this._options.bagProvider,o=n("metricsBase",t)
r(o)||typeof o!==bO||Object.assign(e,o),e.clientBuildType=this._options.buildType,e.resourceRevNum=this._options.jsVersion,e.xpSendMethod="jet-js",this._options.buyDecorator.useApp(l(e,sk)),delete e[px]
const s=function*(e){if(r(e))return
const t=e.split(";")
for(const e of t){const t=e.indexOf("=")
if(-1===t){const t=decodeURIComponent(e).trim()
yield{key:t,value:""}}else{const n=decodeURIComponent(e.substring(0,t)).trim(),r=decodeURIComponent(e.substring(t+1)).trim()
yield{key:n,value:r}}}}(l(e,Wp))
for(const t of s)if("xp_ci"===t.key){this._options.buyDecorator.useClientId(t.value),e.clientId=t.value,delete e.clientGeneratedId
break}delete e[Wp]
const i=l(e,oC),c=l(e,HO)
if(!r(i)&&!r(c)){const r=l(n("compoundSeparator",t))||"_"
e[ak]=`${i}${r}${c}`}const u=a(n("deResFields",t))
this._reduceFieldAccuracy(e,u)}_decorateClick(e){!function(e){const t=l(e,GS),n=l(e,PE)
r(t)&&i(n)&&(e[GS]=n),l(e,IE)===wh&&delete e[_E]}(e),this._decorateSearchResultImpressions(e)}_decorateImpressions(e){if(o(e[Ov]))throw new Error("Empty impressions event filtered")
this._derezFastImpressions(e),this._decorateSearchResultImpressions(e)
const t=l(e,i_)
i(t)&&(e[mv]=tt(t),delete e[i_])}_decorateMedia(e){const t=f(e,c_)
r(t)||(e[c_]=Math.round(t))}_decoratePage(e){const t=l(e,i_)
if(!r(t)){const n=Xe(t);(o(e[a_])||i(n))&&(e[a_]=n),e[mv]=tt(t)}const n=l(e,ak)
r(n)||(e.pageHistory=this._options.buyDecorator.getPageHistoryFor(n))}_decorateSearch(e){e[r_]=3,function(e){var t
const n=null!==(t=e[bR])&&void 0!==t?t:{},o=n[GS],s=l(e,PE)
r(o)&&i(s)&&(n[GS]=s,e[bR]=n),l(e,IE)===wh&&delete e[_E],e[WR]===gh&&delete e[_E]}(e)}_filterExtraneous(e){!function(e){delete e[PE],delete e[IE],delete e.searchGhostHintTermLastDisplayed}(e)}makeEvent(e,t){const n=l(t,HC)
this._options.isLoggingEnabled
const r=l(t,hI)||this._options.defaultTopic
this._decorateAll(t,r)
const o=t[lE]
switch(o&&""===o&&delete t[lE],n){case GO:this._decorateClick(t)
break
case Gp:break
case Ov:this._decorateImpressions(t)
break
case aE:this._decorateMedia(t)
break
case ak:this._decoratePage(t)
break
case Rb:this._decorateSearch(t)}return this._filterExtraneous(t),new oD(t)}}hx.hasIAdData=Vp
class wx{constructor(){this.location=null,this.position=0}}const gx="externalDeepLinkUrl"
class mx{constructor(e){if(this._values={},!r(e)&&e.length>0){const t=e.split("&")
for(const e of t){const[t,n]=e.split("="),o=decodeURIComponent(t),s=r(n)?"":decodeURIComponent(n)
this._values[o]=s}}}_searchKey(e,t){if(0===e.length)throw new Error("key may not be zero length")
return r(t)||0===t.length?e:`${t}${e.charAt(0).toUpperCase()}${e.slice(1)}`}get(e,t="mt"){const n=this._searchKey(e,t)
return this._values[n]}set(e,t,n="mt"){const o=this._searchKey(e,n)
return r(t)?delete this._values[o]:this._values[o]=t,this}toString(){let e=""
for(const t of Object.keys(this._values)){const n=this._values[t]
e.length>0&&(e+="&"),e+=encodeURIComponent(t),e+="=",e+=encodeURIComponent(n)}return e}toEncodedMap(){const e={}
for(const t of Object.keys(this._values)){const n=this._values[t],r=encodeURIComponent(t),o=encodeURIComponent(n)
e[r]=o}return e}}const Tx=new class{constructor(){this._app="",this._clientId="",this._pages=[]}get _requestId(){const e=Date.now().toString(36).toUpperCase(),t=Math.floor(1e5*Math.random()).toString(36).toUpperCase()
return this._clientId+"z"+e+"z"+t}get _prevPage(){return this._pages.length>=2?this._pages[this._pages.length-2]:void 0}useApp(e){""!==this._app||r(e)||(this._app=e)}useClientId(e){r(e)||(this._clientId=e)}usePageHistory(e){if(0!==e.length){this._pages.length=0
for(const t of e){const e=l(t)
r(e)||this._pages.push(e)}}}useNativeValues(e){const t=l(e,"nativeApp")
this.useApp(t)
const n=l(e,"nativeClientId")
this.useClientId(n)
const r=a(e,"nativePageHistory")
this.usePageHistory(r)}getPageHistoryFor(e){const t=this._pages.slice()
return this._pages.length>=5&&this._pages.shift(),this._pages.push(e),t}get params(){return{app:this._app,clientId:this._clientId,requestId:this._requestId,prevPage:this._prevPage,eventTime:Date.now()}}}
let Ax=null
const yx={containerId:"mtContainerId",placementId:"mtIadPlacementId"}
class Ex extends vk{constructor(e){super(),this.kind=e}}class Px extends Ex{constructor(){super(zP),this.allowsAutoPlay=!0,this.looping=!0}isValid(){const e=this.art&&this.art.isValid(),t=this.video&&this.video.isValid()
return(e||t)&&super.isValid()}}class Ix extends Ex{constructor(e,t){super(nk),this.art=e,this.titleBackingGradient=t}}class _x extends Ex{constructor(e){super(sR),this.icon=e}}class Sx extends Ex{constructor(e,t,n){super(pv),this.icon=e,this.art=t,this.titleBackingGradient=n}}class Ox extends Ex{constructor(e,t){super(_A),this.lockups=e,this.marketingText=t}}class Rx extends Ex{constructor(e,t){super(Q_),this.lockups=e,this.additionalText=t}}class Cx extends Ex{constructor(e){super(hC),this.lockup=e}}class vx extends Ex{constructor(e){super(SA),this.lockups=e,this.lockupImpressionLimit=10}}class bx extends Ex{constructor(e,t){super(iR),this.lockups=e,this.artworkGridType=t,this.lockupImpressionLimit=3}}class kx extends Ex{constructor(e,t){super(bv),this.allowsAutoPlay=!0,this.looping=!0,this.video=e,this.description=t}}class Dx extends Ex{constructor(e,t,n,r,o,s){super(oR),this.formattedDates=e,this.startDate=t,this.artwork=n,this.subtitle=o,this.tintColor=r,this.blurStyle=s}}class Nx extends Ck{constructor(e){super(),this.kind=e}}class Lx extends Nx{constructor(e){super(Wb),this.lockup=e,this.displaysIcon=!0}}class $x extends Nx{constructor(e,t,n,r){super("marketingLockup"),this.marketingText=null,this.lockup=e,this.paragraph=t,this.hideBackground=n,this.artworkBackgroundColor=r}}class xx extends Nx{constructor(e){super(Zl),this.lockups=e}}class Fx extends Nx{constructor(e,t){super(hv),this.paragraph=e,this.style=t}}class Mx extends Nx{constructor(e){super(Cv),this.action=e}}class Ux extends Nx{constructor(e,t,n){super("threeLine"),this.heading=e,this.title=t,this.description=n}}class Bx extends Nx{constructor(e){super("arcadeLockup"),this.arcadeLockup=e}}class Gx extends Nx{constructor(e){super("appEventLockup"),this.lockup=e}}class Vx extends vk{constructor(){super(),this.heading=null,this.title=null,this.media=null,this.heroMedia=null,this.overlay=null,this.style=null,this.clickAction=null,this.backgroundColor=null,this.inlineDescription=null,this.collapsedHeading=null}}class Hx extends vk{constructor(e){super(),this.cards=e}}class qx extends Ck{constructor(e,t,n,r,o){super(),this.shelves=e,this.title=n,this.titleDetail=o,this.tabTitle=r,this.nextPage=null,this.onboardingCardIds=t||[],this.pageMetrics=new iD,this.pageRenderMetrics={}}}class Wx extends Ck{constructor(e,t,n,r,o){super(),this.displayFromDate=e,this.displayText=t,this.showLiveIndicator=n,this.countdownToDate=r,this.countdownStringKey=o}}class Yx extends vk{constructor(e,t,n,r,o,s,i,c,a,u,l,f,d,p,h){super(),this.appEventId=e,this.moduleArtwork=t,this.moduleVideo=n,this.title=r,this.subtitle=o,this.detail=s,this.startDate=i,this.endDate=c,this.kind=a,this.requirements=u,this.lockup=l,this.hideLockupWhenNotInstalled=f,this.formattedDates=d,this.mediaOverlayStyle=p,this.includeBorderInDarkMode=h,this.clickAction=null}}class jx extends Ck{constructor(e,t,n,r,o,s){super(),this.appEvent=e,this.artwork=t,this.video=n,this.shareAction=r,this.mediaOverlayStyle=o,this.includeBorderInDarkMode=s,this.pageMetrics=new iD,this.pageRenderMetrics={}}}class zx extends Ck{constructor(e,t,n,r,o,s,i,c,a,u,l){super(),this.appEventId=e,this.title=t,this.detail=n,this.artworkUrl=r,this.displayTime=o,this.scheduledAction=s,this.notAuthorizedAction=i,this.failureAction=c,this.destinationUrl=a,this.scheduleClickEvent=u,this.cancelScheduleClickEvent=l}}const Jx="X-AppStore-iAdClickToken",Kx="X-AppStore-iAdLineItem"
class Zx{constructor(e,t,n,r,o){if(this.placementType=e,this.placementId=this.placementIdFromType(e),this.pageFields={},this.clickFields={},this.impressionsFields={},this.fastImpressionFields={},this.iAdClickEventFields={},this._iAdApplied=!1,this._iAdAdamId=null,s(t)||s(n)){if(this.pageFields[hx.hasIAdData]=!0,this.pageFields[g_]=n,s(t)){const e=Ze(t)
this.pageFields[Tv]=e,this.impressionsFields[Tv]=e,this.clickFields[Tv]=e}this.updateContainerId()
const e=this.createSlotInfo()
i(e)&&(this.pageFields[Rv]=e,this.clickFields[Rv]=e,this.impressionsFields[Rv]=e),i(this.placementId)&&(this.pageFields[qC]=this.placementId,this.clickFields[qC]=this.placementId,this.impressionsFields[qC]=this.placementId)}s(r)&&(this.pageFields[sh]=r),this.fastImpressionFields[ih]=!0}static from(e){const t=new Zx(l(e.placementType),l(e.iAdId),l(e.appStoreClientRequestId),h(e.wasOdmlSuccessful),g(e.positionInfo))
return t._iAdApplied=u(e._iAdApplied),t._iAdAdamId=l(e._iAdAdamId),Object.assign(t.pageFields,e.pageFields),Object.assign(t.clickFields,e.clickFields),Object.assign(t.impressionsFields,e.impressionsFields),Object.assign(t.fastImpressionFields,e.fastImpressionFields),Object.assign(t.iAdClickEventFields,e.iAdClickEventFields),t}get iAdIsPresent(){return this._iAdApplied}get iAdAdamId(){return this._iAdAdamId}updateForAdResponse(e){if(r(e))return
if(this.pageFields[hx.hasIAdData]=!0,i(e.iAdId)){const t=Ze(e.iAdId)
this.pageFields[Tv]=t,this.impressionsFields[Tv]=t,this.clickFields[Tv]=t}i(e.clientRequestId)&&(this.pageFields[g_]=e.clientRequestId),this.placementType=e.placementType,this.placementId=this.placementIdFromType(this.placementType),i(this.placementId)&&(this.pageFields[qC]=this.placementId,this.clickFields[qC]=this.placementId,this.impressionsFields[qC]=this.placementId),this.updateContainerId()
const t=this.createSlotInfo()
i(t)&&(this.pageFields[Rv]=t,this.clickFields[Rv]=t,this.impressionsFields[Rv]=t)}updateContainerId(){this.containerId=this.containerIdFromType(this.placementType),s(this.containerId)&&(this.pageFields[MS]=this.containerId,this.clickFields[MS]=this.containerId,this.fastImpressionFields[MS]=this.containerId)}apply(e,t){if(o(t))return
const n=t.id,r=T(t,HR)
if(this._iAdAdamId=n,r){this.impressionsFields[hx.hasIAdData]=!0,this.clickFields[hx.hasIAdData]=!0
const o=Ze(r[EE])
this.fastImpressionFields[s_]=o,this.clickFields[s_]=o
const s=Ze(r[ch])
this.clickFields[o_]=s,this.fastImpressionFields[o_]=s,this.pageFields[rb]=n,this.pageFields.iAd={iAdFormat:Qe(p(w(r),"format")),iAdAlgoId:Ze(r.algoId),iAdImpressionId:Ze(r[EE]),iAdMetadata:Ze(r[ch])}
const i=ge(e,t)
this.updateIAdMetricsFieldsForProductVariantData(i,this.clickFields),Object.assign(this.iAdClickEventFields,r),this._iAdApplied=!0,this.setMissedOpportunity(null)}const s=this.createSlotInfo()
i(s)&&(this.pageFields[Rv]=s,this.clickFields[Rv]=s,this.impressionsFields[Rv]=s)}applyClickFieldsFromPageRequest(e,t){this._iAdApplied=!0,this._iAdAdamId=e,Object.assign(this.clickFields,t),Object.keys(this.pageFields).forEach(e=>delete this.pageFields[e])}setSpecifiedCreativeUsed(e){this.fastImpressionFields[ah]=e,this.clickFields[ah]=e}setMissedOpportunity(e){s(e)?this.clickFields[DR]=e:delete this.clickFields[DR],s(e)?(this.pageFields[DR]=e,this.impressionsFields[DR]=e):(delete this.pageFields[DR],delete this.impressionsFields[DR]),e===Cf&&delete this.pageFields[g_]
const t=this.createSlotInfo()
i(t)&&(this.pageFields[Rv]=t,this.clickFields[Rv]=t,this.impressionsFields[Rv]=t)}placementIdFromType(e){switch(e){case ZC:return uh
case PC:return"APPSTORE_SEARCH_RESULT_PAGE"
default:throw new Error(`This method should never be called with value: ${e}`)}}static placementTypeFromPlacementId(e){return e===uh?ZC:PC}containerIdFromType(e){return null}fastImpressionsFieldsForCurrentItem(e){return this.fastImpressionFields}createSlotInfo(){return null}updateIAdMetricsFieldsForProductVariantData(e,t){Ie(e,m_)?t[lh]=e.productPageId:delete t[lh]}get fastImpressionsEventVersion(){return 4}get shouldIncludeAdRotationFields(){return!0}}class Xx{constructor(e={}){this.baseFields=e}}class Qx extends vk{constructor(){super()}}class eF extends vk{constructor(){super()}}class tF extends vk{constructor(){super(),this.items=[]}}class nF extends Ck{constructor(e){super(),this.incidentType=e}}class rF extends nF{constructor(e,t){super("discard"),this.instanceId=e,this.reason=t}}class oF{constructor(e,t){e&&(this.appStoreClientRequestId=t,this.iAdId=e[Tv],this.sponsoredSearchRequestData=e.dataBlob,this.routingInfo=e.iAdRoutingInfo,this.canary=e.canary)}validAdRequest(){const e=this.sponsoredSearchRequestData&&this.sponsoredSearchRequestData.length>0,t=this.routingInfo&&this.routingInfo.length>0
return e&&t}}const sF={showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}}
let iF=null
const cF=(e,t)=>{const n=e.isLandscape()
return n===t.isLandscape()?0:n?-1:1},aF="jet_native_advert_instanceid",uF={shelfIdentifier:"first",slot:0}
class lF{}class fF extends Error{}class dF extends lF{constructor(e){super(),this.rawData=e,this.appId=null,this.groupId=null,this.score=0,this.segScores=new Map,this.modifiedScore=0}}class pF extends lF{constructor(e){super(),this.rawData=e,this.isExactMatch=!1,this.isWildcardMatch=!1,this.isUnpersonalizedMatch=!1,this.isFallbackMatch=!1,this.appId=null,this.groupId=null}}const hF="-1"
class wF extends Ck{constructor(e,t,n,r,o=!1){super(),this.strategy=e,this.updateDelayInterval=t,this.timeSinceOnScreenInterval=n,this.timeToLiveEndDate=r,this.refreshWhileVisible=o}}const gF=[R$.https,R$.itmsApps,R$.itmsAppss,R$.itmsMessages,R$.itmsMessagess,R$.itmsWatch,R$.itmsWatchs,R$.macappstore,R$.macappstores,R$.tvappstoreLegacy,R$.tvappstore,R$.arcade]
class mF{constructor(e){var t
this.identifier=e.identifier,this._protocol=null==(t=e.protocol)?null:t,this._hostName=e.hostName,e.path?(this._pathComponents=e.path.split("/").filter(e=>e.length>0),this._pathParameterMap=function(e){const t={}
return e.forEach((e,n)=>{gr(e)&&(t[e]=n)}),t}(this._pathComponents)):(this._pathComponents=null,this._pathParameterMap=null),this._pathExtension=e.pathExtension,this._query=function(e){const t=[]
if(!e)return t
for(const n of e){const e=n.split("=")
let r=e[0]
const o=-1!==r.indexOf("?")
r=r.replace("?","")
let s=null
e.length>1&&(s=decodeURIComponent(e[1])),t.push({key:r,value:s,optional:o})}return t}(e.query),this._hash=e.hash,this._regex=e.regex,e.exclusions?this._exclusions=e.exclusions.map(function(e){return new mF(e)}):this._exclusions=null}matches(e){if(this._regex){if(!this._regex.length)return!1
let t=!1
for(const n of this._regex)if(n.test(e.toString())){t=!0
break}if(!t)return!1}if(this._protocol&&e.protocol!==this._protocol)return!1
if(this._hostName&&e.host!==this._hostName)return!1
if(this._pathComponents){const t=this._pathComponents,n=e.pathComponents()
if(t.length!==n.length)return!1
const r=t.length
for(let e=0;e<r;e++){const r=t[e]
if(!gr(r)&&r!==n[e])return!1}}if(this._pathExtension&&e.pathExtension()!==this._pathExtension)return!1
if(this._query)for(const t of this._query){const n=e.query[t.key]
if(!n&&!t.optional)return!1
if(t.value&&t.value!==n)return!1}if(this._hash&&e.hash!==this._hash)return!1
if(this._exclusions)for(const t of this._exclusions){if(t._exclusions)throw Error("Matching exclusion rules with further exclusion rules may introduce significant code-complexity and/or reduce the ease with which developers are able to reason about your desired goals. Are there any simpler options?")
if(t.matches(e))return!1}return!0}extractParameters(e){const t={}
if(this._pathComponents){const n=e.pathComponents()
for(const e of Object.keys(this._pathParameterMap)){const r=mr(e),o=Tr(n[this._pathParameterMap[e]],e)
t[r]=decodeURIComponent(o)}}if(this._query)for(const n of this._query)t[n.key]=e.query[n.key]
return t}}class TF{constructor(){this._routeMappings=[]}associate(e,t){const n=[]
for(const t of e)n.push(new mF(t))
this._routeMappings.push({route:n,object:t})}routedObjectForUrl(e){let t=typeof e===Ik?new sN(e):e
t=function(e){let t=typeof e===Ik?new sN(e):e
if(!wr(t))return t
const n=t.query,r=n[Ek]
return(!t.host||0===t.host.length)&&null!=r&&(t=new sN(r),n[Tm]&&(t=t.append(sv,{dsid:n[Tm]})),n[Am]&&(t=t.append(sv,{signatureResumption:n[Am]}))),sN.fromComponents(R$.https,t.host,t.pathname,t.query,t.hash)}(t),t=function(e){const t=typeof e===Ik?new sN(e):e
if(!wr(t))return t
const n=t.build()
let r,o=W(t.query)
const s={},i=[{key:"MZSearch.woa",action:Rb},{key:Rb,action:Rb},{key:"buyLandingPage",action:tS},{key:"buyCharityGiftWizard",action:tf},{key:"longUrlHandler",action:ym},{key:XP,action:XP}],c={"accessory-lookup":"accessoryLookup","finance-app":mb,viewEula:$R,software:Pk}
let a=!1
for(const e of Object.keys(s))if(t.host&&-1!==t.host.indexOf(e)){a=!0,r=s[e]
break}let u=!1
for(const e of i){const n=e.key
if(t.pathname&&-1!==t.pathComponents().indexOf(n)){u=!0,r=e.action,void 0!==o[n]&&delete o[n]
break}}for(const e of Object.keys(c)){const n=void 0!==t.query[e]&&null!==t.query[e],s=t.query[Cv]&&-1!==t.query[Cv].indexOf(e)
if(n||s){r=c[e],void 0!==o[e]&&delete o[e]
break}}if(r===mb&&-1!==n.indexOf(Em)&&(r="addToPassbook",delete o[Em]),r){const e=null,n=null,s={action:r}
return r===cR&&(o[aR]||o[Pm])?s[aR]=o[aR]||o[Pm]:r!==mb&&r!==XP&&r!==ym||!u&&!a||(s[KP]=t.toString()),o={...o,...s},sN.fromComponents(t.protocol,n,e,o,t.hash)}return t}(t)
for(const e of this._routeMappings)for(const n of e.route)if(n.matches(t))return{normalizedUrl:t,parameters:n.extractParameters(t),object:e.object,matchedRuleIdentifier:n.identifier}
return{normalizedUrl:t,parameters:null,object:null,matchedRuleIdentifier:null}}}class AF{constructor(e){this._count=e,this._triggers=[]}countDown(){if(0!==this._count&&(this._count--,0===this._count)){for(const e of this._triggers)e()
this._triggers.splice(0)}}then(e){0===this._count?e():this._triggers.push(e)}}class yF{constructor(e,t){this.sequenceId=0,this.metricsPageInformation=e,this.locationTracker=t}addImpressionsToShelf(e,t,n){Bn(0,t,{id:`${this.sequenceId}`,kind:null,softwareType:null,targetType:n,title:t.title,pageInformation:this.metricsPageInformation,locationTracker:this.locationTracker}),this.sequenceId++}getSequenceId(){return this.sequenceId}addImpressionsFieldsToSimilarItemsShelf(e,t,n,r){t&&(Bn(0,t,{id:yF.similarItemsShelfId,kind:null,softwareType:null,targetType:n,title:t.title,pageInformation:this.metricsPageInformation,locationTracker:this.locationTracker,idType:r}),this.sequenceId++)}static resetLocationTrackerForSimilarItemsDuringDownloadShelf(e,t){const n=t.sourceLocationTracker
Tt(n,0),mt(n).id=yF.similarItemsDuringDownloadShelfId}static addImpressionsFieldsToSimilarItemsDuringDownloadShelf(e,t,n){t&&Bn(0,t,{id:yF.similarItemsDuringDownloadShelfId,kind:null,softwareType:null,targetType:Fb,title:n.title,pageInformation:n.sourcePageInformation,locationTracker:n.sourceLocationTracker,idType:zO})}}yF.similarItemsShelfId=wS,yF.similarItemsDuringDownloadShelfId="customers-also-bought-apps-download"
const EF="write-review",PF=yk,IF="appEventRequirementKey",_F=(fe(ae("F0F0F8"),ae(C_)),{type:jO,red:0,green:0,blue:0,alpha:.2})
class SF{constructor(e,t,n,r,o,s,i,c){this.isBundleShelf=!1,this.ids=e,this.title=t,this.shouldInferSeeAllFromFetchesItems=n,this.contentType=r,this.offerStyle=o,this.spotlightInAppProductIdentifier=s,this.refreshUrl=i,this.recoMetricsData=c}}const OF=[pv,iR,nk,bv],RF=(0,Ml.makeMetatype)("app-store:page-router")
let CF=null
const vF=[dk,cd,iy,Vb,dS,ad,QC,cy,pS,gR,UC,PI,ev,ay,VR],bF=/id([0-9]+)\/?$/i,kF={915249334:"1462947752"},DF=[KR,dy,wv,lk,vI,bI,TS,AS],NF=[KR,wv,lk,OO],LF=TS,$F="gameCenterContinuePlaying"
class xF{constructor(e){this.builderClass=e}handleShelf(e,t,n,r,o,s){s(new Error(`${this.builderClass} does not implement handleShelf`))}handlePagination(e,t,n,r,o,s,i){i(new Error(`${this.builderClass} does not implement handlePagination`))}shelfRoute(e){return[{protocol:R$.internal,path:`${this.shelfPath}{data}`}]}paginationRoute(e){return[{protocol:R$.internal,path:`${this.paginationPath}`}]}shelfUrl(e){return`${R$.internal}:${this.shelfPath}${encodeURIComponent(JSON.stringify(e))}`}get shelfPath(){return`/${this.builderClass}/${C$.shelf}/`}get paginationUrl(){return`${R$.internal}:${this.paginationPath}`}get paginationPath(){return`/${this.builderClass}/${C$.lookup}/`}static createFlowAction(e,t,n){const r=new wD(t)
return r.pageUrl=n.build(),r.pageData=e,r}}class FF extends xF{handlePage(e,t,n,r,o,s,i){this.renderPage(e,t,n)}renderPage(e,t,n){throw new Error(`renderPage is not supported on: ${this.builderClass}`)}handlePageError(e,t,n,r,o){n(e)}handleShelf(e,t,n,r,o,s){this.renderShelf(e,t,n).then(o,e=>{this.handleShelfError(e,o,s,n)})}renderShelf(e,t,n){throw new Error(`renderShelf is not supported on: ${this.builderClass}`)}handleShelfError(e,t,n,r){n(e)}}class MF extends xF{defaultAttributes(e){return[]}defaultTab(e){return null}prepareRequest(e,t,n,r){t.includingAdditionalPlatforms(this.defaultPlatforms(e)),t.includingAttributes(this.defaultAttributes(e)),t.usingCustomAttributes(we(e))}defaultAction(e,t,n,r){return MF.createFlowAction(t,this.pageType(),r)}handlePage(e,t,n,r,o,i,c){Ll.Do(`${this.builderClass}.handlePage`,()=>{let r
const a=t.build()
r=Br(e,t)?new B$(e,a):this.generatePageRequest(e,t,n),r||c(new Error(`Could not construct media API request for: ${t}`)),this.prepareRequest(e,r,t,n),r.attributingTo(a)
const u=this.generateAdditionalPageRequirements(e,t,n),l=Object.keys(u),f=l.map(e=>u[e]),d=new UN(b(e,r)),p=[d,...f]
d.promise.then(t=>{Kr(e,e.user.dsid,t)}),function(e){const t=new Array(e.length)
let n=e.length
return new Promise((r,o)=>{const i=function(){if(0===n){const e=t.map(e=>e.status===EI?e.reason:null).filter(s)
0===e.length?r(t):1===t.length&&1===e.length?o(e[0]):o(new BN(e))}}
for(let r=0;r<e.length;r++){const o=r
e[o].promise.then(r=>{t[o]={status:sy,value:r,isRequired:e[o].isRequired},n--,i()},r=>{t[o]={status:EI,reason:r,isRequired:e[o].isRequired},n--,i()})}})}(p).then(r=>{let s=null
switch(r[0].status){case sy:s=r[0].value
break
case EI:const e=r[0].reason
this.handlePageError(e,i,c,t,n)}const a=r.slice(1),u={}
for(let e=0;e<a.length;e++){const r=l[e],o=a[e]
switch(o.status){case sy:u[r]=o.value
break
case EI:u[r]=null,o.isRequired&&this.handlePageError(o.reason,i,c,t,n)}}return this.supportsDataAugmenting()?this.augmentData(e,t,n,s).then(t=>this.renderPage(e,t.originalData,n,u,t.additionalData,o)):this.renderPage(e,s,n,u,null,o)}).then(r=>{const o=this.defaultTab(r),s=this.defaultAction(e,r,n,t),i=n[b$.isPPT]
if(t.removeParam(b$.isPPT),null===o||i)return s
{const e=new gD(o)
return e.actions=[s],e}}).then(i,e=>{this.handlePageError(e,i,c,t,n)})})}handlePageError(e,t,n,r,o){n(e)}handleShelf(e,t,n,r,o,s){Ll.Do(`${this.builderClass}.handleShelf`,()=>{let r
const i=t.build()
r=Br(e,t)?new B$(e,i):this.generateShelfRequest(e,t,n),r?(this.prepareRequest(e,r,t,n),r.attributingTo(t.build()),b(e,r).then(t=>{const r=this.renderShelf(e,t,n)
return this.shelfRequiresAdditionalModification(r,n)?this.performAdditionalShelfModifications(e,r,n):r}).then(o,e=>{this.handleShelfError(e,o,s,n)})):s(new Error(`Could not construct media API request for: ${t}`))})}performAdditionalShelfModifications(e,t,n){return Promise.resolve(t)}shelfRequiresAdditionalModification(e,t){return!1}handleShelfError(e,t,n,r){n(e)}handlePagination(e,t,n,r,o,s,i){Ll.Do(`${this.builderClass}.handlePagination`,()=>{let r
const c=t.build()
r=Br(e,t)?new B$(e,c):this.generatePaginationRequest(e,t,n,o),r?(this.prepareRequest(e,r,t,n),r.attributingTo(t.build()),b(e,r).then(t=>this.renderPaginatedPage(e,t,o)).then(s,e=>{this.handlePaginationError(e,s,i,n,o)})):i(new Error(`Could not construct media API request for: ${t}`))})}handlePaginationError(e,t,n,r,o){n(e)}generateAdditionalPageRequirements(e,t,n){return{}}generateShelfRequest(e,t,n){throw new Error(`generateShelfRequest is not supported on: ${this.builderClass}`)}generatePaginationRequest(e,t,n,r){throw new Error(`generatePaginationRequest is not supported on: ${this.builderClass}`)}supportsDataAugmenting(){return!1}augmentData(e,t,n,r){const o={url:t,parameters:n}
return Jr(e,r,this.additionalDataKeysNeededForData,this.fetchAdditionalDataForKey,o)}additionalDataKeysNeededForData(e,t,n){return null}fetchAdditionalDataForKey(e,t){return null}renderShelf(e,t,n){throw new Error(`renderShelf is not supported on: ${this.builderClass}`)}renderPaginatedPage(e,t,n){throw new Error(`renderPaginatedPage is not supported on: ${this.builderClass}`)}}const UF=Tb
class BF{constructor(){this.profile=Wb,this.maxPerPage=fx}}class GF extends MF{defaultAttributes(e){const t=[Qb,Zb,qv,tb]
return e.appleSilicon.isSupportEnabled&&t.push(Pb),t}defaultPlatforms(e){return K(e)}pageType(){return ak}generatePaginationRequest(e,t,n,r){return new B$(e,r.remainingContent)}renderPaginatedPage(e,t,n){const r=n
return this.pageWithContent(e,t,r)}pageWithContent(e,t,n){return Ll.Do("pageWithContent",()=>{const r=n.preferredShelfContentType||UF,o=new XL(r),s={id:null,kind:null,softwareType:null,targetType:zb,title:n.title,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,idType:GC,recoMetricsData:U(t)}
Bn(0,o,s),pt(s,n.title),o.isHorizontal=!1,o.shouldFilterApps=n.shouldFilter
const i=x(t)
n.remainingContent=[],o.items=ia(e,i,{contentUnavailable:(e,t)=>(n.remainingContent=He(0,i,t),!0),lockupOptions:{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,artworkUseCase:wa(0,r)}})
const c=new uD([o])
return n.remainingContent.length&&(c.nextPage=n),c})}}class VF extends GF{requestWithFilter(e,t,n){return new B$(e).forType(Pk).includingMacOSCompatibleIOSAppsWhenSupported(!0).withFilter(t,n)}renderPage(e,t,n,r){return Ll.Do(av,()=>{const r=new BF
r.url=this.paginationUrl,r.metricsPageInformation=this.pageInformation(e,t,n),r.shouldFilter=!1,r.metricsLocationTracker={rootPosition:0,locationStack:[]}
const o=this.pageWithContent(e,t,r)
return uu(e,o,r.metricsPageInformation),o})}}class HF extends Ck{constructor(e,t,n,r,o){super(),this.instanceId=e,this.adamId=t,this.advertType=n,this.invocation=r,this.reportingDestination=o}}class qF extends Ck{constructor(e,t,n){super(),this.card=e,this.shelves=t,this.shareAction=n,this.isIncomplete=!1,this.pageMetrics=new iD,this.pageRenderMetrics={}}}class WF extends vk{constructor(e,t,n,r,o,s,i){super(),this.details=e,this.displayProperties=n,this.offerButtonAction=r,this.buttonCallToAction=o,this.offerDisplayProperties=t,this.artwork=s,this.video=i,this.detailsDisplayProperties={wantsBlur:n.wantsBlur,position:n.detailsPosition},this.backgroundColor=n.backgroundColor}}const YF=fe(ae(wP),ae(C_)),jF=fe(ae(wP),ae(C_)),zF=fe(ae(wP),ae(C_))
class JF{constructor(){this.index=0,this.todayShelfRecoMetricsData={},this.hasFocusableElements=!1,this.hasNonFocusableElements=!1,this.isResilientDeepLink=!1}}const KF=[wg,hg,gg,TP]
class ZF extends Ck{constructor(e,t,n,r,o){super(),this.name=e,this.genreId=t,this.artwork=n,this.ageBandId=r,this.children=o}}class XF extends Ck{constructor(e){super(),this.categories=e}}const QF="isOnBoardingCard"
class eM{constructor(e){this.label=e.label,this.title=e.title,this.meta=e.meta,this.date=l(e,xO),this.remainingContents=a(e,ck),this.numberOfItemsProcessed=0,this.isFullyHydrated=function(e){for(let t=e.length-1;t>=0;t--)if(!F(e[t]))return!1
return!0}(this.remainingContents),this.isCompletelyUnhydrated=!this.isFullyHydrated&&!function(e){for(const t of e)if(F(t))return!0
return!1}(this.remainingContents),this.onDevicePersonalizationProcessingType=e.onDevicePersonalizationProcessingType}}const tM=ae("BBBBBB"),nM="FEATURED APP",rM="FEATURED GAME",oM=[Qb,Zb,Vb]
class sM{constructor(){this.locationTracker={rootPosition:0,locationStack:[]}}}class iM{constructor(e,t,n,r){this.todayModule=e,this.metricsPageInformation=n,this.contentOffsetWithinModule=t,this.metricsLocationTracker=r}}new Set([pv,nk,sR,iR,Q_,bv])
const cM=new Set([pv,nk,sR,iR,Q_,bv]),aM=new Set([pv,nk,sR,iR,Q_,bv]),uM=new Set([pv,nk,iR,bv]),lM={11:"43",30:"44"},fM=fw
class dM{constructor(e,t,n){this.sectionType=e,this.shelfId=t,this.shelfBasedMappedIds=n}createProductPageSection(e){return J$.has(this.sectionType)?new n$(this.sectionType,null):new n$(this.sectionType,this.shelfId)}createShelfIdList(){return this.shelfBasedMappedIds||[this.shelfId]}}const pM=5,hM=5,wM=[new dM(hk,hk),new dM(gk,gk),new dM(Rk,qb),new dM(Rk,ub),new dM(Rk,JC),new dM(Rk,DC),new dM(Rk,Xb),new dM(Rk,wb),new dM(Rk,Iv),new dM(Rk,Pv),new dM(Rk,Yb),new dM(Rk,Db),new dM(Ak,Ak),new dM(Rk,dk),new dM(Rk,pb),new dM(Rk,yk,[db,XS,aC]),new dM(Rk,jb),new dM(Rk,Bb),new dM(Rk,kb),new dM(Rk,ik),new dM(Rk,vv),new dM(Rk,Sb),new dM(Rk,hb),new dM(Rk,Ob),new dM(Rk,Fb)],gM=[new dM(hk,hk),new dM(gk,gk),new dM(Rk,qb),new dM(Rk,ub),new dM(Rk,JC),new dM(Rk,DC),new dM(Rk,Xb),new dM(Rk,wb),new dM(Rk,Iv),new dM(Rk,Pv),new dM(Rk,Yb),new dM(Rk,Db),new dM(Ak,Ak),new dM(Rk,dk),new dM(Rk,pb),new dM(Rk,yk,[db,uC,kC,jC,lC]),new dM(Rk,uC),new dM(Rk,kC),new dM(Rk,jC),new dM(Rk,lC),new dM(Rk,jb),new dM(Rk,Bb),new dM(Rk,kb),new dM(Rk,ik),new dM(Rk,vv),new dM(Rk,Sb),new dM(Rk,hb),new dM(Rk,Ob),new dM(Rk,Fb)],mM=[new dM(hk,hk),new dM(gk,gk),new dM(Rk,qb),new dM(Rk,ub),new dM(Rk,JC),new dM(Rk,DC),new dM(Ak,Ak),new dM(Rk,dk),new dM(Rk,Xb),new dM(Rk,pb),new dM(Rk,Db),new dM(Rk,yk,[db,aC]),new dM(Rk,Yb),new dM(Rk,wb),new dM(Rk,Iv),new dM(Rk,Pv),new dM(Rk,jb),new dM(Rk,Bb),new dM(Rk,kb),new dM(Rk,ik),new dM(Rk,NC),new dM(Rk,Sb),new dM(Rk,hb),new dM(Rk,Ob),new dM(Rk,Fb)],TM=[new dM(hk,hk),new dM(gk,gk),new dM(Rk,qb),new dM(Rk,ub),new dM(Rk,JC),new dM(Rk,DC),new dM(Ak,Ak),new dM(Rk,dk),new dM(Rk,Xb),new dM(Rk,pb),new dM(Rk,Db),new dM(Rk,yk,[db,kC,jC]),new dM(Rk,Yb),new dM(Rk,wb),new dM(Rk,Iv),new dM(Rk,Pv),new dM(Rk,jb),new dM(Rk,Bb),new dM(Rk,kb),new dM(Rk,ik),new dM(Rk,NC),new dM(Rk,Sb),new dM(Rk,hb),new dM(Rk,Ob),new dM(Rk,Fb)],AM=[new dM(hk,hk),new dM(gk,gk),new dM(Rk,qb),new dM(Rk,ub),new dM(Rk,Fb),new dM(Rk,JC),new dM(Rk,DC),new dM(Rk,Xb),new dM(Rk,wb),new dM(Rk,Iv),new dM(Rk,Pv),new dM(Rk,Yb),new dM(Rk,Db),new dM(Ak,Ak),new dM(Rk,dk),new dM(Rk,pb),new dM(Rk,yk,[db,XS,aC]),new dM(Rk,jb),new dM(Rk,Bb),new dM(Rk,kb),new dM(Rk,ik),new dM(Rk,vv),new dM(Rk,Sb),new dM(Rk,hb),new dM(Rk,Ob)],yM=[new dM(hk,hk),new dM(gk,gk),new dM(Rk,qb),new dM(Rk,ub),new dM(Rk,Fb),new dM(Rk,JC),new dM(Rk,DC),new dM(Rk,Xb),new dM(Rk,wb),new dM(Rk,Iv),new dM(Rk,Pv),new dM(Rk,Yb),new dM(Rk,Db),new dM(Ak,Ak),new dM(Rk,dk),new dM(Rk,pb),new dM(Rk,yk,[db,uC,kC,jC,lC]),new dM(Rk,uC),new dM(Rk,kC),new dM(Rk,jC),new dM(Rk,lC),new dM(Rk,jb),new dM(Rk,Bb),new dM(Rk,kb),new dM(Rk,ik),new dM(Rk,vv),new dM(Rk,Sb),new dM(Rk,hb),new dM(Rk,Ob)],EM=5,PM=5,IM=[new dM(hk,hk),new dM(gk,gk),new dM(Rk,qb),new dM(Rk,ub),new dM(Rk,Xb),new dM(Rk,wb),new dM(Rk,xv),new dM(Rk,Yb),new dM(Rk,Db),new dM(Ak,Ak),new dM(Rk,dk),new dM(Rk,pb),new dM(Rk,yk,[db,XS,aC]),new dM(Rk,hb),new dM(Rk,jb),new dM(Rk,Bb),new dM(Rk,kb),new dM(Rk,ik),new dM(Rk,vv),new dM(Rk,Sb),new dM(Rk,Fb),new dM(Rk,Ob)],_M=[new dM(hk,hk),new dM(gk,gk),new dM(Rk,qb),new dM(Rk,ub),new dM(Rk,Xb),new dM(Rk,wb),new dM(Rk,xv),new dM(Rk,Yb),new dM(Rk,Db),new dM(Ak,Ak),new dM(Rk,dk),new dM(Rk,pb),new dM(Rk,yk,[db,uC,kC,jC,lC]),new dM(Rk,hb),new dM(Rk,jb),new dM(Rk,Bb),new dM(Rk,kb),new dM(Rk,ik),new dM(Rk,vv),new dM(Rk,Sb),new dM(Rk,Fb),new dM(Rk,Ob)],SM=[new dM(hk,hk),new dM(gk,gk),new dM(Rk,qb),new dM(Rk,ub),new dM(Ak,Ak),new dM(Rk,dk),new dM(Rk,pb),new dM(Rk,Db),new dM(Rk,yk,[db,aC]),new dM(Rk,Xb),new dM(Rk,xv),new dM(Rk,Yb),new dM(Rk,wb),new dM(Rk,hb),new dM(Rk,jb),new dM(Rk,Bb),new dM(Rk,kb),new dM(Rk,ik),new dM(Rk,NC),new dM(Rk,Sb),new dM(Rk,Fb),new dM(Rk,Ob)],OM=[new dM(hk,hk),new dM(gk,gk),new dM(Rk,qb),new dM(Rk,ub),new dM(Ak,Ak),new dM(Rk,dk),new dM(Rk,pb),new dM(Rk,Db),new dM(Rk,yk,[db,kC,jC]),new dM(Rk,Xb),new dM(Rk,xv),new dM(Rk,Yb),new dM(Rk,wb),new dM(Rk,hb),new dM(Rk,jb),new dM(Rk,Bb),new dM(Rk,kb),new dM(Rk,ik),new dM(Rk,NC),new dM(Rk,Sb),new dM(Rk,Fb),new dM(Rk,Ob)],RM=[new dM(hk,hk),new dM(gk,gk),new dM(Rk,qb),new dM(Rk,ub),new dM(Rk,Fb),new dM(Rk,Xb),new dM(Rk,wb),new dM(Rk,xv),new dM(Rk,Yb),new dM(Rk,Db),new dM(Ak,Ak),new dM(Rk,dk),new dM(Rk,pb),new dM(Rk,yk,[db,XS,aC]),new dM(Rk,hb),new dM(Rk,jb),new dM(Rk,Bb),new dM(Rk,kb),new dM(Rk,ik),new dM(Rk,vv),new dM(Rk,Sb),new dM(Rk,Ob)],CM=[new dM(hk,hk),new dM(gk,gk),new dM(Rk,qb),new dM(Rk,ub),new dM(Rk,Fb),new dM(Rk,Xb),new dM(Rk,wb),new dM(Rk,xv),new dM(Rk,Yb),new dM(Rk,Db),new dM(Ak,Ak),new dM(Rk,dk),new dM(Rk,pb),new dM(Rk,yk,[db,uC,kC,jC,lC]),new dM(Rk,hb),new dM(Rk,jb),new dM(Rk,Bb),new dM(Rk,kb),new dM(Rk,ik),new dM(Rk,vv),new dM(Rk,Sb),new dM(Rk,Ob)],vM=5,bM=5,kM=[new dM(hk,hk),new dM(gk,gk),new dM(Rk,qb),new dM(Rk,ub),new dM(Rk,JC),new dM(Rk,DC),new dM(Rk,Xb),new dM(Rk,wb),new dM(Rk,Iv),new dM(Rk,Pv),new dM(Rk,Yb),new dM(Rk,Db),new dM(Ak,Ak),new dM(Rk,dk),new dM(Rk,pb),new dM(Rk,yk),new dM(Rk,jb),new dM(Rk,Bb),new dM(Rk,kb),new dM(Rk,ik),new dM(Rk,vv),new dM(Rk,Sb),new dM(Rk,hb),new dM(Rk,Ob),new dM(Rk,Fb)],DM=[new dM(hk,hk),new dM(gk,gk),new dM(Rk,qb),new dM(Rk,ub),new dM(Rk,JC),new dM(Rk,DC),new dM(Ak,Ak),new dM(Rk,dk),new dM(Rk,Xb),new dM(Rk,pb),new dM(Rk,Db),new dM(Rk,yk),new dM(Rk,Yb),new dM(Rk,wb),new dM(Rk,Iv),new dM(Rk,Pv),new dM(Rk,jb),new dM(Rk,Bb),new dM(Rk,kb),new dM(Rk,ik),new dM(Rk,NC),new dM(Rk,Sb),new dM(Rk,hb),new dM(Rk,Ob),new dM(Rk,Fb)],NM=5,LM=5,$M=[new dM(hk,hk),new dM(gk,gk),new dM(Rk,qb),new dM(Rk,ub),new dM(Rk,Xb),new dM(Rk,wb),new dM(Rk,xv),new dM(Rk,Yb),new dM(Rk,Db),new dM(Ak,Ak),new dM(Rk,dk),new dM(Rk,pb),new dM(Rk,yk),new dM(Rk,hb),new dM(Rk,jb),new dM(Rk,Bb),new dM(Rk,kb),new dM(Rk,ik),new dM(Rk,vv),new dM(Rk,Sb),new dM(Rk,Fb),new dM(Rk,Ob)],xM=[new dM(hk,hk),new dM(gk,gk),new dM(Rk,qb),new dM(Rk,ub),new dM(Ak,Ak),new dM(Rk,dk),new dM(Rk,pb),new dM(Rk,Db),new dM(Rk,yk),new dM(Rk,Xb),new dM(Rk,xv),new dM(Rk,Yb),new dM(Rk,wb),new dM(Rk,hb),new dM(Rk,jb),new dM(Rk,Bb),new dM(Rk,kb),new dM(Rk,ik),new dM(Rk,NC),new dM(Rk,Sb),new dM(Rk,Fb),new dM(Rk,Ob)],FM=5,MM=5,UM=[new dM(hk,hk),new dM(gk,gk),new dM(Rk,Db),new dM(Ak,Ak),new dM(Rk,hO),new dM(Rk,Yb),new dM(Rk,yk),new dM(Rk,Ob),new dM(Rk,Fb),new dM(Rk,jb),new dM(Rk,Bb),new dM(Rk,kb),new dM(Rk,ik),new dM(Rk,vv),new dM(Rk,wO)],BM=[new dM(hk,hk),new dM(gk,gk),new dM(Ak,Ak),new dM(Rk,hO),new dM(Rk,Db),new dM(Rk,yk),new dM(Rk,Yb),new dM(Rk,Ob),new dM(Rk,Fb),new dM(Rk,jb),new dM(Rk,Bb),new dM(Rk,kb),new dM(Rk,ik),new dM(Rk,NC),new dM(Rk,wO)],GM=5,VM=5,HM=[new dM(hk,hk),new dM(gk,gk),new dM(Rk,Db),new dM(Ak,Ak),new dM(Rk,hO),new dM(Rk,xv),new dM(Rk,Yb),new dM(Rk,yk),new dM(Rk,Fb),new dM(Rk,Ob),new dM(Rk,jb),new dM(Rk,Bb),new dM(Rk,kb),new dM(Rk,ik),new dM(Rk,vv),new dM(Rk,wO)],qM=[new dM(hk,hk),new dM(gk,gk),new dM(Ak,Ak),new dM(Rk,hO),new dM(Rk,Db),new dM(Rk,yk),new dM(Rk,xv),new dM(Rk,Yb),new dM(Rk,Fb),new dM(Rk,Ob),new dM(Rk,jb),new dM(Rk,Bb),new dM(Rk,kb),new dM(Rk,ik),new dM(Rk,NC),new dM(Rk,wO)],WM=3,YM=3,jM=[new dM(hk,hk),new dM(gk,gk),new dM(Rk,wb),new dM(Ak,Ak),new dM(Rk,dk),new dM(Rk,jb),new dM(Rk,Bb),new dM(Rk,X_)],zM=[new dM(hk,hk),new dM(gk,gk),new dM(Ak,Ak),new dM(Rk,dk),new dM(Rk,wb),new dM(Rk,jb),new dM(Rk,Bb),new dM(Rk,X_)],JM="product_media"
class KM extends Ck{constructor(e){super(),this.style=e}isValidUber(e){function t(e){return typeof e!==Ev&&null!==e&&0!==Object.keys(e).length}return t(this.artwork)||t(this.compactArtwork)||t(this.video)||t(this.compactVideo)||e&&t(this.iconArtwork)}}class ZM extends Ck{constructor(e,t,n,r,o,s){super(),this.bodyText=e,this.isDetailHeader=t,this.privacyTypes=n,this.bodyActions=r,this.supplementaryItems=o,this.seeDetailsAction=s}}class XM extends Ck{constructor(e,t){super(),this.bodyText=e,this.action=t}}class QM extends Ck{constructor(e,t,n){super(),this.bodyText=e,this.actions=t,this.privacyTypesCount=n}}class eU extends vk{constructor(e,t,n,r,o,s,i,c){super(),this.identifier=e,this.title=t,this.detail=n,this.artwork=r,this.style=o,this.purposes=s,this.categories=i,this.clickAction=c,this.wantsScrollFocus=!1}}class tU extends Ck{constructor(e,t,n){super(),this.identifier=e,this.title=t,this.categories=n}}class nU extends Ck{constructor(e,t,n,r,o=[]){super(),this.identifier=e,this.title=t,this.artwork=n,this.style=r,this.dataTypes=o,this.prefersSmallArtwork=!1}}const rU=["284417353","1464590764","314638464","284993479","1351056256"],oU="X-Apple-iAd-Request-Data",sU="X-Apple-App-Store-Client-Request-Id",iU="X-Apple-iAd-Env-Name"
class cU{setShelfId(e,t){this.shelfId=e,this.index=t,K$.has(e)&&(this.section=new n$(Rk,e))}}const aU=[ac,uc,Yi,function(e,t,n,r,o,s){if(gs(e,e.bag.gameControllerRecommendedRolloutRate)&&Zi(e,t)){const n=o?"":e.loc.string("AppStore.ProductPage.Info.GameController.Title"),r=e.loc.string("AppStore.ProductPage.Info.GameController.Recommended"),s=y(t,Fv),c=e.loc.string("AppStore.ProductPage.Info.GameController.Recommended.Summary").replace(Kh,s),a=[new cL(c,null,null,null)]
let u
const l=e.bag.gameControllerLearnMoreEditorialItemId
return i(l)&&(u=new wD(bb),u.title=e.loc.string("AppStore.ProductPage.Info.GameController.Recommended.LearnMore"),u.pageUrl=`https://apps.apple.com/story/id${l}`),new iL(n,a,r,u)}return null},ji,function(e,t,n,r,o,s){if(P(t,"usesLocationBackgroundMode")){const t=o?"":e.loc.string("INFO_LIST_LOCATION_TITLE"),n=e.loc.string("INFO_LIST_LOCATION_DESCRIPTION"),r=new cL(n)
return new iL(t,[r])}return null},ec,Ji,lc,function(e,t,n,r,o,s){const c=xt(e,t),a=Ft(e,"product-page-info-section")
if(!c||!a)return null
const u=o?"":e.loc.string("AppStore.Annotations.ExternalPurchases.Title"),l=e.loc.string("YES")
let f
if(e.bag.externalPurchasesProductPageAnnotationUseAlternateCopy){const n=y(t,Fv)
f=i(n)?e.loc.string("AppStore.Annotations.ExternalPurchases.Expanded_NLD").replace("@@developerName@@",n):e.loc.string("AppStore.Annotations.ExternalPurchases.Expanded.NoDeveloper_NLD")}else f=e.loc.string("AppStore.Annotations.ExternalPurchases.Expanded")
const d=new cL(f),p=e.loc.string("AppStore.Annotations.ExternalPurchases.Expanded.LearnMore"),h=Mt(e,p,s.metricsPageInformation,s.locationTracker),w=new iL(u,[d],l,h)
return w.shouldAlwaysPresentExpanded=!0,w},Qi],uU=[ac,Yi,function(e,t,n,r,o,s){const i=be(e,t,gR)
if(0===i.length)return null
const c=i[0]
let a=null
const u=l(c,Z_)
u&&(a=e.loc.formatDate("d MMM YYYY",new Date(u)))
const f=l(c,Gw)
if(0===i.length)return null
let d
if(f&&a)d=e.loc.string("VERSION_STRING_WITH_RELEASE_DATE").replace(Vw,f).replace("{date}",a)
else{if(!f)return null
d=f}const p=new cL(d),h=o?"":e.loc.string("VERSION_STRING"),w=new iL(h,[p])
return w&&!r?w:null},uc,Qi],lU=[ji,ec,Ji],fU=[lc],dU=[mc,Tc,wc,Ic,yc,Ac,Pc],pU=[Oc,Ec,gc,mc],hU=[Oc,mc,Tc,function(e,t,n,r){if(!Ne(e,t,PR))return null
const o=e.loc.string("BADGE_FRIENDS_HEADING","Friends"),s=ok,i=Yb,c=Yb,a={maxNumberOfAvatarsToDisplay:3,maxNumberOfFriendsBeforeTruncation:99,adamId:t.id}
return new t$(i,c,a,s,o,"",null,"",o,_b)},gc,wc,Ic,yc,Ac,Pc,function(e,t,n,r){if(Me(e).isDeletableSystemAppFromData(t))return null
const o=Ma(e,t)
if(!s(o))return null
const i=e.loc.fileSize(o).trim().split(/\s+/)
if(2!==i.length)return null
const c={paragraphText:i[0]},a=i[1],u=e.loc.string("BADGE_SIZE_HEADING")
return new t$(hv,I_,c,ok,u,a,null,null,a,lv)}]
class wU{constructor(e,t){this.period=e,this.type=t}isEqualTo(e){return e.period===this.period&&e.type===this.type}}const gU=7,mU={D:"DAYS",W:"WEEKS",M:"MONTHS",Y:"YEARS"},TU={FreeTrial:"FREE_TRIAL",PayUpFront:"PAID_UPFRONT",PayAsYouGo:"PAID_TRIAL"},AU={chartPositions:function(e,t,n){const r=ve(e,t,WE)
if(o(r))return null
const s=Ha(0,e.host.clientIdentifier)
if(o(s))return null
const i=d(r,s)
if(o(i))return null
const c=f(i,c_)
if(c>50)return null
const a=l(i,Tw),u=new PL("borderedTextLabel")
return u.moduleType=WE,u.borderedText=e.loc.string("METADATA_RIBBON_CHART_POSITION",YE).replace(YE,e.loc.decimal(c)),u.labelText=a,u.secondaryViewPlacement=Gb,u},genreDisplayName:function(e,t,n){const r=ve(e,t,qE),s=Kc(e,t)
if(o(s)||o(r))return null
const i=new PL(hP)
i.moduleType=Cp,i.labelText=s
const c=ga(e,r,{useCase:19})
return c.crop="sr",i.artwork=c,i},developerInfo:function(e,t,n){if(o(n.developerName))return null
{const t=new PL(hP)
return t.moduleType="developerInfo",t.labelText=n.developerName,t.artwork=We(e,Aw),t}},editorialBadgeInfo:function(e,t,n){if(n.isEditorsChoice){const e=new PL(LR)
return e.moduleType=rC,e}return null},userRating:function(e,t,n){if(s(n.ratingCount)&&s(n.rating)){const e=new PL("starRating")
return e.moduleType=ZO,e.starRating=n.rating,e.labelText=n.ratingCount,e}return null},supportsGameController:function(e,t,n){let r=!1
switch(ke(e,t,VR)){case cS:case sI:r=!0}if(Ne(e,t,lg)&&(r=!0),!r)return null
const o=new PL(hP)
return o.moduleType=lg,o.labelText=e.loc.string(KO),o.artwork=We(e,"systemimage://gamecontroller.fill"),o}}
class yU{constructor(){this.runsOnIntel=!0,this.runsOnAppleSilicon=!0,this.requiresRosetta=!1}}class EU{constructor(e,t){this.videos=e,this.mediaPlatform=t}}const PU=new Fk(414,896),IU=new Fk(375,812),_U=new Fk(414,736),SU=new Fk(375,667),OU=new Fk(320,568),RU=new Fk(320,480),CU=(new Fk(768,1024),new Fk(810,1080)),vU=new Fk(834,1112),bU=new Fk(834,1194),kU=new Fk(1024,1366),DU=new Fk(1024,1366)
let NU=new Fk(744,1133),LU=new Fk(1133,744)
const $U=new Fk(312,390),xU=new Fk(368,448)
let FU=new Fk(396,484)
const MU=new Fk(820,1180)
let UU=new Fk(360,780),BU=new Fk(390,844),GU=new Fk(428,926)
const VU=[Iy,xI,Td,md,gd,Hv],HU=18,qU=18,WU=41.5,YU=39,jU=34,zU=30,JU=13,KU=11,ZU=55,XU=5.5,QU={identifer:"UPumzpM",treatments:[0,1]},eB=new Set([g_,Tv,Rv,sh,ih,MS,s_,o_,rb,"iAd",qC,DR,Vp,u_])
class tB extends Ck{constructor(e,t){super(),this.title=e,this.sections=t||[],this.pageMetrics=new iD,this.pageRenderMetrics={}}}class nB extends Ck{constructor(e,t){super(),this.title=e,this.footer=t,this.contents=[]}addContentItem(e){this.contents.push(e)}}class rB extends Ck{constructor(e){super(),this.type=e}}class oB extends rB{constructor(e,t,n){super(vb),this.title=e,this.action=t,this.displayType=n||Cv}}class sB extends rB{constructor(e,t){super("infoListItem"),this.title=e,this.value=t}}class iB extends rB{constructor(e){super(dv),this.text=e}}class cB extends Ck{constructor(){super(...arguments),this.links={}}}const aB=Pf
class uB extends Ck{constructor(e,t,n=null){super(),this.title=e,this.value=t,this.metricsValue=n}}uB.defaultValue="pageFacetsDefaultValue",uB.trueValue=new uB($v,jP),uB.falseValue=new uB(jP,jP)
class lB extends Ck{constructor(e,t,n,r=null,o=[],s=null,i=null,c=null,a=!1,u=!1){super(),this.parameterName=e,this.title=t,this.displayType=n,this.defaultOptions=s,this.defaultOptionTitle=r,this.options=o,this.metricsParameterName=i,this.clickAction=c,this.displayOptionsInline=a,this.showsSelectedOptions=u}}class fB extends Ck{constructor(e=[],t=null){super(),this.title=t,this.facets=e}}class dB extends Ck{constructor(e,t,n){super(),this.facetGroups=e,this.allowsResetButton=t,this.resetButtonTitle=n}static isDefinedNonNullNonEmpty(e){return typeof e!==Ev&&null!==e&&0!==Object.keys(e).length}}dB.requestValuesForSelectedFacetOptions=function(e){if(dB.isDefinedNonNullNonEmpty(e)){const t=e.filter(e=>dB.isDefinedNonNullNonEmpty(e.value)).map(e=>e.value).join(",").split("&"),n=t[0],r=t.splice(1),o={}
for(const e of r){const t=e.split("=")
2===t.length&&(o[t[0]]=t[1])}return{value:n,additionalKeyValuePairs:o}}return null}
const pB="-releaseDateByDay&sort=name",hB="-lastUpdatedByDay&sort=name",wB="alphabet&sort=name",gB="category&sort=-releaseDate",mB="groupBy",TB=wI,AB=Ff,yB=JA,EB={}
let PB=!1,IB=null,_B=null,SB=null,OB=null,RB=null,CB=null,vB=null,bB=null,kB=null,DB=null,NB=null
const LB={}
LB[b$.sort]=mB,LB[b$.ageRating]=Vf,LB[b$.controllerSupport]=Hf,LB[b$.multiplayerSupport]=qf,LB[b$.comingSoon]=TB
const $B=3,xB=Fg
class FB extends MF{constructor(e,t){super("ArcadeSubscribeBuilder"),t.exportingService(uO,{fetchSubscribePage(t){const n=sN.from(t.url)
return e.required(RF).fetchPage(e,n.build(),A$)}})}defaultPlatforms(e){return K(e)}defaultTab(e){return pk}defaultAttributes(e){const t=[Qb,qv,tb]
return e.appleSilicon.isSupportEnabled&&t.push(Pb),t}pageType(){return ry}pageRoute(e){return[{hostName:`${v$.arcadeSubscribePageCustomContext}`,query:[`${b$.appId}?`,`${b$.context}?`,`${b$.subscribePageMessage}?`,`${b$.askToBuyId}?`,`${b$.editorialItem}?`,`${b$.includePostSubscribeAttribution}?`]},{hostName:`${v$.arcadeSubscribePage}`,query:[`${b$.appId}?`,`${b$.context}?`,`${b$.subscribePageMessage}?`,`${b$.askToBuyId}?`,`${b$.editorialItem}?`,`${b$.includePostSubscribeAttribution}?`]},{path:"arcade/subscribe",query:[`${b$.appId}?`,`${b$.context}?`,`${b$.subscribePageMessage}?`,`${b$.askToBuyId}?`,`${b$.editorialItem}?`,`${b$.includePostSubscribeAttribution}?`]},{path:"{countryCode}/arcade/subscribe",query:[`${b$.appId}?`,`${b$.context}?`,`${b$.subscribePageMessage}?`,`${b$.askToBuyId}?`,`${b$.editorialItem}?`,`${b$.includePostSubscribeAttribution}?`]}]}generatePageRequest(e,t,n){return hn(e,this.marketingItemContextFromContextString(l(n,b$.context)),l(n,b$.appId)).attributingTo(t.build())}renderPage(e,t,n,o){const c=o[FB.contextualAppRequirementKey]
let u=null
i(c)&&(u=$(c))
const f=a(t,FA).map(e=>g(e)),d=e.arcade.getMarketingItemFromMarketingItems(f),p=d,w=uo(e,p,0,!1,!1,gI),m=this.marketingItemContextFromContextString(l(n,b$.context)),T=e.client.isPhone,A=m===PA,y=new kk(pk,e.bag.arcadeAppAdamId,iv,null,A&&T?"arcadeLaunchRepairCompactSheet":Mg,null,null,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId)
y.titles[ZI]=e.loc.string(SR,OR)
const P=l(n,b$.appId),I=function(e,t,n,r){const o=cu(e,"Upsell",n,r)
return s(r)&&(o.mercuryMetricsData=rt(0,r)),o}(e,0,p.id,p)
I.offerType=XA,I.baseFields.upsellType=this.metricsUpsellType(m),I.baseFields.subscriptionSKU=e.bag.arcadeProductId
const _={pageInformation:I,locationTracker:{rootPosition:0,locationStack:[]}},S=fo(e,{marketingItemData:d},co(0,p),_)
if(!(S instanceof MD))throw new Error("Only buy actions are supported on the upsell page")
const O=new A$(w,e.loc.string(ed),S,y)
let R
O.askToBuyMessage=l(n,b$.subscribePageMessage),O.askToBuyId=l(n,b$.askToBuyId),uu(e,O,I)
let C=!1
if(i(u)){O.primaryIcon=ma(e,u,_,{useCase:3})
const t=E(u,Lb),r=_t(e,u,_)
r.excludeAttribution=!h(n[b$.includePostSubscribeAttribution]),R=jt(e,u,tk,m,t,r),O.postSubscribeAction=R,C=!0}if(!h(n[b$.includePostSubscribeAttribution])){const e=O.pageMetrics.instructions
if(!r(e))for(const t of e)t.data.includingFields.push(iE)}let v=[]
const b=o[FB.contextualIconsRequirementKey]
if(i(b)&&(v=M(b)),s(d)&&(v=ce(d,ck)),i(v)){const t=[]
for(const n of v)if(n.id===P){if(!C){O.primaryIcon=ma(e,n,_,{useCase:3})
const t=E(u,Lb),r=_t(e,n,_)
R=jt(e,n,tk,m,t,r),O.postSubscribeAction=R}}else t.push(ma(e,n,_,{useCase:2}))
O.icons=t}return s(R)&&(S.postSubscribeAction=R),A&&s(P)&&(O.openAppAction=new OD(P)),i(O.icons)||s(O.primaryIcon)||(O.artwork=this.genericArtworkFromData(e,p)),A&&(O.singleIcon=O.primaryIcon),O.subscribedOfferButtonAction=new gD(pk),O}genericArtworkFromData(e,t){if(!s(t))return null
const n=e.client.isPhone,r=function(e,t,n){const r=function(e,t){return Nr(0,t)}(0,t)
return d(r,n)}(0,t,n?Ap:yp)
if(!i(r))return null
let o=null
return o=n?"of":"og",ga(e,r,{cropCode:o,allowingTransparency:!0,useCase:7})}metricsUpsellType(e){return s(e)?e:wC}marketingItemContextFromContextString(e){switch(e){case Jl:return PA
case Yl:return jl
default:return e}}}FB.contextualIconsRequirementKey="contextualIconsRequirement",FB.contextualAppRequirementKey="contextualPrimaryIconRequirement"
class MB extends MF{constructor(e,t){super("ArcadePageBuilder"),t.exportingService(uO,{fetchPage(t){const n=sN.from(t.url)
return n.param(b$.isArcade,"true"),n.param(b$.isSubscribed,`${t.isSubscribed}`),n.param(b$.isTrialAvailable,`${t.isTrialAvailable}`),e.required(RF).fetchPage(e,n.build(),dD)}})}static comingSoonGroupingID(e){return"175443"}defaultPlatforms(e){return K(e)}defaultAttributes(e){const t=[Qb,qv,tb,xy]
return e.appleSilicon.isSupportEnabled&&t.push(Pb),t}pageType(){return pk}pageRoute(e){return[{protocol:R$.https,path:`/${C$.store}/${C$.grouping}`,query:[b$.isArcade,`${b$.isTrialAvailable}?`,`${b$.isSubscribed}?`,b$.id]},{hostName:v$.storePreview,path:`/WebObjects/{storePreviewInstance}/wa/${C$.grouping}`,query:[b$.isArcade,`${b$.isTrialAvailable}?`,`${b$.isSubscribed}?`,b$.id,`${b$.useReleaseId}?`]},{protocol:R$.https,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}",query:[b$.isArcade,`${b$.isTrialAvailable}?`,`${b$.isSubscribed}?`]},{protocol:R$.https,path:"{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}",query:[b$.isArcade,`${b$.isTrialAvailable}?`,`${b$.isSubscribed}?`]},{protocol:R$.https,path:"{apiVersion}/editorial/{countryCode}/groupings/{id}",query:[b$.isArcade,`${b$.isTrialAvailable}?`,`${b$.isSubscribed}?`]}]}shelfRoute(e){return[{protocol:R$.internal,path:`/${C$.grouping}/${C$.shelf}/{token}`,query:[b$.isArcade,`${b$.isTrialAvailable}?`,`${b$.isSubscribed}?`]},{protocol:R$.internal,path:`/${C$.arcade}/${C$.shelf}/{token}`,query:[b$.isArcadeSeeAllGamesShelf]}]}generatePageRequest(e,t,n){let r=null
r=e.bag.isArcadeComingSoonEnabled?MB.comingSoonGroupingID(e):n[b$.id]
const o=h(n[b$.isSubscribed])
if(!c(r))throw new Error(`Unable to map ${t.build()} to a media api url`)
const a=[Qb,Zb,qv,tb,ev,kS]
e.appleSilicon.isSupportEnabled&&a.push(Pb)
let u=new B$(e).forType(Mv).includingAttributes(a).includingMacOSCompatibleIOSAppsWhenSupported()
Qt(e)&&(u.enablingFeature(Xb),u.includingScopedAttributes(Tk,[dk,Zv,Xv]),u.includingScopedRelationships(Tk,[sk]))
const l=X(e)
s(l)&&u.addingQuery(JR,l),e.bag.isArcadeComingSoonEnabled||o?u.addingQuery(KC,"subscriber"):(u.addingQuery(KC,"nonsubscriber"),u.includingRelationshipsForUpsell(!1)),u.withIds([r])
const f=t.query[b$.useReleaseId]
return t.host===v$.storePreview&&i(f)&&(u=u.addingQuery(uy,f),u.isStorePreviewRequest=!0),u.enablingFeature(VI),u.attributingTo(t.build())}generateAdditionalPageRequirements(e,t,n){const r=super.generateAdditionalPageRequirements(e,t,n)
if(e.bag.isArcadeComingSoonEnabled){const t=new B$(e).forType(Kb).withIds(["1469266318"])
return r[MB.comingSoonEIRequirementKey]=new UN(b(e,t).catch(()=>null)),r}if(MB.footerShowsIconsForPlatform(e.host.platform)&&!e.bag.isArcadeComingSoonEnabled){const t=pn(e,this.numberOfIconsForArcadeAppGrid(e.client.deviceType))
r[MB.footerIconsRequirementsKey]=new UN(b(e,t).catch(()=>null),!1)}return r}renderPage(e,t,n,r,c){return Ll.Do(av,()=>{const a=$(t)
if(o(a))return null
const u=se(a,KC),l=y(a,"id")
if(o(u))return null
const f=h(n[b$.isSubscribed]),d=h(n[b$.isTrialAvailable]),p={}
p[b$.isArcade]="true",p[b$.isSubscribed]=`${f}`,p[b$.isTrialAvailable]=`${d}`
const w=cu(e,T_,a.id,t),g=Qn(e)
w.recoMetricsData=ot(w.recoMetricsData,null,g),w.isCrossfireReferralCandidate=!0
const m={shelves:[],metricsPageInformation:w,metricsLocationTracker:{rootPosition:0,locationStack:[]},groupingData:u,pageGenreAdamId:l,pageGenreId:null,hasAuthenticatedUser:s(e.user.dsid),additionalShelfParameters:p,isArcadePage:!0}
let T=null,A=null
if(e.bag.isArcadeComingSoonEnabled)T=$(r[MB.comingSoonEIRequirementKey]),A=io(e,T,m)
else if(!f){const t=wn(e,a)
if(t)T=t.marketingItemData
else if(c){Ll.bm(Lv,Ug,"relationships.upsell")
const e=gn(0,c.get(CP))
e&&(T=e.marketingItemData)}A=io(e,T,m)}const E=MB.insertShelfForUpsellBreakoutIfNecessary(A,f,m)
Lo(e,a,m)
const P=new dD(m.shelves)
uu(e,P,m.metricsPageInformation),P.tabTitle=y(a,_k)
const I=y(a,_k)
e.host.clientIdentifier,E||(P.title=I)
const _=new zk(Sv)
_.color=le("primaryText"),_.isFallbackStyle=!0,P.titleEffect=m.pageTitleEffect||_,P.presentationOptions=[]
let S=!1
if(m.shelves.length>0){const e=m.shelves[0].contentType===fp,t=m.shelves[0].contentType===PO,n=m.shelves[0].contentType===HI
S=e||t||n}if(S&&P.presentationOptions.push($y),!f&&i(A)){P.subscriptionOfferAction=MB.createSubscribeAction(e,A,{id:null,pageInformation:m.metricsPageInformation,locationTracker:m.metricsLocationTracker,targetType:fk}),P.subscriptionOfferDisplayProperties=new kk(pk,e.bag.arcadeAppAdamId,iv,null,pk,null,null,null,null,null,null,null,null,null,null,null,null,null,e.bag.arcadeProductFamilyId),P.subscriptionOfferTitle=A.details.title,P.subscriptionOfferSubtitle=A.buttonCallToAction||A.details.description
const t={pageInformation:m.metricsPageInformation,locationTracker:m.metricsLocationTracker},n={marketingItemData:T}
P.subscriptionLockup=oa(e,n,t,0,iv,"navigationBar")}if(!e.bag.isArcadeComingSoonEnabled){const t={featuredContentId:null,featuredContentData:null,metricsPageInformation:m.metricsPageInformation,metricsLocationTracker:m.metricsLocationTracker,pageGenreId:m.pageGenreId,id:"arcade-see-all-games-footer",title:null,shouldFilter:!1,remainingItems:[],isFirstRender:!0,isDeferring:!1,showOrdinals:!1,hasExistingContent:!1,showingPlaceholders:!1,ordinalIndex:1,isSearchGrouping:m.isSearchGrouping,isArcadePage:m.isArcadePage}
if(P.shelves.push(this.createFooterShelf(e,null,!0,t)),0===P.shelves.length)throw new Error(`Missing content for Arcade grouping ${JSON.stringify(n)}`)}return P.autoUpsellAction=ln(e,wC,null,null),Nu(P),P})}static insertShelfForUpsellBreakoutIfNecessary(e,t,n){return Ll.Do("insertShelfForUpsellBreakoutIfNecessary",()=>{if(o(e))return t||Ll.bm(Hb,Ug,PO),!1
const r=new XL(PO)
return r.items=[e],r.presentationHints={isFirstShelf:!0},n.shelves.push(r),!0})}static createSubscribeAction(e,t,n){if(o(t))return null
if(e.bag.isArcadeComingSoonEnabled)return t.offerButtonAction
{const r=ln(e,IA,null,null,n)
return r.title=t.offerButtonAction.title,r}}static footerShowsIconsForPlatform(e){switch(e){case gC:case _v:return!0
default:return!1}}createFooterShelf(e,t,n,o){const i=new jk,c=new XL("arcadeFooter")
c.items=[i]
const a={targetType:"arcadeSeeAllGamesFooter",pageInformation:o.metricsPageInformation,locationTracker:o.metricsLocationTracker,title:e.loc.string($f),id:o.id,kind:"footer",softwareType:null}
Bn(0,i,a),pt(a,a.title),i.buttonAction=function(e,t=Z_,n,r){const o=sN.fromComponents(R$.internal,null,`/${C$.arcadeSeeAllGames}`,{sort:t}),s=new wD(jR,o.build())
return s.title=e.loc.string($f),Rt(e,s,{id:xf,targetType:fk,actionType:Qv,actionContext:xC,pageInformation:n,locationTracker:r}),s}(e,Z_,o.metricsPageInformation,o.metricsLocationTracker)
const u={targetType:fk,pageInformation:o.metricsPageInformation,locationTracker:o.metricsLocationTracker,title:i.buttonAction.title,id:xf,kind:fk,softwareType:null}
Bn(0,i.buttonAction,u),wt(a.locationTracker)
const l=e.bag.termsAndConditionsURL
if(!r(l)&&"tv"!==e.client.deviceType){const t=e.loc.string(hp),n=new TD(l),r=new mL(t)
r.clickAction=n,r.presentationStyle=[Vy,Hy,qy],i.footnote=r}if(c.background={type:Sv,color:le(dd)},s(t)){const n={pageInformation:o.metricsPageInformation,locationTracker:o.metricsLocationTracker},r=M(t)
i.icons=Ta(e,r,n,{useCase:2})}else i.icons=[]
return n&&(c.url=`${R$.internal}:/${C$.arcade}/${C$.shelf}/${encodeURIComponent(JSON.stringify(o))}?${b$.isArcadeSeeAllGamesShelf}=true`),c}createTermsAndConditionsShelf(e){return!r(e.bag.termsAndConditionsURL)&&e.client.deviceType,null}generateShelfRequest(e,t,n){return n[b$.isArcadeSeeAllGamesShelf]?this.generateSeeAllGamesShelfRequest(e):this.generateStandardShelfRequest(e,t,n)}generateSeeAllGamesShelfRequest(e){return pn(e,this.numberOfIconsForArcadeAppGrid(e.client.deviceType))}generateStandardShelfRequest(e,t,n){const r=n[Cb],o=JSON.parse(r),s=fs(o),c=ds(o),a=[],u=[Qb,Zb,Vb,QC,UC,ev]
if(s){let t=o.remainingItems
i(o.relationshipDataToFetch)&&(t=o.remainingItems.map(e=>ie(e,o.relationshipDataToFetch)))
let n=[Qb,Zb,Vb,ev],r=[]
const s=new B$(e,t)
return _e(e,s,t),s.resourceType===Pk&&(n=u,r=a),Qt(e)&&(s.includingScopedAttributes(Tk,[dk,Zv,Xv]),s.includingScopedRelationships(Tk,[sk])),s.includingAdditionalPlatforms(K(e)).includingAttributes(n).includingRelationships(r).usingCustomAttributes(we(e))}if(c){let t=[Qb,Zb,Vb,ev],n=[]
const r=new B$(e,o.recommendationsHref)
return r.resourceType===Pk&&(t=u,n=a),Qt(e)&&(r.includingScopedAttributes(Tk,[dk,Zv,Xv]),r.includingScopedRelationships(Tk,[sk])),r.includingAdditionalPlatforms(K(e)).includingAttributes(t).includingRelationships(n).usingCustomAttributes(we(e))}return null}renderShelf(e,t,n){if(n[b$.isArcadeSeeAllGamesShelf]){const r=n[Cb],o=JSON.parse(r)
return this.renderSeeAllGamesShelf(e,t,o)}return ws(e,t,n)}handleShelfError(e,t,n,r){const o=r[Cb],s=JSON.parse(o)
if(s&&!s.hasExistingContent){const e=new XL(s.shelfStyle)
e.isHidden=!0,t(e)}else super.handleShelfError(e,t,n,r)}renderSeeAllGamesShelf(e,t,n){return this.createFooterShelf(e,t,!1,n)}numberOfIconsForArcadeAppGrid(e){return e===mk?9:20}supportsDataAugmenting(){return!0}additionalDataKeysNeededForData(e,t,n){if(r(n))return null
const o=$(t),s=h(n.parameters[b$.isSubscribed]),i=wn(e,o)
return!s&&r(i)?new Set([CP]):null}fetchAdditionalDataForKey(e,t){return Ll.Do("fetchAdditionalDataForKey",()=>{let n
return t===CP&&(n=hn(e,J_),Ll.bm(Hb,Uv,"upsellRecovery.marketingItem")),r(n)?null:b(e,n).catch(()=>null)})}}MB.footerIconsRequirementsKey="footerIconsRequirements",MB.comingSoonEIRequirementKey="comingSoonEIRequirementKey"
const UB={width:1680,height:3636,url:"https://is3-ssl.mzstatic.com/image/thumb/Features123/v4/9a/d4/48/9ad448b5-ddbb-f295-fae3-2a2e69bf5604/source/{w}x{h}{c}.{f}",bgColor:Qf,textColor1:"f7c981",textColor2:"f8a710",textColor3:"c6a067",textColor4:"c6850d"},BB={width:4320,height:3240,url:"https://is3-ssl.mzstatic.com/image/thumb/Features124/v4/57/71/7f/57717f8b-c486-4faf-7558-a4f88186855d/source/{w}x{h}{c}.{f}",bgColor:Qf,textColor1:"fdc97a",textColor2:"f73a03",textColor3:"caa161",textColor4:"c52e02"},GB=fh,VB=[Pk,Qw]
class HB{}const qB=[KR,wv,lk,OO,yS],WB=[KR,wv,dy,lk,vI,bI,TS,AS]
class YB{}const jB="com.apple.Arcade.ArcadeHardware1",zB="com.apple.Arcade.TrialEligible1",JB=[jB,zB]
class KB extends xF{constructor(){super(jh)}handlePage(e,t,n,r,o,s,i){i(new Error("OnDeviceRecommendationsShelfController:handlePage not implemented"))}pageRoute(e){return[]}handleShelf(e,t,n,r,o,s){const i=n[b$.token],c=JSON.parse(i),a=n[b$.onDeviceRecommendationsUseCase]
qn(e,a,Rk).then(t=>{const n=Jo(e,t.dataContainer,c,t.recoMetrics),r=(new sN).set(XC,R$.internal).path(`${C$.onDeviceRecommendations}`).param(b$.onDeviceRecommendationsUseCase,a).param(b$.token,JSON.stringify(c)).build(),s=new wD(ak,r)
s.title=e.loc.string(ov),s.pageData=this.seeAllPage(e,c.title,UF),n.seeAllAction=s,n.mergeWhenFetched=!1,o(n)}).catch(r=>{r instanceof fF?KB.makeODPFallbackShelf(e,t,n).then(e=>{o(e)}).catch(e=>{o(KB.makeHiddenShelf(c))}):o(KB.makeHiddenShelf(c))})}shelfRoute(e){return[{protocol:R$.internal,path:`/${C$.grouping}/${C$.shelf}/{token}`,query:[`${b$.isOnDeviceRecommendationsShelf}`,`${b$.onDeviceRecommendationsUseCase}`]}]}pageType(){return ak}static makeODPFallbackShelf(e,t,n){return new Promise((r,o)=>{const s=ps(e,0,n)
if(!s){const e=`OnDeviceRecommendationsShelfController: Could not construct media API request for: ${t}`
Ll.Gi(Lv,e,null),o(new Error(e))}hs(e,s),s.attributingTo(t.build()),b(e,s).then(t=>{const o=n[b$.token],s=JSON.parse(o),i=se($(t),ck),c=U(i),a=Jo(e,i,s,c)
r(a)}).catch(e=>{const n=`OnDeviceRecommendationsShelfController: Failed to fetch fallback shelf contents: ${t}`
Ll.Gi(Lv,n,null),o(e)})})}static makeHiddenShelf(e){const t=new XL(e.shelfStyle)
return t.isHidden=!0,t}seeAllPage(e,t,n){const r=new XL(n||UF)
r.isHorizontal=!1,r.items=jw
const o=new uD([r])
return o.isIncomplete=!0,o.title=t,o}}class ZB{constructor(e,t,n,r){this.name=e,this.url=t,this.artwork=n,this.roomUber=r}}class XB extends Ck{constructor(e,t){super(),this.apps=e,this.appsToAlwaysShow=t}}class QB extends MF{constructor(e,t){super(id),t.exportingService(em,{fetchPage(t){if(t.preloading&&he(e))return Promise.reject(new Error(tm))
if(0!==k(e,new sN(t.url)).length&&e.network.fetch({url:e.bag.redirectUrlEndpoint,method:SC,headers:{"Content-Type":_O},body:`url=${encodeURIComponent(t.url)}`}),t.preloading){const e=new sN(t.url)
e.param(b$.isPreloading,$v),t.url=e.build()}let n=e.required(RF).fetchPage(e,t.url,o$)
if(!n){const r=new B$(e,t.url)
n=b(e,r).then(n=>xc(e,n,{},{},null,t.preloading))}return n.then(t=>(e.host.clientIdentifier===bN&&t&&ny in t&&du(0,t),t))},fetchShelfBasedPage(t){if(t.preloading&&he(e))return Promise.reject(new Error(tm))
0!==k(e,new sN(t.url)).length&&e.network.fetch({url:e.bag.redirectUrlEndpoint,method:SC,headers:{"Content-Type":_O},body:`url=${encodeURIComponent(t.url)}`})
let n=e.required(RF).fetchPage(e,t.url,T$)
if(!n){const r=new B$(e,t.url)
n=b(e,r).then(t=>kc(e,t))}return n.then(t=>(e.host.clientIdentifier===bN&&t&&ny in t&&du(0,t),t))}})}defaultPlatforms(e){return K(e)}pageType(){return ob}defaultTab(e){return QB.representsArcadeApp(e)?pk:super.defaultTab(e)}defaultAction(e,t,n,r){if(t instanceof wD)return t
const o=super.defaultAction(e,t,n,r)
if(!(t instanceof o$||t instanceof T$))return o
const s=1===t.appPlatforms.length&&"tv"===t.appPlatforms[0]
if(n[b$.action]!==EF||s){if(n[b$.action]!==PF||s)return o
{const e=t.shelfMapping[yk]
let n=null
return e&&e.seeAllAction&&(n=e.seeAllAction,n.animationBehavior=gb),o.animationBehavior=gb,new AD([o,n])}}{const n=QB.representsBundle(t)
let r=null,s=null
t instanceof o$?(r=t.adamId,s=t.icon):t instanceof T$&&(r=t.lockup.adamId,s=t.lockup.icon)
const i=wi(e,r,n,s)
return o.animationBehavior=gb,new AD([o,i])}}static generateProductPageOptions(e,t,n){const r={clientIdentifierOverride:n.query[b$.clientIdentifierOverride]},o=t[b$.offerName]
if(o){const e=t[D$.isSubscription]===$v
r.spotlightSection=Ri(e),r.spotlightInAppProductIdentifier=o}const i=n.query[Jx]
i&&(r.iAdClickFields=JSON.parse(i))
const c=n.query[Kx]
c&&(r.iAdLineItem=c)
const a=n.query[gx]
return s(a)&&(r.externalDeepLinkUrl=a),r}pageRoute(e){return _r()}generatePageRequest(e,t,n){const o=n[b$.bundleIdentifier],s=n[b$.ids],c=n[b$.productVariantID]
let a=null
if(o)a=function(e,t,n){const r=vF
e.bag.enablePrivacyNutritionLabels&&!Ur(e,t)&&r.push(SO),e.appleSilicon.isSupportEnabled&&r.push(Pb)
const o=new B$(e).forType(Pk).withFilter(Jv,t).includingAdditionalPlatforms(K(e)).includingRelationships([Bv,wS,gS,yk,lk,SI,OI,mS,RI]).includingAttributes(r).addingRelationshipLimit(yk,Z(e)).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes(we(e))
return(0,Ul.isSome)(n)&&o.addingQuery(b$.productVariantID,n),o}(e,o,c)
else if(n[b$.action]===nm&&s){const r=i(t.pathname)&&-1!==t.pathname.indexOf(CI)
a=function(e,t,n,r,o){const s=vF
e.bag.enablePrivacyNutritionLabels&&!Mr(e,t)&&s.push(SO),e.appleSilicon.isSupportEnabled&&s.push(Pb)
const i=new B$(e).forType(Pk).withIds([t]).includingAdditionalPlatforms(K(e)).includingAttributes(s).includingRelationships([Bv,wS,gS,yk,lk,SI,OI,mS,RI]).addingRelationshipLimit(yk,Z(e)).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes(we(e))
return n&&i.addingQuery("availability",fd),(0,Ul.isSome)(r)&&i.addingQuery(b$.productVariantID,r),Qt(e)&&!o&&(i.includingScopedRelationships(Pk,[Tk]),i.includingScopedAttributes(Tk,[dk,Zv,Xv]),i.includingScopedAvailableIn(Tk,[fy])),i}(e,s,h(n,b$.isPurchasesApp),c,r)}else a=Hr(e,t)
if(r(a))throw new Error(`Unable to map ${t.build()} to a media api url`)
return a}generateAdditionalPageRequirements(e,t,n){const r=super.generateAdditionalPageRequirements(e,t,n),o=n[b$.appEventId]
if(i(o)&&Qt(e)){const t=new B$(e).forType(Tk).withIds([o]).includingAdditionalPlatforms(K(e)).includingScopedAttributes(Tk,[dk,Zv,Xv]).includingScopedAvailableIn(Tk,[ld,fy])
r[IF]=new UN(b(e,t).catch(()=>null),!1)}return r}renderPage(e,t,n,r,o,s){return Ll.Do(av,()=>{const o=cu(e,vR,"",t),i=QB.generateProductPageOptions(e,n,new sN(o.pageUrl)),c=$(t),a=QB.alternativeAppForPlatform(e,c,xe(e))
return null!==a?a:xc(e,t,i,r,s,h(n[b$.isPreloading]))})}shelfRoute(e){return[{protocol:R$.internal,path:`/${C$.product}/${C$.shelf}/{token}`}]}generateShelfRequest(e,t,n){return function(e,t,n){const r=n[Cb],o=JSON.parse(r)
let s
if(o.isBundleShelf)s=lk
else switch(o.contentType){case VC:case tC:s=Kb
break
case vO:s=Kv
break
default:s=Pk}const i=[Qb,Zb,Vb]
return e.appleSilicon.isSupportEnabled&&i.push(Pb),new B$(e).forType(s).withIds(o.ids).includingAdditionalPlatforms(K(e)).includingAttributes(s===Kv?[]:i)}(e,0,n)}renderShelf(e,t,n){return function(e,t,n,i,c=!1){const a=n[Cb]
let u
u=JSON.parse(a),n[b$.shelfRefreshType]===M$&&yF.resetLocationTrackerForSimilarItemsDuringDownloadShelf(e,u)
const l=function(e,t,n,r){return Ll.Do("shelfFromLookupResponse",()=>{const r=new XL(n.contentType),o=U(t),i={pageInformation:n.sourcePageInformation,locationTracker:n.sourceLocationTracker,excludeAttribution:!0,recoMetricsData:null!=o?o:n.recoMetricsData}
let c
switch(n.contentType){case tC:const r=Ls(e,t.data,i.pageInformation,i.locationTracker,Ir)
s(r)&&(c=[r])
break
case VC:const o={metricsLocationTracker:i.locationTracker,metricsPageInformation:i.pageInformation,filterOutMediaCardKinds:Sr(e.host.platform)},a={useThreeLineOverlayForBranded:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,videoPlaybackControls:{prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1},videoAutoplayPlaybackControls:{prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1}}
c=bs(e,t.data,n.contentType,o,null,a)
break
default:const u={metricsOptions:i,offerStyle:n.offerStyle,artworkUseCase:wa(0,n.contentType),canDisplayArcadeOfferButton:nu(0,n.contentType)}
n.contentType===vO&&(u.skipDefaultClickAction=!0)
const l={lockupOptions:u}
n.isBundleShelf&&(l.filter=0)
const f=sa(e,t,l),d={[ON]:LI,[RN]:PS}[e.host.clientIdentifier]
d&&f.sort((e,t)=>{const n=e.icon.style===d,r=t.icon.style===d
return n&&r?0:n&&!r?-1:1})
const p=n.spotlightInAppProductIdentifier
p&&Pr(0,p,f),c=f}return r.items=c,r})}(e,t,u)
if(l.mergeWhenFetched=!0,c&&function(e,t,n,o){var s,i,c,a
if(r(n))return
const u=Lt(n),l=hu(e,n,o).fields,f=mu(e,n,o),d=null!==(i=null===(s=f.find(e=>e.data.fields[FS]===Up))||void 0===s?void 0:s.data.fields)&&void 0!==i?i:{},p=null!==(a=null===(c=f.find(e=>e.data.fields[FS]===cE))||void 0===c?void 0:c.data.fields)&&void 0!==a?a:{}
pu(u),pu(l),pu(d),pu(p),t.pageChangeMetrics={pageEventFields:l,pageFields:u,impressionsEventFields:d,fastImpressionsEventFields:p}}(e,l,u.sourcePageInformation),n[b$.shelfRefreshType]===M$&&yF.addImpressionsFieldsToSimilarItemsDuringDownloadShelf(e,l,u),u.shouldInferSeeAllFromFetchesItems){const t=new wD(ak)
t.title=e.loc.string(ov)
const n=new XL(l.contentType)
n.items=function(e,t,n,r=!1){if(!t)return null
const o=[]
for(const e of t){if(r&&s(e.searchAd))continue
const t=W(e)
n&&t.offerDisplayProperties&&(t.offerDisplayProperties=t.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,n)),o.push(t)}return o}(0,l.items,_b,!0)
const r=new uD([n])
uu(e,r,u.destinationPageInformation),r.title=u.title,t.pageData=r,Ct(e,t,null,{pageInformation:u.sourcePageInformation,locationTracker:u.sourceLocationTracker}),l.seeAllAction=t}return o(l.items)&&!u.hasExistingContent&&(l.isHidden=!0),l}(e,t,n)}shelfRequiresAdditionalModification(e,t){return!0}performAdditionalShelfModifications(e,t,n){return new Promise(r=>{const o=n[Cb],s=JSON.parse(o),i=t.items
if(s.contentType===vO&&i){const n=[],o=[]
for(const e of i){const t=e.productIdentifier
Ri(e.isSubscription).shelfId===s.inAppShelfId&&(n.push(t),e.isVisibleByDefault&&o.push(t))}e.clientOrdering.orderedVisibleIAPs(s.appBundleId,n,o,s.spotlightInAppProductIdentifier).then(e=>{t.items=QB.filteredInAppLockupsUsingOrdering(i,e),r(t)})}else new Set([VC,tC]).has(t.contentType)&&0===t.items.length&&(t.isHidden=!0),r(t)})}handleShelfError(e,t,n,r){const o=r[Cb],s=JSON.parse(o)
if(s&&!s.hasExistingContent){const e=new XL(s.contentType)
e.isHidden=!0,t(e)}else super.handleShelfError(e,t,n,r)}static alternativeAppForPlatform(e,t,n){if(!ee(t,n)){const r=ce(t,RI)
if(i(r))for(const t of r){const r=ke(e,t,Ek)
if(ee(t,n)&&i(r))return new wD(wk,r)}}return null}static representsBundle(e){return!!(e.pageMetrics&&e.pageMetrics.pageFields&&oC in e.pageMetrics.pageFields)&&e.pageMetrics.pageFields[oC]===Rw}static representsArcadeApp(e){return!!(e.pageMetrics&&e.pageMetrics.pageFields&&oC in e.pageMetrics.pageFields)&&e.pageMetrics.pageFields[BS]===xC}static filteredInAppLockupsUsingOrdering(e,t){const n={}
for(const t of e)n[t.productIdentifier]=t
const r=[]
for(const e of t){const t=n[e]
if(t){const e=W(t)
r.push(e)}}return r}}class eG extends vk{constructor(e,t,n,r){super(),this.value=e,this.isSelected=t,this.displayName=n,this.clickAction=r}}class tG extends Ck{constructor(e,t,n){super(),this.searchTerm=e,this.selectedTokens=t,this.optimizationTerm=n}}class nG extends hD{constructor(e,t){super("GuidedSearchTokenToggleAction"),this.targetToken=e,this.searchOrigin=t}}class rG extends hD{constructor(e,t){super("SearchEntityChangeAction"),this.entity=e,this.searchOrigin=t}}const oG=30,sG="SearchResults.shelfId"
class iG extends Ck{constructor(e,t,n,r){super(),this.shortName=e,this.longName=t,this.chart=n,this.shelves=r,this.nextPage=null,this.pageMetrics=new iD,this.pageRenderMetrics={}}}class cG extends ZF{constructor(e,t,n){super(e.name,e.genreId,e.artwork,e.ageBandId,n),this.shortName=this.name,this.longName=this.name,this.url=t}}class aG extends Ck{constructor(e,t,n,r,o,s){super(),this.genreId=e,this.ageBandId=t,this.title=n,this.segments=r,this.categoriesButtonTitle=o,this.categories=s,this.initialSegmentIndex=0}}class uG extends Ck{constructor(e,t,n,r){super(),this.collections=e,this.refreshDate=t,this.originalResponseDate=n,this.originalResponseHash=r}}class lG extends Ck{constructor(e,t){super(),this.cards=e,this.displayDate=t}}class fG extends Ck{constructor(e,t,n,r,o,s,i,c,a,u,l,f){super(),this.storyId=e,this.heading=t,this.title=n,this.backgroundColor=r,this.isDark=o,this.iconArtwork=s,this.url=i,this.eventBadgeKind=u,this.editorialArtwork=a,this.isVideoArtwork=c,this.eventStartDate=l,this.eventEndDate=f}}class dG{make(e){return new B$(e).forType(this.typeForUseCase()).addingContext(this.context()).includingAttributes(this.attributesForUseCase()).asPartialResponseLimitedToFields(this.fieldsForRequest()).withSparseCount(this.sparseCountForUseCase()).withSparseLimit(this.sparseLimitForUseCase()).enablingFeature(this.enablingFeature(e)).usingCustomAttributes(this.shouldUseCustomAttributes(e))}}class pG extends dG{context(){return"widget"}typeForUseCase(){return Dv}attributesForUseCase(){return[Qb,Zb,Vb]}sparseCountForUseCase(){return null}sparseLimitForUseCase(){return null}fieldsForRequest(){return[dP,nk,YA,fv,my,fb,cv,Qb,Pp,ER,Zb,WA,"id",IO,YR,Eb,vb,Vb,_k,Ty,qA]}enablingFeature(e){return Qt(e)?Xb:null}shouldUseCustomAttributes(e){return we(e)}}Bl=e(706)
class hG extends Bl.LegacyRuntime{constructor(e,t){super(e,t,{})}exportingService(e,t){this.wrapServiceInValidation(t)
const n={...this.serviceWithName(e)||{},...t}
return super.exportingService(e,n)}exportingServiceName(e,t,n){const r={}
r[t]=n,this.exportingService(e,r)}wrapServiceInValidation(e){for(const t of Object.keys(e)){const n=e[t]
n instanceof Function&&(e[t]=function(...e){const t=n.apply(this,e)
return t instanceof Promise?t.then(e=>(Ll.rS(e),e)):(Ll.rS(t),t)})}}}const wG=new class{constructor(){this.registeredBuilders=new Set,this.pageRouter=new TF,this.shelfRouter=new TF,this.paginationRouter=new TF}register(e,t){if(this.registeredBuilders.has(t.builderClass))throw new Error(`routing: Registering duplicate builderClass ${t.builderClass}`)
this.registeredBuilders.add(t.builderClass),this.pageRouter.associate(t.pageRoute(e),t),this.shelfRouter.associate(t.shelfRoute(e),t),this.paginationRouter.associate(t.paginationRoute(e),t)}fetchFlowPage(e){const t=this.pageRouter.routedObjectForUrl(e)
if(!t.object)return"unknown"
const n=t.object
return n.builderClass===id&&t.parameters[b$.action]!==PF&&t.parameters[b$.action]!==EF?ob:n.pageType()}fetchPage(e,t,n){return this.fetchAction(e,t,null).then(r=>new Promise((o,s)=>{if(!r)throw new Error(`Promise resolved to null action for: ${t}`)
if(r.actionClass!==HP){if(r.actionClass===Hl){const e=r
if(1===e.actions.length&&e.actions[0].actionClass===HP){const t=e.actions[0].pageData
return Y(t,n)?void o(t):void s(new Error(`${t} is not expected type ${n.name}`))}}s(new Error("Action is not a flowAction or a tabChangeAction that contains a single flowAction."))}else{const i=r.pageData
if(!Y(i,n)){const c=r.pageUrl
return c&&c!==t?void this.fetchPage(e,c,n).then(e=>{o(e)}).catch(e=>{s(e)}):void s(new Error(`${i} is not expected type ${n.name}`))}o(i)}}))}fetchAction(e,t,n){return new Promise((r,o)=>{const s=this.pageRouter.routedObjectForUrl(t)
s.object?s.object.handlePage(e,s.normalizedUrl,s.parameters,s.matchedRuleIdentifier,n,r,o):this.redirectAndRefetchActionIfPossible(e,s.normalizedUrl,r,o)})}fetchMoreOfPage(e,t){return new Promise((n,r)=>{const o=t.url
if(!o)return void r(new Error("Page token missing required `url` property"))
const s=this.paginationRouter.routedObjectForUrl(o)
s.object?s.object.handlePagination(e,s.normalizedUrl,s.parameters,s.matchedRuleIdentifier,t,n,r):r(new Error(`fetchMoreOfPage: Unhandled pagination url: ${o}`))})}fetchShelves(e,t){return new Promise((n,r)=>{const o=Object.keys(t),s={shelves:{},errors:{}},i=new AF(o.length)
i.then(()=>{if(Object.keys(s.shelves).length>0)n(s)
else{const e=Object.keys(s.errors).map(e=>s.errors[e].message)
0===e.length?r(new Error(`Could not load any shelves: ${JSON.stringify(t)}`)):r(new Error(e.join("\n")))}})
for(const n of o){const r=t[n],o=e=>{s.shelves[n]=e,i.countDown()},c=e=>{s.errors[n]=e,i.countDown()},a=this.shelfRouter.routedObjectForUrl(r)
a.object?a.object.handleShelf(e,a.normalizedUrl,a.parameters,a.matchedRuleIdentifier,o,c):c(new Error(`fetchShelves: Unhandled shelf url: ${r}`))}})}redirectAndRefetchActionIfPossible(e,t,n,r){e.network.fetch({url:t.toString(),method:UR}).then(o=>{200===o.status&&o.redirected&&o.url?this.fetchAction(e,o.url,null).then(n,r):r(new Error(`redirectAndRefetchActionIfPossible: Unhandled page url: ${t}`))})}fetchBuilder(e){const t=this.pageRouter.routedObjectForUrl(e)||this.shelfRouter.routedObjectForUrl(e)||this.paginationRouter.routedObjectForUrl(e)
return t?t.object:null}},gG=(Gl=wG,function(e,t,n,r,o,s,i,c,a,u,l,f,d,p,h,w,g,m,T,A,y,E,P,I,_,S,O){return e.configureDefaults(n,r,o,s,i,c,a,u,l,f,d,p,h,w,g,m,T,A,y,E,P,I,_,S,O).adding(RF,t)}(new MN("app-store"),Gl,bag,cryptography,host,net,platform,plist,random,services,ask.storeMetrics,ask.loc,ask.device,ask.client,ask.props,ask.user,ask.clientOrdering,ask.personalizationStore,ask.arcade,ask.gameCenter,ask.resilientDeepLinks,ask.appleSilicon,ask.storage,ask.ads,ask.onDeviceRecommendationsManager,ask.featureFlags,mediaToken)),mG=new hG(new Dl.IntentDispatcher,gG)
!function(e,t){const n=e.required(RF)
t.exportingService(od,{fetchGeneric:t=>n.fetchPage(e,t.url,uD),fetchMoreOfGeneric:t=>n.fetchMoreOfPage(e,t.pageToken),fetchShelves:t=>n.fetchShelves(e,t.requests),fetchAction:t=>(0!==k(e,new sN(t.url)).length&&e.network.fetch({url:e.bag.redirectUrlEndpoint,method:SC,headers:{"Content-Type":_O},body:`url=${encodeURIComponent(t.url)}`}),n.fetchAction(e,t.url,t.referrerData).then(n=>{if(!n)throw new Error(`Promise resolved to null action for: ${t.url}`)
if(t.isIncomingURL){const e=[n]
if(n instanceof gD)for(const t of n.actions)e.push(t)
for(const t of e){const e=t.pageData
e&&ny in e&&du(0,e)}}if(n.actionClass===HP){const e=n
e.page===lb||e.page===bb||e.page===ry||e.page===FC||e.page===aS||e.page===uS?e.presentationContext=_b:t.isIncomingURL?e.presentationContext=GA:(e.presentationContext="replace",e.animationBehavior=gb)}return t.isIncomingURL&&(e.deepLinks.hasResilientDeepLinks()||e.deepLinks.removeDeepLink(t.url)),n}).catch(n=>{let r=[]
n instanceof BN?r=n.reasons.filter(e=>e instanceof aN):n instanceof aN&&r.push(n)
for(const n of r)if(204===n.statusCode){const n=new ND(tk)
n.title=e.loc.string("APP_NOT_AVAILABLE_TITLE"),n.message=e.loc.string("APP_NOT_AVAILABLE_MESSAGE"),n.isCancelable=!0
{const r=new gD(Dv)
if(r.title=e.loc.string(oy),h(new sN(t.url).query[sd])){const e=new KD
r.actions=[n,e]}else r.actions=[n]
return r}}throw Error(n.message)}))})}(gG,mG),wG.register(gG,new class extends xF{constructor(e,t){super("TodayBuilder"),t.exportingService(sm,{fetchPage(t){const n=e.required(RF),o=t.url===Fg,c=-1!==t.url.indexOf(C$.todayCardPreview)
if(o)return n.fetchPage(e,t.url,qx)
if(c){const r=sN.from(t.url)
return r.param(b$.fetchData,$v),n.fetchPage(e,r.build(),qx)}{const n=K(e),o=new B$(e).forType(Dv).includingAdditionalPlatforms(n).includingAttributes(oM).includingRelationshipsForUpsell(!0).withSparseCount(e.client.isPad?0:1).usingCustomAttributes(we(e))
Qt(e)&&(o.enablingFeature(Xb),o.addingQuery(nC,mR),o.includingScopedRelationships(Tk,[sk]),o.includingScopedAttributes(Tk,[dk,Zv,Xv]),o.includingScopedRelationships(Kb,[eb]))
const c=b(e,o)
c.then(t=>{Kr(e,e.user.dsid,t)})
let u=Promise.resolve(null)
const f=new B$(e).forType(Kb).withIds(t.onboardingCardIds).includingAdditionalPlatforms(n).includingAttributes(oM)
f.ids.size>0&&(u=b(e,f,{}).catch(()=>{}))
const d=Promise.resolve(null)
return Promise.all([c,u,d]).then(([t,n,o])=>function(e,t,n,o){if(r(t))return null
!function(e){let t=!0
const n=a(e.results.data),r={}
for(const e of n){const t=a(e.contents)
for(const e of t)if(F(e)){const t=r[e.id]
r[e.id]=t?t+1:1}}for(let e=n.length-1;e>=0;e--){const o=n[e],s=_s(o.contents,r,t)
o.contents=s.contents,t=!s.contentsContainsHydratedData}}(t)
const c=new sM,u=cu(e,"Today",Dv,t),f=Qn(e)
u.recoMetricsData=ot(u.recoMetricsData,null,f),c.pageInformation=u,c.refreshController=sr(t)
const d=x(o),p=i(d),h=[]
if(p){!function(e,t){for(const e of t)e[QF]=!0}(0,d)
for(const e of d)h.push(e.id)}const w=[]
let g=!1
const m=t.results.data.filter(e=>{const t=B(l(e,xO))
if(s(t)){const e=new Date
return!(t.getTime()>e.getTime())}return!0}),T=Ss(e,m)
for(const t of m){if(s(t.contents)){const n=Kn(e,Dv,t.contents,!0,T)
t.contents=n.personalizedData,t.onDevicePersonalizationProcessingType=n.processingType}if(p&&!g){const e=a(t.contents)
t.contents=d.concat(e),g=!0}Ts(w,t)}const A=Go(e,c.pageInformation,c.locationTracker)
A&&ms(w,A)
const y=e.bag.termsAndConditionsURL
r(y)||ms(w,Zo(e,y))
const E=[]
let P=!1,I=!0
for(;!P;){const t=Rs(e,w,c,I)
if(r(t))break
E.push(t),P=s(t.url),I=!1}const _={queue:w,context:c}
let S=null
t.results.data.length>0&&(S=l(t.results.data[0].title))
let O=null
E.length>0&&i(E[0].title)&&(O=e.loc.uppercased(E[0].title))
const R=Os(e,E,_,h,S,O)
return uu(e,R,c.pageInformation),R}(e,t,0,n))}},fetchMoreOfPage:t=>function(e,t){const n=o(s=t.queue)?null:s[0].internalContentType===Rk?Rk:cO
var s
if(r(n))return Promise.reject(new Error("today.nextPageFromPageToken called on end of page"))
const i=function(e){return e.client.isPad?e.client.screenSize.isEqualTo(kU)?6:2:1}(e)
if(n===Rk){const n=As(t.queue,EP,6).shelf
return At(t.context.locationTracker),Promise.resolve(Os(e,[n],t,null))}return ys(e,t.queue,6,i).then(n=>{const r={contentOffsetWithinModule:n.contentOffsetWithinSourceModule,hideTitle:n.isContinuationModule,setTitleToDateForTodaySection:!1},o=Cs(e,n.todayModule,r,t.context)
return n.isLastOfModule&&At(t.context.locationTracker),Os(e,[o],t,null)})}(e,t.pageToken)})}handlePage(e,t,n,r,o,s,i){i(new Error("handlePage not implemented for TodayBuilder"))}pageRoute(e){return[]}pageType(){return Dv}handleShelf(e,t,n,o,s,i){const c=n[Cb],a=JSON.parse(c)
if(r(a.todayModule))return void i(new Error("Not a today module"))
const u=new B$(e,a.todayModule.contents).includingAdditionalPlatforms(K(e)).includingAttributes(oM).includingRelationshipsForUpsell(!0).usingCustomAttributes(we(e))
_e(e,u,a.todayModule.contents),Qt(e)&&(u.enablingFeature(Xb),u.addingQuery(nC,mR),u.includingScopedRelationships(Tk,[sk]),u.includingScopedAttributes(Tk,[dk,Zv,Xv]),u.includingScopedRelationships(Kb,[eb])),b(e,u).then(t=>function(e,t,n){if(r(t.todayModule))return null
const o=t.todayModule
o.contents=x(n)
const s=new sM
s.locationTracker=t.metricsLocationTracker,s.pageInformation=t.metricsPageInformation,s.refreshController={timeToLive:null,nextPreferredContentRefreshDate:null,refreshWhileVisibleForNextPreferredContentRefreshDate:!1}
const i=Cs(e,o,{contentOffsetWithinModule:t.contentOffsetWithinModule,hideTitle:!0,setTitleToDateForTodaySection:!1},s,null)
return i.mergeWhenFetched=!0,i.nextPreferredContentRefreshDate=ar(s.refreshController),i}(e,a,t)).then(s,i)}shelfRoute(e){return[{protocol:R$.internal,path:`/${C$.today}/${C$.shelf}/{token}`}]}}(gG,mG)),wG.register(gG,new class extends xF{constructor(e,t){super("ArticleBuilder"),t.exportingService(sm,{fetchArticle:t=>e.required(RF).fetchPage(e,t.url,qF)})}handlePage(e,t,n,r,o,a,u){const f=JSON.parse(l(t.query,b$.recoMetrics)),d=function(e,t){const n=t.pathComponents()
if(n.indexOf(hS)<0&&n.indexOf(pO)<0&&n.indexOf(ud)<0&&t.host!==v$.spamBlockingExtensions)throw new Error(`Unable to map ${t.build()} to a media api url`)
let r
if(r=t.host===v$.spamBlockingExtensions?e.props.asString("spamBlockingExtensionsEditorialItemID"):Vr(t),!c(r))throw new Error(`Unable to map ${t.build()} to a media api url`)
if(!c(r))throw new Error(`Unable to map ${t} to a media api url`)
const o=[ly],s=[QC,UC,tb,Vb,Qb,Zb]
e.appleSilicon.isSupportEnabled&&s.push(Pb)
const i=new B$(e).forType(Kb).withIds([r]).includingAdditionalPlatforms(K(e)).includingAttributes(s).includingRelationships(o).includingRelationshipsForUpsell(!0).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes(we(e))
return Qt(e)&&(i.enablingFeature(Xb),i.includingScopedAttributes(Tk,[dk,Zv,Xv]),i.includingScopedRelationships(Tk,[sk]),i.includingScopedRelationships("editorial-item-shelves",[Tk]),i.includingScopedAvailableIn(Tk,[ld])),i.attributingTo(t.build())}(e,t)
b(e,d).then(t=>function(e,t){return Jr(e,t,ho,wo)}(e,t)).then(r=>{const o=new JF
return o.todayShelfRecoMetricsData=f,o.showingFallbackMediaInline=Boolean(n[b$.showingFallbackMedia]),o.additionalData=r.additionalData,o.todayCardSubStyleOverride=l(t.query,b$.todayCardSubStyleOverride),o.isResilientDeepLink=e.deepLinks.hasResilientDeepLinks(),function(e,t,n){return Ll.Do("articlePageWithResponse",()=>{const r=$(t)
n.metricsPageInformation=cu(e,pO,r.id,t),n.metricsLocationTracker={rootPosition:0,locationStack:[]},n.pageId=r.id
const o={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,refreshController:n.refreshController},c=function(e,t){if(!s(t))return null
const n={useThreeLineOverlayForBranded:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!1,canDisplayArcadeOfferButton:!0}
switch(n.clientIdentifierOverride=t.clientIdentifierOverride,s(t.todayCardSubStyleOverride)&&(n.coercedGeneralCardSubType=t.todayCardSubStyleOverride),e.client.deviceType){case Sk:n.prevailingCropCode="en",n.coercedGeneralCardSubType=Av,n.heroDisplayContext=bb
break
case"tv":n.prevailingCropCode="ek",n.coercedGeneralCardSubType=Av,n.heroDisplayContext=bb}return n}(e,n),a=$s(e,r,c,o)
n.crossLinkSubtitle=zs(e,r),s(n.todayCardSubStyleOverride)&&n.todayCardSubStyleOverride===RR&&(r.relationships.canvas.data=[]),n.clientIdentifierOverride=c.clientIdentifierOverride,pt({pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,targetType:bb,id:n.pageId,idType:qR},null==a?void 0:a.title)
const u=function(e,t,n,r){return Ll.Do("renderArticle",()=>{const o=[],i=ce(t,ly)
for(const n of i){r.module=y(n,fg),r.subStyle=null
const i=mo(e,n,t,r)
s(i)&&(i.title=r.titleForNextShelf,o.push(i),r.titleForNextShelf=null),r.index++,At(r.metricsLocationTracker)}if(r.showingFallbackMediaInline&&0===o.length){const e=function(e,t){if(t.media instanceof Ox){const e=t.media,n=new XL(Jb)
return n.items=e.lockups,n}return null}(0,n)
s(e)&&o.push(e)}return o})}(e,r,a,n),f=u[u.length-1],d=n.isResilientDeepLink?null:function(e,t){const n=To(0,t)
let r=null
const o=Ka(e,t,_k),c=Ka(e,t,sb)
if(o&&c&&(r=e.loc.string("SHARE_SHEET_TITLE_SUBTITLE_FORMAT","{title}: {subtitle}").replace(sC,o).replace("{subtitle}",c)),!r&&o&&(r=o),!r&&c&&(r=c),!r&&n){const o=y(n,_k)
switch(y(t,cv)){case oO:r=e.loc.string("SHARE_SHEET_GAME_OF_DAY_TITLE_FORMAT").replace(sC,o)
break
case sO:r=e.loc.string("SHARE_SHEET_APP_OF_DAY_TITLE_FORMAT").replace(sC,o)}}const a=y(t,Ek)
let u
switch(y(t,fv)){case Av:case RR:case U_:u=We(e,"resource://ShareCollectionThumbnail",40,40)
break
default:u=null}const l=function(e,t,n,r,o,i){return Ll.Do("shareSheetDataForArticle",()=>{let r=o
!r&&i&&(r=function(e,t){const n=y(t,fb),r=xs(e,t)
return s(r)?r:Ws(e,T(t,Fs(0,n,y(t,fv))))}(e,i))
const c=e.loc.string("SHARE_STORY_SUBTITLE"),a=new Uk(t,c,r)
return new Vk(a,n,null)})}(e,r,a,0,u,t)
if(!s(l))return null
const f=function(e,t){const n=[]
if(i(t)){const r=ti(e,t)
s&&n.push(r)}return n}(e,a)
return new $D(l,f)}(e,r)
if(d){const t=function(e,t,n){if(t&&n){const e=t.items.length
if(e>0&&-1!==KF.indexOf(n)){const n=t.items[e-1]
switch(t.contentType){case AP:case L_:return n&&n.isFullWidth
default:return!0}}}return!1}(0,f,n.module),r=function(e,t,n,r){if(!s(t))return null
Rt(e,t,{targetType:fk,id:n.pageId,actionType:mO,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker})
const o=new BL(mO,e.loc.string("SHARE_STORY"),!r,t),i=new XL("roundedButton")
return i.items=[o],i}(e,d,n,t)
r&&u.push(r)}const p=new qF(a,u,d)
return function(e,t,n,r){const o=To(0,n)
if(o){const s=kt(0,n)
return void(t.footerLockup=function(e,t,n,r){return Xc(e,t,{offerStyle:Ao(e),metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},clientIdentifierOverride:n.clientIdentifierOverride,externalDeepLinkUrl:r,crossLinkSubtitle:n.crossLinkSubtitle,artworkUseCase:0,canDisplayArcadeOfferButton:nu(0,Jb)})}(e,o,r,s))}const i=P(n,yP)
if(s(r.additionalData)&&i){const o=wn(e,n)
t.arcadeFooterLockup=function(e,t,n){return oa(e,t,{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},0,_b,null)}(e,o,r)}}(e,p,r,n),p.shouldTerminateOnClose=n.isResilientDeepLink,uu(e,p,n.metricsPageInformation,e=>{let t=null==a?void 0:a.title
if((null==a?void 0:a.media)instanceof Sx&&(null==a?void 0:a.overlay)instanceof Lx&&(t=(null==a?void 0:a.overlay).lockup.title),!t)return
let n=l(w(e[NR]),xb)
n=n||l(w(e[HO])),e[NR]=n?`${n}_${t}`:`unknown_${t}`}),p})}(e,r.originalData,o)}).then(e=>{const n=xF.createFlowAction(e,bb,t),r=new gD(Dv)
return r.actions=[n],r}).then(a,u)}pageRoute(e){return[{protocol:R$.https,path:`/{countryCode}/${C$.editorialItem}/{id}`,query:[`${b$.showingFallbackMedia}?`]},{protocol:R$.https,path:`/{countryCode}/${C$.editorialItem}/{seoSlug}/{id}`,query:[`${b$.showingFallbackMedia}?`]},{protocol:R$.https,path:`/{countryCode}/${C$.story}/{id}`,query:[`${b$.showingFallbackMedia}?`]},{protocol:R$.https,path:`/{countryCode}/${C$.story}/{seoSlug}/{id}`,query:[`${b$.showingFallbackMedia}?`]},{protocol:R$.https,path:`/${C$.story}/{id}`,query:[`${b$.showingFallbackMedia}?`]},{protocol:R$.https,path:`/${C$.story}/{seoSlug}/{id}`,query:[`${b$.showingFallbackMedia}?`]},{protocol:R$.https,path:`/${C$.store}/${C$.viewEditorialItem}`,query:[b$.id,`${b$.showingFallbackMedia}?`]},{protocol:R$.https,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/editorial-items/{id}",query:[b$.id,`${b$.showingFallbackMedia}?`]},{protocol:R$.https,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/editorial-items/{seoSlug}/{id}",query:[b$.id,`${b$.showingFallbackMedia}?`]},{protocol:R$.https,path:"{apiVersion}/editorial/{countryCode}/editorial-items/{id}",query:[b$.id,`${b$.showingFallbackMedia}?`]},{protocol:R$.https,path:"{apiVersion}/editorial/{countryCode}/editorial-items/{seoSlug}/{id}",query:[b$.id,`${b$.showingFallbackMedia}?`]},{protocol:R$.https,hostName:`${v$.spamBlockingExtensions}`},{protocol:R$.internal,path:`/${C$.story}/{id}`,query:[`${b$.metrics}?`,`${b$.invalidateWidgetsOnFailure}?`]}]}pageType(){return bb}}(gG,mG)),wG.register(gG,new class extends xF{constructor(){super("TodayCardPreviewBuilder")}pageType(){return Dv}handlePage(e,t,n,r,o,s,i){Ll.Do(`${this.builderClass}.pageHandler`,()=>{const r=t.build()
if(h(n[b$.fetchData])){const o=this.generatePageRequest(e,t,n)
if(!o)return void i(new Error(`Could not construct media API request for: ${t}`))
o.attributingTo(r),b(e,o,{}).then(t=>this.renderPage(e,t,n)).then(e=>xF.createFlowAction(e,this.pageType(),t)).then(s,i)}else{const r=this.renderPage(e,{data:[]},n),o=xF.createFlowAction(r,this.pageType(),t)
s(o)}})}pageRoute(e){return[{protocol:R$.https,path:`/${C$.todayCardPreview}`,query:[b$.ids,`${b$.fetchData}?`,`${b$.isTodaySection}?`]}]}generatePageRequest(e,t,n){const r=l(t.query[b$.ids])
if(!i(r))return null
const o=r.split(","),s=new B$(e).forType(Kb).withIds(o).includingAdditionalPlatforms(K(e)).includingAttributes(oM).includingRelationshipsForUpsell(!0)
return Qt(e)&&(s.enablingFeature(Xb),s.includingScopedRelationships(Tk,[sk]),s.includingScopedAttributes(Tk,[dk,Zv,Xv])),s}renderPage(e,t,r){const o=e.loc.string(Pg),i={title:o,label:PP,resourceTypes:[],meta:{},contents:x(t)},c=new sM
let a=!1
s(n(r,b$.isTodaySection))&&(a=!u(r,b$.isTodaySection))
const l=Cs(e,i,{hideTitle:!1,contentOffsetWithinModule:0,setTitleToDateForTodaySection:!0},c,a)
return new qx([l],null,o,o)}}),wG.register(gG,new class extends xF{constructor(e,t){super("TopChartsBuilder"),t.exportingService("TopChartData",{fetchPage(t){const n=new sN(t.url),r=n.query[b$.selectedChartId],o=n.query[b$.genre],s=n.query[b$.charts],i=n.query[b$.ages],c=Oo(e,o,s,i),a=Ro(e,n)
return Promise.all([c,a]).then(([t,o])=>{const s=Io(e,o)
return hl(e,t,n,s,r)})},fetchMoreOfSegment(t){const n=Be(0,t.pageToken)
if(0===n.length)return Promise.resolve(new iG(null,null,null,[]))
let r=new B$(e,n).includingMacOSCompatibleIOSAppsWhenSupported(!0).usingCustomAttributes(we(e))
return e.appleSilicon.isSupportEnabled&&(r=r.includingAdditionalPlatforms([Hv,ib])),b(e,r).then(n=>{const r=Ge(0,t.pageToken)
return ml(e,n,t.pageToken,r)})}})}pageRoute(e){return[{path:`/{apiVersion}/catalog/{countryCode}/${C$.charts}`,query:[`${b$.genre}`,`${b$.isPPT}?`,`${b$.charts}?`]},{path:`/{countryCode}/${C$.charts}/{platform}/{chart}/{genre}`,query:[`${b$.charts}?`]},{path:`/{countryCode}/${C$.charts}/{platform}`}]}handlePage(e,t,n,r,s,c,a){const u=n[b$.isPPT]
t.removeParam(b$.isPPT)
let f=t.query[b$.selectedChartId],d=n[b$.genre]
o(d)&&(d=l(e.bag.defaultChart,"genre-id"),o(f)&&(f=l(e.bag.defaultChart,"chart-id")))
const p=Oo(e,d,n[b$.charts],n[b$.ages]),h=Ro(e,t)
Promise.all([p,h]).then(([n,r])=>{const o=Io(e,r),s=hl(e,n,t,o,f)
if(u&&i(s.segments)){const t=s.segments[0],n=t.nextPage,r=Be(0,n)
if(i(r)){const o=new B$(e,r)
return b(e,o).then(r=>{const o=Ge(0,n)
o.ids=[],o.remainingContent=[],o.maxPerPage=0
const i=ml(e,r,n,o),c=t.shelves.concat(i.shelves),a=new iG(t.shortName,t.longName,t.chart,c)
return a.pageMetrics=t.pageMetrics,a.nextPage=null,s.segments[0]=a,s})}}return s}).then(e=>xF.createFlowAction(e,qI,t)).then(c,a)}pageType(){return qI}}(gG,mG)),wG.register(gG,new class extends FF{constructor(){super("GroupingGameCenterBuilder")}pageType(){return wk}pageRoute(e){return[]}shelfRoute(e){return[{protocol:R$.internal,path:`/${C$.grouping}/${C$.shelf}/{token}`,query:[b$.isGameCenterContinuePlayingShelf]},{protocol:R$.internal,path:`/${C$.grouping}/${C$.shelf}/{token}`,query:[b$.isGameCenterPopularWithYourFriendsShelf]},{protocol:R$.internal,path:`/${C$.grouping}/${C$.shelf}/{token}`,query:[b$.isGameCenterSuggestedFriendsShelf]},{protocol:R$.internal,path:`/${C$.grouping}/${C$.shelf}/{token}`,query:[b$.isGameCenterReengagementShelf]}]}renderShelf(e,t,n){const r=n[Cb],o=JSON.parse(r)
return o.isFirstRender=!1,t.query[b$.isGameCenterContinuePlayingShelf]?(Date.now(),this.requestForContinuePlaying(e,o.gamesFilter).then(t=>{Date.now(),Date.now()
const n=Yr(e,t,o)
return Date.now(),Date.now(),n})):t.query[b$.isGameCenterPopularWithYourFriendsShelf]?this.requestForGamesPopularWithFriends(e,o.gamesFilter).then(t=>Qr(e,t,o)):t.query[b$.isGameCenterSuggestedFriendsShelf]?this.requestForSuggestedFriends(e).then(t=>eo(e,t,o)):t.query[b$.isGameCenterReengagementShelf]?this.requestForGameCenterReengagementData(e,o):Promise.resolve(super.renderShelf(e,t,n))}requestForContinuePlaying(e,t){Date.now()
const n=this.maximumNumberOfRecentGamesToRequest()
return e.gameCenter.fetchRecentlyPlayedGamesWithinSeconds(this.gameCategoryFilter(t),n,e.bag.recentlyPlayedGamesWindowInSeconds).then(t=>{if(Date.now(),0===t.length)return Promise.resolve({data:[]})
const n=new B$(e).forType(ck).withIds(t.slice(0,this.maximumNumberOfRecentGamesToShow()))
return hs(e,n),b(e,n,{})})}maximumNumberOfRecentGamesToRequest(){return 200}maximumNumberOfRecentGamesToShow(){return 10}requestForGamesPopularWithFriends(e,t){return e.gameCenter.fetchGamesPopularWithFriends(this.gameCategoryFilter(t),30).then(t=>{const n=t.map(e=>this.gameplayHistoryFromData(e))
if(0===n.length)return Promise.resolve({data:[]})
const r=n.filter(t=>this.isCompatibleGameCenterPlatform(e,t.platformId)).map(e=>e.adamId),o=new B$(e).forType(ck).withIds(r.slice(0,100))
return hs(e,o),b(e,o,{})})}requestForSuggestedFriends(e){return new Promise((t,n)=>{e.gameCenter.fetchSuggestedFriends(10).then(e=>{t(e)})})}requestForGameCenterReengagementData(e,t){return e.gameCenter.fetchRengagementDataForLocalPlayer().then(n=>{const r=l(n,rb),o=g(n.achievement),s=g(n.achievementSummary),i=new B$(e).forType(ck).withIds([r])
return hs(e,i),b(e,i,{}).then(n=>zr(e,n,o,s,t))})}gameplayHistoryRecordFromData(e){return e.map(e=>{const t=l(e,"playerId"),n=f(e,"timestamp")
return new Qk(t,n)})}gameplayHistoryFromData(e){const t=l(e,rb),n=f(e,"platformId"),r=u(e,Xg),o=this.gameplayHistoryRecordFromData(a(e,"records"))
return new Xk(t,n,r,o)}isCompatibleGameCenterPlatform(e,t){return 1===t}gameCategoryFilter(e){return e===rp?"nonarcade":e}}),wG.register(gG,new KB),wG.register(gG,new class extends xF{constructor(){super(zh)}pageRoute(e){return[{protocol:R$.internal,path:`${C$.onDeviceRecommendations}`,query:[b$.onDeviceRecommendationsUseCase,b$.token]}]}handlePage(e,t,n,r,o,s,i){const c=n[b$.onDeviceRecommendationsUseCase]
qn(e,c,Rk).then(r=>{const o=JSON.parse(n[b$.token]),i=new BF
i.title=o.title
const c=this.makePage(e,r.dataContainer,r.recoMetrics,i),a=new wD(ak,t.build())
a.pageData=c,s(a)}).catch(e=>{i(e)})}makePage(e,t,n,r){const o=Qn(e)
r.url=this.paginationUrl,r.metricsPageInformation=cu(e,bC,"onDevicePersonalizationSeeAll",t),r.metricsPageInformation.recoMetricsData=ot(n,null,o),r.shouldFilter=!1,r.metricsLocationTracker={rootPosition:0,locationStack:[]}
const s=new XL(UF),i={id:null,kind:null,softwareType:null,targetType:zb,title:r.title,pageInformation:r.metricsPageInformation,locationTracker:r.metricsLocationTracker,idType:GC,recoMetricsData:n}
Bn(0,s,i),pt(i,r.title),s.isHorizontal=!1,s.shouldFilterApps=r.shouldFilter
const c=x(t)
r.remainingContent=[],s.items=ia(e,c,{contentUnavailable:(e,t)=>(r.remainingContent=He(0,c,t),!0),lockupOptions:{metricsOptions:{pageInformation:i.pageInformation,locationTracker:i.locationTracker},clientIdentifierOverride:r.clientIdentifierOverride,artworkUseCase:wa(0,s.contentType)}})
const a=new uD([s])
return a.title=r.title,r.remainingContent.length&&(a.nextPage=r),uu(e,a,r.metricsPageInformation),a}handleShelf(e,t,n,r,o,s){s(new Error(Qg))}shelfRoute(e){return[]}pageType(){return ak}}),wG.register(gG,new MB(gG,mG)),wG.register(gG,new class extends MF{constructor(e,t){super("ArcadeSeeAllGamesPageBuilder"),this.pageSize=20
const n=e.required(RF)
t.exportingService(uO,{fetchArcadeSeeAllGames(t){const r=sN.from(t.url)
return r.param(b$.requestDescriptor,JSON.stringify(t)),n.fetchPage(e,r.build(),pD)},fetchMoreArcadeSeeAllGames:t=>n.fetchMoreOfPage(e,t.pageToken).then(function(e){return e})})}defaultPlatforms(e){return K(e)}defaultAttributes(e){const t=[Qb,Zb,qv,tb,UC,QC,ev]
return e.appleSilicon.isSupportEnabled&&t.push(Pb),t}defaultTab(e){return pk}pageType(){return jR}pageRoute(e){return[{identifier:jR,path:`/${C$.arcadeSeeAllGames}`,query:[`${b$.requestDescriptor}?`,`${b$.sort}?`,`${b$.ageRating}?`,`${b$.controllerSupport}?`,`${b$.multiplayerSupport}?`,`${b$.comingSoon}?`]},{identifier:jR,hostName:`${v$.arcadeSeeAllPage}`,query:[`${b$.requestDescriptor}?`,`${b$.sort}?`,`${b$.ageRating}?`,`${b$.controllerSupport}?`,`${b$.multiplayerSupport}?`,`${b$.comingSoon}?`]}]}paginationRoute(e){return[{identifier:jR,protocol:R$.internal,path:`/${C$.arcadeSeeAllGames}/${C$.arcadeSeeAllGamesLoadMore}`}]}shelfRoute(e){return[{protocol:R$.internal,path:`/${C$.arcadeSeeAllGames}/${C$.shelf}/`,query:[`${b$.token}`]}]}generatePageRequest(e,t,n){return Ll.Do("generatePageRequest",()=>{const t=bu(e,n)
let r=dn(e).includingAdditionalPlatforms(K(e)).includingRelationships([]).withSparseLimit(10).includingAttributes(Ru(e)).usingCustomAttributes(we(e))
const o=i(t.selectedFacetOptions)?t.selectedFacetOptions:Su(e)
let s=!1
for(const e of Object.keys(o))if(e===TB&&i(o[e])){const t=o[mB]
if(i(t))switch(t[0].value){case pB:case hB:o[e][0].value=yB
break
case wB:o[e][0].value=AB
break
case gB:o[e][0].value=AB,s=!0}}s&&(r=r.withSparseCount(4))
for(const e of Object.keys(o)){const t=dB.requestValuesForSelectedFacetOptions(o[e])
if(i(t)){i(t.value)&&r.addingQuery(e,t.value)
for(const e of Object.keys(t.additionalKeyValuePairs))r.addingQuery(e,t.additionalKeyValuePairs[e])}}return r})}renderPage(e,t,n,o){return Ll.Do(av,()=>{const o=p(t),s=bu(e,n),c=cu(e,bC,jR,o),u={url:sN.fromComponents(R$.internal,null,`/${C$.arcadeSeeAllGames}/${C$.arcadeSeeAllGamesLoadMore}`).build(),metricsPageInformation:c,metricsLocationTracker:{rootPosition:0,locationStack:[]},remainingGroups:[],lastShelfIndex:0,isCompactMode:s.isCompactMode},l=new pD(Cu(e,a(o,"results.groups"),u))
l.title=e.loc.string($g),l.pageFacets=function(e){_u(e)
const t=e.loc.string("PAGE_FACETS_FILTERS_AGE_RATINGS"),n=new lB(Vf,t,wR,null,[RB,CB,vB,bB],[RB],"age",Ou(e,kv)),r=new lB(mB,e.loc.string(zf),wR,null,[IB,_B,SB,OB],null,kv,Ou(e,kv)),o=e.loc.string(Wf),s=new lB(Hf,o,KA,null,[kB],null,Jf,Ou(e,"controllerSupportFacetOption")),i=e.loc.string("PAGE_FACETS_FILTERS_MULTIPLAYER_GAMES"),c=new lB(qf,i,KA,null,[DB],null,Kf,Ou(e,"multiplayerSupportFacetOption")),a=new lB(TB,e.loc.string(jf),KA,null,[NB],[NB],ZA,Ou(e,ZA)),u=new dB([],!1,null)
switch(e.client.deviceType){case Sk:u.facetGroups.push(new fB([n])),e.bag.enableComingSoonToggle&&u.facetGroups.push(new fB([a],e.loc.string(Zf))),u.facetGroups.push(new fB([s,c],e.loc.string("PAGE_FACETS_SUPPORTS_TITLE"))),u.facetGroups.push(new fB([r]))
break
case"tv":u.facetGroups.push(new fB([n],e.loc.string("PAGE_FACETS_AGE_RATINGS_TITLE_LOWERCASE")))
const t=[s,c]
e.bag.enableComingSoonToggle&&t.push(a),u.facetGroups.push(new fB(t,e.loc.string("PAGE_FACETS_FILTERS_TITLE"))),u.facetGroups.push(new fB([r],e.loc.string("PAGE_FACETS_SORT_BY_TITLE_LOWERCASE")))
break
default:r.displayOptionsInline=!0,u.facetGroups.push(new fB([r],e.loc.string(zf))),n.showsSelectedOptions=!0
const o="PAGE_FACETS_FILTER_BY_TITLE",i="PAGE_FACETS_FILTER_BY_TITLE_WITH_COLON"
let l=e.loc.string(o)
l===o&&(l=e.loc.string(i)),u.facetGroups.push(new fB([s,c,n],l)),e.bag.enableComingSoonToggle&&u.facetGroups.push(new fB([a],e.loc.string(Zf)))}return u}(e),l.selectedFacetOptions=i(s.selectedFacetOptions)?s.selectedFacetOptions:Su(e),uu(e,l,c)
const f=l.pageMetrics.instructions
if(!r(f))for(const e of f)e.data.includingFields.push(Zp)
return u.remainingGroups.length>0&&(l.nextPage=u),l})}generatePaginationRequest(e,t,n,r){const o=p(r)
let s=[],i=20,c=!0
for(const e of o.remainingGroups)c=c&&(e.data.length<i||0===s.length),c&&(s=s.concat(e.data),i-=e.data.length)
return new B$(e,s).includingAdditionalPlatforms(K(e)).includingAttributes(Ru(e)).usingCustomAttributes(we(e))}renderPaginatedPage(e,t,n){const r=p(n),o=[]
let s=20
const c={}
for(const e of t.data)c[e.id]=e
let a=!0
for(const e of r.remainingGroups){if(a=a&&(e.data.length<s||0===o.length),a){for(let t=0;t<e.data.length;t++){const n=c[e.data[t].id]
i(n)&&(e.data[t]=n)}s-=e.data.length}o.push(e)}r.remainingGroups=[]
const u=Cu(e,o,r),l=new pD(u)
return l.title=e.loc.string($g),r.remainingGroups.length>0&&(l.nextPage=r),l}generateShelfRequest(e,t,n){const r=p(JSON.parse(n[Cb])).remainingContent.slice(0,20),o=new B$(e,r).includingAdditionalPlatforms(K(e)).includingAttributes(Ru(e)).usingCustomAttributes(we(e))
return _e(e,o,r),o}renderShelf(e,t,n){const r=p(JSON.parse(n[Cb]))
return r.remainingContent=t.data.concat(r.remainingContent.slice(20,r.remainingContent.length)),r.isFirstRender=!1,vu(e,r)}}(gG,mG)),wG.register(gG,new class extends xF{constructor(e,t){super("MarketingItemUpsellBuilder"),t.exportingService(uO,{fetchUpsellGrid:t=>new Promise((n,r)=>{const o=t.contentDictionary
i(t)||r(new Error("fetchUpsellGrid called without a contentDictionary"))
const s=o
i(s)||r(new Error("fetchUpsellGrid called with malformed contentDictionary"))
const c=ce(s,ck),a={pageInformation:new Xx({}),locationTracker:{rootPosition:0,locationStack:[]}},u=Ta(e,c,a,{useCase:2}),l=u.shift()
n(new S$(l,u))})})}pageType(){return FC}pageRoute(e){return[{hostName:`${v$.arcadeSubscribePage}`,query:[`${b$.appId}?`,`${b$.context}?`,`${b$.includePostSubscribeAttribution}?`],exclusions:[{query:[`${b$.askToBuyId}`]}]},{path:"arcade/subscribe",query:[`${b$.appId}?`,`${b$.context}?`,`${b$.includePostSubscribeAttribution}?`]},{path:"{countryCode}/arcade/subscribe",query:[`${b$.appId}?`,`${b$.context}?`,`${b$.includePostSubscribeAttribution}?`]}]}handlePage(e,t,n,r,o,s,i){const c=function(e){var t
switch(e){case Yl:return jl
case"generic":return wC
case zl:return qP
case Jl:return PA
case Yv:return dO
case"topShelfATV":return"arcadeTopShelfATV"
case"topShelfATVClickThrough":return"arcadeTopShelfATVClickThrough"
case pO:return"arcadeTodayCard"
case"editorialItemCanvas":return WP
case YP:return YP
case J_:return J_
case IA:return IA
default:return null!==(t=e)&&void 0!==t?t:wC}}(l(n,b$.context)),a=l(n,b$.appId),u=new I$(pk,c,a),f=new wD(FC)
f.pageData=u,f.referrerUrl=t.build(),s(f)}}(gG,mG)),wG.register(gG,new class extends xF{constructor(){super("ArcadeOfferRedirectHandler")}pageType(){return bb}defaultTab(e){return pk}pageRoute(e){return[{path:"arcade/offers",query:[`${b$.offerHints}?`]},{path:"/{countryCode}/arcade/offers",query:[`${b$.offerHints}?`]}]}handlePage(e,t,n,r,o,s,i){var c
const a=null!==(c=n[b$.offerHints])&&void 0!==c?c:"deeplink_hardware_firstchance",u=new I$(pk,wC,null,{offerHints:a})
u.offerHints=a
const l=new wD(FC)
l.pageData=u,l.referrerUrl=t.build(),s(l)}}),wG.register(gG,new FB(gG,mG)),wG.register(gG,new class extends xF{constructor(e,t){super("ArcadeWelcomeBuilder"),t.exportingService(uO,{fetchArcadeWelcomePage:t=>e.required(RF).fetchPage(e,t.url,P$)})}pageType(){return"arcadeWelcome"}handlePage(e,t,n,r,o,s,i){const c=this.generatePage(e,n,r)
s(xF.createFlowAction(c,this.pageType(),t))}pageRoute(e){return[{hostName:`${v$.arcadeWelcomePage}`,query:[`${b$.context}?`]}]}generatePage(e,t,n){return function(e,t){return function(e,t){const n={rootPosition:0,locationStack:[]},r=function(e,t){if(L(t)){const t=new BD
return t.title=e.loc.string("ARCADE_WELCOME_TV_CONTINUE_BUTTON"),t}return Lu(0,e.loc.string("ARCADE_WELCOME_CONTINUE_BUTTON"))}(e,t)
Rt(e,r,{id:"arcade-welcome-continue",actionType:Qv,pageInformation:new Xx,locationTracker:n,targetType:fk})
const o=function(e,t){return L(t)?Lu(0,e.loc.string(QA)):null}(e,t)
o&&Rt(e,o,{id:"arcade-welcome-create-family",actionType:Qv,pageInformation:new Xx,locationTracker:n,targetType:fk})
let s=UB,i="oe"
e.client.isPad&&(s=BB,i="og")
const c=new E$(e.loc.string("ARCADE_WELCOME_INDIVIDUAL_TITLE"),e.loc.string("AppStore.Arcade.Welcome.Family.Description"),[new y$(null,null,ga(e,s,{useCase:23,cropCode:i}))],r,o)
if(L(t)){c.nonDismissingContinueAction=Lu(0,e.loc.string(QA)),r.title=c.nonDismissingContinueAction.title
const t=new BD
t.title=e.loc.string(ed),c.dismissingFamilyAction=t,o.title=c.dismissingFamilyAction.title}else c.nonDismissingContinueAction=Lu(0,e.loc.string(QA)),r.title=c.nonDismissingContinueAction.title
return new P$(c,c)}(e,t)}(e,t[b$.context])}}(gG,mG)),wG.register(gG,new class extends xF{constructor(){super("FamilyCircleBuilder")}pageType(){return wk}defaultTab(e){return pk}handlePage(e,t,n,r,o,s,i){s(new UD(xC))}pageRoute(e){return[{hostName:`${v$.familyCircle}`},{path:`${v$.familyCircle}`}]}}),wG.register(gG,new class extends xF{constructor(){super("AppClipSubscribeBuilder")}pageType(){return wk}handlePage(e,t,n,r,o,i,c){const a=l(n[b$.appId])
s(a)||c(new Error(`No adamId supplied in appClipSubscribe url: ${t}`))
const u=new B$(e).withIds([a]).forType(Pk).includingAdditionalPlatforms(K(e))
b(e,u).then(t=>{const n=$(t),r={metricsOptions:{pageInformation:new Xx({}),locationTracker:{rootPosition:0,locationStack:[]}},artworkUseCase:null},o=Xc(e,n,r),s=(new sN).set(XC,R$.itmsApps).set(pC,XO).path(C$.product).path(a).build(),c=new wD(ob)
c.pageUrl=s
const u=ln(e,wC,a,o.buttonAction),l=new gD(pk)
l.actions=[c,u],i(l)})}pageRoute(e){return[{hostName:`${v$.appClipSubscribe}`,query:[b$.appId,b$.context]}]}}),wG.register(gG,new class extends MF{constructor(){super("GroupingPageBuilder")}defaultPlatforms(e){return K(e)}defaultAttributes(e){const t=[Qb,qv,tb,xy]
return e.appleSilicon.isSupportEnabled&&t.push(Pb),t}prepareRequest(e,t,n,r){super.prepareRequest(e,t,n,r)}pageType(){return ak}pageRoute(e){return[{protocol:R$.https,path:`/${C$.store}/${C$.grouping}`,query:[b$.id,`${b$.context}?`]},{hostName:v$.storePreview,path:`/WebObjects/{storePreviewInstance}/wa/${C$.grouping}`,query:[b$.id,`${b$.useReleaseId}?`]},{protocol:R$.https,path:`/{countryCode}/${C$.genre}/{genreName}/{id}`},{protocol:R$.https,path:`/${C$.store}/${C$.viewGenre}`,query:[b$.id]},{hostName:v$.storePreview,path:`/WebObjects/{storePreviewInstance}/wa/${C$.viewGenre}`,query:[b$.id,`${b$.useReleaseId}?`]},{protocol:R$.https,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}"},{protocol:R$.https,path:"{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}"},{protocol:R$.https,path:"{apiVersion}/editorial/{countryCode}/groupings/{id}"},{protocol:R$.https,hostName:`${v$.safariExtensions}`}]}shelfRoute(e){return[{protocol:R$.internal,path:`/${C$.grouping}/${C$.shelf}/{token}`}]}generatePageRequest(e,t,n){let r,o,a=t.query.id
if(t.host===v$.safariExtensions&&i(e.bag.safariExtensionsGroupingURL)){const t=sN.from(e.bag.safariExtensionsGroupingURL)
s(t)&&(a=Vr(t))}const u=t.pathComponents()
if(-1!==u.indexOf(tI)?r=a:-1!==u.indexOf(Nb)?r=Vr(t):o=a,!c(o)&&!c(r))throw new Error(`Unable to map ${t.build()} to a media api url`)
const l=[Qb,Zb,qv,tb,ev,kS]
e.appleSilicon.isSupportEnabled&&l.push(Pb)
let f=new B$(e).forType(Mv).includingAttributes(l).includingRelationshipsForUpsell(!0).includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes(we(e))
Qt(e)&&(f.enablingFeature(Xb),f.includingMetaKeys(II,[mR,_I]),f.includingScopedAttributes(Tk,[dk,Zv,Xv]),f.includingScopedRelationships(Tk,[sk]))
const d=t.query[b$.context]||X(e)
s(d)&&f.addingQuery(JR,d),c(o)?f=f.withIds([o]):c(r)&&(f=f.addingQuery(Nb,r))
const p=t.query[b$.useReleaseId]
return t.host===v$.storePreview&&i(p)&&(f.isStorePreviewRequest=!0,f=f.addingQuery(uy,p)),f.enablingFeature(VI),f.attributingTo(t.build())}renderPage(e,t,n,o,i,c){return Ll.Do("renderGroupingPage",()=>{const n=$(t)
if(!n)return null
if(!oe(n,KC))return null
const o=cu(e,T_,n.id,t),i=Qn(e)
o.recoMetricsData=ot(o.recoMetricsData,null,i)
const c={shelves:[],metricsPageInformation:o,metricsLocationTracker:{rootPosition:0,locationStack:[]},groupingData:se(n,KC),pageGenreAdamId:y(n,"id"),pageGenreId:I(n,Nb)||(u=y(n,"chartUrl"),r(u)?null:f(sN.from(u).query,Nb)),hasAuthenticatedUser:s(e.user.dsid),refreshController:sr(t)},a=$(c.groupingData)
var u
if(Lo(e,a,c),"tv"!==e.client.deviceType){const t=Go(e,c.metricsPageInformation,c.metricsLocationTracker)
t&&c.shelves.push(t)}if(e.client.deviceType!==Ok&&"tv"!==e.client.deviceType){const t=e.bag.termsAndConditionsURL
if(!r(t)){const n=Zo(e,t)
c.shelves.push(n)}}const l=this.groupingPageTitleForData(e,n,c.pageGenreId),d=new uD(c.shelves)
switch(e.client.deviceType){case"tv":d.title=l
break
case Ok:d.title=l,d.presentationOptions=[vP]
break
default:d.title=l,39===c.pageGenreId||(c.pageGenreId,0)?d.presentationOptions=["prefersRevealNavigationBarOnMouseOver"]:d.presentationOptions=[vP]}return d.pageRefreshPolicy=cr(e,null==c?void 0:c.refreshController),uu(e,d,c.metricsPageInformation),Nu(d),d})}groupingPageTitleForData(e,t,n){let r=null
switch(n){case 36:r=e.host.clientIdentifier===SN&&e.client.deviceType!==Ok?e.loc.string("GROUPING_APPS"):e.loc.string("GROUPING_APP_STORE","App Store")
break
case 39:r=e.loc.string(Zg)
break
default:r=da(0,t)}return r}macDiscoverPageTitleForData(e,t){const n=se(t,KC)
if(s(n)&&s(n.data))for(const e of n.data){const t=y(e,_k),n=I(e,EC),r=y(e,Cb)
if(i(t)&&s(n)&&i(r)&&r===_v&&414===n)return t}return e.loc.string(Zg)}shelfForHeaderButtons(e){const t=new XL(Cv),n=[],r=new wD(Rb)
return r.title=e.loc.string("SEARCH",vC),r.artwork=We(e,"systemimage://magnifyingglass"),n.push(r),t.items=n,t}generateShelfRequest(e,t,n){return ps(e,0,n)}renderShelf(e,t,n){return ws(e,t,n)}handleShelfError(e,t,n,r){const o=r[Cb],s=JSON.parse(o)
if(s&&!s.hasExistingContent){const e=new XL(s.shelfStyle)
e.isHidden=!0,t(e)}else super.handleShelfError(e,t,n,r)}}),wG.register(gG,new class extends FF{constructor(){super("ProductBuilderNative")}pageType(){return ob}pageRoute(e){return[]}shelfRoute(e){return[{protocol:R$.internal,path:`/${C$.product}/${C$.shelf}`,query:[b$.isGameCenterPlayerShelf,b$.token]},{protocol:R$.internal,path:`/${C$.product}/${C$.shelf}`,query:[b$.isGameCenterPlayerRibbonItem]},{protocol:R$.internal,path:`/${C$.product}/${C$.shelf}`,query:[b$.isGameCenterAchievementsShelf,b$.token]}]}renderShelf(e,t,n){return new Promise(r=>{if(t.query[b$.isGameCenterPlayerShelf]){const o=t.query[b$.id],s=e.gameCenter.fetchFriendsThatPlayGame(o),i=n[b$.token],c=JSON.parse(i)
s.then(t=>{const n=dc(e,t,!0,c)
r(n)}).catch(e=>{throw e})}else if(t.query[b$.isGameCenterPlayerRibbonItem]){const n=t.query[b$.id]
e.gameCenter.fetchFriendsThatPlayGame(n).then(t=>{const n=dc(e,t,!1)
r(n)}).catch(e=>{throw e})}else if(t.query[b$.isGameCenterAchievementsShelf]){const o=t.query[b$.bundleId]
e.gameCenter.fetchAchievementSummaryForGame(o).then(t=>{const o=t
let s=null
if(o.length>0){const t=new WD(o[0].bundleId),n=e.loc.string("PRODUCT_ACHIEVEMENT_SUMMARY_COMPLETED","Completed"),r=o[0].achievements
let i=null
const c=r.filter(e=>e.status.type===np)
if(c.length>0&&(i=c[0]),null===i){const e=r.filter(e=>e.status.type===tp||e.status.type===ep)
e.sort((e,t)=>t.status.percent-e.status.percent),e.length>0&&(i=e[0])}null!==i&&(s=new Jk(o[0].bundleId,o[0].completedAchievements,o[0].totalAchievements,n,t,[i]))}const i=n[b$.token],c=JSON.parse(i),a=function(e,t,n){const r=new XL(vw)
if(r.isHorizontal=!0,t){const o={pageInformation:n.destinationPageInformation,locationTracker:n.sourceLocationTracker,kind:xv,title:Cw,id:"achievements_summary",idType:qR,softwareType:null,targetType:xv,badges:{gameCenter:{}}}
Bn(0,r,o),Rt(e,t.action,o),r.items=[t]}return r.mergeWhenFetched=!0,r.batchGroup=Nv,r.isHidden=0===r.items.length,r}(e,s,c)
r(a)}).catch(e=>{throw e})}else r(super.renderShelf(e,t,n))})}}),wG.register(gG,new QB(gG,mG)),wG.register(gG,new class extends xF{constructor(){super("ProductInAppPurchaseBuilder")}handlePage(e,t,n,r,o,s,i){const c=n[D$.url],a=new sN(c),u=Hr(e,a),l={},f=n[D$.isSubscription]===$v
l.spotlightSection=Ri(f),l.spotlightInAppProductIdentifier=n[b$.offerName],b(e,u).then(n=>{const r=xc(e,n,l)
return xF.createFlowAction(r,ob,t)}).then(s,i)}pageRoute(e){return[{protocol:R$.internal,path:`/${C$.product}/${C$.lookup}`,query:[D$.url,b$.offerName,D$.isSubscription]}]}pageType(){return ob}}),wG.register(gG,new class extends xF{constructor(){super("ReviewsAdapterBuilder")}handlePage(e,t,n,r,o,s,i){const c=Hr(e,t)
b(e,c).then(n=>{const r=xc(e,n)
let o,s
if($c(e)){const e=r
o=e.shelfMapping[db],s=1===e.appPlatforms.length&&"tv"===e.appPlatforms[0]}else{const e=r
o=e.shelfMapping[yk],s=1===e.appPlatforms.length&&"tv"===e.appPlatforms[0]}const i=xF.createFlowAction(r,ob,t)
let c=null
return o&&o.seeAllAction&&!s&&(c=o.seeAllAction,c.animationBehavior=gb),c?(i.animationBehavior=gb,new AD([i,c])):i}).then(s,i)}pageRoute(e){return[{protocol:R$.https,path:`/{countryCode}/${C$.product}/{appName}/{id}`,hash:F$},{protocol:R$.https,path:`/${C$.store}/${C$.viewReviews}`,query:[b$.id]}]}handlePagination(e,t,n,r,o,s,i){const c=n[N$],u=n[L$],l=a(o.remainingContent),f=new B$(e,o.nextHref).includingAdditionalPlatforms(K(e)).addingQuery(kv,u)
b(e,f,{}).then(t=>Pi(e,e.client.guid,c,l,t,!1,u)).then(s,i)}paginationRoute(e){return[{protocol:R$.internal,path:`/${C$.reviews}/${C$.shelf}/{adamId}/{sort}`}]}pageType(){return ob}}),wG.register(gG,new class extends xF{constructor(){super("SortedReviewsBuilder")}handlePage(e,t,n,r,o,s,i){const c=n[N$],a=n[L$],u=new B$(e).forType(q_).withIds([c]).includingAdditionalPlatforms(K(e)).addingQuery(kv,a)
b(e,u,{}).then(t=>Pi(e,e.client.guid,c,[],t,!0,a)).then(e=>xF.createFlowAction(e,yk,t)).then(s,i)}pageRoute(e){return[{protocol:R$.internal,path:`/${C$.reviews}/{adamId}/{sort}`}]}pageType(){return yk}}),wG.register(gG,new class extends xF{constructor(){super("PersonalizedReviewsBuilder")}handlePage(e,t,n,r,o,s,i){i(new Error("PersonalizedReviewsBuilder:handlePage not implemented"))}pageRoute(e){return[]}handleShelf(e,t,n,r,o,s){const i=n[Cb],c=JSON.parse(i),a=new B$(e).forType(yk).withIds([c.adamId])
b(e,a).then(t=>Ai(e,e.client.guid,c,t)).catch(()=>Ai(e,e.client.guid,c)).then(o,s)}shelfRoute(e){return[{protocol:R$.internal,path:`/${C$.personalizedReviews}/${C$.shelf}/{token}`}]}pageType(){return wk}}),wG.register(gG,new class extends MF{constructor(){super("EulaBuilder")}defaultPlatforms(e){return K(e)}generatePageRequest(e,t,n){const o=t.query.resourceId,s=t.query.resourceType
if(r(o)||r(s))throw new Error(`Unable to map ${t.build()} to a media api url`)
const i=new B$(e).forType($R).withIds([o])
return i.targetResourceType=s,i}pageRoute(e){return[{protocol:R$.internal,path:`${C$.eula}`}]}pageType(){return ak}renderPage(e,t,n,r){return Ll.Do(av,()=>{const n=l(t,"results.eula.text").split(/\n{1,2}/),r=[]
for(const e of n){const t=new Wk(e)
t.wantsCollapsedNewlines=!1,t.suppressVerticalMargins=!0,r.push(t)}const o=new XL(hv)
o.isHorizontal=!1,o.items=r
const s=new uD([o])
return s.title=e.loc.string(D_),s})}}),wG.register(gG,new class extends MF{constructor(){super("PrivacyDetailBuilder")}defaultPlatforms(e){return K(e)}pageType(){return FE}pageRoute(e){return[{protocol:R$.internal,path:`${C$.privacyDetail}/${C$.product}/{id}`,query:[`${b$.privacyTypeId}?`]},{protocol:R$.internal,path:`${C$.privacyDetail}/${C$.productBundle}/{id}`,query:[`${b$.privacyTypeId}?`]}]}generatePageRequest(e,t,n){const r=Vr(t)
if(!i(r))throw new Error(`Unable to map ${t.build()} to a media api url. Missing id.`)
let o=Pk
const s=[__,Fv,dS]
return-1!==t.pathname.indexOf(C$.productBundle)&&(o=lk),new B$(e).forType(o).withIds([r]).addingQuery(nI,s.join(","))}renderPage(e,t,n,i){return Ll.Do(av,()=>{const i=n[b$.privacyTypeId]
return function(e,t,n){return Ll.Do("privacyDetailPageFromResponse",()=>{const i=$(t)
if(o(i))return null
const c=cu(e,"PrivacyDetails",i.id,t),a={rootPosition:0,locationStack:[]}
let u=[]
if(!Mi(e)){const t=function(e,t,n,r){const o=new XL(jb)
o.isHorizontal=!1
const s=Ui(e,t,!0,!0,n,r)
return o.items=[s],o}(e,i,c,a)
s(t)&&u.push(t)}const l=function(e,t,n,i,c){const a=T(t,__)
if(o(a))return[]
const u=ki(e,a,t,YC,!0,n,i)
if(0===u.length)return[]
const l=[]
for(const t of u)if(r(c)||t.identifier===c||e.client.deviceType!==Ok){const e=new XL(S_)
t.wantsScrollFocus=s(t.identifier)&&t.identifier===c,e.items=[t],e.presentationHints={isSingleDensity:!0},l.push(e)
for(const e of t.purposes){const t=new XL("privacyCategory")
t.title=e.title,t.items=e.categories,l.push(t)}}return l}(e,i,c,a,n)
u=u.concat(l)
const f=new uD(u)
return f.title=e.loc.string(jS),uu(e,f,c),f})}(e,t,i)})}}),wG.register(gG,new class extends xF{constructor(){super("SearchLandingPageBuilder")}pageRoute(e){return[{protocol:R$.internal,path:`${C$.searchLandingPage}`}]}pageType(){return ak}handlePage(e,t,n,r,o,s,i){Ll.Do(`${this.builderClass}.handlePage`,()=>{this.fetchPage(e).then(e=>{s(MF.createFlowAction(e,this.pageType(),t))}).catch(i)})}fetchPage(e){const t=function(e,t){switch(t){case ZC:const n=function(e){switch(e){case PC:return fI
case ZC:return"search-landing"
default:return null}}(t)
return e.bag.isSearchLandingAdsEnabled||e.bag.enabledAdPlacements.includes(n)
case PC:return!0
default:return!1}}(e,ZC)?async function(e,t,n){var c,a,u
const l=function(e,t,n){var r,o
const s=e.bag.adPlacementTimeouts
switch(t){case PC:return null!==(r=null==s?void 0:s["search-results-in-seconds"])&&void 0!==r?r:.3
case ZC:return null!==(o=e.bag.searchLandingAdFetchTimeout)&&void 0!==o?o:.3
default:return.3}}(e,t)
let f
f=e.ads.fetchOnDeviceAd(ZC,l)
const d=await f
o(d.clientRequestId)&&(d.clientRequestId=e.random.nextUUID(),Cn(e,`clientRequestId was nil. Assigned ${d.clientRequestId}`))
const p={clientRequestId:d.clientRequestId,iAdId:d.iAdId,placementType:null!==(a=null===(c=null==d?void 0:d.ad)||void 0===c?void 0:c.placementType)&&void 0!==a?a:t}
if(d.failureReason)return p.failureReason=d.failureReason,p
p.onDeviceAd=d.ad
let h=null===(u=d.ad)||void 0===u?void 0:u.appMetadata
if(o(h))try{const t=function(e,t){return new B$(e).forType(Pk).withIds([t.adamId])}(e,d.ad)
h=await b(e,t)}catch(t){Cn(e,`fetchAds request failed - ${t}`),p.failureReason=Sf}if(i(h)){p.mediaResponse=function(e,t,n){const s=$(t)
if(o(s)||r(s.attributes))return Cn(e,"decorateiAdAttributeFromOnDeviceAd cannot decorate for malformed response"),null
const i=n.ad,c=`${i.adamId}|${i.metadata}`,a={clientRequestId:n.clientRequestId,impressionId:i.impressionId,metadata:i.metadata,privacy:i.privacy,lineItem:c}
return s.attributes[HR]=a,Ln(0,s,i.instanceId),t}(e,h,d)
const t=null
s(t)&&(Cn(e,`fetchAds request failed - ${t}`),p.failureReason=t)}return p}(e,ZC).catch(()=>null):null
return this.fetchSearchLandingPage(e,t).catch(n=>this.fetchTrendingSearchesFallbackPage(e,t))}fetchTrendingSearchesFallbackPage(e,t){const n={url:e.bag.trendingSearchesURL},r=e.network.fetch(n).then(e=>{if(!e.ok)throw Error(`Bad Status code ${e.status} for ${n.url}`)
return JSON.parse(e.body)})
return Promise.all([r,t]).then(([t,n])=>{var r
const o=new fD(this.trendingSearchesShelvesForResponse(e,t)),s=au(0,"SearchLanding",kR,"")
return s.iAdInfo=Dn(0,ZC,n),null===(r=s.iAdInfo)||void 0===r||r.setMissedOpportunity("SLPLOAD"),uu(e,o,s),o})}fetchSearchLandingPage(e,t){const n=new B$(e).forType(Y_).includingAdditionalPlatforms(K(e)).usingCustomAttributes(we(e))
n.targetResourceType=Mv
const r=function(e,t){return o(t)?null:function(e,t){const n=Zr(t)
return e.storage.retrieveString(n)}(e,t)}(e,e.user.dsid)
i(r)&&n.addingQuery("clusterId",r)
const s=b(e,n)
return Promise.all([s,t]).then(([t,n])=>this.landingPageFromResponse(e,t,n))}landingPageFromResponse(e,t,n){const i=a(t,rm)[0]
if(o(i))return null
const c=se(i,KC),u=y(i,"id")
if(o(c))return null
const l=cu(e,T_,i.id,t),f=Qn(e)
l.recoMetricsData=ot(l.recoMetricsData,null,f),l.iAdInfo=Dn(0,ZC,n)
const d={incidents:[],iAdInfo:l.iAdInfo}
!function(e,t,n){var r,i,c,a,u,l
if(o(n)||o(n.failureReason))return
const f=null===(r=n.onDeviceAd)||void 0===r?void 0:r.instanceId
switch(n.failureReason){case Sf:s(f)&&xn(t,new rF(f,_f)),null===(i=null==t?void 0:t.iAdInfo)||void 0===i||i.setMissedOpportunity(dI)
break
case Of:s(f)&&xn(t,new rF(f,Of)),null===(c=null==t?void 0:t.iAdInfo)||void 0===c||c.setMissedOpportunity(dI)
break
case Rf:s(f)&&xn(t,new rF(f,Rf)),null===(a=null==t?void 0:t.iAdInfo)||void 0===a||a.setMissedOpportunity(dI)
break
case"noAdAvailable":null===(u=null==t?void 0:t.iAdInfo)||void 0===u||u.setMissedOpportunity("NOAD")
break
case"timeout":null===(l=null==t?void 0:t.iAdInfo)||void 0===l||l.setMissedOpportunity(Cf)}}(0,d,n)
const p={shelves:[],metricsPageInformation:l,metricsLocationTracker:{rootPosition:0,locationStack:[]},groupingData:se(i,KC),pageGenreAdamId:u,pageGenreId:I(i,Nb),hasAuthenticatedUser:s(e.user.dsid),isSearchGrouping:!0,adStitcher:Mn(0,n),adIncidentRecorder:d}
Lo(e,$(c),p)
const h=new fD(p.shelves),w=new wF("timeSinceOnScreen",e.bag.searchLandingPageRefreshUpdateDelayInterval,e.bag.searchLandingPageOffscreenRefreshInterval,null)
var g
return h.pageRefreshPolicy=w,h.adIncidents=r(g=p.adIncidentRecorder)||o(g.incidents)?null:g.incidents,uu(e,h,p.metricsPageInformation),h}trendingSearchesShelvesForResponse(e,t){return Ll.Do("trendingSearchesShelfForResponse",()=>{const n={rootPosition:0,locationStack:[]},r=a(t,"trendingSearches").map(t=>{const r=l(t,Eb),o=new zN(r,r,l(t,Ek),kR)
return bt(e,o,fk,n),At(n),new GD(o)})
let o=0
switch(e.client.deviceType){case uk:o=10
break
case mk:o=7}const s=new XL(Cv)
return s.title=r.length>0?l(t,"header.label"):null,s.isHorizontal=!1,s.items=r.slice(0,o),[s]})}}),wG.register(gG,new class extends xF{constructor(e,t){super("SearchResultsBuilder"),t.exportingService(W_,{fetchResults(t){const n=$u(e,t)
return n?n.then(t=>function(e,t){return pl(e,t)}(e,t)):Promise.resolve(fl(e,t.facets))},fetchMoreResults:t=>function(e,t){return Ll.Do("paginatedSearchResultsWithToken",()=>{const n=ul(0,t),r=ll(0,t)
return 0===n.length?Promise.resolve(fl(e)):xu(e,n).then(n=>{const o=x(n)
return cl(e,t.requestMetadata,t.responseMetadata,t.metricsOptions,o).then(e=>{const t=new VN
return t.results=e.builtSearchResults,t.nextPage=r,t})})})}(e,t.pageToken),fetchSearchResultsPage(t){const n=$u(e,t)
return n?n.then(t=>function(e,t){return pl(e,t)}(e,t)):Promise.resolve(dl(e,t.facets))},fetchMoreOfSearchResultsPage:t=>function(e,t){return Ll.Do("paginatedSearchResultsPageWithToken",()=>{const n=ul(0,t),r=ll(0,t)
if(0===n.length)return Promise.resolve(dl(e))
const o={}
for(const e of n){const t=`${e.id}_${e.type}`
o[t]=e}return xu(e,n).then(n=>{var i
const c=x(n)
for(const e of c){const t=`${e.id}_${e.type}`,n=null===(i=o[t])||void 0===i?void 0:i.meta
s(n)&&s(e.meta)?e.meta={...n,...e.meta}:s(n)&&(e.meta=n)}const a={id:fI,kind:null,softwareType:null,targetType:HS,title:nO,pageInformation:t.metricsOptions.pageInformation,locationTracker:t.metricsOptions.locationTracker,idType:zO}
return pt(a,nO),cl(e,t.requestMetadata,t.responseMetadata,t.metricsOptions,c).then(n=>{const o=new XL(ng)
o.id=sG,o.isHorizontal=!1,o.items=n.builtSearchResults
const s=new HN([o])
return s.nextPage=r,s.isCondensedSearchLockupsEnabled=e.client.isPhone&&su(e),Bn(0,o,a),s.resultsParentImpressionMetrics=o.impressionMetrics,wt(t.metricsOptions.locationTracker),s})})})}(e,t.pageToken)})}handlePage(e,t,n,r,o,s,i){i(new Error(Vv))}pageRoute(e){return[]}pageType(){return wk}}(gG,mG)),wG.register(gG,new class extends xF{constructor(e,t){super("SearchHintsBuilder"),t.exportingService(W_,{fetchHints:t=>function(e,t){const n=function(e,t){let n=sN.from(e.bag.searchHintsURL).param("caller",Xl).param("v","4")
r(t)||(n=n.param(nS,t))
const o=e.host.clientIdentifier
n=o===ON?n.param(aE,"watchSoftware").param(aP,Xy):o===RN?n.param(aP,Qy):n.param(aP,vR)
const s=[]
return e.appleSilicon.isSupportEnabled&&s.push(Xw),Qt(e)&&s.push(Xb),s.length>0&&(n=n.param(wI,s.join(","))),n.build()}(e,t)
return function(e,t){return function(e,t,n){return e.network.fetch(t).then(e=>{if(!e.ok)throw Error(`Bad Status code ${e.status} for ${t.url}`)
const r=Date.now(),i=n(e.body),c=Date.now()
if(i){const t=function(e,t,n){if(o(e))return null
const r=e[0]
return r.parseStartTime=t,r.parseEndTime=n,r}(e.metrics,r,c)
s(t)&&(i[$l.timingValues]=t)}return i[$l.requestedUrl]=t.url.toString(),i})}(e,t,t=>e.plist.parse(t))}(e,{url:n,signingStyle:TC}).then(e=>({contents:e,metadata:{hintTerm:t,hintsRequestUrl:n}}))}(e,t.term).then(n=>function(e,t,n,r){return Ll.Do("searchHintsFromApiResponse",()=>{const o={targetType:sp,pageInformation:lu(0,0,n),locationTracker:{rootPosition:0,locationStack:[]}},s=l(r,"userTyped")
let c=null
i(s)&&(c=new zN(s,s,null,yE),c.spellCheckEnabled=!0,c.prefixTerm=t,Hn(0,c,o),bt(e,c,o.targetType,o.locationTracker),At(o.locationTracker))
const u=a(r,qO).map(n=>{const r=l(n,VS),s=l(n,"displayTerm"),i=l(n,mv),c=new zN(s,i,null,qO,r)
return c.spellCheckEnabled=!0,c.prefixTerm=t,Hn(0,c,o),bt(e,c,o.targetType,o.locationTracker),At(o.locationTracker),c})
null!=c&&u.unshift(c)
const f=l(r,"ghosting"),d=new JN(u,f),p=ct(e,t,"key",gh,n,{})
return d.pageMetrics.pageFields=Lt(o.pageInformation),d.pageMetrics.addData(p,[Nl.lo.pageEnter]),d})}(e,t.term,n.metadata.hintsRequestUrl,n.contents))})}handlePage(e,t,n,r,o,s,i){i(new Error(Vv))}pageRoute(e){return[]}pageType(){return wk}}(gG,mG)),wG.register(gG,new class extends xF{constructor(){super("DeveloperBuilder")}handlePage(e,t,n,r,o,s,i){const a=function(e,t){const n=Vr(t)
if(!c(n))throw new Error(`Unable to map ${t.build()} to a media api url`)
return new B$(e).forType(ZR).withIds([n]).includingAdditionalPlatforms(K(e)).includingRelationships(Wr(e)).includingAttributes(qr(e)).includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes(we(e)).attributingTo(t.build())}(e,t)
b(e,a).then(t=>Uu(e,t)).then(e=>xF.createFlowAction(e,ak,t)).then(s,i)}pageRoute(e){return[{protocol:R$.https,path:`/${C$.developer}/{id}`},{protocol:R$.https,path:`/${C$.developer}/{developerName}/{id}`},{protocol:R$.https,path:`/{countryCode}/${C$.developer}/{developerName}/{id}`},{protocol:R$.https,path:`/{countryCode}/${C$.artist}/{developerName}/{id}`},{protocol:R$.https,path:`/${C$.store}/${C$.viewArtist}`,query:[b$.id,`${b$.v0}?`]}]}handleShelf(e,t,n,r,o,s){const i=n[Cb],c=JSON.parse(i),a=new B$(e,c.remainingData).includingAdditionalPlatforms(K(e)).includingAttributes(qr(e))
b(e,a).then(t=>function(e,t,n){const r=Vu(e,t.data,n.contentType,n.lockupListOptions)
return r.mergeWhenFetched=!0,r}(e,t,c)).then(o,s)}shelfRoute(e){return[{protocol:R$.internal,path:`/${C$.developer}/${C$.shelf}/{token}`}]}pageType(){return ak}}),wG.register(gG,new class extends xF{constructor(){super("DeveloperHrefBuilder")}handlePage(e,t,n,r,o,s,i){const c=n[b$.href],a=function(e,t){return new B$(e,t).includingAdditionalPlatforms(K(e)).includingAttributes(qr(e)).includingRelationships(Wr(e)).includingMacOSCompatibleIOSAppsWhenSupported().usingCustomAttributes(we(e))}(e,c)
b(e,a).then(t=>Uu(e,t)).then(e=>xF.createFlowAction(e,ak,t)).then(s,i)}pageRoute(e){return[{protocol:R$.internal,path:`/${C$.developer}/${C$.href}`,query:[b$.href]}]}pageType(){return ak}}),wG.register(gG,new class extends GF{constructor(){super("DeveloperRoomBuilder")}pageRoute(e){return[{protocol:R$.internal,path:`/${C$.developer}/${C$.room}/{token}`}]}paginationRoute(e){return[{protocol:R$.internal,path:`${this.paginationPath}`,query:[`${b$.href}`]}]}generatePageRequest(e,t,n){const o=n[Cb],s=JSON.parse(o)
if(r(s))throw new Error(`Unable to map ${t.build()} to a media api url`)
return new B$(e,s.href)}renderPage(e,t,n,r){return Ll.Do(av,()=>{const r=n[Cb],o=JSON.parse(r),s=cu(e,bC,`${o.developerId}_${o.relationshipId}`,t),i=new BF
i.title=o.title,i.metricsPageInformation=s,i.metricsLocationTracker={rootPosition:0,locationStack:[]}
const c=this.pageWithContent(e,t,i)
return c.title=i.title,this.configurePaginationForPage(c,i,t.next),uu(e,c,s),c})}generatePaginationRequest(e,t,n,r){const o=n[b$.href]
return new B$(e,o)}renderPaginatedPage(e,t,n){const r=n,o=this.pageWithContent(e,t,r)
return this.configurePaginationForPage(o,r,t.next),o}configurePaginationForPage(e,t,n){i(n)?(t.url=`${this.paginationUrl}?${b$.href}=${encodeURIComponent(n)}`,e.nextPage=t):e.nextPage=null}}),wG.register(gG,new class extends xF{constructor(e,t){super("AccountController"),t.exportingService("AccountData",{fetchAccountLinks(t){const n=new cB
return n.links[UA]=Au(e,UA),n.links[cI]=Au(e,cI),n.links[cR]=Au(e,cR),n.links[aI]=Au(e,aI),n.links[uI]=Au(e,uI),n.links[AO]=Au(e,AO),n.links[lI]=Au(e,lI),Promise.resolve(n)}})}handlePage(e,t,n,r,o,s,i){i(new Error(Vv))}pageRoute(e){return[]}pageType(){return wk}}(gG,mG)),wG.register(gG,new class extends xF{constructor(e,t){super("PersonalizationTransparencyBuilder"),t.exportingService(od,{fetchGenericAccount:t=>e.required(RF).fetchPage(e,t.url,tB)})}handlePage(e,t,n,r,o,s,i){h(n[b$.enabled])?b(e,function(e){return new B$(e).forType(SP)}(e)).then(t=>Pu(e,t),()=>Pu(e)).then(e=>xF.createFlowAction(e,mb,t)).then(s,i):s(xF.createFlowAction(function(e){const t=[],n=new nB,r=new Wk(e.loc.string("PERSONALIZATION_DESCRIPTION_OPTED_OUT"))
n.addContentItem(new iB(r)),t.push(n)
const o=new nB
return o.addContentItem(new oB(e.loc.string(OP),Iu(lb,mb,!1),aO)),t.push(o),new tB(e.loc.string(Lg),t)}(e),mb,t))}pageRoute(e){return[{protocol:R$.internal,path:`/${C$.account}/${C$.personalizationTransparency}`,query:[b$.enabled]},{path:`${C$.personalizationTransparency}`,query:[b$.enabled]}]}pageType(){return mb}}(gG,mG)),wG.register(gG,new class extends xF{constructor(){super("DynamicUIBuilder")}pageType(){return aS}handlePage(e,t,n,r,o,s,i){const c=new wD(aS)
c.pageUrl=t.toString(),c.referrerUrl=t.build()
const a=new _$
c.pageData=a,s(c)}pageRoute(e){const t=e.bag.dynamicUIRegexStrings,n=[]
for(const e of t)n.push(new RegExp(e,"i"))
return[{regex:n}]}}),wG.register(gG,new class extends xF{constructor(){super("WebUIPageBuilder")}pageType(){return uS}handlePage(e,t,n,r,o,s,i){const c=new wD(uS)
c.pageUrl=t.toString(),s(c)}pageRoute(e){const t=e.bag.webViewRegexStrings,n=[]
for(const e of t)n.push(new RegExp(e,"i"))
return[{regex:n}]}}),wG.register(gG,new class extends xF{constructor(){super("FinancePageBuilder")}pageType(){return wk}handlePage(e,t,n,r,o,s,i){const c=new wD(lb)
c.pageUrl=t.toString(),s(c)}pageRoute(e){const t=e.bag.financeUIRegexStrings,n=[]
for(const e of t)n.push(new RegExp(e,"i"))
return[{regex:n}]}}),wG.register(gG,new class extends xF{constructor(){super("StorefrontChangeController")}handlePage(e,t,n,r,o,s,i){const c={url:t.toString(),signingStyle:TC}
e.network.fetch(c).then(e=>{s(null)},i)}pageRoute(e){return[{protocol:R$.https,path:`/${C$.store}/${C$.resetAndRedirect}`}]}pageType(){return wk}}),wG.register(gG,new class extends xF{constructor(){super("ShowAccountPageBuilder")}pageType(){return wk}handlePage(e,t,n,r,o,s,i){let c,a=[]
{c=ZP
const e=new wD(mb)
e.presentationContext=mC,e.animationBehavior=gb,a=[e]}const u=new gD(c)
u.actions=a,s(u)}pageRoute(e){return[{hostName:`${v$.showAccountPage}`},{hostName:`${v$.showPurchasesPage}`}]}}),wG.register(gG,new class extends xF{constructor(){super("ShowSubscriptionPageBuilder")}pageType(){return wk}handlePage(e,t,n,r,o,s,i){s(new wD(lb,aB))}pageRoute(e){return[{hostName:`${v$.showSubscriptionsPage}`}]}}),wG.register(gG,new class extends xF{constructor(){super("ShowUpdatesPageBuilder")}pageType(){return wk}handlePage(e,t,n,r,o,s,i){const c=new gD(ZP)
if(e.client.deviceType!==Sk){const e=new wD(mb)
e.presentationContext=mC,e.animationBehavior=gb,c.actions=[e]}s(c)}pageRoute(e){return[{hostName:`${v$.showUpdatesPage}`},{path:"updates"},{path:"{countryCode}/updates"},{query:[`${b$.action}=updates`]}]}}),wG.register(gG,new class extends xF{constructor(){super("TabSelectionBuilder")}pageType(){return wk}handlePage(e,t,n,r,o,s,i){var c
const a=t.pathComponents(),u=a.length-1
let l,f
l=u>=0?a[u]:t.query[Cv],null!=l&&this.currentDeviceSupportsUrlAction(e,l)&&(f=new gD(l),f.popToRoot=null!==(c=t.query.popToRoot===$v)&&void 0!==c&&c),void 0===f&&(f=new gD(Dv)),s(f)}pageRoute(e){const t=[Dv,lO,Pk,eR,WC,DP,NP,LP,rS,pk],n=[]
for(const e of t){const t=`${b$.action}=${e}`,r=`${e}`
n.push({query:[t]}),n.push({path:r}),n.push({path:`{countryCode}/${r}`})}return n}currentDeviceSupportsUrlAction(e,t){return!![Dv,Pk,lO,pk,Rb].includes(t)}}),wG.register(gG,new class extends xF{constructor(){super("PassbookBuilder")}pageType(){return wk}handlePage(e,t,n,r,o,s,i){const c=this.assemblePassbookRoomURL(e,t).build()
e.required(RF).fetchAction(e,c,o).then(s,i)}pageRoute(e){return[{query:[`${b$.action}=passbook`]}]}assemblePassbookRoomURL(e,t){let n=e.bag.passbookMainURL
return null!=n&&typeof n===Ik||(n="https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewFeature?id=717384713&mt=8"),new sN(n)}}),wG.register(gG,new class extends xF{constructor(){super("LibraryLink")}pageType(){return wk}handlePage(e,t,n,r,o,s,i){const c=`https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewGenre?id=${t.query.g}&mt=8`
e.required(RF).fetchAction(e,c,o).then(s,i)}pageRoute(e){return[{query:[`${b$.action}=library-link`]}]}}),wG.register(gG,new class extends xF{constructor(){super("ContentLink")}pageType(){return ak}handlePage(e,t,n,o,i,c,a){r(l(n,b$.path))?a(new Error(`Unhandled search url: ${t}`)):e.network.fetch({url:t.build(),method:UR}).then(n=>{s(n.url)?e.required(RF).fetchAction(e,n.url,i).then(c,a):a(new Error(`Unhandled search url: ${t}`))})}pageRoute(e){return[{hostName:v$.searchItunes,path:"WebObjects/MZContentLink.woa/wa/link",query:[b$.path]}]}}),wG.register(gG,new class extends xF{constructor(){super("LongUrlBuilder")}pageType(){return wk}handlePage(e,t,n,r,o,c,a){const u=t.query[KP]
i(u)?e.network.fetch({url:u,method:UR,signingStyle:TC}).then(t=>{let n
const r=t.headers["Content-Type"]
if(t.ok&&t.redirected&&s(t.url))n=t.url
else{if(t.ok&&u!==t.url)return void c(new BD)
if(t.ok&&i(r)&&-1!==r.toLowerCase().indexOf("text/xml")){const r=w(e.plist.parse(t.body)),o=l(r,"action.kind"),s=l(r,"action.url")
"Goto"===o&&s&&(n=s)}}i(n)?e.required(RF).fetchAction(e,n,o).then(c,a):a(new Error(`Unable to map long url for: ${u}`))},e=>{a(new Error(`Unable to fetch long url: ${u}`))}):a(new Error("Original url is missing when creating deep-link for checkForLongUrl."))}pageRoute(e){return[{query:[`${b$.action}=checkForLongUrl`]}]}}),wG.register(gG,new class extends xF{constructor(){super("WatchCategoryBuilder")}pageType(){return wk}handlePage(e,t,n,r,o,s,i){if(e.client.deviceType!==mk)return void i(new Error(`Unsupported url for current platform: ${t}`))
const c=e.bag.watchAppsGroupingURL
e.required(RF).fetchAction(e,c,o).then(e=>{const t=new gD(Pk)
t.actions=[e],s(t)},i)}pageRoute(e){return[{query:[`${b$.action}=watchCategory`]}]}}),wG.register(gG,new class extends xF{constructor(){super("ExperimentLink")}pageType(){return wk}handlePage(e,t,n,r,o,s,i){const c={url:t.toString()},a=e.network.fetch(c)
a.then(e=>{if(e.status>=200&&e.status<300){const e=new ND(tk)
e.title="You have been enrolled in the AB test",e.message=`Test ${t.query.ab2} is now active on your device.`,e.buttonTitles=["OK"],e.buttonActions=[new gD(_b)],s(e)}else i(new Error(`unexpected response status: ${e.status} from ${e.url}`))}),a.catch(i)}pageRoute(e){return[{protocol:R$.https,hostName:"xp.apple.com",path:"register",query:["ab2"]}]}}),wG.register(gG,new class extends xF{constructor(){super("FallbackActionBuilder")}handlePage(e,t,n,s,i,c,a){(function(e,t,n){const s=t.query[Cv]
switch(s){case mb:const n=new wD(lb)
n.presentationContext=mC,n.animationBehavior=LC
const i=t.query[KP]
return i?n.pageUrl=i:t.query[Ql]?n.pageUrl=sN.fromComponents(null,s,null,{continuation:t.query[Ql]}).toString():n.pageUrl=s,Promise.resolve(n)
case"signup":const c=new wD(lb)
return c.presentationContext=mC,c.animationBehavior=LC,c.pageUrl=function(e){let t=e.bag.createAccountUrl
return(r(t)||typeof t!==Ik)&&(t=nf),new sN(t)}(e).build(),Promise.resolve(c)
case NA:let a,u=[]
{a=ZP
const e=new wD(mb)
e.presentationContext=mC,e.animationBehavior=gb
const t=new wD(ef)
t.animationBehavior=gb,u=[e,t]}const l=new gD(a)
return l.actions=u,Promise.resolve(l)
case XP:const f=t.query[KP]
if(f.length>0){const t={url:f,signingStyle:TC}
return e.network.fetch(t),Promise.resolve(new BD)}return Promise.reject(new Error("Original url is missing when creating deep-link for checkForPreorders."))
case cR:const d=new wD(lb)
d.presentationContext=mC,d.animationBehavior=LC
const p=new sN(s)
return t.query[aR]&&t.query[aR].length>0&&p.param(b$.code,t.query[aR]),d.pageUrl=p.build(),Promise.resolve(d)
case tS:const h=new wD(lb)
return h.presentationContext=mC,h.animationBehavior=LC,h.pageUrl=s,Promise.resolve(h)
case tf:const w=new wD(lb)
return w.presentationContext=mC,w.animationBehavior=LC,w.pageUrl="charity",Promise.resolve(w)
case Rb:let g=t.query[nS]
if(g||(g=t.query.q),g&&g.length>0){if(g=g.replace(/\+/g," ").trim(),o(g))return Promise.reject(new Error("Empty search term."))
const t=C(e,Fu(e,{term:g,origin:QP})).toString(),n=new zN(g,g,t,QP),r=new wD(Rb)
return r.pageData=n,Promise.resolve(r)}{const e=new gD(Rb)
return Promise.resolve(e)}}return Promise.reject(new Error(`FlowAction was not able to be created for this action URL: ${t}`))})(e,t).then(c,a)}pageRoute(e){return[{query:[`${b$.action}=account`]},{query:[`${b$.action}=signup`]},{query:[`${b$.action}=purchased`]},{query:[`${b$.action}=checkForPreorders`]},{query:[`${b$.action}=redeem`]},{query:[`${b$.action}=gift`]},{query:[`${b$.action}=donate`]},{query:[`${b$.action}=search`]}]}pageType(){return wk}}),wG.register(gG,new class extends xF{constructor(){super("MultiplexingBuilder")}pageType(){return wk}handlePage(e,t,n,r,o,s,i){const c=new B$(e).forType(V_).withIds([n.id])
b(e,c).then(t=>this.actionFromMultiplexResponse(e,t)).then(s,i)}pageRoute(e){return[{protocol:R$.https,path:"WebObjects/MZStore.woa/wa/viewFeature",query:[b$.id]}]}actionFromMultiplexResponse(e,t){const n=d(t,"results.target"),r=d(t,"results.target-link")
return n?this.targetDataToAction(e,n):r?this.targetLinkDataToAction(r):null}targetDataToAction(e,t){const n=l(t,e_)
if(!n)return null
const r=Gr(e,n)
return e.required(RF).fetchAction(e,r,null)}targetLinkDataToAction(e){const t=l(e,Ek),n=new sN(t),r=this.addProtocolToURLIfNeeded(n).toString()
return Promise.resolve(new TD(r,!1))}addProtocolToURLIfNeeded(e){return e.protocol||(e.protocol=kP),e}}),wG.register(gG,new class extends xF{constructor(){super("GameCenterProfileLinkController")}defaultTab(e){return pk}pageType(){return wk}handlePage(e,t,n,r,o,s,i){let c=!1
if(e.host.clientIdentifier===CN)c=!0
else for(const t of e.bag.tabsStandard)if("ocelot"===l(t,"id")){c=!0
break}const a=new gD(c?pk:lO),u=n[b$.id]||"GameCenter.localPlayer"
a.actions.push(new qD(u)),s(a)}pageRoute(e){return[{identifier:Kg,path:`/${C$.gameCenterProfile}`,query:[`${b$.id}?`]}]}}),wG.register(gG,new class extends xF{constructor(e,t){super("MSOBuilder"),t.exportingService("MSOData",{fetchProviderData(t){const n=t.providerAdamId,r=new B$(e).forType(XI).withIds([n])
return b(e,r).then(t=>function(e,t){return Ll.Do("msoProviderDataFromData",()=>{const n=$(t),r=y(n,_k),o=y(n,Ek),s=function(e,t){return Ll.Do("msoProviderArtworkFromData",()=>{const n=T(t,"editorialArtwork.storeFlowcase")
if(n)return ga(e,n,{useCase:3})
const r=T(t,nk)
return ga(e,r,{useCase:3})})}(e,n)
s&&(s.crop="sr")
const i=function(e,t){const n=T(t,FI)
return n?ga(e,n,{useCase:20}):null}(e,n)
return new ZB(r,o,s,i)})}(e,t))},fetchPage(t){if(r(t.providerAdamId)||r(t.subscribedChannelIds))return e.required(RF).fetchPage(e,t.url,uD)
{const n=Yu(e,t.providerAdamId)
return b(e,n).then(n=>{const r=function(e){return Ll.Do("msoAppsFromResponse",()=>{const t=$(e),n=ce(t,$P),r={}
for(const e of n)r[ie(e,sk).id]=A(e,"channelNames")
const o=ce(t,Pk).map(e=>e.id)
return new XB(r,o)})}(n),o=function(e,t){const n=e.appsToAlwaysShow
for(const r of Object.keys(e.apps)){const o=e.apps[r]
for(const e of o)if(-1!==t.indexOf(e)){n.push(r)
break}}return n}(r,t.subscribedChannelIds)
return ju(e,n,o)})}}})}handlePage(e,t,n,r,o,s,i){const c=function(e){const t=e[$$]
return t?t.split(","):[]}(n),a=t.removeParam($$),u=function(e,t){return Yu(e,Vr(t))}(e,a)
b(e,u).then(t=>ju(e,t,c)).then(e=>xF.createFlowAction(e,bS,t)).then(s,i)}pageRoute(e){return[{protocol:R$.https,path:`/{countryCode}/${C$.mso}/{appName}/{id}`,query:[`${$$}?`]},{protocol:R$.https,path:`/${C$.mso}/{providerName}/{id}`,query:[`${$$}?`]},{protocol:R$.https,path:`/{countryCode}/${C$.mso}/{id}`,query:[`${$$}?`]},{protocol:R$.https,path:`/${C$.mso}/{id}`,query:[`${$$}?`]},{protocol:R$.https,path:`/${C$.mso}`,query:[b$.id,`${$$}?`]},{protocol:R$.https,path:`{countryCode}/${C$.mso}`,query:[b$.id,`${$$}?`]}]}handleShelf(e,t,n,r,o,s){const i=n[Cb],c=JSON.parse(i),a=new B$(e,c.remainingContent).includingAdditionalPlatforms(K(e)).includingAttributes([Qb,Zb,Vb])
b(e,a).then(t=>function(e,t,n){const r=x(t),o=n
o.remainingContent=[]
const s={lockupOptions:{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},artworkUseCase:wa(0,n.preferredShelfContentType)},contentUnavailable:function(e,t){return o.remainingContent=He(0,o.remainingContent,t),o.remainingContent.push(r[t]),!1}},i=new XL(n.preferredShelfContentType)
return i.shouldFilterApps=n.shouldFilter,i.items=ia(e,r,s),i.mergeWhenFetched=!0,i.url=zu(o),i}(e,t,c)).then(o,s)}shelfRoute(e){return[{protocol:R$.internal,path:`/${C$.mso}/${C$.shelf}/{token}`}]}pageType(){return bS}}(gG,mG)),wG.register(gG,new class extends xF{constructor(e,t){super("InAppPurchaseInstallController"),t.exportingService(em,{fetchInstallPage:t=>e.required(RF).fetchPage(e,t.url,lD),fetchInstallPageAction:e=>new Promise((t,n)=>{const r=new wD(KI)
r.pageUrl=Zc(0,e.id,e.parentId),t(r)})})}handlePage(e,t,n,r,o,s,i){const c=n[b$.id],a=n[k$.inAppPurchaseId],u=new B$(e).forType(Kv).withIds([a])
b(e,u,{}).then(t=>{const n=function(e,t,n){const r={pageId:n||"",pageType:"IAPInstallPage",parentId:Ze(t)}
return new Xx(r)}(0,c,a),r=$(t)
let o
const s={metricsOptions:{pageInformation:n,locationTracker:{rootPosition:0,locationStack:[]}},artworkUseCase:1}
a&&r&&(o=Qc(e,r,s),o.theme=rk)
const i=ie(r,sk)
let u
c&&i&&(u=Xc(e,i,s))
const l=new lD
l.isComplete=!0,l.lockup=o,l.parentLockup=u
const f=Ut(e,r)
return l.preInstallOfferDescription=Bc(e,f),function(e,t,n){uu(e,t,n)}(e,l,n),l}).then(e=>xF.createFlowAction(e,KI,t)).then(s,i)}pageRoute(e){return[{protocol:R$.internal,path:`/${C$.product}/${C$.install}`,query:[`${b$.id}`,`${k$.inAppPurchaseId}?`]}]}pageType(){return KI}}(gG,mG)),wG.register(gG,new class extends GF{constructor(){super("RoomBuilder")}generatePageRequest(e,t,n){let r=t.query[b$.featuredContentId]
if(this.isValidRoomId(r)||(r=n.id),!this.isValidRoomId(r))throw new Error(`Unable to map ${t.build()} to a media api url`)
return new B$(e).forType(rO).includingMacOSCompatibleIOSAppsWhenSupported(!0).withIds([r])}prepareRequest(e,t,n,r){super.prepareRequest(e,t,n,r),t.includingMacOSCompatibleIOSAppsWhenSupported(!0)}renderPage(e,t,n,r){return Ll.Do(av,()=>{const n=$(t),r=se(n,ck),o=cu(e,bC,n.id,t),s=new BF
s.remainingContent=r.data,s.url=this.paginationUrl,s.shouldFilter=!P(n,Fy),s.metricsPageInformation=o,s.metricsLocationTracker={rootPosition:0,locationStack:[]}
const i=y(n,EC)
s.preferredShelfContentType=this.preferredShelfStyleForFcKind(Number(i)),s.clientIdentifierOverride=so(0,n),s.title=y(n,zR)
const c=this.pageWithContent(e,r,s)
return c.title=s.title,uu(e,c,o),c})}pageRoute(e){return[{protocol:R$.https,path:`/${C$.store}/${C$.room}`,query:[b$.featuredContentId]},{protocol:R$.https,path:`/${C$.storeElements}/${C$.recommendationsSeeAll}`},{protocol:R$.https,path:"{apiVersion}/editorial/{countryCode}/rooms/{id}"},{protocol:R$.https,path:"/{countryCode}/collection/today-view-widgets",query:[b$.featuredContentId]},{protocol:R$.https,path:"/{countryCode}/collections/id{id}"}]}isValidRoomId(e){return c(e)}preferredShelfStyleForFcKind(e){return null==e?null:431===e?Wy:null}}),wG.register(gG,new class extends GF{constructor(){super("RecommendationRoomBuilder")}generatePageRequest(e,t,n){const r=Vr(t),o=n[b$.grouping]
if(!this.isValidId(r))throw new Error(`Unable to map ${t.build()} to a media api url. Missing id.`)
if(!this.isValidId(o))throw new Error(`Unable to map ${t.build()} to a media api url. Missing grouping.`)
return new B$(e).forType(UI).withIds([r]).addingQuery(UO,o).includingMacOSCompatibleIOSAppsWhenSupported(!0)}renderPage(e,t,n){return Ll.Do(av,()=>{const r=$(t),o=se(r,ck),s=n[b$.grouping],i=cu(e,bC,`${r.id}-${s}`,t),c=new BF
c.remainingContent=o.data,c.url=this.paginationUrl,c.shouldFilter=!P(r,Fy),c.metricsPageInformation=i,c.metricsLocationTracker={rootPosition:0,locationStack:[]},c.title=y(r,_k)
const a=this.pageWithContent(e,o,c)
return a.title=c.title,uu(e,a,i),a})}pageRoute(e){return[{protocol:R$.https,path:`/{countryCode}/${C$.appsForYou}/{title}/{id}`,query:[b$.grouping]},{protocol:R$.https,path:`/{countryCode}/${C$.appsForYou}/{id}`,query:[b$.grouping]},{protocol:R$.https,path:`/${C$.appsForYou}/{title}/{id}`,query:[b$.grouping]},{protocol:R$.https,path:`/${C$.appsForYou}/{id}`,query:[b$.grouping]}]}isValidId(e){return!(r(e)||isNaN(e))}}),wG.register(gG,new class extends VF{constructor(){super("AccessoryProtocolRoomBuilder")}pageInformation(e,t,n){return new Xx({pageType:bC,pageId:"accessory",page:`${bC}_accessory`})}generatePageRequest(e,t,n){const r=[]
for(const e of Object.keys(t.query))e.startsWith("id")&&r.push(t.query[e])
return this.requestWithFilter(e,"deviceProtocol",r.join(","))}pageRoute(e){return[{query:[`${b$.action}=accessoryLookup`]}]}}),wG.register(gG,new class extends xF{constructor(){super("CollectionDeepLinkingController")}pageType(){return ak}pageRoute(e){return[{protocol:R$.https,path:"{countryCode}/{tab}/recommendations",query:[`${b$.useCaseShort}`,`${b$.collectionId}?`,`${b$.seedId}?`]}]}handlePage(e,t,n,r,o,s,c){const a=n[C$.tab],u=n[b$.useCaseShort],l=n[b$.collectionId],f=n[b$.seedId]
let d=new B$(e).forType(zA).addingQuery(_k,a).addingQuery("filter[recoUseCase]",u).includingRelationships([ck]).includingAdditionalPlatforms(K(e))
d.enablingFeature(VI),i(l)&&(d=d.addingQuery(ig,l)),i(f)&&(d=d.addingQuery(Bf,f)),b(e,d).then(n=>{const r=y($(n),Jy);(i(r)?this.makeODPPage(e,u,r,n):this.makeCollectionPage(e,u,n)).then(e=>{let n
const r=this.createTabChangeActionForRequest(a),o=new wD(ak,t.build())
o.pageData=e,null!=r?(r.actions=[o],n=r):n=o,s(n)}).catch(e=>{c(new Error(`CollectionDeeplinkingController: Failed to create GenericPage for useCase: ${u}`))})}).catch(e=>{c(new Error(`CollectionDeeplinkingController: Failed to fetch Media API data for useCase: ${u}`))})}makeODPPage(e,t,n,r){return new Promise((o,s)=>{qn(e,n,ak).then(n=>{const s=$(r),i=new BF
i.title=y(s,zR),i.metricsPageInformation=cu(e,bC,t,r),i.metricsPageInformation.recoMetricsData=ot(U(r),null,n.recoMetrics),i.shouldFilter=!1,i.metricsLocationTracker={rootPosition:0,locationStack:[]}
const c=this.makePage(e,i,n.dataContainer)
o(c)}).catch(e=>{s(e)})})}makeCollectionPage(e,t,n){const r=$(n),o=se(r,ck),s=new BF
return s.url=this.paginationUrl,s.title=y(r,zR),s.metricsPageInformation=cu(e,bC,t,n),s.metricsPageInformation.recoMetricsData=U(n),s.shouldFilter=!1,s.metricsLocationTracker={rootPosition:0,locationStack:[]},Promise.resolve(this.makePage(e,s,o))}makePage(e,t,n){return Ll.Do("makePage",()=>{const r=t.preferredShelfContentType||UF,o=new XL(r),s={id:null,kind:null,softwareType:null,targetType:zb,title:t.title,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,idType:GC,recoMetricsData:U(n)}
Bn(0,o,s),pt(s,t.title),o.isHorizontal=!1,o.shouldFilterApps=t.shouldFilter
const i=x(n)
t.remainingContent=[],o.items=ia(e,i,{contentUnavailable:(e,n)=>(t.remainingContent=He(0,i,n),!0),lockupOptions:{metricsOptions:{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker},clientIdentifierOverride:t.clientIdentifierOverride,artworkUseCase:wa(0,r)}})
const c=new uD([o])
return c.title=t.title,t.remainingContent.length&&(c.nextPage=t),c})}createTabChangeActionForRequest(e){const t=e
return new Set([Dv,Pk,lO,Rb,ZP,pk,eR,WC,DP,NP,LP,rS,mb]).has(t)?new gD(t):null}handleShelf(e,t,n,r,o,s){s(new Error(Qg))}shelfRoute(e){return[]}paginationRoute(e){return[{protocol:R$.internal,path:`${this.paginationPath}`}]}handlePagination(e,t,n,r,o,s,i){Ll.Do(`${this.builderClass}.handlePagination`,()=>{const n=o,r=new B$(e,n.remainingContent)
if(!r)return void i(new Error(`Could not construct media API request for: ${t}`))
r.includingAdditionalPlatforms(K(e))
const c=[Qb,Zb,qv,tb]
e.appleSilicon.isSupportEnabled&&c.push(Pb),r.includingAttributes(c),r.usingCustomAttributes(we(e)),r.attributingTo(t.build()),b(e,r).then(t=>{s(this.makePage(e,n,t))}).catch(e=>{i(e)})})}}),wG.register(gG,new class extends xF{constructor(e,t){super("UserEngagementController"),t.exportingService("AppStoreEngagement",{fetchEngagementTask(t){const n=t.eventString,r=t.featuresDictionary
if(!s(r))return Promise.reject("Received non-defined engagement features.")
const o=s(t.previouslyDisabledFeatures)?t.previouslyDisabledFeatures:[],i=function(e,t,n,r){switch(t){case"arcadeTabDidComeOnScreen":case"arcadePageDidAppear":return function(e,t,n){const r=[]
for(const e of JB)if(e in t){const t=new zD(e,!1)
r.push(t)}for(const e of JB){if(n.includes(e))continue
const o=t[e]
if(s(o)){const t=Wu(0,e,o)
r.push(t)
break}}if(r.length>0)return new O$(new AD(r))
{const e=new BD
return new O$(e)}}(0,n,r)
case"didBecomeArcadeTrialEligible":if(!e.bag.enableArcadeTrialEligibleBadging)return new O$(new BD)
if(r.includes(zB))return new O$(new BD)
const t=new zD(zB,!0),o=new mD(pk,e.loc.decimal(1)),i=new AD([t,o])
return new O$(i)
case"didSubscribeToArcade":return function(e){const t=[]
for(const e of JB){const n=new zD(e,!1)
t.push(n)}const n=new AD(t)
return new O$(n)}()
case"didBecomeSubscribed":if(!s(n[zB]))return new O$(new BD)
const c=new zD(zB,!1)
return new O$(c)
case"didBecomeNonSubscribed":return new O$(new BD)
default:return null}}(e,n,r,o)
return s(i)?Promise.resolve(i):Promise.reject("Did not receive a valid engagement event.")},fetchBadgingTask(t){var n
const r=function(e,t,n,r){if(!JB.includes(t))return null
let o=null
if(n&&!r.includes(t)){const t=e.loc.decimal(1)
o=new mD(pk,t)}else n||(o=new mD(pk,null))
return new O$(o)}(e,t.identifier,t.isEnabled,null!==(n=t.previouslyDisabledFeatures)&&void 0!==n?n:[])
return s(r)?Promise.resolve(r):Promise.reject(new Error(`fetchBadgingTask called with unsupported identifier: ${t.identifier}, featuresDictionary: ${t.featuresDictionary}, previouslyDisabledFeatures: ${t.previouslyDisabledFeatures}`))}})}handlePage(e,t,n,r,o,s,i){i(new Error(Vv))}pageRoute(e){return[]}pageType(){return wk}}(gG,mG)),wG.register(gG,new class extends xF{constructor(e,t){super("WidgetController"),t.exportingService("WidgetData",{fetchTodayWidget(t){let n
switch(t.family){case 1:n=bg
break
case 2:n=_P
break
default:n=QO}let c=null
return typeof t.originalResponseHash!==Ev&&null!==t.originalResponseHash&&""!==t.originalResponseHash&&typeof t.originalResponseDate!==Ev&&null!==t.originalResponseDate&&""!==t.originalResponseDate&&(c={hash:t.originalResponseHash,creationDate:t.originalResponseDate}),function(e,t,n,c,a){return new Promise((n,u)=>{if(!function(e,t,n,r){return!r||gs(e,e.bag.todayWidgetLivePreviewRolloutRate)}(e,0,0,c))return void u("No live preview will be shown due to losing the todayWidgetLivePreviewRolloutRate lottery.")
const l=new pG,d=e=>u(e)
b(e,l.make(e)).then(c=>{const u=f(c,$l.contentMaxAge),l=function(e,t){return r(e)||r(e.results)||o(e.results.data)?(t("Unable to create primary module; no results or data."),null):o(e.results.data[0].contents)?(t("Unable to create primary module; no contents."),null):e.results.data[0].contents.length===e.results.data[0].contents.filter(e=>S(e)).length?(t("Unable to create primary module; none of the cards are hydrated."),null):{label:"",title:"",meta:{},contents:e.results.data[0].contents}}(c,d)
if(null===l)return
const p=function(e){const t={label:"",title:"",meta:{},contents:[]}
if(r(e)||r(e.results)||o(e.results.data))return t
const n=e.results.data.slice(1)
return 0===n.length?t:{label:"",title:"",meta:{},contents:n.map(e=>e.contents).reduce((e,t)=>e.concat(t))}}(c),h=function(t,n,r,o,s){const c=(a=JSON.stringify(t.contents.concat(n.contents).map(e=>e.id))+(null!==r?r.toString():""),e.cryptography.hash("sha256",a))
var a
return null!==s&&i(s.hash)&&i(s.creationDate)&&s.hash===c?s:{hash:c,creationDate:(new Date).toUTCString()}}(l,p,u,0,a),w=function(e,t,n,r){if(null!==t){const n=new Date(e.creationDate)
return n.setSeconds(n.getSeconds()+t),n}return function(e,t){const n=new Date,r=new Date
r.setHours(e),r.setMinutes(0)
const o=Math.floor(Math.random()*t*2)-t
return r.setTime(r.getTime()+60*o*1e3),r<n&&r.setDate(r.getDate()+1),r}(n,r)}(h,u,e.bag.todayWidgetInvalidationHour,e.bag.todayWidgetInvalidationJitterMinutes),g=Al(e,l),m=Al(e,p),T=function(e,t,n,i,c,a,u,l){if(r(t))return l("Unable to create a TodayWidgetContainer; primaryModule is null."),null
const f=yl(e,t,i,!0,l)
if(0===f.length)return null
const d=yl(e,n,i,!1,null),p=function(e,t,n,r,i,c){const a=H(t),u=q(a,n),l={}
for(let e=0;e<r.length;e++){const t=e%r.length*2
l[r[e].storyId]=c===_P?i.slice(t,t+2):[]}const f=function(e,t,n){return function(e,r){const o=[],s=[]
return e.forEach(e=>{return void 0!==(r=e).eventStartDate&&null!==r.eventStartDate&&t<H(r.eventStartDate)&&H(r.eventStartDate)<=n?o.push(e):s.push(e)
var r}),[o,s]}(e)}(r,a,n),d=f[0]
let p=f[1]
const h=[...Array(u)].map(()=>[]),w=[...Array(u)].map((e,t)=>new Date(a.getTime()+60*t*60*1e3)),g=new Map
r.concat(i).forEach(t=>{if(s(t.eventStartDate)){const n=sn(t.eventBadgeKind,t.eventStartDate,t.eventEndDate)
g[t.storyId]=cn(e,n,t.eventStartDate,t.eventEndDate)}}),d.forEach(e=>{var t
for(let n=((q(a,e.eventStartDate)-1)%(t=r.length)+t)%t;n<h.length&&!(e.eventEndDate<=w[n]);n+=r.length)for(let t=0;t<r.length&&!(h.length<=n+t);t++)if(0===h[n+t].length){h[n+t].push(W(e))
for(const r of l[e.storyId])h[n+t].push(W(r))
break}})
for(let e=0;e<h.length;e++){if(h[e].length>0)continue
const t=w[e]
if(p=p.filter(e=>void 0===e.eventEndDate||null===e.eventEndDate||e.eventEndDate>t),0===p.length)break
const n=p.shift()
p.push(n),h[e].push(W(n))
for(const t of l[n.storyId])h[e].push(W(t))}return h.map((e,t)=>{const n=w[t],r=e.map(e=>{const n=g[e.storyId],r=function(e,t){if(o(t))return null
const n=t.filter(t=>null===t.displayFromDate||t.displayFromDate<=e)
return 0===n.length?null:n.pop()}(w[t],n)
return null!==r?(e.heading=r.displayText,e.eventStartDate=r.countdownToDate):e.eventStartDate=null,e})
return new lG(r,n)})}(e,new Date(a.creationDate),u,f,d,i)
return new uG(p,u,a.creationDate,a.hash)}(e,g,m,t,0,h,w,d)
null!==T&&n(T)}).catch(e=>{u(e)})})}(e,n,t.isSnapshot,t.isPreview,c)}})}handlePage(e,t,n,r,o,s,i){i(new Error(Vv))}pageRoute(e){return[]}pageType(){return wk}}(gG,mG)),wG.register(gG,new class extends xF{constructor(e,t){super("MetricsLinterController"),t.exportingService("Metrics",{lintEvent(t){const o=function(e){return null===Ax&&(Ax=new hx({defaultTopic:nD,buildType:e.client.buildType,jsVersion:e.props.asString("version"),buyDecorator:Tx,isLoggingEnabled:!0,bagProvider:(t,o)=>{const s=e.bag.metricsConfiguration
if(!r(o)){const e=n(s,[o,t])
if(!r(e))return e}return n(s,t)}})),Ax}(e).makeEvent(e,t.fields)
return Promise.resolve(o)}})}handlePage(e,t,n,r,o,s,i){i(new Error(Vv))}pageRoute(e){return[]}pageType(){return wk}}(gG,mG)),wG.register(gG,new class extends xF{constructor(e,t){super("CompleteCollectionController"),t.exportingService("CMCPersonalizationData",{fetchPersonalizedOfferContext(t){const n=t.offerToken.offerAction,o=t.offerToken.offerDisplayProperties
if(!n||!o)return Promise.reject(new Error("Invalid offerToken for personalized offer fetch."))
const s=n.adamId,i={"Content-Type":_O},c={url:e.bag.buyButtonMetadataURL,method:SC,headers:i,body:"ids="+s,signingStyle:TC}
return e.network.fetch(c).then(t=>{if(!t.ok)throw Error(`Bad Status code ${t.status} for ${c.url}`)
const i=d(JSON.parse(t.body),s)
let u=null,f=null
const p=function(e,t){return Ll.Do("personalizedOfferTypeFromBuyButtonMetadata",()=>{const e=a(t,WO)
if(0===e.length)return null
for(const t of e){const e=l(t,nv)
if(e)return e}return cb})}(0,i)
if(r(p))throw new Error("fetchPersonalizedOfferContext: Failed to determine offer type from buyButtonMetadata")
if(p!==cb){let t=iv
u=function(e,t,n,o){return Ll.Do("personalizedCMCOfferActionFromBuyButtonMetadata",()=>{const o=a(t,WO)
if(0===o.length)return null
let s,i=null
for(const e of o)switch(s=l(e,nv),s){case A_:case NA:i=e
break
default:i=null}if(!i)return null
let c=l(i,iS)
if(s===A_&&r(c))return Ll.bm(Hb,Ik,tE),null
c||(c="")
const u=n.purchaseConfiguration,f=new bk(c,u.vendor,u.appName,u.bundleId,u.appPlatforms,u.isPreorder,u.excludeAttribution,u.metricsPlatformDisplayStyle)
f.pageInformation=u.pageInformation
const d=Wt(e,i,n.adamId,f,!1)
return function(e,t,n,r){const o=n.purchaseConfiguration.pageInformation
let s
for(const e of n.actionMetrics.data)if(s=a(w(e.fields),pR),s)break
St(e,t,t.adamId,false,o,s,!1)}(e,d,n),d})}(e,i,n)
let s=null
switch(p){case NA:t=rR,s=e.loc.string("BUNDLE_OFFER_BUTTON_TITLE_PURCHASED")
break
case A_:(r(u.price)||0===u.price)&&(s=e.loc.string(y_))}f=function(e,t,n,o,s){return r(t)?null:Ll.Do("personalizedCMCDisplayPropertiesFromBuyButtonMetadata",()=>{const r=new kk(n,t.adamId,s),i=Vt(0,t)
r.isFree=i
let c=null
c=i?t.title:t.priceFormatted,r.titles[ok]=c
const a=o.hasInAppPurchases,u=o.hasExternalPurchases
if(r.hasInAppPurchases=a,r.hasExternalPurchases=u,u){const t=e.loc.string(Hh)
r.subtitles[ok]=t}else if(a){const t=e.loc.string(qh)
r.subtitles[ok]=t}return r.contentRating=o.contentRating,r})}(e,u,sk,o,t),s&&(f.titles[ok]=s)}const h=Kt(e,u,!1)
return new Dk(p,h,f)})}})}handlePage(e,t,n,r,o,s,i){i(new Error(Vv))}pageRoute(e){return[]}pageType(){return wk}}(gG,mG)),wG.register(gG,new class extends xF{constructor(e,t){super("PurchaseDecorationController"),t.exportingService(Bg,{decoratePurchase(t){const n=t.intent
let r=l(n,"token.buyParams")
const c=l(n,"overrideBuyParams")
s(c)&&(r=function(e,t){const n=new mx(e),r=new mx(t),s=n.get(yx.placementId,null)
i(s)&&o(r.get(yx.placementId,null))&&r.set(yx.placementId,s,null)
const c=n.get(yx.containerId,null)
return i(c)&&o(r.get(yx.containerId,null))&&r.set(yx.containerId,c,null),r.toString()}(r,c)),r=$t(e,l(n,rb),r,p(n,Gg),u(n,Vg),l(n,Hg),l(n,qg),l(n,bP),d(n,MC),d(n,Wg),p(n,Yg),l(n,jg),l(n,zg),l(n,Jg))
const f=a(n,"token.appPlatforms"),w=f&&f.length&&f.length>0&&f.indexOf("tv")>=0,g=u(n,"token.isHalva")||u(n,"token.isMacOSCompatibleIOSApp"),m=ka(0,e.client.deviceType,g).some(e=>-1!==f.indexOf(e)),T=g&&!1,A=l(n,"instalationType"),y=A===Rh,E=A===fd,P=u(n,"token.isPreorder"),I=!(P||w&&!m),_=l(n,bP)===Ok&&e.client.deviceType!==Ok,S=l(n,"token.preflightPackageUrl"),O={...d(n,"token.additionalHeaders",{}),...d(n,"additionalHeaders",{})},R={adamId:l(n,rb),buyParams:r,vendor:l(n,"token.vendor"),appName:l(n,"token.appName"),bundleId:l(n,"token.bundleId"),appPlatforms:f,additionalHeaders:O,isUpdate:y,isRedownload:E,isPreorder:P,createsJobs:I,preflightPackageUrl:S,isArcadeApp:h(n,"token.isArcadeApp"),forceWatchInstall:_,isMacOSCompatibleIOSApp:T}
return Promise.resolve(R)}})}handlePage(e,t,n,r,o,s,i){i(new Error(Vv))}pageRoute(e){return[]}pageType(){return wk}}(gG,mG)),wG.register(gG,new class extends xF{constructor(e,t){super("ArcadePurchaseDecorationController"),t.exportingService(Bg,{decorateArcadePurchase(t){const n=p(t.intent,Cb)
let r=n.buyParams
r=$t(e,l(t.intent,rb),r,p(t.intent,Gg),u(t.intent,Vg),l(t.intent,Hg),l(t.intent,qg),l(t.intent,bP),d(t.intent,MC),d(t.intent,Wg),p(t.intent,Yg),l(t.intent,jg),l(t.intent,zg),l(t.intent,Jg))
const o=new mx(r),s={product:l(t.intent,ob)||n.productIdentifier,adamId:l(t.intent,rb),buyParams:o.toEncodedMap()}
return Promise.resolve(s)}})}handlePage(e,t,n,r,o,s,i){i(new Error(Vv))}pageRoute(e){return[]}pageType(){return wk}}(gG,mG)),wG.register(gG,new class extends xF{constructor(e,t){super("CancelPreorderController"),t.exportingService("Preorder",{cancelPreorder(t){const n={url:`${e.bag.getCancellablePreorderItemsSrv}?&includeAllLockups=false&includeNonBookCancellablePreorderItems=true${t.isArcade?"&preorderItemType=ArcadeApp":""}`,signingStyle:TC}
return e.network.fetch(n).then(n=>{const r=JSON.parse(n.body)
if(0!==r.status)return Promise.resolve("noAuthorization")
const o=r.cancellablePreorderItems.filter(e=>e.preorderAdamId.toString()===t.adamId)
if(null===o||0===o.length)return Promise.reject("Expected AdamID was missing. This AdamId might have not been preordered before, or the isArcade flag may be incorrect.")
if(o.length>1)return Promise.reject(`Multiple matches for adamId ${t.adamId}, when only one is expected.`)
const s=o[0].preorderId,i={url:e.bag.cancelPreorderItemSrv,method:SC,signingStyle:TC}
return i.body=`preorderId=${s}`,e.network.fetch(i).then(e=>{if(!e.ok)throw Error(`Bad Status code ${e.status} for ${i.url}`)
return 0!==JSON.parse(e.body).status?Promise.resolve("unableToCancel"):Promise.resolve("canceled")}).catch(e=>Promise.reject(e))}).catch(e=>Promise.reject(e))}})}handlePage(e,t,n,r,o,s,i){i(new Error(Vv))}pageRoute(e){return[]}pageType(){return wk}}(gG,mG)),wG.register(gG,new class extends xF{constructor(e,t){super("IconLookupController"),t.exportingService("ContentData",{fetchIconArtwork(t){const n=new B$(e).withIds(t.adamIds).forType(Pk).includingMacOSCompatibleIOSAppsWhenSupported(!0).includingAdditionalPlatforms(K(e))
return b(e,n).then(t=>{const n=x(t),r={}
for(const t of n)r[t.id]=Aa(e,t,{useCase:3})
return r})}})}handlePage(e,t,n,r,o,s,i){i(new Error(Vv))}pageRoute(e){return[]}pageType(){return wk}}(gG,mG))})()})()

//# sourceMappingURL=3c6fb87a6b5afeabde3b.js.map