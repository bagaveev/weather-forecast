import React from 'react'
import './VisualCard.scss'

interface IShowForecast {
    day: string;
    month: string;
    year: string;
    tmp: number;
    icon: string
}

const VisualCard:React.FC<IShowForecast> = (props: any) => {
  const currentTemp = (props.tmp > 0) ? `+${props.tmp}` : (props.tmp < 0) ? `-${props.tmp}` : `${props.tmp}`

  return (
        <div className="visual-card-template">
            <div className="visual-card-template__date">
                {props.day} {props.month} {props.year}
            </div>
            <div className="visual-card-template__icon">
                <img src={props.icon} />
            </div>
            <div className="visual-card-template__number">
                {currentTemp}&deg;
            </div>
        </div>
  )
}

export default VisualCard
