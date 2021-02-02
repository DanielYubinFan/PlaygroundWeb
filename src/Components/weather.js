import React from 'react';

import '../Stylesheets/weather.css';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          zipCode: "",
          weather : {
            city_name : "Location",
            description : "Weather Description",
            humidity : "--",
            temp : "--",
            temp_max : "--",
            temp_min : "--",
            icon: "04n"},
        };
    }

    
    handleChange(e) {
        this.setState({zipCode: e.target.value});
        //console.log(this.state.zipCode);
    }

    //handleClick to get the weather data
    handleClick = () => {
        const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
        let url = `${baseUrl}?zip=${this.state.zipCode},us&appid=e0781f80fbd2f811e646fd598f15362d`;
        /* Use get api for "By ZIP code" (https://openweathermap.org/current#zip)
        * - The "us" query stands for "United States
        * - "process.env.WEATHER_KEY" is the api key that we get from the .env file*/
        fetch(url)
            .then(res => res.json())
            .then(
                json => this.setState({weather :{
                    ...this.state.weather,
                    city_name: json.name,
                    description: json.weather[0].description,
                    humidity: json.main.humidity,
                    temp: (json.main.temp / 10).toPrecision(4),
                    temp_min: (json.main.temp_min / 10).toPrecision(4),
                    temp_max: (json.main.temp_max / 10).toPrecision(4),
                    icon: json.weather[0].icon
                }}))
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        const iconUrl = `http://openweathermap.org/img/wn/${this.state.weather.icon}@2x.png`;
        return (
            <div>
            <center>Welcome to Yubin's Playground! Enter your ZipCode to get the weather forecast!</center>
            <form className="zipCode">
            <span>Zip Code:</span>
            <input type="text" className="zipCodeInput" placeholder="Enter Your ZipCode" value={this.state.zipCode} onChange={e => this.handleChange(e)} />
            <button type="button" className=".save-btn" onClick={this.handleClick}>Submit</button>
          </form>
            <section className="weather-info">
                    <h3 className="city-name">{this.state.weather.city_name}</h3>

                    <section className="overcast">
                        <img src={iconUrl} className="overcast-img" alt=""/>
                        <span className="overcast-description">{this.state.weather.description}</span>
                    </section>

                    <hr/>

                    <section className="current-weather">
                        <span className="humidity">Humidity: {this.state.weather.humidity}%</span>
                        <span className="curr-temp">Temp: {this.state.weather.temp}°F</span>
                    </section>

                    <hr/>

                    <section className="temps">
                        <span className="min-temp">Low Temp: {this.state.weather.temp_min}°F</span>
                        <span className="max-temp">High Temp: {this.state.weather.temp_max}°F</span>
                    </section>
                </section>
            </div>
        );
    }
}

export default Weather;