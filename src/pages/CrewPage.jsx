import { useState } from "react";
import data from "../data.json";
import "./CrewPage.css";
const CREW = data.crew;

export default function CrewPage() {
  const [index, setIndex] = useState(0);

  function handleClick(index) {
    setIndex(index);
  }

  return (
    <>
      <div className="page-title text-preset-5">02 Meet your crew</div>
      <div className="section-crew">
        <div className="crew-container">
          <div className="crew-role text-preset-4">{CREW[index].role}</div>
          <div className="crew-name text-preset-3">{CREW[index].name}</div>
          <div className="crew-bio text-preset-9">{CREW[index].bio}</div>
          <nav>
            <ul className="crew-nav">
              {CREW.map((crew, index) => (
                <li key={index}>
                  <button
                    className=""
                    onClick={() => handleClick(index)}
                  ></button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="crew-image">
          <img src={CREW[index].images.webp} alt={CREW[index].name} />
        </div>
      </div>
    </>
  );
}
