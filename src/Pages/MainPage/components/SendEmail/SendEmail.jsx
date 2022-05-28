import classes from "./SendEmail.module.css";
const SendEmail = () => {
  return (
    <section className={classes.sendEmailSection}>
      <div className={classes.sendEmailContainer}>
        <h2>Stay With Us</h2>
        <p>Subscribe to our newsletter</p>
        <div className={classes.emailInputContainer}>
          <input type="email" placeholder="Email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
};
export default SendEmail;
