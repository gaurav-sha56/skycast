import { NextResponse } from "next/server";


export async function GET(request) {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city");
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");

    let response;
    if(city) {
    response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    }
    else if(lat && lon) {
      response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
    }
    else {
      return NextResponse.json(
        { error: "City or coordinates must be provided" },
        { status: 400 }
      );
    }
  

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch weather data" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data); // ✅ Send response back to frontend
  } catch (error) {
    console.error("Error fetching weather:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
