"use client";

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faCloudRain,
  faSun,
  faWind,
  faDroplet,
} from '@fortawesome/free-solid-svg-icons';

interface WeatherData {
  temp: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  city: string;
}

export function Weather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Using Open-Meteo API (no API key needed)
    const fetchWeather = async () => {
      try {
        // Dhaka, Bangladesh coordinates
        const latitude = 23.8103;
        const longitude = 90.4125;

        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`
        );

        if (!response.ok) throw new Error('Weather fetch failed');

        const data = await response.json();
        const current = data.current;

        // Map WMO weather codes to conditions
        const getWeatherCondition = (code: number) => {
          if (code === 0) return 'Clear';
          if (code === 1 || code === 2) return 'Cloudy';
          if (code === 3) return 'Overcast';
          if (code >= 45 && code <= 48) return 'Foggy';
          if (code >= 51 && code <= 67) return 'Drizzle';
          if (code >= 71 && code <= 85) return 'Snowy';
          if (code >= 80 && code <= 82) return 'Rainy';
          if (code === 85 || code === 86) return 'Snowy';
          if (code >= 90 && code <= 99) return 'Thunderstorm';
          return 'Clear';
        };

        setWeather({
          temp: Math.round(current.temperature_2m),
          condition: getWeatherCondition(current.weather_code),
          humidity: current.relative_humidity_2m,
          windSpeed: Math.round(current.wind_speed_10m),
          city: 'Dhaka, Bangladesh',
        });
      } catch (error) {
        console.error('Failed to fetch weather:', error);
        setWeather(null);
      }
    };

    fetchWeather();
    // Refresh weather every 30 minutes
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (!isClient || !weather) {
    return (
      <div className="text-gray-500 dark:text-zinc-400 animate-pulse">
        Loading weather...
      </div>
    );
  }

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'Clear':
        return faSun;
      case 'Rainy':
      case 'Drizzle':
        return faCloudRain;
      default:
        return faCloud;
    }
  };

  return (
    <div className="flex flex-col gap-4 text-gray-600 dark:text-zinc-400 font-mono text-sm">
      <div className="flex items-center gap-3">
        <FontAwesomeIcon
          icon={getWeatherIcon(weather.condition)}
          className="w-5 h-5"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-black dark:text-white">
            {weather.temp}°C
          </span>
          <span className="text-xs">{weather.condition}</span>
        </div>
      </div>

      <div className="flex gap-4 text-xs">
        <div className="flex items-center gap-1">
          <FontAwesomeIcon icon={faDroplet} className="w-3 h-3" />
          <span>{weather.humidity}%</span>
        </div>
        <div className="flex items-center gap-1">
          <FontAwesomeIcon icon={faWind} className="w-3 h-3" />
          <span>{weather.windSpeed} km/h</span>
        </div>
      </div>

      <div className="text-xs text-gray-500 dark:text-zinc-500">
        {weather.city}
      </div>
    </div>
  );
}
