import React from 'react'
import scss from './Cards.module.scss'

const Cards = ({ children }) => {
  return (
    <>
      {children.map((el, idx) => (
        <div key={idx} className={scss.Card}>
          <div className={scss.Card__info}>
            <h5>{el.title}</h5>
            <p>{el.desc}</p>
            <div className={scss.Card__info_arguments}>
              {el.arguments.map((el, idx) => (
                <div key={el.id}>
                  <img src={el.img} alt="" />
                  <p>{el.title}</p>
                </div>
              ))}
            </div>
            <div className={scss.Card__info_btn}><a href="#">Выбрать</a></div>
          </div>
          <div className={scss.Card__right}>
            <div>
              {el.formats.map((el, idx) => (
                <img src={el.img} alt={el.name} />
              ))}
            </div>
            <div>
              <img src={el.img} alt="" />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Cards