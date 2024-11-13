import{o as s,e as i,u as c,Q as N,d as M,G as F,n as m,a as t,f,t as k,i as $,z as D,A as E,k as _,r as v,H as C,l as T,B,b as g,w as n,C as R,c as y,j,Z as O,g as p,F as w,h as A,x as P}from"./app-B9Ku9xqC.js";import{L as V}from"./logo-B0rZE226.js";const G=["src"],H={__name:"ApplicationMark",setup(u){return(l,o)=>(s(),i("img",{src:c(V),alt:"Portion.ist logo",width:"100",height:"100"},null,8,G))}},I={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},Q={class:"flex items-center justify-between flex-wrap"},U={class:"w-0 flex-1 flex items-center min-w-0"},Z={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},q={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},J={class:"ms-3 font-medium text-sm text-white truncate"},K={class:"shrink-0 sm:ms-3"},W={__name:"Banner",setup(u){const l=N(),o=M(!0),d=M("success"),r=M("");return F(async()=>{var e,a;d.value=((e=l.props.jetstream.flash)==null?void 0:e.bannerStyle)||"success",r.value=((a=l.props.jetstream.flash)==null?void 0:a.banner)||"",o.value=!0}),(e,a)=>(s(),i("div",null,[o.value&&r.value?(s(),i("div",{key:0,class:m({"bg-indigo-500":d.value=="success","bg-red-700":d.value=="danger"})},[t("div",I,[t("div",Q,[t("div",U,[t("span",{class:m(["flex p-2 rounded-lg",{"bg-indigo-600":d.value=="success","bg-red-600":d.value=="danger"}])},[d.value=="success"?(s(),i("svg",Z,a[1]||(a[1]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)]))):f("",!0),d.value=="danger"?(s(),i("svg",q,a[2]||(a[2]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1)]))):f("",!0)],2),t("p",J,k(r.value),1)]),t("div",K,[t("button",{type:"button",class:m(["-me-1 flex p-2 rounded-md focus:outline-none sm:-me-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":d.value=="success","hover:bg-red-600 focus:bg-red-600":d.value=="danger"}]),"aria-label":"Dismiss",onClick:a[0]||(a[0]=$(b=>o.value=!1,["prevent"]))},a[3]||(a[3]=[t("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1)]),2)])])])],2)):f("",!0)]))}},X={class:"relative"},z={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white dark:bg-gray-700"]}},setup(u){const l=u;let o=M(!1);const d=a=>{o.value&&a.key==="Escape"&&(o.value=!1)};D(()=>document.addEventListener("keydown",d)),E(()=>document.removeEventListener("keydown",d));const r=_(()=>({48:"w-48"})[l.width.toString()]),e=_(()=>l.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":l.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top");return(a,b)=>(s(),i("div",X,[t("div",{onClick:b[0]||(b[0]=L=>C(o)?o.value=!c(o):o=!c(o))},[v(a.$slots,"trigger")]),T(t("div",{class:"fixed inset-0 z-40",onClick:b[1]||(b[1]=L=>C(o)?o.value=!1:o=!1)},null,512),[[B,c(o)]]),g(R,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:n(()=>[T(t("div",{class:m(["absolute z-50 mt-2 rounded-md shadow-lg",[r.value,e.value]]),style:{display:"none"},onClick:b[2]||(b[2]=L=>C(o)?o.value=!1:o=!1)},[t("div",{class:m(["rounded-md ring-1 ring-black ring-opacity-5",u.contentClasses])},[v(a.$slots,"content")],2)],2),[[B,c(o)]])]),_:3})]))}},Y={key:0,type:"submit",class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},ee=["href"],x={__name:"DropdownLink",props:{href:String,as:String},setup(u){return(l,o)=>(s(),i("div",null,[u.as=="button"?(s(),i("button",Y,[v(l.$slots,"default")])):u.as=="a"?(s(),i("a",{key:1,href:u.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},[v(l.$slots,"default")],8,ee)):(s(),y(c(j),{key:2,href:u.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},{default:n(()=>[v(l.$slots,"default")]),_:3},8,["href"]))]))}},S={__name:"NavLink",props:{href:String,active:Boolean},setup(u){const l=u,o=_(()=>l.active?"inline-flex items-center px-1 pt-1 border-b-2 border-branding-green-400 dark:border-branding-green-600 text-sm font-medium leading-5 text-branding-blue-900 dark:text-branding-blue-100 focus:outline-none focus:border-branding-green-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-branding-blue-500 dark:text-branding-blue-400 hover:text-branding-blue-700 dark:hover:text-branding-blue-300 hover:border-branding-blue-300 dark:hover:border-branding-blue-700 focus:outline-none focus:text-branding-blue-700 dark:focus:text-branding-blue-300 focus:border-branding-blue-300 dark:focus:border-branding-blue-700 transition duration-150 ease-in-out");return(d,r)=>(s(),y(c(j),{href:u.href,class:m(o.value)},{default:n(()=>[v(d.$slots,"default")]),_:3},8,["href","class"]))}},te=["href"],h={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(u){const l=u,o=_(()=>l.active?"block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 dark:border-indigo-600 text-start text-base font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300 transition duration-150 ease-in-out":"block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 ease-in-out");return(d,r)=>(s(),i("div",null,[u.as=="button"?(s(),i("button",{key:0,class:m([o.value,"w-full text-start"])},[v(d.$slots,"default")],2)):u.as=="a"?(s(),i("a",{key:1,class:m([o.value,"w-full text-start"]),href:u.href},[v(d.$slots,"default")],10,te)):(s(),y(c(j),{key:2,href:u.href,class:m(o.value)},{default:n(()=>[v(d.$slots,"default")]),_:3},8,["href","class"]))]))}},re={class:"min-h-screen bg-gray-50 dark:bg-gray-900"},se={class:"bg-white dark:bg-branding-blue-600 border-b border-barnding-blue-100 dark:border-branding-blue-700"},oe={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"},ae={class:"flex justify-between h-16"},ne={class:"flex"},ie={class:"shrink-0 flex items-center"},le={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},de={class:"hidden sm:flex sm:items-center sm:ms-6"},ue={class:"ms-3 relative"},ge={class:"inline-flex rounded-md"},pe={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"},fe={class:"w-60"},me=["onSubmit"],ve={class:"flex items-center"},ce={key:0,class:"me-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},be={class:"ms-3 relative"},he={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},ye=["src","alt"],ke={key:1,class:"inline-flex rounded-md"},xe={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"},we={class:"-me-2 flex items-center sm:hidden"},$e={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Me={class:"pt-2 pb-3 space-y-1"},_e={class:"pt-4 pb-1 border-t border-gray-200 dark:border-gray-600"},je={class:"flex items-center px-4"},Ce={key:0,class:"shrink-0 me-3"},Se=["src","alt"],Le={class:"font-medium text-base text-gray-800 dark:text-gray-200"},Te={class:"font-medium text-sm text-gray-500"},Be={class:"mt-3 space-y-1"},Ae=["onSubmit"],Pe={class:"flex items-center"},ze={key:0,class:"me-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Ne={key:0,class:"bg-gray-50 dark:bg-gray-800 shadow"},Fe={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},De={class:"text-center text-gray-600 dark:text-gray-400 pt-4 pb-4 mx-4"},Ee=["href"],Ve={__name:"AppLayout",props:{title:String},setup(u){const l=M(!1),o=r=>{P.put(route("current-team.update"),{team_id:r.id},{preserveState:!1})},d=()=>{P.post(route("logout"))};return(r,e)=>(s(),i("div",null,[g(c(O),{title:u.title},null,8,["title"]),g(W),t("div",re,[t("nav",se,[t("div",oe,[t("div",ae,[t("div",ne,[t("div",ie,[g(c(j),{href:r.route("generate.form")},{default:n(()=>[g(H,{class:"block h-auto w-20"})]),_:1},8,["href"])]),t("div",le,[g(S,{href:r.route("generate.form"),active:r.route().current("generate.form")},{default:n(()=>e[1]||(e[1]=[p(" Generate ")])),_:1},8,["href","active"]),g(S,{href:r.route("recipes.list",{filter:"my"}),active:r.route().current("recipes.index")&&r.route().params.filter==="my"},{default:n(()=>e[2]||(e[2]=[p(" My Recipes ")])),_:1},8,["href","active"]),g(S,{href:r.route("recipes.list",{filter:"all"}),active:r.route().current("recipes.index")&&r.route().params.filter==="all"},{default:n(()=>e[3]||(e[3]=[p(" All Recipes ")])),_:1},8,["href","active"])])]),t("div",de,[t("div",ue,[r.$page.props.jetstream.hasTeamFeatures?(s(),y(z,{key:0,align:"right",width:"60"},{trigger:n(()=>[t("span",ge,[t("button",pe,[p(k(r.$page.props.auth.user.current_team.name)+" ",1),e[4]||(e[4]=t("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1))])])]),content:n(()=>[t("div",fe,[e[10]||(e[10]=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1)),g(x,{href:r.route("teams.show",r.$page.props.auth.user.current_team)},{default:n(()=>e[5]||(e[5]=[p(" Team Settings ")])),_:1},8,["href"]),r.$page.props.jetstream.canCreateTeams?(s(),y(x,{key:0,href:r.route("teams.create")},{default:n(()=>e[6]||(e[6]=[p(" Create New Team ")])),_:1},8,["href"])):f("",!0),r.$page.props.auth.user.all_teams.length>1?(s(),i(w,{key:1},[e[8]||(e[8]=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),e[9]||(e[9]=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1)),(s(!0),i(w,null,A(r.$page.props.auth.user.all_teams,a=>(s(),i("form",{key:a.id,onSubmit:$(b=>o(a),["prevent"])},[g(x,{as:"button"},{default:n(()=>[t("div",ve,[a.id==r.$page.props.auth.user.current_team_id?(s(),i("svg",ce,e[7]||(e[7]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)]))):f("",!0),t("div",null,k(a.name),1)])]),_:2},1024)],40,me))),128))],64)):f("",!0)])]),_:1})):f("",!0)]),t("div",be,[g(z,{align:"right",width:"48"},{trigger:n(()=>[r.$page.props.jetstream.managesProfilePhotos?(s(),i("button",he,[t("img",{class:"h-8 w-8 rounded-full object-cover",src:r.$page.props.auth.user.profile_photo_url,alt:r.$page.props.auth.user.name},null,8,ye)])):(s(),i("span",ke,[t("button",xe,[p(k(r.$page.props.auth.user.name)+" ",1),e[11]||(e[11]=t("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1))])]))]),content:n(()=>[e[15]||(e[15]=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1)),g(x,{href:r.route("profile.show")},{default:n(()=>e[12]||(e[12]=[p(" Profile ")])),_:1},8,["href"]),r.$page.props.jetstream.hasApiFeatures?(s(),y(x,{key:0,href:r.route("api-tokens.index")},{default:n(()=>e[13]||(e[13]=[p(" API Tokens ")])),_:1},8,["href"])):f("",!0),e[16]||(e[16]=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),t("form",{onSubmit:$(d,["prevent"])},[g(x,{as:"button"},{default:n(()=>e[14]||(e[14]=[p(" Log Out ")])),_:1})],32)]),_:1})])]),t("div",we,[t("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",onClick:e[0]||(e[0]=a=>l.value=!l.value)},[(s(),i("svg",$e,[t("path",{class:m({hidden:l.value,"inline-flex":!l.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),t("path",{class:m({hidden:!l.value,"inline-flex":l.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),t("div",{class:m([{block:l.value,hidden:!l.value},"sm:hidden"])},[t("div",Me,[g(h,{href:r.route("generate.form"),active:r.route().current("generate.form")},{default:n(()=>e[17]||(e[17]=[p(" Generate ")])),_:1},8,["href","active"]),g(h,{href:r.route("recipes.list",{filter:"my"}),active:r.route().current("recipes.index")&&r.route().params.filter==="my"},{default:n(()=>e[18]||(e[18]=[p(" My Recipes ")])),_:1},8,["href","active"]),g(h,{href:r.route("recipes.list",{filter:"all"}),active:r.route().current("recipes.index")&&r.route().params.filter==="all"},{default:n(()=>e[19]||(e[19]=[p(" All Recipes ")])),_:1},8,["href","active"])]),t("div",_e,[t("div",je,[r.$page.props.jetstream.managesProfilePhotos?(s(),i("div",Ce,[t("img",{class:"h-10 w-10 rounded-full object-cover",src:r.$page.props.auth.user.profile_photo_url,alt:r.$page.props.auth.user.name},null,8,Se)])):f("",!0),t("div",null,[t("div",Le,k(r.$page.props.auth.user.name),1),t("div",Te,k(r.$page.props.auth.user.email),1)])]),t("div",Be,[g(h,{href:r.route("profile.show"),active:r.route().current("profile.show")},{default:n(()=>e[20]||(e[20]=[p(" Profile ")])),_:1},8,["href","active"]),r.$page.props.jetstream.hasApiFeatures?(s(),y(h,{key:0,href:r.route("api-tokens.index"),active:r.route().current("api-tokens.index")},{default:n(()=>e[21]||(e[21]=[p(" API Tokens ")])),_:1},8,["href","active"])):f("",!0),t("form",{method:"POST",onSubmit:$(d,["prevent"])},[g(h,{as:"button"},{default:n(()=>e[22]||(e[22]=[p(" Log Out ")])),_:1})],32),r.$page.props.jetstream.hasTeamFeatures?(s(),i(w,{key:1},[e[28]||(e[28]=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),e[29]||(e[29]=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1)),g(h,{href:r.route("teams.show",r.$page.props.auth.user.current_team),active:r.route().current("teams.show")},{default:n(()=>e[23]||(e[23]=[p(" Team Settings ")])),_:1},8,["href","active"]),r.$page.props.jetstream.canCreateTeams?(s(),y(h,{key:0,href:r.route("teams.create"),active:r.route().current("teams.create")},{default:n(()=>e[24]||(e[24]=[p(" Create New Team ")])),_:1},8,["href","active"])):f("",!0),r.$page.props.auth.user.all_teams.length>1?(s(),i(w,{key:1},[e[26]||(e[26]=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),e[27]||(e[27]=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1)),(s(!0),i(w,null,A(r.$page.props.auth.user.all_teams,a=>(s(),i("form",{key:a.id,onSubmit:$(b=>o(a),["prevent"])},[g(h,{as:"button"},{default:n(()=>[t("div",Pe,[a.id==r.$page.props.auth.user.current_team_id?(s(),i("svg",ze,e[25]||(e[25]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)]))):f("",!0),t("div",null,k(a.name),1)])]),_:2},1024)],40,Ae))),128))],64)):f("",!0)],64)):f("",!0)])])],2)]),r.$slots.header?(s(),i("header",Ne,[t("div",Fe,[v(r.$slots,"header")])])):f("",!0),t("main",null,[v(r.$slots,"default")]),t("footer",De,[e[30]||(e[30]=p("Made with ❤️ by ")),t("a",{target:"_blank",href:r.$page.props.config.app.copyright,class:"text-gray-600 dark:text-gray-400 underline hover:text-branding-blue-400 dark:hover:text-branding-green-400"},"Mathew Paret",8,Ee)])])]))}};export{Ve as _};
