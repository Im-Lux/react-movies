import { FC } from "react";
import "./footer.scss";

const Footer: FC = () => {
  return (
    <footer>
      <div className="footer">
        <p>Questions? Contact us.</p>

        <div className="footer__container">
          <div className="footer__container__items">
            <p>FAQ</p>
            <p>Investor Relations</p>
            <p>Privacy</p>
            <p>Speed Test</p>
          </div>
          <div className="footer__container__items">
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
            <p>Legal Notices</p>
          </div>
          <div className="footer__container__items">
            <p>Account</p>
            <p>Ways to Watch</p>
            <p>Corporate Information</p>
            <p>Only on JW</p>
          </div>
          <div className="footer__container__items">
            <p>Media Center</p>
            <p>Terms of Use</p>
            <p>Contact Us</p>
          </div>
        </div>

        <select>
          <option>English</option>
          <option>Hrvatski</option>
        </select>

        <p>JustWatch Croatia</p>
      </div>
    </footer>
  );
};

export default Footer;
