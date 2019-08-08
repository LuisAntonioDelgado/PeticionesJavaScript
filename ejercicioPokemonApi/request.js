

// const request= require('request');

// const URL='https://pokeapi.co/api/v2/pokemon/';

// getPokemonById=(id)=>{

//     let url=URL+id
//     request.get(url,(error,response,body)=>{

//         const json=JSON.parse(body);
//         console.log(json.name);
//     })

// }

// getPokemonById('4')

///////////////////////////////////////////////Ejercicio 1/////////////////////////////////////

// const request= require('request');

// const URL='https://pokeapi.co/api/v2/pokemon/';

// getPokemonById=(id)=>{

//     let url=URL+id
//     request.get(url,(error,response,body)=>{

//         const json=JSON.parse(body);
//         console.log(`Èl nombre de mi pokemon es: ${json.name} \nLos Movimientos son: \n-${json.moves[0].move.name}\n-${json.moves[1].move.name}\n-${json.moves[2].move.name}`);

//     })

// }

// getPokemonById('143')


/////////////////////////////////////////////// Ejercicio con Foreach Pokemon///////////////////////////////////////////////////////////////


// const request = require('request');


// const getPokemon = (id) => {
//     const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
//         request.get(URL,(error,response,body)=>{
        
//             response.statusCode === 200 
//             ? 
//             JSON.parse(body).moves.forEach((e,i) => {
//                if(i <= 4){
//                    console.log(e.move.name)
//                }
//             })
//             : 
//             console.log(`No se hizo la petición, código: ${response.statusCode}` )

            
//     })
// }

// getPokemon(3)



/////////////////////////////////////////////// Ejercicio de Promesas Pokemon/////////////////////////////////////////////////////////////////////////////

// const request= require('request');

// const PokemonByIdPromise=new Promise((resolve,reject)=>{
//     const URL_pokePromise='https://pokeapi.co/api/v2/pokemon/1500';

//     request.get(URL_pokePromise,(err,res,body)=>{

//         res.statusCode ===200

//         ?resolve(JSON.parse(body).name)

//         : reject(new Error (`Èrror, codigo: ${res.statusCode}`))
//     })

// })

// PokemonByIdPromise
// .then(respuesta=>{
//     let respuestaXida=respuesta;
//     console.log(respuestaXida)

// })

// .catch(error=>
    
//     console.log(error)
    
    
// )








