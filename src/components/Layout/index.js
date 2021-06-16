import React from 'react'
import { NavBar } from './Header'
import { Footer } from './Footer'
// import { ItemListContainer } from './ItemListContainer'

const Layout = ({children}) => {
    return(
        <>
            <NavBar />
            
            {children}
            <Footer />

        </>
    )
}

export { Layout }