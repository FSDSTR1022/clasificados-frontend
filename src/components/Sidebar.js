import React, { Component } from "react";

class Sidebar extends Component {


    render() {
        return (

            <aside id="sidebar">
            <div id="nav-articulos" class="sidebar-item">
                <h3>Compra y vende </h3>
                <form>
                <input type="submit" name="submit" value="Regístrate" className="btn btn-success"/>
                </form>
            </div>

            <div>
                <h3>Encuentra lo que deseas</h3>
                <form>
                    <input type="text" placeholder="Buscar" id="buscar1"/>
                </form>
            </div>
        </aside>




        );
    }





}


export default Sidebar;