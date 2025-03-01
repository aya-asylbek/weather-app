function Weather({ data }) {
  if (!data) return null; // Return nothing if no data is passed

  return (
      <div>
          <h3>Weather in {data.city}</h3>
          <p> 🌡️ Temperature: {data.temperature}°F</p>
          <p> 💧 Humidity: {data.humidity}%</p>
          <p> 💨 Wind Speed: {data.windSpeed} m/s</p>
          <p> 🌦️ Condition: {data.weather}</p>
      </div>
  );
}

export default Weather;








