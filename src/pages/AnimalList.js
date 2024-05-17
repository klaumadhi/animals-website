import { useState, useEffect } from "react"
import { Card } from "../components/Card"
import { useTitle } from "../hooks/useTitle"

export const AnimalList = ({path}) => {
    
    const [animals, setAnimals]= useState([])
    const url  = `https://freetestapi.com/api/v1${path}`
    useTitle("/cats" === path && "Cats Catalog" , "/dogs" === path && "Dogs Catalog","/birds" === path && "Birds Catalog")

    useEffect(() => {
        async function fetchAnimals(){
        
          const response = await fetch(url)
          const json =  await response.json()
          setAnimals(json)
        }
        fetchAnimals()
      
      }, [url])

  
     

    return (
        <main>
        <section className=" py-16">
          <div className="flex justify-start flex-wrap justify-evenly text-center" > 
          {animals.map((animal)=> (
            //Pass information of movie object into Card.js
              <Card key={animal.id} animal={animal} path={path} />
          ))}
              
              
             
  
           </div>
  
        </section>
       
        </main>
    )
  
}
