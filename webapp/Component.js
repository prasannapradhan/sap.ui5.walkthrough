sap.ui.define([
	"sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (UIComponent,
	JSONModel,
	ResourceModel) => {
	"use strict";
    return UIComponent.extend("ui.walkthrough.Component", {
        metadata : {
            interfaces : ["sap.ui.core.IAsyncContentCreation"],
            rootView : {
                viewName : "ui5.walkthrough.view.App",
                type : "XML",
                id : "app"
            }
        },
        init(){
            UIComponent.prototype.init.apply(this, arguments);
            const dm = new JSONModel({"recipient" : { "name" : "prasanna"}});
            const im = new ResourceModel({"bundleName" : "ui5.walkthrough.i18n.i18n"});
            this.setModel(dm, "app");
            this.setModel(im, "i18n");
        }
    });
});