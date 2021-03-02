import { useState, useEffect } from "react";
import styled from "styled-components";
import CuratedItem from "./CuratedItem";
import Loader from "../Loader";

const CuratedSection = styled.section`
    position: relative;
    min-height: 300px;
    margin-bottom: 30px;
`

const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`

const CuratedList = styled.ul`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-wrap: wrap;
        flex-direction: row;
        padding: 15px 0;
    }
`

function CuratedPosts(props) {
    const { posts } = props;
    const [_posts, _setPosts] = useState(posts);

    useEffect(() => {
        _setPosts(posts);
    }, [posts]);

    return (
        <CuratedSection>
            <Container>
                {_posts && _posts.length > 0 
                    ? (
                        <CuratedList>
                        {
                            _posts.map((post) => <CuratedItem key={post.id} post={post} />)
                        }
                        </CuratedList>
                    ) 
                    : (
                        <Loader />
                    )
                }
            </Container>
        </CuratedSection>
    )
}

export default CuratedPosts;
