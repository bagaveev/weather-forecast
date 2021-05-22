import React, { useState } from 'react'
import './InputDate.scss'

interface ISelectDateProps {
    OnDateSelected?: any;
}

const InputDate:React.FC<ISelectDateProps> = (props:any) => {
  const [value, setValue] = useState('')

  const handleChange = (event: any) => {
    setValue(event.target.value)
    return new Date(event.target.value).getTime()
  }

  return (
      <input
          type="date"
          name="expiration date"
          value={value}
          onChange={() => props.OnDateSelected(handleChange(event))}
      />
  )
}

export default InputDate