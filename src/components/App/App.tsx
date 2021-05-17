import React from 'react'
import './App.scss'
// import OpenWeather from '../../services/open-weather'
import FutureForecast from '../FutureForecast'
import PastForecast from '../PastForecast'

function App () {
  // const openWeather = new OpenWeather()

  // openWeather.getWeather7Days(55.796127, 49.106405)
  //   .then((person: any) => {
  //     console.log(person)
  //   })
  //
  // openWeather.getWeatherPrevious(55.796127, 49.106405, 1621014561000)
  //   .then((person: any) => {
  //     console.log(person)
  //   })

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
    </div>
  )
}

export default App
