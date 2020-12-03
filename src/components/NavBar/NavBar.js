import React, {useState} from 'react'
import './NavBar.scss'
import MenuItems from '../../data/MenuItems'
import menu from '../../assets/menu.png'
import closeButton from '../../assets/closeButton.png'
import {Link} from 'react-router-dom'

function NavBar() {

const [clicked, setClicked] = useState(false)

let handleClick = () => setClicked(!clicked);

    return (
        <nav className="portfolio-header">
            <img className={clicked ? "portfolio-header-x" : "portfolio-header-menu"} onClick={handleClick} src={clicked ? closeButton : menu } alt="menu bar"/>
            <h3 className="portfolio-header-name">Pablo Nacimiento</h3>

            <ul className={clicked ? 'nav-menu active' : 'nav-menu' }>
                {
                    MenuItems.map((item, index) => {
                        return(
                        <li key={index}> 
                            <Link className={item.cName} to={item.url} onClick={handleClick}> {item.title} </Link> 
                        </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default NavBar;

// No usado:
                       {/* <a className={item.cName} href={item.url}>
                            {item.title}
                            </a>  */}
