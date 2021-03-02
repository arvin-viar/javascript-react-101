
import { Link } from "react-router-dom";
import Moment from "moment";
import styled from "styled-components";
import featuredImage from "../../assets/images/temp/consoles.jpg";

const ArticleItem = styled.article`
    flex: 0 0 100%;
    margin-bottom: 30px;
    .item-imgwrap {
        position: relative;
        margin-bottom: 15px;
        img {
            width: 100%;
            border-radius: 5px;
        }
    }
    .item-posted {
        display: flex;
        position: absolute;
        left: 10px;
        bottom: 0;
        padding: 5px;
        color: #e9ebf8;
        background: #0466c8;
        border-radius: 5px;
        &::after {
            position: absolute;
            bottom: -8px;
            left: 10px;
            content: '';
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 8px 8px 0 8px;
            border-color: #0466c8 transparent transparent transparent;
        }
        & > div {
            display: flex;
            flex-direction: column;
        }
        span {
            display: block;
            font-size: 14px;
            line-height: 1;
            &.day {
                margin-right: 8px;
                font-size: 30px;
            }
        }
    }
    .item-details {
        padding: 0 10px 10px;
        h1 {
            margin-bottom: 10px;
            font-size: 22px;
            text-transform: capitalize;
        }
        p {
            margin-bottom: 10px;
            color: #5c677d;
            font-size: 14px;
        }
        a {
            color: #5c677d;
            font-size: 12px;
            text-transform: uppercase;
        }
    }
    @media (min-width: 768px) {
        flex: 0 0 49%;
    }
    @media (min-width: 1024px) {
        flex: 0 0 32%;
    }
`

function PostArticle({id, title, body, dateCreated, authorFirstname, authorLastname, authorTeam, image}) {
    return (
        <ArticleItem>
            <div className="item-imgwrap">
                <Link to={`/article-details/${id}`}>
                    <img src={ image ? image.url : `${featuredImage}` } alt="article"/>
                </Link>
                <div className="item-posted">
                    <div>
                        <span className="day">{Moment(dateCreated).format('DD')}</span>
                    </div>
                    <div>
                        <span className="month">{Moment(dateCreated).format('MMM')}</span>
                        <span className="year">{Moment(dateCreated).format('yyyy')}</span>
                    </div>
                </div>
            </div>
            <div className="item-details">
                <Link to={`/article-details/${id}`}>
                    <h1>{title}</h1>
                </Link>
                <p>
                    <Link to={`/author-details/${id}`}>
                        {authorFirstname} {authorLastname}
                    </Link>
                </p>
                <p>
                    {body}
                </p>
                <Link to={`/article-details/${id}`}>Read More</Link>
            </div>
        </ArticleItem>
    )
}

export default PostArticle;
