import { Link } from "react-router-dom";
import siteLogo from "../assets/images/gadget-logo-white.png";
import { toggleDarkMode } from "../helpers/helper";

function Header() {
    return (
        <header className="main-header">
            <div className="container">
                <div className="main-nav">
                    <img className="main-nav__logo" src={siteLogo} alt="site logo"/>
                    <nav className="main-nav__menu is-hidden">
                        <ul className="main-nav__menu-list">
                            <li className="main-nav__menu-item main-nav__menu-item--selected">
                                <Link to={`/`}>Home</Link>
                            </li>
                            <li className="main-nav__menu-item">
                                <Link to={`/articles`}>Articles</Link>
                            </li>
                            <li className="main-nav__menu-item">
                                <Link to={`/`}>Contact Us</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="dark-mode">
                        <button onClick={toggleDarkMode}>Dark Mode</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
