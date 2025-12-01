sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("zob.zfiob52.controller.Main", {

        onInit: function () {
            const rows = [
                { A: "+", FromAcc: "", ToAcc: "", FromPer1: "6", Year1: "2025", ToPer1: "12", Year2: "2025", FromPer2: "6", Year3: "2025", ToPer2: "12", Year4: "2025", AuthGrp: "" },
                { A: "A", FromAcc: "ZZZZZZZZZZ", ToAcc: "ZZZZZZZZZZ", FromPer1: "12", Year1: "2024", ToPer1: "12", Year2: "2024", FromPer2: "5", Year3: "2025", ToPer2: "9", Year4: "2025", AuthGrp: "Z001" },
                { A: "D", FromAcc: "ZZZZZZZZZZ", ToAcc: "ZZZZZZZZZZ", FromPer1: "12", Year1: "2024", ToPer1: "12", Year2: "2024", FromPer2: "5", Year3: "2025", ToPer2: "9", Year4: "2025", AuthGrp: "Z001" },
                { A: "K", FromAcc: "ZZZZZZZZZZ", ToAcc: "ZZZZZZZZZZ", FromPer1: "12", Year1: "2024", ToPer1: "12", Year2: "2024", FromPer2: "5", Year3: "2025", ToPer2: "9", Year4: "2025", AuthGrp: "Z001" },
                { A: "M", FromAcc: "ZZZZZZZZZZ", ToAcc: "ZZZZZZZZZZ", FromPer1: "12", Year1: "2024", ToPer1: "12", Year2: "2024", FromPer2: "5", Year3: "2025", ToPer2: "9", Year4: "2025", AuthGrp: "Z001" },
                { A: "S", FromAcc: "101100", ToAcc: "122999", FromPer1: "12", Year1: "2024", ToPer1: "12", Year2: "2024", FromPer2: "5", Year3: "2025", ToPer2: "9", Year4: "2025", AuthGrp: "Z001" },
                { A: "S", FromAcc: "123000", ToAcc: "123062", FromPer1: "12", Year1: "2024", ToPer1: "12", Year2: "2024", FromPer2: "5", Year3: "2025", ToPer2: "9", Year4: "2025", AuthGrp: "Z001" },
                { A: "S", FromAcc: "123063", ToAcc: "124099", FromPer1: "12", Year1: "2024", ToPer1: "12", Year2: "2024", FromPer2: "5", Year3: "2025", ToPer2: "9", Year4: "2025", AuthGrp: "Z001" },
                { A: "S", FromAcc: "124100", ToAcc: "124170", FromPer1: "12", Year1: "2024", ToPer1: "12", Year2: "2024", FromPer2: "5", Year3: "2025", ToPer2: "9", Year4: "2025", AuthGrp: "Z001" },
                { A: "S", FromAcc: "124171", ToAcc: "ZZZZZZZZZZ", FromPer1: "12", Year1: "2024", ToPer1: "12", Year2: "2024", FromPer2: "5", Year3: "2025", ToPer2: "9", Year4: "2025", AuthGrp: "Z001" }
            ];

            const model = new JSONModel({ rows });
            this.getView().setModel(model, "ob52");
        },

        formatPeriodText: function (value) {
            const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            const idx = parseInt(value, 10);
            if (isNaN(idx) || idx < 1 || idx > 16) return "";

            if (idx <= 12) return "(" + months[idx] + ")";
            return "(N-" + months[idx - 12] + ")";
        },

        onPeriodChange: function () {
            this.getView().getModel("ob52").refresh(true);
        },

       onUpdate: function () {
    const data = this.getView().getModel("ob52").getData().rows;
    console.log("Updated data:", data);
    
    // Using MessageBox instead of MessageToast
    sap.m.MessageBox.show(
        "Changes Updated!", {
            icon: sap.m.MessageBox.Icon.INFORMATION,
            title: "Update",
            actions: [sap.m.MessageBox.Action.OK]
        }
    );
},


        onYearChange: function () {
            // optional
        },

        onNavBack: function () {
            this.getOwnerComponent().getRouter().navTo("Home");
        }
    });
});
