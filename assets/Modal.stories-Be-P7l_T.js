import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-CIcO0bsH.js";import{F as v}from"./close-C3kecquy.js";import{B as p,R as h}from"./Button-kxLjS1Rc.js";import{I as y}from"./Input-CyUwvhFg.js";import"./preload-helper-PPVm8Dsz.js";const C="_overlay_fe8di_1",g="_modal_fe8di_11",b="_header_fe8di_27",E="_title_fe8di_33",_="_closeButton_fe8di_37",j="_divider_fe8di_47",R="_srOnly_fe8di_51",a={overlay:C,modal:g,header:b,title:E,closeButton:_,divider:j,srOnly:R},w='a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';function O(s,o=!0){const l=d.useRef(null);d.useEffect(()=>{if(!o)return;const n=s.current;if(!n)return;l.current=document.activeElement??null;const i=t=>{if(t.key!=="Tab")return;const r=Array.from(n.querySelectorAll(w)).filter(x=>!x.hasAttribute("disabled")&&x.getAttribute("aria-hidden")!=="true");if(r.length===0)return;const c=r.indexOf(document.activeElement);let m=c;t.shiftKey?m=c<=0?r.length-1:c-1:m=c===-1||c===r.length-1?0:c+1,t.preventDefault(),r[m]?.focus()};return n.addEventListener("keydown",i),()=>{n.removeEventListener("keydown",i);const t=l.current;t&&document.contains(t)&&t.focus()}},[s,o])}const f=({title:s,onClose:o,content:l})=>{const n=d.useRef(null),i=d.useRef(null);return d.useEffect(()=>{const t=r=>{r.key==="Escape"&&o()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[o]),d.useEffect(()=>{n.current?.focus()},[]),O(i,!0),e.jsx("div",{className:a.overlay,onClick:()=>{o()},children:e.jsxs("div",{ref:i,className:a.modal,role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",onClick:t=>{t.stopPropagation()},children:[e.jsxs("div",{className:a.header,children:[e.jsx("h2",{id:"modal-title",className:a.title,children:s}),e.jsxs("button",{ref:n,type:"button",className:a.closeButton,onClick:()=>{o()},children:[e.jsx(v,{height:20,width:20}),e.jsx("span",{className:a.srOnly,children:"Close modal"})]})]}),e.jsx("hr",{className:a.divider}),l]})})};f.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{title:{required:!0,tsType:{name:"string"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},content:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const A={title:"Components/Modal",component:f,parameters:{layout:"fullscreen"},args:{title:"Example modal title"},tags:["autodocs"]},u={args:{title:"Example modal title",onClose:()=>{}},render:s=>{const[o,l]=d.useState(!1),n=()=>{l(!1),s.onClose&&s.onClose()},i=e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",marginBottom:"1.5rem",alignItems:"flex-start"},children:[e.jsx("div",{style:{width:"100%",maxWidth:"240px"},children:e.jsx(y,{id:"first-name",label:"First name",showLabel:!0})}),e.jsx("div",{style:{width:"100%",maxWidth:"240px"},children:e.jsx(y,{id:"last-name",label:"Last name",showLabel:!0})})]}),e.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"1rem"},children:e.jsxs("div",{style:{display:"flex",width:"100%",maxWidth:"600px",gap:"0.5rem"},children:[e.jsx(p,{style:{flex:1},variant:h.SECONDARY,type:"button",onClick:n,children:"Cancel"}),e.jsx(p,{style:{flex:1},variant:h.PRIMARY,type:"button",onClick:()=>{n()},children:"Submit"})]})})]});return e.jsxs("div",{style:{padding:"2rem",height:"500px"},children:[e.jsx(p,{type:"button",onClick:()=>l(!0),children:"Open modal"}),o&&e.jsx(f,{...s,onClose:n,content:s.content??i})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Example modal title",
    // onClose is provided by the render function but required in the type
    onClose: () => {}
  },
  render: args => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
      if (args.onClose) args.onClose();
    };
    const defaultContent = <div>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginBottom: "1.5rem",
        alignItems: "flex-start"
      }}>
          <div style={{
          width: "100%",
          maxWidth: "240px"
        }}>
            <Input id="first-name" label="First name" showLabel />
          </div>
          <div style={{
          width: "100%",
          maxWidth: "240px"
        }}>
            <Input id="last-name" label="Last name" showLabel />
          </div>
        </div>

        <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "1rem"
      }}>
          <div style={{
          display: "flex",
          width: "100%",
          maxWidth: "600px",
          gap: "0.5rem"
        }}>
            <Button style={{
            flex: 1
          }} variant={ROLE.SECONDARY} type="button" onClick={handleClose}>
              Cancel
            </Button>
            <Button style={{
            flex: 1
          }} variant={ROLE.PRIMARY} type="button" onClick={() => {
            handleClose();
          }}>
              Submit
            </Button>
          </div>
        </div>
      </div>;
    return <div style={{
      padding: "2rem",
      height: "500px"
    }}>
        <Button type="button" onClick={() => setOpen(true)}>
          Open modal
        </Button>

        {open && <Modal {...args} onClose={handleClose} content={args.content ?? defaultContent} />}
      </div>;
  }
}`,...u.parameters?.docs?.source}}};const D=["Default"];export{u as Default,D as __namedExportsOrder,A as default};
