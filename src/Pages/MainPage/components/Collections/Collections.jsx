import classes from "./Collections.module.css";
import CollectionsCard from "./components/CollectionsCard/CollectionsCard";
import { useEffect, useState } from "react";
const Collections = () => {
  const [collectionData, setCollectionData] = useState([]);
  useEffect(() => {
    fetchCollectionData();
  }, []);
  const fetchCollectionData = async () => {
    try {
      const response = await require("../../../../data/collections.json");
      setCollectionData(response);
    } catch (e) {
      console.log("Data not Found!");
    }
  };

  return (
    <section className={classes.collectionsContainer} id="collections">
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
