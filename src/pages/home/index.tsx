import "./../../styles/home.css";
import FeaturedOptions from "./components/FeaturedOptions";
import HeroSection from "./components/HeroSection";
import MemberStories from "./components/MemberStories";

function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedOptions />
      <MemberStories />
    </main>
  );
}

export default Home;
