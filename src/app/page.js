"use client"
import NavBar from "@/components/NavBar";
import CurrentWeather from "@/components/CurrentWeather";
import HourlyForecast from "@/components/HourlyForecast";
import PrecipitationComponent from "@/components/PrecipitationComponent";
import WeatherMap from "@/components/WeatherMap";
import WeeklyForecast from "@/components/WeeklyForecast";


export default function Home() {
  async function getWeather() {
    const res = await fetch("/api/weather");
    let data = await res.json()
    console.log(data);
  }



  return (
    <div className="min-h-screen bg-gradient-to-t from-blue-200 to-zinc-200">
      <NavBar/>
      {/* main content */}
      <div className="px-8 py-12">
        <div
          className="
      grid gap-8
      xl:grid-cols-[2fr_1fr_1.5fr]
      lg:grid-cols-[1.8fr_1fr]
      md:grid-cols-2
      sm:grid-cols-1
      auto-rows-auto
    "
        >
          {/* Current Weather */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg lg:row-span-2">
            <h2 className="text-2xl font-semibold mb-4">Current Weather</h2>
            <CurrentWeather />
          </div>

          {/* Hourly Forecast */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg lg:row-span-2">
            <h2 className="text-2xl font-semibold mb-4">Hourly Forecast</h2>
            <HourlyForecast />
          </div>

          {/* Precipitation */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Precipitation</h2>
            <PrecipitationComponent />
          </div>

          {/* Weather Map */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg lg:row-span-2">
            <h2 className="text-2xl font-semibold mb-4">Weather Map</h2>
            <WeatherMap />
          </div>

          {/* Weekly Forecast */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">7-Day Forecast</h2>
            <WeeklyForecast />
          </div>
        </div>
      </div>

      <button onClick={getWeather}>click me</button>
    </div>
  );
}
