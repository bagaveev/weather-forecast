import React, { useState, useEffect } from 'react'
import OpenWeather from '../../services/open-weather'
import { COORDINATES } from '../../common/store/data'
import VisualCard from '../../common/components/VisualCard'
import './CalcFutForecast.scss'
import Spinner from '../../common/components/Spinner'

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
  const [sliderWidth, setSliderWidth] = useState(0)
  const [sliderItemWidth, setSliderItemWidth] = useState(0)
  const [currentShift, setCurrentShift] = useState(0)
  // const [visibleItems, setVisibleItems] = useState(3)

  const openWeather = new OpenWeather()

  let sliderElem:any
  let visualCard:any
  let slideCount = 0

  let lat = ''
  let lon = ''

  for (const [key, values] of Object.entries(COORDINATES)) {
    if (key === props.city) {
      lat = values[0]
      lon = values[1]
    }
  }
  const setProperties = () => {
    sliderElem = document.querySelector('.calc-forecast-template__items')
    visualCard = document.querySelector('.visual-card-template')

    if (sliderElem) {
      slideCount = sliderElem.childElementCount
      if (visualCard) {
        const getMarginRight = parseInt(getComputedStyle(visualCard).marginRight)
        setSliderItemWidth(visualCard.offsetWidth + getMarginRight)
        setSliderWidth(sliderItemWidth * slideCount)
      }
      sliderElem.style.transform = `translate3d(${currentShift}px, 0, 0)`
    }
  }

  const moveLeft = () => {
    if (currentShift < 0) {
      setCurrentShift(currentShift + sliderItemWidth)
      if (sliderElem) {
        sliderElem.style.transform = `translate3d(${currentShift}px, 0, 0)`
      }
    }
  }

  const moveRight = () => {
    if (currentShift > -(sliderWidth - 3 * sliderItemWidth)) {
      setCurrentShift(currentShift - sliderItemWidth)
      if (sliderElem) { sliderElem.style.transform = `translate3d(${currentShift}px, 0, 0)` }
    }
  }

  useEffect(() => {
    openWeather.getWeather7Days(lat, lon)
      .then((forecast: any) => {
        setForecastAnswer(forecast)
        setCurrentShift(0)
      })
  }, [lat, lon])

  useEffect(() => {
    setProperties()
    const ShiftByButtons = (event:any) => {
      if (event.key === 'ArrowLeft') {
        moveLeft()
      }

      if (event.key === 'ArrowRight') {
        moveRight()
      }
    }
    document.addEventListener('keydown', ShiftByButtons)
    return () => {
      document.removeEventListener('keydown', ShiftByButtons)
    }
  })

  const renderItems = (arr:any) => {
    return arr.map((el: IForecastAnswer, key:number) => {
      return (
          <VisualCard key={key} day={el.day} month={el.month} year={el.year} tmp={el.tmp} icon={el.icon}/>
      )
    })
  }

  const items = renderItems(forecastAnswer)

  if (forecastAnswer.length === 0) {
    return (
        <Spinner/>
    )
  }

  return (
        <div className="calc-forecast-template">
          <ArrowLeft className="calc-forecast-template__arrow calc-forecast-template__arrow_left" onClick={moveLeft} />
          <div className="calc-forecast-template__items__overlay">
            <div className="calc-forecast-template__items">
              {items}
            </div>
          </div>
          <ArrowRight className="calc-forecast-template__arrow calc-forecast-template__arrow_right" onClick={moveRight} />
        </div>
  )
}

export default CalcFutForecast
