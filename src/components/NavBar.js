import { Link , NavLink} from 'react-router-dom'
import React from 'react'
import './navbar.css'
import {CartWidget} from './CartWidget.js'
import estrella from '../assets/icons/estrella.png'
const NavBar = () => {
    return(
        <nav className = "navbar" >
            <Link className= 'link' to='/'>
            <div classNam= "flex-logo1">
            
            <h1  className = "logo"><img  src={estrella} alt='estrella'  height='35px' width='40px' />tienda-bond</h1>
            </div>
             
            </Link>
        
            <ul className = "categories" >
                <NavLink activeClassName= 'link-active' className= 'link' to='/category/Tv-Audio-Video'>
                    <li className = "category">Tv,Audio y Video</li>
                </NavLink>
                <NavLink activeClassName= 'link-active' className= 'link' to='/category/celulares'>
                    <li className = "category">celulares</li>
                </NavLink>
                <NavLink activeClassName= 'link-active' className= 'link' to='/category/Notebooks'>
                    <li className = "category">Notebooks</li>
                </NavLink>
            </ul>
            <CartWidget/>  
        </nav>
    ) 
}

export { NavBar }