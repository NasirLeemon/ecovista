import React from "react";
import Card from "./Card";
import { getTemperatureData } from "@/lib/weather_info";
import Image from "next/image";
import { calculatData } from "@/utills/dataCalculator";

const TemperatureComponent = async ({ lat, lon }) => {
  const temperature = await getTemperatureData(lat, lon);
  const { temp, feels_like } = temperature || {};

  return (
    <Card>
      <h6 className="feature-name">Current Temperature</h6>
      <div className="feature-main">
        <Image
          height={50}
          width={50}
          className="max-w-20"
          src="/icons/icon_tempareture.png"
          alt="rain icon"
        />
        <h3 className="feature-title">{calculatData(temp)}°C</h3>

        <span className="feature-name">
          Feels Like {calculatData(feels_like)}°C
        </span>
      </div>
    </Card>
  );
};

export default TemperatureComponent;
