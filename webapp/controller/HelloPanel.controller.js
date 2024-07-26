sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function(Controller,MessageBox) {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.HelloPanel", {
        onSayHelloButtonPress(){
            const cview = this.getView();
            const rb = cview.getModel("i18n").getResourceBundle();
            const am = cview.getModel("app");
            const rn = am.getProperty("/recipient/name");
            MessageBox.show(rb.getText("helloMsg", [rn]));
        }
	});
});