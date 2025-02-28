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
      <div className="page-title text-preset-5">01 Pick your destination</div>
      <div className="section-destination">
        <div>
          <img
            src={DESTINATIONS[index].images.webp}
            alt={DESTINATIONS[index].name}
          />
        </div>
        <div>
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
          <div className=" text-preset-2">{DESTINATIONS[index].name}</div>
          <div className=" text-preset-9">
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
