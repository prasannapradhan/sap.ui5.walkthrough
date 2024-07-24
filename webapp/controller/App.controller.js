sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
	"sap/m/MessageToast"
], (Controller, JSONModel, ResourceModel, MessageToast) => {
    "use strict";
    return Controller.extend("ui.walkthrough.controller.App", {
        onInit: function() {
            const jmodel = new JSONModel({
                    "recepient": {
                        "name": "Prasanna"
                    }
            });
            this.getView().setModel(jmodel);

            const lmodel = new ResourceModel({
                bundleName : "ui5.walkthrough.i18n.i18n"
            });
            this.getView().setModel(lmodel, "i18n");


        },
        onSayHelloButtonPress() {
            const cview = this.getView();
            const rb = cview.getModel("i18n").getResourceBundle();
            const rn = cview.getModel().getProperty("/recepient/name");
            MessageToast.show(rb.getText("helloMsg", [rn]));
        }
    })
});