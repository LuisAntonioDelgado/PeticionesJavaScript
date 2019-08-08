///////////////////////////////////////////////Ejercicio 1/////////////////////////////////////


// const request= require('request');

// const URL='https://swapi.co/api/people/';



// getPokemonById=(id)=>{

    
//     let url=URL+id
//     request.get(url,(error,response,body)=>{

//         const json=JSON.parse(body);
//         const people=json.name;
//         const peoplefilm=json.films;

//         console.log(`Mi personaje es: ${people}`)
         
//         peoplefilm.forEach(urls=> {
//             const peopleFilmsURL=urls

//             request.get(urls,(error,response,body)=>{

//                 const film=JSON.parse(body).title
//                 console.log(film)
//             })
            
//         });

        

//     })

// }



// getPokemonById('1')

