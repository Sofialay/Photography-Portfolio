import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import menuItems from '../../data/menuItems'
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import './NavBar.scss'


function NavBar() {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => setClicked(!clicked);

    return (
        <nav className="portfolio-header">
            <div className={clicked ? "portfolio-header-x" : "portfolio-header-menu"} onClick={handleClick} >
               { clicked ? <AiOutlineClose/> : <BiMenuAltLeft/>}
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu' }>
                {
                    menuItems.map((item, index) => {
                        return(
                        <li key={index}> 
                        {/* si no funciona to, a y href */}
                            <Link className={item.cName} to={item.path} onClick={handleClick}> {item.title} </Link> 
                        </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default NavBar;
