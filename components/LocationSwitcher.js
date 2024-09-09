"use client";
import { getLocation } from "@/app/api/location/location.util";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const LocationSwitcher = () => {
  const [showLocation, setShowLocation] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function getLocationList() {
      const locations = await getLocation();
      setLocations(locations);
    }

    getLocationList();
  }, []);

  return (
    <div className="relative">
      <button onClick={() => setShowLocation(!showLocation)}>
        <Image
          className="size-9"
          src="/icons/link.svg"
          alt="link icon"
          width={36}
          height={36}
        />
      </button>

      {showLocation && (
        <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-h-64 overflow-y-auto max-md:-translate-x-1/2">
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            {locations &&
              locations?.map((info) => (
                <li key={info?.location}>
                  <Link
                    href={`/${info?.location}?latitude=${info?.latitude}&longitude=${info?.longitude}`}
                  >
                    {info?.location}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationSwitcher;
