import { images } from '../../Images/Images';
import './footer.css'

const Footer = () => {
    return (
      <div className="footer">
        <div className="footLine myPagesBlock buttons"></div>
        <div className="footerFinished">
          <img src={images.logo} alt="logo" onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })} />
          <p>All Right reserved.</p>
        </div>
      </div>
    );
}

export default Footer;
