import ProductCardModal from "../ProductCardModal/ProductCardModal";
import classes from "./ProductCard.module.css";
import { useState, useEffect } from "react";

const ProductCard = (props) => {
  const [firstTime, setFirstTime] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [mainImage, setMainImage] = useState(null);
  const { data, collection, collectionSet } = props;
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    if (firstTime) {
      getImage();
      setFirstTime(false);
    }
  }, [modalOpen]);
  const getImage = async () => {
    try {
      let response =
        await require(`../../../../assets/${collection}/${collectionSet}/${data.value}.jpg`)
          .default;
      setMainImage(response);
    } catch (e) {
      setMainImage(null);
    }
  };

  const handleModal = () => {
    setModalOpen((prevState) => !prevState);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      {modalOpen ? (
        <ProductCardModal image={mainImage} closeHandler={closeModal} />
      ) : (
        ""
      )}
      <div className={classes.productCard} key={data.id}>
        <div className={classes.imageContainer} onClick={handleModal}>
          <img src={mainImage} alt="ERR" />
        </div>
        <p>{data.name}</p>
      </div>
    </>
  );
};
export default ProductCard;
