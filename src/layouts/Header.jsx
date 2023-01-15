import "../sass/styles.sass"
import photoHeader from "../images/logoHeader.png"
import logoHeader from "../images/header.jpg"
import {FaSistrix} from "react-icons/fa"
import {FaUserAlt} from "react-icons/fa"
import {FaAlignJustify} from "react-icons/fa"

function header(){
    return(
        <header>
            <a href="index.html"><img className="logoHeader" src={photoHeader} alt="Acceso a página de inicio"/></a>
            <nav className="navHeader">
                <ul className="buttonsHeader">
                    <li><a href="characters.html">Personajes</a></li>
                    <li><a href="chapters.html">Capitulos</a></li>
                    <li><a href="contacto.html">Contactos</a></li>
                </ul>
            </nav>
            <img className="photoHeader" src={logoHeader} alt="a"/>
            <ul className="iconsHeader">
                <label className="menu" htmlFor="menuDesplegable"><FaAlignJustify/>
                    <input className="menuCheck" type="checkbox" id="menuDesplegable"/>
                    <ul className="menuDesplegado">
                        <li><a href="characters.html">Personajes</a></li>
                        <li><a href="chapters.html">Capitulos</a></li>
                        <li><a href="contacto.html">Contactos</a></li>
                    </ul>
                </label>
                <li><a href="Error404.html"><FaSistrix/></a></li>
                <li><a href="sesion.html"><FaUserAlt/></a></li>
            </ul>
        </header>
    )
}
export default header