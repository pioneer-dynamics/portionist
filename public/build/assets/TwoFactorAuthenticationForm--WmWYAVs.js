import{d as p,s as H,o as t,e as n,a as i,r as Q,b as r,w as o,g as l,t as $,q as L,n as S,m as Y,Q as D,T as I,k as O,x as U,c as x,f as d,u as P,F as z,h as G,y as q}from"./app-CgsIz9cD.js";import{b as W,a as j}from"./DialogModal-C16pMCbE.js";import{_ as M}from"./InputError-C5fDd5NA.js";import{_ as B}from"./PrimaryButton-CySBv8ot.js";import{_ as V}from"./SecondaryButton-DB3Dn90Z.js";import{_ as N}from"./TextInput-3GI5nHjy.js";import{_ as J}from"./ConfirmsPasskey-kP1sBNfQ.js";import{_ as X}from"./DangerButton-CLNP5JTs.js";import{_ as Z}from"./InputLabel-CMFJS916.js";import"./SectionTitle-C_UCVSu4.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DHE1l8mP.js";const ee={class:"mt-4"},b={__name:"ConfirmsPasswordOrPasskey",props:{title:{type:String,default:"Confirm Authority"},content:{type:String,default:"For your security, please confirm your authority to continue."},button:{type:String,default:"Confirm"},mandatory:{type:Boolean,default:!1},seconds:{type:Number,default:0}},emits:["confirmed"],setup(h,{emit:A}){const C=A,u=h,s=p(!1),c=p(null),a=H({password:"",error:"",processing:!1}),y=p(null),_=()=>{s.value=!0,setTimeout(()=>y.value.focus(),250)},v=()=>{axios.get(route("password.confirmation",u.seconds>0?{seconds:u.seconds}:{})).then(g=>{g.data.confirmed&&!u.mandatory?C("confirmed"):c.value.start()})},m=()=>{a.processing=!0,axios.post(route("password.confirm"),{password:a.password}).then(()=>{a.processing=!1,T(),Y().then(()=>C("confirmed"))}).catch(g=>{a.processing=!1,a.error=g.response.data.errors.password[0],y.value.focus()})},T=()=>{s.value=!1,a.password="",a.error=""};return(g,w)=>(t(),n("span",null,[i("span",{onClick:v},[Q(g.$slots,"default")]),r(J,{email:g.$page.props.auth.user.email,ref_key:"passkeyConfirmation",ref:c,onConfirmed:w[0]||(w[0]=k=>C("confirmed")),onCancelled:_},null,8,["email"]),r(W,{show:s.value,onClose:T,ref:"password"},{title:o(()=>[l($(h.title),1)]),content:o(()=>[l($(h.content)+" ",1),i("div",ee,[r(N,{ref_key:"passwordInput",ref:y,modelValue:a.password,"onUpdate:modelValue":w[1]||(w[1]=k=>a.password=k),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",autocomplete:"current-password",onKeyup:L(m,["enter"])},null,8,["modelValue"]),r(M,{message:a.error,class:"mt-2"},null,8,["message"])])]),footer:o(()=>[r(V,{onClick:T},{default:o(()=>w[2]||(w[2]=[l(" Cancel ")])),_:1}),r(B,{class:S(["ms-3",{"opacity-25":a.processing}]),disabled:a.processing,onClick:m},{default:o(()=>[l($(h.button),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}},te={key:0,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},oe={key:1,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},se={key:2,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},ae={key:3},re={key:0},ne={class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},le={key:0,class:"font-semibold"},ie={key:1},ue=["innerHTML"],de={key:0,class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},ce={class:"font-semibold"},me=["innerHTML"],fe={key:1,class:"mt-4"},pe={key:1},ye={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 dark:bg-gray-900 dark:text-gray-100 rounded-lg"},ve={class:"mt-5"},ge={key:0},we={key:1},Pe={__name:"TwoFactorAuthenticationForm",props:{requiresConfirmation:Boolean},setup(h){const A=h,C=D(),u=p(!1),s=p(!1),c=p(!1),a=p(null),y=p(null),_=p([]),v=I({code:""}),m=O(()=>{var f;return!u.value&&((f=C.props.auth.user)==null?void 0:f.two_factor_enabled)});U(m,()=>{m.value||(v.reset(),v.clearErrors())});const T=()=>{u.value=!0,q.post(route("two-factor.enable"),{},{preserveScroll:!0,onSuccess:()=>Promise.all([g(),w(),k()]),onFinish:()=>{u.value=!1,s.value=A.requiresConfirmation}})},g=()=>axios.get(route("two-factor.qr-code")).then(f=>{a.value=f.data.svg}),w=()=>axios.get(route("two-factor.secret-key")).then(f=>{y.value=f.data.secretKey}),k=()=>axios.get(route("two-factor.recovery-codes")).then(f=>{_.value=f.data}),K=()=>{v.post(route("two-factor.confirm"),{errorBag:"confirmTwoFactorAuthentication",preserveScroll:!0,preserveState:!0,onSuccess:()=>{s.value=!1,a.value=null,y.value=null}})},E=()=>{axios.post(route("two-factor.recovery-codes")).then(()=>k())},R=()=>{c.value=!0,q.delete(route("two-factor.disable"),{preserveScroll:!0,onSuccess:()=>{c.value=!1,s.value=!1}})};return(f,e)=>(t(),x(j,null,{title:o(()=>e[1]||(e[1]=[l(" Two Factor Authentication ")])),description:o(()=>e[2]||(e[2]=[l(" Add additional security to your account using two factor authentication. ")])),content:o(()=>[m.value&&!s.value?(t(),n("h3",te," You have enabled two factor authentication. ")):m.value&&s.value?(t(),n("h3",oe," Finish enabling two factor authentication. ")):(t(),n("h3",se," You have not enabled two factor authentication. ")),e[11]||(e[11]=i("div",{class:"mt-3 max-w-xl text-sm text-gray-600 dark:text-gray-400"},[i("p",null," When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")],-1)),m.value?(t(),n("div",ae,[a.value?(t(),n("div",re,[i("div",ne,[s.value?(t(),n("p",le," To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code. ")):(t(),n("p",ie," Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key. "))]),i("div",{class:"mt-4 p-2 inline-block bg-white",innerHTML:a.value},null,8,ue),y.value?(t(),n("div",de,[i("p",ce,[e[3]||(e[3]=l(" Setup Key: ")),i("span",{innerHTML:y.value},null,8,me)])])):d("",!0),s.value?(t(),n("div",fe,[r(Z,{for:"code",value:"Code"}),r(N,{id:"code",modelValue:P(v).code,"onUpdate:modelValue":e[0]||(e[0]=F=>P(v).code=F),type:"text",name:"code",class:"block mt-1 w-1/2",inputmode:"numeric",autofocus:"",autocomplete:"one-time-code",onKeyup:L(K,["enter"])},null,8,["modelValue"]),r(M,{message:P(v).errors.code,class:"mt-2"},null,8,["message"])])):d("",!0)])):d("",!0),_.value.length>0&&!s.value?(t(),n("div",pe,[e[4]||(e[4]=i("div",{class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},[i("p",{class:"font-semibold"}," Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")],-1)),i("div",ye,[(t(!0),n(z,null,G(_.value,F=>(t(),n("div",{key:F},$(F),1))),128))])])):d("",!0)])):d("",!0),i("div",ve,[m.value?(t(),n("div",we,[r(b,{onConfirmed:K,seconds:60},{default:o(()=>[s.value?(t(),x(B,{key:0,type:"button",class:S(["me-3",{"opacity-25":u.value}]),disabled:u.value},{default:o(()=>e[6]||(e[6]=[l(" Confirm ")])),_:1},8,["class","disabled"])):d("",!0)]),_:1}),r(b,{onConfirmed:E,seconds:60},{default:o(()=>[_.value.length>0&&!s.value?(t(),x(V,{key:0,class:"me-3"},{default:o(()=>e[7]||(e[7]=[l(" Regenerate Recovery Codes ")])),_:1})):d("",!0)]),_:1}),r(b,{onConfirmed:k,seconds:60},{default:o(()=>[_.value.length===0&&!s.value?(t(),x(V,{key:0,class:"me-3"},{default:o(()=>e[8]||(e[8]=[l(" Show Recovery Codes ")])),_:1})):d("",!0)]),_:1}),r(b,{onConfirmed:R,seconds:60},{default:o(()=>[s.value?(t(),x(V,{key:0,class:S({"opacity-25":c.value}),disabled:c.value},{default:o(()=>e[9]||(e[9]=[l(" Cancel ")])),_:1},8,["class","disabled"])):d("",!0)]),_:1}),r(b,{onConfirmed:R,seconds:60},{default:o(()=>[s.value?d("",!0):(t(),x(X,{key:0,class:S({"opacity-25":c.value}),disabled:c.value},{default:o(()=>e[10]||(e[10]=[l(" Disable ")])),_:1},8,["class","disabled"]))]),_:1})])):(t(),n("div",ge,[r(b,{onConfirmed:T,seconds:60},{default:o(()=>[r(B,{type:"button",class:S({"opacity-25":u.value}),disabled:u.value},{default:o(()=>e[5]||(e[5]=[l(" Enable ")])),_:1},8,["class","disabled"])]),_:1})]))])]),_:1}))}};export{Pe as default};
