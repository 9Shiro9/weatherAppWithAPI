let weather = {
    "apiKey" : "cac4f095cb35bb6c1bbe1fd2c7e04472",
    "fetchWeather" : function (city){
        
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&appid=" + this.apiKey)
        .then(response => response.json())
        .then(data => this.displayWeather(data))
    },
    "displayWeather" : function (data){
        const {name} = data;
        const {icon , description} = data.weather[0] ; 
        const {temp , humidity} = data.main;
        const {speed} = data.wind;
        console.log("name:" + name);
        console.log("icon:" + icon);
        console.log("description:" + description);
        console.log("temp:" + temp);
        console.log("humidity:" + humidity);
        console.log("speed:" + speed);
        document.querySelector("#city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"  + icon + "@2x.png";
        document.querySelector(".temp").innerText = temp.toFixed(1) +  " °C" ;
        document.querySelector(".description").innerText = capitalizeFirstLetter(description);
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + " %";
        document.querySelector(".wind").innerText = "Wind Speed : " + speed.toFixed(1) + " km/hr";
        document.body.style.backgroundImage = `url("https://source.unsplash.com/random/1920x1080/?${name}")`;
        document.querySelector(".weather").style.display = "block";
    },
    "search" : function (){
        console.log("search button is clicked")
        document.querySelector(".weather").classList.add("loading");
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

document.querySelector(".search-button").addEventListener("click" , function (){
    weather.search();
} )

document.querySelector(".search-bar").addEventListener("keyup" , function (event){
    if (event.key == "Enter"){
        weather.search();
        document.querySelector(".search-bar").value = ""
    }
} )


function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }



