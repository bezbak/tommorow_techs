import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'; // Импортируем хук перевода
import scss from './header.module.scss'
import logoSrc from './logo.svg'
import burger from './burger.svg'
import en from './en.svg'
import kg from './kg.svg'
import ru from './ru.svg'

const Header = () => {
  const [showBurger, setShowBurger] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { t, i18n } = useTranslation(); // Получаем функции перевода и управления языком

  const getLinkStyle = (path) => {
    return location.pathname === path ? `${scss.activeLink}` : ''
  }

  // Функция для смены языка
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowBurger(false); // Закрываем бургер-меню при смене языка
  };

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

        <div className={scss.nav_list}>
          <Link
            className={getLinkStyle('/')}
            onClick={() => setShowBurger(false)}
            to='/'
          >
            {t('main')} {/* Используем перевод */}
          </Link>
          <Link
            className={getLinkStyle('/about')}
            onClick={() => setShowBurger(false)}
            to='/about'
          >
            {t('about')} {/* Используем перевод */}
          </Link>
          <Link
            className={getLinkStyle('/services')}
            onClick={() => setShowBurger(false)}
            to='/services'
          >
            {t('services')} {/* Используем перевод */}
          </Link>
          <Link
            className={getLinkStyle('/contacts')}
            onClick={() => setShowBurger(false)}
            to='/contacts'
          >
            {t('contacts')} {/* Используем перевод */}
          </Link>

          {/* Блок переключателя языков */}
          <div className={scss.language_switcher}>
            <button
              className={i18n.language === 'ru' ? scss.active : ''}
              onClick={() => changeLanguage('ru')}
            >
              <img src={ru} alt='ru' />

            </button>
            <button
              className={i18n.language === 'en' ? scss.active : ''}
              onClick={() => changeLanguage('en')}
            >
              <img src={en} alt='en' />

            </button>
            <button
              className={i18n.language === 'kg' ? scss.active : ''}
              onClick={() => changeLanguage('kg')}
            >
              <img src={kg} alt='kg' />

            </button>
          </div>
        </div>
         <div className={`${scss.burger_overlay} ${showBurger ? scss.active : ''}`}>
          <div className={scss.burger_menu}>
            <Link onClick={() => setShowBurger(false)} className={getLinkStyle('/')} to='/'>
              {t('main')}
            </Link>
            <Link onClick={() => setShowBurger(false)} className={getLinkStyle('/about')} to='/about'>
              {t('about')}
            </Link>
            <Link onClick={() => setShowBurger(false)} className={getLinkStyle('/services')} to='/services'>
              {t('services')}
            </Link>
            <Link onClick={() => setShowBurger(false)} className={getLinkStyle('/contacts')} to='/contacts'>
              {t('contacts')}
            </Link>

            <div className={scss.language_switcher}>
              <button onClick={() => changeLanguage('ru')} className={i18n.language === 'ru' ? scss.active : ''}>
                <img src={ru} alt='ru' />
              </button>
              <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? scss.active : ''}>
                <img src={en} alt='en' />
              </button>
              <button onClick={() => changeLanguage('kg')} className={i18n.language === 'kg' ? scss.active : ''}>
                <img src={kg} alt='kg' />
              </button>
            </div>
          </div>
        </div>

        <div className={scss.nav_btn}>
          <button className={scss.nav_btn_button}>{t('learn_more')}</button> {/* Используем перевод */}
          <img
            onClick={() => setShowBurger(!showBurger)}
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