import React from "react"
export const Input = ({type,label,placeholder,name,onChange,id,p,expresionRegular}) => {

    return(
        <div >
            <label htmlFor={name} className="input-usuario">{label}</label>
            <input
                id ={id}
                className= "style-input"
                name={name}
                // name="nombre"
                type= {type}
                placeholder= {placeholder}
                onChange={onChange}
              
            />
            
            <p className= "leyenda-error">{p}</p>
        </div>

        
    )
}