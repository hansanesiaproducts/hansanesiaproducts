import classes from "./ContactMain.module.css";
import email from "../../../../assets/icons/email.png";
import phone from "../../../../assets/icons/phone.png";
import wi from "../../../../assets/company/wilargo.jpg";
import companyLogo from "../../../../assets/company/companyLogo.png";

const ContactMain = () => {
  return (
    <section className={classes.contactUsSection}>
      <div className={classes.contactUsContainer}>
        <h1 className={classes.mainTitle}>Contact Us</h1>
        <div className={classes.contactUsInnerContainer}>
          <div className={classes.addressContainer}>
            <img src={companyLogo} alt="logo hansanesia" />
            <div className={classes.contactforLogo}>
              <div className={classes.contactUsWrapper}>
                <div className={classes.contactUsWrapperImage}>
                  <img src={wi} alt="" />
                </div>
                <div className={classes.contactAddress}>
                  <h4>PT. Wilargo Inti Manunggal</h4>
                  <address>
                    Villa Melati Mas Blok H1 No. 26, <br />
                    Jelupang, Serpong Utara, Tangerang Selatan
                  </address>
                  <h6>Factory :</h6>
                  <address>
                    Jl. Asem Pendek No : 88 Cirebon, West Java, Indonesia, <br />
                    Jl. Soekarno Soekarno Hatta No. 17 , No. 17 , <br />
                    Senenan Senenan , Tahunan Tahunan , Jepara , Jawa Tengah 59426
                  </address>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.socialsContainer}>
            <ul>
              <li>
                <img src={email} alt="ERR" />
                <a href="mailto:hansanesia@yahoo.com">hansanesia@yahoo.com</a>
              </li>
              <li>
                <img src={phone} alt="ERR" />
                <a href="tel:0816-1846-300">+(62) 816-1846-300</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactMain;
