import Card from "./card";
import contactInfo from "../assets/data";

const DisplayCard = () => {
  return (
    <div className="flex flex-wrap">{contactInfo.map((user, index) => {
      return <Card key={index} user={user} />;
    })}</div>
  );
};

export default DisplayCard;
