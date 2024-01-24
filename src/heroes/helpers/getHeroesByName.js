import { heroes } from "../data/heroes";

export const getHeroesByName = (name = '') => {
    
    // note con trim sacamos los espacios adelante y atras
    name = name.toLowerCase().trim();

    //note si length es 0 significa que el usuario no busco nada
    if(name.length === 0 ) return [];

    //note el includes verifica si name esta en la palabra superhero
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));
}
