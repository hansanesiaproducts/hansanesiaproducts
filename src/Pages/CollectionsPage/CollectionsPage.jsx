import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import classes from "./CollectionsPage.module.css";
import ProductCardList from "./components/ProductCardList/ProductCardList";

const CollectionsPage = () => {
  const { name } = useParams();
  const [productsData, setProductsData] = useState([]);
  const [mainImage, setMainImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [collectionName, setCollectionName] = useState("");
  const history = useHistory();
  useEffect(() => {
    findCollection();
    getImage();
    getName();
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
  const getImage = async () => {
    try {
      let response = await require(`../../assets/collections/${name}.jpg`)
        .default;
      setMainImage(response);
    } catch (e) {
      setMainImage("ERROR");
    }
  };
  const getName = async () => {
    try {
      let response = await require(`../../data/collections.json`);
      const finalData = response.filter((data) => data.value === name);
      console.log(response);
      console.log(finalData);
      setCollectionName(finalData[0].name);
    } catch (e) {
      setCollectionName("Something Went Wrong");
    }
  };
  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <div>
          <section className={classes.mainCollectionSection}>
            <h1 className={classes.mainTitle}>{collectionName} Collection</h1>
            <div className={classes.mainImageContainer}>
            <img src={mainImage} alt="ERR" />
            </div>
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
