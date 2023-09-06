import React from 'react';
import Imagen from './img/login.png';
import Login from '../login';
import { Link } from "react-router-dom";

const Boton = () => {
    return (
        <div id="flotante" className="transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30 text-white">
            <Link to={'/Login'}>
                <a href="#" className="button">
                    <img className="icon" src={Imagen}>

                    </img>
                    <span className="text">Iniciar </span>
                </a>
            </Link>
        </div>
    );
}
export default Boton;