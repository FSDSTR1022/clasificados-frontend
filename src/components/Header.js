import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="center">
                    <div id="logo">
                        <h2>Web Anuncios</h2>
                    </div>
                </div>

                <nav id="menu">
                    <ul>
                        <li>
                            <a href="#">Regístrate o inicia sesión </a>
                        </li>
                        <li>
                            <a href="#">Subir Producto</a>
                        </li>
                    </ul>
                </nav>

                {/*Limpiar flotados*/}
                <div classNameName="clearfix"></div>

            </header>
        );
    }
}


export default Header;