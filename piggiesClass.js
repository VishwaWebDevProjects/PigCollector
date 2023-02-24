System.register([], function (exports_1, context_1) {
    "use strict";
    var Pigs;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Pigs = class Pigs {
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
            exports_1("Pigs", Pigs);
        }
    };
});
