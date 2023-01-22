import './module.header.css'

const NavBar = (menu-1, menu-2, menu-3, menu-4) => {
    return(
    <>
    <div className='container-header-NavBar'>

        <div className='container-NavBar'>
            <span>LOGO</span>
            <ul className='main-menu'>
                <li>Mis Articulos</li>
                <li>Bandeja de Entrada</li>
                <li>Lista de deseos</li>
                <li>Vender</li>
            </ul>
            <div className="login">
                <input type='submit' name='button' value='Login' className='user-login'/>
                <input type='submit' name='button' value='Registrarse' className='user-register'/>
            </div>
        </div>
    </div>
    </>
    )
}
export default NavBar