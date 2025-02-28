import { useState } from "react";
import WeatherForm from "./WeatherForm";
import Weather from "./Weather";

function App() {
    const [weather, setWeather] = useState(null);
    const handleSearch = async (city) => {
        try {
            const response = await fetch(`http://localhost:3001/weather?city=${city}`);
            const data = await response.json();
            setWeather(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div>
            <h1>Weather App</h1>
            <WeatherForm onSubmit={handleSearch} />
            {weather && <Weather data={weather} />}
        </div>
    );
}
export default App;