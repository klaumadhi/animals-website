import { Link, NavLink } from "react-router-dom"
import Logo from '../assets/logo.png'
import {  useState } from "react"
export const Header = () => {

  const [hidden, setHidden] = useState(true)
  //Using navigate so our page will not be refreshed

  const activeClass = "text-base block py-2 px-3 text-white bg-lime-600 rounded md:bg-transparent md:text-lime-600 md:p-0" 
  const inactiveClass = "text-base  block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-700 md:p-0  "

  return (
    <header>


<nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-20" alt="PetExpo Logo" />
          <span className=" self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
            <span>Pet</span><span className="text-lime-600">Expo</span></span>
      </Link>


        <div id="mobileNav" className="flex md:order-2">

          <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only ">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>


          <div id="navLinks" className={`items-center justify-between ${hidden ? "hidden" : hidden}  w-full md:flex md:w-auto md:order-1` } >

            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/" className={({isActive})=> isActive ? activeClass : inactiveClass} end>Home</NavLink>  {/* Add always end at home link */}
              </li>
              <li>
                        {/* {If use click in one of the links in header then isActive=True and then activeClass is activated} */}
                <NavLink to="/birds" className={({isActive})=> isActive ? activeClass : inactiveClass}>Birds</NavLink>
              </li>
              <li>
                <NavLink to="/dogs" className={({isActive})=> isActive ? activeClass : inactiveClass}>Dogs</NavLink>
              </li>
              <li>
                <NavLink to="/cats" className={({isActive})=> isActive ? activeClass : inactiveClass}>Cats</NavLink>
              </li>
             
            </ul>
          </div>
        </div>


</nav>


    </header>
  )
}
