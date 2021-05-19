import React, { useState, useEffect } from 'react'
import OpenWeather from '../../services/open-weather'
import { COORDINATES } from '../../common/store/data'
import VisualCard from '../../common/components/VisualCard'
import './CalcFutForecast.scss'

import { ReactComponent as ArrowLeft } from './images/chevron-left.svg'
import { ReactComponent as ArrowRight } from './images/chevron-right.svg'

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
      .then((forecast: any) => {
        setForecastAnswer(forecast)
      })
  }, [lat, lon])

  return (
        <div className="calc-forecast-template">
          <ArrowLeft className="calc-forecast-template__arrow calc-forecast-template__arrow_left"/>
          <div className="calc-forecast-template__items__overlay">
            <div className="calc-forecast-template__items">
            {forecastAnswer.map((el: IForecastAnswer, index:number) => {
              return (
                  <VisualCard key={index} day={el.day} month={el.month} year={el.year} tmp={el.tmp} icon={el.icon}/>
              )
            })}
            </div>
          </div>
          <ArrowRight className="calc-forecast-template__arrow calc-forecast-template__arrow_right"/>
        </div>
  )
}

export default CalcFutForecast
