import React, { useState } from 'react'
import './PastForecast.scss'
import ErrorChoiceNotif from '../../common/components/EmptyChoiceNotif'
// import SelectCity from '../../common/components/SelectCity'
import InputDate from '../../common/components/InputDate'
import CalcPastForecast from '../CalcPastForecast/CalcPastForecast'
import SelectCustom from '../../common/components/SelectCustom'

const PastForecast: React.FC = () => {
  const [city, setCity] = useState('')

  const [date, setDate] = useState(0)

  const visibleWeather = (!city || !date) ? <ErrorChoiceNotif text="Fill in all the fields and the weather will be displayed"/> : <CalcPastForecast city={city} date={date}/>

  const onCitySelected = (name: string) => {
    setCity(name)
  }

  const onDateSelected = (item: number) => {
    setDate(item)
  }

  return (
        <div className="past-forecast">
            <div className="past-forecast__choice">
                 <SelectCustom ClassDesc="past-forecast__select" OnCitySelected={onCitySelected}/>
                <InputDate OnDateSelected={onDateSelected}/>
            </div>
            {visibleWeather}
        </div>
  )
}

export default PastForecast
