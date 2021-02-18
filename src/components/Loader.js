import loaderImg from "../assets/images/loader.gif";

function Loader() {
    return (
        <aside className="articles__list-loader">
            <img className="loader" src={loaderImg} alt="site loader" />
        </aside>
    )
}

export default Loader;
