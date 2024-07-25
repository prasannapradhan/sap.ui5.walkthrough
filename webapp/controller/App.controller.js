sap.ui.define([
    'sap/ui/core/mvc/Controller',
	"sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";
    return Controller.extend("ui.walkthrough.controller.App", {
        onSayHelloButtonPress() {
            const cview = this.getView();
            const dmodel = cview.getModel("app");
            const rn = dmodel.getProperty("/recipient/name");
            MessageToast.show(rb.getText("helloMsg", [rn]));
        }
    })
});