import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home">
      <div className="home-left-section">
        <div className="home-subtitle text-preset-5">
          So, you want to travel to
        </div>
        <div className="home-title text-preset-1">Space</div>
        <div className="text-preset-9">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </div>
      </div>
      <div className="home-right-section">
        <button className="home-explore-button text-preset-4">Explore</button>
      </div>
    </div>
  );
}
