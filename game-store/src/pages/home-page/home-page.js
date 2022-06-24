import React from 'react'
import { GameItem } from '../../components/game-item/game-item'
import './home-page.css'

const GAMES = [
    {
        image: '/game-covers/forza_5.jpeg',
        title: 'Forza Horizon 5',
        genres: ['Гонки', 'Симулятор', 'Открытый мир'],
        price: 2343,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
        id: 1,
        description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
    },
    {
        image: '/game-covers/battlefield_2042.jpg',
        title: 'Battlefield 2042',
        genres: ['Экшен', 'Шутер', 'Война'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 2433,
        id: 2,
        description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
    },
    {
        image: '/game-covers/life_is_strange_true_colors.jpeg',
        title: 'Life is Strange True Colors',
        genres: ['Глубокий сюжет', 'Протагонистка'],
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
        price: 3021,
        id: 3,
        description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
    },
    {
        image: '/game-covers/gta_v.jpeg',
        title: 'Grand Theft Auto V',
        genres: ['Открытый мир', 'Экшен'],
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        price: 789,
        id: 4,
        description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
    },
    {
        image: '/game-covers/rainbow_siege.jpeg',
        title: 'Tom Clancy\'s Rainbow Six® Siege',
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        genres: ['Тактика', 'Шутер'],
        price: 982,
        id: 5,
        description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
    },
    {
        image: '/game-covers/assassins_creed_valhalla.png',
        title: 'Assassin’s Creed Valhalla',
        genres: ['Паркур', 'РПГ', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 2863,
        id: 6,
        description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
    },
    {
        image: '/game-covers/cyberpunk2077.jfif',
        title: 'Cyberpunk 2077',
        genres: ['Экшен', 'От первого лица', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/qIcTM8WXFjk',
        price: 1756,
        id: 7,
        description: 'Cyberpunk 2077 — компьютерная игра в жанре action-adventure в открытом мире, разработанная и изданная польской студией CD Projekt. Действие игры происходит в 2077 году в Найт-Сити, вымышленном североамериканском городе из вселенной Cyberpunk.'
    },
    {
        image: '/game-covers/spider-man.jpg',
        title: 'Spider-Man: Miles Morales',
        genres: ['Экшен', 'Паркур', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/FCDnIowAz_Y',
        price: 2760,
        id: 8,
        description: 'Повествование продолжает сюжет Spider-Man 2018 года и DLC «Город, который никогда не спит», где Майлз Моралес был укушен мутировавшим пауком. Теперь у него есть те же суперспособности, что и у Питера Паркера. Майлз носит свой традиционный чёрно-красный костюм и борется с преступниками, как Человек-паук. Тот не может спасать город, так как находится в «отпуске» вместе с Мэри Джейн Уотсон в стране Симкария. Паркер говорит Майлзу, что он должен быть похож на своего отца, полицейского, погибшего в теракте, чтобы стать героем Нью-Йорка.'
    },
    {
        image: '/game-covers/naruto.jpg',
        title: 'Naruto Shippuden: Ultimate Ninja Storm 4',
        genres: ['Экшен', 'Файтинг', 'Сюжет'],
        video: 'https://www.youtube.com/embed/EgN0uxLLG80',
        price: 850,
        id: 9,
        description: 'Naruto Shippuden: Ultimate Ninja Storm 4, известная в Японии как Naruto Shippūden: Narutimate Storm 4, представляет собой файтинг, разработанный CyberConnect2 и опубликованный Bandai Namco Entertainment для PlayStation 4, Xbox One и Steam в феврале 2016 года. последняя часть серии Naruto: Ultimate Ninja Storm.'
    },
    {
        image: '/game-covers/tlou.png',
        title: 'Одни из нас: Часть II',
        genres: ['Стелс', 'Постапокалипсис', 'Хоррор'],
        video: 'https://www.youtube.com/embed/ORr1N9KwTuA',
        price: 2203,
        id: 10,
        description: 'The Last of Us Part II — компьютерная игра в жанре приключенческого боевика с элементами survival horror и стелс-экшена от третьего лица, разработанная компанией Naughty Dog и изданная Sony Interactive Entertainment в 2020 году для игровой приставки PlayStation 4.'
    },
    {
        image: '/game-covers/rdr2.png',
        title: 'Red Dead Redemption 2',
        genres: ['Открытый мир', 'Шутер', 'Дикий запад'],
        video: 'https://www.youtube.com/embed/l5eGNqppGUs',
        price: 3394,
        id: 11,
        description: 'Red Dead Redemption 2 — компьютерная игра в жанрах action-adventure и шутера от третьего лица с открытым миром, разработанная Rockstar Studios и выпущенная Rockstar Games для консолей PlayStation 4 и Xbox One 26 октября 2018 года и для персональных компьютеров под управлением Windows 5 ноября 2019 года.'
    },
    {
        image: '/game-covers/horizonzerodawn.jpg',
        title: 'Horizon Zero Dawn: The Frozen Wilds',
        genres: ['Открытый мир', 'РПГ', 'Постапокалипсис'],
        video: 'https://www.youtube.com/embed/1A---1tpYUQ',
        price: 1750,
        id: 12,
        description: 'Horizon Zero Dawn — компьютерная игра в жанре Action/RPG с открытым миром, разработанная нидерландской студией Guerrilla Games и изданная Sony Interactive Entertainment для игровой консоли PlayStation 4 в 2017 году; версия игры для Windows вышла 7 августа 2020 года.'
    },
]

export const HomePage = () => {
    return (
        <div className='home-page'>
            {GAMES.map(game => <GameItem game={game} key={game.id} />)}
        </div>
    )
}
