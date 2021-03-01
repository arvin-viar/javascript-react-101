import { Link } from "react-router-dom";
import styled from "styled-components";

const MainFooter = styled.footer`
    margin-top: auto;
    padding: 10px;
    background-color: #061a40;

    .footer-nav {
        background: none;
    }
    .footer-nav{
        &__menu {
            text-align: center;
        }
        &__menu-item {
            display: inline;
            margin: 0 5px;
            a {
                color: #b9d6f2;
                font-size: 12px;
            }
        }
    }
`

function Footer() {
    return (
        <MainFooter>
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
        </MainFooter>
    )
}

export default Footer;
