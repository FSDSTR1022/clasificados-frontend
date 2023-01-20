import React, { Component } from "react";

class Slider extends Component {
    render() {
        return (
            <div id="slider" class='slider-big'>
        <h1>Compra y Vende tus articulos</h1>
        <form>
        <input type="text" placeholder="Busca tu articulo"/>
        </form>
    </div>
        );
    }
}

export default Slider;