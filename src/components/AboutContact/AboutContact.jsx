import React from 'react'
import { Link } from 'react-router-dom'
import lol from './AboutContact.module.scss'
import ContactIcons from './icons/ContactIcons'
import HomeContact from './icons/HomeContact'

const AboutContact = () => {
  return (
    <div className={lol.AboutContact}>
      <h2>Мы всегда остаемся на связи для обсуждения ваших проектов</h2>
      <div className={lol.btns}>
        <Link to='/contacts' className={lol.contactBtn}>
          <ContactIcons />
          <h4>Связаться с нами</h4>
        </Link>
        <Link to='/' className={lol.homeBtn}>
          <HomeContact />
          <h4>Вернуться домой</h4>
        </Link>
      </div>
    </div>
  )
}

export default AboutContact
