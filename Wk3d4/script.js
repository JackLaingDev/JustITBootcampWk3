// Element definitions


// Funcs
const getWeatherData = async ()=>{
    const api_key = 'b02f35934fb0cba82950cbbf2907fa55'
    let city = 'London'
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + api_key + '&units=metric'

    fetch(url) 
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

