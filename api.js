const lista=document.querySelector('#lista')
const botonCero=document.querySelector('#boton0')
const botonUno=document.querySelector('#boton1')
let valor=0

const obtenerPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=${valor}`)
    .then(pedro=>pedro.json())
    .then(pedroDos=>mostrarPokemon(pedroDos.results))
    .catch(error=> error)
    .finally(()=>console.log('se termino de ejecutar la api'))
 }

 obtenerPokemon()


 const mostrarPokemon = (pokemones) => {
   
    for (const pokemon of pokemones) {
        console.log(pokemon.name)
        lista.innerHTML += `<li>${pokemon.name}  
        </li>`
    }
  
  }

  const paginaUno = (parametro) => {
    
  }

  //eventos
botonCero.addEventListener('click',paginaCero)

botonUno.addEventListener('click',paginaUno)


/*
metodos del tipo HTTP

post==>crear

get==>leer

put==>actualizar

delete==> eliminar

*/
