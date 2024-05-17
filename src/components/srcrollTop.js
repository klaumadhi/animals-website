import { useEffect } from "react";
import { useLocation } from "react-router"


export const ScrollTop = () => {
    const {pathname} = useLocation()
  
    useEffect(() => {
        window.scrollTo(0,0)
    }, [pathname]
  )
  return null
}

//Will executed in main index.js
