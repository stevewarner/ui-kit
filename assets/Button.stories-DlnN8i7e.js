import{B as t}from"./Button-Brdg18Zs.js";import"./jsx-runtime-D_zvdyIk.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,m={title:"Example/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:n()}},r={args:{primary:!0,label:"Button"}},a={args:{label:"Button",backgroundColor:"#ff0"}},e={args:{size:"large",label:"Button"}},o={args:{size:"small",label:"Button"}},s={args:{primary:!1,label:"Button"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    backgroundColor: '#ff0'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    primary: false,
    label: "Button"
  }
}`,...s.parameters?.docs?.source}}};const u=["Primary","Secondary","Large","Small","Test"];export{e as Large,r as Primary,a as Secondary,o as Small,s as Test,u as __namedExportsOrder,m as default};
