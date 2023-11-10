import React from 'react'
import Logo from '../images/restlogo.png'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <header className="m-0 p-0 b-0 display-block bg-white absolute top-0 w-full leading-5 left-0 px-6 flex justify-between h-20 p-2">
                <Link to="/"><img className="float-left w-16" src={Logo} alt="Restaurant Roulette Logo" /></Link>
                <nav>
                    <ul className="font-semibold pt-2">
                        <Link className="list-none inline-block p-2.5 no-underline text-black text-right hover:text-gray-500" to="/">Home</Link>
                        <Link className="list-none inline-block p-2.5 no-underline text-black text-right hover:text-gray-500" to="/mypicks">My Picks</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;