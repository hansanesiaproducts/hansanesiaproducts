import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import classes from "./CollectionSetPage.module.css";
import ProductCardList from "./components/ProductCardList/ProductCardList";

const CollectionSetPage = () => {
  const { name, setName } = useParams();
  const [productsData, setProductsData] = useState([]);
  const [collectionSetName, setCollectionSetName] = useState("");
  const [collectionName, setCollectionName] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  useEffect(() => {
    findCollectionData();
    getImage();
    getCollectionSetName();
    getName();
  }, []);
  const findCollectionData = async () => {
    setIsLoading(true);
    try {
      let response = await require(`../../data/${name}/${setName}.json`);
      setProductsData(response);
    } catch (e) {
      return history.push("/");
    }
    setIsLoading(false);
  };
  const getCollectionSetName = async () => {
    try {
      let response = await require(`../../data/${name}.json`);
      const finalData = response.filter((data) => data.value === setName);
      console.log(response);
      console.log(finalData);
      setCollectionSetName(finalData[0].name);
    } catch (e) {
      setCollectionSetName("Something Went Wrong");
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
  const getImage = async () => {
    try {
      let response = await require(`../../assets/${name}/${setName}.jpg`)
        .default;
      setMainImage(response);
    } catch (e) {
      setMainImage("ERROR");
    }
  };
  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <div>
          <section className={classes.mainCollectionSection}>
            <h1 className={classes.mainTitle}>
              {collectionName} - {collectionSetName}
            </h1>
            <div className={classes.mainImageContainer}>
            <img src={mainImage} alt="ERR" />
            </div>
          </section>
          <section className={classes.ProductCardListSection}>
            <div className={classes.ProductCardListContainer}>
              <h1 className={classes.mainTitle}>Product Sets</h1>
              <ProductCardList
                data={productsData}
                collection={name}
                collectionSet={setName}
              />
            </div>
          </section>
        </div>
      )}
    </>
  );
};
export default CollectionSetPage;
