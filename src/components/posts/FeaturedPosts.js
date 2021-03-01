import { useState, useEffect } from "react";
import FeaturedArticleItem from "./FeaturedArticleItem";
import Loader from "../Loader";

function FeaturedPosts(props) {
    const { posts } = props;
    const [featuredPosts, setFeaturedPosts] = useState([...posts]); 

    useEffect(() => {
        const featPosts = [...posts];
        const slicedPosts = featPosts.slice(featPosts.length - 5);
        setFeaturedPosts(slicedPosts);
    }, [posts]);

    return (
        <>
        <section className="featured">
            <div className="container">
                <section className="featured__list">
                {featuredPosts.length > 0 
                    ? (
                        featuredPosts.map((post) => <FeaturedArticleItem key={post.id} {...post} />)
                    ) : (
                        <Loader />
                    )
                }
                </section>
            </div>
        </section>
        </>
    );
}

export default FeaturedPosts;
