import React, { useState, useEffect } from 'react'
import OpenWeather from '../../services/open-weather'
import { COORDINATES } from '../../common/store/data'
import './CalcPastForecast.scss'
import VisualCard from '../../common/components/VisualCard'
import Spinner from '../../common/components/Spinner'
import ErrorChoiceNotif from '../../common/components/EmptyChoiceNotif'

interface ISelectCityProps {
    city: string;
    date: number
}

interface IForecastAnswer {
    day: string;
    month: string;
    year: string;
    tmp: number;
    icon: string;
    cod: string;
    message: string
}

const CalcPastForecast = (props: ISelectCityProps) => {
  const [forecastAnswer, setForecastAnswer] = useState({
    day: '',
    month: '',
    year: '',
    tmp: 0,
    icon: '',
    cod: '',
    message: ''
  })

  const openWeather = new OpenWeather()

  let lat = ''
  let lon = ''

  for (const [key, values] of Object.entries(COORDINATES)) {
    if (key === props.city) {
      lat = values[0]
      lon = values[1]
    }
  }

  useEffect(() => {
    openWeather.getWeatherPrevious(lat, lon, props.date)
      .then((forecast: IForecastAnswer) => {
        setForecastAnswer(forecast)
      })
  }, [lat, lon, props.date])

  const showComponent = (forecastAnswer.day && forecastAnswer.month && forecastAnswer.year && forecastAnswer.tmp && forecastAnswer.icon)
    ? <VisualCard day={forecastAnswer.day} month={forecastAnswer.month} year={forecastAnswer.year}
                      tmp={forecastAnswer.tmp} icon={forecastAnswer.icon}/>
    : (forecastAnswer.cod && forecastAnswer.message) ? <ErrorChoiceNotif text={forecastAnswer.message[0].toUpperCase() + forecastAnswer.message.slice(1)}/> : <Spinner/>

  return (
        <div className="calc-past-forecast-template">
            {showComponent}
        </div>
  )
}

export default CalcPastForecast
