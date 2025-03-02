# Weather App

This is a simple weather application that allows users to search for weather conditions by city. It fetches weather data from the OpenWeather API through a backend server.

## Features

- Search weather by city name
- Display temperature, humidity, wind speed, and weather condition
- Backend built with **Express.js**
- Frontend built with **React & Vite**

## Technologies Used

- **Frontend:** React, Vite
- **Backend:** Node.js, Express.js
- **API:** OpenWeather API

---

## Installation

### **Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- npm or yarn

### **Clone the Repository**
```sh
git clone https://github.com/aya-asylbek/weather-app.git
cd weather-app
Backend Setup
Navigate to the backend folder:
sh
Copy
Edit
cd server
Install dependencies:
sh
Copy
Edit
npm install
Create a .env file in the server folder and add your OpenWeather API key:
sh
Copy
Edit
OPENWEATHER_API_KEY=your_api_key_here
Start the backend server:
sh
Copy
Edit
npm start
Frontend Setup
Navigate to the frontend folder:
sh
Copy
Edit
cd client
Install dependencies:
sh
Copy
Edit
npm install
Start the frontend server:
sh
Copy
Edit
npm run dev
Usage
Open the frontend in your browser: http://localhost:5173.
Enter a city name and click the search button.
View the weather details displayed on the screen.
Screenshots
Home Page
<img width="507" alt="home-page" src="https://github.com/user-attachments/assets/790f1c62-d9af-44ac-8728-4c5de81e474e" />
Example: Madrid Weather
<img width="501" alt="Madrid weather ,icon and details" src="https://github.com/user-attachments/assets/f7af8df7-93cb-40fa-b4ec-dd2be85527e2" />
Example: Barcelona Weather
<img width="501" alt="another example" src="https://github.com/user-attachments/assets/2a454c0b-523a-4abe-b4a9-81ee27476780" />
Error Handling (Empty Input)
<img width="507" alt="Name is not filled ,error Please enter name" src="https://github.com/user-attachments/assets/55be1bab-8015-4189-b5a3-9131f078e208" />
API Endpoint
The backend server provides the following endpoint:

GET /weather?cityName={city}

Example:

sh
Copy
Edit
http://localhost:3001/weather?cityName=Sunnyvale
Troubleshooting
1. "Failed to load resource: net::ERR_CONNECTION_REFUSED"
Ensure the backend server is running:

sh
Copy
Edit
cd server
npm start
Check if port 3001 is already in use:

sh
Copy
Edit
lsof -i :3001  # macOS/Linux
netstat -ano | findstr :3001  # Windows
If another process is using the port, stop it or change the backend port.

Check if CORS is blocking the request:

js
Copy
Edit
const cors = require("cors");
app.use(cors());
2. "City not found" or "Invalid API Key"
Verify your OpenWeather API key in the .env file.
Check if you exceeded API rate limits.
Author
aya-asylbek

License
This project is licensed under the MIT License.
