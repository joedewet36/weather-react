import { Suspense, lazy } from "react";
import styles from "./Layout.module.css";
import loadingSvg from "../../assets/loading-spinner.svg";

const Header = lazy(() => import("../header/Header"));
const Today = lazy(() => import("../today/Today"));
const Forecast = lazy(() => import("../forecast/Forecast"));
const Footer = lazy(() => import("../footer/Footer"));

function Loading() {
  return <img src={loadingSvg} alt="Loading..." />;
}

function Layout() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Header />
      </Suspense>
      <main className={`${styles.main} container`}>
        <section className={styles.leftContent}>
          <Suspense fallback={<Loading />}>
            <Today />
            <Forecast />
          </Suspense>
        </section>
      </main>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Layout;
