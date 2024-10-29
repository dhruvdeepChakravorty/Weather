let apiKey = "3b400751cdc6a90df5df85165001a302";
let searchBtn = document.querySelector(".btnSearch");
let searchBox = document.querySelector(".searchInput");
let weatherIcon=document.querySelector("#weatherIcon")
let weather = async (city) => {
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  
 
    try {
        let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error("City not found");
        }
        document.querySelector(".a").classList.remove('hide')
        
        console.log(data);
        document.querySelector(".cityName").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
        document.querySelector(".humPer").innerHTML = data.main.humidity + "%";
        document.querySelector(".speedWind").innerHTML = Math.floor(data.wind.speed) + "Km/H";
        
        
        let iconCode=data.weather[0].icon;
        iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`
        weatherIcon.src=iconUrl;
        
    } catch (error) {
        document.querySelector(".a").classList.remove('hide')
        console.error("Error fetching weather data:", error);
       
        document.querySelector(".cityName").innerHTML = "City not found";
        document.querySelector(".temp").innerHTML = "--°C";
        document.querySelector(".humPer").innerHTML = "--%";
        document.querySelector(".speedWind").innerHTML = "--Km/H";
    }
   
};

searchBtn.addEventListener('click', () => {
    if (searchBox.value.trim()) {  
        
            weather(searchBox.value.trim());
        
       
    } else {
        alert("Please enter a city name");
    }
});
