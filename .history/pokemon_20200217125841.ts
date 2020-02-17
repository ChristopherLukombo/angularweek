export class pokemon {
    private nom;
    private speed;

    constructor(nom: string, speed: number) {
        this.nom = nom;
        this.speed = speed;
     }

    canAttacked(pokemon1: pokemon, pokemon2: pokemon): boolean {
        if (pokemon1.speed)
         return pokemon1;
    };
}