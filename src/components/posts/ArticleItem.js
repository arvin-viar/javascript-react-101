
import { Link } from "react-router-dom";
import Moment from "moment";
import featuredImage from "../../assets/images/temp/consoles.jpg";

function PostArticle({id, title, body, dateCreated, authorFirstname, authorLastname, authorTeam, image}) {
    return (
        <article className="articles__item">
            <div className="articles__item-imgwrap">
                <Link to={`/article-details/${id}`}>
                    <img src={ image ? image.url : `${featuredImage}` } alt="article"/>
                </Link>
                <div className="articles__item-posted">
                    <div>
                        <span className="day">{Moment(dateCreated).format('DD')}</span>
                    </div>
                    <div>
                        <span className="month">{Moment(dateCreated).format('MMM')}</span>
                        <span className="year">{Moment(dateCreated).format('yyyy')}</span>
                    </div>
                </div>
            </div>
            <div className="articles__item-details">
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
        </article>
    )
}

export default PostArticle;
