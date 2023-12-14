import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";

export default function WeatherBox() {

    const [data, setData] = useState(null);
    const [city, setCity] = useState("");

    const startFetching = () => {
        const apiKey = 'qUAEgQaX39lHJxatyJOEGA==TCIQG3AXxpPoH0vf';
        const apiUrl = `https://api.api-ninjas.com/v1/weather?city=${city}`;

        const fetchData = async () => {
            const response = await fetch(apiUrl, {
            headers: {
                'X-Api-Key': apiKey
            }
            });

        const result = await response.json();
        setData(result);
        };
        fetchData();
    };

  return (
    <>
        <div className='mainDiv'>
            <div className='inputDiv'>
                <input
                    placeholder='Enter a city...'
                    onChange={(e) => {
                    setCity(e.target.value);
                    }}
                />
                <button onClick={startFetching}>{<IoIosSearch style={{fontSize: "30px"}}/>} Search</button>
            </div>
            <div className='weatherDiv'>
                <h1>Current: {data?.temp}°C</h1>
                <h1>Lowest: {data?.min_temp}°C</h1>
                <h1>Highest: {data?.max_temp}°C</h1>
            </div>
        </div>
    </>
  )
}
