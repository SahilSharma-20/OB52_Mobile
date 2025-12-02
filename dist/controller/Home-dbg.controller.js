sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("zob.zfiob52.controller.Home", {

        onSubmit: function () {
            const oInput = this.byId("postingPeriodInput");
            const value = oInput.getValue().trim();

            if (value === "9000") {
                // Navigate to Main view
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Main");
            } else {
                MessageBox.error("Invalid Posting Variant");
                oInput.setValue("");
            }
        }

    });
});
