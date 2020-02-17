import { Pokemon } from "./pokemon";

export class Attack {
    public pourcentage: number;
    public degat: number;
    public name: string;

    constructor(name: string, degat: number, pourcentage: number) {
        this.name = name;
        this.degat = degat;
        this.pourcentage = pourcentage;
    }

}
