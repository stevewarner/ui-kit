import{R as e,B as n}from"./Button-kxLjS1Rc.js";import"./jsx-runtime-u17CrQMm.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,i={title:"Components/Button",component:n,parameters:{layout:"centered"},args:{id:"button-id","data-test":"button-test",onClick:o()},tags:["autodocs"]},r={args:{variant:e.PRIMARY,children:"Primary Button"}},a={args:{variant:e.SECONDARY,children:"Secondary Button"}},t={args:{variant:e.TERTIARY,children:"Tertiary Button"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: ROLE.PRIMARY,
    children: 'Primary Button'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: ROLE.SECONDARY,
    children: 'Secondary Button'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: ROLE.TERTIARY,
    children: 'Tertiary Button'
  }
}`,...t.parameters?.docs?.source}}};const d=["Primary","Secondary","Tertiary"];export{r as Primary,a as Secondary,t as Tertiary,d as __namedExportsOrder,i as default};
