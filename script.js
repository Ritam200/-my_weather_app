const apiKey = "82ebdd1365654a1ba1b164203250903";
const apiUrl = "https://api.weatherapi.com/v1/current.json?aqi=no&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&key=${apiKey}`);
    if (response.status == 400) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();


        document.querySelector(".city").innerHTML = data.location.name;
        document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
        document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
        document.querySelector(".wind").innerHTML = data.current.wind_kph + "kph";
        if (data.current.condition.text == "Mist") {
            weatherIcon.src = "mist.png.png";
        }
        if (data.current.condition.text == "Clear") {
            weatherIcon.src = "clear.png.png";
        }
        if (data.current.condition.text == "Clouds") {
            weatherIcon.src = "clouds.png.png";
        }
        if (data.current.condition.text == "Drizzle") {
            weatherIcon.src = "drizzle.png.png";
        }
        if (data.current.condition.text == "Fog") {
            weatherIcon.src = "fog.png.png";
        }
        if (data.current.condition.text == "Rain") {
            weatherIcon.src = "Rain.png.png";
        }
        if (data.current.condition.text == "Snow") {
            weatherIcon.src = "snow.png.png";
        }
        if (data.current.condition.text == "Sun") {
            weatherIcon.src = "sun.png.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

