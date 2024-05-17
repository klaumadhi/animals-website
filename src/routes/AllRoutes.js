import { Route, Routes } from "react-router-dom"
import { AnimalList } from "../pages/AnimalList"
import { AnimalDetails } from "../pages/AnimalDetails"
import { HomePage } from "../pages/HomePage"

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage title="Home"/>} />
            <Route path="birds" element={ <AnimalList path="/birds"/>}/>
            <Route path="birds/:id" element={ <AnimalDetails path="/birds"/>}/>
            <Route path="dogs" element={ <AnimalList path="/dogs"/>}/>
            <Route path="dogs/:id" element={ <AnimalDetails path="/dogs"/>}/>
            <Route path="cats" element={ <AnimalList path="/cats"/>}/>
            <Route path="cats/:id" element={ <AnimalDetails path="/cats"/>}/>
            

        </Routes>
    </div>
  )
}
