function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "YOUR_API_KEY"; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("weather-description").textContent = `Weather: ${data.weather[0].description}`;
            document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById("wind-speed").textContent = `Wind Speed: ${data.wind.speed} m/s`;
        })
        .catch((error) => {
            console.error("Error fetching weather data: " + error);
        });
}

