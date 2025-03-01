function Weather({ data }) {
  if (!data) return null; // Return nothing if no data is passed

  // Function to get the icon URL
  const getIconUrl = (iconCode) => 
      `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  // Get weather condition and map to icons
  const weatherMain = data.weather;
  
  // Get the Unix timestamp from the weather data (dt) and the current time
  const currentTimestamp = Math.floor(Date.now() / 1000); // Current time in Unix timestamp
  const timeOfDay = (data.dt + data.timezone) * 1000; // Add timezone offset (in milliseconds)
  const isDayTime = currentTimestamp - timeOfDay < 43200; // If the current time is within 12 hours of the timestamp, it's daytime

  // Create icon based on weather condition and time of day
  let weatherIconUrl = "";
  let weatherCondition = weatherMain;

  switch (weatherMain) {
      case "Clear":
          weatherIconUrl = getIconUrl(isDayTime ? "01d" : "01n"); // Sunny icon (day or night)
          break;
      case "Few Clouds":
      case "Scattered Clouds":
          weatherIconUrl = getIconUrl(isDayTime ? "02d" : "02n"); // Partly Cloudy icon (day or night)
          break;
      case "Clouds":
          weatherIconUrl = getIconUrl(isDayTime ? "03d" : "03n"); // Cloudy icon (day or night)
          break;
      case "Rain":
          weatherIconUrl = getIconUrl(isDayTime ? "09d" : "09n"); // Rainy icon (day or night)
          break;
      case "Thunderstorm":
          weatherIconUrl = getIconUrl(isDayTime ? "11d" : "11n"); // Thunderstorm icon (day or night)
          break;
      case "Snow":
          weatherIconUrl = getIconUrl(isDayTime ? "13d" : "13n"); // Snowy icon (day or night)
          break;
      case "Drizzle":
          weatherIconUrl = getIconUrl(isDayTime ? "09d" : "09n"); // Drizzle icon (day or night)
          break;
      case "Mist":
      case "Fog":
          weatherIconUrl = getIconUrl(isDayTime ? "50d" : "50n"); // Mist/Fog icon (day or night)
          break;
      default:
          weatherIconUrl = getIconUrl(isDayTime ? "01d" : "01n"); // Default to sunny icon (day or night)
  }

  return (
      <div className="weather-card">
          <h3>Weather in {data.city}</h3>
          <div className="weather-icon">
              <img src={weatherIconUrl} alt={weatherMain} />
          </div>
          <div className="weather-details">
              <p>🌡️ Temperature: {Math.round(data.temperature)}°F</p>
              <p>💧 Humidity: {data.humidity}%</p>
              <p>💨 Wind Speed: {data.windSpeed} m/s</p>
              <p>🌦️ Condition: {weatherMain}</p>
          </div>
      </div>
  );
}

export default Weather;

