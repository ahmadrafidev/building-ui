"use strict";(self.webpackChunkastra_ui=self.webpackChunkastra_ui||[]).push([[50],{"./stories/Collapse.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Collapse_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Collapse=param=>{let{title,children}=param;const[isOpen,setIsOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)("div",{className:"border-b border-gray-200",children:[(0,jsx_runtime.jsx)("button",{className:"w-full text-left py-2 px-4 bg-gray-100 hover:bg-gray-200 focus:outline-none",onClick:()=>setIsOpen(!isOpen),children:title}),isOpen&&(0,jsx_runtime.jsx)("div",{className:"p-4 bg-white",children})]})},Collapse_Collapse=Collapse;try{Collapse.displayName="Collapse",Collapse.__docgenInfo={description:"",displayName:"Collapse",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Collapse/Collapse.tsx#Collapse"]={docgenInfo:Collapse.__docgenInfo,name:"Collapse",path:"components/Collapse/Collapse.tsx#Collapse"})}catch(__react_docgen_typescript_loader_error){}var _Default_parameters,_Default_parameters_docs,_Default_parameters1;const Collapse_stories={title:"Components/Collapse",component:Collapse_Collapse},Default=(args=>(0,jsx_runtime.jsx)(Collapse_Collapse,{...args})).bind({});Default.args={title:"Click to expand",children:"This is the collapsible content."},Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"args => <Collapse {...args} />",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]}}]);