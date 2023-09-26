import { Game } from "./pokemon-game";
/*
Tenemos que modelar una Pokedex. 
Inicialmente un entrenador pokemon no sabe cuantos pokemons hay en el mundo, 
pero sabe que cuando *ve* un pokemon, puede identificar su nombre, que numero es y el tipo. Pero no las caracteristicas. 

 Y si veo a un pokemon, debo anotar en algun lado, la “cantidad de veces que lo vi.” 

 //


Por otro lado, si un entrenador atrapa a un pokemon, 
El pokemon nos va a poder decir todas sus caracteristicas, y la pokedex debe poder actaulizarse (pokedex del entrenador).

Si un entrenador atrapa a un pokemon que ya tiene, 
debemos aumentar el numero de pokemones atrapados para ese pokemon en 1. 
Ejemplo: Si atrape 2 charmander’s, en la pokedex me debe aparecer todo el detalle del charmander, 
y un detalle mas es el “numero de veces atrapado”.
*/



// Entidades
    // ENTRENADOR
        // pokedex
    // POKEMON
    // POKEDEX
        // total_pokemones_visto
        // pokemones[] = inicialmnete vacio (constructor pokemones = [])
            // id = numerico
            // nombre
            // tipo
            // cantidad_veces_visto
            // cantidad_capturados
        // registrar_pokemon_visto(pokemon)
            //  -> primero busco en mis pokemones, si el id del pokemon, lo tengo visto.
            //  si lo tengo visto -> aumento en 1 la cantidad_veces_visto
            //  si no lo tengo visto -> lo registro (id, nombre, tipo), la cantidad_veces_visto = 1
        // registrar_pokemon_atrapado(pokemon_mas_completo {id, tipo, nombre, peso, base {hp, str, def, vel}})
            //  primero busco en mis pokemones, si el id del pokemon, lo tengo visto.
            //  si lo tengo visto -> aumento en 1 la cantidad_veces_visto
            //  si no lo tengo visto -> lo registro (id, nombre, tipo), la cantidad_veces_visto = 1
            // registrar los datos Extra del pokemon en mi pokedex

class Pokedex {
    constructor(){
        this.totalPokemonesVisto = 0;
        this.pokemones = [];
    }

    registrarPokemonVisto(nuevoPokemonVisto) {
        const pokemonEncontrado = this.pokemonBuscado(nuevoPokemonVisto);
        if(pokemonEncontrado !== undefined) {
            pokemonEncontrado.cantidadVecesVisto += 1;
        } else {
            const nuevoPokemon = {
                id: nuevoPokemonVisto.id,
                nombre: nuevoPokemonVisto.nombre,
                tipo: nuevoPokemonVisto.tipo,
                cantidadVecesVisto: 1,
                cantidadVecesAtrapado: 0
            }
            this.pokemones.push(nuevoPokemon);
            this.totalPokemonesVisto += 1;
        }
        return;
    }
    registrarPokemonAtrapado(nuevoPokemonAtrapado){
        this.registrarPokemonVisto(nuevoPokemonAtrapado);
        const pokemonEncontrado = this.buscarPokemon(nuevoPokemonAtrapado);
        pokemonEncontrado.peso = nuevoPokemonAtrapado.peso;
        pokemonEncontrado.base = nuevoPokemonAtrapado.base;
        pokemonEncontrado.cantidadVecesAtrapado += 1;
    }

    buscarPokemon(pokemonBuscado) {
        return this.pokemones.find(
            pokemon => pokemon.id === pokemonBuscado.id
        );
    }

}

// cerrado