import React, { useState, useEffect } from 'react'
import OpenWeather from '../../services/open-weather'
import { COORDINATES } from '../../common/store/data'
// import VisualCard from '../../common/components/VisualCard'
import './CalcPastForecast.scss'
import VisualCard from '../../common/components/VisualCard'

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
}

const CalcPastForecast:React.FC<ISelectCityProps> = (props: any) => {
  const [forecastAnswer, setForecastAnswer] = useState({
    day: '',
    month: '',
    year: '',
    tmp: 0,
    icon: ''
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
    ? <VisualCard day={forecastAnswer.day} month={forecastAnswer.month} year={forecastAnswer.year} tmp={forecastAnswer.tmp} icon={forecastAnswer.icon}/>
    : <></>

  return (
        <div className="calc-past-forecast-template">
            {showComponent}
        </div>
  )
}

export default CalcPastForecast
