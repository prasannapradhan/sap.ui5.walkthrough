sap.ui.define([
	"sap/ui/core/ComponentContainer"
], (ComponentContainer) => {
	"use strict";
	new ComponentContainer({
		"name" : "ui5.walkthrough",
		"setthings" : {
			"id" : "walkthrough"
		},
		async : true
	}).placeAt("content");
});
