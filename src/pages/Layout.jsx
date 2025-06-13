import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  const location = useLocation();
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const updateBackground = () => {
      let backgroundImage;
      const width = window.innerWidth;
      console.log("width", width);
      switch (location.pathname) {
        case "/crew":
          if (width <= 992) {
            backgroundImage = "url('/crew/background-crew-tablet.jpg')";
          } else {
            backgroundImage = "url('/crew/background-crew-desktop.jpg')";
          }
          break;
        case "/destination":
          if (width <= 992) {
            backgroundImage =
              "url('/destination/background-destination-tablet.jpg')";
          } else {
            backgroundImage =
              "url('/destination/background-destination-desktop.jpg')";
          }
          break;
        case "/technology":
          if (width <= 992) {
            backgroundImage =
              "url('/technology/background-technology-tablet.jpg')";
          } else {
            backgroundImage =
              "url('/technology/background-technology-desktop.jpg')";
          }
          break;
        default:
          if (width <= 992) {
            backgroundImage = "url('/home/background-home-tablet.jpg')";
          } else {
            backgroundImage = "url('/home/background-home-desktop.jpg')";
          }
          break;
      }

      document.body.style.backgroundImage = backgroundImage;
    };

    updateBackground(); // Initial check
    window.addEventListener("resize", updateBackground); // Listen for resize

    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  return (
    // <>
    //   <Header />
    //   <main>{/* <Outlet /> */}</main>
    // </>

    <div
      className="dynamic-background"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header />
      <main>{<Outlet />}</main>
    </div>
  );
}
