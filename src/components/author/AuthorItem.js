import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import featuredImage from "../../assets/images/temp/consoles.jpg";

function AuthorItem(props) {
    const { author, posts } = props.featuredAuthor;
    const [_authorData, _setAuthorData] = useState(author);
    const [_authorPosts, _setAuthorPosts] = useState([...posts]);

    useEffect(() => {
        _setAuthorData(author);
        _setAuthorPosts([...posts]);
    }, [author, posts]);

    return (
        <div className="featured-author__wrap">
            <div className="featured-author__info">
                <h2>
                    <Link to={`/author-details/${_authorData.id}`}>
                        {_authorData.fname} {_authorData.lname}
                    </Link> | {_authorData.team}
                </h2>
            </div>
            <ul className="featured-author__posts">
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
            </ul>
        </div>
    )
}

export default AuthorItem;
