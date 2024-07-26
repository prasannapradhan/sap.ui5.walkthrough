sap.ui.define([], () => {
	"use strict";
    return {
        statusText(astatus){
            const rb = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            switch (astatus) {
                case "A":
                    return rb.getText("invoiceStatusA");
                    break;
                case "B":
                    return rb.getText("invoiceStatusB");
                    break;
                case "C":
                    return rb.getText("invoiceStatusC");
                    break;
                default:
                    return astatus;
                    break;
            }
        }
    }
});