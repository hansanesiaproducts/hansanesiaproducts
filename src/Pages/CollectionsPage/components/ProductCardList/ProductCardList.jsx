import classes from "./ProductCardList.module.css";
import CollectionSetCard from "../CollectionSetCard/CollectionSetCard";
const ProductCardList = (props) => {
  const { data, collection } = props;
  return (
    <div className={classes.cardContainer}>
      {data.map((item) => (
        <CollectionSetCard
          key={item.id}
          linkURL={`${item.value}`}
          image={item.value}
          title={item.name}
          collection={collection}
        />
      ))}
    </div>
  );
};
export default ProductCardList;
