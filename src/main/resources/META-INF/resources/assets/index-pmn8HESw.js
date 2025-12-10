(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();var Xo="";function Jo(i){Xo=i}function Jc(i=""){if(!Xo){const t=[...document.getElementsByTagName("script")],e=t.find(s=>s.hasAttribute("data-shoelace"));if(e)Jo(e.getAttribute("data-shoelace"));else{const s=t.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(o.src));let r="";s&&(r=s.getAttribute("src")),Jo(r.split("/").slice(0,-1).join("/"))}}return Xo.replace(/\/$/,"")+(i?`/${i.replace(/^\//,"")}`:"")}var ih=Object.defineProperty,Zc=Object.defineProperties,tu=Object.getOwnPropertyDescriptor,eu=Object.getOwnPropertyDescriptors,da=Object.getOwnPropertySymbols,iu=Object.prototype.hasOwnProperty,su=Object.prototype.propertyIsEnumerable,_o=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),zn=i=>{throw TypeError(i)},pa=(i,t,e)=>t in i?ih(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,We=(i,t)=>{for(var e in t||(t={}))iu.call(t,e)&&pa(i,e,t[e]);if(da)for(var e of da(t))su.call(t,e)&&pa(i,e,t[e]);return i},Xs=(i,t)=>Zc(i,eu(t)),c=(i,t,e,s)=>{for(var r=s>1?void 0:s?tu(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&ih(t,e,r),r},sh=(i,t,e)=>t.has(i)||zn("Cannot "+e),ru=(i,t,e)=>(sh(i,t,"read from private field"),t.get(i)),ou=(i,t,e)=>t.has(i)?zn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),nu=(i,t,e,s)=>(sh(i,t,"write to private field"),t.set(i,e),e),au=function(i,t){this[0]=i,this[1]=t},lu=i=>{var t=i[_o("asyncIterator")],e=!1,s,r={};return t==null?(t=i[_o("iterator")](),s=o=>r[o]=n=>t[o](n)):(t=t.call(i),s=o=>r[o]=n=>{if(e){if(e=!1,o==="throw")throw n;return n}return e=!0,{done:!1,value:new au(new Promise(a=>{var l=t[o](n);l instanceof Object||zn("Object expected"),a(l)}),1)}}),r[_o("iterator")]=()=>r,s("next"),"throw"in t?s("throw"):r.throw=o=>{throw o},"return"in t&&s("return"),r},_s=new WeakMap,ws=new WeakMap,xs=new WeakMap,wo=new WeakSet,dr=new WeakMap,Ye=class{constructor(i,t){this.handleFormData=e=>{const s=this.options.disabled(this.host),r=this.options.name(this.host),o=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!s&&!n&&typeof r=="string"&&r.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(a=>{e.formData.append(r,a.toString())}):e.formData.append(r,o.toString()))},this.handleFormSubmit=e=>{var s;const r=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=_s.get(this.form))==null||s.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!r&&!o(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),dr.set(this.host,[])},this.handleInteraction=e=>{const s=dr.get(this.host);s.includes(e.type)||s.push(e.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const s of e)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const s of e)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=i).addController(this),this.options=We({form:e=>{const s=e.form;if(s){const o=e.getRootNode().querySelector(`#${s}`);if(o)return o}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var s;return(s=e.disabled)!=null?s:!1},reportValidity:e=>typeof e.reportValidity=="function"?e.reportValidity():!0,checkValidity:e=>typeof e.checkValidity=="function"?e.checkValidity():!0,setValue:(e,s)=>e.value=s,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const i=this.options.form(this.host);i&&this.attachForm(i),dr.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),dr.delete(this.host),this.options.assumeInteractionOn.forEach(i=>{this.host.removeEventListener(i,this.handleInteraction)})}hostUpdated(){const i=this.options.form(this.host);i||this.detachForm(),i&&this.form!==i&&(this.detachForm(),this.attachForm(i)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(i){i?(this.form=i,_s.has(this.form)?_s.get(this.form).add(this.host):_s.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ws.has(this.form)||(ws.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),xs.has(this.form)||(xs.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const i=_s.get(this.form);i&&(i.delete(this.host),i.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ws.has(this.form)&&(this.form.reportValidity=ws.get(this.form),ws.delete(this.form)),xs.has(this.form)&&(this.form.checkValidity=xs.get(this.form),xs.delete(this.form)),this.form=void 0))}setUserInteracted(i,t){t?wo.add(i):wo.delete(i),i.requestUpdate()}doAction(i,t){if(this.form){const e=document.createElement("button");e.type=i,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",t&&(e.name=t.name,e.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{t.hasAttribute(s)&&e.setAttribute(s,t.getAttribute(s))})),this.form.append(e),e.click(),e.remove()}}getForm(){var i;return(i=this.form)!=null?i:null}reset(i){this.doAction("reset",i)}submit(i){this.doAction("submit",i)}setValidity(i){const t=this.host,e=!!wo.has(t),s=!!t.required;t.toggleAttribute("data-required",s),t.toggleAttribute("data-optional",!s),t.toggleAttribute("data-invalid",!i),t.toggleAttribute("data-valid",i),t.toggleAttribute("data-user-invalid",!i&&e),t.toggleAttribute("data-user-valid",i&&e)}updateValidity(){const i=this.host;this.setValidity(i.validity.valid)}emitInvalidEvent(i){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});i||t.preventDefault(),this.host.dispatchEvent(t)||i?.preventDefault()}},Zr=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),hu=Object.freeze(Xs(We({},Zr),{valid:!1,valueMissing:!0})),cu=Object.freeze(Xs(We({},Zr),{valid:!1,customError:!0}));const Mr=globalThis,En=Mr.ShadowRoot&&(Mr.ShadyCSS===void 0||Mr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pn=Symbol(),fa=new WeakMap;let rh=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Pn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(En&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=fa.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&fa.set(e,t))}return t}toString(){return this.cssText}};const uu=i=>new rh(typeof i=="string"?i:i+"",void 0,Pn),I=(i,...t)=>{const e=i.length===1?i[0]:t.reduce(((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1]),i[0]);return new rh(e,i,Pn)},du=(i,t)=>{if(En)i.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const s=document.createElement("style"),r=Mr.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},ma=En?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return uu(e)})(i):i;const{is:pu,defineProperty:fu,getOwnPropertyDescriptor:mu,getOwnPropertyNames:gu,getOwnPropertySymbols:vu,getPrototypeOf:bu}=Object,to=globalThis,ga=to.trustedTypes,yu=ga?ga.emptyScript:"",_u=to.reactiveElementPolyfillSupport,As=(i,t)=>i,Ji={toAttribute(i,t){switch(t){case Boolean:i=i?yu:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Mn=(i,t)=>!pu(i,t),va={attribute:!0,type:String,converter:Ji,reflect:!1,useDefault:!1,hasChanged:Mn};Symbol.metadata??=Symbol("metadata"),to.litPropertyMetadata??=new WeakMap;let Ni=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=va){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&fu(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:o}=mu(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:r,set(n){const a=r?.call(this);o?.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??va}static _$Ei(){if(this.hasOwnProperty(As("elementProperties")))return;const t=bu(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(As("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(As("properties"))){const e=this.properties,s=[...gu(e),...vu(e)];for(const r of s)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)e.unshift(ma(r))}else t!==void 0&&e.push(ma(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return du(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:Ji).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const o=s.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Ji;this._$Em=r;const a=n.fromAttribute(e,o.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){const r=this.constructor,o=this[t];if(s??=r.getPropertyOptions(t),!((s.hasChanged??Mn)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,o]of s){const{wrapped:n}=o,a=this[r];n!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,o,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};Ni.elementStyles=[],Ni.shadowRootOptions={mode:"open"},Ni[As("elementProperties")]=new Map,Ni[As("finalized")]=new Map,_u?.({ReactiveElement:Ni}),(to.reactiveElementVersions??=[]).push("2.1.1");const An=globalThis,Dr=An.trustedTypes,ba=Dr?Dr.createPolicy("lit-html",{createHTML:i=>i}):void 0,oh="$lit$",Qe=`lit$${Math.random().toFixed(9).slice(2)}$`,nh="?"+Qe,wu=`<${nh}>`,bi=document,Ws=()=>bi.createComment(""),Ys=i=>i===null||typeof i!="object"&&typeof i!="function",Tn=Array.isArray,xu=i=>Tn(i)||typeof i?.[Symbol.iterator]=="function",xo=`[ 	
\f\r]`,ks=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ya=/-->/g,_a=/>/g,hi=RegExp(`>|${xo}(?:([^\\s"'>=/]+)(${xo}*=${xo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wa=/'/g,xa=/"/g,ah=/^(?:script|style|textarea|title)$/i,ku=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),C=ku(1),Jt=Symbol.for("lit-noChange"),st=Symbol.for("lit-nothing"),ka=new WeakMap,pi=bi.createTreeWalker(bi,129);function lh(i,t){if(!Tn(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ba!==void 0?ba.createHTML(t):t}const Cu=(i,t)=>{const e=i.length-1,s=[];let r,o=t===2?"<svg>":t===3?"<math>":"",n=ks;for(let a=0;a<e;a++){const l=i[a];let h,d,u=-1,p=0;for(;p<l.length&&(n.lastIndex=p,d=n.exec(l),d!==null);)p=n.lastIndex,n===ks?d[1]==="!--"?n=ya:d[1]!==void 0?n=_a:d[2]!==void 0?(ah.test(d[2])&&(r=RegExp("</"+d[2],"g")),n=hi):d[3]!==void 0&&(n=hi):n===hi?d[0]===">"?(n=r??ks,u=-1):d[1]===void 0?u=-2:(u=n.lastIndex-d[2].length,h=d[1],n=d[3]===void 0?hi:d[3]==='"'?xa:wa):n===xa||n===wa?n=hi:n===ya||n===_a?n=ks:(n=hi,r=void 0);const m=n===hi&&i[a+1].startsWith("/>")?" ":"";o+=n===ks?l+wu:u>=0?(s.push(h),l.slice(0,u)+oh+l.slice(u)+Qe+m):l+Qe+(u===-2?a:m)}return[lh(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};let Zo=class hh{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let o=0,n=0;const a=t.length-1,l=this.parts,[h,d]=Cu(t,e);if(this.el=hh.createElement(h,s),pi.currentNode=this.el.content,e===2||e===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=pi.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const u of r.getAttributeNames())if(u.endsWith(oh)){const p=d[n++],m=r.getAttribute(u).split(Qe),g=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:g[2],strings:m,ctor:g[1]==="."?$u:g[1]==="?"?zu:g[1]==="@"?Eu:eo}),r.removeAttribute(u)}else u.startsWith(Qe)&&(l.push({type:6,index:o}),r.removeAttribute(u));if(ah.test(r.tagName)){const u=r.textContent.split(Qe),p=u.length-1;if(p>0){r.textContent=Dr?Dr.emptyScript:"";for(let m=0;m<p;m++)r.append(u[m],Ws()),pi.nextNode(),l.push({type:2,index:++o});r.append(u[p],Ws())}}}else if(r.nodeType===8)if(r.data===nh)l.push({type:2,index:o});else{let u=-1;for(;(u=r.data.indexOf(Qe,u+1))!==-1;)l.push({type:7,index:o}),u+=Qe.length-1}o++}}static createElement(t,e){const s=bi.createElement("template");return s.innerHTML=t,s}};function Zi(i,t,e=i,s){if(t===Jt)return t;let r=s!==void 0?e._$Co?.[s]:e._$Cl;const o=Ys(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,e,s)),s!==void 0?(e._$Co??=[])[s]=r:e._$Cl=r),r!==void 0&&(t=Zi(i,r._$AS(i,t.values),r,s)),t}let Su=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??bi).importNode(e,!0);pi.currentNode=r;let o=pi.nextNode(),n=0,a=0,l=s[0];for(;l!==void 0;){if(n===l.index){let h;l.type===2?h=new On(o,o.nextSibling,this,t):l.type===1?h=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(h=new Pu(o,this,t)),this._$AV.push(h),l=s[++a]}n!==l?.index&&(o=pi.nextNode(),n++)}return pi.currentNode=bi,r}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},On=class ch{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=st,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Zi(this,t,e),Ys(t)?t===st||t==null||t===""?(this._$AH!==st&&this._$AR(),this._$AH=st):t!==this._$AH&&t!==Jt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):xu(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==st&&Ys(this._$AH)?this._$AA.nextSibling.data=t:this.T(bi.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Zo.createElement(lh(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(e);else{const o=new Su(r,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=ka.get(t.strings);return e===void 0&&ka.set(t.strings,e=new Zo(t)),e}k(t){Tn(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const o of t)r===e.length?e.push(s=new ch(this.O(Ws()),this.O(Ws()),this,this.options)):s=e[r],s._$AI(o),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},eo=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,o){this.type=1,this._$AH=st,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=st}_$AI(t,e=this,s,r){const o=this.strings;let n=!1;if(o===void 0)t=Zi(this,t,e,0),n=!Ys(t)||t!==this._$AH&&t!==Jt,n&&(this._$AH=t);else{const a=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=Zi(this,a[s+l],e,l),h===Jt&&(h=this._$AH[l]),n||=!Ys(h)||h!==this._$AH[l],h===st?t=st:t!==st&&(t+=(h??"")+o[l+1]),this._$AH[l]=h}n&&!r&&this.j(t)}j(t){t===st?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},$u=class extends eo{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===st?void 0:t}},zu=class extends eo{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==st)}},Eu=class extends eo{constructor(t,e,s,r,o){super(t,e,s,r,o),this.type=5}_$AI(t,e=this){if((t=Zi(this,t,e,0)??st)===Jt)return;const s=this._$AH,r=t===st&&s!==st||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==st&&(s===st||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}};class Pu{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Zi(this,t)}}const Mu=An.litHtmlPolyfillSupport;Mu?.(Zo,On),(An.litHtmlVersions??=[]).push("3.3.1");const Au=(i,t,e)=>{const s=e?.renderBefore??t;let r=s._$litPart$;if(r===void 0){const o=e?.renderBefore??null;s._$litPart$=r=new On(t.insertBefore(Ws(),o),o,void 0,e??{})}return r._$AI(i),r};const Rn=globalThis;let Ts=class extends Ni{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Au(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Jt}};Ts._$litElement$=!0,Ts.finalized=!0,Rn.litElementHydrateSupport?.({LitElement:Ts});const Tu=Rn.litElementPolyfillSupport;Tu?.({LitElement:Ts});(Rn.litElementVersions??=[]).push("4.2.1");var Ou=I`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,Ru=I`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,ls=(i="value")=>(t,e)=>{const s=t.constructor,r=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(o,n,a){var l;const h=s.getPropertyOptions(i),d=typeof h.attribute=="string"?h.attribute:i;if(o===d){const u=h.converter||Ji,m=(typeof u=="function"?u:(l=u?.fromAttribute)!=null?l:Ji.fromAttribute)(a,h.type);this[i]!==m&&(this[e]=m)}r.call(this,o,n,a)}},Pi=I`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,Nt=class{constructor(i,...t){this.slotNames=[],this.handleSlotChange=e=>{const s=e.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=i).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent.trim()!=="")return!0;if(i.nodeType===i.ELEMENT_NODE){const t=i;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(i){return this.host.querySelector(`:scope > [slot="${i}"]`)!==null}test(i){return i==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(i)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Iu(i){if(!i)return"";const t=i.assignedNodes({flatten:!0});let e="";return[...t].forEach(s=>{s.nodeType===Node.TEXT_NODE&&(e+=s.textContent)}),e}var Lu={name:"default",resolver:i=>Jc(`assets/icons/${i}.svg`)},Du=Lu,Ca={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Vu={name:"system",resolver:i=>i in Ca?`data:image/svg+xml,${encodeURIComponent(Ca[i])}`:""},Fu=Vu,Nu=[Du,Fu],tn=[];function Bu(i){tn.push(i)}function Hu(i){tn=tn.filter(t=>t!==i)}function Sa(i){return Nu.find(t=>t.name===i)}var Uu=I`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function $(i,t){const e=We({waitUntilFirstUpdate:!1},t);return(s,r)=>{const{update:o}=s,n=Array.isArray(i)?i:[i];s.update=function(a){n.forEach(l=>{const h=l;if(a.has(h)){const d=a.get(h),u=this[h];d!==u&&(!e.waitUntilFirstUpdate||this.hasUpdated)&&this[r](d,u)}}),o.call(this,a)}}}var V=I`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;const Wu={attribute:!0,type:String,converter:Ji,reflect:!1,hasChanged:Mn},Yu=(i=Wu,t,e)=>{const{kind:s,metadata:r}=e;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),o.set(e.name,i),s==="accessor"){const{name:n}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,i)},init(a){return a!==void 0&&this.C(n,void 0,i,a),a}}}if(s==="setter"){const{name:n}=e;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,i)}}throw Error("Unsupported decorator location: "+s)};function f(i){return(t,e)=>typeof e=="object"?Yu(i,t,e):((s,r,o)=>{const n=r.hasOwnProperty(o);return r.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(r,o):void 0})(i,t,e)}function L(i){return f({...i,state:!0,attribute:!1})}function Js(i){return(t,e)=>{const s=typeof t=="function"?t:t[e];Object.assign(s,i)}}const uh=(i,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(i,t,e),e);function z(i,t){return(e,s,r)=>{const o=n=>n.renderRoot?.querySelector(i)??null;return uh(e,s,{get(){return o(this)}})}}function qu(i){return(t,e)=>uh(t,e,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(i)??null}})}var Ar,R=class extends Ts{constructor(){super(),ou(this,Ar,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([i,t])=>{this.constructor.define(i,t)})}emit(i,t){const e=new CustomEvent(i,We({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(e),e}static define(i,t=this,e={}){const s=customElements.get(i);if(!s){try{customElements.define(i,t,e)}catch{customElements.define(i,class extends t{},e)}return}let r=" (unknown version)",o=r;"version"in t&&t.version&&(r=" v"+t.version),"version"in s&&s.version&&(o=" v"+s.version),!(r&&o&&r===o)&&console.warn(`Attempted to register <${i}>${r}, but <${i}>${o} has already been registered.`)}attributeChangedCallback(i,t,e){ru(this,Ar)||(this.constructor.elementProperties.forEach((s,r)=>{s.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),nu(this,Ar,!0)),super.attributeChangedCallback(i,t,e)}willUpdate(i){super.willUpdate(i),this.initialReflectedProperties.forEach((t,e)=>{i.has(e)&&this[e]==null&&(this[e]=t)})}};Ar=new WeakMap;R.version="2.20.1";R.dependencies={};c([f()],R.prototype,"dir",2);c([f()],R.prototype,"lang",2);const ju=(i,t)=>i?._$litType$!==void 0,dh=i=>i.strings===void 0,Gu={},Ku=(i,t=Gu)=>i._$AH=t;var Cs=Symbol(),pr=Symbol(),ko,Co=new Map,et=class extends R{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(i,t){var e;let s;if(t?.spriteSheet)return this.svg=C`<svg part="svg">
        <use part="use" href="${i}"></use>
      </svg>`,this.svg;try{if(s=await fetch(i,{mode:"cors"}),!s.ok)return s.status===410?Cs:pr}catch{return pr}try{const r=document.createElement("div");r.innerHTML=await s.text();const o=r.firstElementChild;if(((e=o?.tagName)==null?void 0:e.toLowerCase())!=="svg")return Cs;ko||(ko=new DOMParser);const a=ko.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):Cs}catch{return Cs}}connectedCallback(){super.connectedCallback(),Bu(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Hu(this)}getIconSource(){const i=Sa(this.library);return this.name&&i?{url:i.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var i;const{url:t,fromLibrary:e}=this.getIconSource(),s=e?Sa(this.library):void 0;if(!t){this.svg=null;return}let r=Co.get(t);if(r||(r=this.resolveIcon(t,s),Co.set(t,r)),!this.initialRender)return;const o=await r;if(o===pr&&Co.delete(t),t===this.getIconSource().url){if(ju(o)){if(this.svg=o,s){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof s.mutator=="function"&&n&&s.mutator(n)}return}switch(o){case pr:case Cs:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(i=s?.mutator)==null||i.call(s,this.svg),this.emit("sl-load")}}}render(){return this.svg}};et.styles=[V,Uu];c([L()],et.prototype,"svg",2);c([f({reflect:!0})],et.prototype,"name",2);c([f()],et.prototype,"src",2);c([f()],et.prototype,"label",2);c([f({reflect:!0})],et.prototype,"library",2);c([$("label")],et.prototype,"handleLabelChange",1);c([$(["name","src","library"])],et.prototype,"setIcon",1);const Se={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Zs=i=>(...t)=>({_$litDirective$:i,values:t});let tr=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const D=Zs(class extends tr{constructor(i){if(super(i),i.type!==Se.ATTRIBUTE||i.name!=="class"||i.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter((t=>i[t])).join(" ")+" "}update(i,[t]){if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((s=>s!==""))));for(const s in t)t[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(t)}const e=i.element.classList;for(const s of this.st)s in t||(e.remove(s),this.st.delete(s));for(const s in t){const r=!!t[s];r===this.st.has(s)||this.nt?.has(s)||(r?(e.add(s),this.st.add(s)):(e.remove(s),this.st.delete(s)))}return Jt}});const O=i=>i??st;const yi=Zs(class extends tr{constructor(i){if(super(i),i.type!==Se.PROPERTY&&i.type!==Se.ATTRIBUTE&&i.type!==Se.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!dh(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[t]){if(t===Jt||t===st)return t;const e=i.element,s=i.name;if(i.type===Se.PROPERTY){if(t===e[s])return Jt}else if(i.type===Se.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(s))return Jt}else if(i.type===Se.ATTRIBUTE&&e.getAttribute(s)===t+"")return Jt;return Ku(i),t}});var bt=class extends R{constructor(){super(...arguments),this.formControlController=new Ye(this,{value:i=>i.checked?i.value||"on":void 0,defaultValue:i=>i.defaultChecked,setValue:(i,t)=>i.checked=t}),this.hasSlotController=new Nt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(i){this.input.focus(i)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(i){this.input.setCustomValidity(i),this.formControlController.updateValidity()}render(){const i=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!i;return C`
      <div
        class=${D({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${D({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${O(this.value)}
            .indeterminate=${yi(this.indeterminate)}
            .checked=${yi(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?C`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?C`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};bt.styles=[V,Pi,Ru];bt.dependencies={"sl-icon":et};c([z('input[type="checkbox"]')],bt.prototype,"input",2);c([L()],bt.prototype,"hasFocus",2);c([f()],bt.prototype,"title",2);c([f()],bt.prototype,"name",2);c([f()],bt.prototype,"value",2);c([f({reflect:!0})],bt.prototype,"size",2);c([f({type:Boolean,reflect:!0})],bt.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],bt.prototype,"checked",2);c([f({type:Boolean,reflect:!0})],bt.prototype,"indeterminate",2);c([ls("checked")],bt.prototype,"defaultChecked",2);c([f({reflect:!0})],bt.prototype,"form",2);c([f({type:Boolean,reflect:!0})],bt.prototype,"required",2);c([f({attribute:"help-text"})],bt.prototype,"helpText",2);c([$("disabled",{waitUntilFirstUpdate:!0})],bt.prototype,"handleDisabledChange",1);c([$(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],bt.prototype,"handleStateChange",1);var Qu=I`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const en=new Set,Bi=new Map;let di,In="ltr",Ln="en";const ph=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(ph){const i=new MutationObserver(mh);In=document.documentElement.dir||"ltr",Ln=document.documentElement.lang||navigator.language,i.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function fh(...i){i.map(t=>{const e=t.$code.toLowerCase();Bi.has(e)?Bi.set(e,Object.assign(Object.assign({},Bi.get(e)),t)):Bi.set(e,t),di||(di=t)}),mh()}function mh(){ph&&(In=document.documentElement.dir||"ltr",Ln=document.documentElement.lang||navigator.language),[...en.keys()].map(i=>{typeof i.requestUpdate=="function"&&i.requestUpdate()})}let Xu=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){en.add(this.host)}hostDisconnected(){en.delete(this.host)}dir(){return`${this.host.dir||In}`.toLowerCase()}lang(){return`${this.host.lang||Ln}`.toLowerCase()}getTranslationData(t){var e,s;const r=new Intl.Locale(t.replace(/_/g,"-")),o=r?.language.toLowerCase(),n=(s=(e=r?.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&s!==void 0?s:"",a=Bi.get(`${o}-${n}`),l=Bi.get(o);return{locale:r,language:o,region:n,primary:a,secondary:l}}exists(t,e){var s;const{primary:r,secondary:o}=this.getTranslationData((s=e.lang)!==null&&s!==void 0?s:this.lang());return e=Object.assign({includeFallback:!1},e),!!(r&&r[t]||o&&o[t]||e.includeFallback&&di&&di[t])}term(t,...e){const{primary:s,secondary:r}=this.getTranslationData(this.lang());let o;if(s&&s[t])o=s[t];else if(r&&r[t])o=r[t];else if(di&&di[t])o=di[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof o=="function"?o(...e):o}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(t,e)}};var gh={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(i,t)=>`Go to slide ${i} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:i=>i===0?"No options selected":i===1?"1 option selected":`${i} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:i=>`Slide ${i}`,toggleColorFormat:"Toggle color format"};fh(gh);var Ju=gh,W=class extends Xu{};fh(Ju);var er=class extends R{constructor(){super(...arguments),this.localize=new W(this)}render(){return C`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};er.styles=[V,Qu];var vh=new Map,Zu=new WeakMap;function td(i){return i??{keyframes:[],options:{duration:0}}}function $a(i,t){return t.toLowerCase()==="rtl"?{keyframes:i.rtlKeyframes||i.keyframes,options:i.options}:i}function K(i,t){vh.set(i,td(t))}function rt(i,t,e){const s=Zu.get(i);if(s?.[t])return $a(s[t],e.dir);const r=vh.get(t);return r?$a(r,e.dir):{keyframes:[],options:{duration:0}}}function ht(i,t,e){return new Promise(s=>{if(e?.duration===1/0)throw new Error("Promise-based animations must be finite.");const r=i.animate(t,Xs(We({},e),{duration:sn()?0:e.duration}));r.addEventListener("cancel",s,{once:!0}),r.addEventListener("finish",s,{once:!0})})}function za(i){return i=i.toString().toLowerCase(),i.indexOf("ms")>-1?parseFloat(i):i.indexOf("s")>-1?parseFloat(i)*1e3:parseFloat(i)}function sn(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ft(i){return Promise.all(i.getAnimations().map(t=>new Promise(e=>{t.cancel(),requestAnimationFrame(e)})))}function Vr(i,t){return i.map(e=>Xs(We({},e),{height:e.height==="auto"?`${t}px`:e.height}))}function Ea(i,t,e){return i?t(i):e?.(i)}var ct=class rn extends R{constructor(){super(...arguments),this.localize=new W(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await ft(this.childrenContainer);const{keyframes:t,options:e}=rt(this,"tree-item.collapse",{dir:this.localize.dir()});await ht(this.childrenContainer,Vr(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const t=this.parentElement;return!!t&&rn.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await ft(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:e}=rt(this,"tree-item.expand",{dir:this.localize.dir()});await ht(this.childrenContainer,Vr(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(e=>rn.isTreeItem(e)&&(t||!e.disabled)):[]}render(){const t=this.localize.dir()==="rtl",e=!this.loading&&(!this.isLeaf||this.lazy);return C`
      <div
        part="base"
        class="${D({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":e,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${D({"tree-item__expand-button":!0,"tree-item__expand-button--visible":e})}
            aria-hidden="true"
          >
            ${Ea(this.loading,()=>C` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Ea(this.selectable,()=>C`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${yi(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};ct.styles=[V,Ou];ct.dependencies={"sl-checkbox":bt,"sl-icon":et,"sl-spinner":er};c([L()],ct.prototype,"indeterminate",2);c([L()],ct.prototype,"isLeaf",2);c([L()],ct.prototype,"loading",2);c([L()],ct.prototype,"selectable",2);c([f({type:Boolean,reflect:!0})],ct.prototype,"expanded",2);c([f({type:Boolean,reflect:!0})],ct.prototype,"selected",2);c([f({type:Boolean,reflect:!0})],ct.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],ct.prototype,"lazy",2);c([z("slot:not([name])")],ct.prototype,"defaultSlot",2);c([z("slot[name=children]")],ct.prototype,"childrenSlot",2);c([z(".tree-item__item")],ct.prototype,"itemElement",2);c([z(".tree-item__children")],ct.prototype,"childrenContainer",2);c([z(".tree-item__expand-button slot")],ct.prototype,"expandButtonSlot",2);c([$("loading",{waitUntilFirstUpdate:!0})],ct.prototype,"handleLoadingChange",1);c([$("disabled")],ct.prototype,"handleDisabledChange",1);c([$("selected")],ct.prototype,"handleSelectedChange",1);c([$("expanded",{waitUntilFirstUpdate:!0})],ct.prototype,"handleExpandedChange",1);c([$("expanded",{waitUntilFirstUpdate:!0})],ct.prototype,"handleExpandAnimation",1);c([$("lazy",{waitUntilFirstUpdate:!0})],ct.prototype,"handleLazyChange",1);var Os=ct;K("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});K("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});Os.define("sl-tree-item");var ed=I`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,id=I`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const ii=Math.min,Xt=Math.max,Fr=Math.round,fr=Math.floor,Ee=i=>({x:i,y:i}),sd={left:"right",right:"left",bottom:"top",top:"bottom"},rd={start:"end",end:"start"};function on(i,t,e){return Xt(i,ii(t,e))}function hs(i,t){return typeof i=="function"?i(t):i}function si(i){return i.split("-")[0]}function cs(i){return i.split("-")[1]}function bh(i){return i==="x"?"y":"x"}function Dn(i){return i==="y"?"height":"width"}const od=new Set(["top","bottom"]);function Fe(i){return od.has(si(i))?"y":"x"}function Vn(i){return bh(Fe(i))}function nd(i,t,e){e===void 0&&(e=!1);const s=cs(i),r=Vn(i),o=Dn(r);let n=r==="x"?s===(e?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(n=Nr(n)),[n,Nr(n)]}function ad(i){const t=Nr(i);return[nn(i),t,nn(t)]}function nn(i){return i.replace(/start|end/g,t=>rd[t])}const Pa=["left","right"],Ma=["right","left"],ld=["top","bottom"],hd=["bottom","top"];function cd(i,t,e){switch(i){case"top":case"bottom":return e?t?Ma:Pa:t?Pa:Ma;case"left":case"right":return t?ld:hd;default:return[]}}function ud(i,t,e,s){const r=cs(i);let o=cd(si(i),e==="start",s);return r&&(o=o.map(n=>n+"-"+r),t&&(o=o.concat(o.map(nn)))),o}function Nr(i){return i.replace(/left|right|bottom|top/g,t=>sd[t])}function dd(i){return{top:0,right:0,bottom:0,left:0,...i}}function yh(i){return typeof i!="number"?dd(i):{top:i,right:i,bottom:i,left:i}}function Br(i){const{x:t,y:e,width:s,height:r}=i;return{width:s,height:r,top:e,left:t,right:t+s,bottom:e+r,x:t,y:e}}function Aa(i,t,e){let{reference:s,floating:r}=i;const o=Fe(t),n=Vn(t),a=Dn(n),l=si(t),h=o==="y",d=s.x+s.width/2-r.width/2,u=s.y+s.height/2-r.height/2,p=s[a]/2-r[a]/2;let m;switch(l){case"top":m={x:d,y:s.y-r.height};break;case"bottom":m={x:d,y:s.y+s.height};break;case"right":m={x:s.x+s.width,y:u};break;case"left":m={x:s.x-r.width,y:u};break;default:m={x:s.x,y:s.y}}switch(cs(t)){case"start":m[n]-=p*(e&&h?-1:1);break;case"end":m[n]+=p*(e&&h?-1:1);break}return m}const pd=async(i,t,e)=>{const{placement:s="bottom",strategy:r="absolute",middleware:o=[],platform:n}=e,a=o.filter(Boolean),l=await(n.isRTL==null?void 0:n.isRTL(t));let h=await n.getElementRects({reference:i,floating:t,strategy:r}),{x:d,y:u}=Aa(h,s,l),p=s,m={},g=0;for(let v=0;v<a.length;v++){const{name:b,fn:x}=a[v],{x:y,y:k,data:_,reset:w}=await x({x:d,y:u,initialPlacement:s,placement:p,strategy:r,middlewareData:m,rects:h,platform:n,elements:{reference:i,floating:t}});d=y??d,u=k??u,m={...m,[b]:{...m[b],..._}},w&&g<=50&&(g++,typeof w=="object"&&(w.placement&&(p=w.placement),w.rects&&(h=w.rects===!0?await n.getElementRects({reference:i,floating:t,strategy:r}):w.rects),{x:d,y:u}=Aa(h,p,l)),v=-1)}return{x:d,y:u,placement:p,strategy:r,middlewareData:m}};async function Fn(i,t){var e;t===void 0&&(t={});const{x:s,y:r,platform:o,rects:n,elements:a,strategy:l}=i,{boundary:h="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:p=!1,padding:m=0}=hs(t,i),g=yh(m),b=a[p?u==="floating"?"reference":"floating":u],x=Br(await o.getClippingRect({element:(e=await(o.isElement==null?void 0:o.isElement(b)))==null||e?b:b.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:h,rootBoundary:d,strategy:l})),y=u==="floating"?{x:s,y:r,width:n.floating.width,height:n.floating.height}:n.reference,k=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),_=await(o.isElement==null?void 0:o.isElement(k))?await(o.getScale==null?void 0:o.getScale(k))||{x:1,y:1}:{x:1,y:1},w=Br(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:y,offsetParent:k,strategy:l}):y);return{top:(x.top-w.top+g.top)/_.y,bottom:(w.bottom-x.bottom+g.bottom)/_.y,left:(x.left-w.left+g.left)/_.x,right:(w.right-x.right+g.right)/_.x}}const fd=i=>({name:"arrow",options:i,async fn(t){const{x:e,y:s,placement:r,rects:o,platform:n,elements:a,middlewareData:l}=t,{element:h,padding:d=0}=hs(i,t)||{};if(h==null)return{};const u=yh(d),p={x:e,y:s},m=Vn(r),g=Dn(m),v=await n.getDimensions(h),b=m==="y",x=b?"top":"left",y=b?"bottom":"right",k=b?"clientHeight":"clientWidth",_=o.reference[g]+o.reference[m]-p[m]-o.floating[g],w=p[m]-o.reference[m],E=await(n.getOffsetParent==null?void 0:n.getOffsetParent(h));let A=E?E[k]:0;(!A||!await(n.isElement==null?void 0:n.isElement(E)))&&(A=a.floating[k]||o.floating[g]);const T=_/2-w/2,M=A/2-v[g]/2-1,P=ii(u[x],M),Z=ii(u[y],M),j=P,J=A-v[g]-Z,q=A/2-v[g]/2+T,it=on(j,q,J),mt=!l.arrow&&cs(r)!=null&&q!==it&&o.reference[g]/2-(q<j?P:Z)-v[g]/2<0,gt=mt?q<j?q-j:q-J:0;return{[m]:p[m]+gt,data:{[m]:it,centerOffset:q-it-gt,...mt&&{alignmentOffset:gt}},reset:mt}}}),md=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(t){var e,s;const{placement:r,middlewareData:o,rects:n,initialPlacement:a,platform:l,elements:h}=t,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:v=!0,...b}=hs(i,t);if((e=o.arrow)!=null&&e.alignmentOffset)return{};const x=si(r),y=Fe(a),k=si(a)===a,_=await(l.isRTL==null?void 0:l.isRTL(h.floating)),w=p||(k||!v?[Nr(a)]:ad(a)),E=g!=="none";!p&&E&&w.push(...ud(a,v,g,_));const A=[a,...w],T=await Fn(t,b),M=[];let P=((s=o.flip)==null?void 0:s.overflows)||[];if(d&&M.push(T[x]),u){const q=nd(r,n,_);M.push(T[q[0]],T[q[1]])}if(P=[...P,{placement:r,overflows:M}],!M.every(q=>q<=0)){var Z,j;const q=(((Z=o.flip)==null?void 0:Z.index)||0)+1,it=A[q];if(it&&(!(u==="alignment"?y!==Fe(it):!1)||P.every(kt=>Fe(kt.placement)===y?kt.overflows[0]>0:!0)))return{data:{index:q,overflows:P},reset:{placement:it}};let mt=(j=P.filter(gt=>gt.overflows[0]<=0).sort((gt,kt)=>gt.overflows[1]-kt.overflows[1])[0])==null?void 0:j.placement;if(!mt)switch(m){case"bestFit":{var J;const gt=(J=P.filter(kt=>{if(E){const Bt=Fe(kt.placement);return Bt===y||Bt==="y"}return!0}).map(kt=>[kt.placement,kt.overflows.filter(Bt=>Bt>0).reduce((Bt,li)=>Bt+li,0)]).sort((kt,Bt)=>kt[1]-Bt[1])[0])==null?void 0:J[0];gt&&(mt=gt);break}case"initialPlacement":mt=a;break}if(r!==mt)return{reset:{placement:mt}}}return{}}}},gd=new Set(["left","top"]);async function vd(i,t){const{placement:e,platform:s,elements:r}=i,o=await(s.isRTL==null?void 0:s.isRTL(r.floating)),n=si(e),a=cs(e),l=Fe(e)==="y",h=gd.has(n)?-1:1,d=o&&l?-1:1,u=hs(t,i);let{mainAxis:p,crossAxis:m,alignmentAxis:g}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return a&&typeof g=="number"&&(m=a==="end"?g*-1:g),l?{x:m*d,y:p*h}:{x:p*h,y:m*d}}const bd=function(i){return i===void 0&&(i=0),{name:"offset",options:i,async fn(t){var e,s;const{x:r,y:o,placement:n,middlewareData:a}=t,l=await vd(t,i);return n===((e=a.offset)==null?void 0:e.placement)&&(s=a.arrow)!=null&&s.alignmentOffset?{}:{x:r+l.x,y:o+l.y,data:{...l,placement:n}}}}},yd=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(t){const{x:e,y:s,placement:r}=t,{mainAxis:o=!0,crossAxis:n=!1,limiter:a={fn:b=>{let{x,y}=b;return{x,y}}},...l}=hs(i,t),h={x:e,y:s},d=await Fn(t,l),u=Fe(si(r)),p=bh(u);let m=h[p],g=h[u];if(o){const b=p==="y"?"top":"left",x=p==="y"?"bottom":"right",y=m+d[b],k=m-d[x];m=on(y,m,k)}if(n){const b=u==="y"?"top":"left",x=u==="y"?"bottom":"right",y=g+d[b],k=g-d[x];g=on(y,g,k)}const v=a.fn({...t,[p]:m,[u]:g});return{...v,data:{x:v.x-e,y:v.y-s,enabled:{[p]:o,[u]:n}}}}}},_d=function(i){return i===void 0&&(i={}),{name:"size",options:i,async fn(t){var e,s;const{placement:r,rects:o,platform:n,elements:a}=t,{apply:l=()=>{},...h}=hs(i,t),d=await Fn(t,h),u=si(r),p=cs(r),m=Fe(r)==="y",{width:g,height:v}=o.floating;let b,x;u==="top"||u==="bottom"?(b=u,x=p===(await(n.isRTL==null?void 0:n.isRTL(a.floating))?"start":"end")?"left":"right"):(x=u,b=p==="end"?"top":"bottom");const y=v-d.top-d.bottom,k=g-d.left-d.right,_=ii(v-d[b],y),w=ii(g-d[x],k),E=!t.middlewareData.shift;let A=_,T=w;if((e=t.middlewareData.shift)!=null&&e.enabled.x&&(T=k),(s=t.middlewareData.shift)!=null&&s.enabled.y&&(A=y),E&&!p){const P=Xt(d.left,0),Z=Xt(d.right,0),j=Xt(d.top,0),J=Xt(d.bottom,0);m?T=g-2*(P!==0||Z!==0?P+Z:Xt(d.left,d.right)):A=v-2*(j!==0||J!==0?j+J:Xt(d.top,d.bottom))}await l({...t,availableWidth:T,availableHeight:A});const M=await n.getDimensions(a.floating);return g!==M.width||v!==M.height?{reset:{rects:!0}}:{}}}};function io(){return typeof window<"u"}function us(i){return _h(i)?(i.nodeName||"").toLowerCase():"#document"}function Zt(i){var t;return(i==null||(t=i.ownerDocument)==null?void 0:t.defaultView)||window}function Ae(i){var t;return(t=(_h(i)?i.ownerDocument:i.document)||window.document)==null?void 0:t.documentElement}function _h(i){return io()?i instanceof Node||i instanceof Zt(i).Node:!1}function de(i){return io()?i instanceof Element||i instanceof Zt(i).Element:!1}function Pe(i){return io()?i instanceof HTMLElement||i instanceof Zt(i).HTMLElement:!1}function Ta(i){return!io()||typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof Zt(i).ShadowRoot}const wd=new Set(["inline","contents"]);function ir(i){const{overflow:t,overflowX:e,overflowY:s,display:r}=pe(i);return/auto|scroll|overlay|hidden|clip/.test(t+s+e)&&!wd.has(r)}const xd=new Set(["table","td","th"]);function kd(i){return xd.has(us(i))}const Cd=[":popover-open",":modal"];function so(i){return Cd.some(t=>{try{return i.matches(t)}catch{return!1}})}const Sd=["transform","translate","scale","rotate","perspective"],$d=["transform","translate","scale","rotate","perspective","filter"],zd=["paint","layout","strict","content"];function ro(i){const t=Nn(),e=de(i)?pe(i):i;return Sd.some(s=>e[s]?e[s]!=="none":!1)||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||$d.some(s=>(e.willChange||"").includes(s))||zd.some(s=>(e.contain||"").includes(s))}function Ed(i){let t=ri(i);for(;Pe(t)&&!ts(t);){if(ro(t))return t;if(so(t))return null;t=ri(t)}return null}function Nn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Pd=new Set(["html","body","#document"]);function ts(i){return Pd.has(us(i))}function pe(i){return Zt(i).getComputedStyle(i)}function oo(i){return de(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.scrollX,scrollTop:i.scrollY}}function ri(i){if(us(i)==="html")return i;const t=i.assignedSlot||i.parentNode||Ta(i)&&i.host||Ae(i);return Ta(t)?t.host:t}function wh(i){const t=ri(i);return ts(t)?i.ownerDocument?i.ownerDocument.body:i.body:Pe(t)&&ir(t)?t:wh(t)}function qs(i,t,e){var s;t===void 0&&(t=[]),e===void 0&&(e=!0);const r=wh(i),o=r===((s=i.ownerDocument)==null?void 0:s.body),n=Zt(r);if(o){const a=an(n);return t.concat(n,n.visualViewport||[],ir(r)?r:[],a&&e?qs(a):[])}return t.concat(r,qs(r,[],e))}function an(i){return i.parent&&Object.getPrototypeOf(i.parent)?i.frameElement:null}function xh(i){const t=pe(i);let e=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const r=Pe(i),o=r?i.offsetWidth:e,n=r?i.offsetHeight:s,a=Fr(e)!==o||Fr(s)!==n;return a&&(e=o,s=n),{width:e,height:s,$:a}}function Bn(i){return de(i)?i:i.contextElement}function ji(i){const t=Bn(i);if(!Pe(t))return Ee(1);const e=t.getBoundingClientRect(),{width:s,height:r,$:o}=xh(t);let n=(o?Fr(e.width):e.width)/s,a=(o?Fr(e.height):e.height)/r;return(!n||!Number.isFinite(n))&&(n=1),(!a||!Number.isFinite(a))&&(a=1),{x:n,y:a}}const Md=Ee(0);function kh(i){const t=Zt(i);return!Nn()||!t.visualViewport?Md:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ad(i,t,e){return t===void 0&&(t=!1),!e||t&&e!==Zt(i)?!1:t}function _i(i,t,e,s){t===void 0&&(t=!1),e===void 0&&(e=!1);const r=i.getBoundingClientRect(),o=Bn(i);let n=Ee(1);t&&(s?de(s)&&(n=ji(s)):n=ji(i));const a=Ad(o,e,s)?kh(o):Ee(0);let l=(r.left+a.x)/n.x,h=(r.top+a.y)/n.y,d=r.width/n.x,u=r.height/n.y;if(o){const p=Zt(o),m=s&&de(s)?Zt(s):s;let g=p,v=an(g);for(;v&&s&&m!==g;){const b=ji(v),x=v.getBoundingClientRect(),y=pe(v),k=x.left+(v.clientLeft+parseFloat(y.paddingLeft))*b.x,_=x.top+(v.clientTop+parseFloat(y.paddingTop))*b.y;l*=b.x,h*=b.y,d*=b.x,u*=b.y,l+=k,h+=_,g=Zt(v),v=an(g)}}return Br({width:d,height:u,x:l,y:h})}function no(i,t){const e=oo(i).scrollLeft;return t?t.left+e:_i(Ae(i)).left+e}function Ch(i,t){const e=i.getBoundingClientRect(),s=e.left+t.scrollLeft-no(i,e),r=e.top+t.scrollTop;return{x:s,y:r}}function Td(i){let{elements:t,rect:e,offsetParent:s,strategy:r}=i;const o=r==="fixed",n=Ae(s),a=t?so(t.floating):!1;if(s===n||a&&o)return e;let l={scrollLeft:0,scrollTop:0},h=Ee(1);const d=Ee(0),u=Pe(s);if((u||!u&&!o)&&((us(s)!=="body"||ir(n))&&(l=oo(s)),Pe(s))){const m=_i(s);h=ji(s),d.x=m.x+s.clientLeft,d.y=m.y+s.clientTop}const p=n&&!u&&!o?Ch(n,l):Ee(0);return{width:e.width*h.x,height:e.height*h.y,x:e.x*h.x-l.scrollLeft*h.x+d.x+p.x,y:e.y*h.y-l.scrollTop*h.y+d.y+p.y}}function Od(i){return Array.from(i.getClientRects())}function Rd(i){const t=Ae(i),e=oo(i),s=i.ownerDocument.body,r=Xt(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),o=Xt(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let n=-e.scrollLeft+no(i);const a=-e.scrollTop;return pe(s).direction==="rtl"&&(n+=Xt(t.clientWidth,s.clientWidth)-r),{width:r,height:o,x:n,y:a}}const Oa=25;function Id(i,t){const e=Zt(i),s=Ae(i),r=e.visualViewport;let o=s.clientWidth,n=s.clientHeight,a=0,l=0;if(r){o=r.width,n=r.height;const d=Nn();(!d||d&&t==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}const h=no(s);if(h<=0){const d=s.ownerDocument,u=d.body,p=getComputedStyle(u),m=d.compatMode==="CSS1Compat"&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,g=Math.abs(s.clientWidth-u.clientWidth-m);g<=Oa&&(o-=g)}else h<=Oa&&(o+=h);return{width:o,height:n,x:a,y:l}}const Ld=new Set(["absolute","fixed"]);function Dd(i,t){const e=_i(i,!0,t==="fixed"),s=e.top+i.clientTop,r=e.left+i.clientLeft,o=Pe(i)?ji(i):Ee(1),n=i.clientWidth*o.x,a=i.clientHeight*o.y,l=r*o.x,h=s*o.y;return{width:n,height:a,x:l,y:h}}function Ra(i,t,e){let s;if(t==="viewport")s=Id(i,e);else if(t==="document")s=Rd(Ae(i));else if(de(t))s=Dd(t,e);else{const r=kh(i);s={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return Br(s)}function Sh(i,t){const e=ri(i);return e===t||!de(e)||ts(e)?!1:pe(e).position==="fixed"||Sh(e,t)}function Vd(i,t){const e=t.get(i);if(e)return e;let s=qs(i,[],!1).filter(a=>de(a)&&us(a)!=="body"),r=null;const o=pe(i).position==="fixed";let n=o?ri(i):i;for(;de(n)&&!ts(n);){const a=pe(n),l=ro(n);!l&&a.position==="fixed"&&(r=null),(o?!l&&!r:!l&&a.position==="static"&&!!r&&Ld.has(r.position)||ir(n)&&!l&&Sh(i,n))?s=s.filter(d=>d!==n):r=a,n=ri(n)}return t.set(i,s),s}function Fd(i){let{element:t,boundary:e,rootBoundary:s,strategy:r}=i;const n=[...e==="clippingAncestors"?so(t)?[]:Vd(t,this._c):[].concat(e),s],a=n[0],l=n.reduce((h,d)=>{const u=Ra(t,d,r);return h.top=Xt(u.top,h.top),h.right=ii(u.right,h.right),h.bottom=ii(u.bottom,h.bottom),h.left=Xt(u.left,h.left),h},Ra(t,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Nd(i){const{width:t,height:e}=xh(i);return{width:t,height:e}}function Bd(i,t,e){const s=Pe(t),r=Ae(t),o=e==="fixed",n=_i(i,!0,o,t);let a={scrollLeft:0,scrollTop:0};const l=Ee(0);function h(){l.x=no(r)}if(s||!s&&!o)if((us(t)!=="body"||ir(r))&&(a=oo(t)),s){const m=_i(t,!0,o,t);l.x=m.x+t.clientLeft,l.y=m.y+t.clientTop}else r&&h();o&&!s&&r&&h();const d=r&&!s&&!o?Ch(r,a):Ee(0),u=n.left+a.scrollLeft-l.x-d.x,p=n.top+a.scrollTop-l.y-d.y;return{x:u,y:p,width:n.width,height:n.height}}function So(i){return pe(i).position==="static"}function Ia(i,t){if(!Pe(i)||pe(i).position==="fixed")return null;if(t)return t(i);let e=i.offsetParent;return Ae(i)===e&&(e=e.ownerDocument.body),e}function $h(i,t){const e=Zt(i);if(so(i))return e;if(!Pe(i)){let r=ri(i);for(;r&&!ts(r);){if(de(r)&&!So(r))return r;r=ri(r)}return e}let s=Ia(i,t);for(;s&&kd(s)&&So(s);)s=Ia(s,t);return s&&ts(s)&&So(s)&&!ro(s)?e:s||Ed(i)||e}const Hd=async function(i){const t=this.getOffsetParent||$h,e=this.getDimensions,s=await e(i.floating);return{reference:Bd(i.reference,await t(i.floating),i.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function Ud(i){return pe(i).direction==="rtl"}const Tr={convertOffsetParentRelativeRectToViewportRelativeRect:Td,getDocumentElement:Ae,getClippingRect:Fd,getOffsetParent:$h,getElementRects:Hd,getClientRects:Od,getDimensions:Nd,getScale:ji,isElement:de,isRTL:Ud};function zh(i,t){return i.x===t.x&&i.y===t.y&&i.width===t.width&&i.height===t.height}function Wd(i,t){let e=null,s;const r=Ae(i);function o(){var a;clearTimeout(s),(a=e)==null||a.disconnect(),e=null}function n(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const h=i.getBoundingClientRect(),{left:d,top:u,width:p,height:m}=h;if(a||t(),!p||!m)return;const g=fr(u),v=fr(r.clientWidth-(d+p)),b=fr(r.clientHeight-(u+m)),x=fr(d),k={rootMargin:-g+"px "+-v+"px "+-b+"px "+-x+"px",threshold:Xt(0,ii(1,l))||1};let _=!0;function w(E){const A=E[0].intersectionRatio;if(A!==l){if(!_)return n();A?n(!1,A):s=setTimeout(()=>{n(!1,1e-7)},1e3)}A===1&&!zh(h,i.getBoundingClientRect())&&n(),_=!1}try{e=new IntersectionObserver(w,{...k,root:r.ownerDocument})}catch{e=new IntersectionObserver(w,k)}e.observe(i)}return n(!0),o}function Yd(i,t,e,s){s===void 0&&(s={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=s,h=Bn(i),d=r||o?[...h?qs(h):[],...qs(t)]:[];d.forEach(x=>{r&&x.addEventListener("scroll",e,{passive:!0}),o&&x.addEventListener("resize",e)});const u=h&&a?Wd(h,e):null;let p=-1,m=null;n&&(m=new ResizeObserver(x=>{let[y]=x;y&&y.target===h&&m&&(m.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var k;(k=m)==null||k.observe(t)})),e()}),h&&!l&&m.observe(h),m.observe(t));let g,v=l?_i(i):null;l&&b();function b(){const x=_i(i);v&&!zh(v,x)&&e(),v=x,g=requestAnimationFrame(b)}return e(),()=>{var x;d.forEach(y=>{r&&y.removeEventListener("scroll",e),o&&y.removeEventListener("resize",e)}),u?.(),(x=m)==null||x.disconnect(),m=null,l&&cancelAnimationFrame(g)}}const qd=bd,jd=yd,Gd=md,La=_d,Kd=fd,Qd=(i,t,e)=>{const s=new Map,r={platform:Tr,...e},o={...r.platform,_c:s};return pd(i,t,{...r,platform:o})};function Xd(i){return Jd(i)}function $o(i){return i.assignedSlot?i.assignedSlot:i.parentNode instanceof ShadowRoot?i.parentNode.host:i.parentNode}function Jd(i){for(let t=i;t;t=$o(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=$o(i);t;t=$o(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if(e.display!=="contents"&&(e.position!=="static"||ro(e)||t.tagName==="BODY"))return t}return null}function Zd(i){return i!==null&&typeof i=="object"&&"getBoundingClientRect"in i&&("contextElement"in i?i.contextElement instanceof Element:!0)}var Q=class extends R{constructor(){super(...arguments),this.localize=new W(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const i=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),e=this.placement.includes("top")||this.placement.includes("bottom");let s=0,r=0,o=0,n=0,a=0,l=0,h=0,d=0;e?i.top<t.top?(s=i.left,r=i.bottom,o=i.right,n=i.bottom,a=t.left,l=t.top,h=t.right,d=t.top):(s=t.left,r=t.bottom,o=t.right,n=t.bottom,a=i.left,l=i.top,h=i.right,d=i.top):i.left<t.left?(s=i.right,r=i.top,o=t.left,n=t.top,a=i.right,l=i.bottom,h=t.left,d=t.bottom):(s=t.right,r=t.top,o=i.left,n=i.top,a=t.right,l=t.bottom,h=i.left,d=i.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${s}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${o}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(i){super.updated(i),i.has("active")&&(this.active?this.start():this.stop()),i.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const i=this.getRootNode();this.anchorEl=i.getElementById(this.anchor)}else this.anchor instanceof Element||Zd(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=Yd(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(i=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>i())):i()})}reposition(){if(!this.active||!this.anchorEl)return;const i=[qd({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?i.push(La({apply:({rects:e})=>{const s=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=s?`${e.reference.width}px`:"",this.popup.style.height=r?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&i.push(Gd({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&i.push(jd({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?i.push(La({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:s})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${s}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&i.push(Kd({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?e=>Tr.getOffsetParent(e,Xd):Tr.getOffsetParent;Qd(this.anchorEl,this.popup,{placement:this.placement,middleware:i,strategy:this.strategy,platform:Xs(We({},Tr),{getOffsetParent:t})}).then(({x:e,y:s,middlewareData:r,placement:o})=>{const n=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${e}px`,top:`${s}px`}),this.arrow){const l=r.arrow.x,h=r.arrow.y;let d="",u="",p="",m="";if(this.arrowPlacement==="start"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=n?g:"",m=n?"":g}else if(this.arrowPlacement==="end"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=n?"":g,m=n?g:"",p=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(m=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",d=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(m=typeof l=="number"?`${l}px`:"",d=typeof h=="number"?`${h}px`:"");Object.assign(this.arrowEl.style,{top:d,right:u,bottom:p,left:m,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return C`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${D({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${D({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?C`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Q.styles=[V,id];c([z(".popup")],Q.prototype,"popup",2);c([z(".popup__arrow")],Q.prototype,"arrowEl",2);c([f()],Q.prototype,"anchor",2);c([f({type:Boolean,reflect:!0})],Q.prototype,"active",2);c([f({reflect:!0})],Q.prototype,"placement",2);c([f({reflect:!0})],Q.prototype,"strategy",2);c([f({type:Number})],Q.prototype,"distance",2);c([f({type:Number})],Q.prototype,"skidding",2);c([f({type:Boolean})],Q.prototype,"arrow",2);c([f({attribute:"arrow-placement"})],Q.prototype,"arrowPlacement",2);c([f({attribute:"arrow-padding",type:Number})],Q.prototype,"arrowPadding",2);c([f({type:Boolean})],Q.prototype,"flip",2);c([f({attribute:"flip-fallback-placements",converter:{fromAttribute:i=>i.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:i=>i.join(" ")}})],Q.prototype,"flipFallbackPlacements",2);c([f({attribute:"flip-fallback-strategy"})],Q.prototype,"flipFallbackStrategy",2);c([f({type:Object})],Q.prototype,"flipBoundary",2);c([f({attribute:"flip-padding",type:Number})],Q.prototype,"flipPadding",2);c([f({type:Boolean})],Q.prototype,"shift",2);c([f({type:Object})],Q.prototype,"shiftBoundary",2);c([f({attribute:"shift-padding",type:Number})],Q.prototype,"shiftPadding",2);c([f({attribute:"auto-size"})],Q.prototype,"autoSize",2);c([f()],Q.prototype,"sync",2);c([f({type:Object})],Q.prototype,"autoSizeBoundary",2);c([f({attribute:"auto-size-padding",type:Number})],Q.prototype,"autoSizePadding",2);c([f({attribute:"hover-bridge",type:Boolean})],Q.prototype,"hoverBridge",2);function Ft(i,t){return new Promise(e=>{function s(r){r.target===i&&(i.removeEventListener(t,s),e())}i.addEventListener(t,s)})}var _t=class extends R{constructor(){super(),this.localize=new W(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=i=>{i.key==="Escape"&&(i.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const i=za(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),i)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const i=za(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),i)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.closeWatcher)==null||i.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(i){return this.trigger.split(" ").includes(i)}async handleOpenChange(){var i,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((i=this.closeWatcher)==null||i.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await ft(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:s}=rt(this,"tooltip.show",{dir:this.localize.dir()});await ht(this.popup.popup,e,s),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await ft(this.body);const{keyframes:e,options:s}=rt(this,"tooltip.hide",{dir:this.localize.dir()});await ht(this.popup.popup,e,s),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Ft(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ft(this,"sl-after-hide")}render(){return C`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${D({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};_t.styles=[V,ed];_t.dependencies={"sl-popup":Q};c([z("slot:not([name])")],_t.prototype,"defaultSlot",2);c([z(".tooltip__body")],_t.prototype,"body",2);c([z("sl-popup")],_t.prototype,"popup",2);c([f()],_t.prototype,"content",2);c([f()],_t.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],_t.prototype,"disabled",2);c([f({type:Number})],_t.prototype,"distance",2);c([f({type:Boolean,reflect:!0})],_t.prototype,"open",2);c([f({type:Number})],_t.prototype,"skidding",2);c([f()],_t.prototype,"trigger",2);c([f({type:Boolean})],_t.prototype,"hoist",2);c([$("open",{waitUntilFirstUpdate:!0})],_t.prototype,"handleOpenChange",1);c([$(["content","distance","hoist","placement","skidding"])],_t.prototype,"handleOptionsChange",1);c([$("disabled")],_t.prototype,"handleDisabledChange",1);K("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});K("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});_t.define("sl-tooltip");var tp=I`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function pt(i,t,e){const s=r=>Object.is(r,-0)?0:r;return i<t?s(t):i>e?s(e):s(i)}function Da(i,t=!1){function e(o){const n=o.getChildrenItems({includeDisabled:!1});if(n.length){const a=n.every(h=>h.selected),l=n.every(h=>!h.selected&&!h.indeterminate);o.selected=a,o.indeterminate=!a&&!l}}function s(o){const n=o.parentElement;Os.isTreeItem(n)&&(e(n),s(n))}function r(o){for(const n of o.getChildrenItems())n.selected=t?o.selected||n.selected:!n.disabled&&o.selected,r(n);t&&e(o)}r(i),s(i)}var Mi=class extends R{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new W(this),this.initTreeItem=i=>{i.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const e=i.querySelector(`[slot="${t}-icon"]`),s=this.getExpandButtonIcon(t);s&&(e===null?i.append(s):e.hasAttribute("data-default")&&e.replaceWith(s))})},this.handleTreeChanged=i=>{for(const t of i){const e=[...t.addedNodes].filter(Os.isTreeItem),s=[...t.removedNodes].filter(Os.isTreeItem);e.forEach(this.initTreeItem),this.lastFocusedItem&&s.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=i=>{const t=i.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=i=>{const t=i.target;i.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Os.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.mutationObserver)==null||i.disconnect()}getExpandButtonIcon(i){const e=(i==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(e){const s=e.cloneNode(!0);return[s,...s.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),s.setAttribute("data-default",""),s.slot=`${i}-icon`,s}return null}selectItem(i){const t=[...this.selectedItems];if(this.selection==="multiple")i.selected=!i.selected,i.lazy&&(i.expanded=!0),Da(i);else if(this.selection==="single"||i.isLeaf){const s=this.getAllTreeItems();for(const r of s)r.selected=r===i}else this.selection==="leaf"&&(i.expanded=!i.expanded);const e=this.selectedItems;(t.length!==e.length||e.some(s=>!t.includes(s)))&&Promise.all(e.map(s=>s.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:e}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(i){i?.focus()}handleKeyDown(i){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(i.key)||i.composedPath().some(r=>{var o;return["input","textarea"].includes((o=r?.tagName)==null?void 0:o.toLowerCase())}))return;const t=this.getFocusableItems(),e=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(t.length>0){i.preventDefault();const r=t.findIndex(l=>l.matches(":focus")),o=t[r],n=l=>{const h=t[pt(l,0,t.length-1)];this.focusItem(h)},a=l=>{o.expanded=l};i.key==="ArrowDown"?n(r+1):i.key==="ArrowUp"?n(r-1):e&&i.key==="ArrowRight"||s&&i.key==="ArrowLeft"?!o||o.disabled||o.expanded||o.isLeaf&&!o.lazy?n(r+1):a(!0):e&&i.key==="ArrowLeft"||s&&i.key==="ArrowRight"?!o||o.disabled||o.isLeaf||!o.expanded?n(r-1):a(!1):i.key==="Home"?n(0):i.key==="End"?n(t.length-1):(i.key==="Enter"||i.key===" ")&&(o.disabled||this.selectItem(o))}}handleClick(i){const t=i.target,e=t.closest("sl-tree-item"),s=i.composedPath().some(r=>{var o;return(o=r?.classList)==null?void 0:o.contains("tree-item__expand-button")});!e||e.disabled||t!==this.clickTarget||(s?e.expanded=!e.expanded:this.selectItem(e))}handleMouseDown(i){this.clickTarget=i.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const i=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",i?"true":"false");for(const e of t)e.selectable=i;i&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(e=>Da(e,!0)))}get selectedItems(){const i=this.getAllTreeItems(),t=e=>e.selected;return i.filter(t)}getFocusableItems(){const i=this.getAllTreeItems(),t=new Set;return i.filter(e=>{var s;if(e.disabled)return!1;const r=(s=e.parentElement)==null?void 0:s.closest("[role=treeitem]");return r&&(!r.expanded||r.loading||t.has(r))&&t.add(e),!t.has(e)})}render(){return C`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Mi.styles=[V,tp];c([z("slot:not([name])")],Mi.prototype,"defaultSlot",2);c([z("slot[name=expand-icon]")],Mi.prototype,"expandedIconSlot",2);c([z("slot[name=collapse-icon]")],Mi.prototype,"collapsedIconSlot",2);c([f()],Mi.prototype,"selection",2);c([$("selection")],Mi.prototype,"handleSelectionChange",1);Mi.define("sl-tree");var ep=I`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,Hn=class extends R{render(){return C` <slot></slot> `}};Hn.styles=[V,ep];Hn.define("sl-visually-hidden");var ip=I`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,sp=0,sr=class extends R{constructor(){super(...arguments),this.attrId=++sp,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return C`
      <slot
        part="base"
        class=${D({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};sr.styles=[V,ip];c([f({reflect:!0})],sr.prototype,"name",2);c([f({type:Boolean,reflect:!0})],sr.prototype,"active",2);c([$("active")],sr.prototype,"handleActiveChange",1);sr.define("sl-tab-panel");var rp=I`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,op=I`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;const Eh=Symbol.for(""),np=i=>{if(i?.r===Eh)return i?._$litStatic$},Hr=(i,...t)=>({_$litStatic$:t.reduce(((e,s,r)=>e+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+i[r+1]),i[0]),r:Eh}),Va=new Map,ap=i=>(t,...e)=>{const s=e.length;let r,o;const n=[],a=[];let l,h=0,d=!1;for(;h<s;){for(l=t[h];h<s&&(o=e[h],(r=np(o))!==void 0);)l+=r+t[++h],d=!0;h!==s&&a.push(o),n.push(l),h++}if(h===s&&n.push(t[s]),d){const u=n.join("$$lit$$");(t=Va.get(u))===void 0&&(n.raw=n,Va.set(u,t=n)),e=a}return i(t,...e)},Rs=ap(C);var yt=class extends R{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(i){this.disabled&&(i.preventDefault(),i.stopPropagation())}click(){this.button.click()}focus(i){this.button.focus(i)}blur(){this.button.blur()}render(){const i=!!this.href,t=i?Hr`a`:Hr`button`;return Rs`
      <${t}
        part="base"
        class=${D({"icon-button":!0,"icon-button--disabled":!i&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${O(i?void 0:this.disabled)}
        type=${O(i?void 0:"button")}
        href=${O(i?this.href:void 0)}
        target=${O(i?this.target:void 0)}
        download=${O(i?this.download:void 0)}
        rel=${O(i&&this.target?"noreferrer noopener":void 0)}
        role=${O(i?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${O(this.name)}
          library=${O(this.library)}
          src=${O(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};yt.styles=[V,op];yt.dependencies={"sl-icon":et};c([z(".icon-button")],yt.prototype,"button",2);c([L()],yt.prototype,"hasFocus",2);c([f()],yt.prototype,"name",2);c([f()],yt.prototype,"library",2);c([f()],yt.prototype,"src",2);c([f()],yt.prototype,"href",2);c([f()],yt.prototype,"target",2);c([f()],yt.prototype,"download",2);c([f()],yt.prototype,"label",2);c([f({type:Boolean,reflect:!0})],yt.prototype,"disabled",2);var oi=class extends R{constructor(){super(...arguments),this.localize=new W(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return C`
      <span
        part="base"
        class=${D({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?C`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};oi.styles=[V,rp];oi.dependencies={"sl-icon-button":yt};c([f({reflect:!0})],oi.prototype,"variant",2);c([f({reflect:!0})],oi.prototype,"size",2);c([f({type:Boolean,reflect:!0})],oi.prototype,"pill",2);c([f({type:Boolean})],oi.prototype,"removable",2);oi.define("sl-tag");var lp=I`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,Y=class extends R{constructor(){super(...arguments),this.formControlController=new Ye(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Nt(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var i;super.disconnectedCallback(),this.input&&((i=this.resizeObserver)==null||i.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(i){this.input.focus(i)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(i){if(i){typeof i.top=="number"&&(this.input.scrollTop=i.top),typeof i.left=="number"&&(this.input.scrollLeft=i.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(i,t,e="none"){this.input.setSelectionRange(i,t,e)}setRangeText(i,t,e,s="preserve"){const r=t??this.input.selectionStart,o=e??this.input.selectionEnd;this.input.setRangeText(i,r,o,s),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(i){this.input.setCustomValidity(i),this.formControlController.updateValidity()}render(){const i=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),e=this.label?!0:!!i,s=this.helpText?!0:!!t;return C`
      <div
        part="form-control"
        class=${D({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":e,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${e?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${D({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${O(this.name)}
              .value=${yi(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${O(this.placeholder)}
              rows=${O(this.rows)}
              minlength=${O(this.minlength)}
              maxlength=${O(this.maxlength)}
              autocapitalize=${O(this.autocapitalize)}
              autocorrect=${O(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${O(this.spellcheck)}
              enterkeyhint=${O(this.enterkeyhint)}
              inputmode=${O(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Y.styles=[V,Pi,lp];c([z(".textarea__control")],Y.prototype,"input",2);c([z(".textarea__size-adjuster")],Y.prototype,"sizeAdjuster",2);c([L()],Y.prototype,"hasFocus",2);c([f()],Y.prototype,"title",2);c([f()],Y.prototype,"name",2);c([f()],Y.prototype,"value",2);c([f({reflect:!0})],Y.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Y.prototype,"filled",2);c([f()],Y.prototype,"label",2);c([f({attribute:"help-text"})],Y.prototype,"helpText",2);c([f()],Y.prototype,"placeholder",2);c([f({type:Number})],Y.prototype,"rows",2);c([f()],Y.prototype,"resize",2);c([f({type:Boolean,reflect:!0})],Y.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],Y.prototype,"readonly",2);c([f({reflect:!0})],Y.prototype,"form",2);c([f({type:Boolean,reflect:!0})],Y.prototype,"required",2);c([f({type:Number})],Y.prototype,"minlength",2);c([f({type:Number})],Y.prototype,"maxlength",2);c([f()],Y.prototype,"autocapitalize",2);c([f()],Y.prototype,"autocorrect",2);c([f()],Y.prototype,"autocomplete",2);c([f({type:Boolean})],Y.prototype,"autofocus",2);c([f()],Y.prototype,"enterkeyhint",2);c([f({type:Boolean,converter:{fromAttribute:i=>!(!i||i==="false"),toAttribute:i=>i?"true":"false"}})],Y.prototype,"spellcheck",2);c([f()],Y.prototype,"inputmode",2);c([ls()],Y.prototype,"defaultValue",2);c([$("disabled",{waitUntilFirstUpdate:!0})],Y.prototype,"handleDisabledChange",1);c([$("rows",{waitUntilFirstUpdate:!0})],Y.prototype,"handleRowsChange",1);c([$("value",{waitUntilFirstUpdate:!0})],Y.prototype,"handleValueChange",1);Y.define("sl-textarea");var hp=I`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,cp=0,me=class extends R{constructor(){super(...arguments),this.localize=new W(this),this.attrId=++cp,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(i){i.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,C`
      <div
        part="base"
        class=${D({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?C`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};me.styles=[V,hp];me.dependencies={"sl-icon-button":yt};c([z(".tab")],me.prototype,"tab",2);c([f({reflect:!0})],me.prototype,"panel",2);c([f({type:Boolean,reflect:!0})],me.prototype,"active",2);c([f({type:Boolean,reflect:!0})],me.prototype,"closable",2);c([f({type:Boolean,reflect:!0})],me.prototype,"disabled",2);c([f({type:Number,reflect:!0})],me.prototype,"tabIndex",2);c([$("active")],me.prototype,"handleActiveChange",1);c([$("disabled")],me.prototype,"handleDisabledChange",1);me.define("sl-tab");var up=I`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,dp=I`
  :host {
    display: contents;
  }
`,rr=class extends R{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(i=>{this.emit("sl-resize",{detail:{entries:i}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const i=this.shadowRoot.querySelector("slot");if(i!==null){const t=i.assignedElements({flatten:!0});this.observedElements.forEach(e=>this.resizeObserver.unobserve(e)),this.observedElements=[],t.forEach(e=>{this.resizeObserver.observe(e),this.observedElements.push(e)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return C` <slot @slotchange=${this.handleSlotChange}></slot> `}};rr.styles=[V,dp];c([f({type:Boolean,reflect:!0})],rr.prototype,"disabled",2);c([$("disabled",{waitUntilFirstUpdate:!0})],rr.prototype,"handleDisabledChange",1);function pp(i,t){return{top:Math.round(i.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(i.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var ln=new Set;function fp(){const i=document.documentElement.clientWidth;return Math.abs(window.innerWidth-i)}function mp(){const i=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(i)||!i?0:i}function Is(i){if(ln.add(i),!document.documentElement.classList.contains("sl-scroll-lock")){const t=fp()+mp();let e=getComputedStyle(document.documentElement).scrollbarGutter;(!e||e==="auto")&&(e="stable"),t<2&&(e=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",e),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Ls(i){ln.delete(i),ln.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function hn(i,t,e="vertical",s="smooth"){const r=pp(i,t),o=r.top+t.scrollTop,n=r.left+t.scrollLeft,a=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,h=t.scrollTop,d=t.scrollTop+t.offsetHeight;(e==="horizontal"||e==="both")&&(n<a?t.scrollTo({left:n,behavior:s}):n+i.clientWidth>l&&t.scrollTo({left:n-t.offsetWidth+i.clientWidth,behavior:s})),(e==="vertical"||e==="both")&&(o<h?t.scrollTo({top:o,behavior:s}):o+i.clientHeight>d&&t.scrollTo({top:o-t.offsetHeight+i.clientHeight,behavior:s}))}var At=class extends R{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new W(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const i=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{const e=t.filter(({target:s})=>{if(s===this)return!0;if(s.closest("sl-tab-group")!==this)return!1;const r=s.tagName.toLowerCase();return r==="sl-tab"||r==="sl-tab-panel"});if(e.length!==0){if(e.some(s=>!["aria-labelledby","aria-controls"].includes(s.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(s=>s.attributeName==="disabled"))this.syncTabsAndPanels();else if(e.some(s=>s.attributeName==="active")){const r=e.filter(o=>o.attributeName==="active"&&o.target.tagName.toLowerCase()==="sl-tab").map(o=>o.target).find(o=>o.active);r&&this.setActiveTab(r)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),i.then(()=>{new IntersectionObserver((e,s)=>{var r;e[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((r=this.getActiveTab())!=null?r:this.tabs[0],{emitEvents:!1}),s.unobserve(e[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var i,t;super.disconnectedCallback(),(i=this.mutationObserver)==null||i.disconnect(),this.nav&&((t=this.resizeObserver)==null||t.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(i=>i.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(i=>i.active)}handleClick(i){const e=i.target.closest("sl-tab");e?.closest("sl-tab-group")===this&&e!==null&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(i){const e=i.target.closest("sl-tab");if(e?.closest("sl-tab-group")===this&&(["Enter"," "].includes(i.key)&&e!==null&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),i.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(i.key))){const r=this.tabs.find(a=>a.matches(":focus")),o=this.localize.dir()==="rtl";let n=null;if(r?.tagName.toLowerCase()==="sl-tab"){if(i.key==="Home")n=this.focusableTabs[0];else if(i.key==="End")n=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&i.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&i.key==="ArrowUp"){const a=this.tabs.findIndex(l=>l===r);n=this.findNextFocusableTab(a,"backward")}else if(["top","bottom"].includes(this.placement)&&i.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&i.key==="ArrowDown"){const a=this.tabs.findIndex(l=>l===r);n=this.findNextFocusableTab(a,"forward")}if(!n)return;n.tabIndex=0,n.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(n,{scrollBehavior:"smooth"}):this.tabs.forEach(a=>{a.tabIndex=a===n?0:-1}),["top","bottom"].includes(this.placement)&&hn(n,this.nav,"horizontal"),i.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(i,t){if(t=We({emitEvents:!0,scrollBehavior:"auto"},t),i!==this.activeTab&&!i.disabled){const e=this.activeTab;this.activeTab=i,this.tabs.forEach(s=>{s.active=s===this.activeTab,s.tabIndex=s===this.activeTab?0:-1}),this.panels.forEach(s=>{var r;return s.active=s.name===((r=this.activeTab)==null?void 0:r.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&hn(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(e&&this.emit("sl-tab-hide",{detail:{name:e.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(i=>{const t=this.panels.find(e=>e.name===i.panel);t&&(i.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",i.getAttribute("id")))})}repositionIndicator(){const i=this.getActiveTab();if(!i)return;const t=i.clientWidth,e=i.clientHeight,s=this.localize.dir()==="rtl",r=this.getAllTabs(),n=r.slice(0,r.indexOf(i)).reduce((a,l)=>({left:a.left+l.clientWidth,top:a.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=s?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${e}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(i=>!i.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(i,t){let e=null;const s=t==="forward"?1:-1;let r=i+s;for(;i<this.tabs.length;){if(e=this.tabs[r]||null,e===null){t==="forward"?e=this.focusableTabs[0]:e=this.focusableTabs[this.focusableTabs.length-1];break}if(!e.disabled)break;r+=s}return e}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(i){const t=this.tabs.find(e=>e.panel===i);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const i=this.localize.dir()==="rtl";return C`
      <div
        part="base"
        class=${D({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?C`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${D({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${i?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?C`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${D({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${i?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};At.styles=[V,up];At.dependencies={"sl-icon-button":yt,"sl-resize-observer":rr};c([z(".tab-group")],At.prototype,"tabGroup",2);c([z(".tab-group__body")],At.prototype,"body",2);c([z(".tab-group__nav")],At.prototype,"nav",2);c([z(".tab-group__indicator")],At.prototype,"indicator",2);c([L()],At.prototype,"hasScrollControls",2);c([L()],At.prototype,"shouldHideScrollStartButton",2);c([L()],At.prototype,"shouldHideScrollEndButton",2);c([f()],At.prototype,"placement",2);c([f()],At.prototype,"activation",2);c([f({attribute:"no-scroll-controls",type:Boolean})],At.prototype,"noScrollControls",2);c([f({attribute:"fixed-scroll-controls",type:Boolean})],At.prototype,"fixedScrollControls",2);c([Js({passive:!0})],At.prototype,"updateScrollButtons",1);c([$("noScrollControls",{waitUntilFirstUpdate:!0})],At.prototype,"updateScrollControls",1);c([$("placement",{waitUntilFirstUpdate:!0})],At.prototype,"syncIndicator",1);At.define("sl-tab-group");var gp=I`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,Un=class extends R{constructor(){super(...arguments),this.effect="none"}render(){return C`
      <div
        part="base"
        class=${D({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Un.styles=[V,gp];c([f()],Un.prototype,"effect",2);Un.define("sl-skeleton");var vp=I`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function Ds(i,t){function e(r){const o=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,a=o.left+n.scrollX,l=o.top+n.scrollY,h=r.pageX-a,d=r.pageY-l;t?.onMove&&t.onMove(h,d)}function s(){document.removeEventListener("pointermove",e),document.removeEventListener("pointerup",s),t?.onStop&&t.onStop()}document.addEventListener("pointermove",e,{passive:!0}),document.addEventListener("pointerup",s),t?.initialEvent instanceof PointerEvent&&e(t.initialEvent)}var Fa=()=>null,ie=class extends R{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new W(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=Fa,this.snapThreshold=12}toSnapFunction(i){const t=i.split(" ");return({pos:e,size:s,snapThreshold:r,isRtl:o,vertical:n})=>{let a=e,l=Number.POSITIVE_INFINITY;return t.forEach(h=>{let d;if(h.startsWith("repeat(")){const p=i.substring(7,i.length-1),m=p.endsWith("%"),g=Number.parseFloat(p),v=m?s*(g/100):g;d=Math.round((o&&!n?s-e:e)/v)*v}else h.endsWith("%")?d=s*(Number.parseFloat(h)/100):d=Number.parseFloat(h);o&&!n&&(d=s-d);const u=Math.abs(e-d);u<=r&&u<l&&(a=d,l=u)}),a}}set snap(i){this.snapValue=i??"",i?this.snapFunction=typeof i=="string"?this.toSnapFunction(i):i:this.snapFunction=Fa}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(i=>this.handleResize(i)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.resizeObserver)==null||i.unobserve(this)}detectSize(){const{width:i,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:i}percentageToPixels(i){return this.size*(i/100)}pixelsToPercentage(i){return i/this.size*100}handleDrag(i){const t=this.localize.dir()==="rtl";this.disabled||(i.cancelable&&i.preventDefault(),Ds(this,{onMove:(e,s)=>{var r;let o=this.vertical?s:e;this.primary==="end"&&(o=this.size-o),o=(r=this.snapFunction({pos:o,size:this.size,snapThreshold:this.snapThreshold,isRtl:t,vertical:this.vertical}))!=null?r:o,this.position=pt(this.pixelsToPercentage(o),0,100)},initialEvent:i}))}handleKeyDown(i){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(i.key)){let t=this.position;const e=(i.shiftKey?10:1)*(this.primary==="end"?-1:1);if(i.preventDefault(),(i.key==="ArrowLeft"&&!this.vertical||i.key==="ArrowUp"&&this.vertical)&&(t-=e),(i.key==="ArrowRight"&&!this.vertical||i.key==="ArrowDown"&&this.vertical)&&(t+=e),i.key==="Home"&&(t=this.primary==="end"?100:0),i.key==="End"&&(t=this.primary==="end"?0:100),i.key==="Enter")if(this.isCollapsed)t=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const s=this.position;t=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=s})}this.position=pt(t,0,100)}}handleResize(i){const{width:t,height:e}=i[0].contentRect;this.size=this.vertical?e:t,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const i=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",e=this.localize.dir()==="rtl",s=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,r="auto";return this.primary==="end"?e&&!this.vertical?this.style[i]=`${s} var(--divider-width) ${r}`:this.style[i]=`${r} var(--divider-width) ${s}`:e&&!this.vertical?this.style[i]=`${r} var(--divider-width) ${s}`:this.style[i]=`${s} var(--divider-width) ${r}`,this.style[t]="",C`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${O(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};ie.styles=[V,vp];c([z(".divider")],ie.prototype,"divider",2);c([f({type:Number,reflect:!0})],ie.prototype,"position",2);c([f({attribute:"position-in-pixels",type:Number})],ie.prototype,"positionInPixels",2);c([f({type:Boolean,reflect:!0})],ie.prototype,"vertical",2);c([f({type:Boolean,reflect:!0})],ie.prototype,"disabled",2);c([f()],ie.prototype,"primary",2);c([f({reflect:!0})],ie.prototype,"snap",1);c([f({type:Number,attribute:"snap-threshold"})],ie.prototype,"snapThreshold",2);c([$("position")],ie.prototype,"handlePositionChange",1);c([$("positionInPixels")],ie.prototype,"handlePositionInPixelsChange",1);c([$("vertical")],ie.prototype,"handleVerticalChange",1);ie.define("sl-split-panel");var bp=I`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,It=class extends R{constructor(){super(...arguments),this.formControlController=new Ye(this,{value:i=>i.checked?i.value||"on":void 0,defaultValue:i=>i.defaultChecked,setValue:(i,t)=>i.checked=t}),this.hasSlotController=new Nt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(i){i.key==="ArrowLeft"&&(i.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),i.key==="ArrowRight"&&(i.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(i){this.input.focus(i)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(i){this.input.setCustomValidity(i),this.formControlController.updateValidity()}render(){const i=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!i;return C`
      <div
        class=${D({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${D({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${O(this.value)}
            .checked=${yi(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};It.styles=[V,Pi,bp];c([z('input[type="checkbox"]')],It.prototype,"input",2);c([L()],It.prototype,"hasFocus",2);c([f()],It.prototype,"title",2);c([f()],It.prototype,"name",2);c([f()],It.prototype,"value",2);c([f({reflect:!0})],It.prototype,"size",2);c([f({type:Boolean,reflect:!0})],It.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],It.prototype,"checked",2);c([ls("checked")],It.prototype,"defaultChecked",2);c([f({reflect:!0})],It.prototype,"form",2);c([f({type:Boolean,reflect:!0})],It.prototype,"required",2);c([f({attribute:"help-text"})],It.prototype,"helpText",2);c([$("checked",{waitUntilFirstUpdate:!0})],It.prototype,"handleCheckedChange",1);c([$("disabled",{waitUntilFirstUpdate:!0})],It.prototype,"handleDisabledChange",1);It.define("sl-switch");rr.define("sl-resize-observer");var yp=I`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;let cn=class extends tr{constructor(t){if(super(t),this.it=st,t.type!==Se.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===st||t==null)return this._t=void 0,this.it=t;if(t===Jt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};cn.directiveName="unsafeHTML",cn.resultType=1;const Or=Zs(cn);var B=class extends R{constructor(){super(...arguments),this.formControlController=new Ye(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Nt(this,"help-text","label"),this.localize=new W(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=i=>C`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,i)}
      >
        ${i.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=i=>{const t=i.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=i=>{const t=i.target,e=t.closest(".select__clear")!==null,s=t.closest("sl-icon-button")!==null;if(!(e||s)){if(i.key==="Escape"&&this.open&&!this.closeWatcher&&(i.preventDefault(),i.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),i.key==="Enter"||i.key===" "&&this.typeToSelectString===""){if(i.preventDefault(),i.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(i.key)){const r=this.getAllOptions(),o=r.indexOf(this.currentOption);let n=Math.max(0,o);if(i.preventDefault(),!this.open&&(this.show(),this.currentOption))return;i.key==="ArrowDown"?(n=o+1,n>r.length-1&&(n=0)):i.key==="ArrowUp"?(n=o-1,n<0&&(n=r.length-1)):i.key==="Home"?n=0:i.key==="End"&&(n=r.length-1),this.setCurrentOption(r[n])}if(i.key&&i.key.length===1||i.key==="Backspace"){const r=this.getAllOptions();if(i.metaKey||i.ctrlKey||i.altKey)return;if(!this.open){if(i.key==="Backspace")return;this.show()}i.stopPropagation(),i.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),i.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=i.key.toLowerCase();for(const o of r)if(o.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(o);break}}}},this.handleDocumentMouseDown=i=>{const t=i.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(i){this.multiple?i=Array.isArray(i)?i:i.split(" "):i=Array.isArray(i)?i.join(" "):i,this._value!==i&&(this.valueHasChanged=!0,this._value=i)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var i;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((i=this.closeWatcher)==null||i.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var i;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(i=this.closeWatcher)==null||i.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(i){const e=i.composedPath().some(s=>s instanceof Element&&s.tagName.toLowerCase()==="sl-icon-button");this.disabled||e||(i.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(i){i.key!=="Tab"&&(i.stopPropagation(),this.handleDocumentKeyDown(i))}handleClearClick(i){i.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(i){i.stopPropagation(),i.preventDefault()}handleOptionClick(i){const e=i.target.closest("sl-option"),s=this.value;e&&!e.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(e):this.setSelectedOptions(e),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==s&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const i=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,e=Array.isArray(t)?t:[t],s=[];i.forEach(r=>s.push(r.value)),this.setSelectedOptions(i.filter(r=>e.includes(r.value)))}handleTagRemove(i,t){i.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(i){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),i&&(this.currentOption=i,i.current=!0,i.tabIndex=0,i.focus())}setSelectedOptions(i){const t=this.getAllOptions(),e=Array.isArray(i)?i:[i];t.forEach(s=>s.selected=!1),e.length&&e.forEach(s=>s.selected=!0),this.selectionChanged()}toggleOptionSelection(i,t){t===!0||t===!1?i.selected=t:i.selected=!i.selected,this.selectionChanged()}selectionChanged(){var i,t,e;const s=this.getAllOptions();this.selectedOptions=s.filter(o=>o.selected);const r=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(o=>o.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const o=this.selectedOptions[0];this.value=(i=o?.value)!=null?i:"",this.displayLabel=(e=(t=o?.getTextLabel)==null?void 0:t.call(o))!=null?e:""}this.valueHasChanged=r,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((i,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const e=this.getTag(i,t);return C`<div @sl-remove=${s=>this.handleTagRemove(s,i)}>
          ${typeof e=="string"?Or(e):e}
        </div>`}else if(t===this.maxOptionsVisible)return C`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return C``})}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(i,t,e){if(super.attributeChangedCallback(i,t,e),i==="value"){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}}handleValueChange(){if(!this.valueHasChanged){const e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}const i=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(i.filter(e=>t.includes(e.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await ft(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:i,options:t}=rt(this,"select.show",{dir:this.localize.dir()});await ht(this.popup.popup,i,t),this.currentOption&&hn(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ft(this);const{keyframes:i,options:t}=rt(this,"select.hide",{dir:this.localize.dir()});await ht(this.popup.popup,i,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Ft(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Ft(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(i){this.valueInput.setCustomValidity(i),this.formControlController.updateValidity()}focus(i){this.displayInput.focus(i)}blur(){this.displayInput.blur()}render(){const i=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),e=this.label?!0:!!i,s=this.helpText?!0:!!t,r=this.clearable&&!this.disabled&&this.value.length>0,o=this.placeholder&&this.value&&this.value.length<=0;return C`
      <div
        part="form-control"
        class=${D({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":e,"form-control--has-help-text":s})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${e?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${D({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":o,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?C`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${r?C`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};B.styles=[V,Pi,yp];B.dependencies={"sl-icon":et,"sl-popup":Q,"sl-tag":oi};c([z(".select")],B.prototype,"popup",2);c([z(".select__combobox")],B.prototype,"combobox",2);c([z(".select__display-input")],B.prototype,"displayInput",2);c([z(".select__value-input")],B.prototype,"valueInput",2);c([z(".select__listbox")],B.prototype,"listbox",2);c([L()],B.prototype,"hasFocus",2);c([L()],B.prototype,"displayLabel",2);c([L()],B.prototype,"currentOption",2);c([L()],B.prototype,"selectedOptions",2);c([L()],B.prototype,"valueHasChanged",2);c([f()],B.prototype,"name",2);c([L()],B.prototype,"value",1);c([f({attribute:"value"})],B.prototype,"defaultValue",2);c([f({reflect:!0})],B.prototype,"size",2);c([f()],B.prototype,"placeholder",2);c([f({type:Boolean,reflect:!0})],B.prototype,"multiple",2);c([f({attribute:"max-options-visible",type:Number})],B.prototype,"maxOptionsVisible",2);c([f({type:Boolean,reflect:!0})],B.prototype,"disabled",2);c([f({type:Boolean})],B.prototype,"clearable",2);c([f({type:Boolean,reflect:!0})],B.prototype,"open",2);c([f({type:Boolean})],B.prototype,"hoist",2);c([f({type:Boolean,reflect:!0})],B.prototype,"filled",2);c([f({type:Boolean,reflect:!0})],B.prototype,"pill",2);c([f()],B.prototype,"label",2);c([f({reflect:!0})],B.prototype,"placement",2);c([f({attribute:"help-text"})],B.prototype,"helpText",2);c([f({reflect:!0})],B.prototype,"form",2);c([f({type:Boolean,reflect:!0})],B.prototype,"required",2);c([f()],B.prototype,"getTag",2);c([$("disabled",{waitUntilFirstUpdate:!0})],B.prototype,"handleDisabledChange",1);c([$(["defaultValue","value"],{waitUntilFirstUpdate:!0})],B.prototype,"handleValueChange",1);c([$("open",{waitUntilFirstUpdate:!0})],B.prototype,"handleOpenChange",1);K("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});K("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});B.define("sl-select");er.define("sl-spinner");var _p=I`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,at=class extends R{constructor(){super(...arguments),this.formControlController=new Ye(this),this.hasSlotController=new Nt(this,"help-text","label"),this.localize=new W(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=i=>i.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.resizeObserver)==null||i.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(i){this.input.style.setProperty("--percent",`${i*100}%`)}syncTooltip(i){if(this.output!==null){const t=this.input.offsetWidth,e=this.output.offsetWidth,s=getComputedStyle(this.input).getPropertyValue("--thumb-size"),r=this.localize.dir()==="rtl",o=t*i;if(r){const n=`${t-o}px + ${i} * ${s}`;this.output.style.translate=`calc((${n} - ${e/2}px - ${s} / 2))`}else{const n=`${o}px - ${i} * ${s}`;this.output.style.translate=`calc(${n} - ${e/2}px + ${s} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const i=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(i),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(i))}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}focus(i){this.input.focus(i)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(i){this.input.setCustomValidity(i),this.formControlController.updateValidity()}render(){const i=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),e=this.label?!0:!!i,s=this.helpText?!0:!!t;return C`
      <div
        part="form-control"
        class=${D({"form-control":!0,"form-control--medium":!0,"form-control--has-label":e,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${e?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${D({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${O(this.name)}
              ?disabled=${this.disabled}
              min=${O(this.min)}
              max=${O(this.max)}
              step=${O(this.step)}
              .value=${yi(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?C`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};at.styles=[V,Pi,_p];c([z(".range__control")],at.prototype,"input",2);c([z(".range__tooltip")],at.prototype,"output",2);c([L()],at.prototype,"hasFocus",2);c([L()],at.prototype,"hasTooltip",2);c([f()],at.prototype,"title",2);c([f()],at.prototype,"name",2);c([f({type:Number})],at.prototype,"value",2);c([f()],at.prototype,"label",2);c([f({attribute:"help-text"})],at.prototype,"helpText",2);c([f({type:Boolean,reflect:!0})],at.prototype,"disabled",2);c([f({type:Number})],at.prototype,"min",2);c([f({type:Number})],at.prototype,"max",2);c([f({type:Number})],at.prototype,"step",2);c([f()],at.prototype,"tooltip",2);c([f({attribute:!1})],at.prototype,"tooltipFormatter",2);c([f({reflect:!0})],at.prototype,"form",2);c([ls()],at.prototype,"defaultValue",2);c([Js({passive:!0})],at.prototype,"handleThumbDragStart",1);c([$("value",{waitUntilFirstUpdate:!0})],at.prototype,"handleValueChange",1);c([$("disabled",{waitUntilFirstUpdate:!0})],at.prototype,"handleDisabledChange",1);c([$("hasTooltip",{waitUntilFirstUpdate:!0})],at.prototype,"syncRange",1);at.define("sl-range");var wp=I`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;const Ph="important",xp=" !"+Ph,Ht=Zs(class extends tr{constructor(i){if(super(i),i.type!==Se.ATTRIBUTE||i.name!=="style"||i.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce(((t,e)=>{const s=i[e];return s==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(i,[t]){const{style:e}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const s of this.ft)t[s]==null&&(this.ft.delete(s),s.includes("-")?e.removeProperty(s):e[s]=null);for(const s in t){const r=t[s];if(r!=null){this.ft.add(s);const o=typeof r=="string"&&r.endsWith(xp);s.includes("-")||o?e.setProperty(s,o?r.slice(0,-11):r,o?Ph:""):e[s]=r}}return Jt}});var Lt=class extends R{constructor(){super(...arguments),this.localize=new W(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(i){return this.getValueFromXCoordinate(i.clientX)}getValueFromTouchPosition(i){return this.getValueFromXCoordinate(i.touches[0].clientX)}getValueFromXCoordinate(i){const t=this.localize.dir()==="rtl",{left:e,right:s,width:r}=this.rating.getBoundingClientRect(),o=t?this.roundToPrecision((s-i)/r*this.max,this.precision):this.roundToPrecision((i-e)/r*this.max,this.precision);return pt(o,0,this.max)}handleClick(i){this.disabled||(this.setValue(this.getValueFromMousePosition(i)),this.emit("sl-change"))}setValue(i){this.disabled||this.readonly||(this.value=i===this.value?0:i,this.isHovering=!1)}handleKeyDown(i){const t=this.localize.dir()==="ltr",e=this.localize.dir()==="rtl",s=this.value;if(!(this.disabled||this.readonly)){if(i.key==="ArrowDown"||t&&i.key==="ArrowLeft"||e&&i.key==="ArrowRight"){const r=i.shiftKey?1:this.precision;this.value=Math.max(0,this.value-r),i.preventDefault()}if(i.key==="ArrowUp"||t&&i.key==="ArrowRight"||e&&i.key==="ArrowLeft"){const r=i.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+r),i.preventDefault()}i.key==="Home"&&(this.value=0,i.preventDefault()),i.key==="End"&&(this.value=this.max,i.preventDefault()),this.value!==s&&this.emit("sl-change")}}handleMouseEnter(i){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(i)}handleMouseMove(i){this.hoverValue=this.getValueFromMousePosition(i)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(i){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(i),i.preventDefault()}handleTouchMove(i){this.hoverValue=this.getValueFromTouchPosition(i)}handleTouchEnd(i){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),i.preventDefault()}roundToPrecision(i,t=.5){const e=1/t;return Math.ceil(i*e)/e}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(i){this.rating.focus(i)}blur(){this.rating.blur()}render(){const i=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let e=0;return this.disabled||this.readonly?e=this.value:e=this.isHovering?this.hoverValue:this.value,C`
      <div
        part="base"
        class=${D({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":i})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${t.map(s=>e>s&&e<s+1?C`
                <span
                  class=${D({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(e)===s+1})}
                  role="presentation"
                >
                  <div
                    style=${Ht({clipPath:i?`inset(0 ${(e-s)*100}% 0 0)`:`inset(0 0 0 ${(e-s)*100}%)`})}
                  >
                    ${Or(this.getSymbol(s+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${Ht({clipPath:i?`inset(0 0 0 ${100-(e-s)*100}%)`:`inset(0 ${100-(e-s)*100}% 0 0)`})}
                  >
                    ${Or(this.getSymbol(s+1))}
                  </div>
                </span>
              `:C`
              <span
                class=${D({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(e)===s+1,"rating__symbol--active":e>=s+1})}
                role="presentation"
              >
                ${Or(this.getSymbol(s+1))}
              </span>
            `)}
        </span>
      </div>
    `}};Lt.styles=[V,wp];Lt.dependencies={"sl-icon":et};c([z(".rating")],Lt.prototype,"rating",2);c([L()],Lt.prototype,"hoverValue",2);c([L()],Lt.prototype,"isHovering",2);c([f()],Lt.prototype,"label",2);c([f({type:Number})],Lt.prototype,"value",2);c([f({type:Number})],Lt.prototype,"max",2);c([f({type:Number})],Lt.prototype,"precision",2);c([f({type:Boolean,reflect:!0})],Lt.prototype,"readonly",2);c([f({type:Boolean,reflect:!0})],Lt.prototype,"disabled",2);c([f()],Lt.prototype,"getSymbol",2);c([Js({passive:!0})],Lt.prototype,"handleTouchMove",1);c([$("hoverValue")],Lt.prototype,"handleHoverValueChange",1);c([$("isHovering")],Lt.prototype,"handleIsHoveringChange",1);Lt.define("sl-rating");var kp=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Ai=class extends R{constructor(){super(...arguments),this.localize=new W(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const i=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const e=t.getTime()-i.getTime(),{unit:s,value:r}=kp.find(o=>Math.abs(e)<o.max);if(this.isoTime=t.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(e/r),s,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let o;s==="minute"?o=mr("second"):s==="hour"?o=mr("minute"):s==="day"?o=mr("hour"):o=mr("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),o)}return C` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};c([L()],Ai.prototype,"isoTime",2);c([L()],Ai.prototype,"relativeTime",2);c([f()],Ai.prototype,"date",2);c([f()],Ai.prototype,"format",2);c([f()],Ai.prototype,"numeric",2);c([f({type:Boolean})],Ai.prototype,"sync",2);function mr(i){const e={second:1e3,minute:6e4,hour:36e5,day:864e5}[i];return e-Date.now()%e}Ai.define("sl-relative-time");var Mh=I`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,Cp=I`
  ${Mh}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,ge=class extends R{constructor(){super(...arguments),this.hasSlotController=new Nt(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(i){if(this.disabled){i.preventDefault(),i.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(i){this.input.focus(i)}blur(){this.input.blur()}render(){return Rs`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${D({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${O(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};ge.styles=[V,Cp];c([z(".button")],ge.prototype,"input",2);c([z(".hidden-input")],ge.prototype,"hiddenInput",2);c([L()],ge.prototype,"hasFocus",2);c([f({type:Boolean,reflect:!0})],ge.prototype,"checked",2);c([f()],ge.prototype,"value",2);c([f({type:Boolean,reflect:!0})],ge.prototype,"disabled",2);c([f({reflect:!0})],ge.prototype,"size",2);c([f({type:Boolean,reflect:!0})],ge.prototype,"pill",2);c([$("disabled",{waitUntilFirstUpdate:!0})],ge.prototype,"handleDisabledChange",1);ge.define("sl-radio-button");var Sp=I`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,$p=I`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Ti=class extends R{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(i){const t=Ss(i.target);t?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(i){const t=Ss(i.target);t?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(i){const t=Ss(i.target);t?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(i){const t=Ss(i.target);t?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const i=[...this.defaultSlot.assignedElements({flatten:!0})];i.forEach(t=>{const e=i.indexOf(t),s=Ss(t);s&&(s.toggleAttribute("data-sl-button-group__button",!0),s.toggleAttribute("data-sl-button-group__button--first",e===0),s.toggleAttribute("data-sl-button-group__button--inner",e>0&&e<i.length-1),s.toggleAttribute("data-sl-button-group__button--last",e===i.length-1),s.toggleAttribute("data-sl-button-group__button--radio",s.tagName.toLowerCase()==="sl-radio-button"))})}render(){return C`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Ti.styles=[V,$p];c([z("slot")],Ti.prototype,"defaultSlot",2);c([L()],Ti.prototype,"disableRole",2);c([f()],Ti.prototype,"label",2);function Ss(i){var t;const e="sl-button, sl-radio-button";return(t=i.closest(e))!=null?t:i.querySelector(e)}var Tt=class extends R{constructor(){super(...arguments),this.formControlController=new Ye(this),this.hasSlotController=new Nt(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const i=this.required&&!this.value;return this.customValidityMessage!==""?cu:i?hu:Zr}get validationMessage(){const i=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:i?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(i){const t=i.target.closest("sl-radio, sl-radio-button"),e=this.getAllRadios(),s=this.value;!t||t.disabled||(this.value=t.value,e.forEach(r=>r.checked=r===t),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(i){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(i.key))return;const e=this.getAllRadios().filter(a=>!a.disabled),s=(t=e.find(a=>a.checked))!=null?t:e[0],r=i.key===" "?0:["ArrowUp","ArrowLeft"].includes(i.key)?-1:1,o=this.value;let n=e.indexOf(s)+r;n<0&&(n=e.length-1),n>e.length-1&&(n=0),this.getAllRadios().forEach(a=>{a.checked=!1,this.hasButtonGroup||a.setAttribute("tabindex","-1")}),this.value=e[n].value,e[n].checked=!0,this.hasButtonGroup?e[n].shadowRoot.querySelector("button").focus():(e[n].setAttribute("tabindex","0"),e[n].focus()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")),i.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}async syncRadioElements(){var i,t;const e=this.getAllRadios();if(await Promise.all(e.map(async s=>{await s.updateComplete,s.checked=s.value===this.value,s.size=this.size})),this.hasButtonGroup=e.some(s=>s.tagName.toLowerCase()==="sl-radio-button"),e.length>0&&!e.some(s=>s.checked))if(this.hasButtonGroup){const s=(i=e[0].shadowRoot)==null?void 0:i.querySelector("button");s&&s.setAttribute("tabindex","0")}else e[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const s=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");s&&(s.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const i=this.required&&!this.value,t=this.customValidityMessage!=="";return i||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const i=this.validity.valid;return this.errorMessage=this.customValidityMessage||i?"":this.validationInput.validationMessage,this.formControlController.setValidity(i),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),i||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),i}setCustomValidity(i=""){this.customValidityMessage=i,this.errorMessage=i,this.validationInput.setCustomValidity(i),this.formControlController.updateValidity()}focus(i){const t=this.getAllRadios(),e=t.find(o=>o.checked),s=t.find(o=>!o.disabled),r=e||s;r&&r.focus(i)}render(){const i=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),e=this.label?!0:!!i,s=this.helpText?!0:!!t,r=C`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return C`
      <fieldset
        part="form-control"
        class=${D({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":e,"form-control--has-help-text":s})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${e?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?C`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${r}
                </sl-button-group>
              `:r}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Tt.styles=[V,Pi,Sp];Tt.dependencies={"sl-button-group":Ti};c([z("slot:not([name])")],Tt.prototype,"defaultSlot",2);c([z(".radio-group__validation-input")],Tt.prototype,"validationInput",2);c([L()],Tt.prototype,"hasButtonGroup",2);c([L()],Tt.prototype,"errorMessage",2);c([L()],Tt.prototype,"defaultValue",2);c([f()],Tt.prototype,"label",2);c([f({attribute:"help-text"})],Tt.prototype,"helpText",2);c([f()],Tt.prototype,"name",2);c([f({reflect:!0})],Tt.prototype,"value",2);c([f({reflect:!0})],Tt.prototype,"size",2);c([f({reflect:!0})],Tt.prototype,"form",2);c([f({type:Boolean,reflect:!0})],Tt.prototype,"required",2);c([$("size",{waitUntilFirstUpdate:!0})],Tt.prototype,"handleSizeChange",1);c([$("value")],Tt.prototype,"handleValueChange",1);Tt.define("sl-radio-group");var zp=I`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,ds=class extends R{constructor(){super(...arguments),this.localize=new W(this),this.value=0,this.label=""}updated(i){if(super.updated(i),i.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),e=2*Math.PI*t,s=e-this.value/100*e;this.indicatorOffset=`${s}px`}}render(){return C`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};ds.styles=[V,zp];c([z(".progress-ring__indicator")],ds.prototype,"indicator",2);c([L()],ds.prototype,"indicatorOffset",2);c([f({type:Number,reflect:!0})],ds.prototype,"value",2);c([f()],ds.prototype,"label",2);ds.define("sl-progress-ring");var Ep=I`
  :host {
    display: inline-block;
  }
`;let Ah=null,Th=class{};Th.render=function(i,t){Ah(i,t)};self.QrCreator=Th;(function(i){function t(a,l,h,d){var u={},p=i(h,l);p.u(a),p.J(),d=d||0;var m=p.h(),g=p.h()+2*d;return u.text=a,u.level=l,u.version=h,u.O=g,u.a=function(v,b){return v-=d,b-=d,0>v||v>=m||0>b||b>=m?!1:p.a(v,b)},u}function e(a,l,h,d,u,p,m,g,v,b){function x(y,k,_,w,E,A,T){y?(a.lineTo(k+A,_+T),a.arcTo(k,_,w,E,p)):a.lineTo(k,_)}m?a.moveTo(l+p,h):a.moveTo(l,h),x(g,d,h,d,u,-p,0),x(v,d,u,l,u,0,-p),x(b,l,u,l,h,p,0),x(m,l,h,d,h,0,p)}function s(a,l,h,d,u,p,m,g,v,b){function x(y,k,_,w){a.moveTo(y+_,k),a.lineTo(y,k),a.lineTo(y,k+w),a.arcTo(y,k,y+_,k,p)}m&&x(l,h,p,p),g&&x(d,h,-p,p),v&&x(d,u,-p,-p),b&&x(l,u,p,-p)}function r(a,l){var h=l.fill;if(typeof h=="string")a.fillStyle=h;else{var d=h.type,u=h.colorStops;if(h=h.position.map(m=>Math.round(m*l.size)),d==="linear-gradient")var p=a.createLinearGradient.apply(a,h);else if(d==="radial-gradient")p=a.createRadialGradient.apply(a,h);else throw Error("Unsupported fill");u.forEach(([m,g])=>{p.addColorStop(m,g)}),a.fillStyle=p}}function o(a,l){t:{var h=l.text,d=l.v,u=l.N,p=l.K,m=l.P;for(u=Math.max(1,u||1),p=Math.min(40,p||40);u<=p;u+=1)try{var g=t(h,d,u,m);break t}catch{}g=void 0}if(!g)return null;for(h=a.getContext("2d"),l.background&&(h.fillStyle=l.background,h.fillRect(l.left,l.top,l.size,l.size)),d=g.O,p=l.size/d,h.beginPath(),m=0;m<d;m+=1)for(u=0;u<d;u+=1){var v=h,b=l.left+u*p,x=l.top+m*p,y=m,k=u,_=g.a,w=b+p,E=x+p,A=y-1,T=y+1,M=k-1,P=k+1,Z=Math.floor(Math.min(.5,Math.max(0,l.R))*p),j=_(y,k),J=_(A,M),q=_(A,k);A=_(A,P);var it=_(y,P);P=_(T,P),k=_(T,k),T=_(T,M),y=_(y,M),b=Math.round(b),x=Math.round(x),w=Math.round(w),E=Math.round(E),j?e(v,b,x,w,E,Z,!q&&!y,!q&&!it,!k&&!it,!k&&!y):s(v,b,x,w,E,Z,q&&y&&J,q&&it&&A,k&&it&&P,k&&y&&T)}return r(h,l),h.fill(),a}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Ah=function(a,l){var h={};Object.assign(h,n,a),h.N=h.minVersion,h.K=h.maxVersion,h.v=h.ecLevel,h.left=h.left,h.top=h.top,h.size=h.size,h.fill=h.fill,h.background=h.background,h.text=h.text,h.R=h.radius,h.P=h.quiet,l instanceof HTMLCanvasElement?((l.width!==h.size||l.height!==h.size)&&(l.width=h.size,l.height=h.size),l.getContext("2d").clearRect(0,0,l.width,l.height),o(l,h)):(a=document.createElement("canvas"),a.width=h.size,a.height=h.size,h=o(a,h),l.appendChild(h))}})((function(){function i(l){var h=e.s(l);return{S:function(){return 4},b:function(){return h.length},write:function(d){for(var u=0;u<h.length;u+=1)d.put(h[u],8)}}}function t(){var l=[],h=0,d={B:function(){return l},c:function(u){return(l[Math.floor(u/8)]>>>7-u%8&1)==1},put:function(u,p){for(var m=0;m<p;m+=1)d.m((u>>>p-m-1&1)==1)},f:function(){return h},m:function(u){var p=Math.floor(h/8);l.length<=p&&l.push(0),u&&(l[p]|=128>>>h%8),h+=1}};return d}function e(l,h){function d(y,k){for(var _=-1;7>=_;_+=1)if(!(-1>=y+_||g<=y+_))for(var w=-1;7>=w;w+=1)-1>=k+w||g<=k+w||(m[y+_][k+w]=0<=_&&6>=_&&(w==0||w==6)||0<=w&&6>=w&&(_==0||_==6)||2<=_&&4>=_&&2<=w&&4>=w)}function u(y,k){for(var _=g=4*l+17,w=Array(_),E=0;E<_;E+=1){w[E]=Array(_);for(var A=0;A<_;A+=1)w[E][A]=null}for(m=w,d(0,0),d(g-7,0),d(0,g-7),_=o.G(l),w=0;w<_.length;w+=1)for(E=0;E<_.length;E+=1){A=_[w];var T=_[E];if(m[A][T]==null)for(var M=-2;2>=M;M+=1)for(var P=-2;2>=P;P+=1)m[A+M][T+P]=M==-2||M==2||P==-2||P==2||M==0&&P==0}for(_=8;_<g-8;_+=1)m[_][6]==null&&(m[_][6]=_%2==0);for(_=8;_<g-8;_+=1)m[6][_]==null&&(m[6][_]=_%2==0);for(_=o.w(p<<3|k),w=0;15>w;w+=1)E=!y&&(_>>w&1)==1,m[6>w?w:8>w?w+1:g-15+w][8]=E,m[8][8>w?g-w-1:9>w?15-w:14-w]=E;if(m[g-8][8]=!y,7<=l){for(_=o.A(l),w=0;18>w;w+=1)E=!y&&(_>>w&1)==1,m[Math.floor(w/3)][w%3+g-8-3]=E;for(w=0;18>w;w+=1)E=!y&&(_>>w&1)==1,m[w%3+g-8-3][Math.floor(w/3)]=E}if(v==null){for(y=a.I(l,p),_=t(),w=0;w<b.length;w+=1)E=b[w],_.put(4,4),_.put(E.b(),o.f(4,l)),E.write(_);for(w=E=0;w<y.length;w+=1)E+=y[w].j;if(_.f()>8*E)throw Error("code length overflow. ("+_.f()+">"+8*E+")");for(_.f()+4<=8*E&&_.put(0,4);_.f()%8!=0;)_.m(!1);for(;!(_.f()>=8*E)&&(_.put(236,8),!(_.f()>=8*E));)_.put(17,8);var Z=0;for(E=w=0,A=Array(y.length),T=Array(y.length),M=0;M<y.length;M+=1){var j=y[M].j,J=y[M].o-j;for(w=Math.max(w,j),E=Math.max(E,J),A[M]=Array(j),P=0;P<A[M].length;P+=1)A[M][P]=255&_.B()[P+Z];for(Z+=j,P=o.C(J),j=s(A[M],P.b()-1).l(P),T[M]=Array(P.b()-1),P=0;P<T[M].length;P+=1)J=P+j.b()-T[M].length,T[M][P]=0<=J?j.c(J):0}for(P=_=0;P<y.length;P+=1)_+=y[P].o;for(_=Array(_),P=Z=0;P<w;P+=1)for(M=0;M<y.length;M+=1)P<A[M].length&&(_[Z]=A[M][P],Z+=1);for(P=0;P<E;P+=1)for(M=0;M<y.length;M+=1)P<T[M].length&&(_[Z]=T[M][P],Z+=1);v=_}for(y=v,_=-1,w=g-1,E=7,A=0,k=o.F(k),T=g-1;0<T;T-=2)for(T==6&&--T;;){for(M=0;2>M;M+=1)m[w][T-M]==null&&(P=!1,A<y.length&&(P=(y[A]>>>E&1)==1),k(w,T-M)&&(P=!P),m[w][T-M]=P,--E,E==-1&&(A+=1,E=7));if(w+=_,0>w||g<=w){w-=_,_=-_;break}}}var p=r[h],m=null,g=0,v=null,b=[],x={u:function(y){y=i(y),b.push(y),v=null},a:function(y,k){if(0>y||g<=y||0>k||g<=k)throw Error(y+","+k);return m[y][k]},h:function(){return g},J:function(){for(var y=0,k=0,_=0;8>_;_+=1){u(!0,_);var w=o.D(x);(_==0||y>w)&&(y=w,k=_)}u(!1,k)}};return x}function s(l,h){if(typeof l.length>"u")throw Error(l.length+"/"+h);var d=(function(){for(var p=0;p<l.length&&l[p]==0;)p+=1;for(var m=Array(l.length-p+h),g=0;g<l.length-p;g+=1)m[g]=l[g+p];return m})(),u={c:function(p){return d[p]},b:function(){return d.length},multiply:function(p){for(var m=Array(u.b()+p.b()-1),g=0;g<u.b();g+=1)for(var v=0;v<p.b();v+=1)m[g+v]^=n.i(n.g(u.c(g))+n.g(p.c(v)));return s(m,0)},l:function(p){if(0>u.b()-p.b())return u;for(var m=n.g(u.c(0))-n.g(p.c(0)),g=Array(u.b()),v=0;v<u.b();v+=1)g[v]=u.c(v);for(v=0;v<p.b();v+=1)g[v]^=n.i(n.g(p.c(v))+m);return s(g,0).l(p)}};return u}e.s=function(l){for(var h=[],d=0;d<l.length;d++){var u=l.charCodeAt(d);128>u?h.push(u):2048>u?h.push(192|u>>6,128|u&63):55296>u||57344<=u?h.push(224|u>>12,128|u>>6&63,128|u&63):(d++,u=65536+((u&1023)<<10|l.charCodeAt(d)&1023),h.push(240|u>>18,128|u>>12&63,128|u>>6&63,128|u&63))}return h};var r={L:1,M:0,Q:3,H:2},o=(function(){function l(u){for(var p=0;u!=0;)p+=1,u>>>=1;return p}var h=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],d={w:function(u){for(var p=u<<10;0<=l(p)-l(1335);)p^=1335<<l(p)-l(1335);return(u<<10|p)^21522},A:function(u){for(var p=u<<12;0<=l(p)-l(7973);)p^=7973<<l(p)-l(7973);return u<<12|p},G:function(u){return h[u-1]},F:function(u){switch(u){case 0:return function(p,m){return(p+m)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,m){return m%3==0};case 3:return function(p,m){return(p+m)%3==0};case 4:return function(p,m){return(Math.floor(p/2)+Math.floor(m/3))%2==0};case 5:return function(p,m){return p*m%2+p*m%3==0};case 6:return function(p,m){return(p*m%2+p*m%3)%2==0};case 7:return function(p,m){return(p*m%3+(p+m)%2)%2==0};default:throw Error("bad maskPattern:"+u)}},C:function(u){for(var p=s([1],0),m=0;m<u;m+=1)p=p.multiply(s([1,n.i(m)],0));return p},f:function(u,p){if(u!=4||1>p||40<p)throw Error("mode: "+u+"; type: "+p);return 10>p?8:16},D:function(u){for(var p=u.h(),m=0,g=0;g<p;g+=1)for(var v=0;v<p;v+=1){for(var b=0,x=u.a(g,v),y=-1;1>=y;y+=1)if(!(0>g+y||p<=g+y))for(var k=-1;1>=k;k+=1)0>v+k||p<=v+k||(y!=0||k!=0)&&x==u.a(g+y,v+k)&&(b+=1);5<b&&(m+=3+b-5)}for(g=0;g<p-1;g+=1)for(v=0;v<p-1;v+=1)b=0,u.a(g,v)&&(b+=1),u.a(g+1,v)&&(b+=1),u.a(g,v+1)&&(b+=1),u.a(g+1,v+1)&&(b+=1),(b==0||b==4)&&(m+=3);for(g=0;g<p;g+=1)for(v=0;v<p-6;v+=1)u.a(g,v)&&!u.a(g,v+1)&&u.a(g,v+2)&&u.a(g,v+3)&&u.a(g,v+4)&&!u.a(g,v+5)&&u.a(g,v+6)&&(m+=40);for(v=0;v<p;v+=1)for(g=0;g<p-6;g+=1)u.a(g,v)&&!u.a(g+1,v)&&u.a(g+2,v)&&u.a(g+3,v)&&u.a(g+4,v)&&!u.a(g+5,v)&&u.a(g+6,v)&&(m+=40);for(v=b=0;v<p;v+=1)for(g=0;g<p;g+=1)u.a(g,v)&&(b+=1);return m+=Math.abs(100*b/p/p-50)/5*10}};return d})(),n=(function(){for(var l=Array(256),h=Array(256),d=0;8>d;d+=1)l[d]=1<<d;for(d=8;256>d;d+=1)l[d]=l[d-4]^l[d-5]^l[d-6]^l[d-8];for(d=0;255>d;d+=1)h[l[d]]=d;return{g:function(u){if(1>u)throw Error("glog("+u+")");return h[u]},i:function(u){for(;0>u;)u+=255;for(;256<=u;)u-=255;return l[u]}}})(),a=(function(){function l(u,p){switch(p){case r.L:return h[4*(u-1)];case r.M:return h[4*(u-1)+1];case r.Q:return h[4*(u-1)+2];case r.H:return h[4*(u-1)+3]}}var h=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],d={I:function(u,p){var m=l(u,p);if(typeof m>"u")throw Error("bad rs block @ typeNumber:"+u+"/errorCorrectLevel:"+p);u=m.length/3,p=[];for(var g=0;g<u;g+=1)for(var v=m[3*g],b=m[3*g+1],x=m[3*g+2],y=0;y<v;y+=1){var k=x,_={};_.o=b,_.j=k,p.push(_)}return p}};return d})();return e})());const Pp=QrCreator;var ve=class extends R{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&Pp.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var i;return C`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((i=this.label)==null?void 0:i.length)>0?this.label:this.value}
        style=${Ht({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};ve.styles=[V,Ep];c([z("canvas")],ve.prototype,"canvas",2);c([f()],ve.prototype,"value",2);c([f()],ve.prototype,"label",2);c([f({type:Number})],ve.prototype,"size",2);c([f()],ve.prototype,"fill",2);c([f()],ve.prototype,"background",2);c([f({type:Number})],ve.prototype,"radius",2);c([f({attribute:"error-correction"})],ve.prototype,"errorCorrection",2);c([$(["background","errorCorrection","fill","radius","size","value"])],ve.prototype,"generate",1);ve.define("sl-qr-code");var Mp=I`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,Te=class extends R{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return C`
      <span
        part="base"
        class=${D({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?C` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Te.styles=[V,Mp];Te.dependencies={"sl-icon":et};c([L()],Te.prototype,"checked",2);c([L()],Te.prototype,"hasFocus",2);c([f()],Te.prototype,"value",2);c([f({reflect:!0})],Te.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Te.prototype,"disabled",2);c([$("checked")],Te.prototype,"handleCheckedChange",1);c([$("disabled",{waitUntilFirstUpdate:!0})],Te.prototype,"handleDisabledChange",1);Te.define("sl-radio");var Ap=I`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,ue=class extends R{constructor(){super(...arguments),this.localize=new W(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const i=this.closest("sl-select");i&&i.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const i=this.childNodes;let t="";return[...i].forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute("slot")||(t+=e.textContent)),e.nodeType===Node.TEXT_NODE&&(t+=e.textContent)}),t.trim()}render(){return C`
      <div
        part="base"
        class=${D({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};ue.styles=[V,Ap];ue.dependencies={"sl-icon":et};c([z(".option__label")],ue.prototype,"defaultSlot",2);c([L()],ue.prototype,"current",2);c([L()],ue.prototype,"selected",2);c([L()],ue.prototype,"hasHover",2);c([f({reflect:!0})],ue.prototype,"value",2);c([f({type:Boolean,reflect:!0})],ue.prototype,"disabled",2);c([$("disabled")],ue.prototype,"handleDisabledChange",1);c([$("selected")],ue.prototype,"handleSelectedChange",1);c([$("value")],ue.prototype,"handleValueChange",1);ue.define("sl-option");Q.define("sl-popup");var Tp=I`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,or=class extends R{constructor(){super(...arguments),this.localize=new W(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return C`
      <div
        part="base"
        class=${D({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${O(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${Ht({width:`${this.value}%`})}>
          ${this.indeterminate?"":C` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};or.styles=[V,Tp];c([f({type:Number,reflect:!0})],or.prototype,"value",2);c([f({type:Boolean,reflect:!0})],or.prototype,"indeterminate",2);c([f()],or.prototype,"label",2);or.define("sl-progress-bar");var Op=I`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,Oh=class extends R{render(){return C` <slot part="base" class="menu-label"></slot> `}};Oh.styles=[V,Op];Oh.define("sl-menu-label");var Rp=I`
  :host {
    display: contents;
  }
`,Oe=class extends R{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=i=>{this.emit("sl-mutation",{detail:{mutationList:i}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const i=typeof this.attr=="string"&&this.attr.length>0,t=i&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:i,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return C` <slot></slot> `}};Oe.styles=[V,Rp];c([f({reflect:!0})],Oe.prototype,"attr",2);c([f({attribute:"attr-old-value",type:Boolean,reflect:!0})],Oe.prototype,"attrOldValue",2);c([f({attribute:"char-data",type:Boolean,reflect:!0})],Oe.prototype,"charData",2);c([f({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Oe.prototype,"charDataOldValue",2);c([f({attribute:"child-list",type:Boolean,reflect:!0})],Oe.prototype,"childList",2);c([f({type:Boolean,reflect:!0})],Oe.prototype,"disabled",2);c([$("disabled")],Oe.prototype,"handleDisabledChange",1);c([$("attr",{waitUntilFirstUpdate:!0}),$("attr-old-value",{waitUntilFirstUpdate:!0}),$("char-data",{waitUntilFirstUpdate:!0}),$("char-data-old-value",{waitUntilFirstUpdate:!0}),$("childList",{waitUntilFirstUpdate:!0})],Oe.prototype,"handleChange",1);Oe.define("sl-mutation-observer");var Ip=I`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,F=class extends R{constructor(){super(...arguments),this.formControlController=new Ye(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Nt(this,"help-text","label"),this.localize=new W(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var i;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((i=this.input)==null?void 0:i.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(i){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=i,this.value=this.__dateInput.value}get valueAsNumber(){var i;return this.__numberInput.value=this.value,((i=this.input)==null?void 0:i.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(i){this.__numberInput.valueAsNumber=i,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(i){i.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}handleKeyDown(i){const t=i.metaKey||i.ctrlKey||i.shiftKey||i.altKey;i.key==="Enter"&&!t&&setTimeout(()=>{!i.defaultPrevented&&!i.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(i){this.input.focus(i)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(i,t,e="none"){this.input.setSelectionRange(i,t,e)}setRangeText(i,t,e,s="preserve"){const r=t??this.input.selectionStart,o=e??this.input.selectionEnd;this.input.setRangeText(i,r,o,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(i){this.input.setCustomValidity(i),this.formControlController.updateValidity()}render(){const i=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),e=this.label?!0:!!i,s=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return C`
      <div
        part="form-control"
        class=${D({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":e,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${e?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${D({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${O(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${O(this.placeholder)}
              minlength=${O(this.minlength)}
              maxlength=${O(this.maxlength)}
              min=${O(this.min)}
              max=${O(this.max)}
              step=${O(this.step)}
              .value=${yi(this.value)}
              autocapitalize=${O(this.autocapitalize)}
              autocomplete=${O(this.autocomplete)}
              autocorrect=${O(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${O(this.pattern)}
              enterkeyhint=${O(this.enterkeyhint)}
              inputmode=${O(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?C`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?C`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?C`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:C`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};F.styles=[V,Pi,Ip];F.dependencies={"sl-icon":et};c([z(".input__control")],F.prototype,"input",2);c([L()],F.prototype,"hasFocus",2);c([f()],F.prototype,"title",2);c([f({reflect:!0})],F.prototype,"type",2);c([f()],F.prototype,"name",2);c([f()],F.prototype,"value",2);c([ls()],F.prototype,"defaultValue",2);c([f({reflect:!0})],F.prototype,"size",2);c([f({type:Boolean,reflect:!0})],F.prototype,"filled",2);c([f({type:Boolean,reflect:!0})],F.prototype,"pill",2);c([f()],F.prototype,"label",2);c([f({attribute:"help-text"})],F.prototype,"helpText",2);c([f({type:Boolean})],F.prototype,"clearable",2);c([f({type:Boolean,reflect:!0})],F.prototype,"disabled",2);c([f()],F.prototype,"placeholder",2);c([f({type:Boolean,reflect:!0})],F.prototype,"readonly",2);c([f({attribute:"password-toggle",type:Boolean})],F.prototype,"passwordToggle",2);c([f({attribute:"password-visible",type:Boolean})],F.prototype,"passwordVisible",2);c([f({attribute:"no-spin-buttons",type:Boolean})],F.prototype,"noSpinButtons",2);c([f({reflect:!0})],F.prototype,"form",2);c([f({type:Boolean,reflect:!0})],F.prototype,"required",2);c([f()],F.prototype,"pattern",2);c([f({type:Number})],F.prototype,"minlength",2);c([f({type:Number})],F.prototype,"maxlength",2);c([f()],F.prototype,"min",2);c([f()],F.prototype,"max",2);c([f()],F.prototype,"step",2);c([f()],F.prototype,"autocapitalize",2);c([f()],F.prototype,"autocorrect",2);c([f()],F.prototype,"autocomplete",2);c([f({type:Boolean})],F.prototype,"autofocus",2);c([f()],F.prototype,"enterkeyhint",2);c([f({type:Boolean,converter:{fromAttribute:i=>!(!i||i==="false"),toAttribute:i=>i?"true":"false"}})],F.prototype,"spellcheck",2);c([f()],F.prototype,"inputmode",2);c([$("disabled",{waitUntilFirstUpdate:!0})],F.prototype,"handleDisabledChange",1);c([$("step",{waitUntilFirstUpdate:!0})],F.prototype,"handleStepChange",1);c([$("value",{waitUntilFirstUpdate:!0})],F.prototype,"handleValueChange",1);F.define("sl-input");var Lp=I`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Wn=class extends R{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(i){const t=["menuitem","menuitemcheckbox"],e=i.composedPath(),s=e.find(a=>{var l;return t.includes(((l=a?.getAttribute)==null?void 0:l.call(a,"role"))||"")});if(!s||e.find(a=>{var l;return((l=a?.getAttribute)==null?void 0:l.call(a,"role"))==="menu"})!==this)return;const n=s;n.type==="checkbox"&&(n.checked=!n.checked),this.emit("sl-select",{detail:{item:n}})}handleKeyDown(i){if(i.key==="Enter"||i.key===" "){const t=this.getCurrentItem();i.preventDefault(),i.stopPropagation(),t?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(i.key)){const t=this.getAllItems(),e=this.getCurrentItem();let s=e?t.indexOf(e):0;t.length>0&&(i.preventDefault(),i.stopPropagation(),i.key==="ArrowDown"?s++:i.key==="ArrowUp"?s--:i.key==="Home"?s=0:i.key==="End"&&(s=t.length-1),s<0&&(s=t.length-1),s>t.length-1&&(s=0),this.setCurrentItem(t[s]),t[s].focus())}}handleMouseDown(i){const t=i.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const i=this.getAllItems();i.length>0&&this.setCurrentItem(i[0])}isMenuItem(i){var t;return i.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=i.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(i=>!(i.inert||!this.isMenuItem(i)))}getCurrentItem(){return this.getAllItems().find(i=>i.getAttribute("tabindex")==="0")}setCurrentItem(i){this.getAllItems().forEach(e=>{e.setAttribute("tabindex",e===i?"0":"-1")})}render(){return C`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Wn.styles=[V,Lp];c([z("slot")],Wn.prototype,"defaultSlot",2);Wn.define("sl-menu");var Dp=I`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;const Vs=(i,t)=>{const e=i._$AN;if(e===void 0)return!1;for(const s of e)s._$AO?.(t,!1),Vs(s,t);return!0},Ur=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while(e?.size===0)},Rh=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),Np(t)}};function Vp(i){this._$AN!==void 0?(Ur(this),this._$AM=i,Rh(this)):this._$AM=i}function Fp(i,t=!1,e=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(s))for(let o=e;o<s.length;o++)Vs(s[o],!1),Ur(s[o]);else s!=null&&(Vs(s,!1),Ur(s));else Vs(this,i)}const Np=i=>{i.type==Se.CHILD&&(i._$AP??=Fp,i._$AQ??=Vp)};let Bp=class extends tr{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),Rh(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(Vs(this,t),Ur(this))}setValue(t){if(dh(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};const Hp=()=>new Up;let Up=class{};const zo=new WeakMap,Wp=Zs(class extends Bp{render(i){return st}update(i,[t]){const e=t!==this.G;return e&&this.G!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=t,this.ht=i.options?.host,this.rt(this.ct=i.element)),st}rt(i){if(this.isConnected||(i=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let e=zo.get(t);e===void 0&&(e=new WeakMap,zo.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,i),i!==void 0&&this.G.call(this.ht,i)}else this.G.value=i}get lt(){return typeof this.G=="function"?zo.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Yp=class{constructor(i,t){this.popupRef=Hp(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=e=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${e.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${e.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=e=>{switch(e.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":e.target!==this.host&&(e.preventDefault(),e.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(e);break}},this.handleClick=e=>{var s;e.target===this.host?(e.preventDefault(),e.stopPropagation()):e.target instanceof Element&&(e.target.tagName==="sl-menu-item"||(s=e.target.role)!=null&&s.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=e=>{e.relatedTarget&&e.relatedTarget instanceof Element&&this.host.contains(e.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=e=>{e.stopPropagation()},this.handlePopupReposition=()=>{const e=this.host.renderRoot.querySelector("slot[name='submenu']"),s=e?.assignedElements({flatten:!0}).filter(h=>h.localName==="sl-menu")[0],r=getComputedStyle(this.host).direction==="rtl";if(!s)return;const{left:o,top:n,width:a,height:l}=s.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${r?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${r?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${n+l}px`)},(this.host=i).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(i){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let e=null;for(const s of t.assignedElements())if(e=s.querySelectorAll("sl-menu-item, [role^='menuitem']"),e.length!==0)break;if(!(!e||e.length===0)){e[0].setAttribute("tabindex","0");for(let s=1;s!==e.length;++s)e[s].setAttribute("tabindex","-1");this.popupRef.value&&(i.preventDefault(),i.stopPropagation(),this.popupRef.value.active?e[0]instanceof HTMLElement&&e[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{e[0]instanceof HTMLElement&&e[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(i){this.popupRef.value&&this.popupRef.value.active!==i&&(this.popupRef.value.active=i,this.host.requestUpdate())}enableSubmenu(i=!0){i?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var i;if(!((i=this.host.parentElement)!=null&&i.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),s=["padding-top","border-top-width","margin-top"].reduce((r,o)=>{var n;const a=(n=t.get(o))!=null?n:new CSSUnitValue(0,"px"),h=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return r-h.value},0);this.skidding=s}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const i=getComputedStyle(this.host).direction==="rtl";return this.isConnected?C`
      <sl-popup
        ${Wp(this.popupRef)}
        placement=${i?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:C` <slot name="submenu" hidden></slot> `}},se=class extends R{constructor(){super(...arguments),this.localize=new W(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new Nt(this,"submenu"),this.submenuController=new Yp(this,this.hasSlotController),this.handleHostClick=i=>{this.disabled&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleMouseOver=i=>{this.focus(),i.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const i=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=i;return}i!==this.cachedTextLabel&&(this.cachedTextLabel=i,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Iu(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const i=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return C`
      <div
        id="anchor"
        part="base"
        class=${D({"menu-item":!0,"menu-item--rtl":i,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${i?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?C` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};se.styles=[V,Dp];se.dependencies={"sl-icon":et,"sl-popup":Q,"sl-spinner":er};c([z("slot:not([name])")],se.prototype,"defaultSlot",2);c([z(".menu-item")],se.prototype,"menuItem",2);c([f()],se.prototype,"type",2);c([f({type:Boolean,reflect:!0})],se.prototype,"checked",2);c([f()],se.prototype,"value",2);c([f({type:Boolean,reflect:!0})],se.prototype,"loading",2);c([f({type:Boolean,reflect:!0})],se.prototype,"disabled",2);c([$("checked")],se.prototype,"handleCheckedChange",1);c([$("disabled")],se.prototype,"handleDisabledChange",1);c([$("type")],se.prototype,"handleTypeChange",1);se.define("sl-menu-item");var qp=I`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,Oi=class extends R{constructor(){super(...arguments),this.localize=new W(this),this.position=50}handleDrag(i){const{width:t}=this.base.getBoundingClientRect(),e=this.localize.dir()==="rtl";i.preventDefault(),Ds(this.base,{onMove:s=>{this.position=parseFloat(pt(s/t*100,0,100).toFixed(2)),e&&(this.position=100-this.position)},initialEvent:i})}handleKeyDown(i){const t=this.localize.dir()==="ltr",e=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(i.key)){const s=i.shiftKey?10:1;let r=this.position;i.preventDefault(),(t&&i.key==="ArrowLeft"||e&&i.key==="ArrowRight")&&(r-=s),(t&&i.key==="ArrowRight"||e&&i.key==="ArrowLeft")&&(r+=s),i.key==="Home"&&(r=0),i.key==="End"&&(r=100),r=pt(r,0,100),this.position=r}}handlePositionChange(){this.emit("sl-change")}render(){const i=this.localize.dir()==="rtl";return C`
      <div
        part="base"
        id="image-comparer"
        class=${D({"image-comparer":!0,"image-comparer--rtl":i})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${Ht({clipPath:i?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${Ht({left:i?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};Oi.styles=[V,qp];Oi.scopedElement={"sl-icon":et};c([z(".image-comparer")],Oi.prototype,"base",2);c([z(".image-comparer__handle")],Oi.prototype,"handle",2);c([f({type:Number,reflect:!0})],Oi.prototype,"position",2);c([$("position",{waitUntilFirstUpdate:!0})],Oi.prototype,"handlePositionChange",1);Oi.define("sl-image-comparer");var jp=I`
  :host {
    display: block;
  }
`,Eo=new Map;function Gp(i,t="cors"){const e=Eo.get(i);if(e!==void 0)return Promise.resolve(e);const s=fetch(i,{mode:t}).then(async r=>{const o={ok:r.ok,status:r.status,html:await r.text()};return Eo.set(i,o),o});return Eo.set(i,s),s}var ps=class extends R{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(i){const t=document.createElement("script");[...i.attributes].forEach(e=>t.setAttribute(e.name,e.value)),t.textContent=i.textContent,i.parentNode.replaceChild(t,i)}async handleSrcChange(){try{const i=this.src,t=await Gp(i,this.mode);if(i!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(e=>this.executeScript(e)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return C`<slot></slot>`}};ps.styles=[V,jp];c([f()],ps.prototype,"src",2);c([f()],ps.prototype,"mode",2);c([f({attribute:"allow-scripts",type:Boolean})],ps.prototype,"allowScripts",2);c([$("src")],ps.prototype,"handleSrcChange",1);ps.define("sl-include");et.define("sl-icon");yt.define("sl-icon-button");var ao=class extends R{constructor(){super(...arguments),this.localize=new W(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const i=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],e=this.unit==="bit"?i:t,s=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),e.length-1)),r=e[s]+this.unit,o=parseFloat((this.value/Math.pow(1e3,s)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:r,unitDisplay:this.display})}};c([f({type:Number})],ao.prototype,"value",2);c([f()],ao.prototype,"unit",2);c([f()],ao.prototype,"display",2);ao.define("sl-format-bytes");var re=class extends R{constructor(){super(...arguments),this.localize=new W(this),this.date=new Date,this.hourFormat="auto"}render(){const i=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(i.getMilliseconds()))return C`
      <time datetime=${i.toISOString()}>
        ${this.localize.date(i,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};c([f()],re.prototype,"date",2);c([f()],re.prototype,"weekday",2);c([f()],re.prototype,"era",2);c([f()],re.prototype,"year",2);c([f()],re.prototype,"month",2);c([f()],re.prototype,"day",2);c([f()],re.prototype,"hour",2);c([f()],re.prototype,"minute",2);c([f()],re.prototype,"second",2);c([f({attribute:"time-zone-name"})],re.prototype,"timeZoneName",2);c([f({attribute:"time-zone"})],re.prototype,"timeZone",2);c([f({attribute:"hour-format"})],re.prototype,"hourFormat",2);re.define("sl-format-date");var be=class extends R{constructor(){super(...arguments),this.localize=new W(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};c([f({type:Number})],be.prototype,"value",2);c([f()],be.prototype,"type",2);c([f({attribute:"no-grouping",type:Boolean})],be.prototype,"noGrouping",2);c([f()],be.prototype,"currency",2);c([f({attribute:"currency-display"})],be.prototype,"currencyDisplay",2);c([f({attribute:"minimum-integer-digits",type:Number})],be.prototype,"minimumIntegerDigits",2);c([f({attribute:"minimum-fraction-digits",type:Number})],be.prototype,"minimumFractionDigits",2);c([f({attribute:"maximum-fraction-digits",type:Number})],be.prototype,"maximumFractionDigits",2);c([f({attribute:"minimum-significant-digits",type:Number})],be.prototype,"minimumSignificantDigits",2);c([f({attribute:"maximum-significant-digits",type:Number})],be.prototype,"maximumSignificantDigits",2);be.define("sl-format-number");var Kp=I`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,lo=class extends R{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};lo.styles=[V,Kp];c([f({type:Boolean,reflect:!0})],lo.prototype,"vertical",2);c([$("vertical")],lo.prototype,"handleVerticalChange",1);lo.define("sl-divider");var Qp=I`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function*Yn(i=document.activeElement){i!=null&&(yield i,"shadowRoot"in i&&i.shadowRoot&&i.shadowRoot.mode!=="closed"&&(yield*lu(Yn(i.shadowRoot.activeElement))))}function Ih(){return[...Yn()].pop()}var Na=new WeakMap;function Lh(i){let t=Na.get(i);return t||(t=window.getComputedStyle(i,null),Na.set(i,t)),t}function Xp(i){if(typeof i.checkVisibility=="function")return i.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=Lh(i);return t.visibility!=="hidden"&&t.display!=="none"}function Jp(i){const t=Lh(i),{overflowY:e,overflowX:s}=t;return e==="scroll"||s==="scroll"?!0:e!=="auto"||s!=="auto"?!1:i.scrollHeight>i.clientHeight&&e==="auto"||i.scrollWidth>i.clientWidth&&s==="auto"}function Zp(i){const t=i.tagName.toLowerCase(),e=Number(i.getAttribute("tabindex"));if(i.hasAttribute("tabindex")&&(isNaN(e)||e<=-1)||i.hasAttribute("disabled")||i.closest("[inert]"))return!1;if(t==="input"&&i.getAttribute("type")==="radio"){const o=i.getRootNode(),n=`input[type='radio'][name="${i.getAttribute("name")}"]`,a=o.querySelector(`${n}:checked`);return a?a===i:o.querySelector(n)===i}return Xp(i)?(t==="audio"||t==="video")&&i.hasAttribute("controls")||i.hasAttribute("tabindex")||i.hasAttribute("contenteditable")&&i.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:Jp(i):!1}function tf(i){var t,e;const s=un(i),r=(t=s[0])!=null?t:null,o=(e=s[s.length-1])!=null?e:null;return{start:r,end:o}}function ef(i,t){var e;return((e=i.getRootNode({composed:!0}))==null?void 0:e.host)!==t}function un(i){const t=new WeakMap,e=[];function s(r){if(r instanceof Element){if(r.hasAttribute("inert")||r.closest("[inert]")||t.has(r))return;t.set(r,!0),!e.includes(r)&&Zp(r)&&e.push(r),r instanceof HTMLSlotElement&&ef(r,i)&&r.assignedElements({flatten:!0}).forEach(o=>{s(o)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&s(r.shadowRoot)}for(const o of r.children)s(o)}return s(i),e.sort((r,o)=>{const n=Number(r.getAttribute("tabindex"))||0;return(Number(o.getAttribute("tabindex"))||0)-n})}var $s=[],Dh=class{constructor(i){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var e;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const s=Ih();if(this.previousFocus=s,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const r=un(this.element);let o=r.findIndex(a=>a===s);this.previousFocus=this.currentFocus;const n=this.tabDirection==="forward"?1:-1;for(;;){o+n>=r.length?o=0:o+n<0?o=r.length-1:o+=n,this.previousFocus=this.currentFocus;const a=r[o];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;t.preventDefault(),this.currentFocus=a,(e=this.currentFocus)==null||e.focus({preventScroll:!1});const l=[...Yn()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=i,this.elementsWithTabbableControls=["iframe"]}activate(){$s.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){$s=$s.filter(i=>i!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return $s[$s.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const i=un(this.element);if(!this.element.matches(":focus-within")){const t=i[0],e=i[i.length-1],s=this.tabDirection==="forward"?t:e;typeof s?.focus=="function"&&(this.currentFocus=s,s.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(i){return this.elementsWithTabbableControls.includes(i.tagName.toLowerCase())||i.hasAttribute("controls")}},qn=i=>{var t;const{activeElement:e}=document;e&&i.contains(e)&&((t=document.activeElement)==null||t.blur())};function Ba(i){return i.charAt(0).toUpperCase()+i.slice(1)}var oe=class extends R{constructor(){super(...arguments),this.hasSlotController=new Nt(this,"footer"),this.localize=new W(this),this.modal=new Dh(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=i=>{this.contained||i.key==="Escape"&&this.modal.isActive()&&this.open&&(i.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Is(this)))}disconnectedCallback(){super.disconnectedCallback(),Ls(this),this.removeOpenListeners()}requestClose(i){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:i}}).defaultPrevented){const e=rt(this,"drawer.denyClose",{dir:this.localize.dir()});ht(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){var i;"CloseWatcher"in window?((i=this.closeWatcher)==null||i.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var i;document.removeEventListener("keydown",this.handleDocumentKeyDown),(i=this.closeWatcher)==null||i.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Is(this));const i=this.querySelector("[autofocus]");i&&i.removeAttribute("autofocus"),await Promise.all([ft(this.drawer),ft(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(i?i.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),i&&i.setAttribute("autofocus","")});const t=rt(this,`drawer.show${Ba(this.placement)}`,{dir:this.localize.dir()}),e=rt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([ht(this.panel,t.keyframes,t.options),ht(this.overlay,e.keyframes,e.options)]),this.emit("sl-after-show")}else{qn(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Ls(this)),await Promise.all([ft(this.drawer),ft(this.overlay)]);const i=rt(this,`drawer.hide${Ba(this.placement)}`,{dir:this.localize.dir()}),t=rt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([ht(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),ht(this.panel,i.keyframes,i.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const e=this.originalTrigger;typeof e?.focus=="function"&&setTimeout(()=>e.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Is(this)),this.open&&this.contained&&(this.modal.deactivate(),Ls(this))}async show(){if(!this.open)return this.open=!0,Ft(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ft(this,"sl-after-hide")}render(){return C`
      <div
        part="base"
        class=${D({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${O(this.noHeader?this.label:void 0)}
          aria-labelledby=${O(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":C`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};oe.styles=[V,Qp];oe.dependencies={"sl-icon-button":yt};c([z(".drawer")],oe.prototype,"drawer",2);c([z(".drawer__panel")],oe.prototype,"panel",2);c([z(".drawer__overlay")],oe.prototype,"overlay",2);c([f({type:Boolean,reflect:!0})],oe.prototype,"open",2);c([f({reflect:!0})],oe.prototype,"label",2);c([f({reflect:!0})],oe.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],oe.prototype,"contained",2);c([f({attribute:"no-header",type:Boolean,reflect:!0})],oe.prototype,"noHeader",2);c([$("open",{waitUntilFirstUpdate:!0})],oe.prototype,"handleOpenChange",1);c([$("contained",{waitUntilFirstUpdate:!0})],oe.prototype,"handleNoModalChange",1);K("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});K("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});K("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});K("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});K("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});K("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});K("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});K("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});K("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});K("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});K("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});oe.define("sl-drawer");var sf=I`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,Ot=class extends R{constructor(){super(...arguments),this.localize=new W(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=i=>{this.open&&i.key==="Escape"&&(i.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=i=>{var t;if(i.key==="Escape"&&this.open&&!this.closeWatcher){i.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(i.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){i.preventDefault(),this.hide(),this.focusOnTrigger();return}const e=(s,r)=>{if(!s)return null;const o=s.closest(r);if(o)return o;const n=s.getRootNode();return n instanceof ShadowRoot?e(n.host,r):null};setTimeout(()=>{var s;const r=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?Ih():document.activeElement;(!this.containingElement||e(r,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=i=>{const t=i.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=i=>{const t=i.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const i=this.trigger.assignedElements({flatten:!0})[0];typeof i?.focus=="function"&&i.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(i=>i.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(i){if([" ","Enter"].includes(i.key)){i.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const e=t.getAllItems(),s=e[0],r=e[e.length-1];["ArrowDown","ArrowUp","Home","End"].includes(i.key)&&(i.preventDefault(),this.open||(this.show(),await this.updateComplete),e.length>0&&this.updateComplete.then(()=>{(i.key==="ArrowDown"||i.key==="Home")&&(t.setCurrentItem(s),s.focus()),(i.key==="ArrowUp"||i.key==="End")&&(t.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(i){i.key===" "&&i.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(s=>tf(s).start);let e;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":e=t.button;break;default:e=t}e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Ft(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ft(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var i;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((i=this.closeWatcher)==null||i.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var i;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(i=this.closeWatcher)==null||i.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await ft(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:i,options:t}=rt(this,"dropdown.show",{dir:this.localize.dir()});await ht(this.popup.popup,i,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ft(this);const{keyframes:i,options:t}=rt(this,"dropdown.hide",{dir:this.localize.dir()});await ht(this.popup.popup,i,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return C`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${O(this.sync?this.sync:void 0)}
        class=${D({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};Ot.styles=[V,sf];Ot.dependencies={"sl-popup":Q};c([z(".dropdown")],Ot.prototype,"popup",2);c([z(".dropdown__trigger")],Ot.prototype,"trigger",2);c([z(".dropdown__panel")],Ot.prototype,"panel",2);c([f({type:Boolean,reflect:!0})],Ot.prototype,"open",2);c([f({reflect:!0})],Ot.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],Ot.prototype,"disabled",2);c([f({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Ot.prototype,"stayOpenOnSelect",2);c([f({attribute:!1})],Ot.prototype,"containingElement",2);c([f({type:Number})],Ot.prototype,"distance",2);c([f({type:Number})],Ot.prototype,"skidding",2);c([f({type:Boolean})],Ot.prototype,"hoist",2);c([f({reflect:!0})],Ot.prototype,"sync",2);c([$("open",{waitUntilFirstUpdate:!0})],Ot.prototype,"handleOpenChange",1);K("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});K("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});Ot.define("sl-dropdown");var rf=I`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,wt=class extends R{constructor(){super(...arguments),this.localize=new W(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let i=this.value;if(this.from){const t=this.getRootNode(),e=this.from.includes("."),s=this.from.includes("[")&&this.from.includes("]");let r=this.from,o="";e?[r,o]=this.from.trim().split("."):s&&([r,o]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in t?t.getElementById(r):null;n?s?i=n.getAttribute(o)||"":e?i=n[o]||"":i=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!i)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(i),this.showStatus("success"),this.emit("sl-copy",{detail:{value:i}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(i){const t=this.copyLabel||this.localize.term("copy"),e=this.successLabel||this.localize.term("copied"),s=this.errorLabel||this.localize.term("error"),r=i==="success"?this.successIcon:this.errorIcon,o=rt(this,"copy.in",{dir:"ltr"}),n=rt(this,"copy.out",{dir:"ltr"});this.tooltip.content=i==="success"?e:s,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=i,r.hidden=!1,await r.animate(o.keyframes,o.options).finished,setTimeout(async()=>{await r.animate(n.keyframes,n.options).finished,r.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(o.keyframes,o.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const i=this.copyLabel||this.localize.term("copy");return C`
      <sl-tooltip
        class=${D({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${i}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};wt.styles=[V,rf];wt.dependencies={"sl-icon":et,"sl-tooltip":_t};c([z('slot[name="copy-icon"]')],wt.prototype,"copyIcon",2);c([z('slot[name="success-icon"]')],wt.prototype,"successIcon",2);c([z('slot[name="error-icon"]')],wt.prototype,"errorIcon",2);c([z("sl-tooltip")],wt.prototype,"tooltip",2);c([L()],wt.prototype,"isCopying",2);c([L()],wt.prototype,"status",2);c([f()],wt.prototype,"value",2);c([f()],wt.prototype,"from",2);c([f({type:Boolean,reflect:!0})],wt.prototype,"disabled",2);c([f({attribute:"copy-label"})],wt.prototype,"copyLabel",2);c([f({attribute:"success-label"})],wt.prototype,"successLabel",2);c([f({attribute:"error-label"})],wt.prototype,"errorLabel",2);c([f({attribute:"feedback-duration",type:Number})],wt.prototype,"feedbackDuration",2);c([f({attribute:"tooltip-placement"})],wt.prototype,"tooltipPlacement",2);c([f({type:Boolean})],wt.prototype,"hoist",2);K("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});K("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});wt.define("sl-copy-button");var of=I`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,ye=class extends R{constructor(){super(...arguments),this.localize=new W(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(i=>{for(const t of i)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.detailsObserver)==null||i.disconnect()}handleSummaryClick(i){i.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(i){(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),this.open?this.hide():this.show()),(i.key==="ArrowUp"||i.key==="ArrowLeft")&&(i.preventDefault(),this.hide()),(i.key==="ArrowDown"||i.key==="ArrowRight")&&(i.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await ft(this.body);const{keyframes:t,options:e}=rt(this,"details.show",{dir:this.localize.dir()});await ht(this.body,Vr(t,this.body.scrollHeight),e),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await ft(this.body);const{keyframes:t,options:e}=rt(this,"details.hide",{dir:this.localize.dir()});await ht(this.body,Vr(t,this.body.scrollHeight),e),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,Ft(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Ft(this,"sl-after-hide")}render(){const i=this.localize.dir()==="rtl";return C`
      <details
        part="base"
        class=${D({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":i})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${i?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${i?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};ye.styles=[V,of];ye.dependencies={"sl-icon":et};c([z(".details")],ye.prototype,"details",2);c([z(".details__header")],ye.prototype,"header",2);c([z(".details__body")],ye.prototype,"body",2);c([z(".details__expand-icon-slot")],ye.prototype,"expandIconSlot",2);c([f({type:Boolean,reflect:!0})],ye.prototype,"open",2);c([f()],ye.prototype,"summary",2);c([f({type:Boolean,reflect:!0})],ye.prototype,"disabled",2);c([$("open",{waitUntilFirstUpdate:!0})],ye.prototype,"handleOpenChange",1);K("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});K("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});ye.define("sl-details");var nf=I`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Re=class extends R{constructor(){super(...arguments),this.hasSlotController=new Nt(this,"footer"),this.localize=new W(this),this.modal=new Dh(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=i=>{i.key==="Escape"&&this.modal.isActive()&&this.open&&(i.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Is(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Ls(this),this.removeOpenListeners()}requestClose(i){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:i}}).defaultPrevented){const e=rt(this,"dialog.denyClose",{dir:this.localize.dir()});ht(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){var i;"CloseWatcher"in window?((i=this.closeWatcher)==null||i.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var i;(i=this.closeWatcher)==null||i.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Is(this);const i=this.querySelector("[autofocus]");i&&i.removeAttribute("autofocus"),await Promise.all([ft(this.dialog),ft(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(i?i.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),i&&i.setAttribute("autofocus","")});const t=rt(this,"dialog.show",{dir:this.localize.dir()}),e=rt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([ht(this.panel,t.keyframes,t.options),ht(this.overlay,e.keyframes,e.options)]),this.emit("sl-after-show")}else{qn(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([ft(this.dialog),ft(this.overlay)]);const i=rt(this,"dialog.hide",{dir:this.localize.dir()}),t=rt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([ht(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),ht(this.panel,i.keyframes,i.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Ls(this);const e=this.originalTrigger;typeof e?.focus=="function"&&setTimeout(()=>e.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Ft(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ft(this,"sl-after-hide")}render(){return C`
      <div
        part="base"
        class=${D({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${O(this.noHeader?this.label:void 0)}
          aria-labelledby=${O(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":C`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Re.styles=[V,nf];Re.dependencies={"sl-icon-button":yt};c([z(".dialog")],Re.prototype,"dialog",2);c([z(".dialog__panel")],Re.prototype,"panel",2);c([z(".dialog__overlay")],Re.prototype,"overlay",2);c([f({type:Boolean,reflect:!0})],Re.prototype,"open",2);c([f({reflect:!0})],Re.prototype,"label",2);c([f({attribute:"no-header",type:Boolean,reflect:!0})],Re.prototype,"noHeader",2);c([$("open",{waitUntilFirstUpdate:!0})],Re.prototype,"handleOpenChange",1);K("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});K("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});K("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});K("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});K("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Re.define("sl-dialog");bt.define("sl-checkbox");var af=I`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,X=class extends R{constructor(){super(...arguments),this.formControlController=new Ye(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Nt(this,"[default]","prefix","suffix"),this.localize=new W(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Zr}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(i){this.button.focus(i)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(i){this.isButton()&&(this.button.setCustomValidity(i),this.formControlController.updateValidity())}render(){const i=this.isLink(),t=i?Hr`a`:Hr`button`;return Rs`
      <${t}
        part="base"
        class=${D({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${O(i?void 0:this.disabled)}
        type=${O(i?void 0:this.type)}
        title=${this.title}
        name=${O(i?void 0:this.name)}
        value=${O(i?void 0:this.value)}
        href=${O(i&&!this.disabled?this.href:void 0)}
        target=${O(i?this.target:void 0)}
        download=${O(i?this.download:void 0)}
        rel=${O(i?this.rel:void 0)}
        role=${O(i?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Rs` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Rs`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};X.styles=[V,Mh];X.dependencies={"sl-icon":et,"sl-spinner":er};c([z(".button")],X.prototype,"button",2);c([L()],X.prototype,"hasFocus",2);c([L()],X.prototype,"invalid",2);c([f()],X.prototype,"title",2);c([f({reflect:!0})],X.prototype,"variant",2);c([f({reflect:!0})],X.prototype,"size",2);c([f({type:Boolean,reflect:!0})],X.prototype,"caret",2);c([f({type:Boolean,reflect:!0})],X.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],X.prototype,"loading",2);c([f({type:Boolean,reflect:!0})],X.prototype,"outline",2);c([f({type:Boolean,reflect:!0})],X.prototype,"pill",2);c([f({type:Boolean,reflect:!0})],X.prototype,"circle",2);c([f()],X.prototype,"type",2);c([f()],X.prototype,"name",2);c([f()],X.prototype,"value",2);c([f()],X.prototype,"href",2);c([f()],X.prototype,"target",2);c([f()],X.prototype,"rel",2);c([f()],X.prototype,"download",2);c([f()],X.prototype,"form",2);c([f({attribute:"formaction"})],X.prototype,"formAction",2);c([f({attribute:"formenctype"})],X.prototype,"formEnctype",2);c([f({attribute:"formmethod"})],X.prototype,"formMethod",2);c([f({attribute:"formnovalidate",type:Boolean})],X.prototype,"formNoValidate",2);c([f({attribute:"formtarget"})],X.prototype,"formTarget",2);c([$("disabled",{waitUntilFirstUpdate:!0})],X.prototype,"handleDisabledChange",1);function Et(i,t){lf(i)&&(i="100%");const e=hf(i);return i=t===360?i:Math.min(t,Math.max(0,parseFloat(i))),e&&(i=parseInt(String(i*t),10)/100),Math.abs(i-t)<1e-6?1:(t===360?i=(i<0?i%t+t:i%t)/parseFloat(String(t)):i=i%t/parseFloat(String(t)),i)}function gr(i){return Math.min(1,Math.max(0,i))}function lf(i){return typeof i=="string"&&i.indexOf(".")!==-1&&parseFloat(i)===1}function hf(i){return typeof i=="string"&&i.indexOf("%")!==-1}function Vh(i){return i=parseFloat(i),(isNaN(i)||i<0||i>1)&&(i=1),i}function vr(i){return Number(i)<=1?`${Number(i)*100}%`:i}function fi(i){return i.length===1?"0"+i:String(i)}function cf(i,t,e){return{r:Et(i,255)*255,g:Et(t,255)*255,b:Et(e,255)*255}}function Ha(i,t,e){i=Et(i,255),t=Et(t,255),e=Et(e,255);const s=Math.max(i,t,e),r=Math.min(i,t,e);let o=0,n=0;const a=(s+r)/2;if(s===r)n=0,o=0;else{const l=s-r;switch(n=a>.5?l/(2-s-r):l/(s+r),s){case i:o=(t-e)/l+(t<e?6:0);break;case t:o=(e-i)/l+2;break;case e:o=(i-t)/l+4;break}o/=6}return{h:o,s:n,l:a}}function Po(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*(6*e):e<1/2?t:e<2/3?i+(t-i)*(2/3-e)*6:i}function uf(i,t,e){let s,r,o;if(i=Et(i,360),t=Et(t,100),e=Et(e,100),t===0)r=e,o=e,s=e;else{const n=e<.5?e*(1+t):e+t-e*t,a=2*e-n;s=Po(a,n,i+1/3),r=Po(a,n,i),o=Po(a,n,i-1/3)}return{r:s*255,g:r*255,b:o*255}}function Ua(i,t,e){i=Et(i,255),t=Et(t,255),e=Et(e,255);const s=Math.max(i,t,e),r=Math.min(i,t,e);let o=0;const n=s,a=s-r,l=s===0?0:a/s;if(s===r)o=0;else{switch(s){case i:o=(t-e)/a+(t<e?6:0);break;case t:o=(e-i)/a+2;break;case e:o=(i-t)/a+4;break}o/=6}return{h:o,s:l,v:n}}function df(i,t,e){i=Et(i,360)*6,t=Et(t,100),e=Et(e,100);const s=Math.floor(i),r=i-s,o=e*(1-t),n=e*(1-r*t),a=e*(1-(1-r)*t),l=s%6,h=[e,n,o,o,a,e][l],d=[a,e,e,n,o,o][l],u=[o,o,a,e,e,n][l];return{r:h*255,g:d*255,b:u*255}}function Wa(i,t,e,s){const r=[fi(Math.round(i).toString(16)),fi(Math.round(t).toString(16)),fi(Math.round(e).toString(16))];return s&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function pf(i,t,e,s,r){const o=[fi(Math.round(i).toString(16)),fi(Math.round(t).toString(16)),fi(Math.round(e).toString(16)),fi(mf(s))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function ff(i,t,e,s){const r=i/100,o=t/100,n=e/100,a=s/100,l=255*(1-r)*(1-a),h=255*(1-o)*(1-a),d=255*(1-n)*(1-a);return{r:l,g:h,b:d}}function Ya(i,t,e){let s=1-i/255,r=1-t/255,o=1-e/255,n=Math.min(s,r,o);return n===1?(s=0,r=0,o=0):(s=(s-n)/(1-n)*100,r=(r-n)/(1-n)*100,o=(o-n)/(1-n)*100),n*=100,{c:Math.round(s),m:Math.round(r),y:Math.round(o),k:Math.round(n)}}function mf(i){return Math.round(parseFloat(i)*255).toString(16)}function qa(i){return Kt(i)/255}function Kt(i){return parseInt(i,16)}function gf(i){return{r:i>>16,g:(i&65280)>>8,b:i&255}}const dn={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function vf(i){let t={r:0,g:0,b:0},e=1,s=null,r=null,o=null,n=!1,a=!1;return typeof i=="string"&&(i=_f(i)),typeof i=="object"&&(jt(i.r)&&jt(i.g)&&jt(i.b)?(t=cf(i.r,i.g,i.b),n=!0,a=String(i.r).substr(-1)==="%"?"prgb":"rgb"):jt(i.h)&&jt(i.s)&&jt(i.v)?(s=vr(i.s),r=vr(i.v),t=df(i.h,s,r),n=!0,a="hsv"):jt(i.h)&&jt(i.s)&&jt(i.l)?(s=vr(i.s),o=vr(i.l),t=uf(i.h,s,o),n=!0,a="hsl"):jt(i.c)&&jt(i.m)&&jt(i.y)&&jt(i.k)&&(t=ff(i.c,i.m,i.y,i.k),n=!0,a="cmyk"),Object.prototype.hasOwnProperty.call(i,"a")&&(e=i.a)),e=Vh(e),{ok:n,format:i.format||a,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:e}}const bf="[-\\+]?\\d+%?",yf="[-\\+]?\\d*\\.\\d+%?",Xe="(?:"+yf+")|(?:"+bf+")",Mo="[\\s|\\(]+("+Xe+")[,|\\s]+("+Xe+")[,|\\s]+("+Xe+")\\s*\\)?",br="[\\s|\\(]+("+Xe+")[,|\\s]+("+Xe+")[,|\\s]+("+Xe+")[,|\\s]+("+Xe+")\\s*\\)?",ae={CSS_UNIT:new RegExp(Xe),rgb:new RegExp("rgb"+Mo),rgba:new RegExp("rgba"+br),hsl:new RegExp("hsl"+Mo),hsla:new RegExp("hsla"+br),hsv:new RegExp("hsv"+Mo),hsva:new RegExp("hsva"+br),cmyk:new RegExp("cmyk"+br),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function _f(i){if(i=i.trim().toLowerCase(),i.length===0)return!1;let t=!1;if(dn[i])i=dn[i],t=!0;else if(i==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let e=ae.rgb.exec(i);return e?{r:e[1],g:e[2],b:e[3]}:(e=ae.rgba.exec(i),e?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=ae.hsl.exec(i),e?{h:e[1],s:e[2],l:e[3]}:(e=ae.hsla.exec(i),e?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=ae.hsv.exec(i),e?{h:e[1],s:e[2],v:e[3]}:(e=ae.hsva.exec(i),e?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=ae.cmyk.exec(i),e?{c:e[1],m:e[2],y:e[3],k:e[4]}:(e=ae.hex8.exec(i),e?{r:Kt(e[1]),g:Kt(e[2]),b:Kt(e[3]),a:qa(e[4]),format:t?"name":"hex8"}:(e=ae.hex6.exec(i),e?{r:Kt(e[1]),g:Kt(e[2]),b:Kt(e[3]),format:t?"name":"hex"}:(e=ae.hex4.exec(i),e?{r:Kt(e[1]+e[1]),g:Kt(e[2]+e[2]),b:Kt(e[3]+e[3]),a:qa(e[4]+e[4]),format:t?"name":"hex8"}:(e=ae.hex3.exec(i),e?{r:Kt(e[1]+e[1]),g:Kt(e[2]+e[2]),b:Kt(e[3]+e[3]),format:t?"name":"hex"}:!1))))))))))}function jt(i){return typeof i=="number"?!Number.isNaN(i):ae.CSS_UNIT.test(i)}class lt{constructor(t="",e={}){if(t instanceof lt)return t;typeof t=="number"&&(t=gf(t)),this.originalInput=t;const s=vf(t);this.originalInput=t,this.r=s.r,this.g=s.g,this.b=s.b,this.a=s.a,this.roundA=Math.round(100*this.a)/100,this.format=e.format??s.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=s.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let e,s,r;const o=t.r/255,n=t.g/255,a=t.b/255;return o<=.03928?e=o/12.92:e=Math.pow((o+.055)/1.055,2.4),n<=.03928?s=n/12.92:s=Math.pow((n+.055)/1.055,2.4),a<=.03928?r=a/12.92:r=Math.pow((a+.055)/1.055,2.4),.2126*e+.7152*s+.0722*r}getAlpha(){return this.a}setAlpha(t){return this.a=Vh(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=Ua(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=Ua(this.r,this.g,this.b),e=Math.round(t.h*360),s=Math.round(t.s*100),r=Math.round(t.v*100);return this.a===1?`hsv(${e}, ${s}%, ${r}%)`:`hsva(${e}, ${s}%, ${r}%, ${this.roundA})`}toHsl(){const t=Ha(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=Ha(this.r,this.g,this.b),e=Math.round(t.h*360),s=Math.round(t.s*100),r=Math.round(t.l*100);return this.a===1?`hsl(${e}, ${s}%, ${r}%)`:`hsla(${e}, ${s}%, ${r}%, ${this.roundA})`}toHex(t=!1){return Wa(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return pf(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),e=Math.round(this.g),s=Math.round(this.b);return this.a===1?`rgb(${t}, ${e}, ${s})`:`rgba(${t}, ${e}, ${s}, ${this.roundA})`}toPercentageRgb(){const t=e=>`${Math.round(Et(e,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=e=>Math.round(Et(e,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...Ya(this.r,this.g,this.b)}}toCmykString(){const{c:t,m:e,y:s,k:r}=Ya(this.r,this.g,this.b);return`cmyk(${t}, ${e}, ${s}, ${r})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+Wa(this.r,this.g,this.b,!1);for(const[e,s]of Object.entries(dn))if(t===s)return e;return!1}toString(t){const e=!!t;t=t??this.format;let s=!1;const r=this.a<1&&this.a>=0;return!e&&r&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(s=this.toRgbString()),t==="prgb"&&(s=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(s=this.toHexString()),t==="hex3"&&(s=this.toHexString(!0)),t==="hex4"&&(s=this.toHex8String(!0)),t==="hex8"&&(s=this.toHex8String()),t==="name"&&(s=this.toName()),t==="hsl"&&(s=this.toHslString()),t==="hsv"&&(s=this.toHsvString()),t==="cmyk"&&(s=this.toCmykString()),s||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new lt(this.toString())}lighten(t=10){const e=this.toHsl();return e.l+=t/100,e.l=gr(e.l),new lt(e)}brighten(t=10){const e=this.toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(255*-(t/100)))),e.g=Math.max(0,Math.min(255,e.g-Math.round(255*-(t/100)))),e.b=Math.max(0,Math.min(255,e.b-Math.round(255*-(t/100)))),new lt(e)}darken(t=10){const e=this.toHsl();return e.l-=t/100,e.l=gr(e.l),new lt(e)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const e=this.toHsl();return e.s-=t/100,e.s=gr(e.s),new lt(e)}saturate(t=10){const e=this.toHsl();return e.s+=t/100,e.s=gr(e.s),new lt(e)}greyscale(){return this.desaturate(100)}spin(t){const e=this.toHsl(),s=(e.h+t)%360;return e.h=s<0?360+s:s,new lt(e)}mix(t,e=50){const s=this.toRgb(),r=new lt(t).toRgb(),o=e/100,n={r:(r.r-s.r)*o+s.r,g:(r.g-s.g)*o+s.g,b:(r.b-s.b)*o+s.b,a:(r.a-s.a)*o+s.a};return new lt(n)}analogous(t=6,e=30){const s=this.toHsl(),r=360/e,o=[this];for(s.h=(s.h-(r*t>>1)+720)%360;--t;)s.h=(s.h+r)%360,o.push(new lt(s));return o}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new lt(t)}monochromatic(t=6){const e=this.toHsv(),{h:s}=e,{s:r}=e;let{v:o}=e;const n=[],a=1/t;for(;t--;)n.push(new lt({h:s,s:r,v:o})),o=(o+a)%1;return n}splitcomplement(){const t=this.toHsl(),{h:e}=t;return[this,new lt({h:(e+72)%360,s:t.s,l:t.l}),new lt({h:(e+216)%360,s:t.s,l:t.l})]}onBackground(t){const e=this.toRgb(),s=new lt(t).toRgb(),r=e.a+s.a*(1-e.a);return new lt({r:(e.r*e.a+s.r*s.a*(1-e.a))/r,g:(e.g*e.a+s.g*s.a*(1-e.a))/r,b:(e.b*e.a+s.b*s.a*(1-e.a))/r,a:r})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const e=this.toHsl(),{h:s}=e,r=[this],o=360/t;for(let n=1;n<t;n++)r.push(new lt({h:(s+n*o)%360,s:e.s,l:e.l}));return r}equals(t){const e=new lt(t);return this.format==="cmyk"||e.format==="cmyk"?this.toCmykString()===e.toCmykString():this.toRgbString()===e.toRgbString()}}var ja="EyeDropper"in window,H=class extends R{constructor(){super(),this.formControlController=new Ye(this),this.isSafeValue=!1,this.localize=new W(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const i=["hex","rgb","hsl","hsv"],t=(i.indexOf(this.format)+1)%i.length;this.format=i[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(i){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),e=t.querySelector(".color-picker__slider-handle"),{width:s}=t.getBoundingClientRect();let r=this.value,o=this.value;e.focus(),i.preventDefault(),Ds(t,{onMove:n=>{this.alpha=pt(n/s*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:i})}handleHueDrag(i){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),e=t.querySelector(".color-picker__slider-handle"),{width:s}=t.getBoundingClientRect();let r=this.value,o=this.value;e.focus(),i.preventDefault(),Ds(t,{onMove:n=>{this.hue=pt(n/s*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:i})}handleGridDrag(i){const t=this.shadowRoot.querySelector(".color-picker__grid"),e=t.querySelector(".color-picker__grid-handle"),{width:s,height:r}=t.getBoundingClientRect();let o=this.value,n=this.value;e.focus(),i.preventDefault(),this.isDraggingGridHandle=!0,Ds(t,{onMove:(a,l)=>{this.saturation=pt(a/s*100,0,100),this.brightness=pt(100-l/r*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:i})}handleAlphaKeyDown(i){const t=i.shiftKey?10:1,e=this.value;i.key==="ArrowLeft"&&(i.preventDefault(),this.alpha=pt(this.alpha-t,0,100),this.syncValues()),i.key==="ArrowRight"&&(i.preventDefault(),this.alpha=pt(this.alpha+t,0,100),this.syncValues()),i.key==="Home"&&(i.preventDefault(),this.alpha=0,this.syncValues()),i.key==="End"&&(i.preventDefault(),this.alpha=100,this.syncValues()),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(i){const t=i.shiftKey?10:1,e=this.value;i.key==="ArrowLeft"&&(i.preventDefault(),this.hue=pt(this.hue-t,0,360),this.syncValues()),i.key==="ArrowRight"&&(i.preventDefault(),this.hue=pt(this.hue+t,0,360),this.syncValues()),i.key==="Home"&&(i.preventDefault(),this.hue=0,this.syncValues()),i.key==="End"&&(i.preventDefault(),this.hue=360,this.syncValues()),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(i){const t=i.shiftKey?10:1,e=this.value;i.key==="ArrowLeft"&&(i.preventDefault(),this.saturation=pt(this.saturation-t,0,100),this.syncValues()),i.key==="ArrowRight"&&(i.preventDefault(),this.saturation=pt(this.saturation+t,0,100),this.syncValues()),i.key==="ArrowUp"&&(i.preventDefault(),this.brightness=pt(this.brightness+t,0,100),this.syncValues()),i.key==="ArrowDown"&&(i.preventDefault(),this.brightness=pt(this.brightness-t,0,100),this.syncValues()),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(i){const t=i.target,e=this.value;i.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(i){this.formControlController.updateValidity(),i.stopPropagation()}handleInputKeyDown(i){if(i.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}handleTouchMove(i){i.preventDefault()}parseColor(i){const t=new lt(i);if(!t.isValid)return null;const e=t.toHsl(),s={h:e.h,s:e.s*100,l:e.l*100,a:e.a},r=t.toRgb(),o=t.toHexString(),n=t.toHex8String(),a=t.toHsv(),l={h:a.h,s:a.s*100,v:a.v*100,a:a.a};return{hsl:{h:s.h,s:s.s,l:s.l,string:this.setLetterCase(`hsl(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%)`)},hsla:{h:s.h,s:s.s,l:s.l,a:s.a,string:this.setLetterCase(`hsla(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%, ${s.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${r.a.toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(n)}}setColor(i){const t=this.parseColor(i);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(i){return typeof i!="string"?"":this.uppercase?i.toUpperCase():i.toLowerCase()}async syncValues(){const i=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);i!==null&&(this.format==="hsl"?this.inputValue=this.opacity?i.hsla.string:i.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?i.rgba.string:i.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?i.hsva.string:i.hsv.string:this.inputValue=this.opacity?i.hexa:i.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!ja)return;new EyeDropper().open().then(t=>{const e=this.value;this.setColor(t.sRGBHex),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(i){const t=this.value;this.disabled||(this.setColor(i),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(i,t,e,s=100){const r=new lt(`hsva(${i}, ${t}%, ${e}%, ${s/100})`);return r.isValid?r.toHex8String():""}stopNestedEventPropagation(i){i.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(i,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const e=this.parseColor(t);e!==null?(this.inputValue=this.value,this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=e.hsva.a*100,this.syncValues()):this.inputValue=i??""}}focus(i){this.inline?this.base.focus(i):this.trigger.focus(i)}blur(){var i;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(i=this.dropdown)!=null&&i.open&&this.dropdown.hide()}getFormattedValue(i="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(i){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(i){this.input.setCustomValidity(i),this.formControlController.updateValidity()}render(){const i=this.saturation,t=100-this.brightness,e=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(r=>r.trim()!==""),s=C`
      <div
        part="base"
        class=${D({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?C`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${Ht({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${D({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Ht({top:`${t}%`,left:`${i}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${O(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${Ht({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${O(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?C`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${Ht({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Ht({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${O(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${Ht({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":C`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${ja?C`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${e.length>0?C`
              <div part="swatches" class="color-picker__swatches">
                ${e.map(r=>{const o=this.parseColor(r);return o?C`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${O(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${r}
                      @click=${()=>this.selectSwatch(r)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(o.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${Ht({backgroundColor:o.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${r}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?s:C`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${D({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${Ht({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${s}
      </sl-dropdown>
    `}};H.styles=[V,af];H.dependencies={"sl-button-group":Ti,"sl-button":X,"sl-dropdown":Ot,"sl-icon":et,"sl-input":F,"sl-visually-hidden":Hn};c([z('[part~="base"]')],H.prototype,"base",2);c([z('[part~="input"]')],H.prototype,"input",2);c([z(".color-dropdown")],H.prototype,"dropdown",2);c([z('[part~="preview"]')],H.prototype,"previewButton",2);c([z('[part~="trigger"]')],H.prototype,"trigger",2);c([L()],H.prototype,"hasFocus",2);c([L()],H.prototype,"isDraggingGridHandle",2);c([L()],H.prototype,"isEmpty",2);c([L()],H.prototype,"inputValue",2);c([L()],H.prototype,"hue",2);c([L()],H.prototype,"saturation",2);c([L()],H.prototype,"brightness",2);c([L()],H.prototype,"alpha",2);c([f()],H.prototype,"value",2);c([ls()],H.prototype,"defaultValue",2);c([f()],H.prototype,"label",2);c([f()],H.prototype,"format",2);c([f({type:Boolean,reflect:!0})],H.prototype,"inline",2);c([f({reflect:!0})],H.prototype,"size",2);c([f({attribute:"no-format-toggle",type:Boolean})],H.prototype,"noFormatToggle",2);c([f()],H.prototype,"name",2);c([f({type:Boolean,reflect:!0})],H.prototype,"disabled",2);c([f({type:Boolean})],H.prototype,"hoist",2);c([f({type:Boolean})],H.prototype,"opacity",2);c([f({type:Boolean})],H.prototype,"uppercase",2);c([f()],H.prototype,"swatches",2);c([f({reflect:!0})],H.prototype,"form",2);c([f({type:Boolean,reflect:!0})],H.prototype,"required",2);c([Js({passive:!1})],H.prototype,"handleTouchMove",1);c([$("format",{waitUntilFirstUpdate:!0})],H.prototype,"handleFormatChange",1);c([$("opacity",{waitUntilFirstUpdate:!0})],H.prototype,"handleOpacityChange",1);c([$("value")],H.prototype,"handleValueChange",1);H.define("sl-color-picker");var wf=I`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Fh=class extends R{constructor(){super(...arguments),this.hasSlotController=new Nt(this,"footer","header","image")}render(){return C`
      <div
        part="base"
        class=${D({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Fh.styles=[V,wf];Fh.define("sl-card");var xf=class{constructor(i,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},i.addController(this),this.host=i,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(i){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},i)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},kf=I`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;function*Cf(i,t){if(i!==void 0){let e=0;for(const s of i)yield t(s,e++)}}function*Sf(i,t,e=1){const s=t===void 0?0:i;t??=i;for(let r=s;e>0?r<t:t<r;r+=e)yield r}var ut=class extends R{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new xf(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new W(this),this.pendingSlideChange=!1,this.handleMouseDrag=i=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[i.clientX,i.clientY]),this.scrollContainer.scrollBy({left:-i.movementX,top:-i.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const i=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const t=i.scrollLeft,e=i.scrollTop;i.style.removeProperty("scroll-snap-type"),i.style.setProperty("overflow","hidden");const s=i.scrollLeft,r=i.scrollTop;i.style.removeProperty("overflow"),i.style.setProperty("scroll-snap-type","none"),i.scrollTo({left:t,top:e,behavior:"instant"}),requestAnimationFrame(async()=>{(t!==s||e!==r)&&(i.scrollTo({left:s,top:r,behavior:sn()?"auto":"smooth"}),await Ft(i,"scrollend")),i.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=i=>{i.some(e=>[...e.addedNodes,...e.removedNodes].some(s=>this.isCarouselItem(s)&&!s.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.mutationObserver)==null||i.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(i){(i.has("slidesPerMove")||i.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const i=this.getSlides().length,{slidesPerPage:t,slidesPerMove:e,loop:s}=this,r=s?i/e:(i-t)/e+1;return Math.ceil(r)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:i=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!i||!t.hasAttribute("data-clone")))}handleClick(i){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const t=Math.abs(this.dragStartPosition[0]-i.clientX),e=Math.abs(this.dragStartPosition[1]-i.clientY);Math.sqrt(t*t+e*e)>=10&&i.preventDefault()}}handleKeyDown(i){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(i.key)){const t=i.target,e=this.localize.dir()==="rtl",s=t.closest('[part~="pagination-item"]')!==null,r=i.key==="ArrowDown"||!e&&i.key==="ArrowRight"||e&&i.key==="ArrowLeft",o=i.key==="ArrowUp"||!e&&i.key==="ArrowLeft"||e&&i.key==="ArrowRight";i.preventDefault(),o&&this.previous(),r&&this.next(),i.key==="Home"&&this.goToSlide(0),i.key==="End"&&this.goToSlide(this.getSlides().length-1),s&&this.updateComplete.then(()=>{var n;const a=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');a&&a.focus()})}}handleMouseDragStart(i){this.mouseDragging&&i.button===0&&(i.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const i=new IntersectionObserver(t=>{i.disconnect();for(const a of t){const l=a.target;l.toggleAttribute("inert",!a.isIntersecting),l.classList.toggle("--in-view",a.isIntersecting),l.setAttribute("aria-hidden",a.isIntersecting?"false":"true")}const e=t.find(a=>a.isIntersecting);if(!e)return;const s=this.getSlides({excludeClones:!1}),r=this.getSlides().length,o=s.indexOf(e.target),n=this.loop?o-this.slidesPerPage:o;if(this.activeSlide=(Math.ceil(n/this.slidesPerMove)*this.slidesPerMove+r)%r,!this.scrolling&&this.loop&&e.target.hasAttribute("data-clone")){const a=Number(e.target.getAttribute("data-clone"));this.goToSlide(a,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(t=>{i.observe(t)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(i){return i instanceof Element&&i.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((i,t)=>{i.classList.remove("--in-view"),i.classList.remove("--is-active"),i.setAttribute("role","group"),i.setAttribute("aria-label",this.localize.term("slideNum",t+1)),this.pagination&&(i.setAttribute("id",`slide-${t+1}`),i.setAttribute("role","tabpanel"),i.removeAttribute("aria-label"),i.setAttribute("aria-labelledby",`tab-${t+1}`)),i.hasAttribute("data-clone")&&i.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const i=this.getSlides(),t=this.slidesPerPage,e=i.slice(-t),s=i.slice(0,t);e.reverse().forEach((r,o)=>{const n=r.cloneNode(!0);n.setAttribute("data-clone",String(i.length-o-1)),this.prepend(n)}),s.forEach((r,o)=>{const n=r.cloneNode(!0);n.setAttribute("data-clone",String(o)),this.append(n)})}handleSlideChange(){const i=this.getSlides();i.forEach((t,e)=>{t.classList.toggle("--is-active",e===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:i[this.activeSlide]}})}updateSlidesSnap(){const i=this.getSlides(),t=this.slidesPerMove;i.forEach((e,s)=>{(s+t)%t===0?e.style.removeProperty("scroll-snap-align"):e.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(i="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,i)}next(i="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,i)}goToSlide(i,t="smooth"){const{slidesPerPage:e,loop:s}=this,r=this.getSlides(),o=this.getSlides({excludeClones:!1});if(!r.length)return;const n=s?(i+r.length)%r.length:pt(i,0,r.length-e);this.activeSlide=n;const a=this.localize.dir()==="rtl",l=pt(i+(s?e:0)+(a?e-1:0),0,o.length-1),h=o[l];this.scrollToSlide(h,sn()?"auto":t)}scrollToSlide(i,t="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const e=this.scrollContainer,s=e.getBoundingClientRect(),r=i.getBoundingClientRect(),o=r.left-s.left,n=r.top-s.top;o||n?(this.pendingSlideChange=!0,e.scrollTo({left:o+e.scrollLeft,top:n+e.scrollTop,behavior:t})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:i,scrolling:t}=this,e=this.getPageCount(),s=this.getCurrentPage(),r=this.canScrollPrev(),o=this.canScrollNext(),n=this.localize.dir()==="ltr";return C`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${D({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${this.navigation?C`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${D({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!r})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${D({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!o})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?C`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${Cf(Sf(e),a=>{const l=a===s;return C`
                    <button
                      part="pagination-item ${l?"pagination-item--active":""}"
                      class="${D({"carousel__pagination-item":!0,"carousel__pagination-item--active":l})}"
                      role="tab"
                      id="tab-${a+1}"
                      aria-controls="slide-${a+1}"
                      aria-selected="${l?"true":"false"}"
                      aria-label="${l?this.localize.term("slideNum",a+1):this.localize.term("goToSlide",a+1,e)}"
                      tabindex=${l?"0":"-1"}
                      @click=${()=>this.goToSlide(a*i)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};ut.styles=[V,kf];ut.dependencies={"sl-icon":et};c([f({type:Boolean,reflect:!0})],ut.prototype,"loop",2);c([f({type:Boolean,reflect:!0})],ut.prototype,"navigation",2);c([f({type:Boolean,reflect:!0})],ut.prototype,"pagination",2);c([f({type:Boolean,reflect:!0})],ut.prototype,"autoplay",2);c([f({type:Number,attribute:"autoplay-interval"})],ut.prototype,"autoplayInterval",2);c([f({type:Number,attribute:"slides-per-page"})],ut.prototype,"slidesPerPage",2);c([f({type:Number,attribute:"slides-per-move"})],ut.prototype,"slidesPerMove",2);c([f()],ut.prototype,"orientation",2);c([f({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],ut.prototype,"mouseDragging",2);c([z(".carousel__slides")],ut.prototype,"scrollContainer",2);c([z(".carousel__pagination")],ut.prototype,"paginationContainer",2);c([L()],ut.prototype,"activeSlide",2);c([L()],ut.prototype,"scrolling",2);c([L()],ut.prototype,"dragging",2);c([Js({passive:!0})],ut.prototype,"handleScroll",1);c([$("loop",{waitUntilFirstUpdate:!0}),$("slidesPerPage",{waitUntilFirstUpdate:!0})],ut.prototype,"initializeSlides",1);c([$("activeSlide")],ut.prototype,"handleSlideChange",1);c([$("slidesPerMove")],ut.prototype,"updateSlidesSnap",1);c([$("autoplay")],ut.prototype,"handleAutoplayChange",1);ut.define("sl-carousel");var $f=(i,t)=>{let e=0;return function(...s){window.clearTimeout(e),e=window.setTimeout(()=>{i.call(this,...s)},t)}},Ga=(i,t,e)=>{const s=i[t];i[t]=function(...r){s.call(this,...r),e.call(this,s,...r)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const t=new Set,e=new WeakMap,s=o=>{for(const n of o.changedTouches)t.add(n.identifier)},r=o=>{for(const n of o.changedTouches)t.delete(n.identifier)};document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",r,!0),document.addEventListener("touchcancel",r,!0),Ga(EventTarget.prototype,"addEventListener",function(o,n){if(n!=="scrollend")return;const a=$f(()=>{t.size?a():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",a,{passive:!0}),e.set(this,a)}),Ga(EventTarget.prototype,"removeEventListener",function(o,n){if(n!=="scrollend")return;const a=e.get(this);a&&o.call(this,"scroll",a,{passive:!0})})}})();var zf=I`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,Nh=class extends R{connectedCallback(){super.connectedCallback()}render(){return C` <slot></slot> `}};Nh.styles=[V,zf];Nh.define("sl-carousel-item");var Ef=I`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,ni=class extends R{constructor(){super(...arguments),this.hasSlotController=new Nt(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const i=this.defaultSlot.assignedElements({flatten:!0}).filter(t=>t.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(i){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return C`
      <div
        part="base"
        class=${D({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?C`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${O(this.target?this.target:void 0)}"
                rel=${O(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?C`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?C`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};ni.styles=[V,Ef];c([z("slot:not([name])")],ni.prototype,"defaultSlot",2);c([L()],ni.prototype,"renderType",2);c([f()],ni.prototype,"href",2);c([f()],ni.prototype,"target",2);c([f()],ni.prototype,"rel",2);c([$("href",{waitUntilFirstUpdate:!0})],ni.prototype,"hrefChanged",1);ni.define("sl-breadcrumb-item");Ti.define("sl-button-group");var Pf=I`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,Ie=class extends R{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const i=C`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let t=C``;return this.initials?t=C`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=C`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,C`
      <div
        part="base"
        class=${D({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?i:t}
      </div>
    `}};Ie.styles=[V,Pf];Ie.dependencies={"sl-icon":et};c([L()],Ie.prototype,"hasError",2);c([f()],Ie.prototype,"image",2);c([f()],Ie.prototype,"label",2);c([f()],Ie.prototype,"initials",2);c([f()],Ie.prototype,"loading",2);c([f({reflect:!0})],Ie.prototype,"shape",2);c([$("image")],Ie.prototype,"handleImageChange",1);Ie.define("sl-avatar");var Mf=I`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,fs=class extends R{constructor(){super(...arguments),this.localize=new W(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(e=>e.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const i=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");i.forEach((t,e)=>{const s=t.querySelector('[slot="separator"]');s===null?t.append(this.getSeparator()):s.hasAttribute("data-default")&&s.replaceWith(this.getSeparator()),e===i.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),C`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};fs.styles=[V,Mf];fs.dependencies={"sl-icon":et};c([z("slot")],fs.prototype,"defaultSlot",2);c([z('slot[name="separator"]')],fs.prototype,"separatorSlot",2);c([f()],fs.prototype,"label",2);fs.define("sl-breadcrumb");X.define("sl-button");var Af=I`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,_e=class extends R{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const i=document.createElement("canvas"),{width:t,height:e}=this.animatedImage;i.width=t,i.height=e,i.getContext("2d").drawImage(this.animatedImage,0,0,t,e),this.frozenFrame=i.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return C`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?C`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};_e.styles=[V,Af];_e.dependencies={"sl-icon":et};c([z(".animated-image__animated")],_e.prototype,"animatedImage",2);c([L()],_e.prototype,"frozenFrame",2);c([L()],_e.prototype,"isLoaded",2);c([f()],_e.prototype,"src",2);c([f()],_e.prototype,"alt",2);c([f({type:Boolean,reflect:!0})],_e.prototype,"play",2);c([$("play",{waitUntilFirstUpdate:!0})],_e.prototype,"handlePlayChange",1);c([$("src")],_e.prototype,"handleSrcChange",1);_e.define("sl-animated-image");var Tf=I`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,nr=class extends R{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return C`
      <span
        part="base"
        class=${D({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};nr.styles=[V,Tf];c([f({reflect:!0})],nr.prototype,"variant",2);c([f({type:Boolean,reflect:!0})],nr.prototype,"pill",2);c([f({type:Boolean,reflect:!0})],nr.prototype,"pulse",2);nr.define("sl-badge");var Of=I`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,ne=class ui extends R{constructor(){super(...arguments),this.hasSlotController=new Nt(this,"icon","suffix"),this.localize=new W(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,e="100%",s="0";this.countdownAnimation=t.animate([{width:e},{width:s}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await ft(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=rt(this,"alert.show",{dir:this.localize.dir()});await ht(this.base,t,e),this.emit("sl-after-show")}else{qn(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await ft(this.base);const{keyframes:t,options:e}=rt(this,"alert.hide",{dir:this.localize.dir()});await ht(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Ft(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ft(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),ui.toastStack.parentElement===null&&document.body.append(ui.toastStack),ui.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{ui.toastStack.removeChild(this),t(),ui.toastStack.querySelector("sl-alert")===null&&ui.toastStack.remove()},{once:!0})})}render(){return C`
      <div
        part="base"
        class=${D({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?C`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?C`
              <div
                class=${D({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};ne.styles=[V,Of];ne.dependencies={"sl-icon-button":yt};c([z('[part~="base"]')],ne.prototype,"base",2);c([z(".alert__countdown-elapsed")],ne.prototype,"countdownElement",2);c([f({type:Boolean,reflect:!0})],ne.prototype,"open",2);c([f({type:Boolean,reflect:!0})],ne.prototype,"closable",2);c([f({reflect:!0})],ne.prototype,"variant",2);c([f({type:Number})],ne.prototype,"duration",2);c([f({type:String,reflect:!0})],ne.prototype,"countdown",2);c([L()],ne.prototype,"remainingTime",2);c([$("open",{waitUntilFirstUpdate:!0})],ne.prototype,"handleOpenChange",1);c([$("duration")],ne.prototype,"handleDurationChange",1);var Rf=ne;K("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});K("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Rf.define("sl-alert");const If=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Lf=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],Df=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Vf=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Ff=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Nf=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Bf=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Hf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Uf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Wf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Yf=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],qf=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],jf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Gf=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Kf=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Qf=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Xf=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Jf=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Zf=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],tm=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],em=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],im=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],sm=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],rm=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],om=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],nm=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],am=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],lm=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],hm=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],cm=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],um=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],dm=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],pm=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fm=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],mm=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],gm=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],vm=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],bm=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ym=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],_m=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],wm=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],xm=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],km=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Cm=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Sm=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],$m=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],zm=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],Em=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],Pm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],Mm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],Am=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],Tm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],Om=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],Rm=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],Im=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],Lm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],Dm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],Vm=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],Fm=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Nm=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Bm=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],Hm=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],Um=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Wm=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ym=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],qm=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],jm=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Gm=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Km=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Qm=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Xm=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Jm=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Zm=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],tg=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],eg=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],ig=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],sg=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],rg=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],og=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],ng=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],ag=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],lg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],hg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],cg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],ug=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],dg=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],pg=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fg=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],mg=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],gg=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],vg=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],bg=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],yg=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],_g=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],wg=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],xg=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],kg=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],Cg=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Bh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},Sg=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Gf,backInLeft:Kf,backInRight:Qf,backInUp:Xf,backOutDown:Jf,backOutLeft:Zf,backOutRight:tm,backOutUp:em,bounce:If,bounceIn:im,bounceInDown:sm,bounceInLeft:rm,bounceInRight:om,bounceInUp:nm,bounceOut:am,bounceOutDown:lm,bounceOutLeft:hm,bounceOutRight:cm,bounceOutUp:um,easings:Bh,fadeIn:dm,fadeInBottomLeft:pm,fadeInBottomRight:fm,fadeInDown:mm,fadeInDownBig:gm,fadeInLeft:vm,fadeInLeftBig:bm,fadeInRight:ym,fadeInRightBig:_m,fadeInTopLeft:wm,fadeInTopRight:xm,fadeInUp:km,fadeInUpBig:Cm,fadeOut:Sm,fadeOutBottomLeft:$m,fadeOutBottomRight:zm,fadeOutDown:Em,fadeOutDownBig:Pm,fadeOutLeft:Mm,fadeOutLeftBig:Am,fadeOutRight:Tm,fadeOutRightBig:Om,fadeOutTopLeft:Rm,fadeOutTopRight:Im,fadeOutUp:Lm,fadeOutUpBig:Dm,flash:Lf,flip:Vm,flipInX:Fm,flipInY:Nm,flipOutX:Bm,flipOutY:Hm,headShake:Df,heartBeat:Vf,hinge:ug,jackInTheBox:dg,jello:Ff,lightSpeedInLeft:Um,lightSpeedInRight:Wm,lightSpeedOutLeft:Ym,lightSpeedOutRight:qm,pulse:Nf,rollIn:pg,rollOut:fg,rotateIn:jm,rotateInDownLeft:Gm,rotateInDownRight:Km,rotateInUpLeft:Qm,rotateInUpRight:Xm,rotateOut:Jm,rotateOutDownLeft:Zm,rotateOutDownRight:tg,rotateOutUpLeft:eg,rotateOutUpRight:ig,rubberBand:Bf,shake:Hf,shakeX:Uf,shakeY:Wf,slideInDown:sg,slideInLeft:rg,slideInRight:og,slideInUp:ng,slideOutDown:ag,slideOutLeft:lg,slideOutRight:hg,slideOutUp:cg,swing:Yf,tada:qf,wobble:jf,zoomIn:mg,zoomInDown:gg,zoomInLeft:vg,zoomInRight:bg,zoomInUp:yg,zoomOut:_g,zoomOutDown:wg,zoomOutLeft:xg,zoomOutRight:kg,zoomOutUp:Cg},Symbol.toStringTag,{value:"Module"}));var $g=I`
  :host {
    display: contents;
  }
`,xt=class extends R{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var i,t;return(t=(i=this.animation)==null?void 0:i.currentTime)!=null?t:0}set currentTime(i){this.animation&&(this.animation.currentTime=i)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var i,t;const e=(i=Bh[this.easing])!=null?i:this.easing,s=(t=this.keyframes)!=null?t:Sg[this.name],o=(await this.defaultSlot).assignedElements()[0];return!o||!s?!1:(this.destroyAnimation(),this.animation=o.animate(s,{delay:this.delay,direction:this.direction,duration:this.duration,easing:e,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var i;(i=this.animation)==null||i.cancel()}finish(){var i;(i=this.animation)==null||i.finish()}render(){return C` <slot @slotchange=${this.handleSlotChange}></slot> `}};xt.styles=[V,$g];c([qu("slot")],xt.prototype,"defaultSlot",2);c([f()],xt.prototype,"name",2);c([f({type:Boolean,reflect:!0})],xt.prototype,"play",2);c([f({type:Number})],xt.prototype,"delay",2);c([f()],xt.prototype,"direction",2);c([f({type:Number})],xt.prototype,"duration",2);c([f()],xt.prototype,"easing",2);c([f({attribute:"end-delay",type:Number})],xt.prototype,"endDelay",2);c([f()],xt.prototype,"fill",2);c([f({type:Number})],xt.prototype,"iterations",2);c([f({attribute:"iteration-start",type:Number})],xt.prototype,"iterationStart",2);c([f({attribute:!1})],xt.prototype,"keyframes",2);c([f({attribute:"playback-rate",type:Number})],xt.prototype,"playbackRate",2);c([$(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],xt.prototype,"handleAnimationChange",1);c([$("play")],xt.prototype,"handlePlayChange",1);c([$("playbackRate")],xt.prototype,"handlePlaybackRateChange",1);xt.define("sl-animation");const pn=!1;var Hh=Array.isArray,zg=Array.prototype.indexOf,jn=Array.from,Eg=Object.defineProperty,Gi=Object.getOwnPropertyDescriptor,Pg=Object.getOwnPropertyDescriptors,Mg=Object.prototype,Ag=Array.prototype,Uh=Object.getPrototypeOf,Ka=Object.isExtensible;function Tg(i){return i()}function fn(i){for(var t=0;t<i.length;t++)i[t]()}function Wh(){var i,t,e=new Promise((s,r)=>{i=s,t=r});return{promise:e,resolve:i,reject:t}}const Mt=2,Gn=4,ho=8,Og=1<<24,qe=16,je=32,Ri=64,co=128,fe=512,zt=1024,Yt=2048,Le=4096,te=8192,He=16384,Kn=32768,es=65536,Qa=1<<17,Yh=1<<18,ms=1<<19,qh=1<<20,wi=32768,mn=1<<21,Qn=1<<22,Ze=1<<23,mi=Symbol("$state"),Rg=Symbol("legacy props"),Hi=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Ig(i){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Lg(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Dg(i){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Vg(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Fg(i){throw new Error("https://svelte.dev/e/effect_orphan")}function Ng(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Bg(i){throw new Error("https://svelte.dev/e/props_invalid_value")}function Hg(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ug(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Wg(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Yg(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const qg=1,jg=2,Gg=16,Kg=1,Qg=2,Xg=4,Jg=8,Zg=16,tv=1,ev=2,Rt=Symbol();function iv(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function jh(i){return i===this.v}function sv(i,t){return i!=i?t==t:i!==t||i!==null&&typeof i=="object"||typeof i=="function"}function Gh(i){return!sv(i,this.v)}let gs=!1,rv=!1;function ov(){gs=!0}let nt=null;function is(i){nt=i}function Kh(i,t=!1,e){nt={p:nt,i:!1,c:null,e:null,s:i,x:null,l:gs&&!t?{s:null,u:null,$:[]}:null}}function Qh(i){var t=nt,e=t.e;if(e!==null){t.e=null;for(var s of e)cc(s)}return t.i=!0,nt=t.p,{}}function ar(){return!gs||nt!==null&&nt.l===null}let Ui=[];function nv(){var i=Ui;Ui=[],fn(i)}function lr(i){if(Ui.length===0){var t=Ui;queueMicrotask(()=>{t===Ui&&nv()})}Ui.push(i)}function Xh(i){var t=G;if(t===null)return U.f|=Ze,i;if((t.f&Kn)===0){if((t.f&co)===0)throw i;t.b.error(i)}else ss(i,t)}function ss(i,t){for(;t!==null;){if((t.f&co)!==0)try{t.b.error(i);return}catch(e){i=e}t=t.parent}throw i}const yr=new Set;let ot=null,ce=null,Ce=[],Xn=null,gn=!1;class $e{committed=!1;current=new Map;previous=new Map;#t=new Set;#e=new Set;#s=0;#i=0;#l=null;#o=[];#r=[];skipped_effects=new Set;is_fork=!1;is_deferred(){return this.is_fork||this.#i>0}process(t){Ce=[],this.apply();var e={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const s of t)this.#n(s,e);this.is_fork||this.#c(),this.is_deferred()?(this.#a(e.effects),this.#a(e.render_effects),this.#a(e.block_effects)):(ot=null,Xa(e.render_effects),Xa(e.effects),this.#l?.resolve()),ce=null}#n(t,e){t.f^=zt;for(var s=t.first;s!==null;){var r=s.f,o=(r&(je|Ri))!==0,n=o&&(r&zt)!==0,a=n||(r&te)!==0||this.skipped_effects.has(s);if((s.f&co)!==0&&s.b?.is_pending()&&(e={parent:e,effect:s,effects:[],render_effects:[],block_effects:[]}),!a&&s.fn!==null){o?s.f^=zt:(r&Gn)!==0?e.effects.push(s):vs(s)&&((s.f&qe)!==0&&e.block_effects.push(s),rs(s));var l=s.first;if(l!==null){s=l;continue}}var h=s.parent;for(s=s.next;s===null&&h!==null;)h===e.effect&&(this.#a(e.effects),this.#a(e.render_effects),this.#a(e.block_effects),e=e.parent),s=h.next,h=h.parent}}#a(t){for(const e of t)((e.f&Yt)!==0?this.#o:this.#r).push(e),this.#h(e.deps),Pt(e,zt)}#h(t){if(t!==null)for(const e of t)(e.f&Mt)===0||(e.f&wi)===0||(e.f^=wi,this.#h(e.deps))}capture(t,e){this.previous.has(t)||this.previous.set(t,e),(t.f&Ze)===0&&(this.current.set(t,t.v),ce?.set(t,t.v))}activate(){ot=this,this.apply()}deactivate(){ot===this&&(ot=null,ce=null)}flush(){if(this.activate(),Ce.length>0){if(av(),ot!==null&&ot!==this)return}else this.#s===0&&this.process([]);this.deactivate()}discard(){for(const t of this.#e)t(this);this.#e.clear()}#c(){if(this.#i===0){for(const t of this.#t)t();this.#t.clear()}this.#s===0&&this.#u()}#u(){if(yr.size>1){this.previous.clear();var t=ce,e=!0,s={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const o of yr){if(o===this){e=!1;continue}const n=[];for(const[l,h]of this.current){if(o.current.has(l))if(e&&h!==o.current.get(l))o.current.set(l,h);else continue;n.push(l)}if(n.length===0)continue;const a=[...o.current.keys()].filter(l=>!this.current.has(l));if(a.length>0){var r=Ce;Ce=[];const l=new Set,h=new Map;for(const d of n)Jh(d,a,l,h);if(Ce.length>0){ot=o,o.apply();for(const d of Ce)o.#n(d,s);o.deactivate()}Ce=r}}ot=null,ce=t}this.committed=!0,yr.delete(this)}increment(t){this.#s+=1,t&&(this.#i+=1)}decrement(t){this.#s-=1,t&&(this.#i-=1),this.revive()}revive(){for(const t of this.#o)Pt(t,Yt),xi(t);for(const t of this.#r)Pt(t,Le),xi(t);this.#o=[],this.#r=[],this.flush()}oncommit(t){this.#t.add(t)}ondiscard(t){this.#e.add(t)}settled(){return(this.#l??=Wh()).promise}static ensure(){if(ot===null){const t=ot=new $e;yr.add(ot),$e.enqueue(()=>{ot===t&&t.flush()})}return ot}static enqueue(t){lr(t)}apply(){}}function av(){var i=ei;gn=!0;var t=null;try{var e=0;for(qr(!0);Ce.length>0;){var s=$e.ensure();if(e++>1e3){var r,o;lv()}s.process(Ce),ti.clear()}}finally{gn=!1,qr(i),Xn=null}}function lv(){try{Ng()}catch(i){ss(i,Xn)}}let Ve=null;function Xa(i){var t=i.length;if(t!==0){for(var e=0;e<t;){var s=i[e++];if((s.f&(He|te))===0&&vs(s)&&(Ve=new Set,rs(s),s.deps===null&&s.first===null&&s.nodes_start===null&&(s.teardown===null&&s.ac===null?pc(s):s.fn=null),Ve?.size>0)){ti.clear();for(const r of Ve){if((r.f&(He|te))!==0)continue;const o=[r];let n=r.parent;for(;n!==null;)Ve.has(n)&&(Ve.delete(n),o.push(n)),n=n.parent;for(let a=o.length-1;a>=0;a--){const l=o[a];(l.f&(He|te))===0&&rs(l)}}Ve.clear()}}Ve=null}}function Jh(i,t,e,s){if(!e.has(i)&&(e.add(i),i.reactions!==null))for(const r of i.reactions){const o=r.f;(o&Mt)!==0?Jh(r,t,e,s):(o&(Qn|qe))!==0&&(o&Yt)===0&&Zh(r,t,s)&&(Pt(r,Yt),xi(r))}}function Zh(i,t,e){const s=e.get(i);if(s!==void 0)return s;if(i.deps!==null)for(const r of i.deps){if(t.includes(r))return!0;if((r.f&Mt)!==0&&Zh(r,t,e))return e.set(r,!0),!0}return e.set(i,!1),!1}function xi(i){for(var t=Xn=i;t.parent!==null;){t=t.parent;var e=t.f;if(gn&&t===G&&(e&qe)!==0&&(e&Yh)===0)return;if((e&(Ri|je))!==0){if((e&zt)===0)return;t.f^=zt}}Ce.push(t)}function hv(i){let t=0,e=ki(0),s;return()=>{Gs()&&(N(e),po(()=>(t===0&&(s=bs(()=>i(()=>Fs(e)))),t+=1,()=>{lr(()=>{t-=1,t===0&&(s?.(),s=void 0,Fs(e))})})))}}var cv=es|ms|co;function uv(i,t,e){new dv(i,t,e)}class dv{parent;#t=!1;#e;#s=null;#i;#l;#o;#r=null;#n=null;#a=null;#h=null;#c=null;#u=0;#d=0;#f=!1;#p=null;#y=hv(()=>(this.#p=ki(this.#u),()=>{this.#p=null}));constructor(t,e,s){this.#e=t,this.#i=e,this.#l=s,this.parent=G.b,this.#t=!!this.#i.pending,this.#o=ea(()=>{G.b=this;{var r=this.#v();try{this.#r=he(()=>s(r))}catch(o){this.error(o)}this.#d>0?this.#g():this.#t=!1}return()=>{this.#c?.remove()}},cv)}#_(){try{this.#r=he(()=>this.#l(this.#e))}catch(t){this.error(t)}this.#t=!1}#w(){const t=this.#i.pending;t&&(this.#n=he(()=>t(this.#e)),$e.enqueue(()=>{var e=this.#v();this.#r=this.#m(()=>($e.ensure(),he(()=>this.#l(e)))),this.#d>0?this.#g():(Qi(this.#n,()=>{this.#n=null}),this.#t=!1)}))}#v(){var t=this.#e;return this.#t&&(this.#c=Ci(),this.#e.before(this.#c),t=this.#c),t}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#i.pending}#m(t){var e=G,s=U,r=nt;Me(this.#o),Ut(this.#o),is(this.#o.ctx);try{return t()}catch(o){return Xh(o),null}finally{Me(e),Ut(s),is(r)}}#g(){const t=this.#i.pending;this.#r!==null&&(this.#h=document.createDocumentFragment(),this.#h.append(this.#c),gc(this.#r,this.#h)),this.#n===null&&(this.#n=he(()=>t(this.#e)))}#b(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#b(t);return}this.#d+=t,this.#d===0&&(this.#t=!1,this.#n&&Qi(this.#n,()=>{this.#n=null}),this.#h&&(this.#e.before(this.#h),this.#h=null))}update_pending_count(t){this.#b(t),this.#u+=t,this.#p&&js(this.#p,this.#u)}get_effect_pending(){return this.#y(),N(this.#p)}error(t){var e=this.#i.onerror;let s=this.#i.failed;if(this.#f||!e&&!s)throw t;this.#r&&(Wt(this.#r),this.#r=null),this.#n&&(Wt(this.#n),this.#n=null),this.#a&&(Wt(this.#a),this.#a=null);var r=!1,o=!1;const n=()=>{if(r){iv();return}r=!0,o&&Yg(),$e.ensure(),this.#u=0,this.#a!==null&&Qi(this.#a,()=>{this.#a=null}),this.#t=this.has_pending_snippet(),this.#r=this.#m(()=>(this.#f=!1,he(()=>this.#l(this.#e)))),this.#d>0?this.#g():this.#t=!1};var a=U;try{Ut(null),o=!0,e?.(t,n),o=!1}catch(l){ss(l,this.#o&&this.#o.parent)}finally{Ut(a)}s&&lr(()=>{this.#a=this.#m(()=>{$e.ensure(),this.#f=!0;try{return he(()=>{s(this.#e,()=>t,()=>n)})}catch(l){return ss(l,this.#o.parent),null}finally{this.#f=!1}})})}}function pv(i,t){return t}function fv(i,t,e){for(var s=[],r=t.length,o=0;o<r;o++)ia(t[o].e,s,!0);fc(s,()=>{var n=s.length===0&&e!==null;if(n){var a=e,l=a.parentNode;Cv(l),l.append(a),i.items.clear(),xe(i,t[0].prev,t[r-1].next)}for(var h=0;h<r;h++){var d=t[h];n||(i.items.delete(d.k),xe(i,d.prev,d.next)),Wt(d.e,!n)}i.first===t[0]&&(i.first=t[0].prev)})}function mv(i,t,e,s,r,o=null){var n=i,a=new Map,l=null,h=null,d=Jn(()=>{var b=e();return Hh(b)?b:b==null?[]:jn(b)}),u,p=!0;function m(){gv(v,u,n,t,s),h!==null&&(u.length===0?(h.fragment?(n.before(h.fragment),h.fragment=null):sa(h.effect),g.first=h.effect):Qi(h.effect,()=>{h=null}))}var g=ea(()=>{u=N(d);for(var b=u.length,x=new Set,y=ot,k=null,_=ac(),w=0;w<b;w+=1){var E=u[w],A=s(E,w),T=p?null:a.get(A);T?(js(T.v,E),T.i=w,_&&y.skipped_effects.delete(T.e)):(T=vv(p?n:null,k,E,A,w,r,t,e),p&&(T.o=!0,k===null?l=T:k.next=T,k=T),a.set(A,T)),x.add(A)}if(b===0&&o&&!h)if(p)h={fragment:null,effect:he(()=>o(n))};else{var M=document.createDocumentFragment(),P=Ci();M.append(P),h={fragment:M,effect:he(()=>o(P))}}if(!p)if(_){for(const[Z,j]of a)x.has(Z)||y.skipped_effects.add(j.e);y.oncommit(m),y.ondiscard(()=>{})}else m();N(d)}),v={effect:g,items:a,first:l};p=!1}function gv(i,t,e,s,r){var o=t.length,n=i.items,a=i.first,l,h=null,d=[],u=[],p,m,g,v;for(v=0;v<o;v+=1){if(p=t[v],m=r(p,v),g=n.get(m),i.first??=g,!g.o){g.o=!0;var b=h?h.next:a;xe(i,h,g),xe(i,g,b),Ao(g,b,e),h=g,d=[],u=[],a=h.next;continue}if((g.e.f&te)!==0&&sa(g.e),g!==a){if(l!==void 0&&l.has(g)){if(d.length<u.length){var x=u[0],y;h=x.prev;var k=d[0],_=d[d.length-1];for(y=0;y<d.length;y+=1)Ao(d[y],x,e);for(y=0;y<u.length;y+=1)l.delete(u[y]);xe(i,k.prev,_.next),xe(i,h,k),xe(i,_,x),a=x,h=_,v-=1,d=[],u=[]}else l.delete(g),Ao(g,a,e),xe(i,g.prev,g.next),xe(i,g,h===null?i.first:h.next),xe(i,h,g),h=g;continue}for(d=[],u=[];a!==null&&a.k!==m;)(a.e.f&te)===0&&(l??=new Set).add(a),u.push(a),a=a.next;if(a===null)continue;g=a}d.push(g),h=g,a=g.next}if(a!==null||l!==void 0){for(var w=l===void 0?[]:jn(l);a!==null;)(a.e.f&te)===0&&w.push(a),a=a.next;var E=w.length;if(E>0){var A=null;fv(i,w,A)}}}function vv(i,t,e,s,r,o,n,a){var l=(n&qg)!==0,h=(n&Gg)===0,d=l?h?Ki(e,!1,!1):ki(e):e,u=(n&jg)===0?r:ki(r),p={i:u,v:d,k:s,a:null,e:null,o:!1,prev:t,next:null};try{if(i===null){var m=document.createDocumentFragment();m.append(i=Ci())}return p.e=he(()=>o(i,d,u,a)),t!==null&&(t.next=p),p}finally{}}function Ao(i,t,e){for(var s=i.next?i.next.e.nodes_start:e,r=t?t.e.nodes_start:e,o=i.e.nodes_start;o!==null&&o!==s;){var n=hr(o);r.before(o),o=n}}function xe(i,t,e){t===null?(i.first=e,i.effect.first=e&&e.e):(t.e.next&&(t.e.next.prev=null),t.next=e,t.e.next=e&&e.e),e===null?i.effect.last=t&&t.e:(e.e.prev&&(e.e.prev.next=null),e.prev=t,e.e.prev=t&&t.e)}function bv(i,t,e,s){const r=ar()?uo:Jn;if(e.length===0&&i.length===0){s(t.map(r));return}var o=ot,n=G,a=yv();function l(){Promise.all(e.map(h=>_v(h))).then(h=>{a();try{s([...t.map(r),...h])}catch(d){(n.f&He)===0&&ss(d,n)}o?.deactivate(),Wr()}).catch(h=>{ss(h,n)})}i.length>0?Promise.all(i).then(()=>{a();try{return l()}finally{o?.deactivate(),Wr()}}):l()}function yv(){var i=G,t=U,e=nt,s=ot;return function(o=!0){Me(i),Ut(t),is(e),o&&s?.activate()}}function Wr(){Me(null),Ut(null),is(null)}function uo(i){var t=Mt|Yt,e=U!==null&&(U.f&Mt)!==0?U:null;return G!==null&&(G.f|=ms),{ctx:nt,deps:null,effects:null,equals:jh,f:t,fn:i,reactions:null,rv:0,v:Rt,wv:0,parent:e??G,ac:null}}function _v(i,t){let e=G;e===null&&Lg();var s=e.b,r=void 0,o=ki(Rt),n=!U,a=new Map;return Av(()=>{var l=Wh();r=l.promise;try{Promise.resolve(i()).then(l.resolve,l.reject).then(()=>{h===ot&&h.committed&&h.deactivate(),Wr()})}catch(p){l.reject(p),Wr()}var h=ot;if(n){var d=!s.is_pending();s.update_pending_count(1),h.increment(d),a.get(h)?.reject(Hi),a.delete(h),a.set(h,l)}const u=(p,m=void 0)=>{if(h.activate(),m)m!==Hi&&(o.f|=Ze,js(o,m));else{(o.f&Ze)!==0&&(o.f^=Ze),js(o,p);for(const[g,v]of a){if(a.delete(g),g===h)break;v.reject(Hi)}}n&&(s.update_pending_count(-1),h.decrement(d))};l.promise.then(u,p=>u(null,p||"unknown"))}),hc(()=>{for(const l of a.values())l.reject(Hi)}),new Promise(l=>{function h(d){function u(){d===r?l(o):h(r)}d.then(u,u)}h(r)})}function Jn(i){const t=uo(i);return t.equals=Gh,t}function tc(i){var t=i.effects;if(t!==null){i.effects=null;for(var e=0;e<t.length;e+=1)Wt(t[e])}}function wv(i){for(var t=i.parent;t!==null;){if((t.f&Mt)===0)return(t.f&He)===0?t:null;t=t.parent}return null}function Zn(i){var t,e=G;Me(wv(i));try{i.f&=~wi,tc(i),t=_c(i)}finally{Me(e)}return t}function ec(i){var t=Zn(i);if(i.equals(t)||(ot?.is_fork||(i.v=t),i.wv=bc()),!Ii)if(ce!==null)(Gs()||ot?.is_fork)&&ce.set(i,t);else{var e=(i.f&fe)===0?Le:zt;Pt(i,e)}}let vn=new Set;const ti=new Map;let ic=!1;function ki(i,t){var e={f:0,v:i,reactions:null,equals:jh,rv:0,wv:0};return e}function Ge(i,t){const e=ki(i);return Rv(e),e}function Ki(i,t=!1,e=!0){const s=ki(i);return t||(s.equals=Gh),gs&&e&&nt!==null&&nt.l!==null&&(nt.l.s??=[]).push(s),s}function $t(i,t,e=!1){U!==null&&(!ze||(U.f&Qa)!==0)&&ar()&&(U.f&(Mt|qe|Qn|Qa))!==0&&!Ue?.includes(i)&&Wg();let s=e?Wi(t):t;return js(i,s)}function js(i,t){if(!i.equals(t)){var e=i.v;Ii?ti.set(i,t):ti.set(i,e),i.v=t;var s=$e.ensure();s.capture(i,e),(i.f&Mt)!==0&&((i.f&Yt)!==0&&Zn(i),Pt(i,(i.f&fe)!==0?zt:Le)),i.wv=bc(),sc(i,Yt),ar()&&G!==null&&(G.f&zt)!==0&&(G.f&(je|Ri))===0&&(le===null?Iv([i]):le.push(i)),!s.is_fork&&vn.size>0&&!ic&&xv()}return t}function xv(){ic=!1;var i=ei;qr(!0);const t=Array.from(vn);try{for(const e of t)(e.f&zt)!==0&&Pt(e,Le),vs(e)&&rs(e)}finally{qr(i)}vn.clear()}function Fs(i){$t(i,i.v+1)}function sc(i,t){var e=i.reactions;if(e!==null)for(var s=ar(),r=e.length,o=0;o<r;o++){var n=e[o],a=n.f;if(!(!s&&n===G)){var l=(a&Yt)===0;if(l&&Pt(n,t),(a&Mt)!==0){var h=n;ce?.delete(h),(a&wi)===0&&(a&fe&&(n.f|=wi),sc(h,Le))}else l&&((a&qe)!==0&&Ve!==null&&Ve.add(n),xi(n))}}}function Wi(i){if(typeof i!="object"||i===null||mi in i)return i;const t=Uh(i);if(t!==Mg&&t!==Ag)return i;var e=new Map,s=Hh(i),r=Ge(0),o=gi,n=a=>{if(gi===o)return a();var l=U,h=gi;Ut(null),tl(o);var d=a();return Ut(l),tl(h),d};return s&&e.set("length",Ge(i.length)),new Proxy(i,{defineProperty(a,l,h){(!("value"in h)||h.configurable===!1||h.enumerable===!1||h.writable===!1)&&Hg();var d=e.get(l);return d===void 0?d=n(()=>{var u=Ge(h.value);return e.set(l,u),u}):$t(d,h.value,!0),!0},deleteProperty(a,l){var h=e.get(l);if(h===void 0){if(l in a){const d=n(()=>Ge(Rt));e.set(l,d),Fs(r)}}else $t(h,Rt),Fs(r);return!0},get(a,l,h){if(l===mi)return i;var d=e.get(l),u=l in a;if(d===void 0&&(!u||Gi(a,l)?.writable)&&(d=n(()=>{var m=Wi(u?a[l]:Rt),g=Ge(m);return g}),e.set(l,d)),d!==void 0){var p=N(d);return p===Rt?void 0:p}return Reflect.get(a,l,h)},getOwnPropertyDescriptor(a,l){var h=Reflect.getOwnPropertyDescriptor(a,l);if(h&&"value"in h){var d=e.get(l);d&&(h.value=N(d))}else if(h===void 0){var u=e.get(l),p=u?.v;if(u!==void 0&&p!==Rt)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return h},has(a,l){if(l===mi)return!0;var h=e.get(l),d=h!==void 0&&h.v!==Rt||Reflect.has(a,l);if(h!==void 0||G!==null&&(!d||Gi(a,l)?.writable)){h===void 0&&(h=n(()=>{var p=d?Wi(a[l]):Rt,m=Ge(p);return m}),e.set(l,h));var u=N(h);if(u===Rt)return!1}return d},set(a,l,h,d){var u=e.get(l),p=l in a;if(s&&l==="length")for(var m=h;m<u.v;m+=1){var g=e.get(m+"");g!==void 0?$t(g,Rt):m in a&&(g=n(()=>Ge(Rt)),e.set(m+"",g))}if(u===void 0)(!p||Gi(a,l)?.writable)&&(u=n(()=>Ge(void 0)),$t(u,Wi(h)),e.set(l,u));else{p=u.v!==Rt;var v=n(()=>Wi(h));$t(u,v)}var b=Reflect.getOwnPropertyDescriptor(a,l);if(b?.set&&b.set.call(d,h),!p){if(s&&typeof l=="string"){var x=e.get("length"),y=Number(l);Number.isInteger(y)&&y>=x.v&&$t(x,y+1)}Fs(r)}return!0},ownKeys(a){N(r);var l=Reflect.ownKeys(a).filter(u=>{var p=e.get(u);return p===void 0||p.v!==Rt});for(var[h,d]of e)d.v!==Rt&&!(h in a)&&l.push(h);return l},setPrototypeOf(){Ug()}})}var Ja,rc,oc,nc;function kv(){if(Ja===void 0){Ja=window,rc=/Firefox/.test(navigator.userAgent);var i=Element.prototype,t=Node.prototype,e=Text.prototype;oc=Gi(t,"firstChild").get,nc=Gi(t,"nextSibling").get,Ka(i)&&(i.__click=void 0,i.__className=void 0,i.__attributes=null,i.__style=void 0,i.__e=void 0),Ka(e)&&(e.__t=void 0)}}function Ci(i=""){return document.createTextNode(i)}function Yr(i){return oc.call(i)}function hr(i){return nc.call(i)}function vt(i,t){return Yr(i)}function _r(i,t=!1){{var e=Yr(i);return e instanceof Comment&&e.data===""?hr(e):e}}function Gt(i,t=1,e=!1){let s=i;for(;t--;)s=hr(s);return s}function Cv(i){i.textContent=""}function ac(){return!1}function ta(i){var t=U,e=G;Ut(null),Me(null);try{return i()}finally{Ut(t),Me(e)}}function lc(i){G===null&&(U===null&&Fg(),Vg()),Ii&&Dg()}function Sv(i,t){var e=t.last;e===null?t.last=t.first=i:(e.next=i,i.prev=e,t.last=i)}function De(i,t,e){var s=G;s!==null&&(s.f&te)!==0&&(i|=te);var r={ctx:nt,deps:null,nodes_start:null,nodes_end:null,f:i|Yt|fe,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(e)try{rs(r),r.f|=Kn}catch(a){throw Wt(r),a}else t!==null&&xi(r);var o=r;if(e&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&ms)===0&&(o=o.first,(i&qe)!==0&&(i&es)!==0&&o!==null&&(o.f|=es)),o!==null&&(o.parent=s,s!==null&&Sv(o,s),U!==null&&(U.f&Mt)!==0&&(i&Ri)===0)){var n=U;(n.effects??=[]).push(o)}return r}function Gs(){return U!==null&&!ze}function hc(i){const t=De(ho,null,!1);return Pt(t,zt),t.teardown=i,t}function bn(i){lc();var t=G.f,e=!U&&(t&je)!==0&&(t&Kn)===0;if(e){var s=nt;(s.e??=[]).push(i)}else return cc(i)}function cc(i){return De(Gn|qh,i,!1)}function $v(i){return lc(),De(ho|qh,i,!0)}function zv(i){$e.ensure();const t=De(Ri|ms,i,!0);return(e={})=>new Promise(s=>{e.outro?Qi(t,()=>{Wt(t),s(void 0)}):(Wt(t),s(void 0))})}function Ev(i){return De(Gn,i,!1)}function Pv(i,t){var e=nt,s={effect:null,ran:!1,deps:i};e.l.$.push(s),s.effect=po(()=>{i(),!s.ran&&(s.ran=!0,bs(t))})}function Mv(){var i=nt;po(()=>{for(var t of i.l.$){t.deps();var e=t.effect;(e.f&zt)!==0&&Pt(e,Le),vs(e)&&rs(e),t.ran=!1}})}function Av(i){return De(Qn|ms,i,!0)}function po(i,t=0){return De(ho|t,i,!0)}function Rr(i,t=[],e=[],s=[]){bv(s,t,e,r=>{De(ho,()=>i(...r.map(N)),!0)})}function ea(i,t=0){var e=De(qe|t,i,!0);return e}function he(i){return De(je|ms,i,!0)}function uc(i){var t=i.teardown;if(t!==null){const e=Ii,s=U;Za(!0),Ut(null);try{t.call(null)}finally{Za(e),Ut(s)}}}function dc(i,t=!1){var e=i.first;for(i.first=i.last=null;e!==null;){const r=e.ac;r!==null&&ta(()=>{r.abort(Hi)});var s=e.next;(e.f&Ri)!==0?e.parent=null:Wt(e,t),e=s}}function Tv(i){for(var t=i.first;t!==null;){var e=t.next;(t.f&je)===0&&Wt(t),t=e}}function Wt(i,t=!0){var e=!1;(t||(i.f&Yh)!==0)&&i.nodes_start!==null&&i.nodes_end!==null&&(Ov(i.nodes_start,i.nodes_end),e=!0),dc(i,t&&!e),jr(i,0),Pt(i,He);var s=i.transitions;if(s!==null)for(const o of s)o.stop();uc(i);var r=i.parent;r!==null&&r.first!==null&&pc(i),i.next=i.prev=i.teardown=i.ctx=i.deps=i.fn=i.nodes_start=i.nodes_end=i.ac=null}function Ov(i,t){for(;i!==null;){var e=i===t?null:hr(i);i.remove(),i=e}}function pc(i){var t=i.parent,e=i.prev,s=i.next;e!==null&&(e.next=s),s!==null&&(s.prev=e),t!==null&&(t.first===i&&(t.first=s),t.last===i&&(t.last=e))}function Qi(i,t,e=!0){var s=[];ia(i,s,!0),fc(s,()=>{e&&Wt(i),t&&t()})}function fc(i,t){var e=i.length;if(e>0){var s=()=>--e||t();for(var r of i)r.out(s)}else t()}function ia(i,t,e){if((i.f&te)===0){if(i.f^=te,i.transitions!==null)for(const n of i.transitions)(n.is_global||e)&&t.push(n);for(var s=i.first;s!==null;){var r=s.next,o=(s.f&es)!==0||(s.f&je)!==0&&(i.f&qe)!==0;ia(s,t,o?e:!1),s=r}}}function sa(i){mc(i,!0)}function mc(i,t){if((i.f&te)!==0){i.f^=te,(i.f&zt)===0&&(Pt(i,Yt),xi(i));for(var e=i.first;e!==null;){var s=e.next,r=(e.f&es)!==0||(e.f&je)!==0;mc(e,r?t:!1),e=s}if(i.transitions!==null)for(const o of i.transitions)(o.is_global||t)&&o.in()}}function gc(i,t){for(var e=i.nodes_start,s=i.nodes_end;e!==null;){var r=e===s?null:hr(e);t.append(e),e=r}}let ei=!1;function qr(i){ei=i}let Ii=!1;function Za(i){Ii=i}let U=null,ze=!1;function Ut(i){U=i}let G=null;function Me(i){G=i}let Ue=null;function Rv(i){U!==null&&(Ue===null?Ue=[i]:Ue.push(i))}let Dt=null,Qt=0,le=null;function Iv(i){le=i}let vc=1,Ks=0,gi=Ks;function tl(i){gi=i}function bc(){return++vc}function vs(i){var t=i.f;if((t&Yt)!==0)return!0;if(t&Mt&&(i.f&=~wi),(t&Le)!==0){var e=i.deps;if(e!==null)for(var s=e.length,r=0;r<s;r++){var o=e[r];if(vs(o)&&ec(o),o.wv>i.wv)return!0}(t&fe)!==0&&ce===null&&Pt(i,zt)}return!1}function yc(i,t,e=!0){var s=i.reactions;if(s!==null&&!Ue?.includes(i))for(var r=0;r<s.length;r++){var o=s[r];(o.f&Mt)!==0?yc(o,t,!1):t===o&&(e?Pt(o,Yt):(o.f&zt)!==0&&Pt(o,Le),xi(o))}}function _c(i){var t=Dt,e=Qt,s=le,r=U,o=Ue,n=nt,a=ze,l=gi,h=i.f;Dt=null,Qt=0,le=null,U=(h&(je|Ri))===0?i:null,Ue=null,is(i.ctx),ze=!1,gi=++Ks,i.ac!==null&&(ta(()=>{i.ac.abort(Hi)}),i.ac=null);try{i.f|=mn;var d=i.fn,u=d(),p=i.deps;if(Dt!==null){var m;if(jr(i,Qt),p!==null&&Qt>0)for(p.length=Qt+Dt.length,m=0;m<Dt.length;m++)p[Qt+m]=Dt[m];else i.deps=p=Dt;if(ei&&Gs()&&(i.f&fe)!==0)for(m=Qt;m<p.length;m++)(p[m].reactions??=[]).push(i)}else p!==null&&Qt<p.length&&(jr(i,Qt),p.length=Qt);if(ar()&&le!==null&&!ze&&p!==null&&(i.f&(Mt|Le|Yt))===0)for(m=0;m<le.length;m++)yc(le[m],i);return r!==null&&r!==i&&(Ks++,le!==null&&(s===null?s=le:s.push(...le))),(i.f&Ze)!==0&&(i.f^=Ze),u}catch(g){return Xh(g)}finally{i.f^=mn,Dt=t,Qt=e,le=s,U=r,Ue=o,is(n),ze=a,gi=l}}function Lv(i,t){let e=t.reactions;if(e!==null){var s=zg.call(e,i);if(s!==-1){var r=e.length-1;r===0?e=t.reactions=null:(e[s]=e[r],e.pop())}}e===null&&(t.f&Mt)!==0&&(Dt===null||!Dt.includes(t))&&(Pt(t,Le),(t.f&fe)!==0&&(t.f^=fe,t.f&=~wi),tc(t),jr(t,0))}function jr(i,t){var e=i.deps;if(e!==null)for(var s=t;s<e.length;s++)Lv(i,e[s])}function rs(i){var t=i.f;if((t&He)===0){Pt(i,zt);var e=G,s=ei;G=i,ei=!0;try{(t&(qe|Og))!==0?Tv(i):dc(i),uc(i);var r=_c(i);i.teardown=typeof r=="function"?r:null,i.wv=vc;var o;pn&&rv&&(i.f&Yt)!==0&&i.deps}finally{ei=s,G=e}}}function N(i){var t=i.f,e=(t&Mt)!==0;if(U!==null&&!ze){var s=G!==null&&(G.f&He)!==0;if(!s&&!Ue?.includes(i)){var r=U.deps;if((U.f&mn)!==0)i.rv<Ks&&(i.rv=Ks,Dt===null&&r!==null&&r[Qt]===i?Qt++:Dt===null?Dt=[i]:Dt.includes(i)||Dt.push(i));else{(U.deps??=[]).push(i);var o=i.reactions;o===null?i.reactions=[U]:o.includes(U)||o.push(U)}}}if(Ii){if(ti.has(i))return ti.get(i);if(e){var n=i,a=n.v;return((n.f&zt)===0&&n.reactions!==null||xc(n))&&(a=Zn(n)),ti.set(n,a),a}}else e&&(!ce?.has(i)||ot?.is_fork&&!Gs())&&(n=i,vs(n)&&ec(n),ei&&Gs()&&(n.f&fe)===0&&wc(n));if(ce?.has(i))return ce.get(i);if((i.f&Ze)!==0)throw i.v;return i.v}function wc(i){if(i.deps!==null){i.f^=fe;for(const t of i.deps)(t.reactions??=[]).push(i),(t.f&Mt)!==0&&(t.f&fe)===0&&wc(t)}}function xc(i){if(i.v===Rt)return!0;if(i.deps===null)return!1;for(const t of i.deps)if(ti.has(t)||(t.f&Mt)!==0&&xc(t))return!0;return!1}function bs(i){var t=ze;try{return ze=!0,i()}finally{ze=t}}const Dv=-7169;function Pt(i,t){i.f=i.f&Dv|t}function kc(i){if(!(typeof i!="object"||!i||i instanceof EventTarget)){if(mi in i)yn(i);else if(!Array.isArray(i))for(let t in i){const e=i[t];typeof e=="object"&&e&&mi in e&&yn(e)}}}function yn(i,t=new Set){if(typeof i=="object"&&i!==null&&!(i instanceof EventTarget)&&!t.has(i)){t.add(i),i instanceof Date&&i.getTime();for(let s in i)try{yn(i[s],t)}catch{}const e=Uh(i);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const s=Pg(e);for(let r in s){const o=s[r].get;if(o)try{o.call(i)}catch{}}}}}const Vv=["touchstart","touchmove"];function Fv(i){return Vv.includes(i)}const Cc=new Set,_n=new Set;function Nv(i,t,e,s={}){function r(o){if(s.capture||Ms.call(t,o),!o.cancelBubble)return ta(()=>e?.call(this,o))}return i.startsWith("pointer")||i.startsWith("touch")||i==="wheel"?lr(()=>{t.addEventListener(i,r,s)}):t.addEventListener(i,r,s),r}function Di(i,t,e,s,r){var o={capture:s,passive:r},n=Nv(i,t,e,o);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&hc(()=>{t.removeEventListener(i,n,o)})}function Bv(i){for(var t=0;t<i.length;t++)Cc.add(i[t]);for(var e of _n)e(i)}let el=null;function Ms(i){var t=this,e=t.ownerDocument,s=i.type,r=i.composedPath?.()||[],o=r[0]||i.target;el=i;var n=0,a=el===i&&i.__root;if(a){var l=r.indexOf(a);if(l!==-1&&(t===document||t===window)){i.__root=t;return}var h=r.indexOf(t);if(h===-1)return;l<=h&&(n=l)}if(o=r[n]||i.target,o!==t){Eg(i,"currentTarget",{configurable:!0,get(){return o||e}});var d=U,u=G;Ut(null),Me(null);try{for(var p,m=[];o!==null;){var g=o.assignedSlot||o.parentNode||o.host||null;try{var v=o["__"+s];v!=null&&(!o.disabled||i.target===o)&&v.call(o,i)}catch(b){p?m.push(b):p=b}if(i.cancelBubble||g===t||g===null)break;o=g}if(p){for(let b of m)queueMicrotask(()=>{throw b});throw p}}finally{i.__root=t,delete i.currentTarget,Ut(d),Me(u)}}}function Hv(i){var t=document.createElement("template");return t.innerHTML=i.replaceAll("<!>","<!---->"),t.content}function wn(i,t){var e=G;e.nodes_start===null&&(e.nodes_start=i,e.nodes_end=t)}function ai(i,t){var e=(t&tv)!==0,s=(t&ev)!==0,r,o=!i.startsWith("<!>");return()=>{r===void 0&&(r=Hv(o?i:"<!>"+i),e||(r=Yr(r)));var n=s||rc?document.importNode(r,!0):r.cloneNode(!0);if(e){var a=Yr(n),l=n.lastChild;wn(a,l)}else wn(n,n);return n}}function il(){var i=document.createDocumentFragment(),t=document.createComment(""),e=Ci();return i.append(t,e),wn(t,e),i}function ke(i,t){i!==null&&i.before(t)}function To(i,t){var e=t==null?"":typeof t=="object"?t+"":t;e!==(i.__t??=i.nodeValue)&&(i.__t=e,i.nodeValue=e+"")}function Uv(i,t){return Wv(i,t)}const Vi=new Map;function Wv(i,{target:t,anchor:e,props:s={},events:r,context:o,intro:n=!0}){kv();var a=new Set,l=u=>{for(var p=0;p<u.length;p++){var m=u[p];if(!a.has(m)){a.add(m);var g=Fv(m);t.addEventListener(m,Ms,{passive:g});var v=Vi.get(m);v===void 0?(document.addEventListener(m,Ms,{passive:g}),Vi.set(m,1)):Vi.set(m,v+1)}}};l(jn(Cc)),_n.add(l);var h=void 0,d=zv(()=>{var u=e??t.appendChild(Ci());return uv(u,{pending:()=>{}},p=>{if(o){Kh({});var m=nt;m.c=o}r&&(s.$$events=r),h=i(p,s)||{},o&&Qh()}),()=>{for(var p of a){t.removeEventListener(p,Ms);var m=Vi.get(p);--m===0?(document.removeEventListener(p,Ms),Vi.delete(p)):Vi.set(p,m)}_n.delete(l),u!==e&&u.parentNode?.removeChild(u)}});return Yv.set(h,d),h}let Yv=new WeakMap;class qv{anchor;#t=new Map;#e=new Map;#s=new Map;#i=new Set;#l=!0;constructor(t,e=!0){this.anchor=t,this.#l=e}#o=()=>{var t=ot;if(this.#t.has(t)){var e=this.#t.get(t),s=this.#e.get(e);if(s)sa(s),this.#i.delete(e);else{var r=this.#s.get(e);r&&(this.#e.set(e,r.effect),this.#s.delete(e),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),s=r.effect)}for(const[o,n]of this.#t){if(this.#t.delete(o),o===t)break;const a=this.#s.get(n);a&&(Wt(a.effect),this.#s.delete(n))}for(const[o,n]of this.#e){if(o===e||this.#i.has(o))continue;const a=()=>{if(Array.from(this.#t.values()).includes(o)){var h=document.createDocumentFragment();gc(n,h),h.append(Ci()),this.#s.set(o,{effect:n,fragment:h})}else Wt(n);this.#i.delete(o),this.#e.delete(o)};this.#l||!s?(this.#i.add(o),Qi(n,a,!1)):a()}}};#r=t=>{this.#t.delete(t);const e=Array.from(this.#t.values());for(const[s,r]of this.#s)e.includes(s)||(Wt(r.effect),this.#s.delete(s))};ensure(t,e){var s=ot,r=ac();if(e&&!this.#e.has(t)&&!this.#s.has(t))if(r){var o=document.createDocumentFragment(),n=Ci();o.append(n),this.#s.set(t,{effect:he(()=>e(n)),fragment:o})}else this.#e.set(t,he(()=>e(this.anchor)));if(this.#t.set(s,t),r){for(const[a,l]of this.#e)a===t?s.skipped_effects.delete(l):s.skipped_effects.add(l);for(const[a,l]of this.#s)a===t?s.skipped_effects.delete(l.effect):s.skipped_effects.add(l.effect);s.oncommit(this.#o),s.ondiscard(this.#r)}else this.#o()}}function Oo(i,t,e=!1){var s=new qv(i),r=e?es:0;function o(n,a){s.ensure(n,a)}ea(()=>{var n=!1;t((a,l=!0)=>{n=!0,o(l,a)}),n||o(!1,null)},r)}const sl=[...` 	
\r\f \v\uFEFF`];function jv(i,t,e){var s=""+i;if(e){for(var r in e)if(e[r])s=s?s+" "+r:r;else if(s.length)for(var o=r.length,n=0;(n=s.indexOf(r,n))>=0;){var a=n+o;(n===0||sl.includes(s[n-1]))&&(a===s.length||sl.includes(s[a]))?s=(n===0?"":s.substring(0,n))+s.substring(a+1):n=a}}return s===""?null:s}function Gv(i,t){return i==null?null:String(i)}function zs(i,t,e,s,r,o){var n=i.__className;if(n!==e||n===void 0){var a=jv(e,s,o);a==null?i.removeAttribute("class"):i.className=a,i.__className=e}else if(o&&r!==o)for(var l in o){var h=!!o[l];(r==null||h!==!!r[l])&&i.classList.toggle(l,h)}return o}function Kv(i,t,e,s){var r=i.__style;if(r!==t){var o=Gv(t);o==null?i.removeAttribute("style"):i.style.cssText=o,i.__style=t}return s}function rl(i,t){return i===t||i?.[mi]===t}function Qv(i={},t,e,s){return Ev(()=>{var r,o;return po(()=>{r=o,o=[],bs(()=>{i!==e(...o)&&(t(i,...o),r&&rl(e(...r),i)&&t(null,...r))})}),()=>{lr(()=>{o&&rl(e(...o),i)&&t(null,...o)})}}),i}function Xv(i=!1){const t=nt,e=t.l.u;if(!e)return;let s=()=>kc(t.s);if(i){let r=0,o={};const n=uo(()=>{let a=!1;const l=t.s;for(const h in l)l[h]!==o[h]&&(o[h]=l[h],a=!0);return a&&r++,r});s=()=>N(n)}e.b.length&&$v(()=>{ol(t,s),fn(e.b)}),bn(()=>{const r=bs(()=>e.m.map(Tg));return()=>{for(const o of r)typeof o=="function"&&o()}}),e.a.length&&bn(()=>{ol(t,s),fn(e.a)})}function ol(i,t){if(i.l.s)for(const e of i.l.s)N(e);t()}let wr=!1;function Jv(i){var t=wr;try{return wr=!1,[i(),wr]}finally{wr=t}}function Ro(i,t,e,s){var r=!gs||(e&Qg)!==0,o=(e&Jg)!==0,n=(e&Zg)!==0,a=s,l=!0,h=()=>(l&&(l=!1,a=n?bs(s):s),a),d;if(o){var u=mi in i||Rg in i;d=Gi(i,t)?.set??(u&&t in i?k=>i[t]=k:void 0)}var p,m=!1;o?[p,m]=Jv(()=>i[t]):p=i[t],p===void 0&&s!==void 0&&(p=h(),d&&(r&&Bg(),d(p)));var g;if(r?g=()=>{var k=i[t];return k===void 0?h():(l=!0,k)}:g=()=>{var k=i[t];return k!==void 0&&(a=void 0),k===void 0?a:k},r&&(e&Xg)===0)return g;if(d){var v=i.$$legacy;return(function(k,_){return arguments.length>0?((!r||!_||v||m)&&d(_?g():k),k):g()})}var b=!1,x=((e&Kg)!==0?uo:Jn)(()=>(b=!1,g()));o&&N(x);var y=G;return(function(k,_){if(arguments.length>0){const w=_?N(x):r&&o?Wi(k):k;return $t(x,w),b=!0,a!==void 0&&(a=w),k}return Ii&&b||(y.f&He)!==0?x.v:N(x)})}function Zv(i){nt===null&&Ig(),gs&&nt.l!==null?tb(nt).m.push(i):bn(()=>{const t=bs(i);if(typeof t=="function")return t})}function tb(i){var t=i.l;return t.u??={a:[],b:[],m:[]}}const eb="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(eb);ov();Bv(["click"]);function tt(i){var t=i.width,e=i.height;if(t<0)throw new Error("Negative width is not allowed for Size");if(e<0)throw new Error("Negative height is not allowed for Size");return{width:t,height:e}}function vi(i,t){return i.width===t.width&&i.height===t.height}var ib=(function(){function i(t){var e=this;this._resolutionListener=function(){return e._onResolutionChanged()},this._resolutionMediaQueryList=null,this._observers=[],this._window=t,this._installResolutionListener()}return i.prototype.dispose=function(){this._uninstallResolutionListener(),this._window=null},Object.defineProperty(i.prototype,"value",{get:function(){return this._window.devicePixelRatio},enumerable:!1,configurable:!0}),i.prototype.subscribe=function(t){var e=this,s={next:t};return this._observers.push(s),{unsubscribe:function(){e._observers=e._observers.filter(function(r){return r!==s})}}},i.prototype._installResolutionListener=function(){if(this._resolutionMediaQueryList!==null)throw new Error("Resolution listener is already installed");var t=this._window.devicePixelRatio;this._resolutionMediaQueryList=this._window.matchMedia("all and (resolution: ".concat(t,"dppx)")),this._resolutionMediaQueryList.addListener(this._resolutionListener)},i.prototype._uninstallResolutionListener=function(){this._resolutionMediaQueryList!==null&&(this._resolutionMediaQueryList.removeListener(this._resolutionListener),this._resolutionMediaQueryList=null)},i.prototype._reinstallResolutionListener=function(){this._uninstallResolutionListener(),this._installResolutionListener()},i.prototype._onResolutionChanged=function(){var t=this;this._observers.forEach(function(e){return e.next(t._window.devicePixelRatio)}),this._reinstallResolutionListener()},i})();function sb(i){return new ib(i)}var rb=(function(){function i(t,e,s){var r;this._canvasElement=null,this._bitmapSizeChangedListeners=[],this._suggestedBitmapSize=null,this._suggestedBitmapSizeChangedListeners=[],this._devicePixelRatioObservable=null,this._canvasElementResizeObserver=null,this._canvasElement=t,this._canvasElementClientSize=tt({width:this._canvasElement.clientWidth,height:this._canvasElement.clientHeight}),this._transformBitmapSize=e??(function(o){return o}),this._allowResizeObserver=(r=s?.allowResizeObserver)!==null&&r!==void 0?r:!0,this._chooseAndInitObserver()}return i.prototype.dispose=function(){var t,e;if(this._canvasElement===null)throw new Error("Object is disposed");(t=this._canvasElementResizeObserver)===null||t===void 0||t.disconnect(),this._canvasElementResizeObserver=null,(e=this._devicePixelRatioObservable)===null||e===void 0||e.dispose(),this._devicePixelRatioObservable=null,this._suggestedBitmapSizeChangedListeners.length=0,this._bitmapSizeChangedListeners.length=0,this._canvasElement=null},Object.defineProperty(i.prototype,"canvasElement",{get:function(){if(this._canvasElement===null)throw new Error("Object is disposed");return this._canvasElement},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"canvasElementClientSize",{get:function(){return this._canvasElementClientSize},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"bitmapSize",{get:function(){return tt({width:this.canvasElement.width,height:this.canvasElement.height})},enumerable:!1,configurable:!0}),i.prototype.resizeCanvasElement=function(t){this._canvasElementClientSize=tt(t),this.canvasElement.style.width="".concat(this._canvasElementClientSize.width,"px"),this.canvasElement.style.height="".concat(this._canvasElementClientSize.height,"px"),this._invalidateBitmapSize()},i.prototype.subscribeBitmapSizeChanged=function(t){this._bitmapSizeChangedListeners.push(t)},i.prototype.unsubscribeBitmapSizeChanged=function(t){this._bitmapSizeChangedListeners=this._bitmapSizeChangedListeners.filter(function(e){return e!==t})},Object.defineProperty(i.prototype,"suggestedBitmapSize",{get:function(){return this._suggestedBitmapSize},enumerable:!1,configurable:!0}),i.prototype.subscribeSuggestedBitmapSizeChanged=function(t){this._suggestedBitmapSizeChangedListeners.push(t)},i.prototype.unsubscribeSuggestedBitmapSizeChanged=function(t){this._suggestedBitmapSizeChangedListeners=this._suggestedBitmapSizeChangedListeners.filter(function(e){return e!==t})},i.prototype.applySuggestedBitmapSize=function(){if(this._suggestedBitmapSize!==null){var t=this._suggestedBitmapSize;this._suggestedBitmapSize=null,this._resizeBitmap(t),this._emitSuggestedBitmapSizeChanged(t,this._suggestedBitmapSize)}},i.prototype._resizeBitmap=function(t){var e=this.bitmapSize;vi(e,t)||(this.canvasElement.width=t.width,this.canvasElement.height=t.height,this._emitBitmapSizeChanged(e,t))},i.prototype._emitBitmapSizeChanged=function(t,e){var s=this;this._bitmapSizeChangedListeners.forEach(function(r){return r.call(s,t,e)})},i.prototype._suggestNewBitmapSize=function(t){var e=this._suggestedBitmapSize,s=tt(this._transformBitmapSize(t,this._canvasElementClientSize)),r=vi(this.bitmapSize,s)?null:s;e===null&&r===null||e!==null&&r!==null&&vi(e,r)||(this._suggestedBitmapSize=r,this._emitSuggestedBitmapSizeChanged(e,r))},i.prototype._emitSuggestedBitmapSizeChanged=function(t,e){var s=this;this._suggestedBitmapSizeChangedListeners.forEach(function(r){return r.call(s,t,e)})},i.prototype._chooseAndInitObserver=function(){var t=this;if(!this._allowResizeObserver){this._initDevicePixelRatioObservable();return}nb().then(function(e){return e?t._initResizeObserver():t._initDevicePixelRatioObservable()})},i.prototype._initDevicePixelRatioObservable=function(){var t=this;if(this._canvasElement!==null){var e=nl(this._canvasElement);if(e===null)throw new Error("No window is associated with the canvas");this._devicePixelRatioObservable=sb(e),this._devicePixelRatioObservable.subscribe(function(){return t._invalidateBitmapSize()}),this._invalidateBitmapSize()}},i.prototype._invalidateBitmapSize=function(){var t,e;if(this._canvasElement!==null){var s=nl(this._canvasElement);if(s!==null){var r=(e=(t=this._devicePixelRatioObservable)===null||t===void 0?void 0:t.value)!==null&&e!==void 0?e:s.devicePixelRatio,o=this._canvasElement.getClientRects(),n=o[0]!==void 0?ab(o[0],r):tt({width:this._canvasElementClientSize.width*r,height:this._canvasElementClientSize.height*r});this._suggestNewBitmapSize(n)}}},i.prototype._initResizeObserver=function(){var t=this;this._canvasElement!==null&&(this._canvasElementResizeObserver=new ResizeObserver(function(e){var s=e.find(function(n){return n.target===t._canvasElement});if(!(!s||!s.devicePixelContentBoxSize||!s.devicePixelContentBoxSize[0])){var r=s.devicePixelContentBoxSize[0],o=tt({width:r.inlineSize,height:r.blockSize});t._suggestNewBitmapSize(o)}}),this._canvasElementResizeObserver.observe(this._canvasElement,{box:"device-pixel-content-box"}))},i})();function ob(i,t){return new rb(i,t.transform,t.options)}function nl(i){return i.ownerDocument.defaultView}function nb(){return new Promise(function(i){var t=new ResizeObserver(function(e){i(e.every(function(s){return"devicePixelContentBoxSize"in s})),t.disconnect()});t.observe(document.body,{box:"device-pixel-content-box"})}).catch(function(){return!1})}function ab(i,t){return tt({width:Math.round(i.left*t+i.width*t)-Math.round(i.left*t),height:Math.round(i.top*t+i.height*t)-Math.round(i.top*t)})}var lb=(function(){function i(t,e,s){if(e.width===0||e.height===0)throw new TypeError("Rendering target could only be created on a media with positive width and height");if(this._mediaSize=e,s.width===0||s.height===0)throw new TypeError("Rendering target could only be created using a bitmap with positive integer width and height");this._bitmapSize=s,this._context=t}return i.prototype.useMediaCoordinateSpace=function(t){try{return this._context.save(),this._context.setTransform(1,0,0,1,0,0),this._context.scale(this._horizontalPixelRatio,this._verticalPixelRatio),t({context:this._context,mediaSize:this._mediaSize})}finally{this._context.restore()}},i.prototype.useBitmapCoordinateSpace=function(t){try{return this._context.save(),this._context.setTransform(1,0,0,1,0,0),t({context:this._context,mediaSize:this._mediaSize,bitmapSize:this._bitmapSize,horizontalPixelRatio:this._horizontalPixelRatio,verticalPixelRatio:this._verticalPixelRatio})}finally{this._context.restore()}},Object.defineProperty(i.prototype,"_horizontalPixelRatio",{get:function(){return this._bitmapSize.width/this._mediaSize.width},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"_verticalPixelRatio",{get:function(){return this._bitmapSize.height/this._mediaSize.height},enumerable:!1,configurable:!0}),i})();function Si(i,t){var e=i.canvasElementClientSize;if(e.width===0||e.height===0)return null;var s=i.bitmapSize;if(s.width===0||s.height===0)return null;var r=i.canvasElement.getContext("2d",t);return r===null?null:new lb(r,e,s)}const Sc={title:"",visible:!0,lastValueVisible:!0,priceLineVisible:!0,priceLineSource:0,priceLineWidth:1,priceLineColor:"",priceLineStyle:2,baseLineVisible:!0,baseLineWidth:1,baseLineColor:"#B2B5BE",baseLineStyle:0,priceFormat:{type:"price",precision:2,minMove:.01}};var al,ll;function $i(i,t){const e={0:[],1:[i.lineWidth,i.lineWidth],2:[2*i.lineWidth,2*i.lineWidth],3:[6*i.lineWidth,6*i.lineWidth],4:[i.lineWidth,4*i.lineWidth]}[t];i.setLineDash(e)}function $c(i,t,e,s){i.beginPath();const r=i.lineWidth%2?.5:0;i.moveTo(e,t+r),i.lineTo(s,t+r),i.stroke()}function St(i,t){if(!i)throw new Error("Assertion failed"+(t?": "+t:""))}function qt(i){if(i===void 0)throw new Error("Value is undefined");return i}function S(i){if(i===null)throw new Error("Value is null");return i}function Je(i){return S(qt(i))}(function(i){i[i.Simple=0]="Simple",i[i.WithSteps=1]="WithSteps",i[i.Curved=2]="Curved"})(al||(al={})),(function(i){i[i.Solid=0]="Solid",i[i.Dotted=1]="Dotted",i[i.Dashed=2]="Dashed",i[i.LargeDashed=3]="LargeDashed",i[i.SparseDotted=4]="SparseDotted"})(ll||(ll={}));class dt{constructor(){this.t=[]}i(t,e,s){const r={h:t,l:e,o:s===!0};this.t.push(r)}_(t){const e=this.t.findIndex((s=>t===s.h));e>-1&&this.t.splice(e,1)}u(t){this.t=this.t.filter((e=>e.l!==t))}p(t,e,s){const r=[...this.t];this.t=this.t.filter((o=>!o.o)),r.forEach((o=>o.h(t,e,s)))}v(){return this.t.length>0}m(){this.t=[]}}function ee(i,...t){for(const e of t)for(const s in e)e[s]!==void 0&&Object.prototype.hasOwnProperty.call(e,s)&&!["__proto__","constructor","prototype"].includes(s)&&(typeof e[s]!="object"||i[s]===void 0||Array.isArray(e[s])?i[s]=e[s]:ee(i[s],e[s]));return i}function os(i){return typeof i=="number"&&isFinite(i)}function Qs(i){return typeof i=="number"&&i%1==0}function cr(i){return typeof i=="string"}function xr(i){return typeof i=="boolean"}function Ne(i){const t=i;if(!t||typeof t!="object")return t;let e,s,r;for(s in e=Array.isArray(t)?[]:{},t)t.hasOwnProperty(s)&&(r=t[s],e[s]=r&&typeof r=="object"?Ne(r):r);return e}function hb(i){return i!==null}function xn(i){return i===null?void 0:i}const zc="-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";function Gr(i,t,e){return t===void 0&&(t=zc),`${e=e!==void 0?`${e} `:""}${i}px ${t}`}class cb{constructor(t){this.M={S:1,C:5,P:NaN,k:"",T:"",R:"",D:"",V:0,B:0,I:0,A:0,L:0},this.O=t}N(){const t=this.M,e=this.F(),s=this.W();return t.P===e&&t.T===s||(t.P=e,t.T=s,t.k=Gr(e,s),t.A=2.5/12*e,t.V=t.A,t.B=e/12*t.C,t.I=e/12*t.C,t.L=0),t.R=this.H(),t.D=this.U(),this.M}H(){return this.O.N().layout.textColor}U(){return this.O.$()}F(){return this.O.N().layout.fontSize}W(){return this.O.N().layout.fontFamily}}function Io(i){return i<0?0:i>255?255:Math.round(i)||0}function hl(i){return .199*i[0]+.687*i[1]+.114*i[2]}class ub{constructor(t,e){this.q=new Map,this.Y=t,e&&(this.q=e)}j(t,e){if(t==="transparent")return t;const s=this.K(t),r=s[3];return`rgba(${s[0]}, ${s[1]}, ${s[2]}, ${e*r})`}X(t){const e=this.K(t);return{Z:`rgb(${e[0]}, ${e[1]}, ${e[2]})`,G:hl(e)>160?"black":"white"}}J(t){return hl(this.K(t))}tt(t,e,s){const[r,o,n,a]=this.K(t),[l,h,d,u]=this.K(e),p=[Io(r+s*(l-r)),Io(o+s*(h-o)),Io(n+s*(d-n)),(m=a+s*(u-a),m<=0||m>1?Math.min(Math.max(m,0),1):Math.round(1e4*m)/1e4)];var m;return`rgba(${p[0]}, ${p[1]}, ${p[2]}, ${p[3]})`}K(t){const e=this.q.get(t);if(e)return e;const s=(function(n){const a=document.createElement("div");a.style.display="none",document.body.appendChild(a),a.style.color=n;const l=window.getComputedStyle(a).color;return document.body.removeChild(a),l})(t),r=s.match(/^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)$/);if(!r){if(this.Y.length)for(const n of this.Y){const a=n(t);if(a)return this.q.set(t,a),a}throw new Error(`Failed to parse color: ${t}`)}const o=[parseInt(r[1],10),parseInt(r[2],10),parseInt(r[3],10),r[4]?parseFloat(r[4]):1];return this.q.set(t,o),o}}class db{constructor(){this.it=[]}st(t){this.it=t}nt(t,e,s){this.it.forEach((r=>{r.nt(t,e,s)}))}}class ys{nt(t,e,s){t.useBitmapCoordinateSpace((r=>this.et(r,e,s)))}}class pb extends ys{constructor(){super(...arguments),this.rt=null}ht(t){this.rt=t}et({context:t,horizontalPixelRatio:e,verticalPixelRatio:s}){if(this.rt===null||this.rt.lt===null)return;const r=this.rt.lt,o=this.rt,n=Math.max(1,Math.floor(e))%2/2,a=l=>{t.beginPath();for(let h=r.to-1;h>=r.from;--h){const d=o.ot[h],u=Math.round(d._t*e)+n,p=d.ut*s,m=l*s+n;t.moveTo(u,p),t.arc(u,p,m,0,2*Math.PI)}t.fill()};o.ct>0&&(t.fillStyle=o.dt,a(o.ft+o.ct)),t.fillStyle=o.vt,a(o.ft)}}function fb(){return{ot:[{_t:0,ut:0,wt:0,gt:0}],vt:"",dt:"",ft:0,ct:0,lt:null}}const mb={from:0,to:1};class gb{constructor(t,e,s){this.Mt=new db,this.bt=[],this.St=[],this.xt=!0,this.O=t,this.Ct=e,this.Pt=s,this.Mt.st(this.bt)}yt(t){this.kt(),this.xt=!0}Tt(){return this.xt&&(this.Rt(),this.xt=!1),this.Mt}kt(){const t=this.Pt.Dt();t.length!==this.bt.length&&(this.St=t.map(fb),this.bt=this.St.map((e=>{const s=new pb;return s.ht(e),s})),this.Mt.st(this.bt))}Rt(){const t=this.Ct.N().mode===2||!this.Ct.Vt(),e=this.Pt.Bt(),s=this.Ct.It(),r=this.O.Et();this.kt(),e.forEach(((o,n)=>{const a=this.St[n],l=o.At(s),h=o.zt();!t&&l!==null&&o.Vt()&&h!==null?(a.vt=l.Lt,a.ft=l.ft,a.ct=l.Ot,a.ot[0].gt=l.gt,a.ot[0].ut=o.Ft().Nt(l.gt,h.Wt),a.dt=l.Ht??this.O.Ut(a.ot[0].ut/o.Ft().$t()),a.ot[0].wt=s,a.ot[0]._t=r.qt(s),a.lt=mb):a.lt=null}))}}class vb extends ys{constructor(t){super(),this.Yt=t}et({context:t,bitmapSize:e,horizontalPixelRatio:s,verticalPixelRatio:r}){if(this.Yt===null)return;const o=this.Yt.jt.Vt,n=this.Yt.Kt.Vt;if(!o&&!n)return;const a=Math.round(this.Yt._t*s),l=Math.round(this.Yt.ut*r);t.lineCap="butt",o&&a>=0&&(t.lineWidth=Math.floor(this.Yt.jt.ct*s),t.strokeStyle=this.Yt.jt.R,t.fillStyle=this.Yt.jt.R,$i(t,this.Yt.jt.Xt),(function(h,d,u,p){h.beginPath();const m=h.lineWidth%2?.5:0;h.moveTo(d+m,u),h.lineTo(d+m,p),h.stroke()})(t,a,0,e.height)),n&&l>=0&&(t.lineWidth=Math.floor(this.Yt.Kt.ct*r),t.strokeStyle=this.Yt.Kt.R,t.fillStyle=this.Yt.Kt.R,$i(t,this.Yt.Kt.Xt),$c(t,l,0,e.width))}}class bb{constructor(t,e){this.xt=!0,this.Zt={jt:{ct:1,Xt:0,R:"",Vt:!1},Kt:{ct:1,Xt:0,R:"",Vt:!1},_t:0,ut:0},this.Gt=new vb(this.Zt),this.Jt=t,this.Pt=e}yt(){this.xt=!0}Tt(t){return this.xt&&(this.Rt(),this.xt=!1),this.Gt}Rt(){const t=this.Jt.Vt(),e=this.Pt.Qt().N().crosshair,s=this.Zt;if(e.mode===2)return s.Kt.Vt=!1,void(s.jt.Vt=!1);s.Kt.Vt=t&&this.Jt.ti(this.Pt),s.jt.Vt=t&&this.Jt.ii(),s.Kt.ct=e.horzLine.width,s.Kt.Xt=e.horzLine.style,s.Kt.R=e.horzLine.color,s.jt.ct=e.vertLine.width,s.jt.Xt=e.vertLine.style,s.jt.R=e.vertLine.color,s._t=this.Jt.si(),s.ut=this.Jt.ni()}}function fo(i,t,e,s,r,o){i.save(),i.globalCompositeOperation="copy",i.fillStyle=o,i.fillRect(t,e,s,r),i.restore()}function cl(i,t,e,s,r,o){i.beginPath(),i.roundRect?i.roundRect(t,e,s,r,o):(i.lineTo(t+s-o[1],e),o[1]!==0&&i.arcTo(t+s,e,t+s,e+o[1],o[1]),i.lineTo(t+s,e+r-o[2]),o[2]!==0&&i.arcTo(t+s,e+r,t+s-o[2],e+r,o[2]),i.lineTo(t+o[3],e+r),o[3]!==0&&i.arcTo(t,e+r,t,e+r-o[3],o[3]),i.lineTo(t,e+o[0]),o[0]!==0&&i.arcTo(t,e,t+o[0],e,o[0]))}function ul(i,t,e,s,r,o,n=0,a=[0,0,0,0],l=""){if(i.save(),!n||!l||l===o)return cl(i,t,e,s,r,a),i.fillStyle=o,i.fill(),void i.restore();const h=n/2;var d;cl(i,t+h,e+h,s-n,r-n,(d=-h,a.map((u=>u===0?u:u+d)))),o!=="transparent"&&(i.fillStyle=o,i.fill()),l!=="transparent"&&(i.lineWidth=n,i.strokeStyle=l,i.closePath(),i.stroke()),i.restore()}function Ec(i,t,e,s,r,o,n){i.save(),i.globalCompositeOperation="copy";const a=i.createLinearGradient(0,0,0,r);a.addColorStop(0,o),a.addColorStop(1,n),i.fillStyle=a,i.fillRect(t,e,s,r),i.restore()}class dl{constructor(t,e){this.ht(t,e)}ht(t,e){this.Yt=t,this.ei=e}$t(t,e){return this.Yt.Vt?t.P+t.A+t.V:0}nt(t,e,s,r){if(!this.Yt.Vt||this.Yt.ri.length===0)return;const o=this.Yt.R,n=this.ei.Z,a=t.useBitmapCoordinateSpace((l=>{const h=l.context;h.font=e.k;const d=this.hi(l,e,s,r),u=d.ai;return d.li?ul(h,u.oi,u._i,u.ui,u.ci,n,u.di,[u.ft,0,0,u.ft],n):ul(h,u.fi,u._i,u.ui,u.ci,n,u.di,[0,u.ft,u.ft,0],n),this.Yt.pi&&(h.fillStyle=o,h.fillRect(u.fi,u.mi,u.wi-u.fi,u.gi)),this.Yt.Mi&&(h.fillStyle=e.D,h.fillRect(d.li?u.bi-u.di:0,u._i,u.di,u.Si-u._i)),d}));t.useMediaCoordinateSpace((({context:l})=>{const h=a.xi;l.font=e.k,l.textAlign=a.li?"right":"left",l.textBaseline="middle",l.fillStyle=o,l.fillText(this.Yt.ri,h.Ci,(h._i+h.Si)/2+h.Pi)}))}hi(t,e,s,r){const{context:o,bitmapSize:n,mediaSize:a,horizontalPixelRatio:l,verticalPixelRatio:h}=t,d=this.Yt.pi||!this.Yt.yi?e.C:0,u=this.Yt.ki?e.S:0,p=e.A+this.ei.Ti,m=e.V+this.ei.Ri,g=e.B,v=e.I,b=this.Yt.ri,x=e.P,y=s.Di(o,b),k=Math.ceil(s.Vi(o,b)),_=x+p+m,w=e.S+g+v+k+d,E=Math.max(1,Math.floor(h));let A=Math.round(_*h);A%2!=E%2&&(A+=1);const T=u>0?Math.max(1,Math.floor(u*l)):0,M=Math.round(w*l),P=Math.round(d*l),Z=this.ei.Bi??this.ei.Ii,j=Math.round(Z*h)-Math.floor(.5*h),J=Math.floor(j+E/2-A/2),q=J+A,it=r==="right",mt=it?a.width-u:u,gt=it?n.width-T:T;let kt,Bt,li;return it?(kt=gt-M,Bt=gt-P,li=mt-d-g-u):(kt=gt+M,Bt=gt+P,li=mt+d+g),{li:it,ai:{_i:J,mi:j,Si:q,ui:M,ci:A,ft:2*l,di:T,oi:kt,fi:gt,wi:Bt,gi:E,bi:n.width},xi:{_i:J/h,Si:q/h,Ci:li,Pi:y}}}}class mo{constructor(t){this.Ei={Ii:0,Z:"#000",Ri:0,Ti:0},this.Ai={ri:"",Vt:!1,pi:!0,yi:!1,Ht:"",R:"#FFF",Mi:!1,ki:!1},this.zi={ri:"",Vt:!1,pi:!1,yi:!0,Ht:"",R:"#FFF",Mi:!0,ki:!0},this.xt=!0,this.Li=new(t||dl)(this.Ai,this.Ei),this.Oi=new(t||dl)(this.zi,this.Ei)}ri(){return this.Ni(),this.Ai.ri}Ii(){return this.Ni(),this.Ei.Ii}yt(){this.xt=!0}$t(t,e=!1){return Math.max(this.Li.$t(t,e),this.Oi.$t(t,e))}Fi(){return this.Ei.Bi||0}Wi(t){this.Ei.Bi=t}Hi(){return this.Ni(),this.Ai.Vt||this.zi.Vt}Ui(){return this.Ni(),this.Ai.Vt}Tt(t){return this.Ni(),this.Ai.pi=this.Ai.pi&&t.N().ticksVisible,this.zi.pi=this.zi.pi&&t.N().ticksVisible,this.Li.ht(this.Ai,this.Ei),this.Oi.ht(this.zi,this.Ei),this.Li}$i(){return this.Ni(),this.Li.ht(this.Ai,this.Ei),this.Oi.ht(this.zi,this.Ei),this.Oi}Ni(){this.xt&&(this.Ai.pi=!0,this.zi.pi=!1,this.qi(this.Ai,this.zi,this.Ei))}}class yb extends mo{constructor(t,e,s){super(),this.Jt=t,this.Yi=e,this.ji=s}qi(t,e,s){if(t.Vt=!1,this.Jt.N().mode===2)return;const r=this.Jt.N().horzLine;if(!r.labelVisible)return;const o=this.Yi.zt();if(!this.Jt.Vt()||this.Yi.Ki()||o===null)return;const n=this.Yi.Xi().X(r.labelBackgroundColor);s.Z=n.Z,t.R=n.G;const a=2/12*this.Yi.P();s.Ti=a,s.Ri=a;const l=this.ji(this.Yi);s.Ii=l.Ii,t.ri=this.Yi.Zi(l.gt,o),t.Vt=!0}}const _b=/[1-9]/g;class Pc{constructor(){this.Yt=null}ht(t){this.Yt=t}nt(t,e){if(this.Yt===null||this.Yt.Vt===!1||this.Yt.ri.length===0)return;const s=t.useMediaCoordinateSpace((({context:p})=>(p.font=e.k,Math.round(e.Gi.Vi(p,S(this.Yt).ri,_b)))));if(s<=0)return;const r=e.Ji,o=s+2*r,n=o/2,a=this.Yt.Qi;let l=this.Yt.Ii,h=Math.floor(l-n)+.5;h<0?(l+=Math.abs(0-h),h=Math.floor(l-n)+.5):h+o>a&&(l-=Math.abs(a-(h+o)),h=Math.floor(l-n)+.5);const d=h+o,u=Math.ceil(0+e.S+e.C+e.A+e.P+e.V);t.useBitmapCoordinateSpace((({context:p,horizontalPixelRatio:m,verticalPixelRatio:g})=>{const v=S(this.Yt);p.fillStyle=v.Z;const b=Math.round(h*m),x=Math.round(0*g),y=Math.round(d*m),k=Math.round(u*g),_=Math.round(2*m);if(p.beginPath(),p.moveTo(b,x),p.lineTo(b,k-_),p.arcTo(b,k,b+_,k,_),p.lineTo(y-_,k),p.arcTo(y,k,y,k-_,_),p.lineTo(y,x),p.fill(),v.pi){const w=Math.round(v.Ii*m),E=x,A=Math.round((E+e.C)*g);p.fillStyle=v.R;const T=Math.max(1,Math.floor(m)),M=Math.floor(.5*m);p.fillRect(w-M,E,T,A-E)}})),t.useMediaCoordinateSpace((({context:p})=>{const m=S(this.Yt),g=0+e.S+e.C+e.A+e.P/2;p.font=e.k,p.textAlign="left",p.textBaseline="middle",p.fillStyle=m.R;const v=e.Gi.Di(p,"Apr0");p.translate(h+r,g+v),p.fillText(m.ri,0,0)}))}}class wb{constructor(t,e,s){this.xt=!0,this.Gt=new Pc,this.Zt={Vt:!1,Z:"#4c525e",R:"white",ri:"",Qi:0,Ii:NaN,pi:!0},this.Ct=t,this.ts=e,this.ji=s}yt(){this.xt=!0}Tt(){return this.xt&&(this.Rt(),this.xt=!1),this.Gt.ht(this.Zt),this.Gt}Rt(){const t=this.Zt;if(t.Vt=!1,this.Ct.N().mode===2)return;const e=this.Ct.N().vertLine;if(!e.labelVisible)return;const s=this.ts.Et();if(s.Ki())return;t.Qi=s.Qi();const r=this.ji();if(r===null)return;t.Ii=r.Ii;const o=s.ss(this.Ct.It());t.ri=s.ns(S(o)),t.Vt=!0;const n=this.ts.Xi().X(e.labelBackgroundColor);t.Z=n.Z,t.R=n.G,t.pi=s.N().ticksVisible}}class Mc{constructor(){this.es=null,this.rs=0}hs(){return this.rs}ls(t){this.rs=t}Ft(){return this.es}_s(t){this.es=t}us(t){return[]}cs(){return[]}Vt(){return!0}}var pl;(function(i){i[i.Normal=0]="Normal",i[i.Magnet=1]="Magnet",i[i.Hidden=2]="Hidden",i[i.MagnetOHLC=3]="MagnetOHLC"})(pl||(pl={}));class xb extends Mc{constructor(t,e){super(),this.Pt=null,this.ds=NaN,this.fs=0,this.ps=!1,this.vs=new Map,this.ws=!1,this.gs=new WeakMap,this.Ms=new WeakMap,this.bs=NaN,this.Ss=NaN,this.xs=NaN,this.Cs=NaN,this.ts=t,this.Ps=e,this.ys=((r,o)=>n=>{const a=o(),l=r();if(n===S(this.Pt).ks())return{gt:l,Ii:a};{const h=S(n.zt());return{gt:n.Ts(a,h),Ii:a}}})((()=>this.ds),(()=>this.Ss));const s=((r,o)=>()=>{const n=this.ts.Et().Rs(r()),a=o();return n&&Number.isFinite(a)?{wt:n,Ii:a}:null})((()=>this.fs),(()=>this.si()));this.Ds=new wb(this,t,s)}N(){return this.Ps}Vs(t,e){this.xs=t,this.Cs=e}Bs(){this.xs=NaN,this.Cs=NaN}Is(){return this.xs}Es(){return this.Cs}As(t,e,s){this.ws||(this.ws=!0),this.ps=!0,this.zs(t,e,s)}It(){return this.fs}si(){return this.bs}ni(){return this.Ss}Vt(){return this.ps}Ls(){this.ps=!1,this.Os(),this.ds=NaN,this.bs=NaN,this.Ss=NaN,this.Pt=null,this.Bs(),this.Ns()}Fs(t){let e=this.gs.get(t);e||(e=new bb(this,t),this.gs.set(t,e));let s=this.Ms.get(t);return s||(s=new gb(this.ts,this,t),this.Ms.set(t,s)),[e,s]}ti(t){return t===this.Pt&&this.Ps.horzLine.visible}ii(){return this.Ps.vertLine.visible}Ws(t,e){this.ps&&this.Pt===t||this.vs.clear();const s=[];return this.Pt===t&&s.push(this.Hs(this.vs,e,this.ys)),s}cs(){return this.ps?[this.Ds]:[]}Us(){return this.Pt}Ns(){this.ts.$s().forEach((t=>{this.gs.get(t)?.yt(),this.Ms.get(t)?.yt()})),this.vs.forEach((t=>t.yt())),this.Ds.yt()}qs(t){return t&&!t.ks().Ki()?t.ks():null}zs(t,e,s){this.Ys(t,e,s)&&this.Ns()}Ys(t,e,s){const r=this.bs,o=this.Ss,n=this.ds,a=this.fs,l=this.Pt,h=this.qs(s);this.fs=t,this.bs=isNaN(t)?NaN:this.ts.Et().qt(t),this.Pt=s;const d=h!==null?h.zt():null;return h!==null&&d!==null?(this.ds=e,this.Ss=h.Nt(e,d)):(this.ds=NaN,this.Ss=NaN),r!==this.bs||o!==this.Ss||a!==this.fs||n!==this.ds||l!==this.Pt}Os(){const t=this.ts.js().map((s=>s.Xs().Ks())).filter(hb),e=t.length===0?null:Math.max(...t);this.fs=e!==null?e:NaN}Hs(t,e,s){let r=t.get(e);return r===void 0&&(r=new yb(this,e,s),t.set(e,r)),r}}function go(i){return i==="left"||i==="right"}class Ct{constructor(t){this.Zs=new Map,this.Gs=[],this.Js=t}Qs(t,e){const s=(function(r,o){return r===void 0?o:{tn:Math.max(r.tn,o.tn),sn:r.sn||o.sn}})(this.Zs.get(t),e);this.Zs.set(t,s)}nn(){return this.Js}en(t){const e=this.Zs.get(t);return e===void 0?{tn:this.Js}:{tn:Math.max(this.Js,e.tn),sn:e.sn}}rn(){this.hn(),this.Gs=[{an:0}]}ln(t){this.hn(),this.Gs=[{an:1,Wt:t}]}_n(t){this.un(),this.Gs.push({an:5,Wt:t})}hn(){this.un(),this.Gs.push({an:6})}cn(){this.hn(),this.Gs=[{an:4}]}dn(t){this.hn(),this.Gs.push({an:2,Wt:t})}fn(t){this.hn(),this.Gs.push({an:3,Wt:t})}pn(){return this.Gs}vn(t){for(const e of t.Gs)this.mn(e);this.Js=Math.max(this.Js,t.Js),t.Zs.forEach(((e,s)=>{this.Qs(s,e)}))}static wn(){return new Ct(2)}static gn(){return new Ct(3)}mn(t){switch(t.an){case 0:this.rn();break;case 1:this.ln(t.Wt);break;case 2:this.dn(t.Wt);break;case 3:this.fn(t.Wt);break;case 4:this.cn();break;case 5:this._n(t.Wt);break;case 6:this.un()}}un(){const t=this.Gs.findIndex((e=>e.an===5));t!==-1&&this.Gs.splice(t,1)}}class Ac{formatTickmarks(t){return t.map((e=>this.format(e)))}}const fl=".";function Be(i,t){if(!os(i))return"n/a";if(!Qs(t))throw new TypeError("invalid length");if(t<0||t>16)throw new TypeError("invalid length");return t===0?i.toString():("0000000000000000"+i.toString()).slice(-t)}class vo extends Ac{constructor(t,e){if(super(),e||(e=1),os(t)&&Qs(t)||(t=100),t<0)throw new TypeError("invalid base");this.Yi=t,this.Mn=e,this.bn()}format(t){const e=t<0?"−":"";return t=Math.abs(t),e+this.Sn(t)}bn(){if(this.xn=0,this.Yi>0&&this.Mn>0){let t=this.Yi;for(;t>1;)t/=10,this.xn++}}Sn(t){const e=this.Yi/this.Mn;let s=Math.floor(t),r="";const o=this.xn!==void 0?this.xn:NaN;if(e>1){let n=+(Math.round(t*e)-s*e).toFixed(this.xn);n>=e&&(n-=e,s+=1),r=fl+Be(+n.toFixed(this.xn)*this.Mn,o)}else s=Math.round(s*e)/e,o>0&&(r=fl+Be(0,o));return s.toFixed(0)+r}}class Tc extends vo{constructor(t=100){super(t)}format(t){return`${super.format(t)}%`}}class kb extends Ac{constructor(t){super(),this.Cn=t}format(t){let e="";return t<0&&(e="-",t=-t),t<995?e+this.Pn(t):t<999995?e+this.Pn(t/1e3)+"K":t<999999995?(t=1e3*Math.round(t/1e3),e+this.Pn(t/1e6)+"M"):(t=1e6*Math.round(t/1e6),e+this.Pn(t/1e9)+"B")}Pn(t){let e;const s=Math.pow(10,this.Cn);return e=(t=Math.round(t*s)/s)>=1e-15&&t<1?t.toFixed(this.Cn).replace(/\.?0+$/,""):String(t),e.replace(/(\.[1-9]*)0+$/,((r,o)=>o))}}const Cb=/[2-9]/g;class Kr{constructor(t=50){this.yn=0,this.kn=1,this.Tn=1,this.Rn={},this.Dn=new Map,this.Vn=t}Bn(){this.yn=0,this.Dn.clear(),this.kn=1,this.Tn=1,this.Rn={}}Vi(t,e,s){return this.In(t,e,s).width}Di(t,e,s){const r=this.In(t,e,s);return((r.actualBoundingBoxAscent||0)-(r.actualBoundingBoxDescent||0))/2}In(t,e,s){const r=s||Cb,o=String(e).replace(r,"0");if(this.Dn.has(o))return qt(this.Dn.get(o)).En;if(this.yn===this.Vn){const a=this.Rn[this.Tn];delete this.Rn[this.Tn],this.Dn.delete(a),this.Tn++,this.yn--}t.save(),t.textBaseline="middle";const n=t.measureText(o);return t.restore(),n.width===0&&e.length||(this.Dn.set(o,{En:n,An:this.kn}),this.Rn[this.kn]=o,this.yn++,this.kn++),n}}class Sb{constructor(t){this.zn=null,this.M=null,this.Ln="right",this.On=t}Nn(t,e,s){this.zn=t,this.M=e,this.Ln=s}nt(t){this.M!==null&&this.zn!==null&&this.zn.nt(t,this.M,this.On,this.Ln)}}class Oc{constructor(t,e,s){this.Fn=t,this.On=new Kr(50),this.Wn=e,this.O=s,this.F=-1,this.Gt=new Sb(this.On)}Tt(){const t=this.O.Hn(this.Wn);if(t===null)return null;const e=t.Un(this.Wn)?t.$n():this.Wn.Ft();if(e===null)return null;const s=t.qn(e);if(s==="overlay")return null;const r=this.O.Yn();return r.P!==this.F&&(this.F=r.P,this.On.Bn()),this.Gt.Nn(this.Fn.$i(),r,s),this.Gt}}class $b extends ys{constructor(){super(...arguments),this.Yt=null}ht(t){this.Yt=t}jn(t,e){if(!this.Yt?.Vt)return null;const{ut:s,ct:r,Kn:o}=this.Yt;return e>=s-r-7&&e<=s+r+7?{Xn:this.Yt,Kn:o}:null}et({context:t,bitmapSize:e,horizontalPixelRatio:s,verticalPixelRatio:r}){if(this.Yt===null||this.Yt.Vt===!1)return;const o=Math.round(this.Yt.ut*r);o<0||o>e.height||(t.lineCap="butt",t.strokeStyle=this.Yt.R,t.lineWidth=Math.floor(this.Yt.ct*s),$i(t,this.Yt.Xt),$c(t,o,0,e.width))}}class ra{constructor(t){this.Zn={ut:0,R:"rgba(0, 0, 0, 0)",ct:1,Xt:0,Vt:!1},this.Gn=new $b,this.xt=!0,this.Jn=t,this.Qn=t.Qt(),this.Gn.ht(this.Zn)}yt(){this.xt=!0}Tt(){return this.Jn.Vt()?(this.xt&&(this.te(),this.xt=!1),this.Gn):null}}class zb extends ra{constructor(t){super(t)}te(){this.Zn.Vt=!1;const t=this.Jn.Ft(),e=t.ie().ie;if(e!==2&&e!==3)return;const s=this.Jn.N();if(!s.baseLineVisible||!this.Jn.Vt())return;const r=this.Jn.zt();r!==null&&(this.Zn.Vt=!0,this.Zn.ut=t.Nt(r.Wt,r.Wt),this.Zn.R=s.baseLineColor,this.Zn.ct=s.baseLineWidth,this.Zn.Xt=s.baseLineStyle)}}class Eb extends ys{constructor(){super(...arguments),this.Yt=null}ht(t){this.Yt=t}se(){return this.Yt}et({context:t,horizontalPixelRatio:e,verticalPixelRatio:s}){const r=this.Yt;if(r===null)return;const o=Math.max(1,Math.floor(e)),n=o%2/2,a=Math.round(r.ne.x*e)+n,l=r.ne.y*s;t.fillStyle=r.ee,t.beginPath();const h=Math.max(2,1.5*r.re)*e;t.arc(a,l,h,0,2*Math.PI,!1),t.fill(),t.fillStyle=r.he,t.beginPath(),t.arc(a,l,r.ft*e,0,2*Math.PI,!1),t.fill(),t.lineWidth=o,t.strokeStyle=r.ae,t.beginPath(),t.arc(a,l,r.ft*e+o/2,0,2*Math.PI,!1),t.stroke()}}const Pb=[{le:0,oe:.25,_e:4,ue:10,ce:.25,de:0,fe:.4,pe:.8},{le:.25,oe:.525,_e:10,ue:14,ce:0,de:0,fe:.8,pe:0},{le:.525,oe:1,_e:14,ue:14,ce:0,de:0,fe:0,pe:0}];class Mb{constructor(t){this.Gt=new Eb,this.xt=!0,this.ve=!0,this.me=performance.now(),this.we=this.me-1,this.ge=t}Me(){this.we=this.me-1,this.yt()}be(){if(this.yt(),this.ge.N().lastPriceAnimation===2){const t=performance.now(),e=this.we-t;if(e>0)return void(e<650&&(this.we+=2600));this.me=t,this.we=t+2600}}yt(){this.xt=!0}Se(){this.ve=!0}Vt(){return this.ge.N().lastPriceAnimation!==0}xe(){switch(this.ge.N().lastPriceAnimation){case 0:return!1;case 1:return!0;case 2:return performance.now()<=this.we}}Tt(){return this.xt?(this.Rt(),this.xt=!1,this.ve=!1):this.ve&&(this.Ce(),this.ve=!1),this.Gt}Rt(){this.Gt.ht(null);const t=this.ge.Qt().Et(),e=t.Pe(),s=this.ge.zt();if(e===null||s===null)return;const r=this.ge.ye(!0);if(r.ke||!e.Te(r.Re))return;const o={x:t.qt(r.Re),y:this.ge.Ft().Nt(r.gt,s.Wt)},n=r.R,a=this.ge.N().lineWidth,l=this.De(this.Ve(),n);this.Gt.ht({ee:n,re:a,he:l.he,ae:l.ae,ft:l.ft,ne:o})}Ce(){const t=this.Gt.se();if(t!==null){const e=this.De(this.Ve(),t.ee);t.he=e.he,t.ae=e.ae,t.ft=e.ft}}Ve(){return this.xe()?performance.now()-this.me:2599}Be(t,e,s,r){const o=s+(r-s)*e;return this.ge.Qt().Xi().j(t,o)}De(t,e){const s=t%2600/2600;let r;for(const h of Pb)if(s>=h.le&&s<=h.oe){r=h;break}St(r!==void 0,"Last price animation internal logic error");const o=(s-r.le)/(r.oe-r.le);return{he:this.Be(e,o,r.ce,r.de),ae:this.Be(e,o,r.fe,r.pe),ft:(n=o,a=r._e,l=r.ue,a+(l-a)*n)};var n,a,l}}class Ab extends ra{constructor(t){super(t)}te(){const t=this.Zn;t.Vt=!1;const e=this.Jn.N();if(!e.priceLineVisible||!this.Jn.Vt())return;const s=this.Jn.ye(e.priceLineSource===0);s.ke||(t.Vt=!0,t.ut=s.Ii,t.R=this.Jn.Ie(s.R),t.ct=e.priceLineWidth,t.Xt=e.priceLineStyle)}}class Tb extends mo{constructor(t){super(),this.Jt=t}qi(t,e,s){t.Vt=!1,e.Vt=!1;const r=this.Jt;if(!r.Vt())return;const o=r.N(),n=o.lastValueVisible,a=r.Ee()!=="",l=o.seriesLastValueMode===0,h=r.ye(!1);if(h.ke)return;n&&(t.ri=this.Ae(h,n,l),t.Vt=t.ri.length!==0),(a||l)&&(e.ri=this.ze(h,n,a,l),e.Vt=e.ri.length>0);const d=r.Ie(h.R),u=this.Jt.Qt().Xi().X(d);s.Z=u.Z,s.Ii=h.Ii,e.Ht=r.Qt().Ut(h.Ii/r.Ft().$t()),t.Ht=d,t.R=u.G,e.R=u.G}ze(t,e,s,r){let o="";const n=this.Jt.Ee();return s&&n.length!==0&&(o+=`${n} `),e&&r&&(o+=this.Jt.Ft().Le()?t.Oe:t.Ne),o.trim()}Ae(t,e,s){return e?s?this.Jt.Ft().Le()?t.Ne:t.Oe:t.ri:""}}function ml(i,t,e,s){const r=Number.isFinite(t),o=Number.isFinite(e);return r&&o?i(t,e):r||o?r?t:e:s}class Vt{constructor(t,e){this.Fe=t,this.We=e}He(t){return t!==null&&this.Fe===t.Fe&&this.We===t.We}Ue(){return new Vt(this.Fe,this.We)}$e(){return this.Fe}qe(){return this.We}Ye(){return this.We-this.Fe}Ki(){return this.We===this.Fe||Number.isNaN(this.We)||Number.isNaN(this.Fe)}vn(t){return t===null?this:new Vt(ml(Math.min,this.$e(),t.$e(),-1/0),ml(Math.max,this.qe(),t.qe(),1/0))}je(t){if(!os(t)||this.We-this.Fe===0)return;const e=.5*(this.We+this.Fe);let s=this.We-e,r=this.Fe-e;s*=t,r*=t,this.We=e+s,this.Fe=e+r}Ke(t){os(t)&&(this.We+=t,this.Fe+=t)}Xe(){return{minValue:this.Fe,maxValue:this.We}}static Ze(t){return t===null?null:new Vt(t.minValue,t.maxValue)}}class Qr{constructor(t,e){this.Ge=t,this.Je=e||null}Qe(){return this.Ge}tr(){return this.Je}Xe(){return{priceRange:this.Ge===null?null:this.Ge.Xe(),margins:this.Je||void 0}}static Ze(t){return t===null?null:new Qr(Vt.Ze(t.priceRange),t.margins)}}class Ob extends ra{constructor(t,e){super(t),this.ir=e}te(){const t=this.Zn;t.Vt=!1;const e=this.ir.N();if(!this.Jn.Vt()||!e.lineVisible)return;const s=this.ir.sr();s!==null&&(t.Vt=!0,t.ut=s,t.R=e.color,t.ct=e.lineWidth,t.Xt=e.lineStyle,t.Kn=this.ir.N().id)}}class Rb extends mo{constructor(t,e){super(),this.ge=t,this.ir=e}qi(t,e,s){t.Vt=!1,e.Vt=!1;const r=this.ir.N(),o=r.axisLabelVisible,n=r.title!=="",a=this.ge;if(!o||!a.Vt())return;const l=this.ir.sr();if(l===null)return;n&&(e.ri=r.title,e.Vt=!0),e.Ht=a.Qt().Ut(l/a.Ft().$t()),t.ri=this.nr(r.price),t.Vt=!0;const h=this.ge.Qt().Xi().X(r.axisLabelColor||r.color);s.Z=h.Z;const d=r.axisLabelTextColor||h.G;t.R=d,e.R=d,s.Ii=l}nr(t){const e=this.ge.zt();return e===null?"":this.ge.Ft().Zi(t,e.Wt)}}class Ib{constructor(t,e){this.ge=t,this.Ps=e,this.er=new Ob(t,this),this.Fn=new Rb(t,this),this.rr=new Oc(this.Fn,t,t.Qt())}hr(t){ee(this.Ps,t),this.yt(),this.ge.Qt().ar()}N(){return this.Ps}lr(){return this.er}_r(){return this.rr}ur(){return this.Fn}yt(){this.er.yt(),this.Fn.yt()}sr(){const t=this.ge,e=t.Ft();if(t.Qt().Et().Ki()||e.Ki())return null;const s=t.zt();return s===null?null:e.Nt(this.Ps.price,s.Wt)}}class Lb extends Mc{constructor(t){super(),this.ts=t}Qt(){return this.ts}}const Db={Bar:(i,t,e,s)=>{const r=t.upColor,o=t.downColor,n=S(i(e,s)),a=Je(n.Wt[0])<=Je(n.Wt[3]);return{cr:n.R??(a?r:o)}},Candlestick:(i,t,e,s)=>{const r=t.upColor,o=t.downColor,n=t.borderUpColor,a=t.borderDownColor,l=t.wickUpColor,h=t.wickDownColor,d=S(i(e,s)),u=Je(d.Wt[0])<=Je(d.Wt[3]);return{cr:d.R??(u?r:o),dr:d.Ht??(u?n:a),pr:d.vr??(u?l:h)}},Custom:(i,t,e,s)=>({cr:S(i(e,s)).R??t.color}),Area:(i,t,e,s)=>{const r=S(i(e,s));return{cr:r.vt??t.lineColor,vt:r.vt??t.lineColor,mr:r.mr??t.topColor,wr:r.wr??t.bottomColor}},Baseline:(i,t,e,s)=>{const r=S(i(e,s));return{cr:r.Wt[3]>=t.baseValue.price?t.topLineColor:t.bottomLineColor,gr:r.gr??t.topLineColor,Mr:r.Mr??t.bottomLineColor,br:r.br??t.topFillColor1,Sr:r.Sr??t.topFillColor2,Cr:r.Cr??t.bottomFillColor1,Pr:r.Pr??t.bottomFillColor2}},Line:(i,t,e,s)=>{const r=S(i(e,s));return{cr:r.R??t.color,vt:r.R??t.color}},Histogram:(i,t,e,s)=>({cr:S(i(e,s)).R??t.color})};class Vb{constructor(t){this.yr=(e,s)=>s!==void 0?s.Wt:this.ge.Xs().kr(e),this.ge=t,this.Tr=Db[t.Rr()]}Dr(t,e){return this.Tr(this.yr,this.ge.N(),t,e)}}function Rc(i,t,e,s,r=0,o=t.length){let n=o-r;for(;0<n;){const a=n>>1,l=r+a;s(t[l],e)===i?(r=l+1,n-=a+1):n=a}return r}const ns=Rc.bind(null,!0),Ic=Rc.bind(null,!1);var gl;(function(i){i[i.NearestLeft=-1]="NearestLeft",i[i.None=0]="None",i[i.NearestRight=1]="NearestRight"})(gl||(gl={}));const Ke=30;class Fb{constructor(){this.Vr=[],this.Br=new Map,this.Ir=new Map,this.Er=[]}Ar(){return this.zr()>0?this.Vr[this.Vr.length-1]:null}Lr(){return this.zr()>0?this.Or(0):null}Ks(){return this.zr()>0?this.Or(this.Vr.length-1):null}zr(){return this.Vr.length}Ki(){return this.zr()===0}Te(t){return this.Nr(t,0)!==null}kr(t){return this.Fr(t)}Fr(t,e=0){const s=this.Nr(t,e);return s===null?null:{...this.Wr(s),Re:this.Or(s)}}Hr(){return this.Vr}Ur(t,e,s){if(this.Ki())return null;let r=null;for(const o of s)r=kr(r,this.$r(t,e,o));return r}ht(t){this.Ir.clear(),this.Br.clear(),this.Vr=t,this.Er=t.map((e=>e.Re))}qr(){return this.Er}Or(t){return this.Vr[t].Re}Wr(t){return this.Vr[t]}Nr(t,e){const s=this.Yr(t);if(s===null&&e!==0)switch(e){case-1:return this.jr(t);case 1:return this.Kr(t);default:throw new TypeError("Unknown search mode")}return s}jr(t){let e=this.Xr(t);return e>0&&(e-=1),e!==this.Vr.length&&this.Or(e)<t?e:null}Kr(t){const e=this.Zr(t);return e!==this.Vr.length&&t<this.Or(e)?e:null}Yr(t){const e=this.Xr(t);return e===this.Vr.length||t<this.Vr[e].Re?null:e}Xr(t){return ns(this.Vr,t,((e,s)=>e.Re<s))}Zr(t){return Ic(this.Vr,t,((e,s)=>e.Re>s))}Gr(t,e,s){let r=null;for(let o=t;o<e;o++){const n=this.Vr[o].Wt[s];Number.isNaN(n)||(r===null?r={Jr:n,Qr:n}:(n<r.Jr&&(r.Jr=n),n>r.Qr&&(r.Qr=n)))}return r}$r(t,e,s){if(this.Ki())return null;let r=null;const o=S(this.Lr()),n=S(this.Ks()),a=Math.max(t,o),l=Math.min(e,n),h=Math.ceil(a/Ke)*Ke,d=Math.max(h,Math.floor(l/Ke)*Ke);{const p=this.Xr(a),m=this.Zr(Math.min(l,h,e));r=kr(r,this.Gr(p,m,s))}let u=this.Br.get(s);u===void 0&&(u=new Map,this.Br.set(s,u));for(let p=Math.max(h+1,a);p<d;p+=Ke){const m=Math.floor(p/Ke);let g=u.get(m);if(g===void 0){const v=this.Xr(m*Ke),b=this.Zr((m+1)*Ke-1);g=this.Gr(v,b,s),u.set(m,g)}r=kr(r,g)}{const p=this.Xr(d),m=this.Zr(l);r=kr(r,this.Gr(p,m,s))}return r}}function kr(i,t){return i===null?t:t===null?i:{Jr:Math.min(i.Jr,t.Jr),Qr:Math.max(i.Qr,t.Qr)}}const Xr={setLineStyle:$i};class Nb{constructor(t){this.th=t}nt(t,e,s){this.th.draw(t,Xr)}ih(t,e,s){this.th.drawBackground?.(t,Xr)}}class Bb{constructor(t){this.Dn=null,this.sh=t}Tt(){const t=this.sh.renderer();if(t===null)return null;if(this.Dn?.nh===t)return this.Dn.eh;const e=new Nb(t);return this.Dn={nh:t,eh:e},e}rh(){return this.sh.zOrder?.()??"normal"}}class Lc{constructor(t){this.hh=null,this.ah=t}oh(){return this.ah}Ns(){this.ah.updateAllViews?.()}Fs(){const t=this.ah.paneViews?.()??[];if(this.hh?.nh===t)return this.hh.eh;const e=t.map((s=>new Bb(s)));return this.hh={nh:t,eh:e},e}jn(t,e){return this.ah.hitTest?.(t,e)??null}}let Hb=class extends Lc{us(){return[]}};class Ub{constructor(t){this.th=t}nt(t,e,s){this.th.draw(t,Xr)}ih(t,e,s){this.th.drawBackground?.(t,Xr)}}class vl{constructor(t){this.Dn=null,this.sh=t}Tt(){const t=this.sh.renderer();if(t===null)return null;if(this.Dn?.nh===t)return this.Dn.eh;const e=new Ub(t);return this.Dn={nh:t,eh:e},e}rh(){return this.sh.zOrder?.()??"normal"}}function Dc(i){return{ri:i.text(),Ii:i.coordinate(),Bi:i.fixedCoordinate?.(),R:i.textColor(),Z:i.backColor(),Vt:i.visible?.()??!0,pi:i.tickVisible?.()??!0}}class Wb{constructor(t,e){this.Gt=new Pc,this._h=t,this.uh=e}Tt(){return this.Gt.ht({Qi:this.uh.Qi(),...Dc(this._h)}),this.Gt}}class Yb extends mo{constructor(t,e){super(),this._h=t,this.Yi=e}qi(t,e,s){const r=Dc(this._h);s.Z=r.Z,t.R=r.R;const o=2/12*this.Yi.P();s.Ti=o,s.Ri=o,s.Ii=r.Ii,s.Bi=r.Bi,t.ri=r.ri,t.Vt=r.Vt,t.pi=r.pi}}class qb extends Lc{constructor(t,e){super(t),this.dh=null,this.fh=null,this.ph=null,this.mh=null,this.ge=e}cs(){const t=this.ah.timeAxisViews?.()??[];if(this.dh?.nh===t)return this.dh.eh;const e=this.ge.Qt().Et(),s=t.map((r=>new Wb(r,e)));return this.dh={nh:t,eh:s},s}Ws(){const t=this.ah.priceAxisViews?.()??[];if(this.fh?.nh===t)return this.fh.eh;const e=this.ge.Ft(),s=t.map((r=>new Yb(r,e)));return this.fh={nh:t,eh:s},s}wh(){const t=this.ah.priceAxisPaneViews?.()??[];if(this.ph?.nh===t)return this.ph.eh;const e=t.map((s=>new vl(s)));return this.ph={nh:t,eh:e},e}gh(){const t=this.ah.timeAxisPaneViews?.()??[];if(this.mh?.nh===t)return this.mh.eh;const e=t.map((s=>new vl(s)));return this.mh={nh:t,eh:e},e}Mh(t,e){return this.ah.autoscaleInfo?.(t,e)??null}}function Lo(i,t,e,s){i.forEach((r=>{t(r).forEach((o=>{o.rh()===e&&s.push(o)}))}))}function Do(i){return i.Fs()}function jb(i){return i.wh()}function Gb(i){return i.gh()}const Kb=["Area","Line","Baseline"];class bo extends Lb{constructor(t,e,s,r,o){super(t),this.Yt=new Fb,this.er=new Ab(this),this.bh=[],this.Sh=new zb(this),this.xh=null,this.Ch=null,this.Ph=null,this.yh=[],this.Ps=s,this.kh=e;const n=new Tb(this);this.vs=[n],this.rr=new Oc(n,this,t),Kb.includes(this.kh)&&(this.xh=new Mb(this)),this.Th(),this.sh=r(this,this.Qt(),o)}m(){this.Ph!==null&&clearTimeout(this.Ph)}Ie(t){return this.Ps.priceLineColor||t}ye(t){const e={ke:!0},s=this.Ft();if(this.Qt().Et().Ki()||s.Ki()||this.Yt.Ki())return e;const r=this.Qt().Et().Pe(),o=this.zt();if(r===null||o===null)return e;let n,a;if(t){const u=this.Yt.Ar();if(u===null)return e;n=u,a=u.Re}else{const u=this.Yt.Fr(r.bi(),-1);if(u===null||(n=this.Yt.kr(u.Re),n===null))return e;a=u.Re}const l=n.Wt[3],h=this.Rh().Dr(a,{Wt:n}),d=s.Nt(l,o.Wt);return{ke:!1,gt:l,ri:s.Zi(l,o.Wt),Oe:s.Dh(l),Ne:s.Vh(l,o.Wt),R:h.cr,Ii:d,Re:a}}Rh(){return this.Ch!==null||(this.Ch=new Vb(this)),this.Ch}N(){return this.Ps}hr(t){const e=t.priceScaleId;e!==void 0&&e!==this.Ps.priceScaleId&&this.Qt().Bh(this,e),ee(this.Ps,t),t.priceFormat!==void 0&&(this.Th(),this.Qt().Ih()),this.Qt().Eh(this),this.Qt().Ah(),this.sh.yt("options")}ht(t,e){this.Yt.ht(t),this.sh.yt("data"),this.xh!==null&&(e&&e.zh?this.xh.be():t.length===0&&this.xh.Me());const s=this.Qt().Hn(this);this.Qt().Lh(s),this.Qt().Eh(this),this.Qt().Ah(),this.Qt().ar()}Oh(t){const e=new Ib(this,t);return this.bh.push(e),this.Qt().Eh(this),e}Nh(t){const e=this.bh.indexOf(t);e!==-1&&this.bh.splice(e,1),this.Qt().Eh(this)}Fh(){return this.bh}Rr(){return this.kh}zt(){const t=this.Wh();return t===null?null:{Wt:t.Wt[3],Hh:t.wt}}Wh(){const t=this.Qt().Et().Pe();if(t===null)return null;const e=t.Uh();return this.Yt.Fr(e,1)}Xs(){return this.Yt}$h(t){const e=this.Yt.kr(t);return e===null?null:this.kh==="Bar"||this.kh==="Candlestick"||this.kh==="Custom"?{qh:e.Wt[0],Yh:e.Wt[1],jh:e.Wt[2],Kh:e.Wt[3]}:e.Wt[3]}Xh(t){const e=[];Lo(this.yh,Do,"top",e);const s=this.xh;return s!==null&&s.Vt()&&(this.Ph===null&&s.xe()&&(this.Ph=setTimeout((()=>{this.Ph=null,this.Qt().Zh()}),0)),s.Se(),e.unshift(s)),e}Fs(){const t=[];this.Gh()||t.push(this.Sh),t.push(this.sh,this.er);const e=this.bh.map((s=>s.lr()));return t.push(...e),Lo(this.yh,Do,"normal",t),t}Jh(){return this.Qh(Do,"bottom")}ta(t){return this.Qh(jb,t)}ia(t){return this.Qh(Gb,t)}sa(t,e){return this.yh.map((s=>s.jn(t,e))).filter((s=>s!==null))}us(){return[this.rr,...this.bh.map((t=>t._r()))]}Ws(t,e){if(e!==this.es&&!this.Gh())return[];const s=[...this.vs];for(const r of this.bh)s.push(r.ur());return this.yh.forEach((r=>{s.push(...r.Ws())})),s}cs(){const t=[];return this.yh.forEach((e=>{t.push(...e.cs())})),t}Mh(t,e){if(this.Ps.autoscaleInfoProvider!==void 0){const s=this.Ps.autoscaleInfoProvider((()=>{const r=this.na(t,e);return r===null?null:r.Xe()}));return Qr.Ze(s)}return this.na(t,e)}nh(){const t=this.Ps.priceFormat;return t.base??1/t.minMove}ea(){return this.ra}Ns(){this.sh.yt();for(const t of this.vs)t.yt();for(const t of this.bh)t.yt();this.er.yt(),this.Sh.yt(),this.xh?.yt(),this.yh.forEach((t=>t.Ns()))}Ft(){return S(super.Ft())}At(t){if(!((this.kh==="Line"||this.kh==="Area"||this.kh==="Baseline")&&this.Ps.crosshairMarkerVisible))return null;const e=this.Yt.kr(t);return e===null?null:{gt:e.Wt[3],ft:this.ha(),Ht:this.aa(),Ot:this.la(),Lt:this.oa(t)}}Ee(){return this.Ps.title}Vt(){return this.Ps.visible}_a(t){this.yh.push(new qb(t,this))}ua(t){this.yh=this.yh.filter((e=>e.oh()!==t))}ca(){if(this.kh==="Custom")return t=>this.sh.da(t)}fa(){if(this.kh==="Custom")return t=>this.sh.pa(t)}va(){return this.Yt.qr()}Gh(){return!go(this.Ft().ma())}na(t,e){if(!Qs(t)||!Qs(e)||this.Yt.Ki())return null;const s=this.kh==="Line"||this.kh==="Area"||this.kh==="Baseline"||this.kh==="Histogram"?[3]:[2,1],r=this.Yt.Ur(t,e,s);let o=r!==null?new Vt(r.Jr,r.Qr):null,n=null;if(this.Rr()==="Histogram"){const a=this.Ps.base,l=new Vt(a,a);o=o!==null?o.vn(l):l}return this.yh.forEach((a=>{const l=a.Mh(t,e);if(l?.priceRange){const h=new Vt(l.priceRange.minValue,l.priceRange.maxValue);o=o!==null?o.vn(h):h}l?.margins&&(n=l.margins)})),new Qr(o,n)}ha(){switch(this.kh){case"Line":case"Area":case"Baseline":return this.Ps.crosshairMarkerRadius}return 0}aa(){switch(this.kh){case"Line":case"Area":case"Baseline":{const t=this.Ps.crosshairMarkerBorderColor;if(t.length!==0)return t}}return null}la(){switch(this.kh){case"Line":case"Area":case"Baseline":return this.Ps.crosshairMarkerBorderWidth}return 0}oa(t){switch(this.kh){case"Line":case"Area":case"Baseline":{const e=this.Ps.crosshairMarkerBackgroundColor;if(e.length!==0)return e}}return this.Rh().Dr(t).cr}Th(){switch(this.Ps.priceFormat.type){case"custom":{const t=this.Ps.priceFormat.formatter;this.ra={format:t,formatTickmarks:this.Ps.priceFormat.tickmarksFormatter??(e=>e.map(t))};break}case"volume":this.ra=new kb(this.Ps.priceFormat.precision);break;case"percent":this.ra=new Tc(this.Ps.priceFormat.precision);break;default:{const t=Math.pow(10,this.Ps.priceFormat.precision);this.ra=new vo(t,this.Ps.priceFormat.minMove*t)}}this.es!==null&&this.es.wa()}Qh(t,e){const s=[];return Lo(this.yh,t,e,s),s}}const Qb=[3],Xb=[0,1,2,3];class Jb{constructor(t){this.Ps=t}ga(t,e,s){let r=t;if(this.Ps.mode===0)return r;const o=s.ks(),n=o.zt();if(n===null)return r;const a=o.Nt(t,n),l=s.Ma().filter((d=>d instanceof bo)).reduce(((d,u)=>{if(s.Un(u)||!u.Vt())return d;const p=u.Ft(),m=u.Xs();if(p.Ki()||!m.Te(e))return d;const g=m.kr(e);if(g===null)return d;const v=Je(u.zt()),b=this.Ps.mode===3?Xb:Qb;return d.concat(b.map((x=>p.Nt(g.Wt[x],v.Wt))))}),[]);if(l.length===0)return r;l.sort(((d,u)=>Math.abs(d-a)-Math.abs(u-a)));const h=l[0];return r=o.Ts(h,n),r}}function Ns(i,t,e){return Math.min(Math.max(i,t),e)}function Cr(i,t,e){return t-i<=e}class Zb extends ys{constructor(){super(...arguments),this.Yt=null}ht(t){this.Yt=t}et({context:t,bitmapSize:e,horizontalPixelRatio:s,verticalPixelRatio:r}){if(this.Yt===null)return;const o=Math.max(1,Math.floor(s));t.lineWidth=o,(function(n,a){n.save(),n.lineWidth%2&&n.translate(.5,.5),a(),n.restore()})(t,(()=>{const n=S(this.Yt);if(n.ba){t.strokeStyle=n.Sa,$i(t,n.xa),t.beginPath();for(const a of n.Ca){const l=Math.round(a.Pa*s);t.moveTo(l,-o),t.lineTo(l,e.height+o)}t.stroke()}if(n.ya){t.strokeStyle=n.ka,$i(t,n.Ta),t.beginPath();for(const a of n.Ra){const l=Math.round(a.Pa*r);t.moveTo(-o,l),t.lineTo(e.width+o,l)}t.stroke()}}))}}class t0{constructor(t){this.Gt=new Zb,this.xt=!0,this.Pt=t}yt(){this.xt=!0}Tt(){if(this.xt){const t=this.Pt.Qt().N().grid,e={ya:t.horzLines.visible,ba:t.vertLines.visible,ka:t.horzLines.color,Sa:t.vertLines.color,Ta:t.horzLines.style,xa:t.vertLines.style,Ra:this.Pt.ks().Da(),Ca:(this.Pt.Qt().Et().Da()||[]).map((s=>({Pa:s.coord})))};this.Gt.ht(e),this.xt=!1}return this.Gt}}class e0{constructor(t){this.sh=new t0(t)}lr(){return this.sh}}const Vo={Va:4,Ba:1e-4};function Yi(i,t){const e=100*(i-t)/t;return t<0?-e:e}function i0(i,t){const e=Yi(i.$e(),t),s=Yi(i.qe(),t);return new Vt(e,s)}function Bs(i,t){const e=100*(i-t)/t+100;return t<0?-e:e}function s0(i,t){const e=Bs(i.$e(),t),s=Bs(i.qe(),t);return new Vt(e,s)}function Jr(i,t){const e=Math.abs(i);if(e<1e-15)return 0;const s=Math.log10(e+t.Ba)+t.Va;return i<0?-s:s}function Hs(i,t){const e=Math.abs(i);if(e<1e-15)return 0;const s=Math.pow(10,e-t.Va)-t.Ba;return i<0?-s:s}function Es(i,t){if(i===null)return null;const e=Jr(i.$e(),t),s=Jr(i.qe(),t);return new Vt(e,s)}function qi(i,t){if(i===null)return null;const e=Hs(i.$e(),t),s=Hs(i.qe(),t);return new Vt(e,s)}function Fo(i){if(i===null)return Vo;const t=Math.abs(i.qe()-i.$e());if(t>=1||t<1e-15)return Vo;const e=Math.ceil(Math.abs(Math.log10(t))),s=Vo.Va+e;return{Va:s,Ba:1/Math.pow(10,s)}}class No{constructor(t,e){if(this.Ia=t,this.Ea=e,(function(s){if(s<0)return!1;if(s>1e18)return!0;for(let r=s;r>1;r/=10)if(r%10!=0)return!1;return!0})(this.Ia))this.Aa=[2,2.5,2];else{this.Aa=[];for(let s=this.Ia;s!==1;){if(s%2==0)this.Aa.push(2),s/=2;else{if(s%5!=0)throw new Error("unexpected base");this.Aa.push(2,2.5),s/=5}if(this.Aa.length>100)throw new Error("something wrong with base")}}}za(t,e,s){const r=this.Ia===0?0:1/this.Ia;let o=Math.pow(10,Math.max(0,Math.ceil(Math.log10(t-e)))),n=0,a=this.Ea[0];for(;;){const u=Cr(o,r,1e-14)&&o>r+1e-14,p=Cr(o,s*a,1e-14),m=Cr(o,1,1e-14);if(!(u&&p&&m))break;o/=a,a=this.Ea[++n%this.Ea.length]}if(o<=r+1e-14&&(o=r),o=Math.max(1,o),this.Aa.length>0&&(l=o,h=1,d=1e-14,Math.abs(l-h)<d))for(n=0,a=this.Aa[0];Cr(o,s*a,1e-14)&&o>r+1e-14;)o/=a,a=this.Aa[++n%this.Aa.length];var l,h,d;return o}}class bl{constructor(t,e,s,r){this.La=[],this.Yi=t,this.Ia=e,this.Oa=s,this.Na=r}za(t,e){if(t<e)throw new Error("high < low");const s=this.Yi.$t(),r=(t-e)*this.Fa()/s,o=new No(this.Ia,[2,2.5,2]),n=new No(this.Ia,[2,2,2.5]),a=new No(this.Ia,[2.5,2,2]),l=[];return l.push(o.za(t,e,r),n.za(t,e,r),a.za(t,e,r)),(function(h){if(h.length<1)throw Error("array is empty");let d=h[0];for(let u=1;u<h.length;++u)h[u]<d&&(d=h[u]);return d})(l)}Wa(){const t=this.Yi,e=t.zt();if(e===null)return void(this.La=[]);const s=t.$t(),r=this.Oa(s-1,e),o=this.Oa(0,e),n=this.Yi.N().entireTextOnly?this.Ha()/2:0,a=n,l=s-1-n,h=Math.max(r,o),d=Math.min(r,o);if(h===d)return void(this.La=[]);const u=this.za(h,d);if(this.Ua(e,u,h,d,a,l),t.$a()&&this.qa(u,d,h)){const g=this.Yi.Ya();this.ja(e,u,a,l,g,2*g)}const p=this.La.map((g=>g.Ka)),m=this.Yi.Xa(p);for(let g=0;g<this.La.length;g++)this.La[g].Za=m[g]}Da(){return this.La}Ha(){return this.Yi.P()}Fa(){return Math.ceil(2.5*this.Ha())}Ua(t,e,s,r,o,n){const a=this.La,l=this.Yi;let h=s%e;h+=h<0?e:0;const d=s>=r?1:-1;let u=null,p=0;for(let m=s-h;m>r;m-=e){const g=this.Na(m,t,!0);u!==null&&Math.abs(g-u)<this.Fa()||g<o||g>n||(p<a.length?(a[p].Pa=g,a[p].Za=l.Ga(m),a[p].Ka=m):a.push({Pa:g,Za:l.Ga(m),Ka:m}),p++,u=g,l.Ja()&&(e=this.za(m*d,r)))}a.length=p}ja(t,e,s,r,o,n){const a=this.La,l=this.Qa(t,s,o,n),h=this.Qa(t,r,-n,-o),d=this.Na(0,t,!0)-this.Na(e,t,!0);a.length>0&&a[0].Pa-l.Pa<d/2&&a.shift(),a.length>0&&h.Pa-a[a.length-1].Pa<d/2&&a.pop(),a.unshift(l),a.push(h)}Qa(t,e,s,r){const o=(s+r)/2,n=this.Oa(e+s,t),a=this.Oa(e+r,t),l=Math.min(n,a),h=Math.max(n,a),d=Math.max(.1,this.za(h,l)),u=this.Oa(e+o,t),p=u-u%d,m=this.Na(p,t,!0);return{Za:this.Yi.Ga(p),Pa:m,Ka:p}}qa(t,e,s){let r=Je(this.Yi.Qe());return this.Yi.Ja()&&(r=qi(r,this.Yi.tl())),r.$e()-e<t&&s-r.qe()<t}}function Vc(i){return i.slice().sort(((t,e)=>S(t.hs())-S(e.hs())))}var yl;(function(i){i[i.Normal=0]="Normal",i[i.Logarithmic=1]="Logarithmic",i[i.Percentage=2]="Percentage",i[i.IndexedTo100=3]="IndexedTo100"})(yl||(yl={}));const _l=new Tc,wl=new vo(100,1);class r0{constructor(t,e,s,r,o){this.il=0,this.sl=null,this.Ge=null,this.nl=null,this.el={rl:!1,hl:null},this.al=!1,this.ll=0,this.ol=0,this._l=new dt,this.ul=new dt,this.cl=[],this.dl=null,this.fl=null,this.pl=null,this.vl=null,this.ml=null,this.ra=wl,this.wl=Fo(null),this.gl=t,this.Ps=e,this.Ml=s,this.bl=r,this.Sl=o,this.xl=new bl(this,100,this.Cl.bind(this),this.Pl.bind(this))}ma(){return this.gl}N(){return this.Ps}hr(t){if(ee(this.Ps,t),this.wa(),t.mode!==void 0&&this.yl({ie:t.mode}),t.scaleMargins!==void 0){const e=qt(t.scaleMargins.top),s=qt(t.scaleMargins.bottom);if(e<0||e>1)throw new Error(`Invalid top margin - expect value between 0 and 1, given=${e}`);if(s<0||s>1)throw new Error(`Invalid bottom margin - expect value between 0 and 1, given=${s}`);if(e+s>1)throw new Error(`Invalid margins - sum of margins must be less than 1, given=${e+s}`);this.kl(),this.pl=null}}Tl(){return this.Ps.autoScale}Rl(){return this.al}Ja(){return this.Ps.mode===1}Le(){return this.Ps.mode===2}Dl(){return this.Ps.mode===3}tl(){return this.wl}ie(){return{sn:this.Ps.autoScale,Vl:this.Ps.invertScale,ie:this.Ps.mode}}yl(t){const e=this.ie();let s=null;t.sn!==void 0&&(this.Ps.autoScale=t.sn),t.ie!==void 0&&(this.Ps.mode=t.ie,t.ie!==2&&t.ie!==3||(this.Ps.autoScale=!0),this.el.rl=!1),e.ie===1&&t.ie!==e.ie&&((function(o,n){if(o===null)return!1;const a=Hs(o.$e(),n),l=Hs(o.qe(),n);return isFinite(a)&&isFinite(l)})(this.Ge,this.wl)?(s=qi(this.Ge,this.wl),s!==null&&this.Bl(s)):this.Ps.autoScale=!0),t.ie===1&&t.ie!==e.ie&&(s=Es(this.Ge,this.wl),s!==null&&this.Bl(s));const r=e.ie!==this.Ps.mode;r&&(e.ie===2||this.Le())&&this.wa(),r&&(e.ie===3||this.Dl())&&this.wa(),t.Vl!==void 0&&e.Vl!==t.Vl&&(this.Ps.invertScale=t.Vl,this.Il()),this.ul.p(e,this.ie())}El(){return this.ul}P(){return this.Ml.fontSize}$t(){return this.il}Al(t){this.il!==t&&(this.il=t,this.kl(),this.pl=null)}zl(){if(this.sl)return this.sl;const t=this.$t()-this.Ll()-this.Ol();return this.sl=t,t}Qe(){return this.Nl(),this.Ge}Bl(t,e){const s=this.Ge;(e||s===null&&t!==null||s!==null&&!s.He(t))&&(this.pl=null,this.Ge=t)}Fl(t){this.Bl(t),this.Wl(t!==null)}Ki(){return this.Nl(),this.il===0||!this.Ge||this.Ge.Ki()}Hl(t){return this.Vl()?t:this.$t()-1-t}Nt(t,e){return this.Le()?t=Yi(t,e):this.Dl()&&(t=Bs(t,e)),this.Pl(t,e)}Ul(t,e,s){this.Nl();const r=this.Ol(),o=S(this.Qe()),n=o.$e(),a=o.qe(),l=this.zl()-1,h=this.Vl(),d=l/(a-n),u=s===void 0?0:s.from,p=s===void 0?t.length:s.to,m=this.$l();for(let g=u;g<p;g++){const v=t[g],b=v.gt;if(isNaN(b))continue;let x=b;m!==null&&(x=m(v.gt,e));const y=r+d*(x-n),k=h?y:this.il-1-y;v.ut=k}}ql(t,e,s){this.Nl();const r=this.Ol(),o=S(this.Qe()),n=o.$e(),a=o.qe(),l=this.zl()-1,h=this.Vl(),d=l/(a-n),u=s===void 0?0:s.from,p=s===void 0?t.length:s.to,m=this.$l();for(let g=u;g<p;g++){const v=t[g];let b=v.qh,x=v.Yh,y=v.jh,k=v.Kh;m!==null&&(b=m(v.qh,e),x=m(v.Yh,e),y=m(v.jh,e),k=m(v.Kh,e));let _=r+d*(b-n),w=h?_:this.il-1-_;v.Yl=w,_=r+d*(x-n),w=h?_:this.il-1-_,v.jl=w,_=r+d*(y-n),w=h?_:this.il-1-_,v.Kl=w,_=r+d*(k-n),w=h?_:this.il-1-_,v.Xl=w}}Ts(t,e){const s=this.Cl(t,e);return this.Zl(s,e)}Zl(t,e){let s=t;return this.Le()?s=(function(r,o){return o<0&&(r=-r),r/100*o+o})(s,e):this.Dl()&&(s=(function(r,o){return r-=100,o<0&&(r=-r),r/100*o+o})(s,e)),s}Ma(){return this.cl}Dt(){return this.fl||(this.fl=Vc(this.cl)),this.fl}Gl(t){this.cl.indexOf(t)===-1&&(this.cl.push(t),this.wa(),this.Jl())}Ql(t){const e=this.cl.indexOf(t);if(e===-1)throw new Error("source is not attached to scale");this.cl.splice(e,1),this.cl.length===0&&(this.yl({sn:!0}),this.Bl(null)),this.wa(),this.Jl()}zt(){let t=null;for(const e of this.cl){const s=e.zt();s!==null&&(t===null||s.Hh<t.Hh)&&(t=s)}return t===null?null:t.Wt}Vl(){return this.Ps.invertScale}Da(){const t=this.zt()===null;if(this.pl!==null&&(t||this.pl.io===t))return this.pl.Da;this.xl.Wa();const e=this.xl.Da();return this.pl={Da:e,io:t},this._l.p(),e}so(){return this._l}no(t){this.Le()||this.Dl()||this.vl===null&&this.nl===null&&(this.Ki()||(this.vl=this.il-t,this.nl=S(this.Qe()).Ue()))}eo(t){if(this.Le()||this.Dl()||this.vl===null)return;this.yl({sn:!1}),(t=this.il-t)<0&&(t=0);let e=(this.vl+.2*(this.il-1))/(t+.2*(this.il-1));const s=S(this.nl).Ue();e=Math.max(e,.1),s.je(e),this.Bl(s)}ro(){this.Le()||this.Dl()||(this.vl=null,this.nl=null)}ho(t){this.Tl()||this.ml===null&&this.nl===null&&(this.Ki()||(this.ml=t,this.nl=S(this.Qe()).Ue()))}ao(t){if(this.Tl()||this.ml===null)return;const e=S(this.Qe()).Ye()/(this.zl()-1);let s=t-this.ml;this.Vl()&&(s*=-1);const r=s*e,o=S(this.nl).Ue();o.Ke(r),this.Bl(o,!0),this.pl=null}lo(){this.Tl()||this.ml!==null&&(this.ml=null,this.nl=null)}ea(){return this.ra||this.wa(),this.ra}Zi(t,e){switch(this.Ps.mode){case 2:return this.oo(Yi(t,e));case 3:return this.ea().format(Bs(t,e));default:return this.nr(t)}}Ga(t){switch(this.Ps.mode){case 2:return this.oo(t);case 3:return this.ea().format(t);default:return this.nr(t)}}Xa(t){switch(this.Ps.mode){case 2:return this._o(t);case 3:return this.ea().formatTickmarks(t);default:return this.uo(t)}}Dh(t){return this.nr(t,S(this.dl).ea())}Vh(t,e){return t=Yi(t,e),this.oo(t,_l)}co(){return this.cl}do(t){this.el={hl:t,rl:!1}}Ns(){this.cl.forEach((t=>t.Ns()))}$a(){return this.Ps.ensureEdgeTickMarksVisible&&this.Tl()}Ya(){return this.P()/2}wa(){this.pl=null;let t=1/0;this.dl=null;for(const s of this.cl)s.hs()<t&&(t=s.hs(),this.dl=s);let e=100;this.dl!==null&&(e=Math.round(this.dl.nh())),this.ra=wl,this.Le()?(this.ra=_l,e=100):this.Dl()?(this.ra=new vo(100,1),e=100):this.dl!==null&&(this.ra=this.dl.ea()),this.xl=new bl(this,e,this.Cl.bind(this),this.Pl.bind(this)),this.xl.Wa()}Jl(){this.fl=null}fo(){return this.dl===null||this.Le()||this.Dl()?1:1/this.dl.nh()}Xi(){return this.Sl}Wl(t){this.al=t}Ll(){return this.Vl()?this.Ps.scaleMargins.bottom*this.$t()+this.ol:this.Ps.scaleMargins.top*this.$t()+this.ll}Ol(){return this.Vl()?this.Ps.scaleMargins.top*this.$t()+this.ll:this.Ps.scaleMargins.bottom*this.$t()+this.ol}Nl(){this.el.rl||(this.el.rl=!0,this.po())}kl(){this.sl=null}Pl(t,e){if(this.Nl(),this.Ki())return 0;t=this.Ja()&&t?Jr(t,this.wl):t;const s=S(this.Qe()),r=this.Ol()+(this.zl()-1)*(t-s.$e())/s.Ye();return this.Hl(r)}Cl(t,e){if(this.Nl(),this.Ki())return 0;const s=this.Hl(t),r=S(this.Qe()),o=r.$e()+r.Ye()*((s-this.Ol())/(this.zl()-1));return this.Ja()?Hs(o,this.wl):o}Il(){this.pl=null,this.xl.Wa()}po(){if(this.Rl()&&!this.Tl())return;const t=this.el.hl;if(t===null)return;let e=null;const s=this.co();let r=0,o=0;for(const l of s){if(!l.Vt())continue;const h=l.zt();if(h===null)continue;const d=l.Mh(t.Uh(),t.bi());let u=d&&d.Qe();if(u!==null){switch(this.Ps.mode){case 1:u=Es(u,this.wl);break;case 2:u=i0(u,h.Wt);break;case 3:u=s0(u,h.Wt)}if(e=e===null?u:e.vn(S(u)),d!==null){const p=d.tr();p!==null&&(r=Math.max(r,p.above),o=Math.max(o,p.below))}}}if(this.$a()&&(r=Math.max(r,this.Ya()),o=Math.max(o,this.Ya())),r===this.ll&&o===this.ol||(this.ll=r,this.ol=o,this.pl=null,this.kl()),e!==null){if(e.$e()===e.qe()){const l=5*this.fo();this.Ja()&&(e=qi(e,this.wl)),e=new Vt(e.$e()-l,e.qe()+l),this.Ja()&&(e=Es(e,this.wl))}if(this.Ja()){const l=qi(e,this.wl),h=Fo(l);if(n=h,a=this.wl,n.Va!==a.Va||n.Ba!==a.Ba){const d=this.nl!==null?qi(this.nl,this.wl):null;this.wl=h,e=Es(l,h),d!==null&&(this.nl=Es(d,h))}}this.Bl(e)}else this.Ge===null&&(this.Bl(new Vt(-.5,.5)),this.wl=Fo(null));var n,a}$l(){return this.Le()?Yi:this.Dl()?Bs:this.Ja()?t=>Jr(t,this.wl):null}vo(t,e,s){return e===void 0?(s===void 0&&(s=this.ea()),s.format(t)):e(t)}mo(t,e,s){return e===void 0?(s===void 0&&(s=this.ea()),s.formatTickmarks(t)):e(t)}nr(t,e){return this.vo(t,this.bl.priceFormatter,e)}uo(t,e){const s=this.bl.priceFormatter;return this.mo(t,this.bl.tickmarksPriceFormatter??(s?r=>r.map(s):void 0),e)}oo(t,e){return this.vo(t,this.bl.percentageFormatter,e)}_o(t,e){const s=this.bl.percentageFormatter;return this.mo(t,this.bl.tickmarksPercentageFormatter??(s?r=>r.map(s):void 0),e)}}function xl(i){return i instanceof bo}class kl{constructor(t,e){this.cl=[],this.wo=new Map,this.il=0,this.Mo=0,this.bo=1,this.fl=null,this.So=!1,this.xo=new dt,this.yh=[],this.uh=t,this.ts=e,this.Co=new e0(this);const s=e.N();this.Po=this.yo("left",s.leftPriceScale),this.ko=this.yo("right",s.rightPriceScale),this.Po.El().i(this.To.bind(this,this.Po),this),this.ko.El().i(this.To.bind(this,this.ko),this),this.Ro(s)}Ro(t){if(t.leftPriceScale&&this.Po.hr(t.leftPriceScale),t.rightPriceScale&&this.ko.hr(t.rightPriceScale),t.localization&&(this.Po.wa(),this.ko.wa()),t.overlayPriceScales){const e=Array.from(this.wo.values());for(const s of e){const r=S(s[0].Ft());r.hr(t.overlayPriceScales),t.localization&&r.wa()}}}Do(t){switch(t){case"left":return this.Po;case"right":return this.ko}return this.wo.has(t)?qt(this.wo.get(t))[0].Ft():null}m(){this.Qt().Vo().u(this),this.Po.El().u(this),this.ko.El().u(this),this.cl.forEach((t=>{t.m&&t.m()})),this.yh=this.yh.filter((t=>{const e=t.oh();return e.detached&&e.detached(),!1})),this.xo.p()}Bo(){return this.bo}Io(t){this.bo=t}Qt(){return this.ts}Qi(){return this.Mo}$t(){return this.il}Eo(t){this.Mo=t,this.Ao()}Al(t){this.il=t,this.Po.Al(t),this.ko.Al(t),this.cl.forEach((e=>{if(this.Un(e)){const s=e.Ft();s!==null&&s.Al(t)}})),this.Ao()}zo(t){this.So=t}Lo(){return this.So}Oo(){return this.cl.filter(xl)}Ma(){return this.cl}Un(t){const e=t.Ft();return e===null||this.Po!==e&&this.ko!==e}Gl(t,e,s){this.No(t,e,s?t.hs():this.cl.length)}Ql(t,e){const s=this.cl.indexOf(t);St(s!==-1,"removeDataSource: invalid data source"),this.cl.splice(s,1),e||this.cl.forEach(((n,a)=>n.ls(a)));const r=S(t.Ft()).ma();if(this.wo.has(r)){const n=qt(this.wo.get(r)),a=n.indexOf(t);a!==-1&&(n.splice(a,1),n.length===0&&this.wo.delete(r))}const o=t.Ft();o&&o.Ma().indexOf(t)>=0&&(o.Ql(t),this.Fo(o)),this.fl=null}qn(t){return t===this.Po?"left":t===this.ko?"right":"overlay"}Wo(){return this.Po}Ho(){return this.ko}Uo(t,e){t.no(e)}$o(t,e){t.eo(e),this.Ao()}qo(t){t.ro()}Yo(t,e){t.ho(e)}jo(t,e){t.ao(e),this.Ao()}Ko(t){t.lo()}Ao(){this.cl.forEach((t=>{t.Ns()}))}ks(){let t=null;return this.ts.N().rightPriceScale.visible&&this.ko.Ma().length!==0?t=this.ko:this.ts.N().leftPriceScale.visible&&this.Po.Ma().length!==0?t=this.Po:this.cl.length!==0&&(t=this.cl[0].Ft()),t===null&&(t=this.ko),t}$n(){let t=null;return this.ts.N().rightPriceScale.visible?t=this.ko:this.ts.N().leftPriceScale.visible&&(t=this.Po),t}Fo(t){t!==null&&t.Tl()&&this.Xo(t)}Zo(t){const e=this.uh.Pe();t.yl({sn:!0}),e!==null&&t.do(e),this.Ao()}Go(){this.Xo(this.Po),this.Xo(this.ko)}Jo(){this.Fo(this.Po),this.Fo(this.ko),this.cl.forEach((t=>{this.Un(t)&&this.Fo(t.Ft())})),this.Ao(),this.ts.ar()}Dt(){return this.fl===null&&(this.fl=Vc(this.cl)),this.fl}Qo(t,e){e=Ns(e,0,this.cl.length-1);const s=this.cl.indexOf(t);St(s!==-1,"setSeriesOrder: invalid data source"),this.cl.splice(s,1),this.cl.splice(e,0,t),this.cl.forEach(((r,o)=>r.ls(o))),this.fl=null;for(const r of[this.Po,this.ko])r.Jl(),r.wa();this.ts.ar()}Bt(){return this.Dt().filter(xl)}t_(){return this.xo}i_(){return this.Co}_a(t){this.yh.push(new Hb(t))}ua(t){this.yh=this.yh.filter((e=>e.oh()!==t)),t.detached&&t.detached(),this.ts.ar()}s_(){return this.yh}sa(t,e){return this.yh.map((s=>s.jn(t,e))).filter((s=>s!==null))}Xo(t){const e=t.co();if(e&&e.length>0&&!this.uh.Ki()){const s=this.uh.Pe();s!==null&&t.do(s)}t.Ns()}No(t,e,s){let r=this.Do(e);if(r===null&&(r=this.yo(e,this.ts.N().overlayPriceScales)),this.cl.splice(s,0,t),!go(e)){const o=this.wo.get(e)||[];o.push(t),this.wo.set(e,o)}t.ls(s),r.Gl(t),t._s(r),this.Fo(r),this.fl=null}To(t,e,s){e.ie!==s.ie&&this.Xo(t)}yo(t,e){const s={visible:!0,autoScale:!0,...Ne(e)},r=new r0(t,s,this.ts.N().layout,this.ts.N().localization,this.ts.Xi());return r.Al(this.$t()),r}}function Sr(i){return{n_:i.n_,e_:{Kn:i.r_.externalId},h_:i.r_.cursorStyle}}function o0(i,t,e,s){for(const r of i){const o=r.Tt(s);if(o!==null&&o.jn){const n=o.jn(t,e);if(n!==null)return{a_:r,e_:n}}}return null}function n0(i){return i.Fs!==void 0}function Fc(i,t,e){const s=[i,...i.Dt()],r=(function(o,n,a){let l,h;for(const p of o){const m=p.sa?.(n,a)??[];for(const g of m)d=g.zOrder,u=l?.zOrder,(!u||d==="top"&&u!=="top"||d==="normal"&&u==="bottom")&&(l=g,h=p)}var d,u;return l&&h?{r_:l,n_:h}:null})(s,t,e);if(r?.r_.zOrder==="top")return Sr(r);for(const o of s){if(r&&r.n_===o&&r.r_.zOrder!=="bottom"&&!r.r_.isBackground)return Sr(r);if(n0(o)){const n=o0(o.Fs(i),t,e,i);if(n!==null)return{n_:o,a_:n.a_,e_:n.e_}}if(r&&r.n_===o&&r.r_.zOrder!=="bottom"&&r.r_.isBackground)return Sr(r)}return r?.r_?Sr(r):null}class a0{constructor(t,e,s=50){this.yn=0,this.kn=1,this.Tn=1,this.Dn=new Map,this.Rn=new Map,this.l_=t,this.o_=e,this.Vn=s}__(t){const e=t.time,s=this.o_.cacheKey(e),r=this.Dn.get(s);if(r!==void 0)return r.u_;if(this.yn===this.Vn){const n=this.Rn.get(this.Tn);this.Rn.delete(this.Tn),this.Dn.delete(qt(n)),this.Tn++,this.yn--}const o=this.l_(t);return this.Dn.set(s,{u_:o,An:this.kn}),this.Rn.set(this.kn,s),this.yn++,this.kn++,o}}class Us{constructor(t,e){St(t<=e,"right should be >= left"),this.c_=t,this.d_=e}Uh(){return this.c_}bi(){return this.d_}f_(){return this.d_-this.c_+1}Te(t){return this.c_<=t&&t<=this.d_}He(t){return this.c_===t.Uh()&&this.d_===t.bi()}}function Cl(i,t){return i===null||t===null?i===t:i.He(t)}class l0{constructor(){this.p_=new Map,this.Dn=null,this.v_=!1}m_(t){this.v_=t,this.Dn=null}w_(t,e){this.g_(e),this.Dn=null;for(let s=e;s<t.length;++s){const r=t[s];let o=this.p_.get(r.timeWeight);o===void 0&&(o=[],this.p_.set(r.timeWeight,o)),o.push({index:s,time:r.time,weight:r.timeWeight,originalTime:r.originalTime})}}M_(t,e,s,r,o){const n=Math.ceil(e/t);return this.Dn!==null&&this.Dn.b_===n&&o===this.Dn.S_&&s===this.Dn.x_||(this.Dn={S_:o,x_:s,Da:this.C_(n,s,r),b_:n}),this.Dn.Da}g_(t){if(t===0)return void this.p_.clear();const e=[];this.p_.forEach(((s,r)=>{t<=s[0].index?e.push(r):s.splice(ns(s,t,(o=>o.index<t)),1/0)}));for(const s of e)this.p_.delete(s)}C_(t,e,s){let r=[];const o=n=>!e||s.has(n.index);for(const n of Array.from(this.p_.keys()).sort(((a,l)=>l-a))){if(!this.p_.get(n))continue;const a=r;r=[];const l=a.length;let h=0;const d=qt(this.p_.get(n)),u=d.length;let p=1/0,m=-1/0;for(let g=0;g<u;g++){const v=d[g],b=v.index;for(;h<l;){const x=a[h],y=x.index;if(!(y<b&&o(x))){p=y;break}h++,r.push(x),m=y,p=1/0}if(p-b>=t&&b-m>=t&&o(v))r.push(v),m=b;else if(this.v_)return a}for(;h<l;h++)o(a[h])&&r.push(a[h])}return r}}class Xi{constructor(t){this.P_=t}y_(){return this.P_===null?null:new Us(Math.floor(this.P_.Uh()),Math.ceil(this.P_.bi()))}k_(){return this.P_}static T_(){return new Xi(null)}}function h0(i,t){return i.weight>t.weight?i:t}class c0{constructor(t,e,s,r){this.Mo=0,this.R_=null,this.D_=[],this.ml=null,this.vl=null,this.V_=new l0,this.B_=new Map,this.I_=Xi.T_(),this.E_=!0,this.A_=new dt,this.z_=new dt,this.L_=new dt,this.O_=null,this.N_=null,this.F_=new Map,this.W_=-1,this.H_=[],this.Ps=e,this.bl=s,this.U_=e.rightOffset,this.q_=e.barSpacing,this.ts=t,this.Y_(e),this.o_=r,this.j_(),this.V_.m_(e.uniformDistribution),this.K_()}N(){return this.Ps}X_(t){ee(this.bl,t),this.Z_(),this.j_()}hr(t,e){ee(this.Ps,t),this.Ps.fixLeftEdge&&this.G_(),this.Ps.fixRightEdge&&this.J_(),t.barSpacing!==void 0&&this.ts.dn(t.barSpacing),t.rightOffset!==void 0&&this.ts.fn(t.rightOffset),this.Y_(t),t.minBarSpacing===void 0&&t.maxBarSpacing===void 0||this.ts.dn(t.barSpacing??this.q_),t.ignoreWhitespaceIndices!==void 0&&t.ignoreWhitespaceIndices!==this.Ps.ignoreWhitespaceIndices&&this.K_(),this.Z_(),this.j_(),this.L_.p()}Rs(t){return this.D_[t]?.time??null}ss(t){return this.D_[t]??null}Q_(t,e){if(this.D_.length<1)return null;if(this.o_.key(t)>this.o_.key(this.D_[this.D_.length-1].time))return e?this.D_.length-1:null;const s=ns(this.D_,this.o_.key(t),((r,o)=>this.o_.key(r.time)<o));return this.o_.key(t)<this.o_.key(this.D_[s].time)?e?s:null:s}Ki(){return this.Mo===0||this.D_.length===0||this.R_===null}tu(){return this.D_.length>0}Pe(){return this.iu(),this.I_.y_()}su(){return this.iu(),this.I_.k_()}nu(){const t=this.Pe();if(t===null)return null;const e={from:t.Uh(),to:t.bi()};return this.eu(e)}eu(t){const e=Math.round(t.from),s=Math.round(t.to),r=S(this.ru()),o=S(this.hu());return{from:S(this.ss(Math.max(r,e))),to:S(this.ss(Math.min(o,s)))}}au(t){return{from:S(this.Q_(t.from,!0)),to:S(this.Q_(t.to,!0))}}Qi(){return this.Mo}Eo(t){if(!isFinite(t)||t<=0||this.Mo===t)return;const e=this.su(),s=this.Mo;if(this.Mo=t,this.E_=!0,this.Ps.lockVisibleTimeRangeOnResize&&s!==0){const r=this.q_*t/s;this.q_=r}if(this.Ps.fixLeftEdge&&e!==null&&e.Uh()<=0){const r=s-t;this.U_-=Math.round(r/this.q_)+1,this.E_=!0}this.lu(),this.ou()}qt(t){if(this.Ki()||!Qs(t))return 0;const e=this._u()+this.U_-t;return this.Mo-(e+.5)*this.q_-1}uu(t,e){const s=this._u(),r=e===void 0?0:e.from,o=e===void 0?t.length:e.to;for(let n=r;n<o;n++){const a=t[n].wt,l=s+this.U_-a,h=this.Mo-(l+.5)*this.q_-1;t[n]._t=h}}cu(t,e){const s=Math.ceil(this.du(t));return e&&this.Ps.ignoreWhitespaceIndices&&!this.fu(s)?this.pu(s):s}fn(t){this.E_=!0,this.U_=t,this.ou(),this.ts.vu(),this.ts.ar()}mu(){return this.q_}dn(t){const e=this.q_;if(this.wu(t),this.Ps.rightOffsetPixels!==void 0&&e!==0){const s=this.U_*e/this.q_;this.U_=s}this.ou(),this.ts.vu(),this.ts.ar()}gu(){return this.U_}Da(){if(this.Ki())return null;if(this.N_!==null)return this.N_;const t=this.q_,e=5*(this.ts.N().layout.fontSize+4)/8*(this.Ps.tickMarkMaxCharacterLength||8),s=Math.round(e/t),r=S(this.Pe()),o=Math.max(r.Uh(),r.Uh()-s),n=Math.max(r.bi(),r.bi()-s),a=this.V_.M_(t,e,this.Ps.ignoreWhitespaceIndices,this.F_,this.W_),l=this.ru()+s,h=this.hu()-s,d=this.Mu(),u=this.Ps.fixLeftEdge||d,p=this.Ps.fixRightEdge||d;let m=0;for(const g of a){if(!(o<=g.index&&g.index<=n))continue;let v;m<this.H_.length?(v=this.H_[m],v.coord=this.qt(g.index),v.label=this.bu(g),v.weight=g.weight):(v={needAlignCoordinate:!1,coord:this.qt(g.index),label:this.bu(g),weight:g.weight},this.H_.push(v)),this.q_>e/2&&!d?v.needAlignCoordinate=!1:v.needAlignCoordinate=u&&g.index<=l||p&&g.index>=h,m++}return this.H_.length=m,this.N_=this.H_,this.H_}Su(){let t;this.E_=!0,this.dn(this.Ps.barSpacing),t=this.Ps.rightOffsetPixels!==void 0?this.Ps.rightOffsetPixels/this.mu():this.Ps.rightOffset,this.fn(t)}xu(t){this.E_=!0,this.R_=t,this.ou(),this.G_()}Cu(t,e){const s=this.du(t),r=this.mu(),o=r+e*(r/10);this.dn(o),this.Ps.rightBarStaysOnScroll||this.fn(this.gu()+(s-this.du(t)))}no(t){this.ml&&this.lo(),this.vl===null&&this.O_===null&&(this.Ki()||(this.vl=t,this.Pu()))}eo(t){if(this.O_===null)return;const e=Ns(this.Mo-t,0,this.Mo),s=Ns(this.Mo-S(this.vl),0,this.Mo);e!==0&&s!==0&&this.dn(this.O_.mu*e/s)}ro(){this.vl!==null&&(this.vl=null,this.yu())}ho(t){this.ml===null&&this.O_===null&&(this.Ki()||(this.ml=t,this.Pu()))}ao(t){if(this.ml===null)return;const e=(this.ml-t)/this.mu();this.U_=S(this.O_).gu+e,this.E_=!0,this.ou()}lo(){this.ml!==null&&(this.ml=null,this.yu())}ku(){this.Tu(this.Ps.rightOffset)}Tu(t,e=400){if(!isFinite(t))throw new RangeError("offset is required and must be finite number");if(!isFinite(e)||e<=0)throw new RangeError("animationDuration (optional) must be finite positive number");const s=this.U_,r=performance.now();this.ts._n({Ru:o=>(o-r)/e>=1,Du:o=>{const n=(o-r)/e;return n>=1?t:s+(t-s)*n}})}yt(t,e){this.E_=!0,this.D_=t,this.V_.w_(t,e),this.ou()}Vu(){return this.A_}Bu(){return this.z_}Iu(){return this.L_}_u(){return this.R_||0}Eu(t,e){const s=t.f_(),r=e&&this.Ps.rightOffsetPixels||0;this.wu((this.Mo-r)/s),this.U_=t.bi()-this._u(),e&&(this.U_=r?r/this.mu():this.Ps.rightOffset),this.ou(),this.E_=!0,this.ts.vu(),this.ts.ar()}Au(){const t=this.ru(),e=this.hu();t!==null&&e!==null&&this.Eu(new Us(t,e),!0)}zu(t){const e=new Us(t.from,t.to);this.Eu(e)}ns(t){return this.bl.timeFormatter!==void 0?this.bl.timeFormatter(t.originalTime):this.o_.formatHorzItem(t.time)}K_(){if(!this.Ps.ignoreWhitespaceIndices)return;this.F_.clear();const t=this.ts.js();for(const e of t)for(const s of e.va())this.F_.set(s,!0);this.W_++}Mu(){const t=this.ts.N().handleScroll,e=this.ts.N().handleScale;return!(t.horzTouchDrag||t.mouseWheel||t.pressedMouseMove||t.vertTouchDrag||e.axisDoubleClickReset.time||e.axisPressedMouseMove.time||e.mouseWheel||e.pinch)}ru(){return this.D_.length===0?null:0}hu(){return this.D_.length===0?null:this.D_.length-1}Lu(t){return(this.Mo-1-t)/this.q_}du(t){const e=this.Lu(t),s=this._u()+this.U_-e;return Math.round(1e6*s)/1e6}wu(t){const e=this.q_;this.q_=t,this.lu(),e!==this.q_&&(this.E_=!0,this.Ou())}iu(){if(!this.E_)return;if(this.E_=!1,this.Ki())return void this.Nu(Xi.T_());const t=this._u(),e=this.Mo/this.q_,s=this.U_+t,r=new Us(s-e+1,s);this.Nu(new Xi(r))}lu(){const t=Ns(this.q_,this.Fu(),this.Wu());this.q_!==t&&(this.q_=t,this.E_=!0)}Wu(){return this.Ps.maxBarSpacing>0?this.Ps.maxBarSpacing:.5*this.Mo}Fu(){return this.Ps.fixLeftEdge&&this.Ps.fixRightEdge&&this.D_.length!==0?this.Mo/this.D_.length:this.Ps.minBarSpacing}ou(){const t=this.Hu();t!==null&&this.U_<t&&(this.U_=t,this.E_=!0);const e=this.Uu();this.U_>e&&(this.U_=e,this.E_=!0)}Hu(){const t=this.ru(),e=this.R_;return t===null||e===null?null:t-e-1+(this.Ps.fixLeftEdge?this.Mo/this.q_:Math.min(2,this.D_.length))}Uu(){return this.Ps.fixRightEdge?0:this.Mo/this.q_-Math.min(2,this.D_.length)}Pu(){this.O_={mu:this.mu(),gu:this.gu()}}yu(){this.O_=null}bu(t){let e=this.B_.get(t.weight);return e===void 0&&(e=new a0((s=>this.$u(s)),this.o_),this.B_.set(t.weight,e)),e.__(t)}$u(t){return this.o_.formatTickmark(t,this.bl)}Nu(t){const e=this.I_;this.I_=t,Cl(e.y_(),this.I_.y_())||this.A_.p(),Cl(e.k_(),this.I_.k_())||this.z_.p(),this.Ou()}Ou(){this.N_=null}Z_(){this.Ou(),this.B_.clear()}j_(){this.o_.updateFormatter(this.bl)}G_(){if(!this.Ps.fixLeftEdge)return;const t=this.ru();if(t===null)return;const e=this.Pe();if(e===null)return;const s=e.Uh()-t;if(s<0){const r=this.U_-s-1;this.fn(r)}this.lu()}J_(){this.ou(),this.lu()}fu(t){return!this.Ps.ignoreWhitespaceIndices||this.F_.get(t)||!1}pu(t){const e=(function*(r){const o=Math.round(r),n=o<r;let a=1;for(;;)n?(yield o+a,yield o-a):(yield o-a,yield o+a),a++})(t),s=this.hu();for(;s;){const r=e.next().value;if(this.F_.get(r))return r;if(r<0||r>s)break}return t}Y_(t){if(t.rightOffsetPixels!==void 0){const e=t.rightOffsetPixels/(t.barSpacing||this.q_);this.ts.fn(e)}}}var Sl,$l,zl,El,Pl;(function(i){i[i.OnTouchEnd=0]="OnTouchEnd",i[i.OnNextTap=1]="OnNextTap"})(Sl||(Sl={}));class u0{constructor(t,e,s){this.qu=[],this.Yu=[],this.Mo=0,this.ju=null,this.Ku=new dt,this.Xu=new dt,this.Zu=null,this.Gu=t,this.Ps=e,this.o_=s,this.Sl=new ub(this.Ps.layout.colorParsers),this.Ju=new cb(this),this.uh=new c0(this,e.timeScale,this.Ps.localization,s),this.Ct=new xb(this,e.crosshair),this.Qu=new Jb(e.crosshair),e.addDefaultPane&&(this.tc(0),this.qu[0].Io(2)),this.sc=this.nc(0),this.ec=this.nc(1)}Ih(){this.rc(Ct.gn())}ar(){this.rc(Ct.wn())}Zh(){this.rc(new Ct(1))}Eh(t){const e=this.hc(t);this.rc(e)}ac(){return this.ju}lc(t){if(this.ju?.n_===t?.n_&&this.ju?.e_?.Kn===t?.e_?.Kn)return;const e=this.ju;this.ju=t,e!==null&&this.Eh(e.n_),t!==null&&t.n_!==e?.n_&&this.Eh(t.n_)}N(){return this.Ps}hr(t){ee(this.Ps,t),this.qu.forEach((e=>e.Ro(t))),t.timeScale!==void 0&&this.uh.hr(t.timeScale),t.localization!==void 0&&this.uh.X_(t.localization),(t.leftPriceScale||t.rightPriceScale)&&this.Ku.p(),this.sc=this.nc(0),this.ec=this.nc(1),this.Ih()}oc(t,e,s=0){const r=this.qu[s];if(r===void 0)return;if(t==="left")return ee(this.Ps,{leftPriceScale:e}),r.Ro({leftPriceScale:e}),this.Ku.p(),void this.Ih();if(t==="right")return ee(this.Ps,{rightPriceScale:e}),r.Ro({rightPriceScale:e}),this.Ku.p(),void this.Ih();const o=this._c(t,s);o!==null&&(o.Ft.hr(e),this.Ku.p())}_c(t,e){const s=this.qu[e];if(s===void 0)return null;const r=s.Do(t);return r!==null?{Us:s,Ft:r}:null}Et(){return this.uh}$s(){return this.qu}uc(){return this.Ct}cc(){return this.Xu}dc(t,e){t.Al(e),this.vu()}Eo(t){this.Mo=t,this.uh.Eo(this.Mo),this.qu.forEach((e=>e.Eo(t))),this.vu()}fc(t){this.qu.length!==1&&(St(t>=0&&t<this.qu.length,"Invalid pane index"),this.qu.splice(t,1),this.Ih())}vc(t,e){if(this.qu.length<2)return;St(t>=0&&t<this.qu.length,"Invalid pane index");const s=this.qu[t],r=this.qu.reduce(((u,p)=>u+p.Bo()),0),o=this.qu.reduce(((u,p)=>u+p.$t()),0),n=o-30*(this.qu.length-1);e=Math.min(n,Math.max(30,e));const a=r/o,l=s.$t();s.Io(e*a);let h=e-l,d=this.qu.length-1;for(const u of this.qu)if(u!==s){const p=Math.min(n,Math.max(30,u.$t()-h/d));h-=u.$t()-p,d-=1;const m=p*a;u.Io(m)}this.Ih()}mc(t,e){St(t>=0&&t<this.qu.length&&e>=0&&e<this.qu.length,"Invalid pane index");const s=this.qu[t],r=this.qu[e];this.qu[t]=r,this.qu[e]=s,this.Ih()}wc(t,e){if(St(t>=0&&t<this.qu.length&&e>=0&&e<this.qu.length,"Invalid pane index"),t===e)return;const[s]=this.qu.splice(t,1);this.qu.splice(e,0,s),this.Ih()}Uo(t,e,s){t.Uo(e,s)}$o(t,e,s){t.$o(e,s),this.Ah(),this.rc(this.gc(t,2))}qo(t,e){t.qo(e),this.rc(this.gc(t,2))}Yo(t,e,s){e.Tl()||t.Yo(e,s)}jo(t,e,s){e.Tl()||(t.jo(e,s),this.Ah(),this.rc(this.gc(t,2)))}Ko(t,e){e.Tl()||(t.Ko(e),this.rc(this.gc(t,2)))}Zo(t,e){t.Zo(e),this.rc(this.gc(t,2))}Mc(t){this.uh.no(t)}bc(t,e){const s=this.Et();if(s.Ki()||e===0)return;const r=s.Qi();t=Math.max(1,Math.min(t,r)),s.Cu(t,e),this.vu()}Sc(t){this.xc(0),this.Cc(t),this.Pc()}yc(t){this.uh.eo(t),this.vu()}kc(){this.uh.ro(),this.ar()}xc(t){this.uh.ho(t)}Cc(t){this.uh.ao(t),this.vu()}Pc(){this.uh.lo(),this.ar()}js(){return this.Yu}Tc(t,e,s,r,o){this.Ct.Vs(t,e);let n=NaN,a=this.uh.cu(t,!0);const l=this.uh.Pe();l!==null&&(a=Math.min(Math.max(l.Uh(),a),l.bi()));const h=r.ks(),d=h.zt();if(d!==null&&(n=h.Ts(e,d)),n=this.Qu.ga(n,a,r),this.Ct.As(a,n,r),this.Zh(),!o){const u=Fc(r,t,e);this.lc(u&&{n_:u.n_,e_:u.e_,h_:u.h_||null}),this.Xu.p(this.Ct.It(),{x:t,y:e},s)}}Rc(t,e,s){const r=s.ks(),o=r.zt(),n=r.Nt(t,S(o)),a=this.uh.Q_(e,!0),l=this.uh.qt(S(a));this.Tc(l,n,null,s,!0)}Dc(t){this.uc().Ls(),this.Zh(),t||this.Xu.p(null,null,null)}Ah(){const t=this.Ct.Us();if(t!==null){const e=this.Ct.Is(),s=this.Ct.Es();this.Tc(e,s,null,t)}this.Ct.Ns()}Vc(t,e,s){const r=this.uh.Rs(0);e!==void 0&&s!==void 0&&this.uh.yt(e,s);const o=this.uh.Rs(0),n=this.uh._u(),a=this.uh.Pe();if(a!==null&&r!==null&&o!==null){const l=a.Te(n),h=this.o_.key(r)>this.o_.key(o),d=t!==null&&t>n&&!h,u=this.uh.N().allowShiftVisibleRangeOnWhitespaceReplacement,p=l&&(s!==void 0||u)&&this.uh.N().shiftVisibleRangeOnNewBar;if(d&&!p){const m=t-n;this.uh.fn(this.uh.gu()-m)}}this.uh.xu(t)}Lh(t){t!==null&&t.Jo()}Hn(t){if((function(s){return s instanceof kl})(t))return t;const e=this.qu.find((s=>s.Dt().includes(t)));return e===void 0?null:e}vu(){this.qu.forEach((t=>t.Jo())),this.Ah()}m(){this.qu.forEach((t=>t.m())),this.qu.length=0,this.Ps.localization.priceFormatter=void 0,this.Ps.localization.percentageFormatter=void 0,this.Ps.localization.timeFormatter=void 0}Bc(){return this.Ju}Yn(){return this.Ju.N()}Vo(){return this.Ku}Ic(t,e){const s=this.tc(e);this.Ec(t,s),this.Yu.push(t),this.Yu.length===1?this.Ih():this.ar()}Ac(t){const e=this.Hn(t),s=this.Yu.indexOf(t);St(s!==-1,"Series not found");const r=S(e);this.Yu.splice(s,1),r.Ql(t),t.m&&t.m(),this.uh.K_(),this.zc(r)}Bh(t,e){const s=S(this.Hn(t));s.Ql(t,!0),s.Gl(t,e,!0)}Au(){const t=Ct.wn();t.rn(),this.rc(t)}Lc(t){const e=Ct.wn();e.ln(t),this.rc(e)}cn(){const t=Ct.wn();t.cn(),this.rc(t)}dn(t){const e=Ct.wn();e.dn(t),this.rc(e)}fn(t){const e=Ct.wn();e.fn(t),this.rc(e)}_n(t){const e=Ct.wn();e._n(t),this.rc(e)}hn(){const t=Ct.wn();t.hn(),this.rc(t)}Oc(){return this.Ps.rightPriceScale.visible?"right":"left"}Nc(t,e){if(St(e>=0,"Index should be greater or equal to 0"),e===this.Fc(t))return;const s=S(this.Hn(t));s.Ql(t);const r=this.tc(e);this.Ec(t,r),s.Ma().length===0&&this.zc(s),this.Ih()}Wc(){return this.ec}$(){return this.sc}Ut(t){const e=this.ec,s=this.sc;if(e===s)return e;if(t=Math.max(0,Math.min(100,Math.round(100*t))),this.Zu===null||this.Zu.mr!==s||this.Zu.wr!==e)this.Zu={mr:s,wr:e,Hc:new Map};else{const o=this.Zu.Hc.get(t);if(o!==void 0)return o}const r=this.Sl.tt(s,e,t/100);return this.Zu.Hc.set(t,r),r}Uc(t){return this.qu.indexOf(t)}Xi(){return this.Sl}$c(){return this.qc()}qc(t){const e=new kl(this.uh,this);this.qu.push(e);const s=t??this.qu.length-1,r=Ct.gn();return r.Qs(s,{tn:0,sn:!0}),this.rc(r),e}tc(t){return St(t>=0,"Index should be greater or equal to 0"),(t=Math.min(this.qu.length,t))<this.qu.length?this.qu[t]:this.qc(t)}Fc(t){return this.qu.findIndex((e=>e.Oo().includes(t)))}gc(t,e){const s=new Ct(e);if(t!==null){const r=this.qu.indexOf(t);s.Qs(r,{tn:e})}return s}hc(t,e){return e===void 0&&(e=2),this.gc(this.Hn(t),e)}rc(t){this.Gu&&this.Gu(t),this.qu.forEach((e=>e.i_().lr().yt()))}Ec(t,e){const s=t.N().priceScaleId,r=s!==void 0?s:this.Oc();e.Gl(t,r),go(r)||t.hr(t.N())}nc(t){const e=this.Ps.layout;return e.background.type==="gradient"?t===0?e.background.topColor:e.background.bottomColor:e.background.color}zc(t){!t.Lo()&&t.Ma().length===0&&this.qu.length>1&&this.qu.splice(this.Uc(t),1)}}function Nc(i){if(i>=1)return 0;let t=0;for(;t<8;t++){const e=Math.round(i);if(Math.abs(e-i)<1e-8)return t;i*=10}return t}function kn(i){return!os(i)&&!cr(i)}function Bc(i){return os(i)}(function(i){i[i.Disabled=0]="Disabled",i[i.Continuous=1]="Continuous",i[i.OnDataUpdate=2]="OnDataUpdate"})($l||($l={})),(function(i){i[i.LastBar=0]="LastBar",i[i.LastVisible=1]="LastVisible"})(zl||(zl={})),(function(i){i.Solid="solid",i.VerticalGradient="gradient"})(El||(El={})),(function(i){i[i.Year=0]="Year",i[i.Month=1]="Month",i[i.DayOfMonth=2]="DayOfMonth",i[i.Time=3]="Time",i[i.TimeWithSeconds=4]="TimeWithSeconds"})(Pl||(Pl={}));const Ml=i=>i.getUTCFullYear();function d0(i,t,e){return t.replace(/yyyy/g,(s=>Be(Ml(s),4))(i)).replace(/yy/g,(s=>Be(Ml(s)%100,2))(i)).replace(/MMMM/g,((s,r)=>new Date(s.getUTCFullYear(),s.getUTCMonth(),1).toLocaleString(r,{month:"long"}))(i,e)).replace(/MMM/g,((s,r)=>new Date(s.getUTCFullYear(),s.getUTCMonth(),1).toLocaleString(r,{month:"short"}))(i,e)).replace(/MM/g,(s=>Be((r=>r.getUTCMonth()+1)(s),2))(i)).replace(/dd/g,(s=>Be((r=>r.getUTCDate())(s),2))(i))}class Hc{constructor(t="yyyy-MM-dd",e="default"){this.Yc=t,this.jc=e}__(t){return d0(t,this.Yc,this.jc)}}class p0{constructor(t){this.Kc=t||"%h:%m:%s"}__(t){return this.Kc.replace("%h",Be(t.getUTCHours(),2)).replace("%m",Be(t.getUTCMinutes(),2)).replace("%s",Be(t.getUTCSeconds(),2))}}const f0={Xc:"yyyy-MM-dd",Zc:"%h:%m:%s",Gc:" ",Jc:"default"};class m0{constructor(t={}){const e={...f0,...t};this.Qc=new Hc(e.Xc,e.Jc),this.td=new p0(e.Zc),this.sd=e.Gc}__(t){return`${this.Qc.__(t)}${this.sd}${this.td.__(t)}`}}function $r(i){return 60*i*60*1e3}function Bo(i){return 60*i*1e3}const zr=[{nd:(Al=1,1e3*Al),ed:10},{nd:Bo(1),ed:20},{nd:Bo(5),ed:21},{nd:Bo(30),ed:22},{nd:$r(1),ed:30},{nd:$r(3),ed:31},{nd:$r(6),ed:32},{nd:$r(12),ed:33}];var Al;function Tl(i,t){if(i.getUTCFullYear()!==t.getUTCFullYear())return 70;if(i.getUTCMonth()!==t.getUTCMonth())return 60;if(i.getUTCDate()!==t.getUTCDate())return 50;for(let e=zr.length-1;e>=0;--e)if(Math.floor(t.getTime()/zr[e].nd)!==Math.floor(i.getTime()/zr[e].nd))return zr[e].ed;return 0}function Ho(i){let t=i;if(cr(i)&&(t=oa(i)),!kn(t))throw new Error("time must be of type BusinessDay");const e=new Date(Date.UTC(t.year,t.month-1,t.day,0,0,0,0));return{rd:Math.round(e.getTime()/1e3),hd:t}}function Ol(i){if(!Bc(i))throw new Error("time must be of type isUTCTimestamp");return{rd:i}}function oa(i){const t=new Date(i);if(isNaN(t.getTime()))throw new Error(`Invalid date string=${i}, expected format=yyyy-mm-dd`);return{day:t.getUTCDate(),month:t.getUTCMonth()+1,year:t.getUTCFullYear()}}function Rl(i){cr(i.time)&&(i.time=oa(i.time))}class Il{options(){return this.Ps}setOptions(t){this.Ps=t,this.updateFormatter(t.localization)}preprocessData(t){Array.isArray(t)?(function(e){e.forEach(Rl)})(t):Rl(t)}createConverterToInternalObj(t){return S((function(e){return e.length===0?null:kn(e[0].time)||cr(e[0].time)?Ho:Ol})(t))}key(t){return typeof t=="object"&&"rd"in t?t.rd:this.key(this.convertHorzItemToInternal(t))}cacheKey(t){const e=t;return e.hd===void 0?new Date(1e3*e.rd).getTime():new Date(Date.UTC(e.hd.year,e.hd.month-1,e.hd.day)).getTime()}convertHorzItemToInternal(t){return Bc(e=t)?Ol(e):kn(e)?Ho(e):Ho(oa(e));var e}updateFormatter(t){if(!this.Ps)return;const e=t.dateFormat;this.Ps.timeScale.timeVisible?this.ad=new m0({Xc:e,Zc:this.Ps.timeScale.secondsVisible?"%h:%m:%s":"%h:%m",Gc:"   ",Jc:t.locale}):this.ad=new Hc(e,t.locale)}formatHorzItem(t){const e=t;return this.ad.__(new Date(1e3*e.rd))}formatTickmark(t,e){const s=(function(o,n,a){switch(o){case 0:case 10:return n?a?4:3:2;case 20:case 21:case 22:case 30:case 31:case 32:case 33:return n?3:2;case 50:return 2;case 60:return 1;case 70:return 0}})(t.weight,this.Ps.timeScale.timeVisible,this.Ps.timeScale.secondsVisible),r=this.Ps.timeScale;if(r.tickMarkFormatter!==void 0){const o=r.tickMarkFormatter(t.originalTime,s,e.locale);if(o!==null)return o}return(function(o,n,a){const l={};switch(n){case 0:l.year="numeric";break;case 1:l.month="short";break;case 2:l.day="numeric";break;case 3:l.hour12=!1,l.hour="2-digit",l.minute="2-digit";break;case 4:l.hour12=!1,l.hour="2-digit",l.minute="2-digit",l.second="2-digit"}const h=o.hd===void 0?new Date(1e3*o.rd):new Date(Date.UTC(o.hd.year,o.hd.month-1,o.hd.day));return new Date(h.getUTCFullYear(),h.getUTCMonth(),h.getUTCDate(),h.getUTCHours(),h.getUTCMinutes(),h.getUTCSeconds(),h.getUTCMilliseconds()).toLocaleString(a,l)})(t.time,s,e.locale)}maxTickMarkWeight(t){let e=t.reduce(h0,t[0]).weight;return e>30&&e<50&&(e=30),e}fillWeightsForPoints(t,e){(function(s,r=0){if(s.length===0)return;let o=r===0?null:s[r-1].time.rd,n=o!==null?new Date(1e3*o):null,a=0;for(let l=r;l<s.length;++l){const h=s[l],d=new Date(1e3*h.time.rd);n!==null&&(h.timeWeight=Tl(d,n)),a+=h.time.rd-(o||h.time.rd),o=h.time.rd,n=d}if(r===0&&s.length>1){const l=Math.ceil(a/(s.length-1)),h=new Date(1e3*(s[0].time.rd-l));s[0].timeWeight=Tl(new Date(1e3*s[0].time.rd),h)}})(t,e)}static ld(t){return ee({localization:{dateFormat:"dd MMM 'yy"}},t??{})}}const as=typeof window<"u";function Ll(){return!!as&&window.navigator.userAgent.toLowerCase().indexOf("firefox")>-1}function Uo(){return!!as&&/iPhone|iPad|iPod/.test(window.navigator.platform)}function Cn(i){return i+i%2}function g0(i){as&&window.chrome!==void 0&&i.addEventListener("mousedown",(t=>{if(t.button===1)return t.preventDefault(),!1}))}class yo{constructor(t,e,s){this.od=0,this._d=null,this.ud={_t:Number.NEGATIVE_INFINITY,ut:Number.POSITIVE_INFINITY},this.dd=0,this.fd=null,this.pd={_t:Number.NEGATIVE_INFINITY,ut:Number.POSITIVE_INFINITY},this.vd=null,this.md=!1,this.wd=null,this.gd=null,this.Md=!1,this.bd=!1,this.Sd=!1,this.xd=null,this.Cd=null,this.Pd=null,this.yd=null,this.kd=null,this.Td=null,this.Rd=null,this.Dd=0,this.Vd=!1,this.Bd=!1,this.Id=!1,this.Ed=0,this.Ad=null,this.zd=!Uo(),this.Ld=r=>{this.Od(r)},this.Nd=r=>{if(this.Fd(r)){const o=this.Wd(r);if(++this.dd,this.fd&&this.dd>1){const{Hd:n}=this.Ud(we(r),this.pd);n<30&&!this.Sd&&this.$d(o,this.Yd.qd),this.jd()}}else{const o=this.Wd(r);if(++this.od,this._d&&this.od>1){const{Hd:n}=this.Ud(we(r),this.ud);n<5&&!this.bd&&this.Kd(o,this.Yd.Xd),this.Zd()}}},this.Gd=t,this.Yd=e,this.Ps=s,this.Jd()}m(){this.xd!==null&&(this.xd(),this.xd=null),this.Cd!==null&&(this.Cd(),this.Cd=null),this.yd!==null&&(this.yd(),this.yd=null),this.kd!==null&&(this.kd(),this.kd=null),this.Td!==null&&(this.Td(),this.Td=null),this.Pd!==null&&(this.Pd(),this.Pd=null),this.Qd(),this.Zd()}tf(t){this.yd&&this.yd();const e=this.if.bind(this);if(this.yd=()=>{this.Gd.removeEventListener("mousemove",e)},this.Gd.addEventListener("mousemove",e),this.Fd(t))return;const s=this.Wd(t);this.Kd(s,this.Yd.sf),this.zd=!0}Zd(){this._d!==null&&clearTimeout(this._d),this.od=0,this._d=null,this.ud={_t:Number.NEGATIVE_INFINITY,ut:Number.POSITIVE_INFINITY}}jd(){this.fd!==null&&clearTimeout(this.fd),this.dd=0,this.fd=null,this.pd={_t:Number.NEGATIVE_INFINITY,ut:Number.POSITIVE_INFINITY}}if(t){if(this.Id||this.gd!==null||this.Fd(t))return;const e=this.Wd(t);this.Kd(e,this.Yd.nf),this.zd=!0}ef(t){const e=Wo(t.changedTouches,S(this.Ad));if(e===null||(this.Ed=Er(t),this.Rd!==null)||this.Bd)return;this.Vd=!0;const s=this.Ud(we(e),S(this.gd)),{rf:r,hf:o,Hd:n}=s;if(this.Md||!(n<5)){if(!this.Md){const a=.5*r,l=o>=a&&!this.Ps.af(),h=a>o&&!this.Ps.lf();l||h||(this.Bd=!0),this.Md=!0,this.Sd=!0,this.Qd(),this.jd()}if(!this.Bd){const a=this.Wd(t,e);this.$d(a,this.Yd._f),Fi(t)}}}uf(t){if(t.button!==0)return;const e=this.Ud(we(t),S(this.wd)),{Hd:s}=e;if(s>=5&&(this.bd=!0,this.Zd()),this.bd){const r=this.Wd(t);this.Kd(r,this.Yd.cf)}}Ud(t,e){const s=Math.abs(e._t-t._t),r=Math.abs(e.ut-t.ut);return{rf:s,hf:r,Hd:s+r}}df(t){let e=Wo(t.changedTouches,S(this.Ad));if(e===null&&t.touches.length===0&&(e=t.changedTouches[0]),e===null)return;this.Ad=null,this.Ed=Er(t),this.Qd(),this.gd=null,this.Td&&(this.Td(),this.Td=null);const s=this.Wd(t,e);if(this.$d(s,this.Yd.ff),++this.dd,this.fd&&this.dd>1){const{Hd:r}=this.Ud(we(e),this.pd);r<30&&!this.Sd&&this.$d(s,this.Yd.qd),this.jd()}else this.Sd||(this.$d(s,this.Yd.pf),this.Yd.pf&&Fi(t));this.dd===0&&Fi(t),t.touches.length===0&&this.md&&(this.md=!1,Fi(t))}Od(t){if(t.button!==0)return;const e=this.Wd(t);if(this.wd=null,this.Id=!1,this.kd&&(this.kd(),this.kd=null),Ll()&&this.Gd.ownerDocument.documentElement.removeEventListener("mouseleave",this.Ld),!this.Fd(t))if(this.Kd(e,this.Yd.vf),++this.od,this._d&&this.od>1){const{Hd:s}=this.Ud(we(t),this.ud);s<5&&!this.bd&&this.Kd(e,this.Yd.Xd),this.Zd()}else this.bd||this.Kd(e,this.Yd.mf)}Qd(){this.vd!==null&&(clearTimeout(this.vd),this.vd=null)}wf(t){if(this.Ad!==null)return;const e=t.changedTouches[0];this.Ad=e.identifier,this.Ed=Er(t);const s=this.Gd.ownerDocument.documentElement;this.Sd=!1,this.Md=!1,this.Bd=!1,this.gd=we(e),this.Td&&(this.Td(),this.Td=null);{const o=this.ef.bind(this),n=this.df.bind(this);this.Td=()=>{s.removeEventListener("touchmove",o),s.removeEventListener("touchend",n)},s.addEventListener("touchmove",o,{passive:!1}),s.addEventListener("touchend",n,{passive:!1}),this.Qd(),this.vd=setTimeout(this.gf.bind(this,t),240)}const r=this.Wd(t,e);this.$d(r,this.Yd.Mf),this.fd||(this.dd=0,this.fd=setTimeout(this.jd.bind(this),500),this.pd=we(e))}bf(t){if(t.button!==0)return;const e=this.Gd.ownerDocument.documentElement;Ll()&&e.addEventListener("mouseleave",this.Ld),this.bd=!1,this.wd=we(t),this.kd&&(this.kd(),this.kd=null);{const r=this.uf.bind(this),o=this.Od.bind(this);this.kd=()=>{e.removeEventListener("mousemove",r),e.removeEventListener("mouseup",o)},e.addEventListener("mousemove",r),e.addEventListener("mouseup",o)}if(this.Id=!0,this.Fd(t))return;const s=this.Wd(t);this.Kd(s,this.Yd.Sf),this._d||(this.od=0,this._d=setTimeout(this.Zd.bind(this),500),this.ud=we(t))}Jd(){this.Gd.addEventListener("mouseenter",this.tf.bind(this)),this.Gd.addEventListener("touchcancel",this.Qd.bind(this));{const t=this.Gd.ownerDocument,e=s=>{this.Yd.xf&&(s.composed&&this.Gd.contains(s.composedPath()[0])||s.target&&this.Gd.contains(s.target)||this.Yd.xf())};this.Cd=()=>{t.removeEventListener("touchstart",e)},this.xd=()=>{t.removeEventListener("mousedown",e)},t.addEventListener("mousedown",e),t.addEventListener("touchstart",e,{passive:!0})}Uo()&&(this.Pd=()=>{this.Gd.removeEventListener("dblclick",this.Nd)},this.Gd.addEventListener("dblclick",this.Nd)),this.Gd.addEventListener("mouseleave",this.Cf.bind(this)),this.Gd.addEventListener("touchstart",this.wf.bind(this),{passive:!0}),g0(this.Gd),this.Gd.addEventListener("mousedown",this.bf.bind(this)),this.Pf(),this.Gd.addEventListener("touchmove",(()=>{}),{passive:!1})}Pf(){this.Yd.yf===void 0&&this.Yd.kf===void 0&&this.Yd.Tf===void 0||(this.Gd.addEventListener("touchstart",(t=>this.Rf(t.touches)),{passive:!0}),this.Gd.addEventListener("touchmove",(t=>{if(t.touches.length===2&&this.Rd!==null&&this.Yd.kf!==void 0){const e=Dl(t.touches[0],t.touches[1])/this.Dd;this.Yd.kf(this.Rd,e),Fi(t)}}),{passive:!1}),this.Gd.addEventListener("touchend",(t=>{this.Rf(t.touches)})))}Rf(t){t.length===1&&(this.Vd=!1),t.length!==2||this.Vd||this.md?this.Df():this.Vf(t)}Vf(t){const e=this.Gd.getBoundingClientRect()||{left:0,top:0};this.Rd={_t:(t[0].clientX-e.left+(t[1].clientX-e.left))/2,ut:(t[0].clientY-e.top+(t[1].clientY-e.top))/2},this.Dd=Dl(t[0],t[1]),this.Yd.yf!==void 0&&this.Yd.yf(),this.Qd()}Df(){this.Rd!==null&&(this.Rd=null,this.Yd.Tf!==void 0&&this.Yd.Tf())}Cf(t){if(this.yd&&this.yd(),this.Fd(t)||!this.zd)return;const e=this.Wd(t);this.Kd(e,this.Yd.Bf),this.zd=!Uo()}gf(t){const e=Wo(t.touches,S(this.Ad));if(e===null)return;const s=this.Wd(t,e);this.$d(s,this.Yd.If),this.Sd=!0,this.md=!0}Fd(t){return t.sourceCapabilities&&t.sourceCapabilities.firesTouchEvents!==void 0?t.sourceCapabilities.firesTouchEvents:Er(t)<this.Ed+500}$d(t,e){e&&e.call(this.Yd,t)}Kd(t,e){e&&e.call(this.Yd,t)}Wd(t,e){const s=e||t,r=this.Gd.getBoundingClientRect()||{left:0,top:0};return{clientX:s.clientX,clientY:s.clientY,pageX:s.pageX,pageY:s.pageY,screenX:s.screenX,screenY:s.screenY,localX:s.clientX-r.left,localY:s.clientY-r.top,ctrlKey:t.ctrlKey,altKey:t.altKey,shiftKey:t.shiftKey,metaKey:t.metaKey,Ef:!t.type.startsWith("mouse")&&t.type!=="contextmenu"&&t.type!=="click",Af:t.type,zf:s.target,a_:t.view,Lf:()=>{t.type!=="touchstart"&&Fi(t)}}}}function Dl(i,t){const e=i.clientX-t.clientX,s=i.clientY-t.clientY;return Math.sqrt(e*e+s*s)}function Fi(i){i.cancelable&&i.preventDefault()}function we(i){return{_t:i.pageX,ut:i.pageY}}function Er(i){return i.timeStamp||performance.now()}function Wo(i,t){for(let e=0;e<i.length;++e)if(i[e].identifier===t)return i[e];return null}class v0{constructor(t,e,s){this.Of=null,this.Nf=null,this.Ff=!0,this.Wf=null,this.Hf=t,this.Uf=t.$f()[e],this.qf=t.$f()[s],this.Yf=document.createElement("tr"),this.Yf.style.height="1px",this.jf=document.createElement("td"),this.jf.style.position="relative",this.jf.style.padding="0",this.jf.style.margin="0",this.jf.setAttribute("colspan","3"),this.Kf(),this.Yf.appendChild(this.jf),this.Ff=this.Hf.N().layout.panes.enableResize,this.Ff?this.Xf():(this.Of=null,this.Nf=null)}m(){this.Nf!==null&&this.Nf.m()}Zf(){return this.Yf}Gf(){return tt({width:this.Uf.Gf().width,height:1})}Jf(){return tt({width:this.Uf.Jf().width,height:1*window.devicePixelRatio})}Qf(t,e,s){const r=this.Jf();t.fillStyle=this.Hf.N().layout.panes.separatorColor,t.fillRect(e,s,r.width,r.height)}yt(){this.Kf(),this.Hf.N().layout.panes.enableResize!==this.Ff&&(this.Ff=this.Hf.N().layout.panes.enableResize,this.Ff?this.Xf():(this.Of!==null&&(this.jf.removeChild(this.Of.tp),this.jf.removeChild(this.Of.ip),this.Of=null),this.Nf!==null&&(this.Nf.m(),this.Nf=null)))}Xf(){const t=document.createElement("div"),e=t.style;e.position="fixed",e.display="none",e.zIndex="49",e.top="0",e.left="0",e.width="100%",e.height="100%",e.cursor="row-resize",this.jf.appendChild(t);const s=document.createElement("div"),r=s.style;r.position="absolute",r.zIndex="50",r.top="-4px",r.height="9px",r.width="100%",r.backgroundColor="",r.cursor="row-resize",this.jf.appendChild(s);const o={sf:this.sp.bind(this),Bf:this.np.bind(this),Sf:this.ep.bind(this),Mf:this.ep.bind(this),cf:this.rp.bind(this),_f:this.rp.bind(this),vf:this.hp.bind(this),ff:this.hp.bind(this)};this.Nf=new yo(s,o,{af:()=>!1,lf:()=>!0}),this.Of={ip:s,tp:t}}Kf(){this.jf.style.background=this.Hf.N().layout.panes.separatorColor}sp(t){this.Of!==null&&(this.Of.ip.style.backgroundColor=this.Hf.N().layout.panes.separatorHoverColor)}np(t){this.Of!==null&&this.Wf===null&&(this.Of.ip.style.backgroundColor="")}ep(t){if(this.Of===null)return;const e=this.Uf.ap().Bo()+this.qf.ap().Bo(),s=e/(this.Uf.Gf().height+this.qf.Gf().height),r=30*s;e<=2*r||(this.Wf={lp:t.pageY,op:this.Uf.ap().Bo(),_p:e-r,up:e,cp:s,dp:r},this.Of.tp.style.display="block")}rp(t){const e=this.Wf;if(e===null)return;const s=(t.pageY-e.lp)*e.cp,r=Ns(e.op+s,e.dp,e._p);this.Uf.ap().Io(r),this.qf.ap().Io(e.up-r),this.Hf.Qt().Ih()}hp(t){this.Wf!==null&&this.Of!==null&&(this.Wf=null,this.Of.tp.style.display="none")}}function Yo(i,t){return i.fp-t.fp}function qo(i,t,e){const s=(i.fp-t.fp)/(i.wt-t.wt);return Math.sign(s)*Math.min(Math.abs(s),e)}class b0{constructor(t,e,s,r){this.pp=null,this.vp=null,this.mp=null,this.wp=null,this.gp=null,this.Mp=0,this.bp=0,this.Sp=t,this.xp=e,this.Cp=s,this.Mn=r}Pp(t,e){if(this.pp!==null){if(this.pp.wt===e)return void(this.pp.fp=t);if(Math.abs(this.pp.fp-t)<this.Mn)return}this.wp=this.mp,this.mp=this.vp,this.vp=this.pp,this.pp={wt:e,fp:t}}le(t,e){if(this.pp===null||this.vp===null||e-this.pp.wt>50)return;let s=0;const r=qo(this.pp,this.vp,this.xp),o=Yo(this.pp,this.vp),n=[r],a=[o];if(s+=o,this.mp!==null){const h=qo(this.vp,this.mp,this.xp);if(Math.sign(h)===Math.sign(r)){const d=Yo(this.vp,this.mp);if(n.push(h),a.push(d),s+=d,this.wp!==null){const u=qo(this.mp,this.wp,this.xp);if(Math.sign(u)===Math.sign(r)){const p=Yo(this.mp,this.wp);n.push(u),a.push(p),s+=p}}}}let l=0;for(let h=0;h<n.length;++h)l+=a[h]/s*n[h];Math.abs(l)<this.Sp||(this.gp={fp:t,wt:e},this.bp=l,this.Mp=(function(h,d){const u=Math.log(d);return Math.log(1*u/-h)/u})(Math.abs(l),this.Cp))}Du(t){const e=S(this.gp),s=t-e.wt;return e.fp+this.bp*(Math.pow(this.Cp,s)-1)/Math.log(this.Cp)}Ru(t){return this.gp===null||this.yp(t)===this.Mp}yp(t){const e=t-S(this.gp).wt;return Math.min(e,this.Mp)}}class y0{constructor(t,e){this.kp=void 0,this.Tp=void 0,this.Rp=void 0,this.ps=!1,this.Dp=t,this.Vp=e,this.Bp()}yt(){this.Bp()}Ip(){this.kp&&this.Dp.removeChild(this.kp),this.Tp&&this.Dp.removeChild(this.Tp),this.kp=void 0,this.Tp=void 0}Ep(){return this.ps!==this.Ap()||this.Rp!==this.zp()}zp(){return this.Vp.Qt().Xi().J(this.Vp.N().layout.textColor)>160?"dark":"light"}Ap(){return this.Vp.N().layout.attributionLogo}Lp(){const t=new URL(location.href);return t.hostname?"&utm_source="+t.hostname+t.pathname:""}Bp(){this.Ep()&&(this.Ip(),this.ps=this.Ap(),this.ps&&(this.Rp=this.zp(),this.Tp=document.createElement("style"),this.Tp.innerText="a#tv-attr-logo{--fill:#131722;--stroke:#fff;position:absolute;left:10px;bottom:10px;height:19px;width:35px;margin:0;padding:0;border:0;z-index:3;}a#tv-attr-logo[data-dark]{--fill:#D1D4DC;--stroke:#131722;}",this.kp=document.createElement("a"),this.kp.href=`https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart${this.Lp()}`,this.kp.title="Charting by TradingView",this.kp.id="tv-attr-logo",this.kp.target="_blank",this.kp.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="35" height="19" fill="none"><g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path fill="var(--stroke)" d="M2 0H0v10h6v9h21.4l.5-1.3 6-15 1-2.7H23.7l-.5 1.3-.2.6a5 5 0 0 0-7-.9V0H2Zm20 17h4l5.2-13 .8-2h-7l-1 2.5-.2.5-1.5 3.8-.3.7V17Zm-.8-10a3 3 0 0 0 .7-2.7A3 3 0 1 0 16.8 7h4.4ZM14 7V2H2v6h6v9h4V7h2Z"/><path fill="var(--fill)" d="M14 2H2v6h6v9h6V2Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></g><defs><clipPath id="a"><path fill="var(--stroke)" d="M0 0h35v19H0z"/></clipPath></defs></svg>',this.kp.toggleAttribute("data-dark",this.Rp==="dark"),this.Dp.appendChild(this.Tp),this.Dp.appendChild(this.kp)))}}function zi(i,t){const e=S(i.ownerDocument).createElement("canvas");i.appendChild(e);const s=ob(e,{options:{allowResizeObserver:!0},transform:(r,o)=>({width:Math.max(r.width,o.width),height:Math.max(r.height,o.height)})});return s.resizeCanvasElement(t),s}function Ei(i){i.width=1,i.height=1,i.getContext("2d")?.clearRect(0,0,1,1)}function Sn(i,t,e,s){i.ih&&i.ih(t,e,s)}function Ir(i,t,e,s){i.nt(t,e,s)}function $n(i,t,e,s){const r=i(e,s);for(const o of r){const n=o.Tt(s);n!==null&&t(n)}}function jo(i,t){return e=>(function(s){return s.Ft!==void 0})(e)?(e.Ft()?.ma()??"")!==t?[]:e.ta?.(i)??[]:[]}function Vl(i,t,e,s){if(!i.length)return;let r=0;const o=i[0].$t(s,!0);let n=t===1?e/2-(i[0].Fi()-o/2):i[0].Fi()-o/2-e/2;n=Math.max(0,n);for(let a=1;a<i.length;a++){const l=i[a],h=i[a-1],d=h.$t(s,!1),u=l.Fi(),p=h.Fi();if(t===1?u>p-d:u<p+d){const m=p-d*t;l.Wi(m);const g=m-t*d/2;if((t===1?g<0:g>e)&&n>0){const v=t===1?-1-g:g-e,b=Math.min(v,n);for(let x=r;x<i.length;x++)i[x].Wi(i[x].Fi()+t*b);n-=b}}else r=a,n=t===1?p-d-u:u-(p+d)}}class Fl{constructor(t,e,s,r){this.Yi=null,this.Op=null,this.Np=!1,this.Fp=new Kr(200),this.Wp=null,this.Hp=0,this.Up=!1,this.$p=()=>{this.Up||this.Pt.qp().Qt().ar()},this.Yp=()=>{this.Up||this.Pt.qp().Qt().ar()},this.Pt=t,this.Ps=e,this.Ml=e.layout,this.Ju=s,this.jp=r==="left",this.Kp=jo("normal",r),this.Xp=jo("top",r),this.Zp=jo("bottom",r),this.jf=document.createElement("div"),this.jf.style.height="100%",this.jf.style.overflow="hidden",this.jf.style.width="25px",this.jf.style.left="0",this.jf.style.position="relative",this.Gp=zi(this.jf,tt({width:16,height:16})),this.Gp.subscribeSuggestedBitmapSizeChanged(this.$p);const o=this.Gp.canvasElement;o.style.position="absolute",o.style.zIndex="1",o.style.left="0",o.style.top="0",this.Jp=zi(this.jf,tt({width:16,height:16})),this.Jp.subscribeSuggestedBitmapSizeChanged(this.Yp);const n=this.Jp.canvasElement;n.style.position="absolute",n.style.zIndex="2",n.style.left="0",n.style.top="0";const a={Sf:this.ep.bind(this),Mf:this.ep.bind(this),cf:this.rp.bind(this),_f:this.rp.bind(this),xf:this.Qp.bind(this),vf:this.hp.bind(this),ff:this.hp.bind(this),Xd:this.tv.bind(this),qd:this.tv.bind(this),sf:this.iv.bind(this),Bf:this.np.bind(this)};this.Nf=new yo(this.Jp.canvasElement,a,{af:()=>!this.Ps.handleScroll.vertTouchDrag,lf:()=>!0})}m(){this.Nf.m(),this.Jp.unsubscribeSuggestedBitmapSizeChanged(this.Yp),Ei(this.Jp.canvasElement),this.Jp.dispose(),this.Gp.unsubscribeSuggestedBitmapSizeChanged(this.$p),Ei(this.Gp.canvasElement),this.Gp.dispose(),this.Yi!==null&&this.Yi.so().u(this),this.Yi=null}Zf(){return this.jf}P(){return this.Ml.fontSize}sv(){const t=this.Ju.N();return this.Wp!==t.k&&(this.Fp.Bn(),this.Wp=t.k),t}nv(){if(this.Yi===null)return 0;let t=0;const e=this.sv(),s=S(this.Gp.canvasElement.getContext("2d",{colorSpace:this.Pt.qp().N().layout.colorSpace}));s.save();const r=this.Yi.Da();s.font=this.ev(),r.length>0&&(t=Math.max(this.Fp.Vi(s,r[0].Za),this.Fp.Vi(s,r[r.length-1].Za)));const o=this.rv();for(let h=o.length;h--;){const d=this.Fp.Vi(s,o[h].ri());d>t&&(t=d)}const n=this.Yi.zt();if(n!==null&&this.Op!==null&&(a=this.Ps.crosshair).mode!==2&&a.horzLine.visible&&a.horzLine.labelVisible){const h=this.Yi.Ts(1,n),d=this.Yi.Ts(this.Op.height-2,n);t=Math.max(t,this.Fp.Vi(s,this.Yi.Zi(Math.floor(Math.min(h,d))+.11111111111111,n)),this.Fp.Vi(s,this.Yi.Zi(Math.ceil(Math.max(h,d))-.11111111111111,n)))}var a;s.restore();const l=t||34;return Cn(Math.ceil(e.S+e.C+e.B+e.I+5+l))}hv(t){this.Op!==null&&vi(this.Op,t)||(this.Op=t,this.Up=!0,this.Gp.resizeCanvasElement(t),this.Jp.resizeCanvasElement(t),this.Up=!1,this.jf.style.width=`${t.width}px`,this.jf.style.height=`${t.height}px`)}av(){return S(this.Op).width}_s(t){this.Yi!==t&&(this.Yi!==null&&this.Yi.so().u(this),this.Yi=t,t.so().i(this._l.bind(this),this))}Ft(){return this.Yi}Bn(){const t=this.Pt.ap();this.Pt.qp().Qt().Zo(t,S(this.Ft()))}lv(t){if(this.Op===null)return;const e={colorSpace:this.Pt.qp().N().layout.colorSpace};if(t!==1){this.ov(),this.Gp.applySuggestedBitmapSize();const r=Si(this.Gp,e);r!==null&&(r.useBitmapCoordinateSpace((o=>{this._v(o),this.uv(o)})),this.Pt.cv(r,this.Zp),this.dv(r),this.Pt.cv(r,this.Kp),this.fv(r))}this.Jp.applySuggestedBitmapSize();const s=Si(this.Jp,e);s!==null&&(s.useBitmapCoordinateSpace((({context:r,bitmapSize:o})=>{r.clearRect(0,0,o.width,o.height)})),this.pv(s),this.Pt.cv(s,this.Xp))}Jf(){return this.Gp.bitmapSize}Qf(t,e,s,r){const o=this.Jf();if(o.width>0&&o.height>0&&(t.drawImage(this.Gp.canvasElement,e,s),r)){const n=this.Jp.canvasElement;t.drawImage(n,e,s)}}yt(){this.Yi?.Da()}ep(t){if(this.Yi===null||this.Yi.Ki()||!this.Ps.handleScale.axisPressedMouseMove.price)return;const e=this.Pt.qp().Qt(),s=this.Pt.ap();this.Np=!0,e.Uo(s,this.Yi,t.localY)}rp(t){if(this.Yi===null||!this.Ps.handleScale.axisPressedMouseMove.price)return;const e=this.Pt.qp().Qt(),s=this.Pt.ap(),r=this.Yi;e.$o(s,r,t.localY)}Qp(){if(this.Yi===null||!this.Ps.handleScale.axisPressedMouseMove.price)return;const t=this.Pt.qp().Qt(),e=this.Pt.ap(),s=this.Yi;this.Np&&(this.Np=!1,t.qo(e,s))}hp(t){if(this.Yi===null||!this.Ps.handleScale.axisPressedMouseMove.price)return;const e=this.Pt.qp().Qt(),s=this.Pt.ap();this.Np=!1,e.qo(s,this.Yi)}tv(t){this.Ps.handleScale.axisDoubleClickReset.price&&this.Bn()}iv(t){this.Yi!==null&&(!this.Pt.qp().Qt().N().handleScale.axisPressedMouseMove.price||this.Yi.Le()||this.Yi.Dl()||this.vv(1))}np(t){this.vv(0)}rv(){const t=[],e=this.Yi===null?void 0:this.Yi;return(s=>{for(let r=0;r<s.length;++r){const o=s[r].Ws(this.Pt.ap(),e);for(let n=0;n<o.length;n++)t.push(o[n])}})(this.Pt.ap().Dt()),t}_v({context:t,bitmapSize:e}){const{width:s,height:r}=e,o=this.Pt.ap().Qt(),n=o.$(),a=o.Wc();n===a?fo(t,0,0,s,r,n):Ec(t,0,0,s,r,n,a)}uv({context:t,bitmapSize:e,horizontalPixelRatio:s}){if(this.Op===null||this.Yi===null||!this.Yi.N().borderVisible)return;t.fillStyle=this.Yi.N().borderColor;const r=Math.max(1,Math.floor(this.sv().S*s));let o;o=this.jp?e.width-r:0,t.fillRect(o,0,r,e.height)}dv(t){if(this.Op===null||this.Yi===null)return;const e=this.Yi.Da(),s=this.Yi.N(),r=this.sv(),o=this.jp?this.Op.width-r.C:0;s.borderVisible&&s.ticksVisible&&t.useBitmapCoordinateSpace((({context:n,horizontalPixelRatio:a,verticalPixelRatio:l})=>{n.fillStyle=s.borderColor;const h=Math.max(1,Math.floor(l)),d=Math.floor(.5*l),u=Math.round(r.C*a);n.beginPath();for(const p of e)n.rect(Math.floor(o*a),Math.round(p.Pa*l)-d,u,h);n.fill()})),t.useMediaCoordinateSpace((({context:n})=>{n.font=this.ev(),n.fillStyle=s.textColor??this.Ml.textColor,n.textAlign=this.jp?"right":"left",n.textBaseline="middle";const a=this.jp?Math.round(o-r.B):Math.round(o+r.C+r.B),l=e.map((h=>this.Fp.Di(n,h.Za)));for(let h=e.length;h--;){const d=e[h];n.fillText(d.Za,a,d.Pa+l[h])}}))}ov(){if(this.Op===null||this.Yi===null)return;let t=this.Op.height/2;const e=[],s=this.Yi.Dt().slice(),r=this.Pt.ap(),o=this.sv();this.Yi===r.$n()&&this.Pt.ap().Dt().forEach((l=>{r.Un(l)&&s.push(l)}));const n=this.Yi.Ma()[0],a=this.Yi;s.forEach((l=>{const h=l.Ws(r,a);h.forEach((d=>{d.Wi(null),d.Hi()&&e.push(d)})),n===l&&h.length>0&&(t=h[0].Ii())})),e.forEach((l=>l.Wi(l.Ii()))),this.Yi.N().alignLabels&&this.mv(e,o,t)}mv(t,e,s){if(this.Op===null)return;const r=t.filter((n=>n.Ii()<=s)),o=t.filter((n=>n.Ii()>s));r.sort(((n,a)=>a.Ii()-n.Ii())),r.length&&o.length&&o.push(r[0]),o.sort(((n,a)=>n.Ii()-a.Ii()));for(const n of t){const a=Math.floor(n.$t(e)/2),l=n.Ii();l>-a&&l<a&&n.Wi(a),l>this.Op.height-a&&l<this.Op.height+a&&n.Wi(this.Op.height-a)}Vl(r,1,this.Op.height,e),Vl(o,-1,this.Op.height,e)}fv(t){if(this.Op===null)return;const e=this.rv(),s=this.sv(),r=this.jp?"right":"left";e.forEach((o=>{o.Ui()&&o.Tt(S(this.Yi)).nt(t,s,this.Fp,r)}))}pv(t){if(this.Op===null||this.Yi===null)return;const e=this.Pt.qp().Qt(),s=[],r=this.Pt.ap(),o=e.uc().Ws(r,this.Yi);o.length&&s.push(o);const n=this.sv(),a=this.jp?"right":"left";s.forEach((l=>{l.forEach((h=>{h.Tt(S(this.Yi)).nt(t,n,this.Fp,a)}))}))}vv(t){this.jf.style.cursor=t===1?"ns-resize":"default"}_l(){const t=this.nv();this.Hp<t&&this.Pt.qp().Qt().Ih(),this.Hp=t}ev(){return Gr(this.Ml.fontSize,this.Ml.fontFamily)}}function _0(i,t){return i.Jh?.(t)??[]}function Nl(i,t){return i.Fs?.(t)??[]}function Bl(i,t){return i.us?.(t)??[]}function w0(i,t){return i.Xh?.(t)??[]}class na{constructor(t,e){this.Op=tt({width:0,height:0}),this.wv=null,this.gv=null,this.Mv=null,this.bv=null,this.Sv=!1,this.xv=new dt,this.Cv=new dt,this.Pv=0,this.yv=!1,this.kv=null,this.Tv=!1,this.Rv=null,this.Dv=null,this.Up=!1,this.$p=()=>{this.Up||this.Vv===null||this.ts().ar()},this.Yp=()=>{this.Up||this.Vv===null||this.ts().ar()},this.Vp=t,this.Vv=e,this.Vv.t_().i(this.Bv.bind(this),this,!0),this.Iv=document.createElement("td"),this.Iv.style.padding="0",this.Iv.style.position="relative";const s=document.createElement("div");s.style.width="100%",s.style.height="100%",s.style.position="relative",s.style.overflow="hidden",this.Ev=document.createElement("td"),this.Ev.style.padding="0",this.Av=document.createElement("td"),this.Av.style.padding="0",this.Iv.appendChild(s),this.Gp=zi(s,tt({width:16,height:16})),this.Gp.subscribeSuggestedBitmapSizeChanged(this.$p);const r=this.Gp.canvasElement;r.style.position="absolute",r.style.zIndex="1",r.style.left="0",r.style.top="0",this.Jp=zi(s,tt({width:16,height:16})),this.Jp.subscribeSuggestedBitmapSizeChanged(this.Yp);const o=this.Jp.canvasElement;o.style.position="absolute",o.style.zIndex="2",o.style.left="0",o.style.top="0",this.Yf=document.createElement("tr"),this.Yf.appendChild(this.Ev),this.Yf.appendChild(this.Iv),this.Yf.appendChild(this.Av),this.zv(),this.Nf=new yo(this.Jp.canvasElement,this,{af:()=>this.kv===null&&!this.Vp.N().handleScroll.vertTouchDrag,lf:()=>this.kv===null&&!this.Vp.N().handleScroll.horzTouchDrag})}m(){this.wv!==null&&this.wv.m(),this.gv!==null&&this.gv.m(),this.Mv=null,this.Jp.unsubscribeSuggestedBitmapSizeChanged(this.Yp),Ei(this.Jp.canvasElement),this.Jp.dispose(),this.Gp.unsubscribeSuggestedBitmapSizeChanged(this.$p),Ei(this.Gp.canvasElement),this.Gp.dispose(),this.Vv!==null&&(this.Vv.t_().u(this),this.Vv.m()),this.Nf.m()}ap(){return S(this.Vv)}Lv(t){this.Vv!==null&&this.Vv.t_().u(this),this.Vv=t,this.Vv!==null&&this.Vv.t_().i(na.prototype.Bv.bind(this),this,!0),this.zv(),this.Vp.$f().indexOf(this)===this.Vp.$f().length-1?(this.Mv=this.Mv??new y0(this.Iv,this.Vp),this.Mv.yt()):(this.Mv?.Ip(),this.Mv=null)}qp(){return this.Vp}Zf(){return this.Yf}zv(){if(this.Vv!==null&&(this.Ov(),this.ts().js().length!==0)){if(this.wv!==null){const t=this.Vv.Wo();this.wv._s(S(t))}if(this.gv!==null){const t=this.Vv.Ho();this.gv._s(S(t))}}}Nv(){this.wv!==null&&this.wv.yt(),this.gv!==null&&this.gv.yt()}Bo(){return this.Vv!==null?this.Vv.Bo():0}Io(t){this.Vv&&this.Vv.Io(t)}sf(t){if(!this.Vv)return;this.Fv();const e=t.localX,s=t.localY;this.Wv(e,s,t)}Sf(t){this.Fv(),this.Hv(),this.Wv(t.localX,t.localY,t)}nf(t){if(!this.Vv)return;this.Fv();const e=t.localX,s=t.localY;this.Wv(e,s,t)}mf(t){this.Vv!==null&&(this.Fv(),this.Uv(t))}Xd(t){this.Vv!==null&&this.$v(this.Cv,t)}qd(t){this.Xd(t)}cf(t){this.Fv(),this.qv(t),this.Wv(t.localX,t.localY,t)}vf(t){this.Vv!==null&&(this.Fv(),this.yv=!1,this.Yv(t))}pf(t){this.Vv!==null&&this.Uv(t)}If(t){if(this.yv=!0,this.kv===null){const e={x:t.localX,y:t.localY};this.jv(e,e,t)}}Bf(t){this.Vv!==null&&(this.Fv(),this.Vv.Qt().lc(null),this.Kv())}Xv(){return this.xv}Zv(){return this.Cv}yf(){this.Pv=1,this.ts().hn()}kf(t,e){if(!this.Vp.N().handleScale.pinch)return;const s=5*(e-this.Pv);this.Pv=e,this.ts().bc(t._t,s)}Mf(t){this.yv=!1,this.Tv=this.kv!==null,this.Hv();const e=this.ts().uc();this.kv!==null&&e.Vt()&&(this.Rv={x:e.si(),y:e.ni()},this.kv={x:t.localX,y:t.localY})}_f(t){if(this.Vv===null)return;const e=t.localX,s=t.localY;if(this.kv===null)this.qv(t);else{this.Tv=!1;const r=S(this.Rv),o=r.x+(e-this.kv.x),n=r.y+(s-this.kv.y);this.Wv(o,n,t)}}ff(t){this.qp().N().trackingMode.exitMode===0&&(this.Tv=!0),this.Gv(),this.Yv(t)}jn(t,e){const s=this.Vv;return s===null?null:Fc(s,t,e)}Jv(t,e){S(e==="left"?this.wv:this.gv).hv(tt({width:t,height:this.Op.height}))}Gf(){return this.Op}hv(t){vi(this.Op,t)||(this.Op=t,this.Up=!0,this.Gp.resizeCanvasElement(t),this.Jp.resizeCanvasElement(t),this.Up=!1,this.Iv.style.width=t.width+"px",this.Iv.style.height=t.height+"px")}Qv(){const t=S(this.Vv);t.Fo(t.Wo()),t.Fo(t.Ho());for(const e of t.Ma())if(t.Un(e)){const s=e.Ft();s!==null&&t.Fo(s),e.Ns()}for(const e of t.s_())e.Ns()}Jf(){return this.Gp.bitmapSize}Qf(t,e,s,r){const o=this.Jf();if(o.width>0&&o.height>0&&(t.drawImage(this.Gp.canvasElement,e,s),r)){const n=this.Jp.canvasElement;t!==null&&t.drawImage(n,e,s)}}lv(t){if(t===0||this.Vv===null)return;t>1&&this.Qv(),this.wv!==null&&this.wv.lv(t),this.gv!==null&&this.gv.lv(t);const e={colorSpace:this.Vp.N().layout.colorSpace};if(t!==1){this.Gp.applySuggestedBitmapSize();const r=Si(this.Gp,e);r!==null&&(r.useBitmapCoordinateSpace((o=>{this._v(o)})),this.Vv&&(this.tm(r,_0),this.im(r),this.tm(r,Nl),this.tm(r,Bl)))}this.Jp.applySuggestedBitmapSize();const s=Si(this.Jp,e);s!==null&&(s.useBitmapCoordinateSpace((({context:r,bitmapSize:o})=>{r.clearRect(0,0,o.width,o.height)})),this.sm(s),this.tm(s,w0),this.tm(s,Bl))}nm(){return this.wv}rm(){return this.gv}cv(t,e){this.tm(t,e)}Bv(){this.Vv!==null&&this.Vv.t_().u(this),this.Vv=null}Uv(t){this.$v(this.xv,t)}$v(t,e){const s=e.localX,r=e.localY;t.v()&&t.p(this.ts().Et().cu(s),{x:s,y:r},e)}_v({context:t,bitmapSize:e}){const{width:s,height:r}=e,o=this.ts(),n=o.$(),a=o.Wc();n===a?fo(t,0,0,s,r,a):Ec(t,0,0,s,r,n,a)}im(t){const e=S(this.Vv),s=e.i_().lr().Tt(e);s!==null&&s.nt(t,!1)}sm(t){this.hm(t,Nl,Ir,this.ts().uc())}tm(t,e){const s=S(this.Vv),r=s.Dt(),o=s.s_();for(const n of o)this.hm(t,e,Sn,n);for(const n of r)this.hm(t,e,Sn,n);for(const n of o)this.hm(t,e,Ir,n);for(const n of r)this.hm(t,e,Ir,n)}hm(t,e,s,r){const o=S(this.Vv),n=o.Qt().ac(),a=n!==null&&n.n_===r,l=n!==null&&a&&n.e_!==void 0?n.e_.Xn:void 0;$n(e,(h=>s(h,t,a,l)),r,o)}Ov(){if(this.Vv===null)return;const t=this.Vp,e=this.Vv.Wo().N().visible,s=this.Vv.Ho().N().visible;e||this.wv===null||(this.Ev.removeChild(this.wv.Zf()),this.wv.m(),this.wv=null),s||this.gv===null||(this.Av.removeChild(this.gv.Zf()),this.gv.m(),this.gv=null);const r=t.Qt().Bc();e&&this.wv===null&&(this.wv=new Fl(this,t.N(),r,"left"),this.Ev.appendChild(this.wv.Zf())),s&&this.gv===null&&(this.gv=new Fl(this,t.N(),r,"right"),this.Av.appendChild(this.gv.Zf()))}am(t){return t.Ef&&this.yv||this.kv!==null}lm(t){return Math.max(0,Math.min(t,this.Op.width-1))}om(t){return Math.max(0,Math.min(t,this.Op.height-1))}Wv(t,e,s){this.ts().Tc(this.lm(t),this.om(e),s,S(this.Vv))}Kv(){this.ts().Dc()}Gv(){this.Tv&&(this.kv=null,this.Kv())}jv(t,e,s){this.kv=t,this.Tv=!1,this.Wv(e.x,e.y,s);const r=this.ts().uc();this.Rv={x:r.si(),y:r.ni()}}ts(){return this.Vp.Qt()}Yv(t){if(!this.Sv)return;const e=this.ts(),s=this.ap();if(e.Ko(s,s.ks()),this.bv=null,this.Sv=!1,e.Pc(),this.Dv!==null){const r=performance.now(),o=e.Et();this.Dv.le(o.gu(),r),this.Dv.Ru(r)||e._n(this.Dv)}}Fv(){this.kv=null}Hv(){if(this.Vv){if(this.ts().hn(),document.activeElement!==document.body&&document.activeElement!==document.documentElement)S(document.activeElement).blur();else{const t=document.getSelection();t!==null&&t.removeAllRanges()}!this.Vv.ks().Ki()&&this.ts().Et().Ki()}}qv(t){if(this.Vv===null)return;const e=this.ts(),s=e.Et();if(s.Ki())return;const r=this.Vp.N(),o=r.handleScroll,n=r.kineticScroll;if((!o.pressedMouseMove||t.Ef)&&(!o.horzTouchDrag&&!o.vertTouchDrag||!t.Ef))return;const a=this.Vv.ks(),l=performance.now();if(this.bv!==null||this.am(t)||(this.bv={x:t.clientX,y:t.clientY,rd:l,_m:t.localX,um:t.localY}),this.bv!==null&&!this.Sv&&(this.bv.x!==t.clientX||this.bv.y!==t.clientY)){if(t.Ef&&n.touch||!t.Ef&&n.mouse){const h=s.mu();this.Dv=new b0(.2/h,7/h,.997,15/h),this.Dv.Pp(s.gu(),this.bv.rd)}else this.Dv=null;a.Ki()||e.Yo(this.Vv,a,t.localY),e.xc(t.localX),this.Sv=!0}this.Sv&&(a.Ki()||e.jo(this.Vv,a,t.localY),e.Cc(t.localX),this.Dv!==null&&this.Dv.Pp(s.gu(),l))}}class Hl{constructor(t,e,s,r,o){this.xt=!0,this.Op=tt({width:0,height:0}),this.$p=()=>this.lv(3),this.jp=t==="left",this.Ju=s.Bc,this.Ps=e,this.dm=r,this.fm=o,this.jf=document.createElement("div"),this.jf.style.width="25px",this.jf.style.height="100%",this.jf.style.overflow="hidden",this.Gp=zi(this.jf,tt({width:16,height:16})),this.Gp.subscribeSuggestedBitmapSizeChanged(this.$p)}m(){this.Gp.unsubscribeSuggestedBitmapSizeChanged(this.$p),Ei(this.Gp.canvasElement),this.Gp.dispose()}Zf(){return this.jf}Gf(){return this.Op}hv(t){vi(this.Op,t)||(this.Op=t,this.Gp.resizeCanvasElement(t),this.jf.style.width=`${t.width}px`,this.jf.style.height=`${t.height}px`,this.xt=!0)}lv(t){if(t<3&&!this.xt||this.Op.width===0||this.Op.height===0)return;this.xt=!1,this.Gp.applySuggestedBitmapSize();const e=Si(this.Gp,{colorSpace:this.Ps.layout.colorSpace});e!==null&&e.useBitmapCoordinateSpace((s=>{this._v(s),this.uv(s)}))}Jf(){return this.Gp.bitmapSize}Qf(t,e,s){const r=this.Jf();r.width>0&&r.height>0&&t.drawImage(this.Gp.canvasElement,e,s)}uv({context:t,bitmapSize:e,horizontalPixelRatio:s,verticalPixelRatio:r}){if(!this.dm())return;t.fillStyle=this.Ps.timeScale.borderColor;const o=Math.floor(this.Ju.N().S*s),n=Math.floor(this.Ju.N().S*r),a=this.jp?e.width-o:0;t.fillRect(a,0,o,n)}_v({context:t,bitmapSize:e}){fo(t,0,0,e.width,e.height,this.fm())}}function aa(i){return t=>t.ia?.(i)??[]}const x0=aa("normal"),k0=aa("top"),C0=aa("bottom");class S0{constructor(t,e){this.pm=null,this.vm=null,this.M=null,this.wm=!1,this.Op=tt({width:0,height:0}),this.gm=new dt,this.Fp=new Kr(5),this.Up=!1,this.$p=()=>{this.Up||this.Vp.Qt().ar()},this.Yp=()=>{this.Up||this.Vp.Qt().ar()},this.Vp=t,this.o_=e,this.Ps=t.N().layout,this.kp=document.createElement("tr"),this.Mm=document.createElement("td"),this.Mm.style.padding="0",this.bm=document.createElement("td"),this.bm.style.padding="0",this.jf=document.createElement("td"),this.jf.style.height="25px",this.jf.style.padding="0",this.Sm=document.createElement("div"),this.Sm.style.width="100%",this.Sm.style.height="100%",this.Sm.style.position="relative",this.Sm.style.overflow="hidden",this.jf.appendChild(this.Sm),this.Gp=zi(this.Sm,tt({width:16,height:16})),this.Gp.subscribeSuggestedBitmapSizeChanged(this.$p);const s=this.Gp.canvasElement;s.style.position="absolute",s.style.zIndex="1",s.style.left="0",s.style.top="0",this.Jp=zi(this.Sm,tt({width:16,height:16})),this.Jp.subscribeSuggestedBitmapSizeChanged(this.Yp);const r=this.Jp.canvasElement;r.style.position="absolute",r.style.zIndex="2",r.style.left="0",r.style.top="0",this.kp.appendChild(this.Mm),this.kp.appendChild(this.jf),this.kp.appendChild(this.bm),this.xm(),this.Vp.Qt().Vo().i(this.xm.bind(this),this),this.Nf=new yo(this.Jp.canvasElement,this,{af:()=>!0,lf:()=>!this.Vp.N().handleScroll.horzTouchDrag})}m(){this.Nf.m(),this.pm!==null&&this.pm.m(),this.vm!==null&&this.vm.m(),this.Jp.unsubscribeSuggestedBitmapSizeChanged(this.Yp),Ei(this.Jp.canvasElement),this.Jp.dispose(),this.Gp.unsubscribeSuggestedBitmapSizeChanged(this.$p),Ei(this.Gp.canvasElement),this.Gp.dispose()}Zf(){return this.kp}Cm(){return this.pm}Pm(){return this.vm}Sf(t){if(this.wm)return;this.wm=!0;const e=this.Vp.Qt();!e.Et().Ki()&&this.Vp.N().handleScale.axisPressedMouseMove.time&&e.Mc(t.localX)}Mf(t){this.Sf(t)}xf(){const t=this.Vp.Qt();!t.Et().Ki()&&this.wm&&(this.wm=!1,this.Vp.N().handleScale.axisPressedMouseMove.time&&t.kc())}cf(t){const e=this.Vp.Qt();!e.Et().Ki()&&this.Vp.N().handleScale.axisPressedMouseMove.time&&e.yc(t.localX)}_f(t){this.cf(t)}vf(){this.wm=!1;const t=this.Vp.Qt();t.Et().Ki()&&!this.Vp.N().handleScale.axisPressedMouseMove.time||t.kc()}ff(){this.vf()}Xd(){this.Vp.N().handleScale.axisDoubleClickReset.time&&this.Vp.Qt().cn()}qd(){this.Xd()}sf(){this.Vp.Qt().N().handleScale.axisPressedMouseMove.time&&this.vv(1)}Bf(){this.vv(0)}Gf(){return this.Op}ym(){return this.gm}km(t,e,s){vi(this.Op,t)||(this.Op=t,this.Up=!0,this.Gp.resizeCanvasElement(t),this.Jp.resizeCanvasElement(t),this.Up=!1,this.jf.style.width=`${t.width}px`,this.jf.style.height=`${t.height}px`,this.gm.p(t)),this.pm!==null&&this.pm.hv(tt({width:e,height:t.height})),this.vm!==null&&this.vm.hv(tt({width:s,height:t.height}))}Tm(){const t=this.Rm();return Math.ceil(t.S+t.C+t.P+t.A+t.V+t.Dm)}yt(){this.Vp.Qt().Et().Da()}Jf(){return this.Gp.bitmapSize}Qf(t,e,s,r){const o=this.Jf();if(o.width>0&&o.height>0&&(t.drawImage(this.Gp.canvasElement,e,s),r)){const n=this.Jp.canvasElement;t.drawImage(n,e,s)}}lv(t){if(t===0)return;const e={colorSpace:this.Ps.colorSpace};if(t!==1){this.Gp.applySuggestedBitmapSize();const r=Si(this.Gp,e);r!==null&&(r.useBitmapCoordinateSpace((o=>{this._v(o),this.uv(o),this.Vm(r,C0)})),this.dv(r),this.Vm(r,x0)),this.pm!==null&&this.pm.lv(t),this.vm!==null&&this.vm.lv(t)}this.Jp.applySuggestedBitmapSize();const s=Si(this.Jp,e);s!==null&&(s.useBitmapCoordinateSpace((({context:r,bitmapSize:o})=>{r.clearRect(0,0,o.width,o.height)})),this.Bm([...this.Vp.Qt().js(),this.Vp.Qt().uc()],s),this.Vm(s,k0))}Vm(t,e){const s=this.Vp.Qt().js();for(const r of s)$n(e,(o=>Sn(o,t,!1,void 0)),r,void 0);for(const r of s)$n(e,(o=>Ir(o,t,!1,void 0)),r,void 0)}_v({context:t,bitmapSize:e}){fo(t,0,0,e.width,e.height,this.Vp.Qt().Wc())}uv({context:t,bitmapSize:e,verticalPixelRatio:s}){if(this.Vp.N().timeScale.borderVisible){t.fillStyle=this.Im();const r=Math.max(1,Math.floor(this.Rm().S*s));t.fillRect(0,0,e.width,r)}}dv(t){const e=this.Vp.Qt().Et(),s=e.Da();if(!s||s.length===0)return;const r=this.o_.maxTickMarkWeight(s),o=this.Rm(),n=e.N();n.borderVisible&&n.ticksVisible&&t.useBitmapCoordinateSpace((({context:a,horizontalPixelRatio:l,verticalPixelRatio:h})=>{a.strokeStyle=this.Im(),a.fillStyle=this.Im();const d=Math.max(1,Math.floor(l)),u=Math.floor(.5*l);a.beginPath();const p=Math.round(o.C*h);for(let m=s.length;m--;){const g=Math.round(s[m].coord*l);a.rect(g-u,0,d,p)}a.fill()})),t.useMediaCoordinateSpace((({context:a})=>{const l=o.S+o.C+o.A+o.P/2;a.textAlign="center",a.textBaseline="middle",a.fillStyle=this.H(),a.font=this.ev();for(const h of s)if(h.weight<r){const d=h.needAlignCoordinate?this.Em(a,h.coord,h.label):h.coord;a.fillText(h.label,d,l)}this.Vp.N().timeScale.allowBoldLabels&&(a.font=this.Am());for(const h of s)if(h.weight>=r){const d=h.needAlignCoordinate?this.Em(a,h.coord,h.label):h.coord;a.fillText(h.label,d,l)}}))}Em(t,e,s){const r=this.Fp.Vi(t,s),o=r/2,n=Math.floor(e-o)+.5;return n<0?e+=Math.abs(0-n):n+r>this.Op.width&&(e-=Math.abs(this.Op.width-(n+r))),e}Bm(t,e){const s=this.Rm();for(const r of t)for(const o of r.cs())o.Tt().nt(e,s)}Im(){return this.Vp.N().timeScale.borderColor}H(){return this.Ps.textColor}F(){return this.Ps.fontSize}ev(){return Gr(this.F(),this.Ps.fontFamily)}Am(){return Gr(this.F(),this.Ps.fontFamily,"bold")}Rm(){this.M===null&&(this.M={S:1,L:NaN,A:NaN,V:NaN,Ji:NaN,C:5,P:NaN,k:"",Gi:new Kr,Dm:0});const t=this.M,e=this.ev();if(t.k!==e){const s=this.F();t.P=s,t.k=e,t.A=3*s/12,t.V=3*s/12,t.Ji=9*s/12,t.L=0,t.Dm=4*s/12,t.Gi.Bn()}return this.M}vv(t){this.jf.style.cursor=t===1?"ew-resize":"default"}xm(){const t=this.Vp.Qt(),e=t.N();e.leftPriceScale.visible||this.pm===null||(this.Mm.removeChild(this.pm.Zf()),this.pm.m(),this.pm=null),e.rightPriceScale.visible||this.vm===null||(this.bm.removeChild(this.vm.Zf()),this.vm.m(),this.vm=null);const s={Bc:this.Vp.Qt().Bc()},r=()=>e.leftPriceScale.borderVisible&&t.Et().N().borderVisible,o=()=>t.Wc();e.leftPriceScale.visible&&this.pm===null&&(this.pm=new Hl("left",e,s,r,o),this.Mm.appendChild(this.pm.Zf())),e.rightPriceScale.visible&&this.vm===null&&(this.vm=new Hl("right",e,s,r,o),this.bm.appendChild(this.vm.Zf()))}}const $0=!!as&&!!navigator.userAgentData&&navigator.userAgentData.brands.some((i=>i.brand.includes("Chromium")))&&!!as&&(navigator?.userAgentData?.platform?navigator.userAgentData.platform==="Windows":navigator.userAgent.toLowerCase().indexOf("win")>=0);class z0{constructor(t,e,s){var r;this.zm=[],this.Lm=[],this.Om=0,this.il=0,this.Mo=0,this.Nm=0,this.Fm=0,this.Wm=null,this.Hm=!1,this.xv=new dt,this.Cv=new dt,this.Xu=new dt,this.Um=null,this.$m=null,this.Dp=t,this.Ps=e,this.o_=s,this.kp=document.createElement("div"),this.kp.classList.add("tv-lightweight-charts"),this.kp.style.overflow="hidden",this.kp.style.direction="ltr",this.kp.style.width="100%",this.kp.style.height="100%",(r=this.kp).style.userSelect="none",r.style.webkitUserSelect="none",r.style.msUserSelect="none",r.style.MozUserSelect="none",r.style.webkitTapHighlightColor="transparent",this.qm=document.createElement("table"),this.qm.setAttribute("cellspacing","0"),this.kp.appendChild(this.qm),this.Ym=this.jm.bind(this),Go(this.Ps)&&this.Km(!0),this.ts=new u0(this.Gu.bind(this),this.Ps,s),this.Qt().cc().i(this.Xm.bind(this),this),this.Zm=new S0(this,this.o_),this.qm.appendChild(this.Zm.Zf());const o=e.autoSize&&this.Gm();let n=this.Ps.width,a=this.Ps.height;if(o||n===0||a===0){const l=t.getBoundingClientRect();n=n||l.width,a=a||l.height}this.Jm(n,a),this.Qm(),t.appendChild(this.kp),this.tw(),this.ts.Et().Iu().i(this.ts.Ih.bind(this.ts),this),this.ts.Vo().i(this.ts.Ih.bind(this.ts),this)}Qt(){return this.ts}N(){return this.Ps}$f(){return this.zm}iw(){return this.Zm}m(){this.Km(!1),this.Om!==0&&window.cancelAnimationFrame(this.Om),this.ts.cc().u(this),this.ts.Et().Iu().u(this),this.ts.Vo().u(this),this.ts.m();for(const t of this.zm)this.qm.removeChild(t.Zf()),t.Xv().u(this),t.Zv().u(this),t.m();this.zm=[];for(const t of this.Lm)this.sw(t);this.Lm=[],S(this.Zm).m(),this.kp.parentElement!==null&&this.kp.parentElement.removeChild(this.kp),this.Xu.m(),this.xv.m(),this.Cv.m(),this.nw()}Jm(t,e,s=!1){if(this.il===e&&this.Mo===t)return;const r=(function(a){const l=Math.floor(a.width),h=Math.floor(a.height);return tt({width:l-l%2,height:h-h%2})})(tt({width:t,height:e}));this.il=r.height,this.Mo=r.width;const o=this.il+"px",n=this.Mo+"px";S(this.kp).style.height=o,S(this.kp).style.width=n,this.qm.style.height=o,this.qm.style.width=n,s?this.ew(Ct.gn(),performance.now()):this.ts.Ih()}lv(t){t===void 0&&(t=Ct.gn());for(let e=0;e<this.zm.length;e++)this.zm[e].lv(t.en(e).tn);this.Ps.timeScale.visible&&this.Zm.lv(t.nn())}hr(t){const e=Go(this.Ps);this.ts.hr(t);const s=Go(this.Ps);s!==e&&this.Km(s),t.layout?.panes&&this.rw(),this.tw(),this.hw(t)}Xv(){return this.xv}Zv(){return this.Cv}cc(){return this.Xu}aw(t=!1){this.Wm!==null&&(this.ew(this.Wm,performance.now()),this.Wm=null);const e=this.lw(null),s=document.createElement("canvas");s.width=e.width,s.height=e.height;const r=S(s.getContext("2d"));return this.lw(r,t),s}ow(t){return t==="left"&&!this._w()||t==="right"&&!this.uw()||this.zm.length===0?0:S(t==="left"?this.zm[0].nm():this.zm[0].rm()).av()}cw(){return this.Ps.autoSize&&this.Um!==null}ip(){return this.kp}dw(t){this.$m=t,this.$m?this.ip().style.setProperty("cursor",t):this.ip().style.removeProperty("cursor")}fw(){return this.$m}pw(t){return qt(this.zm[t]).Gf()}rw(){this.Lm.forEach((t=>{t.yt()}))}hw(t){(t.autoSize!==void 0||!this.Um||t.width===void 0&&t.height===void 0)&&(t.autoSize&&!this.Um&&this.Gm(),t.autoSize===!1&&this.Um!==null&&this.nw(),t.autoSize||t.width===void 0&&t.height===void 0||this.Jm(t.width||this.Mo,t.height||this.il))}lw(t,e){let s=0,r=0;const o=this.zm[0],n=(l,h)=>{let d=0;for(let u=0;u<this.zm.length;u++){const p=this.zm[u],m=S(l==="left"?p.nm():p.rm()),g=m.Jf();if(t!==null&&m.Qf(t,h,d,e),d+=g.height,u<this.zm.length-1){const v=this.Lm[u],b=v.Jf();t!==null&&v.Qf(t,h,d),d+=b.height}}};this._w()&&(n("left",0),s+=S(o.nm()).Jf().width);for(let l=0;l<this.zm.length;l++){const h=this.zm[l],d=h.Jf();if(t!==null&&h.Qf(t,s,r,e),r+=d.height,l<this.zm.length-1){const u=this.Lm[l],p=u.Jf();t!==null&&u.Qf(t,s,r),r+=p.height}}s+=o.Jf().width,this.uw()&&(n("right",s),s+=S(o.rm()).Jf().width);const a=(l,h,d)=>{S(l==="left"?this.Zm.Cm():this.Zm.Pm()).Qf(S(t),h,d)};if(this.Ps.timeScale.visible){const l=this.Zm.Jf();if(t!==null){let h=0;this._w()&&(a("left",h,r),h=S(o.nm()).Jf().width),this.Zm.Qf(t,h,r,e),h+=l.width,this.uw()&&a("right",h,r)}r+=l.height}return tt({width:s,height:r})}mw(){let t=0,e=0,s=0;for(const b of this.zm)this._w()&&(e=Math.max(e,S(b.nm()).nv(),this.Ps.leftPriceScale.minimumWidth)),this.uw()&&(s=Math.max(s,S(b.rm()).nv(),this.Ps.rightPriceScale.minimumWidth)),t+=b.Bo();e=Cn(e),s=Cn(s);const r=this.Mo,o=this.il,n=Math.max(r-e-s,0),a=1*this.Lm.length,l=this.Ps.timeScale.visible;let h=l?Math.max(this.Zm.Tm(),this.Ps.timeScale.minimumHeight):0;var d;h=(d=h)+d%2;const u=a+h,p=o<u?0:o-u,m=p/t;let g=0;const v=window.devicePixelRatio||1;for(let b=0;b<this.zm.length;++b){const x=this.zm[b];x.Lv(this.ts.$s()[b]);let y=0,k=0;k=b===this.zm.length-1?Math.ceil((p-g)*v)/v:Math.round(x.Bo()*m*v)/v,y=Math.max(k,2),g+=y,x.hv(tt({width:n,height:y})),this._w()&&x.Jv(e,"left"),this.uw()&&x.Jv(s,"right"),x.ap()&&this.ts.dc(x.ap(),y)}this.Zm.km(tt({width:l?n:0,height:h}),l?e:0,l?s:0),this.ts.Eo(n),this.Nm!==e&&(this.Nm=e),this.Fm!==s&&(this.Fm=s)}Km(t){t?this.kp.addEventListener("wheel",this.Ym,{passive:!1}):this.kp.removeEventListener("wheel",this.Ym)}ww(t){switch(t.deltaMode){case t.DOM_DELTA_PAGE:return 120;case t.DOM_DELTA_LINE:return 32}return $0?1/window.devicePixelRatio:1}jm(t){if(!(t.deltaX!==0&&this.Ps.handleScroll.mouseWheel||t.deltaY!==0&&this.Ps.handleScale.mouseWheel))return;const e=this.ww(t),s=e*t.deltaX/100,r=-e*t.deltaY/100;if(t.cancelable&&t.preventDefault(),r!==0&&this.Ps.handleScale.mouseWheel){const o=Math.sign(r)*Math.min(1,Math.abs(r)),n=t.clientX-this.kp.getBoundingClientRect().left;this.Qt().bc(n,o)}s!==0&&this.Ps.handleScroll.mouseWheel&&this.Qt().Sc(-80*s)}ew(t,e){const s=t.nn();s===3&&this.gw(),s!==3&&s!==2||(this.Mw(t),this.bw(t,e),this.Zm.yt(),this.zm.forEach((r=>{r.Nv()})),this.Wm?.nn()===3&&(this.Wm.vn(t),this.gw(),this.Mw(this.Wm),this.bw(this.Wm,e),t=this.Wm,this.Wm=null)),this.lv(t)}bw(t,e){for(const s of t.pn())this.mn(s,e)}Mw(t){const e=this.ts.$s();for(let s=0;s<e.length;s++)t.en(s).sn&&e[s].Go()}mn(t,e){const s=this.ts.Et();switch(t.an){case 0:s.Au();break;case 1:s.zu(t.Wt);break;case 2:s.dn(t.Wt);break;case 3:s.fn(t.Wt);break;case 4:s.Su();break;case 5:t.Wt.Ru(e)||s.fn(t.Wt.Du(e))}}Gu(t){this.Wm!==null?this.Wm.vn(t):this.Wm=t,this.Hm||(this.Hm=!0,this.Om=window.requestAnimationFrame((e=>{if(this.Hm=!1,this.Om=0,this.Wm!==null){const s=this.Wm;this.Wm=null,this.ew(s,e);for(const r of s.pn())if(r.an===5&&!r.Wt.Ru(e)){this.Qt()._n(r.Wt);break}}})))}gw(){this.Qm()}sw(t){this.qm.removeChild(t.Zf()),t.m()}Qm(){const t=this.ts.$s(),e=t.length,s=this.zm.length;for(let r=e;r<s;r++){const o=qt(this.zm.pop());this.qm.removeChild(o.Zf()),o.Xv().u(this),o.Zv().u(this),o.m();const n=this.Lm.pop();n!==void 0&&this.sw(n)}for(let r=s;r<e;r++){const o=new na(this,t[r]);if(o.Xv().i(this.Sw.bind(this,o),this),o.Zv().i(this.xw.bind(this,o),this),this.zm.push(o),r>0){const n=new v0(this,r-1,r);this.Lm.push(n),this.qm.insertBefore(n.Zf(),this.Zm.Zf())}this.qm.insertBefore(o.Zf(),this.Zm.Zf())}for(let r=0;r<e;r++){const o=t[r],n=this.zm[r];n.ap()!==o?n.Lv(o):n.zv()}this.tw(),this.mw()}Cw(t,e,s,r){const o=new Map;t!==null&&this.ts.js().forEach((u=>{const p=u.Xs().Fr(t);p!==null&&o.set(u,p)}));let n;if(t!==null){const u=this.ts.Et().ss(t)?.originalTime;u!==void 0&&(n=u)}const a=this.Qt().ac(),l=a!==null&&a.n_ instanceof bo?a.n_:void 0,h=a!==null&&a.e_!==void 0?a.e_.Kn:void 0,d=this.Pw(r);return{yw:n,Re:t??void 0,kw:e??void 0,Tw:d!==-1?d:void 0,Rw:l,Dw:o,Vw:h,Bw:s??void 0}}Pw(t){let e=-1;if(t)e=this.zm.indexOf(t);else{const s=this.Qt().uc().Us();s!==null&&(e=this.Qt().$s().indexOf(s))}return e}Sw(t,e,s,r){this.xv.p((()=>this.Cw(e,s,r,t)))}xw(t,e,s,r){this.Cv.p((()=>this.Cw(e,s,r,t)))}Xm(t,e,s){this.dw(this.Qt().ac()?.h_??null),this.Xu.p((()=>this.Cw(t,e,s)))}tw(){const t=this.Ps.timeScale.visible?"":"none";this.Zm.Zf().style.display=t}_w(){return this.zm[0].ap().Wo().N().visible}uw(){return this.zm[0].ap().Ho().N().visible}Gm(){return"ResizeObserver"in window&&(this.Um=new ResizeObserver((t=>{const e=t[t.length-1];e&&this.Jm(e.contentRect.width,e.contentRect.height)})),this.Um.observe(this.Dp,{box:"border-box"}),!0)}nw(){this.Um!==null&&this.Um.disconnect(),this.Um=null}}function Go(i){return!!(i.handleScroll.mouseWheel||i.handleScale.mouseWheel)}function E0(i){return i.open===void 0&&i.value===void 0}function P0(i){return(function(t){return t.open!==void 0})(i)||(function(t){return t.value!==void 0})(i)}function Ul(i,t,e,s){const r=e.value,o={Re:t,wt:i,Wt:[r,r,r,r],yw:s};return e.color!==void 0&&(o.R=e.color),o}function M0(i,t,e,s){const r=e.value,o={Re:t,wt:i,Wt:[r,r,r,r],yw:s};return e.lineColor!==void 0&&(o.vt=e.lineColor),e.topColor!==void 0&&(o.mr=e.topColor),e.bottomColor!==void 0&&(o.wr=e.bottomColor),o}function A0(i,t,e,s){const r=e.value,o={Re:t,wt:i,Wt:[r,r,r,r],yw:s};return e.topLineColor!==void 0&&(o.gr=e.topLineColor),e.bottomLineColor!==void 0&&(o.Mr=e.bottomLineColor),e.topFillColor1!==void 0&&(o.br=e.topFillColor1),e.topFillColor2!==void 0&&(o.Sr=e.topFillColor2),e.bottomFillColor1!==void 0&&(o.Cr=e.bottomFillColor1),e.bottomFillColor2!==void 0&&(o.Pr=e.bottomFillColor2),o}function T0(i,t,e,s){const r={Re:t,wt:i,Wt:[e.open,e.high,e.low,e.close],yw:s};return e.color!==void 0&&(r.R=e.color),r}function O0(i,t,e,s){const r={Re:t,wt:i,Wt:[e.open,e.high,e.low,e.close],yw:s};return e.color!==void 0&&(r.R=e.color),e.borderColor!==void 0&&(r.Ht=e.borderColor),e.wickColor!==void 0&&(r.vr=e.wickColor),r}function R0(i,t,e,s,r){const o=qt(r)(e),n=Math.max(...o),a=Math.min(...o),l=o[o.length-1],h=[l,n,a,l],{time:d,color:u,...p}=e;return{Re:t,wt:i,Wt:h,yw:s,se:p,R:u}}function Ps(i){return i.Wt!==void 0}function Wl(i,t){return t.customValues!==void 0&&(i.Iw=t.customValues),i}function ci(i){return(t,e,s,r,o,n)=>(function(a,l){return l?l(a):E0(a)})(s,n)?Wl({wt:t,Re:e,yw:r},s):Wl(i(t,e,s,r,o),s)}function Yl(i){return{Candlestick:ci(O0),Bar:ci(T0),Area:ci(M0),Baseline:ci(A0),Histogram:ci(Ul),Line:ci(Ul),Custom:ci(R0)}[i]}function ql(i){return{Re:0,Ew:new Map,Hh:i}}function jl(i,t){if(i!==void 0&&i.length!==0)return{Aw:t.key(i[0].wt),zw:t.key(i[i.length-1].wt)}}function Gl(i){let t;return i.forEach((e=>{t===void 0&&(t=e.yw)})),qt(t)}class I0{constructor(t){this.Lw=new Map,this.Ow=new Map,this.Nw=new Map,this.Fw=[],this.o_=t}m(){this.Lw.clear(),this.Ow.clear(),this.Nw.clear(),this.Fw=[]}Ww(t,e){let s=this.Lw.size!==0,r=!1;const o=this.Ow.get(t);if(o!==void 0)if(this.Ow.size===1)s=!1,r=!0,this.Lw.clear();else for(const l of this.Fw)l.pointData.Ew.delete(t)&&(r=!0);let n=[];if(e.length!==0){const l=e.map((m=>m.time)),h=this.o_.createConverterToInternalObj(e),d=Yl(t.Rr()),u=t.ca(),p=t.fa();n=e.map(((m,g)=>{const v=h(m.time),b=this.o_.key(v);let x=this.Lw.get(b);x===void 0&&(x=ql(v),this.Lw.set(b,x),r=!0);const y=d(v,x.Re,m,l[g],u,p);return x.Ew.set(t,y),y}))}s&&this.Hw(),this.Uw(t,n);let a=-1;if(r){const l=[];this.Lw.forEach((h=>{l.push({timeWeight:0,time:h.Hh,pointData:h,originalTime:Gl(h.Ew)})})),l.sort(((h,d)=>this.o_.key(h.time)-this.o_.key(d.time))),a=this.$w(l)}return this.qw(t,a,(function(l,h,d){const u=jl(l,d),p=jl(h,d);if(u!==void 0&&p!==void 0)return{Yw:!1,zh:u.zw>=p.zw&&u.Aw>=p.Aw}})(this.Ow.get(t),o,this.o_))}Ac(t){return this.Ww(t,[])}jw(t,e,s){const r=e;(function(b){b.yw===void 0&&(b.yw=b.time)})(r),this.o_.preprocessData(e);const o=this.o_.createConverterToInternalObj([e])(e.time),n=this.Nw.get(t);if(!s&&n!==void 0&&this.o_.key(o)<this.o_.key(n))throw new Error(`Cannot update oldest data, last time=${n}, new time=${o}`);let a=this.Lw.get(this.o_.key(o));if(s&&a===void 0)throw new Error("Cannot update non-existing data point when historicalUpdate is true");const l=a===void 0;a===void 0&&(a=ql(o),this.Lw.set(this.o_.key(o),a));const h=Yl(t.Rr()),d=t.ca(),u=t.fa(),p=h(o,a.Re,e,r.yw,d,u);a.Ew.set(t,p),s?this.Kw(t,p,a.Re):this.Xw(t,p);const m={zh:Ps(p),Yw:s};if(!l)return this.qw(t,-1,m);const g={timeWeight:0,time:a.Hh,pointData:a,originalTime:Gl(a.Ew)},v=ns(this.Fw,this.o_.key(g.time),((b,x)=>this.o_.key(b.time)<x));this.Fw.splice(v,0,g);for(let b=v;b<this.Fw.length;++b)Pr(this.Fw[b].pointData,b);return this.o_.fillWeightsForPoints(this.Fw,v),this.qw(t,v,m)}Zw(t,e){const s=this.Ow.get(t);if(s===void 0||e<=0)return[[],this.Gw()];e=Math.min(e,s.length);const r=s.splice(-e).reverse();s.length===0?this.Nw.delete(t):this.Nw.set(t,s[s.length-1].wt);for(const o of r){const n=this.Lw.get(this.o_.key(o.wt));if(n&&(n.Ew.delete(t),n.Ew.size===0)){this.Lw.delete(this.o_.key(n.Hh)),this.Fw.splice(n.Re,1);for(let a=n.Re;a<this.Fw.length;++a)Pr(this.Fw[a].pointData,a)}}return[r,this.qw(t,this.Fw.length-1,{Yw:!1,zh:!1})]}Xw(t,e){let s=this.Ow.get(t);s===void 0&&(s=[],this.Ow.set(t,s));const r=s.length!==0?s[s.length-1]:null;r===null||this.o_.key(e.wt)>this.o_.key(r.wt)?Ps(e)&&s.push(e):Ps(e)?s[s.length-1]=e:s.splice(-1,1),this.Nw.set(t,e.wt)}Kw(t,e,s){const r=this.Ow.get(t);if(r===void 0)return;const o=ns(r,s,((n,a)=>n.Re<a));Ps(e)?r[o]=e:r.splice(o,1)}Uw(t,e){e.length!==0?(this.Ow.set(t,e.filter(Ps)),this.Nw.set(t,e[e.length-1].wt)):(this.Ow.delete(t),this.Nw.delete(t))}Hw(){for(const t of this.Fw)t.pointData.Ew.size===0&&this.Lw.delete(this.o_.key(t.time))}$w(t){let e=-1;for(let s=0;s<this.Fw.length&&s<t.length;++s){const r=this.Fw[s],o=t[s];if(this.o_.key(r.time)!==this.o_.key(o.time)){e=s;break}o.timeWeight=r.timeWeight,Pr(o.pointData,s)}if(e===-1&&this.Fw.length!==t.length&&(e=Math.min(this.Fw.length,t.length)),e===-1)return-1;for(let s=e;s<t.length;++s)Pr(t[s].pointData,s);return this.o_.fillWeightsForPoints(t,e),this.Fw=t,e}Jw(){if(this.Ow.size===0)return null;let t=0;return this.Ow.forEach((e=>{e.length!==0&&(t=Math.max(t,e[e.length-1].Re))})),t}qw(t,e,s){const r=this.Gw();if(e!==-1)this.Ow.forEach(((o,n)=>{r.Oo.set(n,{se:o,Qw:n===t?s:void 0})})),this.Ow.has(t)||r.Oo.set(t,{se:[],Qw:s}),r.Et.tg=this.Fw,r.Et.ig=e;else{const o=this.Ow.get(t);r.Oo.set(t,{se:o||[],Qw:s})}return r}Gw(){return{Oo:new Map,Et:{_u:this.Jw()}}}}function Pr(i,t){i.Re=t,i.Ew.forEach((e=>{e.Re=t}))}function L0(i,t){return i.wt<t}function D0(i,t){return t<i.wt}function V0(i,t,e){const s=t.Uh(),r=t.bi(),o=ns(i,s,L0),n=Ic(i,r,D0);if(!e)return{from:o,to:n};let a=o,l=n;return o>0&&o<i.length&&i[o].wt>=s&&(a=o-1),n>0&&n<i.length&&i[n-1].wt<=r&&(l=n+1),{from:a,to:l}}class Uc{constructor(t,e,s){this.sg=!0,this.ng=!0,this.eg=!0,this.rg=[],this.hg=null,this.Jn=t,this.Qn=e,this.ag=s}yt(t){this.sg=!0,t==="data"&&(this.ng=!0),t==="options"&&(this.eg=!0)}Tt(){return this.Jn.Vt()?(this.lg(),this.hg===null?null:this.og):null}_g(){this.rg=this.rg.map((t=>({...t,...this.Jn.Rh().Dr(t.wt)})))}ug(){this.hg=null}lg(){this.ng&&(this.cg(),this.ng=!1),this.eg&&(this._g(),this.eg=!1),this.sg&&(this.dg(),this.sg=!1)}dg(){const t=this.Jn.Ft(),e=this.Qn.Et();if(this.ug(),e.Ki()||t.Ki())return;const s=e.Pe();if(s===null||this.Jn.Xs().zr()===0)return;const r=this.Jn.zt();r!==null&&(this.hg=V0(this.rg,s,this.ag),this.fg(t,e,r.Wt),this.pg())}}class F0{constructor(t,e){this.vg=t,this.Yi=e}nt(t,e,s){this.vg.draw(t,this.Yi,e,s)}}class N0 extends Uc{constructor(t,e,s){super(t,e,!1),this.sh=s,this.og=new F0(this.sh.renderer(),(r=>{const o=t.zt();return o===null?null:t.Ft().Nt(r,o.Wt)}))}da(t){return this.sh.priceValueBuilder(t)}pa(t){return this.sh.isWhitespace(t)}cg(){const t=this.Jn.Rh();this.rg=this.Jn.Xs().Hr().map((e=>({wt:e.Re,_t:NaN,...t.Dr(e.Re),mg:e.se})))}fg(t,e){e.uu(this.rg,xn(this.hg))}pg(){this.sh.update({bars:this.rg.map(B0),barSpacing:this.Qn.Et().mu(),visibleRange:this.hg},this.Jn.N())}}function B0(i){return{x:i._t,time:i.wt,originalData:i.mg,barColor:i.cr}}const H0={color:"#2196f3"},U0=(i,t,e)=>{const s=Je(e);return new N0(i,t,s)};function la(i){const t={value:i.Wt[3],time:i.yw};return i.Iw!==void 0&&(t.customValues=i.Iw),t}function Kl(i){const t=la(i);return i.R!==void 0&&(t.color=i.R),t}function W0(i){const t=la(i);return i.vt!==void 0&&(t.lineColor=i.vt),i.mr!==void 0&&(t.topColor=i.mr),i.wr!==void 0&&(t.bottomColor=i.wr),t}function Y0(i){const t=la(i);return i.gr!==void 0&&(t.topLineColor=i.gr),i.Mr!==void 0&&(t.bottomLineColor=i.Mr),i.br!==void 0&&(t.topFillColor1=i.br),i.Sr!==void 0&&(t.topFillColor2=i.Sr),i.Cr!==void 0&&(t.bottomFillColor1=i.Cr),i.Pr!==void 0&&(t.bottomFillColor2=i.Pr),t}function Wc(i){const t={open:i.Wt[0],high:i.Wt[1],low:i.Wt[2],close:i.Wt[3],time:i.yw};return i.Iw!==void 0&&(t.customValues=i.Iw),t}function q0(i){const t=Wc(i);return i.R!==void 0&&(t.color=i.R),t}function j0(i){const t=Wc(i),{R:e,Ht:s,vr:r}=i;return e!==void 0&&(t.color=e),s!==void 0&&(t.borderColor=s),r!==void 0&&(t.wickColor=r),t}function Lr(i){return{Area:W0,Line:Kl,Baseline:Y0,Histogram:Kl,Bar:q0,Candlestick:j0,Custom:G0}[i]}function G0(i){const t=i.yw;return{...i.se,time:t}}const K0={vertLine:{color:"#9598A1",width:1,style:3,visible:!0,labelVisible:!0,labelBackgroundColor:"#131722"},horzLine:{color:"#9598A1",width:1,style:3,visible:!0,labelVisible:!0,labelBackgroundColor:"#131722"},mode:1},Q0={vertLines:{color:"#D6DCDE",style:0,visible:!0},horzLines:{color:"#D6DCDE",style:0,visible:!0}},X0={background:{type:"solid",color:"#FFFFFF"},textColor:"#191919",fontSize:12,fontFamily:zc,panes:{enableResize:!0,separatorColor:"#E0E3EB",separatorHoverColor:"rgba(178, 181, 189, 0.2)"},attributionLogo:!0,colorSpace:"srgb",colorParsers:[]},Ko={autoScale:!0,mode:0,invertScale:!1,alignLabels:!0,borderVisible:!0,borderColor:"#2B2B43",entireTextOnly:!1,visible:!1,ticksVisible:!1,scaleMargins:{bottom:.1,top:.2},minimumWidth:0,ensureEdgeTickMarksVisible:!1},J0={rightOffset:0,barSpacing:6,minBarSpacing:.5,maxBarSpacing:0,fixLeftEdge:!1,fixRightEdge:!1,lockVisibleTimeRangeOnResize:!1,rightBarStaysOnScroll:!1,borderVisible:!0,borderColor:"#2B2B43",visible:!0,timeVisible:!1,secondsVisible:!0,shiftVisibleRangeOnNewBar:!0,allowShiftVisibleRangeOnWhitespaceReplacement:!1,ticksVisible:!1,uniformDistribution:!1,minimumHeight:0,allowBoldLabels:!0,ignoreWhitespaceIndices:!1};function Ql(){return{addDefaultPane:!0,width:0,height:0,autoSize:!1,layout:X0,crosshair:K0,grid:Q0,overlayPriceScales:{...Ko},leftPriceScale:{...Ko,visible:!1},rightPriceScale:{...Ko,visible:!0},timeScale:J0,localization:{locale:as?navigator.language:"",dateFormat:"dd MMM 'yy"},handleScroll:{mouseWheel:!0,pressedMouseMove:!0,horzTouchDrag:!0,vertTouchDrag:!0},handleScale:{axisPressedMouseMove:{time:!0,price:!0},axisDoubleClickReset:{time:!0,price:!0},mouseWheel:!0,pinch:!0},kineticScroll:{mouse:!1,touch:!0},trackingMode:{exitMode:1}}}class Yc{constructor(t,e,s){this.Hf=t,this.wg=e,this.gg=s??0}applyOptions(t){this.Hf.Qt().oc(this.wg,t,this.gg)}options(){return this.Yi().N()}width(){return go(this.wg)?this.Hf.ow(this.wg):0}setVisibleRange(t){this.setAutoScale(!1),this.Yi().Fl(new Vt(t.from,t.to))}getVisibleRange(){let t,e,s=this.Yi().Qe();if(s===null)return null;if(this.Yi().Ja()){const r=this.Yi().fo(),o=Nc(r);s=qi(s,this.Yi().tl()),t=Number((Math.round(s.$e()/r)*r).toFixed(o)),e=Number((Math.round(s.qe()/r)*r).toFixed(o))}else t=s.$e(),e=s.qe();return{from:t,to:e}}setAutoScale(t){this.applyOptions({autoScale:t})}Yi(){return S(this.Hf.Qt()._c(this.wg,this.gg)).Ft}}class Z0{constructor(t,e,s,r){this.Hf=t,this.Pt=s,this.Mg=e,this.bg=r}getHeight(){return this.Pt.$t()}setHeight(t){const e=this.Hf.Qt(),s=e.Uc(this.Pt);e.vc(s,t)}getStretchFactor(){return this.Pt.Bo()}setStretchFactor(t){this.Pt.Io(t),this.Hf.Qt().Ih()}paneIndex(){return this.Hf.Qt().Uc(this.Pt)}moveTo(t){const e=this.paneIndex();e!==t&&(St(t>=0&&t<this.Hf.$f().length,"Invalid pane index"),this.Hf.Qt().wc(e,t))}getSeries(){return this.Pt.Oo().map((t=>this.Mg(t)))??[]}getHTMLElement(){const t=this.Hf.$f();return t&&t.length!==0&&t[this.paneIndex()]?t[this.paneIndex()].Zf():null}attachPrimitive(t){this.Pt._a(t),t.attached&&t.attached({chart:this.bg,requestUpdate:()=>this.Pt.Qt().Ih()})}detachPrimitive(t){this.Pt.ua(t)}priceScale(t){if(this.Pt.Do(t)===null)throw new Error(`Cannot find price scale with id: ${t}`);return new Yc(this.Hf,t,this.paneIndex())}setPreserveEmptyPane(t){this.Pt.zo(t)}preserveEmptyPane(){return this.Pt.Lo()}addCustomSeries(t,e={},s=0){return this.bg.addCustomSeries(t,e,s)}addSeries(t,e={}){return this.bg.addSeries(t,e,this.paneIndex())}}const ty={color:"#FF0000",price:0,lineStyle:2,lineWidth:1,lineVisible:!0,axisLabelVisible:!0,title:"",axisLabelColor:"",axisLabelTextColor:""};class Xl{constructor(t){this.ir=t}applyOptions(t){this.ir.hr(t)}options(){return this.ir.N()}Sg(){return this.ir}}class ey{constructor(t,e,s,r,o,n){this.xg=new dt,this.Jn=t,this.Cg=e,this.Pg=s,this.o_=o,this.bg=r,this.yg=n}m(){this.xg.m()}priceFormatter(){return this.Jn.ea()}priceToCoordinate(t){const e=this.Jn.zt();return e===null?null:this.Jn.Ft().Nt(t,e.Wt)}coordinateToPrice(t){const e=this.Jn.zt();return e===null?null:this.Jn.Ft().Ts(t,e.Wt)}barsInLogicalRange(t){if(t===null)return null;const e=new Xi(new Us(t.from,t.to)).y_(),s=this.Jn.Xs();if(s.Ki())return null;const r=s.Fr(e.Uh(),1),o=s.Fr(e.bi(),-1),n=S(s.Lr()),a=S(s.Ks());if(r!==null&&o!==null&&r.Re>o.Re)return{barsBefore:t.from-n,barsAfter:a-t.to};const l={barsBefore:r===null||r.Re===n?t.from-n:r.Re-n,barsAfter:o===null||o.Re===a?a-t.to:a-o.Re};return r!==null&&o!==null&&(l.from=r.yw,l.to=o.yw),l}setData(t){this.o_,this.Jn.Rr(),this.Cg.kg(this.Jn,t),this.Tg("full")}update(t,e=!1){this.Jn.Rr(),this.Cg.Rg(this.Jn,t,e),this.Tg("update")}pop(t=1){const e=this.Cg.Dg(this.Jn,t);e.length!==0&&this.Tg("update");const s=Lr(this.seriesType());return e.map((r=>s(r)))}dataByIndex(t,e){const s=this.Jn.Xs().Fr(t,e);return s===null?null:Lr(this.seriesType())(s)}data(){const t=Lr(this.seriesType());return this.Jn.Xs().Hr().map((e=>t(e)))}subscribeDataChanged(t){this.xg.i(t)}unsubscribeDataChanged(t){this.xg._(t)}applyOptions(t){this.Jn.hr(t)}options(){return Ne(this.Jn.N())}priceScale(){return this.Pg.priceScale(this.Jn.Ft().ma(),this.getPane().paneIndex())}createPriceLine(t){const e=ee(Ne(ty),t),s=this.Jn.Oh(e);return new Xl(s)}removePriceLine(t){this.Jn.Nh(t.Sg())}priceLines(){return this.Jn.Fh().map((t=>new Xl(t)))}seriesType(){return this.Jn.Rr()}lastValueData(t){const e=this.Jn.ye(t);return e.ke?{noData:!0}:{noData:!1,price:e.gt,color:e.R}}attachPrimitive(t){this.Jn._a(t),t.attached&&t.attached({chart:this.bg,series:this,requestUpdate:()=>this.Jn.Qt().Ih(),horzScaleBehavior:this.o_})}detachPrimitive(t){this.Jn.ua(t),t.detached&&t.detached(),this.Jn.Qt().Ih()}getPane(){const t=this.Jn,e=S(this.Jn.Qt().Hn(t));return this.yg(e)}moveToPane(t){this.Jn.Qt().Nc(this.Jn,t)}seriesOrder(){const t=this.Jn.Qt().Hn(this.Jn);return t===null?-1:t.Oo().indexOf(this.Jn)}setSeriesOrder(t){const e=this.Jn.Qt().Hn(this.Jn);e!==null&&e.Qo(this.Jn,t)}Tg(t){this.xg.v()&&this.xg.p(t)}}class iy{constructor(t,e,s){this.Vg=new dt,this.z_=new dt,this.gm=new dt,this.ts=t,this.uh=t.Et(),this.Zm=e,this.uh.Vu().i(this.Bg.bind(this)),this.uh.Bu().i(this.Ig.bind(this)),this.Zm.ym().i(this.Eg.bind(this)),this.o_=s}m(){this.uh.Vu().u(this),this.uh.Bu().u(this),this.Zm.ym().u(this),this.Vg.m(),this.z_.m(),this.gm.m()}scrollPosition(){return this.uh.gu()}scrollToPosition(t,e){e?this.uh.Tu(t,1e3):this.ts.fn(t)}scrollToRealTime(){this.uh.ku()}getVisibleRange(){const t=this.uh.nu();return t===null?null:{from:t.from.originalTime,to:t.to.originalTime}}setVisibleRange(t){const e={from:this.o_.convertHorzItemToInternal(t.from),to:this.o_.convertHorzItemToInternal(t.to)},s=this.uh.au(e);this.ts.Lc(s)}getVisibleLogicalRange(){const t=this.uh.su();return t===null?null:{from:t.Uh(),to:t.bi()}}setVisibleLogicalRange(t){St(t.from<=t.to,"The from index cannot be after the to index."),this.ts.Lc(t)}resetTimeScale(){this.ts.cn()}fitContent(){this.ts.Au()}logicalToCoordinate(t){const e=this.ts.Et();return e.Ki()?null:e.qt(t)}coordinateToLogical(t){return this.uh.Ki()?null:this.uh.cu(t)}timeToIndex(t,e){const s=this.o_.convertHorzItemToInternal(t);return this.uh.Q_(s,e)}timeToCoordinate(t){const e=this.timeToIndex(t,!1);return e===null?null:this.uh.qt(e)}coordinateToTime(t){const e=this.ts.Et(),s=e.cu(t),r=e.ss(s);return r===null?null:r.originalTime}width(){return this.Zm.Gf().width}height(){return this.Zm.Gf().height}subscribeVisibleTimeRangeChange(t){this.Vg.i(t)}unsubscribeVisibleTimeRangeChange(t){this.Vg._(t)}subscribeVisibleLogicalRangeChange(t){this.z_.i(t)}unsubscribeVisibleLogicalRangeChange(t){this.z_._(t)}subscribeSizeChange(t){this.gm.i(t)}unsubscribeSizeChange(t){this.gm._(t)}applyOptions(t){this.uh.hr(t)}options(){return{...Ne(this.uh.N()),barSpacing:this.uh.mu()}}Bg(){this.Vg.v()&&this.Vg.p(this.getVisibleRange())}Ig(){this.z_.v()&&this.z_.p(this.getVisibleLogicalRange())}Eg(t){this.gm.p(t.width,t.height)}}function Jl(i){return(function(t){if(xr(t.handleScale)){const s=t.handleScale;t.handleScale={axisDoubleClickReset:{time:s,price:s},axisPressedMouseMove:{time:s,price:s},mouseWheel:s,pinch:s}}else if(t.handleScale!==void 0){const{axisPressedMouseMove:s,axisDoubleClickReset:r}=t.handleScale;xr(s)&&(t.handleScale.axisPressedMouseMove={time:s,price:s}),xr(r)&&(t.handleScale.axisDoubleClickReset={time:r,price:r})}const e=t.handleScroll;xr(e)&&(t.handleScroll={horzTouchDrag:e,vertTouchDrag:e,mouseWheel:e,pressedMouseMove:e})})(i),i}class sy{constructor(t,e,s){this.Ag=new Map,this.zg=new Map,this.Lg=new dt,this.Og=new dt,this.Ng=new dt,this.qu=new WeakMap,this.Fg=new I0(e);const r=s===void 0?Ne(Ql()):ee(Ne(Ql()),Jl(s));this.Wg=e,this.Hf=new z0(t,r,e),this.Hf.Xv().i((n=>{this.Lg.v()&&this.Lg.p(this.Hg(n()))}),this),this.Hf.Zv().i((n=>{this.Og.v()&&this.Og.p(this.Hg(n()))}),this),this.Hf.cc().i((n=>{this.Ng.v()&&this.Ng.p(this.Hg(n()))}),this);const o=this.Hf.Qt();this.Ug=new iy(o,this.Hf.iw(),this.Wg)}remove(){this.Hf.Xv().u(this),this.Hf.Zv().u(this),this.Hf.cc().u(this),this.Ug.m(),this.Hf.m(),this.Ag.clear(),this.zg.clear(),this.Lg.m(),this.Og.m(),this.Ng.m(),this.Fg.m()}resize(t,e,s){this.autoSizeActive()||this.Hf.Jm(t,e,s)}addCustomSeries(t,e={},s=0){const r=(o=>({type:"Custom",isBuiltIn:!1,defaultOptions:{...H0,...o.defaultOptions()},$g:U0,qg:o}))(Je(t));return this.Yg(r,e,s)}addSeries(t,e={},s=0){return this.Yg(t,e,s)}removeSeries(t){const e=qt(this.Ag.get(t)),s=this.Fg.Ac(e);this.Hf.Qt().Ac(e),this.jg(s),this.Ag.delete(t),this.zg.delete(e)}kg(t,e){this.jg(this.Fg.Ww(t,e))}Rg(t,e,s){this.jg(this.Fg.jw(t,e,s))}Dg(t,e){const[s,r]=this.Fg.Zw(t,e);return s.length!==0&&this.jg(r),s}subscribeClick(t){this.Lg.i(t)}unsubscribeClick(t){this.Lg._(t)}subscribeCrosshairMove(t){this.Ng.i(t)}unsubscribeCrosshairMove(t){this.Ng._(t)}subscribeDblClick(t){this.Og.i(t)}unsubscribeDblClick(t){this.Og._(t)}priceScale(t,e=0){return new Yc(this.Hf,t,e)}timeScale(){return this.Ug}applyOptions(t){this.Hf.hr(Jl(t))}options(){return this.Hf.N()}takeScreenshot(t=!1,e=!1){let s,r;try{e||(s=this.Hf.Qt().N().crosshair.mode,this.Hf.hr({crosshair:{mode:2}})),r=this.Hf.aw(t)}finally{e||s===void 0||this.Hf.Qt().hr({crosshair:{mode:s}})}return r}addPane(t=!1){const e=this.Hf.Qt().$c();return e.zo(t),this.Kg(e)}removePane(t){this.Hf.Qt().fc(t)}swapPanes(t,e){this.Hf.Qt().mc(t,e)}autoSizeActive(){return this.Hf.cw()}chartElement(){return this.Hf.ip()}panes(){return this.Hf.Qt().$s().map((t=>this.Kg(t)))}paneSize(t=0){const e=this.Hf.pw(t);return{height:e.height,width:e.width}}setCrosshairPosition(t,e,s){const r=this.Ag.get(s);if(r===void 0)return;const o=this.Hf.Qt().Hn(r);o!==null&&this.Hf.Qt().Rc(t,e,o)}clearCrosshairPosition(){this.Hf.Qt().Dc(!0)}horzBehaviour(){return this.Wg}Yg(t,e={},s=0){St(t.$g!==void 0),(function(l){if(l===void 0||l.type==="custom")return;const h=l;h.minMove!==void 0&&h.precision===void 0&&(h.precision=Nc(h.minMove))})(e.priceFormat),t.type==="Candlestick"&&(function(l){l.borderColor!==void 0&&(l.borderUpColor=l.borderColor,l.borderDownColor=l.borderColor),l.wickColor!==void 0&&(l.wickUpColor=l.wickColor,l.wickDownColor=l.wickColor)})(e);const r=ee(Ne(Sc),Ne(t.defaultOptions),e),o=t.$g,n=new bo(this.Hf.Qt(),t.type,r,o,t.qg);this.Hf.Qt().Ic(n,s);const a=new ey(n,this,this,this,this.Wg,(l=>this.Kg(l)));return this.Ag.set(a,n),this.zg.set(n,a),a}jg(t){const e=this.Hf.Qt();e.Vc(t.Et._u,t.Et.tg,t.Et.ig),t.Oo.forEach(((s,r)=>r.ht(s.se,s.Qw))),e.Et().K_(),e.vu()}Xg(t){return qt(this.zg.get(t))}Hg(t){const e=new Map;t.Dw.forEach(((r,o)=>{const n=o.Rr(),a=Lr(n)(r);if(n!=="Custom")St(P0(a));else{const l=o.fa();St(!l||l(a)===!1)}e.set(this.Xg(o),a)}));const s=t.Rw!==void 0&&this.zg.has(t.Rw)?this.Xg(t.Rw):void 0;return{time:t.yw,logical:t.Re,point:t.kw,paneIndex:t.Tw,hoveredSeries:s,hoveredObjectId:t.Vw,seriesData:e,sourceEvent:t.Bw}}Kg(t){let e=this.qu.get(t);return e||(e=new Z0(this.Hf,(s=>this.Xg(s)),t,this),this.qu.set(t,e)),e}}function ry(i){if(cr(i)){const t=document.getElementById(i);return St(t!==null,`Cannot find element in DOM with id=${i}`),t}return i}function oy(i,t,e){const s=ry(i),r=new sy(s,t,e);return t.setOptions(r.options()),r}function ny(i,t){return oy(i,new Il,Il.ld(t))}class ay extends Uc{constructor(t,e){super(t,e,!0)}fg(t,e,s){e.uu(this.rg,xn(this.hg)),t.Ul(this.rg,s,xn(this.hg))}Zg(t,e){return{wt:t,gt:e,_t:NaN,ut:NaN}}cg(){const t=this.Jn.Rh();this.rg=this.Jn.Xs().Hr().map((e=>{const s=e.Wt[3];return this.Gg(e.Re,s,t)}))}}function ly(i,t,e,s,r,o,n){if(t.length===0||s.from>=t.length||s.to<=0)return;const{context:a,horizontalPixelRatio:l,verticalPixelRatio:h}=i,d=t[s.from];let u=o(i,d),p=d;if(s.to-s.from<2){const m=r/2;a.beginPath();const g={_t:d._t-m,ut:d.ut},v={_t:d._t+m,ut:d.ut};a.moveTo(g._t*l,g.ut*h),a.lineTo(v._t*l,v.ut*h),n(i,u,g,v)}else{const m=(v,b)=>{n(i,u,p,b),a.beginPath(),u=v,p=b};let g=p;a.beginPath(),a.moveTo(d._t*l,d.ut*h);for(let v=s.from+1;v<s.to;++v){g=t[v];const b=o(i,g);switch(e){case 0:a.lineTo(g._t*l,g.ut*h);break;case 1:a.lineTo(g._t*l,t[v-1].ut*h),b!==u&&(m(b,g),a.lineTo(g._t*l,t[v-1].ut*h)),a.lineTo(g._t*l,g.ut*h);break;case 2:{const[x,y]=hy(t,v-1,v);a.bezierCurveTo(x._t*l,x.ut*h,y._t*l,y.ut*h,g._t*l,g.ut*h);break}}e!==1&&b!==u&&(m(b,g),a.moveTo(g._t*l,g.ut*h))}(p!==g||p===g&&e===1)&&n(i,u,p,g)}}const Zl=6;function Qo(i,t){return{_t:i._t-t._t,ut:i.ut-t.ut}}function th(i,t){return{_t:i._t/t,ut:i.ut/t}}function hy(i,t,e){const s=Math.max(0,t-1),r=Math.min(i.length-1,e+1);var o,n;return[(o=i[t],n=th(Qo(i[e],i[s]),Zl),{_t:o._t+n._t,ut:o.ut+n.ut}),Qo(i[e],th(Qo(i[r],i[t]),Zl))]}function cy(i,t){const e=i.context;e.strokeStyle=t,e.stroke()}class uy extends ys{constructor(){super(...arguments),this.rt=null}ht(t){this.rt=t}et(t){if(this.rt===null)return;const{ot:e,lt:s,Jg:r,Qg:o,ct:n,Xt:a,tM:l}=this.rt;if(s===null)return;const h=t.context;h.lineCap="butt",h.lineWidth=n*t.verticalPixelRatio,$i(h,a),h.lineJoin="round";const d=this.iM.bind(this);o!==void 0&&ly(t,e,o,s,r,d,cy),l&&(function(u,p,m,g,v){if(g.to-g.from<=0)return;const{horizontalPixelRatio:b,verticalPixelRatio:x,context:y}=u;let k=null;const _=Math.max(1,Math.floor(b))%2/2,w=m*x+_;for(let E=g.to-1;E>=g.from;--E){const A=p[E];if(A){const T=v(u,A);T!==k&&(y.beginPath(),k!==null&&y.fill(),y.fillStyle=T,k=T);const M=Math.round(A._t*b)+_,P=A.ut*x;y.moveTo(M,P),y.arc(M,P,w,0,2*Math.PI)}}y.fill()})(t,e,l,s,d)}}class dy extends uy{iM(t,e){return e.vt}}class py extends ay{constructor(){super(...arguments),this.og=new dy}Gg(t,e,s){return{...this.Zg(t,e),...s.Dr(t)}}pg(){const t=this.Jn.N(),e={ot:this.rg,Xt:t.lineStyle,Qg:t.lineVisible?t.lineType:void 0,ct:t.lineWidth,tM:t.pointMarkersVisible?t.pointMarkersRadius||t.lineWidth/2+2:void 0,lt:this.hg,Jg:this.Qn.Et().mu()};this.og.ht(e)}}const fy={type:"Line",isBuiltIn:!0,defaultOptions:{color:"#2196f3",lineStyle:0,lineWidth:3,lineType:0,lineVisible:!0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBorderWidth:2,crosshairMarkerBackgroundColor:"",lastPriceAnimation:0,pointMarkersVisible:!1},$g:(i,t)=>new py(i,t)};({...Sc});var my=ai('<div class="chart svelte-1knyfmf"></div>');function eh(i,t){Kh(t,!1);let e=Ro(t,"data",24,()=>[]),s=Ro(t,"width",8,400),r=Ro(t,"height",8,300),o=Ki(),n=Ki(),a=Ki();Zv(()=>{$t(n,ny(N(o),{width:s(),height:r()})),$t(a,N(n).addSeries(fy)),e()?.length&&(N(a).setData(e()),N(n).timeScale().fitContent());const h=new ResizeObserver(d=>{const u=d[0].contentRect;N(n).applyOptions({width:u.width,height:u.height})});return h.observe(N(o)),()=>{h.disconnect(),N(n).remove()}}),Pv(()=>(N(a),kc(e()),N(n)),()=>{N(a)&&e()&&(N(a).setData(e()),N(n).timeScale().fitContent())}),Mv(),Xv();var l=my();Qv(l,h=>$t(o,h),()=>N(o)),Rr(()=>Kv(l,`height: ${r()??""}px`)),ke(i,l),Qh()}var gy=ai('<div class="empty svelte-kdmb3n">没有日志</div>'),vy=ai('<div class="log-line svelte-kdmb3n"><span class="time svelte-kdmb3n"> </span> <span class="text"> </span></div>'),by=ai('<div class="hero svelte-kdmb3n"><h2 class="svelte-kdmb3n">系统概况</h2> <p class="muted svelte-kdmb3n"></p></div> <div class="chart-wrapper"><!></div> <div class="widgets svelte-kdmb3n"><div class="card small svelte-kdmb3n"><div class="k svelte-kdmb3n">CPU</div> <div class="v svelte-kdmb3n">28%</div></div> <div class="card small svelte-kdmb3n"><div class="k svelte-kdmb3n">内存</div> <div class="v svelte-kdmb3n">4.2 GB</div></div> <div class="card small svelte-kdmb3n"><div class="k svelte-kdmb3n">请求/分钟</div> <div class="v svelte-kdmb3n">1,234</div></div></div> <div class="console-panel svelte-kdmb3n"><div class="console-header svelte-kdmb3n"><div>系统日志</div> <div><button class="btn svelte-kdmb3n">清空</button></div></div> <div class="console-body svelte-kdmb3n"><!></div></div>',1),yy=ai('<div class="hero svelte-kdmb3n"><h2 class="svelte-kdmb3n">详细图表</h2> <p class="muted svelte-kdmb3n">历史趋势分析</p></div> <div class="chart-wrapper" style="margin-top:1rem"><!></div>',1),_y=ai('<div class="hero svelte-kdmb3n"><h2 class="svelte-kdmb3n"> </h2> <p class="muted svelte-kdmb3n">功能模块开发中...</p></div>'),wy=ai('<div class="dashboard svelte-kdmb3n"><div class="mac-window svelte-kdmb3n"><div class="titlebar svelte-kdmb3n"><div class="title svelte-kdmb3n">控制台 • Dashboard</div> <div class="controls svelte-kdmb3n"><input class="search svelte-kdmb3n" placeholder="搜索命令或指标…"/></div></div> <div class="body svelte-kdmb3n"><aside class="sidebar svelte-kdmb3n"><nav><button>概览</button> <button>日志</button> <button>指标</button> <button>图表</button> <button>设置</button></nav></aside> <section class="main svelte-kdmb3n"><!></section></div></div></div>');function xy(i){let t=Ki([{t:"12:01",line:"Started worker #1"},{t:"12:03",line:"Connected to DB"},{t:"12:12",line:"Processed 42 tasks"}]),e=[{time:"2025-11-20",value:40},{time:"2025-11-21",value:45},{time:"2025-11-22",value:42},{time:"2025-11-23",value:48},{time:"2025-11-24",value:51},{time:"2025-11-25",value:49}];function s(){$t(t,[])}let r=Ki("overview");var o=wy(),n=vt(o),a=Gt(vt(n),2),l=vt(a),h=vt(l),d=vt(h);let u;var p=Gt(d,2);let m;var g=Gt(p,2);let v;var b=Gt(g,2);let x;var y=Gt(b,2);let k;var _=Gt(l,2),w=vt(_);{var E=T=>{var M=by(),P=_r(M),Z=Gt(vt(P),2);Z.textContent="Uptime: 3 days 4h · 用户: 1284 · 错误: 3";var j=Gt(P,2),J=vt(j);eh(J,{get data(){return e},height:260});var q=Gt(j,4),it=vt(q),mt=Gt(vt(it),2),gt=vt(mt),kt=Gt(it,2),Bt=vt(kt);{var li=Li=>{var ur=gy();ke(Li,ur)},qc=Li=>{var ur=il(),jc=_r(ur);mv(jc,1,()=>N(t),pv,(Gc,ha)=>{var ca=vy(),ua=vt(ca),Kc=vt(ua),Qc=Gt(ua,2),Xc=vt(Qc);Rr(()=>{To(Kc,N(ha).t),To(Xc,N(ha).line)}),ke(Gc,ca)}),ke(Li,ur)};Oo(Bt,Li=>{N(t).length===0?Li(li):Li(qc,!1)})}Di("click",gt,s),ke(T,M)},A=T=>{var M=il(),P=_r(M);{var Z=J=>{var q=yy(),it=Gt(_r(q),2),mt=vt(it);eh(mt,{get data(){return e},height:500}),ke(J,q)},j=J=>{var q=_y(),it=vt(q),mt=vt(it);Rr(()=>To(mt,N(r)==="logs"?"系统日志":N(r)==="metrics"?"监控指标":"设置")),ke(J,q)};Oo(P,J=>{N(r)==="charts"?J(Z):J(j,!1)},!0)}ke(T,M)};Oo(w,T=>{N(r)==="overview"?T(E):T(A,!1)})}Rr(()=>{u=zs(d,1,"nav-item svelte-kdmb3n",null,u,{active:N(r)==="overview"}),m=zs(p,1,"nav-item svelte-kdmb3n",null,m,{active:N(r)==="logs"}),v=zs(g,1,"nav-item svelte-kdmb3n",null,v,{active:N(r)==="metrics"}),x=zs(b,1,"nav-item svelte-kdmb3n",null,x,{active:N(r)==="charts"}),k=zs(y,1,"nav-item svelte-kdmb3n",null,k,{active:N(r)==="settings"})}),Di("click",d,()=>$t(r,"overview")),Di("click",p,()=>$t(r,"logs")),Di("click",g,()=>$t(r,"metrics")),Di("click",b,()=>$t(r,"charts")),Di("click",y,()=>$t(r,"settings")),ke(i,o)}var ky=ai("<main><!></main>");function Cy(i){var t=ky(),e=vt(t);xy(e),ke(i,t)}Jo("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@latest/dist/assets");Uv(Cy,{target:document.getElementById("app")});
