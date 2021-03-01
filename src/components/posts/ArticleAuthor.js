import { Link } from "react-router-dom";
import authorImage from "../../assets/images/author-dp.jpg";

function ArticleAuthor(props) {
    const { id = "", fname = [], lname = [], team = [], about = [], picture = [] } = props;
    return (
        <div className="article__author">
            <img className="article__author-pic" src={picture.url ? picture.url : `${authorImage}`} alt="author dp" />
            <div className="article__author-details">
                <p className="article__author-info">
                    <span>
                        <Link to={`/author-details/${id}`}>{fname} {lname}</Link>
                    </span>
                    <span>{team}</span>
                </p>
                <p className="article__author-description">
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
        </div>
    )
}

export default ArticleAuthor;
