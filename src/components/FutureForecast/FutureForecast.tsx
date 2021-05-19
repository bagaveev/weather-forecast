import React, { useState } from 'react'
import './FutureForecast.scss'
import ErrorChoiceNotif from '../../common/components/EmptyChoiceNotif'
import SelectCity from '../../common/components/SelectCity'
import CalcFutForecast from '../CalcFutForecast'

const FutureForecast:React.FC = () => {
  const [city, setCity] = useState('')

  const visibleWeather = (!city) ? <ErrorChoiceNotif/> : <CalcFutForecast city={city}/>

  const onCitySelected = (name: any) => {
    setCity(name)
  }

  return (
            <div>
                <SelectCity OnCitySelected={onCitySelected}/>
                {visibleWeather}
            </div>
  )
}

export default FutureForecast
