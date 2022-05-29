import classes from "./SendEmail.module.css";
const SendEmail = () => {
  return (
    <section className={classes.sendEmailSection}>
      <div className={classes.sendEmailContainer}>
        <h1>Stay With Us</h1>
        <h4>Subscribe to our newsletter</h4>
        <div className={classes.emailInputContainer}>
          <input type="email" placeholder="Email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
};
export default SendEmail;
