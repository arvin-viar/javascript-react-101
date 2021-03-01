import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Details from "../components/posts/Details";

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
        <main>
            <Details type="article" post={_record} />
        </main>
    );
}

export default ArticleDetailsPage;
