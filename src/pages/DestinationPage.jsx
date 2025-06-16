import data from "../data.json";
import { useState } from "react";
import "./DestinationPage.css";

const DESTINATIONS = data.destinations;

export default function DestinationPage() {
  const [index, setIndex] = useState(0);

  function handleClick(index) {
    setIndex(index);
  }

  return (
    <>
      <div className="page-title text-preset-5">
        <span style={{ fontWeight: "100" }}>01</span> Pick your destination
      </div>
      <div className="destination-section">
        <div className="destination-left-section">
          <img
            className="destination-image"
            src={import.meta.env.BASE_URL + DESTINATIONS[index].images.webp}
            alt={DESTINATIONS[index].name}
          />
        </div>
        <div className="destination-right-section">
          <nav>
            <ul className="destination-nav text-preset-8">
              {DESTINATIONS.map((destination, id) => (
                <li key={id}>
                  <button
                    className={id === index ? "active" : undefined}
                    onClick={() => handleClick(id)}
                  >
                    {destination.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-preset-2">{DESTINATIONS[index].name}</div>
          <div className="destination-description text-preset-9">
            {DESTINATIONS[index].description}
          </div>
          <hr className="destination-hr" />
          <div className="destination-footer">
            <div>
              <div className="text-preset-7">avg. distance</div>
              <div className="text-preset-6">
                {DESTINATIONS[index].distance}
              </div>
            </div>
            <div>
              <div className="text-preset-7">est. travel time</div>
              <div className="text-preset-6">{DESTINATIONS[index].travel}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
