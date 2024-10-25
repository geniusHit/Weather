import React, { useState } from "react"
import './App.css'
import axios from "axios"

const App=()=>{
  const [city, setCity]=useState()
  const [weather, setWeather]=useState()
  const cityChange=(e)=>{
    setCity(e.target.value)
  }
  const fetchWeather=async()=>{
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'3a417d197654067e3b48b4e96211ec59'}`)
      console.log(response)
      setWeather(response)
    }
    catch(error){
      console.log("Error in fetching weather data.", error)
    }
  }
  console.log(weather, 'weather')
  const getWeather=()=>{
    fetchWeather()
  }

  return (
    <>
      <div id="container">
        <div id="main">
          <input type="text" id="city" placeholder="City" onChange={cityChange}></input>
          <button onClick={getWeather}>Get Weather</button><br></br>
          {weather && <>
            <div>
              <h3>{weather.data.name}</h3>
              <p>{(weather.data.wind.deg-32)*(5/9)}&deg;C</p>
              <p>{weather.data.weather[0].description}</p>
            </div>
          </>}
        </div>
      </div>
    </>
  )
}

export default App