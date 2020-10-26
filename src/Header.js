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
                
            </div>
        </div>
    )
}

export default Header
