sap.ui.define([
	"sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (UIComponent,
	JSONModel) => {
	"use strict";
    return UIComponent.extend("ui5.walkthrough.Component", {
        init(){
            UIComponent.prototype.init.apply(this, arguments);
            const dm = new JSONModel({"recipient" : { "name" : "prasanna"}});
            this.setModel(dm, "app");
        }
    });
});