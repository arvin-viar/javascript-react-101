import CuratedItem from "./CuratedItem";
import Loader from "../Loader";

function CuratedPosts(props) {
    const { posts } = props;
    return (
        <section className="curated">
            <div className="container">
                {posts.length > 0 
                    ? (
                        <ul className="curated__list">
                        {
                            posts.map((post) => <CuratedItem key={post.id} post={post} />)
                        }
                        </ul>
                    ) 
                    : (
                        <Loader />
                    )
                }
            </div>
        </section>
    )
}

export default CuratedPosts;
