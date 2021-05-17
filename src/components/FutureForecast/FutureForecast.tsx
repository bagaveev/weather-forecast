import React, { Component } from 'react'
import './FutureForecast.scss'
import ErrorChoiceNotif from '../../common/components/EmptyChoiceNotif'
import SelectCity from '../../common/components/SelectCity'

export default class FutureForecast extends Component {
    state = {
      selectCity: null
    };

    onCitySelected = (name: any) => {
      console.log(name)
      this.setState({
        selectCity: name
      })
    }

    render () {
      return (
            <div>
                <SelectCity OnCitySelected={this.onCitySelected}/>
                <ErrorChoiceNotif/>
            </div>
      )
    }
}
