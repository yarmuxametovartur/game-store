import React from 'react'
import { RiDeleteBin2Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { deleteItemFromCart } from '../../redux/cart/reducer';
import { GameCover } from '../game-cover';
import "./order-item.css"

export const OrderItem = ({ game }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteItemFromCart(game.id))
    }

    return (
        <div className='order-item'>
            <div className="order-item_cover">
                <GameCover image={game.image} />
            </div>
            <div className="order-item_title">
                <span>{game.title}</span>
            </div>
            <div className="order-item_price">
                <span>{game.price} руб.</span>
                <RiDeleteBin2Line
                    size="25"
                    className='cart-item_delete_item'
                    onClick={handleClick} />
            </div>
        </div>
    )
}
