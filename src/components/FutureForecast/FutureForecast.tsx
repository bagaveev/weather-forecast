import React, { useState } from 'react'
import './FutureForecast.scss'
import ErrorChoiceNotif from '../../common/components/EmptyChoiceNotif'
import CalcFutForecast from '../CalcFutForecast'
// import SelectCity from '../../common/components/SelectCity'
import SelectCustom from '../../common/components/SelectCustom'

const FutureForecast:React.FC = () => {
  const [city, setCity] = useState('')

  const visibleWeather = (!city) ? <ErrorChoiceNotif text="Fill in all the fields and the weather will be displayed"/> : <CalcFutForecast city={city}/>

  const onCitySelected = (name: string) => {
    setCity(name)
  }

  return (
            <div className="future-forecast">
                <SelectCustom ClassDesc="future-forecast__select" OnCitySelected={onCitySelected}/>
                {visibleWeather}
            </div>
  )
}

export default FutureForecast
