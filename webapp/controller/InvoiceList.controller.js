sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function(Controller, JSONModel) {
    'use strict';
     return Controller.extend("ui.walkthrough.controller.InvoiceList", {
        onInit(){
            const cmodel = new JSONModel({
                "currency": "EUR"
            });
            this.getView().setModel(cmodel, "view");
        }
     })
});