import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import featuredImage from "../../assets/images/temp/consoles.jpg";

const AuthorWrap = styled.div`
    padding: 0 15px;
`

const AuthorInfo = styled.div`
    margin-bottom: 15px;
`

const AuthorPosts = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
        flex: 1 0 100%;
        margin-bottom: 15px;
        @media (min-width: 768px) {
            flex: 0 0 32%;
        }
    }
    &::after {
        content: "";
        flex: 0 0 32%;
    }
`

function AuthorItem(props) {
    const { author, posts } = props.featuredAuthor;
    const [_authorData, _setAuthorData] = useState(author);
    const [_authorPosts, _setAuthorPosts] = useState([...posts]);

    useEffect(() => {
        _setAuthorData(author);
        _setAuthorPosts([...posts]);
    }, [author, posts]);

    return (
        <AuthorWrap>
            <AuthorInfo>
                <h2>
                    <Link to={`/author-details/${_authorData.id}`}>
                        {_authorData.fname} {_authorData.lname}
                    </Link> | {_authorData.team}
                </h2>
            </AuthorInfo>
            <AuthorPosts>
            {
                _authorPosts.length > 0
                ? (
                    _authorPosts.map((post) => {
                        return (
                            <li>
                                <div>
                                    <Link to={`/article-details/${post.id}`}>
                                        <img src={ post.fields.image ? post.fields.image[0].url : `${featuredImage}` } alt="article"/>
                                    </Link>
                                </div>
                                <div>
                                    <h3>
                                        <Link to={`/article-details/${post.id}`} >{post.fields.title}</Link>
                                    </h3>
                                </div>
                            </li>
                        );
                    })
                ) : ('')
            }
            </AuthorPosts>
        </AuthorWrap>
    )
}

export default AuthorItem;
