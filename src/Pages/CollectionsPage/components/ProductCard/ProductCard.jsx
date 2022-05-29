import ProductCardModal from "../ProductCardModal/ProductCardModal";
import classes from "./ProductCard.module.css";
import { useState, useEffect } from "react";

const ProductCard = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { data, collection } = props;
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [modalOpen]);
  const handleModal = () => {
    setModalOpen((prevState) => !prevState);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      {modalOpen ? (
        <ProductCardModal
          image={
            require(`../../../../assets/${collection}/${data.value}.jpg`)
              .default
          }
          closeHandler={closeModal}
        />
      ) : (
        ""
      )}
      <div className={classes.productCard} key={data.id}>
        <div className={classes.imageContainer} onClick={handleModal}>
          <img
            src={
              require(`../../../../assets/${collection}/${data.value}.jpg`)
                .default
            }
            alt="ERR"
          />
        </div>
        <p>{data.name}</p>
      </div>
    </>
  );
};
export default ProductCard;
