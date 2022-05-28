import classes from "./Collections.module.css";
import CollectionsCard from "./components/CollectionsCard/CollectionsCard";
import tes from "./colectiontes.jpg";
const Collections = () => {
  return (
    <section className={classes.collectionsContainer}>
      <div className={classes.titleContainer}>
        <h1>Collections</h1>
      </div>
      <div className={classes.cardContainer}>
        <CollectionsCard
          linkURL={""}
          image={tes}
          title={"celctic Collection"}
        />
        <CollectionsCard
          linkURL={""}
          image={tes}
          title={"celctic Collection"}
        />
        <CollectionsCard
          linkURL={""}
          image={tes}
          title={"celctic Collection"}
        />
        <CollectionsCard
          linkURL={""}
          image={tes}
          title={"celctic Collection"}
        />
      </div>
    </section>
  );
};
export default Collections;
