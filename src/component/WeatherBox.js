import React from 'react'

const WeatherBox = ({weather}) => {
  return (
    <div className='box'>
    <div className='align'>
      <h2>{weather?.name}</h2>
      <h1>{weather?.main.temp}도 / {Math.floor(weather?.main.temp * 1.8 + 32)}화씨 </h1>
      <h1>{weather?.weather[0].description}</h1>
    </div>
    </div>
  )
}

export default WeatherBox
