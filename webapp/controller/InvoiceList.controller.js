sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    '../model/formatter'
], function(Controller, JSONModel, fmtr) {
    'use strict';
     return Controller.extend("ui5.walkthrough.controller.InvoiceList", {
        formatter: fmtr,
        onInit(){
            const cmodel = new JSONModel({
                "currency": "EUR"
            });
            this.getView().setModel(cmodel, "view");
        }
     })
});