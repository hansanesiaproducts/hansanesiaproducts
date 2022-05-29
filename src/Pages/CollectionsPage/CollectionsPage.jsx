import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import classes from "./CollectionsPage.module.css";
import ProductCardList from "./components/ProductCardList/ProductCardList";

const CollectionsPage = () => {
  const { name } = useParams();
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    findCollection();
  }, []);
  const findCollection = async () => {
    setIsLoading(true);
    try {
      let response = await require(`../../data/${name}.json`);
      setProductsData(response);
    } catch (e) {
      return history.push("/");
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <div>
          <section className={classes.mainCollectionSection}>
            <h1 className={classes.mainTitle}>
              {name.charAt(0).toUpperCase() + name.slice(1)} Collection
            </h1>
            <img
              src={require(`../../assets/collections/${name}.jpg`).default}
              alt="ERR"
            />
          </section>
          <section className={classes.ProductCardListSection}>
            <div className={classes.ProductCardListContainer}>
              <h1 className={classes.mainTitle}>Product Sets</h1>
              <ProductCardList data={productsData} collection={name} />
            </div>
          </section>
        </div>
      )}
    </>
  );
};
export default CollectionsPage;
