import {Pigs} from './piggiesClass'

interface PigAdder {
    add(p: Pigs): void;
    remove(stringKey: string): void;
    removeAll() : void;
}

export class PigController implements PigAdder {
    constructor() {
    }

    add(p: Pigs): void {
        localStorage.setItem(p.piggyCategory + " " + p.piggyName + p.piggyHeight + p.piggyWeight + p.piggyPersonality +  p.piggyBreed + 
        p.piggyUniqueAbility, JSON.stringify(p));
    }

    remove(stringKey: string) {
        localStorage.removeItem(stringKey);
    }

    removeAll(): void {
        localStorage.clear();
    }
}
