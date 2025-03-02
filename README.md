WEATHER APP

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

 Home page looks like this : 


<img width="507" alt="home-page" src="https://github.com/user-attachments/assets/790f1c62-d9af-44ac-8728-4c5de81e474e" />

Enter a city name and click the search button.
View the weather details displayed on the screen.

(as an example in below image I searched for Madrid city!)

 <img width="501" alt="Madrid weather ,icon and details" src="https://github.com/user-attachments/assets/f7af8df7-93cb-40fa-b4ec-dd2be85527e2" />

(as an example in below image I searched for Barcelona city!)

<img width="501" alt="another examle " src="https://github.com/user-attachments/assets/2a454c0b-523a-4abe-b4a9-81ee27476780" />

If you will not enter city in search bar ,then error will popped out "Please enter a city name"

<img width="507" alt="Name is not filled ,error Please enter name" src="https://github.com/user-attachments/assets/55be1bab-8015-4189-b5a3-9131f078e208" />

API Endpoint

The backend server provides the following endpoint:

GET /weather?cityName={city}

Example:

http://localhost:3001/weather?cityName=Sunnyvale

Author

aya-asylbek

License

This project is licensed under the MIT License.

