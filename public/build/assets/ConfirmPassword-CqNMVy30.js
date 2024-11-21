import{T as l,d,e as p,b as o,u as e,w as t,F as u,o as f,Z as c,a as r,n as _,f as w,g}from"./app-C_UjF32i.js";import{A as b}from"./AuthenticationCard-zmoMCKxY.js";import{_ as x}from"./AuthenticationCardLogo-C-3BTvI8.js";import{_ as y}from"./InputError-BAxX15ZE.js";import{_ as v}from"./InputLabel-CfdvJ3gD.js";import{_ as V}from"./PrimaryButton-BwILkdv2.js";import{_ as k}from"./TextInput-Bt2CpAG3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./logo-B0rZE226.js";const C={class:"flex justify-end mt-4"},q={__name:"ConfirmPassword",setup($){const s=l({password:""}),i=d(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),i.value.focus()}})};return(A,a)=>(f(),p(u,null,[o(e(c),{title:"Secure Area"}),o(b,null,{logo:t(()=>[o(x)]),default:t(()=>[a[2]||(a[2]=r("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," This is a secure area of the application. Please confirm your password before continuing. ",-1)),r("form",{onSubmit:g(n,["prevent"])},[r("div",null,[o(v,{for:"password",value:"Password"}),o(k,{id:"password",ref_key:"passwordInput",ref:i,modelValue:e(s).password,"onUpdate:modelValue":a[0]||(a[0]=m=>e(s).password=m),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(y,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),r("div",C,[o(V,{class:_(["ms-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:t(()=>a[1]||(a[1]=[w(" Confirm ")])),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{q as default};
