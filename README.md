## pokedex.js

Tenemos que modelar una Pokedex. Inicialmente un entrenador pokemon no sabe cuantos pokemons hay en el mundo, pero sabe que cuando ve un pokemon, puede identificar su nombre, que numero es y el tipo. Pero no las caracteristicas. Y si veo a un pokemon, debo anotar en algun lado, la “cantidad de veces que lo vi.” 

Por otro lado, si un entrenador atrapa a un pokemon, El pokemon nos va a poder decir todas sus caracteristicas, y la pokedex debe poder actaulizarse (pokedex del entrenador).

Si un entrenador **atrapa** a un pokemon que ya tiene, debemos aumentar el numero de pokemones atrapados para ese pokemon en 1. Ejemplo: Si atrape 2 charmander’s, en la pokedex me debe aparecer todo el detalle del charmander, y un detalle mas es el “numero de veces atrapado”.

## ayudantes.js

Sabemos que los entrenadores tienen pokemons. Pero de donde los sacaron?

Tenemos que crear una funcionalidad nueva que nos permita atrapar a un pokemon.

Por otro lado, debemos crear la clase Enfermera Joy, que nos permitira crear enfermeras joy, si son muchas. Una por pueblo.

Una enfermera joy, debe tener la capacidad de poder sanar a todos los pokemones de un entrenador.

Por otro lado, debemos crear una guarderia de pokemones. Donde podremos mandarlos, en los casos que no tengamos espacio encima o que no queramos tener. Tambien debo poder obtener de la guarderia un pokemon, siempre y cuando tenga espacio en mi bolso (limite 6).

## integrado.js

Crea un archivo integrado.js donde puedan importar las clases de pokedex.js y ayudantes.js

En el archivo integrado, deben utilizar todas las clases que esten en ayudante.js y en pokedex.js 
Deben instanciar clases (crear objetos), y explicarme el 26/09 el ejercicio que hicieron.

en pokemon-game.js deje un ejemplo de como se puede "exportar" una clase. Y en pokedex.js, como se puede importar.

Usen esto de ejemplo para poder utilizar las clases en integrado.js


Finalmente, creen un branch en este repositorio, agreguen todo lo que necesiten y creen un Pull Request con sus cambios.

Si lo desean pueden agregar un Explicacion.md con un texto explicativo y descriptivo.