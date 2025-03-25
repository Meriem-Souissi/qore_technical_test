import Button from "../button";
import "./style.css";

type Props = {
  title: string;
  description: string;
  image: string;
};

function StoryCard({ title, description, image }: Props) {
  return (
    <>
      <div className="story-card-container">
        <img alt="story-image" src={image} />
        <div className="story-card-description">
          <h3 className="story-title">{title}</h3>
          <p
            className="story-description"
            style={{ fontSize: "14px", maxWidth: "240px" }}
          >
            {description}
          </p>
          <Button variant="secondary">Lean more</Button>
        </div>
      </div>
      <div className="divider" />
      <div className="responsive-story-card-container">
        <h3 className="story-title">{title}</h3>
        <div className="responsive-story-card-description">
          <img alt="story-image" src={image} />
          <p
            className="story-description"
            style={{ fontSize: "14px", maxWidth: "240px" }}
          >
            {description}
          </p>
        </div>
        <Button
          variant="tertiary"
          style={{ padding: "8px 12px", fontSize: "16px", border: "1px solid" }}
        >
          Lean more
        </Button>
      </div>
    </>
  );
}

export default StoryCard;
