import*as Yi from"https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();var nr=function(){var s=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(u){u.preventDefault(),n(++s%t.children.length)},!1);function e(u){return t.appendChild(u.dom),u}function n(u){for(var h=0;h<t.children.length;h++)t.children[h].style.display=h===u?"block":"none";s=u}var i=(performance||Date).now(),r=i,a=0,o=e(new nr.Panel("FPS","#0ff","#002")),l=e(new nr.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=e(new nr.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:t,addPanel:e,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){a++;var u=(performance||Date).now();if(l.update(u-i,200),u>=r+1e3&&(o.update(a*1e3/(u-r),100),r=u,a=0,c)){var h=performance.memory;c.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return u},update:function(){i=this.end()},domElement:t,setMode:n}};nr.Panel=function(s,t,e){var n=1/0,i=0,r=Math.round,a=r(window.devicePixelRatio||1),o=80*a,l=48*a,c=3*a,u=2*a,h=3*a,f=15*a,m=74*a,g=30*a,p=document.createElement("canvas");p.width=o,p.height=l,p.style.cssText="width:80px;height:48px";var d=p.getContext("2d");return d.font="bold "+9*a+"px Helvetica,Arial,sans-serif",d.textBaseline="top",d.fillStyle=e,d.fillRect(0,0,o,l),d.fillStyle=t,d.fillText(s,c,u),d.fillRect(h,f,m,g),d.fillStyle=e,d.globalAlpha=.9,d.fillRect(h,f,m,g),{dom:p,update:function(_,x){n=Math.min(n,_),i=Math.max(i,_),d.fillStyle=e,d.globalAlpha=1,d.fillRect(0,0,o,f),d.fillStyle=t,d.fillText(r(_)+" "+s+" ("+r(n)+"-"+r(i)+")",c,u),d.drawImage(p,h+a,f,m-a,g,h,f,m-a,g),d.fillRect(h+m-a,f,a,g),d.fillStyle=e,d.globalAlpha=.9,d.fillRect(h+m-a,f,a,r((1-_/x)*g))}}};const ah=nr;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ba="144",ei={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},oh=0,$a=1,lh=2,zl=1,Bl=2,Qi=3,Ci=0,ze=1,Tn=2,En=0,Ti=1,Ja=2,Qa=3,to=4,ch=5,vi=100,hh=101,uh=102,eo=103,no=104,fh=200,dh=201,ph=202,mh=203,Ul=204,kl=205,gh=206,_h=207,vh=208,xh=209,yh=210,Mh=0,wh=1,bh=2,la=3,Sh=4,Th=5,Ah=6,Eh=7,fs=0,Ch=1,Lh=2,un=0,Ph=1,Ih=2,Dh=3,Rh=4,Fh=5,Vl=300,Li=301,Pi=302,Qr=303,ca=304,ds=306,ar=1e3,Ce=1001,ha=1002,ue=1003,io=1004,ro=1005,Oe=1006,Nh=1007,ps=1008,jn=1009,Oh=1010,zh=1011,Gl=1012,Bh=1013,Wn=1014,An=1015,or=1016,Uh=1017,kh=1018,Ai=1020,Vh=1021,Gh=1022,je=1023,Wh=1024,Hh=1025,Xn=1026,Ii=1027,Xh=1028,qh=1029,jh=1030,Yh=1031,Zh=1033,Ts=33776,As=33777,Es=33778,Cs=33779,so=35840,ao=35841,oo=35842,lo=35843,Kh=36196,co=37492,ho=37496,uo=37808,fo=37809,po=37810,mo=37811,go=37812,_o=37813,vo=37814,xo=37815,yo=37816,Mo=37817,wo=37818,bo=37819,So=37820,To=37821,Ao=36492,Wl=2200,$h=2201,Jh=2202,ts=2300,es=2301,Ls=2302,Mi=2400,wi=2401,ns=2402,Sa=2500,Qh=2501,Yn=3e3,Vt=3001,tu=3200,eu=3201,ms=0,nu=1,ln="srgb",Hn="srgb-linear",Ps=7680,iu=519,Eo=35044,Co="300 es",ua=1035;class Pn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lo=1234567;const ir=Math.PI/180,lr=180/Math.PI;function In(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ce[s&255]+ce[s>>8&255]+ce[s>>16&255]+ce[s>>24&255]+"-"+ce[t&255]+ce[t>>8&255]+"-"+ce[t>>16&15|64]+ce[t>>24&255]+"-"+ce[e&63|128]+ce[e>>8&255]+"-"+ce[e>>16&255]+ce[e>>24&255]+ce[n&255]+ce[n>>8&255]+ce[n>>16&255]+ce[n>>24&255]).toLowerCase()}function oe(s,t,e){return Math.max(t,Math.min(e,s))}function Ta(s,t){return(s%t+t)%t}function ru(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function su(s,t,e){return s!==t?(e-s)/(t-s):0}function rr(s,t,e){return(1-e)*s+e*t}function au(s,t,e,n){return rr(s,t,1-Math.exp(-e*n))}function ou(s,t=1){return t-Math.abs(Ta(s,t*2)-t)}function lu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function cu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function hu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function uu(s,t){return s+Math.random()*(t-s)}function fu(s){return s*(.5-Math.random())}function du(s){s!==void 0&&(Lo=s);let t=Lo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pu(s){return s*ir}function mu(s){return s*lr}function fa(s){return(s&s-1)===0&&s!==0}function Hl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function is(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function gu(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),f=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*u,l*h,l*f,o*c);break;case"YZY":s.set(l*f,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*f,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*m,o*c);break;case"YXY":s.set(l*m,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function tr(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ve(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var $e=Object.freeze({__proto__:null,DEG2RAD:ir,RAD2DEG:lr,generateUUID:In,clamp:oe,euclideanModulo:Ta,mapLinear:ru,inverseLerp:su,lerp:rr,damp:au,pingpong:ou,smoothstep:lu,smootherstep:cu,randInt:hu,randFloat:uu,randFloatSpread:fu,seededRandom:du,degToRad:pu,radToDeg:mu,isPowerOfTwo:fa,ceilPowerOfTwo:Hl,floorPowerOfTwo:is,setQuaternionFromProperEuler:gu,normalize:ve,denormalize:tr});class Mt{constructor(t=0,e=0){Mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],p=i[0],d=i[3],_=i[6],x=i[1],M=i[4],y=i[7],w=i[2],A=i[5],P=i[8];return r[0]=a*p+o*x+l*w,r[3]=a*d+o*M+l*A,r[6]=a*_+o*y+l*P,r[1]=c*p+u*x+h*w,r[4]=c*d+u*M+h*A,r[7]=c*_+u*y+h*P,r[2]=f*p+m*x+g*w,r[5]=f*d+m*M+g*A,r[8]=f*_+m*y+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*r,m=c*r-a*l,g=e*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return t[0]=h*p,t[1]=(i*c-u*n)*p,t[2]=(o*n-i*a)*p,t[3]=f*p,t[4]=(u*e-i*l)*p,t[5]=(i*r-o*e)*p,t[6]=m*p,t[7]=(n*l-c*e)*p,t[8]=(a*e-n*r)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,r=i[0],a=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=e*r+n*l,i[3]=e*a+n*c,i[6]=e*o+n*u,i[1]=-n*r+e*l,i[4]=-n*a+e*c,i[7]=-n*o+e*u,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function Xl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function cr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Yr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Is={[ln]:{[Hn]:qn},[Hn]:{[ln]:Yr}},Ge={legacyMode:!0,get workingColorSpace(){return Hn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.legacyMode||t===e||!t||!e)return s;if(Is[t]&&Is[t][e]!==void 0){const n=Is[t][e];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}},ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ee={r:0,g:0,b:0},We={h:0,s:0,l:0},wr={h:0,s:0,l:0};function Ds(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function br(s,t){return t.r=s.r,t.g=s.g,t.b=s.b,t}class St{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Hn){return this.r=t,this.g=e,this.b=n,Ge.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Hn){if(t=Ta(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ds(a,r,t+1/3),this.g=Ds(a,r,t),this.b=Ds(a,r,t-1/3)}return Ge.toWorkingColorSpace(this,i),this}setStyle(t,e=ln){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Ge.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Ge.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Ge.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Ge.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=ln){const n=ql[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=Yr(t.r),this.g=Yr(t.g),this.b=Yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return Ge.fromWorkingColorSpace(br(this,ee),t),oe(ee.r*255,0,255)<<16^oe(ee.g*255,0,255)<<8^oe(ee.b*255,0,255)<<0}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Hn){Ge.fromWorkingColorSpace(br(this,ee),e);const n=ee.r,i=ee.g,r=ee.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Hn){return Ge.fromWorkingColorSpace(br(this,ee),e),t.r=ee.r,t.g=ee.g,t.b=ee.b,t}getStyle(t=ln){return Ge.fromWorkingColorSpace(br(this,ee),t),t!==ln?`color(${t} ${ee.r} ${ee.g} ${ee.b})`:`rgb(${ee.r*255|0},${ee.g*255|0},${ee.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(We),We.h+=t,We.s+=e,We.l+=n,this.setHSL(We.h,We.s,We.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(We),t.getHSL(wr);const n=rr(We.h,wr.h,e),i=rr(We.s,wr.s,e),r=rr(We.l,wr.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}St.NAMES=ql;let ii;class jl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ii===void 0&&(ii=cr("canvas")),ii.width=t.width,ii.height=t.height;const n=ii.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=cr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Yl{constructor(t=null){this.isSource=!0,this.uuid=In(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Rs(i[a].image)):r.push(Rs(i[a]))}else r=Rs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Rs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _u=0;class me extends Pn{constructor(t=me.DEFAULT_IMAGE,e=me.DEFAULT_MAPPING,n=Ce,i=Ce,r=Oe,a=ps,o=je,l=jn,c=1,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=In(),this.name="",this.source=new Yl(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ar:t.x=t.x-Math.floor(t.x);break;case Ce:t.x=t.x<0?0:1;break;case ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ar:t.y=t.y-Math.floor(t.y);break;case Ce:t.y=t.y<0?0:1;break;case ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}me.DEFAULT_IMAGE=null;me.DEFAULT_MAPPING=Vl;class Ot{constructor(t=0,e=0,n=0,i=1){Ot.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],p=l[2],d=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,y=(m+1)/2,w=(_+1)/2,A=(u+f)/4,P=(h+p)/4,v=(g+d)/4;return M>y&&M>w?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=A/n,r=P/n):y>w?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=v/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=P/r,i=v/r),this.set(n,i,r,e),this}let x=Math.sqrt((d-g)*(d-g)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(d-g)/x,this.y=(h-p)/x,this.z=(f-u)/x,this.w=Math.acos((c+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zn extends Pn{constructor(t,e,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ot(0,0,t,e),this.scissorTest=!1,this.viewport=new Ot(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new me(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Oe,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Yl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zl extends me{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ue,this.minFilter=ue,this.wrapR=Ce,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vu extends me{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ue,this.minFilter=ue,this.wrapR=Ce,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ne{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],m=r[a+1],g=r[a+2],p=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=p;return}if(h!==p||l!==f||c!==m||u!==g){let d=1-o;const _=l*f+c*m+u*g+h*p,x=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const w=Math.sqrt(M),A=Math.atan2(w,_*x);d=Math.sin(d*A)/w,o=Math.sin(o*A)/w}const y=o*x;if(l=l*d+f*y,c=c*d+m*y,u=u*d+g*y,h=h*d+p*y,d===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*m-c*f,t[e+1]=l*g+u*f+c*h-o*m,t[e+2]=c*g+u*m+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Po.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Po.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=l*e+a*i-o*n,u=l*n+o*e-r*i,h=l*i+r*n-a*e,f=-r*e-a*n-o*i;return this.x=c*l+f*-r+u*-o-h*-a,this.y=u*l+f*-a+h*-r-c*-o,this.z=h*l+f*-o+c*-a-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fs.copy(this).projectOnVector(t),this.sub(Fs)}reflect(t){return this.sub(Fs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fs=new L,Po=new ne;class gr{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=t.length;l<c;l+=3){const u=t[l],h=t[l+1],f=t[l+2];u<e&&(e=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(e,n,i),this.max.set(r,a,o),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=t.count;l<c;l++){const u=t.getX(l),h=t.getY(l),f=t.getZ(l);u<e&&(e=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(e,n,i),this.max.set(r,a,o),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)zn.fromBufferAttribute(r,a).applyMatrix4(t.matrixWorld),this.expandByPoint(zn)}else n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox),Ns.applyMatrix4(t.matrixWorld),this.union(Ns);const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zi),Sr.subVectors(this.max,Zi),ri.subVectors(t.a,Zi),si.subVectors(t.b,Zi),ai.subVectors(t.c,Zi),gn.subVectors(si,ri),_n.subVectors(ai,si),Bn.subVectors(ri,ai);let e=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-Bn.z,Bn.y,gn.z,0,-gn.x,_n.z,0,-_n.x,Bn.z,0,-Bn.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-Bn.y,Bn.x,0];return!Os(e,ri,si,ai,Sr)||(e=[1,0,0,0,1,0,0,0,1],!Os(e,ri,si,ai,Sr))?!1:(Tr.crossVectors(gn,_n),e=[Tr.x,Tr.y,Tr.z],Os(e,ri,si,ai,Sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return zn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(en),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const en=[new L,new L,new L,new L,new L,new L,new L,new L],zn=new L,Ns=new gr,ri=new L,si=new L,ai=new L,gn=new L,_n=new L,Bn=new L,Zi=new L,Sr=new L,Tr=new L,Un=new L;function Os(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Un.fromArray(s,r);const o=i.x*Math.abs(Un.x)+i.y*Math.abs(Un.y)+i.z*Math.abs(Un.z),l=t.dot(Un),c=e.dot(Un),u=n.dot(Un);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const xu=new gr,Io=new L,Ar=new L,zs=new L;class gs{constructor(t=new L,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){zs.subVectors(t,this.center);const e=zs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(zs.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return this.center.equals(t.center)===!0?Ar.set(0,0,1).multiplyScalar(t.radius):Ar.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(Io.copy(t.center).add(Ar)),this.expandByPoint(Io.copy(t.center).sub(Ar)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new L,Bs=new L,Er=new L,vn=new L,Us=new L,Cr=new L,ks=new L;class Kl{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(nn.copy(this.direction).multiplyScalar(e).add(this.origin),nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Bs.copy(t).add(e).multiplyScalar(.5),Er.copy(e).sub(t).normalize(),vn.copy(this.origin).sub(Bs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Er),o=vn.dot(this.direction),l=-vn.dot(Er),c=vn.lengthSq(),u=Math.abs(1-a*a);let h,f,m,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const p=1/u;h*=p,f*=p,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Er).multiplyScalar(f).add(Bs),m}intersectSphere(t,e){nn.subVectors(t.center,this.origin);const n=nn.dot(this.direction),i=nn.dot(nn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,nn)!==null}intersectTriangle(t,e,n,i,r){Us.subVectors(e,t),Cr.subVectors(n,t),ks.crossVectors(Us,Cr);let a=this.direction.dot(ks),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vn.subVectors(this.origin,t);const l=o*this.direction.dot(Cr.crossVectors(vn,Cr));if(l<0)return null;const c=o*this.direction.dot(Us.cross(vn));if(c<0||l+c>a)return null;const u=-o*vn.dot(ks);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,a,o,l,c,u,h,f,m,g,p,d){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=m,_[7]=g,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/oi.setFromMatrixColumn(t,0).length(),r=1/oi.setFromMatrixColumn(t,1).length(),a=1/oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,m=a*h,g=o*u,p=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=f-p*c,e[9]=-o*l,e[2]=p-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,m=l*h,g=c*u,p=c*h;e[0]=f+p*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=p+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,m=l*h,g=c*u,p=c*h;e[0]=f-p*o,e[4]=-a*h,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=p-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,m=a*h,g=o*u,p=o*h;e[0]=l*u,e[4]=g*c-m,e[8]=f*c+p,e[1]=l*h,e[5]=p*c+f,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,g=o*l,p=o*c;e[0]=l*u,e[4]=p-f*h,e[8]=g*h+m,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*h+g,e[10]=f-p*h}else if(t.order==="XZY"){const f=a*l,m=a*c,g=o*l,p=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+p,e[5]=a*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=o*u,e[10]=p*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yu,t,Mu)}lookAt(t,e,n){const i=this.elements;return Ae.subVectors(t,e),Ae.lengthSq()===0&&(Ae.z=1),Ae.normalize(),xn.crossVectors(n,Ae),xn.lengthSq()===0&&(Math.abs(n.z)===1?Ae.x+=1e-4:Ae.z+=1e-4,Ae.normalize(),xn.crossVectors(n,Ae)),xn.normalize(),Lr.crossVectors(Ae,xn),i[0]=xn.x,i[4]=Lr.x,i[8]=Ae.x,i[1]=xn.y,i[5]=Lr.y,i[9]=Ae.y,i[2]=xn.z,i[6]=Lr.z,i[10]=Ae.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],p=n[6],d=n[10],_=n[14],x=n[3],M=n[7],y=n[11],w=n[15],A=i[0],P=i[4],v=i[8],E=i[12],I=i[1],j=i[5],Y=i[9],z=i[13],R=i[2],U=i[6],V=i[10],Z=i[14],k=i[3],F=i[7],O=i[11],J=i[15];return r[0]=a*A+o*I+l*R+c*k,r[4]=a*P+o*j+l*U+c*F,r[8]=a*v+o*Y+l*V+c*O,r[12]=a*E+o*z+l*Z+c*J,r[1]=u*A+h*I+f*R+m*k,r[5]=u*P+h*j+f*U+m*F,r[9]=u*v+h*Y+f*V+m*O,r[13]=u*E+h*z+f*Z+m*J,r[2]=g*A+p*I+d*R+_*k,r[6]=g*P+p*j+d*U+_*F,r[10]=g*v+p*Y+d*V+_*O,r[14]=g*E+p*z+d*Z+_*J,r[3]=x*A+M*I+y*R+w*k,r[7]=x*P+M*j+y*U+w*F,r[11]=x*v+M*Y+y*V+w*O,r[15]=x*E+M*z+y*Z+w*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],m=t[14],g=t[3],p=t[7],d=t[11],_=t[15];return g*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*m-n*l*m)+p*(+e*l*m-e*c*f+r*a*f-i*a*m+i*c*u-r*l*u)+d*(+e*c*h-e*o*m-r*a*h+n*a*m+r*o*u-n*c*u)+_*(-i*o*u-e*l*h+e*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],g=t[12],p=t[13],d=t[14],_=t[15],x=h*d*c-p*f*c+p*l*m-o*d*m-h*l*_+o*f*_,M=g*f*c-u*d*c-g*l*m+a*d*m+u*l*_-a*f*_,y=u*p*c-g*h*c+g*o*m-a*p*m-u*o*_+a*h*_,w=g*h*l-u*p*l-g*o*f+a*p*f+u*o*d-a*h*d,A=e*x+n*M+i*y+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return t[0]=x*P,t[1]=(p*f*r-h*d*r-p*i*m+n*d*m+h*i*_-n*f*_)*P,t[2]=(o*d*r-p*l*r+p*i*c-n*d*c-o*i*_+n*l*_)*P,t[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*m-n*l*m)*P,t[4]=M*P,t[5]=(u*d*r-g*f*r+g*i*m-e*d*m-u*i*_+e*f*_)*P,t[6]=(g*l*r-a*d*r-g*i*c+e*d*c+a*i*_-e*l*_)*P,t[7]=(a*f*r-u*l*r+u*i*c-e*f*c-a*i*m+e*l*m)*P,t[8]=y*P,t[9]=(g*h*r-u*p*r-g*n*m+e*p*m+u*n*_-e*h*_)*P,t[10]=(a*p*r-g*o*r+g*n*c-e*p*c-a*n*_+e*o*_)*P,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*m-e*o*m)*P,t[12]=w*P,t[13]=(u*p*i-g*h*i+g*n*f-e*p*f-u*n*d+e*h*d)*P,t[14]=(g*o*i-a*p*i-g*n*l+e*p*l+a*n*d-e*o*d)*P,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*f+e*o*f)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,f=r*c,m=r*u,g=r*h,p=a*u,d=a*h,_=o*h,x=l*c,M=l*u,y=l*h,w=n.x,A=n.y,P=n.z;return i[0]=(1-(p+_))*w,i[1]=(m+y)*w,i[2]=(g-M)*w,i[3]=0,i[4]=(m-y)*A,i[5]=(1-(f+_))*A,i[6]=(d+x)*A,i[7]=0,i[8]=(g+M)*P,i[9]=(d-x)*P,i[10]=(1-(f+p))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=oi.set(i[0],i[1],i[2]).length();const a=oi.set(i[4],i[5],i[6]).length(),o=oi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],He.copy(this);const c=1/r,u=1/a,h=1/o;return He.elements[0]*=c,He.elements[1]*=c,He.elements[2]*=c,He.elements[4]*=u,He.elements[5]*=u,He.elements[6]*=u,He.elements[8]*=h,He.elements[9]*=h,He.elements[10]*=h,e.setFromRotationMatrix(He),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a){const o=this.elements,l=2*r/(e-t),c=2*r/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i),f=-(a+r)/(a-r),m=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,r,a){const o=this.elements,l=1/(e-t),c=1/(n-i),u=1/(a-r),h=(e+t)*l,f=(n+i)*c,m=(a+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const oi=new L,He=new mt,yu=new L(0,0,0),Mu=new L(1,1,1),xn=new L,Lr=new L,Ae=new L,Do=new mt,Ro=new ne;class Pe{constructor(t=0,e=0,n=0,i=Pe.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Do.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Do,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ro.setFromEuler(this),this.setFromQuaternion(Ro,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Pe.DefaultOrder="XYZ";Pe.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class $l{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wu=0;const Fo=new L,li=new ne,rn=new mt,Pr=new L,Ki=new L,bu=new L,Su=new ne,No=new L(1,0,0),Oo=new L(0,1,0),zo=new L(0,0,1),Tu={type:"added"},Bo={type:"removed"};class Xt extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DefaultUp.clone();const t=new L,e=new Pe,n=new ne,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new mt},normalMatrix:{value:new Le}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Xt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Xt.DefaultMatrixWorldAutoUpdate,this.layers=new $l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.multiply(li),this}rotateOnWorldAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.premultiply(li),this}rotateX(t){return this.rotateOnAxis(No,t)}rotateY(t){return this.rotateOnAxis(Oo,t)}rotateZ(t){return this.rotateOnAxis(zo,t)}translateOnAxis(t,e){return Fo.copy(t).applyQuaternion(this.quaternion),this.position.add(Fo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(No,t)}translateY(t){return this.translateOnAxis(Oo,t)}translateZ(t){return this.translateOnAxis(zo,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pr.copy(t):Pr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Ki,Pr,this.up):rn.lookAt(Pr,Ki,this.up),this.quaternion.setFromRotationMatrix(rn),i&&(rn.extractRotation(i.matrixWorld),li.setFromRotationMatrix(rn),this.quaternion.premultiply(li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Tu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bo)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Bo)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(rn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,t,bu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Su,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Xt.DefaultUp=new L(0,1,0);Xt.DefaultMatrixAutoUpdate=!0;Xt.DefaultMatrixWorldAutoUpdate=!0;const Xe=new L,sn=new L,Vs=new L,an=new L,ci=new L,hi=new L,Uo=new L,Gs=new L,Ws=new L,Hs=new L;class cn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Xe.subVectors(t,e),i.cross(Xe);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Xe.subVectors(i,e),sn.subVectors(n,e),Vs.subVectors(t,e);const a=Xe.dot(Xe),o=Xe.dot(sn),l=Xe.dot(Vs),c=sn.dot(sn),u=sn.dot(Vs),h=a*c-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,an),an.x>=0&&an.y>=0&&an.x+an.y<=1}static getUV(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,an),l.set(0,0),l.addScaledVector(r,an.x),l.addScaledVector(a,an.y),l.addScaledVector(o,an.z),l}static isFrontFacing(t,e,n,i){return Xe.subVectors(n,e),sn.subVectors(t,e),Xe.cross(sn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Xe.cross(sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return cn.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ci.subVectors(i,n),hi.subVectors(r,n),Gs.subVectors(t,n);const l=ci.dot(Gs),c=hi.dot(Gs);if(l<=0&&c<=0)return e.copy(n);Ws.subVectors(t,i);const u=ci.dot(Ws),h=hi.dot(Ws);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(ci,a);Hs.subVectors(t,r);const m=ci.dot(Hs),g=hi.dot(Hs);if(g>=0&&m<=g)return e.copy(r);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(hi,o);const d=u*g-m*h;if(d<=0&&h-u>=0&&m-g>=0)return Uo.subVectors(r,i),o=(h-u)/(h-u+(m-g)),e.copy(i).addScaledVector(Uo,o);const _=1/(d+p+f);return a=p*_,o=f*_,e.copy(n).addScaledVector(ci,a).addScaledVector(hi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Au=0;class Dn extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=In(),this.name="",this.type="Material",this.blending=Ti,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ul,this.blendDst=kl,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Jl extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Jt=new L,Ir=new Mt;class Be{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Eo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ir.fromBufferAttribute(this,e),Ir.applyMatrix3(t),this.setXY(e,Ir.x,Ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Jt.fromBufferAttribute(this,e),Jt.applyMatrix3(t),this.setXYZ(e,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Jt.fromBufferAttribute(this,e),Jt.applyMatrix4(t),this.setXYZ(e,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Jt.fromBufferAttribute(this,e),Jt.applyNormalMatrix(t),this.setXYZ(e,Jt.x,Jt.y,Jt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Jt.fromBufferAttribute(this,e),Jt.transformDirection(t),this.setXYZ(e,Jt.x,Jt.y,Jt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=tr(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=tr(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=tr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=tr(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array),r=ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Eo&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Aa extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ql extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Eu=0;const Fe=new mt,Xs=new Xt,ui=new L,Ee=new gr,$i=new gr,re=new L;class ye extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xl(t)?Ql:Aa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Le().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,n){return Fe.makeTranslation(t,e,n),this.applyMatrix4(Fe),this}scale(t,e,n){return Fe.makeScale(t,e,n),this.applyMatrix4(Fe),this}lookAt(t){return Xs.lookAt(t),Xs.updateMatrix(),this.applyMatrix4(Xs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new le(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ee.setFromBufferAttribute(r),this.morphTargetsRelative?(re.addVectors(this.boundingBox.min,Ee.min),this.boundingBox.expandByPoint(re),re.addVectors(this.boundingBox.max,Ee.max),this.boundingBox.expandByPoint(re)):(this.boundingBox.expandByPoint(Ee.min),this.boundingBox.expandByPoint(Ee.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Ee.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];$i.setFromBufferAttribute(o),this.morphTargetsRelative?(re.addVectors(Ee.min,$i.min),Ee.expandByPoint(re),re.addVectors(Ee.max,$i.max),Ee.expandByPoint(re)):(Ee.expandByPoint($i.min),Ee.expandByPoint($i.max))}Ee.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)re.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(re));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)re.fromBufferAttribute(o,c),l&&(ui.fromBufferAttribute(t,c),re.add(ui)),i=Math.max(i,n.distanceToSquared(re))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<o;I++)c[I]=new L,u[I]=new L;const h=new L,f=new L,m=new L,g=new Mt,p=new Mt,d=new Mt,_=new L,x=new L;function M(I,j,Y){h.fromArray(i,I*3),f.fromArray(i,j*3),m.fromArray(i,Y*3),g.fromArray(a,I*2),p.fromArray(a,j*2),d.fromArray(a,Y*2),f.sub(h),m.sub(h),p.sub(g),d.sub(g);const z=1/(p.x*d.y-d.x*p.y);!isFinite(z)||(_.copy(f).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(z),x.copy(m).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(z),c[I].add(_),c[j].add(_),c[Y].add(_),u[I].add(x),u[j].add(x),u[Y].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let I=0,j=y.length;I<j;++I){const Y=y[I],z=Y.start,R=Y.count;for(let U=z,V=z+R;U<V;U+=3)M(n[U+0],n[U+1],n[U+2])}const w=new L,A=new L,P=new L,v=new L;function E(I){P.fromArray(r,I*3),v.copy(P);const j=c[I];w.copy(j),w.sub(P.multiplyScalar(P.dot(j))).normalize(),A.crossVectors(v,j);const z=A.dot(u[I])<0?-1:1;l[I*4]=w.x,l[I*4+1]=w.y,l[I*4+2]=w.z,l[I*4+3]=z}for(let I=0,j=y.length;I<j;++I){const Y=y[I],z=Y.start,R=Y.count;for(let U=z,V=z+R;U<V;U+=3)E(n[U+0]),E(n[U+1]),E(n[U+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),p=t.getX(f+1),d=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,p),a.fromBufferAttribute(e,d),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,d),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)re.fromBufferAttribute(t,e),re.normalize(),t.setXYZ(e,re.x,re.y,re.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let p=0,d=l.length;p<d;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let _=0;_<u;_++)f[g++]=c[m++]}return new Be(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ko=new mt,fi=new Kl,qs=new gs,yn=new L,Mn=new L,wn=new L,js=new L,Ys=new L,Zs=new L,Dr=new L,Rr=new L,Fr=new L,Nr=new Mt,Or=new Mt,zr=new Mt,Ks=new L,Br=new L;class Me extends Xt{constructor(t=new ye,e=new Jl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(r),t.ray.intersectsSphere(qs)===!1)||(ko.copy(r).invert(),fi.copy(t.ray).applyMatrix4(ko),n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,d=m.length;p<d;p++){const _=m[p],x=i[_.materialIndex],M=Math.max(_.start,g.start),y=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let w=M,A=y;w<A;w+=3){const P=o.getX(w),v=o.getX(w+1),E=o.getX(w+2);a=Ur(this,x,t,fi,l,c,u,h,f,P,v,E),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=_.materialIndex,e.push(a))}}else{const p=Math.max(0,g.start),d=Math.min(o.count,g.start+g.count);for(let _=p,x=d;_<x;_+=3){const M=o.getX(_),y=o.getX(_+1),w=o.getX(_+2);a=Ur(this,i,t,fi,l,c,u,h,f,M,y,w),a&&(a.faceIndex=Math.floor(_/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,d=m.length;p<d;p++){const _=m[p],x=i[_.materialIndex],M=Math.max(_.start,g.start),y=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let w=M,A=y;w<A;w+=3){const P=w,v=w+1,E=w+2;a=Ur(this,x,t,fi,l,c,u,h,f,P,v,E),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=_.materialIndex,e.push(a))}}else{const p=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=p,x=d;_<x;_+=3){const M=_,y=_+1,w=_+2;a=Ur(this,i,t,fi,l,c,u,h,f,M,y,w),a&&(a.faceIndex=Math.floor(_/3),e.push(a))}}}}function Cu(s,t,e,n,i,r,a,o){let l;if(t.side===ze?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side!==Tn,o),l===null)return null;Br.copy(o),Br.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Br);return c<e.near||c>e.far?null:{distance:c,point:Br.clone(),object:s}}function Ur(s,t,e,n,i,r,a,o,l,c,u,h){yn.fromBufferAttribute(i,c),Mn.fromBufferAttribute(i,u),wn.fromBufferAttribute(i,h);const f=s.morphTargetInfluences;if(r&&f){Dr.set(0,0,0),Rr.set(0,0,0),Fr.set(0,0,0);for(let g=0,p=r.length;g<p;g++){const d=f[g],_=r[g];d!==0&&(js.fromBufferAttribute(_,c),Ys.fromBufferAttribute(_,u),Zs.fromBufferAttribute(_,h),a?(Dr.addScaledVector(js,d),Rr.addScaledVector(Ys,d),Fr.addScaledVector(Zs,d)):(Dr.addScaledVector(js.sub(yn),d),Rr.addScaledVector(Ys.sub(Mn),d),Fr.addScaledVector(Zs.sub(wn),d)))}yn.add(Dr),Mn.add(Rr),wn.add(Fr)}s.isSkinnedMesh&&(s.boneTransform(c,yn),s.boneTransform(u,Mn),s.boneTransform(h,wn));const m=Cu(s,t,e,n,yn,Mn,wn,Ks);if(m){o&&(Nr.fromBufferAttribute(o,c),Or.fromBufferAttribute(o,u),zr.fromBufferAttribute(o,h),m.uv=cn.getUV(Ks,yn,Mn,wn,Nr,Or,zr,new Mt)),l&&(Nr.fromBufferAttribute(l,c),Or.fromBufferAttribute(l,u),zr.fromBufferAttribute(l,h),m.uv2=cn.getUV(Ks,yn,Mn,wn,Nr,Or,zr,new Mt));const g={a:c,b:u,c:h,normal:new L,materialIndex:0};cn.getNormal(yn,Mn,wn,g.normal),m.face=g}return m}class Rn extends ye{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(h,2));function g(p,d,_,x,M,y,w,A,P,v,E){const I=y/P,j=w/v,Y=y/2,z=w/2,R=A/2,U=P+1,V=v+1;let Z=0,k=0;const F=new L;for(let O=0;O<V;O++){const J=O*j-z;for(let K=0;K<U;K++){const tt=K*I-Y;F[p]=tt*x,F[d]=J*M,F[_]=R,c.push(F.x,F.y,F.z),F[p]=0,F[d]=0,F[_]=A>0?1:-1,u.push(F.x,F.y,F.z),h.push(K/P),h.push(1-O/v),Z+=1}}for(let O=0;O<v;O++)for(let J=0;J<P;J++){const K=f+J+U*O,tt=f+J+U*(O+1),rt=f+(J+1)+U*(O+1),ft=f+(J+1)+U*O;l.push(K,tt,ft),l.push(tt,rt,ft),k+=6}o.addGroup(m,k,E),m+=k,f+=Z}}static fromJSON(t){return new Rn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Di(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function he(s){const t={};for(let e=0;e<s.length;e++){const n=Di(s[e]);for(const i in n)t[i]=n[i]}return t}function Lu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}const Pu={clone:Di,merge:he};var Iu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iu,this.fragmentShader=Du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Di(t.uniforms),this.uniformsGroups=Lu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class tc extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class de extends tc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ir*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const di=90,pi=1;class Ru extends Xt{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new de(di,pi,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new L(1,0,0)),this.add(i);const r=new de(di,pi,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new L(-1,0,0)),this.add(r);const a=new de(di,pi,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new L(0,1,0)),this.add(a);const o=new de(di,pi,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new L(0,-1,0)),this.add(o);const l=new de(di,pi,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,1)),this.add(l);const c=new de(di,pi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,l,c]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=un,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class ec extends me{constructor(t,e,n,i,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Li,super(t,e,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Fu extends Zn{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ec(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Oe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Rn(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:En});r.uniforms.tEquirect.value=e;const a=new Me(i,r),o=e.minFilter;return e.minFilter===ps&&(e.minFilter=Oe),new Ru(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const $s=new L,Nu=new L,Ou=new Le;class kn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=$s.subVectors(n,e).cross(Nu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta($s),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ou.getNormalMatrix(t),i=this.coplanarPoint($s).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new gs,kr=new L;class Ea{constructor(t=new kn,e=new kn,n=new kn,i=new kn,r=new kn,a=new kn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],p=n[11],d=n[12],_=n[13],x=n[14],M=n[15];return e[0].setComponents(o-i,h-l,p-f,M-d).normalize(),e[1].setComponents(o+i,h+l,p+f,M+d).normalize(),e[2].setComponents(o+r,h+c,p+m,M+_).normalize(),e[3].setComponents(o-r,h-c,p-m,M-_).normalize(),e[4].setComponents(o-a,h-u,p-g,M-x).normalize(),e[5].setComponents(o+a,h+u,p+g,M+x).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSprite(t){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(kr.x=i.normal.x>0?t.max.x:t.min.x,kr.y=i.normal.y>0?t.max.y:t.min.y,kr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function zu(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,m=u.updateRange;s.bindBuffer(h,c),m.count===-1?s.bufferSubData(h,0,f):(e?s.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class Ca extends ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,f=e/l,m=[],g=[],p=[],d=[];for(let _=0;_<u;_++){const x=_*f-a;for(let M=0;M<c;M++){const y=M*h-r;g.push(y,-x,0),p.push(0,0,1),d.push(M/o),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let x=0;x<o;x++){const M=x+c*_,y=x+c*(_+1),w=x+1+c*(_+1),A=x+1+c*_;m.push(M,y,A),m.push(y,w,A)}this.setIndex(m),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(p,3)),this.setAttribute("uv",new le(d,2))}static fromJSON(t){return new Ca(t.width,t.height,t.widthSegments,t.heightSegments)}}var Bu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Uu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ku=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hu="vec3 transformed = vec3( position );",Xu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,ju=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,sf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,af=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",ff=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Af=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Ef=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,If=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Rf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ff=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Of=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Bf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Gf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Kf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$f=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Qf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,id=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,rd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,sd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ad=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,od=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ud=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,md=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gd=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_d=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vd=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,xd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Md=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,wd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Td=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ad=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ed=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Ld=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Pd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Id=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Dd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Rd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Fd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Nd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Od=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bd=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kd=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$d=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,np=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ip=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ap=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,up=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,dp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,At={alphamap_fragment:Bu,alphamap_pars_fragment:Uu,alphatest_fragment:ku,alphatest_pars_fragment:Vu,aomap_fragment:Gu,aomap_pars_fragment:Wu,begin_vertex:Hu,beginnormal_vertex:Xu,bsdfs:qu,iridescence_fragment:ju,bumpmap_pars_fragment:Yu,clipping_planes_fragment:Zu,clipping_planes_pars_fragment:Ku,clipping_planes_pars_vertex:$u,clipping_planes_vertex:Ju,color_fragment:Qu,color_pars_fragment:tf,color_pars_vertex:ef,color_vertex:nf,common:rf,cube_uv_reflection_fragment:sf,defaultnormal_vertex:af,displacementmap_pars_vertex:of,displacementmap_vertex:lf,emissivemap_fragment:cf,emissivemap_pars_fragment:hf,encodings_fragment:uf,encodings_pars_fragment:ff,envmap_fragment:df,envmap_common_pars_fragment:pf,envmap_pars_fragment:mf,envmap_pars_vertex:gf,envmap_physical_pars_fragment:Cf,envmap_vertex:_f,fog_vertex:vf,fog_pars_vertex:xf,fog_fragment:yf,fog_pars_fragment:Mf,gradientmap_pars_fragment:wf,lightmap_fragment:bf,lightmap_pars_fragment:Sf,lights_lambert_fragment:Tf,lights_lambert_pars_fragment:Af,lights_pars_begin:Ef,lights_toon_fragment:Lf,lights_toon_pars_fragment:Pf,lights_phong_fragment:If,lights_phong_pars_fragment:Df,lights_physical_fragment:Rf,lights_physical_pars_fragment:Ff,lights_fragment_begin:Nf,lights_fragment_maps:Of,lights_fragment_end:zf,logdepthbuf_fragment:Bf,logdepthbuf_pars_fragment:Uf,logdepthbuf_pars_vertex:kf,logdepthbuf_vertex:Vf,map_fragment:Gf,map_pars_fragment:Wf,map_particle_fragment:Hf,map_particle_pars_fragment:Xf,metalnessmap_fragment:qf,metalnessmap_pars_fragment:jf,morphcolor_vertex:Yf,morphnormal_vertex:Zf,morphtarget_pars_vertex:Kf,morphtarget_vertex:$f,normal_fragment_begin:Jf,normal_fragment_maps:Qf,normal_pars_fragment:td,normal_pars_vertex:ed,normal_vertex:nd,normalmap_pars_fragment:id,clearcoat_normal_fragment_begin:rd,clearcoat_normal_fragment_maps:sd,clearcoat_pars_fragment:ad,iridescence_pars_fragment:od,output_fragment:ld,packing:cd,premultiplied_alpha_fragment:hd,project_vertex:ud,dithering_fragment:fd,dithering_pars_fragment:dd,roughnessmap_fragment:pd,roughnessmap_pars_fragment:md,shadowmap_pars_fragment:gd,shadowmap_pars_vertex:_d,shadowmap_vertex:vd,shadowmask_pars_fragment:xd,skinbase_vertex:yd,skinning_pars_vertex:Md,skinning_vertex:wd,skinnormal_vertex:bd,specularmap_fragment:Sd,specularmap_pars_fragment:Td,tonemapping_fragment:Ad,tonemapping_pars_fragment:Ed,transmission_fragment:Cd,transmission_pars_fragment:Ld,uv_pars_fragment:Pd,uv_pars_vertex:Id,uv_vertex:Dd,uv2_pars_fragment:Rd,uv2_pars_vertex:Fd,uv2_vertex:Nd,worldpos_vertex:Od,background_vert:zd,background_frag:Bd,cube_vert:Ud,cube_frag:kd,depth_vert:Vd,depth_frag:Gd,distanceRGBA_vert:Wd,distanceRGBA_frag:Hd,equirect_vert:Xd,equirect_frag:qd,linedashed_vert:jd,linedashed_frag:Yd,meshbasic_vert:Zd,meshbasic_frag:Kd,meshlambert_vert:$d,meshlambert_frag:Jd,meshmatcap_vert:Qd,meshmatcap_frag:tp,meshnormal_vert:ep,meshnormal_frag:np,meshphong_vert:ip,meshphong_frag:rp,meshphysical_vert:sp,meshphysical_frag:ap,meshtoon_vert:op,meshtoon_frag:lp,points_vert:cp,points_frag:hp,shadow_vert:up,shadow_frag:fp,sprite_vert:dp,sprite_frag:pp},it={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Le},uv2Transform:{value:new Le},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Le}}},Ke={basic:{uniforms:he([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:he([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new St(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:he([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:he([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:he([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new St(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:he([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:he([it.points,it.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:he([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:he([it.common,it.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:he([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:he([it.sprite,it.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null}},vertexShader:At.background_vert,fragmentShader:At.background_frag},cube:{uniforms:he([it.envmap,{opacity:{value:1}}]),vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:he([it.common,it.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:he([it.lights,it.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};Ke.physical={uniforms:he([Ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};function mp(s,t,e,n,i,r){const a=new St(0);let o=i===!0?0:1,l,c,u=null,h=0,f=null;function m(p,d){let _=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=t.get(x));const M=s.xr,y=M.getSession&&M.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?g(a,o):x&&x.isColor&&(g(x,1),_=!0),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ds)?(c===void 0&&(c=new Me(new Rn(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Di(Ke.cube.uniforms),vertexShader:Ke.cube.vertexShader,fragmentShader:Ke.cube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(u!==x||h!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,f=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Me(new Ca(2,2),new Kn({name:"BackgroundMaterial",uniforms:Di(Ke.background.uniforms),vertexShader:Ke.background.vertexShader,fragmentShader:Ke.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,f=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,d){e.buffers.color.setClear(p.r,p.g,p.b,d,r)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),o=d,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,g(a,o)},render:m}}function gp(s,t,e,n){const i=s.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=d(null);let c=l,u=!1;function h(R,U,V,Z,k){let F=!1;if(a){const O=p(Z,V,U);c!==O&&(c=O,m(c.object)),F=_(R,Z,V,k),F&&x(R,Z,V,k)}else{const O=U.wireframe===!0;(c.geometry!==Z.id||c.program!==V.id||c.wireframe!==O)&&(c.geometry=Z.id,c.program=V.id,c.wireframe=O,F=!0)}k!==null&&e.update(k,34963),(F||u)&&(u=!1,v(R,U,V,Z),k!==null&&s.bindBuffer(34963,e.get(k).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function p(R,U,V){const Z=V.wireframe===!0;let k=o[R.id];k===void 0&&(k={},o[R.id]=k);let F=k[U.id];F===void 0&&(F={},k[U.id]=F);let O=F[Z];return O===void 0&&(O=d(f()),F[Z]=O),O}function d(R){const U=[],V=[],Z=[];for(let k=0;k<i;k++)U[k]=0,V[k]=0,Z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:Z,object:R,attributes:{},index:null}}function _(R,U,V,Z){const k=c.attributes,F=U.attributes;let O=0;const J=V.getAttributes();for(const K in J)if(J[K].location>=0){const rt=k[K];let ft=F[K];if(ft===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(ft=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(ft=R.instanceColor)),rt===void 0||rt.attribute!==ft||ft&&rt.data!==ft.data)return!0;O++}return c.attributesNum!==O||c.index!==Z}function x(R,U,V,Z){const k={},F=U.attributes;let O=0;const J=V.getAttributes();for(const K in J)if(J[K].location>=0){let rt=F[K];rt===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(rt=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(rt=R.instanceColor));const ft={};ft.attribute=rt,rt&&rt.data&&(ft.data=rt.data),k[K]=ft,O++}c.attributes=k,c.attributesNum=O,c.index=Z}function M(){const R=c.newAttributes;for(let U=0,V=R.length;U<V;U++)R[U]=0}function y(R){w(R,0)}function w(R,U){const V=c.newAttributes,Z=c.enabledAttributes,k=c.attributeDivisors;V[R]=1,Z[R]===0&&(s.enableVertexAttribArray(R),Z[R]=1),k[R]!==U&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,U),k[R]=U)}function A(){const R=c.newAttributes,U=c.enabledAttributes;for(let V=0,Z=U.length;V<Z;V++)U[V]!==R[V]&&(s.disableVertexAttribArray(V),U[V]=0)}function P(R,U,V,Z,k,F){n.isWebGL2===!0&&(V===5124||V===5125)?s.vertexAttribIPointer(R,U,V,k,F):s.vertexAttribPointer(R,U,V,Z,k,F)}function v(R,U,V,Z){if(n.isWebGL2===!1&&(R.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const k=Z.attributes,F=V.getAttributes(),O=U.defaultAttributeValues;for(const J in F){const K=F[J];if(K.location>=0){let tt=k[J];if(tt===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(tt=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(tt=R.instanceColor)),tt!==void 0){const rt=tt.normalized,ft=tt.itemSize,X=e.get(tt);if(X===void 0)continue;const Ct=X.buffer,dt=X.type,_t=X.bytesPerElement;if(tt.isInterleavedBufferAttribute){const ht=tt.data,Ft=ht.stride,wt=tt.offset;if(ht.isInstancedInterleavedBuffer){for(let gt=0;gt<K.locationSize;gt++)w(K.location+gt,ht.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let gt=0;gt<K.locationSize;gt++)y(K.location+gt);s.bindBuffer(34962,Ct);for(let gt=0;gt<K.locationSize;gt++)P(K.location+gt,ft/K.locationSize,dt,rt,Ft*_t,(wt+ft/K.locationSize*gt)*_t)}else{if(tt.isInstancedBufferAttribute){for(let ht=0;ht<K.locationSize;ht++)w(K.location+ht,tt.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ht=0;ht<K.locationSize;ht++)y(K.location+ht);s.bindBuffer(34962,Ct);for(let ht=0;ht<K.locationSize;ht++)P(K.location+ht,ft/K.locationSize,dt,rt,ft*_t,ft/K.locationSize*ht*_t)}}else if(O!==void 0){const rt=O[J];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(K.location,rt);break;case 3:s.vertexAttrib3fv(K.location,rt);break;case 4:s.vertexAttrib4fv(K.location,rt);break;default:s.vertexAttrib1fv(K.location,rt)}}}}A()}function E(){Y();for(const R in o){const U=o[R];for(const V in U){const Z=U[V];for(const k in Z)g(Z[k].object),delete Z[k];delete U[V]}delete o[R]}}function I(R){if(o[R.id]===void 0)return;const U=o[R.id];for(const V in U){const Z=U[V];for(const k in Z)g(Z[k].object),delete Z[k];delete U[V]}delete o[R.id]}function j(R){for(const U in o){const V=o[U];if(V[R.id]===void 0)continue;const Z=V[R.id];for(const k in Z)g(Z[k].object),delete Z[k];delete V[R.id]}}function Y(){z(),u=!0,c!==l&&(c=l,m(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:z,dispose:E,releaseStatesOfGeometry:I,releaseStatesOfProgram:j,initAttributes:M,enableAttribute:y,disableUnusedAttributes:A}}function _p(s,t,e,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,u){s.drawArrays(r,c,u),e.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,m;if(i)f=s,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,u,h),e.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=l}function vp(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=s.getParameter(34930),f=s.getParameter(35660),m=s.getParameter(3379),g=s.getParameter(34076),p=s.getParameter(34921),d=s.getParameter(36347),_=s.getParameter(36348),x=s.getParameter(36349),M=f>0,y=a||t.has("OES_texture_float"),w=M&&y,A=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:M,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:A}}function xp(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new kn,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||i;return i=f,e=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,m){const g=h.clippingPlanes,p=h.clipIntersection,d=h.clipShadows,_=s.get(h);if(!i||g===null||g.length===0||r&&!d)r?u(null):c();else{const x=r?0:n,M=x*4;let y=_.clippingState||null;l.value=y,y=u(g,f,M,m);for(let w=0;w!==M;++w)y[w]=e[w];_.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,m,g){const p=h!==null?h.length:0;let d=null;if(p!==0){if(d=l.value,g!==!0||d===null){const _=m+p*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(d===null||d.length<_)&&(d=new Float32Array(_));for(let M=0,y=m;M!==p;++M,y+=4)a.copy(h[M]).applyMatrix4(x,o),a.normal.toArray(d,y),d[y+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,d}}function yp(s){let t=new WeakMap;function e(a,o){return o===Qr?a.mapping=Li:o===ca&&(a.mapping=Pi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Qr||o===ca)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Fu(l.height/2);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class La extends tc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const bi=4,Vo=[.125,.215,.35,.446,.526,.582],Gn=20,Js=new La,Go=new St;let Qs=null;const Vn=(1+Math.sqrt(5))/2,gi=1/Vn,Wo=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Vn,gi),new L(0,Vn,-gi),new L(gi,0,Vn),new L(-gi,0,Vn),new L(Vn,gi,0),new L(-Vn,gi,0)];class Ho{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Qs=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qs),t.scissorTest=!1,Vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qs=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:or,format:je,encoding:Yn,depthBuffer:!1},i=Xo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mp(r)),this._blurMaterial=wp(r,t,e)}return i}_compileMaterial(t){const e=new Me(this._lodPlanes[0],t);this._renderer.compile(e,Js)}_sceneToCubeUV(t,e,n,i){const o=new de(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Go),u.toneMapping=un,u.autoClear=!1;const m=new Jl({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new Me(new Rn,m);let p=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,p=!0):(m.color.copy(Go),p=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):x===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const M=this._cubeSize;Vr(i,x*M,_>2?M:0,M,M),u.setRenderTarget(i),p&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Li||t.mapping===Pi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=jo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Me(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Vr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Js)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Wo[(i-1)%Wo.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Me(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Gn-1),p=r/g,d=isFinite(r)?1+Math.floor(u*p):Gn;d>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Gn}`);const _=[];let x=0;for(let P=0;P<Gn;++P){const v=P/p,E=Math.exp(-v*v/2);_.push(E),P===0?x+=E:P<d&&(x+=2*E)}for(let P=0;P<_.length;P++)_[P]=_[P]/x;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=_,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const y=this._sizeLods[i],w=3*y*(i>M-bi?i-M+bi:0),A=4*(this._cubeSize-y);Vr(e,w,A,3*y,2*y),l.setRenderTarget(e),l.render(h,Js)}}function Mp(s){const t=[],e=[],n=[];let i=s;const r=s-bi+1+Vo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-bi?l=Vo[a-s+bi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,p=3,d=2,_=1,x=new Float32Array(p*g*m),M=new Float32Array(d*g*m),y=new Float32Array(_*g*m);for(let A=0;A<m;A++){const P=A%3*2/3-1,v=A>2?0:-1,E=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];x.set(E,p*g*A),M.set(f,d*g*A);const I=[A,A,A,A,A,A];y.set(I,_*g*A)}const w=new ye;w.setAttribute("position",new Be(x,p)),w.setAttribute("uv",new Be(M,d)),w.setAttribute("faceIndex",new Be(y,_)),t.push(w),i>bi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xo(s,t,e){const n=new Zn(s,t,e);return n.texture.mapping=ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function wp(s,t,e){const n=new Float32Array(Gn),i=new L(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function qo(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function jo(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Pa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bp(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Qr||l===ca,u=l===Li||l===Pi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new Ho(s)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new Ho(s));const f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Sp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tp(s,t,e,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const p=m[g];for(let d=0,_=p.length;d<_;d++)t.update(p[d],34962)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let p=0;if(m!==null){const x=m.array;p=m.version;for(let M=0,y=x.length;M<y;M+=3){const w=x[M+0],A=x[M+1],P=x[M+2];f.push(w,A,A,P,P,w)}}else{const x=g.array;p=g.version;for(let M=0,y=x.length/3-1;M<y;M+=3){const w=M+0,A=M+1,P=M+2;f.push(w,A,A,P,P,w)}}const d=new(Xl(f)?Ql:Aa)(f,1);d.version=p;const _=r.get(h);_&&t.remove(_),r.set(h,d)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Ap(s,t,e,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,m){s.drawElements(r,m,o,f*l),e.update(m,r,1)}function h(f,m,g){if(g===0)return;let p,d;if(i)p=s,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,m,o,f*l,g),e.update(m,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function Ep(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case 4:e.triangles+=o*(r/3);break;case 1:e.lines+=o*(r/2);break;case 3:e.lines+=o*(r-1);break;case 2:e.lines+=o*r;break;case 0:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Cp(s,t){return s[0]-t[0]}function Lp(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Pp(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new Ot,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,f){const m=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let d=r.get(u);if(d===void 0||d.count!==p){let U=function(){z.dispose(),r.delete(u),u.removeEventListener("dispose",U)};d!==void 0&&d.texture.dispose();const M=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],v=u.morphAttributes.color||[];let E=0;M===!0&&(E=1),y===!0&&(E=2),w===!0&&(E=3);let I=u.attributes.position.count*E,j=1;I>t.maxTextureSize&&(j=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const Y=new Float32Array(I*j*4*p),z=new Zl(Y,I,j,p);z.type=An,z.needsUpdate=!0;const R=E*4;for(let V=0;V<p;V++){const Z=A[V],k=P[V],F=v[V],O=I*j*4*V;for(let J=0;J<Z.count;J++){const K=J*R;M===!0&&(a.fromBufferAttribute(Z,J),Y[O+K+0]=a.x,Y[O+K+1]=a.y,Y[O+K+2]=a.z,Y[O+K+3]=0),y===!0&&(a.fromBufferAttribute(k,J),Y[O+K+4]=a.x,Y[O+K+5]=a.y,Y[O+K+6]=a.z,Y[O+K+7]=0),w===!0&&(a.fromBufferAttribute(F,J),Y[O+K+8]=a.x,Y[O+K+9]=a.y,Y[O+K+10]=a.z,Y[O+K+11]=F.itemSize===4?a.w:1)}}d={count:p,texture:z,size:new Mt(I,j)},r.set(u,d),u.addEventListener("dispose",U)}let _=0;for(let M=0;M<m.length;M++)_+=m[M];const x=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(s,"morphTargetBaseInfluence",x),f.getUniforms().setValue(s,"morphTargetInfluences",m),f.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}else{const g=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==g){p=[];for(let y=0;y<g;y++)p[y]=[y,0];n[u.id]=p}for(let y=0;y<g;y++){const w=p[y];w[0]=y,w[1]=m[y]}p.sort(Lp);for(let y=0;y<8;y++)y<g&&p[y][1]?(o[y][0]=p[y][0],o[y][1]=p[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Cp);const d=u.morphAttributes.position,_=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const w=o[y],A=w[0],P=w[1];A!==Number.MAX_SAFE_INTEGER&&P?(d&&u.getAttribute("morphTarget"+y)!==d[A]&&u.setAttribute("morphTarget"+y,d[A]),_&&u.getAttribute("morphNormal"+y)!==_[A]&&u.setAttribute("morphNormal"+y,_[A]),i[y]=P,x+=P):(d&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),_&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const M=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(s,"morphTargetBaseInfluence",M),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Ip(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);return i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const ic=new me,rc=new Zl,sc=new vu,ac=new ec,Yo=[],Zo=[],Ko=new Float32Array(16),$o=new Float32Array(9),Jo=new Float32Array(4);function Ni(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Yo[i];if(r===void 0&&(r=new Float32Array(i),Yo[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ge(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function _e(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function _s(s,t){let e=Zo[t];e===void 0&&(e=new Int32Array(t),Zo[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Dp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Rp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2fv(this.addr,t),_e(e,t)}}function Fp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;s.uniform3fv(this.addr,t),_e(e,t)}}function Np(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4fv(this.addr,t),_e(e,t)}}function Op(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Jo.set(n),s.uniformMatrix2fv(this.addr,!1,Jo),_e(e,n)}}function zp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;$o.set(n),s.uniformMatrix3fv(this.addr,!1,$o),_e(e,n)}}function Bp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Ko.set(n),s.uniformMatrix4fv(this.addr,!1,Ko),_e(e,n)}}function Up(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function kp(s,t){const e=this.cache;ge(e,t)||(s.uniform2iv(this.addr,t),_e(e,t))}function Vp(s,t){const e=this.cache;ge(e,t)||(s.uniform3iv(this.addr,t),_e(e,t))}function Gp(s,t){const e=this.cache;ge(e,t)||(s.uniform4iv(this.addr,t),_e(e,t))}function Wp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Hp(s,t){const e=this.cache;ge(e,t)||(s.uniform2uiv(this.addr,t),_e(e,t))}function Xp(s,t){const e=this.cache;ge(e,t)||(s.uniform3uiv(this.addr,t),_e(e,t))}function qp(s,t){const e=this.cache;ge(e,t)||(s.uniform4uiv(this.addr,t),_e(e,t))}function jp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||ic,i)}function Yp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||sc,i)}function Zp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ac,i)}function Kp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||rc,i)}function $p(s){switch(s){case 5126:return Dp;case 35664:return Rp;case 35665:return Fp;case 35666:return Np;case 35674:return Op;case 35675:return zp;case 35676:return Bp;case 5124:case 35670:return Up;case 35667:case 35671:return kp;case 35668:case 35672:return Vp;case 35669:case 35673:return Gp;case 5125:return Wp;case 36294:return Hp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return Zp;case 36289:case 36303:case 36311:case 36292:return Kp}}function Jp(s,t){s.uniform1fv(this.addr,t)}function Qp(s,t){const e=Ni(t,this.size,2);s.uniform2fv(this.addr,e)}function tm(s,t){const e=Ni(t,this.size,3);s.uniform3fv(this.addr,e)}function em(s,t){const e=Ni(t,this.size,4);s.uniform4fv(this.addr,e)}function nm(s,t){const e=Ni(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function im(s,t){const e=Ni(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function rm(s,t){const e=Ni(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function sm(s,t){s.uniform1iv(this.addr,t)}function am(s,t){s.uniform2iv(this.addr,t)}function om(s,t){s.uniform3iv(this.addr,t)}function lm(s,t){s.uniform4iv(this.addr,t)}function cm(s,t){s.uniform1uiv(this.addr,t)}function hm(s,t){s.uniform2uiv(this.addr,t)}function um(s,t){s.uniform3uiv(this.addr,t)}function fm(s,t){s.uniform4uiv(this.addr,t)}function dm(s,t,e){const n=t.length,i=_s(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture2D(t[r]||ic,i[r])}function pm(s,t,e){const n=t.length,i=_s(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture3D(t[r]||sc,i[r])}function mm(s,t,e){const n=t.length,i=_s(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTextureCube(t[r]||ac,i[r])}function gm(s,t,e){const n=t.length,i=_s(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||rc,i[r])}function _m(s){switch(s){case 5126:return Jp;case 35664:return Qp;case 35665:return tm;case 35666:return em;case 35674:return nm;case 35675:return im;case 35676:return rm;case 5124:case 35670:return sm;case 35667:case 35671:return am;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return hm;case 36295:return um;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}class vm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=$p(e.type)}}class xm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=_m(e.type)}}class ym{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function Qo(s,t){s.seq.push(t),s.map[t.id]=t}function Mm(s,t,e){const n=s.name,i=n.length;for(ta.lastIndex=0;;){const r=ta.exec(n),a=ta.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Qo(e,c===void 0?new vm(o,s,t):new xm(o,s,t));break}else{let h=e.map[o];h===void 0&&(h=new ym(o),Qo(e,h)),e=h}}}class Zr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Mm(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function tl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let wm=0;function bm(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Sm(s){switch(s){case Yn:return["Linear","( value )"];case Vt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function el(s,t,e){const n=s.getShaderParameter(t,35713),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+bm(s.getShaderSource(t),a)}else return i}function Tm(s,t){const e=Sm(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Am(s,t){let e;switch(t){case Ph:e="Linear";break;case Ih:e="Reinhard";break;case Dh:e="OptimizedCineon";break;case Rh:e="ACESFilmic";break;case Fh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Em(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(er).join(`
`)}function Cm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lm(s,t){const e={},n=s.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function er(s){return s!==""}function nl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function il(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Pm=/^[ \t]*#include +<([\w\d./]+)>/gm;function da(s){return s.replace(Pm,Im)}function Im(s,t){const e=At[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return da(e)}const Dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rl(s){return s.replace(Dm,Rm)}function Rm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function sl(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Fm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===zl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Bl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Qi&&(t="SHADOWMAP_TYPE_VSM"),t}function Nm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Li:case Pi:t="ENVMAP_TYPE_CUBE";break;case ds:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Om(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Pi:t="ENVMAP_MODE_REFRACTION";break}return t}function zm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case fs:t="ENVMAP_BLENDING_MULTIPLY";break;case Ch:t="ENVMAP_BLENDING_MIX";break;case Lh:t="ENVMAP_BLENDING_ADD";break}return t}function Bm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Um(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Fm(e),c=Nm(e),u=Om(e),h=zm(e),f=Bm(e),m=e.isWebGL2?"":Em(e),g=Cm(r),p=i.createProgram();let d,_,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=[g].filter(er).join(`
`),d.length>0&&(d+=`
`),_=[m,g].filter(er).join(`
`),_.length>0&&(_+=`
`)):(d=[sl(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),_=[m,sl(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==un?"#define TONE_MAPPING":"",e.toneMapping!==un?At.tonemapping_pars_fragment:"",e.toneMapping!==un?Am("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",At.encodings_pars_fragment,Tm("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(er).join(`
`)),a=da(a),a=nl(a,e),a=il(a,e),o=da(o),o=nl(o,e),o=il(o,e),a=rl(a),o=rl(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",e.glslVersion===Co?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Co?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=x+d+a,y=x+_+o,w=tl(i,35633,M),A=tl(i,35632,y);if(i.attachShader(p,w),i.attachShader(p,A),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const E=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(w).trim(),j=i.getShaderInfoLog(A).trim();let Y=!0,z=!0;if(i.getProgramParameter(p,35714)===!1){Y=!1;const R=el(i,w,"vertex"),U=el(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+E+`
`+R+`
`+U)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(I===""||j==="")&&(z=!1);z&&(this.diagnostics={runnable:Y,programLog:E,vertexShader:{log:I,prefix:d},fragmentShader:{log:j,prefix:_}})}i.deleteShader(w),i.deleteShader(A);let P;this.getUniforms=function(){return P===void 0&&(P=new Zr(i,p)),P};let v;return this.getAttributes=function(){return v===void 0&&(v=Lm(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=wm++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=A,this}let km=0;class Vm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Gm(t),e.set(t,n)),n}}class Gm{constructor(t){this.id=km++,this.code=t,this.usedTimes=0}}function Wm(s,t,e,n,i,r,a){const o=new $l,l=new Vm,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,E,I,j,Y){const z=j.fog,R=Y.geometry,U=v.isMeshStandardMaterial?j.environment:null,V=(v.isMeshStandardMaterial?e:t).get(v.envMap||U),Z=!!V&&V.mapping===ds?V.image.height:null,k=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const F=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,O=F!==void 0?F.length:0;let J=0;R.morphAttributes.position!==void 0&&(J=1),R.morphAttributes.normal!==void 0&&(J=2),R.morphAttributes.color!==void 0&&(J=3);let K,tt,rt,ft;if(k){const Ft=Ke[k];K=Ft.vertexShader,tt=Ft.fragmentShader}else K=v.vertexShader,tt=v.fragmentShader,l.update(v),rt=l.getVertexShaderID(v),ft=l.getFragmentShaderID(v);const X=s.getRenderTarget(),Ct=v.alphaTest>0,dt=v.clearcoat>0,_t=v.iridescence>0;return{isWebGL2:u,shaderID:k,shaderName:v.type,vertexShader:K,fragmentShader:tt,defines:v.defines,customVertexShaderID:rt,customFragmentShaderID:ft,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:f,outputEncoding:X===null?s.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:Yn,map:!!v.map,matcap:!!v.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:Z,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===nu,tangentSpaceNormalMap:v.normalMapType===ms,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Vt,clearcoat:dt,clearcoatMap:dt&&!!v.clearcoatMap,clearcoatRoughnessMap:dt&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:dt&&!!v.clearcoatNormalMap,iridescence:_t,iridescenceMap:_t&&!!v.iridescenceMap,iridescenceThicknessMap:_t&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Ti,alphaMap:!!v.alphaMap,alphaTest:Ct,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!R.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!z,useFog:v.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Y.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:J,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:v.toneMapped?s.toneMapping:un,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Tn,flipSided:v.side===ze,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)E.push(I),E.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(_(E,v),x(E,v),E.push(s.outputEncoding)),E.push(v.customProgramCacheKey),E.join()}function _(v,E){v.push(E.precision),v.push(E.outputEncoding),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.combine),v.push(E.vertexUvs),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function x(v,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.map&&o.enable(4),E.matcap&&o.enable(5),E.envMap&&o.enable(6),E.lightMap&&o.enable(7),E.aoMap&&o.enable(8),E.emissiveMap&&o.enable(9),E.bumpMap&&o.enable(10),E.normalMap&&o.enable(11),E.objectSpaceNormalMap&&o.enable(12),E.tangentSpaceNormalMap&&o.enable(13),E.clearcoat&&o.enable(14),E.clearcoatMap&&o.enable(15),E.clearcoatRoughnessMap&&o.enable(16),E.clearcoatNormalMap&&o.enable(17),E.iridescence&&o.enable(18),E.iridescenceMap&&o.enable(19),E.iridescenceThicknessMap&&o.enable(20),E.displacementMap&&o.enable(21),E.specularMap&&o.enable(22),E.roughnessMap&&o.enable(23),E.metalnessMap&&o.enable(24),E.gradientMap&&o.enable(25),E.alphaMap&&o.enable(26),E.alphaTest&&o.enable(27),E.vertexColors&&o.enable(28),E.vertexAlphas&&o.enable(29),E.vertexUvs&&o.enable(30),E.vertexTangents&&o.enable(31),E.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.physicallyCorrectLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.specularIntensityMap&&o.enable(15),E.specularColorMap&&o.enable(16),E.transmission&&o.enable(17),E.transmissionMap&&o.enable(18),E.thicknessMap&&o.enable(19),E.sheen&&o.enable(20),E.sheenColorMap&&o.enable(21),E.sheenRoughnessMap&&o.enable(22),E.decodeVideoTexture&&o.enable(23),E.opaque&&o.enable(24),v.push(o.mask)}function M(v){const E=g[v.type];let I;if(E){const j=Ke[E];I=Pu.clone(j.uniforms)}else I=v.uniforms;return I}function y(v,E){let I;for(let j=0,Y=c.length;j<Y;j++){const z=c[j];if(z.cacheKey===E){I=z,++I.usedTimes;break}}return I===void 0&&(I=new Um(s,E,v,r),c.push(I)),I}function w(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),v.destroy()}}function A(v){l.remove(v)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:M,acquireProgram:y,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:P}}function Hm(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Xm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function al(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ol(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(h,f,m,g,p,d){let _=s[t];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:p,group:d},s[t]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=p,_.group=d),t++,_}function o(h,f,m,g,p,d){const _=a(h,f,m,g,p,d);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function l(h,f,m,g,p,d){const _=a(h,f,m,g,p,d);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function c(h,f){e.length>1&&e.sort(h||Xm),n.length>1&&n.sort(f||al),i.length>1&&i.sort(f||al)}function u(){for(let h=t,f=s.length;h<f;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function qm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new ol,s.set(n,[a])):i>=r.length?(a=new ol,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function jm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new St};break;case"SpotLight":e={position:new L,direction:new L,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Ym(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Zm=0;function Km(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function $m(s,t){const e=new jm,n=Ym(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new L);const r=new L,a=new mt,o=new mt;function l(u,h){let f=0,m=0,g=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let p=0,d=0,_=0,x=0,M=0,y=0,w=0,A=0,P=0,v=0;u.sort(Km);const E=h!==!0?Math.PI:1;for(let j=0,Y=u.length;j<Y;j++){const z=u[j],R=z.color,U=z.intensity,V=z.distance,Z=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=R.r*U*E,m+=R.g*U*E,g+=R.b*U*E;else if(z.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(z.sh.coefficients[k],U);else if(z.isDirectionalLight){const k=e.get(z);if(k.color.copy(z.color).multiplyScalar(z.intensity*E),z.castShadow){const F=z.shadow,O=n.get(z);O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,i.directionalShadow[p]=O,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=z.shadow.matrix,y++}i.directional[p]=k,p++}else if(z.isSpotLight){const k=e.get(z);k.position.setFromMatrixPosition(z.matrixWorld),k.color.copy(R).multiplyScalar(U*E),k.distance=V,k.coneCos=Math.cos(z.angle),k.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),k.decay=z.decay,i.spot[_]=k;const F=z.shadow;if(z.map&&(i.spotLightMap[P]=z.map,P++,F.updateMatrices(z),z.castShadow&&v++),i.spotLightMatrix[_]=F.matrix,z.castShadow){const O=n.get(z);O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,i.spotShadow[_]=O,i.spotShadowMap[_]=Z,A++}_++}else if(z.isRectAreaLight){const k=e.get(z);k.color.copy(R).multiplyScalar(U),k.halfWidth.set(z.width*.5,0,0),k.halfHeight.set(0,z.height*.5,0),i.rectArea[x]=k,x++}else if(z.isPointLight){const k=e.get(z);if(k.color.copy(z.color).multiplyScalar(z.intensity*E),k.distance=z.distance,k.decay=z.decay,z.castShadow){const F=z.shadow,O=n.get(z);O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,O.shadowCameraNear=F.camera.near,O.shadowCameraFar=F.camera.far,i.pointShadow[d]=O,i.pointShadowMap[d]=Z,i.pointShadowMatrix[d]=z.shadow.matrix,w++}i.point[d]=k,d++}else if(z.isHemisphereLight){const k=e.get(z);k.skyColor.copy(z.color).multiplyScalar(U*E),k.groundColor.copy(z.groundColor).multiplyScalar(U*E),i.hemi[M]=k,M++}}x>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==p||I.pointLength!==d||I.spotLength!==_||I.rectAreaLength!==x||I.hemiLength!==M||I.numDirectionalShadows!==y||I.numPointShadows!==w||I.numSpotShadows!==A||I.numSpotMaps!==P)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=x,i.point.length=d,i.hemi.length=M,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=A+P-v,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=v,I.directionalLength=p,I.pointLength=d,I.spotLength=_,I.rectAreaLength=x,I.hemiLength=M,I.numDirectionalShadows=y,I.numPointShadows=w,I.numSpotShadows=A,I.numSpotMaps=P,i.version=Zm++)}function c(u,h){let f=0,m=0,g=0,p=0,d=0;const _=h.matrixWorldInverse;for(let x=0,M=u.length;x<M;x++){const y=u[x];if(y.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),f++}else if(y.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const w=i.rectArea[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(_),o.identity(),a.copy(y.matrixWorld),a.premultiply(_),o.extractRotation(a),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(_),m++}else if(y.isHemisphereLight){const w=i.hemi[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:i}}function ll(s,t){const e=new $m(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Jm(s,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new ll(s,t),e.set(r,[l])):a>=o.length?(l=new ll(s,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Qm extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tg extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ng=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ig(s,t,e){let n=new Ea;const i=new Mt,r=new Mt,a=new Ot,o=new Qm({depthPacking:eu}),l=new tg,c={},u=e.maxTextureSize,h={0:ze,1:Ci,2:Tn},f=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:eg,fragmentShader:ng}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Me(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zl,this.render=function(y,w,A){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||y.length===0)return;const P=s.getRenderTarget(),v=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),I=s.state;I.setBlending(En),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let j=0,Y=y.length;j<Y;j++){const z=y[j],R=z.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const U=R.getFrameExtents();if(i.multiply(U),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/U.x),i.x=r.x*U.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/U.y),i.y=r.y*U.y,R.mapSize.y=r.y)),R.map===null){const Z=this.type!==Qi?{minFilter:ue,magFilter:ue}:{};R.map=new Zn(i.x,i.y,Z),R.map.texture.name=z.name+".shadowMap",R.camera.updateProjectionMatrix()}s.setRenderTarget(R.map),s.clear();const V=R.getViewportCount();for(let Z=0;Z<V;Z++){const k=R.getViewport(Z);a.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),I.viewport(a),R.updateMatrices(z,Z),n=R.getFrustum(),M(w,A,R.camera,z,this.type)}R.isPointLightShadow!==!0&&this.type===Qi&&_(R,A),R.needsUpdate=!1}d.needsUpdate=!1,s.setRenderTarget(P,v,E)};function _(y,w){const A=t.update(p);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Zn(i.x,i.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(w,null,A,f,p,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(w,null,A,m,p,null)}function x(y,w,A,P,v,E){let I=null;const j=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(j!==void 0?I=j:I=A.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const Y=I.uuid,z=w.uuid;let R=c[Y];R===void 0&&(R={},c[Y]=R);let U=R[z];U===void 0&&(U=I.clone(),R[z]=U),I=U}return I.visible=w.visible,I.wireframe=w.wireframe,E===Qi?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:h[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaTest,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,A.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(A.matrixWorld),I.nearDistance=P,I.farDistance=v),I}function M(y,w,A,P,v){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===Qi)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);const j=t.update(y),Y=y.material;if(Array.isArray(Y)){const z=j.groups;for(let R=0,U=z.length;R<U;R++){const V=z[R],Z=Y[V.materialIndex];if(Z&&Z.visible){const k=x(y,Z,P,A.near,A.far,v);s.renderBufferDirect(A,null,j,k,y,V)}}}else if(Y.visible){const z=x(y,Y,P,A.near,A.far,v);s.renderBufferDirect(A,null,j,z,y,null)}}const I=y.children;for(let j=0,Y=I.length;j<Y;j++)M(I[j],w,A,P,v)}}function rg(s,t,e){const n=e.isWebGL2;function i(){let D=!1;const st=new Ot;let G=null;const ut=new Ot(0,0,0,0);return{setMask:function(ct){G!==ct&&!D&&(s.colorMask(ct,ct,ct,ct),G=ct)},setLocked:function(ct){D=ct},setClear:function(ct,Nt,ie,Yt,pn){pn===!0&&(ct*=Yt,Nt*=Yt,ie*=Yt),st.set(ct,Nt,ie,Yt),ut.equals(st)===!1&&(s.clearColor(ct,Nt,ie,Yt),ut.copy(st))},reset:function(){D=!1,G=null,ut.set(-1,0,0,0)}}}function r(){let D=!1,st=null,G=null,ut=null;return{setTest:function(ct){ct?Ct(2929):dt(2929)},setMask:function(ct){st!==ct&&!D&&(s.depthMask(ct),st=ct)},setFunc:function(ct){if(G!==ct){if(ct)switch(ct){case Mh:s.depthFunc(512);break;case wh:s.depthFunc(519);break;case bh:s.depthFunc(513);break;case la:s.depthFunc(515);break;case Sh:s.depthFunc(514);break;case Th:s.depthFunc(518);break;case Ah:s.depthFunc(516);break;case Eh:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);G=ct}},setLocked:function(ct){D=ct},setClear:function(ct){ut!==ct&&(s.clearDepth(ct),ut=ct)},reset:function(){D=!1,st=null,G=null,ut=null}}}function a(){let D=!1,st=null,G=null,ut=null,ct=null,Nt=null,ie=null,Yt=null,pn=null;return{setTest:function(qt){D||(qt?Ct(2960):dt(2960))},setMask:function(qt){st!==qt&&!D&&(s.stencilMask(qt),st=qt)},setFunc:function(qt,tn,De){(G!==qt||ut!==tn||ct!==De)&&(s.stencilFunc(qt,tn,De),G=qt,ut=tn,ct=De)},setOp:function(qt,tn,De){(Nt!==qt||ie!==tn||Yt!==De)&&(s.stencilOp(qt,tn,De),Nt=qt,ie=tn,Yt=De)},setLocked:function(qt){D=qt},setClear:function(qt){pn!==qt&&(s.clearStencil(qt),pn=qt)},reset:function(){D=!1,st=null,G=null,ut=null,ct=null,Nt=null,ie=null,Yt=null,pn=null}}}const o=new i,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,p=[],d=null,_=!1,x=null,M=null,y=null,w=null,A=null,P=null,v=null,E=!1,I=null,j=null,Y=null,z=null,R=null;const U=s.getParameter(35661);let V=!1,Z=0;const k=s.getParameter(7938);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=Z>=2);let F=null,O={};const J=s.getParameter(3088),K=s.getParameter(2978),tt=new Ot().fromArray(J),rt=new Ot().fromArray(K);function ft(D,st,G){const ut=new Uint8Array(4),ct=s.createTexture();s.bindTexture(D,ct),s.texParameteri(D,10241,9728),s.texParameteri(D,10240,9728);for(let Nt=0;Nt<G;Nt++)s.texImage2D(st+Nt,0,6408,1,1,0,6408,5121,ut);return ct}const X={};X[3553]=ft(3553,3553,1),X[34067]=ft(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ct(2929),l.setFunc(la),Qt(!1),be($a),Ct(2884),Wt(En);function Ct(D){f[D]!==!0&&(s.enable(D),f[D]=!0)}function dt(D){f[D]!==!1&&(s.disable(D),f[D]=!1)}function _t(D,st){return m[D]!==st?(s.bindFramebuffer(D,st),m[D]=st,n&&(D===36009&&(m[36160]=st),D===36160&&(m[36009]=st)),!0):!1}function ht(D,st){let G=p,ut=!1;if(D)if(G=g.get(st),G===void 0&&(G=[],g.set(st,G)),D.isWebGLMultipleRenderTargets){const ct=D.texture;if(G.length!==ct.length||G[0]!==36064){for(let Nt=0,ie=ct.length;Nt<ie;Nt++)G[Nt]=36064+Nt;G.length=ct.length,ut=!0}}else G[0]!==36064&&(G[0]=36064,ut=!0);else G[0]!==1029&&(G[0]=1029,ut=!0);ut&&(e.isWebGL2?s.drawBuffers(G):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(G))}function Ft(D){return d!==D?(s.useProgram(D),d=D,!0):!1}const wt={[vi]:32774,[hh]:32778,[uh]:32779};if(n)wt[eo]=32775,wt[no]=32776;else{const D=t.get("EXT_blend_minmax");D!==null&&(wt[eo]=D.MIN_EXT,wt[no]=D.MAX_EXT)}const gt={[fh]:0,[dh]:1,[ph]:768,[Ul]:770,[yh]:776,[vh]:774,[gh]:772,[mh]:769,[kl]:771,[xh]:775,[_h]:773};function Wt(D,st,G,ut,ct,Nt,ie,Yt){if(D===En){_===!0&&(dt(3042),_=!1);return}if(_===!1&&(Ct(3042),_=!0),D!==ch){if(D!==x||Yt!==E){if((M!==vi||A!==vi)&&(s.blendEquation(32774),M=vi,A=vi),Yt)switch(D){case Ti:s.blendFuncSeparate(1,771,1,771);break;case Ja:s.blendFunc(1,1);break;case Qa:s.blendFuncSeparate(0,769,0,1);break;case to:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ti:s.blendFuncSeparate(770,771,1,771);break;case Ja:s.blendFunc(770,1);break;case Qa:s.blendFuncSeparate(0,769,0,1);break;case to:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,w=null,P=null,v=null,x=D,E=Yt}return}ct=ct||st,Nt=Nt||G,ie=ie||ut,(st!==M||ct!==A)&&(s.blendEquationSeparate(wt[st],wt[ct]),M=st,A=ct),(G!==y||ut!==w||Nt!==P||ie!==v)&&(s.blendFuncSeparate(gt[G],gt[ut],gt[Nt],gt[ie]),y=G,w=ut,P=Nt,v=ie),x=D,E=null}function ae(D,st){D.side===Tn?dt(2884):Ct(2884);let G=D.side===ze;st&&(G=!G),Qt(G),D.blending===Ti&&D.transparent===!1?Wt(En):Wt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const ut=D.stencilWrite;c.setTest(ut),ut&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ct(32926):dt(32926)}function Qt(D){I!==D&&(D?s.frontFace(2304):s.frontFace(2305),I=D)}function be(D){D!==oh?(Ct(2884),D!==j&&(D===$a?s.cullFace(1029):D===lh?s.cullFace(1028):s.cullFace(1032))):dt(2884),j=D}function te(D){D!==Y&&(V&&s.lineWidth(D),Y=D)}function Ut(D,st,G){D?(Ct(32823),(z!==st||R!==G)&&(s.polygonOffset(st,G),z=st,R=G)):dt(32823)}function Ie(D){D?Ct(3089):dt(3089)}function Se(D){D===void 0&&(D=33984+U-1),F!==D&&(s.activeTexture(D),F=D)}function C(D,st){F===null&&Se();let G=O[F];G===void 0&&(G={type:void 0,texture:void 0},O[F]=G),(G.type!==D||G.texture!==st)&&(s.bindTexture(D,st||X[D]),G.type=D,G.texture=st)}function b(){const D=O[F];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function W(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function S(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(D){tt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),tt.copy(D))}function at(D){rt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),rt.copy(D))}function xt(D,st){let G=h.get(st);G===void 0&&(G=new WeakMap,h.set(st,G));let ut=G.get(D);ut===void 0&&(ut=s.getUniformBlockIndex(st,D.name),G.set(D,ut))}function Pt(D,st){const ut=h.get(st).get(D);u.get(D)!==ut&&(s.uniformBlockBinding(st,ut,D.__bindingPointIndex),u.set(D,ut))}function Ht(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},F=null,O={},m={},g=new WeakMap,p=[],d=null,_=!1,x=null,M=null,y=null,w=null,A=null,P=null,v=null,E=!1,I=null,j=null,Y=null,z=null,R=null,tt.set(0,0,s.canvas.width,s.canvas.height),rt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ct,disable:dt,bindFramebuffer:_t,drawBuffers:ht,useProgram:Ft,setBlending:Wt,setMaterial:ae,setFlipSided:Qt,setCullFace:be,setLineWidth:te,setPolygonOffset:Ut,setScissorTest:Ie,activeTexture:Se,bindTexture:C,unbindTexture:b,compressedTexImage2D:W,texImage2D:$,texImage3D:nt,updateUBOMapping:xt,uniformBlockBinding:Pt,texStorage2D:vt,texStorage3D:S,texSubImage2D:Q,texSubImage3D:et,compressedTexSubImage2D:ot,scissor:lt,viewport:at,reset:Ht}}function sg(s,t,e,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,b){return _?new OffscreenCanvas(C,b):cr("canvas")}function M(C,b,W,Q){let et=1;if((C.width>Q||C.height>Q)&&(et=Q/Math.max(C.width,C.height)),et<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ot=b?is:Math.floor,vt=ot(et*C.width),S=ot(et*C.height);p===void 0&&(p=x(vt,S));const $=W?x(vt,S):p;return $.width=vt,$.height=S,$.getContext("2d").drawImage(C,0,0,vt,S),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+vt+"x"+S+")."),$}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return fa(C.width)&&fa(C.height)}function w(C){return o?!1:C.wrapS!==Ce||C.wrapT!==Ce||C.minFilter!==ue&&C.minFilter!==Oe}function A(C,b){return C.generateMipmaps&&b&&C.minFilter!==ue&&C.minFilter!==Oe}function P(C){s.generateMipmap(C)}function v(C,b,W,Q,et=!1){if(o===!1)return b;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ot=b;return b===6403&&(W===5126&&(ot=33326),W===5131&&(ot=33325),W===5121&&(ot=33321)),b===33319&&(W===5126&&(ot=33328),W===5131&&(ot=33327),W===5121&&(ot=33323)),b===6408&&(W===5126&&(ot=34836),W===5131&&(ot=34842),W===5121&&(ot=Q===Vt&&et===!1?35907:32856),W===32819&&(ot=32854),W===32820&&(ot=32855)),(ot===33325||ot===33326||ot===33327||ot===33328||ot===34842||ot===34836)&&t.get("EXT_color_buffer_float"),ot}function E(C,b,W){return A(C,W)===!0||C.isFramebufferTexture&&C.minFilter!==ue&&C.minFilter!==Oe?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function I(C){return C===ue||C===io||C===ro?9728:9729}function j(C){const b=C.target;b.removeEventListener("dispose",j),z(b),b.isVideoTexture&&g.delete(b)}function Y(C){const b=C.target;b.removeEventListener("dispose",Y),U(b)}function z(C){const b=n.get(C);if(b.__webglInit===void 0)return;const W=C.source,Q=d.get(W);if(Q){const et=Q[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&R(C),Object.keys(Q).length===0&&d.delete(W)}n.remove(C)}function R(C){const b=n.get(C);s.deleteTexture(b.__webglTexture);const W=C.source,Q=d.get(W);delete Q[b.__cacheKey],a.memory.textures--}function U(C){const b=C.texture,W=n.get(C),Q=n.get(b);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let et=0;et<6;et++)s.deleteFramebuffer(W.__webglFramebuffer[et]),W.__webglDepthbuffer&&s.deleteRenderbuffer(W.__webglDepthbuffer[et]);else{if(s.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&s.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&s.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let et=0;et<W.__webglColorRenderbuffer.length;et++)W.__webglColorRenderbuffer[et]&&s.deleteRenderbuffer(W.__webglColorRenderbuffer[et]);W.__webglDepthRenderbuffer&&s.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let et=0,ot=b.length;et<ot;et++){const vt=n.get(b[et]);vt.__webglTexture&&(s.deleteTexture(vt.__webglTexture),a.memory.textures--),n.remove(b[et])}n.remove(b),n.remove(C)}let V=0;function Z(){V=0}function k(){const C=V;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),V+=1,C}function F(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.encoding),b.join()}function O(C,b){const W=n.get(C);if(C.isVideoTexture&&Ie(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(W,C,b);return}}e.activeTexture(33984+b),e.bindTexture(3553,W.__webglTexture)}function J(C,b){const W=n.get(C);if(C.version>0&&W.__version!==C.version){dt(W,C,b);return}e.activeTexture(33984+b),e.bindTexture(35866,W.__webglTexture)}function K(C,b){const W=n.get(C);if(C.version>0&&W.__version!==C.version){dt(W,C,b);return}e.activeTexture(33984+b),e.bindTexture(32879,W.__webglTexture)}function tt(C,b){const W=n.get(C);if(C.version>0&&W.__version!==C.version){_t(W,C,b);return}e.activeTexture(33984+b),e.bindTexture(34067,W.__webglTexture)}const rt={[ar]:10497,[Ce]:33071,[ha]:33648},ft={[ue]:9728,[io]:9984,[ro]:9986,[Oe]:9729,[Nh]:9985,[ps]:9987};function X(C,b,W){if(W?(s.texParameteri(C,10242,rt[b.wrapS]),s.texParameteri(C,10243,rt[b.wrapT]),(C===32879||C===35866)&&s.texParameteri(C,32882,rt[b.wrapR]),s.texParameteri(C,10240,ft[b.magFilter]),s.texParameteri(C,10241,ft[b.minFilter])):(s.texParameteri(C,10242,33071),s.texParameteri(C,10243,33071),(C===32879||C===35866)&&s.texParameteri(C,32882,33071),(b.wrapS!==Ce||b.wrapT!==Ce)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,10240,I(b.magFilter)),s.texParameteri(C,10241,I(b.minFilter)),b.minFilter!==ue&&b.minFilter!==Oe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(b.type===An&&t.has("OES_texture_float_linear")===!1||o===!1&&b.type===or&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(s.texParameterf(C,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Ct(C,b){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",j));const Q=b.source;let et=d.get(Q);et===void 0&&(et={},d.set(Q,et));const ot=F(b);if(ot!==C.__cacheKey){et[ot]===void 0&&(et[ot]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,W=!0),et[ot].usedTimes++;const vt=et[C.__cacheKey];vt!==void 0&&(et[C.__cacheKey].usedTimes--,vt.usedTimes===0&&R(b)),C.__cacheKey=ot,C.__webglTexture=et[ot].texture}return W}function dt(C,b,W){let Q=3553;b.isDataArrayTexture&&(Q=35866),b.isData3DTexture&&(Q=32879);const et=Ct(C,b),ot=b.source;if(e.activeTexture(33984+W),e.bindTexture(Q,C.__webglTexture),ot.version!==ot.__currentVersion||et===!0){s.pixelStorei(37440,b.flipY),s.pixelStorei(37441,b.premultiplyAlpha),s.pixelStorei(3317,b.unpackAlignment),s.pixelStorei(37443,0);const vt=w(b)&&y(b.image)===!1;let S=M(b.image,vt,!1,u);S=Se(b,S);const $=y(S)||o,nt=r.convert(b.format,b.encoding);let lt=r.convert(b.type),at=v(b.internalFormat,nt,lt,b.encoding,b.isVideoTexture);X(Q,b,$);let xt;const Pt=b.mipmaps,Ht=o&&b.isVideoTexture!==!0,D=ot.__currentVersion===void 0||et===!0,st=E(b,S,$);if(b.isDepthTexture)at=6402,o?b.type===An?at=36012:b.type===Wn?at=33190:b.type===Ai?at=35056:at=33189:b.type===An&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Xn&&at===6402&&b.type!==Gl&&b.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Wn,lt=r.convert(b.type)),b.format===Ii&&at===6402&&(at=34041,b.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ai,lt=r.convert(b.type))),D&&(Ht?e.texStorage2D(3553,1,at,S.width,S.height):e.texImage2D(3553,0,at,S.width,S.height,0,nt,lt,null));else if(b.isDataTexture)if(Pt.length>0&&$){Ht&&D&&e.texStorage2D(3553,st,at,Pt[0].width,Pt[0].height);for(let G=0,ut=Pt.length;G<ut;G++)xt=Pt[G],Ht?e.texSubImage2D(3553,G,0,0,xt.width,xt.height,nt,lt,xt.data):e.texImage2D(3553,G,at,xt.width,xt.height,0,nt,lt,xt.data);b.generateMipmaps=!1}else Ht?(D&&e.texStorage2D(3553,st,at,S.width,S.height),e.texSubImage2D(3553,0,0,0,S.width,S.height,nt,lt,S.data)):e.texImage2D(3553,0,at,S.width,S.height,0,nt,lt,S.data);else if(b.isCompressedTexture){Ht&&D&&e.texStorage2D(3553,st,at,Pt[0].width,Pt[0].height);for(let G=0,ut=Pt.length;G<ut;G++)xt=Pt[G],b.format!==je?nt!==null?Ht?e.compressedTexSubImage2D(3553,G,0,0,xt.width,xt.height,nt,xt.data):e.compressedTexImage2D(3553,G,at,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?e.texSubImage2D(3553,G,0,0,xt.width,xt.height,nt,lt,xt.data):e.texImage2D(3553,G,at,xt.width,xt.height,0,nt,lt,xt.data)}else if(b.isDataArrayTexture)Ht?(D&&e.texStorage3D(35866,st,at,S.width,S.height,S.depth),e.texSubImage3D(35866,0,0,0,0,S.width,S.height,S.depth,nt,lt,S.data)):e.texImage3D(35866,0,at,S.width,S.height,S.depth,0,nt,lt,S.data);else if(b.isData3DTexture)Ht?(D&&e.texStorage3D(32879,st,at,S.width,S.height,S.depth),e.texSubImage3D(32879,0,0,0,0,S.width,S.height,S.depth,nt,lt,S.data)):e.texImage3D(32879,0,at,S.width,S.height,S.depth,0,nt,lt,S.data);else if(b.isFramebufferTexture){if(D)if(Ht)e.texStorage2D(3553,st,at,S.width,S.height);else{let G=S.width,ut=S.height;for(let ct=0;ct<st;ct++)e.texImage2D(3553,ct,at,G,ut,0,nt,lt,null),G>>=1,ut>>=1}}else if(Pt.length>0&&$){Ht&&D&&e.texStorage2D(3553,st,at,Pt[0].width,Pt[0].height);for(let G=0,ut=Pt.length;G<ut;G++)xt=Pt[G],Ht?e.texSubImage2D(3553,G,0,0,nt,lt,xt):e.texImage2D(3553,G,at,nt,lt,xt);b.generateMipmaps=!1}else Ht?(D&&e.texStorage2D(3553,st,at,S.width,S.height),e.texSubImage2D(3553,0,0,0,nt,lt,S)):e.texImage2D(3553,0,at,nt,lt,S);A(b,$)&&P(Q),ot.__currentVersion=ot.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function _t(C,b,W){if(b.image.length!==6)return;const Q=Ct(C,b),et=b.source;if(e.activeTexture(33984+W),e.bindTexture(34067,C.__webglTexture),et.version!==et.__currentVersion||Q===!0){s.pixelStorei(37440,b.flipY),s.pixelStorei(37441,b.premultiplyAlpha),s.pixelStorei(3317,b.unpackAlignment),s.pixelStorei(37443,0);const ot=b.isCompressedTexture||b.image[0].isCompressedTexture,vt=b.image[0]&&b.image[0].isDataTexture,S=[];for(let G=0;G<6;G++)!ot&&!vt?S[G]=M(b.image[G],!1,!0,c):S[G]=vt?b.image[G].image:b.image[G],S[G]=Se(b,S[G]);const $=S[0],nt=y($)||o,lt=r.convert(b.format,b.encoding),at=r.convert(b.type),xt=v(b.internalFormat,lt,at,b.encoding),Pt=o&&b.isVideoTexture!==!0,Ht=et.__currentVersion===void 0||Q===!0;let D=E(b,$,nt);X(34067,b,nt);let st;if(ot){Pt&&Ht&&e.texStorage2D(34067,D,xt,$.width,$.height);for(let G=0;G<6;G++){st=S[G].mipmaps;for(let ut=0;ut<st.length;ut++){const ct=st[ut];b.format!==je?lt!==null?Pt?e.compressedTexSubImage2D(34069+G,ut,0,0,ct.width,ct.height,lt,ct.data):e.compressedTexImage2D(34069+G,ut,xt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?e.texSubImage2D(34069+G,ut,0,0,ct.width,ct.height,lt,at,ct.data):e.texImage2D(34069+G,ut,xt,ct.width,ct.height,0,lt,at,ct.data)}}}else{st=b.mipmaps,Pt&&Ht&&(st.length>0&&D++,e.texStorage2D(34067,D,xt,S[0].width,S[0].height));for(let G=0;G<6;G++)if(vt){Pt?e.texSubImage2D(34069+G,0,0,0,S[G].width,S[G].height,lt,at,S[G].data):e.texImage2D(34069+G,0,xt,S[G].width,S[G].height,0,lt,at,S[G].data);for(let ut=0;ut<st.length;ut++){const Nt=st[ut].image[G].image;Pt?e.texSubImage2D(34069+G,ut+1,0,0,Nt.width,Nt.height,lt,at,Nt.data):e.texImage2D(34069+G,ut+1,xt,Nt.width,Nt.height,0,lt,at,Nt.data)}}else{Pt?e.texSubImage2D(34069+G,0,0,0,lt,at,S[G]):e.texImage2D(34069+G,0,xt,lt,at,S[G]);for(let ut=0;ut<st.length;ut++){const ct=st[ut];Pt?e.texSubImage2D(34069+G,ut+1,0,0,lt,at,ct.image[G]):e.texImage2D(34069+G,ut+1,xt,lt,at,ct.image[G])}}}A(b,nt)&&P(34067),et.__currentVersion=et.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ht(C,b,W,Q,et){const ot=r.convert(W.format,W.encoding),vt=r.convert(W.type),S=v(W.internalFormat,ot,vt,W.encoding);n.get(b).__hasExternalTextures||(et===32879||et===35866?e.texImage3D(et,0,S,b.width,b.height,b.depth,0,ot,vt,null):e.texImage2D(et,0,S,b.width,b.height,0,ot,vt,null)),e.bindFramebuffer(36160,C),Ut(b)?f.framebufferTexture2DMultisampleEXT(36160,Q,et,n.get(W).__webglTexture,0,te(b)):s.framebufferTexture2D(36160,Q,et,n.get(W).__webglTexture,0),e.bindFramebuffer(36160,null)}function Ft(C,b,W){if(s.bindRenderbuffer(36161,C),b.depthBuffer&&!b.stencilBuffer){let Q=33189;if(W||Ut(b)){const et=b.depthTexture;et&&et.isDepthTexture&&(et.type===An?Q=36012:et.type===Wn&&(Q=33190));const ot=te(b);Ut(b)?f.renderbufferStorageMultisampleEXT(36161,ot,Q,b.width,b.height):s.renderbufferStorageMultisample(36161,ot,Q,b.width,b.height)}else s.renderbufferStorage(36161,Q,b.width,b.height);s.framebufferRenderbuffer(36160,36096,36161,C)}else if(b.depthBuffer&&b.stencilBuffer){const Q=te(b);W&&Ut(b)===!1?s.renderbufferStorageMultisample(36161,Q,35056,b.width,b.height):Ut(b)?f.renderbufferStorageMultisampleEXT(36161,Q,35056,b.width,b.height):s.renderbufferStorage(36161,34041,b.width,b.height),s.framebufferRenderbuffer(36160,33306,36161,C)}else{const Q=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let et=0;et<Q.length;et++){const ot=Q[et],vt=r.convert(ot.format,ot.encoding),S=r.convert(ot.type),$=v(ot.internalFormat,vt,S,ot.encoding),nt=te(b);W&&Ut(b)===!1?s.renderbufferStorageMultisample(36161,nt,$,b.width,b.height):Ut(b)?f.renderbufferStorageMultisampleEXT(36161,nt,$,b.width,b.height):s.renderbufferStorage(36161,$,b.width,b.height)}}s.bindRenderbuffer(36161,null)}function wt(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);const Q=n.get(b.depthTexture).__webglTexture,et=te(b);if(b.depthTexture.format===Xn)Ut(b)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,et):s.framebufferTexture2D(36160,36096,3553,Q,0);else if(b.depthTexture.format===Ii)Ut(b)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,et):s.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function gt(C){const b=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");wt(b.__webglFramebuffer,C)}else if(W){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(36160,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]=s.createRenderbuffer(),Ft(b.__webglDepthbuffer[Q],C,!1)}else e.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),Ft(b.__webglDepthbuffer,C,!1);e.bindFramebuffer(36160,null)}function Wt(C,b,W){const Q=n.get(C);b!==void 0&&ht(Q.__webglFramebuffer,C,C.texture,36064,3553),W!==void 0&&gt(C)}function ae(C){const b=C.texture,W=n.get(C),Q=n.get(b);C.addEventListener("dispose",Y),C.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=b.version,a.memory.textures++);const et=C.isWebGLCubeRenderTarget===!0,ot=C.isWebGLMultipleRenderTargets===!0,vt=y(C)||o;if(et){W.__webglFramebuffer=[];for(let S=0;S<6;S++)W.__webglFramebuffer[S]=s.createFramebuffer()}else{if(W.__webglFramebuffer=s.createFramebuffer(),ot)if(i.drawBuffers){const S=C.texture;for(let $=0,nt=S.length;$<nt;$++){const lt=n.get(S[$]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Ut(C)===!1){const S=ot?b:[b];W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let $=0;$<S.length;$++){const nt=S[$];W.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(36161,W.__webglColorRenderbuffer[$]);const lt=r.convert(nt.format,nt.encoding),at=r.convert(nt.type),xt=v(nt.internalFormat,lt,at,nt.encoding),Pt=te(C);s.renderbufferStorageMultisample(36161,Pt,xt,C.width,C.height),s.framebufferRenderbuffer(36160,36064+$,36161,W.__webglColorRenderbuffer[$])}s.bindRenderbuffer(36161,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),Ft(W.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(36160,null)}}if(et){e.bindTexture(34067,Q.__webglTexture),X(34067,b,vt);for(let S=0;S<6;S++)ht(W.__webglFramebuffer[S],C,b,36064,34069+S);A(b,vt)&&P(34067),e.unbindTexture()}else if(ot){const S=C.texture;for(let $=0,nt=S.length;$<nt;$++){const lt=S[$],at=n.get(lt);e.bindTexture(3553,at.__webglTexture),X(3553,lt,vt),ht(W.__webglFramebuffer,C,lt,36064+$,3553),A(lt,vt)&&P(3553)}e.unbindTexture()}else{let S=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?S=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(S,Q.__webglTexture),X(S,b,vt),ht(W.__webglFramebuffer,C,b,36064,S),A(b,vt)&&P(S),e.unbindTexture()}C.depthBuffer&&gt(C)}function Qt(C){const b=y(C)||o,W=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Q=0,et=W.length;Q<et;Q++){const ot=W[Q];if(A(ot,b)){const vt=C.isWebGLCubeRenderTarget?34067:3553,S=n.get(ot).__webglTexture;e.bindTexture(vt,S),P(vt),e.unbindTexture()}}}function be(C){if(o&&C.samples>0&&Ut(C)===!1){const b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],W=C.width,Q=C.height;let et=16384;const ot=[],vt=C.stencilBuffer?33306:36096,S=n.get(C),$=C.isWebGLMultipleRenderTargets===!0;if($)for(let nt=0;nt<b.length;nt++)e.bindFramebuffer(36160,S.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+nt,36161,null),e.bindFramebuffer(36160,S.__webglFramebuffer),s.framebufferTexture2D(36009,36064+nt,3553,null,0);e.bindFramebuffer(36008,S.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,S.__webglFramebuffer);for(let nt=0;nt<b.length;nt++){ot.push(36064+nt),C.depthBuffer&&ot.push(vt);const lt=S.__ignoreDepthValues!==void 0?S.__ignoreDepthValues:!1;if(lt===!1&&(C.depthBuffer&&(et|=256),C.stencilBuffer&&(et|=1024)),$&&s.framebufferRenderbuffer(36008,36064,36161,S.__webglColorRenderbuffer[nt]),lt===!0&&(s.invalidateFramebuffer(36008,[vt]),s.invalidateFramebuffer(36009,[vt])),$){const at=n.get(b[nt]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,at,0)}s.blitFramebuffer(0,0,W,Q,0,0,W,Q,et,9728),m&&s.invalidateFramebuffer(36008,ot)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),$)for(let nt=0;nt<b.length;nt++){e.bindFramebuffer(36160,S.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+nt,36161,S.__webglColorRenderbuffer[nt]);const lt=n.get(b[nt]).__webglTexture;e.bindFramebuffer(36160,S.__webglFramebuffer),s.framebufferTexture2D(36009,36064+nt,3553,lt,0)}e.bindFramebuffer(36009,S.__webglMultisampledFramebuffer)}}function te(C){return Math.min(h,C.samples)}function Ut(C){const b=n.get(C);return o&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ie(C){const b=a.render.frame;g.get(C)!==b&&(g.set(C,b),C.update())}function Se(C,b){const W=C.encoding,Q=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===ua||W!==Yn&&(W===Vt?o===!1?t.has("EXT_sRGB")===!0&&Q===je?(C.format=ua,C.minFilter=Oe,C.generateMipmaps=!1):b=jl.sRGBToLinear(b):(Q!==je||et!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),b}this.allocateTextureUnit=k,this.resetTextureUnits=Z,this.setTexture2D=O,this.setTexture2DArray=J,this.setTexture3D=K,this.setTextureCube=tt,this.rebindTextures=Wt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Ut}function ag(s,t,e){const n=e.isWebGL2;function i(r,a=null){let o;if(r===jn)return 5121;if(r===Uh)return 32819;if(r===kh)return 32820;if(r===Oh)return 5120;if(r===zh)return 5122;if(r===Gl)return 5123;if(r===Bh)return 5124;if(r===Wn)return 5125;if(r===An)return 5126;if(r===or)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Vh)return 6406;if(r===je)return 6408;if(r===Wh)return 6409;if(r===Hh)return 6410;if(r===Xn)return 6402;if(r===Ii)return 34041;if(r===Xh)return 6403;if(r===Gh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===ua)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===qh)return 36244;if(r===jh)return 33319;if(r===Yh)return 33320;if(r===Zh)return 36249;if(r===Ts||r===As||r===Es||r===Cs)if(a===Vt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ts)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===As)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Es)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ts)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===As)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Es)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===so||r===ao||r===oo||r===lo)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===so)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ao)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===oo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kh)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===co||r===ho)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===co)return a===Vt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ho)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===uo||r===fo||r===po||r===mo||r===go||r===_o||r===vo||r===xo||r===yo||r===Mo||r===wo||r===bo||r===So||r===To)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===uo)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fo)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===po)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===mo)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===go)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_o)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vo)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xo)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yo)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mo)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wo)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bo)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===So)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===To)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ao)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Ao)return a===Vt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Ai?n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class og extends de{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Si extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lg={type:"move"};class ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const p of t.hand.values()){const d=e.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const x=new Si;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[p.jointName]=x,c.add(x)}const _=c.joints[p.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}}class cg extends me{constructor(t,e,n,i,r,a,o,l,c,u){if(u=u!==void 0?u:Xn,u!==Xn&&u!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Xn&&(n=Wn),n===void 0&&u===Ii&&(n=Ai),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ue,this.minFilter=l!==void 0?l:ue,this.flipY=!1,this.generateMipmaps=!1}}class hg extends Pn{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=null,c=null,u=null,h=null,f=null,m=null;const g=e.getContextAttributes();let p=null,d=null;const _=[],x=[],M=new de;M.layers.enable(1),M.viewport=new Ot;const y=new de;y.layers.enable(2),y.viewport=new Ot;const w=[M,y],A=new og;A.layers.enable(1),A.layers.enable(2);let P=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let O=_[F];return O===void 0&&(O=new ea,_[F]=O),O.getTargetRaySpace()},this.getControllerGrip=function(F){let O=_[F];return O===void 0&&(O=new ea,_[F]=O),O.getGripSpace()},this.getHand=function(F){let O=_[F];return O===void 0&&(O=new ea,_[F]=O),O.getHandSpace()};function E(F){const O=x.indexOf(F.inputSource);if(O===-1)return;const J=_[O];J!==void 0&&J.dispatchEvent({type:F.type,data:F.inputSource})}function I(){i.removeEventListener("select",E),i.removeEventListener("selectstart",E),i.removeEventListener("selectend",E),i.removeEventListener("squeeze",E),i.removeEventListener("squeezestart",E),i.removeEventListener("squeezeend",E),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",j);for(let F=0;F<_.length;F++){const O=x[F];O!==null&&(x[F]=null,_[F].disconnect(O))}P=null,v=null,t.setRenderTarget(p),f=null,h=null,u=null,i=null,d=null,k.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",E),i.addEventListener("selectstart",E),i.addEventListener("selectend",E),i.addEventListener("squeeze",E),i.addEventListener("squeezestart",E),i.addEventListener("squeezeend",E),i.addEventListener("end",I),i.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const O={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,O),i.updateRenderState({baseLayer:f}),d=new Zn(f.framebufferWidth,f.framebufferHeight,{format:je,type:jn,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let O=null,J=null,K=null;g.depth&&(K=g.stencil?35056:33190,O=g.stencil?Ii:Xn,J=g.stencil?Ai:Wn);const tt={colorFormat:32856,depthFormat:K,scaleFactor:r};u=new XRWebGLBinding(i,e),h=u.createProjectionLayer(tt),i.updateRenderState({layers:[h]}),d=new Zn(h.textureWidth,h.textureHeight,{format:je,type:jn,depthTexture:new cg(h.textureWidth,h.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const rt=t.properties.get(d);rt.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(o),k.setContext(i),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function j(F){for(let O=0;O<F.removed.length;O++){const J=F.removed[O],K=x.indexOf(J);K>=0&&(x[K]=null,_[K].dispatchEvent({type:"disconnected",data:J}))}for(let O=0;O<F.added.length;O++){const J=F.added[O];let K=x.indexOf(J);if(K===-1){for(let rt=0;rt<_.length;rt++)if(rt>=x.length){x.push(J),K=rt;break}else if(x[rt]===null){x[rt]=J,K=rt;break}if(K===-1)break}const tt=_[K];tt&&tt.dispatchEvent({type:"connected",data:J})}}const Y=new L,z=new L;function R(F,O,J){Y.setFromMatrixPosition(O.matrixWorld),z.setFromMatrixPosition(J.matrixWorld);const K=Y.distanceTo(z),tt=O.projectionMatrix.elements,rt=J.projectionMatrix.elements,ft=tt[14]/(tt[10]-1),X=tt[14]/(tt[10]+1),Ct=(tt[9]+1)/tt[5],dt=(tt[9]-1)/tt[5],_t=(tt[8]-1)/tt[0],ht=(rt[8]+1)/rt[0],Ft=ft*_t,wt=ft*ht,gt=K/(-_t+ht),Wt=gt*-_t;O.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Wt),F.translateZ(gt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const ae=ft+gt,Qt=X+gt,be=Ft-Wt,te=wt+(K-Wt),Ut=Ct*X/Qt*ae,Ie=dt*X/Qt*ae;F.projectionMatrix.makePerspective(be,te,Ut,Ie,ae,Qt)}function U(F,O){O===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(O.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;A.near=y.near=M.near=F.near,A.far=y.far=M.far=F.far,(P!==A.near||v!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,v=A.far);const O=F.parent,J=A.cameras;U(A,O);for(let tt=0;tt<J.length;tt++)U(J[tt],O);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),F.matrix.copy(A.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const K=F.children;for(let tt=0,rt=K.length;tt<rt;tt++)K[tt].updateMatrixWorld(!0);J.length===2?R(A,M,y):A.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(F){h!==null&&(h.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)};let V=null;function Z(F,O){if(c=O.getViewerPose(l||a),m=O,c!==null){const J=c.views;f!==null&&(t.setRenderTargetFramebuffer(d,f.framebuffer),t.setRenderTarget(d));let K=!1;J.length!==A.cameras.length&&(A.cameras.length=0,K=!0);for(let tt=0;tt<J.length;tt++){const rt=J[tt];let ft=null;if(f!==null)ft=f.getViewport(rt);else{const Ct=u.getViewSubImage(h,rt);ft=Ct.viewport,tt===0&&(t.setRenderTargetTextures(d,Ct.colorTexture,h.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(d))}let X=w[tt];X===void 0&&(X=new de,X.layers.enable(tt),X.viewport=new Ot,w[tt]=X),X.matrix.fromArray(rt.transform.matrix),X.projectionMatrix.fromArray(rt.projectionMatrix),X.viewport.set(ft.x,ft.y,ft.width,ft.height),tt===0&&A.matrix.copy(X.matrix),K===!0&&A.cameras.push(X)}}for(let J=0;J<_.length;J++){const K=x[J],tt=_[J];K!==null&&tt!==void 0&&tt.update(K,O,l||a)}V&&V(F,O),m=null}const k=new nc;k.setAnimationLoop(Z),this.setAnimationLoop=function(F){V=F},this.dispose=function(){}}}function ug(s,t){function e(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,_,x,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),u(p,d)):d.isMeshPhongMaterial?(i(p,d),c(p,d)):d.isMeshStandardMaterial?(i(p,d),h(p,d),d.isMeshPhysicalMaterial&&f(p,d,M)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),g(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(r(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,_,x):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===ze&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===ze&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=t.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const y=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*y}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let x;d.map?x=d.map:d.specularMap?x=d.specularMap:d.displacementMap?x=d.displacementMap:d.normalMap?x=d.normalMap:d.bumpMap?x=d.bumpMap:d.roughnessMap?x=d.roughnessMap:d.metalnessMap?x=d.metalnessMap:d.alphaMap?x=d.alphaMap:d.emissiveMap?x=d.emissiveMap:d.clearcoatMap?x=d.clearcoatMap:d.clearcoatNormalMap?x=d.clearcoatNormalMap:d.clearcoatRoughnessMap?x=d.clearcoatRoughnessMap:d.iridescenceMap?x=d.iridescenceMap:d.iridescenceThicknessMap?x=d.iridescenceThicknessMap:d.specularIntensityMap?x=d.specularIntensityMap:d.specularColorMap?x=d.specularColorMap:d.transmissionMap?x=d.transmissionMap:d.thicknessMap?x=d.thicknessMap:d.sheenColorMap?x=d.sheenColorMap:d.sheenRoughnessMap&&(x=d.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix));let M;d.aoMap?M=d.aoMap:d.lightMap&&(M=d.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uv2Transform.value.copy(M.matrix))}function r(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,_,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=x*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let M;d.map?M=d.map:d.alphaMap&&(M=d.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===ze&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function fg(s,t,e,n){let i={},r={},a=[];const o=e.isWebGL2?s.getParameter(35375):0;function l(x,M){const y=M.program;n.uniformBlockBinding(x,y)}function c(x,M){let y=i[x.id];y===void 0&&(g(x),y=u(x),i[x.id]=y,x.addEventListener("dispose",d));const w=M.program;n.updateUBOMapping(x,w);const A=t.render.frame;r[x.id]!==A&&(f(x),r[x.id]=A)}function u(x){const M=h();x.__bindingPointIndex=M;const y=s.createBuffer(),w=x.__size,A=x.usage;return s.bindBuffer(35345,y),s.bufferData(35345,w,A),s.bindBuffer(35345,null),s.bindBufferBase(35345,M,y),y}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const M=i[x.id],y=x.uniforms,w=x.__cache;s.bindBuffer(35345,M);for(let A=0,P=y.length;A<P;A++){const v=y[A];if(m(v,A,w)===!0){const E=v.value,I=v.__offset;typeof E=="number"?(v.__data[0]=E,s.bufferSubData(35345,I,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):E.toArray(v.__data),s.bufferSubData(35345,I,v.__data))}}s.bindBuffer(35345,null)}function m(x,M,y){const w=x.value;if(y[M]===void 0)return typeof w=="number"?y[M]=w:y[M]=w.clone(),!0;if(typeof w=="number"){if(y[M]!==w)return y[M]=w,!0}else{const A=y[M];if(A.equals(w)===!1)return A.copy(w),!0}return!1}function g(x){const M=x.uniforms;let y=0;const w=16;let A=0;for(let P=0,v=M.length;P<v;P++){const E=M[P],I=p(E);if(E.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,P>0){A=y%w;const j=w-A;A!==0&&j-I.boundary<0&&(y+=w-A,E.__offset=y)}y+=I.storage}return A=y%w,A>0&&(y+=w-A),x.__size=y,x.__cache={},this}function p(x){const M=x.value,y={boundary:0,storage:0};return typeof M=="number"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function d(x){const M=x.target;M.removeEventListener("dispose",d);const y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function _(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:_}}function dg(){const s=cr("canvas");return s.style.display="block",s}function oc(s={}){this.isWebGLRenderer=!0;const t=s.canvas!==void 0?s.canvas:dg(),e=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,a=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,o=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Yn,this.physicallyCorrectLights=!1,this.toneMapping=un,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,_=0,x=0,M=null,y=-1,w=null;const A=new Ot,P=new Ot;let v=null,E=t.width,I=t.height,j=1,Y=null,z=null;const R=new Ot(0,0,E,I),U=new Ot(0,0,E,I);let V=!1;const Z=new Ea;let k=!1,F=!1,O=null;const J=new mt,K=new Mt,tt=new L,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ft(){return M===null?j:1}let X=e;function Ct(T,B){for(let H=0;H<T.length;H++){const N=T[H],q=t.getContext(N,B);if(q!==null)return q}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ba}`),t.addEventListener("webglcontextlost",xt,!1),t.addEventListener("webglcontextrestored",Pt,!1),t.addEventListener("webglcontextcreationerror",Ht,!1),X===null){const B=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&B.shift(),X=Ct(B,T),X===null)throw Ct(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let dt,_t,ht,Ft,wt,gt,Wt,ae,Qt,be,te,Ut,Ie,Se,C,b,W,Q,et,ot,vt,S,$,nt;function lt(){dt=new Sp(X),_t=new vp(X,dt,s),dt.init(_t),S=new ag(X,dt,_t),ht=new rg(X,dt,_t),Ft=new Ep,wt=new Hm,gt=new sg(X,dt,ht,wt,_t,S,Ft),Wt=new yp(p),ae=new bp(p),Qt=new zu(X,_t),$=new gp(X,dt,Qt,_t),be=new Tp(X,Qt,Ft,$),te=new Ip(X,be,Qt,Ft),et=new Pp(X,_t,gt),b=new xp(wt),Ut=new Wm(p,Wt,ae,dt,_t,$,b),Ie=new ug(p,wt),Se=new qm,C=new Jm(dt,_t),Q=new mp(p,Wt,ht,te,u,a),W=new ig(p,te,_t),nt=new fg(X,Ft,_t,ht),ot=new _p(X,dt,Ft,_t),vt=new Ap(X,dt,Ft,_t),Ft.programs=Ut.programs,p.capabilities=_t,p.extensions=dt,p.properties=wt,p.renderLists=Se,p.shadowMap=W,p.state=ht,p.info=Ft}lt();const at=new hg(p,X);this.xr=at,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const T=dt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=dt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(T){T!==void 0&&(j=T,this.setSize(E,I,!1))},this.getSize=function(T){return T.set(E,I)},this.setSize=function(T,B,H){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=T,I=B,t.width=Math.floor(T*j),t.height=Math.floor(B*j),H!==!1&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(E*j,I*j).floor()},this.setDrawingBufferSize=function(T,B,H){E=T,I=B,j=H,t.width=Math.floor(T*H),t.height=Math.floor(B*H),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,B,H,N){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,B,H,N),ht.viewport(A.copy(R).multiplyScalar(j).floor())},this.getScissor=function(T){return T.copy(U)},this.setScissor=function(T,B,H,N){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,B,H,N),ht.scissor(P.copy(U).multiplyScalar(j).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(T){ht.setScissorTest(V=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){z=T},this.getClearColor=function(T){return T.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(T=!0,B=!0,H=!0){let N=0;T&&(N|=16384),B&&(N|=256),H&&(N|=1024),X.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",Ht,!1),Se.dispose(),C.dispose(),wt.dispose(),Wt.dispose(),ae.dispose(),te.dispose(),$.dispose(),nt.dispose(),Ut.dispose(),at.dispose(),at.removeEventListener("sessionstart",Nt),at.removeEventListener("sessionend",ie),O&&(O.dispose(),O=null),Yt.stop()};function xt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const T=Ft.autoReset,B=W.enabled,H=W.autoUpdate,N=W.needsUpdate,q=W.type;lt(),Ft.autoReset=T,W.enabled=B,W.autoUpdate=H,W.needsUpdate=N,W.type=q}function Ht(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function D(T){const B=T.target;B.removeEventListener("dispose",D),st(B)}function st(T){G(T),wt.remove(T)}function G(T){const B=wt.get(T).programs;B!==void 0&&(B.forEach(function(H){Ut.releaseProgram(H)}),T.isShaderMaterial&&Ut.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,H,N,q,pt){B===null&&(B=rt);const yt=q.isMesh&&q.matrixWorld.determinant()<0,Tt=nh(T,B,H,N,q);ht.setMaterial(N,yt);let bt=H.index;const kt=H.attributes.position;if(bt===null){if(kt===void 0||kt.count===0)return}else if(bt.count===0)return;let It=1;N.wireframe===!0&&(bt=be.getWireframeAttribute(H),It=2),$.setup(q,N,Tt,H,bt);let Dt,jt=ot;bt!==null&&(Dt=Qt.get(bt),jt=vt,jt.setIndex(Dt));const Nn=bt!==null?bt.count:kt.count,Jn=H.drawRange.start*It,Qn=H.drawRange.count*It,Ye=pt!==null?pt.start*It:0,zt=pt!==null?pt.count*It:1/0,ti=Math.max(Jn,Ye),$t=Math.min(Nn,Jn+Qn,Ye+zt)-1,Re=Math.max(0,$t-ti+1);if(Re!==0){if(q.isMesh)N.wireframe===!0?(ht.setLineWidth(N.wireframeLinewidth*ft()),jt.setMode(1)):jt.setMode(4);else if(q.isLine){let mn=N.linewidth;mn===void 0&&(mn=1),ht.setLineWidth(mn*ft()),q.isLineSegments?jt.setMode(1):q.isLineLoop?jt.setMode(2):jt.setMode(3)}else q.isPoints?jt.setMode(0):q.isSprite&&jt.setMode(4);if(q.isInstancedMesh)jt.renderInstances(ti,Re,q.count);else if(H.isInstancedBufferGeometry){const mn=Math.min(H.instanceCount,H._maxInstanceCount);jt.renderInstances(ti,Re,mn)}else jt.render(ti,Re)}},this.compile=function(T,B){function H(N,q,pt){N.transparent===!0&&N.side===Tn?(N.side=ze,N.needsUpdate=!0,Mr(N,q,pt),N.side=Ci,N.needsUpdate=!0,Mr(N,q,pt),N.side=Tn):Mr(N,q,pt)}f=C.get(T),f.init(),g.push(f),T.traverseVisible(function(N){N.isLight&&N.layers.test(B.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(p.physicallyCorrectLights),T.traverse(function(N){const q=N.material;if(q)if(Array.isArray(q))for(let pt=0;pt<q.length;pt++){const yt=q[pt];H(yt,T,N)}else H(q,T,N)}),g.pop(),f=null};let ut=null;function ct(T){ut&&ut(T)}function Nt(){Yt.stop()}function ie(){Yt.start()}const Yt=new nc;Yt.setAnimationLoop(ct),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(T){ut=T,at.setAnimationLoop(T),T===null?Yt.stop():Yt.start()},at.addEventListener("sessionstart",Nt),at.addEventListener("sessionend",ie),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(B),B=at.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,B,M),f=C.get(T,g.length),f.init(),g.push(f),J.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Z.setFromProjectionMatrix(J),F=this.localClippingEnabled,k=b.init(this.clippingPlanes,F,B),h=Se.get(T,m.length),h.init(),m.push(h),pn(T,B,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(Y,z),k===!0&&b.beginShadows();const H=f.state.shadowsArray;if(W.render(H,T,B),k===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(h,T),f.setupLights(p.physicallyCorrectLights),B.isArrayCamera){const N=B.cameras;for(let q=0,pt=N.length;q<pt;q++){const yt=N[q];qt(h,T,yt,yt.viewport)}}else qt(h,T,B);M!==null&&(gt.updateMultisampleRenderTarget(M),gt.updateRenderTargetMipmap(M)),T.isScene===!0&&T.onAfterRender(p,T,B),$.resetDefaultState(),y=-1,w=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function pn(T,B,H,N){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){N&&tt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(J);const yt=te.update(T),Tt=T.material;Tt.visible&&h.push(T,yt,Tt,H,tt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ft.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ft.render.frame),!T.frustumCulled||Z.intersectsObject(T))){N&&tt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(J);const yt=te.update(T),Tt=T.material;if(Array.isArray(Tt)){const bt=yt.groups;for(let kt=0,It=bt.length;kt<It;kt++){const Dt=bt[kt],jt=Tt[Dt.materialIndex];jt&&jt.visible&&h.push(T,yt,jt,H,tt.z,Dt)}}else Tt.visible&&h.push(T,yt,Tt,H,tt.z,null)}}const pt=T.children;for(let yt=0,Tt=pt.length;yt<Tt;yt++)pn(pt[yt],B,H,N)}function qt(T,B,H,N){const q=T.opaque,pt=T.transmissive,yt=T.transparent;f.setupLightsView(H),pt.length>0&&tn(q,B,H),N&&ht.viewport(A.copy(N)),q.length>0&&De(q,B,H),pt.length>0&&De(pt,B,H),yt.length>0&&De(yt,B,H),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function tn(T,B,H){const N=_t.isWebGL2;O===null&&(O=new Zn(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")?or:jn,minFilter:ps,samples:N&&r===!0?4:0})),p.getDrawingBufferSize(K),N?O.setSize(K.x,K.y):O.setSize(is(K.x),is(K.y));const q=p.getRenderTarget();p.setRenderTarget(O),p.clear();const pt=p.toneMapping;p.toneMapping=un,De(T,B,H),p.toneMapping=pt,gt.updateMultisampleRenderTarget(O),gt.updateRenderTargetMipmap(O),p.setRenderTarget(q)}function De(T,B,H){const N=B.isScene===!0?B.overrideMaterial:null;for(let q=0,pt=T.length;q<pt;q++){const yt=T[q],Tt=yt.object,bt=yt.geometry,kt=N===null?yt.material:N,It=yt.group;Tt.layers.test(H.layers)&&eh(Tt,B,H,bt,kt,It)}}function eh(T,B,H,N,q,pt){T.onBeforeRender(p,B,H,N,q,pt),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(p,B,H,N,T,pt),q.transparent===!0&&q.side===Tn?(q.side=ze,q.needsUpdate=!0,p.renderBufferDirect(H,B,N,q,T,pt),q.side=Ci,q.needsUpdate=!0,p.renderBufferDirect(H,B,N,q,T,pt),q.side=Tn):p.renderBufferDirect(H,B,N,q,T,pt),T.onAfterRender(p,B,H,N,q,pt)}function Mr(T,B,H){B.isScene!==!0&&(B=rt);const N=wt.get(T),q=f.state.lights,pt=f.state.shadowsArray,yt=q.state.version,Tt=Ut.getParameters(T,q.state,pt,B,H),bt=Ut.getProgramCacheKey(Tt);let kt=N.programs;N.environment=T.isMeshStandardMaterial?B.environment:null,N.fog=B.fog,N.envMap=(T.isMeshStandardMaterial?ae:Wt).get(T.envMap||N.environment),kt===void 0&&(T.addEventListener("dispose",D),kt=new Map,N.programs=kt);let It=kt.get(bt);if(It!==void 0){if(N.currentProgram===It&&N.lightsStateVersion===yt)return Za(T,Tt),It}else Tt.uniforms=Ut.getUniforms(T),T.onBuild(H,Tt,p),T.onBeforeCompile(Tt,p),It=Ut.acquireProgram(Tt,bt),kt.set(bt,It),N.uniforms=Tt.uniforms;const Dt=N.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Dt.clippingPlanes=b.uniform),Za(T,Tt),N.needsLights=rh(T),N.lightsStateVersion=yt,N.needsLights&&(Dt.ambientLightColor.value=q.state.ambient,Dt.lightProbe.value=q.state.probe,Dt.directionalLights.value=q.state.directional,Dt.directionalLightShadows.value=q.state.directionalShadow,Dt.spotLights.value=q.state.spot,Dt.spotLightShadows.value=q.state.spotShadow,Dt.rectAreaLights.value=q.state.rectArea,Dt.ltc_1.value=q.state.rectAreaLTC1,Dt.ltc_2.value=q.state.rectAreaLTC2,Dt.pointLights.value=q.state.point,Dt.pointLightShadows.value=q.state.pointShadow,Dt.hemisphereLights.value=q.state.hemi,Dt.directionalShadowMap.value=q.state.directionalShadowMap,Dt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Dt.spotShadowMap.value=q.state.spotShadowMap,Dt.spotLightMatrix.value=q.state.spotLightMatrix,Dt.spotLightMap.value=q.state.spotLightMap,Dt.pointShadowMap.value=q.state.pointShadowMap,Dt.pointShadowMatrix.value=q.state.pointShadowMatrix);const jt=It.getUniforms(),Nn=Zr.seqWithValue(jt.seq,Dt);return N.currentProgram=It,N.uniformsList=Nn,It}function Za(T,B){const H=wt.get(T);H.outputEncoding=B.outputEncoding,H.instancing=B.instancing,H.skinning=B.skinning,H.morphTargets=B.morphTargets,H.morphNormals=B.morphNormals,H.morphColors=B.morphColors,H.morphTargetsCount=B.morphTargetsCount,H.numClippingPlanes=B.numClippingPlanes,H.numIntersection=B.numClipIntersection,H.vertexAlphas=B.vertexAlphas,H.vertexTangents=B.vertexTangents,H.toneMapping=B.toneMapping}function nh(T,B,H,N,q){B.isScene!==!0&&(B=rt),gt.resetTextureUnits();const pt=B.fog,yt=N.isMeshStandardMaterial?B.environment:null,Tt=M===null?p.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Yn,bt=(N.isMeshStandardMaterial?ae:Wt).get(N.envMap||yt),kt=N.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,It=!!N.normalMap&&!!H.attributes.tangent,Dt=!!H.morphAttributes.position,jt=!!H.morphAttributes.normal,Nn=!!H.morphAttributes.color,Jn=N.toneMapped?p.toneMapping:un,Qn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ye=Qn!==void 0?Qn.length:0,zt=wt.get(N),ti=f.state.lights;if(k===!0&&(F===!0||T!==w)){const Te=T===w&&N.id===y;b.setState(N,T,Te)}let $t=!1;N.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==ti.state.version||zt.outputEncoding!==Tt||q.isInstancedMesh&&zt.instancing===!1||!q.isInstancedMesh&&zt.instancing===!0||q.isSkinnedMesh&&zt.skinning===!1||!q.isSkinnedMesh&&zt.skinning===!0||zt.envMap!==bt||N.fog===!0&&zt.fog!==pt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==b.numPlanes||zt.numIntersection!==b.numIntersection)||zt.vertexAlphas!==kt||zt.vertexTangents!==It||zt.morphTargets!==Dt||zt.morphNormals!==jt||zt.morphColors!==Nn||zt.toneMapping!==Jn||_t.isWebGL2===!0&&zt.morphTargetsCount!==Ye)&&($t=!0):($t=!0,zt.__version=N.version);let Re=zt.currentProgram;$t===!0&&(Re=Mr(N,B,q));let mn=!1,ji=!1,ws=!1;const fe=Re.getUniforms(),On=zt.uniforms;if(ht.useProgram(Re.program)&&(mn=!0,ji=!0,ws=!0),N.id!==y&&(y=N.id,ji=!0),mn||w!==T){if(fe.setValue(X,"projectionMatrix",T.projectionMatrix),_t.logarithmicDepthBuffer&&fe.setValue(X,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),w!==T&&(w=T,ji=!0,ws=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Te=fe.map.cameraPosition;Te!==void 0&&Te.setValue(X,tt.setFromMatrixPosition(T.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&fe.setValue(X,"isOrthographic",T.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||q.isSkinnedMesh)&&fe.setValue(X,"viewMatrix",T.matrixWorldInverse)}if(q.isSkinnedMesh){fe.setOptional(X,q,"bindMatrix"),fe.setOptional(X,q,"bindMatrixInverse");const Te=q.skeleton;Te&&(_t.floatVertexTextures?(Te.boneTexture===null&&Te.computeBoneTexture(),fe.setValue(X,"boneTexture",Te.boneTexture,gt),fe.setValue(X,"boneTextureSize",Te.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const bs=H.morphAttributes;if((bs.position!==void 0||bs.normal!==void 0||bs.color!==void 0&&_t.isWebGL2===!0)&&et.update(q,H,N,Re),(ji||zt.receiveShadow!==q.receiveShadow)&&(zt.receiveShadow=q.receiveShadow,fe.setValue(X,"receiveShadow",q.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(On.envMap.value=bt,On.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),ji&&(fe.setValue(X,"toneMappingExposure",p.toneMappingExposure),zt.needsLights&&ih(On,ws),pt&&N.fog===!0&&Ie.refreshFogUniforms(On,pt),Ie.refreshMaterialUniforms(On,N,j,I,O),Zr.upload(X,zt.uniformsList,On,gt)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Zr.upload(X,zt.uniformsList,On,gt),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&fe.setValue(X,"center",q.center),fe.setValue(X,"modelViewMatrix",q.modelViewMatrix),fe.setValue(X,"normalMatrix",q.normalMatrix),fe.setValue(X,"modelMatrix",q.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Te=N.uniformsGroups;for(let Ss=0,sh=Te.length;Ss<sh;Ss++)if(_t.isWebGL2){const Ka=Te[Ss];nt.update(Ka,Re),nt.bind(Ka,Re)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Re}function ih(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function rh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(T,B,H){wt.get(T.texture).__webglTexture=B,wt.get(T.depthTexture).__webglTexture=H;const N=wt.get(T);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=H===void 0,N.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){const H=wt.get(T);H.__webglFramebuffer=B,H.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,H=0){M=T,_=B,x=H;let N=!0;if(T){const bt=wt.get(T);bt.__useDefaultFramebuffer!==void 0?(ht.bindFramebuffer(36160,null),N=!1):bt.__webglFramebuffer===void 0?gt.setupRenderTarget(T):bt.__hasExternalTextures&&gt.rebindTextures(T,wt.get(T.texture).__webglTexture,wt.get(T.depthTexture).__webglTexture)}let q=null,pt=!1,yt=!1;if(T){const bt=T.texture;(bt.isData3DTexture||bt.isDataArrayTexture)&&(yt=!0);const kt=wt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(q=kt[B],pt=!0):_t.isWebGL2&&T.samples>0&&gt.useMultisampledRTT(T)===!1?q=wt.get(T).__webglMultisampledFramebuffer:q=kt,A.copy(T.viewport),P.copy(T.scissor),v=T.scissorTest}else A.copy(R).multiplyScalar(j).floor(),P.copy(U).multiplyScalar(j).floor(),v=V;if(ht.bindFramebuffer(36160,q)&&_t.drawBuffers&&N&&ht.drawBuffers(T,q),ht.viewport(A),ht.scissor(P),ht.setScissorTest(v),pt){const bt=wt.get(T.texture);X.framebufferTexture2D(36160,36064,34069+B,bt.__webglTexture,H)}else if(yt){const bt=wt.get(T.texture),kt=B||0;X.framebufferTextureLayer(36160,36064,bt.__webglTexture,H||0,kt)}y=-1},this.readRenderTargetPixels=function(T,B,H,N,q,pt,yt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=wt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(Tt=Tt[yt]),Tt){ht.bindFramebuffer(36160,Tt);try{const bt=T.texture,kt=bt.format,It=bt.type;if(kt!==je&&S.convert(kt)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Dt=It===or&&(dt.has("EXT_color_buffer_half_float")||_t.isWebGL2&&dt.has("EXT_color_buffer_float"));if(It!==jn&&S.convert(It)!==X.getParameter(35738)&&!(It===An&&(_t.isWebGL2||dt.has("OES_texture_float")||dt.has("WEBGL_color_buffer_float")))&&!Dt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-N&&H>=0&&H<=T.height-q&&X.readPixels(B,H,N,q,S.convert(kt),S.convert(It),pt)}finally{const bt=M!==null?wt.get(M).__webglFramebuffer:null;ht.bindFramebuffer(36160,bt)}}},this.copyFramebufferToTexture=function(T,B,H=0){const N=Math.pow(2,-H),q=Math.floor(B.image.width*N),pt=Math.floor(B.image.height*N);gt.setTexture2D(B,0),X.copyTexSubImage2D(3553,H,0,0,T.x,T.y,q,pt),ht.unbindTexture()},this.copyTextureToTexture=function(T,B,H,N=0){const q=B.image.width,pt=B.image.height,yt=S.convert(H.format),Tt=S.convert(H.type);gt.setTexture2D(H,0),X.pixelStorei(37440,H.flipY),X.pixelStorei(37441,H.premultiplyAlpha),X.pixelStorei(3317,H.unpackAlignment),B.isDataTexture?X.texSubImage2D(3553,N,T.x,T.y,q,pt,yt,Tt,B.image.data):B.isCompressedTexture?X.compressedTexSubImage2D(3553,N,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,yt,B.mipmaps[0].data):X.texSubImage2D(3553,N,T.x,T.y,yt,Tt,B.image),N===0&&H.generateMipmaps&&X.generateMipmap(3553),ht.unbindTexture()},this.copyTextureToTexture3D=function(T,B,H,N,q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pt=T.max.x-T.min.x+1,yt=T.max.y-T.min.y+1,Tt=T.max.z-T.min.z+1,bt=S.convert(N.format),kt=S.convert(N.type);let It;if(N.isData3DTexture)gt.setTexture3D(N,0),It=32879;else if(N.isDataArrayTexture)gt.setTexture2DArray(N,0),It=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,N.flipY),X.pixelStorei(37441,N.premultiplyAlpha),X.pixelStorei(3317,N.unpackAlignment);const Dt=X.getParameter(3314),jt=X.getParameter(32878),Nn=X.getParameter(3316),Jn=X.getParameter(3315),Qn=X.getParameter(32877),Ye=H.isCompressedTexture?H.mipmaps[0]:H.image;X.pixelStorei(3314,Ye.width),X.pixelStorei(32878,Ye.height),X.pixelStorei(3316,T.min.x),X.pixelStorei(3315,T.min.y),X.pixelStorei(32877,T.min.z),H.isDataTexture||H.isData3DTexture?X.texSubImage3D(It,q,B.x,B.y,B.z,pt,yt,Tt,bt,kt,Ye.data):H.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(It,q,B.x,B.y,B.z,pt,yt,Tt,bt,Ye.data)):X.texSubImage3D(It,q,B.x,B.y,B.z,pt,yt,Tt,bt,kt,Ye),X.pixelStorei(3314,Dt),X.pixelStorei(32878,jt),X.pixelStorei(3316,Nn),X.pixelStorei(3315,Jn),X.pixelStorei(32877,Qn),q===0&&N.generateMipmaps&&X.generateMipmap(It),ht.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?gt.setTextureCube(T,0):T.isData3DTexture?gt.setTexture3D(T,0):T.isDataArrayTexture?gt.setTexture2DArray(T,0):gt.setTexture2D(T,0),ht.unbindTexture()},this.resetState=function(){_=0,x=0,M=null,ht.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class pg extends oc{}pg.prototype.isWebGL1Renderer=!0;class mg extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}const cl=new L,hl=new Ot,ul=new Ot,gg=new L,fl=new mt;class _g extends Me{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new mt,this.bindMatrixInverse=new mt}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Ot,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(t,e){const n=this.skeleton,i=this.geometry;hl.fromBufferAttribute(i.attributes.skinIndex,t),ul.fromBufferAttribute(i.attributes.skinWeight,t),cl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=ul.getComponent(r);if(a!==0){const o=hl.getComponent(r);fl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(gg.copy(cl).applyMatrix4(fl),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class pa extends Xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class vg extends me{constructor(t=null,e=1,n=1,i,r,a,o,l,c=ue,u=ue,h,f){super(null,a,o,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dl=new mt,xg=new mt;class Ia{constructor(t=[],e=[]){this.uuid=In(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new mt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new mt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:xg;dl.multiplyMatrices(o,e[r]),dl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ia(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Hl(t),t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new vg(e,t,t,je,An);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this.boneTextureSize=t,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new pa),this.bones.push(a),this.boneInverses.push(new mt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class lc extends Dn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const pl=new L,ml=new L,gl=new mt,na=new Kl,Gr=new gs;class yg extends Xt{constructor(t=new ye,e=new lc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)pl.fromBufferAttribute(e,i-1),ml.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=pl.distanceTo(ml);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(i),Gr.radius+=r,t.ray.intersectsSphere(Gr)===!1)return;gl.copy(i).invert(),na.copy(t.ray).applyMatrix4(gl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,u=new L,h=new L,f=new L,m=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const _=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let M=_,y=x-1;M<y;M+=m){const w=g.getX(M),A=g.getX(M+1);if(c.fromBufferAttribute(d,w),u.fromBufferAttribute(d,A),na.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const v=t.ray.origin.distanceTo(f);v<t.near||v>t.far||e.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let M=_,y=x-1;M<y;M+=m){if(c.fromBufferAttribute(d,M),u.fromBufferAttribute(d,M+1),na.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(f);A<t.near||A>t.far||e.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}class Mg{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const u=n[i],f=n[i+1]-u,m=(a-u)/f;return(i+m)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new Mt:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,i=[],r=[],a=[],o=new L,l=new mt;for(let m=0;m<=t;m++){const g=m/t;i[m]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(i[m-1],i[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(oe(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(i[m],r[m])}if(e===!0){let m=Math.acos(oe(r[0].dot(r[t]),-1,1));m/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],m*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class vs extends ye{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new L,f=new L,m=[],g=[],p=[],d=[];for(let _=0;_<=n;_++){const x=[],M=_/n;let y=0;_==0&&a==0?y=.5/e:_==n&&l==Math.PI&&(y=-.5/e);for(let w=0;w<=e;w++){const A=w/e;h.x=-t*Math.cos(i+A*r)*Math.sin(a+M*o),h.y=t*Math.cos(a+M*o),h.z=t*Math.sin(i+A*r)*Math.sin(a+M*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),p.push(f.x,f.y,f.z),d.push(A+y,1-M),x.push(c++)}u.push(x)}for(let _=0;_<n;_++)for(let x=0;x<e;x++){const M=u[_][x+1],y=u[_][x],w=u[_+1][x],A=u[_+1][x+1];(_!==0||a>0)&&m.push(M,y,A),(_!==n-1||l<Math.PI)&&m.push(y,w,A)}this.setIndex(m),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(p,3)),this.setAttribute("uv",new le(d,2))}static fromJSON(t){return new vs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class wg extends Dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ms,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ei extends Dn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new St(16777215),this.specular=new St(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ms,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bg extends Dn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ms,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function bn(s,t,e){return cc(s)?new s.constructor(s.subarray(t,e!==void 0?e:s.length)):s.slice(t,e)}function Wr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function cc(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Sg(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function _l(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let l=0;l!==t;++l)i[a++]=s[o+l]}return i}function hc(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}class xs{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Tg extends xs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mi,endingEnd:Mi}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case wi:r=t,o=2*e-n;break;case ns:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wi:a=t,l=2*n-e;break;case ns:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}const c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-e)/(i-e),p=g*g,d=p*g,_=-f*d+2*f*p-f*g,x=(1+f)*d+(-1.5-2*f)*p+(-.5+f)*g+1,M=(-1-m)*d+(1.5+m)*p+.5*g,y=m*d-m*p;for(let w=0;w!==o;++w)r[w]=_*a[u+w]+x*a[c+w]+M*a[l+w]+y*a[h+w];return r}}class uc extends xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(i-e),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}}class Ag extends xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Qe{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wr(e,this.TimeBufferType),this.values=Wr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Wr(t.times,Array),values:Wr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ag(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Tg(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ts:e=this.InterpolantFactoryMethodDiscrete;break;case es:e=this.InterpolantFactoryMethodLinear;break;case Ls:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ts;case this.InterpolantFactoryMethodLinear:return es;case this.InterpolantFactoryMethodSmooth:return Ls}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=bn(n,r,a),this.values=bn(this.values,r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&cc(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=bn(this.times),e=bn(this.values),n=this.getValueSize(),i=this.getInterpolation()===Ls,r=t.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(i)l=!0;else{const h=o*n,f=h-n,m=h+n;for(let g=0;g!==n;++g){const p=e[h+g];if(p!==e[f+g]||p!==e[m+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const h=o*n,f=a*n;for(let m=0;m!==n;++m)e[f+m]=e[h+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=bn(t,0,a),this.values=bn(e,0,a*n)):(this.times=t,this.values=e),this}clone(){const t=bn(this.times,0),e=bn(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Qe.prototype.TimeBufferType=Float32Array;Qe.prototype.ValueBufferType=Float32Array;Qe.prototype.DefaultInterpolation=es;class Oi extends Qe{}Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=ts;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;class fc extends Qe{}fc.prototype.ValueTypeName="color";class hr extends Qe{}hr.prototype.ValueTypeName="number";class Eg extends xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e);let c=t*o;for(let u=c+o;c!==u;c+=4)ne.slerpFlat(r,0,a,c-o,a,c,l);return r}}class zi extends Qe{InterpolantFactoryMethodLinear(t){return new Eg(this.times,this.values,this.getValueSize(),t)}}zi.prototype.ValueTypeName="quaternion";zi.prototype.DefaultInterpolation=es;zi.prototype.InterpolantFactoryMethodSmooth=void 0;class Bi extends Qe{}Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=ts;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;class ur extends Qe{}ur.prototype.ValueTypeName="vector";class ma{constructor(t,e=-1,n,i=Sa){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=In(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(Lg(n[a]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(Qe.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=Sg(l);l=_l(l,1,u),c=_l(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new hr(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,m,g,p){if(m.length!==0){const d=[],_=[];hc(m,d,_,g),d.length!==0&&p.push(new h(f,d,_))}},i=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const m={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let p=0;p<f[g].morphTargets.length;p++)m[f[g].morphTargets[p]]=-1;for(const p in m){const d=[],_=[];for(let x=0;x!==f[g].morphTargets.length;++x){const M=f[g];d.push(M.time),_.push(M.morphTarget===p?1:0)}i.push(new hr(".morphTargetInfluence["+p+"]",d,_))}l=m.length*a}else{const m=".bones["+e[h].name+"]";n(ur,m+".position",f,"pos",i),n(zi,m+".quaternion",f,"rot",i),n(ur,m+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Cg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hr;case"vector":case"vector2":case"vector3":case"vector4":return ur;case"color":return fc;case"quaternion":return zi;case"bool":case"boolean":return Oi;case"string":return Bi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Lg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Cg(s.type);if(s.times===void 0){const e=[],n=[];hc(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const rs={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class dc{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Pg=new dc;class ys{constructor(t){this.manager=t!==void 0?t:Pg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const on={};class Ig extends Error{constructor(t,e){super(t),this.response=e}}class Dg extends ys{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=rs.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(on[t]!==void 0){on[t].push({onLoad:e,onProgress:n,onError:i});return}on[t]=[],on[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=on[t],h=c.body.getReader(),f=c.headers.get("Content-Length"),m=f?parseInt(f):0,g=m!==0;let p=0;const d=new ReadableStream({start(_){x();function x(){h.read().then(({done:M,value:y})=>{if(M)_.close();else{p+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let A=0,P=u.length;A<P;A++){const v=u[A];v.onProgress&&v.onProgress(w)}_.enqueue(y),x()}})}}});return new Response(d)}else throw new Ig(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{rs.add(t,c);const u=on[t];delete on[t];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=on[t];if(u===void 0)throw this.manager.itemError(t),c;delete on[t];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Rg extends ys{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=rs.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=cr("img");function l(){u(),rs.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class pc extends ys{constructor(t){super(t)}load(t,e,n,i){const r=new me,a=new Rg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Ms extends Xt{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const vl=new mt,xl=new L,yl=new L;class Da{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ea,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;xl.setFromMatrixPosition(t.matrixWorld),e.position.copy(xl),yl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yl),e.updateMatrixWorld(),vl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Fg extends Da{constructor(){super(new de(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=lr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ng extends Ms{constructor(t,e,n=0,i=Math.PI/3,r=0,a=1){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DefaultUp),this.updateMatrix(),this.target=new Xt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Fg}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ml=new mt,Ji=new L,ia=new L;class Og extends Da{constructor(){super(new de(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ji.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ji),ia.copy(n.position),ia.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ia),n.updateMatrixWorld(),i.makeTranslation(-Ji.x,-Ji.y,-Ji.z),Ml.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml)}}class wl extends Ms{constructor(t,e,n=0,i=1){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Og}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class zg extends Da{constructor(){super(new La(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mc extends Ms{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DefaultUp),this.updateMatrix(),this.target=new Xt,this.shadow=new zg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class gc extends Ms{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ra{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Bg{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,a;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,a=i;r!==a;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){ne.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const a=this._workIndex*r;ne.multiplyQuaternionsFlat(t,a,t,e,t,n),ne.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=e+o;t[l]=t[l]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[n+a]*i}}}const Fa="\\[\\]\\.:\\/",Ug=new RegExp("["+Fa+"]","g"),Na="[^"+Fa+"]",kg="[^"+Fa.replace("\\.","")+"]",Vg=/((?:WC+[\/:])*)/.source.replace("WC",Na),Gg=/(WCOD+)?/.source.replace("WCOD",kg),Wg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Na),Hg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Na),Xg=new RegExp("^"+Vg+Gg+Wg+Hg+"$"),qg=["material","materials","bones","map"];class jg{constructor(t,e,n){const i=n||Rt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Rt{constructor(t,e,n){this.path=e,this.parsedPath=n||Rt.parseTrackName(e),this.node=Rt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Rt.Composite(t,e,n):new Rt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ug,"")}static parseTrackName(t){const e=Xg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);qg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=Rt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[i];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Rt.Composite=jg;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Yg{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,a=r.length,o=new Array(a),l={endingStart:Mi,endingEnd:Mi};for(let c=0;c!==a;++c){const u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=$h,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,r=t._clip.duration,a=r/i,o=i/r;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Qh:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Sa:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(e*=n.evaluate(t)[0],t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e))}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const a=n===Jh;if(t===0)return r===-1?i:a&&(r&1)===1?e-i:i;if(n===Wl){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){const o=Math.floor(i/e);i-=e*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=wi,i.endingEnd=wi):(t?i.endingStart=this.zeroSlopeAtStart?wi:Mi:i.endingStart=ns,e?i.endingEnd=this.zeroSlopeAtEnd?wi:Mi:i.endingEnd=ns)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=e,o[1]=r+t,l[1]=n,this}}const Zg=new Float32Array(1);class Kg extends Pn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const f=i[h],m=f.name;let g=u[m];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,m));continue}const p=e&&e._propertyBindings[h].binding.parsedPath;g=new Bg(Rt.create(n,m,p),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,m),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=t._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),t._byClipCacheIndex=null;const h=o.actionByRoot,f=(t._localRoot||this._root).uuid;delete h[f],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new uc(new Float32Array(2),new Float32Array(2),1,Zg),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let a=typeof t=="string"?ma.findByName(i,t):t;const o=a!==null?a.uuid:t,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Sa),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new Yg(this,a,e,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?ma.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,h=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,e[u]=h,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class bl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(oe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);const $g=(()=>{class s{constructor(){this._ids=0,this._entitiesMap={},this._entities=[]}_GenerateName(){return this._ids+=1,"__name__"+this._ids}Get(e){return this._entitiesMap[e]}Filter(e){return this._entities.filter(e)}Add(e,n){n||(n=this._GenerateName()),this._entitiesMap[n]=e,this._entities.push(e),e.SetParent(this),e.SetName(n)}SetActive(e,n){const i=this._entities.indexOf(e);i<0||this._entities.splice(i,1)}Update(e){for(let n of this._entities)n.Update(e)}}return{EntityManager:s}})(),qe=(()=>{class s{constructor(){this._name=null,this._components={},this._position=new L,this._rotation=new ne,this._handlers={},this._parent=null}_RegisterHandler(n,i){n in this._handlers||(this._handlers[n]=[]),this._handlers[n].push(i)}SetParent(n){this._parent=n}SetName(n){this._name=n}get Name(){return this._name}SetActive(n){this._parent.SetActive(this,n)}AddComponent(n){n.SetParent(this),this._components[n.constructor.name]=n,n.InitComponent()}GetComponent(n){return this._components[n]}FindEntity(n){return this._parent.Get(n)}Broadcast(n){if(n.topic in this._handlers)for(let i of this._handlers[n.topic])i(n)}SetPosition(n){this._position.copy(n),this.Broadcast({topic:"update.position",value:this._position})}SetQuaternion(n){this._rotation.copy(n),this.Broadcast({topic:"update.rotation",value:this._rotation})}Update(n){for(let i in this._components)this._components[i].Update(n)}}class t{constructor(){this._parent=null}get Name(){return this._name}SetParent(n){this._parent=n}InitComponent(){}GetComponent(n){return this._parent.GetComponent(n)}FindEntity(n){return this._parent.FindEntity(n)}Broadcast(n){this._parent.Broadcast(n)}Update(n){}_RegisterHandler(n,i){this._parent._RegisterHandler(n,i)}}return{Entity:s,Component:t}})();/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Sl={},ga=function(s){return URL.createObjectURL(new Blob([s],{type:"text/javascript"}))},_c=function(s){return new Worker(s)};try{URL.revokeObjectURL(ga(""))}catch{ga=function(t){return"data:application/javascript;charset=UTF-8,"+encodeURI(t)},_c=function(t){return new Worker(t,{type:"module"})}}var Jg=function(s,t,e,n,i){var r=_c(Sl[t]||(Sl[t]=ga(s)));return r.onerror=function(a){return i(a.error,null)},r.onmessage=function(a){return i(null,a.data)},r.postMessage(e,n),r},Lt=Uint8Array,se=Uint16Array,fn=Uint32Array,Ui=new Lt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ki=new Lt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),fr=new Lt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),vc=function(s,t){for(var e=new se(31),n=0;n<31;++n)e[n]=t+=1<<s[n-1];for(var i=new fn(e[30]),n=1;n<30;++n)for(var r=e[n];r<e[n+1];++r)i[r]=r-e[n]<<5|n;return[e,i]},xc=vc(Ui,2),Oa=xc[0],ss=xc[1];Oa[28]=258,ss[258]=28;var yc=vc(ki,0),Mc=yc[0],_a=yc[1],dr=new se(32768);for(var Gt=0;Gt<32768;++Gt){var Sn=(Gt&43690)>>>1|(Gt&21845)<<1;Sn=(Sn&52428)>>>2|(Sn&13107)<<2,Sn=(Sn&61680)>>>4|(Sn&3855)<<4,dr[Gt]=((Sn&65280)>>>8|(Sn&255)<<8)>>>1}var Ue=function(s,t,e){for(var n=s.length,i=0,r=new se(t);i<n;++i)++r[s[i]-1];var a=new se(t);for(i=0;i<t;++i)a[i]=a[i-1]+r[i-1]<<1;var o;if(e){o=new se(1<<t);var l=15-t;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],u=t-s[i],h=a[s[i]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)o[dr[h]>>>l]=c}else for(o=new se(n),i=0;i<n;++i)s[i]&&(o[i]=dr[a[s[i]-1]++]>>>15-s[i]);return o},dn=new Lt(288);for(var Gt=0;Gt<144;++Gt)dn[Gt]=8;for(var Gt=144;Gt<256;++Gt)dn[Gt]=9;for(var Gt=256;Gt<280;++Gt)dn[Gt]=7;for(var Gt=280;Gt<288;++Gt)dn[Gt]=8;var Ri=new Lt(32);for(var Gt=0;Gt<32;++Gt)Ri[Gt]=5;var wc=Ue(dn,9,0),bc=Ue(dn,9,1),Sc=Ue(Ri,5,0),Tc=Ue(Ri,5,1),Kr=function(s){for(var t=s[0],e=1;e<s.length;++e)s[e]>t&&(t=s[e]);return t},Ne=function(s,t,e){var n=t/8|0;return(s[n]|s[n+1]<<8)>>(t&7)&e},$r=function(s,t){var e=t/8|0;return(s[e]|s[e+1]<<8|s[e+2]<<16)>>(t&7)},_r=function(s){return(s/8|0)+(s&7&&1)},ke=function(s,t,e){(t==null||t<0)&&(t=0),(e==null||e>s.length)&&(e=s.length);var n=new(s instanceof se?se:s instanceof fn?fn:Lt)(e-t);return n.set(s.subarray(t,e)),n},vr=function(s,t,e){var n=s.length;if(!n||e&&!e.l&&n<5)return t||new Lt(0);var i=!t||e,r=!e||e.i;e||(e={}),t||(t=new Lt(n*3));var a=function(X){var Ct=t.length;if(X>Ct){var dt=new Lt(Math.max(Ct*2,X));dt.set(t),t=dt}},o=e.f||0,l=e.p||0,c=e.b||0,u=e.l,h=e.d,f=e.m,m=e.n,g=n*8;do{if(!u){e.f=o=Ne(s,l,1);var p=Ne(s,l+1,3);if(l+=3,p)if(p==1)u=bc,h=Tc,f=9,m=5;else if(p==2){var M=Ne(s,l,31)+257,y=Ne(s,l+10,15)+4,w=M+Ne(s,l+5,31)+1;l+=14;for(var A=new Lt(w),P=new Lt(19),v=0;v<y;++v)P[fr[v]]=Ne(s,l+v*3,7);l+=y*3;for(var E=Kr(P),I=(1<<E)-1,j=Ue(P,E,1),v=0;v<w;){var Y=j[Ne(s,l,I)];l+=Y&15;var d=Y>>>4;if(d<16)A[v++]=d;else{var z=0,R=0;for(d==16?(R=3+Ne(s,l,3),l+=2,z=A[v-1]):d==17?(R=3+Ne(s,l,7),l+=3):d==18&&(R=11+Ne(s,l,127),l+=7);R--;)A[v++]=z}}var U=A.subarray(0,M),V=A.subarray(M);f=Kr(U),m=Kr(V),u=Ue(U,f,1),h=Ue(V,m,1)}else throw"invalid block type";else{var d=_r(l)+4,_=s[d-4]|s[d-3]<<8,x=d+_;if(x>n){if(r)throw"unexpected EOF";break}i&&a(c+_),t.set(s.subarray(d,x),c),e.b=c+=_,e.p=l=x*8;continue}if(l>g){if(r)throw"unexpected EOF";break}}i&&a(c+131072);for(var Z=(1<<f)-1,k=(1<<m)-1,F=l;;F=l){var z=u[$r(s,l)&Z],O=z>>>4;if(l+=z&15,l>g){if(r)throw"unexpected EOF";break}if(!z)throw"invalid length/literal";if(O<256)t[c++]=O;else if(O==256){F=l,u=null;break}else{var J=O-254;if(O>264){var v=O-257,K=Ui[v];J=Ne(s,l,(1<<K)-1)+Oa[v],l+=K}var tt=h[$r(s,l)&k],rt=tt>>>4;if(!tt)throw"invalid distance";l+=tt&15;var V=Mc[rt];if(rt>3){var K=ki[rt];V+=$r(s,l)&(1<<K)-1,l+=K}if(l>g){if(r)throw"unexpected EOF";break}i&&a(c+131072);for(var ft=c+J;c<ft;c+=4)t[c]=t[c-V],t[c+1]=t[c+1-V],t[c+2]=t[c+2-V],t[c+3]=t[c+3-V];c=ft}}e.l=u,e.p=F,e.b=c,u&&(o=1,e.m=f,e.d=h,e.n=m)}while(!o);return c==t.length?t:ke(t,0,c)},Ze=function(s,t,e){e<<=t&7;var n=t/8|0;s[n]|=e,s[n+1]|=e>>>8},xi=function(s,t,e){e<<=t&7;var n=t/8|0;s[n]|=e,s[n+1]|=e>>>8,s[n+2]|=e>>>16},Jr=function(s,t){for(var e=[],n=0;n<s.length;++n)s[n]&&e.push({s:n,f:s[n]});var i=e.length,r=e.slice();if(!i)return[hn,0];if(i==1){var a=new Lt(e[0].s+1);return a[e[0].s]=1,[a,1]}e.sort(function(w,A){return w.f-A.f}),e.push({s:-1,f:25001});var o=e[0],l=e[1],c=0,u=1,h=2;for(e[0]={s:-1,f:o.f+l.f,l:o,r:l};u!=i-1;)o=e[e[c].f<e[h].f?c++:h++],l=e[c!=u&&e[c].f<e[h].f?c++:h++],e[u++]={s:-1,f:o.f+l.f,l:o,r:l};for(var f=r[0].s,n=1;n<i;++n)r[n].s>f&&(f=r[n].s);var m=new se(f+1),g=as(e[u-1],m,0);if(g>t){var n=0,p=0,d=g-t,_=1<<d;for(r.sort(function(A,P){return m[P.s]-m[A.s]||A.f-P.f});n<i;++n){var x=r[n].s;if(m[x]>t)p+=_-(1<<g-m[x]),m[x]=t;else break}for(p>>>=d;p>0;){var M=r[n].s;m[M]<t?p-=1<<t-m[M]++-1:++n}for(;n>=0&&p;--n){var y=r[n].s;m[y]==t&&(--m[y],++p)}g=t}return[new Lt(m),g]},as=function(s,t,e){return s.s==-1?Math.max(as(s.l,t,e+1),as(s.r,t,e+1)):t[s.s]=e},va=function(s){for(var t=s.length;t&&!s[--t];);for(var e=new se(++t),n=0,i=s[0],r=1,a=function(l){e[n++]=l},o=1;o<=t;++o)if(s[o]==i&&o!=t)++r;else{if(!i&&r>2){for(;r>138;r-=138)a(32754);r>2&&(a(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(a(i),--r;r>6;r-=6)a(8304);r>2&&(a(r-3<<5|8208),r=0)}for(;r--;)a(i);r=1,i=s[o]}return[e.subarray(0,n),t]},yi=function(s,t){for(var e=0,n=0;n<t.length;++n)e+=s[n]*t[n];return e},sr=function(s,t,e){var n=e.length,i=_r(t+2);s[i]=n&255,s[i+1]=n>>>8,s[i+2]=s[i]^255,s[i+3]=s[i+1]^255;for(var r=0;r<n;++r)s[i+r+4]=e[r];return(i+4+n)*8},xa=function(s,t,e,n,i,r,a,o,l,c,u){Ze(t,u++,e),++i[256];for(var h=Jr(i,15),f=h[0],m=h[1],g=Jr(r,15),p=g[0],d=g[1],_=va(f),x=_[0],M=_[1],y=va(p),w=y[0],A=y[1],P=new se(19),v=0;v<x.length;++v)P[x[v]&31]++;for(var v=0;v<w.length;++v)P[w[v]&31]++;for(var E=Jr(P,7),I=E[0],j=E[1],Y=19;Y>4&&!I[fr[Y-1]];--Y);var z=c+5<<3,R=yi(i,dn)+yi(r,Ri)+a,U=yi(i,f)+yi(r,p)+a+14+3*Y+yi(P,I)+(2*P[16]+3*P[17]+7*P[18]);if(z<=R&&z<=U)return sr(t,u,s.subarray(l,l+c));var V,Z,k,F;if(Ze(t,u,1+(U<R)),u+=2,U<R){V=Ue(f,m,0),Z=f,k=Ue(p,d,0),F=p;var O=Ue(I,j,0);Ze(t,u,M-257),Ze(t,u+5,A-1),Ze(t,u+10,Y-4),u+=14;for(var v=0;v<Y;++v)Ze(t,u+3*v,I[fr[v]]);u+=3*Y;for(var J=[x,w],K=0;K<2;++K)for(var tt=J[K],v=0;v<tt.length;++v){var rt=tt[v]&31;Ze(t,u,O[rt]),u+=I[rt],rt>15&&(Ze(t,u,tt[v]>>>5&127),u+=tt[v]>>>12)}}else V=wc,Z=dn,k=Sc,F=Ri;for(var v=0;v<o;++v)if(n[v]>255){var rt=n[v]>>>18&31;xi(t,u,V[rt+257]),u+=Z[rt+257],rt>7&&(Ze(t,u,n[v]>>>23&31),u+=Ui[rt]);var ft=n[v]&31;xi(t,u,k[ft]),u+=F[ft],ft>3&&(xi(t,u,n[v]>>>5&8191),u+=ki[ft])}else xi(t,u,V[n[v]]),u+=Z[n[v]];return xi(t,u,V[256]),u+Z[256]},Ac=new fn([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),hn=new Lt(0),Ec=function(s,t,e,n,i,r){var a=s.length,o=new Lt(n+a+5*(1+Math.ceil(a/7e3))+i),l=o.subarray(n,o.length-i),c=0;if(!t||a<8)for(var u=0;u<=a;u+=65535){var h=u+65535;h<a?c=sr(l,c,s.subarray(u,h)):(l[u]=r,c=sr(l,c,s.subarray(u,a)))}else{for(var f=Ac[t-1],m=f>>>13,g=f&8191,p=(1<<e)-1,d=new se(32768),_=new se(p+1),x=Math.ceil(e/3),M=2*x,y=function(Wt){return(s[Wt]^s[Wt+1]<<x^s[Wt+2]<<M)&p},w=new fn(25e3),A=new se(288),P=new se(32),v=0,E=0,u=0,I=0,j=0,Y=0;u<a;++u){var z=y(u),R=u&32767,U=_[z];if(d[R]=U,_[z]=R,j<=u){var V=a-u;if((v>7e3||I>24576)&&V>423){c=xa(s,l,0,w,A,P,E,I,Y,u-Y,c),I=v=E=0,Y=u;for(var Z=0;Z<286;++Z)A[Z]=0;for(var Z=0;Z<30;++Z)P[Z]=0}var k=2,F=0,O=g,J=R-U&32767;if(V>2&&z==y(u-J))for(var K=Math.min(m,V)-1,tt=Math.min(32767,u),rt=Math.min(258,V);J<=tt&&--O&&R!=U;){if(s[u+k]==s[u+k-J]){for(var ft=0;ft<rt&&s[u+ft]==s[u+ft-J];++ft);if(ft>k){if(k=ft,F=J,ft>K)break;for(var X=Math.min(J,ft-2),Ct=0,Z=0;Z<X;++Z){var dt=u-J+Z+32768&32767,_t=d[dt],ht=dt-_t+32768&32767;ht>Ct&&(Ct=ht,U=dt)}}}R=U,U=d[R],J+=R-U+32768&32767}if(F){w[I++]=268435456|ss[k]<<18|_a[F];var Ft=ss[k]&31,wt=_a[F]&31;E+=Ui[Ft]+ki[wt],++A[257+Ft],++P[wt],j=u+k,++v}else w[I++]=s[u],++A[s[u]]}}c=xa(s,l,r,w,A,P,E,I,Y,u-Y,c),!r&&c&7&&(c=sr(l,c+1,hn))}return ke(o,0,n+_r(c)+i)},Cc=function(){for(var s=new fn(256),t=0;t<256;++t){for(var e=t,n=9;--n;)e=(e&1&&3988292384)^e>>>1;s[t]=e}return s}(),Vi=function(){var s=-1;return{p:function(t){for(var e=s,n=0;n<t.length;++n)e=Cc[e&255^t[n]]^e>>>8;s=e},d:function(){return~s}}},za=function(){var s=1,t=0;return{p:function(e){for(var n=s,i=t,r=e.length,a=0;a!=r;){for(var o=Math.min(a+2655,r);a<o;++a)i+=n+=e[a];n=(n&65535)+15*(n>>16),i=(i&65535)+15*(i>>16)}s=n,t=i},d:function(){return s%=65521,t%=65521,(s&255)<<24|s>>>8<<16|(t&255)<<8|t>>>8}}},$n=function(s,t,e,n,i){return Ec(s,t.level==null?6:t.level,t.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(s.length)))*1.5):12+t.mem,e,n,!i)},xr=function(s,t){var e={};for(var n in s)e[n]=s[n];for(var n in t)e[n]=t[n];return e},Tl=function(s,t,e){for(var n=s(),i=s.toString(),r=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/ /g,"").split(","),a=0;a<n.length;++a){var o=n[a],l=r[a];if(typeof o=="function"){t+=";"+l+"=";var c=o.toString();if(o.prototype)if(c.indexOf("[native code]")!=-1){var u=c.indexOf(" ",8)+1;t+=c.slice(u,c.indexOf("(",u))}else{t+=c;for(var h in o.prototype)t+=";"+l+".prototype."+h+"="+o.prototype[h].toString()}else t+=c}else e[l]=o}return[t,e]},Hr=[],Qg=function(s){var t=[];for(var e in s)(s[e]instanceof Lt||s[e]instanceof se||s[e]instanceof fn)&&t.push((s[e]=new s[e].constructor(s[e])).buffer);return t},Lc=function(s,t,e,n){var i;if(!Hr[e]){for(var r="",a={},o=s.length-1,l=0;l<o;++l)i=Tl(s[l],r,a),r=i[0],a=i[1];Hr[e]=Tl(s[o],r,a)}var c=xr({},Hr[e][1]);return Jg(Hr[e][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",e,c,Qg(c),n)},Gi=function(){return[Lt,se,fn,Ui,ki,fr,Oa,Mc,bc,Tc,dr,Ue,Kr,Ne,$r,_r,ke,vr,qi,Fn,Ba]},Wi=function(){return[Lt,se,fn,Ui,ki,fr,ss,_a,wc,dn,Sc,Ri,dr,Ac,hn,Ue,Ze,xi,Jr,as,va,yi,sr,xa,_r,ke,Ec,$n,yr,Fn]},Pc=function(){return[Ua,Va,Bt,Vi,Cc]},Ic=function(){return[ka,Fc]},Dc=function(){return[Ga,Bt,za]},Rc=function(){return[Nc]},Fn=function(s){return postMessage(s,[s.buffer])},Ba=function(s){return s&&s.size&&new Lt(s.size)},Hi=function(s,t,e,n,i,r){var a=Lc(e,n,i,function(o,l){a.terminate(),r(o,l)});return a.postMessage([s,t],t.consume?[s.buffer]:[]),function(){a.terminate()}},Ve=function(s){return s.ondata=function(t,e){return postMessage([t,e],[t.buffer])},function(t){return s.push(t.data[0],t.data[1])}},Xi=function(s,t,e,n,i){var r,a=Lc(s,n,i,function(o,l){o?(a.terminate(),t.ondata.call(t,o)):(l[1]&&a.terminate(),t.ondata.call(t,o,l[0],l[1]))});a.postMessage(e),t.push=function(o,l){if(r)throw"stream finished";if(!t.ondata)throw"no stream handler";a.postMessage([o,r=l],[o.buffer])},t.terminate=function(){a.terminate()}},pe=function(s,t){return s[t]|s[t+1]<<8},Kt=function(s,t){return(s[t]|s[t+1]<<8|s[t+2]<<16|s[t+3]<<24)>>>0},ra=function(s,t){return Kt(s,t)+Kt(s,t+4)*4294967296},Bt=function(s,t,e){for(;e;++t)s[t]=e,e>>>=8},Ua=function(s,t){var e=t.filename;if(s[0]=31,s[1]=139,s[2]=8,s[8]=t.level<2?4:t.level==9?2:0,s[9]=3,t.mtime!=0&&Bt(s,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),e){s[3]=8;for(var n=0;n<=e.length;++n)s[n+10]=e.charCodeAt(n)}},ka=function(s){if(s[0]!=31||s[1]!=139||s[2]!=8)throw"invalid gzip data";var t=s[3],e=10;t&4&&(e+=s[10]|(s[11]<<8)+2);for(var n=(t>>3&1)+(t>>4&1);n>0;n-=!s[e++]);return e+(t&2)},Fc=function(s){var t=s.length;return(s[t-4]|s[t-3]<<8|s[t-2]<<16|s[t-1]<<24)>>>0},Va=function(s){return 10+(s.filename&&s.filename.length+1||0)},Ga=function(s,t){var e=t.level,n=e==0?0:e<6?1:e==9?3:2;s[0]=120,s[1]=n<<6|(n?32-2*n:1)},Nc=function(s){if((s[0]&15)!=8||s[0]>>>4>7||(s[0]<<8|s[1])%31)throw"invalid zlib data";if(s[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function Wa(s,t){return!t&&typeof s=="function"&&(t=s,s={}),this.ondata=t,s}var Je=function(){function s(t,e){!e&&typeof t=="function"&&(e=t,t={}),this.ondata=e,this.o=t||{}}return s.prototype.p=function(t,e){this.ondata($n(t,this.o,0,0,!e),e)},s.prototype.push=function(t,e){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";this.d=e,this.p(t,e||!1)},s}(),Oc=function(){function s(t,e){Xi([Wi,function(){return[Ve,Je]}],this,Wa.call(this,t,e),function(n){var i=new Je(n.data);onmessage=Ve(i)},6)}return s}();function zc(s,t,e){if(e||(e=t,t={}),typeof e!="function")throw"no callback";return Hi(s,t,[Wi],function(n){return Fn(yr(n.data[0],n.data[1]))},0,e)}function yr(s,t){return $n(s,t||{},0,0)}var we=function(){function s(t){this.s={},this.p=new Lt(0),this.ondata=t}return s.prototype.e=function(t){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";var e=this.p.length,n=new Lt(e+t.length);n.set(this.p),n.set(t,e),this.p=n},s.prototype.c=function(t){this.d=this.s.i=t||!1;var e=this.s.b,n=vr(this.p,this.o,this.s);this.ondata(ke(n,e,this.s.b),this.d),this.o=ke(n,this.s.b-32768),this.s.b=this.o.length,this.p=ke(this.p,this.s.p/8|0),this.s.p&=7},s.prototype.push=function(t,e){this.e(t),this.c(e)},s}(),Ha=function(){function s(t){this.ondata=t,Xi([Gi,function(){return[Ve,we]}],this,0,function(){var e=new we;onmessage=Ve(e)},7)}return s}();function Xa(s,t,e){if(e||(e=t,t={}),typeof e!="function")throw"no callback";return Hi(s,t,[Gi],function(n){return Fn(qi(n.data[0],Ba(n.data[1])))},1,e)}function qi(s,t){return vr(s,t)}var os=function(){function s(t,e){this.c=Vi(),this.l=0,this.v=1,Je.call(this,t,e)}return s.prototype.push=function(t,e){Je.prototype.push.call(this,t,e)},s.prototype.p=function(t,e){this.c.p(t),this.l+=t.length;var n=$n(t,this.o,this.v&&Va(this.o),e&&8,!e);this.v&&(Ua(n,this.o),this.v=0),e&&(Bt(n,n.length-8,this.c.d()),Bt(n,n.length-4,this.l)),this.ondata(n,e)},s}(),Al=function(){function s(t,e){Xi([Wi,Pc,function(){return[Ve,Je,os]}],this,Wa.call(this,t,e),function(n){var i=new os(n.data);onmessage=Ve(i)},8)}return s}();function El(s,t,e){if(e||(e=t,t={}),typeof e!="function")throw"no callback";return Hi(s,t,[Wi,Pc,function(){return[ls]}],function(n){return Fn(ls(n.data[0],n.data[1]))},2,e)}function ls(s,t){t||(t={});var e=Vi(),n=s.length;e.p(s);var i=$n(s,t,Va(t),8),r=i.length;return Ua(i,t),Bt(i,r-8,e.d()),Bt(i,r-4,n),i}var cs=function(){function s(t){this.v=1,we.call(this,t)}return s.prototype.push=function(t,e){if(we.prototype.e.call(this,t),this.v){var n=this.p.length>3?ka(this.p):4;if(n>=this.p.length&&!e)return;this.p=this.p.subarray(n),this.v=0}if(e){if(this.p.length<8)throw"invalid gzip stream";this.p=this.p.subarray(0,-8)}we.prototype.c.call(this,e)},s}(),Bc=function(){function s(t){this.ondata=t,Xi([Gi,Ic,function(){return[Ve,we,cs]}],this,0,function(){var e=new cs;onmessage=Ve(e)},9)}return s}();function Uc(s,t,e){if(e||(e=t,t={}),typeof e!="function")throw"no callback";return Hi(s,t,[Gi,Ic,function(){return[hs]}],function(n){return Fn(hs(n.data[0]))},3,e)}function hs(s,t){return vr(s.subarray(ka(s),-8),t||new Lt(Fc(s)))}var ya=function(){function s(t,e){this.c=za(),this.v=1,Je.call(this,t,e)}return s.prototype.push=function(t,e){Je.prototype.push.call(this,t,e)},s.prototype.p=function(t,e){this.c.p(t);var n=$n(t,this.o,this.v&&2,e&&4,!e);this.v&&(Ga(n,this.o),this.v=0),e&&Bt(n,n.length-4,this.c.d()),this.ondata(n,e)},s}(),t_=function(){function s(t,e){Xi([Wi,Dc,function(){return[Ve,Je,ya]}],this,Wa.call(this,t,e),function(n){var i=new ya(n.data);onmessage=Ve(i)},10)}return s}();function e_(s,t,e){if(e||(e=t,t={}),typeof e!="function")throw"no callback";return Hi(s,t,[Wi,Dc,function(){return[Ma]}],function(n){return Fn(Ma(n.data[0],n.data[1]))},4,e)}function Ma(s,t){t||(t={});var e=za();e.p(s);var n=$n(s,t,2,4);return Ga(n,t),Bt(n,n.length-4,e.d()),n}var us=function(){function s(t){this.v=1,we.call(this,t)}return s.prototype.push=function(t,e){if(we.prototype.e.call(this,t),this.v){if(this.p.length<2&&!e)return;this.p=this.p.subarray(2),this.v=0}if(e){if(this.p.length<4)throw"invalid zlib stream";this.p=this.p.subarray(0,-4)}we.prototype.c.call(this,e)},s}(),kc=function(){function s(t){this.ondata=t,Xi([Gi,Rc,function(){return[Ve,we,us]}],this,0,function(){var e=new us;onmessage=Ve(e)},11)}return s}();function Vc(s,t,e){if(e||(e=t,t={}),typeof e!="function")throw"no callback";return Hi(s,t,[Gi,Rc,function(){return[pr]}],function(n){return Fn(pr(n.data[0],Ba(n.data[1])))},5,e)}function pr(s,t){return vr((Nc(s),s.subarray(2,-4)),t)}var Gc=function(){function s(t){this.G=cs,this.I=we,this.Z=us,this.ondata=t}return s.prototype.push=function(t,e){if(!this.ondata)throw"no stream handler";if(this.s)this.s.push(t,e);else{if(this.p&&this.p.length){var n=new Lt(this.p.length+t.length);n.set(this.p),n.set(t,this.p.length)}else this.p=t;if(this.p.length>2){var i=this,r=function(){i.ondata.apply(i,arguments)};this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(r):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(r):new this.Z(r),this.s.push(this.p,e),this.p=null}}},s}(),n_=function(){function s(t){this.G=Bc,this.I=Ha,this.Z=kc,this.ondata=t}return s.prototype.push=function(t,e){Gc.prototype.push.call(this,t,e)},s}();function i_(s,t,e){if(e||(e=t,t={}),typeof e!="function")throw"no callback";return s[0]==31&&s[1]==139&&s[2]==8?Uc(s,t,e):(s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31?Xa(s,t,e):Vc(s,t,e)}function r_(s,t){return s[0]==31&&s[1]==139&&s[2]==8?hs(s,t):(s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31?qi(s,t):pr(s,t)}var qa=function(s,t,e,n){for(var i in s){var r=s[i],a=t+i;r instanceof Lt?e[a]=[r,n]:Array.isArray(r)?e[a]=[r[0],xr(n,r[1])]:qa(r,a+"/",e,n)}},Cl=typeof TextEncoder<"u"&&new TextEncoder,wa=typeof TextDecoder<"u"&&new TextDecoder,Wc=0;try{wa.decode(hn,{stream:!0}),Wc=1}catch{}var Hc=function(s){for(var t="",e=0;;){var n=s[e++],i=(n>127)+(n>223)+(n>239);if(e+i>s.length)return[t,ke(s,e-1)];i?i==3?(n=((n&15)<<18|(s[e++]&63)<<12|(s[e++]&63)<<6|s[e++]&63)-65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023)):i&1?t+=String.fromCharCode((n&31)<<6|s[e++]&63):t+=String.fromCharCode((n&15)<<12|(s[e++]&63)<<6|s[e++]&63):t+=String.fromCharCode(n)}},s_=function(){function s(t){this.ondata=t,Wc?this.t=new TextDecoder:this.p=hn}return s.prototype.push=function(t,e){if(!this.ondata)throw"no callback";if(e=!!e,this.t){if(this.ondata(this.t.decode(t,{stream:!0}),e),e){if(this.t.decode().length)throw"invalid utf-8 data";this.t=null}return}if(!this.p)throw"stream finished";var n=new Lt(this.p.length+t.length);n.set(this.p),n.set(t,this.p.length);var i=Hc(n),r=i[0],a=i[1];if(e){if(a.length)throw"invalid utf-8 data";this.p=null}else this.p=a;this.ondata(r,e)},s}(),a_=function(){function s(t){this.ondata=t}return s.prototype.push=function(t,e){if(!this.ondata)throw"no callback";if(this.d)throw"stream finished";this.ondata(Ln(t),this.d=e||!1)},s}();function Ln(s,t){if(t){for(var e=new Lt(s.length),n=0;n<s.length;++n)e[n]=s.charCodeAt(n);return e}if(Cl)return Cl.encode(s);for(var i=s.length,r=new Lt(s.length+(s.length>>1)),a=0,o=function(u){r[a++]=u},n=0;n<i;++n){if(a+5>r.length){var l=new Lt(a+8+(i-n<<1));l.set(r),r=l}var c=s.charCodeAt(n);c<128||t?o(c):c<2048?(o(192|c>>6),o(128|c&63)):c>55295&&c<57344?(c=65536+(c&1023<<10)|s.charCodeAt(++n)&1023,o(240|c>>18),o(128|c>>12&63),o(128|c>>6&63),o(128|c&63)):(o(224|c>>12),o(128|c>>6&63),o(128|c&63))}return ke(r,0,a)}function ja(s,t){if(t){for(var e="",n=0;n<s.length;n+=16384)e+=String.fromCharCode.apply(null,s.subarray(n,n+16384));return e}else{if(wa)return wa.decode(s);var i=Hc(s),r=i[0],a=i[1];if(a.length)throw"invalid utf-8 data";return r}}var Xc=function(s){return s==1?3:s<6?2:s==9?1:0},qc=function(s,t){return t+30+pe(s,t+26)+pe(s,t+28)},jc=function(s,t,e){var n=pe(s,t+28),i=ja(s.subarray(t+46,t+46+n),!(pe(s,t+8)&2048)),r=t+46+n,a=Kt(s,t+20),o=e&&a==4294967295?Yc(s,r):[a,Kt(s,t+24),Kt(s,t+42)],l=o[0],c=o[1],u=o[2];return[pe(s,t+10),l,c,i,r+pe(s,t+30)+pe(s,t+32),u]},Yc=function(s,t){for(;pe(s,t)!=1;t+=4+pe(s,t+2));return[ra(s,t+12),ra(s,t+4),ra(s,t+20)]},Cn=function(s){var t=0;if(s)for(var e in s){var n=s[e].length;if(n>65535)throw"extra field too long";t+=n+4}return t},Fi=function(s,t,e,n,i,r,a,o){var l=n.length,c=e.extra,u=o&&o.length,h=Cn(c);Bt(s,t,a!=null?33639248:67324752),t+=4,a!=null&&(s[t++]=20,s[t++]=e.os),s[t]=20,t+=2,s[t++]=e.flag<<1|(r==null&&8),s[t++]=i&&8,s[t++]=e.compression&255,s[t++]=e.compression>>8;var f=new Date(e.mtime==null?Date.now():e.mtime),m=f.getFullYear()-1980;if(m<0||m>119)throw"date not in range 1980-2099";if(Bt(s,t,m<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>>1),t+=4,r!=null&&(Bt(s,t,e.crc),Bt(s,t+4,r),Bt(s,t+8,e.size)),Bt(s,t+12,l),Bt(s,t+14,h),t+=16,a!=null&&(Bt(s,t,u),Bt(s,t+6,e.attrs),Bt(s,t+10,a),t+=14),s.set(n,t),t+=l,h)for(var g in c){var p=c[g],d=p.length;Bt(s,t,+g),Bt(s,t+2,d),s.set(p,t+4),t+=4+d}return u&&(s.set(o,t),t+=u),t},Ya=function(s,t,e,n,i){Bt(s,t,101010256),Bt(s,t+8,e),Bt(s,t+10,e),Bt(s,t+12,n),Bt(s,t+16,i)},mr=function(){function s(t){this.filename=t,this.c=Vi(),this.size=0,this.compression=0}return s.prototype.process=function(t,e){this.ondata(null,t,e)},s.prototype.push=function(t,e){if(!this.ondata)throw"no callback - add to ZIP archive before pushing";this.c.p(t),this.size+=t.length,e&&(this.crc=this.c.d()),this.process(t,e||!1)},s}(),o_=function(){function s(t,e){var n=this;e||(e={}),mr.call(this,t),this.d=new Je(e,function(i,r){n.ondata(null,i,r)}),this.compression=8,this.flag=Xc(e.level)}return s.prototype.process=function(t,e){try{this.d.push(t,e)}catch(n){this.ondata(n,null,e)}},s.prototype.push=function(t,e){mr.prototype.push.call(this,t,e)},s}(),l_=function(){function s(t,e){var n=this;e||(e={}),mr.call(this,t),this.d=new Oc(e,function(i,r,a){n.ondata(i,r,a)}),this.compression=8,this.flag=Xc(e.level),this.terminate=this.d.terminate}return s.prototype.process=function(t,e){this.d.push(t,e)},s.prototype.push=function(t,e){mr.prototype.push.call(this,t,e)},s}(),c_=function(){function s(t){this.ondata=t,this.u=[],this.d=1}return s.prototype.add=function(t){var e=this;if(this.d&2)throw"stream finished";var n=Ln(t.filename),i=n.length,r=t.comment,a=r&&Ln(r),o=i!=t.filename.length||a&&r.length!=a.length,l=i+Cn(t.extra)+30;if(i>65535)throw"filename too long";var c=new Lt(l);Fi(c,0,t,n,o);var u=[c],h=function(){for(var d=0,_=u;d<_.length;d++){var x=_[d];e.ondata(null,x,!1)}u=[]},f=this.d;this.d=0;var m=this.u.length,g=xr(t,{f:n,u:o,o:a,t:function(){t.terminate&&t.terminate()},r:function(){if(h(),f){var d=e.u[m+1];d?d.r():e.d=1}f=1}}),p=0;t.ondata=function(d,_,x){if(d)e.ondata(d,_,x),e.terminate();else if(p+=_.length,u.push(_),x){var M=new Lt(16);Bt(M,0,134695760),Bt(M,4,t.crc),Bt(M,8,p),Bt(M,12,t.size),u.push(M),g.c=p,g.b=l+p+16,g.crc=t.crc,g.size=t.size,f&&g.r(),f=1}else f&&h()},this.u.push(g)},s.prototype.end=function(){var t=this;if(this.d&2)throw this.d&1?"stream finishing":"stream finished";this.d?this.e():this.u.push({r:function(){!(t.d&1)||(t.u.splice(-1,1),t.e())},t:function(){}}),this.d=3},s.prototype.e=function(){for(var t=0,e=0,n=0,i=0,r=this.u;i<r.length;i++){var a=r[i];n+=46+a.f.length+Cn(a.extra)+(a.o?a.o.length:0)}for(var o=new Lt(n+22),l=0,c=this.u;l<c.length;l++){var a=c[l];Fi(o,t,a,a.f,a.u,a.c,e,a.o),t+=46+a.f.length+Cn(a.extra)+(a.o?a.o.length:0),e+=a.b}Ya(o,t,this.u.length,n,e),this.ondata(null,o,!0),this.d=2},s.prototype.terminate=function(){for(var t=0,e=this.u;t<e.length;t++){var n=e[t];n.t()}this.d=2},s}();function h_(s,t,e){if(e||(e=t,t={}),typeof e!="function")throw"no callback";var n={};qa(s,"",n,t);var i=Object.keys(n),r=i.length,a=0,o=0,l=r,c=new Array(r),u=[],h=function(){for(var p=0;p<u.length;++p)u[p]()},f=function(){var p=new Lt(o+22),d=a,_=o-a;o=0;for(var x=0;x<l;++x){var M=c[x];try{var y=M.c.length;Fi(p,o,M,M.f,M.u,y);var w=30+M.f.length+Cn(M.extra),A=o+w;p.set(M.c,A),Fi(p,a,M,M.f,M.u,y,o,M.m),a+=16+w+(M.m?M.m.length:0),o=A+y}catch(P){return e(P,null)}}Ya(p,a,c.length,_,d),e(null,p)};r||f();for(var m=function(p){var d=i[p],_=n[d],x=_[0],M=_[1],y=Vi(),w=x.length;y.p(x);var A=Ln(d),P=A.length,v=M.comment,E=v&&Ln(v),I=E&&E.length,j=Cn(M.extra),Y=M.level==0?0:8,z=function(R,U){if(R)h(),e(R,null);else{var V=U.length;c[p]=xr(M,{size:w,crc:y.d(),c:U,f:A,m:E,u:P!=d.length||E&&v.length!=I,compression:Y}),a+=30+P+j+V,o+=76+2*(P+j)+(I||0)+V,--r||f()}};if(P>65535&&z("filename too long",null),!Y)z(null,x);else if(w<16e4)try{z(null,yr(x,M))}catch(R){z(R,null)}else u.push(zc(x,M,z))},g=0;g<l;++g)m(g);return h}function u_(s,t){t||(t={});var e={},n=[];qa(s,"",e,t);var i=0,r=0;for(var a in e){var o=e[a],l=o[0],c=o[1],u=c.level==0?0:8,h=Ln(a),f=h.length,m=c.comment,g=m&&Ln(m),p=g&&g.length,d=Cn(c.extra);if(f>65535)throw"filename too long";var _=u?yr(l,c):l,x=_.length,M=Vi();M.p(l),n.push(xr(c,{size:l.length,crc:M.d(),c:_,f:h,m:g,u:f!=a.length||g&&m.length!=p,o:i,compression:u})),i+=30+f+d+x,r+=76+2*(f+d)+(p||0)+x}for(var y=new Lt(r+22),w=i,A=r-i,P=0;P<n.length;++P){var h=n[P];Fi(y,h.o,h,h.f,h.u,h.c.length);var v=30+h.f.length+Cn(h.extra);y.set(h.c,h.o+v),Fi(y,i,h,h.f,h.u,h.c.length,h.o,h.m),i+=16+v+(h.m?h.m.length:0)}return Ya(y,i,n.length,A,w),y}var Zc=function(){function s(){}return s.prototype.push=function(t,e){this.ondata(null,t,e)},s.compression=0,s}(),f_=function(){function s(){var t=this;this.i=new we(function(e,n){t.ondata(null,e,n)})}return s.prototype.push=function(t,e){try{this.i.push(t,e)}catch(n){this.ondata(n,t,e)}},s.compression=8,s}(),d_=function(){function s(t,e){var n=this;e<32e4?this.i=new we(function(i,r){n.ondata(null,i,r)}):(this.i=new Ha(function(i,r,a){n.ondata(i,r,a)}),this.terminate=this.i.terminate)}return s.prototype.push=function(t,e){this.i.terminate&&(t=ke(t,0)),this.i.push(t,e)},s.compression=8,s}(),p_=function(){function s(t){this.onfile=t,this.k=[],this.o={0:Zc},this.p=hn}return s.prototype.push=function(t,e){var n=this;if(!this.onfile)throw"no callback";if(!this.p)throw"stream finished";if(this.c>0){var i=Math.min(this.c,t.length),r=t.subarray(0,i);if(this.c-=i,this.d?this.d.push(r,!this.c):this.k[0].push(r),t=t.subarray(i),t.length)return this.push(t,e)}else{var a=0,o=0,l=void 0,c=void 0;this.p.length?t.length?(c=new Lt(this.p.length+t.length),c.set(this.p),c.set(t,this.p.length)):c=this.p:c=t;for(var u=c.length,h=this.c,f=h&&this.d,m=function(){var _,x=Kt(c,o);if(x==67324752){a=1,l=o,g.d=null,g.c=0;var M=pe(c,o+6),y=pe(c,o+8),w=M&2048,A=M&8,P=pe(c,o+26),v=pe(c,o+28);if(u>o+30+P+v){var E=[];g.k.unshift(E),a=2;var I=Kt(c,o+18),j=Kt(c,o+22),Y=ja(c.subarray(o+30,o+=30+P),!w);I==4294967295?(_=A?[-2]:Yc(c,o),I=_[0],j=_[1]):A&&(I=-1),o+=v,g.c=I;var z,R={name:Y,compression:y,start:function(){if(!R.ondata)throw"no callback";if(!I)R.ondata(null,hn,!0);else{var U=n.o[y];if(!U)throw"unknown compression type "+y;z=I<0?new U(Y):new U(Y,I,j),z.ondata=function(F,O,J){R.ondata(F,O,J)};for(var V=0,Z=E;V<Z.length;V++){var k=Z[V];z.push(k,!1)}n.k[0]==E&&n.c?n.d=z:z.push(hn,!0)}},terminate:function(){z&&z.terminate&&z.terminate()}};I>=0&&(R.size=I,R.originalSize=j),g.onfile(R)}return"break"}else if(h){if(x==134695760)return l=o+=12+(h==-2&&8),a=3,g.c=0,"break";if(x==33639248)return l=o-=4,a=3,g.c=0,"break"}},g=this;o<u-4;++o){var p=m();if(p==="break")break}if(this.p=hn,h<0){var d=a?c.subarray(0,l-12-(h==-2&&8)-(Kt(c,l-16)==134695760&&4)):c.subarray(0,o);f?f.push(d,!!a):this.k[+(a==2)].push(d)}if(a&2)return this.push(c.subarray(o),e);this.p=c.subarray(o)}if(e){if(this.c)throw"invalid zip file";this.p=null}},s.prototype.register=function(t){this.o[t.compression]=t},s}();function m_(s,t){if(typeof t!="function")throw"no callback";for(var e=[],n=function(){for(var f=0;f<e.length;++f)e[f]()},i={},r=s.length-22;Kt(s,r)!=101010256;--r)if(!r||s.length-r>65558){t("invalid zip file",null);return}var a=pe(s,r+8);a||t(null,{});var o=a,l=Kt(s,r+16),c=l==4294967295;if(c){if(r=Kt(s,r-12),Kt(s,r)!=101075792){t("invalid zip file",null);return}o=a=Kt(s,r+32),l=Kt(s,r+48)}for(var u=function(f){var m=jc(s,l,c),g=m[0],p=m[1],d=m[2],_=m[3],x=m[4],M=m[5],y=qc(s,M);l=x;var w=function(P,v){P?(n(),t(P,null)):(i[_]=v,--a||t(null,i))};if(!g)w(null,ke(s,y,y+p));else if(g==8){var A=s.subarray(y,y+p);if(p<32e4)try{w(null,qi(A,new Lt(d)))}catch(P){w(P,null)}else e.push(Xa(A,{size:d},w))}else w("unknown compression type "+g,null)},h=0;h<o;++h)u();return n}function g_(s){for(var t={},e=s.length-22;Kt(s,e)!=101010256;--e)if(!e||s.length-e>65558)throw"invalid zip file";var n=pe(s,e+8);if(!n)return{};var i=Kt(s,e+16),r=i==4294967295;if(r){if(e=Kt(s,e-12),Kt(s,e)!=101075792)throw"invalid zip file";n=Kt(s,e+32),i=Kt(s,e+48)}for(var a=0;a<n;++a){var o=jc(s,i,r),l=o[0],c=o[1],u=o[2],h=o[3],f=o[4],m=o[5],g=qc(s,m);if(i=f,!l)t[h]=ke(s,g,g+c);else if(l==8)t[h]=qi(s.subarray(g,g+c),new Lt(u));else throw"unknown compression type "+l}return t}const __=Object.freeze(Object.defineProperty({__proto__:null,Deflate:Je,AsyncDeflate:Oc,deflate:zc,deflateSync:yr,Inflate:we,AsyncInflate:Ha,inflate:Xa,inflateSync:qi,Gzip:os,AsyncGzip:Al,gzip:El,gzipSync:ls,Gunzip:cs,AsyncGunzip:Bc,gunzip:Uc,gunzipSync:hs,Zlib:ya,AsyncZlib:t_,zlib:e_,zlibSync:Ma,Unzlib:us,AsyncUnzlib:kc,unzlib:Vc,unzlibSync:pr,compress:El,AsyncCompress:Al,compressSync:ls,Compress:os,Decompress:Gc,AsyncDecompress:n_,decompress:i_,decompressSync:r_,DecodeUTF8:s_,EncodeUTF8:a_,strToU8:Ln,strFromU8:ja,ZipPassThrough:mr,ZipDeflate:o_,AsyncZipDeflate:l_,Zip:c_,zip:h_,zipSync:u_,UnzipPassThrough:Zc,UnzipInflate:f_,AsyncUnzipInflate:d_,Unzip:p_,unzip:m_,unzipSync:g_},Symbol.toStringTag,{value:"Module"}));function Kc(s,t,e){const n=e.length-s-1;if(t>=e[n])return n-1;if(t<=e[s])return s;let i=s,r=n,a=Math.floor((i+r)/2);for(;t<e[a]||t>=e[a+1];)t<e[a]?r=a:i=a,a=Math.floor((i+r)/2);return a}function v_(s,t,e,n){const i=[],r=[],a=[];i[0]=1;for(let o=1;o<=e;++o){r[o]=t-n[s+1-o],a[o]=n[s+o]-t;let l=0;for(let c=0;c<o;++c){const u=a[c+1],h=r[o-c],f=i[c]/(u+h);i[c]=l+u*f,l=h*f}i[o]=l}return i}function x_(s,t,e,n){const i=Kc(s,n,t),r=v_(i,n,s,t),a=new Ot(0,0,0,0);for(let o=0;o<=s;++o){const l=e[i-s+o],c=r[o],u=l.w*c;a.x+=l.x*u,a.y+=l.y*u,a.z+=l.z*u,a.w+=l.w*c}return a}function y_(s,t,e,n,i){const r=[];for(let h=0;h<=e;++h)r[h]=0;const a=[];for(let h=0;h<=n;++h)a[h]=r.slice(0);const o=[];for(let h=0;h<=e;++h)o[h]=r.slice(0);o[0][0]=1;const l=r.slice(0),c=r.slice(0);for(let h=1;h<=e;++h){l[h]=t-i[s+1-h],c[h]=i[s+h]-t;let f=0;for(let m=0;m<h;++m){const g=c[m+1],p=l[h-m];o[h][m]=g+p;const d=o[m][h-1]/o[h][m];o[m][h]=f+g*d,f=p*d}o[h][h]=f}for(let h=0;h<=e;++h)a[0][h]=o[h][e];for(let h=0;h<=e;++h){let f=0,m=1;const g=[];for(let p=0;p<=e;++p)g[p]=r.slice(0);g[0][0]=1;for(let p=1;p<=n;++p){let d=0;const _=h-p,x=e-p;h>=p&&(g[m][0]=g[f][0]/o[x+1][_],d=g[m][0]*o[_][x]);const M=_>=-1?1:-_,y=h-1<=x?p-1:e-h;for(let A=M;A<=y;++A)g[m][A]=(g[f][A]-g[f][A-1])/o[x+1][_+A],d+=g[m][A]*o[_+A][x];h<=x&&(g[m][p]=-g[f][p-1]/o[x+1][h],d+=g[m][p]*o[h][x]),a[p][h]=d;const w=f;f=m,m=w}}let u=e;for(let h=1;h<=n;++h){for(let f=0;f<=e;++f)a[h][f]*=u;u*=e-h}return a}function M_(s,t,e,n,i){const r=i<s?i:s,a=[],o=Kc(s,n,t),l=y_(o,n,s,r,t),c=[];for(let u=0;u<e.length;++u){const h=e[u].clone(),f=h.w;h.x*=f,h.y*=f,h.z*=f,c[u]=h}for(let u=0;u<=r;++u){const h=c[o-s].clone().multiplyScalar(l[u][0]);for(let f=1;f<=s;++f)h.add(c[o-s+f].clone().multiplyScalar(l[u][f]));a[u]=h}for(let u=r+1;u<=i+1;++u)a[u]=new Ot(0,0,0);return a}function w_(s,t){let e=1;for(let i=2;i<=s;++i)e*=i;let n=1;for(let i=2;i<=t;++i)n*=i;for(let i=2;i<=s-t;++i)n*=i;return e/n}function b_(s){const t=s.length,e=[],n=[];for(let r=0;r<t;++r){const a=s[r];e[r]=new L(a.x,a.y,a.z),n[r]=a.w}const i=[];for(let r=0;r<t;++r){const a=e[r].clone();for(let o=1;o<=r;++o)a.sub(i[r-o].clone().multiplyScalar(w_(r,o)*n[o]));i[r]=a.divideScalar(n[0])}return i}function S_(s,t,e,n,i){const r=M_(s,t,e,n,i);return b_(r)}class Ll extends Mg{constructor(t,e,n,i,r){super(),this.degree=t,this.knots=e,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||this.knots.length-1;for(let a=0;a<n.length;++a){const o=n[a];this.controlPoints[a]=new Ot(o.x,o.y,o.z,o.w)}}getPoint(t,e=new L){const n=e,i=this.knots[this.startKnot]+t*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=x_(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(t,e=new L){const n=e,i=this.knots[0]+t*(this.knots[this.knots.length-1]-this.knots[0]),r=S_(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}}let Et,Zt,xe;class Pl extends ys{constructor(t){super(t)}load(t,e,n,i){const r=this,a=r.path===""?Ra.extractUrlBase(t):r.path,o=new Dg(this.manager);o.setPath(r.path),o.setResponseType("arraybuffer"),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(l){try{e(r.parse(l,a))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t,e){if(P_(t))Et=new L_().parse(t);else{const i=th(t);if(!I_(i))throw new Error("THREE.FBXLoader: Unknown format.");if(Dl(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Dl(i));Et=new C_().parse(i)}const n=new pc(this.manager).setPath(this.resourcePath||e).setCrossOrigin(this.crossOrigin);return new T_(n,this.manager).parse(Et)}}class T_{constructor(t,e){this.textureLoader=t,this.manager=e}parse(){Zt=this.parseConnections();const t=this.parseImages(),e=this.parseTextures(t),n=this.parseMaterials(e),i=this.parseDeformers(),r=new A_().parse(i);return this.parseScene(i,r,n),xe}parseConnections(){const t=new Map;return"Connections"in Et&&Et.Connections.connections.forEach(function(n){const i=n[0],r=n[1],a=n[2];t.has(i)||t.set(i,{parents:[],children:[]});const o={ID:r,relationship:a};t.get(i).parents.push(o),t.has(r)||t.set(r,{parents:[],children:[]});const l={ID:i,relationship:a};t.get(r).children.push(l)}),t}parseImages(){const t={},e={};if("Video"in Et.Objects){const n=Et.Objects.Video;for(const i in n){const r=n[i],a=parseInt(i);if(t[a]=r.RelativeFilename||r.Filename,"Content"in r){const o=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(o||l){const c=this.parseImage(n[i]);e[r.RelativeFilename||r.Filename]=c}}}}for(const n in t){const i=t[n];e[i]!==void 0?t[n]=e[i]:t[n]=t[n].split("\\").pop()}return t}parseImage(t){const e=t.Content,n=t.RelativeFilename||t.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof e=="string")return"data:"+r+";base64,"+e;{const a=new Uint8Array(e);return window.URL.createObjectURL(new Blob([a],{type:r}))}}parseTextures(t){const e=new Map;if("Texture"in Et.Objects){const n=Et.Objects.Texture;for(const i in n){const r=this.parseTexture(n[i],t);e.set(parseInt(i),r)}}return e}parseTexture(t,e){const n=this.loadTexture(t,e);n.ID=t.id,n.name=t.attrName;const i=t.WrapModeU,r=t.WrapModeV,a=i!==void 0?i.value:0,o=r!==void 0?r.value:0;if(n.wrapS=a===0?ar:Ce,n.wrapT=o===0?ar:Ce,"Scaling"in t){const l=t.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in t){const l=t.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(t,e){let n;const i=this.textureLoader.path,r=Zt.get(t.id).children;r!==void 0&&r.length>0&&e[r[0].ID]!==void 0&&(n=e[r[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let a;const o=t.FileName.slice(-3).toLowerCase();if(o==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",t.RelativeFilename),a=new me):(l.setPath(this.textureLoader.path),a=l.load(n))}else o==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",t.RelativeFilename),a=new me):a=this.textureLoader.load(n);return this.textureLoader.setPath(i),a}parseMaterials(t){const e=new Map;if("Material"in Et.Objects){const n=Et.Objects.Material;for(const i in n){const r=this.parseMaterial(n[i],t);r!==null&&e.set(parseInt(i),r)}}return e}parseMaterial(t,e){const n=t.id,i=t.attrName;let r=t.ShadingModel;if(typeof r=="object"&&(r=r.value),!Zt.has(n))return null;const a=this.parseParameters(t,e,n);let o;switch(r.toLowerCase()){case"phong":o=new Ei;break;case"lambert":o=new bg;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),o=new Ei;break}return o.setValues(a),o.name=i,o}parseParameters(t,e,n){const i={};t.BumpFactor&&(i.bumpScale=t.BumpFactor.value),t.Diffuse?i.color=new St().fromArray(t.Diffuse.value):t.DiffuseColor&&(t.DiffuseColor.type==="Color"||t.DiffuseColor.type==="ColorRGB")&&(i.color=new St().fromArray(t.DiffuseColor.value)),t.DisplacementFactor&&(i.displacementScale=t.DisplacementFactor.value),t.Emissive?i.emissive=new St().fromArray(t.Emissive.value):t.EmissiveColor&&(t.EmissiveColor.type==="Color"||t.EmissiveColor.type==="ColorRGB")&&(i.emissive=new St().fromArray(t.EmissiveColor.value)),t.EmissiveFactor&&(i.emissiveIntensity=parseFloat(t.EmissiveFactor.value)),t.Opacity&&(i.opacity=parseFloat(t.Opacity.value)),i.opacity<1&&(i.transparent=!0),t.ReflectionFactor&&(i.reflectivity=t.ReflectionFactor.value),t.Shininess&&(i.shininess=t.Shininess.value),t.Specular?i.specular=new St().fromArray(t.Specular.value):t.SpecularColor&&t.SpecularColor.type==="Color"&&(i.specular=new St().fromArray(t.SpecularColor.value));const r=this;return Zt.get(n).children.forEach(function(a){const o=a.relationship;switch(o){case"Bump":i.bumpMap=r.getTexture(e,a.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(e,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(e,a.ID),i.map!==void 0&&(i.map.encoding=Vt);break;case"DisplacementColor":i.displacementMap=r.getTexture(e,a.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(e,a.ID),i.emissiveMap!==void 0&&(i.emissiveMap.encoding=Vt);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(e,a.ID);break;case"ReflectionColor":i.envMap=r.getTexture(e,a.ID),i.envMap!==void 0&&(i.envMap.mapping=Qr,i.envMap.encoding=Vt);break;case"SpecularColor":i.specularMap=r.getTexture(e,a.ID),i.specularMap!==void 0&&(i.specularMap.encoding=Vt);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(e,a.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),i}getTexture(t,e){return"LayeredTexture"in Et.Objects&&e in Et.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),e=Zt.get(e).children[0].ID),t.get(e)}parseDeformers(){const t={},e={};if("Deformer"in Et.Objects){const n=Et.Objects.Deformer;for(const i in n){const r=n[i],a=Zt.get(parseInt(i));if(r.attrType==="Skin"){const o=this.parseSkeleton(a,n);o.ID=i,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=a.parents[0].ID,t[i]=o}else if(r.attrType==="BlendShape"){const o={id:i};o.rawTargets=this.parseMorphTargets(a,n),o.id=i,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),e[i]=o}}}return{skeletons:t,morphTargets:e}}parseSkeleton(t,e){const n=[];return t.children.forEach(function(i){const r=e[i.ID];if(r.attrType!=="Cluster")return;const a={ID:i.ID,indices:[],weights:[],transformLink:new mt().fromArray(r.TransformLink.a)};"Indexes"in r&&(a.indices=r.Indexes.a,a.weights=r.Weights.a),n.push(a)}),{rawBones:n,bones:[]}}parseMorphTargets(t,e){const n=[];for(let i=0;i<t.children.length;i++){const r=t.children[i],a=e[r.ID],o={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;o.geoID=Zt.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(o)}return n}parseScene(t,e,n){xe=new Si;const i=this.parseModels(t.skeletons,e,n),r=Et.Objects.Model,a=this;i.forEach(function(l){const c=r[l.ID];a.setLookAtProperties(l,c),Zt.get(l.ID).parents.forEach(function(h){const f=i.get(h.ID);f!==void 0&&f.add(l)}),l.parent===null&&xe.add(l)}),this.bindSkeleton(t.skeletons,e,i),this.createAmbientLight(),xe.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Jc(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const o=new E_().parse();xe.children.length===1&&xe.children[0].isGroup&&(xe.children[0].animations=o,xe=xe.children[0]),xe.animations=o}parseModels(t,e,n){const i=new Map,r=Et.Objects.Model;for(const a in r){const o=parseInt(a),l=r[a],c=Zt.get(o);let u=this.buildSkeleton(c,t,o,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,e,n);break;case"NurbsCurve":u=this.createCurve(c,e);break;case"LimbNode":case"Root":u=new pa;break;case"Null":default:u=new Si;break}u.name=l.attrName?Rt.sanitizeNodeName(l.attrName):"",u.ID=o}this.getTransformData(u,l),i.set(o,u)}return i}buildSkeleton(t,e,n,i){let r=null;return t.parents.forEach(function(a){for(const o in e){const l=e[o];l.rawBones.forEach(function(c,u){if(c.ID===a.ID){const h=r;r=new pa,r.matrixWorld.copy(c.transformLink),r.name=i?Rt.sanitizeNodeName(i):"",r.ID=n,l.bones[u]=r,h!==null&&r.add(h)}})}}),r}createCamera(t){let e,n;if(t.children.forEach(function(i){const r=Et.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)e=new Xt;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let a=1e3;n.FarPlane!==void 0&&(a=n.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(o=n.AspectWidth.value,l=n.AspectHeight.value);const c=o/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const h=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:e=new de(u,c,r,a),h!==null&&e.setFocalLength(h);break;case 1:e=new La(-o/2,o/2,l/2,-l/2,r,a);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),e=new Xt;break}}return e}createLight(t){let e,n;if(t.children.forEach(function(i){const r=Et.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)e=new Xt;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=new St().fromArray(n.Color.value));let a=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(a=0);let o=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?o=0:o=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:e=new wl(r,a,o,l);break;case 1:e=new mc(r,a);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=$e.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=$e.degToRad(n.OuterAngle.value),u=Math.max(u,1)),e=new Ng(r,a,o,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),e=new wl(r,a);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(e.castShadow=!0)}return e}createMesh(t,e,n){let i,r=null,a=null;const o=[];return t.children.forEach(function(l){e.has(l.ID)&&(r=e.get(l.ID)),n.has(l.ID)&&o.push(n.get(l.ID))}),o.length>1?a=o:o.length>0?a=o[0]:(a=new Ei({color:13421772}),o.push(a)),"color"in r.attributes&&o.forEach(function(l){l.vertexColors=!0}),r.FBX_Deformer?(i=new _g(r,a),i.normalizeSkinWeights()):i=new Me(r,a),i}createCurve(t,e){const n=t.children.reduce(function(r,a){return e.has(a.ID)&&(r=e.get(a.ID)),r},null),i=new lc({color:3342591,linewidth:1});return new yg(n,i)}getTransformData(t,e){const n={};"InheritType"in e&&(n.inheritType=parseInt(e.InheritType.value)),"RotationOrder"in e?n.eulerOrder=Qc(e.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in e&&(n.translation=e.Lcl_Translation.value),"PreRotation"in e&&(n.preRotation=e.PreRotation.value),"Lcl_Rotation"in e&&(n.rotation=e.Lcl_Rotation.value),"PostRotation"in e&&(n.postRotation=e.PostRotation.value),"Lcl_Scaling"in e&&(n.scale=e.Lcl_Scaling.value),"ScalingOffset"in e&&(n.scalingOffset=e.ScalingOffset.value),"ScalingPivot"in e&&(n.scalingPivot=e.ScalingPivot.value),"RotationOffset"in e&&(n.rotationOffset=e.RotationOffset.value),"RotationPivot"in e&&(n.rotationPivot=e.RotationPivot.value),t.userData.transformData=n}setLookAtProperties(t,e){"LookAtProperty"in e&&Zt.get(t.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=Et.Objects.Model[i.ID];if("Lcl_Translation"in r){const a=r.Lcl_Translation.value;t.target!==void 0?(t.target.position.fromArray(a),xe.add(t.target)):t.lookAt(new L().fromArray(a))}}})}bindSkeleton(t,e,n){const i=this.parsePoseNodes();for(const r in t){const a=t[r];Zt.get(parseInt(a.ID)).parents.forEach(function(l){if(e.has(l.ID)){const c=l.ID;Zt.get(c).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new Ia(a.bones),i[h.ID])})}})}}parsePoseNodes(){const t={};if("Pose"in Et.Objects){const e=Et.Objects.Pose;for(const n in e)if(e[n].attrType==="BindPose"&&e[n].NbPoseNodes>0){const i=e[n].PoseNode;Array.isArray(i)?i.forEach(function(r){t[r.Node]=new mt().fromArray(r.Matrix.a)}):t[i.Node]=new mt().fromArray(i.Matrix.a)}}return t}createAmbientLight(){if("GlobalSettings"in Et&&"AmbientColor"in Et.GlobalSettings){const t=Et.GlobalSettings.AmbientColor.value,e=t[0],n=t[1],i=t[2];if(e!==0||n!==0||i!==0){const r=new St(e,n,i);xe.add(new gc(r,1))}}}}class A_{parse(t){const e=new Map;if("Geometry"in Et.Objects){const n=Et.Objects.Geometry;for(const i in n){const r=Zt.get(parseInt(i)),a=this.parseGeometry(r,n[i],t);e.set(parseInt(i),a)}}return e}parseGeometry(t,e,n){switch(e.attrType){case"Mesh":return this.parseMeshGeometry(t,e,n);case"NurbsCurve":return this.parseNurbsGeometry(e)}}parseMeshGeometry(t,e,n){const i=n.skeletons,r=[],a=t.parents.map(function(h){return Et.Objects.Model[h.ID]});if(a.length===0)return;const o=t.children.reduce(function(h,f){return i[f.ID]!==void 0&&(h=i[f.ID]),h},null);t.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&r.push(n.morphTargets[h.ID])});const l=a[0],c={};"RotationOrder"in l&&(c.eulerOrder=Qc(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=Jc(c);return this.genGeometry(e,o,r,u)}genGeometry(t,e,n,i){const r=new ye;t.attrName&&(r.name=t.attrName);const a=this.parseGeoNode(t,e),o=this.genBuffers(a),l=new le(o.vertex,3);if(l.applyMatrix4(i),r.setAttribute("position",l),o.colors.length>0&&r.setAttribute("color",new le(o.colors,3)),e&&(r.setAttribute("skinIndex",new Aa(o.weightsIndices,4)),r.setAttribute("skinWeight",new le(o.vertexWeights,4)),r.FBX_Deformer=e),o.normal.length>0){const c=new Le().getNormalMatrix(i),u=new le(o.normal,3);u.applyNormalMatrix(c),r.setAttribute("normal",u)}if(o.uvs.forEach(function(c,u){let h="uv"+(u+1).toString();u===0&&(h="uv"),r.setAttribute(h,new le(o.uvs[u],2))}),a.material&&a.material.mappingType!=="AllSame"){let c=o.materialIndex[0],u=0;if(o.materialIndex.forEach(function(h,f){h!==c&&(r.addGroup(u,f-u,c),c=h,u=f)}),r.groups.length>0){const h=r.groups[r.groups.length-1],f=h.start+h.count;f!==o.materialIndex.length&&r.addGroup(f,o.materialIndex.length-f,c)}r.groups.length===0&&r.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(r,t,n,i),r}parseGeoNode(t,e){const n={};if(n.vertexPositions=t.Vertices!==void 0?t.Vertices.a:[],n.vertexIndices=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],t.LayerElementColor&&(n.color=this.parseVertexColors(t.LayerElementColor[0])),t.LayerElementMaterial&&(n.material=this.parseMaterialIndices(t.LayerElementMaterial[0])),t.LayerElementNormal&&(n.normal=this.parseNormals(t.LayerElementNormal[0])),t.LayerElementUV){n.uv=[];let i=0;for(;t.LayerElementUV[i];)t.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(t.LayerElementUV[i])),i++}return n.weightTable={},e!==null&&(n.skeleton=e,e.rawBones.forEach(function(i,r){i.indices.forEach(function(a,o){n.weightTable[a]===void 0&&(n.weightTable[a]=[]),n.weightTable[a].push({id:r,weight:i.weights[o]})})})),n}genBuffers(t){const e={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,r=!1,a=[],o=[],l=[],c=[],u=[],h=[];const f=this;return t.vertexIndices.forEach(function(m,g){let p,d=!1;m<0&&(m=m^-1,d=!0);let _=[],x=[];if(a.push(m*3,m*3+1,m*3+2),t.color){const M=Xr(g,n,m,t.color);l.push(M[0],M[1],M[2])}if(t.skeleton){if(t.weightTable[m]!==void 0&&t.weightTable[m].forEach(function(M){x.push(M.weight),_.push(M.id)}),x.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const M=[0,0,0,0],y=[0,0,0,0];x.forEach(function(w,A){let P=w,v=_[A];y.forEach(function(E,I,j){if(P>E){j[I]=P,P=E;const Y=M[I];M[I]=v,v=Y}})}),_=M,x=y}for(;x.length<4;)x.push(0),_.push(0);for(let M=0;M<4;++M)u.push(x[M]),h.push(_[M])}if(t.normal){const M=Xr(g,n,m,t.normal);o.push(M[0],M[1],M[2])}t.material&&t.material.mappingType!=="AllSame"&&(p=Xr(g,n,m,t.material)[0],p<0&&(console.warn("THREE.FBXLoader: Invalid material index:",p),p=0)),t.uv&&t.uv.forEach(function(M,y){const w=Xr(g,n,m,M);c[y]===void 0&&(c[y]=[]),c[y].push(w[0]),c[y].push(w[1])}),i++,d&&(f.genFace(e,t,a,p,o,l,c,u,h,i),n++,i=0,a=[],o=[],l=[],c=[],u=[],h=[])}),e}genFace(t,e,n,i,r,a,o,l,c,u){for(let h=2;h<u;h++)t.vertex.push(e.vertexPositions[n[0]]),t.vertex.push(e.vertexPositions[n[1]]),t.vertex.push(e.vertexPositions[n[2]]),t.vertex.push(e.vertexPositions[n[(h-1)*3]]),t.vertex.push(e.vertexPositions[n[(h-1)*3+1]]),t.vertex.push(e.vertexPositions[n[(h-1)*3+2]]),t.vertex.push(e.vertexPositions[n[h*3]]),t.vertex.push(e.vertexPositions[n[h*3+1]]),t.vertex.push(e.vertexPositions[n[h*3+2]]),e.skeleton&&(t.vertexWeights.push(l[0]),t.vertexWeights.push(l[1]),t.vertexWeights.push(l[2]),t.vertexWeights.push(l[3]),t.vertexWeights.push(l[(h-1)*4]),t.vertexWeights.push(l[(h-1)*4+1]),t.vertexWeights.push(l[(h-1)*4+2]),t.vertexWeights.push(l[(h-1)*4+3]),t.vertexWeights.push(l[h*4]),t.vertexWeights.push(l[h*4+1]),t.vertexWeights.push(l[h*4+2]),t.vertexWeights.push(l[h*4+3]),t.weightsIndices.push(c[0]),t.weightsIndices.push(c[1]),t.weightsIndices.push(c[2]),t.weightsIndices.push(c[3]),t.weightsIndices.push(c[(h-1)*4]),t.weightsIndices.push(c[(h-1)*4+1]),t.weightsIndices.push(c[(h-1)*4+2]),t.weightsIndices.push(c[(h-1)*4+3]),t.weightsIndices.push(c[h*4]),t.weightsIndices.push(c[h*4+1]),t.weightsIndices.push(c[h*4+2]),t.weightsIndices.push(c[h*4+3])),e.color&&(t.colors.push(a[0]),t.colors.push(a[1]),t.colors.push(a[2]),t.colors.push(a[(h-1)*3]),t.colors.push(a[(h-1)*3+1]),t.colors.push(a[(h-1)*3+2]),t.colors.push(a[h*3]),t.colors.push(a[h*3+1]),t.colors.push(a[h*3+2])),e.material&&e.material.mappingType!=="AllSame"&&(t.materialIndex.push(i),t.materialIndex.push(i),t.materialIndex.push(i)),e.normal&&(t.normal.push(r[0]),t.normal.push(r[1]),t.normal.push(r[2]),t.normal.push(r[(h-1)*3]),t.normal.push(r[(h-1)*3+1]),t.normal.push(r[(h-1)*3+2]),t.normal.push(r[h*3]),t.normal.push(r[h*3+1]),t.normal.push(r[h*3+2])),e.uv&&e.uv.forEach(function(f,m){t.uvs[m]===void 0&&(t.uvs[m]=[]),t.uvs[m].push(o[m][0]),t.uvs[m].push(o[m][1]),t.uvs[m].push(o[m][(h-1)*2]),t.uvs[m].push(o[m][(h-1)*2+1]),t.uvs[m].push(o[m][h*2]),t.uvs[m].push(o[m][h*2+1])})}addMorphTargets(t,e,n,i){if(n.length===0)return;t.morphTargetsRelative=!0,t.morphAttributes.position=[];const r=this;n.forEach(function(a){a.rawTargets.forEach(function(o){const l=Et.Objects.Geometry[o.geoID];l!==void 0&&r.genMorphGeometry(t,e,l,i,o.name)})})}genMorphGeometry(t,e,n,i,r){const a=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],o=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=t.attributes.position.count*3,u=new Float32Array(c);for(let g=0;g<l.length;g++){const p=l[g]*3;u[p]=o[g*3],u[p+1]=o[g*3+1],u[p+2]=o[g*3+2]}const h={vertexIndices:a,vertexPositions:u},f=this.genBuffers(h),m=new le(f.vertex,3);m.name=r||n.attrName,m.applyMatrix4(i),t.morphAttributes.position.push(m)}parseNormals(t){const e=t.MappingInformationType,n=t.ReferenceInformationType,i=t.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in t?r=t.NormalIndex.a:"NormalsIndex"in t&&(r=t.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:e,referenceType:n}}parseUVs(t){const e=t.MappingInformationType,n=t.ReferenceInformationType,i=t.UV.a;let r=[];return n==="IndexToDirect"&&(r=t.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:e,referenceType:n}}parseVertexColors(t){const e=t.MappingInformationType,n=t.ReferenceInformationType,i=t.Colors.a;let r=[];return n==="IndexToDirect"&&(r=t.ColorIndex.a),{dataSize:4,buffer:i,indices:r,mappingType:e,referenceType:n}}parseMaterialIndices(t){const e=t.MappingInformationType,n=t.ReferenceInformationType;if(e==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=t.Materials.a,r=[];for(let a=0;a<i.length;++a)r.push(a);return{dataSize:1,buffer:i,indices:r,mappingType:e,referenceType:n}}parseNurbsGeometry(t){if(Ll===void 0)return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."),new ye;const e=parseInt(t.Order);if(isNaN(e))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",t.Order,t.id),new ye;const n=e-1,i=t.KnotVector.a,r=[],a=t.Points.a;for(let h=0,f=a.length;h<f;h+=4)r.push(new Ot().fromArray(a,h));let o,l;if(t.Form==="Closed")r.push(r[0]);else if(t.Form==="Periodic"){o=n,l=i.length-1-o;for(let h=0;h<n;++h)r.push(r[h])}const u=new Ll(n,i,r,o,l).getPoints(r.length*12);return new ye().setFromPoints(u)}}class E_{parse(){const t=[],e=this.parseClips();if(e!==void 0)for(const n in e){const i=e[n],r=this.addClip(i);t.push(r)}return t}parseClips(){if(Et.Objects.AnimationCurve===void 0)return;const t=this.parseAnimationCurveNodes();this.parseAnimationCurves(t);const e=this.parseAnimationLayers(t);return this.parseAnimStacks(e)}parseAnimationCurveNodes(){const t=Et.Objects.AnimationCurveNode,e=new Map;for(const n in t){const i=t[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:i.id,attr:i.attrName,curves:{}};e.set(r.id,r)}}return e}parseAnimationCurves(t){const e=Et.Objects.AnimationCurve;for(const n in e){const i={id:e[n].id,times:e[n].KeyTime.a.map(D_),values:e[n].KeyValueFloat.a},r=Zt.get(i.id);if(r!==void 0){const a=r.parents[0].ID,o=r.parents[0].relationship;o.match(/X/)?t.get(a).curves.x=i:o.match(/Y/)?t.get(a).curves.y=i:o.match(/Z/)?t.get(a).curves.z=i:o.match(/d|DeformPercent/)&&t.has(a)&&(t.get(a).curves.morph=i)}}}parseAnimationLayers(t){const e=Et.Objects.AnimationLayer,n=new Map;for(const i in e){const r=[],a=Zt.get(parseInt(i));a!==void 0&&(a.children.forEach(function(l,c){if(t.has(l.ID)){const u=t.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(r[c]===void 0){const h=Zt.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(h!==void 0){const f=Et.Objects.Model[h.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const m={modelName:f.attrName?Rt.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};xe.traverse(function(g){g.ID===f.id&&(m.transform=g.matrix,g.userData.transformData&&(m.eulerOrder=g.userData.transformData.eulerOrder))}),m.transform||(m.transform=new mt),"PreRotation"in f&&(m.preRotation=f.PreRotation.value),"PostRotation"in f&&(m.postRotation=f.PostRotation.value),r[c]=m}}r[c]&&(r[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(r[c]===void 0){const h=Zt.get(l.ID).parents.filter(function(_){return _.relationship!==void 0})[0].ID,f=Zt.get(h).parents[0].ID,m=Zt.get(f).parents[0].ID,g=Zt.get(m).parents[0].ID,p=Et.Objects.Model[g],d={modelName:p.attrName?Rt.sanitizeNodeName(p.attrName):"",morphName:Et.Objects.Deformer[h].attrName};r[c]=d}r[c][u.attr]=u}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(t){const e=Et.Objects.AnimationStack,n={};for(const i in e){const r=Zt.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const a=t.get(r[0].ID);n[i]={name:e[i].attrName,layer:a}}return n}addClip(t){let e=[];const n=this;return t.layer.forEach(function(i){e=e.concat(n.generateTracks(i))}),new ma(t.name,-1,e)}generateTracks(t){const e=[];let n=new L,i=new ne,r=new L;if(t.transform&&t.transform.decompose(n,i,r),n=n.toArray(),i=new Pe().setFromQuaternion(i,t.eulerOrder).toArray(),r=r.toArray(),t.T!==void 0&&Object.keys(t.T.curves).length>0){const a=this.generateVectorTrack(t.modelName,t.T.curves,n,"position");a!==void 0&&e.push(a)}if(t.R!==void 0&&Object.keys(t.R.curves).length>0){const a=this.generateRotationTrack(t.modelName,t.R.curves,i,t.preRotation,t.postRotation,t.eulerOrder);a!==void 0&&e.push(a)}if(t.S!==void 0&&Object.keys(t.S.curves).length>0){const a=this.generateVectorTrack(t.modelName,t.S.curves,r,"scale");a!==void 0&&e.push(a)}if(t.DeformPercent!==void 0){const a=this.generateMorphTrack(t);a!==void 0&&e.push(a)}return e}generateVectorTrack(t,e,n,i){const r=this.getTimesForAllAxes(e),a=this.getKeyframeTrackValues(r,e,n);return new ur(t+"."+i,r,a)}generateRotationTrack(t,e,n,i,r,a){e.x!==void 0&&(this.interpolateRotations(e.x),e.x.values=e.x.values.map($e.degToRad)),e.y!==void 0&&(this.interpolateRotations(e.y),e.y.values=e.y.values.map($e.degToRad)),e.z!==void 0&&(this.interpolateRotations(e.z),e.z.values=e.z.values.map($e.degToRad));const o=this.getTimesForAllAxes(e),l=this.getKeyframeTrackValues(o,e,n);i!==void 0&&(i=i.map($e.degToRad),i.push(a),i=new Pe().fromArray(i),i=new ne().setFromEuler(i)),r!==void 0&&(r=r.map($e.degToRad),r.push(a),r=new Pe().fromArray(r),r=new ne().setFromEuler(r).invert());const c=new ne,u=new Pe,h=[];for(let f=0;f<l.length;f+=3)u.set(l[f],l[f+1],l[f+2],a),c.setFromEuler(u),i!==void 0&&c.premultiply(i),r!==void 0&&c.multiply(r),c.toArray(h,f/3*4);return new zi(t+".quaternion",o,h)}generateMorphTrack(t){const e=t.DeformPercent.curves.morph,n=e.values.map(function(r){return r/100}),i=xe.getObjectByName(t.modelName).morphTargetDictionary[t.morphName];return new hr(t.modelName+".morphTargetInfluences["+i+"]",e.times,n)}getTimesForAllAxes(t){let e=[];if(t.x!==void 0&&(e=e.concat(t.x.times)),t.y!==void 0&&(e=e.concat(t.y.times)),t.z!==void 0&&(e=e.concat(t.z.times)),e=e.sort(function(n,i){return n-i}),e.length>1){let n=1,i=e[0];for(let r=1;r<e.length;r++){const a=e[r];a!==i&&(e[n]=a,i=a,n++)}e=e.slice(0,n)}return e}getKeyframeTrackValues(t,e,n){const i=n,r=[];let a=-1,o=-1,l=-1;return t.forEach(function(c){if(e.x&&(a=e.x.times.indexOf(c)),e.y&&(o=e.y.times.indexOf(c)),e.z&&(l=e.z.times.indexOf(c)),a!==-1){const u=e.x.values[a];r.push(u),i[0]=u}else r.push(i[0]);if(o!==-1){const u=e.y.values[o];r.push(u),i[1]=u}else r.push(i[1]);if(l!==-1){const u=e.z.values[l];r.push(u),i[2]=u}else r.push(i[2])}),r}interpolateRotations(t){for(let e=1;e<t.values.length;e++){const n=t.values[e-1],i=t.values[e]-n,r=Math.abs(i);if(r>=180){const a=r/180,o=i/a;let l=n+o;const c=t.times[e-1],h=(t.times[e]-c)/a;let f=c+h;const m=[],g=[];for(;f<t.times[e];)m.push(f),f+=h,g.push(l),l+=o;t.times=Rl(t.times,e,m),t.values=Rl(t.values,e,g)}}}}class C_{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(t){this.nodeStack.push(t),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(t,e){this.currentProp=t,this.currentPropName=e}parse(t){this.currentIndent=0,this.allNodes=new $c,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const e=this,n=t.split(/[\r\n]+/);return n.forEach(function(i,r){const a=i.match(/^[\s\t]*;/),o=i.match(/^[\s\t]*$/);if(a||o)return;const l=i.match("^\\t{"+e.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+e.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=i.match("^\\t{"+(e.currentIndent-1)+"}}");l?e.parseNodeBegin(i,l):c?e.parseNodeProperty(i,c,n[++r]):u?e.popStack():i.match(/^[^\s\t}]/)&&e.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(t,e){const n=e[1].trim().replace(/^"/,"").replace(/"$/,""),i=e[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},a=this.parseNodeAttr(i),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in o?(n==="PoseNode"?o.PoseNode.push(r):o[n].id!==void 0&&(o[n]={},o[n][o[n].id]=o[n]),a.id!==""&&(o[n][a.id]=r)):typeof a.id=="number"?(o[n]={},o[n][a.id]=r):n!=="Properties70"&&(n==="PoseNode"?o[n]=[r]:o[n]=r),typeof a.id=="number"&&(r.id=a.id),a.name!==""&&(r.attrName=a.name),a.type!==""&&(r.attrType=a.type),this.pushStack(r)}parseNodeAttr(t){let e=t[0];t[0]!==""&&(e=parseInt(t[0]),isNaN(e)&&(e=t[0]));let n="",i="";return t.length>1&&(n=t[1].replace(/^(\w+)::/,""),i=t[2]),{id:e,name:n,type:i}}parseNodeProperty(t,e,n){let i=e[1].replace(/^"/,"").replace(/"$/,"").trim(),r=e[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(t,i,r);return}if(i==="C"){const l=r.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let h=r.split(",").slice(3);h=h.map(function(f){return f.trim().replace(/^"/,"")}),i="connections",r=[c,u],F_(r,h),a[i]===void 0&&(a[i]=[])}i==="Node"&&(a.id=r),i in a&&Array.isArray(a[i])?a[i].push(r):i!=="a"?a[i]=r:a.a=r,this.setCurrentProp(a,i),i==="a"&&r.slice(-1)!==","&&(a.a=aa(r))}parseNodePropertyContinued(t){const e=this.getCurrentNode();e.a+=t,t.slice(-1)!==","&&(e.a=aa(e.a))}parseNodeSpecialProperty(t,e,n){const i=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],a=i[1],o=i[2],l=i[3];let c=i[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=aa(c);break}this.getPrevNode()[r]={type:a,type2:o,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class L_{parse(t){const e=new Il(t);e.skip(23);const n=e.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new $c;for(;!this.endOfContent(e);){const r=this.parseNode(e,n);r!==null&&i.add(r.name,r)}return i}endOfContent(t){return t.size()%16===0?(t.getOffset()+160+16&-16)>=t.size():t.getOffset()+160+16>=t.size()}parseNode(t,e){const n={},i=e>=7500?t.getUint64():t.getUint32(),r=e>=7500?t.getUint64():t.getUint32();e>=7500?t.getUint64():t.getUint32();const a=t.getUint8(),o=t.getString(a);if(i===0)return null;const l=[];for(let f=0;f<r;f++)l.push(this.parseProperty(t));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=r===1&&t.getOffset()===i;i>t.getOffset();){const f=this.parseNode(t,e);f!==null&&this.parseSubNode(o,n,f)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),h!==""&&(n.attrType=h),o!==""&&(n.name=o),n}parseSubNode(t,e,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(e[n.name]=n,n.a=i):e[n.name]=i}else if(t==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(r,a){a!==0&&i.push(r)}),e.connections===void 0&&(e.connections=[]),e.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){e[r]=n[r]});else if(t==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1];const a=n.propertyList[2],o=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],e[i]={type:r,type2:a,flag:o,value:l}}else e[n.name]===void 0?typeof n.id=="number"?(e[n.name]={},e[n.name][n.id]=n):e[n.name]=n:n.name==="PoseNode"?(Array.isArray(e[n.name])||(e[n.name]=[e[n.name]]),e[n.name].push(n)):e[n.name][n.id]===void 0&&(e[n.name][n.id]=n)}parseProperty(t){const e=t.getString(1);let n;switch(e){case"C":return t.getBoolean();case"D":return t.getFloat64();case"F":return t.getFloat32();case"I":return t.getInt32();case"L":return t.getInt64();case"R":return n=t.getUint32(),t.getArrayBuffer(n);case"S":return n=t.getUint32(),t.getString(n);case"Y":return t.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=t.getUint32(),r=t.getUint32(),a=t.getUint32();if(r===0)switch(e){case"b":case"c":return t.getBooleanArray(i);case"d":return t.getFloat64Array(i);case"f":return t.getFloat32Array(i);case"i":return t.getInt32Array(i);case"l":return t.getInt64Array(i)}typeof __>"u"&&console.error("THREE.FBXLoader: External library fflate.min.js required.");const o=pr(new Uint8Array(t.getArrayBuffer(a))),l=new Il(o.buffer);switch(e){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+e)}}}class Il{constructor(t,e){this.dv=new DataView(t),this.offset=0,this.littleEndian=e!==void 0?e:!0}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(t){this.offset+=t}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(t){const e=[];for(let n=0;n<t;n++)e.push(this.getBoolean());return e}getUint8(){const t=this.dv.getUint8(this.offset);return this.offset+=1,t}getInt16(){const t=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,t}getInt32(){const t=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,t}getInt32Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getInt32());return e}getUint32(){const t=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,t}getInt64(){let t,e;return this.littleEndian?(t=this.getUint32(),e=this.getUint32()):(e=this.getUint32(),t=this.getUint32()),e&2147483648?(e=~e&4294967295,t=~t&4294967295,t===4294967295&&(e=e+1&4294967295),t=t+1&4294967295,-(e*4294967296+t)):e*4294967296+t}getInt64Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getInt64());return e}getUint64(){let t,e;return this.littleEndian?(t=this.getUint32(),e=this.getUint32()):(e=this.getUint32(),t=this.getUint32()),e*4294967296+t}getFloat32(){const t=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,t}getFloat32Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getFloat32());return e}getFloat64(){const t=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,t}getFloat64Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getFloat64());return e}getArrayBuffer(t){const e=this.dv.buffer.slice(this.offset,this.offset+t);return this.offset+=t,e}getString(t){let e=[];for(let i=0;i<t;i++)e[i]=this.getUint8();const n=e.indexOf(0);return n>=0&&(e=e.slice(0,n)),Ra.decodeText(new Uint8Array(e))}}class $c{add(t,e){this[t]=e}}function P_(s){const t="Kaydara FBX Binary  \0";return s.byteLength>=t.length&&t===th(s,0,t.length)}function I_(s){const t=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let e=0;function n(i){const r=s[i-1];return s=s.slice(e+i),e++,r}for(let i=0;i<t.length;++i)if(n(1)===t[i])return!1;return!0}function Dl(s){const t=/FBXVersion: (\d+)/,e=s.match(t);if(e)return parseInt(e[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function D_(s){return s/46186158e3}const R_=[];function Xr(s,t,e,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=t;break;case"ByVertice":i=e;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const r=i*n.dataSize,a=r+n.dataSize;return N_(R_,n.buffer,r,a)}const sa=new Pe,_i=new L;function Jc(s){const t=new mt,e=new mt,n=new mt,i=new mt,r=new mt,a=new mt,o=new mt,l=new mt,c=new mt,u=new mt,h=new mt,f=new mt,m=s.inheritType?s.inheritType:0;if(s.translation&&t.setPosition(_i.fromArray(s.translation)),s.preRotation){const I=s.preRotation.map($e.degToRad);I.push(s.eulerOrder||Pe.DefaultOrder),e.makeRotationFromEuler(sa.fromArray(I))}if(s.rotation){const I=s.rotation.map($e.degToRad);I.push(s.eulerOrder||Pe.DefaultOrder),n.makeRotationFromEuler(sa.fromArray(I))}if(s.postRotation){const I=s.postRotation.map($e.degToRad);I.push(s.eulerOrder||Pe.DefaultOrder),i.makeRotationFromEuler(sa.fromArray(I)),i.invert()}s.scale&&r.scale(_i.fromArray(s.scale)),s.scalingOffset&&o.setPosition(_i.fromArray(s.scalingOffset)),s.scalingPivot&&a.setPosition(_i.fromArray(s.scalingPivot)),s.rotationOffset&&l.setPosition(_i.fromArray(s.rotationOffset)),s.rotationPivot&&c.setPosition(_i.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(h.copy(s.parentMatrix),u.copy(s.parentMatrixWorld));const g=e.clone().multiply(n).multiply(i),p=new mt;p.extractRotation(u);const d=new mt;d.copyPosition(u);const _=d.clone().invert().multiply(u),x=p.clone().invert().multiply(_),M=r,y=new mt;if(m===0)y.copy(p).multiply(g).multiply(x).multiply(M);else if(m===1)y.copy(p).multiply(x).multiply(g).multiply(M);else{const j=new mt().scale(new L().setFromMatrixScale(h)).clone().invert(),Y=x.clone().multiply(j);y.copy(p).multiply(g).multiply(Y).multiply(M)}const w=c.clone().invert(),A=a.clone().invert();let P=t.clone().multiply(l).multiply(c).multiply(e).multiply(n).multiply(i).multiply(w).multiply(o).multiply(a).multiply(r).multiply(A);const v=new mt().copyPosition(P),E=u.clone().multiply(v);return f.copyPosition(E),P=f.clone().multiply(y),P.premultiply(u.invert()),P}function Qc(s){s=s||0;const t=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),t[0]):t[s]}function aa(s){return s.split(",").map(function(e){return parseFloat(e)})}function th(s,t,e){return t===void 0&&(t=0),e===void 0&&(e=s.byteLength),Ra.decodeText(new Uint8Array(s,t,e))}function F_(s,t){for(let e=0,n=s.length,i=t.length;e<i;e++,n++)s[n]=t[e]}function N_(s,t,e,n){for(let i=e,r=0;i<n;i++,r++)s[r]=t[i];return s}function Rl(s,t,e){return s.slice(0,t).concat(e).concat(s.slice(t))}const qr=(()=>{class s{constructor(a){this._parent=a}Enter(){}Exit(){}Update(){}}class t extends s{constructor(a){super(a)}get Name(){return"walk"}Enter(a){const o=this._parent._proxy._animations.walk.action;if(a){const l=this._parent._proxy._animations[a.Name].action;if(o.enabled=!0,a.Name=="walk_back"){const c=o.getClip().duration/l.getClip().duration;o.time=l.time*c}else o.time=0,o.setEffectiveTimeScale(1),o.setEffectiveWeight(1);o.crossFadeFrom(l,.1,!0),o.play()}else o.play()}Exit(){}Update(a,o){o.forward||(o.shift?this._parent.SetState("shoot"):o.back&&this._parent.SetState("walk_back"),this._parent.SetState("idle"))}}class e extends s{constructor(a){super(a)}get Name(){return"walk_back"}Enter(a){const o=this._parent._proxy._animations.walk_back.action;if(a){const l=this._parent._proxy._animations[a.Name].action;if(o.enabled=!0,a.Name=="walk"){const c=o.getClip().duration/l.getClip().duration;o.time=l.time*c}else o.time=0,o.setEffectiveTimeScale(1),o.setEffectiveWeight(1);o.crossFadeFrom(l,.1,!0),o.play()}else o.play()}Exit(){}Update(a,o){o.backward||(o.shift?this._parent.SetState("shoot"):o.forward&&this._parent.SetState("walk"),this._parent.SetState("idle"))}}class n extends s{constructor(a){super(a),this._action=null,this._FinishedCallback=()=>{this._Finished()}}get Name(){return"shoot"}Enter(a){if(this._action=this._parent._proxy._animations.shoot.action,this._action.getMixer().addEventListener("finished",this._FinishedCallback),a){const l=this._parent._proxy._animations[a.Name].action;this._action.reset(),this._action.setLoop(Wl,1),this._action.clampWhenFinished=!0,this._action.crossFadeFrom(l,.2,!0),this._action.play()}else this._action.play()}_Finished(){this._Cleanup(),this._parent.SetState("idle")}_Cleanup(){this._parent._proxy._animations.shoot.action,this._action&&this._action.getMixer().removeEventListener("finished",this._FinishedCallback)}Exit(){this._Cleanup()}Update(a){}}class i extends s{constructor(a){super(a)}get Name(){return"idle"}Enter(a){const o=this._parent._proxy._animations.idle.action;if(a){const l=this._parent._proxy._animations[a.Name].action;o.time=0,o.enabled=!0,o.setEffectiveTimeScale(1),o.setEffectiveWeight(1),o.crossFadeFrom(l,.5,!0),o.play()}else o.play()}Exit(){}Update(a,o){o.forward?this._parent.SetState("walk"):o.backward?this._parent.SetState("walk_back"):o.shift&&this._parent.SetState("shoot")}}return{State:s,ShootState:n,IdleState:i,WalkState:t,WalkBackState:e}})(),O_=(()=>{class s{constructor(){this._states={},this._currentState=null}_AddState(r,a){this._states[r]=a}SetState(r){const a=this._currentState;if(a){if(a.Name==r)return;a.Exit()}const o=new this._states[r](this);this._currentState=o,o.Enter(a)}Update(r,a){this._currentState&&this._currentState.Update(r,a)}}class t extends s{constructor(r){super(),this._proxy=r,this._Init()}_Init(){this._AddState("idle",qr.IdleState),this._AddState("walk",qr.WalkState),this._AddState("walk_back",qr.WalkBackState),this._AddState("shoot",qr.ShootState)}}class e{constructor(r){this._animations=r}get animations(){return this._animations}}class n extends qe.Component{constructor(r){super(),this._Init(r)}_Init(r){this._params=r,this._decceleration=new L(-5e-4,-1e-4,-5),this._acceleration=new L(1,.1,5),this._velocity=new L(0,0,0),this._animations={},this._stateMachine=new t(new e(this._animations)),this._target=new Me(new Rn(1,2,1),new Ei({color:3189624})),this._target.material.visible=!1,this._keys={forward:!1,backward:!1,left:!1,right:!1,space:!1,shift:!1},document.addEventListener("keydown",a=>this._onKeyDown(a),!1),document.addEventListener("keyup",a=>this._onKeyUp(a),!1),this._LoadCharacter()}InitComponent(){this._RegisterHandler("update.position",r=>{this._OnModelMovePosition(r)}),this._RegisterHandler("update.rotation",r=>{this._OnModelMoveRotation(r)})}_OnModelMovePosition(r){this._target.position.copy(r.value)}_OnModelMoveRotation(r){this._target.quaternion.copy(r.value)}_onKeyDown(r){switch(r.keyCode){case 87:this._keys.forward=!0;break;case 65:this._keys.left=!0;break;case 83:this._keys.backward=!0;break;case 68:this._keys.right=!0;break;case 32:this._keys.space=!0;break;case 16:this._keys.shift=!0;break}}_onKeyUp(r){switch(r.keyCode){case 87:this._keys.forward=!1;break;case 65:this._keys.left=!1;break;case 83:this._keys.backward=!1;break;case 68:this._keys.right=!1;break;case 32:this._keys.space=!1;break;case 16:this._keys.shift=!1;break}}_LoadCharacter(){new Pl().load("./Y Bot.fbx",a=>{a.scale.setScalar(.01),a.position.y-=1,this._target.attach(a),this._bones={};for(let h of a.children[1].skeleton.bones)this._bones[h.name]=h;a.traverse(h=>{h.castShadow=!0,h.receiveShadow=!0,h.material&&h.material.map&&(h.material.map.encoding=Vt)}),this._mixer=new Kg(a),this._manager=new dc,this._manager.onLoad=()=>{this._stateMachine.SetState("idle")};const o=(h,f)=>{const m=f.animations[0],g=this._mixer.clipAction(m);this._animations[h]={clip:m,action:g}},l=new Pl(this._manager);l.load("Walking.fbx",h=>{o("walk",h)}),l.load("HappyIdle.fbx",h=>{o("idle",h)}),l.load("Walking Backwards.fbx",h=>{o("walk_back",h)}),l.load("Pistol Aim.fbx",h=>{o("shoot",h)});let c=new L;c.copy(this._target.scale);const u=new Ammo.btBoxShape(new Ammo.btVector3(c.x*.5,c.y*.5,c.z*.5));u.setMargin(.05),this.Broadcast({topic:"body.load.rigid",body:this._target,shape:u,mass:0,pos:new L(0,1,0),quat:new ne(0,0,0,1),velocity:null})})}Update(r){if(!this._stateMachine._currentState||(this._stateMachine.Update(r,this._keys),this._mixer&&this._mixer.update(r),this._stateMachine._currentState._action&&this.Broadcast({topic:"person.action",action:this._stateMachine._currentState.Name,time:this._stateMachine._currentState._action.time,target:this._target}),this._stateMachine._currentState.Name=="shoot"))return;const o=this._velocity,l=new L(o.x*this._decceleration.x,o.y*this._decceleration.y,o.z*this._decceleration.z);l.multiplyScalar(r),l.z=Math.sign(l.z)*Math.min(Math.abs(l.z),Math.abs(o.z)),o.add(l);const c=new ne,u=new L,h=this._target.quaternion.clone(),f=this._target.position.clone(),m=this._acceleration.clone();if(this._keys.forward?o.z+=m.z*r:this._keys.backward?o.z-=m.z*r:o.z=0,this._keys.left||this._keys.right){u.set(0,1,0);let d=this._keys.left?4:-4;o.z<0&&(d*=-1),c.setFromAxisAngle(u,d*Math.PI*r*this._acceleration.y),h.multiply(c)}const g=new L(0,0,1);g.applyQuaternion(h),g.normalize();const p=new L(1,0,1);p.applyQuaternion(h),p.normalize(),p.multiplyScalar(o.x*r),g.multiplyScalar(o.z*r),f.add(g),f.add(p),this._parent.SetPosition(f),this._parent.SetQuaternion(h)}}return{BasicCharacterControllerProxy:e,BasicCharacterController:n}})(),z_=(()=>{class s extends qe.Component{constructor(e){super(),this._params=e,this._timeElapsed=0,this._action=null}InitComponent(){this._RegisterHandler("person.action",e=>{this._OnAnimAction(e)})}_OnAnimAction(e){this._action==null&&e.action=="shoot"&&(this._action=e.action,this._timeElapsed=0);const n=this._timeElapsed;if(this._timeElapsed=e.time,n<this._params.timing&&this._timeElapsed>=this._params.timing){const i=e.target,r=i.quaternion,a=new L(0,0,1);a.applyQuaternion(r),a.normalize(),a.multiplyScalar(1.2);const o=new L(i.position.x+a.x,i.position.y+.6,i.position.z+a.z),l=3,c=.4,u=new Me(new vs(c,18,16),new Ei({color:2105376}));u.castShadow=!0,u.receiveShadow=!0;const h=new Ammo.btSphereShape(c);h.setMargin(.05),this.Broadcast({topic:"body.load.rigid",body:u,shape:h,mass:l,pos:o,quat:r,velocity:a})}else this._timeElapsed>=3&&(this._action=null)}}return{ShootController:s}})();function B_(s,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count;let a=0;const o=Object.keys(s.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"];for(let p=0,d=o.length;p<d;p++){const _=o[p];l[_]=[];const x=s.morphAttributes[_];x&&(c[_]=new Array(x.length).fill().map(()=>[]))}const f=Math.log10(1/t),m=Math.pow(10,f);for(let p=0;p<r;p++){const d=n?n.getX(p):p;let _="";for(let x=0,M=o.length;x<M;x++){const y=o[x],w=s.getAttribute(y),A=w.itemSize;for(let P=0;P<A;P++)_+=`${~~(w[h[P]](d)*m)},`}if(_ in e)u.push(e[_]);else{for(let x=0,M=o.length;x<M;x++){const y=o[x],w=s.getAttribute(y),A=s.morphAttributes[y],P=w.itemSize,v=l[y],E=c[y];for(let I=0;I<P;I++){const j=h[I];if(v.push(w[j](d)),A)for(let Y=0,z=A.length;Y<z;Y++)E[Y].push(A[Y][j](d))}}e[_]=a,u.push(a),a++}}const g=s.clone();for(let p=0,d=o.length;p<d;p++){const _=o[p],x=s.getAttribute(_),M=new x.array.constructor(l[_]),y=new Be(M,x.itemSize,x.normalized);if(g.setAttribute(_,y),_ in c)for(let w=0;w<c[_].length;w++){const A=s.morphAttributes[_][w],P=new A.array.constructor(c[_][w]),v=new Be(P,A.itemSize,A.normalized);g.morphAttributes[_][w]=v}}return g.setIndex(u),g}const jr=(()=>{class s extends qe.Component{constructor(e){super(),this._params=e}InitComponent(){this._RegisterHandler("body.load.rigid",e=>{this._OnRigidBodyLoad(e)}),this._RegisterHandler("body.load.soft",e=>{this._OnSoftBodyLoad(e)}),this._RegisterHandler("update.position",e=>{this._OnModelMovePosition(e)}),this._RegisterHandler("update.rotation",e=>{this._OnModelMoveRotation(e)})}_OnModelMovePosition(e){const n=this._physicsBody,i=new Ammo.btVector3(e.value.x,e.value.y,e.value.z),r=n.getMotionState();if(r){let a=this._physicsBody.getWorldTransform();a.setOrigin(i),r.setWorldTransform(a)}}_OnModelMoveRotation(e){const n=this._physicsBody,i=new Ammo.btQuaternion(e.value.x,e.value.y,e.value.z,e.value.w),r=n.getMotionState();if(r){let a=this._physicsBody.getWorldTransform();a.setRotation(i),r.setWorldTransform(a)}}_OnRigidBodyLoad(e){const n=this._CreateRigidBody(e.body,e.shape,e.mass,e.pos,e.quat);e.velocity?n.setLinearVelocity(new Ammo.btVector3(10*e.velocity.x,10*e.velocity.y,10*e.velocity.z)):this._physicsBody=n}_CreateRigidBody(e,n,i,r,a){e.position.copy(r),e.quaternion.copy(a);let o=new Ammo.btTransform;o.setIdentity(),o.setOrigin(new Ammo.btVector3(r.x,r.y,r.z)),o.setRotation(new Ammo.btQuaternion(a.x,a.y,a.z,a.w));let l=new Ammo.btDefaultMotionState(o),c=new Ammo.btVector3(0,0,0);n.calculateLocalInertia(i,c);let u=new Ammo.btRigidBodyConstructionInfo(i,l,n,c),h=new Ammo.btRigidBody(u);return e.userData.physicsBody=h,this._params.scene.add(e),i>0?this._params.rigid_bodies.push(e):h.setCollisionFlags(2),h.setActivationState(4),this._params.physics_world.addRigidBody(h),h}_OnSoftBodyLoad(e){const n=this._CreateSoftBody(e.bufferGeometry,this._params.mass,this._params.pressure);this._physicsBody=n}_CreateSoftBody(e,n,i){this._processGeometry(e);const r=new Me(e,new Ei({color:16777215}));r.castShadow=!0,r.receiveShadow=!0,r.frustumCulled=!1,this._params.scene.add(r),console.log("scene added"),this._params.texture&&(console.log(this._params.texture),new pc().load(this._params.texture,function(c){r.material.map=c,r.material.needsUpdate=!0}));const a=this._params.softBodyHelpers.CreateFromTriMesh(this._params.physics_world.getWorldInfo(),e.ammoVertices,e.ammoIndices,e.ammoIndices.length/3,!0),o=a.get_m_cfg();return o.set_viterations(40),o.set_piterations(40),o.set_collisions(17),o.set_kDF(.1),o.set_kDP(.01),o.set_kPR(i),a.get_m_materials().at(0).set_m_kLST(.9),a.get_m_materials().at(0).set_m_kAST(.9),a.setTotalMass(n,!1),Ammo.castObject(a,Ammo.btCollisionObject).getCollisionShape().setMargin(.05),this._params.physics_world.addSoftBody(a,1,-1),r.userData.physicsBody=a,a.setActivationState(4),this._params.soft_bodies.push(r),r}_processGeometry(e){const n=new ye;n.setAttribute("position",e.getAttribute("position")),n.setIndex(e.getIndex());const i=B_(n);this._mapIndices(e,i)}_isEqual(e,n,i,r,a,o){return Math.abs(r-e)<1e-6&&Math.abs(a-n)<1e-6&&Math.abs(o-i)<1e-6}_mapIndices(e,n){const i=e.attributes.position.array,r=n.attributes.position.array,a=n.index.array,o=r.length/3,l=i.length/3;e.ammoVertices=r,e.ammoIndices=a,e.ammoIndexAssociation=[];for(let c=0;c<o;c++){const u=[];e.ammoIndexAssociation.push(u);const h=c*3;for(let f=0;f<l;f++){const m=f*3;this._isEqual(r[h],r[h+1],r[h+2],i[m],i[m+1],i[m+2])&&u.push(m)}}}}return{PhysicsController:s}})(),Fl=(()=>{class s extends qe.Component{constructor(e){super(),this._Init(e)}_Init(e){this._params=e}InitComponent(){const e=this._params.bufferGeometry;e.translate(this._params.position.x,this._params.position.y,this._params.position.z),console.log(this._parent),this.Broadcast({topic:"body.load.soft",bufferGeometry:e})}}return{SoftBodyController:s}})(),U_=(()=>{class s extends qe.Component{constructor(e){super(),this._Init(e)}_Init(e){this._params=e}InitComponent(){const e=new Me(new Rn(100,1,100),new wg({color:8421504}));e.castShadow=!1,e.receiveShadow=!0;const n=new Ammo.btBoxShape(new Ammo.btVector3(50,.5,50));n.setMargin(.05),this.Broadcast({topic:"body.load.rigid",body:e,shape:n,mass:0,pos:new L(0,-.5,0),quat:new ne(0,0,0,1),velocity:null})}}return{PlaneController:s}})(),Nl={type:"change"},oa={type:"start"},Ol={type:"end"};class k_ extends Pn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ei.ROTATE,MIDDLE:ei.DOLLY,RIGHT:ei.PAN},this.touches={ONE:ni.ROTATE,TWO:ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",Se),this._domElementKeyEvents=S},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Nl),n.update(),r=i.NONE},this.update=function(){const S=new L,$=new ne().setFromUnitVectors(t.up,new L(0,1,0)),nt=$.clone().invert(),lt=new L,at=new ne,xt=2*Math.PI;return function(){const Ht=n.object.position;S.copy(Ht).sub(n.target),S.applyQuaternion($),o.setFromVector3(S),n.autoRotate&&r===i.NONE&&E(P()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let D=n.minAzimuthAngle,st=n.maxAzimuthAngle;return isFinite(D)&&isFinite(st)&&(D<-Math.PI?D+=xt:D>Math.PI&&(D-=xt),st<-Math.PI?st+=xt:st>Math.PI&&(st-=xt),D<=st?o.theta=Math.max(D,Math.min(st,o.theta)):o.theta=o.theta>(D+st)/2?Math.max(D,o.theta):Math.min(st,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),S.setFromSpherical(o),S.applyQuaternion(nt),Ht.copy(n.target).add(S),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||lt.distanceToSquared(n.object.position)>a||8*(1-at.dot(n.object.quaternion))>a?(n.dispatchEvent(Nl),lt.copy(n.object.position),at.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",W),n.domElement.removeEventListener("pointerdown",Wt),n.domElement.removeEventListener("pointercancel",be),n.domElement.removeEventListener("wheel",Ie),n.domElement.removeEventListener("pointermove",ae),n.domElement.removeEventListener("pointerup",Qt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Se)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new bl,l=new bl;let c=1;const u=new L;let h=!1;const f=new Mt,m=new Mt,g=new Mt,p=new Mt,d=new Mt,_=new Mt,x=new Mt,M=new Mt,y=new Mt,w=[],A={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function E(S){l.theta-=S}function I(S){l.phi-=S}const j=function(){const S=new L;return function(nt,lt){S.setFromMatrixColumn(lt,0),S.multiplyScalar(-nt),u.add(S)}}(),Y=function(){const S=new L;return function(nt,lt){n.screenSpacePanning===!0?S.setFromMatrixColumn(lt,1):(S.setFromMatrixColumn(lt,0),S.crossVectors(n.object.up,S)),S.multiplyScalar(nt),u.add(S)}}(),z=function(){const S=new L;return function(nt,lt){const at=n.domElement;if(n.object.isPerspectiveCamera){const xt=n.object.position;S.copy(xt).sub(n.target);let Pt=S.length();Pt*=Math.tan(n.object.fov/2*Math.PI/180),j(2*nt*Pt/at.clientHeight,n.object.matrix),Y(2*lt*Pt/at.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(j(nt*(n.object.right-n.object.left)/n.object.zoom/at.clientWidth,n.object.matrix),Y(lt*(n.object.top-n.object.bottom)/n.object.zoom/at.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(S){n.object.isPerspectiveCamera?c/=S:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*S)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(S){n.object.isPerspectiveCamera?c*=S:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/S)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(S){f.set(S.clientX,S.clientY)}function Z(S){x.set(S.clientX,S.clientY)}function k(S){p.set(S.clientX,S.clientY)}function F(S){m.set(S.clientX,S.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;E(2*Math.PI*g.x/$.clientHeight),I(2*Math.PI*g.y/$.clientHeight),f.copy(m),n.update()}function O(S){M.set(S.clientX,S.clientY),y.subVectors(M,x),y.y>0?R(v()):y.y<0&&U(v()),x.copy(M),n.update()}function J(S){d.set(S.clientX,S.clientY),_.subVectors(d,p).multiplyScalar(n.panSpeed),z(_.x,_.y),p.copy(d),n.update()}function K(S){S.deltaY<0?U(v()):S.deltaY>0&&R(v()),n.update()}function tt(S){let $=!1;switch(S.code){case n.keys.UP:z(0,n.keyPanSpeed),$=!0;break;case n.keys.BOTTOM:z(0,-n.keyPanSpeed),$=!0;break;case n.keys.LEFT:z(n.keyPanSpeed,0),$=!0;break;case n.keys.RIGHT:z(-n.keyPanSpeed,0),$=!0;break}$&&(S.preventDefault(),n.update())}function rt(){if(w.length===1)f.set(w[0].pageX,w[0].pageY);else{const S=.5*(w[0].pageX+w[1].pageX),$=.5*(w[0].pageY+w[1].pageY);f.set(S,$)}}function ft(){if(w.length===1)p.set(w[0].pageX,w[0].pageY);else{const S=.5*(w[0].pageX+w[1].pageX),$=.5*(w[0].pageY+w[1].pageY);p.set(S,$)}}function X(){const S=w[0].pageX-w[1].pageX,$=w[0].pageY-w[1].pageY,nt=Math.sqrt(S*S+$*$);x.set(0,nt)}function Ct(){n.enableZoom&&X(),n.enablePan&&ft()}function dt(){n.enableZoom&&X(),n.enableRotate&&rt()}function _t(S){if(w.length==1)m.set(S.pageX,S.pageY);else{const nt=vt(S),lt=.5*(S.pageX+nt.x),at=.5*(S.pageY+nt.y);m.set(lt,at)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;E(2*Math.PI*g.x/$.clientHeight),I(2*Math.PI*g.y/$.clientHeight),f.copy(m)}function ht(S){if(w.length===1)d.set(S.pageX,S.pageY);else{const $=vt(S),nt=.5*(S.pageX+$.x),lt=.5*(S.pageY+$.y);d.set(nt,lt)}_.subVectors(d,p).multiplyScalar(n.panSpeed),z(_.x,_.y),p.copy(d)}function Ft(S){const $=vt(S),nt=S.pageX-$.x,lt=S.pageY-$.y,at=Math.sqrt(nt*nt+lt*lt);M.set(0,at),y.set(0,Math.pow(M.y/x.y,n.zoomSpeed)),R(y.y),x.copy(M)}function wt(S){n.enableZoom&&Ft(S),n.enablePan&&ht(S)}function gt(S){n.enableZoom&&Ft(S),n.enableRotate&&_t(S)}function Wt(S){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(S.pointerId),n.domElement.addEventListener("pointermove",ae),n.domElement.addEventListener("pointerup",Qt)),Q(S),S.pointerType==="touch"?C(S):te(S))}function ae(S){n.enabled!==!1&&(S.pointerType==="touch"?b(S):Ut(S))}function Qt(S){et(S),w.length===0&&(n.domElement.releasePointerCapture(S.pointerId),n.domElement.removeEventListener("pointermove",ae),n.domElement.removeEventListener("pointerup",Qt)),n.dispatchEvent(Ol),r=i.NONE}function be(S){et(S)}function te(S){let $;switch(S.button){case 0:$=n.mouseButtons.LEFT;break;case 1:$=n.mouseButtons.MIDDLE;break;case 2:$=n.mouseButtons.RIGHT;break;default:$=-1}switch($){case ei.DOLLY:if(n.enableZoom===!1)return;Z(S),r=i.DOLLY;break;case ei.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(n.enablePan===!1)return;k(S),r=i.PAN}else{if(n.enableRotate===!1)return;V(S),r=i.ROTATE}break;case ei.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(n.enableRotate===!1)return;V(S),r=i.ROTATE}else{if(n.enablePan===!1)return;k(S),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(oa)}function Ut(S){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;F(S);break;case i.DOLLY:if(n.enableZoom===!1)return;O(S);break;case i.PAN:if(n.enablePan===!1)return;J(S);break}}function Ie(S){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(S.preventDefault(),n.dispatchEvent(oa),K(S),n.dispatchEvent(Ol))}function Se(S){n.enabled===!1||n.enablePan===!1||tt(S)}function C(S){switch(ot(S),w.length){case 1:switch(n.touches.ONE){case ni.ROTATE:if(n.enableRotate===!1)return;rt(),r=i.TOUCH_ROTATE;break;case ni.PAN:if(n.enablePan===!1)return;ft(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ni.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ct(),r=i.TOUCH_DOLLY_PAN;break;case ni.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;dt(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(oa)}function b(S){switch(ot(S),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;_t(S),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ht(S),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;wt(S),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;gt(S),n.update();break;default:r=i.NONE}}function W(S){n.enabled!==!1&&S.preventDefault()}function Q(S){w.push(S)}function et(S){delete A[S.pointerId];for(let $=0;$<w.length;$++)if(w[$].pointerId==S.pointerId){w.splice($,1);return}}function ot(S){let $=A[S.pointerId];$===void 0&&($=new Mt,A[S.pointerId]=$),$.set(S.pageX,S.pageY)}function vt(S){const $=S.pointerId===w[0].pointerId?w[1]:w[0];return A[$.pointerId]}n.domElement.addEventListener("contextmenu",W),n.domElement.addEventListener("pointerdown",Wt),n.domElement.addEventListener("pointercancel",be),n.domElement.addEventListener("wheel",Ie,{passive:!1}),this.update()}}const V_=(()=>{class s extends qe.Component{constructor(e){super(),this._params=e,this._camera=e.camera,this._controls=new k_(this._camera,this._params.domElement),this._controls.target.set(0,.5,0),this._controls.update(),this._defaultPosition=new Yi.Vector3(0,10,7),this._currentPosition=new Yi.Vector3,this._currentLookat=new Yi.Vector3,this.third_person=!0,this._controls.enabled=!1,document.addEventListener("keydown",n=>this._onKeyDown(n),!1)}_onKeyDown(e){switch(e.keyCode){case 13:this._controls.enabled=this.third_person,this._controls.enabled&&(this._camera.position.copy(this._defaultPosition),this._camera.lookAt(this._controls.target)),this.third_person=!this.third_person;break}console.log(this._controls.enabled)}_CalculateIdealOffset(){const e=new Yi.Vector3(-0,2,-4);return e.applyQuaternion(this._params.target._rotation),e.add(this._params.target._position),e}_CalculateIdealLookat(){const e=new Yi.Vector3(0,-2,7);return e.applyQuaternion(this._params.target._rotation),e.add(this._params.target._position),e}Update(e){if(this.third_person){const n=this._CalculateIdealOffset(),i=this._CalculateIdealLookat(),r=1-Math.pow(.01,e);this._currentPosition.lerp(n,r),this._currentLookat.lerp(i,r),this._camera.position.copy(this._currentPosition),this._camera.lookAt(this._currentLookat)}}}return{ThirdPersonCamera:s}})();class G_{constructor(){this._entityManager=new $g.EntityManager,this._previousRAF=null,this._Initialize()}_Initialize(){this._Init_Graphics(),this._Init_Physics(),this._LoadAnimatedModel(),this._LoadPlane(),this._LoadSoftBodies(),this._RAF()}_Init_Physics(){const e=new Ammo.btSoftBodyRigidBodyCollisionConfiguration,n=new Ammo.btCollisionDispatcher(e),i=new Ammo.btDbvtBroadphase,r=new Ammo.btSequentialImpulseConstraintSolver,a=new Ammo.btDefaultSoftBodySolver;this._physics_world=new Ammo.btSoftRigidDynamicsWorld(n,i,r,e,a),this._physics_world.getWorldInfo().set_m_gravity(new Ammo.btVector3(0,-10,0)),this._physics_world.setGravity(new Ammo.btVector3(0,-10,0)),this.softBodyHelpers=new Ammo.btSoftBodyHelpers,this._soft_bodies=[],this._rigid_bodies=[]}_Init_Graphics(){let t=document.getElementById("contentB");document.body.appendChild(t),this._threejs=new oc({antialias:!0}),this._threejs.outputEncoding=Vt,this._threejs.shadowMap.enabled=!0,this._threejs.shadowMap.type=Bl,this._threejs.setPixelRatio(window.devicePixelRatio),this._threejs.setSize(window.innerWidth,window.innerHeight),t.appendChild(this._threejs.domElement),window.addEventListener("resize",()=>{this._OnWindowResize()},!1),this._scene=new mg,this._scene.background=new St(12571109);let e=new mc(16777215,1);e.position.set(-100,100,100),e.target.position.set(0,0,0),e.castShadow=!0,e.shadow.bias=-.001,e.shadow.mapSize.width=4096,e.shadow.mapSize.height=4096,e.shadow.camera.near=.1,e.shadow.camera.far=500,e.shadow.camera.near=.5,e.shadow.camera.far=500,e.shadow.camera.left=50,e.shadow.camera.right=-50,e.shadow.camera.top=50,e.shadow.camera.bottom=-50,this._scene.add(e),e=new gc(16777215,.25),this._scene.add(e);const n=50,i=window.innerWidth/window.innerHeight,r=.2,a=2e3;this._camera=new de(n,i,r,a),this._camera.position.set(0,1,7),this._stats=new ah,this._stats.domElement.style.position="absolute",this._stats.domElement.style.top="0px",t.appendChild(this._stats.domElement)}_LoadPlane(){const t={scene:this._scene,physics_world:this._physics_world,rigid_bodies:this._rigid_bodies,timing:.5},e=new qe.Entity;e.AddComponent(new jr.PhysicsController(t)),e.AddComponent(new U_.PlaneController(t)),this._entityManager.Add(e,"plane")}_LoadSoftBodies(){const t={scene:this._scene,physics_world:this._physics_world,soft_bodies:this._soft_bodies,softBodyHelpers:this.softBodyHelpers,bufferGeometry:new vs(1,40,25),position:new L(3,3,0),mass:15,pressure:250,texture:"colors.png"},e=new qe.Entity;e.AddComponent(new jr.PhysicsController(t)),e.AddComponent(new Fl.SoftBodyController(t)),this._entityManager.Add(e,"sphere_softBody");const n={scene:this._scene,physics_world:this._physics_world,soft_bodies:this._soft_bodies,softBodyHelpers:this.softBodyHelpers,bufferGeometry:new Rn(1,1,5,4,4,20),position:new L(-3,3,0),mass:15,pressure:150,texture:"colors.png"},i=new qe.Entity;i.AddComponent(new jr.PhysicsController(n)),i.AddComponent(new Fl.SoftBodyController(n)),this._entityManager.Add(i,"box_softBody")}_LoadAnimatedModel(){const t={scene:this._scene,physics_world:this._physics_world,rigid_bodies:this._rigid_bodies,timing:.5},e=new qe.Entity;e.AddComponent(new O_.BasicCharacterController(t)),e.AddComponent(new z_.ShootController(t)),e.AddComponent(new jr.PhysicsController(t)),this._entityManager.Add(e,"player");const n=new qe.Entity;n.AddComponent(new V_.ThirdPersonCamera({camera:this._camera,target:e,domElement:this._threejs.domElement})),this._entityManager.Add(n,"player-camera")}_OnWindowResize(){this._camera.aspect=window.innerWidth/window.innerHeight,this._camera.updateProjectionMatrix(),this._threejs.setSize(window.innerWidth,window.innerHeight)}_RAF(){requestAnimationFrame(t=>{this._previousRAF===null&&(this._previousRAF=t),this._Step(t-this._previousRAF),this._threejs.render(this._scene,this._camera),this._stats.update(),this._previousRAF=t,setTimeout(()=>{this._RAF()},1)})}_Step(t){const e=t*.001;this._entityManager.Update(e),this._StepPhysics(e)}_StepPhysics(t){this._physics_world.stepSimulation(t,10);for(let e=0,n=this._soft_bodies.length;e<n;e++){const i=this._soft_bodies[e],r=i.geometry,a=i.userData.physicsBody,o=r.attributes.position.array,l=r.attributes.normal.array,c=r.ammoIndexAssociation,u=c.length,h=a.get_m_nodes();for(let f=0;f<u;f++){const m=h.at(f),g=m.get_m_x(),p=g.x(),d=g.y(),_=g.z(),x=m.get_m_n(),M=x.x(),y=x.y(),w=x.z(),A=c[f];for(let P=0,v=A.length;P<v;P++){let E=A[P];o[E]=p,l[E]=M,E++,o[E]=d,l[E]=y,E++,o[E]=_,l[E]=w}}r.attributes.position.needsUpdate=!0,r.attributes.normal.needsUpdate=!0}for(let e=0,n=this._rigid_bodies.length;e<n;e++){const i=this._rigid_bodies[e],a=i.userData.physicsBody.getMotionState();if(a){let o=new Ammo.btTransform;a.getWorldTransform(o);const l=o.getOrigin(),c=o.getRotation();i.position.set(l.x(),l.y(),l.z()),i.quaternion.set(c.x(),c.y(),c.z(),c.w())}}}}window.addEventListener("DOMContentLoaded",()=>{Ammo().then(function(s){Ammo=s,new G_})});
