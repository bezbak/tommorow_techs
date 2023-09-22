import React from 'react';
import styles from './footer.module.scss';
import logoIcon from '../img/logo.png';
import instIcon from '../img/inst.svg';
import waIcon from '../img/wa.svg';
import tgIcon from '../img/tg.svg';
import nameIcon from '../img/name.svg';
import numberIcon from '../img/number.svg';

const Footer = () => {
  return (
    <footer className={styles.footer + ' footer'}>
      
      <div className={styles.logoContainer}>
        <img src={logoIcon} alt="Логотип" className={styles.logo} />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.hOs}>
            Ну кароче там текст вроде как 123 и так далееНу кароче там текст
            Ну кароче там текст вроде как 123 и так далееНу кароче там текст
            Ну кароче там текст вроде как 123 и так далееНу кароче там текст
            Ну кароче там текст вроде как 123 и так далееНу кароче там текст
          </h1>
        </div>
        <div className={styles.links}>
          <a className={styles.aLink} href="#">Главная</a>
          <a className={styles.aLink} href="#">О нас</a>
          <a className={styles.aLink} href="#">Услуги</a>
          <a className={styles.aLink} href="#">Отзывы</a>
          <a className={styles.aLink} href="#">Контакты</a>
        </div>

        <div className={styles.contact}>
          <h1 className={styles.hcontact}>Бесплатная консультация</h1>
          <div className={styles.inputWithIcon}>
            <label>
              <img className={styles.imgInput} src={nameIcon} alt="имя" />
              <input className={styles.input} type="text" placeholder="Имя" />
            </label>
          </div>
          <div className={styles.inputWithIcon}>
            <label>
              <img className={styles.imgInput} src={numberIcon} alt="номер" />
              <input className={styles.input} type="text" placeholder="Номер" />
            </label>
          </div>
          <button className={styles.buttonOtpr}>Отправить</button>
          <div className={styles.socialIcons}>
            <a className={styles.linkSoc} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <div className={styles.iconContainer}>
                <img src={instIcon} alt="Инстаграм" />
                <p className={styles.iconText}>Переходите на нашу  страницу в Instagram</p>
              </div>
            </a>
            <a className={styles.linkSoc} href="https://t.me/amk2k" target="_blank" rel="noopener noreferrer">
              <div className={styles.iconContainer}>
                <img src={tgIcon} alt="Telegram" />
                <p className={styles.iconText}>Пишите нам в Telegram</p>
              </div>
            </a>
            <a className={styles.linkSoc} href="https://api.whatsapp.com/" target="_blank" rel="noopener noreferrer">
              <div className={styles.iconContainer}>
                <img src={waIcon} alt="WhatsApp" />
                <p className={styles.iconText}>Пишите нам на WhatsApp</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <p className={styles.footerText}>Делаем мир лучше✨</p>
    </footer>
  );
};

export default Footer;
