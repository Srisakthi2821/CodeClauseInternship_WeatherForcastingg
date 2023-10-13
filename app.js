let search_field = document.getElementById("input_place_weather");
let svg_google_icon = document.getElementById("svg_icon_google");
let search_button_Weather = document.getElementById("search_button_weather");
let place_weather = document.getElementById("place_answer_weather");
let temperature_weather = document.getElementById("temp_answer");
let description_weather = document.getElementById("description_weather");
let wind_Weather = document.getElementById("windweather");
let humidity_weather = document.getElementById("Humidityweather");
let pressure_weather = document.getElementById("pressureWeather");
let visiblityWeather = document.getElementById("Visiblityweather");
let loader = document.getElementById("loader_weather");
let loader_on_elmn = document.getElementById("answers_weather_loader_on");


search_field.onfocus = function() {
    svg_google_icon.style.color = "#000";
}
search_field.onfocusout = function() {
    svg_google_icon.style.color = "#fff";
}






let getWeather = async (city) => {
    let weatherApi = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ea7e638c20153439011d104886bc367a&units=metric'
    let weatherObj = await fetch(weatherApi)
    let response = weatherObj.json();
    return response;
}

async function callWeather(city) {
    let response = await getWeather(city)
    if (response.cod === "404") {
        alert("Place Not Found")
        return

    } 
    else {
        console.log(response)
        place_weather.textContent = response.name;
        temperature_weather.textContent = response.main.temp;
        pressure_weather.textContent = response.main.pressure;
        humidity_weather.textContent = response.main.humidity;
        wind_Weather.textContent = response.wind.speed;
        visiblityWeather.textContent = response['visibility'];
        description_weather.textContent = response.weather[0]['description'];
        search_field.value = ""
    }


}
let count = 0;


function buttenpressed() {
    let inputValue = search_field.value
    if (inputValue === "") {
        alert("Please Enter a place to search Weather !")
        return
    }
    loader_on_elmn.classList.add("d-none");

    function loaderfunction(stop_interval) {
        loader.classList.toggle("d-none");
    }
    let stop_interval = setInterval(loaderfunction, 1000)
    setTimeout(function() {
        loader_on_elmn.classList.remove("d-none");
        clearInterval(stop_interval);
    }, 4000);


    callWeather(inputValue)
}
search_button_Weather.addEventListener('click', buttenpressed);
search_field.addEventListener("keydown", function() {
    if (event.key === "Enter") {
        buttenpressed();
    }
})

loader.classList.toggle("d-none");




// Start the function with a 1-second interval

// Stop the function after 3 seconds (3000 milliseconds)