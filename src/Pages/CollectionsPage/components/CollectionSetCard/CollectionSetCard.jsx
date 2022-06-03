import classes from "./CollectionSetCard.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const CollectionSetCard = (props) => {
  const { linkURL, image, title, collection } = props;
  const [mainImage, setMainImage] = useState(null);
  useEffect(() => {
    getImage();
  }, []);
  const getImage = async () => {
    try {
      let response =
        require(`../../../../assets/${collection}/${image}.jpg`).default;
      setMainImage(response);
    } catch (e) {
      setMainImage("ERROR");
    }
  };
  return (
    <Link
      to={`/collection/${collection}/${linkURL}`}
      className={classes.cardContainer}
    >
      <img src={mainImage} alt="ERR" />
      <p>{title}</p>
    </Link>
  );
};
export default CollectionSetCard;
