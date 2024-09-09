import React from "react";
import Card from "./Card";
import Image from "next/image";
import { getWeatherData } from "@/lib/weather_info";

const CurrentWeatherComp = async ({ lat, lon }) => {
  const weatherData = await getWeatherData(lat, lon);
  const { main, icon, description } = weatherData || {};
  return (
    <Card>
      <h6 className="feature-name">Current Weather</h6>
      <div className="feature-main">
        <Image
          height={80}
          width={80}
          className="max-w-20"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="rain icon"
        />
        <h3 className="feature-title">{main}</h3>
        <span className="feature-name">{description}</span>
      </div>
    </Card>
  );
};

export default CurrentWeatherComp;
