import { useState } from "react";

function WeatherForm({ onSubmit }) {
    const [city, setCity] = useState("");

    const handleChange = (event) => {
        setCity(event.target.value); // Update city input as the user types
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page reload
        onSubmit(city); // Call the onSubmit prop (from App.jsx) with the city
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Enter city" 
                value={city} 
                onChange={handleChange} 
            />
            <button type="submit">Get Weather</button>
        </form>
    );
}

export default WeatherForm;
