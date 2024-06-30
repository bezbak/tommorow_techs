import React, { useState } from 'react'
import styles from './adaptiveBlock.module.scss'
import computer from './img/комп.png'
import table from './img/планшет.png'
import phone from './img/телефон.png'

const AdaptiveBlock = () => {
  const [activeImg, setActiveImg] = useState(computer)
  const [activeButton, setActiveButton] = useState('computer')

  const handleButtonClick = (device) => {
    switch (device) {
      case 'phone':
        setActiveImg(phone)
        setActiveButton('phone')
        break
      case 'tablet':
        setActiveImg(table)
        setActiveButton('tablet')
        break
      case 'laptop':
        setActiveImg(computer)
        setActiveButton('laptop')
        break
      case 'computer':
        setActiveImg(computer)
        setActiveButton('computer')
        break
      default:
        setActiveImg(computer)
        setActiveButton('computer')
    }
  }

  return (
    <div className={styles.adaptiveBlock + ' adaptiveBlock'}>
      <div className={styles.text}>
        <h1 className={styles.title}>Адаптация на все устройства</h1>
        <h3 className={styles.descr}>
          Мы разрабатываем сайты, которые идеально отображаются на любых устройствах. Независимо от того, используете ли
          вы компьютер, планшет или смартфон, ваш сайт будет выглядеть красиво и функционально
        </h3>
      </div>
      <div className={styles.imageContainer}>
        <img src={activeImg} alt='Описание изображения' className={styles.homeImg} />
        <div className={styles.icons}>
          <button
            className={`${styles.icon} ${activeButton === 'phone' ? styles.active : ''}`}
            onClick={() => handleButtonClick('phone')}
          >
            <svg width='21' height='28' viewBox='0 0 21 28' fill='#7153FF' xmlns='http://www.w3.org/2000/svg'>
              <path
                className={styles.iconimage}
                d='M0 24.7191C0 26.6827 1.39497 28 3.48115 28H17.5188C19.605 28 21 26.6827 21 24.7191V3.29339C21 1.32979 19.605 0 17.5188 0H3.48115C1.39497 0 0 1.32979 0 3.29339V24.7191ZM2.02334 24.3835V3.62895C2.02334 2.60986 2.65171 2.00089 3.7325 2.00089H17.2676C18.3358 2.00089 18.9767 2.60986 18.9767 3.62895V24.3835C18.9767 25.4026 18.3358 25.9991 17.2676 25.9991H3.7325C2.65171 25.9991 2.02334 25.4026 2.02334 24.3835ZM6.93717 25.0546H14.0629C14.4147 25.0546 14.6536 24.8185 14.6536 24.4705C14.6536 24.1225 14.4147 23.8989 14.0629 23.8989H6.93717C6.59785 23.8989 6.35908 24.1225 6.35908 24.4705C6.35908 24.8185 6.59785 25.0546 6.93717 25.0546Z'
                fill='#8A8886'
              />
            </svg>
            <p className={styles.pButton}>Телефон</p>
          </button>
          <button
            className={`${styles.icon} ${activeButton === 'tablet' ? styles.active : ''}`}
            onClick={() => handleButtonClick('tablet')}
          >
            <svg width='36' height='27' viewBox='0 0 36 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                className={styles.iconimage}
                d='M4.7939 27H31.2061C34.4123 27  36 25.4747 36 22.4535V4.54643C36 1.52526 34.4123 0 31.2061 0H4.7939C1.60306 0 0 1.51059 0 4.54643V22.4535C0 25.4893 1.60306 27 4.7939 27ZM4.82442 24.6387C3.29771 24.6387 2.45802 23.8614 2.45802 22.3362V4.66376C2.45802 3.13851 3.29771 2.36122 4.82442 2.36122H31.1756C32.687 2.36122 33.542 3.13851 33.542 4.66376V22.3362C33.542 23.8614 32.687 24.6387 31.1756 24.6387H4.82442ZM12.1069 23.5095H23.9085C24.3207 23.5095 24.6107 23.2455 24.6107 22.8348C24.6107 22.4242 24.3207 22.1456 23.9085 22.1456H12.1069C11.6947 22.1456 11.3893 22.4242 11.3893 22.8348C11.3893 23.2455 11.6947 23.5095 12.1069 23.5095Z'
                fill='#8A8886'
              />
            </svg>
            <p className={styles.pButton}>Планшет</p>
          </button>
          <button
            className={`${styles.icon} ${activeButton === 'laptop' ? styles.active : ''}`}
            onClick={() => handleButtonClick('laptop')}
          >
            <svg width='43' height='25' viewBox='0 0 43 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                className={styles.iconimage}
                d='M0 23.2484C0 24.2164 0.760401 25 1.68481 25H41.3152C42.2395 25 43 24.2164 43 23.2484C43 22.2803 42.2395 21.4967 41.3152 21.4967H38.0498V3.25753C38.0498 1.10633 36.9316 0 34.8591 0H8.14077C6.17267 0 4.95006 1.10633 4.95006 3.25753V21.4967H1.68481C0.760401 21.4967 0 22.2803 0 23.2484ZM7.35054 21.4967V3.949C7.35054 2.96559 7.82766 2.47389 8.78189 2.47389H34.218C35.1723 2.47389 35.6494 2.96559 35.6494 3.949V21.4967H7.35054Z'
                fill='#8A8886'
              />
            </svg>
            <p className={styles.pButton}>Ноутбук</p>
          </button>
          <button
            className={`${styles.icon} ${activeButton === 'computer' ? styles.active : ''}`}
            onClick={() => handleButtonClick('computer')}
          >
            <svg width='34' height='29' viewBox='0 0 34 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                className={styles.iconimage}
                d='M32.436 19.3665L24.344 11.7776C23.7455 11.2201 23.0384 10.9481 22.2903 10.9481C21.556 10.9481 20.876 11.2065 20.2504 11.764L13.26 18.0064H13.8584L10.4992 14.9736C9.9416 14.4568 9.31599 14.1985 8.67679 14.1985C8.05119 14.1985 7.46639 14.4568 6.92239 14.96L1.7272 19.6521C1.7272 21.4745 2.4344 22.3993 3.8352 22.3993H29.7296C31.4568 22.3993 32.436 21.3113 32.436 19.3665ZM11.084 11.9409C12.8248 11.9409 14.2664 10.4993 14.2664 8.70407C14.2664 6.96327 12.8248 5.50807 11.084 5.50807C9.31599 5.50807 7.8608 6.96327 7.8608 8.70407C7.8608 10.4993 9.31599 11.9409 11.084 11.9409ZM3.4952 23.5009H30.5048C32.8031 23.5009 34 22.3177 34 20.0057V4.42007C34 2.12167 32.8031 0.938477 30.5048 0.938477H3.4952C1.1968 0.938477 0 2.12167 0 4.42007V20.0057C0 22.3177 1.1968 23.5009 3.4952 23.5009ZM3.536 21.3113C2.6384 21.3113 2.1896 20.8625 2.1896 19.9784V4.46087C2.1896 3.56327 2.6384 3.12807 3.536 3.12807H30.464C31.3615 3.12807 31.8104 3.56327 31.8104 4.46087V19.9784C31.8104 20.8625 31.3615 21.3113 30.464 21.3113H3.536ZM10.1592 28.1113H23.8408C24.4392 28.1113 24.9424 27.6217 24.9424 27.0096C24.9424 26.3977 24.4392 25.908 23.8408 25.908H10.1592C9.56079 25.908 9.0576 26.3977 9.0576 27.0096C9.0576 27.6217 9.56079 28.1113 10.1592 28.1113Z'
                fill='#8A8886'
              />
            </svg>
            <p className={styles.pButton}>Компьютер</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdaptiveBlock
