sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], (xview) => {
	"use strict";
	xview.create({
		viewName: "ui5.walkthrough.view.App"
	}).then((oView) => {
		oView.placeAt("content");
	});
});
