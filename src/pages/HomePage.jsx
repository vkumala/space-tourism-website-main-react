import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="hero">
      <div class="hero-left-section">
        <div class=" text-preset-5">So, you want to travel to</div>
        <div class="text-preset-1">Space</div>
        <div class="text-preset-9">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </div>
      </div>
      <div class="hero-right-section">
        <button className="hero-explore-button text-preset-4">Explore</button>
      </div>
    </div>
  );
}
