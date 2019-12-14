let temperature = document.getElementById("temperature");
let city = document.getElementById("city");
let description = document.getElementById("description");
let wind = document.getElementById("wind-speed");
let search = document.getElementById("city-search").value;
let icon = document.getElementById("icon");
let main = document.getElementById("main");
let humidity = document.getElementById("humidity");
let minimum = document.getElementById("minimum");
let maximum = document.getElementById("maximum");
let feel = document.getElementById("feels-like");

function submit() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + document.getElementById("city-search").value + '&APPID=927083a3ae2c111b10ef3fd5bf87f418', { mode: 'cors' })
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            let weather = response.main.temp
            temperature.innerHTML = Math.floor(weather - 273.15) + '°C';
            city.innerHTML = response.name
            description.innerHTML = response.weather[0].description
            main.innerHTML = response.weather[0].main
            humidity.innerHTML = response.main.humidity + "%"
            icon.src = ("https://openweathermap.org/img/w/") + response.weather[0].icon + '.png'
            wind.innerHTML = response.wind.speed + " " + 'Kmh'
            minimum.innerHTML = Math.floor(response.main.temp_min - 273.15) + '°C';
            maximum.innerHTML = Math.floor(response.main.temp_max - 273.15) + '°C';
            feel.innerHTML = Math.floor(response.main.feels_like - 273.15) + '°C';



            if (response.weather[0].description == "clear sky") {
                document.getElementById("container").style.backgroundImage = "url(https://media1.giphy.com/media/5PhRWWyHVy3goI9A0T/giphy.gif)";

            } else if (response.weather[0].description == "few clouds") {
                document.getElementById("container").style.backgroundImage = "url(https://media.giphy.com/media/67uxmHhIF3uh6Ph8ew/giphy.gif)";

            } else if (response.weather[0].description == "scattered clouds") {
                document.getElementById("container").style.backgroundImage = "url(https://media.giphy.com/media/5HK4TiiBeLSZq/giphy.gif)";

            } else if (response.weather[0].description == "broken clouds") {
                document.getElementById("container").style.backgroundImage = "url(https://media.giphy.com/media/67uxmHhIF3uh6Ph8ew/giphy.gif)";

            } else if (response.weather[0].description == "overcast clouds") {
                document.getElementById("container").style.backgroundImage = "url(https://images.wallpaperscraft.com/image/clouds_sky_overcast_124252_800x1420.jpg)";

            } else if (response.weather[0].description == "thunderstorm") {
                document.getElementById("container").style.backgroundImage = "url(https://media.giphy.com/media/CIYF0RVOmd2qQ/giphy.gif)";

            } else if (response.weather[0].description == "snow") {
                document.getElementById("container").style.backgroundImage = "url(https://media.giphy.com/media/BDucPOizdZ5AI/giphy.gif)";

            } else if (response.weather[0].description == "haze") {
                document.getElementById("container").style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5), transparent),url(https://media.giphy.com/media/3oEjHOoEpRVCbJcLlu/giphy.gif)";

            } else if (response.weather[0].description == "mist") {
                document.getElementById("container").style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5), transparent),url(https://cdn.images.express.co.uk/img/dynamic/153/590x/secondary/UK-weather-1362975.jpg?r=1534891019826)";

            } else if (response.weather[0].description == "fog") {
                document.getElementById("container").style.backgroundImage = "url(https://media.giphy.com/media/McDhCoTyRyLiE/giphy.gif)";

            } else if (response.weather[0].description == "shower rain") {
                document.getElementById("container").style.backgroundImage = "url(https://media.giphy.com/media/NMlmbDwu9eeg8/giphy.gif)";
            } else if (response.weather[0].description == "light rain") {
                document.getElementById("container").style.backgroundImage = "url(https://66.media.tumblr.com/0a3b689d95d6f4bc8538c2c82f8c12ef/tumblr_mt0t3wBxnE1sioq6po1_500.gif)";

            } else if (response.weather[0].description == "smoke") {
                document.getElementById("container").style.backgroundImage = "url(https://i2.wp.com/www.somethingsbrewing.com/wp-content/uploads/2012/01/smoke.jpg)";

            } else if (response.weather[0].description == "rain") {
                document.getElementById("container").style.backgroundImage = "url(https://media.giphy.com/media/5torEEM8QnR95Cqg11/giphy.gif)";
            }
            else if (response.weather[0].description == "moderate rain") {
                document.getElementById("container").style.backgroundImage = "url(https://media.giphy.com/media/5torEEM8QnR95Cqg11/giphy.gif)";
            }
            else {
                document.getElementById("container").style.backgroundImage = "url(https://i.pinimg.com/originals/d3/46/f6/d346f67a21ff7baff030df3721f8850a.gif)";
            }
        })

};