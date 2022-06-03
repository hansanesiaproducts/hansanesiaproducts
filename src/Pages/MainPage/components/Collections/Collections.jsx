import classes from "./Collections.module.css";
import CollectionsCard from "./components/CollectionsCard/CollectionsCard";
import collectionData from "../../../../data/collections.json";
const Collections = () => {
  return (
    <section className={classes.collectionsContainer}>
      <div className={classes.titleContainer}>
        <h1>Collections</h1>
      </div>
      <div className={classes.cardContainer}>
        {collectionData.map((collection) => (
          <CollectionsCard
            key={collection.id}
            linkURL={`${collection.value}`}
            image={collection.value}
            title={collection.name}
          />
        ))}
      </div>
    </section>
  );
};
export default Collections;
