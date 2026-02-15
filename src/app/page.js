"use client"
import ErrorMessage from "@/components/ErrorMessage";
import LoadingOverlay from "@/components/LoadingOverlay";
import { Key, Search } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {

  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
    let lat, lon;
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        setLoading(true);
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        console.log(lon, lat);
        setError(null);
        try {
          const response = await fetch(`api/weather?lat=${lat}&lon=${lon}`);
          if (!response.ok) {
            throw new Error(`request failed with status ${response.status}`);
          }
          const data = await response.json();
          setWeatherData(data);
        } catch (err) {
          setError(err);
          console.log(`error ${error}`);
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.log(error.message);
      }
    );

  }, []);

  const fetchWeather = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(`/api/weather?city=${city}`);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }
      const data = await response.json()

      setWeatherData(data);
      console.log(data);
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
    }
    finally {
      setLoading(false);
    }
  }

  const hasWeather = Boolean(weatherData);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 p-4">
      {loading && <LoadingOverlay />}
      <div className="w-full max-w-md rounded-2xl bg-white/90 backdrop-blur shadow-2xl p-6">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          Weather App
        </h1>
        <p className="text-sm text-center text-gray-500 mt-1">
          Clean & modern weather app
        </p>


        {/* Search Bar (UI only) */}
        <div className="flex items-center gap-2 mt-6">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                fetchWeather();
              }
            }}
            placeholder="Enter city name"
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            className="rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700 transition"
            onClick={fetchWeather}>
            <Search size={18} />
          </button>
        </div>

        {error ? <ErrorMessage /> : <div className="mt-6 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-5 text-white">

          <h2 className="text-xl font-medium text-center">
            {hasWeather ? weatherData.name : "No city selected"}
          </h2>
          <div className="mt-4 flex items-center justify-center">
            <span className="text-5xl font-bold">
              {hasWeather ? `${weatherData.main.temp}°` : "--°"}
            </span>
          </div>
          <p className="text-center text-sm mt-1 opacity-90">
            {hasWeather ? weatherData.weather[0].main : "Search for a city to view weather"}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-lg bg-white/20 p-3 text-center">
              <p className="opacity-80">Clouds</p>
              <p className="font-semibold">
                {hasWeather ? `${weatherData.clouds.all}%` : "--"}
              </p>
            </div>
            <div className="rounded-lg bg-white/20 p-3 text-center">
              <p className="opacity-80">Wind</p>
              <p className="font-semibold">
                {hasWeather ? `${weatherData.wind.speed} km/hr` : "--"}
              </p>
            </div>
          </div>

        </div>
        }



      </div>
    </div>
  );

}
