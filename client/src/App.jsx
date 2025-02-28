import { useState } from "react";
import WeatherForm from "./WeatherForm";
import Weather from "./Weather";



function App() {
    const [weather, setWeather] = useState(null);
    const handleSearch = async (city) => {
        try {
            const response = await fetch(`http://localhost:3001/weather?cityName=${city}`);
            const data = await response.json();
            setWeather(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div>
            <h2>Weather App</h2>
            <WeatherForm onSubmit={handleSearch} />
            {weather && <Weather data={weather} />}
        </div>
    );
}
export default App;