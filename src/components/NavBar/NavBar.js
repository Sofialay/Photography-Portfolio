import React, {useState} from 'react'
import './NavBar.scss'
import menuItems from '../../data/menuItems'
import {Link} from 'react-router-dom'

function NavBar() {

const [clicked, setClicked] = useState(false)

let handleClick = () => setClicked(!clicked);

    return (
        <nav className="portfolio-header">
            {/* <img className={clicked ? "portfolio-header-x" : "portfolio-header-menu"} onClick={handleClick} src={clicked ? closeButton : menu } alt="menu bar"/> */}
            <h3 className="portfolio-header-name">Pablo Nacimiento</h3>

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
