import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import '../style.css';

export const Footer = () => {
    return (
        <footer className="bg-[#830d1c] text-white text-center w-full h-[200px] pt-5 flex-grow-1">
            <h2 className="p-1.5 text-2xl">Contact</h2>
            <a className="text-[#dfad2c] text-4xl p-2 pb-[5px] hover:cursor-pointer hover:text-[#FF7039]" href="https://www.twitter.com/codingmypath"><FontAwesomeIcon icon={faTwitter} /></a>
            <a className="text-[#dfad2c] text-4xl p-2 pb-[5px] hover:cursor-pointer hover:text-[#FF7039]" href="https://www.instagram.com/codingmypath"><FontAwesomeIcon icon={faInstagram} /></a>
            <a className="text-[#dfad2c] text-4xl p-2 pb-[5px] hover:cursor-pointer hover:text-[#FF7039]" href="https://www.linkedin.com/in/eherrera09/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a className="text-[#dfad2c] text-4xl p-2 pb-[5px] hover:cursor-pointer hover:text-[#FF7039]" href="https://www.github.com/codingmypath"><FontAwesomeIcon icon={faGithub} /></a>
            <p className="p-4 py-5 bottom-0">&copy; 2023 - Edgar Herrera </p>
        </footer> 
    )

}