import image1 from "../../../assets/story1.png";
import image2 from "../../../assets/story2.png";
import image3 from "../../../assets/story3.png";
import image4 from "../../../assets/story4.png";
import StoryCard from "../../../components/story-card";

function MemberStories() {
  const cardsInfos = [
    {
      title: "John’s Story",
      description:
        "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh ",
      image: image1
    },
    {
      title: "Catch Day",
      description:
        "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
      image: image2
    },
    {
      title: "The Journey",
      description:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
      image: image3
    },
    {
      title: "Trout Tales",
      description:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
      image: image4
    }
  ];
  return (
    <div className="member-stories-conatianer container">
      <h1>Member stories</h1>
      <div className="cards-container">
        {cardsInfos.map((card, index) => (
          <StoryCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
}

export default MemberStories;
