sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/routing/History'
], function(Controller,History) {
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
        },
        onNavBack(e){
            const history = History.getInstance();
            const phash = history.getPreviousHash();
            if(phash !== undefined){
                window.history.go(-1);
            }else {
                const rtr = this.getOwnerComponent().getRouter();
                rtr.navTo("overview", {}, true);
            }
        }
    });
});