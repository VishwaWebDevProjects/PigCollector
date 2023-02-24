System.register([], function (exports_1, context_1) {
    "use strict";
    var piggiesGeneralFeatures;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            piggiesGeneralFeatures = class piggiesGeneralFeatures {
                constructor(piggyName, piggyHeight, piggyWeight, piggyPersonality, piggyCategory, piggyBreed, piggyUniqueAbility) {
                    this.piggyName = piggyName;
                    this.piggyHeight = piggyHeight;
                    this.piggyWeight = piggyWeight;
                    this.piggyPersonality = piggyPersonality;
                    this.piggyCategory = piggyCategory;
                    this.piggyBreed = piggyBreed;
                    this.piggyUniqueAbility = piggyUniqueAbility;
                }
            };
            exports_1("piggiesGeneralFeatures", piggiesGeneralFeatures);
        }
    };
});
