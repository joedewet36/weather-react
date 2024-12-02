import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
type ContextProviderProps = {
  children?: ReactNode;
};
const AppContext = createContext(null);

const API_KEY: string = import.meta.env.VITE_API_KEY;
const DEFAULT_LATITUDE = import.meta.env.VITE_DEFAULT_LATITUDE;
const DEFAULT_LONGITUDE = import.meta.env.VITE_DEFAULT_LONGITUDE;

async function fetchData(url: string, setter: Function) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setter(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

const AppProvider = ({ children }: ContextProviderProps) => {
  const [latitude, setLatitude] = useState<number | null>(DEFAULT_LATITUDE);
  const [longitude, setLongitude] = useState<number | null>(DEFAULT_LONGITUDE);
  const [currentWeatherData, setCurrentWeatherData] = useState<object | null>(
    null
  );
  const [forecastData, setForecastData] = useState<object | null>(null);
  const [historicData, setHistoricData] = useState<object | null>(null);
  const [query, setQuery] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<object | null>([]);

  const fetchWeatherData = useCallback(() => {
    const prevDate = new Date();
    prevDate.setDate(prevDate.getDate() - 3);
    const beforeDate = prevDate.toISOString().slice(0, 10).replace("T", " ");
    const currDate = new Date().toISOString().slice(0, 10).replace("T", " ");
    const currentWeatherUrl = `https://api.weatherstack.com/current?query=${latitude},${longitude}&access_key=${API_KEY}`;
    const forecastUrl = `https://api.weatherstack.com/forecast?query=${latitude},${longitude}&access_key=${API_KEY}&forecast_days=4&hourly=1&interval=24&hourly=1&interval=24`;
    const historictUrl = `https://api.weatherstack.com/historical?query=${latitude},${longitude}&historical_date_start=${beforeDate}&historical_date_end=${currDate}&access_key=${API_KEY}&hourly=1&interval=24`;

    fetchData(currentWeatherUrl, setCurrentWeatherData);
    fetchData(forecastUrl, setForecastData);
    fetchData(historictUrl, setHistoricData);
  }, [latitude, longitude]);

  const fetchGeoData = useCallback(() => {
    if (query) {
      const geoUrl = `https://api.weatherstack.com/autocomplete?query=${query}&access_key=${API_KEY}`;
      fetchData(geoUrl, setSearchResults);
    }
  }, [query]);

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  useEffect(() => {
    fetchGeoData();
  }, [fetchGeoData]);

  const value = {
    setLatitude,
    setLongitude,
    currentWeatherData,
    forecastData,
    historicData,
    setQuery,
    searchResults,
    setCurrentWeatherData,
    setSearchResults,
    query,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  return useContext(AppContext);
}

export default AppProvider;
