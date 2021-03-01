import { useState, useEffect } from "react";
import { randomItem } from "../../helpers/helper";
import AuthorItem from "./AuthorItem";
import Loader from "../Loader"

function FeaturedAuthor(props) {
    console.log(props);
    const { authors, posts } = props;
    const [_featuredAuthor, _setFeaturedAuthor] = useState({
        author: null,
        posts: []
    });

    useEffect(() => {
        const randomAuthor = randomItem(authors, 1);
        if (randomAuthor) {
            const authorData = randomAuthor[0];
            const authorId = authorData.id;
            const authorPosts = [...posts].filter(post => authorId === post.fields.authorId[0]).splice(0, 3);
            const data = {
                author: {
                    id: authorId,
                    fname: authorData.fields.firstname,
                    lname: authorData.fields.lastname,
                    team: authorData.fields.team
                },
                posts: authorPosts,
            };
            _setFeaturedAuthor(data);
        }
    }, [authors, posts]);


    return (
        <section className="featured-author">
            <div className="container">
                {_featuredAuthor.author
                    ? (
                        <AuthorItem featuredAuthor={_featuredAuthor} />
                    ) : (
                        <Loader />
                    )
                }
            </div>
        </section>
    )
}

export default FeaturedAuthor;
