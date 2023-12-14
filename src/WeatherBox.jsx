import React, { useState } from 'react';

export default function WeatherBox() {

    const [data, setData] = useState(null);
    const [city, setCity] = useState("");

    const startFetching = () => {
        const apiKey = 'qUAEgQaX39lHJxatyJOEGA==TCIQG3AXxpPoH0vf';
        const apiUrl = `https://api.api-ninjas.com/v1/weather?city=${city}`;

        const fetchData = async () => {
            const response = await fetch(apiUrl, {
            headers: {
                'X-Api-Key': apiKey,
            }
            });

        const result = await response.json();
        setData(result);
        };
        fetchData();
    };

  return (
    <div>
        <input 
            placeholder='Enter a city...'
            onChange={(e) => {
            setCity(e.target.value);
            }}
        />
        <button onClick={startFetching}>Get weather</button>
        <h1>Temperature: {data?.temp}°C</h1>
    </div>
  )
}
