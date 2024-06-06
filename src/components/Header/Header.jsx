import {useState} from 'react';
import scss from'./header.module.scss';
import logoSrc from './logo.svg';
import burger from './burger.svg';
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
  const [showBurger, setShowBurger] = useState(false);
  const navigate = useNavigate();
  return (
    <header>
      <nav className={`${scss.nav}`}>
        <div className={scss.nav_logo}
        onClick={()=>{
          navigate('/');
          setShowBurger(false)
        }}
        ><img src={logoSrc} alt="" /></div>
        <div className={
          showBurger
          ? `${scss.nav_list} ${scss.nav_list_show}`
          : scss.nav_list
        }>
          <Link onClick={()=>{
            setShowBurger(false)
          }} to={'/'}>Главное</Link>
          <Link onClick={()=>{
            setShowBurger(false)
          }} to={'/about'}>О нас</Link>
          <Link onClick={()=>{
            setShowBurger(false)
          }} to={'/services'}>Услуги</Link>
          <Link onClick={()=>{
            setShowBurger(false)
          }} to={'/'}>Отзывы</Link>
          <Link onClick={()=>{
            setShowBurger(false)
          }} to={'/contacts'}>Контакты</Link>
        </div>
        <div className={scss.nav_btn}>
          <button className={scss.nav_btn_button}>Узнать больше</button>
          <img onClick={()=>{
            setShowBurger(!showBurger)
          }} className={scss.burger_btn} src={burger} />
        </div>
      </nav>
    </header>
  )
}

export default Header
