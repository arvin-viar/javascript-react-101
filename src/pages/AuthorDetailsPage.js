import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Details from "../components/posts/Details";

function AuthorDetailsPage(props) {
    const { authorId } = useParams();
    const { authors } = props;
    const [_record, _setRecord] = useState({
        id: null,
        fields: []
    });

    useEffect(() => {
        const _author = authors.filter(author => author.id === authorId);
        const data = {
            id: _author[0] ? _author[0].id : null,
            fields: _author[0] ? _author[0].fields : []
        };
        _setRecord(data);
    }, [authors]);

    return (
        <main>
            <Details type="author" post={_record}/>
        </main>
    );
}

export default AuthorDetailsPage;
