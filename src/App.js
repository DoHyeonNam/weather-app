import logo from './logo.svg';
import './App.css';
import WeatherBox from './component/WeatherBox';
import { Button } from 'react-bootstrap';
import WeatherButton from './component/WeatherButton';
import { useEffect } from 'react';
import { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";


function App() {

  const [weather,setWeather] = useState(null);
  const cities = ["NEW YORK","SEOUL","TOKYO","PARIS"]
  const [city,setCity] = useState('')
  const [loading,setLoading] = useState(false);

  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      myLocation(lat,lon);
    });
  }

  const myLocation = async(lat,lon)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f1397038ac485e66fc256dee23ec1e8c&units=metric`
    setLoading(true)
    let response = await fetch(url);
    let data = await response.json();
    console.log("날씨데이터",data);
    setWeather(data);
    setLoading(false);
  }

  const anotherCity = async()=>{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f1397038ac485e66fc256dee23ec1e8c&units=metric`
      setLoading(true)
      let response = await fetch(url);
      let data = await response.json();
      console.log("어나더데이터",data);
      setWeather(data)
      setLoading(false)
  }

  const handleCityChange = (city)=>{ //선택한 city의 값이 매개변수로 들어온다.
      if(city=="current"){
        setCity('');
      }else{
        setCity(city);
      }
  }

useEffect(()=>{
  if(city == ''){
  getCurrentLocation()
}else{
  anotherCity()
}
},[city]);


  return (
    <div>
      {loading?(
        <div className='container'>
        <ClipLoader
        color={'f886xca'}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>) : (<div className='container'>  
      <WeatherBox weather={weather}/>
      <WeatherButton cities={cities} selectedCity={city} handleCityChange={handleCityChange}/>
    </div>)}

    </div>
  );
}

export default App;
