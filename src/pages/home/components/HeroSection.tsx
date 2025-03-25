import heroImage from "../../../assets/hero-image.svg";
import MobileHeroImage from "../../../assets/mobile-hero-image.svg";
import Button from "../../../components/button";

function HeroSection() {
  return (
    <div className="hero-container container">
      <div className="hero-description">
        <h1 className="hero-title">Central Texas Fly Fishing</h1>
        <p>
          At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
          cursus vestibulum, facilisi ac, sed faucibus.
        </p>
        <Button
          variant="primary"
          style={{ padding: "8px 12px", fontSize: "16px" }}
        >
          Get started
        </Button>
      </div>
      <div className="hero-image">
        <img alt="hero image" src={heroImage} className="desktop-hero-image" />
        <img
          alt="banner image"
          src={MobileHeroImage}
          className="mobile-hero-image"
        />
      </div>
    </div>
  );
}

export default HeroSection;
