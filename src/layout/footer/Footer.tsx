import FbIcon from "../../components/icons/fb-icon";
import FooterLogo from "../../components/icons/footer-logo";
import InstagramIcon from "../../components/icons/insta-icon";
import LinkedInIcon from "../../components/icons/linkedin-icon";
import "./style.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container container">
        <div className="footer-content">
          <div className="footer-right-side">
            <FooterLogo />
            <div>
              <p style={{ fontSize: "16px" }}>FAQ</p>
              <p style={{ fontSize: "16px" }}>Privacy</p>
              <p style={{ fontSize: "16px" }}>Support</p>
              <p style={{ fontSize: "16px" }}>Contact</p>
            </div>
          </div>
          <div className="social-media-container">
            <FbIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>

        <p style={{ fontSize: "12px", textAlign: "center" }}>
          © 2024 Central Texas Fly Fishing All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
