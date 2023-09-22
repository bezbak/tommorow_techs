import React from 'react'
import scss from'./header.module.scss'
import logoSrc from './logo.svg'
import burger from './burger.svg'
const Header = () => {
  return (
    <header>
      <nav className={`size-1200 ${scss.nav}`}>
        <div className={scss.nav_block}><img src={logoSrc} alt="" /></div>
        <div className={scss.nav_block}>
          <span>Главное</span>
          <span>О нас</span>
          <span>Услуги</span>
          <span>Отзывы</span>
          <span>Контакты</span>
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