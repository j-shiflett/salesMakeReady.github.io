webpackJsonp([1],{MyGw:function(e,a){},NHnr:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t("7+uW"),r={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[t("router-link",{attrs:{tag:"span",to:"/"}},[t("a",{staticClass:"navbar-brand"},[e._v("BMW of San Antonio Sales")])]),e._v(" "),e._m(0),e._v(" "),t("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[t("ul",{staticClass:"navbar-nav mr-auto"},[t("li",{staticClass:"nav-item"},[t("router-link",{attrs:{tag:"span",to:"/"}},[t("a",{staticClass:"nav-link"},[e._v("Request")])])],1),e._v(" "),t("li",{staticClass:"nav-item dropdown"},[t("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v("Sales Dispatch")]),e._v(" "),t("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[t("router-link",{attrs:{tag:"span",to:"/newcar"}},[t("a",{staticClass:"dropdown-item"},[e._v("New Car")])]),e._v(" "),t("router-link",{attrs:{tag:"span",to:"/preowned"}},[t("a",{staticClass:"dropdown-item"},[e._v("Pre-Owned")])]),e._v(" "),t("router-link",{attrs:{tag:"span",to:"/loancar"}},[t("a",{staticClass:"dropdown-item"},[e._v("Loan Car")])])],1)]),e._v(" "),t("li",{staticClass:"nav-item"},[t("router-link",{attrs:{tag:"span",to:"/customercarepackage"}},[t("a",{staticClass:"nav-link"},[e._v("Parts")])])],1),e._v(" "),t("li",{staticClass:"nav-item"},[t("router-link",{attrs:{tag:"span",to:"/finance"}},[t("a",{staticClass:"nav-link"},[e._v("Finance")])])],1),e._v(" "),t("li",{staticClass:"nav-item"},[t("router-link",{attrs:{tag:"span",to:"/carwash"}},[t("a",{staticClass:"nav-link"},[e._v("Car Wash")])])],1),e._v(" "),t("li",{staticClass:"nav-item"},[t("router-link",{attrs:{tag:"span",to:"/metrics"}},[t("a",{staticClass:"nav-link"},[e._v("Metrics")])])],1)])])],1),e._v(" "),t("router-view")],1)},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}]};var o=t("VU/8")({name:"App"},r,!1,function(e){t("NrCf")},null,null).exports,l=t("/ocq"),i=t("bOdI"),n=t.n(i),c={name:"Home",data:function(){return{reqs:[],salesAssociates:["Pedro Davila","Michael Polak","Jerry Agulair","Oscar","Chris Quincena"],typeOfVehicle:["New","Pre-owned","Loaner"],vehicles:["1 series","2 series","3 series","4 series","5 series","6 series","7 series","8 series","X1","X2","X3","X4","X5","X6","X7","Z4","i8","i3","M"],boolean:["Yes","No"],detailServices:["New Car","Pre-Owned","Refresh"],sales_associate:"",type_of_vehicle:"",deal_number:"",customer_name:"",stock_number:"",mileage:"",model:"",customer_care_package:"",accessories:"",list_accessories:"",detail_service:""}},firestore:function(){return{reqs:V.collection("makeReady")}},methods:{newReq:function(e,a,t,s,r,o,l,i,c,m,v){var d;V.collection("makeReady").add((d={reqTimestamp:new Date,salesTimestamp:"",financeTimestamp:"",carwashClaimedTimestamp:"",carwashCompleteTimestamp:"",sales_associate:e,type_of_vehicle:a,deal_number:t,customer_name:s,stock_number:r,mileage:o,model:l,customer_care_package:i,accessories:c,list_accessories:m,detail_service:v,completionSales:"Incomplete",completionFinance:"no show",completionCarWash:"no show"},n()(d,"salesTimestamp",""),n()(d,"salesManager",""),n()(d,"financeAssociate",""),n()(d,"carWashClaimedAssociate",""),n()(d,"carWashClaimedStatus",""),n()(d,"claimed",""),n()(d,"deliveryBay",""),n()(d,"partsClaimedAssociate",""),n()(d,"partsClaimedTimestamp",""),n()(d,"partsClaimed",!0),n()(d,"partsClaimedStatus",""),d)),this.sales_associate="",this.type_of_vehicle="",this.deal_number="",this.customer_name="",this.stock_number="",this.mileage="",this.model="",this.customer_care_package="",this.accessories="",this.list_accessories="",this.detail_service="",F.push("/")}}},m={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[e._m(0),e._v(" "),t("form",{staticClass:"col-sm-12",on:{submit:function(a){return a.preventDefault(),e.newReq(e.sales_associate,e.type_of_vehicle,e.deal_number,e.customer_name,e.stock_number,e.mileage,e.model,e.customer_care_package,e.accessories,e.list_accessories,e.detail_service)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group col-md-6"},[t("label",{attrs:{for:"sales_associate"}},[e._v("Sales Associate")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.sales_associate,expression:"sales_associate"}],staticClass:"form-control form-control-lg",attrs:{id:"sales_associate",required:""},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.sales_associate=a.target.multiple?t:t[0]}}},[t("option",{attrs:{selected:""}},[e._v("Please Select One...")]),e._v(" "),e._l(e.salesAssociates,function(a,s){return t("option",{key:s},[e._v(e._s(a))])})],2)]),e._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("label",{attrs:{for:"typeOfVehicle"}},[e._v("Type Of Vehicle Sold")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.type_of_vehicle,expression:"type_of_vehicle"}],staticClass:"form-control form-control-lg",attrs:{id:"typeOfVehicle",required:""},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.type_of_vehicle=a.target.multiple?t:t[0]}}},[t("option",{attrs:{selected:""}},[e._v("Please Select One...")]),e._v(" "),e._l(e.typeOfVehicle,function(a,s){return t("option",{key:s},[e._v(e._s(a))])})],2)])]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group col-md-6"},[t("label",{attrs:{for:"deal_number"}},[e._v("Deal Number")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.deal_number,expression:"deal_number"}],staticClass:"form-control form-control-lg",attrs:{type:"text",id:"deal_number",placeholder:"ex: 123456"},domProps:{value:e.deal_number},on:{input:function(a){a.target.composing||(e.deal_number=a.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("label",{attrs:{for:"customer_name"}},[e._v("Customer Name")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.customer_name,expression:"customer_name"}],staticClass:"form-control form-control-lg",attrs:{type:"text",id:"customer_name",placeholder:"ex: John Smith",required:""},domProps:{value:e.customer_name},on:{input:function(a){a.target.composing||(e.customer_name=a.target.value)}}})])]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group col-md-6"},[t("label",{attrs:{for:"stock_number"}},[e._v("Stock Number")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.stock_number,expression:"stock_number"}],staticClass:"form-control form-control-lg",attrs:{type:"text",id:"stock_number",placeholder:"ex: 123456",required:""},domProps:{value:e.stock_number},on:{input:function(a){a.target.composing||(e.stock_number=a.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("label",{attrs:{for:"mileage"}},[e._v("Mileage")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.mileage,expression:"mileage"}],staticClass:"form-control form-control-lg",attrs:{type:"text",id:"mileage",placeholder:"ex: 123,000",required:""},domProps:{value:e.mileage},on:{input:function(a){a.target.composing||(e.mileage=a.target.value)}}})])]),e._v(" "),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"model"}},[e._v("Vehicle Model")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"form-control form-control-lg",attrs:{id:"model",required:""},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.model=a.target.multiple?t:t[0]}}},[t("option",{attrs:{selected:""}},[e._v("Please Select One...")]),e._v(" "),e._l(e.vehicles,function(a,s){return t("option",{key:s},[e._v(e._s(a))])})],2)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group col-md-6"},[t("label",{attrs:{for:"customer_care_package"}},[e._v("Customer Care Package")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.customer_care_package,expression:"customer_care_package"}],staticClass:"form-control form-control-lg",attrs:{id:"customer_care_package",required:""},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.customer_care_package=a.target.multiple?t:t[0]}}},[t("option",{attrs:{selected:""}},[e._v("Please Select One...")]),e._v(" "),e._l(e.boolean,function(a,s){return t("option",{key:s},[e._v(e._s(a))])})],2)]),e._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("label",{attrs:{for:"accessories"}},[e._v("Accessories")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.accessories,expression:"accessories"}],staticClass:"form-control form-control-lg",attrs:{id:"accessories",required:""},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.accessories=a.target.multiple?t:t[0]}}},[t("option",{attrs:{selected:""}},[e._v("Please Select One...")]),e._v(" "),e._l(e.boolean,function(a,s){return t("option",{key:s},[e._v(e._s(a))])})],2)])]),e._v(" "),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"list_accessories"}},[e._v("List Accessories")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.list_accessories,expression:"list_accessories"}],staticClass:"form-control form-control-lg",attrs:{type:"text",id:"list_accessories",placeholder:"ex: Black kidney grilles..."},domProps:{value:e.list_accessories},on:{input:function(a){a.target.composing||(e.list_accessories=a.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"detail_service"}},[e._v("Detail Service")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.detail_service,expression:"detail_service"}],staticClass:"form-control form-control-lg",attrs:{id:"detail_service",required:""},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.detail_service=a.target.multiple?t:t[0]}}},[t("option",{attrs:{selected:""}},[e._v("Please Select One...")]),e._v(" "),e._l(e.detailServices,function(a,s){return t("option",{key:s},[e._v(e._s(a))])})],2)]),e._v(" "),t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit Make Ready Request")])])])])},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"col-sm-12"},[a("h1",{staticClass:"display-3"},[this._v("Make Ready Request")])])}]};var v=t("VU/8")(c,m,!1,function(e){t("n36Y")},"data-v-6f5b6502",null).exports,d={name:"New",data:function(){return{reqs:[],approvals:["Approved","Denied"],managers:["Barry Laird","Rolando Rocha","Miguel Valdez","Yvone Garcia","Don Wilkinson","Joshua Barazza"],completionSales:"",salesManager:""}},firestore:function(){return{reqs:V.collection("makeReady").where("type_of_vehicle","==","New").where("completionSales","==","Incomplete")}},methods:{updateSalesReq:function(e,a,t){""!==e&&""!==a&&("Approved"===e?V.collection("makeReady").doc(t).update({completionSales:"Approved",salesManager:a,completionFinance:"Incomplete",completionCarWash:"Incomplete",salesTimestamp:new Date}):V.collection("makeReady").doc(t).update({completionSales:"Denied",salesManager:a,salesTimestamp:new Date}))}}},u={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row"},[e._m(0),e._v(" "),e._l(e.reqs,function(a,s){return t("div",{key:s,staticClass:"card col-md-3"},[t("div",{staticClass:"card-body"},[t("h5",{staticClass:"card-title"},[e._v("Stock #: "+e._s(a.stock_number))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Sales Associate: "+e._s(a.sales_associate))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Deal #: "+e._s(a.deal_number))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Customer Name: "+e._s(a.customer_name))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Model: "+e._s(a.model))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Customer Care Package: "+e._s(a.customer_care_package))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Accessories: "+e._s(a.accessories))]),e._v(" "),a.accessories?t("p",{staticClass:"card-text"},[e._v("List Accessories: "+e._s(a.list_accessories))]):e._e(),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Detail Service: "+e._s(a.detail_service))]),e._v(" "),t("hr"),e._v(" "),t("form",{on:{submit:function(t){return t.preventDefault(),e.updateSalesReq(e.completionSales,e.salesManager,a.id)}}},[t("label",{attrs:{for:"completionSales"}},[e._v("Approval Status")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.completionSales,expression:"completionSales"}],staticClass:"form-control form-control-lg",attrs:{id:"completionSales",required:""},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.completionSales=a.target.multiple?t:t[0]}}},e._l(e.approvals,function(a,s){return t("option",{key:s},[e._v(e._s(a))])}),0),e._v(" "),t("hr"),e._v(" "),t("label",{attrs:{for:"salesManager"}},[e._v("Manager")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.salesManager,expression:"salesManager"}],staticClass:"form-control form-control-lg",attrs:{id:"salesManager",required:""},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.salesManager=a.target.multiple?t:t[0]}}},e._l(e.managers,function(a,s){return t("option",{key:s},[e._v(e._s(a))])}),0),e._v(" "),t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit")])])])])})],2)])},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"col-md-12"},[a("h1",{staticClass:"display-3"},[this._v("New Car Dispatch")])])}]};var _=t("VU/8")(d,u,!1,function(e){t("yFZC")},"data-v-32485948",null).exports,p={name:"Loaner",data:function(){return{reqs:[],approvals:["Approved","Denied"],managers:["Barry Laird","Rolando Rocha","Miguel Valdez","Yvone Garcia","Don Wilkinson","Joshua Barazza"],completionSales:"",salesManager:""}},firestore:function(){return{reqs:V.collection("makeReady").where("type_of_vehicle","==","Loaner").where("completionSales","==","Incomplete")}},methods:{updateSalesReq:function(e,a,t){""!==e&&""!==a&&("Approved"===e?V.collection("makeReady").doc(t).update({completionSales:"Approved",salesManager:a,completionFinance:"Incomplete",completionCarWash:"Incomplete",salesTimestamp:new Date}):V.collection("makeReady").doc(t).update({completionSales:"Denied",salesManager:a,salesTimestamp:new Date}))}}},f={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row"},[e._m(0),e._v(" "),e._l(e.reqs,function(a,s){return t("div",{key:s,staticClass:"card col-md-3"},[t("div",{staticClass:"card-body"},[t("h5",{staticClass:"card-title"},[e._v("Stock #: "+e._s(a.stock_number))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Sales Associate: "+e._s(a.sales_associate))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Deal #: "+e._s(a.deal_number))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Customer Name: "+e._s(a.customer_name))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Model: "+e._s(a.model))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Customer Care Package: "+e._s(a.customer_care_package))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Accessories: "+e._s(a.accessories))]),e._v(" "),a.accessories?t("p",{staticClass:"card-text"},[e._v("List Accessories: "+e._s(a.list_accessories))]):e._e(),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Detail Service: "+e._s(a.detail_service))]),e._v(" "),t("hr"),e._v(" "),t("form",{on:{submit:function(t){return t.preventDefault(),e.updateSalesReq(e.completionSales,e.salesManager,a.id)}}},[t("label",{attrs:{for:"completionSales"}},[e._v("Approval Status")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.completionSales,expression:"completionSales"}],staticClass:"form-control form-control-lg",attrs:{id:"completionSales",required:""},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.completionSales=a.target.multiple?t:t[0]}}},e._l(e.approvals,function(a,s){return t("option",{key:s},[e._v(e._s(a))])}),0),e._v(" "),t("hr"),e._v(" "),t("label",{attrs:{for:"salesManager"}},[e._v("Manager")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.salesManager,expression:"salesManager"}],staticClass:"form-control form-control-lg",attrs:{id:"salesManager",required:""},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.salesManager=a.target.multiple?t:t[0]}}},e._l(e.managers,function(a,s){return t("option",{key:s},[e._v(e._s(a))])}),0),e._v(" "),t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit")])])])])})],2)])},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"col-md-12"},[a("h1",{staticClass:"display-3"},[this._v("Loan Car Dispatch")])])}]};var C=t("VU/8")(p,f,!1,function(e){t("MyGw")},"data-v-2080003f",null).exports,h={name:"Preowned",data:function(){return{reqs:[],approvals:["Approved","Denied"],managers:["Barry Laird","Rolando Rocha","Miguel Valdez","Yvone Garcia","Don Wilkinson","Joshua Barazza"],completionSales:"",salesManager:""}},firestore:function(){return{reqs:V.collection("makeReady").where("type_of_vehicle","==","Pre-owned").where("completionSales","==","Incomplete")}},methods:{updateSalesReq:function(e,a,t){""!==e&&""!==a&&("Approved"===e?V.collection("makeReady").doc(t).update({completionSales:"Approved",salesManager:a,completionFinance:"Incomplete",completionCarWash:"Incomplete",salesTimestamp:new Date}):V.collection("makeReady").doc(t).update({completionSales:"Denied",salesManager:a,salesTimestamp:new Date}))}}},g={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row"},[e._m(0),e._v(" "),e._l(e.reqs,function(a,s){return t("div",{key:s,staticClass:"card col-md-3"},[t("div",{staticClass:"card-body"},[t("h5",{staticClass:"card-title"},[e._v("Stock #: "+e._s(a.stock_number))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Sales Associate: "+e._s(a.sales_associate))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Deal #: "+e._s(a.deal_number))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Customer Name: "+e._s(a.customer_name))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Model: "+e._s(a.model))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Customer Care Package: "+e._s(a.customer_care_package))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Accessories: "+e._s(a.accessories))]),e._v(" "),a.accessories?t("p",{staticClass:"card-text"},[e._v("List Accessories: "+e._s(a.list_accessories))]):e._e(),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Detail Service: "+e._s(a.detail_service))]),e._v(" "),t("hr"),e._v(" "),t("form",{on:{submit:function(t){return t.preventDefault(),e.updateSalesReq(e.completionSales,e.salesManager,a.id)}}},[t("label",{attrs:{for:"completionSales"}},[e._v("Approval Status")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.completionSales,expression:"completionSales"}],staticClass:"form-control form-control-lg",attrs:{id:"completionSales",required:""},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.completionSales=a.target.multiple?t:t[0]}}},e._l(e.approvals,function(a,s){return t("option",{key:s},[e._v(e._s(a))])}),0),e._v(" "),t("hr"),e._v(" "),t("label",{attrs:{for:"salesManager"}},[e._v("Manager")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.salesManager,expression:"salesManager"}],staticClass:"form-control form-control-lg",attrs:{id:"salesManager",required:""},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.salesManager=a.target.multiple?t:t[0]}}},e._l(e.managers,function(a,s){return t("option",{key:s},[e._v(e._s(a))])}),0),e._v(" "),t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit")])])])])})],2)])},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"col-md-12"},[a("h1",{staticClass:"display-3"},[this._v("TPO Dispatch")])])}]};var y=t("VU/8")(h,g,!1,function(e){t("oXB6")},"data-v-5fc44622",null).exports,b={name:"Finance",data:function(){return{reqs:[],approvals:["Claimed"],managers:["Finance 1","Finance 2","Finance 3","Finance 4"],completionSales:"",salesManager:""}},firestore:function(){return{reqs:V.collection("makeReady").where("completionSales","==","Approved").where("completionFinance","==","Incomplete")}},methods:{updateFinanceReq:function(e,a,t){""!==e&&""!==a&&V.collection("makeReady").doc(t).update({financeAssociate:a,completionFinance:"Complete",financeTimestamp:new Date})}}},k={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row"},[e._m(0),e._v(" "),e._l(e.reqs,function(a,s){return t("div",{key:s,staticClass:"card col-md-3"},[t("div",{staticClass:"card-body"},[t("h5",{staticClass:"card-title"},[e._v("Stock #: "+e._s(a.stock_number))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Sales Associate: "+e._s(a.sales_associate))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Deal #: "+e._s(a.deal_number))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Customer Name: "+e._s(a.customer_name))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Type of Vehicle: "+e._s(a.type_of_vehicle))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Model: "+e._s(a.model))]),e._v(" "),t("hr"),e._v(" "),t("form",{on:{submit:function(t){return t.preventDefault(),e.updateFinanceReq(e.completionSales,e.salesManager,a.id)}}},[t("label",{attrs:{for:"completionSales"}},[e._v("Approval Status")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.completionSales,expression:"completionSales"}],staticClass:"form-control form-control-lg",attrs:{id:"completionSales",required:""},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.completionSales=a.target.multiple?t:t[0]}}},e._l(e.approvals,function(a,s){return t("option",{key:s},[e._v(e._s(a))])}),0),e._v(" "),t("hr"),e._v(" "),t("label",{attrs:{for:"salesManager"}},[e._v("Finance Associate")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.salesManager,expression:"salesManager"}],staticClass:"form-control form-control-lg",attrs:{id:"salesManager",required:""},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.salesManager=a.target.multiple?t:t[0]}}},e._l(e.managers,function(a,s){return t("option",{key:s},[e._v(e._s(a))])}),0),e._v(" "),t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit")])])])])})],2)])},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"col-md-12"},[a("h1",{staticClass:"display-3"},[this._v("Finance Dispatch")])])}]};var S=t("VU/8")(b,k,!1,function(e){t("i1VT")},"data-v-8c709a98",null).exports,w={name:"Finance",data:function(){return{reqs:[],approvals:["In process"],managers:["Car Wash Associate 1","Car Wash Associate 2","Car Wash Associate 3","Car Wash Associate 4"],delivery:["Bay 1","Bay 2","Bay 3","Bay 4","Delivery Bay Overflow"],completionSales:"",salesManager:"",claimedStatus:"",carwashassociate:"",delivery_bay:""}},firestore:function(){return{reqs:V.collection("makeReady").where("completionSales","==","Approved").where("completionCarWash","==","Incomplete")}},methods:{claimed:function(e,a,t){V.collection("makeReady").doc(e).update({carWashClaimedAssociate:a,carwashClaimedTimestamp:new Date,carWashClaimedStatus:t,claimed:!1})},unclaimed:function(e,a,t){V.collection("makeReady").doc(e).update({carWashClaimedAssociate:"",carwashClaimedTimestamp:"",carWashClaimedStatus:"",claimed:!0})},complete:function(e,a,t,s){V.collection("makeReady").doc(e).update({completionCarWash:"Complete",carwashCompleteTimestamp:new Date,carWashClaimedStatus:"Complete",deliveryBay:s})}}},A={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row"},[e._m(0),e._v(" "),e._l(e.reqs,function(a,s){return t("div",{key:s,staticClass:"card col-md-3"},[t("div",{staticClass:"card-body"},[t("h5",{staticClass:"card-title"},[e._v("Stock #: "+e._s(a.stock_number))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Sales Associate: "+e._s(a.sales_associate))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Customer Name: "+e._s(a.customer_name))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Type of Vehicle: "+e._s(a.type_of_vehicle))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Model: "+e._s(a.model))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Detail Service: "+e._s(a.detail_service))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Car Wash Associate: "+e._s(a.carWashClaimedAssociate))]),e._v(" "),t("hr"),e._v(" "),a.claimed?t("label",{attrs:{for:"completionSales"}},[e._v("Status")]):e._e(),e._v(" "),a.claimed?t("select",{directives:[{name:"model",rawName:"v-model",value:a.carWashClaimedStatus,expression:"req.carWashClaimedStatus"}],staticClass:"form-control form-control-lg",attrs:{id:"completionSales",required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(a,"carWashClaimedStatus",t.target.multiple?s:s[0])}}},[t("option"),e._v(" "),e._l(e.approvals,function(a,s){return t("option",{key:s},[e._v(e._s(a))])})],2):e._e(),e._v(" "),a.claimed?t("hr"):e._e(),e._v(" "),a.claimed?t("label",{attrs:{for:"salesManager"}},[e._v("Car Wash Associate")]):e._e(),e._v(" "),a.claimed?t("select",{directives:[{name:"model",rawName:"v-model",value:a.carWashClaimedAssociate,expression:"req.carWashClaimedAssociate"}],staticClass:"form-control form-control-lg",attrs:{id:"salesManager",required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(a,"carWashClaimedAssociate",t.target.multiple?s:s[0])}}},[t("option"),e._v(" "),e._l(e.managers,function(a,s){return t("option",{key:s},[e._v(e._s(a))])})],2):e._e(),e._v(" "),a.claimed?t("hr"):e._e(),e._v(" "),a.claimed?e._e():t("label",{attrs:{for:"salesManager"}},[e._v("Delivery Bay")]),e._v(" "),a.claimed?e._e():t("select",{directives:[{name:"model",rawName:"v-model",value:a.deliveryBay,expression:"req.deliveryBay"}],staticClass:"form-control form-control-lg",attrs:{id:"salesManager"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(a,"deliveryBay",t.target.multiple?s:s[0])}}},[t("option"),e._v(" "),e._l(e.delivery,function(a,s){return t("option",{key:s},[e._v(e._s(a))])})],2),e._v(" "),a.claimed?t("button",{staticClass:"btn btn-primary",on:{click:function(t){return e.claimed(a.id,a.carWashClaimedAssociate,a.carWashClaimedStatus)}}},[e._v("Claim")]):e._e(),e._v(" "),a.claimed?e._e():t("button",{staticClass:"btn btn-primary",on:{click:function(t){return e.unclaimed(a.id,a.carWashClaimedAssociate,a.carWashClaimedStatus)}}},[e._v("Unclaim")]),e._v(" "),a.claimed?e._e():t("button",{staticClass:"btn btn-primary",on:{click:function(t){return e.complete(a.id,a.carWashClaimedAssociate,a.carWashClaimedStatus,a.deliveryBay)}}},[e._v("Complete")])])])})],2)])},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"col-md-12"},[a("h1",{staticClass:"display-3"},[this._v("Car Wash Dispatch")])])}]};var x=t("VU/8")(w,A,!1,function(e){t("lau1")},"data-v-a1ffed0e",null).exports,M={name:"Finance",data:function(){return{reqs:[],approvals:["Claimed"],managers:["Jason","Krystal","Martin","Carlos","Chris","Red","John","Freddie","Victor","Daniel","Kevin","Alan","Russ"],delivery:["Bay 1","Bay 2","Bay 3","Bay 4","Delivery Bay Overflow"],completionSales:"",salesManager:"",claimedStatus:"",carwashassociate:"",delivery_bay:""}},firestore:function(){return{reqs:V.collection("makeReady").where("customer_care_package","==","Yes").where("completionSales","==","Approved").where("partsClaimed","==",!0)}},methods:{claimed:function(e,a,t){V.collection("makeReady").doc(e).update({partsClaimedAssociate:a,partsClaimedTimestamp:new Date,partsClaimedStatus:t,partsClaimed:!1})},unclaimed:function(e,a,t){V.collection("makeReady").doc(e).update({carWashClaimedAssociate:"",carwashClaimedTimestamp:"",carWashClaimedStatus:"",claimed:!0})},complete:function(e,a,t,s){V.collection("makeReady").doc(e).update({completionCarWash:"Complete",carwashCompleteTimestamp:new Date,carWashClaimedStatus:"Complete",deliveryBay:s})}}},q={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row"},[e._m(0),e._v(" "),e._l(e.reqs,function(a,s){return t("div",{key:s,staticClass:"card col-md-3"},[t("div",{staticClass:"card-body"},[t("h5",{staticClass:"card-title"},[e._v("Stock #: "+e._s(a.stock_number))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Sales Associate: "+e._s(a.sales_associate))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Customer Name: "+e._s(a.customer_name))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Type of Vehicle: "+e._s(a.type_of_vehicle))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Customer Care Package: "+e._s(a.customer_care_package))]),e._v(" "),t("p",{staticClass:"card-text"},[e._v("Parts Associate: "+e._s(a.partsClaimedAssociate))]),e._v(" "),t("hr"),e._v(" "),a.partsClaimed?t("label",{attrs:{for:"completionSales"}},[e._v("Status")]):e._e(),e._v(" "),a.partsClaimed?t("select",{directives:[{name:"model",rawName:"v-model",value:a.partsClaimedStatus,expression:"req.partsClaimedStatus"}],staticClass:"form-control form-control-lg",attrs:{id:"completionSales",required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(a,"partsClaimedStatus",t.target.multiple?s:s[0])}}},[t("option"),e._v(" "),e._l(e.approvals,function(a,s){return t("option",{key:s},[e._v(e._s(a))])})],2):e._e(),e._v(" "),a.partsClaimed?t("hr"):e._e(),e._v(" "),a.partsClaimed?t("label",{attrs:{for:"salesManager"}},[e._v("Parts Associate")]):e._e(),e._v(" "),a.partsClaimed?t("select",{directives:[{name:"model",rawName:"v-model",value:a.partsClaimedAssociate,expression:"req.partsClaimedAssociate"}],staticClass:"form-control form-control-lg",attrs:{id:"salesManager",required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(a,"partsClaimedAssociate",t.target.multiple?s:s[0])}}},[t("option"),e._v(" "),e._l(e.managers,function(a,s){return t("option",{key:s},[e._v(e._s(a))])})],2):e._e(),e._v(" "),a.partsClaimed?t("button",{staticClass:"btn btn-primary",on:{click:function(t){return e.claimed(a.id,a.partsClaimedAssociate,a.partsClaimedStatus)}}},[e._v("Claim")]):e._e(),e._v(" "),a.partsClaimed?e._e():t("button",{staticClass:"btn btn-primary",on:{click:function(t){return e.unclaimed(a.id,a.carWashClaimedAssociate,a.carWashClaimedStatus)}}},[e._v("Unclaim")]),e._v(" "),a.partsClaimed?e._e():t("button",{staticClass:"btn btn-primary",on:{click:function(t){return e.complete(a.id,a.carWashClaimedAssociate,a.carWashClaimedStatus,a.deliveryBay)}}},[e._v("Complete")])])])})],2)])},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"col-md-12"},[a("h1",{staticClass:"display-3"},[this._v("Customer Care Package Dispatch")])])}]};var R=t("VU/8")(M,q,!1,function(e){t("rmoq")},"data-v-151b94aa",null).exports,D={name:"Finance",data:function(){return{reqs:[]}},firestore:function(){return{reqs:V.collection("makeReady")}},methods:{dateFormat:function(e){return new Date(1e3*e.seconds).toLocaleString()}}},W={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("table",{staticClass:"table"},[e._m(0),e._v(" "),t("tbody",e._l(e.reqs,function(a,s){return t("tr",{key:s},[t("th",[e._v(e._s(s+1))]),e._v(" "),t("td",[e._v(e._s(a.stock_number))]),e._v(" "),t("td",[e._v(e._s(a.sales_associate))]),e._v(" "),t("td",[e._v(e._s(e.dateFormat(a.salesTimestamp)))]),e._v(" "),t("td",[e._v(e._s(e.dateFormat(a.partsClaimedTimestamp)))]),e._v(" "),t("td",[e._v(e._s(e.dateFormat(a.financeTimestamp)))]),e._v(" "),t("td",[e._v(e._s(e.dateFormat(a.carwashClaimedTimestamp)))]),e._v(" "),t("td",[e._v(e._s(e.dateFormat(a.carwashCompleteTimestamp)))])])}),0)])},staticRenderFns:[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("thead",{staticClass:"thead-dark"},[t("tr",[t("th",{attrs:{scope:"col"}},[e._v("#")]),e._v(" "),t("th",{attrs:{scope:"col"}},[e._v("Stk #")]),e._v(" "),t("th",{attrs:{scope:"col"}},[e._v("Sales Associate")]),e._v(" "),t("th",{attrs:{scope:"col"}},[e._v("Sales Approval Timestamp")]),e._v(" "),t("th",{attrs:{scope:"col"}},[e._v("Customer Care Package Timestamp")]),e._v(" "),t("th",{attrs:{scope:"col"}},[e._v("Finance Claimed Timestamp")]),e._v(" "),t("th",{attrs:{scope:"col"}},[e._v("Car Wash Claimed Timestamp")]),e._v(" "),t("th",{attrs:{scope:"col"}},[e._v("Car Wash Complete Timestamp")])])])}]};var N=t("VU/8")(D,W,!1,function(e){t("yyX5")},"data-v-227f0eb8",null).exports;s.a.use(l.a);var F=new l.a({routes:[{path:"/",name:"Home",component:v},{path:"/newcar",name:"Newcar",component:_},{path:"/loancar",name:"Loaner",component:C},{path:"/preowned",name:"Preowned",component:y},{path:"/finance",name:"Finance",component:S},{path:"/carwash",name:"Carwash",component:x},{path:"/customercarepackage",name:"CustomerCarePackage",component:R},{path:"/metrics",name:"Metrics",component:N}]}),T=t("hnaQ"),P=t("yviF"),B=t.n(P);t("881v");t.d(a,"db",function(){return V}),s.a.config.productionTip=!1,s.a.use(T.a),B.a.initializeApp({projectId:"makeready-1021a",databaseURL:"https://makeready-1021a.firebaseio.com"});var V=B.a.firestore();new s.a({el:"#app",router:F,components:{App:o},template:"<App/>"})},NrCf:function(e,a){},i1VT:function(e,a){},lau1:function(e,a){},n36Y:function(e,a){},oXB6:function(e,a){},rmoq:function(e,a){},yFZC:function(e,a){},yyX5:function(e,a){}},["NHnr"]);
//# sourceMappingURL=app.c72ba0b9b00b3735b3ad.js.map