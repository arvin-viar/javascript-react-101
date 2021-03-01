import { Link } from "react-router-dom";
import styled from "styled-components";
import { toggleDarkMode } from "../helpers/helper";
import siteLogo from "../assets/images/gadget-logo-white.png";
import darkModeSprite from "../assets/images/sprite-dark-mode-80.png";

const MainHeader = styled.header`
    position: relative;
    padding: 10px 0;
    background-color: #061a40;
`

const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 15px;

    .main-nav__logo {
        max-height: 40px;
    }
    .main-nav__menu {
        float: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: #11192d;
        z-index: 1;
        &.is-hidden {
            display: none;
        }
        @media (min-width: 768px) {
            display: flex;
            position: static;
            width: auto;
            padding: 10px 18px;
            background: none;
            &.is-hidden {
                display: flex;
            }
        }
    }
    .main-nav__menu-list {
        display: flex;
        flex-direction: column;
        @media (min-width: 768px) {
            flex-direction: row;
            align-items: center;
        }
    }
    .main-nav__menu-item {
        a {
            display: block;
            padding: 10px 15px;
            color: #006daa;
            font-size: 14px;
            text-transform: uppercase;
            border-bottom: 1px solid #006daa;
            &:hover {
                color: #b9d6f2;
            }
            @media (min-width: 768px) {
                padding: 0 15px;
                border-right: 1px solid #006daa;
                border-bottom: none;
            }
        }
        &:last-child {
            a {
                border: none;
            }
        }
        &:first-child {
            @media (min-width: 768px) {
                padding-left: 0;
            }
        }
        &-item--selected {
            a {
                color: #b9d6f2;
            }
        }
    }
`

const DarkMode = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
    button {
        width: 80px;
        height: 40px;
        margin: 0;
        padding: 0;
        border: none;
        background-color: transparent;
        background-image: url(${darkModeSprite});
        background-position: top;
        text-indent: -9999px;
        outline: none;
        cursor: pointer;
        &.active {
            background-position: bottom;
        }
    }
`

function Header() {
    return (
        <MainHeader>
            <Container>
                <NavContainer>
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
                    <DarkMode>
                        <button onClick={toggleDarkMode}>Dark Mode</button>
                    </DarkMode>
                </NavContainer>
            </Container>
        </MainHeader>
    )
}

export default Header;
