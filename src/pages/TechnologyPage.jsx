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
    <>
      <div className="page-title text-preset-5">03 Space Launch 101</div>
      <div className="section-technology">
        <nav>
          <ul className="technology-nav text-preset-4">
            {TECHS.map((technology, index) => (
              <li key={index}>
                <button onClick={() => handleClick(index)}>{index + 1}</button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="technology-text ">
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
        <div className="technology-image">
          <img src={TECHS[index].images.portrait} alt={TECHS[index].name} />
        </div>
      </div>
    </>
  );
}
