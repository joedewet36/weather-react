import styles from "./Today.module.css";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useAppContext } from "../../context/AppContext";
import { FaWind, FaHryvnia } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";
function Today() {
  const { currentWeatherData } = useAppContext();
  const currDate = currentWeatherData?.currDate ? new Date(currentWeatherData?.currDate).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }) : new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }); 
  return (
    <section className={styles.currentWeather} aria-label="current weather">
      <div className={styles.card}>
        <div className={styles.row}>
          <div className={styles.box}>
            <h2 className={styles.title}>
              <MdDateRange />
              <p className={styles.metaText}>
                {currDate}
              </p>
            </h2>
          </div>
          <div className={styles.box}>
            <h2>
              <FaLocationDot />
              <p className={styles.metaText}>{`${
                currentWeatherData?.location.name || ""
              }, ${currentWeatherData?.location.country || ""}`}</p>
            </h2>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.box}>
            <img
              src={`${currentWeatherData?.current.weather_icons[0]}`}
              alt="Weather icon"
              className={styles.weatherIcon}
              loading="lazy"
            />

            <h2>{currentWeatherData?.current.weather_descriptions[0]}</h2>
          </div>
          <div className={styles.box}>
            <h2 className={styles.temp}>
              {Math.round(currentWeatherData?.current?.temperature) || ""}°c
            </h2>
          </div>
          <div className={styles.box}>
            <div className={styles.bottom}>
            <span className={styles.img} > <FaWind /></span>
              <span>Wind</span>
              <span>{`${currentWeatherData?.current.wind_speed} km/ph`}</span>
            </div>
            <div className={styles.bottom}>
            <span className={styles.img}><MdOutlineWaterDrop /></span>
              <span>Precipitation</span>
              <span>{`${currentWeatherData?.current.precip} mm`}</span>
            </div>
            <div className={styles.bottom}>
            <span className={styles.img} ><FaHryvnia /></span>
              <span>Pressure</span>
              <span>{`${currentWeatherData?.current.pressure} mb`}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Today;
