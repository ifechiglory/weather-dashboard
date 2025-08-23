import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchWeather, clearWeather } from "./weatherSlice";
import WeatherCard from "../../components/WeatherCard";

export default function WeatherDashboard() {
  const dispatch = useDispatch();
  const { data, loading, error, lastCity } = useSelector((s) => s.weather);
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) dispatch(fetchWeather(city.trim()));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <section className="w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Weather Dashboard</h1>

      <section className="flex gap-2 mb-4">
        <input
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="Search city e.g. Lagos"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Search
        </button>
      </section>

      {loading && (
        <section className="flex items-center gap-2 text-gray-700 mb-3">
          <span className="inline-block w-4 h-4 border-2 border-gray-300 border-t-gray-700 rounded-full animate-spin" />
          Fetching weather…
        </section>
      )}

      {error && (
        <section className="bg-red-50 text-red-700 border border-red-200 rounded p-3 mb-3">
          {error}
        </section>
      )}

      {data && (
        <section className="space-y-3">
          <WeatherCard
            name={data?.name}
            temp={data.main?.temp}
            desc={data.weather[0].description}
            icon={data.weather[0].icon}
          />

          <section className="grid grid-cols-2 gap-3">
            <section className="bg-white rounded-xl shadow p-4">
              <p className="text-xs text-gray-500">Feels like</p>
              <p className="text-lg font-semibold">
                {data.main?.feels_like !== undefined
                  ? `${data.main.feels_like}°C`
                  : "N/A"}
              </p>
            </section>
            <section className="bg-white rounded-xl shadow p-4">
              <p className="text-xs text-gray-500">Humidity</p>
              <p className="text-lg font-semibold">
                {data.main?.humidity !== undefined
                  ? `${data.main.humidity}%`
                  : "N/A"}
              </p>
            </section>
            <section className="bg-white rounded-xl shadow p-4">
              <p className="text-xs text-gray-500">Wind</p>
              <p className="text-lg font-semibold">
                {data.wind?.speed !== undefined
                  ? `${data.wind.speed} m/s`
                  : "N/A"}
              </p>
            </section>
            <section className="bg-white rounded-xl shadow p-4">
              <p className="text-xs text-gray-500">Min / Max</p>
              <p className="text-lg font-semibold">
                {data.main?.temp_min !== undefined &&
                data.main?.temp_max !== undefined
                  ? `${Math.round(data.main.temp_min)}° / ${Math.round(
                      data.main.temp_max
                    )}°`
                  : "N/A"}
              </p>
            </section>
          </section>

          <button
            onClick={() => dispatch(clearWeather())}
            className="text-sm text-gray-600 hover:text-gray-800 underline"
          >
            Clear result{lastCity ? ` for ${lastCity}` : ""}
          </button>
        </section>
      )}
    </section>
  );
}
