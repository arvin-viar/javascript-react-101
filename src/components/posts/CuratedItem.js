import { Link } from "react-router-dom";
import defaultImage from "../../assets/images/temp/consoles.jpg";

function CuratedItem(props) {
    const { post } = props;
    return (
        <li className="curated__item">
            <div className="curated__item-wrap">
                <Link to={`/article-details/${post.id}`}>
                    <img className="curated__item-image" src={ post.image ? post.image.url : `${defaultImage}` } alt="curated pic" />
                </Link>
                <div className="curated__item-details">
                    <h3><Link to={`/article-details/${post.id}`}>{post.title}</Link></h3>
                    <p>
                        {post.body.length > 150 ? `${post.body.slice(0, 150)}...` : post.body}
                    </p>
                </div>
            </div>
        </li>
    )
}

export default CuratedItem;
