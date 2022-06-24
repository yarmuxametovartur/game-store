import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { calcTotalPrice } from '../utils'
import { CartMenu } from '../cart-menu/cart-menu'
import { ItemsInCart } from '../items-in-cart/items-in-cart'
import './cart-block.css'

export const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    const items = useSelector((state) => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);
    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false);
        navigate(`/order`, { replace: true })
    }, [navigate]);

    return (
        <div className='cart-block'>
            <ItemsInCart quantity={items.length} />
            <MdOutlineShoppingCart size={25} className='cart-block_icon' onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} />
            {totalPrice > 0 ? (
                <span className='cart-block_total-price'> {totalPrice} руб. </span>
            ) : null}
            {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
        </div>
    )
}
