import { Link } from "react-router-dom";
import styled from "styled-components";
import authorImage from "../../assets/images/default/author.png";

const ArticleAuthorWrap = styled.header`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding: 20px;
    background: #e4e9f1;
    .author-pic {
        width: 100%;
        margin-bottom: 15px;
        @media (min-width: 768px) {
            max-width: 180px;
            margin-right: 15px;
        }
    }
    .author-details {
        display: flex;
        flex-direction: column;
    }
    .author-info {
        margin-bottom: 10px;
        font-size: 26px;
        span {
            display: block;
            text-align: center;
            @media (min-width: 768px) {
                display: initial;
                text-align: left;
                padding: 0 10px;
                &:first-child {
                    padding-left: 0;
                    border-right: 1px solid #212529;
                }
            }
        }
    }
    .author-description {
        font-size: 14px;
        line-height: 1.3;
    }
    @media (min-width: 768px) {
        flex-direction: row;
    }
`

function ArticleAuthor(props) {
    const { id = "", fname = [], lname = [], team = [], about = [], picture = authorImage } = props;
    return (
        <ArticleAuthorWrap>
            <img className="author-pic" src={picture} alt="author dp" />
            <div className="author-details">
                <p className="author-info">
                    <span>
                        <Link to={`/author-details/${id}`}>{fname} {lname}</Link>
                    </span>
                    <span>{team}</span>
                </p>
                <p className="author-description">
                    {about.split('\n').map(function(item, key) {
                        return (
                            <span key={key}>
                            {item}
                            <br/>
                            </span>
                        )
                    })}
                </p>
            </div>
        </ArticleAuthorWrap>
    )
}

export default ArticleAuthor;
