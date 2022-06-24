import React from 'react'
import { Link } from 'react-router-dom'
import { CartBlock } from '../cart-block'
import './header.css'

export const Header = () => {
    return (
        <div className='header'>
            <div className='wrapper'>
                <Link to="/" className='header_store-title'>
                    ИгроStore
                </Link>
            </div>
            <div className='wrapper header_cart-btn-wrapper'>
                <CartBlock />
            </div>
        </div>
    )
}
