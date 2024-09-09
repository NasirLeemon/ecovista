import { getWindData } from "@/lib/weather_info";
import Card from "./Card";
import Image from "next/image";

const WindComponent = async ({ lat, lon }) => {
  const windData = await getWindData(lat, lon);
  const { speed, deg, gust } = windData || {};

  return (
    <Card>
      <h6 className="feature-name">Wind</h6>
      <div className="feature-main">
        <Image
          height={50}
          width={50}
          className="max-w-20"
          src="/icons/icon_wind.png"
          alt="rain icon"
        />
        <h3 className="feature-title">{speed} meter/sec</h3>
        <span className="feature-name">{deg} deegrees</span>
      </div>
    </Card>
  );
};

export default WindComponent;
