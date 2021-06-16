import React from 'react'
import { Layout } from '../../components'
import { ItemListContainer } from '../../components/ItemListContainer/ItemListContainer'

const Home = () => {
    return(
        <div>
            <Layout>
            < ItemListContainer greeting = {"catalogo de tienda-bond"} />
                Home...
            </Layout>
        </div>
    )
        
    
}

export { Home }