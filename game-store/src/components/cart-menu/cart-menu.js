import React from 'react'
import { Button } from '../button/button'
import { CartItem } from '../cart-item'
import { calcTotalPrice } from '../utils'
import './cart-menu.css'

export const CartMenu = ({ items, onClick }) => {
    return (
        <div className='cart-menu'>
            <div className='cart-menu_games-list'>
                {
                    items.length > 0 ? items.map((game) => <CartItem key={game.title} price={game.price} title={game.title} id={game.id} />) : 'Корзина пуста'
                }
            </div>
            {
                items.length > 0 ? (
                    <div className='cart-menu_arrange'>
                        <div className='cart-menu_total-price'>
                            <span>Итого:</span>
                            <span>{calcTotalPrice(items)}.руб</span>
                            <Button type='primary' size='m' onClick={onClick}>
                                Оформить заказ
                            </Button>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}
