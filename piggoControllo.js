System.register([], function (exports_1, context_1) {
    "use strict";
    var PigController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            PigController = class PigController {
                constructor() {
                }
                add(p) {
                    localStorage.setItem(p.piggyCategory + " " + p.piggyName + p.piggyHeight + p.piggyWeight + p.piggyPersonality + p.piggyBreed +
                        p.piggyUniqueAbility, JSON.stringify(p));
                }
                remove(stringKey) {
                    localStorage.removeItem(stringKey);
                }
                removeAll() {
                    localStorage.clear();
                }
            };
            exports_1("PigController", PigController);
        }
    };
});
