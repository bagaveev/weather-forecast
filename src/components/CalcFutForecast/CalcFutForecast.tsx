import React, { useState, useEffect } from 'react'
import OpenWeather from '../../services/open-weather'
import { COORDINATES } from '../../common/store/data'
import './CalcFutForecast.scss'

interface ISelectCityProps {
  city: string;
}

interface IForecastAnswer {
  day: string;
  month: string;
  year: string;
  tmp: number;
  icon: string
}

const CalcFutForecast:React.FC<ISelectCityProps> = (props: any) => {
  const [forecastAnswer, setForecastAnswer] = useState([])

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
    openWeather.getWeather7Days(lat, lon)
      .then((person: any) => {
        setForecastAnswer(person)
      })
  }, [lat, lon])

  if (forecastAnswer) {
    console.log(forecastAnswer)
  }

  return (
        <div>
          {forecastAnswer.map((el: IForecastAnswer, index:number) => {
            return (
            <div key={index}>
              {el.tmp}
            </div>
            )
          })}
        </div>
  )
}

export default CalcFutForecast
