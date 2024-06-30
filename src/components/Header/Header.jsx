import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import scss from './header.module.scss'
import logoSrc from './logo.svg'
import burger from './burger.svg'

const Header = () => {
  const [showBurger, setShowBurger] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const getLinkStyle = (path) => {
    return location.pathname === path ? `${scss.activeLink}` : ''
  }

  return (
    <header>
      <nav className={`${scss.nav}`}>
        <div
          className={scss.nav_logo}
          onClick={() => {
            navigate('/')
            setShowBurger(false)
          }}
        >
          <img src={logoSrc} alt='Logo' />
        </div>
        <div className={showBurger ? `${scss.nav_list} ${scss.nav_list_show}` : scss.nav_list}>
          <Link
            className={getLinkStyle('/')}
            onClick={() => {
              setShowBurger(false)
            }}
            to='/'
          >
            Главная
          </Link>
          <Link
            className={getLinkStyle('/about')}
            onClick={() => {
              setShowBurger(false)
            }}
            to='/about'
          >
            О нас
          </Link>
          <Link
            className={getLinkStyle('/services')}
            onClick={() => {
              setShowBurger(false)
            }}
            to='/services'
          >
            Услуги
          </Link>
          <Link
            className={getLinkStyle('/contacts')}
            onClick={() => {
              setShowBurger(false)
            }}
            to='/contacts'
          >
            Контакты
          </Link>
        </div>
        <div className={scss.nav_btn}>
          <button className={scss.nav_btn_button}>Узнать больше</button>
          <img
            onClick={() => {
              setShowBurger(!showBurger)
            }}
            className={scss.burger_btn}
            src={burger}
            alt='Burger menu'
          />
        </div>
      </nav>
    </header>
  )
}

export default Header
