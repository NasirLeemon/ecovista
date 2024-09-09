import CurrentWeatherComp from "@/components/CurrentWeatherComp";

import React from "react";

const WeatherPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return <CurrentWeatherComp lat={latitude} lon={longitude} />;
};

export default WeatherPage;
