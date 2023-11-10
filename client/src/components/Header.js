import React from 'react'
import Logo from '../images/restlogo.png'


const Header = () => {
    return (
        <>
            <header className="m-0 p-0 b-0 display-block bg-white absolute top-0 w-full leading-5 left-0 px-6 flex justify-between h-20 p-2">
                <a href="/"><img className="float-left w-16" src={Logo} alt="Restaurant Roulette Logo" /></a>
                <nav>
                    <ul className="font-semibold pt-2">
                        <li className="list-none inline-block p-2.5"><a className="no-underline text-black block text-right hover:text-gray-500" href="/">Home</a></li>
                        <li className="list-none inline-block p-2.5"><a className="no-underline text-black block text-right hover:text-gray-500" href="/mypicks">My Picks</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;