import React from 'react'
import scss from'./header.module.scss'
import logoSrc from './logo.svg'
import burger from './burger.svg'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav className={`size-1200 ${scss.nav}`}>
        <div className={scss.nav_block}><img src={logoSrc} alt="" /></div>
        <div className={scss.nav_block}>
          <Link to={'/'}>Главное</Link>
          <Link to={'/about'}>О нас</Link>
          <Link to={'/services'}>Услуги</Link>
          <Link to={'/'}>Отзывы</Link>
          <Link to={'/'}>Контакты</Link>
        </div>
        <div className={scss.nav_block}>
          <button>Узнать больше</button>
          <img className={scss.burger} src={burger} />
        </div>
      </nav>
    </header>
  )
}

export default Header