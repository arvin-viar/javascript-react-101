import { Link } from "react-router-dom";
import CategoryBanner from "./CategoryBanner";

function CuratedPosts() {
    return (
        <section className="categories">
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
        </section>
    )
}

export default CuratedPosts;
