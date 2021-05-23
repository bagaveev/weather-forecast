import React from 'react'
import './App.scss'
import FutureForecast from '../FutureForecast'
import PastForecast from '../PastForecast'

function App () {
  return (
        <div className="weatherForecast">
            <h1 className="weatherForecast__title">
                <span className="weatherForecast__title__top">Weather</span>
                <span className="weatherForecast__title__bottom">forecast</span>
            </h1>
            <div className="weatherForecast__content">
                <div className="weatherForecast__content__block">
                    <h2 className="weatherForecast__content__block__subtitle">7 Days Forecast</h2>
                    <FutureForecast/>
                </div>
                <div className="weatherForecast__content__block">
                    <h2 className="weatherForecast__content__block__subtitle">Forecast for a Date in the Past</h2>
                    <PastForecast/>
                </div>
            </div>
            <div className="weatherForecast__bottom">
                <a href="https://mercdev.ru/" className="weatherForecast__bottom__link" target="_blank" rel="noreferrer">C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT</a>
            </div>

        </div>
  )
}

export default App
