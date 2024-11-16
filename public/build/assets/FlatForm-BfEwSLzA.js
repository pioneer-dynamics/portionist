import{o as s,e as r,r as y,T as h,d as f,A as F,k as z,a as e,b as w,w as _,u,f as a,i as k,t as d,F as S,h as Z,g as A,Q as m}from"./app-XtWVCqDM.js";const N=["type"],L={__name:"IconButton",props:{type:{type:String,default:"submit"}},setup(o){return(n,l)=>(s(),r("button",{type:o.type,class:"inline-flex items-center px-4 py-2 bg-branding-blue-500 dark:bg-branding-blue-600 border-0 border-transparent rounded-md font-semibold text-xs text-branding-green-700 dark:branding-green-300 uppercase tracking-widest hover:bg-branding-blue-700 dark:hover:bg-branding-blue-500 focus:ring-0 focus:ring-offset-0 focus:bg-branding-blue-700 dark:focus:bg-branding-blue-500 active:bg-branding-blue-900 dark:active:bg-branding-blue-700 focus:outline-none focus:ring-branding-blue-500 dark:focus:ring-offset-branding-blue-800 disabled:opacity-50 transition ease-in-out duration-150"},[y(n.$slots,"default")],8,N))}},R=["type"],$={__name:"SubtleButton",props:{type:{type:String,default:"submit"}},setup(o){return(n,l)=>(s(),r("button",{type:o.type,class:"inline-flex items-center py-2 border-0 border-transparent rounded-md font-semibold text-xs text-branding-blue-300 dark:branding-blue-300 uppercase tracking-widest disabled:opacity-50 transition ease-in-out duration-150"},[y(n.$slots,"default")],8,R))}},I={class:"flex gap-2 items-center"},T={key:0},D={key:0},E={key:1},O={key:1},Q={class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},q={class:"mb-3 font-normal text-gray-700 dark:text-gray-400"},G={class:"space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"},J={key:0},K={class:"mb-3 font-normal text-gray-700 dark:text-gray-400"},P={class:"space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400"},U={class:"flex gap-2"},W={class:"flex flex-row items-center justify-center gap-2"},X={class:"text-xs text-branding-blue-300"},Y={key:0},e0={key:0},t0={key:1},s0={key:1},r0={class:"flex flex-row items-center justify-center gap-2"},n0={class:"text-xs text-branding-blue-300"},a0={key:0},i0={key:0},o0={key:1},l0={key:1},p0={__name:"RecipeCard",props:{recipe:Object},setup(o){const n=o,l=h({}),p=h({}),v=h({}),g=f(!1),c=f(!1),C=f(0),x=f(0);F(function(){g.value=n.recipe.is_saved,c.value=n.recipe.is_liked,C.value=n.recipe.num_likes,x.value=n.recipe.num_dislikes});const M=z(()=>{if(c.value===!1)return!0;if(c.value===null)return!1}),b=()=>{g.value=m().props.jetstream.flash.recipe.data.is_saved,c.value=m().props.jetstream.flash.recipe.data.is_liked,C.value=m().props.jetstream.flash.recipe.data.num_likes,x.value=m().props.jetstream.flash.recipe.data.num_dislikes},j=()=>{l.get(route("recipes.toggleBookmark",n.recipe.id),{preserveScroll:!0,preserveState:!0,onSuccess:()=>{b()}})},H=()=>{p.get(route("recipes.like",n.recipe.id),{preserveScroll:!0,preserveState:!0,onSuccess:()=>{b()}})},V=()=>{v.get(route("recipes.dislike",n.recipe.id),{preserveScroll:!0,preserveState:!0,onSuccess:()=>{b()}})};return(c0,t)=>(s(),r("span",null,[e("div",I,[w(L,{class:"text-xs",onClick:t[0]||(t[0]=k(i=>j(),["prevent"]))},{default:_(()=>[u(l).processing?a("",!0):(s(),r("span",T,[g.value?a("",!0):(s(),r("span",D,t[3]||(t[3]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-4"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"})],-1)]))),g.value?(s(),r("span",E,t[4]||(t[4]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-4"},[e("path",{"fill-rule":"evenodd",d:"M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z","clip-rule":"evenodd"})],-1)]))):a("",!0)])),u(l).processing?(s(),r("span",O,t[5]||(t[5]=[e("svg",{"aria-hidden":"true",class:"size-4 text-gray-200 animate-spin dark:text-gray-800 fill-branding-green-900",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1)]))):a("",!0)]),_:1}),e("h5",Q,d(o.recipe.title),1)]),t[12]||(t[12]=e("h6",{class:"mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"},"Ingredients",-1)),e("div",q,[e("ul",G,[(s(!0),r(S,null,Z(o.recipe.ingredients,i=>{var B;return s(),r("li",{key:i},[A(d(i.name)+", "+d(i.measurement)+" ",1),((B=i.adjective)==null?void 0:B.length)>0?(s(),r("span",J,d(i.adjective),1)):a("",!0)])}),128))])]),t[13]||(t[13]=e("h6",{class:"mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"},"Steps",-1)),e("div",K,[e("ol",P,[(s(!0),r(S,null,Z(o.recipe.directions,i=>(s(),r("li",{key:i},d(i),1))),128))])]),e("div",U,[e("div",W,[e("span",X,d(C.value),1),w($,{class:"text-xs",onClick:t[1]||(t[1]=k(i=>H(),["prevent"]))},{default:_(()=>[u(p).processing?a("",!0):(s(),r("span",Y,[c.value?a("",!0):(s(),r("span",e0,t[6]||(t[6]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-4"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"})],-1)]))),c.value?(s(),r("span",t0,t[7]||(t[7]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-4"},[e("path",{d:"M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z"})],-1)]))):a("",!0)])),u(p).processing?(s(),r("span",s0,t[8]||(t[8]=[e("svg",{"aria-hidden":"true",class:"size-4 text-gray-200 animate-spin dark:text-gray-800 fill-branding-blue-900 dark:fill-branding-blue-200",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1)]))):a("",!0)]),_:1})]),e("div",r0,[e("span",n0,d(x.value),1),w($,{class:"text-xs",onClick:t[2]||(t[2]=k(i=>V(),["prevent"]))},{default:_(()=>[u(v).processing?a("",!0):(s(),r("span",a0,[M.value?a("",!0):(s(),r("span",i0,t[9]||(t[9]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-4"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"})],-1)]))),M.value?(s(),r("span",o0,t[10]||(t[10]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-4"},[e("path",{d:"M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633A.75.75 0 0 1 9 22a2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z"})],-1)]))):a("",!0)])),u(v).processing?(s(),r("span",l0,t[11]||(t[11]=[e("svg",{"aria-hidden":"true",class:"size-4 text-gray-200 animate-spin dark:text-gray-800 fill-branding-blue-900 dark:fill-branding-blue-200",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1)]))):a("",!0)]),_:1})])])]))}},d0={class:"flex flex-wrap sm:flex-nowrap gap-2 sm:space-y-0 sm:space-y-0"},g0={__name:"FlatForm",emits:["submitted"],setup(o){return(n,l)=>(s(),r("form",{onSubmit:l[0]||(l[0]=k(p=>n.$emit("submitted"),["prevent"]))},[e("div",d0,[y(n.$slots,"default")])],32))}};export{g0 as _,p0 as a};
