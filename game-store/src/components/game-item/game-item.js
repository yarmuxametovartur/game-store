import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { GameBuy } from '../game-buy'
import { GameCover } from '../game-cover'
import { GameGenre } from '../game-genre/game-genre'
import { setCurrentGame } from '../../redux/games/reducer'
import './game-item.css'

export const GameItem = ({ game }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCurrentGame(game));
        navigate(`/${game.title}`, { replace: true })
    }
    return (
        <div className='game-item' onClick={handleClick}>
            <GameCover image={game.image} />
            <div className='game-item_details'>
                <span className='game-item_title'>
                    {game.title}
                </span>
                <div className='game-item_genre'>
                    {
                        game.genres.map((genre) => <GameGenre genre={genre} key={genre} />)
                    }
                </div>
                <div className='game-item_buy'>
                    <GameBuy game={game} />
                </div>
            </div>
        </div>
    )
}
