const request= require('request');


const URL_Nasa='https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-07-29&end_date=2019-08-05&api_key=g13x4Ar2fYdqdTrX2Qw7q0mZJEJDyTg3vvDxbyJO';



const NasaByIdPromise=new Promise((resolve,reject)=>{

    request.get(URL_Nasa,(err,res,body)=>{
        
       if(res.statusCode ===200){
        
        let dangerousAsteroids=[];
        const json=JSON.parse(body);

        const fechas=Object.values(json.near_earth_objects)
        // const fecha=json.near_earth_objects["2019-08-04"]

        fechas.forEach(fecha=>{

            fecha.forEach(asteroide=>{

            // console.log(asteroide.is_potentially_hazardous_asteroid);

            // condicionar para imprimir los que sean true con la llave is_potentially_hazardous_asteroid
                if(asteroide.is_potentially_hazardous_asteroid)
                dangerousAsteroids.push(asteroide.id);
            })

        })
        resolve(dangerousAsteroids)
       } else{

        reject(new Error (`Èrror, codigo: ${res.statusCode}`))

       }

    })

})

NasaByIdPromise
.then(response=> response.forEach(asteroide=> {
  
    console.log(`Asteroide potencialmente peligroso con el id: ${asteroide}`)

})
)

.catch(error=>
    
    console.log(error)
    
    
)



//////////////////////////////////////Ejercicio Maestro//////////////////////////////////

// const request= require('request');


// const URL_Nasa='https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-07-29&end_date=2019-08-05&api_key=g13x4Ar2fYdqdTrX2Qw7q0mZJEJDyTg3vvDxbyJO';


// const getHazardousAsteroids=()=>{

//     request.get(URL_Nasa,(err,res,body)=>{

//     let dangerousAsteroids=[];
//     const json=JSON.parse(body);

//     const fechas=Object.values(json.near_earth_objects);
//     // fechas es un arreglo con los valores del objeto que trae json.near_earth_objects

//     // console.log(fechas[0])

//     fechas.forEach(fecha =>{
//         // console.log('Este es un arreglo de asteroides')
//         // Cada fecha es un arreglo, por lo que vamos a iterar en cada uno con nuestra funciòn forEach


//         fecha.forEach(asteroide=>{

//             // console.log(asteroide.is_potentially_hazardous_asteroid);

//         //    condicionar para imprimir los que sean true con la llave is_potentially_hazardous_asteroid
//             if(asteroide.is_potentially_hazardous_asteroid)
//                 dangerousAsteroids.push(asteroide.id);


//         })

//     })
    
//     console.log(dangerousAsteroids);
//     return dangerousAsteroids;

//     })
// }

// getHazardousAsteroids();