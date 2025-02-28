Weather App

This is a simple weather application that allows users to search for weather conditions by city. It fetches weather data from the OpenWeather API through a backend server.

Features

Search weather by city name

Display temperature, humidity, wind speed, and weather condition

Backend built with Express.js

Frontend built with React

Technologies Used

Frontend: React, Vite

Backend: Node.js, Express.js

API: OpenWeather API

Installation

Prerequisites

Ensure you have the following installed:

Node.js

npm or yarn

Clone the Repository

git clone https://github.com/aya-asylbek/weather-app.git
cd weather-app

Backend Setup

Navigate to the backend folder:

cd server

Install dependencies:

npm install

Create a .env file in the server folder and add your OpenWeather API key:

OPENWEATHER_API_KEY=your_api_key_here

Start the backend server:

npm start

Frontend Setup

Navigate to the frontend folder:

cd client

Install dependencies:

npm install

Start the frontend server:

npm run dev

Usage

Open the frontend in your browser (http://localhost:5173).

Enter a city name and click the search button.

View the weather details displayed on the screen.

API Endpoint

The backend server provides the following endpoint:

GET /weather?cityName={city}

Example:

http://localhost:3001/weather?cityName=Sunnyvale

Author

aya-asylbek

License

This project is licensed under the MIT License.



