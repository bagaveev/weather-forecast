import React, { useEffect } from 'react'
import './SelectCustom.scss'
import { COORDINATES } from '../../store/data'

interface ISelectCityProps {
    OnCitySelected: any;
    ClassDesc: string
}

const SelectCustom = (props: ISelectCityProps) => {
  const renderItems = (data: any) => {
    return Object.keys(data).map((city) => {
      return (
                <span key={city} className="forecast-option" data-value={city}
                      onClick={() => props.OnCitySelected(city)}>{city[0].toUpperCase() + city.slice(1)}</span>
      )
    })
  }

  useEffect(() => {
    const blockWrapper: any = document.querySelectorAll(`.${props.ClassDesc} .forecast-select-wrapper`)
    const customOption: any = document.querySelectorAll(`.${props.ClassDesc} .forecast-option`)
    const customSelect: any = document.querySelectorAll(`.${props.ClassDesc} .forecast-select`)

    for (const dropdown of blockWrapper) {
      dropdown.addEventListener('click', function () {
        dropdown.querySelector(`.${props.ClassDesc} .forecast-select`).classList.toggle('open')
      })
    }

    for (const option of customOption) {
      option.addEventListener('click', function () {
        if (!option.classList.contains('selected')) {
          if (option.parentNode.querySelector(`.${props.ClassDesc} .forecast-option.selected`)) {
            option.parentNode.querySelector(`.${props.ClassDesc} .forecast-option.selected`).classList.remove('selected')
          }
          option.classList.add('selected')
          option.closest('.forecast-select').querySelector(`.${props.ClassDesc} .forecast-select__trigger span`).textContent = option.textContent
          option.closest('.forecast-select').querySelector(`.${props.ClassDesc} .forecast-select__trigger`).classList.add('active')
        }
      })
    }

    window.addEventListener('click', function (e) {
      for (const select of customSelect) {
        if (!select.contains(e.target)) {
          select.classList.remove('open')
        }
      }
    })
  }, [])

  const items = renderItems(COORDINATES)

  return (
        <div className={props.ClassDesc}>
            <div className="forecast-select-wrapper">
                <div className="forecast-select">
                    <div className="forecast-select__trigger"><span>Select city</span>
                        <div className="arrow"/>
                    </div>
                    <div className="forecast-options">
                        {items}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SelectCustom
