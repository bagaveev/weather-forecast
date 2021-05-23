import React from 'react'
import './ErrorChoiceNotif.scss'
import { ReactComponent as Cloud } from './images/cloud.svg'

interface IErrorChoiceNotif {
    text: string
}

const ErrorChoiceNotif: React.FC<IErrorChoiceNotif> = (props: any) => {
  return (
      <div className="errorChoiceNotif">
      <Cloud/>
      <span className="errorChoiceNotif__text">{props.text}</span>
      </div>
  )
}

export default ErrorChoiceNotif
