import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            <div className="header__search">
                <input className="hedaer__searchInput" type="text"/>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className='header__optionLineOne'>Hola Invitado</span>
                    <span className='header__optionLineTwo'>Iniciar Sesion</span>

                </div>
                <div className="header__option">
                <span className='header__optionLineOne'>Devoluciones</span>
                    <span className='header__optionLineTwo'>y Pedidos</span>


                </div>
                <div className="header__option">
                <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>

                </div>
                <div className="header__option">

                </div>
            </div>
        </div>
    )
}

export default Header
