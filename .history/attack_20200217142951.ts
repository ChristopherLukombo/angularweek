export class Attack {
    public nom: string;
    public speed: number;
    public defense: number = 200;
    public attack: number;
    public pv: number = 200;
    public position: number = 0;

    constructor(nom: string, speed: number) {
        this.nom = nom;
        this.speed = speed;
    }

}
