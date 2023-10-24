import "./Footer.css";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
    const date = new Date;
    const year = date.getFullYear()
    return <footer className="footer">
        <div className="footer-div">
            <div className="footer-socials">
                <a href="https://www.instagram.com/fioffiiorito/" className="social-media-a"><AiFillInstagram className="social-media-icon" /></a>

                <a className="social-media-a" href="https://www.instagram.com/fioffiiorito/">Instagram</a>
            </div>
            <div className="footer-socials">
                <a href="https://www.linkedin.com/in/fiorella-fiorito/" className="social-media-a"><AiFillLinkedin className="social-media-icon" /></a>
                <a className="social-media-a" href="https://www.linkedin.com/in/fiorella-fiorito/">LinkedIn</a>
            </div>
            <div className="footer-socials">
                <a href="https://github.com/fiofiorito" className="social-media-a"><AiFillGithub className="social-media-icon" /></a>
                <a className="social-media-a" href="https://github.com/fiofiorito">GitHub</a>
            </div>
        </div>
        <p>iFio Copyright<span className="copyright">&#169;</span> {year}</p>
    </footer>
}

export default Footer;