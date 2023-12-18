import React from 'react';
import { IoIosSunny, IoIosPartlySunny, IoIosCloudy } from "react-icons/io";
import { FaTemperatureArrowUp, FaTemperatureArrowDown, FaHandHoldingDroplet } from "react-icons/fa6";
import { IoWater } from "react-icons/io5";

export default function DataBox({temperature, clouds, maxTemp, minTemp, feelsLike, humidity, chosenCity}) {

  const sunny = {
    fontSize: "200px",
    color: "yellow",
    marginRight: "10%",
  }
  const partlySunny = {
    fontSize: "200px",
    color: "burlywood",
    marginRight: "10%",
  }
  const cloudy = {
    fontSize: "200px",
    color: "grey",
    marginRight: "10%",
  }
  const tempStyle = {
    fontSize: "70px",
    color: "white",
    fontWeight: "200"
  }
  const max = {
    fontSize: "50",
    color: "red",
    marginRight: "5%"
  }
  const min = {
    fontSize: "50",
    color: "blue",
    marginRight: "5%"
  }
  const feel = {
    fontSize: "50",
    color: "khaki",
    marginRight: "5%"
  }
  const humid = {
    fontSize: "50",
    color: "aqua",
    marginRight: "5%"
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
          {clouds <= 25 && <IoIosSunny style={sunny}/>}
          {(clouds > 25 && clouds <= 65) && <IoIosPartlySunny style={partlySunny}/>}
          {clouds > 65 && <IoIosCloudy style={cloudy}/>}
          <h1 style={tempStyle}>{temperature}°C</h1>
        </div>
      </div>
      <div className='details'>
        <div className='detailItem'>
          <FaTemperatureArrowUp style={max}/>
          Max temp {maxTemp}°C
        </div>
        <div className='detailItem'>
          <FaTemperatureArrowDown style={min}/>
          Min temp {minTemp}°C
        </div>
        <div className='detailItem'>
          <FaHandHoldingDroplet style={feel}/>
          Feels like {feelsLike}°C
        </div>
        <div className='detailItem'>
          <IoWater style={humid}/>
          Humidity {humidity}%
        </div>
      </div>
    </div>
  )
}
