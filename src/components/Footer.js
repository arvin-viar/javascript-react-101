import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="container">
                <nav className="footer-nav">
                    <ul className="footer-nav__menu">
                        <li className="footer-nav__menu-item">
                            <Link to={`/`}>Home</Link>
                        </li>
                        <li className="footer-nav__menu-item">
                            <Link to={`/articles`}>Articles</Link>
                        </li>
                        <li className="footer-nav__menu-item">
                            <Link to={`/`}>Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;
