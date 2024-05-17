import { Link } from "react-router-dom"

export const Card = ({animal,path}) => {

    const {id, name,description,  image} = animal
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
                <Link to={`${path}/${id}`}>
                    <img className="rounded-t-lg" src={image} alt="" />
                </Link>
                <div className="p-5">
                    <Link to={`${id}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                    
                </div>
            </div>
  )
}
