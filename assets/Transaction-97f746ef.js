import{r as t,j as s,L as a}from"./index-d2dc20ec.js";import{A as r}from"./AdminSidebar-a2a1d3da.js";import{T as c}from"./TableHOC-857894c9.js";const o=[{Header:"User",accessor:"user"},{Header:"Amount",accessor:"amount"},{Header:"Discount",accessor:"discount"},{Header:"Quantity",accessor:"quantity"},{Header:"Status",accessor:"status"},{Header:"Action",accessor:"action"}],i=[{user:"Keshav",amount:45e3,discount:4500,quantity:3,status:s.jsx("span",{className:"red",children:"Processing"}),action:s.jsx(a,{to:"/admin/transaction/fsdfsdf",children:"Manage"})},{user:"Mayank",amount:5e3,discount:400,quantity:2,status:s.jsx("span",{className:"red",children:"Processing"}),action:s.jsx(a,{to:"/admin/transaction/fsdfsdf",children:"Manage"})},{user:"Raghav",amount:5e3,discount:40,quantity:5,status:s.jsx("span",{className:"red",children:"Processing"}),action:s.jsx(a,{to:"/admin/transaction/fsdfsdf",children:"Manage"})}],l=()=>{const[n]=t.useState(i),e=t.useCallback(c(o,n,"dashboard-product-box","Transactions",!0),[]);return s.jsxs("div",{className:"admin-container",children:[s.jsx(r,{}),s.jsxs("main",{children:[e()," "]})]})};export{l as default};