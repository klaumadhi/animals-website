import { useState, useEffect } from "react"
import { Card } from "../components/Card"

export const AnimalList = ({path}) => {
    
    const [data, setData]= useState([])
    const url  = `https://freetestapi.com/api/v1${path}`
    useEffect(() => {
        async function fetchMovies(){
        
          const response = await fetch(url)
          const json =  await response.json()
          setData(json)
        }
        fetchMovies()
      
      }, [url])

  
     

    return (
        <main>
        <section className=" py-16">
          <div className="flex justify-start flex-wrap justify-evenly text-center" > 
          {data.map((animal)=> (
            //Pass information of movie object into Card.js
              <Card key={animal.id} animal={animal} path={path} />
          ))}
              
              
             
  
           </div>
  
        </section>
       
        </main>
    )
  
}
