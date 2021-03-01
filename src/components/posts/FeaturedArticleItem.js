import { Link } from "react-router-dom";
import Moment from "moment";
import styled from "styled-components";
import featuredImage from "../../assets/images/temp/consoles.jpg";

const FeaturedItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    & > * {
        flex: 1 1 0;
    }
    &:last-child {
        margin-bottom: 0;
    }
    .featured__item-imgwrap {
        position: relative;
        img {
            display: block;
        }
        &:hover {
            .featured__item-socials {
                display: block;
            }
        }
    }
    .featured__item-socials {
        display: none;
        position: absolute;
        bottom: 5px;
        left: 5px;
        @media (min-width: 768px) {
            bottom: 20px;
            left: 20px;
        }
    }
    .featured__item-social {
        display: block;
        width: 50px;
        height: 50px;
        float: left;
        text-indent: -9999px;
        background: url(../../../assets/images/socials-sprite2.png);
        &.social--facebook {
            background-position: 0 50px;
        }
        &.social--facebook:hover,
        &.social--facebook:focus {
            background-position: 0 100px;
        }
        &.social--twitter {
            background-position: 150px 50px;
        }
        &.social--twitter:hover,
        &.social--twitter:focus {
            background-position: 151px 100px;
        }
        &.social--youtube {
            background-position: 50px 50px;
        }
        &.social--youtube:hover,
        &.social--youtube:focus {
            background-position: 50px 100px;
        }
        &.social--pinterest {
            background-position: 302px 50px;
        }
        &.social--pinterest:hover,
        &.social--pinterest:focus {
            background-position: 302px 100px;
        }
    }
    .featured__item-details {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 15px;
        font-size: 14px;
        background:#e9ebf8;
        h1 {
            margin-bottom: 10px;
            font-size: 22px;
            font-weight: 700;
            text-transform: capitalize;
            @media (min-width: 768px) {
                font-size: 32px;
            }
        }
        p {
            color: #333333;
        }
        &-category {
            margin-bottom: 15px;
            font-size: 16px;
            text-transform: uppercase;
        }
        &-author,
        &-body {
            margin-bottom: 15px;
        }
        &-quote {
            position: relative;
            margin: 0;
            padding: 18px 28px;
            color: #333;
            text-align: justify;
        }
        @media (min-width: 768px) {
            padding: 15px 20px;
            background: none;
        }
    }
    @media (min-width: 768px) {
        flex-direction: row;
        margin-bottom: 30px;
        & > * {
            flex: 1 1 0;
        }
    }
`

function FeaturedArticleItem(props) {
    const { id, fields } = props;
    const { title, body, image, Created } = fields;
    const { authorId, authorFirstname, authorLastname, authorTeam } = fields;
    return (
        <FeaturedItem data-postid={id}>
            <figure className="featured__item-imgwrap">
                <Link to={`/article-details/${id}`} >
                    <img src={ image[0] ? image[0].url : `${featuredImage}` } alt="gaming consoles" />
                </Link>
                <div className="featured__item-socials">
                    <span className="featured__item-social social--facebook">Facebook</span>
                    <span className="featured__item-social social--twitter">Twitter</span>
                    <span className="featured__item-social social--youtube">Youtube</span>
                    <span className="featured__item-social social--pinterest">Pinterest</span>
                </div>
            </figure>
            <div className="featured__item-details">
                <div>
                    <p className="featured__item-details-category">Top Stories</p>
                    <Link to={`/article-details/${id}`} >
                        <h1>{title}</h1>
                    </Link>
                    <p className="featured__item-details-author">
                        <Link to={`/author-details/${authorId}`} >{authorFirstname[0]} {authorLastname[0]}</Link> | {authorTeam[0]}
                    </p>
                    <p className="featured__item-details-body">{body.length > 150 ? `${body.slice(0, 150)}...` : body}</p>
                </div>
                <p className="featured__item-details-posted">{Moment(Created).format('lll')}</p>
            </div>
        </FeaturedItem>
    )
}

export default FeaturedArticleItem;
