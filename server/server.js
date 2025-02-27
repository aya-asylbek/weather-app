import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use(cors())
app.get('/', (req, res) => res.send('Server is running!'))

const PORT = process.env.PORT || 3001
app.listen(PORT, () =>console.log(`Server started on port ${PORT}`))


app.get('/weather/:city', async (req, res) => {
    const city = req.params.city
    console.log('city', city)
    const apiKey = process.env.OPENWEATHER_API_KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  
    try {
      const response = await fetch(url)
      const data = await response.json()
      res.json(data)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  })