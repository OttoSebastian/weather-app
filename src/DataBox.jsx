import React from 'react';
//Images
import Sunny from "./pictures/sun.svg";
import PartlySunny from "./pictures/partlysunny.svg";
import Cloudy from "./pictures/cloudy.svg";
import MaxTemp from "./pictures/maxtemp.svg";
import MinTemp from "./pictures/mintemp.svg";
import Hand from "./pictures/hand.svg";
import Humidity from "./pictures/humidity.svg";

export default function DataBox({temperature, clouds, maxTemp, minTemp, feelsLike, humidity}) {

  const weatherImageStyle = {
    width: "8rem",
    marginRight: "2rem",
  }
  const tempStyle = {
    fontSize: "70px",
    color: "white",
    fontWeight: "200"
  }
  const additionalWeatherStyle = {
    width: "3rem",
    marginRight: "1rem"
  }
  const header = {
    fontSize: "50px",
    fontFamily: "Bebas Neue, sans-serif",
    color: "white",
    width: "100%",
    marginBottom: "5%"
  }
  const info = {
    display: "flex", 
    justifyContent: "center", 
    width: "100%"
  }

  return (
    <div className='weather'>
      <div className='temperature'>
        <div style={header}>
          Weather now
        </div>
        <div style={info}>
          {clouds <= 25 && <img src={Sunny} alt='sunny' style={weatherImageStyle}/>}
          {(clouds > 25 && clouds <= 65) && <img src={PartlySunny} alt='partlysunny' style={weatherImageStyle}/>}
          {clouds > 65 && <img src={Cloudy} alt='cloudy' style={weatherImageStyle}/>}
          <h1 style={tempStyle}>{temperature}°C</h1>
        </div>
      </div>
      <div className='details'>
        <div className='detailItem'>
          <img src={MaxTemp} alt="maxtemp" style={additionalWeatherStyle}/>
          Max temp {maxTemp}°C
        </div>
        <div className='detailItem'>
          <img src={MinTemp} alt="mintemp" style={additionalWeatherStyle}/>
          Min temp {minTemp}°C
        </div>
        <div className='detailItem'>
          <img src={Hand} alt="feelslike" style={additionalWeatherStyle}/>
          Feels like {feelsLike}°C
        </div>
        <div className='detailItem'>
          <img src={Humidity} alt="humidity" style={additionalWeatherStyle}/>
          Humidity {humidity}%
        </div>
      </div>
    </div>
  )
}
