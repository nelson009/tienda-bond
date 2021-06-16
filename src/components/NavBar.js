import React from 'react'
import './navbar.css'
import {CartWidget} from './CartWidget.js'
const NavBar = () => {
    return(
        <nav className = "navbar" >
            <h1>tienda-bond</h1>
            <ul className = "navbar-container" >
                <li>Home</li>
                <li>Laptops</li>
                <li>celulares</li>
                <li><CartWidget/></li>
            </ul>
            
            
        </nav>
    )
}

export { NavBar }