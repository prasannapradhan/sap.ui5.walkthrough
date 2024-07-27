sap.ui.define([
	"sap/ui/core/util/MockServer",
	"sap/base/util/UriParameters"
], function(MockServer, UriParameters) {
	"use strict";

	return {
        init(){
            const ms = new MockServer({
                rootUri: sap.ui.require.toUrl("ui5/walkthrough") + "/V2/Northwind/Northwind.svc/"
            });
            const params = new UriParameters(window.location.search);
            MockServer.config({
                autoRespond: true,
                autoRespondAfter: params.get("serverDelay") || 500
            });

            const spath = sap.ui.require.toUrl("ui5/walkthrough/localService");
            ms.simulate(spath + "/metadata.xml", spath + "/mockdata");

            ms.start();
        }
    };
});