import React, { Component } from 'react'

import Title from "./components/Title";

import Form from "./components/Form";


import Myweather from "./components/Myweather";

//const API_KEY = "cfae233e4962e63dbfc840162cf039e1";


class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
    
  }
  getWeather = async(e) => {
    e.preventDefault(); 
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=cfae233e4962e63dbfc840162cf039e1&units=metric`);
    const data = await api_call.json();
    //console.log(data);
    //debugger
    this.setState({
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      humidity:data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });
  }
  render() {
    //console.log("render");
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather}/>
        <Myweather
          
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
       
      </div>
    )
  }
}

export default App
