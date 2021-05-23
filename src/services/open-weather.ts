export default class OpenWeather {
    _apiBase = 'https://api.openweathermap.org/data/2.5';
    _apiKey = 'c8a8fb5580fdb166e938845912ca6d28';
    _imageBase = 'http://openweathermap.org/img/wn/'

    async getResource (url: string) {
      const res = await fetch(`${this._apiBase}${url}`)

      // if (!res.ok) {
      //   throw new Error(`Could not fetch ${url}` +
      //           `, received ${res.status}`)
      // }

      return await res.json()
    }

    async getWeather7Days (lat: any, lon: any) {
      const weather = await this.getResource(`/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=${this._apiKey}`)
      return this._transformWeather7Days(weather)
    }

    async getWeatherPrevious (lat: any, lon: any, time: any) {
      const weather = await this.getResource(`/onecall/timemachine?lat=${lat}&lon=${lon}&units=metric&dt=${time / 1000}&appid=${this._apiKey}`)
      if (weather.cod && weather.message) {
        return weather
      }

      return this._transformWeatherPreviousDay(weather)
    }

    fromDtToString (elem:any) {
      const milliseconds = elem.dt * 1000
      return new Date(milliseconds)
    }

    _getData7Days (item:any) {
      const dailyTemp = item.daily.slice(1).map(
        (el:any) => {
          return {
            day: this.fromDtToString(el).toLocaleString('en-US', { day: 'numeric' }),
            month: this.fromDtToString(el).toLocaleString('en-US', { month: 'long' }),
            year: this.fromDtToString(el).toLocaleString('en-US', { year: 'numeric' }),
            tmp: Math.round(el.temp.max),
            icon: `${this._imageBase}${el.weather[0].icon}@2x.png`
          }
        }
      )

      const currentTemp = {
        day: this.fromDtToString(item.current).toLocaleString('en-US', { day: 'numeric' }),
        month: this.fromDtToString(item.current).toLocaleString('en-US', { month: 'long' }),
        year: this.fromDtToString(item.current).toLocaleString('en-US', { year: 'numeric' }),
        tmp: Math.round(item.current.temp),
        icon: `${this._imageBase}${item.current.weather[0].icon}@2x.png`
      }

      dailyTemp.splice(0, 0, currentTemp)

      return dailyTemp
    }

    _getPreviousDay (item:any) {
      return {
        day: this.fromDtToString(item.current).toLocaleString('en-US', { day: 'numeric' }),
        month: this.fromDtToString(item.current).toLocaleString('en-US', { month: 'long' }),
        year: this.fromDtToString(item.current).toLocaleString('en-US', { year: 'numeric' }),
        tmp: Math.round(item.current.temp),
        icon: `${this._imageBase}${item.current.weather[0].icon}@2x.png`
      }
    }

    _transformWeather7Days = (weather: any) => {
      return this._getData7Days(weather)
    }

    _transformWeatherPreviousDay = (weather: any) => {
      return this._getPreviousDay(weather)
    }
}
