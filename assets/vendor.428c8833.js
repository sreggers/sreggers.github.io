var ie=Object.defineProperty,oe=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var mt=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var yt=(t,e,n)=>e in t?ie(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,G=(t,e)=>{for(var n in e||(e={}))le.call(e,n)&&yt(t,n,e[n]);if(mt)for(var n of mt(e))fe.call(e,n)&&yt(t,n,e[n]);return t},Q=(t,e)=>oe(t,ce(e));var ue=Object.defineProperty,ae=(t,e,n)=>e in t?ue(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,R=(t,e,n)=>(ae(t,typeof e!="symbol"?e+"":e,n),n);function he(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Mt(t){if(y(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=T(s)?ge(s):Mt(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(T(t)||E(t))return t}const pe=/;(?![^(]*\))/g,de=/:(.+)/;function ge(t){const e={};return t.split(pe).forEach(n=>{if(n){const s=n.split(de);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Lt(t){let e="";if(T(t))e=t;else if(y(t))for(let n=0;n<t.length;n++){const s=Lt(t[n]);s&&(e+=s+" ")}else if(E(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function me(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=L(t[s],e[s]);return n}function L(t,e){if(t===e)return!0;let n=vt(t),s=vt(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=y(t),s=y(e),n||s)return n&&s?me(t,e):!1;if(n=E(t),s=E(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!L(t[o],e[o]))return!1}}return String(t)===String(e)}function U(t,e){return t.findIndex(n=>L(n,e))}const ye=Object.assign,ve=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},be=Object.prototype.hasOwnProperty,ft=(t,e)=>be.call(t,e),y=Array.isArray,X=t=>Tt(t)==="[object Map]",vt=t=>t instanceof Date,T=t=>typeof t=="string",ut=t=>typeof t=="symbol",E=t=>t!==null&&typeof t=="object",xe=Object.prototype.toString,Tt=t=>xe.call(t),_e=t=>Tt(t).slice(8,-1),at=t=>T(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bt=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},we=/-(\w)/g,ke=Bt(t=>t.replace(we,(e,n)=>n?n.toUpperCase():"")),Oe=/\B([A-Z])/g,Vt=Bt(t=>t.replace(Oe,"-$1").toLowerCase()),$e=(t,e)=>!Object.is(t,e),bt=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Se;function It(t,e){e=e||Se,e&&e.active&&e.effects.push(t)}const Kt=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Wt=t=>(t.w&A)>0,Ft=t=>(t.n&A)>0,Ee=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=A},Ae=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Wt(r)&&!Ft(r)?r.delete(t):e[n++]=r,r.w&=~A,r.n&=~A}e.length=n}},tt=new WeakMap;let I=0,A=1;const et=30,V=[];let C;const F=Symbol(""),xt=Symbol("");class je{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],It(this,s)}run(){if(!this.active)return this.fn();if(!V.includes(this))try{return V.push(C=this),Ne(),A=1<<++I,I<=et?Ee(this):_t(this),this.fn()}finally{I<=et&&Ae(this),A=1<<--I,zt(),V.pop();const e=V.length;C=e>0?V[e-1]:void 0}}stop(){this.active&&(_t(this),this.onStop&&this.onStop(),this.active=!1)}}function _t(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function Pe(t,e){t.effect&&(t=t.effect.fn);const n=new je(t);e&&(ye(n,e),e.scope&&It(n,e.scope)),(!e||!e.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function Re(t){t.effect.stop()}let B=!0;const ht=[];function Ce(){ht.push(B),B=!1}function Ne(){ht.push(B),B=!0}function zt(){const t=ht.pop();B=t===void 0?!0:t}function H(t,e,n){if(!Me())return;let s=tt.get(t);s||tt.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Kt()),Le(r)}function Me(){return B&&C!==void 0}function Le(t,e){let n=!1;I<=et?Ft(t)||(t.n|=A,n=!Wt(t)):n=!t.has(C),n&&(t.add(C),C.deps.push(t))}function nt(t,e,n,s,r,i){const o=tt.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&y(t))o.forEach((l,f)=>{(f==="length"||f>=s)&&c.push(l)});else switch(n!==void 0&&c.push(o.get(n)),e){case"add":y(t)?at(n)&&c.push(o.get("length")):(c.push(o.get(F)),X(t)&&c.push(o.get(xt)));break;case"delete":y(t)||(c.push(o.get(F)),X(t)&&c.push(o.get(xt)));break;case"set":X(t)&&c.push(o.get(F));break}if(c.length===1)c[0]&&wt(c[0]);else{const l=[];for(const f of c)f&&l.push(...f);wt(Kt(l))}}function wt(t,e){for(const n of y(t)?t:[...t])(n!==C||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Te=he("__proto__,__v_isRef,__isVue"),Ht=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(ut)),Be=Jt(),Ve=Jt(!0),kt=Ie();function Ie(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=N(this);for(let i=0,o=this.length;i<o;i++)H(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(N)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ce();const s=N(this)[e].apply(this,n);return zt(),s}}),t}function Jt(t=!1,e=!1){return function(n,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_raw"&&r===(t?e?De:qt:e?qe:Zt).get(n))return n;const i=y(n);if(!t&&i&&ft(kt,s))return Reflect.get(kt,s,r);const o=Reflect.get(n,s,r);return(ut(s)?Ht.has(s):Te(s))||(t||H(n,"get",s),e)?o:st(o)?!i||!at(s)?o.value:o:E(o)?t?Ue(o):J(o):o}}const Ke=We();function We(t=!1){return function(e,n,s,r){let i=e[n];if(!t&&!Xe(s)&&(s=N(s),i=N(i),!y(e)&&st(i)&&!st(s)))return i.value=s,!0;const o=y(e)&&at(n)?Number(n)<e.length:ft(e,n),c=Reflect.set(e,n,s,r);return e===N(r)&&(o?$e(s,i)&&nt(e,"set",n,s):nt(e,"add",n,s)),c}}function Fe(t,e){const n=ft(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&nt(t,"delete",e,void 0),s}function ze(t,e){const n=Reflect.has(t,e);return(!ut(e)||!Ht.has(e))&&H(t,"has",e),n}function He(t){return H(t,"iterate",y(t)?"length":F),Reflect.ownKeys(t)}const Je={get:Be,set:Ke,deleteProperty:Fe,has:ze,ownKeys:He},Ze={get:Ve,set(t,e){return!0},deleteProperty(t,e){return!0}},Zt=new WeakMap,qe=new WeakMap,qt=new WeakMap,De=new WeakMap;function Ge(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qe(t){return t.__v_skip||!Object.isExtensible(t)?0:Ge(_e(t))}function J(t){return t&&t.__v_isReadonly?t:Dt(t,!1,Je,null,Zt)}function Ue(t){return Dt(t,!0,Ze,null,qt)}function Dt(t,e,n,s,r){if(!E(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Qe(t);if(o===0)return t;const c=new Proxy(t,o===2?s:n);return r.set(t,c),c}function Xe(t){return!!(t&&t.__v_isReadonly)}function N(t){const e=t&&t.__v_raw;return e?N(e):t}function st(t){return Boolean(t&&t.__v_isRef===!0)}Promise.resolve();let rt=!1;const z=[],Ye=Promise.resolve(),Z=t=>Ye.then(t),Ot=t=>{z.includes(t)||z.push(t),rt||(rt=!0,Z(tn))},tn=()=>{for(const t of z)t();z.length=0,rt=!1},en=/^(spellcheck|draggable|form|list|type)$/,it=({el:t,get:e,effect:n,arg:s,modifiers:r})=>{let i;s==="class"&&(t._class=t.className),n(()=>{let o=e();if(s)(r==null?void 0:r.camel)&&(s=ke(s)),Y(t,s,o,i);else{for(const c in o)Y(t,c,o[c],i&&i[c]);for(const c in i)(!o||!(c in o))&&Y(t,c,null)}i=o})},Y=(t,e,n,s)=>{if(e==="class")t.setAttribute("class",Lt(t._class?[t._class,n]:n)||"");else if(e==="style"){n=Mt(n);const{style:r}=t;if(!n)t.removeAttribute("style");else if(T(n))n!==s&&(r.cssText=n);else{for(const i in n)ot(r,i,n[i]);if(s&&!T(s))for(const i in s)n[i]==null&&ot(r,i,"")}}else!(t instanceof SVGElement)&&e in t&&!en.test(e)?(t[e]=n,e==="value"&&(t._value=n)):e==="true-value"?t._trueValue=n:e==="false-value"?t._falseValue=n:n!=null?t.setAttribute(e,n):t.removeAttribute(e)},$t=/\s*!important$/,ot=(t,e,n)=>{y(n)?n.forEach(s=>ot(t,e,s)):e.startsWith("--")?t.setProperty(e,n):$t.test(n)?t.setProperty(Vt(e),n.replace($t,""),"important"):t[e]=n},S=(t,e)=>{const n=t.getAttribute(e);return n!=null&&t.removeAttribute(e),n},$=(t,e,n,s)=>{t.addEventListener(e,n,s)},nn=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,sn=["ctrl","shift","alt","meta"],rn={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>sn.some(n=>t[`${n}Key`]&&!e[n])},Gt=({el:t,get:e,exp:n,arg:s,modifiers:r})=>{if(!s)return;let i=nn.test(n)?e(`(e => ${n}(e))`):e(`($event => { ${n} })`);if(s==="vue:mounted"){Z(i);return}else if(s==="vue:unmounted")return()=>i();if(r){s==="click"&&(r.right&&(s="contextmenu"),r.middle&&(s="mouseup"));const o=i;i=c=>{if(!("key"in c&&!(Vt(c.key)in r))){for(const l in r){const f=rn[l];if(f&&f(c,r))return}return o(c)}}}$(t,s,i,r)},on=({el:t,get:e,effect:n})=>{const s=t.style.display;n(()=>{t.style.display=e()?s:"none"})},Qt=({el:t,get:e,effect:n})=>{n(()=>{t.textContent=Ut(e())})},Ut=t=>t==null?"":E(t)?JSON.stringify(t,null,2):String(t),cn=({el:t,get:e,effect:n})=>{n(()=>{t.innerHTML=e()})},ln=({el:t,exp:e,get:n,effect:s,modifiers:r})=>{const i=t.type,o=n(`(val) => { ${e} = val }`),{trim:c,number:l=i==="number"}=r||{};if(t.tagName==="SELECT"){const f=t;$(t,"change",()=>{const u=Array.prototype.filter.call(f.options,a=>a.selected).map(a=>l?bt(O(a)):O(a));o(f.multiple?u:u[0])}),s(()=>{const u=n(),a=f.multiple;for(let h=0,b=f.options.length;h<b;h++){const v=f.options[h],x=O(v);if(a)y(u)?v.selected=U(u,x)>-1:v.selected=u.has(x);else if(L(O(v),u)){f.selectedIndex!==h&&(f.selectedIndex=h);return}}!a&&f.selectedIndex!==-1&&(f.selectedIndex=-1)})}else if(i==="checkbox"){$(t,"change",()=>{const u=n(),a=t.checked;if(y(u)){const h=O(t),b=U(u,h),v=b!==-1;if(a&&!v)o(u.concat(h));else if(!a&&v){const x=[...u];x.splice(b,1),o(x)}}else o(St(t,a))});let f;s(()=>{const u=n();y(u)?t.checked=U(u,O(t))>-1:u!==f&&(t.checked=L(u,St(t,!0))),f=u})}else if(i==="radio"){$(t,"change",()=>{o(O(t))});let f;s(()=>{const u=n();u!==f&&(t.checked=L(u,O(t)))})}else{const f=u=>c?u.trim():l?bt(u):u;$(t,"compositionstart",fn),$(t,"compositionend",un),$(t,(r==null?void 0:r.lazy)?"change":"input",()=>{t.composing||o(f(t.value))}),c&&$(t,"change",()=>{t.value=t.value.trim()}),s(()=>{if(t.composing)return;const u=t.value,a=n();document.activeElement===t&&f(u)===a||u!==a&&(t.value=a)})}},O=t=>"_value"in t?t._value:t.value,St=(t,e)=>{const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e},fn=t=>{t.target.composing=!0},un=t=>{const e=t.target;e.composing&&(e.composing=!1,an(e,"input"))},an=(t,e)=>{const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)},Et=Object.create(null),K=(t,e,n)=>Xt(t,`return(${e})`,n),Xt=(t,e,n)=>{const s=Et[e]||(Et[e]=hn(e));try{return s(t,n)}catch(r){console.error(r)}},hn=t=>{try{return new Function("$data","$el",`with($data){${t}}`)}catch(e){return console.error(`${e.message} in expression: ${t}`),()=>{}}},pn=({el:t,ctx:e,exp:n,effect:s})=>{Z(()=>s(()=>Xt(e.scope,n,t)))},dn={bind:it,on:Gt,show:on,text:Qt,html:cn,model:ln,effect:pn},gn=(t,e,n)=>{const s=t.parentElement,r=new Comment("v-if");s.insertBefore(r,t);const i=[{exp:e,el:t}];let o,c;for(;(o=t.nextElementSibling)&&(c=null,S(o,"v-else")===""||(c=S(o,"v-else-if")));)s.removeChild(o),i.push({exp:c,el:o});const l=t.nextSibling;s.removeChild(t);let f,u=-1;const a=()=>{f&&(s.insertBefore(r,f.el),f.remove(),f=void 0)};return n.effect(()=>{for(let h=0;h<i.length;h++){const{exp:b,el:v}=i[h];if(!b||K(n.scope,b)){h!==u&&(a(),f=new pt(v,n),f.insert(s,r),s.removeChild(r),u=h);return}}u=-1,a()}),l},mn=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,At=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,yn=/^\(|\)$/g,vn=/^[{[]\s*((?:[\w_$]+\s*,?\s*)+)[\]}]$/,bn=(t,e,n)=>{const s=e.match(mn);if(!s)return;const r=t.nextSibling,i=t.parentElement,o=new Text("");i.insertBefore(o,t),i.removeChild(t);const c=s[2].trim();let l=s[1].trim().replace(yn,"").trim(),f,u=!1,a,h,b="key",v=t.getAttribute(b)||t.getAttribute(b=":key")||t.getAttribute(b="v-bind:key");v&&(t.removeAttribute(b),b==="key"&&(v=JSON.stringify(v)));let x;(x=l.match(At))&&(l=l.replace(At,"").trim(),a=x[1].trim(),x[2]&&(h=x[2].trim())),(x=l.match(vn))&&(f=x[1].split(",").map(g=>g.trim()),u=l[0]==="[");let dt=!1,j,W,q;const re=g=>{const _=new Map,p=[];if(y(g))for(let d=0;d<g.length;d++)p.push(D(_,g[d],d));else if(typeof g=="number")for(let d=0;d<g;d++)p.push(D(_,d+1,d));else if(E(g)){let d=0;for(const m in g)p.push(D(_,g[m],d++,m))}return[p,_]},D=(g,_,p,d)=>{const m={};f?f.forEach((P,k)=>m[P]=_[u?k:P]):m[l]=_,d?(a&&(m[a]=d),h&&(m[h]=p)):a&&(m[a]=p);const M=ne(n,m),w=v?K(M.scope,v):p;return g.set(w,p),M.key=w,M},gt=(g,_)=>{const p=new pt(t,g);return p.key=g.key,p.insert(i,_),p};return n.effect(()=>{const g=K(n.scope,c),_=q;if([W,q]=re(g),!dt)j=W.map(p=>gt(p,o)),dt=!0;else{for(let w=0;w<j.length;w++)q.has(j[w].key)||j[w].remove();const p=[];let d=W.length,m,M;for(;d--;){const w=W[d],P=_.get(w.key);let k;P==null?k=gt(w,m?m.el:o):(k=j[P],Object.assign(k.ctx.scope,w.scope),P!==d&&(j[P+1]!==m||M===m)&&(M=k,k.insert(i,m?m.el:o))),p.unshift(m=k)}j=p}}),r},Yt=({el:t,ctx:{scope:{$refs:e}},get:n,effect:s})=>{let r;return s(()=>{const i=n();e[i]=t,r&&i!==r&&delete e[r],r=i}),()=>{r&&delete e[r]}},xn=/^(?:v-|:|@)/,_n=/\.([\w-]+)/g;let ct=!1;const te=(t,e)=>{const n=t.nodeType;if(n===1){const s=t;if(s.hasAttribute("v-pre"))return;S(s,"v-cloak");let r;if(r=S(s,"v-if"))return gn(s,r,e);if(r=S(s,"v-for"))return bn(s,r,e);if((r=S(s,"v-scope"))||r===""){const c=r?K(e.scope,r):{};e=ne(e,c),c.$template&&wn(s,c.$template)}const i=S(s,"v-once")!=null;i&&(ct=!0),(r=S(s,"ref"))&&lt(s,Yt,`"${r}"`,e),jt(s,e);const o=[];for(const{name:c,value:l}of[...s.attributes])xn.test(c)&&c!=="v-cloak"&&(c==="v-model"?o.unshift([c,l]):c[0]==="@"||/^v-on\b/.test(c)?o.push([c,l]):Pt(s,c,l,e));for(const[c,l]of o)Pt(s,c,l,e);i&&(ct=!1)}else if(n===3){const s=t.data;if(s.includes(e.delimiters[0])){let r=[],i=0,o;for(;o=e.delimitersRE.exec(s);){const c=s.slice(i,o.index);c&&r.push(JSON.stringify(c)),r.push(`$s(${o[1]})`),i=o.index+o[0].length}i<s.length&&r.push(JSON.stringify(s.slice(i))),lt(t,Qt,r.join("+"),e)}}else n===11&&jt(t,e)},jt=(t,e)=>{let n=t.firstChild;for(;n;)n=te(n,e)||n.nextSibling},Pt=(t,e,n,s)=>{let r,i,o;if(e=e.replace(_n,(c,l)=>((o||(o={}))[l]=!0,"")),e[0]===":")r=it,i=e.slice(1);else if(e[0]==="@")r=Gt,i=e.slice(1);else{const c=e.indexOf(":"),l=c>0?e.slice(2,c):e.slice(2);r=dn[l]||s.dirs[l],i=c>0?e.slice(c+1):void 0}r&&(r===it&&i==="ref"&&(r=Yt),lt(t,r,n,s,i,o),t.removeAttribute(e))},lt=(t,e,n,s,r,i)=>{const o=e({el:t,get:(c=n)=>K(s.scope,c,t),effect:s.effect,ctx:s,exp:n,arg:r,modifiers:i});o&&s.cleanups.push(o)},wn=(t,e)=>{if(e[0]==="#"){const n=document.querySelector(e);t.appendChild(n.content.cloneNode(!0));return}t.innerHTML=e},ee=t=>{const e=Q(G({delimiters:["{{","}}"],delimitersRE:/\{\{([^]+?)\}\}/g},t),{scope:t?t.scope:J({}),dirs:t?t.dirs:{},effects:[],blocks:[],cleanups:[],effect:n=>{if(ct)return Ot(n),n;const s=Pe(n,{scheduler:()=>Ot(s)});return e.effects.push(s),s}});return e},ne=(t,e={})=>{const n=t.scope,s=Object.create(n);Object.defineProperties(s,Object.getOwnPropertyDescriptors(e)),s.$refs=Object.create(n.$refs);const r=J(new Proxy(s,{set(i,o,c,l){return l===r&&!i.hasOwnProperty(o)?Reflect.set(n,o,c):Reflect.set(i,o,c,l)}}));return se(r),Q(G({},t),{scope:r})},se=t=>{for(const e of Object.keys(t))typeof t[e]=="function"&&(t[e]=t[e].bind(t))};class pt{constructor(e,n,s=!1){R(this,"template"),R(this,"ctx"),R(this,"key"),R(this,"parentCtx"),R(this,"isFragment"),R(this,"start"),R(this,"end"),this.isFragment=e instanceof HTMLTemplateElement,s?this.template=e:this.isFragment?this.template=e.content.cloneNode(!0):this.template=e.cloneNode(!0),s?this.ctx=n:(this.parentCtx=n,n.blocks.push(this),this.ctx=ee(n)),te(this.template,this.ctx)}get el(){return this.start||this.template}insert(e,n=null){if(this.isFragment)if(this.start){let s=this.start,r;for(;s&&(r=s.nextSibling,e.insertBefore(s,n),s!==this.end);)s=r}else this.start=new Text(""),this.end=new Text(""),e.insertBefore(this.end,n),e.insertBefore(this.start,this.end),e.insertBefore(this.template,this.end);else e.insertBefore(this.template,n)}remove(){if(this.parentCtx&&ve(this.parentCtx.blocks,this),this.start){const e=this.start.parentNode;let n=this.start,s;for(;n&&(s=n.nextSibling,e.removeChild(n),n!==this.end);)n=s}else this.template.parentNode.removeChild(this.template);this.teardown()}teardown(){this.ctx.blocks.forEach(e=>{e.teardown()}),this.ctx.effects.forEach(Re),this.ctx.cleanups.forEach(e=>e())}}const Rt=t=>t.replace(/[-.*+?^${}()|[\]\/\\]/g,"\\$&"),kn=t=>{const e=ee();if(t&&(e.scope=J(t),se(e.scope),t.$delimiters)){const[s,r]=e.delimiters=t.$delimiters;e.delimitersRE=new RegExp(Rt(s)+"([^]+?)"+Rt(r),"g")}e.scope.$s=Ut,e.scope.$nextTick=Z,e.scope.$refs=Object.create(null);let n;return{directive(s,r){return r?(e.dirs[s]=r,this):e.dirs[s]},mount(s){if(typeof s=="string"&&(s=document.querySelector(s),!s))return;s=s||document.documentElement;let r;return s.hasAttribute("v-scope")?r=[s]:r=[...s.querySelectorAll("[v-scope]")].filter(i=>!i.matches("[v-scope] [v-scope]")),r.length||(r=[s]),n=r.map(i=>new pt(i,e,!0)),this},unmount(){n.forEach(s=>s.teardown())}}},Ct=document.currentScript;Ct&&Ct.hasAttribute("init")&&kn().mount();/*!
  * petite-vue-i18n-lite v1.0.2
  * (c) 2021 Erik Pham & niu tech
  * @license MIT
  */const On=["__proto__","prototype","constructor"];function $n(t){const e=typeof t;return t!==null&&(e==="object"||e==="function")}function Sn(t){return!(Array.isArray(t)?t.length:Object.keys(t).length)}function En(t){return!t.some(e=>On.indexOf(e)!==-1)}function An(t){const e=t.split("."),n=[];for(let s=0;s<e.length;s++){let r=e[s];for(;r[r.length-1]==="\\"&&e[s+1]!==void 0;)r=r.slice(0,-1)+".",r+=e[++s];n.push(r)}return En(n)?n:[]}function Nt(t,e){if(!$n(t))return"";const n=An(e);if(n.length===0)return"";let s=Object.assign({},t);for(let r=0;r<n.length;r++){if(typeof s[n[r]]=="string")return s[n[r]];if(s=s[n[r]],s==null){if(r!==n.length-1)return"";break}}return""}function jn(t,e){if(Array.isArray(e)){const n={},s=[...t.matchAll(/{(.+?)}/g)];return s&&s.forEach((r,i)=>{e[i]&&(n[r[1]]=e[i])}),n}return e}function Pn(t,e){for(const n in e)t=t.replace(`{${n}}`,String(e[n]));return t}function Cn(t){const e=Object.assign({locale:"en",fallbackLocale:"en",messages:{}},t),n=e.locale,s=e.messages;return{t(r,i){if(!r)return"";const o=typeof i=="string"&&i?i:this.current;let c=Nt(s[o],r)||Nt(s[e.fallbackLocale],r);if(i&&typeof i!="string"){const l=jn(c,i);Sn(l)||(c=Pn(c,l))}return c||r},current:n,options:t||{},changeLocale(r){this.current=r},setLocaleMessage(r,i){s[r]=Object.assign({},s[r]||{},i)},getLocaleMessage(r){return s[r]||{}}}}export{J as D,kn as Q,Cn as c};