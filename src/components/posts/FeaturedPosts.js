import { useState, useEffect } from "react";
import styled from "styled-components";
import FeaturedArticleItem from "./FeaturedArticleItem";
import Loader from "../Loader";

const Featured = styled.section`
    padding: 30px 0;
    .featured__list {
        display: flex;
        flex-direction: column;
        padding: 0 15px;
    }
`

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
        <Featured>
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
        </Featured>
        </>
    );
}

export default FeaturedPosts;
