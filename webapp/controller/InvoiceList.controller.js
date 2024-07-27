sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    '../model/formatter',
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, JSONModel, fmtr, Filter, FilterOperator) {
    'use strict';
     return Controller.extend("ui5.walkthrough.controller.InvoiceList", {
        formatter: fmtr,
        onInit(){
            const cmodel = new JSONModel({
                "currency": "EUR"
            });
            this.getView().setModel(cmodel, "view");
        },
        onFilterInvoices(e){
            const fl = [];
            const skey = e.getParameter("query");
            if(skey){
                fl.push(new Filter("ProductName", FilterOperator.Contains, skey));
            } 
            const ilist = this.byId("invoiceList");
            const litems = ilist.getBinding("items");
            litems.filter(fl);
        },
        navigateDetail(e){
            const rtr = this.getOwnerComponent().getRouter();
            const ix = e.getSource();
            const ipath = window.encodeURIComponent(ix.getBindingContext("invoice").getPath().substr(1));
            rtr.navTo("detail", {
                invoicePath: ipath
            });
        }
     })
});