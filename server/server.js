import express from 'express'
import cors from 'cors'; // Cors to allow frontend to acess backend
import dotenv from 'dotenv'
import fetch from 'node-fetch';

dotenv.config()
const app = express()

app.use(cors())

//Route to check server status in browser 
app.get('/', (req, res) => res.send('Server is running!'))


// Route to get weather details through query params from OpenWeather API
app.get('/weather', async (req, res) => {
    try {
        const cityName = req.query.cityName //get the city name from the query parameter
        if (!cityName) {
            return res.status(400).json({ error: 'City name is required' })
        }

        const params = new URLSearchParams({
            q: cityName,
            appid: process.env.OPENWEATHER_API_KEY,
            units: 'imperial', // ==>> F , if c then change to 'metric'
        })

        const url = `https://api.openweathermap.org/data/2.5/weather?${params}`
        
        const response = await fetch(url)
        const data = await response.json()

        if (data.cod !== 200) {
            return res.status(data.cod).json({ error: data.message })
        }

        // Fetching only 5 required details of weather
        const result = {
            city: data.name,
            temperature: data.main.temp,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            weather: data.weather[0].main
        }

        res.json(result)

    } catch (error) {
        console.error('Error:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

//Was able to check through curl command : curl "http://localhost:3001/weather?cityName=Sunnyvale" or change name of city 
//   http://localhost:3001/weather?cityName=Sunnyvale - weather of Sunnyvale city or change the name of city 
//in Postman get command : http://localhost:3001/weather?cityName=Sunnyvale - weather of Sunnyvale or change city 













//To fetch weather from API using OPENWEATHER_API_KEY which is in .env file and using req.params
// app.get('/weather/:city', async (req, res) => {
//   try {
//       const city = req.params.city
//       const apiKey = process.env.OPENWEATHER_API_KEY
//       const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

//       const response = await fetch(url)
//       const data = await response.json()

//       if (data.cod !== 200) {
//           return res.status(data.cod).json({ error: data.message })
//       }
// //We need only 5 details from whole object of weather data in json format
//       res.json({
//           city: data.name,
//           temperature: data.main.temp,
//           humidity: data.main.humidity,
//           wind: data.wind.speed,
//           weather: data.weather[0].main
//       })
      
//   } catch (error) {
//       res.status(500).json({ error: error.message })
//   }
// })

//const PORT = process.env.PORT || 3001
//app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

// Was able to check data with 5 details : city,temp,humidity,wind.speed : --->>> in browser http://localhost:3001/weather/Sunnyvale 
//Curl command --->>> curl "http://localhost:3001/weather/Sunnyvale"


