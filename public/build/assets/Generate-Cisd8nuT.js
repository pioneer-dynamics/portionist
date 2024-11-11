import{_ as S}from"./AppLayout-rmvWxdeo.js";import{d as b,z as C,o as r,e as n,F as k,h as y,t as w,a as t,g as B,q as h,T as I,c as G,w as v,b as m,u as p,f as M,Q as N}from"./app-Ds0YRx8i.js";import{_ as A,a as F}from"./FlatForm-vil6viet.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as Z}from"./PrimaryButton-ZigUUx69.js";import"./logo-B0rZE226.js";const D=["value"],K=["value"],L={__name:"SelectInput",props:{modelValue:String,options:Array},emits:["update:modelValue"],setup(c,{expose:o}){const s=b(null);return C(()=>{s.value.hasAttribute("autofocus")&&s.value.autofocus==!0&&s.value.focus()}),o({focus:()=>s.value.focus()}),(f,d)=>(r(),n("select",{ref_key:"input",ref:s,class:"border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm",value:c.modelValue,onInput:d[0]||(d[0]=e=>f.$emit("update:modelValue",e.target.value))},[(r(!0),n(k,null,y(c.options,e=>(r(),n("option",{key:e,value:e},w(e),9,K))),128))],40,D))}},U=["onClick"],j=["placeholder"],q={__name:"TagInput",props:{modelValue:String,placeholder:String},emits:["update:modelValue"],setup(c,{expose:o,emit:s}){const f=c,d=s,e=b(null),l=b(null),a=b([]);C(()=>{l.value.hasAttribute("autofocus")&&e.value.focus(),a.value=f.modelValue}),o({focus:()=>e.value.focus()});const _=u=>{u.preventDefault();let g=u.target.value.trim();if(g.length>0){if(a.value.length>=1){for(let i=0;i<a.value.length;i++)if(a[i]===g)return!1}a.value.push(g),u.target.value=""}d("update:modelValue",a.value)},x=u=>{a.value.splice(u,1),d("update:modelValue",a.value)},V=u=>{u.target.value.length===0&&(x(a.value.length-1),d("update:modelValue",a.value))},$=()=>{e.value.focus()};return(u,g)=>(r(),n("div",{class:"",ref_key:"base",ref:l},[t("div",{onClick:g[0]||(g[0]=i=>$()),class:"border-1 p-0.5 border-branding-blue-300 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-gray-300 focus-within:border-branding-blue-500 dark:focus-within:border-branding-blue-600 focus-within:ring-branding-blue-500 dark:focus-within:ring-branding-blue-600 rounded-md shadow-sm"},[(r(!0),n(k,null,y(a.value,(i,T)=>(r(),n("div",{key:i,class:"ml-4 text-sm inline-flex items-center font-bold leading-sm px-3 py-1 bg-branding-blue-500 text-branding-green-700 rounded-full"},[B(w(i)+" ",1),t("span",{class:"ml-2 cursor-pointer",onClick:W=>x(T)},"x",8,U)]))),128)),t("input",{ref_key:"input",ref:e,onKeydown:[h(_,[","]),h(_,[";"]),h(V,["delete"])],onBlur:_,placeholder:a.value.length==0?c.placeholder:"",class:"shadow-none ring-0 focus:ring-0 border-0 focus:border-0 appearance-none focus:outline-0 dark:bg-gray-900 dark:text-gray-300"},null,40,j)])],512))}},z=R(q,[["__scopeId","data-v-1fc300d3"]]),E={class:"py-12"},Q={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},H={class:"bg-branding-blue-100 dark:bg-branding-blue-500 overflow-hidden shadow-xl sm:rounded-lg p-4"},J={key:0},O={key:1},P={key:0,class:"py-4"},oe={__name:"Generate",setup(c){const o=I({ingredients:[],recipeType:"cocktail"}),s=b([]),f=()=>{o.post(route("generate.action"),{preserveScroll:!0,onSuccess(){s.value=N().props.jetstream.flash.recipes}})};return(d,e)=>(r(),G(S,{title:"Generate Recipes"},{header:v(()=>e[2]||(e[2]=[t("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Generate Recipes ",-1)])),default:v(()=>[t("div",E,[t("div",Q,[t("div",H,[m(A,{onSubmitted:f},{default:v(()=>[m(z,{placeholder:"Coma seperated list",class:"w-full",autofocus:"",modelValue:p(o).ingredients,"onUpdate:modelValue":e[0]||(e[0]=l=>p(o).ingredients=l)},null,8,["modelValue"]),m(L,{modelValue:p(o).recipeType,"onUpdate:modelValue":e[1]||(e[1]=l=>p(o).recipeType=l),options:["cocktail","food"]},null,8,["modelValue"]),m(Z,{disabled:p(o).processing},{default:v(()=>[p(o).processing?(r(),n("span",J,e[3]||(e[3]=[t("div",{role:"status"},[t("svg",{"aria-hidden":"true",class:"mx-6 w-6 h-6 text-gray-200 animate-spin dark:text-gray-800 fill-branding-green-900",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]),t("span",{class:"sr-only"},"generating...")],-1)]))):(r(),n("span",O,"Generate"))]),_:1},8,["disabled"])]),_:1})]),s.value.length>0?(r(),n("div",P,[(r(!0),n(k,null,y(s.value,l=>(r(),n("div",{key:l.id,class:"m-4 p-6 bg-branding-blue-50 border border-branding-blue-200 rounded-lg shadow dark:bg-branding-blue-800 dark:border-branding-blue-700"},[m(F,{recipe:l},null,8,["recipe"])]))),128))])):M("",!0)])])]),_:1}))}};export{oe as default};
