import classes from "./CollectionsCard.module.css";
import { Link } from "react-router-dom";
const CollectionsCard = (props) => {
  const { linkURL, image, title } = props;
  return (
    <div>
      <Link to={`collection/${linkURL}`} className={classes.cardContainer}>
        <img src={image} alt="ERR" />
        <p>{title}</p>
      </Link>
    </div>
  );
};
export default CollectionsCard;
