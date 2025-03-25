import Button from "../button";
import accordionimage from "../../assets/accordion-image.png";

function AccordionContent() {
  return (
    <div className="accordion-content-container">
      <img alt="accordion image" src={accordionimage} />
      <div className="accordion-content-description">
        <h1 style={{ fontSize: "32px" }}>Explore Fly Fishing</h1>
        <p>
          Proin nibh nisl condimentum id venenatis a condimentum vitae sapien.
          Tellus in metus vulputate eu sc
        </p>
        <Button variant="secondary">Lean more</Button>
      </div>
    </div>
  );
}

export default AccordionContent;
