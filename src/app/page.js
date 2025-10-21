"use client"
import NavBar from "@/components/NavBar";
import CurrentWeather from "@/components/CurrentWeather";
import HourlyForecast from "@/components/HourlyForecast";
import PrecipitationComponent from "@/components/PrecipitationComponent";
import WeatherMap from "@/components/WeatherMap";
import WeeklyForecast from "@/components/WeeklyForecast";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-blue-200 to-zinc-200">
      <NavBar/>
      {/* main content */}
      <div className="px-18 py-12">
        <div className="grid gap-8 grid-cols-[2fr_1fr_1.5fr] grid-rows-[1fr_1.5fr_1.5fr] h-[calc(100vh-180px)]">
          {/* Current Weather - Large card on the left */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 row-span-2 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Current Weather</h2>
            <CurrentWeather/>
          </div>

          {/* Hourly Forecast - Middle column */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 row-span-2 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Hourly Forecast</h2>
            <HourlyForecast/>
          </div>

          {/* Precipitation - Top right */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Precipitation</h2>
            <PrecipitationComponent/>
          </div>

          {/* Weather Map - Bottom right */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg h-full row-span-2">
            <h2 className="text-2xl font-semibold mb-4">Weather Map</h2>
            <WeatherMap/>
          </div>

          {/* Weekly Forecast - Bottom row, spans first two columns */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 col-span-2 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">7-Day Forecast</h2>
            <WeeklyForecast/>
          </div>
        </div>
      </div>
    </div>
  );
}
