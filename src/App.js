import './App.css';
import React from 'react';
import WeatherBox from './WeatherBox';

function App() {

  return (
    <div className="App">
      <div className='header'>
        <h1 className='headerH'>Get weather of any city</h1>
        <p className='headerP'>Powered by API Ninjas' Weather API</p>
      </div>
      <div className='body'>
        <WeatherBox/>
      </div>
    </div>
  );

}

export default App;
