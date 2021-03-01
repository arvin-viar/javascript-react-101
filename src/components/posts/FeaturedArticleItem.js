import { Link } from "react-router-dom";
import Moment from "moment";
import featuredImage from "../../assets/images/temp/consoles.jpg";

function FeaturedArticleItem(props) {
    const { id, fields } = props;
    const { title, body, image, Created } = fields;
    const { authorId, authorFirstname, authorLastname, authorTeam } = fields;
    return (
        <div className="featured__item" data-postid={id}>
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
        </div>
    )
}

export default FeaturedArticleItem;
