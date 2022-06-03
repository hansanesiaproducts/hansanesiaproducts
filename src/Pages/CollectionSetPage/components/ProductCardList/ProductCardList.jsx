import classes from "./ProductCardList.module.css";
import ProductCard from "../ProductCard/ProductCard";
const ProductCardList = (props) => {
  const { data, collection, collectionSet } = props;
  return (
    <div className={classes.cardContainer}>
      {data.length > 0
        ? data.map((item) => (
            <ProductCard
              data={item}
              collection={collection}
              collectionSet={collectionSet}
            />
          ))
        : "No Data"}
    </div>
  );
};
export default ProductCardList;
