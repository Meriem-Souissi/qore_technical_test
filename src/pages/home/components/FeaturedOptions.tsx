import Accordion from "../../../components/accordion";
import AccordionContent from "../../../components/accordion/accordion-content";
import FeaturedCard from "../../../components/featured-card";
import card1 from "../../../assets/featured1.png";
import card2 from "../../../assets/featured2.png";
import card3 from "../../../assets/featured3.png";

function FeaturedOptions() {
  const arrordionsTitles = [
    "Explore Fly Fishing",
    "Fly Fishing Experiences",
    "Gear Up and Catch More"
  ];
  const cardsInfos = [
    {
      title: "Explore Fly Fishing",
      description:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
      image: card1
    },
    {
      title: "Fly Fishing Experiences",
      description:
        "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
      image: card2
    },
    {
      title: "Gear Up and Catch More",
      description:
        "In metus vulputate eu scelerisque felis imperdiet. Nunc scelerisque viverra mauris in aliquam sem. S",
      image: card3
    }
  ];
  return (
    <div className="featured-wrapper">
      <div className="featured-container container">
        <h1>Featured options</h1>
        <div className="accordions-container">
          {arrordionsTitles.map((el, index) => (
            <Accordion title={el} open={index === 0} key={index}>
              <AccordionContent />
            </Accordion>
          ))}
        </div>
        <div className="featured-cards-container">
          {cardsInfos.map((card, index) => (
            <FeaturedCard
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedOptions;
