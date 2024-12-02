import { useAppContext } from "../../context/AppContext";
import styles from "./Forecast.module.css";

function getWeekData(data, history) {
  let weekArr = [];
  const currDate = new Date().toISOString().slice(0, 10).replace("T", " ");
  const historic = history ? Object.values(history?.historical) : [];
  for (let i = 0; i < historic?.length; i++) {
    const historicItem : object = historic[i] as object;
    const date = new Date(historicItem["date"]);

    const formattedDate = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
    });
    const dayName = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(date);
    if (currDate !== historicItem["date"]) {
      weekArr.push({
        formattedDate: formattedDate,
        dayName: dayName,
        date: historicItem["date"],
        forecastItem: historicItem,
      });
    }
  }
  const foreCast = data ? Object.values(data?.forecast) : [];
  for (let i = 0; i < foreCast?.length; i++) {
    const forecastItem :object  = foreCast[i] as object ;
    const date = new Date(forecastItem["date"]);

    const formattedDate = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
    });
    const dayName = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(date);
    if (currDate !== forecastItem["date"]) {
      weekArr.push({
        formattedDate: formattedDate,
        dayName: dayName,
        date: forecastItem["date"],
        forecastItem: forecastItem,
      });
    }
  }

  return weekArr;
}

function Forecast() {
  const {
    forecastData,
    historicData,
    currentWeatherData,
    setCurrentWeatherData,
  } = useAppContext();
  const weekData = getWeekData(forecastData, historicData);

  const handleDayClick = (dte) => {
    console.log(dte);
    const newData = weekData.find((x) => x.date === dte);
    setCurrentWeatherData({
      currDate: dte,
      location: {
        name: currentWeatherData?.location.name,
        country: currentWeatherData?.location.country,
      },
      current: {
        weather_icons: [newData.forecastItem.hourly[0].weather_icons[0]],
        weather_descriptions: [newData.forecastItem.hourly[0].weather_descriptions[0]],
        temperature: newData.forecastItem.hourly[0].temperature,
        wind_speed: newData.forecastItem.hourly[0].wind_speed,
        precip: newData.forecastItem.hourly[0].precip,
        pressure: newData.forecastItem.hourly[0].pressure,
      },
    });
  };
  return (
    <section
      className={styles.hourlyForecast}
      aria-label="hourly forecast"
      data-hourly-forecast>
      <div className={styles.sliderContainer}>
        <ul className={styles.sliderList} data-temp>
          {weekData.map((item, index) => (
            <li style={{ cursor: 'pointer' }} 
              onClick={() => handleDayClick(item.forecastItem.date)}
              className={styles.sliderItem}
              key={index}>
              <p>{item.dayName}</p>
              <p>{item.formattedDate}</p>
              <img
                src={`${item.forecastItem.hourly[0].weather_icons[0]}`}
                alt="img"
                title={item.forecastItem.hourly[0].weather_descriptions[0]}
                className="weather-icon"
                loading="lazy"
              />
              <p>{parseInt(item.forecastItem.avgtemp)} °C</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Forecast;
