export default function Weather({ data }) {
    return (
      <div>
        <h2>{data.name}</h2>
        <p>Temperature: {Math.round(data.main.temp)}°C</p>
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind: {data.wind.speed} m/s</p>
      </div>
    )
}