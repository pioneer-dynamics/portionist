import{_ as c}from"./AppLayout-Do-ay-zt.js";import l from"./DeleteUserForm-6iXG5xJq.js";import f from"./LogoutOtherBrowserSessionsForm-DxU2B3p_.js";import{S as o}from"./SectionBorder-B_NRqiq5.js";import u from"./TwoFactorAuthenticationForm-C9o5zzHP.js";import _ from"./UpdatePasswordForm-BEMxJNoa.js";import d from"./UpdateProfileInformationForm-B_8Dcyrq.js";import h from"./NotificationSubscriptions-BOJRBKCg.js";import $ from"./PassKeyForm-DG0anXoP.js";import{c as g,w as p,o as r,a,e,b as t,h as m,F as k}from"./app-DqTuN9OH.js";import"./logo-B5fQ9ZEH.js";import"./ActionSection-oV00YT7o.js";import"./SectionTitle-CfP-eVRo.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DangerButton-DorwsfZY.js";import"./DialogModal-DOamAa49.js";import"./InputError-gtZSQTaF.js";import"./SecondaryButton-Cy5a8Jm0.js";import"./TextInput-D8jiIXE6.js";import"./ActionMessage-CYrJxIjq.js";import"./PrimaryButton-Ca5uY6-K.js";import"./ConfirmsPasswordOrPasskey-8EMylCWf.js";import"./ConfirmsPasskey-Bf9JBvqT.js";import"./InputLabel-BB9MVfEB.js";import"./FormSection-C-OBr2RD.js";const w={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},y={key:0},x={key:1},B={key:2},R={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(i){return(s,n)=>(r(),g(c,{title:"Profile"},{header:p(()=>n[0]||(n[0]=[a("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Profile ",-1)])),default:p(()=>[a("div",null,[a("div",w,[s.$page.props.jetstream.canUpdateProfileInformation?(r(),e("div",y,[t(d,{user:s.$page.props.auth.user},null,8,["user"]),t(o)])):m("",!0),s.$page.props.jetstream.canUpdatePassword?(r(),e("div",x,[t(_,{class:"mt-10 sm:mt-0"}),t(o)])):m("",!0),s.$page.props.jetstream.canManageTwoFactorAuthentication?(r(),e("div",B,[t(u,{"requires-confirmation":i.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(o)])):m("",!0),t($,{class:"mt-10 sm:mt-0"}),t(o),t(h,{class:"mt-10 sm:mt-0"}),t(o),t(f,{sessions:i.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),s.$page.props.jetstream.hasAccountDeletionFeatures?(r(),e(k,{key:3},[t(o),t(l,{class:"mt-10 sm:mt-0"})],64)):m("",!0)])])]),_:1}))}};export{R as default};