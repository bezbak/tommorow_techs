import React from 'react'
import lol from './AboutNowWe.module.scss'
export default function AboutNowWe() {
  return (
    <div className={lol.AboutNowWe}>
      <h2>Сейчас мы:</h2>

      <div className={lol.main}>
        <div className={lol.block}>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="70" viewBox="0 0 60 70" fill="none">
            <path d="M58 68V60.6667C58 56.7768 56.525 53.0463 53.8995 50.2958C51.274 47.5452 47.713 46 44 46H16C12.287 46 8.72601 47.5452 6.1005 50.2958C3.475 53.0463 2 56.7768 2 60.6667V68" stroke="#7153FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M30.0003 31C37.8633 31 44.2376 24.5081 44.2376 16.5C44.2376 8.49187 37.8633 2 30.0003 2C22.1373 2 15.763 8.49187 15.763 16.5C15.763 24.5081 22.1373 31 30.0003 31Z" stroke="#7153FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <h3>17 сотрудников</h3>
          <span>Которые делают проекты</span>
        </div>
        <div className={lol.block}>
          <svg xmlns="http://www.w3.org/2000/svg" width="52" height="58" viewBox="0 0 52 58" fill="none">
            <path d="M51 40.2023V17.7977C50.999 16.8155 50.7418 15.8508 50.2543 15.0004C49.7667 14.15 49.0659 13.4438 48.2222 12.9527L28.7778 1.75041C27.9332 1.25881 26.9752 1 26 1C25.0248 1 24.0668 1.25881 23.2222 1.75041L3.77778 12.9527C2.93406 13.4438 2.23328 14.15 1.74573 15.0004C1.25817 15.8508 1.001 16.8155 1 17.7977V40.2023C1.001 41.1845 1.25817 42.1492 1.74573 42.9996C2.23328 43.85 2.93406 44.5562 3.77778 45.0473L23.2222 56.2496C24.0668 56.7412 25.0248 57 26 57C26.9752 57 27.9332 56.7412 28.7778 56.2496L48.2222 45.0473C49.0659 44.5562 49.7667 43.85 50.2543 42.9996C50.7418 42.1492 50.999 41.1845 51 40.2023Z" stroke="#7153FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2 15L26 29L50 15" stroke="#7153FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M26 57V29" stroke="#7153FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <h3>20 выполненных работ</h3>
          <span>Которые сейчас существуют</span>
        </div>
        <div className={lol.block}>
          <svg xmlns="http://www.w3.org/2000/svg" width="52" height="42" viewBox="0 0 52 42" fill="none">
            <path d="M37.3636 41.0001V36.5556C37.3636 34.1982 36.4058 31.9372 34.701 30.2702C32.9961 28.6033 30.6838 27.6667 28.2727 27.6667H10.0909C7.67985 27.6667 5.36754 28.6033 3.66267 30.2702C1.95779 31.9372 1 34.1982 1 36.5556V41.0001" stroke="#7153FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.1821 18.7778C24.2029 18.7778 28.273 14.7981 28.273 9.88889C28.273 4.97969 24.2029 1 19.1821 1C14.1613 1 10.0912 4.97969 10.0912 9.88889C10.0912 14.7981 14.1613 18.7778 19.1821 18.7778Z" stroke="#7153FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M50.9998 41V36.5556C50.9983 34.5861 50.3279 32.6728 49.0938 31.1163C47.8598 29.5597 46.1319 28.4479 44.1816 27.9556" stroke="#7153FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M35.0913 1.28882C37.0468 1.77838 38.78 2.89038 40.0178 4.44951C41.2555 6.00864 41.9273 7.92622 41.9273 9.89993C41.9273 11.8736 41.2555 13.7912 40.0178 15.3503C38.78 16.9095 37.0468 18.0215 35.0913 18.511" stroke="#7153FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <h3>10 партнеров</h3>
          <span>В том числе государство</span>
        </div>
      </div>
      <div className={lol.line}>

      </div>
    </div>
  )
}
