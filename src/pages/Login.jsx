import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo3 from "../images/logo3.png"
import "../sass/styles.sass"
import { useUserContext } from "../context/UserContext"



export default function Login() {

    const { user, setUser, loged, setLoged, favs, setFavs } = useUserContext()
    const navigate = useNavigate()

    const loginUser = (e) => {
        e.preventDefault()
        if(localStorage.getItem(e.target.user.value) === e.target.password.value){
            setUser(true)
            setFavs([])
            setLoged(true)
            navigate("/")
        }
        else{
            return (
                    console.log("mal")
            )
        }
    }



    return (
        <div className='main-sesion'>
            <img className="logoRyMs" src={logo3} alt="Logo de Rick y Morty" />
            <form className="formularioSesion" onSubmit={loginUser}>
                <label htmlFor="usuario">
                    <input className="sesion" type="text" id="user" name="usuario" placeholder="user" required />
                </label>
                <label htmlFor="contraseña">
                    <input className="sesion" type="password" id="password" name="contraseña" placeholder="password" required />
                </label>
                <button type='submit'>Login</button>
                <NavLink to="/register">No tienes cuenta? Registrate!</NavLink>
            </form>
        </div>
    )
}
