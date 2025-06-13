import { useState } from "react";
import data from "../data.json";
import "./TechnologyPage.css";

const TECHS = data.technology;

export default function TechnologyPage() {
  const [index, setIndex] = useState(0);

  function handleClick(index) {
    setIndex(index);
  }

  return (
    <div className="technology-page">
      <div className="page-title text-preset-5">03 Space Launch 101</div>
      <div className="technology-section">
        <div className="technology-left-section">
          <nav>
            <ul className="technology-nav text-preset-4">
              {TECHS.map((technology, id) => (
                <li key={id}>
                  <button
                    className={id === index ? "active" : undefined}
                    onClick={() => handleClick(id)}
                  >
                    {id + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="technology-description">
            <div className="technology-subtitle text-preset-4">
              THE TERMINOLOGY
            </div>
            <div className="technology-name text-preset-3">
              {TECHS[index].name}
            </div>
            <div className="technology-description text-preset-9">
              {TECHS[index].description}
            </div>
          </div>
        </div>
        <div className="technology-right-section">
          <div>
            <img
              className="technology-image"
              src={TECHS[index].images.portrait}
              alt={TECHS[index].name}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
