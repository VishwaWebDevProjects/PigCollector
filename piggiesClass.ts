import {piggiesGeneralFeatures} from './piggiesSetup'

export class Pigs implements piggiesGeneralFeatures {
    piggyName: string;
    piggyHeight: string;
    piggyWeight: string;
    piggyPersonality: string;
    piggyCategory: string;
    piggyBreed: string;
    piggyUniqueAbility: string;

    constructor (piggyName: string, piggyHeight: string, piggyWeight: string, piggyPersonality: string, piggyCategory: string, piggyBreed: string, piggyUniqueAbility: string) {
        this.piggyName = piggyName;
        this.piggyHeight = piggyHeight;
        this.piggyWeight = piggyWeight;
        this.piggyPersonality = piggyPersonality;
        this.piggyCategory = piggyCategory;
        this.piggyBreed = piggyBreed;
        this.piggyUniqueAbility = piggyUniqueAbility;
    }
}