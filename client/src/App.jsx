import { useState } from "react";
import WeatherForm from "./WeatherForm";
import Weather from "./Weather";
import './App.css'; 

function App() {
    const [weather, setWeather] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (city) => {
        if (!city.trim()) {
            setError("Please enter a city name");
            return;
        }

        try {
            setIsLoading(true);
            setError(null);

            const response = await fetch(`http://localhost:3001/weather?cityName=${encodeURIComponent(city)}`);

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            setWeather(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="app-container">
            <h1>Weather App</h1>
            <WeatherForm onSubmit={handleSearch} />

            {isLoading && <p className="loading">Loading...</p>}
            {error && <p className="error-message">{error}</p>}
            {weather && <Weather data={weather} />}
        </div>
    );
}

export default App;

// import { useState } from "react";
// import WeatherForm from "./WeatherForm";
// import Weather from "./Weather";
// // App.js
// import './App.css'; 

// function App() {
//     const [weather, setWeather] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const handleSearch = async (city) => {
//         if (!city.trim()) {
//             setError("Please enter a city name");
//             return;
//         }

//         try {
//             setIsLoading(true);
//             setError(null);

//             const response = await fetch(`http://localhost:3001/weather?cityName=${encodeURIComponent(city)}`);

//             if (!response.ok) {
//                 throw new Error(`Error: ${response.statusText}`);
//             }

//             const data = await response.json();
//             setWeather(data);
//         } catch (error) {
//             setError(error.message);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="app-container">
//             <h1>Weather App</h1>
//             <WeatherForm onSubmit={handleSearch} />

//             {isLoading && <p className="loading">Loading...</p>}
//             {error && <p className="error-message">{error}</p>}
//             {weather && <Weather data={weather} />}
//         </div>
//     );
// }

// export default App;