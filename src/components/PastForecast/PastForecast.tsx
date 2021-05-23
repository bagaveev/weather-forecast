import React, { useState } from 'react'
import './PastForecast.scss'
import ErrorChoiceNotif from '../../common/components/EmptyChoiceNotif'
import SelectCity from '../../common/components/SelectCity'
import InputDate from '../../common/components/InputDate'
import CalcPastForecast from '../CalcPastForecast/CalcPastForecast'

const PastForecast: React.FC = () => {
  const [city, setCity] = useState('')

  const [date, setDate] = useState(0)

  const visibleWeather = (!city || !date) ? <ErrorChoiceNotif/> : <CalcPastForecast city={city} date={date}/>

  const onCitySelected = (name: any) => {
    setCity(name)
  }

  const onDateSelected = (name: any) => {
    setDate(name)
  }

  return (
        <div className="past-forecast">
            <div className="past-forecast__choice">
                <SelectCity OnCitySelected={onCitySelected}/>
                <InputDate OnDateSelected={onDateSelected}/>
            </div>
            {visibleWeather}
        </div>
  )
}

export default PastForecast
