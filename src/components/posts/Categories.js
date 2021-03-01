import { Link } from "react-router-dom";
import styled from "styled-components";
import CategoryBanner from "./CategoryBanner";

const Categories = styled.section`
    margin-bottom: 30px;
    @media (min-width: 768px) {
        margin-bottom: 0;
    }
    .categories__nav {
        text-align: center;
        background: #061a40;
        &-menu {
            display: flex;
            overflow: auto;
            background: none;
            &-item {
                display: inline-block;
                vertical-align: middle;
                a {
                    display: flex;
                    height: 100%;
                    padding: 15px 20px;
                    align-items: center;

                    @media (min-width: 768px) {
                        display: block;
                        color: #e4e9f1;
                    }
                }
                &--active {
                    background: #001233;
                    a {
                        color: #0466c8;
                    }
                }
                @media (min-width: 768px) {
                    display: block;
                }
            }
            @media (min-width: 768px){
                padding: 0 15px;
            }
        }
        @media (min-width: 768px) {
            display: block;
        }
    }
`

function CuratedPosts() {
    return (
        <Categories>
            <CategoryBanner />
            <nav className="categories__nav">
                <div className="container">
                    <ul className="categories__nav-menu">
                        <li className="categories__nav-menu-item categories__nav-menu-item--active">
                            <Link to={`/articles`}>Top Stories</Link>
                        </li>
                        <li className="categories__nav-menu-item">
                            <Link to={`/articles`}>Trades</Link>
                        </li>
                        <li className="categories__nav-menu-item">
                            <Link to={`/articles`}>Player Updates</Link>
                        </li>
                        <li className="categories__nav-menu-item">
                            <Link to={`/articles`}>Archive</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Categories>
    )
}

export default CuratedPosts;
