import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Details from "../components/posts/Details";

const Main = styled.main`
    
`

function ArticleDetailsPage(props) {
    const { posts } = props;
    const { postId } = useParams();
    const [_record, _setRecord] = useState({
        id: null,
        fields: []
    });

    useEffect(() => {
        const postData = posts.filter(post => {
            return postId === post.id;
        });
        _setRecord(postData[0]);
    }, [posts, postId]);

    return (
        <Main>
            <Details type="article" post={_record} />
        </Main>
    );
}

export default ArticleDetailsPage;
