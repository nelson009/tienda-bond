import React from "react";
import preloader from '../assets/icons/preloader.gif'

export const Spiner = () =>{
    return(
        <div className="contador">
            <img  src={preloader} alt='spiner'  height='100px' width='100px' />
        </div>
    )
}