import reactDom from "react-dom";
import classes from "./ProductCardModal.module.css";
const ProductCardModal = (props) => {
  const { image, closeHandler } = props;
  return reactDom.createPortal(
    <>
      <div className={classes.backDrop} onClick={closeHandler}></div>
      <img src={image} alt="ERR" className={classes.modal} />
    </>,
    document.getElementById("modal")
  );
};
export default ProductCardModal;
