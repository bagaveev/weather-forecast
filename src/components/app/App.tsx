import React from 'react'
import './App.scss'
import OpenWeather from '../../services/open-weather'

function App () {
  const openWeather = new OpenWeather()

  openWeather.getWeather7Days(55.796127, 49.106405)
    .then((person: any) => {
      console.log(person)
    })

  openWeather.getWeatherPrevious(55.796127, 49.106405, 1621014561000)
    .then((person: any) => {
      console.log(person)
    })

  return (
    <div className="weatherForecast">
      <h1 className="weatherForecast__title">
          <span className="weatherForecast__title__top">Weather</span>
          <span className="weatherForecast__title__bottom">forecast</span>
      </h1>
    </div>
  )
}

export default App
