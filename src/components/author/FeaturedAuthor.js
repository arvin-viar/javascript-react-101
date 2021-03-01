import { useState, useEffect } from "react";
import { randomItem } from "../../helpers/helper";
import styled from "styled-components";
import AuthorItem from "./AuthorItem";
import Loader from "../Loader"

const FeaturedAuthorSetion = styled.section`
    padding: 15px 0;
`

const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`

function FeaturedAuthor(props) {
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
        <FeaturedAuthorSetion>
            <Container>
                {_featuredAuthor.author
                    ? (
                        <AuthorItem featuredAuthor={_featuredAuthor} />
                    ) : (
                        <Loader />
                    )
                }
            </Container>
        </FeaturedAuthorSetion>
    )
}

export default FeaturedAuthor;
