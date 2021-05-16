export default class OpenWeather {
    _apiBase = 'https://api.openweathermap.org/data/2.5';
    _apiKey = 'c8aeb52ea628ac2aa0021eae44ce11f7';

    async getResource (url: string) {
      const res = await fetch(`${this._apiBase}${url}`)

      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
      }

      return await res.json()
    }

    async getWeather7Days (lat: any, lon: any) {
      const weather = await this.getResource(`/onecall?lat=${lat}&lon=${lon}&lang=ru&units=metric&exclude=hourly,minutely&appid=${this._apiKey}`)
      return this._transformWeather7Days(weather)
    }

    _getDate (item:any) {
      return item.daily.map(
        (el:any) => {
          const milliseconds = el.dt * 1000
          const dateObject = new Date(milliseconds)
          return {
            day: dateObject.toLocaleString('en-US', { day: 'numeric' }),
            month: dateObject.toLocaleString('en-US', { month: 'long' }),
            year: dateObject.toLocaleString('en-US', { year: 'numeric' })
          }
        }
      )
    }

    _getTmp (item:any) {
      return item.daily.map(
        (el:any) => {
          return el.temp.day.toFixed(0)
        }
      )
    }

    _transformWeather7Days = (weather: any) => {
      return {
        date: this._getDate(weather),
        tmp: this._getTmp(weather)
      }
    }
}
