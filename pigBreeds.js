System.register([], function (exports_1, context_1) {
    "use strict";
    var whitePigBreeds, greyPigBreeds, chestNutPigBreeds, blackPigBreeds;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (whitePigBreeds) {
                whitePigBreeds[whitePigBreeds["Large White"] = 0] = "Large White";
                whitePigBreeds[whitePigBreeds["Middle White"] = 1] = "Middle White";
                whitePigBreeds[whitePigBreeds["Small White"] = 2] = "Small White";
            })(whitePigBreeds || (whitePigBreeds = {}));
            exports_1("whitePigBreeds", whitePigBreeds);
            (function (greyPigBreeds) {
                greyPigBreeds[greyPigBreeds["Large Grey"] = 0] = "Large Grey";
                greyPigBreeds[greyPigBreeds["Middle Grey"] = 1] = "Middle Grey";
                greyPigBreeds[greyPigBreeds["Small Grey"] = 2] = "Small Grey";
            })(greyPigBreeds || (greyPigBreeds = {}));
            exports_1("greyPigBreeds", greyPigBreeds);
            (function (chestNutPigBreeds) {
                chestNutPigBreeds[chestNutPigBreeds["Large Chestnut"] = 0] = "Large Chestnut";
                chestNutPigBreeds[chestNutPigBreeds["Middle Chestnut"] = 1] = "Middle Chestnut";
                chestNutPigBreeds[chestNutPigBreeds["Small Chestnut"] = 2] = "Small Chestnut";
            })(chestNutPigBreeds || (chestNutPigBreeds = {}));
            exports_1("chestNutPigBreeds", chestNutPigBreeds);
            (function (blackPigBreeds) {
                blackPigBreeds[blackPigBreeds["Large Black"] = 0] = "Large Black";
                blackPigBreeds[blackPigBreeds["Middle Black"] = 1] = "Middle Black";
                blackPigBreeds[blackPigBreeds["Small Black"] = 2] = "Small Black";
            })(blackPigBreeds || (blackPigBreeds = {}));
            exports_1("blackPigBreeds", blackPigBreeds);
        }
    };
});
