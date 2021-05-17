import React, { useState } from 'react'
import './SelectCity.scss'
import { COORDINATES } from '../../store/data'

interface ISelectCityProps {
  OnCitySelected?: any;
}

const SelectCity:React.FC<ISelectCityProps> = (props:any) => {
  const [value, setValue] = useState('')

  const renderItems = (data: any) => {
    return Object.keys(data).map((city) => {
      return (
          <option key={city} value={city}>{city[0].toUpperCase() + city.slice(1)}</option>
      )
    })
  }

  const handleChange = (event: any) => {
    setValue(event.target.value)
    return event.target.value
  }

  const items = renderItems(COORDINATES)
  return (
            <select defaultValue={value} onChange={() => props.OnCitySelected(handleChange(event))}>
                <option disabled value={value}>Select city</option>
                {items}
            </select>
  )
}

export default SelectCity
