import{_ as T}from"./AppLayout-CiBC5qd7.js";import{o as r,e as s,a,r as b,c as h,w as d,u as c,j as v,k as C,b as o,n as m,F as _,h as $,f as w,T as S,t as B,g as y}from"./app-CgsIz9cD.js";import{_ as q,a as L}from"./FlatForm-D74CtCBY.js";import{_ as M}from"./TextInput-3GI5nHjy.js";import{_ as V}from"./PrimaryButton-CySBv8ot.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./logo-B0rZE226.js";const H={},N={class:"text-sm font-medium text-center text-branding-blue-500 border-b border-branding-blue-200 dark:text-branding-blue-400 dark:border-branding-blue-700"},A={class:"flex flex-wrap -mb-px"};function Z(e,t){return r(),s("div",N,[a("ul",A,[b(e.$slots,"default")])])}const j=F(H,[["render",Z]]),I={__name:"LinkIfPermitted",props:{condition:{type:Boolean,default:!0},href:String,as:{type:String,default:"a"}},setup(e){return(t,i)=>e.condition?(r(),h(c(v),{key:0,href:e.href,as:e.as},{default:d(()=>[b(t.$slots,"default")]),_:3},8,["href","as"])):b(t.$slots,"default",{key:1})}},P={class:"me-2"},x={__name:"Tab",props:{href:String,condition:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},setup(e){const t=e,i=C(()=>t.active?"inline-block p-4 text-branding-blue-600 border-b-2 border-branding-green-600 rounded-t-lg active dark:text-branding-green-500 dark:border-branding-green-500":"inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-branding-blue-600 hover:border-branding-blue-300 dark:hover:text-branding-blue-200 dark:text-branding-blue-400");return(l,f)=>(r(),s("li",P,[o(I,{href:t.href,condition:t.condition,class:m(i.value)},{default:d(()=>[b(l.$slots,"default")]),_:3},8,["href","condition","class"])]))}},R={key:0,class:"flex mb-4 justify-center"},U={class:"flex flex-wrap mt-4"},z=["innerHTML"],k="mr-1 px-4 py-3 text-sm leading-4 border rounded",D={__name:"Paginator",props:{links:{type:Array,required:!0}},setup(e){return(t,i)=>e.links.length>3?(r(),s("div",R,[a("div",U,[(r(!0),s(_,null,$(e.links,l=>(r(),s(_,{key:t.key},[l.url===null?(r(),s("div",{key:0,class:m(["text-gray-400 cursor-not-allowed",k]),innerHTML:l.label,"aria-disabled":"true"},null,8,z)):(r(),h(c(v),{key:1,class:m(["hover:bg-branding-blue-500 text-branding-blue-500 dark:text-branding-green-400 hover:text-branding-green-500 focus:border-branding-blue-500 focus:text-branding-green-500",[k,{"bg-branding-blue-500 text-branding-green-500":l.active}]]),href:l.url,innerHTML:l.label,"aria-disabled":"false","preserve-scroll":"","preserve-state":""},null,8,["class","href","innerHTML"]))],64))),128))])])):w("",!0)}},E={class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"},G={class:"py-5"},K={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},J={class:"mt-4 bg-branding-blue-100 dark:bg-branding-blue-500 overflow-hidden shadow-xl sm:rounded-lg p-4"},O={key:0},Q={key:1},W={key:0,class:"py-4"},X={class:"py-4"},ie={__name:"Index",props:{recipes:Array,query:String},setup(e){const t=e,i=S({query:t.query?t.query:""}),l=u=>u.replace(/\w\S*/g,function(n){return n.charAt(0).toUpperCase()+n.substr(1).toLowerCase()}),f=C(()=>l(route().params.filter)+" Recipes"),g=()=>{i.get(route("recipes.index",{recipeType:route().params.recipeType,filter:route().params.filter}),{preserveState:!0})};return(u,n)=>(r(),h(T,{title:f.value},{header:d(()=>[a("h2",E,B(f.value),1)]),default:d(()=>[a("div",G,[a("div",K,[o(j,null,{default:d(()=>[o(x,{href:u.route("recipes.index",{recipeType:"cocktail",filter:u.route().params.filter}),active:u.route().params.recipeType==="cocktail"},{default:d(()=>n[1]||(n[1]=[y("Cocktails")])),_:1},8,["href","active"]),o(x,{href:u.route("recipes.index",{recipeType:"food",filter:u.route().params.filter}),active:u.route().params.recipeType==="food"},{default:d(()=>n[2]||(n[2]=[y("Food")])),_:1},8,["href","active"])]),_:1}),a("div",J,[o(q,{onSubmitted:g},{default:d(()=>[o(M,{placeholder:"Start typing...",class:"w-full",modelValue:c(i).query,"onUpdate:modelValue":n[0]||(n[0]=p=>c(i).query=p),type:"search",onSearch:g,onKeyup:g},null,8,["modelValue"]),o(V,{disabled:c(i).processing},{default:d(()=>[c(i).processing?(r(),s("span",O,n[3]||(n[3]=[a("div",{role:"status"},[a("svg",{"aria-hidden":"true",class:"mx-3.5 w-4 h-4 text-gray-200 animate-spin dark:text-gray-800 fill-branding-green-900",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),a("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]),a("span",{class:"sr-only"},"searching...")],-1)]))):(r(),s("span",Q,"Filter"))]),_:1},8,["disabled"])]),_:1})]),e.recipes.data.length>0?(r(),s("div",W,[(r(!0),s(_,null,$(e.recipes.data,p=>(r(),s("div",{key:p.id,class:"m-4 p-6 bg-branding-blue-50 border border-branding-blue-200 rounded-lg shadow dark:bg-branding-blue-800 dark:border-branding-blue-700"},[o(L,{recipe:p},null,8,["recipe"])]))),128))])):w("",!0),a("div",X,[o(D,{links:e.recipes.meta.links},null,8,["links"])])])])]),_:1},8,["title"]))}};export{ie as default};
