sap.ui.define([
    'sap/ui/core/mvc/Controller',
], function(Controller) {
    'use strict';
    return Controller.extend("ui5.walkthrough.controller.Detail",{
        onInit(){
            const rtr = this.getOwnerComponent().getRouter();
            rtr.getRoute("detail").attachPatternMatched(this.onObjectMatched, this);
        },
        onObjectMatched(e){
            this.getView().bindElement({
                path: "/" + window.decodeURIComponent(e.getParameter("arguments").invoicePath),
                model: "invoice"
            });
        }
    });
});