import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';



const WeatherButton = ({ cities, selectedCity, handleCityChange }) => {
    console.log("핸들시티체인지",handleCityChange)
    return (
      <div class="menu-container">
        <Button
          variant={`${selectedCity == '' ? "outline-warning" : "warning"}`}
          onClick={() => handleCityChange("current")}
        >
          Current Location
        </Button>
  
        {cities.map((city) => ( //4개의 시티들이 city안에 들어가있음.
          <Button
            variant={`${selectedCity == city ? "outline-warning" : "warning"}`}
            onClick={() => handleCityChange(city)}
          >
            {city}
          </Button>
        ))}
      </div>
    );
  };
  
  export default WeatherButton;
