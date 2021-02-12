import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import styles from './Navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

export default function navbar() {

    const [hamburger, setHamburger] = useState(false);

    return (
        <nav className={styles.NavbarItems}>
            <h1 className={styles.NavbarLogo}>Abhijeet</h1>            
            <div className={styles.MenuIcon} onClick={() => setHamburger(!hamburger)}>
                <FontAwesomeIcon icon={hamburger ? faTimes : faBars}></FontAwesomeIcon>
            </div>            
            <ul className={ hamburger ? styles.NavMenuActive : styles.NavMenu}>
                { MenuItems.map((item, key) => {
                    return (
                        <li key={key}><a className={styles.NavLinks} href={item.url}>{item.title}</a></li>
                    )
                }) }
            </ul>
        </nav>
    )
}