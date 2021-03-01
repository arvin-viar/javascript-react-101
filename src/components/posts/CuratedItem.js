import { Link } from "react-router-dom";
import styled from "styled-components";
import defaultImage from "../../assets/images/temp/consoles.jpg";

const CuratedPost = styled.li`
    margin-bottom: 20px;
    padding: 0 15px;
    box-sizing: border-box;
    .curated__item-wrap {
        position: relative;
        &::after {
            content: "";
            clear: both;
            display: table;
        }
        img {
            width: 100%;
        }
    }
    .curated__item-details {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 15px;
        background: rgba(6, 26, 64, 0.75);
        box-sizing: border-box;
        h3 {
            color: #ffffff;
        }
        p {
            display: none;
            color: #ffffff;
            @media (min-width: 768px) {
                display: block;
            }
        }
    }
    @media (min-width: 768px) {
        &:first-child {
            flex: 1 0 100%;
            margin-bottom: 30px;
        }
        margin-bottom: 0;
        padding: 0 15px;
        box-sizing: border-box;
        flex: 1 0 50%;
    }
`

function CuratedItem(props) {
    const { post } = props;
    return (
        <CuratedPost>
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
        </CuratedPost>
    )
}

export default CuratedItem;
