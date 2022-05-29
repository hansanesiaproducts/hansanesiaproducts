import classes from "./ProductCardList.module.css";
import ProductCard from "../ProductCard/ProductCard";
const ProductCardList = (props) => {
  const { data, collection } = props;
  return (
    <div className={classes.cardContainer}>
      {data.map((item) => (
        <ProductCard data={item} collection={collection} />
      ))}
    </div>
  );
};
export default ProductCardList;
