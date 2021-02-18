import Moment from "moment";
import featuredImage from "../../assets/images/temp/consoles.jpg";

function PostArticle({id, title, body, dateCreated, authorFirstname, authorLastname, authorTeam}) {
    return (
        <article className="articles__item">
            <div className="articles__item-imgwrap">
                <img src={featuredImage} alt="article"/>
                <div className="articles__item-posted">
                    <div>
                        <span className="day">{Moment(dateCreated).format('DD')}</span>
                    </div>
                    <div>
                        <span className="year">{Moment(dateCreated).format('yyyy')}</span>
                        <span className="month">{Moment(dateCreated).format('MMM')}</span>
                    </div>
                </div>
            </div>
            <div className="articles__item-details">
                <h1>{title}</h1>
                <p>
                    {body}
                </p>
                <a href="/">Read More</a>
            </div>
        </article>
    )
}

export default PostArticle;
