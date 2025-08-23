# Weather App

A simple weather dashboard built with React, Redux Toolkit, and Axios. This app allows users to search for real-time weather data for any city using the OpenWeather API.

## Features

- 🌤️ Search weather by city name  
- 📡 Fetches live data from [OpenWeather API](https://openweathermap.org/)  
- 🌡️ Displays temperature, condition, and city name  
- 🚨 Error handling for invalid city names  
- ⚡ Built with Redux Toolkit for state management  

## Tech Stack

- **React** (Vite)  
- **Redux Toolkit**  
- **Axios**  
- **TailwindCSS**  

## Installation

Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd weather-app
npm install
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_BASE_URL=https://api.openweathermap.org/data/2.5/weather
VITE_OPENWEATHER_KEY=your_api_key_here
```

You can get a free API key by signing up at [OpenWeather](https://home.openweathermap.org/users/sign_up).

## Running the App

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Project Structure

```bash
src/
├── app/
│   └── store.js
├── features/
│   └── weather/
│       ├── weatherSlice.js
│       └── WeatherDashboard.jsx
├── components/
│   └── WeatherCard.jsx
├── App.jsx
└── main.jsx
```

## Usage

1. Enter a city name in the search box.  
2. Press enter or click the search button.  
3. Weather details (temperature, condition, icon) will be displayed.  

## Error Handling

- If an invalid city is entered, an error message will be displayed.  
- The app gracefully handles API failures.  

## Future Improvements

- Add "Did you mean?" city suggestions  
- Support for multiple days (5-day forecast)  
- Dark mode toggle  
- Mobile responsiveness improvements  

## License

This project is licensed under the MIT License.
