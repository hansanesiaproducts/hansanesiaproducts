import { useState, useRef } from "react";
import classes from "./SendEmail.module.css";
const SendEmail = () => {
  const email = useRef();
  const [emailValid, setEmailValid] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const sendEmailHandler = async () => {
    setButtonLoading(true);
    if (validateEmailInput()) {
      try {
        const data = {
          email: email.current.value,
        };
        await fetch(
          "https://sheet.best/api/sheets/15372197-1f7a-4cea-ab0c-7aff8b76af8a",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        setEmailValid(true);
        email.current.value = "";
      } catch (e) {
        setEmailValid(false);
      }
    } else {
      setEmailValid(false);
    }
    setButtonLoading(false);
  };
  const validateEmailInput = () => {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.current.value)
    ) {
      return true;
    }
    return false;
  };
  return (
    <section className={classes.sendEmailSection}>
      <div className={classes.sendEmailContainer}>
        <h1>Need a catalogue?</h1>
        <h4>Write us your email address here</h4>
        <div className={classes.emailOuterContainer}>
          {emailValid ? (
            ""
          ) : (
            <p className={classes.emailInvalid}>Invalid Email!</p>
          )}
          <div className={classes.emailInputContainer}>
            <input type="email" placeholder="Email address" ref={email} />
            <button onClick={sendEmailHandler} disabled={buttonLoading}>
              {buttonLoading ? "Sending..." : "Send us please"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SendEmail;
