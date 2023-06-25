const apiKey = "4d25abecaadd9c5f0be0f15319f1ace9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".windspeed").innerHTML = data.wind.speed +" km/h"; 

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./images/cloudy.jpg"
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./images/clearweather.jpg"
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./images/heavyrain.jpg"
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./images/rainysun.jpg"
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./images/mist.jpg"
    }

    
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

