import Button from "../button";
import "./style.css";

type Props = {
  title: string;
  description: string;
  image: string;
};

function FeaturedCard({ title, description, image }: Props) {
  return (
    <div
      className="featured-card-container"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
      <Button
        variant="secondary"
        style={{ padding: "8px 12px", fontSize: "16px" }}
      >
        Lean more
      </Button>
    </div>
  );
}

export default FeaturedCard;
