import{_ as c}from"./AppLayout-CJEWsL37.js";import l from"./DeleteUserForm-a9-RGAw-.js";import f from"./LogoutOtherBrowserSessionsForm-CSWYILoh.js";import{S as s}from"./SectionBorder-Doj2amS_.js";import u from"./TwoFactorAuthenticationForm-CaN5XBjp.js";import d from"./UpdatePasswordForm-BVzURq78.js";import _ from"./UpdateProfileInformationForm-CAB5Emjo.js";import h from"./PassKeyForm-DIx-VrKq.js";import{c as g,w as p,o as e,a as m,e as r,b as t,f as a,F as $}from"./app-CBB-R5ZY.js";import"./logo-B0rZE226.js";import"./DialogModal-BIFkmw83.js";import"./SectionTitle-DRwb47VC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DangerButton-CkDd7h38.js";import"./InputError-e1fMKZQM.js";import"./SecondaryButton-Cw7Rrk5z.js";import"./TextInput-Dsl2wQGA.js";import"./ActionMessage-D4n6m5pb.js";import"./PrimaryButton-tTDm9T72.js";import"./ConfirmsPasswordOrPasskey-BZlFylfc.js";import"./ConfirmsPasskey-DqgvCj78.js";import"./InputLabel-B1ijA47b.js";import"./FormSection-VWvwU2fl.js";const k={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},y={key:1},x={key:2},L={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(i){return(o,n)=>(e(),g(c,{title:"Profile"},{header:p(()=>n[0]||(n[0]=[m("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Profile ",-1)])),default:p(()=>[m("div",null,[m("div",k,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),r("div",w,[t(_,{user:o.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),r("div",y,[t(d,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),r("div",x,[t(u,{"requires-confirmation":i.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(h,{class:"mt-10 sm:mt-0"}),t(s),t(f,{sessions:i.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),r($,{key:3},[t(s),t(l,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{L as default};