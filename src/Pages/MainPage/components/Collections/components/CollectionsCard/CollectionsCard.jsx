import classes from "./CollectionsCard.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const CollectionsCard = (props) => {
  const { linkURL, image, title } = props;
  const [cardImage, setCardImage] = useState(null);
  useEffect(() => {
    getImage();
  }, []);
  const getImage = async () => {
    try {
      let response =
        await require(`../../../../../../assets/collections/${image}.jpg`)
          .default;
      setCardImage(response);
    } catch (e) {
      setCardImage("ERROR");
    }
  };
  return (
    <Link to={`collection/${linkURL}`} className={classes.cardContainer}>
      <img src={cardImage} alt="" />
      <p>{title}</p>
    </Link>
  );
};
export default CollectionsCard;
