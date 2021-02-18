import { useState, useEffect } from "react";
import FeaturedPostArticle from "./FeaturedPostArticle";
import { getData } from "../../helpers/api";

function FeaturedPosts() {
    const [featuredPosts, setFeaturedPosts] = useState([]); 

    useEffect(() => {
        const query = {view: "featured-posts", maxRecords: 5};
        const postsData = getData('posts', query);
        postsData.then((data) => {
            console.log(data);
            const postsData = data.map(record => {
                return {
                    id: record.id,
                    dateCreated: record.fields.Created,
                    title: record.fields.title,
                    body: record.fields.body,
                    authorId: record.fields.authorId,
                    authorFirstname: record.fields.authorFirstname,
                    authorLastname: record.fields.authorLastname,
                    authorTeam: record.fields.authorTeam,
                };
            });
            console.log(postsData);
            setFeaturedPosts(postsData);
        });
    }, []);

    return (
        <>
        <section className="featured">
            <div className="container">
                <section className="featured__list">
                {featuredPosts.length > 0 
                    ? (
                        featuredPosts.map((post) => <FeaturedPostArticle key={post.id} {...post} />)
                    ) : (
                        <h4>Loading posts...</h4>
                    )
                }
                </section>
            </div>
        </section>
        </>
    );
}

export default FeaturedPosts;
