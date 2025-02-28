import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  let backgroundImage;
  switch (location.pathname) {
    case "/crew":
      backgroundImage = "url('/crew/background-crew-desktop.jpg')";
      break;
    case "/destination":
      backgroundImage =
        "url('/destination/background-destination-desktop.jpg')";
      break;
    case "/technology":
      backgroundImage = "url('/technology/background-technology-desktop.jpg')";
      break;
    default:
      backgroundImage = "url('/home/background-home-desktop.jpg')";
      break;
  }
  return (
    <div
      style={{
        backgroundImage,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
