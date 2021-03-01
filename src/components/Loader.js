
import loader from "../assets/images/preloader.gif";

export function Loader() {
    return (
        <aside className="articles__list-loader">
            <img className="loader" src={loader} alt="site loader" />
        </aside>
    )
}

export default Loader;
