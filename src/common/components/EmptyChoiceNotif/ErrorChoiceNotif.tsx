import React from 'react'
import './ErrorChoiceNotif.scss'
import { ReactComponent as Cloud } from './images/cloud.svg'

const ErrorChoiceNotif = () => {
  return (
      <div className="errorChoiceNotif">
      <Cloud/>
      <span className="errorChoiceNotif__text">Fill in all the fields and the weather will be displayed</span>
      </div>
  )
}

export default ErrorChoiceNotif
