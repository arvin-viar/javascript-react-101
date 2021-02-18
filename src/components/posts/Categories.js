import CategoryBanner from "./CategoryBanner";

function CuratedPosts() {
    return (
        <section className="categories">
            <CategoryBanner />
            <nav className="categories__nav">
                <div className="container">
                    <ul className="categories__nav-menu">
                        <li className="categories__nav-menu-item categories__nav-menu-item--active">
                            <a href="/">Cameras</a>
                        </li>
                        <li className="categories__nav-menu-item">
                            <a href="/">Laptops</a>
                        </li>
                        <li className="categories__nav-menu-item">
                            <a href="/">PC</a>
                        </li>
                        <li className="categories__nav-menu-item">
                            <a href="/">Gaming Consoles</a>
                        </li>
                        <li className="categories__nav-menu-item">
                            <a href="/">Smartphones</a>
                        </li>
                        <li className="categories__nav-menu-item">
                            <a href="/">Tablets</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    )
}

export default CuratedPosts;
