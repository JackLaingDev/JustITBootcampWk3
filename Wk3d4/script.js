// Element definitions 
// Search
const searchDiv = document.querySelector('#searchDiv')
const search = document.querySelector('#search')
const searchBtn = document.querySelector('#searchBtn')

// Info
const infoMain = document.querySelector('#info')
// Weather Info
const weatherInfoDiv = document.querySelector('#weatherInfo')
const cityDisplay = document.querySelector('#cityDisplay')
const weatherMain = document.querySelector('#weatherMain')
const weatherDesc = document.querySelector('#weatherDesc')

// Meteorological Info
const meteorInfoDiv = document.querySelector('#meteorInfo')
const temp = document.querySelector('#temp')
const feelsLike = document.querySelector('#feelsLike')
const tempMin = document.querySelector('#tempMin')
const tempMax = document.querySelector('#tempMax')
const pressure = document.querySelector('#pressure')
const humidity = document.querySelector('#humidity')

// Funcs
const getWeatherData = async (city)=>{
    const api_key = 'b02f35934fb0cba82950cbbf2907fa55'
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + api_key + '&units=metric'

    return fetch(url) 
    .then((response) =>{ 
        if (response.ok) { return response.json(); } 
    }) 
    .then((data) =>{ 
        if (!data) return; 
        console.log(`Successfully retrieved weather data for: ${city}`);
        return data;
    }) 
    .catch((error) =>{ 
        console.log(`ERROR: ${error}`);
    });
}

const displayWeather = async (city)=>{
    console.log("Displaying weather...");

    try{
        const weatherData = await getWeatherData(city);

        // Main Display
        cityDisplay.textContent = city;
        weatherMain.textContent = weatherData.weather[0].main;
        weatherDesc.textContent = weatherData.weather[0].description;

        // Meteorological Display
        temp.textContent = weatherData.main.temp;
        feelsLike.textContent = weatherData.main.feels_like;
        tempMin.textContent = weatherData.main.temp_min;
        tempMax.textContent = weatherData.main.temp_max;
        pressure.textContent = weatherData.main.pressure;
        humidity.textContent = weatherData.main.humidity;

    }finally{
        console.log(`Weather data loaded!`);
    }
}


searchBtn.addEventListener('click', ()=>{
    const city = search.value;
    console.log(city)
    displayWeather(city);
})