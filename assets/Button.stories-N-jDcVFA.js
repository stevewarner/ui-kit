import{j as d}from"./jsx-runtime-D_zvdyIk.js";const u="_button_196ad_1",m="_primary_196ad_7",p="_secondary_196ad_15",y="_tertiary_196ad_24",o={button:u,primary:m,secondary:p,tertiary:y};var n=(r=>(r.PRIMARY="primary",r.SECONDARY="secondary",r.TERTIARY="tertiary",r))(n||{});function s({className:r,variant:c="primary",...i}){return d.jsx("button",{className:`${o.button} ${o[c]} ${r}`,...i})}s.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"ROLE"},description:"",defaultValue:{value:"ROLE.PRIMARY",computed:!0}}}};const{fn:R}=__STORYBOOK_MODULE_TEST__,l={title:"Components/Button",component:s,parameters:{layout:"centered"},args:{id:"button-id","data-test":"button-test",onClick:R()},tags:["autodocs"]},t={args:{variant:n.PRIMARY,children:"Primary Button"}},a={args:{variant:n.SECONDARY,children:"Secondary Button"}},e={args:{variant:n.TERTIARY,children:"Tertiary Button"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: ROLE.PRIMARY,
    children: 'Primary Button'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: ROLE.SECONDARY,
    children: 'Secondary Button'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: ROLE.TERTIARY,
    children: 'Tertiary Button'
  }
}`,...e.parameters?.docs?.source}}};const T=["Primary","Secondary","Tertiary"];export{t as Primary,a as Secondary,e as Tertiary,T as __namedExportsOrder,l as default};
