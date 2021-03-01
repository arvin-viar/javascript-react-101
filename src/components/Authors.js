import { useState, useEffect } from "react";

function Authors(props) {
    const { authors, posts } = props;
    const [_authorsData, _setAuthorsData] = useState([]);

    useEffect(() => {
        if (authors.length > 0 && posts.length > 0) {
            console.log(authors);
            console.log(posts);
            const data = authors.map(author => {
                const authorId = author.id;
                const auhtorImage = author.fields.displayPicture[0];
                const authorPosts = posts.filter(post => {
                    const postAuthorId = post.fields.authorId[0];
                    return postAuthorId === authorId;
                });
                return {
                    author: {
                        id: authorId,
                        fname: author.fields.firstname,
                        lname: author.fields.lastname,
                        picture: auhtorImage,
                        about: author.fields.about,
                        team: author.fields.team,
                        posts: authorPosts
                    }
                }
            });
            _setAuthorsData(data);
        }
    }, [authors, posts]);

    return (
        <>
            <h1>Authors</h1>
            {_authorsData.length > 0 
                ? (
                    <p>May Authors</p>
                ) : (
                    <p>Wala Authors</p>
                )
            }
        </>
    )
}

export default Authors;
