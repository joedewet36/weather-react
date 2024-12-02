import styles from "./Footer.module.css";
import weatherStackLogo from "../../assets/weatherstack_logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.openWeather}>
        <p>Powered by </p>
        <a
          href="https://weatherstack.com/"
          title="Weatherstack API"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={weatherStackLogo} alt="WeatherStack" loading="lazy" />
        </a>
      </div>
      <p className={styles.info}>Designed and Coded by :</p>
      <p>
        <sup>&#169; </sup>
        {currentYear} <span className={styles.myName}>Joe de Wet</span>
      </p>
      <div className={styles.links}>
        <a
          href="https://www.linkedin.com/in/joeidewet/"
          title="Author LinkedIn account"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/joedewet36/"
          title="Author github account"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
