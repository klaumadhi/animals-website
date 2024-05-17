import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useTitle } from "../hooks/useTitle"


export const AnimalDetails = ({path}) => {
    // useParams() get the value from id which is in allRoutes like birds/:id
    const params = useParams().id
    const [animal, setAnimal] = useState({})
    useTitle(`${animal.name}`)
  
   
 useEffect(() => {
      async function fetchAnimal(){
        const response = await fetch(`https://freetestapi.com/api/v1${path}/${params}}`)
        const json = await response.json()
        setAnimal(json)
        console.log("done")
        
      } 
      fetchAnimal()
    }, [params, path])

    console.log(animal.colors)
  
  
    return (
      <main>
        <section className="flex justify-around flex-wrap py-32 ">
            <div className="sm:max-w-sm  max-w-xs">
              <img className="rounded" src={animal.image} alt={animal.name} />
            </div>
            <div className="max-w-2xl text-gray-700 text-lg dark:text-white " >
              <h1 className="text-4xl font-bold my-3 text-center lg:text-left">{animal.name}</h1>
              <p className="my-4">{animal.description}</p>

              {path === "/birds" && <div className="flex flex-wrap mt-16">

                <div className="mr-8">
                <p className="my-3">
                <span className="mr-2 font-bold">Type of Specie:</span>
                <span>{animal.species} </span>
              </p>
              <p className="my-3">
                <span className="mr-2 font-bold">Family:</span>
                <span>{animal.family} </span>
              </p>
              <p className="my-3 ">
                <span className="mr-2 font-bold">Habitat:</span>
                <span>{animal.habitat}</span>
              </p>
              <p className="my-3">
                <span className="mr-2 font-bold">Runtime:</span>
                <span>{animal.place_of_found} Place of Found</span>
              </p>
                </div>
                <div>
                <p className="my-3 ">
                <span className="mr-2 font-bold">Type of Diet:</span>
                <span>{animal.diet}</span>
              </p>
              <p className="my-3">
                <span className="mr-2 font-bold">Wingspan:</span>
                <span>{animal.wingspan_cm} cm</span>
              </p>
              <p className="my-3">
                <span className="mr-2 font-bold">Avg Weight:</span>
                <span>{animal.weight_kg} kg</span>
              </p>
                </div>
              </div>}

              {path === "/dogs" && <div className="flex flex-wrap mt-16">

                <div className="mr-8">
                <p className="my-3">
                <span className="mr-2 font-bold">Type of Breed:</span>
                <span>{animal.breed_group} </span>
              </p>
              <p className="my-3">
                <span className="mr-2 font-bold">Size:</span>
                <span>{animal.size} </span>
              </p>
              <p className="my-3 ">
                <span className="mr-2 font-bold">Lifespan:</span>
                <span>{animal.lifespan}</span>
              </p>
              
                </div>

                <div>
                <p className="my-3 ">
                <span className="mr-2 font-bold">Origin:</span>
                <span>{animal.origin}</span>
              </p>
              <p className="my-3">
                <span className="mr-2 font-bold">Temperament:</span>
                <span>{animal.temperament}</span>
              </p>
              <p className="my-3">
                <span className="mr-2 font-bold">Colors:</span>
                {animal.colors && animal.colors.map((each, index) => (
                    <span key={index}>
                    {each}
                    {index !== animal.colors.length - 1 ? ", " : ""}
                    </span>
                ))}
                </p>
                </div>
              </div>}


              {path === "/cats" && 
                <div className="mt-16">
                <p className="my-3 ">
                <span className="mr-2 font-bold">Origin:</span>
                <span>{animal.origin}</span>
              </p>
              <p className="my-3">
                <span className="mr-2 font-bold">Temperament:</span>
                <span>{animal.temperament} cm</span>
              </p>
              
              <p className="my-3">
                <span className="mr-2 font-bold">Colors:</span>
                {animal.colors && animal.colors.map((each, index) => (
                    <span key={index}>
                    {each}
                    {index !== animal.colors.length - 1 ? ", " : ""}
                    </span>
                ))}
                </p>
                </div>
              }


            </div>
  
        </section>
  
      </main>
    )
  }
  
