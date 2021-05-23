# Weather Forecast

Weather Forecast is a test task for the React Bootcamp internship

## Installation

Install the dependencies:

### `npm install`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 7 Days Forecast

This block displays the weather for five cities.

When you select a city, 8 blocks are displayed.

The first block is the current temperature, rounded to the nearest side.

The following blocks display the maximum temperature rounded to the nearest integer for the next 7 days.

## Forecast for a Date in the Past

This block displays information about the weather on the current day and in the previous 5 days.

The weather is displayed at the time 00:00.

If the date is not selected in this range, a notification is displayed.

## About the implementation

Since I have little experience in React and TypeScript, maybe I'm somewhere not quite right to apply React Hooks, especially the CalcFutForecast component.

There are also some places in typing where I didn't know how to type a variable and wrote it the Any type, since everything worked with it.

API requests are processed in the services folder.

The SelectCity component is not used, instead I added a SelectCustom, which is stylized.

## What can be implemented better

Starting from the width of 820 or less, I remove arrows from the slider in the first block, and if you don't use the trackpad or magic mouse, it's problematic to scroll through it. \
Using keyboard arrows for this isn't quite correct, I didn't implement it here.

Also, the calendar isn't displayed quite correctly in desktop Safari, since it doesn't have its own datapicker, I added a placeholder there so that the user can see the format for entering the date

Also, when you change the city, when some weather is already shown, the data simply changes to the current one. \
I think it's possible to add some effect to make it visible explicitly.